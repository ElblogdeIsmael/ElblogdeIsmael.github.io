# Temario práctico

Las tres prácticas del programa, todas sobre un sistema de tipo UNIX.

## Práctica 1. Órdenes básicas e intérprete de órdenes

### Navegación y archivos

| Orden | Qué hace |
| --- | --- |
| `pwd`, `cd`, `ls -la` | dónde se está, moverse, listar con detalle |
| `cp`, `mv`, `rm`, `mkdir`, `rmdir` | copiar, mover, borrar, crear directorios |
| `ln`, `ln -s` | enlace duro y enlace simbólico |
| `find . -name '*.c'` | buscar por nombre en el árbol |
| `du -sh`, `df -h` | espacio ocupado y espacio libre |

### Contenido

| Orden | Qué hace |
| --- | --- |
| `cat`, `less`, `head`, `tail` | ver un archivo entero, paginado, el principio, el final |
| `grep -n patrón archivo` | líneas que casan, con su número |
| `wc -l` | contar líneas |
| `sort`, `uniq -c` | ordenar y contar repeticiones |
| `cut -d: -f1` | extraer campos |
| `sed`, `awk` | sustituir y procesar por campos |

`uniq` solo agrupa líneas **consecutivas** iguales, así que casi siempre va detrás de
`sort`. Es el error más frecuente de la práctica y no da ningún aviso: devuelve un
resultado plausible y equivocado.

### Permisos y procesos

| Orden | Qué hace |
| --- | --- |
| `chmod 754 f`, `chmod u+x f` | permisos en octal o simbólico |
| `chown`, `chgrp` | propietario y grupo |
| `umask` | permisos que se quitan al crear |
| `ps aux`, `top` | procesos en el sistema |
| `kill -TERM pid`, `kill -9 pid` | pedir que termine, o forzarlo |
| `jobs`, `fg`, `bg`, `&` | control de trabajos de la shell |

La diferencia entre `-TERM` y `-9` importa: el primero es una petición que el proceso
puede atender para cerrar archivos y guardar estado; el segundo lo mata sin
posibilidad de reaccionar. **Se prueba siempre el primero.**

### Redirección y tuberías

| Construcción | Qué hace |
| --- | --- |
| `> archivo` | redirige la salida estándar, truncando |
| `>> archivo` | redirige añadiendo |
| `2> archivo` | redirige la salida de error |
| `&> archivo` | redirige las dos |
| `< archivo` | toma la entrada estándar del archivo |
| `orden1 \| orden2` | la salida de la primera es la entrada de la segunda |

Las tuberías son la idea central del sistema: **programas pequeños que hacen una cosa
y se combinan**.

```bash
# las diez palabras más frecuentes de un texto
tr -cs 'A-Za-z' '\n' < texto.txt | tr 'A-Z' 'a-z' | sort | uniq -c | sort -rn | head
```

Esa línea no necesita ningún programa nuevo, y resuelve en un segundo lo que en C
serían cincuenta líneas. Es lo que la práctica pretende que se vea.

### Expansión

| Símbolo | Qué casa |
| --- | --- |
| `*` | cualquier cadena, incluida la vacía |
| `?` | un carácter |
| `[abc]`, `[a-z]` | un carácter del conjunto |
| `{a,b}` | expande a cada alternativa |

**La expansión la hace la shell, no el programa.** `ls *.c` recibe ya la lista de
nombres. Por eso `grep patrón *` falla si un nombre empieza por guion, y por eso hay
que entrecomillar cuando se quiere pasar el asterisco literal.

## Práctica 2. Construcción de guiones

Un guion automatiza lo que se haría a mano. Empieza por la línea que dice qué
intérprete lo ejecuta:

```bash
#!/bin/bash
set -euo pipefail        # aborta al primer error, con variable sin definir y en tuberías
```

Esa segunda línea evita la mitad de los fallos de la práctica: sin ella, un guion
sigue ejecutando después de que una orden falle, y borra o sobrescribe basándose en
un resultado que no existe.

### Variables

```bash
nombre="informe"
echo "Procesando ${nombre}.txt"
ruta=$(pwd)                       # sustitución de orden
```

| Regla | Por qué |
| --- | --- |
| Sin espacios alrededor del `=` | `a = 1` intenta ejecutar el programa `a` |
| Comillas dobles al usar: `"$v"` | sin ellas, un valor con espacios se parte en varias palabras |
| `${v}` cuando sigue texto | `$nombreX` busca la variable `nombreX` |
| `"${@}"` para los argumentos | conserva los que llevan espacios |

Las variables especiales: `$0` el nombre del guion, `$1` a `$9` los argumentos, `$#`
cuántos hay, `$?` el código de salida de la última orden, `$$` el PID.

### Condicionales y bucles

```bash
if [ -f "$archivo" ]; then
  echo "existe"
elif [ -d "$archivo" ]; then
  echo "es un directorio"
else
  echo "no existe" >&2
  exit 1
fi

for f in *.txt; do
  wc -l "$f"
done

while read -r linea; do
  echo "leída: $linea"
done < entrada.txt
```

| Comprobación | Cierta si |
| --- | --- |
| `-f f` | existe y es archivo regular |
| `-d d` | existe y es directorio |
| `-r f`, `-w f`, `-x f` | hay permiso de lectura, escritura, ejecución |
| `-z "$s"` | la cadena está vacía |
| `"$a" = "$b"` | cadenas iguales |
| `$a -eq $b`, `-lt`, `-gt` | comparación numérica |

**Comparar cadenas con `-eq` es un error frecuente**: `-eq` es numérico y con
cadenas da un error o un resultado falso. Para cadenas, `=`.

### Funciones y código de salida

```bash
uso() {
  echo "uso: $0 <directorio>" >&2
  exit 1
}

[ $# -eq 1 ] || uso
```

Un guion devuelve un código de salida: **cero es éxito** y cualquier otro es error.
Es lo que permite encadenar con `&&` y `||`, y lo que hace que el guion sea utilizable
desde otro.

### Guion de ejemplo completo

```bash
#!/bin/bash
# Cuenta las lineas de codigo de los .c de un directorio, sin comentarios ni vacias.
set -euo pipefail

[ $# -eq 1 ] || { echo "uso: $0 <directorio>" >&2; exit 1; }
[ -d "$1" ]  || { echo "$1 no es un directorio" >&2; exit 1; }

total=0
while IFS= read -r -d '' f; do
  n=$(grep -vcE '^\s*(//.*)?$' "$f")
  printf '%6d  %s\n' "$n" "$f"
  total=$((total + n))
done < <(find "$1" -name '*.c' -print0)

printf '%6d  TOTAL\n' "$total"
```

Dos detalles que la práctica pide entender:

- **`-print0` con `read -d ''`** trata bien los nombres con espacios y saltos de
  línea. Recorrer la salida de `find` con un `for` normal se rompe con el primer
  nombre que lleve un espacio.
- **La sustitución de proceso `< <(...)`** en vez de una tubería es necesaria para que
  el `while` se ejecute en la shell actual. Con `find ... | while ...` el bucle corre
  en un subproceso y `total` vuelve a cero al salir.

## Práctica 3. Compilación de programas

### Compilar por etapas

```bash
gcc -E prog.c -o prog.i        # preprocesado
gcc -S prog.i -o prog.s        # ensamblador
gcc -c prog.s -o prog.o        # objeto
gcc prog.o -o prog             # ejecutable
```

Se pide inspeccionar cada intermedio: cuánto crece el archivo tras el preprocesado
—una sola `#include <stdio.h>` añade miles de líneas—, qué aspecto tiene el
ensamblador generado, y qué símbolos define el objeto con `nm`.

### Varios módulos

```bash
gcc -Wall -Wextra -g -c main.c pila.c
gcc main.o pila.o -o programa
```

Los errores que aparecen y cómo se leen:

| Mensaje | Dónde está el problema |
| --- | --- |
| `error: 'x' undeclared` | compilación: falta la declaración o el `#include` |
| `undefined reference to 'f'` | enlazado: falta el `.o` o la biblioteca |
| `multiple definition of 'v'` | enlazado: una variable definida en una cabecera |
| `warning: implicit declaration` | compilación: se usa una función sin declarar |

El último es un aviso y no un error, y conviene tratarlo como error: significa que el
compilador está adivinando los tipos, y si adivina mal el fallo es en ejecución.
`-Werror` convierte los avisos en errores y es una buena costumbre.

### Bibliotecas

```bash
# estatica
gcc -c pila.c cola.c
ar rcs libtda.a pila.o cola.o
gcc main.c -L. -ltda -o programa
nm libtda.a | head

# dinamica
gcc -fPIC -c pila.c cola.c
gcc -shared -o libtda.so pila.o cola.o
gcc main.c -L. -ltda -o programa
LD_LIBRARY_PATH=. ./programa
ldd programa
```

Lo que la práctica pide comprobar: el **tamaño del ejecutable** con una y con otra, y
qué ocurre al modificar la biblioteca sin recompilar el programa. Con la estática no
cambia nada, porque el código está dentro; con la dinámica, el programa usa la
versión nueva. Esa es toda la diferencia, y explica por qué las actualizaciones de
seguridad del sistema funcionan.

### Makefile

Se pide escribir uno con compilación separada, dependencias correctas de cabeceras y
un objetivo `clean`, y comprobar que al tocar un solo `.c` se recompila solo ese
módulo.

La comprobación que enseña de verdad: **tocar una cabecera**. Si el Makefile no
declara esa dependencia, `make` no recompila nada y el programa queda incoherente. Es
el error del tema 3, visto en el propio proyecto.

### Depuración

```bash
gcc -g -O0 prog.c -o prog
gdb ./prog
valgrind --leak-check=full ./prog
gcc -fsanitize=address -g prog.c -o prog && ./prog
```

Se propone introducir errores a propósito —salirse de un vector, liberar dos veces,
usar memoria liberada, olvidar un `free`— y comprobar qué dice cada herramienta.
Vale la pena ver que **el programa con el error no siempre falla**: eso es lo que
hace peligrosos estos fallos y lo que justifica usar las herramientas.

## Sobre la memoria de prácticas

Lo que se entrega por práctica:

1. Enunciado resuelto, con las órdenes o el código.
2. Salidas obtenidas, no descritas: pegadas.
3. Explicación de **qué hace cada orden y por qué esa y no otra**.
4. Los errores encontrados y cómo se diagnosticaron.
5. Conclusiones.

El punto 4 es el que distingue una memoria buena. Un guion que funciona a la primera
enseña menos que uno que falló por comillas y se arregló entendiendo la expansión de
palabras.

Los guiones de laboratorio y su material de apoyo siguen \cite{newham2005} para la
shell, \cite{gough2005} y \cite{mecklenburg2004} para la compilación, y
\cite{stallman2003} y \cite{nethercote2008} para la depuración.
