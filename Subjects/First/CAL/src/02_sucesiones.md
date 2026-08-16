# Sucesiones y series

Tema 2 del programa. Convergencia de sucesiones, cálculo de límites, indeterminaciones
y criterios de parada; y después series de términos positivos y alternadas con sus
criterios de convergencia.

## Sucesiones

Una sucesión es una aplicación de $\mathbb{N}$ en $\mathbb{R}$, y se escribe
$\{a_n\}$.

```{=latex}
\begin{definicion}[Límite de una sucesión]
$\{a_n\}$ converge a $L$ si para todo $\varepsilon > 0$ existe $N$ tal que
$|a_n - L| < \varepsilon$ para todo $n \ge N$. Se escribe $\lim a_n = L$.
\end{definicion}
```

La definición dice exactamente esto: **por muy estrecha que se pida la banda alrededor
de $L$, la sucesión acaba metiéndose dentro y ya no sale**. El $N$ depende de
$\varepsilon$, y esa dependencia es lo que se calcula al demostrar un límite.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=5.4cm,
  xlabel={$n$}, ylabel={$a_n$},
  xmin=0, xmax=22, ymin=0.2, ymax=2.2,
  tick label style={font=\scriptsize}, label style={font=\small},
  axis lines=left,
]
\addplot[only marks, mark=*, mark size=1.1pt, domain=1:21, samples=21]
  {1 + sin(deg(x))/x};
\addplot[thick, domain=0:22] {1};
\addplot[dashed, domain=0:22] {1.15};
\addplot[dashed, domain=0:22] {0.85};
\node[font=\scriptsize, anchor=west] at (axis cs:22.1,1.0) {$L$};
\node[font=\scriptsize, anchor=west] at (axis cs:18,1.35) {$L\pm\varepsilon$};
\end{axis}
\end{tikzpicture}
\end{center}
```

### Monotonía y acotación

| Propiedad | Definición |
| --- | --- |
| Creciente | $a_{n+1} \ge a_n$ para todo $n$ |
| Decreciente | $a_{n+1} \le a_n$ |
| Acotada superiormente | existe $M$ con $a_n \le M$ |
| Acotada | acotada por arriba y por abajo |

```{=latex}
\begin{teorema}[Convergencia monótona]
Toda sucesión monótona y acotada converge. Si es creciente, su límite es el supremo
del conjunto de sus términos; si es decreciente, el ínfimo.
\end{teorema}

\begin{demostracion}
Sea $\{a_n\}$ creciente y acotada superiormente. Por el axioma del supremo existe
$L = \sup\{a_n\}$. Dado $\varepsilon > 0$, $L-\varepsilon$ no es cota superior, así
que hay un $N$ con $a_N > L-\varepsilon$. Por ser creciente, $a_n \ge a_N$ para todo
$n \ge N$, y por ser $L$ cota superior, $a_n \le L$. Luego
$L-\varepsilon < a_n \le L$ y por tanto $|a_n - L| < \varepsilon$.
\end{demostracion}
```

Este teorema es el más útil del tema porque **prueba que hay límite sin calcularlo**, y
esa es justo la situación de las sucesiones definidas por recurrencia.

Dos resultados que se usan como herramientas:

```{=latex}
\begin{proposicion}[Toda sucesión convergente está acotada]
Si $\{a_n\}$ converge, existe $M$ con $|a_n| \le M$ para todo $n$.
\end{proposicion}

\begin{proposicion}[Regla del sándwich]
Si $a_n \le b_n \le c_n$ para $n$ grande y $\lim a_n = \lim c_n = L$, entonces
$\lim b_n = L$.
\end{proposicion}
```

El recíproco de la primera es falso: $\{(-1)^n\}$ está acotada y no converge. Y la
regla del sándwich es la que resuelve los límites con senos y cosenos, acotando entre
$-1$ y $1$.

### Cálculo de límites e indeterminaciones

Las siete formas indeterminadas:

$$\frac{0}{0}, \quad \frac{\infty}{\infty}, \quad 0\cdot\infty, \quad
\infty-\infty, \quad 1^{\infty}, \quad 0^0, \quad \infty^0$$

Indeterminada significa que **la forma no basta para decidir**: hay ejemplos con
cualquier resultado. Las técnicas para resolverlas:

| Situación | Técnica |
| --- | --- |
| Cociente de polinomios | dividir por la potencia mayor |
| Con raíces, $\infty-\infty$ | multiplicar y dividir por el conjugado |
| $1^\infty$ | el número $e$ |
| Cocientes con factoriales o potencias | criterio del cociente, o la escala de infinitos |
| Cualquier $0/0$ o $\infty/\infty$ | L'Hôpital, cuando el tema 3 lo permita |

**La escala de infinitos**, que resuelve la mayoría sin cálculo:

$$\ln n \ll n^\alpha \ll a^n \ll n! \ll n^n \qquad (\alpha>0,\ a>1)$$

Cada término crece infinitamente más deprisa que el anterior, así que el cociente de
uno entre otro tiende a cero o a infinito según el orden.

Para $1^\infty$, el resultado clave:

$$\lim_{n\to\infty}\left(1+\frac{1}{a_n}\right)^{a_n} = e \quad \text{si } a_n \to \infty$$

y de ahí la fórmula que se aplica directamente: si $a_n \to 1$ y $b_n \to \infty$,

$$\lim a_n^{\,b_n} = e^{\lim b_n(a_n-1)}$$

```{=latex}
\begin{ejemplo}
$$\lim_{n\to\infty}\left(\frac{n+3}{n+1}\right)^{2n}
= e^{\lim 2n\left(\frac{n+3}{n+1}-1\right)}
= e^{\lim \frac{4n}{n+1}} = e^4$$
\end{ejemplo}
```

### Sucesiones recurrentes y criterios de parada

Una sucesión definida por $a_{n+1} = f(a_n)$ se estudia en dos pasos: probar que
converge —normalmente con monotonía y acotación, por inducción— y después calcular el
límite imponiendo $L = f(L)$.

**El orden importa.** Imponer $L = f(L)$ sin haber probado la convergencia da un
candidato que puede no existir: la sucesión $a_{n+1} = 2a_n$ con $a_1 = 1$ daría
$L = 2L$, es decir $L = 0$, y en realidad diverge.

En cálculo numérico esas sucesiones son los métodos iterativos, y hay que decidir
cuándo parar. Los criterios habituales:

| Criterio | Condición | Cuidado |
| --- | --- | --- |
| Error absoluto | $\lvert a_{n+1}-a_n\rvert < \varepsilon$ | engaña si la sucesión avanza despacio |
| Error relativo | $\lvert a_{n+1}-a_n\rvert/\lvert a_{n+1}\rvert < \varepsilon$ | falla si el límite es casi cero |
| Residuo | $\lvert f(a_n)\rvert < \varepsilon$ | pequeño no implica cerca de la raíz |
| Número de iteraciones | $n > N_{máx}$ | imprescindible como red de seguridad |

```{=latex}
\begin{anotacion}
El último criterio no es opcional. Sin un tope de iteraciones, un método que no
converge deja el programa dando vueltas para siempre, y los tres primeros criterios no
lo detectan: se limitan a no cumplirse nunca.
\end{anotacion}
```

## Series

Una serie es la sucesión de sumas parciales de otra:

$$S_N = \sum_{n=1}^{N} a_n, \qquad \sum_{n=1}^{\infty} a_n = \lim_{N\to\infty} S_N$$

```{=latex}
\begin{proposicion}[Condición necesaria]
Si $\sum a_n$ converge, entonces $a_n \to 0$.
\end{proposicion}
```

**Es necesaria y no suficiente**, y confundirlo es el error más repetido del tema. La
serie armónica $\sum 1/n$ tiene término general que tiende a cero y diverge. Lo que sí
sirve es el contrarrecíproco: si $a_n \not\to 0$, la serie diverge, y eso se comprueba
en un segundo.

### Series de referencia

| Serie | Converge si | Suma |
| --- | --- | --- |
| Geométrica $\sum r^n$ | $\lvert r\rvert < 1$ | $\dfrac{1}{1-r}$ desde $n=0$ |
| Armónica generalizada $\sum \dfrac{1}{n^p}$ | $p > 1$ | no elemental |
| Telescópica $\sum (b_n - b_{n+1})$ | si $\{b_n\}$ converge | $b_1 - \lim b_n$ |

Las dos primeras son el patrón con el que se comparan todas las demás.

### Criterios para términos positivos

| Criterio | Enunciado | Converge si |
| --- | --- | --- |
| Comparación | $0 \le a_n \le b_n$ | $\sum b_n$ converge |
| Comparación por paso al límite | $\lim a_n/b_n = L \in (0,\infty)$ | las dos hacen lo mismo |
| Cociente (D'Alembert) | $\lim a_{n+1}/a_n = L$ | $L < 1$ |
| Raíz (Cauchy) | $\lim \sqrt[n]{a_n} = L$ | $L < 1$ |
| Integral | $f$ decreciente positiva con $f(n) = a_n$ | $\int_1^\infty f$ converge |

Con $L = 1$ los criterios del cociente y de la raíz **no deciden nada**, y hay que ir a
otro. Es justo lo que pasa con $\sum 1/n$ y con $\sum 1/n^2$, que dan $L=1$ las dos y
se comportan al revés.

Cuál usar, en la práctica:

| Si el término general lleva | Criterio |
| --- | --- |
| factoriales o productos | cociente |
| potencias $n$-ésimas | raíz |
| cocientes de polinomios | comparación con $1/n^p$ |
| una función integrable sencilla | integral |

### Series alternadas

```{=latex}
\begin{teorema}[Criterio de Leibniz]
Si $\{a_n\}$ es decreciente, positiva y $a_n \to 0$, entonces
$\sum (-1)^{n+1} a_n$ converge. Además, el error al truncar en el término $N$ está
acotado por el primer término despreciado:
$$\left|S - S_N\right| \le a_{N+1}$$
\end{teorema}
```

La cota del error es lo más útil del criterio, porque **dice cuántos términos hacen
falta para una precisión dada** sin conocer la suma.

### Convergencia absoluta y condicional

| Tipo | Definición |
| --- | --- |
| Absolutamente convergente | $\sum \lvert a_n\rvert$ converge |
| Condicionalmente convergente | $\sum a_n$ converge pero $\sum \lvert a_n\rvert$ no |

La convergencia absoluta implica la convergencia, y no al revés: $\sum (-1)^{n+1}/n$
converge a $\ln 2$ y $\sum 1/n$ diverge.

```{=latex}
\begin{anotacion}
La diferencia no es académica. En una serie \textbf{absolutamente} convergente se
puede reordenar los términos sin que cambie la suma; en una condicionalmente
convergente, reordenar puede dar cualquier valor. Es el teorema de Riemann, y explica
por qué sumar una serie en distinto orden —cosa que un programa paralelo hace sin
avisar— no siempre es inocuo.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Estudiar la convergencia de $a_1 = 1$, $a_{n+1} = \sqrt{2 + a_n}$, y calcular su
límite si existe.
\end{ejercicio}

\begin{solucion}
Por inducción, $a_n < 2$ para todo $n$: cierto para $a_1$, y si $a_n < 2$ entonces
$a_{n+1} = \sqrt{2+a_n} < \sqrt{4} = 2$. Y es creciente, porque
$a_{n+1} > a_n \iff 2 + a_n > a_n^2 \iff (a_n-2)(a_n+1) < 0$, cierto para
$0 < a_n < 2$. Monótona y acotada, luego converge. Imponiendo $L = \sqrt{2+L}$ sale
$L^2 - L - 2 = 0$, con raíces 2 y $-1$; como todos los términos son positivos, $L = 2$.
\end{solucion}

\begin{ejercicio}
Determinar si $\sum \dfrac{n!}{n^n}$ converge.
\end{ejercicio}

\begin{solucion}
Hay factoriales, así que criterio del cociente:
$$\frac{a_{n+1}}{a_n} = \frac{(n+1)!}{(n+1)^{n+1}}\cdot\frac{n^n}{n!}
= \left(\frac{n}{n+1}\right)^n = \frac{1}{\left(1+\frac1n\right)^n} \to \frac{1}{e}$$
Como $1/e < 1$, la serie converge. Es coherente con la escala de infinitos:
$n! \ll n^n$.
\end{solucion}

\begin{ejercicio}
¿Cuántos términos de $\sum (-1)^{n+1}/n^2$ hacen falta para aproximar la suma con
error menor que $10^{-3}$?
\end{ejercicio}

\begin{solucion}
Cumple Leibniz, así que el error está acotado por el primer término despreciado:
$1/(N+1)^2 < 10^{-3}$, de donde $(N+1)^2 > 1000$ y $N+1 > 31{,}6$, es decir $N = 31$
términos. Nótese que la serie es además absolutamente convergente, porque
$\sum 1/n^2$ converge.
\end{solucion}
```

El tratamiento de sucesiones y series está desarrollado en \cite{rogawski},
\cite{stewart2001} y \cite{alaminos2019}, y los criterios de parada de los métodos
iterativos en \cite{burden2004}.
