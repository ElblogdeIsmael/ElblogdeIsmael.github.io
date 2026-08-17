# Teoría de la decisión

Tema 5 del programa, primero de la parte 2. Decidir cuando el resultado no depende
solo de lo que se elige: certeza, riesgo e incertidumbre.

## Elementos de un problema de decisión

| Elemento | Qué es |
| --- | --- |
| Decisor | quien elige |
| Alternativas | $a_1, \dots, a_m$: entre lo que se puede elegir |
| Estados de la naturaleza | $e_1, \dots, e_n$: lo que puede ocurrir y no se controla |
| Resultados | $x_{ij}$: lo que se obtiene con $a_i$ si ocurre $e_j$ |
| Criterio | la regla con la que se elige |

Se representa en una **matriz de decisión**:

| | $e_1$ | $e_2$ | $\cdots$ | $e_n$ |
| --- | ---: | ---: | --- | ---: |
| $a_1$ | $x_{11}$ | $x_{12}$ | $\cdots$ | $x_{1n}$ |
| $a_2$ | $x_{21}$ | $x_{22}$ | $\cdots$ | $x_{2n}$ |
| $\vdots$ | | | | |
| $a_m$ | $x_{m1}$ | $x_{m2}$ | $\cdots$ | $x_{mn}$ |

Los estados de la naturaleza tienen que ser **exhaustivos y mutuamente
excluyentes**: uno y solo uno ocurrirá. Si no lo son, ningún criterio de los que
siguen tiene sentido.

Y la diferencia con el tema 7 conviene fijarla ya: aquí los estados los produce la
naturaleza, que **no tiene intereses**. En teoría de juegos el otro lado elige
buscando su propio beneficio, y eso cambia por completo el análisis.

## Clasificación

Según lo que se sepa de los estados:

| Ambiente | Qué se sabe |
| --- | --- |
| **Certeza** | se sabe qué estado ocurrirá |
| **Riesgo** | se conocen las probabilidades de cada estado |
| **Incertidumbre** | no se conocen las probabilidades |
| **Competencia** | los estados los decide otro decisor (tema 7) |

## Decisión en ambiente de certeza

Solo hay un estado posible, así que la matriz tiene una columna y se elige la
alternativa de mejor resultado. Si las alternativas son muchas o infinitas, elegir
es resolver un problema de optimización: **los temas 2 a 4 son decisión en
certeza**.

## Decisión en ambiente de riesgo

Se conocen las probabilidades $p_1, \dots, p_n$ de los estados.

### Valor esperado

$$\operatorname{E}[a_i] = \sum_{j=1}^{n} p_j\,x_{ij}$$

Se elige la alternativa de mayor valor esperado, si son beneficios, o de menor si
son costes.

**Ejemplo.** Un comerciante decide cuántas unidades pedir. Beneficios en euros:

| | Demanda baja ($p = 0{,}3$) | Media ($p = 0{,}5$) | Alta ($p = 0{,}2$) | $\operatorname{E}$ |
| --- | ---: | ---: | ---: | ---: |
| Pedir 100 | 300 | 300 | 300 | **300** |
| Pedir 200 | 100 | 500 | 500 | 380 |
| Pedir 300 | $-100$ | 300 | 800 | 280 |

$$\operatorname{E}[\text{200}] = 0{,}3(100) + 0{,}5(500) + 0{,}2(500) = 380$$

Se elige pedir 200. Y conviene notar que **no es la alternativa que gana en ningún
estado concreto**: gana en media, que es otra cosa.

### Valor esperado de la información perfecta

Cuánto vale, como máximo, saber de antemano qué va a ocurrir:

$$\text{VEIP} = \sum_j p_j \max_i x_{ij} - \max_i \operatorname{E}[a_i]$$

En el ejemplo: $0{,}3(300) + 0{,}5(500) + 0{,}2(800) = 500$, y $500 - 380 = 120$. Un
estudio de mercado infalible no valdría más de 120 euros, y esa cifra es la que
decide si contratarlo.

### El criterio del valor esperado no siempre encaja

Dos objeciones que el temario recoge:

- **No sirve para decisiones que no se repiten.** El valor esperado es un promedio
  sobre muchas repeticiones; en una decisión única, ese promedio no se materializa.
- **Ignora la actitud ante el riesgo.** Nadie apuesta su patrimonio a una lotería
  con valor esperado ligeramente positivo.

De ahí la **utilidad esperada**: se sustituye el dinero por una función de utilidad
$u(x)$ que recoge la actitud del decisor, y se maximiza $\sum_j p_j\,u(x_{ij})$.

| Forma de $u$ | Actitud |
| --- | --- |
| Cóncava | aversión al riesgo |
| Lineal | neutral |
| Convexa | propensión al riesgo |

Con $u$ cóncava, el decisor prefiere una cantidad segura a una lotería del mismo
valor esperado, y la diferencia entre ese valor esperado y la cantidad segura que lo
iguala es la **prima de riesgo**.

### Árboles de decisión

Cuando hay decisiones en varias etapas, la matriz no basta y se usa un árbol.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, >=stealth,
  dec/.style={draw, rectangle, minimum size=5mm},
  azar/.style={draw, circle, minimum size=5mm}]
\node[dec] (d) at (0,0) {};
\node[azar] (a1) at (3.2,1.5) {};
\node[azar] (a2) at (3.2,-1.5) {};
\draw[->] (d) -- node[above, sloped, font=\scriptsize] {invertir} (a1);
\draw[->] (d) -- node[below, sloped, font=\scriptsize] {no invertir} (a2);
\draw[->] (a1) -- node[above, sloped, font=\scriptsize] {éxito, 0,6} ++(3.0,0.85)
  node[right] {$+500$};
\draw[->] (a1) -- node[below, sloped, font=\scriptsize] {fracaso, 0,4} ++(3.0,-0.85)
  node[right] {$-200$};
\draw[->] (a2) -- ++(3.0,0) node[right] {$0$};
\node[anchor=east, font=\scriptsize] at (-0.2,0) {decisión};
\end{tikzpicture}
\end{center}
```

Los cuadrados son **nodos de decisión** y los círculos, **nodos de azar**. Se
resuelve **de derecha a izquierda**: en cada nodo de azar se calcula el valor
esperado, y en cada nodo de decisión se elige la rama de mayor valor. Aquí,
$0{,}6(500) + 0{,}4(-200) = 220 > 0$, así que se invierte.

## Decisión en ambiente de incertidumbre

Sin probabilidades, no hay valor esperado. Hay varios criterios, y **cada uno puede
elegir una alternativa distinta**: la elección del criterio es en sí misma una
decisión.

Matriz de ejemplo, beneficios:

| | $e_1$ | $e_2$ | $e_3$ |
| --- | ---: | ---: | ---: |
| $a_1$ | 40 | 60 | 20 |
| $a_2$ | 10 | 90 | 30 |
| $a_3$ | 50 | 50 | 50 |

### Criterio de Wald o maximin

Pesimista: se supone el peor estado y se elige lo mejor dentro de eso.

$$\max_i\ \min_j\ x_{ij}$$

| | Mínimo |
| --- | ---: |
| $a_1$ | 20 |
| $a_2$ | 10 |
| $a_3$ | **50** |

Elige $a_3$. Es el criterio conservador, y el adecuado cuando un mal resultado es
inasumible.

### Criterio optimista o maximax

$$\max_i\ \max_j\ x_{ij}$$

| | Máximo |
| --- | ---: |
| $a_1$ | 60 |
| $a_2$ | **90** |
| $a_3$ | 50 |

Elige $a_2$. Es el criterio del que solo mira al mejor escenario.

### Criterio de Hurwicz

Interpola entre los dos con un coeficiente de optimismo $\alpha \in [0,1]$:

$$\max_i\ \left[\alpha \max_j x_{ij} + (1-\alpha)\min_j x_{ij}\right]$$

Con $\alpha = 0{,}6$:

| | Cálculo | Valor |
| --- | --- | ---: |
| $a_1$ | $0{,}6(60) + 0{,}4(20)$ | 44 |
| $a_2$ | $0{,}6(90) + 0{,}4(10)$ | **58** |
| $a_3$ | $0{,}6(50) + 0{,}4(50)$ | 50 |

Con $\alpha = 0$ es Wald y con $\alpha = 1$ es maximax. **El resultado depende de
$\alpha$**, y $\alpha$ lo pone el decisor: el criterio no elimina la subjetividad,
la hace explícita.

### Criterio de Savage o del mínimo arrepentimiento

Se construye la **matriz de arrepentimientos**, restando cada resultado del mejor de
su columna:

$$r_{ij} = \max_k x_{kj} - x_{ij}$$

| | $e_1$ | $e_2$ | $e_3$ | Máximo |
| --- | ---: | ---: | ---: | ---: |
| $a_1$ | 10 | 30 | 30 | 30 |
| $a_2$ | 40 | 0 | 20 | 40 |
| $a_3$ | 0 | 40 | 0 | **40** |

Se elige el menor de los máximos: aquí $a_1$, con 30. Mide lo que se lamentará
haber elegido mal cuando se sepa qué ocurrió.

Su defecto conocido es que **no es independiente de alternativas irrelevantes**:
añadir una alternativa nueva y peor puede cambiar cuál gana entre las anteriores,
porque cambia los máximos por columna.

### Criterio de Laplace

A falta de información, se supone que todos los estados son igual de probables y se
aplica el valor esperado:

| | Media |
| --- | ---: |
| $a_1$ | 40 |
| $a_2$ | 43,33 |
| $a_3$ | **50** |

Elige $a_3$. Su objeción es que **la ignorancia no es lo mismo que la
equiprobabilidad**: no saber nada de los estados no autoriza a afirmar que son
igualmente probables.

### Resumen del ejemplo

| Criterio | Elige |
| --- | --- |
| Wald | $a_3$ |
| Maximax | $a_2$ |
| Hurwicz, $\alpha=0{,}6$ | $a_2$ |
| Savage | $a_1$ |
| Laplace | $a_3$ |

**Los tres candidatos salen elegidos por algún criterio.** Eso no es un fallo del
método: es que sin probabilidades no hay una respuesta objetiva, y lo que aporta el
análisis es dejar claro qué supuesto lleva a qué elección.

## Modelos de decisión en logística y transportes

Casos de decisión que se formulan como problemas lineales de los temas 2 y 3.

### Problema del transporte

Llevar un producto de $m$ orígenes con oferta $a_i$ a $n$ destinos con demanda $b_j$,
con coste unitario $c_{ij}$, minimizando el coste total:

$$\min\ \sum_{i}\sum_{j} c_{ij}x_{ij}
\qquad \text{s.a.}\quad
\sum_j x_{ij} = a_i,\quad \sum_i x_{ij} = b_j,\quad x_{ij}\ge 0$$

Está **equilibrado** si $\sum a_i = \sum b_j$; si no, se añade un origen o un destino
ficticio con coste cero.

Es un problema lineal y se podría resolver con el símplex, pero su estructura permite
métodos específicos mucho más rápidos:

| Fase | Métodos |
| --- | --- |
| Solución inicial | esquina noroeste, coste mínimo, aproximación de Vogel |
| Mejora | método del salto de piedra en piedra, o de los multiplicadores |

La **esquina noroeste** es la más simple y la que peor arranca, porque ignora los
costes; **Vogel** da la mejor solución inicial y suele quedarse muy cerca del óptimo.

Y una propiedad valiosa: si las ofertas y demandas son enteras, **la solución óptima
es entera automáticamente**. No hace falta programación entera, y eso lo distingue
de casi todo lo del tema 3.

### Problema de asignación

Caso particular con $m = n$ y todas las ofertas y demandas iguales a 1: asignar $n$
tareas a $n$ personas, una a una, minimizando el coste. Se resuelve con el **método
húngaro**, en tiempo polinómico.

### Problemas en redes

| Problema | Qué busca |
| --- | --- |
| Camino más corto | la ruta de menor coste entre dos nodos |
| Flujo máximo | cuánto se puede enviar entre dos nodos con capacidades limitadas |
| Árbol de expansión mínimo | conectar todos los nodos con coste total mínimo |
| Flujo de coste mínimo | el modelo general que engloba a los anteriores |

Todos son lineales, todos tienen algoritmos específicos más rápidos que el símplex y
todos dan **solución entera** cuando los datos lo son.

El planteamiento de la teoría de la decisión y sus criterios sigue a
\cite{aguado2007} y \cite{riosinsua2004}; los modelos de transporte y de redes, a
\cite{hillier1991}, \cite{taha2004} y \cite{bazaraa1998}.
