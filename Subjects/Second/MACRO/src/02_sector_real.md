# El sector real en una economía cerrada

Tema 2 del programa. Consumo, inversión y renta de equilibrio, el sector público y el
presupuesto, y la derivación de la curva IS con su pendiente y su posición.

## El mercado de bienes

El supuesto de partida, que define el corto plazo keynesiano: **los precios están fijos y
la producción se ajusta a la demanda**. Las empresas producen lo que se les pide mientras
haya capacidad ociosa.

$$Z = C + I + G$$

y el equilibrio exige $Y = Z$: la producción iguala a la demanda.

## Consumo

```{=latex}
\begin{definicion}[Función de consumo keynesiana]
$$C = C_0 + c\,Y_d, \qquad Y_d = Y - T$$
con $C_0>0$ el consumo autónomo y $0<c<1$ la propensión marginal a consumir.
\end{definicion}
```

| Concepto | Definición |
| --- | --- |
| Propensión marginal a consumir | $c = \Delta C/\Delta Y_d$ |
| Propensión marginal a ahorrar | $s = 1-c$ |
| Propensión media a consumir | $C/Y_d$, decreciente con la renta |

**Que $c$ esté entre 0 y 1 es lo que hace converger el multiplicador**: cada euro extra
de renta se gasta solo en parte, y la cadena de gasto inducido tiene suma finita.

Otras teorías del consumo, que corrigen la keynesiana:

| Teoría | Idea |
| --- | --- |
| Renta permanente (Friedman) | se consume según la renta esperada a largo plazo |
| Ciclo vital (Modigliani) | se ahorra en la edad activa y se desahorra en la jubilación |

Las dos explican por qué **un aumento transitorio de renta se consume mucho menos que uno
permanente**, y por eso una rebaja fiscal temporal estimula menos de lo que el modelo
simple predice.

## Inversión

$$I = I_0 - b\,i$$

Depende negativamente del tipo de interés, y la razón es doble: el tipo es el coste de
financiar el proyecto, y también el rendimiento de la alternativa financiera.

| Determinante | Efecto |
| --- | --- |
| Tipo de interés | negativo |
| Expectativas de demanda | positivo |
| Renta o ventas actuales | positivo (acelerador) |
| Incertidumbre | negativo |

**La inversión es el componente más volátil de la demanda**, y por eso las recesiones se
explican más por su caída que por la del consumo.

## Renta de equilibrio y multiplicador

Sin sector público:

$$Y = C_0 + cY + I \qquad\Longrightarrow\qquad
Y^{*} = \frac{1}{1-c}\,(C_0 + I)$$

```{=latex}
\begin{definicion}[Multiplicador]
$$\alpha = \frac{1}{1-c} = \frac{1}{s}$$
Un aumento de gasto autónomo de una unidad aumenta la renta de equilibrio en $\alpha$
unidades.
\end{definicion}
```

**La lógica del multiplicador:** el gasto inicial se convierte en renta de alguien, que
consume una fracción $c$, generando renta de nuevo, y así indefinidamente. La suma es la
serie geométrica $1+c+c^2+\dots = 1/(1-c)$.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.6cm, height=6.0cm, axis lines=left,
  xlabel={$Y$}, ylabel={demanda},
  xmin=0, xmax=10, ymin=0, ymax=10,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\addplot[thick, domain=0:10] {x};
\addplot[thick, domain=0:10] {2 + 0.6*x};
\addplot[dashed, domain=0:10] {3 + 0.6*x};
\addplot[only marks, mark=*, mark size=1.4pt] coordinates {(5,5) (7.5,7.5)};
\node[font=\scriptsize, anchor=west] at (axis cs:8.2,8.6) {$Z=Y$};
\node[font=\scriptsize, anchor=west] at (axis cs:8.2,7.1) {$Z'$};
\node[font=\scriptsize, anchor=west] at (axis cs:8.2,6.1) {$Z$};
\end{axis}
\end{tikzpicture}
\end{center}
```

En la figura, un aumento del gasto autónomo de 1 desplaza la demanda hacia arriba y la
renta de equilibrio pasa de 5 a 7,5: el multiplicador vale $1/(1-0{,}6) = 2{,}5$.

```{=latex}
\begin{anotacion}
La \textbf{paradoja del ahorro}: si todos deciden ahorrar más a la vez, la demanda cae, la
renta cae, y el ahorro total puede acabar igual o menor. Lo que es prudente para un
individuo puede ser contraproducente para el conjunto. Es el ejemplo clásico de falacia
de composición en economía, y solo aparece en un modelo donde la demanda determina la
producción.
\end{anotacion}
```

## El sector público

Con impuestos proporcionales $T = T_0 + tY$:

$$Y^{*} = \frac{1}{1-c(1-t)}\,(C_0 - cT_0 + I + G)$$

| Multiplicador | Expresión |
| --- | --- |
| Del gasto público | $\dfrac{1}{1-c(1-t)}$ |
| De los impuestos autónomos | $\dfrac{-c}{1-c(1-t)}$ |
| Del presupuesto equilibrado | $1$, si $t=0$ |

**Dos resultados que conviene retener:**

- El multiplicador del gasto es **mayor en valor absoluto** que el de los impuestos,
  porque el gasto público entra entero en la demanda y una rebaja fiscal solo entra en la
  proporción $c$.
- El **teorema del presupuesto equilibrado**: subir gasto e impuestos en la misma cantidad
  aumenta la renta en esa cantidad. El multiplicador vale exactamente 1.

Y el tipo impositivo $t$ actúa como **estabilizador automático**: reduce el multiplicador,
así que amortigua tanto las expansiones como las recesiones sin que nadie tome ninguna
decisión.

### El presupuesto

$$\text{Saldo} = T_0 + tY - G$$

| Componente | Qué recoge |
| --- | --- |
| Saldo estructural | el que habría con la economía en su nivel potencial |
| Saldo cíclico | la parte que se debe a la posición en el ciclo |

La distinción importa para juzgar la política fiscal: **un déficit en recesión puede ser
enteramente cíclico**, y corregirlo subiendo impuestos agravaría la caída.

## La curva IS

Hasta aquí el tipo de interés estaba dado. Dejándolo variar, cada valor de $i$ da una
renta de equilibrio distinta, y el lugar de esos pares es la **curva IS**: las
combinaciones de $(Y, i)$ que equilibran el mercado de bienes.

$$Y = \frac{1}{1-c(1-t)}\,\big(A_0 - b\,i\big)$$

con $A_0$ el gasto autónomo total.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.4cm, height=5.8cm, axis lines=left,
  xlabel={$Y$}, ylabel={$i$},
  xmin=0, xmax=10, ymin=0, ymax=8,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\addplot[thick, domain=0.5:8] {7 - 0.75*x};
\addplot[dashed, domain=2:9.5] {8.5 - 0.75*x};
\draw[->, >=stealth] (axis cs:4.5,3.4) -- (axis cs:6.2,3.4);
\node[font=\scriptsize, anchor=west] at (axis cs:7.0,1.6) {IS};
\node[font=\scriptsize, anchor=west] at (axis cs:8.3,2.2) {IS$'$};
\end{axis}
\end{tikzpicture}
\end{center}
```

**Por qué tiene pendiente negativa:** un tipo más alto reduce la inversión, la demanda
cae y con ella la renta de equilibrio.

| Determinante de la pendiente | Efecto |
| --- | --- |
| $b$ grande: inversión muy sensible al tipo | IS más plana |
| $c$ grande: multiplicador alto | IS más plana |
| $t$ grande: estabilizador fuerte | IS más inclinada |

| Desplaza la IS a la derecha | Motivo |
| --- | --- |
| Aumento de $G$ | más demanda para cada tipo |
| Reducción de $T_0$ | más renta disponible |
| Mejora de expectativas | más inversión autónoma |
| Aumento del consumo autónomo | ídem |

```{=latex}
\begin{anotacion}
Una subida del tipo de interés \textbf{no desplaza} la IS: produce un movimiento a lo
largo de ella. La confusión entre movimiento y desplazamiento es el error más repetido
del tema, y se evita recordando que el tipo es una de las dos variables de los ejes.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
En una economía cerrada, $C = 200 + 0{,}75Y_d$, $I = 300 - 20i$, $G = 400$ y
$T = 0{,}2Y$. Hallar la ecuación de la IS.
\end{ejercicio}

\begin{solucion}
$Y = 200 + 0{,}75(Y-0{,}2Y) + 300 - 20i + 400 = 900 + 0{,}6Y - 20i$, de donde
$$Y = \frac{900 - 20i}{0{,}4} = 2250 - 50i$$
El multiplicador es $1/(1-0{,}75\cdot0{,}8) = 2{,}5$. Con $i=5$, la renta de equilibrio
es 2000.
\end{solucion}

\begin{ejercicio}
Con $c=0{,}8$ y sin impuestos, calcular el efecto sobre la renta de subir $G$ en 100, de
bajar $T_0$ en 100, y de hacer las dos cosas a la vez.
\end{ejercicio}

\begin{solucion}
Multiplicador del gasto: $1/0{,}2 = 5$, así que $\Delta Y = 500$.

\medskip
Multiplicador impositivo: $-0{,}8/0{,}2 = -4$, así que bajar $T_0$ en 100 da
$\Delta Y = 400$.

\medskip
Subir $G$ en 100 \emph{y} $T_0$ en 100 —presupuesto equilibrado— da
$500 - 400 = 100$: exactamente el aumento del gasto. Es el teorema del presupuesto
equilibrado.
\end{solucion}

\begin{ejercicio}
¿Por qué un tipo impositivo proporcional reduce el multiplicador?
\end{ejercicio}

\begin{solucion}
Porque interrumpe la cadena de gasto inducido: de cada euro de renta adicional, el
Estado retira $t$, así que solo $c(1-t)$ se convierte en consumo en la ronda siguiente en
vez de $c$. El multiplicador pasa de $1/(1-c)$ a $1/(1-c(1-t))$, que es menor.

\medskip
Eso hace la economía más estable ante perturbaciones, en las dos direcciones, y por eso
$t$ es un estabilizador automático.
\end{solucion}
```

El modelo del mercado de bienes y la curva IS están desarrollados en \cite{blanchard2017}
y \cite{dornbusch2020}, con problemas resueltos en \cite{sanchez2012} y
\cite{belzunegui2014}.
