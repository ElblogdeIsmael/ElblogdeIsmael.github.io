/**
 * Bundles the design system into stylesheets.
 *
 * Sources are split into layers for editing; each page loads one file so the
 * browser makes one request. Order matters: tokens define the variables every
 * later layer reads.
 *
 * Two bundles are produced:
 *   brutal.css  the site itself
 *   tool.css    the standalone apps (md2html, pdf2md), which share the tokens
 *               and the base but have chrome of their own
 *
 * @author Ismael Sallami Moreno
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/** Output file -> layers, in cascade order. */
export const BUNDLES = {
  "assets/css/brutal.css": ["tokens", "base", "layout", "components", "pages"],
  "assets/css/tool.css": ["tokens", "base", "tool"],
};

/**
 * Concatenates layers, keeping comments and formatting intact. The result
 * stays readable in devtools, and at around 25 KB uncompressed there is
 * nothing worth gaining from minifying it.
 * @param {string} root repository root
 * @param {string[]} layers layer names, without the .css extension
 * @returns {string}
 */
export function bundleCss(root, layers) {
  const header = `/* ============================================================
   GENERATED FILE - DO NOT EDIT
   Built from assets/css/brutal/{${layers.join(",")}}.css
   Run \`npm run build\` after changing a layer.
   ============================================================ */\n`;

  const parts = layers.map((layer) =>
    readFileSync(resolve(root, "assets/css/brutal", `${layer}.css`), "utf8").trim(),
  );

  return [header, ...parts].join("\n\n") + "\n";
}

export default bundleCss;
