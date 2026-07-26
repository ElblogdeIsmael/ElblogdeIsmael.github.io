# Estándar de repositorio

Lo cumple **todo** repositorio activo de `Ismael-Sallami`, sin niveles ni excepciones. Un
repo público mal explicado resta aunque no esté destacado en el perfil.

---

## 1. README

Diez apartados, en este orden. El README es el producto: alguien tiene que entender qué
hiciste y por qué sin abrir un solo fichero de código.

### Plantilla

```markdown
# <nombre-del-proyecto>

<Una frase de qué hace. Sin jerga, sin adjetivos de relleno.>

## Contexto

Práctica de **<Asignatura>**, <N>º curso del Doble Grado en Ingeniería Informática y
Administración y Dirección de Empresas, Universidad de Granada (<curso académico>).
Trabajo <individual | en pareja con …>.

## El problema

<Qué pedía el enunciado, en 3–5 líneas. Qué restricciones había.>

## La solución

<El enfoque. Las decisiones de diseño que tomaste y por qué esa y no otra. Si hay un
algoritmo o una estructura de datos que carga con el peso, se nombra aquí. Es la parte
que se lee en una entrevista.>

## Estructura

​```
src/          <qué hay aquí>
docs/         <qué hay aquí>
tests/        <qué hay aquí>
​```

## Requisitos

- <Compilador o runtime, con versión exacta>
- <Librerías, con versión>

## Compilar y ejecutar

​```bash
<comandos copiables que funcionen tal cual desde un clon limpio>
​```

## Resultados

<Capturas, diagrama, tabla de tiempos o salida de ejemplo. Lo que aplique al proyecto.>

## Aprendizajes

- <Punto honesto>
- <Punto honesto, incluida alguna limitación de lo que hiciste>

## Autoría y licencia

Ismael Sallami Moreno. Publicado bajo licencia MIT (ver `LICENSE`).
```

### Reglas del README

- **Los comandos de «Compilar y ejecutar» funcionan desde un clon limpio.** Se comprueba
  clonando en una carpeta vacía y siguiendo el README a ciegas. Si no compila, el README
  está mal.
- **«La solución» no es un resumen del enunciado.** Es lo que decidiste tú.
- **«Aprendizajes» incluye al menos una limitación.** Un README que solo se felicita no lo
  lee nadie dos veces.
- Nada de badges decorativos que no informen.

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
├── assets/       capturas e imágenes del README
├── README.md
├── LICENSE
└── <Makefile | CMakeLists.txt | pyproject.toml | …>
```

Adaptable al lenguaje (un proyecto Maven tendrá `src/main/java`), pero **la raíz nunca
contiene el volcado del entregable de clase**.

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

- [ ] README con los 10 apartados
- [ ] Los comandos del README funcionan desde un clon limpio en una carpeta vacía
- [ ] `LICENSE` MIT
- [ ] `.gitignore` del lenguaje, sin restos
- [ ] Estructura `src/ docs/ tests/ assets/`, sin anidación de entrega
- [ ] Build en un comando
- [ ] Descripción rellena en GitHub
- [ ] Topics: `ugr`, `coursework`, lenguaje, dominio
- [ ] Capturas o diagrama en `assets/` y enlazados en «Resultados»
- [ ] Release `v1.0`
- [ ] Sin credenciales, claves ni datos personales de compañeros

---

@author Ismael Sallami Moreno
