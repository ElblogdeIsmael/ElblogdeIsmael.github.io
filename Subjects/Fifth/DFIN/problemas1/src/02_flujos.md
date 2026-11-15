# Flujos de caja de un proyecto y VAN

Es el segundo problema que más cae (≈ 7 exámenes) y el más largo. En 2012 era **eliminatorio** (4 puntos, había que tenerlo bien al 50-70 %). El enunciado de 2012 (LA ROJA) y el de la ordinaria de 2025 (BOPT) son **el mismo problema con otras cifras**: si dominas uno, tienes el otro.

## Cómo reconocerlo

«Proyecto de inversión», «activo fijo que se amortiza de forma lineal en $n$ años», «fondo de maniobra del X % de las ventas», «al final de la vida útil los activos pueden venderse por…», «tasa impositiva», «calcule BAIT, BN y dividendos», «inversión inicial después de impuestos», «valor residual después de impuestos», «VAN básico».

## Las tres reglas que lo explican todo

1. **Solo cuentan los flujos de caja incrementales**, no los beneficios. La amortización no es una salida de caja: solo importa porque **ahorra impuestos** ($CAF\cdot t_c$).
2. **La financiación no entra en el VAN básico.** Los intereses del préstamo aparecen en el BN y en los dividendos, pero **nunca** en los flujos: el coste del dinero ya está en $r$.
3. **Todo lo que tiene efecto fiscal se pone después de impuestos**: gastos de $t=0$ deducibles, plusvalías y minusvalías en la venta de activos, pérdida del FM no recuperado. Se supone que la empresa tiene otros beneficios, así que **una pérdida ahorra impuestos**.

## Plan de ataque

1. **Amortización fiscal:** $CAF = \dfrac{V_0 - VR_{\text{contable}}}{n_{\text{fiscal}}}$. Atención a la vida fiscal: puede ser mayor que la del proyecto (queda VNC al final) o menor (CAF = 0 en los últimos años).
2. **Tabla del FM:** saldo de cada año ($\%\times\text{ventas}_t$) y su variación $\Delta FM_t = FM_t - FM_{t-1}$. Un aumento es una salida de caja.
3. **Cuenta de resultados** (si la piden): $BAIT = \text{ingresos} - \text{costes} - CAF$; $BAT = BAIT - \text{intereses}$; $BN = BAT(1-t_c)$; $DIV = \text{reparto}\times BN$. En el último año, el BAIT incluye el resultado de la venta del activo y la pérdida del FM.
4. **Inversión inicial:** $C_0^{di} = \text{activos} + FM_0 + \text{gastos deducibles de } t=0 \times (1-t_c)$. Sin costes hundidos (estudios ya pagados).
5. **Flujo de explotación:** $Q_t^{di} = Q_t^{ai}(1-t_c) + CAF\cdot t_c - \Delta FM_t$, con $Q_t^{ai} = \text{ingresos} - \text{costes}$ **sin amortización**.
6. **Valor residual después de impuestos** de cada activo: $VR^{di} = \text{precio} - (\text{precio} - VNC)\,t_c$. Si se vende por debajo del VNC, el paréntesis es negativo y **se suma** un ahorro fiscal. Los terrenos no se amortizan: si se venden por lo mismo, no hay impuesto.
7. **FNC** de cada año (explotación + inversiones + valores residuales) y $VAN = \sum FNC_t/(1+r)^t$. Concluye con una frase.

## Caso 2. LA ROJA, septiembre de 2012, problema 1 (4 puntos, filtro del 50 %)

> La mercantil LA ROJA, S.A. se plantea un nuevo proyecto que se iniciaría en 2012 y tendría una vida útil de 5 años. Requiere una inversión en activo fijo de 25.275 €, que se amortizaría de forma lineal en 7 años, con un valor residual contable de 775 € al final de los 7 años. A finales del año 3 será necesario adquirir un solar colindante por 2.500 €. Habría que realizar una dotación inicial de fondo de maniobra de 900 €, que durante la vida útil supondrá el 4 % de las ventas.
>
> | | Año 0 | Año 1 | Año 2 | Año 3 | Año 4 | Año 5 |
> | :--- | ---: | ---: | ---: | ---: | ---: | ---: |
> | Ingresos por ventas | | 25.275,00 | 27.825,00 | 31.500,00 | 33.810,00 | 39.450,00 |
> | Coste de las ventas | | 15.165,00 | 16.695,00 | 18.900,00 | 20.286,00 | 23.670,00 |
> | Publicidad | 720,00 | 758,25 | 834,75 | 630,00 | 676,20 | 789,00 |
>
> a) Al final de la vida útil, los activos fijos pueden venderse por 7.500 €, y el solar, en el año 5 por 2.500 €. b) El FM se recupera por el 80 % de su valor contable al final de los 5 años. c) Tasa impositiva del 35 %. d) Coste de oportunidad del capital del 10 %. e) Se reparte como dividendo el 60 % de los beneficios. La empresa tiene otros proyectos que generan beneficios y pagan impuestos.
>
> 1) BAIT, beneficio neto y dividendos de cada año. 2) Inversión inicial después de impuestos, flujos netos de caja de la explotación después de impuestos y valor residual después de impuestos. 3) VAN básico. 4) Si el proyecto implicase un mayor riesgo, ¿debería cambiar la tasa exigida?

### Paso 1. Amortización y valor neto contable

$$CAF = \frac{25.275 - 775}{7} = 3.500 \text{ €/año} \qquad VNC_5 = 25.275 - 5\times3.500 = 7.775 \text{ €}$$

El proyecto dura 5 años pero el activo se amortiza en 7: al final **quedan 7.775 € sin amortizar**. Se vende por 7.500, así que hay una **pérdida de 275 €**. El solar es terreno: no se amortiza.

### Paso 2. Fondo de maniobra

| Año | 0 | 1 | 2 | 3 | 4 | 5 |
| :--------------------------- | -----------: | -----------: | -----------: | -----------: | -----------: | -----------: |
| Saldo de FM (4 % de las ventas) | 900 | 1.011 | 1.113 | 1.260 | 1.352,40 | 1.578 |
| $\Delta FM$ (salida de caja) | 900 | 111 | 102 | 147 | 92,40 | 225,60 |

Al final del año 5 se recupera el 80 % de 1.578 = 1.262,40 €. El 20 % restante, **315,60 €, es una pérdida** deducible.

### Paso 3. Apartado 1: BAIT, BN y dividendos

El año 0 tiene un gasto de publicidad de 720 €, deducible porque la empresa tiene otros beneficios. En el año 5 el BAIT incluye la pérdida en la venta del activo (−275) y la del FM (−315,60).

| | 0 | 1 | 2 | 3 | 4 | 5 |
| :--------------------------- | -----------: | -----------: | -----------: | -----------: | -----------: | -----------: |
| Ventas | | 25.275,00 | 27.825,00 | 31.500,00 | 33.810,00 | 39.450,00 |
| − Coste de ventas | | 15.165,00 | 16.695,00 | 18.900,00 | 20.286,00 | 23.670,00 |
| − Publicidad | 720,00 | 758,25 | 834,75 | 630,00 | 676,20 | 789,00 |
| $= Q^{ai}$ | −720,00 | 9.351,75 | 10.295,25 | 11.970,00 | 12.847,80 | 14.991,00 |
| − Amortización | | 3.500,00 | 3.500,00 | 3.500,00 | 3.500,00 | 3.500,00 |
| − Pérdida en la venta del AF | | | | | | 275,00 |
| − Pérdida del FM | | | | | | 315,60 |
| **BAIT** | **−720,00** | **5.851,75** | **6.795,25** | **8.470,00** | **9.347,80** | **10.900,40** |
| − Impuesto (35 %) | −252,00 | 2.048,11 | 2.378,34 | 2.964,50 | 3.271,73 | 3.815,14 |
| **BN** | **−468,00** | **3.803,64** | **4.416,91** | **5.505,50** | **6.076,07** | **7.085,26** |
| **DIV (60 %)** | — | **2.282,18** | **2.650,15** | **3.303,30** | **3.645,64** | **4.251,16** |

No hay deuda, así que $BAT = BAIT$. En el año 0 no se reparte dividendo por una pérdida.

### Paso 4. Apartado 2: inversión inicial, flujos y valor residual

**Inversión inicial después de impuestos:**

$$C_0^{di} = -\big(25.275 + 900 + 720\times(1-0{,}35)\big) = -(25.275 + 900 + 468) = \mathbf{-26.643} \text{ €}$$

**Flujos de explotación después de impuestos:** $Q_t^{di} = Q_t^{ai}(1-0{,}35) + 3.500\times0{,}35 - \Delta FM_t$.

| Año | 1 | 2 | 3 | 4 | 5 |
| :--------------------------- | -----------: | -----------: | -----------: | -----------: | -----------: |
| $Q^{ai}(1-t_c)$ | 6.078,64 | 6.691,91 | 7.780,50 | 8.351,07 | 9.744,15 |
| $+\,CAF\cdot t_c$ | 1.225,00 | 1.225,00 | 1.225,00 | 1.225,00 | 1.225,00 |
| $-\,\Delta FM$ | −111,00 | −102,00 | −147,00 | −92,40 | −225,60 |
| $= Q^{di}$ | **7.192,64** | **7.814,91** | **8.858,50** | **9.483,67** | **10.743,55** |

**Valor residual después de impuestos (año 5):**

- Activo fijo: $VR^{di} = 7.500 - (7.500 - 7.775)\times0{,}35 = 7.500 + 96{,}25 = \mathbf{7.596{,}25}$. La pérdida de 275 ahorra 96,25 de impuestos.
- Fondo de maniobra: $0{,}8\times1.578 + 0{,}2\times1.578\times0{,}35 = 1.262{,}40 + 110{,}46 = \mathbf{1.372{,}86}$.
- Solar: se vende por lo que costó, **2.500** sin impuesto.
- Total: $7.596{,}25 + 1.372{,}86 + 2.500 = \mathbf{11.469{,}11}$ €.

### Paso 5. Apartado 3: FNC y VAN

| Año | 0 | 1 | 2 | 3 | 4 | 5 |
| :--------------------------- | -----------: | -----------: | -----------: | -----------: | -----------: | -----------: |
| $C_0^{di}$ / $Q^{di}$ | −26.643,00 | 7.192,64 | 7.814,91 | 8.858,50 | 9.483,67 | 10.743,55 |
| Solar | | | | −2.500,00 | | |
| $VR^{di}$ | | | | | | 11.469,11 |
| **FNC** | **−26.643,00** | **7.192,64** | **7.814,91** | **6.358,50** | **9.483,67** | **22.212,66** |

$$VAN = -26.643 + \frac{7.192{,}64}{1{,}1} + \frac{7.814{,}91}{1{,}1^2} + \frac{6.358{,}50}{1{,}1^3} + \frac{9.483{,}67}{1{,}1^4} + \frac{22.212{,}66}{1{,}1^5} = \mathbf{11.401{,}39} \text{ €}$$

**Conclusión:** $VAN > 0$, el proyecto **se acepta**: aumenta el valor de la empresa en 11.401,39 €.

Por si piden los otros criterios con los mismos flujos:

- **TIR** $\approx$ **22,73 %** $> 10\,\text{\%}$: se acepta (coincide con el VAN, porque el proyecto es simple).
- **Plazo de recuperación:** acumulado al año 3, −5.276,95; el año 4 aporta 9.483,67. $PR = 3 + 5.276{,}95/9.483{,}67 \approx$ **3,56 años**.
- **Plazo descontado:** acumulado descontado al año 4, −2.390,92; el año 5 aporta $22.212{,}66/1{,}1^5 = 13.792{,}31$. $PRD \approx 4 + 0{,}17 =$ **4,17 años**.

### Paso 6. Apartado 4: más riesgo

**Sí.** El coste de oportunidad del capital es la rentabilidad de inversiones de **riesgo equivalente**. Si el proyecto tiene más riesgo económico y financiero que la actividad habitual, hay que exigir una tasa mayor (prima de riesgo), lo que reduce el VAN.

## Comprobaciones rápidas

- El FNC de un año normal se puede comprobar de otra forma: $FNC = BN_{\text{sin intereses}} + CAF - \Delta FM$. En el año 1: $5.851{,}75\times0{,}65 + 3.500 - 111 = 7.192{,}64$ ✓.
- La suma de los $\Delta FM$ (1.578) es el FM total que se inmoviliza; al final se recupera ese saldo, no la suma de las dotaciones.
- La vida fiscal (7 años) y la del proyecto (5) son distintas: si no queda VNC al final, revisa.

## Variantes que ya han caído

**Ordinaria de enero de 2025 (BOPT): la misma plantilla con préstamo.** Activo de 18.250 € amortizable en 7 años con VR contable de 750 ($CAF = 2.500$); solar de 1.800 € en el año 3; ventas constantes de 17.850 € con costes del 75 %; FM inicial de 600 € y del 4 % de las ventas, recuperado al 60 %; $t_c = 25\,\text{\%}$; $r = 9\,\text{\%}$; reparto del 75 %; y un **préstamo americano del 50 % de la inversión inicial al 7 %**.

- Préstamo: $0{,}5\times(18.250 + 600) = 9.425$ €; intereses de $0{,}07\times9.425 = 659{,}75$ €/año.
- Años 1 a 4: $BAIT = 17.850 - 13.387{,}50 - 2.500 = 1.962{,}50$; $BN = (1.962{,}50 - 659{,}75)\times0{,}75 = 977{,}06$; $DIV = 732{,}80$.
- Año 5: $BAIT = 1.962{,}50 + 2.750 - 285{,}60 = 4.426{,}90$ (la venta del activo da una **plusvalía**: $8.500 - VNC_5 = 8.500 - 5.750 = 2.750$). $BN = 2.825{,}36$ y $DIV = 2.119{,}02$.
- Flujos: $Q^{di}_1 = 3.857{,}88$ y $Q^{di}_{2\ldots5} = 3.971{,}88$. **Los intereses no aparecen**.
- $VR^{di}(AF) = 8.500 - 2.750\times0{,}25 = 7.812{,}50$, que **resta** impuesto porque es una plusvalía. $VR^{di}(FM) = 0{,}6\times714 + 0{,}4\times714\times0{,}25 = 499{,}80$.
- **VAN básico al 9 %: 1.676,99 €.** (El apartado del VAA es del tema 6.)

**Parcial de noviembre de 2016: comercio electrónico (P y G incremental y canibalización).** Plataforma de 10.000 € amortizable en 2 años, sin valor residual; formación de 2.000 € en $t=0$; existencias de 2.500 € recuperadas al 70 % al final; mantenimiento de 1.000 €/año. Ventas *online* de 20.000 €, con un 5 % de crecimiento anual; las tiendas físicas (100.000 €) **pierden un 10 %**. 3 años, $t_c = 25\,\text{\%}$, $r = 5\,\text{\%}$.

- **Ventas incrementales** = online − canibalización: $20.000 - 10.000 = 10.000$; $21.000 - 10.000 = 11.000$; $22.050 - 10.000 = 12.050$.
- P y G incremental (años 0 a 3): BAIT $-2.000$; $4.000$; $5.000$; $10.300$ (el año 3 ya no tiene amortización y resta la pérdida de existencias, $0{,}3\times2.500 = 750$). BN: $-1.500$; $3.000$; $3.750$; $7.725$.
- FNC: $t=0$: $-10.000 - 2.500 - 2.000\times0{,}75 = -14.000$. Años 1 y 2: $9.000\times0{,}75 + 5.000\times0{,}25 = 8.000$ y $10.000\times0{,}75 + 1.250 = 8.750$. Año 3: $11.050\times0{,}75 + 1.750 + 750\times0{,}25 = 10.225$.
- $VAN_{5\,\text{\%}} = \mathbf{10.388{,}30}$ €: se lanza el piloto.
- **La trampa es la canibalización**: las ventas que se pierden en tienda son un coste incremental del proyecto.

**Ordinaria FICO de enero de 2026 (Telepizza): activos que se venden en años distintos.** Terreno de 40.000, construcción de 60.000, dos máquinas de 10.000 (todo lineal en 10 años), puesta en marcha de 1.000 y FM de 1.800; una máquina se vende en el año 7 por 2.000.

- $C_0^{di} = -(40.000 + 60.000 + 20.000 + 1.000\times0{,}7 + 1.800) = -122.500$.
- La CAF baja de 8.000 a 7.000 cuando se vende la primera máquina (año 7), y en el año 7 hay un **valor residual intermedio**: $VNC_7 = 3.000$, venta por 2.000, $VR^{di} = 2.000 + 1.000\times0{,}3 = 2.300$.
- Plazo de recuperación $\approx 6{,}02$ años y $VAN_{6\,\text{\%}} = 56.365{,}79$ €.

**Parcial de 2025 (test numérico): VAN real frente a nominal.** Flujos $-100;\ 80;\ 90;\ 70;\ 100$ en términos reales, tipo nominal del 13,3 % e inflación del 3 %.

- $r_{\text{real}} = 1{,}133/1{,}03 - 1 = 10\,\text{\%}$ y $VAN = 168{,}00$ €.
- **Regla:** flujos reales con tasa real, flujos nominales con tasa nominal. Nunca se mezclan.

## Errores típicos

- Restar la amortización en el flujo (es el BAIT, no el flujo) o, al revés, olvidar el ahorro fiscal $CAF\cdot t_c$.
- **Meter los intereses del préstamo en los flujos.** Solo van al BN y a los dividendos.
- Recuperar el FM por su valor completo cuando el enunciado dice que se recupera una parte, o no deducir la pérdida.
- Calcular el impuesto de la venta del activo sobre el precio de venta en vez de sobre la plusvalía o minusvalía ($\text{precio} - VNC$).
- Olvidar la inversión del solar en el año en que se hace (año 3) o aplicarle amortización.
- Incluir costes hundidos (un estudio de mercado ya pagado).
- No escribir la frase de conclusión («VAN > 0, se acepta»).
