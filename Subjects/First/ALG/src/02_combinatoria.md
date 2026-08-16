# Combinatoria

Bloque 2 del programa. Los principios de la suma y del producto, el principio de
Dirichlet, y las variaciones, permutaciones y combinaciones.

## Los dos principios básicos

```{=latex}
\begin{proposicion}[Principio de la suma]
Si una tarea se puede hacer de $m$ formas o bien de $n$ formas, y las dos maneras son
excluyentes, hay $m+n$ formas de hacerla.
\end{proposicion}

\begin{proposicion}[Principio del producto]
Si una tarea consta de dos pasos sucesivos, el primero con $m$ opciones y el segundo
con $n$ para cada elección del primero, hay $mn$ formas de hacerla.
\end{proposicion}
```

La regla para saber cuál aplicar: **«o» suma, «y» multiplica**. La condición de que
las opciones sean excluyentes en la suma es esencial, y cuando no lo son hace falta el
principio de inclusión-exclusión.

$$\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert - \lvert A\cap B\rvert$$

$$\lvert A\cup B\cup C\rvert = \lvert A\rvert+\lvert B\rvert+\lvert C\rvert
-\lvert A\cap B\rvert-\lvert A\cap C\rvert-\lvert B\cap C\rvert+\lvert A\cap B\cap C\rvert$$

En general se alternan los signos: se suman las intersecciones de un número impar de
conjuntos y se restan las de número par.

```{=latex}
\begin{ejemplo}
¿Cuántos enteros de 1 a 1000 son múltiplos de 3 o de 5? Hay $\lfloor 1000/3\rfloor =
333$ múltiplos de 3, $\lfloor 1000/5\rfloor = 200$ de 5 y $\lfloor 1000/15\rfloor = 66$
de los dos. Por inclusión-exclusión, $333+200-66 = 467$. Sumar sin restar daría 533 y
contaría dos veces los múltiplos de 15.
\end{ejemplo}
```

## El principio de Dirichlet

```{=latex}
\begin{teorema}[Principio del palomar]
Si se reparten $n$ objetos en $m$ cajas con $n > m$, alguna caja recibe al menos dos
objetos. En general, alguna recibe al menos $\lceil n/m \rceil$.
\end{teorema}
```

Es de enunciado trivial y de aplicación sorprendente. Lo difícil nunca es el principio:
es **elegir qué son los objetos y qué son las cajas**.

```{=latex}
\begin{ejemplo}
En un grupo de 367 personas hay al menos dos que cumplen años el mismo día: los objetos
son las personas y las cajas los 366 días posibles.

\medskip
Más fino: entre 10 enteros cualesquiera del 1 al 100, hay dos subconjuntos disjuntos
con la misma suma. Los objetos son los $2^{10}-1 = 1023$ subconjuntos no vacíos y las
cajas las sumas posibles, que van de 1 a $91+\dots+100 = 955$. Como $1023 > 955$, dos
subconjuntos comparten suma, y quitándoles su intersección quedan disjuntos.
\end{ejemplo}
```

En informática, el palomar es lo que demuestra que **toda función hash tiene
colisiones**, y que ningún compresor sin pérdida puede reducir el tamaño de todas las
entradas.

## Variaciones, permutaciones y combinaciones

Todo el bloque se resume en dos preguntas: **¿importa el orden?** y **¿se puede
repetir?**

| | Sin repetición | Con repetición |
| --- | --- | --- |
| **Ordenado** | $V_{n,k} = \dfrac{n!}{(n-k)!}$ | $VR_{n,k} = n^k$ |
| **No ordenado** | $\binom{n}{k} = \dfrac{n!}{k!(n-k)!}$ | $\binom{n+k-1}{k}$ |

Y el caso $k = n$ en la primera fila da las **permutaciones**, $P_n = n!$.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth, font=\scriptsize,
  caja/.style={draw, minimum width=30mm, minimum height=7.5mm, align=center}
]
\node[caja] (r) at (0,0) {¿importa el orden?};
\node[caja] (s1) at (-3.2,-1.6) {sí: variaciones};
\node[caja] (s2) at (3.2,-1.6) {no: combinaciones};
\node[caja] (a1) at (-5.0,-3.2) {$\frac{n!}{(n-k)!}$};
\node[caja] (a2) at (-1.6,-3.2) {$n^k$};
\node[caja] (b1) at (1.6,-3.2) {$\binom{n}{k}$};
\node[caja] (b2) at (5.0,-3.2) {$\binom{n+k-1}{k}$};
\draw[->] (r) -- (s1); \draw[->] (r) -- (s2);
\draw[->] (s1) -- node[left, pos=0.4] {sin rep.} (a1);
\draw[->] (s1) -- node[right, pos=0.4] {con rep.} (a2);
\draw[->] (s2) -- node[left, pos=0.4] {sin rep.} (b1);
\draw[->] (s2) -- node[right, pos=0.4] {con rep.} (b2);
\end{tikzpicture}
\end{center}
```

### Permutaciones con elementos repetidos

Si hay $n$ objetos de los que $n_1$ son de un tipo, $n_2$ de otro, y así:

$$PR_n^{n_1,\dots,n_k} = \frac{n!}{n_1!\,n_2!\cdots n_k!}$$

```{=latex}
\begin{ejemplo}
Anagramas de \texttt{MATEMATICA}: son 10 letras con A repetida 3 veces, M 2, T 2, y
E, I, C una vez. El total es
$$\frac{10!}{3!\,2!\,2!} = \frac{3\,628\,800}{24} = 151\,200$$
\end{ejemplo}
```

### Combinaciones con repetición

Elegir $k$ elementos de $n$ tipos, sin importar el orden y pudiendo repetir. La
demostración estándar es la de **las barras y las estrellas**: se representan las
elecciones como $k$ estrellas separadas por $n-1$ barras, y contar las disposiciones da

$$CR_{n,k} = \binom{n+k-1}{k}$$

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\small]
\node at (0,0) {$\star\ \star\ \mid\ \star\ \mid\ \mid\ \star\ \star\ \star$};
\node[font=\scriptsize, anchor=north, align=center] at (0,-0.5)
  {2 del tipo 1, 1 del tipo 2, 0 del tipo 3, 3 del tipo 4};
\end{tikzpicture}
\end{center}
```

Es la fórmula que cuenta las soluciones enteras no negativas de
$x_1 + x_2 + \dots + x_n = k$, y por eso aparece en tantos problemas que no parecen
combinatorios.

## Números combinatorios

| Propiedad | Expresión |
| --- | --- |
| Simetría | $\binom{n}{k} = \binom{n}{n-k}$ |
| Recurrencia de Pascal | $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ |
| Suma de una fila | $\sum_{k=0}^{n}\binom{n}{k} = 2^n$ |
| Suma alternada | $\sum_{k=0}^{n}(-1)^k\binom{n}{k} = 0$ para $n \ge 1$ |
| Binomio de Newton | $(a+b)^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k$ |

La recurrencia de Pascal tiene una lectura combinatoria directa, y es la mejor forma de
recordarla: para elegir $k$ de $n$, o se toma el último elemento —y quedan $k-1$ por
elegir de $n-1$— o no se toma —y quedan $k$ de $n-1$—.

La tercera fila cuenta los subconjuntos de un conjunto de $n$ elementos, que son $2^n$
porque cada elemento entra o no entra.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\small, x=9mm, y=7mm]
\node at (0,0) {1};
\foreach \x/\v in {-0.5/1, 0.5/1}            \node at (\x,-1) {\v};
\foreach \x/\v in {-1/1, 0/2, 1/1}           \node at (\x,-2) {\v};
\foreach \x/\v in {-1.5/1, -0.5/3, 0.5/3, 1.5/1} \node at (\x,-3) {\v};
\foreach \x/\v in {-2/1, -1/4, 0/6, 1/4, 2/1}    \node at (\x,-4) {\v};
\foreach \x/\v in {-2.5/1, -1.5/5, -0.5/10, 0.5/10, 1.5/5, 2.5/1}
  \node at (\x,-5) {\v};
\end{tikzpicture}
\end{center}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
¿De cuántas formas se pueden sentar 8 personas en una mesa redonda, si dos
disposiciones que difieren en una rotación se consideran iguales?
\end{ejercicio}

\begin{solucion}
Se fija una persona para eliminar la simetría de rotación, y las otras 7 se ordenan
libremente: $7! = 5040$. En general, las permutaciones circulares de $n$ elementos son
$(n-1)!$. Si además se identificaran las disposiciones simétricas respecto de un eje,
habría que dividir por 2.
\end{solucion}

\begin{ejercicio}
¿Cuántas contraseñas de 8 caracteres se pueden formar con las 26 letras minúsculas y
los 10 dígitos? ¿Y si se exige al menos un dígito?
\end{ejercicio}

\begin{solucion}
Importa el orden y se puede repetir: $36^8 = 2{,}82\times 10^{12}$. Para la segunda
pregunta se cuenta el complementario: las que \emph{no} tienen ningún dígito son
$26^8 = 2{,}09\times 10^{11}$, así que la respuesta es
$36^8 - 26^8 = 2{,}61\times 10^{12}$. Contar el complementario suele ser mucho más
sencillo que contar los casos con «al menos uno».
\end{solucion}

\begin{ejercicio}
¿Cuántas soluciones enteras no negativas tiene $x_1+x_2+x_3+x_4 = 12$?
\end{ejercicio}

\begin{solucion}
Es una combinación con repetición: repartir 12 unidades entre 4 variables sin importar
el orden dentro de cada una. Son
$$\binom{4+12-1}{12} = \binom{15}{12} = \binom{15}{3} = 455$$
Con barras y estrellas: 12 estrellas y 3 barras, y hay que elegir dónde van las barras
entre las 15 posiciones.
\end{solucion}
```

El desarrollo de la combinatoria está en \cite{grimaldi1998}, y sus problemas en
\cite{lipschutz1991}.
