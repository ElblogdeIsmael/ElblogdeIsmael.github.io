/**
 * Content page: one course, or one area of any future section.
 *
 * Renders groups of entries, each entry holding blocks of resources. The shape
 * is defined in `content/types.d.ts` and is deliberately generic, so a research
 * page and a course page come out of this same file.
 *
 * @author Ismael Sallami Moreno
 */

import { escape, each, isExternal, url } from "../lib/html.mjs";
import { layout } from "./layout.mjs";

/** Tag text shown on a resource row. Keys match `ResourceKind`. */
const KIND_LABELS = {
  PDF: "PDF",
  HTML: "HTML",
  MD: "MD",
  WEB: "WEB",
  ZIP: "ZIP",
  GUIA: "GUÍA",
  SQL: "SQL",
  DIR: "DIR",
};

/**
 * One resource row. Notes render as plain text because they name material that
 * is not published here, such as a recommended book.
 * @param {import("../../content/types.d.ts").Resource} resource
 * @returns {string}
 */
function resourceRow(resource) {
  if (resource.note) {
    return `                <li class="res-note">${escape(resource.name)}</li>`;
  }

  const external = isExternal(resource.href)
    ? ' target="_blank" rel="noopener"'
    : "";
  const label = KIND_LABELS[resource.kind] ?? escape(resource.kind);

  return `                <li><a class="res-row" href="${escape(resource.href)}"${external}><span class="res-arrow" aria-hidden="true">→</span><span class="res-name">${escape(
    resource.name,
  )}</span><span class="res-tag">${label}</span></a></li>`;
}

/**
 * @param {import("../../content/types.d.ts").Entry} entry
 * @param {number} index position in the grid, drives the stagger delay
 * @returns {string}
 */
function entryCard(entry, index) {
  const rows = entry.blocks.flatMap((block) => [
    block.label
      ? `                <li class="res-group">${escape(block.label)}</li>`
      : null,
    ...block.resources.map(resourceRow),
  ]);

  const list = rows.filter(Boolean).join("\n");
  const body = list || `                <li class="res-empty">sin material</li>`;

  return `            <article class="entry-card reveal" style="--i:${index}">
              <header class="entry-head">
                <span class="entry-code">${escape(entry.code)}</span>
                <h3 class="entry-name">${escape(entry.name)}</h3>
              </header>
              <ul class="res-list">
${body}
              </ul>
            </article>`;
}

/**
 * @param {import("../../content/types.d.ts").Group} group
 * @returns {string}
 */
function groupBlock(group) {
  return `      <section class="group">
        <header class="group-head">
          <span class="group-num">${escape(group.index)}</span>
          <h2 class="group-name">${escape(group.name)}</h2>
        </header>
        <div class="entry-grid">
${each(group.entries, entryCard)}
        </div>
      </section>`;
}

/**
 * Builds a content page.
 * @param {import("../../content/types.d.ts").Section} section
 * @param {import("../../content/types.d.ts").Page} page
 * @returns {string} a complete HTML document
 */
export function renderPage(section, page) {
  const heading = `${page.title} ${page.titleOutline}`;
  const entries = page.groups.reduce((total, g) => total + g.entries.length, 0);

  const body = `    <div class="page">
      <nav class="crumbs" aria-label="Ruta">
        <a href="/">Inicio</a>
        <span class="crumbs-sep" aria-hidden="true">/</span>
        <a href="${url(section.slug)}">${escape(section.name)}</a>
        <span class="crumbs-sep" aria-hidden="true">/</span>
        <span aria-current="page">${escape(heading)}</span>
      </nav>

      <h1 class="page-title display">
        <span class="ttl-index">${escape(page.index)} //</span><br>
        ${escape(page.title)} <span class="ttl-stroke">${escape(page.titleOutline)}</span>
      </h1>
      <p class="page-sub">
${each(page.meta, (line) => `        <span>${escape(line)}</span>`)}
      </p>

${each(page.groups, groupBlock)}
    </div>`;

  return layout({
    title: page.seoTitle ?? heading,
    description:
      page.seoDescription ??
      `${heading} del Doble Grado en Ingeniería Informática y ADE (UGR): ` +
        `apuntes, prácticas y material de ${entries} asignaturas.`,
    path: url(section.slug, page.slug).slice(1),
    nav: [{ label: `← ${section.name}`, href: url(section.slug) }],
    body,
  });
}

export default renderPage;
