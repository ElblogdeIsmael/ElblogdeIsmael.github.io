# Temario práctico

Las cinco prácticas de laboratorio del programa. La parte de la asignatura donde
lo medido no coincide con lo calculado, y hay que explicar por qué.

## Instrumentación

| Instrumento | Mide o genera | Cómo se conecta |
| --- | --- | --- |
| Multímetro | tensión, corriente, resistencia, continuidad | **tensión en paralelo, corriente en serie** |
| Osciloscopio | forma de onda en el tiempo | sonda en paralelo, masa a la referencia |
| Generador de funciones | señales senoidales, cuadradas, triangulares | a la entrada del circuito |
| Fuente de alimentación | continua, con límite de corriente | a la alimentación |

Cuatro cosas que se aprenden equivocándose, y conviene no equivocarse:

- **El amperímetro va en serie.** Conectarlo en paralelo con una fuente pone un
  cortocircuito a través de un instrumento de resistencia casi nula, y funde su
  fusible.
- **Las masas del osciloscopio y del generador están unidas a tierra.** Conectar la
  pinza de masa a un punto que no sea la referencia común cortocircuita parte del
  circuito. Para medir entre dos puntos flotantes hay que usar dos canales y restar.
- **Poner el límite de corriente antes de conectar.** Es lo que evita que un error
  de montaje destruya los componentes.
- **Comprobar el acoplo del osciloscopio.** En modo CA se pierde la componente
  continua, y una señal digital medida así parece centrada en cero.

### Incertidumbre

Ninguna medida vale sin su incertidumbre. Las tres fuentes:

| Fuente | De dónde viene |
| --- | --- |
| Del instrumento | su especificación, típicamente un porcentaje más unos dígitos |
| De carga | el instrumento altera el circuito que mide |
| De los componentes | la tolerancia: $\pm 5$ % en una resistencia corriente |

El **error de carga** es el que más sorprende: un voltímetro con 10 M$\Omega$ de
resistencia de entrada, midiendo sobre una resistencia de 1 M$\Omega$, altera el circuito
lo suficiente para que la lectura no sea la tensión que había. Se corrige teniendo
en cuenta la resistencia del instrumento en el cálculo.

Y la tolerancia explica por sí sola la mayor parte de las diferencias entre lo
calculado y lo medido: con resistencias al 5 %, un divisor puede desviarse un 10 %
sin que nada esté mal.

## Práctica 1. Circuitos de corriente continua

Objetivo: comprobar experimentalmente las leyes y los teoremas del tema 2.

**Montajes:**

- Divisor de tensión: medir y comparar con $V_2 = V_g R_2/(R_1+R_2)$.
- Asociaciones serie y paralelo, midiendo la resistencia equivalente.
- Un circuito con dos fuentes, para comprobar la superposición midiendo la
  contribución de cada una por separado.
- Thévenin: medir la tensión en circuito abierto y la corriente de cortocircuito
  entre dos terminales, y comprobar que la red se comporta como el equivalente.
- Máxima transferencia de potencia: variar $R_L$ y representar $P$ frente a $R_L$.

**Lo que se observa y hay que explicar:**

| Observación | Causa |
| --- | --- |
| El divisor no da exactamente lo calculado | tolerancia de las resistencias |
| Con $R$ grandes la desviación crece | el voltímetro carga el circuito |
| La fuente no da exactamente la tensión ajustada | su resistencia interna |
| El máximo de $P$ es plano alrededor de $R_L = R_{Th}$ | la curva tiene derivada nula en el máximo |

La última fila es la que conviene mirar: el máximo es plano, así que una
desadaptación moderada apenas pierde potencia.

## Práctica 2. Circuitos de corriente alterna

**Montajes:**

- Medir amplitud, periodo y valor eficaz de una senoide con el osciloscopio.
- Circuito RC: medir el desfase entre tensión y corriente, y comprobar que se
  acerca a −90° al bajar la frecuencia.
- Respuesta en frecuencia de un filtro RC: barrer frecuencias, medir la ganancia,
  representar el diagrama de Bode y localizar $f_c$.
- Circuito RLC serie: encontrar la resonancia y medir el ancho de banda.
- Transitorio RC con entrada cuadrada: medir $\tau$ sobre la pantalla.

**Cómo se mide el desfase.** Con las dos señales en pantalla, se mide el desfase
temporal $\Delta t$ entre pasos por cero y se convierte:

$$\varphi = 360°\,\frac{\Delta t}{T}$$

**Cómo se mide $f_c$.** Es la frecuencia a la que la amplitud de salida cae a
0,707 de la de entrada. En decibelios, $-3$ dB.

**Cómo se mide $\tau$.** El tiempo que tarda en alcanzar el 63,2 % del valor final,
o el 37 % descargando. Con una onda cuadrada de periodo mucho mayor que $5\tau$,
cada semiciclo es una carga o una descarga completa.

| Observación | Causa |
| --- | --- |
| $f_c$ medida distinta de $1/(2\pi RC)$ | tolerancia, y la capacidad de la sonda |
| La resonancia sale a frecuencia algo menor | resistencia y capacidad parásitas de la bobina |
| El pico de resonancia es menos alto de lo previsto | la resistencia interna de la bobina baja el $Q$ |

## Práctica 3. Circuitos básicos con dispositivos semiconductores

**Montajes:**

- Característica $I$-$V$ del diodo: variar la tensión y medir la corriente.
  Representarla y localizar la tensión de codo.
- Rectificador de media onda y de onda completa, con el osciloscopio a la salida.
- Efecto del condensador de filtro: medir el rizado con varias capacidades.
- Diodo Zener como regulador: variar la entrada y comprobar que la salida se
  mantiene.
- Transistor en conmutación: llevarlo de corte a saturación y medir $V_{CE}$ en
  cada estado.

**Lo que hay que retener de la práctica:**

- La tensión de codo **no es exactamente 0,7 V**: depende de la corriente y de la
  temperatura. Se mide, no se supone.
- La salida del rectificador de media onda tiene un pico de $V_m - 0{,}7$, no
  $V_m$.
- El rizado baja al aumentar la capacidad, y sigue $V_r \approx I/(2fC)$.
- En saturación, $V_{CE}$ está en torno a 0,2 V y no en cero. Multiplicado por la
  corriente, esa es la potencia que un transistor de conmutación disipa.

## Práctica 4. Caracterización de circuitos para lógica digital

**Montajes:**

- Función de transferencia de un inversor: barrer la tensión de entrada y medir la
  de salida. Sale la curva con la transición brusca del tema 5.
- Determinar $V_{IL}$, $V_{IH}$, $V_{OL}$ y $V_{OH}$ sobre esa curva, en los puntos
  de pendiente $-1$.
- Calcular los márgenes de ruido.
- Retardo de propagación: con una entrada cuadrada, medir el desplazamiento entre
  el 50 % de la entrada y el 50 % de la salida.
- Efecto del fan-out: conectar varias entradas a la salida y medir cómo crece el
  retardo.
- Comparar el consumo en reposo con el consumo conmutando.

**Lo que la práctica demuestra:**

| Medida | Lo que confirma |
| --- | --- |
| Consumo en reposo casi nulo | en CMOS no hay camino de $V_{DD}$ a tierra en régimen permanente |
| El consumo crece con la frecuencia | el término dinámico $\alpha C V^2 f$ |
| El retardo crece con el fan-out | más entradas es más capacidad que cargar |
| Los márgenes de ruido son amplios | por qué un sistema digital tolera ruido |

## Práctica 5. Amplificador operacional

**Montajes:**

- Inversor y no inversor: medir la ganancia y compararla con el cociente de
  resistencias.
- Seguidor: comprobar que la salida sigue a la entrada y que conectar una carga
  no hunde la señal.
- Sumador: comprobar que la salida es la suma ponderada.
- Integrador con entrada cuadrada: la salida debe ser triangular.
- Comprobar la saturación: subir la amplitud hasta que la salida quede recortada
  por la alimentación.
- Medir el ancho de banda a dos ganancias distintas y comprobar que el producto
  ganancia-ancho de banda es aproximadamente constante.

**Lo que hay que observar:**

- **La salida no puede superar la alimentación.** Un inversor de ganancia 100 con
  entrada de 1 V y alimentación de $\pm 12$ V no da 100 V: satura en 12.
- **A frecuencia alta la ganancia cae.** Es el producto ganancia-ancho de banda del
  tema 6, y se mide.
- **La velocidad de subida está limitada.** Con un escalón grande, la salida sube
  con una rampa y no instantáneamente.
- El integrador **deriva** si la entrada tiene componente continua, porque la
  integra indefinidamente. Se corrige con una resistencia en paralelo con el
  condensador.

## El informe

Lo que se entrega por práctica:

1. Objetivo y fundamento teórico, con las expresiones que se van a comprobar.
2. Esquema del montaje y lista de componentes, con sus valores nominales y su
   tolerancia.
3. Valores calculados de antemano.
4. Valores medidos, **con su incertidumbre**.
5. Comparación entre calculado y medido, con el error relativo.
6. **Explicación de las diferencias**, y conclusiones.

El punto 6 es el que se evalúa de verdad. Las causas posibles son casi siempre las
mismas —tolerancia de los componentes, carga del instrumento, resistencia interna
de las fuentes, elementos parásitos, temperatura—, y lo que se pide es identificar
cuál explica lo observado y en qué medida. Una diferencia del 4 % con resistencias
al 5 % no necesita más explicación; una del 40 % sí. Los guiones de laboratorio y
sus problemas están en \cite{lopez2008problemas} y \cite{padilla2024b}.
