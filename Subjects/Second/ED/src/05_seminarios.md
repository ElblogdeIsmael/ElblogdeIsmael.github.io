# Seminarios

Los dos seminarios del programa: aplicación de los TDA sobre problemas reales y uso
de la STL en problemas prácticos.

## La biblioteca estándar

La STL es la implementación de todo el temario que trae el propio lenguaje. Está
organizada en tres piezas que se combinan:

| Pieza | Qué aporta |
| --- | --- |
| Contenedores | las estructuras de datos |
| Iteradores | la forma uniforme de recorrerlas |
| Algoritmos | operaciones que trabajan sobre rangos de iteradores |

La separación es lo que la hace potente: hay $C$ contenedores y $A$ algoritmos, y
funcionan las $C \times A$ combinaciones porque ninguno de los dos conoce al otro.
Ambos hablan con iteradores.

### Contenedores secuenciales

| Contenedor | Estructura | Acceso $[i]$ | Inserción por el medio |
| --- | --- | --- | --- |
| `vector` | vector dinámico | $\Theta(1)$ | $\Theta(n)$ |
| `deque` | bloques encadenados | $\Theta(1)$ | $\Theta(n)$ |
| `list` | lista doblemente enlazada | no hay | $\Theta(1)$ con iterador |
| `forward_list` | lista simple | no hay | $\Theta(1)$ con iterador |
| `array` | vector de tamaño fijo | $\Theta(1)$ | no hay |

**`vector` es la opción por defecto**, y no por comodidad: la localidad de caché
compensa el desplazamiento de elementos en tamaños moderados. Una `list` gana
cuando los elementos son grandes, se insertan y borran mucho por el medio y ya se
dispone del iterador.

### Contenedores asociativos

| Contenedor | Implementación | Búsqueda | Ordenado |
| --- | --- | --- | --- |
| `set`, `map` | árbol rojo-negro | $\Theta(\log n)$ | sí |
| `multiset`, `multimap` | ídem, con repetidos | $\Theta(\log n)$ | sí |
| `unordered_set`, `unordered_map` | tabla hash | $\Theta(1)$ medio | no |

La regla para elegir es la del tema anterior: si hace falta recorrer en orden, o
preguntar por rangos, o el mínimo, van los ordenados; si solo hace falta saber si
algo está, los de hash.

### Adaptadores

`stack`, `queue` y `priority_queue` no son contenedores nuevos: **restringen la
interfaz de otro**. Es la relación de adaptación del tema 2, aplicada.

```cpp
std::stack<int> p;                            // por debajo, un deque
std::stack<int, std::vector<int>> pv;         // por debajo, un vector
std::priority_queue<int> cp;                  // un montículo sobre vector
```

El adaptador solo expone las operaciones del TDA, así que sobre un `stack` no se
puede recorrer ni acceder por índice. Esa restricción es el objetivo, no una
limitación.

## Algoritmos

Trabajan sobre un rango `[primero, ultimo)` de iteradores. El extremo derecho queda
fuera, y esa convención tiene dos consecuencias útiles: el número de elementos es la
resta de los iteradores, y el rango vacío se escribe con los dos iguales.

| Grupo | Ejemplos |
| --- | --- |
| No modificadores | `find`, `count`, `all_of`, `equal`, `search` |
| Modificadores | `copy`, `transform`, `replace`, `remove`, `reverse` |
| Ordenación | `sort`, `stable_sort`, `partial_sort`, `nth_element` |
| Sobre rango ordenado | `binary_search`, `lower_bound`, `upper_bound`, `merge` |
| Numéricos | `accumulate`, `inner_product`, `partial_sum` |
| Montículo | `make_heap`, `push_heap`, `pop_heap`, `sort_heap` |

```cpp
std::sort(v.begin(), v.end());
auto it = std::lower_bound(v.begin(), v.end(), 42);
int suma = std::accumulate(v.begin(), v.end(), 0);
```

```{=latex}
\begin{anotacion}
\texttt{remove} \textbf{no borra nada}. Reordena el rango dejando delante los
elementos que se conservan y devuelve un iterador al final de esa parte; el
contenedor sigue teniendo el mismo tamaño. Para borrar de verdad hace falta
\texttt{v.erase(std::remove(v.begin(), v.end(), x), v.end())}. Es la consecuencia
directa de que un algoritmo solo vea iteradores y no pueda cambiar el tamaño del
contenedor.
\end{anotacion}
```

### Criterios de comparación

Los algoritmos de ordenación aceptan un comparador, que puede ser una función, un
objeto función o una lambda:

```cpp
std::sort(v.begin(), v.end(),
          [](const Alumno& a, const Alumno& b) { return a.nota > b.nota; });
```

El comparador tiene que definir un **orden estricto débil**: si `cmp(a,b)` y
`cmp(b,a)` son los dos ciertos para algún par, `sort` puede salirse del rango y
corromper memoria. El error clásico es escribir `<=` en vez de `<`, que hace
`cmp(a,a)` cierto y rompe el invariante.

## Aplicación de los TDA a problemas reales

Los cuatro problemas de este seminario, con la estructura que los resuelve y por
qué.

### Contar palabras de un texto

Se necesita asociar cada palabra con su número de apariciones, y al final listar
por frecuencia.

```cpp
std::unordered_map<std::string, int> cuenta;
std::string palabra;
while (entrada >> palabra) ++cuenta[palabra];
```

La estructura es un diccionario sobre hash: solo se busca por clave exacta. Para el
listado final por frecuencia se vuelca a un vector de pares y se ordena, porque
ordenar una vez cuesta $\Theta(n\log n)$ y mantener el orden en cada inserción
costaría $\Theta(\log n)$ por palabra sin aportar nada durante el conteo.

Aquí `cuenta[palabra]` sí se quiere: inserta con valor cero si la palabra es nueva,
que es exactamente lo que hace falta.

### Corrector de paréntesis anidados

Pila. Se apila cada símbolo de apertura y al leer uno de cierre se comprueba que el
tope es su pareja.

| Situación | Resultado |
| --- | --- |
| Cierre con pila vacía | error: sobra un cierre |
| Cierre que no casa con el tope | error: mal anidados |
| Fin de texto con pila no vacía | error: falta cerrar |

Los tres casos hay que comprobarlos. Un corrector que solo cuenta aperturas y
cierres da por bueno `([)]`.

### Planificador de tareas con dependencias

Un grafo dirigido donde cada arista es una dependencia, y un **orden topológico**
que da una secuencia válida de ejecución.

El algoritmo por grados de entrada usa dos TDA a la vez: un vector con el número de
dependencias pendientes de cada tarea, y una cola con las que ya tienen cero. Si al
terminar quedan tareas sin colocar, **hay un ciclo**, es decir, dependencias
circulares. Ese diagnóstico sale gratis del algoritmo y es lo que hace útil el
planificador.

### Sistema de recomendación por vecindad

Un grafo de usuarios y productos, y una búsqueda en anchura acotada a dos niveles
para encontrar lo que compraron quienes compraron lo mismo.

Con listas de adyacencia el recorrido cuesta $\Theta(V+E)$; con una matriz sobre un
grafo disperso, $\Theta(V^2)$, y eso es la diferencia entre responder en
milisegundos y no responder. Es el mismo algoritmo con distinta estructura debajo,
que es la moraleja del seminario entero.

## Errores frecuentes con la STL

| Error | Qué ocurre |
| --- | --- |
| Guardar un iterador y luego insertar en el `vector` | el redimensionado lo invalida |
| Borrar dentro de un `for` sin usar el iterador devuelto | el iterador queda colgado |
| Usar `map[k]` para consultar | inserta la clave con valor por defecto |
| Pasar contenedores grandes por valor | copia profunda silenciosa en cada llamada |
| Comparador con `<=` | orden no estricto, comportamiento indefinido en `sort` |
| `std::sort` sobre una `list` | no compila: exige acceso aleatorio, hay que usar `list::sort` |

El borrado correcto dentro de un recorrido:

```cpp
for (auto it = l.begin(); it != l.end(); )
  if (*it % 2 == 0) it = l.erase(it);   // erase devuelve el siguiente válido
  else ++it;
```

## Elegir contenedor: resumen

| Situación | Contenedor |
| --- | --- |
| Por defecto, secuencia con acceso por posición | `vector` |
| Inserciones y borrados frecuentes por los dos extremos | `deque` |
| Muchas inserciones y borrados por el medio, con iterador | `list` |
| Saber si un elemento está, sin orden | `unordered_set` |
| Ídem, y recorrer u obtener rangos ordenados | `set` |
| Asociar clave con valor | `unordered_map` o `map`, mismo criterio |
| Último en entrar, primero en salir | `stack` |
| Primero en entrar, primero en salir | `queue` |
| El más urgente primero | `priority_queue` |

## Ejercicios

```{=latex}
\begin{ejercicio}
¿Qué imprime este código y por qué?

\medskip
\texttt{std::vector<int> v = \{1, 2, 3, 4, 5\};}\\
\texttt{std::remove(v.begin(), v.end(), 3);}\\
\texttt{std::cout << v.size();}
\end{ejercicio}

\begin{solucion}
Imprime 5. \texttt{remove} no cambia el tamaño del contenedor: solo reordena y
devuelve un iterador al nuevo final lógico, que aquí se descarta. El vector queda
con cinco posiciones, las cuatro primeras con $1, 2, 4, 5$ y la última con un valor
sin especificar. Para borrar de verdad hay que llamar a \texttt{erase} con el
iterador devuelto.
\end{solucion}

\begin{ejercicio}
Un programa mantiene una lista de eventos y necesita repetidamente el más próximo en
el tiempo, insertando eventos nuevos sobre la marcha. ¿Qué contenedor?
\end{ejercicio}

\begin{solucion}
Una \texttt{priority\_queue}: extraer el mínimo y añadir cuestan $\Theta(\log n)$
las dos. Un vector ordenado daría extracción en $\Theta(1)$ pero inserción en
$\Theta(n)$, y aquí las dos operaciones son frecuentes. Si además hiciese falta
cancelar eventos concretos, la cola con prioridad no basta —no permite borrar por
clave— y habría que ir a un \texttt{set} ordenado por instante.
\end{solucion}

\begin{ejercicio}
¿Por qué \texttt{std::sort} no funciona sobre una \texttt{std::list}?
\end{ejercicio}

\begin{solucion}
Porque exige iteradores de acceso aleatorio, que permiten saltar a una posición
cualquiera en tiempo constante, y los de \texttt{list} son bidireccionales. El
algoritmo interno de \texttt{sort} necesita esos saltos para particionar. La lista
trae su propio \texttt{sort}, que usa mezcla reenlazando nodos en vez de mover
elementos.
\end{solucion}
```

El uso de la biblioteca estándar está desarrollado en \cite{garrido2017},
\cite{garrido2016stl} y \cite{musser2009}, y su referencia completa en
\cite{robson2013}.
