# Introducción a la eficiencia de los algoritmos

Tema 1 del programa. Antes de elegir una estructura de datos hay que saber medir
qué cuesta usarla, y esa medida es la que decide entre un vector y una tabla hash
mucho más que cualquier preferencia de estilo.

## Por qué se mide y no se cronometra

Cronometrar un programa responde a la pregunta equivocada. El tiempo que marca el
reloj depende del procesador, del compilador, de las opciones de optimización, de
lo que la caché tenga cargado y de qué más esté ejecutando la máquina. Dos
ejecuciones del mismo binario sobre los mismos datos dan cifras distintas.

Lo que se quiere saber es otra cosa: **cómo crece el coste cuando crece la
entrada**. Esa pregunta tiene respuesta independiente de la máquina, y es la que
permite decidir antes de escribir el código.

| Pregunta | Se responde con |
| --- | --- |
| ¿Cuánto tarda este programa en mi portátil? | cronometrando |
| ¿Qué pasa si los datos se multiplican por diez? | analizando su eficiencia |
| ¿Cuál de estas dos implementaciones escala mejor? | analizando, y confirmando midiendo |

Las dos cosas se hacen, y en la práctica se contrastan. El apartado final del tema
y la primera práctica de la asignatura consisten justamente en eso: comparar la
eficiencia teórica con la empírica y explicar dónde se separan.

## El modelo de coste

Se cuenta el número de **operaciones elementales** que ejecuta el algoritmo en
función del tamaño de la entrada, que se llama $n$. Una operación elemental es la
que cuesta un tiempo acotado por una constante: una asignación entre tipos
simples, una comparación, una operación aritmética, un acceso a una posición de un
vector.

Bajo ese modelo, el coste de las construcciones del lenguaje se compone así:

| Construcción | Coste |
| --- | --- |
| Secuencia de instrucciones | la suma de sus costes |
| Condicional | el coste de la condición más el peor de las dos ramas |
| Bucle que se repite $k$ veces | $k$ veces el coste del cuerpo |
| Bucles anidados | el producto |
| Llamada a función | el coste de la función |

Dos precauciones que se saltan a menudo:

- **Un acceso a un vector cuesta lo mismo esté donde esté**, pero recorrer una
  lista enlazada hasta la posición $i$ cuesta $i$ pasos. El corchete no siempre
  vale lo mismo, y de ahí sale la mitad de las decisiones de este temario.
- **Una llamada a una función de biblioteca no es una operación elemental.**
  Insertar en mitad de un `vector` de la STL mueve todo lo que hay detrás. Si se
  cuenta como un paso, el análisis sale mal.

## Notaciones asintóticas

Interesa el comportamiento cuando $n$ crece, así que se descartan las constantes
multiplicativas y los términos de orden inferior. Las tres notaciones habituales:

```{=latex}
\begin{definicion}[Cota superior]
$f(n) \in O(g(n))$ si existen constantes $c > 0$ y $n_0$ tales que
$f(n) \le c\,g(n)$ para todo $n \ge n_0$.
\end{definicion}

\begin{definicion}[Cota inferior]
$f(n) \in \Omega(g(n))$ si existen constantes $c > 0$ y $n_0$ tales que
$f(n) \ge c\,g(n)$ para todo $n \ge n_0$.
\end{definicion}

\begin{definicion}[Orden exacto]
$f(n) \in \Theta(g(n))$ si $f(n) \in O(g(n))$ y $f(n) \in \Omega(g(n))$.
\end{definicion}
```

En el uso corriente se escribe $O$ donde se quiere decir $\Theta$. No es grave
mientras la cota sea ajustada, pero conviene saber que decir «este algoritmo es
$O(n^2)$» no descarta que sea también $O(n^3)$: una cota superior sigue siendo
cierta aunque sea mala.

### Las órdenes que aparecen

| Orden | Nombre | $n = 10^6$ da |
| --- | --- | --- |
| $O(1)$ | constante | 1 operación |
| $O(\log n)$ | logarítmico | unas 20 |
| $O(n)$ | lineal | $10^6$ |
| $O(n\log n)$ | casi lineal | $2\cdot 10^7$ |
| $O(n^2)$ | cuadrático | $10^{12}$ |
| $O(2^n)$ | exponencial | inabordable |

La tabla explica de un vistazo por qué este temario existe. Con un millón de
elementos, un algoritmo cuadrático necesita un billón de operaciones y uno
logarítmico veinte. La diferencia entre buscar en un vector desordenado y buscar
en un árbol equilibrado es exactamente esa.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=6.2cm,
  xlabel={$n$}, ylabel={operaciones},
  domain=1:16, samples=60,
  ymax=130, ymin=0, xmin=1,
  restrict y to domain=0:130,
  legend pos=north west,
  legend style={font=\scriptsize, draw=none},
  tick label style={font=\scriptsize},
  label style={font=\small},
  axis lines=left,
]
\addplot[thick, dashed] {ln(x)/ln(2)};        \addlegendentry{$\log n$}
\addplot[thick] {x};                          \addlegendentry{$n$}
\addplot[thick, dotted] {x*ln(x)/ln(2)};      \addlegendentry{$n\log n$}
\addplot[thick, densely dashdotted] {x^2};    \addlegendentry{$n^2$}
\end{axis}
\end{tikzpicture}
\end{center}
```

### Reglas de manejo

Con $f \in O(n^a)$ y $g \in O(n^b)$:

| Composición | Orden resultante |
| --- | --- |
| $f + g$ | $O(n^{\max(a,b)})$ |
| $f \cdot g$ | $O(n^{a+b})$ |
| $c \cdot f$, con $c$ constante | $O(n^a)$ |

De la primera sale la regla que más se usa: **en una suma manda el término mayor**.
Un algoritmo que ordena en $O(n\log n)$ y luego recorre el resultado en $O(n)$ es
$O(n\log n)$; el recorrido no cambia nada.

## Casos mejor, peor y medio

El coste rara vez depende solo del tamaño. Buscar un elemento en un vector
desordenado recorriendo desde el principio cuesta:

| Caso | Cuándo | Coste |
| --- | --- | --- |
| Mejor | está el primero | $\Theta(1)$ |
| Peor | está el último, o no está | $\Theta(n)$ |
| Medio | uniformemente distribuido | $\Theta(n)$ |

El **peor caso** es el que se usa por defecto, porque es el único que garantiza
algo. El caso medio exige hipótesis sobre la distribución de las entradas, y esas
hipótesis a menudo son falsas: los datos reales llegan casi ordenados con más
frecuencia de la que un modelo uniforme predice.

```{=latex}
\begin{anotacion}
Que el caso medio y el peor coincidan en orden, como en la búsqueda lineal, no es
lo habitual. En quicksort el caso medio es $\Theta(n\log n)$ y el peor
$\Theta(n^2)$, y la diferencia entre los dos es lo que hace que la elección del
pivote importe tanto.
\end{anotacion}
```

## Coste amortizado

Hay operaciones que casi siempre son baratas y de vez en cuando muy caras. Añadir
al final de un vector dinámico es el ejemplo canónico: normalmente cuesta $O(1)$,
pero cuando se agota la capacidad hay que reservar un bloque mayor y copiar todo,
que cuesta $O(n)$.

Analizar solo el peor caso diría que la operación es $O(n)$, y sería engañoso. El
**análisis amortizado** reparte el coste de las operaciones caras entre las
baratas que las rodean.

```{=latex}
\begin{ejemplo}
Si al llenarse la capacidad se dobla, una secuencia de $n$ inserciones provoca
redimensiones de tamaños $1, 2, 4, \dots, n$. El total copiado es
$1 + 2 + 4 + \cdots + n < 2n$, así que las $n$ inserciones cuestan $O(n)$ entre
todas y cada una sale a $O(1)$ amortizado.
\end{ejemplo}
```

El detalle importa: si en vez de doblar se aumentase en una cantidad fija, las
redimensiones serían $\Theta(n)$ en número y el total $\Theta(n^2)$. **Doblar es lo
que hace que la operación sea barata**, y es lo que hace la STL.

## Recurrencias

Los algoritmos recursivos dan lugar a ecuaciones de recurrencia. La forma más
frecuente en esta asignatura es la que produce dividir el problema:

$$T(n) = a\,T(n/b) + f(n)$$

con $a$ subproblemas de tamaño $n/b$ y $f(n)$ el coste de dividir y combinar.

| Algoritmo | Recurrencia | Solución |
| --- | --- | --- |
| Búsqueda binaria | $T(n) = T(n/2) + \Theta(1)$ | $\Theta(\log n)$ |
| Mergesort | $T(n) = 2T(n/2) + \Theta(n)$ | $\Theta(n\log n)$ |
| Recorrido de un árbol | $T(n) = 2T(n/2) + \Theta(1)$ | $\Theta(n)$ |
| Quicksort, peor caso | $T(n) = T(n-1) + \Theta(n)$ | $\Theta(n^2)$ |

La primera fila es la que sostiene medio temario: **partir por la mitad de forma
repetida da un coste logarítmico**, y de ahí que las estructuras de búsqueda
eficientes sean todas, de una forma u otra, particiones sucesivas del conjunto.

## Eficiencia espacial

El coste en memoria se analiza igual, y a veces decide. Tres cantidades distintas
que conviene no confundir:

| Cantidad | Qué mide |
| --- | --- |
| Espacio de los datos | lo que ocupan los elementos |
| Sobrecarga de la estructura | punteros, cabeceras, huecos reservados |
| Espacio auxiliar | lo que el algoritmo necesita además de la entrada |

Una lista enlazada de enteros de 4 bytes gasta 8 o 16 bytes más por nodo solo en
punteros. Con un millón de elementos, eso es más memoria en punteros que en datos.
Es la primera razón para preferir un vector cuando el acceso por posición basta.

Y el espacio auxiliar es lo que separa mergesort de quicksort: los dos son
$\Theta(n\log n)$ en tiempo medio, pero mergesort necesita $\Theta(n)$ de memoria
extra y quicksort ordena sobre el propio vector.

## Eficiencia teórica frente a empírica

El análisis asintótico descarta constantes, y las constantes existen. Tres efectos
que aparecen al medir de verdad y que el modelo no captura:

- **La localidad de referencia.** Recorrer un vector lee posiciones contiguas, que
  la caché trae por bloques. Recorrer una lista enlazada salta por la memoria y
  falla en caché casi siempre. Los dos recorridos son $\Theta(n)$ y uno puede ser
  un orden de magnitud más lento.
- **El punto de cruce.** Un algoritmo $\Theta(n\log n)$ con constante grande pierde
  frente a uno $\Theta(n^2)$ con constante pequeña mientras $n$ sea chico. Por eso
  las implementaciones industriales de ordenación pasan a inserción directa por
  debajo de unas decenas de elementos.
- **El coste de reservar memoria.** Pedir memoria al sistema no es una operación
  elemental. Una estructura que reserva un nodo por elemento paga ese coste $n$
  veces.

El procedimiento para medir bien, que es el de la primera práctica:

1. Generar entradas de tamaños crecientes, con el mismo generador y semilla fija.
2. Repetir cada medida varias veces y quedarse con la mediana, no con la media:
   un pico del sistema operativo contamina la media y no la mediana.
3. Cronometrar solo la parte que se estudia, no la generación de los datos.
4. Representar tiempo frente a $n$, y comprobar si al dividir por la función
   teórica el cociente tiende a una constante.

El paso 4 es la comprobación de verdad. Si el algoritmo es $\Theta(n\log n)$, el
cociente $t(n)/(n\log n)$ debe estabilizarse; si sigue creciendo, el análisis o la
implementación no dicen lo mismo que el código.

```{=latex}
\begin{anotacion}
El compilador puede eliminar por completo un bucle cuyo resultado no se usa. Es la
forma más común de medir cero segundos y creer que se ha escrito un algoritmo
rápido. Se evita usando el resultado para algo, aunque sea acumularlo e
imprimirlo al final.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Determinar el orden de eficiencia del siguiente fragmento en función de $n$:

\medskip
\texttt{for (i = 0; i < n; ++i)}\\
\texttt{\ \ for (j = i; j < n; ++j)}\\
\texttt{\ \ \ \ ++cuenta;}
\end{ejercicio}

\begin{solucion}
El bucle interno se ejecuta $n - i$ veces, así que el total es
$\sum_{i=0}^{n-1}(n-i) = n(n+1)/2$. Es $\Theta(n^2)$: que el segundo bucle no
empiece en cero divide el trabajo entre dos, y una constante no cambia el orden.
\end{solucion}

\begin{ejercicio}
Una estructura resuelve la búsqueda en $\Theta(\log n)$ y la inserción en
$\Theta(n)$. Otra resuelve las dos en $\Theta(\sqrt{n})$. ¿Cuál conviene para una
carga con un 90\,\% de búsquedas y un 10\,\% de inserciones?
\end{ejercicio}

\begin{solucion}
El coste medio por operación es $0{,}9\log n + 0{,}1n$ frente a $\sqrt{n}$. El
término $0{,}1n$ domina sobre $\sqrt{n}$ en cuanto $n$ crece, así que la segunda
gana pese a ser peor en búsqueda. La moraleja: se optimiza la mezcla real de
operaciones, no la operación más frecuente.
\end{solucion}

\begin{ejercicio}
Un vector dinámico crece multiplicando su capacidad por $1{,}5$ en vez de por $2$.
¿Sigue siendo $O(1)$ amortizado el coste de insertar al final?
\end{ejercicio}

\begin{solucion}
Sí. Los tamaños copiados forman una progresión geométrica de razón $1{,}5$, cuya
suma hasta $n$ está acotada por $3n$. Cualquier factor de crecimiento estrictamente
mayor que uno da coste amortizado constante; lo que lo rompe es crecer en una
cantidad fija.
\end{solucion}
```

El desarrollo formal de estas nociones está en \cite{rodriguez2020} y
\cite{garrido2006}, y el tratamiento del análisis amortizado en
\cite{carrano2017}.
