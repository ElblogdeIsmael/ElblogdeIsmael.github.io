# Problemas resueltos

Los cálculos que la asignatura pide, resueltos paso a paso. Cubren las
prestaciones del tema 1, la sincronización del tema 3, el ILP del tema 4 y la
vectorización del tema 5.

## Ganancia, eficiencia y Amdahl

### Problema 1

Un programa tarda 100 s en un procesador. El 80 % de ese tiempo es paralelizable.
Calcular la ganancia y la eficiencia con 4, 16 y 64 procesadores, y la cota
superior.

**Solución.** Con $f = 0{,}2$ de fracción secuencial:

$$S(p) = \frac{1}{0{,}2 + \dfrac{0{,}8}{p}}$$

| $p$ | $T_p$ (s) | $S(p)$ | $E(p)$ |
| ---: | ---: | ---: | ---: |
| 1 | 100,0 | 1,00 | 1,00 |
| 4 | 40,0 | 2,50 | 0,63 |
| 16 | 25,0 | 4,00 | 0,25 |
| 64 | 21,3 | 4,71 | 0,07 |
| $\infty$ | 20,0 | **5,00** | 0 |

Pasar de 16 a 64 procesadores —cuadruplicar la máquina— gana un 18 %. La
eficiencia cae al 7 %: **59 de los 64 procesadores no aportan nada**. El número
que gobierna todo es el 20 % secuencial, y reducirlo al 10 % duplicaría la cota.

### Problema 2

Un programa alcanza $S = 3{,}2$ con 4 procesadores. Estimar la fracción
secuencial y predecir la ganancia con 32.

**Solución.** Despejando $f$ de la ley de Amdahl:

$$f = \frac{\dfrac{p}{S} - 1}{p - 1} = \frac{\dfrac{4}{3{,}2} - 1}{3} = \frac{0{,}25}{3} = 0{,}083$$

Con $f = 0{,}083$ y $p = 32$:

$$S(32) = \frac{1}{0{,}083 + \dfrac{0{,}917}{32}} = \frac{1}{0{,}1117} = 8{,}95$$

Esta forma de estimar $f$ a partir de una medida se llama **fracción serie de
Karp-Flatt**, y su utilidad real es aplicarla a varios valores de $p$: si $f$
sale constante, la pérdida es la fracción secuencial; si crece con $p$, hay
sobrecarga de comunicación o sincronización que Amdahl no modela.

### Problema 3

Comparar escalabilidad fuerte y débil sobre el mismo programa, con $f = 0{,}05$ y
64 procesadores.

**Solución.**

Fuerte, con Amdahl:

$$S = \frac{1}{0{,}05 + \dfrac{0{,}95}{64}} = 15{,}4$$

Débil, con Gustafson:

$$S = p - f(p-1) = 64 - 0{,}05 \cdot 63 = 60{,}9$$

El mismo programa y la misma máquina dan 15,4 o 60,9 según qué se mantenga fijo.
No hay contradicción: la primera resuelve el mismo problema más rápido y la
segunda resuelve un problema 64 veces mayor en el mismo tiempo. Publicar la
segunda cifra sin decir cuál se midió es la forma más común de exagerar
resultados en esta materia.

## Prestaciones y memoria

### Problema 4

Un procesador tiene CPI de ejecución 1,2. El 30 % de las instrucciones acceden a
memoria. La caché falla el 4 % de las veces y la penalización es de 150 ciclos.
Calcular el CPI real y qué fracción del tiempo se pierde en memoria.

**Solución.** Cada instrucción hace un acceso para buscarse a sí misma más 0,3 de
datos, es decir 1,3 accesos:

$$\text{CPI} = 1{,}2 + 1{,}3 \cdot 0{,}04 \cdot 150 = 1{,}2 + 7{,}8 = 9{,}0$$

La memoria aporta 7,8 de los 9,0 ciclos: el **87 %** del tiempo. Bajar la tasa de
fallos del 4 % al 1 % deja el CPI en 3,15, casi tres veces mejor, sin tocar el
procesador.

### Problema 5

Una máquina NUMA de dos nodos tiene latencia local de 90 ns y remota de 140 ns.
Un programa hace el 100 % de sus accesos en el nodo local si se inicializa bien, y
el 50 % remotos si toda la memoria acaba en un nodo. Calcular la diferencia.

**Solución.**

- Bien colocado: $90$ ns por acceso.
- Mal colocado: $0{,}5 \cdot 90 + 0{,}5 \cdot 140 = 115$ ns.

Un 28 % más lento, y ni una línea del cálculo ha cambiado: solo **quién tocó la
memoria primero**. Es el efecto de la política de primer toque del tema 3, y se
corrige inicializando en paralelo con el mismo reparto que usa el cálculo.

### Problema 6

Ocho hilos acumulan en `double parcial[8]`, un elemento cada uno. Las líneas de
caché son de 64 bytes. Explicar el problema y calcular el relleno necesario.

**Solución.** Ocho `double` son 64 bytes: **el vector entero cabe en una sola
línea**. Cada escritura de cualquier hilo invalida la línea en los otros siete,
así que la línea viaja continuamente entre núcleos aunque no se comparta ningún
dato. Es falso compartimiento.

Con `double` de 8 bytes y línea de 64, hacen falta $64 - 8 = 56$ bytes de relleno
por elemento:

```c
struct { double v; char relleno[56]; } parcial[8];
```

El vector pasa de 64 a 512 bytes y cada hilo escribe en su propia línea. La
alternativa sin relleno es que cada hilo acumule en una variable local y solo
escriba en el vector al final, que es lo que `reduction` hace por dentro.

## Sincronización

### Problema 7

Comparar el tráfico de coherencia de un cerrojo `test-and-set` con el de un
cerrojo con espera de lectura, con $p$ hilos esperando.

**Solución.** Con `test-and-set` puro, cada hilo ejecuta una operación de
**escritura** en cada intento. Toda escritura invalida la línea en los otros
$p-1$, así que en cada vuelta hay del orden de $p$ transacciones de coherencia, y
$O(p^2)$ mientras se espera.

Con espera de lectura, los hilos leen en bucle: la línea queda en estado
compartido y las lecturas no generan tráfico. Solo cuando el cerrojo se libera
intentan la operación atómica, y ahí hay una ráfaga de $O(p)$.

Un cerrojo MCS baja incluso eso a $O(1)$, porque cada hilo espera sobre una
variable propia y el que sale despierta solo al siguiente de la cola.

### Problema 8

Un programa tiene una sección crítica de 200 ns dentro de un bucle donde cada
iteración cuesta 2 µs. Calcular el número máximo de hilos que pueden trabajar sin
que el cerrojo sea el cuello de botella.

**Solución.** La sección crítica se ejecuta en serie, así que el sistema completo
no puede hacer más de una cada 200 ns. Cada hilo pide entrar una vez por
iteración, es decir cada 2 µs:

$$p_{max} = \frac{2000\ \text{ns}}{200\ \text{ns}} = 10$$

Con más de diez hilos, el cerrojo satura y añadir hilos no aporta nada. Es Amdahl
otra vez, con la sección crítica en el papel de fracción secuencial: aquí
$f = 0{,}1$ y la cota es 10.

## Paralelismo a nivel de instrucción

### Problema 9

Una suma en coma flotante tiene latencia 4 ciclos y la unidad está segmentada con
iniciación cada ciclo. Calcular el tiempo de un bucle de acumulación de $n$
elementos con uno y con cuatro acumuladores.

**Solución.**

Con un acumulador, cada suma depende de la anterior, así que hay que esperar la
latencia completa: $4n$ ciclos.

Con cuatro acumuladores independientes, las cuatro cadenas se entrelazan y la
unidad acepta una suma por ciclo: $n$ ciclos, más los 4 del vaciado final.

**Ganancia: 4.** El número de acumuladores que compensa es exactamente la latencia
dividida por el intervalo de iniciación; añadir más no mejora y consume registros.

### Problema 10

Un cauce de 18 etapas tiene una penalización de 17 ciclos por fallo de predicción.
Los saltos son el 20 % de las instrucciones. Calcular el CPI añadido con acierto
del 90 % y del 99 %.

**Solución.**

$$\text{CPI}_{extra} = 0{,}20 \cdot (1-h) \cdot 17$$

| Acierto | CPI añadido |
| ---: | ---: |
| 90 % | $0{,}20 \cdot 0{,}10 \cdot 17 = 0{,}34$ |
| 99 % | $0{,}20 \cdot 0{,}01 \cdot 17 = 0{,}034$ |

Sobre un CPI base de 0,25 —un superescalar de cuatro vías— el primer caso
**duplica con creces** el tiempo de ejecución y el segundo lo empeora un 14 %. Es
el argumento cuantitativo de por qué los predictores actuales son tan elaborados,
y de por qué ordenar los datos antes de un bucle con `if` puede acelerarlo varias
veces.

## Vectorización

### Problema 11

Un bucle procesa $n = 1000$ elementos `float`. Calcular cuántas iteraciones
vectoriales y cuántas de cola hacen falta con SSE, AVX2 y AVX-512.

**Solución.** Elementos `float` por registro: 4, 8 y 16.

| Extensión | Iteraciones vectoriales | Cola |
| --- | ---: | ---: |
| SSE | $\lfloor 1000/4 \rfloor = 250$ | 0 |
| AVX2 | $\lfloor 1000/8 \rfloor = 125$ | 0 |
| AVX-512 | $\lfloor 1000/16 \rfloor = 62$ | 8 |

Solo AVX-512 deja cola. Con $n = 1003$ las tres la dejarían, y omitir ese bucle
final no da error de compilación: da un resultado incorrecto en los últimos
elementos, que es peor.

### Problema 12

Un producto escalar lee dos vectores de `double` y hace una multiplicación y una
suma por elemento. La máquina alcanza 100 GFLOPS y 25 GB/s. Determinar si el
programa está limitado por cálculo o por memoria.

**Solución.** Por elemento: 16 bytes leídos y 2 operaciones. La intensidad
operacional es

$$I = \frac{2\ \text{ops}}{16\ \text{bytes}} = 0{,}125\ \text{ops/byte}$$

El rendimiento que el ancho de banda permite:

$$25\ \text{GB/s} \times 0{,}125\ \text{ops/byte} = 3{,}1\ \text{GFLOPS}$$

Muy por debajo de los 100 GFLOPS de pico, así que el programa está **limitado por
memoria**. Vectorizarlo no lo acelerará: las unidades ya esperan datos. La
intensidad de corte, donde los dos límites se cruzan, es $100/25 = 4$ ops/byte, y
un producto escalar está treinta veces por debajo.

Una multiplicación de matrices por bloques, en cambio, reutiliza cada dato $B$
veces y su intensidad crece con el tamaño del bloque: ahí sí compensa vectorizar.

## Coherencia

### Problema 13

Dos procesadores con protocolo MESI. P1 lee X, luego P2 lee X, luego P1 escribe X,
luego P2 lee X. Indicar el estado de la línea en cada caché tras cada paso.

**Solución.**

| Paso | Caché de P1 | Caché de P2 | Transacción |
| --- | --- | --- | --- |
| P1 lee X | Exclusiva | — | fallo de lectura; nadie más la tiene |
| P2 lee X | Compartida | Compartida | P1 detecta la petición y degrada su estado |
| P1 escribe X | **Modificada** | Inválida | P1 invalida la copia de P2 |
| P2 lee X | Compartida | Compartida | P1 sirve el dato y actualiza memoria |

El estado exclusivo del primer paso es lo que evita una transacción en el tercero
**cuando no hay lector intermedio**: si P2 no hubiera leído, P1 pasaría de
exclusiva a modificada en silencio, sin tocar el bus. Ese caso, un procesador que
lee y luego escribe un dato que nadie más usa, es el más frecuente de todos, y es
la razón de que el estado exista.

Estos problemas siguen el planteamiento de \cite{anguita2016}; el marco
cuantitativo es el de \cite{hennessy2026} y \cite{ortega2005}.
