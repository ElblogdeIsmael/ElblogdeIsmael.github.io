/**
 * "La historia" page: a short timeline of how the site came to be.
 *
 * @author Ismael Sallami Moreno
 */

import { escape, each, heading } from "../lib/html.mjs";
import { layout } from "./layout.mjs";
import historia from "../../content/historia.mjs";

/**
 * @param {typeof historia.milestones[number]} milestone
 * @param {number} index
 * @returns {string}
 */
function milestone(milestone, index) {
  return `        <li class="timeline-item reveal" style="--i:${index}">
          <p class="timeline-kicker">${String(index + 1).padStart(2, "0")} · ${escape(milestone.kicker)}</p>
          <h2 class="timeline-title">${escape(milestone.title)}</h2>
          <p class="lead">${escape(milestone.body)}</p>
        </li>`;
}

/**
 * Builds the history page.
 * @returns {string} a complete HTML document
 */
export function renderHistoria() {
  const body = `    <div class="page">
      <nav class="crumbs" aria-label="Ruta">
        <a href="/">Inicio</a>
        <span class="crumbs-sep" aria-hidden="true">/</span>
        <span aria-current="page">La historia</span>
      </nav>

      <p class="kicker">${escape(historia.kicker)}</p>
      <h1 class="page-title display" style="margin-top:18px">
        ${heading(historia.title, historia.titleOutline, historia.name)}
      </h1>
      <p class="historia-intro" style="margin-top:28px">${escape(historia.lead)}</p>

      <ol class="timeline">
${each(historia.milestones, milestone)}
      </ol>

      <div style="margin-top:64px">
        <a class="btn btn-solid" href="/doble-grado/">Explorar los cursos</a>
      </div>
    </div>`;

  return layout({
    title: historia.name,
    description: historia.lead,
    path: "historia/",
    nav: [{ label: "← Inicio", href: "/" }],
    body,
  });
}

export default renderHistoria;
