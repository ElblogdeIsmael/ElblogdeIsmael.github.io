# Leyes compuestas y continuas

Tema 4 del programa. Capitalización y descuento compuestos, tantos equivalentes, tanto
nominal y efectivo, capitalización fraccionada y capitalización continua.

## Capitalización compuesta

```{=latex}
\begin{definicion}
Los intereses de cada periodo se acumulan al capital y generan a su vez intereses en los
periodos siguientes.
\end{definicion}
```

$$C_n = C_0\,(1+i)^{n}$$

| Magnitud | Expresión |
| --- | --- |
| Capital final | $C_0(1+i)^n$ |
| Intereses totales | $C_0\big[(1+i)^n - 1\big]$ |
| Intereses del periodo $k$ | $C_0(1+i)^{k-1}\,i$, **crecientes** |
| Tanto | $i = \sqrt[n]{C_n/C_0} - 1$ |
| Plazo | $n = \dfrac{\ln(C_n/C_0)}{\ln(1+i)}$ |

```{=latex}
\begin{proposicion}
La capitalización compuesta \textbf{es escindible}: para cualesquiera $p$ y $q$,
$$(1+i)^{p+q} = (1+i)^{p}\,(1+i)^{q}$$
Por eso el valor de un capital no depende de en cuántos tramos se calcule, y por eso los
métodos retrospectivo y prospectivo de la reserva matemática coinciden.
\end{proposicion}
```

**La escindibilidad es la razón técnica de que todas las operaciones a largo plazo se pacten
en régimen compuesto.** Sin ella, un préstamo daría una deuda pendiente distinta según cómo
se troceara el cálculo.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10cm, height=5.6cm, axis lines=left,
  xlabel={años}, ylabel={capital}, xmin=0, xmax=30, ymin=0, ymax=1100,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=140,
  legend style={font=\scriptsize, draw=none, at={(0.02,0.98)}, anchor=north west},
]
\addplot[thick, domain=0:30] {100*1.08^x};
\addlegendentry{compuesto al 8\,\%}
\addplot[dashed, domain=0:30] {100*(1+0.08*x)};
\addlegendentry{simple al 8\,\%}
\end{axis}
\end{tikzpicture}
\end{center}
```

La separación entre las dos curvas es el efecto acumulativo. **A treinta años el compuesto
multiplica por diez y el simple por menos de tres.**

```{=latex}
\begin{anotacion}
La \textbf{regla del 72} da el plazo aproximado de duplicación: $n \approx 72/i$ con el tipo
en tanto por ciento. Al 8\,\% son unos nueve años, y el valor exacto es
$\ln 2/\ln 1{,}08 = 9{,}01$. Es una aproximación cómoda para tipos entre el 4 y el 12\,\%.
\end{anotacion}
```

## Descuento compuesto

Es la operación inversa, y también tiene versión racional y comercial.

| Ley | Valor actual | Observación |
| --- | --- | --- |
| **Descuento racional** | $C_0 = C_n(1+i)^{-n}$ | inverso exacto de la capitalización compuesta |
| Descuento comercial | $C_0 = C_n(1-d)^{n}$ | tanto de descuento aplicado periodo a periodo |

$$d = \frac{i}{1+i}, \qquad i = \frac{d}{1-d}$$

**En régimen compuesto se usa casi siempre el racional**, que es el que da el valor actual
de la matemática financiera y el que aparece en el valor actual neto.

## Tantos equivalentes

```{=latex}
\begin{definicion}
Dos tantos referidos a periodos distintos son equivalentes si producen el mismo capital
final para el mismo capital inicial y el mismo plazo.
\end{definicion}
```

$$(1+i) = (1+i_k)^{k} \qquad\Longrightarrow\qquad i_k = (1+i)^{1/k} - 1$$

donde $k$ es el número de subperiodos del año: 2 semestres, 4 trimestres, 12 meses.

```{=latex}
\begin{proposicion}
En régimen compuesto los tantos equivalentes \textbf{no son proporcionales}: $i_k < i/k$.
Es consecuencia directa de que $(1+x)^k > 1+kx$ para $x>0$ y $k>1$.
\end{proposicion}
```

| Anual | Semestral equivalente | Mensual equivalente | $i/12$ |
| ---: | ---: | ---: | ---: |
| 6 | 2,956 | 0,487 | 0,500 |
| 12 | 5,830 | 0,949 | 1,000 |
| 24 | 11,355 | 1,809 | 2,000 |

*(Valores en tanto por ciento.)* La diferencia entre la columna mensual equivalente y la
proporcional crece con el tipo, y es lo que separa el tanto efectivo del nominal.

## Tanto nominal y tanto efectivo

```{=latex}
\begin{definicion}[Tanto nominal $J_k$]
Tanto anual que se fracciona \textbf{proporcionalmente}: el tanto del subperiodo es
$i_k = J_k/k$. No es un tipo efectivo; es una convención de cotización.
\end{definicion}
```

$$i = \Big(1 + \frac{J_k}{k}\Big)^{k} - 1, \qquad J_k = k\big[(1+i)^{1/k} - 1\big]$$

```{=latex}
\begin{ejemplo}
Un depósito ofrece un 12\,\% nominal con abono mensual de intereses. El tanto mensual es
$0{,}12/12 = 0{,}01$, un 1\,\%, y el efectivo anual
$$i = 1{,}01^{12} - 1 = 0{,}12683$$
Un 12,68\,\%, no un 12\,\%. La diferencia crece con la frecuencia de abono, y es la razón de
que la publicidad de los productos deba expresar la TAE.
\end{ejemplo}
```

| Frecuencia $k$ | Un $J_k$ del 12\,\% da un efectivo de |
| ---: | ---: |
| 1 (anual) | 12,0000 |
| 2 (semestral) | 12,3600 |
| 4 (trimestral) | 12,5509 |
| 12 (mensual) | 12,6825 |
| 365 (diaria) | 12,7475 |
| $\infty$ (continua) | 12,7497 |

**El efectivo crece con la frecuencia pero converge**, y ese límite es la capitalización
continua.

## Capitalización continua

```{=latex}
\begin{definicion}[Tanto instantáneo]
$$\delta = \lim_{k\to\infty} J_k = \ln(1+i), \qquad C_n = C_0\,e^{\delta n}$$
\end{definicion}
```

```{=latex}
\begin{demostracion}
Partiendo del efectivo obtenido al fraccionar,
$$\lim_{k\to\infty}\Big(1+\frac{\delta}{k}\Big)^{k n} = e^{\delta n}$$
por la definición del número $e$. Igualando $e^{\delta} = 1+i$ se obtiene
$\delta = \ln(1+i)$.
\end{demostracion}
```

| Relación | Expresión |
| --- | --- |
| De efectivo a instantáneo | $\delta = \ln(1+i)$ |
| De instantáneo a efectivo | $i = e^{\delta} - 1$ |
| Descuento continuo | $C_0 = C_n\,e^{-\delta n}$ |

**La ventaja del tanto instantáneo es que se suma.** Con capitalización continua, el
rendimiento de dos periodos consecutivos es la suma de los rendimientos, no su producto
compuesto, y por eso es el régimen que usan los modelos de valoración de activos.

```{=latex}
\begin{anotacion}
Aunque ningún contrato liquide intereses de forma continua, $\delta$ aparece constantemente
en la práctica: los rendimientos logarítmicos de un activo, $\ln(P_t/P_{t-1})$, son tantos
instantáneos, y son aditivos en el tiempo, cosa que los rendimientos simples no son.
\end{anotacion}
```

## Comparación de los regímenes

| Régimen | Ley | Escindible | Uso |
| --- | --- | :---: | --- |
| Simple | $C_0(1+in)$ | no | corto plazo, descuento de efectos |
| **Compuesto** | $C_0(1+i)^n$ | **sí** | **préstamos, depósitos, valoración** |
| Fraccionado | $C_0(1+J_k/k)^{kn}$ | sí | liquidaciones periódicas |
| Continuo | $C_0e^{\delta n}$ | sí | modelos financieros |

## Ejercicios

```{=latex}
\begin{ejercicio}
Un capital de 8000 euros se coloca al 5\,\% compuesto durante 7 años. Hallar el capital
final y compararlo con el régimen simple.
\end{ejercicio}

\begin{solucion}
$$C_7 = 8000\cdot1{,}05^{7} = 8000\cdot1{,}40710 = 11\,256{,}80$$
En simple: $8000(1+0{,}05\cdot7) = 10\,800$. La diferencia, 456,80 euros, son los intereses
de los intereses.
\end{solucion}

\begin{ejercicio}
¿Cuántos años tarda un capital en triplicarse al 6\,\% compuesto?
\end{ejercicio}

\begin{solucion}
$$n = \frac{\ln 3}{\ln 1{,}06} = \frac{1{,}09861}{0{,}05827} = 18{,}85 \text{ años}$$
Casi diecinueve años. Nótese que duplicarse cuesta $\ln2/\ln1{,}06 = 11{,}90$ años: triplicar
no cuesta el doble que duplicar, porque el crecimiento es exponencial.
\end{solucion}

\begin{ejercicio}
Un préstamo cotiza un tanto nominal del 9\,\% con liquidación trimestral. Hallar el tanto
efectivo anual y el tanto instantáneo.
\end{ejercicio}

\begin{solucion}
$i_4 = 0{,}09/4 = 0{,}0225$, así que
$$i = 1{,}0225^{4} - 1 = 0{,}09308$$
Un 9,31\,\% efectivo. El instantáneo es $\delta = \ln(1{,}09308) = 0{,}08903$, un 8,90\,\%,
por debajo del nominal, que es lo esperable: el instantáneo es el menor de los tres.
\end{solucion}

\begin{ejercicio}
Dos productos: A ofrece un 7,2\,\% nominal con abono mensual y B un 7,35\,\% efectivo anual.
¿Cuál es mejor?
\end{ejercicio}

\begin{solucion}
A tiene un efectivo de $\big(1+0{,}072/12\big)^{12} - 1 = 1{,}006^{12}-1 = 0{,}07442$, un
7,44\,\%.

\medskip
A es mejor, pese a que su cifra anunciada, 7,2, es menor que la de B. Comparar nominales con
efectivos es el error que la obligación de publicar la TAE viene a evitar.
\end{solucion}
```

Las leyes financieras compuestas y continuas están desarrolladas en \cite{frias2025}, con su
versión en inglés en \cite{frias2025en}.
