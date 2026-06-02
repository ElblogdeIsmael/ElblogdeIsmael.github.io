import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve, join } from "node:path";
import { existsSync, statSync, createReadStream } from "node:fs";

const REPO_ROOT = resolve(__dirname, "..");

const MIME: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".css": "text/css",
  ".js": "text/javascript",
  ".html": "text/html",
  ".json": "application/json",
  ".zip": "application/zip",
  ".pdf": "application/pdf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

// En dev, Vite sirve `web/` como raíz, así que los recursos que viven en la raíz
// del repo (/assets/images, /courses, /htmlFiles, /Subjects) darían 404. Este
// middleware los sirve desde la raíz del repo para que la preview local funcione
// igual que producción. No afecta al build.
function serveRepoRootStatic(): Plugin {
  const PREFIXES = ["/assets/", "/courses/", "/htmlFiles/", "/Subjects/"];
  return {
    name: "serve-repo-root-static",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url ?? "").split("?")[0];
        if (!PREFIXES.some((p) => url.startsWith(p))) return next();
        const filePath = join(REPO_ROOT, decodeURIComponent(url));
        if (!filePath.startsWith(REPO_ROOT)) return next(); // anti path-traversal
        if (!existsSync(filePath) || !statSync(filePath).isFile()) return next();
        const ext = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
        res.setHeader("Content-Type", MIME[ext] ?? "application/octet-stream");
        createReadStream(filePath).pipe(res);
      });
    },
  };
}

// Build → raíz del repo: ../index.html, ../historia.html y ../assets/*
// (GitHub Pages sirve la raíz; no hay CI). emptyOutDir:false para no borrar nada.
export default defineConfig({
  plugins: [react(), tailwindcss(), serveRepoRootStatic()],
  base: "/",
  build: {
    outDir: REPO_ROOT,
    emptyOutDir: false,
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        historia: resolve(__dirname, "historia.html"),
      },
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
