# Temario práctico

Las prácticas de la asignatura: analizar la eficiencia, y diseñar e implementar
algoritmos con cada una de las técnicas estudiadas.

## Análisis de la eficiencia

La práctica que da sentido al tema 1: comprobar que el orden teórico se
corresponde con lo que la máquina hace.

### Cómo se mide

```cpp
#include <chrono>
using namespace std::chrono;

auto t0 = high_resolution_clock::now();
algoritmo(v, n);
auto t1 = high_resolution_clock::now();
double ms = duration<double, std::milli>(t1 - t0).count();
```

Reglas que la práctica exige:

- **Reloj monótono**, no la hora del día, que da saltos al ajustarse.
- **Descartar la primera medida**: carga las cachés y las páginas.
- **Repetir y quedarse con la mediana**, no con la media: un pico del sistema
  contamina la media.
- **Compilar con `-O2`** y anotarlo. Medir sin optimizar mide otra cosa.
- **Cuidado con el compilador**: si el resultado no se usa, la llamada puede
  desaparecer entera. Se evita imprimiendo o acumulando el resultado.
- **Anotar la máquina**: `lscpu`, compilador y opciones. Sin eso la medida no es
  reproducible.

### Ajuste de la curva

Se mide para tamaños crecientes y se ajusta a la forma teórica:

| Orden esperado | Al duplicar $n$, el tiempo | Cómo se comprueba |
| --- | --- | --- |
| $\Theta(\log n)$ | crece una constante | $t$ frente a $\log n$ es una recta |
| $\Theta(n)$ | se duplica | $t/n$ constante |
| $\Theta(n \log n)$ | algo más que el doble | $t/(n\log n)$ constante |
| $\Theta(n^2)$ | se cuadruplica | $t/n^2$ constante |
| $\Theta(n^3)$ | se multiplica por 8 | $t/n^3$ constante |

**Dividir el tiempo por la función teórica** es la comprobación que vale: si la
hipótesis es correcta, el cociente tiende a una constante. Es más fiable que mirar
la forma de la gráfica.

Y hay que medir hasta tamaños suficientes: por debajo de cierto punto las
constantes dominan y la curva no dice nada.

### El caso peor hay que construirlo

Un algoritmo con casos distintos no se mide con datos aleatorios y ya está:

| Algoritmo | Peor caso | Cómo se construye |
| --- | --- | --- |
| Ordenación rápida con pivote al extremo | $\Theta(n^2)$ | vector ya ordenado |
| Ordenación por inserción | $\Theta(n^2)$ | vector en orden inverso |
| Búsqueda lineal | $\Theta(n)$ | el elemento no está |

Medir la ordenación rápida solo con vectores aleatorios da $\Theta(n \log n)$ y
oculta que existe un caso cuadrático. La práctica pide medir los tres casos.

## Prácticas por técnica

### Divide y vencerás

- Implementar mezcla y rápida, y comparar tiempos con los tres tipos de entrada.
- Medir el efecto del **umbral**: por debajo de qué tamaño compensa la inserción.
  Sale una curva con mínimo, y ese mínimo es el valor que las bibliotecas usan.
- Selección del $k$-ésimo menor, comparada con ordenar y tomar el elemento $k$.
  La diferencia entre $\Theta(n)$ y $\Theta(n \log n)$ se ve con $n$ grande.

### Voraces

- Cambio de monedas con el sistema del euro y con un sistema que produzca
  contraejemplo. **Comprobar que el voraz falla** es parte del ejercicio.
- Mochila fraccionaria frente a mochila 0-1 con el mismo voraz, midiendo cuánto se
  aleja del óptimo.
- Kruskal y Prim sobre el mismo grafo, con densidad creciente, para ver dónde se
  cruzan sus tiempos.
- Huffman: comprimir un texto y medir la razón de compresión frente a la entropía.

### Exploración de grafos

- Anchura y profundidad sobre el mismo grafo, comparando el orden de visita y la
  memoria que consume cada uno.
- Ocho reinas, contando **nodos explorados** con poda y sin poda. La diferencia es
  de varios órdenes de magnitud, y es la medida que demuestra el valor de la poda.
- Ramificación y poda sobre la mochila 0-1 y sobre el viajante, midiendo nodos
  explorados según la calidad de la cota.

### Programación dinámica

- Fibonacci en tres versiones: recursiva ingenua, con memorización e iterativa.
  Medir hasta donde la primera aguante, que suele ser $n = 40$.
- Mochila 0-1 con tabla, y con el ahorro a un solo vector.
- Subsecuencia común más larga y distancia de edición, con reconstrucción de la
  solución y no solo del valor.
- Floyd-Warshall frente a Dijkstra ejecutado desde cada vértice, para ver cuándo
  compensa cada uno.

## El informe

Lo que se entrega con cada práctica:

1. Planteamiento: qué problema y qué técnica, con la justificación.
2. Diseño: la recurrencia o el esquema, y el análisis teórico del coste.
3. Implementación, con la complejidad de cada función documentada.
4. Casos de prueba, incluidos los límite y el peor caso construido a propósito.
5. Medidas con su dispersión, y el ajuste a la curva teórica.
6. **Comparación entre lo teórico y lo medido, con la explicación de las
   diferencias.**

El punto 6 es el que distingue una práctica hecha de una práctica entregada. Las
diferencias tienen casi siempre una de estas causas:

| Diferencia observada | Causa habitual |
| --- | --- |
| Más lento de lo esperado con $n$ grande | fallos de caché: el conjunto de trabajo dejó de caber |
| Más rápido de lo esperado | el compilador eliminó código, o los datos eran favorables |
| Escalones en la curva | límites de los niveles de caché |
| Mucha dispersión entre repeticiones | carga del sistema, o escalado de frecuencia |

## Cómo se compila y se comprueba

```bash
g++ -Wall -Wextra -std=c++17 -O2 -o programa programa.cpp
./programa

# Durante el desarrollo, sin optimizar y con comprobaciones
g++ -Wall -Wextra -std=c++17 -g -fsanitize=address,undefined -o dbg programa.cpp
./dbg
valgrind --leak-check=full ./dbg
```

Dos versiones a propósito: la optimizada para medir y la instrumentada para
comprobar que el programa es correcto. Medir con los desinfectantes activados no
tiene sentido, y comprobar con `-O2` esconde errores de memoria.

Los guiones y problemas de estas prácticas siguen el planteamiento de
\cite{verdegay2017} y \cite{brassard1997}; las implementaciones de referencia
están en \cite{sedgewick2001} y \cite{skiena2020}.
