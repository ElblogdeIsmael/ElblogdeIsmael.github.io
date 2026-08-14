# Temario práctico

Las dos prácticas del programa. La primera administra el sistema desde fuera; la
segunda lo programa desde dentro, con la interfaz que el tema 2 describía.

## Práctica 1. Administración del sistema

### Herramientas básicas

**Usuarios y grupos.** La información vive en tres archivos con formato de
campos separados por dos puntos:

| Archivo | Contiene | Quién lo lee |
| --- | --- | --- |
| `/etc/passwd` | nombre, UID, GID, directorio, intérprete | todos |
| `/etc/shadow` | resultado de la función sobre la contraseña, caducidad | solo root |
| `/etc/group` | grupos y sus miembros | todos |

Se editan con `useradd`, `usermod`, `groupadd` y `passwd`, no a mano: las
herramientas bloquean los archivos y validan el formato. Para editarlos de verdad
está `vipw`, que hace lo mismo.

Una cuenta de servicio se crea sin intérprete —`/usr/sbin/nologin`— y sin
contraseña válida. Es la aplicación directa del mínimo privilegio: ese usuario
existe para ser el propietario de unos procesos, no para iniciar sesión.

**Permisos.** `chmod` en octal o simbólico, `chown` y `chgrp`, y la máscara
`umask`, que resta permisos a lo que se crea. Los bits especiales del tema 6 se
ven aquí en su forma práctica: `find / -perm -4000` lista los binarios `setuid`
del sistema, y esa lista debería ser corta y conocida.

**Sistemas de archivos.** `df` para el espacio, `du` para el reparto, `lsblk`
para la topología de dispositivos, `mount` y `/etc/fstab` para el montaje. En
`fstab` los sistemas se identifican por UUID y no por `/dev/sdX`, por lo que
explicaba el tema 5: el orden de detección no está garantizado.

Opciones de montaje que cambian la seguridad de una partición: `noexec` impide
ejecutar, `nosuid` desactiva los bits `setuid` y `setgid`, `nodev` ignora los
archivos de dispositivo. Las tres juntas en `/tmp` cierran vías de escalada
conocidas.

**Procesos.** `ps` para la foto, `top` y `htop` para el seguimiento, `kill` y
`pkill` para las señales, `nice` y `renice` para la prioridad. El estado que
`ps` muestra es el diagrama del tema 2: `R` en ejecución o listo, `S` bloqueado
interrumpible, `D` bloqueado no interrumpible, `Z` zombi, `T` detenido.

Un proceso en `D` no responde ni a `SIGKILL`, y encontrarlo casi siempre apunta a
un dispositivo o a un montaje de red que no responde, no al proceso.

**Registros.** `journalctl` en sistemas con systemd, y los archivos de
`/var/log`. La rotación la gestiona `logrotate`, que comprime y descarta los
antiguos para que el registro no llene la partición. Un `/var` lleno deja de
registrar en silencio, que es exactamente cuando más falta hace.

### Monitorización

Cuatro recursos, y una herramienta por recurso:

| Recurso | Qué mirar | Con qué |
| --- | --- | --- |
| CPU | uso por modo, carga media, cambios de contexto | `vmstat`, `mpstat`, `pidstat` |
| Memoria | libre real, caché, intercambio, fallos de página | `free`, `vmstat`, `/proc/meminfo` |
| Disco | operaciones por segundo, latencia, tiempo ocupado | `iostat`, `iotop` |
| Red | ancho de banda, conexiones, retransmisiones | `ss`, `ip -s`, `nload` |

Dos lecturas que se malinterpretan siempre:

- **La memoria «libre» de `free` no es la disponible.** El núcleo usa la memoria
  no asignada como caché de bloques, y esa caché se libera en cuanto alguien
  necesita marcos. La columna que importa es `available`, no `free`. Una máquina
  sana tiene poca memoria libre, y eso está bien.
- **La carga media no es el porcentaje de CPU.** Es el número medio de procesos
  en estado listo o bloqueado no interrumpible. Con ocho núcleos, una carga de 8
  es ocupación plena; con dos, es saturación. Y una carga alta con la CPU ociosa
  apunta a disco, no a procesador.

`/proc` y `/sys` son la fuente de todo lo anterior. Son sistemas de archivos
virtuales —el VFS del tema 4 aplicado a las estructuras del núcleo—, así que la
monitorización se reduce a leer archivos de texto.

**Cuando algo va lento**, el orden que evita perder el tiempo: primero mirar si
falta un recurso —CPU, memoria, disco o red—, después qué proceso lo consume, y
solo entonces por qué. `strace` muestra las llamadas al sistema que hace un
proceso y `perf` dónde gasta los ciclos.

### Automatización

**Guiones de intérprete de órdenes.** Un guion serio empieza igual:

```bash
#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'
```

`-e` aborta al primer fallo, `-u` convierte en error el uso de una variable no
definida y `-o pipefail` propaga el fallo de cualquier etapa de una tubería, no
solo de la última. Sin las tres, un guion de copia de seguridad falla a la mitad
y devuelve éxito.

**Tareas periódicas.** `cron` con su formato de cinco campos, o los
temporizadores de systemd, que se pueden consultar, tienen registro propio y
manejan mejor el caso de una máquina apagada a la hora prevista.

```
# m  h  dom mon dow  orden
  30 3  *   *   *    /usr/local/bin/respaldo.sh
```

Una tarea de `cron` se ejecuta con un entorno mínimo: no hereda el `PATH` de la
sesión ni las variables del perfil. Es la causa habitual de que un guion funcione
al probarlo y falle a las tres de la mañana. Se resuelve usando rutas absolutas y
redirigiendo la salida a un registro.

**Servicios.** Una unidad de systemd declara qué ejecutar, con qué usuario, qué
hacer si falla y de qué depende. Y ofrece aislamiento declarativo, que es la
forma barata de aplicar lo del tema 6:

```ini
[Service]
User=servicio
ExecStart=/usr/local/bin/servicio
Restart=on-failure
NoNewPrivileges=true
ProtectSystem=strict
PrivateTmp=true
```

**Copias de seguridad.** `tar` y `rsync` con la regla 3-2-1: tres copias, en dos
medios distintos, una fuera del sitio. Y la parte que se salta todo el mundo: una
copia no está probada hasta que se ha restaurado. Una restauración periódica de
prueba es lo único que distingue una copia de seguridad de un archivo grande.

## Práctica 2. Servicios del sistema mediante la API

### Gestión y comunicación de procesos

**Creación y espera.** `fork`, `exec`, `wait` y `waitpid` con la semántica del
tema 2. El estado que devuelve `waitpid` se interpreta con macros, no
comparando: `WIFEXITED` y `WEXITSTATUS` para la terminación normal,
`WIFSIGNALED` y `WTERMSIG` para la muerte por señal.

**Tuberías.** `pipe` devuelve dos descriptores, lectura y escritura. Montar una
tubería entre dos programas es el ejercicio que reúne todo lo anterior:

```c
int fd[2];
pipe(fd);

if (fork() == 0) {                 /* productor */
    dup2(fd[1], STDOUT_FILENO);
    close(fd[0]);
    close(fd[1]);
    execlp("ls", "ls", NULL);
    _exit(127);
}
if (fork() == 0) {                 /* consumidor */
    dup2(fd[0], STDIN_FILENO);
    close(fd[0]);
    close(fd[1]);
    execlp("wc", "wc", "-l", NULL);
    _exit(127);
}
close(fd[0]);
close(fd[1]);                      /* imprescindible en el padre */
wait(NULL);
wait(NULL);
```

Los `close` del padre no son limpieza opcional. Mientras quede **un solo**
descriptor de escritura abierto en cualquier proceso, el lector no recibe fin de
archivo y `wc` espera indefinidamente. Es el error más frecuente de la práctica, y
no se manifiesta como un fallo sino como un programa colgado.

Escribir en una tubería sin lectores genera `SIGPIPE`, que por omisión mata al
proceso. Ignorarla convierte el caso en un `write` que devuelve `EPIPE`, que es
lo que un programa robusto quiere.

**Señales.** Se instalan con `sigaction`, no con `signal`, cuya semántica varía
entre sistemas. Dentro de un manejador solo se pueden llamar funciones seguras
—la lista está en la norma POSIX— y solo se pueden tocar variables declaradas
`volatile sig_atomic_t`. Ni `printf` ni `malloc` son seguras: si la señal llega
mientras el proceso estaba dentro de `malloc`, el manejador reentra en una
estructura a medio modificar.

`SIGKILL` y `SIGSTOP` no se pueden capturar ni ignorar, y esa es justamente su
razón de existir.

**Otros mecanismos.** Colas de mensajes, memoria compartida y semáforos POSIX
(`mq_open`, `shm_open`, `sem_open`). La memoria compartida es el mecanismo más
rápido —no hay copia— y el que más sincronización exige, porque no la lleva
incorporada.

### Manejo de archivos y directorios

`open`, `read`, `write`, `lseek`, `close`, `stat`, `opendir` y `readdir`, con las
trampas del tema 4:

- Comprobar **siempre** el valor de retorno de `read` y `write`, que pueden
  transferir menos de lo pedido.
- `errno` solo es válido inmediatamente después de un fallo. Cualquier llamada
  intermedia, incluida `printf`, puede haberlo cambiado.
- Un recorrido recursivo de directorios tiene que saltarse `.` y `..`, o no
  termina, y no debe seguir los enlaces simbólicos salvo que sea lo que se
  quiere: un enlace a un ancestro es un ciclo.

### Archivos proyectados en memoria

`mmap` y `munmap`. Un programa que cuenta las apariciones de un byte en un
archivo grande se escribe sin un solo `read`:

```c
int fd = open(ruta, O_RDONLY);
struct stat st;
fstat(fd, &st);

char *p = mmap(NULL, st.st_size, PROT_READ, MAP_PRIVATE, fd, 0);
if (p == MAP_FAILED) { perror("mmap"); return 1; }

size_t n = 0;
for (off_t i = 0; i < st.st_size; i++) {
    if (p[i] == '\n') n++;
}

munmap(p, st.st_size);
close(fd);
```

`MAP_PRIVATE` da copia al escribir: los cambios no llegan al archivo.
`MAP_SHARED` sí los propaga, y es lo que permite que dos procesos que proyectan
el mismo archivo compartan memoria de verdad. Un archivo de tamaño cero no se
puede proyectar, y leer más allá del final del archivo dentro de la región
proyectada produce `SIGBUS`, no `SIGSEGV`.

### Gestión de memoria y tiempo

**Memoria.** `brk` y `sbrk` mueven el final del montículo y casi nunca se usan
directamente: `malloc` los usa por debajo para bloques pequeños y `mmap` anónimo
para los grandes. Que un `malloc` grande devuelva memoria no significa que haya
marcos físicos reservados: Linux permite reservar más de lo que hay, y los marcos
llegan al escribir. De ahí que un programa pueda morir por falta de memoria mucho
después del `malloc` que la pidió.

**Tiempo.** `clock_gettime` con el reloj adecuado, que es la decisión que
importa:

| Reloj | Qué mide | Para qué |
| --- | --- | --- |
| `CLOCK_REALTIME` | hora del día | fechas; **da saltos** al ajustarse |
| `CLOCK_MONOTONIC` | tiempo desde el arranque | medir intervalos |
| `CLOCK_PROCESS_CPUTIME_ID` | CPU consumida por el proceso | perfilado |

Medir una duración con `CLOCK_REALTIME` produce intervalos negativos cuando el
demonio de hora ajusta el reloj. Los intervalos se miden siempre con el
monótono.

`nanosleep` duerme al menos lo pedido, nunca exactamente: al despertar el proceso
pasa a la cola de listos y compite por la CPU, tal como decía el diagrama de
estados. Y puede volver antes por una señal, devolviendo el tiempo que faltaba,
así que hay que reintentar.

### Cómo se entrega

Los programas se compilan con avisos y sin ellos:

```bash
gcc -Wall -Wextra -std=c11 -g -o programa programa.c
```

Y se comprueban con las herramientas que encuentran lo que la compilación no ve:
`valgrind` para accesos inválidos y memoria no liberada, y los desinfectantes del
compilador (`-fsanitize=address,undefined`) para lo mismo con menos sobrecoste.
Un programa que funciona no es un programa correcto: casi todos los errores de
memoria de esta práctica producen resultados correctos hasta que dejan de
hacerlo.

El repertorio completo de servicios, con sus casos límite y sus diferencias entre
sistemas, está en \cite{kerrisk2010} y en \cite{stevens2005}; la parte de
administración, en \cite{nemeth2010}.
