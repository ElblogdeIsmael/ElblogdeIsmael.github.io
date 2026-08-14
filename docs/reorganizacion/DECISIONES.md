# Decisiones

Registro de qué se decidió, qué se descartó y por qué. Se amplía sobre la marcha: cuando
una fase obligue a decidir algo no previsto, se anota aquí.

---

## D-01 · Nombres de repositorio sin prefijo `ugr-`

**Fecha:** 2026-07-26 · **Estado:** adoptada

Se barajó `ugr-<asignatura>-<proyecto>` para agrupar los repos académicos en una cuenta con
36 repositorios. Se descarta.

| Criterio | Con `ugr-` | Con nombre de proyecto |
| --- | --- | --- |
| Agrupar la lista de repos | bien, pero GitHub ya lo hace con **topics** | — |
| Lectura de un recruiter | «ejercicios de clase» | «un proyecto» |
| Búsqueda en GitHub | penaliza: nadie busca `ugr` | favorece: `ansible`, `mpi`, `godot` |
| Como URL en el CV | `…/ugr-pdoo-irrgarten` chirría | `…/irrgarten` se lee solo |

**Regla adoptada:** nombre en inglés, kebab-case, describe *qué es*, no *de dónde viene*.
El origen académico va en la descripción, en el README y en el topic `ugr`.

La agrupación se recupera con **topics** (`ugr`, `coursework`, lenguaje, dominio), que son
buscables y no cuestan nada en la lectura del nombre.

---

## D-02 · Un solo estándar de acabado para todos los repos

**Fecha:** 2026-07-26 · **Estado:** adoptada

Se propuso dividir en «Tier A — portfolio» (README completo, release) y
«Tier B — archivo» (README mínimo). Se descarta: si un repo está público, alguien puede
abrirlo, y un repo mal explicado resta aunque no esté fijado en el perfil.

Todos cumplen [ESTANDAR-REPOS.md](ESTANDAR-REPOS.md). Lo único que distingue a los
destacados es estar fijados en el perfil, que es escaparate, no calidad.

---

## D-03 · Material ajeno a un repositorio privado

**Fecha:** 2026-07-26 · **Estado:** adoptada

Opciones evaluadas para los ~1,3 GB de material que nadie enlaza:

| Opción | Veredicto |
| --- | --- |
| Dejarlo y confiar en `prune-pages.py` | ✗ el repo crece sin techo y el riesgo legal sigue |
| Git LFS | ✗ **Pages no sirve ficheros LFS** (entregaría el puntero de texto en vez del PDF) y la cuota gratis es de 1 GB |
| Releases como almacén | ✓ útil para ficheros sueltos grandes, no para navegar un archivo |
| **Repo privado `apuntes-material`** | ✓ **adoptada**: separación limpia, el blog adelgaza, sigue accesible |
| Borrar sin más | ✗ hay material propio mezclado |

Se adopta el repo privado como destino principal y las Releases para entregables propios
voluminosos.

---

## D-04 · Un repo por proyecto, no un monorepo

**Fecha:** 2026-07-26 · **Estado:** adoptada

| Opción | Veredicto |
| --- | --- |
| Monorepo `ugr-practicas` | ✗ un README no puede documentar 10 stacks; issues y releases se mezclan |
| **Un repo por proyecto** | ✓ **adoptada**: cada uno con su toolchain, su README y su release |
| Un repo por práctica | ✗ 40+ repos de tres ficheros, ruido puro |
| Submódulos dentro del blog | ✗ acopla los dos repos y complica el CI sin aportar nada al lector |

---

## D-05 · Reescribir el historial en vez de solo borrar

**Fecha:** 2026-07-26 · **Estado:** adoptada

Un `git rm` deja el fichero en el historial: el clon sigue pesando lo mismo y la clave
privada sigue siendo recuperable. `git filter-repo` es la única forma de eliminarlo de
verdad.

Coste asumido: cambian todos los hashes de commit y obliga a `push --force`. Solo hay un
clon local, así que basta con realinearlo (ver
[regla 7](REGLAS.md#7-hay-un-solo-clon-con-dos-rutas)).

Se descartó crear un repositorio nuevo desde cero: perdería el histórico de commits, que sí
tiene valor.

---

## D-06 · Todo LaTeX a la generación pandoc

**Fecha:** 2026-07-26 · **Estado:** **revocada en parte el 2026-08-02, ver [D-15](#d-15--tercero-no-migra-a-la-plantilla-de-cuarto)**

Tres generaciones conviviendo. Se unifica en la tercera, la de cuarto curso, que ya está
construida y funcionando.

> La parte de arreglar y propagar la plantilla sigue vigente y está hecha. Lo que se
> revoca es migrar los 38 documentos de tercero: se quedan donde están.

**Criterio por documento:**

- Hay fuente (`.tex` o `.md`) → se migra y se recompila.
- Solo hay PDF → **se deja tal cual**. No se falsifica homogeneidad recreando a mano un
  documento del que no se conserva la fuente.
- Borradores y duplicados (`OTROS/`) → no se migran, se archivan con el material.

Los PDF que se queden sin migrar se listan al final de este fichero, en «Documentos sin
fuente».

---

## D-07 · Tests HTML: el Markdown es la fuente

**Fecha:** 2026-07-26 · **Estado:** adoptada

Los 26 tests escritos a mano se regeneran con md2html a partir de un `.md` extraído del
HTML antiguo. A partir de ahí:

- `test/*.md` → fuente, se versiona, se edita.
- `test/*.html` → artefacto, se versiona porque Pages lo sirve, no se edita.

El extractor `build/scripts/test-html-to-md.mjs` se conserva en el repo: sirve para
cualquier test antiguo que aparezca después.

**Acotada por la [D-11 a D-14](#d-12--el-formato-de-escritura-es-híbrido-y-ya-lo-era) el
2026-08-01**: esta decisión vale para los tests, no para los apuntes. En los apuntes el
formato es híbrido, ver D-12.

---

## D-08 · Primero y segundo son trabajo pendiente, no huecos

**Fecha:** 2026-07-26 · **Estado:** adoptada

Se propuso añadir un campo `status` a la ficha de asignatura para marcar los cursos sin
material. Se descarta: no es un estado que haya que señalizar en la web, es trabajo por
hacer.

Las 26 asignaturas de primero y segundo van como lista de tareas en
[fase-6-contenido-pendiente.md](fase-6-contenido-pendiente.md).

Quinto es distinto: se cursa en septiembre de 2026. No es un hueco ni una tarea atrasada,
es futuro. Se rellena sobre la marcha.

---

## D-09 · `mifos/` y `gestor-finanzas` fuera de alcance

**Fecha:** 2026-07-26 · **Estado:** adoptada

`mifos/` tiene contenido privado cifrado y queda fuera del sistema de diseño del sitio.
`Ismael-Sallami/gestor-finanzas` es privado. Ninguna fase los toca. Ver
[regla 10](REGLAS.md#10-no-se-toca-mifos-ni-gestor-finanzas).

---

## D-10 · Códigos de asignatura duplicados

**Fecha:** 2026-07-26 · **Estado:** **aplicada** el 2026-08-14, en la primera tanda de la fase 6

Dos códigos se repiten entre cursos:

| Código | Segundo curso | Cuarto curso |
| --- | --- | --- |
| `MAC` | Macroeconomía | Modelos Avanzados de Computación |
| `CG` | Contabilidad General | Contabilidad de Gestión |

Las carpetas de disco no colisionan (van en `Second/` y `Fourth/`), pero la insignia de la
ficha sí es ambigua. Se renombran las de segundo a **`MACRO`** y **`CGRAL`** antes de crear
su material, para no arrastrar el problema.

Nota: la carpeta existente ya se llama `Subjects/Second/MACRO`, así que el cambio es
coherente con lo que hay.

---

## D-11 · LaTeX se queda, typst no se evalúa

**Fecha:** 2026-08-01 · **Estado:** adoptada

typst es un sustituto real de LaTeX, pero migrar el repositorio entero cuesta mucho más de
lo que aporta: toda la plantilla compartida de `extraFiles/preambulos_oficiales/`, los ocho
Makefile que hacen `\input` de ella y las decenas de `.tex` de tercero y cuarto habría que
rehacerlos. Un `grep -rni typst` sobre el repositorio devuelve hoy una sola línea, la del
propio punto abierto: no hay nada construido en esa dirección.

Se cierra el punto. Único motivo para reabrirlo: que la toolchain de pandoc deje de
mantenerse.

---

## D-12 · El formato de escritura es híbrido, y ya lo era

**Fecha:** 2026-08-01 · **Estado:** adoptada, **con el criterio corregido el 2026-08-02**

El formato es híbrido y lo seguirá siendo. Lo que cambia es **cuándo se sale a LaTeX**,
porque la razón que daba esta decisión no se sostuvo al medirla.

### Lo que decía, y por qué era falso

Decía que el contenido acabó en `.tex` porque «markdown no autocompleta figuras tikz ni
matemática pesada». Contando cuántas líneas de esos `.tex` están dentro de un entorno que
de verdad necesita LaTeX —`tikzpicture`, `equation`, `align`, `tabular`, `lstlisting`,
`figure`— sale esto:

| Asignatura | Líneas `.tex` | En entornos LaTeX | Prosa |
| --- | ---: | ---: | ---: |
| DDSI | 332 | 0 % | **100 %** |
| EM | 4.247 | 10 % | 89 % |
| CG | 1.402 | 14 % | 85 % |
| MC | 5.097 | 19 % | 80 % |
| DO-1 | 2.201 | 41 % | 58 % |
| IG | 8.641 | 44 % | 55 % |

CG son 1.402 líneas de LaTeX **sin un solo `tikzpicture` ni una sola ecuación**: capítulos
enteros de prosa escritos con `\section` y `\begin{itemize}`. No están ahí porque hiciera
falta, sino porque el documento empezó ahí.

Y la contraprueba: **MAC, la asignatura más matemática de cuarto, es markdown puro.** 1.942
líneas, 67 páginas, veinte bloques `$$`, setenta filas de tabla markdown y **tres** líneas
de LaTeX crudo en todo el documento.

Comprobado además que **pandoc pasa LaTeX crudo escrito dentro de un `.md` intacto al
`.tex`** —probado con un `tikzpicture` y prosa alrededor—, así que ni siquiera hace falta
partir el contenido en dos ficheros.

### El criterio, por orden

1. **Todo en markdown**: prosa, listas, tablas `|`, matemática `$…$` y `$$…$$`, código.
2. **LaTeX crudo dentro del `.md`** cuando markdown no llegue: `tikzpicture`, `align` de
   varias líneas, tablas con celdas combinadas, `algorithm`.
3. **`.tex` aparte solo si el bloque pasa de unas 50 líneas** y estorba leer el capítulo.
   Va en `src/tex/` y entra con `\input{src/tex/nombre}`, como hace IG.

Nunca un capítulo entero de prosa en `.tex`.

**Las cinco de cuarto no se migran**, por la misma lógica de la [D-15](#d-15--tercero-no-migra-a-la-plantilla-de-cuarto):
funcionan, publican, y recompilarlas arriesga publicar menos de lo que hay. El criterio
vale para lo que se escriba a partir de ahora, y va escrito en
`Subjects/_template/README.md`.

### El arreglo que esta decisión encargó, hecho el 2026-08-02

Decía que había que arreglar el glob de los Makefile, que hace `src/*.md` y nunca ve los
`.tex` sueltos, y lo encargaba a la [fase 4](fase-4-plantillas.md). **La fase 4 no lo hizo
y su documento no lo menciona.** Comprobado: `make -n` sobre IG después de tocar
`src/tex/t1.tex` invocaba pandoc **cero** veces.

Resuelto añadiendo `TEXSRC = $(shell find src -name '*.tex')` como dependencia en las seis
asignaturas afectadas. `find` cubre las dos disposiciones del árbol —`src/tex/` en CG,
DDSI, DO-1, IG y MC, y `src/t1…t6/` en EM— sin tener que uniformarlas.

Esta decisión **acota la D-07**: aquella fijaba markdown como fuente, pero solo se cumple
—y solo se pretendía— para los tests.

---

## D-13 · No habrá sección Proyectos en el blog

**Fecha:** 2026-08-01 · **Estado:** adoptada

La [fase 5](fase-5-indexado.md) proponía crear `content/sections/proyectos/` con once repos
en cinco bloques. Los once son un subconjunto de los 27 que ya lista el portfolio de
`ismael-sallami.github.io`, con los mismos enlaces a GitHub y sin ninguna capa propia
encima. Sería duplicar la misma información en dos sitios que hay que mantener a la vez.

Se elimina la parte C de la fase 5. **Se conserva la parte B**, que es la que sí aporta
algo que el portfolio no hace: enlazar cada repositorio desde la ficha de la asignatura de
la que salió. El portfolio lista proyectos; el blog cuenta de dónde salieron.

---

## D-14 · Tercero entra en la fase 6 por escrito

**Fecha:** 2026-08-01 · **Estado:** **revocada el 2026-08-02, ver [D-15](#d-15--tercero-no-migra-a-la-plantilla-de-cuarto)**

Las 13 asignaturas de tercero eran un hueco del plan. La [fase 2](fase-2-contenido.md) las
delegaba explícitamente en la fase 6, y la fase 6 solo cubría las 26 de primero y segundo,
así que no tenían checklist en ningún sitio. De las 13, la [fase 4](fase-4-plantillas.md)
solo planifica seis.

Se documentan en [fase-6-contenido-pendiente.md](fase-6-contenido-pendiente.md) con su
estado real. Convertirlas es trabajo aparte y no lo bloquea nada.

**OE queda fuera por decisión de Ismael**: se queda con sus tres tests y sus prácticas, y
no se escribe su temario. Se retira de la lista de pendientes.

---

## D-15 · Tercero no migra a la plantilla de cuarto

**Fecha:** 2026-08-02 · **Estado:** adoptada · **Revoca:** la parte de migración de
[D-06](#d-06--todo-latex-a-la-generación-pandoc) y [D-14](#d-14--tercero-entra-en-la-fase-6-por-escrito)

Los 38 documentos LaTeX de tercero se quedan en su plantilla actual. Son 46 `.tex` de
primera generación y 216 PDF versionados, de los que la web enlaza 67.

**Por qué no se hace:**

1. **La ganancia es cosmética y el riesgo no.** La lección 1 de la
   [fase 2](fase-2-contenido.md) dice que un PDF recompilado puede salir más pobre que el
   publicado. Ahí pasó en cinco asignaturas de cuarto; aquí habría que comprobarlo 38
   veces, documento a documento, y basta fallar una para publicar menos de lo que ya hay.
2. **La variedad de plantillas es contenido.** Esos documentos enseñan cómo fue
   evolucionando la forma de componerlos. Uniformarlos borra eso a cambio de que el índice
   se vea igual.
3. **No bloquea nada.** La plantilla compartida ya está arreglada y las once de cuarto la
   usan. Tercero no la necesita para nada de lo que queda.

**Qué sí se hizo de la fase 4**, porque eran defectos y no cosmética:

- `metadata.yaml` afirmaba que todo documento se titulaba «Álgebra Lineal», lo firmaba
  «Ismael» y era de «Matemáticas». Solo funcionaba porque cada portada pisaba `subject`.
- `estilo.latex` llegaba a sus piezas por exactamente tres niveles de `../`, y en el árbol
  conviven cuatro profundidades. Ahora las rutas son relativas a `extraFiles/` y cada
  Makefile pone ese directorio en `TEXINPUTS`.
- El Makefile de cuarto compilaba seis de las once asignaturas que tienen uno.

**Consecuencia para la fase 6:** su bloque «Tercero — 13 asignaturas» era esta migración
con otro nombre y se retira. La fase 6 se queda con primero y segundo.

---

## D-16 · Los tests de CF1 son transcripción propia

**Fecha:** 2026-08-02 · **Estado:** adoptada

Los seis `testTNLibro.html` de CF1 quedaron señalados en la fase 5 porque su nombre decía
«del libro» y sus 62 preguntas son enunciados de banco de test. Se dudó si eran material de
un manual, que no se republica.

**Las transcribió Ismael.** El punto se cierra: los seis `.md` declaran
`**Autor:** Ismael Sallami Moreno` y no hay nada que retirar.

Distinto es `CF1/Tests/testPDF/TESTS.pdf`, que sí estaba descargado —portada de la
Universidad Autónoma de Madrid, «Anónimo», «Reservados todos los derechos» y hash de marca
de agua— y se retiró el 2026-08-02. Sus preguntas **no** coinciden con las de los seis
tests: se comprobó antes de decidir.

---

## Documentos sin fuente

Los PDF que se quedan en su plantilla original. Por la [D-15](#d-15--tercero-no-migra-a-la-plantilla-de-cuarto)
ya no es una lista de excepciones: **todo tercero se queda como está**, tenga fuente o no.

| Ruta | Asignatura | Motivo |
| --- | --- | --- |
| `Subjects/Third/**` | las 13 de tercero | D-15: no se migran |

---

## Cambios sobre la marcha

Decisiones tomadas durante la ejecución que no estaban previstas. **Se rellena a partir de
la fase 0.**

| Fecha | Fase | Decisión | Motivo |
| --- | --- | --- | --- |
| 2026-07-26 | 0 | Añadir `id_rsa_*` y `**/claves/` al `.gitignore` | La regla `id_rsa` es un nombre exacto y no cubría `id_rsa_admin`. Las 24 claves quedaban como no rastreadas tras el `git rm --cached`, así que un `git add -A` las habría vuelto a subir |
| 2026-07-26 | 0 | Generar `.rutas-a-purgar.txt` con `core.quotePath=false` | Sin esa opción git escapa los acentos de `Prácticas` en octal y entrecomilla la ruta, y `git filter-repo --paths-from-file` no la reconocería |
| 2026-07-26 | 1 | Empujar a `Ismael-Sallami` con `GIT_SSH_COMMAND` y la clave `id_github_ismael_sallami` | La clave SSH por defecto autentica como `ElblogdeIsmael`, sin escritura en esa cuenta. Existe una clave dedicada, ya declarada en `~/.ssh/config` como `github.com-ismael` |
| 2026-07-26 | 1 | Retirar los zip de las entregas del árbol y adjuntarlos a la release | Al abrirlos resultaron ser sobre todo Javadoc generado, `.class` y ficheros de NetBeans; su código lo reemplaza `src/`. Un zip además no se navega ni se diferencia en GitHub. Adjuntos a la release se conservan sin lastrar el clon |
| 2026-07-26 | 1 | Nombres de carpeta y texto de release en inglés | Es lo que ve quien abre el repositorio, igual que el README |
| 2026-07-26 | 1 | Fila de badges y `ci.yml` obligatorios en todos los repos | Un badge de estado sin CI detrás sería falso, así que el badge obliga al workflow. De paso garantiza que el repositorio sigue compilando dentro de dos años |
| 2026-07-26 | 1 | En `irrgarten` el badge dice `build`, no `tests` | El workflow compila y ejecuta unas comprobaciones que imprimen valores sin verificarlos. `tests passing` sería mentira en la portada |
| 2026-07-26 | 1 | No republicar el material del profesorado en `ansible-infra-lab` | La API de Node y MongoDB que se somete a carga la proporciona la asignatura y su propio README declara que su desarrollo queda fuera del ámbito. Mismo criterio para los enunciados. Es la misma regla que aplica la fase 2 a libros y wuolah |
| 2026-07-26 | 1 | Reconstruir `group_vars/all.yml` en vez de publicarlo roto | Estaba sobrescrito con apuntes de otra asignatura desde la subida inicial del blog, así que no hay original. Sin él el playbook no puede ejecutarse. Se reconstruye del uso que hace el playbook y el fichero lo declara en su cabecera |
| 2026-07-26 | 1 | Parametrizar las credenciales del plan de JMeter | Iban escritas en el `.jmx`. Publicar credenciales en un repo público es justo lo que corrigió la fase 0, aunque sean de laboratorio |
| 2026-07-26 | 1 | Buscar el código también dentro de los `.tex`, no solo en carpetas de código | En IG los ejercicios viven en bloques `lstlisting` del documento LaTeX: 47 bloques frente a 20 scripts sueltos en `code/`. Se habría publicado un tercio del trabajo |
| 2026-07-26 | 1 | Generar el código desde el LaTeX y verificar la deriva en CI | El documento es la fuente: cada solución está junto a su enunciado y su desarrollo. Extraerlo da ficheros parseables sin duplicar la verdad, y `make diff-check` impide que las dos mitades se separen |
| 2026-07-26 | 1 | Renombrar `oracle-plsql-lab` a `oracle-sql-exercises` | No hay PL/SQL en la asignatura: ni procedimientos, ni funciones, ni triggers, ni bloques `DECLARE/BEGIN`. El nombre habría prometido una destreza que el repositorio no contiene |
| 2026-07-26 | 1 | Ejecutar el SQL contra un Oracle real en CI, no solo parsearlo | `sqlfluff` acepta una consulta contra una columna inexistente. Un *service container* con `gvenzl/oracle-free` crea el esquema, carga los datos y ejecuta las 20 consultas |
| 2026-07-26 | 1 | Saltar seis reglas de `ansible-lint` documentando cada una | Tres son cosméticas y tres son defectos reales del código entregado. Arreglarlos falsearía la entrega; dejar el CI en rojo haría inútil el badge. Se saltan con su motivo escrito y se listan en las limitaciones del README |
| 2026-07-26 | 1 | Documentar los defectos del código en el README en vez de arreglarlos | Es un repositorio de un trabajo entregado. Arreglarlo ahora falsearía lo que se entregó; un apartado de limitaciones honesto vale más en una entrevista |

### Pendiente de decidir

~~**El `.gitignore` no está versionado.**~~ **Resuelto el 2026-08-01: se versiona.** Se
quitó la línea que lo excluía a sí mismo. `CLAUDE.md` y `.claude/` siguen fuera a
propósito, y el fichero ahora dice por qué.

---

@author Ismael Sallami Moreno
