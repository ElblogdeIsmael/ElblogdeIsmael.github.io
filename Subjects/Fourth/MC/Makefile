# ==========================
# Makefile para la asignatura NOMBRE_ASIGNATURA
# ==========================

PROJECT = MC
SRC = src/*.md
MEDIA = media/*

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

OUTDIR = build
PDF = $(OUTDIR)/$(PROJECT).pdf
TEX = $(OUTDIR)/$(PROJECT).tex

PDF_ENGINE = latexmk
PDF_OPTIONS = -pdf -shell-escape -outdir=$(OUTDIR)

# -------------------------
# Reglas
# -------------------------

all: clean-all $(PDF)
	@echo "Abriendo $(PDF)..."
	xdg-open $(PDF) || open $(PDF)

$(PDF): $(TEX)
	@echo "Compilando $(PDF) con latexmk..."
	$(PDF_ENGINE) $(PDF_OPTIONS) $(TEX)

$(TEX): $(SRC) $(MEDIA) $(TEX_TEMPLATE) $(METADATA)
	@mkdir -p $(OUTDIR)
	@echo "Generando $(TEX) con pandoc..."
	pandoc $(SRC) \
		--from markdown \
		--template=$(TEX_TEMPLATE) \
		--metadata-file=$(METADATA) \
		--toc --toc-depth=2 \
		--top-level-division=chapter \
		--listings \
		-o $(TEX)

clean:
	@echo "Borrando lo generado en build/ y demás archivos temporales..."
	find build -type f ! -name '*.pdf' ! -name '*.tex' -exec rm -f {} +
	find . -maxdepth 1 -type f ! -name 'Makefile' ! -name '*.pdf' ! -name '*.tex' -exec rm -f {} +
	rm -rf _minted*


clean-all: clean
	@echo "Borrando TODO"
	rm -f $(PDF) $(TEX)
