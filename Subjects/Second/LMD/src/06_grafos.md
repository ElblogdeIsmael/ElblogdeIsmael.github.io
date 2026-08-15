# Grafos y árboles

Bloque 6 del programa. Vértices y lados, matriz de adyacencia, tipos especiales, el
algoritmo de Havel-Hakimi, caminos, grafos bipartidos, planos, coloración y árboles.

## Definiciones

```{=latex}
\begin{definicion}[Grafo]
Un par $G=(V,E)$ con $V$ un conjunto finito no vacío de vértices y $E$ un conjunto de
pares no ordenados de vértices, los lados.
\end{definicion}
```

| Concepto | Definición |
| --- | --- |
| Adyacentes | dos vértices unidos por un lado |
| Incidente | un lado y cada uno de sus extremos |
| Grado $\gr(v)$ | número de lados incidentes en $v$ |
| Grafo simple | sin bucles ni lados repetidos |
| Multigrafo | admite lados repetidos |
| Dirigido | los lados son pares ordenados |
| Ponderado | cada lado lleva un peso |

```{=latex}
\begin{teorema}[Del apretón de manos]
$$\sum_{v\in V}\gr(v) = 2\lvert E\rvert$$
En consecuencia, el número de vértices de grado impar es par.
\end{teorema}

\begin{demostracion}
Cada lado aporta uno al grado de cada uno de sus dos extremos, así que la suma de
grados cuenta cada lado exactamente dos veces. Al ser la suma par, los sumandos impares
tienen que ser un número par de ellos.
\end{demostracion}
```

Es el resultado más rentable del bloque: descarta de un vistazo montones de grafos
imposibles. **No existe un grafo con cinco vértices todos de grado 3**, porque la suma
sería 15, impar.

## Representación

| Representación | Espacio | ¿Hay lado $(u,v)$? | Vecinos de $u$ |
| --- | --- | --- | --- |
| Matriz de adyacencia | $\Theta(n^2)$ | $\Theta(1)$ | $\Theta(n)$ |
| Listas de adyacencia | $\Theta(n+m)$ | $\Theta(\gr(u))$ | $\Theta(\gr(u))$ |
| Matriz de incidencia | $\Theta(nm)$ | --- | --- |

La matriz de adyacencia de un grafo no dirigido es **simétrica** con diagonal nula, y
tiene una propiedad que se usa mucho:

```{=latex}
\begin{proposicion}
El elemento $(i,j)$ de $A^k$ es el número de caminos de longitud $k$ entre $v_i$ y
$v_j$.
\end{proposicion}
```

De ahí que la traza de $A^3$ dividida por 6 cuente los triángulos del grafo, y que las
potencias de la matriz respondan preguntas de conectividad sin recorrer nada.

## Tipos especiales

| Grafo | Notación | Descripción | Lados |
| --- | --- | --- | ---: |
| Completo | $K_n$ | todos con todos | $\binom{n}{2}$ |
| Ciclo | $C_n$ | un solo ciclo de $n$ vértices | $n$ |
| Camino | $P_n$ | una cadena | $n-1$ |
| Bipartido completo | $K_{m,n}$ | dos clases, todo cruzado | $mn$ |
| Rueda | $W_n$ | un ciclo más un centro | $2n$ |
| $k$-regular | --- | todos los vértices de grado $k$ | $nk/2$ |
| Hipercubo | $Q_k$ | cadenas de $k$ bits, unidas si difieren en uno | $k\,2^{k-1}$ |

El **hipercubo** aparece en arquitecturas de interconexión de multiprocesadores: con
$2^k$ nodos, dos cualesquiera están a distancia como mucho $k$, y cada nodo solo
necesita $k$ enlaces.

### El algoritmo de Havel-Hakimi

Decide si una lista de números puede ser la sucesión de grados de un grafo simple.

```{=latex}
\begin{teorema}[Havel-Hakimi]
La sucesión $d_1\ge d_2\ge\dots\ge d_n$ es gráfica si y solo si lo es la que resulta de
borrar $d_1$ y restar uno a los $d_1$ términos siguientes, reordenando después.
\end{teorema}
```

El procedimiento termina cuando quedan todos ceros —la sucesión es gráfica— o aparece
un número negativo o mayor que la longitud restante —no lo es—.

```{=latex}
\begin{ejemplo}
$(4,3,3,2,2)$: se borra el 4 y se resta uno a los cuatro siguientes, que da
$(2,2,1,1)$. Se borra el 2 y se resta uno a los dos primeros: $(1,0,1)$, que reordenado
es $(1,1,0)$. Se borra el 1 y se resta uno al siguiente: $(0,0)$. Es gráfica.

\medskip
$(4,4,4,4,4,1)$: la suma es 21, impar, así que ni hace falta el algoritmo. El apretón
de manos ya la descarta.
\end{ejemplo}
```

## Caminos y conectividad

| Concepto | Definición |
| --- | --- |
| Recorrido | secuencia de vértices consecutivamente adyacentes |
| Camino | recorrido sin vértices repetidos |
| Ciclo | camino cerrado |
| Conexo | hay camino entre todo par de vértices |
| Componente conexa | subgrafo conexo maximal |
| Distancia | longitud del camino más corto |
| Diámetro | la mayor de las distancias |

### Recorridos eulerianos y hamiltonianos

| | Euleriano | Hamiltoniano |
| --- | --- | --- |
| Recorre | todos los **lados** una vez | todos los **vértices** una vez |
| Caracterización | conexo y 0 o 2 vértices de grado impar | **no se conoce ninguna** |
| Decidir si existe | $\Theta(n+m)$ | NP-completo |

**Ese contraste es la lección del apartado.** Dos problemas casi idénticos de enunciado
tienen dificultades opuestas: uno se resuelve mirando los grados, y del otro no se
conoce ningún algoritmo eficiente.

```{=latex}
\begin{teorema}[Euler]
Un grafo conexo tiene un circuito euleriano si y solo si todos sus vértices tienen
grado par, y un camino euleriano abierto si y solo si tiene exactamente dos de grado
impar.
\end{teorema}
```

Es el resultado con el que Euler resolvió el problema de los puentes de Königsberg: los
cuatro vértices tenían grado impar, así que ningún recorrido era posible.

## Grafos bipartidos

```{=latex}
\begin{definicion}
$G$ es bipartido si $V$ se parte en dos conjuntos disjuntos de forma que todo lado une
un vértice de uno con uno del otro.
\end{definicion}

\begin{teorema}
Un grafo es bipartido si y solo si no contiene ciclos de longitud impar.
\end{teorema}
```

La caracterización da un algoritmo directo: se recorre en anchura pintando los niveles
alternativamente de dos colores, y se comprueba que ningún lado une dos del mismo. Es
$\Theta(n+m)$.

Los bipartidos son el marco de los problemas de **emparejamiento**: asignar tareas a
personas, alumnos a plazas, o candidatos a puestos.

```{=latex}
\begin{teorema}[Hall]
Un grafo bipartido con clases $X$ e $Y$ tiene un emparejamiento que satura $X$ si y
solo si $\lvert N(S)\rvert \ge \lvert S\rvert$ para todo $S\subseteq X$, donde $N(S)$ es
el conjunto de vecinos de $S$.
\end{teorema}
```

La condición dice que ningún grupo de $k$ elementos puede tener menos de $k$ opciones
entre todos. Es el mismo principio del palomar, aplicado a subconjuntos.

## Grafos planos

```{=latex}
\begin{definicion}
$G$ es plano si admite un dibujo en el plano sin que se corten sus lados.
\end{definicion}

\begin{teorema}[Fórmula de Euler]
En un grafo plano conexo con $n$ vértices, $m$ lados y $c$ caras,
$$n - m + c = 2$$
\end{teorema}

\begin{corolario}
Un grafo plano simple con $n\ge 3$ cumple $m \le 3n-6$. Si además no tiene triángulos,
$m \le 2n-4$.
\end{corolario}
```

El corolario es la herramienta práctica: **si un grafo tiene demasiados lados, no es
plano**, y basta contar.

```{=latex}
\begin{ejemplo}
$K_5$ tiene $n=5$ y $m=10$, y $3n-6 = 9 < 10$: no es plano.

\medskip
$K_{3,3}$ tiene $n=6$ y $m=9$, y $3n-6 = 12 \ge 9$, así que el criterio no decide. Pero
es bipartido y por tanto no tiene triángulos, luego se aplica $m\le 2n-4 = 8 < 9$:
tampoco es plano.
\end{ejemplo}
```

```{=latex}
\begin{teorema}[Kuratowski]
Un grafo es plano si y solo si no contiene ningún subgrafo homeomorfo a $K_5$ ni a
$K_{3,3}$.
\end{teorema}
```

Que **los dos únicos obstáculos sean esos dos grafos** es un resultado notable: toda la
no planaridad del mundo se reduce a dos configuraciones.

## Coloración

```{=latex}
\begin{definicion}
Una coloración propia asigna colores a los vértices de modo que dos adyacentes nunca
compartan color. El número cromático $\chi(G)$ es el mínimo de colores necesario.
\end{definicion}
```

| Grafo | $\chi$ |
| --- | ---: |
| $K_n$ | $n$ |
| Bipartido con al menos un lado | 2 |
| Ciclo $C_n$ con $n$ par | 2 |
| Ciclo $C_n$ con $n$ impar | 3 |
| Árbol con al menos un lado | 2 |
| Plano | $\le 4$ |

```{=latex}
\begin{teorema}[De los cuatro colores]
Todo grafo plano se puede colorear con cuatro colores.
\end{teorema}
```

Enunciado en 1852 y demostrado en 1976 por Appel y Haken **con ayuda del ordenador**,
comprobando 1936 configuraciones inevitables. Fue la primera demostración importante que
nadie podía verificar a mano, y abrió el debate sobre qué cuenta como demostración.

Calcular $\chi(G)$ en general es NP-difícil, así que en la práctica se usan heurísticas
voraces: se ordenan los vértices y se asigna a cada uno el menor color libre. El
resultado depende del orden y nunca supera $\Delta+1$ colores, con $\Delta$ el grado
máximo.

**Dónde aparece la coloración**: asignación de frecuencias, planificación de exámenes
sin solapes, y asignación de registros en un compilador, donde los vértices son
variables vivas y los lados los conflictos.

## Árboles

```{=latex}
\begin{definicion}
Un árbol es un grafo conexo sin ciclos.
\end{definicion}

\begin{teorema}[Caracterizaciones]
Para un grafo $G$ con $n$ vértices son equivalentes:
\begin{itemize}
\item $G$ es un árbol.
\item $G$ es conexo y tiene $n-1$ lados.
\item $G$ no tiene ciclos y tiene $n-1$ lados.
\item Entre todo par de vértices hay un único camino.
\item $G$ es conexo y quitar cualquier lado lo desconecta.
\item $G$ no tiene ciclos y añadir cualquier lado crea uno.
\end{itemize}
\end{teorema}
```

```{=latex}
\begin{center}
\begin{tikzpicture}[
  every node/.style={draw, circle, minimum size=6mm, font=\scriptsize, inner sep=0pt},
  level distance=11mm,
  level 1/.style={sibling distance=26mm},
  level 2/.style={sibling distance=13mm}
]
\node {r}
  child { node {a}
    child { node {d} }
    child { node {e} } }
  child { node {b}
    child { node {f} } }
  child { node {c} };
\end{tikzpicture}
\end{center}
```

| Concepto | Definición |
| --- | --- |
| Árbol con raíz | se designa un vértice como raíz |
| Hoja | vértice de grado 1 distinto de la raíz |
| Bosque | grafo sin ciclos, no necesariamente conexo |
| Árbol de recubrimiento | subgrafo que es árbol y contiene todos los vértices |

```{=latex}
\begin{teorema}[Cayley]
El número de árboles etiquetados distintos sobre $n$ vértices es $n^{n-2}$.
\end{teorema}
```

Con 10 vértices son cien millones, lo que descarta cualquier enfoque por enumeración y
justifica los algoritmos de Prim y Kruskal para el árbol de recubrimiento mínimo.

| Problema | Algoritmo | Coste |
| --- | --- | --- |
| Árbol de recubrimiento mínimo | Prim, Kruskal | $\Theta(m\log n)$ |
| Camino mínimo con pesos no negativos | Dijkstra | $\Theta((n+m)\log n)$ |
| Recorrido en anchura y profundidad | BFS, DFS | $\Theta(n+m)$ |

Los árboles con raíz son además la estructura de los códigos de prefijo. En un
**código de Huffman**, los símbolos van en las hojas y el camino desde la raíz da la
codificación, y que estén en las hojas es lo que garantiza que ningún código sea
prefijo de otro.

## Ejercicios

```{=latex}
\begin{ejercicio}
¿Existe un grafo simple con 6 vértices y grados $(5,5,4,3,2,1)$?
\end{ejercicio}

\begin{solucion}
La suma es 20, par, así que el apretón de manos no lo descarta. Havel-Hakimi: se borra
el primer 5 y se resta uno a los cinco siguientes, dando $(4,3,2,1,0)$. Se borra el 4 y
se resta uno a los cuatro siguientes: $(2,1,0,-1)$. Aparece un negativo, así que la
sucesión no es gráfica: no existe tal grafo.
\end{solucion}

\begin{ejercicio}
Un grafo plano conexo tiene 10 vértices y todas sus caras son triángulos. ¿Cuántos
lados y caras tiene?
\end{ejercicio}

\begin{solucion}
Cada cara está rodeada por 3 lados y cada lado separa 2 caras, luego $3c = 2m$. Con
Euler, $10 - m + c = 2$ y $c = 2m/3$, de donde $10 - m + 2m/3 = 2$, es decir
$m/3 = 8$ y $m = 24$. Entonces $c = 16$. Se comprueba la cota: $3n-6 = 24 = m$, así que
es un grafo plano maximal, como debe ser si todas las caras son triángulos.
\end{solucion}

\begin{ejercicio}
Demostrar que todo árbol con al menos dos vértices tiene al menos dos hojas.
\end{ejercicio}

\begin{solucion}
Se toma el camino más largo del árbol, $v_0,\dots,v_k$ con $k\ge1$. Si $v_0$ tuviera
otro vecino además de $v_1$, ese vecino o alarga el camino —contradicción con la
maximalidad— o ya está en él, y entonces se forma un ciclo, imposible en un árbol.
Luego $v_0$ es hoja, y por el mismo argumento $v_k$ también.
\end{solucion}
```

El desarrollo de la teoría de grafos está en \cite{biggs1998}, \cite{grimaldi1997} y
\cite{rosen2003}, con problemas en \cite{lipschutz2004} y \cite{jimenez2015}.
