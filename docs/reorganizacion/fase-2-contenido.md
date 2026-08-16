# Fase 2 — Contenido del blog

**Duración estimada:** 2–3 sesiones · **Destructiva:** sí (borra material del blog, tras
copiarlo) · **Rama:** `reorg/fase-2-contenido`

---

## Estado: cerrada

**La pasada del 2026-07-31** hizo la parte C, la parte D de cuarto y las prácticas de
grupo. **La parte A y la B —mover el material ajeno— se hicieron después**, y no como
las describía este documento: el material fue a copia local en `~/backups/`, y quien
bajó el peso de verdad fue la [fase 3](fase-3-historial.md) reescribiendo el historial,
porque **`git rm` no baja ni un byte del `size-pack`**. El inventario que se usó está
en `.inventario-material-ajeno.txt`: **217 ficheros, 972 MB**.

Las retiradas siguieron hasta el 2026-08-09, ya desde la
[fase 6](fase-6-contenido-pendiente.md), al descubrirse que la clasificación por
metadatos había dejado 39 ficheros del profesorado en la clase «propio».

**Las casillas sin marcar de más abajo son el procedimiento que este documento
proponía, no trabajo pendiente.** Se conservan porque describen el plan original y
en qué se equivocaba.

Decisiones tomadas en esa pasada:

- El material ajeno irá a **copia local**, no al repositorio privado `apuntes-material`
  que proponía la parte A. Son 1,5 GB con libros comerciales dentro.
- **Tercero sale de esta fase.** Ninguna de sus 13 asignaturas sigue la estructura
  canónica y su material es PDF, no markdown: convertirlo es migrar contenido, que es el
  trabajo de la [fase 6](fase-6-contenido-pendiente.md). Las 13 quedaron meses sin
  checklist porque aquel documento solo cubría primero y segundo; están escritas ahí desde
  el 2026-08-01, en «[Tercero — 13 asignaturas](fase-6-contenido-pendiente.md#tercero--13-asignaturas)».

### Lo que estaba mal en este documento

1. **`git add -f Subjects/Fourth/*/build/*.pdf` habría publicado menos.** CG, DO-1, EM,
   IG y MC guardan su contenido en `src/tex/*.tex`, que `TEX/<ASIG>.tex` incluye con
   `\input`; el `Makefile` hace `glob src/*.md` y nunca los ve. El PDF de LaTeX es más
   completo en los cuatro casos que compilan (CG 46/33, DO-1 57/43, EM 69/54, MC
   103/61), y `DO-1/src/` son nueve líneas de markdown detrás de un documento de 57
   páginas. **El flujo canónico de esas cinco es el LaTeX**, y unificarlo con el pandoc
   es trabajo de la [fase 4](fase-4-plantillas.md).
2. **`AEF` no era un duplicado sino un esqueleto**: sus secciones tenían una línea. El
   contenido estaba en `AEF_pandoc`. Solo una pregunta corta vivía únicamente en el
   `primor.tex` viejo.
3. **`MAC` era al revés**: `src/01_Teoria.md` y `src/02_Practicas.md` eran el texto de la
   plantilla sin rellenar («Este es un ejemplo de contenido de teoría»), versionados, y
   el PDF publicado eran 11 páginas de relleno mientras 2.871 líneas de trabajo real
   estaban sin versionar bajo `Practicas/` y `TEX/`.
4. **`extraFiles/` y `htmlFiles/` no son residuo.** `extraFiles/preambulos_oficiales/` es
   la plantilla LaTeX que comparten 8 Makefile y una veintena de `.tex`, y
   `htmlFiles/history.html` es un stub de redirección vivo a `/historia.html`. La nota de
   que «nada del generador los enlaza» es cierta pero engañosa: los Makefile sí.
5. **`OE` no tiene temario, pero sí prácticas.** Están en repos privados de la
   organización `InfoBoys`, igual que las de EE y DRH1.

---

## Objetivo

Dejar en el blog **solo lo que el sitio publica**: apuntes propios en fuente y PDF.
Todo lo demás —libros de terceros, diapositivas oficiales, ZIPs de material bruto— se va a
un repositorio privado. Y versionar lo que existe en disco, la web enlaza y no está subido.

## Precondiciones

- [Fase 1](fase-1-codigo.md) cerrada: el código ya tiene su repo propio.
- Etiqueta de respaldo:

  ```bash
  git tag backup/pre-fase-2 && git push origin backup/pre-fase-2
  ```

---

## El problema

**2.674 de los 2.798 ficheros versionados bajo `Subjects/` no los enlaza nadie.** Peso no
referenciado por asignatura:

| Asignatura | No referenciado | Asignatura | No referenciado |
| --- | --- | --- | --- |
| Third/CF1 | 370,1 MB | Third/ISE | 44,6 MB |
| Third/CF2 | 159,5 MB | Third/FR | 43,3 MB |
| Third/FBD | 137,0 MB | Fourth/CG | 31,0 MB |
| Third/PDOO | 130,9 MB | Third/SCD | 22,7 MB |
| Third/DAE | 108,8 MB | Third/FIS | 18,4 MB |
| Third/IA | 98,6 MB | Third/AOF | 14,2 MB |
| Fourth/IG | 95,1 MB | Third/ECO | 13,0 MB |

Además, parte de ese material es de terceros y está redistribuido desde un repositorio
público: libros comerciales, apuntes de Wuolah y diapositivas oficiales de asignatura.

Y al mismo tiempo pasa lo contrario en cuarto: hay apuntes propios **en disco que no están
versionados**, así que la web los enlaza y dan 404 o directamente no se enlazan.

---

## Parte A · Crear `apuntes-material`

- [ ] Crear el repositorio, **privado**.

  ```bash
  gh repo create Ismael-Sallami/apuntes-material --private \
    --description "Material de apoyo de las asignaturas: libros, diapositivas y ZIPs. Uso personal."
  ```

- [ ] Estructura espejo de `Subjects/`, para poder encontrar las cosas:

  ```
  apuntes-material/
  ├── README.md          qué es esto y por qué es privado
  ├── Third/CF1/ CF2/ FBD/ PDOO/ DAE/ IA/ ISE/ FR/ SCD/ FIS/ AOF/ ECO/
  └── Fourth/IG/ CG/ EM/ …
  ```

- [ ] README dejando claro que es material de terceros para uso personal y que por eso el
      repositorio es privado.

## Parte B · Mover el material

**Orden obligatorio: copiar → verificar → borrar.** Nunca al revés
([regla 5](REGLAS.md#5-nada-se-borra-sin-haberse-movido-antes)).

### B.1 · Libros y material de terceros

- [ ] Copiar a `apuntes-material`:

  | Fichero | Peso |
  | --- | --- |
  | `Subjects/Third/CF1/Teoria/FCCEE/Libro.pdf` | 78 MB |
  | `Subjects/Third/CF1/OTROS/teoria/Libro Teoría.pdf` | 78 MB |
  | `Subjects/Third/CF1/OTROS/practicas/casosTema1al3/Ejercicios tema 1al 3.pdf` | 66 MB |
  | `Subjects/Third/CF1/Practica/FCCEE/Libro.pdf` | 35 MB |
  | `Subjects/Third/CF1/OTROS/teoria/Libro Practicas.pdf` | 35 MB |
  | `Subjects/Third/CF2/Teoria/Libro/*.pdf` | ~103 MB |
  | `Subjects/Third/CF2/Practica/Libro/*.pdf` | ~48 MB |
  | `Subjects/Fourth/IG/MATERIAL/computer_graphics_principles_and_practice.pdf` | 20 MB |
  | `Subjects/Fourth/CG/MATERIAL/libro-conta.pdf` | — |

- [ ] Los 7 ficheros de Wuolah:

  ```bash
  git ls-files -z Subjects | tr '\0' '\n' | grep -i wuolah
  ```

  Ojo: `Subjects/Fourth/OE/test/test-wuolah.{html,md}` **no se mueve** — es un test tuyo
  hecho con md2html a partir de ese material, y la web lo enlaza. Solo se mueve el PDF
  original si existe.

- [ ] Diapositivas oficiales de asignatura:
      `Subjects/Fourth/IG/MATERIAL/ig-s*.pdf` (24 + 20 MB),
      `Subjects/Third/PDOO/Teoria/Diapositivas/` (22 MB solo el `t2.pdf`),
      `Subjects/Third/IA/Material/`, `Subjects/Third/FBD/Material/`.

- [ ] `Subjects/Third/DAE/` casi entera (108,8 MB no referenciados, incluidos
      `mapa_conceptual.pdf` de 51 MB y `Documentos_1.zip` de 18 MB).

### B.2 · ZIPs de material bruto

- [ ] Listar los 45 y decidir uno a uno:

  ```bash
  git ls-files -z Subjects | tr '\0' '\n' | grep '\.zip$'
  ```

  Criterio: si es material descargado de la asignatura → `apuntes-material`. Si es una
  entrega propia → se descomprime y se queda su contenido, o va como adjunto de una release
  del repo correspondiente.

### B.3 · Verificar y borrar

- [ ] Confirmar que todo está arriba antes de tocar el blog:

  ```bash
  gh api repos/Ismael-Sallami/apuntes-material/git/trees/HEAD?recursive=1 \
    --jq '.tree[] | select(.type=="blob") | .path' | wc -l
  ```

- [ ] Borrar del blog con `git rm` (aquí sí, no `--cached`: el fichero ya está a salvo).
- [ ] Anotar las rutas borradas para la purga de historial de la
      [fase 3](fase-3-historial.md):

  ```bash
  git show HEAD --name-only --diff-filter=D --pretty=format: \
    >> docs/reorganizacion/.rutas-a-purgar.txt
  ```

---

## Parte C · Versionar lo que falta

Contenido que **existe en disco y no está en git**. Es lo contrario del problema anterior y
es lo que hace que la web tenga huecos.

### Estado medido de cuarto curso

| Asignatura | Ficheros en disco | Versionados | PDF versionado | Enlaces en la web |
| --- | --- | --- | --- | --- |
| AEF | 20 | **0** | no | 0 |
| AEF_pandoc | 21 | 3 | **no** | 3 |
| MAC | 29 | **0** | no | 0 |
| MAC_pandoc | 20 | 3 | **no** | 3 |
| DRH1 | 40 | 12 (solo tests) | **no** | 6 |
| DDSI | 18 | 11 | no | **0** |
| CG | 63 | 50 | 13 de 24 | 2 |
| OE | 6 | 6 | — | 3 |
| DO-1 | 32 | 20 | 1 de 2 | 2 |
| EM | 265 | 76 | 21 de 22 | 3 |
| IG | 117 | 97 | 9 de 10 | 1 |
| MC | 37 | 19 | 1 de 2 | 1 |
| AA | 21 | 7 | 1 de 1 | 2 |
| EE | 34 | 20 | 1 de 1 | 2 |

- [ ] **DRH1**: versionar `DRH1.pdf`, `DRH1.tex`, `src/`, `Actividades/`, `Makefile`,
      `referencias.bib`. Hoy solo están los 6 tests: el temario completo ni sube ni se
      indexa. Es el caso más claro.
- [ ] **OE**: versionar y preparar el temario; hoy solo hay 3 tests.
- [ ] **DDSI**: 11 ficheros versionados y **cero enlaces** en la web. Versionar el PDF y
      dejarlo listo para enlazar en la [fase 5](fase-5-indexado.md).
- [x] **DRH1**: hecho. Su `Makefile` además apuntaba a `../preambulos_oficiales/`, que no
      existe; como el flag va protegido por `$(wildcard ...)`, pandoc corría sin plantilla
      y producía 11 páginas planas en vez del libro. Con la ruta arreglada, 47 páginas.
- [x] **DDSI**: hecho. `src/01_Teoria` y `src/02_practica` habían perdido la extensión
      `.md`, así que el glob no los cogía y las prácticas no entraban en el PDF. 21 → 24
      páginas.
- [x] **CG**: no tenía ningún PDF versionado. Publicadas sus 46 páginas.
- [ ] **OE**: no hay temario en disco. Pasa a la [fase 6](fase-6-contenido-pendiente.md).
      Sus prácticas sí se publicaron, ver más abajo.
- [x] ~~`git add -f Subjects/Fourth/*/build/*.pdf`~~ **No hacerlo.** Publicaría menos que
      lo que la web ya sirve: ver el punto 1 del estado, arriba.

- [ ] Comprobar que ningún enlace de `content/` apunta a algo no versionado:

  ```bash
  grep -rhoE 'href: "/[^"]*"' content/ | sed 's/href: "\///;s/"$//;s|^viewer/?file=||' \
    | while IFS= read -r f; do
        [ -e "$f" ] || echo "NO EXISTE: $f"
        [ -e "$f" ] && ! git ls-files --error-unmatch "$f" >/dev/null 2>&1 && echo "SIN VERSIONAR: $f"
      done
  ```

---

## Parte C bis · Las prácticas que estaban en repos de la organización

Hecho el 2026-07-31. Tres asignaturas tenían su trabajo de grupo en repositorios
**privados** de `InfoBoys`, y el blog no los enlazaba. Enlazar el repositorio habría dado
un 404 a cualquiera de fuera del equipo, así que **se copió solo el PDF final**. Los
repositorios no se tocaron y siguen privados.

| Repo | Asignatura | Qué se publicó |
| --- | --- | --- |
| `OrganizacionCaixaBank` | OE | `OE.pdf`, 42 páginas |
| `Spanish-Economy` | EE | compilado de `main.tex`, 46 páginas |
| `RecursosHumanosCaixaBank` | DRH1 | `portafoliofinal.tex`, 120 páginas |

Detalles que costaron tiempo:

- **Solo OE traía el PDF compilado.** `Spanish-Economy` solo tiene fuentes, y el
  `capitulos.pdf` de `RecursosHumanosCaixaBank` son 583 bytes sin trailer ni tabla xref:
  no es un PDF válido.
- **DRH1 tiene cuatro documentos raíz**, pero `portafoliofinal.tex` hace `\input` de los
  capítulos de los otros tres más el informe global, la autoevaluación y las entrevistas.
  Ese solo cubre todo.
- **`InfoBoys/SpanishEconomyJJDM` no es de Ismael**: cero commits suyos, es el trabajo del
  otro grupo. Es la trampa 7 otra vez.
- No se copiaron los enunciados del profesorado ni los cuatro PDF de wuolah que hay dentro
  de esos repositorios, ni `TodosLosTemas.pdf`, que produjo iOS Quartz y es un escaneo de
  móvil, no el trabajo del equipo.

## Parte D · Estructura canónica

**Solo las asignaturas de cuarto.** Tercero queda fuera, ver el estado al principio.
Aplicar la estructura que ya usan CG, DO-1, EM, IG, MC y DDSI:

```
Subjects/<Curso>/<CODIGO>/
├── src/            00_portada.md, 01_*.md …
├── build/          PDF publicados (versionados; el resto ignorado)
├── test/           *.md (fuente) + *.html (generado con md2html)
├── media/          imágenes
├── Makefile        pandoc → latexmk
└── referencias.bib
```

- [x] Fusionar los duplicados: `AEF_pandoc` → `AEF` (23 → 40 páginas), `MAC_pandoc` →
      `MAC` (11 → 62). No quedan carpetas `*_pandoc`.
- [x] Renombrar `NOMBRE_ASIGNATURA.{pdf,tex}` → `MAC.{pdf,tex}` y `PROJECT = MAC`. La
      portada de MAC también seguía diciendo «Nombre de la Asignatura».
- [x] Actualizar los enlaces de `cuarto.mjs`, y de paso los siete de `content/` que
      apuntaban a nombres viejos de repositorio y vivían de la redirección de GitHub.
- [x] `npm run build` tras cada cambio de rutas.

**`--listings` fuera en AEF y MAC.** El paquete `listings` lee en verbatim, así que no
pasa por `inputenc`: cualquier acento o símbolo dentro de un fragmento de código aborta la
compilación, y encima señala una línea que no es la culpable. MAC tiene 193 fragmentos
así. Las asignaturas con código de verdad lo conservan.

**Tres arreglos en la plantilla compartida** (`extraFiles/preambulos_oficiales/`), que
faltaban desde siempre y solo salían cuando una asignatura los pisaba:

- `\usepackage{longtable}`: pandoc lo emite para toda tabla de markdown. DRH1 es la única
  asignatura con tablas, por eso el hueco no se había visto.
- `\providecommand{\passthrough}`: pandoc lo usa para el código en línea con `--listings`
  y lo define en el preámbulo que él genera, que con plantilla propia no llega. AA fallaba
  por esto.
- Cuarenta y tantos `\DeclareUnicodeCharacter` con los símbolos que usan los apuntes.

---

## Criterio de hecho

- `apuntes-material` contiene todo el material movido y es privado.
- El blog no contiene libros de terceros, apuntes de Wuolah ni diapositivas oficiales.
- No queda ninguna carpeta `*_pandoc`.
- Todo enlace local de `content/` existe en disco **y** está versionado.
- Las 27 asignaturas de tercero y cuarto siguen la estructura canónica.
- `.rutas-a-purgar.txt` actualizado con lo borrado en esta fase.

## Verificación

```bash
npm run check                                    # 0 enlaces rotos
npm run dev                                      # revisión visual
git ls-files Subjects | wc -l                    # debe bajar mucho de 2.798
git ls-files Subjects | grep -ci 'wuolah\|libro' # 0 en material de terceros
ls Subjects/Fourth | grep -c pandoc              # 0
DRY_RUN=1 python3 .github/prune-pages.py .       # debería podar casi nada ya
```

Abrir la web en local y comprobar a mano las fichas de DRH1, OE y DDSI: son las tres que
hoy tienen contenido invisible.

---

@author Ismael Sallami Moreno
