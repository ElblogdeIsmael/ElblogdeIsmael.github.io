# Variables estadísticas bidimensionales

Tema 2 del programa. Representaciones en dos columnas y en tablas de contingencia,
distribuciones marginales y condicionadas, independencia, covarianza, coeficiente de
correlación y recta de regresión.

## Representación

| Formato | Cuándo se usa |
| --- | --- |
| Dos columnas | pocos datos, sin repeticiones |
| Tabla de contingencia | muchos datos, con repeticiones o agrupados |

En una tabla de contingencia, $n_{ij}$ es el número de individuos con $X=x_i$ e
$Y=y_j$, y las **frecuencias marginales** son las sumas por filas y por columnas:

$$n_{i\cdot} = \sum_j n_{ij}, \qquad n_{\cdot j} = \sum_i n_{ij}, \qquad
N = \sum_{i,j} n_{ij}$$

## Distribuciones marginales y condicionadas

| Distribución | Qué describe |
| --- | --- |
| Marginal de $X$ | el comportamiento de $X$ ignorando $Y$ |
| Marginal de $Y$ | ídem al revés |
| Condicionada $X\mid Y=y_j$ | el comportamiento de $X$ dentro de una columna |

$$f_{i\mid j} = \frac{n_{ij}}{n_{\cdot j}}$$

Las condicionadas son las que permiten comparar grupos: la renta media de los hombres
frente a la de las mujeres, o la nota media según el grupo de prácticas.

```{=latex}
\begin{anotacion}
Comparar marginales cuando lo que interesa son las condicionadas produce la
\textbf{paradoja de Simpson}: una tendencia que aparece en cada subgrupo puede
invertirse al agregar. Ocurre cuando el tamaño de los grupos está desequilibrado, y es
la razón de que un dato global pueda contradecir todos los datos parciales sin que
ninguno sea falso.
\end{anotacion}
```

## Independencia

```{=latex}
\begin{definicion}[Independencia estadística]
$X$ e $Y$ son independientes si
$$f_{ij} = f_{i\cdot}\,f_{\cdot j} \quad\text{para todo par } (i,j)$$
equivalentemente, si todas las distribuciones condicionadas de $X$ coinciden entre sí.
\end{definicion}
```

**La condición debe cumplirse en todas las casillas.** Que se cumpla en algunas no dice
nada, y comprobarla exige recorrer la tabla entera.

## Covarianza

$$s_{xy} = \frac{1}{N}\sum_{i,j}(x_i-\bar{x})(y_j-\bar{y})\,n_{ij}
= \overline{xy} - \bar{x}\,\bar{y}$$

| Signo | Interpretación |
| --- | --- |
| $s_{xy}>0$ | relación directa: crecen juntas |
| $s_{xy}<0$ | relación inversa |
| $s_{xy}=0$ | **incorreladas**, que no es lo mismo que independientes |

```{=latex}
\begin{proposicion}
Si $X$ e $Y$ son independientes, $s_{xy}=0$. El recíproco es falso.
\end{proposicion}
```

```{=latex}
\begin{ejemplo}
Sea $X$ con valores $-2,-1,0,1,2$ e $Y = X^2$. La covarianza es 0 por simetría, y sin
embargo $Y$ está determinada completamente por $X$. La covarianza solo detecta relación
\textbf{lineal}, y aquí la relación es cuadrática.
\end{ejemplo}
```

La covarianza tiene un problema práctico: **sus unidades son el producto de las dos
variables**, así que su valor no se puede interpretar por sí solo ni comparar entre
pares de variables distintas. De ahí el coeficiente siguiente.

## Coeficiente de correlación lineal

$$r = \frac{s_{xy}}{s_x\,s_y}, \qquad -1 \le r \le 1$$

| $\lvert r\rvert$ | Relación lineal |
| --- | --- |
| 1 | perfecta: todos los puntos en una recta |
| cercano a 1 | fuerte |
| en torno a 0,5 | moderada |
| cercano a 0 | débil o inexistente |

Es adimensional e invariante frente a cambios de escala y de origen, lo que permite
compararlo entre estudios distintos.

```{=latex}
\begin{anotacion}
Dos advertencias que valen para toda la asignatura. La primera: \textbf{correlación no
es causalidad}; puede haber una tercera variable que explique las dos, o ser
coincidencia. La segunda: $r$ mide \emph{solo} relación lineal, así que $r\approx 0$ es
compatible con una dependencia perfecta pero curva. Antes de interpretar $r$ hay que
mirar el diagrama de dispersión.
\end{anotacion}
```

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=5.6cm, height=4.4cm, axis lines=left,
  xtick=\empty, ytick=\empty, xmin=-3, xmax=3, ymin=-1, ymax=10,
  title={$r\approx 0$}, title style={font=\scriptsize},
  samples=13, domain=-2.6:2.6,
]
\addplot[only marks, mark=*, mark size=1.1pt] {x^2};
\end{axis}
\begin{axis}[
  at={(6.2cm,0)},
  width=5.6cm, height=4.4cm, axis lines=left,
  xtick=\empty, ytick=\empty, xmin=-3, xmax=3, ymin=-4, ymax=4,
  title={$r\approx 0{,}95$}, title style={font=\scriptsize},
  samples=13, domain=-2.6:2.6,
]
\addplot[only marks, mark=*, mark size=1.1pt] {1.2*x + 0.35*sin(deg(3*x))};
\end{axis}
\end{tikzpicture}
\end{center}
```

## Regresión por mínimos cuadrados

El objetivo: la recta $y = a + bx$ que mejor aproxima la nube de puntos, minimizando la
suma de los cuadrados de los residuos.

$$\min_{a,b}\ \sum_i \big(y_i - (a+bx_i)\big)^2$$

Derivando e igualando a cero salen las **ecuaciones normales**, y de ellas:

$$b = \frac{s_{xy}}{s_x^2}, \qquad a = \bar{y} - b\,\bar{x}$$

| Propiedad | Consecuencia |
| --- | --- |
| Pasa por $(\bar{x},\bar{y})$ | el centro de gravedad de la nube |
| Los residuos suman cero | la recta no está sesgada |
| $b$ tiene el signo de $s_{xy}$ | la pendiente indica el sentido de la relación |

**Hay dos rectas de regresión distintas**, la de $Y$ sobre $X$ y la de $X$ sobre $Y$, y
no coinciden salvo que $\lvert r\rvert = 1$. Minimizan errores en direcciones distintas,
así que usar una para predecir en el sentido contrario es un error.

### Bondad del ajuste

$$R^2 = r^2 = \frac{\text{varianza explicada}}{\text{varianza total}}$$

Se interpreta como el porcentaje de la variabilidad de $Y$ que la recta explica. Con
$R^2 = 0{,}81$, la recta da cuenta del 81 % de la variación.

```{=latex}
\begin{ejemplo}
Para cinco observaciones se tiene $\bar{x}=3$, $\bar{y}=7$, $s_x^2=2$, $s_y^2=8$ y
$s_{xy}=3{,}6$.

\medskip
La pendiente es $b = 3{,}6/2 = 1{,}8$ y la ordenada $a = 7 - 1{,}8\cdot3 = 1{,}6$, así
que la recta es $y = 1{,}6 + 1{,}8x$.

\medskip
El coeficiente de correlación es $r = 3{,}6/\sqrt{2\cdot8} = 3{,}6/4 = 0{,}9$, y
$R^2 = 0{,}81$: el ajuste explica el 81\,\% de la variabilidad.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
\textbf{Extrapolar fuera del rango observado no está justificado.} La recta se ha
ajustado con datos de un intervalo y nada garantiza que la relación siga siendo lineal
fuera de él. Predecir la facturación para un tamaño de empresa diez veces mayor que
cualquiera de la muestra es aritmética, no estadística.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
En una tabla de contingencia, $n_{11}=20$, $n_{12}=30$, $n_{21}=10$ y $n_{22}=15$.
¿Son independientes las dos variables?
\end{ejercicio}

\begin{solucion}
Las marginales son $n_{1\cdot}=50$, $n_{2\cdot}=25$, $n_{\cdot1}=30$, $n_{\cdot2}=45$ y
$N=75$. La independencia exige $n_{ij} = n_{i\cdot}n_{\cdot j}/N$. Para la primera
casilla: $50\cdot30/75 = 20$, que coincide. Comprobando las otras tres: $30$, $10$ y
$15$, todas coinciden. \textbf{Sí son independientes.}
\end{solucion}

\begin{ejercicio}
Un estudio encuentra $r = 0{,}85$ entre el número de bomberos enviados a un incendio y
los daños causados. ¿Significa que los bomberos causan daños?
\end{ejercicio}

\begin{solucion}
No. Hay una tercera variable, la magnitud del incendio, que explica las dos: a mayor
incendio, más bomberos y más daños. Es un caso de correlación espuria por variable
oculta. Para separar el efecto habría que comparar incendios de tamaño similar, es decir
condicionar por esa tercera variable.
\end{solucion}

\begin{ejercicio}
Con $\bar{x}=10$, $\bar{y}=50$, $s_x=2$, $s_y=6$ y $r=0{,}8$, hallar la recta de
regresión de $Y$ sobre $X$ y predecir $y$ para $x=12$.
\end{ejercicio}

\begin{solucion}
$s_{xy} = r\,s_xs_y = 0{,}8\cdot2\cdot6 = 9{,}6$, así que
$b = 9{,}6/4 = 2{,}4$ y $a = 50 - 2{,}4\cdot10 = 26$. La recta es $y = 26+2{,}4x$, y
para $x=12$ predice $y = 54{,}8$.

\medskip
Conviene añadir que $R^2 = 0{,}64$: el modelo explica el 64\,\% de la variabilidad, así
que la predicción tiene un margen de error apreciable.
\end{solucion}
```

El análisis bidimensional está desarrollado en \cite{castillo2006}, \cite{pliego2004} y
\cite{newbold2013}, con problemas resueltos en \cite{hermoso2000} y \cite{arnaldos2003}.
