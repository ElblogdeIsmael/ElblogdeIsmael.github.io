# Resolución de sistemas de ecuaciones

Tema 6 del programa. Cómo se resuelve numéricamente un sistema lineal, qué puede salir
mal por culpa de la aritmética finita, y los métodos iterativos.

## El problema

$$A\mathbf{x} = \mathbf{b}, \qquad A \in \mathbb{R}^{n\times n}$$

El sistema tiene solución única si y solo si $A$ es invertible, es decir
$\det A \ne 0$. Pero **calcular la inversa para resolver es la peor opción posible**:
cuesta más operaciones, acumula más error y no aporta nada. La regla práctica es que
si aparece $A^{-1}\mathbf{b}$ en un programa, casi siempre está mal escrito.

Y la regla de Cramer, que es exacta y elegante, necesita $n+1$ determinantes: con el
desarrollo por menores, $O(n!)$ operaciones. Con $n=20$ eso son más operaciones que
átomos manejables. **Cramer sirve para demostrar, no para calcular.**

| Método | Coste |
| --- | --- |
| Cramer con menores | $O((n+1)!)$ |
| Inversa y producto | $O(n^3)$, con peor error |
| **Eliminación gaussiana** | $O(n^3/3)$ |
| Métodos iterativos | $O(n^2)$ por iteración |

## Eliminación gaussiana

Transformar el sistema en uno triangular equivalente y resolverlo hacia atrás.

Las tres operaciones elementales que no cambian la solución:

| Operación | Notación |
| --- | --- |
| Intercambiar dos filas | $F_i \leftrightarrow F_j$ |
| Multiplicar una fila por $\lambda \ne 0$ | $F_i \to \lambda F_i$ |
| Sumar a una fila un múltiplo de otra | $F_i \to F_i + \lambda F_j$ |

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.95]
\draw (0,0) rectangle (2.4,2.4);
\draw (0,2.4) -- (2.4,0);
\node[font=\small] at (0.75,1.75) {$\ast$};
\node[font=\scriptsize] at (1.7,0.65) {$0$};
\node[font=\scriptsize, anchor=north] at (1.2,-0.1) {tras la eliminación};
\draw[->, >=stealth, thick] (3.0,1.2) -- (4.0,1.2);
\node[font=\scriptsize, anchor=south] at (3.5,1.25) {sustitución};
\node[font=\scriptsize, anchor=north] at (3.5,1.15) {hacia atrás};
\draw (4.6,0) rectangle (5.3,2.4);
\node[font=\scriptsize, anchor=north] at (4.95,-0.1) {$\mathbf{x}$};
\end{tikzpicture}
\end{center}
```

El algoritmo, en la etapa $k$: se anula la columna $k$ por debajo de la diagonal
restando a cada fila $i>k$ la fila $k$ multiplicada por $m_{ik}=a_{ik}/a_{kk}$.

### El pivoteo

El elemento $a_{kk}$ es el **pivote**, y hay dos motivos para no usarlo tal cual:

- Si es cero, la división es imposible.
- Si es pequeño, los multiplicadores son enormes y el error de redondeo se amplifica.

| Estrategia | Qué hace |
| --- | --- |
| Parcial | intercambia filas para que el pivote sea el mayor en valor absoluto de su columna |
| Escalado | lo mismo, relativo al mayor elemento de cada fila |
| Total | intercambia filas y columnas; el más estable y el más caro |

```{=latex}
\begin{ejemplo}
Con tres cifras significativas, el sistema
$$\begin{cases} 0{,}0003\,x + 3{,}00\,y = 2{,}0001 \\ 1{,}00\,x + 1{,}00\,y = 1{,}00 \end{cases}$$
tiene solución exacta $x = 1/3$, $y = 2/3$.

\medskip
Sin pivoteo, el multiplicador es $1/0{,}0003 = 3333$, la segunda ecuación queda
$-10000\,y = -6667$ y sale $y = 0{,}667$, correcto, pero al sustituir hacia atrás
$x = (2{,}0001 - 2{,}001)/0{,}0003 = -3{,}00$: un error del 1000\,\%.

\medskip
Con pivoteo parcial se intercambian las filas primero, el multiplicador pasa a ser
$0{,}0003$ y salen $x = 0{,}333$ e $y = 0{,}667$. Mismo sistema, misma aritmética,
mismo algoritmo: solo cambia el orden de las filas.
\end{ejemplo}
```

**Ese ejemplo es todo el tema.** El pivoteo no es un detalle de implementación: es lo
que separa un resultado correcto de uno absurdo.

### Factorización LU

La eliminación gaussiana, guardada. Se descompone $A = LU$ con $L$ triangular inferior
de unos en la diagonal y $U$ triangular superior, y entonces:

$$A\mathbf{x}=\mathbf{b} \iff L\mathbf{y}=\mathbf{b},\ U\mathbf{x}=\mathbf{y}$$

Dos sistemas triangulares, cada uno $O(n^2)$. La ventaja aparece al resolver **varios
sistemas con la misma matriz y distintos términos independientes**: la factorización se
hace una vez, $O(n^3/3)$, y cada término nuevo cuesta $O(n^2)$.

Con pivoteo la descomposición es $PA = LU$, con $P$ la matriz de permutación que
registra los intercambios de fila.

Casos particulares que se aprovechan:

| Si $A$ es | Se usa | Coste |
| --- | --- | --- |
| Simétrica definida positiva | Cholesky, $A = LL^T$ | la mitad |
| Tridiagonal | algoritmo de Thomas | $O(n)$ |
| Dispersa | métodos que preservan la dispersión | según el patrón |

## Condicionamiento

Un sistema puede ser sensible por su propia naturaleza, con independencia del método.
La medida es el **número de condición**:

$$\kappa(A) = \lVert A\rVert \cdot \lVert A^{-1}\rVert \ \ge 1$$

Y la cota que explica su nombre: si $\mathbf{b}$ tiene un error relativo $\varepsilon$,
la solución puede tenerlo hasta $\kappa(A)\varepsilon$.

| $\kappa(A)$ | Interpretación |
| --- | --- |
| cercano a 1 | bien condicionado |
| $10^k$ | se pierden hasta $k$ cifras significativas |
| enorme | mal condicionado: la solución es poco fiable |

```{=latex}
\begin{ejemplo}
El sistema
$$\begin{cases} x + y = 2 \\ x + 1{,}0001\,y = 2{,}0001 \end{cases}$$
tiene solución $x=y=1$. Cambiando el segundo término independiente a $2{,}0002$, la
solución pasa a $x=0$, $y=2$: una perturbación de $10^{-4}$ en los datos mueve la
solución en una unidad. Geométricamente, las dos rectas son casi paralelas y su corte
se desplaza muchísimo al moverlas un poco.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
Un determinante pequeño \textbf{no} indica mal condicionamiento. Multiplicar toda la
matriz por $10^{-3}$ divide el determinante por $10^{-3n}$ y deja $\kappa$ intacto,
porque el sistema es el mismo. El indicador es $\kappa$, no $\det A$.
\end{anotacion}
```

## Métodos iterativos

Con matrices grandes y dispersas —las que salen de discretizar ecuaciones en derivadas
parciales, con millones de incógnitas y pocos elementos no nulos por fila— la
eliminación gaussiana rellena la matriz de ceros que dejan de serlo y agota la memoria.
La alternativa es iterar.

Se parte de una aproximación $\mathbf{x}^{(0)}$ y se construye una sucesión.
Descomponiendo $A = D + L + U$ en diagonal, triangular inferior y superior:

| Método | Iteración |
| --- | --- |
| Jacobi | $x_i^{(k+1)} = \dfrac{1}{a_{ii}}\left(b_i - \sum_{j\ne i} a_{ij}x_j^{(k)}\right)$ |
| Gauss-Seidel | igual, pero usando los $x_j^{(k+1)}$ ya calculados |
| Relajación (SOR) | Gauss-Seidel con un factor $\omega$ de sobrerrelajación |

La diferencia entre los dos primeros es sutil y decisiva: **Jacobi usa solo valores de
la iteración anterior** y Gauss-Seidel aprovecha los recién calculados, así que
converge más rápido. A cambio, Jacobi se paraleliza sin esfuerzo y Gauss-Seidel no.

```{=latex}
\begin{teorema}[Condición suficiente de convergencia]
Si $A$ es estrictamente diagonal dominante, es decir
$$\lvert a_{ii}\rvert > \sum_{j\ne i}\lvert a_{ij}\rvert \quad \text{para toda fila } i$$
entonces Jacobi y Gauss-Seidel convergen desde cualquier punto inicial.
\end{teorema}
```

Es **suficiente y no necesaria**: hay matrices que no la cumplen y con las que los
métodos convergen igual. La condición necesaria y suficiente es que el radio espectral
de la matriz de iteración sea menor que 1.

| | Directos | Iterativos |
| --- | --- | --- |
| Resultado | exacto salvo redondeo | aproximado, con la precisión que se pida |
| Coste | $O(n^3)$ fijo | $O(n^2)$ por iteración |
| Memoria | rellena la matriz | conserva la dispersión |
| Cuándo | $n$ moderado, matriz densa | $n$ grande, matriz dispersa |
| Interrumpible | no | sí: se para cuando el residuo baste |

La última fila es una ventaja práctica que se olvida: un método iterativo da una
respuesta útil aunque se pare antes de tiempo, y un método directo no da nada hasta el
final.

## Ejercicios

```{=latex}
\begin{ejercicio}
Resolver por eliminación gaussiana con pivoteo parcial:
$$\begin{cases} 2x + y - z = 8 \\ -3x - y + 2z = -11 \\ -2x + y + 2z = -3 \end{cases}$$
\end{ejercicio}

\begin{solucion}
El mayor elemento de la primera columna es $-3$, así que se intercambian las dos
primeras filas. Eliminando con multiplicadores $-2/3$ y $2/3$ queda un sistema
triangular, y la sustitución hacia atrás da $z = -1$, $y = 3$, $x = 2$. Comprobación en
la tercera ecuación original: $-4+3-2 = -3$.
\end{solucion}

\begin{ejercicio}
¿Por qué no se resuelve un sistema calculando $A^{-1}$ y multiplicando?
\end{ejercicio}

\begin{solucion}
Por dos razones. Calcular la inversa cuesta unas tres veces más operaciones que la
eliminación gaussiana, porque equivale a resolver $n$ sistemas. Y acumula más error de
redondeo, ya que el producto $A^{-1}\mathbf{b}$ añade sus propios errores a los que ya
lleva la inversa. La inversa solo se calcula cuando se necesita la matriz en sí, que es
raro.
\end{solucion}

\begin{ejercicio}
Comprobar si el sistema converge con Jacobi:
$$\begin{cases} 4x + y = 5 \\ x + 3y = 4 \end{cases}$$
\end{ejercicio}

\begin{solucion}
Es estrictamente diagonal dominante: $\lvert 4\rvert > \lvert 1\rvert$ en la primera
fila y $\lvert 3\rvert > \lvert 1\rvert$ en la segunda. Luego Jacobi converge desde
cualquier punto inicial. Partiendo de $(0,0)$: $(1{,}25;\ 1{,}333)$,
$(0{,}917;\ 0{,}917)$, $(1{,}021;\ 1{,}028)$, acercándose a la solución $(1,1)$.
\end{solucion}
```

Los métodos directos e iterativos para sistemas lineales, el pivoteo y el
condicionamiento están desarrollados en \cite{burden2004}.
