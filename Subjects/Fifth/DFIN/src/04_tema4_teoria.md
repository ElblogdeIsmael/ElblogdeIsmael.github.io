# Tema 4: Determinación de Flujos de Caja, Capital Circulante y Decisiones de Inversión

Este capítulo traslada los modelos teóricos de valoración al terreno de la presupuestación de capital en la empresa real. Se establecen los criterios analíticos para estimar con rigor los flujos de tesorería libres, la delimitación estricta entre magnitudes de caja y magnitudes contables de devengo, el tratamiento de los costes hundidos, de oportunidad y efectos colaterales, el impacto de las inversiones en capital circulante (Necesidades Operativas de Fondos o Fondo de Maniobra), el escudo fiscal de las amortizaciones, la liquidación del valor residual tras impuestos y la resolución de decisiones complejas entre proyectos con vidas útiles dispares mediante el Coste Anual Equivalente (CAE).


## Criterios Generales para la Determinación de los Flujos de Caja

Para aplicar la regla del Valor Actual Neto a una decisión de inversión productiva, el primer desafío radica en pronosticar adecuadamente los flujos de tesorería que generará el proyecto. Cometer errores en esta fase invalida cualquier cálculo posterior de rentabilidad.

La doctrina financiera internacional (Brealey, Myers, Allen y Edmans, 2023, cap. 6; Berk y DeMarzo, 2020, cap. 8) y las directrices docentes del Departamento de Economía Financiera y Contabilidad de la UGR fijan cinco principios metodológicos de obligado cumplimiento:

### 1. Criterio de caja frente a criterio de devengo

La contabilidad financiera tradicional descansa en el **principio de devengo**: reconoce los ingresos cuando se perfecciona la venta y los gastos cuando se contrae la obligación de pago, con independencia de cuándo se produce el movimiento material de dinero en cuenta. Además, la contabilidad distribuye el desembolso de los activos fijos a lo largo de varios años mediante cuotas de amortización técnica.

Por el contrario, el Valor Actual Neto se fundamenta en el **flujo de tesorería real (*Cash Flow*)**:
- Solo se computa el dinero efectivamente cobrado (entradas de caja) y efectivamente desembolsado (salidas de caja).
- Las cuotas de amortización contable no representan una salida física de dinero en el año en que se dotan (la salida material ocurrió íntegra en $t=0$ al comprar la máquina). No obstante, la amortización afecta indirectamente a la tesorería al ser un gasto deducible que rebaja la cuota del Impuesto sobre Sociedades.

### 2. El principio de los flujos de caja incrementales

Al evaluar una propuesta inversora, la regla de oro consiste en computar únicamente los **flujos incrementales**: la diferencia directa entre los flujos globales de tesorería que tendrá la empresa si acomete el proyecto y los flujos que tendría si decide no acometerlo:

$$\text{Flujo Incremental}_t = \text{Flujo de la empresa con proyecto}_t - \text{Flujo de la empresa sin proyecto}_t$$

Para aislar con exactitud qué flujos pertenecen al proyecto y cuáles deben excluirse, se aplican cuatro reglas analíticas:

#### Regla a: Ignorar los costes hundidos (*Sunk Costs*)
Los costes hundidos son desembolsos ya realizados en el pasado o contractualmente comprometidos que no pueden recuperarse con independencia de cuál sea la decisión final sobre el proyecto (por ejemplo, los honorarios abonados a una consultora por un estudio de mercado previo, o los gastos de I+D incurridos durante el diseño preliminar de un prototipo).

Dado que estos importes no variarán tanto si el proyecto se aprueba como si se rechaza, no son incrementales. Pretender justificar la continuidad de una inversión deficiente para "no tirar a la basura el dinero ya gastado" constituye una falacia psicológica habitual que destruye valor corporativo.

#### Regla b: Incorporar todos los costes de oportunidad
Si la ejecución de un proyecto exige utilizar un activo que la empresa ya posee en su balance (por ejemplo, una nave industrial vacía, un solar rústico adquirido hace una década o maquinaria ociosa), dicho uso no es gratuito.

El proyecto debe cargar como salida de caja inicial el **coste de oportunidad** de ese recurso, fijado por la mejor alternativa económica a la que se renuncia: el precio neto por el que la nave podría venderse hoy en el mercado inmobiliario o la renta que generaría si se alquilara a un tercero.

#### Regla c: Ponderar los efectos colaterales e interacciones
Un nuevo proyecto no opera en un compartimento estanco. Puede alterar los flujos de otras divisiones preexistentes de la compañía:
- **Erosión o canibalización de ventas:** Si una compañía automovilística lanza un modelo SUV compacto eléctrico, parte de sus compradores provendrán de su línea clásica de vehículos de gasolina. La pérdida de margen de las ventas canibalizadas debe imputarse como un coste incremental del nuevo lanzamiento.
- **Sinergias y ventas cruzadas:** Si la venta de una consola de videojuegos impulsa las ventas futuras de suscripciones y títulos asociados, ese flujo complementario debe acreditarse a favor del proyecto inicial.

#### Regla d: Separación estricta entre decisiones de inversión y decisiones de financiación
Al estimar los flujos de tesorería operativos del proyecto **nunca deben restarse los gastos financieros (intereses bancarios o dividendos)**.

Esta exclusión responde a una exigencia de consistencia metodológica: el coste de la deuda y de los fondos propios se recoge de forma íntegra y exhaustiva en la tasa de descuento ($k$ o WACC) con la que se actualizan los flujos. Si restáramos los intereses en los flujos y luego descontáramos al coste del capital, estaríamos duplicando la penalización por financiación.

### 3. Tratamiento coherente de la inflación

La inflación deteriora el poder adquisitivo de la moneda a lo largo del tiempo. Para no distorsionar el cálculo del VAN existen dos enfoques alternativos válidos:
- **Enfoque nominal:** Proyectar flujos de caja en euros corrientes (ajustando precios de venta y costes operativos por sus tasas previstas de inflación) y descontarlos a una tasa de capital de mercado nominal ($k_{\text{nom}}$).
- **Enfoque real:** Proyectar flujos de caja en euros constantes de poder adquisitivo de $t=0$ y descontarlos a la tasa de interés real ($k_{\text{real}}$), obtenida mediante la relación de Fisher:

$$1 + k_{\text{nom}} = (1 + k_{\text{real}}) \times (1 + \pi) \implies k_{\text{real}} = \frac{1 + k_{\text{nom}}}{1 + \pi} - 1$$

El error metodológico fatal consiste en mezclar flujos reales con tasas nominales o viceversa.


## Inversiones en Activo Fijo y Capital Circulante

El desembolso exigido por un proyecto no se limita a la factura de compra de la maquinaria. Abarca dos partidas de balance perfectamente diferenciadas:

### Inversión inicial en inmovilizado ($C_0^{\text{di}}$)

El coste de la inversión en activos fijos engloba:
1. Precio de factura del equipo o inmovilizado material e intangible.
2. Gastos de transporte, seguros, aranceles aduaneros, obras civiles de acondicionamiento, licencias técnicas e instalación necesarias para que el activo quede en condiciones operativas de funcionamiento.
3. Minoración fiscal por venta de activos antiguos sustituidos (si el proyecto consiste en una modernización): el precio de enajenación del equipo viejo minorado o incrementado por el impacto impositivo de la ganancia o pérdida patrimonial generada.

### Inversión en Capital Circulante Operativo (Fondo de Maniobra o NOF)

Para fabricar y comercializar productos, la empresa necesita dotar una masa de recursos circulantes: debe mantener existencias mínimas de materias primas y productos terminados en almacén, y conceder crédito comercial a clientes (cuentas a cobrar). Parte de este desfase financiero se cubre espontáneamente con el crédito comercial aplazado por los proveedores (cuentas a pagar).

Definimos el **Fondo de Maniobra Operativo** o **Necesidades Operativas de Fondos (NOF)** en el periodo $t$ como:

$$\text{FM}_t = \text{Existencias}_t + \text{Clientes}_t - \text{Proveedores}_t$$

La variable determinante para el flujo de tesorería no es el saldo acumulado de $\text{FM}_t$, sino su **variación interanual ($\Delta \text{FM}_t$)**:

$$\Delta \text{FM}_t = \text{FM}_t - \text{FM}_{t-1}$$

- Si la empresa crece y aumentan sus ventas, necesita almacenar más stock y financiar más crédito a clientes: $\Delta \text{FM}_t > 0$. Este incremento representa una **salida neta de tesorería** que drena la liquidez del proyecto.
- Si las ventas descienden o mejora la gestión de cobro, el circulante se libera: $\Delta \text{FM}_t < 0$, generando una entrada neta de caja.

Al vencimiento final del proyecto ($t=n$), la actividad cesa: se liquidan las existencias restantes en stock, se cobran todas las facturas pendientes de clientes y se saldan las deudas con proveedores. Por consiguiente, **la totalidad del capital circulante invertido a lo largo del proyecto se recupera íntegramente como una entrada de caja en el último periodo**.


## Determinación del Flujo de Caja Derivado de las Operaciones

El flujo de caja de las operaciones ($Q_i^{\text{di}}$) recoge la tesorería generada por la actividad ordinaria del proyecto en cada ejercicio. Siguiendo la deducción formal de la cátedra de la UGR (Tema 4, diapositivas 23 a 28):

### Deducción de la renta operativa antes de impuestos ($Q_i^{\text{ai}}$)

Asumiendo inicialmente que ingresos y cobros coincidieran (venta y compra al contado):

$$Q_i^{\text{ai}} = Pv_i \cdot V_i - (mp_i + mo_i + gg_i)$$

Donde:
- $Pv_i \cdot V_i$ son los ingresos íntegros por ventas (precio unitario por volumen de unidades vendidas).
- $mp_i$ es el gasto en consumo de materias primas.
- $mo_i$ es el coste de mano de obra directa de explotación.
- $gg_i$ representa el resto de gastos generales y operativos de fabricación y comercialización.

### Incorporación del Impuesto sobre Sociedades y el Escudo Fiscal

La empresa tributa en el Impuesto sobre Sociedades a un tipo legal impositivo $t_c$ sobre su base imponible. Para determinar la base imponible del ejercicio se deduce del resultado operativo la **Cuota de Amortización Fiscal del Inmovilizado ($CAF_i$)**:

$$\text{Base Imponible} = Q_i^{\text{ai}} - CAF_i$$

La cuota líquida a ingresar a la Hacienda Pública es:

$$\text{Impuesto sobre Sociedades} = (Q_i^{\text{ai}} - CAF_i) \times t_c$$

Restando la cuota tributaria del flujo de explotación antes de impuestos, obtenemos el **Flujo de Operaciones después de impuestos de renta ($Q_i^{\text{di}}\text{ renta}$)**:

$$Q_i^{\text{di}}\text{ renta} = Q_i^{\text{ai}} - (Q_i^{\text{ai}} - CAF_i) \times t_c = Q_i^{\text{ai}} \times (1 - t_c) + CAF_i \times t_c$$

Esta ecuación desglosa con exactitud matemática los dos componentes de la renta operativa:
1. $Q_i^{\text{ai}} \times (1 - t_c)$: El flujo de explotación neto de gravamen.
2. $CAF_i \times t_c$: El **escudo fiscal de las amortizaciones (*Depreciation Tax Shield*)**. Como la amortización reduce la base imponible sin exigir una salida física de caja, genera un ahorro fiscal neto directo igual al gasto contable multiplicado por el tipo impositivo.

### Conversión de magnitudes de renta a magnitudes de tesorería

En la práctica empresarial, la renta no coincide con la tesorería debido al desfase de cobros y pagos:
- Cobros de clientes: $\text{Cobros}_{t} = \text{Ventas}_{t} + \text{Clientes}_{t-1} - \text{Clientes}_{t} = \text{Ventas}_{t} - \Delta \text{Clientes}_{t}$.
- Pagos a proveedores: $\text{Pagos}_{t} = \text{Costes}_{t} + \text{Existencias}_{t} - \text{Existencias}_{t-1} - (\text{Proveedores}_{t} - \text{Proveedores}_{t-1}) = \text{Costes}_{t} + \Delta \text{Existencias}_{t} - \Delta \text{Proveedores}_{t}$.

Agrupando algebraicamente ambas diferencias, la brecha entre el devengo contable y la caja efectiva queda exactamente corregida mediante la variación del fondo de maniobra:

$$\text{Flujo de Tesorería Operativo} = Q_i^{\text{di}}\text{ renta} - \Delta \text{FM}_i$$

Sustituyendo la expresión anterior, obtenemos la **fórmula maestra del Flujo de Caja Operativo después de impuestos**:

$$Q_i^{\text{di}} = Q_i^{\text{ai}} \times (1 - t_c) + CAF_i \times t_c - \Delta \text{FM}_i$$


## Liquidación del Valor Residual tras Impuestos

Al término de la vida útil del proyecto ($t=n$), la empresa desmantela o liquida la inversión. El **Valor Residual después de impuestos ($VR_n^{\text{di}}$)** comprende la liquidación del inmovilizado y la recuperación del circulante:

$$VR_n^{\text{di}} = VR_n^{\text{di}}(\text{AF}) + VR_n^{\text{di}}(\text{FM})$$

### 1. Valor residual de la venta del activo fijo ($VR_n^{\text{di}}\text{ AF}$)

Cuando la empresa vende su maquinaria o instalaciones en el mercado secundario al precio de venta pactado ($VR_n^{\text{ai}}\text{ AF}$), debe liquidar la plusvalía o minusvalía contable y fiscal generada frente a su **Valor Neto Contable ($\text{VNC}_n$)**:

$$\text{VNC}_n = \text{Coste de Adquisición} - \sum_{t=1}^{n} CAF_t$$

Se compara el precio de venta con el valor contable en libros:
- Si el precio de realización supera el valor neto contable ($VR_n^{\text{ai}}\text{ AF} > \text{VNC}_n$), la empresa obtiene un **beneficio extraordinario o plusvalía fiscal**, que incrementa la base imponible y exige tributar una fracción $t_c$:

$$\text{Impuesto sobre plusvalía} = (VR_n^{\text{ai}}\text{ AF} - \text{VNC}_n) \times t_c$$

- Si el precio de realización es inferior al valor neto contable ($VR_n^{\text{ai}}\text{ AF} < \text{VNC}_n$), la empresa sufre una **pérdida patrimonial o minusvalía contable**, lo que genera un crédito fiscal (ahorro impositivo) al compensarse con otros beneficios de la compañía.

Por tanto, el flujo de tesorería neto generado por la venta del activo fijo responde a la expresión general:

$$VR_n^{\text{di}}(\text{AF}) = VR_n^{\text{ai}}(\text{AF}) - t_c \times \left( VR_n^{\text{ai}}(\text{AF}) - \text{VNC}_n \right)$$

### 2. Valor residual derivado de la recuperación del circulante ($VR_n^{\text{di}}\text{ FM}$)

El fondo de maniobra operativo acumulado en el año $n$ ($\text{FM}_n$) se desmoviliza al liquidar existencias y cobrar a clientes:
- En condiciones estándar de solvencia, se recupera el 100% de su valor contable: $VR_n^{\text{di}}(\text{FM}) = \text{FM}_n$.
- Si parte de los créditos a clientes devienen morosos o las existencias obsoletas deben liquidarse a precio de saldo con pérdidas frente a balance, la minusvalía fiscal generará el correspondiente ajuste tributario deducible.


## Proyectos con Vidas Útiles Diferentes: Coste Anual Equivalente (CAE)

Una de las decisiones más habituales y comprometidas en la gestión industrial consiste en elegir entre dos tecnologías o equipos mecánicos que prestan idéntico servicio pero poseen duraciones temporales y estructuras de costes dispares (por ejemplo, elegir entre un equipo barato que dura 3 años y un equipo tecnológicamente avanzado que dura 7 años).

### El fallo del VAN directo

Si dos proyectos prestan el mismo servicio productivo y la empresa planea reemplazarlos de forma indefinida a su vencimiento, **comparar directamente el VAN de ambos equipos conduce a decisiones erróneas**.

El equipo que dura 7 años mostrará un valor actual de costes superior simplemente porque opera durante cuatro años más que el equipo de 3 años. No obstante, al término del tercer año del equipo corto, la empresa no se quedará sin máquina: adquirirá otro equipo idéntico, incurriendo en nuevos costes sucesivos.

### Metodología del Coste Anual Equivalente (CAE)

Para resolver este desfase temporal y comparar equipos sobre bases homogéneas se utiliza el **Coste Anual Equivalente (CAE)** (Brealey et al., 2023, cap. 6; Diapositivas UGR Tema 4, diapositivas 41 a 51):

1. **Cálculo del Valor Actual de los Costes:**
   Se calcula el valor actual de todos los desembolsos de adquisición y de los costes operativos y de mantenimiento proyectados a lo largo de su vida útil $n$, descontados al coste de oportunidad del capital $r$:

$$\text{VA(Costes)} = I_0 + \sum_{t=1}^{n} \frac{\text{Coste Operativo}_t}{(1+r)^t} - \frac{VR_n}{(1+r)^n}$$

2. **Deducción de la Anualidad Equivalente:**
   Se transforma ese valor actual total en una renta o cuota constante anual ($C$) pagadera durante los $n$ años de vida útil del activo, utilizando el factor de anualidad $a_{\overline{n}|r}$:

$$\text{VA(Costes)} = \text{CAE} \times \left[ \frac{1 - (1+r)^{-n}}{r} \right] = \text{CAE} \times a_{\overline{n}|r}$$

Despejando el Coste Anual Equivalente:

$$\text{CAE} = \frac{\text{VA(Costes)}}{a_{\overline{n}|r}} = \frac{\text{VA(Costes)}}{\frac{1 - (1+r)^{-n}}{r}}$$

**Regla de decisión:** La empresa debe elegir aquella máquina o tecnología que ofrezca el **menor Coste Anual Equivalente (CAE)**, ya que minimiza el coste medio anual por año de servicio prestado a perpetuidad.

### Regla para el momento óptimo de reemplazo de un equipo en funcionamiento

El método del CAE resuelve con idéntica elegancia la decisión de cuándo debe sustituirse una máquina vieja que todavía funciona por un nuevo modelo más moderno:
- La máquina antigua presenta costes crecientes de averías y mantenimiento año tras año, y su valor de reventa cae con el tiempo.
- Se evalúa el **coste marginal de mantener la máquina vieja durante un año más** (costes operativos del próximo ejercicio más la pérdida de valor de mercado que sufrirá durante el año).
- **Regla óptima de reemplazo:** Debe continuarse utilizando la máquina antigua mientras el coste marginal de mantenerla un año más sea estrictamente inferior al CAE del equipo nuevo. En el momento en que el coste anual de la máquina existente supere el CAE de la nueva, la empresa debe enajenar de inmediato el equipo viejo e instalar el nuevo.
