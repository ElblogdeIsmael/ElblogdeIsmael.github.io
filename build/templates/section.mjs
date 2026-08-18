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

/*
 * La marca de GitHub, en linea. Es el mismo criterio que los iconos del
 * conmutador de tema: SVG propio en el HTML, sin CDN ni fuente de iconos.
 */
const GITHUB_MARK = `<svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>`;

/**
 * @param {import("../../content/types.d.ts").Resource} link
 * @param {number} index
 * @returns {string}
 */
function linkTile(link, index) {
  const external = isExternal(link.href) ? ' target="_blank" rel="noopener"' : "";
  const [name, blurb] = link.name.split(" — ");
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
