# La eficiencia de los algoritmos

Tema 1 del programa. Cómo se mide el coste de un algoritmo sin ejecutarlo, la
notación asintótica y la resolución de las ecuaciones de recurrencia que aparecen
al analizar algoritmos recursivos.

## Por qué no se mide con un cronómetro

Medir el tiempo de ejecución da un número que depende de la máquina, del
compilador, de la carga del sistema y de los datos concretos. Sirve para comparar
dos implementaciones del mismo algoritmo en la misma máquina, y no sirve para
comparar algoritmos.

El análisis teórico cuenta **operaciones elementales** en función del tamaño de la
entrada. Da un resultado independiente de la máquina y permite predecir qué pasa
al crecer el problema, que es la pregunta que importa.

### Tamaño de la entrada y operación elemental

| Problema | Tamaño | Operación elemental |
| --- | --- | --- |
| Ordenar un vector | número de elementos | comparación entre elementos |
| Buscar en un vector | número de elementos | comparación |
| Multiplicar matrices | dimensión | multiplicación escalar |
| Recorrer un grafo | vértices y aristas | visita de un vértice o arista |
| Comprobar si un número es primo | **número de dígitos**, no el valor | división |

La última fila no es un detalle: si el tamaño se midiera como el valor de $n$, el
algoritmo que prueba divisores hasta $\sqrt{n}$ parecería polinómico, y en términos
del número de dígitos es exponencial. La elección del tamaño cambia la conclusión.

### Los tres casos

| Caso | Qué mide |
| --- | --- |
| Mejor | la entrada más favorable |
| Peor | la más desfavorable |
| Medio | la esperanza sobre una distribución de entradas |

El **peor caso** es el que se usa por omisión, porque es una garantía: el
algoritmo nunca tardará más. El caso medio exige suponer una distribución de las
entradas, y esa suposición suele ser discutible.

La ordenación rápida es el ejemplo que lo ilustra: $O(n \log n)$ en el caso medio
y $O(n^2)$ en el peor, y aun así se usa porque el peor caso es raro con un pivote
elegido bien. La ordenación por mezcla garantiza $O(n \log n)$ siempre, y sin
embargo es más lenta en la práctica por su constante y por su uso de memoria. La
notación asintótica no lo dice todo.

## Notación asintótica

### Las tres cotas

| Notación | Definición | Significado |
| --- | --- | --- |
| $f \in O(g)$ | $\exists c, n_0 : f(n) \le c\,g(n)$ para todo $n \ge n_0$ | cota superior |
| $f \in \Omega(g)$ | $\exists c, n_0 : f(n) \ge c\,g(n)$ para todo $n \ge n_0$ | cota inferior |
| $f \in \Theta(g)$ | $f \in O(g)$ y $f \in \Omega(g)$ | orden exacto |

Decir que un algoritmo es $O(n^2)$ afirma que **no tarda más** que un múltiplo de
$n^2$. Es cierto y poco informativo si además es $O(n)$: la cota superior no
obliga a ser ajustada. Cuando se conoce el orden exacto se escribe $\Theta$, y en
la práctica se dice $O$ queriendo decir $\Theta$.

Las constantes y los términos de orden inferior se descartan:

$$3n^2 + 5n + 100 \in \Theta(n^2)$$

porque para $n$ grande el término cuadrático domina. Eso también avisa de su
límite: **para $n$ pequeño las constantes deciden**, y un algoritmo $\Theta(n^2)$
con constante pequeña puede batir a uno $\Theta(n \log n)$ hasta cierto tamaño.
Por eso las bibliotecas cambian a ordenación por inserción en los tramos cortos.

### Jerarquía de órdenes

De menor a mayor crecimiento:

$$\Theta(1) \subset \Theta(\log n) \subset \Theta(n) \subset \Theta(n \log n)
\subset \Theta(n^2) \subset \Theta(n^3) \subset \Theta(2^n) \subset \Theta(n!)$$

Lo que significa en tiempo real, suponiendo un microsegundo por operación:

| $n$ | $n$ | $n \log n$ | $n^2$ | $2^n$ |
| ---: | ---: | ---: | ---: | ---: |
| 10 | 10 µs | 33 µs | 100 µs | 1 ms |
| 100 | 100 µs | 664 µs | 10 ms | $4\cdot10^{16}$ años |
| 1 000 | 1 ms | 10 ms | 1 s | — |
| 1 000 000 | 1 s | 20 s | 11,6 días | — |

La conclusión del tema está en esa tabla: **un algoritmo exponencial es
inutilizable a partir de tamaños ridículos**, y ninguna máquina más rápida lo
arregla. Duplicar la velocidad del ordenador permite resolver un problema
exponencial con un elemento más.

### Reglas de cálculo

| Regla | Enunciado |
| --- | --- |
| Suma | $\Theta(f) + \Theta(g) = \Theta(\max(f,g))$ |
| Producto | $\Theta(f) \cdot \Theta(g) = \Theta(f \cdot g)$ |
| Constantes | $\Theta(c \cdot f) = \Theta(f)$ |
| Instrucciones seguidas | se suman |
| Bucles anidados | se multiplican |

```cpp
for (int i = 0; i < n; i++)          // n vueltas
    for (int j = 0; j < n; j++)      // n vueltas
        s += m[i][j];                // Theta(1)
```

Total: $\Theta(n^2)$.

```cpp
for (int i = 1; i < n; i *= 2)       // log n vueltas
    for (int j = 0; j < n; j++)      // n vueltas
        s++;
```

Total: $\Theta(n \log n)$. La clave es que el primer bucle **multiplica** en vez
de sumar, así que el número de vueltas es logarítmico.

Y un caso que engaña:

```cpp
for (int i = 0; i < n; i++)
    for (int j = i; j < n; j++)
        s++;
```

El interior no da $n$ vueltas sino $n-i$. La suma es
$\sum_{i=0}^{n-1}(n-i) = n(n+1)/2$, es decir $\Theta(n^2)$. El resultado es el
mismo orden, y la constante es la mitad.

## Ecuaciones de recurrencia

Un algoritmo recursivo tiene un coste que se define en términos de sí mismo, y
resolver esa recurrencia es obtener el orden.

### Método de sustitución

Se expande la recurrencia hasta ver el patrón. Para la búsqueda binaria:

$$T(n) = T(n/2) + c, \qquad T(1) = c$$

$$T(n) = T(n/2) + c = T(n/4) + 2c = \dots = T(n/2^k) + kc$$

El caso base se alcanza con $n/2^k = 1$, es decir $k = \log_2 n$, y queda

$$T(n) = c \log_2 n + c \in \Theta(\log n)$$

### Árbol de recursión

Se dibuja el árbol de llamadas y se suma el coste por niveles. Para la ordenación
por mezcla, $T(n) = 2T(n/2) + \Theta(n)$:

```
nivel 0:            n                        -> n
nivel 1:      n/2       n/2                  -> n
nivel 2:   n/4  n/4   n/4  n/4               -> n
   ...
nivel log n: 1 1 1 ... 1                     -> n
```

Cada nivel cuesta $\Theta(n)$ y hay $\log_2 n$ niveles, así que
$T(n) \in \Theta(n \log n)$.

### Teorema maestro

Para recurrencias de la forma

$$T(n) = a\,T(n/b) + f(n), \qquad a \ge 1,\ b > 1$$

se compara $f(n)$ con $n^{\log_b a}$:

| Caso | Condición | Resultado |
| --- | --- | --- |
| 1 | $f(n) \in O(n^{\log_b a - \varepsilon})$ | $T(n) \in \Theta(n^{\log_b a})$ |
| 2 | $f(n) \in \Theta(n^{\log_b a})$ | $T(n) \in \Theta(n^{\log_b a} \log n)$ |
| 3 | $f(n) \in \Omega(n^{\log_b a + \varepsilon})$ y se cumple la regularidad | $T(n) \in \Theta(f(n))$ |

La intuición: el caso 1 es que domina el trabajo de las hojas, el 3 que domina el
de la raíz, y el 2 que todos los niveles cuestan lo mismo.

Aplicado:

| Recurrencia | $a$ | $b$ | $n^{\log_b a}$ | $f(n)$ | Caso | Resultado |
| --- | ---: | ---: | --- | --- | :-: | --- |
| $T(n)=2T(n/2)+n$ | 2 | 2 | $n$ | $n$ | 2 | $\Theta(n \log n)$ |
| $T(n)=T(n/2)+1$ | 1 | 2 | $1$ | $1$ | 2 | $\Theta(\log n)$ |
| $T(n)=4T(n/2)+n$ | 4 | 2 | $n^2$ | $n$ | 1 | $\Theta(n^2)$ |
| $T(n)=3T(n/2)+n^2$ | 3 | 2 | $n^{1{,}58}$ | $n^2$ | 3 | $\Theta(n^2)$ |
| $T(n)=7T(n/2)+n^2$ | 7 | 2 | $n^{2{,}81}$ | $n^2$ | 1 | $\Theta(n^{2{,}81})$ |

La última fila es el algoritmo de Strassen para multiplicar matrices, y explica
por qué mejora al método clásico de $\Theta(n^3)$.

El teorema **no cubre todos los casos**: si $f(n)$ cae entre dos casos sin
cumplir ninguno —por ejemplo $f(n) = n \log n$ con $n^{\log_b a} = n$— hay que
recurrir al árbol de recursión.

### Recurrencias por sustracción

Para $T(n) = a\,T(n-b) + f(n)$ el comportamiento es distinto y mucho peor:

| Condición | Resultado |
| --- | --- |
| $a = 1$ | $\Theta(n \cdot f(n))$ |
| $a > 1$ | $\Theta(a^{n/b} \cdot f(n))$: **exponencial** |

De ahí que el Fibonacci recursivo ingenuo, con $T(n) = T(n-1) + T(n-2) + c$, sea
exponencial: dos llamadas y el tamaño decrece restando. Dividir el problema es lo
que da órdenes logarítmicos; restarle una constante, no.

## Eficiencia en espacio

Además del tiempo se analiza la memoria. Un algoritmo **in situ** usa $\Theta(1)$
de memoria adicional.

| Algoritmo | Tiempo | Espacio adicional |
| --- | --- | --- |
| Ordenación por inserción | $\Theta(n^2)$ | $\Theta(1)$ |
| Ordenación rápida | $\Theta(n \log n)$ medio | $\Theta(\log n)$ por la pila |
| Ordenación por mezcla | $\Theta(n \log n)$ | $\Theta(n)$ |
| Ordenación por montículo | $\Theta(n \log n)$ | $\Theta(1)$ |

La memoria de la pila de recursión cuenta, y a menudo se olvida: un algoritmo
recursivo «sin memoria adicional» consume un marco por nivel de recursión.

Y hay un intercambio explícito entre los dos recursos: la programación dinámica
del tema 5 gasta memoria para no repetir cálculos, y la memorización convierte un
algoritmo exponencial en uno polinómico a cambio de una tabla.

## Cotas inferiores del problema

Distinto del coste de un algoritmo: es lo que **ningún** algoritmo puede mejorar.

La ordenación por comparaciones tiene cota inferior $\Omega(n \log n)$, y la
demostración es el árbol de decisión. Un algoritmo que solo compara elementos
recorre un camino en un árbol binario cuyas hojas son las $n!$ permutaciones
posibles; la altura mínima de ese árbol es $\log_2(n!) \in \Theta(n \log n)$.

La consecuencia es que la mezcla y el montículo son **óptimos** en su modelo, y
que mejorarlos exige salir del modelo: la ordenación por conteo y la radix son
lineales precisamente porque no comparan, sino que usan el valor de la clave como
índice.

Saber que existe una cota inferior evita perder tiempo buscando algo imposible, y
es la razón por la que las cotas se estudian junto a los algoritmos. El
tratamiento de la eficiencia y de las recurrencias está en \cite{brassard1997} y
en \cite{cormen2022}, y el planteamiento de la asignatura en \cite{verdegay2017}.
