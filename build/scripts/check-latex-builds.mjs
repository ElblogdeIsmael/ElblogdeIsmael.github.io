/**
 * Builds every LaTeX document under `Subjects/` and reports which ones fail.
 *
 * Nobody had checked this. Broken documents surfaced one at a time and by
 * accident: two files the build needed were missing from git, one subject
 * included eleven PDFs that earlier phases had removed, another asked for
 * `P1.pdf` when the file is `p1.pdf`. A published PDF can sit there for a year
 * unable to be regenerated and nothing says so.
 *
 * Every document is compiled into a directory OUTSIDE the repository, so a run
 * never overwrites a PDF the site serves. Comparing a fresh build against the
 * published artifact is a separate, deliberate step.
 *
 * Scope: the root documents, meaning every `.tex` holding a `\documentclass`.
 * The eleven subjects of fourth year also have a pandoc step that turns
 * `src/*.md` into their root `.tex`; that one is `make -C Subjects/Fourth`.
 *
 * Usage:
 *   node build/scripts/check-latex-builds.mjs            # build all, report
 *   node build/scripts/check-latex-builds.mjs --check    # exit 1 if any fails
 *   node build/scripts/check-latex-builds.mjs --only FBD # filter by path
 *   node build/scripts/check-latex-builds.mjs --jobs 8
 *
 * @author Ismael Sallami Moreno
 */

import { execFile } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const SUBJECTS = join(ROOT, "Subjects");
const TEMPLATES = join(ROOT, "extraFiles");

/**
 * The leading `.` is not decoration. Without it the shared template directory
 * comes before the document's own, and a shared `comandos.tex` shadows the one
 * several subjects keep next to their document. EE went from 100 pages to 7
 * that way. The trailing `//` searches recursively, which is what lets the
 * template be included by name from any depth.
 */
const TEXINPUTS = `.:${TEMPLATES}//:`;

/** A document that takes longer than this is treated as hung, not slow. */
const TIMEOUT_MS = 6 * 60 * 1000;

/**
 * Finds the root documents: a `.tex` that declares a document class. Files
 * under `build/` are skipped because they are generated, and rebuilding them
 * from the copy in place would report on an artifact instead of on a source.
 * @param {string} dir
 * @returns {string[]} absolute paths, sorted
 */
function findRoots(dir) {
  const found = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "build" || entry.name === ".git") continue;
      found.push(...findRoots(path));
      continue;
    }

    if (!entry.name.endsWith(".tex")) continue;
    // Reading the head is enough: `\documentclass` comes before the preamble.
    const head = readFileSync(path, "latin1").slice(0, 4000);
    if (head.includes("\\documentclass")) found.push(path);
  }

  return found.sort();
}

/**
 * `\include` of a file that is not there does NOT stop the build. LaTeX writes
 * `No file X.tex.` in the log and carries on, so the document comes out short a
 * chapter, `latexmk` exits 0 and a PDF appears. That is worse than a failure,
 * because it passes every check that only looks at whether a PDF was produced.
 *
 * `\input` and `\includegraphics` do halt under `-halt-on-error`, so this is
 * about `\include` and anything else that degrades to a warning.
 */
const MISSING_FILE = /(?:^No file (\S+?)\.$|LaTeX (?:Error|Warning): File [`'"]([^'"]+)['"] not found)/gm;

/**
 * LaTeX reports its own products the same way on the first pass, before it has
 * written them: `No file MC.bbl.` is biblatex working, not a missing source.
 */
const GENERATED = /\.(aux|bbl|toc|lof|lot|out|nav|snm|run\.xml)$/;

/** Where TeX breaks a log line. Anything this long continues on the next one. */
const LOG_WIDTH = 79;

/**
 * Puts back together the lines TeX wrapped. Without this a long path is cut in
 * the middle and no pattern matches it: CF2 includes a chapter by absolute
 * path, and the `No file …` that reports it spans two lines.
 * @param {string} log
 * @returns {string}
 */
function unwrap(log) {
  const out = [];

  for (const line of log.split("\n")) {
    if (out.length > 0 && out[out.length - 1].length === LOG_WIDTH) {
      out[out.length - 1] += line;
    } else {
      out.push(line);
    }
  }

  return out.join("\n");
}

/**
 * @param {string} logPath
 * @returns {string} the whole log, or "" when it is not there
 */
function readLog(logPath) {
  try {
    return readFileSync(logPath, "latin1");
  } catch {
    return "";
  }
}

/**
 * Pulls the first real error out of a LaTeX log. Lines starting with `!` are
 * the errors; everything else is noise, and the log is megabytes of it.
 * @param {string} log
 * @returns {string}
 */
function firstError(log) {
  if (!log) return "sin log";

  for (const line of log.split("\n")) {
    if (line.startsWith("!") || line.includes("Error:")) {
      return line.trim().replace(/\s+/g, " ").slice(0, 110);
    }
  }

  return "falló sin marcar un error en el log";
}

/**
 * The files LaTeX asked for and did not get, on a build that still succeeded.
 * @param {string} log
 * @returns {string[]} unique, in the order they were reported
 */
function skippedFiles(log) {
  const named = Array.from(unwrap(log).matchAll(MISSING_FILE), (m) => m[1] ?? m[2]);
  return [...new Set(named.filter((name) => !GENERATED.test(name)))];
}

/**
 * @param {string} pdf
 * @returns {number} pages, or 0 when the file is missing or unreadable
 */
async function pageCount(pdf) {
  try {
    const { stdout } = await run("pdfinfo", [pdf], dirname(pdf));
    return Number(stdout.match(/^Pages:\s+(\d+)/m)?.[1] ?? 0);
  } catch {
    return 0;
  }
}

/**
 * @param {string} cmd
 * @param {string[]} args
 * @param {string} cwd
 * @param {NodeJS.ProcessEnv} [env]
 * @returns {Promise<{stdout: string, code: number}>}
 */
function run(cmd, args, cwd, env) {
  return new Promise((done, fail) => {
    execFile(
      cmd,
      args,
      { cwd, env: { ...process.env, ...env }, timeout: TIMEOUT_MS, maxBuffer: 64 * 1024 * 1024 },
      (error, stdout) => {
        if (error && error.code === undefined) return fail(error);
        if (error && typeof error.code !== "number") return fail(error);
        done({ stdout, code: error ? error.code : 0 });
      },
    );
  });
}

/**
 * Builds one document. `latexmk` remembers past failures in `.fdb_latexmk` and
 * fails again even once the cause is gone, so the output directory is fresh
 * every time.
 * @param {string} texPath absolute
 * @param {string} outBase absolute, outside the repository
 * @returns {Promise<{doc: string, ok: boolean, pages: number, error: string, skipped: string[], pdf: string|null}>}
 */
async function build(texPath, outBase) {
  const doc = relative(SUBJECTS, texPath);
  const name = doc.replace(/[/\\]/g, "_").replace(/\.tex$/, "");
  const outDir = join(outBase, name);
  const empty = { doc, pages: 0, skipped: [], pdf: null };

  let code;
  try {
    ({ code } = await run(
      "latexmk",
      ["-pdf", "-shell-escape", "-interaction=nonstopmode", "-halt-on-error", `-outdir=${outDir}`, texPath],
      dirname(texPath),
      { TEXINPUTS },
    ));
  } catch (error) {
    return { ...empty, ok: false, error: `no se pudo ejecutar latexmk: ${error.message}` };
  }

  const produced = findPdf(outDir);
  const pages = produced ? await pageCount(produced) : 0;
  const log = readLog(join(outDir, `${basenameNoExt(texPath)}.log`));
  const built = code === 0 && pages > 0;
  const skipped = built ? skippedFiles(log) : [];

  return {
    doc,
    ok: built && skipped.length === 0,
    pages,
    error: built ? "" : firstError(log),
    skipped,
    pdf: produced,
  };
}

/**
 * @param {string} path
 * @returns {string}
 */
function basenameNoExt(path) {
  return path.split("/").pop().replace(/\.tex$/, "");
}

/**
 * latexmk names the PDF after the job, and a couple of Makefiles override the
 * job name, so the output is looked up instead of assumed.
 * @param {string} dir
 * @returns {string|null}
 */
function findPdf(dir) {
  try {
    const pdfs = readdirSync(dir).filter((f) => f.endsWith(".pdf"));
    if (pdfs.length === 0) return null;
    return join(dir, pdfs[0]);
  } catch {
    return null;
  }
}

/**
 * Runs `worker` over `items`, `limit` at a time. Keeps the machine busy without
 * launching 106 LaTeX processes at once.
 * @template T, R
 * @param {T[]} items
 * @param {number} limit
 * @param {(item: T) => Promise<R>} worker
 * @returns {Promise<R[]>}
 */
async function pool(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;

  async function consume() {
    while (next < items.length) {
      const index = next++;
      results[index] = await worker(items[index]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, consume));
  return results;
}

async function main() {
  const args = process.argv.slice(2);
  const check = args.includes("--check");
  const only = args[args.indexOf("--only") + 1];
  const jobs = Number(args[args.indexOf("--jobs") + 1]) || 4;

  let roots = findRoots(SUBJECTS);
  if (args.includes("--only") && only) {
    roots = roots.filter((path) => path.includes(only));
  }

  const outBase = mkdtempSync(join(tmpdir(), "latex-sweep-"));
  console.log(`${roots.length} documentos raíz. Compilando de ${jobs} en ${jobs} en ${outBase}\n`);

  let done = 0;
  const results = await pool(roots, jobs, async (path) => {
    const result = await build(path, outBase);
    done += 1;

    const mark = result.ok ? "ok    " : result.pages > 0 ? "HUECOS" : "FALLA ";
    const detail = result.ok
      ? `${result.pages} p`
      : result.pages > 0
        ? `${result.pages} p, sin ${result.skipped.join(", ")}`
        : result.error;

    console.log(`[${String(done).padStart(3)}/${roots.length}] ${mark} ${result.doc}  ${detail}`);
    return result;
  });

  const broken = results.filter((r) => r.pages === 0);
  const gaps = results.filter((r) => r.pages > 0 && r.skipped.length > 0);
  console.log(
    `\n${results.length - broken.length - gaps.length} de ${results.length} salen enteros. ` +
      `${broken.length} no compilan, ${gaps.length} compilan con huecos.`,
  );

  if (broken.length > 0) {
    console.log(`\nNo compilan:\n`);
    for (const f of broken.sort((a, b) => a.doc.localeCompare(b.doc))) {
      console.log(`  ${f.doc}\n      ${f.error}`);
    }
  }

  // These are the dangerous ones: exit code 0, a PDF on disk, content missing.
  if (gaps.length > 0) {
    console.log(`\nCompilan pero se dejan ficheros por el camino:\n`);
    for (const f of gaps.sort((a, b) => a.doc.localeCompare(b.doc))) {
      console.log(`  ${f.doc}  (${f.pages} p)\n      ${f.skipped.join("\n      ")}`);
    }
  }

  if (args.includes("--keep")) {
    console.log(`\nPDF generados en ${outBase}`);
  } else {
    rmSync(outBase, { recursive: true, force: true });
  }

  if (check && broken.length + gaps.length > 0) process.exit(1);
}

await main();
