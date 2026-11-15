# Bonos: precio, TIR y rentabilidad realizada

En los parciales de GADE no ha caído como problema, pero sí en la prueba 1 de FICO «Dirección Financiera I» de 2018 (5 puntos, grupos A y B) y en muchas preguntas de test. Es un problema corto y mecánico: puntos fáciles si cae.

## Cómo reconocerlo

«Bonos», «obligaciones», «cupón anual del X %», «nominal», «a $n$ años», «tipo de interés de mercado», «rentabilidad exigida», «vende transcurrido un año», «rentabilidad obtenida por el inversor».

## Las ideas clave

- **Precio** = VA de los cupones y del nominal al tipo de mercado:
$$P_0 = C\cdot a_{\overline{n}|r} + \frac{N}{(1+r)^n}$$
- **TIR (rentabilidad al vencimiento):** el tipo que iguala el precio pagado con los flujos. Si se compra al precio de mercado y se mantiene hasta el vencimiento, **la rentabilidad es el tipo de mercado de la compra**.
- **Relación inversa precio-tipo:** si el tipo baja, el precio sube (y al revés).
- Cupón $<$ tipo de mercado: el bono cotiza **bajo la par**. Cupón $>$ tipo: **sobre la par**.
- **Rentabilidad realizada** si se vende antes: la TIR de lo que de verdad cobra el inversor (cupones cobrados más el precio de venta).

## Plan de ataque

1. Si el enunciado no da el nominal, **supón 1.000 €** y dilo.
2. Cupón en euros: $C = \text{tipo del cupón}\times N$.
3. Precio de compra al tipo de mercado de hoy.
4. Para cada venta anticipada: **precio en la fecha de venta** con los años que **quedan** y el tipo **de ese momento**.
5. Rentabilidad: plantea la ecuación «precio pagado = VA de lo cobrado» y resuélvela. Con un periodo, es directa: $r = (C + P_1)/P_0 - 1$.
6. Si el inversor vende una parte y mantiene otra, suma los flujos de todos los bonos año a año y calcula **una sola TIR**.

## Caso 4. Prueba 1 de FICO DF I, 29 de octubre de 2018, grupo B (5 puntos)

> Hoy el Estado ha emitido bonos a 3 años con un cupón anual del 0,05 % y a un tipo de interés del 0,13 %.
> a) Si un inversor ha adquirido 10 bonos, determine el importe total invertido.
> b) La ecuación que verifica la rentabilidad obtenida si mantiene los 10 bonos hasta su vencimiento. ¿A cuánto asciende?
> c) Si decide vender 7 bonos transcurrido un año y en ese momento la rentabilidad exigida por el mercado ha bajado hasta el 0,10 %, ¿qué rentabilidad le han generado esos bonos?
> d) La rentabilidad obtenida si vende 7 bonos transcurrido un año y mantiene 3 hasta su vencimiento.

**Datos.** El enunciado no da el nominal: supongo $N = 1.000$ €, así que el cupón es $C = 0{,}0005\times1.000 = 0{,}50$ €. Como el cupón (0,05 %) es menor que el tipo (0,13 %), el bono cotizará **bajo la par**.

**a) Importe invertido.**

$$P_0 = \frac{0{,}50}{1{,}0013} + \frac{0{,}50}{1{,}0013^2} + \frac{1.000{,}50}{1{,}0013^3} = \mathbf{997{,}61} \text{ €} \qquad 10\times997{,}61 = \mathbf{9.976{,}06} \text{ €}$$

**b) Mantiene hasta el vencimiento.** La ecuación es:

$$9.976{,}06 = \frac{5}{1+TIR} + \frac{5}{(1+TIR)^2} + \frac{10.005}{(1+TIR)^3}$$

Como el precio se calculó al 0,13 %, la solución es $TIR = \mathbf{0{,}13\,\text{\%}}$ sin necesidad de tantear: comprar a precio de mercado y mantener hasta el vencimiento da el tipo de mercado.

**c) Vende 7 bonos al cabo de un año.** Quedan 2 años y el tipo ha bajado al 0,10 %:

$$P_1 = \frac{0{,}50}{1{,}001} + \frac{1.000{,}50}{1{,}001^2} = \mathbf{999{,}00} \text{ €}$$

Cada bono costó 997,61 y al año ha dado el cupón (0,50) más el precio de venta (999,00):

$$r = \frac{0{,}50 + 999{,}00}{997{,}61} - 1 = \mathbf{0{,}19\,\text{\%}}$$

Gana **más** que el 0,13 % porque **el tipo bajó y el precio subió**: tiene una ganancia de capital.

**d) Vende 7 y mantiene 3.** Flujos totales del inversor:

| Año | 0 | 1 | 2 | 3 |
| :--- | ---: | ---: | ---: | ---: |
| Compra de 10 bonos | −9.976,06 | | | |
| Cupones | | 10 × 0,50 = 5 | 3 × 0,50 = 1,50 | 3 × 0,50 = 1,50 |
| Venta de 7 bonos | | 7 × 999,00 = 6.993,01 | | |
| Nominal de 3 bonos | | | | 3.000 |
| **Total** | **−9.976,06** | **6.998,01** | **1,50** | **3.001,50** |

$$9.976{,}06 = \frac{6.998{,}01}{1+TIR} + \frac{1{,}50}{(1+TIR)^2} + \frac{3.001{,}50}{(1+TIR)^3} \;\Rightarrow\; TIR \approx \mathbf{0{,}156\,\text{\%}}$$

Queda entre el 0,13 % (lo que rinden los 3 bonos que mantiene) y el 0,19 % (lo que rinden los 7 que vende), más cerca de este porque pesa más.

**Cómo resolver la TIR sin calculadora financiera.** Prueba dos tasas, una con VAN positivo y otra con VAN negativo, e interpola:
$$TIR \approx r_1 + (r_2 - r_1)\frac{VAN_1}{VAN_1 - VAN_2}$$

## Comprobaciones rápidas

- Cupón $<$ tipo $\Rightarrow$ precio $<$ nominal. Aquí $997{,}61 < 1.000$ ✓.
- Si el tipo baja al vender, la rentabilidad realizada supera la TIR de compra; si sube, queda por debajo.
- La rentabilidad combinada siempre queda entre las de las partes.

## Variantes que ya han caído

**Grupo A de la misma prueba: vende al cabo de dos años y el tipo sube al 0,20 %.**

- Precio en $t=2$, con un año por delante: $P_2 = 1.000{,}50/1{,}002 = 998{,}50$ €.
- Rentabilidad de los 7 bonos vendidos: TIR de $(-997{,}61;\ 0{,}50;\ 0{,}50 + 998{,}50)$, que da **0,095 %**. **Menos** que el 0,13 % porque el tipo subió y el precio bajó.
- Vende 7 y mantiene 3: TIR de $(-9.976{,}06;\ 5;\ 5 + 6.989{,}52;\ 3.001{,}50)$, que da **0,109 %**.

**Bonos cupón cero y tipos *forward* (preguntas de test).** Con tipos al contado $r_1 = 3\,\text{\%}$ y $r_2 = 4\,\text{\%}$ (ejemplo ilustrativo):

- Un cupón cero a 2 años de nominal 1.000 vale $1.000/1{,}04^2 = 924{,}56$ €.
- Un bono del 5 % a 2 años se valora descontando cada flujo con **su** tipo: $50/1{,}03 + 1.050/1{,}04^2 = 1.019{,}33$ €. Su TIR (3,98 %) es una media de los dos tipos al contado.
- Tipo *forward* del año 2: $(1 + r_2)^2 = (1 + r_1)(1 + f_{1,2})$, luego $f_{1,2} = 1{,}04^2/1{,}03 - 1 = 5{,}01\,\text{\%}$.

## Errores típicos

- Usar el tipo del cupón para descontar. El cupón solo fija el pago; se descuenta al tipo de **mercado**.
- Calcular el precio de venta con los años totales en vez de con los que **quedan**.
- Olvidar el cupón del año de la venta.
- Calcular la rentabilidad combinada como media simple de las dos rentabilidades: hay que sacar la TIR de los flujos totales.
