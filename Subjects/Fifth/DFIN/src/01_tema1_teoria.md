# Tema 1: Fundamentos de la Dirección Financiera y el Teorema de Fisher

## 1.1 El objetivo financiero de la empresa

En el ámbito de la Dirección Financiera, el objetivo fundamental de la empresa no es simplemente "maximizar el beneficio" contable, ya que este concepto presenta graves deficiencias: no tiene en cuenta el valor temporal del dinero, ignora el riesgo asociado a los flujos de caja y depende fuertemente de los criterios contables aplicados. 

La doctrina académica mayoritaria (respaldada por autores como Brealey, Myers y Allen en *Principios de Finanzas Corporativas*) establece que el objetivo unívoco y operativo de la empresa debe ser **maximizar el valor de mercado del patrimonio de los accionistas**. Esto se traduce de forma práctica en la maximización del Valor Actual Neto (VAN) de las inversiones que acomete la organización.

Esta meta garantiza la asignación eficiente de los recursos en la economía. Al buscar proyectos con VAN positivo, la empresa está invirtiendo en oportunidades cuyo rendimiento supera al coste de oportunidad del capital, creando riqueza real.

## 1.2 El modelo intertemporal de consumo e inversión

Para comprender cómo los individuos y las empresas toman decisiones, la teoría financiera parte de un modelo básico de elección intertemporal. Imaginemos un horizonte de dos periodos: el momento actual ($t=0$) y un momento futuro ($t=1$).

Un individuo representativo recibe una dotación inicial de riqueza ($W_0$) y se enfrenta a dos decisiones simultáneas:
1. **Decisión de consumo:** Cuánto consumir hoy ($C_0$) y cuánto aplazar para el futuro ($C_1$). Las preferencias del individuo se representan mediante curvas de indiferencia cóncavas.
2. **Decisión de inversión real:** Qué cantidad de su riqueza actual destina a proyectos productivos que generarán flujos de caja en el futuro. La frontera de posibilidades de producción (o curva de oportunidades de inversión) representa todas las combinaciones posibles de flujos. Es cóncava respecto al origen debido a la ley de los rendimientos marginales decrecientes: a medida que se invierte más, los mejores proyectos se agotan y la rentabilidad marginal disminuye.

En una economía autárquica (sin mercado financiero), el individuo solo puede invertir hasta el punto en el que la rentabilidad marginal de la inversión iguala a su tasa subjetiva de preferencia temporal (el punto donde su curva de indiferencia es tangente a la curva de oportunidades de inversión).

## 1.3 La introducción de los mercados de capitales

La situación cambia drásticamente cuando se introduce un mercado de capitales perfecto. En este mercado ideal, todos los agentes pueden prestar o pedir prestado fondos de forma ilimitada a un mismo tipo de interés libre de riesgo ($r$). 

La existencia de este mercado dibuja una "Línea de Mercado de Capitales" (LMC), cuya pendiente en valor absoluto es $1 + r$. Esta recta actúa como un mecanismo de arbitraje intertemporal, permitiendo al individuo separar su decisión productiva de su decisión de consumo.

Bajo este marco, la regla de decisión óptima consta de dos pasos:
1. **Paso productivo (Inversión):** El individuo invierte en activos reales hasta el punto en el que la Tasa Interna de Rentabilidad marginal de la inversión se iguala al tipo de interés del mercado ($\text{TIR}_{\text{mg}} = r$). Gráficamente, es el punto de tangencia entre la curva de oportunidades de producción y la Línea de Mercado de Capitales. Este punto maximiza la riqueza total (el VAN).
2. **Paso financiero (Consumo):** A partir del punto óptimo de producción, el individuo se mueve a lo largo de la Línea de Mercado de Capitales prestando o endeudándose al tipo $r$, hasta alcanzar su curva de indiferencia más alta. 

## 1.4 El Teorema de Separación de Fisher

El desarrollo anterior nos conduce al **Teorema de Separación de Fisher** (formulado por Irving Fisher en 1930). Este teorema es la piedra angular de las finanzas corporativas modernas y justifica la delegación de la gestión en las grandes sociedades anónimas.

El teorema establece que, bajo el supuesto de mercados de capitales perfectos y completos, **la decisión de inversión de una empresa es totalmente independiente de las preferencias de consumo de sus accionistas**.

### Implicaciones del teorema

Gracias a la separación de Fisher, una empresa con múltiples accionistas (cada uno con distinta riqueza y preferencias temporales) no enfrenta un conflicto de intereses en el consejo de administración. Todos los accionistas estarán de acuerdo en una única instrucción para los directivos: **invertir en todos los proyectos que ofrezcan una rentabilidad superior al coste de oportunidad del capital (proyectos con VAN positivo)**.

Una vez que la empresa maximiza su riqueza total y reparte los flujos resultantes, cada accionista acudirá al mercado financiero para ajustar ese flujo de caja a sus preferencias personales. Quien prefiera consumir hoy, pedirá prestado respaldado por sus acciones; quien prefiera ahorrar, reinvertirá los dividendos.

### Ruptura del teorema

El teorema de Fisher se apoya en la hipótesis de un mercado perfecto. En la realidad existen fricciones, impuestos, asimetrías de información y, lo más crítico, un diferencial entre el tipo de interés deudora y acreedora. 

Como veremos en los casos prácticos (por ejemplo, cuando el tipo de endeudamiento $r_d$ es superior al tipo de los préstamos $r_p$), la línea de mercado se quiebra. En ese escenario, la separación desaparece: el accionista que planea pedir prestado querrá que la empresa frene la inversión antes (exigiendo $\text{TIR}_{\text{mg}} = r_d$), mientras que el accionista ahorrador exigirá continuar la inversión hasta que la rentabilidad caiga a $r_p$. Esta ruptura exige mecanismos adicionales de gobierno corporativo para resolver el conflicto de agencia.
