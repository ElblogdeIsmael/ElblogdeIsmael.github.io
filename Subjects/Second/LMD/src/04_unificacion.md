# Unificación y resolución

Bloque 4 del programa. El algoritmo de unificación, el principio de resolución en
primer orden, y las estrategias lineal, lineal-input y lineal-input ordenada.

## Del proposicional al primer orden

La resolución del bloque 2 se aplicaba a cláusulas sin variables. Con variables aparece
un problema nuevo: dos literales pueden ser complementarios **después de sustituir**,
sin serlo antes.

$$P(x) \quad\text{y}\quad \neg P(a)$$

No son complementarios literalmente, y sí lo son sustituyendo $x$ por $a$. Encontrar
esa sustitución es lo que hace la unificación.

## Sustituciones

```{=latex}
\begin{definicion}[Sustitución]
Aplicación finita $\sigma = \{x_1/t_1,\dots,x_n/t_n\}$ que reemplaza cada variable
$x_i$ por el término $t_i$. Se aplica \emph{simultáneamente}, no en cadena.
\end{definicion}
```

Que sea simultánea importa: aplicar $\{x/y,\ y/a\}$ a $P(x,y)$ da $P(y,a)$, y no
$P(a,a)$.

La **composición** $\sigma\theta$ es aplicar primero $\sigma$ y después $\theta$. Es
asociativa y no conmutativa.

```{=latex}
\begin{definicion}[Unificador]
$\sigma$ unifica un conjunto de expresiones si todas se vuelven iguales al aplicarla.
Es un \emph{unificador de máxima generalidad} (umg) si todo otro unificador $\theta$ se
factoriza como $\theta = \sigma\lambda$ para alguna $\lambda$.
\end{definicion}

\begin{teorema}[De unificación]
Si un conjunto de expresiones es unificable, el algoritmo de unificación calcula un
unificador de máxima generalidad, único salvo renombramiento de variables. Si no lo es,
el algoritmo lo detecta y termina.
\end{teorema}
```

**La máxima generalidad es lo que hace correcta a la resolución.** Un unificador
cualquiera podría concretar de más y perder soluciones; el umg sustituye lo mínimo
imprescindible.

## El algoritmo de unificación

Sobre un conjunto $W$ de expresiones, partiendo de $\sigma = \varepsilon$:

1. Si todas las expresiones de $W\sigma$ son iguales, devolver $\sigma$.
2. Localizar el **conjunto de discrepancia**: la primera posición, de izquierda a
   derecha, donde las expresiones difieren.
3. Si en esa posición hay una variable $x$ y un término $t$ con $x$ **no** en $t$,
   componer $\sigma$ con $\{x/t\}$ y volver al paso 1.
4. En cualquier otro caso, el conjunto no es unificable.

### El control de ocurrencia

El paso 3 exige que $x$ no aparezca en $t$. Sin esa comprobación, unificar $x$ con
$f(x)$ produciría la sustitución $\{x/f(x)\}$ y, al aplicarla repetidamente, un término
infinito.

```{=latex}
\begin{anotacion}
Prolog \textbf{omite el control de ocurrencia} por rendimiento: comprobarlo cuesta
tiempo lineal en el tamaño del término y casi nunca hace falta. El precio es que
\texttt{X = f(X)} construye una estructura cíclica y un intento de imprimirla puede no
terminar. Es un caso de corrección sacrificada a propósito, documentado en el estándar.
\end{anotacion}
```

```{=latex}
\begin{ejemplo}
Unificar $P(x,\ f(y),\ b)$ con $P(g(z),\ f(a),\ b)$.

\medskip
Primera discrepancia: $x$ frente a $g(z)$. Como $x$ no está en $g(z)$, se toma
$\{x/g(z)\}$.

\medskip
Las expresiones son ahora $P(g(z), f(y), b)$ y $P(g(z), f(a), b)$. Discrepancia: $y$
frente a $a$, y se añade $\{y/a\}$.

\medskip
Ya coinciden. El umg es $\sigma = \{x/g(z),\ y/a\}$. Nótese que $z$ queda libre: un umg
no concreta lo que no hace falta.
\end{ejemplo}
```

```{=latex}
\begin{ejemplo}
$P(x, x)$ y $P(a, b)$ con $a \ne b$ constantes: la primera discrepancia da $\{x/a\}$, y
entonces las expresiones son $P(a,a)$ y $P(a,b)$, cuya discrepancia enfrenta dos
constantes distintas. **No son unificables.**
\end{ejemplo}
```

## Resolución en primer orden

```{=latex}
\begin{definicion}[Regla de resolución binaria]
Dadas dos cláusulas $C_1 = \{L\}\cup D_1$ y $C_2 = \{\neg M\}\cup D_2$ sin variables en
común, si $\sigma = \umg(L, M)$ existe, la resolvente es
$$(D_1\cup D_2)\sigma$$
\end{definicion}
```

**«Sin variables en común» no es un detalle.** Las variables de una cláusula están
cuantificadas universalmente y son locales a ella, así que hay que renombrar antes de
resolver. Sin renombrar, $P(x)$ y $\neg P(f(x))$ no unificarían por el control de
ocurrencia, cuando en realidad la deducción es correcta.

Hace falta además la **factorización**: si dos literales de la misma cláusula unifican,
se fusionan aplicando su umg. Sin ella la resolución **no es completa**.

```{=latex}
\begin{teorema}[Completitud refutacional]
Un conjunto de cláusulas de primer orden es insatisfacible si y solo si la cláusula
vacía es derivable por resolución con factorización.
\end{teorema}
```

El procedimiento completo para probar $\Gamma\models\alpha$:

1. Negar $\alpha$ y añadirla a $\Gamma$.
2. Llevar todo a forma prenexa, skolemizar y pasar a cláusulas.
3. Renombrar variables para que ninguna cláusula comparta ninguna.
4. Resolver hasta obtener la cláusula vacía.

```{=latex}
\begin{ejemplo}
De «todo hombre es mortal» y «Sócrates es hombre», deducir «Sócrates es mortal».

\medskip
Cláusulas: $\{\neg H(x), M(x)\}$, $\{H(s)\}$, y la conclusión negada $\{\neg M(s)\}$.

\medskip
Resolviendo la primera con la segunda, con $\sigma=\{x/s\}$, sale $\{M(s)\}$; y esa con
la tercera da la cláusula vacía.
\end{ejemplo}
```

## Estrategias

La resolución sin control genera un número enorme de cláusulas irrelevantes. Las
restricciones que se estudian:

| Estrategia | Restricción | ¿Completa? |
| --- | --- | --- |
| Por saturación | ninguna | sí, e inviable |
| Por conjunto soporte | una premisa desciende de la conclusión negada | sí |
| **Lineal** | cada resolvente usa la anterior | sí |
| **Lineal-input** | además, la otra premisa es de entrada | solo para Horn |
| **Lineal-input ordenada** | además, se resuelve sobre el primer literal | solo para Horn |

### Resolución lineal

Se parte de una cláusula inicial y cada paso resuelve la última resolvente con alguna
cláusula del conjunto o con una resolvente anterior. La derivación es una cadena, no un
árbol, y eso permite implementarla con una pila.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth, font=\scriptsize,
  c/.style={draw, minimum width=17mm, minimum height=6mm}
]
\node[c] (c0) at (0,0)    {$C_0$};
\node[c] (c1) at (0,-1.1) {$C_1$};
\node[c] (c2) at (0,-2.2) {$C_2$};
\node[c] (c3) at (0,-3.3) {$\square$};
\node[c] (b1) at (3.2,-0.55) {entrada};
\node[c] (b2) at (3.2,-1.65) {entrada};
\node[c] (b3) at (3.2,-2.75) {entrada};
\draw[->] (c0) -- (c1); \draw[->] (c1) -- (c2); \draw[->] (c2) -- (c3);
\draw[->] (b1) -- (c1); \draw[->] (b2) -- (c2); \draw[->] (b3) -- (c3);
\node[font=\scriptsize, anchor=west, align=left] at (5.0,-1.65)
  {lineal-input: la cadena central\\y cláusulas de entrada};
\end{tikzpicture}
\end{center}
```

### Cláusulas de Horn y Prolog

```{=latex}
\begin{definicion}[Cláusula de Horn]
Cláusula con como mucho un literal positivo.
\end{definicion}
```

| Tipo | Forma | En Prolog |
| --- | --- | --- |
| Hecho | $\{P\}$ | `p.` |
| Regla | $\{P, \neg Q_1,\dots,\neg Q_n\}$ | `p :- q1, ..., qn.` |
| Objetivo | $\{\neg Q_1,\dots,\neg Q_n\}$ | `?- q1, ..., qn.` |

**La resolución lineal-input ordenada es completa exactamente sobre cláusulas de
Horn**, y eso es lo que hace viable a Prolog: su motor recorre las cláusulas del
programa en orden, resuelve siempre sobre el primer literal del objetivo, y retrocede
al fallar.

Las dos consecuencias visibles del diseño:

- **El orden de las cláusulas del programa importa**, aunque lógicamente no debería.
  Una regla recursiva antes que su caso base produce un bucle infinito.
- **La negación es por fallo**, no negación lógica: `\+ p` significa «no se ha podido
  demostrar $p$», que solo coincide con «$p$ es falso» bajo la hipótesis de mundo
  cerrado.

```{=latex}
\begin{anotacion}
Restringirse a Horn tiene precio: no se puede expresar «$p$ o $q$» sin decir cuál. La
disyunción en la cabeza es justo lo que Horn prohíbe, y por eso hay problemas naturales
que Prolog no representa directamente.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Unificar, si es posible, $Q(f(x), g(y))$ con $Q(f(a), g(h(z)))$.
\end{ejercicio}

\begin{solucion}
Primera discrepancia dentro de $f$: $x$ frente a $a$, que da $\{x/a\}$. Segunda, dentro
de $g$: $y$ frente a $h(z)$, y como $y$ no aparece en $h(z)$ se añade $\{y/h(z)\}$. El
umg es $\{x/a,\ y/h(z)\}$, y $z$ queda libre.
\end{solucion}

\begin{ejercicio}
¿Por qué no se pueden unificar $P(x)$ y $P(f(x))$?
\end{ejercicio}

\begin{solucion}
Por el control de ocurrencia: $x$ aparece dentro de $f(x)$, así que la sustitución
$\{x/f(x)\}$ no iguala las dos expresiones sino que las vuelve a separar, generando
$f(f(x))$, $f(f(f(x)))$ y así indefinidamente. No hay ningún término finito que sea
igual a $f$ aplicado a sí mismo.
\end{solucion}

\begin{ejercicio}
Probar por resolución que de «todo el que estudia aprueba» y «alguien estudia» se
deduce «alguien aprueba».
\end{ejercicio}

\begin{solucion}
Cláusulas: $\{\neg E(x), A(x)\}$ de la primera premisa; $\{E(c)\}$ de la segunda, tras
skolemizar el existencial con la constante $c$; y la conclusión negada,
$\neg\exists y\,A(y) \equiv \forall y\,\neg A(y)$, que da $\{\neg A(y)\}$.

\medskip
Resolviendo la primera con la segunda, con $\{x/c\}$, sale $\{A(c)\}$; y con la tercera,
con $\{y/c\}$, la cláusula vacía.
\end{solucion}
```

El algoritmo de unificación y la resolución en primer orden están desarrollados en
\cite{chang1973} y \cite{garciamiranda2017}, con ejercicios resueltos en
\cite{hortala2008} y \cite{paniagua2003}.
