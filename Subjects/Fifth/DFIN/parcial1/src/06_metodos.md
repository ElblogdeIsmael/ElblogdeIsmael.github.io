\part{Práctica}

# Método de resolución por tipo de problema

Cada receta está pensada para aplicarla en el examen sin pensar en la forma, solo en los datos.

## Tipo A: gráfico de Fisher (tema 2.2)

1. Datos: riqueza inicial $W_0$, tipo $r$, inversión real $I$ y flujo futuro $F_1$ (o el VAN).
2. $VAN = -I + F_1/(1+r)$. Despeja lo que falte.
3. **Aumento de riqueza:** para quien prefiere **consumo actual**, el VAN (en $t=0$); para quien prefiere **consumo futuro**, $VAN \times (1+r)$ (en $t=1$).
4. **Consumo máximo hoy:** $W_0 - I + F_1/(1+r) = W_0 + VAN$. **Consumo máximo mañana:** $F_1 + (W_0 - I)(1+r)$.
5. Para el gráfico: ejes $t=0$ y $t=1$, curva cóncava de inversión, recta del mercado de pendiente $-(1+r)$ tangente en el óptimo, y los segmentos $JD$ (inversión), $JK$ (VA) y $DK$ (VAN).

## Tipo B: valoración de acciones y VAOC (tema 2.4)

1. **¿Crecimiento constante a perpetuidad desde $t=1$?** Usa Gordon, $P_0 = DIV_1/(r-g)$ con $g = b\cdot ROE$. Para el VAOC: $VAOC = P_0 - BPA_1/r$.
2. **¿Reinversiones puntuales (en $t=2$, $t=5$…) o fases?** Usa la **tabla de reinversiones**:
   - capital $= b_t \cdot BPA_t$;
   - flujo $= ROE \cdot$ capital, perpetuo o durante $n$ años;
   - $BPA_{t+1} = BPA_t +$ flujos nuevos;
   - $DIV_t = (1-b_t)\,BPA_t$;
   - $P_0 = \sum DIV_t/(1+r)^t + (\text{perpetuidad final})/(1+r)^T$.
3. **VAOC directo:** $\sum VAN_t/(1+r)^t$, con $VAN_t = -\text{capital} + \text{flujo}/r$ (o $\cdot\, a_{\overline{n}|r}$).
4. **Comprueba siempre** que $P_0 = BPA_1/r + VAOC$.
5. **Rentabilidad mínima aceptable de una reinversión:** $ROE = r$ (VAN = 0).
6. **Si piden $BPA_1/P_0$:** compáralo con $r$. Si $VAOC > 0$, el ratio queda **por debajo** de $r$.

> **Cuidado con el precio en el año $T$:** $P_T$ es el valor en $T$ de los dividendos **desde $T+1$**. Si desde el año $T$ se reparte todo el BPA constante, entonces $P_T = BPA_T/r$, y se descuenta junto con los dividendos hasta $T$.

## Tipo C: VAN de un proyecto con impuestos (tema 4)

1. **$C_0^{di}$:** activo, más costes de instalación y transporte, más el FM inicial, más gastos de $t=0$ deducibles netos ($\times(1-t_c)$), más costes de oportunidad (valor de venta de un activo propio que se usa). **Fuera** los costes hundidos.
2. **$CAF$** $= (V_0 - VR_{\text{contable}})/n_{\text{fiscal}}$. Ojo: la vida fiscal puede ser más corta que la del proyecto, y entonces la CAF es 0 en los últimos años.
3. **$Q_i^{ai}$** $=$ ingresos $-$ costes operativos **sin amortización**. Quita la amortización si viene incluida en los costes fijos. Resta los costes de oportunidad anuales (un alquiler perdido) y la canibalización.
4. **$Q_i^{di}$** $= Q_i^{ai}(1-t_c) + CAF_i\,t_c - \Delta FM_i$.
5. **$VR_n^{di}$** $=$ precio de venta $-\,(\text{precio} - VNC)\,t_c$, más el FM recuperado (con su efecto fiscal si se recupera por menos de su valor contable).
6. **VAN** $= -C_0^{di} + \sum Q_i^{di}/(1+r)^i + VR_n^{di}/(1+r)^n$. Concluye: «VAN > 0, se acepta».
7. Si piden **BAIT, BAT y BN**: BAIT $=$ ingresos $-$ costes $-$ amortización; BAT $=$ BAIT $-$ intereses; BN $=$ BAT$(1-t_c)$. Los intereses **no** van al VAN.

**Plantilla de tabla para el examen** (columnas = años):

| | 0 | 1 | … | n |
| :--- | :---: | :---: | :---: | :---: |
| Ingresos | | | | |
| − Costes operativos | | | | |
| = $Q^{ai}$ | | | | |
| $Q^{ai}(1-t_c)$ | | | | |
| $+\,CAF\cdot t_c$ | | | | |
| FM (saldo) | | | | |
| $-\,\Delta FM$ | | | | |
| Inversión / $VR^{di}$ | | | | |
| **FNC** | | | | |

## Tipo D: elegir entre máquinas (CAE)

1. $VA(\text{costes}) = C_0 + \text{coste}_{\text{anual}}\cdot a_{\overline{n}|r} - VR/(1+r)^n$.
2. $CAE = VA/a_{\overline{n}|r}$. **Se elige el menor CAE.** Con ingresos, se elige la mayor anualidad equivalente del VAN.
3. **Con cambio tecnológico** a la tasa $c$: $VA = \sum_{k=1}^{n} CAE_1 (1-c)^{k-1}/(1+r)^k$.
4. **Demanda estacional:** VA de los costes **perpetuos** ($\text{coste anual}/r$) de cada alternativa. La nueva máquina va **a pleno rendimiento** y la vieja cubre la punta.

## Tipo E: criterios (tema 3)

- **TIR** con 2 periodos: ecuación de segundo grado en $x = 1/(1+TIR)$. Con más periodos: tanteo e interpolación lineal entre dos tasas con VAN de distinto signo:
$$TIR \approx r_1 + (r_2 - r_1)\frac{VAN_1}{VAN_1 - VAN_2}$$
- **Plazo de recuperación:** flujos acumulados hasta igualar $C_0$, interpolando en el último año. El descontado, igual con flujos descontados.
- **Tasa de Fisher:** TIR de los flujos $B - A$.
- **Excluyentes:** decide por VAN; si las duraciones son distintas, por anualidad equivalente.
