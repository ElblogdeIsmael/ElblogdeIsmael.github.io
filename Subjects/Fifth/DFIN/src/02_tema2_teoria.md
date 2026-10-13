# Tema 2: Valor Actual, Coste de Oportunidad del Capital y Valoración de Activos

Este capítulo aborda los principios cuantitativos del descuento intertemporal, la fijación del coste de oportunidad del capital y los modelos analíticos de valoración de activos financieros de renta fija y renta variable. Se profundiza en el comportamiento de las obligaciones ante fluctuaciones en los tipos de interés, la estructura temporal de la curva de rendimientos, y los modelos de valoración de acciones ordinarias mediante descuento de dividendos y la descomposición del precio en valor de los activos en marcha y Valor Actual de las Oportunidades de Crecimiento (VAOC).


## Fundamentos del Valor Actual Neto y Coste de Oportunidad

El valor del dinero no es constante en el tiempo: un euro disponible hoy posee mayor valor económico que un euro prometido dentro de un año. Esta asimetría descansa en dos hechos objetivos:

1. El euro presente puede colocarse de inmediato en el mercado financiero devengando una rentabilidad cierta (interés libre de riesgo).
2. Los flujos de tesorería futuros conllevan incertidumbre respecto a su cobro efectivo, además de experimentar la pérdida de poder adquisitivo por efecto de la inflación.

Para comparar importes monetarios fechados en momentos temporales distintos, es indispensable homogeneizarlos trasladándolos a una fecha común de referencia. La operación que traslada flujos futuros al momento presente ($t=0$) se denomina **actualización** o descuento.

### La regla del Valor Actual

Si un proyecto o activo promete generar un flujo de tesorería $F_1$ al cabo de un año, su **Valor Actual (VA)** en el momento presente se define como:

$$\text{VA} = \frac{F_1}{1 + r}$$

Donde $r$ es el **coste de oportunidad del capital**, definido como la tasa esperada de rentabilidad a la que renuncian los inversores por inmovilizar sus fondos en dicho proyecto en lugar de colocarlos en activos financieros alternativos de riesgo comparable cotizados en el mercado de capitales (Brealey, Myers, Allen y Edmans, 2023, cap. 2).

El **Valor Actual Neto (VAN)** mide la contribución neta que la inversión realiza a la riqueza de la empresa tras deducir el desembolso inicial ($I_0$):

$$\text{VAN} = -I_0 + \text{VA} = -I_0 + \frac{F_1}{1 + r}$$

Si extendemos el horizonte temporal a $n$ periodos, la expresión general del VAN adopta la forma canónica:

$$\text{VAN} = -I_0 + \sum_{t=1}^{n} \frac{F_t}{(1 + r)^t}$$

### Regla de decisión y criterios equivalentes

La dirección financiera aplica dos reglas normativas estrictamente equivalentes para evaluar cualquier propuesta inversora:

- **Regla del Valor Actual Neto:** Aceptar únicamente proyectos cuyo VAN sea estrictamente positivo ($\text{VAN} > 0$). Si $\text{VAN} > 0$, el proyecto genera un valor de mercado superior a su coste de ejecución, expandiendo la riqueza de los accionistas.
- **Regla de la Tasa de Rentabilidad:** Aceptar proyectos cuya tasa interna de rendimiento esperado supere el coste de oportunidad del capital:

$$\text{Rentabilidad esperada} = \frac{F_1 - I_0}{I_0} > r$$

Despejando analíticamente:

$$\frac{F_1 - I_0}{I_0} > r \iff \frac{F_1}{I_0} - 1 > r \iff \frac{F_1}{1 + r} > I_0 \iff -I_0 + \frac{F_1}{1 + r} > 0 \iff \text{VAN} > 0$$

Ambos criterios conducen exactamente al mismo resultado de aceptación o rechazo.

### Criterio óptimo de volumen inversor y desviaciones

En la modelización de la cátedra de la Universidad de Granada (Tema 2, diapositivas 11 a 25), la inversión en activos reales se representa en el eje de abscisas de $t=0$ como el segmento $JD$, que reporta un flujo de caja futuro $JR$ en $t=1$. El óptimo que maximiza el VAN se alcanza cuando la rentabilidad marginal del último euro invertido coincide exactamente con el tipo de interés del mercado ($\text{TIR}_{\text{mg}} = r$).

Se analizan dos posibles desviaciones ineficientes respecto a ese óptimo:

1. **Subinversión ($ND < JD$):**
   La empresa acomete un volumen de inversión inferior al óptimo ($ND$). Al frenar el gasto de capital antes de tiempo, deja escapar proyectos cuya rentabilidad marginal es superior al tipo de interés de mercado ($\text{TIR}_{\text{mg}} > r$). Se desaprovecha una masa de proyectos con VAN positivo, situando a la empresa en una línea de mercado de menor cota y mermando la riqueza final tanto de accionistas prestamistas como prestatarios.

2. **Sobreinversión ($ND > JD$):**
   La empresa amplía su presupuesto de capital por encima del óptimo ($ND$). Los proyectos adicionales acometidos presentan rendimientos decrecientes por debajo del coste de capital del mercado ($\text{TIR}_{\text{mg}} < r$). Estos proyectos marginales arrojan un VAN individual negativo, destruyendo parte del valor generado por las primeras inversiones y reduciendo la riqueza neta del accionariado.


## Valoración de Activos de Renta Fija (Obligaciones y Bonos)

Una obligación o bono es un activo financiero de renta fija que representa una parte alícuota de un empréstito emitido por una corporación mercantil o un ente público (Estado, comunidad autónoma o municipio). El emisor asume el compromiso legal de abonar al tenedor una serie de pagos periódicos prefijados de intereses (cupones) y reembolsar el capital principal (valor nominal o facial) a la fecha de amortización o vencimiento.

### Parámetros contractuales básicos

- **Valor nominal o facial ($N$):** Importe sobre el que se calculan los intereses y que el emisor se compromete a reembolsar al vencimiento.
- **Tipo de interés cupón ($c$):** Porcentaje nominal anual pactado en la emisión ($C = c \times N$).
- **Frecuencia de pago:** Anual, semestral o trimestral.
- **Vencimiento ($n$):** Fecha límite en la que el emisor extingue la deuda abonando el principal y el último cupón.

### Deducción del precio teórico de una obligación

Bajo la ley del precio único y el principio de ausencia de arbitraje (Berk y DeMarzo, 2020, cap. 6), el precio de mercado de un bono con cupones periódicos ($P_0$) equivale al valor actual de todos los cobros futuros esperados, descontados a la tasa de rentabilidad exigida en el mercado para títulos de riesgo y plazo comparables ($r$):

$$P_0 = \sum_{t=1}^{n} \frac{C}{(1+r)^t} + \frac{N}{(1+r)^n}$$

Aplicando la suma de una progresión geométrica decreciente para el flujo constante de cupones, la fórmula se compacta analíticamente en:

$$P_0 = C \times \left[ \frac{1 - (1+r)^{-n}}{r} \right] + \frac{N}{(1+r)^n}$$

### Relación matemática entre precio y tipos de interés

Existe una relación funcional inversa y convexa entre el precio de cotización de una obligación y los tipos de interés de mercado vigentes:

- **Cotización a la par ($P_0 = N$):** Ocurre cuando el tipo cupón coincide exactamente con la rentabilidad exigida por el mercado ($c = r$). El inversor recibe exactamente lo que demanda.
- **Cotización sobre la par ($P_0 > N$):** Ocurre cuando el tipo cupón supera el tipo de mercado ($c > r$). Como el bono retribuye intereses más atractivos que las nuevas emisiones del mercado, los inversores están dispuestos a pagar una prima de emisión ($P_0 > N$) hasta que la rentabilidad neta efectiva se iguale con $r$.
- **Cotización bajo la par ($P_0 < N$):** Ocurre cuando el tipo cupón es inferior al tipo de mercado ($c < r$). El bono ofrece cupones poco competitivos, por lo que cotiza con descuento ($P_0 < N$) para que la revalorización del precio hasta el nominal compense la merma del cupón.

### Rentabilidad al vencimiento frente a rentabilidad actual

Es necesario distinguir tres conceptos de rentabilidad habitualmente confundidos:

1. **Rentabilidad actual (*Current Yield*):** Cociente directo entre el cupón anual y el precio corriente de compra:

$$\text{Rentabilidad actual} = \frac{C}{P_0}$$

Ignora por completo la ganancia o pérdida de capital que experimentará el inversor al vencimiento cuando el bono sea reembolsado por su nominal $N$.

2. **Rentabilidad al vencimiento (*Yield to Maturity* o TIR del bono):**
   Es la tasa interna de descuento anualizada ($y$ o $r$) que iguala exactamente el precio de mercado actual del bono con el valor presente de todos sus cobros futuros de cupón y principal:

$$P_0 = \sum_{t=1}^{n} \frac{C}{(1+y)^t} + \frac{N}{(1+y)^n}$$

Representa la rentabilidad real efectiva que obtendrá el inversor únicamente si mantiene el bono hasta su vencimiento y logra reinvertir todos los cupones intermedios a esa misma tasa $y$.

3. **Tasa de rentabilidad del periodo de tenencia (*Holding Period Return*):**
   Si el inversor adquiere el título en $t=0$ a un precio $P_0$ y lo enajena en $t=1$ a un precio $P_1$ tras cobrar el primer cupón $C_1$, la rentabilidad efectivamente lograda es:

$$R = \frac{C_1 + (P_1 - P_0)}{P_0} = \frac{C_1}{P_0} + \frac{P_1 - P_0}{P_0}$$

Donde $C_1/P_0$ es el rendimiento por intereses y $(P_1 - P_0)/P_0$ es la ganancia o pérdida patrimonial por variación en el precio del bono. Si los tipos de mercado han aumentado durante el año ($r_1 > r_0$), el precio de venta $P_1$ habrá caído, pudiendo arrojar una rentabilidad total negativa.

### Riesgo de tipo de interés y sensibilidad (Duración)

El riesgo de tipo de interés es la volatilidad que experimenta el precio de mercado de un bono ante variaciones imprevistas en los tipos de interés de la economía. Presenta dos propiedades estructurales:

- **Efecto vencimiento:** A mayor plazo de amortización restante ($n$), mayor es el porcentaje de oscilación del precio ante una variación de 100 puntos básicos en el tipo de interés. Las obligaciones a 20 o 30 años son mucho más sensibles y volátiles que los bonos a 2 años.
- **Efecto cupón:** A menor tipo de cupón ($c$), mayor es la sensibilidad del bono. Esto ocurre porque un cupón reducido pospone la devolución de la mayor parte del flujo de caja hasta el vencimiento final. El caso extremo de máxima sensibilidad lo constituyen los bonos cupón cero.

Para medir con exactitud esta sensibilidad, Frederick Macaulay (1938) formuló el concepto de **Duración de Macaulay ($D$)**, definida como la vida media ponderada de los flujos de tesorería del bono, utilizando como ponderaciones el valor actual de cada flujo sobre el precio total:

$$D = \frac{\sum_{t=1}^{n} t \times \frac{C_t}{(1+r)^t}}{P_0}$$

A partir de la duración de Macaulay se obtiene la **Duración Modificada ($D^*$)**, que cuantifica el porcentaje directo de variación del precio ante un cambio infinitesimal en el tipo de interés:

$$D^* = \frac{D}{1 + r} \implies \frac{\Delta P}{P} \approx -D^* \times \Delta r$$

### La Estructura Temporal de los Tipos de Interés (ETTI)

En los mercados financieros no existe un único tipo de interés $r$, sino una constelación de tipos que varían según el horizonte temporal del préstamo. La **Curva de Rendimientos (*Yield Curve*)** refleja gráficamente la relación entre el tipo de interés de la deuda pública soberana libre de riesgo y su plazo hasta el vencimiento.

- **Tipos al contado (*Spot rates*, $r_t$):** Tipo de interés anualizado aplicable a un flujo monetario único que se abonará dentro de $t$ periodos a partir de hoy (rendimiento de un bono cupón cero a $t$ años).
- **Tipos a plazo (*Forward rates*, $f_{t-1, t}$):** Tipo de interés implícito pactado hoy para un préstamo que comenzará en el periodo futuro $t-1$ y finalizará en $t$. Bajo condiciones de ausencia de arbitraje:

$$(1 + r_t)^t = (1 + r_{t-1})^{t-1} \times (1 + f_{t-1, t})$$

#### Formas de la curva de rendimientos y teorías explicativas

La curva de tipos puede adoptar tres morfologías:

1. **Ascendente (Normal):** Los tipos a largo plazo son superiores a los tipos a corto plazo. Refleja primas por liquidez exigidas por los inversores para inmovilizar su dinero a horizontes prolongados y expectativas de expansión económica.
2. **Plana:** Los tipos a corto y largo plazo coinciden. Indica periodos de transición en la política monetaria.
3. **Invertida:** Los tipos a corto plazo son superiores a los tipos a largo plazo. Históricamente constituye el indicador adelantado más fiable de una recesión macroeconómica inminente, ya que descuenta que los bancos centrales se verán forzados a recortar los tipos oficiales para reanimar la economía.

### Obligaciones corporativas y prima de riesgo de crédito

A diferencia de la deuda soberana de Estados solventes (emitida en su propia moneda sin riesgo aparente de quiebra), las obligaciones emitidas por corporaciones mercantiles conllevan **riesgo de crédito o insolvencia** (*default risk*).

Las agencias de calificación crediticia (Standard & Poor's, Moody's, Fitch) auditan la solidez financiera de los emisores y asignan notas escalonadas:
- **Grado de inversión (*Investment Grade*):** Calificaciones comprendidas entre AAA/Aaa y BBB/Baa. Emisores sólidos con baja probabilidad de impago.
- **Grado especulativo o Bonos de alto rendimiento (*High Yield / Junk Bonds*):** Calificaciones iguales o inferiores a BB/Ba. Compañías con vulnerabilidad financiera que deben pagar intereses sustancialmente más elevados para captar fondos.

El **Diferencial de Crédito (*Credit Spread*)** es la diferencia entre el rendimiento exigido a una obligación empresarial y el rendimiento de un bono soberano libre de riesgo de idéntico vencimiento:

$$\text{Spread de crédito} = y_{\text{corporativo}} - y_{\text{soberano}}$$

Este diferencial remunera dos factores: la probabilidad actuarial de impago y pérdida en caso de quiebra (*loss given default*), y una prima de iliquidez derivada de que los bonos corporativos se negocian con menor frecuencia que la deuda pública.


## Valoración de Acciones Ordinarias (Renta Variable)

Las acciones ordinarias representan alícuotas del capital social de una empresa. Confieren a su titular derechos políticos (asistencia y voto en juntas generales) y derechos económicos (cobro de dividendos y participación en el remanente en caso de liquidación societaria).

A diferencia de los bonos, las acciones ordinarias presentan dos singularidades financieras críticas:
1. No poseen fecha de amortización o vencimiento prefijada; su horizonte temporal es contractualmente indefinido (perpetuidad).
2. Los flujos de tesorería que retribuirán al inversor (dividendos) no están contractualmente garantizados ni prefijados por ley: dependen de la capacidad competitiva de la empresa para generar beneficios y de la decisión soberana de la junta general respecto a la política de reparto.

### El modelo de descuento de flujos para un horizonte temporal cerrado

Consideremos un inversor que adquiere una acción ordinaria en el momento actual ($t=0$) pagando un precio de cotización $P_0$. El inversor planea mantener el título en cartera durante un año, horizonte en el que espera cobrar un dividendo $\text{Div}_1$ y enajenar la acción al cierre del periodo a un precio de mercado esperado $P_1$.

Si la tasa de rentabilidad exigida por el mercado para activos de similar perfil de riesgo es $r$, el precio justo de la acción en $t=0$ responde al valor actual de los flujos de cobro en $t=1$:

$$P_0 = \frac{\text{Div}_1 + P_1}{1 + r}$$

Despejando la tasa de rentabilidad esperada $r$:

$$r = \frac{\text{Div}_1}{P_0} + \frac{P_1 - P_0}{P_0}$$

La rentabilidad del accionista se descompone aditivamente en dos sumandos:
- **Rendimiento por dividendo (*Dividend Yield*):** $\frac{\text{Div}_1}{P_0}$, componente corriente de tesorería distribuida.
- **Rendimiento por ganancia de capital (*Capital Gain Yield*):** $\frac{P_1 - P_0}{P_0}$, revalorización bursátil de la acción.

### Extensión a un horizonte temporal infinito

¿Cómo se determina el precio de venta en $t=1$, $P_1$? De manera idéntica, el comprador en $t=1$ fijará el precio actualizando el dividendo esperado en $t=2$ y el precio de salida en $t=2$:

$$P_1 = \frac{\text{Div}_2 + P_2}{1 + r}$$

Sustituyendo recursivamente $P_1$ en la ecuación de $P_0$:

$$P_0 = \frac{\text{Div}_1}{1+r} + \frac{\frac{\text{Div}_2 + P_2}{1+r}}{1+r} = \frac{\text{Div}_1}{1+r} + \frac{\text{Div}_2}{(1+r)^2} + \frac{P_2}{(1+r)^2}$$

Iterando el proceso hacia un horizonte de $H$ años:

$$P_0 = \sum_{t=1}^{H} \frac{\text{Div}_t}{(1+r)^t} + \frac{P_H}{(1+r)^H}$$

Cuando el horizonte temporal se extiende hacia el infinito ($H \to \infty$), siempre que el precio crezca a una tasa inferior al coste de capital ($r$), el valor actual del precio terminal se aproxima a cero:

$$\lim_{H \to \infty} \frac{P_H}{(1+r)^H} = 0$$

Por consiguiente, el precio teórico de mercado de una acción ordinaria se reduce a la suma descontada de todos los dividendos futuros esperados a perpetuidad:

$$P_0 = \sum_{t=1}^{\infty} \frac{\text{Div}_t}{(1+r)^t}$$

Este resultado es la base del **Modelo de Descuento de Dividendos (MDD)** de John Burr Williams (1938). Nótese que no asume que el inversor deba conservar la acción eternamente: aunque un accionista la venda a corto plazo, el precio que recibirá en el mercado secundario reflejará la valoración de los dividendos que percibirán los inversores subsiguientes.


### El Modelo de Gordon y Shapiro (Crecimiento Constante)

Estimar individualmente una corriente infinita de dividendos es impracticable. Myron J. Gordon y Eli Shapiro (1962) formularon una simplificación analítica asumiendo que los dividendos por acción crecen a una tasa acumulativa constante anual $g$ de manera indefinida:

$$\text{Div}_t = \text{Div}_1 \times (1 + g)^{t-1}$$

Bajo esta hipótesis, la serie infinita de flujos descontados adopta la estructura matemática de una progresión geométrica decreciente:

$$P_0 = \sum_{t=1}^{\infty} \frac{\text{Div}_1 (1+g)^{t-1}}{(1+r)^t} = \frac{\text{Div}_1}{1+r} \sum_{k=0}^{\infty} \left( \frac{1+g}{1+r} \right)^k$$

Siempre que la tasa de capitalización sea estrictamente superior a la tasa de crecimiento ($r > g$), la suma de la progresión geométrica converge a:

$$\sum_{k=0}^{\infty} \left( \frac{1+g}{1+r} \right)^k = \frac{1}{1 - \frac{1+g}{1+r}} = \frac{1+r}{(1+r) - (1+g)} = \frac{1+r}{r - g}$$

Multiplicando por $\frac{\text{Div}_1}{1+r}$, obtenemos la célebre fórmula de **Gordon y Shapiro**:

$$P_0 = \frac{\text{Div}_1}{r - g} \quad \text{con } r > g$$

Despejando el coste de capital propio ($r$):

$$r = \frac{\text{Div}_1}{P_0} + g$$

En equilibrio, la tasa de ganancia de capital del inversor coincide exactamente con la tasa de crecimiento de los dividendos $g$.

### Determinantes del crecimiento: Retención y Rentabilidad sobre Fondos Propios

La tasa de crecimiento $g$ no es una variable exógena o caída del cielo: se origina en la política de reinversión interna de la corporación.

Siguiendo el esquema analítico explicado en clase (recogido en `dfin-vistoenclase.md` y en las diapositivas de la UGR):

1. **De las ventas al Beneficio Neto:**
   A partir de los ingresos por ventas se deducen los costes variables y fijos de explotación y las amortizaciones técnicas, obteniendo el **Beneficio Antes de Intereses e Impuestos (BAIT)**. Tras restar los intereses financieros de la deuda ($I$), se obtiene el **Beneficio Antes de Impuestos (BAT)**. Deducido el Impuesto sobre Sociedades ($T$), resulta el **Beneficio Neto (BN)**.
2. **El Beneficio por Acción (BPA):**
   Dividiendo el Beneficio Neto entre el número de acciones en circulación:

$$\text{BPA} = \frac{\text{Beneficio Neto}}{\text{Número de acciones}}$$

3. **Asignación del beneficio:**
   El BPA se fragmenta en dos componentes complementarios:

$$\text{BPA} = \text{Dividendo por acción} + \text{Reservas por acción}$$

- **Tasa de reparto de dividendos (*payout*, $p$):** Porcentaje del beneficio neto repartido a los socios:

$$p = \frac{\text{Dividendo}}{\text{Beneficio Neto}} = \frac{\text{Div}_1}{\text{BPA}_1}$$

- **Tasa de retención de beneficios ($b$):** Porcentaje del beneficio neto retenido en balance para nutrir reservas e inversiones:

$$b = 1 - p = \frac{\text{Reservas}}{\text{Beneficio Neto}}$$

- **Rentabilidad sobre los Fondos Propios ($\text{ROE}$):**
  Rendimiento contable obtenido por la empresa sobre el patrimonio neto contable aportado por los accionistas:

$$\text{ROE} = \frac{\text{Beneficio Neto}}{\text{Fondos Propios}}$$

Si la empresa reinvierte una fracción $b$ de sus beneficios en proyectos que rinden a una tasa constante $\text{ROE}$, el crecimiento anual del beneficio por acción y de los dividendos responde a la identidad estructural:

$$g = b \times \text{ROE}$$

Esta formulación demuestra con nitidez que el crecimiento de una empresa exige simultáneamente dos factores:
- Esfuerzo de retención de beneficios ($b > 0$).
- Capacidad operativa para generar rentabilidad sobre ese ahorro reinvertido ($\text{ROE} > 0$).


### Advertencias y limitaciones del modelo de Gordon-Shapiro

El modelo de Gordon-Shapiro debe aplicarse con rigor técnico, atendiendo a tres limitaciones fundamentales:

1. **Condición matemática $r > g$:**
   Si una empresa experimenta transitoriamente una tasa de crecimiento superior a su coste de capital ($g \ge r$), aplicar la fórmula arroja un denominador negativo o nulo, generando precios absurdos.
2. **Imposibilidad macroeconómica de hipercrecimiento a perpetuidad:**
   En el largo plazo, ninguna empresa puede sostener un crecimiento $g$ por encima del crecimiento del Producto Interior Bruto (PIB) de la economía en la que opera. Si una compañía creciera indefinidamente al 10% anual en una economía que crece al 2%, llegaría un momento en que la empresa superaría en tamaño al PIB mundial, lo cual es inviable.
3. **Modelos en fases múltiples:**
   Para empresas innovadoras que atraviesan una fase inicial de fuerte expansión, se emplean modelos de valoración en dos o tres etapas:
   - *Fase 1 (Crecimiento acelerado):* Se descuentan año a año los dividendos singulares proyectados durante los primeros $T$ ejercicios a una tasa elevada $g_1$.
   - *Fase 2 (Madurez y estabilización):* A partir del año $T+1$, la empresa alcanza su velocidad de crucero con un crecimiento sostenible $g_2 < r$. Se calcula el **Valor Terminal ($P_T$)** aplicando Gordon-Shapiro sobre el dividendo $\text{Div}_{T+1}$ y se descuenta a $t=0$:

$$P_0 = \sum_{t=1}^{T} \frac{\text{Div}_t}{(1+r)^t} + \frac{P_T}{(1+r)^T}, \quad \text{donde } P_T = \frac{\text{Div}_{T+1}}{r - g_2}$$


## El Valor Actual de las Oportunidades de Crecimiento (VAOC)

El valor de mercado de las acciones no siempre se explica de forma intuitiva a través del dividendo corriente. Stewart C. Myers (1977) demostró que el precio de cualquier acción puede descomponerse analíticamente en dos magnitudes aditivas e independientes:

$$P_0 = \frac{\text{BPA}_1}{r} + \text{VAOC}$$

### Desglose de los dos componentes del precio

1. **Valor de los activos en marcha (negocio estacionario o "vaca lechera"):**
   El término $\frac{\text{BPA}_1}{r}$ representa el valor que tendría la acción si la empresa decidiera no invertir ni retener un solo euro más, repartiendo el 100% de sus beneficios en forma de dividendos corrientes ($b=0 \implies p=1$). Dado que no se dota nuevo capital, el inmovilizado solo repone su depreciación y el beneficio se mantiene constante en $\text{BPA}_1$ a perpetuidad. Su valor equivale a una renta perpetua constante descontada al coste de capital $r$.

2. **El Valor Actual de las Oportunidades de Crecimiento (VAOC / PVGO):**
   El sumando $\text{VAOC}$ es el valor actual neto agregado de todos los proyectos de inversión futuros que la empresa acometerá a lo largo del tiempo gracias a la retención y reinversión de beneficios.

### Condición rigurosa de creación de valor: ¿Cuándo añade riqueza el crecimiento?

Uno de los errores más comunes en la práctica financiera es asumir que cualquier aumento en el crecimiento ($g$) incrementa automáticamente el precio de la acción. La teoría financiera y las explicaciones de la cátedra demuestran que esto es falso.

El impacto de la reinversión sobre el valor de la acción depende críticamente de la relación entre la rentabilidad de las reinversiones ($\text{ROE}$) y la tasa de descuento exigida por el mercado ($r$):

| Relación $\text{ROE}$ frente a $r$ | Rendimiento del proyecto | Signo del $\text{VAN}$ de reinversiones | Impacto en el $\text{VAOC}$ | Efecto en la cotización ($P_0$) | Clasificación de la empresa |
| :--- | :--- | :--- | :--- | :--- | :--- |
| $\text{ROE} > r$ | Superior al coste de capital | $\text{VAN} > 0$ | $\text{VAOC} > 0$ | Aumenta ($P_0 > \frac{\text{BPA}_1}{r}$) | **Empresa de crecimiento** |
| $\text{ROE} = r$ | Idéntico al coste de capital | $\text{VAN} = 0$ | $\text{VAOC} = 0$ | Neutro ($P_0 = \frac{\text{BPA}_1}{r}$) | **Empresa estacionaria neutra** |
| $\text{ROE} < r$ | Inferior al coste de capital | $\text{VAN} < 0$ | $\text{VAOC} < 0$ | Destruye valor ($P_0 < \frac{\text{BPA}_1}{r}$) | **Empresa destructora de valor** |

### Demostración analítica de neutralidad con ROE = r

Partiendo de la fórmula de Gordon y Shapiro:

$$P_0 = \frac{\text{Div}_1}{r - g} = \frac{\text{BPA}_1 \times (1 - b)}{r - b \times \text{ROE}}$$

Si la empresa obtiene de sus reinversiones exactamente la misma rentabilidad que exige el mercado ($\text{ROE} = r$):

$$P_0 = \frac{\text{BPA}_1 \times (1 - b)}{r - b \times r} = \frac{\text{BPA}_1 \times (1 - b)}{r \times (1 - b)} = \frac{\text{BPA}_1}{r}$$

Sustituyendo en la ecuación del VAOC:

$$\text{VAOC} = P_0 - \frac{\text{BPA}_1}{r} = \frac{\text{BPA}_1}{r} - \frac{\text{BPA}_1}{r} = 0$$

Este resultado matemático encierra una lección directiva de primer orden: retener beneficios para crecer no crea un solo euro de riqueza si los proyectos acometidos tienen un VAN nulo. Aunque el beneficio contable aumente año tras año al ritmo de $g$, la pérdida de dividendos inmediatos compensa con exactitud el mayor dividendo futuro, dejando la riqueza del accionista intacta.

Peor aún: si un equipo directivo reinvierte beneficios a una tasa $\text{ROE} < r$, el $\text{VAOC}$ se vuelve **negativo**. La empresa está confiscando flujos a los accionistas para enterrarlos en proyectos destructores de riqueza, haciendo que la acción cotice con penalización bursátil por debajo del valor que tendría si repartiera el 100% de la caja.

### Interpretación del ratio Beneficio/Precio y el ratio PER

La descomposición del VAOC arroja luz sobre la interpretación de los dos múltiplos de valoración más universales de las bolsas: el ratio Beneficio/Precio ($\text{BPA}_1 / P_0$) y el ratio Precio/Beneficio ($\text{PER}$ o Price-to-Earnings).

Dividiendo la ecuación fundamental de Myers entre $P_0$:

$$1 = \frac{\text{BPA}_1}{r \times P_0} + \frac{\text{VAOC}}{P_0} \implies \frac{\text{BPA}_1}{P_0} = r \times \left( 1 - \frac{\text{VAOC}}{P_0} \right)$$

O de forma recíproca para el PER:

$$\text{PER} = \frac{P_0}{\text{BPA}_1} = \frac{1}{r} \left( 1 + \frac{\text{VAOC}}{\text{BPA}_1 / r} \right)$$

De estas expresiones se extraen dos conclusiones operativas fundamentales:

1. **Validez del ratio $\text{BPA}/P_0$ como estimador del coste de capital:**
   El cociente $\text{BPA}_1 / P_0$ (tasa de rentabilidad de los beneficios) **solo es un indicador válido de la tasa de descuento $r$ si la empresa no posee oportunidades de crecimiento** ($\text{VAOC} = 0$). En tal situación:

$$\frac{\text{BPA}_1}{P_0} = r \quad \text{y} \quad \text{PER} = \frac{1}{r}$$

2. **Significado económico del PER elevado:**
   Un PER alto (por ejemplo, 30 o 40 veces beneficios) no significa necesariamente que una acción esté cara. Si la empresa dispone de proyectos con $\text{ROE} \gg r$, el mercado descuenta un volumen sustancial de $\text{VAOC}$ positivo en el numerador, elevando el PER por encima de la referencia neutral $1/r$. Por el contrario, empresas maduras sin oportunidades de inversión cotizan con múltiplos PER cercanos a $1/r$.
