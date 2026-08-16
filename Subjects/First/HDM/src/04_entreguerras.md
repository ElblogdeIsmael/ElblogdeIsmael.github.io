# La economía del periodo de entreguerras

Tema 4 del programa. Las consecuencias económicas de la Primera Guerra Mundial, el intento
de restaurar el orden anterior, la crisis de 1929 y las respuestas de política económica.

## Las consecuencias de la Primera Guerra Mundial

| Ámbito | Efecto |
| --- | --- |
| **Demográfico** | unos 10 millones de muertos y una generación mermada |
| **Productivo** | destrucción de capital y reconversión de la industria |
| **Financiero** | deuda pública multiplicada, inflación, fin del patrón oro |
| **Comercial** | Europa pierde mercados; Estados Unidos y Japón los ganan |
| **Institucional** | desaparecen cuatro imperios y se redibujan las fronteras |
| Deudas y reparaciones | red de obligaciones cruzadas entre aliados y con Alemania |

```{=latex}
\begin{anotacion}
El problema financiero de la posguerra es circular: Alemania debe reparaciones a Francia y
Gran Bretaña, que a su vez deben a Estados Unidos, que presta a Alemania para que pueda
pagar. \textbf{El sistema solo funciona mientras el crédito estadounidense fluya}, y por eso
se derrumba en cuanto ese crédito se detiene en 1928-1929.
\end{anotacion}
```

### La hiperinflación alemana de 1923

| Causa | Contenido |
| --- | --- |
| Déficit financiado con emisión | el Estado no podía recaudar lo que gastaba |
| Ocupación del Ruhr | resistencia pasiva pagada con más emisión |
| **Pérdida de confianza** | la velocidad de circulación se dispara |

**La hiperinflación destruyó el ahorro de las clases medias y dejó una huella política y
monetaria duradera.** Explica buena parte de la aversión alemana a la inflación durante todo
el siglo XX, incluida la política del Bundesbank y después la del Banco Central Europeo.

## El intento de restaurar el orden anterior

| Decisión | Contenido | Resultado |
| --- | --- | --- |
| Vuelta al patrón oro | Gran Bretaña en 1925, a la paridad de preguerra | libra sobrevalorada, deflación y paro |
| **Patrón de cambios oro** | reservas en divisas convertibles, no solo en oro | sistema más frágil |
| Estabilizaciones monetarias | Francia, Italia, Alemania | a paridades distintas y sin coordinación |
| Aranceles | protección creciente desde los años veinte | el comercio no recupera su dinamismo |

```{=latex}
\begin{proposicion}
Restaurar el patrón oro a la paridad de antes de la guerra exigía deflación interna, es
decir bajar precios y salarios. Con sindicatos organizados y sufragio ampliado, ese ajuste
ya no era políticamente viable, así que \textbf{el sistema restaurado no tenía el mecanismo
de ajuste que lo había hecho funcionar antes de 1914}.
\end{proposicion}
```

## Los años veinte

| Estados Unidos | Europa |
| --- | --- |
| Crecimiento fuerte y consumo de masas | recuperación lenta y desigual |
| Automóvil, electrodomésticos, radio | reconstrucción y estabilización monetaria |
| Venta a plazos y crédito al consumo | deudas y reparaciones |
| **Auge bursátil con compra a crédito** | dependencia del capital estadounidense |
| Agricultura deprimida desde 1921 | agricultura deprimida por la competencia exterior |

**La prosperidad de los años veinte fue real y desequilibrada**: convivió con una agricultura
en crisis, una distribución de la renta muy desigual y una expansión del crédito que sostenía
la demanda.

## La crisis de 1929

### Del crac a la depresión

| Fase | Contenido |
| --- | --- |
| Octubre de 1929 | caída bursátil; por sí sola no explica la depresión |
| **1930-1932** | quiebras bancarias en cadena y contracción de la oferta monetaria |
| Caída del consumo y la inversión | efecto riqueza, incertidumbre y crédito cortado |
| **Deflación** | los precios caen y la deuda real crece |
| Transmisión internacional | patrón oro, retirada de capitales y aranceles |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.4cm, height=5.6cm, axis lines=left,
  xlabel={año}, ylabel={índice, 1929 = 100},
  xmin=1929, xmax=1938, ymin=50, ymax=125,
  xtick={1929,1931,1933,1935,1937},
  scaled x ticks=false, x tick label style={/pgf/number format/1000 sep=},
  tick label style={font=\scriptsize}, label style={font=\small},
  legend style={font=\scriptsize, draw=none, at={(0.98,0.03)}, anchor=south east},
]
\addplot[thick] coordinates {
(1929,100) (1930,91) (1931,84) (1932,73) (1933,72) (1934,78)
(1935,85) (1936,96) (1937,101) (1938,96)};
\addlegendentry{producción industrial}
\addplot[dashed] coordinates {
(1929,100) (1930,97) (1931,88) (1932,79) (1933,80) (1934,83)
(1935,84) (1936,85) (1937,88) (1938,87)};
\addlegendentry{nivel de precios}
\end{axis}
\end{tikzpicture}
\end{center}
```

*Perfil estilizado de la depresión en las economías industriales; las cifras concretas varían
mucho según el país y la serie utilizada.*

### Por qué fue tan profunda

| Explicación | Mecanismo |
| --- | --- |
| **Monetaria** | la contracción de la oferta monetaria y la pasividad del banco central |
| **Deflación de deudas** | al caer los precios, la deuda real crece y obliga a liquidar activos |
| **Insuficiencia de demanda** | caída de inversión y consumo que se retroalimenta |
| **Patrón oro** | impide devaluar y obliga a políticas contractivas |
| **Proteccionismo** | el arancel Smoot-Hawley y sus represalias hunden el comercio |

```{=latex}
\begin{anotacion}
Las explicaciones no son excluyentes y hoy se combinan: el crac fue el detonante, las
quiebras bancarias el mecanismo de propagación, el patrón oro la correa de transmisión
internacional, y el proteccionismo el agravante. \textbf{El dato que ordena el debate es
cronológico}: los países que abandonaron antes el patrón oro empezaron antes a recuperarse,
lo que sitúa la restricción monetaria en el centro.
\end{anotacion}
```

## Las respuestas

| País | Respuesta |
| --- | --- |
| **Estados Unidos** | New Deal: obra pública, regulación bancaria, seguridad social, apoyo agrario |
| **Gran Bretaña** | salida del oro en 1931, devaluación, preferencia imperial |
| **Alemania** | rearme, obra pública, control de cambios y comercio bilateral |
| **Francia** | tarda en devaluar y prolonga la depresión |
| **Suecia** | política expansiva temprana y recuperación rápida |
| Unión Soviética | planificación centralizada y crecimiento industrial al margen del ciclo |

```{=latex}
\begin{proposicion}
El periodo consolida una idea que no existía antes de 1929: que el Estado tiene
responsabilidad sobre el nivel de empleo y de actividad. La formulación teórica llega en
1936 con la \emph{Teoría general} de Keynes, \textbf{después} de que varios gobiernos
hubieran empezado a actuar así, no antes.
\end{proposicion}
```

## Balance del periodo

| Rasgo | Contenido |
| --- | --- |
| Fin de la primera globalización | comercio, capitales y migraciones se contraen |
| **Bloques monetarios y comerciales** | libra, dólar, oro, bilateralismo alemán |
| Intervención del Estado | de excepcional a permanente |
| **Consecuencia política** | la crisis alimenta los autoritarismos |

**El periodo de entreguerras muestra que un orden económico internacional no se sostiene
solo con reglas**: necesita una potencia dispuesta a sostenerlo, y entre 1919 y 1939 Gran
Bretaña ya no podía y Estados Unidos aún no quería.

## Ejercicios

```{=latex}
\begin{ejercicio}
Explicar por qué la vuelta de la libra al patrón oro en 1925 a la paridad de preguerra
perjudicó a la economía británica.
\end{ejercicio}

\begin{solucion}
Los precios británicos habían subido más que los estadounidenses durante la guerra, así que
volver a la paridad antigua dejaba la libra sobrevalorada en torno a un 10\,\%. Las
exportaciones se encarecieron y las importaciones se abarataron.

\medskip
Para sostener esa paridad hacía falta deflación interna: bajar precios y salarios. El
intento provocó conflicto laboral —la huelga general de 1926— y no se completó, así que el
país quedó con paridad alta, exportaciones caras y desempleo elevado durante toda la década.

\medskip
La decisión se explica por el prestigio y por el papel financiero de Londres, no por un
cálculo de competitividad. Es el ejemplo clásico de un objetivo simbólico impuesto sobre uno
económico.
\end{solucion}

\begin{ejercicio}
Un país con deuda privada elevada entra en deflación del 5\,\% anual. Analizar el efecto
sobre los deudores.
\end{ejercicio}

\begin{solucion}
La deuda es nominal y los ingresos caen con los precios, así que la carga real de la deuda
crece un 5\,\% al año sin que nadie pida más dinero. Un préstamo con un tipo nominal del
3\,\% supone un tipo real del 8\,\%.

\medskip
Los deudores intentan vender activos para pagar, lo que empuja los precios de los activos
todavía más abajo y agrava la deflación. Es el mecanismo de la deflación de deudas: el
esfuerzo individual por reducir deuda aumenta la deuda real del conjunto.

\medskip
De ahí que la salida exija romper la deflación —devaluar, expandir la oferta monetaria o
reestructurar las deudas— y que la austeridad generalizada la empeore.
\end{solucion}

\begin{ejercicio}
¿Por qué los países que abandonaron antes el patrón oro se recuperaron antes?
\end{ejercicio}

\begin{solucion}
Porque el patrón oro obligaba a defender la paridad con tipos de interés altos y contracción
monetaria justo cuando la economía necesitaba lo contrario. Abandonarlo liberaba la política
monetaria: permitía bajar tipos, aumentar la oferta de dinero y devaluar, lo que frenaba la
deflación y mejoraba la competitividad exterior.

\medskip
La secuencia lo confirma: Gran Bretaña sale en 1931, Estados Unidos en 1933 y Francia en
1936, y la recuperación llega en ese mismo orden.

\medskip
El matiz importante es que la devaluación mejora la posición relativa frente a los demás, así
que si todos devalúan a la vez el efecto competitivo se anula. Lo que sí queda en todos los
casos es el margen de política monetaria, y ese es el efecto duradero.
\end{solucion}
```

El periodo de entreguerras y sus crisis están desarrollados en \cite{morilla2021} y
\cite{comin2010}, con la perspectiva del sistema internacional en \cite{frieden2013}.
