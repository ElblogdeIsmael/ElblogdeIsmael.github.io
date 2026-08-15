# ==========================
# Makefile de asignatura — plantilla
# ==========================
#
# Copia de Subjects/_template. Solo hay dos líneas que tocar: PROJECT y
# TEMPLATE_DIR. Todo lo demás vale tal cual.

# El código de la asignatura. Da nombre al PDF: build/<PROJECT>.pdf
PROJECT = ED

# Cuántos niveles hay hasta la raíz del repositorio. Con la asignatura en
# Subjects/<Curso>/<CODIGO>/ son tres. Si la mueves, ajusta esto.
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

# Sorted so the chapters come out in the order their filenames say.
# src/tex/ is pruned: its README.md is documentation for whoever writes the
# subject, not a chapter, and without the prune it lands in the PDF.
SRC = $(shell find src -path src/tex -prune -o -name '*.md' -print | sort)

# The .tex files the markdown pulls in with \input. They are prerequisites and
# not pandoc arguments: LaTeX resolves them at compile time, pandoc never sees
# them. Without this line, editing a diagram does not rebuild anything.
TEXSRC = $(shell find src -name '*.tex')

# wildcard, not media/*, so an empty media/ leaves this empty instead of
# leaving make with a prerequisite that does not exist.
MEDIA = $(wildcard media/*)

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

# No --listings on purpose. That package reads code verbatim, so it never goes
# through inputenc: one accent inside a code block aborts the build, and the
# error points at a line that is not the culprit. AEF and MAC both lost an
# afternoon to it. Pandoc's default highlighting handles UTF-8 fine. Only add
# --listings if every code block in this subject is plain ASCII.
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

# The second find sweeps the subject directory, where latexmk drops stray
# auxiliary files. referencias.bib is excluded on purpose: it lives here
# because biber resolves it from the root document, and without the exclusion
# `make clean` deleted the bibliography source.
clean:
	@echo "Borrando lo generado en build/ y demás archivos temporales..."
	find build -type f ! -name '*.pdf' ! -name '*.tex' -exec rm -f {} +
	find . -maxdepth 1 -type f ! -name 'Makefile' ! -name '*.bib' \
		! -name '*.pdf' ! -name '*.tex' ! -name '*.md' -exec rm -f {} +
	rm -rf _minted*

clean-all: clean
	@echo "Borrando TODO"
	rm -f $(PDF) $(TEX)

.PHONY: all clean clean-all
