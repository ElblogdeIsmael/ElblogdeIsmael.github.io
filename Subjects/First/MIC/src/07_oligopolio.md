# La competencia monopolística y el oligopolio

Capítulo 7 del programa. Los dos modelos intermedios entre la competencia perfecta y el
monopolio.

## Panorama

| Estructura | Empresas | Producto | Barreras | Poder de mercado |
| --- | --- | --- | --- | --- |
| Competencia perfecta | muchas | homogéneo | ninguna | nulo |
| Competencia monopolística | muchas | **diferenciado** | bajas | pequeño |
| Oligopolio | pocas | homogéneo o diferenciado | altas | alto |
| Monopolio | una | sin sustitutivos | muy altas | máximo |

## La competencia monopolística

Muchas empresas que venden productos **diferenciados**: cada una tiene una demanda con
pendiente negativa, porque sus clientes prefieren su versión, pero la entrada es libre.

| A corto plazo | A largo plazo |
| --- | --- |
| Se comporta como un monopolista pequeño | la entrada erosiona el beneficio |
| $IMg = CMg$, con $P > CMg$ | $P = CMe$, beneficio nulo |
| Puede haber beneficios | la demanda se desplaza hasta ser tangente al $CMe$ |

```{=latex}
\begin{proposicion}[Equilibrio a largo plazo]
La curva de demanda de la empresa es tangente a su curva de coste medio, así que
$$P = CMe > CMg$$
y la empresa produce por debajo del mínimo de su coste medio.
\end{proposicion}
```

De ahí las dos ineficiencias del modelo:

| Ineficiencia | En qué consiste |
| --- | --- |
| Asignativa | $P > CMg$: hay unidades valoradas por encima de su coste que no se producen |
| **Exceso de capacidad** | la empresa no alcanza la escala mínima eficiente |

```{=latex}
\begin{anotacion}
El exceso de capacidad es el precio de la variedad. Con menos marcas, cada una produciría
en su escala eficiente y el coste unitario sería menor; a cambio, los consumidores
tendrían menos donde elegir. Si la variedad compensa la ineficiencia \textbf{no es una
pregunta que el modelo responda}, porque exige valorar el beneficio de la diversidad.
\end{anotacion}
```

## El oligopolio

Pocas empresas, y de ahí el rasgo que lo define: **la interdependencia estratégica**.
Lo que le conviene a una depende de lo que hagan las demás, así que no basta con
maximizar: hay que anticipar.

Por eso no existe un modelo único de oligopolio, sino varios según qué se suponga.

### Cournot: competencia en cantidades

Cada empresa elige su cantidad tomando como dada la de la rival. La **función de reacción**
da la mejor respuesta a cada cantidad ajena, y el equilibrio es el punto donde se cortan.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=7.4cm, height=5.8cm, axis lines=left,
  xlabel={$q_1$}, ylabel={$q_2$},
  xmin=0, xmax=7, ymin=0, ymax=7,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\addplot[thick, domain=0:6] {3 - 0.5*x};
\addplot[thick, domain=0:6] {6 - 2*x};
\addplot[only marks, mark=*, mark size=1.4pt] coordinates {(2,2)};
\node[font=\scriptsize, anchor=west] at (axis cs:2.2,2.3) {Cournot};
\node[font=\scriptsize, anchor=west] at (axis cs:4.4,1.05) {$R_2(q_1)$};
\node[font=\scriptsize, anchor=west] at (axis cs:0.15,5.4) {$R_1(q_2)$};
\end{axis}
\end{tikzpicture}
\end{center}
```

Con demanda $P = a-bQ$ y coste marginal $c$ constante e igual para las dos:

$$q_1^{*} = q_2^{*} = \frac{a-c}{3b}, \qquad
Q^{*} = \frac{2(a-c)}{3b}, \qquad P^{*} = \frac{a+2c}{3}$$

**El resultado queda entre el monopolio y la competencia**, y con $n$ empresas tiende al
competitivo:

$$Q_n = \frac{n}{n+1}\cdot\frac{a-c}{b} \ \xrightarrow[n\to\infty]{}\ \frac{a-c}{b}$$

### Bertrand: competencia en precios

Con producto homogéneo y capacidad suficiente, cada empresa puede quedarse con todo el
mercado bajando un céntimo el precio de la rival. El único equilibrio es

$$P_1 = P_2 = CMg$$

**Dos empresas bastan para el resultado competitivo.** Es la paradoja de Bertrand, y su
contraste con Cournot muestra que **la variable estratégica importa tanto como el número
de empresas**.

Las salidas de la paradoja son las que se observan en la realidad: capacidad limitada,
producto diferenciado y competencia repetida en el tiempo.

### Stackelberg: liderazgo

Una empresa decide primero y la otra responde. El líder anticipa la función de reacción
del seguidor y la incorpora a su decisión.

$$q_L = \frac{a-c}{2b}, \qquad q_S = \frac{a-c}{4b}$$

El líder produce el doble y gana más: es la **ventaja del primer movimiento**, y depende
de que su decisión sea irreversible y observable. Un compromiso que se puede deshacer no
es un compromiso.

### Colusión

Si las empresas se coordinan, actúan como un monopolista y reparten el beneficio máximo.
Pero el acuerdo es **inestable**: a cada una le conviene producir más de lo pactado
mientras las demás cumplen.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\scriptsize]
\node at (0,1.7) {Empresa 2};
\node at (1.3,1.15) {coopera};
\node at (3.1,1.15) {desvía};
\node[rotate=90] at (-2.35,-0.55) {Empresa 1};
\node at (-1.35,0.25) {coopera};
\node at (-1.35,-1.35) {desvía};
\draw (0.4,-0.4) rectangle (2.2,0.9);
\draw (2.2,-0.4) rectangle (4.0,0.9);
\draw (0.4,-1.9) rectangle (2.2,-0.4);
\draw (2.2,-1.9) rectangle (4.0,-0.4);
\node at (1.3,0.25) {$(10,\,10)$};
\node at (3.1,0.25) {$(2,\,14)$};
\node at (1.3,-1.15) {$(14,\,2)$};
\node at (3.1,-1.15) {$(5,\,5)$};
\end{tikzpicture}
\end{center}
```

Es el **dilema del prisionero**: desviarse es la estrategia dominante de las dos, y el
equilibrio $(5,5)$ es peor para ambas que la cooperación $(10,10)$. Explica por qué los
cárteles se rompen, y por qué necesitan mecanismos de vigilancia y castigo para durar.

En interacción **repetida** la cooperación puede sostenerse: la amenaza creíble de
castigar en el futuro compensa la ganancia de desviarse hoy. Es lo que hace que la
política de competencia vigile especialmente los mercados concentrados y estables.

## Comparación

| Modelo | Variable estratégica | Resultado |
| --- | --- | --- |
| Colusión | conjunta | precio de monopolio |
| Stackelberg | cantidad, secuencial | intermedio, con ventaja del líder |
| Cournot | cantidad, simultánea | intermedio |
| Bertrand | precio, simultánea | precio competitivo |

**Ordenados por precio, de mayor a menor.** Que modelos tan parecidos den resultados tan
distintos es la lección del capítulo: en oligopolio, los detalles del juego determinan el
resultado.

## Ejercicios

```{=latex}
\begin{ejercicio}
Dos empresas con $CMg = 20$ compiten en cantidades sobre la demanda $P = 140 - Q$.
Hallar el equilibrio de Cournot y compararlo con el monopolio y la competencia.
\end{ejercicio}

\begin{solucion}
Con $a=140$, $b=1$ y $c=20$:
$$q_1 = q_2 = \frac{120}{3} = 40, \qquad Q = 80, \qquad P = 60$$
Cada una gana $40\cdot(60-20) = 1600$.

\medskip
Monopolio: $IMg = 140-2Q = 20$ da $Q=60$ y $P=80$, con beneficio 3600. Competencia:
$P=20$ y $Q=120$.

\medskip
El duopolio de Cournot queda en medio, y el beneficio conjunto (3200) es menor que el de
monopolio: ahí está el incentivo a coludir.
\end{solucion}

\begin{ejercicio}
¿Por qué el modelo de Bertrand con producto homogéneo da el resultado competitivo con
solo dos empresas?
\end{ejercicio}

\begin{solucion}
Porque con producto homogéneo el comprador va siempre al más barato, así que bajar el
precio un céntimo por debajo de la rival captura todo el mercado. Cualquier precio por
encima del coste marginal invita a que la otra lo subcotice, y el único par de precios
sin incentivo a desviarse es $P_1=P_2=CMg$. El supuesto que sostiene el resultado es que
las dos pueden atender todo el mercado.
\end{solucion}

\begin{ejercicio}
En el dilema del prisionero de la figura, ¿cuál es el equilibrio y por qué no es el mejor
resultado conjunto?
\end{ejercicio}

\begin{solucion}
Desviarse es dominante para las dos: contra «coopera» da 14 frente a 10, y contra
«desvía» da 5 frente a 2. El equilibrio es (desvía, desvía) con pagos $(5,5)$, peor para
ambas que $(10,10)$.

\medskip
No es alcanzable en un juego de una sola vez porque el acuerdo no es exigible: cada una
tiene incentivo a incumplirlo. Con interacción repetida y castigo creíble sí puede
sostenerse.
\end{solucion}
```

La competencia monopolística y el oligopolio están desarrollados en \cite{pindyck2018}
y \cite{frank2009}, con la exposición introductoria de \cite{krugman2013}.
