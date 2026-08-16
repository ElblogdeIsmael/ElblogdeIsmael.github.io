# Los mercados de bienes y financieros en una economía abierta

Tema 5 del programa. La balanza de pagos y los sistemas de tipos de cambio, el análisis
IS-LM en economía abierta, el equilibrio interno y externo con flujos de capital, y el
modelo Mundell-Fleming.

## La balanza de pagos

Registro de todas las transacciones entre residentes y no residentes.

| Cuenta | Qué recoge |
| --- | --- |
| **Corriente** | bienes, servicios, rentas y transferencias |
| **De capital** | transferencias de capital |
| **Financiera** | compraventa de activos, inversión directa y de cartera |
| Errores y omisiones | discrepancias estadísticas |

```{=latex}
\begin{proposicion}
Por construcción, la balanza de pagos siempre cuadra:
$$\text{Cuenta corriente} + \text{Cuenta de capital} + \text{Cuenta financiera} = 0$$
\end{proposicion}
```

**Un déficit por cuenta corriente es, por identidad contable, una entrada neta de
capital**: el país compra más de lo que vende y lo financia vendiendo activos o
endeudándose. No es «bueno» ni «malo» por sí solo; lo relevante es si lo que se financia
es inversión productiva o consumo.

Y la relación con el ahorro interior:

$$CC = S - I$$

Un país con déficit corriente invierte más de lo que ahorra, y el diferencial lo aporta
el resto del mundo.

## Tipos de cambio

| Concepto | Definición |
| --- | --- |
| Tipo nominal $e$ | unidades de moneda extranjera por unidad nacional |
| Tipo real $\varepsilon$ | $e\,P/P^{*}$: precios relativos entre países |
| Apreciación | sube el valor de la moneda nacional |
| Depreciación | baja |
| Revaluación, devaluación | los equivalentes por decisión oficial en tipos fijos |

**El tipo real es el que determina la competitividad.** Una depreciación nominal no
mejora la posición exterior si la inflación interna se la come.

| Sistema | Cómo funciona | Ventaja | Coste |
| --- | --- | --- | --- |
| **Flexible** | lo fija el mercado | política monetaria autónoma | volatilidad |
| **Fijo** | el banco central lo defiende con reservas | certidumbre y disciplina | se pierde la política monetaria |
| Intermedios | bandas, flotación sucia | flexibilidad parcial | vulnerable a ataques |
| Unión monetaria | moneda única | elimina el riesgo de cambio | ningún ajuste por tipo de cambio |

```{=latex}
\begin{anotacion}
El \textbf{trilema} de la economía abierta: no se pueden tener a la vez tipo de cambio
fijo, libre movilidad de capitales y política monetaria autónoma. Hay que renunciar a
una. La zona euro renuncia a la tercera; China históricamente a la segunda; el Reino
Unido o Estados Unidos, a la primera. Todo el tema se puede leer como consecuencias de
esa elección.
\end{anotacion}
```

## IS-LM en economía abierta

La demanda incorpora las exportaciones netas:

$$Y = C + I + G + NX, \qquad NX = X(\varepsilon) - M(Y, \varepsilon)$$

| Efecto sobre $NX$ | Signo |
| --- | --- |
| Aumento de la renta interior | negativo: se importa más |
| Aumento de la renta exterior | positivo |
| Depreciación real | positivo, con matices |

```{=latex}
\begin{anotacion}
Los matices de la última fila tienen nombre. La \textbf{condición Marshall-Lerner} exige
que la suma de las elasticidades de exportaciones e importaciones supere 1 para que una
depreciación mejore la balanza. Y a corto plazo suele ocurrir la \textbf{curva J}: la
balanza empeora primero, porque los volúmenes tardan en responder y lo que cambia de
inmediato son los precios de lo ya contratado.
\end{anotacion}
```

La IS se desplaza a la izquierda respecto de la economía cerrada, y el multiplicador se
reduce: parte de cada euro de demanda se filtra a las importaciones.

$$\alpha_{abierta} = \frac{1}{1-c(1-t)+m} < \alpha_{cerrada}$$

## El equilibrio interno y externo

| Equilibrio | Condición |
| --- | --- |
| Interno | pleno empleo, producción en su nivel potencial |
| Externo | balanza de pagos equilibrada |

Con flujos de capital, la balanza de pagos depende del diferencial de tipos:

$$BP = NX(Y,\varepsilon) + CF(i - i^{*})$$

y la **curva BP** recoge los pares $(Y,i)$ compatibles con equilibrio exterior.

| Movilidad de capitales | Pendiente de la BP |
| --- | --- |
| Nula | vertical |
| Imperfecta | positiva |
| **Perfecta** | horizontal en $i = i^{*}$ |

## El modelo Mundell-Fleming

El IS-LM ampliado con la BP, suponiendo **movilidad perfecta de capitales**. Su resultado
es el más citado de la macroeconomía abierta.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.6cm, height=6.0cm, axis lines=left,
  xlabel={$Y$}, ylabel={$i$},
  xmin=0, xmax=10, ymin=0, ymax=8,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\addplot[thick, domain=0.5:9] {7.5 - 0.75*x};
\addplot[thick, domain=0.5:9] {0.75*x};
\addplot[thick, dashed, domain=0:10] {3.75};
\addplot[only marks, mark=*, mark size=1.5pt] coordinates {(5,3.75)};
\node[font=\scriptsize, anchor=west] at (axis cs:8.0,1.2) {IS};
\node[font=\scriptsize, anchor=west] at (axis cs:8.0,6.9) {LM};
\node[font=\scriptsize, anchor=west] at (axis cs:8.6,3.95) {BP: $i=i^{*}$};
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{teorema}[Eficacia de las políticas según el régimen cambiario]
Con movilidad perfecta de capitales:
\begin{itemize}
\item Con \emph{tipo de cambio fijo}, la política \textbf{fiscal} es muy eficaz y la
      \textbf{monetaria} es completamente ineficaz.
\item Con \emph{tipo de cambio flexible}, ocurre lo contrario: la \textbf{monetaria} es
      muy eficaz y la \textbf{fiscal} es completamente ineficaz.
\end{itemize}
\end{teorema}
```

| Régimen | Fiscal expansiva | Monetaria expansiva |
| --- | --- | --- |
| **Fijo** | $Y\uparrow\uparrow$: la entrada de capital obliga a comprar divisas y expande $M$ | nula: la salida de capital drena las reservas y revierte $M$ |
| **Flexible** | nula: la entrada de capital aprecia la moneda y hunde $NX$ | $Y\uparrow\uparrow$: la salida deprecia la moneda y dispara $NX$ |

Los mecanismos, paso a paso:

- **Fiscal con tipo fijo.** $G\uparrow$ presiona el tipo al alza, entra capital, la moneda
  tiende a apreciarse, y el banco central debe vender moneda nacional para defender la
  paridad: la oferta monetaria aumenta y refuerza el estímulo.
- **Monetaria con tipo fijo.** $M\uparrow$ baja el tipo, sale capital, la moneda tiende a
  depreciarse, y el banco central vende reservas para defenderla: la oferta monetaria
  vuelve a su nivel inicial. **La política monetaria se anula sola.**
- **Fiscal con tipo flexible.** $G\uparrow$ atrae capital, la moneda se aprecia, las
  exportaciones netas caen y compensan exactamente el estímulo. Es expulsión, pero por la
  vía exterior.
- **Monetaria con tipo flexible.** $M\uparrow$ expulsa capital, la moneda se deprecia, y
  las exportaciones netas aumentan reforzando el efecto.

```{=latex}
\begin{anotacion}
Ese teorema explica una restricción muy concreta: un país de la zona euro \textbf{no
tiene política monetaria propia}, así que la fiscal es su único instrumento de
estabilización, y además está limitada por las reglas de déficit. Es el argumento central
del debate sobre la arquitectura de la unión monetaria.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Un país tiene déficit por cuenta corriente del 4\,\% del PIB. ¿Qué dice eso de su ahorro
y su inversión?
\end{ejercicio}

\begin{solucion}
Por la identidad $CC = S - I$, su inversión supera a su ahorro nacional en un 4\,\% del
PIB, y esa diferencia la financia el exterior comprando activos del país o
prestándole.

\medskip
No es necesariamente un problema: si esa inversión es productiva y rinde más que el coste
de la financiación, el país saldrá ganando. Sí lo es si financia consumo, porque entonces
crea deuda sin crear capacidad de pago.
\end{solucion}

\begin{ejercicio}
Con tipo de cambio flexible y movilidad perfecta de capitales, el gobierno aumenta el
gasto público. ¿Qué ocurre con la renta?
\end{ejercicio}

\begin{solucion}
Nada, en el modelo Mundell-Fleming. La IS se desplaza a la derecha y el tipo tiende a
subir por encima del internacional, lo que atrae capital y aprecia la moneda. La
apreciación reduce las exportaciones netas hasta que la IS vuelve exactamente a su
posición inicial.

\medskip
El resultado es que \textbf{cambia la composición} de la demanda —más gasto público, menos
exportaciones netas— sin que la renta se mueva. Es el efecto expulsión por la vía
exterior.
\end{solucion}

\begin{ejercicio}
Una moneda se deprecia un 10\,\% en términos nominales mientras la inflación interior es
del 8\,\% y la exterior del 2\,\%. ¿Ha ganado competitividad el país?
\end{ejercicio}

\begin{solucion}
El tipo real varía aproximadamente en $-10 + 8 - 2 = -4$\,\%: se ha depreciado un 4\,\% en
términos reales, así que sí ha ganado competitividad, pero solo la mitad de lo que sugiere
la cifra nominal.

\medskip
Con una inflación interior del 12\,\% la depreciación real habría sido nula y la ganancia
de competitividad, cero. \textbf{Depreciar sin controlar la inflación no sirve de nada}, y es la
lección de las devaluaciones repetidas.
\end{solucion}
```

La economía abierta y el modelo Mundell-Fleming están desarrollados en
\cite{blanchard2017} y \cite{dornbusch2020}, con problemas resueltos en
\cite{sanchez2012} y \cite{belzunegui2014}.
