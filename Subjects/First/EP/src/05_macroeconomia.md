# La macroeconomía: visión global

Capítulo 5 del programa. Concepto, orígenes y objetivos de la macroeconomía, la medición
de la actividad económica, los problemas actuales —crecimiento, inflación y desempleo— y
los ciclos económicos.

## Concepto, orígenes y objetivos

La macroeconomía estudia la economía en conjunto: la producción total, el empleo, los
precios y su evolución. Nace como disciplina con la Gran Depresión y la *Teoría general*
de Keynes de 1936, cuando una década de paro masivo mostró que el análisis de mercados
individuales no bastaba.

| Objetivo | Indicador |
| --- | --- |
| Crecimiento sostenido | tasa de variación del PIB real |
| Pleno empleo | tasa de paro |
| Estabilidad de precios | tasa de inflación |
| Equilibrio exterior | saldo de la balanza por cuenta corriente |
| Distribución aceptable | índices de desigualdad |

**Los objetivos compiten entre sí**, y esa es la razón de que la política económica sea
una elección y no un cálculo. Estimular la demanda reduce el paro y presiona los precios;
enfriar la economía hace lo contrario.

## La medición de la actividad económica

```{=latex}
\begin{definicion}[Producto interior bruto]
Valor de mercado de todos los bienes y servicios \emph{finales} producidos dentro de un
país durante un periodo.
\end{definicion}
```

Cada palabra excluye algo:

| Palabra | Qué excluye |
| --- | --- |
| Valor de mercado | lo que no se intercambia |
| Finales | los bienes intermedios, para no contar dos veces |
| Producidos | la compraventa de bienes usados y las transacciones financieras |
| Dentro del país | la producción de residentes en el extranjero |
| Durante un periodo | lo producido antes |

### Tres formas de medirlo

| Óptica | Cómo |
| --- | --- |
| **Producción** | suma del valor añadido de cada sector |
| **Gasto** | $C + I + G + (X-M)$ |
| **Renta** | salarios, beneficios, rentas de la propiedad e impuestos indirectos |

Las tres dan el mismo resultado porque **son la misma magnitud vista desde ángulos
distintos**: lo que se produce se vende, y lo que se vende se convierte en renta de
alguien.

| Magnitud | Definición |
| --- | --- |
| PIB nominal | a precios corrientes |
| PIB real | a precios de un año base |
| Deflactor | $100\times$ nominal / real |
| PIB per cápita | PIB real entre población |
| PNB | PIB más rentas netas del exterior |

```{=latex}
\begin{anotacion}
El PIB \textbf{no mide bienestar}, y sus limitaciones son conocidas: ignora el trabajo
doméstico y el voluntariado, no descuenta el agotamiento de recursos ni la contaminación,
no dice nada sobre la distribución, y contabiliza como producción reparar los daños de un
desastre. Se usa porque es comparable y está bien medido, no porque sea el objetivo.
\end{anotacion}
```

## Crecimiento económico

$$g = \frac{PIB_t - PIB_{t-1}}{PIB_{t-1}}$$

Lo relevante para el nivel de vida es el **PIB real por habitante**, que descuenta precios
y población.

| Fuente de crecimiento | Canal |
| --- | --- |
| Acumulación de capital | más maquinaria e infraestructura por trabajador |
| Capital humano | educación y formación |
| Progreso técnico | producir más con los mismos factores |
| Instituciones | incentivos a invertir e innovar |

**La aritmética del interés compuesto es lo que hace este objetivo el más importante a
largo plazo.** Un país que crece al 2 % anual dobla su renta por habitante en 35 años; al
1 %, en 70.

## Inflación

```{=latex}
\begin{definicion}
Aumento sostenido y generalizado del nivel general de precios.
\end{definicion}
```

**Sostenido y generalizado**: una subida puntual de un producto no es inflación, y un
aumento de precios de un solo mes tampoco.

| Medida | Qué cubre |
| --- | --- |
| IPC | la cesta de consumo de los hogares |
| Deflactor del PIB | toda la producción interior |
| Inflación subyacente | excluye alimentos frescos y energía |

| Tipo | Causa |
| --- | --- |
| De demanda | la demanda supera la capacidad productiva |
| De costes | encarecimiento de factores, como el petróleo |
| Estructural | rigideces e indexación |

| Coste de la inflación | En qué consiste |
| --- | --- |
| Pérdida de poder adquisitivo de rentas fijas | los que no pueden renegociar |
| Redistribución de acreedores a deudores | la deuda se diluye |
| Distorsión de precios relativos | las señales se confunden |
| Incertidumbre | desincentiva la inversión |

**La deflación no es lo contrario benigno de la inflación**: al esperar precios más bajos
se aplaza el consumo, la demanda cae, el peso real de las deudas crece y la economía puede
entrar en una espiral. Por eso los bancos centrales fijan objetivos de inflación positivos,
en torno al 2 %, y no del 0 %.

## Desempleo

| Concepto | Definición |
| --- | --- |
| Población activa | ocupados más parados |
| Tasa de paro | parados sobre activos |
| Tasa de actividad | activos sobre población en edad de trabajar |

| Tipo | Causa |
| --- | --- |
| Friccional | tiempo de búsqueda entre empleos |
| Estructural | desajuste entre cualificaciones y puestos |
| **Cíclico** | insuficiencia de demanda |
| Estacional | actividad concentrada en el año |

Los dos primeros forman el **paro estructural o natural**, que no desaparece con la
expansión. Solo el cíclico responde a la política de demanda, y confundirlos lleva a
esperar de un estímulo lo que no puede dar.

Sus costes: pérdida de producción, deterioro del capital humano de quien lleva tiempo
parado, coste presupuestario y consecuencias sociales y de salud.

## Los ciclos económicos

Fluctuaciones de la actividad alrededor de su tendencia.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=4.8cm, axis lines=left,
  xlabel={tiempo}, ylabel={PIB},
  xmin=0, xmax=24, ymin=0, ymax=60,
  xtick=\empty, ytick=\empty, samples=200, domain=0:24,
]
\addplot[thick] {12 + 1.6*x + 6*sin(deg(x*0.65))};
\addplot[dashed] {12 + 1.6*x};
\node[font=\scriptsize, anchor=west] at (axis cs:14.5,28) {tendencia};
\node[font=\scriptsize, anchor=south] at (axis cs:5,34) {expansión};
\node[font=\scriptsize, anchor=north] at (axis cs:14,22) {recesión};
\end{axis}
\end{tikzpicture}
\end{center}
```

| Fase | Qué ocurre |
| --- | --- |
| Expansión | crece la producción, baja el paro, suben los precios |
| **Cima** | máximo del ciclo |
| Recesión | cae la producción, sube el paro |
| **Fondo** | mínimo |

La definición convencional de recesión es **dos trimestres consecutivos de caída del PIB
real**, aunque los organismos que las datan oficialmente usan criterios más amplios.

| Indicador | Comportamiento |
| --- | --- |
| Adelantado | anticipa el ciclo: bolsa, permisos de construcción, pedidos |
| Coincidente | se mueve a la vez: producción industrial, empleo |
| Retrasado | va detrás: paro de larga duración, inflación |

**El paro es un indicador retrasado**, y por eso sigue subiendo meses después de que la
recesión haya técnicamente terminado. Es la causa de que las recuperaciones se perciban
más tarde de lo que los datos indican.

## Ejercicios

```{=latex}
\begin{ejercicio}
Una economía produce trigo por 100 y harina por 250, usando todo el trigo. ¿Cuál es su
PIB?
\end{ejercicio}

\begin{solucion}
250, el valor del bien final. Sumar $100+250$ contaría el trigo dos veces.

\medskip
Por valor añadido: el productor de trigo añade 100 y el molinero $250-100 = 150$, cuya
suma es 250. Las dos ópticas coinciden, como deben.
\end{solucion}

\begin{ejercicio}
El PIB nominal crece un 6\,\% y el deflactor un 4\,\%, con una población que crece un
1\,\%. ¿Cuánto mejora el nivel de vida?
\end{ejercicio}

\begin{solucion}
El PIB real crece $1{,}06/1{,}04 - 1 = 0{,}0192$, un 1,92\,\%, y el PIB real por
habitante $1{,}0192/1{,}01 - 1 = 0{,}0091$, un 0,91\,\%.

\medskip
Menos de un punto, frente al 6\,\% del titular nominal. Descontar precios y población es lo
que convierte una cifra de contabilidad en una medida de nivel de vida.
\end{solucion}

\begin{ejercicio}
En un país hay 20 millones de personas en edad de trabajar, 12 ocupados y 2 parados.
Calcular las tasas de actividad y de paro, y decir qué pasaría si un millón de parados
dejara de buscar.
\end{ejercicio}

\begin{solucion}
Activos: 14 millones. Actividad $14/20 = 0{,}70$, el 70\,\%; paro $2/14 = 0{,}143$,
el 14,3\,\%.

\medskip
Con un millón de desanimados, los activos bajan a 13 y los parados a 1: la tasa de paro
cae al 7,7\,\% sin que nadie haya encontrado empleo, y la de actividad al 65\,\%. La
mejora aparente esconde un empeoramiento.
\end{solucion}
```

Los conceptos macroeconómicos básicos están desarrollados en \cite{krugman2022},
\cite{mankiw2017} y \cite{samuelson2010}, con la exposición de \cite{mochon2009}.
