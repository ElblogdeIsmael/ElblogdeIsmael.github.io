# ==========================
# Makefile para la asignatura NOMBRE_ASIGNATURA
# ==========================

# Nombre de la asignatura (se usará para nombrar el PDF)
PROJECT = DO-1
# COURSE = Modelos de Computación


# Archivos de entrada
SRC = src/*.md
MEDIA = media/*

# Archivos comunes (ajusta rutas si es necesario)
TEX_TEMPLATE = ../../../extraFiles/preambulos_oficiales/estilo.latex
METADATA = ../../../extraFiles/preambulos_oficiales/metadata.yaml

# Configuración de compilación
PDF_ENGINE = latexmk
# PDF_ENGINE = pdflatex
PDF_OPTIONS = -shell-escape

# Carpeta de salida
OUTDIR = build
PDF = $(OUTDIR)/$(PROJECT).pdf
TEX = $(OUTDIR)/$(PROJECT).tex

# -------------------------
# Reglas
# -------------------------

# Default: compilar el PDF
all: $(PDF)

$(PDF): $(TEX)
	@echo "Generando $(PDF)..."
	$(PDF_ENGINE) $(PDF_OPTIONS) -output-directory=$(OUTDIR) $(TEX)

$(TEX): $(SRC) $(MEDIA) $(TEX_TEMPLATE) $(METADATA)
	@mkdir -p $(OUTDIR)
	@echo "Generando $(TEX)..."
	pandoc $(SRC) \
		--from markdown \
		--template=$(TEX_TEMPLATE) \
		--metadata-file=$(METADATA) \
		--toc --toc-depth=2 \
		--top-level-division=chapter \
		--listings \
		-o $(TEX)


# Limpiar los archivos generados
clean:
	@echo "Borrando lo generado en build/ y demás archivos temporales..."
	rm -f build/*.aux
	rm -f build/*.log
	rm -f build/*.out
	rm -f build/*.toc
	rm -f build/*.run.xml
	rm -f _minted.*
	rm -f build/*.fdb_latexmk
	rm -f build/*.fls
	rm -f build/*.synctex.gz
	rm -f build/*.bcf

clean-all: clean
	@echo "Borrando TODO"
	rm -f $(PDF)
	rm -f $(TEX)

# -------------------------
# Ejemplos de uso:
# -------------------------
#   make        -> compila NOMBRE_ASIGNATURA.pdf
#   make clean  -> borra el PDF y el TEX
