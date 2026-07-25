/**
 * Section registry. This is the single list the generator walks to build the
 * whole site: home tiles, section indexes, page files, nav and sitemap all
 * come from here.
 *
 * To add a section:
 *   1. Create `content/sections/<slug>/section.mjs`.
 *   2. Import it below and add it to SECTIONS.
 *   3. Run `npm run build`.
 *
 * Order in the array is the order shown on the site.
 *
 * @author Ismael Sallami Moreno
 */

import dobleGrado from "./sections/doble-grado/section.mjs";
import herramientas from "./sections/herramientas/section.mjs";

/** @type {import("./types.d.ts").Section[]} */
export const SECTIONS = [dobleGrado, herramientas];

/**
 * Finds a section by its URL slug.
 * @param {string} slug
 * @returns {import("./types.d.ts").Section | undefined}
 */
export function findSection(slug) {
  return SECTIONS.find((section) => section.slug === slug);
}

/**
 * Every page in the site, paired with the section that owns it. Templates use
 * this to build breadcrumbs and previous/next links without walking the tree.
 * @returns {{ section: import("./types.d.ts").Section,
 *             page: import("./types.d.ts").Page }[]}
 */
export function allPages() {
  return SECTIONS.flatMap((section) =>
    section.pages.map((page) => ({ section, page })),
  );
}

export default SECTIONS;
