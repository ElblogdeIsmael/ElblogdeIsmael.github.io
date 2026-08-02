# Fase 4 — Plantillas

**Estado:** **hecha el 2026-08-02**, con el alcance recortado ·
**Destructiva:** no · **Rama:** `reorg/fase-4-plantillas`

---

## Lo que se hizo, y lo que no

| Parte | Estado |
| --- | --- |
| A.1 · Arreglar la plantilla compartida | **hecha** |
| A.2 · Completar los Makefile de curso | **hecha** |
| A.3 · Migrar los 38 documentos de tercero | **descartada**, [D-15](DECISIONES.md#d-15--tercero-no-migra-a-la-plantilla-de-cuarto) |
| B · Tests HTML | **hecha**, 34 ficheros y 2.481 preguntas |

> **Este documento estaba desfasado y se corrigió al ejecutarlo.** Decía 26 tests y dos
> generaciones, y son **34 y cinco**. Su solución para las rutas fijas, `--resource-path`,
> **no funciona**: los `\input` de `estilo.latex` los resuelve LaTeX al compilar, no pandoc
> al generar el `.tex`. Es la misma lección que dejó la fase 5: leer un documento de fase
> no basta, hay que comprobar su estado.

## Objetivo

Que la plantilla compartida deje de mentir y de depender de una profundidad de ruta fija, y
que todos los tests salgan del mismo generador.

Uniformar además los PDF de tercero se descartó: la ganancia es cosmética, el riesgo de
publicar menos de lo que ya hay es real, y la variedad de plantillas documenta cómo fue
evolucionando la forma de componerlos.

## Precondiciones

- [Fase 3](fase-3-historial.md) cerrada. Recompilar PDF antes de purgar el historial
  duplicaría el peso.
- `pandoc`, `latexmk` y una distribución de LaTeX con `minted` funcionando:

  ```bash
  pandoc --version && latexmk --version
  make -C Subjects/Fourth/MC       # tiene que compilar tal cual
  ```

---

## Parte A · LaTeX

### Las tres generaciones

| Gen | Dónde | Cómo funciona | Volumen |
| --- | --- | --- | --- |
| **1** | Tercero | Un `.tex` autocontenido por documento en carpetas `ETSIIT/` o `FCCEE/`. Cada uno redeclara el preámbulo entero: `\documentclass[a4paper,12pt]{article}`, ~30 `\usepackage`, `fancyhdr`, portada `.jpg` propia. Sin Makefile | **38** carpetas, ~94 `.tex` |
| **2** | Tercero / cuarto | Transición: `\input{portada}` y algún preámbulo compartido | 16 documentos |
| **3** | Cuarto | `src/*.md` → **pandoc** → `build/X.tex` → **latexmk** → `build/X.pdf`, con `extraFiles/preambulos_oficiales/estilo.latex` + `metadata.yaml` + `Makefile` por asignatura. Portada roja desde `src/00_portada.md` | **13** asignaturas |

La gen 3 es la buena y ya está construida. Aquí solo se migra… después de arreglarle dos
defectos.

### A.1 · Arreglar la plantilla — **hecha**

- [x] **`metadata.yaml` estaba hardcodeado.** Afirmaba que todo documento se titulaba
      «Álgebra Lineal», lo firmaba «Ismael» en «Septiembre 2025» y lo clasificaba en
      «Matemáticas». Funcionaba por casualidad: el front-matter de `src/00_portada.md`
      pisa `subject`.

      Al mirarlo resultó que **la plantilla solo lee `subject`, `type` y `about`**, y esos
      tres los declara cada portada. `title`, `date`, `author`, `university`, `lang` y
      `fontsize` no los consume nadie. El fichero se queda con lo que de verdad es común a
      toda la colección, con el nombre completo del autor, y dice por qué:

      ```yaml
      author: "Ismael Sallami Moreno"
      university: "Universidad de Granada"
      lang: es
      fontsize: 12pt
      ```

      Ninguna portada necesitó campos nuevos.

- [x] **Rutas relativas fijas.** `estilo.latex` tenía ocho referencias con tres niveles
      exactos de `../`, y en el árbol conviven cuatro profundidades: 106 referencias a tres
      niveles, 41 a cuatro, 7 a cinco y 1 a seis. No era un riesgo futuro, ya estaba roto.

      **La solución que proponía este documento no vale.** `--resource-path` es una opción
      de pandoc y solo afecta a lo que busca pandoc; los `\input` y los `\includegraphics`
      de la plantilla los resuelve LaTeX al compilar. Lo que sí lee LaTeX es `TEXINPUTS`:

      ```make
      TEMPLATE_DIR = ../../../extraFiles
      export TEXINPUTS := .:$(TEMPLATE_DIR)//:$(TEXINPUTS)
      ```

      Y en la plantilla, rutas relativas a `extraFiles/`, sin `../`. Cada Makefile declara
      su propia profundidad, que es lo único que la conoce.

      **El `.` inicial no es decoración.** Sin él, `extraFiles/` va delante del directorio
      del documento y el `comandos.tex` compartido tapa el que varias asignaturas guardan
      al lado del suyo.

- [x] Recompiladas las once de cuarto. Todas compilan y ninguna pierde contenido.

### A.2 · Completar los Makefile de curso — **hecha**

- [x] `Subjects/Fourth/Makefile` listaba `MC DDSI DO-1 CG IG EM`. Las asignaturas con
      Makefile son **once**, no doce: OE no tiene, solo `practicas/` y `test/`.

      ```make
      SUBJECTS = AA AEF CG DDSI DO-1 DRH1 EE EM IG MAC MC
      ```

- [x] **No se crea `Subjects/Third/Makefile`**: tercero no se migra ([D-15](DECISIONES.md#d-15--tercero-no-migra-a-la-plantilla-de-cuarto)).

**Aviso que hay que tener presente al verificar:** `make -C Subjects/Fourth` **no
reconstruye lo que sirve la web en cuatro asignaturas**. CG, DO-1, EM y MC escriben
`build/<COD>.pdf` desde `src/*.md`, mientras la web enlaza `TEX/<COD>.pdf`, que se mantiene
a mano y es el documento largo: 46, 59, 69 y 103 páginas frente a 33, 43, 54 y 61. En las
otras siete sí coincide.

### A.3 · Migrar tercero — **descartada**

**[D-15](DECISIONES.md#d-15--tercero-no-migra-a-la-plantilla-de-cuarto), 2026-08-02.** Lo
que sigue se conserva como inventario de lo que hay, no como lista de tareas.

Las 38 carpetas de gen 1, agrupadas por asignatura:

| Asignatura | Carpetas |
| --- | --- |
| **CF1** | `Practica/FCCEE`, `Practica/Tema{2,3,4,5,6}/EjerciciosPropuestos/FCCEE`, `Resumenes/FCCEE`, `Resumenes/Tema{1..6}/FCCEE`, `Teoria/FCCEE` — 14 |
| **SCD** | `Examenes/Parcial_SCD_Extra/ETSIIT`, `Examenes/SegundoParcial/ETSIIT`, `Practicas/ETSIIT`, `Resumenes/ETSIIT`, `Teoria/ETSIIT`, `Teoria/Actividad_Extra/{cribadeErastotenes,Demostracion_Prop_ALG_EM}/ETSIIT`, `Teoria/Tema{3,4}/SolucionesEjercicios/ETSIIT` — 9 |
| **PDOO** | `Practica/ETSIIT`, `Teoria/ETSIIT`, `Teoria/Diapositivas/t3/ETSIIT`, `Teoria/RelacionesEjercicios/Solt{1,2,3}/ETSIIT` — 6 |
| **ECO** | `Formulario/FCCEE`, `Practicas/FCCEE`, `Practicas/EjerciciosPropuestos/SolucionesEjercicios/FCCEE`, `Teoria/FCCEE` — 4 |
| **FR** | `Practicas/ETSIIT`, `Resumenes/ETSIIT`, `Teoria/ETSIIT` — 3 |
| **DAE** | `PracticasDAE/FCCEE` — 1. `TeoriaDAE/` se retiró en la fase 5: era material descargado con reserva de derechos |

Ninguno se migra. Si alguna vez se retoma un documento suelto, el procedimiento sería
convertir su `.tex` a `src/*.md` o sustituirle solo el preámbulo, darle un
`src/00_portada.md`, copiarle el `Makefile` de `Subjects/Fourth/MC` y **comparar el PDF
nuevo con el antiguo** antes de sustituirlo. Pero el criterio vigente es no hacerlo.

---

## Parte B · Tests HTML — **hecha el 2026-08-02**

### No eran 26 ni dos generaciones: son 34 y cinco dialectos

El censo de este documento estaba mal. Los tests sin `.md` son **34** y se reparten en
**cinco** formas distintas de marcar la respuesta correcta, que es lo único en lo que se
diferencian de verdad:

| Dialecto | Cómo marca la correcta | Ficheros |
| --- | --- | --- |
| **A** | `const answers = { q1: 'c' }`, o `{ q1: { answer, explanation } }` | 18 |
| **B** | `<script>var answer_q1 = 'a';</script>` dentro de cada bloque | 5 (ISE) |
| **C** | `<div class="question" data-correct="2">` | 4 |
| **D** | `<div onclick="checkAnswer(this, true, 'q1')">` | 5 |
| **E** | `<input … data-content="1">` en la opción buena | 2 |

Por asignatura: CF1 (9), CF2 (7), ISE (6), FR (3), SCD (5), FIS (1), FBD (1).

> **No confundir:** de los 330 `.html` de PDOO, casi todos son **Javadoc y RDoc generados**
> (`doc/irrgarten/TestP1.html` es documentación de una clase de test, no un cuestionario).
> Se fueron con el código a `irrgarten` en la [fase 1](fase-1-codigo.md).

### B.1 · El extractor — **hecho**

`build/scripts/test-html-to-md.mjs`, Node puro y sin dependencias. Elige el parser por la
marca de respuesta, no por la asignatura. Formato de destino:

```markdown
# Título del test

* **Autor:** Ismael Sallami Moreno
* **Titulación:** Doble Grado en Ingeniería Informática y ADE

1. Enunciado de la pregunta

    - ( ) Opción incorrecta
    - (x) Opción correcta

    > Explicación de por qué.
```

**Cuatro cosas que hay que acertar, y que aparecieron por un resultado raro, no por leer el
HTML.** Están comentadas en el script, pero conviene tenerlas aquí:

1. **En FIS, `data-correct` nombra el `value` de la opción, no su índice**, y las opciones
   empiezan a numerarse en 1. Leído como índice —que es lo que necesitan CF2 e ISE— **las
   370 preguntas habrían señalado la opción siguiente a la buena, en silencio**. El
   extractor casa primero por `value` y solo cae al índice si no encuentra nada.
2. **Un comentario HTML dentro de un enunciado se come la pregunta siguiente**, porque
   md2html parte el documento en secciones con `<!-- … -->`. Se eliminan, cerrados y sin
   cerrar.
3. **Las tablas y las figuras no pueden pasar a Markdown.** md2html une las líneas de
   continuación de una opción y descarta las líneas en blanco de un enunciado. Se conservan
   como HTML crudo en una sola línea, que markdown-it deja pasar tal cual porque corre con
   `html: true`. Así sobreviven las tablas de enrutamiento que en FR son las respuestas.
4. **La negrita que envuelve el número, o el enunciado entero, deja un `**` huérfano** al
   quitar la numeración.

### B.2 · Regenerar — **hecho**

Los 34 se regeneraron con la plantilla **`academic.html`** (Playfair Display + Source Serif
4), la misma en los 34.

**Hacerlo a mano en `/md2html/` no es viable con 34 ficheros.** El conversor tiene dos
implementaciones equivalentes y una corre sin navegador: `src/md2html/core.py` del repo
`Ismael-Sallami/md2html-testGenerator`. El `converter.js` de este repo no sirve, porque es
un IIFE atado a `window` y necesita markdown-it desde CDN.

**Clonar de nuevo, no hacer `pull`.** El clon de trabajo puede ir por detrás de un
`filter-repo` y `git fetch` avisa de «actualización forzada». Un clon viejo no lleva el
arreglo de audio y vídeo del 2026-07-31.

**Los ficheros no se movieron a `test/`.** 26 de los 34 están enlazados y publicados; mover
la ruta rompía 26 URLs y obligaba a tocar `content/` y a añadir redirecciones, a cambio de
que la carpeta se llamara igual que en cuarto. Se regeneraron donde estaban.

**Las explicaciones no se escribieron**, porque el formato no las exige. Aun así salieron
**201 gratis**: SCD, FR, CF2 y parte de CF1 las guardaban en el objeto `answers` y ningún
lector las había visto nunca.

### B.3 · La regla — **fijada**

**`*.md` es la fuente, `*.html` es artefacto.** Los dos se versionan porque Pages sirve el
HTML directamente, pero solo se edita el `.md`
([D-07](DECISIONES.md#d-07--tests-html-el-markdown-es-la-fuente)).

### Un defecto del contenido, no de la conversión

**Cinco de las 468 preguntas de `test_oficial_completo_ISE.html` se publicaron con
`data-correct=""`**, así que el test daba por mala cualquier respuesta. Están marcadas a
mano en el Markdown; en las cinco la buena es la que la propia pregunta define como
correcta.

El extractor las delata y se niega a escribir. `--allow-unmarked` existe solo para ese
caso: **no sirve para tapar un fallo del parser**.

---

## Lo que sigue pendiente

- **Cuatro tests con `.md` propio siguen en dialecto viejo**, así que quedaron fuera de
  este barrido: `FBD/…/Simulacro2/simulacro2.html` y `test.html`, e
  `ISE/Prácticas/Test/preguntas.html` y `test.html`. Los tres primeros los enlaza la web.
- **ISE tiene el mismo test tres veces.** `preguntas.md`, `testISE.md` y el nuevo
  `test_oficial_completo_ISE.md` tienen los tres 468 preguntas; `Test/test.md` tiene 354 y
  `cuestionario_generado.md` 353. Hay que decidir cuál se queda.

---

## Criterio de hecho

- [x] `metadata.yaml` sin datos de una asignatura concreta.
- [x] La plantilla compartida no depende de una profundidad de ruta fija.
- [x] El Makefile de cuarto lista sus once asignaturas.
- [x] Los 34 tests tienen `.md` y `.html` regenerado con la misma plantilla.
- [x] El extractor queda en `build/scripts/`.
- [x] Lo que no se migra está escrito en [D-15](DECISIONES.md#d-15--tercero-no-migra-a-la-plantilla-de-cuarto).

## Verificación

Lo que se pasó, con su resultado:

```bash
make -C Subjects/Fourth              # las 11 compilan, sin perder paginas
npm run check                        # 190 enlaces, 147 locales, todos resuelven

# Cero rutas fijas en la plantilla compartida
grep -rn '\.\./' extraFiles/preambulos_oficiales/*.latex extraFiles/preambulos_oficiales/*.tex

# Los 34 tests: mismas preguntas en el .md que en el .html, ninguna sin correcta,
# ningun dialecto viejo, y la misma plantilla en los 34
#   34/34 ficheros cuadran, 2.481 preguntas, 0 sin correcta, 0 dialectos, 34/34 academico
grep -o 'class="question"' <test>.html | wc -l   # frente a  grep -cE '^[0-9]+\. ' <test>.md
grep -lE 'const answers|var answer_q|checkAnswer\(this,|font-family: .Arial' <los 34>
```

**Cuidado con `grep -c`: cuenta líneas, no apariciones.** Con HTML generado, dos preguntas
pueden acabar en la misma línea y el recuento sale corto. Es `grep -o … | wc -l`. Ese fallo
escondió durante un rato que una pregunta se estaba perdiendo de verdad.

Manual, y no es opcional. Se hizo abriendo un test de **cada uno de los cinco dialectos**,
respondiendo mal a propósito y comprobando la corrección: FIS (C), SCD con explicación (A),
FR con tablas dentro de las opciones (E), CF2 (D) y FBD con figura en el enunciado (D).

---

@author Ismael Sallami Moreno
