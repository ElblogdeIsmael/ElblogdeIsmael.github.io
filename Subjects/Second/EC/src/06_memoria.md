# Memoria

Tema 6 del programa. Por qué la memoria se organiza en niveles, qué propiedad de
los programas hace que esa organización funcione, y cómo se diseña el nivel que
más rendimiento decide: la caché.

## Jerarquía de memoria

No existe una tecnología que sea a la vez rápida, grande y barata. Las tres
propiedades se contraponen:

| Tecnología | Tiempo de acceso | Coste por bit | Capacidad típica |
| --- | --- | --- | --- |
| Registros | menos de 1 ciclo | altísimo | cientos de bytes |
| Caché SRAM | 1 a 40 ciclos | alto | de KiB a decenas de MiB |
| Memoria principal DRAM | 200 a 300 ciclos | medio | GiB |
| Disco de estado sólido | decenas de miles de ciclos | bajo | TiB |
| Disco magnético | millones de ciclos | muy bajo | TiB |

La jerarquía apila los niveles de forma que el procesador vea, aproximadamente,
la velocidad del más rápido y la capacidad del más lento. Cada nivel guarda un
subconjunto del siguiente.

Los números de la tabla son la clave del tema: entre un registro y la DRAM hay
dos órdenes de magnitud, y ese hueco —la **brecha de memoria**— ha crecido
durante décadas, porque la velocidad del procesador mejoró más rápido que la
latencia de la memoria. La caché no es una optimización opcional; es lo que hace
utilizable a un procesador moderno.

### Por qué funciona

Solo funciona porque los programas no acceden a la memoria al azar. Cumplen el
**principio de localidad**:

- **Localidad temporal.** Lo accedido hace poco se vuelve a acceder pronto. La
  causan los bucles, las variables de trabajo y las llamadas repetidas.
- **Localidad espacial.** Lo próximo a lo accedido se accede pronto. La causan el
  recorrido secuencial de vectores, la ejecución en línea del código y los campos
  contiguos de una estructura.

Sobre localidad temporal se apoya la decisión de **qué guardar**; sobre localidad
espacial, la de **traer bloques y no palabras sueltas**.

El caso que lo demuestra por contraste es el recorrido de una matriz por
columnas. El programa es el mismo con dos bucles intercambiados, y la diferencia
de tiempo puede ser de un orden de magnitud, porque el recorrido por columnas
salta una fila entera entre accesos y no aprovecha ni un byte de los que la caché
trajo.

## Memoria caché

### Funcionamiento

La memoria se divide en **bloques** del mismo tamaño, y la caché en **líneas** que
alojan un bloque cada una. Ante un acceso:

- **Acierto.** El bloque está en la caché. Se sirve a velocidad de caché.
- **Fallo.** No está. Se trae el bloque entero del nivel siguiente, se coloca en
  una línea y se sirve.

El tiempo medio de acceso, con tasa de aciertos $h$, tiempo de acierto $T_a$ y
penalización de fallo $T_f$:

$$T_{medio} = T_a + (1-h) \cdot T_f$$

Con $T_a = 1$ ciclo, $T_f = 200$ y $h = 0{,}95$, el acceso medio son 11 ciclos.
Subir la tasa al 99 % lo baja a 3. **Un punto porcentual de aciertos vale más que
duplicar la velocidad de la caché**, y por eso el diseño se orienta a fallar
menos y no a acertar más rápido.

Con varios niveles la fórmula se anida, y conviene distinguir dos tasas: la
**local**, referida a los accesos que llegan a ese nivel, y la **global**,
referida a todos los del procesador. La local del segundo nivel parece mala
—muchos aciertos ya los absorbió el primero— y no lo es.

### Organización

Dónde puede colocarse un bloque. Tres esquemas, y los dos extremos son casos
particulares del intermedio.

**Directa.** Cada bloque tiene una única línea posible, la de índice
$bloque \bmod L$, con $L$ líneas.

- Búsqueda inmediata: se calcula el índice y se compara una etiqueta.
- Y el problema: dos bloques que compitan por la misma línea se expulsan
  mutuamente aunque el resto de la caché esté vacía. Es el **fallo por
  conflicto**, y produce el patrón patológico de recorrer dos vectores separados
  por una potencia de dos.

**Totalmente asociativa.** Cualquier bloque en cualquier línea. Elimina los
conflictos y obliga a comparar todas las etiquetas a la vez, lo que solo es
viable con pocas líneas. Se usa en las TLB.

**Asociativa por conjuntos de $n$ vías.** La caché se divide en conjuntos de $n$
líneas; un bloque va a un conjunto fijo y a cualquier línea dentro de él. Se
comparan $n$ etiquetas.

| | Directa | 4 vías | Totalmente asociativa |
| --- | --- | --- | --- |
| Comparadores | 1 | 4 | uno por línea |
| Fallos por conflicto | muchos | pocos | ninguno |
| Tiempo de acierto | el menor | intermedio | el mayor |
| Uso real | cachés grandes de último nivel | primer y segundo nivel | TLB |

Entre 4 y 8 vías se obtiene casi toda la ventaja; a partir de ahí el rendimiento
apenas mejora y el tiempo de acierto empeora.

### Formato de la dirección

Una dirección se descompone en tres campos:

```
   |<---- etiqueta ---->|<--- indice --->|<-- desplazamiento -->|
```

- **Desplazamiento**: $\log_2(\text{tamaño de bloque})$ bits. Selecciona el byte
  dentro del bloque.
- **Índice**: $\log_2(\text{número de conjuntos})$ bits. Selecciona el conjunto.
- **Etiqueta**: el resto. Se compara para saber si el bloque es el buscado.

Ejemplo: caché de 32 KiB, asociativa de 4 vías, bloques de 64 bytes, direcciones
de 32 bits.

| Magnitud | Cálculo | Valor |
| --- | --- | ---: |
| Líneas | $32768 / 64$ | 512 |
| Conjuntos | $512 / 4$ | 128 |
| Desplazamiento | $\log_2 64$ | 6 bits |
| Índice | $\log_2 128$ | 7 bits |
| Etiqueta | $32 - 7 - 6$ | 19 bits |

Cada línea guarda además un bit de validez y, si la escritura es diferida, un bit
de modificado. El coste de esos metadatos no es despreciable: con etiquetas de 19
bits y bloques de 64 bytes, el 4 % de la caché no guarda datos.

### Tamaño de bloque

Aumentarlo aprovecha mejor la localidad espacial y reduce el número de etiquetas.
Pero pasado un punto lo empeora todo: hay menos bloques distintos en la caché, la
penalización por fallo crece porque hay que traer más bytes, y se transfieren
datos que no se van a usar. La curva de fallos frente a tamaño de bloque tiene un
mínimo, típicamente entre 32 y 128 bytes.

### Estrategias

**Extracción.** Cuándo se trae un bloque.

- *Por demanda*: cuando se falla. Es lo básico.
- *Anticipada* (prebúsqueda): se traen bloques que se predice que harán falta.
  Acierta con recorridos secuenciales y, si falla, contamina la caché expulsando
  algo útil.

**Colocación.** Dónde se coloca. La determina la organización.

**Reemplazo.** Qué línea se expulsa cuando el conjunto está lleno. En una caché
directa no hay elección; en las demás:

| Política | Criterio | Coste |
| --- | --- | --- |
| LRU | la que lleva más tiempo sin usarse | exacto solo con pocas vías |
| Pseudo-LRU | aproximación con un árbol de bits | lo que se implementa |
| FIFO | la más antigua | barato y peor |
| Aleatoria | al azar | sorprendentemente competitiva con muchas vías |

**Actualización.** Qué hacer al escribir.

| | Escritura inmediata | Escritura diferida |
| --- | --- | --- |
| Cuándo se propaga | en cada escritura | al expulsar la línea |
| Tráfico al nivel siguiente | alto | bajo |
| Coherencia entre niveles | siempre | solo al expulsar |
| Metadatos | ninguno | bit de modificado |
| Fallo de lectura | no requiere escribir nada | puede exigir volcar la línea sucia |

La escritura inmediata se acompaña de un **búfer de escritura** que absorbe las
escrituras y deja seguir al procesador; sin él, cada escritura costaría un acceso
a memoria principal.

Y ante un fallo de escritura hay dos opciones: traer el bloque y escribir sobre
él, o escribir directamente al nivel siguiente sin traerlo. La primera se
combina con escritura diferida y la segunda con escritura inmediata, porque son
las parejas coherentes.

### Clasificación de los fallos

Las tres «C», que dicen qué hacer con cada tipo:

| Tipo | Causa | Se reduce con |
| --- | --- | --- |
| Forzosos | primer acceso al bloque | bloques mayores, prebúsqueda |
| De capacidad | la caché no cabe el conjunto de trabajo | más capacidad |
| De conflicto | varios bloques compiten por el mismo conjunto | más asociatividad |

Los forzosos son inevitables por definición. Distinguir capacidad de conflicto es
lo que dice si conviene una caché mayor o más asociativa, y se mide comparando
con una caché totalmente asociativa del mismo tamaño: lo que esta evita son los
de conflicto.

En multiprocesadores se añade una cuarta: los fallos de **coherencia**, causados
por invalidaciones de otro procesador. De ahí el *falso compartimiento*, donde
dos núcleos escriben variables distintas que caen en la misma línea y se invalidan
mutuamente sin compartir nada en realidad.

## Memorias con múltiples módulos

La memoria principal se construye con varios módulos que pueden trabajar en
paralelo, lo que multiplica el ancho de banda sin bajar la latencia de un acceso
suelto.

- **Entrelazado de orden bajo.** Los bits bajos de la dirección seleccionan el
  módulo, así que direcciones consecutivas caen en módulos distintos. Un acceso
  secuencial —traer una línea de caché— se reparte entre todos y va $n$ veces más
  rápido. Es lo que se usa.
- **Entrelazado de orden alto.** Los bits altos seleccionan el módulo, así que
  cada uno cubre un rango contiguo. No acelera el acceso secuencial; sirve para
  aislar módulos o poder ampliar la memoria.

La DRAM añade su propia estructura: los accesos se hacen por fila, y leer varias
palabras de la misma fila abierta es mucho más barato que cambiar de fila. Los
canales, rangos y bancos de un módulo moderno son la misma idea de entrelazado
llevada a varios niveles.

## Influencia en las prestaciones

El efecto de la memoria sobre el CPI se suma al CPI de ejecución:

$$\text{CPI} = \text{CPI}_{ejec} + \text{accesos por instrucción} \times (1-h) \times \text{penalización}$$

Con CPI de ejecución 1, 1,3 accesos por instrucción, 3 % de fallos y 200 ciclos
de penalización, el CPI resultante es $1 + 1{,}3 \cdot 0{,}03 \cdot 200 = 8{,}8$.
**El procesador pasa casi el 90 % del tiempo esperando a la memoria.** El número
es el argumento de todo el tema.

Cómo lo reduce el programador, sin tocar el hardware:

- **Recorrer en el orden en que los datos están en memoria**, que en C es por
  filas.
- **Bloquear** los algoritmos: dividir una multiplicación de matrices en
  submatrices que quepan en la caché, para reutilizar cada bloque mientras está
  cargado.
- **Compactar las estructuras**, ordenando los campos de mayor a menor tamaño
  para minimizar el relleno, y separando los campos que se recorren de los que
  no.
- **Alinear** los datos al tamaño de línea cuando el acceso es concurrente, para
  evitar el falso compartimiento.

Ninguna de esas medidas cambia el algoritmo ni su complejidad asintótica, y todas
pueden multiplicar la velocidad por varias veces. Es la razón por la que este
tema cierra la asignatura: explica por qué dos programas con el mismo número de
operaciones tardan tiempos muy distintos. El análisis cuantitativo completo está
en \cite{patterson2021}, y el enfoque desde el punto de vista del programador, en
\cite{bryant2016}.
