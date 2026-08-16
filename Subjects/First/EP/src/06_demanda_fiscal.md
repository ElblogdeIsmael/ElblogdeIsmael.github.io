# La demanda agregada y la política fiscal

Capítulo 6 del programa. Consumo y ahorro, inversión privada y el modelo keynesiano del
multiplicador, la política fiscal keynesiana con sus multiplicadores, y el presupuesto
público.

## Consumo y ahorro

$$C = C_0 + c\,Y_d, \qquad S = Y_d - C = -C_0 + (1-c)\,Y_d$$

| Concepto | Definición | Rango |
| --- | --- | --- |
| Consumo autónomo $C_0$ | el que no depende de la renta | positivo |
| Propensión marginal a consumir $c$ | $\Delta C/\Delta Y_d$ | entre 0 y 1 |
| Propensión marginal a ahorrar | $1-c$ | entre 0 y 1 |

**Que $c$ esté entre 0 y 1 es lo que hace converger todo el capítulo**: de cada euro
adicional se gasta una parte y se ahorra el resto.

Otros determinantes del consumo, además de la renta corriente: la riqueza acumulada, las
expectativas sobre la renta futura, el tipo de interés y el acceso al crédito.

```{=latex}
\begin{anotacion}
La \textbf{teoría de la renta permanente} matiza el modelo: se consume según la renta
esperada a largo plazo, no según la del mes. Por eso una rebaja fiscal transitoria
estimula mucho menos que una permanente, y por eso las ayudas a hogares con restricciones
de liquidez tienen más efecto que las generales: son los que sí gastan todo lo que
reciben.
\end{anotacion}
```

## Inversión privada

$$I = I_0 - b\,i$$

| Determinante | Efecto |
| --- | --- |
| Tipo de interés | negativo: es el coste de financiarse |
| Expectativas de demanda futura | positivo |
| Beneficios y ventas actuales | positivo |
| Incertidumbre | negativo |

**La inversión es el componente más volátil de la demanda**, porque depende de
expectativas sobre un futuro incierto. Las recesiones se explican más por su caída que por
la del consumo, que es mucho más estable.

## El modelo del multiplicador

En equilibrio, la producción iguala a la demanda:

$$Y = C_0 + cY + I \qquad\Longrightarrow\qquad Y^{*} = \frac{C_0+I}{1-c}$$

```{=latex}
\begin{definicion}[Multiplicador]
$$\alpha = \frac{1}{1-c}$$
Un aumento del gasto autónomo de una unidad eleva la renta de equilibrio en $\alpha$.
\end{definicion}
```

**La lógica:** el gasto inicial se convierte en renta de alguien, que consume una fracción
$c$; ese consumo es renta de otro, que vuelve a consumir $c$ de ella, y así
indefinidamente. La suma de la serie geométrica es $1/(1-c)$.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.6cm, height=5.6cm, axis lines=left,
  xlabel={ronda}, ylabel={gasto adicional},
  xmin=0, xmax=9, ymin=0, ymax=110,
  tick label style={font=\scriptsize}, label style={font=\small},
  ybar, bar width=8pt,
]
\addplot[fill=black!25, draw=black!55] coordinates
  {(1,100) (2,75) (3,56.3) (4,42.2) (5,31.6) (6,23.7) (7,17.8) (8,13.3)};
\end{axis}
\end{tikzpicture}
\end{center}
```

Con $c = 0{,}75$, un gasto inicial de 100 genera rondas sucesivas de 75, 56,3, 42,2… y el
total converge a 400, que es $100 \times 4$.

```{=latex}
\begin{anotacion}
La \textbf{paradoja del ahorro}: si todos deciden ahorrar más a la vez, la demanda cae, la
renta cae y el ahorro total puede acabar igual o menor. Lo prudente para una familia es
contraproducente para el conjunto. Es una falacia de composición, y solo se produce en un
modelo donde la demanda determina la producción, es decir, a corto plazo y con capacidad
ociosa.
\end{anotacion}
```

## Política fiscal keynesiana

Con sector público y $T = T_0 + tY$:

$$Y^{*} = \frac{C_0 - cT_0 + I + G}{1-c(1-t)}$$

| Multiplicador | Expresión |
| --- | --- |
| Del gasto público | $\dfrac{1}{1-c(1-t)}$ |
| De los impuestos autónomos | $\dfrac{-c}{1-c(1-t)}$ |
| De las transferencias | $\dfrac{c}{1-c(1-t)}$ |
| Del presupuesto equilibrado | $1$, con $t=0$ |

**Tres resultados que conviene retener:**

- El multiplicador del gasto público es **mayor en valor absoluto** que el impositivo,
  porque el gasto entra entero en la demanda y una rebaja fiscal solo entra en la
  proporción $c$.
- El **teorema del presupuesto equilibrado**: subir gasto e impuestos en la misma cuantía
  eleva la renta exactamente en esa cuantía.
- El tipo impositivo $t$ **reduce** el multiplicador, y por eso actúa como estabilizador
  automático.

| Política | Cuándo | Instrumentos |
| --- | --- | --- |
| **Expansiva** | recesión, brecha recesiva | más gasto, menos impuestos |
| **Contractiva** | sobrecalentamiento | menos gasto, más impuestos |

| Estabilizadores automáticos | Cómo actúan |
| --- | --- |
| Impuestos proporcionales y progresivos | recaudan menos en recesión |
| Prestaciones por desempleo | aumentan en recesión |

**Actúan sin que nadie decida nada**, lo que evita los retardos de la política
discrecional: reconocer la situación, aprobar la medida y que surta efecto.

## El presupuesto público

$$\text{Saldo} = T - G$$

| Saldo | Situación |
| --- | --- |
| Positivo | superávit |
| Negativo | déficit |
| Nulo | equilibrio |

| Componente | Qué recoge |
| --- | --- |
| **Cíclico** | la parte que se debe a la posición en el ciclo |
| **Estructural** | el que habría con la economía en su nivel potencial |

**Distinguirlos es esencial para juzgar la política fiscal.** Un déficit puramente cíclico
se corrige solo con la recuperación, y combatirlo subiendo impuestos en plena recesión
agrava la caída. Solo el déficit estructural exige medidas.

El déficit acumulado es la **deuda pública**, y su sostenibilidad depende de la relación
entre el tipo de interés real y el crecimiento, no de su nivel absoluto.

| Límite de la política fiscal | En qué consiste |
| --- | --- |
| Retardos | de reconocimiento, de decisión y de efecto |
| Efecto expulsión | el gasto público desplaza inversión privada |
| Restricciones institucionales | reglas de déficit y deuda |
| Sostenibilidad | el déficit de hoy es deuda de mañana |
| Equivalencia ricardiana | si los hogares anticipan impuestos futuros, ahorran la rebaja |

## Ejercicios

```{=latex}
\begin{ejercicio}
Con $c = 0{,}8$ y sin impuestos, calcular el multiplicador y el efecto sobre la renta de
un aumento del gasto público de 50.
\end{ejercicio}

\begin{solucion}
$\alpha = 1/(1-0{,}8) = 5$, así que $\Delta Y = 5\cdot50 = 250$.

\medskip
Con un tipo impositivo del 25\,\% el multiplicador bajaría a
$1/(1-0{,}8\cdot0{,}75) = 2{,}5$ y el efecto a 125: el estabilizador automático amortigua
la mitad.
\end{solucion}

\begin{ejercicio}
Un gobierno sube el gasto en 100 y los impuestos autónomos en 100, con $c = 0{,}75$.
¿Cuál es el efecto neto sobre la renta?
\end{ejercicio}

\begin{solucion}
Multiplicador del gasto: 4, así que $+400$. Multiplicador impositivo: $-3$, así que
$-300$. Efecto neto $+100$, exactamente el aumento del gasto.

\medskip
Es el teorema del presupuesto equilibrado: un presupuesto neutral no es neutral en renta,
porque el gasto público se gasta entero y los impuestos solo reducen el consumo en la
proporción $c$.
\end{solucion}

\begin{ejercicio}
Un país registra un déficit del 5\,\% del PIB en plena recesión. ¿Debe corregirlo de
inmediato?
\end{ejercicio}

\begin{solucion}
Primero hay que descomponerlo. Si buena parte es cíclico —menos recaudación y más
prestaciones por la propia recesión—, corregirlo subiendo impuestos o recortando gasto
profundizaría la caída y podría no reducir el déficit, porque la recaudación bajaría aún
más.

\medskip
Lo que exige corrección es el componente estructural, y el momento razonable para hacerlo
es la fase expansiva. Es la lógica de los estabilizadores automáticos y de las reglas
fiscales que se formulan en términos de saldo estructural.
\end{solucion}
```

La demanda agregada y la política fiscal están desarrolladas en \cite{krugman2022},
\cite{mankiw2017} y \cite{samuelson2010}, con la exposición de \cite{mochon2009}.
