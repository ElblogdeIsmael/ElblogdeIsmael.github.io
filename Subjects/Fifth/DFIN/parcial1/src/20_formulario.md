\part{Repaso final}

# Formulario

## Matemática financiera

$$a_{\overline{n}|r} = \frac{1-(1+r)^{-n}}{r} \qquad \text{Perpetuidad: } \frac{C}{r} \qquad \text{Perpetuidad creciente: } \frac{C_1}{r-g}$$

$$\text{Perpetuidad que empieza en } T+1 \text{, valorada en } t=0: \quad \frac{C/r}{(1+r)^T}$$

$$1 + r_{\text{nominal}} = (1 + r_{\text{real}})(1 + \pi)$$

## Tema 2

| Concepto | Fórmula |
| :--- | :--- |
| VAN | $-C_0 + \sum C_t/(1+r)^t$ |
| Fisher: consumo máximo hoy | $W_0 + VAN$ |
| Fisher: consumo máximo en $t=1$ | $F_1 + (W_0 - I)(1+r) = (W_0 + VAN)(1+r)$ |
| Precio de un bono | $C\,a_{\overline{n}\rvert r} + VN/(1+r)^n$ |
| Rentabilidad actual | $C/P_0$ |
| Rentabilidad al vencimiento | $y$ tal que $P_0 = C\,a_{\overline{n}\rvert y} + VN/(1+y)^n$ |
| Rentabilidad del periodo | $(C + P_1 - P_0)/P_0$ |
| Acción, un periodo | $P_0 = (DIV_1 + P_1)/(1+r)$ |
| Sin crecimiento | $P_0 = DIV_1/r$ |
| Gordon | $P_0 = DIV_1/(r-g)$, $\quad r = DIV_1/P_0 + g$ |
| Crecimiento | $g = b \times ROE$, $\quad b = 1 - DIV/BPA$, $\quad ROE = BPA/\text{valor contable}$ |
| VAOC | $P_0 = BPA_1/r + VAOC$, $\quad VAOC = \sum VAN_t/(1+r)^t$ |
| Ratio beneficio/precio | $BPA_1/P_0 = r(1 - VAOC/P_0)$ |

## Tema 3

| Criterio | Regla | Defecto principal |
| :--- | :--- | :--- |
| VAN | $> 0$ | Ninguno: es el criterio de referencia |
| Plazo de recuperación | $\le$ plazo de corte | Ignora el valor temporal y los flujos posteriores |
| Plazo de recuperación descontado | $\le$ plazo de corte | Ignora los flujos posteriores |
| TIR | $> r$ (en inversión) | Financiación, varias TIR, escala, perfil temporal |
| TIR incremental o de Fisher | $TIR_{B-A} > r \Rightarrow B$ | Equivale a $VAN_B > VAN_A$ |
| Índice de rentabilidad | $1 + VAN/C_0$ | Solo con proyectos divisibles |

Interpolación de la TIR: $\;TIR \approx r_1 + (r_2-r_1)\,\dfrac{VAN_1}{VAN_1 - VAN_2}$

## Tema 4

$$VAN = -C_0^{di} + \sum_{i=1}^{n}\frac{Q_i^{di}}{(1+r)^i} + \frac{VR_n^{di}}{(1+r)^n}$$

$$Q_i^{di} = Q_i^{ai}(1-t_c) + CAF_i\,t_c - \Delta FM_i \qquad\qquad CAF = \frac{V_0 - VR_{\text{contable}}}{n}$$

$$VR_n^{di}(AF) = \text{Precio} - (\text{Precio} - VNC)\,t_c \qquad VNC = V_0 - \sum CAF$$

$$FM = \text{Existencias} + \text{Clientes} - \text{Proveedores}$$

$$\Delta FM_t = FM_t - FM_{t-1} \quad (\text{si es positivo, salida de caja})$$

$$\begin{aligned}C_0^{di} ={}& \text{Activo} + \text{costes de instalación} + FM_0 + \text{gastos deducibles}\times(1-t_c)\\ &+ \text{costes de oportunidad} - \text{venta neta del equipo viejo}\end{aligned}$$

$$CAE = \frac{VA(\text{costes})}{a_{\overline{n}|r}} \;(\text{elegir el menor}) \qquad \text{Con cambio tecnológico } c: \; VA = \sum_{k=1}^{n}\frac{CAE_1(1-c)^{k-1}}{(1+r)^k}$$

## Las diez ideas que más se preguntan

1. El objetivo es **maximizar el valor de mercado de las acciones**, no el beneficio.
2. Separación de Fisher: con mercado perfecto, la inversión óptima **no depende de las preferencias**; con $r_d > r_p$ se rompe.
3. Si baja $r$: **más inversión**; el prestatario gana y el prestamista pierde.
4. El coste de oportunidad depende del **riesgo del proyecto**, no de su financiación.
5. Precio del bono y tipo de interés van en **sentido contrario**; los bonos largos y los de cupón bajo son **más sensibles**.
6. La rentabilidad actual **solo coincide** con la rentabilidad al vencimiento **a la par**.
7. Una acción es **de crecimiento** si reinvierte **y** $ROE > r$ (VAN > 0). Si $ROE = r$, entonces $VAOC = 0$.
8. $BPA/P$ estima bien $r$ **solo si $VAOC = 0$**.
9. **VAN** frente a **TIR**: con excluyentes, decide el **VAN**; con duraciones distintas, el **CAE**.
10. Flujos de caja: **incrementales, después de impuestos, sin costes hundidos, con costes de oportunidad, sin intereses**, amortización solo como escudo fiscal y **FM** que se invierte y se recupera.
