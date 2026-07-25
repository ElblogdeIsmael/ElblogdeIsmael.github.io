/**
 * Content model for the whole site.
 *
 * The same four levels describe any kind of material. A degree course and a
 * research area are the same shape, so both render with the same templates:
 *
 *   Section  ->  Doble Grado        |  Investigacion
 *   Page     ->  Cuarto Curso       |  Vision por Computador
 *   Group    ->  Primer Semestre    |  Linea de trabajo
 *   Entry    ->  Asignatura         |  Proyecto
 *   Resource ->  Apuntes en PDF     |  Publicacion
 *
 * To add a new section, create `content/sections/<slug>/` and register it in
 * `content/registry.mjs`. No template or CSS work is needed.
 *
 * Data files are plain `.mjs`. They reference these types through JSDoc, which
 * gives editor autocompletion and type checking without a build step.
 *
 * @author Ismael Sallami Moreno
 */

/**
 * Label shown on the right side of a resource row.
 * Add a new value here and in `KIND_LABELS` (build/templates/page.mjs).
 */
export type ResourceKind =
  | "PDF"
  | "HTML"
  | "MD"
  | "WEB"
  | "ZIP"
  | "GUIA"
  | "SQL"
  | "DIR";

/** A single downloadable or linkable item. */
export interface Resource {
  /** Text shown to the reader. */
  name: string;
  /**
   * Absolute site path ("/Subjects/...") or full external URL.
   * External URLs open in a new tab. Omit it for `note` items.
   */
  href?: string;
  /** Drives the tag label. Omit it for `note` items. */
  kind?: ResourceKind;
  /**
   * Renders as plain text instead of a link. Used for bibliography entries
   * and for material that exists but is not published here.
   */
  note?: boolean;
}

/**
 * A labelled run of resources inside an entry, such as "Practicas" or
 * "Examenes". Leave `label` out for the resources that open the card.
 */
export interface Block {
  label?: string;
  resources: Resource[];
}

/** One card. A subject in a course, a project in a research area. */
export interface Entry {
  /** Short code shown in the badge, for example "PDOO". Keep it under 6 chars. */
  code: string;
  name: string;
  /** An empty array renders the "sin material" placeholder. */
  blocks: Block[];
}

/** A run of entries. A semester in a course, a work line in a research area. */
export interface Group {
  /** Two-digit ordinal shown in large type, for example "01". */
  index: string;
  name: string;
  entries: Entry[];
}

/** One generated HTML page, published at `/<section>/<page>/`. */
export interface Page {
  /** URL segment. Lowercase, no accents, hyphen separated. */
  slug: string;
  /** Two-digit ordinal shown above the title. */
  index: string;
  /** Rendered in two parts: `title` in solid ink, `titleOutline` in outline. */
  title: string;
  titleOutline: string;
  /** Short lines shown under the title, split left and right. */
  meta: string[];
  groups: Group[];
  /** Falls back to `title` + `titleOutline` when omitted. */
  seoTitle?: string;
  seoDescription?: string;
}

/** A top level area of the site, published at `/<slug>/`. */
export interface Section {
  slug: string;
  index: string;
  /**
   * Plain name, used in breadcrumbs, navigation and metadata.
   * The heading splits into `title` + `titleOutline`, which may break the word
   * anywhere ("Herra" + "mientas"), so it cannot be derived from them.
   */
  name: string;
  title: string;
  titleOutline: string;
  /** One or two sentences. Shown on the home page tile and on the index. */
  blurb: string;
  /** Short line on the home tile, for example "5 cursos - 59 asignaturas". */
  summary: string;
  pages: Page[];
  /**
   * Sections that only link out, such as the tools index. When set, the
   * section renders as a list of links instead of a grid of pages.
   */
  links?: Resource[];
}
