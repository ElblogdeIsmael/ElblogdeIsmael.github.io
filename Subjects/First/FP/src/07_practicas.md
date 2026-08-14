# Temario práctico

Los seis bloques de prácticas del programa y los tres seminarios que los
acompañan.

## Seminario 1. El entorno de trabajo

```bash
g++ -Wall -Wextra -std=c++17 -g -o programa programa.cpp
./programa
```

| Opción | Para qué |
| --- | --- |
| `-Wall -Wextra` | avisos; se tratan como errores |
| `-std=c++17` | fija la versión del lenguaje |
| `-g` | información para el depurador |
| `-o nombre` | nombre del ejecutable |
| `-O2` | optimiza; no se usa mientras se depura |

Un programa que compila con avisos no está terminado. Los más frecuentes en esta
asignatura, y lo que significan de verdad:

| Aviso | Causa |
| --- | --- |
| `unused variable` | se declaró y no se usa: sobra, o falta código |
| `may be used uninitialized` | se lee antes de darle valor |
| `comparison between signed and unsigned` | comparar `int` con `size_t` |
| `control reaches end of non-void function` | falta un `return` en algún camino |
| `suggest parentheses around assignment` | se escribió `=` donde iba `==` |

**Redirección**, que ahorra teclear la entrada en cada prueba:

```bash
./programa < entrada.txt > salida.txt
diff salida.txt esperada.txt
```

Si `diff` no imprime nada, la salida coincide. Es la forma más simple de prueba
automática, y la que se usa en las entregas corregidas por juez.

## Seminario 2. Test y depuración

### Casos de prueba

Se eligen, no se improvisan:

| Categoría | Ejemplo en un vector |
| --- | --- |
| Típico | cinco elementos desordenados |
| Vacío | `n = 0` |
| Un elemento | `n = 1` |
| Todos iguales | comprueba las comparaciones |
| Ya ordenado, y al revés | mejor y peor caso |
| Extremos del rango | el valor mínimo y el máximo del tipo |

Los tres primeros encuentran la mayoría de los errores de esta asignatura.

### `assert`

```cpp
#include <cassert>

void probar() {
    assert(factorial(0) == 1);
    assert(factorial(5) == 120);
    assert(esPrimo(2));
    assert(!esPrimo(1));
}
```

`assert` aborta indicando fichero y línea si la condición es falsa, y desaparece
al compilar con `-DNDEBUG`. Sirve para comprobar precondiciones e invariantes
durante el desarrollo, no para validar la entrada del usuario: eso se comprueba
con un `if` que siga funcionando en la versión final.

### GDB

```bash
g++ -Wall -g -o prog prog.cpp
gdb ./prog
```

| Orden | Efecto |
| --- | --- |
| `break main` | punto de ruptura |
| `run` | ejecuta |
| `next` / `step` | avanza sin entrar / entrando en funciones |
| `print x` | valor de una variable |
| `display x` | lo muestra tras cada paso |
| `backtrace` | pila de llamadas |
| `finish` | ejecuta hasta salir de la función actual |

`backtrace` es la orden que resuelve los dos fallos más habituales del curso: tras
un desbordamiento de pila muestra la recursión que no terminaba, y tras una
violación de segmento indica desde dónde se llegó.

### Valgrind

```bash
valgrind --leak-check=full ./prog
```

Detecta lecturas y escrituras fuera de un vector aunque el programa no falle. Es
la única forma fiable de encontrar un desplazamiento en uno, porque `v[n]` no
produce ningún error visible.

## Seminario 3. Documentación de funciones

```cpp
/**
 * @brief Cuenta cuantos elementos de un vector superan un umbral.
 *
 * @param v Vector de enteros. Precondicion: n >= 0.
 * @param n Numero de elementos utiles de v.
 * @param umbral Valor de comparacion.
 * @return El numero de elementos estrictamente mayores que umbral.
 */
int contarMayores(const int v[], int n, int umbral);
```

Se escribe **antes** del cuerpo, porque obliga a decidir qué hace la función
antes de escribir cómo. Lo que documenta:

- `@brief`, en una frase y con un verbo.
- Cada parámetro, con su **precondición** si la tiene.
- Qué devuelve, incluido el valor para los casos especiales.

El comentario dice el **porqué** y el contrato; no repite lo que el código ya
dice. `i++; // incrementa i` no aporta nada.

## Bloque 1. Tipos de datos, expresiones y sentencias

Ejercicios sobre lo que el tema 1 explicaba, y las trampas que se comprueban
ejecutando:

```cpp
cout << 7 / 2;                          // 3
cout << 7 % 2;                          // 1
cout << 7.0 / 2;                        // 3.5
cout << static_cast<double>(7) / 2;     // 3.5
cout << 0.1 + 0.2 == 0.3;               // falso
```

Formato de salida:

```cpp
#include <iomanip>
cout << fixed << setprecision(2) << 3.14159;   // 3.14
cout << setw(8) << 42;                          // alineado a la derecha
```

## Bloque 2. Estructuras condicionales y repetitivas

Ejercicios característicos:

- Clasificar una nota en su calificación, con la escalera del tema 2 en el orden
  correcto.
- Contar dígitos de un número con `n /= 10` hasta que valga 0.
- Menú con `do-while` que repite hasta que se elige salir.
- Tabla de multiplicar con bucles anidados.
- Calcular el máximo común divisor con el algoritmo de Euclides.

```cpp
int mcd(int a, int b) {
    while (b != 0) {
        int r = a % b;
        a = b;
        b = r;
    }
    return a;
}
```

## Bloque 3. Funciones

Reescribir los ejercicios del bloque 2 dividiéndolos en funciones, con su
especificación. El ejercicio evalúa la **descomposición**, no el resultado: un
programa correcto escrito entero dentro de `main` no cumple el objetivo.

Ejercicio de paso de parámetros que conviene tener claro:

```cpp
void intercambiar(int &a, int &b) {   // por referencia: si funciona
    int t = a; a = b; b = t;
}

void noIntercambia(int a, int b) {    // por valor: no hace nada fuera
    int t = a; a = b; b = t;
}
```

## Bloque 4. Vectores, matrices y registros

- Leer un vector, calcular su media, su máximo y su mínimo.
- Buscar de forma lineal y de forma dicotómica, y comparar el número de
  comparaciones en cada una.
- Implementar selección, inserción y burbuja, y contar comparaciones e
  intercambios de cada una sobre los mismos datos.
- Operaciones con matrices: suma, transpuesta, producto, comprobar si es
  simétrica.
- Vector de registros: gestionar una lista de alumnos, ordenarla por nota,
  buscar por nombre.

Contar operaciones en vez de medir tiempos es lo que hace comparable el
resultado entre máquinas, y es lo que convierte la tabla de costes del tema 4 en
algo comprobado.

## Bloque 5. Clases

Convertir en clase lo que el bloque 4 hizo con vector y tamaño sueltos:

```cpp
class ListaAlumnos {
private:
    static const int MAX = 100;
    Alumno datos_[MAX];
    int    n_;

public:
    ListaAlumnos() : n_(0) {}
    bool   anadir(const Alumno &a);
    bool   eliminar(int i);
    int    tamanio() const;
    Alumno elemento(int i) const;
    double media() const;
    void   ordenarPorNota();
};
```

La comprobación de que la clase está bien hecha: **cambiar la representación
interna sin tocar el programa que la usa**. Si al sustituir el vector por otra
estructura hay que modificar `main`, es que algo interno se había escapado por la
interfaz.

## Bloque 6. Recursividad

Los ejercicios habituales, de menos a más:

- Factorial, potencia y suma de dígitos.
- Invertir una cadena y comprobar si es palíndromo.
- Búsqueda dicotómica escrita de forma recursiva.
- Torres de Hanói.
- Fibonacci en las dos versiones, **midiendo el tiempo de las dos**.

El ejercicio de Fibonacci es el que cierra el curso, y su resultado es el que se
recuerda: con $n = 45$, la versión recursiva ingenua tarda minutos y la iterativa
es instantánea, escribiendo las dos lo mismo. Es la demostración de que el
algoritmo pesa más que el lenguaje, la máquina o el compilador.

## Cómo se entrega

```bash
g++ -Wall -Wextra -std=c++17 -o programa programa.cpp    # sin avisos
./programa < prueba.txt                                   # con los casos elegidos
valgrind ./programa < prueba.txt                          # sin accesos invalidos
```

Y lo que se revisa antes de entregar: nombres descriptivos, funciones con una
responsabilidad, especificación en cada función, ninguna variable global no
constante, ningún número mágico y ninguna línea repetida que pudiera ser una
función. Los criterios están desarrollados en \cite{martin2008} y
\cite{mcconnell2004}; los ejercicios y su planteamiento, en \cite{garrido2005} y
\cite{gaddis2019}.
