# Formulario 

$$
	\text{nivel de endeudamiento} = \frac{PC + PNC}{PN}
$$

Para calcular el **coste de la financiación no propia** (también conocido como coste del pasivo o coste del endeudamiento), se utiliza la siguiente fórmula financiera:

$$\text{Coste de Financiación No Propia} = \frac{\text{Gastos Financieros}}{\text{Pasivo Total (Exigible)}}$$


$$RF = RE + L(RE - k)$$

*¿Qué es cada variable?*

* **$RF$ (Rentabilidad Financiera):** Es la rentabilidad de los accionistas o socios. Lo que ganan por cada euro que han puesto de su bolsillo.
* **$RE$ (Rentabilidad Económica):** Es el rendimiento bruto de los activos (las inversiones) de la empresa, independientemente de cómo se hayan financiado.
* **$L$ (Leverage o Apalancamiento):** Es tu nivel de endeudamiento (Pasivo / Patrimonio Neto). Mide cuánta deuda usas en proporción a tu propio dinero.
* **$(RE - k)$:** Este es el famoso diferencial o margen de apalancamiento.
* k: es el coste medio de endeudamiento.

La fórmula fundamental que relaciona las tres magnitudes y que cuadra la liquidez de la empresa es:

$$FM = NOF + RLN$$

A partir de esta ecuación principal, se puede despejar la variable que necesites según lo que estés analizando. Las dos variantes más útiles son:

* **Para calcular el dinero en caja (Recursos Líquidos Netos):**

$$RLN = FM - NOF$$

*(La lógica: Al dinero de tu colchón de seguridad a largo plazo le restas el dinero que necesitas inyectar en el día a día. Lo que sobra es tu liquidez real).*
* **Para calcular las necesidades operativas (NOF):**

$$NOF = FM - RLN$$

## Rentabilidades

### 1. Rentabilidad Económica (RE) o ROA

Responde a la pregunta: ***¿Cuánto dinero genera el negocio por sí mismo, independientemente de cómo se haya financiado?*** Mide la eficiencia de los activos de la empresa. En tu caso práctico se divide en dos enfoques:

**A) Rentabilidad Económica Global (o Total):**
Toma en cuenta toda la empresa en su conjunto.


$$RE = \frac{\text{Beneficio Antes de Intereses e Impuestos (BAII)}}{\text{Activo Total}}$$

**B) Rentabilidad Económica de Explotación:**
Se centra puramente en la actividad principal del negocio (vender perfumes, en este caso), descartando activos financieros o inversiones ajenas a la actividad.


$$RE_{Explotación} = \frac{\text{Resultado Neto de Explotación}}{\text{Activo de Explotación}}$$

**C) El Desglose (Ecuación de DuPont para la RE):**
Como vimos en algunas preguntas tipo test, la Rentabilidad Económica se puede mejorar subiendo los precios (Margen) o vendiendo más rápido (Rotación). Matemáticamente se desglosa así:


$$RE = \text{Margen de Explotación} \times \text{Rotación del Activo}$$

Donde sus sub-fórmulas son:

* $$\text{Margen} = \frac{\text{Resultado de Explotación}}{\text{Ventas}}$$


* $$\text{Rotación} = \frac{\text{Ventas}}{\text{Activo}}$$





### 2. Rentabilidad Financiera (RF) o ROE

Responde a la pregunta: ***¿Qué porcentaje de ganancia se llevan los dueños o accionistas por el dinero que han puesto de su bolsillo?***

Mide el rendimiento del capital propio. Tienes dos formas de calcularla dependiendo de los datos que tengas en el examen:

**A) La Fórmula Contable (Directa):**
Es la más rápida si tienes delante el Balance y la Cuenta de Pérdidas y Ganancias. Utiliza el beneficio final, una vez que ya se han pagado los intereses al banco y los impuestos a Hacienda.


$$RF = \frac{\text{Resultado del Ejercicio (Beneficio Neto)}}{\text{Patrimonio Neto}}$$

**B) La Fórmula Analítica (Con Apalancamiento):**
Es la fórmula que tenías en tus apuntes y la más importante para analizar *por qué* ha subido o bajado la rentabilidad de los socios. Relaciona la Rentabilidad Económica ($RE$), el nivel de endeudamiento ($L$) y el coste de la deuda ($k$).


$$RF = RE + L(RE - k)$$

*Nota analítica: Esta fórmula teórica asume un escenario sin impuestos para entender el efecto palanca. Si en un ejercicio te piden ser extremadamente preciso e incluir el pago de impuestos de Sociedades (donde $t$ es el tipo impositivo), la fórmula completa sería: $RF = [RE + L(RE - k)] \times (1 - t)$.*

### Cálculo del activo neto de la explotación

$$ \text{Activo de la Explotación} = \text{Activo Total} - \text{Activos Extrafuncionales} $$

Un **activo extrafuncional** (también conocido como activo no operativo o activo ajeno a la explotación) es cualquier bien, derecho o inversión que posee una empresa pero que **no es necesario para desarrollar su actividad principal**.

En otras palabras: son cosas que la empresa tiene en su balance, a menudo para sacarles una rentabilidad extra o guardar dinero, pero que si mañana se vendieran, el negocio del día a día (fabricar, vender o prestar servicios) seguiría funcionando exactamente igual sin notar su ausencia.

### Ejemplos clásicos de activos extrafuncionales

1. **Inversiones Inmobiliarias:** Imagina una empresa que fabrica zapatos (su negocio principal) pero que con los beneficios de años anteriores compró un local comercial en el centro de la ciudad y lo tiene alquilado a una cafetería. Ese local le genera ingresos por las rentas, pero no tiene nada que ver con fabricar o vender zapatos.
2. **Inversiones Financieras:** La compra de acciones de otras empresas, bonos del Estado o fondos de inversión. Generan dividendos o intereses, pero no participan en el ciclo productivo de la empresa.
3. **Excedentes de Tesorería:** Una cuenta bancaria con 500.000 € ahorrados, cuando la empresa solo necesita 50.000 € al mes para pagar nóminas, impuestos y proveedores. Esos 450.000 € restantes son "caja ociosa" o extrafuncional.
4. **Activos ociosos o paralizados:** Una máquina antigua o un terreno vacío que la empresa ya no utiliza para su actividad pero que todavía no ha vendido. Al no aportar nada al ciclo productivo actual, dejan de ser funcionales.

% Sección añadida en formato LaTeX
\section*{MODELOS NORMALES DE BALANCE, CUENTA DE PÉRDIDAS Y GANANCIAS Y ESTADO DE FLUJOS DE EFECTIVO}

\subsection*{Indicadores financieros — Descripción y partidas que lo componen}

\begin{description}
\item[Grado de envejecimiento activo]
Fórmula: $$\displaystyle \frac{\text{Total amortización acumulada}}{\text{Inmovilizado material e intangible brutos}}$$
Partidas: Total Amortización Acumulada (dato de la memoria) / (Inm. material neto + Amort. Acum. Inmov. material + Inm. intangible neto + Amort. Acum. Intangible)

\item[Nivel de endeudamiento]
Fórmula: $$\displaystyle \frac{\text{Total Pasivo}}{\text{Patrimonio Neto}}$$
Partidas: (Pasivo no corriente + Pasivo corriente) / Patrimonio neto

\item[Composición del endeudamiento]
Fórmula: $$\displaystyle \frac{\text{Pasivo no corriente}}{\text{Pasivo corriente}}$$
Partidas: Pasivo no corriente / Pasivo corriente

\item[Garantía]
Fórmula: $$\displaystyle \frac{\text{Total activo}}{\text{Pasivo total}}$$
Partidas: Activo total / (Pasivo corriente + Pasivo no corriente)

\item[Solvencia]
Fórmula: $$\displaystyle \frac{\text{Activo corriente}}{\text{Pasivo corriente}}$$
Partidas: Activo corriente / Pasivo corriente

\item[Fondo de Maniobra]
Fórmula: $$\text{Fondo de Maniobra} = \text{Activo corriente} - \text{Pasivo corriente}$$
Partidas: Activo corriente - Pasivo corriente

\item[Necesidades Operativas de Financiación (NOF)]
Fórmula: $$\text{NOF} = \text{Activo corriente de explotación} - \text{Pasivo corriente de explotación}$$
Partidas: Existencias + Deudores comerciales + Periodificaciones de activo - Provisiones a corto plazo - Acreedores comerciales - Periodificaciones de pasivo

\item[Recursos Líquidos Netos (RLN)]
Fórmula: $$\text{RLN} = \text{Activo corriente financiero} - \text{Pasivo corriente no comercial}$$
Partidas: Activos no corrientes mantenidos para la venta + Inversiones en empresas del grupo y asociadas a corto plazo + Inversiones financieras a corto plazo + Efectivo - Pasivos no corrientes vinculados con activos no corrientes mantenidos para la venta - Deudas a corto plazo - Deudas con empresas del grupo y asociadas a corto plazo - Deuda con características especiales a corto plazo

\item[Fondos Generados por Operaciones (FGO) antes de Intereses e Impuestos]
Nota: Dato obtenido del EFE (Estado de Flujos de Efectivo).
Fórmula: Resultado antes de impuestos - Ingresos (no relacionados con la explotación) + Gastos (no relacionados con la explotación)
Partidas (EFE): 1. Resultado del ejercicio antes de impuestos + 2. Ajustes del resultado

\item[Fondos Generados por Operaciones (FGO)]
Nota: Dato obtenido del EFE.
Partidas (EFE): 1. Resultado del ejercicio antes de impuestos + 2. Ajustes del resultado + 4. Otros flujos de efectivo de las actividades de explotación

\item[Flujos de Efectivo de las Actividades de Explotación (FEAE)]
Nota: Dato obtenido del EFE.
Partidas (EFE): 1. Resultado del ejercicio antes de impuestos + 2. Ajustes del resultado + 4. Otros flujos de efectivo de las actividades de explotación + 3. Cambios en el capital corriente

\item[FGO antes de Intereses e Impuestos (cuando no se dispone del EFE) — calculado con PyG funcional]
Fórmula: Resultado antes de impuestos - Ingresos (no relacionados con la explotación) + Gastos (no relacionados con la explotación)
Equivalente: Resultado bruto de explotación

\item[Fondos Generados por Operaciones (FGO) (calculado con PyG funcional)]
Fórmula: FGO antes Intereses e Impuestos + Ingresos financieros - Gastos financieros $\pm$ Otros resultados - Impuesto sobre beneficio
Desglose alternativo: RESULTADO DEL EJERCICIO + Amortización inmovilizado + Deterioros y variación provisiones $\pm$ Diferencias de cambio $\pm$ Variación valor razonable en instrumentos financieros – Imputación de subvenciones de inmovilizado no financiero y otras – Exceso de provisiones $\pm$ Deterioro y resultados por enajenaciones de inmovilizado $\pm$ Deterioro y resultados por enajenaciones de instrumentos financieros
O bien: RESULTADO BRUTO EXPLOTACIÓN + Ingresos financieros - Gastos financieros $\pm$ Otros resultados - Impuesto sobre beneficio

\item[FEAE (cuando no se dispone del EFE)]
Fórmula: FGO - Variación NOF

\item[Capacidad de devolución deuda c/p (con FGO antes Intereses e Impuestos)]
Fórmula: $$\displaystyle \frac{\text{FGO antes Int. e Imp.}}{\text{Pasivo corriente no comercial}}$$
Definición extendida: FGO antes Int. e Imp. / (Pasivos vinculados con activos no correntes mantenidos para la venta + Deudas a corto plazo + Deudas con empresas del grupo y asociadas a corto plazo + Deuda con características especiales a corto plazo)

\item[Capacidad de devolución deuda c/p (con FGO)]
Fórmula: $$\displaystyle \frac{\text{FGO}}{\text{Pasivo corriente no comercial}}$$
Denominador ampliado: FGO / (Pasivos vinculados con activos no correntes mantenidos para la venta + Deudas a corto plazo + Deudas con empresas del grupo y asociadas a corto plazo + Deuda con características especiales a corto plazo)

\item[Capacidad de devolución deuda c/p (con FEAE)]
Fórmula: $$\displaystyle \frac{\text{FEAE}}{\text{Pasivo corriente no comercial}}$$
Denominador ampliado: FEAE /(Pasivos vinculados con activos no correntes mantenidos para la venta + Deudas a corto plazo + Deudas con empresas del grupo y asociadas a corto plazo + Deuda con características especiales a corto plazo)

\item[Capacidad de devolución deuda total (con FGO antes Intereses e Impuestos)]
Fórmula: $$\displaystyle \frac{\text{FGO antes Int. e Imp.}}{\text{Total Pasivo no comercial}}$$
Denominador detallado: Deudas a largo plazo + Deudas con empresas del grupo y asociadas a largo plazo + Deuda con características especiales a largo plazo + Pasivos vinculados con activos no corrientes mantenidos para la venta + Deudas a corto plazo + Deudas con empresas del grupo y asociadas a corto plazo + Deuda con características especiales a corto plazo

\item[Capacidad de devolución deuda total (con FGO)]
Fórmula: $$\displaystyle \frac{\text{FGO}}{\text{Total Pasivo no comercial}}$$
Denominador: (ver elemento anterior)

\item[Capacidad de devolución deuda total (con FEAE)]
Fórmula: $$\displaystyle \frac{\text{FEAE}}{\text{Total Pasivo no comercial}}$$
Denominador: (ver elemento anterior)

\item[Tiempo de devolución deuda total (FGO) en días]
Fórmula: $$\displaystyle \frac{\text{Total pasivo no comercial}}{\text{FGO}}\times 360$$

\item[Tiempo de devolución deuda total (FEAE) en días]
Fórmula: $$\displaystyle \frac{\text{Total pasivo no comercial}}{\text{FEAE}}\times 360$$

\item[Subperiodo de almacenamiento]
Fórmula: $$\displaystyle \frac{\text{Saldo final materias primas}}{\text{Consumo de materias primas}}\times 360$$

\item[Subperiodo de fabricación]
Fórmula: $$\displaystyle \frac{\text{Saldo final productos en curso}}{\text{Coste de la producción terminada}}\times 360$$
Coste producción terminada aproximado: Consumo materias primas + Trabajos realizados por otras empresas + Sueldos, salarios y asimilados + Cargas sociales + Servicios exteriores + Otros gastos de gestión corriente + Gastos por emisión de gases de efecto invernadero + Amortización - Variación existencias productos en curso

\item[Subperiodo de venta (empresa industrial + comercial)]
Fórmula: $$\displaystyle \frac{\text{Saldo final mercadería y productos terminados}}{\text{Total coste existencias vendidas}}\times 360$$
Denominador aproximado: (Coste producción terminada - Variación existencias productos terminados + Consumo de mercaderías)

\item[Subperiodo de venta (empresa industrial)]
Fórmula: $$\displaystyle \frac{\text{Saldo final productos terminados}}{\text{Coste producción vendida}}\times 360$$

\item[Subperiodo de venta (empresa comercial)]
Fórmula: $$\displaystyle \frac{\text{Saldo final mercaderías}}{\text{Consumo de mercaderías}}\times 360$$

\item[Subperiodo de cobro a clientes]
Fórmula: $$\displaystyle \frac{\text{Saldo final clientes totales}}{\text{Cobros por ventas y prestaciones de servicios}}\times 360$$
Estimación: (Total clientes (Clientes + clientes empresas del grupo - anticipos clientes ) / (Importe neto cifra negocios - Variación total clientes)) $\times$ 360

\item[Subperiodo de pago a proveedores]
Fórmula: $$\displaystyle \frac{\text{Saldo final proveedores totales}}{\text{Pagos por compras}}\times 360$$
Estimación: (Total proveedores (Proveedores + proveedores empresas del grupo - anticipos proveedores ) / (Consumo de mercaderías + Consumo materias primas + Trabajos realizados otras empresas + Variación existencias mercaderías + Variación existencias materias - Variación total proveedores)) $\times$ 360

\item[Subperiodo de pago a acreedores varios]
Fórmula: $$\displaystyle \frac{\text{Saldo final acreedores varios}}{\text{Pagos por servicios exteriores adquiridos}}\times 360$$
Estimación: Acreedores varios / (Servicios exteriores + Otros gastos de gestión corriente + Gastos por emisión de gastos de efecto invernadero + Variación periodificaciones activo - Variación acreedores varios) * 360
\end{description}

\subsection*{Indicadores económicos}
\begin{description}
\item[Rentabilidad económica de explotación]
	extit{(Calculada con la cuenta de PyG funcional)}
Fórmula: $$\displaystyle \frac{\text{Resultado neto explotación}}{\text{Activo de explotación (saldo final)}}$$
Activo de explotación: Inmovilizado intangible + Inmovilizado material + Activos por impuesto diferido + Deudas comerciales no corrientes + Existencias + Deudores comerciales y otras cuentas cobrar + Periodificaciones + Efectivo y otros activos líquidos equivalentes

\item[Margen de explotación]
	extit{(Calculado con la cuenta de PyG funcional)}
Fórmula: $$\displaystyle \frac{\text{Resultado neto de explotación}}{\text{Ingresos de explotación}}$$

\item[Rotación del activo de explotación]
	extit{(Calculado con la cuenta de PyG funcional)}
Fórmula: $$\displaystyle \frac{\text{Ingresos de explotación}}{\text{Activo de explotación (saldo final)}}$$

\item[Rentabilidad económica global o total]
	extit{(Calculado con la cuenta de PyG funcional)}
Fórmula: $$\displaystyle \frac{\text{Resultado antes de intereses e impuestos}}{\text{Activo total (saldo final)}}$$
Alternativa: (Resultado antes de impuestos + Gastos financieros) / Activo total

\item[Coste del endeudamiento]
	extit{(Calculado con la cuenta de PyG funcional)}
Fórmula: $$\displaystyle \frac{\text{Gastos financieros}}{\text{Pasivo total (saldo final)}}$$
Equivalente: Gastos financieros / (Pasivo no corriente + Pasivo corriente)

\item[Rentabilidad financiera (fórmula corta)]
Fórmula: $$\displaystyle \frac{\text{Resultado del ejercicio}}{\text{Fondos propios (saldo final)}}$$

\item[Coste financiación no propia]
Fórmula: $$\displaystyle \frac{\text{Gastos financieros}}{\text{Total financiación no propia (saldo final)}}$$
Denominador: (Patrimonio neto - Fondos propios + Pasivo no corriente + Pasivo corriente)

\item[Tasa impositiva efectiva]
Fórmula: $$\displaystyle \frac{\text{Impuesto sobre beneficio}}{\text{Resultado por operaciones continuadas antes de impuestos}}$$

\item[Efecto apalancamiento financiero]
Fórmula: $$(\text{Activo total} - \text{Fondos propios}) / \text{Fondos propios} \times (\text{Rentabilidad económica total} - \text{coste financiación no propia})$$

\item[Rentabilidad financiera (fórmula larga)]
Fórmula completa:
\noindent\resizebox{\linewidth}{!}{$\displaystyle
\begin{aligned}
RF &= \frac{\text{RE} + L\left(\text{RE} - k\right)}{1 - t} \\
L &= \frac{\text{TPN} - \text{FP}}{\text{FP}}
\end{aligned}
$}
Donde: RE = rentabilidad económica global; TPN = total patrimonio neto y pasivo; FP = fondos propios.

\end{description}

\subsection*{Ratios bursátiles}
\begin{description}
\item[Beneficio por acción]
Fórmula: $$\displaystyle \frac{\text{Beneficio neto}}{\text{Número de acciones}}$$

\item[Ratio precio-ganancia (PER)]
Fórmula: $$\displaystyle \frac{\text{Cotización}}{\text{Beneficio por acción}}$$

\item[Ratio precio-cash flow (PER-Cash flow)]
Fórmula: $$\displaystyle \frac{\text{Cotización}}{\text{Cash-flow por acción}}$$

\item[Rentabilidad por dividendo]
Fórmula: $$\displaystyle \frac{\text{Dividendo por acción}}{\text{Cotización}}$$

\item[Pay-out]
Fórmula: $$\displaystyle \frac{\text{Dividendo}}{\text{Beneficio neto}}$$
\end{description}



