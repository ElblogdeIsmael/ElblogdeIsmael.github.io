# Exámenes de convocatorias anteriores

Análisis de exámenes y recopilaciones de la UGR de convocatorias anteriores. Los más útiles son los **parciales y ordinarias de GADE** (Dirección Financiera de ADE y de los dobles grados) y los **exámenes antiguos con la plantilla de Rayo Cantón** (2000-2012, «Dirección Financiera I»); dos de ellos llevan su nombre en la cabecera. Los exámenes de **FICO «Dirección Financiera I»** tienen el mismo contenido con otra numeración de temas.

## Formato probable del parcial

| Aspecto | Lo que dicen los exámenes |
| :--- | :--- |
| Peso | **Test ≈ 50 % y práctica ≈ 50 %** (2012: 10 + 10 puntos; FICO 2018: 10 + 10; GADE 2018-19: 5 test y 2 problemas) |
| Test | **5–10 preguntas de 4 opciones** en los parciales GADE recientes (12 en la plantilla de Rayo de 2012). Muchas con «d) Ninguna de las anteriores» o «a) y c) son correctas» |
| Penalización | Plantilla de Rayo: **un error resta 1/4 de un acierto** (0,834 / −0,208 en 2012; 1 / −0,25 en 2018) |
| Práctica | **1–2 problemas**: casi siempre **valoración de acciones con VAOC**, y a menudo uno de **flujos de caja y VAN de un proyecto**. A veces un problema corto de **CAE** o de **bonos** |
| Test numérico | Preguntas cortas con cálculo: Gordon/PER/VAOC, VAN real frente a nominal, CAE de dos máquinas, Fisher, flujo $= BAIT(1-t) + \text{amortización}$ |

**Estrategia ante el test.** Con 4 opciones y una penalización de 1/4, contestar al azar tiene esperanza **ligeramente positiva**: $0{,}25 \times 1 - 0{,}75 \times 0{,}25 = +0{,}06$. Si descartas **una** opción, ya compensa claramente contestar. Deja en blanco solo lo que no entiendas en absoluto.

**Estrategia ante la práctica.** En 2012 el problema de flujos de caja era **eliminatorio**: había que tenerlo bien al 50–70 %. Sigue siempre el orden de los apartados, pon la **tabla completa** (los apartados de BAIT, BN y DIV puntúan aunque el VAN salga mal) y **escribe las fórmulas** antes de sustituir.

## Qué tipos de problema salen

| Tipo | Exámenes reales | Dónde estudiarlo |
| :--- | :---: | :--- |
| **Acciones: VAOC, dividendos por fases, $g = b\cdot ROE$, PER** | ≈ 13 | Tema 2 y problemas A1–A9 de este capítulo |
| **Flujos de caja y VAN de un proyecto** (FM como % de las ventas, valor residual con plusvalía o pérdida, préstamo) | ≈ 7 | Tema 4 (SIFA), relación 17 y 19, LA ROJA y BOPT |
| Renovación o VAN incremental | 2 | Renovación de 2012 y relación 15, 20 y 22 |
| CAE (con inflación o vidas distintas) | 1 + muchas de test | LED 2018-19 y relación 24 |
| Bonos (precio, TIR, rentabilidad realizada) | 2 (FICO) | Tema 2 y bonos de 2018 |

Ni ETTI, ni tipos *forward*, ni TIRM aparecen como problema en ningún examen; si salen, será en el test.

> **Interpretación importante (sale en dos problemas):** cuando el enunciado dice «después, la competencia hará que la ROE descienda al X %», el ROE nuevo se aplica **a las nuevas reinversiones**. El capital ya invertido sigue rindiendo lo de antes. Así lo resuelve el parcial 2018-19 corregido.

## Problemas de examen resueltos (verificados)

Las cifras están recalculadas. Cuando difieren de la resolución que trae el documento original, se indica.

### A1. Parcial 1, noviembre de 2025: dos reinversiones temporales

> BPA de 15 €. En el año 2 se invierte el 60 % de los beneficios con un ROE del 6 % durante 3 años; en el año 3, el 50 % con un ROE del 7 % durante 3 años. $r = 5{,}5\,\text{\%}$. Calcula $P_0$ y si se recomienda el plan.

- **Reinversión en $t=2$:** capital $0{,}6\times15 = 9$, flujo $0{,}54$ en los años 3 a 5, y $VAN_2 = -9 + 0{,}54\,a_{\overline{3}|0{,}055} = -7{,}54$.
- **Reinversión en $t=3$:** capital $0{,}5\times15{,}54 = 7{,}77$, flujo $0{,}5439$ en los años 4 a 6, y $VAN_3 = -6{,}30$.

| Año | 1 | 2 | 3 | 4 | 5 | 6 | 7 y sig. |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| BPA | 15 | 15 | 15,54 | 16,08 | 16,08 | 15,54 | 15 |
| DIV | 15 | 6 | 7,77 | 16,08 | 16,08 | 15,54 | 15 |

- $P_0 = \mathbf{260{,}58}$ € y $VAOC = -7{,}54/1{,}055^2 - 6{,}30/1{,}055^3 = \mathbf{-12{,}14}$.
- Comprobación: $15/0{,}055 - 12{,}14 = 260{,}58$ ✓.
- **No se recomienda el plan:** el ROE de ambas reinversiones es menor que $r$ y además los proyectos duran solo 3 años, así que destruyen valor.

### A2. Ordinaria de enero de 2026 (ADE): crecimiento en dos fases (Trank)

> $DIV_1 = 1{,}40$ €, $r = 11\,\text{\%}$. En los años 1 y 2 se retiene el 90 % con un ROE perpetuo del 20 %. Desde el año 3 se reparte el 80 % y el dividendo crece a una tasa constante.

- $BPA_1 = 1{,}40/0{,}1 = 14$.
- $BPA_2 = 14 + 0{,}2\times12{,}6 = 16{,}52$ y $BPA_3 = 16{,}52 + 0{,}2\times14{,}868 = 19{,}49$.
- Dividendos: $DIV_2 = 1{,}65$ y $DIV_3 = 15{,}59$.
- **ROE de la fase 2:** el que hace el precio compatible con el VAOC de la fase 1 es **$ROE = r = 11\,\text{\%}$** (las reinversiones de la fase 2 tienen VAN nulo), luego $g = 0{,}2\times0{,}11 = 2{,}2\,\text{\%}$.
- $VAN_1 = -12{,}6 + 2{,}52/0{,}11 = 10{,}31$ y $VAN_2 = 12{,}16$, luego $VAOC = 19{,}16$.
- $P_0 = 14/0{,}11 + 19{,}16 = \mathbf{146{,}43}$ €. Por dividendos sale lo mismo.

### A9. Parcial 1 de 2018-19, problema 1 (3,5 puntos)

> ROE del 14 %, reparto del 50 % y capital contable por acción de 65 €. Dentro de 2 años, el ROE baja al 11,5 % y el reparto sube al 70 %. $r = 11{,}5\,\text{\%}$.

| Año | 1 | 2 | 3 | 4 |
| :--- | :---: | :---: | :---: | :---: |
| BPA | 9,10 | 9,737 | 10,419 | 10,778 |
| DIV | 4,55 | 4,869 | 7,293 | 7,545 |

- $g = 7\,\text{\%}$ en los años 1 y 2, y $g = 0{,}3\times0{,}115 = 3{,}45\,\text{\%}$ desde el año 3.
- **Por dividendos:** $P_2 = 7{,}293/(0{,}115-0{,}0345) = 90{,}60$, luego $P_0 = 4{,}55/1{,}115 + (4{,}869 + 90{,}60)/1{,}115^2 = \mathbf{80{,}87}$ €.
- **Por el VAOC:** $VAN_1 = -4{,}55 + 0{,}637/0{,}115 = 0{,}99$, $VAN_2 = 1{,}06$ y $VAN_{t\ge3} = 0$. $VAOC = 1{,}74$ y $P_0 = 9{,}10/0{,}115 + 1{,}74 = 80{,}87$ ✓.
- **Comentario:** desde el año 3, $ROE = r$, así que reinvertir no crea valor. Solo aportan las reinversiones de los dos primeros años.

### A10. Parcial 1 de 2018-19, problema 2 (1,5 puntos): CAE con inflación

> Una bombilla LED cuesta 3,60 €, dura 9 años y consume 2 €/año. Una convencional cuesta 0,60 €, dura 1 año y consume 7 €/año. Tasa nominal del 6,08 % e inflación del 2 %.

- $r_{\text{real}} = 1{,}0608/1{,}02 - 1 = 4\,\text{\%}$.
- **LED:** $VA = 3{,}60 + 2\,a_{\overline{9}|0{,}04} = 18{,}47$ y $CAE = 18{,}47/7{,}4353 = \mathbf{2{,}48}$ €.
- **Convencional:** $VA = 0{,}60 + 7/1{,}04 = 7{,}33$ y $CAE = 7{,}33\times1{,}04 = \mathbf{7{,}62}$ €.
- **Interesa la LED.** El documento escribe un VA de 18,741, pero con su propio CAE de 2,48 lo correcto es 18,47.

### A5. Ordinaria de enero de 2025, problema 3: BPA por fases

> $BPA_1 = 80$. Reparto del 80 % en los años 1 y 2 con ROE perpetuo del 20 %. En el año 5 se invierte el 40 % del BPA en un proyecto de 3 años que rinde el 15 %. Después se reparte todo. $r = 12\,\text{\%}$.

| Año | 1 | 2 | 3–4 | 5 | 6–8 | 9 y sig. |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| BPA | 80 | 83,20 | 86,53 | 86,53 | 91,72 | 86,53 |
| DIV | 64 | 66,56 | 86,53 | 51,92 | 91,72 | 86,53 |

- $P_3 = \sum_{t=4}^{8} DIV_t/1{,}12^{t-3} + (86{,}53/0{,}12)/1{,}12^5 = \mathbf{703{,}42}$ €.
- $P_0 = \mathbf{672{,}47}$ €.
- La resolución del alumno da $P_3 = 731{,}01$, pero eso no es coherente con su propio $P_0 = 672{,}48$.

### A8. Ordinaria de 2023-24, problema 3: reinversiones constantes

> BPA constante de 50 €. Durante 5 años se invierten 20 €/acción al año con una rentabilidad perpetua del 15 %. $r = 10\,\text{\%}$.

Supuesto: las inversiones se hacen al final de los años 1 a 5.

- Cada una tiene $VAN = -20 + 3/0{,}1 = 10$.
- Dividendos: 30; 33; 36; 39; 42, y después 65 a perpetuidad.
- $P_0 = \mathbf{537{,}91}$ € y $VAOC = 10\,a_{\overline{5}|0{,}1} = 37{,}91$.
- Ratio beneficio-precio: $BPA_1/P_0 = 9{,}30\,\text{\%} < r$, porque $VAOC > 0$.

### A6. Parcial 1 de 2024-25: Lauson Corp (Gordon con $g$ estimada)

- Tasa de reparto: $750.000/2.142.857{,}14 = 35\,\text{\%}$, luego $b = 0{,}65$ y $g = 0{,}65\times9{,}23\,\text{\%} = 6\,\text{\%}$. Coincide con el crecimiento histórico: $2.142.857{,}14/2.021.563{,}34 = 1{,}06$.
- $DIV_{2024} = 750.000\times1{,}06/500.000 = 1{,}59$ €/acción.
- $P_0 = 1{,}59/(0{,}10 - 0{,}06) = \mathbf{39{,}75}$ €/acción.

### Ejercicio de examen de 2012: VAOC según la TIR de la reinversión

> Dividendo perpetuo de 20 € y $r = 10\,\text{\%}$. Se reinvierten los 20 € del año próximo en un proyecto perpetuo.

| TIR del proyecto | 5 % | 10 % | 15 % | 20 % | 25 % |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Flujo anual | 1 | 2 | 3 | 4 | 5 |
| $VAN_1$ | −10 | 0 | 10 | 20 | 30 |
| VAOC | −9,09 | 0 | 9,09 | 18,18 | 27,27 |
| $P_0$ | 190,91 | 200 | 209,09 | 218,18 | 227,27 |

### Examen de febrero de 2012, problema 3: los zapatos

- Rentabilidad esperada: $r = DIV/P + g = 4\,\text{\%} + 0{,}4\times20\,\text{\%} = \mathbf{12\,\text{\%}}$.
- Al agotarse el crecimiento y repartir todo, $P_0' = BPA_1/0{,}12$, frente a $P_0 = 0{,}6\,BPA_1/0{,}04 = 15\,BPA_1$.
- **El precio cae un 44 %**. El crecimiento valía mucho porque $ROE = 20\,\text{\%} > r$.

### Concesiones (FICO): carretera de 2018 y Saycea

Esquema: VAOC $=$ VA de los beneficios futuros de la concesión $-$ VA de las inversiones en construcción, por acción; $P_0 = BPA/r + VAOC$.

- **Saycea:** 103 M€ y 5 M de acciones, luego 20,60 €/acción. Contrato en $t=1$; se invierte **todo** el beneficio en los años 2 a 5; desde el año 6 se suman 200 M€/año (40 €/acción) hasta el año 16 (15 años desde la firma). $P_0 = \mathbf{207{,}77}$ €, el resultado de la academia. Con fin en el año 15 sale 202,86; con ninguna de las dos lecturas sale el 210,3 que da el otro documento.
- **Carretera (grupo B):** $BPA = 14$; inversiones de $0{,}08\times14 = 1{,}12$ €/acción en los años 3, 4 y 5; beneficio de $3/5 = 0{,}60$ €/acción desde el año 6 hasta el final de la concesión. $VAOC = \mathbf{0{,}19}$ € y $P_0 = 100{,}19$ €. Casi neutro: la concesión apenas crea valor al 14 %.

### Bonos (FICO, octubre de 2018, grupo B)

> Bonos a 3 años, cupón del 0,05 % y tipo del 0,13 %. Nominal supuesto de 1.000 €.

- a) $P_0 = 0{,}5\,a_{\overline{3}|0{,}0013} + 1.000/1{,}0013^3 = 997{,}61$ €, luego 10 bonos cuestan **9.976,06 €**.
- b) Si mantiene los bonos hasta el vencimiento, la rentabilidad es la TIR, **0,13 %**.
- c) Vende 7 bonos al cabo de un año, con el tipo bajado al 0,10 %: $P_1 = 999{,}00$ y $r = (0{,}5 + 999{,}00)/997{,}61 - 1 = \mathbf{0{,}19\,\text{\%}}$. Gana más porque bajó el tipo.
- d) Vende 7 y mantiene 3: TIR de los flujos $(-9.976{,}06;\; 5 + 7\times999{,}00;\; 1{,}5;\; 3.001{,}5)$, que da **0,156 %**.

### Renovación de un equipo (febrero de 2012, problema 1, eliminatorio)

- **Equipo viejo:** se compró por 90.000 con una vida de 9 años, luego amortiza 10.000/año. Lleva 4 años: $VNC = 50.000$, igual a su precio de venta, así que **no hay efecto fiscal**.
- **Equipo nuevo:** $100.000 + 20.000$ de instalación $= 120.000$, amortización de 24.000/año durante 5 años.
- **Alternativas:** seguir con el viejo o renovar. **Horizonte:** 5 años, que es la vida que le queda al viejo y la vida del nuevo.
- $\Delta C_0 = -120.000 + 50.000 = -70.000$.
- $\Delta Q^{ai} = 80.000 + 30.000 - 10.000 = 100.000$ y $\Delta CAF = 24.000 - 10.000 = 14.000$.
- $\Delta BAIT = 86.000$ y $\Delta BN = 60.200$.
- $\Delta Q^{di} = 100.000\times0{,}7 + 14.000\times0{,}3 = 74.200$.
- $\Delta VR = 0$.
- $\Delta VAN = -70.000 + 74.200\,a_{\overline{5}|0{,}12} = \mathbf{197.474{,}39}$ €: **se renueva**.

### LA ROJA (septiembre de 2012) y BOPT (enero de 2025): el mismo problema

**LA ROJA:**

- $CAF = (25.275 - 775)/7 = 3.500$.
- FM: 900 en $t=0$ y después el 4 % de las ventas; se recupera al 80 % con la pérdida deducible.
- La publicidad de $t=0$ es deducible: $C_0^{di} = -(25.275 + 900 + 720\times0{,}65) = -26.643$.
- El solar (2.500) se paga en $t=3$ y se vende por lo mismo en $t=5$, sin impuesto.
- Activo fijo: $VNC_5 = 7.775$ y venta por 7.500, luego $VR^{di}(AF) = 7.500 + 275\times0{,}35 = 7.596{,}25$.
- FM: $VR^{di}(FM) = 0{,}8\times1.578 + 0{,}2\times1.578\times0{,}35 = 1.372{,}86$.

| | 0 | 1 | 2 | 3 | 4 | 5 |
| :--- | ---: | ---: | ---: | ---: | ---: | ---: |
| BAIT | −720 | 5.851,75 | 6.795,25 | 8.470 | 9.347,80 | 10.900,40 |
| BN | −468 | 3.803,64 | 4.416,91 | 5.505,50 | 6.076,07 | 7.085,26 |
| DIV (60 %) | — | 2.282,18 | 2.650,15 | 3.303,30 | 3.645,64 | 4.251,16 |
| FNC | −26.643 | 7.192,64 | 7.814,91 | 6.358,50 | 9.483,67 | 22.212,66 |

$$VAN_{10\,\text{\%}} = \mathbf{11.401{,}39} \text{ €}$$

Apartado 4: con más riesgo, **sí** debe subir la tasa exigida, porque el coste de oportunidad refleja el riesgo del proyecto.

> **El año final en la cuenta de resultados.** El BAIT del año $n$ incluye el **resultado de la venta del activo** (plusvalía o minusvalía) y la **pérdida del FM no recuperado**. En LA ROJA: $14.991 - 3.500 - 275 - 315{,}60 = 10.900{,}40$. Así lo hace la resolución de BOPT de la ordinaria de 2025. Esto no cambia el FNC: el efecto fiscal ya está en el $VR^{di}$.

**BOPT** (la resolución manuscrita de la ordinaria de 2025 confirma estas cifras):

- $CAF = 2.500$ y $C_0 = -18.850$. El préstamo es el 50 % de $18.250 + 600$, al 7 %, así que los intereses son 659,75 €/año.
- **Años 1 a 4:** BAIT $= 17.850 - 13.387{,}50 - 2.500 = 1.962{,}50$; BN $= (1.962{,}50 - 659{,}75)\times0{,}75 = 977{,}06$; DIV $= 732{,}80$.
- **Año 5:** BAIT $= 1.962{,}50 + 2.750 - 285{,}60 = 4.426{,}90$, que suma la plusvalía del activo y resta la pérdida del 40 % del FM. BN $= 2.825{,}36$ y DIV $= 2.119{,}02$.
- **Flujos:** $Q^{di}_1 = 3.857{,}88$ y $Q^{di}_{2\ldots5} = 3.971{,}88$. El solar sale en $t=3$ y vuelve en $t=5$.
- **Valor residual:** $VR^{di}(AF) = 8.500 - 2.750\times0{,}25 = 7.812{,}50$ y $VR^{di}(FM) = 0{,}6\times714 + 0{,}4\times714\times0{,}25 = 499{,}80$.
- **VAN básico al 9 %: 1.676,99 €.** El VAA es del tema 6.

### Ordinaria FICO DF I, 23 de enero de 2026, problema 1 (7 puntos): Telepizza

> Proyecto a 10 años. Terreno de 40.000 €; construcción de 60.000 €; dos máquinas de 10.000 € cada una; gastos de puesta en marcha de 1.000 €; FM inicial de 1.800 €. Amortización lineal en 10 años. Una máquina se vende al final del año 7 por 2.000 € y la otra al final del año 10 por 500 €. El terreno se vende en el año 10 sin revalorizarse; la construcción, por 10.000 €. FM del 5 % de las ventas, recuperado al 50 %. Ventas de 65.000 €/año y gastos del 60 % de las ventas. $t_c = 30\,\text{\%}$. Hay que calcular la inversión inicial después de impuestos, los FNC, los valores residuales, el plazo de recuperación y la ecuación del VAN.

1. **Inversión inicial:** $C_0^{di} = -(40.000 + 60.000 + 20.000 + 1.000\times0{,}7 + 1.800) = \mathbf{-122.500}$ €. La puesta en marcha es deducible.
2. **FNC:** $Q^{ai} = 0{,}4\times65.000 = 26.000$.
    - $CAF = 6.000 + 2\times1.000 = 8.000$ en los años 1 a 7, y 7.000 después.
    - $Q^{di}_{1\ldots7} = 18.200 + 2.400 = 20.600$, y en el año 1 hay que restar $\Delta FM = 3.250 - 1.800 = 1.450$, así que $Q^{di}_1 = 19.150$.
    - $Q^{di}_{8\ldots10} = 18.200 + 2.100 = 20.300$.
3. **Valores residuales:**
    - En $t=7$: $VNC = 3.000$ y se vende por 2.000, luego $VR = 2.000 + 1.000\times0{,}3 = \mathbf{2.300}$.
    - En $t=10$: terreno 40.000; construcción $10.000\times0{,}7 = 7.000$ (su VNC es 0); máquina $500\times0{,}7 = 350$; FM $1.625 + 1.625\times0{,}3 = 2.112{,}50$. **Total: 49.462,50 €.**
4. **Plazo de recuperación:** acumulado al año 6, 122.150. Faltan 350 sobre los 22.900 del año 7: **≈ 6,02 años**.
5. **Coste de capital** (temas 5 y 6): $k_e = 1\,\text{\%} + 1{,}5\times5\,\text{\%} = 8{,}5\,\text{\%}$ y $CMPC = 0{,}5\times8{,}5\,\text{\%} + 0{,}5\times5\,\text{\%}\times0{,}7 = 6\,\text{\%}$.
6. **Ecuación del VAN:**
    $$VAN = -122.500 + \frac{19.150}{1{,}06} + \sum_{t=2}^{7}\frac{20.600}{1{,}06^t} + \frac{2.300}{1{,}06^7} + \sum_{t=8}^{10}\frac{20.300}{1{,}06^t} + \frac{49.462{,}5}{1{,}06^{10}}$$
    Si se calcula, da 56.365,79 €.

### Examen de septiembre de 2012, problema 3: dividendos y después crecimiento al 1 %

Dividendos: 0; 0,25; 0,50; 0,75; y 1 desde el año 5, creciendo al 1 %. $k_e = 5\,\text{\%}$.

- $P_4 = 1/(0{,}05 - 0{,}01) = 25$.
- $P_0 = \sum_{t=1}^{4} DIV_t/1{,}05^t + 25/1{,}05^4 = \mathbf{21{,}84}$ €.
