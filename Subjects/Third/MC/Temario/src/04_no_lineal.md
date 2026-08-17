# Optimización no lineal

Tema 4 del programa, y último de la parte 1. Cuando el objetivo o las restricciones
dejan de ser lineales: programación convexa, optimización sin restricciones y con
restricciones.

## Introducción

$$\text{Opt.}\quad f(\mathbf{x})
\qquad \text{s.a.}\quad
g_i(\mathbf{x}) \le 0,\quad h_j(\mathbf{x}) = 0$$

con alguna de esas funciones no lineal. Dos cosas cambian respecto de los temas 2 y 3:

| | Lineal | No lineal |
| --- | --- | --- |
| Dónde está el óptimo | siempre en un vértice | en cualquier punto de la región |
| Óptimos locales | el local es global | puede haber muchos locales distintos |
| Algoritmo | símplex, finito y exacto | iterativo, y converge a un local |
| Región factible | poliedro convexo | cualquier conjunto |

**El óptimo puede estar en el interior**, y eso invalida la idea que sostenía el
símplex. Por eso aquí no hay un algoritmo único: hay familias de métodos, y cuál
sirve depende de la estructura del problema.

## Programación convexa

Es el caso tratable, y la razón de que el tema 2 empezara por la convexidad.

Un problema es **convexo** cuando se minimiza una función convexa sobre un conjunto
convexo, lo que ocurre si:

- $f$ es convexa;
- las $g_i$ de las restricciones $\le$ son convexas;
- las $h_j$ de las restricciones de igualdad son lineales.

> **Teorema.** En un problema convexo, todo óptimo local es global. Y si $f$ es
> estrictamente convexa, el óptimo es único.

Es el resultado más útil del tema: **convierte un problema global en uno local**. Un
algoritmo que solo sabe bajar hasta que no puede más da con la solución del problema
entero, y no hace falta comprobar si hay algo mejor en otra parte.

Comprobar la convexidad, en la práctica:

| Función | Cómo se comprueba |
| --- | --- |
| Una variable | $f''(x) \ge 0$ en todo el dominio |
| Varias variables | matriz hessiana semidefinida positiva |
| Suma | la suma de convexas es convexa |
| Máximo | el máximo de convexas es convexo |
| Composición | $g(f(x))$ con $g$ convexa creciente y $f$ convexa |

Y para saber si una hessiana es semidefinida positiva basta con que todos sus
menores principales sean no negativos, o con que todos sus valores propios lo sean.

## Programación no lineal sin restricciones

$$\min\ f(\mathbf{x}), \qquad \mathbf{x} \in \mathbb{R}^n$$

### Condiciones de optimalidad

| Condición | Enunciado |
| --- | --- |
| Necesaria de primer orden | $\nabla f(\mathbf{x}^*) = \mathbf{0}$ |
| Suficiente de segundo orden | además, hessiana definida positiva en $\mathbf{x}^*$ |

Un punto con gradiente nulo es un **punto crítico**, y puede ser mínimo, máximo o
punto de silla. La hessiana lo distingue:

| Hessiana en $\mathbf{x}^*$ | Qué es |
| --- | --- |
| Definida positiva | mínimo local |
| Definida negativa | máximo local |
| Indefinida | punto de silla |
| Semidefinida | no concluyente; hay que mirar órdenes superiores |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=5.2cm,
  axis lines=middle,
  xlabel={$x$}, ylabel={$f(x)$},
  xlabel style={at={(axis description cs:0.5,-0.12)}},
  xmin=-0.4, xmax=7.4, ymin=-3.2, ymax=3.4,
  xtick=\empty, ytick=\empty,
  samples=200, domain=0:7.2
]
\addplot[thick] {0.35*(x-1)^2*(x-4)^2/3 - 1.4 + 0.25*x};
% Los dos minimos, marcados: sin ellos la diferencia de altura entre uno y
% otro no se aprecia, que es justo lo que la figura viene a mostrar.
\node[circle, fill, inner sep=1.5pt] at (axis cs:0.893,-1.164) {};
\node[font=\scriptsize, anchor=north] at (axis cs:0.893,-1.36) {global};
\node[circle, fill, inner sep=1.5pt] at (axis cs:3.863,-0.416) {};
\node[font=\scriptsize, anchor=north] at (axis cs:3.863,-0.61) {local};
\end{axis}
\end{tikzpicture}
\end{center}
```

La función tiene dos mínimos locales de valor distinto: un método de descenso
converge a uno o a otro **según dónde empiece**. Es exactamente lo que la convexidad
evita.

### Métodos de descenso

Todos comparten el esquema

$$\mathbf{x}_{k+1} = \mathbf{x}_k + \alpha_k \mathbf{d}_k$$

con $\mathbf{d}_k$ una dirección de descenso y $\alpha_k$ el paso.

| Método | Dirección | Convergencia | Coste por iteración |
| --- | --- | --- | --- |
| Gradiente | $-\nabla f(\mathbf{x}_k)$ | lineal, lenta en valles alargados | bajo |
| Newton | $-\mathbf{H}^{-1}\nabla f$ | cuadrática cerca del óptimo | alto: hessiana e inversa |
| Cuasi-Newton | aproximación de $\mathbf{H}^{-1}$ | superlineal | medio |
| Gradiente conjugado | combinación con la dirección anterior | superlineal | bajo |

El **método del gradiente** es el más simple y el que peor se comporta en valles
estrechos: avanza en zigzag, porque la dirección de máxima pendiente no apunta al
mínimo salvo que las curvas de nivel sean circulares.

**Newton** converge muy rápido cerca del óptimo y tiene dos problemas: calcular e
invertir la hessiana en cada iteración es caro, y lejos del óptimo la dirección
puede no ser de descenso. Los **cuasi-Newton** —BFGS es el habitual— son el
compromiso: aproximan la inversa de la hessiana con la información de los gradientes
ya calculados.

El **paso** $\alpha_k$ se elige con una búsqueda unidimensional, exacta o aproximada.
Un paso demasiado grande hace oscilar el método y uno demasiado pequeño lo detiene
sin haber llegado.

## Programación no lineal con restricciones

### Restricciones de igualdad: multiplicadores de Lagrange

$$\min\ f(\mathbf{x}) \qquad \text{s.a.}\quad h_j(\mathbf{x}) = 0,\ j=1,\dots,p$$

Se construye la **lagrangiana**:

$$L(\mathbf{x}, \boldsymbol{\lambda}) = f(\mathbf{x}) + \sum_{j=1}^{p} \lambda_j h_j(\mathbf{x})$$

y la condición necesaria es que su gradiente se anule:

$$\nabla_{\mathbf{x}} L = \mathbf{0}, \qquad \nabla_{\boldsymbol{\lambda}} L = \mathbf{0}$$

La primera ecuación dice que, en el óptimo, **el gradiente del objetivo es
combinación lineal de los gradientes de las restricciones**: no hay ninguna
dirección que mejore sin salirse de la restricción.

Los multiplicadores tienen la misma lectura que los precios sombra del tema 3:

$$\lambda_j = -\frac{\partial f^*}{\partial b_j}$$

es decir, cuánto mejora el óptimo por relajar una unidad esa restricción.

### Restricciones de desigualdad: condiciones de Karush-Kuhn-Tucker

$$\min\ f(\mathbf{x}) \qquad \text{s.a.}\quad g_i(\mathbf{x}) \le 0,\ i=1,\dots,m$$

Con $L = f + \sum_i \mu_i g_i$, las condiciones son:

| Condición | Expresión |
| --- | --- |
| Estacionariedad | $\nabla f(\mathbf{x}^*) + \sum_i \mu_i \nabla g_i(\mathbf{x}^*) = \mathbf{0}$ |
| Factibilidad primal | $g_i(\mathbf{x}^*) \le 0$ |
| Factibilidad dual | $\mu_i \ge 0$ |
| Holgura complementaria | $\mu_i\, g_i(\mathbf{x}^*) = 0$ |

La **holgura complementaria** es la misma idea del tema 3, y es la que hace
utilizables estas condiciones:

- si la restricción $i$ **no está activa** —se cumple con holgura—, entonces
  $\mu_i = 0$: no condiciona el óptimo;
- si $\mu_i > 0$, la restricción **está activa** y se cumple con igualdad.

Resolver por Karush-Kuhn-Tucker consiste en eso: probar qué subconjunto de
restricciones está activo, resolver el sistema resultante y comprobar que la
solución cumple las cuatro condiciones.

Y el alcance de las condiciones:

| | Enunciado |
| --- | --- |
| Necesarias | siempre, si se cumple una cualificación de restricciones |
| Suficientes | **si el problema es convexo** |

En un problema convexo, un punto que cumple Karush-Kuhn-Tucker **es el óptimo
global**, y ahí se cierra el círculo del tema. En uno no convexo solo son necesarias:
sirven para descartar puntos, no para confirmar el óptimo.

### Otros métodos

| Método | Idea |
| --- | --- |
| Penalización | añadir al objetivo un término que castigue violar las restricciones |
| Barrera | añadir un término que se dispare al acercarse al borde, desde dentro |
| Direcciones factibles | moverse solo por direcciones que no salgan de la región |
| Punto interior | recorrer el interior de la región en vez de sus vértices |

Los de **punto interior** son los que hoy compiten con el símplex incluso en
problemas lineales: su número de iteraciones crece muy poco con el tamaño, aunque
cada iteración cueste más. Para problemas grandes suelen ganar.

## Casos particulares con nombre propio

| Problema | Objetivo | Restricciones | Método |
| --- | --- | --- | --- |
| Programación cuadrática | cuadrática | lineales | métodos específicos, muy eficientes |
| Programación separable | suma de funciones de una variable | lineales | aproximación lineal a trozos |
| Programación geométrica | polinomios de exponentes reales | del mismo tipo | cambio a variables logarítmicas |
| Programación fraccional | cociente de dos lineales | lineales | transformación de Charnes-Cooper |

La **cuadrática** es la más frecuente en economía, porque es la forma del problema de
cartera: minimizar el riesgo, que es una forma cuadrática, con restricciones lineales
de presupuesto y rentabilidad.

El tratamiento de la optimización no lineal y de las condiciones de optimalidad sigue
a \cite{luenberger2005} y \cite{barbolla2001}; los métodos numéricos y sus
propiedades de convergencia, a \cite{bazaraa1998} y \cite{goberna2004}.
