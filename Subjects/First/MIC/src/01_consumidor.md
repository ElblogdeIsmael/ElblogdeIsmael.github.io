# El consumidor

Capítulo 1 del programa. La formulación del modelo, las preferencias y la función de
utilidad, el conjunto de oportunidades y la restricción presupuestaria, y el equilibrio
del consumidor.

## Formulación del modelo

El modelo del consumidor tiene tres piezas y una pregunta:

| Pieza | Qué representa |
| --- | --- |
| Cesta de bienes | lo que se puede elegir: $(x_1,x_2)$ |
| Preferencias | cómo ordena el consumidor las cestas |
| Restricción presupuestaria | qué cestas puede pagar |

Y la pregunta es cuál de las cestas asequibles prefiere. El modelo supone
**racionalidad**, entendida en un sentido preciso y limitado: que las preferencias sean
completas y transitivas, no que el consumidor sea infalible ni egoísta.

## Preferencias

```{=latex}
\begin{definicion}[Axiomas de las preferencias]
\begin{itemize}
\item \emph{Completitud}: dadas dos cestas, el consumidor prefiere una o es indiferente.
\item \emph{Transitividad}: si prefiere $A$ a $B$ y $B$ a $C$, prefiere $A$ a $C$.
\item \emph{Monotonía}: más cantidad de un bien es preferible, si el bien es deseable.
\item \emph{Convexidad}: las mezclas se prefieren a los extremos.
\end{itemize}
\end{definicion}
```

**La transitividad es la que hace posible el modelo.** Sin ella no existiría una cesta
óptima: se podría dar un ciclo de preferencias en el que cada cesta es superada por otra.

### Curvas de indiferencia

Una curva de indiferencia une las cestas entre las que el consumidor es indiferente.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.4cm, height=6.0cm, axis lines=left,
  xlabel={$x_1$}, ylabel={$x_2$},
  xmin=0, xmax=6, ymin=0, ymax=6,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=120,
]
\addplot[thick, domain=0.35:6] {2/x};
\addplot[thick, domain=0.7:6] {4/x};
\addplot[thick, domain=1.2:6] {7/x};
\draw[->, >=stealth] (axis cs:1.2,1.2) -- (axis cs:2.3,2.3);
\node[font=\scriptsize, anchor=west] at (axis cs:2.35,2.35) {mayor utilidad};
\node[font=\scriptsize, anchor=west] at (axis cs:4.3,0.6) {$U_1$};
\node[font=\scriptsize, anchor=west] at (axis cs:4.3,1.15) {$U_2$};
\node[font=\scriptsize, anchor=west] at (axis cs:4.3,1.85) {$U_3$};
\end{axis}
\end{tikzpicture}
\end{center}
```

| Propiedad | Razón |
| --- | --- |
| No se cortan | dos cortes contradirían la transitividad |
| Tienen pendiente negativa | por monotonía: menos de un bien exige más del otro |
| Las más alejadas del origen son mejores | ídem |
| Son convexas hacia el origen | por el axioma de convexidad |

### Función de utilidad

Una función que asigna un número a cada cesta respetando el orden de las preferencias.

```{=latex}
\begin{anotacion}
La utilidad es \textbf{ordinal}, no cardinal: lo único que importa es el orden que
induce. Cualquier transformación monótona creciente de $U$ representa las mismas
preferencias, así que decir que una cesta da «el doble de utilidad» que otra no
significa nada. Y por eso las utilidades de dos personas no se pueden comparar ni sumar.
\end{anotacion}
```

| Tipo de preferencias | Función de utilidad | Curvas de indiferencia |
| --- | --- | --- |
| Cobb-Douglas | $U = x_1^{a}x_2^{b}$ | hipérbolas, convexas |
| Sustitutivos perfectos | $U = ax_1+bx_2$ | rectas |
| Complementarios perfectos | $U = \min(ax_1, bx_2)$ | ángulos rectos |
| Cuasilineales | $U = v(x_1)+x_2$ | traslaciones verticales |

### Relación marginal de sustitución

$$\RMS_{12} = -\frac{dx_2}{dx_1}\bigg|_{U=\text{cte}}
= \frac{\Umg_1}{\Umg_2}$$

Es la pendiente de la curva de indiferencia en valor absoluto, e indica **a cuántas
unidades del bien 2 está dispuesto a renunciar el consumidor por una unidad más del bien
1** manteniendo su satisfacción.

Que las curvas sean convexas equivale a que la $\RMS$ sea decreciente: cuanto más se
tiene del bien 1, menos del bien 2 se cede por otra unidad.

## Restricción presupuestaria

$$p_1x_1 + p_2x_2 \le m$$

| Elemento | Interpretación |
| --- | --- |
| Recta presupuestaria | las cestas que agotan la renta |
| Pendiente $-p_1/p_2$ | el coste de oportunidad del bien 1 en unidades del bien 2 |
| Cortes con los ejes | $m/p_1$ y $m/p_2$ |
| Conjunto de oportunidades | el triángulo bajo la recta |

| Cambio | Efecto sobre la recta |
| --- | --- |
| Sube $m$ | desplazamiento paralelo hacia fuera |
| Sube $p_1$ | gira hacia dentro pivotando sobre el eje vertical |
| Suben $m$, $p_1$ y $p_2$ en la misma proporción | **no cambia nada** |

**La última fila es un resultado central:** el conjunto de oportunidades depende de
precios y renta *relativos*, no de sus valores absolutos. Una inflación que multiplique
todo por igual no altera las decisiones reales, y de ahí la distinción entre magnitudes
nominales y reales.

## Equilibrio del consumidor

El problema:

$$\max\ U(x_1,x_2) \quad\text{sujeto a}\quad p_1x_1+p_2x_2 = m$$

Es el problema de Lagrange de Matemáticas Empresariales, y su solución interior cumple
la **condición de tangencia**:

$$\RMS_{12} = \frac{p_1}{p_2}
\qquad\Longleftrightarrow\qquad
\frac{\Umg_1}{p_1} = \frac{\Umg_2}{p_2}$$

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.4cm, height=6.0cm, axis lines=left,
  xlabel={$x_1$}, ylabel={$x_2$},
  xmin=0, xmax=6, ymin=0, ymax=6,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=120,
]
\addplot[thick, domain=0:5] {5 - x};
\addplot[domain=0.5:6] {1.5625/x};
\addplot[dashed, domain=0.28:6] {0.8/x};
\addplot[dashed, domain=0.85:6] {3.2/x};
\addplot[only marks, mark=*, mark size=1.4pt] coordinates {(2.5,2.5)};
\node[font=\scriptsize, anchor=west] at (axis cs:2.7,2.9) {óptimo};
\node[font=\scriptsize, anchor=west] at (axis cs:3.8,1.4) {recta presupuestaria};
\end{axis}
\end{tikzpicture}
\end{center}
```

La segunda forma de la condición es la que tiene lectura económica directa: **en el
óptimo, el último euro gastado en cada bien produce la misma utilidad**. Si no fuera
así, trasladar gasto del bien peor al mejor mejoraría la situación.

```{=latex}
\begin{ejemplo}[Cobb-Douglas]
Con $U = x_1^{a}x_2^{b}$, las utilidades marginales son
$\Umg_1 = a\,x_1^{a-1}x_2^{b}$ y $\Umg_2 = b\,x_1^{a}x_2^{b-1}$, así que
$\RMS = \dfrac{a\,x_2}{b\,x_1}$. Igualando a $p_1/p_2$ y usando la restricción:
$$x_1^{*} = \frac{a}{a+b}\cdot\frac{m}{p_1}, \qquad
x_2^{*} = \frac{b}{a+b}\cdot\frac{m}{p_2}$$

\medskip
El consumidor dedica al bien 1 una \textbf{proporción fija} de su renta, $a/(a+b)$, sea
cual sea el precio. Es la propiedad característica de la Cobb-Douglas y la razón de que
se use tanto: sus demandas son sencillas.
\end{ejemplo}
```

### Soluciones de esquina

La condición de tangencia supone que se consumen los dos bienes. Cuando no es así, el
óptimo está en un extremo de la recta presupuestaria.

| Situación | Óptimo |
| --- | --- |
| Sustitutivos perfectos con $p_1/p_2 \ne a/b$ | todo el gasto en el bien más barato por unidad de utilidad |
| Complementarios perfectos | en el vértice: $ax_1 = bx_2$, sin tangencia |
| Preferencias cuasilineales con renta baja | esquina en el bien no lineal |

**Es el error típico aplicar la tangencia sin comprobar que la solución es interior.**
Con sustitutivos perfectos, la condición no se cumple nunca salvo por casualidad, y el
óptimo es una esquina.

## Ejercicios

```{=latex}
\begin{ejercicio}
Un consumidor con $U = x_1 x_2$ tiene renta 100 y se enfrenta a precios $p_1=5$ y
$p_2=10$. Hallar la cesta óptima.
\end{ejercicio}

\begin{solucion}
Es Cobb-Douglas con $a=b=1$, así que gasta la mitad de la renta en cada bien:
$$x_1^{*} = \frac{1}{2}\cdot\frac{100}{5} = 10, \qquad
x_2^{*} = \frac{1}{2}\cdot\frac{100}{10} = 5$$
Comprobación de la tangencia: $\RMS = x_2/x_1 = 0{,}5$ y $p_1/p_2 = 0{,}5$. Y del
presupuesto: $5\cdot10 + 10\cdot5 = 100$.
\end{solucion}

\begin{ejercicio}
¿Por qué dos curvas de indiferencia no pueden cortarse?
\end{ejercicio}

\begin{solucion}
Si se cortasen en una cesta $C$, entonces $C$ sería indiferente a una cesta $A$ de la
primera curva y a una cesta $B$ de la segunda, luego por transitividad $A$ y $B$ serían
indiferentes entre sí. Pero están en curvas distintas, así que una es estrictamente
preferida a la otra por monotonía: contradicción.
\end{solucion}

\begin{ejercicio}
Un consumidor considera el café y el té sustitutivos perfectos, uno a uno. Si el café
cuesta 2 y el té 3, ¿qué compra?
\end{ejercicio}

\begin{solucion}
Con $U = x_1+x_2$ la $\RMS$ vale 1 en todo punto, y la relación de precios es $2/3$. Como
$1 > 2/3$, la curva de indiferencia es más inclinada que la recta presupuestaria y el
óptimo es la esquina: gasta toda la renta en café, $x_1 = m/2$ y $x_2 = 0$. La condición
de tangencia no se cumple en ningún punto, y aplicarla sin más habría dado un sistema
sin solución.
\end{solucion}
```

La teoría del consumidor está desarrollada en \cite{pindyck2018} y \cite{krugman2013},
con un tratamiento más formal en \cite{frank2009}.
