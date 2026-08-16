# Optimización: el método gráfico

Tema 2 del programa. Extremos locales y globales, el teorema de Weierstrass, la
optimización con restricciones de desigualdad por el método gráfico y la programación
lineal en dos variables.

## Extremos

```{=latex}
\begin{definicion}
Sea $f: D\subseteq\mathbb{R}^n\to\mathbb{R}$ y $\mathbf{a}\in D$.
\begin{itemize}
\item $\mathbf{a}$ es \emph{máximo global} si $f(\mathbf{a})\ge f(\mathbf{x})$ para todo
      $\mathbf{x}\in D$.
\item Es \emph{máximo local} si la desigualdad se cumple en alguna bola centrada en
      $\mathbf{a}$.
\end{itemize}
Los mínimos se definen igual, con la desigualdad al revés.
\end{definicion}
```

Todo extremo global es local, y no al revés. La distinción es la que decide si un
método sirve: las condiciones de los temas 4 y 5 son **locales**, y para concluir que un
óptimo es global hacen falta hipótesis adicionales, normalmente de convexidad.

```{=latex}
\begin{teorema}[Weierstrass]
Si $f$ es continua en un conjunto compacto $K\subseteq\mathbb{R}^n$ no vacío, entonces
$f$ alcanza en $K$ su máximo y su mínimo absolutos.
\end{teorema}
```

**Las tres hipótesis hacen falta**, y quitarlas se ve enseguida:

| Hipótesis que falla | Contraejemplo en $\mathbb{R}$ |
| --- | --- |
| Continuidad | $f(x)=1/x$ en $[-1,1]$ extendida con $f(0)=0$ |
| Cerrado | $f(x)=x$ en $(0,1)$: no alcanza extremos |
| Acotado | $f(x)=x$ en $[0,\infty)$: no está acotada |

El teorema es de **existencia**: garantiza que hay solución y no dice dónde. Su papel es
justificar la búsqueda antes de emprenderla, y por eso se enuncia siempre al principio
de un problema de optimización.

## Optimización con restricciones de desigualdad

El problema general:

$$\max\ f(x,y) \quad \text{sujeto a}\quad
\begin{cases} g_1(x,y)\le b_1 \\ \ \ \vdots \\ g_m(x,y)\le b_m \end{cases}$$

El **conjunto factible** es el de los puntos que cumplen todas las restricciones, y el
método gráfico en dos variables consiste en dibujarlo y superponer las curvas de nivel
de la función objetivo.

### El procedimiento

1. Dibujar el conjunto factible, restricción a restricción.
2. Comprobar que es **no vacío**: si lo es, el problema es infactible.
3. Comprobar si es **compacto**: si lo es, Weierstrass garantiza la solución.
4. Dibujar varias curvas de nivel de $f$ e identificar en qué dirección crece.
5. Desplazar la curva de nivel en esa dirección hasta el último punto factible.
6. Ese punto es el óptimo; se calculan sus coordenadas y el valor de $f$.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=9.4cm, height=6.6cm,
  xlabel={$x$}, ylabel={$y$},
  xmin=0, xmax=6, ymin=0, ymax=5.4,
  tick label style={font=\scriptsize}, label style={font=\small},
  axis lines=left, samples=2,
]
\addplot[fill=black!10, draw=none] coordinates
  {(0,0) (3.571,0) (1.111,3.444) (0,4) (0,0)} \closedcycle;
\addplot[thick, domain=0:6] {4 - 0.5*x};
\addplot[thick, domain=0:3.9] {5 - 1.4*x};
\addplot[dashed, domain=0:3.8] {2.6 - 0.7*x};
\addplot[dashed, domain=0.6:5.9] {4.4 - 0.7*x};
\addplot[only marks, mark=*, mark size=1.4pt] coordinates {(1.111,3.444)};
\node[font=\scriptsize, anchor=west] at (axis cs:1.3,3.9) {óptimo};
\node[font=\scriptsize, anchor=west] at (axis cs:3.3,1.1) {curvas de nivel};
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{anotacion}
Un conjunto factible \textbf{no acotado} puede dar un problema sin solución: si la
función crece indefinidamente en una dirección factible, el máximo no existe. Antes de
buscar hay que comprobar la acotación, o el método gráfico devuelve un punto que no es
el óptimo de nada.
\end{anotacion}
```

## Programación lineal en dos variables

El caso en que la función objetivo y todas las restricciones son lineales:

$$\max\ c_1x + c_2y \quad\text{sujeto a}\quad
\begin{cases} a_{i1}x + a_{i2}y \le b_i \\ x\ge0,\ y\ge0 \end{cases}$$

El conjunto factible es un **polígono convexo**, posiblemente no acotado, y las curvas
de nivel son rectas paralelas.

```{=latex}
\begin{teorema}[Fundamental de la programación lineal]
Si el conjunto factible es no vacío y acotado, el óptimo se alcanza en un vértice. Si
la curva de nivel es paralela a un lado, se alcanza en todos los puntos de ese lado, y
en particular en sus dos vértices.
\end{teorema}
```

**Ese teorema convierte un problema continuo en uno finito**: basta evaluar la función
objetivo en los vértices y quedarse con el mejor. Es la idea del método símplex, que
recorre vértices adyacentes mejorando en cada paso, y la razón de que la programación
lineal sea abordable con miles de variables.

### El procedimiento en la práctica

1. Dibujar cada restricción como una recta y decidir el semiplano probando un punto,
   normalmente el origen.
2. Intersecarlos todos: el conjunto factible.
3. Calcular las coordenadas de **todos** los vértices, resolviendo los sistemas
   $2\times2$ de las restricciones que se cortan.
4. Evaluar la función objetivo en cada vértice.
5. El mejor valor es el óptimo.

```{=latex}
\begin{ejemplo}
$$\max\ 3x+2y \quad\text{sujeto a}\quad
x+y\le 4,\quad x+3y\le 6,\quad x\ge0,\ y\ge0$$

\medskip
Los vértices son $(0,0)$, $(4,0)$, $(0,2)$ y el corte de las dos restricciones, que
resolviendo $x+y=4$ y $x+3y=6$ da $(3,1)$.

\medskip
\begin{tabular}{@{}lc@{}}
\toprule
Vértice & $3x+2y$ \\
\midrule
$(0,0)$ & 0 \\
$(4,0)$ & 12 \\
$(3,1)$ & \textbf{11} \\
$(0,2)$ & 4 \\
\bottomrule
\end{tabular}

\medskip
El máximo es 12 en $(4,0)$. Conviene mirar el resultado: la solución no está en el
corte de las dos restricciones, que es donde la intuición la coloca, sino en un vértice
del eje.
\end{ejemplo}
```

### Casos particulares

| Situación | Qué ocurre |
| --- | --- |
| Conjunto factible vacío | problema infactible |
| Conjunto no acotado en la dirección de mejora | óptimo infinito |
| Curva de nivel paralela a un lado | infinitas soluciones, todas en ese lado |
| Vértice degenerado | tres o más restricciones se cortan en él |

La tercera es la más frecuente en problemas reales: **la solución óptima no tiene por
qué ser única**, y un enunciado que pida «la» solución cuando hay un segmento entero
está mal planteado.

## Interpretación económica

En un problema de producción con dos bienes:

| Elemento matemático | Significado |
| --- | --- |
| Variables | cantidades a producir |
| Función objetivo | beneficio o coste total |
| Restricciones | recursos disponibles |
| Conjunto factible | planes de producción posibles |
| Vértice óptimo | plan que agota los recursos que limitan |
| Restricción **activa** en el óptimo | recurso escaso |
| Restricción no activa | recurso sobrante |

La distinción entre restricción activa y no activa es lo que da valor al modelo:
identifica **qué recurso conviene ampliar**. Ampliar uno que sobra no cambia nada, y en
el tema 5 los multiplicadores de Lagrange pondrán número a esa mejora.

## Ejercicios

```{=latex}
\begin{ejercicio}
Resolver gráficamente
$\max\ x+3y$ sujeto a $2x+y\le 8$, $x+2y\le 10$, $x,y\ge0$.
\end{ejercicio}

\begin{solucion}
Los vértices: $(0,0)$, $(4,0)$, $(0,5)$ y el corte de las dos restricciones, que
resolviendo $2x+y=8$ y $x+2y=10$ da $(2,4)$. Evaluando: 0, 4, 15 y 14. El máximo es
\textbf{15 en $(0,5)$}.

\medskip
Nótese que el corte de las dos restricciones no es el óptimo, y que en el óptimo la
restricción $2x+y\le 8$ no está activa: $2\cdot0+5 = 5 < 8$. Ese recurso sobra.
\end{solucion}

\begin{ejercicio}
¿Puede un problema de programación lineal con conjunto factible no vacío no tener
máximo? ¿Y no tener mínimo?
\end{ejercicio}

\begin{solucion}
Sí, si el conjunto es no acotado en la dirección de crecimiento. Con
$\max\ x$ sujeto a $x\ge0$, $y\ge0$ no hay máximo. El mínimo de ese mismo problema sí
existe y vale 0, porque el conjunto está acotado por abajo en esa dirección. La
existencia de máximo y la de mínimo son preguntas independientes.
\end{solucion}

\begin{ejercicio}
Un problema tiene función objetivo $2x+2y$ y una restricción $x+y\le 6$ activa en el
óptimo. ¿Cuántas soluciones tiene?
\end{ejercicio}

\begin{solucion}
Infinitas. La curva de nivel $2x+2y=k$ es paralela a la recta $x+y=6$, así que todos los
puntos del lado del polígono contenido en esa recta dan el mismo valor, 12. El óptimo
es un segmento, y el método de los vértices lo detecta porque dos vértices adyacentes
dan el mismo valor.
\end{solucion}
```

El método gráfico y la programación lineal en dos variables están desarrollados en
\cite{barbolla2006} y \cite{garcia2010}, con problemas resueltos en \cite{cabello2019}
y \cite{peris1986}.
