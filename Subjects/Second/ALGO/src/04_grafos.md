# Algoritmos para la exploración de grafos

Tema 4 del programa. Recorrer un grafo, y usar ese recorrido para explorar el
espacio de soluciones de un problema: vuelta atrás y ramificación y poda.

## Grafos

Un grafo $G=(V,E)$ son vértices y aristas. Puede ser dirigido o no, y ponderado o
no.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  every node/.style={draw, circle, minimum size=6mm, inner sep=0pt, font=\small},
  every edge/.style={draw, ->, >=stealth}
]
\node (a) at (0,1.2)   {A};
\node (b) at (2,1.9)   {B};
\node (c) at (2,0.4)   {C};
\node (d) at (4,1.2)   {D};
\node (e) at (6,1.2)   {E};

\path (a) edge node[draw=none,above left,font=\tiny]  {4} (b)
      (a) edge node[draw=none,below left,font=\tiny]  {2} (c)
      (b) edge node[draw=none,above right,font=\tiny] {5} (d)
      (c) edge node[draw=none,below right,font=\tiny] {8} (d)
      (c) edge node[draw=none,above,font=\tiny]       {1} (b)
      (d) edge node[draw=none,above,font=\tiny]       {3} (e);
\end{tikzpicture}
\end{center}
```

### Representación

| | Matriz de adyacencia | Listas de adyacencia |
| --- | --- | --- |
| Espacio | $\Theta(V^2)$ | $\Theta(V+E)$ |
| ¿Existe la arista $(u,v)$? | $\Theta(1)$ | $\Theta(\deg u)$ |
| Recorrer los vecinos de $u$ | $\Theta(V)$ | $\Theta(\deg u)$ |
| Conviene con | grafos densos | grafos dispersos |

Los grafos reales son casi siempre dispersos, así que las listas son la opción por
omisión. La diferencia no es menor: con un millón de vértices, la matriz pide un
billón de posiciones.

## Recorridos

### En anchura

Visita por niveles, con una cola.

```cpp
void anchura(const Grafo &g, int origen) {
    vector<bool> visitado(g.n, false);
    queue<int> q;
    visitado[origen] = true;
    q.push(origen);

    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : g.ady[u]) {
            if (!visitado[v]) {
                visitado[v] = true;
                q.push(v);
            }
        }
    }
}
```

Coste $\Theta(V+E)$. Marcar al **encolar** y no al desencolar es lo que evita que
un vértice entre varias veces en la cola.

Su propiedad útil: en un grafo **sin pesos** encuentra el camino con menos
aristas, porque explora por niveles. Es Dijkstra sin cola de prioridad, y para ese
caso es mejor que Dijkstra.

### En profundidad

Avanza todo lo posible antes de retroceder, con una pila o con recursión.

```cpp
void profundidad(const Grafo &g, int u, vector<bool> &visitado) {
    visitado[u] = true;
    for (int v : g.ady[u]) {
        if (!visitado[v]) profundidad(g, v, visitado);
    }
}
```

Coste $\Theta(V+E)$. Los tiempos de descubrimiento y de finalización que se pueden
anotar en cada vértice clasifican las aristas —de árbol, de retroceso, de avance y
cruzadas—, y de ahí salen tres resultados:

| Aplicación | Cómo |
| --- | --- |
| Detección de ciclos | existe una arista de retroceso |
| Orden topológico | el orden inverso al de finalización |
| Componentes fuertemente conexas | Tarjan o Kosaraju, dos recorridos |

| | Anchura | Profundidad |
| --- | --- | --- |
| Estructura | cola | pila o recursión |
| Memoria | hasta $\Theta(V)$ por nivel | proporcional a la profundidad |
| Encuentra el camino más corto sin pesos | sí | no |
| Adecuada para | proximidad al origen | ciclos, topológico, conectividad |

## Exploración del espacio de soluciones

Muchos problemas no tienen un algoritmo eficiente conocido, y hay que explorar las
posibilidades. Ese espacio se modela como un **árbol de decisiones**: cada nivel
fija una componente de la solución.

Recorrerlo entero es exponencial. Las dos técnicas del tema consisten en **no
recorrerlo entero**.

## Vuelta atrás

Recorrido en profundidad del árbol de soluciones, abandonando una rama en cuanto
se sabe que no lleva a ninguna solución válida.

```
funcion vuelta_atras(solucion_parcial):
    si es_solucion_completa(solucion_parcial):
        registrar
        return
    para cada candidato c:
        si es_prometedor(solucion_parcial + c):
            vuelta_atras(solucion_parcial + c)
            deshacer c          // el paso que da nombre a la tecnica
```

`deshacer` es lo que distingue la técnica: el estado se modifica al descender y se
restaura al volver, así que no hace falta copiar la solución parcial en cada
llamada.

### Las ocho reinas

Colocar ocho reinas en un tablero sin que se ataquen.

```cpp
bool seguro(const vector<int> &col, int fila, int c) {
    for (int f = 0; f < fila; f++) {
        if (col[f] == c) return false;                 // misma columna
        if (abs(col[f] - c) == abs(f - fila)) return false;  // diagonal
    }
    return true;
}

void reinas(vector<int> &col, int fila, int n, int &soluciones) {
    if (fila == n) { soluciones++; return; }
    for (int c = 0; c < n; c++) {
        if (seguro(col, fila, c)) {
            col[fila] = c;
            reinas(col, fila + 1, n, soluciones);
            // deshacer: col[fila] se sobrescribe en la vuelta siguiente
        }
    }
}
```

Representar el tablero como un vector con la columna de cada fila ya elimina por
construcción las colocaciones con dos reinas en la misma fila. **Elegir bien la
representación poda más que cualquier comprobación posterior**: el espacio pasa de
$\binom{64}{8} \approx 4\cdot10^9$ a $8^8 = 16{.}777{.}216$, y la poda lo deja en
unos 2.000 nodos.

### Otros problemas del esquema

| Problema | Decisión por nivel | Poda |
| --- | --- | --- |
| Sudoku | valor de una casilla | el valor ya está en fila, columna o bloque |
| Coloreado de grafos | color de un vértice | un vecino ya tiene ese color |
| Suma de subconjuntos | incluir o no un elemento | la suma parcial ya se pasa |
| Laberinto | dirección | casilla visitada o muro |
| Ciclo hamiltoniano | siguiente vértice | ya visitado, o no adyacente |

## Ramificación y poda

Para problemas de **optimización**, no de satisfacción. Se explora con una función
que estima el mejor valor alcanzable desde cada nodo, y se descartan los nodos
cuya estimación es peor que la mejor solución encontrada.

| | Vuelta atrás | Ramificación y poda |
| --- | --- | --- |
| Objetivo | encontrar soluciones válidas | encontrar la óptima |
| Recorrido | en profundidad | por prioridad, con cota |
| Estructura | pila o recursión | cola de prioridad |
| Poda | por factibilidad | por factibilidad **y** por cota |

La **cota** es la pieza central:

- En un problema de **maximización**, la cota es superior: si la mejor estimación
  de un nodo no supera la mejor solución ya encontrada, la rama se descarta.
- En uno de **minimización**, al revés.

Una cota es válida si nunca es pesimista: en maximización debe ser mayor o igual
que el óptimo alcanzable. Una cota optimista de más poda poco; una que no lo sea
lo bastante **descarta el óptimo**, y ese es el error grave de la técnica.

### Mochila 0-1

Que el tema 3 no podía resolver con un voraz.

```
cota(nodo) = valor acumulado
           + valor de los objetos completos que aún caben
           + fraccion del siguiente objeto      <- optimista a proposito
```

La cota usa la solución **fraccionaria**, que es siempre mayor o igual que la
entera. Por eso es válida, y por eso es buena: está cerca del óptimo real, así
que poda mucho.

```cpp
struct Nodo { int nivel, valor, peso; double cota; };

int mochila01(const vector<Objeto> &obj, int W) {
    // objetos ordenados por densidad decreciente
    priority_queue<Nodo> cola;          // ordenada por cota
    int mejor = 0;
    cola.push(raiz);

    while (!cola.empty()) {
        Nodo n = cola.top(); cola.pop();
        if (n.cota <= mejor) continue;          // poda por cota
        // ramificar: incluir el objeto n.nivel, o no incluirlo
    }
    return mejor;
}
```

Explorar primero el nodo de mejor cota es lo que hace que aparezca pronto una
solución buena, y una solución buena poda mucho más. De ahí que la estructura sea
una cola de prioridad y no una pila.

### El viajante de comercio

El problema clásico. El espacio son $(n-1)!$ rutas, así que enumerarlas es
imposible más allá de unas quince ciudades.

Con ramificación y poda se resuelven instancias mucho mayores, usando como cota la
suma de la arista más barata de cada ciudad no visitada. Y sigue siendo
exponencial en el peor caso: la técnica reduce el árbol, no la complejidad.

## Sobre la dificultad

El viajante, la mochila 0-1, el coloreado y el ciclo hamiltoniano son
**NP-completos**: no se conoce algoritmo polinómico, y si apareciera uno para
cualquiera de ellos los resolvería todos.

Saberlo cambia lo que se busca. Para un problema NP-completo las salidas
razonables son tres, y ninguna es «encontrar el algoritmo eficiente»:

| Salida | Qué da |
| --- | --- |
| Exacta con poda | el óptimo, para tamaños moderados |
| Aproximación | solución con garantía de calidad, en tiempo polinómico |
| Heurística o metaheurística | solución buena sin garantía |

La primera es lo que este tema enseña. Las otras dos son materia de cursos
posteriores. La exploración de grafos y estas técnicas están desarrolladas en
\cite{cormen2022}, \cite{horowitz2007} y \cite{skiena2020}.
