# Algoritmos voraces

Tema 3 del programa. Construir la solución tomando en cada paso la opción que
parece mejor en ese momento, sin reconsiderar.

## El esquema

```
funcion voraz(C):            // C es el conjunto de candidatos
    S = vacio
    mientras C no este vacio y S no sea solucion:
        x = seleccionar(C)   // el mejor segun la funcion de seleccion
        C = C - {x}
        si factible(S + {x}):
            S = S + {x}
    si S es solucion: devolver S
    si no: no hay solucion
```

Cinco componentes, y describirlos es la forma de plantear cualquier problema de
este tema:

| Componente | Qué es |
| --- | --- |
| Conjunto de candidatos | de dónde se elige |
| Función de selección | cuál se toma en cada paso |
| Función de factibilidad | si añadirlo puede llevar a una solución |
| Criterio de solución | cuándo se ha terminado |
| Función objetivo | qué se optimiza |

La característica que lo define: **una vez tomada una decisión no se revisa**. De
ahí que sea rápido y de ahí que no siempre acierte.

## Cuándo es correcto

Un algoritmo voraz da la solución óptima si el problema tiene dos propiedades:

- **Subestructura óptima.** La solución óptima contiene soluciones óptimas de sus
  subproblemas.
- **Propiedad de elección voraz.** Existe una solución óptima que contiene la
  primera elección voraz.

Comprobarlas exige demostración. Suponer que un voraz funciona porque parece
razonable es el error característico del tema, y por eso los contraejemplos de
más abajo son parte del contenido.

## Cambio de monedas

Devolver una cantidad con el menor número de monedas, tomando siempre la de mayor
valor que quepa.

```cpp
vector<int> cambio(int cantidad, const vector<int> &valores) {
    vector<int> uso(valores.size(), 0);
    for (size_t i = 0; i < valores.size(); i++) {   // ordenados de mayor a menor
        uso[i] = cantidad / valores[i];
        cantidad %= valores[i];
    }
    return uso;   // valido solo si cantidad acabo en 0
}
```

Con el sistema de monedas del euro es óptimo. **Y no lo es en general**:

| Sistema | Cantidad | Voraz | Óptimo |
| --- | ---: | --- | --- |
| 1, 5, 10, 20, 50 | 30 | 20 + 10 (2 monedas) | 2 monedas |
| 1, 4, 6 | 8 | 6 + 1 + 1 (3 monedas) | 4 + 4 (2 monedas) |
| 1, 3, 4 | 6 | 4 + 1 + 1 (3 monedas) | 3 + 3 (2 monedas) |

Las dos últimas filas son el contraejemplo: el mismo algoritmo, un sistema de
monedas distinto, y deja de ser óptimo. Para un sistema arbitrario hace falta
programación dinámica.

## Mochila fraccionaria

Objetos con peso $p_i$ y valor $v_i$, y una mochila de capacidad $W$. Se pueden
partir los objetos.

Selección: por **densidad de valor** $v_i/p_i$ decreciente.

```cpp
struct Objeto { double peso, valor; };

double mochilaFraccionaria(vector<Objeto> obj, double W) {
    sort(obj.begin(), obj.end(), [](const Objeto &a, const Objeto &b) {
        return a.valor / a.peso > b.valor / b.peso;
    });

    double total = 0.0;
    for (const Objeto &o : obj) {
        if (W <= 0) break;
        double tomar = min(o.peso, W);
        total += o.valor * (tomar / o.peso);
        W -= tomar;
    }
    return total;
}
```

Coste $\Theta(n \log n)$, dominado por la ordenación, y **es óptimo**: siempre
existe una solución óptima que empieza tomando todo lo posible del objeto de mayor
densidad.

**La versión 0-1, en la que los objetos no se pueden partir, no la resuelve el
voraz.** Con capacidad 10 y objetos $(6, 30)$, $(5, 20)$ y $(5, 20)$, la densidad
elige el primero y llega a 50; el óptimo son los dos últimos, 40… y con
$(6, 30)$, $(5, 25)$, $(5, 25)$ la densidad elige el primero, 30 + nada, mientras
el óptimo es 50. Es el mismo problema con una restricción más, y cambia de
técnica: va a programación dinámica.

## Planificación de tareas

**Con plazos y penalizaciones.** Tareas de duración unitaria, cada una con un
plazo y un beneficio si se cumple. Se ordenan por beneficio decreciente y cada una
se coloca lo más tarde posible dentro de su plazo. Óptimo, y se demuestra con la
teoría de matroides.

**Minimizar el tiempo medio de espera.** Con tareas de duración distinta en un
solo servidor, ordenarlas por duración creciente minimiza la espera media. La
demostración es un intercambio: si dos tareas consecutivas están en el orden
contrario, intercambiarlas no empeora.

Es el mismo resultado que la planificación SJF de sistemas operativos, y aquí se
demuestra en vez de afirmarse.

## Códigos de Huffman

Compresión sin pérdida: los símbolos frecuentes reciben códigos cortos.

```
1. Cada simbolo es un arbol de un nodo, con su frecuencia.
2. Mientras quede mas de un arbol:
      tomar los dos de menor frecuencia
      unirlos bajo una raiz con la suma de sus frecuencias
3. El arbol resultante define el codigo: izquierda 0, derecha 1.
```

Con frecuencias A:45, B:13, C:12, D:16, E:9, F:5:

<!--
El separador de los rotulos va en modo matematico a proposito. Un `·` de texto
a tamano \tiny pide la fuente tcrm0500, que el TeX del visor no trae, y ahi la
figura se queda cargando para siempre sin decir por que. En el PDF sale igual.
-->

```{=latex}
\begin{center}
\begin{tikzpicture}[
  level distance=11mm,
  level 1/.style={sibling distance=42mm},
  level 2/.style={sibling distance=21mm},
  level 3/.style={sibling distance=13mm},
  every node/.style={draw, circle, inner sep=1.4pt, font=\scriptsize}
]
\node {100}
  child { node[label={below:{\tiny A $\cdot$ 0}}] {45}
          edge from parent node[draw=none,left,font=\tiny] {0} }
  child { node {55}
    child { node {25}
      child { node[label={below:{\tiny C $\cdot$ 100}}] {12}
              edge from parent node[draw=none,left,font=\tiny] {0} }
      child { node[label={[xshift=-3mm]below:{\tiny B $\cdot$ 101}}] {13}
              edge from parent node[draw=none,right,font=\tiny] {1} }
      edge from parent node[draw=none,left,font=\tiny] {0} }
    child { node {30}
      child { node {14}
        child { node[label={below:{\tiny F $\cdot$ 1100}}] {5}
                edge from parent node[draw=none,left,font=\tiny] {0} }
        child { node[label={below:{\tiny E $\cdot$ 1101}}] {9}
                edge from parent node[draw=none,right,font=\tiny] {1} }
        edge from parent node[draw=none,left,font=\tiny] {0} }
      child { node[label={below:{\tiny D $\cdot$ 111}}] {16}
              edge from parent node[draw=none,right,font=\tiny] {1} }
      edge from parent node[draw=none,right,font=\tiny] {1} }
    edge from parent node[draw=none,right,font=\tiny] {1} };
\end{tikzpicture}
\end{center}
```

El símbolo más frecuente queda a profundidad 1 y los raros abajo, que es
exactamente lo que minimiza la longitud media. Coste $\Theta(n \log n)$ con una
cola de prioridad, y **es óptimo** entre los códigos de prefijo.

Un **código de prefijo** es aquel en el que ningún código es prefijo de otro, y
eso es lo que permite descodificar sin separadores: al recorrer el árbol desde la
raíz, cada hoja alcanzada es un símbolo completo.

## Árbol de recubrimiento mínimo

Conectar todos los vértices de un grafo con el menor peso total.

**Kruskal.** Ordena las aristas por peso y añade la siguiente si no forma ciclo.

```cpp
sort(aristas.begin(), aristas.end(), porPeso);
ConjuntosDisjuntos cd(n);
for (const Arista &a : aristas) {
    if (cd.buscar(a.u) != cd.buscar(a.v)) {
        cd.unir(a.u, a.v);
        arbol.push_back(a);
    }
}
```

Coste $\Theta(E \log E)$. La estructura de **conjuntos disjuntos** con unión por
rango y compresión de caminos hace que comprobar el ciclo cueste prácticamente
constante.

**Prim.** Parte de un vértice y añade en cada paso la arista de menor peso que
conecta el árbol con un vértice de fuera. Coste $\Theta(E \log V)$ con montículo.

| | Kruskal | Prim |
| --- | --- | --- |
| Crece | por aristas sueltas, varios fragmentos | desde un único árbol |
| Estructura clave | conjuntos disjuntos | cola de prioridad |
| Mejor con | grafos dispersos | grafos densos |

Los dos son óptimos, y la demostración es la misma: la **propiedad del corte**.
Para cualquier partición de los vértices, la arista de menor peso que la cruza
pertenece a algún árbol de recubrimiento mínimo.

## Dijkstra

Camino más corto desde un origen, con pesos no negativos. Es voraz: en cada paso
fija definitivamente el vértice no visitado con menor distancia.

```cpp
vector<int> dijkstra(const Grafo &g, int origen) {
    vector<int> dist(g.n, INF);
    priority_queue<pair<int,int>, vector<pair<int,int>>, greater<>> cola;
    dist[origen] = 0;
    cola.push({0, origen});

    while (!cola.empty()) {
        auto [d, u] = cola.top(); cola.pop();
        if (d > dist[u]) continue;                 // entrada obsoleta
        for (const auto &[v, peso] : g.ady[u]) {
            if (dist[u] + peso < dist[v]) {
                dist[v] = dist[u] + peso;
                cola.push({dist[v], v});
            }
        }
    }
    return dist;
}
```

Coste $\Theta((V+E) \log V)$.

**Falla con pesos negativos**, y la razón es exactamente la del tema: al fijar un
vértice supone que no hay forma de llegar más barato, y una arista negativa
posterior lo desmiente. La decisión no se revisa, así que el error se queda. Para
pesos negativos está Bellman-Ford, que sí revisa: relaja todas las aristas $V-1$
veces.

## Resumen

| Problema | Voraz óptimo | Por qué |
| --- | :-: | --- |
| Mochila fraccionaria | sí | se puede partir el objeto |
| Mochila 0-1 | **no** | la elección puede desperdiciar capacidad |
| Cambio con euros | sí | por el sistema de monedas |
| Cambio general | **no** | contraejemplo con 1, 4, 6 |
| Huffman | sí | óptimo entre los códigos de prefijo |
| Kruskal y Prim | sí | propiedad del corte |
| Dijkstra con pesos $\ge 0$ | sí | ninguna arista puede abaratar lo ya fijado |
| Dijkstra con pesos negativos | **no** | la decisión fijada deja de valer |

La lección del tema: un voraz es rápido y hay que **demostrar** que acierta. Las
tres filas en negrita son problemas donde el voraz da una respuesta razonable y
equivocada, que es la peor combinación. El desarrollo de la técnica y sus
demostraciones está en \cite{brassard1997}, \cite{cormen2022} y
\cite{kleinberg2005}.
