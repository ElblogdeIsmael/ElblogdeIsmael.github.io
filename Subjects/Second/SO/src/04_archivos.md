# Gestión de archivos

Tema 4 del programa. La interfaz que el sistema de archivos ofrece a las
aplicaciones, cómo se estructura por dentro y qué estructuras de datos lo
sostienen en disco.

## Interfaz de los sistemas de archivos

### El archivo

Un archivo es una secuencia de bytes con nombre y almacenamiento persistente.
Unix no impone más estructura: no distingue entre archivos de texto y binarios,
ni conoce registros. Toda interpretación corre por cuenta de la aplicación. Otros
sistemas sí impusieron estructura —registros de longitud fija, claves indexadas—
y acabaron obligando a las aplicaciones a rodearla.

Los atributos que el sistema guarda de cada archivo:

| Atributo | Contenido |
| --- | --- |
| Identificador | número de i-nodo, único dentro del sistema de archivos |
| Tipo | regular, directorio, enlace simbólico, dispositivo, tubería con nombre, socket |
| Tamaño | en bytes |
| Propietario | usuario y grupo |
| Permisos | lectura, escritura y ejecución para propietario, grupo y resto |
| Marcas de tiempo | acceso, modificación del contenido, modificación del i-nodo |
| Enlaces | cuántos nombres apuntan a él |

El nombre no está en la lista, y eso es deliberado: en Unix el nombre no es un
atributo del archivo, sino una entrada de directorio que apunta a él. Un archivo
puede tener varios nombres o ninguno.

### Operaciones

Las llamadas al sistema básicas, con la semántica que conviene retener:

| Servicio | Qué hace | Detalle que suele fallar |
| --- | --- | --- |
| `open` | abre y devuelve un descriptor | comprueba permisos solo aquí, no en cada `read` |
| `read`, `write` | transfieren desde el desplazamiento actual | pueden transferir menos de lo pedido, y hay que reintentar |
| `lseek` | mueve el desplazamiento | permite pasar del final y crear un hueco |
| `close` | libera el descriptor | no garantiza que los datos estén en disco |
| `fsync` | fuerza la escritura a disco | esto sí lo garantiza; `close` no |
| `unlink` | borra un nombre | el archivo sobrevive mientras algún proceso lo tenga abierto |
| `stat` | consulta atributos | sin abrir el archivo |

Dos comportamientos que causan errores reales:

- **`write` puede escribir menos de lo pedido** sin que haya error. Ignorar el
  valor de retorno pierde datos en silencio, sobre todo con tuberías y sockets.
- **`close` no garantiza persistencia.** Los datos están en la caché del núcleo.
  Un corte de corriente los pierde. Solo `fsync` obliga a bajarlos, y en un
  archivo recién creado hay que sincronizar además el directorio que lo nombra,
  o el archivo puede quedar sin nombre.

### Descriptores

Al abrir un archivo el núcleo maneja tres estructuras encadenadas, y confundirlas
lleva a razonar mal sobre `fork` y sobre `dup`:

1. **Tabla de descriptores**, una por proceso. Un vector de punteros indexado
   por el número que devuelve `open`. Los descriptores 0, 1 y 2 son entrada,
   salida y error estándar por convenio.
2. **Tabla de archivos abiertos**, del sistema. Una entrada por cada `open`, con
   el desplazamiento actual y el modo de apertura.
3. **Tabla de i-nodos**, del sistema. Una entrada por archivo distinto en uso.

Las consecuencias:

- `fork` duplica la tabla de descriptores, así que padre e hijo **comparten el
  desplazamiento**: si uno lee, el otro continúa desde donde el primero se quedó.
- Dos `open` del mismo archivo dan dos entradas distintas en la segunda tabla,
  con desplazamientos independientes, y una sola en la tercera.
- `dup2` hace que dos descriptores apunten a la misma entrada de la segunda
  tabla. Por eso redirige: el descriptor 1 pasa a apuntar donde apunta el
  archivo abierto.

### Directorios

Un directorio es un archivo cuyo contenido es una lista de pares (nombre,
i-nodo). Que sea un archivo es lo que permite que el sistema de archivos sea un
grafo y no una tabla plana.

La organización del directorio determina el coste de buscar un nombre:

| Organización | Búsqueda | Uso |
| --- | --- | --- |
| Lista lineal | $O(n)$ | sistemas antiguos, directorios pequeños |
| Tabla *hash* | $O(1)$ en el caso medio | ext3 y ext4 con `dir_index` |
| Árbol B | $O(\log n)$ | XFS, Btrfs, NTFS |

La diferencia se nota: un directorio con cien mil entradas y lista lineal
convierte cada `open` en un recorrido completo.

### Enlaces

Dos formas de dar más de un nombre a un archivo, y no son intercambiables:

| | Enlace duro | Enlace simbólico |
| --- | --- | --- |
| Qué guarda | el mismo número de i-nodo | una ruta, como texto |
| Cruza sistemas de archivos | no | sí |
| Puede apuntar a un directorio | no, salvo `.` y `..` | sí |
| Si se borra el destino | el archivo sigue vivo | queda colgado |
| Cuenta en el contador de enlaces | sí | no |

Que un enlace duro no pueda apuntar a un directorio evita ciclos en el grafo, y
con ellos que un recorrido no termine y que el contador de referencias no llegue
nunca a cero. Los enlaces simbólicos sí permiten ciclos, y por eso el núcleo
limita a cuarenta el número de enlaces que resuelve al recorrer una ruta.

Un archivo se borra del disco cuando su contador de enlaces llega a cero **y**
ningún proceso lo tiene abierto. De ahí el patrón de crear un temporal y
desenlazarlo inmediatamente: el archivo existe mientras el proceso viva y
desaparece solo cuando termina, incluso si termina de forma anómala.

### Montaje

Un sistema de archivos se incorpora al árbol global sobre un directorio
existente, el punto de montaje, cuyo contenido queda oculto mientras dure el
montaje. Unix presenta así un único árbol con raíz `/`, en lugar de una letra
por volumen.

Los espacios de nombres de montaje de Linux permiten que cada proceso vea un
árbol distinto. Es la base de los contenedores: no hay virtualización de por
medio, solo una vista diferente del mismo núcleo.

### Permisos

El modelo Unix clásico son nueve bits, en tres grupos de tres, para propietario,
grupo y resto. Además:

- **`setuid`**: el ejecutable corre con los privilegios de su propietario, no de
  quien lo lanza. Es lo que permite que `passwd` escriba en un archivo que el
  usuario no puede tocar, y la fuente histórica de escaladas de privilegios.
- **`setgid`**: lo mismo con el grupo; sobre un directorio, hace que lo que se
  cree dentro herede el grupo.
- **Bit pegajoso**: sobre un directorio, solo el propietario de un archivo puede
  borrarlo. Es lo que hace que `/tmp` sea utilizable por todos sin que nadie
  pueda borrar los archivos de otro.

El modelo es demasiado grueso para muchos casos —no permite dar acceso a un
usuario concreto que no sea el propietario—, y de ahí las listas de control de
acceso, que asocian permisos a usuarios y grupos arbitrarios.

## Diseño software del sistema de archivos

### Capas

De arriba abajo:

1. **Llamadas al sistema.** `open`, `read`, `write`.
2. **Sistema de archivos virtual (VFS).** Una interfaz común que oculta qué
   sistema de archivos concreto hay debajo.
3. **Sistema de archivos concreto.** ext4, XFS, Btrfs, NFS.
4. **Caché de bloques.** Mantiene en memoria los bloques recientes.
5. **Planificador de bloque y manejador del dispositivo.**

El **VFS** es la pieza que merece atención. Define cuatro objetos —superbloque,
i-nodo, entrada de directorio y archivo— y una tabla de operaciones por objeto.
Cada sistema de archivos concreto rellena esas tablas. El resultado es que
`read` funciona igual sobre ext4, sobre NFS y sobre `/proc`, que no es un
sistema de archivos sobre disco sino una vista de las estructuras del núcleo.

Es el mismo patrón de polimorfismo que un lenguaje orientado a objetos resuelve
con clases abstractas, escrito con punteros a función porque el núcleo está en C.

### La caché de bloques

Toda lectura pasa por una caché en memoria. La política es escritura diferida:
`write` marca el bloque como sucio y vuelve; un hilo del núcleo lo baja a disco
más tarde.

- **A favor:** las escrituras repetidas al mismo bloque se agrupan, y las que se
  sobrescriben antes de bajar no llegan a hacerlo nunca.
- **En contra:** un corte de corriente pierde lo que no se haya bajado, y el
  orden en que los bloques llegan al disco no es el orden en que se escribieron.

La alternativa, escritura inmediata, es más segura y mucho más lenta. Los
sistemas ofrecen las dos y dejan elegir por montaje o por archivo.

### Registro por diario

El problema que resuelve: una operación como crear un archivo toca varias
estructuras —mapa de bits de i-nodos, i-nodo, bloque de datos, entrada de
directorio— y no hay forma de escribirlas todas a la vez. Un corte a mitad deja
el sistema de archivos inconsistente: i-nodos asignados que nadie nombra, o
nombres que apuntan a i-nodos libres.

La solución clásica era `fsck`, que recorría el sistema entero al arrancar. Con
discos de terabytes eso pasó a durar horas.

El **diario** escribe primero, en un área reservada y de forma secuencial, lo
que va a hacer; luego lo hace; y al terminar marca la transacción como
completada. Tras un corte, basta con releer el diario: las transacciones
completas se reaplican y las incompletas se descartan. El tiempo de recuperación
pasa a depender del tamaño del diario, no del disco.

Los tres modos de ext4, de menos a más seguro:

| Modo | Al diario van | Consecuencia |
| --- | --- | --- |
| `writeback` | solo metadatos, sin orden con los datos | el archivo puede quedar con metadatos nuevos y datos viejos |
| `ordered` | solo metadatos, pero los datos se bajan antes | el compromiso por omisión |
| `journal` | metadatos y datos | todo se escribe dos veces, y va a la mitad de velocidad |

Una alternativa es **copia al escribir**: nunca se sobrescribe un bloque vivo, se
escribe una versión nueva y se actualiza el puntero de la raíz. Es lo que hacen
ZFS y Btrfs, y da instantáneas casi gratis, porque conservar una versión antigua
es no liberar sus bloques.

## Implementación de los sistemas de archivos

### Asignación de bloques

Cómo se registran los bloques que ocupa un archivo:

**Contigua.** Bloque inicial y longitud. Lectura secuencial óptima y acceso
directo trivial; a cambio, fragmentación externa y la imposibilidad de crecer si
el vecino está ocupado. Sobrevive donde el contenido no cambia: sistemas de
archivos de solo lectura y medios ópticos.

**Enlazada.** Cada bloque apunta al siguiente. No hay fragmentación externa ni
límite de crecimiento, pero el acceso directo obliga a recorrer la cadena y un
puntero corrupto pierde el resto del archivo. La variante FAT saca los punteros a
una tabla en memoria, lo que arregla el acceso directo y hace que el tamaño de
esa tabla limite el del volumen.

**Indexada.** Un bloque índice con los punteros a todos los bloques del archivo.
Acceso directo en un salto, y el coste es un bloque por archivo aunque el
archivo sea diminuto.

**Extensiones.** En vez de un puntero por bloque, tríos (bloque inicial, primer
bloque lógico, longitud). Un archivo grande y contiguo se describe con unas pocas
extensiones en lugar de miles de punteros. Es lo que usan ext4, XFS y NTFS.

### El i-nodo

La estructura que representa un archivo en Unix. Contiene los atributos y los
punteros a los bloques, organizados como índice multinivel:

| Punteros | Cuántos | Cubren, con bloques de 4 KiB |
| --- | ---: | --- |
| Directos | 12 | 48 KiB |
| Indirecto simple | 1 | 4 MiB |
| Indirecto doble | 1 | 4 GiB |
| Indirecto triple | 1 | 4 TiB |

El diseño está calibrado a la distribución real de tamaños: la inmensa mayoría de
los archivos son pequeños y caben en los punteros directos, con un solo acceso.
Los archivos grandes son pocos y pueden permitirse los saltos adicionales. Es un
esquema deliberadamente asimétrico, y por eso funciona.

Un **archivo disperso** es el caso en que algunos punteros están a cero: hay
huecos que no ocupan bloques y que se leen como ceros. Se crean saltando con
`lseek` más allá del final. Por eso el espacio que un archivo ocupa puede ser
mucho menor que su tamaño, y por eso copiarlo sin cuidado lo materializa entero.

### Gestión del espacio libre

| Método | Cómo | Cuándo conviene |
| --- | --- | --- |
| Mapa de bits | un bit por bloque | encontrar bloques contiguos es barato; el mapa ocupa espacio fijo |
| Lista enlazada | cada bloque libre apunta al siguiente | no ocupa espacio extra; encontrar contigüidad es imposible |
| Agrupación | bloques que guardan direcciones de bloques libres | compromiso entre los dos |
| Recuento | pares (primer bloque, cuántos consecutivos) | eficiente si el espacio libre está agrupado |

Con bloques de 4 KiB, el mapa de bits de un disco de 1 TiB ocupa 32 MiB: cabe en
memoria y por eso es lo habitual. Los sistemas de archivos modernos lo dividen en
grupos de bloques con su propio mapa, para no serializar todas las asignaciones
sobre una única estructura.

### Planificación de peticiones de disco

En un disco mecánico, el tiempo de servicio son tres sumandos: búsqueda
—desplazar el brazo—, latencia rotacional y transferencia. El primero domina y es
el único sobre el que el planificador puede actuar, reordenando la cola de
peticiones.

| Algoritmo | Criterio | Problema |
| --- | --- | --- |
| FCFS | orden de llegada | movimiento del brazo desordenado |
| SSTF | la petición más cercana a la posición actual | inanición de las peticiones lejanas |
| SCAN, el ascensor | barre hasta un extremo y vuelve | los extremos esperan más |
| C-SCAN | barre en un solo sentido y salta al principio | tiempos de espera más uniformes |
| LOOK, C-LOOK | igual, pero sin llegar al extremo si no hay peticiones | las versiones que se implementan de verdad |

Sobre una cola `98 183 37 122 14 124 65 67` con el brazo en la pista 53, el
recorrido total es de 640 pistas con FCFS, 236 con SSTF y 208 con C-LOOK.

**En un SSD todo esto sobra.** No hay brazo ni rotación, y el tiempo de acceso no
depende de la dirección, así que reordenar por cercanía no aporta nada. El
planificador `none` es el adecuado, y los problemas se desplazan a otro sitio: la
escritura solo puede hacerse sobre celdas borradas, el borrado se hace en bloques
mucho mayores que la página de escritura, y las celdas se desgastan. De ahí la
capa de traducción interna del dispositivo, la recogida de basura y el nivelado
de desgaste, y de ahí `TRIM`, que es cómo el sistema de archivos le dice al
dispositivo qué bloques ya no contienen nada útil.

### Consistencia y comprobación

`fsck` recorre el sistema de archivos comprobando invariantes: que cada bloque
esté en un solo archivo o en la lista de libres, que el contador de enlaces de
cada i-nodo coincida con las entradas de directorio que lo nombran, que no haya
directorios inalcanzables. Lo que encuentra sin dueño va a `lost+found`.

Con diario deja de ser necesario en el caso normal, pero sigue siendo la única
respuesta ante corrupción por hardware defectuoso: el diario garantiza que las
operaciones son atómicas, no que el disco escriba lo que se le manda.
Descripciones detalladas de estas estructuras y de su evolución están en
\cite{bach1986} y en \cite{vahalia1996}, y el tratamiento moderno en
\cite{tanenbaum2009}.
