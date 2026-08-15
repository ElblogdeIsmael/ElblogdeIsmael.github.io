# Unidades funcionales de un computador

Tema 2 del programa. El procesador, la memoria, los periféricos, cómo se conectan y
qué parámetros miden lo que rinde el conjunto.

## El procesador

Ejecuta instrucciones. Sus partes:

| Parte | Función |
| --- | --- |
| Unidad de control | decodifica la instrucción y genera las señales de mando |
| Unidad aritmético-lógica | opera sobre los datos |
| Banco de registros | almacenamiento rápido de trabajo |
| Registros de estado | banderas del resultado y modo de ejecución |

### Registros

| Registro | Contiene |
| --- | --- |
| Contador de programa (PC) | dirección de la instrucción siguiente |
| Registro de instrucción (IR) | la instrucción en curso |
| Registro de dirección de memoria (MAR) | dirección del acceso en curso |
| Registro de datos de memoria (MDR) | dato leído o por escribir |
| Acumulador y registros generales | operandos y resultados |
| Registro de estado | acarreo, cero, signo, desbordamiento |

MAR y MDR son la interfaz con la memoria y aparecerán en cada micro-operación del
tema 5: **todo acceso a memoria pasa por esos dos registros**, y por eso una lectura
son siempre dos pasos, poner la dirección y recoger el dato.

### El ciclo de instrucción

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth,
  f/.style={draw, minimum width=25mm, minimum height=8.5mm, align=center,
            font=\scriptsize}
]
\node[f] (c) at (0,0)    {Captación\\\texttt{IR} $\leftarrow$ M[PC]};
\node[f] (d) at (3.4,0)  {Decodificación};
\node[f] (o) at (6.8,0)  {Búsqueda de\\operandos};
\node[f] (e) at (10.2,0) {Ejecución y\\escritura};
\draw[->] (c) -- (d); \draw[->] (d) -- (o); \draw[->] (o) -- (e);
\draw[->] (e.south) -- ++(0,-0.8) -- ++(-10.2,0) -- (c.south);
\node[font=\scriptsize, anchor=north] at (5.1,-0.85) {y vuelta a empezar};
\end{tikzpicture}
\end{center}
```

Al final de la captación el contador de programa ya apunta a la instrucción siguiente.
Ese incremento anticipado es lo que hace que un salto se implemente simplemente
escribiendo un valor nuevo en el PC.

### El juego de instrucciones

| Grupo | Ejemplos |
| --- | --- |
| Transferencia | cargar, almacenar, mover |
| Aritméticas | sumar, restar, multiplicar |
| Lógicas | AND, OR, NOT, desplazamientos |
| Control | saltos incondicionales y condicionales, llamadas |
| Entrada y salida | leer y escribir puertos |

Una instrucción tiene **código de operación** y **operandos**, y la forma de nombrar
los operandos se llama modo de direccionamiento:

| Modo | Dónde está el operando |
| --- | --- |
| Inmediato | en la propia instrucción |
| Directo | en la dirección que indica la instrucción |
| Indirecto | en la dirección que hay en esa dirección |
| De registro | en un registro |
| Indexado | en base más desplazamiento |
| Relativo al PC | a una distancia de la instrucción actual |

El **indexado** es el que permite recorrer un vector: la base fija el comienzo y el
índice avanza. Y el **relativo al PC** es el que hace que un programa funcione esté
cargado donde esté, porque los saltos no citan direcciones absolutas.

### CISC y RISC

| | CISC | RISC |
| --- | --- | --- |
| Número de instrucciones | muchas | pocas |
| Longitud | variable | fija |
| Acceso a memoria | desde muchas instrucciones | solo carga y almacenamiento |
| Ciclos por instrucción | variable | uno, con segmentación |
| Complejidad | en el hardware | en el compilador |

La distinción histórica se ha difuminado: los procesadores actuales tienen juego CISC
por compatibilidad y por dentro traducen a micro-operaciones de tipo RISC. Pero la
idea de fondo sigue viva, y es que **un juego regular es más fácil de segmentar**.

## La memoria

Un conjunto de posiciones numeradas. Los parámetros que la caracterizan:

| Parámetro | Qué mide |
| --- | --- |
| Capacidad | cuántos bits guarda |
| Tiempo de acceso | desde la petición hasta el dato |
| Tiempo de ciclo | mínimo entre dos accesos consecutivos |
| Ancho de banda | bits por segundo |
| Coste por bit | lo que cuesta la capacidad |
| Volatilidad | si pierde el contenido al apagar |

### Tipos

| Tipo | Escritura | Volátil | Uso |
| --- | --- | --- | --- |
| SRAM | sí | sí | caché; rápida y cara |
| DRAM | sí | sí, y necesita refresco | memoria principal |
| ROM | no | no | arranque |
| Flash | por bloques | no | almacenamiento |

La **DRAM guarda cada bit en un condensador que se descarga**, así que hay que
reescribirlo periódicamente. Ese refresco consume ciclos y es la razón de que sea más
lenta que la SRAM, que usa biestables y no necesita refresco pero gasta seis
transistores por bit en vez de uno.

### La jerarquía

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\scriptsize]
\draw (0,0) -- (7.2,0) -- (5.4,1.1) -- (1.8,1.1) -- cycle;
\draw (1.8,1.1) -- (5.4,1.1) -- (4.5,2.2) -- (2.7,2.2) -- cycle;
\draw (2.7,2.2) -- (4.5,2.2) -- (4.05,3.0) -- (3.15,3.0) -- cycle;
\draw (3.15,3.0) -- (4.05,3.0) -- (3.8,3.7) -- (3.4,3.7) -- cycle;
\node at (3.6,0.5)  {Disco};
\node at (3.6,1.6)  {Memoria principal};
\node at (3.6,2.55) {Caché};
\node at (3.6,3.3)  {Reg.};
\draw[->, >=stealth] (8.1,0.2) -- (8.1,3.5);
\node[anchor=west, align=left] at (8.2,1.9) {más rápida\\más cara\\menos capacidad};
\end{tikzpicture}
\end{center}
```

| Nivel | Acceso | Capacidad típica |
| --- | --- | --- |
| Registros | menos de 1 ns | cientos de bytes |
| Caché L1 | 1 a 2 ns | decenas de kilobytes |
| Caché L2 y L3 | 5 a 20 ns | de cientos de kilobytes a decenas de megabytes |
| Memoria principal | 50 a 100 ns | gigabytes |
| Disco | microsegundos o milisegundos | terabytes |

La jerarquía funciona por el **principio de localidad**: temporal, porque lo usado
recientemente se vuelve a usar; y espacial, porque se accede a posiciones cercanas.
Los dos son observaciones empíricas sobre cómo son los programas reales, no teoremas,
y por eso un programa que los viole —un recorrido aleatorio de un vector enorme— no
aprovecha la caché.

El tiempo medio de acceso con dos niveles:

$$t_{medio} = t_{caché} + (1 - h)\,t_{penalización}$$

con $h$ la tasa de aciertos. La fórmula explica por qué la tasa importa tanto: con
$t_{caché} = 2$ ns y penalización de 100 ns, pasar de $h = 0{,}95$ a $h = 0{,}99$
baja el tiempo medio de 7 ns a 3 ns, más del doble de velocidad por cuatro puntos de
acierto.

## Periféricos y entrada/salida

| Clase | Ejemplos |
| --- | --- |
| Entrada | teclado, ratón, sensores, escáner |
| Salida | pantalla, impresora, altavoces |
| Almacenamiento | disco, SSD, memorias extraíbles |
| Comunicación | tarjeta de red, módem |

Un **controlador** adapta el periférico al bus, y hace tres cosas: convierte el
formato, sincroniza velocidades muy distintas y detecta errores.

Las tres técnicas de gobierno, ya vistas en su lógica:

| Técnica | Quién copia los datos | Coste |
| --- | --- | --- |
| E/S programada | el procesador, consultando | lo ocupa entero |
| Por interrupciones | el procesador, avisado | una interrupción por transferencia |
| Acceso directo a memoria | el controlador de DMA | una interrupción por bloque |

## Estructuras de interconexión

| Estructura | Cómo | Ventaja | Problema |
| --- | --- | --- | --- |
| Bus único | todos comparten las mismas líneas | simple y barata | se convierte en cuello de botella |
| Buses jerárquicos | uno rápido cerca del procesador y otros lentos | separa velocidades | necesita puentes |
| Punto a punto | enlaces dedicados | máximo ancho de banda | más líneas y más coste |
| Conmutada | una matriz conecta pares | muchas transferencias simultáneas | cara |

En un bus compartido hace falta **arbitraje**, porque solo un maestro puede transmitir
a la vez. Puede ser centralizado, con un árbitro que concede el bus, o distribuido,
con las unidades poniéndose de acuerdo.

La evolución real ha ido del bus único a los enlaces punto a punto, y la causa es
física: a frecuencias altas, un bus paralelo compartido sufre desajustes entre líneas
que impiden subir la velocidad. Por eso los buses modernos son serie y diferenciales,
lo contrario de lo que la intuición sugiere.

## Un computador sencillo a nivel de bloques

Con lo anterior ya se puede dibujar una máquina completa, que es la que el tema 5
detalla:

```{=latex}
\begin{center}
\begin{tikzpicture}[
  b/.style={draw, minimum width=20mm, minimum height=9mm, align=center,
            font=\scriptsize},
  >=stealth
]
\node[b] (uc)  at (0,1.5)   {Unidad de\\control};
\node[b] (alu) at (0,0)     {ALU};
\node[b] (reg) at (0,-1.5)  {Registros};
\node[b] (mem) at (5.5,0.7) {Memoria};
\node[b] (es)  at (5.5,-1.0){E/S};
\draw[thick] (2.6,-2.2) -- (2.6,2.4);
\node[font=\scriptsize, rotate=90, anchor=south] at (2.45,0.1) {bus};
\foreach \y in {1.5,0,-1.5} \draw[<->] (1.0,\y) -- (2.6,\y);
\draw[<->] (mem.west) -- (2.6,0.7);
\draw[<->] (es.west) -- (2.6,-1.0);
\node[font=\scriptsize, anchor=south] at (0,2.15) {procesador};
\draw[dashed] (-1.4,-2.2) rectangle (1.4,2.1);
\end{tikzpicture}
\end{center}
```

Su funcionamiento es el ciclo de instrucción del principio, y sus señales de control
son lo que el tema 5 genera.

## Prestaciones

Cómo se mide lo que rinde una máquina, y por qué casi todas las medidas fáciles
engañan.

| Parámetro | Definición |
| --- | --- |
| Frecuencia de reloj $f$ | ciclos por segundo |
| Periodo $T$ | $1/f$ |
| CPI | ciclos por instrucción, en media |
| MIPS | millones de instrucciones por segundo |
| Tiempo de ejecución | lo único que importa de verdad |

$$T_{ejecución} = \frac{N_{instrucciones} \times \text{CPI}}{f}$$

La ecuación tiene tres factores y los tres se pueden tocar:

| Factor | Depende de |
| --- | --- |
| Número de instrucciones | el algoritmo, el compilador y el juego de instrucciones |
| CPI | la organización del procesador |
| Frecuencia | la tecnología de fabricación |

```{=latex}
\begin{anotacion}
\textbf{Comparar máquinas por MIPS es engañoso}, porque una instrucción de un juego no
hace el mismo trabajo que una de otro. Un procesador con instrucciones muy simples
ejecuta más por segundo y puede tardar más en el mismo programa. La única comparación
válida es el tiempo de ejecución sobre el mismo programa.
\end{anotacion}
```

### La ley de Amdahl

Si se mejora una parte que ocupa una fracción $p$ del tiempo, con un factor $k$:

$$S = \frac{1}{(1-p) + \dfrac{p}{k}}$$

| $p$ | $k$ | Ganancia total |
| ---: | ---: | ---: |
| 0,5 | 2 | 1,33 |
| 0,5 | $\infty$ | 2 |
| 0,9 | 10 | 5,26 |
| 0,9 | $\infty$ | 10 |

La lectura importa: **la parte que no se mejora pone un techo**. Con el 10 % del
tiempo fuera de la mejora, la ganancia máxima es 10 aunque el resto se haga infinitamente
rápido. Es el argumento que gobierna cualquier decisión de optimización, y el que dice
que hay que medir antes de optimizar.

## Ejercicios

```{=latex}
\begin{ejercicio}
Un procesador a 2 GHz ejecuta un programa de $10^9$ instrucciones con CPI medio 1,5.
¿Cuánto tarda?
\end{ejercicio}

\begin{solucion}
$T = (10^9 \times 1{,}5)/(2\times 10^9) = 0{,}75$ segundos. Su tasa es de 1333 MIPS,
cifra que no sirve para compararlo con un procesador de otro juego de instrucciones:
para eso hay que ejecutar el mismo programa en los dos y medir segundos.
\end{solucion}

\begin{ejercicio}
Una caché tiene tiempo de acceso 2 ns y la memoria principal 80 ns. ¿Qué tasa de
aciertos hace falta para que el tiempo medio no pase de 5 ns?
\end{ejercicio}

\begin{solucion}
$2 + (1-h)\cdot 80 \le 5$, de donde $(1-h) \le 0{,}0375$ y $h \ge 0{,}9625$, es decir un 96,25\,\%. Es una
exigencia alta y sin embargo habitual: las cachés reales superan el 95\,\% gracias al
principio de localidad, y por eso funcionan.
\end{solucion}

\begin{ejercicio}
Un programa dedica el 25\,\% del tiempo a una rutina. Se optimiza para que sea cuatro
veces más rápida. ¿Cuánto gana el programa entero?
\end{ejercicio}

\begin{solucion}
$S = 1/(0{,}75 + 0{,}25/4) = 1/0{,}8125 = 1{,}23$: un 23\,\% de mejora. Aunque la
rutina se hiciese instantánea, el techo sería $1/0{,}75 = 1{,}33$. Optimizar donde no
está el tiempo produce ganancias pequeñas por muy espectacular que sea la mejora
local.
\end{solucion}
```

La organización de las unidades funcionales y el análisis de prestaciones están en
\cite{stallings2022} y \cite{hamacher2003}, y su tratamiento con problemas en
\cite{prieto2010} y \cite{diaz2009}.
