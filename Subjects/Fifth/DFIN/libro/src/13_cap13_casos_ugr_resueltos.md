# Casos integradores y exámenes modelo UGR resueltos

\begin{epigrafe}{La teoría financiera solo se comprende cuando se resuelve hasta el último céntimo y se interpreta económicamente cada cifra obtenida.}{Metodología práctica de la Universidad de Granada}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Integrar todo el programa de Dirección Financiera (Temas 1--8 y ampliación) mediante seis casos completos de dificultad de examen final.
  \item Verificar manualmente cada cálculo intermedio (Fisher, VAOC, tasa de cruce, CAE, cascada FCL, Markowitz/CAPM, VAA/WACC/FTE, árbol binomial y NOF/PMM).
  \item Identificar y neutralizar en la práctica los distractores clásicos de examen (costes hundidos, préstamo en FCL, valores contables y diferimiento temporal).
\end{itemize}
\end{objetivos}

## Caso 1: Separación de Fisher y acciones con crecimiento diferido (Temas 1--2)

\begin{casoreal}{Enunciado Caso 1 (Valor temporal, Fisher y VAOC diferido)}
\textbf{Parte A (Fisher):} Un inversor posee una riqueza inicial en $t=0$ de $R_0 = 15.000\ \text{\euro}$ y opera en un mercado perfecto de capitales con tipo único $r = 5\%$. Puede acometer un proyecto productivo que requiere $C_0 = 5.000\ \text{\euro}$ hoy para generar $C_1 = 7.350\ \text{\euro}$ dentro de un año. Calcula el VAN, la TIR, la riqueza presente máxima $W_0^*$, la riqueza futura equivalente $W_1^*$ y el consumo en $t=1$ de un accionista impaciente que decide consumir exactamente $12.000\ \text{\euro}$ en $t=0$.\\[4pt]
\textbf{Parte B (Renta variable y VAOC diferido):} La sociedad \emph{Alhambra Tech S.A.} espera obtener un beneficio por acción $\text{BPA}_1 = 6{,}00\ \text{\euro}$ el próximo ejercicio y distribuirlo íntegramente como dividendo ($\text{Div}_1 = 6{,}00\ \text{\euro}$). En el año 2 volverá a generar $\text{BPA}_2 = 6{,}00\ \text{\euro}$, pero retendrá el 50\% ($b_2 = 0{,}50$) para invertir en una oportunidad única en $t=2$ que proporcionará un $\text{ROE} = 24\%$ perpetuo a partir de $t=3$. Con un coste exigido a las acciones $r_E = 12\%$, determina el precio de equilibrio $P_0$ hoy y el porcentaje del precio atribuible al VAOC.
\end{casoreal}

### Resolución paso a paso del Caso 1

**Parte A (Separación de Fisher):**

1. **Evaluación del proyecto óptimo real:**
$$\text{TIR} = \frac{7.350}{5.000} - 1 = 0{,}47 = 47{,}00\% > 5\%$$
$$\text{VAN} = -5.000 + \frac{7.350}{1{,}05} = -5.000 + 7.000 = +2.000{,}00\ \text{\euro}$$
2. **Expansión del presupuesto del propietario:**
$$W_0^* = R_0 + \text{VAN} = 15.000 + 2.000 = 17.000{,}00\ \text{\euro}$$
$$W_1^* = W_0^*(1+r) = 17.000 \times 1{,}05 = 17.850{,}00\ \text{\euro}, \qquad \Delta W_1 = 2.000 \times 1{,}05 = +2.100{,}00\ \text{\euro}$$
3. **Plan financiero del inversor impaciente ($C_0^{\text{deseado}} = 12.000\ \text{\euro}$):** Tras invertir $5.000\ \text{\euro}$ en el proyecto real, le sobran $15.000 - 5.000 = 10.000\ \text{\euro}$ en $t=0$. Para consumir $12.000\ \text{\euro}$ hoy, acude al mercado financiero y pide prestados $2.000\ \text{\euro}$ al 5\%. En $t=1$, cobra los $7.350\ \text{\euro}$ del proyecto, devuelve $2.000 \times 1{,}05 = 2.100\ \text{\euro}$ al banco y disfruta de un consumo futuro neto de $C_1 = 7.350 - 2.100 = 5.250{,}00\ \text{\euro}$. (Comprobación en recta presupuestaria: $12.000 + \frac{5.250}{1{,}05} = 12.000 + 5.000 = 17.000\ \text{\euro} = W_0^*$.)

**Parte B (VAOC diferido en $t=2$):**

1. **Valor sin crecimiento:** si la empresa mantuviera el reparto total de $6{,}00\ \text{\euro}$ para siempre, su precio base sería:
$$P_{\text{sin crecimiento}} = \frac{\text{BPA}_1}{r_E} = \frac{6{,}00}{0{,}12} = 50{,}00\ \text{\euro}$$
2. **VAN de la inversión diferida evaluada en la fecha en que se decide ($t=2$):** En $t=2$ retiene $I_2 = 0{,}50 \times 6{,}00 = 3{,}00\ \text{\euro}$, que generan a perpetuidad desde $t=3$ un incremento anual de flujo de $3{,}00 \times 0{,}24 = 0{,}72\ \text{\euro}$. Por tanto, en $t=2$:
$$\text{VAN}_2 = -3{,}00 + \frac{0{,}72}{0{,}12} = -3{,}00 + 6{,}00 = +3{,}00\ \text{\euro}$$
3. **Descuento a hoy ($t=0$) y precio total:**
$$\text{VAOC}_0 = \frac{\text{VAN}_2}{(1+r_E)^2} = \frac{3{,}00}{1{,}12^2} = \frac{3{,}00}{1{,}2544} = 2{,}39\ \text{\euro}$$
$$P_0 = 50{,}00 + 2{,}39 = 52{,}39\ \text{\euro}, \qquad \text{Peso del VAOC} = \frac{2{,}39}{52{,}39} = 4{,}56\%$$

## Caso 2: Criterios excluyentes, tasa de cruce de Fisher y CAE (Tema 3)

\begin{casoreal}{Enunciado Caso 2 (Conflicto VAN--TIR y vidas desiguales)}
\textbf{Parte A:} Una constructora evalúa dos proyectos mutuamente excluyentes con desembolso inicial de $10.000\ \text{\euro}$ y los siguientes flujos en $t=1, 2, 3$: $A = (-10.000;\ 3.500;\ 4.500;\ 6.000)$ y $B = (-10.000;\ 6.500;\ 4.200;\ 2.500)$. Con un coste de capital del 8\%, decide qué proyecto maximiza la riqueza, calcula ambas TIR, halla la Tasa de Cruce de Fisher ($r_F$) y explica qué ocurriría si los tipos de mercado subieran al 20\%.\\[4pt]
\textbf{Parte B:} La misma firma debe instalar obligatoriamente una caldera de biomasa eligiendo entre dos modelos con necesidad perpetua de renovación: \emph{Alpha} cuesta $18.000\ \text{\euro}$, exige $2.400\ \text{\euro}$/año de mantenimiento y dura 3 años; \emph{Beta} cuesta $26.000\ \text{\euro}$, exige $1.900\ \text{\euro}$/año y dura 5 años. Con un coste de capital real del 10\%, selecciona el modelo óptimo mediante el Coste Anual Equivalente (CAE).
\end{casoreal}

### Resolución paso a paso del Caso 2

**Parte A (VAN, TIR y Tasa de Fisher):**

| Métrica | Proyecto $A$ (flujos tardíos) | Proyecto $B$ (flujos tempranos) | Proyecto incremental $(A - B)$ |
| :--- | :---: | :---: | :---: |
| Flujos ($t=0,1,2,3$) | $(-10.000;$ $+3.500;$ $+4.500;$ $+6.000)$ | $(-10.000;$ $+6.500;$ $+4.200;$ $+2.500)$ | $(0;$ $-3.000;$ $+300;$ $+3.500)$ |
| $\text{VAN}(r=8\%)$ | **$+1.861{,}76\ \text{\euro}$** | $+1.603{,}92\ \text{\euro}$ | **$+257{,}84\ \text{\euro}$** |
| $\text{TIR}$ exacta | $17{,}14\%$ | **$18{,}34\%$** | **$r_F = 13{,}13\%$** |
| $\text{VAN}(r=20\%)$ | $-486{,}11\ \text{\euro}$ | $-219{,}91\ \text{\euro}$ | $-266{,}20\ \text{\euro}$ |

1. Al coste de capital del **8\%** existe conflicto entre VAN y TIR porque $8\% < r_F = 13{,}13\%$: aunque $B$ exhibe mayor TIR ($18{,}34\% > 17{,}14\%$), el proyecto **$A$ genera $257{,}84\ \text{\euro}$ más de riqueza presente**, dado que la inversión incremental $(A-B)$ ofrece una rentabilidad interna del $13{,}13\% > 8\%$. Se elige **$A$**.
2. Si el tipo de descuento sube al **20\%**, ambos proyectos superan sus respectivas TIR y presentan **VAN negativo** ($-486{,}11\ \text{\euro}$ y $-219{,}91\ \text{\euro}$); se **rechazan ambos**. (Solo en el intervalo $13{,}13\% < r < 18{,}34\%$ sería preferible $B$ sobre $A$.)

**Parte B (Coste Anual Equivalente para vidas desiguales, $k = 10\%$):**

1. **Caldera Alpha (3 años):**
$$\text{VAC}_{\text{Alpha}} = 18.000 + \frac{2.400}{1{,}10} + \frac{2.400}{1{,}10^2} + \frac{2.400}{1{,}10^3} = 18.000 + 2.400 \times 2{,}4869 = 23.968{,}44\ \text{\euro}$$
$$\text{CAE}_{\text{Alpha}} = \frac{23.968{,}44}{a_{\overline{3}|0{,}10}} = \frac{23.968{,}44}{2{,}4869} = 9.638{,}07\ \text{\euro/año}$$
2. **Caldera Beta (5 años):**
$$\text{VAC}_{\text{Beta}} = 26.000 + 1.900 \times a_{\overline{5}|0{,}10} = 26.000 + 1.900 \times 3{,}7908 = 33.202{,}49\ \text{\euro}$$
$$\text{CAE}_{\text{Beta}} = \frac{33.202{,}49}{3{,}7908} = 8.758{,}73\ \text{\euro/año}$$
Aunque el desembolso inicial de *Beta* es $8.000\ \text{\euro}$ mayor, su duración superior y menor mantenimiento reducen el coste anual equivalente en $879{,}34\ \text{\euro}$ al año. Se selecciona **Beta**.

## Caso 3: Presupuesto de capital completo y Flujo de Caja Libre (Tema 4)

\begin{casoreal}{Enunciado Caso 3 (FCL con amortización, NOF, coste de oportunidad, erosión, VR y préstamo distractor)}
Una empresa industrial analiza lanzar una nueva línea automatizada de envasado con horizonte de 4 años:
\begin{itemize}
  \item \textbf{Inversión inicial en activo fijo ($t=0$):} $160.000\ \text{\euro}$, amortizable fiscalmente de forma lineal en 4 años ($40.000\ \text{\euro}$/año). Valor residual de mercado estimado al cierre ($t=4$): $30.000\ \text{\euro}$ brutos.
  \item \textbf{Costes previos y de oportunidad:} se abonaron ya $12.000\ \text{\euro}$ el año pasado en un estudio de ingeniería previo. La línea ocupará una nave propia que actualmente se alquila a un tercero por $10.000\ \text{\euro}$/año brutos antes de impuestos.
  \item \textbf{Explotación y erosión ($t=1\dots 4$):} ventas anuales de $150.000\ \text{\euro}$, costes operativos desembolsables de $65.000\ \text{\euro}$/año, y una caída (erosión) del margen operativo bruto de productos antiguos de $15.000\ \text{\euro}$/año.
  \item \textbf{Circulante (NOF):} inversión inicial en $t=0$ de $20.000\ \text{\euro}$, ampliada hasta $26.000\ \text{\euro}$ en $t=1$, estable en $t=2$ y $t=3$, y recuperada al 100\% en $t=4$.
  \item \textbf{Financiación e impuestos:} la empresa solicita un préstamo americano de $80.000\ \text{\euro}$ al 6\% anual. Tipo del Impuesto de Sociedades $\tau_c = 25\%$ y $\text{WACC} = 10\%$.
\end{itemize}
Construye la tabla íntegra de Flujos de Caja Libre incrementales y dictamina la viabilidad mediante VAN y TIR.
\end{casoreal}

### Resolución paso a paso del Caso 3

Antes de rellenar la tabla aplicamos los filtros de análisis incremental:

- **Estudio de ingeniería ($12.000\ \text{\euro}$):** **coste hundido**, se excluye ($0\ \text{\euro}$).
- **Alquiler perdido de la nave ($10.000\ \text{\euro}$/año):** **coste de oportunidad** antes de impuestos, se resta cada año $t=1\dots 4$.
- **Erosión de productos existentes ($15.000\ \text{\euro}$/año):** **efecto colateral negativo**, se resta cada año $t=1\dots 4$.
- **Préstamo americano de $80.000\ \text{\euro}$ al 6\%:** **distractor financiero**; al descontar al WACC, ni la entrada del préstamo en $t=0$ ni los intereses ni la devolución en $t=4$ entran en el FCL del proyecto.
- **Valor Residual Neto en $t=4$:** como se amortiza $4 \times 40.000 = 160.000\ \text{\euro}$, $\text{VNC}_4 = 0$. Al vender por $30.000\ \text{\euro}$, toda la ganancia tributa al 25\%: $\text{VR}_{\text{neto},4} = 30.000 - 0{,}25(30.000 - 0) = 22.500\ \text{\euro}$.

| Concepto incremental (\texteuro) | $t = 0$ | $t = 1$ | $t = 2$ | $t = 3$ | $t = 4$ |
| :--- | ---: | ---: | ---: | ---: | ---: |
| Ventas incrementales | — | $150.000$ | $150.000$ | $150.000$ | $150.000$ |
| $(-)$ Costes operativos desembolsables | — | $-65.000$ | $-65.000$ | $-65.000$ | $-65.000$ |
| $(-)$ Erosión de línea existente | — | $-15.000$ | $-15.000$ | $-15.000$ | $-15.000$ |
| $(-)$ Coste de oportunidad (alquiler perdido) | — | $-10.000$ | $-10.000$ | $-10.000$ | $-10.000$ |
| **$=$ EBITDA incremental** | — | **$60.000$** | **$60.000$** | **$60.000$** | **$60.000$** |
| $(-)$ Amortización fiscal lineal | — | $-40.000$ | $-40.000$ | $-40.000$ | $-40.000$ |
| **$=$ BAIT incremental** | — | **$20.000$** | **$20.000$** | **$20.000$** | **$20.000$** |
| $(-)$ Impuestos (25\% sobre BAIT) | — | $-5.000$ | $-5.000$ | $-5.000$ | $-5.000$ |
| **$=$ NOPAT $+\ \text{Amortización}$ ($\text{FCO}_t$)** | — | **$55.000$** | **$55.000$** | **$55.000$** | **$55.000$** |
| $(-)$ CAPEX activo fijo y $(+)$ VR neto | $-160.000$ | $0$ | $0$ | $0$ | $+22.500$ |
| $(-)$ Variación $\Delta \text{NOF}_t$ (Stock: $20\to 26\to 0$) | $-20.000$ | $-6.000$ | $0$ | $0$ | $+26.000$ |
| **$=$ FLUJO DE CAJA LIBRE ($\text{FCL}_t$)** | **$-180.000$** | **$49.000$** | **$55.000$** | **$55.000$** | **$103.500$** |

Descontando al $\text{WACC} = 10\%$:

$$\text{VAN} = -180.000 + \frac{49.000}{1{,}10} + \frac{55.000}{1{,}10^2} + \frac{55.000}{1{,}10^3} + \frac{103.500}{1{,}10^4}$$
$$\text{VAN} = -180.000 + 44.545{,}45 + 45.454{,}55 + 41.322{,}31 + 70.691{,}90 = +22.014{,}21\ \text{\euro} > 0$$

La Tasa Interna de Rentabilidad resultante es $\text{TIR} = 14{,}89\% > 10\%$. El proyecto debe **aceptarse** porque crea $22.014{,}21\ \text{\euro}$ de valor presente neto.

## Caso 4: Carteras de Markowitz, CAPM y beta desapalancada (Temas 5--6)

\begin{casoreal}{Enunciado Caso 4 (Cartera de dos títulos y tasa de descuento vía comparable)}
\textbf{Parte A (Markowitz):} Se combinan dos acciones: $X$ ($\mathbb{E}[R_X]=9\%$, $\sigma_X=22\%$) en un 70\% e $Y$ ($\mathbb{E}[R_Y]=16\%$, $\sigma_Y=40\%$) en un 30\%, con coeficiente de correlación $\rho_{XY} = +0{,}15$. Calcula la rentabilidad esperada y la desviación típica de la cartera, así como las ponderaciones de la Cartera de Mínima Varianza (CMV).\\[4pt]
\textbf{Parte B (CAPM y Beta económica):} Una firma proyecta entrar en logística automatizada y estudia una comparable cotizada con $\beta_E = 1{,}45$, capitalización bursátil $E = 450\ \text{M\texteuro}$ y deuda financiera de $D = 150\ \text{M\texteuro}$ cuya beta de deuda es $\beta_D = 0{,}05$. Con $r_f = 3{,}5\%$ y prima de riesgo de mercado $\text{PRM} = 6{,}5\%$, calcula $\beta_A$ y el coste de capital económico $r_A$ para financiar el nuevo proyecto al 100\% con fondos propios ($FT = FP$).
\end{casoreal}

### Resolución paso a paso del Caso 4

**Parte A (Cartera de Markowitz):**

1. **Rentabilidad y riesgo de la cartera 70\% / 30\%:**
$$\mathbb{E}[R_p] = 0{,}70 \times 9\% + 0{,}30 \times 16\% = 6{,}30\% + 4{,}80\% = 11{,}10\%$$
$$\sigma_p^2 = 0{,}70^2(22)^2 + 0{,}30^2(40)^2 + 2(0{,}70)(0{,}30)(0{,}15)(22)(40) = 237{,}16 + 144{,}00 + 55{,}44 = 436{,}60$$
$$\sigma_p = \sqrt{436{,}60} = 20{,}89\%$$
Adviértase que combinar $X$ con $Y$ (un activo con el 40\% de volatilidad) logra reducir el riesgo global a **20,89\%**, por debajo incluso de la acción menos volátil en solitario ($22\%$).
2. **Cartera de Mínima Varianza Global:**
$$w_X^{\min} = \frac{40^2 - 0{,}15(22)(40)}{22^2 + 40^2 - 2(0{,}15)(22)(40)} = \frac{1.600 - 132}{484 + 1.600 - 264} = \frac{1.468}{1.820} = 80{,}66\%, \qquad w_Y^{\min} = 19{,}34\%$$

**Parte B (Desapalancamiento hasta $\beta_A$ y $r_A$):**

1. **Pesos a valor de mercado:** $V = 450 + 150 = 600\ \text{M\texteuro}$, luego $E/V = 450/600 = 0{,}75$ y $D/V = 150/600 = 0{,}25$.
2. **Beta desapalancada de los activos:**
$$\beta_A = 0{,}25 \times 0{,}05 + 0{,}75 \times 1{,}45 = 0{,}0125 + 1{,}0875 = 1{,}1000$$
3. **Coste económico del proyecto si se financia con $FT = FP$:**
$$r_A = 3{,}5\% + 1{,}10 \times 6{,}5\% = 3{,}5\% + 7{,}15\% = 10{,}65\%$$

## Caso 5: Modigliani--Miller, Tres Pasos, VAA y FTE integrados (Temas 7--8)

\begin{casoreal}{Enunciado Caso 5 (Equivalencia VAA, FTE y WACC frente al algoritmo de los Tres Pasos)}
Una firma estudia invertir $I_0 = 500.000\ \text{\euro}$ en una planta logística que generará un flujo de caja libre perpetuo de $\text{FCL} = 75.000\ \text{\euro}$/año. Una empresa comparable del sector presenta $r_E = 13\%$, coste de deuda $r_D = 5\%$ y estructura $D/V = 40\%$ ($\tau_c = 25\%$).
\begin{enumerate}
  \item Determina el coste económico puro $r_A$ y el $\text{VAN}_{\text{base}}$ sin deuda.
  \item \textbf{Escenario A (Deuda perpetua fija + costes de emisión):} el proyecto emite una deuda fija perpetua de $D = 200.000\ \text{\euro}$ al 5\%, incurriendo en $15.000\ \text{\euro}$ de comisiones netas de emisión en $t=0$. Calcula el VAA y verifica que, sin comisiones de emisión, VAA, FTE y WACC exacto arrojan el mismo céntimo.
  \item \textbf{Escenario B (Ratio objetivo constante $D/V = 40\%$):} aplica el método de los Tres Pasos (convención continua de clase UGR) para hallar el $K_{mpc,di}$ y el VAN correspondiente.
\end{enumerate}
\end{casoreal}

### Resolución paso a paso del Caso 5

1. **Desapalancamiento hasta $r_A$ y $\text{VAN}_{\text{base}}$:**
$$r_A = 0{,}40 \times 5\% + 0{,}60 \times 13\% = 2{,}00\% + 7{,}80\% = 9{,}80\%$$
$$\text{VAN}_{\text{base}} = -500.000 + \frac{75.000}{0{,}098} = -500.000 + 765.306{,}12 = +265.306{,}12\ \text{\euro}$$
2. **Escenario A --- VAA completo con costes de emisión ($15.000\ \text{\euro}$) y deuda fija $D = 200.000\ \text{\euro}$:**
$$\text{VA}(\text{Ahorro fiscal}) = \tau_c D = 0{,}25 \times 200.000 = +50.000{,}00\ \text{\euro}$$
$$\text{VAA} = 265.306{,}12 - 15.000{,}00 + 50.000{,}00 = +300.306{,}12\ \text{\euro}$$
**Comprobación de equivalencia VAA = FTE = WACC (aislando $0\ \text{\euro}$ de gastos de emisión):**
Sin costes de emisión, $\text{VAA} = 265.306{,}12 + 50.000 = +315.306{,}12\ \text{\euro}$, lo que sitúa el valor apalancado de mercado del proyecto en $V_L = 500.000 + 315.306{,}12 = 815.306{,}12\ \text{\euro}$ y el valor de las acciones en $E_L = 815.306{,}12 - 200.000 = 615.306{,}12\ \text{\euro}$.
- **Vía FTE:** los intereses anuales netos tras impuestos son $(0{,}05 \times 200.000)(1-0{,}25) = 7.500\ \text{\euro}$, luego $\text{FCA} = 75.000 - 7.500 = 67.500\ \text{\euro}$. Aplicando MM II con impuestos usando los pesos de mercado del proyecto ($D_L/E_L = 200.000/615.306{,}12$):
$$r_E = 9{,}80\% + \frac{200.000}{615.306{,}12}(9{,}80\% - 5\%)(1 - 0{,}25) = 10{,}9701\%$$
$$\text{VAN}_{\text{FTE}} = -(500.000 - 200.000) + \frac{67.500}{0{,}109701} = -300.000 + 615.306{,}12 = +315.306{,}12\ \text{\euro}$$
- **Vía WACC exacto sobre $V_L$:**
$$K_{mpc,di} = \frac{615.306{,}12}{815.306{,}12}(10{,}9701\%) + \frac{200.000}{815.306{,}12}(5\%)(0{,}75) = 9{,}1990\%$$
$$\text{VAN}_{\text{WACC}} = -500.000 + \frac{75.000}{0{,}091990} = +315.306{,}12\ \text{\euro}$$
3. **Escenario B --- Método de los Tres Pasos con ratio objetivo constante $D/V = 40\%$ ($D/E = 2/3$):**
- *Paso 1:* $r_A = 9{,}80\%$.
- *Paso 2 (reapalancamiento continuo sin $\tau_c$):* $r_E' = 9{,}80\% + \frac{2}{3}(9{,}80\% - 5\%) = 13{,}00\%$.
- *Paso 3 (WACC tras impuestos):* $K_{mpc,di}' = 0{,}60(13{,}00\%) + 0{,}40(5\%)(1 - 0{,}25) = 7{,}80\% + 1{,}50\% = 9{,}30\%$.
- *Valoración:* $\text{VAN}_{3\text{ pasos}} = -500.000 + \frac{75.000}{0{,}093} = -500.000 + 806.451{,}61 = +306.451{,}61\ \text{\euro}$.
(La diferencia frente al Escenario A se explica porque ahora la deuda crece cada año en proporción al 40\% de $V_L \approx 322.581\ \text{\euro}$, un ahorro fiscal mayor pero arriesgado y descontado a $r_A$, no a $r_D$.)

## Caso 6: Opciones reales binomiales y diagnóstico del circulante (Ampliación)

\begin{casoreal}{Enunciado Caso 6 (Opción de diferimiento y gestión del corto plazo)}
\textbf{Parte A (Opción real de esperar):} Una operadora analiza lanzar un servicio 5G privado cuyo desembolso de despliegue hoy es $E = 900.000\ \text{\euro}$. El valor actual de los flujos operativos esperados hoy es $S_0 = 850.000\ \text{\euro}$, lo que arroja un VAN estático negativo ($\text{VAN} = -50.000\ \text{\euro}$). Sin embargo, la operadora dispone de un derecho exclusivo durante 1 año para decidir si despliega al final del año ($t=1$) tras conocer la demanda regulatoria: el valor subyacente del proyecto puede subir un $u = 1{,}40$ ($S_u = 1.190.000\ \text{\euro}$) o bajar a $d = 0{,}75$ ($S_d = 637.500\ \text{\euro}$). Con $r_f = 4\%$, ¿cuánto vale realmente hoy la licencia 5G gracias a la flexibilidad de esperar?\\[4pt]
\textbf{Parte B (Circulante y descuento comercial):} Una distribuidora presenta en balance: Existencias $= 120.000\ \text{\euro}$, Clientes $= 180.000\ \text{\euro}$, Proveedores $= 110.000\ \text{\euro}$, Capitales Permanentes $= 750.000\ \text{\euro}$ y Activo Fijo Neto $= 520.000\ \text{\euro}$. Además, un proveedor le ofrece condiciones \textbf{``2/10 neto 40''}. Calcula sus NOF, su Fondo de Maniobra, su Tesorería Neta Operativa y la TAE implícita si renuncia al descuento por pronto pago.
\end{casoreal}

### Resolución paso a paso del Caso 6

**Parte A (Valoración binomial de la opción real de diferir):**

1. **Probabilidad neutral al riesgo:**
$$p = \frac{(1 + r_f) - d}{u - d} = \frac{1{,}04 - 0{,}75}{1{,}40 - 0{,}75} = \frac{0{,}29}{0{,}65} = 0{,}4462\ (44{,}62\%)$$
2. **Pagos contingentes en $t=1$ (decisión óptima racional):**
- Si sube la demanda ($S_u = 1.190.000 > 900.000$): ejerce e invierte, obteniendo $C_u = 1.190.000 - 900.000 = 290.000\ \text{\euro}$.
- Si cae la demanda ($S_d = 637.500 < 900.000$): abandona sin coste perdiendo 0 en lugar de perder $-262.500$, luego $C_d = 0\ \text{\euro}$.
3. **Valor actual de la opción estratégica hoy ($t=0$):**
$$C_0 = \frac{p \, C_u + (1-p)\, C_d}{1 + r_f} = \frac{0{,}446154 \times 290.000 + 0}{1{,}04} = \frac{129.384{,}62}{1{,}04} = +124.408{,}28\ \text{\euro}$$
Un análisis miope del VAN estático habría tirado la licencia a la basura al obtener $-50.000\ \text{\euro}$; la flexibilidad de esperar hasta ver la demanda eleva el valor real de esa concesión a **+124.408,28 \texteuro** (un valor puro de opcionalidad de $174.408{,}28\ \text{\euro}$ por encima del VAN rígido).

**Parte B (Circulante y descuento comercial):**

1. **Equilibrio operativo y financiero:**
$$\text{NOF} = 120.000 + 180.000 - 110.000 = 190.000\ \text{\euro}$$
$$\text{FM} = 750.000 - 520.000 = 230.000\ \text{\euro}$$
$$\text{Tesorería Neta Operativa} = \text{FM} - \text{NOF} = 230.000 - 190.000 = +40.000\ \text{\euro}\ (\text{superávit sólido})$$
2. **Coste TAE de renunciar al descuento ``2/10 neto 40'' (aplaza el pago $40 - 10 = 30$ días adicionales):**
$$\text{TAE} = \left(1 + \frac{0{,}02}{1 - 0{,}02}\right)^{\frac{365}{30}} - 1 = (1{,}020408)^{12{,}1667} - 1 = 0{,}2786 = 27{,}86\%$$
Renunciar al descuento cuesta un 27,86\% anual compuesto; con los $+40.000\ \text{\euro}$ de excedente de tesorería o una póliza bancaria convencional al 5\%--6\%, resulta obligatorio acogerse al pronto pago.
