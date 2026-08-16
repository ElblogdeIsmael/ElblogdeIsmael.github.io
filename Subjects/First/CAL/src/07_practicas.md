# Temario práctico

Las prácticas de ordenador con Maxima, que acompañan al desarrollo teórico. El objetivo
no es aprender un programa: es **usarlo para ver lo que en el papel se demuestra**, y
para hacer los cálculos que a mano no salen.

## Maxima

Un sistema de álgebra por computador libre. Trabaja con **expresiones simbólicas**, no
con números en coma flotante, y esa es la diferencia con una calculadora.

| Elemento | Sintaxis |
| --- | --- |
| Fin de instrucción | `;` muestra el resultado, `$` lo calcula en silencio |
| Asignación | `a : 5;` |
| Definición de función | `f(x) := x^2 + 1;` |
| Referencia a un resultado | `%` el último, `%o3` el tercero |
| Valor numérico | `float(...)`, `bfloat(...)` con más precisión |
| Ayuda | `? nombre` |

```maxima
f(x) := x^3 - 2*x + 1;
solve(f(x) = 0, x);
float(%);
```

**La primera sorpresa** es que `solve` devuelve las raíces exactas, con radicales, y no
números. `float` las convierte. Confundir las dos representaciones es el error de
partida más común, y también la ventaja del programa: mientras se pueda, se trabaja
exacto.

## Práctica 1. Números reales y errores

| Actividad | Órdenes |
| --- | --- |
| Aritmética exacta y aproximada | `1/3;` frente a `float(1/3);` |
| Precisión arbitraria | `fpprec: 50$ bfloat(%pi);` |
| Errores absoluto y relativo | expresiones directas |
| Cancelación catastrófica | evaluar las dos formas del mismo cálculo |

El experimento que fija el tema 1: evaluar $\sqrt{x+1}-\sqrt{x}$ y su forma
racionalizada para $x$ grande, en precisión limitada, y comparar con el valor exacto.

```maxima
fpprec: 6$
x: 1e10$
bfloat(sqrt(x+1) - sqrt(x));
bfloat(1/(sqrt(x+1) + sqrt(x)));
```

Las dos expresiones son iguales en el papel y dan resultados distintos en la máquina.
**Verlo una vez vale más que la explicación.**

## Práctica 2. Sucesiones y series

| Actividad | Órdenes |
| --- | --- |
| Términos de una sucesión | `makelist(a[n], n, 1, 20);` |
| Representar una sucesión | `plot2d([discrete, puntos]);` |
| Límite | `limit(expr, n, inf);` |
| Suma de una serie | `sum(expr, n, 1, inf), simpsum;` |
| Sumas parciales | `sum(expr, n, 1, N);` |

Lo que se pide observar:

- Que las sumas parciales de $\sum 1/n$ **crecen sin límite pero muy despacio**:
  llegar a 10 exige unos 12\,000 términos. La divergencia es real y la gráfica no la
  delata a simple vista, que es por lo que hace falta el criterio.
- Que $\sum 1/n^2$ se estabiliza enseguida en $\pi^2/6$.
- La velocidad de convergencia de una serie alternada, y la cota de Leibniz comprobada
  término a término.

## Práctica 3. Continuidad, derivabilidad y ceros

| Actividad | Órdenes |
| --- | --- |
| Representar una función | `plot2d(f(x), [x, -5, 5]);` |
| Límites laterales | `limit(f(x), x, a, plus);` y `minus` |
| Derivada | `diff(f(x), x);` |
| Extremos | `solve(diff(f(x),x) = 0, x);` |
| Recta tangente | `taylor(f(x), x, a, 1);` |
| Raíces numéricas | `find_root(f(x), x, a, b);` |

Los dos guiones que se programan a mano, porque el objetivo es ver el método y no
usar la caja negra:

```maxima
biseccion(f, a, b, tol) := block([c],
  while (b - a) > tol do (
    c: (a + b)/2,
    if f(a)*f(c) < 0 then b: c else a: c
  ),
  (a + b)/2 )$

newton(f, x0, tol, nmax) := block([x: x0, k: 0, fp: diff(f(x), x)],
  while abs(f(x)) > tol and k < nmax do (
    x: x - f(x)/subst(x, 'x, fp),
    k: k + 1 ),
  [x, k] )$
```

Y lo que se compara: **el número de iteraciones de cada uno** para la misma tolerancia.
Bisección necesita unas 20 para $10^{-6}$ y Newton unas 4, y esa tabla es la
convergencia lineal frente a la cuadrática, medida.

Se pide además provocar los fallos de Newton: un punto inicial donde la derivada casi
se anula, y el caso del ciclo con $f(x)=x^3-2x+2$ desde $x_0=0$. **Un método que falla
enseña más que uno que funciona.**

## Práctica 4. Integración

| Actividad | Órdenes |
| --- | --- |
| Primitiva | `integrate(f(x), x);` |
| Integral definida | `integrate(f(x), x, a, b);` |
| Impropia | `integrate(f(x), x, 1, inf);` |
| Área entre curvas | integrar la diferencia, tras hallar los cortes |
| Volumen de revolución | `%pi*integrate(f(x)^2, x, a, b);` |

Y los métodos numéricos, programados:

```maxima
trapecios(f, a, b, n) := block([h: (b-a)/n, s],
  s: (f(a) + f(b))/2,
  for i: 1 thru n-1 do s: s + f(a + i*h),
  h*s )$
```

El experimento que cierra el tema 4: calcular $\int_0^1 e^{-x^2}dx$, para la que
Maxima devuelve una función de error porque **la primitiva no es elemental**, y
compararla con trapecios y Simpson al aumentar $n$. Se comprueba que el error de
trapecios se divide por 4 al doblar $n$ y el de Simpson por 16, que es $O(h^2)$ frente
a $O(h^4)$ medido.

## Práctica 5. Interpolación

| Actividad | Órdenes |
| --- | --- |
| Polinomio de Taylor | `taylor(f(x), x, 0, 6);` |
| Interpolación de Lagrange | `load(interpol)$ lagrange(puntos);` |
| Splines cúbicos | `cspline(puntos);` |
| Representar juntos | `plot2d([f(x), p(x)], [x, a, b]);` |

Los dos experimentos:

- **Taylor**: dibujar $\sen x$ con sus polinomios de grados 1, 3, 5 y 7 y ver cómo cada
  uno amplía la zona donde la aproximación sirve, sin dejar de fallar lejos del origen.
- **Runge**: interpolar $1/(1+25x^2)$ en $[-1,1]$ con 5, 9 y 15 nodos equiespaciados y
  ver que el error **crece** con el grado, sobre todo cerca de los extremos. Después,
  repetirlo con nodos de Chebyshev y con splines.

El segundo es el que corrige una intuición equivocada, y por eso está en el programa.

## Práctica 6. Sistemas de ecuaciones

| Actividad | Órdenes |
| --- | --- |
| Definir una matriz | `A: matrix([2,1],[1,3]);` |
| Resolver | `linsolve([eq1, eq2], [x,y]);` o `A^^-1 . b` |
| Determinante y rango | `determinant(A);`, `rank(A);` |
| Eliminación por pasos | `echelon(A);`, `triangularize(A);` |
| Autovalores | `eigenvalues(A);` |

Lo que se comprueba:

- Un sistema **mal condicionado**: perturbar el término independiente en $10^{-4}$ y
  ver cómo se mueve la solución. Con las dos rectas dibujadas, la explicación es
  visual: son casi paralelas.
- La **eliminación paso a paso**, con `triangularize`, comparada con la hecha a mano.
- **Jacobi y Gauss-Seidel** programados, contando iteraciones hasta la tolerancia y
  comprobando que Gauss-Seidel necesita menos.

## Sobre las memorias

Lo que se entrega por práctica:

1. Enunciado y planteamiento.
2. Órdenes usadas, con su salida.
3. Gráficas cuando aporten.
4. Interpretación de los resultados.
5. **Comparación con lo que dice la teoría.**

El punto 5 es el que da sentido a la práctica. Una salida de Maxima sin interpretar no
es un resultado; lo que se evalúa es explicar por qué la cota del error se cumple, por
qué Newton no converge desde ese punto, o por qué el polinomio de grado 15 es peor que
el de grado 5.

```{=latex}
\begin{anotacion}
Y la precaución general con cualquier sistema de álgebra por computador: \textbf{no
comprueba las hipótesis por el usuario}. \texttt{integrate} devuelve una primitiva sin
avisar de que la función no era continua en el intervalo, y \texttt{limit} puede
devolver un valor donde el límite no existe. El resultado se contrasta siempre contra
lo que la teoría permite.
\end{anotacion}
```

El material de las prácticas sigue \cite{alaminos2019} para la parte de cálculo y
\cite{burden2004} para la numérica.
