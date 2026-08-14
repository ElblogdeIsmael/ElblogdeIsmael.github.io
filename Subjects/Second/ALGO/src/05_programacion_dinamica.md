# Algoritmos basados en programación dinámica

Tema 5 del programa. Resolver cada subproblema una sola vez y guardar el
resultado, para los casos en que divide y vencerás repite trabajo.

## El problema que resuelve

Divide y vencerás supone que los subproblemas son independientes. Cuando **se
solapan**, resolverlos por separado repite el mismo cálculo un número exponencial
de veces.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  level distance=11mm,
  level 1/.style={sibling distance=34mm},
  level 2/.style={sibling distance=17mm},
  level 3/.style={sibling distance=10mm},
  every node/.style={draw, circle, inner sep=1pt, font=\scriptsize}
]
\node {5}
  child { node {4}
    child { node {3}
      child { node[fill=black!12] {2} }
      child { node {1} } }
    child { node[fill=black!12] {2} } }
  child { node[fill=black!12] {3}
    child { node[fill=black!12] {2} }
    child { node {1} } };
\end{tikzpicture}
\end{center}
```

En el árbol de `fib(5)`, los nodos sombreados se recalculan. Con $n$ grande el
mismo valor se recalcula millones de veces, y de ahí el coste exponencial.

## Las dos propiedades

Un problema admite programación dinámica si cumple:

| Propiedad | Qué significa |
| --- | --- |
| Subestructura óptima | la solución óptima se construye con soluciones óptimas de subproblemas |
| Subproblemas solapados | el mismo subproblema aparece muchas veces |

La primera la comparte con divide y vencerás y con los voraces. **La segunda es la
que decide**: si no hay solapamiento, guardar resultados no aporta nada y divide y
vencerás es mejor.

## Los dos enfoques

### Descendente, con memorización

Se conserva la recursión y se guarda lo ya calculado.

```cpp
long long fib(int n, vector<long long> &memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
}
```

De $\Theta(2^n)$ a $\Theta(n)$ con tres líneas. Cada subproblema se resuelve una
vez y se consulta después.

### Ascendente, con tabla

Se resuelven los subproblemas en orden creciente de tamaño, sin recursión.

```cpp
long long fib(int n) {
    if (n <= 1) return n;
    long long anterior = 0, actual = 1;
    for (int i = 2; i <= n; i++) {
        long long siguiente = anterior + actual;
        anterior = actual;
        actual = siguiente;
    }
    return actual;
}
```

| | Descendente | Ascendente |
| --- | --- | --- |
| Estructura | recursión con tabla | bucles |
| Subproblemas resueltos | solo los que hacen falta | todos |
| Sobrecarga | llamadas y pila | ninguna |
| Ahorro de memoria | difícil | fácil: basta con guardar las filas necesarias |
| Escribirlo | inmediato desde la recursión | exige decidir el orden |

El ascendente permite el ahorro de memoria que se ve en el ejemplo: la tabla de
$n$ posiciones se reduce a dos variables, porque cada valor solo depende de los
dos anteriores. Es el mismo truco que aplica la mochila.

## Cómo se plantea

Cuatro pasos, y son los mismos para cualquier problema del tema:

1. **Caracterizar la estructura** de la solución óptima.
2. **Definir recursivamente** el valor óptimo.
3. **Calcularlo** de forma ascendente o con memorización.
4. **Reconstruir** la solución a partir de la tabla, si hace falta.

El paso 4 se olvida a menudo: la tabla da el **valor** óptimo, no la solución que
lo alcanza. Reconstruirla exige recorrer la tabla hacia atrás decidiendo qué
opción produjo cada valor, o guardar esa decisión al llenarla.

## Mochila 0-1

El problema que quedó pendiente en los temas 3 y 4.

$$M[i][w] = \begin{cases}
0 & \text{si } i = 0 \text{ o } w = 0\\
M[i-1][w] & \text{si } p_i > w\\
\max\bigl(M[i-1][w],\ v_i + M[i-1][w-p_i]\bigr) & \text{en otro caso}
\end{cases}$$

```cpp
int mochila(const vector<int> &peso, const vector<int> &valor, int W) {
    int n = peso.size();
    vector<vector<int>> M(n + 1, vector<int>(W + 1, 0));

    for (int i = 1; i <= n; i++) {
        for (int w = 0; w <= W; w++) {
            M[i][w] = M[i - 1][w];                      // no incluirlo
            if (peso[i - 1] <= w) {
                M[i][w] = max(M[i][w],
                              valor[i - 1] + M[i - 1][w - peso[i - 1]]);
            }
        }
    }
    return M[n][W];
}
```

Coste $\Theta(nW)$ en tiempo y en memoria. Recorriendo `w` **de mayor a menor** se
puede usar un solo vector en lugar de la matriz, y la memoria baja a $\Theta(W)$.

Una advertencia sobre ese coste: $\Theta(nW)$ **no es polinómico** en el tamaño de
la entrada, porque $W$ se codifica en $\log W$ bits. Se llama pseudopolinómico, y
es la razón por la que el problema sigue siendo NP-completo pese a tener este
algoritmo.

### Reconstruir qué objetos se toman

```cpp
int w = W;
for (int i = n; i > 0; i--) {
    if (M[i][w] != M[i - 1][w]) {      // el objeto i se tomo
        seleccionados.push_back(i - 1);
        w -= peso[i - 1];
    }
}
```

## Otros problemas del tema

### Subsecuencia común más larga

$$L[i][j] = \begin{cases}
0 & \text{si } i=0 \text{ o } j=0\\
L[i-1][j-1] + 1 & \text{si } x_i = y_j\\
\max(L[i-1][j],\ L[i][j-1]) & \text{en otro caso}
\end{cases}$$

Coste $\Theta(nm)$. Es la base de `diff` y de las medidas de similitud entre
cadenas.

### Distancia de edición

El menor número de inserciones, borrados y sustituciones para convertir una cadena
en otra:

$$D[i][j] = \min\bigl(D[i-1][j]+1,\ D[i][j-1]+1,\
D[i-1][j-1] + [x_i \ne y_j]\bigr)$$

Coste $\Theta(nm)$. Se usa en correctores ortográficos y en alineamiento de
secuencias biológicas.

### Multiplicación de una cadena de matrices

Con qué paréntesis se multiplica una cadena de matrices para hacer menos
operaciones escalares. El orden importa: multiplicar $A_{10\times100}$,
$B_{100\times5}$ y $C_{5\times50}$ como $(AB)C$ cuesta 7.500 operaciones y como
$A(BC)$, 75.000. **Diez veces**, sin cambiar el resultado.

$$M[i][j] = \min_{i \le k < j}\bigl(M[i][k] + M[k+1][j] + d_{i-1}d_k d_j\bigr)$$

Coste $\Theta(n^3)$.

### Floyd-Warshall

Caminos mínimos entre **todos** los pares de vértices:

```cpp
for (int k = 0; k < n; k++)
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            if (d[i][k] + d[k][j] < d[i][j])
                d[i][j] = d[i][k] + d[k][j];
```

Coste $\Theta(V^3)$, y **admite pesos negativos**, que es lo que Dijkstra no
podía. El bucle de `k` va por fuera: es el subproblema —«caminos que solo pasan
por los primeros $k$ vértices»— y ponerlo dentro produce un resultado incorrecto
sin que nada falle.

### Otros

| Problema | Recurrencia sobre | Coste |
| --- | --- | --- |
| Cambio de monedas general | cantidad restante | $\Theta(nC)$ |
| Subsecuencia creciente más larga | posición final | $\Theta(n^2)$, o $\Theta(n \log n)$ |
| Corte de varillas | longitud restante | $\Theta(n^2)$ |
| Bellman-Ford | número de aristas del camino | $\Theta(VE)$ |
| Distribución de tareas | conjunto ya asignado | exponencial en el número de tareas |

El cambio de monedas cierra el círculo con el tema 3: el voraz fallaba con el
sistema 1, 4, 6, y esta recurrencia da el óptimo para cualquier sistema.

## Comparación de las cuatro técnicas

| Técnica | Cuándo | Coste típico | Garantía |
| --- | --- | --- | --- |
| Divide y vencerás | subproblemas independientes | $\Theta(n \log n)$ | óptimo |
| Voraz | elección local demostrablemente óptima | $\Theta(n \log n)$ | óptimo si se demuestra |
| Programación dinámica | subproblemas solapados | polinómico o pseudopolinómico | óptimo |
| Vuelta atrás y poda | no hay algoritmo eficiente | exponencial en el peor caso | óptimo |

Y el mismo problema recorre las cuatro, que es la mejor forma de fijarlas:

| Problema | Técnica que lo resuelve | Por qué no las otras |
| --- | --- | --- |
| Mochila fraccionaria | voraz | la densidad decide y se puede partir |
| Mochila 0-1 | programación dinámica | el voraz falla; los subproblemas se solapan |
| Mochila 0-1 con $W$ enorme | ramificación y poda | la tabla no cabe |
| Ordenar | divide y vencerás | los subproblemas son independientes |
| Cambio con euros | voraz | el sistema de monedas lo permite |
| Cambio general | programación dinámica | el voraz da contraejemplos |

La pregunta que guía la elección: **¿los subproblemas se solapan?** Si no, divide y
vencerás. Si sí, programación dinámica. Y antes de las dos, comprobar si un voraz
demostrable resuelve el problema, porque será más rápido. El desarrollo de esta
técnica y sus problemas está en \cite{cormen2022}, \cite{brassard1997} y
\cite{roughgarden2022}.
