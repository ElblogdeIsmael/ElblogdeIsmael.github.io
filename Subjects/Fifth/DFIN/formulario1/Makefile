# Formulario esquemático del Parcial 1 (documento LaTeX independiente,
# sin la plantilla de apuntes del blog). Produce build/DFIN_Formulario_Parcial1.pdf
OUT = build
PDF = $(OUT)/DFIN_Formulario_Parcial1.pdf

all: $(PDF)

$(PDF): formulario.tex
	@mkdir -p $(OUT)
	latexmk -pdf -interaction=nonstopmode -halt-on-error -outdir=$(OUT) -jobname=DFIN_Formulario_Parcial1 formulario.tex

clean:
	find $(OUT) -type f ! -name '*.pdf' -exec rm -f {} +

.PHONY: all clean
