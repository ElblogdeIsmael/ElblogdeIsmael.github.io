# Equilibrio y desequilibrio macroeconómico en una economía abierta

Capítulo 8 del programa. La economía abierta y el comercio internacional, el modelo de
oferta y demanda agregadas, y los efectos de las políticas económicas.

## El comercio internacional

```{=latex}
\begin{definicion}[Ventaja comparativa]
Un país tiene ventaja comparativa en un bien si su coste de oportunidad de producirlo es
menor que el de los demás países.
\end{definicion}

\begin{teorema}[Ricardo]
El comercio basado en la ventaja comparativa beneficia a los dos países, incluso si uno
es más eficiente que el otro en la producción de \emph{todos} los bienes.
\end{teorema}
```

**Es el resultado más contraintuitivo de la economía**, y también uno de los más sólidos.
Lo que importa no es ser mejor en términos absolutos sino serlo *relativamente*: un
abogado que escribe a máquina más rápido que su secretaria sigue haciendo bien en
delegar, porque su hora vale más ejerciendo.

```{=latex}
\begin{ejemplo}
Dos países producen vino y tela. Con una unidad de trabajo:

\medskip
\begin{tabular}{@{}lcc@{}}
\toprule
& Vino & Tela \\
\midrule
País A & 6 & 4 \\
País B & 1 & 2 \\
\bottomrule
\end{tabular}

\medskip
A es mejor en las dos —ventaja absoluta en ambas—. Pero su coste de oportunidad de una
unidad de vino es $4/6 = 0{,}67$ de tela, y el de B es $2/1 = 2$. A tiene ventaja
comparativa en vino y B en tela, así que a los dos les conviene especializarse e
intercambiar.
\end{ejemplo}
```

| Otras razones para comerciar | En qué consisten |
| --- | --- |
| Economías de escala | mercados mayores permiten producir más barato |
| Diferenciación de producto | comercio intraindustrial: los dos países exportan coches |
| Diferencias de dotación de factores | el modelo Heckscher-Ohlin |
| Transferencia de tecnología | el comercio difunde conocimiento |

```{=latex}
\begin{anotacion}
El comercio beneficia al conjunto y \textbf{no a todos dentro de cada país}. Los sectores
que compiten con las importaciones pierden, y sus trabajadores tienen costes reales de
recolocación. Que la ganancia agregada supere a la pérdida no consuela a quien pierde, y
por eso el debate sobre el comercio es tanto distributivo como de eficiencia. La respuesta
razonable es compensar, no cerrar.
\end{anotacion}
```

### La balanza de pagos

| Cuenta | Qué recoge |
| --- | --- |
| Corriente | bienes, servicios, rentas y transferencias |
| De capital | transferencias de capital |
| Financiera | compraventa de activos |

Por construcción, la suma de las tres es cero: **un déficit corriente es, por identidad,
una entrada neta de capital**. El país compra más de lo que vende y lo financia vendiendo
activos o endeudándose.

Y el tipo de cambio, con sus dos regímenes:

| Régimen | Quién lo fija | Ventaja |
| --- | --- | --- |
| Flexible | el mercado | política monetaria autónoma |
| Fijo | el banco central, con reservas | certidumbre |

**El tipo real es el que decide la competitividad**: una depreciación nominal no mejora
la posición exterior si la inflación interna se la come.

## El modelo de oferta y demanda agregadas

| Curva | Pendiente | Por qué |
| --- | --- | --- |
| **Demanda agregada** | negativa | efecto saldos reales, efecto riqueza, efecto tipo de cambio |
| **Oferta agregada a corto plazo** | positiva | precios y salarios parcialmente rígidos |
| **Oferta agregada a largo plazo** | vertical en $Y_n$ | la producción la determina la capacidad |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=9.4cm, height=6.2cm, axis lines=left,
  xlabel={$Y$}, ylabel={$P$},
  xmin=0, xmax=10, ymin=0, ymax=8,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\draw[thick, gray] (axis cs:5,0) -- (axis cs:5,8);
\addplot[thick, domain=1.5:8.5] {0.9*x - 0.5};
\addplot[thick, domain=1:9] {8 - 0.8*x};
\addplot[only marks, mark=*, mark size=1.5pt] coordinates {(5,4)};
\node[font=\scriptsize, anchor=west] at (axis cs:8.0,7.0) {OA};
\node[font=\scriptsize, anchor=west] at (axis cs:8.0,1.0) {DA};
\node[font=\scriptsize, anchor=west, gray] at (axis cs:5.15,7.4) {$Y_n$};
\end{axis}
\end{tikzpicture}
\end{center}
```

| Brecha | Situación | Presión |
| --- | --- | --- |
| $Y > Y_n$ | expansiva | inflacionista |
| $Y = Y_n$ | ninguna | precios estables |
| $Y < Y_n$ | recesiva | desinflacionista |

**El ajuste al largo plazo lo hacen las expectativas de precios.** Si la producción supera
la potencial, los precios suben más de lo esperado, los salarios se renegocian al alza, la
oferta agregada se desplaza y la producción vuelve a su nivel con precios más altos.

## Efectos de las políticas económicas

| Política | Corto plazo | Largo plazo |
| --- | --- | --- |
| Fiscal expansiva | $Y\uparrow$, $P\uparrow$ | $Y = Y_n$, solo $P\uparrow$ |
| Monetaria expansiva | $Y\uparrow$, $P\uparrow$ | ídem: **el dinero es neutral** |
| Perturbación de oferta adversa | $Y\downarrow$, $P\uparrow$ | menor $Y_n$ si es permanente |

```{=latex}
\begin{anotacion}
La \textbf{estanflación} —caída de la producción con inflación— es el caso que ningún
instrumento de demanda resuelve: expandir agrava la inflación y contraer agrava la
recesión. Ocurrió en los setenta con las crisis del petróleo, y es lo que desacreditó la
versión más simple del keynesianismo.
\end{anotacion}
```

### La disyuntiva entre inflación y desempleo

La **curva de Phillips** relaciona las dos variables a corto plazo, y desaparece a largo:
la curva es vertical en la tasa natural de desempleo.

| Horizonte | Disyuntiva |
| --- | --- |
| Corto plazo | existe, y depende de un error de expectativas |
| Largo plazo | no existe: solo se elige el nivel de inflación |

**Intentar explotarla de forma sistemática la destruye**, porque los agentes incorporan la
política a sus expectativas. Es la razón de que la política monetaria moderna se formule
como un objetivo de inflación y no como un intento de reducir el paro.

### Coordinación de políticas en una economía abierta

| Régimen cambiario | Política fiscal | Política monetaria |
| --- | --- | --- |
| Fijo, con capitales libres | muy eficaz | ineficaz |
| Flexible, con capitales libres | poco eficaz | muy eficaz |

```{=latex}
\begin{anotacion}
Un país de la zona euro \textbf{no tiene política monetaria propia}: la fija el BCE para el
conjunto. Su único instrumento de estabilización es el fiscal, y además está limitado por
las reglas de déficit y deuda. Ese es el argumento central del debate sobre la
arquitectura de la unión monetaria y sobre la necesidad de una capacidad fiscal común.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Con los datos del ejemplo de ventaja comparativa, ¿a qué relación de intercambio les
conviene comerciar a los dos países?
\end{ejercicio}

\begin{solucion}
El coste de oportunidad de una unidad de vino es 0,67 de tela en A y 2 en B. Cualquier
relación de intercambio \textbf{entre esos dos valores} beneficia a los dos: A vende vino
por más tela de la que obtendría produciéndola, y B compra vino por menos tela de la que
le costaría producirlo.

\medskip
Con una relación de 1 a 1, A gana 0,33 de tela por unidad de vino y B ahorra 1. Dónde
caiga exactamente depende de la fuerza negociadora y del tamaño de los mercados.
\end{solucion}

\begin{ejercicio}
El precio del petróleo se duplica. ¿Qué política de demanda conviene aplicar?
\end{ejercicio}

\begin{solucion}
Ninguna resuelve las dos cosas. La oferta agregada se desplaza hacia arriba: la producción
cae y los precios suben. Una política expansiva sostiene la producción a costa de más
inflación; una contractiva contiene los precios a costa de más recesión.

\medskip
La elección depende de qué se considere más grave y de si el choque es transitorio o
permanente. Si es permanente, la producción potencial ha caído y no hay política de
demanda que la recupere: lo que corresponde son medidas de oferta, que son lentas.
\end{solucion}

\begin{ejercicio}
Un país tiene déficit por cuenta corriente persistente. ¿Es necesariamente un problema?
\end{ejercicio}

\begin{solucion}
No por sí solo. Por identidad contable significa que invierte más de lo que ahorra y que
el exterior financia la diferencia. Si esa inversión es productiva y rinde más que el
coste de la financiación, el país sale ganando y el déficit es sostenible.

\medskip
Es un problema si financia consumo, si depende de capital a corto plazo que puede huir, o
si la deuda exterior crece más deprisa que la capacidad de pago. Lo que hay que mirar es
el destino de la financiación y su composición, no el signo del saldo.
\end{solucion}
```

El comercio internacional y el modelo de oferta y demanda agregadas están desarrollados
en \cite{krugman2022}, \cite{mankiw2017} y \cite{samuelson2010}, con una perspectiva
crítica en \cite{torres2022}.
