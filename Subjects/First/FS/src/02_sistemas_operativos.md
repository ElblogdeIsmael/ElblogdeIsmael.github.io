# Introducción a los sistemas operativos

Tema 2 del programa. Qué componentes tiene un sistema operativo multiprogramado,
cómo se le piden servicios y qué es exactamente un proceso.

## Multiprogramación

En un sistema monoprogramado, mientras un programa espera al disco el procesador no
hace nada. La **multiprogramación** mantiene varios programas cargados y conmuta a
otro en cuanto uno se bloquea.

| Modelo | Procesador ocioso | Cuándo cambia de programa |
| --- | --- | --- |
| Monoprogramación | mucho | al terminar |
| Multiprogramación | poco | al bloquearse |
| Tiempo compartido | poco | al bloquearse o al agotar su rodaja |

El **tiempo compartido** añade el temporizador del tema anterior: aunque un proceso
no se bloquee nunca, pierde el procesador al agotar su cuanto. Eso es lo que hace
que un sistema con muchos usuarios responda a todos.

La ganancia se calcula fácil. Si un proceso pasa una fracción $p$ de su tiempo
esperando E/S y hay $n$ procesos independientes, el procesador está ocioso una
fracción aproximada $p^n$:

$$\text{utilización} \approx 1 - p^n$$

Con $p = 0{,}8$, un solo proceso deja el procesador ocioso el 80 % del tiempo;
cinco procesos lo bajan al 33 %, y diez al 11 %. El modelo es optimista —supone
independencia— pero explica bien por qué la multiprogramación se impuso.

## Componentes

| Componente | De qué se ocupa |
| --- | --- |
| Gestión de procesos | crear, planificar, sincronizar y terminar |
| Gestión de memoria | asignar, proteger, memoria virtual |
| Sistema de archivos | organizar el almacenamiento persistente |
| Gestión de E/S | controladores, planificación de disco, búferes |
| Red | protocolos y sockets |
| Seguridad | usuarios, permisos, autenticación |
| Intérprete de órdenes | interfaz con el usuario, fuera del núcleo |

### Cómo se organizan entre sí

| Estructura | Idea | Coste y beneficio |
| --- | --- | --- |
| Monolítica | todo el núcleo en un espacio de direcciones | rápida; un fallo tumba el sistema |
| Por capas | cada capa usa solo la inferior | ordenada; las capas cuestan rendimiento |
| Micronúcleo | el núcleo mínimo, el resto en modo usuario | robusta; el paso de mensajes cuesta |
| Híbrida | núcleo monolítico con módulos cargables | la opción práctica actual |

Linux es monolítico con módulos, y esa decisión explica dos cosas cotidianas: que un
controlador se cargue sin reiniciar, y que un controlador con errores pueda bloquear
la máquina entera, porque se ejecuta en modo núcleo.

## Servicios: la API y la shell

Un programa pide servicios al sistema operativo de una única forma, la **llamada al
sistema**, que es la instrucción especial que cambia a modo núcleo.

| Categoría | Ejemplos en POSIX |
| --- | --- |
| Procesos | `fork`, `exec`, `wait`, `exit` |
| Archivos | `open`, `read`, `write`, `close`, `lseek` |
| Directorios | `mkdir`, `rmdir`, `link`, `unlink` |
| Información | `getpid`, `time`, `stat` |
| Comunicación | `pipe`, `socket`, `send`, `recv` |
| Protección | `chmod`, `chown`, `umask` |

Lo que un programa en C escribe no es la llamada, sino la función de biblioteca que
la envuelve:

```{=latex}
\begin{center}
\begin{tikzpicture}[
  caja/.style={draw, minimum width=32mm, minimum height=8mm, font=\small},
  >=stealth
]
\node[caja] (p) at (0,0)    {programa en C};
\node[caja] (b) at (0,-1.2) {\texttt{printf} (libc)};
\node[caja] (s) at (0,-2.4) {\texttt{write} (envoltorio)};
\node[caja] (k) at (0,-3.6) {núcleo};
\draw[->] (p) -- (b);
\draw[->] (b) -- (s);
\draw[->] (s) -- (k);
\node[font=\scriptsize, anchor=west] at (2.0,-3.0) {cambio a modo núcleo};
\draw[dashed] (-2.6,-3.0) -- (1.9,-3.0);
\end{tikzpicture}
\end{center}
```

La distinción importa al depurar: `printf` acumula en un búfer y puede no haber
llegado al núcleo cuando el programa aborta, así que la última línea impresa no es
necesariamente la última ejecutada. Con `write` no pasa, porque no hay búfer
intermedio.

### La shell

El intérprete de órdenes **no forma parte del núcleo**: es un proceso de usuario que
lee una línea, la interpreta y pide al sistema que ejecute lo que corresponda.

Su ciclo, que es el mismo desde los años setenta:

1. Escribe el indicador y lee una línea.
2. La divide en palabras y expande comodines, variables y sustituciones.
3. Si la orden es interna —`cd`, `export`—, la ejecuta ella misma.
4. Si es externa, hace `fork`, y el hijo hace `exec` del programa.
5. Espera al hijo con `wait`, salvo que la orden terminase en `&`.

El paso 3 explica una duda recurrente: **`cd` tiene que ser interna**. Un proceso
hijo que cambiase de directorio moriría al terminar y dejaría a la shell donde
estaba, así que el cambio no serviría de nada.

## Programas y procesos

```{=latex}
\begin{definicion}[Proceso]
Un programa en ejecución, junto con todo su estado: el contenido de su memoria, sus
registros, sus archivos abiertos y la información que el sistema operativo mantiene
sobre él.
\end{definicion}
```

| Programa | Proceso |
| --- | --- |
| entidad pasiva, un archivo en disco | entidad activa, en ejecución |
| existe aunque nadie lo ejecute | existe mientras se ejecuta |
| uno | puede haber muchos del mismo programa |

Tres ventanas de terminal abiertas son tres procesos y un solo programa. Cada una
tiene su propio directorio actual, sus variables y su historial, porque el estado
es del proceso y no del programa.

### El bloque de control de proceso

El sistema operativo mantiene por cada proceso una estructura con todo su estado:

| Campo | Contenido |
| --- | --- |
| Identificador | PID, y PID del padre |
| Estado | listo, en ejecución, bloqueado, terminado |
| Contexto | contador de programa, registros, palabra de estado |
| Memoria | punteros a sus segmentos o a su tabla de páginas |
| Archivos | tabla de descriptores abiertos |
| Planificación | prioridad, tiempo consumido |
| Credenciales | usuario y grupo propietarios |

El **cambio de contexto** consiste en guardar esa estructura para el proceso que
sale y cargar la del que entra. No hace trabajo útil, así que su coste es puro
gasto, y por eso el cuanto de tiempo no puede ser demasiado pequeño.

### Estados

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth, node distance=26mm,
  estado/.style={draw, rounded corners=0pt, minimum width=20mm,
                 minimum height=8mm, font=\small}
]
\node[estado] (nuevo)  at (0,0)      {Nuevo};
\node[estado] (listo)  at (3.6,0)    {Listo};
\node[estado] (ejec)   at (8.0,0)    {Ejecución};
\node[estado] (bloq)   at (5.8,-2.4) {Bloqueado};
\node[estado] (term)   at (11.6,0)   {Terminado};
\draw[->] (nuevo) -- (listo);
\draw[->] (listo) -- node[font=\scriptsize, below=1pt] {se elige} (ejec);
\draw[->] (ejec) -- (term);
\draw[->] (ejec) to[bend left=15]
      node[font=\scriptsize, right=2pt, pos=0.55] {espera E/S} (bloq);
\draw[->] (bloq) to[bend left=15]
      node[font=\scriptsize, left=2pt, pos=0.45] {llega el dato} (listo);
\draw[->] (ejec) to[bend right=30]
      node[font=\scriptsize, above] {fin de cuanto} (listo);
\end{tikzpicture}
\end{center}
```

Las dos transiciones que salen de **Ejecución** hacia atrás son las que distinguen
los sistemas. La de «espera E/S» existe en cualquier sistema multiprogramado; la de
«fin de cuanto» solo en los apropiativos, y es la que garantiza que ningún proceso
monopolice el procesador.

### Creación en POSIX

```c
pid_t pid = fork();          // duplica el proceso
if (pid == 0) {
  execlp("ls", "ls", "-l", NULL);   // el hijo se convierte en otro programa
  perror("exec");                   // solo se llega aquí si exec falla
  exit(1);
} else {
  int estado;
  waitpid(pid, &estado, 0);         // el padre espera
}
```

Tres cosas que este fragmento enseña y que se malentienden a menudo:

- **`fork` devuelve dos veces**, una en cada proceso: cero en el hijo y el PID del
  hijo en el padre. Es el único punto del lenguaje donde una función retorna dos
  veces, y de ahí que el `if` decida quién es quién.
- **`exec` no vuelve si tiene éxito**: sustituye la imagen del proceso. La línea
  siguiente solo se ejecuta si falló, y por eso ahí va el tratamiento del error.
- **El padre debe esperar al hijo.** Si no lo hace, el hijo terminado queda como
  **zombi**: ya no ejecuta nada, pero su entrada sigue en la tabla de procesos para
  que alguien lea su código de salida.

```{=latex}
\begin{anotacion}
Un proceso cuyo padre muere antes que él queda \textbf{huérfano} y lo adopta el
proceso inicial del sistema, que sí llama a \texttt{wait}. Por eso los huérfanos no
se acumulan y los zombis sí: el problema no es que el padre muera, es que viva sin
recoger a sus hijos.
\end{anotacion}
```

## Modelos de memoria de un proceso

Un proceso ve un espacio de direcciones propio, dividido en zonas con propósitos
distintos:

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.95]
\draw (0,0) rectangle (4.2,1.0);   \node[font=\small] at (2.1,0.5) {Código (texto)};
\draw (0,1.0) rectangle (4.2,2.0); \node[font=\small] at (2.1,1.5) {Datos inicializados};
\draw (0,2.0) rectangle (4.2,3.0); \node[font=\small] at (2.1,2.5) {Datos sin inicializar};
\draw (0,3.0) rectangle (4.2,4.2); \node[font=\small] at (2.1,3.6) {Montículo};
\draw (0,4.2) rectangle (4.2,5.4); \node[font=\small] at (2.1,4.8) {(libre)};
\draw (0,5.4) rectangle (4.2,6.4); \node[font=\small] at (2.1,5.9) {Pila};
\draw[->, >=stealth] (4.5,3.1) -- (4.5,4.1);
\node[font=\scriptsize, anchor=west] at (4.7,3.6) {crece hacia arriba};
\draw[->, >=stealth] (4.5,5.3) -- (4.5,4.3);
\node[font=\scriptsize, anchor=west] at (4.7,4.8) {crece hacia abajo};
\node[font=\scriptsize, anchor=east] at (-0.2,0.1) {0};
\node[font=\scriptsize, anchor=east] at (-0.2,6.3) {máx};
\end{tikzpicture}
\end{center}
```

| Zona | Qué contiene | Cuándo se reserva |
| --- | --- | --- |
| Código | las instrucciones | al cargar; solo lectura |
| Datos inicializados | variables globales con valor | al cargar |
| Datos sin inicializar | globales sin valor, a cero | al cargar; no ocupan en el archivo |
| Montículo | lo que pide `malloc` o `new` | en ejecución, bajo demanda |
| Pila | marcos de llamada, locales, parámetros | en ejecución, por llamada |

Que el código sea de solo lectura permite **compartirlo**: diez procesos del mismo
programa comparten una sola copia en memoria física, y cada uno tiene sus datos.

Y que pila y montículo crezcan uno hacia el otro explica los dos desbordamientos
clásicos: una recursión sin caso base agota la pila, y un `malloc` sin `free`
repetido agota el montículo. En un sistema con memoria virtual no chocan entre sí,
porque hay un hueco enorme sin asignar entre los dos, pero cada uno tiene su límite.

```{=latex}
\begin{ejemplo}
Una variable global sin inicializar no ocupa espacio en el archivo ejecutable, solo
una anotación de cuántos bytes hay que poner a cero al cargar. Por eso declarar un
vector global de un millón de enteros no engorda el binario, y declararlo con
valores iniciales sí: cuatro megabytes de ceros escritos en el archivo.
\end{ejemplo}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
¿Cuántas líneas imprime este programa?

\medskip
\texttt{fork(); fork(); printf("hola\textbackslash n");}
\end{ejercicio}

\begin{solucion}
Cuatro. El primer \texttt{fork} deja dos procesos y el segundo duplica cada uno, así
que quedan $2^2 = 4$, y todos ejecutan el \texttt{printf}. Con $n$ llamadas
consecutivas serían $2^n$.
\end{solucion}

\begin{ejercicio}
¿Por qué \texttt{cd} no puede ser un programa externo?
\end{ejercicio}

\begin{solucion}
Porque el directorio actual es un atributo del proceso. Un programa externo se
ejecuta en un proceso hijo, cambiaría su propio directorio y moriría al terminar,
dejando a la shell donde estaba. Tiene que ser una orden interna que la propia shell
ejecute sobre sí misma, con \texttt{chdir}.
\end{solucion}

\begin{ejercicio}
En un sistema donde los procesos pasan el 90\,\% del tiempo esperando E/S, ¿cuántos
hacen falta para que el procesador esté ocupado más del 90\,\% del tiempo?
\end{ejercicio}

\begin{solucion}
Hay que resolver $1 - 0{,}9^n > 0{,}9$, es decir $0{,}9^n < 0{,}1$, que da
$n > \ln 0{,}1 / \ln 0{,}9 \approx 21{,}9$: veintidós procesos. El modelo supone
independencia entre ellos, así que en la práctica hacen falta más, sobre todo si
compiten por el mismo dispositivo.
\end{solucion}
```

El desarrollo de la multiprogramación y del modelo de procesos está en
\cite{stallings2018} y \cite{carretero2021}, y la interfaz POSIX en
\cite{johnson2005}.
