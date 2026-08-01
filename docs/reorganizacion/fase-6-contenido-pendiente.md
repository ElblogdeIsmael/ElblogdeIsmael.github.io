# Fase 6 — Contenido pendiente

**Duración:** continua, sin fecha de cierre · **Destructiva:** no ·
**Rama:** una por asignatura, `contenido/<codigo>`

---

## Objetivo

Dejar con apuntes propios las **39 asignaturas** que hoy no los tienen, en dos situaciones
distintas:

- **Primero y segundo, 26 asignaturas.** Sus fichas solo tienen la guía docente de la UGR y
  la bibliografía; el material no existe y hay que escribirlo.
- **Tercero, 13 asignaturas.** El material existe y sobra, pero está en PDF suelto y sin
  estructura canónica. Hay que convertirlo, no redactarlo.

**OE, de cuarto, queda fuera por decisión de Ismael**
([D-14](DECISIONES.md#d-14--tercero-entra-en-la-fase-6-por-escrito)): se queda con sus tres
tests y sus prácticas.

No es una fase que se «termine»: se va tachando asignatura a asignatura, al ritmo que dé.

## Precondiciones

- [Fase 4](fase-4-plantillas.md) cerrada, o al menos la plantilla arreglada: no tiene
  sentido crear 26 asignaturas nuevas con una plantilla que hay que rehacer después.

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

Arrancar copiando una asignatura ya migrada:

```bash
cp -r Subjects/Fourth/MC Subjects/Second/SO
# ajustar PROJECT en el Makefile y src/00_portada.md
```

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

## Tercero — 13 asignaturas

**Añadidas el 2026-08-01 ([D-14](DECISIONES.md#d-14--tercero-entra-en-la-fase-6-por-escrito)).**
Eran un hueco del plan: la [fase 2](fase-2-contenido.md) las delegaba aquí y este documento
solo cubría primero y segundo, así que llevaban meses sin checklist en ninguna parte.

Tercero **no es como primero y segundo**. Allí no hay material y hay que escribirlo; aquí
el material existe y sobra, pero está en PDF suelto y sin la estructura canónica.
**Ninguna de las 13 tiene carpeta `src/`**, y solo IA, ISE y SCD tienen algún `Makefile`.
El trabajo es convertir, no redactar de cero.

| Código | Asignatura | `.md` | `.tex` | `.pdf` | Makefile | Plan en [fase 4](fase-4-plantillas.md) |
| --- | --- | --- | --- | --- | --- | --- |
| CF1 | Contabilidad Financiera I | 4 | 18 | 43 | — | sí (14 carpetas) |
| SCD | Sistemas Concurrentes y Distribuidos | 4 | 9 | 33 | 1 | sí (9) |
| PDOO | Programación y Diseño Orientado a Objetos | 14 | 7 | 35 | — | sí (6) |
| ECO | Econometría | 1 | 4 | 27 | — | sí (4) |
| FR | Fundamentos de Redes | 4 | 9 | 44 | — | sí (3) |
| DAE | Dirección y Administración de Empresas | 0 | 4 | 49 | — | sí (2) |
| CF2 | Contabilidad Financiera II | 10 | 9 | 19 | — | **no** |
| AOF | Análisis de Operaciones Financieras | 1 | 3 | 22 | — | **no** |
| FBD | Fundamentos de Base de Datos | 7 | 11 | 29 | — | **no** |
| FIS | Fundamentos de Ingeniería del Software | 1 | 7 | 45 | — | **no** |
| IA | Inteligencia Artificial | 0 | 15 | 34 | 3 | **no** |
| ISE | Ingeniería de Servidores | 25 | 14 | 35 | 1 | **no** |
| MC | Métodos Cuantitativos | 0 | 2 | 14 | — | **no** |

**Las siete de la mitad inferior no tienen plan de migración escrito en ninguna fase.** Ese
es el hueco de verdad: la fase 4 solo planifica seis de las trece.

Dos avisos que salen de la fase 2 y aplican aquí enteros:

- **Comparar páginas antes de sustituir.** Un PDF recién compilado puede ser más pobre que
  el que ya está publicado. `pdfinfo` a los dos, siempre.
- **Buscar el contenido también dentro de los `.tex` y los `.md`**, no solo en las carpetas
  de material. IA tiene 15 `.tex` y cero `.md`; ISE tiene 25 `.md`. No son carpetas vacías.

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
