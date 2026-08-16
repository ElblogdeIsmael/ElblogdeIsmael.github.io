# Aplicaciones lineales y diagonalización

Bloque 5 del programa. Aplicaciones lineales, núcleo e imagen, la matriz asociada, y la
diagonalización por semejanza.

## Aplicaciones lineales

```{=latex}
\begin{definicion}[Aplicación lineal]
$f: V \to W$ entre espacios sobre el mismo cuerpo es lineal si
$$f(\lambda u + \mu v) = \lambda f(u) + \mu f(v)$$
para todos $u,v \in V$ y $\lambda,\mu \in K$.
\end{definicion}
```

De la definición sale de inmediato que $f(\mathbf{0}) = \mathbf{0}$, que es el primer
descarte al comprobar si una aplicación es lineal.

```{=latex}
\begin{proposicion}
Una aplicación lineal queda determinada por las imágenes de una base: si
$B=\{e_1,\dots,e_n\}$ es base de $V$ y se fijan $f(e_1),\dots,f(e_n)$ libremente en
$W$, existe una única aplicación lineal con esas imágenes.
\end{proposicion}
```

Ese resultado es lo que reduce el estudio de las aplicaciones lineales al de las
matrices: **saber $n$ imágenes basta para conocerlo todo**.

| Tipo | Definición |
| --- | --- |
| Monomorfismo | inyectiva |
| Epimorfismo | sobreyectiva |
| Isomorfismo | biyectiva |
| Endomorfismo | de $V$ en $V$ |
| Automorfismo | endomorfismo biyectivo |

## Núcleo e imagen

```{=latex}
\begin{definicion}
$$\Nuc f = \{v\in V : f(v)=0\}, \qquad \Ima f = \{f(v) : v\in V\}$$
El primero es subespacio de $V$ y el segundo de $W$.
\end{definicion}

\begin{proposicion}
$f$ es inyectiva si y solo si $\Nuc f = \{0\}$.
\end{proposicion}

\begin{teorema}[De la dimensión]
Si $\dim V = n$, entonces
$$\dim \Nuc f + \dim \Ima f = n$$
\end{teorema}
```

El teorema de la dimensión es el resultado central del bloque, y es el mismo hecho que
Rouché-Frobenius visto desde otro lado: $\dim\Ima f$ es el rango de la matriz, y
$\dim\Nuc f$ el número de parámetros libres del sistema homogéneo.

De él salen tres consecuencias inmediatas para un endomorfismo de $V$:

| Si | Entonces |
| --- | --- |
| es inyectivo | es sobreyectivo, y por tanto biyectivo |
| es sobreyectivo | es inyectivo |
| $\dim V \ne \dim W$ | no puede ser isomorfismo |

**La primera es falsa en dimensión infinita**, y ese contraste conviene tenerlo
presente: en $K[x]$, multiplicar por $x$ es inyectivo y no sobreyectivo.

## Matriz asociada

Fijadas bases $B$ de $V$ y $B'$ de $W$, la matriz $M(f)$ tiene por columnas las
coordenadas de $f(e_i)$ respecto de $B'$. Entonces

$$\mathbf{y}_{B'} = M(f)\,\mathbf{x}_B$$

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth, font=\small, node distance=26mm]
\node (v) at (0,1.4) {$V$};
\node (w) at (4.2,1.4) {$W$};
\node (kn) at (0,0) {$K^{n}$};
\node (km) at (4.2,0) {$K^{m}$};
\draw[->] (v) -- node[above, font=\scriptsize] {$f$} (w);
\draw[->] (kn) -- node[below, font=\scriptsize] {$M(f)$} (km);
\draw[->] (v) -- node[left, font=\scriptsize] {coord. $B$} (kn);
\draw[->] (w) -- node[right, font=\scriptsize] {coord. $B'$} (km);
\end{tikzpicture}
\end{center}
```

| Operación | Traducción matricial |
| --- | --- |
| Composición $g\circ f$ | $M(g)\,M(f)$ |
| Aplicación inversa | $M(f)^{-1}$ |
| $\dim\Ima f$ | $\rg M(f)$ |
| $\dim\Nuc f$ | $n - \rg M(f)$ |

**El producto de matrices se define como se define para que la primera fila sea
cierta.** No es una convención arbitraria: es la composición de aplicaciones escrita en
coordenadas.

### Cambio de base

Si $P$ y $Q$ son las matrices de cambio de base en $V$ y en $W$:

$$M'(f) = Q^{-1}M(f)P$$

Y para un endomorfismo, con la misma base a los dos lados:

$$M'(f) = P^{-1}M(f)P$$

```{=latex}
\begin{definicion}[Matrices semejantes]
$A$ y $B$ son semejantes si existe $P$ invertible con $B = P^{-1}AP$. Dos matrices son
semejantes si y solo si representan al mismo endomorfismo en bases distintas.
\end{definicion}
```

La semejanza conserva rango, traza, determinante y polinomio característico. Esas
cantidades son propiedades **del endomorfismo**, no de la base elegida, y por eso
sirven como invariantes.

## Diagonalización

El problema: dado un endomorfismo, encontrar una base en la que su matriz sea diagonal.
Si se logra, casi todo se simplifica.

```{=latex}
\begin{definicion}[Autovalor y autovector]
$\lambda \in K$ es autovalor de $f$ si existe $v \ne 0$ con $f(v) = \lambda v$. Ese $v$
es un autovector asociado.
\end{definicion}
```

Geométricamente: **un autovector es una dirección que la aplicación no cambia**, solo
escala.

### Cálculo

Los autovalores son las raíces del polinomio característico:

$$p(\lambda) = \det(A - \lambda I)$$

y para cada uno, el subespacio propio es $V_\lambda = \Nuc(A-\lambda I)$.

| Multiplicidad | Qué es |
| --- | --- |
| Algebraica, $m_a(\lambda)$ | multiplicidad como raíz de $p(\lambda)$ |
| Geométrica, $m_g(\lambda)$ | $\dim V_\lambda$ |

```{=latex}
\begin{proposicion}
$1 \le m_g(\lambda) \le m_a(\lambda)$ para todo autovalor.
\end{proposicion}

\begin{teorema}[Criterio de diagonalización]
$A$ de orden $n$ es diagonalizable si y solo si su polinomio característico tiene todas
sus raíces en $K$ y, para cada autovalor, $m_g(\lambda) = m_a(\lambda)$.
\end{teorema}

\begin{corolario}
Si $A$ tiene $n$ autovalores distintos, es diagonalizable.
\end{corolario}
```

El corolario es suficiente y no necesario: la identidad tiene un solo autovalor y es
diagonal.

El procedimiento completo:

1. Calcular $p(\lambda) = \det(A-\lambda I)$ y sus raíces.
2. Comprobar que todas están en $K$.
3. Para cada $\lambda$, resolver $(A-\lambda I)\mathbf{x}=\mathbf{0}$ y hallar
   $m_g(\lambda)$.
4. Si $m_g = m_a$ para todos, juntar las bases de los subespacios propios: esa es la
   base $P$.
5. Entonces $D = P^{-1}AP$ es diagonal con los autovalores.

```{=latex}
\begin{ejemplo}
$A = \begin{pmatrix} 2 & 1 \\ 0 & 2\end{pmatrix}$ tiene $p(\lambda)=(2-\lambda)^2$, así
que $\lambda = 2$ con $m_a = 2$. Pero
$A - 2I = \begin{pmatrix}0&1\\0&0\end{pmatrix}$ tiene rango 1, luego $m_g = 1 < 2$:
\textbf{no es diagonalizable}. Su forma canónica es la de Jordan, con un 1 sobre la
diagonal.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
El cuerpo importa. $A=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, la rotación de 90 grados,
tiene $p(\lambda)=\lambda^2+1$: no es diagonalizable sobre $\mathbb{R}$ y sí sobre
$\mathbb{C}$. Es coherente con la interpretación geométrica, porque una rotación no deja
ninguna dirección real invariante.
\end{anotacion}
```

### Para qué sirve

| Aplicación | Cómo |
| --- | --- |
| Potencias | $A^k = PD^kP^{-1}$, y $D^k$ es elevar la diagonal |
| Sucesiones recurrentes | se escriben como $\mathbf{x}_{k+1}=A\mathbf{x}_k$ |
| Sistemas de ecuaciones diferenciales | se desacoplan en la base de autovectores |
| Comportamiento a largo plazo | lo gobierna el autovalor de mayor módulo |
| Cadenas de Markov | el autovector del autovalor 1 es la distribución estacionaria |

```{=latex}
\begin{ejemplo}
La sucesión de Fibonacci se escribe
$$\begin{pmatrix}F_{n+1}\\F_n\end{pmatrix}
= \begin{pmatrix}1&1\\1&0\end{pmatrix}\begin{pmatrix}F_n\\F_{n-1}\end{pmatrix}$$
Los autovalores son $\varphi = (1+\sqrt5)/2$ y $\psi = (1-\sqrt5)/2$, y diagonalizando
sale la fórmula cerrada
$$F_n = \frac{\varphi^n - \psi^n}{\sqrt5}$$
Como $\lvert\psi\rvert < 1$, el segundo término se desvanece: el cociente
$F_{n+1}/F_n$ tiende a $\varphi$, y esa es la razón áurea.
\end{ejemplo}
```

Ese ejemplo resume el bloque: un problema que no parecía de álgebra lineal se resuelve
escribiéndolo como una matriz y mirando sus autovalores.

## Ejercicios

```{=latex}
\begin{ejercicio}
Sea $f:\mathbb{R}^3\to\mathbb{R}^2$ con $f(x,y,z)=(x+y,\ y-z)$. Hallar el núcleo, la
imagen y comprobar el teorema de la dimensión.
\end{ejercicio}

\begin{solucion}
La matriz es $\begin{pmatrix}1&1&0\\0&1&-1\end{pmatrix}$, de rango 2, así que
$\dim\Ima f = 2$ y la imagen es todo $\mathbb{R}^2$: $f$ es sobreyectiva. El núcleo
resuelve $x+y=0$, $y-z=0$, de donde $(x,y,z) = t(-1,1,1)$: dimensión 1. En efecto,
$1 + 2 = 3 = \dim\mathbb{R}^3$.
\end{solucion}

\begin{ejercicio}
Estudiar si $A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$ es diagonalizable, y
compararla con $B = \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$.
\end{ejercicio}

\begin{solucion}
Las dos tienen $p(\lambda) = (3-\lambda)^2$ y el mismo autovalor con $m_a = 2$. En $B$,
$B-3I$ es la matriz nula, con rango 0, así que $m_g = 2$ y es diagonalizable —ya lo
está—. En $A$, $A-3I$ tiene rango 1 y $m_g = 1 < 2$: no lo es. Mismo polinomio
característico y comportamiento opuesto, lo que muestra que el polinomio no basta para
decidir.
\end{solucion}

\begin{ejercicio}
Si $A$ es diagonalizable con autovalores 1 y $-1$, ¿qué se puede decir de $A^2$?
\end{ejercicio}

\begin{solucion}
$A = PDP^{-1}$ con $D$ diagonal de unos y menos unos, así que
$A^2 = PD^2P^{-1} = PIP^{-1} = I$. La matriz es una involución, y geométricamente es
una simetría respecto del subespacio propio del 1.
\end{solucion}
```

El desarrollo de las aplicaciones lineales y de la diagonalización está en
\cite{merino2021} y \cite{strang2007}, y sus problemas en \cite{rojo2005} y
\cite{burgos1989}.
