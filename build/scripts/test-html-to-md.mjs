/**
 * Extracts the Markdown source of a hand-written quiz from its HTML.
 *
 * The tests of the third year were written straight in HTML, one dialect per
 * batch, and never had a Markdown source. This script recovers it so the pair
 * matches the rest of the site: `*.md` is the source, `*.html` the artefact
 * regenerated with md2html.
 *
 * Five dialects live in the tree. They differ only in how they mark the right
 * answer, so that is what picks the parser:
 *
 *   A  `const answers = { q1: 'c' }`, or `{ q1: { answer, explanation } }`
 *   B  `<script>var answer_q1 = 'a';</script>` inside each block
 *   C  `<div class="question" data-correct="2">`
 *   D  `<div onclick="checkAnswer(this, true, 'q1')">`
 *   E  `<input ... data-content="1">` on the right option
 *
 * Usage:
 *
 *   node build/scripts/test-html-to-md.mjs <file.html> [...]
 *   node build/scripts/test-html-to-md.mjs --check <file.html> [...]
 *
 * `--check` reports without writing. Every question must end up with exactly
 * one right answer: anything else is an extraction bug, not a valid quiz, and
 * the script exits non-zero so a batch run cannot pass silently.
 *
 * `--allow-unmarked` writes anyway when the only complaint is a question with
 * no right answer. It exists for one file, `test_oficial_completo_ISE.html`,
 * where five of the 468 questions were published with `data-correct=""`: the
 * defect is in the source, not in the extraction, and those five are marked by
 * hand afterwards. Do not reach for it to silence a parser bug.
 *
 * @author Ismael Sallami Moreno
 */

import { readFileSync, writeFileSync } from "node:fs";
import { basename } from "node:path";

const DEFAULT_AUTHOR = "Ismael Sallami Moreno";
const DEFAULT_DEGREE = "Doble Grado en Ingeniería Informática y ADE";

/** Blocks that carry meaning HTML can express and Markdown cannot, inline. */
const RICH_BLOCK = /<(table|img|pre)\b/i;

const ENTITIES = {
  "&nbsp;": " ",
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&aacute;": "á",
  "&eacute;": "é",
  "&iacute;": "í",
  "&oacute;": "ó",
  "&uacute;": "ú",
  "&ntilde;": "ñ",
  "&Aacute;": "Á",
  "&Eacute;": "É",
  "&Iacute;": "Í",
  "&Oacute;": "Ó",
  "&Uacute;": "Ú",
  "&Ntilde;": "Ñ",
  "&uuml;": "ü",
  "&hellip;": "…",
  "&mdash;": "—",
  "&ndash;": "–",
  "&rarr;": "→",
  "&deg;": "°",
  "&euro;": "€",
};

/**
 * Turns HTML entities into the characters they stand for.
 *
 * @param {string} text
 * @returns {string}
 */
function decodeEntities(text) {
  let out = text;
  for (const [entity, char] of Object.entries(ENTITIES)) {
    out = out.split(entity).join(char);
  }
  return out
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)));
}

/**
 * Converts a fragment of question HTML into one line of Markdown.
 *
 * md2html joins every continuation line of an option into a single line and
 * drops blank lines inside a stem, so a table or an image written as Markdown
 * would not survive the round trip. Those blocks are therefore kept as raw
 * HTML collapsed onto one line: the converter runs markdown-it with
 * `html: true`, which passes them through untouched.
 *
 * @param {string} html Inner HTML of a stem or of an option.
 * @returns {string} A single line, safe for the md2html question format.
 */
function htmlToInlineMarkdown(html) {
  // Comments are not content, and md2html splits the document into sections on
  // `<!-- … -->`. One left inside a stem swallows the question that follows.
  // The second pass catches the unclosed ones, which the tree also has.
  let text = html.replace(/<!--[\s\S]*?-->/g, " ").replace(/<!--|-->/g, " ");

  if (RICH_BLOCK.test(text)) {
    // Keep the markup verbatim. Only the line breaks go, because the format
    // is line-based.
    return decodeEntities(text.replace(/\s*\n\s*/g, " ")).replace(/\s+/g, " ").trim();
  }

  text = text
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, inner) => "`" + inner.replace(/\s+/g, " ").trim() + "`")
    .replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, inner) => `**${inner.trim()}**`)
    .replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, __, inner) => `*${inner.trim()}*`)
    .replace(/<[^>]+>/g, " ");

  return decodeEntities(text).replace(/\s+/g, " ").trim();
}

/**
 * Removes the numbering the source printed by hand.
 *
 * md2html numbers the questions itself, and the option letters come from the
 * `<ol type="a">` it emits, so a leading "12." or "c)" would show up twice.
 *
 * @param {string} text
 * @param {"stem"|"option"} kind
 * @returns {string}
 */
function stripLeadingLabel(text, kind) {
  if (kind === "stem") {
    // Several batches wrap the whole stem, number included, in <strong>. That
    // is how the source styled a question, not emphasis, and leaving it turns
    // into a stray `**` at the end once the number goes.
    let plain = text.trim();
    const bold = /^\*\*([\s\S]*)\*\*$/.exec(plain);
    if (bold && !bold[1].includes("**")) plain = bold[1].trim();

    // A stem that carries a table or a figure keeps its HTML, so the number
    // can sit behind an opening tag. Skip the tag, drop the number, put the
    // tag back.
    text = plain;
    const wrapper = /^(<[a-z][^>]*>\s*)/i.exec(text);
    const head = wrapper ? wrapper[1] : "";
    const rest = text.slice(head.length);
    return (
      head +
      rest
        // The bold may wrap only the number, as in `<strong>1.</strong> texto`,
        // so the closing `**` has to go with it.
        .replace(/^\*{0,2}\s*\d+\s*[.)-]\s*\*{0,2}\s*/, "")
        .replace(/^\**\s*Pregunta\s+\d+\s*[:.]\s*/i, "")
    ).trim();
  }
  return text.replace(/^[a-hA-H]\s*[.)]\s+/, "").trim();
}

/**
 * Reads the inner HTML of every element whose opening tag matches, tracking
 * nesting so a `<div>` inside a `<div>` does not close it early.
 *
 * @param {string} html
 * @param {RegExp} openTag Must be global and match the whole opening tag.
 * @param {string} tagName
 * @returns {{ open: string, inner: string }[]}
 */
function collectBlocks(html, openTag, tagName) {
  const open = new RegExp(`<${tagName}\\b`, "gi");
  const close = new RegExp(`</${tagName}\\s*>`, "gi");
  const blocks = [];
  let match;

  openTag.lastIndex = 0;
  while ((match = openTag.exec(html)) !== null) {
    const bodyStart = match.index + match[0].length;
    let depth = 1;
    let cursor = bodyStart;

    while (depth > 0) {
      open.lastIndex = cursor;
      close.lastIndex = cursor;
      const nextOpen = open.exec(html);
      const nextClose = close.exec(html);
      if (!nextClose) break;
      if (nextOpen && nextOpen.index < nextClose.index) {
        depth += 1;
        cursor = nextOpen.index + nextOpen[0].length;
      } else {
        depth -= 1;
        cursor = nextClose.index + nextClose[0].length;
        if (depth === 0) {
          blocks.push({ open: match[0], inner: html.slice(bodyStart, nextClose.index) });
        }
      }
    }
  }
  return blocks;
}

/** @returns {"A"|"B"|"C"|"D"|"E"|null} */
function detectVariant(html) {
  if (/var\s+answer_q\d+/.test(html)) return "B";
  if (/checkAnswer\(this,\s*(true|false)/.test(html)) return "D";
  if (/<div[^>]*class="question"[^>]*data-correct=/.test(html)) return "C";
  if (/(const|var|let)\s+answers\s*=/.test(html)) return "A";
  if (/data-content="[01]"/.test(html)) return "E";
  return null;
}

/**
 * Parses `const answers = { ... }`.
 *
 * Four shapes live in the tree and one file uses only one of them:
 *
 *   q1: 'a'                                 bare value, quoted
 *   q1: 3                                   bare value, a number
 *   q1: { answer: 3 }                       wrapped, no explanation
 *   q1: { answer: 'c', explanation: '…' }   wrapped, with one
 *
 * @param {string} html
 * @returns {Map<string, {answer: string, explanation: string}>}
 */
function parseAnswersObject(html) {
  const start = html.search(/(const|var|let)\s+answers\s*=\s*\{/);
  const answers = new Map();
  if (start === -1) return answers;

  const body = html.slice(start);
  const entry = /["']?(q\d+)["']?\s*:\s*(\{[^{}]*\}|["'][^"']*["']|\d+)/g;
  let match;

  while ((match = entry.exec(body)) !== null) {
    const [, id, value] = match;
    if (answers.has(id)) continue;

    if (value.startsWith("{")) {
      const answer = /answer\s*:\s*(?:["']([^"']*)["']|(\d+))/.exec(value);
      const explanation = /explanation\s*:\s*["']([\s\S]*?)["']\s*$/.exec(value.replace(/\}\s*$/, ""));
      if (!answer) continue;
      answers.set(id, {
        answer: answer[1] !== undefined ? answer[1] : answer[2],
        explanation: explanation ? decodeEntities(explanation[1]).trim() : "",
      });
    } else {
      answers.set(id, { answer: value.replace(/^["']|["']$/g, ""), explanation: "" });
    }
  }
  return answers;
}

/**
 * Reads the options of a question, whichever of the two layouts it uses:
 * a flat run of `<input>` followed by loose text, or a list of `<li><label>`.
 *
 * @param {string} inner Inner HTML of the question block.
 * @returns {{ text: string, value: string }[]}
 */
function readOptions(inner) {
  const listItems = collectBlocks(inner, /<li\b[^>]*>/gi, "li");
  if (listItems.length > 0) {
    return listItems
      .map((item) => {
        const value = /value="([^"]*)"/.exec(item.inner);
        const text = htmlToInlineMarkdown(item.inner.replace(/<input[^>]*>/gi, ""));
        return { text: stripLeadingLabel(text, "option"), value: value ? value[1] : "" };
      })
      .filter((opt) => opt.text.length > 0);
  }

  // Flat layout: the text of an option runs from its <input> to the next one.
  const options = [];
  const inputs = [...inner.matchAll(/<input[^>]*type="(?:radio|checkbox)"[^>]*>/gi)];
  inputs.forEach((input, i) => {
    const from = input.index + input[0].length;
    const to = i + 1 < inputs.length ? inputs[i + 1].index : inner.length;
    const value = /value="([^"]*)"/.exec(input[0]);
    const text = stripLeadingLabel(htmlToInlineMarkdown(inner.slice(from, to)), "option");
    if (text) options.push({ text, value: value ? value[1] : "" });
  });
  return options;
}

/**
 * Reads the stem: the first paragraph or heading of the block, minus options.
 *
 * @param {string} inner
 * @returns {string}
 */
function readStem(inner) {
  const withoutOptions = inner
    .replace(/<ol\b[\s\S]*?<\/ol>/gi, "")
    .replace(/<ul\b[\s\S]*?<\/ul>/gi, "")
    .replace(/<div[^>]*class="options"[\s\S]*?<\/div>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");

  const heading = /<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/i.exec(withoutOptions);
  if (heading) return stripLeadingLabel(htmlToInlineMarkdown(heading[1]), "stem");

  const firstInput = withoutOptions.search(/<input\b/i);
  const scope = firstInput === -1 ? withoutOptions : withoutOptions.slice(0, firstInput);
  return stripLeadingLabel(htmlToInlineMarkdown(scope), "stem");
}

/**
 * Marks the right option.
 *
 * Two conventions coexist inside the same dialect. When `value` is 0/1 the
 * flag is on the option itself; otherwise `answers` names the value of the
 * right one, by letter or by index.
 *
 * @param {{text: string, value: string}[]} options
 * @param {{answer: string}|undefined} answer
 * @returns {number[]} Indexes of the right options.
 */
function resolveCorrect(options, answer) {
  const flags = options.map((o) => o.value);
  const isFlagged = flags.every((v) => v === "0" || v === "1") && flags.includes("1");
  if (isFlagged) {
    return options.map((o, i) => (o.value === "1" ? i : -1)).filter((i) => i >= 0);
  }
  if (!answer) return [];

  const wanted = String(answer.answer).trim().toLowerCase();
  const byValue = options.map((o, i) => (o.value.toLowerCase() === wanted ? i : -1)).filter((i) => i >= 0);
  if (byValue.length > 0) return byValue;

  const asIndex = Number(wanted);
  if (Number.isInteger(asIndex) && asIndex >= 0 && asIndex < options.length) return [asIndex];

  const asLetter = wanted.charCodeAt(0) - "a".charCodeAt(0);
  if (asLetter >= 0 && asLetter < options.length) return [asLetter];
  return [];
}

/** Dialect A: the right answers live in one object at the end of the file. */
function parseA(html) {
  const answers = parseAnswersObject(html);
  return collectBlocks(html, /<div[^>]*class="question"[^>]*>/gi, "div").map((block) => {
    const id = /id="(q\d+)"/.exec(block.open);
    const answer = id ? answers.get(id[1]) : undefined;
    const options = readOptions(block.inner);
    return {
      stem: readStem(block.inner),
      options,
      correct: resolveCorrect(options, answer),
      explanation: answer ? answer.explanation : "",
    };
  });
}

/** Dialect B: each block carries its own `var answer_qN`. */
function parseB(html) {
  return collectBlocks(html, /<div[^>]*class="question-block"[^>]*>/gi, "div").map((block) => {
    const answer = /var\s+answer_(q\d+)\s*=\s*['"]([^'"]*)['"]/.exec(block.inner);
    const options = readOptions(block.inner);
    return {
      stem: readStem(block.inner),
      options,
      correct: resolveCorrect(options, answer ? { answer: answer[2] } : undefined),
      explanation: "",
    };
  });
}

/**
 * Dialect C: `data-correct` names the right option, but not the same way in
 * every file. CF2 and ISE number their options from 0 and the attribute is an
 * index; FIS numbers them from 1 and the attribute is the `value`. Matching
 * the value first covers both, and matters: read as an index, every FIS
 * question would silently point at the option below the right one.
 */
function parseC(html) {
  return collectBlocks(html, /<div[^>]*class="question"[^>]*data-correct="[^"]*"[^>]*>/gi, "div").map((block) => {
    const raw = /data-correct="([^"]*)"/.exec(block.open);
    const options = readOptions(block.inner);
    const wanted = raw ? raw[1].split(",").map((n) => n.trim()).filter(Boolean) : [];

    const byValue = options.map((o, i) => (wanted.includes(o.value) ? i : -1)).filter((i) => i >= 0);
    const correct = byValue.length > 0
      ? byValue
      : wanted.map(Number).filter((n) => Number.isInteger(n) && n >= 0 && n < options.length);

    return { stem: readStem(block.inner), options, correct, explanation: "" };
  });
}

/**
 * Dialect D: the flag is the second argument of the inline onclick, and the
 * stem is whatever paragraph precedes the block of options. The options sit in
 * nested `<div>`, so they need the depth-aware reader.
 */
function parseD(html) {
  const body = html.replace(/<style[\s\S]*?<\/style>/gi, "").replace(/<script[\s\S]*?<\/script>/gi, "");
  const groups = collectBlocks(body, /<div[^>]*class="options"[^>]*>/gi, "div");

  return groups.map((group) => {
    const before = body.slice(0, body.indexOf(group.inner));
    const stemMatch = [...before.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].pop();
    const stemHtml = stemMatch ? stemMatch[1] : "";
    // Some questions show a figure between the paragraph and the options.
    const trailing = before.slice(stemMatch ? stemMatch.index + stemMatch[0].length : before.length);
    const figure = /<img[^>]*>/i.exec(trailing);

    const options = [];
    const correct = [];
    const optionRe = /<div[^>]*onclick="checkAnswer\(this,\s*(true|false)[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
    let match;
    while ((match = optionRe.exec(group.inner)) !== null) {
      const text = stripLeadingLabel(htmlToInlineMarkdown(match[2]), "option");
      if (!text) continue;
      if (match[1] === "true") correct.push(options.length);
      options.push({ text, value: "" });
    }

    let stem = stripLeadingLabel(htmlToInlineMarkdown(stemHtml), "stem");
    if (figure) stem = `${stem} ${htmlToInlineMarkdown(figure[0])}`.trim();
    return { stem, options, correct, explanation: "" };
  });
}

/** Dialect E: `data-content="1"` sits on the right option. */
function parseE(html) {
  const rows = collectBlocks(html, /<ul[^>]*class="radio-list"[^>]*>/gi, "ul");

  return rows.map((row) => {
    const before = html.slice(0, html.indexOf(row.inner));
    const stemMatch = [...before.matchAll(/<(?:p|div)[^>]*(?:class="question-content")?[^>]*>([\s\S]*?)<\/(?:p|div)>/gi)].pop();

    const options = [];
    const correct = [];
    for (const item of collectBlocks(row.inner, /<li\b[^>]*>/gi, "li")) {
      const input = /<input[^>]*>/i.exec(item.inner);
      const text = stripLeadingLabel(htmlToInlineMarkdown(item.inner.replace(/<input[^>]*>/gi, "")), "option");
      if (!text) continue;
      if (input && /data-content="1"/.test(input[0])) correct.push(options.length);
      options.push({ text, value: "" });
    }
    return {
      stem: stemMatch ? stripLeadingLabel(htmlToInlineMarkdown(stemMatch[1]), "stem") : "",
      options,
      correct,
      explanation: "",
    };
  });
}

const PARSERS = { A: parseA, B: parseB, C: parseC, D: parseD, E: parseE };

/**
 * Reads the metadata md2html shows above the questions.
 *
 * @param {string} html
 * @param {string} file
 * @returns {{title: string, author: string, degree: string}}
 */
function readMeta(html, file) {
  const h1 = /<h1[^>]*>([\s\S]*?)<\/h1>/i.exec(html);
  const title = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
  const author = /class="author[^"]*"[^>]*>([\s\S]*?)</i.exec(html);

  const line = author ? decodeEntities(author[1]).replace(/\s+/g, " ").trim() : "";
  const name = /Autor:\s*([^|]+)/i.exec(line);
  const degree = /Titulación:\s*(.+)$/i.exec(line);

  return {
    title: htmlToInlineMarkdown(h1 ? h1[1] : title ? title[1] : basename(file, ".html")),
    author: name ? name[1].trim() : DEFAULT_AUTHOR,
    degree: degree ? degree[1].trim() : DEFAULT_DEGREE,
  };
}

/**
 * Renders the questions in the format md2html parses.
 *
 * @param {{title: string, author: string, degree: string}} meta
 * @param {{stem: string, options: {text: string}[], correct: number[], explanation: string}[]} questions
 * @param {string} description
 * @returns {string}
 */
function renderMarkdown(meta, questions, description) {
  const lines = [`# ${meta.title}`, "", `* **Autor:** ${meta.author}`];
  if (description) lines.push(`* **Descripción:** ${description}`);
  lines.push(`* **Titulación:** ${meta.degree}`, "");

  questions.forEach((question, i) => {
    lines.push(`${i + 1}. ${question.stem}`, "");
    for (let j = 0; j < question.options.length; j += 1) {
      lines.push(`    - (${question.correct.includes(j) ? "x" : " "}) ${question.options[j].text}`);
    }
    if (question.explanation) lines.push("", `    > ${question.explanation}`);
    lines.push("");
  });

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

/**
 * Extracts one file and reports what came out.
 *
 * @param {string} file
 * @param {boolean} write
 * @returns {{ok: boolean, questions: number, problems: string[]}}
 */
function convert(file, write, allowUnmarked) {
  const html = readFileSync(file, "utf8");
  const variant = detectVariant(html);
  if (!variant) return { ok: false, questions: 0, problems: ["dialecto no reconocido"] };

  const questions = PARSERS[variant](html).filter((q) => q.stem && q.options.length > 0);
  const problems = [];
  let unmarked = 0;

  questions.forEach((question, i) => {
    if (question.correct.length === 0) {
      unmarked += 1;
      problems.push(`pregunta ${i + 1} sin correcta`);
    }
    if (question.options.length < 2) problems.push(`pregunta ${i + 1} con ${question.options.length} opción`);
  });
  if (questions.length === 0) problems.push("cero preguntas");

  const meta = readMeta(html, file);
  const markdown = renderMarkdown(meta, questions, "");
  const target = file.replace(/\.html$/, ".md");
  const onlyUnmarked = problems.length > 0 && problems.length === unmarked;
  if (write && (problems.length === 0 || (allowUnmarked && onlyUnmarked))) {
    writeFileSync(target, markdown, "utf8");
  }

  const withExplanation = questions.filter((q) => q.explanation).length;
  const label = `${variant}  ${String(questions.length).padStart(4)} preg  ${String(withExplanation).padStart(4)} expl`;
  const status = problems.length === 0 ? "ok  " : "FALLO";
  process.stdout.write(`${status} ${label}  ${file}\n`);
  for (const problem of problems.slice(0, 5)) process.stdout.write(`        ${problem}\n`);
  if (problems.length > 5) process.stdout.write(`        … y ${problems.length - 5} más\n`);

  return { ok: problems.length === 0, questions: questions.length, problems };
}

const args = process.argv.slice(2);
const write = !args.includes("--check");
const allowUnmarked = args.includes("--allow-unmarked");
const files = args.filter((a) => !a.startsWith("--"));

if (files.length === 0) {
  process.stderr.write("uso: node build/scripts/test-html-to-md.mjs [--check] [--allow-unmarked] <file.html> …\n");
  process.exit(2);
}

let failed = 0;
let total = 0;
for (const file of files) {
  const result = convert(file, write, allowUnmarked);
  if (!result.ok) failed += 1;
  total += result.questions;
}
process.stdout.write(`\n${files.length} ficheros, ${total} preguntas, ${failed} con problemas\n`);
process.exit(failed === 0 ? 0 : 1);
