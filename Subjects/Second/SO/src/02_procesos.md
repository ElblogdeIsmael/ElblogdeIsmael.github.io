# Procesos e hilos

Tema 2 del programa. La abstracción de proceso y la de hilo, cómo se
representan dentro del núcleo, el diagrama de estados por el que pasan y los
algoritmos con los que se decide quién ocupa la CPU.

## Proceso

Un proceso es un programa en ejecución junto con todo el estado que necesita
para continuar: memoria, registros, archivos abiertos, identidad y credenciales.
La diferencia entre programa y proceso es la que hay entre una receta y una
comida en preparación. El programa es pasivo y vive en disco; el proceso es
activo y vive mientras se ejecuta.

Un mismo programa puede dar lugar a muchos procesos simultáneos, y cada uno
tiene su propio estado. Comparten el texto —el código, que es de solo lectura—
y no comparten nada más.

### El bloque de control de proceso

El núcleo representa cada proceso con una estructura, el **PCB** (*Process
Control Block*), que en Linux es `struct task_struct`. Contiene:

| Grupo | Contenido |
| --- | --- |
| Identificación | PID, PID del padre, identificadores de usuario y grupo |
| Estado | estado actual, código de salida, señales pendientes y bloqueadas |
| Contexto de CPU | contador de programa, puntero de pila, registros generales y de estado |
| Memoria | puntero a la estructura del espacio de direcciones, tablas de páginas |
| Archivos | tabla de descriptores, directorio actual, raíz, máscara de creación |
| Planificación | prioridad, clase, tiempo consumido, CPU preferida |
| Contabilidad | tiempos de usuario y de sistema, fallos de página, límites de recursos |

El tamaño de esa estructura importa: es lo que hay que recorrer y actualizar en
cada cambio de contexto y en cada decisión de planificación.

### El espacio de direcciones

La memoria de un proceso Unix se divide en regiones con permisos distintos:

| Región | Permisos | Contenido |
| --- | --- | --- |
| Texto | lectura y ejecución | código del programa, compartible entre procesos |
| Datos inicializados | lectura y escritura | variables globales con valor inicial |
| BSS | lectura y escritura | variables globales a cero, no ocupa espacio en el ejecutable |
| Montículo | lectura y escritura | memoria dinámica, crece hacia direcciones altas |
| Pila | lectura y escritura | marcos de llamada, crece hacia direcciones bajas |

Entre montículo y pila queda un hueco que ambos consumen desde extremos
opuestos. Que el texto sea de solo lectura y no ejecutable la pila —el bit NX—
es la contramedida básica contra la inyección de código.

### Creación: `fork` y `exec`

Unix separa dos operaciones que otros sistemas juntan en una:

- **`fork()`** duplica el proceso llamante. Devuelve dos veces: 0 en el hijo y el
  PID del hijo en el padre. Es el único servicio con esa propiedad, y de ahí
  sale el patrón de programación habitual.
- **`exec()`** sustituye la imagen del proceso actual por otro programa. No crea
  un proceso nuevo: reutiliza el que llama. Si tiene éxito no vuelve.

La separación es lo que permite que el hijo ajuste su entorno —redirigir
descriptores, cambiar de directorio, bajar privilegios— entre las dos
llamadas. Es exactamente lo que hace un intérprete de órdenes al montar una
tubería. El repertorio completo de servicios implicados y sus casos límite está
en \cite{kerrisk2010} y en \cite{stevens2005}.

```c
pid_t pid = fork();
if (pid < 0) {
    perror("fork");
} else if (pid == 0) {
    /* Hijo: se redirige la salida antes de reemplazar la imagen. */
    int fd = open("salida.txt", O_WRONLY | O_CREAT | O_TRUNC, 0644);
    dup2(fd, STDOUT_FILENO);
    close(fd);
    execlp("ls", "ls", "-l", NULL);
    _exit(127);          /* solo se llega aqui si exec fallo */
} else {
    int estado;
    waitpid(pid, &estado, 0);
}
```

Duplicar el espacio de direcciones entero sería carísimo, y casi siempre inútil
porque el hijo va a llamar a `exec` inmediatamente. Se resuelve con **copia al
escribir**: padre e hijo comparten los marcos físicos marcados de solo lectura,
y el primer intento de escritura provoca una excepción que el núcleo atiende
duplicando solo esa página.

### Terminación, zombis y huérfanos

Un proceso termina llamando a `exit()` o recibiendo una señal que lo mata. Al
terminar no desaparece del todo: el núcleo conserva su entrada en la tabla de
procesos con el código de salida hasta que el padre lo recoge con `wait()`. En
ese intervalo el proceso es un **zombi**: no consume CPU ni memoria, pero ocupa
un PID.

Un padre que no llama a `wait()` acumula zombis hasta agotar la tabla de
procesos. Es un fallo de programación, no del sistema.

El caso simétrico es el **huérfano**: el padre termina antes que el hijo. El
núcleo reasigna el huérfano al proceso 1, que llama a `wait()` en un bucle
precisamente para recogerlos. Un huérfano no es un problema; un zombi con un
padre vivo que nunca lo recoge, sí.

## Hilos

Un hilo es un flujo de ejecución dentro de un proceso. Los hilos de un proceso
comparten espacio de direcciones, descriptores de archivo y señales, y tienen
propios el contador de programa, los registros y la pila.

| Recurso | Compartido entre hilos | Propio de cada hilo |
| --- | --- | --- |
| Código y datos globales | sí | — |
| Montículo | sí | — |
| Descriptores de archivo | sí | — |
| Pila | — | sí |
| Registros y contador de programa | — | sí |
| Máscara de señales | — | sí |
| `errno` | — | sí, por almacenamiento local al hilo |

Que `errno` sea local al hilo es un detalle con historia: en las primeras
bibliotecas era una variable global, y dos hilos que fallaban a la vez se
pisaban el código de error.

### Por qué hilos y no procesos

- Crear un hilo cuesta un orden de magnitud menos que crear un proceso, porque
  no hay que duplicar el espacio de direcciones.
- El cambio entre hilos del mismo proceso no invalida la TLB: las tablas de
  páginas son las mismas.
- La comunicación es memoria compartida directa, sin llamadas al sistema.

Y el precio: **no hay aislamiento**. Un puntero corrupto en un hilo corrompe a
todos, y toda estructura compartida necesita sincronización explícita. Un fallo
que mata un hilo mata el proceso entero.

### Modelos de implementación

| Modelo | Dónde se planifican | Consecuencia |
| --- | --- | --- |
| N:1, en biblioteca | espacio de usuario | cambio rapidísimo, pero una llamada bloqueante detiene todos los hilos y no hay paralelismo real |
| 1:1, en núcleo | núcleo | cada hilo es planificable y bloquea solo a sí mismo; el coste de creación es mayor |
| M:N, híbrido | ambos | teóricamente lo mejor de los dos; en la práctica la complejidad no compensó |

Linux implementa 1:1: `clone()` crea una tarea que comparte con la llamante los
recursos que se indiquen mediante banderas, y `fork()` y la creación de hilos
son la misma llamada con distintas banderas. Solaris intentó M:N y acabó
volviendo a 1:1. Las **corrutinas** y las *goroutines* de Go recuperan la idea
M:N en el espacio de usuario, pero para tareas que se bloquean en
entrada/salida, no para paralelismo de CPU.

## Diagrama de estados

Un proceso o hilo pasa por cinco estados:

```
                    admitido            despachado           salida
     [Nuevo] ------------------> [Listo] ----------> [Ejecucion] ------> [Terminado]
                                   ^   \                 |
                    fin de espera  |    \  expulsion     | espera un evento
                                   |     <---------------+
                              [Bloqueado] <--------------+
```

| Estado | Significado |
| --- | --- |
| Nuevo | creado, aún sin admitir en la cola de listos |
| Listo | podría ejecutarse, espera turno de CPU |
| En ejecución | ocupa una CPU |
| Bloqueado | espera un evento; aunque hubiera CPU libre no podría avanzar |
| Terminado | acabó, se conserva su registro hasta que el padre lo recoge |

Las transiciones que conviene distinguir:

- **Listo → Ejecución.** La decide el planificador. Es la única transición que
  elige una política.
- **Ejecución → Listo.** Expulsión: se agotó el cuanto o llegó alguien más
  prioritario. El proceso podía seguir.
- **Ejecución → Bloqueado.** El proceso pidió algo que no está: una lectura de
  disco, un dato de red, un cerrojo ocupado. Es voluntaria.
- **Bloqueado → Listo.** Llegó el evento. **No pasa a ejecución directamente**:
  vuelve a la cola de listos y compite por la CPU. Confundir estas dos es el
  error clásico del tema.

Los sistemas con memoria virtual añaden dos estados suspendidos, para procesos
cuyas páginas se han expulsado a disco: *listo y suspendido* y *bloqueado y
suspendido*. La suspensión la decide el planificador de medio plazo.

Linux nombra los estados de otra forma, y la diferencia tiene consecuencias
prácticas: `TASK_INTERRUPTIBLE` es un bloqueo que una señal puede romper, y
`TASK_UNINTERRUPTIBLE` uno que no. Un proceso atascado en el segundo estado,
que `ps` muestra con `D`, no se puede matar ni con `SIGKILL`; es lo que ocurre
cuando un disco o un montaje de red dejan de responder.

## Cambio de contexto

Guardar el estado del proceso saliente y restaurar el del entrante. Los pasos:

1. Un evento entra en el núcleo: interrupción, excepción o llamada al sistema.
2. Se guardan los registros del proceso saliente en su PCB.
3. Se actualiza su estado y su contabilidad.
4. El planificador elige al siguiente.
5. Se conmuta el espacio de direcciones —cargar el registro que apunta a las
   tablas de páginas—, lo que invalida entradas de la TLB.
6. Se restauran los registros del entrante y se vuelve a modo usuario.

El coste directo es de unos pocos microsegundos. El indirecto es mayor y no se
mide fácilmente: las cachés quedan llenas de datos del proceso anterior, y el
entrante avanza despacio hasta volver a llenarlas. Los identificadores de
espacio de direcciones (ASID, PCID) reducen la parte de la TLB, porque permiten
que convivan entradas de varios espacios sin vaciarlas.

## Planificación de la CPU

### Criterios

Cinco medidas, y ninguna política las optimiza todas a la vez:

| Criterio | Definición | Se quiere |
| --- | --- | --- |
| Uso de CPU | fracción de tiempo ocupada | máximo |
| Productividad | procesos terminados por unidad de tiempo | máxima |
| Tiempo de retorno | desde la llegada hasta la terminación | mínimo |
| Tiempo de espera | tiempo total en la cola de listos | mínimo |
| Tiempo de respuesta | desde la llegada hasta la primera salida | mínimo |

En un sistema interactivo pesa el tiempo de respuesta; en uno por lotes, la
productividad. Son objetivos incompatibles, y por eso hay más de un algoritmo.

### Apropiativa y no apropiativa

Una política es **no apropiativa** si el proceso conserva la CPU hasta que se
bloquea o termina, y **apropiativa** si el núcleo puede quitársela. La segunda
necesita el temporizador del tema 1 y complica el núcleo: si se expulsa un
proceso que estaba dentro de una llamada al sistema, las estructuras que estuviera
modificando quedan a medias, y hace falta sincronización dentro del propio
núcleo.

### Los algoritmos

**FCFS**, primero en llegar primero en ser servido. No apropiativo, cola FIFO.
Trivial y justo en apariencia, pero sufre el **efecto convoy**: un proceso largo
al frente hace esperar a todos los cortos detrás, y el tiempo medio de espera se
dispara.

**SJF**, primero el más corto. Minimiza demostrablemente el tiempo medio de
espera. Su problema es que exige conocer de antemano la duración de la siguiente
ráfaga, que no se conoce; se estima con una media exponencial de las anteriores:

$$\tau_{n+1} = \alpha\, t_n + (1-\alpha)\, \tau_n$$

donde $t_n$ es la ráfaga real observada y $\alpha \in [0,1]$ pondera el pasado
reciente frente a la historia. Con $\alpha = 0$ la estimación nunca cambia; con
$\alpha = 1$ solo cuenta la última ráfaga. Su versión apropiativa, **SRTF**, es
mejor todavía en tiempo medio de espera y hace morir de hambre a los procesos
largos.

**Turno rotatorio** (*round robin*). FCFS con un cuanto de tiempo: agotado el
cuanto, el proceso vuelve al final de la cola. La elección del cuanto lo decide
todo:

- Cuanto grande: degenera en FCFS.
- Cuanto pequeño: buen tiempo de respuesta, pero los cambios de contexto se
  comen la CPU.

La regla práctica, recogida en \cite{silberschatz2006}, es que el 80 % de las
ráfagas quepan dentro de un cuanto, lo que sitúa el valor típico entre 10 y 100
milisegundos.

**Por prioridades.** A cada proceso un número; primero el más prioritario. El
riesgo es la **inanición**: un proceso de baja prioridad puede no ejecutarse
nunca. Se corrige con **envejecimiento**, subiendo la prioridad de los que
llevan mucho esperando.

**Colas multinivel.** Varias colas con políticas propias —una para procesos
interactivos con turno rotatorio, otra por lotes con FCFS— y una política entre
colas. En su versión **realimentada** los procesos cambian de cola según su
comportamiento: quien agota el cuanto baja, quien se bloquea antes sube. Así el
sistema deduce quién es interactivo y quién no, sin que nadie se lo diga. Es el
esquema que usaron las variantes clásicas de Unix.

### Un ejemplo comparado

Cuatro procesos que llegan en el instante 0 con ráfagas de 8, 4, 9 y 5 unidades,
en ese orden, y un cuanto de 4 para el turno rotatorio:

| Algoritmo | Orden de servicio | Tiempo medio de espera |
| --- | --- | --- |
| FCFS | P1, P2, P3, P4 | $(0+8+12+21)/4 = 10{,}25$ |
| SJF | P2, P4, P1, P3 | $(0+4+9+17)/4 = 7{,}50$ |
| Turno rotatorio | P1, P2, P3, P4, P1, P3, P4, P3 | $(12+4+16+15)/4 = 11{,}75$ |

SJF gana en espera media; el turno rotatorio pierde en esa medida y gana en la
que no aparece en la tabla, el tiempo de respuesta: P4 empieza a ejecutarse en
el instante 12 en vez de en el 21.

### Multiprocesadores

Con varias CPU aparecen problemas que no existían:

- **Afinidad.** Migrar un proceso a otra CPU pierde su caché. El planificador
  prefiere devolverlo donde estaba; la afinidad blanda es una preferencia y la
  dura, una imposición del programador.
- **Equilibrado de carga.** Una CPU ociosa con otra saturada desperdicia la
  máquina. Se corrige empujando trabajo desde la cargada o tirando de él desde
  la ociosa, y ambas cosas rompen la afinidad.
- **NUMA.** Si la memoria está repartida entre nodos, un proceso debe
  ejecutarse en el nodo donde está su memoria. Planificar y asignar memoria
  dejan de ser decisiones independientes.
- **Multihilo simultáneo.** Dos hilos hardware en un mismo núcleo comparten
  unidades funcionales y caché: no son dos CPU. Un planificador que los trate
  como tales reparte mal.

### Tiempo real

Dos algoritmos con garantías demostrables para tareas periódicas, cada una con
periodo $T_i$ y tiempo de cómputo $C_i$:

- **Tasa monótona** (RM). Prioridad estática, mayor cuanto menor es el periodo.
  Es óptimo entre los de prioridad fija. Admite el conjunto de tareas si

  $$\sum_{i=1}^{n} \frac{C_i}{T_i} \le n\left(2^{1/n}-1\right)$$

  cota que tiende a $\ln 2 \approx 0{,}693$ cuando $n$ crece. La condición es
  suficiente, no necesaria: un conjunto que no la cumpla puede seguir siendo
  planificable.

- **Plazo más próximo primero** (EDF). Prioridad dinámica: la mayor para la
  tarea cuyo plazo está más cerca. Planifica cualquier conjunto que cumpla
  $\sum C_i/T_i \le 1$, así que aprovecha el 100 % de la CPU. A cambio, su
  comportamiento al sobrecargarse es mucho peor: pierde plazos de forma
  impredecible, mientras que RM sacrifica primero las tareas de periodo largo.

### Linux

El planificador por omisión desde 2007 es **CFS**, el planificador
completamente justo. No usa cuantos fijos: mantiene por tarea un **tiempo
virtual de ejecución** que avanza a un ritmo inversamente proporcional a su
peso, y siempre elige la tarea con el menor. Las tareas se guardan en un árbol
rojinegro ordenado por ese tiempo, así que elegir es tomar el nodo más a la
izquierda, en tiempo constante amortizado.

El diseño de esa estructura y el detalle de cómo se calcula el peso están
descritos en \cite{love2010}. El valor `nice`, de −20 a 19, se traduce en un
peso, y cada punto supone aproximadamente un 10 % de CPU. Junto a CFS conviven las clases de tiempo real
`SCHED_FIFO` y `SCHED_RR`, siempre más prioritarias, y `SCHED_DEADLINE`, que
implementa EDF. Desde 2024 CFS ha sido reemplazado por **EEVDF**, que añade a la
justicia una noción explícita de plazo para mejorar la latencia de las tareas
interactivas.
