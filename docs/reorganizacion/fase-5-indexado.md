# Fase 5 — Indexado

**Estado:** **cerrada el 2026-08-02** · **Destructiva:** no ·
**Rama:** `reorg/fase-5-indexado`, cerrada con la PR #24 y el cierre del 2026-08-02

---

## Objetivo

Que la web enlace a los repositorios nuevos en lugar de a rutas `tree/main`, que aparezca lo
que hoy existe y no se ve, y que los proyectos personales tengan por fin un sitio en el
sitio.

Todo el trabajo de esta fase es **datos en `content/`**. No se toca ninguna plantilla ni
ningún CSS: el modelo de `content/types.d.ts` ya da para esto.

## Precondiciones

- [Fase 1](fase-1-codigo.md) cerrada: los repos existen con su nombre definitivo.
- [Fase 2](fase-2-contenido.md) cerrada: el contenido que faltaba ya está versionado.

---

## Parte A · Sustituir los enlaces `tree/main`

Diez enlaces apuntan hoy al navegador de ficheros del propio repositorio del sitio. Llevan a
carpetas sin README dentro de un repo enorme: para quien llega desde la web, no sirven.

| Fichero:línea | Enlace actual (sin el `https://github.com/`) | Destino |
| --- | --- | --- |
| `tercero.mjs:84` | `ElblogdeIsmael/…/PDOO/Practica/Proyecto_Irrgarten/Proyecto_Irrgarten/P5-java` | `Ismael-Sallami/irrgarten` |
| `tercero.mjs:89` | `…/Proyecto_Irrgarten/Proyecto_Irrgarten/P5-Ruby` | `Ismael-Sallami/irrgarten` |
| `tercero.mjs:94` | `…/PDOO/Practica/Proyecto_Irrgarten` | `Ismael-Sallami/irrgarten` |
| `tercero.mjs:348` | `…/SCD/Practicas/Practicas_Resueltas` | `Ismael-Sallami/concurrency-mpi` |
| `tercero.mjs:704` | `…/IA/Practicas/Practicas/Practica1/` | `Ismael-Sallami/rescue-agents` |
| `tercero.mjs:714` | `…/IA/Practicas/Practicas/Practica3/practica3/practica3/` | `Ismael-Sallami/rescue-agents` |
| `tercero.mjs:740` | `…/ISE/Prácticas/EntregaPracticas/` | `Ismael-Sallami/ansible-infra-lab` |
| `tercero.mjs:683` | `…/FIS/Teoria/Ejercicios-Controles/Ejercicios/` | valorar: `/viewer/` o repo |
| `tercero.mjs:688` | `…/FIS/Teoria/Ejercicios-Controles/Controles/` | valorar: `/viewer/` o repo |
| `tercero.mjs:312` | `…/DAE/Dirección y administración de empresas/…` | material: se retira |

- [x] Sustituir los siete primeros por el repositorio correspondiente.
- [x] Los tres enlaces de PDOO se convierten en un único bloque «Código» con un enlace a
      `irrgarten`, en lugar de tres enlaces a subcarpetas.
- [x] Los dos de FIS: si son PDF, enlazarlos directos; si son `.md`, usar
      `/viewer/?file=…`. Nunca una ruta relativa a un `.md`.
- [x] El de DAE apunta a material que se movió en la fase 2: se retira el enlace.
- [x] Actualizar también los enlaces a repos renombrados
      (`AA-practices` → `machine-learning-practices`, `MH-Practices` → `metaheuristics`,
      `DDSI` → `oracle-dbms-project`, `TDA-Imagen` → `image-adt`,
      `Air-lines-Project` → `airline-routes-adt`,
      `ModeloEconometrico` → `econometric-model`, `Practica2_IA` → `rescue-agents`).
      GitHub redirige igualmente, pero el enlace correcto es el nuevo.

- [x] Comprobar que no queda ninguno:

  ```bash
  grep -rn 'ElblogdeIsmael.github.io/tree/main\|ElblogdeIsmael.github.io/blob/main' content/
  # no debe devolver nada
  ```

---

## Parte B · Enlazar lo que existe y no aparece

Repositorios que ya existen y la web ignora:

- [x] **`concurrency-mpi`** → ficha SCD de tercero, bloque «Código».
- [x] **`software-engineering-practices`** (antes `FIS`) → ficha FIS de tercero.
- [x] **`3-Partition-NP-Completeness`** → ficha MC o MAC de cuarto (es una demostración de
      NP-completitud; encaja en Modelos de Computación).
- [x] **`oracle-dbms-project`** (antes `DDSI`) → ficha DDSI de cuarto, que hoy tiene **cero
      enlaces** pese a haber contenido.
- [x] **`oracle-plsql-lab`** → ficha FBD de tercero.
- [x] **`godot-graphics-exercises`** → ficha IG de cuarto.
- [x] **`parcheesi-game`** → confirmar la asignatura en la fase 1 y colocarlo en su ficha.

Contenido del blog que existe y no se enlaza:

- [x] **DRH1**: bloque «Temario» con `DRH1.pdf` y las actividades. Hoy solo se enlazan los
      6 tests.
- [x] **OE**: bloque «Temario». Hoy solo 3 tests.
- [x] **DDSI**: sus 11 ficheros versionados no tienen ni un enlace.

---

## Parte C · Sección Proyectos — retirada

**No se hace.** Decidido el 2026-08-01, [D-13](DECISIONES.md#d-13--no-habrá-sección-proyectos-en-el-blog).

Los once repos que proponía esta parte son un subconjunto de los 27 que ya lista el
portfolio de `ismael-sallami.github.io`, con los mismos enlaces a GitHub y sin ninguna capa
propia encima: sería la misma información en dos sitios que mantener a la vez.

Lo que sí se conserva es la **parte B**, que enlaza cada repositorio desde la ficha de la
asignatura de la que salió. Eso el portfolio no lo hace, así que no duplica nada.

---

## Parte D · Herramientas

`content/sections/tools/section.mjs` lista `/md2html/` y `/pdf2md/`, pero no dice
dónde está su código. Ojo con el nombre: el directorio y el import se llaman **`tools`**,
no `herramientas`, aunque la sección se titule así en la web.

- [x] Añadir dos enlaces más: `Ismael-Sallami/md2html-testGenerator` y
      `Ismael-Sallami/pdf-to-md`, etiquetados como código fuente.
- [x] Actualizar `summary` si cambia el número de elementos.
- [x] El visor (`/viewer/`) sigue sin listarse, a propósito: se usa desde ocho recursos de
      tercero y cuarto, pero no se ofrece suelto. Mantener el comentario que ya lo explica.

---

## Parte E · Regenerar

- [x] `npm run build`.
- [x] `npm run check`.
- [x] Revisar el diff del HTML generado: debe cambiar solo lo esperado.
- [x] `npm run dev` y recorrer a mano la home, las cinco páginas de curso y Herramientas.

---

## Criterio de hecho

- Cero enlaces `tree/main` o `blob/main` al repositorio del sitio en `content/`.
- Todos los repos con contenido académico están enlazados desde su ficha.
- DRH1 y DDSI muestran su temario. OE se queda sin temario por decisión, ver
  [D-14](DECISIONES.md#d-14--tercero-entra-en-la-fase-6-por-escrito).
- Herramientas enlaza el código fuente de las dos apps.
- El número de enlaces sube claramente de los 172 actuales.

## Verificación

```bash
npm run check

grep -rn 'ElblogdeIsmael.github.io/tree/main\|ElblogdeIsmael.github.io/blob/main' content/   # 0
grep -rc 'href:' content/sections/doble-grado/pages/*.mjs | awk -F: '{s+=$2} END {print s}'  # > 172
grep -rh 'code: "' content/sections/doble-grado/pages/*.mjs | wc -l                          # 59

# Todos los enlaces externos responden
grep -rhoE 'https://[^"]+' content/ | sort -u \
  | while read -r u; do printf '%s %s\n' "$(curl -s -o /dev/null -w '%{http_code}' -L "$u")" "$u"; done \
  | grep -v '^200'
```

Manual: abrir la ficha de PDOO en local y comprobar que «Código» lleva a `irrgarten` con su
README, no a un listado de carpetas.

---

@author Ismael Sallami Moreno
