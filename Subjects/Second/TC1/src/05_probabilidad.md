# Probabilidad

Tema 5 del programa. Definición y asignación de probabilidades, probabilidad
condicionada, sucesos dependientes e independientes, y las fórmulas de la probabilidad
total y de Bayes.

## Experimentos y sucesos

| Concepto | Definición |
| --- | --- |
| Experimento aleatorio | el resultado no se conoce de antemano |
| Espacio muestral $\Omega$ | conjunto de resultados posibles |
| Suceso | subconjunto de $\Omega$ |
| Suceso elemental | un solo resultado |
| Sucesos incompatibles | $A\cap B = \emptyset$ |
| Sistema completo | sucesos incompatibles cuya unión es $\Omega$ |

Las operaciones con sucesos son las de conjuntos, con las leyes de De Morgan incluidas:

$$\overline{A\cup B} = \bar{A}\cap\bar{B}, \qquad \overline{A\cap B} = \bar{A}\cup\bar{B}$$

## Definición y asignación

```{=latex}
\begin{definicion}[Axiomas de Kolmogorov]
Una probabilidad es una función $P$ sobre los sucesos tal que
\begin{itemize}
\item $P(A)\ge 0$ para todo suceso $A$;
\item $P(\Omega) = 1$;
\item si $A$ y $B$ son incompatibles, $P(A\cup B) = P(A)+P(B)$.
\end{itemize}
\end{definicion}
```

De los tres axiomas se deducen las propiedades de uso diario:

| Propiedad | Expresión |
| --- | --- |
| Complementario | $P(\bar{A}) = 1-P(A)$ |
| Suceso imposible | $P(\emptyset) = 0$ |
| Monotonía | si $A\subseteq B$, $P(A)\le P(B)$ |
| Acotación | $0\le P(A)\le 1$ |
| Unión general | $P(A\cup B) = P(A)+P(B)-P(A\cap B)$ |

La regla del complementario es la más rentable: calcular «al menos uno» casi siempre es
más fácil por «ninguno».

### Formas de asignar probabilidades

| Método | Cómo | Cuándo vale |
| --- | --- | --- |
| **Laplace** | casos favorables entre casos posibles | resultados equiprobables |
| **Frecuentista** | límite de la frecuencia relativa | el experimento se puede repetir |
| **Subjetiva** | grado de creencia, coherente con los axiomas | sucesos no repetibles |

```{=latex}
\begin{anotacion}
La regla de Laplace exige equiprobabilidad, y aplicarla sin comprobarla es el error
clásico. Al lanzar dos dados y sumar, los once resultados de 2 a 12 \textbf{no} son
equiprobables: el 7 sale seis veces más que el 2, porque el espacio muestral
equiprobable es el de los 36 pares ordenados, no el de las sumas.
\end{anotacion}
```

## Probabilidad condicionada

```{=latex}
\begin{definicion}
$$P(A\mid B) = \frac{P(A\cap B)}{P(B)}, \qquad P(B) > 0$$
\end{definicion}
```

Condicionar es **reducir el espacio muestral** a $B$ y renormalizar. Es la operación que
formaliza «sabiendo que ha ocurrido $B$».

De la definición sale la **regla del producto**:

$$P(A\cap B) = P(B)\,P(A\mid B) = P(A)\,P(B\mid A)$$

y su generalización en cadena, que es la forma de calcular probabilidades de extracciones
sucesivas sin reposición.

```{=latex}
\begin{ejemplo}
Una urna con 5 bolas blancas y 3 negras. La probabilidad de sacar dos blancas
consecutivas sin reposición es
$$P(B_1\cap B_2) = \frac{5}{8}\cdot\frac{4}{7} = \frac{20}{56} = \frac{5}{14}$$
La segunda fracción es condicionada: tras sacar una blanca quedan 4 blancas de 7 bolas.
\end{ejemplo}
```

## Independencia

```{=latex}
\begin{definicion}
$A$ y $B$ son independientes si
$$P(A\cap B) = P(A)\,P(B)$$
equivalentemente, si $P(A\mid B) = P(A)$ cuando $P(B)>0$.
\end{definicion}
```

| Confusión frecuente | Aclaración |
| --- | --- |
| Independientes = incompatibles | **son cosas opuestas**: si son incompatibles y tienen probabilidad no nula, saber que ocurre uno descarta el otro, luego dependen |
| Independientes dos a dos = independientes | la independencia mutua es más fuerte y exige comprobar también las intersecciones triples |

```{=latex}
\begin{proposicion}
Si $A$ y $B$ son independientes, también lo son $\bar{A}$ y $B$, $A$ y $\bar{B}$, y
$\bar{A}$ y $\bar{B}$.
\end{proposicion}
```

**La independencia se supone o se demuestra, nunca se intuye.** En el lanzamiento
repetido de una moneda es razonable suponerla; entre dos préstamos de la misma región
económica no lo es, y suponerla fue una de las causas técnicas de la crisis financiera
de 2008.

## Probabilidad total y Bayes

```{=latex}
\begin{teorema}[Probabilidad total]
Si $\{A_1,\dots,A_n\}$ es un sistema completo de sucesos con probabilidad no nula,
$$P(B) = \sum_{i=1}^{n} P(A_i)\,P(B\mid A_i)$$
\end{teorema}

\begin{teorema}[Bayes]
Con las mismas hipótesis y $P(B)>0$,
$$P(A_j\mid B) = \frac{P(A_j)\,P(B\mid A_j)}{\sum_{i} P(A_i)\,P(B\mid A_i)}$$
\end{teorema}
```

| Nombre | Papel |
| --- | --- |
| $P(A_i)$ | probabilidades **a priori**: lo que se sabía antes |
| $P(B\mid A_i)$ | verosimilitudes: lo que cada causa predice |
| $P(A_j\mid B)$ | probabilidad **a posteriori**: lo que se cree después de observar |

Bayes es la fórmula que **invierte el condicionamiento**: de la probabilidad del efecto
dada la causa a la de la causa dado el efecto. Es la base del diagnóstico, del filtrado
de correo y de la clasificación automática.

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth, font=\scriptsize, level distance=20mm,
  level 1/.style={sibling distance=26mm}, level 2/.style={sibling distance=13mm}]
\node {}
  child { node {$A_1$}
    child { node {$B$} }
    child { node {$\bar B$} }
    edge from parent node[above left] {$P(A_1)$} }
  child { node {$A_2$}
    child { node {$B$} }
    child { node {$\bar B$} }
    edge from parent node[above right] {$P(A_2)$} };
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{ejemplo}[La trampa de la prueba diagnóstica]
Una enfermedad afecta al 1\,\% de la población. Una prueba detecta al 99\,\% de los
enfermos y da falso positivo en el 5\,\% de los sanos. Si alguien da positivo, ¿qué
probabilidad tiene de estar enfermo?

\medskip
$$P(E\mid +) = \frac{0{,}01\cdot0{,}99}{0{,}01\cdot0{,}99 + 0{,}99\cdot0{,}05}
= \frac{0{,}0099}{0{,}0594} = 0{,}167$$

\medskip
Solo un 16,7\,\%, pese a que la prueba acierta el 99\,\% de las veces en los enfermos. La
razón es que los sanos son cien veces más numerosos, así que sus falsos positivos
—cinco de cada cien— superan con mucho a los verdaderos positivos.
\end{ejemplo}
```

Ese resultado se llama **falacia de la tasa base**, y es el argumento decisivo contra el
cribado masivo de enfermedades poco frecuentes: con prevalencia baja, la mayoría de los
positivos son falsos por buena que sea la prueba.

## Ejercicios

```{=latex}
\begin{ejercicio}
Se lanzan tres monedas. Calcular la probabilidad de obtener al menos una cara.
\end{ejercicio}

\begin{solucion}
Por el complementario: la probabilidad de ninguna cara es $(1/2)^3 = 1/8$, así que la
pedida es $7/8$. Contar directamente los siete casos favorables entre ocho lleva al mismo
sitio con más trabajo, y con cinco monedas la diferencia ya es notable.
\end{solucion}

\begin{ejercicio}
En una empresa, el 60\,\% de los empleados son mujeres y el 30\,\% de las mujeres y el
20\,\% de los hombres tienen titulación superior. Elegido un empleado con titulación
superior, ¿cuál es la probabilidad de que sea mujer?
\end{ejercicio}

\begin{solucion}
Por probabilidad total, $P(T) = 0{,}6\cdot0{,}3 + 0{,}4\cdot0{,}2 = 0{,}18+0{,}08 =
0{,}26$. Y por Bayes,
$$P(M\mid T) = \frac{0{,}18}{0{,}26} = 0{,}692$$
Un 69,2\,\%, superior al 60\,\% de partida porque la titulación es más frecuente entre
las mujeres de esa empresa.
\end{solucion}

\begin{ejercicio}
Dos sucesos con $P(A)=0{,}4$ y $P(B)=0{,}5$ son incompatibles. ¿Son independientes?
\end{ejercicio}

\begin{solucion}
No. Al ser incompatibles, $P(A\cap B)=0$, mientras que
$P(A)P(B) = 0{,}20 \ne 0$. De hecho son fuertemente dependientes: saber que ha ocurrido
$A$ hace imposible $B$. Dos sucesos de probabilidad no nula no pueden ser incompatibles
e independientes a la vez.
\end{solucion}
```

La teoría de la probabilidad está desarrollada en \cite{canavos1989} y
\cite{castillo2006}, con problemas resueltos en \cite{hermoso2000} y \cite{amor2016}.
