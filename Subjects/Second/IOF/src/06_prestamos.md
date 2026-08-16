# Préstamos

Tema 6 del programa. Sistemas de amortización, cuadro de amortización, préstamos a tipo
variable, carencia, cancelación anticipada y tanto efectivo.

## Concepto y magnitudes

```{=latex}
\begin{definicion}
Operación financiera en la que el prestamista entrega un capital $C_0$ y el prestatario lo
devuelve mediante una sucesión de pagos, llamados términos amortizativos, que comprenden
intereses y devolución de principal.
\end{definicion}
```

| Símbolo | Magnitud |
| --- | --- |
| $C_0$ | capital prestado |
| $a_s$ | término amortizativo del periodo $s$ |
| $I_s$ | cuota de interés |
| $A_s$ | cuota de amortización |
| $C_s$ | capital vivo tras el pago $s$ |
| $M_s$ | total amortizado hasta $s$ |

| Relación | Expresión |
| --- | --- |
| Descomposición del término | $a_s = I_s + A_s$ |
| Interés del periodo | $I_s = C_{s-1}\,i$ |
| Capital vivo | $C_s = C_{s-1} - A_s$ |
| Suma de amortizaciones | $\sum_{s=1}^{n} A_s = C_0$ |
| Total amortizado | $M_s = C_0 - C_s$ |

```{=latex}
\begin{anotacion}
Las cuatro relaciones anteriores valen para \textbf{cualquier} sistema de amortización, y
con ellas se construye el cuadro sin recordar ninguna fórmula cerrada. La comprobación que
detecta casi todos los errores: el capital vivo tras el último pago debe ser exactamente
cero, y la suma de la columna de amortizaciones debe dar $C_0$.
\end{anotacion}
```

## Sistema francés

Es el de término amortizativo constante, y el que usan casi todos los préstamos hipotecarios
y de consumo.

```{=latex}
\begin{proposicion}
$$a = \frac{C_0}{a_{\overline{n}\rvert i}} = C_0\,\frac{i}{1-(1+i)^{-n}}$$
\end{proposicion}
```

```{=latex}
\begin{demostracion}
La ecuación de equivalencia iguala el capital prestado al valor actual de los términos.
Siendo estos constantes, forman una renta constante temporal pospagable, así que
$C_0 = a\,a_{\overline{n}\rvert i}$. Despejando se obtiene la expresión.
\end{demostracion}
```

| Magnitud | Expresión |
| --- | --- |
| Capital vivo | $C_s = a\,a_{\overline{n-s}\rvert i}$ |
| Cuota de amortización | $A_s = A_1(1+i)^{s-1}$ |
| Primera cuota | $A_1 = a - C_0\,i$ |
| Total amortizado | $M_s = A_1\,s_{\overline{s}\rvert i}$ |

```{=latex}
\begin{proposicion}
Las cuotas de amortización del sistema francés crecen en \textbf{progresión geométrica de
razón} $(1+i)$, y las de interés decrecen.
\end{proposicion}
```

**El capital vivo se calcula siempre por el método prospectivo**, valorando los términos que
quedan: es más rápido y menos propenso a arrastrar errores de redondeo que ir restando fila
a fila.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  ybar stacked, width=10cm, height=5.6cm,
  xlabel={año}, ylabel={euros}, ymin=0, ymax=3600,
  bar width=9pt, axis lines=left,
  tick label style={font=\scriptsize}, label style={font=\small},
  legend style={font=\scriptsize, draw=none, at={(0.98,0.98)}, anchor=north east},
  xtick={1,3,5,7,9,11,13,15},
]
\addplot+[fill=black!20, draw=black] coordinates {
(1,1157) (2,1215) (3,1276) (4,1339) (5,1406) (6,1477) (7,1550) (8,1628)
(9,1709) (10,1795) (11,1885) (12,1979) (13,2078) (14,2182) (15,2291)};
\addlegendentry{amortización}
\addplot+[fill=black!55, draw=black] coordinates {
(1,1500) (2,1442) (3,1381) (4,1318) (5,1251) (6,1180) (7,1107) (8,1029)
(9,948) (10,862) (11,772) (12,678) (13,579) (14,475) (15,366)};
\addlegendentry{intereses}
\end{axis}
\end{tikzpicture}
\end{center}
```

*Préstamo de 30 000 euros a 15 años al 5 %.* El término total es constante, pero su
composición se invierte: **los primeros años se paga sobre todo interés**, y esa es la razón
de que amortizar anticipadamente sea mucho más rentable al principio.

## Sistema de cuotas de amortización constantes

También llamado italiano o de cuota fija de capital.

$$A_s = \frac{C_0}{n}, \qquad a_s = \frac{C_0}{n} + C_{s-1}\,i$$

| Rasgo | Comportamiento |
| --- | --- |
| Cuota de amortización | constante |
| Cuota de interés | decreciente en progresión aritmética |
| **Término amortizativo** | **decreciente** |
| Capital vivo | $C_s = C_0\big(1-\tfrac{s}{n}\big)$ |

```{=latex}
\begin{proposicion}
Frente al sistema francés del mismo capital, plazo y tipo, el sistema de cuotas constantes
paga \textbf{menos intereses en total} pero exige términos iniciales mayores.
\end{proposicion}
```

**Menos intereses totales no significa mejor**: amortiza antes, así que el capital vivo es
menor en todo momento y devenga menos. La comparación correcta es de tanto efectivo, y ahí
los dos coinciden si no hay comisiones.

## Sistema americano

El prestatario paga solo intereses durante toda la vida del préstamo y devuelve el principal
íntegro al vencimiento.

$$a_s = C_0\,i \ \ (s<n), \qquad a_n = C_0\,i + C_0$$

Variante con fondo de amortización: además de los intereses, se imponen cantidades en un
depósito al tanto $i'$ para reunir $C_0$ al final. Si $i' < i$, el coste real supera al del
préstamo francés.

## Préstamos a tipo variable

El tipo se revisa periódicamente según un índice de referencia más un diferencial.

| Paso de la revisión | Qué se hace |
| --- | --- |
| 1 | tomar el capital vivo en la fecha de revisión |
| 2 | tomar el nuevo tipo: índice + diferencial |
| 3 | tomar el plazo pendiente |
| 4 | recalcular el término con la fórmula del francés |

```{=latex}
\begin{anotacion}
La revisión \textbf{no rehace el préstamo}: parte del capital vivo alcanzado, que ya no
depende del tipo futuro. Por eso una subida de tipos golpea más a un préstamo joven, donde
el capital vivo es casi todo el prestado, que a uno que lleva veinte años pagándose.
\end{anotacion}
```

## Carencia

| Tipo | Qué se paga | Efecto sobre la deuda |
| --- | --- | --- |
| **Carencia de amortización** (parcial) | solo intereses | el capital vivo **no cambia** |
| **Carencia total** | nada | los intereses se capitalizan y la deuda **crece** |

```{=latex}
\begin{proposicion}
Tras $d$ periodos de carencia total, la deuda al empezar la amortización es
$C_0(1+i)^{d}$, y el término amortizativo se calcula sobre esa cifra con el plazo restante.
\end{proposicion}
```

**La carencia total no aplaza el coste: lo aumenta.** Dos años de carencia al 5 % elevan la
deuda un 10,25 %, y esa diferencia se arrastra durante toda la vida del préstamo.

## Cancelación anticipada

El importe a pagar es el **capital vivo** en la fecha, más la comisión de cancelación si el
contrato la prevé.

$$\text{Coste} = C_s + \text{comisión}\cdot C_s$$

| Modalidad | Efecto |
| --- | --- |
| **Reducción de cuota** | mismo plazo, término menor |
| **Reducción de plazo** | mismo término, menos periodos |

**La reducción de plazo ahorra más intereses**, porque elimina los periodos finales enteros
en lugar de rebajar todos los términos. La reducción de cuota mejora la liquidez mensual.

## Tanto efectivo y coste amortizado

Con comisiones y gastos, el tanto efectivo del prestatario resuelve

$$C_0 - \text{gastos iniciales} = \sum_{s=1}^{n} \frac{a_s}{(1+i^{*})^{s}}$$

y se despeja numéricamente. **La TAE es ese $i^{*}$**, calculado con los conceptos que la
normativa incluye.

```{=latex}
\begin{anotacion}
La misma ecuación, resuelta desde la perspectiva del prestamista, es el \textbf{tipo de
interés efectivo} del coste amortizado que exige la normativa contable: el valor en libros
de un préstamo es el valor actual de sus flujos pendientes descontados a ese tipo, y los
ingresos financieros se reconocen aplicándolo al valor en libros de cada periodo. Es la
misma matemática con otro nombre.
\end{anotacion}
```

## Comparación de los sistemas

| Sistema | Término | Intereses totales | Uso |
| --- | --- | --- | --- |
| **Francés** | constante | intermedios | **hipotecas, consumo** |
| Cuotas constantes | decreciente | menores | financiación empresarial |
| Americano | intereses y principal al final | mayores | emisiones de deuda |
| Con carencia | escalonado | mayores | promoción, estudios |

## Ejercicios

```{=latex}
\begin{ejercicio}
Préstamo de 20\,000 euros a 5 años al 6\,\% anual, sistema francés. Calcular el término y
las tres primeras filas del cuadro.
\end{ejercicio}

\begin{solucion}
$a_{\overline{5}\rvert 0{,}06} = 4{,}21236$, así que $a = 20\,000/4{,}21236 = 4747{,}93$.

\medskip
\begin{center}
\begin{tabular}{crrrr}
\toprule
$s$ & $a_s$ & $I_s$ & $A_s$ & $C_s$ \\
\midrule
0 & & & & 20\,000,00 \\
1 & 4747,93 & 1200,00 & 3547,93 & 16\,452,07 \\
2 & 4747,93 & 987,12 & 3760,81 & 12\,691,26 \\
3 & 4747,93 & 761,48 & 3986,45 & 8704,81 \\
\bottomrule
\end{tabular}
\end{center}

\medskip
Comprobación de la razón geométrica: $3760{,}81/3547{,}93 = 1{,}06$, y
$3986{,}45/3760{,}81 = 1{,}06$.
\end{solucion}

\begin{ejercicio}
Con el préstamo anterior, hallar el capital vivo tras el tercer pago por el método
prospectivo y el total de intereses pagados en los cinco años.
\end{ejercicio}

\begin{solucion}
$$C_3 = 4747{,}93\cdot a_{\overline{2}\rvert 0{,}06}
= 4747{,}93\cdot1{,}83339 = 8704{,}81$$
Coincide con el cuadro.

\medskip
Intereses totales: $5\cdot4747{,}93 - 20\,000 = 23\,739{,}65 - 20\,000 = 3739{,}65$ euros.
\end{solucion}

\begin{ejercicio}
El mismo préstamo por el sistema de cuotas de amortización constantes. Comparar el primer
término y los intereses totales.
\end{ejercicio}

\begin{solucion}
$A_s = 4000$ fijos. Primer término: $4000 + 1200 = 5200$, frente a los 4747,93 del francés.

\medskip
Intereses: $1200 + 960 + 720 + 480 + 240 = 3600$ euros, frente a 3739,65. Se pagan 139,65
euros menos porque el capital se devuelve antes; a cambio el primer año se paga un 9,5\,\%
más.
\end{solucion}

\begin{ejercicio}
Un préstamo de 100\,000 euros a 20 años al 4\,\% tiene una comisión de apertura del 1\,\% y
600 euros de gastos de tasación y notaría. Plantear el cálculo de la TAE.
\end{ejercicio}

\begin{solucion}
Término anual: $a_{\overline{20}\rvert 0{,}04} = 13{,}59033$, así que
$a = 100\,000/13{,}59033 = 7358{,}18$.

\medskip
Lo recibido neto es $100\,000 - 1000 - 600 = 98\,400$, y la ecuación es
$$98\,400 = 7358{,}18\cdot a_{\overline{20}\rvert i^{*}}$$
de donde $a_{\overline{20}\rvert i^{*}} = 13{,}37287$ y, resolviendo numéricamente,
$i^{*} = 0{,}04168$: una TAE del 4,17\,\% frente al 4\,\% nominal.

\medskip
Los 1600 euros iniciales, que son un 1,6\,\% del capital, encarecen el préstamo en solo 17
puntos básicos anuales porque se reparten entre veinte años. En un préstamo a dos años el
mismo importe habría subido el coste más de un punto.
\end{solucion}

\begin{ejercicio}
Un préstamo de 50\,000 euros a 10 años al 5\,\% tiene dos años de carencia total. ¿Cuál es
el término de los ocho años restantes?
\end{ejercicio}

\begin{solucion}
Deuda al final de la carencia: $50\,000\cdot1{,}05^{2} = 55\,125$.

\medskip
$a_{\overline{8}\rvert 0{,}05} = 6{,}46321$, así que $a = 55\,125/6{,}46321 = 8529{,}31$.

\medskip
Sin carencia el término habría sido $50\,000/7{,}72173 = 6475{,}22$ durante diez años. La
carencia sube el término un 31,7\,\% y los desembolsos totales pasan de 64\,752 a 68\,234
euros.
\end{solucion}
```

Los sistemas de amortización de préstamos están desarrollados en \cite{frias2025}, con su
versión en inglés en \cite{frias2025en}.
