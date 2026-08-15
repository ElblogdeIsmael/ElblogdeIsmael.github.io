# Integrabilidad

Tema 4 del programa. La integral de funciones continuas, el teorema fundamental y la
regla de Barrow, el cálculo de primitivas, las integrales impropias, las aplicaciones
geométricas y la aproximación numérica.

## La integral definida

La construcción parte de aproximar el área bajo la curva con rectángulos. Dada una
partición $P = \{a = x_0 < x_1 < \dots < x_n = b\}$:

$$s(f,P) = \sum_{i=1}^{n} m_i\,\Delta x_i, \qquad
S(f,P) = \sum_{i=1}^{n} M_i\,\Delta x_i$$

con $m_i$ y $M_i$ el ínfimo y el supremo de $f$ en cada subintervalo.

```{=latex}
\begin{definicion}[Integral de Riemann]
$f$ es integrable en $[a,b]$ si el supremo de las sumas inferiores coincide con el
ínfimo de las superiores. Ese valor común es $\int_a^b f$.
\end{definicion}

\begin{teorema}
Toda función continua en $[a,b]$ es integrable. También lo es toda función acotada con
un número finito de discontinuidades.
\end{teorema}
```

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.5cm, height=5.2cm, axis lines=left,
  xmin=0, xmax=3.2, ymin=0, ymax=3.2,
  xtick={0.3,2.9}, xticklabels={$a$,$b$}, ytick=\empty,
  tick label style={font=\scriptsize}, samples=100,
]
\addplot[thick, domain=0.2:3.1] {0.5 + 0.8*x - 0.15*x*x};
\fill[black!12, draw=black!45] (axis cs:0.300,0) rectangle (axis cs:0.625,0.727);
\fill[black!12, draw=black!45] (axis cs:0.625,0) rectangle (axis cs:0.950,0.941);
\fill[black!12, draw=black!45] (axis cs:0.950,0) rectangle (axis cs:1.275,1.125);
\fill[black!12, draw=black!45] (axis cs:1.275,0) rectangle (axis cs:1.600,1.276);
\fill[black!12, draw=black!45] (axis cs:1.600,0) rectangle (axis cs:1.925,1.396);
\fill[black!12, draw=black!45] (axis cs:1.925,0) rectangle (axis cs:2.250,1.484);
\fill[black!12, draw=black!45] (axis cs:2.250,0) rectangle (axis cs:2.575,1.541);
\fill[black!12, draw=black!45] (axis cs:2.575,0) rectangle (axis cs:2.900,1.566);
\end{axis}
\end{tikzpicture}
\end{center}
```

Propiedades que se usan constantemente:

| Propiedad | Expresión |
| --- | --- |
| Linealidad | $\int (\alpha f + \beta g) = \alpha\int f + \beta\int g$ |
| Aditividad | $\int_a^b = \int_a^c + \int_c^b$ |
| Monotonía | $f \le g \Rightarrow \int f \le \int g$ |
| Acotación | $\lvert \int_a^b f\rvert \le \int_a^b \lvert f\rvert$ |
| Orientación | $\int_a^b = -\int_b^a$ |

## El teorema fundamental y la regla de Barrow

```{=latex}
\begin{teorema}[Fundamental del cálculo integral]
Si $f$ es continua en $[a,b]$, la función
$$F(x) = \int_a^x f(t)\,dt$$
es derivable en $[a,b]$ y $F'(x) = f(x)$.
\end{teorema}

\begin{teorema}[Regla de Barrow]
Si $f$ es continua en $[a,b]$ y $G$ es cualquier primitiva suya, entonces
$$\int_a^b f(x)\,dx = G(b) - G(a)$$
\end{teorema}
```

El primero dice que **derivar deshace integrar**, y el segundo convierte el cálculo de
un área —definido como un límite de sumas— en una resta de dos valores. Es la conexión
entre las dos mitades del cálculo, y la razón de que integrar sea practicable.

```{=latex}
\begin{anotacion}
Que Barrow valga para \emph{cualquier} primitiva es consecuencia directa del teorema
del valor medio: dos primitivas de la misma función difieren en una constante, y la
constante se cancela al restar. Por eso la constante de integración no se arrastra en
una integral definida.
\end{anotacion}
```

Combinado con la regla de la cadena, el teorema fundamental da la derivada de una
integral con límites variables:

$$\frac{d}{dx}\int_{u(x)}^{v(x)} f(t)\,dt = f(v(x))\,v'(x) - f(u(x))\,u'(x)$$

## Cálculo de primitivas

| Método | Cuándo | Fórmula |
| --- | --- | --- |
| Inmediatas | la tabla | --- |
| Sustitución | aparece una función y su derivada | $\int f(g(x))g'(x)dx = \int f(u)du$ |
| Por partes | producto de tipos distintos | $\int u\,dv = uv - \int v\,du$ |
| Fracciones simples | cociente de polinomios | descomponer y sumar |
| Sustituciones trigonométricas | radicales cuadráticos | $x = a\sen t$ y análogas |

Para elegir $u$ en la integración por partes sirve la regla nemotécnica **ALPES**:
arcos, logaritmos, polinomios, exponenciales, senos y cosenos, en ese orden de
preferencia. No es un teorema; es que derivar un arco o un logaritmo simplifica y
derivar una exponencial no.

### Fracciones simples

Para $\int P(x)/Q(x)\,dx$ con $\deg P < \deg Q$, se factoriza $Q$ y se descompone:

| Factor de $Q$ | Término que aporta |
| --- | --- |
| $(x-a)$ simple | $\dfrac{A}{x-a}$ |
| $(x-a)^k$ | $\dfrac{A_1}{x-a} + \dots + \dfrac{A_k}{(x-a)^k}$ |
| $(x^2+bx+c)$ irreducible | $\dfrac{Mx+N}{x^2+bx+c}$ |

Si $\deg P \ge \deg Q$ hay que **dividir primero**: el cociente se integra como
polinomio y el resto queda en las condiciones anteriores. Olvidar la división es el
fallo más común del método.

```{=latex}
\begin{ejemplo}
$$\int \frac{3x+5}{x^2-x-2}\,dx$$
El denominador factoriza como $(x-2)(x+1)$, así que se busca
$\frac{A}{x-2}+\frac{B}{x+1}$ con $3x+5 = A(x+1)+B(x-2)$. Dando a $x$ los valores 2 y
$-1$ salen $A = 11/3$ y $B = -2/3$, y por tanto
$$\frac{11}{3}\ln\lvert x-2\rvert - \frac{2}{3}\ln\lvert x+1\rvert + C$$
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
Hay funciones continuas cuya primitiva \textbf{no se puede escribir con funciones
elementales}: $e^{-x^2}$, $\sen(x)/x$ y $1/\ln x$ son los ejemplos clásicos. No es que
no se sepa calcularlas; está demostrado que no existe tal expresión. De ahí que la
aproximación numérica no sea un recurso de emergencia sino la única vía en muchos
casos.
\end{anotacion}
```

## Integrales impropias

Cuando el intervalo es infinito o la función no está acotada, la integral se define
como un límite.

| Tipo | Definición |
| --- | --- |
| Primera especie | $\int_a^{\infty} f = \lim_{b\to\infty}\int_a^b f$ |
| Segunda especie | $\int_a^b f = \lim_{t\to b^-}\int_a^t f$ si $f$ no está acotada en $b$ |

Converge si el límite existe y es finito; en otro caso, diverge.

Las dos referencias con las que se compara todo:

$$\int_1^{\infty}\frac{dx}{x^p} \ \text{converge} \iff p>1, \qquad
\int_0^{1}\frac{dx}{x^p} \ \text{converge} \iff p<1$$

**Las condiciones son opuestas**, y la razón es clara al mirarlas: en el infinito el
problema es que la cola no decaiga bastante, y en el cero que la función crezca
demasiado.

Los criterios son los de las series, con la misma forma: comparación directa y
comparación por paso al límite. Y la relación entre las dos teorías es el **criterio
integral** del tema 2, que las une.

## Aplicaciones de la integral

| Magnitud | Fórmula |
| --- | --- |
| Área bajo una curva | $\int_a^b f$ |
| Área entre dos curvas | $\int_a^b (f-g)$, con $f \ge g$ |
| Longitud de arco | $\int_a^b \sqrt{1+f'(x)^2}\,dx$ |
| Volumen por discos | $\pi\int_a^b f(x)^2\,dx$ |
| Volumen por capas | $2\pi\int_a^b x\,f(x)\,dx$ |
| Superficie de revolución | $2\pi\int_a^b f\sqrt{1+f'^2}\,dx$ |
| Valor medio de $f$ | $\dfrac{1}{b-a}\int_a^b f$ |

Para el área entre curvas hay una precaución que cuesta puntos: si las curvas se
cortan dentro del intervalo, **hay que partir la integral en los cortes** y tomar en
cada trozo la diferencia en el orden correcto. Integrar $f-g$ de un tirón da la
diferencia de áreas con signo, no el área.

```{=latex}
\begin{ejemplo}
El sólido de revolución de $f(x)=1/x$ sobre $[1,\infty)$ tiene volumen
$$\pi\int_1^{\infty}\frac{dx}{x^2} = \pi$$
finito, y superficie
$$2\pi\int_1^{\infty}\frac{1}{x}\sqrt{1+\frac{1}{x^4}}\,dx \ge
2\pi\int_1^{\infty}\frac{dx}{x} = \infty$$
infinita. Se puede llenar de pintura y no se puede pintar por fuera: es la trompeta de
Torricelli, y el ejemplo estándar de que la intuición geométrica falla con lo infinito.
\end{ejemplo}
```

## Aproximación numérica

Cuando la primitiva no es elemental o solo se conocen valores tabulados, se aproxima.
Dividiendo $[a,b]$ en $n$ subintervalos de anchura $h=(b-a)/n$:

| Método | Fórmula | Error |
| --- | --- | --- |
| Rectángulos | $h\sum f(x_i)$ | $O(h)$ |
| Punto medio | $h\sum f\!\left(\frac{x_i+x_{i+1}}{2}\right)$ | $O(h^2)$ |
| Trapecios | $\frac{h}{2}\left[f_0 + 2\sum_{i=1}^{n-1} f_i + f_n\right]$ | $O(h^2)$ |
| Simpson | $\frac{h}{3}\left[f_0 + 4\sum_{impares} + 2\sum_{pares} + f_n\right]$ | $O(h^4)$ |

Las cotas del error, que es lo que permite elegir $n$ de antemano:

$$E_{trap} \le \frac{(b-a)h^2}{12}\max\lvert f''\rvert, \qquad
E_{Simpson} \le \frac{(b-a)h^4}{180}\max\lvert f^{(4)}\rvert$$

**Simpson exige $n$ par**, porque agrupa los subintervalos de dos en dos para ajustar
una parábola a cada par. Y como una parábola integra exactamente los polinomios de
grado hasta 3, Simpson es exacto para cúbicas pese a construirse con parábolas.

```{=latex}
\begin{ejemplo}
Con $n=4$ sobre $[0,1]$ y $f(x)=e^{-x^2}$, cuya primitiva no es elemental:

\medskip
\begin{tabular}{@{}lll@{}}
\toprule
Método & Valor & Error \\
\midrule
Trapecios & 0{,}742984 & $4\times10^{-3}$ \\
Simpson & 0{,}746855 & $3\times10^{-6}$ \\
Valor exacto & 0{,}746824 & --- \\
\bottomrule
\end{tabular}

\medskip
Con las mismas cinco evaluaciones de la función, Simpson acierta mil veces mejor. Es la
diferencia entre $O(h^2)$ y $O(h^4)$.
\end{ejemplo}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Calcular $\int_0^1 x\,e^x\,dx$.
\end{ejercicio}

\begin{solucion}
Por partes con $u=x$ y $dv=e^x dx$, según ALPES: $du=dx$ y $v=e^x$. Entonces
$$\int_0^1 x e^x dx = \left[x e^x\right]_0^1 - \int_0^1 e^x dx = e - (e-1) = 1$$
Tomar $u=e^x$ habría dado una integral peor que la de partida, que es la comprobación
de que la regla de elección sirve para algo.
\end{solucion}

\begin{ejercicio}
Estudiar la convergencia de $\int_1^{\infty} \dfrac{dx}{x\sqrt{x}}$.
\end{ejercicio}

\begin{solucion}
Es $\int_1^\infty x^{-3/2}dx$, con $p = 3/2 > 1$: converge. Su valor es
$\left[-2x^{-1/2}\right]_1^{\infty} = 2$. Nótese que $\int_0^1 x^{-3/2}dx$, con el
mismo integrando, diverge, porque cerca del cero la condición es $p<1$.
\end{solucion}

\begin{ejercicio}
¿Cuántos subintervalos hace falta para aproximar $\int_0^1 e^{-x^2}dx$ con error menor
que $10^{-4}$ por trapecios, sabiendo que $\lvert f''\rvert \le 2$ en $[0,1]$?
\end{ejercicio}

\begin{solucion}
$E \le \frac{1\cdot h^2}{12}\cdot 2 = \frac{h^2}{6} < 10^{-4}$, de donde
$h < 0{,}0245$ y $n > 40{,}8$: 41 subintervalos. Con Simpson y $\lvert f^{(4)}\rvert
\le 12$ saldría $h^4 < 1{,}5\times 10^{-3}$, es decir $n \ge 6$. Casi siete veces
menos evaluaciones para la misma precisión.
\end{solucion}
```

El desarrollo de la integral y sus aplicaciones está en \cite{rogawski},
\cite{stewart2001} y \cite{alaminos2019}, y los métodos de cuadratura numérica en
\cite{burden2004}.
