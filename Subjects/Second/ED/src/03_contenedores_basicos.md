# Tipos de datos contenedores básicos

Tema 3 del programa. Pilas, colas, colas con prioridad, conjuntos, diccionarios,
vectores y listas, con sus implementaciones.

## Vectores

El contenedor más simple: elementos consecutivos en memoria, accesibles por índice.

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.95]
\foreach \i/\v in {0/12, 1/7, 2/31, 3/5, 4/28} {
  \draw (\i*1.2,0) rectangle ++(1.2,0.8);
  \node at (\i*1.2+0.6,0.4) {\v};
  \node[font=\scriptsize] at (\i*1.2+0.6,-0.3) {\i};
}
\draw[dashed] (6,0) rectangle ++(1.2,0.8);
\draw[dashed] (7.2,0) rectangle ++(1.2,0.8);
\node[font=\scriptsize] at (7.2,-0.3) {capacidad reservada};
\end{tikzpicture}
\end{center}
```

| Operación | Coste |
| --- | --- |
| Acceso por índice | $\Theta(1)$ |
| Insertar o borrar al final | $\Theta(1)$ amortizado |
| Insertar o borrar en posición $i$ | $\Theta(n-i)$ |
| Buscar sin orden | $\Theta(n)$ |
| Buscar con orden, por bisección | $\Theta(\log n)$ |

La tercera fila es la que decide: insertar por el medio obliga a desplazar todo lo
que hay detrás. Un vector es la estructura correcta cuando se accede mucho por
posición y se modifica poco por el medio.

### Redimensionado

Cuando se agota la capacidad se reserva un bloque mayor, se copia y se libera el
viejo. Doblar la capacidad da coste amortizado constante, como se vio en el tema 1.

```cpp
void Vector::insertarFinal(const T& x) {
  if (n == capacidad) {
    capacidad = (capacidad == 0) ? 1 : capacidad * 2;
    T* nuevo = new T[capacidad];
    for (int i = 0; i < n; ++i) nuevo[i] = datos[i];
    delete[] datos;
    datos = nuevo;
  }
  datos[n++] = x;
}
```

```{=latex}
\begin{anotacion}
El redimensionado \textbf{invalida todos los punteros e iteradores} al contenido,
porque el bloque cambia de dirección. Guardar un puntero a un elemento de un vector
y luego insertar es un error que funciona hasta que el vector crece.
\end{anotacion}
```

## Listas enlazadas

Cada elemento vive en su propio nodo y guarda la dirección del siguiente. La
memoria no es contigua, así que no hay acceso por índice, pero enlazar y desenlazar
no mueve nada.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  nodo/.style={draw, minimum height=8mm, minimum width=8mm},
  >=stealth
]
\node[font=\small] (cab) at (-1.4,0) {cabeza};
\foreach \i/\v in {0/12, 1/7, 2/31} {
  \node[nodo] (d\i) at (\i*2.4,0) {\v};
  \node[nodo] (p\i) at (\i*2.4+0.8,0) {};
}
\draw[->] (cab) -- (d0.west);
\draw[->] (p0.center) -- (d1.west);
\draw[->] (p1.center) -- (d2.west);
\draw (p2.south west) -- (p2.north east);
\end{tikzpicture}
\end{center}
```

| Operación | Lista simple | Vector |
| --- | --- | --- |
| Acceso a la posición $i$ | $\Theta(i)$ | $\Theta(1)$ |
| Insertar dado un iterador | $\Theta(1)$ | $\Theta(n)$ |
| Borrar dado un iterador | $\Theta(1)$ | $\Theta(n)$ |
| Insertar al principio | $\Theta(1)$ | $\Theta(n)$ |
| Memoria por elemento | dato + puntero | dato |

La segunda fila lleva un matiz que se pierde a menudo: la inserción es $\Theta(1)$
**si ya se tiene el iterador**. Llegar hasta la posición cuesta $\Theta(i)$, así que
insertar «en la posición 500» de una lista no es más barato que en un vector.

### Variantes

| Variante | Qué añade | Para qué |
| --- | --- | --- |
| Doblemente enlazada | puntero al anterior | recorrer hacia atrás, borrar sin conocer el previo |
| Circular | el último apunta al primero | recorridos cíclicos, planificación por turnos |
| Con nodo centinela | un nodo ficticio al principio | elimina el caso especial de la lista vacía |

El **centinela** merece una nota porque es una técnica general. Sin él, insertar al
principio y en el medio son dos códigos distintos, porque uno actualiza la cabeza y
otro un `siguiente`. Con un nodo ficticio que siempre existe, todos los casos son
iguales, y desaparecen a la vez la mitad de los `if` y la mitad de los errores.

```cpp
void Lista::borrar(Nodo* previo) {
  Nodo* victima = previo->siguiente;   // con centinela, previo nunca es nulo
  previo->siguiente = victima->siguiente;
  delete victima;
}
```

## Pilas

Estructura LIFO: el último que entra es el primero que sale. Cuatro operaciones,
todas $\Theta(1)$.

| Operación | Qué hace |
| --- | --- |
| `poner(x)` | inserta en el tope |
| `quitar()` | elimina el tope |
| `tope()` | consulta el tope |
| `vacia()` | indica si no hay elementos |

Se implementa sobre vector, con el tope al final para que insertar y borrar sean
baratos, o sobre lista, con el tope en la cabeza por la misma razón.

**Dónde aparecen las pilas**, que es lo que justifica el tipo:

- **La pila de llamadas** de cualquier programa. Cada llamada apila su marco con
  parámetros, variables locales y dirección de retorno; al volver se desapila. Es
  lo que hace posible la recursividad.
- **Comprobar paréntesis equilibrados**: se apila cada apertura y se comprueba al
  cerrar.
- **Evaluar expresiones en notación postfija** y convertir de infija a postfija.
- **Deshacer** en cualquier editor.
- **Recorrer un grafo en profundidad**, y en general convertir un algoritmo
  recursivo en iterativo.

```{=latex}
\begin{ejemplo}
Evaluación de \texttt{3 4 + 2 *} en notación postfija: se apilan los operandos y,
al leer un operador, se desapilan dos, se opera y se apila el resultado.

\medskip
\begin{tabular}{@{}lll@{}}
\toprule
Lee & Acción & Pila \\
\midrule
\texttt{3} & apila & 3 \\
\texttt{4} & apila & 3 4 \\
\texttt{+} & desapila 4 y 3, apila 7 & 7 \\
\texttt{2} & apila & 7 2 \\
\texttt{*} & desapila 2 y 7, apila 14 & 14 \\
\bottomrule
\end{tabular}
\end{ejemplo}
```

## Colas

Estructura FIFO: el primero que entra es el primero que sale. También cuatro
operaciones en $\Theta(1)$, pero implementarla sobre un vector tiene una trampa.

Si el frente está en la posición 0, sacar obliga a desplazar todo: $\Theta(n)$. La
solución es la **cola circular**: dos índices, frente y fondo, que avanzan módulo la
capacidad.

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.8, transform shape]
\draw[gray!50] (0,0) circle (1.6cm);
\foreach \a/\v/\i in {90/A/0, 45/B/1, 0/C/2, -45/{}/3, -90/{}/4,
                      -135/{}/5, 180/{}/6, 135/{}/7} {
  \node[draw, fill=white, minimum size=6.5mm, font=\small] (n\i) at (\a:1.6) {\v};
  \node[font=\scriptsize, gray] at (\a:2.25) {\i};
}
\draw[->, >=stealth] (-2.9,1.5) -- (n0.west);
\node[font=\scriptsize, anchor=east] at (-2.9,1.5) {frente};
\draw[->, >=stealth] (3.0,-1.5) -- (n3.east);
\node[font=\scriptsize, anchor=west] at (3.0,-1.5) {fondo};
\end{tikzpicture}
\end{center}
```

```cpp
void Cola::poner(const T& x) {
  datos[fondo] = x;
  fondo = (fondo + 1) % capacidad;
  ++n;
}
```

Con índices circulares hay una ambigüedad conocida: **frente igual a fondo describe
tanto la cola vacía como la llena**. Se resuelve guardando el número de elementos,
como arriba, o dejando siempre una posición sin usar. La primera opción es más
clara y cuesta un entero.

Dónde aparecen: colas de impresión, planificación de procesos, gestión de peticiones
en un servidor, y el recorrido en anchura de un grafo.

### Bicolas

Una **bicola**, o cola doblemente terminada, permite insertar y extraer por los dos
extremos, y absorbe pila y cola como casos particulares. La implementación habitual
es un vector de bloques, que da acceso por índice en $\Theta(1)$ e inserción por los
dos extremos en $\Theta(1)$ amortizado sin copiar todo al crecer.

## Colas con prioridad

Sale el elemento de mayor prioridad, no el más antiguo. Con un vector ordenado la
extracción es $\Theta(1)$ y la inserción $\Theta(n)$; con uno desordenado, al revés.
La estructura que equilibra las dos es el **montículo**, que se trata en el tema
siguiente porque es un árbol.

| Implementación | Insertar | Extraer máximo |
| --- | --- | --- |
| Vector desordenado | $\Theta(1)$ | $\Theta(n)$ |
| Vector ordenado | $\Theta(n)$ | $\Theta(1)$ |
| Lista ordenada | $\Theta(n)$ | $\Theta(1)$ |
| Montículo | $\Theta(\log n)$ | $\Theta(\log n)$ |

Dónde aparecen: planificación por prioridades, simulación de eventos discretos, el
algoritmo de Dijkstra y la construcción del código de Huffman.

## Conjuntos

Colección sin duplicados y sin orden de inserción. Las operaciones son pertenencia,
inserción, borrado y las de teoría de conjuntos: unión, intersección y diferencia.

| Implementación | Pertenencia | Recorrido ordenado |
| --- | --- | --- |
| Vector desordenado | $\Theta(n)$ | no |
| Vector ordenado | $\Theta(\log n)$ | sí |
| Árbol equilibrado | $\Theta(\log n)$ | sí |
| Tabla hash | $\Theta(1)$ medio | no |

La última columna es la que decide entre las dos últimas filas, y es la misma
diferencia que hay en la STL entre `set` y `unordered_set`. Si nunca se recorre en
orden, la tabla hash gana; si el orden importa, el árbol es la única opción de las
dos.

### Conjuntos sobre vector de bits

Cuando el universo de elementos posibles es pequeño y conocido, un conjunto se
representa con un bit por elemento posible. La pertenencia es un acceso, y unión,
intersección y diferencia son las operaciones lógicas OR, AND y AND-NOT aplicadas
palabra a palabra: $n/64$ operaciones en vez de $n$.

Es la implementación más rápida que existe para ese caso, y la que se usa en
análisis de programas y en motores de búsqueda.

## Diccionarios

Asocian una **clave** con un **valor**. Es la abstracción de la búsqueda por
contenido, y las estructuras de los dos temas siguientes existen sobre todo para
implementarla bien.

| Operación | Qué hace |
| --- | --- |
| `insertar(k, v)` | asocia la clave al valor |
| `buscar(k)` | devuelve el valor asociado, si existe |
| `borrar(k)` | elimina la asociación |
| `contiene(k)` | indica si la clave está |

Las implementaciones son las mismas que las del conjunto —un conjunto es un
diccionario cuyo valor no interesa— y con los mismos costes: árbol equilibrado para
$\Theta(\log n)$ con recorrido ordenado, tabla hash para $\Theta(1)$ medio sin él.

```{=latex}
\begin{anotacion}
En la STL, \texttt{map[k]} \textbf{inserta la clave con un valor por defecto} si no
existe. Es la causa más común de que un diccionario crezca al consultarlo, y en un
método constante ni siquiera compila. Para consultar sin insertar están
\texttt{find} y \texttt{count}.
\end{anotacion}
```

## Cómo se elige

El resumen del tema en una tabla. Se lee de arriba abajo hasta que una fila
describa el problema:

| Si lo que hace falta es | Estructura |
| --- | --- |
| acceso por posición, pocos cambios por el medio | vector |
| insertar y borrar por el medio con iterador | lista |
| último en entrar, primero en salir | pila |
| primero en entrar, primero en salir | cola |
| el más urgente primero | cola con prioridad |
| saber si algo está, sin orden | conjunto sobre hash |
| saber si algo está, y recorrer ordenado | conjunto sobre árbol |
| asociar clave con valor | diccionario, sobre hash o árbol |

## Ejercicios

```{=latex}
\begin{ejercicio}
Implementar una cola usando dos pilas. ¿Cuál es el coste amortizado de extraer?
\end{ejercicio}

\begin{solucion}
Se apila en la pila de entrada. Al extraer, si la de salida está vacía se vuelcan
todos los elementos de la de entrada en ella, lo que invierte el orden, y se
desapila de la de salida. Cada elemento se mueve como mucho dos veces en toda su
vida, así que el coste amortizado por operación es $\Theta(1)$, aunque una
extracción concreta pueda costar $\Theta(n)$.
\end{solucion}

\begin{ejercicio}
En una cola circular sobre un vector de capacidad $C$ con índices \texttt{frente} y
\texttt{fondo}, ¿cómo se distingue la cola vacía de la llena si no se guarda el
número de elementos?
\end{ejercicio}

\begin{solucion}
No se puede: las dos situaciones dan \texttt{frente == fondo}. Se resuelve dejando
siempre una posición libre, con lo que la cola está llena cuando
\texttt{(fondo + 1) \% C == frente} y vacía cuando \texttt{frente == fondo}. El
precio es una posición desperdiciada y una capacidad efectiva de $C-1$.
\end{solucion}

\begin{ejercicio}
Un programa mantiene un millón de enteros y solo pregunta si un valor está o no.
¿Vector ordenado, árbol equilibrado o tabla hash?
\end{ejercicio}

\begin{solucion}
Tabla hash, por la pertenencia en $\Theta(1)$ medio y porque el orden no se usa. El
vector ordenado sería competitivo si el conjunto fuese estático —se ordena una vez
y se busca por bisección con muy buena localidad de caché—, pero pierde en cuanto
haya inserciones, que le cuestan $\Theta(n)$ cada una.
\end{solucion}
```

Las implementaciones detalladas de estos contenedores están en \cite{rodriguez2020}
y \cite{garrido2006}, y su versión en la biblioteca estándar en
\cite{garrido2016stl}.
