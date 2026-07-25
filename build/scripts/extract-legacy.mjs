/**
 * One-shot migration: turns the hand written `courses/*.html` pages into
 * content data files under `content/sections/doble-grado/pages/`.
 *
 * The legacy pages hold 59 subjects and 171 links. Retyping them by hand would
 * introduce errors, so this script parses the markup instead. It runs once and
 * is deleted after the migration is verified.
 *
 * Usage: node build/scripts/extract-legacy.mjs
 *
 * @author Ismael Sallami Moreno
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const OUT_DIR = resolve(ROOT, "content/sections/doble-grado/pages");

/** Legacy file name -> new URL slug and ordinal. */
const COURSES = [
  { file: "first", slug: "primero", index: "01", title: "Primer", outline: "Curso" },
  { file: "second", slug: "segundo", index: "02", title: "Segundo", outline: "Curso" },
  { file: "third", slug: "tercero", index: "03", title: "Tercer", outline: "Curso" },
  { file: "fourth", slug: "cuarto", index: "04", title: "Cuarto", outline: "Curso" },
  { file: "fifth", slug: "quinto", index: "05", title: "Quinto", outline: "Curso" },
];

const ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": " ",
};

/**
 * Turns HTML entities back into characters and collapses whitespace.
 * @param {string} html
 * @returns {string}
 */
function decode(html) {
  return html
    .replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&nbsp;/g, (m) => ENTITIES[m])
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Rewrites relative resource paths to absolute site paths.
 * The legacy pages mix "/Subjects/..." and "./../Subjects/..." for the same
 * kind of file. Everything becomes absolute so links work from any depth.
 * @param {string} href
 * @returns {string}
 */
function normalizeHref(href) {
  if (/^https?:\/\//.test(href) || href.startsWith("#")) return href;
  return href.replace(/^\.\/\.\.\//, "/").replace(/^\.\.\//, "/");
}

/**
 * Reads every `<li>` of a resource list and folds it into labelled blocks.
 * A `res-group` item opens a new block; rows and notes fill the current one.
 * @param {string} listHtml inner HTML of `<ul class="res-list">`
 * @returns {import("../../content/types.d.ts").Block[]}
 */
function parseBlocks(listHtml) {
  const blocks = [];
  let current = { resources: [] };

  const items = listHtml.match(/<li\b[\s\S]*?<\/li>/g) ?? [];

  for (const item of items) {
    const group = item.match(/class="res-group">([\s\S]*?)<\/li>/);
    if (group) {
      if (current.resources.length > 0 || current.label) blocks.push(current);
      current = { label: decode(group[1]), resources: [] };
      continue;
    }

    const note = item.match(/class="res-note">([\s\S]*?)<\/li>/);
    if (note) {
      current.resources.push({ name: decode(note[1]), note: true });
      continue;
    }

    if (/class="res-empty"/.test(item)) continue; // rendered by the template

    const row = item.match(/class="res-row"\s+href="([^"]*)"/);
    if (!row) continue;

    const name = item.match(/class="res-name">([\s\S]*?)<\/span>/);
    const tag = item.match(/class="res-tag">([\s\S]*?)<\/span>/);
    if (!name || !tag) throw new Error(`Row without name or tag:\n${item}`);

    current.resources.push({
      name: decode(name[1]),
      href: normalizeHref(row[1]),
      kind: decode(tag[1]).replace("GUÍA", "GUIA"),
    });
  }

  if (current.resources.length > 0 || current.label) blocks.push(current);
  return blocks;
}

/**
 * Parses one legacy course page into a Page object.
 * @param {string} html
 * @param {typeof COURSES[number]} course
 * @returns {import("../../content/types.d.ts").Page}
 */
function parsePage(html, course) {
  const meta = [...html.matchAll(/<p class="page-sub">([\s\S]*?)<\/p>/g)]
    .flatMap((m) => [...m[1].matchAll(/<span>([\s\S]*?)<\/span>/g)])
    .map((m) => decode(m[1]));

  const groups = [];
  const semesters = html.match(/<section class="semester">[\s\S]*?<\/section>/g) ?? [];

  for (const semester of semesters) {
    const index = semester.match(/class="sem-num">([\s\S]*?)<\/span>/);
    const name = semester.match(/class="sem-name">([\s\S]*?)<\/h2>/);
    if (!index || !name) throw new Error(`Semester without heading in ${course.file}`);

    const entries = [];
    const cards = semester.match(/<article class="subject-card"[\s\S]*?<\/article>/g) ?? [];

    for (const card of cards) {
      const code = card.match(/class="subj-code">([\s\S]*?)<\/span>/);
      const subject = card.match(/class="subj-name">([\s\S]*?)<\/h3>/);
      const list = card.match(/<ul class="res-list">([\s\S]*?)<\/ul>/);
      if (!code || !subject) throw new Error(`Card without heading in ${course.file}`);

      entries.push({
        code: decode(code[1]),
        name: decode(subject[1]),
        blocks: list ? parseBlocks(list[1]) : [],
      });
    }

    groups.push({ index: decode(index[1]), name: decode(name[1]), entries });
  }

  return {
    slug: course.slug,
    index: course.index,
    title: course.title,
    titleOutline: course.outline,
    meta,
    groups,
  };
}

/**
 * Serializes a value as readable JavaScript source.
 * `JSON.stringify` would quote every key; this keeps the data files easy to
 * edit by hand, which is the whole point of the migration.
 * @param {unknown} value
 * @param {number} depth
 * @returns {string}
 */
function toSource(value, depth = 0) {
  const pad = "  ".repeat(depth);
  const padInner = "  ".repeat(depth + 1);

  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    const items = value.map((v) => padInner + toSource(v, depth + 1));
    return `[\n${items.join(",\n")},\n${pad}]`;
  }

  if (value && typeof value === "object") {
    const keys = Object.keys(value);
    if (keys.length === 0) return "{}";
    const parts = keys.map((k) => `${padInner}${k}: ${toSource(value[k], depth + 1)}`);
    return `{\n${parts.join(",\n")},\n${pad}}`;
  }

  if (typeof value === "string") return JSON.stringify(value);
  return String(value);
}

/**
 * Writes a page data file.
 * @param {import("../../content/types.d.ts").Page} page
 * @param {typeof COURSES[number]} course
 */
function writePage(page, course) {
  const subjects = page.groups.reduce((n, g) => n + g.entries.length, 0);
  const source = `/**
 * ${page.title} ${page.titleOutline} - Doble Grado en Ingenieria Informatica y ADE.
 *
 * ${subjects} subjects across ${page.groups.length} semesters.
 * Add a subject by pushing an entry into the matching group.
 *
 * @author Ismael Sallami Moreno
 * @type {import("../../../types.d.ts").Page}
 */
export default ${toSource(page)};
`;
  writeFileSync(resolve(OUT_DIR, `${course.slug}.mjs`), source, "utf8");
}

function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  let entries = 0;
  let resources = 0;

  for (const course of COURSES) {
    const html = readFileSync(resolve(ROOT, "courses", `${course.file}.html`), "utf8");
    const page = parsePage(html, course);
    writePage(page, course);

    for (const group of page.groups) {
      entries += group.entries.length;
      for (const entry of group.entries) {
        for (const block of entry.blocks) {
          resources += block.resources.filter((r) => !r.note).length;
        }
      }
    }
    console.log(`  ${course.file}.html -> ${course.slug}.mjs`);
  }

  console.log(`\n${entries} entries, ${resources} linked resources`);
  console.log("Expected: 59 entries, 171 linked resources");
}

main();
