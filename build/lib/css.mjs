/**
 * Bundles the design system into a single stylesheet.
 *
 * The source is split into layers for editing; the site loads one file so the
 * browser makes one request. Order matters: tokens define the variables every
 * later layer reads.
 *
 * @author Ismael Sallami Moreno
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/** Layers, in cascade order. */
const LAYERS = ["tokens", "base", "layout", "components", "pages"];

/**
 * Concatenates the layers, keeping comments and formatting intact. The file
 * stays readable in devtools, and at roughly 20 KB uncompressed there is
 * nothing to gain from minifying it.
 * @param {string} root repository root
 * @returns {string}
 */
export function bundleCss(root) {
  const header = `/* ============================================================
   GENERATED FILE - DO NOT EDIT
   Built from assets/css/brutal/{${LAYERS.join(",")}}.css
   Run \`npm run build\` after changing a layer.
   ============================================================ */\n`;

  const parts = LAYERS.map((layer) =>
    readFileSync(resolve(root, "assets/css/brutal", `${layer}.css`), "utf8").trim(),
  );

  return [header, ...parts].join("\n\n") + "\n";
}

export default bundleCss;
