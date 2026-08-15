# Introducción: modelos continuos, muestra y estadísticos

Tema 1 del programa. Los modelos continuos de variable aleatoria —uniforme,
exponencial, gamma, beta, normal y las asociadas a la normal—, los conceptos de muestra
y estadístico, y las primeras propiedades de la media y la varianza muestrales.

## Modelos continuos

### Uniforme

$$X\sim U(a,b): \qquad f(x) = \frac{1}{b-a} \ \text{en } [a,b]$$
$$E[X] = \frac{a+b}{2}, \qquad \Var(X) = \frac{(b-a)^2}{12}$$

Modela la ignorancia total dentro de un rango, y es la base de la simulación: cualquier
distribución se genera transformando una uniforme.

### Exponencial

$$X\sim \text{Exp}(\lambda): \qquad f(x) = \lambda e^{-\lambda x} \ \text{en } [0,\infty)$$
$$E[X] = \frac{1}{\lambda}, \qquad \Var(X) = \frac{1}{\lambda^2}, \qquad
F(x) = 1-e^{-\lambda x}$$

Modela **tiempos de espera** entre sucesos que ocurren según un proceso de Poisson: si
las llamadas llegan a razón de $\lambda$ por hora, el tiempo entre dos llamadas es
exponencial de parámetro $\lambda$.

```{=latex}
\begin{proposicion}[Falta de memoria]
$$P(X > s+t \mid X > s) = P(X > t)$$
La exponencial es la única distribución continua con esta propiedad.
\end{proposicion}
```

Es la versión continua de la geométrica del curso anterior, con la misma lectura: **un
componente sin desgaste no envejece**. Que sea la única con esa propiedad es lo que la
hace tan usada, y también lo que limita su realismo: los equipos reales sí se desgastan,
y por eso la fiabilidad usa la Weibull.

### Gamma

$$X\sim\Gamma(\alpha,\lambda): \qquad
f(x) = \frac{\lambda^{\alpha}}{\Gamma(\alpha)}x^{\alpha-1}e^{-\lambda x},
\quad x>0$$
$$E[X] = \frac{\alpha}{\lambda}, \qquad \Var(X) = \frac{\alpha}{\lambda^2}$$

Generaliza la exponencial, que es el caso $\alpha=1$. La suma de $\alpha$ exponenciales
independientes del mismo parámetro es una gamma, así que modela el tiempo hasta el
$\alpha$-ésimo suceso.

### Beta

$$X\sim\text{Beta}(p,q): \qquad
f(x) = \frac{x^{p-1}(1-x)^{q-1}}{B(p,q)}, \quad x\in(0,1)$$
$$E[X] = \frac{p}{p+q}, \qquad
\Var(X) = \frac{pq}{(p+q)^2(p+q+1)}$$

**Su soporte es el intervalo $(0,1)$**, así que modela proporciones y porcentajes:
cuotas de mercado, tasas de aceptación, fracciones defectuosas. Su forma es muy flexible:
con $p=q=1$ es la uniforme, con $p=q>1$ es acampanada y simétrica, y con parámetros
distintos es asimétrica.

### Normal

$$X\sim N(\mu,\sigma): \qquad
f(x) = \frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=4.8cm, axis lines=left,
  xmin=-4, xmax=4, ymin=0, ymax=0.46,
  xtick={-3,-2,-1,0,1,2,3},
  xticklabels={$\mu-3\sigma$,,$\mu-\sigma$,$\mu$,$\mu+\sigma$,,$\mu+3\sigma$},
  ytick=\empty, tick label style={font=\scriptsize}, samples=150,
]
\addplot[thick, domain=-4:4] {exp(-x^2/2)/sqrt(2*pi)};
\addplot[fill=black!12, draw=none, domain=-1:1] {exp(-x^2/2)/sqrt(2*pi)} \closedcycle;
\node[font=\scriptsize] at (axis cs:0,0.15) {68,3\,\%};
\end{axis}
\end{tikzpicture}
\end{center}
```

| Propiedad | Enunciado |
| --- | --- |
| Simetría | respecto de $\mu$; media, mediana y moda coinciden |
| Tipificación | $Z = (X-\mu)/\sigma \sim N(0,1)$ |
| Reproductividad | la suma de normales independientes es normal |
| Combinación lineal | $aX+b \sim N(a\mu+b,\ \lvert a\rvert\sigma)$ |
| Regla empírica | el 68,3 %, 95,4 % y 99,7 % de la masa en $\mu\pm\sigma$, $\pm2\sigma$ y $\pm3\sigma$ |

**La tipificación es lo que permite usar una sola tabla** para todas las normales, y es
el cálculo más repetido de la asignatura.

```{=latex}
\begin{teorema}[Central del límite]
Si $X_1,\dots,X_n$ son independientes e idénticamente distribuidas con media $\mu$ y
varianza $\sigma^2$ finitas, entonces
$$\frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \xrightarrow[n\to\infty]{} N(0,1)$$
\emph{sea cual sea} la distribución de partida.
\end{teorema}
```

Es el resultado que sostiene toda la inferencia del curso: **la media muestral es
aproximadamente normal aunque los datos no lo sean**, y por eso los intervalos y los
contrastes de los temas siguientes funcionan con datos reales. En la práctica se aplica
a partir de $n\ge30$, y con menos si la población ya era simétrica.

### Distribuciones asociadas a la normal

| Distribución | Definición | Se usa para |
| --- | --- | --- |
| $\chi^2_n$ | suma de $n$ normales tipificadas al cuadrado | varianzas |
| $t_n$ | $\dfrac{Z}{\sqrt{\chi^2_n/n}}$ con $Z$ y $\chi^2$ independientes | medias con $\sigma$ desconocida |
| $F_{n,m}$ | $\dfrac{\chi^2_n/n}{\chi^2_m/m}$ | cocientes de varianzas |

| Distribución | Media | Forma |
| --- | --- | --- |
| $\chi^2_n$ | $n$ | asimétrica a la derecha; tiende a la normal con $n$ grande |
| $t_n$ | 0 si $n>1$ | simétrica, con colas más pesadas que la normal |
| $F_{n,m}$ | $m/(m-2)$ si $m>2$ | asimétrica a la derecha |

**La $t$ tiende a la normal al crecer $n$**, y a partir de unos 30 grados de libertad la
diferencia es despreciable. Sus colas más pesadas son la penalización por no conocer
$\sigma$ y tener que estimarla: los intervalos salen algo más anchos.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.4cm, height=4.6cm, axis lines=left,
  xmin=-4, xmax=4, ymin=0, ymax=0.45,
  xtick=\empty, ytick=\empty, samples=150,
  legend style={font=\scriptsize, draw=none, at={(0.99,0.98)}, anchor=north east},
]
\addplot[thick, domain=-4:4] {exp(-x^2/2)/sqrt(2*pi)};
\addlegendentry{$N(0,1)$}
\addplot[dashed, domain=-4:4] {0.3796/(1+x^2/3)^2};
\addlegendentry{$t_3$}
\end{axis}
\end{tikzpicture}
\end{center}
```

## Muestra y estadístico

```{=latex}
\begin{definicion}[Muestra aleatoria simple]
Conjunto de $n$ variables aleatorias $X_1,\dots,X_n$ independientes y con la misma
distribución que la población.
\end{definicion}

\begin{definicion}[Estadístico]
Cualquier función de la muestra que no dependa de parámetros desconocidos.
\end{definicion}
```

**Un estadístico es a su vez una variable aleatoria**, porque cambia de una muestra a
otra. Su distribución se llama distribución en el muestreo, y es el objeto de estudio del
tema 3.

| Estadístico | Definición |
| --- | --- |
| Media muestral | $\bar{X} = \dfrac{1}{n}\sum X_i$ |
| Varianza muestral | $S^2 = \dfrac{1}{n}\sum (X_i-\bar{X})^2$ |
| Cuasivarianza muestral | $\hat{S}^2 = \dfrac{1}{n-1}\sum (X_i-\bar{X})^2$ |
| Proporción muestral | $\hat{p} = \dfrac{X}{n}$ con $X$ el número de éxitos |

```{=latex}
\begin{anotacion}
Varianza y cuasivarianza se diferencian solo en el denominador y \textbf{no son
intercambiables}. La segunda es la que aparece en los intervalos y los contrastes,
porque es la insesgada. Confundirlas produce resultados sistemáticamente sesgados, tanto
más cuanto menor es $n$: con $n=5$ la diferencia es del 25\,\%.
\end{anotacion}
```

## Valor esperado y varianza de los estadísticos

```{=latex}
\begin{proposicion}[Media muestral]
$$E[\bar{X}] = \mu, \qquad \Var(\bar{X}) = \frac{\sigma^2}{n}$$
\end{proposicion}
```

Las dos igualdades dicen cosas distintas y las dos importan:

- $E[\bar{X}]=\mu$: la media muestral **acierta en promedio**, sin sesgo.
- $\Var(\bar{X}) = \sigma^2/n$: su precisión mejora con el tamaño de muestra, pero
  **como $1/\sqrt{n}$**. Para dividir el error por dos hay que cuadruplicar la muestra, y
  esa es la ley de rendimientos decrecientes de toda la estadística.

```{=latex}
\begin{proposicion}[Varianza y cuasivarianza]
$$E[S^2] = \frac{n-1}{n}\sigma^2, \qquad E[\hat{S}^2] = \sigma^2$$
\end{proposicion}
```

La varianza muestral **subestima** sistemáticamente $\sigma^2$, y la cuasivarianza no.
La razón intuitiva: las desviaciones se miden respecto de $\bar{X}$, que está calculada
con los propios datos y por tanto queda más cerca de ellos de lo que estaría la $\mu$
verdadera. Dividir por $n-1$ compensa exactamente ese efecto, y el $n-1$ se llama grados
de libertad porque una de las $n$ desviaciones queda determinada por las otras.

```{=latex}
\begin{ejemplo}
Una población tiene $\mu=50$ y $\sigma=10$. Con muestras de tamaño 25:

\medskip
$E[\bar{X}] = 50$ y $\Var(\bar{X}) = 100/25 = 4$, así que el error típico de la media es
$\sigma/\sqrt{n} = 2$.

\medskip
Por el teorema central del límite, $\bar{X}\approx N(50,\ 2)$, y por tanto en torno al
95\,\% de las muestras dan una media entre 46 y 54. Con $n=100$ el error típico baja a 1
y el intervalo se estrecha a 48-52: cuadruplicar la muestra ha reducido el error a la
mitad.
\end{ejemplo}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
El tiempo entre llegadas a una ventanilla es exponencial con media 4 minutos. ¿Cuál es
la probabilidad de esperar más de 6 minutos? ¿Y de esperar más de 6 sabiendo que ya se
han esperado 3?
\end{ejercicio}

\begin{solucion}
$\lambda = 1/4$, así que $P(X>6) = e^{-6/4} = e^{-1{,}5} = 0{,}2231$.

\medskip
Por la falta de memoria, $P(X>9\mid X>3) = P(X>6) = 0{,}2231$: haber esperado tres
minutos no cambia nada. Y $P(X>6\mid X>3) = P(X>3) = e^{-0{,}75} = 0{,}4724$.
\end{solucion}

\begin{ejercicio}
Las ventas diarias de una tienda tienen media 500 y desviación típica 120, con
distribución desconocida. ¿Cuál es la probabilidad de que la media de 36 días supere
540?
\end{ejercicio}

\begin{solucion}
Por el teorema central del límite, $\bar{X}\approx N(500,\ 120/6) = N(500,20)$.
Tipificando, $z = (540-500)/20 = 2$, y $P(Z>2) = 0{,}0228$.

\medskip
Nótese que no ha hecho falta conocer la distribución de las ventas diarias: con $n=36$
el teorema ya se aplica, y esa es toda su utilidad.
\end{solucion}

\begin{ejercicio}
De una muestra de 5 datos se obtiene $\sum(x_i-\bar{x})^2 = 40$. Calcular la varianza y
la cuasivarianza muestrales, y decir cuál estima mejor $\sigma^2$.
\end{ejercicio}

\begin{solucion}
$S^2 = 40/5 = 8$ y $\hat{S}^2 = 40/4 = 10$. La cuasivarianza es la insesgada, así que es
la que estima bien $\sigma^2$; la varianza muestral subestima en un factor
$(n-1)/n = 0{,}8$, un 20\,\% en este caso. Con $n=100$ el sesgo sería del 1\,\%, y por eso
la distinción importa sobre todo con muestras pequeñas.
\end{solucion}
```

Los modelos continuos y los conceptos de muestreo están desarrollados en
\cite{canavos1987} y \cite{herrerias2012}, con problemas resueltos en
\cite{herrerias2012ej} y \cite{casas2006}.
