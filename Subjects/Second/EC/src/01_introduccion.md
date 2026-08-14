# Introducción

Tema 1 del programa. Las unidades funcionales de un computador, cómo se
relacionan y qué ocurre en el intervalo que va desde que una instrucción se lee
hasta que su efecto es visible.

## Unidades funcionales

Un computador se descompone en cinco bloques. La descomposición es la de von
Neumann y sigue describiendo cualquier máquina de propósito general, por debajo
de las variaciones de implementación.

| Unidad | Función |
| --- | --- |
| Unidad aritmético-lógica | opera sobre los datos |
| Unidad de control | interpreta las instrucciones y gobierna al resto |
| Memoria | guarda instrucciones y datos |
| Entrada | introduce información desde el exterior |
| Salida | entrega información al exterior |

Las dos primeras forman el **procesador**. La memoria y el procesador se
comunican por buses; la entrada y la salida, a través de controladores que el
tema 5 desarrolla.

### El principio de programa almacenado

La decisión que define la arquitectura: **instrucciones y datos comparten la
misma memoria y el mismo formato**. Un programa es un dato más, lo que permite
que un programa genere otro programa, que un compilador escriba código y que el
sistema operativo cargue un ejecutable como quien copia bytes.

La alternativa, la **arquitectura Harvard**, separa la memoria de instrucciones
de la de datos. Sobrevive en dos sitios muy concretos, y por razones distintas:

- En microcontroladores, porque el programa vive en memoria no volátil y los
  datos en RAM, y la separación es física de todas formas.
- Dentro de los procesadores modernos, en el primer nivel de caché, que sí está
  dividido en caché de instrucciones y caché de datos. Hacia fuera la máquina
  sigue siendo von Neumann; hacia dentro, Harvard.

La contrapartida del programa almacenado es el **cuello de botella de von
Neumann**: instrucciones y datos compiten por el mismo camino hacia la memoria.
Casi todo lo que aparece en los temas 4 y 6 —segmentación, cachés, prebúsqueda—
existe para mitigarlo.

## Niveles de abstracción

Un computador se puede describir en varios niveles, cada uno con su vocabulario:

| Nivel | Qué se ve | Quién trabaja aquí |
| --- | --- | --- |
| Lenguaje de alto nivel | tipos, funciones, objetos | el programador de aplicaciones |
| Ensamblador | instrucciones y registros con nombre | el compilador y esta asignatura |
| Lenguaje máquina | secuencias de bits | el procesador |
| Microarquitectura | camino de datos, unidad de control | el diseñador del procesador |
| Lógica digital | puertas y biestables | el diseñador del circuito |

La frontera que importa aquí es la del nivel de lenguaje máquina, porque es
donde se define el contrato entre hardware y software: la **arquitectura del
repertorio de instrucciones**, o ISA.

La ISA es lo que un programa ve; la microarquitectura es cómo se implementa. Dos
procesadores con la misma ISA ejecutan el mismo binario aunque por dentro no se
parezcan en nada: uno puede ejecutar en orden y otro reordenar cien
instrucciones. Esa separación es lo que permite que un binario compilado en 2005
siga funcionando, y es la razón económica por la que las ISA cambian tan despacio.

## Conceptos básicos de funcionamiento

### El ciclo de instrucción

El procesador repite indefinidamente la misma secuencia:

1. **Búsqueda.** Se lee de memoria la instrucción cuya dirección está en el
   contador de programa, y este se incrementa.
2. **Decodificación.** Se interpretan los campos de la instrucción: qué
   operación es, qué operandos usa, dónde deja el resultado.
3. **Lectura de operandos.** Del banco de registros o de memoria.
4. **Ejecución.** La ALU opera, o se calcula una dirección.
5. **Escritura del resultado.** En un registro o en memoria.

El incremento del contador de programa en el paso 1, **antes** de ejecutar, no
es un detalle de orden: es lo que hace que una instrucción de salto relativo se
calcule respecto a la instrucción siguiente, y explica los desplazamientos que
aparecen al desensamblar.

Al final del ciclo el procesador comprueba si hay una interrupción pendiente. Es
el único punto donde puede atenderla sin dejar una instrucción a medias, y por
eso una instrucción muy larga aumenta la latencia de interrupción.

### Registros

La memoria más rápida y más escasa. Los que toda máquina tiene, con nombre
propio o sin él:

| Registro | Contenido |
| --- | --- |
| Contador de programa (PC) | dirección de la instrucción siguiente |
| Registro de instrucción (IR) | la instrucción que se está ejecutando |
| Registro de direcciones de memoria (MAR) | dirección del acceso en curso |
| Registro de datos de memoria (MDR) | dato que se lee o se escribe |
| Puntero de pila (SP) | cima de la pila |
| Registros generales | operandos y resultados |
| Registro de estado | banderas de cero, signo, acarreo y desbordamiento |

El **registro de estado** es la pieza sobre la que se construye todo el control
de flujo: una comparación no salta, solo deja banderas; el salto condicional las
lee. Separar las dos cosas permite que una comparación sirva a varios saltos y
que el compilador reordene el código entre ambas.

### Medida de prestaciones

El tiempo de ejecución de un programa es el producto de tres factores:

$$T = N \times \text{CPI} \times T_{ciclo}$$

donde $N$ es el número de instrucciones ejecutadas, CPI los ciclos por
instrucción y $T_{ciclo}$ el periodo de reloj. Cada factor lo determina alguien
distinto:

| Factor | Lo fija |
| --- | --- |
| $N$ | la ISA, el compilador y el algoritmo |
| CPI | la microarquitectura y la mezcla de instrucciones |
| $T_{ciclo}$ | la tecnología del circuito y la profundidad del cauce |

De aquí sale el error clásico de comparar máquinas por la frecuencia de reloj:
un procesador a 3 GHz con CPI 2 es más lento que uno a 2 GHz con CPI 1. Y el
otro error, comparar por MIPS: la medida ignora qué hace cada instrucción, así
que favorece a la ISA que necesita más instrucciones para el mismo trabajo.

### La ley de Amdahl

Cuánto mejora el conjunto al acelerar una parte. Si una fracción $f$ del tiempo
se acelera un factor $k$, la ganancia global es

$$S = \frac{1}{(1-f) + \dfrac{f}{k}}$$

El límite cuando $k \to \infty$ es $1/(1-f)$. Con $f = 0{,}9$, hacer esa parte
infinitamente rápida solo multiplica por 10 el rendimiento total. Es el
argumento cuantitativo de por qué se optimiza lo que más se ejecuta y no lo que
más llama la atención, y reaparece en el tema 6 al medir el efecto de la caché.

### Tipos de arquitectura del repertorio

| | CISC | RISC |
| --- | --- | --- |
| Número de instrucciones | grande, y complejas | reducido y regular |
| Formato | longitud variable | longitud fija |
| Acceso a memoria | casi cualquier instrucción | solo carga y almacenamiento |
| Modos de direccionamiento | muchos | pocos |
| Registros | pocos, especializados | muchos, generales |
| Ejemplos | x86, VAX, 68000 | RISC-V, ARM, MIPS |

La comparación limpia entre las dos familias dejó de existir hace décadas: los
x86 actuales decodifican sus instrucciones complejas en microoperaciones de tipo
RISC y ejecutan esas. Lo que sobrevive es la diferencia visible al programar en
ensamblador, y esa es la que interesa en el tema siguiente. El desarrollo
completo de esta comparación está en \cite{stallings2022} y en
\cite{patterson2021}.

### Buses

Un bus es un conjunto de líneas compartidas por varias unidades. Tres grupos:

| Bus | Qué transporta | Sentido |
| --- | --- | --- |
| Direcciones | la posición a la que se accede | del procesador hacia fuera |
| Datos | el contenido | bidireccional |
| Control | lectura o escritura, sincronización, peticiones | mixto |

El ancho del bus de direcciones fija el espacio direccionable: con 32 líneas,
4 GiB. El ancho del bus de datos fija cuánto se transfiere por operación.

Como el bus es compartido, hace falta **arbitraje** cuando varias unidades
quieren usarlo. Puede ser centralizado —un árbitro decide— o distribuido, y la
política va desde la prioridad fija hasta el turno rotatorio.

Y una transferencia puede ser **síncrona**, gobernada por un reloj común, o
**asíncrona**, con un protocolo de acuse en el que el emisor espera confirmación.
La síncrona es más rápida y obliga a que todos los dispositivos vayan al ritmo
del más lento; la asíncrona se adapta a dispositivos de velocidades distintas a
costa de las señales de acuse.

El bus compartido clásico ha desaparecido de las máquinas de propósito general.
PCI Express, que lo sustituyó, no es un bus sino una red de enlaces punto a
punto conmutados: no hay arbitraje porque no hay medio compartido. El vocabulario
—«bus PCI»— se quedó, y conviene no dejarse llevar por él.
