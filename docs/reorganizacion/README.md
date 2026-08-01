# Reorganización del repositorio

Plan de trabajo para separar el sitio web, los apuntes, el material ajeno y el código de
prácticas, y para dejar los repositorios de `Ismael-Sallami` en condiciones de servir como
portfolio.

> **Estado:** fase 0 hecha, fase 1 en curso (los 4 repos nuevos publicados).
> Las demás arrancan con una aprobación explícita cada una.
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
| [4 — Plantillas](fase-4-plantillas.md) | Unifica LaTeX en la generación pandoc y los tests en md2html | no | pendiente |
| [5 — Indexado](fase-5-indexado.md) | Enlaza los repos nuevos y arregla lo no indexado. La sección Proyectos se retiró ([D-13](DECISIONES.md)) | no | **hecha** el 2026-08-01 (PR #24). Cero enlaces al propio repo, 186 recursos |
| [6 — Contenido pendiente](fase-6-contenido-pendiente.md) | Apuntes de las 26 asignaturas de 1º y 2º, y conversión de las 13 de 3º | no | continua |

Orden obligatorio: **0 → 1 → 2 → 3**. **Las cuatro están hechas desde el 2026-08-01**, y ese
mismo día se cerró también la 5. Quedan la **4** y la **6**, independientes entre sí.

Aviso para quien retome cualquiera de las dos: **los documentos de fase envejecen**. El de
la fase 5 daba por pendientes cosas ya hechas, citaba un repositorio con su nombre viejo y
su fragmento de código no compilaba. Comprobar el estado antes de ejecutar, no fiarse del
texto.

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

Al terminar la fase 5:

- `git count-objects -vH` → `size-pack` **por debajo de 300 MB**.
- **0** claves privadas versionadas o en el historial.
- **0** ficheros de terceros con copyright en el repo público.
- **0** enlaces `github.com/ElblogdeIsmael/ElblogdeIsmael.github.io/tree/main/...` en
  `content/`.
- Todo enlace local de `content/` existe en disco **y** está versionado.
- Todos los repos activos de `Ismael-Sallami` cumplen [ESTANDAR-REPOS.md](ESTANDAR-REPOS.md).
- Una sola generación de plantilla LaTeX y una sola de tests HTML.

## Cómo se trabaja

```bash
git switch -c reorg/fase-N-nombre     # una rama por fase
# … trabajo …
npm run check                          # obligatorio antes de la PR
gh pr create --fill                    # checklist de la fase en la descripción
```

Al cerrar una fase: marcar su checklist, cerrar su issue y actualizar la columna «Estado»
de la tabla de arriba.

@author Ismael Sallami Moreno
