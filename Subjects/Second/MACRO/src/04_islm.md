# El modelo IS-LM en una economía cerrada

Tema 4 del programa. El equilibrio conjunto en los mercados de bienes y financieros, los
multiplicadores de la política monetaria y fiscal, y la combinación de políticas.

## El equilibrio conjunto

$$\begin{cases}
\text{IS:} \quad Y = \dfrac{1}{1-c(1-t)}\big(A_0 - b\,i\big) \\[2ex]
\text{LM:} \quad \dfrac{M}{P} = kY - hi
\end{cases}$$

Dos ecuaciones y dos incógnitas, $Y$ e $i$. La solución es el único par que equilibra a
la vez los dos mercados.

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
\addplot[only marks, mark=*, mark size=1.5pt] coordinates {(5,3.75)};
\draw[dashed] (axis cs:5,0) -- (axis cs:5,3.75);
\draw[dashed] (axis cs:0,3.75) -- (axis cs:5,3.75);
\node[font=\scriptsize, anchor=west] at (axis cs:8.0,1.2) {IS};
\node[font=\scriptsize, anchor=west] at (axis cs:8.0,6.9) {LM};
\node[font=\scriptsize, anchor=south west] at (axis cs:5.1,3.85) {$E$};
\end{axis}
\end{tikzpicture}
\end{center}
```

Resolviendo el sistema:

$$Y^{*} = \frac{h\,A_0 + b\,(M/P)}{h(1-c(1-t)) + bk}$$

## Multiplicadores

| Política | Multiplicador |
| --- | --- |
| Fiscal, $\partial Y/\partial G$ | $\dfrac{h}{h(1-c(1-t)) + bk}$ |
| Monetaria, $\partial Y/\partial(M/P)$ | $\dfrac{b}{h(1-c(1-t)) + bk}$ |

**El multiplicador fiscal del modelo IS-LM es menor que el del tema 2**, y la razón tiene
nombre.

## El efecto expulsión

Al aumentar el gasto público, la renta sube; al subir la renta, sube la demanda de dinero
y con ella el tipo de interés; y al subir el tipo, cae la inversión privada. Parte del
estímulo se anula.

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth, font=\scriptsize, node distance=8mm]
\node (a) at (0,0) {$G\uparrow$};
\node (b) at (1.9,0) {$Y\uparrow$};
\node (c) at (3.8,0) {$L\uparrow$};
\node (d) at (5.7,0) {$i\uparrow$};
\node (e) at (7.6,0) {$I\downarrow$};
\node (f) at (9.7,0) {$Y$ sube menos};
\foreach \x/\y in {a/b, b/c, c/d, d/e, e/f} \draw[->] (\x) -- (\y);
\end{tikzpicture}
\end{center}
```

| Cuánto expulsa | Depende de |
| --- | --- |
| Mucho | LM inclinada ($h$ pequeño) o inversión muy sensible ($b$ grande) |
| Poco | LM plana o inversión insensible al tipo |
| **Nada** | trampa de la liquidez: LM horizontal |
| **Todo** | caso clásico: LM vertical |

```{=latex}
\begin{anotacion}
El efecto expulsión es la razón de que el debate sobre el estímulo fiscal no tenga una
respuesta única. En una recesión profunda con tipos en el suelo, la LM es casi
horizontal y el multiplicador fiscal se acerca al del tema 2. Con la economía cerca del
pleno empleo y tipos que responden, la expulsión es fuerte. \textbf{El contexto decide.}
\end{anotacion}
```

## Política fiscal

| Instrumento | Efecto sobre IS | Resultado |
| --- | --- | --- |
| Aumento de $G$ | derecha | $Y\uparrow$, $i\uparrow$ |
| Reducción de $T$ | derecha | $Y\uparrow$, $i\uparrow$ |
| Política contractiva | izquierda | $Y\downarrow$, $i\downarrow$ |

**La política fiscal expansiva sube el tipo de interés**, y ese es su coste: cambia la
composición de la demanda a favor del gasto público y en contra de la inversión privada.

## Política monetaria

| Instrumento | Efecto sobre LM | Resultado |
| --- | --- | --- |
| Aumento de $M$ | derecha | $Y\uparrow$, $i\downarrow$ |
| Reducción de $M$ | izquierda | $Y\downarrow$, $i\uparrow$ |

El mecanismo de transmisión:

$$M\uparrow \ \Rightarrow\ i\downarrow \ \Rightarrow\ I\uparrow \ \Rightarrow\ Y\uparrow$$

**La cadena se rompe si alguno de los eslabones falla.** En la trampa de la liquidez el
tipo ya no baja; y si las expectativas son muy malas, la inversión no responde aunque el
tipo caiga. Las dos cosas ocurrieron a la vez tras 2008.

## Combinación de políticas

Como las dos políticas mueven $Y$ e $i$ de forma distinta, **combinarlas permite elegir
la composición del producto**:

| Objetivo | Combinación |
| --- | --- |
| Más renta sin subir el tipo | fiscal expansiva **más** monetaria expansiva |
| Misma renta, más inversión privada | fiscal contractiva más monetaria expansiva |
| Misma renta, más gasto público | fiscal expansiva más monetaria contractiva |
| Enfriar la economía | las dos contractivas |

La segunda fila describe la política que se aplicó en Estados Unidos en los años noventa:
consolidación fiscal con tipos bajos, para desplazar recursos del consumo público a la
inversión privada sin frenar la economía.

```{=latex}
\begin{ejemplo}
Con IS $Y = 2000 - 50i$ y LM $i = 0{,}01Y - 10$:

\medskip
Sustituyendo, $Y = 2000 - 50(0{,}01Y-10) = 2500 - 0{,}5Y$, de donde
$Y^{*} = 1666{,}7$ e $i^{*} = 6{,}67$.

\medskip
Si el gasto público aumenta y desplaza la IS a $Y = 2200 - 50i$, el nuevo equilibrio es
$Y = 1800$ e $i = 8$. La renta sube 133,3 y el tipo 1,33 puntos.

\medskip
\textbf{Sin efecto expulsión} la renta habría subido los 200 del desplazamiento. Los 66,7
que faltan son la inversión privada desplazada por el tipo más alto: un tercio del
estímulo.
\end{ejemplo}
```

## Límites del modelo

| Supuesto | Qué deja fuera |
| --- | --- |
| Precios fijos | la inflación, que entra en los temas 6 y 7 |
| Economía cerrada | el sector exterior, tema 5 |
| Expectativas dadas | las expectativas racionales |
| Sin restricciones de crédito | los canales financieros de la crisis |

**El IS-LM es un modelo de corto plazo y de demanda**, y su utilidad es organizar el
razonamiento sobre las políticas, no predecir con precisión. Los temas siguientes van
levantando sus supuestos uno a uno.

## Ejercicios

```{=latex}
\begin{ejercicio}
Con IS $Y = 1000 - 40i$ y LM $Y = 500 + 60i$, hallar el equilibrio.
\end{ejercicio}

\begin{solucion}
$1000-40i = 500+60i$ da $i^{*} = 5$ y $Y^{*} = 800$. Comprobación en la LM:
$500+300 = 800$.
\end{solucion}

\begin{ejercicio}
En el ejercicio anterior, el gasto público aumenta y la IS pasa a $Y = 1150 - 40i$.
Calcular la nueva renta y cuantificar el efecto expulsión.
\end{ejercicio}

\begin{solucion}
$1150-40i = 500+60i$ da $i = 6{,}5$ e $Y = 890$. La renta sube 90.

\medskip
Sin expulsión —con el tipo congelado en 5— la renta habría subido los 150 del
desplazamiento. La diferencia, 60, es la inversión privada expulsada por la subida de 1,5
puntos del tipo: el 40\,\% del estímulo.
\end{solucion}

\begin{ejercicio}
¿Qué combinación de políticas eleva la renta sin cambiar el tipo de interés, y por qué
puede interesar?
\end{ejercicio}

\begin{solucion}
Fiscal expansiva y monetaria expansiva a la vez: la IS se desplaza a la derecha y la LM
también, en la medida justa para que el tipo vuelva a su nivel inicial.

\medskip
Interesa porque \textbf{elimina el efecto expulsión}: la inversión privada no se resiente, así
que el aumento de renta es el del multiplicador del tema 2. El coste es que exige
coordinación entre gobierno y banco central, que en la zona euro son autoridades
distintas.
\end{solucion}
```

El modelo IS-LM y el análisis de políticas están desarrollados en \cite{blanchard2017} y
\cite{dornbusch2020}, con problemas resueltos en \cite{sanchez2012} y
\cite{belzunegui2014}.
