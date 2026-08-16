# El monopolio

Capítulo 6 del programa. Características del monopolio, el monopolio con precio único,
los costes sociales del poder de mercado y su regulación, y la discriminación de precios.

## Características

| Rasgo | Consecuencia |
| --- | --- |
| Un solo vendedor | la empresa **es** la industria |
| Producto sin sustitutivos próximos | la demanda no se desvía a otro bien |
| Barreras de entrada | los beneficios no atraen competencia |

| Barrera | Origen |
| --- | --- |
| Legal | patentes, concesiones, licencias |
| Natural | economías de escala hasta cubrir el mercado |
| Control de un factor esencial | acceso exclusivo a una materia prima |
| Tecnológica | conocimiento no replicable |

**El monopolio no fija el precio libremente**: sigue limitado por la demanda. Puede
elegir precio o cantidad, pero no las dos cosas.

## El monopolio con precio único

La diferencia crucial con la competencia perfecta es que ahora la demanda de la empresa
**tiene pendiente negativa**, así que vender una unidad más obliga a bajar el precio de
todas.

$$I(Q) = P(Q)\,Q \qquad\Longrightarrow\qquad
IMg = P + Q\,\frac{dP}{dQ} < P$$

```{=latex}
\begin{proposicion}
Para una demanda lineal $P = a-bQ$, el ingreso marginal es
$$IMg = a - 2bQ$$
es decir, tiene la misma ordenada en el origen y \textbf{el doble de pendiente}.
\end{proposicion}
```

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=9.4cm, height=6.2cm, axis lines=left,
  xlabel={$Q$}, ylabel={$P$},
  xmin=0, xmax=11, ymin=0, ymax=11,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\addplot[thick, domain=0:10] {10-x};
\addplot[dashed, domain=0:5] {10-2*x};
\addplot[thick, domain=0:10] {2+0.6*x};
\addplot[only marks, mark=*, mark size=1.4pt] coordinates {(3.08,6.92) (3.08,3.85)};
\draw[dashed] (axis cs:3.08,0) -- (axis cs:3.08,6.92);
\node[font=\scriptsize, anchor=west] at (axis cs:3.25,7.2) {$P_M$};
\node[font=\scriptsize, anchor=west] at (axis cs:8.4,1.4) {$IMg$};
\node[font=\scriptsize, anchor=west] at (axis cs:8.4,2.4) {$D$};
\node[font=\scriptsize, anchor=west] at (axis cs:8.4,7.3) {$CMg$};
\end{axis}
\end{tikzpicture}
\end{center}
```

La condición de maximización sigue siendo $IMg = CMg$, pero ahora el precio se lee en la
**curva de demanda**, no en la de ingreso marginal. Y como $IMg < P$:

$$P_M > CMg$$

**Ese margen entre precio y coste marginal es el poder de mercado.** Se mide con el
índice de Lerner:

$$L = \frac{P-CMg}{P} = -\frac{1}{\varepsilon_p}$$

| Índice | Situación |
| --- | --- |
| $L = 0$ | competencia perfecta: $P = CMg$ |
| $L$ cercano a 1 | poder de mercado muy alto |

La igualdad con la inversa de la elasticidad da un resultado tajante: **el monopolista
nunca produce en el tramo inelástico de la demanda**. Si lo hiciera, subir el precio
aumentaría el ingreso y reduciría el coste a la vez.

## Costes sociales del poder de monopolio

Comparado con el resultado competitivo:

| | Competencia | Monopolio |
| --- | --- | --- |
| Precio | $= CMg$ | $> CMg$ |
| Cantidad | mayor | menor |
| Excedente del consumidor | mayor | menor |
| Excedente del productor | menor | mayor |
| **Excedente total** | máximo | **menor** |

La diferencia entre los dos excedentes totales es la **pérdida irrecuperable de
eficiencia**: unidades que los consumidores valoraban por encima de su coste y que no se
producen.

```{=latex}
\begin{anotacion}
Parte del daño del monopolio es una \textbf{transferencia} del consumidor al productor,
que no destruye valor sino que lo redistribuye. Lo que se pierde de verdad es el
triángulo de las unidades no producidas. La distinción importa al valorar políticas: un
impuesto sobre el beneficio del monopolista recupera la transferencia y no corrige la
ineficiencia.
\end{anotacion}
```

A eso se añade la **búsqueda de rentas**: los recursos que las empresas dedican a
obtener y conservar la posición de monopolio —presión política, litigios, patentes
defensivas— son coste social puro.

## Regulación

| Instrumento | Qué hace | Problema |
| --- | --- | --- |
| Precio igual al coste marginal | restaura la eficiencia | con monopolio natural da pérdidas |
| Precio igual al coste medio | beneficio nulo, sin pérdidas | queda ineficiencia residual |
| Tarifa en dos partes | cuota fija más precio marginal | exige información y admite exclusión |
| Defensa de la competencia | impide la formación del monopolio | difícil con barreras naturales |
| Empresa pública | elimina el objetivo de beneficio | riesgo de ineficiencia productiva |

**El monopolio natural es el caso difícil.** Con economías de escala en todo el rango
relevante, el coste medio es decreciente y por tanto está siempre por encima del
marginal: exigir $P = CMg$ garantiza pérdidas, y la empresa necesitaría subvención para
sobrevivir. Por eso la regulación real se conforma con $P = CMe$.

## Discriminación de precios

Cobrar precios distintos por el mismo producto, sin que la diferencia responda a costes.

| Grado | Cómo | Requisito |
| --- | --- | --- |
| **Primero** o perfecta | un precio por unidad, igual a la disposición a pagar | conocer cada demanda individual |
| **Segundo** | precios según la cantidad comprada | autoselección del comprador |
| **Tercero** | precios distintos por grupos identificables | segmentar y evitar la reventa |

```{=latex}
\begin{proposicion}[Discriminación perfecta]
El monopolista que discrimina perfectamente produce la \textbf{cantidad competitiva} y
se apropia de todo el excedente: el excedente del consumidor es nulo y no hay pérdida
irrecuperable de eficiencia.
\end{proposicion}
```

Es un resultado que descoloca: **la discriminación perfecta es eficiente**, aunque
distributivamente sea el peor caso posible para los consumidores. Vuelve a mostrar que
eficiencia y equidad son criterios independientes.

Para el tercer grado, la regla de asignación entre mercados:

$$IMg_1 = IMg_2 = CMg
\qquad\Longleftrightarrow\qquad
\frac{P_1}{P_2} = \frac{1-1/\lvert\varepsilon_2\rvert}{1-1/\lvert\varepsilon_1\rvert}$$

**Al grupo con demanda más inelástica se le cobra más.** Es lo que explica los descuentos
a estudiantes y jubilados, las tarifas aéreas según antelación y los precios distintos de
un mismo medicamento entre países.

| Condición para discriminar | Por qué |
| --- | --- |
| Poder de mercado | sin él no se puede fijar precio |
| Segmentos identificables | hay que saber a quién cobrar qué |
| **Reventa imposible o cara** | si no, los baratos revenden a los caros |

La tercera es la que suele fallar y la que explica que la discriminación sea más fácil en
servicios —un billete nominativo, un corte de pelo— que en bienes físicos.

## Ejercicios

```{=latex}
\begin{ejercicio}
Un monopolista tiene demanda $P = 100-2Q$ y $CT = 20Q + 100$. Hallar precio y cantidad
óptimos, el beneficio y la pérdida de eficiencia frente a la competencia.
\end{ejercicio}

\begin{solucion}
$IMg = 100-4Q$ y $CMg = 20$, así que $100-4Q = 20$ da $Q_M = 20$ y $P_M = 60$. El
beneficio es $1200 - (400+100) = 700$.

\medskip
En competencia, $P = CMg = 20$ daría $Q_C = 40$. La pérdida irrecuperable es el triángulo
entre las dos cantidades:
$$\tfrac12\,(60-20)(40-20) = 400$$
\end{solucion}

\begin{ejercicio}
¿Por qué un monopolista nunca produce donde la demanda es inelástica?
\end{ejercicio}

\begin{solucion}
En el tramo inelástico, $\lvert\varepsilon\rvert<1$ implica $IMg<0$: vender una unidad
más reduce el ingreso total. Como el coste marginal es positivo, reducir la producción
aumentaría el ingreso y bajaría el coste a la vez, así que ese punto no puede ser óptimo.
El monopolista opera siempre donde $\lvert\varepsilon\rvert>1$.
\end{solucion}

\begin{ejercicio}
Un cine cobra 9 euros la entrada general y 6 la de estudiante. ¿Qué tipo de
discriminación es y qué condiciones la hacen posible?
\end{ejercicio}

\begin{solucion}
Discriminación de tercer grado: segmentos identificables con precios distintos. Es
posible porque el cine tiene algún poder de mercado, los grupos se distinguen con el
carné, y \textbf{la reventa es inviable} al comprobarse la condición en la entrada. La demanda
de los estudiantes es más elástica —tienen menos renta y más alternativas de ocio—, y por
eso pagan menos.
\end{solucion}
```

El monopolio y la discriminación de precios están desarrollados en \cite{pindyck2018} y
\cite{frank2009}, con la exposición introductoria de \cite{krugman2013}.
