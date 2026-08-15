# Cálculo diferencial para funciones de varias variables

Tema 3 del programa. Derivadas parciales, vector gradiente, regla de la cadena,
funciones homogéneas, derivadas de segundo orden y matriz hessiana, y la fórmula de
Taylor.

## Derivadas parciales de primer orden

```{=latex}
\begin{definicion}[Derivada parcial]
$$\frac{\partial f}{\partial x_i}(\mathbf{a}) =
\lim_{h\to 0}\frac{f(\mathbf{a}+h\mathbf{e}_i)-f(\mathbf{a})}{h}$$
Se calcula derivando respecto de $x_i$ y tratando las demás variables como constantes.
\end{definicion}
```

En economía cada parcial es una **magnitud marginal**:

| Función | Su parcial se llama |
| --- | --- |
| Producción | productividad marginal del factor |
| Utilidad | utilidad marginal del bien |
| Coste | coste marginal |
| Beneficio | beneficio marginal |

```{=latex}
\begin{definicion}[Gradiente]
$$\nabla f(\mathbf{a}) =
\left(\frac{\partial f}{\partial x_1}(\mathbf{a}),\dots,
\frac{\partial f}{\partial x_n}(\mathbf{a})\right)$$
\end{definicion}

\begin{proposicion}
El gradiente apunta en la dirección de máximo crecimiento de $f$, su módulo es esa tasa
de crecimiento, y es \textbf{ortogonal} al conjunto de nivel que pasa por el punto.
\end{proposicion}
```

La ortogonalidad al conjunto de nivel es la clave geométrica del tema 5: en un óptimo
con restricciones, el gradiente de la función objetivo y el de la restricción son
paralelos, y de ahí salen los multiplicadores de Lagrange.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.4cm, height=6.0cm,
  xlabel={$x$}, ylabel={$y$},
  xmin=-2.2, xmax=2.2, ymin=-2.2, ymax=2.2,
  axis lines=middle, xtick=\empty, ytick=\empty, samples=100,
]
\addplot[domain=0:360, samples=120] ({0.8*cos(x)},{0.8*sin(x)});
\addplot[domain=0:360, samples=120] ({1.4*cos(x)},{1.4*sin(x)});
\addplot[domain=0:360, samples=120] ({1.9*cos(x)},{1.9*sin(x)});
\draw[->, thick] (axis cs:0.99,0.99) -- (axis cs:1.55,1.55);
\node[font=\scriptsize, anchor=west] at (axis cs:1.55,1.6) {$\nabla f$};
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{anotacion}
Que existan las derivadas parciales \textbf{no garantiza la continuidad}, a diferencia de
lo que ocurre con una variable. La función que vale $xy/(x^2+y^2)$ fuera del origen y 0
en él tiene las dos parciales en el origen y no es continua allí. Lo que sí implica
continuidad es la diferenciabilidad, y una condición cómoda para tenerla es que las
parciales existan y sean continuas.
\end{anotacion}
```

## Regla de la cadena

Si $z = f(x,y)$ con $x = x(t)$ e $y = y(t)$:

$$\frac{dz}{dt} = \frac{\partial f}{\partial x}\frac{dx}{dt}
+ \frac{\partial f}{\partial y}\frac{dy}{dt}$$

Y si dependen de varias variables, $x = x(u,v)$ e $y = y(u,v)$:

$$\frac{\partial z}{\partial u} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial u}
+ \frac{\partial f}{\partial y}\frac{\partial y}{\partial u}$$

La regla se recuerda con el **diagrama de dependencias**: se suman todos los caminos
desde $z$ hasta la variable, multiplicando las derivadas de cada tramo.

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth, font=\small, node distance=16mm]
\node (z) at (0,1.4) {$z$};
\node (x) at (-1.0,0.4) {$x$};
\node (y) at (1.0,0.4) {$y$};
\node (u) at (0,-0.7) {$u$};
\draw[->] (z) -- (x); \draw[->] (z) -- (y);
\draw[->] (x) -- (u); \draw[->] (y) -- (u);
\node[font=\scriptsize, anchor=east] at (-0.65,0.95) {$\partial f/\partial x$};
\node[font=\scriptsize, anchor=west] at (0.65,0.95) {$\partial f/\partial y$};
\end{tikzpicture}
\end{center}
```

### Derivación implícita

Si una ecuación $F(x,y) = 0$ define $y$ como función de $x$:

$$\frac{dy}{dx} = -\frac{\partial F/\partial x}{\partial F/\partial y}$$
siempre que $\partial F/\partial y \ne 0$.

Es lo que da la **pendiente de una curva de nivel** sin despejar, y en economía se llama
relación marginal de sustitución: cuánto hay que aumentar un bien al reducir el otro para
mantener el mismo nivel de utilidad.

## Funciones homogéneas

```{=latex}
\begin{definicion}
$f$ es homogénea de grado $r$ si $f(t\mathbf{x}) = t^{r}f(\mathbf{x})$ para todo
$t>0$.
\end{definicion}

\begin{teorema}[Euler]
Si $f$ es homogénea de grado $r$ y diferenciable,
$$\sum_{i=1}^{n} x_i\,\frac{\partial f}{\partial x_i} = r\,f(\mathbf{x})$$
\end{teorema}
```

Interpretación económica del grado, con una función de producción:

| Grado | Rendimientos a escala |
| --- | --- |
| $r>1$ | crecientes: doblar los factores más que dobla la producción |
| $r=1$ | constantes |
| $r<1$ | decrecientes |

Una **Cobb-Douglas** $A x^{\alpha}y^{\beta}$ es homogénea de grado $\alpha+\beta$, y por
eso ese exponente total es lo que se mira para clasificar sus rendimientos.

El teorema de Euler con $r=1$ dice que la producción se agota repartiendo a cada factor
su productividad marginal por la cantidad empleada. Es el resultado que sostiene la
teoría de la distribución en competencia perfecta.

## Derivadas de segundo orden

$$\frac{\partial^2 f}{\partial x_i\,\partial x_j}
= \frac{\partial}{\partial x_i}\left(\frac{\partial f}{\partial x_j}\right)$$

```{=latex}
\begin{teorema}[Schwarz]
Si las derivadas parciales segundas cruzadas existen y son continuas en un entorno del
punto, coinciden:
$$\frac{\partial^2 f}{\partial x\,\partial y} = \frac{\partial^2 f}{\partial y\,\partial x}$$
\end{teorema}
```

Gracias a Schwarz, la **matriz hessiana** es simétrica:

$$\Hess f(\mathbf{a}) =
\begin{pmatrix}
f_{11} & f_{12} & \cdots & f_{1n}\\
f_{21} & f_{22} & \cdots & f_{2n}\\
\vdots & & \ddots & \vdots \\
f_{n1} & f_{n2} & \cdots & f_{nn}
\end{pmatrix}$$

Y eso es lo que permite aplicarle la clasificación de formas cuadráticas del tema 1,
que es exactamente lo que hará el tema 4 para decidir si un punto crítico es máximo,
mínimo o silla.

## Fórmula de Taylor

$$f(\mathbf{x}) \approx f(\mathbf{a}) + \nabla f(\mathbf{a})\cdot(\mathbf{x}-\mathbf{a})
+ \tfrac{1}{2}(\mathbf{x}-\mathbf{a})^{T}\Hess f(\mathbf{a})\,(\mathbf{x}-\mathbf{a})$$

| Orden | Aproximación | Geometría |
| --- | --- | --- |
| Primero | lineal | el plano tangente |
| Segundo | cuadrática | añade la curvatura |

La aproximación lineal es lo que en economía se llama **análisis marginal**: estimar el
efecto de un cambio pequeño multiplicando la derivada por el incremento.

$$\Delta f \approx \frac{\partial f}{\partial x}\Delta x + \frac{\partial f}{\partial y}\Delta y$$

```{=latex}
\begin{ejemplo}
Una empresa produce $Q(K,L) = 10K^{0{,}4}L^{0{,}6}$ y opera en $K=100$, $L=100$, donde
$Q = 1000$.

\medskip
Las productividades marginales son $Q_K = 4(L/K)^{0{,}6} = 4$ y
$Q_L = 6(K/L)^{0{,}4} = 6$. Aumentando el capital en 2 y reduciendo el trabajo en 1:
$$\Delta Q \approx 4\cdot 2 + 6\cdot(-1) = 2$$
La producción sube en torno a dos unidades. El valor exacto es 2,00 con dos decimales,
así que en cambios pequeños la aproximación lineal basta.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
La aproximación lineal solo vale \textbf{cerca del punto}, y el error crece con el
cuadrado del incremento. Usarla para un cambio del 50\,\% en un factor es un abuso
habitual en los ejercicios mal planteados: ahí hace falta el término de segundo orden, o
directamente evaluar la función.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Para $f(x,y) = x^3 + 2x^2y - y^3$, calcular el gradiente y la hessiana en $(1,1)$ y
comprobar Schwarz.
\end{ejercicio}

\begin{solucion}
$f_x = 3x^2+4xy$ y $f_y = 2x^2-3y^2$, luego $\nabla f(1,1) = (7,-1)$.

\medskip
Las segundas: $f_{xx} = 6x+4y = 10$, $f_{yy} = -6y = -6$, $f_{xy} = 4x = 4$ y
$f_{yx} = 4x = 4$. Coinciden, como garantiza Schwarz al ser polinómicas y por tanto
continuas.
$$\Hess f(1,1) = \begin{pmatrix}10 & 4\\ 4 & -6\end{pmatrix}$$
\end{solucion}

\begin{ejercicio}
Comprobar que $f(x,y) = \dfrac{x^2+y^2}{xy}$ es homogénea y verificar el teorema de
Euler.
\end{ejercicio}

\begin{solucion}
$f(tx,ty) = \dfrac{t^2(x^2+y^2)}{t^2xy} = f(x,y)$, así que es homogénea de grado 0.

\medskip
Euler exige entonces $xf_x + yf_y = 0$. En efecto,
$f_x = \dfrac{1}{y}-\dfrac{y}{x^2}$ y $f_y = \dfrac{1}{x}-\dfrac{x}{y^2}$, y
$$x\left(\frac{1}{y}-\frac{y}{x^2}\right) + y\left(\frac{1}{x}-\frac{x}{y^2}\right)
= \frac{x}{y}-\frac{y}{x}+\frac{y}{x}-\frac{x}{y} = 0$$
Grado 0 significa que la función solo depende del cociente $x/y$, que es lo que se ve al
escribirla como $x/y + y/x$.
\end{solucion}

\begin{ejercicio}
El coste de una empresa es $C(x,y) = 3x^2 + xy + 2y^2$. Estimar el cambio en el coste al
pasar de $(10,5)$ a $(10{,}2\ ,\ 4{,}9)$.
\end{ejercicio}

\begin{solucion}
$C_x = 6x+y = 65$ y $C_y = x+4y = 30$ en $(10,5)$. Con $\Delta x = 0{,}2$ y
$\Delta y = -0{,}1$:
$$\Delta C \approx 65\cdot 0{,}2 + 30\cdot(-0{,}1) = 13 - 3 = 10$$
El coste sube unas 10 unidades. El valor exacto es 10,12, así que el error de la
aproximación es del 1,2\,\%, coherente con incrementos del orden del 2\,\%.
\end{solucion}
```

El cálculo diferencial en varias variables está desarrollado en \cite{alvarez2020},
\cite{stewart2002} y \cite{sydsaeter2012}, con problemas resueltos en
\cite{cabello2019} y \cite{besada2001}.
