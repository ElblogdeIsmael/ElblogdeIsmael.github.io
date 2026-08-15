# Sistemas en el nivel de transferencia entre registros

Tema 5 del programa. El nivel que une el diseño lógico con la arquitectura: cómo se
describe un computador en términos de registros, transferencias y señales de control,
y cómo se construye la máquina sencilla CS1.

## Introducción y definiciones

El nivel RT describe el sistema como **registros** que guardan información y
**transferencias** entre ellos, gobernadas por señales de control. Es el nivel donde
una instrucción máquina se descompone en pasos elementales.

| Elemento | Qué es |
| --- | --- |
| Registro | almacena una palabra |
| Micro-operación | transferencia elemental entre registros, en un ciclo |
| Señal de control | activa una micro-operación |
| Camino de datos | los registros y las unidades operativas, con sus conexiones |
| Unidad de control | genera las señales de control en el orden adecuado |

La notación:

$$R_1 \leftarrow R_2 \qquad \text{transferir el contenido de } R_2 \text{ a } R_1$$
$$R_3 \leftarrow R_1 + R_2 \qquad \text{sumar y guardar}$$
$$K_1{:}\ R_1 \leftarrow R_2 \qquad \text{condicionada a la señal } K_1$$
$$R_1 \leftarrow R_2,\ R_3 \leftarrow R_4 \qquad \text{simultáneas, en el mismo ciclo}$$

La cuarta forma importa: **las micro-operaciones separadas por coma ocurren a la
vez**, no una tras otra, porque todos los registros capturan en el mismo flanco. Eso
permite intercambiar dos registros en un solo ciclo, algo imposible con asignaciones
secuenciales.

## Unidad de procesamiento

El camino de datos contiene los registros, la unidad aritmético-lógica y los caminos
que los conectan.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  b/.style={draw, minimum width=16mm, minimum height=8mm, font=\scriptsize},
  >=stealth
]
\node[b] (r0) at (0,2.0)  {$R_0$};
\node[b] (r1) at (0,1.0)  {$R_1$};
\node[b] (r2) at (0,0.0)  {$R_2$};
\node[b] (r3) at (0,-1.0) {$R_3$};
\draw[thick] (1.6,-1.6) -- (1.6,2.6);
\draw[thick] (5.6,-1.6) -- (5.6,2.6);
\node[font=\scriptsize, rotate=90, anchor=south] at (1.45,0.5)  {bus A};
\node[font=\scriptsize, rotate=90, anchor=north] at (5.75,0.5)  {bus de resultado};
\foreach \y in {2.0,1.0,0.0,-1.0} \draw[->] (0.8,\y) -- (1.6,\y);
\node[b, minimum width=20mm, minimum height=20mm] (alu) at (3.6,0.5) {ALU};
\draw[->] (1.6,1.2) -- (2.6,1.2);
\draw[->] (1.6,-0.2) -- (2.6,-0.2);
\draw[->] (alu.east) -- (5.6,0.5);
\draw[->] (5.6,2.3) -- (7.0,2.3) -- (7.0,3.1) -- (-1.4,3.1) -- (-1.4,2.0) -- (r0.west);
\node[font=\scriptsize, anchor=south] at (2.8,3.15) {realimentación al banco};
\draw[->] (3.6,-1.9) -- (alu.south)
      node[midway, right, font=\scriptsize] {operación};
\end{tikzpicture}
\end{center}
```

Con una estructura de un bus, una transferencia con operación necesita varios ciclos
porque los dos operandos no pueden circular a la vez. Con dos buses de lectura y uno
de escritura, la operación completa cabe en un ciclo. **La anchura de la estructura de
buses decide cuántos ciclos cuesta cada instrucción**, y es la primera decisión de
diseño del camino de datos.

### Ejemplos de operaciones

| Micro-operación | Qué hace |
| --- | --- |
| $R_1 \leftarrow R_2$ | transferencia |
| $R_1 \leftarrow R_1 + R_2$ | suma acumulada |
| $R_1 \leftarrow R_1 + 1$ | incremento |
| $R_1 \leftarrow \overline{R_2}$ | complemento |
| $R_1 \leftarrow R_1 \wedge R_2$ | AND bit a bit |
| $R_1 \leftarrow \text{desp}_i(R_1)$ | desplazamiento a la izquierda |
| $MAR \leftarrow PC$ | preparar un acceso a memoria |
| $MDR \leftarrow M[MAR]$ | lectura de memoria |
| $M[MAR] \leftarrow MDR$ | escritura en memoria |

Las tres últimas son las que aparecen en todas las instrucciones: **cualquier acceso a
memoria son al menos dos ciclos**, uno para poner la dirección y otro para mover el
dato.

## Unidad de control

Genera las señales que activan las micro-operaciones, en el orden que exige cada
instrucción. Dos formas de construirla:

| Tipo | Cómo | Ventaja | Problema |
| --- | --- | --- | --- |
| **Cableada** | máquina de estados con lógica combinacional | rápida | modificarla exige rediseñar |
| **Microprogramada** | una memoria con una palabra por paso | flexible y ordenada | más lenta |

La cableada es la máquina de estados del tema 4, con un estado por paso del ciclo de
instrucción. La microprogramada guarda en memoria una **microinstrucción** por paso,
con un bit por señal de control, y un contador que las recorre.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  b/.style={draw, minimum width=25mm, minimum height=9mm, align=center,
            font=\scriptsize},
  >=stealth
]
\node[b] (cm) at (0,0)     {Memoria de\\control};
\node[b] (mpc) at (0,-1.8) {$\mu$PC};
\node[b] (reg) at (4.4,0)  {Registro de\\microinstrucción};
\draw[->] (cm) -- (reg);
\draw[->] (mpc.north) -- (cm.south) node[midway, right, font=\scriptsize] {dirección};
\draw[->] (reg.south) |- (2.0,-1.8) -- (mpc.east);
\draw[->] (reg.east) -- (7.2,0)
      node[midway, above, font=\scriptsize] {señales};
\node[font=\scriptsize, anchor=north] at (3.2,-1.85) {secuenciamiento};
\end{tikzpicture}
\end{center}
```

La decisión entre las dos es histórica y explica CISC y RISC: los juegos de
instrucciones complejos se microprogramaron porque cablearlos era inviable, y los
RISC volvieron a la lógica cableada porque su juego regular sí lo permite y es más
rápido.

### Ejemplos de generación de señales

Para la instrucción de carga desde memoria, la secuencia de micro-operaciones y las
señales que cada paso activa:

| Ciclo | Micro-operación | Señales activas |
| --- | --- | --- |
| 1 | $MAR \leftarrow PC$ | salida de PC al bus, carga de MAR |
| 2 | $MDR \leftarrow M[MAR]$, $PC \leftarrow PC+1$ | lectura de memoria, incremento de PC |
| 3 | $IR \leftarrow MDR$ | salida de MDR, carga de IR |
| 4 | $MAR \leftarrow IR_{dir}$ | salida del campo de dirección, carga de MAR |
| 5 | $MDR \leftarrow M[MAR]$ | lectura de memoria |
| 6 | $AC \leftarrow MDR$ | salida de MDR, carga del acumulador |

Los tres primeros ciclos son **iguales para todas las instrucciones**: son la fase de
captación. Los tres últimos son la ejecución, y dependen del código de operación. Esa
separación es la que estructura toda la unidad de control.

Un **salto condicional** añade un elemento más: la señal depende de una bandera del
registro de estado.

$$Z{:}\ PC \leftarrow IR_{dir}$$

Es decir, la transferencia solo ocurre si la bandera de cero está activa. Con eso, la
unidad de control ya sabe tomar decisiones y la máquina es programable en el sentido
completo.

## El computador sencillo CS1

Reuniendo todo lo anterior sale una máquina completa. Sus elementos:

| Elemento | Función |
| --- | --- |
| Memoria | instrucciones y datos, con MAR y MDR como interfaz |
| Acumulador (AC) | operando implícito de las operaciones |
| Contador de programa (PC) | dirección de la instrucción siguiente |
| Registro de instrucción (IR) | instrucción en curso |
| ALU | suma, resta y operaciones lógicas |
| Registro de estado | banderas de cero, signo, acarreo y desbordamiento |
| Unidad de control | genera las señales |

Un juego de instrucciones mínimo pero suficiente:

| Instrucción | Efecto |
| --- | --- |
| `LOAD dir` | $AC \leftarrow M[dir]$ |
| `STORE dir` | $M[dir] \leftarrow AC$ |
| `ADD dir` | $AC \leftarrow AC + M[dir]$ |
| `SUB dir` | $AC \leftarrow AC - M[dir]$ |
| `AND dir` | $AC \leftarrow AC \wedge M[dir]$ |
| `JMP dir` | $PC \leftarrow dir$ |
| `JZ dir` | si $Z$, $PC \leftarrow dir$ |
| `HALT` | detiene la máquina |

Con esas ocho instrucciones se programa cualquier cosa computable, y ese es el punto
del ejemplo: **la potencia de un computador no viene de tener muchas instrucciones**.

```{=latex}
\begin{ejemplo}
Sumar los elementos de un vector de $n$ posiciones a partir de la dirección
\texttt{V}, con el acumulador como única variable, exige modificar la dirección de la
instrucción \texttt{ADD} en cada vuelta. En una máquina sin registro índice eso se
hace \textbf{modificando el propio programa}: se carga la instrucción como si fuera un
dato, se le suma uno y se vuelve a almacenar.

\medskip
Es la consecuencia directa de guardar programa y datos en la misma memoria, y explica
por qué los modos de direccionamiento indexado aparecieron pronto: escribir programas
que se automodifican es correcto y es una pesadilla de depurar.
\end{ejemplo}
```

### El ciclo completo, paso a paso

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth,
  f/.style={draw, minimum width=34mm, minimum height=8mm, align=center,
            font=\scriptsize}
]
\node[f] (c1) at (0,0)    {$MAR \leftarrow PC$};
\node[f] (c2) at (0,-1.1) {$MDR \leftarrow M[MAR]$\\$PC \leftarrow PC+1$};
\node[f] (c3) at (0,-2.4) {$IR \leftarrow MDR$};
\node[f] (c4) at (5.6,-2.4) {decodificar};
\node[f] (c5) at (5.6,-1.1) {ejecutar según\\el código};
\draw[->] (c1) -- (c2); \draw[->] (c2) -- (c3);
\draw[->] (c3) -- (c4); \draw[->] (c4) -- (c5);
\draw[->] (c5.north) -- (5.6,0.9) -- (0,0.9) -- (c1.north);
\node[font=\scriptsize, anchor=south] at (2.8,0.95) {siguiente instrucción};
\draw[dashed] (-2.1,0.55) rectangle (2.1,-2.95);
\node[font=\scriptsize, anchor=east] at (-2.2,-1.2) {captación};
\end{tikzpicture}
\end{center}
```

Ese bucle es lo que hace una máquina, y es literalmente todo lo que hace: captar,
decodificar, ejecutar y repetir. Cada paso son las micro-operaciones de arriba, cada
micro-operación son señales de control, cada señal gobierna registros y multiplexores
del tema 4, y cada registro está hecho de biestables construidos con las puertas del
tema 3.

**Ese recorrido completo, de la puerta lógica al computador, es el objetivo de la
asignatura.**

## Ejercicios

```{=latex}
\begin{ejercicio}
¿Por qué $R_1 \leftarrow R_2,\ R_2 \leftarrow R_1$ intercambia los dos registros y no
deja los dos con el mismo valor?
\end{ejercicio}

\begin{solucion}
Porque las dos transferencias se ejecutan a la vez: los dos registros leen la salida
actual del otro y capturan en el mismo flanco de reloj. Lo que se lee es el valor
anterior al flanco, no el nuevo. En un lenguaje de programación, en cambio, la primera
asignación destruye $R_1$ antes de la segunda y hace falta una variable auxiliar.
\end{solucion}

\begin{ejercicio}
Una máquina tiene un solo bus interno. ¿Cuántos ciclos necesita
$R_3 \leftarrow R_1 + R_2$?
\end{ejercicio}

\begin{solucion}
Tres: uno para llevar $R_1$ a un registro temporal de la ALU, otro para llevar $R_2$
al otro operando y ejecutar la suma, y otro para llevar el resultado a $R_3$. Con dos
buses de lectura y uno de escritura basta un ciclo, porque los dos operandos viajan a
la vez y el resultado tiene su propio camino de vuelta.
\end{solucion}

\begin{ejercicio}
¿Qué ventaja tiene una unidad de control microprogramada frente a una cableada, y qué
se paga por ella?
\end{ejercicio}

\begin{solucion}
Que añadir o modificar una instrucción es reescribir la memoria de control, sin tocar
el circuito, lo que la hace mucho más manejable con juegos de instrucciones grandes.
El precio es velocidad: cada paso exige leer una microinstrucción de la memoria de
control, y eso es más lento que la salida directa de una red combinacional. Por eso
los procesadores RISC volvieron a la lógica cableada.
\end{solucion}
```

El nivel de transferencia entre registros y el diseño de la unidad de control están
desarrollados en \cite{mano2005}, \cite{gajski2004} y \cite{stallings2022}, y su
tratamiento con problemas resueltos en \cite{prieto2010} y \cite{diaz2009}.
