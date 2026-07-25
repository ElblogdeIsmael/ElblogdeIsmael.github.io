/**
 * Site generator.
 *
 * Reads `content/` and writes static HTML to the repository root, which is
 * what GitHub Pages serves. There is no framework and no runtime: the output
 * is plain HTML plus one stylesheet and two small scripts.
 *
 *   node build/render.mjs           write the site
 *   node build/render.mjs --check   fail if the site on disk is out of date
 *
 * @author Ismael Sallami Moreno
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { SECTIONS } from "../content/registry.mjs";
import { REDIRECTS } from "../content/redirects.mjs";
import { bundleCss } from "./lib/css.mjs";
import { renderHome } from "./templates/home.mjs";
import { renderHistoria } from "./templates/historia.mjs";
import { renderPage } from "./templates/page.mjs";
import { renderSection } from "./templates/section.mjs";
import { renderRedirect } from "./templates/redirect.mjs";
import { renderSitemap } from "./lib/sitemap.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Collects every file the site is made of.
 * Keys are paths relative to the repository root.
 * @returns {Map<string, string>}
 */
function buildSite() {
  /** @type {Map<string, string>} */
  const files = new Map();

  files.set("assets/css/brutal.css", bundleCss(ROOT));
  files.set("index.html", renderHome(SECTIONS));
  files.set("historia/index.html", renderHistoria());

  for (const section of SECTIONS) {
    files.set(`${section.slug}/index.html`, renderSection(section));

    for (const page of section.pages) {
      files.set(`${section.slug}/${page.slug}/index.html`, renderPage(section, page));
    }
  }

  for (const redirect of REDIRECTS) {
    files.set(redirect.from, renderRedirect(redirect));
  }

  files.set("sitemap.xml", renderSitemap(SECTIONS));

  return files;
}

/**
 * @param {Map<string, string>} files
 * @returns {number} how many files changed
 */
function writeFiles(files) {
  let written = 0;

  for (const [path, content] of files) {
    const full = resolve(ROOT, path);
    if (existsSync(full) && readFileSync(full, "utf8") === content) continue;

    mkdirSync(dirname(full), { recursive: true });
    writeFileSync(full, content, "utf8");
    console.log(`  ${path}`);
    written += 1;
  }

  return written;
}

/**
 * Compares the generated site against what is committed. Used in CI so a data
 * change cannot ship without its rebuilt HTML.
 * @param {Map<string, string>} files
 * @returns {string[]} paths that are missing or stale
 */
function findStale(files) {
  const stale = [];

  for (const [path, content] of files) {
    const full = resolve(ROOT, path);
    if (!existsSync(full) || readFileSync(full, "utf8") !== content) stale.push(path);
  }

  return stale;
}

function main() {
  const check = process.argv.includes("--check");
  const files = buildSite();

  if (check) {
    const stale = findStale(files);
    if (stale.length === 0) {
      console.log(`Site is up to date (${files.size} files).`);
      return;
    }
    console.error("These files are out of date. Run `npm run build`:\n");
    for (const path of stale) console.error(`  ${path}`);
    process.exit(1);
  }

  const written = writeFiles(files);
  console.log(
    written === 0
      ? `Nothing to do (${files.size} files already current).`
      : `\n${written} of ${files.size} files written.`,
  );
}

main();
