# Separación de Fisher y Decisiones de Inversión

Este bloque reúne los problemas relativos a las decisiones de consumo e inversión intertemporal, la función de los mercados de capitales y el Teorema de Separación de Irving Fisher.


## Ejercicio 1

### Enunciado

Una empresa está invirtiendo actualmente en activos reales el importe necesario para maximizar su VAN. Una disminución de la tasa de interés:

a) Provocaría un incremento de la inversión inicial necesaria para maximizar el VAN. Un inversor que prefiera consumo futuro a consumo actual vería empeorada su situación como consecuencia de la disminución de la tasa de interés.

b) Provocaría un incremento de la inversión inicial necesaria para maximizar el VAN. Un inversor que prefiera consumo actual a consumo futuro vería empeorada su situación como consecuencia de la disminución de la tasa de interés.

c) Provocaría un incremento de la inversión inicial necesaria para maximizar el VAN. Un inversor que prefiera consumo futuro a consumo actual vería mejorada su situación como consecuencia de la disminución de la tasa de interés.

d) Provocaría una reducción de la inversión inicial necesaria para maximizar el VAN. Un inversor que prefiera consumo futuro a consumo actual vería mejorada su situación como consecuencia de la disminución de la tasa de interés.


### Solución y Justificación Técnica

**Respuesta correcta: a)**

#### 1. Fundamento teórico: El Teorema de Separación de Fisher

El modelo intertemporal de Irving Fisher (analizado en el capítulo 2 de Brealey, Myers y Allen, 2023) parte de una dotación inicial de riqueza $W_0$ en el momento actual ($t=0$). La empresa se enfrenta a una curva de oportunidades de inversión real que exhibe rendimientos marginales decrecientes: a medida que se acometen más proyectos, la rentabilidad del último euro invertido (la tasa interna de rendimiento marginal, $\text{TIR}_{\text{mg}}$) disminuye.

El mercado de capitales ofrece a la empresa y a los inversores la posibilidad de prestar o pedir prestado a un tipo de interés libre de riesgo $r$. La línea de mercado de capitales (LMC) tiene como pendiente en valor absoluto:

$$|\text{Pendiente LMC}| = 1 + r$$

El objetivo que maximiza el valor actual neto (VAN) consiste en llevar la inversión real hasta el punto donde la curva de transformación técnica es tangente a la recta de mercado con mayor ordenada en el origen posible:

$$\text{TIR}_{\text{mg}} = r$$

A partir de ese punto óptimo de producción física, cada accionista utiliza el mercado financiero de forma individual para prestar o pedir prestado según sus preferencias temporales de consumo, alcanzando la curva de indiferencia más alta.

#### 2. Efecto de una caída en la tasa de interés ($r$)

Si el tipo de interés pasa de $r_1$ a un valor menor $r_2$ ($r_2 < r_1$):

1. **Aumento de la inversión óptima:** La pendiente de la línea de mercado $(1 + r)$ se reduce, volviendo la recta más plana. En la curva cóncava de oportunidades reales, la nueva tangencia con una pendiente menor exige situarse más a la izquierda en consumo presente, es decir, realizar un mayor volumen de inversión inicial en activos reales ($C_0' > C_0$). Proyectos que antes se descartaban porque su rendimiento marginal no alcanzaba la tasa anterior pasan a tener VAN positivo.

2. **Impacto sobre los inversores según su perfil de consumo:**
   - **Inversor con preferencia por consumo futuro (prestamista):** Ahorra hoy para consumir en $t=1$. Al bajar el tipo de interés, cada euro prestado genera menos intereses. La línea de mercado pivota hacia abajo en el cuadrante de ahorro, reduciendo su consumo futuro alcanzable. Su bienestar empeora.
   - **Inversor con preferencia por consumo actual (prestatario):** Se endeuda hoy contra sus ingresos futuros para adelantar consumo. Al abaratarse el crédito, el coste de aplazar la devolución se reduce. Su bienestar mejora.

\begin{figure}[H]
  \centering
  \input{src/tex/fisher_ej1.tex}
  \caption{Efecto de la reducción del tipo de interés sobre el volumen de inversión óptima y el bienestar de prestamistas y prestatarios.}
\end{figure}

Por tanto, la opción a) recoge con exactitud ambos efectos.


## Ejercicio 2

### Enunciado

Indique cuál de las siguientes afirmaciones es correcta:

a) Si el tipo de interés del endeudamiento es mayor que el tipo de interés del préstamo, la inversión inicial en activos reales que maximizaría el VAN sería la misma tanto desde el punto de vista de un accionista que quisiera ser prestamista como desde el punto de vista de un accionista que quisiera ser prestatario.

b) Si el tipo de interés del endeudamiento es mayor que el tipo de interés del préstamo, un accionista que quisiera ser prestamista y otro que quisiera ser prestatario no estarían de acuerdo en cuanto al importe de la inversión inicial en activos reales necesaria para maximizar el VAN.

c) Si el tipo de interés del endeudamiento es mayor que el tipo de interés del préstamo, la línea del tipo de interés para quien presta será más inclinada que para quien se endeuda.

d) Las respuestas a) y c) son correctas.


### Solución y Justificación Técnica

**Respuesta correcta: b)**

#### 1. Ruptura de la unanimidad en mercados con fricciones

El Teorema de Separación de Fisher garantiza la unanimidad entre accionistas únicamente bajo la hipótesis de mercados de capitales perfectos, donde cualquier agente puede prestar y endeudarse a una tasa idéntica $r$.

En la práctica, las entidades financieras aplican un diferencial (spread): el tipo de interés exigido por endeudarse ($r_d$) es estrictamente superior al tipo retribuido por prestar ($r_p$), de modo que $r_d > r_p$.

Bajo esta condición:

- Para quien presta, el coste de oportunidad del dinero es $r_p$. Su línea de mercado tiene pendiente en valor absoluto $1 + r_p$.
- Para quien pide prestado, el coste financiero del dinero es $r_d$. Su línea de mercado tiene pendiente en valor absoluto $1 + r_d$.

Como $1 + r_d > 1 + r_p$, la línea de quien se endeuda es más inclinada que la de quien presta (lo que invalida de inmediato la opción c).

#### 2. Discrepancia en la decisión de inversión de la empresa

Al maximizar el valor de la empresa:

- El accionista prestamista desea que la empresa siga invirtiendo en activos reales mientras estos ofrezcan una rentabilidad superior a la que él puede conseguir por su cuenta prestando dinero en el mercado ($\text{TIR}_{\text{mg}} \ge r_p$).
- El accionista prestatario, en cambio, prefiere que la empresa detenga la inversión antes, en el punto donde la rentabilidad real baje de su coste de endeudamiento ($\text{TIR}_{\text{mg}} = r_d$). Invertir más allá le obligaría a financiar el recorte de dividendos endeudándose al caro tipo $r_d$.

\begin{figure}[H]
  \centering
  \input{src/tex/fisher_ej2.tex}
  \caption{Quiebre de la línea de mercado cuando $r_d > r_p$ y divergencia en el volumen de inversión óptimo ($C_0' \ne C_0$).}
\end{figure}

Al no coincidir la tasa de descuento relevante para unos y otros ($r_p \ne r_d$), los accionistas no se ponen de acuerdo en el presupuesto de inversión óptimo. El criterio de maximización del VAN deja de ser unívoco y se quiebra la separación entre propiedad y dirección.


## Ejercicio 3

### Enunciado

Un inversor dispone hoy de un presupuesto de 12.000 €. El tipo de interés del mercado de capitales a un año es del 4%. Invierte hoy en activos reales 4.000 €, lo que le permite obtener un VAN de 2.000 €, cifra que constituye el máximo VAN posible. Con esta información, y con un horizonte temporal de un año, se pide:

a) Representación gráfica de la situación descrita.

b) Cuantía del flujo de caja que el inversor recibiría al cabo de un año, derivado de su inversión en activos reales.

c) Cuantía en la que se incrementaría la riqueza del inversor a consecuencia de la inversión en activos reales, si tuviera total preferencia por el consumo futuro frente al consumo actual.

d) Cuantía en la que se incrementaría la riqueza del inversor a consecuencia de la inversión en activos reales, si tuviera total preferencia por el consumo actual frente al consumo futuro.


### Solución y Justificación Técnica

**Datos iniciales del problema:**

- Dotación inicial en $t=0$: $W_0 = 12.000$ €
- Tipo de interés de mercado a un año: $r = 4\% = 0,04$
- Inversión en activos reales en $t=0$: $I_0 = 4.000$ €
- Valor Actual Neto máximo: $\text{VAN} = 2.000$ €


#### Apartado a) Representación gráfica

El inversor parte del punto de dotación en el eje de abscisas $(W_0, 0) = (12.000, 0)$.

Al realizar la inversión real óptima de $I_0 = 4.000$ €, le quedan disponibles en $t=0$ para consumo propio:

$$C_0(\text{producción}) = W_0 - I_0 = 12.000 - 4.000 = 8.000\text{ €}$$

Este desembolso traslada al inversor a la frontera de producción en el punto óptimo $P^* = (8.000,\, 6.240)$, donde la tangencia con la línea de mercado de capitales define la máxima riqueza intertemporal.

La ecuación de la línea de mercado de capitales que pasa por $P^*$ es:

$$C_1 = 6.240 + (8.000 - C_0)(1 + 0,04) = 14.560 - 1,04\,C_0$$

Los cortes con los ejes determinan las posibilidades extremas de consumo:

- **Consumo actual máximo ($C_1 = 0$):**
  $$C_0^{\max} = 8.000 + \frac{6.240}{1,04} = 14.000\text{ €}$$
  Nótese que $C_0^{\max} = W_0 + \text{VAN} = 12.000 + 2.000 = 14.000$ €.

- **Consumo futuro máximo ($C_0 = 0$):**
  $$C_1^{\max} = 14.560\text{ €}$$

\begin{figure}[H]
  \centering
  \input{src/tex/fisher_ej3.tex}
  \caption{Representación gráfica del equilibrio de Fisher para el inversor con dotación de 12.000 € e inversión de 4.000 €.}
\end{figure}


#### Apartado b) Flujo de caja en $t=1$ derivado de la inversión real

Por definición de Valor Actual Neto en un horizonte de un año:

$$\text{VAN} = -I_0 + \frac{F_1}{1 + r}$$

Sustituyendo los datos conocidos:

$$2.000 = -4.000 + \frac{F_1}{1,04}$$

Despejamos el valor actualizado del flujo:

$$\frac{F_1}{1,04} = 6.000 \implies F_1 = 6.000 \times 1,04 = 6.240\text{ €}$$

El proyecto en activos reales devuelve **6.240 €** al cabo de un año.


#### Apartado c) Incremento de riqueza con total preferencia por el consumo futuro

Si el inversor prefiere trasladar toda su riqueza a $t=1$, comparamos las dos alternativas posibles:

1. **Sin acometer la inversión en activos reales:**
   Colocaría sus 12.000 € íntegros en el mercado financiero al 4%:
   $$C_1(\text{sin proyecto}) = 12.000 \times 1,04 = 12.480\text{ €}$$

2. **Acometiendo la inversión en activos reales:**
   Invierte 4.000 € en el proyecto real (que le reportará 6.240 € en $t=1$) y presta los 8.000 € sobrantes en el mercado de capitales al 4%:
   $$C_1(\text{con proyecto}) = 6.240 + 8.000 \times 1,04 = 6.240 + 8.320 = 14.560\text{ €}$$

El incremento neto en el consumo futuro es la diferencia directa:

$$\Delta W_1 = C_1(\text{con proyecto}) - C_1(\text{sin proyecto}) = 14.560 - 12.480 = 2.080\text{ €}$$

Este incremento coincide exactamente con el valor capitalizado del VAN a la tasa de mercado:

$$\Delta W_1 = \text{VAN} \times (1 + r) = 2.000 \times 1,04 = 2.080\text{ €}$$


#### Apartado d) Incremento de riqueza con total preferencia por el consumo actual

Si el inversor desea consumir todo lo posible hoy ($t=0$):

1. **Sin acometer la inversión en activos reales:**
   Dispone únicamente de su dotación líquida:
   $$C_0(\text{sin proyecto}) = W_0 = 12.000\text{ €}$$

2. **Acometiendo la inversión en activos reales:**
   Mantiene los 8.000 € no invertidos y pide prestado en el mercado financiero aportando como garantía el flujo futuro de 6.240 € que cobrará en $t=1$. El importe máximo que puede obtener prestado hoy es su valor actual:
   $$\text{Préstamo obtenido} = \frac{6.240}{1,04} = 6.000\text{ €}$$
   El consumo actual total alcanzable es:
   $$C_0(\text{con proyecto}) = 8.000 + 6.000 = 14.000\text{ €}$$

El incremento de riqueza en el momento presente equivale exactamente al Valor Actual Neto generado:

$$\Delta W_0 = 14.000 - 12.000 = 2.000\text{ €} = \text{VAN}$$
