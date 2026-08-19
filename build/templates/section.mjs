/**
 * Section index: the landing page of a top level area.
 *
 * A section either owns pages (Doble Grado owns five courses) or is a plain
 * list of links (Herramientas points at standalone apps). Both render here.
 *
 * @author Ismael Sallami Moreno
 */

import { escape, each, isExternal, url, heading } from "../lib/html.mjs";
import { layout } from "./layout.mjs";
import { GITHUB_MARK } from "../lib/icons.mjs";

/**
 * @param {import("../../content/types.d.ts").Section} section
 * @param {import("../../content/types.d.ts").Page} page
 * @param {number} index
 * @returns {string}
 */
function pageTile(section, page, index) {
  const entries = page.groups.reduce((total, g) => total + g.entries.length, 0);
  const resources = page.groups.reduce(
    (total, g) =>
      total +
      g.entries.reduce(
        (n, entry) =>
          n +
          entry.blocks.reduce(
            (m, block) => m + block.resources.filter((r) => !r.note).length,
            0,
          ),
        0,
      ),
    0,
  );

  return `        <a class="tile reveal" style="--i:${index}" href="${url(section.slug, page.slug)}">
          <span class="tile-num">${escape(page.index)}</span>
          <span>
            <span class="tile-title">${escape(page.title)} ${escape(page.titleOutline)}</span>
            <span class="tile-summary">${entries} asignaturas · ${resources} recursos</span>
          </span>
          <span class="tile-arrow" aria-hidden="true">→</span>
        </a>`;
}

/**
 * @param {import("../../content/types.d.ts").Resource} link
 * @param {number} index
 * @returns {string}
 */
function linkTile(link, index) {
  const external = isExternal(link.href) ? ' target="_blank" rel="noopener"' : "";
  const name = link.name;
  const blurb = link.blurb;
  const num = String(index + 1).padStart(2, "0");
  const body = `          <span class="tile-num">${num}</span>
          <span>
            <span class="tile-title">${escape(name)}</span>
${blurb ? `            <span class="tile-blurb">${escape(blurb)}</span>` : ""}
          </span>`;

  // Sin repositorio la tarjeta es un solo <a>, como las de los cursos.
  if (!link.repo) {
    return `        <a class="tile reveal" style="--i:${index}" href="${escape(link.href)}"${external}>
${body}
          <span class="tile-arrow" aria-hidden="true">→</span>
        </a>`;
  }

  // Con repositorio hacen falta dos enlaces, y uno dentro de otro no es HTML
  // valido. Asi que la tarjeta pasa a ser un <div>: el enlace principal se
  // estira sobre ella con un ::after, y el cuadrado queda por encima.
  return `        <div class="tile tile-dual reveal" style="--i:${index}">
          <a class="tile-main" href="${escape(link.href)}"${external}>
${body}
          </a>
          <a class="tile-src" href="${escape(link.repo)}" target="_blank" rel="noopener"
             aria-label="Código de ${escape(name)} en GitHub">${GITHUB_MARK}</a>
          <span class="tile-arrow" aria-hidden="true">→</span>
        </div>`;
}

/**
 * Builds a section index page.
 * @param {import("../../content/types.d.ts").Section} section
 * @returns {string} a complete HTML document
 */
export function renderSection(section) {
  const tiles = section.links?.length
    ? each(section.links, linkTile)
    : each(section.pages, (page, index) => pageTile(section, page, index));

  const body = `    <div class="page">
      <nav class="crumbs" aria-label="Ruta">
        <a href="/">Inicio</a>
        <span class="crumbs-sep" aria-hidden="true">/</span>
        <span aria-current="page">${escape(section.name)}</span>
      </nav>

      <h1 class="page-title display">
        <span class="ttl-index">${escape(section.index)} //</span><br>
        ${heading(section.title, section.titleOutline, section.name)}
      </h1>
      <p class="page-sub">
        <span>${escape(section.summary)}</span>
        <span>Universidad de Granada</span>
      </p>

      <p class="section-intro">${escape(section.blurb)}</p>

      <div class="tile-list">
${tiles}
      </div>
    </div>`;

  return layout({
    title: section.name,
    description: section.blurb,
    path: url(section.slug).slice(1),
    nav: [{ label: "← Inicio", href: "/" }],
    body,
  });
}

export default renderSection;
