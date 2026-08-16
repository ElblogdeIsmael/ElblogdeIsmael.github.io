# Optimización con restricciones de igualdad

Tema 5 del programa. El método de sustitución, los multiplicadores de Lagrange con sus
puntos singulares, regulares y estacionarios, la determinación de extremos locales y
globales, y la interpretación económica de los multiplicadores.

## El problema

$$\text{opt}\ f(\mathbf{x}) \quad\text{sujeto a}\quad
g_1(\mathbf{x}) = b_1,\ \dots,\ g_m(\mathbf{x}) = b_m$$

Las restricciones son igualdades, así que el conjunto factible es una superficie, no una
región. La condición de primer orden del tema 4 **deja de valer**: el gradiente no tiene
por qué anularse en el óptimo, porque solo se compite en las direcciones que la
restricción permite.

## Método de sustitución

Si de la restricción se puede despejar una variable, se sustituye en la función objetivo
y queda un problema sin restricciones con una variable menos.

```{=latex}
\begin{ejemplo}
$\max\ xy$ sujeto a $x+y=10$. Despejando $y = 10-x$:
$$h(x) = x(10-x) = 10x - x^2$$
$h'(x) = 10-2x = 0$ da $x=5$, y $h''=-2<0$, así que es máximo. La solución es
$(5,5)$ con valor 25.
\end{ejemplo}
```

| Ventaja | Inconveniente |
| --- | --- |
| Reduce a un problema conocido | solo sirve si se puede despejar |
| No introduce variables nuevas | despejar puede romper la simetría del problema |
| Directo con restricciones lineales | inviable con varias restricciones no lineales |

**Y una trampa:** al despejar hay que arrastrar el dominio. Si la restricción es
$x^2+y^2=1$ y se despeja $y=\sqrt{1-x^2}$, se está perdiendo media circunferencia.

## Multiplicadores de Lagrange

La idea geométrica: en un óptimo restringido, **la curva de nivel de $f$ es tangente a
la restricción**. Si se cortasen, se podría avanzar a lo largo de la restricción hacia
un nivel mejor. Tangencia significa gradientes paralelos.

$$\nabla f(\mathbf{a}) = \lambda\,\nabla g(\mathbf{a})$$

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.6cm, height=6.2cm,
  xlabel={$x$}, ylabel={$y$},
  xmin=0, xmax=5.4, ymin=0, ymax=5.4,
  axis lines=left, tick label style={font=\scriptsize}, samples=120,
]
\addplot[thick, domain=0:5] {5 - x};
\addplot[domain=0.5:5] {2.25/x};
\addplot[dashed, domain=0.3:5] {1/x};
\addplot[dashed, domain=1.05:5] {4/x};
\addplot[only marks, mark=*, mark size=1.4pt] coordinates {(2.5,2.5)};
\node[font=\scriptsize, anchor=west] at (axis cs:2.7,2.85) {tangencia};
\node[font=\scriptsize, anchor=west] at (axis cs:3.6,1.7) {$g=b$};
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{definicion}[Función lagrangiana]
$$L(\mathbf{x},\boldsymbol{\lambda}) = f(\mathbf{x})
- \sum_{j=1}^{m}\lambda_j\,\big(g_j(\mathbf{x}) - b_j\big)$$
\end{definicion}

\begin{teorema}[Condición necesaria de Lagrange]
Si $\mathbf{a}$ es extremo local del problema restringido y es un \emph{punto regular},
existen multiplicadores $\lambda_1,\dots,\lambda_m$ tales que
$$\nabla L(\mathbf{a},\boldsymbol{\lambda}) = \mathbf{0}$$
es decir, se anulan las parciales respecto de las $x_i$ y respecto de los $\lambda_j$
—que devuelven las restricciones—.
\end{teorema}
```

### Puntos regulares y singulares

```{=latex}
\begin{definicion}
$\mathbf{a}$ es un \emph{punto regular} del sistema de restricciones si los gradientes
$\nabla g_1(\mathbf{a}),\dots,\nabla g_m(\mathbf{a})$ son linealmente independientes. En
otro caso es \emph{singular}.
\end{definicion}
```

**La regularidad es una hipótesis del teorema, no un tecnicismo.** En un punto singular
puede haber un extremo sin que exista ningún multiplicador, y el método lo pierde.

```{=latex}
\begin{ejemplo}
$\min\ x$ sujeto a $y^2 = x^3$. El óptimo está en el origen, donde
$\nabla g = (-3x^2, 2y) = (0,0)$: es singular. La condición de Lagrange exigiría
$(1,0) = \lambda(0,0)$, imposible. El método no encuentra un óptimo que existe.
\end{ejemplo}
```

Por eso el procedimiento correcto tiene **dos listas de candidatos**: los puntos
estacionarios del lagrangiano y los puntos singulares del sistema de restricciones.

### Puntos estacionarios

Los que resuelven $\nabla L = \mathbf{0}$. Con una restricción y dos variables, el
sistema es

$$\begin{cases}
f_x = \lambda\,g_x \\
f_y = \lambda\,g_y \\
g(x,y) = b
\end{cases}$$

Tres ecuaciones y tres incógnitas. La técnica habitual es dividir las dos primeras para
eliminar $\lambda$, con cuidado de tratar aparte el caso en que algún $g_i$ se anule.

## Condición suficiente

Se estudia la **hessiana orlada** del lagrangiano, o equivalentemente la hessiana de $L$
restringida al espacio tangente a las restricciones.

Con una restricción y dos variables:

$$\bar{H} = \begin{pmatrix}
0 & g_x & g_y \\
g_x & L_{xx} & L_{xy} \\
g_y & L_{yx} & L_{yy}
\end{pmatrix}$$

| $\det\bar{H}$ | Conclusión |
| --- | --- |
| $>0$ | máximo local |
| $<0$ | mínimo local |
| $=0$ | no decide |

```{=latex}
\begin{anotacion}
Los signos van \textbf{al revés} que en el caso sin restricciones, y es el error más
repetido del tema. La razón es que la orla añade una fila y una columna, lo que cambia
la paridad del determinante.
\end{anotacion}
```

Cuando la estructura del problema lo permite, hay un camino más corto: si $f$ es cóncava
y las restricciones lineales, el estacionario es **máximo global** sin más comprobación.

## Extremos globales

El procedimiento completo cuando el conjunto factible es compacto:

1. Comprobar que $f$ es continua y el conjunto factible compacto: por Weierstrass hay
   máximo y mínimo.
2. Hallar los puntos estacionarios del lagrangiano.
3. Hallar los puntos singulares del sistema de restricciones.
4. Evaluar $f$ en todos los candidatos.
5. El mayor valor es el máximo global y el menor el mínimo global.

**Con conjunto factible compacto no hace falta la condición de segundo orden.** Basta
comparar valores, y es más rápido y más seguro que calcular hessianas orladas.

```{=latex}
\begin{ejemplo}
Optimizar $f(x,y) = x^2+y^2$ sujeto a $x^2+xy+y^2 = 3$.

\medskip
El conjunto factible es una elipse: compacto. Lagrange:
$$2x = \lambda(2x+y), \qquad 2y = \lambda(x+2y), \qquad x^2+xy+y^2=3$$
Restando las dos primeras: $2(x-y) = \lambda(x-y)$, así que $x=y$ o $\lambda=2$.

\medskip
Con $x=y$: la restricción da $3x^2=3$, es decir $(1,1)$ y $(-1,-1)$, con $f=2$.

\medskip
Con $\lambda=2$: la primera ecuación da $2x = 4x+2y$, o sea $y=-x$; la restricción da
$x^2=3$, es decir $(\sqrt3,-\sqrt3)$ y $(-\sqrt3,\sqrt3)$, con $f=6$.

\medskip
No hay puntos singulares, porque $\nabla g$ solo se anula en el origen y este no está en
la elipse. Por tanto el mínimo global es 2 y el máximo global 6.
\end{ejemplo}
```

## Interpretación económica del multiplicador

```{=latex}
\begin{teorema}[Del sobre]
Si $V(b)$ es el valor óptimo del problema en función del término independiente de la
restricción, entonces
$$\frac{dV}{db} = \lambda$$
\end{teorema}
```

**El multiplicador es el precio sombra del recurso**: lo que mejora el óptimo por cada
unidad adicional de restricción disponible.

| Contexto | Qué mide $\lambda$ |
| --- | --- |
| Maximizar utilidad con restricción de renta | utilidad marginal de la renta |
| Minimizar coste con restricción de producción | coste marginal de producir |
| Maximizar producción con restricción de presupuesto | producto marginal del dinero |

De ahí sale una regla de decisión inmediata: **si $\lambda$ supera el precio de mercado
del recurso, conviene comprar más**; si no lo supera, conviene venderlo.

Y con varias restricciones, comparar los $\lambda_j$ dice **cuál de los recursos limita
de verdad**: el de multiplicador mayor es donde una unidad extra rinde más.

```{=latex}
\begin{ejemplo}
$\max\ U(x,y)=xy$ sujeto a $2x+4y = 100$, una restricción de presupuesto con precios 2 y
4 y renta 100.

\medskip
Lagrange: $y = 2\lambda$ y $x = 4\lambda$, y sustituyendo en la restricción,
$8\lambda+8\lambda = 100$, de donde $\lambda = 6{,}25$, $x = 25$ e $y = 12{,}5$, con
$U = 312{,}5$.

\medskip
El multiplicador dice que una unidad más de renta aportaría unas 6,25 unidades de
utilidad. Comprobación: con renta 101 el óptimo da $U = 318{,}78$, y la diferencia es
6,28. La aproximación es buena porque el incremento es pequeño.
\end{ejemplo}
```

Nótese además el resultado clásico que asoma: en el óptimo,
$U_x/p_x = U_y/p_y = \lambda$. **La utilidad marginal por euro gastado se iguala en
todos los bienes**, y esa es la ley de la igualdad de las utilidades marginales
ponderadas.

## Ejercicios

```{=latex}
\begin{ejercicio}
Optimizar $f(x,y)=x+y$ sobre la circunferencia $x^2+y^2=2$.
\end{ejercicio}

\begin{solucion}
Lagrange: $1 = 2\lambda x$ y $1 = 2\lambda y$, de donde $x = y$ —nótese que
$\lambda\ne0$, porque si lo fuera la primera ecuación sería $1=0$—. La restricción da
$2x^2=2$, es decir $(1,1)$ y $(-1,-1)$.

\medskip
El conjunto es compacto, así que basta evaluar: $f(1,1)=2$ es el máximo global y
$f(-1,-1)=-2$ el mínimo. No hay singulares: $\nabla g = (2x,2y)$ solo se anula en el
origen, que no está en la circunferencia.
\end{solucion}

\begin{ejercicio}
Una empresa produce $Q = \sqrt{KL}$ y quiere producir 100 unidades al mínimo coste, con
precios $r=4$ para el capital y $w=1$ para el trabajo. Hallar el óptimo e interpretar el
multiplicador.
\end{ejercicio}

\begin{solucion}
$\min\ 4K+L$ sujeto a $\sqrt{KL} = 100$, es decir $KL = 10\,000$.

\medskip
Lagrange con $g = KL$: $4 = \lambda L$ y $1 = \lambda K$, de donde $L = 4K$. La
restricción da $4K^2 = 10\,000$, es decir $K = 50$ y $L = 200$, con coste
$200+200 = 400$.

\medskip
De $1 = \lambda K$ sale $\lambda = 1/50 = 0{,}02$. Como aquí se minimiza, el
multiplicador es el \textbf{coste marginal}: producir una unidad más de $Q$ costaría
unos 0,02 por cada unidad de $KL$, es decir unos 4 euros por unidad de producto tras
aplicar la regla de la cadena. Que el gasto se reparta a partes iguales entre los dos
factores es propio de la Cobb-Douglas con exponentes iguales.
\end{solucion}

\begin{ejercicio}
¿Por qué hay que buscar también los puntos singulares?
\end{ejercicio}

\begin{solucion}
Porque el teorema de Lagrange solo garantiza la existencia de multiplicadores en puntos
regulares. En un punto singular, los gradientes de las restricciones son linealmente
dependientes y la condición $\nabla f = \sum\lambda_j\nabla g_j$ puede ser imposible
aunque allí haya un extremo. Omitirlos deja fuera candidatos válidos y puede dar por
óptimo global uno que no lo es.
\end{solucion}
```

El método de los multiplicadores de Lagrange y su interpretación económica están
desarrollados en \cite{barbolla2006}, \cite{sydsaeter2012} y \cite{garcia2010}, con
problemas resueltos en \cite{cabello2019} y \cite{peris1986}.
