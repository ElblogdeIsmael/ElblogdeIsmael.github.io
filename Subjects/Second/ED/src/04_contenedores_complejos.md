# Tipos de datos contenedores complejos

Tema 4 del programa. Árboles, tablas hash y grafos, con sus implementaciones. Son
las estructuras que hacen posible buscar en tiempo logarítmico o constante donde un
contenedor lineal necesitaría recorrerlo todo.

## Árboles

Estructura jerárquica: un nodo raíz y, colgando de él, subárboles. La terminología
que se usa en todo el tema:

| Término | Qué es |
| --- | --- |
| Raíz | el único nodo sin padre |
| Hoja | nodo sin hijos |
| Grado | número de hijos de un nodo |
| Profundidad de un nodo | aristas desde la raíz hasta él |
| Altura del árbol | profundidad máxima |
| Nivel $k$ | conjunto de nodos a profundidad $k$ |

```{=latex}
\begin{center}
\begin{tikzpicture}[
  every node/.style={draw, circle, minimum size=7mm, font=\small},
  level 1/.style={sibling distance=32mm},
  level 2/.style={sibling distance=16mm},
  level distance=13mm
]
\node {50}
  child { node {30}
    child { node {20} }
    child { node {40} } }
  child { node {70}
    child { node {60} }
    child { node {85} } };
\end{tikzpicture}
\end{center}
```

**La altura es lo que determina el coste.** Un árbol binario con $n$ nodos tiene
altura mínima $\lfloor \log_2 n \rfloor$ si está lleno, y altura $n-1$ si degenera
en una lista. Toda la teoría de árboles equilibrados existe para evitar el segundo
caso.

### Recorridos

| Recorrido | Orden | Para qué sirve |
| --- | --- | --- |
| Preorden | raíz, izquierdo, derecho | copiar el árbol, serializarlo |
| Inorden | izquierdo, raíz, derecho | listar ordenado en un ABB |
| Postorden | izquierdo, derecho, raíz | liberar memoria, evaluar expresiones |
| Por niveles | de arriba abajo, de izquierda a derecha | búsqueda en anchura |

```cpp
void inorden(Nodo* n) {
  if (n != nullptr) {
    inorden(n->izq);
    visitar(n);
    inorden(n->der);
  }
}
```

Los tres primeros son recursivos y cuestan $\Theta(n)$. El de niveles no es
recursivo: **necesita una cola**, y ahí se ve por qué el tema anterior viene antes.

```{=latex}
\begin{anotacion}
El postorden es el único que sirve para destruir un árbol. Liberar la raíz antes de
recorrer los hijos deja los punteros a los subárboles en memoria ya liberada, y el
árbol entero se pierde sin llegar a liberarse.
\end{anotacion}
```

### Árboles binarios de búsqueda

Un ABB impone un invariante: para todo nodo, las claves del subárbol izquierdo son
menores y las del derecho mayores.

```{=latex}
\begin{definicion}[Árbol binario de búsqueda]
Árbol binario en el que, para todo nodo $x$, toda clave del subárbol izquierdo de
$x$ es menor que la de $x$, y toda clave del subárbol derecho es mayor.
\end{definicion}
```

De ese invariante salen tres consecuencias inmediatas:

- Buscar es descender comparando: en cada nodo se descarta medio árbol.
- El recorrido en inorden produce las claves ordenadas.
- El mínimo está bajando siempre a la izquierda, y el máximo a la derecha.

```cpp
Nodo* buscar(Nodo* n, const T& k) {
  while (n != nullptr && n->clave != k)
    n = (k < n->clave) ? n->izq : n->der;
  return n;
}
```

El coste de todas las operaciones es $\Theta(h)$, con $h$ la altura. Y ahí está el
problema: **insertar claves ya ordenadas produce una lista**.

```{=latex}
\begin{ejemplo}
Insertando $1, 2, 3, 4, 5$ en ese orden, cada clave es mayor que todas las
anteriores y acaba colgando a la derecha de la última. El resultado es un árbol de
altura 4 con cinco nodos: la búsqueda pasa de $\Theta(\log n)$ a $\Theta(n)$ y la
estructura no es mejor que una lista, solo más cara en memoria.
\end{ejemplo}
```

El borrado tiene tres casos y conviene tenerlos claros:

| Caso | Qué se hace |
| --- | --- |
| Hoja | se elimina sin más |
| Un hijo | el hijo ocupa el lugar del padre |
| Dos hijos | se sustituye por el mayor del subárbol izquierdo, o el menor del derecho, y se borra ese |

El tercero funciona porque ese sustituto es el único valor que conserva el
invariante, y por construcción tiene como mucho un hijo, así que su borrado cae en
uno de los dos casos anteriores.

### Árboles equilibrados

Mantienen la altura en $\Theta(\log n)$ reorganizándose al insertar y al borrar.

| Tipo | Criterio de equilibrio | Altura |
| --- | --- | --- |
| AVL | las alturas de los subárboles difieren como mucho en 1 | $\le 1{,}44\log_2 n$ |
| Rojo-negro | ningún camino es más del doble de largo que otro | $\le 2\log_2 n$ |
| B / B+ | todas las hojas al mismo nivel, grado alto | $\log_m n$ |

La reorganización se hace con **rotaciones**, que cambian la forma sin romper el
invariante de orden:

```{=latex}
\begin{center}
\begin{tikzpicture}[
  every node/.style={draw, circle, minimum size=6.5mm, font=\small},
  level distance=11mm, level 1/.style={sibling distance=18mm},
  level 2/.style={sibling distance=12mm}
]
\node {y} child { node {x} child { node[draw=none] {$A$} } child { node[draw=none] {$B$} } }
          child { node[draw=none] {$C$} };
\begin{scope}[xshift=55mm]
\node {x} child { node[draw=none] {$A$} }
          child { node {y} child { node[draw=none] {$B$} } child { node[draw=none] {$C$} } };
\end{scope}
\node[draw=none, font=\Large] at (3.1,-1.1) {$\leftrightarrow$};
\end{tikzpicture}
\end{center}
```

En los dos lados, el recorrido en inorden da $A, x, B, y, C$. Esa es la propiedad
que hace correcta la rotación, y la que hay que comprobar al implementarla.

Un AVL está más equilibrado y busca algo más rápido; un rojo-negro rota menos y
inserta y borra algo más rápido. Por eso las bibliotecas estándar —incluida la de
C++— usan rojo-negro para `map` y `set`.

Los **árboles B** son distintos en propósito: cada nodo guarda muchas claves para
que un nodo entero quepa en un bloque de disco. Con grado 100, un millón de claves
caben en tres niveles, y eso son tres lecturas de disco en vez de veinte. Es la
estructura de los índices de cualquier base de datos.

### Montículos

Un montículo binario es un árbol **completo** —todos los niveles llenos salvo el
último, que se rellena de izquierda a derecha— con el invariante de que todo padre
es mayor o igual que sus hijos.

Que sea completo permite guardarlo en un vector sin punteros:

| Nodo en la posición $i$ | Está en |
| --- | --- |
| Padre | $(i-1)/2$ |
| Hijo izquierdo | $2i+1$ |
| Hijo derecho | $2i+2$ |

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.95]
\foreach \i/\v in {0/50, 1/30, 2/45, 3/12, 4/25, 5/40} {
  \draw (\i*1.0,0) rectangle ++(1.0,0.7);
  \node[font=\small] at (\i*1.0+0.5,0.35) {\v};
  \node[font=\scriptsize] at (\i*1.0+0.5,-0.28) {\i};
}
\end{tikzpicture}
\end{center}
```

Las dos operaciones que lo mantienen:

- **Flotar**: tras insertar al final, el nuevo elemento sube mientras sea mayor que
  su padre. $\Theta(\log n)$.
- **Hundir**: tras extraer la raíz y poner el último en su lugar, baja mientras sea
  menor que alguno de sus hijos. $\Theta(\log n)$.

Con eso, la cola con prioridad del tema anterior queda resuelta en $\Theta(\log n)$
para las dos operaciones. Y de regalo sale **heapsort**: construir el montículo en
$\Theta(n)$ y extraer el máximo $n$ veces da una ordenación $\Theta(n\log n)$ sin
memoria auxiliar.

## Tablas hash

La idea es distinta de la de los árboles: en vez de comparar, **calcular** dónde
está el elemento. Una función hash convierte la clave en un índice.

$$h: \text{claves} \longrightarrow \{0, 1, \dots, m-1\}$$

Si no hubiera colisiones, la búsqueda sería un cálculo y un acceso: $\Theta(1)$.
Pero el número de claves posibles supera al de posiciones, así que **las colisiones
son inevitables** y toda la técnica consiste en gestionarlas.

### La función hash

Una buena función hash cumple tres cosas:

| Propiedad | Por qué |
| --- | --- |
| Reparte uniformemente | si no, se amontonan las colisiones |
| Es rápida | se ejecuta en cada operación |
| Usa toda la clave | si no, claves parecidas colisionan |

La tercera es la que se incumple con más frecuencia. Una función que solo mira los
tres primeros caracteres de una cadena manda todos los apellidos que empiezan igual
a la misma posición.

Dos métodos habituales:

- **División**: $h(k) = k \bmod m$, con $m$ primo. Que sea primo importa: con
  $m = 2^p$ la función solo mira los $p$ bits bajos de la clave.
- **Multiplicación**: $h(k) = \lfloor m\,(kA - \lfloor kA \rfloor) \rfloor$ con
  $0 < A < 1$. No exige nada de $m$.

### Resolución de colisiones

**Encadenamiento.** Cada posición guarda una lista con todas las claves que caen
ahí.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  celda/.style={draw, minimum width=8mm, minimum height=6mm},
  nodo/.style={draw, minimum width=9mm, minimum height=6mm, font=\small},
  >=stealth
]
\foreach \i in {0,...,4} \node[celda] (c\i) at (0,-\i*0.75) {};
\foreach \i in {0,...,4} \node[font=\scriptsize, left=1mm of c\i] {\i};
\node[nodo] (a) at (1.6,0) {14};
\node[nodo] (b) at (2.9,0) {29};
\draw[->] (c0.east) -- (a.west);
\draw[->] (a.east) -- (b.west);
\node[nodo] (d) at (1.6,-1.5) {7};
\draw[->] (c2.east) -- (d.west);
\node[nodo] (e) at (1.6,-3.0) {23};
\draw[->] (c4.east) -- (e.west);
\end{tikzpicture}
\end{center}
```

**Direccionamiento abierto.** Todo se guarda en la propia tabla; al colisionar se
prueban otras posiciones según una secuencia:

| Sondeo | Secuencia | Problema |
| --- | --- | --- |
| Lineal | $h(k) + i$ | agrupamiento primario: se forman bloques largos |
| Cuadrático | $h(k) + c_1 i + c_2 i^2$ | agrupamiento secundario |
| Doble hash | $h_1(k) + i\,h_2(k)$ | el mejor reparto, y el más caro |

### El factor de carga

$$\alpha = \frac{n}{m}$$

Es la cantidad que gobierna el rendimiento. Con encadenamiento, la longitud media
de una lista es $\alpha$, así que la búsqueda cuesta $\Theta(1 + \alpha)$. Con
direccionamiento abierto el número medio de sondeos es aproximadamente
$1/(1-\alpha)$, que **se dispara al acercarse a 1**: con $\alpha = 0{,}9$ son diez
sondeos, y con $0{,}99$, cien.

Por eso las implementaciones reales **rehacen la tabla** cuando $\alpha$ pasa de un
umbral, típicamente 0,75: se dobla $m$ y se reinsertan todas las claves. Cuesta
$\Theta(n)$ y ocurre pocas veces, así que el coste amortizado sigue siendo constante.

```{=latex}
\begin{anotacion}
El borrado con direccionamiento abierto no puede dejar el hueco vacío: cortaría la
secuencia de sondeo y las claves que estaban detrás se volverían inalcanzables. Se
marca la posición como borrada, y esas marcas hay que contarlas en el factor de
carga.
\end{anotacion}
```

### Hash frente a árbol

| | Tabla hash | Árbol equilibrado |
| --- | --- | --- |
| Búsqueda, caso medio | $\Theta(1)$ | $\Theta(\log n)$ |
| Búsqueda, peor caso | $\Theta(n)$ | $\Theta(\log n)$ |
| Recorrido ordenado | no | sí |
| Mínimo, máximo, rango | no | sí |
| Requiere de la clave | función hash e igualdad | orden total |
| Memoria | huecos reservados | punteros por nodo |

La fila del peor caso importa más de lo que parece: una tabla hash con una función
mal elegida degenera en una lista, y hay ataques que consisten justamente en enviar
claves que colisionan a propósito.

## Grafos

Un conjunto de vértices y de aristas que los conectan. Es la estructura más general
del temario: un árbol es un grafo conexo sin ciclos, y una lista es un árbol
degenerado.

| Concepto | Qué es |
| --- | --- |
| Dirigido | las aristas tienen sentido |
| Ponderado | las aristas llevan un peso |
| Camino | secuencia de vértices unidos por aristas |
| Ciclo | camino que vuelve al origen |
| Conexo | hay camino entre todo par de vértices |
| Grado | número de aristas incidentes en un vértice |

### Representación

```{=latex}
\begin{center}
\begin{tikzpicture}[
  every node/.style={draw, circle, minimum size=7mm, font=\small},
  >=stealth, node distance=18mm
]
\node (a) {A};
\node (b) [right=of a] {B};
\node (c) [below=12mm of a] {C};
\node (d) [below=12mm of b] {D};
\draw[->] (a) -- (b);
\draw[->] (a) -- (c);
\draw[->] (b) -- (d);
\draw[->] (c) -- (d);
\end{tikzpicture}
\end{center}
```

| Representación | Espacio | ¿Hay arista $(u,v)$? | Recorrer vecinos de $u$ |
| --- | --- | --- | --- |
| Matriz de adyacencia | $\Theta(V^2)$ | $\Theta(1)$ | $\Theta(V)$ |
| Listas de adyacencia | $\Theta(V+E)$ | $\Theta(\text{grado})$ | $\Theta(\text{grado})$ |

La elección depende de la densidad. Un grafo **disperso** —redes sociales, mapas de
carreteras, dependencias entre módulos— tiene $E \ll V^2$ y desperdicia casi toda la
matriz. Un grafo **denso** aprovecha la matriz y gana en la consulta directa. En la
práctica la mayoría de los grafos reales son dispersos, así que la lista de
adyacencia es la opción por defecto.

### Recorridos

| Recorrido | Estructura auxiliar | Qué encuentra |
| --- | --- | --- |
| Profundidad (DFS) | pila, o recursión | componentes conexas, ciclos, orden topológico |
| Anchura (BFS) | cola | camino más corto en número de aristas |

Los dos cuestan $\Theta(V+E)$ con listas de adyacencia y **necesitan marcar los
vértices visitados**. Sin esa marca, un ciclo hace que el recorrido no termine
nunca. Es el error más común al implementarlos.

```cpp
void bfs(const Grafo& g, int origen) {
  std::vector<bool> visitado(g.numVertices(), false);
  std::queue<int> cola;
  visitado[origen] = true;
  cola.push(origen);
  while (!cola.empty()) {
    int u = cola.front(); cola.pop();
    for (int v : g.vecinos(u))
      if (!visitado[v]) { visitado[v] = true; cola.push(v); }
  }
}
```

Que BFS dé el camino más corto en número de aristas se ve en la propia cola: los
vértices salen por niveles de distancia creciente al origen, así que el primero que
alcanza un vértice lo hace por el camino más corto.

### Problemas clásicos

| Problema | Algoritmo | Coste |
| --- | --- | --- |
| Camino mínimo con pesos no negativos | Dijkstra | $\Theta((V+E)\log V)$ con montículo |
| Camino mínimo con pesos negativos | Bellman-Ford | $\Theta(VE)$ |
| Árbol de recubrimiento mínimo | Prim, Kruskal | $\Theta(E\log V)$ |
| Orden topológico | DFS sobre un grafo acíclico dirigido | $\Theta(V+E)$ |
| Componentes conexas | DFS o BFS repetidos | $\Theta(V+E)$ |

Los detalles de estos algoritmos son materia de Algorítmica. Lo que corresponde a
esta asignatura es que **su coste depende de la estructura que los sostiene**:
Dijkstra sobre una lista sin ordenar es $\Theta(V^2)$ y sobre un montículo es
$\Theta((V+E)\log V)$. El algoritmo es el mismo; lo que cambia es el TDA.

## Ejercicios

```{=latex}
\begin{ejercicio}
Insertar $10, 20, 30, 40, 50$ en un ABB vacío, en ese orden. ¿Qué altura tiene?
¿Cuánto costaría buscar el 50?
\end{ejercicio}

\begin{solucion}
Cada clave es mayor que todas las anteriores, así que cuelga siempre a la derecha:
el árbol es una lista descendente de altura 4. Buscar el 50 exige recorrerla entera,
$\Theta(n)$. Es el caso degenerado que motiva los árboles equilibrados; un AVL
habría rotado y quedado con altura 2.
\end{solucion}

\begin{ejercicio}
Una tabla hash con encadenamiento tiene $m = 100$ y $n = 300$ claves bien
repartidas. ¿Cuántas comparaciones cuesta una búsqueda infructuosa?
\end{ejercicio}

\begin{solucion}
El factor de carga es $\alpha = 3$, así que la longitud media de cada lista es 3 y
una búsqueda infructuosa la recorre entera: tres comparaciones de media. Sigue
siendo constante respecto a $n$, pero la constante crece con $\alpha$, y por eso se
rehace la tabla en vez de dejarla llenarse.
\end{solucion}

\begin{ejercicio}
Un grafo tiene 10\,000 vértices y 30\,000 aristas. ¿Matriz o listas de adyacencia?
\end{ejercicio}

\begin{solucion}
Listas. La matriz ocuparía $10^8$ posiciones para almacenar 30\,000 aristas, con una
densidad del 0,03\,\%. Las listas ocupan $\Theta(V+E) = 40\,000$ entradas. La matriz
solo compensaría si hiciesen falta muchísimas consultas de la forma «¿existe la
arista $(u,v)$?» y el grafo fuese denso, que no es el caso.
\end{solucion}
```

El desarrollo de árboles equilibrados y tablas hash está en \cite{garrido2018}, y
el de grafos y sus recorridos en \cite{rodriguez2020} y \cite{koffman2006}.
