# CAE: elección y renovación de equipos

Como problema ha caído en el parcial de 2018-19 (1,5 puntos) y como renovación en febrero de 2012 (4 puntos, eliminatorio). En el test aparece casi siempre una pregunta de máquinas con vidas distintas.

## Cómo reconocerlo

«Dos máquinas (modelos, bombillas, ordenadores) de **distinta vida útil**», «solo costes», «¿qué producto resulta más económico?», «renovar anticipadamente un equipo», «se sustituirá indefinidamente», «costes en términos reales», «inflación», «avance tecnológico».

## Por qué no sirve el VAN

Si dos equipos duran distinto y se van a **reponer indefinidamente**, comparar el VA de sus costes compara 9 años de bombilla LED con 1 año de convencional. La solución es convertir cada alternativa en una **renta anual constante equivalente**:

$$CAE = \frac{VA(\text{costes})}{a_{\overline{n}|r}} \qquad \text{se elige el menor CAE}$$

Si hay ingresos, se calcula igual con el VAN (anualidad equivalente del VAN) y se elige **la mayor**.

## Plan de ataque

1. **Decide la tasa.** Si los costes son constantes **en términos reales** (lo normal: «consume 2 € al año»), se descuenta a la **tasa real**: $1 + r_{\text{real}} = \dfrac{1 + r_{\text{nominal}}}{1 + \pi}$.
2. **VA de los costes** de cada alternativa durante **su propia vida**: $VA = C_0 + \text{coste anual}\cdot a_{\overline{n}|r} - VR/(1+r)^n$.
3. **CAE** de cada alternativa: $VA/a_{\overline{n}|r}$ con su $n$.
4. **Elige el menor CAE** y escribe la conclusión.
5. **Si hay avance tecnológico** (los equipos nuevos cuestan un $c$ % menos cada año), la renta equivalente no es constante sino decreciente: busca $R$ tal que $VA = \sum_{k=1}^{n} R\,(1-c)^{k-1}/(1+r)^k$ y compara las $R$.

## Caso 3. Parcial 1 de 2018-19, problema 2 (1,5 puntos)

> Las bombillas LED cuestan 3,60 €, tienen una vida de 9 años y consumen aproximadamente 2 € de electricidad al año. Las bombillas convencionales son más baratas, ya que solo cuestan 0,60 €, pero duran solo un año aproximadamente y consumen 7 €/año de electricidad. Si la tasa nominal de descuento es del 6,08 % y la tasa de inflación del 2 %, ¿qué producto resulta más económico teniendo en cuenta todas las variables? Cuantifique su respuesta.

**Paso 1. Tasa real.** Los consumos (2 € y 7 €) están en euros de hoy: son costes **reales**.

$$r_{\text{real}} = \frac{1{,}0608}{1{,}02} - 1 = \mathbf{4\,\text{\%}}$$

(Equivale a inflar los costes al 2 % y descontarlos al 6,08 %: da el mismo VA.)

**Paso 2. VA de los costes.**

- LED: $VA = 3{,}60 + 2\,a_{\overline{9}|0{,}04} = 3{,}60 + 2\times7{,}4353 = \mathbf{18{,}47}$ €.
- Convencional: $VA = 0{,}60 + \dfrac{7}{1{,}04} = 0{,}60 + 6{,}73 = \mathbf{7{,}33}$ €.

Comparar 18,47 con 7,33 sería un error: son horizontes de 9 años y de 1 año.

**Paso 3. CAE.**

$$CAE_{LED} = \frac{18{,}47}{a_{\overline{9}|0{,}04}} = \frac{18{,}47}{7{,}4353} = \mathbf{2{,}48} \text{ €/año} \qquad CAE_{conv} = \frac{7{,}33}{a_{\overline{1}|0{,}04}} = 7{,}33\times1{,}04 = \mathbf{7{,}62} \text{ €/año}$$

**Paso 4. Conclusión.** **Resulta más económica la bombilla LED**: cuesta 2,48 € al año frente a 7,62 € de la convencional, un ahorro de 5,14 € anuales. La resolución publicada escribe un VA de 18,741 para la LED, pero con su propio CAE de 2,48 el VA correcto es 18,47.

## Comprobaciones rápidas

- El CAE nunca puede ser menor que el coste anual de funcionamiento (la LED consume 2 y su CAE es 2,48: lógico).
- Con vida de 1 año, $CAE = VA\times(1+r)$.
- Si los costes vienen en términos nominales (crecen con la inflación), descuenta a la tasa nominal; el resultado debe ser el mismo.

## Variantes que ya han caído

**Diciembre de 2000 (test): ordenadores 500X y 700Y, con avance tecnológico.** 500X: 350.000, 3 años y mantenimiento de 25.000/año. 700Y: 450.000, 5 años y 10.000/año. Tasa real del 10 %.

- $VA_{500X} = 350.000 + 25.000\,a_{\overline{3}|0{,}1} = 412.171$ y $CAE = 412.171/2{,}4869 = \mathbf{165.740}$.
- $VA_{700Y} = 450.000 + 10.000\,a_{\overline{5}|0{,}1} = 487.908$ y $CAE = 487.908/3{,}7908 = \mathbf{128.709}$.
- **Se elige el 700Y** (menor CAE), aunque su VA sea mayor.
- Con un **avance tecnológico del 30 %** anual, las rentas equivalentes decrecen: $R_{500X} = 412.171/1{,}8557 = 222.105$ y $R_{700Y} = 487.908/2{,}2391 = 217.903$. **Sigue siendo mejor el 700Y**, aunque por menos: el equipo que dura más es el que más sufre la obsolescencia.

**Febrero de 2000 (test): máquinas con ingresos.** A: $-100;\ 105;\ 105$ (VAN al 6 % de 92,51). B: $-150;\ 100;\ 100;\ 100$ (VAN de 117,30).

- Anualidad equivalente: $A = 92{,}51/a_{\overline{2}|0{,}06} = 50{,}46$ y $B = 117{,}30/a_{\overline{3}|0{,}06} = 43{,}88$.
- **Se elige A**, aunque B tenga más VAN: con reposición indefinida manda la anualidad equivalente.

**Febrero de 2012, problema 1 (4 puntos, filtro del 70 %): renovar un equipo con el VAN incremental.**

> El equipo actual se compró hace 4 años por 90.000 € con una vida de 9 años (amortización lineal) y hoy se vende por 50.000 €. El nuevo cuesta 100.000 € más 20.000 € de instalación, dura 5 años y no tiene valor residual. Aumenta las ventas en 80.000 €/año, ahorra 30.000 €/año de mano de obra y aumenta la materia prima en 10.000 €/año. Sin cambios en el FM. $r = 12\,\text{\%}$ y $t_c = 30\,\text{\%}$.

1. **Alternativas:** seguir con el equipo viejo o sustituirlo ahora por el nuevo.
2. **Horizonte:** 5 años, que es la vida que le queda al viejo ($9 - 4$) y la vida del nuevo.
3. **Situación del viejo:** amortiza 10.000/año; $VNC = 90.000 - 4\times10.000 = 50.000$, igual que su precio de venta: **no hay plusvalía ni impuesto**.
4. **Inversión incremental:** $\Delta C_0 = -120.000 + 50.000 = \mathbf{-70.000}$. La venta del viejo reduce la inversión.
5. **BAIT y BN incrementales:** $\Delta Q^{ai} = 80.000 + 30.000 - 10.000 = 100.000$; $\Delta CAF = 24.000 - 10.000 = 14.000$ (la del nuevo menos la que se deja de tener del viejo). $\Delta BAIT = 86.000$ y $\Delta BN = 60.200$ cada año.
6. **Flujos incrementales:** $\Delta Q^{di} = 100.000\times0{,}7 + 14.000\times0{,}3 = \mathbf{74.200}$ cada año.
7. **Valor residual incremental:** el nuevo no vale nada y el viejo tampoco habría valido nada al final de su vida: $\Delta VR = 0$.
8. $\Delta VAN = -70.000 + 74.200\,a_{\overline{5}|0{,}12} = \mathbf{197.474{,}39}$ €: **se renueva**.

La trampa es la **amortización incremental**: al vender el viejo se pierde su amortización, así que el ahorro fiscal es el de la diferencia.

## Errores típicos

- Elegir por el VA de los costes cuando las vidas son distintas.
- Mezclar costes reales con la tasa nominal.
- Calcular el CAE de una vida de 1 año como $VA/1$ en lugar de $VA\times(1+r)$.
- En la renovación, olvidar el efecto fiscal de vender el equipo viejo (aquí era cero, pero hay que justificarlo) o usar la amortización completa del nuevo en vez de la incremental.
