# Relación de problemas

El temario práctico de la guía es la resolución de problemas en los grupos reducidos.
Esta relación recorre los cinco bloques, con la solución completa.

## Aritmética entera y modular

```{=latex}
\begin{ejercicio}
Calcular $\mcd(2024, 748)$ y expresarlo como combinación entera de los dos números.
\end{ejercicio}

\begin{solucion}
Euclides: $2024 = 2\cdot 748 + 528$; $748 = 1\cdot 528 + 220$; $528 = 2\cdot 220 + 88$;
$220 = 2\cdot 88 + 44$; $88 = 2\cdot 44 + 0$. El máximo común divisor es 44.

\medskip
Hacia atrás: $44 = 220 - 2\cdot 88 = 220 - 2(528 - 2\cdot 220) = 5\cdot 220 - 2\cdot 528
= 5(748-528) - 2\cdot 528 = 5\cdot 748 - 7\cdot 528
= 5\cdot 748 - 7(2024 - 2\cdot 748) = 19\cdot 748 - 7\cdot 2024$.

\medskip
Comprobación: $19\cdot 748 = 14\,212$ y $7\cdot 2024 = 14\,168$, cuya diferencia es 44.
\end{solucion}

\begin{ejercicio}
Hallar el resto de dividir $3^{2024}$ entre 11.
\end{ejercicio}

\begin{solucion}
11 es primo y no divide a 3, así que por Fermat $3^{10}\equiv 1 \pmod{11}$. Como
$2024 = 202\cdot 10 + 4$, se tiene $3^{2024}\equiv 3^{4} = 81 = 7\cdot 11 + 4 \equiv 4$.
El resto es 4.
\end{solucion}

\begin{ejercicio}
Resolver el sistema $x\equiv 1\pmod 4$, $x\equiv 2\pmod 9$, $x\equiv 3\pmod{25}$.
\end{ejercicio}

\begin{solucion}
Los módulos son primos entre sí, así que hay solución única módulo $4\cdot9\cdot25=900$.
De la primera, $x = 1+4k$. Sustituyendo en la segunda: $1+4k\equiv 2\pmod 9$, o sea
$4k\equiv 1$; el inverso de 4 módulo 9 es 7, luego $k\equiv 7\pmod 9$ y $x = 29 + 36m$.
En la tercera: $29+36m\equiv 3\pmod{25}$, es decir $11m \equiv -1 \equiv 24$; el inverso
de 11 módulo 25 es 16, así que $m \equiv 16\cdot 24 = 384 \equiv 9 \pmod{25}$. Por tanto
$x = 29 + 36\cdot 9 = 353$, y la solución general es $353 + 900t$.
\end{solucion}

\begin{ejercicio}
Comprobar que $x^3+x+1$ es irreducible sobre $\mathbb{Z}_2$ y decir cuántos elementos
tiene el cuerpo que genera.
\end{ejercicio}

\begin{solucion}
Un polinomio de grado 3 es reducible sobre un cuerpo si y solo si tiene alguna raíz.
Aquí $p(0) = 1$ y $p(1) = 1+1+1 = 1$ en $\mathbb{Z}_2$, así que no tiene raíces y es
irreducible. El cociente $\mathbb{Z}_2[x]/(p)$ es un cuerpo con $2^3 = 8$ elementos.
\end{solucion}
```

## Combinatoria

```{=latex}
\begin{ejercicio}
¿Cuántos números de cinco cifras tienen todas sus cifras distintas y son pares?
\end{ejercicio}

\begin{solucion}
Conviene empezar por las restricciones. Si la última cifra es 0, las cuatro primeras se
eligen entre las nueve restantes ordenadamente: $9\cdot 8\cdot 7\cdot 6 = 3024$. Si la
última es 2, 4, 6 u 8 —cuatro opciones—, la primera no puede ser 0 ni repetir, así que
hay 8 opciones, y las tres del medio $8\cdot7\cdot6$: $4\cdot 8\cdot 8\cdot 7\cdot 6 =
10\,752$. En total 13\,776.
\end{solucion}

\begin{ejercicio}
De un grupo de 12 personas se elige un comité de 5. ¿De cuántas formas, si dos personas
concretas se niegan a coincidir?
\end{ejercicio}

\begin{solucion}
Por el complementario: el total es $\binom{12}{5} = 792$, y los comités que contienen a
las dos son $\binom{10}{3} = 120$, porque las otras tres se eligen libremente. La
respuesta es $792 - 120 = 672$.
\end{solucion}

\begin{ejercicio}
Demostrar que en cualquier conjunto de 6 personas hay 3 que se conocen mutuamente o 3
que son mutuamente desconocidas.
\end{ejercicio}

\begin{solucion}
Se fija una persona $A$. Tiene 5 relaciones, de dos tipos, así que por el palomar al
menos 3 son del mismo tipo; sea el de «conoce», con $B$, $C$ y $D$. Si dos de esos tres
se conocen entre sí, junto con $A$ forman el trío que se conoce. Si ninguno de los tres
pares se conoce, entonces $B$, $C$ y $D$ son mutuamente desconocidos. En los dos casos
existe el trío buscado.
\end{solucion}
```

## Matrices y sistemas

```{=latex}
\begin{ejercicio}
Discutir y resolver según $a$:
$$\begin{cases} ax + y + z = 1 \\ x + ay + z = a \\ x + y + az = a^2 \end{cases}$$
\end{ejercicio}

\begin{solucion}
$\det A = (a-1)^2(a+2)$.

\medskip
Si $a\ne 1$ y $a\ne -2$: compatible determinado.

\medskip
Si $a = 1$: las tres ecuaciones son $x+y+z=1$, así que $\rg A = \rg A^{*} = 1$,
compatible indeterminado con dos parámetros.

\medskip
Si $a = -2$: $\rg A = 2$, y al escalonar la ampliada aparece una fila
$(0\ 0\ 0 \mid 3)$, así que $\rg A^{*} = 3$ y el sistema es incompatible.
\end{solucion}

\begin{ejercicio}
Calcular la inversa de $A=\begin{pmatrix}1&2&3\\0&1&4\\5&6&0\end{pmatrix}$ por
Gauss-Jordan.
\end{ejercicio}

\begin{solucion}
Se reduce $(A\mid I)$. El resultado es
$$A^{-1} = \begin{pmatrix}-24 & 18 & 5\\ 20 & -15 & -4 \\ -5 & 4 & 1\end{pmatrix}$$
La comprobación obligatoria es $AA^{-1}=I$: la primera fila de $A$ por la primera
columna de $A^{-1}$ da $-24 + 40 - 15 = 1$, y por la segunda, $18 - 30 + 12 = 0$.
\end{solucion}

\begin{ejercicio}
Demostrar que si $A$ es antisimétrica de orden impar, entonces $\det A = 0$.
\end{ejercicio}

\begin{solucion}
$A^{T} = -A$, así que $\det A = \det A^{T} = \det(-A) = (-1)^{n}\det A$. Con $n$ impar
queda $\det A = -\det A$, es decir $2\det A = 0$, y por tanto $\det A = 0$ en cualquier
cuerpo de característica distinta de 2.
\end{solucion}
```

## Espacios vectoriales

```{=latex}
\begin{ejercicio}
En $\mathbb{R}^4$, sean
$U = \langle (1,0,1,0),(0,1,0,1)\rangle$ y
$W = \{(x,y,z,t) : x+y = 0,\ z = t\}$. Hallar $\dim(U\cap W)$ y $\dim(U+W)$.
\end{ejercicio}

\begin{solucion}
$W$ está dado por dos ecuaciones independientes, así que $\dim W = 4-2 = 2$. Un vector
de $U$ es $a(1,0,1,0)+b(0,1,0,1) = (a,b,a,b)$; imponerle las ecuaciones de $W$ da
$a+b=0$ y $a=b$, de donde $a=b=0$. Luego $U\cap W = \{0\}$ y su dimensión es 0. Por
Grassmann, $\dim(U+W) = 2+2-0 = 4$: la suma es directa y llena $\mathbb{R}^4$.
\end{solucion}

\begin{ejercicio}
Hallar las ecuaciones implícitas de
$U = \langle (1,1,0),(0,1,1)\rangle$ en $\mathbb{R}^3$.
\end{ejercicio}

\begin{solucion}
Un vector $(x,y,z)$ está en $U$ si es combinación de los dos generadores, es decir si el
determinante de la matriz $3\times3$ que forman los tres se anula:
$$\begin{vmatrix} x & y & z \\ 1 & 1 & 0 \\ 0 & 1 & 1\end{vmatrix}
= x - y + z = 0$$
Una sola ecuación, coherente con $\dim U = 2 = 3-1$.
\end{solucion}
```

## Aplicaciones lineales y diagonalización

```{=latex}
\begin{ejercicio}
Diagonalizar $A = \begin{pmatrix} 4 & -2 \\ 1 & 1 \end{pmatrix}$.
\end{ejercicio}

\begin{solucion}
$p(\lambda) = (4-\lambda)(1-\lambda) + 2 = \lambda^2 - 5\lambda + 6$, con raíces 2 y 3,
distintas: es diagonalizable.

\medskip
Para $\lambda=2$: $(A-2I)\mathbf{x}=0$ da $2x-2y=0$, es decir $v_1=(1,1)$.
Para $\lambda=3$: $x-2y=0$, es decir $v_2=(2,1)$.

\medskip
Con $P = \begin{pmatrix}1&2\\1&1\end{pmatrix}$ se tiene
$P^{-1}AP = \begin{pmatrix}2&0\\0&3\end{pmatrix}$.
\end{solucion}

\begin{ejercicio}
Sea $f:\mathbb{R}^3\to\mathbb{R}^3$ con matriz
$A=\begin{pmatrix}1&2&3\\2&4&6\\3&6&9\end{pmatrix}$. Hallar núcleo e imagen, y decir si
es diagonalizable.
\end{ejercicio}

\begin{solucion}
Las tres filas son proporcionales, así que $\rg A = 1$: la imagen tiene dimensión 1 y
está generada por $(1,2,3)$, y el núcleo tiene dimensión 2, dado por $x+2y+3z=0$.

\medskip
El polinomio característico es $-\lambda^2(\lambda - 14)$, con $\lambda=0$ de
multiplicidad algebraica 2 y $\lambda=14$ simple. La multiplicidad geométrica del 0 es
$\dim\Nuc A = 2$, que coincide, y la del 14 es 1. Por tanto **sí es diagonalizable**,
semejante a $\operatorname{diag}(0,0,14)$.
\end{solucion}

\begin{ejercicio}
Si $A$ es diagonalizable y todos sus autovalores tienen módulo menor que 1, ¿qué le
ocurre a $A^k$ cuando $k$ crece?
\end{ejercicio}

\begin{solucion}
$A^k = PD^kP^{-1}$, y $D^k$ es la diagonal con los $\lambda_i^k$. Como
$\lvert\lambda_i\rvert < 1$, cada uno tiende a 0, luego $D^k \to 0$ y por tanto
$A^k \to 0$. Es la condición que garantiza la convergencia de los métodos iterativos del
tema de sistemas: el radio espectral de la matriz de iteración debe ser menor que 1.
\end{solucion}
```

Los problemas siguen el estilo de \cite{rojo2005}, \cite{dediego1995} y
\cite{lipschutz1991}, con la teoría de \cite{merino2021} y \cite{grimaldi1998}.
