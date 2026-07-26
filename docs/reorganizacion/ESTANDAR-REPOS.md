# Estándar de repositorio

Lo cumple **todo** repositorio activo de `Ismael-Sallami`, sin niveles ni excepciones. Un
repo público mal explicado resta aunque no esté destacado en el perfil.

---

## 1. README

Diez apartados, en este orden. El README es el producto: alguien tiene que entender qué
hiciste y por qué sin abrir un solo fichero de código.

**Se escribe en inglés simple**: frases cortas, vocabulario común, voz activa. Son
repositorios de portfolio y los va a leer gente que no habla español. Por eso la plantilla
de abajo está en inglés aunque este documento esté en español.

### Plantilla

```markdown
# <project-name>

<One sentence on what it does. No jargon, no filler adjectives.>

## Context

Coursework for **<Subject>**, year <N> of the double degree in Computer Science and
Business Administration, University of Granada (<academic year>).
<Solo work | Joint work with …>.

## The problem

<What the assignment asked for, in 3–5 lines. What the constraints were.>

## The solution

<Your approach. The design decisions you made and why that one and not another. If an
algorithm or a data structure does the heavy lifting, name it here. This is the part
people read in an interview.>

## Layout

​```
src/          <what lives here>
docs/         <what lives here>
tests/        <what lives here>
​```

## Requirements

- <Compiler or runtime, exact version>
- <Libraries, with versions>

## Build and run

​```bash
<commands that work as written, from a fresh clone>
​```

## Results

<A diagram, a timing table or sample output. Whatever fits the project.>

## What I learned

- <An honest point>
- <An honest point, including a limitation of what you built>

## Author and licence

Ismael Sallami Moreno. Released under the MIT licence (see `LICENSE`).
```

### Reglas del README

- **Los comandos de «Build and run» funcionan desde un clon limpio.** Se comprueba clonando
  en una carpeta vacía y siguiendo el README a ciegas. Si no compila, el README está mal.
- **«The solution» no es un resumen del enunciado.** Es lo que decidiste tú.
- **«What I learned» incluye al menos una limitación.** Un README que solo se felicita no lo
  lee nadie dos veces.

---

## 1 bis. Badges

Una fila de badges justo debajo del título, antes de la frase de resumen. Obligatoria en
todos los repositorios.

```markdown
# <nombre>

![<lenguaje>](https://img.shields.io/badge/<lenguaje>-<versión>-<color>)
![<framework>](https://img.shields.io/badge/<framework>-<versión>-<color>)
[![build](https://img.shields.io/github/actions/workflow/status/Ismael-Sallami/<repo>/ci.yml?branch=main&logo=github&label=build)](https://github.com/Ismael-Sallami/<repo>/actions/workflows/ci.yml)
![license](https://img.shields.io/badge/license-MIT-4c1)
```

**Los cuatro que van siempre:** lenguaje con su versión, framework con su versión (si lo
hay), estado del CI y licencia.

**Cada badge dice un hecho comprobable.** Un badge es una afirmación pública sobre el
repositorio, no un adorno. Reglas:

- **El de estado tiene que venir de un workflow real.** Nada de
  `badge/build-passing-green` puesto a mano: eso es mentir en la portada. Si no hay CI, se
  añade el CI ([apartado 5](#5-integración-continua)) o no se pone el badge.
- **La etiqueta describe lo que el workflow hace de verdad.** En `irrgarten` pone `build` y
  no `tests`, porque el workflow compila y ejecuta unas comprobaciones que imprimen valores
  sin verificarlos. Poner `tests passing` ahí sería falso.
- **Las versiones son las que se han probado**, las mismas que el apartado «Requirements».
- Nada de badges de estrellas, visitas, «made with love» ni contadores.

Colores: los de la marca del lenguaje (`007396` Java, `CC342D` Ruby, `3776AB` Python,
`009688` FastAPI) y `4c1` verde para la licencia.

---

## 2. Ficheros obligatorios

| Fichero | Contenido |
| --- | --- |
| `README.md` | Los 10 apartados de arriba |
| `LICENSE` | MIT, con «Ismael Sallami Moreno» como titular |
| `.gitignore` | El del lenguaje del proyecto, sin restos de otros |

---

## 3. Estructura interna

```
<repo>/
├── src/          código fuente
├── docs/         memoria, enunciado, diagramas, variantes
├── tests/        pruebas, si las hay
├── assets/       imágenes y diagramas del README, si hacen falta
├── README.md
├── LICENSE
└── <Makefile | CMakeLists.txt | pyproject.toml | …>
```

Adaptable al lenguaje (un proyecto Maven tendrá `src/main/java`), pero **la raíz nunca
contiene el volcado del entregable de clase**.

**Todo lo visible en el repositorio va en inglés**: nombres de carpeta (`docs/diagrams`, no
`docs/diagramas`), README, y el título y el cuerpo de las releases. Es lo que lee quien
abre el repositorio.

### Nada de archivos comprimidos

Un `.zip` en el árbol no se puede navegar, ni buscar, ni diferenciar en GitHub, y casi
siempre esconde material generado. En `irrgarten`, los cuatro zip de las entregas contenían
147 ficheros de Javadoc, `.class` y proyecto de NetBeans, y su código lo reemplazaba `src/`.

Qué hacer con ellos:

1. Abrirlos y rescatar lo que tenga valor propio (memorias, diagramas, enunciados).
2. Adjuntar el archivo original a una **release**, que no forma parte del clon.
3. Purgarlo del historial junto con el resto de material generado.

### Aplanado obligatorio

La anidación heredada de las entregas se aplana siempre. Caso real que hay que arreglar en
la fase 1:

```
Subjects/Third/PDOO/Practica/Proyecto_Irrgarten/Proyecto_Irrgarten/
  SUBIR_A_PRADO_2_PARCIAL_PDOO/VARIOS_DISEÑOS/PROYECTO_SUPER_PLAYER/
  SolucionParcialPracticas2/P5-java/
```

Siete niveles para llegar al código. Queda en:

```
src/java/                     la versión final
src/ruby/                     la versión Ruby
docs/variantes/               los diseños alternativos, explicados en el README
```

Las carpetas con nombres de entrega (`SUBIR_A_PRADO`, `Entrega_Practicas`,
`SolucionParcial…`) desaparecen. Lo que aportan lo cuenta el README.

---

## 4. Metadatos de GitHub

- **Descripción**: una frase, la misma que abre el README.
- **Topics**: `ugr` y `coursework` en los académicos, más lenguaje (`cpp`, `java`,
  `python`) y dominio (`concurrency`, `machine-learning`, `ansible`, `godot`).
- **Release `v1.0`** cuando el proyecto esté cerrado, con la memoria adjunta si existe.
- **Visibilidad**: pública, salvo que contenga material de terceros.

Los topics son lo que sustituye al prefijo `ugr-` en el nombre: agrupan y son buscables,
sin ensuciar la URL. Ver [D-01](DECISIONES.md#d-01--nombres-de-repositorio-sin-prefijo-ugr-).

---

## 5. Build reproducible

Todo repo tiene una forma de compilar y ejecutar en un solo comando: `Makefile`,
`CMakeLists.txt`, script, o el gestor del lenguaje. Nada de «abrir en NetBeans y darle al
play».

### Integración continua

`.github/workflows/ci.yml` en todos. Es lo que hace que el badge de estado signifique algo
y lo que garantiza que el repositorio sigue compilando dentro de dos años.

Mínimo: instalar el toolchain en las versiones que declara el README, compilar, y ejecutar
lo que haya (tests de verdad si los hay; si no, al menos una comprobación de sintaxis).

```yaml
name: build
on:
  push:
    branches: [main]
  pull_request:
  workflow_dispatch:
```

El nombre del workflow es el que sale en el badge, así que se llama por lo que hace:
`build` si solo compila, `tests` si de verdad hay aserciones.

---

## 6. Nombres

Inglés, kebab-case, describe qué es. Ver
[D-01](DECISIONES.md#d-01--nombres-de-repositorio-sin-prefijo-ugr-).

| Bien | Mal |
| --- | --- |
| `irrgarten` | `ugr-pdoo-irrgarten` |
| `concurrency-mpi` | `SCD-Concurrency-MPI` |
| `rescue-agents` | `IA_Practica2` |
| `ansible-infra-lab` | `practica3` |

---

## 7. Lista de verificación por repo

Se copia en la PR o en la issue de cada repo durante la fase 1.

- [ ] README con los 10 apartados, en inglés simple
- [ ] Fila de badges: lenguaje, framework, estado del CI y licencia
- [ ] `.github/workflows/ci.yml` en verde, y la etiqueta del badge describe lo que hace
- [ ] Los comandos del README funcionan desde un clon limpio en una carpeta vacía
- [ ] `LICENSE` MIT
- [ ] `.gitignore` del lenguaje, sin restos
- [ ] Estructura `src/ docs/ tests/ assets/`, sin anidación de entrega
- [ ] Build en un comando
- [ ] Descripción rellena en GitHub
- [ ] Topics: `ugr`, `coursework`, lenguaje, dominio
- [ ] «Results» con algo real: diagrama, tabla de tiempos o salida de ejemplo
- [ ] Release `v1.0`, con título y cuerpo en inglés
- [ ] Sin `.zip` ni material generado en el árbol ni en el historial
- [ ] Sin credenciales, claves ni datos personales de compañeros
- [ ] **Verificado contra el remoto**: `gh api repos/Ismael-Sallami/<repo>/readme` responde,
      y un clon del repositorio publicado compila siguiendo solo su README

---

@author Ismael Sallami Moreno
