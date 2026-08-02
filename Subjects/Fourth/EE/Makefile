# ==========================
# Makefile para la asignatura (LaTeX Puro)
# ==========================

PROJECT = EE
MAIN = EE.tex
AUXDIR = .tex-other-files

TEMPLATE_DIR = ../../../extraFiles

# EE.tex inputs the shared preamble with a path relative to extraFiles/, so
# LaTeX needs that directory on its search path. Only this file knows how deep
# the subject sits, which is why the depth lives here and not in EE.tex.
# The leading `.` matters: several subjects keep their own comandos.tex next
# to the document, and without it the shared one would shadow theirs.
export TEXINPUTS := .:$(TEMPLATE_DIR)//:$(TEXINPUTS)

PDF_ENGINE = latexmk
PDF_OPTIONS = -pdf -interaction=nonstopmode -halt-on-error -shell-escape -auxdir=$(AUXDIR) -outdir=.

all: $(PROJECT).pdf

$(PROJECT).pdf: $(MAIN)
	@echo "Compilando con latexmk..."
	$(PDF_ENGINE) $(PDF_OPTIONS) -jobname=$(PROJECT) $(MAIN)

clean:
	@echo "Limpiando archivos temporales..."
	rm -rf $(AUXDIR)
	rm -rf _minted*

clean-all: clean
	@echo "Borrando pdf..."
	rm -f $(PROJECT).pdf
