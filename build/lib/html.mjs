/**
 * HTML helpers shared by every template.
 *
 * Templates are plain functions returning strings. These helpers keep the
 * escaping honest and the output readable.
 *
 * @author Ismael Sallami Moreno
 */

const ESCAPES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/**
 * Escapes text for use inside markup or an attribute value.
 * Every value coming from content data goes through this.
 * @param {unknown} value
 * @returns {string}
 */
export function escape(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ESCAPES[char]);
}

/**
 * Joins parts, dropping anything falsy. Lets templates write
 * `join(condition && markup)` without leaving "false" in the output.
 * @param {...(string|false|null|undefined)} parts
 * @returns {string}
 */
export function join(...parts) {
  return parts.flat(Infinity).filter(Boolean).join("\n");
}

/**
 * Renders a list through a template function.
 * @template T
 * @param {T[]} items
 * @param {(item: T, index: number) => string} render
 * @returns {string}
 */
export function each(items, render) {
  return items.map(render).join("\n");
}

/**
 * True when a link points outside the site. External links open in a new tab
 * and carry `rel="noopener"`.
 * @param {string} href
 * @returns {boolean}
 */
export function isExternal(href) {
  return /^https?:\/\//.test(href);
}

/**
 * Indents every line of a block. Used only to keep generated markup readable
 * in view-source; it has no effect on rendering.
 * @param {string} text
 * @param {number} level number of two-space steps
 * @returns {string}
 */
export function indent(text, level) {
  const pad = "  ".repeat(level);
  return text
    .split("\n")
    .map((line) => (line.trim() ? pad + line : line))
    .join("\n");
}

/**
 * Renders a heading whose second half is outlined.
 *
 * The split does not always fall on a word boundary: "Doble Grado" splits into
 * two words, "Herramientas" into "Herra" and "mientas". Comparing against the
 * plain name tells the two cases apart, so no data file needs a stray space or
 * a flag to say which it is.
 *
 * @param {string} title solid half
 * @param {string} outline outlined half
 * @param {string} name plain name, for example "Doble Grado"
 * @returns {string}
 */
export function heading(title, outline, name) {
  const gap = name === `${title} ${outline}` ? " " : "";
  return `${escape(title)}${gap}<span class="ttl-stroke">${escape(outline)}</span>`;
}

/**
 * Joins URL segments into an absolute site path with a trailing slash.
 * `url("doble-grado", "cuarto")` gives "/doble-grado/cuarto/".
 * @param {...string} segments
 * @returns {string}
 */
export function url(...segments) {
  const path = segments.filter(Boolean).join("/");
  return path ? `/${path}/` : "/";
}
