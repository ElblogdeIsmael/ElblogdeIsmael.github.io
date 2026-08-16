# Relación de problemas

El temario práctico de la guía es la resolución de problemas en los grupos reducidos.
Esta relación recorre los seis bloques con la solución completa.

## Álgebras de Boole

```{=latex}
\begin{ejercicio}
Simplificar $f(x,y,z) = \sum m(0,2,4,5,6)$ y dar el circuito con menos puertas.
\end{ejercicio}

\begin{solucion}
En el mapa de Karnaugh, los mintérminos 0, 2, 4 y 6 son todos los que tienen $z=0$: un
grupo de cuatro que da $z'$. Queda el 5, que se agrupa con el 4 dando $xy'$. Por tanto
$$f = z' \vee xy'$$
Dos puertas y dos inversores, frente a los cinco términos de tres literales de la forma
canónica.
\end{solucion}

\begin{ejercicio}
Demostrar que $\{\wedge, \vee\}$ no es funcionalmente completo.
\end{ejercicio}

\begin{solucion}
Por inducción estructural: toda función construida solo con $\wedge$ y $\vee$ es
\emph{monótona}, es decir, cambiar una entrada de 0 a 1 nunca hace bajar la salida. Es
cierto para las variables, y se conserva al aplicar $\wedge$ y $\vee$, que son monótonas
en cada argumento. La negación no lo es, luego no se puede expresar.
\end{solucion}
```

## Lógica proposicional

```{=latex}
\begin{ejercicio}
Decidir si $\{p\to q,\ q\to r,\ \neg r\} \models \neg p$.
\end{ejercicio}

\begin{solucion}
Por refutación: se añade $p$ y se pasa todo a cláusulas, que da
$\{\neg p,q\}$, $\{\neg q,r\}$, $\{\neg r\}$ y $\{p\}$. Resolviendo $\{p\}$ con la
primera sale $\{q\}$; con la segunda, $\{r\}$; y con $\{\neg r\}$, la cláusula vacía. La
consecuencia es válida: es el \emph{modus tollens} encadenado.
\end{solucion}

\begin{ejercicio}
Un conjunto de cláusulas contiene $\{p\}$, $\{\neg p, q\}$, $\{\neg q, r\}$ y
$\{\neg r, s\}$. Aplicar Davis-Putnam.
\end{ejercicio}

\begin{solucion}
$\{p\}$ es unitaria: $p$ verdadero. Propagando desaparece $\{p\}$ y $\{\neg p,q\}$ pasa
a $\{q\}$, otra unitaria. Repitiendo, se obtienen $r$ y $s$ verdaderos y el conjunto
queda vacío: es satisfacible, con la valoración que hace verdaderas las cuatro
variables. Toda la resolución ha sido propagación unitaria, sin una sola división.
\end{solucion}
```

## Primer orden

```{=latex}
\begin{ejercicio}
Formalizar y decidir: «hay alguien a quien todos admiran» frente a «todos admiran a
alguien».
\end{ejercicio}

\begin{solucion}
Con $A(x,y)$ «$x$ admira a $y$»:
$$\exists y\,\forall x\,A(x,y) \qquad\text{y}\qquad \forall x\,\exists y\,A(x,y)$$
La primera implica la segunda y no al revés. Contraejemplo para el recíproco: dominio
$\{a,b\}$ con $A(a,a)$ y $A(b,b)$ y nada más. Todos admiran a alguien —a sí mismos— y no
hay nadie admirado por todos.
\end{solucion}

\begin{ejercicio}
Skolemizar $\forall x\,\exists y\,\forall z\,\exists w\ P(x,y,z,w)$.
\end{ejercicio}

\begin{solucion}
$y$ va tras $\forall x$, así que pasa a $f(x)$. $w$ va tras $\forall x$ y $\forall z$,
así que pasa a $g(x,z)$. Queda
$$\forall x\,\forall z\ P(x, f(x), z, g(x,z))$$
Cada función de Skolem depende exactamente de los universales que la preceden, ni uno
más.
\end{solucion}
```

## Unificación y resolución

```{=latex}
\begin{ejercicio}
Unificar $P(f(x), y, g(y))$ con $P(f(a), z, g(z))$.
\end{ejercicio}

\begin{solucion}
Primera discrepancia dentro de $f$: $\{x/a\}$. Segunda: $y$ frente a $z$, que da
$\{y/z\}$. Aplicándola, las terceras posiciones son $g(z)$ las dos. El umg es
$\{x/a,\ y/z\}$.
\end{solucion}

\begin{ejercicio}
Probar por resolución que de «todos los perros son mamíferos» y «algún mamífero no es
acuático» no se sigue «algún perro no es acuático».
\end{ejercicio}

\begin{solucion}
No se puede probar porque no es válido: basta un contraejemplo semántico. Dominio
$\{p, m\}$ con $Perro(p)$, $Mamífero(p)$, $Mamífero(m)$, $Acuático(p)$ y $m$ no
acuático. Las dos premisas son verdaderas y la conclusión falsa, ya que el único perro
es acuático. La resolución no derivaría la cláusula vacía, aunque el hecho de no
encontrarla no demuestre nada por sí solo: la validez en primer orden solo es
semidecidible.
\end{solucion}
```

## Inducción y recurrencia

```{=latex}
\begin{ejercicio}
Demostrar que $\sum_{k=1}^{n} k^2 = \dfrac{n(n+1)(2n+1)}{6}$.
\end{ejercicio}

\begin{solucion}
\emph{Base}: con $n=1$ los dos lados valen 1.

\medskip
\emph{Paso}: sumando $(n+1)^2$ a la hipótesis,
$$\frac{n(n+1)(2n+1)}{6} + (n+1)^2
= \frac{(n+1)\left[n(2n+1)+6(n+1)\right]}{6}
= \frac{(n+1)(2n^2+7n+6)}{6}$$
y como $2n^2+7n+6 = (n+2)(2n+3)$, queda $\frac{(n+1)(n+2)(2n+3)}{6}$, que es la fórmula
para $n+1$.
\end{solucion}

\begin{ejercicio}
Resolver $a_n = 4a_{n-1} - 4a_{n-2}$ con $a_0=1$ y $a_1=3$.
\end{ejercicio}

\begin{solucion}
$r^2-4r+4=(r-2)^2$: raíz doble $r=2$. La solución general lleva el factor $n$:
$a_n = (A+Bn)2^n$. De $a_0 = A = 1$ y $a_1 = 2(1+B) = 3$ sale $B = 1/2$.
$$a_n = \left(1+\frac{n}{2}\right)2^n = 2^n + n\,2^{n-1}$$
Comprobación: $a_2 = 4+4 = 8$, y por la recurrencia $4\cdot3-4\cdot1 = 8$.
\end{solucion}

\begin{ejercicio}
Un algoritmo divide el problema en tres subproblemas de tamaño $n/2$ y combina en
tiempo lineal. ¿Cuál es su coste?
\end{ejercicio}

\begin{solucion}
$T(n)=3T(n/2)+\Theta(n)$. Aquí $\log_2 3 \approx 1{,}585 > 1$, así que $f(n)=n$ está
por debajo y se aplica el primer caso: $T(n)=\Theta(n^{\log_2 3})$. Es exactamente el
coste del algoritmo de Karatsuba para multiplicar enteros grandes.
\end{solucion}
```

## Grafos y árboles

```{=latex}
\begin{ejercicio}
¿Cuántos lados tiene un grafo 4-regular con 12 vértices? ¿Puede ser plano?
\end{ejercicio}

\begin{solucion}
Por el apretón de manos, $2m = 12\cdot 4 = 48$, luego $m = 24$. La cota de planaridad da
$3n-6 = 30 \ge 24$, así que el criterio no lo descarta y podría ser plano. La cota es
condición necesaria y no suficiente: para decidirlo haría falta Kuratowski o exhibir un
dibujo.
\end{solucion}

\begin{ejercicio}
Determinar el número cromático de $C_7$ y de $K_{3,4}$.
\end{ejercicio}

\begin{solucion}
$C_7$ es un ciclo de longitud impar, así que $\chi = 3$: con dos colores alternos, al
cerrar el ciclo el primero y el último vértice coincidirían. $K_{3,4}$ es bipartido y
tiene lados, luego $\chi = 2$, uno por clase, sin importar cuántos lados haya.
\end{solucion}

\begin{ejercicio}
Un árbol tiene 4 vértices de grado 3, 2 de grado 2 y el resto son hojas. ¿Cuántos
vértices tiene?
\end{ejercicio}

\begin{solucion}
Sea $h$ el número de hojas y $n = 4+2+h$ el total. Un árbol tiene $n-1$ lados, así que
la suma de grados es $2(n-1)$:
$$4\cdot3 + 2\cdot2 + h = 2(6+h-1)$$
es decir $16 + h = 10 + 2h$, de donde $h = 6$ y $n = 12$.
\end{solucion}

\begin{ejercicio}
Un grafo conexo tiene todos sus vértices de grado par. ¿Se puede recorrer pasando por
cada lado exactamente una vez y volviendo al punto de partida?
\end{ejercicio}

\begin{solucion}
Sí, por el teorema de Euler: un grafo conexo tiene circuito euleriano si y solo si todos
los grados son pares. La intuición del porqué: al entrar en un vértice hay que poder
salir, y cada visita consume dos lados, así que un grado impar dejaría un lado sin
pareja.
\end{solucion}
```

Los problemas siguen el estilo de \cite{lipschutz2004} y \cite{hortala2008}, con la
teoría de \cite{grimaldi1997}, \cite{biggs1998} y \cite{garciamiranda2017}.
