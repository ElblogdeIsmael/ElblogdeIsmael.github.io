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
272 commits otra vez no compensa mientras el ticket #4622497 siga abierto.

### Lo que quedaba del inventario

Los **9 `ESCANEO`**, que se cerraron al día siguiente. Ver la sección de abajo.

Barrido de control sobre todos los PDF versionados buscando marca de descarga: solo salieron
los 7 de CF1, ya retirados. Por esa señal no queda nada.

**Un defecto que se ve y no se toca:** `FBD/Teoria/Temario.tex` hace
`\includepdf{../../../../licencia.pdf}` y el fichero está en `extraFiles/licencia.pdf`, así
que su compilación falla. El mismo error tenía FIS y ahí se arregló, porque hacía falta para
verificar este trabajo. En FBD se deja: arreglarlo cambia un PDF que la web publica y eso es
una decisión de contenido, no de esta tanda.

---

## La auditoría del 2026-08-09: la clase `PROPIO` estaba mal

Abrir los 9 `ESCANEO` era el último punto del inventario. Se cerró, pero de camino apareció
algo bastante peor: **`PROPIO` llevaba meses conteniendo 39 ficheros del profesorado**.

### Por qué falló la clasificación

La fase 5 clasificó por metadatos, y ahí la señal era el campo *Author* del PDF. **Beamer lo
deja vacío y declara `pdfTeX` como productor, exactamente igual que la cadena de LaTeX de
Ismael.** Así que las transparencias de clase entraron en el mismo cajón que sus apuntes:
244 páginas de Econometría, 480 de SCD y 140 de FR.

CLAUDE.md avisaba de esto —«la teoría de SCD y de ECO cae ahí»— y el cierre del 2026-08-08
dio el aviso por caducado porque esos ficheros **no estaban en `REVISAR`: estaban en
`PROPIO`**, que nadie había vuelto a mirar.

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

### Lo que queda pendiente

**`SegundoParcial/…/ExamenesAnteriores.pdf`, publicado.** Es el único que sale en el barrido
de control final sobre los 161 PDF que quedan versionados. Transcribe cinco exámenes
anteriores con soluciones; cuatro son suyos, pero el primero es el examen de Carlos Ureña de
2014-15 **y su solución oficial**, unas 9 de sus 42 páginas. Por la regla de no republicar
material del profesorado habría que quitar esa sección y recompilar, pero eso cambia otra vez
lo que la web sirve y es decisión de contenido.

Los `PROFESORADO` que **no** se retiraron, porque no lo eran: las dos copias de
`CF1/Practica/plantillaEjercicios.pdf`, una tabla contable en blanco hecha en TeX, y
`DAE/…/imagenDaeAct8.pdf`, la ficha de los doce jurados anotada a mano para la actividad 8.

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
