# Continuidad y derivabilidad

Tema 3 del programa. Los teoremas de Bolzano y Weierstrass, el de Rolle y sus
consecuencias sobre crecimiento y extremos, la representación de funciones, y los
métodos numéricos de bisección y Newton-Raphson.

## Continuidad

```{=latex}
\begin{definicion}[Continuidad en un punto]
$f$ es continua en $a$ si para todo $\varepsilon>0$ existe $\delta>0$ tal que
$\lvert x-a\rvert < \delta$ implica $\lvert f(x)-f(a)\rvert < \varepsilon$.
Equivalentemente, si $\lim_{x\to a} f(x) = f(a)$.
\end{definicion}
```

La segunda formulación exige tres cosas a la vez, y examinarlas por separado es lo que
clasifica las discontinuidades:

| Tipo | Qué falla |
| --- | --- |
| Evitable | el límite existe pero no coincide con $f(a)$, o $f(a)$ no está definido |
| De salto | los límites laterales existen y son distintos |
| Esencial | algún límite lateral no existe o es infinito |

Las funciones elementales son continuas en su dominio, y la suma, el producto, el
cociente —donde no se anule el denominador— y la composición de continuas son
continuas. Con eso, la continuidad rara vez hay que comprobarla: se comprueba solo en
los puntos sospechosos, que son los de definición a trozos y los que anulan
denominadores.

### Los dos teoremas grandes

```{=latex}
\begin{teorema}[Bolzano]
Si $f$ es continua en $[a,b]$ y $f(a)\,f(b) < 0$, existe $c \in (a,b)$ con $f(c)=0$.
\end{teorema}

\begin{teorema}[Weierstrass]
Si $f$ es continua en un intervalo cerrado y acotado $[a,b]$, entonces $f$ está
acotada y alcanza su máximo y su mínimo absolutos en ese intervalo.
\end{teorema}
```

Las hipótesis no sobran, y comprobarlo es la mejor forma de entenderlos:

| Hipótesis que se quita | Contraejemplo |
| --- | --- |
| Continuidad, en Bolzano | $f(x)=1/x$ en $[-1,1]$: cambia de signo y no se anula |
| Intervalo cerrado, en Weierstrass | $f(x)=x$ en $(0,1)$: no alcanza extremos |
| Intervalo acotado, en Weierstrass | $f(x)=x$ en $[0,\infty)$: no está acotada |

**Bolzano es el fundamento del método de bisección** y de toda la localización de
raíces: garantiza que hay solución, aunque no diga dónde ni cuántas. Weierstrass es lo
que garantiza que un problema de optimización sobre un cerrado acotado tenga solución,
y por eso se enuncia siempre antes de buscar extremos.

## Derivabilidad

```{=latex}
\begin{definicion}[Derivada]
$$f'(a) = \lim_{h\to 0}\frac{f(a+h)-f(a)}{h}$$
cuando el límite existe y es finito.
\end{definicion}

\begin{proposicion}
Si $f$ es derivable en $a$, entonces es continua en $a$. El recíproco es falso.
\end{proposicion}
```

El contraejemplo del recíproco es $f(x)=\lvert x\rvert$ en el cero: continua, con
derivadas laterales $-1$ y $1$, que no coinciden. Geométricamente, un pico.

| Regla | Expresión |
| --- | --- |
| Producto | $(fg)' = f'g + fg'$ |
| Cociente | $(f/g)' = (f'g - fg')/g^2$ |
| Cadena | $(f\circ g)'(x) = f'(g(x))\,g'(x)$ |
| Inversa | $(f^{-1})'(y) = 1/f'(x)$ con $y=f(x)$ |

### Teoremas del valor medio

```{=latex}
\begin{teorema}[Rolle]
Si $f$ es continua en $[a,b]$, derivable en $(a,b)$ y $f(a)=f(b)$, existe
$c\in(a,b)$ con $f'(c)=0$.
\end{teorema}

\begin{teorema}[Valor medio de Lagrange]
Con las mismas hipótesis sobre continuidad y derivabilidad, existe $c\in(a,b)$ tal que
$$f'(c) = \frac{f(b)-f(a)}{b-a}$$
\end{teorema}
```

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10cm, height=5.4cm,
  axis lines=left,
  xmin=-0.2, xmax=3.4, ymin=-0.4, ymax=2.6,
  xtick={0.4,3.0}, xticklabels={$a$,$b$},
  ytick=\empty,
  tick label style={font=\scriptsize}, label style={font=\small},
  samples=100,
]
\addplot[thick, domain=0.2:3.3] {0.6*x + 0.9*sin(deg(1.4*x))};
\draw[dashed] (axis cs:0.4,0.718) -- (axis cs:3.0,1.016);
\addplot[only marks, mark=*, mark size=1.3pt] coordinates {(0.4,0.718) (3.0,1.016)};
\node[font=\scriptsize, anchor=south] at (axis cs:1.7,1.0) {secante};
\end{axis}
\end{tikzpicture}
\end{center}
```

El teorema del valor medio dice que **la pendiente media se alcanza en algún punto**, y
de él salen casi todas las consecuencias prácticas:

| Consecuencia | Enunciado |
| --- | --- |
| Crecimiento | $f' > 0$ en un intervalo $\Rightarrow$ $f$ es creciente ahí |
| Decrecimiento | $f' < 0$ $\Rightarrow$ decreciente |
| Funciones constantes | $f' \equiv 0$ en un intervalo $\Rightarrow$ $f$ constante |
| Unicidad de primitivas | dos funciones con la misma derivada difieren en una constante |

La tercera y la cuarta son la base del tema 4: sin ellas, la regla de Barrow no tendría
sentido.

### L'Hôpital

```{=latex}
\begin{teorema}[Regla de L'Hôpital]
Si $\lim f = \lim g = 0$ (o las dos tienden a $\infty$), $g'$ no se anula cerca de $a$
y existe $\lim f'/g'$, entonces
$$\lim_{x\to a}\frac{f(x)}{g(x)} = \lim_{x\to a}\frac{f'(x)}{g'(x)}$$
\end{teorema}

\begin{anotacion}
Tres cautelas. Solo se aplica a $0/0$ y $\infty/\infty$: las otras cinco
indeterminaciones hay que reescribirlas primero. Que el límite de los cocientes de
derivadas \emph{no} exista no significa que el original no exista. Y derivar
repetidamente puede complicar la expresión en vez de simplificarla, en cuyo caso la
herramienta correcta es el desarrollo de Taylor del tema 5.
\end{anotacion}
```

## Extremos y representación de funciones

| Concepto | Definición |
| --- | --- |
| Punto crítico | $f'(x)=0$ o $f'$ no existe |
| Máximo local | $f(x) \ge f(t)$ para $t$ en un entorno |
| Punto de inflexión | cambia la concavidad |
| Convexa | $f'' > 0$; la curva queda por encima de sus tangentes |
| Cóncava | $f'' < 0$ |

Los criterios para clasificar un punto crítico $c$:

| Criterio | Cómo |
| --- | --- |
| De la primera derivada | mira el signo de $f'$ a los dos lados |
| De la segunda derivada | $f''(c) > 0$ mínimo, $f''(c) < 0$ máximo, $f''(c)=0$ no decide |

```{=latex}
\begin{anotacion}
Los extremos de una función continua en $[a,b]$ pueden estar en tres sitios: puntos
críticos, puntos donde $f'$ no existe, y \textbf{los extremos del intervalo}. Olvidar
los del intervalo es el error más frecuente al optimizar, y Weierstrass garantiza que
el máximo existe en alguno de esos tres sitios.
\end{anotacion}
```

El guion completo para representar una función:

1. Dominio, cortes con los ejes y signo.
2. Simetrías y periodicidad.
3. Asíntotas verticales, horizontales y oblicuas.
4. Primera derivada: crecimiento y extremos.
5. Segunda derivada: concavidad e inflexiones.
6. Tabla de valores y dibujo.

## Métodos numéricos de resolución de ecuaciones

La mayoría de las ecuaciones no tienen solución en forma cerrada, así que se aproxima.
Los dos métodos del programa.

### Bisección

Se apoya en Bolzano: si $f(a)f(b) < 0$, hay raíz en $(a,b)$. Se parte el intervalo por
la mitad y se conserva el subintervalo donde el signo sigue cambiando.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10cm, height=5cm, axis lines=middle,
  xmin=-0.3, xmax=2.6, ymin=-1.6, ymax=2.6,
  xtick=\empty, ytick=\empty, samples=100,
]
\addplot[thick, domain=0:2.5] {x*x - 2};
\addplot[only marks, mark=*, mark size=1.2pt]
  coordinates {(0,-2) (2.5,4.25)};
\draw[dashed] (axis cs:1.25,-1.6) -- (axis cs:1.25,2.6);
\draw[dashed] (axis cs:1.875,-1.6) -- (axis cs:1.875,2.6);
\node[font=\scriptsize, anchor=north] at (axis cs:1.25,-0.15) {$m_1$};
\node[font=\scriptsize, anchor=north] at (axis cs:1.9,-0.15) {$m_2$};
\end{axis}
\end{tikzpicture}
\end{center}
```

Tras $n$ pasos, la raíz está localizada en un intervalo de longitud $(b-a)/2^n$, así
que el número de iteraciones para una tolerancia $\varepsilon$ se conoce **de
antemano**:

$$n \ge \log_2\frac{b-a}{\varepsilon}$$

| Ventaja | Inconveniente |
| --- | --- |
| Converge siempre si hay cambio de signo | convergencia lenta, lineal |
| El número de pasos se sabe por adelantado | no aprovecha nada de la forma de $f$ |
| No necesita la derivada | no detecta raíces dobles, que no cambian el signo |

### Newton-Raphson

Aproxima $f$ por su tangente y toma como siguiente candidato el corte de la tangente
con el eje:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

| Ventaja | Inconveniente |
| --- | --- |
| Convergencia cuadrática: dobla las cifras correctas en cada paso | puede no converger si el inicio está lejos |
| Pocas iteraciones cuando funciona | necesita $f'$, y que no se anule |
| Se generaliza a sistemas | oscila o diverge en configuraciones desfavorables |

```{=latex}
\begin{ejemplo}
Para $f(x)=x^2-2$ con $x_0=1$, la iteración es
$x_{n+1} = \tfrac{1}{2}\left(x_n + \tfrac{2}{x_n}\right)$:

\medskip
\begin{tabular}{@{}cll@{}}
\toprule
$n$ & $x_n$ & cifras correctas \\
\midrule
0 & 1{,}000000000 & 0 \\
1 & 1{,}500000000 & 0 \\
2 & 1{,}416666667 & 2 \\
3 & 1{,}414215686 & 5 \\
4 & 1{,}414213562 & 11 \\
\bottomrule
\end{tabular}

\medskip
La columna de la derecha es la convergencia cuadrática: 0, 2, 5, 11. Bisección
necesitaría unas 37 iteraciones para lo mismo.
\end{ejemplo}
```

**Cuándo falla Newton**, que es tan importante como cuándo funciona:

- Si $f'(x_n)$ es próxima a cero, el paso se dispara y el método se va lejos.
- Con un punto inicial mal elegido puede entrar en un ciclo y oscilar sin avanzar.
- En una raíz múltiple la convergencia deja de ser cuadrática y pasa a lineal.

De ahí la estrategia habitual en la práctica: **empezar con bisección** para acotar la
raíz y **terminar con Newton** para afinar. Se combina la garantía de la primera con la
velocidad del segundo.

## Ejercicios

```{=latex}
\begin{ejercicio}
Probar que $x^3 + x - 1 = 0$ tiene una única raíz real y localizarla en un intervalo
de longitud $0{,}25$.
\end{ejercicio}

\begin{solucion}
$f$ es continua, $f(0)=-1$ y $f(1)=1$, así que por Bolzano hay raíz en $(0,1)$. Es
única porque $f'(x)=3x^2+1 > 0$ para todo $x$, luego $f$ es estrictamente creciente y
no puede cortar el eje dos veces. Bisectando: $f(0{,}5)=-0{,}375$, así que la raíz está
en $(0{,}5,1)$; $f(0{,}75)=0{,}172$, luego está en $(0{,}5,\ 0{,}75)$, de longitud
$0{,}25$.
\end{solucion}

\begin{ejercicio}
¿Cuántas iteraciones de bisección hacen falta para aproximar una raíz en $[1,2]$ con
error menor que $10^{-6}$?
\end{ejercicio}

\begin{solucion}
$1/2^n < 10^{-6}$, es decir $2^n > 10^6$, de donde $n > 19{,}93$: veinte iteraciones.
La cifra se conoce antes de empezar y no depende de la función, solo de la longitud
del intervalo, que es la ventaja del método.
\end{solucion}

\begin{ejercicio}
Aplicar Newton a $f(x)=x^3-2x+2$ con $x_0=0$. ¿Qué ocurre?
\end{ejercicio}

\begin{solucion}
$f'(x)=3x^2-2$, así que $x_1 = 0 - 2/(-2) = 1$, y $x_2 = 1 - 1/1 = 0$. El método
oscila entre 0 y 1 indefinidamente sin acercarse a la raíz, que está cerca de
$-1{,}77$. Es el caso del ciclo: converger no está garantizado, y por eso un criterio
de parada por número máximo de iteraciones es obligatorio.
\end{solucion}
```

Los teoremas de continuidad y derivabilidad están desarrollados en \cite{rogawski},
\cite{stewart2001} y \cite{alaminos2019}, y los métodos de bisección y Newton en
\cite{burden2004}.
