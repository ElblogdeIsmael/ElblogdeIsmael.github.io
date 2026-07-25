/**
 * Static preview server for local checks.
 *
 * Serves the repository root the way GitHub Pages does, so paths behave the
 * same locally as in production: a directory resolves to its `index.html`.
 * No dependencies, no watching, no live reload. Rebuild and refresh.
 *
 *   node build/serve.mjs [port]
 *
 * @author Ismael Sallami Moreno
 */

import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { resolve, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.argv[2]) || 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".zip": "application/zip",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

/**
 * Maps a request path to a file, mirroring GitHub Pages: a directory serves
 * its `index.html`, and an extensionless path tries `.html` first.
 * @param {string} urlPath
 * @returns {string|null} absolute file path, or null when nothing matches
 */
function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const target = resolve(ROOT, `.${clean}`);

  // Refuse anything that escapes the repository.
  if (!target.startsWith(ROOT)) return null;

  if (existsSync(target)) {
    if (statSync(target).isDirectory()) {
      const index = join(target, "index.html");
      return existsSync(index) ? index : null;
    }
    return target;
  }

  const asHtml = `${target}.html`;
  return existsSync(asHtml) ? asHtml : null;
}

createServer((request, response) => {
  const file = resolveFile(request.url ?? "/");

  if (!file) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(`404 ${request.url}`);
    console.log(`404 ${request.url}`);
    return;
  }

  response.writeHead(200, {
    "Content-Type": MIME[extname(file).toLowerCase()] ?? "application/octet-stream",
    "Cache-Control": "no-store",
  });
  createReadStream(file).pipe(response);
}).listen(PORT, () => {
  console.log(`Serving ${ROOT}\n  http://localhost:${PORT}`);
});
