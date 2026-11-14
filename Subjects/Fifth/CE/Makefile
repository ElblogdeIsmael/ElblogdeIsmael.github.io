# ==========================
# Makefile de Creación de Empresas (CE)
# ==========================

PROJECT = CE
TEMPLATE_DIR = ../../../extraFiles
TEX_TEMPLATE = ce_book.latex
METADATA = $(TEMPLATE_DIR)/preambulos_oficiales/metadata.yaml

export TEXINPUTS := .:$(TEMPLATE_DIR)//:$(TEXINPUTS)

SRC = $(shell find src -path src/tex -prune -o -name '*.md' -print | sort)
TEXSRC = $(shell find src -name '*.tex')
MEDIA = $(wildcard media/*)

OUTDIR = build
PDF = $(OUTDIR)/$(PROJECT).pdf
TEX = $(OUTDIR)/$(PROJECT).tex

PDF_ENGINE = latexmk
PDF_OPTIONS = -xelatex -shell-escape -interaction=nonstopmode -outdir=$(OUTDIR)

all: $(PDF)

$(PDF): $(TEX) $(TEXSRC) $(MEDIA)
	@echo "Compilando $(PDF) con XeLaTeX..."
	$(PDF_ENGINE) $(PDF_OPTIONS) $(TEX)

$(TEX): $(SRC) $(TEXSRC) $(MEDIA) $(TEX_TEMPLATE) $(METADATA)
	@mkdir -p $(OUTDIR)
	@echo "Generando $(TEX) con pandoc..."
	pandoc $(SRC) \
		--from markdown \
		--template=$(TEX_TEMPLATE) \
		--metadata-file=$(METADATA) \
		--toc --toc-depth=1 \
		--top-level-division=chapter \
		-o $(TEX)

clean:
	@echo "Borrando archivos temporales de compilación..."
	find build -type f ! -name '*.pdf' ! -name '*.tex' -exec rm -f {} +
	find . -maxdepth 1 -type f ! -name 'Makefile' ! -name '*.bib' \
		! -name '*.pdf' ! -name '*.tex' ! -name '*.md' ! -name '*.latex' -exec rm -f {} +
	rm -rf _minted*

clean-all: clean
	@echo "Borrando PDF y TEX generados..."
	rm -f $(PDF) $(TEX)

.PHONY: all clean clean-all
