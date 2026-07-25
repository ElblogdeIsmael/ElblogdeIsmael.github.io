/**
 * Home page: hero, section tiles, about and contact.
 *
 * The hero numbers are counted from the registry, so they stay true as content
 * is added. The contact form posts straight to the form service with no
 * JavaScript involved.
 *
 * @author Ismael Sallami Moreno
 */

import { escape, each, url, heading, isExternal } from "../lib/html.mjs";
import { layout } from "./layout.mjs";
import site from "../../content/site.mjs";
import home from "../../content/home.mjs";

/**
 * Counts what the site actually holds, so the hero can never overstate it.
 * @param {import("../../content/types.d.ts").Section[]} sections
 * @returns {{courses: number, subjects: number, resources: number, tools: number}}
 */
function countContent(sections) {
  let courses = 0;
  let subjects = 0;
  let resources = 0;
  let tools = 0;

  for (const section of sections) {
    tools += section.links?.length ?? 0;
    courses += section.pages.length;

    for (const page of section.pages) {
      for (const group of page.groups) {
        subjects += group.entries.length;
        for (const entry of group.entries) {
          for (const block of entry.blocks) {
            resources += block.resources.filter((r) => !r.note).length;
          }
        }
      }
    }
  }

  return { courses, subjects, resources, tools };
}

/**
 * @param {import("../../content/types.d.ts").Section} section
 * @param {number} index
 * @returns {string}
 */
function sectionTile(section, index) {
  return `        <a class="tile reveal" style="--i:${index}" href="${url(section.slug)}">
          <span class="tile-num">${escape(section.index)}</span>
          <span>
            <span class="tile-title">${escape(section.name)}</span>
            <span class="tile-blurb">${escape(section.blurb)}</span>
            <span class="tile-summary">${escape(section.summary)}</span>
          </span>
          <span class="tile-arrow" aria-hidden="true">→</span>
        </a>`;
}

/**
 * @param {ReturnType<typeof countContent>} counts
 * @returns {string}
 */
function heroStats(counts) {
  const stats = [
    { num: counts.courses, label: "Cursos" },
    { num: counts.subjects, label: "Asignaturas" },
    { num: counts.resources, label: "Recursos" },
    { num: counts.tools, label: "Herramientas" },
  ];

  return each(
    stats,
    (stat) => `        <div class="hero-stat">
          <div class="hero-stat-num">${stat.num}</div>
          <div class="hero-stat-label">${escape(stat.label)}</div>
        </div>`,
  );
}

/**
 * The ticker holds its items twice so the animation can loop seamlessly.
 * @returns {string}
 */
function marquee() {
  const items = [...home.marquee, ...home.marquee]
    .map((item) => `<span>${escape(item)} //</span>`)
    .join("\n        ");

  return `    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        ${items}
      </div>
    </div>`;
}

/** @returns {string} */
function about() {
  const { about: copy } = home;

  return `    <section class="block" id="sobre-mi">
      <div class="about">
        <div class="about-id">
          <p class="kicker">${escape(copy.kicker)}</p>
          <h2 class="block-title">${escape(copy.title)}</h2>
          <p class="about-role">${escape(copy.role)}</p>
          <p class="about-meta">
            <span>${escape(copy.place)}</span>
            <span>${escape(copy.period)}</span>
          </p>
        </div>

        <div>
          <p class="lead">${escape(copy.body)}</p>

          <div class="about-areas">
${each(
  copy.areas,
  (area) => `            <div class="about-area">
              <p class="about-area-name">${escape(area.name)}</p>
              <p class="about-area-note">${escape(area.note)}</p>
            </div>`,
)}
          </div>

          <div class="about-links">
${each(
  site.social,
  (link) =>
    `            <a class="btn btn-ghost" href="${escape(link.href)}"${
      isExternal(link.href) ? ' target="_blank" rel="noopener"' : ""
    }>${escape(link.label)}</a>`,
)}
          </div>
        </div>
      </div>
    </section>`;
}

/** @returns {string} */
function contact() {
  const { contact: copy } = home;

  return `    <section class="block" id="contacto">
      <div class="contact">
        <div>
          <p class="kicker">${escape(copy.kicker)}</p>
          <h2 class="block-title">${escape(copy.title)}</h2>
          <p class="lead" style="margin-top:18px">${escape(copy.body)}</p>
        </div>

        <form class="slab slab-shadow" action="${escape(site.contactEndpoint)}" method="POST">
          <input type="hidden" name="_subject" value="${escape(copy.subject)}">
          <input type="hidden" name="_captcha" value="false">
          <input class="field-trap" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">

          <label class="field">
            <span class="field-label">Tu nombre</span>
            <input class="field-input" type="text" name="name" required placeholder="Cómo te llamas" autocomplete="name">
          </label>

          <label class="field">
            <span class="field-label">Email</span>
            <input class="field-input" type="email" name="email" required placeholder="tu@email.com" autocomplete="email">
          </label>

          <label class="field">
            <span class="field-label">Mensaje</span>
            <textarea class="field-input" name="message" rows="5" required placeholder="Cuéntame…"></textarea>
          </label>

          <button class="btn btn-solid" type="submit">Enviar</button>
        </form>
      </div>
    </section>`;
}

/**
 * Builds the home page.
 * @param {import("../../content/types.d.ts").Section[]} sections
 * @returns {string} a complete HTML document
 */
export function renderHome(sections) {
  const counts = countContent(sections);

  const body = `    <section class="hero">
      <div class="hero-inner">
        <p class="kicker reveal-now" style="--i:0">${escape(home.hero.kicker)}</p>

        <h1 class="display hero-title reveal-now" style="--i:1">
          ${heading(home.hero.title, home.hero.titleOutline, home.hero.name)}
        </h1>

        <p class="hero-lead reveal-now" style="--i:2">${home.hero.lead}</p>

        <div class="hero-actions reveal-now" style="--i:3">
          <a class="btn btn-solid" href="#secciones">Ver secciones</a>
          <a class="btn btn-ghost" href="/historia/">La historia</a>
        </div>

        <div class="hero-stats reveal-now" style="--i:4">
${heroStats(counts)}
        </div>
      </div>
    </section>

${marquee()}

    <section class="block" id="secciones">
      <header class="block-head">
        <p class="kicker">${escape(home.sections.kicker)}</p>
        <h2 class="block-title">${escape(home.sections.title)}</h2>
      </header>
      <div class="tile-list">
${each(sections, sectionTile)}
      </div>
    </section>

${about()}

${contact()}`;

  return layout({
    title: site.title,
    exactTitle: true,
    description: site.description,
    path: "",
    bodyId: "top",
    ads: true,
    verification: true,
    nav: [
      ...sections.map((section) => ({
        label: section.name,
        href: url(section.slug),
        optional: true,
      })),
      { label: "Sobre mí", href: "#sobre-mi", optional: true },
      { label: "La historia", href: "/historia/" },
    ],
    body,
  });
}

export default renderHome;
