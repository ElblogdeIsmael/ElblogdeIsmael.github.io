# Relación de ejercicios

Los diez ejercicios de programación lineal de la asignatura, sobre el tema 3:
formas estándar y canónica, símplex, método de la M, dos fases y dualidad.

Todas las soluciones están comprobadas: se ha verificado que el punto propuesto
cumple cada restricción, y que el problema es acotado buscando una dirección de
mejora dentro de la región factible. **Un problema puede tener vértices y ser no
acotado**, y eso es lo que ocurre en el ejercicio 4 a).

## Formas estándar y canónica

\begin{ejercicio}
Expresa los problemas siguientes en forma estándar y canónica.

a) $\max\ x + y$ s.a. $-x + y = 2$, $x + 2y \le 6$, $2x + y \ge 6$, $x \ge 0$,
$y \le 0$.

b) $\max\ 2x + 3y + z$ s.a. $4x + 3y + z \le 20$, $x + y \le 20$, $x \ge 0$,
$y \le 0$.

c) $\min\ x + y$ s.a. $-x + y \le 2$.
\end{ejercicio}

\begin{solucion}
Se aplican las conversiones del tema 2. Lo que hay que arreglar en los tres es el
signo de $y$, con el cambio $y' = -y \ge 0$.

**a)** Con $y' = -y$, el problema queda $\max\ x - y'$ sujeto a $-x - y' = 2$,
$x - 2y' \le 6$ y $2x - y' \ge 6$.

En **forma canónica** de maximización todas las restricciones van con $\le$. La
igualdad se parte en dos desigualdades y la de $\ge$ se gira:

$$\max\ x - y' \quad \text{s.a.}\quad
\begin{cases}
-x - y' \le 2 \\
\ \ x + y' \le -2 \\
\ \ x - 2y' \le 6 \\
-2x + y' \le -6 \\
x,\, y' \ge 0
\end{cases}$$

En **forma estándar** todas van con $=$, añadiendo una holgura a cada $\le$ y
restando un exceso a cada $\ge$:

$$\max\ x - y' \quad \text{s.a.}\quad
\begin{cases}
-x - y' = 2 \\
x - 2y' + s_1 = 6 \\
2x - y' - s_2 = 6 \\
x,\, y',\, s_1,\, s_2 \ge 0
\end{cases}$$

**b)** Con $y' = -y$ queda $\max\ 2x - 3y' + z$ sujeto a $4x - 3y' + z \le 20$ y
$x - y' \le 20$. Las dos restricciones ya son $\le$, así que **eso ya es la forma
canónica**. La estándar añade dos holguras:

$$4x - 3y' + z + s_1 = 20, \qquad x - y' + s_2 = 20$$

Y queda $z$ **sin restricción de signo**, porque el enunciado no la impone: hay que
escribir $z = z^+ - z^-$ con los dos no negativos.

**c)** $\min\ x + y$ con $-x + y \le 2$, y **ninguna variable tiene restricción de
signo**. Se escriben $x = x^+ - x^-$ e $y = y^+ - y^-$:

$$\min\ (x^+ - x^-) + (y^+ - y^-)
\quad \text{s.a.}\quad -x^+ + x^- + y^+ - y^- + s_1 = 2$$

con las cinco variables no negativas. Y el problema es **no acotado**: tomando
$x \to -\infty$ con $y$ fijo, la restricción se sigue cumpliendo y el objetivo baja
sin límite.
\end{solucion}

## Símplex

\begin{ejercicio}
Resuelve mediante el método símplex:
$$\max\ -x + y \quad \text{s.a.}\quad -2x + y \le 4,\quad x + y \le 1,\quad y \ge 0$$
\end{ejercicio}

\begin{solucion}
$x$ no tiene restricción de signo, así que se escribe $x = x^+ - x^-$.

El óptimo es $x = -1$, $y = 2$, con $z = 3$.

Comprobación: $-2(-1) + 2 = 4$, que se cumple con igualdad; $-1 + 2 = 1$, también con
igualdad. Las dos restricciones están activas, que es lo que caracteriza a un
vértice con dos variables.

Y está acotado: cualquier dirección de mejora tendría que aumentar $y$ o disminuir
$x$, y la primera restricción impide lo segundo sin límite.
\end{solucion}

\begin{ejercicio}
Resuelve el problema siguiente indicando las soluciones óptimas y el valor de la
función objetivo en cada una:
$$\text{Opt.}\ x - 2y + 3z \quad \text{s.a.}\quad x + 2y + z \le 4,\quad
2x + y - z \le 2,\quad x, y, z \ge 0$$
\end{ejercicio}

\begin{solucion}
El enunciado dice «Opt.», así que se resuelven los dos sentidos.

| | Solución | $z$ |
| --- | --- | ---: |
| Máximo | $(0, 0, 4)$ | $12$ |
| Mínimo | $(0, 2, 0)$ | $-4$ |

Comprobación del máximo: $0 + 0 + 4 = 4$ y $0 + 0 - 4 = -4 \le 2$. La segunda
restricción **no está activa**, así que su variable de holgura es básica y su precio
sombra es cero.

Comprobación del mínimo: $0 + 4 + 0 = 4$ y $0 + 2 - 0 = 2$: las dos activas.
\end{solucion}

\begin{ejercicio}
Resuelve:

a) $\max\ 3x + 2y + z$ s.a. $2x - 3y + 2z \le 3$, $-x + y + z \le 5$,
$x, y, z \ge 0$.

b) $\max\ 3x + y + 4z$ s.a. $6x + 3y + 5z \le 25$, $3x + 4y + 5z \le 20$,
$x, y, z \ge 0$.
\end{ejercicio}

\begin{solucion}
**a) El problema es no acotado**, y conviene detenerse en él porque es el caso que
más se falla: tiene vértices, y evaluando la función objetivo en todos ellos sale un
máximo aparente de 10 en $(0,5,0)$.

Lo que falla es que ese máximo no lo es. Tomando la dirección $\mathbf{d} = (5,4,0)$
y avanzando desde el origen, $\mathbf{x} = t\,(5,4,0)$:

| $t$ | $2x - 3y + 2z$ | $-x + y + z$ | $z = 3x + 2y + z$ |
| ---: | ---: | ---: | ---: |
| 1 | $-2 \le 3$ | $-1 \le 5$ | 23 |
| 10 | $-20 \le 3$ | $-10 \le 5$ | 230 |
| 100 | $-200 \le 3$ | $-100 \le 5$ | 2300 |

Las dos restricciones se siguen cumpliendo y el objetivo crece sin límite. **En la
tabla del símplex se reconoce porque la columna de la variable que entra no tiene
ningún coeficiente positivo**, así que no hay criterio del mínimo cociente y ninguna
variable puede salir.

**b)** Aquí sí hay óptimo, porque todos los coeficientes de las restricciones son
positivos y la región está acotada.

$$x = \tfrac{5}{3}, \quad y = 0, \quad z = 3, \qquad w = 17$$

Comprobación: $6 \cdot \tfrac{5}{3} + 5 \cdot 3 = 10 + 15 = 25$ y
$3 \cdot \tfrac{5}{3} + 5 \cdot 3 = 5 + 15 = 20$. Las dos activas, y
$3 \cdot \tfrac{5}{3} + 4 \cdot 3 = 5 + 12 = 17$.
\end{solucion}

## Formulación de problemas

\begin{ejercicio}
Un fabricante produce sillas y mesas, y utiliza dos secciones: montaje y pintura.
Una silla requiere una hora de montaje y dos de pintura; una mesa, tres horas de
montaje y una de pintura. La sección de montaje funciona nueve horas diarias y la
de pintura ocho. El beneficio de una mesa es el doble que el de una silla.

¿Cuál debe ser la producción diaria que maximice el beneficio?
\end{ejercicio}

\begin{solucion}
Variables: $x$ sillas al día, $y$ mesas al día. Tomando como unidad el beneficio de
una silla:

$$\max\ z = x + 2y \quad \text{s.a.}\quad
x + 3y \le 9,\quad 2x + y \le 8,\quad x, y \ge 0$$

Es el ejemplo que el tema 2 resuelve gráficamente. Evaluando en los cuatro vértices:

| Vértice | $z$ |
| --- | ---: |
| $(0,0)$ | 0 |
| $(4,0)$ | 4 |
| $(3,2)$ | **7** |
| $(0,3)$ | 6 |

**Tres sillas y dos mesas al día**, con beneficio equivalente a 7 sillas.
Comprobación: montaje $3 + 6 = 9$ horas y pintura $6 + 2 = 8$ horas. **Las dos
secciones se agotan**, así que las dos tienen precio sombra positivo y ampliar
cualquiera de las dos mejoraría el resultado.
\end{solucion}

\begin{ejercicio}
Un agricultor tiene una parcela de 640 m$^2$ para naranjos, perales y manzanos. Cada
naranjo necesita al menos 16 m$^2$, cada peral 4 m$^2$ y cada manzano 8 m$^2$. Dispone de 900
horas de trabajo al año, y cada naranjo consume 30 horas, cada peral 5 y cada
manzano 10. Los beneficios unitarios son 50, 25 y 20 unidades monetarias.

¿Cómo debe repartir la superficie?
\end{ejercicio}

\begin{solucion}
Variables: $n$ naranjos, $p$ perales, $m$ manzanos.

$$\max\ 50n + 25p + 20m \quad \text{s.a.}\quad
\begin{cases}
16n + 4p + 8m \le 640 & \text{(superficie)}\\
30n + 5p + 10m \le 900 & \text{(horas)}\\
n, p, m \ge 0
\end{cases}$$

La solución es **160 perales y ningún naranjo ni manzano**, con beneficio 4000.

Comprobación: superficie $4 \cdot 160 = 640$ m$^2$, que se agota; horas
$5 \cdot 160 = 800 \le 900$, así que **sobran 100 horas**.

El resultado se entiende mirando el beneficio por metro cuadrado, que es el recurso
que se agota:

| Árbol | Beneficio | m$^2$ | Beneficio por m$^2$ |
| --- | ---: | ---: | ---: |
| Naranjo | 50 | 16 | 3,13 |
| Peral | 25 | 4 | **6,25** |
| Manzano | 20 | 8 | 2,50 |

El peral gana con holgura, y como la restricción de horas no llega a ser limitante,
la solución consiste en dedicar toda la parcela a perales. **Que el óptimo esté en un
solo producto es lo normal en programación lineal**, y es una de las razones por las
que un modelo así se completa después con restricciones de diversificación.
\end{solucion}

\begin{ejercicio}
Una empresa monta motocicletas de 500, 250, 125 y 50 c.c. en cuatro departamentos.
Las horas de mano de obra que necesita cada modelo:

| | Chasis | Pintura | Montaje | Calidad |
| --- | ---: | ---: | ---: | ---: |
| 500 c.c. | 8 | 6 | 8 | 4 |
| 250 c.c. | 6 | 3 | 8 | 2 |
| 125 c.c. | 4 | 2 | 6 | 2 |
| 50 c.c. | 2 | 1 | 4 | 2 |

Hay 25 trabajadores en chasis, 18 en pintura, 30 en montaje y 10 en calidad, con
jornadas de 8 horas. Los márgenes son 200 000, 140 000, 80 000 y 40 000 pesetas.

¿Cuál es la combinación óptima?
\end{ejercicio}

\begin{solucion}
Variables: $x_1, x_2, x_3, x_4$ motocicletas de cada cilindrada. Las capacidades son
el número de trabajadores por 8 horas:

| Departamento | Capacidad |
| --- | ---: |
| Chasis | $25 \times 8 = 200$ |
| Pintura | $18 \times 8 = 144$ |
| Montaje | $30 \times 8 = 240$ |
| Calidad | $10 \times 8 = 80$ |

$$\max\ 200000x_1 + 140000x_2 + 80000x_3 + 40000x_4$$

$$\text{s.a.}\quad
\begin{cases}
8x_1 + 6x_2 + 4x_3 + 2x_4 \le 200 \\
6x_1 + 3x_2 + 2x_3 + \ \ x_4 \le 144 \\
8x_1 + 8x_2 + 6x_3 + 4x_4 \le 240 \\
4x_1 + 2x_2 + 2x_3 + 2x_4 \le \ \ 80 \\
x_1, x_2, x_3, x_4 \ge 0
\end{cases}$$

La solución es **10 motocicletas de 500 c.c. y 20 de 250 c.c.**, con beneficio
4 800 000 pesetas.

Comprobación del uso de cada departamento:

| Departamento | Uso | Capacidad | Holgura |
| --- | ---: | ---: | ---: |
| Chasis | $80 + 120 = 200$ | 200 | **0** |
| Pintura | $60 + 60 = 120$ | 144 | 24 |
| Montaje | $80 + 160 = 240$ | 240 | **0** |
| Calidad | $40 + 40 = 80$ | 80 | **0** |

Y el beneficio: $200000 \cdot 10 + 140000 \cdot 20 = 2\,000\,000 + 2\,800\,000 =
4\,800\,000$.

Tres departamentos se agotan y solo sobra capacidad en pintura, que por tanto tiene
precio sombra cero: **contratar a un pintor más no aumentaría el beneficio**. Es la
holgura complementaria del tema 3 leída sobre un caso concreto.
\end{solucion}

## Método de la M grande

\begin{ejercicio}
Resuelve con el método de la M grande:

a) $\max\ 3x_1 + 6x_2$ s.a. $x_1 + 4x_2 \le 5$, $-x_1 + 3x_2 \le -2$,
$x_1 - 5x_2 \le -2$, $x_1, x_2 \ge 0$.

b) $\max\ 4{,}5x_1 + 3x_2 + 1{,}5x_3$ s.a. $x_1 + 2x_2 - x_3 \le 4$,
$2x_1 - x_2 + x_3 = 8$, $x_1 - x_2 \le 6$, $x_i \ge 0$.

c) $\min\ x_1 + x_2$ s.a. $x_1 + x_2 \ge 6$, $4x_1 + 2x_2 \ge 6$, $x_1, x_2 \ge 0$.
\end{ejercicio}

\begin{solucion}
**a) El problema es infactible.** Se ve sin necesidad de tabla, combinando la segunda
y la tercera restricción:

$$-x_1 + 3x_2 \le -2 \ \Longrightarrow\ x_1 \ge 3x_2 + 2$$
$$x_1 - 5x_2 \le -2 \ \Longrightarrow\ x_1 \le 5x_2 - 2$$

Las dos juntas exigen $3x_2 + 2 \le 5x_2 - 2$, es decir $x_2 \ge 2$, y entonces
$x_1 \ge 8$. Pero la primera restricción pide $x_1 + 4x_2 \le 5$, y con esos valores
el lado izquierdo vale al menos $8 + 8 = 16$.

**Con el método de la M, la infactibilidad se reconoce porque al terminar queda una
variable artificial con valor positivo en la base.**

**b)** Óptimo en $x_1 = 0$, $x_2 = 12$, $x_3 = 20$, con $z = 66$.

Comprobación: $0 + 24 - 20 = 4$, activa; $0 - 12 + 20 = 8$, la igualdad se cumple;
$0 - 12 = -12 \le 6$, con holgura. Y
$3 \cdot 12 + 1{,}5 \cdot 20 = 36 + 30 = 66$.

Aquí la artificial hace falta por la restricción de igualdad, y al terminar vale
cero, que es lo que confirma que la solución es del problema original.

**c)** Óptimo con $z = 6$, y **hay infinitas soluciones óptimas**: todo el segmento
de la recta $x_1 + x_2 = 6$ que cumple $4x_1 + 2x_2 \ge 6$ da el mismo valor.

La razón es que el vector de coeficientes del objetivo, $(1,1)$, es **paralelo** al de
la primera restricción. En la tabla óptima se reconoce porque una variable no básica
tiene coste reducido cero.
\end{solucion}

## Método de las dos fases

\begin{ejercicio}
Resuelve con el método de las dos fases:

a) $\min\ 20x_1 + 25x_2$ s.a. $2x_1 + 3x_2 \ge 18$, $x_1 + 3x_2 \ge 12$,
$4x_1 + 3x_2 \ge 24$, $x_1, x_2 \ge 0$.

b) $\max\ 4x_1 + 3x_2$ s.a. $3x_1 + 4x_2 \le 12$, $x_1 + x_2 \ge 4$,
$4x_1 + 2x_2 \le 8$, $x_1, x_2 \ge 0$.

c) $\max\ x_1 - 2x_2 + 3x_3$ s.a. $x_1 + x_2 + x_3 = 6$, $x_3 \le 2$,
$x_i \ge 0$.
\end{ejercicio}

\begin{solucion}
**a)** Las tres restricciones son $\ge$, así que las tres necesitan variable de
exceso y variable artificial. En forma estándar:

$$\min\ 20x_1 + 25x_2
\quad \text{s.a.}\quad
\begin{cases}
2x_1 + 3x_2 - s_1 + t_1 = 18 \\
\ \ x_1 + 3x_2 - s_2 + t_2 = 12 \\
4x_1 + 3x_2 - s_3 + t_3 = 24 \\
\text{todas} \ge 0
\end{cases}$$

**Fase 1:** se minimiza $w = t_1 + t_2 + t_3$ hasta llegar a $w = 0$, lo que indica
que existe solución factible.

**Fase 2:** partiendo de esa base se optimiza el objetivo original. El óptimo es

$$x_1 = 3, \quad x_2 = 4, \qquad z = 160$$

Comprobación: $6 + 12 = 18$, activa; $3 + 12 = 15 \ge 12$, con holgura;
$12 + 12 = 24$, activa. Y $20 \cdot 3 + 25 \cdot 4 = 60 + 100 = 160$.

La segunda restricción no está activa, así que su precio sombra es cero: relajarla no
abarata la solución.

**b) El problema es infactible**, y la fase 1 termina con $w > 0$.

Se comprueba directamente: de $4x_1 + 2x_2 \le 8$ sale $2x_1 + x_2 \le 4$. Como
$x_1 \ge 0$, eso obliga a $x_2 \le 4$. Con $x_1 + x_2 \ge 4$ y $x_2 \le 4$, el único
margen es $x_1 = 0$, $x_2 = 4$, que sí cumple la tercera. Pero la primera pide
$3 \cdot 0 + 4 \cdot 4 = 16 \le 12$, que es falso.

**Es el caso que justifica el método de las dos fases frente al de la M:** aquí la
respuesta es inequívoca —la fase 1 no alcanza cero— mientras que con la M grande hay
que interpretar si una artificial queda positiva por infactibilidad o por un problema
numérico del valor de $M$.

**c)** La primera restricción es de igualdad, así que lleva artificial; la segunda
es $\le$ y lleva holgura. En forma estándar:

$$x_1 + x_2 + x_3 + t_1 = 6, \qquad x_3 + s_1 = 2$$

Óptimo en $x_1 = 4$, $x_2 = 0$, $x_3 = 2$, con $z = 10$.

Comprobación: $4 + 0 + 2 = 6$ y $x_3 = 2 \le 2$, las dos activas. Y
$4 - 0 + 6 = 10$.

El resultado es el que sugiere el objetivo: $x_3$ es la variable de coeficiente mayor
y se lleva al máximo que permite su cota, $x_2$ penaliza y se queda en cero, y el
resto del presupuesto de la igualdad se completa con $x_1$.
\end{solucion}

## Dualidad

\begin{ejercicio}
Dados los siguientes problemas primales, encuentra sus duales asociados.

a) $\max\ 6x_1 + 4x_2$ s.a. $x_1 \le 700$, $3x_1 + x_2 \le 2400$,
$x_1 + 2x_2 \le 1600$, $x_1, x_2 \ge 0$.

b) $\max\ 4{,}5x_1 + 3x_2 + 1{,}5x_3$ s.a. $x_1 + 2x_2 - x_3 \le 4$,
$2x_1 - x_2 + x_3 = 8$, $x_1 - x_2 \le 6$, $x_i \ge 0$.

c) $\min\ 6x_1 + 4x_2$ s.a. $x_1 \le 700$, $3x_1 + x_2 \ge 2400$,
$x_1 + 2x_2 \le 1600$, $x_1, x_2 \ge 0$.
\end{ejercicio}

\begin{solucion}
Se aplica la tabla de correspondencias del tema 3: cada restricción del primal da
una variable del dual, y cada variable del primal da una restricción.

**a)** Primal de maximización con tres restricciones $\le$ y dos variables $\ge 0$.
El dual es de minimización, con tres variables $\ge 0$ y dos restricciones $\ge$:

$$\min\ w = 700y_1 + 2400y_2 + 1600y_3
\quad \text{s.a.}\quad
\begin{cases}
y_1 + 3y_2 + \ \ y_3 \ge 6 \\
\ \ \ \ \ \ \ \ \ y_2 + 2y_3 \ge 4 \\
y_1, y_2, y_3 \ge 0
\end{cases}$$

Los coeficientes de las restricciones duales son las **columnas** de la matriz
original: eso es lo que significa trasponer.

**b)** Igual, salvo que la segunda restricción del primal es una **igualdad**, y por
tanto su variable dual queda **libre de signo**:

$$\min\ w = 4y_1 + 8y_2 + 6y_3
\quad \text{s.a.}\quad
\begin{cases}
\ \ \ y_1 + 2y_2 + y_3 \ge 4{,}5 \\
\ 2y_1 - \ \ y_2 - y_3 \ge 3 \\
-y_1 + \ \ y_2 \ \ \ \ \ \ \ \ \ \ \ge 1{,}5 \\
y_1, y_3 \ge 0, \quad y_2 \text{ libre}
\end{cases}$$

**c)** El primal es de **minimización** y tiene restricciones en los dos sentidos, así
que el dual es de maximización y los signos de sus variables no son todos iguales:

$$\max\ w = 700y_1 + 2400y_2 + 1600y_3
\quad \text{s.a.}\quad
\begin{cases}
y_1 + 3y_2 + \ \ y_3 \le 6 \\
\ \ \ \ \ \ \ \ \ y_2 + 2y_3 \le 4 \\
y_2 \ge 0, \quad y_1, y_3 \le 0
\end{cases}$$

**La regla de los signos es la que más se falla.** En un primal de minimización, una
restricción $\ge$ da variable dual $\ge 0$ y una $\le$ da variable dual $\le 0$; en
uno de maximización es al revés. Comprobarlo es inmediato: **el dual del dual tiene
que devolver el primal**, y si no lo hace, algún signo está cambiado.
\end{solucion}

---

Los ejercicios están planteados sobre el temario de \cite{hillier1991} y
\cite{taha2004}; el tratamiento de las formas y de la dualidad sigue a
\cite{goberna2004}, y hay más problemas resueltos en \cite{barbolla2001} y
\cite{martin2003}.
