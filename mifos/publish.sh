#!/usr/bin/env bash
#
# publish.sh — Publica los informes de mifos-gazelle en /mifos/.
#
# Qué hace, en orden:
#   1. Carga credenciales (entorno o credenciales.txt).
#   2. Comprueba si han cambiado/añadido informes en el origen (hash de contenido).
#   3. Si no hay cambios: no hace nada.
#   4. Si hay cambios: re-cifra (build.mjs), commitea SOLO mifos/ + .gitignore
#      y hace push a main (GitHub Pages lo publica).
#
# Uso:
#   bash mifos/publish.sh
#   MIFOS_PASS=... bash mifos/publish.sh        # forzar credenciales por entorno
#   FORCE=1 bash mifos/publish.sh               # re-publicar aunque no haya cambios
#
set -euo pipefail

MIFOS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(cd "$MIFOS_DIR/.." && pwd)"
CREDS_FILE="$MIFOS_DIR/credenciales.txt"
STATE_FILE="$MIFOS_DIR/.last-publish"

SRC="${MIFOS_SRC:-/home/ismael-sallami/workspace_ssd/PROJECTS_GSOC_2026/MIFOS/mifos-gazelle/informes}"

c_ok()   { printf '\033[32m%s\033[0m\n' "$*"; }
c_info() { printf '\033[36m%s\033[0m\n' "$*"; }
c_warn() { printf '\033[33m%s\033[0m\n' "$*"; }
c_err()  { printf '\033[31m%s\033[0m\n' "$*" >&2; }

# ---------- 1) Credenciales ----------
MIFOS_USER="${MIFOS_USER:-}"
MIFOS_PASS="${MIFOS_PASS:-}"
if [ -z "$MIFOS_PASS" ] && [ -f "$CREDS_FILE" ]; then
  # Lee usuario=... / password=... ignorando comentarios y espacios.
  file_user="$(grep -E '^[[:space:]]*usuario[[:space:]]*=' "$CREDS_FILE" | head -n1 | cut -d= -f2- | xargs || true)"
  file_pass="$(grep -E '^[[:space:]]*password[[:space:]]*=' "$CREDS_FILE" | head -n1 | cut -d= -f2- | xargs || true)"
  [ -z "$MIFOS_USER" ] && MIFOS_USER="$file_user"
  [ -z "$MIFOS_PASS" ] && MIFOS_PASS="$file_pass"
fi
MIFOS_USER="${MIFOS_USER:-GSOC-MIFOS}"

if [ -z "$MIFOS_PASS" ]; then
  c_err "✗ No hay contraseña. Define MIFOS_PASS o crea $CREDS_FILE con 'password=...'."
  exit 1
fi

# ---------- 2) Detección de cambios en el origen ----------
if [ ! -d "$SRC" ]; then
  c_err "✗ No existe la carpeta de informes: $SRC"
  exit 1
fi

n_md="$(find "$SRC" -name '*.md' | wc -l | tr -d ' ')"
src_hash="$(find "$SRC" -name '*.md' -exec sha256sum {} + | sort | sha256sum | cut -d' ' -f1)"
c_info "Origen: $SRC  ($n_md informes .md)"

if [ "${FORCE:-0}" != "1" ] && [ -f "$STATE_FILE" ] && [ "$(cat "$STATE_FILE")" = "$src_hash" ]; then
  c_ok "✓ No hay informes nuevos ni cambios. Nada que publicar."
  exit 0
fi

c_info "Cambios detectados en el origen → re-cifrando y publicando…"

# ---------- 3) Re-cifrar ----------
MIFOS_USER="$MIFOS_USER" MIFOS_PASS="$MIFOS_PASS" MIFOS_SRC="$SRC" \
  node "$MIFOS_DIR/build.mjs"

# ---------- 4) Commit + push (solo mifos/ + .gitignore) ----------
cd "$REPO_DIR"
# Solo mifos/. El .gitignore de este repo se ignora a sí mismo (convención del
# proyecto), así que no se añade aquí; sus reglas protegen los secretos en local.
git add mifos/

if git diff --cached --quiet; then
  c_warn "No hay cambios que commitear (el cifrado no varió el índice de ficheros)."
  echo "$src_hash" > "$STATE_FILE"
  exit 0
fi

stamp="$(date '+%Y-%m-%d %H:%M')"
git commit -m "chore(mifos): publicar informes cifrados ($stamp)" \
  -m "Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"

branch="$(git rev-parse --abbrev-ref HEAD)"
c_info "Haciendo push a origin/$branch…"
if git push origin "$branch"; then
  echo "$src_hash" > "$STATE_FILE"
  c_ok "✓ Publicado. GitHub Pages servirá los cambios en unos minutos."
else
  c_err "✗ El push falló. El commit está hecho en local; revisa la conexión/credenciales y reintenta 'git push'."
  c_err "  (No se actualizó $STATE_FILE para que el próximo run reintente.)"
  exit 1
fi
