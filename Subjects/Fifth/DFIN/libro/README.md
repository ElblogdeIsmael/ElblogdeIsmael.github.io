# Tratado de Dirección Financiera (DFIN)

Edición monográfica para 5.º curso del Doble Grado en Ingeniería Informática y Administración y Dirección de Empresas (Universidad de Granada). Recoge la fundamentación matemática, el desarrollo analítico de los ocho temas del programa oficial, ampliación en opciones reales e ingeniería financiera de corto plazo, seis casos integrados resueltos con verificación numérica y un formulario maestro de examen.

## Compilación

Requiere `pandoc`, distribución TeX con `xelatex` y `latexmk`, así como tipografías del sistema (`EB Garamond`, `Inter`, `JetBrains Mono` o equivalentes configurados en `dfin_book.latex`).

```bash
make clean all
```

El documento compilado se genera en `build/DFIN_Libro.pdf`.

## Estructura

- `src/00_portada.md` a `src/15_bibliografia.md`: capítulos y apéndices en Markdown con bloques matemáticos LaTeX.
- `src/tex/`: diagramas vectoriales en TikZ y PGFPlots.
- `media/`: láminas de portada y separadores de parte.
- `dfin_book.latex`: plantilla editorial KOMA-Script (`scrbook`).
- `referencias.bib`: base bibliográfica utilizada en el texto.
