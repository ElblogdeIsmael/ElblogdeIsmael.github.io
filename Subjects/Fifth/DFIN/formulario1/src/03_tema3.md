# Tema 3: criterios de valoración de inversiones

| Criterio | Fórmula | Regla |
| :--- | :--- | :--- |
| VAN | $-C_0 + \sum_{t=1}^{n}\dfrac{C_t}{(1+r)^t}$ | Aceptar si $VAN>0$; entre excluyentes, el mayor |
| Índice de rentabilidad | $IR = \dfrac{VA}{C_0} = 1 + \dfrac{VAN}{C_0}$ | Aceptar si $IR > 1$; con racionamiento, ordenar de mayor a menor |
| Plazo de recuperación | $PR$ tal que $\sum_{t=1}^{PR} C_t = C_0$ | $PR \le$ plazo de corte |
| PR con flujos constantes | $PR = \dfrac{C_0}{C}$ | |
| PR con interpolación | $PR = (k-1) + \dfrac{C_0 - \sum_{t=1}^{k-1}C_t}{C_k}$ | |
| Plazo de recuperación descontado | $PRD$ tal que $\sum_{t=1}^{PRD}\dfrac{C_t}{(1+r)^t} = C_0$ | $PRD \le$ plazo de corte |
| TIR | $-C_0 + \sum_{t=1}^{n}\dfrac{C_t}{(1+TIR)^t} = 0$ | Inversión: aceptar si $TIR > r$. Financiación: aceptar si $TIR < r$ |

## Cálculo directo de la TIR

| Caso | Fórmula |
| :--- | :--- |
| Un periodo | $TIR = \dfrac{C_1}{C_0} - 1$ |
| Dos periodos ($x = \frac{1}{1+TIR}$) | $C_2x^2 + C_1x - C_0 = 0 \;\Rightarrow\; x = \dfrac{-C_1 + \sqrt{C_1^2 + 4C_0C_2}}{2C_2}$ |
| Flujo constante $n$ años | $a_{\overline{n}\rvert TIR} = \dfrac{C_0}{C}$ (tablas o interpolación) |
| Perpetuidad | $TIR = \dfrac{C}{C_0}$ |
| Perpetuidad creciente | $TIR = \dfrac{C_1}{C_0} + g$ |
| Bono | $TIR$ = rentabilidad al vencimiento |

## Proyectos mutuamente excluyentes

| Concepto | Fórmula |
| :--- | :--- |
| Proyecto incremental | $(B-A)_t = C_{B,t} - C_{A,t}$ |
| TIR incremental | $TIR_\Delta$ tal que $VAN_{B-A}(TIR_\Delta) = 0$; si $TIR_\Delta > r$, se elige B |
| Tasa de Fisher (cruce de perfiles) | $r^*$ tal que $VAN_A(r^*) = VAN_B(r^*) \iff r^* = TIR_{B-A}$ |
| TIR modificada | $C_0 = \dfrac{\sum_{t}C_t(1+r)^{n-t}}{(1+TIRM)^n}$, es decir, $TIRM = \left(\dfrac{VF(\text{flujos a } r)}{C_0}\right)^{1/n} - 1$ |
| Momento óptimo de inversión | Elegir $t$ que maximiza $\dfrac{VAN_t}{(1+r)^t}$ (VAN en la fecha $t$, descontado a hoy) |
| Distinta duración | Elegir la mayor **anualidad equivalente** $AE = \dfrac{VAN}{a_{\overline{n}\rvert r}}$, o el menor **CAE** |
| Reemplazo de un equipo | Mantener mientras coste de un año más con el viejo $<$ CAE del nuevo |

Número de TIR posibles: como máximo, tantas como **cambios de signo** tengan los flujos (regla de Descartes).
