# Tema 3: Criterios de Valoración de Inversiones

Este capítulo aborda de manera analítica y comparada los principales métodos empleados en la evaluación y selección de proyectos de presupuesto de capital. Se analiza la supremacía normativa del Valor Actual Neto (VAN), las limitaciones del Plazo de Recuperación (*Payback* simple y descontado), y la formulación de la Tasa Interna de Rentabilidad (TIR), desgranando con detalle matemático sus fallos estructurales en proyectos mutuamente excluyentes, flujos no convencionales y préstamos, así como el criterio del Índice de Rentabilidad bajo restricciones de racionamiento de capital.


## El Criterio del Valor Actual Neto (VAN)

El objetivo de la dirección financiera, consagrado por el Teorema de Separación de Fisher, reside en acometer aquellas decisiones de inversión que maximicen la riqueza neta de los accionistas. El criterio metodológicamente superior para discriminar qué proyectos cumplen este propósito es el **Valor Actual Neto (VAN)**.

### Formulación matemática y componentes

El VAN mide el incremento neto de riqueza que un proyecto de inversión aporta a la empresa, expresado en unidades monetarias del momento presente ($t=0$). Se calcula restando el desembolso inicial de inversión ($I_0$) del valor actual de la corriente de flujos de tesorería netos generados a lo largo de su vida útil:

$$\text{VAN} = -I_0 + \sum_{t=1}^{n} \frac{F_t}{(1+k)^t}$$

Donde:
- $I_0$ representa el desembolso inicial exigido para adquirir los activos reales en $t=0$.
- $F_t$ es el flujo de tesorería neto generado por el proyecto en el periodo $t$ ($t=1, 2, \dots, n$).
- $k$ es el coste de oportunidad del capital (tasa de descuento), que refleja la rentabilidad esperada a la que renuncian los inversores en el mercado de capitales por no colocar sus fondos en activos de riesgo equivalente.
- $n$ es el horizonte temporal o vida útil económica del proyecto.

### Regla de decisión

- **Si $\text{VAN} > 0$:** La inversión genera una rentabilidad superior a la exigida por el mercado para su nivel de riesgo. El excedente se transfiere íntegramente a los fondos propios de la empresa, elevando el valor de sus acciones. **El proyecto debe aceptarse.**
- **Si $\text{VAN} < 0$:** La inversión no compensa el coste de oportunidad del dinero y el riesgo asumido. Acometerlo destruiría riqueza patrimonial. **El proyecto debe rechazarse.**
- **Si $\text{VAN} = 0$:** La inversión genera exactamente la rentabilidad que demanda el mercado. La empresa cubre sus costes de capital sin alterar el valor de mercado de sus acciones; el proyecto resulta indiferente desde una perspectiva puramente financiera.

### Propiedades teóricas del VAN

Frente a cualquier otra métrica contable o financiera, el VAN reúne tres propiedades que lo convierten en el único criterio universalmente infalible (Brealey, Myers, Allen y Edmans, 2023, cap. 5):

1. **Reconocimiento íntegro del valor temporal del dinero:**
   Pondera de forma exacta el momento cronológico de cada cobro y pago, descontándolo mediante factores compuestos $(1+k)^t$.
2. **Independencia de criterios subjetivos y contables:**
   Depende exclusivamente de los flujos de caja reales del proyecto y de la tasa de descuento fijada por el mercado, sin verse distorsionado por preferencias personales de los gestores, políticas de dividendos o elecciones de normas contables.
3. **Propiedad aditiva (Principio de aditividad del valor de mercado):**
   El valor actual neto de dos proyectos independientes combinados es estrictamente igual a la suma algebraica de sus valores individuales:

$$\text{VAN}(A + B) = \text{VAN}(A) + \text{VAN}(B)$$

Esta propiedad es vital para las grandes corporaciones, pues permite que directores de distintas filiales o divisiones tomen decisiones de inversión descentralizadas: si cada división acomete proyectos con VAN positivo, la suma de todas sus decisiones maximiza sinérgicamente el valor global del grupo.


## El Criterio del Plazo de Recuperación (*Payback*)

El Plazo de Recuperación (habitualmente denominado *Payback*) es un criterio clásico de selección de inversiones muy extendido en la práctica empresarial debido a su aparente simplicidad intuitiva.

### Definición y cálculo

El Plazo de Recuperación se define como el tiempo cronológico exacto que tarda un proyecto en generar suficientes flujos de tesorería para recuperar el desembolso inicial $I_0$.

Si un proyecto exige $I_0 = 100.000$ € y genera flujos constantes de $25.000$ € anuales, su plazo de recuperación es:

$$\text{PR} = \frac{100.000}{25.000} = 4\text{ años}$$

Si los flujos son irregulares, se van acumulando año tras año hasta alcanzar el desembolso inicial, interpolando linealmente la fracción del último ejercicio.

**Regla de decisión:** La dirección fija de forma exógena un plazo de corte arbitrario ($T^*$). Se aceptan los proyectos cuyo plazo de recuperación sea inferior al corte ($\text{PR} \le T^*$), jerarquizando en primer lugar los que devuelvan antes la liquidez.

### Defectos estructurales del Payback

A pesar de su popularidad como indicador rápido de liquidez o riesgo político en entornos convulsos, la teoría financiera prohíbe utilizar el Payback como criterio principal de decisión debido a tres defectos insalvables:

1. **Ignora el valor temporal del dinero:**
   Suma algebraicamente euros de distintos años como si fueran idénticos. Un euro ingresado en el año 1 tiene el mismo peso que un euro ingresado en el año 4, ignorando el coste financiero del capital durante ese intervalo.
2. **Ignora por completo todos los flujos posteriores a la fecha de corte:**
   Consideremos dos proyectos excluyentes con desembolso inicial de 10.000 €:
   - *Proyecto A:* Genera 5.000 € en el año 1 y 5.000 € en el año 2, y cero en los años sucesivos. Su Payback es de 2 años.
   - *Proyecto B:* Genera 2.000 € en el año 1, 8.000 € en el año 2, y 100.000 € anuales durante los siguientes 15 años. Su Payback es de 2 años y un mes.
   Bajo un corte de 2 años, el Payback elegiría el Proyecto A y rechazaría el B, destruyendo una fuente inmensa de riqueza a largo plazo.
3. **Fijación arbitraria del umbral de corte:**
   No existe ningún fundamento económico que justifique por qué el plazo límite deba ser dos, tres o cuatro años. Depende exclusivamente del capricho o aversión al riesgo del directivo.

### El Plazo de Recuperación Descontado

Para corregir el primer defecto del Payback simple se propuso el **Plazo de Recuperación Descontado**: los flujos de tesorería futuros se descuentan previamente al coste de oportunidad del capital $k$ antes de proceder a su acumulación temporal:

$$\sum_{t=1}^{\text{PRD}} \frac{F_t}{(1+k)^t} = I_0$$

Aunque este método resuelve la omisión del valor del tiempo (garantizando que un proyecto aceptado tenga al menos $\text{VAN} \ge 0$), **sigue arrastrando el segundo defecto crucial**: ignora sistemáticamente cualquier flujo de tesorería que se materialice después de haber amortizado el desembolso inicial, sesgando las decisiones corporativas contra inversiones estratégicas de largo alcance.


## La Tasa Interna de Rentabilidad (TIR)

La Tasa Interna de Rentabilidad (TIR) es el criterio alternativo más utilizado frente al VAN. Se define como aquella tasa de descuento intrínseca que iguala exactamente el Valor Actual Neto de un proyecto a cero.

### Definición matemática

Matemáticamente, la TIR es la raíz de la ecuación polinómica de grado $n$:

$$\text{VAN}(\text{TIR}) = -I_0 + \sum_{t=1}^{n} \frac{F_t}{(1 + \text{TIR})^t} = 0$$

Gráficamente, la TIR representa el punto de corte del perfil del VAN (la curva del VAN en función de la tasa de descuento) con el eje de abscisas.

**Regla de decisión convencional:**
- **Aceptar el proyecto si $\text{TIR} > k$:** El proyecto ofrece una rentabilidad interna superior al coste de oportunidad del capital exigido por el mercado.
- **Rechazar el proyecto si $\text{TIR} < k$:** El proyecto no genera suficiente rentabilidad para compensar a los proveedores de fondos.
- **Indiferente si $\text{TIR} = k$.**

En proyectos de inversión simples o convencionales (un único desembolso inicial negativo en $t=0$ seguido de una serie continuada de flujos estrictamente positivos en $t \ge 1$) y evaluados de forma aislada e independiente, la regla de la TIR y la regla del VAN conducen exactamente a la misma conclusión de aceptación o rechazo.


## Fallos Estructurales y Defectos de la TIR

Aunque la TIR goza de gran aceptación porque expresa el rendimiento en formato de porcentaje anual (facilitando la comunicación comercial), presenta graves anomalías matemáticas y económicas que pueden inducir a errores catastróficos si se utiliza como criterio jerarquizador (Brealey et al., 2023, cap. 5; Diapositivas UGR Tema 3).

### Defecto 1: Inversión frente a Financiación (El signo de la pendiente del VAN)

Para que la regla convencional de la TIR funcione ("aceptar si $\text{TIR} > k$"), el VAN del proyecto debe ser una función monótona decreciente de la tasa de descuento (su pendiente debe ser negativa). Esto ocurre cuando el proyecto es una **inversión** (salida inicial de fondos seguida de entradas).

Sin embargo, si la estructura de flujos se invierte, el proyecto se transforma en una operación de **financiación** o endeudamiento: la empresa recibe liquidez en $t=0$ y se compromete a realizar pagos en periodos futuros.

Consideremos el caso analizado en las diapositivas de la UGR (Tema 3, diapositivas 7 y 8):

| Magnitud | Proyecto A (Financiación) | Proyecto B (Inversión) |
| :--- | :--- | :--- |
| Flujo inicial ($t=0$) | $+100$ € (captación) | $-100$ € (desembolso) |
| Flujo año 1 ($t=1$) | $-150$ € (devolución) | $+150$ € (cobro) |
| Coste de capital ($k$) | $10\%$ | $10\%$ |
| **TIR** | **$50\%$** | **$50\%$** |
| **VAN al $10\%$** | **$-36,36$ €** | **$+36,36$ €** |

Ambos proyectos arrojan exactamente una $\text{TIR} = 50\%$. Sin embargo:
- En el Proyecto B (inversión), obtener un $50\%$ cuando el mercado ofrece un $10\%$ es excelente: aporta un valor neto de $+36,36$ €.
- En el Proyecto A (financiación), la empresa está pidiendo prestados 100 € hoy a cambio de devolver 150 € dentro de un año, lo que supone endeudarse a un coste financiero del $50\%$ cuando el mercado crediticio ofrece préstamos al $10\%$. Destruye un valor neto de $-36,36$ €.

En proyectos de financiación, la curva del VAN tiene pendiente positiva: **la regla de la TIR se invierte por completo** (habría que aceptar solo si $\text{TIR} < k$). La TIR es ciega a la naturaleza del proyecto y no distingue si se está invirtiendo o pidiendo prestado.

### Defecto 2: Múltiples TIR o inexistencia de rentabilidad real (Regla de Descartes)

La ecuación que define la TIR es un polinomio de grado $n$ en la variable $x = 1/(1+\text{TIR})$. Según el teorema fundamental del álgebra y la **Regla de los signos de Descartes**, un polinomio puede tener tantas raíces reales positivas como cambios de signo experimente la corriente cronológica de flujos de tesorería.

En proyectos no convencionales (donde a flujos positivos les suceden flujos negativos, frecuentes en centrales nucleares con costes de desmantelamiento, explotaciones mineras con restauración medioambiental o proyectos con revisiones intermedias de maquinaria), existen múltiples cambios de signo.

Consideremos el ejemplo docente de la UGR (Tema 3, diapositiva 9):
- $F_0 = -22$ €
- $F_1 = +15$ €
- $F_2 = +15$ €
- $F_3 = +15$ €
- $F_4 = +15$ €
- $F_5 = -40$ €

En este proyecto hay dos cambios de signo: del año 0 al 1 (de negativo a positivo) y del año 4 al 5 (de positivo a negativo).
Al calcular el perfil del VAN frente a distintas tasas de descuento, la curva corta al eje de abscisas en dos puntos distintos:
- Primera raíz: $\text{TIR}_1 \approx 7,5\%$
- Segunda raíz: $\text{TIR}_2 \approx 28,3\%$

El VAN es positivo únicamente para tasas de descuento comprendidas dentro del intervalo $[7,5\%, 28,3\%]$. ¿Cuál es la rentabilidad intrínseca del proyecto? Ninguna de las dos tasas responde a la pregunta. La regla de la TIR queda totalmente invalidada y carece de significado económico.

En situaciones extremas, la curva de VAN de un proyecto puede situarse permanentemente por encima o por debajo del eje sin llegar a cortarlo nunca: en ese escenario no existe ninguna TIR real, a pesar de que el proyecto tiene un VAN perfectamente definido a cualquier coste de capital.

### Defecto 3: Proyectos mutuamente excluyentes y escala de la inversión

Dos proyectos son **mutuamente excluyentes** cuando la aceptación de uno impide físicamente o económicamente acometer el otro (por ejemplo, construir un almacén logístico o un edificio residencial sobre el mismo solar). En tales casos, no basta con saber si son rentables individualmente: es imprescindible **jerarquizarlos** correctamente para elegir el mejor.

La TIR es una medida de rentabilidad relativa o porcentual, completamente ciega al tamaño absoluto de la inversión.

Consideremos dos proyectos excluyentes con coste de capital $k = 10\%$:

| Proyecto | Desembolso ($I_0$) | Flujo en $t=1$ | TIR | VAN (al 10%) |
| :--- | :--- | :--- | :--- | :--- |
| **Proyecto A** | $-10$ € | $+25$ € | $150\%$ | $+12,73$ € |
| **Proyecto B** | $-100.000$ € | $+140.000$ € | $40\%$ | $+27.272,73$ € |

Si un directivo aplica la regla de la TIR, seleccionará el Proyecto A porque ofrece una espectacular rentabilidad del $150\%$ frente al $40\%$ del Proyecto B. Sin embargo, el Proyecto A solo genera 12,73 € de incremento patrimonial, mientras que el Proyecto B aporta más de 27.000 € de riqueza neta al accionariado.

El objetivo del director financiero es maximizar euros de valor absoluto, no porcentajes. El VAN jerarquiza con total precisión eligiendo el Proyecto B.

### Defecto 4: Proyectos con distinta distribución temporal y la Tasa de Fisher

Incluso cuando dos proyectos mutuamente excluyentes exigen exactamente el mismo desembolso inicial, la TIR puede jerarquizar erróneamente si los flujos de tesorería se distribuyen con distinta cadencia temporal (uno genera flujos rápidos a corto plazo y el otro concentra sus retornos a largo plazo).

Consideremos el caso de la UGR (Tema 3, diapositiva 10):
- **Proyecto A:** $I_0 = -350$ €, $F_1 = 400$ €, $F_2 = 0$ €, $F_3 = 0$ €.
  Su TIR es del $14,29\%$.
- **Proyecto B:** $I_0 = -350$ €, $F_1 = 16$ €, $F_2 = 16$ €, $F_3 = 466$ €.
  Su TIR es del $12,96\%$.

Si el coste de oportunidad del capital es $k = 7\%$:
- $\text{VAN}(A) = -350 + \frac{400}{1,07} = +23,83$ €
- $\text{VAN}(B) = -350 + \frac{16}{1,07} + \frac{16}{(1,07)^2} + \frac{466}{(1,07)^3} = +59,32$ €

Se produce una contradicción frontal:
- La TIR afirma que el Proyecto A es superior ($\text{TIR}_A = 14,29\% > \text{TIR}_B = 12,96\%$).
- El VAN demuestra que el Proyecto B aporta más del doble de riqueza ($\text{VAN}_B = 59,32\text{ €} > \text{VAN}_A = 23,83\text{ €}$).

#### La Tasa de Fisher y el Análisis Incremental

Las curvas de VAN de ambos proyectos se cortan en un punto singular denominado **Tasa de Fisher** o tasa de cruce intertemporal. En ese punto, el VAN de ambos proyectos es idéntico:

$$\text{VAN}_A(r^*) = \text{VAN}_B(r^*) \iff \text{VAN}_{B - A}(r^*) = 0$$

La Tasa de Fisher es la Tasa Interna de Rentabilidad del **proyecto incremental** ($B - A$).

Para salvar el criterio de la TIR y aplicarlo válidamente a proyectos mutuamente excluyentes, es preceptivo evaluar la inversión incremental:
1. Se calcula el flujo diferencial paso a paso: $(B - A)_t = F_{B,t} - F_{A,t}$.
2. Se halla la TIR incremental: $\text{TIR}_{\Delta}$.
3. Regla de decisión incremental:
   - Si $\text{TIR}_{\Delta} > k$: Vale la pena asumir el esfuerzo adicional o la mayor duración de $B$. Se elige el Proyecto B.
   - Si $\text{TIR}_{\Delta} < k$: No compensa la inversión incremental. Se elige el Proyecto A.

Nótese que este procedimiento incremental no es más que una forma indirecta de comprobar si $\text{VAN}(B - A) > 0$. Para llegar a esa conclusión, resulta mucho más rápido y seguro calcular directamente el VAN de cada proyecto.

### Defecto 5: El supuesto implícito de reinversión de los flujos intermedios

Una debilidad conceptual profunda de la TIR radica en su hipótesis matemática de reinversión:
- La formulación polinómica de la TIR asume implícitamente que todos los flujos de tesorería generados en los periodos intermedios se reinvierten en otros proyectos hasta el final de la vida de la inversión **a la misma tasa de la propia TIR**. Si un proyecto tiene una TIR del $70\%$, asume que la empresa puede reinvertir los cobros intermedios al $70\%$, lo cual suele ser completamente irreal.
- Por el contrario, el modelo del VAN asume que los flujos intermedios se reinvierten al **coste de oportunidad del capital ($k$)**, que es precisamente la tasa que remunera el mercado financiero para ese nivel de riesgo. La hipótesis del VAN es metodológicamente coherente con el equilibrio del mercado de capitales.


## El Índice de Rentabilidad y el Racionamiento de Capital

Hasta ahora se ha asumido que las empresas pueden financiar en el mercado de capitales todos aquellos proyectos que arrojen un VAN positivo. No obstante, en la gestión empresarial surgen situaciones de **racionamiento de capital**, donde la corporación se enfrenta a un límite presupuestario máximo ($C$) para acometer inversiones en un ejercicio determinado.

El racionamiento de capital se clasifica en dos modalidades:
- **Racionamiento blando (*Soft rationing*):** Límites presupuestarios impuestos internamente por la alta dirección a sus directores de departamento para controlar el ritmo de gasto o evitar crecimientos desordenados.
- **Racionamiento duro (*Hard rationing*):** Restricciones impuestas por el mercado exterior cuando la empresa no puede captar más capital debido a tensiones de solvencia, asimetrías de información o crisis de liquidez en el sistema financiero.

### Formulación del Índice de Rentabilidad

Cuando el presupuesto es limitado, la empresa no debe elegir simplemente los proyectos con mayor VAN individual, sino aquellos que extraigan la mayor masa agregada de VAN por cada euro de presupuesto escaso consumido.

Para resolver este problema se recurre al **Índice de Rentabilidad (IR)**, también denominado ratio beneficio-coste:

$$\text{IR} = \frac{\text{Valor Actual de los flujos}}{\text{Desembolso inicial}} = \frac{\text{VA}}{I_0} = \frac{\text{VAN} + I_0}{I_0} = 1 + \frac{\text{VAN}}{I_0}$$

**Regla de selección bajo racionamiento:**
1. Se descartan todos los proyectos con $\text{IR} < 1$ (equivalente a $\text{VAN} < 0$).
2. Se ordenan los proyectos viables en orden decreciente de su Índice de Rentabilidad.
3. Se van aceptando proyectos por orden de prelación hasta agotar el presupuesto disponible.

### Limitaciones del Índice de Rentabilidad: La indivisibilidad de proyectos

El Índice de Rentabilidad solo garantiza la optimización perfecta si los proyectos son **divisibles** (pueden aceptarse en fracciones del $50\%$ o $70\%$). Si los proyectos son bultos discretos o indivisibles (como la construcción de una planta industrial o un centro de datos), ordenar por IR puede dejar recursos presupuestarios ociosos y conducir a combinaciones subóptimas.

En tales casos de indivisibilidad, la asignación óptima exige resolver un problema de programación lineal entera (problema de la mochila), comparando el VAN total de las combinaciones factibles que agotan el presupuesto para seleccionar aquella con mayor VAN conjunto.


## Resumen Comparativo de Criterios de Selección

A modo de síntesis estructurada, la siguiente tabla reúne la evaluación técnica de los métodos analizados frente a los principios normativos de las finanzas corporativas:

| Criterio | ¿Valor tiempo? | ¿Horizonte? | ¿Aditivo? | ¿Excluyente? | ¿No convencional? | Veredicto |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Valor Actual Neto (VAN)** | Sí | Sí | Sí | Sí | Sí | **Criterio de referencia supremo.** |
| **Plazo de Recuperación (*Payback*)** | No | No | No | No | No | Medida de liquidez, inútil para maximizar valor. |
| **Payback Descontado** | Sí | No | No | No | No | Corrige descuento pero ignora flujos finales. |
| **Tasa Interna de Rentabilidad (TIR)** | Sí | Sí | No | Solo incremental | No (múltiples raíces) | Indicador relativo; falla en jerarquización. |
| **Índice de Rentabilidad (IR)** | Sí | Sí | No | Requiere divisibilidad | Sí | Para racionamiento de proyectos divisibles. |
