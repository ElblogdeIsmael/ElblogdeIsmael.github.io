# Tema 2. Valor actual, coste de oportunidad del capital y valoración de activos

Es el tema más largo y el que más puntos da. Tiene tres bloques que caen de forma distinta:

- **Fundamentos del VAN (gráfico de Fisher):** test y un problema numérico corto (relación, problemas 1 a 3).
- **Obligaciones:** precio, rentabilidad actual, rentabilidad al vencimiento y rentabilidad del periodo de tenencia.
- **Acciones:** descuento de dividendos, Gordon, $g = b \cdot ROE$, VAOC. Es el bloque estrella de los problemas (relación, 4 a 11).

## Valor actual, VAN y coste de oportunidad

$$VA = \frac{C_1}{1+r} \qquad\qquad VAN = -C_0 + \frac{C_1}{1+r}$$

El **coste de oportunidad del capital** $r$ es la rentabilidad que se podría obtener **invirtiendo hoy en el mercado de capitales en una inversión con el mismo riesgo**. Dos principios fundamentales de las finanzas:

1. **Un euro hoy vale más que un euro mañana** (se puede invertir).
2. **Un euro seguro vale más que un euro arriesgado** (por eso $r$ sube con el riesgo).

Ejemplo de las diapositivas: un edificio cuesta 370.000 € y se venderá en un año por 420.000 €.

- Si la venta es **segura** ($r$ = Letras del Tesoro al 5 %): $VA = 420.000/1{,}05 = 400.000$ y $VAN = 30.000$.
- Si tiene **el riesgo de las acciones** ($r = 12\,\text{\%}$): $VA = 375.000$ y $VAN = 5.000$.
- **Criterio equivalente de la tasa de rentabilidad:** $(420.000 - 370.000)/370.000 = 13{,}5\,\text{\%} > 12\,\text{\%}$, luego se acepta.

> **Pregunta de reflexión típica:** si el edificio se financia con un préstamo al 8 %, ¿se le sigue exigiendo un 12 %? **Sí.** El coste de oportunidad depende del **riesgo del proyecto**, no de cómo se financie. El préstamo barato no hace que el proyecto sea menos arriesgado.

## Fundamentos del VAN: el gráfico de Fisher

Ejes: dinero en $t=0$ (abscisas) y en $t=1$ (ordenadas). La **línea del mercado de capitales** tiene pendiente $-(1+r)$: prestando o pidiendo prestado al tipo $r$, el inversor se mueve a lo largo de ella.

**Sin inversión real.** Con un flujo actual $B$ y uno futuro $F$:

- **Prefiere consumo actual:** se endeuda contra todo su flujo futuro y consume hoy $D = B + F/(1+r)$.
- **Prefiere consumo futuro:** presta todo su flujo actual y consume mañana $H = F + B(1+r)$.

El mercado de capitales permite a cada inversor **adaptar sus flujos de caja a su pauta de consumo**.

**Con inversión en activos reales.** La curva de oportunidades de inversión es **cóncava** (rendimientos marginales decrecientes): los primeros euros van a los mejores proyectos. Su pendiente es $-(1+r')$, donde $r'$ es la rentabilidad marginal de la inversión.

Notación de las diapositivas: riqueza inicial $D$; se invierte el tramo $JD$ en activos reales y se obtiene $G$ en $t=1$.

- **Si prefiere consumo actual:** se endeuda contra $G$ y consume hoy $J + G/(1+r) = J + JK = K > D$.
- **Si prefiere consumo futuro:** presta lo que le queda ($J$) y consume mañana $G + J(1+r) = M > H$.
- **$JK$** es lo que se obtiene hoy a cambio de la promesa de $G$: es el **valor actual** de la inversión. **$JD$** es lo invertido ($C_0$). **$DK$ es el VAN**: el aumento de riqueza.

**Conclusión clave:** la inversión en activos reales **aumenta la riqueza del inversor sea cual sea su pauta de consumo**.

**Inversión óptima.** Es la que **maximiza el VAN**: se invierte mientras la rentabilidad marginal supere al tipo de interés, hasta la **tangencia** entre la curva de inversión y la línea del mercado ($r' = r$).

\begin{figure}[H]
\centering
\input{src/tex/fisher_optimo.tex}
\caption{Gráfico de Fisher: la inversión $JD$ que maximiza el VAN ($DK$) es la de la tangencia entre la curva de inversión y la línea del mercado.}
\end{figure}


- **Si se invierte menos ($ND < JD$):** ambos tipos de inversor mejoran respecto a no invertir, pero **menos** que con $JD$ ($P < K$, $M' < M$).
- **Si se invierte más:** los últimos proyectos rinden $r' < r$, tienen VAN negativo y la riqueza también cae.

**Teorema de separación (Fisher).** Con mercado de capitales perfecto, **la decisión de inversión es independiente de las preferencias de consumo**: todos los accionistas quieren lo mismo, maximizar el VAN. Por eso los accionistas pueden delegar en los directivos.

### Qué pasa si cambia el tipo de interés

Si **baja** $r$, la línea del mercado se aplana y la tangencia se desplaza: **aumenta la inversión que maximiza el VAN**, porque más proyectos superan el nuevo $r$.

- El inversor que prefiere **consumo actual** (prestatario) **mejora**: se endeuda más barato.
- El inversor que prefiere **consumo futuro** (prestamista) **empeora**: sus préstamos rinden menos.

Esta es la respuesta **a** del problema 1 de la relación. Comprobación numérica con una función de producción cóncava: al bajar $r$ del 10 % al 5 %, la riqueza en $t=0$ sube y la riqueza en $t=1$ baja.

### Mercado imperfecto: tipo de endeudamiento mayor que tipo de préstamo

Si $r_{\text{endeudamiento}} > r_{\text{préstamo}}$, la línea se quiebra en dos tramos:

- Para **quien presta**, la recta tiene pendiente $-(1+r_p)$, **menos inclinada**.
- Para **quien se endeuda**, la recta tiene pendiente $-(1+r_d)$, **más inclinada**.

Cada uno alcanza la tangencia en un punto distinto, así que **prestamista y prestatario no están de acuerdo** sobre la inversión que maximiza el VAN. **Se rompe la separación de Fisher**: es la respuesta **b** del problema 2 de la relación.

\begin{figure}[H]
\centering
\input{src/tex/fisher_dos_tipos.tex}
\caption{Con tipo de endeudamiento mayor que el de préstamo, prestamista y prestatario quieren invertir cantidades distintas.}
\end{figure}


### Problema numérico tipo (relación, problema 3)

Datos: presupuesto 12.000 €, $r = 4\,\text{\%}$. Se invierten 4.000 € en activos reales y el VAN máximo es 2.000 €.

- **Flujo en $t=1$:** $VAN = -4.000 + F_1/1{,}04 = 2.000 \Rightarrow F_1 = 6.000 \times 1{,}04 = \mathbf{6.240}$ €.
- **Aumento de riqueza si prefiere consumo actual:** es el propio VAN, **2.000 €** (medido en $t=0$).
- **Aumento de riqueza si prefiere consumo futuro:** el VAN capitalizado, $2.000 \times 1{,}04 = \mathbf{2.080}$ € (medido en $t=1$).
- **Comprobación:** sin invertir podría consumir $12.000 \times 1{,}04 = 12.480$ en $t=1$. Invirtiendo, consume $6.240 + 8.000 \times 1{,}04 = 14.560$, que son $2.080$ más.

## Valoración de obligaciones

Una **obligación** es un título de deuda de renta fija, sometido a **riesgo de tipo de interés** y **riesgo de insolvencia** del emisor. Sus elementos:

- **Cupón:** el pago periódico de intereses.
- **Valor nominal (VN):** el principal, que se devuelve al vencimiento.
- **Tipo del cupón:** el cupón expresado como fracción del nominal.

$$VA = \frac{C}{(1+r)} + \frac{C}{(1+r)^2} + \cdots + \frac{C + VN}{(1+r)^n} = C \cdot a_{\overline{n}|r} + \frac{VN}{(1+r)^n}, \qquad a_{\overline{n}|r} = \frac{1-(1+r)^{-n}}{r}$$

**Precio frente a nominal:**

| Relación | Precio del bono |
| :--- | :--- |
| $r$ = tipo del cupón | $P = VN$ (cotiza **a la par**) |
| $r$ < tipo del cupón | $P > VN$ (**sobre la par**) |
| $r$ > tipo del cupón | $P < VN$ (**bajo la par**) |

**Tres rentabilidades que no hay que confundir:**

- **Rentabilidad actual** $= C/P_0$. Solo mira el cupón; **ignora la ganancia o pérdida de capital** al vencimiento.
- **Rentabilidad al vencimiento (TIR):** el $r$ que iguala el precio con el valor actual de cupones y nominal. Incluye cupones y variación del precio. **Solo coincide con la rentabilidad actual si el bono cotiza a la par.**
- **Tasa de rentabilidad del periodo:** $\dfrac{C + P_1 - P_0}{P_0}$. Lo que realmente gana quien compra en $t=0$ y vende en $t=1$.

Ejemplo: bono a 3 años, cupón del 10 %, comprado a 1.136,16 €.

- Rentabilidad actual: $100/1.136{,}16 = 8{,}8\,\text{\%}$.
- Rentabilidad al vencimiento: $1.136{,}16 = 100\,a_{\overline{3}|r} + 1.000/(1+r)^3$, que da $r = 5\,\text{\%}$.
- La TIR es menor que la rentabilidad actual porque el bono pierde valor hasta el nominal.

**Relación entre la tasa del periodo y la rentabilidad al vencimiento:**

- Si la rentabilidad al vencimiento **no cambia** durante el periodo, la tasa del periodo **coincide** con ella.
- Si la rentabilidad al vencimiento **sube**, el precio cae y la tasa del periodo es **menor**.
- Si la rentabilidad al vencimiento **baja**, la tasa del periodo es **mayor**.

**Ejemplo resuelto de las diapositivas (tipo examen).** Un inversor compra el 20-12-2014 bonos del Estado a 5 años por 40.000 € de nominal (40 bonos de 1.000 €), con cupón del 1,10 % (11 €/bono). Los bonos se emitieron el 20-12-2013, así que **les quedan 4 años**.

a) **Compra** al 0,6 %:
$$P_{\text{compra}} = 11\,a_{\overline{4}|0{,}006} + \frac{1.000}{1{,}006^4} = 1.019{,}70 \text{ €/bono}$$
Total pagado: $1.019{,}70 \times 40 = 40.788$ €.

b) **Venta** un año después al 0,65 %, con 3 años restantes:
$$P_{\text{venta}} = 11\,a_{\overline{3}|0{,}0065} + \frac{1.000}{1{,}0065^3} = 1.013{,}33 \text{ €/bono}$$
Total cobrado: $40.533{,}20$ €.

c) **Rentabilidad de la compraventa:**
$$1.019{,}70 = \frac{11 + 1.013{,}33}{1+r} \Rightarrow r \approx 0{,}45\,\text{\%}$$
Es menor que el 0,6 % porque los tipos subieron.


\begin{figure}[H]
\centering
\input{src/tex/bonos_plazo.tex}
\caption{Precio de un bono con cupón del 5,5\,\% y nominal 1.000 €: el de 30 años es mucho más sensible al tipo de interés.}
\end{figure}

**Riesgo de tipo de interés.** Es mayor cuanto:

- **mayor es el plazo** (un bono a 30 años es mucho más sensible que uno a 3 años);
- **menor es el cupón**. A igual plazo, un **cupón cero** es más sensible que un bono americano, porque su vida media es más larga.

**Curva de rentabilidad:** relación entre el vencimiento y la rentabilidad al vencimiento. Puede ser **creciente** (tipos a corto < tipos a largo, la normal), **decreciente** o **plana**.

**Riesgo de impago y prima de fallido:** la diferencia entre la rentabilidad de un bono con riesgo de impago y la de uno igual sin ese riesgo. Calificaciones:

- **Grado de inversión:** de Aaa/AAA hasta Baa/BBB.
- **Grado especulativo** (*bonos basura*): de Ba/BB hacia abajo.

## Valoración de acciones

**Tres acepciones de «valor»:**

- **Contable:** el valor neto según el balance. No refleja el verdadero valor de la empresa.
- **De liquidación:** lo que se obtendría vendiendo todos los activos y pagando todas las deudas.
- **De mercado:** lo que los inversores están dispuestos a pagar. Depende de **lo que generan los activos actuales** y de **la rentabilidad de las inversiones futuras**.

### A) Modelo de descuento de dividendos

Para un periodo:

$$r = \frac{DIV_1 + P_1 - P_0}{P_0} = \underbrace{\frac{DIV_1}{P_0}}_{\text{rentab. por dividendo}} + \underbrace{\frac{P_1 - P_0}{P_0}}_{\text{ganancia de capital}}
\qquad\Longleftrightarrow\qquad P_0 = \frac{DIV_1 + P_1}{1+r}$$

Sustituyendo $P_1$, $P_2$, … sucesivamente:

$$P_0 = \sum_{t=1}^{H} \frac{DIV_t}{(1+r)^t} + \frac{P_H}{(1+r)^H} \;\xrightarrow{H\to\infty}\; P_0 = \sum_{t=1}^{\infty}\frac{DIV_t}{(1+r)^t}$$

Cuanto más lejos está el horizonte, menos pesa el precio final: el valor de la acción es el **valor actual de todos los dividendos futuros**.

**Casos particulares:**

| Modelo | Precio | Rentabilidad exigida |
| :--- | :--- | :--- |
| Sin crecimiento | $P_0 = \dfrac{DIV_1}{r}$ | $r = \dfrac{DIV_1}{P_0}$ |
| Crecimiento constante (**Gordon**) | $P_0 = \dfrac{DIV_1}{r-g}$, con $r>g$ | $r = \dfrac{DIV_1}{P_0} + g$ |

**El crecimiento no cae del cielo:**

$$g = b \times ROE \qquad ROE = \frac{BPA}{\text{valor contable por acción}}$$

$$b = \text{tasa de retención o reinversión} = 1 - \text{tasa de reparto}$$

El crecimiento depende de **las dos cosas a la vez**: cuánto se reinvierte ($b$) y cuánto rinde lo reinvertido (ROE).

> **Trampa (relación, problema 7):** «el crecimiento depende exclusivamente de la tasa de reinversión» y «depende exclusivamente de la rentabilidad de las reinversiones» son **falsas**: depende de ambas.

**Ejemplo Duke Power.** $P_0 = 36$ y $DIV_1 = 1{,}87$.

- Con $g = 4{,}1\,\text{\%}$ de los analistas: $r = 5{,}2\,\text{\%} + 4{,}1\,\text{\%} = 9{,}3\,\text{\%}$.
- Con $ROE = 12{,}5\,\text{\%}$ y reinversión del 30 %: $g = 0{,}3 \times 0{,}125 = 3{,}75\,\text{\%}$, y entonces $r = 8{,}95\,\text{\%}$.

**Advertencias sobre Gordon (Tecnocrecimiento).** $DIV_1 = 0{,}50$, $P_0 = 50$, reinversión del 80 %, $ROE = 25\,\text{\%}$, luego $g = 20\,\text{\%}$.

- Gordon daría $r = 0{,}50/50 + 0{,}20 = 21\,\text{\%}$: **es un error**. Ninguna empresa crece al 20 % indefinidamente.
- Si a partir del año 3 el ROE baja al 16 % y la reinversión al 50 % ($g = 8\,\text{\%}$), hay que plantear las **fases**: dividendos 0,50; 0,60; 1,15 y 1,24, y después Gordon al 8 %. Sale $r \approx 9{,}9\,\text{\%}$.

**Lección:** Gordon **no sirve** para empresas con crecimiento muy alto ahora. Se usan **modelos por fases**:

$$P_0 = \sum_{t=1}^{T}\frac{DIV_t}{(1+r)^t} + \frac{P_T}{(1+r)^T}, \qquad P_T = \frac{DIV_{T+1}}{r - g_{\text{largo plazo}}}$$

### Acciones de renta y acciones de crecimiento

- **Acciones de renta:** se compran por los dividendos.
- **Acciones de crecimiento:** se compran esperando ganancias de capital.

Para que una acción sea **de crecimiento** se tienen que cumplir **las dos condiciones**:

1. La empresa **reinvierte** parte de sus beneficios.
2. Esas reinversiones son **convenientes**: $ROE > r$, o lo que es lo mismo, **VAN > 0**, de modo que hacen subir $P_0$.

Ejemplo de las diapositivas: $BPA_1 = 10$ y $r = 10\,\text{\%}$, luego sin reinvertir $P_0 = 10/0{,}1 = 100$.

- Si reinvierte todo $BPA_1$ con $ROE = 10\,\text{\%}$ (gana 1 €/año a perpetuidad), entonces $DIV_1 = 0$ y $DIV_t = 11$ desde $t=2$, y $P_0 = (11/0{,}1)/1{,}1 = 100$. **No cambia nada**: el VAN de la reinversión es nulo.
- Con una inversión adicional de 10 €, el VAN en $t=1$ es $-10 + C/r$:

| Rentabilidad de la reinversión | $C$ | VAN en $t=1$ | Efecto en $P_0$ | $P_0$ | $BPA_1/P_0$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 5 % | 0,50 | −5,00 | −4,55 | 95,45 | 10,48 % |
| 10 % | 1,00 | 0 | 0 | 100,00 | 10,00 % |
| 15 % | 1,50 | 5,00 | +4,55 | 104,55 | 9,57 % |
| 20 % | 2,00 | 10,00 | +9,09 | 109,09 | 9,17 % |
| 25 % | 2,50 | 15,00 | +13,64 | 113,64 | 8,80 % |

### B) El valor actual de las oportunidades de crecimiento (VAOC)

$$P_0 = \frac{BPA_1}{r} + VAOC$$

El precio es **lo que valdría la acción sin crecimiento** (repartiendo todo el beneficio) **más el valor que aportan las reinversiones previstas**. El VAOC se calcula de dos formas:

1. **Por diferencia:** $VAOC = P_0 - BPA_1/r$.
2. **Directamente:** $VAOC = \sum_t \dfrac{VAN_t}{(1+r)^t}$, el valor actual de los VAN de cada reinversión.

**Relación entre BPA y precio** ($BPA/P_0 = 1/PER$):

$$\frac{BPA_1}{P_0} = r\left(1 - \frac{VAOC}{P_0}\right)$$

- Si $VAOC = 0$, entonces $r = BPA/P$: el ratio estima bien $r$. Solo en las **acciones de renta**.
- Si $VAOC > 0$, entonces $r > BPA/P$: el ratio **infravalora** $r$.
- Si $VAOC < 0$, entonces $r < BPA/P$: el ratio **sobrevalora** $r$.

| $ROE$ frente a $r$ | VAN de las reinversiones | VAOC | Efecto en $P_0$ |
| :---: | :---: | :---: | :--- |
| $ROE > r$ | $> 0$ | $> 0$ | Sube: **acción de crecimiento** |
| $ROE = r$ | $= 0$ | $= 0$ | Igual a $BPA_1/r$, aunque haya $g>0$ |
| $ROE < r$ | $< 0$ | $< 0$ | Baja: reinvertir destruye valor |

Con Gordon y $ROE = r$: $P_0 = \dfrac{BPA_1(1-b)}{r - b\,r} = \dfrac{BPA_1}{r}$, luego **VAOC = 0** aunque la empresa crezca.

> **Trampa (relación, problema 4):** con $BPA_1 = 20$, $DIV_1 = 10$, $g = 4\,\text{\%}$ y $r = 8\,\text{\%}$, se obtiene $P_0 = 10/0{,}04 = 250 = 20/0{,}08$. Por tanto **VAOC = 0**, porque $ROE = g/b = 0{,}04/0{,}5 = 8\,\text{\%} = r$. La respuesta correcta es la **d**, no «el mercado valora 250 € de oportunidades».

### El método de las reinversiones (recomendado por el profesor)

Las diapositivas insisten: **«se recomienda usar siempre el análisis de las reinversiones para estimar los dividendos esperados»**. El procedimiento:

1. Para cada reinversión en el año $t$: **capital invertido** $= b_t \times BPA_t$, y **flujo anual** $= ROE \times$ capital invertido.
2. Construir la tabla año a año. El **BPA** de cada año es el BPA inicial más los flujos de las reinversiones que estén vivas ese año. El **dividendo** es (tasa de reparto) $\times$ BPA.
3. $P_0$ es el valor actual de los dividendos, más el valor actual de la perpetuidad final ($DIV/r$).
4. **VAOC** $= \sum VAN_t/(1+r)^t$, con $VAN_t = -\text{capital} + \text{flujo}/r$ si el flujo es perpetuo, o $-\text{capital} + \text{flujo}\cdot a_{\overline{n}|r}$ si dura $n$ años.
5. **Comprobación:** $P_0 = BPA_1/r + VAOC$.

**Ejemplo 1 de las diapositivas.** $BPA_1 = 40$ y $r = 10\,\text{\%}$. En $t=2$ se reinvierte el 50 % con $ROE = 25\,\text{\%}$ a perpetuidad; en $t=5$ se reinvierte el 60 % con $ROE = 20\,\text{\%}$ a perpetuidad.

\begin{figure}[H]
\centering
\input{src/tex/reinversiones.tex}
\caption{Ejemplo 1: reinversiones en $t=2$ y $t=5$ con sus flujos perpetuos.}
\end{figure}


- **Reinversión 1:** capital $0{,}5 \times 40 = 20$, flujo $5$/año desde $t=3$, $VAN_2 = -20 + 5/0{,}1 = 30$.
- **Reinversión 2:** capital $0{,}6 \times 45 = 27$, flujo $5{,}40$/año desde $t=6$, $VAN_5 = -27 + 5{,}4/0{,}1 = 27$.

| Año | 1 | 2 | 3 | 4 | 5 | 6 y sig. |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| BPA | 40 | 40 | 45 | 45 | 45 | 50,40 |
| Tasa de reparto | 1 | 0,5 | 1 | 1 | 0,4 | 1 |
| DIV | 40 | 20 | 45 | 45 | 18 | 50,40 |

$$P_0 = \frac{40}{1{,}1} + \frac{20}{1{,}1^2} + \frac{45}{1{,}1^3} + \frac{45}{1{,}1^4} + \frac{18}{1{,}1^5} + \frac{50{,}40/0{,}1}{1{,}1^5} = 441{,}56 \text{ €}$$

$$VAOC = \frac{30}{1{,}1^2} + \frac{27}{1{,}1^5} = 41{,}56 \qquad\Rightarrow\qquad P_0 = \frac{40}{0{,}1} + 41{,}56 = 441{,}56 \;\checkmark$$

**Ejemplo 2: la reinversión 1 dura solo 3 años** ($t = 3, 4, 5$).

- $VAN_2 = -20 + 5\,a_{\overline{3}|0{,}1} = -7{,}57$. **¡VAN negativo aunque $ROE > r$!** Un proyecto de vida corta no recupera el capital.
- Desde $t=6$, el BPA es $40 + 5{,}40 = 45{,}40$: los 5 € de la primera reinversión ya no están.
- $P_0 = 410{,}51$ y $VAOC = -7{,}57/1{,}1^2 + 27/1{,}1^5 = 10{,}51$.
- La diapositiva escribe «−7,27», pero es una errata: con −7,57 sale exactamente el 10,51 que da.

> **Por qué no usar $g$ en estos casos:** aplicar $g_2$ sobre $BPA_4 = 45$ es incorrecto si los flujos de la primera reinversión desaparecen. Con reinversiones puntuales, **siempre la tabla**.
