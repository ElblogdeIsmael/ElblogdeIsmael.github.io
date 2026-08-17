# Introducción

Tema 1 del programa. Qué es la investigación operativa, cómo se construye un
modelo y qué se entiende por optimizar.

## Desarrollo de la investigación operativa

La **investigación operativa** aplica el método científico a la toma de decisiones:
representa un problema real con un modelo matemático, lo resuelve y traduce la
solución de vuelta al problema.

Nació durante la Segunda Guerra Mundial, con equipos que estudiaban el despliegue de
radares, la organización de convoyes y la asignación de recursos escasos. Terminada
la guerra, esos métodos pasaron a la industria, donde el problema es el mismo con
otro vocabulario: repartir recursos limitados entre usos que compiten.

| Hito | Qué aportó |
| --- | --- |
| Años cuarenta | primeros equipos de investigación operativa |
| 1947, Dantzig | el algoritmo símplex |
| Años cincuenta | teoría de la dualidad, programación entera y dinámica |
| Años setenta | teoría de la complejidad: qué problemas son tratables |
| 1979 y 1984 | algoritmos de punto interior, polinómicos para lineal |
| Hoy | problemas con millones de variables se resuelven a diario |

El salto de capacidad no vino solo del ordenador. Los algoritmos han mejorado en un
factor comparable al del propio hardware, y la combinación es lo que ha hecho
resolubles problemas que en los años sesenta eran inabordables.

## Modelización

Un **modelo** es una representación simplificada de la realidad que conserva lo
esencial para la decisión que se quiere tomar. Modelar es decidir **qué se deja
fuera**, y ahí está la dificultad.

### El ciclo

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, >=stealth, node distance=11mm,
  caja/.style={draw, minimum height=0.9cm, minimum width=2.15cm, align=center}]
\node[caja] (p) {problema\\real};
\node[caja, right=of p] (m) {modelo\\matemático};
\node[caja, right=of m] (s) {solución del\\modelo};
\node[caja, right=of s] (d) {decisión};
\draw[->, thick] (p) -- node[above, font=\scriptsize] {abstraer} (m);
\draw[->, thick] (m) -- node[above, font=\scriptsize] {resolver} (s);
\draw[->, thick] (s) -- node[above, font=\scriptsize] {interpretar} (d);
\draw[->, thick] (d.south) -- ++(0,-0.75) -| node[below, pos=0.25, font=\scriptsize]
  {validar y revisar} (p.south);
\end{tikzpicture}
\end{center}
```

Las fases, en detalle:

| Fase | Qué se hace |
| --- | --- |
| 1 · Definición | qué se decide, qué se persigue, qué limita |
| 2 · Formulación | variables de decisión, función objetivo y restricciones |
| 3 · Resolución | aplicar el algoritmo que corresponda |
| 4 · Validación | comprobar que el modelo reproduce lo conocido |
| 5 · Implantación | llevar la solución a la práctica y vigilarla |

**La fase 1 es la que más se descuida y la que más decide.** Un modelo bien resuelto
de un problema mal planteado es una respuesta exacta a la pregunta equivocada. Y la
fase 4 es la que evita publicar como solución algo que el modelo produce por un
error de signo.

### Clasificación de modelos

| Criterio | Tipos |
| --- | --- |
| Certidumbre | determinista, estocástico |
| Tiempo | estático, dinámico |
| Variables | continuo, entero, mixto |
| Objetivos | monoobjetivo, multiobjetivo |
| Linealidad | lineal, no lineal |
| Decisores | un decisor, varios (teoría de juegos) |

La asignatura recorre esa tabla: los temas 2 a 4 son determinista y monoobjetivo,
el 5 introduce la incertidumbre, el 6 los criterios múltiples, el 7 los decisores
múltiples y el 8 los objetivos múltiples.

## Optimización en investigación operativa

El problema general de optimización:

$$\text{Opt.}\quad f(\mathbf{x}) \qquad \text{s.a.}\quad \mathbf{x} \in S \subseteq \mathbb{R}^n$$

| Elemento | Qué es |
| --- | --- |
| $\mathbf{x}$ | variables de decisión: lo que se elige |
| $f$ | función objetivo: lo que se quiere optimizar |
| $S$ | región factible: lo que las restricciones permiten |

Minimizar y maximizar son el mismo problema, porque

$$\max f(\mathbf{x}) = -\min\,[-f(\mathbf{x})]$$

y el punto donde se alcanza es el mismo. El temario formula en la dirección que
resulte natural en cada caso y traduce cuando hace falta.

### Tipos de óptimo

- $\mathbf{x}^*$ es **óptimo global** si $f(\mathbf{x}^*) \le f(\mathbf{x})$ para todo
  $\mathbf{x} \in S$.
- $\mathbf{x}^*$ es **óptimo local** si la desigualdad solo se cumple dentro de un
  entorno de $\mathbf{x}^*$ contenido en $S$.

Todo óptimo global es local, y no al revés. Casi toda la dificultad de la
optimización no lineal del tema 4 está en esa distinción, y el resultado que la
resuelve es el de la programación convexa: **en un problema convexo, todo óptimo
local es global**. Es la razón de que el tema 2 empiece por la convexidad.

### Situaciones posibles

Un problema de optimización puede terminar de cuatro maneras, y el algoritmo debe
distinguirlas:

| Caso | Qué significa |
| --- | --- |
| Óptimo único | hay un solo punto que optimiza |
| Óptimos múltiples | hay infinitos puntos con el mismo valor óptimo |
| No acotado | la función objetivo mejora sin límite dentro de $S$ |
| Infactible | $S = \emptyset$: ninguna solución cumple todas las restricciones |

Las dos últimas suelen ser **errores de formulación** más que propiedades del
problema real: un modelo no acotado indica que falta una restricción, y uno
infactible que sobran o se contradicen.

## Áreas de la investigación operativa

| Área | De qué trata | Tema |
| --- | --- | --- |
| Programación lineal | objetivo y restricciones lineales | 2 y 3 |
| Programación entera | variables que solo toman valores enteros | 3 |
| Programación no lineal | objetivo o restricciones no lineales | 4 |
| Teoría de la decisión | decidir bajo incertidumbre | 5 |
| Decisión multicriterio | varios criterios sobre alternativas discretas | 6 |
| Teoría de juegos | varios decisores con intereses distintos | 7 |
| Programación multiobjetivo | varios objetivos sobre un continuo | 8 |
| Redes y flujos | transporte, asignación, camino mínimo | dentro del 3 |
| Colas e inventarios | sistemas de espera y de almacenamiento | fuera del programa |

Los temas 6 y 8 se parecen y no son lo mismo: **el 6 elige entre un conjunto finito
de alternativas ya dadas, y el 8 optimiza varios objetivos sobre una región
continua**. Confundirlos es el error de encuadre más habitual de la asignatura.

El planteamiento de la investigación operativa y del proceso de modelización sigue a
\cite{hillier1991} y \cite{taha2004}; la clasificación de los problemas de
optimización, a \cite{barbolla2001} y \cite{riosinsua2004}.
