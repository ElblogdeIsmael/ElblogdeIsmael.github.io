# Fundamentos de electrónica digital

Tema 5 del programa. Cómo se representa un valor lógico con una tensión, qué
parámetros describen una familia lógica y cómo se construye una puerta con
transistores.

## De la tensión al bit

Un circuito digital trabaja con dos estados, pero las tensiones son continuas. La
solución es asignar **rangos**:

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.95]
\draw[thick] (0,0) rectangle (2.2,5.2);
\fill[black!10] (0,4.0) rectangle (2.2,5.2);
\fill[black!25] (0,1.6) rectangle (2.2,4.0);
\fill[black!10] (0,0)   rectangle (2.2,1.6);
\draw (0,4.0) -- (2.2,4.0);
\draw (0,1.6) -- (2.2,1.6);
\node[font=\small] at (1.1,4.6) {'1' válido};
\node[font=\small] at (1.1,2.8) {prohibida};
\node[font=\small] at (1.1,0.8) {'0' válido};
\node[font=\scriptsize, anchor=west] at (2.4,5.2) {$V_{DD}$};
\node[font=\scriptsize, anchor=west] at (2.4,4.0) {$V_{IH}$};
\node[font=\scriptsize, anchor=west] at (2.4,1.6) {$V_{IL}$};
\node[font=\scriptsize, anchor=west] at (2.4,0)   {$0$};
\end{tikzpicture}
\end{center}
```

| Parámetro | Qué es |
| --- | --- |
| $V_{OH}$ | tensión mínima que la salida garantiza para un '1' |
| $V_{OL}$ | tensión máxima que la salida garantiza para un '0' |
| $V_{IH}$ | tensión mínima que la entrada reconoce como '1' |
| $V_{IL}$ | tensión máxima que la entrada reconoce como '0' |

Y de ahí el parámetro que hace robusta la lógica digital, el **margen de ruido**:

$$NM_H = V_{OH} - V_{IH}, \qquad NM_L = V_{IL} - V_{OL}$$

Es cuánto ruido puede sumarse a una señal sin que deje de interpretarse bien. La
existencia de ese margen es la razón de que un sistema digital sea fiable donde
uno analógico se degrada: el ruido por debajo del margen **desaparece** al pasar
por la puerta siguiente, en vez de acumularse etapa tras etapa.

## Parámetros de una familia lógica

| Parámetro | Definición | Se quiere |
| --- | --- | --- |
| Margen de ruido | ver arriba | grande |
| Retardo de propagación $t_p$ | de la entrada al 50 % de la salida | pequeño |
| Consumo estático | potencia en reposo | nulo |
| Consumo dinámico | potencia al conmutar | pequeño |
| Fan-out | cuántas entradas puede atacar una salida | grande |
| Fan-in | cuántas entradas tiene la puerta | según el diseño |
| Producto retardo-potencia | $t_p \cdot P$ | pequeño: es la figura de mérito |

El producto retardo-potencia es lo que permite comparar familias, porque casi
siempre se puede cambiar velocidad por consumo y al revés.

## Familias lógicas

| Familia | Tecnología | Consumo estático | Velocidad | Estado |
| --- | --- | --- | --- | --- |
| RTL, DTL | resistencias y diodos | alto | baja | histórica |
| TTL | bipolar | apreciable | media | histórica |
| ECL | bipolar sin saturar | muy alto | muy alta | nichos |
| NMOS | solo transistores N | apreciable | media | superada |
| **CMOS** | N y P complementarios | **casi nulo** | alta | la vigente |

La columna del consumo estático explica el resultado. En NMOS hay siempre un
camino resistivo entre alimentación y tierra en uno de los dos estados, y con
millones de puertas eso es insostenible. CMOS no lo tiene.

## Lógica CMOS

La idea: **dos redes complementarias**. Una de transistores P entre la
alimentación y la salida, y otra de N entre la salida y tierra, construidas de
forma que en cada combinación de entradas conduzca exactamente una.

### El inversor

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.9, transform shape]
% PMOS arriba, NMOS abajo, ambos con la puerta hacia la izquierda.
\draw (2,3.0) node[pmos](P){};
\draw (2,0.6) node[nmos](N){};

% Alimentacion y tierra
\draw (P.source) -- (2,3.9) node[anchor=south, font=\small] {$V_{DD}$};
\draw (N.source) -- (2,-0.3) node[ground]{};

% Salida: union de los dos drenadores
\draw (P.drain) -- (N.drain);
\draw (2,1.8) node[circ]{} -- (3.6,1.8)
      node[anchor=west, font=\small] {$\overline{A}$};

% Entrada: las dos puertas unidas
\draw (P.gate) -- (0.6,3.0);
\draw (N.gate) -- (0.6,0.6);
\draw (0.6,3.0) -- (0.6,0.6);
\draw (0.6,1.8) node[circ]{} -- (-0.4,1.8)
      node[anchor=east, font=\small] {$A$};
\end{circuitikz}
\end{center}
```

| $A$ | PMOS | NMOS | Salida |
| :-: | --- | --- | :-: |
| 0 | conduce | corte | 1 |
| 1 | corte | conduce | 0 |

En los dos estados **uno de los dos está cortado**, así que no circula corriente
de la alimentación a tierra. De ahí que el consumo estático sea prácticamente
nulo: solo las corrientes de fuga.

### Reglas de construcción

Para cualquier función:

- La red N implementa la función complementada: **serie es AND, paralelo es OR**.
- La red P es su dual: serie es OR, paralelo es AND.
- La salida está **siempre** negada. Una puerta CMOS natural es NAND o NOR, no AND
  ni OR.

Una NAND de dos entradas son dos N en serie y dos P en paralelo. Una AND se
construye como NAND seguida de inversor, así que cuesta **más** transistores que
la NAND: en CMOS, negar es gratis y no negar es caro. Es lo contrario de la
intuición del álgebra de Boole, y explica por qué los circuitos reales están
llenos de NAND y NOR.

| Puerta | Transistores |
| --- | ---: |
| Inversor | 2 |
| NAND o NOR de 2 entradas | 4 |
| AND u OR de 2 entradas | 6 |
| XOR de 2 entradas | 8 a 12 |

## Consumo

$$P = \underbrace{\alpha\,C_L\,V_{DD}^2\,f}_{\text{dinámico}}
    + \underbrace{I_{corto}\,V_{DD}}_{\text{cortocircuito}}
    + \underbrace{I_{fuga}\,V_{DD}}_{\text{estático}}$$

| Término | De dónde sale |
| --- | --- |
| Dinámico | cargar y descargar la capacidad de salida en cada conmutación |
| Cortocircuito | el instante de la transición en que los dos conducen |
| Fuga | corriente que atraviesa el transistor cortado |

El dinámico domina, y su dependencia **cuadrática con la tensión** es el resultado
que ha gobernado el diseño de circuitos integrados durante décadas: bajar la
tensión de alimentación de 5 V a 1 V divide el consumo por 25.

Esa es también la conexión con Arquitectura de Computadores: cuando la tensión
dejó de poder bajar —porque las corrientes de fuga crecían— la frecuencia dejó de
poder subir, y la industria pasó a los procesadores multinúcleo.

## Retardo y capacidad

El retardo de una puerta es el tiempo que tarda en cargar la capacidad que ve a la
salida, y esa capacidad es la de las puertas que alimenta:

$$t_p \approx \frac{C_L\,V_{DD}}{2\,I_{D}}$$

De ahí tres consecuencias prácticas:

- **El fan-out afecta a la velocidad.** Más entradas conectadas es más capacidad,
  y por tanto más retardo. No es un límite abrupto sino una degradación.
- **Una pista larga es capacidad.** En un circuito integrado moderno, el retardo de
  las interconexiones supera al de los transistores.
- **Un camino con muchas puertas en serie limita la frecuencia.** El más lento se
  llama camino crítico, y es lo que fija el periodo de reloj.

## Circuitos combinacionales y secuenciales

| | Combinacional | Secuencial |
| --- | --- | --- |
| La salida depende de | solo de las entradas actuales | también del estado |
| Tiene memoria | no | sí |
| Ejemplos | multiplexor, sumador, decodificador | biestable, registro, contador |

Un **biestable** se construye con dos inversores realimentados: cada uno mantiene
la entrada del otro, así que el par tiene dos estados estables. Es la celda de
memoria estática, y es lo que hay dentro de una caché.

En un sistema síncrono, los biestables se actualizan con el flanco del reloj y la
lógica combinacional entre ellos tiene que estabilizarse antes del flanco
siguiente:

$$T_{reloj} \ge t_{clk\to Q} + t_{lógica} + t_{setup}$$

Esa desigualdad es la que define la frecuencia máxima de un circuito digital, y
resume por qué este tema termina donde empiezan Estructura de Computadores y
Arquitectura de Computadores. El desarrollo de las familias lógicas y de CMOS está
en \cite{sedra2020}, \cite{padilla2024b} y \cite{hambley2001}.
