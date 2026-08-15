# Números índices

Tema 3 del programa. Tasas de variación, índices elementales y sintéticos, índices de
precios, cantidades y valor, enlace de series, deflación, participación de un grupo y
los índices encadenados, con el IPC como ejemplo.

## Tasas de variación

| Tasa | Fórmula |
| --- | --- |
| Variación absoluta | $x_t - x_{t-1}$ |
| Tasa de variación | $\dfrac{x_t-x_{t-1}}{x_{t-1}}$ |
| Tasa acumulada en $k$ periodos | $\dfrac{x_t}{x_{t-k}} - 1$ |
| Tasa media anual | $\sqrt[k]{\dfrac{x_t}{x_{t-k}}} - 1$ |

**Las tasas no se suman, se componen.** Dos subidas consecutivas del 10 % no dan un
20 % sino un 21 %, porque la segunda se aplica sobre lo ya aumentado. La tasa media es
geométrica, no aritmética, y es el mismo resultado del tema 1.

$$(1+t_1)(1+t_2)\cdots(1+t_k) = 1 + T$$

## Índices elementales

$$I_{t/0} = \frac{x_t}{x_0}\times 100$$

El periodo 0 es la **base**, que vale 100 por construcción. Un índice de 118 significa
un aumento del 18 % respecto de la base.

| Propiedad | Enunciado |
| --- | --- |
| Identidad | $I_{0/0}=100$ |
| Inversión | $I_{t/0}\cdot I_{0/t} = 10\,000$ |
| Circular | $I_{t/0} = I_{t/s}\cdot I_{s/0}/100$ |
| Proporcionalidad | multiplicar la serie por $k$ no cambia el índice |

```{=latex}
\begin{anotacion}
Un índice \textbf{no se puede sumar ni promediar directamente} entre periodos: es un
cociente, no una magnitud. Y la variación entre dos índices no es su diferencia sino su
cociente. De 120 a 132 la subida no es de 12 puntos porcentuales de crecimiento, es del
10\,\%.
\end{anotacion}
```

## Índices sintéticos

Cuando hay varios bienes, hay que agregarlos con algún criterio de ponderación.

| Índice | Fórmula | Ponderaciones |
| --- | --- | --- |
| Laspeyres de precios | $L_p = \dfrac{\sum p_t q_0}{\sum p_0 q_0}\times100$ | cantidades del **periodo base** |
| Paasche de precios | $P_p = \dfrac{\sum p_t q_t}{\sum p_0 q_t}\times100$ | cantidades del **periodo actual** |
| Fisher | $F = \sqrt{L\cdot P}$ | media geométrica de los dos |
| Índice de valor | $V = \dfrac{\sum p_tq_t}{\sum p_0q_0}\times100$ | --- |

Los índices de cantidades son los mismos intercambiando el papel de $p$ y $q$.

| | Laspeyres | Paasche |
| --- | --- | --- |
| Cesta | fija, la del periodo base | cambia cada periodo |
| Coste de cálculo | bajo: una sola encuesta de consumo | alto: encuesta cada periodo |
| Sesgo | **sobrestima** la inflación | la subestima |
| Uso real | el habitual, incluido el IPC | contabilidad nacional |

**Por qué Laspeyres sobrestima:** al mantener fija la cesta, no recoge que los
consumidores sustituyen los bienes que más se encarecen por otros. Paasche tiene el
sesgo contrario porque usa la cesta ya adaptada. El índice de Fisher, media geométrica
de los dos, se llama «ideal» porque compensa los dos sesgos y cumple las propiedades de
inversión y circular.

```{=latex}
\begin{proposicion}[Descomposición del valor]
$$V = \frac{L_p \cdot P_q}{100} = \frac{P_p\cdot L_q}{100}$$
El índice de valor se descompone siempre en un índice de precios de un tipo por uno de
cantidades del otro.
\end{proposicion}
```

```{=latex}
\begin{ejemplo}
Dos bienes, con precios y cantidades:

\medskip
\begin{tabular}{@{}lcccc@{}}
\toprule
& $p_0$ & $q_0$ & $p_t$ & $q_t$ \\
\midrule
A & 10 & 100 & 12 & 90 \\
B & 20 & 50 & 22 & 60 \\
\bottomrule
\end{tabular}

\medskip
$\sum p_0q_0 = 1000+1000 = 2000$; $\sum p_tq_0 = 1200+1100 = 2300$;
$\sum p_tq_t = 1080+1320 = 2400$; $\sum p_0q_t = 900+1200 = 2100$.

\medskip
$L_p = 115$, $P_p = 2400/2100\times100 = 114{,}29$ y
$F = \sqrt{115\cdot114{,}29} = 114{,}64$.

\medskip
Se cumple lo anunciado: $L_p > P_p$. Y el índice de valor es
$V = 2400/2000\times 100 = 120$.
\end{ejemplo}
```

## Enlace de series con distinta base

Cuando una serie cambia de base hay que **enlazarla** para poder comparar todo el
periodo. Con un año solapado en las dos bases, el coeficiente de enlace es el cociente
de los dos valores en ese año.

$$I^{\text{nuevo}}_{t} = I^{\text{viejo}}_{t}\times\frac{I^{\text{nuevo}}_{s}}{I^{\text{viejo}}_{s}}$$

```{=latex}
\begin{ejemplo}
Una serie con base 2010 vale 130 en 2015, y la nueva serie con base 2015 vale 100 ese
mismo año. Para llevar los valores viejos a la base nueva se multiplican por
$100/130 = 0{,}769$. Así, un 110 de 2012 en base 2010 pasa a ser 84,6 en base 2015.
\end{ejemplo}
```

## Deflación

Convertir una serie en unidades monetarias corrientes a unidades constantes, es decir,
eliminar el efecto de los precios.

$$x^{\text{real}}_t = \frac{x^{\text{nominal}}_t}{I_t}\times 100$$

| Magnitud | Qué mide |
| --- | --- |
| Nominal, o corriente | el valor en euros de cada año |
| Real, o constante | el valor a precios de un año de referencia |

**Es la operación con más consecuencias prácticas del tema.** Una serie de salarios que
crece un 3 % anual con una inflación del 4 % está **cayendo** en términos reales, y solo
la deflación lo hace visible.

```{=latex}
\begin{ejemplo}
Un salario pasa de 24\,000 a 27\,000 euros en cinco años, mientras el IPC pasa de 100 a
118.

\medskip
El salario real final es $27\,000/118\times100 = 22\,881$ euros de base. Ha subido un
12,5\,\% en nominal y ha \textbf{bajado} un 4,7\,\% en real. Esa diferencia es todo lo
que hay que entender del tema.
\end{ejemplo}
```

## Participación de un grupo

Un índice general se descompone en la aportación de cada grupo de productos:

$$I_{general} = \sum_g w_g\,I_g$$

con $w_g$ el peso del grupo. La **contribución** de un grupo a la variación total es su
peso por su variación:

$$\text{contribución}_g = w_g\,(I_g - 100)$$

Es lo que permite decir que «la subida del IPC se debe sobre todo a la energía», y
distingue dos cosas que se confunden: un grupo puede subir muchísimo y aportar poco si
su peso es pequeño.

```{=latex}
\begin{ejemplo}
La energía sube un 30\,\% con un peso del 8\,\%, y los alimentos un 4\,\% con un peso del
20\,\%.

\medskip
Contribuciones: $0{,}08\cdot30 = 2{,}4$ puntos frente a $0{,}20\cdot4 = 0{,}8$ puntos.
La energía sube casi ocho veces más y aporta tres veces más, no ocho: el peso amortigua.
\end{ejemplo}
```

## Índices encadenados

En vez de una base fija durante años, se calcula cada periodo respecto del anterior y se
multiplican los eslabones:

$$I_{t/0} = \prod_{s=1}^{t}\frac{I_{s/s-1}}{100}\times 100$$

| Ventaja | Inconveniente |
| --- | --- |
| La cesta se actualiza cada año | pierde la propiedad de agregación |
| Recoge la aparición de productos nuevos | no es aditivo entre componentes |
| Reduce el sesgo de Laspeyres | dificulta comparar periodos lejanos |

### El IPC

El índice de precios de consumo español es un **Laspeyres encadenado** con base 2021 y
actualización anual de ponderaciones, calculado por el INE a partir de una cesta de
varios cientos de artículos agrupados en doce divisiones.

| Concepto | Definición |
| --- | --- |
| Inflación interanual | variación del IPC respecto del mismo mes del año anterior |
| Inflación mensual | respecto del mes anterior |
| **Inflación subyacente** | excluye alimentos no elaborados y energía |

La subyacente existe porque los dos componentes excluidos son muy volátiles y responden
a factores externos, así que la general oscila por razones que no reflejan la tendencia
de fondo de los precios.

## Ejercicios

```{=latex}
\begin{ejercicio}
Una serie sube un 8\,\% un año y baja un 5\,\% al siguiente. ¿Cuál es la variación
acumulada y cuál la media anual?
\end{ejercicio}

\begin{solucion}
Acumulada: $1{,}08\cdot0{,}95 = 1{,}026$, es decir un 2,6\,\%. La media anual es
$\sqrt{1{,}026} = 1{,}0129$, o sea un 1,29\,\%. Restar los porcentajes daría un 3\,\%, y
la media aritmética un 1,5\,\%: los dos están mal.
\end{solucion}

\begin{ejercicio}
El PIB nominal crece un 6\,\% y el deflactor un 4\,\%. ¿Cuánto crece el PIB real?
\end{ejercicio}

\begin{solucion}
$1{,}06/1{,}04 = 1{,}0192$: un 1,92\,\%. La aproximación por diferencia, $6-4=2$, es
buena porque las tasas son pequeñas, pero deja de serlo con inflaciones altas: con un
nominal del 50\,\% y un deflactor del 40\,\%, la diferencia daría 10\,\% y el valor
correcto es $1{,}5/1{,}4 - 1 = 0{,}071$, es decir un 7,1\,\%.
\end{solucion}

\begin{ejercicio}
Con los datos del ejemplo de la sección de índices sintéticos, comprobar la
descomposición del índice de valor.
\end{ejercicio}

\begin{solucion}
$L_p = 115$ y el índice de cantidades de Paasche es
$P_q = \sum p_tq_t/\sum p_tq_0 \times 100 = 2400/2300\times100 = 104{,}35$.

\medskip
Su producto dividido por 100 da $115\cdot104{,}35/100 = 120$, que es exactamente el
índice de valor. La identidad se cumple, y sirve como comprobación de que los cuatro
sumatorios están bien calculados.
\end{solucion}
```

Los números índices están desarrollados en \cite{pliego2004} y \cite{newbold2013}, con
problemas resueltos en \cite{hermoso2000} y \cite{amor2016}.
