# Tema 2: Decisiones de Inversión (VAN y TIR)

## 2.1 Criterios de evaluación de inversiones

El objetivo de la dirección financiera, como establece el Teorema de Separación de Fisher, es acometer aquellos proyectos que incrementen la riqueza de los accionistas. Para discriminar qué inversiones cumplen este requisito, se utilizan diversos criterios de selección. El criterio superior y normativamente correcto es el Valor Actual Neto (VAN), aunque en la práctica empresarial coexiste con otros métodos como la Tasa Interna de Rentabilidad (TIR) y el Plazo de Recuperación (*Payback*).

## 2.2 El Valor Actual Neto (VAN)

El VAN mide el incremento neto de riqueza que un proyecto genera para los accionistas, medido en euros actuales (o unidades monetarias del momento $t=0$). 

Matemáticamente, se define como la suma del desembolso inicial (normalmente negativo) y el valor actual de los flujos de caja libres esperados, descontados al coste de oportunidad del capital ($k$ o $r$):

$$\text{VAN} = -I_0 + \sum_{t=1}^{n} \frac{F_t}{(1+k)^t}$$

Donde:
- $I_0$ es el desembolso inicial de la inversión.
- $F_t$ son los flujos de caja netos esperados en cada periodo $t$.
- $k$ es la tasa de descuento o coste de oportunidad del capital (la rentabilidad que los inversores podrían obtener en el mercado financiero con un nivel de riesgo equivalente).
- $n$ es la vida útil del proyecto.

**Regla de decisión del VAN:**
- Si $\text{VAN} > 0$: El proyecto genera valor por encima de lo que exige el mercado. Debe aceptarse.
- Si $\text{VAN} < 0$: El proyecto destruye valor. Debe rechazarse.
- Si $\text{VAN} = 0$: El proyecto cubre exactamente el coste de capital, dejando la riqueza inalterada. Es indiferente desde un punto de vista puramente financiero.

### Propiedades del VAN

1. **Reconoce el valor temporal del dinero:** Un euro hoy vale más que un euro mañana.
2. **Depende exclusivamente de los flujos de caja y del coste de oportunidad:** No se ve afectado por las preferencias subjetivas de los directivos, los criterios contables ni la política de dividendos (cumpliendo el Teorema de Fisher).
3. **Propiedad aditiva (Principio del valor de mercado):** El VAN de un conjunto de proyectos independientes es igual a la suma de los VAN individuales ($\text{VAN}_{A+B} = \text{VAN}_A + \text{VAN}_B$). Esto permite evaluar proyectos por separado sin distorsiones.

## 2.3 La Tasa Interna de Rentabilidad (TIR)

La TIR es la tasa de descuento empírica que hace que el VAN de un proyecto sea exactamente igual a cero. En otras palabras, es la rentabilidad intrínseca o geométrica anualizada que ofrece el proyecto por sí mismo.

$$0 = -I_0 + \sum_{t=1}^{n} \frac{F_t}{(1+\text{TIR})^t}$$

**Regla de decisión de la TIR:**
- Si $\text{TIR} > k$: El proyecto ofrece una rentabilidad superior al coste de oportunidad del capital. Debe aceptarse.
- Si $\text{TIR} < k$: La rentabilidad del proyecto no compensa su nivel de riesgo. Debe rechazarse.

### Problemas y anomalías de la TIR

Aunque la TIR es muy popular en la práctica empresarial porque se expresa como un porcentaje (lo que facilita la comunicación), presenta graves deficiencias estructurales frente al VAN:

1. **Proyectos mutuamente excluyentes y escala de la inversión:** Si hay que elegir entre dos proyectos y no se pueden hacer ambos, la TIR puede llevar a decisiones erróneas si los proyectos tienen diferente tamaño inicial. Un proyecto pequeño con una TIR del 50\% puede aportar menos riqueza absoluta que un proyecto grande con una TIR del 20\%. El VAN siempre toma la decisión correcta al reflejar el valor absoluto creado.
2. **Diferente distribución temporal de los flujos:** Si un proyecto devuelve el dinero muy pronto y otro muy tarde, el cruce de sus perfiles de VAN (Tasa de Fisher) provoca que la regla de la TIR falle dependiendo del coste de capital vigente.
3. **Múltiples TIR (Regla de los signos de Descartes):** La fórmula de la TIR es un polinomio de grado $n$. Si el proyecto tiene flujos de caja no convencionales (por ejemplo, exige un fuerte desembolso de desmantelamiento al final de su vida, provocando flujos negativos posteriores a flujos positivos), la ecuación matemática puede tener tantas raíces reales positivas (múltiples TIR) como cambios de signo haya en la corriente de flujos. En este caso, la regla de la TIR queda totalmente invalidada y solo se puede utilizar el VAN.
4. **Supuesto de reinversión implícito:** La TIR asume matemáticamente que los flujos de caja intermedios se reinvierten a la propia TIR, lo cual suele ser poco realista en proyectos de muy alta rentabilidad. El VAN asume, de forma más rigurosa, que los flujos intermedios se reinvierten al coste de oportunidad del capital ($k$).

## 2.4 Otros métodos secundarios

- **Plazo de Recuperación (*Payback*):** Mide el tiempo exacto que tarda el proyecto en recuperar el desembolso inicial. Su principal defecto es que ignora el valor temporal del dinero dentro del plazo de recuperación y, lo que es peor, ignora sistemáticamente cualquier flujo de caja que se produzca después de la fecha de recuperación, sesgando la decisión hacia proyectos a corto plazo.
- **Índice de Rentabilidad (IR):** Es la ratio entre el valor actual de los flujos futuros y el desembolso inicial ($\text{IR} = \frac{\text{VAN} + I_0}{I_0}$). Resulta útil únicamente en contextos de racionamiento de capital duro (limitación estricta de presupuesto), ya que ayuda a maximizar el VAN extraído por cada euro de presupuesto invertido.
