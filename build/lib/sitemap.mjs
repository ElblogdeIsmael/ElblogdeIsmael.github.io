/**
 * Sitemap generation.
 *
 * Built from the section registry, so a new section appears in the sitemap the
 * moment it is registered. Redirect stubs are left out on purpose: they point
 * at the canonical URL and must not compete with it in the index.
 *
 * @author Ismael Sallami Moreno
 */

import site from "../../content/site.mjs";
import { escape, url } from "./html.mjs";

/** Extra URLs that are not generated from the registry. */
const STATIC_URLS = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/historia/", changefreq: "monthly", priority: "0.5" },
  { path: "/md2html/", changefreq: "monthly", priority: "0.9" },
  { path: "/pdf2md/", changefreq: "monthly", priority: "0.9" },
];

/**
 * @param {{path: string, changefreq: string, priority: string}} entry
 * @returns {string}
 */
function urlEntry(entry) {
  return `  <url>
    <loc>${escape(site.url + entry.path)}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
}

/**
 * @param {import("../../content/types.d.ts").Section[]} sections
 * @returns {string} sitemap.xml content
 */
export function renderSitemap(sections) {
  const entries = [...STATIC_URLS];

  for (const section of sections) {
    entries.push({
      path: url(section.slug),
      changefreq: "monthly",
      priority: "0.8",
    });

    for (const page of section.pages) {
      entries.push({
        path: url(section.slug, page.slug),
        changefreq: "monthly",
        priority: "0.6",
      });
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(urlEntry).join("\n")}
</urlset>
`;
}

export default renderSitemap;
