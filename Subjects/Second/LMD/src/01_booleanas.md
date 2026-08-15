# Álgebras de Boole y funciones booleanas

Bloque 1 del programa. La axiomática, las álgebras finitas y su representación atómica,
las formas normales, los conjuntos funcionalmente completos y los circuitos
combinacionales con su simplificación.

## Axiomática

```{=latex}
\begin{definicion}[Álgebra de Boole]
Un conjunto $B$ con dos operaciones binarias $\vee$ y $\wedge$, una unaria $'$ y dos
elementos distinguidos $0$ y $1$, que cumple para todos $a,b,c \in B$:
\begin{itemize}
\item conmutativa: $a\vee b = b\vee a$ y $a\wedge b = b\wedge a$;
\item distributiva de cada una respecto de la otra;
\item elementos neutros: $a\vee 0 = a$ y $a\wedge 1 = a$;
\item complemento: $a\vee a' = 1$ y $a\wedge a' = 0$.
\end{itemize}
\end{definicion}
```

Lo llamativo de la axiomática es la **doble distributiva**: en un anillo, el producto
distribuye sobre la suma y no al revés. Aquí las dos operaciones están al mismo nivel, y
de ahí sale el principio que ahorra la mitad del trabajo.

```{=latex}
\begin{proposicion}[Principio de dualidad]
Toda identidad válida en un álgebra de Boole sigue siéndolo al intercambiar $\vee$ con
$\wedge$ y $0$ con $1$.
\end{proposicion}
```

Los teoremas que se deducen, cada uno con su dual:

| Nombre | Enunciado | Dual |
| --- | --- | --- |
| Idempotencia | $a\vee a = a$ | $a\wedge a = a$ |
| Acotación | $a\vee 1 = 1$ | $a\wedge 0 = 0$ |
| Absorción | $a\vee(a\wedge b) = a$ | $a\wedge(a\vee b) = a$ |
| Involución | $(a')' = a$ | --- |
| De Morgan | $(a\vee b)' = a'\wedge b'$ | $(a\wedge b)' = a'\vee b'$ |
| Unicidad del complemento | si $a\vee x = 1$ y $a\wedge x = 0$, entonces $x = a'$ |  |

Ejemplos que son álgebras de Boole:

| Conjunto | $\vee$ | $\wedge$ | $'$ |
| --- | --- | --- | --- |
| $\{0,1\}$ | OR | AND | NOT |
| $\mathcal{P}(U)$ | unión | intersección | complementario |
| Divisores de $n$ libre de cuadrados | mcm | mcd | $n/d$ |
| Funciones de $\{0,1\}^n$ en $\{0,1\}$ | punto a punto | punto a punto | punto a punto |

**El segundo es el que explica que la teoría de conjuntos y la lógica se parezcan
tanto**: no se parecen, son la misma estructura.

## Orden y representación atómica

Toda álgebra de Boole tiene un orden natural:

$$a \le b \iff a\wedge b = a \iff a\vee b = b$$

Con él, $B$ es un retículo con máximo 1 y mínimo 0, complementado y distributivo.

```{=latex}
\begin{definicion}[Átomo]
$a \ne 0$ es un átomo si no hay ningún $x$ con $0 < x < a$.
\end{definicion}

\begin{teorema}[Representación de Stone, caso finito]
Toda álgebra de Boole finita es isomorfa al álgebra de partes del conjunto de sus
átomos. En consecuencia, su cardinal es una potencia de 2, y dos álgebras de Boole
finitas con el mismo número de elementos son isomorfas.
\end{teorema}
```

El teorema tiene una consecuencia tajante: **no existe ningún álgebra de Boole con 6
elementos**, ni con 12, ni con ningún cardinal que no sea potencia de dos. Y todas las
de 16 elementos son «la misma».

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\small, scale=1.0]
\node (0)   at (0,0)     {$0$};
\node (a)   at (-1.4,1)  {$a$};
\node (b)   at (0,1)     {$b$};
\node (c)   at (1.4,1)   {$c$};
\node (ab)  at (-1.4,2)  {$a\vee b$};
\node (ac)  at (0,2)     {$a\vee c$};
\node (bc)  at (1.4,2)   {$b\vee c$};
\node (1)   at (0,3)     {$1$};
\draw (0)--(a); \draw (0)--(b); \draw (0)--(c);
\draw (a)--(ab); \draw (b)--(ab); \draw (a)--(ac); \draw (c)--(ac);
\draw (b)--(bc); \draw (c)--(bc);
\draw (ab)--(1); \draw (ac)--(1); \draw (bc)--(1);
\node[font=\scriptsize, anchor=west] at (2.4,1.5)
  {álgebra de 8 elementos, con tres átomos};
\end{tikzpicture}
\end{center}
```

## Funciones booleanas

```{=latex}
\begin{definicion}
Una función booleana de $n$ variables es $f:\{0,1\}^n \to \{0,1\}$.
\end{definicion}
```

Hay $2^{2^n}$ funciones distintas de $n$ variables: la tabla de verdad tiene $2^n$
filas y cada una se rellena de dos formas. Con $n=2$ son 16 y con $n=5$ son más de
cuatro mil millones, lo que explica que no se puedan enumerar y haga falta teoría.

### Formas normales

| Forma | Construcción |
| --- | --- |
| **Disyuntiva** (FND) | disyunción de los mintérminos donde $f$ vale 1 |
| **Conjuntiva** (FNC) | conjunción de los maxtérminos donde $f$ vale 0 |

Las dos formas canónicas **existen siempre y son únicas**, y en eso se apoya todo lo
demás: para probar que dos expresiones son equivalentes basta llevarlas a forma normal
y comparar.

```{=latex}
\begin{ejemplo}
Sea $f(x,y,z)$ que vale 1 en las filas 1, 2, 4 y 7 —numerando desde 0—. Su forma normal
disyuntiva es
$$f = x'y'z \vee x'yz' \vee xy'z' \vee xyz$$
que es la función «paridad impar»: vale 1 cuando el número de unos es impar. Es la XOR
de tres variables, y su forma normal necesita los cuatro términos: \textbf{no se
simplifica}.
\end{ejemplo}
```

La XOR es el ejemplo estándar de función cuya forma normal es la mínima, y por eso los
circuitos de paridad no se pueden abaratar con mapas de Karnaugh.

## Conjuntos funcionalmente completos

```{=latex}
\begin{definicion}
Un conjunto de conectivas es funcionalmente completo si toda función booleana se puede
expresar usando solo esas.
\end{definicion}
```

| Conjunto | ¿Completo? | Por qué |
| --- | --- | --- |
| $\{\wedge,\vee,{}'\}$ | sí | la forma normal disyuntiva las usa |
| $\{\wedge,{}'\}$ | sí | De Morgan da $\vee$ |
| $\{\vee,{}'\}$ | sí | De Morgan da $\wedge$ |
| $\{\uparrow\}$ (NAND) | sí | genera $'$, $\wedge$ y $\vee$ |
| $\{\downarrow\}$ (NOR) | sí | ídem |
| $\{\wedge,\vee\}$ | **no** | sin negación no se puede obtener el complemento |
| $\{\to\}$ | no | falta el 0 |

La demostración de que $\{\wedge,\vee\}$ no es completo se hace por **monotonía**: toda
función escrita solo con esas conectivas cumple que aumentar una entrada de 0 a 1 no
baja la salida, y la negación no lo cumple. Es un argumento de invariante, y la técnica
general para probar que algo no se puede hacer.

Que **NAND baste por sí sola** es lo que permite fabricar cualquier circuito con una
única celda:

$$a' = a\uparrow a, \qquad a\wedge b = (a\uparrow b)\uparrow(a\uparrow b), \qquad
a\vee b = (a\uparrow a)\uparrow(b\uparrow b)$$

## Circuitos combinacionales

Una función booleana se realiza con puertas lógicas, y la forma normal disyuntiva da un
circuito de dos niveles: una capa de AND y una OR final.

| Coste | Qué mide |
| --- | --- |
| Número de puertas | área del circuito |
| Número de entradas totales | complejidad de la conexión |
| Número de niveles | retardo de propagación |

Los dos objetivos —pocas puertas y pocos niveles— **compiten entre sí**, y por eso la
minimización tiene siempre un criterio explícito detrás.

### Simplificación

| Método | Alcance |
| --- | --- |
| Manipulación algebraica | cualquier tamaño, sin garantía de llegar al mínimo |
| Mapas de Karnaugh | hasta 4 o 5 variables, visual |
| Quine-McCluskey | sistemático y automatizable, coste exponencial en el peor caso |
| Heurísticas | lo que usan las herramientas reales |

**Quine-McCluskey** en dos fases:

1. **Obtener los implicantes primos.** Se agrupan los mintérminos que difieren en un
   solo bit, marcando con un guion la variable eliminada, y se repite hasta que no haya
   más combinaciones. Lo que queda sin combinar son los implicantes primos.
2. **Elegir una cobertura mínima.** Se construye la tabla de implicantes primos contra
   mintérminos; los primos que cubren en solitario algún mintérmino son **esenciales** y
   entran obligatoriamente; el resto se completa con el menor número posible.

```{=latex}
\begin{ejemplo}
Para $f = \sum m(0,1,2,5,6,7)$ sobre tres variables, la primera fase combina
$(0,1)$, $(0,2)$, $(1,5)$, $(2,6)$, $(5,7)$ y $(6,7)$, y en la segunda pasada no queda
ninguna combinación posible. Los seis implicantes primos son
$x'y'$, $x'z'$, $y'z$, $yz'$, $xz$ y $xy$.

\medskip
Ninguno es esencial: cada mintérmino está cubierto por dos primos. La cobertura mínima
tiene tres, por ejemplo $f = x'y' \vee yz' \vee xz$.
\end{ejemplo}
```

La segunda fase es el problema de **cobertura de conjuntos**, que es NP-completo. Por
eso las herramientas de síntesis reales no buscan el óptimo: aplican heurísticas y
aceptan un resultado bueno.

```{=latex}
\begin{anotacion}
Que un problema tenga solución algorítmica no significa que sea abordable. Quine-McCluskey
termina siempre y su número de implicantes primos puede crecer como $3^n/n$. Es la
diferencia entre decidible y tratable, que reaparece en Algorítmica.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Demostrar la ley de absorción $a\vee(a\wedge b) = a$ a partir de los axiomas.
\end{ejercicio}

\begin{solucion}
$a\vee(a\wedge b) = (a\wedge 1)\vee(a\wedge b) = a\wedge(1\vee b) = a\wedge 1 = a$,
usando el neutro, la distributiva y la acotación. La dual,
$a\wedge(a\vee b) = a$, sale por el principio de dualidad sin repetir el cálculo.
\end{solucion}

\begin{ejercicio}
¿Cuántos elementos puede tener un álgebra de Boole finita? ¿Existe alguna con 12?
\end{ejercicio}

\begin{solucion}
Solo potencias de 2. Por el teorema de representación, toda álgebra de Boole finita es
isomorfa a $\mathcal{P}(A)$ con $A$ el conjunto de sus átomos, y $\lvert\mathcal{P}(A)
\rvert = 2^{\lvert A\rvert}$. Como 12 no es potencia de 2, no existe ninguna con 12
elementos.
\end{solucion}

\begin{ejercicio}
Expresar $a \to b$ usando solo NAND.
\end{ejercicio}

\begin{solucion}
$a\to b \equiv a'\vee b$. Con $a' = a\uparrow a$ y
$x\vee y = (x\uparrow x)\uparrow(y\uparrow y)$ queda
$$a\to b \equiv ((a\uparrow a)\uparrow(a\uparrow a))\uparrow(b\uparrow b)$$
que se simplifica a $a\uparrow(b\uparrow b)$, porque
$(a\uparrow a)\uparrow(a\uparrow a) = a$.
\end{solucion}
```

El desarrollo del álgebra de Boole está en \cite{garciamiranda2017} y
\cite{permingeat1992}, y su aplicación a circuitos en \cite{rosen2003} y
\cite{grimaldi1997}.
