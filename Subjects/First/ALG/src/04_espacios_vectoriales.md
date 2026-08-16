# Espacios vectoriales

Bloque 4 del programa. La estructura de espacio vectorial, bases y coordenadas, y las
operaciones con subespacios.

## Definición

```{=latex}
\begin{definicion}[Espacio vectorial]
Un conjunto $V$ con una suma interna y un producto por escalares de un cuerpo $K$, tal
que $(V,+)$ es grupo abeliano y el producto cumple, para todos
$\lambda,\mu \in K$ y $u,v \in V$:
$$\lambda(u+v)=\lambda u+\lambda v, \quad (\lambda+\mu)v=\lambda v+\mu v, \quad
\lambda(\mu v)=(\lambda\mu)v, \quad 1\cdot v = v$$
\end{definicion}
```

Lo que hace potente la definición es lo que **no** dice: no menciona flechas, ni
coordenadas, ni dimensión. Por eso los mismos teoremas valen para objetos muy
distintos:

| Espacio | Vectores | Dimensión |
| --- | --- | --- |
| $K^n$ | $n$-uplas | $n$ |
| $\mathcal{M}_{m\times n}(K)$ | matrices | $mn$ |
| $K_n[x]$ | polinomios de grado $\le n$ | $n+1$ |
| $K[x]$ | todos los polinomios | infinita |
| Soluciones de un sistema homogéneo | vectores de $K^n$ | $n - \rg A$ |

La última fila es la que conecta con el bloque anterior: **el conjunto de soluciones de
un sistema homogéneo es un espacio vectorial**, y el de uno no homogéneo no lo es,
porque no contiene al cero.

## Subespacios

```{=latex}
\begin{proposicion}[Caracterización]
$W \subseteq V$ no vacío es subespacio si y solo si
$$\lambda u + \mu v \in W \quad \text{para todos } u,v\in W,\ \lambda,\mu\in K$$
\end{proposicion}
```

En la práctica se comprueban tres cosas: que $\mathbf{0}\in W$, que la suma no se sale
y que el producto por escalar no se sale. **Empezar por el cero descarta la mayoría de
los candidatos falsos en un segundo.**

### Combinaciones lineales y sistemas generadores

| Concepto | Definición |
| --- | --- |
| Combinación lineal | $\lambda_1v_1+\dots+\lambda_kv_k$ |
| Subespacio generado | $\langle S\rangle$, todas las combinaciones de $S$ |
| Sistema generador | $S$ con $\langle S\rangle = V$ |
| Linealmente independiente | $\sum\lambda_iv_i=0 \Rightarrow$ todos los $\lambda_i=0$ |

```{=latex}
\begin{anotacion}
La independencia lineal se comprueba resolviendo un sistema homogéneo: los vectores son
independientes si y solo si ese sistema solo tiene la solución trivial, es decir, si el
rango de la matriz que forman es igual a su número. Toda pregunta de este bloque acaba
siendo un cálculo de rango.
\end{anotacion}
```

## Bases y dimensión

```{=latex}
\begin{definicion}[Base]
Sistema generador linealmente independiente.
\end{definicion}

\begin{teorema}[De la base]
Todo espacio vectorial finitamente generado tiene base, y todas sus bases tienen el
mismo número de elementos, llamado dimensión.
\end{teorema}

\begin{teorema}[Unicidad de las coordenadas]
Si $B = \{e_1,\dots,e_n\}$ es base de $V$, todo $v\in V$ se escribe de forma \'unica
como $v = x_1e_1+\dots+x_ne_n$.
\end{teorema}
```

La unicidad es lo que permite **identificar $V$ con $K^n$**: fijada una base, un vector
abstracto se convierte en una lista de números y todo lo del bloque 3 se puede aplicar.

| Resultado | Enunciado |
| --- | --- |
| Prolongación | todo conjunto independiente se amplía a una base |
| Extracción | de todo sistema generador se extrae una base |
| Con $\dim V = n$ | $n$ vectores independientes ya son base |
| Con $\dim V = n$ | $n$ generadores ya son base |

Las dos últimas ahorran trabajo: **si el número coincide con la dimensión, basta
comprobar una de las dos condiciones**.

### Cambio de base

Si $B$ y $B'$ son bases y $P$ es la matriz cuyas columnas son las coordenadas de los
vectores de $B'$ respecto de $B$:

$$\mathbf{x}_B = P\,\mathbf{x}_{B'}, \qquad \mathbf{x}_{B'} = P^{-1}\mathbf{x}_B$$

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth, font=\small]
\node (b) at (0,0) {$\mathbf{x}_{B}$};
\node (bp) at (4.0,0) {$\mathbf{x}_{B'}$};
\draw[->] (bp) to[bend right=25] node[below, font=\scriptsize] {$P$} (b);
\draw[->] (b) to[bend right=25] node[above, font=\scriptsize] {$P^{-1}$} (bp);
\end{tikzpicture}
\end{center}
```

**El sentido de la flecha se equivoca constantemente.** La matriz cuyas columnas son
los vectores nuevos en la base vieja transforma coordenadas *nuevas* en *viejas*, que
es lo contrario de lo que sugiere la intuición.

## Operaciones con subespacios

| Operación | Definición | ¿Es subespacio? |
| --- | --- | --- |
| Intersección | $U\cap W$ | sí, siempre |
| Unión | $U\cup W$ | **no**, salvo que uno contenga al otro |
| Suma | $U+W = \{u+w\}$ | sí; es el menor que contiene a los dos |
| Suma directa | $U\oplus W$ si $U\cap W = \{0\}$ | sí |

Que la unión no sea subespacio se ve en $\mathbb{R}^2$ con dos rectas distintas por el
origen: sumando un vector de cada una se sale de las dos. **La suma es la reparación
de ese fallo**: es el subespacio generado por la unión.

```{=latex}
\begin{teorema}[Fórmula de Grassmann]
$$\dim(U+W) = \dim U + \dim W - \dim(U\cap W)$$
\end{teorema}
```

Es el principio de inclusión-exclusión del bloque 2, con dimensiones en lugar de
cardinales. Y da un criterio inmediato: la suma es directa si y solo si
$\dim(U+W)=\dim U+\dim W$.

```{=latex}
\begin{ejemplo}
En $\mathbb{R}^3$, dos planos distintos que pasan por el origen tienen dimensión 2 cada
uno y su suma es todo $\mathbb{R}^3$, de dimensión 3. Grassmann da
$\dim(U\cap W) = 2+2-3 = 1$: se cortan en una recta, nunca solo en el origen. Dos planos
de $\mathbb{R}^3$ no pueden estar en suma directa.
\end{ejemplo}
```

### Cómo se describe un subespacio

Hay dos formas, y saber pasar de una a otra es media asignatura:

| Forma | Cómo se da | Cómo se obtiene la otra |
| --- | --- | --- |
| Paramétrica | por un sistema generador | eliminar los parámetros |
| Implícita | por ecuaciones homogéneas | resolver el sistema |

$$\dim W = n - (\text{número de ecuaciones independientes})$$

Cada forma sirve para una cosa distinta: con la implícita se comprueba de un vistazo si
un vector pertenece, y con la paramétrica se generan vectores del subespacio. Y la
**intersección** es inmediata en implícitas —se juntan las ecuaciones— mientras que la
**suma** es inmediata en paramétricas —se juntan los generadores—.

## Ejercicios

```{=latex}
\begin{ejercicio}
¿Es $W = \{(x,y,z)\in\mathbb{R}^3 : x+y+z=1\}$ un subespacio de $\mathbb{R}^3$?
\end{ejercicio}

\begin{solucion}
No: el vector nulo no cumple la ecuación, ya que $0+0+0 = 0 \ne 1$. Es un plano afín,
trasladado del subespacio $x+y+z=0$. La comprobación del cero descarta el candidato sin
tener que mirar la suma ni el producto.
\end{solucion}

\begin{ejercicio}
Hallar la dimensión, una base y la ecuación implícita de
$W = \langle (1,2,1),\ (2,1,-1),\ (4,5,1) \rangle$ en $\mathbb{R}^3$.
\end{ejercicio}

\begin{solucion}
El determinante de los tres vectores es 0, así que el rango es menor que 3. De hecho
$(4,5,1) = 2(1,2,1) + (2,1,-1)$, y los dos primeros son independientes, luego
$\dim W = 2$ y una base es $\{(1,2,1),(2,1,-1)\}$. Para la ecuación implícita se impone
que $(x,y,z)$ sea combinación de la base, es decir que el determinante de los tres se
anule, y sale $x - y + z = 0$. Comprobación: los dos vectores de la base la cumplen.
\end{solucion}

\begin{ejercicio}
En $\mathbb{R}^4$, $\dim U = 3$ y $\dim W = 2$. ¿Cuál es la dimensión mínima posible de
$U\cap W$?
\end{ejercicio}

\begin{solucion}
Por Grassmann, $\dim(U\cap W) = 3+2-\dim(U+W)$, y como $U+W \subseteq \mathbb{R}^4$ se
tiene $\dim(U+W)\le 4$. Luego $\dim(U\cap W) \ge 1$: nunca se cortan solo en el origen.
En $\mathbb{R}^4$ no caben un subespacio de dimensión 3 y otro de dimensión 2 en suma
directa, porque sumarían 5.
\end{solucion}
```

El desarrollo de los espacios vectoriales está en \cite{merino2021} y
\cite{strang2007}, y sus problemas en \cite{rojo2005} y \cite{burgos1989}.
