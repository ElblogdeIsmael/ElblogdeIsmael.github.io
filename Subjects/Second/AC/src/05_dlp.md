# Arquitecturas con paralelismo de datos

Tema 5 del programa. Las máquinas que aplican la misma operación a muchos datos a
la vez: extensiones vectoriales, procesadores vectoriales y unidades gráficas de
propósito general.

## La idea

Muchos cálculos aplican la misma operación a todos los elementos de un vector.
Ejecutarlos con instrucciones escalares desperdicia trabajo: cada elemento paga la
búsqueda y la decodificación de su propia instrucción.

Una instrucción SIMD hace lo mismo con un solo trabajo de control. La ganancia es
doble: menos instrucciones que buscar y decodificar, y unidades funcionales
replicadas que operan en paralelo.

El precio es la rigidez. Todos los elementos hacen lo mismo, así que un dato que
requiera un tratamiento distinto rompe el esquema, y ahí es donde aparecen las
máscaras y la divergencia.

## Extensiones SIMD

Registros anchos que se interpretan como varios elementos:

| Extensión | Anchura | Elementos `double` | Elementos `float` |
| --- | ---: | ---: | ---: |
| SSE | 128 bits | 2 | 4 |
| AVX, AVX2 | 256 bits | 4 | 8 |
| AVX-512 | 512 bits | 8 | 16 |
| NEON (ARM) | 128 bits | 2 | 4 |
| SVE (ARM) | variable | según implementación | — |

La anchura fija de las tres primeras es una decisión de ISA con coste: cada
ampliación exige instrucciones nuevas y recompilar. SVE y RVV, la extensión
vectorial de RISC-V, adoptan **longitud de vector agnóstica**: el programa consulta
la longitud en ejecución, así que el mismo binario aprovecha una implementación
más ancha sin recompilar. Es la vuelta a la idea de los procesadores vectoriales
clásicos.

### Cómo se usan

Cuatro vías, de más a menos recomendable:

1. **Vectorización automática.** El compilador lo hace con `-O3`. Se comprueba
   con `-fopt-info-vec` y `-fopt-info-vec-missed`.
2. **Directivas.** `#pragma omp simd` indica que el bucle es vectorizable, y
   `#pragma omp simd reduction(+:s)` que la acumulación se puede reasociar.
3. **Intrínsecas.** Funciones que se corresponden con instrucciones concretas.
   Portables entre compiladores, no entre arquitecturas.
4. **Ensamblador.** Solo cuando nada más funciona.

```c
#include <immintrin.h>

double producto(const double *restrict a, const double *restrict b, int n) {
    __m256d acc = _mm256_setzero_pd();
    int i;
    for (i = 0; i + 3 < n; i += 4) {
        __m256d va = _mm256_loadu_pd(a + i);
        __m256d vb = _mm256_loadu_pd(b + i);
        acc = _mm256_fmadd_pd(va, vb, acc);
    }
    double t[4];
    _mm256_storeu_pd(t, acc);
    double s = t[0] + t[1] + t[2] + t[3];
    for (; i < n; i++) s += a[i] * b[i];
    return s;
}
```

Dos cosas de este fragmento:

- El **bucle de cola** para los elementos que no completan un vector no es
  opcional. Olvidarlo es un error de resultado, no de compilación.
- `_mm256_fmadd_pd` es una **multiplicación y suma fusionadas**: una sola
  instrucción, un solo redondeo. Es más rápida y **más precisa** que multiplicar y
  sumar por separado, y por eso puede dar un resultado distinto al de la versión
  escalar.

### Obstáculos

| Obstáculo | Efecto | Solución |
| --- | --- | --- |
| Solapamiento de punteros | el compilador no puede reordenar | `restrict` |
| Dependencia entre iteraciones | impide vectorizar | reescribir |
| Acceso con zancada o indirecto | carga elemento a elemento | reorganizar los datos |
| Datos no alineados | carga más lenta | alinear a 32 o 64 bytes |
| Ramas dentro del bucle | fuerza ejecución con máscara | simplificar |

El **acceso indirecto** —`v[idx[i]]`— es el que más limita en la práctica. Las
instrucciones de recolección existen y son mucho más lentas que una carga
contigua, así que la vectorización aporta poco. La solución no es una instrucción
mejor sino cambiar la disposición de los datos.

### Disposición de los datos

| Disposición | Estructura | Acceso a un campo |
| --- | --- | --- |
| Vector de estructuras | `struct P { float x, y, z; } p[N];` | con zancada 3; trae los otros campos a la caché |
| Estructura de vectores | `struct { float x[N], y[N], z[N]; } p;` | contiguo y vectorizable |

Recorrer un solo campo con el primer esquema desperdicia dos tercios del ancho de
banda. Con el segundo, cada campo es un vector contiguo. Es la transformación de
mayor efecto en código numérico, y no cambia ni una operación aritmética.

## Procesadores vectoriales

Los que dieron origen a la idea, en los supercomputadores de los años setenta y
ochenta. Registros vectoriales de longitud grande, un registro de longitud que
dice cuántos elementos son válidos, y unidades funcionales profundamente
segmentadas.

Sus dos mecanismos característicos siguen siendo relevantes:

- **Encadenamiento.** El resultado de una operación vectorial alimenta a la
  siguiente elemento a elemento, sin esperar a que el vector entero esté listo.
- **Registro de máscara.** Un bit por elemento indica cuáles participan. Es lo
  que permite vectorizar un bucle con un `if` dentro: se calculan todos y solo se
  escriben los que la máscara habilita.

Frente a las extensiones SIMD, un procesador vectorial gestiona la longitud en
ejecución y no en el repertorio, lo que evita el bucle de cola. AVX-512 recuperó
las máscaras, y SVE y RVV, la longitud variable: el diseño vectorial clásico ha
vuelto por partes.

## GPU

Una unidad gráfica de propósito general lleva el paralelismo de datos al extremo:
miles de hilos ligeros ejecutando el mismo código sobre datos distintos.

### Modelo de ejecución

El modelo se llama SIMT, hilos únicos con instrucción múltiple. Los hilos se
agrupan en unidades de 32 o 64 que ejecutan **la misma instrucción a la vez**. El
programador ve hilos independientes; el hardware ejecuta grupos en bloque.

| Concepto | Qué es |
| --- | --- |
| Hilo | la unidad lógica, con sus registros |
| Grupo (*warp*) | 32 hilos que avanzan juntos |
| Bloque | conjunto de grupos con memoria compartida y barreras |
| Malla | todos los bloques del lanzamiento |

### Divergencia

Si dentro de un grupo unos hilos toman una rama y otros la contraria, el hardware
**ejecuta las dos ramas en serie**, desactivando en cada una los hilos que no le
corresponden. El grupo tarda la suma de las dos.

```c
if (idx % 2 == 0) { camino_a(); } else { camino_b(); }
```

Ese código divide cada grupo por la mitad y duplica el tiempo. Reorganizar los
datos para que los hilos de un mismo grupo tomen la misma rama es la optimización
característica de GPU, y no tiene equivalente en CPU.

### Jerarquía de memoria

| Memoria | Ámbito | Latencia |
| --- | --- | --- |
| Registros | hilo | mínima |
| Compartida | bloque | baja, gestionada por el programador |
| Global | toda la malla | alta |
| Constante y de texturas | toda la malla, solo lectura | con caché propia |

La memoria compartida es una caché **explícita**: la gestiona el programa, no el
hardware. Cargar en ella un bloque de datos que se va a reutilizar es el patrón
central de la programación de GPU, y es el mismo bloqueo por *tiles* que se aplica
a la multiplicación de matrices en CPU, con la diferencia de que aquí es
obligatorio escribirlo.

Y la otra optimización crítica: la **coalescencia**. Si los hilos consecutivos de
un grupo acceden a posiciones consecutivas, el hardware combina los accesos en una
sola transacción. Si acceden de forma dispersa, hace una por hilo. La diferencia
puede ser de un factor de treinta y dos.

### Cuándo compensa una GPU

| A favor | En contra |
| --- | --- |
| Miles de elementos con el mismo tratamiento | poco paralelismo |
| Alta intensidad aritmética | mucho control de flujo divergente |
| Accesos regulares y contiguos | accesos irregulares |
| El dato se queda en la GPU varias fases | transferencias frecuentes por PCIe |

La última fila decide más casos de los que parece: la transferencia entre memoria
principal y memoria de GPU puede costar más que el cálculo. Un núcleo de cómputo
diez veces más rápido que la CPU no gana nada si hay que copiar los datos de ida y
vuelta cada iteración.

## Comparación

| | SIMD en CPU | GPU |
| --- | --- | --- |
| Paralelismo | decenas de elementos | miles de hilos |
| Latencia de una operación | baja | alta, se oculta con más hilos |
| Control de flujo | penaliza | penaliza mucho más |
| Transferencia de datos | ninguna | por PCIe |
| Programación | directivas o intrínsecas | CUDA, OpenCL, SYCL, OpenMP con descarga |

Las dos son complementarias, no alternativas. Un programa bien optimizado usa
SIMD dentro de cada hilo, varios hilos por núcleo y descarga a la GPU las fases
que lo justifican. El análisis de estas arquitecturas está en \cite{hennessy2026},
y su tratamiento en el contexto de la asignatura en \cite{anguita2016}.
