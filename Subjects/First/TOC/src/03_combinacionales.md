# Estudio de sistemas combinacionales

Tema 3 del programa. Qué es un sistema combinacional, cómo se analiza, cómo se diseña
y cuáles son los bloques estándar que se repiten en todos los circuitos.

## Concepto

```{=latex}
\begin{definicion}[Sistema combinacional]
Circuito cuyas salidas dependen únicamente de la combinación de valores presente en
sus entradas, sin memoria de lo ocurrido antes.
\end{definicion}
```

La diferencia con un sistema secuencial es esa: aquí la misma entrada produce siempre
la misma salida. Un sumador es combinacional; un contador no, porque lo que saca
depende de cuántos pulsos ha recibido.

## Álgebra de conmutación

Las tres operaciones y sus símbolos:

| Operación | Notación | Resultado |
| --- | --- | --- |
| Producto lógico | $a \cdot b$ | 1 si los dos son 1 |
| Suma lógica | $a + b$ | 1 si alguno es 1 |
| Complemento | $\bar{a}$ | invierte |

Las propiedades que se usan al simplificar:

| Propiedad | Expresión |
| --- | --- |
| Identidad | $a + 0 = a$, $a \cdot 1 = a$ |
| Elemento nulo | $a + 1 = 1$, $a \cdot 0 = 0$ |
| Idempotencia | $a + a = a$, $a \cdot a = a$ |
| Complemento | $a + \bar{a} = 1$, $a \cdot \bar{a} = 0$ |
| Conmutativa | $a+b = b+a$ |
| Asociativa | $(a+b)+c = a+(b+c)$ |
| Distributiva | $a(b+c) = ab + ac$, y también $a + bc = (a+b)(a+c)$ |
| Absorción | $a + ab = a$, $a(a+b) = a$ |
| **De Morgan** | $\overline{a+b} = \bar{a}\,\bar{b}$, $\overline{ab} = \bar{a}+\bar{b}$ |

La segunda forma de la distributiva no tiene equivalente en el álgebra ordinaria, y es
la que más simplificaciones permite. Y **De Morgan** es la ley práctica del tema: deja
convertir cualquier circuito a puertas de un solo tipo, que es lo que se fabrica.

## Formas canónicas

Una función de conmutación se describe con su tabla de verdad, y de ahí salen dos
expresiones estándar:

| Forma | Cómo se construye | Se llama |
| --- | --- | --- |
| Suma de productos | un mintérmino por cada fila con salida 1 | primera forma canónica |
| Producto de sumas | un maxtérmino por cada fila con salida 0 | segunda forma canónica |

```{=latex}
\begin{ejemplo}
Sea $f(a,b,c)$ que vale 1 en las filas 1, 3, 5 y 6.

\medskip
\begin{tabular}{@{}cccc@{}}
\toprule
$a$ & $b$ & $c$ & $f$ \\
\midrule
0 & 0 & 0 & 0 \\
0 & 0 & 1 & 1 \\
0 & 1 & 0 & 0 \\
0 & 1 & 1 & 1 \\
1 & 0 & 0 & 0 \\
1 & 0 & 1 & 1 \\
1 & 1 & 0 & 1 \\
1 & 1 & 1 & 0 \\
\bottomrule
\end{tabular}

\medskip
Su suma de productos es
$f = \bar{a}\bar{b}c + \bar{a}bc + a\bar{b}c + ab\bar{c}$,
que se abrevia $f = \sum m(1,3,5,6)$.
\end{ejemplo}
```

La forma canónica siempre existe y casi nunca es la mejor: en el ejemplo, los tres
primeros términos se combinan en uno solo, $c$, porque cubren todas las combinaciones
de $a$ y $b$. Simplificar es justo eso.

## Análisis de sistemas combinacionales

Analizar es partir del circuito y obtener qué hace. El procedimiento:

1. Etiquetar las salidas de cada puerta con su expresión.
2. Propagar hasta la salida final.
3. Simplificar la expresión.
4. Construir la tabla de verdad, para describir el comportamiento sin ambigüedad.

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.9, transform shape, >=stealth]
\node (a) at (0,1.4)  {$a$};
\node (b) at (0,0.7)  {$b$};
\node (c) at (0,-0.6) {$c$};
\draw (0.9,0.85) rectangle (2.0,1.55);
\node[font=\scriptsize] at (1.45,1.2) {AND};
\draw (0.9,-0.95) rectangle (2.0,-0.25);
\node[font=\scriptsize] at (1.45,-0.6) {NOT};
\draw (3.0,0.0) rectangle (4.1,1.3);
\node[font=\scriptsize] at (3.55,0.65) {OR};
\draw (a) -- (0.9,1.4);
\draw (b) -- (0.9,1.0);
\draw (c) -- (0.9,-0.6);
\draw (2.0,1.2) -- (3.0,1.1);
\draw (2.0,-0.6) -- (2.5,-0.6) -- (2.5,0.2) -- (3.0,0.2);
\draw (4.1,0.65) -- (5.1,0.65) node[anchor=west] {$f$};
\node[font=\scriptsize, anchor=south] at (2.5,1.15) {$ab$};
\node[font=\scriptsize, anchor=south] at (2.3,-0.55) {$\bar{c}$};
\end{tikzpicture}
\end{center}
```

Para este circuito, $f = ab + \bar{c}$. La tabla de verdad se rellena evaluando las
ocho combinaciones, y con ella el análisis está cerrado.

## Simplificación

### Mapas de Karnaugh

Una tabla de verdad reordenada de forma que **casillas contiguas difieran en un solo
bit**. Esa disposición convierte la simplificación algebraica en un problema visual:
agrupar unos adyacentes.

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.95]
\draw (0,0) grid (4,2);
\node[font=\scriptsize, anchor=south east] at (0,2) {$a \backslash bc$};
\foreach \i/\v in {0/00, 1/01, 2/11, 3/10}
  \node[font=\scriptsize] at (\i+0.5,2.25) {\v};
\node[font=\scriptsize] at (-0.35,1.5) {0};
\node[font=\scriptsize] at (-0.35,0.5) {1};
\node at (0.5,1.5) {0}; \node at (1.5,1.5) {1};
\node at (2.5,1.5) {1}; \node at (3.5,1.5) {0};
\node at (0.5,0.5) {0}; \node at (1.5,0.5) {1};
\node at (2.5,0.5) {1}; \node at (3.5,0.5) {0};
\draw[very thick] (1.05,0.05) rectangle (2.95,1.95);
\node[font=\scriptsize, anchor=west] at (4.3,1.0) {agrupación de 4: $f = c$};
\end{tikzpicture}
\end{center}
```

Las reglas de agrupación:

| Regla | Por qué |
| --- | --- |
| Los grupos son de $2^k$ casillas | solo así desaparecen variables limpiamente |
| Cuanto mayor el grupo, menos variables quedan | un grupo de $2^k$ elimina $k$ variables |
| Los grupos pueden solaparse | cubrir un uno dos veces no cambia la función |
| **El mapa se cierra por los bordes** | la primera columna es adyacente a la última |
| Hay que cubrir todos los unos | si no, la función cambia |

La cuarta regla es la que más agrupaciones se pierde por olvido. El mapa es un toro:
la casilla de arriba a la izquierda y la de abajo a la derecha son adyacentes en un
mapa de cuatro variables.

### Indiferencias

Cuando una combinación de entrada no puede darse, su salida es indiferente y se marca
con $X$. Al agrupar, cada $X$ se toma como 1 si conviene y se ignora si no. Es
gratis y suele simplificar mucho.

```{=latex}
\begin{anotacion}
Aprovechar una indiferencia asigna un valor concreto a esa entrada, y si la
combinación acaba ocurriendo el circuito hace algo. Marcar como indiferente lo que
solo es «poco probable» es un error clásico de diseño.
\end{anotacion}
```

Para más de cuatro o cinco variables el mapa deja de ser manejable y se usa el método
de **Quine-McCluskey**, que hace lo mismo de forma tabular y sistemática, o
directamente una herramienta de síntesis.

## Diseño de sistemas combinacionales

El procedimiento completo:

1. **Especificar** el problema con palabras, sin ambigüedad.
2. Definir entradas y salidas, y **codificarlas** en binario.
3. Construir la **tabla de verdad**.
4. Obtener la expresión y **simplificarla**.
5. **Implementar** con las puertas disponibles.
6. **Verificar** con la tabla de verdad original.

Los dos pasos que se saltan son el 2 y el 6, y son los que más cuestan. La
codificación decide la complejidad del circuito: con la codificación adecuada un
problema sale en tres puertas y con otra en quince.

```{=latex}
\begin{ejemplo}
Un circuito recibe tres bits y saca 1 si hay mayoría de unos. La tabla tiene un 1 en
las filas con dos o tres unos, y la función simplificada es
$$f = ab + ac + bc$$
Tres puertas AND y una OR. Es el circuito de voto por mayoría, base de los sistemas
tolerantes a fallos por triplicación.
\end{ejemplo}
```

### Implementación con un solo tipo de puerta

NAND y NOR son **funcionalmente completas**: con cualquiera de las dos se construye
todo. Es lo que se aprovecha en la fabricación, donde interesa un solo tipo de celda.

| Con NAND | Cómo |
| --- | --- |
| NOT | las dos entradas unidas |
| AND | NAND seguida de NOT |
| OR | De Morgan: $a+b = \overline{\bar{a}\,\bar{b}}$ |

La conversión de una suma de productos a solo NAND es mecánica: se sustituyen todas
las AND y la OR final por NAND, y el resultado es equivalente por De Morgan.

### Riesgos

Un circuito correcto en la tabla de verdad puede producir un pulso espurio al
cambiar la entrada, porque los caminos tienen retardos distintos. Se llama **riesgo**
o azar.

| Tipo | Cuándo | Solución |
| --- | --- | --- |
| Estático | la salida debería quedarse igual y da un pulso | añadir un término redundante |
| Dinámico | la salida cambia y oscila antes de estabilizarse | rediseñar la red |

El término redundante es un grupo del mapa de Karnaugh que solapa dos grupos
adyacentes. Es **lógicamente innecesario y eléctricamente imprescindible**, y es la
razón de que un circuito minimizado no sea siempre el mejor circuito.

En sistemas síncronos el problema desaparece si se espera a que todo se estabilice
antes del flanco de reloj, y esa es una de las razones de que casi todo se diseñe
síncrono.

## Componentes combinacionales estándar

### Codificador y decodificador

| Bloque | Entradas | Salidas | Qué hace |
| --- | --- | --- | --- |
| Decodificador | $n$ | $2^n$ | activa la salida cuyo número indican las entradas |
| Codificador | $2^n$ | $n$ | da el número de la entrada activa |

El decodificador es lo que selecciona un chip de memoria a partir de los bits altos de
la dirección, y lo que activa una línea de la matriz. El codificador **con prioridad**
resuelve el caso de varias entradas activas devolviendo la de mayor prioridad, y es lo
que hay en un controlador de interrupciones.

Además, un decodificador implementa cualquier función: cada salida es un mintérmino,
así que basta una OR de las salidas que valgan 1.

### Multiplexor y demultiplexor

| Bloque | Qué hace |
| --- | --- |
| Multiplexor | selecciona una de $2^n$ entradas según $n$ líneas de selección |
| Demultiplexor | envía una entrada a una de $2^n$ salidas |

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.95, >=stealth]
\draw (0,0) -- (1.5,-0.6) -- (1.5,2.6) -- (0,2.0) -- cycle;
\foreach \i/\v in {0/0, 1/1, 2/2, 3/3} {
  \draw[->] (-1.0,0.35+\i*0.45) -- (0,0.35+\i*0.45);
  \node[font=\scriptsize, anchor=east] at (-1.05,0.35+\i*0.45) {$I_\v$};
}
\draw[->] (1.5,1.0) -- (2.6,1.0) node[anchor=west, font=\scriptsize] {$Y$};
\draw[->] (0.5,-1.3) -- (0.5,-0.75);
\draw[->] (1.0,-1.3) -- (1.0,-0.55);
\node[font=\scriptsize, anchor=north] at (0.75,-1.35) {$S_1 S_0$};
\node[font=\scriptsize] at (0.75,1.0) {MUX};
\end{tikzpicture}
\end{center}
```

El multiplexor es el bloque más versátil del tema. Sirve para tres cosas distintas:

- **Seleccionar** una fuente de datos entre varias, que es su uso obvio.
- **Implementar cualquier función** de $n$ variables con un multiplexor de $n$
  selecciones, conectando cada entrada a 0 o a 1 según la tabla de verdad.
- **Convertir de paralelo a serie**, barriendo las selecciones.

El segundo uso es el que sorprende: un multiplexor de 8 a 1 implementa cualquier
función de tres variables sin una sola puerta.

### Comparador

Compara dos números de $n$ bits y da tres salidas: mayor, igual y menor. La igualdad
se construye con XNOR bit a bit y una AND; el orden, comparando desde el bit más
significativo hacia abajo y quedándose con la primera diferencia.

### Circuitos aritméticos

| Bloque | Entradas | Salidas |
| --- | --- | --- |
| Semisumador | $a$, $b$ | suma $= a \oplus b$, acarreo $= ab$ |
| Sumador completo | $a$, $b$, $c_{in}$ | suma $= a \oplus b \oplus c_{in}$, acarreo |
| Sumador de $n$ bits | dos números | suma y acarreo final |

Encadenando sumadores completos sale el **sumador con propagación de acarreo**, cuyo
retardo crece linealmente con $n$ porque cada etapa espera el acarreo de la anterior.
Con 64 bits eso es demasiado, y la solución es el **sumador con anticipación de
acarreo**, que calcula los acarreos en paralelo a partir de dos señales por bit:

$$g_i = a_i b_i \quad (\text{genera}), \qquad p_i = a_i \oplus b_i \quad (\text{propaga})$$
$$c_{i+1} = g_i + p_i c_i$$

Desarrollando la recurrencia, cada acarreo sale en dos niveles de puertas
independientemente de $n$: se cambia área por velocidad, que es el compromiso típico
del diseño digital.

**Restar** no necesita circuito nuevo: en complemento a 2 se invierten los bits del
segundo operando y se pone el acarreo de entrada a 1. Un sumador con una fila de XOR
gobernada por una señal hace las dos operaciones, y ese es el núcleo de la ALU.

### La unidad aritmético-lógica

Combina el sumador-restador con las operaciones lógicas y un multiplexor que
selecciona el resultado según la operación pedida. Sus salidas de estado —cero,
signo, acarreo y desbordamiento— son las banderas que el tema 5 usa para los saltos
condicionales.

## Ejercicios

```{=latex}
\begin{ejercicio}
Simplificar $f(a,b,c) = \sum m(0,1,2,3,5,7)$ con un mapa de Karnaugh.
\end{ejercicio}

\begin{solucion}
Los mintérminos 0 a 3 son todos los que tienen $a = 0$, así que forman un grupo de
cuatro que da $\bar{a}$. Los mintérminos 1, 3, 5 y 7 son los que tienen $c = 1$, otro
grupo de cuatro que da $c$. Entre los dos cubren todos los unos, así que
$f = \bar{a} + c$: de seis términos de tres variables a una sola puerta OR.
\end{solucion}

\begin{ejercicio}
¿Por qué un circuito minimizado puede presentar riesgos y uno con términos
redundantes no?
\end{ejercicio}

\begin{solucion}
Porque al pasar de un grupo del mapa a otro adyacente hay un instante en que el
primero ya se ha desactivado y el segundo aún no se ha activado, por la diferencia de
retardos, y la salida da un pulso a 0 que no debería existir. Un término redundante
que solape los dos grupos se mantiene activo durante la transición y tapa el hueco.
Es lógicamente superfluo y eléctricamente necesario.
\end{solucion}

\begin{ejercicio}
Implementar $f(a,b,c) = \bar{a}b + ac$ con un multiplexor de 4 a 1 usando $a$ y $b$
como selecciones.
\end{ejercicio}

\begin{solucion}
Se evalúa $f$ para cada combinación de $a$ y $b$ dejando $c$ como variable:
con $ab = 00$, $f = 0$; con $ab = 01$, $f = 1$; con $ab = 10$, $f = c$; con
$ab = 11$, $f = c$. Así que las entradas del multiplexor son $0$, $1$, $c$ y $c$, sin
ninguna puerta adicional.
\end{solucion}
```

El álgebra de conmutación y el diseño combinacional están desarrollados en
\cite{floyd2016}, \cite{mano2005} y \cite{roth2004}, y los bloques estándar en
\cite{lloris2003} y \cite{gajski2004}.
