# Distribuciones discretas de probabilidad

Tema 7 del programa. Las distribuciones uniforme discreta, binomial, de Poisson,
hipergeométrica y geométrica.

## Uniforme discreta

Todos los valores $1,2,\dots,n$ tienen la misma probabilidad.

$$P(X=k) = \frac{1}{n}, \qquad E[X] = \frac{n+1}{2}, \qquad
\Var(X) = \frac{n^2-1}{12}$$

Modela el dado equilibrado, el sorteo puro y la generación de números aleatorios. Es la
distribución de referencia cuando no hay ninguna razón para preferir un resultado.

## Binomial

```{=latex}
\begin{definicion}
$X\sim \Bin(n,p)$ cuenta los éxitos en $n$ pruebas de Bernoulli independientes con
probabilidad de éxito $p$ constante:
$$P(X=k) = \binom{n}{k}p^{k}(1-p)^{n-k}, \qquad k=0,1,\dots,n$$
\end{definicion}
```

$$E[X] = np, \qquad \Var(X) = np(1-p)$$

**Las tres hipótesis son las que hay que comprobar antes de usarla:**

| Hipótesis | Qué exige |
| --- | --- |
| Número fijo de pruebas | $n$ se decide de antemano |
| Independencia | el resultado de una no afecta a las demás |
| Probabilidad constante | $p$ no cambia entre pruebas |

Muestrear **sin reposición** rompe las dos últimas, y entonces la distribución correcta
es la hipergeométrica.

```{=latex}
\begin{proposicion}[Propiedades]
La suma de binomiales independientes con la misma $p$ es binomial:
$\Bin(n_1,p)+\Bin(n_2,p) = \Bin(n_1+n_2,p)$. La distribución es simétrica si $p=0{,}5$,
asimétrica a la derecha si $p<0{,}5$ y a la izquierda si $p>0{,}5$.
\end{proposicion}
```

```{=latex}
\begin{ejemplo}
Una máquina produce un 3\,\% de piezas defectuosas. En un lote de 20 piezas, la
probabilidad de que haya como mucho una defectuosa es
$$P(X\le1) = 0{,}97^{20} + 20\cdot0{,}03\cdot0{,}97^{19} = 0{,}5438+0{,}3364 = 0{,}8802$$
Es decir, un 88\,\% de los lotes pasan un control que rechace a partir de dos
defectuosas.
\end{ejemplo}
```

## Poisson

```{=latex}
\begin{definicion}
$X\sim\Poi(\lambda)$ cuenta sucesos raros en un intervalo fijo de tiempo o espacio:
$$P(X=k) = \frac{e^{-\lambda}\lambda^{k}}{k!}, \qquad k=0,1,2,\dots$$
\end{definicion}
```

$$E[X] = \Var(X) = \lambda$$

**Que la media y la varianza coincidan es su rasgo distintivo**, y sirve de comprobación
empírica: si en unos datos de recuento la varianza supera con mucho a la media, el modelo
de Poisson no es adecuado.

Dónde aparece: llamadas a una centralita por hora, clientes que entran en una tienda,
averías de una máquina, erratas por página, siniestros de una cartera de seguros.

```{=latex}
\begin{teorema}[Aproximación de la binomial]
Si $n$ es grande y $p$ pequeño con $np = \lambda$ moderado, entonces
$\Bin(n,p) \approx \Poi(\lambda)$. En la práctica se aplica con $n\ge 30$ y $p\le 0{,}1$.
\end{teorema}
```

La aproximación es útil porque el factorial de la binomial se vuelve inmanejable con $n$
grande, mientras que la fórmula de Poisson no depende de $n$.

```{=latex}
\begin{ejemplo}
Una centralita recibe 3 llamadas por minuto de media. La probabilidad de recibir 5 en un
minuto es
$$P(X=5) = \frac{e^{-3}\,3^{5}}{5!} = \frac{0{,}0498\cdot243}{120} = 0{,}1008$$
Y la de no recibir ninguna, $e^{-3} = 0{,}0498$.

\medskip
Para un intervalo de dos minutos hay que \textbf{reescalar} el parámetro: $\lambda = 6$,
no $\lambda = 3$. Es el error más frecuente con esta distribución.
\end{ejemplo}
```

## Hipergeométrica

```{=latex}
\begin{definicion}
Extracciones \textbf{sin reposición}: de una población de $N$ elementos con $K$ éxitos,
se toman $n$ y se cuenta cuántos son éxitos.
$$P(X=k) = \frac{\binom{K}{k}\binom{N-K}{n-k}}{\binom{N}{n}}$$
\end{definicion}
```

$$E[X] = n\frac{K}{N}, \qquad
\Var(X) = n\frac{K}{N}\left(1-\frac{K}{N}\right)\frac{N-n}{N-1}$$

La media es la misma que la de una binomial con $p = K/N$; lo que cambia es la varianza,
multiplicada por el **factor de corrección para poblaciones finitas**
$(N-n)/(N-1)$, que es menor que 1: muestrear sin reposición reduce la variabilidad
porque cada extracción aporta información sobre las siguientes.

```{=latex}
\begin{proposicion}
Si $n$ es pequeño frente a $N$ —en la práctica, $n \le 0{,}05N$— la hipergeométrica se
aproxima bien por la binomial con $p = K/N$.
\end{proposicion}
```

Es la razón de que en una encuesta a mil personas de un país entero se use la binomial
sin más: la población es tan grande que reponer o no reponer es indiferente.

```{=latex}
\begin{ejemplo}
Un lote de 50 piezas contiene 8 defectuosas. Se toman 5 al azar sin reposición. La
probabilidad de que ninguna sea defectuosa es
$$P(X=0) = \frac{\binom{8}{0}\binom{42}{5}}{\binom{50}{5}}
= \frac{850\,668}{2\,118\,760} = 0{,}4015$$

\medskip
La binomial con $p = 0{,}16$ daría $0{,}84^5 = 0{,}4182$. La diferencia es apreciable
porque $5$ frente a $50$ es el 10\,\% de la población, por encima del umbral del 5\,\%.
\end{ejemplo}
```

## Geométrica

```{=latex}
\begin{definicion}
Número de pruebas hasta el primer éxito, en pruebas de Bernoulli independientes:
$$P(X=k) = (1-p)^{k-1}p, \qquad k=1,2,3,\dots$$
\end{definicion}
```

$$E[X] = \frac{1}{p}, \qquad \Var(X) = \frac{1-p}{p^2}$$

**La media $1/p$ es muy intuitiva:** si la probabilidad de éxito es $1/6$, se esperan 6
intentos.

```{=latex}
\begin{proposicion}[Falta de memoria]
$$P(X > m+n \mid X > m) = P(X > n)$$
\end{proposicion}
```

Es la única distribución discreta con esa propiedad, y su lectura es tajante: **haber
fallado muchas veces no acerca el éxito**. La creencia contraria es la falacia del
jugador, y esta fórmula es su refutación exacta.

## Cómo se elige

| Situación | Distribución |
| --- | --- |
| Resultados equiprobables | uniforme discreta |
| Éxitos en $n$ pruebas, con reposición | binomial |
| Éxitos en $n$ pruebas, sin reposición | hipergeométrica |
| Sucesos raros por unidad de tiempo o espacio | Poisson |
| Pruebas hasta el primer éxito | geométrica |

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth, font=\scriptsize,
  c/.style={draw, minimum width=27mm, minimum height=7mm, align=center}
]
\node[c] (r) at (0,0) {¿se cuenta en $n$ pruebas\\o hasta el éxito?};
\node[c] (n) at (-3.4,-1.9) {en $n$ pruebas};
\node[c] (g) at (3.4,-1.9) {hasta el éxito:\\geométrica};
\node[c] (rep) at (-5.6,-3.8) {con reposición:\\binomial};
\node[c] (sin) at (-1.6,-3.8) {sin reposición:\\hipergeométrica};
\draw[->] (r) -- (n); \draw[->] (r) -- (g);
\draw[->] (n) -- (rep); \draw[->] (n) -- (sin);
\node[c, dashed] (p) at (3.4,-3.9)
  {si no hay pruebas y se\\cuenta por unidad de\\tiempo o espacio: Poisson};
\end{tikzpicture}
\end{center}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Un examen tipo test tiene 10 preguntas con 4 opciones cada una. Respondiendo al azar,
¿cuál es la probabilidad de acertar al menos 5?
\end{ejercicio}

\begin{solucion}
$X\sim\Bin(10,\ 0{,}25)$. Se calcula por el complementario:
$$P(X\ge5) = 1 - P(X\le4) = 1 - 0{,}9219 = 0{,}0781$$
Un 7,8\,\%. La media es $np = 2{,}5$ aciertos, así que acertar 5 es ya el doble de lo
esperado.
\end{solucion}

\begin{ejercicio}
Una web recibe 120 visitas por hora. ¿Cuál es la probabilidad de que en un minuto
concreto no reciba ninguna?
\end{ejercicio}

\begin{solucion}
Hay que reescalar: 120 por hora son $\lambda = 2$ por minuto. Entonces
$P(X=0) = e^{-2} = 0{,}1353$. Usar $\lambda = 120$ daría un número absurdo, y es el error
que la reescala evita.
\end{solucion}

\begin{ejercicio}
Un comercial cierra una venta en el 20\,\% de sus visitas. ¿Cuántas visitas necesita de
media hasta la primera venta? ¿Cuál es la probabilidad de necesitar más de 5?
\end{ejercicio}

\begin{solucion}
Es geométrica con $p=0{,}2$, así que $E[X] = 1/0{,}2 = 5$ visitas.

\medskip
$P(X>5) = (1-p)^5 = 0{,}8^5 = 0{,}3277$: casi un tercio de las veces hará falta más de
cinco. Y por la falta de memoria, si ya lleva cinco fracasos, la probabilidad de
necesitar más de cinco adicionales sigue siendo 0,3277.
\end{solucion}
```

Las distribuciones discretas están desarrolladas en \cite{canavos1989} y
\cite{castillo2006}, con problemas resueltos en \cite{hermoso2000}, \cite{newbold2013}
y \cite{amor2016}.
