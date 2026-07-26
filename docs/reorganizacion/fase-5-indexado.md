# Fase 5 — Indexado

**Duración estimada:** 1–2 sesiones · **Destructiva:** no ·
**Rama:** `reorg/fase-5-indexado`

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

- [ ] Sustituir los siete primeros por el repositorio correspondiente.
- [ ] Los tres enlaces de PDOO se convierten en un único bloque «Código» con un enlace a
      `irrgarten`, en lugar de tres enlaces a subcarpetas.
- [ ] Los dos de FIS: si son PDF, enlazarlos directos; si son `.md`, usar
      `/viewer/?file=…`. Nunca una ruta relativa a un `.md`.
- [ ] El de DAE apunta a material que se movió en la fase 2: se retira el enlace.
- [ ] Actualizar también los enlaces a repos renombrados
      (`AA-practices` → `machine-learning-practices`, `MH-Practices` → `metaheuristics`,
      `DDSI` → `oracle-dbms-project`, `TDA-Imagen` → `image-adt`,
      `Air-lines-Project` → `airline-routes-adt`,
      `ModeloEconometrico` → `econometric-model`, `Practica2_IA` → `rescue-agents`).
      GitHub redirige igualmente, pero el enlace correcto es el nuevo.

- [ ] Comprobar que no queda ninguno:

  ```bash
  grep -rn 'ElblogdeIsmael.github.io/tree/main\|ElblogdeIsmael.github.io/blob/main' content/
  # no debe devolver nada
  ```

---

## Parte B · Enlazar lo que existe y no aparece

Repositorios que ya existen y la web ignora:

- [ ] **`concurrency-mpi`** → ficha SCD de tercero, bloque «Código».
- [ ] **`software-engineering-practices`** (antes `FIS`) → ficha FIS de tercero.
- [ ] **`3-Partition-NP-Completeness`** → ficha MC o MAC de cuarto (es una demostración de
      NP-completitud; encaja en Modelos de Computación).
- [ ] **`oracle-dbms-project`** (antes `DDSI`) → ficha DDSI de cuarto, que hoy tiene **cero
      enlaces** pese a haber contenido.
- [ ] **`oracle-plsql-lab`** → ficha FBD de tercero.
- [ ] **`godot-graphics-exercises`** → ficha IG de cuarto.
- [ ] **`parcheesi-game`** → confirmar la asignatura en la fase 1 y colocarlo en su ficha.

Contenido del blog que existe y no se enlaza:

- [ ] **DRH1**: bloque «Temario» con `DRH1.pdf` y las actividades. Hoy solo se enlazan los
      6 tests.
- [ ] **OE**: bloque «Temario». Hoy solo 3 tests.
- [ ] **DDSI**: sus 11 ficheros versionados no tienen ni un enlace.

---

## Parte C · Sección Proyectos

Los proyectos personales no tienen hoy ningún sitio en la web. El modelo lo soporta sin
tocar plantillas: una sección nueva se registra y ya.

- [ ] Copiar la plantilla:

  ```bash
  cp -r content/sections/_template content/sections/proyectos
  ```

- [ ] Registrar en `content/registry.mjs`:

  ```js
  import proyectos from "./sections/proyectos/section.mjs";
  export const SECTIONS = [dobleGrado, proyectos, herramientas];
  ```

- [ ] Estructura propuesta — un bloque por área, una ficha por proyecto:

  | Bloque | Fichas |
  | --- | --- |
  | Algoritmia | `algorithms-and-patterns`, `3-Partition-NP-Completeness`, `neetcode-submissions` |
  | Sistemas e infraestructura | `ansible-infra-lab`, `Arch_Configuration` |
  | Datos e IA | `rescue-agents`, `machine-learning-practices`, `econometric-model` |
  | Aplicaciones | `personal-finance-manager`, `media-manager` |
  | Aprendizaje | `early-courses` |

- [ ] Cada ficha: nombre, una frase de qué hace y enlace al repo con `kind: "WEB"`.
- [ ] Ajustar `index` de las secciones para que el orden en la home sea el que quieras.
- [ ] **No incluir `gestor-finanzas`** ([regla 10](REGLAS.md#10-no-se-toca-mifos-ni-gestor-finanzas)).

---

## Parte D · Herramientas

`content/sections/herramientas/section.mjs` lista `/md2html/` y `/pdf2md/`, pero no dice
dónde está su código.

- [ ] Añadir dos enlaces más: `Ismael-Sallami/md2html-testGenerator` y
      `Ismael-Sallami/pdf-to-md`, etiquetados como código fuente.
- [ ] Actualizar `summary` si cambia el número de elementos.
- [ ] El visor (`/viewer/`) sigue sin listarse, a propósito: se usa desde ocho recursos de
      tercero y cuarto, pero no se ofrece suelto. Mantener el comentario que ya lo explica.

---

## Parte E · Regenerar

- [ ] `npm run build`.
- [ ] `npm run check`.
- [ ] Revisar el diff del HTML generado: debe cambiar solo lo esperado.
- [ ] `npm run dev` y recorrer a mano la home, las cinco páginas de curso, Proyectos y
      Herramientas.

---

## Criterio de hecho

- Cero enlaces `tree/main` o `blob/main` al repositorio del sitio en `content/`.
- Todos los repos con contenido académico están enlazados desde su ficha.
- DRH1, OE y DDSI muestran su temario.
- La sección Proyectos existe y aparece en la home.
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
