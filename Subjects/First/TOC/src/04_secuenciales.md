# Estudio de sistemas secuenciales

Tema 4 del programa. Los circuitos con memoria: biestables, registros, contadores, y
cómo se analiza un sistema secuencial.

## Concepto

```{=latex}
\begin{definicion}[Sistema secuencial]
Circuito cuyas salidas dependen de las entradas actuales y del estado interno, que
resume la historia de entradas anteriores.
\end{definicion}
```

| | Combinacional | Secuencial |
| --- | --- | --- |
| Salida depende de | entradas actuales | entradas y estado |
| Memoria | no | sí |
| Realimentación | no | sí |
| Ejemplo | sumador, multiplexor | contador, registro |

La realimentación es lo que crea la memoria: la salida vuelve a la entrada y el
circuito se sostiene a sí mismo.

### Síncronos y asíncronos

| | Síncrono | Asíncrono |
| --- | --- | --- |
| Cuándo cambia el estado | solo con el reloj | en cuanto cambia una entrada |
| Análisis | manejable | complicado por las carreras |
| Velocidad | la fija el reloj | potencialmente mayor |
| Uso | casi todo | casos concretos |

**Casi todo se diseña síncrono**, y la razón es práctica: con un reloj basta con que
la lógica combinacional se estabilice antes del flanco siguiente, y los pulsos
espurios del tema anterior dejan de importar. En un circuito asíncrono, cualquier
diferencia de retardo entre dos caminos puede llevar a un estado equivocado.

## Modelos

```{=latex}
\begin{center}
\begin{tikzpicture}[
  b/.style={draw, minimum width=25mm, minimum height=10mm, align=center,
            font=\scriptsize},
  >=stealth
]
\node[b] (comb) at (0,0)     {Lógica\\combinacional};
\node[b] (mem)  at (0,-2.0)  {Elementos de\\memoria};
\draw[->] (-3.4,0.3) -- (-1.25,0.3)
      node[midway, above, font=\scriptsize] {entradas};
\draw[->] (1.25,0.3) -- (3.4,0.3)
      node[midway, above, font=\scriptsize] {salidas};
\draw[->] (comb.south) -- node[right, font=\scriptsize] {estado siguiente} (mem.north);
\draw[->] (mem.west) -- (-2.6,-2.0) -- (-2.6,-0.3) -- (-1.25,-0.3);
\node[font=\scriptsize, anchor=east] at (-2.7,-1.1) {estado actual};
\draw[->] (0,-3.3) -- (mem.south) node[midway, right, font=\scriptsize] {reloj};
\end{tikzpicture}
\end{center}
```

| Modelo | La salida depende de | Consecuencia |
| --- | --- | --- |
| Moore | solo del estado | la salida cambia solo con el reloj: es estable |
| Mealy | del estado y de las entradas | reacciona antes, pero puede tener pulsos espurios |

Mealy suele necesitar menos estados para el mismo comportamiento; Moore da salidas
más limpias. La elección se hace por eso, no por gusto.

## Elementos básicos secuenciales

### El biestable RS

Dos puertas NOR realimentadas. Es el elemento de memoria más simple:

| $R$ | $S$ | $Q$ siguiente |
| :-: | :-: | --- |
| 0 | 0 | se mantiene |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 1 | **prohibida** |

La combinación prohibida lo es porque fuerza las dos salidas al mismo valor, y al
volver las entradas a cero el estado final depende de cuál cambie primero. Es una
carrera, y el resultado es impredecible. Todo el diseño posterior de biestables
consiste en eliminar esa combinación.

### Disparo por nivel y por flanco

| Tipo | Cuándo atiende a las entradas |
| --- | --- |
| Cerrojo (*latch*) | mientras la señal de habilitación está activa |
| Biestable por flanco | solo en el instante del flanco |

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.95, >=stealth]
\draw[thick] (0,0) -- (0.8,0) -- (0.8,0.7) -- (1.8,0.7) -- (1.8,0)
             -- (2.8,0) -- (2.8,0.7) -- (3.8,0.7) -- (3.8,0) -- (4.6,0);
\node[font=\scriptsize, anchor=east] at (-0.1,0.35) {reloj};
\draw[->, thick] (0.8,-0.5) -- (0.8,-0.05);
\draw[->, thick] (2.8,-0.5) -- (2.8,-0.05);
\node[font=\scriptsize, anchor=north] at (1.8,-0.55) {flancos de subida};
\draw[<->] (0.8,1.0) -- (1.8,1.0);
\node[font=\scriptsize, anchor=south] at (1.3,1.0) {nivel alto};
\end{tikzpicture}
\end{center}
```

**El disparo por flanco es lo que hace posible el diseño síncrono.** Con cerrojos, el
estado nuevo puede propagarse por varias etapas dentro del mismo nivel activo y
producir una carrera; con flanco, todos los elementos capturan a la vez y en un
instante puntual.

### Tipos de biestable

| Tipo | Entradas | Comportamiento |
| --- | --- | --- |
| D | $D$ | $Q^{+} = D$ |
| JK | $J$, $K$ | mantiene, pone a 1, pone a 0, o **conmuta** con $J=K=1$ |
| T | $T$ | conmuta si $T = 1$ |
| RS síncrono | $R$, $S$ | como el RS, con reloj |

Las ecuaciones características:

$$Q^{+} = D, \qquad Q^{+} = J\bar{Q} + \bar{K}Q, \qquad Q^{+} = T \oplus Q$$

El **D** es el que se usa para registros, porque copia la entrada sin más. El **JK**
elimina la combinación prohibida del RS convirtiéndola en conmutación, y por eso es el
más versátil para contadores. El **T** es un JK con las dos entradas unidas.

### Parámetros temporales

| Parámetro | Qué exige |
| --- | --- |
| Tiempo de establecimiento (*setup*) | la entrada estable **antes** del flanco |
| Tiempo de mantenimiento (*hold*) | la entrada estable **después** del flanco |
| Retardo de propagación | del flanco a la salida válida |

De ahí sale la restricción que fija la frecuencia máxima de cualquier circuito
síncrono:

$$T_{reloj} \ge t_{propagación} + t_{lógica} + t_{setup}$$

El camino combinacional más lento entre dos biestables se llama **camino crítico**, y
es lo único que limita el reloj. Optimizar cualquier otro camino no sube la
frecuencia ni un hercio.

```{=latex}
\begin{anotacion}
Violar el tiempo de establecimiento no produce un valor equivocado sino algo peor: el
biestable puede quedar en \textbf{metaestabilidad}, con la salida a un nivel
intermedio durante un tiempo indeterminado. Es el problema de cruzar señales entre
dos dominios de reloj, y se mitiga con dos biestables en cascada, no se elimina.
\end{anotacion}
```

## Componentes secuenciales estándar

### Registros

Un conjunto de biestables D con el mismo reloj. Guarda una palabra.

| Variante | Qué añade |
| --- | --- |
| Registro con carga | solo carga cuando la señal de habilitación lo permite |
| Registro de desplazamiento | cada biestable alimenta al siguiente |
| Con carga paralela y salida serie | conversión de paralelo a serie |
| Bidireccional | desplaza a izquierda o derecha |

El **registro de desplazamiento** hace tres cosas distintas: convierte entre serie y
paralelo, que es la base de cualquier comunicación; multiplica o divide por dos, ya
que desplazar un bit equivale a eso; y genera secuencias pseudoaleatorias si se
realimenta con XOR.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  ff/.style={draw, minimum width=11mm, minimum height=13mm, font=\scriptsize},
  >=stealth
]
\foreach \i in {0,...,3} \node[ff] (f\i) at (\i*1.7,0) {D \ \ Q};
\draw[->] (-1.2,0) -- (f0.west) node[midway, above, font=\scriptsize] {entrada};
\foreach \i [evaluate=\i as \j using int(\i+1)] in {0,1,2}
  \draw[->] (f\i.east) -- (f\j.west);
\draw[->] (f3.east) -- ++(1.2,0) node[anchor=west, font=\scriptsize] {salida};
\draw (-0.6,-1.2) -- (5.7,-1.2);
\foreach \i in {0,...,3} \draw[->] (\i*1.7,-1.2) -- (f\i.south);
\node[font=\scriptsize, anchor=east] at (-0.65,-1.2) {reloj};
\end{tikzpicture}
\end{center}
```

### Contadores

Recorren una secuencia de estados a cada pulso.

| Clasificación | Tipos |
| --- | --- |
| Por el reloj | asíncronos (en cascada) o síncronos (reloj común) |
| Por el sentido | ascendentes, descendentes o reversibles |
| Por el módulo | binarios de $2^n$, o de módulo arbitrario |

**El contador asíncrono es más simple y peor.** Cada biestable dispara al siguiente,
así que los retardos se acumulan y durante un instante la cuenta pasa por valores que
no existen en la secuencia. Con cuatro etapas de 10 ns, el valor no es fiable hasta
40 ns después del flanco. El síncrono cambia todos a la vez y no tiene ese problema, a
costa de más lógica combinacional.

Un contador de módulo arbitrario se construye detectando el valor final y forzando la
puesta a cero. En síncrono se hace con la carga síncrona, y no con la puesta a cero
asíncrona: esta última produce un pulso muy corto en el estado transitorio.

### Memoria y otros

Una memoria RAM estática es una matriz de celdas biestables con un decodificador que
selecciona la fila y multiplexores que eligen la columna. Es la unión directa de los
bloques de los dos temas.

## Análisis de sistemas secuenciales

Analizar es partir del circuito y obtener qué hace. El procedimiento:

1. Identificar los biestables y sus entradas.
2. Escribir las **ecuaciones de excitación**: la entrada de cada biestable en función
   del estado y de las entradas.
3. Aplicar la ecuación característica para obtener el **estado siguiente**.
4. Construir la **tabla de estados**.
5. Dibujar el **diagrama de estados**.
6. Describir el comportamiento con palabras.

```{=latex}
\begin{ejemplo}
Un circuito con dos biestables D y una entrada $x$ tiene
$D_1 = Q_0$ y $D_0 = x \oplus Q_1$. La tabla de estados sale de sustituir:

\medskip
\begin{tabular}{@{}ccc@{}}
\toprule
$Q_1 Q_0$ & $x=0$ & $x=1$ \\
\midrule
00 & 00 & 01 \\
01 & 10 & 11 \\
10 & 01 & 00 \\
11 & 11 & 10 \\
\bottomrule
\end{tabular}
\end{ejemplo}
```

El diagrama de estados de un detector de secuencia, que es el ejemplo canónico:

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth, node distance=24mm,
  every state/.style={draw, circle, minimum size=11mm, font=\scriptsize},
  auto
]
\node[state] (s0) {$S_0$};
\node[state] (s1) [right of=s0] {$S_1$};
\node[state] (s2) [right of=s1] {$S_2$};
\draw[->] (s0) to[bend left=15] node[font=\scriptsize] {1} (s1);
\draw[->] (s1) to[bend left=15] node[font=\scriptsize] {1} (s2);
\draw[->] (s1) to[bend left=15] node[font=\scriptsize] {0} (s0);
\draw[->] (s2) to[bend left=45] node[font=\scriptsize, below] {0} (s0);
\draw[->] (s0) to[loop above] node[font=\scriptsize] {0} (s0);
\draw[->] (s2) to[loop above] node[font=\scriptsize] {1 / z=1} (s2);
\end{tikzpicture}
\end{center}
```

Detecta tres unos seguidos. Cada estado recuerda cuántos unos consecutivos van, y esa
es la idea general: **el estado codifica lo que hay que recordar del pasado**, y nada
más. Un estado por cada cosa distinta que hay que recordar, ni uno más.

### Diseño

El camino inverso, para completar:

1. Especificar el comportamiento y dibujar el diagrama de estados.
2. **Minimizar estados**: dos estados equivalentes si dan la misma salida y van al
   mismo sitio.
3. **Asignar códigos binarios** a los estados.
4. Elegir el tipo de biestable y construir la tabla de excitación.
5. Simplificar las funciones de excitación y de salida con mapas de Karnaugh.
6. Implementar y verificar.

El paso 3 tiene más peso del que parece. Con una asignación adecuada, la lógica de
excitación sale mucho más simple, y una regla práctica es dar códigos adyacentes a
estados que se suceden. El **código Gray** —donde dos valores consecutivos difieren en
un bit— es la elección habitual, y además evita estados transitorios falsos.

## Ejercicios

```{=latex}
\begin{ejercicio}
¿Por qué la combinación $R = S = 1$ está prohibida en un biestable RS?
\end{ejercicio}

\begin{solucion}
Porque fuerza las dos salidas al mismo valor, rompiendo la relación $\bar{Q}$ que las
define, y sobre todo porque al volver las dos entradas a cero el estado final depende
de cuál cambie antes. Es una carrera: la salida queda a 0 o a 1 según retardos que el
diseño no controla.
\end{solucion}

\begin{ejercicio}
Un contador asíncrono de 4 bits usa biestables con 12 ns de retardo. ¿Cuánto tarda en
estabilizarse una cuenta y qué se observa mientras tanto?
\end{ejercicio}

\begin{solucion}
Hasta $4 \times 12 = 48$ ns, porque cada etapa dispara a la siguiente. Durante ese
intervalo la salida pasa por valores intermedios que no pertenecen a la secuencia: al
pasar de 0111 a 1000 se ven 0110, 0100 y 0000. Si esa salida alimenta un
decodificador, aparecen pulsos espurios en salidas que no deberían activarse nunca.
\end{solucion}

\begin{ejercicio}
Un circuito síncrono tiene $t_{propagación} = 3$ ns, $t_{setup} = 2$ ns y un camino
combinacional máximo de 7 ns. ¿Cuál es su frecuencia máxima?
\end{ejercicio}

\begin{solucion}
$T \ge 3 + 7 + 2 = 12$ ns, así que $f_{máx} = 1/12\ \text{ns} \approx 83$ MHz. Para
subirla hay que acortar el camino crítico, por ejemplo partiéndolo en dos etapas con
un registro entre medias: eso es exactamente la segmentación.
\end{solucion}
```

Los biestables y los componentes secuenciales están desarrollados en
\cite{floyd2016} y \cite{mano2005}, y el análisis y diseño de máquinas de estados en
\cite{roth2004} y \cite{gajski2004}.
