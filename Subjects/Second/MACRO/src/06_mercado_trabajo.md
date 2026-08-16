# El mercado de trabajo y la oferta agregada

Tema 6 del programa. El mercado de trabajo, salarios, desempleo y determinación de los
precios, la tasa natural de desempleo y la curva de oferta agregada.

## El mercado de trabajo

| Concepto | Definición |
| --- | --- |
| Población activa | ocupados más parados |
| Tasa de actividad | activos sobre población en edad de trabajar |
| Tasa de paro | parados sobre activos |
| Tasa de empleo | ocupados sobre población en edad de trabajar |

```{=latex}
\begin{anotacion}
La tasa de paro puede bajar por dos razones opuestas: porque haya más ocupados o porque
haya menos activos. El \textbf{desánimo} —dejar de buscar y salir de la población activa—
mejora la estadística y empeora la realidad. Por eso conviene mirar siempre la tasa de
empleo junto a la de paro.
\end{anotacion}
```

| Tipo de desempleo | Causa | ¿Desaparece a largo plazo? |
| --- | --- | --- |
| Friccional | tiempo de búsqueda y emparejamiento | no: es inevitable |
| Estructural | desajuste entre cualificaciones y puestos | no sin políticas activas |
| **Cíclico** | insuficiencia de demanda agregada | sí |
| Estacional | actividad concentrada en el año | no |

## Determinación de los salarios

En un mercado de trabajo real, los salarios no los fija la competencia pura sino la
negociación y las restricciones institucionales:

$$W = P^{e}\,F(u, z)$$

con $P^{e}$ el nivel de precios esperado, $u$ la tasa de paro y $z$ un conjunto de
factores institucionales.

| Determinante | Efecto sobre $W$ |
| --- | --- |
| Precios esperados | proporcional: lo que importa es el salario real |
| Tasa de paro | negativo: más paro debilita la posición negociadora |
| Prestaciones por desempleo, salario mínimo, poder sindical ($z$) | positivo |

**Por qué el salario no cae hasta vaciar el mercado**, que es la pregunta central del
tema:

| Teoría | Explicación |
| --- | --- |
| Salarios de eficiencia | pagar por encima del mínimo aumenta la productividad y reduce la rotación |
| Negociación colectiva | los ocupados negocian y los parados no están en la mesa |
| Contratos implícitos | empresas y trabajadores prefieren estabilidad salarial |
| Salario mínimo y regulación | límites legales |

## Determinación de los precios

Las empresas fijan precios aplicando un margen sobre el coste:

$$P = (1+\mu)\,\frac{W}{A}$$

con $\mu$ el margen y $A$ la productividad. Despejando el salario real:

$$\frac{W}{P} = \frac{A}{1+\mu}$$

**El salario real que las empresas están dispuestas a pagar no depende del paro**: solo
de la productividad y del margen, es decir, del grado de competencia en los mercados de
bienes.

## La tasa natural de desempleo

Juntando las dos relaciones y suponiendo que las expectativas se cumplen, $P^{e}=P$:

$$F(u_n, z) = \frac{A}{1+\mu}$$

```{=latex}
\begin{definicion}[Tasa natural de desempleo]
La tasa $u_n$ compatible con que la fijación de salarios y la de precios sean
consistentes entre sí, es decir, con inflación estable.
\end{definicion}
```

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=9.4cm, height=5.8cm, axis lines=left,
  xlabel={$u$}, ylabel={$W/P$},
  xmin=0, xmax=0.20, ymin=0.5, ymax=1.4,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=100,
]
\addplot[thick, domain=0.02:0.19] {1.25 - 3*x};
\addplot[thick, domain=0:0.20] {0.85};
\addplot[only marks, mark=*, mark size=1.4pt] coordinates {(0.1333,0.85)};
\node[font=\scriptsize, anchor=west] at (axis cs:0.145,1.05) {salarios (WS)};
\node[font=\scriptsize, anchor=west] at (axis cs:0.145,0.92) {precios (PS)};
\node[font=\scriptsize, anchor=north] at (axis cs:0.1333,0.79) {$u_n$};
\end{axis}
\end{tikzpicture}
\end{center}
```

| Sube $u_n$ | Motivo |
| --- | --- |
| Aumento de las prestaciones o del poder sindical ($z\uparrow$) | los salarios exigidos suben para cada nivel de paro |
| Aumento del margen $\mu$ | menos competencia, salario real ofrecido menor |
| Peor emparejamiento entre oferta y demanda de cualificaciones | más paro estructural |

```{=latex}
\begin{anotacion}
\textbf{La productividad no afecta a la tasa natural.} Un aumento de $A$ eleva el salario
real de equilibrio y desplaza la recta de precios hacia arriba, pero en el largo plazo los
salarios negociados suben en la misma proporción y $u_n$ vuelve a su nivel. Es la razón de
que un siglo de progreso técnico no haya reducido la tasa de paro de forma permanente.
\end{anotacion}
```

## La curva de oferta agregada

Deshaciendo el supuesto de expectativas cumplidas, la relación entre precios y producción
es

$$P = P^{e}\,(1+\mu)\,F\!\left(1-\frac{Y}{L}, z\right)$$

| Horizonte | Forma de la OA | Razón |
| --- | --- | --- |
| Muy corto plazo | horizontal | precios completamente rígidos |
| Corto y medio plazo | **pendiente positiva** | expectativas no cumplidas del todo |
| Largo plazo | **vertical** en $Y_n$ | los precios esperados igualan a los reales |

**La pendiente positiva de la OA a corto plazo depende de un error de expectativas.** Si
los precios suben más de lo esperado, el salario real efectivo cae, las empresas contratan
y la producción sube. Cuando las expectativas se corrigen, ese efecto desaparece.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=9.4cm, height=6.0cm, axis lines=left,
  xlabel={$Y$}, ylabel={$P$},
  xmin=0, xmax=10, ymin=0, ymax=8,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\draw[thick] (axis cs:5,0) -- (axis cs:5,8);
\addplot[thick, domain=1.5:8.5] {0.9*x - 0.5};
\addplot[thick, dashed, domain=0:10] {1.2};
\node[font=\scriptsize, anchor=west] at (axis cs:5.15,7.4) {OA largo plazo};
\node[font=\scriptsize, anchor=west] at (axis cs:8.0,7.0) {OA corto};
\node[font=\scriptsize, anchor=west] at (axis cs:8.0,1.4) {OA muy corto};
\node[font=\scriptsize, anchor=north] at (axis cs:5,-0.15) {$Y_n$};
\end{axis}
\end{tikzpicture}
\end{center}
```

La producción $Y_n$ asociada a la tasa natural se llama **producción potencial**, y la
diferencia $Y - Y_n$ es la **brecha de producción**, que es lo que la política de demanda
puede corregir.

## La ley de Okun

Relación empírica entre la brecha de producción y el paro:

$$u_t - u_{t-1} = -\beta\,(g_{Yt} - \bar{g})$$

con $\beta$ en torno a 0,4 en las economías europeas.

**El crecimiento tiene que superar un umbral para que el paro baje**, porque parte del
crecimiento la absorbe el aumento de la productividad y de la población activa. Es una
regularidad estadística, no una ley teórica, y su coeficiente varía entre países y
épocas.

## Ejercicios

```{=latex}
\begin{ejercicio}
En un país de 10 millones de personas en edad de trabajar hay 6 millones de ocupados y 1
de parados. Calcular las tasas de actividad, paro y empleo.
\end{ejercicio}

\begin{solucion}
Activos: $6+1 = 7$ millones.

\medskip
Actividad: $7/10 = 0{,}70$, es decir el 70\,\%. Paro: $1/7 = 0{,}143$, el 14,3\,\%.
Empleo: $6/10 = 0{,}60$, el 60\,\%.

\medskip
Si 500\,000 parados se desanimaran y dejaran de buscar, la tasa de paro bajaría al
$0{,}5/6{,}5 = 0{,}077$, el 7,7\,\% sin que nadie hubiera encontrado trabajo, y la de empleo seguiría
en el 60\,\%. Ahí se ve por qué hay que mirar las dos.
\end{solucion}

\begin{ejercicio}
El margen empresarial aumenta del 20\,\% al 25\,\%. ¿Qué le ocurre a la tasa natural de
desempleo?
\end{ejercicio}

\begin{solucion}
El salario real que las empresas ofrecen pasa de $A/1{,}20$ a $A/1{,}25$: la recta de
precios se desplaza hacia abajo. Como la relación de salarios es decreciente en $u$, el
nuevo corte se produce a una tasa de paro \textbf{mayor}.

\medskip
Menos competencia en los mercados de bienes eleva el paro estructural, y por eso la
política de competencia tiene efectos macroeconómicos.
\end{solucion}

\begin{ejercicio}
Con $\beta = 0{,}4$ y un crecimiento tendencial del 2\,\%, ¿cuánto debe crecer la economía
para que el paro baje 1 punto en un año?
\end{ejercicio}

\begin{solucion}
$-1 = -0{,}4(g - 2)$ da $g - 2 = 2{,}5$, es decir un crecimiento del 4,5\,\%.

\medskip
Con un crecimiento del 2\,\% el paro se mantiene, y por debajo sube. Ese umbral explica
por qué una recuperación débil puede coexistir durante años con un paro que no baja.
\end{solucion}
```

El mercado de trabajo y la oferta agregada están desarrollados en \cite{blanchard2017} y
\cite{dornbusch2020}, con problemas resueltos en \cite{sanchez2012} y
\cite{belzunegui2014}.
