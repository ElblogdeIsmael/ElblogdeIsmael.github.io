# Cálculo integral para funciones de varias variables

Tema 6 del programa. Integrales dobles sobre recintos del plano, el teorema de Fubini y
las aplicaciones económicas.

## La integral doble

Igual que la integral simple aproximaba el área bajo una curva con rectángulos, la doble
aproxima el volumen bajo una superficie con prismas.

$$\iint_{R} f(x,y)\,dA = \lim \sum_{i,j} f(x_i^{*},y_j^{*})\,\Delta A_{ij}$$

```{=latex}
\begin{teorema}
Toda función continua sobre un recinto acotado y con frontera de área nula es
integrable.
\end{teorema}
```

| Propiedad | Expresión |
| --- | --- |
| Linealidad | $\iint (\alpha f+\beta g) = \alpha\iint f + \beta\iint g$ |
| Aditividad | $\iint_{R_1\cup R_2} = \iint_{R_1} + \iint_{R_2}$ si no se solapan |
| Monotonía | $f\le g \Rightarrow \iint f \le \iint g$ |
| Área del recinto | $\iint_R 1\,dA = \text{área}(R)$ |

La última fila es la más usada en la práctica: **integrar la función constante 1 da el
área**, y sirve para comprobar que los límites de integración están bien puestos.

## Teorema de Fubini

```{=latex}
\begin{teorema}[Fubini]
Si $f$ es continua sobre el rectángulo $R = [a,b]\times[c,d]$,
$$\iint_R f\,dA = \int_a^b\!\!\left(\int_c^d f(x,y)\,dy\right)dx
= \int_c^d\!\!\left(\int_a^b f(x,y)\,dx\right)dy$$
\end{teorema}
```

Es el resultado que convierte una integral doble en dos simples encadenadas, que es lo
único que se sabe calcular. En el rectángulo el orden es indiferente; en un recinto
general no lo es tanto, y elegirlo bien puede ser la diferencia entre una integral
inmediata y una imposible.

### Recintos generales

| Tipo | Descripción | Integral |
| --- | --- | --- |
| Tipo I | $a\le x\le b$, $g_1(x)\le y\le g_2(x)$ | $\int_a^b\int_{g_1(x)}^{g_2(x)} f\,dy\,dx$ |
| Tipo II | $c\le y\le d$, $h_1(y)\le x\le h_2(y)$ | $\int_c^d\int_{h_1(y)}^{h_2(y)} f\,dx\,dy$ |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=7.4cm, height=5.2cm,
  xlabel={$x$}, ylabel={$y$},
  xmin=0, xmax=2.4, ymin=0, ymax=4.4,
  axis lines=left, tick label style={font=\scriptsize}, samples=80,
]
\addplot[fill=black!10, draw=none, domain=0:2] {x^2} \closedcycle;
\addplot[thick, domain=0:2.2] {x^2};
\addplot[thick, domain=0:2.2] {0};
\draw[dashed] (axis cs:2,0) -- (axis cs:2,4);
\node[font=\scriptsize] at (axis cs:1.45,0.9) {$R$};
\node[font=\scriptsize, anchor=west] at (axis cs:1.55,3.4) {$y=x^2$};
\end{axis}
\end{tikzpicture}
\end{center}
```

**La regla de oro: dibujar el recinto siempre.** Los límites de integración salen del
dibujo y no de manipular las desigualdades, y el error clásico —poner límites variables
en la integral exterior— se detecta de un vistazo, porque el resultado dependería de una
variable que debía haber desaparecido.

```{=latex}
\begin{ejemplo}
$\displaystyle\iint_R xy\,dA$ con $R$ limitado por $y=x^2$, $y=0$ y $x=2$.

\medskip
Como tipo I:
$$\int_0^2\!\!\int_0^{x^2} xy\,dy\,dx = \int_0^2 x\,\frac{x^4}{2}\,dx
= \frac{1}{2}\int_0^2 x^5\,dx = \frac{1}{2}\cdot\frac{64}{6} = \frac{16}{3}$$

\medskip
Como tipo II saldría $\int_0^4\int_{\sqrt y}^{2} xy\,dx\,dy$, con el mismo valor y más
trabajo por la raíz.
\end{ejemplo}
```

### Cambio de orden

A veces una integral no se puede calcular en el orden dado y sí en el otro. El
procedimiento es el mismo siempre: **dibujar el recinto a partir de los límites que hay,
y volver a leerlo en el otro orden**.

```{=latex}
\begin{ejemplo}
$$\int_0^1\!\!\int_x^1 e^{y^2}\,dy\,dx$$
La primitiva de $e^{y^2}$ no es elemental, así que en ese orden no hay nada que hacer.
El recinto es $0\le x\le 1$, $x\le y\le 1$, es decir el triángulo bajo la diagonal.
Leído al revés: $0\le y\le 1$, $0\le x\le y$.
$$\int_0^1\!\!\int_0^{y} e^{y^2}\,dx\,dy = \int_0^1 y\,e^{y^2}\,dy
= \left[\tfrac{1}{2}e^{y^2}\right]_0^1 = \frac{e-1}{2}$$
El factor $y$ que aparece al integrar en $x$ es justamente el que hace inmediata la
integral.
\end{ejemplo}
```

## Aplicaciones económicas

| Aplicación | Integral |
| --- | --- |
| Volumen bajo una superficie | $\iint_R f\,dA$ con $f\ge0$ |
| Área de un recinto | $\iint_R 1\,dA$ |
| Valor medio de una función | $\dfrac{1}{\text{área}(R)}\iint_R f\,dA$ |
| Beneficio total sobre un rango de producción | $\iint_R B(x,y)\,dA$ |
| Excedente del consumidor | integral bajo la demanda menos el gasto |
| Coste total a partir del coste marginal | integrar las parciales |

El **valor medio** es la aplicación más frecuente en un contexto empresarial: si
$f(x,y)$ es el beneficio unitario según dos variables que fluctúan dentro de un rango,
su valor medio sobre ese rango estima el beneficio esperado cuando las combinaciones son
igualmente probables.

```{=latex}
\begin{ejemplo}
El beneficio unitario de un producto es $B(p,c) = 3p - 2c$, con el precio $p$ variando
entre 10 y 14 y el coste $c$ entre 4 y 6. El beneficio medio es
$$\frac{1}{8}\int_{10}^{14}\!\!\int_4^6 (3p-2c)\,dc\,dp$$
La integral interior da $\left[3pc - c^2\right]_4^6 = 6p - 20$, y entonces
$$\frac{1}{8}\int_{10}^{14}(6p-20)\,dp = \frac{1}{8}\left[3p^2-20p\right]_{10}^{14}
= \frac{1}{8}(588-280-300+200) = \frac{208}{8} = 26$$
El área del rectángulo es $4\cdot2 = 8$, que es lo que divide.
\end{ejemplo}
```

### Recuperar una función a partir de sus marginales

Si se conocen $\partial C/\partial x$ y $\partial C/\partial y$, la función de coste se
recupera integrando, con una precaución: **la constante de integración de la primera
integral es una función de la otra variable**.

```{=latex}
\begin{ejemplo}
$C_x = 2x+y$ y $C_y = x+4y$. Integrando la primera respecto de $x$:
$$C(x,y) = x^2 + xy + \varphi(y)$$
Derivando respecto de $y$: $C_y = x + \varphi'(y)$, que comparado con $x+4y$ da
$\varphi'(y) = 4y$, es decir $\varphi(y) = 2y^2 + k$. Por tanto
$$C(x,y) = x^2+xy+2y^2+k$$
con $k$ el coste fijo, que solo se determina con un dato adicional.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
No todo par de funciones son las parciales de una misma función. La condición es la de
Schwarz: $\partial C_x/\partial y = \partial C_y/\partial x$. Con $C_x = y$ y
$C_y = 2x$ el sistema es incompatible —1 frente a 2— y el procedimiento anterior lleva a
una contradicción. Comprobarlo antes de integrar ahorra el trabajo.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Calcular $\displaystyle\iint_R (x+y)\,dA$ sobre el triángulo de vértices $(0,0)$,
$(1,0)$ y $(0,1)$.
\end{ejercicio}

\begin{solucion}
El recinto es $0\le x\le1$, $0\le y\le 1-x$.
$$\int_0^1\!\!\int_0^{1-x}(x+y)\,dy\,dx
= \int_0^1\left[xy+\tfrac{y^2}{2}\right]_0^{1-x}dx
= \int_0^1\left(x(1-x)+\tfrac{(1-x)^2}{2}\right)dx$$
El integrando se simplifica a $\tfrac{1}{2} - \tfrac{x^2}{2}$, cuya integral entre 0 y 1
es $\tfrac12 - \tfrac16 = \tfrac13$.
\end{solucion}

\begin{ejercicio}
Cambiar el orden de integración en
$\displaystyle\int_0^2\!\!\int_{y/2}^{1}\! f(x,y)\,dx\,dy$.
\end{ejercicio}

\begin{solucion}
El recinto es $0\le y\le 2$, $y/2\le x\le 1$, es decir el triángulo de vértices $(0,0)$,
$(1,0)$ y $(1,2)$, bajo la recta $y=2x$. Leído en el otro orden: $0\le x\le 1$,
$0\le y\le 2x$, así que
$$\int_0^1\!\!\int_0^{2x} f(x,y)\,dy\,dx$$
\end{solucion}

\begin{ejercicio}
Comprobar si existe una función de coste con $C_x = 3x^2y$ y $C_y = x^3 + 2y$, y hallarla
si existe.
\end{ejercicio}

\begin{solucion}
Condición de Schwarz: $\partial C_x/\partial y = 3x^2$ y
$\partial C_y/\partial x = 3x^2$. Coinciden, luego existe. Integrando la primera respecto
de $x$: $C = x^3y + \varphi(y)$. Derivando respecto de $y$: $x^3 + \varphi'(y)$, que
comparado con $x^3+2y$ da $\varphi(y)=y^2+k$. Por tanto $C(x,y)=x^3y+y^2+k$.
\end{solucion}
```

El cálculo integral en varias variables está desarrollado en \cite{stewart2002} y
\cite{alvarez2020}, con aplicaciones económicas en \cite{haeussler2008} y problemas
resueltos en \cite{cabello2019}.
