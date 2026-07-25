/**
 * Redirect stub for a URL that moved.
 *
 * GitHub Pages cannot send a 301, so the page does the next best thing: a
 * canonical link tells search engines where the content lives now, a meta
 * refresh moves the reader immediately, and a plain link covers the case where
 * the refresh is blocked.
 *
 * `noindex` keeps the stub itself out of search results while `canonical`
 * passes the ranking on to the new URL.
 *
 * @author Ismael Sallami Moreno
 */

import { escape } from "../lib/html.mjs";
import site from "../../content/site.mjs";

/**
 * @param {{from: string, to: string}} redirect
 * @returns {string} a complete HTML document
 */
export function renderRedirect(redirect) {
  const target = site.url + redirect.to;

  return `<!DOCTYPE html>
<html lang="${site.lang}">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Esta página se ha movido · ${escape(site.name)}</title>
  <meta name="robots" content="noindex, follow">
  <link rel="canonical" href="${escape(target)}">
  <meta http-equiv="refresh" content="0; url=${escape(redirect.to)}">
  <link rel="stylesheet" href="/assets/css/brutal.css">
</head>

<body>
  <main class="page">
    <h1 class="display">Se ha <span class="ttl-stroke">movido</span></h1>
    <p class="lead" style="margin-top:28px">
      Esta página vive ahora en otra dirección. Si tu navegador no te lleva solo:
    </p>
    <p style="margin-top:28px">
      <a class="btn btn-solid" href="${escape(redirect.to)}">Ir a la página nueva</a>
    </p>
  </main>
</body>

</html>
`;
}

export default renderRedirect;
