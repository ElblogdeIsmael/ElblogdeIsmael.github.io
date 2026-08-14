# Gestión de memoria

Tema 3 del programa. Cómo se reparte la memoria física entre el núcleo y los
procesos, cómo se traduce una dirección lógica en una física y qué hace el
sistema cuando la memoria que los procesos piden supera a la que hay.

## El problema

La memoria física es un vector de bytes con direcciones consecutivas. Sobre él
hay que sostener tres exigencias a la vez:

- **Reubicación.** Un programa se compila sin saber en qué dirección se cargará,
  y puede cargarse en una distinta cada vez.
- **Protección.** Un proceso no puede leer ni escribir la memoria de otro, ni la
  del núcleo.
- **Compartición.** Y sin embargo dos procesos que ejecutan el mismo programa
  deben poder compartir su código, y dos que cooperan, una región de datos.

Las tres se resuelven con lo mismo: **traducir**. Las direcciones que el proceso
emite no son las de la memoria; hay una capa que las convierte, y esa capa es el
lugar natural donde comprobar permisos y donde hacer que dos direcciones lógicas
distintas apunten al mismo sitio.

| Dirección | Otros nombres | Quién la ve |
| --- | --- | --- |
| Lógica | virtual | el proceso, el compilador, el depurador |
| Física | real | el bus de memoria |

La traducción la hace la **MMU**, la unidad de gestión de memoria, en hardware y
en cada acceso. Que sea hardware no es un detalle de implementación: si fuera
software, cada acceso a memoria costaría una llamada al sistema.

## Gestión de memoria para el sistema operativo

El núcleo tiene sus propias necesidades y no puede usar las mismas
abstracciones que ofrece a los procesos. No puede permitirse un fallo de página
al atender un fallo de página, así que su memoria está fija en marcos físicos.

### El sistema colega

Para asignar bloques físicos contiguos, Linux usa el **sistema colega** (*buddy
system*). La memoria se divide en bloques de tamaño potencia de dos, de una
página hasta 1024 páginas. Al pedir un bloque:

1. Se busca en la lista del tamaño exacto.
2. Si está vacía, se toma uno del siguiente tamaño y se parte en dos mitades,
   *colegas*.
3. Una mitad se entrega; la otra pasa a la lista del tamaño inferior.

Al liberar, si el colega del bloque también está libre, los dos se fusionan y la
fusión se propaga hacia arriba. La dirección del colega se calcula con un
`XOR` sobre el bit correspondiente al tamaño, así que encontrarlo es una
operación, no una búsqueda.

- **A favor:** fusión barata y fragmentación externa contenida.
- **En contra:** fragmentación interna de hasta el 50 %. Pedir 33 páginas da un
  bloque de 64.

### Asignadores de objetos

Casi todo lo que el núcleo asigna son estructuras pequeñas y del mismo tamaño,
que se crean y destruyen constantemente: descriptores de archivo, entradas de
directorio, sockets. Para eso el sistema colega es una herramienta demasiado
gruesa.

La respuesta es el **asignador de losas** (*slab*): una caché por tipo de
objeto, con los objetos ya construidos y listos para reutilizar. Ahorra la
inicialización, y mantiene los objetos del mismo tipo juntos, lo que mejora el
comportamiento de la caché del procesador. Linux ha usado tres implementaciones
de la idea —SLAB, SLOB y SLUB—; la vigente es SLUB, más simple y con mejor
escalabilidad en máquinas con muchos núcleos.

### Zonas

No toda la memoria física es equivalente. Linux la divide en zonas porque
ciertos dispositivos solo pueden hacer DMA sobre los primeros megabytes, y
porque en máquinas de 32 bits no toda la memoria física cabía en el espacio de
direcciones del núcleo. En 64 bits la distinción casi desaparece, pero la
estructura sigue ahí y explica que un sistema con memoria libre pueda fallar al
asignar: la memoria libre puede estar en la zona equivocada.

## Gestión de memoria para los procesos

### Asignación contigua

El esquema más simple: cada proceso ocupa un bloque contiguo, delimitado por un
registro base y un registro límite. La traducción es una suma y una comparación,
y la protección sale gratis.

Su problema es la **fragmentación externa**: tras varias asignaciones y
liberaciones queda memoria libre repartida en huecos, ninguno lo bastante grande.
Con particiones dinámicas hay que elegir hueco:

| Algoritmo | Criterio | Comportamiento |
| --- | --- | --- |
| Primer ajuste | el primer hueco que sirva | el más rápido; fragmenta el principio de la memoria |
| Siguiente ajuste | igual, pero desde donde se quedó | reparte la fragmentación; algo peor en ocupación |
| Mejor ajuste | el hueco más pequeño que sirva | deja restos minúsculos e inservibles |
| Peor ajuste | el hueco más grande | el peor de los cuatro en la práctica |

La regla del 50 %, obtenida por análisis estadístico del primer ajuste, dice que
con $n$ bloques asignados quedan del orden de $n/2$ huecos: un tercio de la
memoria se pierde. La compactación —mover procesos para juntar los huecos— la
resuelve, pero exige reubicación dinámica y detener el sistema mientras se copia.

### Paginación

La memoria física se divide en **marcos** de tamaño fijo y el espacio lógico en
**páginas** del mismo tamaño. Cualquier página puede ir a cualquier marco, así
que la asignación deja de necesitar contigüidad y la fragmentación externa
desaparece. Queda solo la interna, acotada por debajo de una página.

Una dirección lógica se parte en dos campos:

```
   |<---- numero de pagina (p) ---->|<--- desplazamiento (d) --->|
```

Con páginas de $2^k$ bytes, el desplazamiento son los $k$ bits bajos y el número
de página el resto. No hace falta dividir: el reparto es un desplazamiento de
bits, y de ahí que el tamaño de página sea siempre potencia de dos.

La **tabla de páginas** traduce $p$ en un número de marco. Cada entrada guarda,
además del marco:

| Bit | Para qué |
| --- | --- |
| Presencia | la página está en memoria o no |
| Protección | lectura, escritura, ejecución |
| Modificado (*dirty*) | ha sido escrita desde que se cargó |
| Referenciado | ha sido accedida recientemente |
| Usuario/núcleo | accesible en modo usuario o solo en núcleo |
| Caché | si es cacheable; se desactiva para memoria de dispositivos |

El bit de modificado es el que evita escrituras inútiles: una página que no se ha
modificado desde que se leyó no hace falta volver a escribirla al expulsarla.

#### El tamaño de la tabla

Con direcciones de 64 bits y páginas de 4 KiB, una tabla lineal por proceso
tendría $2^{52}$ entradas. Es inviable, y de ahí las tres soluciones:

- **Tablas multinivel.** El número de página se parte en varios campos, uno por
  nivel. Solo se crean las tablas de los niveles intermedios que se usan, así que
  un espacio de direcciones disperso ocupa poco. x86-64 usa cuatro niveles, y
  cinco desde que se amplió el espacio direccionable.
- **Tabla invertida.** Una entrada por marco físico en vez de por página lógica,
  indexada por una función *hash* del par proceso-página. El tamaño pasa a
  depender de la memoria instalada y no del espacio lógico; a cambio, compartir
  memoria se complica.
- **Tabla de páginas *hash***. Variante de la anterior para espacios de
  direcciones grandes y dispersos.

#### La TLB

Con tablas de cuatro niveles, una traducción cuesta cuatro accesos a memoria
más el acceso real: cinco veces el precio. La **TLB** es una caché asociativa
de traducciones recientes que lo evita.

Si la tasa de aciertos es $\alpha$, el acceso cuesta en la TLB $t$, el acceso a
memoria $m$ y la tabla tiene $n$ niveles, el tiempo efectivo es

$$T = \alpha\,(t + m) + (1-\alpha)\,\bigl(t + (n+1)\,m\bigr)$$

Con $\alpha = 0{,}99$, $n = 4$, $t = 1$ ns y $m = 100$ ns el acceso efectivo son
unos 105 ns frente a los 101 ideales: un 4 % de sobrecoste. Con $\alpha = 0{,}90$
sube a 141 ns, un 40 %. La eficacia del sistema entero descansa en esa tasa de
aciertos, y por eso existen las **páginas grandes** de 2 MiB y 1 GiB: una sola
entrada de TLB cubre lo que antes cubrían quinientas.

Al cambiar de proceso, las traducciones de la TLB dejan de valer. Vaciarla
entera en cada cambio de contexto es caro, así que los procesadores etiquetan
cada entrada con un identificador de espacio de direcciones y así conviven
traducciones de varios procesos.

### Segmentación

La paginación divide por tamaño; la segmentación divide por significado. Un
proceso se ve como un conjunto de segmentos —código, datos, pila, cada
biblioteca— de longitud variable, y una dirección es el par (segmento,
desplazamiento).

La ventaja es que la unidad de protección y de compartición coincide con la
unidad lógica: el segmento de código de una biblioteca compartida se protege y
se comparte como un todo. La desventaja es que vuelve la fragmentación externa,
porque los segmentos son de tamaño variable.

La combinación **segmentación paginada** aplica las dos: se segmenta por
significado y cada segmento se pagina. Es lo que hacía x86 en 32 bits. En x86-64
la segmentación quedó reducida a casi nada —las bases de los segmentos se fuerzan
a cero— y solo sobreviven `FS` y `GS`, que se usan para el almacenamiento local
al hilo.

## Memoria virtual

La idea: un proceso no necesita estar entero en memoria para ejecutarse. Basta
con la parte que está usando. Lo que permite:

- Ejecutar programas mayores que la memoria física.
- Aumentar el grado de multiprogramación, porque cada proceso ocupa menos.
- Cargar más rápido, porque no hace falta leer el ejecutable entero.

### Paginación bajo demanda

Las páginas se traen cuando se referencian, no antes. Al arrancar, la tabla de
páginas del proceso tiene todas las entradas marcadas como no presentes; el
primer acceso a cada una provoca un **fallo de página**.

El tratamiento:

1. La MMU ve el bit de presencia a cero y genera una excepción.
2. El núcleo comprueba si la dirección es válida para ese proceso. Si no lo es,
   la señal es `SIGSEGV` y el proceso muere.
3. Si es válida, busca un marco libre. Si no lo hay, aplica el algoritmo de
   reemplazo.
4. Programa la lectura desde disco y bloquea el proceso.
5. Cuando la transferencia termina, actualiza la tabla de páginas y devuelve el
   proceso a la cola de listos.
6. Se reejecuta **la instrucción que falló**, no la siguiente.

Ese último punto obliga a que las instrucciones sean reiniciables, y no todas lo
son de forma trivial: una instrucción que copia bloques y modifica registros de
índice sobre la marcha puede haber dejado el estado a medias. Los procesadores lo
resuelven comprobando de antemano que todas las páginas implicadas están
presentes, o guardando el estado intermedio en registros ocultos.

El coste de un fallo de página domina el rendimiento. Con un tiempo de acceso a
memoria de 100 ns y un fallo servido en 8 ms, el tiempo de acceso efectivo con
probabilidad de fallo $p$ es

$$T_{ef} = (1-p)\cdot 100\ \text{ns} + p \cdot 8\ \text{ms}$$

Para que la degradación se quede por debajo del 10 % hace falta $p < 2{,}5\cdot
10^{-6}$: menos de un fallo cada 400 000 accesos. La memoria virtual funciona
porque los programas tienen **localidad**, no porque el mecanismo sea barato.

### Copia al escribir

Ya apareció con `fork`. Padre e hijo comparten los marcos, marcados de solo
lectura aunque la región sea escribible. El primer intento de escritura provoca
una excepción, el núcleo duplica esa página, la marca escribible en el proceso
que escribió y deja al otro con la original. Solo se copia lo que se modifica.

El mismo mecanismo sostiene las páginas a cero: todas las páginas de BSS de todos
los procesos apuntan a un único marco lleno de ceros hasta que alguien escribe.

### Algoritmos de reemplazo

Cuando no hay marco libre hay que elegir víctima. Se evalúan sobre una cadena de
referencias contando fallos de página.

**Óptimo (OPT).** Expulsa la página que tardará más en volver a usarse. No es
implementable —exige conocer el futuro— y sirve como cota inferior contra la que
medir a los demás.

**FIFO.** Expulsa la más antigua. Barato y malo: expulsa páginas muy usadas solo
por llevar tiempo. Además sufre la **anomalía de Belady**, que es el resultado
más contraintuitivo del tema: darle más marcos puede producir más fallos. Con la
cadena `1 2 3 4 1 2 5 1 2 3 4 5`, FIFO da 9 fallos con tres marcos y 10 con
cuatro.

**LRU.** Expulsa la que lleva más tiempo sin usarse. Es una buena aproximación al
óptimo, y pertenece a la familia de algoritmos de pila, que por construcción no
sufren la anomalía de Belady. Su problema es el coste: una implementación exacta
exige actualizar una marca de tiempo o una lista enlazada en **cada acceso a
memoria**, lo que solo es viable en hardware que no existe.

Las aproximaciones que sí se implementan:

- **Bit de referencia.** El hardware lo pone a uno en cada acceso; el sistema lo
  limpia periódicamente. Distingue usada de no usada, pero no ordena.
- **Segunda oportunidad, o reloj.** FIFO con bit de referencia: si la candidata
  lo tiene a uno, se le pone a cero y se pasa a la siguiente en vez de
  expulsarla. Las páginas se recorren en círculo, de donde el nombre.
- **Reloj mejorado.** Considera el par (referenciado, modificado) y prefiere
  expulsar las no modificadas, que no hay que escribir a disco.
- **Envejecimiento.** Un registro de desplazamiento por página, al que se le
  inyecta el bit de referencia por la izquierda. Aproxima el orden de LRU con
  coste acotado.

Comparación sobre la cadena `7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1` con tres
marcos:

| Algoritmo | Fallos |
| --- | ---: |
| Óptimo | 9 |
| LRU | 12 |
| FIFO | 15 |

### Asignación de marcos

Cuántos marcos recibe cada proceso. La asignación **equitativa** reparte por
igual e ignora que los procesos tienen tamaños muy distintos; la
**proporcional** reparte según el tamaño del espacio lógico; la **por
prioridad** favorece a los procesos prioritarios.

Y una decisión transversal: el reemplazo **local** obliga a cada proceso a
elegir víctima entre sus propios marcos, y el **global** le permite quitárselo a
otro. El global aprovecha mejor la memoria y hace que el rendimiento de un
proceso dependa del comportamiento de los demás, lo que lo vuelve difícil de
reproducir.

### Hiperpaginación

Si un proceso no tiene marcos suficientes para su conjunto de páginas activas,
falla, expulsa una página que necesita enseguida, vuelve a fallar y así
indefinidamente. Es la **hiperpaginación** (*thrashing*): el sistema pasa más
tiempo moviendo páginas que ejecutando.

Con reemplazo global se realimenta sola, y de la peor manera. La CPU baja de
ocupación porque todos los procesos están bloqueados esperando disco; el
planificador de largo plazo interpreta que hay capacidad libre y admite más
procesos; los nuevos procesos piden marcos y la situación empeora. La ocupación
de CPU cae en vertical mientras el grado de multiprogramación sube.

Dos modelos para evitarlo:

- **Conjunto de trabajo.** El conjunto de páginas referenciadas en las últimas
  $\Delta$ referencias. Si la suma de los conjuntos de trabajo de todos los
  procesos supera los marcos disponibles, hay que suspender alguno. La elección
  de $\Delta$ es empírica: demasiado pequeño no cubre la localidad, demasiado
  grande solapa varias.
- **Frecuencia de fallos.** Se mide directamente la tasa de fallos de cada
  proceso y se le dan más marcos si supera un umbral alto, o se le quitan si baja
  del umbral bajo. Ataca el síntoma directamente y es más fácil de medir.

### Archivos proyectados en memoria

`mmap()` asocia un archivo a un rango de direcciones del proceso. A partir de
ahí el archivo se lee y se escribe con accesos a memoria, y el sistema de
paginación se encarga del resto: el primer acceso a cada página provoca un fallo
que la trae de disco, y las escrituras se propagan al archivo según el modo.

Frente a `read` y `write`:

- No hay copia entre el búfer del núcleo y el del usuario.
- No hay una llamada al sistema por operación.
- Varios procesos que proyectan el mismo archivo en modo compartido comparten
  los marcos físicos, lo que sirve a la vez como memoria compartida.

Y los inconvenientes, que también los tiene: el coste por fallo de página se
paga aun cuando el acceso es secuencial, no hay forma limpia de gestionar un
error de entrada/salida —llega como `SIGBUS`, no como un valor de retorno—, y
cambiar el tamaño del archivo mientras está proyectado es terreno resbaladizo.

Es el mecanismo con el que se cargan los ejecutables y las bibliotecas
compartidas: el núcleo no lee el binario, lo proyecta. El tratamiento en Linux,
con el detalle de las estructuras implicadas, está en \cite{mauerer2008}; la
interfaz y sus casos límite, en \cite{kerrisk2010}.
