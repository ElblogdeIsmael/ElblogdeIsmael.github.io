# Casos cuantitativos resueltos y formulario maestro

\epigrafe{Las ecuaciones empresariales no sustituyen al juicio estratégico, pero detectan en cinco minutos si un relato atractivo es aritméticamente imposible.}{Apéndice cuantitativo de Creación de Empresas}

Este capítulo concentra en un solo lugar las ecuaciones clave de la asignatura junto con cinco supuestos resueltos paso a paso al nivel exigido en las pruebas evaluables y en la defensa del Plan de Empresa.

## Formulario maestro de Creación de Empresas

| Bloque analítico | Ecuación operativa | Criterio de interpretación rápida |
| :--- | :--- | :--- |
| Coste de Captación | $\text{CAC} = \dfrac{\text{Gasto Marketing} + \text{Ventas}}{\text{Nuevos clientes de pago}}$ | Debe recuperarse con margen bruto en $\le 12$ meses. |
| Valor de Vida (LTV) | $\text{LTV} = \dfrac{\text{ARPA} \times \text{Margen Bruto (\%)}}{\text{Churn mensual}}$ | Exigir $\text{LTV} / \text{CAC} \ge 3$ en modelos escalables. |
| Punto Muerto (unidades) | $Q^* = \dfrac{CF}{p - CV_u}$ | Unidades sin IVA necesarias para beneficio contable nulo. |
| Punto Muerto (ventas €) | $V^* = \dfrac{CF}{1 - CV_u / p}$ | Facturación mínima de equilibrio antes de impuestos. |
| Umbral *Make vs. Buy* | $Q_{\text{indif}} = \dfrac{CF_{\text{nuevo}}}{P_{\text{ext}} - CV_u}$ | Si $Q < Q_{\text{indif}}$, conviene subcontratar al proveedor externo. |
| Coste Laboral (2026) | $C_{\text{emp}} = \text{Bruto} \times (1 + 0,3065 + t_{\text{AT/EP}})$ | Incluye 23,60\% CC + 5,50\% Desemp. + 0,20\% FOGASA + 0,60\% FP + **0,75\% MEI** + AT/EP. |
| Neto Trabajador (2026) | $\text{Neto} = \text{Bruto} \times (1 - 0,0650 - t_{\text{IRPF}})$ | Incluye 4,70\% CC + 1,55\% Desemp. + 0,10\% FP + **0,15\% MEI** + retención IRPF. |
| Dilución en Ronda | $\%_{\text{inv}} = \dfrac{I}{V_{\text{pre}} + I}$ | El socio previo reduce su cuota al multiplicar por $(1 - \%_{\text{inv}})$. |
| Rentabilidad Dinámica | $\text{VAN} = -A + \sum_{t=1}^n \dfrac{Q_t}{(1+k)^t}$ | Proyecto viable si $\text{VAN} > 0$ y $\text{TIR} > k$. |

## Supuesto 1: Coste Laboral Total frente a Salario Neto (2026)

**Enunciado:** Una startup granadina de desarrollo SaaS contrata con contrato indefinido a un graduado en Ingeniería Informática pactando un **salario bruto anual de 32.000 euros** en 12 pagas. Suponga un tipo medio de retención en IRPF del $16,5\%$ y un tipo de tarifa de Accidentes de Trabajo y Enfermedades Profesionales (CNAE servicios de programación informática) del $t_{\text{AT/EP}} = 1,00\%$. Calcule el salario neto mensual que recibe el trabajador en su cuenta bancaria y el **coste laboral real mensual y anual** para la empresa conforme a las cotizaciones de 2026.

**Resolución paso a paso:**

1. **Salario bruto mensual:**
   $$\text{Bruto}_{\text{mes}} = \frac{32.000}{12} = 2.666,67\,\text{€/mes}$$

2. **Deducciones al trabajador (Régimen General 2026 + IRPF):**
   - Cotización del trabajador: $4,70\%\text{ (CC)} + 1,55\%\text{ (Desempleo)} + 0,10\%\text{ (FP)} + 0,15\%\text{ (MEI 2026)} = 6,50\%$.
   - Descuento Seguridad Social mensual: $2.666,67 \times 0,0650 = 173,33\,\text{€/mes}$.
   - Retención IRPF mensual: $2.666,67 \times 0,1650 = 440,00\,\text{€/mes}$.
   - **Salario neto mensual percibido en banco:**
     $$\text{Neto}_{\text{mes}} = 2.666,67 - 173,33 - 440,00 = \mathbf{2.053,34\,\text{€/mes}} \quad (24.640,00\,\text{€/año})$$

3. **Cotización empresarial y Coste Laboral Total (2026):**
   - Cuota empresarial total: $23,60\%\text{ (CC)} + 5,50\%\text{ (Desempleo indef.)} + 0,20\%\text{ (FOGASA)} + 0,60\%\text{ (FP)} + 0,75\%\text{ (MEI 2026)} + 1,00\%\text{ (AT/EP)} = \mathbf{31,65\%}$.
   - Seguridad Social mensual a cargo de la empresa: $2.666,67 \times 0,3165 = 844,00\,\text{€/mes}$.
   - **Coste Laboral Total para la sociedad:**
     $$C_{\text{mes}} = 2.666,67 + 844,00 = \mathbf{3.510,67\,\text{€/mes}} \qquad C_{\text{anual}} = 32.000 \times 1,3165 = \mathbf{42.128,00\,\text{€/año}}$$

**Lectura empresarial:** entre lo que cobra limpio el ingeniero al mes (`2.053,34 €`) y lo que debe generar en caja la empresa solo para pagar su puesto (`3.510,67 €`) existe una brecha de **1.457,33 € mensuales** (`+70,97%` sobre el neto recibido). Presupuestar solo el salario bruto omitiría `10.128 €` anuales por cada trabajador.

## Supuesto 2: Punto Muerto, margen de seguridad y *Make vs. Buy*

**Enunciado:** Un equipo lanza una plataforma de analítica para clínicas dentales a un precio de suscripción de **90 €/mes** (sin IVA). Los costes fijos mensuales suman **7.800 €/mes** (dos sueldos técnicos con SS, oficina en vivero y gestoría). Cada clínica conectada genera un coste variable de **12 €/mes** en infraestructura cloud, APIs SMS de recordatorio y comisión de pasarela de pago.

1. ¿Cuántas clínicas activas necesita para alcanzar el punto muerto económico mensual?
2. Si el objetivo anual estable de año 2 es mantener **145 clínicas activas**, ¿cuál es su margen de seguridad porcentual?
3. Un proveedor ofrece automatizar toda la mensajería y gestión documental cobrando **2.100 €/mes fijos** pero reduciendo el coste variable unitario por clínica de 12 € a **4 €**. ¿A partir de cuántas clínicas compensa contratar esa integración?

**Resolución paso a paso:**

1. **Margen de contribución unitario:** $M_u = 90 - 12 = 78\,\text{€/clínica·mes}$.
   **Punto Muerto mensual:**
   $$Q^* = \frac{7.800}{78} = \mathbf{100\text{ clínicas activas}} \qquad (V^* = 100 \times 90 = 9.000\,\text{€/mes})$$

2. **Margen de seguridad con 145 clínicas:**
   $$\text{MS} = \frac{145 - 100}{145} \times 100 = \mathbf{31,03\%}$$
   Sus ingresos podrían caer hasta un 31\% antes de entrar en pérdidas operativas.

3. **Umbral de indiferencia de la automatización (*Make vs. Buy*):** ahorrar `8 €/clínica·mes` cuesta `2.100 €/mes` fijos adicionales.
   $$Q_{\text{indif}} = \frac{2.100}{12 - 4} = \frac{2.100}{8} = \mathbf{262,5 \approx 263\text{ clínicas}}$$
   Con 100 o 145 clínicas no compensa asumir ese fijo (`145 x 8 = 1.160 €` de ahorro frente a `2.100 €` de cuota); solo conviene contratarlo al superar 263 clientes activos.

## Supuesto 3: "Morir de éxito" — Beneficio contable frente a Tesorería

**Enunciado:** Una consultora tecnológica B2B empieza el Mes 1 con **15.000 € de tesorería inicial** aportados por los socios. Compra en el Mes 1 ordenadores por **9.000 €** al contado (amortizables contablemente a 36 meses: `250 €/mes`). Tiene gastos operativos fijos pagados al contado cada mes de **6.000 €** (salarios, alquiler, cloud). Factura servicios mensuales crecientes a grandes empresas que pagan estrictamente a **60 días (2 meses después)**: Mes 1 factura `5.000 €`, Mes 2 factura `8.000 €`, Mes 3 factura `12.000 €`, Mes 4 factura `16.000 €`. Compare la viabilidad económica (PyG) frente a la viabilidad financiera (Tesorería) mes a mes (prescindiendo de IVA e IS por sencillez didáctica).

**Resolución paso a paso:**

| Concepto mensual (€) | Mes 1 | Mes 2 | Mes 3 | Mes 4 |
| :--- | ---: | ---: | ---: | ---: |
| Ingresos devengados (facturas emitidas) | 5.000 | 8.000 | 12.000 | 16.000 |
| Gastos fijos operativos | $-6.000$ | $-6.000$ | $-6.000$ | $-6.000$ |
| Amortización equipos (`9.000 / 36`) | $-250$ | $-250$ | $-250$ | $-250$ |
| **Resultado económico mensual (PyG)** | **$-1.250$** | **$+1.750$** | **$+5.750$** | **$+9.750$** |
| **Beneficio económico acumulado** | **$-1.250$** | **$+500$** | **$+6.250$** | **$+16.000$** |
| Cobros reales en banco (a 60 días) | $0$ | $0$ | $+5.000$ | $+8.000$ |
| Pagos operativos mensuales | $-6.000$ | $-6.000$ | $-6.000$ | $-6.000$ |
| Pago inversión equipos (contado Mes 1) | $-9.000$ | $0$ | $0$ | $0$ |
| Flujo neto de caja del mes | $-15.000$ | $-6.000$ | $-1.000$ | $+2.000$ |
| **Saldo final de Tesorería en banco** | **$0$** | **$-6.000$** | **$-7.000$** | **$-5.000$** |

**Conclusión de examen:** En el Mes 3, la empresa acumula un brillante beneficio contable de **$+6.250\,\text{€}$** (viabilidad económica demostrada), pero su cuenta bancaria marca **$-7.000\,\text{€}$** desde el Mes 2 porque compró el inmovilizado al contado y espera 60 días para cobrar sus ventas. Sin una aportación mayor de circulante inicial (al menos `22.000 €`), una póliza de crédito o pago por *renting* de los equipos, la empresa quiebra antes de cobrar su mejor mes.

## Supuesto 4: Ronda Semilla, dilución de socios y *LTV/CAC*

**Enunciado:** Dos cofundadores poseen el 50\% cada uno de su S.L. Captan una ronda semilla de **150.000 €** de un grupo de *Business Angels* con una valoración *pre-money* acordada de **600.000 €**. Paralelamente, la aplicación cobra `29 €/mes` con un margen bruto del $80\%$, sufre un abandono (*churn*) mensual del $4\%$ y el coste completo de adquirir cada cliente de pago es `CAC = 120 €`. Calcule la nueva tabla de capitalización (*cap table*) y verifique si la economía unitaria justifica invertir esa ronda en acelerar marketing.

**Resolución paso a paso:**

1. **Valoración *post-money* y participación tras la ronda:**
   $$V_{\text{post}} = 600.000 + 150.000 = \mathbf{750.000\,\text{€}}$$
   $$\%\,\text{Inversores} = \frac{150.000}{750.000} = \mathbf{20,0\%}$$
   $$\%\,\text{Cada fundador} = 50\% \times (1 - 0,20) = \mathbf{40,0\%}$$

2. **Auditoría de economía unitaria (*Unit Economics*):**
   $$\text{Margen bruto mensual por cliente} = 29 \times 0,80 = 23,20\,\text{€/mes}$$
   $$\text{LTV} = \frac{23,20}{0,04} = \mathbf{580,00\,\text{€}}$$
   $$\text{Ratio } \frac{\text{LTV}}{\text{CAC}} = \frac{580}{120} = \mathbf{4,83} \quad (> 3) \qquad \text{Payback del CAC} = \frac{120}{23,20} = \mathbf{5,17\text{ meses}} \quad (\le 12)$$

**Interpretación:** La ronda diluye a cada fundador del 50\% al 40\%, pero deja la compañía capitalizada con métricas comerciales muy sanas (`LTV/CAC = 4,83` y recuperación de caja en poco más de cinco meses), justificando escalar presupuesto de captación mientras se vigile que el `CAC` no se dispare al agotar los canales iniciales.

## Supuesto 5: Auditoría integrada sobre el caso SokraKids

**Enunciado:** Un primer borrador del proyecto educativo **SokraKids** plantea suscripción familiar de `6,99 €/mes` para niños de 6 a 12 años, captación exclusivamente mediante anuncios pagados en redes sociales (`CAC = 45 €`), soporte telefónico personalizado diario para familias y desarrollo de 40 videojuegos propios antes de lanzar al mercado. Identifique mediante el Círculo Virtuoso y las Cuatro Viabilidades los tres fallos estructurales del diseño inicial y formule su corrección estratégica.

**Diagnóstico de solución:**

1. **Ruptura del Círculo Virtuoso y economía unitaria (Viabilidad Comercial/Económica):** con margen neto mensual aproximado de `5,50 €/mes` tras comisiones de tienda móvil (Apple/Google ~15--30\%), un `CAC = 45 €` exige más de 8 meses de permanencia solo para empatar el gasto publicitario sin contar soporte telefónico ni desarrollo. **Corrección:** sustituir soporte telefónico costoso por autoservicio automatizado e informes semanales por correo; incorporar canal B2B2C con colegios/AMPAs que agrupan decenas de familias con menor `CAC` y plan anual anticipado (`59 €/año`) que adelanta la caja.
2. **Desalineación de Viabilidad Técnica y Lean Startup:** construir 40 videojuegos antes de lanzar quema caja durante un año entero sin aprendizaje validado (*sobreingeniería prematura*). **Corrección:** lanzar un MVP con una única colección modular de retos semanales guiados en formato sencillo, medir retención a 30 días de 50 familias reales y ampliar contenido solo sobre mecánicas que demuestren uso continuo.
3. **Problema de comprador frente a usuario:** vender gamificación al niño olvida que quien paga es el padre preocupado por el tiempo de pantalla y la seguridad. **Corrección:** reposicionar el Mensaje de Valor hacia "15 minutos al día de razonamiento lógico sin publicidad ni adicción" con control parental transparente.
