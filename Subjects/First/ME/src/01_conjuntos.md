# Conjuntos en $\mathbb{R}^n$. Funciones de varias variables

Tema 1 del programa. La topología de $\mathbb{R}^n$, las funciones reales de varias
variables, las clases que aparecen en economía y los conjuntos de nivel.

## El espacio $\mathbb{R}^n$

Un punto de $\mathbb{R}^n$ es una $n$-upla $(x_1,\dots,x_n)$. En economía cada
coordenada suele ser una cantidad: unidades producidas de cada bien, capital y trabajo,
o la composición de una cartera.

```{=latex}
\begin{definicion}[Distancia euclídea]
$$d(\mathbf{x},\mathbf{y}) = \sqrt{\sum_{i=1}^{n}(x_i-y_i)^2}$$
\end{definicion}
```

| Propiedad | Expresión |
| --- | --- |
| No negatividad | $d(\mathbf{x},\mathbf{y})\ge 0$, con igualdad solo si coinciden |
| Simetría | $d(\mathbf{x},\mathbf{y}) = d(\mathbf{y},\mathbf{x})$ |
| Desigualdad triangular | $d(\mathbf{x},\mathbf{z})\le d(\mathbf{x},\mathbf{y})+d(\mathbf{y},\mathbf{z})$ |

## Topología

```{=latex}
\begin{definicion}[Bola abierta]
$$B(\mathbf{a},r) = \{\mathbf{x}\in\mathbb{R}^n : d(\mathbf{x},\mathbf{a}) < r\}$$
\end{definicion}
```

Con la bola se clasifican los puntos respecto de un conjunto $A$:

| Tipo de punto | Condición |
| --- | --- |
| Interior | alguna bola centrada en él está contenida en $A$ |
| Exterior | alguna bola centrada en él no corta a $A$ |
| Frontera | toda bola centrada en él corta a $A$ y a su complementario |
| De acumulación | toda bola centrada en él contiene puntos de $A$ distintos de él |

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=1.0]
\draw[fill=black!8] plot[smooth cycle, tension=0.8]
  coordinates {(0,0) (2.2,0.4) (2.8,1.8) (1.2,2.6) (-0.4,1.6)};
\node[font=\scriptsize] at (1.2,1.3) {$A$};
\fill (0.9,0.9) circle (1.2pt);
\draw (0.9,0.9) circle (0.42);
\node[font=\scriptsize, anchor=north] at (0.9,0.4) {interior};
\fill (2.62,1.55) circle (1.2pt);
\draw (2.62,1.55) circle (0.42);
\node[font=\scriptsize, anchor=west] at (3.15,1.55) {frontera};
\fill (4.2,0.4) circle (1.2pt);
\draw (4.2,0.4) circle (0.42);
\node[font=\scriptsize, anchor=west] at (4.75,0.4) {exterior};
\end{tikzpicture}
\end{center}
```

Y con ellos, los tipos de conjunto:

| Conjunto | Definición |
| --- | --- |
| Abierto | todos sus puntos son interiores |
| Cerrado | contiene toda su frontera; su complementario es abierto |
| Acotado | está contenido en alguna bola |
| **Compacto** | cerrado **y** acotado |
| Convexo | el segmento entre dos puntos suyos está contenido en él |

```{=latex}
\begin{anotacion}
Abierto y cerrado \textbf{no son excluyentes ni exhaustivos}. En $\mathbb{R}^n$, el
vacío y el total son las dos cosas a la vez, y el intervalo $[0,1)$ no es ninguna. La
pregunta correcta nunca es «¿es abierto o cerrado?» sino «¿es abierto? ¿es cerrado?».
\end{anotacion}
```

**La compacidad es lo que importa en este temario**, porque es la hipótesis del teorema
de Weierstrass del tema 2: sin ella no hay garantía de que un problema de optimización
tenga solución.

La **convexidad** es la otra propiedad central. Los conjuntos de restricciones que
aparecen en economía —presupuestos, capacidades, mezclas— suelen ser convexos, y eso
es lo que hace que un óptimo local sea global.

## Funciones de varias variables

$$f:\ D\subseteq\mathbb{R}^n \longrightarrow \mathbb{R}$$

| Concepto | Definición |
| --- | --- |
| Dominio | el conjunto donde se define |
| Dominio maximal | el mayor subconjunto donde la expresión tiene sentido |
| Imagen | el conjunto de valores que toma |
| Gráfica | $\{(\mathbf{x}, f(\mathbf{x}))\}\subseteq\mathbb{R}^{n+1}$ |

Con $n=2$ la gráfica es una superficie en $\mathbb{R}^3$; con $n\ge3$ no se puede
dibujar, y por eso se recurre a los conjuntos de nivel.

Determinar el dominio maximal es identificar las restricciones que impone la expresión:

| Aparece | Restricción |
| --- | --- |
| Un cociente | el denominador no se anula |
| Una raíz de índice par | el radicando es no negativo |
| Un logaritmo | el argumento es estrictamente positivo |

## Clases de funciones

| Clase | Forma | Dónde aparece |
| --- | --- | --- |
| De variables separadas | $f(x,y) = g(x)+h(y)$ | costes independientes |
| Polinómica | suma de monomios | modelos sencillos |
| Racional | cociente de polinomios | ratios y elasticidades |
| Cobb-Douglas | $A x^{\alpha}y^{\beta}$ | producción y utilidad |
| Forma cuadrática | $Q(\mathbf{x}) = \mathbf{x}^{T}A\mathbf{x}$ | riesgo, aproximación de segundo orden |

### Formas cuadráticas

Con $A$ simétrica, la clasificación de $Q$ decide el carácter de los puntos críticos del
tema 4, así que conviene fijarla ya.

| Clase | Condición | Con los autovalores de $A$ |
| --- | --- | --- |
| Definida positiva | $Q(\mathbf{x})>0$ para todo $\mathbf{x}\ne 0$ | todos positivos |
| Definida negativa | $Q(\mathbf{x})<0$ para todo $\mathbf{x}\ne 0$ | todos negativos |
| Semidefinida positiva | $Q(\mathbf{x})\ge 0$ | no negativos, con alguno nulo |
| Semidefinida negativa | $Q(\mathbf{x})\le 0$ | no positivos, con alguno nulo |
| Indefinida | toma los dos signos | positivos y negativos |

El **criterio de los menores principales**, que evita calcular autovalores:

| Clase | Menores principales $\Delta_1,\Delta_2,\dots$ |
| --- | --- |
| Definida positiva | todos positivos |
| Definida negativa | signos alternos empezando por $\Delta_1<0$ |

```{=latex}
\begin{anotacion}
El criterio de los menores principales \textbf{solo caracteriza los casos definidos}. Si
algún menor se anula no decide, y hay que ir a los autovalores o a los menores
principales de todos los órdenes. Aplicarlo a ciegas es la forma habitual de clasificar
mal una hessiana.
\end{anotacion}
```

```{=latex}
\begin{ejemplo}
$Q(x,y) = 2x^2 + 2xy + 3y^2$ tiene matriz
$A = \begin{pmatrix}2 & 1\\ 1 & 3\end{pmatrix}$.
Los menores son $\Delta_1 = 2 > 0$ y $\Delta_2 = 6-1 = 5 > 0$: definida positiva. Se
comprueba con los autovalores, que son $(5\pm\sqrt5)/2$, los dos positivos.
\end{ejemplo}
```

## Conjuntos de nivel

```{=latex}
\begin{definicion}
El conjunto de nivel $k$ de $f$ es
$$C_k = \{\mathbf{x}\in D : f(\mathbf{x}) = k\}$$
Con $n=2$ se llama curva de nivel, y con $n=3$, superficie de nivel.
\end{definicion}
```

Son la forma de ver una función de dos variables sin dibujar en tres dimensiones: se
corta la superficie por planos horizontales y se proyecta. Es la técnica de los mapas
topográficos, y en economía tiene nombres propios:

| Función | Sus curvas de nivel se llaman |
| --- | --- |
| Utilidad | curvas de indiferencia |
| Producción | isocuantas |
| Coste | isocostes |
| Beneficio | isobeneficios |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.6cm, height=6.4cm,
  xlabel={$x$}, ylabel={$y$},
  xmin=0.15, xmax=4, ymin=0.15, ymax=4,
  tick label style={font=\scriptsize}, label style={font=\small},
  axis lines=left, samples=100,
]
\addplot[thick, domain=0.3:4] {1/x};
\addplot[thick, domain=0.55:4] {2.25/x};
\addplot[thick, domain=1.05:4] {4/x};
\node[font=\scriptsize, anchor=west] at (axis cs:2.6,0.55) {$xy=1$};
\node[font=\scriptsize, anchor=west] at (axis cs:2.6,1.1) {$xy=2{,}25$};
\node[font=\scriptsize, anchor=west] at (axis cs:2.6,1.75) {$xy=4$};
\end{axis}
\end{tikzpicture}
\end{center}
```

Las curvas de nivel de una Cobb-Douglas son hipérbolas, y su forma refleja dos hechos
económicos: que se pueden sustituir insumos manteniendo la producción, y que la
sustitución es cada vez más costosa según se agota uno de los dos.

## Ejercicios

```{=latex}
\begin{ejercicio}
Hallar el dominio maximal de
$f(x,y) = \dfrac{\ln(x+y)}{\sqrt{4-x^2-y^2}}$ y decir si es abierto, cerrado o
compacto.
\end{ejercicio}

\begin{solucion}
El logaritmo exige $x+y>0$ y la raíz del denominador, $4-x^2-y^2>0$, es decir
$x^2+y^2<4$. El dominio es la intersección del semiplano abierto sobre la recta $y=-x$
con el interior del círculo de radio 2.

\medskip
Es \textbf{abierto}, por ser intersección de dos abiertos, y está acotado. No es cerrado
ni compacto: le falta toda su frontera.
\end{solucion}

\begin{ejercicio}
Clasificar $Q(x,y,z) = x^2 + 2y^2 + 3z^2 - 2xy$.
\end{ejercicio}

\begin{solucion}
La matriz es
$A=\begin{pmatrix}1&-1&0\\-1&2&0\\0&0&3\end{pmatrix}$.
Los menores principales son $\Delta_1 = 1$, $\Delta_2 = 2-1 = 1$ y
$\Delta_3 = 3\cdot 1 = 3$: todos positivos, luego $Q$ es definida positiva. Se comprueba
completando cuadrados: $Q = (x-y)^2 + y^2 + 3z^2$, suma de cuadrados que solo se anula
en el origen.
\end{solucion}

\begin{ejercicio}
Dibujar las curvas de nivel de $f(x,y) = x^2+y^2$ y decir cuáles de esos conjuntos son
compactos.
\end{ejercicio}

\begin{solucion}
Son circunferencias centradas en el origen de radio $\sqrt{k}$ para $k>0$, el origen
para $k=0$ y el vacío para $k<0$. Todas son cerradas y acotadas, luego \textbf{todas son
compactas}, incluido el punto y el vacío. Nótese que el conjunto $\{f\le k\}$, el disco,
también es compacto, mientras que $\{f\ge k\}$ es cerrado y no acotado.
\end{solucion}
```

El tratamiento de la topología de $\mathbb{R}^n$ y de las funciones de varias variables
está en \cite{alvarez2020} y \cite{sydsaeter2012}, con problemas resueltos en
\cite{cabello2019} y \cite{besada2001}.
