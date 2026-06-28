#!/usr/bin/env node
/*
 * build.mjs — Sincroniza y CIFRA los informes de mifos-gazelle para servirlos en
 * /mifos/ (GitHub Pages, estático). Recorre la carpeta de informes, recoge los
 * .md (y las imágenes que referencien), deriva una clave AES-256 desde
 * `usuario:contraseña` con PBKDF2 y cifra cada fichero con AES-256-GCM.
 *
 * La salida (data/*.enc, index.enc, manifest.json) es lo único que se commitea.
 * Sin la contraseña, los .enc son ruido: nadie puede leerlos aunque baje el repo.
 *
 * Uso:
 *   MIFOS_PASS=tu-pass node mifos/build.mjs
 *   MIFOS_USER=GSOC-MIFOS MIFOS_PASS=... MIFOS_SRC=/ruta/informes node mifos/build.mjs
 *
 * La contraseña NUNCA se escribe en disco ni se commitea: llega por entorno.
 */

import { webcrypto as crypto } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ---------- Configuración ----------
const SRC =
  process.env.MIFOS_SRC ||
  "/home/ismael-sallami/workspace_ssd/PROJECTS_GSOC_2026/MIFOS/mifos-gazelle/informes";
const USER = process.env.MIFOS_USER || "GSOC-MIFOS";
const PASS = process.env.MIFOS_PASS;

const OUT_DIR = __dirname;
const DATA_DIR = path.join(OUT_DIR, "data");
const ITERATIONS = 250000;

const IMG_RE = /\.(png|jpe?g|gif|svg|webp|avif)$/i;

if (!PASS) {
  console.error(
    "\n  ✗ Falta MIFOS_PASS. La contraseña debe venir por entorno, nunca en el código.\n" +
      "    Ejemplo:  MIFOS_PASS=tu-contraseña node mifos/build.mjs\n"
  );
  process.exit(1);
}

// ---------- Cripto ----------
const enc = new TextEncoder();

async function deriveKey(passphrase, salt) {
  const baseKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(passphrase),
    "PBKDF2",
    false,
    ["deriveKey"]
  );
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

// Devuelve base64 de (iv[12] || ciphertext) — formato que entiende el navegador.
async function encryptBytes(key, bytes) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ct = new Uint8Array(
    await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, bytes)
  );
  const packed = new Uint8Array(iv.length + ct.length);
  packed.set(iv, 0);
  packed.set(ct, iv.length);
  return Buffer.from(packed).toString("base64");
}

// ---------- Recorrido de ficheros ----------
async function walk(dir) {
  const out = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith(".")) continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...(await walk(full)));
    } else if (e.isFile() && e.name.toLowerCase().endsWith(".md")) {
      out.push(full);
    }
  }
  return out;
}

function firstTitle(text, fallback) {
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    const m = /^#{1,3}\s+(.+?)\s*#*\s*$/.exec(line.trim());
    if (m) return m[1].replace(/[*_`]/g, "").trim();
  }
  return fallback;
}

// Extrae rutas de imágenes locales referenciadas en el markdown.
function referencedImages(text, mdRel) {
  const dir = path.posix.dirname(mdRel);
  const found = new Set();
  const add = (raw) => {
    if (!raw) return;
    let p = raw.trim().split(/\s+/)[0].replace(/^<|>$/g, "");
    if (/^(https?:)?\/\//i.test(p) || p.startsWith("data:")) return;
    if (!IMG_RE.test(p)) return;
    const resolved = path.posix.normalize(path.posix.join(dir, p));
    if (resolved.startsWith("..")) return; // fuera del árbol de informes
    found.add(resolved);
  };
  let m;
  const mdImg = /!\[[^\]]*\]\(([^)]+)\)/g; // ![alt](ruta)
  while ((m = mdImg.exec(text))) add(m[1]);
  const htmlImg = /<img[^>]+src=["']([^"']+)["']/gi; // <img src="ruta">
  while ((m = htmlImg.exec(text))) add(m[1]);
  return [...found];
}

// Orden natural: "2-" antes que "10-".
const natCompare = (a, b) =>
  a.localeCompare(b, "es", { numeric: true, sensitivity: "base" });

// ---------- Construcción del árbol ----------
function buildTree(fileEntries) {
  const root = { name: "", type: "dir", children: [] };
  const dirNode = (parts) => {
    let node = root;
    for (const part of parts) {
      let next = node.children.find(
        (c) => c.type === "dir" && c.name === part
      );
      if (!next) {
        next = { name: part, type: "dir", children: [] };
        node.children.push(next);
      }
      node = next;
    }
    return node;
  };
  for (const f of fileEntries) {
    const parts = f.rel.split("/");
    const fileName = parts.pop();
    const parent = dirNode(parts);
    parent.children.push({
      name: fileName,
      type: "file",
      id: f.id,
      title: f.title,
    });
  }
  const sortNode = (node) => {
    node.children.sort((a, b) => {
      if (a.type !== b.type) return a.type === "dir" ? -1 : 1;
      return natCompare(a.name, b.name);
    });
    node.children.filter((c) => c.type === "dir").forEach(sortNode);
  };
  sortNode(root);
  return root.children;
}

// ---------- Main ----------
async function main() {
  console.log(`\n  Fuente:   ${SRC}`);
  console.log(`  Usuario:  ${USER}`);
  console.log(`  Salida:   ${OUT_DIR}\n`);

  await fs.access(SRC).catch(() => {
    console.error(`  ✗ No existe la carpeta de informes: ${SRC}`);
    process.exit(1);
  });

  // 1) Derivar clave
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key = await deriveKey(`${USER}:${PASS}`, salt);

  // 2) Recoger .md
  const mdFiles = (await walk(SRC)).sort(natCompare);
  if (mdFiles.length === 0) {
    console.error("  ✗ No se encontró ningún .md en la fuente.");
    process.exit(1);
  }

  // 3) Limpiar/crear data/
  await fs.rm(DATA_DIR, { recursive: true, force: true });
  await fs.mkdir(DATA_DIR, { recursive: true });

  let counter = 0;
  const nextId = () => String(++counter).padStart(4, "0");

  const fileEntries = []; // { rel, id, title }
  const pathToId = {}; // rel -> id (para enlaces internos e imágenes)
  const wantedImages = new Set(); // rel de imágenes referenciadas

  // 4) Cifrar cada .md
  for (const abs of mdFiles) {
    const rel = path.relative(SRC, abs).split(path.sep).join("/");
    const text = await fs.readFile(abs, "utf8");
    const id = nextId();
    const title = firstTitle(text, rel.split("/").pop().replace(/\.md$/i, ""));

    await fs.writeFile(
      path.join(DATA_DIR, `${id}.enc`),
      await encryptBytes(key, enc.encode(text))
    );

    fileEntries.push({ rel, id, title });
    pathToId[rel] = id;
    for (const img of referencedImages(text, rel)) wantedImages.add(img);
  }

  // 5) Cifrar imágenes referenciadas que existan
  const assets = {}; // rel -> { id, mime }
  let imgCount = 0;
  for (const rel of wantedImages) {
    const abs = path.join(SRC, rel);
    try {
      const bytes = await fs.readFile(abs);
      const id = nextId();
      await fs.writeFile(
        path.join(DATA_DIR, `${id}.enc`),
        await encryptBytes(key, new Uint8Array(bytes))
      );
      assets[rel] = { id, mime: mimeFor(rel) };
      imgCount++;
    } catch {
      console.warn(`  · imagen referenciada no encontrada (omitida): ${rel}`);
    }
  }

  // 6) Índice cifrado
  const index = {
    version: 1,
    user: USER, // solo informativo; la seguridad la da el cifrado
    count: fileEntries.length,
    tree: buildTree(fileEntries),
    pathToId,
    assets,
  };
  await fs.writeFile(
    path.join(OUT_DIR, "index.enc"),
    await encryptBytes(key, enc.encode(JSON.stringify(index)))
  );

  // 7) Manifest (NO secreto)
  const manifest = {
    version: 1,
    algo: "AES-GCM",
    kdf: {
      name: "PBKDF2",
      hash: "SHA-256",
      iterations: ITERATIONS,
      salt: Buffer.from(salt).toString("base64"),
    },
  };
  await fs.writeFile(
    path.join(OUT_DIR, "manifest.json"),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`  ✓ Cifrados ${fileEntries.length} informes (.md)`);
  console.log(`  ✓ Cifradas ${imgCount} imágenes`);
  console.log(`  ✓ index.enc + manifest.json escritos`);
  console.log(`\n  Listo. Sirve la web y entra en /mifos/ con tus credenciales.\n`);
}

function mimeFor(rel) {
  const ext = rel.split(".").pop().toLowerCase();
  return (
    {
      png: "image/png",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      gif: "image/gif",
      svg: "image/svg+xml",
      webp: "image/webp",
      avif: "image/avif",
    }[ext] || "application/octet-stream"
  );
}

main().catch((err) => {
  console.error("\n  ✗ Error en el build:", err);
  process.exit(1);
});
