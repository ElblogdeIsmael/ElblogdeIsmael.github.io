# Representación de programas a nivel máquina

Tema 2 del programa, y el más extenso. Cómo se codifica un programa en
instrucciones, qué ofrece la arquitectura del repertorio y cómo se traducen las
construcciones de un lenguaje de alto nivel: control de flujo, procedimientos,
vectores y estructuras.

## Codificación de programas

Una instrucción máquina es una palabra de bits con campos. El primero es el
**código de operación**; el resto identifica los operandos.

```
   |<-- codigo de operacion -->|<-- operando 1 -->|<-- operando 2 -->|
```

Dos decisiones de formato:

- **Longitud fija.** Todas las instrucciones ocupan lo mismo. La decodificación
  es trivial y se puede empezar la siguiente sin saber qué es la actual, que es
  justo lo que la segmentación necesita. A cambio, se desperdician bits.
- **Longitud variable.** Cada instrucción ocupa lo que necesita. El código es
  más denso y la decodificación deja de ser posicional: hay que decodificar una
  instrucción para saber dónde empieza la siguiente.

x86 llega a instrucciones de quince bytes; RISC-V usa cuatro, con una extensión
comprimida de dos. La densidad importaba cuando la memoria era cara; hoy importa
por otra razón, la ocupación de la caché de instrucciones.

### El número de operandos

| Direcciones | Forma | Ejemplo conceptual |
| --- | --- | --- |
| Tres | destino, fuente 1, fuente 2 | `add r1, r2, r3` |
| Dos | destino y fuente, el destino se sobrescribe | `add r1, r2` |
| Una | acumulador implícito | `add r1` |
| Cero | operandos en una pila | `add` |

x86 usa dos direcciones, y de ahí que `add %rbx, %rax` destruya el valor
anterior de `%rax`. RISC-V usa tres, y por eso no hace falta copiar antes de
operar. La diferencia se nota al leer código desensamblado: en x86 abundan las
copias que en RISC-V no existen.

### Ordenación de bytes

Un dato de varios bytes se puede guardar de dos formas:

| | Extremo menor (*little-endian*) | Extremo mayor (*big-endian*) |
| --- | --- | --- |
| En la dirección más baja | el byte menos significativo | el byte más significativo |
| `0x12345678` en `0x100` | `78 56 34 12` | `12 34 56 78` |
| Ejemplos | x86, RISC-V, ARM por omisión | SPARC, redes TCP/IP |

No es una diferencia académica: leer un dato escrito por una máquina de la otra
convención lo entrega con los bytes al revés. Por eso los protocolos de red fijan
un orden —el mayor, llamado orden de red— y las bibliotecas ofrecen funciones de
conversión.

También explica un efecto visible al depurar: en una máquina de extremo menor,
un volcado hexadecimal de memoria muestra los enteros «al revés» respecto a como
se escriben.

### Alineamiento

Un acceso está alineado si la dirección es múltiplo del tamaño del dato. Un
acceso no alineado cuesta más —puede necesitar dos accesos a memoria— y en
algunas arquitecturas produce una excepción.

El compilador alinea insertando relleno, y eso tiene una consecuencia práctica en
las estructuras que aparece más abajo: el orden de los campos cambia el tamaño.

## Arquitectura del repertorio

### Modos de direccionamiento

Cómo se especifica dónde está un operando:

| Modo | Notación | Operando efectivo |
| --- | --- | --- |
| Inmediato | `$5` | la constante, dentro de la instrucción |
| Registro | `%rax` | el contenido del registro |
| Directo | `dir` | el contenido de esa dirección |
| Indirecto de registro | `(%rax)` | lo que hay en la dirección que contiene el registro |
| Con desplazamiento | `8(%rax)` | dirección `%rax + 8` |
| Indexado con escala | `(%rax,%rbx,4)` | dirección `%rax + 4·%rbx` |
| Relativo al PC | `etiqueta` | dirección calculada respecto al contador de programa |

Los dos últimos no son adornos. El indexado con escala existe **porque existen
los vectores**: el factor de escala es el tamaño del elemento, así que
`base + índice · tamaño` se calcula en la propia instrucción. Y el relativo al
PC es lo que permite código reubicable: un salto no nombra una dirección
absoluta, sino una distancia, y el código funciona cargado en cualquier sitio.

### Registros de x86-64

La asignatura trabaja sobre x86-64 en Linux, que es lo que las prácticas usan.
Dieciséis registros generales de 64 bits, con nombres heredados de la evolución
de la arquitectura:

| 64 bits | 32 | 16 | 8 bajos | Uso convenido |
| --- | --- | --- | --- | --- |
| `%rax` | `%eax` | `%ax` | `%al` | valor de retorno |
| `%rbx` | `%ebx` | `%bx` | `%bl` | preservado por el llamado |
| `%rcx` | `%ecx` | `%cx` | `%cl` | cuarto argumento |
| `%rdx` | `%edx` | `%dx` | `%dl` | tercer argumento |
| `%rsi` | `%esi` | `%si` | `%sil` | segundo argumento |
| `%rdi` | `%edi` | `%di` | `%dil` | primer argumento |
| `%rsp` | — | — | — | puntero de pila |
| `%rbp` | — | — | — | puntero de marco |
| `%r8`–`%r15` | `%r8d`… | `%r8w`… | `%r8b`… | quinto y sexto argumento, y temporales |

Una regla que sorprende y hay que retener: **escribir en un registro de 32 bits
pone a cero los 32 bits altos del registro de 64**, mientras que escribir en uno
de 16 u 8 deja intacto el resto. Es la razón por la que el compilador emite
`mov %eax, %eax` de vez en cuando, y por la que `movl` y `movq` no son
intercambiables.

### Tipos de instrucción

**Transferencia de datos.** `mov` en sus variantes por tamaño (`movb`, `movw`,
`movl`, `movq`), más las de extensión: `movzx` rellena con ceros y `movsx`
extiende el signo. Elegir mal entre estas dos convierte un `-1` de 32 bits en un
4294967295 de 64.

`lea` merece un párrafo aparte. Su nombre dice que carga una dirección efectiva,
pero **no accede a memoria**: calcula la dirección y la guarda. Por eso el
compilador la usa como una instrucción aritmética barata: `lea (%rdi,%rdi,2),
%rax` multiplica por tres en una sola operación.

**Aritmético-lógicas.** `add`, `sub`, `imul`, `idiv`, `neg`, `and`, `or`, `xor`,
`not`, y los desplazamientos `sal`, `sar` y `shr`. Dos detalles con
consecuencias:

- `sar` es desplazamiento aritmético y conserva el signo; `shr` es lógico e
  introduce ceros. Desplazar un número negativo con `shr` produce un positivo
  enorme.
- `idiv` es la instrucción más cara del repertorio, decenas de ciclos, y exige
  extender el dividendo a 128 bits con `cqto` antes de llamarla. El compilador la
  evita siempre que puede: una división por una constante se convierte en una
  multiplicación por su inverso y un desplazamiento.

**Comparación y banderas.** `cmp` resta sin guardar el resultado y `test` hace un
`and` sin guardarlo. Las dos existen solo por sus banderas. `test %rax, %rax` es
el modismo para comprobar si un registro es cero, y es más corto que compararlo
con la constante.

**Control.** `jmp` incondicional, y los condicionales que leen las banderas:

| Instrucción | Salta si | Para operandos |
| --- | --- | --- |
| `je`, `jne` | igual, distinto | cualquiera |
| `js`, `jns` | negativo, no negativo | con signo |
| `jg`, `jge`, `jl`, `jle` | mayor, mayor o igual, menor, menor o igual | **con signo** |
| `ja`, `jae`, `jb`, `jbe` | por encima, por debajo | **sin signo** |

Confundir `jg` con `ja` es el error silencioso de este tema: el programa
funciona con datos pequeños y falla cuando un valor tiene el bit alto puesto.

## Instrucciones de control de flujo

Toda estructura de un lenguaje de alto nivel se reduce a comparaciones y saltos.

### Condicional

```c
if (a > b) { c = a; } else { c = b; }
```

```asm
        cmpq    %rsi, %rdi        # compara a con b
        jle     .Lelse
        movq    %rdi, %rdx        # c = a
        jmp     .Lfin
.Lelse: movq    %rsi, %rdx        # c = b
.Lfin:
```

La condición se invierte al traducir: el código salta cuando la condición del
`if` es **falsa**, porque el camino verdadero es el que sigue en línea. Es la
observación que hace legible cualquier desensamblado.

Para condicionales cortos el compilador prefiere `cmov`, que copia solo si se
cumple la condición y no rompe el flujo. Es más rápido porque evita un salto
—y con él el riesgo de control del tema 4—, pero **evalúa las dos ramas**, así
que no sirve si una de ellas puede fallar, como una lectura por un puntero que
podría ser nulo.

### Bucles

Un bucle `while` se traduce con la comprobación al final y un salto de entrada,
o directamente con la comprobación al final si el compilador puede demostrar que
se ejecuta al menos una vez:

```c
int suma = 0;
for (int i = 0; i < n; i++) { suma += v[i]; }
```

```asm
        xorl    %eax, %eax        # suma = 0
        xorl    %ecx, %ecx        # i = 0
        testl   %esi, %esi        # si n <= 0, no se entra
        jle     .Lfin
.Lbucle:
        addl    (%rdi,%rcx,4), %eax
        incl    %ecx
        cmpl    %esi, %ecx
        jl      .Lbucle
.Lfin:
```

El acceso `v[i]` es una sola instrucción gracias al direccionamiento indexado con
escala 4, que es el tamaño de un `int`. Ahí se ve por qué ese modo existe.

### Selección múltiple

Un `switch` con casos densos no se traduce como una cadena de comparaciones,
sino con una **tabla de saltos**: un vector de direcciones indexado por el valor,
y un salto indirecto. El coste pasa a ser constante en vez de lineal en el número
de casos. Con casos dispersos el compilador vuelve a las comparaciones, o
construye un árbol de decisión.

## Procedimientos y subrutinas

Llamar a una función exige acordar tres cosas: dónde van los argumentos, dónde
vuelve el resultado y quién conserva qué. Ese acuerdo es el **convenio de
llamada**, y no es parte de la ISA sino del sistema operativo.

### El convenio System V de x86-64

- Los seis primeros argumentos enteros van en `%rdi`, `%rsi`, `%rdx`, `%rcx`,
  `%r8`, `%r9`. Los siguientes, a la pila.
- El valor de retorno, en `%rax`.
- **Preservados por el llamado**: `%rbx`, `%rbp`, `%r12`–`%r15`. Quien los use
  los guarda y los restaura.
- **Preservados por el llamante**: el resto. Quien los tenga vivos los salva
  antes de llamar.
- La pila queda alineada a 16 bytes en el punto de llamada.

El reparto entre las dos clases de registros es un compromiso: si todos fueran
preservados por el llamado, una función hoja pagaría por registros que nadie
tenía vivos; si todos fueran del llamante, se salvaría todo en cada llamada.

### La pila

`call` apila la dirección de retorno y salta; `ret` desapila y salta ahí. La
pila crece hacia direcciones **bajas**, así que apilar resta de `%rsp`.

El marco de una función:

```
   direcciones altas
   +------------------------+
   | argumentos del septimo |
   | en adelante            |
   +------------------------+
   | direccion de retorno   |  <- apilada por call
   +------------------------+
   | %rbp del llamante      |  <- si se usa puntero de marco
   +------------------------+  <- %rbp
   | variables locales      |
   +------------------------+
   | area para argumentos   |
   +------------------------+  <- %rsp
   direcciones bajas
```

El prólogo y el epílogo típicos:

```asm
funcion:
        pushq   %rbp
        movq    %rsp, %rbp
        subq    $32, %rsp         # espacio para locales
        ...
        leave                     # equivale a movq %rbp,%rsp ; popq %rbp
        ret
```

El puntero de marco `%rbp` no es obligatorio. Compilando con
`-fomit-frame-pointer` el compilador lo libera como registro general y accede a
las locales por desplazamiento sobre `%rsp`. El precio es que reconstruir la
pila de llamadas deja de ser trivial, y por eso los perfiladores piden que se
conserve.

La **zona roja** son los 128 bytes por debajo de `%rsp` que una función hoja
puede usar sin restar del puntero de pila, porque el convenio garantiza que nada
los pisa. Es una optimización específica de este convenio.

### Recursión y variables locales

Cada llamada tiene su propio marco, y por eso las variables locales de cada
activación son independientes. Es la razón por la que la recursión funciona sin
que el lenguaje haga nada especial.

Y también la razón por la que devolver la dirección de una variable local es un
error: el marco desaparece al volver, y el puntero queda apuntando a memoria que
la siguiente llamada reutilizará. El programa suele funcionar al probarlo, que es
lo que hace grave al fallo.

## Vectores y estructuras de datos heterogéneas

### Vectores

Un vector de $n$ elementos de tamaño $t$ ocupa $n \cdot t$ bytes contiguos, y la
dirección del elemento $i$ es $base + i \cdot t$. El compilador emite esa
expresión con el direccionamiento indexado, sin multiplicaciones, siempre que $t$
sea 1, 2, 4 u 8.

Los vectores multidimensionales se linealizan. En C el orden es **por filas**:
para `int m[F][C]`, la dirección de `m[i][j]` es

$$base + (i \cdot C + j) \cdot 4$$

De ahí un resultado con consecuencias medibles: recorrer una matriz por filas es
mucho más rápido que por columnas, porque el recorrido por filas accede a
posiciones consecutivas y aprovecha la localidad espacial que el tema 6
desarrolla. Es el mismo programa con los bucles intercambiados, y la diferencia
puede ser de un orden de magnitud.

Un vector de punteros no es lo mismo que una matriz: `int *m[F]` son $F$
punteros a bloques que pueden estar en cualquier sitio, así que el acceso cuesta
dos lecturas y pierde la contigüidad.

### Estructuras

Los campos se colocan en orden de declaración, con relleno para que cada uno
quede alineado, y la estructura entera se alinea al mayor de sus campos.
Consecuencia práctica:

```c
struct A { char c; int i; char d; };   /* 12 bytes */
struct B { int i; char c; char d; };   /* 8 bytes  */
```

Los mismos campos, cuatro bytes de diferencia. Declarar de mayor a menor tamaño
minimiza el relleno, y en un vector de un millón de estructuras eso son cuatro
megabytes y una tasa de aciertos de caché distinta.

Una **unión** hace que todos los campos empiecen en el mismo desplazamiento, así
que ocupa lo que el mayor. No hay ningún mecanismo que registre qué campo está
vivo: eso corre por cuenta del programador, casi siempre con una etiqueta aparte.

## Combinar ensamblador y alto nivel

Dos formas de mezclar, y una de leer lo que el compilador hizo:

**Ensamblador en línea.** Con `asm` y sus restricciones de entrada, salida y
registros destruidos. Es la vía habitual para instrucciones que el lenguaje no
expone: leer un contador de ciclos, emitir una barrera de memoria, usar una
instrucción vectorial concreta.

**Módulos separados.** Un `.s` ensamblado por separado y enlazado con el resto.
Basta con respetar el convenio de llamada y declarar el símbolo global.

**Leer la salida del compilador.** `gcc -S -O2` produce el ensamblador, y
`objdump -d` desensambla el binario. Comparar `-O0` con `-O2` sobre el mismo
programa es el ejercicio más instructivo del tema: se ve desaparecer las
variables en registros, el bucle desenrollado y la división convertida en
multiplicación.

Escribir ensamblador a mano para ganar velocidad casi nunca compensa hoy: el
compilador conoce la microarquitectura mejor que el programador y programa las
instrucciones para el cauce del tema 4. Se escribe ensamblador cuando no hay
alternativa, no cuando se cree que se puede mejorar la salida del compilador. El
tratamiento completo de este tema, con x86-64 como máquina de referencia, está en
\cite{bryant2016}.
