# La empresa y los mercados de productos

Capítulo 3 del programa. La empresa con su producción y sus costes, los grados de
competencia y los tipos de mercado, la competencia perfecta, y la competencia imperfecta:
monopolio, oligopolio y competencia monopolística.

## Producción y costes

| Concepto | Definición |
| --- | --- |
| Función de producción | máxima producción con cada combinación de factores |
| Producto marginal | lo que aporta una unidad más de un factor |
| Corto plazo | al menos un factor fijo |
| Largo plazo | todos los factores variables |

```{=latex}
\begin{proposicion}[Rendimientos marginales decrecientes]
Al aumentar un factor variable con los demás fijos, a partir de cierto punto su producto
marginal disminuye.
\end{proposicion}
```

| Coste | Definición |
| --- | --- |
| Fijo | no varía con la producción |
| Variable | varía con la producción |
| Total medio | $CT/Q$ |
| **Marginal** | lo que cuesta producir una unidad más |

**El coste marginal corta al coste medio en su mínimo**, y esa relación gobierna todo el
capítulo: mientras producir una unidad más cuesta menos que la media, la media baja.

A largo plazo aparecen las **economías de escala**: el coste medio decrece hasta la escala
mínima eficiente y después puede crecer por dificultades de coordinación.

```{=latex}
\begin{anotacion}
La empresa maximiza el \textbf{beneficio económico}, que descuenta también los costes
implícitos: el coste de oportunidad del capital propio y del trabajo del empresario. Un
beneficio económico nulo significa que el negocio rinde lo mismo que la mejor alternativa,
no que esté al borde de la ruina.
\end{anotacion}
```

## Tipos de mercado

| Estructura | Empresas | Producto | Barreras | Poder sobre el precio |
| --- | --- | --- | --- | --- |
| Competencia perfecta | muchas | homogéneo | ninguna | ninguno |
| Competencia monopolística | muchas | diferenciado | bajas | pequeño |
| Oligopolio | pocas | homogéneo o diferenciado | altas | alto |
| Monopolio | una | sin sustitutivos | muy altas | máximo |

**El grado de competencia se mide por el poder sobre el precio**, no por el número de
empresas en sí. Dos empresas que compiten agresivamente pueden dar un resultado más
competitivo que veinte coludidas.

## La competencia perfecta

La empresa es **precio-aceptante**: su demanda individual es horizontal, así que

$$P = IMe = IMg$$

y la condición de maximización del beneficio es

$$P = CMg$$

| Precio | Decisión a corto plazo |
| --- | --- |
| $P > CTMe$ | producir con beneficio |
| $CVMe < P < CTMe$ | producir con pérdidas menores que cerrando |
| $P < CVMe$ | cerrar |

A largo plazo, la libre entrada y salida lleva a

$$P = CMg = \min CMe$$

con beneficio económico nulo y precio mínimo. **Ese es el resultado que hace de la
competencia perfecta la referencia**: produce lo máximo al menor coste posible y sin
beneficios extraordinarios.

## El monopolio

Con una sola empresa, la demanda de la empresa es la del mercado y tiene pendiente
negativa. Vender una unidad más obliga a bajar el precio de todas, así que

$$IMg < P$$

y la condición $IMg = CMg$ da un precio **por encima** del coste marginal.

| Frente a la competencia | El monopolio |
| --- | --- |
| Precio | mayor |
| Cantidad | menor |
| Excedente del consumidor | menor |
| Beneficio | mayor |
| Excedente total | **menor**: hay pérdida de eficiencia |

| Barrera de entrada | Origen |
| --- | --- |
| Legal | patentes, licencias, concesiones |
| Natural | economías de escala que cubren todo el mercado |
| Control de un recurso esencial | acceso exclusivo |

La regulación habitual del **monopolio natural** fija el precio al nivel del coste medio:
el marginal daría pérdidas porque el coste medio es decreciente.

Y la **discriminación de precios** —cobrar distinto a distintos grupos— exige poder de
mercado, segmentos identificables y que la reventa sea inviable. Explica los descuentos a
estudiantes y las tarifas aéreas según antelación.

## Competencia monopolística

Muchas empresas con producto diferenciado y entrada libre. A corto plazo se comportan como
monopolistas pequeños; a largo plazo la entrada anula el beneficio y

$$P = CMe > CMg$$

con la empresa produciendo **por debajo** de su escala mínima eficiente. Ese exceso de
capacidad es el precio de la variedad: con menos marcas cada una produciría más barato, y
los consumidores tendrían menos donde elegir.

## Oligopolio

Pocas empresas, y por tanto **interdependencia estratégica**: lo que conviene a una
depende de lo que hagan las demás.

| Comportamiento | Resultado |
| --- | --- |
| Colusión, cártel | precio de monopolio y beneficio máximo conjunto |
| Competencia en cantidades | resultado intermedio |
| Competencia en precios con producto homogéneo | precio próximo al competitivo |
| Guerra de precios | pérdidas para todos |

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\scriptsize]
\node at (0,1.7) {Empresa 2};
\node at (1.3,1.15) {mantiene};
\node at (3.1,1.15) {baja precio};
\node[rotate=90] at (-2.5,-0.55) {Empresa 1};
\node at (-1.45,0.25) {mantiene};
\node at (-1.45,-1.35) {baja precio};
\draw (0.4,-0.4) rectangle (2.2,0.9);
\draw (2.2,-0.4) rectangle (4.0,0.9);
\draw (0.4,-1.9) rectangle (2.2,-0.4);
\draw (2.2,-1.9) rectangle (4.0,-0.4);
\node at (1.3,0.25) {$(10,\,10)$};
\node at (3.1,0.25) {$(2,\,14)$};
\node at (1.3,-1.15) {$(14,\,2)$};
\node at (3.1,-1.15) {$(5,\,5)$};
\end{tikzpicture}
\end{center}
```

Es un **dilema del prisionero**: bajar el precio es la mejor respuesta a cualquier cosa
que haga la rival, y el resultado $(5,5)$ es peor para las dos que la colusión. Explica
por qué los cárteles son inestables y necesitan vigilancia interna para durar.

Los cárteles están prohibidos, y **la defensa de la competencia** es la política que los
persigue. Los programas de clemencia —inmunidad para el primero que delata— explotan
justamente el incentivo a desviarse.

## Ejercicios

```{=latex}
\begin{ejercicio}
Una empresa competitiva tiene $CT = Q^2 + 4Q + 36$ y el precio es 20. Hallar su
producción y beneficio, y decir qué ocurrirá a largo plazo.
\end{ejercicio}

\begin{solucion}
$CMg = 2Q+4 = 20$ da $Q = 8$. Ingresos 160, costes $64+32+36 = 132$, beneficio 28.

\medskip
El beneficio es positivo, así que a largo plazo entrarán empresas, la oferta del mercado
aumentará y el precio bajará hasta el mínimo del coste medio, que se alcanza donde
$CMe = CMg$: $Q+4+36/Q = 2Q+4$ da $Q = 6$ y $CMe = 16$. El precio de largo plazo será 16.
\end{solucion}

\begin{ejercicio}
Un monopolista con $CMg = 10$ constante se enfrenta a $P = 100 - 2Q$. Hallar precio y
cantidad, y compararlos con el resultado competitivo.
\end{ejercicio}

\begin{solucion}
$IMg = 100-4Q = 10$ da $Q_M = 22{,}5$ y $P_M = 55$.

\medskip
En competencia, $P = CMg = 10$ daría $Q_C = 45$. El monopolio produce la mitad y cobra
cinco veces y media más. La pérdida de eficiencia es
$\tfrac12\,(55-10)(45-22{,}5) = 506{,}25$.
\end{solucion}

\begin{ejercicio}
¿Por qué en competencia monopolística el beneficio a largo plazo es nulo pero el precio
supera al coste marginal?
\end{ejercicio}

\begin{solucion}
El beneficio es nulo porque la entrada es libre: si hubiera beneficios entrarían marcas
nuevas y la demanda de cada empresa se reduciría hasta que $P = CMe$.

\medskip
Y el precio supera al coste marginal porque el producto está diferenciado: cada empresa
tiene una demanda con pendiente negativa y, como el monopolista, fija $IMg = CMg$ con
$IMg < P$. Se combinan lo peor de los dos mundos —ineficiencia asignativa sin beneficio—
a cambio de variedad.
\end{solucion}
```

Los tipos de mercado están desarrollados en \cite{krugman2022}, \cite{mankiw2017} y
\cite{samuelson2010}, con un enfoque aplicado en \cite{bernanke2007}.
