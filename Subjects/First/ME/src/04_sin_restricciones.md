# Optimización sin restricciones

Tema 4 del programa. Puntos críticos, las condiciones necesaria y suficiente de extremo
local, los puntos de silla y las funciones cóncavas y convexas.

## Puntos críticos

```{=latex}
\begin{teorema}[Condición necesaria de primer orden]
Si $f$ es diferenciable y tiene un extremo local en $\mathbf{a}$ interior al dominio,
entonces $\nabla f(\mathbf{a}) = \mathbf{0}$.
\end{teorema}

\begin{definicion}[Punto crítico]
Punto donde el gradiente se anula, o donde alguna parcial no existe.
\end{definicion}
```

**Es necesaria y no suficiente.** El gradiente se anula en máximos, en mínimos y en
puntos de silla, así que un punto crítico es solo un candidato.

Y la condición exige que el punto sea **interior**: en la frontera del dominio puede
haber extremos con gradiente no nulo, que es lo que hace falta el tema 5.

```{=latex}
\begin{ejemplo}
$f(x,y) = x^3$ tiene $\nabla f = (3x^2, 0)$, que se anula en toda la recta $x=0$. Ninguno
de esos puntos es extremo: la función crece al aumentar $x$ y decrece al reducirlo. Que
el gradiente se anule no dice nada por sí solo.
\end{ejemplo}
```

## Condición suficiente de segundo orden

```{=latex}
\begin{teorema}
Sea $\mathbf{a}$ un punto crítico de $f$, con segundas derivadas continuas, y sea
$H = \Hess f(\mathbf{a})$.
\begin{itemize}
\item Si $H$ es definida positiva, $\mathbf{a}$ es mínimo local estricto.
\item Si $H$ es definida negativa, $\mathbf{a}$ es máximo local estricto.
\item Si $H$ es indefinida, $\mathbf{a}$ es punto de silla.
\item Si $H$ es semidefinida, el criterio \textbf{no decide}.
\end{itemize}
\end{teorema}
```

Con dos variables, la regla se escribe con el determinante y la traza:

$$D = f_{xx}f_{yy} - f_{xy}^2$$

| $D$ | $f_{xx}$ | Conclusión |
| --- | --- | --- |
| $>0$ | $>0$ | mínimo local |
| $>0$ | $<0$ | máximo local |
| $<0$ | --- | punto de silla |
| $=0$ | --- | no decide |

```{=latex}
\begin{anotacion}
El caso $D=0$ hay que estudiarlo aparte, y no es raro. Para $f(x,y)=x^4+y^4$ y para
$g(x,y)=x^4-y^4$ el origen es punto crítico con hessiana nula: en el primero es mínimo y
en el segundo es silla. El criterio de segundo orden es ciego a lo que decide el cuarto.
\end{anotacion}
```

### Puntos de silla

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.4cm, height=6.0cm,
  xlabel={$x$}, ylabel={$y$},
  xmin=-2.2, xmax=2.2, ymin=-2.2, ymax=2.2,
  axis lines=middle, xtick=\empty, ytick=\empty, samples=120,
]
\addplot[domain=1.05:2.2] {sqrt(x^2-1)};
\addplot[domain=1.05:2.2] {-sqrt(x^2-1)};
\addplot[domain=-2.2:-1.05] {sqrt(x^2-1)};
\addplot[domain=-2.2:-1.05] {-sqrt(x^2-1)};
\addplot[dashed, domain=-2.2:2.2] {sqrt(x^2+1)};
\addplot[dashed, domain=-2.2:2.2] {-sqrt(x^2+1)};
\addplot[dotted, domain=-2.2:2.2] {x};
\addplot[dotted, domain=-2.2:2.2] {-x};
\node[font=\scriptsize, anchor=west] at (axis cs:1.55,0.75) {$f=1$};
\node[font=\scriptsize, anchor=west] at (axis cs:0.15,1.25) {$f=-1$};
\node[font=\scriptsize, anchor=west] at (axis cs:1.5,1.75) {$f=0$};
\end{axis}
\end{tikzpicture}
\end{center}
```

El ejemplo canónico es $f(x,y) = x^2-y^2$ en el origen: siguiendo el eje $x$ hay un
mínimo y siguiendo el eje $y$ un máximo. Su hessiana es
$\operatorname{diag}(2,-2)$, indefinida. Sus curvas de nivel son las hipérbolas de la
figura, y las dos rectas punteadas —el nivel cero— separan la zona donde la función es
positiva de aquella en que es negativa: el origen está en la frontera de las dos, que es
justo lo que impide que sea extremo.

**De ahí sale la advertencia práctica:** comprobar el comportamiento a lo largo de unas
cuantas direcciones no basta para concluir que hay extremo. Hay funciones con mínimo a
lo largo de **toda recta** por el origen y que no tienen mínimo allí.

## Funciones cóncavas y convexas

```{=latex}
\begin{definicion}
$f$ es convexa en un conjunto convexo $C$ si para todos $\mathbf{x},\mathbf{y}\in C$ y
$t\in[0,1]$
$$f(t\mathbf{x}+(1-t)\mathbf{y}) \le t f(\mathbf{x}) + (1-t)f(\mathbf{y})$$
Es cóncava si se cumple la desigualdad contraria.
\end{definicion}
```

Geométricamente: **una función es convexa si su gráfica queda por debajo de sus
cuerdas**, y cóncava si queda por encima.

```{=latex}
\begin{proposicion}[Caracterización con la hessiana]
Si $f$ tiene segundas derivadas continuas en un abierto convexo:
\begin{itemize}
\item $f$ es convexa $\iff$ $\Hess f$ es semidefinida positiva en todo punto.
\item $f$ es cóncava $\iff$ $\Hess f$ es semidefinida negativa en todo punto.
\end{itemize}
\end{proposicion}
```

Y el resultado que hace útil todo lo anterior:

```{=latex}
\begin{teorema}
Si $f$ es convexa en un convexo $C$, todo mínimo local es \textbf{global}. Si es
cóncava, todo máximo local es global. Si además es estrictamente convexa o cóncava, el
óptimo es único.
\end{teorema}
```

**Ese teorema es la única forma práctica de pasar de local a global** en este temario.
Sin convexidad, comprobar que un punto es máximo global exige comparar con todos los
demás candidatos y con el comportamiento en el infinito.

| Función | Carácter |
| --- | --- |
| Lineal | cóncava y convexa a la vez |
| Forma cuadrática definida positiva | estrictamente convexa |
| $e^x$, $x^2$, $-\ln x$ | convexas |
| $\ln x$, $\sqrt{x}$ | cóncavas |
| Cobb-Douglas con $\alpha+\beta\le1$ | cóncava |

La última fila es la que da sentido económico: **rendimientos no crecientes equivalen a
concavidad**, y la concavidad es lo que garantiza que el óptimo de la empresa esté bien
definido.

## Procedimiento completo

1. Calcular $\nabla f$ y resolver $\nabla f = \mathbf{0}$: los puntos críticos.
2. Calcular $\Hess f$ y evaluarla en cada punto crítico.
3. Clasificarla con los menores principales.
4. Concluir el carácter local de cada punto.
5. Para el carácter global, comprobar la convexidad o concavidad, o estudiar el
   comportamiento en el infinito.

```{=latex}
\begin{ejemplo}
$f(x,y) = x^3 + y^3 - 3xy$.

\medskip
\emph{Paso 1}: $\nabla f = (3x^2-3y,\ 3y^2-3x)$. De la primera, $y = x^2$; sustituyendo
en la segunda, $x^4 = x$, es decir $x(x^3-1)=0$, con soluciones $x=0$ y $x=1$. Los
puntos críticos son $(0,0)$ y $(1,1)$.

\medskip
\emph{Paso 2}: $\Hess f = \begin{pmatrix}6x & -3\\ -3 & 6y\end{pmatrix}$.

\medskip
En $(0,0)$: $D = 0 - 9 = -9 < 0$, punto de silla.

\medskip
En $(1,1)$: $D = 36-9 = 27 > 0$ y $f_{xx} = 6 > 0$, mínimo local, con $f(1,1) = -1$.

\medskip
\emph{Paso 5}: no es global, porque $f(x,0) = x^3 \to -\infty$. La función no está
acotada inferiormente y no tiene mínimo global.
\end{ejemplo}
```

El último paso es el que se olvida. Un mínimo local no es un mínimo, y comprobarlo
cuesta una línea.

## Aplicación económica

El problema típico de la empresa:

$$\max\ B(x,y) = I(x,y) - C(x,y)$$

La condición de primer orden dice que **el ingreso marginal iguala al coste marginal**
en cada producto, que es la traducción exacta de $\nabla B = 0$. Y la de segundo orden,
que la hessiana sea definida negativa, es la condición de que el beneficio sea cóncavo,
sin la cual el punto podría ser un mínimo.

```{=latex}
\begin{ejemplo}
Una empresa vende dos productos con precios $p_1 = 100-2x$ y $p_2 = 80-y$, y coste
$C = 10x+10y$. El beneficio es
$$B = (100-2x)x + (80-y)y - 10x - 10y = 90x - 2x^2 + 70y - y^2$$
De $\nabla B = (90-4x,\ 70-2y) = 0$ salen $x = 22{,}5$ e $y = 35$. La hessiana es
$\operatorname{diag}(-4,-2)$, definida negativa en todo punto, así que $B$ es
estrictamente cóncava y el máximo es \textbf{global y único}, con
$B = 1012{,}5 + 1225 = 2237{,}5$.
\end{ejemplo}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Hallar y clasificar los puntos críticos de $f(x,y) = x^2 + y^2 - 4x + 6y + 5$.
\end{ejercicio}

\begin{solucion}
$\nabla f = (2x-4,\ 2y+6) = 0$ da el único punto crítico $(2,-3)$. La hessiana es
$\operatorname{diag}(2,2)$, definida positiva en todo punto, así que $f$ es
estrictamente convexa y $(2,-3)$ es el mínimo \textbf{global}, con $f = -8$. Se confirma
completando cuadrados: $f = (x-2)^2+(y+3)^2-8$.
\end{solucion}

\begin{ejercicio}
Clasificar el origen para $f(x,y) = x^4 + y^4$ y para $g(x,y) = x^4 - y^4$.
\end{ejercicio}

\begin{solucion}
En los dos casos el gradiente y la hessiana se anulan en el origen, así que el criterio
de segundo orden no decide. Directamente: $f\ge0$ con igualdad solo en el origen, luego
es mínimo global estricto. Y $g(x,0) = x^4 > 0$ mientras $g(0,y) = -y^4 < 0$, así que
el origen es punto de silla. Misma hessiana, conclusiones opuestas.
\end{solucion}

\begin{ejercicio}
Una empresa produce con $Q = K^{0{,}3}L^{0{,}5}$, paga 3 por unidad de capital y 2 por
unidad de trabajo, y vende a precio 10. Plantear el problema y decir si el óptimo será
global.
\end{ejercicio}

\begin{solucion}
$\max\ B(K,L) = 10K^{0{,}3}L^{0{,}5} - 3K - 2L$ sobre $K,L>0$.

\medskip
Como $0{,}3+0{,}5 = 0{,}8 < 1$, la Cobb-Douglas es estrictamente cóncava en el ortante
positivo, y restarle una función lineal conserva la concavidad estricta. Por tanto el
punto crítico que salga de $\nabla B = 0$ es el máximo global y es único, sin necesidad
de comprobar la hessiana punto a punto.
\end{solucion}
```

La optimización sin restricciones está desarrollada en \cite{barbolla2006} y
\cite{sydsaeter2012}, con problemas resueltos en \cite{cabello2019} y
\cite{garcia2010}.
