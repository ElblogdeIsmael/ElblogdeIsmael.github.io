#!/usr/bin/env bash
# ==============================================================================
# GitVanguard - Script de Instalación Universal para Linux
# Desarrollado por Ismael Sallami Moreno <ismEngineer23@gmail.com>
# ==============================================================================

set -e

# Códigos de color ANSI para salida en terminal
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
BOLD='\033[1m'
NC='\033[0m' # Sin color

echo -e "${CYAN}${BOLD}"
echo "    󰊢  G I T   V A N G U A R D"
echo "    Controlador Git TUI de Alto Rendimiento para Linux"
echo -e "${NC}"

# 1. Comprobación estricta de entorno Linux
OS="$(uname -s)"
if [ "$OS" != "Linux" ]; then
    echo -e "${RED}${BOLD}✖ Error de compatibilidad:${NC}"
    echo "GitVanguard ha sido diseñado exclusivamente para sistemas Linux con arquitectura POSIX nativa."
    echo "Sistema detectado: $OS"
    exit 1
fi

# 2. Detección de arquitectura
ARCH="$(uname -m)"
case "$ARCH" in
    x86_64)
        TARGET_ARCH="x86_64"
        ;;
    aarch64|arm64)
        TARGET_ARCH="aarch64"
        ;;
    *)
        echo -e "${YELLOW}Advertencia: Arquitectura '$ARCH' no probada oficialmente. Se intentará compilación directa.${NC}"
        TARGET_ARCH="$ARCH"
        ;;
esac

INSTALL_DIR="$HOME/.local/bin"
mkdir -p "$INSTALL_DIR"
BIN_TARGET="$INSTALL_DIR/vanguard"

echo -e "${CYAN}▶ Sistema:${NC} Linux ($TARGET_ARCH)"
echo -e "${CYAN}▶ Destino:${NC} $BIN_TARGET"

# 3. Instalación del binario
INSTALLED=0

# Si se ejecuta desde el repositorio local compilado
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" 2>/dev/null && pwd || echo "")"
if [ -n "$SCRIPT_DIR" ] && [ -f "$SCRIPT_DIR/target/release/vanguard" ]; then
    echo -e "${GREEN}✔ Se ha encontrado el binario optimizado local en target/release/vanguard.${NC}"
    cp "$SCRIPT_DIR/target/release/vanguard" "$BIN_TARGET"
    chmod +x "$BIN_TARGET"
    INSTALLED=1
elif [ -n "$SCRIPT_DIR" ] && [ -f "$SCRIPT_DIR/Cargo.toml" ] && command -v cargo >/dev/null 2>&1; then
    echo -e "${YELLOW}Compilando versión optimizada con Cargo desde el repositorio local...${NC}"
    (cd "$SCRIPT_DIR" && cargo build --release)
    cp "$SCRIPT_DIR/target/release/vanguard" "$BIN_TARGET"
    chmod +x "$BIN_TARGET"
    INSTALLED=1
fi

# Si no está local, intentar descarga desde GitHub Releases
if [ "$INSTALLED" -eq 0 ]; then
    REPO="Ismael-Sallami/git-vanguard"
    RELEASE_URL="https://github.com/$REPO/releases/latest/download/vanguard-linux-$TARGET_ARCH"
    
    echo -e "${CYAN}Descargando binario precompilado desde GitHub Releases...${NC}"
    if curl -fsSL "$RELEASE_URL" -o "$BIN_TARGET" 2>/dev/null; then
        chmod +x "$BIN_TARGET"
        INSTALLED=1
    elif command -v cargo >/dev/null 2>&1; then
        echo -e "${YELLOW}Binario no publicado aún en releases. Instalando vía Cargo desde git...${NC}"
        cargo install --git "https://github.com/$REPO.git" --bin vanguard --root "$HOME/.local"
        INSTALLED=1
    fi
fi

if [ "$INSTALLED" -eq 0 ]; then
    echo -e "${RED}✖ No se pudo completar la instalación. Asegúrate de tener conexión a Internet o Rust/Cargo instalado.${NC}"
    exit 1
fi

# 4. Crear enlace simbólico o alias 'gv'
ln -sf "$BIN_TARGET" "$INSTALL_DIR/gv"

# 5. Verificación de la variable de entorno PATH
if [[ ":$PATH:" != *":$INSTALL_DIR:"* ]]; then
    echo -e "${YELLOW}Nota: '$INSTALL_DIR' no parece estar en tu variable PATH.${NC}"
    echo "Puedes añadirlo agregando la siguiente línea a tu ~/.bashrc o ~/.zshrc:"
    echo -e "    ${BOLD}export PATH=\"\$HOME/.local/bin:\$PATH\"${NC}"
fi

echo ""
echo -e "${GREEN}${BOLD}✔ ¡GitVanguard se ha instalado correctamente!${NC}"
echo -e "Comandos disponibles:"
echo -e "  - ${BOLD}vanguard${NC}  (comando principal)"
echo -e "  - ${BOLD}gv${NC}        (alias ultrarrápido)"
echo ""

# 6. Lanzamiento opcional
if [ -t 0 ] && [ -t 1 ]; then
    read -r -p "¿Deseas abrir GitVanguard ahora en el directorio actual? [S/n] " response
    case "$response" in
        [nN][oO]|[nN])
            echo "Puedes iniciarlo en cualquier momento ejecutando 'vanguard'."
            ;;
        *)
            if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
                exec "$BIN_TARGET"
            else
                echo -e "${YELLOW}El directorio actual no es un repositorio Git. Muévete a uno y ejecuta 'vanguard'.${NC}"
            fi
            ;;
    esac
fi
