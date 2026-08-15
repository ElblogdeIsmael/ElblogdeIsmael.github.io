# Sistemas de ecuaciones lineales y matrices

Bloque 3 del programa. El método de Gauss-Jordan, la forma normal de Hermite, las
operaciones con matrices, la matriz inversa y los determinantes.

## Sistemas de ecuaciones lineales

Un sistema de $m$ ecuaciones con $n$ incógnitas sobre un cuerpo $K$:

$$\begin{cases}
a_{11}x_1 + \dots + a_{1n}x_n = b_1 \\
\ \ \vdots \\
a_{m1}x_1 + \dots + a_{mn}x_n = b_m
\end{cases}
\qquad\Longleftrightarrow\qquad A\mathbf{x} = \mathbf{b}$$

| Clasificación | Cuándo |
| --- | --- |
| Compatible determinado | solución única |
| Compatible indeterminado | infinitas soluciones |
| Incompatible | ninguna |
| Homogéneo | $\mathbf{b}=\mathbf{0}$; siempre compatible |

Un sistema homogéneo nunca es incompatible, porque $\mathbf{x}=\mathbf{0}$ siempre lo
resuelve. La pregunta interesante es si tiene **otras** soluciones, y la respuesta la
da el rango.

## El método de Gauss-Jordan

Se aplican operaciones elementales por filas a la matriz ampliada hasta llegar a una
forma en la que la solución se lee.

| Operación elemental | Efecto |
| --- | --- |
| $F_i \leftrightarrow F_j$ | intercambiar filas |
| $F_i \to \lambda F_i$, $\lambda\ne 0$ | escalar una fila |
| $F_i \to F_i + \lambda F_j$ | sumar un múltiplo de otra |

Las tres son reversibles, y por eso **el sistema resultante tiene exactamente las mismas
soluciones**. Esa es la justificación del método, y conviene tenerla presente: no se
está simplificando por comodidad, se está sustituyendo por un sistema equivalente.

| Forma | Qué exige |
| --- | --- |
| Escalonada (Gauss) | ceros bajo cada pivote; los pivotes avanzan a la derecha |
| **Escalonada reducida (Gauss-Jordan)** | además, pivotes iguales a 1 y ceros también encima |

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.9, font=\scriptsize]
\draw (0,0) rectangle (3.0,2.4);
\draw (0,2.4) -- (3.0,0.0);
\node at (0.9,1.8) {$\ast$};
\node at (2.1,0.6) {$0$};
\node[anchor=north] at (1.5,-0.15) {escalonada};
\draw (4.4,0) rectangle (7.4,2.4);
\draw (4.4,2.4) -- (6.8,0.0);
\node at (5.3,1.9) {$1$};
\node at (5.9,1.3) {$1$};
\node at (6.5,0.7) {$1$};
\node at (6.3,1.9) {$0$};
\node at (5.0,0.6) {$0$};
\node[anchor=north] at (5.9,-0.15) {escalonada reducida};
\end{tikzpicture}
\end{center}
```

### El teorema de Rouché-Frobenius

```{=latex}
\begin{teorema}[Rouché-Frobenius]
Sea $A\mathbf{x}=\mathbf{b}$ con $n$ incógnitas y $A^{*}$ la matriz ampliada.
\begin{itemize}
\item Si $\rg A \ne \rg A^{*}$, el sistema es incompatible.
\item Si $\rg A = \rg A^{*} = n$, es compatible determinado.
\item Si $\rg A = \rg A^{*} = r < n$, es compatible indeterminado con $n-r$
      parámetros libres.
\end{itemize}
\end{teorema}
```

En la práctica no hace falta calcular rangos aparte: **la forma escalonada los muestra
a la vez**. El número de pivotes es el rango de $A$; una fila del tipo
$(0\ 0\ \dots\ 0 \mid c)$ con $c \ne 0$ delata la incompatibilidad; y las columnas sin
pivote son los parámetros libres.

```{=latex}
\begin{ejemplo}
$$\left(\begin{array}{ccc|c}
1 & 2 & -1 & 3 \\
2 & 4 & 1 & 9 \\
1 & 2 & 2 & 6
\end{array}\right)
\xrightarrow{\ \ }
\left(\begin{array}{ccc|c}
1 & 2 & 0 & 4 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0
\end{array}\right)$$

Hay dos pivotes, en las columnas 1 y 3, así que $\rg A = \rg A^{*} = 2 < 3$: compatible
indeterminado con un parámetro. Tomando $x_2 = t$, la solución es
$(4-2t,\ t,\ 1)$.
\end{ejemplo}
```

### Forma normal de Hermite

Es la forma escalonada reducida por filas, y su interés es que **es única**: dos
matrices tienen la misma forma de Hermite si y solo si sus filas generan el mismo
subespacio. La forma escalonada sin reducir no lo es, porque depende de las operaciones
concretas que se hayan hecho.

De ahí que sirva como forma canónica para decidir la equivalencia por filas de dos
matrices, sin comparar los caminos que llevaron a ellas.

## Matrices

| Operación | Definición | Condición |
| --- | --- | --- |
| Suma | elemento a elemento | mismo tamaño |
| Producto por escalar | elemento a elemento | --- |
| Producto | $(AB)_{ij} = \sum_k a_{ik}b_{kj}$ | columnas de $A$ = filas de $B$ |
| Traspuesta | $(A^{T})_{ij} = a_{ji}$ | --- |

El producto es asociativo y distributivo, y **no es conmutativo**. Dos consecuencias
que se usan mal con frecuencia:

- $(A+B)^2 \ne A^2 + 2AB + B^2$ salvo que $A$ y $B$ conmuten.
- $(AB)^{T} = B^{T}A^{T}$, con el orden invertido. Lo mismo para la inversa.

Y hay **divisores de cero**: $AB = 0$ no obliga a que $A$ o $B$ sean nulas. El anillo de
matrices no es un dominio de integridad, así que no se puede cancelar.

| Tipo de matriz | Definición |
| --- | --- |
| Simétrica | $A^{T} = A$ |
| Antisimétrica | $A^{T} = -A$ |
| Diagonal | nula fuera de la diagonal |
| Triangular | nula por debajo o por encima |
| Ortogonal | $A^{T}A = I$ |
| Idempotente | $A^2 = A$ |
| Nilpotente | $A^k = 0$ para algún $k$ |

## Rango

```{=latex}
\begin{definicion}[Rango]
Número de filas no nulas de una forma escalonada de $A$. Coincide con el número máximo
de filas linealmente independientes y con el de columnas linealmente independientes.
\end{definicion}
```

Que el rango por filas y por columnas coincidan no es evidente y es uno de los
resultados centrales del bloque: dice que la matriz tiene **una sola** dimensión
esencial, mirada desde donde se mire.

| Propiedad | Enunciado |
| --- | --- |
| Acotación | $\rg A \le \min(m,n)$ |
| Traspuesta | $\rg A = \rg A^{T}$ |
| Producto | $\rg(AB) \le \min(\rg A, \rg B)$ |
| Invertibilidad | $A_{n\times n}$ es invertible $\iff \rg A = n$ |

## Matriz inversa

```{=latex}
\begin{definicion}
$A$ cuadrada es invertible si existe $A^{-1}$ con $AA^{-1}=A^{-1}A=I$. La inversa,
cuando existe, es única.
\end{definicion}

\begin{teorema}[Caracterizaciones de la invertibilidad]
Para $A$ de orden $n$, son equivalentes:
\begin{itemize}
\item $A$ es invertible.
\item $\rg A = n$.
\item $\det A \ne 0$.
\item $A\mathbf{x}=\mathbf{0}$ solo tiene la solución trivial.
\item $A\mathbf{x}=\mathbf{b}$ tiene solución única para todo $\mathbf{b}$.
\item Las filas de $A$ son linealmente independientes.
\item $A$ es producto de matrices elementales.
\end{itemize}
\end{teorema}
```

Que las siete sean equivalentes es lo que hace del rango la herramienta que responde
todas las preguntas del bloque.

### Cálculo por Gauss-Jordan

Se escribe $(A \mid I)$ y se reduce hasta $(I \mid A^{-1})$. Si en el camino aparece una
fila de ceros a la izquierda, la matriz no es invertible.

Es el método que se usa: la fórmula con la adjunta necesita $n^2$ determinantes de orden
$n-1$ y **solo es practicable para orden 2 o 3**.

$$A^{-1} = \frac{1}{\det A}\,\operatorname{adj}(A)^{T}$$

## Determinantes

Para orden 2 y 3, las reglas conocidas; en general, el desarrollo por una fila o
columna:

$$\det A = \sum_{j=1}^{n}(-1)^{i+j}a_{ij}\,M_{ij}$$

con $M_{ij}$ el menor complementario.

| Propiedad | Enunciado |
| --- | --- |
| Filas | $\det A^{T} = \det A$ |
| Intercambio | cambiar dos filas cambia el signo |
| Escalado | multiplicar una fila por $\lambda$ multiplica el determinante por $\lambda$ |
| Combinación | sumar a una fila un múltiplo de otra **no lo cambia** |
| Fila nula o repetida | el determinante es 0 |
| Producto | $\det(AB) = \det A \cdot \det B$ |
| Inversa | $\det(A^{-1}) = 1/\det A$ |
| Escalar | $\det(\lambda A) = \lambda^{n}\det A$ |
| Triangular | el producto de la diagonal |

Las filas cuarta y última son las que dan el método de cálculo: se triangula por Gauss
—que no cambia el determinante— y se multiplica la diagonal. Coste $O(n^3)$ frente a
$O(n!)$ del desarrollo por menores.

```{=latex}
\begin{anotacion}
La tercera y la octava se confunden a menudo. Multiplicar \emph{una} fila por $\lambda$
multiplica el determinante por $\lambda$; multiplicar \emph{toda} la matriz lo
multiplica por $\lambda^n$, porque son $n$ filas.
\end{anotacion}
```

### Regla de Cramer

Si $\det A \ne 0$, la solución del sistema es

$$x_i = \frac{\det A_i}{\det A}$$

con $A_i$ la matriz $A$ cambiando su columna $i$ por $\mathbf{b}$.

Su valor es **teórico**: da la solución en forma cerrada y muestra que depende de los
datos de manera continua. Para calcular es inviable, porque necesita $n+1$
determinantes.

## Ejercicios

```{=latex}
\begin{ejercicio}
Discutir según $a$ el sistema
$$\begin{cases} x + y + z = 1 \\ x + ay + z = 1 \\ x + y + az = a \end{cases}$$
\end{ejercicio}

\begin{solucion}
$\det A = (a-1)^2$. Si $a \ne 1$ el sistema es compatible determinado. Si $a = 1$, las
tres ecuaciones se convierten en $x+y+z=1$ las dos primeras y $x+y+z=1$ la tercera:
$\rg A = \rg A^{*} = 1 < 3$, compatible indeterminado con dos parámetros. No hay ningún
valor que lo haga incompatible.
\end{solucion}

\begin{ejercicio}
Si $A$ es de orden 4 y $\det A = 3$, calcular $\det(2A)$, $\det(A^{-1})$ y
$\det(A^{T}A)$.
\end{ejercicio}

\begin{solucion}
$\det(2A) = 2^4\cdot 3 = 48$, porque el factor afecta a las cuatro filas.
$\det(A^{-1}) = 1/3$. Y $\det(A^{T}A) = \det A^{T}\cdot\det A = 3\cdot 3 = 9$.
\end{solucion}

\begin{ejercicio}
Demostrar que si $A^2 = A$ y $A \ne I$, entonces $A$ no es invertible.
\end{ejercicio}

\begin{solucion}
Si lo fuera, multiplicando $A^2 = A$ por $A^{-1}$ quedaría $A = I$, en contra de la
hipótesis. Alternativamente, de $\det(A)^2 = \det A$ sale $\det A \in \{0,1\}$, y el
caso $\det A = 1$ lleva por el mismo argumento a $A = I$.
\end{solucion}
```

El desarrollo de sistemas, matrices y determinantes está en \cite{merino2021} y
\cite{strang2007}, y sus problemas en \cite{rojo2005} y \cite{dediego1995}.
