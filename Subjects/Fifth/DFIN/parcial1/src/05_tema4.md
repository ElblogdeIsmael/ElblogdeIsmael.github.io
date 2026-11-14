# Tema 4. Variables que intervienen en la decisión de inversión

Es el tema de los **problemas largos**: construir los flujos de caja de un proyecto y calcular su VAN. Toda la teoría cabe en una ecuación:

$$\boxed{VAN = -C_0^{di} + \sum_{i=1}^{n}\frac{Q_i^{di}}{(1+r)^i} + \frac{VR_n^{di}}{(1+r)^n}}$$

donde $C_0^{di}$ es la inversión inicial después de impuestos, $Q_i^{di}$ el flujo de caja de las operaciones después de impuestos y $VR_n^{di}$ el valor residual después de impuestos.

## Criterios generales para los flujos de caja

**1. Solo cuentan los flujos de tesorería** (cobros − pagos), no el beneficio contable (ingresos − gastos), que sigue el **criterio de devengo**. Dos diferencias:

- El beneficio cuenta las ventas aunque no se hayan cobrado. Esto se corrige con la **variación del fondo de maniobra**.
- La inversión en activo fijo es un pago **en $t=0$**, mientras que el beneficio solo descuenta la **amortización** cada año. La amortización **no es un pago**, pero **sí es deducible** y genera un **ahorro fiscal** de $CAF \times t_c$.

Los flujos se calculan **después de impuestos**.

**2. Solo los flujos incrementales** (con el proyecto menos sin el proyecto). Se calculan $\Delta C_0^{di}$, $\Delta Q_i^{di}$ y $\Delta VR^{di}$ entre alternativas. Reglas:

- **No confundir rendimientos medios con incrementales:** que una división sea rentable de media no dice nada de un proyecto nuevo en ella.
- **Incluir todos los efectos del proyecto:** un tramo de ferrocarril puede tener VAN negativo aislado y positivo si se cuenta el tráfico que aporta a la línea principal. También cuentan la canibalización y las sinergias.
- **Tener en cuenta las variaciones del FM:** $\Delta FM = \Delta AC - \Delta PC$. Se restan de los flujos y se recuperan al final si así lo dice el enunciado.
- **Olvidarse de los costes irrecuperables (hundidos):** desembolsos pasados e irreversibles, como un estudio de mercado ya pagado.
- **Considerar los costes de oportunidad:** si el proyecto usa un terreno que se podría vender por 300.000 €, esos 300.000 € son un coste del proyecto. Lo mismo un local que se podría alquilar: el alquiler perdido es un coste anual.
- **Cuidado con la imputación de gastos generales:** solo se incluyen los **gastos extra** que provoca el proyecto.

**3. Inflación: ser coherente.** Flujos **nominales** con tasa **nominal**; flujos **reales** con tasa **real**. Ambos caminos dan el mismo VAN.

$$1 + r_{\text{nominal}} = (1 + r_{\text{real}})(1 + \text{inflación})$$

Ejemplo: flujos reales de −100.000; 35.000; 50.000 y 30.000, con tasa nominal del 10 % e inflación del 3 %.

- (a) Se pasan los flujos a nominal ($\times 1{,}03^t$) y se descuentan al 10 %.
- (b) Se descuentan los flujos reales a $r_{\text{real}} = 1{,}10/1{,}03 - 1 = 6{,}7961\,\text{\%}$.

Ambas dan $VAN = 1.241{,}03$ €.

**4. Separación entre inversión y financiación.** Por ahora el proyecto se valora **como si se financiara solo con fondos propios**: los **intereses no se restan** en los flujos, porque el coste de la financiación ya está en $r$. Si el enunciado da un préstamo con sus intereses, sirve para calcular el **beneficio contable** (BAT, BN) que piden, pero **no entra en los flujos del VAN**.

## Inversión inicial

**Antes de impuestos ($C_0^{ai}$)** incluye:

- el **coste principal** (el activo);
- los **costes secundarios** necesarios para que funcione (instalación, transporte, puesta en marcha, ampliar el almacén);
- la **inversión inicial en capital circulante** (existencias, etc.).

Los **gastos de formación no son inversión**: son un **gasto del ejercicio**.

**Después de impuestos.** $C_0^{di} = C_0^{ai} - \text{ahorro fiscal}$. Si en $t=0$ hay un **gasto deducible** (formación, puesta en marcha que se lleva a gastos), genera un ahorro fiscal **si la empresa tiene otros beneficios** de los que deducirlo. Se supone que el impuesto se devenga y se paga en el mismo instante.

Ejemplo de SIFA: planta de 10.000 y puesta en marcha de 4.000 (gasto).
$$C_0^{di} = -[10.000 + 4.000(1 - 0{,}35)] = -12.600$$

**Inversión de renovación:** la **venta del equipo viejo reduce el desembolso inicial incremental**, ajustada por su efecto fiscal. Su efecto fiscal es $(\text{precio} - VNC)\times t_c$: si se vende por encima del valor contable, se paga impuesto; si se vende por debajo, se ahorra.

## Flujo de caja de las operaciones

Antes de impuestos, suponiendo que todo se cobra y se paga al contado:
$$Q_i^{ai} = P_{v_i} \cdot V_i - (mp_i + mo_i + gg_i)$$

El impuesto se calcula sobre la base imponible: $(Q_i^{ai} - CAF_i)\,t_c$. Por tanto:
$$Q_i^{di}\text{(renta)} = Q_i^{ai}(1 - t_c) + CAF_i \cdot t_c$$

Con cobros y pagos aplazados, se resta la variación del fondo de maniobra para pasar de devengo a caja:
$$\boxed{Q_i^{di}\text{(tesorería)} = Q_i^{ai}(1 - t_c) + CAF_i \cdot t_c - \Delta FM_i}$$

Forma general de la diapositiva: $Q_i^{di} = Q_i^{ai}(1-t_c) - I^* t_c + G^* t_c$, donde

- $G^*$ son los **gastos deducibles que no suponen pago** (amortizaciones, deterioros), que aportan $+G^* t_c$;
- $I^*$ son los **ingresos computables que no suponen cobro** (traspaso de subvenciones a resultados), que restan $-I^* t_c$.

**Por qué restar $\Delta FM$:**

- $\text{Cobros}_{t+1} = \text{Ingresos}_{t+1} + CC_t - CC_{t+1}$.
- $\text{Pagos}_{t+1} = \text{Compras}_{t+1} + CP_t - CP_{t+1}$, con $\text{Consumo} = \text{Compras} + E_t - E_{t+1}$.

Juntándolo: $\text{Tesorería} = \text{Ingresos} - \text{Costes} - \Delta FM$, con $FM = \text{Existencias} + \text{Clientes} - \text{Proveedores} = AC - PC$ operativo.

> **Cuidado con el signo de $\Delta FM$:** un aumento del FM ($\Delta FM > 0$) es una **salida** de caja; una reducción es una **entrada**. Si el FM de cada año es un porcentaje de las ventas de ese año, $\Delta FM_t = FM_t - FM_{t-1}$, y se suele invertir **al principio** del periodo (mira bien en qué momento lo sitúa el enunciado).

## Valor residual

$$VR_n^{di} = \underbrace{VR_n^{ai}(AF) \pm (\nabla P/\Delta P)\, t_c}_{\text{activo fijo}} + \underbrace{VR_n^{ai}(FM) \pm (\nabla P/\Delta P)\, t_c}_{\text{fondo de maniobra}}$$

**Activo fijo:**

- $\Delta P = \text{precio de venta} - VNC$, con $VNC = V_0 - \text{amortización acumulada}$.
- Si hay **plusvalía** ($\Delta P > 0$), se **paga** impuesto: $VR^{di} = VR^{ai} - \Delta P \cdot t_c$.
- Si hay **minusvalía** ($\nabla P$), se **ahorra** impuesto: $VR^{di} = VR^{ai} + \nabla P \cdot t_c$.

**Fondo de maniobra:**

- Puede recuperarse **entero**, **no recuperarse** o **recuperarse en parte**.
- Si se recupera **por su valor contable**, no hay efecto fiscal: $VR^{di}(FM) = FM_n$.
- Si se recupera **por menos**, la pérdida es deducible. Por ejemplo, existencias de 2.500 recuperadas al 70 % dan $1.750 + 750\,t_c$.

**Ejemplo de SIFA.** Venta por 1.949 con $VNC = 10.000 - 9.500 = 500$, luego $\Delta P = 1.449$.

- $VR^{di}(AF) = 1.949 - 1.449 \times 0{,}35 = 1.442$.
- $VR^{di}(FM) = 2.002$ (por su valor contable, sin impuesto).
- $VR^{di}$ total $= 3.444$.

## El caso SIFA completo (modelo de problema largo)

Datos: inversión de 10.000 en planta; puesta en marcha de 4.000 en $t=0$; amortización lineal en 6 años con valor residual contable de 500, luego $CAF = (10.000 - 500)/6 = 1.583$; venta en $t=7$ por 1.949; FM recuperado por su valor contable en $t=7$; $r = 20\,\text{\%}$; $t_c = 35\,\text{\%}$.

| Concepto | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Ventas | 523 | 12.887 | 32.610 | 48.901 | 35.834 | 19.717 | |
| − Coste de ventas | 837 | 7.729 | 19.552 | 29.345 | 21.492 | 11.830 | |
| − Otros costes | 2.200 | 1.210 | 1.331 | 1.464 | 1.611 | 1.772 | |
| $Q^{ai}$ | −2.514 | 3.948 | 11.727 | 18.092 | 12.731 | 6.115 | |
| $Q^{ai}(1-t_c)$ | −1.634,10 | 2.566,20 | 7.622,55 | 11.759,80 | 8.275,15 | 3.974,75 | |
| $+\,CAF \cdot t_c$ | 554,05 | 554,05 | 554,05 | 554,05 | 554,05 | 554,05 | |
| FM | 550 | 1.289 | 3.261 | 4.890 | 3.583 | 2.002 | 2.002 |
| $-\,\Delta FM$ | −550 | −739 | −1.972 | −1.629 | +1.307 | +1.581 | 0 |
| **$Q^{di}$ tesorería** | **−1.630,05** | **2.381,25** | **6.204,60** | **10.684,85** | **10.136,20** | **6.109,80** | **0** |
| $VR^{di}$ | | | | | | | 3.444 |

$$VAN = -12.600 + \sum_{i=1}^{7}\frac{FNC_i}{1{,}2^i} = \mathbf{3.519{,}53} \;€ > 0 \Rightarrow \text{se acepta}$$

> En la tabla de SIFA, el FM del año $i$ se resta como $\Delta FM_i$ **en el propio año $i$**. Hazlo así salvo que el enunciado diga otra cosa, como un «incremento inicial del FM» en $t=0$.

## Interrelaciones entre proyectos

### Equipos de distinta duración: coste anual equivalente

Si dos máquinas hacen lo mismo pero duran distinto y se van a **reponer indefinidamente**, **no se comparan los VA de los costes**. Se compara la **anualidad equivalente**:

$$VA(\text{costes}) = CAE \times a_{\overline{n}|r} \qquad\Rightarrow\qquad CAE = \frac{VA(\text{costes})}{a_{\overline{n}|r}} \qquad \text{Elegir el menor CAE}$$

\begin{figure}[H]
\centering
\input{src/tex/cae.tex}
\caption{El CAE es la anualidad que tiene el mismo valor actual que los costes del equipo.}
\end{figure}


Ejemplo de las diapositivas ($r$ real = 6 %): la máquina A cuesta 15 más 5/año durante 3 años; la B cuesta 10 más 6/año durante 2 años.

- $VA_A = 28{,}37$ y $VA_B = 21{,}00$. Por VA parecería mejor B, **pero dura un año menos**.
- $CAE_A = 28{,}37/a_{\overline{3}|0{,}06} = 10{,}61$ y $CAE_B = 21/a_{\overline{2}|0{,}06} = 11{,}45$. **Se elige A.**

**CAE e inflación.** Es mejor trabajar **en términos reales**. El CAE nominal **no es constante**: crece al ritmo de la inflación (11,14; 11,70; 12,28…). Calcularlo como renta constante descontando a la tasa nominal **es un error**. Habría que usar una renta en progresión geométrica de razón $(1 + \text{inflación})$.

**CAE y cambio tecnológico.** Si los costes de las máquinas nuevas bajan un 20 % al año, el CAE de cada año es el anterior por 0,8:

- Máquina A: $28{,}37 = \dfrac{CAE_1}{1{,}06} + \dfrac{0{,}8\,CAE_1}{1{,}06^2} + \dfrac{0{,}8^2\,CAE_1}{1{,}06^3}$, luego $CAE_1 = 12{,}94$.
- Máquina B: $21 = \dfrac{CAE_1}{1{,}06} + \dfrac{0{,}8\,CAE_1}{1{,}06^2}$, luego $CAE_1 = 12{,}69$.

**Ahora gana B**, la de vida corta.

Pero **no se puede generalizar**. Con A = 15 más 5/año durante 6 años ($VA = 39{,}59$) y B = 14 más 6/año durante 2 años ($VA = 25$):

- Sin cambio tecnológico: $CAE_A = 8{,}05$ y $CAE_B = 13{,}64$.
- Con cambio tecnológico: $CAE_1 = 12{,}63$ para A y $15{,}10$ para B.

**Gana A en ambos casos.**

### Momento de reemplazo

La máquina vieja se mantiene **mientras el coste de un año más con ella** (sus costes operativos más la pérdida de valor de reventa) **sea menor que el CAE de la nueva**.

### Fluctuaciones de la carga de trabajo (demanda estacional)

Método de las diapositivas: demanda de 1.000 uc de octubre a junio y 500 uc en verano; capacidad de 1.000 uc/año por máquina; vida indefinida; $r = 10\,\text{\%}$.

- Máquinas viejas: 2 um/copia. Máquinas nuevas: 1 um/copia y 6.000 um cada una.
- **Demanda anual total = 1.500 uc**, y cada coste anual perpetuo vale $VA = \text{coste anual}/r$.

| Alternativa | Reparto de la producción | VA de los costes | Ahorro frente a I |
| :--- | :--- | ---: | ---: |
| I. No sustituir | 750 + 750 uc a 2 um | $2 \times 1.500/0{,}1 = 30.000$ | — |
| II. Sustituir las dos | 750 + 750 uc a 1 um, más 2 × 6.000 | $2\times(6.000 + 750/0{,}1) = 27.000$ | 3.000 |
| III. Sustituir una | nueva a **pleno rendimiento** (1.000 uc a 1 um) y vieja la punta (500 uc a 2 um) | $6.000 + 1.000/0{,}1 + 1.000/0{,}1 = 26.000$ | **4.000** |

La mejor opción es la **III**: la máquina nueva funciona siempre a plena carga y la vieja solo cubre la demanda punta.

## Trampas de test del tema 4

> **Costes hundidos:** no se incluyen nunca, aunque se hicieran para posibilitar el proyecto. Es la afirmación (a) del problema 14 de la relación, que es verdadera.

> **Renovación:** la venta del equipo viejo **reduce** el desembolso inicial incremental; no lo aumenta. La falsa del problema 14 es la (b).

> **Renovación (problema 15):** el coste de renovar **sí** incluye lo que se cobra hoy por la planta vieja (coste de oportunidad: se dejan de ingresar 6 M€). Además, los flujos incrementales restan los flujos que generaba la planta vieja y su valor residual futuro. Por eso ninguna de las a), b) y c) es correcta: es la **d**.

> **Intereses:** no se restan en los flujos del VAN (separación entre inversión y financiación). Una pregunta típica pide el BAIT, BAT y BN con intereses y después el VAN **sin** ellos.

> **Amortización:** no es un flujo; solo aporta $CAF \cdot t_c$. Si los «costes fijos» del enunciado **incluyen** la amortización, hay que **quitarla** para obtener $Q^{ai}$ (problema 16).

> **CAE (problema 23):** las cuatro afirmaciones son incorrectas; la respuesta es la **d**. Se recomienda trabajar en términos **reales**, el CAE sirve precisamente para duraciones **distintas**, y el VAN no es preferible al CAE cuando las duraciones difieren.
