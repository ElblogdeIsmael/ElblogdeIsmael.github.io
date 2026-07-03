#!/usr/bin/env python3
"""Poda archivos pesados y NO referenciados de una copia del sitio antes de
publicar en GitHub Pages.

Regla: cualquier archivo referenciado por un href/src de algún HTML (o por
url(...) en CSS embebido) se conserva siempre. Los archivos que pesen >= UMBRAL
y que nadie referencie se eliminan. Los archivos por debajo del umbral se
conservan tal cual (preserva assets pequeños y dependencias transitivas).

Uso:  prune-pages.py <raiz_del_sitio> [umbral_bytes]
      DRY_RUN=1 prune-pages.py .   # no borra, solo informa
"""
import html
import os
import re
import sys
from urllib.parse import unquote, urlsplit

ROOT = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else ".")
THRESHOLD = int(sys.argv[2]) if len(sys.argv) > 2 else 1_048_576  # 1 MB
DRY = os.environ.get("DRY_RUN") == "1"

# Directorios que nunca forman parte del sitio publicado.
SKIP_DIRS = {".git", ".github", "node_modules"}

ATTR_RE = re.compile(r"""(?:href|src)\s*=\s*["']([^"']+)["']""", re.I)
URL_RE = re.compile(r"""url\(\s*["']?([^"')]+)["']?\s*\)""", re.I)

referenced = set()


def walk(root):
    for dirpath, dirs, files in os.walk(root):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for f in files:
            yield os.path.join(dirpath, f)


def add_ref(raw, htmlpath):
    raw = html.unescape(raw.strip())
    if not raw or raw.startswith(
        ("http://", "https://", "//", "mailto:", "data:", "javascript:", "#", "tel:")
    ):
        return
    raw = urlsplit(raw).path  # descarta ?query y #fragment
    if not raw:
        return
    raw = unquote(raw)  # decodifica %20, acentos, etc.
    if raw.startswith("/"):
        target = os.path.join(ROOT, raw.lstrip("/"))
    else:
        target = os.path.join(os.path.dirname(htmlpath), raw)
    referenced.add(os.path.normpath(target))


# 1) Reunir todo lo referenciado por HTML (incluye HTML anidados p.ej. test.html).
for p in walk(ROOT):
    if p.lower().endswith((".html", ".htm")):
        try:
            txt = open(p, encoding="utf-8", errors="ignore").read()
        except OSError:
            continue
        for m in ATTR_RE.finditer(txt):
            add_ref(m.group(1), p)
        for m in URL_RE.finditer(txt):
            add_ref(m.group(1), p)

# 2) Eliminar pesados no referenciados.
removed = kept = removed_bytes = 0
for p in walk(ROOT):
    try:
        sz = os.path.getsize(p)
    except OSError:
        continue
    if sz < THRESHOLD:
        continue
    if os.path.normpath(p) in referenced:
        kept += 1
        continue
    removed += 1
    removed_bytes += sz
    print(f"DROP {sz // 1048576:4d}MB {os.path.relpath(p, ROOT)}")
    if not DRY:
        os.remove(p)

print(f"\nPesados conservados (referenciados): {kept}")
print(f"Eliminados: {removed} archivos, {removed_bytes // 1048576} MB")
