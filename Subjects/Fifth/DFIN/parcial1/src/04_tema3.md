# Tema 3. Criterios de valoración de inversiones

El tema es corto en diapositivas (13), pero en el examen da para preguntas tipo test («cuál de las siguientes afirmaciones sobre los criterios es correcta») y para cálculos de VAN, TIR y plazo de recuperación dentro de los problemas del tema 4.

## VAN

$$VAN = -C_0 + \sum_{t=1}^{n}\frac{C_t}{(1+r)^t} \qquad \text{Aceptar si } VAN > 0$$

El VAN es la **contribución neta que la inversión realiza al valor de la empresa**. El coste de oportunidad $r$ refleja el **riesgo** del proyecto. Tiene tres propiedades que lo hacen el criterio de referencia:

1. Tiene en cuenta el **valor temporal del dinero**.
2. Depende solo de los **flujos de caja y del coste de oportunidad**, no de preferencias ni de criterios contables.
3. Es **aditivo**: $VAN(A+B) = VAN(A) + VAN(B)$.

## Plazo de recuperación (*payback*)

Es el **tiempo que tardan los flujos de caja en recuperar la inversión inicial**. Con flujos constantes, $PR = C_0/C$. Con flujos irregulares, se acumulan año a año y se interpola el último. Se acepta si $PR \le$ un plazo de corte fijado por la empresa.

**Inconvenientes** (diapositiva):

- **Puede llevar a decisiones absurdas:** valora igual dos proyectos con el mismo plazo aunque uno tenga VAN negativo, porque **ignora los flujos posteriores al plazo**.
- **Da el mismo peso a todos los flujos anteriores al plazo**, aunque cuanto más lejanos menos valen: **ignora el valor temporal del dinero**.
- **El plazo de corte es arbitrario.**

**Principal atractivo:** su **sencillez**.

**Plazo de recuperación descontado:** se acumulan los flujos **descontados**, $\sum_{t=1}^{PRD} C_t/(1+r)^t = C_0$. Corrige el valor temporal del dinero, pero **sigue ignorando los flujos posteriores al plazo**.

## TIR

La TIR es la **tasa de descuento que hace el VAN igual a cero**:

$$-C_0 + \sum_{t=1}^{n}\frac{C_t}{(1+TIR)^t} = 0 \qquad \text{Aceptar si } TIR > r$$

- Si $TIR = r$, entonces $VAN = 0$.
- Si $TIR < r$, entonces $VAN < 0$ y se rechaza.
- Si $TIR > r$, entonces $VAN > 0$ y se acepta.

Para un proyecto **simple** (desembolso inicial y después todo cobros) evaluado **aisladamente**, VAN y TIR coinciden en la decisión. La TIR es el punto en que el **perfil del VAN** (VAN en función de $r$) corta el eje horizontal. En el ejemplo de la diapositiva, $-350.000$ y $+400.000$ dan $TIR = 14{,}29\,\text{\%}$.

## Defectos de la TIR (los cuatro de las diapositivas)

**1. Préstamo frente a inversión.** Para que la TIR funcione, el VAN tiene que **aumentar al disminuir la tasa de descuento**.

| | Proyecto A | Proyecto B |
| :--- | :---: | :---: |
| Flujo en $t=0$ | $+100$ | $-100$ |
| Flujo en $t=1$ | $-150$ | $+150$ |
| TIR | 50 % | 50 % |
| VAN al 10 % | **−36,36** | **+36,36** |

A es una **financiación**: quien se endeuda quiere hacerlo a la tasa **más baja** posible, así que el criterio de la TIR **se invierte** (aceptar si $TIR < r$). En una financiación, el perfil del VAN es creciente.

**2. Múltiples cambios de signo.** Con los flujos $-22, 15, 15, 15, 15, -40$ hay dos cambios de signo y **dos TIR**: aproximadamente **5,6 % y 27,8 %**, calculadas resolviendo el polinomio. El VAN solo es positivo entre ambas. La TIR **no tiene sentido económico**. Por la regla de Descartes, puede haber tantas TIR como cambios de signo, o ninguna.

**3. Proyectos mutuamente excluyentes con el mismo desembolso pero distinta distribución temporal.**

| | $C_0$ | $C_1$ | $C_2$ | $C_3$ | TIR | VAN al 7 % |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| A | −350 | 400 | 0 | 0 | 14,29 % | 23,83 |
| B | −350 | 16 | 16 | 466 | 12,96 % | **59,32** |

La TIR prefiere A, pero el VAN prefiere B. Los perfiles del VAN se cruzan en la **tasa de Fisher**, que es la **TIR del proyecto incremental** $B - A = (0, -384, 16, 466)$: aproximadamente **12,26 %**.

- Si $r < 12{,}26\,\text{\%}$, B tiene más VAN.
- Si $r > 12{,}26\,\text{\%}$, A tiene más VAN.

**4. Proyectos mutuamente excluyentes con desembolsos distintos (escala).** La TIR es un porcentaje y no mide euros. Ejemplo: $-10 \to +25$ (TIR 150 %) frente a $-100.000 \to +140.000$ (TIR 40 %). Al 10 %, el VAN del primero es 12,73 € y el del segundo 27.272,73 €.

**Cómo salvar la TIR con excluyentes:** se calcula la **TIR incremental** del proyecto grande menos el pequeño. Si $TIR_\Delta > r$, compensa el incremento y se elige el grande. Equivale a comprobar si $VAN(B-A) > 0$; **es más rápido calcular los dos VAN**.

**Otro defecto conceptual:** la TIR supone que los flujos intermedios se **reinvierten a la propia TIR**; el VAN supone que se reinvierten a $r$, que es lo coherente con el mercado. Una forma de corregirlo es la **TIR modificada (TIRM)**: se capitalizan los flujos positivos al año $n$ con la tasa de reinversión $r$ y se resuelve:

$$C_0 = \frac{\sum_t C_t (1+r)^{n-t}}{(1+TIRM)^n}$$

La TIRM no aparece en las diapositivas; está aquí por si cae como pregunta de cultura general.

## Proyectos mutuamente excluyentes

Las diapositivas recogen tres decisiones de este tipo:

- **Momento óptimo de inversión:** se elige la fecha de inversión que ofrezca **el mayor VAN hoy**. Es decir, el VAN de cada fecha **descontado hasta $t=0$**, no el VAN en la fecha de inversión.
- **Equipos de distinta duración:** el VAN **no es válido**. Se elige el de **menor anualidad equivalente** (CAE si solo hay costes; ver tema 4).
- **Momento de reemplazo de equipos en funcionamiento:** se compara el coste de mantener el equipo viejo un año más con la anualidad equivalente del equipo nuevo. Se sustituye cuando el coste del viejo supera el CAE del nuevo.

**Índice de rentabilidad** (racionamiento de capital, complementario): $IR = VA/C_0 = 1 + VAN/C_0$. Si el presupuesto es limitado y los proyectos son divisibles, se ordenan de mayor a menor IR.

## Trampas de test del tema 3

> «El criterio TIR es adecuado para elegir entre dos proyectos con distinto desembolso inicial»: **falso** (problema de escala).

> «El criterio VAN es adecuado para elegir entre dos proyectos que tienen el mismo horizonte temporal»: **verdadero**. Es la respuesta del problema 12 de la relación. Con horizontes **distintos** y reposición indefinida, hay que usar la anualidad equivalente.

> «En cualquier circunstancia VAN y TIR llevan a la misma decisión»: **falso**. Solo coinciden en proyectos simples y aislados.

> «El plazo de recuperación descontado tiene en cuenta todos los flujos del proyecto»: **falso**. Ignora los posteriores al plazo.

> Si en un proyecto de financiación (cobro inicial) la TIR es mayor que $r$, **se rechaza**.
