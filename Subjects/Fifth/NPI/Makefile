# ==========================
# Makefile — Libro de Nuevos Paradigmas de Interacción (NPI)
# ==========================

PROJECT = NPI
TEMPLATE_DIR = ../../../extraFiles
TEX_TEMPLATE = estilo_libro_npi.latex
METADATA = $(TEMPLATE_DIR)/preambulos_oficiales/metadata.yaml

export TEXINPUTS := .:$(TEMPLATE_DIR)//:$(TEXINPUTS)

SRC = $(shell find src -path src/tex -prune -o -name '*.md' -print | sort)
TEXSRC = $(shell find src -name '*.tex')
MEDIA = $(wildcard media/*)

OUTDIR = build
PDF = $(OUTDIR)/$(PROJECT).pdf
TEX = $(OUTDIR)/$(PROJECT).tex

PDF_ENGINE = latexmk
PDF_OPTIONS = -pdf -shell-escape -interaction=nonstopmode -halt-on-error -outdir=$(OUTDIR)

all: $(PDF)

$(PDF): $(TEX) referencias.bib
	@echo "Compilando $(PDF) con latexmk..."
	$(PDF_ENGINE) $(PDF_OPTIONS) $(TEX)

$(TEX): $(SRC) $(TEXSRC) $(MEDIA) $(TEX_TEMPLATE) $(METADATA)
	@mkdir -p $(OUTDIR)
	@echo "Generando $(TEX) con pandoc..."
	pandoc $(SRC) \
		--from markdown \
		--template=$(TEX_TEMPLATE) \
		--metadata-file=$(METADATA) \
		--toc --toc-depth=2 \
		--top-level-division=chapter \
		-o $(TEX)

clean:
	@echo "Limpiando auxiliares..."
	find build -type f ! -name '*.pdf' ! -name '*.tex' -exec rm -f {} +
	find . -maxdepth 1 -type f ! -name 'Makefile' ! -name '*.bib' \
		! -name '*.pdf' ! -name '*.tex' ! -name '*.md' ! -name '*.latex' -exec rm -f {} +
	rm -rf _minted*

clean-all: clean
	rm -f $(PDF) $(TEX)

.PHONY: all clean clean-all
