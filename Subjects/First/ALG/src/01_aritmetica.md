# Aritmética entera y modular

Bloque 1 del programa. Divisibilidad, el algoritmo de Euclides, congruencias, la
construcción de $\mathbb{Z}_n$, el teorema de Euler y los polinomios sobre cuerpos
finitos.

## Los números naturales y la división

El principio que sostiene todo el bloque:

```{=latex}
\begin{teorema}[Algoritmo de la división]
Dados $a \in \mathbb{Z}$ y $b \in \mathbb{Z}$ con $b \ne 0$, existen enteros únicos
$q$ y $r$ tales que
$$a = bq + r, \qquad 0 \le r < \lvert b\rvert$$
\end{teorema}
```

La unicidad es lo que convierte el resto en una función bien definida, y de ahí sale
la aritmética modular entera.

### Sistemas de numeración

Todo entero positivo se escribe de forma única en base $b \ge 2$:

$$n = \sum_{i=0}^{k} d_i\,b^{\,i}, \qquad 0 \le d_i < b$$

La conversión a base $b$ es aplicar el algoritmo de la división repetidamente y leer
los restos al revés. Con $b$ potencia de 2 la conversión desde binario es agrupar
dígitos, y de ahí que la informática use 8 y 16.

## Divisibilidad

| Concepto | Definición |
| --- | --- |
| $a \mid b$ | existe $c$ con $b = ac$ |
| Máximo común divisor | el mayor $d$ con $d\mid a$ y $d\mid b$ |
| Mínimo común múltiplo | el menor positivo múltiplo de los dos |
| Primos entre sí | $\mcd(a,b) = 1$ |

```{=latex}
\begin{proposicion}
$\mcd(a,b)\cdot \mcm(a,b) = \lvert ab\rvert$.
\end{proposicion}
```

### El algoritmo de Euclides

Se apoya en que $\mcd(a,b) = \mcd(b, a \bmod b)$, y termina porque los restos decrecen
estrictamente.

```{=latex}
\begin{ejemplo}
$\mcd(1071, 462)$:

\medskip
\begin{tabular}{@{}llll@{}}
\toprule
$a$ & $b$ & $q$ & $r$ \\
\midrule
1071 & 462 & 2 & 147 \\
462 & 147 & 3 & 21 \\
147 & 21 & 7 & 0 \\
\bottomrule
\end{tabular}

\medskip
El último resto no nulo es 21, así que $\mcd(1071,462) = 21$.
\end{ejemplo}
```

Su coste es $O(\log \min(a,b))$ divisiones, que es lo que lo hace utilizable con
números de cientos de cifras. Calcular el máximo común divisor factorizando sería
inviable, y esa asimetría es la base de la criptografía de clave pública.

```{=latex}
\begin{teorema}[Identidad de Bézout]
Para cualesquiera $a, b$ enteros no ambos nulos existen $u, v \in \mathbb{Z}$ con
$$\mcd(a,b) = ua + vb$$
\end{teorema}
```

El **algoritmo extendido de Euclides** calcula $u$ y $v$ arrastrando los coeficientes
hacia atrás. Su utilidad concreta: es como se calculan los inversos en $\mathbb{Z}_n$,
que es el resultado central del bloque.

### Números primos

```{=latex}
\begin{teorema}[Fundamental de la aritmética]
Todo entero mayor que 1 se descompone en producto de primos de forma única salvo el
orden.
\end{teorema}

\begin{teorema}[Euclides]
Hay infinitos primos.
\end{teorema}

\begin{demostracion}
Si solo hubiese finitos, $p_1,\dots,p_k$, el número $N = p_1p_2\cdots p_k + 1$ no sería
divisible por ninguno de ellos, ya que da resto 1 con todos. Entonces $N$ o es primo o
tiene un factor primo fuera de la lista; en los dos casos la lista no era completa.
\end{demostracion}
```

Para decidir si $n$ es primo basta probar divisores hasta $\sqrt{n}$: si $n = ab$ con
$a \le b$, entonces $a \le \sqrt{n}$. Ese detalle rebaja el coste de $O(n)$ a
$O(\sqrt{n})$, y la criba de Eratóstenes lo aprovecha para listar todos los primos
hasta $n$.

## El anillo $\mathbb{Z}$

$(\mathbb{Z}, +, \cdot)$ es un anillo conmutativo con unidad, y además **dominio de
integridad**: si $ab = 0$, entonces $a=0$ o $b=0$. No es un cuerpo, porque los únicos
elementos con inverso son $1$ y $-1$.

Esa carencia es justo la que $\mathbb{Z}_n$ va a resolver, para ciertos $n$.

## Congruencias y $\mathbb{Z}_n$

```{=latex}
\begin{definicion}[Congruencia]
$a \equiv b \pmod{n}$ si $n \mid (a-b)$.
\end{definicion}
```

Es una relación de equivalencia, y sus clases forman $\mathbb{Z}_n$. Las operaciones se
definen sobre representantes y **están bien definidas**: el resultado no depende del
representante elegido, y eso es lo que hay que comprobar antes de usarlas.

| Propiedad | Enunciado |
| --- | --- |
| Suma | $a\equiv b$, $c\equiv d$ $\Rightarrow$ $a+c \equiv b+d$ |
| Producto | mismas hipótesis $\Rightarrow$ $ac \equiv bd$ |
| Potencia | $a \equiv b \Rightarrow a^k \equiv b^k$ |
| **Cancelación** | $ac \equiv bc \pmod n$ y $\mcd(c,n)=1$ $\Rightarrow$ $a \equiv b$ |

La cancelación **exige la hipótesis**: $2\cdot 3 \equiv 2\cdot 0 \pmod 6$ y sin embargo
$3 \not\equiv 0$. Cancelar sin comprobar que el factor es primo con el módulo es el
error más repetido del bloque.

### Inversos

```{=latex}
\begin{teorema}
$a$ tiene inverso en $\mathbb{Z}_n$ si y solo si $\mcd(a,n)=1$. En consecuencia,
$\mathbb{Z}_n$ es un cuerpo si y solo si $n$ es primo.
\end{teorema}

\begin{demostracion}
Si $\mcd(a,n)=1$, por Bézout hay $u,v$ con $ua + vn = 1$, y reduciendo módulo $n$ queda
$ua \equiv 1$, así que $u$ es el inverso. Recíprocamente, si $ua \equiv 1 \pmod n$
entonces $ua - 1 = kn$, luego cualquier divisor común de $a$ y $n$ divide a 1.
\end{demostracion}
```

El inverso se calcula con Euclides extendido, no probando candidatos.

```{=latex}
\begin{ejemplo}
Inverso de 7 módulo 26. Euclides: $26 = 3\cdot 7 + 5$, $7 = 1\cdot 5 + 2$,
$5 = 2\cdot 2 + 1$. Hacia atrás:
$$1 = 5 - 2\cdot 2 = 5 - 2(7-5) = 3\cdot 5 - 2\cdot 7 = 3(26-3\cdot7) - 2\cdot 7
= 3\cdot 26 - 11\cdot 7$$
Luego $-11 \cdot 7 \equiv 1 \pmod{26}$, y el inverso es $-11 \equiv 15$.
Comprobación: $7 \cdot 15 = 105 = 4\cdot 26 + 1$.
\end{ejemplo}
```

### La función de Euler y su teorema

```{=latex}
\begin{definicion}
$\varphi(n)$ es la cantidad de enteros entre 1 y $n$ primos con $n$.
\end{definicion}

\begin{proposicion}
$\varphi$ es multiplicativa para argumentos primos entre sí, $\varphi(p) = p-1$ para
$p$ primo y $\varphi(p^k) = p^k - p^{k-1}$. De ahí
$$\varphi(n) = n\prod_{p\mid n}\left(1-\frac{1}{p}\right)$$
\end{proposicion}

\begin{teorema}[Euler]
Si $\mcd(a,n)=1$ entonces $a^{\varphi(n)} \equiv 1 \pmod n$.
\end{teorema}

\begin{corolario}[Pequeño teorema de Fermat]
Si $p$ es primo y $p \nmid a$, entonces $a^{p-1}\equiv 1 \pmod p$.
\end{corolario}
```

El teorema de Euler es lo que permite **reducir exponentes enormes**: para calcular
$a^k \bmod n$ basta con $k \bmod \varphi(n)$. Sin él, la exponenciación modular de la
criptografía no sería practicable.

```{=latex}
\begin{ejemplo}
$7^{1000} \bmod 26$. Como $\varphi(26) = \varphi(2)\varphi(13) = 1\cdot 12 = 12$ y
$\mcd(7,26)=1$, se tiene $7^{12}\equiv 1$. Y $1000 = 83\cdot 12 + 4$, así que
$7^{1000} \equiv 7^4 = 2401 = 92\cdot 26 + 9 \equiv 9 \pmod{26}$.
\end{ejemplo}
```

## Ecuaciones y sistemas de congruencias

```{=latex}
\begin{teorema}[Ecuación lineal en congruencias]
$ax \equiv b \pmod n$ tiene solución si y solo si $d = \mcd(a,n)$ divide a $b$, y en
ese caso tiene exactamente $d$ soluciones distintas módulo $n$.
\end{teorema}
```

El número de soluciones sorprende y conviene retenerlo: **no es cero o una**, es cero o
$d$. Con $6x \equiv 4 \pmod 8$, $d = 2$ divide a 4 y hay dos soluciones, $x=2$ y
$x=6$.

```{=latex}
\begin{teorema}[Chino de los restos]
Si $n_1,\dots,n_k$ son primos entre sí dos a dos, el sistema
$$x \equiv a_i \pmod{n_i}, \qquad i=1,\dots,k$$
tiene solución única módulo $N = n_1n_2\cdots n_k$.
\end{teorema}
```

Es el resultado con más aplicaciones del bloque: permite trabajar con números grandes
descomponiéndolos en restos módulo primos pequeños, hacer las operaciones en paralelo y
recomponer al final.

## Polinomios y cuerpos finitos

$K[x]$, con $K$ un cuerpo, se comporta como $\mathbb{Z}$: hay división con resto,
máximo común divisor por Euclides, identidad de Bézout y factorización única en
irreducibles.

| $\mathbb{Z}$ | $K[x]$ |
| --- | --- |
| valor absoluto | grado |
| número primo | polinomio irreducible |
| $\mathbb{Z}_n$ | $K[x]/(p(x))$ |
| $\mathbb{Z}_p$ es cuerpo si $p$ primo | $K[x]/(p)$ es cuerpo si $p$ es irreducible |

**La analogía es exacta**, y verla ahorra memorizar la mitad de los resultados.

| Concepto | Enunciado |
| --- | --- |
| Teorema del resto | el resto de dividir $P$ entre $x-a$ es $P(a)$ |
| Raíz | $a$ es raíz $\iff$ $(x-a) \mid P$ |
| Multiplicidad | mayor $k$ con $(x-a)^k \mid P$ |
| Número de raíces | un polinomio de grado $n$ tiene como mucho $n$ raíces en un cuerpo |

La última fila **falla si el anillo no es un cuerpo**: en $\mathbb{Z}_8$, el polinomio
$x^2-1$ tiene cuatro raíces, que son 1, 3, 5 y 7.

### Construcción de cuerpos finitos

Si $p(x)$ es irreducible de grado $m$ sobre $\mathbb{Z}_q$, entonces
$\mathbb{Z}_q[x]/(p(x))$ es un cuerpo con $q^m$ elementos.

```{=latex}
\begin{ejemplo}
$x^2+x+1$ es irreducible sobre $\mathbb{Z}_2$, porque no tiene raíces: $p(0)=p(1)=1$.
El cociente $\mathbb{Z}_2[x]/(x^2+x+1)$ es un cuerpo de cuatro elementos
$\{0, 1, \alpha, \alpha+1\}$ con $\alpha^2 = \alpha+1$.

\medskip
Los cuerpos finitos tienen siempre $p^m$ elementos con $p$ primo. No existe ningún
cuerpo de 6 elementos.
\end{ejemplo}
```

Los cuerpos finitos son la base de los códigos correctores de errores y del cifrado
AES, y esa es su presencia en un grado de informática.

## Ejercicios

```{=latex}
\begin{ejercicio}
Resolver $14x \equiv 30 \pmod{100}$.
\end{ejercicio}

\begin{solucion}
$d = \mcd(14,100) = 2$, que divide a 30, así que hay dos soluciones módulo 100. Se
divide todo por 2: $7x \equiv 15 \pmod{50}$. El inverso de 7 módulo 50 es 43, porque
$7\cdot43 = 301 = 6\cdot 50 + 1$. Entonces $x \equiv 43\cdot 15 = 645 \equiv 45
\pmod{50}$, y las dos soluciones módulo 100 son $x = 45$ y $x = 95$.
\end{solucion}

\begin{ejercicio}
Calcular $\varphi(360)$.
\end{ejercicio}

\begin{solucion}
$360 = 2^3\cdot 3^2\cdot 5$, así que
$$\varphi(360) = 360\left(1-\tfrac12\right)\left(1-\tfrac13\right)\left(1-\tfrac15\right)
= 360\cdot\tfrac12\cdot\tfrac23\cdot\tfrac45 = 96$$
\end{solucion}

\begin{ejercicio}
Encontrar el menor entero positivo que da resto 2 al dividirlo entre 3, resto 3 entre 5
y resto 2 entre 7.
\end{ejercicio}

\begin{solucion}
Los módulos son primos entre sí, así que el teorema chino garantiza solución única
módulo 105. De $x\equiv 2 \pmod 3$ y $x \equiv 2 \pmod 7$ sale $x \equiv 2 \pmod{21}$,
es decir $x = 2 + 21k$. Imponiendo $x \equiv 3 \pmod 5$: $2 + 21k \equiv 3$, o sea
$k \equiv 1 \pmod 5$. Con $k=1$, $x = 23$. Comprobación: $23 = 7\cdot3+2 = 4\cdot5+3
= 3\cdot7+2$.
\end{solucion}
```

El desarrollo de la aritmética entera y modular está en \cite{grimaldi1998} y
\cite{dorronsoro1999}, y su tratamiento con problemas en \cite{merino2021}.
