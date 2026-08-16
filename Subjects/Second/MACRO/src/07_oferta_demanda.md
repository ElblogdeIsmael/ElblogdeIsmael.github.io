# El modelo de oferta y demanda agregadas

Tema 7 del programa. La demanda agregada en función del nivel de precios, la
determinación del equilibrio, las alteraciones por el lado de la demanda y de la oferta,
la curva de Phillips, y la inflación, la desinflación y el desempleo.

## La curva de demanda agregada

Deshaciendo el supuesto de precios fijos del IS-LM, cada nivel de precios da un
equilibrio distinto. El lugar de esos pares $(Y,P)$ es la **demanda agregada**.

$$P\uparrow \ \Rightarrow\ \frac{M}{P}\downarrow \ \Rightarrow\ i\uparrow
\ \Rightarrow\ I\downarrow \ \Rightarrow\ Y\downarrow$$

| Razón de la pendiente negativa | Mecanismo |
| --- | --- |
| Efecto Keynes | menos saldos reales, tipo más alto, menos inversión |
| Efecto riqueza o Pigou | el poder adquisitivo de la riqueza cae y el consumo con él |
| Efecto tipo de cambio real | los productos nacionales se encarecen y $NX$ cae |

| Desplaza la DA a la derecha |
| --- |
| Aumento del gasto público o reducción de impuestos |
| Aumento de la oferta monetaria |
| Mejora de expectativas |
| Aumento de la renta exterior |

**La DA no es la demanda del capítulo microeconómico.** No se deriva de sustituir un bien
por otro, sino de los tres efectos de la tabla, y por eso su pendiente tiene una
explicación completamente distinta.

## El equilibrio

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

La producción de equilibrio puede estar por encima o por debajo de la potencial, y esa
brecha es lo que el modelo explica.

| Situación | Brecha | Presión sobre los precios |
| --- | --- | --- |
| $Y > Y_n$ | expansiva | inflacionista |
| $Y = Y_n$ | nula | ninguna |
| $Y < Y_n$ | recesiva | desinflacionista |

**El ajuste al largo plazo lo hacen las expectativas.** Si $Y > Y_n$, los precios suben
más de lo esperado, las expectativas se corrigen al alza, la OA se desplaza hacia arriba y
la producción vuelve a $Y_n$ con precios más altos.

## Perturbaciones de demanda

| Perturbación | Corto plazo | Largo plazo |
| --- | --- | --- |
| Expansión fiscal o monetaria | $Y\uparrow$, $P\uparrow$ | $Y = Y_n$, $P\uparrow\uparrow$ |
| Contracción | $Y\downarrow$, $P\downarrow$ | $Y = Y_n$, $P\downarrow\downarrow$ |

```{=latex}
\begin{proposicion}[Neutralidad del dinero a largo plazo]
Un aumento permanente de la oferta monetaria eleva el nivel de precios en la misma
proporción y deja inalteradas todas las variables reales.
\end{proposicion}
```

Es el resultado que reconcilia keynesianos y monetaristas: **el dinero importa a corto
plazo y no a largo**. La discusión sobre política monetaria es, en el fondo, sobre cuánto
dura el corto plazo.

## Perturbaciones de oferta

| Perturbación | Efecto | Nombre |
| --- | --- | --- |
| Subida del precio del petróleo | $Y\downarrow$, $P\uparrow$ | **estanflación** |
| Aumento del margen $\mu$ | ídem, y sube $Y_n$ al alza del paro | --- |
| Mejora de productividad | $Y\uparrow$, $P\downarrow$ | perturbación favorable |

```{=latex}
\begin{anotacion}
La estanflación es el caso que \textbf{ningún instrumento de demanda resuelve}: expandir
la demanda agrava la inflación y contraerla agrava la recesión. Fue lo que ocurrió en los
años setenta con las crisis del petróleo, y lo que dejó sin respuesta al keynesianismo
simple. La única salida es actuar sobre la oferta, que es lenta.
\end{anotacion}
```

## La curva de Phillips

Relación empírica entre inflación y desempleo, en su versión con expectativas:

$$\pi_t = \pi_t^{e} + (\mu + z) - \alpha\,u_t$$

y, si las expectativas son las del periodo anterior, $\pi_t^{e} = \pi_{t-1}$:

$$\pi_t - \pi_{t-1} = -\alpha\,(u_t - u_n)$$

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=9.4cm, height=5.8cm, axis lines=left,
  xlabel={$u$}, ylabel={$\pi$},
  xmin=0, xmax=0.20, ymin=-0.03, ymax=0.10,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\draw[thick, gray] (axis cs:0.10,-0.03) -- (axis cs:0.10,0.10);
\addplot[thick, domain=0.03:0.18] {0.055 - 0.5*x};
\addplot[thick, dashed, domain=0.05:0.19] {0.085 - 0.5*x};
\node[font=\scriptsize, anchor=west] at (axis cs:0.155,0.006) {CP corto};
\node[font=\scriptsize, anchor=west] at (axis cs:0.165,0.021) {CP$'$};
\node[font=\scriptsize, anchor=west, gray] at (axis cs:0.103,0.093) {CP largo};
\end{axis}
\end{tikzpicture}
\end{center}
```

| Versión | Relación | Vigencia |
| --- | --- | --- |
| **Original** (1958) | inflación frente a paro, estable | funcionó hasta los años setenta |
| **Con expectativas** | inflación **acelerada** frente a paro | la vigente |
| **A largo plazo** | vertical en $u_n$ | no hay disyuntiva permanente |

```{=latex}
\begin{anotacion}
La curva de Phillips original se rompió en los setenta, y el motivo lo habían anticipado
Friedman y Phelps: si se intenta explotar la disyuntiva de forma sistemática, los agentes
incorporan esa política a sus expectativas y la relación desaparece. Es un caso de la
\textbf{crítica de Lucas}: las relaciones estimadas cambian cuando cambia la política que
las generó, así que extrapolarlas para diseñar políticas es un error.
\end{anotacion}
```

De la versión con expectativas sale la **NAIRU**, la tasa de paro no aceleradora de la
inflación, que coincide con $u_n$:

| Situación | Inflación |
| --- | --- |
| $u < u_n$ | acelera |
| $u = u_n$ | estable |
| $u > u_n$ | desacelera |

## Inflación, desinflación y desempleo

| Coste de la inflación | En qué consiste |
| --- | --- |
| Costes de suela de zapato | gestionar saldos monetarios reducidos |
| Costes de menú | cambiar precios continuamente |
| Distorsión de precios relativos | las señales del mercado se confunden |
| Redistribución arbitraria | perjudica a acreedores y a rentas fijas |
| Incertidumbre | desincentiva la inversión a largo plazo |

**La inflación anticipada cuesta mucho menos que la inesperada**, porque los contratos se
indexan. Lo que daña de verdad es la variabilidad y la sorpresa.

### El coste de desinflar

$$\text{tasa de sacrificio} =
\frac{\text{puntos de PIB perdidos}}{\text{puntos de inflación reducidos}}$$

Con la curva de Phillips con expectativas adaptativas, reducir la inflación exige mantener
el paro por encima de $u_n$ durante un tiempo, y ese es su coste.

| Factor | Efecto sobre la tasa de sacrificio |
| --- | --- |
| Expectativas adaptativas y contratos indexados | la aumentan |
| Credibilidad del banco central | la reduce |
| Anuncio previo y gradualidad | la reduce, si es creíble |

```{=latex}
\begin{anotacion}
De ahí la \textbf{independencia de los bancos centrales}, que es la aplicación práctica
más visible del tema. Un banco central creíble desinfla barato porque las expectativas se
ajustan sin necesidad de recesión; uno sometido al gobierno tiene incentivo a generar
inflación sorpresa, los agentes lo anticipan, y el resultado es más inflación con el mismo
paro. Es el problema de la inconsistencia temporal.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Con $\pi_t - \pi_{t-1} = -0{,}5(u_t - 0{,}06)$, la inflación es del 8\,\% y se quiere
bajar al 2\,\% en tres años. ¿Qué tasa de paro hace falta?
\end{ejercicio}

\begin{solucion}
Hay que reducir 6 puntos en tres años, es decir 2 puntos al año:
$$-2 = -0{,}5(u - 6) \ \Longrightarrow\ u = 10$$

es decir un 10\,\% de paro.
Cuatro puntos de paro por encima de la tasa natural durante tres años. Con una ley de
Okun de coeficiente 0,4 eso equivale a unos 10 puntos de PIB perdidos por cada punto de
inflación reducido si el ajuste es rápido, y bastante menos si la política es creíble y
las expectativas se anticipan.
\end{solucion}

\begin{ejercicio}
El precio del petróleo se duplica. Analizar el efecto a corto y a largo plazo.
\end{ejercicio}

\begin{solucion}
A corto plazo la OA se desplaza hacia arriba: los precios suben y la producción cae. Es
estanflación, y la política de demanda no puede corregir las dos cosas a la vez.

\medskip
A largo plazo, si el encarecimiento es permanente, la producción potencial \textbf{cae} y
la tasa natural de desempleo sube, porque el salario real compatible con el margen de las
empresas es menor. La economía no vuelve al punto de partida: se ha empobrecido.
\end{solucion}

\begin{ejercicio}
¿Por qué no existe una disyuntiva permanente entre inflación y desempleo?
\end{ejercicio}

\begin{solucion}
Porque la disyuntiva de corto plazo depende de un error de expectativas. Mantener el paro
por debajo de $u_n$ exige inflación por encima de la esperada; los agentes revisan sus
expectativas al alza; y para sostener el mismo paro hace falta más inflación aún. El
resultado es inflación creciente con el mismo paro, no un punto estable.

\medskip
A largo plazo la curva de Phillips es vertical en $u_n$, y la política monetaria elige el
nivel de inflación, no el de paro.
\end{solucion}
```

El modelo de oferta y demanda agregadas y la curva de Phillips están desarrollados en
\cite{blanchard2017}, \cite{dornbusch2020} y \cite{mankiw2014}, con problemas resueltos
en \cite{sanchez2012} y \cite{belzunegui2014}.
