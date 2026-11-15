# Tema 4: flujos de caja de un proyecto

## Ecuación general

$$VAN = -C_0^{di} + \sum_{i=1}^{n}\frac{Q_i^{di}}{(1+r)^i} + \frac{VR_n^{di}}{(1+r)^n}$$

## Inversión inicial

| Concepto | Fórmula |
| :--- | :--- |
| Antes de impuestos | Activo, más costes de instalación, transporte y puesta a punto, más $FM_0$ |
| Gasto deducible en $t=0$ (formación, puesta en marcha llevada a gastos) | Coste neto $= G_0(1-t_c)$, si la empresa tiene otros beneficios |
| Después de impuestos | $C_0^{di} = \text{activo} + FM_0 + G_0(1-t_c) + \text{costes de oportunidad}$ |
| Coste de oportunidad de un activo propio | Su valor de venta neto hoy (o el alquiler que se pierde cada año, restado de $Q^{ai}$) |
| Renovación: venta del equipo viejo | $\Delta C_0 = C_0^{\text{nuevo}} - \left[P_{\text{venta}} - (P_{\text{venta}} - VNC)\,t_c\right]$ |
| Costes hundidos | No se incluyen nunca |

## Amortización y valor contable

$$CAF = \frac{V_0 - VR_{\text{contable}}}{n_{\text{fiscal}}} \qquad\qquad VNC_t = V_0 - \sum_{i=1}^{t} CAF_i \qquad\qquad \text{Escudo fiscal} = CAF \times t_c$$

## Flujos de las operaciones

| Concepto | Fórmula |
| :--- | :--- |
| Antes de impuestos | $Q_i^{ai} = P_{v_i}V_i - (mp_i + mo_i + gg_i) = \text{ingresos} - \text{costes con salida de caja}$ |
| Impuesto | $(Q_i^{ai} - CAF_i)\,t_c$ |
| Después de impuestos (renta) | $Q_i^{di} = Q_i^{ai}(1-t_c) + CAF_i\,t_c$ |
| Después de impuestos (tesorería) | $Q_i^{di} = Q_i^{ai}(1-t_c) + CAF_i\,t_c - \Delta FM_i$ |
| Forma general | $Q_i^{di} = Q_i^{ai}(1-t_c) - I^*t_c + G^*t_c - \Delta FM_i$ |
| Equivalente con el BAIT | $Q_i^{di} = BAIT_i(1-t_c) + CAF_i - \Delta FM_i$ |
| Costes fijos que incluyen la amortización | Costes con salida de caja $=$ costes fijos $-$ amortización |

$G^*$: gastos deducibles que no suponen pago (amortizaciones, deterioros). $I^*$: ingresos computables que no suponen cobro (traspaso de subvenciones a resultados).

## Fondo de maniobra

| Concepto | Fórmula |
| :--- | :--- |
| Fondo de maniobra operativo | $FM = \text{Existencias} + \text{Clientes} - \text{Proveedores} = AC - PC$ |
| Variación | $\Delta FM_t = FM_t - FM_{t-1}$ ($>0$: salida de caja; $<0$: entrada) |
| FM como porcentaje de las ventas | $FM_t = \alpha\cdot\text{Ventas}_t$ |
| Cobros | $\text{Cobros}_t = \text{Ventas}_t - \Delta\text{Clientes}_t$ |
| Pagos | $\text{Pagos}_t = \text{Compras}_t - \Delta\text{Proveedores}_t$ |
| Consumo | $\text{Consumo}_t = \text{Compras}_t + E_{t-1} - E_t$ |
| Tesorería operativa | $\text{Ingresos} - \text{Costes} - \Delta FM$ |

## Valor residual

| Concepto | Fórmula |
| :--- | :--- |
| Total | $VR_n^{di} = VR_n^{di}(AF) + VR_n^{di}(FM)$ |
| Resultado de la venta del activo fijo | $\Delta P = P_{\text{venta}} - VNC_n$ (plusvalía si $>0$, minusvalía si $<0$) |
| Activo fijo después de impuestos | $VR_n^{di}(AF) = P_{\text{venta}} - (P_{\text{venta}} - VNC_n)\,t_c$ |
| Activo totalmente amortizado ($VNC = 0$) | $VR^{di}(AF) = P_{\text{venta}}(1-t_c)$ |
| Terreno vendido por su coste | $VR^{di} = P_{\text{venta}}$ (sin impuesto) |
| FM recuperado por su valor contable | $VR^{di}(FM) = FM_n$ |
| FM recuperado al $\beta$ | $VR^{di}(FM) = \beta\,FM_n + (1-\beta)\,FM_n\,t_c$ |

## Cuenta de resultados del proyecto

| Concepto | Fórmula |
| :--- | :--- |
| BAIT | $\text{Ingresos} - \text{Costes} - CAF$ (en el año final, $\pm$ resultado de la venta del activo y $-$ pérdida del FM no recuperado) |
| BAT | $BAIT - \text{Intereses}$ |
| Beneficio neto | $BN = BAT(1-t_c)$ |
| Dividendos | $DIV = \text{tasa de reparto}\times BN$ |
| Intereses de un préstamo americano | $\text{Principal}\times i$ cada año; el principal se devuelve al final |

Los intereses y la devolución del préstamo **no** entran en los flujos del VAN: su coste ya está en $r$.

## Coste anual equivalente y elección entre equipos

| Concepto | Fórmula |
| :--- | :--- |
| Valor actual de los costes | $VA(\text{costes}) = C_0 + \sum_{t=1}^{n}\dfrac{\text{Coste}_t}{(1+r)^t} - \dfrac{VR_n}{(1+r)^n}$ |
| Con coste anual constante | $VA(\text{costes}) = C_0 + \text{Coste}\cdot a_{\overline{n}\rvert r} - \dfrac{VR_n}{(1+r)^n}$ |
| Coste anual equivalente | $CAE = \dfrac{VA(\text{costes})}{a_{\overline{n}\rvert r}}$ (elegir el menor) |
| Con coste anual constante y sin valor residual | $CAE = \dfrac{C_0}{a_{\overline{n}\rvert r}} + \text{Coste}$ |
| CAE nominal a partir del real | $CAE_t^{\text{nominal}} = CAE^{\text{real}}(1+\pi)^t$ (no es constante) |
| Con cambio tecnológico (costes bajan al ritmo $c$) | $VA(\text{costes}) = \sum_{k=1}^{n}\dfrac{CAE_1(1-c)^{k-1}}{(1+r)^k}$ |
| Coste de mantener el equipo viejo un año más | $\text{Coste operativo}_{t+1} + VR_t(1+r) - VR_{t+1}$, valorado en $t+1$ |
| Demanda estacional, vida indefinida | $VA = \text{Inversión} + \dfrac{\text{Coste anual}}{r}$ por alternativa; la máquina nueva a plena carga |

## Punto muerto del VAN (ventas mínimas)

Con precio $p$, coste variable unitario $cv$, costes fijos con salida de caja $CF$, amortización $CAF$ y $n$ años:

$$VAN = 0 \;\Rightarrow\; Q^* = \frac{\dfrac{C_0}{a_{\overline{n}\rvert r}} + CF(1-t_c) - CAF\,t_c}{(p - cv)(1-t_c)}$$

## Fórmulas de otros temas que aparecen en enunciados

Algunos problemas del parcial piden la tasa de descuento a partir del mercado. No es materia de los temas 1 a 4, pero conviene tenerlas a mano:

| Concepto | Fórmula |
| :--- | :--- |
| Coste de los fondos propios con Gordon | $k_e = \dfrac{DIV_1}{P_0} + g$ |
| Coste de los fondos propios con el CAPM | $k_e = r_f + \beta\,(r_m - r_f)$ |
| Coste medio ponderado del capital | $CMPC = \dfrac{E}{E+D}k_e + \dfrac{D}{E+D}k_d(1-t_c)$ |
| VAN con probabilidad de éxito $p$ | $VAN = -C_0 + p\cdot\dfrac{VAN_{\text{éxito}}}{(1+r)^T} + (1-p)\cdot\dfrac{VAN_{\text{fracaso}}}{(1+r)^T}$ |
