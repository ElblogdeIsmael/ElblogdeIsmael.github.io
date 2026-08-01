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

**Fecha:** 2026-07-26 · **Estado:** adoptada

Tres generaciones conviviendo. Se unifica en la tercera, la de cuarto curso, que ya está
construida y funcionando.

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

**Fecha:** 2026-07-26 · **Estado:** pendiente de aplicar (fase 6)

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

**Fecha:** 2026-08-01 · **Estado:** adoptada

La idea original era escribirlo todo en markdown. En la práctica no ocurrió, y por un
motivo bueno: markdown no autocompleta figuras tikz ni matemática pesada, así que ese
contenido acabó en `.tex` por su cuenta.

- Markdown para la prosa: capítulos, explicaciones, listas.
- `.tex` bajo `src/tex/` para figuras tikz, tablas complejas, pseudocódigo y matemática
  pesada, incluido desde el markdown con `\input`.

**No se migra nada, porque es lo que ya hacen cinco asignaturas.**
`Subjects/Fourth/IG/src/01_Teoria.md` son diez líneas que solo hacen `\input`, y en CG,
DO-1, EM, IG y MC el contenido real vive en `src/tex/`. La fase 2 ya midió que ahí el PDF
de LaTeX sale más completo que el de pandoc (MC: 103 páginas frente a 61).

Lo que sí hay que arreglar es el glob de los Makefile, que hace `src/*.md` y por eso nunca
ve los `.tex` sueltos. Es trabajo de la [fase 4](fase-4-plantillas.md).

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

**Fecha:** 2026-08-01 · **Estado:** adoptada

Las 13 asignaturas de tercero eran un hueco del plan. La [fase 2](fase-2-contenido.md) las
delegaba explícitamente en la fase 6, y la fase 6 solo cubría las 26 de primero y segundo,
así que no tenían checklist en ningún sitio. De las 13, la [fase 4](fase-4-plantillas.md)
solo planifica seis.

Se documentan en [fase-6-contenido-pendiente.md](fase-6-contenido-pendiente.md) con su
estado real. Convertirlas es trabajo aparte y no lo bloquea nada.

**OE queda fuera por decisión de Ismael**: se queda con sus tres tests y sus prácticas, y
no se escribe su temario. Se retira de la lista de pendientes.

---

## Documentos sin fuente

Los PDF que se queden en su plantilla original porque no se conserva el `.tex` o el `.md`
que los generó. **Se rellena durante la fase 4.**

| Ruta | Asignatura | Motivo |
| --- | --- | --- |
| _(pendiente de la fase 4)_ | | |

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
