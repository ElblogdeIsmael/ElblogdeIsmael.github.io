# El Valor Actual de las Oportunidades de Crecimiento (VAOC) y Casos Prácticos

Este capítulo desarrolla el método del Valor Actual de las Oportunidades de Crecimiento (VAOC), formulado originalmente por Stewart C. Myers (1977) y analizado en Brealey, Myers y Allen (2023, cap. 4). A través de cuatro problemas prácticos resueltos en clase (Sociedad MILLION, Empresa Z, Green Rock Corp. y North Atlantic S.A.), se analiza cómo las decisiones de reinversión alteran el valor de mercado de las acciones y bajo qué condiciones el ratio BPA/Precio difiere de la verdadera tasa de capitalización de la empresa.


## Ejercicio 8

### Enunciado

La empresa MILLION, S.A. espera obtener el próximo año un BPA de 20 €/acción. Su director financiero estima que dentro de dos años ($t=2$) surgirá una oportunidad de inversión interesante que piensa que podría reportar una rentabilidad anual a perpetuidad sobre el capital invertido del 15%. La tasa de capitalización del mercado es del 12%.

Con esta información, indique:

a) Si se decidiera reinvertir el 80% de los beneficios esperados por la empresa en el año 2, ¿cuál sería el valor actual de las oportunidades de crecimiento en cada acción de la empresa?

b) ¿Cuál sería el precio actual de la acción?

c) ¿Cuál es la rentabilidad anual mínima que usted consideraría aceptable para la reinversión que la empresa se plantea realizar en $t=2$? Justifique su respuesta.


### Solución y Justificación Técnica

**Datos iniciales del problema:**

- Beneficio esperado en el año 1: $\text{BPA}_1 = 20\text{ €/acción}$
- Política en el año 1: no se retienen beneficios para inversión, por lo que el beneficio en $t=2$ se mantiene en $\text{BPA}_2 = 20\text{ €/acción}$ y $\text{Div}_1 = 20\text{ €}$
- Oportunidad de inversión en $t=2$: reinversión del $80\%$ de $\text{BPA}_2$ ($b_2 = 0,80$)
- Rentabilidad anual a perpetuidad sobre el capital invertido: $\text{ROE} = 15\% = 0,15$
- Tasa de capitalización del mercado: $r = 12\% = 0,12$


#### Apartado a) Cálculo del VAOC por acción

En $t=2$, el capital retenido y destinado a la nueva inversión es:

$$I_2 = b_2 \times \text{BPA}_2 = 0,80 \times 20 = 16\text{ €/acción}$$

El 20% restante se distribuye como dividendo corriente en ese año:

$$\text{Div}_2 = (1 - b_2) \times \text{BPA}_2 = 0,20 \times 20 = 4\text{ €/acción}$$

A partir de $t=3$, la inversión física rinde una tasa del 15% a perpetuidad, generando un incremento anual permanente de beneficio y tesorería de:

$$C = I_2 \times \text{ROE} = 16 \times 0,15 = 2,40\text{ €/acción anual}$$

El Valor Actual Neto de este proyecto evaluado en el momento en que se ejecuta ($t=2$) es:

$$\text{VAN}_2 = -I_2 + \frac{C}{r} = -16 + \frac{2,40}{0,12} = -16 + 20 = +4\text{ €/acción}$$

Dado que esta oportunidad de crecimiento no se ejecuta hoy sino dentro de dos años, su valor actual en el momento presente ($t=0$) exige descontar $\text{VAN}_2$ a la tasa de mercado durante dos periodos (diapositiva 64, Tema 2):

$$\text{VAOC} = \frac{\text{VAN}_2}{(1 + r)^2} = \frac{4}{(1 + 0,12)^2} = \frac{4}{1,2544} \approx 3,1888\text{ €} \implies \mathbf{3,19\text{ €/acción}}$$

\begin{figure}[H]
  \centering
  \input{src/tex/timeline_ej8.tex}
  \caption{Línea temporal de la reinversión en $t=2$, rentas perpetuas y descuento del VAOC a $t=0$.}
\end{figure}


#### Apartado b) Precio actual de la acción ($P_0$)

Aplicamos la formulación del VAOC:

$$P_0 = \frac{\text{BPA}_1}{r} + \text{VAOC} = \frac{20}{0,12} + 3,1888 = 166,6667 + 3,1888 = 169,8555\text{ €} \implies \mathbf{169,86\text{ €/acción}}$$

Podemos verificar la consistencia del resultado mediante el método directo de descuento de dividendos. A partir de $t=3$, el nuevo nivel de beneficio pasa a ser:

$$\text{BPA}_3 = \text{BPA}_2 + C = 20 + 2,40 = 22,40\text{ €/acción}$$

Al no contemplarse nuevas reinversiones futuras, la empresa reparte el 100% como dividendos a perpetuidad ($\text{Div}_t = 22,40$ € para todo $t \ge 3$). El valor de dicha perpetuidad en $t=2$ es:

$$P_2 = \frac{\text{Div}_3}{r} = \frac{22,40}{0,12} = 186,6667\text{ €}$$

Descontando los flujos a $t=0$:

$$\begin{aligned}
P_0 &= \frac{\text{Div}_1}{1 + r} + \frac{\text{Div}_2 + P_2}{(1 + r)^2} = \frac{20}{1,12} + \frac{4 + 186,6667}{(1,12)^2} \\
    &= 17,8571 + \frac{190,6667}{1,2544} = 17,8571 + 151,9983 = \mathbf{169,86\text{ €/acción}}
\end{aligned}$$

Ambas vías matemáticas coinciden exactamente.


#### Apartado c) Rentabilidad anual mínima admisible en $t=2$

Para que la reinversión resulte conveniente para los accionistas, el proyecto debe crear valor, lo que exige un Valor Actual Neto no negativo en $t=2$:

$$\text{VAN}_2 \ge 0 \iff -I_2 + \frac{I_2 \times \text{ROE}}{r} \ge 0 \iff \frac{\text{ROE}}{r} \ge 1 \iff \mathbf{\text{ROE} \ge r = 12\%}$$

La rentabilidad anual mínima aceptable es del **12%**. Si el rendimiento ofrecido por el proyecto fuera inferior al 12% (por ejemplo, un 10%), el VAN sería negativo y la dirección destruiría riqueza: los accionistas estarían perdiendo dinero respecto a recibir el dividendo líquido e invertirlo ellos mismos en activos financieros de riesgo equivalente al 12%.


## Ejercicio 9

### Enunciado

Disponemos de la siguiente información de la empresa Z:

- $\text{BPA}_1 = 80\text{ euros/acción}$.
- Tasa de reparto de dividendos: $80\%$.
- Se espera que los beneficios crezcan hasta el año 4, gracias a la obtención de una rentabilidad del 20% en sus reinversiones de los años 1, 2 y 3.
- Desde ese año en adelante, se consideran agotadas las oportunidades de crecimiento, de forma que se repartirán todos los beneficios como dividendos.
- La tasa de capitalización del mercado es del 12%.

SE PIDE:

a) El precio de la acción de la empresa Z en el año 4.

b) El precio actual de la acción de la empresa Z.


### Solución y Justificación Técnica

**Datos iniciales del problema:**

- $\text{BPA}_1 = 80\text{ €/acción}$
- Tasa de reparto durante los años 1, 2 y 3: $p = 80\% = 0,80$
- Tasa de retención: $b = 1 - 0,80 = 20\% = 0,20$
- Rentabilidad sobre reinversiones: $\text{ROE} = 20\% = 0,20$
- Tasa de crecimiento anual en los primeros periodos:
  $$g = b \times \text{ROE} = 0,20 \times 0,20 = 0,04 = 4\%$$
- A partir del año 4: se agotan las oportunidades de crecimiento y la tasa de reparto pasa al 100% ($p_4 = 1, b_4 = 0$).
- Coste de capital del mercado: $r = 12\% = 0,12$.


#### 1. Trayectoria de beneficios y dividendos por acción

Calculamos la evolución del beneficio y los dividendos año a año:

- **Año 1:**
  $$\text{BPA}_1 = 80,00\text{ €},\quad \text{Div}_1 = 80 \times 0,80 = 64,00\text{ €}$$
- **Año 2:**
  $$\text{BPA}_2 = \text{BPA}_1 \times (1 + g) = 80 \times 1,04 = 83,20\text{ €},\quad \text{Div}_2 = 83,20 \times 0,80 = 66,56\text{ €}$$
- **Año 3:**
  $$\text{BPA}_3 = \text{BPA}_2 \times (1 + g) = 83,20 \times 1,04 = 86,528\text{ €},\quad \text{Div}_3 = 86,528 \times 0,80 = 69,2224\text{ €}$$
- **Año 4:**
  $$\text{BPA}_4 = \text{BPA}_3 \times (1 + g) = 86,528 \times 1,04 = 89,9891\text{ €} \approx 89,99\text{ €}$$

En el año 4 se reparten todos los beneficios como dividendos, por lo que:

$$\text{Div}_4 = \text{BPA}_4 = 89,9891\text{ €}$$

Al no reinvertirse nada a partir del año 4, el beneficio se estabiliza de forma permanente: $\text{BPA}_t = 89,9891$ € y $\text{Div}_t = 89,9891$ € para todo $t \ge 5$.


#### Apartado a) Precio de la acción en el año 4 ($P_4$)

El precio ex-dividendo de la acción al final del año 4 representa el valor actualizado de los dividendos futuros a partir del año 5, los cuales configuran una renta perpetua constante sin crecimiento ($g=0$):

$$P_4 = \frac{\text{Div}_5}{r} = \frac{89,9891}{0,12} \approx 749,909\text{ €} \implies \mathbf{749,92\text{ €/acción}}$$

(El ligero ajuste a 749,92 € procede del uso de $\text{BPA}_4 = 89,99$ € redondeado: $89,99 / 0,12 = 749,9167 \approx 749,92$ €).


#### Apartado b) Precio actual de la acción ($P_0$)

Un inversor que adquiere la acción hoy percibe los dividendos de los años 1, 2 y 3, y en el año 4 cobra el dividendo $\text{Div}_4$ y puede liquidar la acción por su valor de mercado $P_4$. Actualizando el flujo de caja completo a la tasa $r = 12\%$:

$$P_0 = \frac{\text{Div}_1}{1 + r} + \frac{\text{Div}_2}{(1 + r)^2} + \frac{\text{Div}_3}{(1 + r)^3} + \frac{\text{Div}_4 + P_4}{(1 + r)^4}$$

Sustituyendo los valores calculados:

$$\frac{\text{Div}_1}{1,12} = \frac{64,00}{1,12} = 57,1429\text{ €}$$
$$\frac{\text{Div}_2}{(1,12)^2} = \frac{66,56}{1,2544} = 53,0612\text{ €}$$
$$\frac{\text{Div}_3}{(1,12)^3} = \frac{69,2224}{1,404928} = 49,2711\text{ €}$$
$$\frac{\text{Div}_4 + P_4}{(1,12)^4} = \frac{89,9891 + 749,9093}{1,573519} = \frac{839,8984}{1,573519} = 533,7717\text{ €}$$

Sumando los cuatro términos actualizados:

$$P_0 = 57,1429 + 53,0612 + 49,2711 + 533,7717 = 693,2469\text{ €} \implies \mathbf{693,25\text{ €/acción}}$$

\begin{figure}[H]
  \centering
  \input{src/tex/timeline_ej9.tex}
  \caption{Esquema temporal de dividendos crecientes y perpetuidad terminal del Ejercicio 9.}
\end{figure}

El resultado encaja con total precisión con la solución oficial.


## Ejercicio 10

### Enunciado

La empresa Green Rock Corp. tiene una rentabilidad sobre el capital invertido del 10% a perpetuidad y una tasa de crecimiento constante de sus reinversiones del 5%. El valor contable por acción es actualmente de 91€. Suponga que la ROE y la tasa de reparto de dividendos se mantiene constante durante los próximos 2 años. Después de esa fecha, la competencia hará que la ROE descienda al 8% a perpetuidad y la tasa de crecimiento constante baje al 2,4%. La tasa de capitalización del mercado se estima en el 8%.

Con esta información, determine:

1. El precio actual de la acción de la empresa Green Rock Corp., empleando el método del descuento de dividendos.

2. El precio actual de la acción de la empresa, detallando el cálculo previo del Valor Actual de la Oportunidades de Crecimiento (VAOC), explicando qué parte del precio se debe a las oportunidades de crecimiento.


### Solución y Justificación Técnica

**Datos iniciales del problema:**

- Valor contable por acción en $t=0$: $\text{VC}_0 = 91\text{ €}$
- Tasa de capitalización del mercado: $r = 8\% = 0,08$

**Fase 1 (años 1 y 2):**
- Rentabilidad sobre fondos propios: $\text{ROE}_1 = 10\% = 0,10$
- Crecimiento de reinversiones: $g_1 = 5\% = 0,05$
- Tasa de retención: $b_1 = \frac{g_1}{\text{ROE}_1} = \frac{0,05}{0,10} = 0,50\quad (50\%)$
- Tasa de reparto de dividendos: $p_1 = 1 - b_1 = 0,50\quad (50\%)$

**Fase 2 (año 3 en adelante):**
- La competencia erosiona los márgenes: $\text{ROE}_2 = 8\% = 0,08$
- Crecimiento a largo plazo: $g_2 = 2,4\% = 0,024$
- Nueva tasa de retención: $b_2 = \frac{g_2}{\text{ROE}_2} = \frac{0,024}{0,08} = 0,30\quad (30\%)$
- Nueva tasa de reparto de dividendos: $p_2 = 1 - b_2 = 0,70\quad (70\%)$


#### 1. Evolución contable y dividendos en los años 1 y 2

- **Año 1:**
  - Beneficio generado sobre el valor contable inicial:
    $$\text{BPA}_1 = \text{VC}_0 \times \text{ROE}_1 = 91 \times 0,10 = 9,10\text{ €}$$
  - Dividendo repartido:
    $$\text{Div}_1 = \text{BPA}_1 \times p_1 = 9,10 \times 0,50 = 4,55\text{ €}$$
  - Beneficio retenido (reinversión):
    $$I_1 = \text{BPA}_1 \times b_1 = 9,10 \times 0,50 = 4,55\text{ €}$$
  - Valor contable al cierre del año 1:
    $$\text{VC}_1 = \text{VC}_0 + I_1 = 91 + 4,55 = 95,55\text{ €}\quad (= 91 \times 1,05)$$

- **Año 2:**
  - Beneficio generado sobre los recursos propios existentes:
    $$\text{BPA}_2 = \text{VC}_1 \times \text{ROE}_1 = 95,55 \times 0,10 = 9,555\text{ €}$$
  - Dividendo repartido:
    $$\text{Div}_2 = \text{BPA}_2 \times p_1 = 9,555 \times 0,50 = 4,7775\text{ €}$$
  - Beneficio retenido:
    $$I_2 = 9,555 \times 0,50 = 4,7775\text{ €}$$
  - Valor contable al cierre del año 2:
    $$\text{VC}_2 = \text{VC}_1 + I_2 = 95,55 + 4,7775 = 100,3275\text{ €}\quad (= 91 \times 1,05^2)$$


#### 2. Régimen a partir del año 3 y valoración terminal en $t=2$

Al comenzar el año 3, el capital contable invertido en la empresa es $\text{VC}_2 = 100,3275$ €. Debido a la presión competitiva, este capital genera a partir de ahora un rendimiento del 8%:

$$\text{BPA}_3 = \text{VC}_2 \times \text{ROE}_2 = 100,3275 \times 0,08 = 8,0262\text{ €}$$

Con una tasa de reparto del 70%, el dividendo pagado en $t=3$ es:

$$\text{Div}_3 = \text{BPA}_3 \times p_2 = 8,0262 \times 0,70 = 5,61834\text{ €}$$

Dado que desde el año 3 los dividendos crecen al $g_2 = 2,4\%$ indefinidamente, aplicamos el modelo de Gordon y Shapiro para determinar el precio de la acción en $t=2$:

$$P_2 = \frac{\text{Div}_3}{r - g_2} = \frac{5,61834}{0,08 - 0,024} = \frac{5,61834}{0,056} = 100,3275\text{ €}$$

Obsérvese un hecho financiero capital: **$P_2 = \text{VC}_2 = 100,3275\text{ €}$**. En el momento en que la rentabilidad de las inversiones coincide con el coste de capital ($\text{ROE} = r = 8\%$), el valor de mercado de los fondos propios es exactamente igual a su valor contable (la ratio Q de Tobin se sitúa en la unidad). Cualquier reinversión futura genera un VAN idéntico a cero.


#### Apartado 1) Precio de la acción por descuento de dividendos

Descontamos los dividendos de los años 1 y 2 más el valor de salida $P_2$ a la tasa $r = 8\%$:

$$P_0 = \frac{\text{Div}_1}{1 + r} + \frac{\text{Div}_2 + P_2}{(1 + r)^2} = \frac{4,55}{1,08} + \frac{4,7775 + 100,3275}{(1,08)^2}$$

Calculando cada sumando:

$$\frac{4,55}{1,08} = 4,21296\text{ €}$$
$$\frac{105,105}{1,1664} = 90,11060\text{ €}$$

Sumando ambas aportaciones:

$$P_0 = 4,21296 + 90,11060 = 94,3236\text{ €} \implies \mathbf{94,32\text{ €/acción}}$$

\begin{figure}[H]
  \centering
  \input{src/tex/timeline_ej10.tex}
  \caption{Línea de flujos de Green Rock Corp. y transición por convergencia competitiva.}
\end{figure}


#### Apartado 2) Cálculo del VAOC y descomposición económica del precio

Para explicar qué parte del precio se debe a las oportunidades de crecimiento, analizamos los proyectos de reinversión futuros de la empresa:

1. **Reinversiones a partir del año 3:**
   Cualquier euro reinvertido en $t \ge 3$ obtiene $\text{ROE} = 8\%$. Como el coste de capital del mercado es también del $8\%$, el flujo perpetuo generado descuenta a la par:
   $$\text{VAN}_t = -I_t + \frac{I_t \times 0,08}{0,08} = -I_t + I_t = 0\quad \forall\, t \ge 3$$
   Las reinversiones a partir de $t=3$ no aportan nada al VAOC.

2. **Reinversión en el año 2 ($I_2 = 4,7775\text{ €}$):**
   Sus rendimientos comienzan en $t=3$, cuando la rentabilidad ya ha caído al 8%. Por tanto, genera $4,7775 \times 0,08$ a perpetuidad, rindiendo un $\text{VAN}_2 = 0$.

3. **Reinversión en el año 1 ($I_1 = 4,55\text{ €}$):**
   Esta es la única reinversión que aprovecha la rentabilidad del 10% antes de la entrada de la competencia:
   - En el año 2 genera un flujo de: $4,55 \times 10\% = 0,455\text{ €}$.
   - Del año 3 en adelante genera un flujo permanente al 8%: $4,55 \times 8\% = 0,364\text{ €/año}$.
   
   El VAN de esta inversión en $t=1$ es:
   $$\begin{aligned}
   \text{VAN}_1 &= -4,55 + \frac{0,455}{1,08} + \frac{0,364 / 0,08}{1,08} = -4,55 + \frac{0,455 + 4,55}{1,08} \\
                &= -4,55 + \frac{5,005}{1,08} = -4,55 + 4,6343 = \mathbf{+0,0843\text{ €}}
   \end{aligned}$$

El Valor Actual de las Oportunidades de Crecimiento en $t=0$ es el valor actualizado de ese $\text{VAN}_1$:

$$\text{VAOC} = \frac{\text{VAN}_1}{1 + r} = \frac{0,0843}{1,08} \approx \mathbf{0,08\text{ €/acción}}$$

Por su parte, el valor que tendrían hoy los activos existentes sin realizar ninguna reinversión ($\text{VC}_0 = 91$ € repartiendo todo su beneficio) es:
- Años 1 y 2 rindiendo al 10%: $91 \times 0,10 = 9,10$ € en $t=1$ y $t=2$.
- A partir de $t=3$ rindiendo al 8%: $91 \times 0,08 = 7,28$ € perpetuo.

$$\text{Valor sin crecimiento} = \frac{9,10}{1,08} + \frac{9,10}{(1,08)^2} + \frac{7,28 / 0,08}{(1,08)^2} = 8,4259 + 7,8018 + 78,0178 = 94,2455\text{ €}$$

Comprobamos la identidad aditiva:

$$P_0 = \text{Valor sin crecimiento} + \text{VAOC} = 94,2455 + 0,0780 = 94,3235\text{ €} \approx \mathbf{94,32\text{ €}}$$

De los 94,32 € que vale la acción, **94,24 €** corresponden a los activos ya instalados y únicamente **0,08 €** provienen de las oportunidades netas de crecimiento.

*Nota comparativa con la fórmula estándar de libro de texto:* Si se aplica la convención teórica rígida $P_0 = \frac{\text{BPA}_1}{r} + \text{VAOC}_{\text{estándar}}$, tomando como base una perpetuidad estática al nivel del año 1 ($\text{BPA}_1 / r = 9,10 / 0,08 = 113,75$ €), el $\text{VAOC}$ resultante sería:

$$\text{VAOC}_{\text{estándar}} = 94,32 - 113,75 = -19,43\text{ €}$$

Este valor negativo no significa que la empresa acometa proyectos destructivos de valor, sino que refleja el coste de la pérdida de ventaja competitiva: la imposibilidad de mantener el beneficio del año 1 de forma indefinida debido a la entrada de competidores que reducen la rentabilidad del 10% al 8%.


## Ejercicio 11

### Enunciado

La empresa North Atlantic S.A. se dedica al cultivo y venta de trigo, lo que le viene reportando unos beneficios netos anuales de 4.500.000 euros, importe que se prevé estable para los próximos años. Actualmente se está planteando introducirse en el cultivo y distribución de avena, lo que supondrá una inversión de 1.000.000 de euros en el año 1, previéndose la venta de 10.000 Tm/año de avena desde el año 2 en adelante. Los costes de producción y distribución ascienden a 100€/Tm, importe que se mantendrá constante a futuro y el precio previsto para la avena en los próximos años se estima en:

- Año 1: 140 €/Tm
- Año 2 y siguientes: 150 €/Tm

North Atlantic S.A. se financia sólo con fondos propios: tiene 1.000.000 de acciones en circulación y el coste de capitalización de las acciones es del 10%. Todos los beneficios de la empresa se reparten como dividendos excepto en el año 1, en que se reinvertirá la cantidad necesaria para llevar a cabo el nuevo proyecto de la avena. Suponga asimismo que la empresa mantendrá su actividad a perpetuidad y que estamos en un contexto sin impuestos.

a) Determine el valor actual de las oportunidades de crecimiento de esta empresa.

b) Calcule el precio actual de las acciones de esta empresa.

c) Calcule el ratio $\text{BPA}_1/P_0$ y explique por qué no coincide con el coste de capital del 10%.


### Solución y Justificación Técnica

**Datos iniciales del problema:**

- Actividad tradicional (Trigo): beneficios netos de $4.500.000\text{ €/año}$ constantes a perpetuidad
- Número de acciones en circulación: $N = 1.000.000\text{ acciones}$
- Coste de los fondos propios: $r = 10\% = 0,10$
- Beneficio por acción de la actividad base:
  $$\text{BPA}_1(\text{trigo}) = \frac{4.500.000}{1.000.000} = 4,50\text{ €/acción}$$

**Parámetros del proyecto de inversión en Avena:**
- Desembolso en $t=1$: $I_1 = 1.000.000\text{ €}$
- Volumen de producción: $10.000\text{ Tm/año}$ a partir de $t=2$
- Coste operativo unitario: $100\text{ €/Tm}$ constante
- Ingresos netos del proyecto de avena:
  - En $t=2$ (primer año operativo de venta): precio $140\text{ €/Tm}$, margen unitario $140 - 100 = 40\text{ €/Tm}$.
    $$\text{Flujo}_2 = 10.000 \times 40 = 400.000\text{ €}$$
  - En $t \ge 3$ (a partir del segundo año operativo): precio $150\text{ €/Tm}$, margen unitario $150 - 100 = 50\text{ €/Tm}$.
    $$\text{Flujo}_t = 10.000 \times 50 = 500.000\text{ €/año a perpetuidad}$$


#### Apartado a) Determinación del VAOC de la empresa

El proyecto de avena constituye una oportunidad de crecimiento que se acomete en $t=1$. Evaluamos su Valor Actual Neto en el momento del desembolso ($t=1$):

$$\text{VAN}_1 = -I_1 + \frac{\text{Flujo}_2}{1 + r} + \frac{\text{Flujo}_{3+} / r}{1 + r}$$

Sustituyendo los importes:

$$\text{VAN}_1 = -1.000.000 + \frac{400.000}{1,10} + \frac{500.000 / 0,10}{1,10} = -1.000.000 + \frac{400.000 + 5.000.000}{1,10}$$
$$\text{VAN}_1 = -1.000.000 + \frac{5.400.000}{1,10} = -1.000.000 + 4.909.090,91 = 3.909.090,91\text{ €}$$

El Valor Actual de las Oportunidades de Crecimiento para el conjunto de la empresa en el momento actual ($t=0$) es el valor descontado de este $\text{VAN}_1$:

$$\text{VAOC}_{\text{total}} = \text{VAN}_0 = \frac{\text{VAN}_1}{1 + r} = \frac{3.909.090,91}{1,10} = \mathbf{3.553.719,01\text{ €}}$$

Por acción ($N = 1.000.000$):

$$\text{VAOC} = \frac{3.553.719,01}{1.000.000} \approx \mathbf{3,5537\text{ €/acción}} \implies \mathbf{3,55\text{ €/acción}}$$

\begin{figure}[H]
  \centering
  \input{src/tex/timeline_ej11.tex}
  \caption{Cronología del proyecto de avena y su aportación al VAOC en North Atlantic S.A.}
\end{figure}


#### Apartado b) Precio actual de las acciones ($P_0$)

El valor de la acción se descompone en el valor de los activos tradicionales de trigo bajo una política de reparto total más el valor presente de la nueva línea de negocio de avena:

$$P_0 = \frac{\text{BPA}_1}{r} + \text{VAOC} = \frac{4,50}{0,10} + 3,5537 = 45,00 + 3,5537 = 48,5537\text{ €} \implies \mathbf{48,55\text{ €/acción}}$$


#### Apartado c) Cálculo del ratio $\text{BPA}_1/P_0$ y justificación técnica

Calculamos el ratio del beneficio del próximo año sobre el precio de cotización (la inversa del PER):

$$\frac{\text{BPA}_1}{P_0} = \frac{4,50}{48,5537} \approx 0,09268 = \mathbf{9,27\%}$$

El ratio arroja un 9,27%, cifra estrictamente inferior a la tasa de capitalización de mercado del 10% ($r = 10\%$).

**Explicación teórica (diapositiva 58, Tema 2):**

La relación analítica general entre el ratio BPA/Precio y la tasa de descuento $r$ viene dada por:

$$\frac{\text{BPA}_1}{P_0} = r \left(1 - \frac{\text{VAOC}}{P_0}\right)$$

A partir de esta identidad:

1. Si $\text{VAOC} = 0$ (empresa vaca lechera o de renta pura), $\frac{\text{BPA}_1}{P_0} = r$. El ratio estima con exactitud la tasa de capitalización.
2. Si $\text{VAOC} > 0$ (empresa con oportunidades de crecimiento rentables), los inversores pagan en el precio de la acción no solo por los beneficios presentes, sino por el valor actual de los proyectos futuros con VAN positivo. Como consecuencia, el denominador $P_0$ aumenta, deprimiendo el ratio por debajo del coste de capital ($\frac{\text{BPA}_1}{P_0} < r$). El ratio BPA/Precio **infravalora** la rentabilidad exigida.
3. Si $\text{VAOC} < 0$ (empresa que reinvierte a tasas inferiores al coste de capital), el ratio BPA/Precio sobrevaloraría $r$.

Comprobamos numéricamente la fórmula para North Atlantic S.A.:

$$\frac{\text{BPA}_1}{P_0} = 0,10 \times \left(1 - \frac{3,5537}{48,5537}\right) = 0,10 \times (1 - 0,07319) = 0,10 \times 0,92681 = 9,27\%$$

La discrepancia se debe en exclusiva a que North Atlantic S.A. posee un proyecto con $\text{VAN} > 0$ cuyo valor ya está incorporado en la cotización de mercado.
