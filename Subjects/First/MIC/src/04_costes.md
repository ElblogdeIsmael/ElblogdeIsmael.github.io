# Los costes de producción y la maximización del beneficio

Capítulo 4 del programa. Concepto y clases de costes, funciones de coste a corto y a
largo plazo, economías de escala y la maximización del beneficio.

## Concepto y clases de costes

```{=latex}
\begin{definicion}[Coste de oportunidad]
Valor de la mejor alternativa a la que se renuncia al tomar una decisión.
\end{definicion}
```

Es el concepto de coste que usa la economía, y no coincide con el contable:

| Tipo | Qué incluye |
| --- | --- |
| Coste explícito | pagos efectivos a terceros |
| Coste implícito | el valor de los recursos propios empleados |
| **Coste económico** | explícitos más implícitos |
| Beneficio contable | ingresos menos costes explícitos |
| **Beneficio económico** | ingresos menos costes económicos |

```{=latex}
\begin{ejemplo}
Un empresario invierte 200\,000 euros propios y trabaja en su negocio, al que podría
dedicar un empleo de 40\,000 euros al año. Si el capital rentaría un 4\,\% en el
mercado, sus costes implícitos son $8\,000 + 40\,000 = 48\,000$ euros anuales.

\medskip
Con un beneficio contable de 50\,000 euros, el económico es de solo 2\,000. Y un
beneficio económico nulo \textbf{no significa ruina}: significa que el negocio rinde
exactamente lo mismo que la mejor alternativa.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
Los \textbf{costes hundidos} —los ya pagados e irrecuperables— \emph{no} son coste de
oportunidad y deben ignorarse al decidir. Seguir invirtiendo en un proyecto fallido
«porque ya se ha gastado mucho» es la falacia del coste hundido, y es la aplicación
práctica más útil de este apartado.
\end{anotacion}
```

## Costes a corto plazo

Con el capital fijo:

| Coste | Definición |
| --- | --- |
| Fijo, $CF$ | no depende de la producción |
| Variable, $CV(Q)$ | depende de la producción |
| Total, $CT = CF+CV$ | --- |
| Fijo medio, $CFMe = CF/Q$ | decreciente siempre |
| Variable medio, $CVMe = CV/Q$ | en forma de U |
| Total medio, $CTMe = CT/Q$ | en forma de U |
| **Marginal**, $CMg = dCT/dQ$ | en forma de U |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.4cm, height=5.8cm, axis lines=left,
  xlabel={$Q$}, ylabel={coste unitario},
  xmin=0, xmax=10, ymin=0, ymax=22,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=140,
  legend style={font=\scriptsize, draw=none, at={(0.99,0.98)}, anchor=north east},
]
\addplot[thick, domain=1:9.5] {x^2 - 8*x + 25};
\addlegendentry{$CMg$}
\addplot[dashed, domain=1:9.5] {x^2/3 - 4*x + 25 + 6/x};
\addlegendentry{$CTMe$}
\addplot[dotted, domain=1:9.5] {x^2/3 - 4*x + 25};
\addlegendentry{$CVMe$}
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{proposicion}
El coste marginal corta al coste variable medio y al coste total medio en sus
respectivos mínimos, siempre por debajo antes y por encima después.
\end{proposicion}
```

Es la misma relación entre marginal y medio del capítulo anterior, con el signo
invertido porque aquí se trata de costes: **una unidad que cuesta menos que la media baja
la media**.

Y las relaciones con la producción del capítulo 3, que muestran que costes y producción
son dos vistas de lo mismo:

$$CMg = \frac{w}{\Pmg_L}, \qquad CVMe = \frac{w}{PMe_L}$$

De ahí que el coste marginal tenga forma de U: es el inverso del producto marginal, que
primero crece y después decrece.

## Costes a largo plazo

Con los dos factores variables, la empresa elige la combinación más barata para cada
nivel de producción:

$$\min\ wL + rK \quad\text{sujeto a}\quad f(K,L) = Q$$

La solución cumple la **condición de minimización de costes**:

$$\RMST_{LK} = \frac{w}{r}
\qquad\Longleftrightarrow\qquad
\frac{\Pmg_L}{w} = \frac{\Pmg_K}{r}$$

La segunda forma se lee igual que la del consumidor: **el último euro gastado en cada
factor debe rendir la misma producción**.

La curva que une los óptimos al variar $Q$ es la **senda de expansión**, y de ella sale
la función de coste a largo plazo $CT_L(Q)$.

```{=latex}
\begin{proposicion}
La curva de coste medio a largo plazo es la \emph{envolvente inferior} de las curvas de
coste medio a corto plazo, una por cada tamaño de planta.
\end{proposicion}
```

En el largo plazo se puede elegir la planta, así que el coste nunca es mayor que el de
cualquier tamaño concreto. Es la razón de que $CMe_L \le CMe_C$ siempre.

## Economías de escala

| Tramo | Qué ocurre con $CMe_L$ |
| --- | --- |
| Economías de escala | decrece: producir más abarata la unidad |
| Escala mínima eficiente | mínimo |
| Deseconomías de escala | crece |

| Fuente de economías | Fuente de deseconomías |
| --- | --- |
| Especialización del trabajo | costes de coordinación |
| Indivisibilidad de equipos | burocracia y pérdida de control |
| Descuentos por volumen | dificultad de supervisión |
| Reparto de costes fijos | conflictos internos |

**La escala mínima eficiente determina la estructura del sector**: si es grande en
relación con el mercado, solo caben pocas empresas, y de ahí que la distribución de agua
o la red eléctrica sean monopolios naturales.

```{=latex}
\begin{anotacion}
Economías de escala y rendimientos crecientes están relacionados pero no son lo mismo.
Los rendimientos son un concepto técnico, sobre cantidades; las economías son un
concepto de coste, y dependen también de \textbf{los precios de los factores}. Con
rendimientos constantes y precios de factores crecientes con la cantidad comprada puede
haber deseconomías de escala.
\end{anotacion}
```

## Maximización del beneficio

$$\max_Q\ B(Q) = I(Q) - CT(Q)$$

```{=latex}
\begin{proposicion}[Condición de primer orden]
$$\frac{dI}{dQ} = \frac{dCT}{dQ}
\qquad\Longleftrightarrow\qquad IMg = CMg$$
\end{proposicion}

\begin{proposicion}[Condición de segundo orden]
$$\frac{dIMg}{dQ} < \frac{dCMg}{dQ}$$
es decir, el coste marginal debe cortar al ingreso marginal \emph{desde abajo}.
\end{proposicion}
```

La condición de segundo orden no es un detalle: **$IMg = CMg$ se cumple también en el
mínimo del beneficio**, y sin comprobarla se puede confundir el peor plan con el mejor.

| Situación | Decisión a corto plazo |
| --- | --- |
| $P > CTMe$ | producir con beneficio |
| $CVMe < P < CTMe$ | producir con pérdidas, pero menores que cerrando |
| $P < CVMe$ | **cerrar**: no se cubren ni los costes variables |

La fila del medio es la que sorprende y la que más se usa: una empresa con pérdidas
puede hacer bien en seguir produciendo, porque los costes fijos se pagan de todos modos y
lo que se cubre por encima de los variables reduce la pérdida.

A largo plazo no hay costes fijos, así que la condición de salida es simplemente
$P < CMe_L$.

```{=latex}
\begin{ejemplo}
Una empresa tiene $CT = Q^2 + 4Q + 100$ y vende a precio 24.

\medskip
$CMg = 2Q+4$ e $IMg = 24$, así que $2Q+4 = 24$ da $Q^{*} = 10$.

\medskip
La condición de segundo orden se cumple: $CMg$ es creciente y $IMg$ constante.

\medskip
Beneficio: $I = 240$ y $CT = 100+40+100 = 240$, luego $B = 0$. El beneficio económico es
nulo, así que la empresa cubre exactamente todos sus costes incluidos los implícitos:
está en su punto de cierre a largo plazo.
\end{ejemplo}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Con $CT = 2Q^2 + 10Q + 50$, hallar el coste marginal, el coste total medio y la
producción que minimiza el coste medio.
\end{ejercicio}

\begin{solucion}
$CMg = 4Q+10$ y $CTMe = 2Q + 10 + 50/Q$.

\medskip
Derivando el medio: $2 - 50/Q^2 = 0$, de donde $Q = 5$. En ese punto,
$CTMe = 10+10+10 = 30$ y $CMg = 30$: coinciden, como debe ser en el mínimo del medio.
\end{solucion}

\begin{ejercicio}
Una empresa tiene costes fijos de 1000 y vende a un precio inferior a su coste total
medio. ¿Debe cerrar?
\end{ejercicio}

\begin{solucion}
Depende del coste variable medio. Si $P > CVMe$, cada unidad vendida aporta algo a cubrir
los costes fijos, así que la pérdida es menor produciendo que cerrando —cerrando se
pierden los 1000 enteros—. Solo si $P < CVMe$ conviene cerrar a corto plazo. A largo
plazo, donde no hay costes fijos, un precio por debajo del coste medio obliga a salir.
\end{solucion}

\begin{ejercicio}
Un empresario gana 60\,000 euros contables. Ha invertido 300\,000 propios, que rentarían
un 5\,\%, y rechazó un empleo de 45\,000. ¿Cuál es su beneficio económico?
\end{ejercicio}

\begin{solucion}
Costes implícitos: $300\,000\cdot0{,}05 + 45\,000 = 15\,000+45\,000 = 60\,000$. El
beneficio económico es $60\,000 - 60\,000 = 0$.

\medskip
El negocio rinde exactamente lo mismo que la mejor alternativa: no es un mal resultado,
es el punto de indiferencia. Con un beneficio económico negativo convendría cerrar y
tomar la alternativa, aunque el resultado contable siguiera siendo positivo.
\end{solucion}
```

La teoría de costes y la maximización del beneficio están desarrolladas en
\cite{pindyck2018} y \cite{frank2009}, con la exposición introductoria de
\cite{krugman2013}.
