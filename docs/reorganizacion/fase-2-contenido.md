# Fase 2 — Contenido del blog

**Duración estimada:** 2–3 sesiones · **Destructiva:** sí (borra material del blog, tras
copiarlo) · **Rama:** `reorg/fase-2-contenido`

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
- [ ] **PDF de `build/` que faltan**: CG (11 de 24), DO-1, EM, IG, MC. La regla
      `!Subjects/**/build/*.pdf` del `.gitignore` ya los permite; simplemente no se
      añadieron.

  ```bash
  git add -f Subjects/Fourth/*/build/*.pdf
  ```

- [ ] Comprobar que ningún enlace de `content/` apunta a algo no versionado:

  ```bash
  grep -rhoE 'href: "/[^"]*"' content/ | sed 's/href: "\///;s/"$//;s|^viewer/?file=||' \
    | while IFS= read -r f; do
        [ -e "$f" ] || echo "NO EXISTE: $f"
        [ -e "$f" ] && ! git ls-files --error-unmatch "$f" >/dev/null 2>&1 && echo "SIN VERSIONAR: $f"
      done
  ```

---

## Parte D · Estructura canónica

Aplicar a las 14 asignaturas de cuarto y las 13 de tercero la estructura que ya usan CG,
DO-1, EM, IG, MC y DDSI:

```
Subjects/<Curso>/<CODIGO>/
├── src/            00_portada.md, 01_*.md …
├── build/          PDF publicados (versionados; el resto ignorado)
├── test/           *.md (fuente) + *.html (generado con md2html)
├── media/          imágenes
├── Makefile        pandoc → latexmk
└── referencias.bib
```

- [ ] Fusionar los duplicados: `AEF_pandoc` → `AEF`, `MAC_pandoc` → `MAC`. Hoy hay dos
      árboles por asignatura y **ninguno de los dos tiene el PDF versionado**, así que el
      temario no llega a la web por partida doble.
- [ ] Renombrar `Subjects/Fourth/MAC_pandoc/NOMBRE_ASIGNATURA.pdf` → `MAC.pdf` y el `.tex`
      correspondiente. Es la plantilla que se quedó sin renombrar.
- [ ] Ajustar `PROJECT` en el `Makefile` de esas asignaturas.
- [ ] Actualizar los enlaces de `content/sections/doble-grado/pages/cuarto.mjs` que apuntan
      a `AEF_pandoc/` y `MAC_pandoc/`.
- [ ] `npm run build` tras cada cambio de rutas.

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
