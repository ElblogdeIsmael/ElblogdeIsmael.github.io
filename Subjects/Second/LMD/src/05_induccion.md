# Inducción y recurrencia

Bloque 5 del programa. Los números naturales, el principio de inducción y el segundo
principio, las definiciones recursivas, las recurrencias lineales con coeficientes
constantes y los usos de la recursividad.

## Los números naturales

$\mathbb{N}$ queda caracterizado por los axiomas de Peano, de los que el quinto es el
que interesa aquí: **todo subconjunto de $\mathbb{N}$ que contenga al 0 y sea cerrado
para el sucesor es todo $\mathbb{N}$**. Ese axioma es el principio de inducción.

Una formulación equivalente:

```{=latex}
\begin{teorema}[Buena ordenación]
Todo subconjunto no vacío de $\mathbb{N}$ tiene mínimo.
\end{teorema}
```

Inducción y buena ordenación son equivalentes, y la segunda es la que se usa para
demostrar por reducción al absurdo: si una propiedad falla en algún natural, hay un
**mínimo** contraejemplo, y llegar a una contradicción con él suele ser fácil.

## Principio de inducción

```{=latex}
\begin{teorema}[Inducción simple]
Sea $P(n)$ una propiedad. Si $P(n_0)$ es cierta y para todo $n \ge n_0$ se cumple
$P(n)\Rightarrow P(n+1)$, entonces $P(n)$ es cierta para todo $n\ge n_0$.
\end{teorema}

\begin{teorema}[Inducción fuerte, o segundo principio]
Si $P(n_0)$ es cierta y para todo $n > n_0$ se cumple
$$\big(P(n_0)\wedge\dots\wedge P(n-1)\big)\Rightarrow P(n)$$
entonces $P(n)$ es cierta para todo $n\ge n_0$.
\end{teorema}
```

Los dos principios son equivalentes en potencia, y **la fuerte es más cómoda** cuando
el paso necesita más de un caso anterior. Es lo que ocurre con la factorización en
primos —$n = ab$ con $a,b < n$ cualesquiera— o con Fibonacci, que necesita los dos
términos previos.

```{=latex}
\begin{ejemplo}
Demostrar que $\sum_{k=1}^{n}k = \dfrac{n(n+1)}{2}$.

\medskip
\emph{Base}: con $n=1$, la suma es 1 y la fórmula da $1\cdot2/2 = 1$.

\medskip
\emph{Paso}: suponiendo la fórmula para $n$,
$$\sum_{k=1}^{n+1}k = \frac{n(n+1)}{2} + (n+1) = \frac{n(n+1)+2(n+1)}{2}
= \frac{(n+1)(n+2)}{2}$$
que es la fórmula para $n+1$.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
Los dos errores clásicos. El primero, \textbf{olvidar la base}: sin ella se «demuestra»
que todo natural es par, porque si $n$ lo es también lo es $n+2$. El segundo, usar la
hipótesis de inducción \textbf{sobre un caso que no está cubierto}, que es lo que hace
la falsa demostración de que todos los caballos son del mismo color: el paso de $n=1$ a
$n=2$ no funciona porque no hay ningún caballo compartido entre los dos grupos.
\end{anotacion}
```

### Variantes

| Variante | Cuándo |
| --- | --- |
| Con varios casos base | el paso necesita $k$ anteriores: hacen falta $k$ bases |
| Estructural | sobre estructuras definidas recursivamente: listas, árboles, fórmulas |
| Sobre un orden bien fundado | cualquier orden sin cadenas descendentes infinitas |

La **inducción estructural** es la que se usa constantemente en informática. Probar
algo sobre todas las fórmulas de la lógica proposicional es probarlo sobre las
variables y ver que las conectivas lo conservan; probar algo sobre un árbol binario es
probarlo sobre la hoja y ver que se conserva al unir dos subárboles.

## Definiciones recursivas

Una definición recursiva da los casos base y una regla que construye los demás a partir
de anteriores. Para que esté bien definida hacen falta dos cosas:

- Que exista al menos un caso base.
- Que toda llamada recursiva **reduzca** el argumento respecto de un orden bien
  fundado.

Es exactamente lo que garantiza que una función recursiva termina, y por eso demostrar
la terminación de un programa es exhibir esa medida decreciente.

| Objeto | Base | Regla |
| --- | --- | --- |
| Factorial | $0! = 1$ | $n! = n\,(n-1)!$ |
| Fibonacci | $F_0=0$, $F_1=1$ | $F_n = F_{n-1}+F_{n-2}$ |
| Listas | la lista vacía | una cabeza y una lista |
| Árboles binarios | el árbol vacío | raíz con dos subárboles |
| Fórmulas | las variables | conectivas aplicadas a fórmulas |

## Recurrencias lineales con coeficientes constantes

$$a_n + c_1a_{n-1} + \dots + c_ka_{n-k} = f(n)$$

Es **homogénea** si $f(n)=0$, y de orden $k$.

### Caso homogéneo

Se prueba $a_n = r^n$, y sustituyendo sale el **polinomio característico**:

$$r^k + c_1r^{k-1} + \dots + c_k = 0$$

| Raíces | Solución general |
| --- | --- |
| $k$ raíces simples $r_1,\dots,r_k$ | $a_n = \sum A_i r_i^{\,n}$ |
| Raíz $r$ de multiplicidad $m$ | aporta $(A_1 + A_2n + \dots + A_mn^{m-1})r^n$ |
| Raíces complejas $\rho e^{\pm i\theta}$ | $\rho^n(A\cos n\theta + B\sen n\theta)$ |

Las constantes se fijan con las condiciones iniciales, que son tantas como el orden.

```{=latex}
\begin{ejemplo}
$a_n = a_{n-1} + 2a_{n-2}$ con $a_0=2$ y $a_1=1$.

\medskip
Polinomio característico: $r^2 - r - 2 = 0$, con raíces $2$ y $-1$. La solución general
es $a_n = A\cdot 2^n + B(-1)^n$. Imponiendo las condiciones: $A+B=2$ y $2A-B=1$, de
donde $A=1$ y $B=1$.
$$a_n = 2^n + (-1)^n$$
Comprobación: $a_2 = 4+1 = 5$, y por la recurrencia $a_2 = 1 + 2\cdot 2 = 5$.
\end{ejemplo}
```

```{=latex}
\begin{ejemplo}[Fibonacci]
$F_n = F_{n-1}+F_{n-2}$ da $r^2-r-1=0$, con raíces
$\varphi=(1+\sqrt5)/2$ y $\psi=(1-\sqrt5)/2$. Con $F_0=0$ y $F_1=1$ sale la fórmula de
Binet
$$F_n = \frac{\varphi^n - \psi^n}{\sqrt5}$$
Como $\lvert\psi\rvert<1$, el segundo término tiende a cero: $F_n$ es el entero más
próximo a $\varphi^n/\sqrt5$, y el cociente $F_{n+1}/F_n$ tiende a la razón áurea.
\end{ejemplo}
```

### Caso no homogéneo

$$a_n = a_n^{(h)} + a_n^{(p)}$$

La solución general de la homogénea más una particular. Para buscar la particular se
prueba una del mismo tipo que $f(n)$:

| $f(n)$ | Se prueba |
| --- | --- |
| Constante | una constante |
| Polinomio de grado $d$ | polinomio de grado $d$ |
| $b^n$ | $Cb^n$ |
| Producto de los anteriores | el producto |

**Con una salvedad importante:** si la forma propuesta ya es solución de la homogénea,
hay que multiplicarla por $n$ tantas veces como haga falta. Con $a_n = 2a_{n-1} + 2^n$,
probar $C2^n$ falla porque $2^n$ resuelve la homogénea; lo que funciona es $Cn2^n$.

### Recurrencias de divide y vencerás

Las que salen al analizar algoritmos recursivos:

$$T(n) = a\,T(n/b) + f(n)$$

| Caso | Condición | Solución |
| --- | --- | --- |
| 1 | $f(n) = O(n^{\log_b a - \varepsilon})$ | $\Theta(n^{\log_b a})$ |
| 2 | $f(n) = \Theta(n^{\log_b a})$ | $\Theta(n^{\log_b a}\log n)$ |
| 3 | $f(n)=\Omega(n^{\log_b a+\varepsilon})$ y regularidad | $\Theta(f(n))$ |

| Algoritmo | Recurrencia | Coste |
| --- | --- | --- |
| Búsqueda binaria | $T(n)=T(n/2)+\Theta(1)$ | $\Theta(\log n)$ |
| Mergesort | $T(n)=2T(n/2)+\Theta(n)$ | $\Theta(n\log n)$ |
| Recorrido de un árbol | $T(n)=2T(n/2)+\Theta(1)$ | $\Theta(n)$ |
| Karatsuba | $T(n)=3T(n/2)+\Theta(n)$ | $\Theta(n^{\log_2 3})$ |

La última fila explica por qué multiplicar con tres productos en lugar de cuatro
compensa: $\log_2 3 \approx 1{,}585$ frente al 2 del método clásico.

## Usos de la recursividad

| Uso | Ejemplo |
| --- | --- |
| Definir estructuras | listas, árboles, gramáticas |
| Recorrerlas | los recorridos de un árbol |
| Dividir y vencer | mergesort, quicksort, búsqueda binaria |
| Vuelta atrás | $n$ reinas, sudoku, laberintos |
| Programación dinámica | cuando los subproblemas se repiten |

```{=latex}
\begin{ejemplo}[Torres de Hanói]
Mover $n$ discos exige mover $n-1$ a la varilla auxiliar, mover el mayor y volver a
mover los $n-1$:
$$T(n) = 2T(n-1)+1, \qquad T(1)=1$$
La homogénea da $A2^n$ y la particular constante, $-1$. Con $T(1)=1$ sale
$$T(n) = 2^n - 1$$
Con 64 discos y un movimiento por segundo, son unos 585\,000 millones de años. Y esa es
la cota inferior: no hay solución mejor.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
Un algoritmo recursivo puede ser desastroso sin cambiar su definición. Calcular
Fibonacci con la recurrencia directa cuesta $\Theta(\varphi^n)$ porque recalcula los
mismos valores una y otra vez; guardándolos, $\Theta(n)$. La recursión describe
\emph{qué} se calcula, no \emph{cuántas veces}.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Demostrar por inducción que $n! > 2^n$ para todo $n\ge 4$.
\end{ejercicio}

\begin{solucion}
\emph{Base}: $4! = 24 > 16 = 2^4$.

\medskip
\emph{Paso}: si $n! > 2^n$ con $n\ge4$, entonces
$(n+1)! = (n+1)\,n! > (n+1)\,2^n \ge 5\cdot 2^n > 2\cdot 2^n = 2^{n+1}$.
La desigualdad falla para $n\le 3$, y por eso la base va en 4 y no en 0.
\end{solucion}

\begin{ejercicio}
Resolver $a_n = 5a_{n-1} - 6a_{n-2}$ con $a_0=1$ y $a_1=0$.
\end{ejercicio}

\begin{solucion}
$r^2-5r+6=0$ tiene raíces 2 y 3, así que $a_n = A2^n + B3^n$. De $A+B=1$ y $2A+3B=0$
sale $B=-2$ y $A=3$:
$$a_n = 3\cdot 2^n - 2\cdot 3^n$$
Comprobación: $a_2 = 12 - 18 = -6$, y por la recurrencia $5\cdot 0 - 6\cdot 1 = -6$.
\end{solucion}

\begin{ejercicio}
Resolver $a_n = 3a_{n-1} + 2^n$ con $a_0 = 1$.
\end{ejercicio}

\begin{solucion}
La homogénea da $A3^n$. Como $2^n$ no resuelve la homogénea, se prueba $a_n^{(p)} =
C2^n$: sustituyendo, $C2^n = 3C2^{n-1}+2^n$, es decir $2C = 3C + 2$ y $C = -2$. La
general es $a_n = A3^n - 2^{n+1}$, y con $a_0=1$ queda $A = 3$:
$$a_n = 3^{n+1} - 2^{n+1}$$
\end{solucion}
```

El principio de inducción y las recurrencias están desarrollados en \cite{grimaldi1997}
y \cite{rosen2003}, con más ejemplos en \cite{gunderson2016} y problemas en
\cite{lipschutz2004}.
