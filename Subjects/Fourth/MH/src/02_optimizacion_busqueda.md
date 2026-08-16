# Optimización y búsqueda en inteligencia artificial

Tema 2 del programa. Dónde encajan las metaheurísticas dentro de los modelos de
optimización de la inteligencia artificial, qué es un entorno y qué separa a las
técnicas de trayectoria de las de población.

## Modelos de optimización en inteligencia artificial

La inteligencia artificial trata la optimización de tres formas distintas, y
conviene no confundirlas porque resuelven problemas diferentes.

| Modelo | Qué se busca | Ejemplo |
| --- | --- | --- |
| Búsqueda en espacio de estados | un **camino** desde el estado inicial a uno meta | A\*, Dijkstra, el 8-puzle |
| Satisfacción de restricciones | una asignación que cumpla **todas** las restricciones | coloreado de grafos, sudoku |
| Optimización | la solución de **mejor valor** | viajante, mochila, asignación |

La diferencia con la búsqueda en espacio de estados es la que más cuesta: allí
importa cómo se llega, porque la solución **es** la secuencia de operadores. Aquí
el camino es desechable, y lo único que se devuelve es la solución final. Eso
permite saltar de una solución a otra sin ninguna relación entre ellas, algo que
A\* no puede hacer.

La satisfacción de restricciones es el caso límite en el que la función objetivo
es binaria. Se puede tratar como optimización tomando como objetivo el número de
restricciones incumplidas y buscando el mínimo, que es cero. Es una técnica útil:
convierte un problema de «sí o no» en uno con gradiente, y así una metaheurística
puede acercarse por pasos.

## Manejo de restricciones

Casi ningún problema real es libre: el espacio admisible $F$ es un subconjunto
propio de $S$. Cuatro maneras de tratarlo, de más a menos deseable:

| Estrategia | Cómo funciona | Cuándo |
| --- | --- | --- |
| Representación cerrada | codificar de forma que toda solución sea válida | cuando es posible; siempre preferible |
| Reparación | corregir la solución inválida tras generarla | cuando la corrección es barata |
| Penalización | sumar a $f$ un término proporcional a la violación | restricciones blandas |
| Rechazo | descartar y volver a generar | solo si las inválidas son raras |

La **representación cerrada** es la mejor y la más olvidada. En el viajante,
codificar como permutación garantiza que toda solución es un recorrido válido; no
hace falta comprobar nada. En la mochila, un vector binario no la cierra —se puede
exceder la capacidad— y ahí toca reparar o penalizar.

La **penalización** transforma el problema restringido en uno libre:

$$f'(s) = f(s) + \sum_{i} \lambda_i \max(0, g_i(s))$$

donde $g_i(s) > 0$ indica que la restricción $i$ se incumple. El ajuste de las
$\lambda_i$ decide el comportamiento: si son pequeñas, la búsqueda se instala en
la zona no admisible porque le sale rentable; si son grandes, no puede cruzarla y
pierde los atajos que pasan por ella. Una penalización creciente con el tiempo
—permisiva al principio, severa al final— evita los dos extremos.

El **rechazo** es el peor de los cuatro y el más tentador de programar. Si el
espacio admisible es una fracción pequeña de $S$, casi todo el presupuesto se gasta
generando soluciones que se tiran.

## Búsqueda por entornos

Es el mecanismo sobre el que se construye todo el tema 5, y aparece dentro de los
algoritmos meméticos del tema 4.

Un **entorno** es una función $N: S \to 2^S$ que asigna a cada solución el conjunto
de las que se alcanzan con un cambio elemental. Ese cambio se llama **movimiento**,
y el entorno queda definido por él.

| Representación | Movimiento típico | Tamaño de $N(s)$ |
| --- | --- | --- |
| Binaria, $n$ bits | invertir un bit | $n$ |
| Permutación de $n$ | intercambiar dos posiciones | $n(n-1)/2$ |
| Permutación de $n$ | invertir un segmento (2-opt) | $n(n-1)/2$ |
| Real, $n$ dimensiones | sumar ruido gaussiano | infinito |

La elección del movimiento **es** el diseño del algoritmo. Dos entornos distintos
sobre el mismo problema dan paisajes distintos, con óptimos locales distintos, y
uno puede ser mucho mejor que el otro. En el viajante, el 2-opt —que invierte un
tramo del recorrido— funciona mejor que el intercambio de dos ciudades porque
elimina los cruces del recorrido, que es donde está el desperdicio.

### El paisaje de la función objetivo

Con un entorno fijado, el espacio de búsqueda deja de ser un conjunto y pasa a ser
un **paisaje**: soluciones vecinas, cada una a su altura $f(s)$.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=5.4cm,
  axis lines=middle,
  xlabel={Espacio de búsqueda},
  ylabel={$f(s)$},
  xlabel style={at={(axis description cs:0.5,-0.14)}},
  xmin=0, xmax=10, ymin=-3.1, ymax=3.9,
  xtick=\empty, ytick=\empty,
  samples=200, domain=0.2:9.8
]
\addplot[thick] {sin(deg(x))*1.5 + sin(deg(2.7*x))*0.7 + 0.09*(x-5)^2 - 0.4};
\node[circle, fill, inner sep=1.6pt] at (axis cs:1.987,1.233) {};
\node[anchor=east, font=\small] at (axis cs:1.85,1.15) {local};
\node[circle, fill, inner sep=1.6pt] at (axis cs:4.239,-2.313) {};
\node[anchor=west, font=\small] at (axis cs:4.45,-2.313) {global};
\end{axis}
\end{tikzpicture}
\end{center}
```

Tres propiedades del paisaje deciden qué técnica conviene:

- **Rugosidad.** Cuántos óptimos locales hay y cómo de profundos son. Un paisaje
  liso se resuelve con búsqueda local; uno muy rugoso necesita mecanismos de
  escape.
- **Correlación entre vecinos.** Si soluciones parecidas tienen valores parecidos,
  la información local sirve para guiar. Si no, la búsqueda equivale a un muestreo
  aleatorio y ninguna metaheurística ayuda.
- **Distribución de los óptimos.** Si los buenos óptimos locales están agrupados
  —el «gran valle»— compensa intensificar cerca de los mejores encontrados. Es la
  hipótesis sobre la que descansan GRASP y los algoritmos meméticos.

### Búsqueda local

El algoritmo elemental: desde una solución, moverse a un vecino mejor mientras lo
haya.

```
funcion busqueda_local(s):
    repetir:
        s' = elegir_de(N(s))
        si f(s') < f(s):
            s = s'
        si no:
            devolver s
```

Dos formas de elegir, con consecuencias distintas:

| Estrategia | Qué hace | Coste por paso | Comportamiento |
| --- | --- | --- | --- |
| **El mejor** | evalúa todo $N(s)$ y toma el mínimo | $\lvert N(s) \rvert$ | pasos largos, pocos |
| **El primero** | toma el primer vecino que mejora | variable, menor en media | pasos cortos, muchos |

La segunda suele ganar cuando el entorno es grande, porque no paga la exploración
completa. Y con ella el **orden de exploración importa**: recorrer siempre el
entorno en el mismo orden sesga la búsqueda, así que se aleatoriza.

La búsqueda local termina siempre en un óptimo local, y ahí se queda. El resto de
la asignatura es una colección de respuestas a esa limitación:

| Respuesta | Cómo | Tema |
| --- | --- | --- |
| Aceptar empeoramientos con probabilidad | enfriamiento simulado | 5 |
| Prohibir deshacer lo recién hecho | búsqueda tabú | 5 |
| Reiniciar desde otro punto | multiarranque, GRASP, ILS | 5 |
| Trabajar con muchas soluciones a la vez | algoritmos genéticos | 3 |
| Cambiar de entorno al atascarse | búsqueda por entornos variables | 5 |

## Trayectorias frente a poblaciones

Es la división que ordena el resto del programa.

| | Trayectorias | Poblaciones |
| --- | --- | --- |
| Soluciones vivas | una | muchas |
| Cómo avanza | movimientos en el entorno | recombinación y selección |
| Fuerte en | intensificar | diversificar |
| Débil en | escapar de óptimos locales | refinar la mejor solución |
| Memoria | del recorrido reciente | implícita, en la población |
| Coste por iteración | bajo | alto |

Las de trayectoria bajan rápido y se atascan. Las de población cubren el espacio y
tardan mucho en pulir. Puestas así, la conclusión del tema 4 se ve venir: los
**algoritmos meméticos** son una población que ejecuta búsqueda local sobre sus
miembros, y llevan años siendo lo mejor que se conoce en la mayoría de los
problemas combinatorios.

Una advertencia que conviene tener presente desde este tema: el teorema de **no
hay comida gratis** dice que, promediando sobre **todas** las funciones objetivo
posibles, cualquier par de algoritmos de búsqueda tiene el mismo rendimiento. No
existe la metaheurística mejor en general. Lo que existe es la que mejor explota
la estructura de una familia concreta de problemas, y por eso la asignatura
compara siempre sobre bancos de pruebas definidos.

Los modelos de búsqueda por entornos y su análisis están en \cite{talbi2009} y
\cite{du2016}; el tratamiento del paisaje de la función objetivo, en
\cite{chopard2018}.
