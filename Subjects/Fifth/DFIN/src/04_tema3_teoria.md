# Tema 3: Valoración de Activos Financieros

## 3.1 Principios generales de valoración

El valor teórico o intrínseco de cualquier activo financiero (ya sea un bono, una acción o un derivado) viene determinado por el valor actual de los flujos de caja futuros que se espera que proporcione a su propietario. Para hallar este valor, se actualizan los flujos de caja proyectados ($F_t$) utilizando una tasa de descuento ($r$) que refleje el coste de oportunidad del capital ajustado por el nivel de riesgo del activo.

$$V_0 = \sum_{t=1}^{\infty} \frac{F_t}{(1+r)^t}$$

## 3.2 Valoración de renta fija (Bonos)

Un bono es un instrumento de deuda que compromete al emisor a pagar un flujo periódico de intereses (cupones) y a devolver el principal (valor nominal o facial) a la fecha de vencimiento.

Si denotamos el cupón anual como $C$, el valor nominal como $N$ y la tasa de descuento exigida por el mercado (Yield to Maturity o TIR del bono) como $r$, el precio actual del bono ($P_0$) se calcula actualizando la renta constante de los cupones más el valor actual del principal:

$$P_0 = \sum_{t=1}^{n} \frac{C}{(1+r)^t} + \frac{N}{(1+r)^n}$$

### Relación Precio-Rentabilidad
Existe una relación matemáticamente inversa y no lineal (convexa) entre el precio de un bono y los tipos de interés del mercado:
- Si los tipos de mercado suben, el precio del bono baja (para que los nuevos compradores obtengan la rentabilidad exigida).
- Si los tipos de mercado bajan, el precio del bono sube.
- Cuando la tasa cupón coincide con la tasa exigida por el mercado ($r$), el bono cotiza a la par ($P_0 = N$).

## 3.3 Valoración de renta variable (Acciones)

A diferencia de los bonos, las acciones no tienen fecha de vencimiento y los flujos de caja que proporcionan (dividendos) no están garantizados ni contractualmente prefijados. El valor de una acción es el valor actual de todos los dividendos futuros esperados a perpetuidad:

$$P_0 = \sum_{t=1}^{\infty} \frac{\text{Div}_t}{(1+r)^t}$$

### El Modelo de Crecimiento Constante de Gordon-Shapiro

Si se asume que los dividendos de la empresa crecerán a una tasa constante $g$ a perpetuidad, la infinita serie matemática se reduce al modelo de Gordon y Shapiro:

$$P_0 = \frac{\text{Div}_1}{r - g} \quad \text{siempre que } r > g$$

Este modelo descansa sobre dos pilares:
1. **La tasa de reparto ($p$) y retención ($b$):** Qué porcentaje de los beneficios (BPA) se reparte como dividendo y qué porcentaje se retiene ($b = 1 - p$).
2. **La rentabilidad de las reinversiones (ROE):** El crecimiento futuro $g$ depende enteramente del esfuerzo de ahorro de la empresa y de lo buena que sea invirtiendo ese ahorro: $g = b \times \text{ROE}$.

**Limitaciones del modelo:** El modelo falla si la empresa atraviesa fases de crecimiento acelerado ($g > r$), lo que requiere utilizar modelos de descuento en dos o más fases, actualizando los dividendos singulares de los primeros años y calculando un valor terminal cuando el crecimiento se estabilice.

## 3.4 El Valor Actual de las Oportunidades de Crecimiento (VAOC)

El precio de una acción puede descomponerse conceptualmente en dos grandes bloques: el valor de la empresa si actuara como una "vaca lechera" (estancada) y el valor extra que aportan sus nuevas inversiones.

1. **Valor de los activos en marcha (vaca lechera):** Si una empresa decide no crecer más, repartiendo el 100\% de sus beneficios ($b=0 \implies g=0$), su BPA será constante. Su valor por acción sería el de una renta perpetua constante: $\frac{\text{BPA}_1}{r}$.
2. **El VAOC:** Es el Valor Actual Neto acumulado (por acción) de todas las inversiones futuras que la empresa acometerá gracias a la retención de beneficios. 

Por tanto, la ecuación general del valor de la acción se expresa como:

$$P_0 = \frac{\text{BPA}_1}{r} + \text{VAOC}$$

**Conclusión crítica:** Para que el VAOC sea positivo, no basta con retener beneficios e invertir (crecimiento del BPA); es absolutamente imprescindible que la rentabilidad de esas nuevas inversiones supere al coste de capital ($\text{ROE} > r$). Si una empresa retiene beneficios para invertirlos en proyectos mediocres ($\text{ROE} < r$), el crecimiento destruirá valor, haciendo que el VAOC sea negativo y penalizando la cotización bursátil por debajo del escenario "vaca lechera".
