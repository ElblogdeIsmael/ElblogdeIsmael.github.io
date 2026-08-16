# Reorganización del repositorio

Plan de trabajo para separar el sitio web, los apuntes, el material ajeno y el código de
prácticas, y para dejar los repositorios de `Ismael-Sallami` en condiciones de servir como
portfolio.

> **Estado: las siete fases están cerradas.** La última fue la 6, el 2026-08-16, con
> las 26 asignaturas de primero y segundo escritas. Lo que queda de contenido no es
> una fase y está al final de este documento, en
> [Después de la reorganización](#después-de-la-reorganización).
>
> Seguimiento en GitHub: milestone [Reorganización 2026](https://github.com/ElblogdeIsmael/ElblogdeIsmael.github.io/milestone/1)
> e issue paraguas [#10](https://github.com/ElblogdeIsmael/ElblogdeIsmael.github.io/issues/10).

## Por qué

`ElblogdeIsmael/ElblogdeIsmael.github.io` hace hoy cuatro trabajos a la vez: sitio web,
archivo de apuntes propios, almacén de material ajeno pesado y repositorio de código de
prácticas. Medido el 26 de julio de 2026:

| Métrica | Valor |
| --- | --- |
| Tamaño en GitHub | **1,38 GB** (`size: 1415669 KB`) |
| `.git` local / copia de trabajo | 1,4 GB / 3,3 GB |
| Clon local | 1, en `workspace_ssd/`. `Escritorio/GitHub` es un symlink al mismo sitio |
| Ficheros versionados bajo `Subjects/` | 2.798 |
| De esos, enlazados por el sitio | **137 (4,9 %)** |
| Peso versionado bajo `Subjects/` | ~1,63 GB |
| Peso de lo enlazado | ~256 MB |
| Asignaturas / enlaces en las páginas de curso | 59 / 172 |
| Enlaces del sitio entero (`npm run check`) | 174 (130 locales, 44 externos) |
| ZIPs versionados | 45 |
| Claves SSH privadas públicas | **12** |

El CI ya convive con el problema: `.github/prune-pages.py` elimina del artefacto todo
fichero de 1 MB o más que ningún HTML referencie, para caber en el límite de 1 GB de
GitHub Pages.

## Fases

| Fase | Qué hace | Destructiva | Estado |
| --- | --- | --- | --- |
| [0 — Seguridad](fase-0-seguridad.md) | Saca del índice las 12 claves SSH privadas; abre issues y milestone | no | **hecha** |
| [1 — Código](fase-1-codigo.md) | Extrae el código de prácticas a repos propios; renombra, fusiona y archiva | no | **hecha** (PR #15 a #19) |
| [2 — Contenido](fase-2-contenido.md) | Versiona lo que falta; estructura canónica; inventaría el material ajeno | no en su primera pasada | **hecha y mergeada** (PR #22). Mover el material ajeno espera a la fase 3 |
| [3 — Historial](fase-3-historial.md) | `git filter-repo` para purgar el material ajeno del historial | **sí, reescribe historial** | **hecha** el 2026-08-01: 1,34 GiB → 442,78 MiB, 255 commits intactos |
| [4 — Plantillas](fase-4-plantillas.md) | Arregla la plantilla compartida y pasa los tests a md2html. La migración de tercero se descartó ([D-15](DECISIONES.md)) | no | **cerrada** el 2026-08-02. 34 tests con fuente Markdown, más la plantilla de asignatura y el arreglo que encargaba la [D-12](DECISIONES.md) |
| [5 — Indexado](fase-5-indexado.md) | Enlaza los repos nuevos y arregla lo no indexado. La sección Proyectos se retiró ([D-13](DECISIONES.md)) | no | **cerrada** el 2026-08-02 (PR #24 y cierre posterior). Cero enlaces al propio repo, y 37 PDF del profesorado retirados |
| [6 — Contenido pendiente](fase-6-contenido-pendiente.md) | Apuntes de las 26 asignaturas de 1º y 2º. Tercero salió el 2026-08-02 ([D-15](DECISIONES.md)) | no | **cerrada** el 2026-08-16. **26 de 26**: la primera tanda escribió siete asignaturas el 2026-08-14 y la segunda las diecinueve restantes, 895 páginas |

Orden obligatorio: **0 → 1 → 2 → 3**. Las cuatro están hechas desde el 2026-08-01. **Las
fases 4 y 5 se cerraron del todo el 2026-08-02**, y **la 6 el 2026-08-16**, con las 26
asignaturas de primero y segundo escritas. **Las siete fases están cerradas.**

Aviso para quien retome la 6: **los documentos de fase envejecen, y ya han fallado tres
veces**. El de la fase 5 daba por pendientes cosas ya hechas, citaba un repositorio con su
nombre viejo y su fragmento de código no compilaba. El de la fase 4 contaba 26 tests cuando
eran 34, decía dos dialectos cuando eran cinco, y su solución para las rutas fijas
—`--resource-path`— **no funciona**, porque esas rutas las resuelve LaTeX y no pandoc. Y al
cerrar las dos el 2026-08-02 resultó que sus «cuatro tests en dialecto viejo» eran otra
cosa, que el «mismo test tres veces» de ISE eran dos duplicados y dos ficheros con 264
preguntas propias, y que la fase 4 nunca hizo el arreglo que le encargaba la D-12.
Comprobar el estado antes de ejecutar, no fiarse del texto.

La fase 3 va después de la 1 y la 2 porque reescribe el historial: si se ejecuta antes, hay
que volver a hacerlo cuando se borre lo que aquellas dos mueven.

## Documentos de referencia

| Fichero | Contenido |
| --- | --- |
| [REGLAS.md](REGLAS.md) | Las 11 reglas de trabajo. Se aplican en todas las fases |
| [DECISIONES.md](DECISIONES.md) | Qué se decidió, qué se descartó y por qué |
| [ESTANDAR-REPOS.md](ESTANDAR-REPOS.md) | Plantilla de README y estructura interna obligatoria |

## Vocabulario del sitio

El generador recorre cinco niveles definidos en `content/types.d.ts`. Los nombres del
código están en inglés; su equivalente en estos documentos:

| Código | Aquí se llama | Ejemplo |
| --- | --- | --- |
| `Section` | área | «Doble Grado», «Herramientas» |
| `Page` | página | «Cuarto Curso» |
| `Group` | bloque | «Primer Semestre» |
| `Entry` | **ficha de asignatura** | la tarjeta «PDOO» |
| `Block` | apartado | «Exámenes», «Resúmenes» |
| `Resource` | enlace | «Tema 3 — PDF» |

## Objetivos medibles

Estado al cerrar la auditoría de PDF, el 2026-08-09:

| Objetivo | Estado |
| --- | --- |
| `size-pack` por debajo de 300 MB | **no**, sigue en 418,77 MiB, y ya no es culpa de nadie de fuera: el ticket [#4622497](https://github.com/ElblogdeIsmael/ElblogdeIsmael.github.io) se cerró el 2026-08-11, Support borró las 15 `refs/pull`, pasó el `gc` y limpió la caché, **y el peso no se movió ni un byte**. Lo sostiene el contenido: 443 MB del historial son PDF, y **358 MB están en rutas que ya no existen en `HEAD`** —material que las fases 2 y 5 borraron del árbol y sigue pesando en el historial—. Las rutas vivas suman 257 MB. Bajar de 300 MB es posible, pero exige una tercera pasada de `filter-repo`; ver el aviso de la [fase 6](fase-6-contenido-pendiente.md) |
| 0 claves privadas versionadas o en el historial | sí, verificado en la fase 3 sobre 7.801 objetos |
| 0 ficheros de terceros con copyright | sí, y desde el 2026-08-09 también **dentro de las fuentes**: hasta entonces los barridos solo miraban PDF, y EM publicaba 446 líneas de prosa de manual escritas en un `.tex`, con marca de agua de descarga incluida. Reescrito con bibliografía. El inventario no tiene ya ninguna entrada sin clasificar: 78 `PROPIO` y 125 `RETIRADO`. La auditoría del 2026-08-09 sacó 51 más, 39 de ellos escondidos en la clase `PROPIO` porque los metadatos no distinguen un Beamer del profesorado de un documento propio. El único que salía en el barrido de control final, `ExamenesAnteriores.pdf`, resultó ser un falso positivo |
| 0 datos personales en el árbol | sí desde el 2026-08-08: el DNI salía en seis cabeceras de código y en dos PDF, uno de ellos publicado |
| 0 enlaces `tree/main` al propio repo en `content/` | sí |
| Todo enlace local de `content/` existe y está versionado | sí, `npm run check` en verde |
| Los repos activos de `Ismael-Sallami` cumplen [ESTANDAR-REPOS.md](ESTANDAR-REPOS.md) | sí, los diecisiete |
| Una sola generación de plantilla LaTeX y una sola de tests HTML | sí, y desde el 2026-08-02 hay plantilla de asignatura en `Subjects/_template/` |
| Todo documento LaTeX del árbol se reconstruye | sí desde el 2026-08-09: **104 de 104, y desde un clon limpio**. Se comprueba con `node build/scripts/check-latex-builds.mjs --check`, que compila fuera del repositorio y avisa también de los que salen con un capítulo de menos sin fallar |

## Cómo se trabaja

```bash
git switch -c reorg/fase-N-nombre     # una rama por fase
# … trabajo …
npm run check                          # obligatorio antes de la PR
gh pr create --fill                    # checklist de la fase en la descripción
```

Si se ha tocado un `.tex`, antes de la PR también:

```bash
node build/scripts/check-latex-builds.mjs --check   # los 104, unos 8 min
node build/scripts/check-latex-builds.mjs --only FBD  # solo lo que has tocado
```

No está en el CI: compilar cien documentos LaTeX en cada push no cabe en un runner.

Al cerrar una fase: marcar su checklist, cerrar su issue y actualizar la columna «Estado»
de la tabla de arriba.

**Las casillas `- [ ]` que quedan en los documentos de fase no son trabajo pendiente.**
Son los pasos del procedimiento de fases ya cerradas, y se conservan porque describen
cómo se hizo. El estado real de cada fase está en la tabla de arriba, no en sus
casillas.

## Después de la reorganización

Terminada la fase 6, el sitio publica material propio de las 26 asignaturas de primero
y segundo, de las 13 de tercero y de las 11 de cuarto. **Lo que sigue faltando es
contenido, no estructura**, así que no hay fase nueva: se escribe asignatura a
asignatura con el patrón de la fase 6 —`Subjects/_template`, un capítulo por tema de la
guía docente, bibliografía de la guía citada donde el texto se apoya en ella— con un
commit y una ficha por asignatura.

Comprobado ficha a ficha el 2026-08-16:

| Asignatura | Lo que hay | Lo que falta |
| --- | --- | --- |
| **OE** · Organización de Empresas (4º) | el informe de CaixaBank y tres tests | el temario entero: `Subjects/Fourth/OE/` solo tiene `practicas/` y `test/` |
| **MH** · Metaheurísticas (4º) | nada propio en la ficha; el código está en el repositorio `metaheuristics` | el temario, y enlazar ese repositorio desde la ficha |
| **ECO** · Econometría (3º) | prácticas y formulario | el temario |
| **FR** · Fundamentos de Redes (3º) | resúmenes de los temas 1 a 5, preguntas resueltas y tres tests | un temario de teoría |
| **CF1** · Contabilidad Financiera I (3º) | teoría de los temas 1 a 3, resúmenes de los seis, ejercicios de los temas 2 a 6 y nueve tests | la teoría de los temas 4, 5 y 6 |

Dos avisos, que salen de lo aprendido en las fases 5 y 6:

- **Los `Teoria.tex` de FR y de ECO no son borradores.** Son el cascarón que quedó al
  retirar el material del profesorado que envolvían: el de ECO tiene una sola sección,
  «Referencias», y el de FR dos, «Teoria» y «Fuente». Un documento que se queda en
  portada e índice se borra; antes de reutilizarlo, mirar su `.fls` (`grep INPUT`)
  para ver qué incluía de verdad.
- **CF1 es media asignatura, no una entera.** Los temas 1 a 3 ya están publicados y
  hay que continuar su formato.

**Quinto queda fuera**: sus siete fichas están vacías a propósito y `Subjects/Fifth/`
no tiene ni un fichero, porque es un curso que todavía no se ha cursado.

@author Ismael Sallami Moreno
