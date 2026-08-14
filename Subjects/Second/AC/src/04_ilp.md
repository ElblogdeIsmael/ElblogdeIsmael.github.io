# Arquitecturas con paralelismo a nivel de instrucción

Tema 4 del programa. Cómo se extrae paralelismo de un único flujo de
instrucciones, qué lo limita y qué pueden hacer el compilador y el programador
para ayudar.

## El punto de partida

El cauce segmentado solapa instrucciones y su cota es un CPI de 1: una
instrucción terminada por ciclo. Para bajar de ahí hay que **emitir varias
instrucciones por ciclo**, y esa es la definición de una máquina superescalar. La
medida deja de ser el CPI y pasa a ser su inverso, el IPC.

Lo que lo impide son las dependencias.

## Dependencias

| Tipo | Nombre | Descripción | ¿Es real? |
| --- | --- | --- | --- |
| RAW | dependencia verdadera | una instrucción usa lo que otra produce | sí |
| WAR | antidependencia | una escribe donde otra aún no ha leído | no: solo comparten el nombre |
| WAW | dependencia de salida | dos escriben el mismo registro | no |

Solo la primera transmite información. Las otras dos son artefactos de que el
número de registros es finito, y de ahí que se llamen falsas.

```asm
        addq    %rax, %rbx        # 1
        movq    %rbx, %rcx        # 2  RAW con 1: real
        movq    $5, %rax          # 3  WAR con 1: falsa
        addq    %rdx, %rcx        # 4  WAW con 2: falsa
```

### Renombrado de registros

El hardware mantiene muchos más registros físicos que arquitectónicos y asocia
cada escritura a uno nuevo. Las instrucciones 3 y 4 del ejemplo escriben en
registros físicos distintos, así que dejan de tener conflicto con las anteriores.

**Con el renombrado desaparecen WAR y WAW por completo**, y solo quedan las
dependencias verdaderas. Es el mecanismo que hace posible la ejecución fuera de
orden.

### Dependencias de memoria

Más difíciles que las de registro, porque el nombre no está en la instrucción sino
en la dirección, que se calcula. Saber si dos accesos se refieren al mismo sitio
—la **desambiguación de memoria**— exige comparar direcciones ya calculadas.

Los procesadores lo resuelven especulando: suponen que una carga no depende de un
almacenamiento pendiente y ejecutan; si luego resulta que sí, deshacen. El
predictor de dependencias de memoria es una pieza más del hardware especulativo.

## Ejecución fuera de orden

Las instrucciones se ejecutan cuando sus operandos están listos, no en el orden
del programa. El esquema:

| Etapa | Orden |
| --- | --- |
| Búsqueda y decodificación | en orden |
| Renombrado y emisión a las estaciones de reserva | en orden |
| Ejecución | **fuera de orden**, según disponibilidad |
| Escritura del resultado | fuera de orden |
| Retirada | **en orden**, desde el búfer de reordenación |

El **búfer de reordenación** es la pieza que hace compatible el desorden con la
corrección: los resultados no son definitivos hasta que la instrucción se retira,
y las retiradas ocurren en orden de programa. Eso da dos cosas a la vez:
excepciones precisas y la posibilidad de descartar el trabajo especulativo.

El algoritmo de Tomasulo, de 1967, ya contenía el renombrado y las estaciones de
reserva; el búfer de reordenación se añadió después precisamente para las
excepciones precisas.

## Especulación

Un salto tarda ciclos en resolverse. En vez de esperar, el procesador predice y
sigue ejecutando por el camino predicho. Si acierta, no ha perdido nada; si falla,
descarta lo especulado y vuelve.

Con cauces de veinte etapas y capacidad para cientos de instrucciones en vuelo, la
penalización de un fallo de predicción está en 15 a 20 ciclos. Con un acierto del
95 % y saltos cada cinco instrucciones, eso son unos 0,2 ciclos perdidos por
instrucción, que sobre un IPC de 4 es una pérdida notable. De ahí que los
predictores actuales superen el 99 % en código regular.

Y de ahí también el efecto lateral que se descubrió en 2018: **la ejecución
especulativa deja huella en la caché aunque el resultado se descarte**. Meltdown y
Spectre miden esa huella para deducir datos que el programa nunca llegó a leer
arquitectónicamente. Las mitigaciones cuestan rendimiento en cada transición al
núcleo, y son la razón por la que el paso 5 de la tabla —retirada en orden— no
basta para aislar.

## VLIW

La alternativa a resolverlo todo en hardware: que sea el **compilador** quien
agrupe instrucciones independientes en una palabra larga, y el hardware las emita
sin comprobar nada.

| | Superescalar | VLIW |
| --- | --- | --- |
| Quién planifica | el hardware, en ejecución | el compilador, al compilar |
| Complejidad del hardware | alta | baja |
| Información disponible | latencias reales, incluidos los fallos de caché | solo la estática |
| Compatibilidad binaria | se mantiene entre generaciones | se rompe al cambiar el número de unidades |
| Consumo | mayor | menor |

VLIW fracasó en el mercado de propósito general —Itanium es el caso conocido— por
dos razones. La primera es que el compilador no puede saber si un acceso fallará
en caché, y esa es justo la latencia que más varía. La segunda es la
compatibilidad: el código se compila para un número concreto de unidades
funcionales, así que cambiar el diseño obliga a recompilar todo.

Donde sí sobrevive es en procesadores de señal y aceleradores, donde el código se
recompila con el hardware y los patrones de acceso son predecibles.

## Técnicas del compilador

Lo que el compilador hace para aumentar el paralelismo disponible.

### Planificación de instrucciones

Reordenar para separar una instrucción de la que depende de ella, y llenar el
hueco con trabajo independiente. Es lo que evita las burbujas del riesgo
*load-use*.

### Desenrollado de bucles

Replicar el cuerpo del bucle reduce el número de saltos y, sobre todo, expone
instrucciones independientes que el planificador puede entrelazar:

```c
/* original */
for (int i = 0; i < n; i++) s += v[i];

/* desenrollado por cuatro, con acumuladores independientes */
double s0=0, s1=0, s2=0, s3=0;
int i;
for (i = 0; i + 3 < n; i += 4) {
    s0 += v[i];   s1 += v[i+1];
    s2 += v[i+2]; s3 += v[i+3];
}
for (; i < n; i++) s0 += v[i];
double s = (s0 + s1) + (s2 + s3);
```

Los cuatro acumuladores son lo esencial, y no el desenrollado en sí. Con un único
acumulador, cada suma depende de la anterior y la cadena de dependencias impone la
latencia de la suma en coma flotante —cuatro o cinco ciclos— por elemento. Con
cuatro cadenas independientes, la unidad segmentada trabaja a pleno rendimiento.

Y el precio, que hay que decir: **el resultado cambia**, porque la suma en coma
flotante no es asociativa. Por eso el compilador no lo hace solo salvo que se le
autorice con `-ffast-math`, y por eso esa opción no debe activarse a la ligera.

### Segmentación software

Solapar iteraciones distintas del bucle: mientras se calcula la iteración $i$, se
cargan los datos de la $i+1$ y se escriben los de la $i-1$. Consigue lo que el
desenrollado, con menos código.

### Predicación

Sustituir un salto por instrucciones condicionales que se ejecutan siempre y solo
tienen efecto si se cumple la condición. En x86 es `cmov`. Elimina el riesgo de
control, y a cambio ejecuta las dos ramas: solo compensa si la predicción del
salto sería mala y las ramas son cortas.

### Vectorización automática

El compilador convierte un bucle en instrucciones SIMD. Se comprueba con
`gcc -O3 -fopt-info-vec` o `-fopt-info-vec-missed`, que dice **por qué** no
vectorizó. Las causas habituales:

| Obstáculo | Cómo se resuelve |
| --- | --- |
| Posible solapamiento entre punteros | `restrict` |
| Dependencia entre iteraciones | reescribir el bucle |
| Datos no alineados | atributos de alineamiento |
| Llamadas a función en el cuerpo | poner en línea |
| Salidas condicionales del bucle | reestructurar |

## Qué puede hacer el programador

El tema tiene una parte práctica clara: el código que se escribe determina cuánto
ILP hay disponible.

- **Romper las cadenas de dependencias** con acumuladores múltiples, como arriba.
- **Evitar los saltos impredecibles.** Un `if` cuyo resultado alterna al azar
  cuesta la penalización completa cada vez. Ordenar los datos antes de recorrerlos
  puede hacer que un bucle con `if` se vuelva varias veces más rápido, sin cambiar
  una línea del bucle.
- **Marcar con `restrict`** los punteros que no se solapan, para que el compilador
  pueda reordenar los accesos.
- **Preferir vectores de estructuras o estructuras de vectores** según el patrón
  de acceso: recorrer un solo campo de un millón de estructuras trae a la caché
  todos los demás campos, y esa es una pérdida directa de ancho de banda.
- **Poner en línea** las funciones pequeñas del bucle interno, o el compilador no
  puede planificar a través de la llamada.
- **Medir.** `perf stat` da ciclos, instrucciones, IPC y fallos de predicción; un
  cambio que reduce instrucciones y baja el IPC puede ser peor.

La regla que resume el tema: el hardware ya explota todo el paralelismo que
encuentra, así que la aportación del programador es **quitar los obstáculos** que
le impiden encontrarlo, no intentar planificar en su lugar. El catálogo completo
de estas técnicas está en \cite{gerber2006} y en \cite{fog2004}, y su análisis
cuantitativo en \cite{hennessy2026}.
