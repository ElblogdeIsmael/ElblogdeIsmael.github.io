# Plantilla de asignatura

Copia esta carpeta para empezar una asignatura nueva. El `_` del nombre la deja
fuera de todo: ni el `Makefile` de curso la compila, ni el generador del sitio
la mira.

```bash
cp -r Subjects/_template Subjects/Second/SO
```

Después, tres cosas:

1. **`Makefile`** — `PROJECT = SO`. Y `TEMPLATE_DIR` solo si la asignatura no
   queda en `Subjects/<Curso>/<CODIGO>/`, que es lo normal.
2. **`src/00_portada.md`** — el nombre de la asignatura, `type` y `about`.
3. **`src/01_tema1.md`** — escribe. Un fichero por tema, numerados, que el orden
   del PDF sale de ordenar sus nombres.

```bash
make                      # build/SO.pdf
```

Lo último es enlazarlo desde
`content/sections/doble-grado/pages/segundo.mjs` y ejecutar `npm run build`.

## Cómo se escribe

**En Markdown.** Prosa, listas, tablas con `|`, matemática con `$…$` y `$$…$$`,
código con vallas. MAC son 1.942 líneas de Markdown y 67 páginas, con veinte
bloques de matemática y setenta filas de tabla: aguanta de sobra.

**LaTeX crudo dentro del propio `.md`** cuando Markdown no llegue —`tikzpicture`,
`align` de varias líneas, tablas con celdas combinadas, `algorithm`—. Pandoc lo
deja pasar intacto, así que no hay que sacarlo a otro fichero.

**Un `.tex` aparte solo si el bloque pasa de unas cincuenta líneas** y estorba
leer el capítulo. Va en `src/tex/` y se trae con `\input{src/tex/nombre}`.

Lo que no se hace es escribir el capítulo entero en `.tex`. Ya pasó cinco veces
en cuarto: CG tiene 1.402 líneas de LaTeX sin un solo diagrama ni una sola
ecuación, y es prosa que en Markdown ocuparía un tercio.

## Dos cosas que abortan la compilación

- **`--listings` con acentos.** El Makefile no lo pasa, y el comentario de al
  lado explica por qué. Si lo añades y un bloque de código lleva una tilde, el
  build muere señalando una línea que no es.
- **`$$…$$` en un encabezado.** Pandoc lo mete en `\[…\]` dentro de un argumento
  móvil y revienta. En títulos, matemática en línea con `$…$`.

## Qué hay aquí

| | |
| --- | --- |
| `src/` | los capítulos, en Markdown |
| `src/tex/` | los bloques de LaTeX que no caben en el Markdown |
| `media/` | imágenes |
| `test/` | tests, hechos con [`/md2html/`](../../md2html/). `*.md` es la fuente |
| `build/` | generado. Solo se versiona el `.pdf` |
| `referencias.bib` | vacío a propósito: biber necesita que exista |

@author Ismael Sallami Moreno
