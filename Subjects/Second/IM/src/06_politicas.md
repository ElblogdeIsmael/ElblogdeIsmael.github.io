# Políticas de marketing

Tema 6 del programa. El marketing mix y sus cuatro variables: producto, precio, distribución
y comunicación comercial.

## El marketing mix

```{=latex}
\begin{definicion}
Conjunto de instrumentos controlables que la empresa combina para obtener la respuesta que
desea del mercado objetivo.
\end{definicion}
```

| Variable | Decisión central | Naturaleza |
| --- | --- | --- |
| **Producto** | qué se ofrece | estratégica, de efecto lento |
| **Precio** | a cambio de qué | táctica, de efecto inmediato |
| **Distribución** | dónde y cómo se entrega | estratégica, difícil de revertir |
| **Comunicación** | cómo se da a conocer | táctica, de efecto medio |

```{=latex}
\begin{anotacion}
La distinción entre variables estratégicas y tácticas es operativa: el precio se cambia
mañana y la red de distribución no. Por eso un problema comercial suele atacarse primero con
precio y comunicación, aunque la causa esté en el producto o en el canal, y por eso las
promociones acaban tapando problemas estructurales en vez de resolverlos.
\end{anotacion}
```

**Las cuatro variables deben ser coherentes entre sí.** Un producto de gama alta con precio
bajo, distribución masiva y publicidad de saldo no es una combinación con cuatro decisiones:
es un posicionamiento contradictorio.

## El producto

```{=latex}
\begin{definicion}
Todo lo que se ofrece a un mercado para su atención, adquisición, uso o consumo y que puede
satisfacer un deseo o una necesidad.
\end{definicion}
```

### Dimensiones del producto

| Nivel | Contenido |
| --- | --- |
| **Beneficio básico** | la necesidad que resuelve |
| **Producto real** | marca, calidad, diseño, características, envase |
| **Producto aumentado** | entrega, instalación, garantía, servicio posventa, financiación |

**La competencia real se libra en el tercer nivel.** El beneficio básico lo dan todos los
competidores y el producto real converge con el tiempo; lo que diferencia de forma
sostenible suele ser el servicio que rodea a la venta.

### Decisiones sobre producto

| Decisión | Alternativas |
| --- | --- |
| Atributos | calidad, características, estilo y diseño |
| **Marca** | de fabricante, de distribuidor, licencia, conjunta |
| Envase | protección, información, identificación, sostenibilidad |
| Etiquetado | información legal obligatoria y persuasiva |
| Servicios de apoyo | garantía, instalación, atención |

| Decisión de cartera | Qué mide |
| --- | --- |
| **Amplitud** | número de líneas |
| **Profundidad** | referencias dentro de cada línea |
| Longitud | referencias totales |
| Coherencia | relación entre las líneas |

### Ciclo de vida del producto

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10cm, height=5.2cm, axis lines=left,
  ylabel={ventas}, xmin=0, xmax=10, ymin=0, ymax=1.25,
  xtick=\empty, ytick=\empty, label style={font=\small}, samples=180,
]
\addplot[thick, domain=0:10] {1/(1+exp(-1.5*(x-3.5))) - 0.55/(1+exp(-1.4*(x-7.5)))};
\end{axis}
\node[font=\scriptsize] at (1.4,-0.35) {Introducción};
\node[font=\scriptsize] at (3.6,-0.35) {Crecimiento};
\node[font=\scriptsize] at (6.0,-0.35) {Madurez};
\node[font=\scriptsize] at (8.4,-0.35) {Declive};
\end{tikzpicture}
\end{center}
```

| Etapa | Ventas | Beneficio | Prioridad de marketing |
| --- | --- | --- | --- |
| **Introducción** | bajas | negativo | dar a conocer y provocar la prueba |
| **Crecimiento** | crecen rápido | crece | construir preferencia y ampliar distribución |
| **Madurez** | máximas, se estancan | máximo y decreciente | defender cuota, modificar producto o mercado |
| **Declive** | caen | cae | cosechar o abandonar |

```{=latex}
\begin{anotacion}
El ciclo de vida describe bien lo ocurrido y predice mal lo que viene: una caída de ventas
puede ser declive o un mal año, y tratarla como declive recortando inversión la convierte en
profecía cumplida. Es útil como marco de decisión, no como calendario.
\end{anotacion}
```

## El precio

```{=latex}
\begin{definicion}
Cantidad de dinero que se cobra por un producto, o suma de los valores que el consumidor
entrega a cambio de los beneficios de tenerlo o usarlo.
\end{definicion}
```

**Es la única variable del mix que genera ingresos; las otras tres generan costes.** Y la
más rápida de cambiar, lo que la hace también la más peligrosa: una rebaja se copia en un
día y es difícil de deshacer.

### Los límites del precio

$$\underbrace{\text{Coste}}_{\text{suelo}} \ \le\ \text{Precio} \ \le\
\underbrace{\text{Valor percibido}}_{\text{techo}}$$

Entre los dos límites operan la competencia, la elasticidad de la demanda y las restricciones
legales.

### Métodos de fijación

| Método | Base | Riesgo |
| --- | --- | --- |
| **Basado en costes** | coste más margen | ignora la demanda y la competencia |
| **Basado en el valor** | valor percibido por el cliente | exige conocerlo bien |
| **Basado en la competencia** | precios del mercado | renuncia a la diferenciación |

```{=latex}
\begin{proposicion}
El precio basado en costes fija el precio a partir del producto, y el basado en el valor
parte del cliente para llegar al coste objetivo. \textbf{El segundo es el coherente con el
enfoque de marketing}: el coste condiciona si un producto es viable, no cuánto vale para
quien lo compra.
\end{proposicion}
```

### Elasticidad

$$E_p = \frac{\Delta Q / Q}{\Delta P / P}$$

| Valor | Demanda | Efecto de subir el precio |
| --- | --- | --- |
| $\lvert E_p \rvert > 1$ | **elástica** | el ingreso baja |
| $\lvert E_p \rvert = 1$ | unitaria | el ingreso no cambia |
| $\lvert E_p \rvert < 1$ | **inelástica** | el ingreso sube |

### Estrategias de precios

| Situación | Estrategia | Contenido |
| --- | --- | --- |
| Producto nuevo | **descremado** | precio alto inicial, se baja por etapas |
| Producto nuevo | **penetración** | precio bajo para ganar cuota deprisa |
| Cartera | línea de productos | escalones de precio entre referencias |
| Cartera | producto cautivo | equipo barato, consumible caro |
| Ajuste | descuentos, precios psicológicos, precios promocionales | |

```{=latex}
\begin{anotacion}
El descremado exige que haya un segmento dispuesto a pagar más y que la imitación tarde; la
penetración exige que los costes bajen con el volumen y que el mercado sea sensible al
precio. \textbf{Elegir mal es difícil de corregir}: subir el precio después de haber entrado
barato es mucho más costoso que bajarlo.
\end{anotacion}
```

## La distribución comercial

```{=latex}
\begin{definicion}[Canal de distribución]
Conjunto de organizaciones interdependientes que participan en el proceso de poner un
producto a disposición del consumidor.
\end{definicion}
```

### Funciones del canal

| Función | Contenido |
| --- | --- |
| **Transaccional** | compra, venta, asunción de riesgo |
| **Logística** | transporte, almacenamiento, fraccionamiento del lote |
| **Facilitadora** | financiación, información de mercado, servicio |

```{=latex}
\begin{proposicion}
El intermediario reduce el número de contactos necesarios. Con $f$ fabricantes y $c$
clientes, la venta directa exige $f\cdot c$ contactos y con un intermediario bastan $f+c$.
Con 10 y 100, se pasa de 1000 a 110.
\end{proposicion}
```

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth, scale=0.95,
  n/.style={circle, draw, thick, minimum size=5mm, inner sep=0, font=\tiny}]
\foreach \y in {0,1,2} { \node[n] (f\y) at (0,\y) {F}; }
\foreach \y in {0,1,2} { \node[n] (c\y) at (3,\y) {C}; }
\foreach \a in {0,1,2} \foreach \b in {0,1,2} { \draw[gray] (f\a) -- (c\b); }
\node[font=\scriptsize] at (1.5,-0.9) {sin intermediario: 9};

\begin{scope}[xshift=6.5cm]
\foreach \y in {0,1,2} { \node[n] (g\y) at (0,\y) {F}; }
\node[n, fill=black!10] (i) at (1.6,1) {I};
\foreach \y in {0,1,2} { \node[n] (d\y) at (3.2,\y) {C}; }
\foreach \a in {0,1,2} { \draw[gray] (g\a) -- (i); \draw[gray] (i) -- (d\a); }
\node[font=\scriptsize] at (1.6,-0.9) {con intermediario: 6};
\end{scope}
\end{tikzpicture}
\end{center}
```

### Tipos de intermediarios

| Intermediario | Rasgo |
| --- | --- |
| **Mayorista** | compra en grandes lotes y vende a otros intermediarios o a empresas |
| **Minorista** | vende al consumidor final |
| Agente o comisionista | negocia sin adquirir la propiedad |
| Central de compras | agrupa pedidos para negociar mejor |

### Decisiones de distribución

| Decisión | Alternativas |
| --- | --- |
| **Longitud del canal** | directo, corto, largo |
| **Intensidad** | intensiva, selectiva, exclusiva |
| Reparto de funciones | quién almacena, financia y da servicio |
| Gestión | selección, motivación y evaluación de los miembros |

| Intensidad | Cobertura | Producto típico |
| --- | --- | --- |
| **Intensiva** | todos los puntos posibles | conveniencia, compra rutinaria |
| **Selectiva** | varios puntos elegidos | electrodomésticos, ropa |
| **Exclusiva** | uno por zona | automóviles de gama alta, lujo |

**La intensidad debe seguir al posicionamiento.** Una marca de lujo en distribución
intensiva deja de ser percibida como lujo, y el daño no se repara bajando después la
cobertura.

## La comunicación comercial

```{=latex}
\begin{definicion}
Conjunto de instrumentos con los que la empresa informa, persuade y recuerda al mercado
sobre su oferta, de forma coordinada y coherente.
\end{definicion}
```

### Instrumentos

| Instrumento | Qué es | Fuerte en |
| --- | --- | --- |
| **Publicidad** | comunicación pagada e impersonal | alcance y construcción de marca |
| **Promoción de ventas** | incentivos a corto plazo | provocar acción inmediata |
| **Venta personal** | interacción directa | productos complejos y de importe alto |
| **Relaciones públicas** | gestión de la imagen y de los públicos | credibilidad |
| **Marketing directo** | contacto individual y medible | segmentación y respuesta |

| Instrumento | Coste por contacto | Control del mensaje | Efecto |
| --- | --- | --- | --- |
| Publicidad | bajo | alto | medio plazo |
| Promoción | medio | alto | **inmediato** |
| Venta personal | **muy alto** | alto | medio plazo |
| Relaciones públicas | bajo | **bajo** | largo plazo |

```{=latex}
\begin{anotacion}
La promoción de ventas produce resultados visibles enseguida y por eso se abusa de ella. El
efecto es adelantar compras que se habrían producido igual y \textbf{entrenar al cliente a
esperar el descuento}, con lo que el precio de referencia baja y el margen no vuelve al nivel
anterior. Una marca en promoción permanente ha cambiado su posicionamiento sin decidirlo.
\end{anotacion}
```

### Estrategias de comunicación

| Estrategia | Dirección | Instrumento dominante |
| --- | --- | --- |
| **Push** | fabricante $\to$ canal $\to$ consumidor | venta personal y promoción al canal |
| **Pull** | fabricante $\to$ consumidor $\to$ canal | publicidad y promoción al consumidor |

**Las dos se combinan.** Sin push el producto no está en el lineal; sin pull nadie lo pide y
el canal deja de reponerlo.

### El proceso de comunicación

| Etapa | Decisión |
| --- | --- |
| 1 | identificar la audiencia objetivo |
| 2 | fijar el objetivo: informar, persuadir o recordar |
| 3 | diseñar el mensaje: contenido, estructura y formato |
| 4 | elegir los medios y la frecuencia |
| 5 | fijar el presupuesto |
| 6 | **medir los resultados** |

**El paso que más se omite es el sexto.** Sin medición no hay forma de saber qué parte del
presupuesto funciona, y la asignación del año siguiente se hace por inercia.

## Ejercicios

```{=latex}
\begin{ejercicio}
Identificar los tres niveles del producto en un teléfono móvil de gama media.
\end{ejercicio}

\begin{solucion}
Beneficio básico: comunicarse y acceder a información en movilidad. Producto real: marca,
pantalla, cámara, memoria, sistema operativo, diseño y envase. Producto aumentado: garantía,
actualizaciones de software durante varios años, servicio técnico, financiación y plan de
recompra.

\medskip
Entre dos terminales de características casi idénticas, la duración del soporte de software
y la red de reparación deciden la compra: la competencia está en el tercer nivel.
\end{solucion}

\begin{ejercicio}
Un producto se vende a 20 euros con un coste variable de 12 y ventas de 10\,000 unidades. Se
plantea una rebaja del 10\,\%. ¿Cuánto tienen que crecer las ventas para mantener el margen?
\end{ejercicio}

\begin{solucion}
Margen actual: $(20-12)\cdot10\,000 = 80\,000$ euros.

\medskip
Con precio 18, el margen unitario baja a 6, así que hacen falta
$80\,000/6 = 13\,334$ unidades: un crecimiento del \textbf{33,3\,\%}.

\medskip
Una rebaja del 10\,\% exige vender un tercio más. Es la razón de que las rebajas de precio
en productos con margen estrecho casi nunca se recuperen por volumen: la elasticidad
necesaria supera la real.
\end{solucion}

\begin{ejercicio}
Una marca de relojes de gama alta recibe la oferta de una gran superficie para vender en
todos sus establecimientos con un descuento del 30\,\%. Valorar la decisión.
\end{ejercicio}

\begin{solucion}
Aumentaría el volumen a corto plazo y destruiría el posicionamiento: distribución intensiva
y descuento permanente son incompatibles con la exclusividad que sostiene el precio.

\medskip
Además el canal actual, selectivo o exclusivo, perdería motivación al ver su margen
socavado, y recuperarlo después sería muy costoso. La respuesta coherente es rechazar la
oferta, o aceptarla con una línea distinta y otra marca, que es lo que hacen los grupos con
varias enseñas.
\end{solucion}

\begin{ejercicio}
Una empresa lanza un producto innovador protegido por patente en un mercado poco sensible al
precio. ¿Descremado o penetración?
\end{ejercicio}

\begin{solucion}
Descremado. Las tres condiciones se cumplen: hay un segmento dispuesto a pagar por ser el
primero, la patente retrasa la imitación y la demanda es poco elástica, así que el precio
alto no frena mucho el volumen.

\medskip
Permite además recuperar la inversión antes y bajar el precio por etapas conforme se agota
cada segmento. La penetración tendría sentido si los costes cayeran fuerte con el volumen y
la ventaja fuese la escala, no la patente.
\end{solucion}
```

Las políticas de marketing están desarrolladas en \cite{kotler2018} y
\cite{santesmases2018}, con tratamiento ampliado de la gestión en \cite{kotler2016}.
