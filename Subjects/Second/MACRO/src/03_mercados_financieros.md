# Los mercados financieros

Tema 3 del programa. Activos financieros, la demanda de dinero, la oferta monetaria, el
equilibrio en los mercados financieros y la política monetaria, y la curva LM.

## Activos financieros

La decisión de cartera enfrenta dos activos con propiedades opuestas:

| Activo | Rendimiento | Liquidez |
| --- | --- | --- |
| Dinero | ninguno | máxima |
| Bonos | el tipo de interés $i$ | menor |

**El tipo de interés es el coste de oportunidad de tener dinero**, y esa frase resume
todo el tema: cuanto más rinden los bonos, menos dinero conviene guardar.

Y la relación entre el precio de un bono y el tipo:

$$P_{bono} = \frac{\text{valor nominal}}{1+i}$$

**Precio y tipo se mueven en sentidos opuestos.** Un bono comprado al 2 % pierde valor de
mercado si los tipos suben al 4 %, porque nadie pagará por él lo mismo que por uno nuevo
que rinde más.

## La demanda de dinero

```{=latex}
\begin{definicion}
$$L = k\,Y - h\,i$$
con $k>0$ la sensibilidad a la renta y $h>0$ la sensibilidad al tipo de interés.
\end{definicion}
```

Los tres motivos keynesianos para demandar dinero:

| Motivo | De qué depende |
| --- | --- |
| Transacción | de la renta: más operaciones, más saldos |
| Precaución | de la renta: imprevistos |
| Especulación | del tipo de interés: se guarda dinero si se espera que los bonos bajen |

```{=latex}
\begin{anotacion}
La demanda de dinero es de \textbf{saldos reales}, $M/P$: lo que importa es el poder de
compra que se guarda, no el número de billetes. Por eso al duplicarse los precios se
duplica la demanda nominal de dinero sin que haya cambiado ninguna decisión real.
\end{anotacion}
```

## La oferta monetaria

| Agregado | Contenido |
| --- | --- |
| Base monetaria $H$ | efectivo en circulación más reservas bancarias |
| M1 | efectivo más depósitos a la vista |
| M2, M3 | añaden depósitos a plazo y otros instrumentos |

El sistema bancario **crea dinero**: al conceder un préstamo abre un depósito, y ese
depósito es dinero. El proceso se repite y el resultado es el multiplicador monetario:

$$M = m\,H, \qquad m = \frac{1+e}{e+r}$$

con $e$ la proporción de efectivo sobre depósitos y $r$ el coeficiente de reservas.

| Si sube | El multiplicador |
| --- | --- |
| El coeficiente de reservas $r$ | baja |
| La preferencia por el efectivo $e$ | baja |

**El banco central controla $H$, no $M$.** La cantidad de dinero depende también de lo
que los bancos decidan prestar y el público guardar, y en una crisis de confianza el
multiplicador se hunde: se puede inyectar base monetaria sin que aumente el dinero en
circulación.

### Instrumentos de política monetaria

| Instrumento | Cómo actúa |
| --- | --- |
| Operaciones de mercado abierto | compra o venta de bonos: cambia $H$ |
| Coeficiente de reservas | cambia $m$ |
| Facilidad de crédito | tipo al que el banco central presta a la banca |
| Tipo de interés oficial | el instrumento habitual en la práctica actual |

En la práctica moderna, los bancos centrales **fijan el tipo de interés** y dejan que la
cantidad de dinero se ajuste, en vez de al revés. El modelo se puede leer de las dos
formas.

## Equilibrio en los mercados financieros

$$\frac{M}{P} = k\,Y - h\,i$$

Dada la oferta real de dinero, esa ecuación determina el tipo de interés que vacía el
mercado.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.4cm, height=5.8cm, axis lines=left,
  xlabel={$M/P$}, ylabel={$i$},
  xmin=0, xmax=10, ymin=0, ymax=8,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\addplot[thick, domain=1:9] {8 - 0.8*x};
\draw[thick] (axis cs:5,0) -- (axis cs:5,8);
\addplot[only marks, mark=*, mark size=1.4pt] coordinates {(5,4)};
\node[font=\scriptsize, anchor=west] at (axis cs:7.6,1.5) {$L(Y)$};
\node[font=\scriptsize, anchor=west] at (axis cs:5.15,7.3) {oferta};
\end{axis}
\end{tikzpicture}
\end{center}
```

| Cambio | Efecto sobre $i$ |
| --- | --- |
| Aumento de la oferta monetaria | baja |
| Aumento de la renta | sube: más demanda de dinero por transacciones |
| Aumento del nivel de precios | sube: baja la oferta real |

## La curva LM

El lugar de los pares $(Y,i)$ que equilibran el mercado de dinero:

$$i = \frac{k}{h}\,Y - \frac{1}{h}\cdot\frac{M}{P}$$

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.4cm, height=5.8cm, axis lines=left,
  xlabel={$Y$}, ylabel={$i$},
  xmin=0, xmax=10, ymin=0, ymax=8,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\addplot[thick, domain=0.5:9] {0.8*x};
\addplot[dashed, domain=2:9.5] {0.8*x - 1.6};
\draw[->, >=stealth] (axis cs:5,4.4) -- (axis cs:6.6,4.4);
\node[font=\scriptsize, anchor=west] at (axis cs:7.4,6.4) {LM};
\node[font=\scriptsize, anchor=west] at (axis cs:8.5,5.2) {LM$'$};
\end{axis}
\end{tikzpicture}
\end{center}
```

**Por qué tiene pendiente positiva:** más renta aumenta la demanda de dinero, y con
oferta fija el tipo tiene que subir para que la gente se conforme con los saldos que hay.

| Determinante de la pendiente | Efecto |
| --- | --- |
| $k$ grande: la demanda responde mucho a la renta | LM más inclinada |
| $h$ grande: la demanda responde mucho al tipo | LM más plana |

| Desplaza la LM a la derecha | Motivo |
| --- | --- |
| Aumento de la oferta monetaria $M$ | más saldos reales |
| Caída del nivel de precios $P$ | ídem |
| Caída de la demanda de dinero | menos presión sobre el tipo |

### Dos casos extremos

| Caso | Forma de la LM | Consecuencia |
| --- | --- | --- |
| **Trampa de la liquidez** | horizontal: $h\to\infty$ | la política monetaria no baja más el tipo |
| **Caso clásico** | vertical: $h\to 0$ | la política monetaria es máximamente potente |

```{=latex}
\begin{anotacion}
La \textbf{trampa de la liquidez} dejó de ser una curiosidad teórica: con tipos cercanos a
cero, aumentar la oferta monetaria no reduce el tipo porque nadie prefiere bonos que no
rinden nada frente a dinero líquido. Es lo que llevó a los bancos centrales a instrumentos
no convencionales —compra masiva de activos, orientación de expectativas— a partir de
2009 y de nuevo en 2020.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
La demanda de dinero es $L = 0{,}5Y - 100i$ y la oferta real es 500. Hallar la ecuación de
la LM.
\end{ejercicio}

\begin{solucion}
$500 = 0{,}5Y - 100i$, de donde
$$i = 0{,}005Y - 5$$
Con $Y = 2000$, el tipo de equilibrio es 5. Y si la oferta subiera a 600, la LM pasaría a
$i = 0{,}005Y - 6$: se desplaza hacia abajo, es decir a la derecha.
\end{solucion}

\begin{ejercicio}
El coeficiente de reservas es del 10\,\% y el público mantiene un 20\,\% de sus depósitos
en efectivo. Calcular el multiplicador monetario.
\end{ejercicio}

\begin{solucion}
$$m = \frac{1+e}{e+r} = \frac{1{,}2}{0{,}3} = 4$$
Cada euro de base monetaria genera cuatro de dinero en circulación. Si en una crisis los
bancos elevaran sus reservas al 30\,\%, el multiplicador caería a
$1{,}2/0{,}5 = 2{,}4$ sin que el banco central hubiera hecho nada.
\end{solucion}

\begin{ejercicio}
Un bono paga 1000 euros dentro de un año. ¿Cuánto vale hoy con un tipo del 2\,\%? ¿Y si el
tipo sube al 5\,\%?
\end{ejercicio}

\begin{solucion}
$1000/1{,}02 = 980{,}4$ y $1000/1{,}05 = 952{,}4$. El precio cae un 2,9\,\% al subir el
tipo tres puntos.

\medskip
Con bonos a más plazo la caída es mucho mayor, porque el descuento se aplica varios
años. Es el riesgo de tipo de interés, y es lo que hace perder dinero a quien tiene
deuda a largo plazo cuando los tipos suben.
\end{solucion}
```

Los mercados financieros y la curva LM están desarrollados en \cite{blanchard2017} y
\cite{dornbusch2020}, con problemas resueltos en \cite{sanchez2012}.
