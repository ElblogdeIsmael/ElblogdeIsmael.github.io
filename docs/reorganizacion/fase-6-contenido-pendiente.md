# Fase 6 — Contenido pendiente

**Duración:** continua, sin fecha de cierre · **Destructiva:** no ·
**Rama:** una por asignatura, `contenido/<codigo>`

---

## Objetivo

Dejar con apuntes propios las **26 asignaturas de primero y segundo** que hoy no los
tienen. Sus fichas solo tienen la guía docente de la UGR y la bibliografía; el material no
existe y hay que escribirlo.

**Tercero salió de esta fase el 2026-08-02**
([D-15](DECISIONES.md#d-15--tercero-no-migra-a-la-plantilla-de-cuarto)). Su bloque era la
migración de plantillas de la [fase 4](fase-4-plantillas.md) con otro nombre, y esa
migración se descartó: el material ya está publicado y funciona, uniformarlo es cosmético y
recompilarlo arriesga publicar menos de lo que hay. El inventario de lo que tiene cada una
sigue abajo, como información, no como lista de tareas.

**OE, de cuarto, queda fuera por decisión de Ismael**: se queda con sus tres tests y sus
prácticas.

No es una fase que se «termine»: se va tachando asignatura a asignatura, al ritmo que dé.

## Precondiciones

- [Fase 4](fase-4-plantillas.md) **cerrada el 2026-08-02**. La plantilla compartida ya no
  lleva datos de una asignatura concreta ni depende de una profundidad de ruta fija, así
  que una asignatura nueva puede copiarla sin arrastrar nada que haya que rehacer después.

## De dónde sale el material

**Del programa oficial de la guía docente** —temario, competencias, resultados de
aprendizaje—, no del texto de los manuales de la bibliografía. Redactar desde los manuales
produce obra derivada de material con derechos, que es exactamente lo que ha costado las
fases 2, 3 y 5. La bibliografía se cita; no se reescribe.

---

## Qué cuenta como hecha

Una asignatura se tacha cuando tiene las tres cosas:

1. **Apuntes en `src/`** — al menos el temario completo en Markdown.
2. **PDF en `build/`** — compilado con la plantilla de la fase 4 y versionado.
3. **Enlace en su ficha** — en
   `content/sections/doble-grado/pages/{primero,segundo,tercero}.mjs`, y `npm run build`
   ejecutado.

Opcional pero recomendable: un test en `test/` hecho con `/md2html/`.

## Estructura de cada una

La canónica, la misma que tercero y cuarto:

```
Subjects/{First,Second}/<CODIGO>/
├── src/            00_portada.md, 01_tema1.md …
├── build/          <CODIGO>.pdf
├── test/           *.md + *.html
├── media/
├── Makefile
└── referencias.bib
```

Se arranca copiando la plantilla:

```bash
cp -r Subjects/_template Subjects/Second/SO
# en el Makefile: PROJECT = SO
# en src/00_portada.md: subject, type y about
make
```

**Este documento decía `cp -r Subjects/Fourth/MC` y era mala idea**, además de que la
plantilla no existía cuando se escribió. MC es de las cuatro asignaturas cuyo Makefile
escribe `build/MC.pdf` (61 páginas) mientras la web sirve `TEX/MC.pdf` (103), mantenido a
mano: copiándola arrancas con un flujo que no reproduce lo publicado. La plantilla sale del
Makefile de DDSI, que sí es coherente. Corregido el 2026-08-02.

Cómo se escribe —Markdown por defecto, LaTeX solo para lo que Markdown no cubre y dentro
del propio `.md`— está en [`Subjects/_template/README.md`](../../Subjects/_template/README.md)
y en la [D-12](DECISIONES.md#d-12--el-formato-de-escritura-es-híbrido-y-ya-lo-era).

Las carpetas `Subjects/First/` y `Subjects/Second/` hay que crearlas: hoy solo existe
`Subjects/Second/MACRO` con un único PDF de ejercicios.

---

## Antes de empezar: códigos duplicados

Dos códigos se repiten entre cursos y la insignia de la ficha queda ambigua
([D-10](DECISIONES.md#d-10--códigos-de-asignatura-duplicados)):

| Código | Segundo | Cuarto | Nuevo código para segundo |
| --- | --- | --- | --- |
| `MAC` | Macroeconomía | Modelos Avanzados de Computación | **`MACRO`** |
| `CG` | Contabilidad General | Contabilidad de Gestión | **`CGRAL`** |

- [ ] Cambiar `code: "MAC"` → `code: "MACRO"` en `segundo.mjs`.
- [ ] Cambiar `code: "CG"` → `code: "CGRAL"` en `segundo.mjs`.
- [ ] Usar esos códigos para las carpetas. La carpeta existente ya se llama
      `Subjects/Second/MACRO`, así que el cambio es coherente con lo que hay.

---

## Primero — 13 asignaturas

### Primer semestre

- [ ] **CAL** · Cálculo
- [ ] **EP** · Economía Política
- [ ] **FFT** · Fundamentos Físicos y Tecnológicos
- [ ] **FDAE** · Fundamentos de Dirección y Administración de Empresas
- [ ] **FP** · Fundamentos de Programación
- [ ] **TOC** · Tecnología y Organización de Computadores

### Segundo semestre

- [ ] **FS** · Fundamentos del Software
- [ ] **HDM** · Historia del Desarrollo Económico Mundial Contemporáneo
- [ ] **ID** · Introducción al Derecho
- [ ] **ME** · Matemáticas Empresariales
- [ ] **MP** · Metodología de la Programación
- [ ] **MIC** · Microeconomía
- [ ] **ALG** · Álgebra Lineal y Estructuras Matemáticas

---

## Segundo — 13 asignaturas

### Primer semestre

- [ ] **EC** · Estructura de Computadores
- [ ] **ED** · Estructura de Datos — ya enlaza `image-adt`; falta el temario
- [ ] **IOF** · Introducción a las Operaciones Financieras
- [ ] **IM** · Introducción al Márketing
- [ ] **MACRO** · Macroeconomía — ya existe `Ejercicios_macroeconomia.pdf`; falta el temario
- [ ] **SO** · Sistemas Operativos
- [ ] **TC1** · Técnicas Cuantitativas I

### Segundo semestre

- [ ] **ALGO** · Algorítmica
- [ ] **AC** · Arquitectura de Computadores
- [ ] **CGRAL** · Contabilidad General
- [ ] **DC** · Dirección Comercial
- [ ] **LMD** · Lógica y Métodos Discretos
- [ ] **TC2** · Técnicas Cuantitativas II

---

## Tercero — fuera de esta fase

**Entró el 2026-08-01 ([D-14](DECISIONES.md#d-14--tercero-entra-en-la-fase-6-por-escrito))
y salió el 2026-08-02 ([D-15](DECISIONES.md#d-15--tercero-no-migra-a-la-plantilla-de-cuarto)).**

El bloque describía «convertir, no redactar»: pasar los documentos de tercero a la
plantilla de cuarto. Eso es la parte A.3 de la [fase 4](fase-4-plantillas.md), que se
descartó. Son 46 `.tex` y 216 PDF versionados, de los que la web enlaza 67; el material ya
está publicado y funciona, uniformarlo solo cambia cómo se ve, y recompilar 38 documentos
arriesga publicar menos de lo que hay —la lección 1 de la [fase 2](fase-2-contenido.md)—.
De paso, la variedad de plantillas cuenta cómo fue evolucionando la forma de componerlos.

**Lo único de tercero que se tocó son sus tests**, que la fase 4 sí hizo: 34 ficheros y
2.481 preguntas con fuente Markdown y un solo generador.

La tabla se queda como inventario de lo que hay en cada una:

| Código | Asignatura | `.md` | `.tex` | `.pdf` | Makefile |
| --- | --- | --- | --- | --- | --- |
| CF1 | Contabilidad Financiera I | 4 | 18 | 43 | — |
| SCD | Sistemas Concurrentes y Distribuidos | 4 | 9 | 33 | 1 |
| PDOO | Programación y Diseño Orientado a Objetos | 14 | 7 | 35 | — |
| ECO | Econometría | 1 | 4 | 27 | — |
| FR | Fundamentos de Redes | 4 | 9 | 44 | — |
| DAE | Dirección y Administración de Empresas | 0 | 4 | 49 | — |
| CF2 | Contabilidad Financiera II | 10 | 9 | 19 | — |
| AOF | Análisis de Operaciones Financieras | 1 | 3 | 22 | — |
| FBD | Fundamentos de Base de Datos | 7 | 11 | 29 | — |
| FIS | Fundamentos de Ingeniería del Software | 1 | 7 | 45 | — |
| IA | Inteligencia Artificial | 0 | 15 | 34 | 3 |
| ISE | Ingeniería de Servidores | 25 | 14 | 35 | 1 |
| MC | Métodos Cuantitativos | 0 | 2 | 14 | — |

**Buscar el contenido también dentro de los `.tex` y los `.md`**, no solo en las carpetas de
material: IA tiene 15 `.tex` y cero `.md`; ISE tiene 25 `.md`. No son carpetas vacías. Sigue
valiendo para cualquier revisión de tercero, aunque ya no haya migración.

---

## Sugerencia de orden

No hace falta seguirlo, pero si da igual por dónde empezar:

1. **Las que ya tienen algo**: MACRO (ejercicios) y ED (repo `image-adt` enlazado). Cerrar
   lo que está a medias cuesta menos.
2. **Las de informática**: FP, MP, ALGO, EC, SO, AC. Son las que más aportan al perfil
   técnico y las que más material propio sueles conservar.
3. **Las de matemáticas**: CAL, ALG, LMD, ME, TC1, TC2. La plantilla LaTeX luce
   especialmente en estas.
4. **Las de empresa y derecho**: el resto.

---

## Quinto curso

**No entra en esta fase.** Se cursa a partir de septiembre de 2026 y se irá rellenando sobre
la marcha, como se hizo con cuarto. Sus 7 fichas (CE, DF, DEE1, DFIN, DEE2, PFG, TFG) ya
existen en `quinto.mjs` con `blocks: []`, que renderiza el marcador de «sin material».

Cuando empiece el curso, crear `Subjects/Fifth/<CODIGO>/` con la estructura canónica y
enlazar según se vaya produciendo.

---

## Criterio de hecho

Esta fase no se cierra: se cierra cada asignatura por separado. El progreso se lleva en la
tabla de arriba y en la issue de la fase 6.

## Verificación

Por cada asignatura terminada:

```bash
make -C Subjects/Second/<CODIGO>              # compila
git ls-files Subjects/Second/<CODIGO>/build   # el PDF está versionado
npm run build && npm run check                # la web lo enlaza y no hay rotos
```

Contador de progreso:

```bash
# asignaturas de 1º y 2º con al menos un enlace propio (no de grados.ugr.es)
grep -rhoE 'href: "/Subjects/(First|Second)/[^"]*"' content/sections/doble-grado/pages/{primero,segundo}.mjs \
  | cut -d/ -f3 | sort -u | wc -l      # objetivo: 26
```

---

@author Ismael Sallami Moreno
