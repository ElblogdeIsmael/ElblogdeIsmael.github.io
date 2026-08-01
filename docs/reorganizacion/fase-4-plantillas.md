# Fase 4 — Plantillas

**Duración estimada:** varias sesiones, se puede ir a trozos · **Destructiva:** no ·
**Rama:** `reorg/fase-4-plantillas`

---

## Objetivo

Que todos los PDF sigan la misma plantilla y todos los tests el mismo generador. Hoy
conviven tres generaciones de LaTeX y dos de tests HTML, y se nota a simple vista: los
documentos de tercero no se parecen a los de cuarto.

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

### A.1 · Arreglar la plantilla antes de propagarla

- [ ] **`metadata.yaml` está hardcodeado.** Hoy:

  ```yaml
  title: "Álgebra Lineal"
  author: "Ismael"
  date: "Septiembre 2025"
  university: "Universidad de Granada"
  subject: "Matemáticas"
  ```

  Funciona por casualidad: el front-matter de `src/00_portada.md` pisa `subject`. Pero
  `title` y `date` son incorrectos en las 13 asignaturas. Dejar en el fichero compartido
  solo lo que de verdad es común:

  ```yaml
  author: "Ismael Sallami Moreno"
  university: "Universidad de Granada"
  lang: es
  fontsize: 12pt
  ```

  Y que cada asignatura declare `title`, `subject` y `date` en su `src/00_portada.md`.

- [ ] **Rutas relativas fijas.** `estilo.latex` hace:

  ```latex
  \input{../../../extraFiles/preambulos_oficiales/paquetes.tex}
  ```

  Tres niveles exactos. Cualquier asignatura a otra profundidad rompe — y de hecho ya hay
  documentos con `../../../../`. Se resuelve pasando `--resource-path` en el `Makefile` y
  usando rutas simples en la plantilla:

  ```make
  PANDOC_FLAGS = --resource-path=.:$(TEMPLATE_DIR)
  ```

- [ ] Recompilar las 13 asignaturas de cuarto y verificar que ninguna se rompe con los dos
      cambios.

### A.2 · Completar los Makefile de curso

- [ ] `Subjects/Fourth/Makefile` lista hoy solo `MC DDSI DO-1 CG IG EM`. Faltan 7:

  ```make
  SUBJECTS = AA AEF CG DDSI DO-1 DRH1 EE EM IG MAC MC OE
  ```

- [ ] Crear `Subjects/Third/Makefile` equivalente conforme se vayan migrando asignaturas.

### A.3 · Migrar tercero

Las 38 carpetas de gen 1, agrupadas por asignatura:

| Asignatura | Carpetas |
| --- | --- |
| **CF1** | `Practica/FCCEE`, `Practica/Tema{2,3,4,5,6}/EjerciciosPropuestos/FCCEE`, `Resumenes/FCCEE`, `Resumenes/Tema{1..6}/FCCEE`, `Teoria/FCCEE` — 14 |
| **SCD** | `Examenes/Parcial_SCD_Extra/ETSIIT`, `Examenes/SegundoParcial/ETSIIT`, `Practicas/ETSIIT`, `Resumenes/ETSIIT`, `Teoria/ETSIIT`, `Teoria/Actividad_Extra/{cribadeErastotenes,Demostracion_Prop_ALG_EM}/ETSIIT`, `Teoria/Tema{3,4}/SolucionesEjercicios/ETSIIT` — 9 |
| **PDOO** | `Practica/ETSIIT`, `Teoria/ETSIIT`, `Teoria/Diapositivas/t3/ETSIIT`, `Teoria/RelacionesEjercicios/Solt{1,2,3}/ETSIIT` — 6 |
| **ECO** | `Formulario/FCCEE`, `Practicas/FCCEE`, `Practicas/EjerciciosPropuestos/SolucionesEjercicios/FCCEE`, `Teoria/FCCEE` — 4 |
| **FR** | `Practicas/ETSIIT`, `Resumenes/ETSIIT`, `Teoria/ETSIIT` — 3 |
| **DAE** | `PracticasDAE/FCCEE` — 1. `TeoriaDAE/` se retiró en la fase 5: era material descargado con reserva de derechos |

Por cada documento:

- [ ] Convertir el `.tex` a `src/*.md`, o mantenerlo en `.tex` y sustituir solo el
      preámbulo por el compartido — lo que resulte menos destructivo para ese documento en
      concreto.
- [ ] Crear `src/00_portada.md` con su front-matter:

  ```markdown
  ---
  subject: "Contabilidad Financiera I"
  type: info
  about: Resúmenes
  ---
  ```

- [ ] Añadir el `Makefile` de la asignatura, copiado del de `Subjects/Fourth/MC`.
- [ ] Compilar y **comparar el PDF nuevo con el antiguo**: portada, índice, numeración,
      figuras y tablas. Ninguna figura puede desaparecer.
- [ ] Actualizar la ruta del PDF en `content/` si cambia, y `npm run build`.

**Criterio para no migrar** ([D-06](DECISIONES.md#d-06--todo-latex-a-la-generación-pandoc)):

- Solo hay PDF, sin fuente → se deja tal cual y **se anota en la tabla «Documentos sin
  fuente» de [DECISIONES.md](DECISIONES.md)**.
- Borradores y duplicados de `OTROS/` → no se migran.

---

## Parte B · Tests HTML

### Las dos generaciones

| Gen | Qué es | Cuántos |
| --- | --- | --- |
| **1 — a mano** | `<style>` embebido, Arial, azul `#007bff`, sin fuente Markdown, sin explicaciones ni modo examen | **26** |
| **2 — md2html** | Playfair Display + Source Serif 4, MathJax, highlight.js, autocorrección, `.md` versionado al lado | **17** |

Los 26 de gen 1, por asignatura:

| Asignatura | Ficheros |
| --- | --- |
| **CF1** | `Tests/test-tema{1,2}.html`, `Tests/testT{1,2,3,5,6}Libro.html`, `Tests/testT4libro.html`, `Tests/testPDF/tipoTestExtraTema4-5-6.html` |
| **ISE** | `Prácticas/Test/test_bloque{1,2}.html`, `Prácticas/Test/test_extra.html`, `Prácticas/Test/test_oficial_completo_ISE.html`, `Prácticas/Practicas_ISE/test_bloque2.html`, `Prácticas/Practicas_ISE/test_ping_raid.html` |
| **SCD** | `AutoevalSCD/Autoeval{1,2}.html`, `AutoevalSCD/AutoevalT{3,4}.html`, `AutoevalSCD/testExtraT2.html` |
| **FR** | `TestsFR/TestPractica{1,2,3}.html` |
| **CF2** | `Teoria/Tests/test.html`, `Teoria/Tests/test_t4v2.html` |
| **FIS** | `Teoria/test.html` |

Ninguno tiene `.md`: hay que extraerlo del HTML.

> **No confundir:** de los 330 `.html` de PDOO, casi todos son **Javadoc y RDoc generados**
> (`doc/irrgarten/TestP1.html` es documentación de una clase de test, no un cuestionario).
> Se fueron con el código a `irrgarten` en la [fase 1](fase-1-codigo.md).

### B.1 · Escribir el extractor

- [ ] `build/scripts/test-html-to-md.mjs`. Entrada: un `.html` de gen 1. Salida: el `.md` en
      el formato de md2html.

  Formato de destino:

  ```markdown
  # Título del test

  * **Autor:** Ismael Sallami Moreno
  * **Descripción:** …
  * **Titulación:** Doble Grado en Ingeniería Informática y ADE

  1. Enunciado de la pregunta

      - ( ) Opción incorrecta
      - (x) Opción correcta

      > Explicación de por qué.
  ```

  Lo que hay que leer del HTML antiguo: el `<title>` para el encabezado, cada
  `<div class="question">` para el enunciado, sus `<input type="radio">` con las etiquetas
  para las opciones, y la marca de respuesta correcta (varía entre ficheros: revisar cada
  variante antes de generalizar).

- [ ] Probar con un test de cada asignatura antes de lanzarlo sobre los 26: las seis
      familias no comparten exactamente el mismo HTML.

### B.2 · Regenerar

- [ ] Por cada uno de los 26: extraer el `.md`, **revisarlo a mano** (las explicaciones que
      falten se escriben ahora), y regenerar el `.html` con `/md2html/`.
- [ ] Colocar ambos en `test/` según la estructura canónica.
- [ ] Actualizar las rutas en `content/` si cambian, y `npm run build`.

### B.3 · Fijar la regla

- [ ] Documentar en el `README.md` del directorio de la asignatura: **`test/*.md` es la
      fuente, `test/*.html` es artefacto**. Ambos se versionan porque Pages sirve el HTML
      directamente, pero solo se edita el `.md`
      ([D-07](DECISIONES.md#d-07--tests-html-el-markdown-es-la-fuente)).

---

## Criterio de hecho

- `metadata.yaml` sin datos de una asignatura concreta.
- Ninguna plantilla depende de una profundidad de ruta fija.
- Los Makefile de curso listan todas sus asignaturas.
- Los documentos de tercero con fuente compilan con la plantilla de cuarto.
- Los que no se migran están anotados en [DECISIONES.md](DECISIONES.md).
- Los 26 tests tienen `.md` y `.html` regenerado.
- El extractor queda en `build/scripts/`.

## Verificación

```bash
make -C Subjects/Fourth clean && make -C Subjects/Fourth     # las 13 compilan
make -C Subjects/Third                                       # las migradas compilan
npm run check
grep -rl 'documentclass\[a4paper,12pt\]{article}' Subjects/Third --include='*.tex' | wc -l
                                                             # debe tender a 0
grep -rl 'font-family: .Arial' Subjects --include='*.html' | wc -l
                                                             # debe tender a 0
```

Manual, y no es opcional:

- Abrir cada PDF migrado junto al antiguo: portada, índice, numeración, figuras y tablas.
- Abrir cada test regenerado, **responder mal a propósito** y comprobar que la corrección y
  la explicación aparecen.

---

@author Ismael Sallami Moreno
