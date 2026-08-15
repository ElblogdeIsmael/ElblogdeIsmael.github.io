# Temario práctico

Las prácticas de ordenador del programa: representación gráfica de funciones de dos
variables, cálculo diferencial, optimización con y sin restricciones, y cálculo
integral.

El objetivo no es aprender un programa: es **ver lo que en el papel se demuestra** y
hacer los cálculos que a mano no salen. Las órdenes de abajo son de Maxima, que es el
sistema libre habitual en estas asignaturas; la traducción a cualquier otro es
inmediata.

## Práctica 1. Representación gráfica de funciones de dos variables

| Actividad | Órdenes |
| --- | --- |
| Superficie | `plot3d(f(x,y), [x,-2,2], [y,-2,2]);` |
| Curvas de nivel | `contour_plot(f(x,y), [x,-2,2], [y,-2,2]);` |
| Recinto del plano | `implicit_plot(g(x,y)=0, ...);` |
| Varias curvas de nivel | opción `[gnuplot_preamble, "set cntrparam levels 10"]` |

Lo que se pide observar:

- La **superficie y sus curvas de nivel a la vez**, para ver que las curvas son los
  cortes horizontales proyectados.
- Cómo las curvas de nivel se **aprietan donde la función crece deprisa**, que es la
  lectura del módulo del gradiente en un mapa topográfico.
- Las Cobb-Douglas y sus isocuantas hiperbólicas, comparando exponentes que suman menos
  de uno, uno y más de uno.
- Un **punto de silla**: en $x^2-y^2$, la superficie sube en una dirección y baja en la
  perpendicular, y las curvas de nivel son hipérbolas que cambian de rama al cruzar el
  origen.

## Práctica 2. Cálculo diferencial

| Actividad | Órdenes |
| --- | --- |
| Derivada parcial | `diff(f(x,y), x);` |
| Gradiente | `load(vect)$ express(grad(f));` |
| Hessiana | `hessian(f, [x,y]);` |
| Regla de la cadena | `diff(subst([x=g(t), y=h(t)], f), t);` |
| Derivación implícita | `diff(F(x,y), x)/diff(F(x,y), y);` con el signo |
| Taylor | `taylor(f(x,y), [x,y], [a,b], 2);` |

Los dos experimentos que fijan el tema 3:

- **Comprobar Schwarz** calculando las dos cruzadas de varias funciones, y buscar el
  contraejemplo clásico donde fallan porque no son continuas. Ver que la excepción
  existe y dónde está la hipótesis.
- **Medir el error de la aproximación lineal**: comparar $f(\mathbf{a}+\Delta)$ con la
  aproximación de primer y de segundo orden para incrementos cada vez mayores, y
  comprobar que el error de la lineal crece con el cuadrado del incremento y el de la
  cuadrática con el cubo.

```maxima
f: 10*K^0.4 * L^0.6$
gradiente: [diff(f,K), diff(f,L)]$
subst([K=100, L=100], gradiente);
```

## Práctica 3. Optimización sin restricciones

| Actividad | Órdenes |
| --- | --- |
| Puntos críticos | `solve([diff(f,x)=0, diff(f,y)=0], [x,y]);` |
| Hessiana en un punto | `subst([x=a, y=b], hessian(f,[x,y]));` |
| Clasificarla | `eigenvalues(H);` o los menores con `determinant` |
| Comprobación visual | `contour_plot` alrededor del punto |

El guion que se programa:

```maxima
clasifica(f, [x,y]) := block([H, d1, d2],
  H: hessian(f, [x,y]),
  d1: H[1][1],
  d2: determinant(H),
  if d2 < 0 then "silla"
  elseif d2 > 0 and d1 > 0 then "minimo"
  elseif d2 > 0 and d1 < 0 then "maximo"
  else "no decide" )$
```

Lo que se comprueba, y es la lección de la práctica: **los casos en que devuelve «no
decide»**. Con $x^4+y^4$ y con $x^4-y^4$ el guion se rinde en el origen, y hay que
resolverlo mirando la función. Un criterio automático tiene un límite, y saber cuál es
forma parte de usarlo.

Se pide además dibujar las curvas de nivel alrededor de cada punto crítico: en un
mínimo son óvalos concéntricos, y en una silla son hipérbolas que cambian de rama. **La
gráfica confirma la clasificación sin fiarse del determinante.**

## Práctica 4. Optimización con restricciones

| Actividad | Órdenes |
| --- | --- |
| Lagrangiano | `L: f - lambda*(g - b)$` |
| Sistema | `solve([diff(L,x)=0, diff(L,y)=0, diff(L,lambda)=0], [x,y,lambda]);` |
| Evaluar candidatos | `subst(sol, f);` |
| Visualizar la tangencia | curvas de nivel de $f$ más la restricción |

El experimento visual es el que da sentido al método: dibujar varias curvas de nivel de
$f$ y encima la restricción, y ver que **en el óptimo son tangentes**. En cualquier otro
punto de la restricción se cortan, y eso significa que moviéndose por ella se llega a un
nivel mejor.

Y el experimento numérico que verifica el teorema del sobre:

1. Resolver el problema con el término independiente $b$.
2. Resolverlo con $b + \varepsilon$ para un $\varepsilon$ pequeño.
3. Comprobar que $\big(V(b+\varepsilon)-V(b)\big)/\varepsilon \approx \lambda$.

```{=latex}
\begin{anotacion}
\texttt{solve} devuelve \textbf{todas} las soluciones del sistema, incluidas las que no
son extremos y las complejas. Hay que filtrarlas: descartar las que no cumplen el
dominio del problema —cantidades negativas, por ejemplo— y evaluar la función objetivo en
las que quedan. Aceptar la primera solución que devuelve el programa es el error más
frecuente de esta práctica.
\end{anotacion}
```

## Práctica 5. Cálculo integral

| Actividad | Órdenes |
| --- | --- |
| Integral iterada | `integrate(integrate(f, y, y1, y2), x, a, b);` |
| Área de un recinto | integrar la función constante 1 |
| Valor medio | la integral dividida por el área |
| Dibujar el recinto | `implicit_plot` de las curvas que lo limitan |

Lo que se pide comprobar:

- **El cambio de orden de integración** sobre el mismo recinto: los dos órdenes dan el
  mismo número, y uno de los dos puede ser incalculable. El caso de $e^{y^2}$ es el
  ejemplo estándar.
- **El área como comprobación de los límites**: si integrar 1 no da el área que se ve en
  el dibujo, los límites están mal, y eso se detecta antes de calcular nada más.
- **Recuperar una función a partir de sus parciales**, comprobando primero la condición
  de Schwarz.

## Sobre las memorias

Lo que se entrega por práctica:

1. Enunciado y planteamiento matemático.
2. Órdenes usadas, con su salida.
3. Gráficas cuando aporten, y comentadas.
4. Interpretación **económica** del resultado, no solo el número.
5. Comparación con lo que dice la teoría.

Los puntos 4 y 5 son los que se evalúan. Un multiplicador de Lagrange sin decir qué
recurso mide y cuánto conviene pagar por él no es una respuesta; y una clasificación de
un punto crítico sin comprobar si el óptimo es global está a medias.

```{=latex}
\begin{anotacion}
Y la precaución general: \textbf{el programa no comprueba las hipótesis}. Devuelve un
punto crítico sin mirar si el dominio es abierto, aplica Lagrange sin verificar la
regularidad, y da una integral sin avisar de que la función no era continua en el
recinto. El resultado se contrasta siempre contra lo que la teoría permite.
\end{anotacion}
```

El material de las prácticas sigue \cite{cabello2019} y \cite{alvarez2020} para el
cálculo, y \cite{barbolla2006} para la optimización.
