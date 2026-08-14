# Seminarios

Los cinco seminarios del programa. Cubren las herramientas con las que se
construye, se depura y se documenta un proyecto, que es la parte de la asignatura
que no es lenguaje sino método.

## Seminario 1. El modelo de compilación en C++

### Las cuatro fases

| Fase | Programa | Entrada | Salida | Cómo detenerse |
| --- | --- | --- | --- | --- |
| Preprocesado | `cpp` | `.cpp` | texto expandido | `g++ -E` |
| Compilación | `cc1plus` | texto expandido | ensamblador `.s` | `g++ -S` |
| Ensamblado | `as` | `.s` | objeto `.o` | `g++ -c` |
| Enlazado | `ld` | `.o` y bibliotecas | ejecutable | `g++` |

El **preprocesador** no entiende C++: manipula texto. Sustituye `#include` por el
contenido del fichero, expande las macros y resuelve la compilación condicional.
De ahí que un error en una macro señale una línea que no es la culpable.

El **enlazador** resuelve los símbolos: cada `.o` deja anotado qué usa y no
define, y el enlazador busca esas definiciones en los demás objetos y en las
bibliotecas.

### Compilación separada

```bash
g++ -Wall -c principal.cpp     # -> principal.o
g++ -Wall -c conjunto.cpp      # -> conjunto.o
g++ principal.o conjunto.o -o programa
```

Lo que gana: al cambiar un `.cpp` solo se recompila ese, y en un proyecto grande
eso es la diferencia entre segundos y minutos.

El reparto entre cabecera y fuente:

| Fichero | Contiene |
| --- | --- |
| `.h` | declaraciones: clases, prototipos, constantes, plantillas |
| `.cpp` | definiciones: cuerpos de las funciones y métodos |

### Guardián de inclusión

```cpp
#ifndef CONJUNTO_H
#define CONJUNTO_H
// ...
#endif
```

Sin él, una cabecera incluida dos veces —directamente y a través de otra— duplica
las declaraciones y el compilador falla. `#pragma once` hace lo mismo en una línea
y no es estándar, aunque todos los compiladores lo admiten.

### Errores de compilación y de enlazado

Distinguirlos ahorra tiempo, porque se arreglan en sitios distintos:

| Mensaje | Fase | Causa habitual |
| --- | --- | --- |
| `'X' was not declared in this scope` | compilación | falta el `#include` o hay una errata |
| `undefined reference to 'X'` | **enlazado** | el símbolo se declaró y no se definió, o falta el `.o` |
| `multiple definition of 'X'` | enlazado | una definición en una cabecera incluida dos veces |
| `redefinition of class X` | compilación | falta el guardián de inclusión |

`undefined reference to 'Conjunto::insertar(int)'` significa casi siempre que se
declaró el método y no se escribió su cuerpo, o que se olvidó `Conjunto::` delante
de la definición.

## Seminario 2. Gestión automatizada de proyectos

### `make`

Un fichero `makefile` describe qué depende de qué y cómo se construye. `make`
recompila **solo lo que ha cambiado**, comparando fechas.

```makefile
CXX      = g++
CXXFLAGS = -Wall -Wextra -std=c++17 -g
OBJ      = principal.o conjunto.o

programa: $(OBJ)
	$(CXX) $(OBJ) -o programa

principal.o: principal.cpp conjunto.h
	$(CXX) $(CXXFLAGS) -c principal.cpp

conjunto.o: conjunto.cpp conjunto.h
	$(CXX) $(CXXFLAGS) -c conjunto.cpp

clean:
	rm -f $(OBJ) programa

.PHONY: clean
```

Tres cosas que hay que acertar:

- **Las órdenes se indentan con un tabulador**, no con espacios. Con espacios
  `make` da un error que no explica lo que pasa.
- **Las cabeceras van en las dependencias.** Si `principal.o` no depende de
  `conjunto.h`, cambiar la cabecera no recompila nada y el programa se enlaza con
  código que ya no corresponde. Es el error más difícil de diagnosticar del
  seminario, porque el binario resultante es incoherente.
- **`.PHONY`** marca los objetivos que no producen un fichero con ese nombre. Sin
  él, un fichero llamado `clean` impediría ejecutar la regla.

Estructura habitual de un proyecto de la asignatura:

```
proyecto/
  include/     cabeceras
  src/         fuentes
  obj/         objetos
  bin/         ejecutable
  doc/         documentacion generada
  makefile
```

## Seminario 3. Modularización y bibliotecas

Un **módulo** agrupa lo relacionado: una cabecera con la interfaz y un fuente con
la implementación. Un módulo bien hecho tiene alta cohesión —todo lo suyo sirve al
mismo propósito— y bajo acoplamiento —depende de pocos módulos—.

### Bibliotecas estáticas y el programa `ar`

```bash
g++ -Wall -c conjunto.cpp lista.cpp
ar rcs libestructuras.a conjunto.o lista.o
g++ principal.cpp -L. -lestructuras -o programa
```

| Opción de `ar` | Efecto |
| --- | --- |
| `r` | inserta o reemplaza |
| `c` | crea el archivo sin avisar |
| `s` | escribe el índice de símbolos |

Y en el enlazado: `-L.` añade el directorio actual a la búsqueda, y
`-lestructuras` busca `libestructuras.a`. La convención del nombre —`lib` delante
y `.a` detrás— es obligatoria para que `-l` lo encuentre.

| | Estática `.a` | Dinámica `.so` |
| --- | --- | --- |
| Cuándo se enlaza | al construir | al ejecutar |
| Tamaño del ejecutable | mayor | menor |
| Actualizar la biblioteca | hay que reenlazar | basta con sustituir el fichero |
| Dependencias en ejecución | ninguna | la biblioteca debe estar |

Otras herramientas del seminario: `nm` lista los símbolos de un objeto o
biblioteca, y `ar t` su contenido. `nm` es lo que resuelve un `undefined
reference` cuando no está claro si el símbolo existe o se llama de otra forma.

## Seminario 4. Gestión de errores y depuración

Tres mecanismos, para tres clases de problema distintas.

### Devolución de valores de error

```cpp
bool leerConfiguracion(const string &fichero, Config &c);
```

Simple y explícito. Su defecto es que **el valor se puede ignorar**, y entonces el
programa sigue con datos inválidos.

### Aserciones

```cpp
#include <cassert>

int elemento(int i) const {
    assert(i >= 0 && i < n_);
    return datos_[i];
}
```

Comprueban lo que **nunca debería fallar**: precondiciones e invariantes. Si falla,
el error está en el programa, no en los datos.

Desaparecen al compilar con `-DNDEBUG`, y de ahí la regla que las gobierna:
**nunca se pone un efecto necesario dentro de un `assert`**.

```cpp
assert(insertar(x));      // en la version final NO se inserta nada
```

Y no sirven para validar la entrada del usuario: eso se comprueba con un `if` que
siga estando en la versión final.

### Excepciones

Para errores que el punto donde ocurren no puede resolver:

```cpp
#include <stdexcept>

int Conjunto::elemento(int i) const {
    if (i < 0 || i >= n_) {
        throw out_of_range("Conjunto::elemento: indice fuera de rango");
    }
    return datos_[i];
}

// En quien llama
try {
    cout << c.elemento(50);
} catch (const out_of_range &e) {
    cerr << "Error: " << e.what() << endl;
}
```

| Excepción estándar | Cuándo |
| --- | --- |
| `out_of_range` | índice fuera de rango |
| `invalid_argument` | argumento con valor no admitido |
| `runtime_error` | fallo detectado en ejecución |
| `bad_alloc` | `new` no pudo reservar |

Se capturan **por referencia constante**: por valor se copia y se pierde el tipo
derivado.

Ventaja: el error no se puede ignorar por descuido, y la información viaja desde
donde ocurre hasta donde se sabe qué hacer. Inconveniente: el flujo deja de ser
lineal, y **una excepción que sale de una función salta el código que quedaba**,
incluidos los `delete`. Esa es la razón profunda de que los recursos se liberen en
un destructor y no a mano.

### Cuál usar

| Situación | Mecanismo |
| --- | --- |
| Fallo esperable y frecuente | valor de retorno |
| Error del programador | aserción |
| Error excepcional que aquí no se puede resolver | excepción |
| Entrada del usuario incorrecta | comprobación con `if` |

### Depuración

```bash
g++ -Wall -Wextra -g -o prog prog.cpp
gdb ./prog
valgrind --leak-check=full ./prog
```

| Orden de GDB | Efecto |
| --- | --- |
| `break conjunto.cpp:42` | punto de ruptura |
| `run` | ejecuta |
| `next` / `step` | avanza sin entrar / entrando |
| `print *p` | valor apuntado |
| `backtrace` | pila de llamadas |
| `watch n_` | detiene cuando cambia un dato |
| `finish` | ejecuta hasta salir de la función |

`watch` es la orden que encuentra el atributo que alguien modifica sin permiso, y
`backtrace` la que dice desde dónde se llegó a la violación de segmento.

Salida de Valgrind sobre un programa correcto de esta asignatura:

```
All heap blocks were freed -- no leaks are possible
ERROR SUMMARY: 0 errors from 0 contexts
```

Cualquier otra cosa es un fallo, aunque el programa dé el resultado esperado.

## Seminario 5. Documentación de software

### Doxygen

```cpp
/**
 * @file conjunto.h
 * @brief Conjunto de enteros sin repeticiones.
 * @author Ismael Sallami Moreno
 */

/**
 * @brief Inserta un elemento en el conjunto.
 *
 * Si el elemento ya estaba, el conjunto no cambia.
 *
 * @param x Elemento a insertar.
 * @return true si se inserto, false si ya estaba.
 * @pre El conjunto esta correctamente construido.
 * @post cardinal() >= el valor anterior.
 */
bool insertar(int x);
```

```bash
doxygen -g            # genera Doxyfile
doxygen Doxyfile      # genera la documentacion
```

| Etiqueta | Para qué |
| --- | --- |
| `@brief` | una frase |
| `@param` | cada parámetro |
| `@return` | qué devuelve |
| `@pre`, `@post` | precondición y postcondición |
| `@throw` | qué excepciones lanza |
| `@file`, `@author` | cabecera del fichero |

### Qué documentar

- **El contrato**: qué hace, qué recibe, qué devuelve, qué exige y qué garantiza.
- **El porqué** de una decisión que no se deduce del código.
- **Las excepciones** que puede lanzar.

Y qué no: repetir lo que el código dice. `i++; // incrementa i` no aporta nada, y
un comentario que se desactualiza es peor que ninguno, porque miente con
autoridad.

La documentación se escribe **antes** que el cuerpo, porque obliga a decidir el
contrato antes de la implementación. Es la misma disciplina que la especificación
de la asignatura anterior, ahora con herramientas que la extraen. Estos
seminarios están desarrollados en \cite{garrido2016met} y en
\cite{garrido2017practicas}.
