/**
 * Page shell shared by every generated page: head, top bar, footer and the
 * scripts. Templates supply the body and their own navigation links.
 *
 * @author Ismael Sallami Moreno
 */

import { escape, each, join, isExternal } from "../lib/html.mjs";
import site from "../../content/site.mjs";

/**
 * Runs before first paint and sets `data-theme`, so the page never flashes the
 * wrong background. It is inlined rather than loaded to avoid a round trip.
 */
const THEME_SNIPPET = `(function(){try{var s=localStorage.getItem("course-theme");\
var l=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";\
document.documentElement.setAttribute("data-theme",s||l)}catch(e){}})();`;

/**
 * @typedef {object} NavLink
 * @property {string} label
 * @property {string} href
 * @property {boolean} [optional] hidden on narrow screens
 */

/**
 * @typedef {object} LayoutOptions
 * @property {string} title  browser title, without the site suffix
 * @property {string} description
 * @property {string} path   site path without a leading slash, for example
 *                           "doble-grado/cuarto/". Empty string for the home page.
 * @property {string} body   page markup
 * @property {NavLink[]} [nav]
 * @property {boolean} [exactTitle] use `title` as is, without the site suffix
 * @property {boolean} [ads] include the AdSense snippet
 * @property {boolean} [verification] include the Search Console tag
 * @property {string} [bodyId]
 */

/**
 * Analytics and ads. Both are optional: clearing the id in `content/site.mjs`
 * removes the snippet from every page.
 * @param {LayoutOptions} options
 * @returns {string}
 */
function thirdParty(options) {
  return join(
    site.analyticsId &&
      `  <script async src="https://www.googletagmanager.com/gtag/js?id=${site.analyticsId}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${site.analyticsId}');
  </script>`,
    options.ads &&
      site.adsenseClient &&
      `  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${site.adsenseClient}" crossorigin="anonymous"></script>
  <meta name="google-adsense-account" content="${site.adsenseClient}">`,
  );
}

/**
 * @param {NavLink[]} links
 * @returns {string}
 */
function navLinks(links) {
  return each(links, (link) => {
    const external = isExternal(link.href);
    return `        <a class="topbar-link" href="${escape(link.href)}"${
      link.optional ? " data-optional" : ""
    }${external ? ' target="_blank" rel="noopener"' : ""}>${escape(link.label)}</a>`;
  });
}

/**
 * @returns {string} the site footer, identical on every page
 */
function footer() {
  const links = [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/#sobre-mi" },
    { label: "La historia", href: "/historia/" },
    ...site.social,
  ];

  return `  <footer class="site-footer">
    <div class="site-footer-inner">
      <a class="topbar-brand" href="/" style="border:none;padding:0">✦ ${escape(site.name)}</a>
      <ul class="site-footer-nav">
${each(
  links,
  (link) =>
    `        <li><a href="${escape(link.href)}"${
      isExternal(link.href) ? ' target="_blank" rel="noopener"' : ""
    }>${escape(link.label)}</a></li>`,
)}
      </ul>
      <p class="site-footer-legal">
        © ${new Date().getFullYear()} ${escape(site.author)} · Doble Grado en
        Ingeniería Informática y ADE · Universidad de Granada
      </p>
    </div>
  </footer>`;
}

/**
 * Wraps page markup in the site shell.
 * @param {LayoutOptions} options
 * @returns {string} a complete HTML document
 */
export function layout(options) {
  const canonical = `${site.url}/${options.path}`;
  const fullTitle = options.exactTitle
    ? options.title
    : `${options.title} · ${site.name}`;

  return `<!DOCTYPE html>
<html lang="${site.lang}" class="no-js" data-theme="dark">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escape(fullTitle)}</title>

  <meta name="description" content="${escape(options.description)}">
  <meta name="author" content="${escape(site.author)}">
  <meta name="keywords" content="${escape(site.keywords)}">
  <meta name="robots" content="index, follow">
  <meta name="theme-color" content="${site.themeColor}">
  <link rel="canonical" href="${escape(canonical)}">
${options.verification && site.googleSiteVerification ? `  <meta name="google-site-verification" content="${site.googleSiteVerification}">` : ""}
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${escape(site.name)}">
  <meta property="og:locale" content="es_ES">
  <meta property="og:url" content="${escape(canonical)}">
  <meta property="og:title" content="${escape(fullTitle)}">
  <meta property="og:description" content="${escape(options.description)}">
  <meta property="og:image" content="${site.url}${site.ogImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escape(fullTitle)}">
  <meta name="twitter:description" content="${escape(options.description)}">
  <meta name="twitter:image" content="${site.url}${site.ogImage}">

  <link rel="icon" type="image/svg+xml" href="${site.favicon}">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Manrope:wght@400;500;600;700&display=swap">
  <link rel="stylesheet" href="/assets/css/brutal.css">

  <script>${THEME_SNIPPET}</script>
${thirdParty(options)}
</head>

<body${options.bodyId ? ` id="${options.bodyId}"` : ""}>
  <a class="skip-link" href="#main">Saltar al contenido</a>

  <header class="topbar">
    <a class="topbar-brand" href="/">✦ <span class="brand-long">${escape(site.name)}</span></a>
    <div class="topbar-right">
${navLinks(options.nav ?? [])}
      <button class="topbar-toggle" type="button" data-theme-toggle
              aria-label="Cambiar tema claro u oscuro" title="Cambiar tema">
        <span class="ico-moon" aria-hidden="true">☾</span><span class="ico-sun" aria-hidden="true">☀</span>
      </button>
    </div>
  </header>

  <main id="main">
${options.body}
  </main>

${footer()}

  <script src="/assets/js/theme.js" defer></script>
  <script src="/assets/js/reveal.js" defer></script>
</body>

</html>
`;
}

export default layout;
