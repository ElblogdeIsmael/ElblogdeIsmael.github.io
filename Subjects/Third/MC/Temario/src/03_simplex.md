# Algoritmo símplex. Dualidad. Análisis de sensibilidad. Programación entera

Tema 3 del programa, el más largo. El algoritmo que resuelve el problema lineal, su
problema dual, qué pasa al cambiar los datos y qué hacer cuando las variables tienen
que ser enteras.

## Fundamentos del símplex

El teorema fundamental del tema 2 dice que, si hay óptimo, hay un vértice óptimo. El
símplex recorre vértices adyacentes mejorando el objetivo en cada paso.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, >=stealth]
% El borde del poliedro va fino y el camino del simplex, grueso y con
% flechas: con los dos al mismo grosor no se distinguia cual era cual.
\fill[gray!18] (0,0) -- (3.4,0) -- (4.3,1.6) -- (2.6,3.0) -- (0.6,2.4) -- cycle;
\draw[gray!65] (0,0) -- (3.4,0) -- (4.3,1.6) -- (2.6,3.0) -- (0.6,2.4) -- cycle;
\draw[->, ultra thick] (0,0) -- node[below, font=\scriptsize] {1} (3.4,0);
\draw[->, ultra thick] (3.4,0) -- node[right, font=\scriptsize] {2} (4.3,1.6);
\draw[->, ultra thick] (4.3,1.6) -- node[above right, font=\scriptsize] {3} (2.6,3.0);
\foreach \p in {(0,0),(3.4,0),(4.3,1.6),(2.6,3.0),(0.6,2.4)} { \fill \p circle (2.2pt); }
\node[anchor=north east] at (0,0) {inicio};
\node[anchor=south] at (2.6,3.1) {óptimo};
\end{tikzpicture}
\end{center}
```

Su esquema:

| Paso | Qué se hace |
| --- | --- |
| 1 | partir de una solución básica factible |
| 2 | comprobar si es óptima; si lo es, terminar |
| 3 | elegir qué variable **entra** en la base |
| 4 | elegir qué variable **sale** |
| 5 | pivotar y volver al 2 |

### La tabla

Con el problema en forma estándar, la tabla recoge en cada iteración la base actual:

| $c_B$ | VB | $x_1$ | $\cdots$ | $x_n$ | $\mathbf{X}_B$ |
| --- | --- | --- | --- | --- | --- |
| $c_{B1}$ | $x_{B1}$ | | | | $b_1$ |
| $\vdots$ | $\vdots$ | | | | $\vdots$ |
| | $z_j - c_j$ | | | | $z$ |

La fila $z_j - c_j$ es la de los **costes reducidos**: cuánto cambia el objetivo por
cada unidad que entre de $x_j$.

### Criterios

| Criterio | Maximizar | Minimizar |
| --- | --- | --- |
| Óptimo alcanzado | todos $z_j - c_j \ge 0$ | todos $z_j - c_j \le 0$ |
| Variable que entra | la más negativa | la más positiva |
| Variable que sale | mínimo cociente $b_i / a_{ij}$ con $a_{ij} > 0$ | igual |

El **criterio del mínimo cociente** es lo que garantiza que la solución siguiente
sigue siendo factible: si se entrara más allá de ese valor, alguna variable básica
se volvería negativa.

Y los casos especiales que la tabla detecta sin ambigüedad:

| Situación | Cómo se reconoce en la tabla |
| --- | --- |
| Óptimos múltiples | una variable **no básica** tiene $z_j - c_j = 0$ |
| No acotado | la columna que entra no tiene ningún $a_{ij} > 0$ |
| Degeneración | alguna variable básica vale 0 |
| Infactible | queda una artificial positiva al terminar |

La **degeneración** puede producir ciclado: la base cambia y el objetivo no mejora.
Es raro en la práctica y se evita con la regla de Bland, que elige siempre el índice
menor entre los candidatos.

## Método de la M y método de las dos fases

Con restricciones $\ge$ o $=$ no hay base inicial evidente, porque las variables de
exceso entran con coeficiente $-1$. Se añaden **variables artificiales** para tener
una base de partida, y hay dos maneras de expulsarlas.

### Método de la M grande

Se penaliza cada artificial en el objetivo con una constante $M$ arbitrariamente
grande:

$$\max\ z = \mathbf{c}'\mathbf{x} - M\sum_k t_k
\qquad\text{o}\qquad
\min\ z = \mathbf{c}'\mathbf{x} + M\sum_k t_k$$

El símplex las saca por sí solo, porque mantenerlas cuesta mucho. Al terminar:

- si todas las artificiales valen cero, la solución es óptima del problema original;
- si alguna queda positiva, **el problema es infactible**.

Su inconveniente es numérico: un $M$ demasiado grande produce errores de redondeo
que confunden los costes reducidos, y uno demasiado pequeño puede no expulsar las
artificiales.

### Método de las dos fases

Evita ese problema separando el trabajo.

| Fase | Objetivo | Qué se busca |
| --- | --- | --- |
| **1** | $\min\ w = \sum_k t_k$ | una solución básica factible del problema original |
| **2** | el objetivo original | el óptimo, partiendo de la base que dejó la fase 1 |

Al terminar la fase 1:

- si $w = 0$, todas las artificiales son cero y se pasa a la fase 2;
- si $w > 0$, **el problema es infactible** y no hay fase 2.

Es el método preferible por estabilidad numérica, y es el que pide el ejercicio 9
del último capítulo.

## Dualidad

### Formulación del dual

A todo problema lineal —el **primal**— le corresponde otro, el **dual**:

| Primal (max) | Dual (min) |
| --- | --- |
| $\max\ \mathbf{c}'\mathbf{x}$ | $\min\ \mathbf{b}'\mathbf{y}$ |
| s.a. $\mathbf{A}\mathbf{x} \le \mathbf{b}$ | s.a. $\mathbf{A}'\mathbf{y} \ge \mathbf{c}$ |
| $\mathbf{x} \ge \mathbf{0}$ | $\mathbf{y} \ge \mathbf{0}$ |

La correspondencia, término a término:

| Primal | Dual |
| --- | --- |
| $m$ restricciones | $m$ variables |
| $n$ variables | $n$ restricciones |
| coeficientes del objetivo | términos independientes |
| términos independientes | coeficientes del objetivo |
| matriz $\mathbf{A}$ | su traspuesta $\mathbf{A}'$ |
| restricción $\le$ | variable $\ge 0$ |
| restricción $=$ | variable sin restricción de signo |
| variable $\ge 0$ | restricción $\ge$ |
| variable sin restricción de signo | restricción $=$ |

Y **el dual del dual es el primal**: la relación es simétrica.

### Relaciones primal-dual

| Teorema | Enunciado |
| --- | --- |
| Dualidad débil | si $\mathbf{x}$ e $\mathbf{y}$ son factibles, $\mathbf{c}'\mathbf{x} \le \mathbf{b}'\mathbf{y}$ |
| Dualidad fuerte | si uno tiene óptimo finito, el otro también, y los valores coinciden |
| Holgura complementaria | en el óptimo, $y_i\,(\,b_i - \mathbf{a}_i'\mathbf{x}\,) = 0$ para todo $i$ |

De la dualidad débil sale una consecuencia útil: **si el primal es no acotado, el
dual es infactible**, y al revés. Lo que no se puede deducir es lo contrario: los
dos pueden ser infactibles a la vez.

La **holgura complementaria** dice, en palabras: si un recurso sobra en el óptimo,
su precio sombra es cero; y si su precio sombra es positivo, ese recurso se agota.
Es lo que permite reconstruir la solución de un problema a partir de la del otro sin
resolverlo.

### Interpretación económica

Las variables duales $y_i$ son los **precios sombra** de los recursos: cuánto mejora
el objetivo por cada unidad adicional del recurso $i$.

$$y_i = \frac{\partial z^*}{\partial b_i}$$

En el ejemplo de sillas y mesas del tema 2, el precio sombra de la hora de montaje
dice cuánto más se ganaría con una hora más de montaje al día, y por tanto **cuánto
como máximo compensa pagar** por esa hora extra. Es la lectura que convierte la
dualidad en una herramienta de gestión y no en una curiosidad algebraica.

Y aparecen ya calculados: **los precios sombra están en la fila $z_j - c_j$ de la
tabla óptima**, bajo las columnas de las variables de holgura.

### Símplex dual

Trabaja al revés: mantiene la condición de optimalidad y va restaurando la
factibilidad.

| | Símplex primal | Símplex dual |
| --- | --- | --- |
| Punto de partida | factible, no óptimo | óptimo, no factible |
| Sale de la base | por el mínimo cociente | la variable básica más negativa |
| Entra en la base | el coste reducido más favorable | por un cociente sobre la fila pivote |
| Termina cuando | se cumple la optimalidad | se cumple la factibilidad |

Su uso natural es el análisis de sensibilidad: cuando cambia un término
independiente y la base óptima deja de ser factible, el símplex dual la repara en
pocas iteraciones en vez de resolver de nuevo.

## Análisis de sensibilidad

Estudia cómo cambia la solución óptima al cambiar los datos, **sin resolver otra
vez**. Es lo que hace utilizable un modelo cuyos datos son estimaciones.

| Cambio | Qué se estudia |
| --- | --- |
| En $c_j$ de una variable **básica** | intervalo en el que la base sigue siendo óptima |
| En $c_j$ de una **no básica** | cuánto puede subir antes de entrar en la base |
| En $b_i$ | intervalo en el que la base sigue siendo factible |
| Nueva variable | se calcula su coste reducido; si es favorable, entra |
| Nueva restricción | se comprueba si el óptimo la cumple; si no, símplex dual |

Los dos intervalos que se piden siempre:

- **Rango de optimalidad** de $c_j$: el intervalo en el que la base óptima no cambia.
  La solución sigue siendo la misma; lo que cambia es el valor de $z$.
- **Rango de factibilidad** de $b_i$: el intervalo en el que la base sigue siendo
  factible. Dentro de él, el precio sombra $y_i$ es constante y $z$ varía a razón de
  $y_i$ por unidad.

**Fuera del rango de factibilidad el precio sombra cambia**, y por eso no se puede
extrapolar: duplicar un recurso no duplica la ganancia, porque en algún punto deja
de ser el cuello de botella y otro recurso pasa a serlo.

## Programación entera

Cuando las variables deben tomar valores enteros:

| Tipo | Variables |
| --- | --- |
| Entera pura | todas enteras |
| Entera mixta | algunas enteras, otras continuas |
| Binaria | todas valen 0 o 1 |

Las binarias sirven para modelar decisiones lógicas —hacer o no hacer, elegir una
opción entre varias, condicionales entre restricciones— y son las que hacen a la
programación entera mucho más expresiva que la lineal.

### Por qué no basta redondear

Es la primera tentación y es un error de dos clases:

- **La solución redondeada puede ser infactible**, si el punto continuo estaba sobre
  el borde de la región.
- **Puede ser factible y no óptima**, y a veces muy lejos del óptimo entero: el
  óptimo entero no tiene por qué estar cerca del continuo.

Lo que sí es cierto y se usa como cota: **el valor óptimo del problema relajado
—ignorando la integridad— es una cota superior en maximización**, porque la región
continua contiene a la entera.

### Ramificación y acotación

| Paso | Qué se hace |
| --- | --- |
| 1 | resolver la relajación continua |
| 2 | si la solución es entera, es la óptima |
| 3 | si no, elegir una variable fraccionaria $x_j = v$ y **ramificar** |
| 4 | crear dos subproblemas: $x_j \le \lfloor v \rfloor$ y $x_j \ge \lceil v \rceil$ |
| 5 | resolver cada uno y **podar** los que no puedan mejorar la mejor solución entera conocida |

La poda es lo que hace viable el método: una rama cuya cota es peor que la mejor
solución entera ya encontrada no puede contener el óptimo, y se abandona entera.

**Encontrar pronto una buena solución entera acelera mucho**, porque una cota
exigente poda más ramas. Por eso los programas dedican esfuerzo a heurísticas
iniciales antes de ramificar en serio.

### Planos de corte

La alternativa: resolver la relajación y añadir restricciones que corten la solución
fraccionaria sin eliminar ningún punto entero factible. Se repite hasta que la
solución de la relajación sea entera. Los cortes de Gomory son el caso clásico, y hoy
se combinan con la ramificación en los métodos de ramificación y corte.

### Coste

La programación entera es **NP-dura**: no se conoce algoritmo de tiempo polinómico y
el número de nodos del árbol puede crecer exponencialmente. La diferencia con la
lineal es de naturaleza, no de grado, y por eso conviene formular con el menor
número posible de variables enteras.

El símplex, la dualidad y el análisis de sensibilidad siguen a \cite{hillier1991},
\cite{taha2004} y \cite{goberna2004}; la programación entera y sus algoritmos, a
\cite{bazaraa1998} y \cite{martin2003}.
