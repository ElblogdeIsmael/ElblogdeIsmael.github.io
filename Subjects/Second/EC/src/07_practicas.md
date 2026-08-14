# Temario práctico

Las seis prácticas del programa, con su seminario correspondiente. Todas sobre
x86-64 en Linux con las herramientas GNU.

## Práctica 1. Entorno de desarrollo GNU

Las cuatro etapas que `gcc` encadena, y cómo detenerse en cada una:

| Etapa | Herramienta | Entrada | Salida | Cómo pararse |
| --- | --- | --- | --- | --- |
| Preprocesado | `cpp` | `.c` | `.i` | `gcc -E` |
| Compilación | `cc1` | `.i` | `.s` | `gcc -S` |
| Ensamblado | `as` | `.s` | `.o` | `gcc -c` |
| Enlazado | `ld` | `.o` | ejecutable | `gcc` |

`gcc -S -O2 prog.c` es la orden que más se usa en toda la asignatura: produce el
ensamblador que el compilador genera, y compararlo con `-O0` enseña más sobre el
tema 2 que cualquier explicación.

**Herramientas de inspección:**

| Orden | Para qué |
| --- | --- |
| `objdump -d` | desensambla las secciones de código |
| `objdump -h` | lista las secciones y sus tamaños |
| `readelf -a` | cabeceras, símbolos y reubicaciones del ELF |
| `nm` | tabla de símbolos |
| `size` | tamaño de texto, datos y BSS |
| `strings` | cadenas imprimibles del binario |
| `ldd` | bibliotecas dinámicas de las que depende |

**Las secciones de un ELF**, que se corresponden con las regiones que el tema 2
describía:

| Sección | Contenido | Permisos |
| --- | --- | --- |
| `.text` | código | lectura y ejecución |
| `.rodata` | constantes y literales de cadena | solo lectura |
| `.data` | variables globales con valor inicial | lectura y escritura |
| `.bss` | variables globales a cero | lectura y escritura, no ocupa el fichero |
| `.symtab` | símbolos | — |

Que `.bss` no ocupe espacio en el ejecutable es comprobable: declarar un vector
global de un millón de enteros no cambia el tamaño del fichero, y declararlo
inicializado sí.

**`make`.** Un objetivo, sus prerrequisitos y las órdenes que lo construyen. La
regla que evita la mayor parte de los problemas es declarar bien las
dependencias: un `.o` depende de su `.c` **y de las cabeceras que incluye**, o
cambiar una cabecera no reconstruye nada.

## Práctica 2. Programación en ensamblador: programas aritméticos

Un programa completo en ensamblador de GNU, sintaxis AT&T:

```asm
        .section .rodata
fmt:    .asciz "El resultado es %ld\n"

        .text
        .globl  main
main:
        pushq   %rbp
        movq    %rsp, %rbp

        movq    $10, %rdi
        call    factorial

        movq    %rax, %rsi
        leaq    fmt(%rip), %rdi
        xorl    %eax, %eax          # printf es variadica: 0 registros XMM
        call    printf

        xorl    %eax, %eax
        leave
        ret

# long factorial(long n)
factorial:
        movq    $1, %rax
        testq   %rdi, %rdi
        jle     .Lfin
.Lbucle:
        imulq   %rdi, %rax
        decq    %rdi
        jnz     .Lbucle
.Lfin:
        ret
```

Cinco cosas de este programa que se pasan por alto y rompen la ejecución:

1. **La sintaxis AT&T pone el destino a la derecha**, al revés que Intel.
   `movq $1, %rax` carga 1 en `%rax`. Leer una salida de `objdump` con la
   convención contraria produce razonamientos exactamente invertidos.
2. **`%rax` a cero antes de llamar a `printf`.** El convenio exige que indique
   cuántos registros vectoriales llevan argumentos. Sin eso, `printf` puede leer
   registros que no se han preparado.
3. **`leaq fmt(%rip), %rdi`**, no `movq $fmt, %rdi`. El código de posición
   independiente direcciona relativo al contador de programa, y es lo que el
   enlazador espera por omisión.
4. **La pila alineada a 16 bytes** en el punto de la llamada. Desalinearla no
   falla de inmediato: falla dentro de una función de biblioteca que use
   instrucciones vectoriales, y el error apunta a un sitio que no es el culpable.
5. **Los sufijos de tamaño** (`b`, `w`, `l`, `q`) son obligatorios cuando el
   tamaño no se deduce de los operandos.

**Directivas de datos** que se usan en la práctica:

| Directiva | Reserva |
| --- | --- |
| `.byte`, `.word`, `.long`, `.quad` | 1, 2, 4 y 8 bytes con valor |
| `.asciz` | cadena terminada en cero |
| `.space n` | `n` bytes a cero |
| `.align n` | alinea la posición actual |

## Práctica 3. Programación mixta C y ensamblador: optimización

Dos formas de mezclar los dos lenguajes.

**Módulo separado.** Se escribe la función en un `.s`, se declara `.globl` y se
enlaza. Desde C basta con declarar el prototipo. Lo único que hay que respetar es
el convenio de llamada del tema 2.

```bash
gcc -c -O2 principal.c -o principal.o
as rutina.s -o rutina.o
gcc principal.o rutina.o -o programa
```

**Ensamblador en línea.** Con `asm` extendido, sus operandos de salida, de
entrada y su lista de registros destruidos:

```c
static inline long multiplicar(long a, long b) {
    long r;
    asm ("imulq %2, %1\n\t"
         "movq  %1, %0"
         : "=r" (r)          /* salida */
         : "r" (a), "r" (b)  /* entradas */
         : "cc");            /* destruye las banderas */
    return r;
}
```

Omitir la lista de destruidos es el error grave: el compilador supone que las
banderas y los registros que no se declaran siguen intactos, y genera código
alrededor que da resultados incorrectos **solo al optimizar**. Un programa que
funciona con `-O0` y falla con `-O2` casi siempre tiene aquí su causa.

**Medir antes de optimizar.** El ejercicio de la práctica es comparar versiones,
y para eso hace falta medir bien:

```bash
gcc -O2 -o prog prog.c
perf stat -e cycles,instructions,cache-misses ./prog
```

`perf` da ciclos, instrucciones y fallos de caché, que son los tres números que
los temas 4 y 6 explican. Un cambio que reduce instrucciones y aumenta fallos de
caché puede ser más lento, y sin medir no se nota.

Las optimizaciones que el compilador ya hace, y que no hay que escribir a mano:
propagación de constantes, eliminación de subexpresiones comunes, desenrollado de
bucles, conversión de división por constante en multiplicación, y colocación de
variables en registros. Lo que el compilador **no** puede hacer es cambiar el
orden de los bucles cuando no puede demostrar que es seguro, ni reorganizar las
estructuras de datos. Ahí es donde el programador aporta.

## Práctica 4. Depuradores, desensambladores y editores hexadecimales

**GDB.** Las órdenes que se usan a bajo nivel:

| Orden | Efecto |
| --- | --- |
| `layout asm`, `layout regs` | ventanas de ensamblador y registros |
| `break *0x401136` | punto de ruptura en una dirección |
| `stepi`, `nexti` | avanzar una instrucción máquina |
| `info registers` | todos los registros |
| `x/16xb $rsp` | volcar 16 bytes en hexadecimal desde la pila |
| `x/8i $rip` | desensamblar 8 instrucciones desde el PC |
| `p/x $rax` | imprimir un registro en hexadecimal |
| `set $rax = 5` | modificar un registro |
| `watch var` | detener cuando una variable cambie |

`x/16xb $rsp` es la orden con la que se comprueba de verdad el marco de pila del
tema 2: se ve la dirección de retorno, el `%rbp` salvado y las locales, en el
orden en que están.

Y el efecto del extremo menor se ve aquí sin ambigüedad: `x/4xb` sobre un entero
de valor `0x12345678` muestra `78 56 34 12`.

**Desensamblar** con `objdump -d -M att`, o `gdb` sobre el binario. Comparar el
desensamblado con el `.s` que produjo `gcc -S` cierra el círculo: se ve qué
directivas se convirtieron en bytes y cuáles eran solo información para el
enlazador.

**Editor hexadecimal.** `xxd`, `hexdump -C` o `ghex` para inspeccionar y
modificar un binario byte a byte. Cambiar un `jle` por un `jmp` en el ejecutable
—dos bytes— y ver cómo cambia el comportamiento es el ejercicio que demuestra que
el programa es un dato, que era el principio del tema 1.

## Práctica 5. Funcionamiento de la entrada/salida con microcontrolador

Sobre una placa con microcontrolador, donde los registros del tema 5 son
accesibles directamente y sin sistema operativo por medio.

**Entrada/salida programada.** Configurar un puerto como entrada o salida
escribiendo en su registro de dirección, y leer o escribir el registro de datos
en un bucle de sondeo.

```c
#define PORT_DIR  (*(volatile uint8_t *)0x40020000)
#define PORT_DAT  (*(volatile uint8_t *)0x40020004)

PORT_DIR = 0xFF;                  /* los ocho bits, como salida */
while (1) {
    PORT_DAT = 0x01;
    retardo();
    PORT_DAT = 0x00;
    retardo();
}
```

`volatile` no es opcional. Sin él, el compilador ve dos escrituras al mismo sitio
sin lectura entre medias y elimina la primera; el bucle deja de hacer nada
visible. Es el ejemplo más limpio de por qué la memoria proyectada de dispositivo
no se puede tratar como memoria normal.

**Interrupciones.** Habilitar la fuente, escribir la rutina, colocar su dirección
en la tabla de vectores y habilitar las interrupciones globalmente. La rutina
tiene que **reconocer** la interrupción borrando la bandera del periférico; si no
lo hace, vuelve a entrar en cuanto sale y el programa se queda dentro de ella
para siempre.

Y la regla que atraviesa el tema: las variables compartidas entre la rutina y el
programa principal se declaran `volatile`, y los accesos de más de un byte se
protegen inhibiendo interrupciones, o se leen a medio actualizar.

**Comparación medida.** El ejercicio final de la práctica es comparar el tiempo
de CPU disponible con sondeo y con interrupciones para el mismo periférico. El
número que sale es el argumento del tema 5, comprobado en vez de contado.

## Práctica 6. Análisis de una jerarquía de memoria

Medir el efecto de la caché sobre programas reales.

**Los parámetros de la máquina** se consultan sin adivinar:

```bash
lscpu | grep -i cache
getconf -a | grep -i cache
```

**Recorrido por filas frente a por columnas.** El mismo programa con los dos
bucles intercambiados:

```c
/* por filas: aprovecha la localidad espacial */
for (int i = 0; i < N; i++)
    for (int j = 0; j < N; j++)
        s += m[i][j];

/* por columnas: un salto de una fila entre accesos consecutivos */
for (int j = 0; j < N; j++)
    for (int i = 0; i < N; i++)
        s += m[i][j];
```

Con una matriz que no quepa en la caché de último nivel, la diferencia se mide en
veces, no en porcentajes. `perf stat -e cache-misses,cache-references` da el
número que lo explica.

**Multiplicación de matrices por bloques.** Dividir en submatrices que quepan en
la caché y operar bloque a bloque. El número de operaciones aritméticas es el
mismo; lo que cambia es cuántas veces se recorre la memoria.

**Recorrido con zancada creciente.** Medir el tiempo por acceso al recorrer un
vector con zancadas de 1, 2, 4… elementos. La curva tiene escalones, y cada
escalón marca un límite: el tamaño de línea de caché primero, y el tamaño de cada
nivel después. Es la forma de **deducir la jerarquía midiendo**, sin consultar la
documentación.

**Falso compartimiento.** Dos hilos que incrementan variables distintas situadas
en la misma línea de caché. No comparten ningún dato y aun así se frenan
mutuamente, porque la línea viaja de un núcleo a otro en cada escritura.
Separarlas al tamaño de línea elimina el efecto por completo, y el diagnóstico es
puramente el del tema 6.

Los guiones de laboratorio de estas prácticas y los problemas resueltos que las
acompañan están en \cite{garcia2015} y en \cite{ortega2006}; el enfoque de
medición desde el programa, en \cite{bryant2016}.
