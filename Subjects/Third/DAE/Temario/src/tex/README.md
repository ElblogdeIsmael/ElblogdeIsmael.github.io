# `src/tex/`

Para los bloques de LaTeX que no caben en el Markdown.

**Casi nunca hace falta.** Un `tikzpicture`, un `align` o una tabla con celdas
combinadas se escriben dentro del propio `.md`: pandoc los deja pasar intactos.
Esta carpeta es solo para cuando el bloque pasa de unas cincuenta líneas y
estorba leer el capítulo.

Entonces sí: el fichero va aquí y el `.md` lo trae con

```latex
\input{src/tex/diagrama-pipeline}
```

La ruta es relativa al directorio de la asignatura, no al del `.md`, porque la
resuelve LaTeX al compilar y el documento raíz está ahí.

El `Makefile` los declara como dependencia con `find src -name '*.tex'`, así que
editar uno reconstruye el PDF. Pandoc nunca los ve.

**Lo que no se hace es escribir el capítulo entero aquí.** Ya pasó cinco veces en
cuarto: CG son 1.402 líneas de LaTeX con cero diagramas y cero ecuaciones, prosa
que en Markdown ocuparía un tercio. Si lo que vas a poner es texto, va en el
`.md`.

Se puede borrar esta carpeta si la asignatura no la necesita.
