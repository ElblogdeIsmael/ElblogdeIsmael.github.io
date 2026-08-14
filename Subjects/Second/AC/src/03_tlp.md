# Arquitecturas con paralelismo a nivel de hebra

Tema 3 del programa. Las máquinas que ejecutan varios flujos de control a la vez:
multihilo dentro de un núcleo, multinúcleo dentro de un chip y multiprocesador
dentro de una máquina.

## De dónde sale el paralelismo de hebra

El paralelismo a nivel de instrucción del tema 4 extrae concurrencia de **un**
flujo secuencial, y ahí hay un límite: las dependencias entre instrucciones
próximas. Duplicar unidades funcionales deja de servir cuando no hay
instrucciones independientes que ejecutar.

El paralelismo a nivel de hebra viene de otro sitio: de flujos que **por
construcción** son independientes. Un programa con varios hilos, varios programas
a la vez, o las peticiones concurrentes de un servidor. Es paralelismo explícito,
y por eso el trabajo se traslada al programador.

## Multihilo dentro de un núcleo

La idea: cuando un hilo se detiene —un fallo de caché, una dependencia larga—,
las unidades funcionales quedan ociosas. Si el núcleo guarda el estado de varios
hilos, puede ejecutar otro mientras tanto.

Lo que se duplica es el **estado arquitectónico**: contador de programa, banco de
registros, registro de estado y tablas de traducción. Lo que se comparte son las
unidades funcionales, las cachés y los predictores.

| Variante | Cuándo cambia de hilo | Coste de un cambio |
| --- | --- | --- |
| De grano grueso | ante una detención larga | algunos ciclos de vaciado |
| De grano fino | cada ciclo, por turno | ninguno |
| Simultáneo (SMT) | no cambia: emite instrucciones de varios hilos **en el mismo ciclo** | ninguno |

El multihilo simultáneo es el que se implementa hoy, con dos hilos por núcleo en
los procesadores de propósito general y hasta ocho en algunos servidores.

Tres consecuencias que conviene tener claras:

- **Dos hilos hardware no son dos núcleos.** Comparten unidades funcionales y
  cachés. La ganancia típica está entre el 15 % y el 30 %, no en el 100 %, y
  desaparece cuando los dos hilos compiten por el mismo recurso.
- **Puede empeorar.** Dos hilos con conjuntos de trabajo grandes se expulsan
  mutuamente de la caché. En cómputo intensivo con buena localidad, desactivar el
  SMT a veces mejora.
- **Es un canal lateral.** Compartir cachés y predictores permite que un hilo
  deduzca lo que hace el otro. Es la razón por la que en algunos entornos se
  desactiva por seguridad y por la que los planificadores evitan emparejar
  procesos de dominios distintos.

## Multinúcleo

Varios núcleos completos en el mismo chip. Cada uno con su cauce, sus registros y
su primer nivel de caché; los niveles superiores, compartidos.

### Jerarquía

| Nivel | Compartición típica | Latencia |
| --- | --- | --- |
| L1 de instrucciones y datos | privado por núcleo | 4 ciclos |
| L2 | privado o por pareja | 12 a 20 ciclos |
| L3 | compartido por todo el chip | 30 a 50 ciclos |
| Memoria principal | compartida | 200 a 300 ciclos |

El nivel compartido cumple dos funciones: aprovechar la capacidad cuando un
núcleo la necesita más que otro, y servir de punto de coherencia. La contrapartida
es la interferencia: un núcleo con un recorrido de memoria grande expulsa los
datos de los demás.

### Conexión interna

Con pocos núcleos basta un bus o un cruce de barras. Al crecer, ninguno de los
dos escala, y se pasa a **anillo** —Intel durante años— o a **malla**, que es lo
habitual con muchos núcleos. La consecuencia es que la latencia al nivel
compartido deja de ser uniforme: depende de dónde esté el núcleo y dónde el
segmento de caché.

### Núcleos heterogéneos

Los diseños actuales combinan núcleos grandes, orientados a rendimiento
monohilo, con núcleos pequeños y eficientes. La misma ISA, microarquitecturas
distintas.

El problema se traslada al sistema operativo: colocar mal un hilo crítico en un
núcleo pequeño arruina el rendimiento, y el planificador necesita información del
hardware sobre qué está haciendo cada hilo. Es un caso claro de decisión que ya no
se puede tomar solo en software.

## Multiprocesadores

Varios chips en la misma máquina, con memoria compartida. En la práctica siempre
NUMA: cada socket tiene sus canales de memoria, y acceder a la memoria del otro
socket cuesta bastante más.

### Consecuencias de NUMA

- **Política de primer toque.** La página se asigna en el nodo del hilo que la
  toca primero. Inicializar un vector grande desde un solo hilo deja toda la
  memoria en un nodo y estrangula el ancho de banda. Se corrige inicializando en
  paralelo con el mismo reparto que luego usa el cálculo.
- **Afinidad.** Fijar los hilos a núcleos concretos evita que el planificador los
  mueva y pierdan su caché y su localidad de memoria. Se controla con
  `OMP_PLACES` y `OMP_PROC_BIND`, o con `numactl` desde fuera.
- **Medir antes de suponer.** `numactl --hardware` da las distancias entre nodos,
  y `numastat` cuenta los accesos remotos.

### Coherencia a escala

Con muchos núcleos, el espionaje del bus deja de servir: la difusión de cada
invalidación satura la red. Se pasa a **directorio**, que registra qué cachés
tienen cada bloque y envía las invalidaciones solo a esas.

El coste es memoria: un directorio completo necesita un bit por caché y bloque,
lo que crece con el cuadrado del sistema. De ahí los directorios dispersos, que
guardan información solo de los bloques compartidos, y los jerárquicos.

## Sincronización

La coherencia garantiza que las lecturas ven el último valor escrito. No garantiza
atomicidad: un incremento sigue siendo leer, sumar y escribir.

### Instrucciones atómicas

| Instrucción | Semántica |
| --- | --- |
| `test-and-set` | escribe 1 y devuelve el valor anterior |
| `compare-and-swap` | si el valor es el esperado, lo sustituye; devuelve si tuvo éxito |
| `fetch-and-add` | suma y devuelve el valor anterior |
| `load-linked` / `store-conditional` | la escritura solo tiene efecto si nadie tocó la posición entre las dos |

`compare-and-swap` es la primitiva universal: con ella se construye cualquier
estructura sin cerrojos. La pareja de la última fila es la alternativa de las
arquitecturas RISC, y tiene la ventaja de no bloquear la línea de caché durante la
operación.

### Cerrojos

Un cerrojo ingenuo con `test-and-set` en bucle es correcto y muy malo: cada
intento escribe, y cada escritura invalida la línea en todos los núcleos que
esperan.

El **cerrojo con espera de lectura** lo corrige: se lee en bucle hasta ver el
cerrojo libre, y solo entonces se intenta la operación atómica. Mientras se lee,
la línea está compartida y no genera tráfico.

| Cerrojo | Propiedad |
| --- | --- |
| `test-and-set` | simple, mucho tráfico de coherencia |
| Con espera de lectura | mucho menos tráfico |
| Con retroceso exponencial | reduce la contención al fallar |
| De turno (*ticket*) | justo: se atiende en orden de llegada |
| En cola (MCS) | cada hilo espera en su propia variable: sin tráfico entre núcleos |

El cerrojo MCS es la respuesta correcta con muchos núcleos, porque convierte la
espera en local. Es también la base del cerrojo con cola que usa el núcleo de
Linux.

Y una decisión de política: **girar o dormir**. Girar desperdicia CPU pero evita
el coste de un cambio de contexto; dormir lo contrario. Los cerrojos adaptativos
giran un tiempo acotado y después duermen, que es lo que hacen las
implementaciones de biblioteca.

### Barreras

Ningún hilo pasa hasta que llegan todos. La implementación ingenua con un contador
atómico serializa a todos sobre la misma línea; la **barrera en árbol** combina
en $\log p$ pasos y escala.

Las barreras son caras y muchas son innecesarias. Quitar las implícitas con
`nowait` cuando el resultado no se necesita todavía es una de las optimizaciones
más rentables en OpenMP.

### Estructuras sin cerrojos

Construidas sobre `compare-and-swap`, garantizan progreso sin exclusión mutua. Son
más rápidas bajo contención alta y mucho más difíciles de escribir correctamente.

El **problema ABA** es su trampa característica: un valor cambia de A a B y vuelve
a A entre la lectura y el `compare-and-swap`, que tiene éxito aunque el estado
intermedio invalidara la operación. Se resuelve con contadores de versión junto al
puntero, o con `load-linked` y `store-conditional`, que detectan la escritura
intermedia aunque el valor coincida.

La regla práctica: usar las estructuras concurrentes de biblioteca y no escribir
las propias salvo necesidad demostrada. El tratamiento de estas arquitecturas y de
sus mecanismos de sincronización está en \cite{anguita2016} y en
\cite{hennessy2026}.
