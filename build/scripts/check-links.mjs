/**
 * Checks that every local link in the content data points at a file that
 * exists.
 *
 * With 171 links into `Subjects/`, a renamed folder silently breaks a page.
 * This catches it before it ships. External URLs are not requested: the check
 * must run offline and stay fast.
 *
 * Usage: node build/scripts/check-links.mjs
 *
 * @author Ismael Sallami Moreno
 */

import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { SECTIONS } from "../../content/registry.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

/**
 * Walks the registry and yields every linked resource with its location, so a
 * failure report can say which subject the broken link belongs to.
 * @returns {{href: string, name: string, where: string}[]}
 */
function collectLinks() {
  const links = [];

  for (const section of SECTIONS) {
    for (const link of section.links ?? []) {
      links.push({ href: link.href, name: link.name, where: section.slug });
    }

    for (const page of section.pages) {
      for (const group of page.groups) {
        for (const entry of group.entries) {
          for (const block of entry.blocks) {
            for (const resource of block.resources) {
              if (resource.note) continue;
              links.push({
                href: resource.href,
                name: resource.name,
                where: `${section.slug}/${page.slug} · ${entry.code}`,
              });
            }
          }
        }
      }
    }
  }

  return links;
}

/**
 * Resolves a site path to a file. A path without an extension may be a
 * directory holding an `index.html`, the same way the server treats it.
 * @param {string} href
 * @returns {boolean}
 */
function exists(href) {
  // Strip the query string: the viewer takes its document as `?file=...`.
  const [path, query] = href.split("?");
  const target = resolve(ROOT, `.${decodeURIComponent(path)}`);

  if (!existsSync(target)) return false;

  // `/viewer/?file=Subjects/...` is only valid if the referenced note exists.
  const file = new URLSearchParams(query).get("file");
  if (!file) return true;

  return existsSync(resolve(ROOT, decodeURIComponent(file)));
}

function main() {
  const links = collectLinks();
  const local = links.filter((link) => link.href.startsWith("/"));
  const broken = local.filter((link) => !exists(link.href));

  console.log(
    `${links.length} links: ${local.length} local, ` +
      `${links.length - local.length} external (not requested).`,
  );

  if (broken.length === 0) {
    console.log("All local links resolve.");
    return;
  }

  console.error(`\n${broken.length} broken:\n`);
  for (const link of broken) {
    console.error(`  ${link.where}\n    ${link.name}\n    ${link.href}\n`);
  }
  process.exit(1);
}

main();
