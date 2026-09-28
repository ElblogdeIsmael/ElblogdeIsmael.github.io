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
echo "    G I T   V A N G U A R D"
echo "    Controlador Git TUI de Alto Rendimiento para Linux"
echo -e "${NC}"

# 1. Comprobación estricta de entorno Linux
OS="$(uname -s)"
if [ "$OS" != "Linux" ]; then
    echo -e "${RED}${BOLD}Error de compatibilidad:${NC}"
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

# Asegurar que el entorno de Cargo esté cargado si ya existía en el usuario
if [ -f "$HOME/.cargo/env" ]; then
    # shellcheck disable=SC1091
    source "$HOME/.cargo/env"
fi

INSTALLED=0
REPO="Ismael-Sallami/git-vanguard"

# Método A: Binario local compilado
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" 2>/dev/null && pwd || echo "")"
if [ -n "$SCRIPT_DIR" ] && [ -f "$SCRIPT_DIR/target/release/vanguard" ]; then
    echo -e "${GREEN}Se ha encontrado el binario optimizado local en target/release/vanguard.${NC}"
    cp "$SCRIPT_DIR/target/release/vanguard" "$BIN_TARGET"
    chmod +x "$BIN_TARGET"
    INSTALLED=1
fi

# Método B: Descarga directa desde GitHub Releases
if [ "$INSTALLED" -eq 0 ]; then
    RELEASE_URL="https://github.com/$REPO/releases/download/v0.1.0/vanguard-linux-$TARGET_ARCH"
    LATEST_URL="https://github.com/$REPO/releases/latest/download/vanguard-linux-$TARGET_ARCH"

    echo -e "${CYAN}Intentando descargar binario precompilado desde GitHub Releases...${NC}"
    if curl -fL --progress-bar "$RELEASE_URL" -o "$BIN_TARGET" 2>/dev/null || curl -fL --progress-bar "$LATEST_URL" -o "$BIN_TARGET" 2>/dev/null; then
        chmod +x "$BIN_TARGET"
        echo -e "${GREEN}Binario descargado e instalado correctamente.${NC}"
        INSTALLED=1
    else
        echo -e "${YELLOW}No se pudo obtener el binario precompilado para tu arquitectura o la versión aún no está en assets.${NC}"
    fi
fi

# Método C: Compilación desde código fuente mediante Cargo (instalando Rust si no existe)
if [ "$INSTALLED" -eq 0 ]; then
    echo -e "${CYAN}Preparando compilación con Rust...${NC}"

    if ! command -v cargo >/dev/null 2>&1; then
        echo -e "${YELLOW}Rust/Cargo no está presente en tu sistema.${NC}"
        echo -e "${CYAN}Instalando Rust automáticamente mediante rustup oficial...${NC}"
        curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
        if [ -f "$HOME/.cargo/env" ]; then
            # shellcheck disable=SC1091
            source "$HOME/.cargo/env"
        fi
    fi

    if command -v cargo >/dev/null 2>&1; then
        echo -e "${GREEN}Rust/Cargo detectado. Compilando GitVanguard desde el código fuente...${NC}"
        
        # Si estamos dentro del repo fuente
        if [ -n "$SCRIPT_DIR" ] && [ -f "$SCRIPT_DIR/Cargo.toml" ]; then
            (cd "$SCRIPT_DIR" && cargo build --release)
            cp "$SCRIPT_DIR/target/release/vanguard" "$BIN_TARGET"
            chmod +x "$BIN_TARGET"
            INSTALLED=1
        else
            # Clonar en directorio temporal y compilar
            BUILD_TMP="$(mktemp -d)"
            echo -e "${CYAN}Clonando repositorio en directorio temporal para compilar...${NC}"
            git clone --depth 1 "https://github.com/$REPO.git" "$BUILD_TMP"
            (cd "$BUILD_TMP" && cargo build --release)
            cp "$BUILD_TMP/target/release/vanguard" "$BIN_TARGET"
            chmod +x "$BIN_TARGET"
            rm -rf "$BUILD_TMP"
            INSTALLED=1
        fi
    fi
fi

if [ "$INSTALLED" -eq 0 ]; then
    echo -e "${RED}Error: No fue posible completar la instalación de GitVanguard.${NC}"
    exit 1
fi

# 4. Crear enlace simbólico para alias 'gv'
ln -sf "$BIN_TARGET" "$INSTALL_DIR/gv"

# 5. Verificación de la variable de entorno PATH
if [[ ":$PATH:" != *":$INSTALL_DIR:"* ]]; then
    echo ""
    echo -e "${YELLOW}Nota: '$INSTALL_DIR' no está en tu variable PATH actual.${NC}"
    echo "Para poder invocar 'vanguard' o 'gv' directamente, añade esto a tu ~/.bashrc o ~/.zshrc:"
    echo -e "    ${BOLD}export PATH=\"\$HOME/.local/bin:\$PATH\"${NC}"
fi

echo ""
echo -e "${GREEN}${BOLD}GitVanguard se ha instalado correctamente.${NC}"
echo -e "Comandos disponibles:"
echo -e "  - ${BOLD}vanguard${NC}  (comando principal)"
echo -e "  - ${BOLD}gv${NC}        (alias rápido)"
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
