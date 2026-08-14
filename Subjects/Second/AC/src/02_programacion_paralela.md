# Programación paralela

Tema 2 del programa. Cómo se descompone un problema, qué ofrecen los dos modelos
de programación y qué errores aparecen que no existen en un programa secuencial.

## Del problema al programa

Cuatro pasos, en este orden:

1. **Descomposición.** Partir el trabajo en tareas.
2. **Asignación.** Repartir las tareas entre procesos o hilos.
3. **Orquestación.** Comunicar y sincronizar.
4. **Correspondencia.** Situar los hilos en los procesadores físicos.

Los dos primeros determinan cuánto paralelismo hay; los dos últimos, cuánto se
aprovecha.

### Formas de descomponer

| Descomposición | Se reparte | Ejemplo |
| --- | --- | --- |
| De dominio | los datos | cada hilo procesa un trozo de la matriz |
| Funcional | las funciones | un hilo lee, otro comprime, otro escribe |
| Recursiva | el árbol de llamadas | divide y vencerás |
| Especulativa | se ejecutan alternativas antes de saber cuál vale | búsqueda con poda |

La de dominio es la que más escala, porque el número de tareas crece con el
tamaño del problema. La funcional está acotada por el número de funciones, y por
eso sirve como complemento y no como estrategia principal.

### Equilibrado de carga

Repartir por igual el número de tareas no reparte por igual el trabajo si las
tareas cuestan distinto. Dos enfoques:

- **Estático.** El reparto se decide antes de ejecutar. Sin sobrecarga, y solo
  vale si el coste de cada tarea es previsible.
- **Dinámico.** Los hilos toman trabajo de una cola común según terminan. Se
  adapta al desequilibrio y cuesta sincronización sobre la cola.

El caso que lo ilustra es un bucle en el que el trabajo por iteración crece con el
índice, como el cálculo del triángulo inferior de una matriz. Un reparto en
bloques contiguos deja al último hilo con mucho más trabajo; un reparto cíclico lo
equilibra sin coste adicional.

El **robo de trabajo** es la forma refinada del reparto dinámico: cada hilo tiene
su propia cola y, cuando se queda sin trabajo, roba del extremo opuesto de la cola
de otro. Reduce la contención porque en el caso común nadie toca la cola ajena.

## Memoria compartida: OpenMP

El modelo dominante dentro de un nodo. El programa arranca con un hilo y crea
equipos de hilos en las regiones marcadas con directivas, sin reescribir la
estructura del programa.

```c
#pragma omp parallel for reduction(+:suma) schedule(static)
for (int i = 0; i < n; i++) {
    suma += v[i] * w[i];
}
```

### Alcance de las variables

Es la fuente principal de errores, y la única decisión que el compilador no puede
tomar:

| Cláusula | Efecto |
| --- | --- |
| `shared` | una sola copia, visible a todos. Por omisión para las de fuera |
| `private` | una copia por hilo, **sin inicializar** |
| `firstprivate` | copia por hilo, inicializada con el valor de entrada |
| `lastprivate` | copia por hilo; al salir se conserva la de la última iteración |
| `reduction(op:var)` | copia privada por hilo y combinación final con `op` |

`private` no inicializa. Un acumulador declarado `private` empieza con basura, y
el programa da resultados distintos en cada ejecución sin fallar. `reduction` es
lo que hay que usar para acumular, y además evita la carrera sobre la variable
compartida.

Escribir `default(none)` obliga a declarar el alcance de cada variable. Es más
trabajo y convierte el error silencioso en un error de compilación.

### Reparto de iteraciones

| Planificación | Reparto | Cuándo |
| --- | --- | --- |
| `static` | bloques fijos, decididos antes | iteraciones de coste uniforme |
| `dynamic` | bloques bajo demanda | coste variable e impredecible |
| `guided` | bloques que decrecen | compromiso entre las dos |
| `auto`, `runtime` | lo decide el compilador o una variable de entorno | para experimentar |

El tamaño de bloque importa por dos razones opuestas: pequeño equilibra mejor y
aumenta la sincronización sobre el contador compartido; grande hace lo contrario.
Y con `static` y bloque 1 el reparto es cíclico, que es la solución al bucle
triangular de más arriba.

### Sincronización

| Construcción | Qué hace |
| --- | --- |
| `barrier` | ningún hilo pasa hasta que llegan todos |
| `critical` | sección de exclusión mutua |
| `atomic` | actualización atómica de una variable; más barato que `critical` |
| `single` | lo ejecuta un hilo; los demás esperan al final |
| `master` | lo ejecuta el hilo 0, **sin barrera** |
| `nowait` | suprime la barrera implícita del final de un bucle |

Las construcciones de reparto llevan barrera implícita al final. `nowait` la
quita cuando el resultado no se necesita todavía, y es una de las optimizaciones
más rentables cuando hay varios bucles seguidos independientes.

La diferencia entre `single` y `master` se olvida constantemente: `single` tiene
barrera y `master` no. Usar `master` donde hacía falta `single` deja a los demás
hilos avanzando sobre datos que aún no están.

### Tareas

Para paralelismo irregular, donde el número de unidades de trabajo no se conoce de
antemano:

```c
#pragma omp parallel
#pragma omp single
{
    recorrer(raiz);          /* genera tareas al descender */
}

void recorrer(nodo *n) {
    if (!n) return;
    #pragma omp task
    recorrer(n->izq);
    #pragma omp task
    recorrer(n->der);
    procesar(n);
}
```

El patrón `parallel` + `single` es obligatorio: el equipo se crea con `parallel`
y un solo hilo genera las tareas, que los demás ejecutan. Sin `single`, cada hilo
generaría el árbol entero.

## Paso de mensajes: MPI

El modelo para multicomputadores. Todos los procesos ejecutan el mismo programa y
se distinguen por su identificador dentro del comunicador.

```c
MPI_Init(&argc, &argv);
MPI_Comm_rank(MPI_COMM_WORLD, &yo);
MPI_Comm_size(MPI_COMM_WORLD, &n);

if (yo == 0) {
    MPI_Send(datos, cuenta, MPI_DOUBLE, 1, ETIQUETA, MPI_COMM_WORLD);
} else if (yo == 1) {
    MPI_Recv(datos, cuenta, MPI_DOUBLE, 0, ETIQUETA, MPI_COMM_WORLD,
             MPI_STATUS_IGNORE);
}
MPI_Finalize();
```

| Clase | Operaciones | Comentario |
| --- | --- | --- |
| Punto a punto bloqueante | `MPI_Send`, `MPI_Recv` | `MPI_Send` puede volver antes de que se reciba, según el tamaño |
| Punto a punto no bloqueante | `MPI_Isend`, `MPI_Irecv`, `MPI_Wait` | permiten solapar cómputo y comunicación |
| Colectivas | `MPI_Bcast`, `MPI_Scatter`, `MPI_Gather`, `MPI_Reduce`, `MPI_Allreduce` | implementadas con algoritmos en árbol; mejores que hacerlas a mano |
| Sincronización | `MPI_Barrier` | rara vez necesaria si las colectivas ya sincronizan |

Dos trampas concretas:

- **`MPI_Send` bloqueante no garantiza que haya un receptor.** Con mensajes
  pequeños el sistema los copia a un búfer y devuelve; con mensajes grandes
  espera. Un programa en el que dos procesos se envían mutuamente antes de recibir
  funciona con datos pequeños y **se bloquea al crecer el tamaño**. La solución es
  `MPI_Sendrecv` o las versiones no bloqueantes.
- **Las colectivas las tienen que ejecutar todos los procesos del comunicador.**
  Una colectiva dentro de un `if` que solo cumple un proceso bloquea a todos.

### Modelo híbrido

En un clúster de nodos multinúcleo lo natural es combinar: MPI entre nodos y
OpenMP dentro de cada uno. Reduce el número de procesos MPI, y con él la memoria
de los búferes de comunicación y el número de mensajes. Su dificultad es que el
soporte de hilos de MPI hay que pedirlo explícitamente y no todos los niveles
están disponibles en toda implementación.

## Errores propios del paralelismo

### Carrera de datos

Dos hilos acceden a la misma posición sin sincronización y al menos uno escribe.
El resultado depende del orden real de ejecución.

```c
/* incorrecto */
#pragma omp parallel for
for (int i = 0; i < n; i++) suma += v[i];
```

`suma += v[i]` no es una operación: es leer, sumar y escribir. Dos hilos pueden
leer el mismo valor y una de las dos actualizaciones se pierde. El resultado suele
ser **casi** correcto, que es lo que hace difícil detectarlo: un error del 0,1 %
pasa por ruido numérico.

Se corrige con `reduction(+:suma)`, no con `critical`, que serializaría el bucle
entero.

### Interbloqueo

Dos hilos esperan cada uno un recurso que el otro tiene. Las cuatro condiciones de
Coffman se dan a la vez: exclusión mutua, retención y espera, ausencia de
expropiación y espera circular. Romper cualquiera lo evita, y la más práctica es
la última: **tomar siempre los cerrojos en el mismo orden global**.

### Inanición y convoy

Un hilo no llega a progresar porque otros se le adelantan siempre, o todos se
alinean detrás del mismo cerrojo y el programa avanza al ritmo de la sección
crítica. Los dos se atacan reduciendo el tamaño de la sección crítica y
sustituyendo el cerrojo global por varios de grano fino.

### Sobrecarga

El paralelismo cuesta: crear hilos, sincronizar, comunicar. Un bucle de cien
iteraciones triviales paralelizado es **más lento** que el secuencial. La cláusula
`if` de OpenMP permite decidir en ejecución:

```c
#pragma omp parallel for if(n > 10000)
```

### Cómo se detectan

| Herramienta | Qué encuentra |
| --- | --- |
| `valgrind --tool=helgrind` | carreras y errores de uso de cerrojos |
| `-fsanitize=thread` | carreras, con mucho menos sobrecoste |
| `perf stat` | ciclos, fallos de caché, instrucciones |
| `perf c2c` | falso compartimiento y contención de líneas de caché |

Las dos primeras encuentran lo que las pruebas no: una carrera puede no
manifestarse en mil ejecuciones y aparecer en la máquina del profesor. Ejecutar
un programa paralelo y ver que da el resultado correcto **no es una comprobación**.

## Patrones

Un repertorio pequeño cubre la mayor parte de los casos:

| Patrón | Estructura | Ejemplo |
| --- | --- | --- |
| Paralelismo de datos | la misma operación sobre muchos elementos | producto escalar |
| Descomposición geométrica | el dominio se divide y los bordes se intercambian | diferencias finitas |
| Divide y vencerás | recursión con tareas | ordenación por mezcla |
| Cauce | etapas encadenadas, cada una en un hilo | procesado de flujo |
| Maestro y trabajadores | uno reparte, los demás ejecutan | trabajo irregular |
| Reducción | combinar resultados parciales con un operador asociativo | suma, máximo |

La reducción exige que el operador sea asociativo, y **la suma en coma flotante
no lo es**. Un mismo programa con distinto número de hilos puede dar resultados
que difieren en los últimos dígitos. No es un error: es el orden de las
operaciones. Cuando la reproducibilidad importa, hay que fijar el orden de
combinación aunque cueste rendimiento. El desarrollo completo de OpenMP está en
\cite{chapman2008}, y los patrones y su análisis en \cite{rauber2023} y
\cite{wilkinson2005}.
