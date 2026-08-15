# Generación y depuración de aplicaciones

Tema 5 del programa. Qué es una plataforma, cómo se escribe software que no dependa
de una, qué aportan los entornos de desarrollo y cómo se depura de verdad.

## Plataforma

```{=latex}
\begin{definicion}[Plataforma]
Combinación de arquitectura de procesador, sistema operativo y bibliotecas del
sistema sobre la que un programa se ejecuta.
\end{definicion}
```

Un ejecutable compilado para una plataforma no funciona en otra, y las razones son
tres, independientes entre sí:

| Nivel | Qué cambia |
| --- | --- |
| Arquitectura | el juego de instrucciones: x86-64, ARM, RISC-V |
| Sistema operativo | las llamadas al sistema y el formato del ejecutable |
| Bibliotecas | las funciones disponibles y sus versiones |

Y dentro de la arquitectura, dos detalles que rompen programas aparentemente
portables:

- **El orden de los bytes.** En *little-endian* el byte menos significativo va
  primero y en *big-endian* al revés. Un archivo binario escrito en una máquina y
  leído en la otra da valores absurdos.
- **El tamaño de los tipos.** `int` es de 32 bits casi siempre, pero `long` es de 32
  en Windows de 64 bits y de 64 en Linux. Un programa que dé por hecho el tamaño
  falla al cambiar de sitio.

Se resuelven con `htonl` y compañía para el orden, y con `int32_t`, `uint64_t` y los
demás tipos de `<stdint.h>` para los tamaños.

## Software independiente de plataforma

Tres estrategias distintas, con precios distintos:

| Estrategia | Cómo | Coste |
| --- | --- | --- |
| Código portable recompilado | fuentes que compilan en varios sistemas | hay que compilar en cada uno |
| Máquina virtual | se compila a un código intermedio que interpreta una VM | la VM tiene que estar instalada |
| Interpretación | el código fuente se ejecuta directamente | más lento; el intérprete debe estar |

```{=latex}
\begin{center}
\begin{tikzpicture}[
  caja/.style={draw, minimum width=26mm, minimum height=7.5mm, font=\scriptsize,
               align=center},
  >=stealth
]
\node[caja] (f1) at (0,0) {fuente};
\node[caja] (c1) at (0,-1.1) {compilador nativo};
\node[caja] (e1) at (0,-2.2) {binario de esa\\plataforma};
\draw[->] (f1)--(c1); \draw[->] (c1)--(e1);
\node[font=\scriptsize] at (0,-3.1) {recompilar};

\node[caja] (f2) at (4.4,0) {fuente};
\node[caja] (c2) at (4.4,-1.1) {compilador a\\código intermedio};
\node[caja] (e2) at (4.4,-2.2) {máquina virtual};
\draw[->] (f2)--(c2); \draw[->] (c2)--(e2);
\node[font=\scriptsize] at (4.4,-3.1) {máquina virtual};

\node[caja] (f3) at (8.8,0) {fuente};
\node[caja] (c3) at (8.8,-1.1) {intérprete};
\node[caja] (e3) at (8.8,-2.2) {ejecución};
\draw[->] (f3)--(c3); \draw[->] (c3)--(e3);
\node[font=\scriptsize] at (8.8,-3.1) {interpretar};
\end{tikzpicture}
\end{center}
```

Los compiladores modernos de máquina virtual añaden una cuarta vía: la compilación
**en tiempo de ejecución**, que traduce a código nativo los fragmentos que más se
ejecutan. Da casi el rendimiento del nativo conservando la portabilidad, a cambio de
un arranque más lento.

Para el software recompilable, las herramientas que absorben las diferencias:

| Herramienta | Qué resuelve |
| --- | --- |
| `autoconf` / `automake` | detecta qué ofrece el sistema y configura la compilación |
| CMake | describe el proyecto una vez y genera el sistema de construcción de cada plataforma |
| Compilación condicional | `#ifdef _WIN32` para lo que no tiene equivalente |

La última es la de peor calidad y a veces la única. Conviene concentrarla en unos
pocos archivos de adaptación en vez de esparcirla por todo el código.

## Entornos y marcos de desarrollo

Un **entorno de desarrollo integrado** reúne editor, compilador, depurador y sistema
de construcción. No añade capacidades nuevas: hace más cómodo el ciclo de escribir,
compilar, ejecutar y depurar. Conviene saber qué hay debajo, porque cuando algo falla
lo que hay que leer es el error del compilador, no el del entorno.

Un **marco de trabajo** es distinto de una biblioteca, y la diferencia se resume en
quién llama a quién:

| | Biblioteca | Marco |
| --- | --- | --- |
| Quién llama | el programa llama a la biblioteca | el marco llama al programa |
| Estructura | la decide el programador | la impone el marco |
| Coste de cambiar | bajo | alto |

Por eso adoptar un marco es una decisión de arquitectura y usar una biblioteca no lo
es. El programa se escribe **dentro** del marco, rellenando los huecos que deja.

Y una pieza que casi siempre acompaña: el **control de versiones**. Guarda la
historia de los cambios, permite volver atrás y hace posible que varias personas
trabajen a la vez. Es tan parte del entorno de desarrollo como el compilador.

## Depuración

Depurar es localizar la causa de un comportamiento incorrecto. Que sea un método y
no una intuición es lo que separa media hora de tres días.

### El método

1. **Reproducir el fallo** de forma fiable. Un error que aparece una vez de cada
   veinte no se puede depurar; primero hay que encontrar la condición que lo
   dispara.
2. **Reducir el caso**: la entrada más pequeña que lo provoca.
3. **Formular una hipótesis** concreta y falsable sobre la causa.
4. **Diseñar la comprobación** que la confirma o la descarta.
5. **Corregir** y comprobar que el fallo desaparece y no aparece otro.

```{=latex}
\begin{anotacion}
El paso 3 es el que se salta casi siempre. Cambiar cosas hasta que deje de fallar no
es depurar: si el fallo desaparece sin saber por qué, no hay ninguna garantía de que
esté arreglado, y con frecuencia solo se ha ocultado.
\end{anotacion}
```

### Técnicas

| Técnica | Cuándo sirve | Límite |
| --- | --- | --- |
| Mensajes de traza | primera aproximación, errores reproducibles | ensucia el código y cambia el tiempo de ejecución |
| Depurador simbólico | inspeccionar estado y ejecutar paso a paso | requiere reproducir el fallo bajo el depurador |
| Aserciones | detectar el error donde se produce | hay que escribirlas antes |
| Análisis estático | encontrar errores sin ejecutar | avisa de cosas que no lo son |
| Analizadores dinámicos | fallos de memoria y de concurrencia | ralentizan mucho la ejecución |
| Volcado de memoria | fallos que no se pueden reproducir | solo da el estado final |

Sobre los mensajes de traza hay un detalle práctico: **la salida estándar está
almacenada en un búfer**, así que si el programa aborta, las últimas líneas pueden
no haberse escrito. La traza engaña señalando un punto anterior al real. Se evita
escribiendo por la salida de error, que no tiene búfer, o vaciando con `fflush`.

### El depurador

```bash
gcc -g -O0 programa.c -o programa
gdb ./programa
```

| Orden | Qué hace |
| --- | --- |
| `break f` | detiene al entrar en la función `f` |
| `break fichero.c:42 if i > 100` | punto de ruptura condicional |
| `run` | arranca |
| `next` / `step` | siguiente línea, sin entrar / entrando en la llamada |
| `print expr` | evalúa e imprime |
| `backtrace` | pila de llamadas |
| `watch v` | detiene cuando cambia `v` |
| `finish` | ejecuta hasta salir de la función |

Las dos órdenes que más rinden son las menos usadas. **`backtrace` tras un fallo**
dice la secuencia de llamadas que llevó ahí, que suele ser toda la información
necesaria. Y **`watch`** resuelve el caso difícil: una variable que se corrompe sin
saber quién la escribe. Poner un punto de observación y dejar correr señala la línea
exacta.

### Errores de memoria

Son los más frecuentes en C y C++ y los que peor se manifiestan, porque el síntoma
aparece lejos de la causa.

| Error | Qué produce |
| --- | --- |
| Acceso fuera de rango | corrupción de datos vecinos, o violación de segmento |
| Uso después de liberar | valores incoherentes |
| Doble liberación | corrupción de las estructuras del montículo |
| Fuga de memoria | consumo creciente hasta agotarla |
| Lectura de memoria sin inicializar | comportamiento distinto en cada ejecución |

Dos herramientas los encuentran señalando la línea:

```bash
gcc -fsanitize=address -g programa.c -o programa && ./programa
valgrind --leak-check=full ./programa
```

El **sanitizador** instrumenta el programa al compilar y es rápido; **valgrind**
ejecuta sobre una máquina virtual y no exige recompilar, pero ralentiza entre diez y
cincuenta veces. Para desarrollo diario conviene el primero.

```{=latex}
\begin{ejemplo}
Un programa escribe una posición más allá del final de un vector reservado con
\texttt{malloc} y funciona durante meses, porque esa posición cae en espacio que el
gestor de memoria tenía de sobra. Al añadir una variable, el reparto cambia y el
programa empieza a fallar en un sitio que no se ha tocado. El sanitizador detecta la
escritura original desde la primera ejecución.
\end{ejemplo}
```

### Aserciones

```c
#include <assert.h>
void quitar(Pila* p) {
  assert(p != NULL && p->n > 0);   // precondición
  --p->n;
}
```

Una aserción documenta y comprueba a la vez. Su valor es que **falla donde está el
error**, no donde se manifiesta.

Dos reglas al usarlas:

- Se compilan fuera con `-DNDEBUG`, así que **no deben tener efectos laterales**.
  `assert(++i > 0)` deja de incrementar en la versión de producción.
- Comprueban errores de programación, no de entrada. Que un archivo no exista no es
  un fallo del programa y no se trata con una aserción, se trata con un error.

## Del error al arreglo

Un resumen de qué usar según el síntoma:

| Síntoma | Primera herramienta |
| --- | --- |
| Violación de segmento | `gdb` con `backtrace`, o el sanitizador |
| Resultado incorrecto pero sin fallo | puntos de ruptura y `print` |
| Consumo de memoria creciente | `valgrind --leak-check=full` |
| Falla en producción y no en desarrollo | comparar versiones, opciones y datos de entrada |
| Falla a veces, con los mismos datos | memoria sin inicializar, o concurrencia |
| Falla al optimizar y no sin optimizar | comportamiento indefinido en el código |

Las dos últimas filas son las importantes. Un programa que solo falla con `-O2` casi
siempre tiene **comportamiento indefinido**: el optimizador tiene derecho a suponer
que eso no ocurre, y transforma el código en consecuencia. La conclusión correcta no
es «el optimizador tiene un fallo», es «hay un error latente que ahora se ve».

## Ejercicios

```{=latex}
\begin{ejercicio}
Un programa funciona compilado con \texttt{-O0} y falla con \texttt{-O2}. ¿Qué
conclusión es la razonable?
\end{ejercicio}

\begin{solucion}
Que hay comportamiento indefinido en el código: acceso fuera de rango, lectura de
una variable sin inicializar, desbordamiento de enteros con signo o un puntero mal
usado. Con \texttt{-O0} el reparto de memoria y el orden de las operaciones lo
esconden; el optimizador supone que no ocurre y reordena. La herramienta es el
sanitizador, no bajar el nivel de optimización.
\end{solucion}

\begin{ejercicio}
¿Por qué una aserción no debe llevar efectos laterales?
\end{ejercicio}

\begin{solucion}
Porque \texttt{-DNDEBUG} las elimina por completo del código compilado. Si la
condición modificaba algo, esa modificación desaparece y el programa se comporta de
forma distinta en producción y en desarrollo, que es el peor escenario posible: el
fallo solo aparece donde no se puede depurar.
\end{solucion}

\begin{ejercicio}
Un servicio consume cada vez más memoria y acaba agotándola tras varios días.
¿Cómo se localiza la causa?
\end{ejercicio}

\begin{solucion}
Con \texttt{valgrind --leak-check=full} sobre una ejecución que reproduzca la carga,
que da la pila de llamadas de cada reserva no liberada. Si el servicio no se puede
detener, sirve muestrear el consumo por zonas y correlacionarlo con la actividad para
acotar el módulo. Conviene descartar antes que no sea crecimiento legítimo, como una
caché sin límite: no toda memoria que crece es una fuga.
\end{solucion}
```

Las técnicas de depuración y las herramientas están descritas en
\cite{stallman2003} y \cite{nethercote2008}, y el desarrollo de aplicaciones sobre
GNU/Linux en \cite{matthew2008} y \cite{gough2005}.
