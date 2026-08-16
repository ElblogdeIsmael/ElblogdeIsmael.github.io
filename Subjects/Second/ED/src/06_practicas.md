# Temario práctico

Las cuatro prácticas del programa. Cada una construye un TDA, lo prueba y mide su
eficiencia, que es lo que separa saber la teoría de saber usarla.

## Práctica 1. Eficiencia de algoritmos

Comparar la eficiencia teórica con la empírica sobre varios ejemplos.

**Qué se mide:**

| Algoritmo | Orden teórico | Qué se espera ver |
| --- | --- | --- |
| Búsqueda lineal | $\Theta(n)$ | recta |
| Búsqueda binaria | $\Theta(\log n)$ | curva casi plana |
| Ordenación por inserción | $\Theta(n^2)$ | parábola |
| Ordenación por mezcla | $\Theta(n\log n)$ | casi recta, algo curvada |

**Cómo se mide.** El procedimiento del tema 1, con dos precauciones que en la
práctica deciden si los datos valen:

- **Cronometrar solo lo que se estudia.** Generar un vector de un millón de
  elementos aleatorios cuesta más que ordenarlo con un algoritmo bueno. Si la
  generación entra en el cronómetro, la gráfica mide el generador.
- **Usar el resultado.** Un bucle cuyo resultado se descarta puede desaparecer
  entero en la optimización. Acumular algo e imprimirlo al final lo impide.

**Cómo se comprueba el ajuste.** Se divide el tiempo medido por la función teórica
y se mira si el cociente se estabiliza:

$$\frac{t(n)}{f(n)} \longrightarrow c$$

Si sigue creciendo, la función teórica se queda corta; si tiende a cero, sobra. Es
mejor prueba que mirar la forma de la curva, porque una parábola y una $n\log n$ se
parecen mucho en un rango estrecho.

**Lo que se observa y hay que explicar:**

| Observación | Causa |
| --- | --- |
| Con $n$ pequeño, la inserción gana a la mezcla | constante menor y sin memoria auxiliar |
| Recorrer una lista es más lento que un vector, siendo los dos $\Theta(n)$ | fallos de caché por falta de localidad |
| La curva da saltos en potencias de dos | redimensionados del vector |
| Ordenar datos ya ordenados cambia mucho el tiempo | la inserción baja a $\Theta(n)$, el quicksort ingenuo sube a $\Theta(n^2)$ |

La última fila es la más instructiva: el **mismo tamaño de entrada** da tiempos
radicalmente distintos según cómo estén los datos. Es la diferencia entre caso
mejor, peor y medio, medida.

## Práctica 2. Construcción de TDA básicos

Implementar desde cero, con plantillas y sin usar la STL, los contenedores del
tema 3.

**Qué se construye:**

- Vector dinámico con redimensionado por duplicación.
- Lista simple y lista doblemente enlazada, con nodo centinela.
- Pila y cola, cada una sobre las dos representaciones anteriores.
- Cola circular sobre vector.

**Lo que hay que respetar en cada clase:**

| Elemento | Por qué |
| --- | --- |
| Constructor, destructor, copia y asignación | la clase posee memoria: los cuatro van juntos |
| Comprobar la precondición | `tope()` sobre una pila vacía es error del que llama |
| Documentar el coste de cada operación | forma parte de la especificación |
| Función que comprueba el invariante | encuentra los errores donde se producen |

**Los errores que aparecen siempre**, y merece la pena anticiparlos:

- **Fuga de memoria** por olvidar `delete[]` en el destructor, o por reasignar el
  puntero antes de liberar el bloque anterior.
- **Doble liberación** por copia superficial, cuando falta el constructor de copia.
- **Acceso fuera de rango** al insertar en una posición igual al tamaño, que es
  válida para insertar y no para acceder.
- **Perder la lista entera** al desenlazar sin guardar antes el puntero al
  siguiente.

Herramientas que encuentran los tres primeros sin depurar a mano: compilar con
`-fsanitize=address` o pasar `valgrind`. Los dos delatan la línea exacta.

## Práctica 3. Uso e implementación de TDA lineales

Aplicar los contenedores de la práctica anterior a problemas concretos, y comparar
implementaciones.

**Problemas propuestos:**

| Problema | TDA |
| --- | --- |
| Comprobar expresiones bien parentizadas | pila |
| Convertir de infija a postfija y evaluar | pila |
| Simular una cola de atención con estadísticas de espera | cola |
| Planificación por turnos entre procesos | lista circular |
| Mezclar dos listas ordenadas en una | lista |

**La comparación que se pide.** Resolver el mismo problema con las dos
representaciones y medir. La conclusión que suele salir, y que conviene entender en
vez de memorizar: **la implementación sobre vector gana casi siempre en tiempo**
aunque el análisis asintótico diga lo mismo, porque recorre memoria contigua. La
lista gana cuando los elementos son grandes de copiar o cuando se inserta y borra
mucho por el medio con el iterador ya en la mano.

## Práctica 4. Uso e implementación de TDA no lineales

Los contenedores del tema 4.

**Qué se construye:**

- Árbol binario de búsqueda con inserción, borrado en los tres casos y los cuatro
  recorridos.
- Montículo binario sobre vector, y la cola con prioridad encima.
- Tabla hash con encadenamiento, con rehash automático al pasar el factor de carga.
- Grafo con listas de adyacencia, con recorridos en profundidad y en anchura.

**Mediciones que se piden:**

| Medida | Qué demuestra |
| --- | --- |
| Altura del ABB con claves aleatorias frente a ordenadas | la degeneración a lista |
| Tiempo de búsqueda al crecer $n$ en un ABB equilibrado | el $\Theta(\log n)$ |
| Colisiones medias según el factor de carga | por qué se rehace la tabla |
| Comparación de la tabla hash con el ABB en búsqueda pura | $\Theta(1)$ frente a $\Theta(\log n)$ |

La primera medida es la que más enseña: con claves aleatorias la altura media de un
ABB de $n$ nodos ronda $1{,}39\log_2 n$, y con claves ordenadas es exactamente
$n-1$. Los dos árboles tienen los mismos elementos y el mismo código; lo único que
cambia es el orden de llegada.

**Sobre los grafos**, la comprobación que cierra la práctica: implementar el mismo
recorrido con matriz y con listas de adyacencia sobre un grafo disperso y medir. La
diferencia entre $\Theta(V^2)$ y $\Theta(V+E)$ deja de ser una fórmula en cuanto
$V$ pasa de unos miles.

## Sobre la memoria de prácticas

Lo que se entrega:

1. Especificación de cada TDA implementado: signatura, precondiciones,
   postcondiciones y **coste comprometido**.
2. Decisiones de representación, con el invariante que mantiene cada clase.
3. Juego de pruebas, con los casos límite: contenedor vacío, un solo elemento,
   capacidad justo agotada, borrado del único elemento, clave repetida.
4. Mediciones, con las gráficas de tiempo frente a $n$.
5. Comparación entre lo teórico y lo medido, **explicando las diferencias**.

El punto 5 es el que se evalúa de verdad, y las causas posibles son casi siempre las
mismas: constantes ocultas en el análisis, localidad de caché, coste de reservar
memoria, punto de cruce entre dos órdenes distintos, o un algoritmo cuyo caso medio
no es el que se está midiendo. Lo que se pide es identificar cuál explica lo
observado.

Y el punto 3 es el que más errores encuentra. Un contenedor que funciona con diez
elementos y falla con cero suele tener el mismo defecto: un caso especial que la
implementación no contempla y que un nodo centinela habría eliminado.

Los guiones y los problemas propuestos siguen \cite{rodriguez2020} y
\cite{garrido2006}, y la parte de STL, \cite{garrido2016stl}.
