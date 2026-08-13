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

---

## El inventario de PDF, cerrado el 2026-08-08

La entrada de esta fase eran los 203 PDF versionados que la web no enlaza, en
`.inventario-pdf-no-indexados.txt`. Quedaban **24 en `REVISAR`**. Abiertos uno a uno:
**16 ajenos y 8 propios**. Ya no queda ninguno por revisar.

El reparto que daba `CLAUDE.md` estaba mal en dos sitios: CF1 son **7**, no 8, y faltaba un
PDF de SCD. El total sí cuadraba en 24, que es justo por lo que nadie lo notó.

### Lo que se retiró

| Asignatura | Nº | Prueba |
| --- | ---: | --- |
| CF1 | 7 | «Reservados todos los derechos», con códigos de descarga `R0006` y `CanelitanRama` |
| PDOO | 3 | Relaciones del profesorado: «Ejercicios: Objetos / Atributos y Métodos / Herencia» |
| FIS | 3 | Dos temas de transparencias en PDFium y un enunciado con *Author* `ceci` |
| FBD | 2 | Los dos `.docx` de enunciados de seminario |
| ECO | 1 | El examen oficial, con casillas de DNI y apellidos |

18 MB, respaldados con sus rutas en `~/backups/material-ajeno-2026-08-08`.

### Cinco los incluía un documento que compila

Borrar sin más habría roto builds en silencio. Lo que se hizo en cada uno:

| Quién lo incluía | Arreglo |
| --- | --- |
| `PDOO/Teoria/ETSIIT/Teoria.tex` | Los tres `\includepdf` apuntan ahora a `Solt1`, `Solt2` y `Solt3`, que son **las soluciones de Ismael**. El documento pasó a 51 páginas y gana contenido propio |
| `FIS/Teoria/Temario.tex` | Comentados. La prosa de introducción de cada tema, que es propia, se queda |
| `FBD/…/S4_FBD.md` | Quitado el `\includepdf` y el `\usepackage{pdfpages}` que ya no hacía falta. `Ejercicios_S4.pdf`, que **la web sí publica**, recompilado: 11 → 9 páginas, y el diff de texto es exactamente el enunciado |
| `FIS/…/Ejercicio3.tex` | El diagrama se **redibujó en tikz**, con los errores del enunciado intactos |
| `FBD/Practica/Temario.tex` | Ya estaba comentado |

### El diagrama de FIS, y el PDF roto que había detrás

`figures/Ejercicio.pdf` era el modelo conceptual que el ejercicio manda corregir, así que
retirarlo sin más dejaba el ejercicio sin sentido. Se ha vuelto a dibujar en tikz dentro de
`chapters/Ejercicio3.tex`: cinco clases y los cinco errores que la solución enumera —la
generalización mal puesta entre Habitación y Hotel, la asociación sin nombre con Ciudad, el
extremo no navegable, Reserva colgando como clase asociación y la dependencia redundante
Hotel–Cliente—. La solución dibujada a mano por Ismael no se toca.

**Y al abrirlo apareció otra cosa.** La ficha «Ejercicio 3 · Modelo conceptual» apuntaba a
`chapters/Ejercicio3.pdf`, que es **una página con los nombres de clase apilados en
columna**: un artefacto roto, sin cajas ni líneas, publicado desde el commit inicial. El
documento de verdad es `main.pdf`, 8 páginas, versionado y sin enlazar. La ficha apunta ya
ahí y el artefacto roto se ha borrado.

**Lección:** que un enlace resuelva no dice nada de lo que hay al otro lado. `npm run check`
comprueba que el fichero existe, no que valga algo.

### El DNI

Al mirar el PDF propio de SCD apareció el DNI en la portada, y de ahí salió un barrido:
estaba en **seis cabeceras de código versionadas** —dos `.gd` de IG y cuatro `.cpp` de SCD—
y en **dos PDF**, uno de ellos publicado (`SegundoParcial/…/ExamenesAnteriores.pdf`, que lo
arrastraba por un `\lstinputlisting`).

Quitado de las seis cabeceras y el PDF publicado recompilado: 42 páginas antes y después, y
el diff de texto es una sola línea. El de `Parcial_SCD_Extra` no tenía fuente editable, así
que su explicación se ha pasado a `explicacion.md` y el PDF se ha retirado a
`~/backups/dni-scd-2026-08-08`.

**Sin tocar el historial**: el dato sigue siendo alcanzable con `git log`. Reescribir los
313 commits otra vez no compensa, y desde el 2026-08-11 el motivo es otro que cuando se
escribió esto. Entonces era que el ticket #4622497 seguía abierto. Ahora está cerrado, y lo
que desaconseja una tercera pasada es que **las siete `refs/pull` vivas volverían a anclar
el historial viejo** y Support ya ha dicho por escrito que la excepción no se repite. Un
DNI en un commit de hace meses no justifica quedarse sin forma de rematarlo.

### Lo que quedaba del inventario

Los **9 `ESCANEO`**, que se cerraron al día siguiente. Ver la sección de abajo.

Barrido de control sobre todos los PDF versionados buscando marca de descarga: solo salieron
los 7 de CF1, ya retirados. Por esa señal no queda nada.

**Un defecto que se veía y no se tocó**, y que la tanda de builds del día siguiente sí
arregló: `FBD/Teoria/Temario.tex` hacía `\includepdf{../../../../licencia.pdf}` cuando el
fichero está en `extraFiles/licencia.pdf`, así que su compilación fallaba. Se dejó porque
arreglarlo cambiaba un PDF que la web publica. Cambió, y a mejor: **19 páginas a 25**, seis
de relación 3 que llevaban escritas desde que la ruta se rompió. Está más abajo, en «Los
PDF publicados».

---

## La auditoría del 2026-08-09: la clase `PROPIO` estaba mal

Abrir los 9 `ESCANEO` era el último punto del inventario. Se cerró, pero de camino apareció
algo bastante peor: **`PROPIO` llevaba meses conteniendo 39 ficheros del profesorado**.

### Por qué falló la clasificación

La fase 5 clasificó por metadatos, y ahí la señal era el campo *Author* del PDF. **Beamer lo
deja vacío y declara `pdfTeX` como productor, exactamente igual que la cadena de LaTeX de
Ismael.** Así que las transparencias de clase entraron en el mismo cajón que sus apuntes:
244 páginas de Econometría, 480 de SCD y 140 de FR.

El aviso estaba escrito desde la fase 5 —«la teoría de SCD y de ECO es por donde empezar»— y
el cierre del 2026-08-08 lo dio por caducado porque esos ficheros **no estaban en `REVISAR`:
estaban en `PROPIO`**, que nadie había vuelto a mirar.

Las tres señales que sí funcionan, en orden:

1. **La portada.** Los nombres salen ahí aunque el metadato esté vacío: «Carlos Ureña / Jose
   M. Mantas / Pedro Villar / Manuel Noguera», «Manuel I. Capel, manuelcapel@ugr.es»,
   «GII-ADE-M. Relación de problemas».
2. **La fecha de creación contra el curso.** Los diez cuadernillos de prácticas de ECO se
   compilaron con MiKTeX entre septiembre y noviembre de **2021**, y la asignatura se cursó
   en 2024-25.
3. **La marca de descarga**: «Reservados todos los derechos», wuolah, el hash de marca de
   agua, «Escaneado con CamScanner».

### Los 9 `ESCANEO`

| Fichero | Qué era | Decisión |
| --- | --- | --- |
| `CF1/…/Ejercicios_Propuestos_T2.pdf` | páginas 38-57 del *Manual de Supuestos Prácticos de Contabilidad Financiera Vol. I*, CamScanner, con sus respuestas escritas encima | retirado |
| `CF1/Resumenes/Tema6/ultimaParteT6TeoriaCF1.pdf` | página 323 de un libro de texto, sin anotar | retirado |
| `ECO/Teoria/Apendice_VariablesFicticias_rotated.pdf` | «Apéndice A», páginas 153-156 de unos apuntes de la FCCEE | retirado |
| `FBD/…/Ejercicios_FBD_S1.pdf` | 19 diagramas E/R resueltos a mano, con el enunciado recortado pegado arriba | propio, con nota |
| `CF1/Practica/Tema{2,3}/T{2,3}.pdf` | 31 páginas de cuaderno manuscrito | propio |
| `FIS/…/figures/Solucion.pdf` | el diagrama UML corregido a mano | propio |
| `FIS/…/figures/ugrA4.pdf` | membrete institucional de la UGR, vectorial | no era un escaneo |
| `DAE/TeoriaDAE/Tema 5.pdf` | **no existía**: lo retiró la fase 5 y el inventario seguía listándolo | marcado |

### Lo que se retiró, 51 ficheros y 64 MB

| Grupo | Nº | Prueba |
| --- | ---: | --- |
| Seminarios y prácticas de SCD | 8 | los cuatro nombres del profesorado en la portada |
| Transparencias de teoría de SCD | 5 | Beamer con plantilla LOGIK, «SCD para GIIM» |
| Relaciones de problemas de SCD | 5 | «GII-ADE-M. Relación de problemas. Tema N» |
| Transparencia de tiempo real de FR, por duplicado | 2 | firma «Manuel I. Capel» |
| `ECO/Teoria/Tema{1..6}.pdf` | 6 | Beamer «ECONOMETRÍA», curso 2024-2025 |
| `PDOO/…/Transparencias Tema 5.pdf` | 1 | es el Tema 5 de Econometría, archivado en la carpeta equivocada |
| Cuadernillos de prácticas de ECO | 10 | MiKTeX, 2021 |
| Tabla de Durbin-Watson | 1 | 2012 |
| Examen oficial de ECO | 1 | casillas «APELLIDOS, NOMBRE / DNI» |
| Los tres escaneos de arriba | 3 | libro y apuntes de facultad |
| Los `PROFESORADO` que seguían en el árbol | 9 | ya estaban clasificados desde la fase 5 y nadie los sacó |

Respaldados con sus rutas en `~/backups/material-ajeno-2026-08-09`, comprobados byte a byte.

### Seis documentos los incluían, y dos producen un PDF versionado

| Documento | Qué se hizo | Su PDF |
| --- | --- | --- |
| `SCD/Teoria/ETSIIT/Teoria.tex` | fuera las cinco transparencias y los cinco enunciados; se añade la solución propia de la relación 4, que estaba escrita y sin enlazar | 389 → **116 p**, no versionado |
| `SCD/Practicas/ETSIIT/Practicas.tex` | fuera los cuatro guiones y los tres seminarios; quedan sus resoluciones | 317 → **8 p**, **versionado** |
| `ECO/Teoria/FCCEE/Teoria.tex` | era solo un envoltorio; queda de esqueleto | 258 → 3 p, no versionado |
| `ECO/Practicas/FCCEE/Practica.tex` | fuera los diez cuadernillos y la tabla DW; quedan sus soluciones y el trabajo en grupo | 93 → **23 p**, **versionado y publicado** |
| `FR/Practicas/ETSIIT/Practicas.tex` | **no compilaba**: once de sus doce `\includepdf` apuntaban a ficheros que fases anteriores ya habían retirado. Comentados los doce | 110 → 3 p, no versionado |
| `CF1/…/Resument6.tex` | la última sección era un enlace al escaneo del libro; se ha escrito esa sección | 8 → **9 p**, **versionado y publicado** |

**No basta con comentar el `\includepdf`.** Los `\subsection` que solo existían para
sostenerlo se quedan en el índice apuntando a una página vacía, y el documento promete un
contenido que ya no tiene. Se ven en el PDF, no en el log.

**Y el nombre del fichero no basta para saber si es el tuyo:** `T3.pdf` existe en SCD (del
profesorado, retirado) y en CF1 (cuaderno manuscrito, se queda). Hay que resolver la ruta del
`\includepdf` contra el directorio del documento, no comparar nombres.

**`SCD/Practicas/ETSIIT/Practicas.tex` tampoco compilaba del todo:** incluía
`../Practicas/P1.pdf` en mayúscula y los ficheros son `p1.pdf`. En Linux eso no resuelve, así
que su PDF de 317 páginas se generó en algún sitio que no distinguía mayúsculas.

### Lo que cambió en la web

Dos tarjetas de `tercero.mjs`, las dos sirviendo ahora contenido enteramente propio:

- **ECO › Prácticas**: 93 páginas de las que 61 eran ajenas → 23.
- **CF1 › Resumen Tema 6**: la sección «El Inmovilizado Intangible en las cuentas anuales»
  pasa de un enlace muerto al escaneo a texto escrito. De paso, el enlace al test apuntaba a
  `Asignaturas/Tercer%20A%C3%B1o/`, ruta que no existe desde la fase 1.

`npm run check` sigue en 189 enlaces, 146 locales, todos resuelven.

### `ExamenesAnteriores.pdf`: se queda, y por qué

Es el único que sale en el barrido de control final sobre los 161 PDF que quedan versionados,
por el nombre «Carlos Ureña» en su índice. **Está publicado**, así que se miró con cuidado.

La primera lectura fue equivocada, y conviene dejarla escrita: el índice dice «1.2. Solución
Carlos Ureña 2014-2015» y eso **no es la solución oficial**. Es la de Ismael, escrita en
primera persona y con su propio código; el nombre solo identifica de qué examen es. Leer el
índice no basta, hay que abrir el `.tex`.

Lo ajeno de verdad son dos cosas mucho más pequeñas: los cinco enunciados, transcritos por
él, y los tres `plantilla.cpp` con los errores plantados que repartió el profesorado. **Se
quedan por decisión de Ismael**: los enunciados son transcripción suya y sin ellos las
soluciones no se entienden, y las plantillas son el fragmento de código sobre el que trata el
ejercicio. Es el mismo criterio que se aplicó a los diagramas E/R de FBD.

### Lo que queda pendiente

Los `PROFESORADO` que **no** se retiraron, porque no lo eran: las dos copias de
`CF1/Practica/plantillaEjercicios.pdf`, una tabla contable en blanco hecha en TeX, y
`DAE/…/imagenDaeAct8.pdf`, la ficha de los doce jurados anotada a mano para la actividad 8.

---

## Los builds, el 2026-08-09

Nadie había comprobado nunca si los documentos LaTeX del árbol se pueden reconstruir. Los
fallos salían de uno en uno y por accidente. Ahora hay un barrido:
`build/scripts/check-latex-builds.mjs` compila **los 104 documentos raíz** —todo `.tex` con
`\documentclass`— **a un directorio fuera del repositorio**, así que una pasada no pisa ni un
PDF de los que sirve la web.

### La línea base

| | Antes | Ahora |
| --- | ---: | ---: |
| Documentos que compilan enteros | 94 | **104** |
| No compilaban | 11 | 0 |
| Compilaban con huecos | 1 | 0 |

Los once, y lo que tenían:

| Documento | Causa |
| --- | --- |
| `FBD/Teoria/Temario.tex`, `IA/Practicas/Temario.tex`, `IA/Teoria/Temario.tex`, `ISE/Teoria/Temario.tex` | `\includepdf{../../../../licencia.pdf}`, y el fichero es `extraFiles/licencia.pdf` |
| `IG/TEX/IG.tex` | las rutas llevaban escrito a mano el nombre del directorio del repositorio: `../../../ElblogdeIsmael.github.io/extraFiles/…` |
| `CF1/Practica/FCCEE/Practica.tex` | buscaba sus imágenes de portada en `../images/` y están en `images/` |
| `FR/Teoria/ETSIIT/Teoria.tex`, `FR/…/preguntas.tex` | incluían diez PDF que la fase 3 retiró el 2026-08-01 y dejó los `\includepdf` puestos |
| `ISE/Teoria/Temario.tex` | además, un `\input` a un capítulo que no llegó a escribirse |
| `EM/src/casos-titulares-practica-ordinaria.tex` | usaba un entorno `solucion` que no está definido en ninguna parte, y `\euro` sin cargar `eurosym` |
| `FR/Resumenes/ETSIIT/plantilla/plantilla.tex`, `MAC/Practicas/t2/relacion2-documento.tex` | muertos: no los referencia nada. Borrados, con respaldo en `~/backups/documentos-muertos-2026-08-09` |

**La solución de las rutas no es contar bien los `../`, es quitarlos.** `TEXINPUTS` ya lleva
`extraFiles//` en recursivo, así que `\includepdf{licencia.pdf}` resuelve desde cualquier
profundidad. Normalizadas las once que lo usaban, compiladas o no.

### El hueco silencioso, que es lo que de verdad importa

**Un `\include` que no resuelve no rompe nada.** LaTeX escribe `No file X.tex.` en el log,
sigue, y `latexmk` sale con 0 dejando un PDF con un capítulo de menos. Comprobado con un
documento de prueba: dos páginas, código de salida 0, capítulo desaparecido.

`CF2/Teoria/Temario.tex` hacía `\include` de un `ARCHIVOS_LATEX/` **por la ruta absoluta de
la máquina de Ismael**, a una carpeta que nunca estuvo en el repositorio. Su PDF, que la web
publica, llevaba saliendo con 119 páginas y sin ese índice sin que nada lo dijera.

El barrido lo detecta y lo cuenta aparte de los fallos. Costó dos intentos:

1. **TeX parte las líneas del log a los 79 caracteres**, así que una ruta larga sale cortada
   por la mitad y ningún patrón la encuentra. Hay que volver a unirlas antes de buscar.
2. **`No file MC.bbl.` no es un fichero que falte**, es biblatex trabajando. Los productos de
   la propia compilación se filtran por extensión o salen cinco falsos positivos.

### Lo que NO era un fallo, y yo dije que sí

Dos afirmaciones del 2026-08-08 estaban mal y se corrigen aquí:

- **`kpathsea` reintenta ignorando mayúsculas.** `kpsewhich -var-value=texmf_casefold_search`
  devuelve `1`. Así que `\includepdf{P1.pdf}` encuentra `p1.pdf` y
  `\input{Capitulos/Conclusion_memoria.tex}` encuentra `conclusion_memoria.tex`. La
  diferencia de mayúsculas de SCD **no** era la causa de nada, y sus 317 páginas se
  generaron aquí perfectamente.
- **La ruta rota de `licencia.pdf` no estaba viva en diez documentos, sino en cuatro.** En
  los otros cinco de FBD la línea ya estaba comentada. El recuento salió de un `git grep`
  sin filtrar comentarios.

El barrido estático que precedió a este trabajo se equivocó en las dos direcciones: predijo
19 rotos y eran 11, y no vio el de CF2. **Compilar es la única respuesta que vale.**

### El clon limpio encontró tres más

Con el árbol de trabajo en 104 de 104, un `git clone` a `/tmp` seguía dando **tres fallos**.
Es la única forma de ver un fichero que está en disco y no en git:

| Documento | Le faltaba |
| --- | --- |
| `DAE/PracticasDAE/FCCEE/Practicas.tex` | `ACT8/…/build/ACT8.pdf` |
| `ECO/Practicas/FCCEE/Practica.tex` | `…/SolucionesEjercicios/FCCEE/build/Ejercicios.pdf` |
| `FR/TestsFR/…/preguntas.tex` | `build/IMAGEN_FR.jpg` |

Los dos PDF **ya estaban permitidos** por el `.gitignore` —existe la línea
`!Subjects/**/build/*.pdf`— pero nadie los había añadido nunca. La imagen estaba guardada
dentro de un directorio de compilación, así que la regla la ignoraba; se ha movido a
`images/`, que es donde va una entrada.

**El segundo importa más que los otros dos:** `ECO/Practicas/FCCEE/build/Practica.pdf` es el
que la web publica, y es el que se recompiló el mismo día para quitarle los cuadernillos del
profesorado. Desde un clon limpio no se podía reconstruir.

### Los PDF publicados

De los ocho publicados cuya fuente se tocó, **siete salen idénticos salvo por la fecha de
`\today`** y se dejan como están. El octavo sí cambia:

- **`FBD/Teoria/build/Temario.pdf`, de 19 páginas a 25.** Llevaba sin poder compilarse desde
  que se rompió la ruta de la licencia, así que el PDF se congeló mientras los ejercicios
  seguían escribiéndose. Las seis páginas nuevas son la relación 3.

`TEX/IG.pdf`, que **no** es el que la web sirve —publica `build/IG.pdf`, de 239 páginas—,
pierde una página al reconstruirse: su bibliografía. El `.tex` actual no la genera, así que
el PDF versionado está por delante de su fuente. Se deja.

### Material descargado dentro de un `.tex`, y publicado

Al mirar por qué no compilaba EM apareció esto, que **no es un problema de build**:

```
Subjects/Fourth/EM/src/t6/t6-bengochea-copiado.tex:31
  \footnote{Universidad de Granada 1000564-2601141753}
```

Es una marca de agua de descarga, y **sale en el `EM.pdf` que la web publica**, en la línea
3150 de su texto. Los dos ficheros «bengochea» son 446 líneas de prosa de manual y el nombre
de uno dice `copiado`.

**Por qué no se detectó antes: los tres barridos de control anteriores miraron solo PDF.**
Este material entra al PDF publicado desde un `.tex`, y ni `pdfinfo` ni el campo *Author* lo
delatan.

Barriendo las fuentes con el mismo criterio salen cuatro casos más, todos en tests que la web
publica: `EM/test/test.md:161` y `:256`, `CG/test/test.md:954` e
`ISE/Teoria/Test/test.md:1170` llevan comentarios de procedencia que citan PDF de wuolah, uno
de ellos de exámenes de un profesor con nombre y apellido. Y
`CF1/Practica/FCCEE/Practica.tex:111` pone `wuolah.com` como «Fuentes de la Información».

Son transcripciones propias de material descargado, no los ficheros en sí.

### Resuelto el mismo día: EM se reescribe y la bibliografía se usa para lo que es

Decisión de Ismael: los temas se escriben con sus palabras y el manual va a la bibliografía,
que para eso está. Citar una fuente es lo correcto **cuando se cita o se parafrasea**; copiar
el capítulo entero y añadir la referencia debajo sigue siendo reproducirlo.

| | Antes | Ahora |
| --- | ---: | ---: |
| `EM/TEX/EM.pdf`, publicado | 69 p | **63 p** |
| Temas del programa oficial cubiertos | 4 de 6 | **6 de 6** |
| Líneas de prosa de manual | 446 | 0 |
| Marcas de agua de descarga en el PDF | 1 | 0 |
| Bibliografía | ninguna | **13 obras citadas** |

Lo que se hizo:

- **El tema 5 está escrito de cero**, siguiendo el temario oficial de la guía docente
  ([2161143](https://grados.ugr.es/informatica-ade/docencia/plan-estudios/economia-mundial/guia-docente)):
  el tipo de cambio y el mercado de divisas, los regímenes cambiarios y el trilema, la
  integración financiera y cómo se mide, y la evolución del SMI del patrón oro al «no
  sistema». En impersonal, como el resto de sus apuntes.
- **Bibliografía de verdad.** `TEX/referencias.bib` con las entradas de la guía docente y
  `\printbibliography`. Antes había un `\input` del `.bib`, que LaTeX leía como comentarios y
  se saltaba sin decir nada, así que el documento no tenía bibliografía ninguna. **El `.bib`
  tiene que estar al lado del documento raíz** —en `TEX/`, no en la carpeta de la
  asignatura—, porque el `.` inicial de `TEXINPUTS` resuelve desde ahí; puesto un nivel más
  arriba, biber cae en el compartido, que está vacío, y la bibliografía sale en blanco.
- **Fuera 521 líneas de `src/t6/t6.tex`**, que eran una conversación de chat pegada en LaTeX
  con los encabezados incluidos («¡Excelente comienzo!», «POSIBLES PREGUNTAS DE EXAMEN»). No
  las incluía ningún documento.
- **La numeración cuadra con el temario.** El capítulo de casos y titulares acompaña a los
  temas 1 a 4 y estaba en medio robándoles el número; ahora va en apéndice.
- **Siete encabezados en primera persona** («nuestro país pequeño») pasan a impersonal, misma
  revisión que se hizo en AEF y MAC.

- **El tema 6, crecimiento y desarrollo, también está escrito**, con el mismo criterio: el
  guion del programa oficial —crecimiento y su medida, del crecimiento al desarrollo,
  globalización y la crisis de la economía global— y las fuentes en la bibliografía, citadas
  donde el texto se apoya en ellas. Se documentaron para esto el Maddison Project en su
  actualización de 2023 y el Informe sobre Desarrollo Humano del PNUD de 2025, que se suman a
  las obras de la guía docente.

Y las cuatro marcas de los tests más la cita de CF1: las preguntas son transcripciones de
exámenes anteriores y los ejercicios de CF1 salen del manual de prácticas de la asignatura,
así que eso es lo que dicen ahora las fuentes. **Los comentarios no llegaban al HTML
publicado** —md2html los usa para partir el documento y los descarta—, comprobado antes de
tocarlos, así que los `.html` no hay que regenerarlos.

Respaldo de lo retirado en `~/backups/em-material-copiado-2026-08-09`.

---

## El indexado de los `PROPIO`, abierto el 2026-08-13

Los 78 `PROPIO` del inventario son ficheros comprobados como suyos que **la web no
enlaza**. Al medirlo antes de empezar aparece que esa frase no significa lo que parece.

**«No lo enlaza» no es «no lo publica».** De los 77 sin enlace —uno se enlazó después de
generarse el inventario—, **18 se incluyen desde algún `.tex` con `\includepdf`, y 15 de
ellos salen dentro de un PDF que la web sí sirve**:

| Asignatura | Nº | Dónde salen |
| --- | ---: | --- |
| DAE | 8 | Las actividades 1 a 7 y la 9, dentro de `PracticasDAE/FCCEE/build/Practicas.pdf`, 91 páginas |
| CF2 | 4 | `PropuestosT4/T5/T6` en `Practica/Temario.pdf` y `Resumenes/Temario_Md.pdf` en `Teoria/Temario.pdf` |
| ECO | 2 | Los dos del trabajo, en `Practicas/FCCEE/build/Practica.pdf` |
| AOF | 1 | `ApuntesMD/Temario_Md.pdf`, en `Teoria/Teoria.pdf` |

Indexarlos por separado no publicaría nada nuevo: duplicaría.

**Y esto solo se ve resolviendo la ruta contra el directorio del documento que incluye**,
como hace LaTeX. Un `grep` por basename daba 24 y tres eran falsos: `T2.pdf` aparece en
`ISE/Teoria/Temario.tex` y en `DAE/…/Practicas.tex`, que incluyen cada uno el suyo. Es la
misma trampa que ya avisaba el napkin sobre `\includegraphics`.

### EM, la primera tanda

Las **20 presentaciones** de `EM/PRESENTACIONES/t2…t6`, 108 páginas de casos y titulares en
Beamer. No las incluye ningún `.tex` y no las enlazaba nadie. **19 indexadas** en un bloque
«Presentaciones» de su ficha; la web pasa de 189 enlaces a 208.

No se indexa `t3/caso3-5.pdf`: es idéntica a `caso3-5_SALLAMI_MORENO_ISMAEL.pdf` salvo una
cita que la segunda sí tiene, y esa es la entregada.

**Dos defectos de autoría que había que arreglar antes de publicar:**

- **`caso2-15_v2.tex` y `caso2-19_v2.tex` firmaban `\author{Profesor de Economía
  Internacional}` con `\institute{Harvard University}`**, y uno de ellos fechaba en un
  «Seminario Avanzado de Comercio Internacional» que no existe. Son presentaciones distintas
  de las firmadas —otra estructura, en español—, no duplicados, así que se corrigió la firma
  a Ismael Sallami Moreno y UGR y se recompilaron. **Publicar una atribución inventada a una
  universidad real no es una opción**, y dejarla en un `.tex` versionado de un repositorio
  público tampoco.
- **`caso2-19.tex` firmaba «Ismael Sallam Moreno»**, sin la i, y salía en la portada y en el
  pie de cada página.

De paso, las dos `_v2` usaban `\date{\today}`, así que al recompilar se fechaban hoy.
Fijadas al 29 de octubre de 2025, que es cuando se entregaron. **`\today` en un documento
entregado convierte cada recompilación en una mentira sobre la fecha.**

Barrido de procedencia sobre las 20: cero marcas de descarga, cero nombres del profesorado,
y los 19 `.tex` firman todos igual.

### Las 58 restantes, el mismo día

Medidas una a una, **la mayoría no eran candidatas**. El criterio: comparar el texto de cada
una contra la **unión de todo lo que su asignatura ya publica**, no contra un documento
suelto. Comparando solo contra uno, `FIS/…/ej3.pdf` parecía aportar 106 palabras de 174;
contra todo lo publicado son **8**, porque es el «Ejercicio 3» que la ficha ya sirve.

| Estado | Nº |
| --- | ---: |
| Ya salen dentro de otro PDF que la web sirve | 16 |
| Ya publicadas como fichero propio en otra ruta | 6 |
| Duplicado interno o versión peor que la publicada | 9 |
| Figuras y plantillas en blanco | 6 |
| Enunciado incrustado, no se indexan tal cual | 4 |
| Retiradas por decisión previa (MAC) | 3 |
| Carcasas vacías o punteros | 2 |
| **Indexadas** | **7** |

Las siete: `FIS/…/ej2.pdf` y `control1.pdf`, `FBD/Practica/Temario.pdf`,
`SCD/…/RelacionEjerciciosTema1.pdf`, `IA/…/apuntesClase.pdf` y las dos de PDOO.

**Con esto el inventario queda cerrado**: las 78 líneas llevan decisión escrita en su nota,
26 indexadas y 52 no.

### El formulario de Econometría, 47 páginas, que el inventario no podía ver

`ECO/Formulario/FCCEE/build/Formulario.pdf` existía solo en disco, **sin `git add`**, y sin
enlazar. No salía en el inventario porque **el inventario solo lista PDF versionados**. Son
47 páginas propias —2.308 palabras que no están en nada de lo que ECO publicaba—, compilan
desde fuentes versionadas y la ficha de ECO no tenía teoría de ningún tipo. Versionado y
publicado.

Para buscar más de esa clase:

```bash
comm -13 <(git -c core.quotepath=false ls-files '*.pdf' | sort -u) \
         <(find Subjects -name '*.pdf' | sort -u)
```

**El `core.quotepath=false` no es opcional.** Sin él, `git ls-files` escapa los acentos
—`Pr\303\241cticas`— y las rutas con tilde salen como si no estuvieran versionadas. Con el
patrón corto llegué a creer que la web publicaba un PDF de 115 páginas que no estaba en git.

Los otros 32 que salen del barrido son salida de `build/` de la tanda del 2026-08-09 y
reconstruyen documentos ya publicados.

### Dos defectos que aparecieron al abrirlos

- **`IA/Teoria/Temario.pdf` era una carcasa vacía**, y se ha resuelto el mismo día. Ver
  abajo.
- **`SCD/Practicas/ETSIIT/Practicas.pdf` pasó de 317 páginas a 8** en la recompilación del
  2026-08-09 que quitó lo ajeno, y lo que queda son punteros al repositorio
  `concurrency-mpi` que la ficha ya enlaza directamente. No se indexa, pero **el inventario
  seguía diciendo 317**: los recuentos envejecen igual que las clasificaciones.

### La teoría de IA, escrita y comentada

`IA/Teoria/Temario.tex` llevaba **todos** sus `\input{Capitulos/…}` comentados, así que el
PDF publicable eran 5 páginas: portada, licencia, índice vacío y una bibliografía cuya
única entrada era el propio autor del documento. Y lo comentado existe: **886 líneas
escritas** en `Capitulos/`.

Descomentado y reordenado en tres capítulos. `Tema3.tex` son catorce líneas que introducen
la búsqueda en espacios de estados, así que no da para capítulo: abre el tercero y el
problema del mono y el plátano lo desarrolla. **De 5 páginas a 21**, y la ficha de IA, que
no tenía bloque de teoría, ya lo tiene.

Tres cosas más de esa revisión:

- **33 formas en primera persona** —«podemos», «debemos», «vamos a ver»— reescritas en
  impersonal, el mismo criterio que se aplicó a AEF, MAC y EM.
- **La bibliografía se citaba a sí misma**: su única entrada era «Ismael Sallami Moreno,
  Estudiante del Doble Grado…». El texto no cita ninguna obra, así que el bloque se retira
  entero en vez de inventarle referencias.
- **Un párrafo prometía código en una ruta del sitio antiguo**, «Asignaturas/Tercer Año/…»,
  que ya no resuelve. El código está versionado pero no se publica: el marco de la práctica
  es del profesorado y solo el comportamiento del agente es propio. El párrafo dice ahora
  dónde está en el repositorio.

## El cajón de `build/`, el 2026-08-13

El inventario de PDF solo lista ficheros **versionados**, así que hay una clase entera que
no puede ver: documentos propios que existen únicamente como salida en `build/` sin
`git add`. El `.gitignore` los permite —`!Subjects/**/build/*.pdf`— pero nadie los añadió.

Medido: bajo `Subjects/` había **851 ficheros sin versionar, 74 MB**. De ellos **818 los
ignora `.gitignore`** —`.aux`, `.log`, `.class`— y **33 no**. Esos 33 no eran homogéneos:

| Qué eran | Nº | Qué se hizo |
| --- | ---: | --- |
| Propios, sin publicar y reconstruibles | 5 | **Publicados** |
| Recompilaciones de lo que la web ya sirve desde otra ruta | 16 | Borrados |
| Muertos | 5 | Borrados |
| Propios pero sin fuente | 3 | Respaldados, no publicados |
| Otros (un `.gitignore` suelto, plantillas) | 4 | Borrados |

Los cinco publicados: dos colecciones de preguntas de examen resueltas de FR, la criba de
Eratóstenes con MPI y la demostración de un algoritmo de exclusión mutua de SCD, y el
**parcial extra de SCD**, cuyo PDF anterior se retiró el 2026-08-08 por llevar el DNI. Este
se recompiló desde la fuente ya limpia y se verificó que no lo lleva.

**Los cinco muertos son la huella de una retirada bien hecha.**
`FBD/Practica/build/Temario.pdf` eran **0 bytes** desde mayo de 2025. Y las prácticas de FR,
la teoría de ECO y las diapositivas de ISE se habían quedado en tres páginas de portada e
índice: lo que llevaban dentro no era suyo y las fases anteriores lo retiraron. La de ISE,
además, era un `\includepdf` de las transparencias del profesorado con portada propia —lo
mismo que ECO Prácticas—, y su `.fls` lo delata.

**Los tres sin fuente no se publican.** `PDOO/…/Visibilidad.pdf`, `Herencia…` e
`ISE/…/Libro.pdf` son propios y limpios, pero su `.fls` apunta a rutas del árbol antiguo
(`Asignaturas/Tercer Año/`) que ya no existen. Publicar un documento que no se puede
reconstruir es justo lo que el barrido de builds vino a impedir. Respaldados en
`~/backups/builds-huerfanos-2026-08-13`.

**`git status` pasa de 33 entradas `??` a ninguna.** Y una advertencia: `git clean -d` no
sirve para esto. Barrería también `Subjects/Fifth/`, `EM/src/t7/`, `FBD/Practica/images/` y
las carpetas de datos de Grafana, que están vacías pero no son basura declarada. Hay que
borrar por lista explícita.

### El temario de FIS

`FIS/Teoria/Temario.tex` producía 9 páginas: portada, licencia, índice y **dos aperturas de
capítulo escritas para presentar las transparencias del profesorado**, que una fase anterior
había comentado. Lo que quedaba parafraseaba la guía docente. Y su bibliografía eran dos
entradas con la misma clave `Referencia1`: «Transparencias de la Asignatura…» y una autocita.

Reescrito con el criterio de EM, siguiendo la
[guía docente oficial 216113B](https://grados.ugr.es/informatica-ade/docencia/plan-estudios/fundamentos-ingenieria-del-software/guia-docente):
un capítulo por tema y sus apartados en el orden de la guía —el producto software y su ciclo
de vida, ingeniería de requisitos, diseño, y gestión de proyectos, verificación y
mantenimiento—. **De 9 páginas a 21**, en impersonal, con la bibliografía fundamental de la
asignatura citada donde el texto se apoya en ella y cero citas sin resolver.

**Aquí la bibliografía no va en un `.bib`.** El documento tiene preámbulo propio con
`\usepackage{cite}` y `thebibliography`, no biblatex. Añadirle biblatex por seguir la
convención de cuarto habría sido cambiar su cadena para no ganar nada.

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
