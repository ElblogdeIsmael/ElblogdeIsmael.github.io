# Interpolación numérica

Tema 5 del programa. El polinomio de Taylor, y los métodos de Lagrange y de Newton
para construir el polinomio que pasa por un conjunto de puntos.

## El problema

Dados $n+1$ puntos $(x_0,y_0), \dots, (x_n,y_n)$ con abscisas distintas, se busca una
función sencilla que pase por todos. Dos situaciones distintas lo motivan:

| Situación | Para qué sirve interpolar |
| --- | --- |
| Solo se conocen valores tabulados | estimar entre ellos |
| La función se conoce y es cara de evaluar | sustituirla por algo barato |

Y una consecuencia derivada: con el polinomio en la mano, derivar e integrar la función
aproximada es inmediato. Ahí es donde nacen las fórmulas de cuadratura del tema 4 —los
trapecios son la interpolación lineal, y Simpson la cuadrática— y las de derivación
numérica.

```{=latex}
\begin{teorema}[Existencia y unicidad]
Dados $n+1$ puntos con abscisas distintas, existe un único polinomio de grado menor o
igual que $n$ que pasa por todos ellos.
\end{teorema}
```

La unicidad importa más de lo que parece: **Lagrange y Newton dan el mismo polinomio**,
escrito de dos maneras. No son dos aproximaciones distintas entre las que elegir, sino
dos formas de calcular lo mismo, con costes distintos.

## El polinomio de Taylor

Antes de interpolar entre varios puntos, el caso de un solo punto con muchas derivadas.

```{=latex}
\begin{definicion}[Polinomio de Taylor]
$$P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k$$
Coincide con $f$ en $a$ hasta la derivada $n$-ésima.
\end{definicion}

\begin{teorema}[Resto de Lagrange]
Si $f$ es $n+1$ veces derivable, para cada $x$ existe $\xi$ entre $a$ y $x$ con
$$f(x) - P_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$$
\end{teorema}
```

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=5.6cm, axis lines=middle,
  xmin=-3.4, xmax=3.4, ymin=-1.8, ymax=1.8,
  xtick=\empty, ytick=\empty, samples=120,
  legend style={font=\scriptsize, draw=none, at={(0.99,0.02)}, anchor=south east},
]
\addplot[thick, domain=-3.3:3.3] {sin(deg(x))};       \addlegendentry{$\sen x$}
\addplot[dashed, domain=-2.2:2.2] {x - x^3/6};        \addlegendentry{$P_3$}
\addplot[dotted, domain=-3.2:3.2] {x - x^3/6 + x^5/120}; \addlegendentry{$P_5$}
\end{axis}
\end{tikzpicture}
\end{center}
```

La gráfica muestra lo característico de Taylor: **la aproximación es muy buena cerca
del punto y se degrada al alejarse**, y añadir grado amplía la zona buena.

Los desarrollos en el origen que conviene tener presentes:

$$e^x = 1 + x + \frac{x^2}{2!} + \dots, \qquad
\sen x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \dots$$
$$\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots, \qquad
\frac{1}{1-x} = 1 + x + x^2 + \dots$$

Sirven para tres cosas: aproximar valores, calcular límites indeterminados sin
L'Hôpital, y estimar el error cometido al truncar.

```{=latex}
\begin{ejemplo}
$$\lim_{x\to 0}\frac{\sen x - x}{x^3}
= \lim_{x\to 0}\frac{\left(x - \frac{x^3}{6}+O(x^5)\right) - x}{x^3} = -\frac{1}{6}$$
L'Hôpital daría lo mismo tras derivar tres veces. Con Taylor sale de una línea, y esa
es la razón de que sea la herramienta preferida cuando el orden del cero es alto.
\end{ejemplo}
```

## Interpolación de Lagrange

Se construyen $n+1$ polinomios base, cada uno valiendo 1 en su nodo y 0 en los demás:

$$\ell_i(x) = \prod_{j \ne i} \frac{x - x_j}{x_i - x_j}, \qquad
P(x) = \sum_{i=0}^{n} y_i\,\ell_i(x)$$

Que $P(x_k) = y_k$ es inmediato: en $x_k$ todos los $\ell_i$ se anulan salvo
$\ell_k$, que vale 1.

```{=latex}
\begin{ejemplo}
Con los puntos $(0,1)$, $(1,3)$ y $(2,2)$:
$$\ell_0 = \frac{(x-1)(x-2)}{2}, \quad
\ell_1 = \frac{x(x-2)}{-1}, \quad
\ell_2 = \frac{x(x-1)}{2}$$
$$P(x) = 1\cdot\ell_0 + 3\cdot\ell_1 + 2\cdot\ell_2
= -\frac{3}{2}x^2 + \frac{7}{2}x + 1$$
Comprobación: $P(0)=1$, $P(1)=3$, $P(2)=2$.
\end{ejemplo}
```

| Ventaja | Inconveniente |
| --- | --- |
| Fórmula explícita y fácil de demostrar | **añadir un punto obliga a rehacerlo todo** |
| Cómoda para deducir fórmulas teóricas | evaluar cuesta $O(n^2)$ por punto |

El inconveniente en negrita es el que motiva el método siguiente.

## Interpolación de Newton

Escribe el polinomio de forma que **cada punto nuevo añade un término y no toca los
anteriores**:

$$P(x) = f[x_0] + f[x_0,x_1](x-x_0) + f[x_0,x_1,x_2](x-x_0)(x-x_1) + \dots$$

Los coeficientes son las **diferencias divididas**, definidas por recurrencia:

$$f[x_i] = y_i, \qquad
f[x_i,\dots,x_{i+k}] = \frac{f[x_{i+1},\dots,x_{i+k}] - f[x_i,\dots,x_{i+k-1}]}{x_{i+k}-x_i}$$

Se calculan en tabla triangular:

```{=latex}
\begin{center}
\begin{tabular}{@{}cccc@{}}
\toprule
$x_i$ & $f[x_i]$ & $f[\cdot,\cdot]$ & $f[\cdot,\cdot,\cdot]$ \\
\midrule
0 & 1 &        &        \\
  &   & 2      &        \\
1 & 3 &        & $-3/2$ \\
  &   & $-1$   &        \\
2 & 2 &        &        \\
\bottomrule
\end{tabular}
\end{center}
```

Los coeficientes son la **diagonal superior**: $1$, $2$ y $-3/2$, así que

$$P(x) = 1 + 2x - \tfrac{3}{2}x(x-1)$$

que desarrollado es el mismo polinomio que dio Lagrange, como garantiza la unicidad.

| Ventaja | Inconveniente |
| --- | --- |
| Añadir un punto es añadir un término | la tabla hay que mantenerla |
| Se evalúa por Horner en $O(n)$ | ligeramente menos directo de enunciar |
| Los coeficientes tienen interpretación: aproximan derivadas | --- |

La última fila es la conexión con Taylor: cuando los nodos se juntan,
$f[x_0,\dots,x_k] \to f^{(k)}(x_0)/k!$, y el polinomio de Newton se convierte en el de
Taylor. **Son el mismo objeto en dos situaciones distintas**: Taylor usa un punto con
muchas derivadas, Newton muchos puntos con un valor cada uno.

## Error de interpolación

```{=latex}
\begin{teorema}[Error de interpolación]
Si $f$ es $n+1$ veces derivable, para cada $x$ existe $\xi$ en el intervalo que
contiene los nodos y $x$ tal que
$$f(x) - P_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!}\prod_{i=0}^{n}(x-x_i)$$
\end{teorema}
```

La fórmula tiene la misma forma que el resto de Taylor, con el producto de los nodos en
lugar de la potencia. Dos lecturas prácticas:

- **El error se anula en los nodos**, como debe ser, y crece entre ellos.
- El producto es mucho mayor **fuera** del intervalo de los nodos: interpolar es fiable,
  extrapolar no lo es.

### El fenómeno de Runge

Aumentar el grado no siempre mejora. Con la función $f(x)=1/(1+25x^2)$ en $[-1,1]$ y
nodos equiespaciados, el error **crece** con el grado, y lo hace en los extremos del
intervalo.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=5.4cm, axis lines=middle,
  xmin=-1.15, xmax=1.15, ymin=-0.6, ymax=1.5,
  xtick={-1,-0.5,0,0.5,1}, ytick={0,1},
  tick label style={font=\scriptsize}, samples=200,
  legend style={font=\scriptsize, draw=none, at={(0.99,0.98)}, anchor=north east},
]
\addplot[thick, domain=-1:1] {1/(1+25*x^2)};
\addlegendentry{$f$}
\addplot[dashed, domain=-1:1, samples=200]
  {0.9 - 4.1*x^2 + 5.9*x^4 - 2.6*x^6};
\addlegendentry{interpolante}
\end{axis}
\end{tikzpicture}
\end{center}
```

Las dos salidas:

| Solución | Idea |
| --- | --- |
| Nodos de Chebyshev | concentrarlos hacia los extremos, no equiespaciados |
| **Splines** | polinomios de grado bajo a trozos, enlazados con continuidad |

Los splines cúbicos son lo que se usa en la práctica, y también lo que hay detrás de
las curvas de cualquier programa de dibujo: grado tres, con derivadas primera y segunda
continuas en los nodos.

```{=latex}
\begin{anotacion}
La moraleja del fenómeno de Runge es que \textbf{más grado no es más precisión}. Un
polinomio de grado alto oscila, y su error se concentra donde menos se espera. La
respuesta correcta casi siempre es bajar el grado y trocear.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Construir el polinomio de interpolación de $(1,2)$, $(2,3)$ y $(4,1)$ por diferencias
divididas.
\end{ejercicio}

\begin{solucion}
$f[x_0]=2$; $f[x_0,x_1]=(3-2)/(2-1)=1$; $f[x_1,x_2]=(1-3)/(4-2)=-1$; y
$f[x_0,x_1,x_2]=(-1-1)/(4-1)=-2/3$. Por tanto
$$P(x) = 2 + 1\cdot(x-1) - \tfrac{2}{3}(x-1)(x-2)$$
Comprobación en los tres nodos: $P(1)=2$, $P(2)=3$, $P(4)=2+3-\tfrac{2}{3}\cdot 6 = 1$.
\end{solucion}

\begin{ejercicio}
Acotar el error de aproximar $e^{0{,}1}$ por su polinomio de Taylor de grado 2 en el
origen.
\end{ejercicio}

\begin{solucion}
$P_2(x)=1+x+x^2/2$, así que $P_2(0{,}1)=1{,}105$. El resto es
$\frac{e^{\xi}}{6}(0{,}1)^3$ con $\xi \in (0,\ 0{,}1)$, y como $e^{\xi} < e^{0{,}1}
< 1{,}11$, queda $E < 1{,}11 \times 10^{-3}/6 = 1{,}85\times 10^{-4}$. El valor exacto
es $1{,}10517$, con error real $1{,}7\times 10^{-4}$: la cota es ajustada.
\end{solucion}

\begin{ejercicio}
¿Por qué añadir un punto obliga a rehacer el polinomio de Lagrange y no el de Newton?
\end{ejercicio}

\begin{solucion}
Porque cada base $\ell_i$ de Lagrange se define con \emph{todos} los nodos en su
producto, así que un nodo nuevo cambia las $n+1$ bases anteriores. En Newton los
coeficientes ya calculados no dependen de los nodos posteriores: basta añadir una fila
a la tabla de diferencias divididas y un término al polinomio.
\end{solucion}
```

El polinomio de Taylor está desarrollado en \cite{rogawski} y \cite{alaminos2019}, y
la interpolación y el análisis de su error en \cite{burden2004}.
