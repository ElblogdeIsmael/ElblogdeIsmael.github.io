/**
 * Compares the legacy `courses/*.html` pages against the extracted content
 * data, field by field. Nothing may be lost in the migration.
 *
 * It pulls every code, name, link, group label and note out of both sides and
 * diffs the sorted lists. Any mismatch exits with code 1.
 *
 * Usage: node build/scripts/verify-migration.mjs
 *
 * @author Ismael Sallami Moreno
 */

import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

/** Legacy file name -> data file name. */
const PAGES = [
  ["first", "primero"],
  ["second", "segundo"],
  ["third", "tercero"],
  ["fourth", "cuarto"],
  ["fifth", "quinto"],
];

const ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": " ",
};

/** @param {string} html @returns {string} */
function decode(html) {
  return html
    .replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&nbsp;/g, (m) => ENTITIES[m])
    .replace(/\s+/g, " ")
    .trim();
}

/** @param {string} href @returns {string} */
function normalizeHref(href) {
  if (/^https?:\/\//.test(href) || href.startsWith("#")) return href;
  return href.replace(/^\.\/\.\.\//, "/").replace(/^\.\.\//, "/");
}

/**
 * Pulls all values of one CSS class out of the legacy markup.
 * @param {string} html
 * @param {string} className
 * @param {string} closing tag that closes the element
 * @returns {string[]}
 */
function collectByClass(html, className, closing) {
  const pattern = new RegExp(`class="${className}">([\\s\\S]*?)</${closing}>`, "g");
  return [...html.matchAll(pattern)].map((m) => decode(m[1]));
}

/** @returns {Record<string, string[]>} values found in the legacy pages */
function readLegacy() {
  const out = { codes: [], subjects: [], names: [], groups: [], notes: [], hrefs: [] };

  for (const [file] of PAGES) {
    const html = readFileSync(resolve(ROOT, "courses", `${file}.html`), "utf8");
    out.codes.push(...collectByClass(html, "subj-code", "span"));
    out.subjects.push(...collectByClass(html, "subj-name", "h3"));
    out.names.push(...collectByClass(html, "res-name", "span"));
    out.groups.push(...collectByClass(html, "res-group", "li"));
    out.notes.push(...collectByClass(html, "res-note", "li"));
    out.hrefs.push(
      ...[...html.matchAll(/class="res-row"\s+href="([^"]*)"/g)].map((m) =>
        normalizeHref(m[1]),
      ),
    );
  }
  return out;
}

/** @returns {Promise<Record<string, string[]>>} values found in the data files */
async function readData() {
  const out = { codes: [], subjects: [], names: [], groups: [], notes: [], hrefs: [] };

  for (const [, slug] of PAGES) {
    const url = new URL(
      `../../content/sections/doble-grado/pages/${slug}.mjs`,
      import.meta.url,
    );
    const page = (await import(url.href)).default;

    for (const group of page.groups) {
      for (const entry of group.entries) {
        out.codes.push(entry.code);
        out.subjects.push(entry.name);
        for (const block of entry.blocks) {
          if (block.label) out.groups.push(block.label);
          for (const resource of block.resources) {
            if (resource.note) out.notes.push(resource.name);
            else {
              out.names.push(resource.name);
              out.hrefs.push(resource.href);
            }
          }
        }
      }
    }
  }
  return out;
}

/**
 * Diffs two lists ignoring order. Prints the first mismatches found.
 * @param {string} label
 * @param {string[]} legacy
 * @param {string[]} data
 * @returns {boolean} true when both sides match
 */
function compare(label, legacy, data) {
  const a = [...legacy].sort();
  const b = [...data].sort();
  const same = a.length === b.length && a.every((v, i) => v === b[i]);

  if (same) {
    console.log(`  ${label.padEnd(10)} OK   ${a.length}`);
    return true;
  }

  console.log(`  ${label.padEnd(10)} FAIL  legacy=${a.length} data=${b.length}`);
  const missing = a.filter((v) => !b.includes(v)).slice(0, 5);
  const extra = b.filter((v) => !a.includes(v)).slice(0, 5);
  for (const v of missing) console.log(`    - ${v}`);
  for (const v of extra) console.log(`    + ${v}`);
  return false;
}

async function main() {
  const legacy = readLegacy();
  const data = await readData();

  console.log("Legacy HTML vs content data\n");
  const results = [
    compare("codes", legacy.codes, data.codes),
    compare("subjects", legacy.subjects, data.subjects),
    compare("links", legacy.names, data.names),
    compare("hrefs", legacy.hrefs, data.hrefs),
    compare("groups", legacy.groups, data.groups),
    compare("notes", legacy.notes, data.notes),
  ];

  const ok = results.every(Boolean);
  console.log(ok ? "\nMigration is complete." : "\nMigration lost data.");
  process.exit(ok ? 0 : 1);
}

main();
