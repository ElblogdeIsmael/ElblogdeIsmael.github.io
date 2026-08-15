# Seminario: conjuntos, aplicaciones y relaciones

El seminario que la guía sitúa en las primeras horas de los grupos reducidos. Es el
lenguaje con el que está escrito todo lo demás.

## Conjuntos

| Operación | Definición |
| --- | --- |
| Unión | $A\cup B = \{x : x\in A \text{ o } x\in B\}$ |
| Intersección | $A\cap B = \{x : x\in A \text{ y } x\in B\}$ |
| Diferencia | $A\setminus B = \{x\in A : x\notin B\}$ |
| Complementario | $A^{c} = U\setminus A$ |
| Producto cartesiano | $A\times B = \{(a,b)\}$ |
| Partes | $\mathcal{P}(A)$, todos los subconjuntos |

| Propiedad | Expresión |
| --- | --- |
| Conmutativa | $A\cup B = B\cup A$ |
| Asociativa | $(A\cup B)\cup C = A\cup(B\cup C)$ |
| Distributiva | $A\cap(B\cup C) = (A\cap B)\cup(A\cap C)$ |
| **De Morgan** | $(A\cup B)^{c} = A^{c}\cap B^{c}$ |
| Doble complementario | $(A^{c})^{c} = A$ |

Las leyes son las mismas del álgebra de Boole, con $\cup$ por OR, $\cap$ por AND y el
complementario por NOT. **No es una analogía**: el conjunto de partes con esas
operaciones es un álgebra de Boole.

Cardinales que conviene recordar:

$$\lvert \mathcal{P}(A)\rvert = 2^{\lvert A\rvert}, \qquad
\lvert A\times B\rvert = \lvert A\rvert\cdot\lvert B\rvert$$

El primero es el principio del producto: cada elemento entra o no entra.

## Aplicaciones

```{=latex}
\begin{definicion}[Aplicación]
$f: A \to B$ asigna a cada elemento de $A$ exactamente uno de $B$.
\end{definicion}
```

| Tipo | Condición | Consecuencia sobre cardinales |
| --- | --- | --- |
| Inyectiva | $f(a)=f(a')\Rightarrow a=a'$ | $\lvert A\rvert \le \lvert B\rvert$ |
| Sobreyectiva | $\Ima f = B$ | $\lvert A\rvert \ge \lvert B\rvert$ |
| Biyectiva | las dos | $\lvert A\rvert = \lvert B\rvert$ |

La columna de la derecha, para conjuntos finitos, es exactamente el principio del
palomar: **no hay aplicación inyectiva de un conjunto en otro más pequeño**.

Y para conjuntos finitos del mismo tamaño, inyectiva, sobreyectiva y biyectiva son
equivalentes. Es el mismo fenómeno que en los endomorfismos de un espacio de dimensión
finita, y **falla igualmente en el caso infinito**: $n \mapsto n+1$ es inyectiva de
$\mathbb{N}$ en $\mathbb{N}$ y no sobreyectiva.

| Concepto | Definición |
| --- | --- |
| Composición | $(g\circ f)(a) = g(f(a))$ |
| Imagen directa | $f(S) = \{f(s) : s\in S\}$ |
| Imagen inversa | $f^{-1}(T) = \{a : f(a)\in T\}$ |
| Inversa | existe si y solo si $f$ es biyectiva |

```{=latex}
\begin{anotacion}
$f^{-1}(T)$ se escribe igual que la aplicación inversa y \textbf{no la presupone}: la
imagen inversa de un conjunto está definida para cualquier aplicación, sea o no
biyectiva. Confundir las dos notaciones es el tropiezo habitual del seminario.
\end{anotacion}
```

## Relaciones binarias

Una relación en $A$ es un subconjunto $R \subseteq A\times A$.

| Propiedad | Definición |
| --- | --- |
| Reflexiva | $aRa$ para todo $a$ |
| Simétrica | $aRb \Rightarrow bRa$ |
| Antisimétrica | $aRb$ y $bRa$ $\Rightarrow$ $a=b$ |
| Transitiva | $aRb$ y $bRc$ $\Rightarrow$ $aRc$ |

| Tipo de relación | Propiedades |
| --- | --- |
| **De equivalencia** | reflexiva, simétrica y transitiva |
| **De orden** | reflexiva, antisimétrica y transitiva |

### Relaciones de equivalencia

```{=latex}
\begin{definicion}[Clase de equivalencia]
$[a] = \{x\in A : xRa\}$. El conjunto de todas las clases es el conjunto cociente
$A/R$.
\end{definicion}

\begin{teorema}
Las clases de equivalencia de una relación forman una partición de $A$: son no vacías,
disjuntas dos a dos y su unión es $A$. Recíprocamente, toda partición define una
relación de equivalencia.
\end{teorema}
```

**La correspondencia entre relaciones de equivalencia y particiones es biunívoca**, y es
el resultado que hace útil el concepto: clasificar es lo mismo que relacionar.

```{=latex}
\begin{ejemplo}
La congruencia módulo $n$ es de equivalencia, y su conjunto cociente es $\mathbb{Z}_n$,
con $n$ clases. Toda la aritmética modular del bloque 1 es esta construcción.
\end{ejemplo}
```

Al definir operaciones sobre el cociente hay que comprobar que **están bien
definidas**: que el resultado no depende del representante elegido. Es el paso que
parece burocrático y que falla en cuanto uno se descuida.

### Relaciones de orden

| Concepto | Definición |
| --- | --- |
| Orden total | dos elementos cualesquiera son comparables |
| Orden parcial | hay elementos incomparables |
| Elemento maximal | ninguno es mayor que él |
| Máximo | mayor que todos; si existe, es único |
| Cota superior de $S$ | mayor o igual que todo elemento de $S$ |
| Supremo | menor de las cotas superiores |

**Maximal y máximo no son lo mismo**, y la diferencia solo se ve en órdenes parciales.
En la divisibilidad sobre $\{2,3,4,9\}$ hay dos maximales, 4 y 9, y ningún máximo.

Un orden parcial se representa con el **diagrama de Hasse**: se dibujan los elementos
por niveles y se unen solo los pares consecutivos, sin los enlaces que la reflexividad
y la transitividad ya implican.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\small, scale=0.95]
\node (1)  at (0,0)    {1};
\node (2)  at (-1.2,1) {2};
\node (3)  at (0,1)    {3};
\node (5)  at (1.2,1)  {5};
\node (6)  at (-1.2,2) {6};
\node (10) at (0,2)    {10};
\node (15) at (1.2,2)  {15};
\node (30) at (0,3)    {30};
\draw (1)--(2); \draw (1)--(3); \draw (1)--(5);
\draw (2)--(6); \draw (3)--(6); \draw (2)--(10); \draw (5)--(10);
\draw (3)--(15); \draw (5)--(15);
\draw (6)--(30); \draw (10)--(30); \draw (15)--(30);
\node[font=\scriptsize, anchor=west] at (2.2,1.5)
  {divisores de 30, ordenados por divisibilidad};
\end{tikzpicture}
\end{center}
```

En ese diagrama, 30 es el máximo y 1 el mínimo; 2, 3 y 5 son incomparables entre sí. Es
un orden parcial, y la estructura completa es un retículo, porque todo par tiene supremo
—el mínimo común múltiplo— e ínfimo —el máximo común divisor—.

## Ejercicios

```{=latex}
\begin{ejercicio}
Demostrar que $(A\cup B)^{c} = A^{c}\cap B^{c}$.
\end{ejercicio}

\begin{solucion}
Doble inclusión. Si $x\in(A\cup B)^{c}$, entonces $x\notin A\cup B$, luego $x\notin A$ y
$x\notin B$, es decir $x\in A^{c}\cap B^{c}$. Todos los pasos son reversibles, así que la
otra inclusión sale leyendo el argumento al revés y los dos conjuntos coinciden.
\end{solucion}

\begin{ejercicio}
En $\mathbb{Z}$, ¿es de equivalencia la relación $aRb \iff a-b$ es par? ¿Cuántas clases
tiene?
\end{ejercicio}

\begin{solucion}
Sí. Reflexiva porque $a-a=0$ es par; simétrica porque si $a-b$ es par también lo es
$b-a$; transitiva porque la suma de dos pares es par. Tiene dos clases, la de los pares
y la de los impares, y el conjunto cociente es $\mathbb{Z}_2$.
\end{solucion}

\begin{ejercicio}
En el conjunto $\{1,2,3,4,6,12\}$ con la divisibilidad, indicar máximo, mínimo y
elementos maximales.
\end{ejercicio}

\begin{solucion}
El 12 es máximo, porque todos lo dividen, y en consecuencia es el único maximal. El 1 es
mínimo. Si se quita el 12 del conjunto, quedan dos maximales —4 y 6— y ningún máximo,
que es la situación que distingue los dos conceptos.
\end{solucion}
```

El material del seminario está en \cite{grimaldi1998} y \cite{lipschutz1991}.
