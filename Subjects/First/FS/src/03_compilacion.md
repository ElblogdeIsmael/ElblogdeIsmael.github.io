# Compilación y enlazado de programas

Tema 3 del programa. Qué ocurre entre escribir un archivo `.c` y tener un proceso en
ejecución, y cómo se automatiza.

## Las cuatro etapas

`gcc programa.c -o programa` no es una orden, son cuatro encadenadas:

```{=latex}
\begin{center}
\begin{tikzpicture}[
  caja/.style={draw, minimum width=24mm, minimum height=8mm, font=\scriptsize,
               align=center},
  >=stealth
]
\node[caja] (a) at (0,0)     {Preprocesador\\\texttt{cpp}};
\node[caja] (b) at (3.0,0)   {Compilador\\\texttt{cc1}};
\node[caja] (c) at (6.0,0)   {Ensamblador\\\texttt{as}};
\node[caja] (d) at (9.0,0)   {Enlazador\\\texttt{ld}};
\draw[->] (-2.0,0) -- (a.west); \node[font=\scriptsize] at (-2.4,0.35) {\texttt{.c}};
\draw[->] (a) -- node[font=\scriptsize, above] {\texttt{.i}} (b);
\draw[->] (b) -- node[font=\scriptsize, above] {\texttt{.s}} (c);
\draw[->] (c) -- node[font=\scriptsize, above] {\texttt{.o}} (d);
\draw[->] (d.east) -- (11.2,0); \node[font=\scriptsize] at (11.6,0.35) {ejecutable};
\end{tikzpicture}
\end{center}
```

| Etapa | Qué hace | Opción para pararse ahí |
| --- | --- | --- |
| Preprocesado | expande `#include`, `#define` y condicionales | `gcc -E` |
| Compilación | traduce a ensamblador, optimiza | `gcc -S` |
| Ensamblado | traduce a código máquina en un objeto reubicable | `gcc -c` |
| Enlazado | resuelve símbolos y produce el ejecutable | ninguna: es la última |

Poder pararse en cada etapa no es curiosidad académica: es la forma de localizar un
error. Un mensaje raro sobre una macro se entiende mirando la salida de `gcc -E`, y
un problema de enlazado no se arregla tocando el código fuente.

### Preprocesado

Trabaja sobre texto y no entiende C. Esa es la causa de sus dos trampas clásicas:

```c
#define CUADRADO(x) x * x
CUADRADO(2 + 3)      // se expande a 2 + 3 * 2 + 3, que es 11
```

Se corrige con paréntesis: `#define CUADRADO(x) ((x) * (x))`. Y aun así,
`CUADRADO(i++)` incrementa dos veces, porque la macro duplica el argumento.

Las **guardas de inclusión** resuelven el otro problema, incluir dos veces la misma
cabecera:

```c
#ifndef PILA_H
#define PILA_H
/* ... */
#endif
```

### Compilación

Traduce a ensamblador tras las fases habituales: análisis léxico, sintáctico,
semántico, generación de código intermedio y optimización.

| Nivel | Qué hace | Cuándo se usa |
| --- | --- | --- |
| `-O0` | ninguna optimización | al depurar: el código se corresponde con las fuentes |
| `-O2` | el conjunto habitual | compilación de producción |
| `-O3` | añade las agresivas, como la vectorización | cuando se ha medido que compensa |
| `-Os` | optimiza el tamaño | sistemas empotrados |

Y las opciones que más tiempo ahorran, que no son de optimización:

| Opción | Qué aporta |
| --- | --- |
| `-Wall -Wextra` | avisos que delatan errores reales antes de ejecutar |
| `-g` | información de depuración para `gdb` |
| `-std=c99` | fija el estándar y evita depender del compilador |
| `-fsanitize=address` | detecta accesos fuera de rango y fugas en ejecución |

```{=latex}
\begin{anotacion}
Compilar con \texttt{-O2} y depurar con \texttt{gdb} a la vez confunde: el
optimizador reordena instrucciones y elimina variables, así que el depurador salta
líneas y muestra valores «optimizados». Para depurar, \texttt{-O0 -g}.
\end{anotacion}
```

### Ensamblado y enlazado

El ensamblador produce un **objeto reubicable**, que ya es código máquina pero con
las direcciones sin fijar y una tabla de símbolos con lo que define y lo que
necesita.

El enlazador hace dos cosas:

- **Resolución de símbolos**: casa cada referencia con su definición.
- **Reubicación**: asigna direcciones definitivas y ajusta las referencias.

Los dos errores típicos son de esta etapa y se distinguen bien:

| Mensaje | Causa |
| --- | --- |
| `undefined reference to 'f'` | se usa `f` y nadie la define, o falta la biblioteca |
| `multiple definition of 'v'` | dos objetos definen el mismo símbolo global |

El segundo suele venir de definir una variable en una cabecera incluida dos veces.
Se corrige declarándola `extern` en la cabecera y definiéndola en un único `.c`.

## Ciclo de vida y modelo de memoria de un proceso

Cuando el ejecutable arranca, el sistema:

1. Crea el proceso con `fork` y ejecuta `exec`.
2. Lee la cabecera del ejecutable y descubre sus secciones.
3. Mapea el código y los datos en el espacio de direcciones.
4. Reserva la pila y coloca argumentos y variables de entorno.
5. Enlaza las bibliotecas dinámicas que falten.
6. Salta al punto de entrada, que llama a `main`.

Las secciones del ejecutable se corresponden con las zonas del tema anterior:

| Sección | En memoria | Contiene |
| --- | --- | --- |
| `.text` | código, solo lectura | instrucciones |
| `.rodata` | solo lectura | constantes y cadenas literales |
| `.data` | lectura y escritura | globales inicializadas |
| `.bss` | lectura y escritura | globales a cero; no ocupa en el archivo |

```{=latex}
\begin{ejemplo}
Que \texttt{.rodata} sea de solo lectura explica un fallo frecuente:

\medskip
\texttt{char *s = "hola"; s[0] = 'H';}

\medskip
compila sin avisos y aborta al ejecutarse, porque el literal vive en \texttt{.rodata}.
Con \texttt{char s[] = "hola";} el literal se copia a la pila y la escritura es
válida.
\end{ejemplo}
```

### Dónde vive cada variable

| Declaración | Zona | Vida |
| --- | --- | --- |
| Global | `.data` o `.bss` | todo el programa |
| `static` dentro de función | `.data` o `.bss` | todo el programa, visible solo ahí |
| Local | pila | la llamada |
| `malloc` / `new` | montículo | hasta `free` / `delete` |

De aquí sale el error que más cuesta depurar: **devolver un puntero a una variable
local**. El marco de pila desaparece al volver, y el puntero apunta a memoria que la
llamada siguiente reutilizará. A veces funciona, que es lo peor que puede pasar.

## Bibliotecas

Una biblioteca agrupa objetos ya compilados para reutilizarlos. Hay dos clases y la
diferencia es visible en todo lo demás.

| | Estática (`.a`) | Dinámica (`.so`) |
| --- | --- | --- |
| Cuándo se une | al enlazar | al cargar o al usarse |
| Tamaño del ejecutable | mayor: lleva el código dentro | menor: solo la referencia |
| Memoria con $n$ procesos | $n$ copias | una compartida |
| Actualizar la biblioteca | hay que reenlazar | basta sustituir el archivo |
| Dependencias en ejecución | ninguna | tiene que estar instalada |

```bash
# estática
gcc -c pila.c && ar rcs libpila.a pila.o
gcc main.c -L. -lpila -o programa

# dinámica
gcc -fPIC -c pila.c && gcc -shared -o libpila.so pila.o
gcc main.c -L. -lpila -o programa
export LD_LIBRARY_PATH=.        # si no, no la encuentra al ejecutar
```

El `-fPIC` no es opcional en la dinámica: genera **código independiente de la
posición**, que funciona esté donde esté cargada. Sin él, la biblioteca solo valdría
en una dirección fija, y dos bibliotecas querrían la misma.

Y la última línea explica el error más común con bibliotecas dinámicas: enlazan bien
y al ejecutar dicen que no encuentran el `.so`. El enlazador y el cargador buscan en
sitios distintos.

## Automatización con `make`

Recompilar todo cada vez es lento, y recompilar a mano solo lo que cambió es
propenso a error. `make` resuelve las dos cosas: **reconstruye lo que está
desactualizado**, comparando fechas de modificación.

```make
CC      = gcc
CFLAGS  = -Wall -Wextra -g -std=c99
OBJ     = main.o pila.o cola.o

programa: $(OBJ)
	$(CC) $(OBJ) -o $@

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJ) programa

.PHONY: clean
```

| Elemento | Qué es |
| --- | --- |
| Objetivo | lo que se quiere construir |
| Dependencias | de qué depende |
| Receta | las órdenes, **con tabulador**, nunca espacios |
| `$@` | el objetivo |
| `$<` | la primera dependencia |
| `$^` | todas las dependencias |
| `.PHONY` | objetivos que no son archivos |

**El error de las dependencias incompletas** merece atención porque no da ningún
mensaje. Si `pila.o` depende de `pila.h` y la regla no lo dice, tocar la cabecera no
provoca recompilación, y el objeto queda desfasado. El programa enlaza y se comporta
de forma incoherente. Se resuelve generando las dependencias automáticamente:

```make
-include $(OBJ:.o=.d)
CFLAGS += -MMD -MP
```

```{=latex}
\begin{anotacion}
\texttt{make} decide por \textbf{fecha de modificación}, no por contenido. Un archivo
con fecha futura —por un reloj mal puesto o una copia que preserva marcas de tiempo—
hace que su objetivo parezca siempre actualizado y no se reconstruya nunca. Ante un
comportamiento inexplicable, \texttt{make clean}.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Un programa enlaza correctamente y al ejecutarlo da
\texttt{error while loading shared libraries}. ¿Qué ocurre?
\end{ejercicio}

\begin{solucion}
La biblioteca dinámica estaba disponible al enlazar, en la ruta indicada con
\texttt{-L}, pero el cargador no la encuentra en tiempo de ejecución porque busca en
otras rutas. Se resuelve instalándola en un directorio del sistema, añadiendo su
ruta a \texttt{LD\_LIBRARY\_PATH}, o enlazando con \texttt{-Wl,-rpath}.
\end{solucion}

\begin{ejercicio}
¿Por qué \texttt{\#define DOBLE(x) x * 2} da un resultado inesperado en
\texttt{DOBLE(3 + 1)}?
\end{ejercicio}

\begin{solucion}
El preprocesador sustituye texto sin entender precedencia: la expansión es
\texttt{3 + 1 * 2}, que vale 5 y no 8. Se corrige con
\texttt{\#define DOBLE(x) ((x) * 2)}. El paréntesis exterior hace falta además para
que la macro se comporte bien dentro de una expresión mayor.
\end{solucion}

\begin{ejercicio}
Un Makefile no declara que \texttt{main.o} depende de \texttt{tipos.h}. Se modifica
la cabecera cambiando el tamaño de una estructura y se ejecuta \texttt{make}. ¿Qué
pasa?
\end{ejercicio}

\begin{solucion}
\texttt{make} no ve motivo para recompilar \texttt{main.o}, que queda con la
definición vieja mientras el resto usa la nueva. El programa enlaza y accede a
campos en posiciones distintas según el objeto, con corrupción silenciosa. Es el
peor tipo de error: no hay mensaje. Se evita generando las dependencias con
\texttt{-MMD -MP}.
\end{solucion}
```

El proceso de compilación y enlazado está descrito en \cite{gough2005}, la
automatización con `make` en \cite{mecklenburg2004}, y el desarrollo de aplicaciones
sobre Linux en \cite{johnson2005} y \cite{matthew2008}.
