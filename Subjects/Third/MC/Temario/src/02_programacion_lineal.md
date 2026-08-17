# Introducción a la programación lineal

Tema 2 del programa. Convexidad, formulación de un problema lineal, tipos de
solución y resolución gráfica.

## Convexidad

### Conjuntos convexos

Un conjunto $S \subseteq \mathbb{R}^n$ es **convexo** si el segmento que une dos
puntos cualesquiera suyos está contenido en él:

$$\mathbf{x}, \mathbf{y} \in S,\ \lambda \in [0,1]
\ \Longrightarrow\ \lambda\mathbf{x} + (1-\lambda)\mathbf{y} \in S$$

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize]
\begin{scope}
  \draw[thick, fill=gray!12] (0,0) -- (2.4,0.35) -- (2.9,2.0) -- (1.1,2.5) -- (-0.3,1.3) -- cycle;
  \fill (0.5,0.6) circle (1.5pt); \fill (2.2,1.8) circle (1.5pt);
  \draw[thick] (0.5,0.6) -- (2.2,1.8);
  \node at (1.3,-0.5) {convexo};
\end{scope}
\begin{scope}[xshift=5.6cm]
  \draw[thick, fill=gray!12]
    (0,0) -- (2.9,0) -- (2.9,2.5) -- (1.9,2.5) -- (1.9,1.1) -- (1.0,1.1) -- (1.0,2.5) -- (0,2.5) -- cycle;
  \fill (0.5,2.0) circle (1.5pt); \fill (2.4,2.0) circle (1.5pt);
  \draw[thick, dashed] (0.5,2.0) -- (2.4,2.0);
  \node at (1.45,-0.5) {no convexo};
\end{scope}
\end{tikzpicture}
\end{center}
```

En el segundo, el segmento entre los dos puntos marcados sale del conjunto.

Propiedades que se usan continuamente:

| Propiedad | Enunciado |
| --- | --- |
| Intersección | la intersección de conjuntos convexos es convexa |
| Semiespacios | $\{\mathbf{x} : \mathbf{a}'\mathbf{x} \le b\}$ es convexo |
| Poliedro | intersección finita de semiespacios; es convexo |

De las tres sale el resultado sobre el que descansa toda la programación lineal:
**la región factible de un problema lineal es un poliedro convexo**, porque es la
intersección de los semiespacios que definen sus restricciones.

Un **punto extremo** o vértice de $S$ es el que no se puede escribir como
combinación convexa de otros dos puntos distintos de $S$.

### Funciones convexas

$f$ es **convexa** en un conjunto convexo $S$ si

$$f(\lambda\mathbf{x} + (1-\lambda)\mathbf{y}) \le \lambda f(\mathbf{x}) + (1-\lambda) f(\mathbf{y})$$

para todo $\mathbf{x},\mathbf{y} \in S$ y $\lambda \in [0,1]$: la cuerda queda por
encima de la función. Es **cóncava** si se cumple la desigualdad contraria.

| Caracterización | Convexa | Cóncava |
| --- | --- | --- |
| Con $f$ derivable dos veces, $n=1$ | $f''(x) \ge 0$ | $f''(x) \le 0$ |
| Con $f$ derivable dos veces, $n>1$ | matriz hessiana semidefinida positiva | semidefinida negativa |

Una función **lineal es a la vez convexa y cóncava**, porque cumple las dos
desigualdades con igualdad. De ahí que la programación lineal sea el caso más
manejable: cualquier resultado que valga para funciones convexas y cualquiera que
valga para cóncavas se le aplica.

Y el resultado que justifica todo el tema 4:

> En un problema de minimizar una función convexa sobre un conjunto convexo, **todo
> óptimo local es global**.

## Planteamiento de un problema de programación matemática

$$\text{Opt.}\quad f(\mathbf{x})
\qquad \text{s.a.}\quad
\begin{cases}
g_i(\mathbf{x}) \le 0, & i = 1,\dots,m \\
h_j(\mathbf{x}) = 0, & j = 1,\dots,p \\
\mathbf{x} \ge \mathbf{0}
\end{cases}$$

Es **lineal** cuando $f$, $g_i$ y $h_j$ lo son todas.

### Formulación de un problema lineal

Tres pasos, y en este orden:

1. **Variables de decisión.** Qué se decide, con sus unidades. Definirlas mal es
   irreparable después.
2. **Función objetivo.** Qué se maximiza o minimiza, en función de las variables.
3. **Restricciones.** Qué limita: recursos, demandas, capacidades, relaciones
   técnicas, y la no negatividad.

**Ejemplo.** Un fabricante produce sillas y mesas. Una silla necesita 1 hora de
montaje y 2 de pintura; una mesa, 3 de montaje y 1 de pintura. Hay 9 horas de
montaje y 8 de pintura al día. El beneficio de una mesa es el doble que el de una
silla.

| Paso | Resultado |
| --- | --- |
| Variables | $x$ sillas al día, $y$ mesas al día |
| Objetivo | $\max\ z = x + 2y$, tomando el beneficio de la silla como unidad |
| Montaje | $x + 3y \le 9$ |
| Pintura | $2x + y \le 8$ |
| No negatividad | $x, y \ge 0$ |

La no negatividad no es un detalle formal: sin ella la región factible no está
acotada por abajo y el problema puede salir no acotado.

### Formas del problema

| Forma | Restricciones | Variables |
| --- | --- | --- |
| **Canónica** (max) | todas $\le$ | todas $\ge 0$ |
| **Canónica** (min) | todas $\ge$ | todas $\ge 0$ |
| **Estándar** | todas $=$ | todas $\ge 0$ |

Las conversiones, que son las del ejercicio 1 del último capítulo:

| Situación | Qué se hace |
| --- | --- |
| $\sum a_j x_j \le b$ | sumar una **variable de holgura**: $\sum a_j x_j + s = b$, con $s \ge 0$ |
| $\sum a_j x_j \ge b$ | restar una **variable de exceso**: $\sum a_j x_j - s = b$ |
| $b < 0$ | multiplicar la restricción por $-1$ y girar la desigualdad |
| $x_j \le 0$ | cambiar de variable: $x_j' = -x_j \ge 0$ |
| $x_j$ sin restricción de signo | escribir $x_j = x_j^+ - x_j^-$, con los dos $\ge 0$ |
| $\min z$ | $\min z = -\max(-z)$ |

**El símplex del tema 3 exige la forma estándar**, así que estas conversiones son el
paso previo a cualquier resolución.

## Concepto de solución. Tipos de solución

Con el problema en forma estándar $\mathbf{A}\mathbf{x} = \mathbf{b}$,
$\mathbf{x} \ge \mathbf{0}$, con $\mathbf{A}$ de orden $m \times n$ y
$\rg(\mathbf{A}) = m < n$:

| Tipo | Definición |
| --- | --- |
| Solución | cualquier $\mathbf{x}$ que cumpla $\mathbf{A}\mathbf{x} = \mathbf{b}$ |
| Solución factible | además $\mathbf{x} \ge \mathbf{0}$ |
| Solución básica | se anulan $n-m$ variables y las $m$ restantes forman una base |
| Solución básica factible | básica y además no negativa |
| Solución básica degenerada | básica factible con alguna variable básica nula |
| Solución óptima | factible que optimiza $f$ |

Y el **teorema fundamental de la programación lineal**, que es lo que hace posible
el símplex:

> Si existe solución óptima, **al menos una de ellas es una solución básica
> factible**, y las soluciones básicas factibles se corresponden con los puntos
> extremos de la región factible.

La consecuencia práctica: no hay que explorar infinitos puntos, sino a lo sumo
$\binom{n}{m}$ vértices. Es un número finito, y sigue siendo enorme, de ahí que
haga falta un algoritmo que los recorra con criterio en vez de enumerarlos.

## Resolución gráfica

Con dos variables el problema se resuelve dibujando.

| Paso | Qué se hace |
| --- | --- |
| 1 | representar cada restricción como una recta y sombrear su semiplano |
| 2 | la intersección de todos es la región factible |
| 3 | dibujar una curva de nivel de la función objetivo |
| 4 | desplazarla en la dirección del gradiente hasta el último punto factible |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.6cm, height=5.6cm,
  xlabel={$x$ (sillas)}, ylabel={$y$ (mesas)},
  xmin=0, xmax=5.2, ymin=0, ymax=4.4,
  xtick={0,1,2,3,4,5}, ytick={0,1,2,3,4},
  grid=major, grid style={dashed, gray!25},
  % La leyenda va fuera del area de dibujo: dentro tapaba la region
  % factible y el vertice optimo.
  legend style={font=\footnotesize, at={(1.03,1)}, anchor=north west,
                draw=none, fill=none}
]
% Region factible: x + 3y <= 9, 2x + y <= 8, x,y >= 0.
% Vertices: (0,0), (4,0), (3,2) y (0,3).
\addplot[draw=none, fill=gray!22] coordinates {(0,0) (4,0) (3,2) (0,3)} \closedcycle;
\addplot[thick, domain=0:5.2] {(9-x)/3};
\addlegendentry{$x + 3y = 9$}
\addplot[thick, dashed, domain=0:4] {8-2*x};
\addlegendentry{$2x + y = 8$}
\addplot[dotted, thick, domain=0:5.2] {(7-x)/2};
\addlegendentry{$x + 2y = 7$}
\node[circle, fill, inner sep=1.5pt] at (axis cs:3,2) {};
\node[anchor=south west, font=\footnotesize] at (axis cs:3.05,2.05) {óptimo};
\end{axis}
\end{tikzpicture}
\end{center}
```

La región sombreada es la factible; sus vértices son $(0,0)$, $(4,0)$, $(3,2)$ y
$(0,3)$. Evaluando $z = x + 2y$:

| Vértice | $z$ |
| --- | ---: |
| $(0,0)$ | 0 |
| $(4,0)$ | 4 |
| $(3,2)$ | **7** |
| $(0,3)$ | 6 |

El óptimo es $(3,2)$ con $z = 7$: tres sillas y dos mesas al día. La recta punteada
es la curva de nivel $z = 7$, que toca la región justo en ese vértice.

### Los cuatro desenlaces, vistos en el gráfico

| Caso | Qué se ve |
| --- | --- |
| Óptimo único | la curva de nivel toca la región en un solo vértice |
| Óptimos múltiples | la curva de nivel es **paralela a una arista**, y toda ella es óptima |
| No acotado | la región es ilimitada en la dirección de mejora |
| Infactible | los semiplanos no tienen intersección común |

El segundo caso se reconoce en la formulación sin dibujar: ocurre cuando el vector
de coeficientes del objetivo es proporcional al de una restricción activa. En el
ejemplo pasaría con $z = x + 3y$, paralelo a la restricción de montaje.

**Y el método gráfico no escala.** Con tres variables ya es incómodo y con cuatro no
hay dibujo, así que hace falta un procedimiento algebraico que recorra los vértices:
el símplex del tema 3.

La convexidad y los tipos de solución siguen a \cite{goberna2004} y
\cite{barbolla2001}; la formulación y la resolución gráfica, a \cite{hillier1991} y
\cite{taha2004}.
