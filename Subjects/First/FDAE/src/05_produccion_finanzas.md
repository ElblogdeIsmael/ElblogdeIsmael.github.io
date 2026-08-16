# La dirección de la producción y la dirección financiera

Temas 8 y 9 del programa. El subsistema de operaciones y el subsistema financiero.

## La dirección de la producción

```{=latex}
\begin{definicion}
Gestión del proceso que transforma factores en bienes y servicios, con las decisiones
sobre capacidad, procesos, calidad, inventarios y localización.
\end{definicion}
```

| Objetivo de operaciones | En qué consiste |
| --- | --- |
| **Coste** | producir barato |
| **Calidad** | ajustarse a lo prometido |
| **Entrega** | plazo y fiabilidad |
| **Flexibilidad** | adaptarse a cambios de volumen o de producto |

```{=latex}
\begin{anotacion}
Durante décadas se dio por sentado que esos objetivos eran incompatibles entre sí —el
modelo de las \emph{compensaciones}—. La experiencia japonesa mostró que mejorar la calidad
puede reducir el coste, porque elimina retrabajo y desperdicio. No todos los objetivos
compiten siempre: algunos se refuerzan.
\end{anotacion}
```

### Decisiones estratégicas de operaciones

| Decisión | Alternativas |
| --- | --- |
| **Capacidad** | cuánta y cuándo instalarla |
| **Localización** | proximidad a mercado, a factores o a proveedores |
| **Proceso** | por proyecto, por lotes, en línea, continuo |
| **Distribución en planta** | por proceso, por producto, celular |
| **Integración vertical** | fabricar o comprar |

| Tipo de proceso | Volumen | Variedad | Ejemplo |
| --- | --- | --- | --- |
| Por proyecto | uno | máxima | una obra civil |
| Por lotes | medio | alta | mobiliario |
| En línea | alto | baja | automóviles |
| Continuo | muy alto | mínima | refinería |

**Volumen y variedad son inversos**, y esa relación determina el proceso adecuado.
Intentar fabricar productos muy variados en una línea diseñada para volumen alto produce
costes de cambio de utillaje que se comen el ahorro.

### Gestión de inventarios

| Función del inventario | Coste asociado |
| --- | --- |
| Absorber variaciones de la demanda | coste de posesión |
| Aprovechar descuentos por volumen | coste de pedido |
| Desacoplar fases del proceso | riesgo de obsolescencia |
| Evitar roturas de stock | inmovilizado financiero |

El modelo del **lote económico** equilibra el coste de pedir con el de mantener:

$$Q^{*} = \sqrt{\frac{2\,D\,S}{H}}$$

con $D$ la demanda anual, $S$ el coste de emitir un pedido y $H$ el coste anual de
mantener una unidad.

```{=latex}
\begin{anotacion}
El \textbf{justo a tiempo} invierte la lógica del modelo: en vez de aceptar el coste de
pedido como dado y calcular el lote óptimo, lo ataca reduciendo los tiempos de preparación
hasta que los lotes pequeños son viables. El inventario deja de verse como un amortiguador
útil y pasa a verse como lo que oculta los problemas del proceso.
\end{anotacion}
```

### Calidad

| Enfoque | Qué mide |
| --- | --- |
| Conformidad | ajuste a las especificaciones |
| Percibida | valoración del cliente |
| **Coste de la calidad** | prevención, evaluación, fallos internos y externos |

**El coste de prevenir es siempre menor que el de corregir**, y el de corregir en fábrica
menor que el de corregir en casa del cliente. La regla del factor diez —cada etapa que
avanza un defecto multiplica su coste por diez— es aproximada y transmite bien la idea.

La **gestión de la calidad total** desplaza el foco del control final al diseño del
proceso: la calidad no se inspecciona al final, se construye en cada fase.

## La dirección financiera

| Decisión | Pregunta |
| --- | --- |
| **Inversión** | en qué activos colocar los recursos |
| **Financiación** | de dónde obtener los fondos |
| **Dividendos** | qué parte del beneficio repartir |
| Gestión del circulante | cómo administrar tesorería, clientes y existencias |

```{=latex}
\begin{anotacion}
El objetivo financiero es \textbf{maximizar el valor de la empresa}, no el beneficio
contable. Son cosas distintas: el beneficio se puede inflar retrasando gasto en
mantenimiento o en investigación, y eso destruye valor. El valor incorpora el momento en
que llegan los flujos y el riesgo con que llegan.
\end{anotacion}
```

### Decisiones de inversión

El valor de un proyecto es el de los flujos de caja que genera, descontados al momento
actual:

$$VAN = -A + \sum_{t=1}^{n}\frac{Q_t}{(1+k)^{t}}$$

| Criterio | Regla de decisión | Límite |
| --- | --- | --- |
| **VAN** | aceptar si $VAN > 0$ | exige estimar $k$ |
| **TIR** | aceptar si $TIR > k$ | puede haber varias o ninguna |
| Plazo de recuperación | aceptar si es menor que el máximo | ignora lo que ocurre después |
| Índice de rentabilidad | aceptar si es mayor que 1 | útil para racionar capital |

**El VAN es el criterio de referencia** porque mide directamente el valor creado y es
aditivo: el VAN de dos proyectos es la suma de los suyos. La TIR es más intuitiva de
comunicar y falla al comparar proyectos de tamaños o duraciones distintas.

```{=latex}
\begin{ejemplo}
Un proyecto exige 100 y genera 60 al final de cada uno de los dos años siguientes, con
un tipo de descuento del 10\,\%:
$$VAN = -100 + \frac{60}{1{,}1} + \frac{60}{1{,}21} = -100 + 54{,}55 + 49{,}59 = 4{,}13$$
Es positivo, así que crea valor y se acepta. Su TIR resuelve $VAN = 0$ y sale del 13,1\,\%,
por encima del 10\,\% exigido: los dos criterios coinciden, como ocurre siempre en
proyectos simples.
\end{ejemplo}
```

### Decisiones de financiación

| Fuente | Origen | Coste |
| --- | --- | --- |
| Autofinanciación | beneficios retenidos | coste de oportunidad |
| Ampliación de capital | socios | dividendos esperados |
| Deuda bancaria | entidades financieras | intereses, deducibles |
| Emisión de obligaciones | mercado de capitales | cupón |
| Crédito comercial | proveedores | descuento por pronto pago no aplicado |
| Arrendamiento financiero | entidad de leasing | cuota |

| Clasificación | Criterio |
| --- | --- |
| Propia frente a ajena | quién aporta y con qué exigencia de devolución |
| Interna frente a externa | generada por la empresa o captada fuera |
| Corto frente a largo plazo | plazo de exigibilidad |

**Regla de equilibrio financiero:** las inversiones a largo plazo se financian con
recursos a largo plazo. Financiar una nave con crédito a un año obliga a renovarlo cada
año y expone a la empresa a que no se lo renueven.

$$\text{Fondo de maniobra} = \text{activo corriente} - \text{pasivo corriente}$$

Un fondo de maniobra positivo indica que parte del activo corriente se financia con
recursos permanentes, que es la situación normal en la mayoría de los sectores.

### El apalancamiento financiero

Endeudarse eleva la rentabilidad de los accionistas **si el rendimiento del activo supera
al coste de la deuda**, y la hunde si no lo supera.

| Situación | Efecto del endeudamiento |
| --- | --- |
| Rentabilidad económica > coste de la deuda | apalancamiento **positivo** |
| Rentabilidad económica < coste de la deuda | apalancamiento **negativo** |

**El apalancamiento amplifica en las dos direcciones**, y por eso aumenta la rentabilidad
esperada y el riesgo a la vez. Ahí está el compromiso de la estructura financiera: la
deuda es más barata y deducible, y a partir de cierto nivel el riesgo de insolvencia
encarece toda la financiación.

## Ejercicios

```{=latex}
\begin{ejercicio}
Un proyecto exige 500 y genera 200 anuales durante tres años. Con un tipo de descuento del 8\,\%, ¿se acepta?
\end{ejercicio}

\begin{solucion}
$$VAN = -500 + \frac{200}{1{,}08} + \frac{200}{1{,}08^2} + \frac{200}{1{,}08^3}$$
$$= -500 + 185{,}19 + 171{,}47 + 158{,}77 = 15{,}43$$
Positivo: se acepta. El plazo de recuperación simple sería de 2,5 años, y ese criterio no
distingue si los flujos llegan antes o después, que es justo lo que el VAN sí recoge.
\end{solucion}

\begin{ejercicio}
Una empresa tiene rentabilidad económica del 9\,\% y se financia con deuda al 6\,\%. ¿Le
conviene endeudarse más? ¿Y si la deuda costara el 11\,\%?
\end{ejercicio}

\begin{solucion}
En el primer caso sí: cada euro de deuda rinde 9 y cuesta 6, así que los 3 puntos de
diferencia van al accionista. El apalancamiento es positivo y eleva la rentabilidad
financiera.

\medskip
En el segundo no: cada euro de deuda rinde menos de lo que cuesta, y la diferencia sale del
accionista. Además, más deuda eleva el riesgo de insolvencia y con él el tipo exigido, así
que el efecto se agrava.
\end{solucion}

\begin{ejercicio}
Una empresa financia la compra de maquinaria con una póliza de crédito a un año.
¿Qué problema plantea?
\end{ejercicio}

\begin{solucion}
Rompe la regla de equilibrio financiero: un activo que genera flujos durante años se
financia con un pasivo exigible en doce meses. La empresa depende de que se le renueve la
póliza cada año.

\medskip
Si la entidad no renueva —por su propia situación o por un cambio de política crediticia—,
la empresa se ve obligada a devolver un importe que su activo no ha generado todavía, y
puede acabar en insolvencia siendo un negocio rentable. Es un riesgo de liquidez, no de
rentabilidad.
\end{solucion}
```

La dirección de operaciones y la financiera están desarrolladas en \cite{fuentes2016},
\cite{suarez2007} y \cite{diez2009}, con la exposición de \cite{cuervo2008}.
