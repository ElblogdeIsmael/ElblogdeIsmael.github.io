# Números reales y aritmética de ordenador

Tema 1 del programa. El conjunto de los números reales, los errores que aparecen al
representarlos en una máquina, y las funciones elementales.

## El conjunto de los números reales

$\mathbb{R}$ es un **cuerpo ordenado completo**, y las tres palabras cuentan. Cuerpo,
porque se suma y se multiplica con las propiedades habituales; ordenado, porque el
orden es compatible con las operaciones; y completo, que es lo que lo distingue de
$\mathbb{Q}$.

```{=latex}
\begin{definicion}[Axioma del supremo]
Todo subconjunto de $\mathbb{R}$ no vacío y acotado superiormente tiene supremo, es
decir, una menor de sus cotas superiores.
\end{definicion}
```

La completitud es lo que hace que $\mathbb{R}$ no tenga huecos. En $\mathbb{Q}$, el
conjunto $\{x \in \mathbb{Q} : x^2 < 2\}$ está acotado y no tiene supremo racional,
porque $\sqrt{2}$ no es racional. Sin ese axioma no habría teorema de Bolzano, ni de
Weierstrass, ni convergencia de sucesiones monótonas acotadas: **todo el tema 3
depende de él**.

| Concepto | Definición |
| --- | --- |
| Cota superior de $A$ | $M$ tal que $x \le M$ para todo $x \in A$ |
| Supremo | la menor cota superior |
| Máximo | supremo que pertenece al conjunto |
| Ínfimo, mínimo | los análogos por abajo |

La distinción entre supremo y máximo se ve en $(0,1)$: su supremo es 1 y no tiene
máximo. Es la diferencia entre «no se pasa de ahí» y «lo alcanza».

### Valor absoluto y desigualdades

$$|x| = \begin{cases} x & \text{si } x \ge 0 \\ -x & \text{si } x < 0 \end{cases}$$

| Propiedad | Expresión |
| --- | --- |
| Desigualdad triangular | $\lvert x+y\rvert \le \lvert x\rvert + \lvert y\rvert$ |
| Triangular inversa | $\big\lvert \lvert x\rvert-\lvert y\rvert \big\rvert \le \lvert x-y\rvert$ |
| Producto | $\lvert xy\rvert = \lvert x\rvert\,\lvert y\rvert$ |
| Entornos | $\lvert x-a\rvert < \delta \iff a-\delta < x < a+\delta$ |

La última fila es la que se usa constantemente: **el valor absoluto mide distancia**, y
por eso las definiciones de límite y de continuidad se escriben con él.

## Errores

Un ordenador no puede representar todos los reales: dispone de un número finito de
bits. De ahí que todo cálculo lleve error, y que la asignatura empiece por medirlo.

### Absoluto y relativo

Si $\tilde{x}$ aproxima a $x$:

$$E_a = |x - \tilde{x}|, \qquad E_r = \frac{|x - \tilde{x}|}{|x|} \quad (x \ne 0)$$

```{=latex}
\begin{ejemplo}
Aproximar $1\,000\,000$ por $1\,000\,001$ da error absoluto 1 y relativo $10^{-6}$.
Aproximar $0{,}001$ por $0{,}002$ da error absoluto $0{,}001$, mil veces menor, y
relativo $1$. El absoluto dice que la segunda aproximación es mejor y el relativo que
es pésima; el que informa es el relativo.
\end{ejemplo}
```

### Representación en coma flotante

$$x = \pm\, 0{,}d_1 d_2 \dots d_t \times \beta^{\,e}, \qquad d_1 \ne 0$$

con base $\beta$, $t$ dígitos de mantisa y exponente $e$ acotado. Dos formas de
ajustar un número al formato:

| Método | Cómo | Error relativo máximo |
| --- | --- | --- |
| Truncamiento | se descartan los dígitos sobrantes | $\beta^{1-t}$ |
| Redondeo | se ajusta al más próximo | $\tfrac{1}{2}\beta^{1-t}$ |

El **epsilon de máquina**, $\varepsilon_M$, es el menor número que sumado a 1 da algo
distinto de 1. En doble precisión vale $2^{-52} \approx 2{,}2 \times 10^{-16}$, que es
la razón de las 16 cifras significativas.

```{=latex}
\begin{anotacion}
De ahí la regla que gobierna todo el cálculo numérico: \textbf{dos flotantes no se
comparan con igualdad}. Se comprueba $|a-b| < \varepsilon$ con una tolerancia acorde a
la magnitud de los números, porque el error de representación es relativo y no
absoluto.
\end{anotacion}
```

### Propagación del error

Los errores no se quedan quietos: las operaciones los transmiten y algunas los
amplifican.

| Operación | Qué le pasa al error |
| --- | --- |
| Suma y resta | los errores **absolutos** se suman |
| Producto y cociente | los errores **relativos** se suman |
| $f(x)$ | $E_a(f) \approx \lvert f'(x)\rvert\,E_a(x)$ |

La última fila define el **condicionamiento**: si $|f'(x)|$ es grande, un error pequeño
en la entrada produce uno grande en la salida, y ninguna implementación puede
arreglarlo. Un problema mal condicionado lo está por su naturaleza, no por el
algoritmo.

### La cancelación catastrófica

El fenómeno más importante del tema. Al restar dos números casi iguales, las cifras
significativas coincidentes se cancelan y **el error relativo se dispara**.

```{=latex}
\begin{ejemplo}
Con cuatro cifras, $\sqrt{9002} \approx 94{,}88$ y $\sqrt{9000} \approx 94{,}87$. Su
diferencia sale $0{,}01$, con una sola cifra significativa: se han perdido tres.

\medskip
Se evita reescribiendo la expresión para que no haya resta:
$$\sqrt{a}-\sqrt{b} = \frac{a-b}{\sqrt{a}+\sqrt{b}} = \frac{2}{189{,}75} = 0{,}010540$$
El mismo valor con las cuatro cifras intactas, y sin cambiar de precisión.
\end{ejemplo}
```

Lo mismo ocurre con la fórmula de la ecuación de segundo grado cuando $b^2 \gg 4ac$:
una de las dos raíces se calcula restando cantidades casi iguales. Se salva calculando
la raíz «buena» con la fórmula y la otra como $x_1 x_2 = c/a$.

**La moraleja del tema:** dos expresiones algebraicamente idénticas pueden ser
numéricamente muy distintas, y elegir la forma de escribirlas es parte del cálculo.

## Funciones elementales

| Familia | Expresión | Dominio |
| --- | --- | --- |
| Polinómicas | $a_n x^n + \dots + a_0$ | $\mathbb{R}$ |
| Racionales | cociente de polinomios | donde el denominador no se anula |
| Exponencial | $e^x$ | $\mathbb{R}$, imagen $(0,\infty)$ |
| Logarítmica | $\ln x$ | $(0,\infty)$ |
| Trigonométricas | $\sen x$, $\cos x$, $\tg x$ | $\mathbb{R}$, salvo la tangente |
| Hiperbólicas | $\senh x$, $\cosh x$ | $\mathbb{R}$ |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=6cm,
  axis lines=middle,
  xmin=-2.4, xmax=3.4, ymin=-2.4, ymax=4.4,
  xlabel={$x$}, ylabel={$y$},
  tick label style={font=\scriptsize}, label style={font=\small},
  legend style={font=\scriptsize, draw=none, at={(0.02,0.98)}, anchor=north west},
  samples=100,
]
\addplot[thick, domain=-2.2:1.45] {exp(x)};        \addlegendentry{$e^x$}
\addplot[thick, dashed, domain=0.06:3.3] {ln(x)};  \addlegendentry{$\ln x$}
\addplot[dotted, domain=-2.2:3.3] {x};             \addlegendentry{$y=x$}
\end{axis}
\end{tikzpicture}
\end{center}
```

La exponencial y el logaritmo son inversas, y por eso sus gráficas son simétricas
respecto de $y = x$. Las propiedades que se usan sin parar:

$$e^{a+b} = e^a e^b, \qquad \ln(ab) = \ln a + \ln b, \qquad \ln(a^b) = b\ln a$$

La tercera es la que convierte productos en sumas, y la que hace del logaritmo la
herramienta para tratar con crecimientos multiplicativos.

### Composición e inversa

| Concepto | Definición |
| --- | --- |
| Composición | $(f \circ g)(x) = f(g(x))$ |
| Inyectiva | $f(a) = f(b) \Rightarrow a = b$ |
| Sobreyectiva | su imagen es todo el conjunto de llegada |
| Inversa | existe si es biyectiva; $f^{-1}(f(x)) = x$ |

Para que una función tenga inversa hay que restringir el dominio cuando no es
inyectiva. Es lo que ocurre con $\sen x$, cuya inversa se define sobre
$[-\pi/2, \pi/2]$, y con $x^2$, cuya raíz se define sobre $[0,\infty)$.

## Ejercicios

```{=latex}
\begin{ejercicio}
Calcular $\sqrt{10001} - \sqrt{10000}$ con seis cifras significativas, de las dos
formas, y comparar.
\end{ejercicio}

\begin{solucion}
Directamente: $100{,}005 - 100{,}000 = 0{,}005000$, con una cifra significativa útil.
Racionalizando,
$$\frac{1}{\sqrt{10001}+\sqrt{10000}} = \frac{1}{200{,}005} = 0{,}00499988$$
con las seis cifras. La resta ha destruido cinco cifras que la segunda forma conserva,
y las dos expresiones son la misma en el papel.
\end{solucion}

\begin{ejercicio}
Probar que $\sup(0,1) = 1$ y que el conjunto no tiene máximo.
\end{ejercicio}

\begin{solucion}
El 1 es cota superior porque todo $x \in (0,1)$ cumple $x < 1$. Y es la menor: si
$M < 1$ fuese cota superior, el punto $(M+1)/2$ pertenece a $(0,1)$ y es mayor que
$M$, contradicción. No hay máximo porque el 1 no pertenece al conjunto, y cualquier
$x \in (0,1)$ es superado por $(x+1)/2$, que también está.
\end{solucion}

\begin{ejercicio}
Una magnitud vale $x = 2{,}45$ con error absoluto $0{,}01$. ¿Cuál es el error absoluto
aproximado de $x^3$?
\end{ejercicio}

\begin{solucion}
Con $f(x) = x^3$ se tiene $f'(x) = 3x^2 = 18{,}0$, así que
$E_a(f) \approx 18{,}0 \times 0{,}01 = 0{,}18$. El error relativo pasa del 0,41\,\%
al 1,2\,\%: elevar al cubo lo triplica, que es lo que dice la regla del error
relativo del producto aplicada tres veces.
\end{solucion}
```

El tratamiento de los números reales y de las funciones elementales está en
\cite{rogawski} y \cite{alaminos2019}, y el de los errores y la aritmética finita en
\cite{burden2004}.
