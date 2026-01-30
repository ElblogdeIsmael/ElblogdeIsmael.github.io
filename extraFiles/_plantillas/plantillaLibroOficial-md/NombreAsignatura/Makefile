PDF = build/algebra.pdf

all: $(PDF)

$(PDF): src/*.md ../../../preambulos/estilo.latex ../../../preambulos/metadata.yaml
	pandoc src/*.md \
		--from markdown \
		--template=../../../preambulos/estilo.latex \
		--metadata-file=../../../preambulos/metadata.yaml \
		--toc --toc-depth=3 \
		--top-level-division=chapter \
		--pdf-engine=xelatex \
		--pdf-engine-opt=-shell-escape \
		-o $(PDF)

clean:
	rm -f build/*.pdf
