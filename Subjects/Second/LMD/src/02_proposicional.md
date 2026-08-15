# Lógica proposicional

Bloque 2 del programa. El lenguaje proposicional, la implicación semántica y sus
propiedades, la forma clausulada de una fórmula, y los algoritmos de Davis-Putnam y de
resolución.

## El lenguaje

| Elemento | Qué es |
| --- | --- |
| Variables proposicionales | $p, q, r, \dots$ |
| Conectivas | $\neg,\ \wedge,\ \vee,\ \to,\ \leftrightarrow$ |
| Fórmulas | lo que generan las reglas de formación |

Las reglas de formación son recursivas: toda variable es fórmula; si $\alpha$ es
fórmula, $\neg\alpha$ lo es; y si $\alpha$ y $\beta$ lo son, también
$(\alpha\wedge\beta)$, $(\alpha\vee\beta)$, $(\alpha\to\beta)$ y
$(\alpha\leftrightarrow\beta)$.

La precedencia habitual, de mayor a menor: $\neg$, $\wedge$, $\vee$, $\to$,
$\leftrightarrow$. La implicación **asocia por la derecha**, así que
$p\to q\to r$ significa $p\to(q\to r)$, que no es lo mismo que $(p\to q)\to r$.

### Semántica

Una **valoración** asigna un valor de verdad a cada variable, y se extiende a las
fórmulas por las tablas de las conectivas.

| $p$ | $q$ | $p\wedge q$ | $p\vee q$ | $p\to q$ | $p\leftrightarrow q$ |
| :-: | :-: | :-: | :-: | :-: | :-: |
| 0 | 0 | 0 | 0 | **1** | 1 |
| 0 | 1 | 0 | 1 | **1** | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 |
| 1 | 1 | 1 | 1 | 1 | 1 |

La columna de la implicación es la que choca: **con antecedente falso la implicación es
verdadera**. La justificación operativa es que $p\to q$ solo afirma que no ocurre $p$
sin $q$, y eso es exactamente $\neg p \vee q$.

| Clasificación | Definición |
| --- | --- |
| Tautología | verdadera con toda valoración |
| Contradicción | falsa con toda valoración |
| Satisfacible | verdadera con alguna |
| Contingente | ni tautología ni contradicción |

## Implicación semántica

```{=latex}
\begin{definicion}[Consecuencia lógica]
$\Gamma \models \alpha$ si toda valoración que hace verdaderas todas las fórmulas de
$\Gamma$ hace verdadera $\alpha$.
\end{definicion}

\begin{teorema}[De la deducción]
$\Gamma \cup \{\alpha\} \models \beta$ si y solo si $\Gamma \models \alpha\to\beta$.
\end{teorema}

\begin{teorema}[Refutación]
$\Gamma \models \alpha$ si y solo si $\Gamma \cup \{\neg\alpha\}$ es insatisfacible.
\end{teorema}
```

**El teorema de refutación es el que hace mecanizable la lógica**: convierte «probar
que algo se sigue» en «probar que algo es contradictorio», y esto último tiene
algoritmos. Es lo que hacen Davis-Putnam y la resolución.

| Propiedad | Enunciado |
| --- | --- |
| Reflexividad | $\Gamma\models\alpha$ si $\alpha\in\Gamma$ |
| Monotonía | si $\Gamma\models\alpha$ y $\Gamma\subseteq\Delta$, entonces $\Delta\models\alpha$ |
| Transitividad | si $\Gamma\models\alpha$ y $\Delta\cup\{\alpha\}\models\beta$, entonces $\Gamma\cup\Delta\models\beta$ |

La **monotonía** merece un comentario: añadir premisas nunca invalida una conclusión.
Es lo que distingue la lógica clásica del razonamiento cotidiano, donde información
nueva sí puede hacer retirar una conclusión, y de ahí que existan lógicas no monótonas
para representar el sentido común.

### Equivalencias útiles

| Equivalencia | Expresión |
| --- | --- |
| Implicación | $p\to q \equiv \neg p\vee q$ |
| Contrapositiva | $p\to q \equiv \neg q\to\neg p$ |
| Bicondicional | $p\leftrightarrow q \equiv (p\to q)\wedge(q\to p)$ |
| De Morgan | $\neg(p\wedge q)\equiv \neg p\vee\neg q$ |
| Distributiva | $p\vee(q\wedge r)\equiv(p\vee q)\wedge(p\vee r)$ |
| Absorción | $p\vee(p\wedge q)\equiv p$ |

La contrapositiva es correcta y **el recíproco no lo es**: de $p\to q$ no se sigue
$q\to p$. Confundirlos es la falacia más común, y en las demostraciones se traduce en
probar lo contrario de lo pedido.

## Forma normal conjuntiva y clausulada

```{=latex}
\begin{definicion}
Un \emph{literal} es una variable o su negación. Una \emph{cláusula} es una disyunción
de literales. Una fórmula está en forma normal conjuntiva si es una conjunción de
cláusulas.
\end{definicion}

\begin{teorema}
Toda fórmula proposicional es lógicamente equivalente a una en forma normal conjuntiva.
\end{teorema}
```

El procedimiento para obtenerla:

1. Eliminar $\leftrightarrow$ y $\to$ con las equivalencias.
2. Empujar las negaciones hacia dentro con De Morgan hasta que solo afecten a
   variables.
3. Distribuir $\vee$ sobre $\wedge$.
4. Simplificar: quitar literales repetidos y cláusulas con un literal y su negación.

```{=latex}
\begin{ejemplo}
$$\neg(p\to q)\vee(r\wedge\neg p)$$
Paso 1: $\neg(\neg p\vee q)\vee(r\wedge\neg p)$.
Paso 2: $(p\wedge\neg q)\vee(r\wedge\neg p)$.
Paso 3, distribuyendo:
$$(p\vee r)\wedge(p\vee\neg p)\wedge(\neg q\vee r)\wedge(\neg q\vee\neg p)$$
Paso 4: la segunda cláusula es una tautología y se elimina. El conjunto clausulado es
$$\{\,\{p,r\},\ \{\neg q,r\},\ \{\neg q,\neg p\}\,\}$$
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
El paso 3 puede hacer crecer la fórmula \textbf{exponencialmente}. Cuando solo importa
la satisfacibilidad y no la equivalencia, se usa la transformación de Tseitin, que
introduce variables auxiliares para nombrar subfórmulas y produce una forma clausulada
de tamaño lineal, equisatisfacible aunque no equivalente. Es lo que hace todo resolutor
SAT real.
\end{anotacion}
```

## El algoritmo de Davis-Putnam

Decide si un conjunto de cláusulas es satisfacible. Sobre un conjunto $S$:

| Regla | Cuándo se aplica | Qué hace |
| --- | --- | --- |
| Cláusula unitaria | hay una cláusula con un solo literal $L$ | $L$ debe ser cierto: se propaga |
| Literal puro | un literal aparece siempre con el mismo signo | se pone a cierto y se borran sus cláusulas |
| División | ninguna de las anteriores | se prueba $p$ y $\neg p$ por separado |

Y dos condiciones de parada: si $S$ queda **vacío**, es satisfacible; si contiene la
**cláusula vacía**, es insatisfacible, porque una disyunción sin literales no puede ser
cierta.

```{=latex}
\begin{ejemplo}
$S = \{\{p,q\},\ \{\neg p, r\},\ \{\neg q, r\},\ \{\neg r\}\}$.

\medskip
La cláusula $\{\neg r\}$ es unitaria: $r$ es falso. Propagando, $\{\neg p, r\}$ pasa a
$\{\neg p\}$ y $\{\neg q, r\}$ a $\{\neg q\}$. Ahora $\{\neg p\}$ es unitaria: $p$ es
falso, y $\{p,q\}$ pasa a $\{q\}$. Pero $\{\neg q\}$ obliga a $q$ falso y $\{q\}$ a $q$
cierto: se produce la cláusula vacía. \textbf{El conjunto es insatisfacible.}
\end{ejemplo}
```

La **propagación unitaria** es la regla que más trabajo ahorra, y sigue siendo el
corazón de los resolutores modernos, que son descendientes directos de este algoritmo.

## Resolución

Una única regla de inferencia:

$$\frac{\{L\}\cup C_1 \qquad \{\neg L\}\cup C_2}{C_1\cup C_2}$$

Es decir: de dos cláusulas con un literal complementario se deduce la unión del resto.

```{=latex}
\begin{teorema}[Corrección y completitud refutacional]
La resolución es correcta: toda resolvente es consecuencia de sus premisas. Y es
refutacionalmente completa: un conjunto de cláusulas es insatisfacible si y solo si la
cláusula vacía es derivable por resolución.
\end{teorema}
```

**Completa para refutar y no para deducir**: la resolución no genera todas las
consecuencias de un conjunto, solo detecta la contradicción. Con el teorema de
refutación eso basta, y por eso para probar $\Gamma\models\alpha$ se resuelve sobre
$\Gamma\cup\{\neg\alpha\}$.

```{=latex}
\begin{ejemplo}
Probar que de $p\to q$ y $q\to r$ se sigue $p\to r$.

\medskip
Se niega la conclusión y se pasa todo a cláusulas:
$$\{\neg p, q\},\quad \{\neg q, r\},\quad \{p\},\quad \{\neg r\}$$
Resolviendo $\{p\}$ con $\{\neg p,q\}$ sale $\{q\}$; con $\{\neg q,r\}$ sale $\{r\}$; y
con $\{\neg r\}$ sale la cláusula vacía. Queda probado.
\end{ejemplo}
```

### Estrategias

La resolución sin control genera muchísimas cláusulas inútiles. Las restricciones
habituales:

| Estrategia | Restricción |
| --- | --- |
| Lineal | cada resolvente usa la anterior como una de sus premisas |
| Lineal-input | además, la otra premisa es una cláusula de entrada |
| Unitaria | una de las dos premisas es unitaria |
| Por conjunto soporte | al menos una premisa desciende de la conclusión negada |

**Lineal-input es completa solo para cláusulas de Horn**, es decir, con como mucho un
literal positivo. Esa restricción es exactamente la que define Prolog, y es lo que hace
que su motor de inferencia sea eficiente. El precio es que no todo se puede expresar en
Horn.

## Ejercicios

```{=latex}
\begin{ejercicio}
¿Es $((p\to q)\to p)\to p$ una tautología?
\end{ejercicio}

\begin{solucion}
Sí, es la ley de Peirce. Si $p$ es verdadera, la implicación exterior tiene consecuente
verdadero y es cierta. Si $p$ es falsa, entonces $p\to q$ es verdadera, luego
$(p\to q)\to p$ es falsa, y una implicación con antecedente falso es cierta. En los dos
casos la fórmula vale 1.
\end{solucion}

\begin{ejercicio}
Llevar $(p\leftrightarrow q)\to r$ a forma clausulada.
\end{ejercicio}

\begin{solucion}
El bicondicional es $(p\to q)\wedge(q\to p) \equiv (\neg p\vee q)\wedge(\neg q\vee p)$.
La implicación exterior da
$\neg[(\neg p\vee q)\wedge(\neg q\vee p)]\vee r$, y por De Morgan
$(p\wedge\neg q)\vee(q\wedge\neg p)\vee r$. Distribuyendo:
$$\{p,q,r\},\quad \{p,\neg p,r\},\quad \{\neg q,q,r\},\quad \{\neg q,\neg p,r\}$$
Las dos centrales son tautologías y se eliminan, así que quedan
$\{p,q,r\}$ y $\{\neg p,\neg q,r\}$.
\end{solucion}

\begin{ejercicio}
Comprobar por resolución si $\{\,\{p,q\},\{\neg p,q\},\{p,\neg q\},\{\neg p,\neg q\}\,\}$
es satisfacible.
\end{ejercicio}

\begin{solucion}
Resolviendo la primera con la segunda sobre $p$ sale $\{q\}$; la tercera con la cuarta
sale $\{\neg q\}$; y esas dos entre sí dan la cláusula vacía. Es insatisfacible, como
era de esperar: las cuatro cláusulas descartan las cuatro valoraciones posibles de dos
variables.
\end{solucion}
```

El desarrollo de la lógica proposicional está en \cite{garciamiranda2017} y
\cite{paniagua2003}, la resolución en \cite{chang1973}, y los ejercicios resueltos en
\cite{hortala2008}.
