# Gestión de entradas y salidas

Tema 5 del programa. Cómo se comunica el procesador con los dispositivos, cómo
se organiza el software que los maneja y cómo se consigue que una aplicación no
tenga que saber sobre qué dispositivo escribe.

## El problema

La entrada/salida es la parte del sistema operativo con más código y menos
uniformidad, y por una razón estructural: los dispositivos no se parecen entre
sí en nada.

| Dimensión | Extremos |
| --- | --- |
| Velocidad | teclado, unos bytes por segundo; NVMe, gigabytes por segundo |
| Unidad de transferencia | carácter frente a bloque |
| Modo de acceso | secuencial frente a directo |
| Sentido | solo lectura, solo escritura, ambos |
| Sincronía | síncrono frente a asíncrono |
| Compartición | dedicado frente a compartible |

Cinco órdenes de magnitud separan al teclado del disco de estado sólido. Escribir
una capa que los presente igual a las aplicaciones, sin perder el rendimiento de
los rápidos ni bloquear el sistema por los lentos, es el trabajo de este tema.

## Comunicación con el dispositivo

### El controlador

El procesador no habla con el dispositivo, sino con su **controlador**: un
circuito con registros que el procesador lee y escribe. Los registros son
siempre de las mismas cuatro clases:

| Registro | Sentido | Contenido |
| --- | --- | --- |
| Estado | lectura | ocupado, listo, error |
| Control | escritura | qué operación hacer |
| Datos de entrada | lectura | lo que el dispositivo entrega |
| Datos de salida | escritura | lo que se le manda |

### Cómo se accede a los registros

Dos esquemas:

- **Espacio de entrada/salida separado.** Instrucciones específicas —`in` y
  `out` en x86— y un espacio de direcciones propio. La separación protege por
  construcción: son instrucciones privilegiadas.
- **Proyección en memoria.** Los registros aparecen como direcciones de memoria
  ordinarias, y se leen y escriben con instrucciones normales. Es lo dominante,
  porque no exige instrucciones especiales y permite escribir manejadores en C.

La proyección en memoria obliga a una precaución: esas direcciones **no se pueden
cachear**, porque su valor cambia sin que el procesador escriba, y el compilador
no puede reordenar ni eliminar los accesos. De ahí que los manejadores usen
funciones específicas de lectura y escritura con barreras, y no punteros
ordinarios.

### Tres formas de transferir

**Sondeo** (*polling*). El procesador lee el registro de estado en un bucle hasta
que el dispositivo está listo. Simple y con la latencia más baja posible; a
cambio consume una CPU entera esperando. Solo compensa cuando la espera es
brevísima o el sistema no tiene nada mejor que hacer, y por eso los manejadores
de red de alto rendimiento vuelven a él bajo carga alta: con millones de paquetes
por segundo, una interrupción por paquete cuesta más que el sondeo.

**Interrupciones.** El dispositivo avisa cuando termina, y mientras tanto el
procesador ejecuta otra cosa. Es el esquema general. Su coste es la latencia de
la interrupción y el cambio de contexto, y su límite la **tormenta de
interrupciones**: un dispositivo muy rápido puede interrumpir tan a menudo que el
sistema no avance. Los manejadores modernos se defienden alternando entre
interrupciones y sondeo según la carga.

**DMA.** Un controlador de acceso directo a memoria transfiere entre el
dispositivo y la memoria sin pasar por el procesador. La CPU programa la
dirección, el tamaño y el sentido, y recibe una sola interrupción cuando todo ha
terminado. Es imprescindible para cualquier dispositivo de bloque: sin DMA,
copiar un megabyte costaría un cuarto de millón de accesos del procesador.

El DMA obliga a coherencia de caché: el dispositivo escribe en memoria sin que
las cachés del procesador se enteren. En arquitecturas con cachés coherentes lo
resuelve el hardware; en las demás, el manejador tiene que invalidar o vaciar
explícitamente el rango antes y después de la transferencia. Es una de las
fuentes clásicas de errores intermitentes en manejadores.

Y un problema de seguridad: un dispositivo con DMA puede leer y escribir toda la
memoria física, lo que convierte un puerto externo en una vía de ataque. La
respuesta es la **IOMMU**, que hace con los dispositivos lo que la MMU con los
procesos: traduce y comprueba permisos de las direcciones que emiten.

### El tratamiento de la interrupción

La rutina de servicio se ejecuta en un contexto incómodo: no pertenece a ningún
proceso, no puede bloquearse y no puede dormir esperando memoria. Cuanto más
dure, más se retrasa todo lo demás.

De ahí el reparto en dos mitades, que todos los sistemas hacen con nombres
distintos:

| | Mitad superior | Mitad inferior |
| --- | --- | --- |
| Cuándo | inmediata, con interrupciones inhibidas | diferida |
| Qué hace | reconoce la interrupción y guarda los datos | el procesamiento real |
| Restricciones | no puede dormir ni bloquearse | puede planificarse como el resto |
| En Linux | manejador registrado con `request_irq` | `softirq`, `tasklet`, cola de trabajo |

Una interrupción puede compartir línea con otros dispositivos, así que la rutina
tiene que empezar comprobando si el dispositivo que atiende es realmente el que
interrumpió; si no, devuelve que no era suya. Con MSI y MSI-X, que envían la
interrupción como una escritura en memoria en vez de por una línea física, la
compartición desaparece y cada cola de un dispositivo puede tener su propio
vector, dirigido a un núcleo distinto.

## Arquitectura software del sistema de entrada/salida

Cuatro capas, de arriba abajo:

1. **Software de usuario.** La biblioteca de C con su propio búfer. `printf`
   acumula y llama a `write` cuando el búfer se llena o llega un salto de línea,
   y por eso la salida de un programa que aborta puede perderse: estaba en ese
   búfer, no en el núcleo.
2. **Software independiente del dispositivo.** Nombrado, protección, tamaño de
   bloque uniforme, almacenamiento intermedio, asignación y liberación, informe
   de errores. Es la capa que hace que `read` signifique lo mismo para todos.
3. **Manejadores.** El código específico de cada dispositivo. Es donde vive el
   conocimiento del hardware concreto, y donde está la mayor parte del código del
   núcleo.
4. **Rutinas de interrupción.**

El **objetivo de la capa 2** es la independencia del dispositivo: que el mismo
programa funcione leyendo de un archivo, de una tubería o de un terminal. Unix lo
consigue con una decisión de diseño muy simple, que es el apartado siguiente.

### Almacenamiento intermedio

Por qué se copian los datos en vez de transferirlos directamente:

- **Desacoplar velocidades.** El productor y el consumidor no van al mismo ritmo.
- **Adaptar unidades de transferencia.** La aplicación escribe 10 bytes; el
  dispositivo trabaja con bloques de 4096.
- **Semántica de copia.** Cuando `write` vuelve, la aplicación puede reutilizar
  su búfer aunque el dato aún no esté en el disco.

Y el coste: cada copia consume ancho de banda de memoria. En un servidor que
sirve archivos, los datos se copian del disco a la caché del núcleo, de ahí al
búfer de la aplicación, de ahí al búfer del socket y de ahí a la tarjeta de red.
Las técnicas de **copia cero** —`sendfile`, `splice`, proyección en memoria—
existen para eliminar los pasos intermedios, y con ellos el paso por el espacio
de usuario.

Un caso particular es el **spooling**: para dispositivos que no se pueden
compartir, como una impresora, los trabajos se acumulan en disco y un proceso
demonio los sirve de uno en uno. El dispositivo dedicado se convierte así en
compartible.

### Tratamiento de errores

Los errores de entrada/salida son la norma, no la excepción, y se tratan en
niveles: el controlador reintenta, el manejador reintenta un número acotado de
veces, y solo si todo falla el error sube a la aplicación como código de retorno.
Un sector defectuoso se remapea de forma transparente por el propio disco, que
mantiene una reserva para eso; la aplicación no se entera hasta que la reserva se
agota.

## Archivos de dispositivos

Aquí está la decisión de diseño que define a Unix: **los dispositivos se
presentan como archivos**. Viven en `/dev`, tienen i-nodo, propietario y
permisos, y se manipulan con `open`, `read`, `write` y `close`.

Las consecuencias:

- Un programa que copia archivos copia también de un dispositivo a otro sin una
  línea de código adicional.
- Los permisos de acceso a un dispositivo son los permisos de un archivo, con el
  mismo modelo y las mismas herramientas.
- La redirección del intérprete de órdenes funciona igual con dispositivos.

Cada archivo de dispositivo lleva dos números: el **mayor**, que identifica al
manejador, y el **menor**, que identifica la unidad concreta dentro de ese
manejador.

| Clase | Cómo se transfiere | Ejemplos |
| --- | --- | --- |
| Carácter | flujo de bytes, sin caché de bloques | terminales, `/dev/null`, `/dev/random`, ratón |
| Bloque | bloques de tamaño fijo, con caché y planificación | discos, unidades ópticas |
| Red | fuera del esquema: usa sockets, no `/dev` | interfaces de red |

Las interfaces de red son la excepción reconocida al principio de que todo es un
archivo. No aparecen en `/dev` porque su modelo de acceso —paquetes con
direcciones, sin nombre en el sistema de archivos— no encajaba, y Berkeley
resolvió el problema con una abstracción aparte, el socket. Plan 9 llevó el
principio hasta el final e hizo que también la red fuera un sistema de archivos.

### `ioctl` y sus sucesores

Lo que no cabe en `read` y `write` —cambiar la velocidad de un puerto serie,
expulsar un disco, consultar la geometría— se hace con `ioctl`, una llamada con
un código de operación y un puntero a una estructura que depende del código.

Es reconocidamente la parte fea de la interfaz: no tiene tipos, cada manejador
inventa sus códigos, y validar el puntero es responsabilidad de cada uno. Las
alternativas modernas —`sysfs`, `netlink`, `/proc`— exponen la configuración como
archivos de texto o como mensajes con formato, y son preferibles cuando la
operación no está en un camino crítico.

### Dispositivos virtuales

No todo archivo de `/dev` corresponde a hardware:

- `/dev/null` descarta lo que se le escribe y devuelve fin de archivo al leer.
- `/dev/zero` entrega ceros indefinidamente.
- `/dev/random` y `/dev/urandom` entregan bytes del generador de números
  aleatorios del núcleo.
- Los dispositivos de bucle presentan un archivo como si fuera un disco, que es
  como se monta una imagen sin grabarla.

## Manejadores de dispositivos

Un manejador es el módulo que traduce las operaciones genéricas del sistema en
las órdenes concretas del controlador. Su interfaz con el núcleo es una
estructura de punteros a función: `open`, `release`, `read`, `write`,
`unlocked_ioctl`, `mmap`, `poll`. Rellenar esa estructura y registrarla es lo que
convierte un módulo en un manejador.

### Estructura

- **Inicialización.** Detectar el dispositivo, reservar memoria y líneas de
  interrupción, registrar el manejador.
- **Operaciones.** Se ejecutan en el contexto del proceso que llamó, así que
  pueden dormir.
- **Rutina de interrupción.** No se ejecuta en el contexto de ningún proceso, así
  que no puede dormir ni copiar a memoria de usuario.
- **Descarga.** Liberar en orden inverso al de la inicialización.

La regla que más errores previene: **el contexto determina lo que se puede
hacer**. Copiar a memoria de usuario puede provocar un fallo de página, y un
fallo de página puede dormir; hacerlo desde una rutina de interrupción bloquea el
sistema.

### Módulos cargables

Compilar cada manejador dentro del núcleo obligaría a recompilar y reiniciar para
añadir hardware. Los módulos se cargan y descargan en ejecución, se enlazan
contra los símbolos que el núcleo exporta y pasan a ejecutarse en modo núcleo con
todos los privilegios.

Eso último es lo importante: un módulo no está aislado. Un fallo en un manejador
es un fallo del núcleo. Por eso las arquitecturas de microkernel sacan los
manejadores a espacio de usuario, y por eso Linux ofrece marcos como FUSE y UIO
para escribir en espacio de usuario los que no necesitan rendimiento extremo.

### Independencia del dispositivo

El mecanismo que la sostiene es el mismo que el VFS del tema anterior: una tabla
de operaciones por dispositivo, rellenada por cada manejador, y una capa superior
que solo conoce la tabla. Añadir un dispositivo nuevo es rellenar una estructura
y registrarla; ninguna capa por encima cambia.

De ahí que el sistema pueda montar un sistema de archivos sobre un disco SATA, un
NVMe o un archivo de imagen sin distinguirlos, y que `cat` funcione igual sobre un
archivo, una tubería o un puerto serie.

### Detección y nombrado dinámicos

Con hardware que se conecta y desconecta en caliente, los archivos de `/dev` no
pueden ser estáticos. El núcleo publica los eventos, y un demonio de espacio de
usuario —`udev` en Linux— crea y borra los nodos, aplica permisos y asigna nombres
estables a partir de los atributos del dispositivo.

Los nombres estables resuelven un problema real: el orden en que se detectan los
discos no está garantizado, así que `/dev/sda` puede ser un disco distinto en el
siguiente arranque. Por eso los sistemas de archivos se montan por UUID o por
etiqueta, y no por nombre de dispositivo. El detalle de la implementación en Linux
está en \cite{love2010}, y la interfaz que ve el programador, en
\cite{kerrisk2010}.
