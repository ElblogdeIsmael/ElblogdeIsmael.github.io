# Valoración de Acciones y Modelo de Gordon-Shapiro

Este capítulo aborda la valoración de acciones ordinarias mediante el descuento de flujos de dividendos, la formulación clásica de Gordon y Shapiro, y la relación entre la tasa de reinversión de beneficios y la rentabilidad sobre los fondos propios.


## Ejercicio 4

### Enunciado

Una empresa que el próximo año espera obtener un BPA de 20 euros/acción prevé que sus dividendos pueden crecer indefinidamente al 4% anual. Si el dividendo del próximo año es de 10 euros/acción y la tasa de capitalización del mercado es del 8%, podemos afirmar que:

a) Esta empresa tiene oportunidades de crecimiento que el mercado valora en 250 euros/acción, debido a que reinvierte parte de sus beneficios y obtiene de esas reinversiones una tasa de rentabilidad conveniente.

b) Todo lo que el mercado valora en esta empresa son sus oportunidades de crecimiento (250 euros/acción).

c) La empresa tiene oportunidades de crecimiento, ya que reinvierte parte de sus beneficios, pero no es posible cuantificarlas, al no conocerse la rentabilidad que está obteniendo en sus reinversiones.

d) El VAOC de esta empresa es nulo pues, pese a reinvertir parte de sus beneficios, la rentabilidad que obtiene en sus reinversiones es exactamente igual a la tasa de capitalización del mercado.


### Solución y Justificación Técnica

**Respuesta correcta: d)**

#### 1. Datos iniciales

- Beneficio por acción esperado en $t=1$: $\text{BPA}_1 = 20\text{ €/acción}$
- Dividendo por acción esperado en $t=1$: $\text{Div}_1 = 10\text{ €/acción}$
- Tasa esperada de crecimiento constante: $g = 4\% = 0,04$
- Tasa de capitalización del mercado: $r = 8\% = 0,08$

#### 2. Deducción de la tasa de rentabilidad de las reinversiones (ROE)

La tasa de reparto de dividendos (pay-out) de la sociedad es:

$$p = \frac{\text{Div}_1}{\text{BPA}_1} = \frac{10}{20} = 0,50\quad (50\%)$$

Por complementariedad, la tasa de retención de beneficios (arado o plowback ratio) resulta:

$$b = 1 - p = 1 - 0,50 = 0,50\quad (50\%)$$

La tasa de crecimiento sostenible de beneficios y dividendos responde a la identidad clásica (Brealey, Myers y Allen, 2023, cap. 4):

$$g = b \times \text{ROE}$$

Despejando la rentabilidad sobre los fondos propios reinvertidos:

$$\text{ROE} = \frac{g}{b} = \frac{0,04}{0,50} = 0,08 = 8\%$$

#### 3. Valoración de la acción y descomposición del precio

Calculamos el precio teórico de la acción aplicando el modelo de descuento de dividendos con crecimiento constante de Gordon y Shapiro:

$$P_0 = \frac{\text{Div}_1}{r - g} = \frac{10}{0,08 - 0,04} = \frac{10}{0,04} = 250\text{ €/acción}$$

Por otro lado, Stewart C. Myers demostró que el precio de una acción se descompone en dos magnitudes aditivas:

$$P_0 = \frac{\text{BPA}_1}{r} + \text{VAOC}$$

Donde el primer término representa el valor de la empresa si repartiera el 100% de sus beneficios en forma de dividendos (política de vaca lechera o crecimiento nulo):

$$\text{Valor sin crecimiento} = \frac{\text{BPA}_1}{r} = \frac{20}{0,08} = 250\text{ €/acción}$$

Despejando el Valor Actual de las Oportunidades de Crecimiento:

$$\text{VAOC} = P_0 - \frac{\text{BPA}_1}{r} = 250 - 250 = 0\text{ €/acción}$$

#### 4. Interpretación económica

El VAOC es cero porque la rentabilidad que la empresa obtiene de sus reinversiones coincide exactamente con la rentabilidad exigida por los inversores en el mercado ($\text{ROE} = r = 8\%$). 

Retener el 50% de los beneficios para reinvertirlos a una tasa idéntica al coste de capital genera proyectos con Valor Actual Neto nulo ($\text{VAN} = 0$). Ni crea ni destruye riqueza para los accionistas: el crecimiento nominal de los dividendos al 4% queda perfectamente neutralizado por el menor dividendo repartido hoy. Por ello, la afirmación d) es la única correcta.


## Ejercicio 5

### Enunciado

Una empresa que el año próximo prevé obtener un BPA de 25 euros/acción tiene una tasa de reparto de dividendos prevista del 40%. La empresa estima que sus dividendos podrán crecer hasta el año 6 a razón de un 6% anual. Del año 6 en adelante, se prevé que sus oportunidades de crecer se habrán agotado, por lo que se repartirán indefinidamente todos sus beneficios como dividendos. Si la tasa de capitalización del mercado es del 9%, el precio de una acción de esta empresa (utilizando 2 decimales para los cálculos) es de:

a) 265,09 euros/acción.

b) 285,04 euros/acción.

c) 415,19 euros/acción.

d) 333,33 euros/acción.


### Solución y Justificación Técnica

**Respuesta correcta: b)**

#### 1. Datos iniciales

- $\text{BPA}_1 = 25\text{ €/acción}$
- Tasa de reparto en fase de expansión ($t=1$ a $t=5$): $p = 40\% = 0,40$
- Tasa de crecimiento de dividendos: $g = 6\% = 0,06$
- Tasa de capitalización: $r = 9\% = 0,09$
- Cambio de política en $t=6$: se agotan las oportunidades de crecimiento, por lo que la tasa de reparto pasa al 100% ($p_6 = 1$).

#### 2. Línea temporal y dividendos de la fase de crecimiento ($t=1$ a $t=5$)

El primer dividendo pagado en $t=1$ es:

$$\text{Div}_1 = \text{BPA}_1 \times p = 25 \times 0,40 = 10,00\text{ €}$$

Los dividendos crecen al 6% anual hasta el año 5 inclusive:

- $\text{Div}_1 = 10,00\text{ €}$
- $\text{Div}_2 = 10,00 \times 1,06 = 10,60\text{ €}$
- $\text{Div}_3 = 10,60 \times 1,06 = 11,24\text{ €}$
- $\text{Div}_4 = 11,24 \times 1,06 = 11,91\text{ €}$
- $\text{Div}_5 = 11,91 \times 1,06 = 12,62\text{ €}$

#### 3. Beneficio y dividendo terminal a partir de $t=6$

Durante los primeros 5 años los beneficios crecen al 6% anual gracias a las reinversiones. En el año 6, el beneficio por acción alcanza:

$$\text{BPA}_6 = \text{BPA}_1 \times (1 + g)^5 = 25 \times (1,06)^5 = 25 \times 1,338226 = 33,46\text{ €}$$

Dado que a partir del año 6 la empresa reparte el 100% de los beneficios generados y no retiene nada para nuevas reinversiones, el crecimiento futuro se detiene por completo ($g = 0$). Todos los dividendos futuros a partir de $t=6$ se mantienen constantes e iguales al beneficio:

$$\text{Div}_t = \text{BPA}_6 = 33,46\text{ €},\quad \forall\, t \ge 6$$

El valor en $t=5$ de esta renta perpetua constante es:

$$P_5 = \frac{\text{Div}_6}{r} = \frac{33,46}{0,09} = 371,78\text{ €}$$

\begin{figure}[H]
  \centering
  \input{src/tex/timeline_ej5.tex}
  \caption{Cronología de flujos de caja y descuento temporal del Ejercicio 5.}
\end{figure}

#### 4. Cálculo del precio actual ($P_0$)

Actualizamos cada dividendo de la primera fase junto con el valor terminal $P_5$ a la tasa de descuento $r = 9\%$:

$$P_0 = \sum_{t=1}^5 \frac{\text{Div}_t}{(1 + r)^t} + \frac{P_5}{(1 + r)^5}$$

Desglosando término a término con redondeo a dos decimales:

- $\text{VA}(\text{Div}_1) = \frac{10,00}{1,09} = 9,17\text{ €}$
- $\text{VA}(\text{Div}_2) = \frac{10,60}{(1,09)^2} = \frac{10,60}{1,1881} = 8,92\text{ €}$
- $\text{VA}(\text{Div}_3) = \frac{11,24}{(1,09)^3} = \frac{11,24}{1,2950} = 8,68\text{ €}$
- $\text{VA}(\text{Div}_4) = \frac{11,91}{(1,09)^4} = \frac{11,91}{1,4116} = 8,44\text{ €}$
- $\text{VA}(\text{Div}_5) = \frac{12,62}{(1,09)^5} = \frac{12,62}{1,5386} = 8,20\text{ €}$
- $\text{VA}(P_5) = \frac{371,78}{(1,09)^5} = \frac{371,78}{1,53862} = 241,63\text{ €}$

Sumando las aportaciones actualizadas:

$$P_0 = 9,17 + 8,92 + 8,68 + 8,44 + 8,20 + 241,63 = 285,04\text{ €/acción}$$

Coincide con la alternativa b).


## Ejercicio 6

### Enunciado

Las acciones de la sociedad X cotizan actualmente a 73 euros/acción. El BPA esperado para el próximo año es de 2,80 euros/acción, del que se espera repartir un dividendo de 1,68 euros/acción. Si la rentabilidad que esta empresa puede esperar obtener en sus reinversiones es del 20%, es posible afirmar que:

a) La tasa esperada de crecimiento del dividendo será del 12%, y la tasa de capitalización del mercado ascenderá aproximadamente al 14,3%.

b) La tasa esperada de crecimiento del dividendo será del 8%, y la tasa de capitalización del mercado ascenderá aproximadamente al 10,3%.

c) La tasa esperada de crecimiento del dividendo será del 10,3%, y la tasa de capitalización del mercado ascenderá aproximadamente al 8%.

d) Las respuestas a), b) y c) son falsas.


### Solución y Justificación Técnica

**Respuesta correcta: b)**

#### 1. Datos iniciales

- Cotización actual de la acción: $P_0 = 73\text{ €/acción}$
- Beneficio por acción esperado en $t=1$: $\text{BPA}_1 = 2,80\text{ €}$
- Dividendo por acción esperado en $t=1$: $\text{Div}_1 = 1,68\text{ €}$
- Rentabilidad sobre reinversiones: $\text{ROE} = 20\% = 0,20$

#### 2. Tasa de retención y tasa de crecimiento esperada

Calculamos la tasa de reparto de dividendos:

$$p = \frac{\text{Div}_1}{\text{BPA}_1} = \frac{1,68}{2,80} = 0,60\quad (60\%)$$

La tasa de retención de beneficios resulta:

$$b = 1 - p = 1 - 0,60 = 0,40\quad (40\%)$$

Con ello, la tasa esperada de crecimiento de los dividendos es:

$$g = b \times \text{ROE} = 0,40 \times 0,20 = 0,08 = 8\%$$

#### 3. Estimación de la tasa de capitalización del mercado ($r$)

Bajo la hipótesis de crecimiento constante, el precio de cotización responde a la fórmula de Gordon y Shapiro:

$$P_0 = \frac{\text{Div}_1}{r - g}$$

Despejamos la tasa de capitalización $r$:

$$r = \frac{\text{Div}_1}{P_0} + g$$

Sustituyendo los valores del problema:

$$r = \frac{1,68}{73} + 0,08 \approx 0,02301 + 0,08 = 0,10301 = 10,30\%$$

La rentabilidad esperada por el mercado se compone de un rendimiento por dividendo (dividend yield) del 2,30% y una ganancia de capital esperada del 8%, sumando un **10,3%**. La opción b) es la respuesta correcta.


## Ejercicio 7

### Enunciado

Indique cuál de las siguientes afirmaciones es correcta:

a) La fórmula del flujo de tesorería descontado con crecimiento constante es apropiada para calcular el precio de las acciones de una empresa que viene experimentando en los últimos años una tasa muy elevada de crecimiento de los dividendos.

b) El crecimiento que una empresa pueda experimentar en el futuro depende exclusivamente de la proporción de sus beneficios anuales que la misma destine a reinversión.

c) El crecimiento que una empresa pueda experimentar en el futuro depende exclusivamente de la rentabilidad que pueda obtener de las oportunidades de inversión futuras que la misma encuentre.

d) Las respuestas a), b) y c) son falsas.


### Solución y Justificación Técnica

**Respuesta correcta: d)**

Examinamos de manera crítica cada una de las tres primeras proposiciones:

1. **Análisis de la opción a):**
   La fórmula de Gordon y Shapiro ($P_0 = \frac{\text{Div}_1}{r - g}$) descansa en la hipótesis matemática de que la tasa de crecimiento $g$ se mantendrá constante a perpetuidad y será estrictamente menor que la tasa de descuento del mercado ($g < r$). Si una empresa atraviesa una etapa de crecimiento extraordinario (donde a menudo $g > r$), aplicar directamente este modelo arrojaría un denominador negativo o un precio absurdo. En tales circunstancias, es indispensable utilizar modelos de descuento en dos o tres fases (Brealey, Myers y Allen, 2023, cap. 4). Por tanto, la afirmación a) es falsa.

2. **Análisis de la opción b):**
   La tasa de crecimiento de los beneficios depende de dos factores simultáneos: el porcentaje de beneficios retenidos ($b$) y la rentabilidad obtenida sobre esa retención ($\text{ROE}$), según la relación $g = b \times \text{ROE}$. Retener una gran parte del beneficio no genera crecimiento alguno si el capital se acumula ocioso o se invierte en proyectos sin rentabilidad ($\text{ROE} = 0$). No depende exclusivamente de la retención. Por tanto, la afirmación b) es falsa.

3. **Análisis de la opción c):**
   De forma análoga, disponer de proyectos sumamente rentables en el mercado ($\text{ROE} > 0$) no genera crecimiento interno si la empresa decide repartir la totalidad de sus beneficios como dividendos ($p = 100\% \implies b = 0$). Sin capital retenido para financiar esas oportunidades, el beneficio por acción permanecerá estancado. No depende exclusivamente de la rentabilidad potencial. Por tanto, la afirmación c) es falsa.

Al ser falsas las opciones a), b) y c), la respuesta correcta es la **d)**.
