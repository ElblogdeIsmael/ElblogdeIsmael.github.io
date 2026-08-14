# Estructuras de sistemas operativos

Tema 1 del programa. Qué papel cumple un sistema operativo, qué apoyo necesita
del hardware para cumplirlo, cómo se reparte su código en capas y qué formas
toma ese reparto cuando el destino no es un ordenador de propósito general.

## Qué es un sistema operativo

Un sistema operativo es el programa que se interpone entre las aplicaciones y la
máquina. Hace dos trabajos que conviene no mezclar:

- **Máquina extendida.** Ofrece abstracciones —proceso, hilo, archivo,
  dispositivo, espacio de direcciones— que ocultan la interfaz real del
  hardware. Una aplicación escribe en un archivo; no programa el controlador de
  disco.
- **Gestor de recursos.** Reparte CPU, memoria, disco y dispositivos entre
  programas que compiten, y decide en qué orden y durante cuánto tiempo.

Las dos caras se contradicen a menudo. La abstracción quiere que el programa no
se entere de nada; la gestión quiere control sobre lo que el programa hace. Casi
todas las decisiones de diseño que siguen son un punto de equilibrio entre las
dos. La distinción se plantea en estos términos en \cite{tanenbaum2009} y
en \cite{stallings2018}.

## El apoyo del hardware

Sin tres mecanismos del procesador, un sistema operativo multiprogramado no se
puede construir. No son opcionales: son la frontera que separa un sistema
operativo de una biblioteca.

### Modos de ejecución

El procesador distingue al menos dos niveles de privilegio:

| Modo | Otros nombres | Qué permite |
| --- | --- | --- |
| Núcleo | supervisor, kernel, anillo 0 | todo el repertorio de instrucciones, incluidas las privilegiadas |
| Usuario | anillo 3 | solo el subconjunto no privilegiado |

Son privilegiadas las instrucciones que pueden comprometer al resto del sistema:
cambiar el registro que apunta a las tablas de páginas, habilitar o inhibir
interrupciones, acceder directamente a puertos de entrada/salida, detener el
procesador. Ejecutar una de ellas en modo usuario no la ejecuta: provoca una
excepción, y el control pasa al sistema operativo.

El bit de modo vive en un registro de estado del procesador. Cambiarlo de
usuario a núcleo no es una instrucción normal, precisamente porque entonces no
protegería nada: solo cambia en los tres eventos que se ven más abajo.

### Interrupciones, excepciones y trampas

El procesador abandona el flujo de instrucciones actual en tres situaciones,
que se implementan igual y significan cosas muy distintas:

| Evento | Origen | Síncrono | Ejemplo |
| --- | --- | --- | --- |
| Interrupción | dispositivo externo | no | el disco terminó una transferencia |
| Excepción | la propia instrucción | sí | división por cero, fallo de página |
| Trampa (`trap`) | instrucción deliberada | sí | llamada al sistema |

En los tres casos el hardware guarda el contador de programa y el registro de
estado, pasa a modo núcleo y salta a una dirección que fijó el sistema operativo
durante el arranque. Esa dirección sale de una tabla de vectores indexada por el
número del evento.

La distinción importa para el diseño: una excepción es reproducible y atribuible
a un proceso concreto, una interrupción no. Por eso un fallo de página se
resuelve en el contexto del proceso que lo causó, mientras que la rutina de una
interrupción de disco no puede suponer nada sobre qué proceso está en la CPU.

### El temporizador

Un reloj programable interrumpe periódicamente al procesador. Es lo único que
garantiza que el sistema operativo recupere el control de un programa que no lo
cede voluntariamente. Sin temporizador no hay multiprogramación con reparto de
tiempo: un bucle infinito en modo usuario congelaría la máquina.

El periodo del *tick* fija la granularidad con la que se puede planificar. Los
núcleos modernos lo hacen configurable, y los sistemas *tickless* llegan a
desprogramarlo cuando la CPU está ociosa, para no despertar un procesador que
podría estar en un estado de bajo consumo.

### Protección de memoria

La unidad de gestión de memoria traduce cada dirección que emite el procesador y
comprueba los permisos de la región a la que pertenece. Un acceso fuera de lo
permitido genera una excepción antes de que llegue a la memoria física. El
detalle está en el tema 3; aquí basta con retener que la protección es hardware
y que el sistema operativo solo programa las tablas.

## La llamada al sistema

Es la única puerta por la que una aplicación pide un servicio al núcleo. La
secuencia, con los servicios POSIX como referencia:

1. La aplicación llama a una función de la biblioteca de C, por ejemplo
   `write()`. Esa función no es la llamada al sistema: es su envoltorio.
2. El envoltorio coloca el número de servicio y los argumentos donde el convenio
   de la arquitectura manda, casi siempre en registros.
3. Ejecuta la instrucción de trampa (`syscall` en x86-64, `svc` en ARM).
4. El hardware pasa a modo núcleo y salta al manejador.
5. El manejador valida el número, comprueba los argumentos —incluidos los
   punteros, que apuntan a memoria de usuario y pueden ser inválidos— y llama a
   la rutina correspondiente.
6. Al volver, el resultado se deja en un registro y el envoltorio lo traduce al
   convenio de C: valor negativo a `-1` con `errno` puesto.

Ese último punto explica una confusión frecuente. `errno` no lo escribe el
núcleo: lo escribe la biblioteca a partir del código de error que el núcleo
devuelve.

El coste de una llamada al sistema no está en la trampa, que son unos cientos de
ciclos, sino en lo que arrastra: invalidación de cachés, posible cambio de
tablas de páginas y, desde las mitigaciones de Spectre y Meltdown, vaciados
adicionales del predictor de saltos y de la TLB. Por eso las interfaces
modernas de entrada/salida —`io_uring`, `epoll`— se diseñan para amortizar una
transición entre muchas operaciones.

## Arquitecturas de sistemas operativos

### Monolítico

Todo el sistema operativo se ejecuta en modo núcleo, en un único espacio de
direcciones: planificador, gestión de memoria, sistemas de archivos y
manejadores de dispositivos comparten memoria y se llaman entre sí como
funciones ordinarias.

- **A favor:** rendimiento. Una llamada interna es un salto, no un mensaje.
- **En contra:** un fallo en cualquier parte se lleva el sistema entero, y la
  superficie de código privilegiado es enorme.

El monolítico puro apenas existe. Linux, Windows NT y los BSD son **monolíticos
modulares**: el núcleo carga y descarga módulos en tiempo de ejecución, pero
esos módulos siguen ejecutándose en modo núcleo. La modularidad es de
compilación y despliegue, no de aislamiento.

### Microkernel

En modo núcleo queda lo mínimo indispensable: paso de mensajes, planificación
básica y gestión del espacio de direcciones. Sistemas de archivos, pila de red y
manejadores pasan a ser procesos de usuario, llamados *servidores*.

- **A favor:** un manejador que falla se reinicia sin tocar el resto. La base de
  cómputo confiable cabe en unas miles de líneas, y en el caso de seL4 está
  verificada formalmente.
- **En contra:** lo que en un monolítico era una llamada a función pasa a ser
  varios mensajes con sus cambios de contexto.

Mach, QNX, MINIX 3 y seL4 son los ejemplos habituales. El coste del paso de
mensajes fue el argumento contra el enfoque durante los años noventa; L4 lo
redujo un orden de magnitud y el debate se reabrió. La defensa del enfoque, con
MINIX 3 como caso de estudio, está en \cite{tanenbaum2009}.

### Híbrido

Un microkernel al que se le devuelven al modo núcleo los servicios cuyo coste de
comunicación resultaba inaceptable. XNU, el núcleo de macOS, combina Mach con
código BSD en el mismo espacio de direcciones. La etiqueta describe una decisión
de ingeniería, no una arquitectura distinta.

### Máquinas virtuales y contenedores

Dos formas de aislar que se confunden a menudo:

| | Hipervisor | Contenedor |
| --- | --- | --- |
| Qué virtualiza | el hardware | la vista del sistema operativo |
| Núcleos en juego | uno por máquina virtual, más el del anfitrión | uno solo, compartido |
| Frontera de aislamiento | tablas de páginas anidadas y modo raíz del procesador | espacios de nombres y grupos de control |
| Coste de arranque | segundos | milisegundos |

Un hipervisor de tipo 1 se ejecuta sobre el hardware desnudo (Xen, ESXi); uno de
tipo 2 se apoya en un sistema operativo anfitrión (VirtualBox). Un contenedor no
es una máquina virtual: comparte el núcleo, así que una vulnerabilidad de
escalada en el núcleo compromete a todos los contenedores del anfitrión.

### Exokernel y unikernel

El exokernel lleva la idea contraria al microkernel: en vez de subir las
abstracciones a procesos de usuario, las elimina y expone el hardware con
protección pero sin abstracción, dejando que cada aplicación enlace la
biblioteca de sistema operativo que le convenga. El unikernel es su versión
práctica: una única aplicación enlazada con las partes del sistema que necesita,
en un solo espacio de direcciones, arrancando directamente sobre el hipervisor.

## Estructura interna: capas y mecanismos

Independientemente de la arquitectura, el código se organiza en cuatro estratos:

1. **Capa dependiente de la máquina.** Arranque, cambio de contexto, tablas de
   páginas, controlador de interrupciones. Se reescribe por arquitectura.
2. **Mecanismos.** Planificar, asignar marcos, planificar peticiones de disco.
3. **Políticas.** Qué proceso va primero, qué página se expulsa, qué petición se
   sirve antes.
4. **Interfaz.** Llamadas al sistema y sistemas de archivos virtuales.

La separación entre mecanismo y política es la regla de diseño más rentable del
tema: permite cambiar el planificador sin tocar el cambio de contexto. Linux la
aplica con las clases de planificación y con los planificadores de bloque
intercambiables.

## Arranque

El camino desde el encendido hasta el primer proceso de usuario:

1. **Firmware** (UEFI o BIOS). Inicializa la memoria y los buses, y localiza el
   cargador.
2. **Cargador de arranque** (GRUB, systemd-boot). Lee el núcleo y, si lo hay, el
   sistema de archivos inicial en memoria.
3. **Núcleo.** Descomprime, monta la tabla de páginas definitiva, detecta el
   hardware, monta la raíz.
4. **Primer proceso.** El núcleo crea el proceso 1 —`init`, `systemd`— que
   arranca todo lo demás. Si ese proceso muere, el núcleo entra en pánico: no
   hay a quién reasignar los procesos huérfanos.

El sistema de archivos inicial en memoria (`initramfs`) existe por un problema
de circularidad: el núcleo necesita el manejador del disco para montar la raíz,
y ese manejador está en la raíz. Se resuelve cargando en memoria un sistema
mínimo que contiene los módulos imprescindibles. La secuencia completa, con el
detalle de qué hace cada fase del núcleo de Linux, está en \cite{mauerer2008}.

## Sistemas operativos de propósito específico

Cuando el destino no es un ordenador de propósito general, las prioridades
cambian y con ellas el diseño.

### Tiempo real

Lo que define un sistema de tiempo real no es la velocidad, sino el
**determinismo**: la garantía de que una respuesta llega antes de un plazo. Un
sistema rápido en el caso medio pero con un caso peor desconocido no sirve.

- **Tiempo real estricto** (*hard*): incumplir el plazo es un fallo del sistema.
  Control de vuelo, frenado ABS.
- **Tiempo real flexible** (*soft*): incumplirlo degrada la calidad. Reproducción
  de audio y vídeo.

Consecuencias de diseño: núcleo apropiativo, latencia de interrupción acotada y
publicada, ausencia de memoria virtual con paginación bajo demanda —un fallo de
página tiene un coste impredecible—, y protocolos de herencia de prioridad para
acotar la inversión de prioridades. FreeRTOS, VxWorks y QNX son ejemplos; Linux
se acerca con el parche `PREEMPT_RT`, ya integrado en la rama principal.

**La inversión de prioridades** merece atención porque es el fallo clásico del
área. Una tarea de baja prioridad toma un cerrojo; una de alta prioridad se
bloquea esperándolo; una de prioridad intermedia, que no necesita el cerrojo,
expulsa a la de baja. La de alta prioridad queda esperando indefinidamente a la
de baja, que no avanza. Es lo que dejó al Mars Pathfinder reiniciándose en 1997.
La herencia de prioridad lo corrige elevando temporalmente la prioridad del
poseedor del cerrojo a la del bloqueado más prioritario.

### Empotrados

Recursos escasos y función fija. Muchos no tienen unidad de gestión de memoria,
así que no hay espacios de direcciones separados: todo el código comparte
memoria y un puntero corrupto lo corrompe todo. El sistema operativo suele ser
una biblioteca enlazada con la aplicación, sin llamadas al sistema ni cambios de
modo.

### Móviles

Comparten la base con los de propósito general —Android es Linux, iOS comparte
XNU con macOS— y se diferencian en la gestión de la energía y en el modelo de
ciclo de vida de las aplicaciones. Ninguna aplicación decide cuánto vive: el
sistema la suspende o la mata según la memoria disponible, y espera que guarde
su estado cuando se le avisa. La política de permisos por aplicación, y no por
usuario, es la otra diferencia estructural: el modelo Unix de usuarios no
resuelve el problema de aislar aplicaciones que pertenecen al mismo usuario.

### Distribuidos y de red

Un sistema operativo de red ofrece recursos remotos que el usuario sabe que son
remotos: se monta un volumen, se abre una sesión. Uno distribuido oculta la
distribución y presenta un único sistema. La segunda categoría apenas ha salido
de la investigación —Amoeba, Plan 9—, porque la transparencia total choca con
los fallos parciales: en una sola máquina, o funciona todo o no funciona nada;
en un conjunto de máquinas, una parte falla mientras el resto sigue.
