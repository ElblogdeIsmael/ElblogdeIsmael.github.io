# ==========================
# Makefile para la asignatura (Pandoc)
# ==========================

PROJECT = AEF
SRC = $(shell find src -name '*.md' | sort)
AUXDIR = .tex-other-files
TEX = $(PROJECT).tex

TEMPLATE_DIR = ../../../extraFiles
TEX_TEMPLATE = $(TEMPLATE_DIR)/preambulos_oficiales/estilo.latex
METADATA = $(TEMPLATE_DIR)/preambulos_oficiales/metadata.yaml

# The template inputs its pieces with a path relative to extraFiles/, so
# LaTeX needs that directory on its search path. Only this file knows how
# deep the subject sits, which is why the depth lives here and not in the
# template: the template is shared by subjects at different depths.
# The leading `.` matters: several subjects keep their own comandos.tex next
# to the document, and without it the shared one would shadow theirs.
export TEXINPUTS := .:$(TEMPLATE_DIR)//:$(TEXINPUTS)

# Only pass template/metadata flags to pandoc if the files exist
TEMPLATE_FLAG = $(if $(wildcard $(TEX_TEMPLATE)),--template=$(TEX_TEMPLATE),)
METADATA_FLAG = $(if $(wildcard $(METADATA)),--metadata-file=$(METADATA),)

PDF_ENGINE = latexmk
PDF_OPTIONS = -pdf -interaction=nonstopmode -halt-on-error -shell-escape -auxdir=$(AUXDIR) -outdir=.

all: $(PROJECT).pdf

$(PROJECT).pdf: $(TEX)
	@echo "Compilando $(PROJECT).pdf con latexmk..."
	@mkdir -p $(AUXDIR)
	@$(PDF_ENGINE) $(PDF_OPTIONS) -jobname=$(PROJECT) $(TEX) || \
		( if [ -f $(PROJECT).pdf ]; then \
			echo "PDF generado a pesar de errores; haciendo exit 0"; \
			exit 0; \
		else \
			echo "latexmk falló y no se generó $(PROJECT).pdf"; \
			exit 1; \
		fi )

$(TEX): $(SRC) $(TEX_TEMPLATE) $(METADATA)
	@echo "Generando $(TEX) con pandoc..."
	pandoc $(SRC) \
		--from markdown \
		$(TEMPLATE_FLAG) \
		$(METADATA_FLAG) \
		--toc --toc-depth=2 \
		--top-level-division=chapter \
		-o $(TEX)

# Sin --listings a propósito. Esta asignatura es contabilidad y no lleva código:
# sus bloques son diagramas de razonamiento con flechas, deltas y acentos, y el
# paquete listings lee en verbatim, así que no pasa por inputenc y aborta ante
# cualquiera de esos símbolos. Con verbatim salen bien.

# If template/metadata are optional, don't force their existence for the target
.PHONY: all clean clean-all

clean:
	@echo "Limpiando archivos temporales..."
	rm -rf $(AUXDIR)
	rm -f $(TEX)
	rm -rf _minted*

clean-all: clean
	@echo "Borrando pdf..."
	rm -f $(PROJECT).pdf
