# Decisiones sobre distribución

Tema 4 del programa. El papel de la distribución en la entrega de valor, naturaleza e
importancia de los canales, su organización y diseño, logística y comercio mayorista y
minorista.

## La distribución en la entrega de valor

```{=latex}
\begin{definicion}[Canal de distribución]
Conjunto de organizaciones interdependientes que hacen posible que un producto o servicio
esté disponible para su uso o consumo.
\end{definicion}
```

| Utilidad que crea | Contenido |
| --- | --- |
| **De forma** | fraccionamiento del lote y adecuación al uso |
| **De lugar** | acercamiento al comprador |
| **De tiempo** | disponibilidad cuando se necesita |
| **De posesión** | transmisión de la propiedad, financiación |

**La distribución no traslada valor, lo crea.** Un producto en el almacén del fabricante no
satisface ninguna necesidad; el canal es lo que convierte la producción en oferta disponible.

## Naturaleza e importancia de los canales

### Funciones

| Grupo | Funciones |
| --- | --- |
| **Transaccionales** | compra, venta, asunción del riesgo |
| **Logísticas** | transporte, almacenamiento, fraccionamiento, surtido |
| **Facilitadoras** | financiación, información de mercado, servicio, promoción |

```{=latex}
\begin{proposicion}
Las funciones del canal \textbf{no se pueden eliminar, solo reasignar}. Prescindir del
mayorista no suprime el almacenamiento ni el fraccionamiento: se los queda el fabricante o el
minorista, con sus costes. Por eso la desintermediación abarata solo si quien asume la
función lo hace mejor.
\end{proposicion}
```

### La eficiencia del intermediario

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth,
  n/.style={circle, draw, thick, minimum size=6mm, inner sep=0, font=\tiny}]
\foreach \y in {0,1,2,3} { \node[n] (f\y) at (0,\y) {F}; }
\foreach \y in {0,1,2,3} { \node[n] (c\y) at (3,\y) {C}; }
\foreach \a in {0,1,2,3} \foreach \b in {0,1,2,3} { \draw[gray!70] (f\a) -- (c\b); }
\node[font=\scriptsize] at (1.5,-1) {$4\times4 = 16$ contactos};

\begin{scope}[xshift=7cm]
\foreach \y in {0,1,2,3} { \node[n] (g\y) at (0,\y) {F}; }
\node[n, fill=black!12] (i) at (1.6,1.5) {I};
\foreach \y in {0,1,2,3} { \node[n] (d\y) at (3.2,\y) {C}; }
\foreach \a in {0,1,2,3} { \draw[gray!70] (g\a) -- (i); \draw[gray!70] (i) -- (d\a); }
\node[font=\scriptsize] at (1.6,-1) {$4+4 = 8$ contactos};
\end{scope}
\end{tikzpicture}
\end{center}
```

$$\text{Sin intermediario: } f\cdot c \qquad \text{Con un intermediario: } f + c$$

**El ahorro crece con el tamaño del mercado.** Con 20 fabricantes y 500 minoristas se pasa
de 10 000 contactos a 520, y ahí está la razón económica de que exista el comercio mayorista.

## Organización de los canales

| Longitud | Estructura | Uso típico |
| --- | --- | --- |
| **Directo** | fabricante $\to$ consumidor | industrial, venta en línea, servicios |
| **Corto** | fabricante $\to$ minorista $\to$ consumidor | gran distribución, duraderos |
| **Largo** | fabricante $\to$ mayorista $\to$ minorista $\to$ consumidor | consumo masivo, comercio disperso |

### Sistemas de canal

| Sistema | Contenido |
| --- | --- |
| **Convencional** | miembros independientes, cada uno maximiza lo suyo |
| **Vertical corporativo** | un mismo propietario integra las etapas |
| **Vertical contractual** | franquicia, cadena voluntaria, cooperativa de detallistas |
| **Vertical administrado** | un miembro con poder coordina de hecho |
| Horizontal | dos empresas del mismo nivel colaboran |
| **Multicanal** | varios canales en paralelo para segmentos distintos |

```{=latex}
\begin{anotacion}
El sistema convencional sufre \textbf{doble marginalización}: cada eslabón añade su margen
sobre el anterior, así que el precio final es mayor y la cantidad vendida menor que si un
solo decisor optimizara la cadena entera. Los sistemas verticales existen precisamente para
corregir eso, y es la razón económica de la franquicia.
\end{anotacion}
```

### Conflictos en el canal

| Tipo | Entre quiénes | Ejemplo |
| --- | --- | --- |
| **Horizontal** | miembros del mismo nivel | dos concesionarios invadiendo zonas |
| **Vertical** | niveles distintos | el fabricante vende en línea al precio del minorista |
| Multicanal | canales distintos del mismo fabricante | tienda física frente a web propia |

**El conflicto multicanal es el más frecuente hoy y no se resuelve prohibiendo canales.** Se
gestiona con surtidos, servicios o condiciones distintas por canal, de forma que cada uno
tenga una razón de existir que el otro no cubra.

## El diseño del canal

| Decisión | Alternativas |
| --- | --- |
| 1. Analizar las necesidades del cliente | tamaño del lote, tiempo de espera, dispersión, surtido, servicio |
| 2. Fijar los objetivos del canal | nivel de servicio y coste asumible |
| 3. Identificar alternativas | tipo, número y responsabilidades de los intermediarios |
| 4. **Evaluar** | criterios económicos, de control y de adaptación |

### Intensidad de la distribución

| Intensidad | Cobertura | Control | Producto |
| --- | --- | --- | --- |
| **Intensiva** | todos los puntos posibles | bajo | conveniencia |
| **Selectiva** | varios puntos elegidos | medio | compra esporádica |
| **Exclusiva** | uno por zona | alto | especialidad, lujo, automoción |

```{=latex}
\begin{proposicion}
La intensidad debe seguir al posicionamiento y no al revés. Ampliar la cobertura sube el
volumen a corto plazo y \textbf{reduce el valor de marca} en productos cuya propuesta se
apoya en la exclusividad, y ese daño no se repara reduciendo después los puntos de venta.
\end{proposicion}
```

### Gestión de los miembros del canal

| Fase | Contenido |
| --- | --- |
| Selección | capacidad financiera, cobertura, imagen, surtido complementario |
| **Motivación** | márgenes, exclusividad territorial, formación, apoyo promocional |
| **Evaluación** | ventas, nivel de stock, plazo de entrega, servicio, colaboración |

## Logística de distribución

```{=latex}
\begin{definicion}
Planificación y control del flujo físico de materiales, productos terminados e información,
desde el origen hasta el punto de consumo, para satisfacer los requisitos del cliente con
beneficio.
\end{definicion}
```

| Función logística | Decisión |
| --- | --- |
| **Gestión de inventarios** | cuánto y cuándo pedir |
| **Almacenamiento** | número, tamaño y localización de los almacenes |
| **Transporte** | modo, ruta, propio o subcontratado |
| Procesamiento de pedidos | plazo y fiabilidad |
| Información | trazabilidad, previsión, reposición automática |

$$\text{Coste logístico total} = \text{Transporte} + \text{Almacenamiento} +
\text{Inventario} + \text{Coste de las ventas perdidas}$$

```{=latex}
\begin{anotacion}
El último sumando es el que se olvida, y es el que impide reducir costes bajando el nivel de
servicio hasta el mínimo. Un almacén menos ahorra alquiler y alarga el plazo de entrega; si
eso cuesta pedidos, el ahorro es aparente. \textbf{La logística se optimiza sobre el coste
total, nunca partida a partida.}
\end{anotacion}
```

| Nivel de servicio | Coste | Efecto |
| --- | --- | --- |
| Alto | alto | menos ventas perdidas, más inventario |
| Bajo | bajo | más roturas de stock y clientes perdidos |

## Ventas al por mayor y al detallista

### Comercio mayorista

| Tipo | Rasgo |
| --- | --- |
| **De servicio completo** | almacena, financia, entrega, asesora |
| **De servicio limitado** | cash and carry, autoventa, transportista |
| Agentes y corredores | no adquieren la propiedad, cobran comisión |
| Sucursales del fabricante | el propio fabricante ejerce la función |

### Comercio minorista

| Criterio | Formatos |
| --- | --- |
| **Surtido** | especializado, gran superficie especializada, grandes almacenes, hipermercado |
| **Precio y servicio** | tienda de descuento, outlet, club de compra |
| **Local** | con establecimiento, sin establecimiento, comercio electrónico |
| Propiedad | independiente, cadena, franquicia, cooperativa |

| Decisión del minorista | Contenido |
| --- | --- |
| Público objetivo y posicionamiento | a quién y con qué propuesta |
| **Surtido y servicios** | amplitud, profundidad, marca propia |
| Precio | alta rotación con margen bajo, o al revés |
| **Localización** | el factor con más peso en el comercio con establecimiento |
| Comunicación y ambiente | escaparate, distribución interior, experiencia |

```{=latex}
\begin{anotacion}
La \textbf{marca de distribuidor} cambia la relación de poder del canal: el minorista deja de
ser solo cliente y pasa a ser competidor del fabricante en su propio lineal, con la ventaja
de decidir la colocación. Es el motivo de que los fabricantes de marca líder inviertan tanto
en notoriedad: sin demanda que el consumidor exija por su nombre, el canal fija las
condiciones.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Un fabricante vende a 40 empresas distribuidoras que atienden a 3000 puntos de venta.
Calcular la reducción de contactos frente a la venta directa y comentar cuándo compensaría
integrar el canal.
\end{ejercicio}

\begin{solucion}
Directo: $40\cdot3000 = 120\,000$ contactos. Con los distribuidores como intermediarios,
cada fabricante contacta con los 40 y cada distribuidor con sus puntos: el orden de magnitud
baja a unos pocos miles.

\medskip
Integrar el canal compensa cuando el margen del intermediario supera el coste de asumir sus
funciones, cuando el control del punto de venta es crítico para el posicionamiento, o cuando
el intermediario no ofrece el nivel de servicio necesario. En un mercado tan atomizado, la
integración total exige una estructura logística muy costosa y rara vez se justifica.
\end{solucion}

\begin{ejercicio}
Una marca de calzado con distribución exclusiva en 60 tiendas especializadas recibe la oferta
de vender también en su propia web con un 20\,\% de descuento. Analizar el conflicto y
proponer una salida.
\end{ejercicio}

\begin{solucion}
Es conflicto multicanal en su forma más aguda: el fabricante compite con su propio canal y
además con mejor precio. Las tiendas soportan el coste de exponer y asesorar y ven cómo la
venta se cierra en la web.

\medskip
La consecuencia previsible es la retirada de apoyo: menos espacio en el lineal, menos
recomendación y presión sobre el margen.

\medskip
Salidas razonables: precio igual en los dos canales, con la web justificada por surtido
completo y no por precio; surtido diferenciado, reservando ediciones o tallas extremas a la
web; o integrar al canal en la venta en línea con recogida y devolución en tienda,
reconociéndole la comisión. Lo que no funciona es competir en precio con quien tiene que
vender el producto.
\end{solucion}

\begin{ejercicio}
Una empresa plantea cerrar dos de sus cinco almacenes regionales. Ahorraría 400\,000 euros al
año y el plazo de entrega pasaría de 24 a 72 horas. Se estima que perdería un 3\,\% de sus
ventas, que son de 30 millones con un margen del 22\,\%. Valorar.
\end{ejercicio}

\begin{solucion}
Ventas perdidas: $30\,000\,000\cdot0{,}03 = 900\,000$ euros, con un margen perdido de
$900\,000\cdot0{,}22 = 198\,000$.

\medskip
El ahorro neto es $400\,000 - 198\,000 = 202\,000$ euros, así que la operación es favorable
con las cifras dadas.

\medskip
El punto crítico es la estimación del 3\,\%: bastaría una pérdida del 6,1\,\% para anular el
ahorro. Y hay un efecto que la cifra no recoge: el cliente que se va por un plazo peor no
vuelve al año siguiente, así que la pérdida es recurrente mientras el ahorro es fijo.
\textbf{Antes de decidir, conviene medir la sensibilidad real al plazo}, por ejemplo
alargándolo en una zona piloto.
\end{solucion}
```

Las decisiones sobre distribución están desarrolladas en \cite{kotler2018dc} y
\cite{esteban2018}, con el enfoque estratégico de \cite{lambin2009}.
