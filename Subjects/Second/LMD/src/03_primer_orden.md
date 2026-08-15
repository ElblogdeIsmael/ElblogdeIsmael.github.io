# Lenguajes de primer orden

Bloque 3 del programa. El lenguaje de primer orden, estructuras y valoraciones,
implicación semántica, equivalencia lógica y formas normales.

## Por qué hace falta

La lógica proposicional no distingue la estructura interna de los enunciados. El
razonamiento «todos los primos mayores que 2 son impares; 7 es primo y mayor que 2;
luego 7 es impar» es válido, y en proposicional serían tres variables sin relación
alguna.

Lo que falta son **cuantificadores y predicados**: hablar de objetos, de sus propiedades
y de las relaciones entre ellos.

## El lenguaje

| Elemento | Papel |
| --- | --- |
| Variables | $x, y, z$: designan objetos |
| Constantes | $a, b, c$: objetos concretos |
| Símbolos de función | $f, g$: construyen objetos a partir de otros |
| Símbolos de predicado | $P, Q$: propiedades y relaciones |
| Cuantificadores | $\forall$, $\exists$ |
| Conectivas | las de proposicional |

Y dos categorías sintácticas que no hay que mezclar:

| Categoría | Qué es | Ejemplo |
| --- | --- | --- |
| **Término** | designa un objeto | $x$, $a$, $f(x,a)$ |
| **Fórmula** | afirma algo | $P(x)$, $\forall x\,(P(x)\to Q(x))$ |

Un término no es verdadero ni falso, y una fórmula no designa un objeto. Confundirlos
produce expresiones sin sentido, del estilo $f(P(x))$.

### Variables libres y ligadas

Una aparición de una variable está **ligada** si cae bajo el alcance de un
cuantificador sobre ella, y **libre** en otro caso. Una fórmula sin variables libres es
una **sentencia**, y solo las sentencias son verdaderas o falsas por sí solas.

```{=latex}
\begin{ejemplo}
En $\forall x\,(P(x)\to Q(x,y))$, la variable $x$ está ligada y la $y$ libre. No es una
sentencia: su verdad depende de qué objeto designe $y$.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
Al sustituir una variable libre por un término hay que evitar la \textbf{captura}: si el
término contiene una variable que quedaría ligada por un cuantificador de la fórmula,
primero se renombra el cuantificador. Sustituir $x$ por $y$ en
$\exists y\,(x \ne y)$ daría $\exists y\,(y\ne y)$, que es falsa siempre, mientras que la
original decía algo razonable.
\end{anotacion}
```

## Estructuras y valoraciones

```{=latex}
\begin{definicion}[Estructura]
Una estructura para un lenguaje consta de un conjunto no vacío $D$, el dominio, y una
interpretación que asigna a cada constante un elemento de $D$, a cada símbolo de
función de aridad $n$ una función $D^n\to D$, y a cada predicado de aridad $n$ una
relación sobre $D^n$.
\end{definicion}
```

La verdad se define por recursión sobre la fórmula, y los dos casos que importan son:

$$\mathcal{A} \models \forall x\,\alpha \iff
\mathcal{A}\models\alpha[x/d] \text{ para todo } d\in D$$
$$\mathcal{A} \models \exists x\,\alpha \iff
\mathcal{A}\models\alpha[x/d] \text{ para algún } d\in D$$

| Clasificación | Definición |
| --- | --- |
| Válida | verdadera en toda estructura |
| Satisfacible | verdadera en alguna |
| Insatisfacible | falsa en todas |
| $\Gamma\models\alpha$ | toda estructura que satisface $\Gamma$ satisface $\alpha$ |

```{=latex}
\begin{ejemplo}
$\forall x\,\exists y\,(x < y)$ es verdadera en $\mathbb{N}$ con el orden usual y falsa
en $\{1,2,3\}$ con el mismo orden. La misma fórmula cambia de valor según la estructura,
que es toda la diferencia con la lógica proposicional.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
\textbf{El orden de los cuantificadores no se puede cambiar.} En $\mathbb{N}$,
$\forall x\,\exists y\,(x<y)$ es verdadera —para cada número hay uno mayor— y
$\exists y\,\forall x\,(x<y)$ es falsa —no hay un número mayor que todos—. Es el error
más frecuente al formalizar, y en informática aparece cada vez que se confunde «para
todo dato existe un algoritmo» con «existe un algoritmo para todo dato».
\end{anotacion}
```

## Equivalencia lógica

| Equivalencia | Expresión |
| --- | --- |
| Negación del universal | $\neg\forall x\,\alpha \equiv \exists x\,\neg\alpha$ |
| Negación del existencial | $\neg\exists x\,\alpha \equiv \forall x\,\neg\alpha$ |
| Distribución del universal | $\forall x(\alpha\wedge\beta)\equiv\forall x\,\alpha\wedge\forall x\,\beta$ |
| Distribución del existencial | $\exists x(\alpha\vee\beta)\equiv\exists x\,\alpha\vee\exists x\,\beta$ |
| Cuantificador vacío | si $x$ no es libre en $\beta$: $\forall x(\alpha\vee\beta)\equiv\forall x\,\alpha\vee\beta$ |
| Conmutación de iguales | $\forall x\forall y \equiv \forall y\forall x$; ídem con $\exists$ |

Las dos primeras son De Morgan generalizado: negar «todos» da «alguno no», y negar
«alguno» da «ninguno».

Y hay dos que **no** son equivalencias, solo implicaciones en un sentido:

$$\forall x\,\alpha \vee \forall x\,\beta \ \Rightarrow\ \forall x(\alpha\vee\beta)$$
$$\exists x(\alpha\wedge\beta) \ \Rightarrow\ \exists x\,\alpha\wedge\exists x\,\beta$$

Los recíprocos fallan. Para el primero, con $\alpha$ «es par» y $\beta$ «es impar» sobre
$\mathbb{N}$: todo número es par o impar, y no es cierto que todos sean pares ni que
todos sean impares.

## Formas normales

### Forma normal prenexa

Todos los cuantificadores delante, seguidos de una matriz sin cuantificadores:

$$Q_1x_1\,Q_2x_2\dots Q_nx_n\ \varphi$$

El procedimiento:

1. Eliminar $\to$ y $\leftrightarrow$.
2. Empujar las negaciones hasta los átomos, negando los cuantificadores al pasar.
3. **Renombrar** las variables ligadas para que no se repitan.
4. Sacar los cuantificadores hacia fuera.

El paso 3 es obligatorio y se olvida. Sin renombrar, sacar cuantificadores captura
variables y cambia el significado de la fórmula.

### Forma de Skolem

Para decidir satisfacibilidad se eliminan los cuantificadores existenciales
sustituyendo su variable por un término nuevo:

| Situación del $\exists y$ | Se sustituye $y$ por |
| --- | --- |
| Sin universales delante | una **constante** nueva |
| Con $\forall x_1\dots\forall x_k$ delante | una **función** nueva $f(x_1,\dots,x_k)$ |

```{=latex}
\begin{teorema}
La forma de Skolem no es lógicamente equivalente a la original, pero es
\textbf{equisatisfacible}: una es satisfacible si y solo si lo es la otra.
\end{teorema}
```

Que la función de Skolem dependa de las variables universales que la preceden es
justamente la asimetría del orden de los cuantificadores. En
$\forall x\exists y\,(x<y)$, el $y$ depende de $x$, y por eso se sustituye por $f(x)$ y
no por una constante.

Después se lleva la matriz a forma clausulada, y el resultado es un conjunto de
cláusulas con variables implícitamente cuantificadas universalmente. **Ese es el formato
de entrada del bloque siguiente.**

```{=latex}
\begin{ejemplo}
$$\forall x\,\big(P(x)\to\exists y\,(Q(y)\wedge R(x,y))\big)$$
Paso 1: $\forall x\,(\neg P(x)\vee\exists y\,(Q(y)\wedge R(x,y)))$.
Prenexa: $\forall x\exists y\,(\neg P(x)\vee(Q(y)\wedge R(x,y)))$.
Skolem, con $y = f(x)$:
$\forall x\,(\neg P(x)\vee(Q(f(x))\wedge R(x,f(x))))$.
Clausulada:
$$\{\neg P(x), Q(f(x))\},\qquad \{\neg P(x), R(x,f(x))\}$$
\end{ejemplo}
```

## Límites

Dos resultados que conviene conocer aunque no se demuestren aquí, porque marcan lo que
la lógica de primer orden puede y no puede hacer:

| Resultado | Qué dice |
| --- | --- |
| Completitud de Gödel | hay un cálculo deductivo que deriva exactamente las fórmulas válidas |
| Indecidibilidad de Church-Turing | no hay algoritmo que decida en general si una fórmula es válida |

La combinación es característica: la validez es **semidecidible**. Un procedimiento
que enumera las demostraciones acaba encontrando la de cualquier fórmula válida, y con
una que no lo sea puede no terminar nunca. Es la razón de que los demostradores
automáticos lleven siempre un límite de tiempo.

## Ejercicios

```{=latex}
\begin{ejercicio}
Formalizar: «todo estudiante que aprueba todas las asignaturas obtiene el título».
\end{ejercicio}

\begin{solucion}
Con $E(x)$ «es estudiante», $A(y)$ «es asignatura», $P(x,y)$ «$x$ aprueba $y$» y
$T(x)$ «$x$ obtiene el título»:
$$\forall x\,\big(E(x)\wedge\forall y\,(A(y)\to P(x,y))\ \to\ T(x)\big)$$
El $\forall y$ va \emph{dentro} del antecedente. Sacarlo fuera cambiaría el sentido y
diría que para toda asignatura ocurre algo, en vez de exigir que se aprueben todas.
\end{solucion}

\begin{ejercicio}
Obtener la forma de Skolem de
$\exists x\,\forall y\,\exists z\,\big(P(x,y)\to Q(y,z)\big)$.
\end{ejercicio}

\begin{solucion}
El $\exists x$ no tiene universales delante, así que $x$ se sustituye por una constante
$a$. El $\exists z$ va detrás de $\forall y$, así que $z$ pasa a $g(y)$. Queda
$$\forall y\,\big(P(a,y)\to Q(y,g(y))\big)$$
y en forma clausulada, $\{\neg P(a,y),\ Q(y,g(y))\}$.
\end{solucion}

\begin{ejercicio}
Dar una estructura donde $\forall x\exists y\,R(x,y)$ sea verdadera y
$\exists y\forall x\,R(x,y)$ falsa.
\end{ejercicio}

\begin{solucion}
Con dominio $\mathbb{N}$ y $R(x,y)$ interpretado como $x<y$: para cada número hay uno
mayor, así que la primera es verdadera; y no existe un número mayor que todos, luego la
segunda es falsa. Cualquier orden sin máximo sirve.
\end{solucion}
```

El desarrollo de los lenguajes de primer orden está en \cite{garciamiranda2017} y
\cite{chang1973}, y sus ejercicios resueltos en \cite{hortala2008}.
