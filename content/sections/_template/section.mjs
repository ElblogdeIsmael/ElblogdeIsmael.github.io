/**
 * TEMPLATE - copy this folder to start a new section.
 *
 * A folder whose name starts with `_` is ignored by the generator, so this
 * file is never published. To turn it into a real section:
 *
 *   1. cp -r content/sections/_template content/sections/investigacion
 *   2. Fill in the fields below and the pages in `pages/`.
 *   3. Import it in `content/registry.mjs` and add it to SECTIONS.
 *   4. npm run build
 *
 * The section then appears on the home page, gets its own index at
 * `/<slug>/`, a page per entry in `pages`, and rows in the sitemap. No
 * template or stylesheet needs to change.
 *
 * @author Ismael Sallami Moreno
 * @type {import("../../types.d.ts").Section}
 */

import ejemplo from "./pages/ejemplo.mjs";

export default {
  /** URL segment: lowercase, no accents, hyphen separated. */
  slug: "_template",

  /** Two-digit ordinal shown in large type. Also sets the order on the home page. */
  index: "99",

  /** Plain name, used in breadcrumbs, navigation and page titles. */
  name: "Sección de ejemplo",

  /**
   * The heading splits in two: `title` renders solid, `titleOutline` renders
   * outlined. The split may fall mid-word ("Herra" + "mientas"); when the two
   * halves plus a space equal `name`, the space is added automatically.
   */
  title: "Sección de",
  titleOutline: "ejemplo",

  /** One or two sentences. Shown on the home tile and on the section index. */
  blurb:
    "Describe aquí de qué va la sección. Este texto aparece en la tarjeta de " +
    "la portada y encima del listado de páginas.",

  /** Short line on the home tile, for example "5 cursos · 59 asignaturas". */
  summary: "1 página · ejemplo",

  /** Pages owned by this section. Each one becomes `/<slug>/<page.slug>/`. */
  pages: [ejemplo],

  /**
   * Optional. A section that only points elsewhere (like Herramientas) sets
   * `links` instead of `pages` and renders as a link list.
   *
   * links: [{ name: "Nombre", blurb: "descripción corta", href: "/ruta/", kind: "WEB" }],
   */
};
