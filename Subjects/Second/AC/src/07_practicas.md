# Temario práctico

Las tres prácticas del programa: programar con memoria compartida, optimizar para
una microarquitectura con paralelismo a nivel de instrucción, y medir si algo de
lo anterior ha servido.

## Práctica 1. Programación paralela con memoria compartida

### Puesta en marcha

```bash
gcc -fopenmp -O2 -o programa programa.c
export OMP_NUM_THREADS=8
./programa
```

Sin `-fopenmp` el compilador **ignora las directivas** y produce un programa
secuencial correcto. Es la primera comprobación cuando una versión paralela no
acelera nada: puede que ni siquiera sea paralela.

Variables de entorno que hacen falta en las medidas:

| Variable | Para qué |
| --- | --- |
| `OMP_NUM_THREADS` | número de hilos |
| `OMP_PROC_BIND` | fija los hilos a núcleos |
| `OMP_PLACES` | qué núcleos, y cómo se agrupan |
| `OMP_SCHEDULE` | planificación cuando el código usa `runtime` |
| `OMP_DISPLAY_ENV` | imprime la configuración efectiva al arrancar |

`OMP_PROC_BIND=close` con `OMP_PLACES=cores` es el punto de partida razonable en
una máquina NUMA: sin fijación, el planificador mueve los hilos y cada migración
pierde la caché y la localidad de memoria del tema 3.

### Distribución del trabajo

```c
#pragma omp parallel for schedule(static) reduction(+:suma)
for (int i = 0; i < n; i++) {
    suma += f(v[i]);
}
```

El ejercicio de la práctica es comparar planificaciones sobre un bucle con coste
por iteración desigual. Con un bucle triangular:

```c
for (int i = 0; i < n; i++)
    for (int j = i; j < n; j++)
        m[i][j] = calcular(i, j);
```

`schedule(static)` reparte bloques contiguos, así que el hilo que recibe las
primeras filas hace mucho más trabajo y los demás esperan en la barrera final.
`schedule(static,1)` reparte cíclicamente y equilibra sin coste adicional;
`schedule(dynamic)` equilibra mejor todavía y paga sincronización sobre el
contador. Medir los tres es lo que convierte la tabla del tema 2 en un resultado.

### Comunicación y sincronización

```c
#pragma omp parallel
{
    int yo = omp_get_thread_num();
    parcial[yo] = trabajar(yo);

    #pragma omp barrier

    #pragma omp single
    combinar(parcial);
}
```

Los errores que la práctica enseña a reconocer:

| Error | Síntoma |
| --- | --- |
| Acumular sobre una variable `shared` sin `reduction` | resultado ligeramente distinto en cada ejecución |
| Declarar `private` un acumulador | empieza con basura; `firstprivate` lo inicializa |
| `master` donde hacía falta `single` | no hay barrera y los demás avanzan sobre datos incompletos |
| `critical` alrededor del cuerpo entero | el programa se serializa y va más lento que el secuencial |
| Barreras dentro de una construcción de reparto | comportamiento indefinido: no todos los hilos las alcanzan |

La última no es teórica. Poner un `#pragma omp barrier` dentro de un `for`
paralelo es ilegal precisamente porque los hilos no ejecutan el mismo número de
iteraciones.

### Falso compartimiento, medido

El experimento que cierra la práctica, porque conecta el tema 1 con un número:

```c
/* con falso compartimiento: las ocho posiciones caen en una o dos lineas */
double parcial[8];

/* sin el: cada hilo escribe en su propia linea de 64 bytes */
struct { double v; char relleno[56]; } parcial[8];
```

El segundo puede ser varias veces más rápido con ocho hilos, sin cambiar una sola
operación aritmética. `perf c2c` señala exactamente qué línea de caché está
viajando entre núcleos.

### Comprobar la corrección

```bash
gcc -fopenmp -fsanitize=thread -g -o prog prog.c && ./prog
valgrind --tool=helgrind ./prog
```

Que el programa dé el resultado correcto **no demuestra nada**: una carrera puede
no manifestarse en mil ejecuciones. Estas dos herramientas la encuentran aunque no
se produzca, porque analizan los accesos y no el resultado.

## Práctica 2. Optimización de código para microarquitecturas ILP

Partir de una versión ingenua y transformarla paso a paso, midiendo cada cambio.

### El caso de referencia

```c
/* version 0: una cadena de dependencias de longitud n */
double suma(const double *v, int n) {
    double s = 0.0;
    for (int i = 0; i < n; i++) s += v[i];
    return s;
}
```

Cada suma depende de la anterior, así que el bucle avanza al ritmo de la latencia
de la suma en coma flotante, unos cuatro ciclos por elemento, con la unidad
segmentada casi vacía.

```c
/* version 1: cuatro cadenas independientes */
double suma4(const double *v, int n) {
    double s0=0, s1=0, s2=0, s3=0;
    int i;
    for (i = 0; i + 3 < n; i += 4) {
        s0 += v[i];   s1 += v[i+1];
        s2 += v[i+2]; s3 += v[i+3];
    }
    for (; i < n; i++) s0 += v[i];
    return (s0 + s1) + (s2 + s3);
}
```

Lo que importa son los acumuladores independientes, no el desenrollado. Y hay que
decir el precio: **el resultado cambia en los últimos dígitos**, porque la suma en
coma flotante no es asociativa. Por eso el compilador no lo hace solo sin
`-ffast-math`.

### Ramas impredecibles

```c
for (int i = 0; i < n; i++)
    if (v[i] > umbral) s += v[i];
```

Con datos aleatorios el predictor falla la mitad de las veces y cada fallo cuesta
la penalización completa. Dos formas de arreglarlo:

- **Ordenar los datos antes.** El mismo bucle se vuelve varias veces más rápido
  sin tocar una línea.
- **Escribirlo sin rama**, con una expresión que el compilador convierta en
  `cmov`, o con máscaras SIMD.

Se comprueba con `perf stat -e branch-misses`, que es el contador que lo delata.

### Comprobar qué hizo el compilador

```bash
gcc -O3 -march=native -fopt-info-vec-missed -S prog.c
objdump -d prog.o | less
```

`-fopt-info-vec-missed` dice **por qué** no vectorizó un bucle, que es más útil
que saber que no lo hizo. Las causas habituales son el posible solapamiento de
punteros, que se resuelve con `restrict`, y las dependencias entre iteraciones,
que exigen reescribir.

### El orden de los cambios

La práctica insiste en un orden concreto, y tiene motivo:

1. Elegir el algoritmo. Ninguna micro-optimización compensa una complejidad peor.
2. Arreglar el acceso a memoria: recorrido por filas, bloqueo, disposición de las
   estructuras.
3. Dejar que el compilador trabaje: `-O3`, `restrict`, funciones en línea.
4. Romper cadenas de dependencias y quitar ramas impredecibles.
5. Solo entonces, intrínsecas o ensamblador.

Saltarse los tres primeros para escribir intrínsecas es el error clásico: se
optimiza en detalle un código limitado por el ancho de banda de memoria, donde el
paralelismo aritmético no cambia nada.

## Práctica 3. Evaluación de prestaciones

### Cómo se mide

```c
#include <omp.h>
double t0 = omp_get_wtime();
trabajo();
double t1 = omp_get_wtime();
printf("%.6f s\n", t1 - t0);
```

Reglas que la práctica exige y que casi todo el mundo incumple al principio:

- **Reloj monótono, no el de pared del sistema.** `omp_get_wtime` y
  `clock_gettime(CLOCK_MONOTONIC)` valen; la hora del día da saltos al ajustarse.
- **Descartar la primera ejecución.** Carga las cachés y las páginas.
- **Repetir y quedarse con la mediana o el mínimo**, no con la media: un pico del
  sistema contamina la media y no la mediana.
- **Fijar la frecuencia** o al menos anotarla. Con escalado dinámico, la misma
  medida da resultados distintos según la temperatura del equipo.
- **Anotar la máquina**: `lscpu`, `numactl --hardware`, versión del compilador y
  opciones exactas. Una medida sin esos datos no es reproducible.

### Contadores hardware

```bash
perf stat -e cycles,instructions,cache-misses,branch-misses ./prog
perf stat -e L1-dcache-load-misses,LLC-load-misses ./prog
perf record ./prog && perf report
```

| Contador | Qué diagnostica |
| --- | --- |
| `instructions` / `cycles` | el IPC: cuánto ILP se está aprovechando |
| `cache-misses` | si el problema es la jerarquía de memoria |
| `branch-misses` | si el problema son las ramas |
| `LLC-load-misses` | si se está yendo a memoria principal |

Un IPC bajo con pocos fallos de caché apunta a cadenas de dependencias; un IPC
bajo con muchos fallos, a memoria. Es el diagnóstico que decide cuál de las dos
prácticas anteriores aplicar.

### Escalabilidad

Las dos curvas que hay que producir, y no confundir:

- **Escalabilidad fuerte.** Problema de tamaño fijo, número de hilos creciente.
  Se representa $S(p)$ frente a $p$ y se compara con la recta ideal. La ley de
  Amdahl del tema 1 predice dónde se dobla la curva, y ajustar $f$ a los datos da
  la fracción secuencial real del programa.
- **Escalabilidad débil.** Trabajo por hilo fijo, problema y número de hilos
  creciendo juntos. Lo ideal es una línea horizontal en el tiempo.

Presentar una curva de escalabilidad débil llamándola fuerte es la forma habitual
de inflar resultados, y es lo que la práctica enseña a detectar.

Y la trampa del denominador: **$T_1$ tiene que ser el mejor programa secuencial**,
no la versión paralela con un hilo. Esta última arrastra la sobrecarga de OpenMP,
así que usarla infla la ganancia sistemáticamente.

### Modelo del techo

Cruzar el pico aritmético de la máquina con su ancho de banda de memoria sitúa
cada núcleo de cómputo según su **intensidad operacional**, en operaciones por
byte leído. El punto de corte dice si el programa está limitado por cálculo o por
memoria, y por tanto qué tiene sentido optimizar.

Un producto escalar tiene intensidad baja —dos cargas por multiplicación y suma—
y está limitado por memoria: vectorizarlo mejora poco. Una multiplicación de
matrices por bloques tiene intensidad alta y sí se beneficia. Es el mismo
razonamiento del tema 5 sobre cuándo compensa una GPU, con números en lugar de
intuición.

### El informe

Lo que la práctica pide entregar, y que es el hábito que queda:

1. La máquina, con sus datos.
2. El compilador y las opciones exactas.
3. Tamaño del problema y número de repeticiones.
4. Tiempos con su dispersión, no un solo número.
5. Las curvas de ganancia y eficiencia, y qué predice Amdahl.
6. La explicación de por qué la curva se dobla donde se dobla.

El punto 6 es el que distingue una medida de un resultado. Los detalles de estas
prácticas y sus problemas resueltos están en \cite{anguita2016}, la parte de
OpenMP en \cite{chapman2008} y la metodología de medida en \cite{rauber2023}.
