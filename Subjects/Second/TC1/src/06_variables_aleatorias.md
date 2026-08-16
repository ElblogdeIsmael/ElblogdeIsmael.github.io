# Variables aleatorias y distribuciones de probabilidad

Tema 6 del programa. Concepto de variable aleatoria, función de distribución, casos
discreto y continuo, valor esperado, momentos, otras características y variables
bidimensionales.

## Concepto

```{=latex}
\begin{definicion}[Variable aleatoria]
Función que asigna un número real a cada resultado del experimento,
$X:\Omega\to\mathbb{R}$.
\end{definicion}
```

Es lo que permite pasar de sucesos a números y aplicar todo el aparato de los temas 1 y
2. La diferencia con una variable estadística está en el punto de partida: la
estadística describe datos ya observados, y la aleatoria describe el **modelo** que los
genera.

| Tipo | Valores | Se describe con |
| --- | --- | --- |
| Discreta | conjunto finito o numerable | función de masa $P(X=x_i)$ |
| Continua | cualquier valor de un intervalo | función de densidad $f(x)$ |

## Función de distribución

```{=latex}
\begin{definicion}
$$F(x) = P(X\le x)$$
\end{definicion}

\begin{proposicion}[Propiedades]
$F$ es no decreciente, continua por la derecha, y cumple
$\lim_{x\to-\infty}F(x)=0$ y $\lim_{x\to+\infty}F(x)=1$.
\end{proposicion}
```

**Existe siempre**, sea la variable discreta o continua, y por eso es la herramienta que
unifica los dos casos.

| | Discreta | Continua |
| --- | --- | --- |
| $F(x)$ | escalonada | continua |
| Se obtiene | $F(x)=\sum_{x_i\le x}P(X=x_i)$ | $F(x)=\int_{-\infty}^{x}f(t)\,dt$ |
| Y al revés | el salto en $x_i$ es $P(X=x_i)$ | $f(x)=F'(x)$ |
| $P(X=a)$ | el salto, puede ser positivo | **siempre 0** |
| $P(a<X\le b)$ | $F(b)-F(a)$ | $F(b)-F(a)$ |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=5.8cm, height=4.2cm, axis lines=left,
  xmin=-0.5, xmax=4.5, ymin=0, ymax=1.15,
  xlabel={$x$}, ylabel={$F(x)$},
  tick label style={font=\scriptsize}, label style={font=\scriptsize},
  title={discreta}, title style={font=\scriptsize},
]
\addplot[thick, const plot mark left] coordinates
  {(-0.5,0) (0,0.1) (1,0.35) (2,0.7) (3,0.9) (4,1) (4.5,1)};
\end{axis}
\begin{axis}[
  at={(6.4cm,0)},
  width=5.8cm, height=4.2cm, axis lines=left,
  xmin=-0.5, xmax=4.5, ymin=0, ymax=1.15,
  xlabel={$x$}, ylabel={$F(x)$},
  tick label style={font=\scriptsize}, label style={font=\scriptsize},
  title={continua}, title style={font=\scriptsize}, samples=100,
]
\addplot[thick, domain=-0.5:4.5] {1/(1+exp(-2.2*(x-2)))};
\end{axis}
\end{tikzpicture}
\end{center}
```

Que $P(X=a)=0$ en el caso continuo tiene una consecuencia práctica: **los signos de
desigualdad son indiferentes**, $P(X<a) = P(X\le a)$. En el discreto no, y confundirlos
cambia el resultado.

### La densidad

$$f(x)\ge 0, \qquad \int_{-\infty}^{\infty}f(x)\,dx = 1,
\qquad P(a\le X\le b) = \int_a^b f(x)\,dx$$

```{=latex}
\begin{anotacion}
La densidad \textbf{no es una probabilidad} y puede superar 1: lo que vale 1 es el área
total, no la altura. En una uniforme sobre $[0,\ 0{,}5]$ la densidad vale 2 en todo el
intervalo. Lo que tiene significado probabilístico es siempre el área bajo la curva.
\end{anotacion}
```

## Valor esperado

$$E[X] = \sum_i x_i\,P(X=x_i) \qquad\text{o}\qquad E[X] = \int_{-\infty}^{\infty} x f(x)\,dx$$

Es el análogo de la media del tema 1, y se interpreta como el valor medio a largo plazo
si el experimento se repite muchas veces.

| Propiedad | Expresión |
| --- | --- |
| Linealidad | $E[aX+b] = aE[X]+b$ |
| Suma | $E[X+Y] = E[X]+E[Y]$, **siempre** |
| Producto | $E[XY]=E[X]E[Y]$ **solo si son independientes** |
| De una función | $E[g(X)] = \sum g(x_i)P(x_i)$ o la integral |

La linealidad de la suma no exige independencia y la del producto sí: es la asimetría
que más se olvida.

```{=latex}
\begin{anotacion}
$E[g(X)] \ne g(E[X])$ en general. Con $g$ convexa, la desigualdad de Jensen da
$E[g(X)]\ge g(E[X])$. De ahí que la rentabilidad media de una inversión volátil sea menor
que la que sugiere aplicar la fórmula al rendimiento medio, y que en finanzas la
volatilidad tenga coste aunque la media no cambie.
\end{anotacion}
```

## Momentos y otras características

$$\alpha_r = E[X^r], \qquad \mu_r = E[(X-\mu)^r]$$

| Medida | Definición |
| --- | --- |
| Media | $\mu = E[X] = \alpha_1$ |
| Varianza | $\sigma^2 = \Var(X) = E[(X-\mu)^2] = E[X^2]-\mu^2$ |
| Desviación típica | $\sigma$ |
| Coeficiente de variación | $\sigma/\mu$ |
| Asimetría | $\mu_3/\sigma^3$ |
| Curtosis | $\mu_4/\sigma^4 - 3$ |
| Moda | donde la masa o la densidad es máxima |
| Mediana | el valor con $F(x) = 0{,}5$ |
| Cuantil $p$ | el valor con $F(x) = p$ |

| Propiedad de la varianza | Expresión |
| --- | --- |
| Traslación | $\Var(X+b) = \Var(X)$ |
| Escala | $\Var(aX) = a^2\Var(X)$ |
| Suma | $\Var(X+Y) = \Var(X)+\Var(Y)+2\Cov(X,Y)$ |
| Suma con independencia | $\Var(X+Y)=\Var(X)+\Var(Y)$ |

La última fila es el fundamento de la **diversificación**: la varianza de una cartera de
activos independientes crece con el número de activos, pero su media también, y el
riesgo relativo baja como $1/\sqrt{n}$.

```{=latex}
\begin{teorema}[Desigualdad de Chebyshev]
Para cualquier variable con media $\mu$ y varianza $\sigma^2$ finitas y todo $k>0$,
$$P\big(\lvert X-\mu\rvert \ge k\sigma\big) \le \frac{1}{k^2}$$
\end{teorema}
```

Es una cota **universal**: vale sin conocer la distribución. Con $k=2$ dice que como
mucho el 25 % de la masa está a más de dos desviaciones típicas de la media, sea la
distribución la que sea. A cambio de esa generalidad es muy poco fina: para una normal
el valor real es un 4,6 %.

## Variables aleatorias bidimensionales

Un par $(X,Y)$ se describe con su distribución conjunta, y de ella salen las marginales
y las condicionadas igual que en el tema 2.

| Concepto | Discreto |
| --- | --- |
| Conjunta | $p_{ij} = P(X=x_i, Y=y_j)$ |
| Marginal | $p_{i\cdot} = \sum_j p_{ij}$ |
| Condicionada | $P(X=x_i\mid Y=y_j) = p_{ij}/p_{\cdot j}$ |

```{=latex}
\begin{definicion}[Independencia de variables aleatorias]
$X$ e $Y$ son independientes si
$$F(x,y) = F_X(x)\,F_Y(y) \quad\text{para todo } (x,y)$$
equivalentemente, si la conjunta factoriza como producto de las marginales en todos los
puntos.
\end{definicion}
```

$$\Cov(X,Y) = E[XY]-E[X]E[Y], \qquad
\rho = \frac{\Cov(X,Y)}{\sigma_X\sigma_Y}$$

**Independencia implica covarianza nula, y no al revés**, exactamente igual que en el
tema 2. La única familia donde las dos condiciones coinciden es la normal
multivariante, y por eso allí «incorrelado» sí significa «independiente».

```{=latex}
\begin{ejemplo}
Un inversor reparte su capital entre dos activos con rentabilidades $X$ e $Y$, con
$E[X]=E[Y]=8\,$ y $\sigma_X=\sigma_Y=10$. La cartera es $C = 0{,}5X+0{,}5Y$.

\medskip
Su rentabilidad esperada es 8 en cualquier caso. Su varianza,
$$\Var(C) = 0{,}25\sigma_X^2 + 0{,}25\sigma_Y^2 + 0{,}5\Cov(X,Y)
= 50 + 50\rho$$

\medskip
Con $\rho=1$ da 100, la misma que un solo activo. Con $\rho=0$, 50, y la desviación
típica baja de 10 a 7,07. Con $\rho=-1$, cero: el riesgo desaparece. \textbf{Diversificar
solo sirve si los activos no están perfectamente correlados}, y ese es todo el argumento
de la teoría de carteras.
\end{ejemplo}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Una variable continua tiene densidad $f(x)=kx$ en $[0,2]$ y 0 fuera. Hallar $k$, la
función de distribución, la media y la varianza.
\end{ejercicio}

\begin{solucion}
$\int_0^2 kx\,dx = 2k = 1$, así que $k = 1/2$.

\medskip
$F(x) = \int_0^x t/2\,dt = x^2/4$ en $[0,2]$, con 0 antes y 1 después.

\medskip
$E[X] = \int_0^2 x^2/2\,dx = 4/3$. Y $E[X^2] = \int_0^2 x^3/2\,dx = 2$, luego
$\Var(X) = 2 - 16/9 = 2/9$.
\end{solucion}

\begin{ejercicio}
Un juego paga 10 euros con probabilidad 0,1 y cobra 2 euros con probabilidad 0,9.
¿Conviene jugar?
\end{ejercicio}

\begin{solucion}
$E[G] = 10\cdot0{,}1 - 2\cdot0{,}9 = 1 - 1{,}8 = -0{,}8$ euros por partida. El juego es
desfavorable: a largo plazo se pierden 80 céntimos por jugada. Que exista una ganancia
posible de 10 euros no lo cambia; lo que decide es la esperanza.
\end{solucion}

\begin{ejercicio}
Una variable tiene media 100 y desviación típica 15. Acotar la probabilidad de que tome
un valor entre 70 y 130.
\end{ejercicio}

\begin{solucion}
El intervalo es $\mu \pm 2\sigma$. Por Chebyshev,
$P(\lvert X-100\rvert \ge 30) \le 1/4$, luego
$P(70 < X < 130) \ge 0{,}75$. Es una cota válida para cualquier distribución; si además
se supiera que es normal, el valor exacto sería 0,954.
\end{solucion}
```

Las variables aleatorias están desarrolladas en \cite{canavos1989} y
\cite{castillo2006}, con problemas resueltos en \cite{hermoso2000} y \cite{newbold2013}.
