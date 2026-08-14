# Arquitecturas paralelas: clasificación y prestaciones

Tema 1 del programa. Por qué el paralelismo dejó de ser una opción, cómo se
clasifican las máquinas que lo explotan y con qué medidas se juzga si el
paralelismo está sirviendo de algo.

## Por qué el paralelismo

Durante tres décadas el rendimiento de un procesador creció subiendo la
frecuencia y añadiendo etapas al cauce. Ese camino se agotó alrededor de 2005,
y por razones físicas, no de ingeniería.

La potencia dinámica de un circuito CMOS es

$$P = \alpha\, C\, V^2 f$$

con $\alpha$ la actividad de conmutación, $C$ la capacidad, $V$ la tensión y $f$
la frecuencia. Subir la frecuencia exige subir la tensión para que las
transiciones lleguen a tiempo, y la potencia crece con el **cuadrado** de la
tensión. Hasta principios de siglo el escalado de Dennard compensaba: al reducir
el tamaño del transistor se reducía también la tensión, y la densidad de potencia
se mantenía. Cuando las corrientes de fuga crecieron, la tensión dejó de bajar y
el escalado se rompió.

Tres muros, y los tres siguen en pie:

| Muro | Qué impide |
| --- | --- |
| Potencia | disipar el calor de un chip a frecuencia mayor |
| Memoria | la latencia de la DRAM mejora mucho más despacio que el procesador |
| Paralelismo a nivel de instrucción | el paralelismo que un flujo secuencial ofrece está casi agotado |

La respuesta de la industria fue la misma en todos los fabricantes: en vez de un
procesador más rápido, varios procesadores. El paralelismo dejó de ser un asunto
de supercomputación para pasar a ser la única forma de aprovechar el hardware,
y eso traslada el problema al software.

## Clasificación de Flynn

La clasificación clásica, por el número de flujos de instrucciones y de datos:

| Clase | Instrucciones | Datos | Qué es |
| --- | --- | --- | --- |
| SISD | uno | uno | el procesador secuencial clásico |
| SIMD | uno | varios | una instrucción sobre muchos datos: vectorial, GPU |
| MISD | varios | uno | sin realizaciones comerciales; se cita por completitud |
| MIMD | varios | varios | multiprocesadores y multicomputadores |

MIMD es la categoría dominante, y por sí sola no dice casi nada. Lo que la hace
útil es subdividirla por el modelo de memoria.

### Multiprocesadores y multicomputadores

| | Multiprocesador | Multicomputador |
| --- | --- | --- |
| Memoria | única y compartida | privada por nodo |
| Comunicación | escribir y leer variables | paso de mensajes |
| Sincronización | explícita, con cerrojos y barreras | implícita en el mensaje |
| Escalabilidad | limitada por la memoria compartida | alta |
| Programación | más sencilla, y con más errores sutiles | más laboriosa, y más explícita |
| Ejemplo | un procesador multinúcleo | un clúster |

La diferencia no es de rendimiento sino de modelo mental. En memoria compartida
la comunicación es invisible, y por eso las carreras de datos son fáciles de
introducir; con paso de mensajes toda comunicación se escribe, y lo que se olvida
produce un bloqueo, no un resultado incorrecto silencioso.

### Modelos de acceso a memoria

Dentro de los multiprocesadores:

| Modelo | Acceso | Consecuencia |
| --- | --- | --- |
| UMA | uniforme: todos los procesadores tardan lo mismo | simple; no escala más allá de unas decenas |
| NUMA | no uniforme: la memoria local es más rápida que la remota | escala; obliga a colocar los datos donde se usan |
| COMA | la memoria actúa como caché y los datos migran | poco usado |

NUMA es lo que hay en cualquier servidor de dos o más sockets, y también dentro
de un solo chip con muchos núcleos. La consecuencia práctica es la política de
**primer toque**: la página se asigna en el nodo del hilo que la escribe primero,
así que inicializar un vector entero desde un solo hilo deja toda la memoria en un
nodo y estrangula al resto.

## Prestaciones

### Ganancia y eficiencia

Con $T_1$ el tiempo del mejor algoritmo secuencial y $T_p$ el tiempo con $p$
procesadores:

$$S(p) = \frac{T_1}{T_p} \qquad E(p) = \frac{S(p)}{p}$$

La ganancia ideal es $p$ y la eficiencia ideal 1. En la práctica la eficiencia
cae al aumentar $p$, porque las tres fuentes de pérdida crecen: el trabajo que no
se puede paralelizar, la comunicación y la sincronización, y el desequilibrio de
carga.

Una advertencia sobre el numerador: $T_1$ tiene que ser el tiempo del **mejor
algoritmo secuencial**, no el del programa paralelo ejecutado con un procesador.
Usar lo segundo produce ganancias infladas, porque el programa paralelo arrastra
sobrecarga que el secuencial no tiene. Es la forma más común de presentar
resultados engañosos en esta materia.

La **ganancia superlineal**, $S(p) > p$, existe y no viola nada: al repartir el
problema entre más procesadores, la parte que toca a cada uno puede caber en su
caché. Lo que ha mejorado no es el paralelismo sino la jerarquía de memoria.

### Ley de Amdahl

Si una fracción $f$ del tiempo es inherentemente secuencial:

$$S(p) = \frac{1}{f + \dfrac{1-f}{p}} \xrightarrow[p \to \infty]{} \frac{1}{f}$$

Con un 5 % secuencial, la ganancia máxima es 20 **por muchos procesadores que se
añadan**. Es un resultado severo, y durante años se usó como argumento contra el
paralelismo masivo.

### Ley de Gustafson

Amdahl supone que el problema tiene tamaño fijo. Gustafson observó que en la
práctica nadie compra una máquina mayor para resolver el mismo problema más
rápido: la compra para resolver un problema mayor. Con el **tiempo** fijo en vez
del tamaño:

$$S(p) = p - f\,(p-1)$$

que crece linealmente con $p$. Las dos leyes no se contradicen: responden a
preguntas distintas. Amdahl mide **escalabilidad fuerte**, con el problema fijo;
Gustafson, **escalabilidad débil**, con el trabajo por procesador fijo.

Distinguirlas es lo que permite leer una gráfica de escalabilidad: si el tamaño
del problema crece con el número de procesadores, la curva mide otra cosa.

### Otras medidas

- **Escalabilidad.** Un sistema es escalable si mantiene la eficiencia al crecer
  a la vez el número de procesadores y el tamaño del problema.
- **Granularidad.** La relación entre cómputo y comunicación. Gruesa cuando cada
  tarea hace mucho trabajo entre comunicaciones; fina en el caso contrario. La
  arquitectura determina qué granularidad compensa: en memoria compartida se
  puede bajar mucho más que en un clúster.
- **FLOPS y su límite.** Contar operaciones en coma flotante por segundo ignora
  si la máquina puede alimentarlas con datos. El **modelo del techo** cruza el
  pico aritmético con el ancho de banda de memoria, y sitúa cada núcleo de cómputo
  según su intensidad operacional —operaciones por byte leído—. Es lo que dice si
  un programa está limitado por cálculo o por memoria, que es la primera pregunta
  antes de optimizar.

## Redes de interconexión

Lo que conecta procesadores y memoria. Se describen con cuatro parámetros:

| Parámetro | Definición |
| --- | --- |
| Grado | enlaces por nodo |
| Diámetro | distancia máxima entre dos nodos |
| Ancho de bisección | enlaces que hay que cortar para partir la red en dos |
| Coste | número de enlaces |

| Topología | Diámetro | Grado | Comentario |
| --- | --- | --- | --- |
| Bus | 1 | 1 | no escala: el ancho de banda se reparte |
| Anillo | $p/2$ | 2 | barato y con diámetro grande |
| Malla 2D | $2(\sqrt{p}-1)$ | 4 | buena relación entre coste y diámetro |
| Toro | $\sqrt{p}$ | 4 | malla con los extremos unidos |
| Hipercubo | $\log_2 p$ | $\log_2 p$ | diámetro mínimo, grado creciente |
| Crossbar | 1 | — | sin bloqueo y con coste $O(p^2)$ |

El ancho de bisección es el parámetro que predice el comportamiento con
comunicaciones globales, como una transposición o una transformada. Un bus tiene
bisección 1 y por eso una máquina con bus no pasa de unas pocas unidades.

## Coherencia y consistencia

Dos problemas que se confunden y son distintos.

**Coherencia** responde a qué valor devuelve una lectura de **una** posición.
Cada procesador tiene caché, así que puede haber varias copias del mismo dato; si
uno escribe, los demás deben dejar de ver el valor viejo.

**Consistencia** responde a en qué orden se hacen visibles las escrituras a
posiciones **distintas**. Es un contrato entre el hardware y el programador, y
determina qué reordenamientos puede hacer la máquina.

### Protocolos de coherencia

Dos familias:

- **Espionaje.** Todos los controladores de caché vigilan un medio común y
  reaccionan a lo que ven. Requiere difusión, así que sirve con pocos núcleos.
- **Basados en directorio.** Una estructura registra qué cachés tienen cada
  bloque, y las invalidaciones se envían solo a esas. Escala, y cuesta memoria
  para el directorio.

El protocolo habitual es **MESI**, con cuatro estados por línea:

| Estado | Significado | Copias en otras cachés |
| --- | --- | --- |
| Modificada | modificada aquí, memoria desactualizada | ninguna |
| Exclusiva | igual que memoria, solo aquí | ninguna |
| Compartida | igual que memoria | puede haber |
| Inválida | no utilizable | — |

El estado exclusivo evita una transacción de bus muy frecuente: si un procesador
lee un bloque que nadie más tiene y luego escribe, no hace falta invalidar a
nadie. Las variantes MOESI y MESIF añaden estados para que una caché sirva el
dato a otra sin pasar por memoria.

Y el efecto que hay que conocer para programar: el **falso compartimiento**. Dos
hilos escriben variables distintas que caen en la misma línea de caché. No
comparten ningún dato, y aun así la línea viaja de un núcleo a otro en cada
escritura y el programa se frena hasta varias veces. Se corrige separando las
variables o rellenando hasta el tamaño de línea.

### Modelos de consistencia

| Modelo | Qué garantiza | Coste |
| --- | --- | --- |
| Secuencial | el resultado es el de alguna intercalación de los programas, respetando el orden de cada uno | alto: impide casi toda reordenación |
| Consistencia total de almacenamientos | permite adelantar lecturas a escrituras pendientes | el de x86 |
| Relajados | permiten más reordenaciones y exigen barreras explícitas | el de ARM y RISC-V |

La consistencia secuencial es lo que un programador supone sin darse cuenta, y
**ninguna máquina de propósito general la ofrece**, porque impide el búfer de
escritura y la ejecución fuera de orden.

De ahí que un programa con carreras de datos pueda comportarse distinto en x86 y
en ARM. Los lenguajes resuelven esto con su propio modelo de memoria —el de C11 y
C++11— y con operaciones atómicas que se traducen a las barreras que cada
arquitectura necesite. La regla práctica: un programa sin carreras se comporta
como si la consistencia fuera secuencial, y un programa con carreras no tiene
comportamiento definido. Los dos problemas se desarrollan en \cite{ortega2005} y
en \cite{hennessy2026}.
