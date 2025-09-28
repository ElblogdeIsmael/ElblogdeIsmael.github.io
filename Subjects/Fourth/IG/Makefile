# ==========================
# Makefile para la asignatura NOMBRE_ASIGNATURA
# ==========================

PROJECT = IG
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
	rm -f build/*.aux build/*.log build/*.out build/*.toc
	rm -f build/*.run.xml build/*.bcf build/*.blg build/*.bbl
	rm -f build/*.fdb_latexmk build/*.fls build/*.synctex.gz
	rm -f _minted.*
	rm -f build/*.lot build/*.lof build/*.bcf*

clean-all: clean
	@echo "Borrando TODO"
	rm -f $(PDF) $(TEX)
