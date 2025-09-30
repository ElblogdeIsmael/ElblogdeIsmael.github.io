# ==========================
# Makefile para la asignatura NOMBRE_ASIGNATURA
# ==========================

PROJECT = MC
SRC = src/*.md
MEDIA = media/*

TEX_TEMPLATE = ../../../extraFiles/preambulos_oficiales/estilo.latex
METADATA = ../../../extraFiles/preambulos_oficiales/metadata.yaml

OUTDIR = build
PDF = $(OUTDIR)/$(PROJECT).pdf
TEX = $(OUTDIR)/$(PROJECT).tex

PDF_ENGINE = latexmk
PDF_OPTIONS = -pdf -shell-escape -outdir=$(OUTDIR)

# -------------------------
# Reglas
# -------------------------

all: $(PDF)

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
