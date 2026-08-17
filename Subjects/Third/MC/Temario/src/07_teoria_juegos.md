# Teoría de juegos

Tema 7 del programa. Decidir cuando el resultado depende también de lo que elija
otro, que además elige buscando su propio beneficio.

## Introducción

En el tema 5 los estados los producía la naturaleza, que no tiene intereses. Aquí el
otro lado **elige**, y elige contra ti. Eso cambia el análisis: no se puede suponer
un estado y optimizar, porque el otro reacciona a lo que hagas.

### Elementos

| Elemento | Qué es |
| --- | --- |
| Jugadores | quienes deciden, $1, \dots, n$ |
| Estrategias | lo que cada jugador puede hacer |
| Pagos | lo que obtiene cada jugador según lo que hagan todos |
| Información | qué sabe cada uno al decidir |

Se supone que todos son **racionales** —maximizan su propio pago— y que esa
racionalidad es **conocimiento común**: todos la suponen de todos, y saben que los
demás la suponen.

### Clasificación

| Criterio | Tipos |
| --- | --- |
| Cooperación | cooperativos, no cooperativos |
| Suma de pagos | suma cero, suma no nula |
| Momento de decidir | simultáneos, secuenciales |
| Información | completa, incompleta; perfecta, imperfecta |
| Repetición | de una etapa, repetidos |

En un juego de **suma cero** lo que gana uno lo pierde el otro: no hay ganancia
conjunta posible y el conflicto es total. En uno de **suma no nula** puede haber
resultados mejores para todos, y de ahí que tenga sentido cooperar.

## Juegos no cooperativos

Cada jugador decide por su cuenta y no hay acuerdos vinculantes.

### Representación

En forma **normal**, con una matriz de pagos. Con dos jugadores, cada casilla lleva
el par (pago del jugador 1, pago del jugador 2):

| | $B_1$ | $B_2$ |
| --- | --- | --- |
| $A_1$ | $(3, 2)$ | $(1, 4)$ |
| $A_2$ | $(2, 1)$ | $(4, 3)$ |

En forma **extensiva**, con un árbol, cuando las decisiones son secuenciales.

### Dominancia

Una estrategia está **dominada** si otra da al mismo jugador un pago mayor haga lo
que haga el rival. Un jugador racional nunca la usa, así que se elimina y el juego se
simplifica. Eliminando iterativamente se resuelven muchos juegos sin más
herramientas.

### Equilibrio de Nash

Un perfil de estrategias es un **equilibrio de Nash** si ningún jugador mejora
cambiando él solo de estrategia.

En el ejemplo, $(A_2, B_2)$ con pagos $(4,3)$: si el jugador 1 se mueve a $A_1$ pasa
de 4 a 1; si el 2 se mueve a $B_1$ pasa de 3 a 1. Es equilibrio.

Dos advertencias:

- **Puede no ser eficiente.** El dilema del prisionero es el caso conocido: el único
  equilibrio deja a los dos peor de lo que estarían cooperando, y aun así ninguno se
  mueve por su cuenta.
- **Puede haber varios, o ninguno en estrategias puras.** Lo segundo es lo que
  obliga a introducir las estrategias mixtas.

> **Teorema de Nash.** Todo juego finito tiene al menos un equilibrio, admitiendo
> estrategias mixtas.

### Estrategias mixtas

Una **estrategia mixta** es una distribución de probabilidad sobre las puras: se
elige al azar con probabilidades fijadas.

Tiene sentido porque **ser previsible es explotable**. En un juego de suma cero, si
el rival conoce tu estrategia la neutraliza; aleatorizar impide que lo haga.

El pago de una estrategia mixta es el valor esperado, y en el equilibrio cada jugador
elige las probabilidades que dejan **indiferente al rival** entre sus propias
estrategias. Esa condición de indiferencia es lo que permite calcularlas.

## El teorema minimax de Von Neumann

Para juegos de **suma cero** con dos jugadores. Con la matriz de pagos del jugador 1,
que son las pérdidas del 2:

| Jugador | Qué hace | Valor |
| --- | --- | --- |
| 1, que maximiza | asegura al menos $\max_i \min_j a_{ij}$ | valor **maximin** |
| 2, que minimiza | asegura como mucho $\min_j \max_i a_{ij}$ | valor **minimax** |

Siempre se cumple $\text{maximin} \le \text{minimax}$.

- Si son **iguales**, ese valor común es el **valor del juego** y el juego tiene
  **punto de silla**: hay solución en estrategias puras.
- Si son distintos, no hay punto de silla y hay que recurrir a estrategias mixtas.

> **Teorema minimax.** En todo juego finito de suma cero con dos jugadores,
> admitiendo estrategias mixtas, maximin y minimax coinciden. El juego tiene valor y
> cada jugador tiene una estrategia óptima.

Es el resultado fundacional de la teoría de juegos, de 1928, y es anterior al
equilibrio de Nash, del que resulta ser un caso particular.

**Ejemplo.** Matriz de pagos del jugador 1:

| | $B_1$ | $B_2$ | $B_3$ | mín. fila |
| --- | ---: | ---: | ---: | ---: |
| $A_1$ | 3 | 5 | 2 | **2** |
| $A_2$ | 1 | 4 | 0 | 0 |
| máx. col. | 3 | 5 | **2** | |

Maximin $= 2$ y minimax $= 2$: coinciden. Hay punto de silla en $(A_1, B_3)$ y el
valor del juego es 2.

### Relación con la programación lineal

Todo juego de suma cero con dos jugadores **se puede escribir como un problema
lineal**, y el del otro jugador es su dual del tema 3. Esa correspondencia no es
casual: la dualidad fuerte y el teorema minimax son el mismo resultado en dos
lenguajes, y de ahí que los valores óptimos coincidan.

## Juegos cooperativos

Los jugadores pueden formar **coaliciones** y comprometerse. El problema deja de ser
qué hace cada uno y pasa a ser **cómo se reparte lo que consiguen juntos**.

### Función característica

$v(S)$ es lo que la coalición $S$ puede garantizarse por sí sola, con $v(\emptyset) =
0$. Un juego es **superaditivo** si

$$v(S \cup T) \ge v(S) + v(T) \quad \text{para } S \cap T = \emptyset$$

es decir, unirse nunca perjudica. Bajo superaditividad la gran coalición de todos los
jugadores es la que más genera, y el problema es solo repartir.

### Axiomática del reparto

Un reparto es un vector $\mathbf{x} = (x_1, \dots, x_n)$ que debe cumplir:

| Propiedad | Expresión | Qué dice |
| --- | --- | --- |
| Eficiencia | $\sum_i x_i = v(N)$ | se reparte todo lo generado |
| Racionalidad individual | $x_i \ge v(\{i\})$ | a nadie le compensa irse solo |
| Racionalidad de coalición | $\sum_{i \in S} x_i \ge v(S)$ | a ningún grupo le compensa separarse |

### El núcleo

El **núcleo** es el conjunto de repartos que cumplen las tres condiciones a la vez.

Sus dos problemas:

- **Puede estar vacío.** Entonces ninguna reparto es estable: siempre hay una
  coalición con incentivo para romper la gran coalición.
- **Puede ser muy grande.** Entonces no dice cuál elegir, solo cuáles son admisibles.

### El valor de Shapley

Da **un único** reparto, y sale de una idea concreta: cada jugador recibe su
contribución marginal media a las coaliciones, promediando sobre todos los órdenes
posibles de incorporación.

$$\phi_i(v) = \sum_{S \subseteq N \setminus \{i\}}
\frac{\lvert S \rvert!\,(n - \lvert S \rvert - 1)!}{n!}
\left[\,v(S \cup \{i\}) - v(S)\,\right]$$

Es el único reparto que cumple estos cuatro axiomas:

| Axioma | Qué dice |
| --- | --- |
| Eficiencia | se reparte todo |
| Simetría | dos jugadores con la misma contribución reciben lo mismo |
| Jugador nulo | quien no aporta nada recibe cero |
| Aditividad | el valor de la suma de dos juegos es la suma de los valores |

**Ejemplo con tres jugadores.** Con $v(\{1\}) = v(\{2\}) = v(\{3\}) = 0$,
$v(\{1,2\}) = 90$, $v(\{1,3\}) = 60$, $v(\{2,3\}) = 30$ y $v(\{1,2,3\}) = 120$, se
recorren los $3! = 6$ órdenes de entrada y se promedia la contribución marginal de
cada uno:

| Orden | Jugador 1 | Jugador 2 | Jugador 3 |
| --- | ---: | ---: | ---: |
| 1, 2, 3 | 0 | 90 | 30 |
| 1, 3, 2 | 0 | 60 | 60 |
| 2, 1, 3 | 90 | 0 | 30 |
| 2, 3, 1 | 90 | 0 | 30 |
| 3, 1, 2 | 60 | 60 | 0 |
| 3, 2, 1 | 90 | 30 | 0 |
| **Suma** | 330 | 240 | 150 |
| **Shapley** | **55** | **40** | **25** |

Las tres cantidades suman 120, que es $v(N)$: se cumple la eficiencia.

El valor de Shapley **puede quedar fuera del núcleo** cuando este no está vacío. Son
dos criterios distintos: el núcleo pide estabilidad frente a la ruptura, y Shapley
pide justicia en el reparto de la contribución. No siempre coinciden.

Su uso práctico va más allá del reparto de beneficios: se aplica al reparto de costes
comunes, a medir el poder de voto en un órgano colegiado y, más recientemente, a
atribuir la contribución de cada variable en un modelo predictivo.

El tratamiento de la teoría de juegos sigue a \cite{perez2005} y \cite{aguado2007};
los juegos cooperativos y el valor de Shapley, también a \cite{riosinsua2004}.
