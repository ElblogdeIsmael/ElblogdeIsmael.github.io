# Fundamentos de teoría de circuitos. Corriente continua

Tema 2 del programa. Las leyes de Kirchhoff, los métodos sistemáticos de análisis
y los teoremas que simplifican un circuito antes de resolverlo.

## El modelo de circuito

Un circuito es una idealización: se supone que los elementos son **concentrados**,
es decir, que toda la resistencia está en las resistencias y toda la capacidad en
los condensadores, y que la señal se propaga instantáneamente por los cables.

La aproximación vale mientras la longitud del circuito sea mucho menor que la
longitud de onda de las señales que lleva. A 50 Hz eso son miles de kilómetros; a
5 GHz, unos centímetros, y por eso el diseño de una placa moderna ya no puede
tratarse solo con este modelo.

### Convenio de signos

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.9, transform shape]
\draw (0,0) to[R=$R$, i>^=$i$, v_=$v$] (3,0);
\node[font=\footnotesize, anchor=north] at (1.5,-1.1)
      {la corriente entra por el borne $+$: el elemento consume};
\end{circuitikz}
\end{center}
```

Con el **convenio de receptor**, la corriente entra por el terminal positivo y la
potencia $p = v\,i$ es positiva cuando el elemento consume. Con el convenio de
generador es al revés. Fijar uno y mantenerlo es lo que evita los errores de signo,
que son la mitad de los fallos en los ejercicios de este tema.

## Elementos

| Elemento | Símbolo | Relación |
| --- | --- | --- |
| Resistencia | $R$ | $v = R\,i$ |
| Fuente de tensión ideal | $V_g$ | impone $v$, con cualquier $i$ |
| Fuente de corriente ideal | $I_g$ | impone $i$, con cualquier $v$ |
| Fuente dependiente | — | su valor depende de otra magnitud del circuito |

Las fuentes ideales son otra idealización: una fuente real tiene resistencia
interna, y se modela como una fuente ideal con una resistencia en serie —modelo de
Thévenin— o en paralelo —modelo de Norton—.

### Ley de Ohm y potencia

$$v = R\,i, \qquad p = v\,i = R\,i^2 = \frac{v^2}{R}$$

La potencia disipada crece con el **cuadrado** de la corriente, y esa es la razón
de dos cosas cotidianas: que el transporte de energía eléctrica se haga a alta
tensión y baja corriente, y que un procesador se caliente tanto al subirle la
tensión de alimentación.

## Leyes de Kirchhoff

**Primera ley, de corrientes (LCK).** En todo nodo, la suma de corrientes
entrantes es igual a la de salientes:

$$\sum i_{entrantes} = \sum i_{salientes}$$

Es la conservación de la carga: en un nodo no se acumula.

**Segunda ley, de tensiones (LTK).** En toda malla, la suma algebraica de las
tensiones es cero:

$$\sum v_k = 0$$

Es que el campo electrostático es conservativo, que ya se vio en el tema 1.

### Vocabulario

| Término | Definición |
| --- | --- |
| Nodo | punto de unión de dos o más elementos |
| Nodo esencial | unión de tres o más elementos |
| Rama | camino entre dos nodos, con un solo elemento o varios en serie |
| Malla | camino cerrado que no contiene otro dentro |
| Lazo | cualquier camino cerrado |

Con $n$ nodos y $r$ ramas, el sistema completo son $n-1$ ecuaciones de nodos y
$r-n+1$ de mallas: en total $r$ ecuaciones para $r$ corrientes incógnita.

## Asociación de resistencias

| Asociación | Equivalente | Se conserva |
| --- | --- | --- |
| Serie | $R_{eq} = \sum R_i$ | la corriente |
| Paralelo | $\dfrac{1}{R_{eq}} = \sum \dfrac{1}{R_i}$ | la tensión |

Para dos en paralelo, $R_{eq} = \dfrac{R_1R_2}{R_1+R_2}$.

### Divisores

**De tensión**, con dos resistencias en serie:

$$V_2 = V_g\,\frac{R_2}{R_1+R_2}$$

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.9, transform shape]
\draw (0,0) to[V=$V_g$] (0,3)
      to[R=$R_1$] (3,3)
      to[R=$R_2$, v^=$V_2$] (3,0) -- (0,0);
\draw (0,0) node[ground]{};
\end{circuitikz}
\end{center}
```

**De corriente**, con dos en paralelo:

$$I_1 = I_g\,\frac{R_2}{R_1+R_2}$$

Los dos son la herramienta más usada del tema, y el error habitual es aplicar el
divisor de tensión cuando hay una carga conectada en paralelo con $R_2$: entonces
$R_2$ hay que sustituirla por el paralelo de las dos.

## Métodos sistemáticos

### Análisis por nodos

1. Elegir un nodo como referencia, con $V = 0$.
2. Nombrar la tensión de cada nodo esencial restante.
3. Escribir la LCK en cada uno, expresando las corrientes con la ley de Ohm.
4. Resolver el sistema.

Para un nodo $A$ entre $R_1$ hacia una fuente $V_g$, $R_2$ a tierra y $R_3$ a otro
nodo $B$:

$$\frac{V_A - V_g}{R_1} + \frac{V_A}{R_2} + \frac{V_A - V_B}{R_3} = 0$$

Cuando una fuente de tensión está entre dos nodos y no hay ninguno a referencia,
los dos se agrupan en un **supernodo**: se escribe la LCK de los dos juntos y se
añade la ecuación de la fuente.

### Análisis por mallas

1. Definir una corriente de malla por cada malla, todas en el mismo sentido.
2. Escribir la LTK en cada malla.
3. Resolver.

Si una fuente de corriente pertenece a dos mallas, se agrupan en una
**supermalla**, con la misma idea.

| | Nodos | Mallas |
| --- | --- | --- |
| Incógnitas | tensiones de nodo | corrientes de malla |
| Número de ecuaciones | $n_{esenciales} - 1$ | $r - n + 1$ |
| Conviene con | muchas fuentes de corriente | muchas fuentes de tensión |
| Caso especial | supernodo | supermalla |

Elegir el método con menos ecuaciones es lo que ahorra tiempo en el examen, y esa
es la única razón para conocer los dos.

## Teoremas

### Superposición

En un circuito lineal, la respuesta a varias fuentes es la suma de las respuestas
a cada una por separado, anulando las demás:

| Fuente anulada | Se sustituye por |
| --- | --- |
| Tensión | cortocircuito |
| Corriente | circuito abierto |

**Solo vale para magnitudes lineales.** La potencia no lo es —depende del
cuadrado— así que no se puede superponer: hay que calcular primero la tensión o
la corriente total y después la potencia. Es el error clásico del teorema.

Las fuentes dependientes **no se anulan**: dependen del circuito y siguen activas.

### Thévenin y Norton

Cualquier red lineal vista desde dos terminales equivale a:

- **Thévenin**: una fuente de tensión $V_{Th}$ en serie con $R_{Th}$.
- **Norton**: una fuente de corriente $I_N$ en paralelo con $R_N$.

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.85, transform shape]
% Thevenin
\draw (0,0) to[V=$V_{Th}$] (0,2.4) to[R=$R_{Th}$] (2.2,2.4) -- (2.6,2.4)
      node[circ]{} node[anchor=south, font=\footnotesize] {A};
\draw (0,0) -- (2.6,0) node[circ]{} node[anchor=north, font=\footnotesize] {B};
\node[font=\footnotesize] at (1.2,-1) {Thévenin};

% Norton
\draw (6,0) to[I=$I_N$] (6,2.4) -- (7.6,2.4);
\draw (7.6,2.4) to[R=$R_N$] (7.6,0) -- (6,0);
\draw (7.6,2.4) -- (9,2.4) node[circ]{} node[anchor=south, font=\footnotesize] {A};
\draw (7.6,0) -- (9,0) node[circ]{} node[anchor=north, font=\footnotesize] {B};
\node[font=\footnotesize] at (7.4,-1) {Norton};
\end{circuitikz}
\end{center}
```

Relación entre los dos: $V_{Th} = I_N R_N$ y $R_{Th} = R_N$.

Cómo se calculan:

| Magnitud | Cómo |
| --- | --- |
| $V_{Th}$ | tensión en circuito abierto entre A y B |
| $I_N$ | corriente de cortocircuito entre A y B |
| $R_{Th}$ | anulando las fuentes independientes, resistencia vista desde A-B |
| $R_{Th}$ con fuentes dependientes | $V_{Th}/I_N$, o inyectando una fuente de prueba |

La última fila importa: **con fuentes dependientes no se pueden anular las
fuentes y mirar la resistencia**, porque las dependientes siguen actuando.

Para qué sirve: sustituir toda la red que alimenta una carga por dos elementos,
de modo que estudiar cómo responde a distintas cargas deja de exigir resolver el
circuito entero cada vez.

### Máxima transferencia de potencia

Una fuente con resistencia interna $R_{Th}$ entrega la máxima potencia a una carga
cuando

$$R_L = R_{Th}$$

y el rendimiento en ese punto es del **50 %**: la mitad de la potencia se disipa
dentro de la fuente.

De ahí una distinción práctica: en comunicaciones se adapta la impedancia para
transferir la máxima señal, y en distribución de energía **no**, porque tirar la
mitad de la energía sería inaceptable. Ahí se busca $R_L \gg R_{Th}$.

## Circuitos con condensadores y bobinas en continua

En **régimen permanente**, con todas las magnitudes constantes:

- El condensador tiene $i = C\,dv/dt = 0$: se comporta como **circuito abierto**.
- La bobina tiene $v = L\,di/dt = 0$: se comporta como **cortocircuito**.

Antes de llegar a ese régimen hay un **transitorio**. Para un circuito RC en serie
alimentado por un escalón:

$$v_C(t) = V_g\left(1 - e^{-t/\tau}\right), \qquad \tau = RC$$

y al descargarse, $v_C(t) = V_0 e^{-t/\tau}$.

| Instante | $v_C$ como fracción del final |
| --- | ---: |
| $\tau$ | 63,2 % |
| $2\tau$ | 86,5 % |
| $3\tau$ | 95,0 % |
| $5\tau$ | 99,3 % |

Se considera terminado el transitorio a los $5\tau$. Para un circuito RL,
$\tau = L/R$ y las expresiones son análogas con la corriente.

Esto no es un tecnicismo: **el tiempo de conmutación de una puerta lógica es un
transitorio RC**, con $R$ la resistencia del transistor conduciendo y $C$ la
capacidad de la puerta siguiente. El tema 5 vuelve sobre ello, y ahí está el
motivo de que reducir la capacidad y la tensión sea lo que hace más rápido un
circuito digital. El desarrollo del análisis de circuitos está en \cite{hayt2019},
\cite{nilsson2008} y \cite{lopez2008}.
