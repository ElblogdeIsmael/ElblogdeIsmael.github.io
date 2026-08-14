# Funciones

Tema 3 del programa. Cómo se divide un programa en piezas, cómo se comunican esas
piezas y cómo se diseñan para que sirvan de verdad.

## Por qué dividir

Un programa de doscientas líneas en una sola función es difícil de leer, imposible
de probar por partes y no reutilizable. Dividirlo en funciones da cuatro cosas:

| Ventaja | En qué consiste |
| --- | --- |
| Abstracción | se usa la función sabiendo qué hace, sin saber cómo |
| Reutilización | se escribe una vez y se llama muchas |
| Prueba por partes | cada función se comprueba por separado |
| Legibilidad | el nombre de la función documenta la intención |

La abstracción es la fundamental: quien llama a `ordenar(v, n)` no necesita saber
si por dentro hay una ordenación por selección o por inserción.

## Fundamentos

### Declaración, definición y llamada

```cpp
// Declaracion, o prototipo: dice como se llama.
double area(double base, double altura);

int main() {
    cout << area(3.0, 4.0) << endl;   // llamada
    return 0;
}

// Definicion: dice que hace.
double area(double base, double altura) {
    return base * altura / 2.0;
}
```

Separar prototipo y definición permite llamar a una función antes de escribirla, y
es lo que hace posible que dos funciones se llamen mutuamente. El prototipo va
antes de `main`; la definición, después.

### Parámetros y argumentos

El **parámetro** es el nombre de la declaración; el **argumento** es el valor
concreto de la llamada. En `area(3.0, 4.0)`, `base` y `altura` son parámetros;
`3.0` y `4.0`, argumentos.

### Paso por valor

El parámetro recibe una **copia** del argumento. Modificarlo dentro no afecta a
quien llamó.

```cpp
void incrementar(int x) {
    x++;                // modifica la copia
}

int n = 5;
incrementar(n);
cout << n;              // sigue valiendo 5
```

Es el paso por omisión, y el adecuado cuando la función solo necesita leer el
valor.

### Paso por referencia

El parámetro es **otro nombre** para el objeto del llamante. Se marca con `&`, y
modificarlo sí afecta fuera.

```cpp
void incrementar(int &x) {
    x++;                // modifica el original
}

int n = 5;
incrementar(n);
cout << n;              // ahora vale 6
```

Se usa en dos situaciones distintas:

1. **Cuando la función debe modificar el argumento**, que es la razón principal.
2. **Cuando el argumento es grande y copiarlo cuesta**. En ese caso se pasa por
   referencia **constante**, que evita la copia sin permitir modificar:

```cpp
void imprimir(const string &texto);   // no copia y no modifica
```

### Cuál elegir

| Situación | Paso |
| --- | --- |
| Tipo básico que solo se lee | por valor |
| Objeto grande que solo se lee | por referencia constante |
| El argumento debe modificarse | por referencia |
| Devolver varios resultados | por referencia, o mejor un registro |

La referencia constante es la opción por omisión para objetos: no copia y el
compilador impide modificarlos, así que no hay que confiar en la disciplina.

### Devolución de valores

Una función devuelve un valor con `return`, y `void` indica que no devuelve nada.

```cpp
bool esPrimo(int n) {
    if (n < 2) return false;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
```

`i * i <= n` en vez de `i <= n/2` no es una micro-optimización caprichosa: reduce
las vueltas de $n/2$ a $\sqrt{n}$, que para un número de nueve cifras es la
diferencia entre 500 millones de vueltas y 31 mil.

**Todo camino debe devolver un valor.** Una función no `void` que termina sin
`return` produce comportamiento indefinido, y `-Wall` avisa.

### La pila de llamadas

Cada llamada crea un **marco de activación** en la pila, con los parámetros, las
variables locales y la dirección de retorno. Al volver, el marco desaparece.

```
   +----------------------+
   | marco de esPrimo     |  <- cima, la llamada actual
   +----------------------+
   | marco de main        |
   +----------------------+
```

De ahí salen tres hechos:

- **Las variables locales de cada llamada son independientes.** Es lo que hace
  funcionar la recursión del tema 6.
- **Una variable local deja de existir al volver.** Devolver una referencia o un
  puntero a una local es un error: apunta a memoria que se reutilizará.
- **La pila es finita.** Una recursión sin caso base la agota, y el programa
  aborta con desbordamiento de pila.

### Ámbito y vida

| Clase | Dónde se ve | Cuánto vive |
| --- | --- | --- |
| Local | dentro del bloque donde se declara | hasta que el bloque termina |
| Parámetro | dentro de la función | hasta que la función vuelve |
| Global | en todo el fichero desde su declaración | toda la ejecución |
| Estática local | dentro de la función | toda la ejecución |

Una variable local que oculta a una global con el mismo nombre es legal y confuso.
Y las **variables globales se evitan**: cualquier función puede modificarlas, así
que un error puede estar en cualquier parte del programa. Las constantes globales
sí son correctas, porque nadie las modifica.

## Diseño de funciones

### Descomposición descendente

Partir del problema completo y dividirlo en subproblemas hasta que cada uno quepa
en una función:

```
gestionar notas
 +-- leer notas
 +-- calcular media
 +-- contar aprobados
 +-- mostrar informe
```

El enfoque contrario, **ascendente**, construye primero las piezas básicas y las
combina. En la práctica se usan los dos: se planifica descendiendo y se escribe y
prueba ascendiendo, empezando por las funciones que no dependen de nadie.

### Qué hace una buena función

| Criterio | Qué significa |
| --- | --- |
| Una responsabilidad | hace una cosa, y el nombre la dice entera |
| Nombre verbal y descriptivo | `calcularMedia`, no `proceso` ni `f1` |
| Pocos parámetros | más de cuatro o cinco suele indicar que faltaba un registro |
| Sin efectos ocultos | si modifica algo, se ve en su firma |
| Corta | si no cabe en una pantalla, probablemente hace dos cosas |

El criterio de la responsabilidad única es el que más rinde. Una función llamada
`leerYValidarYGuardar` está anunciando que debería ser tres.

### Especificación

Ya apareció en el tema 1, y aquí es donde se aplica. Se escribe **antes** del
cuerpo:

```cpp
/**
 * @brief Busca un valor en un vector ordenado.
 * @param v Vector donde buscar. Precondicion: v esta ordenado
 *          de forma creciente.
 * @param n Numero de elementos. Precondicion: n >= 0.
 * @param x Valor buscado.
 * @return La posicion de x, o -1 si no esta.
 */
int buscar(const int v[], int n, int x);
```

La precondición «v está ordenado» es la que hace correcta la búsqueda dicotómica
del tema 4. Sin escribirla, nada impide llamar a la función con un vector
desordenado y obtener un resultado incorrecto sin que nada falle.

### Sobrecarga

Varias funciones pueden compartir nombre si difieren en los parámetros:

```cpp
double maximo(double a, double b);
int maximo(int a, int b);
int maximo(const int v[], int n);
```

El compilador elige según los argumentos. **No basta con que difiera el tipo de
retorno**: la llamada no lo determina, así que dos funciones que solo se
diferencien en eso son un error de compilación.

### Parámetros con valor por omisión

```cpp
void mostrar(double x, int decimales = 2);

mostrar(3.14159);      // usa 2
mostrar(3.14159, 4);   // usa 4
```

Los parámetros con valor por omisión deben ir **al final** de la lista, y el valor
se escribe en el prototipo, no en la definición.

### Modularización en ficheros

Cuando el programa crece, las funciones se reparten en ficheros:

```cpp
// figuras.h
#ifndef FIGURAS_H
#define FIGURAS_H
double areaCirculo(double radio);
#endif
```

```cpp
// figuras.cpp
#include "figuras.h"
const double PI = 3.14159265358979;
double areaCirculo(double radio) { return PI * radio * radio; }
```

```bash
g++ -Wall -c figuras.cpp
g++ -Wall -c principal.cpp
g++ figuras.o principal.o -o programa
```

El **guardián de inclusión** —las tres líneas del preprocesador— evita que la
cabecera se procese dos veces cuando varios ficheros la incluyen. Sin él, las
declaraciones se duplican y el compilador falla.

La cabecera lleva las declaraciones; el `.cpp`, las definiciones. Y en una
cabecera no se escribe `using namespace std`, porque se lo impone a todo el que la
incluya.

### Comprobar que funciona

```cpp
void probarBuscar() {
    int v[] = {1, 3, 5, 7, 9};
    assert(buscar(v, 5, 5) == 2);    // esta, en el medio
    assert(buscar(v, 5, 1) == 0);    // el primero
    assert(buscar(v, 5, 9) == 4);    // el ultimo
    assert(buscar(v, 5, 4) == -1);   // no esta
    assert(buscar(v, 0, 4) == -1);   // vector vacio
}
```

`assert` de `<cassert>` aborta si la condición es falsa, y desaparece al compilar
con `-DNDEBUG`. Los cinco casos son los del tema 2: típico, primero, último,
ausente y vacío. El diseño modular y su metodología están desarrollados en
\cite{garrido2016met}, y los criterios de calidad de una función en
\cite{martin2008} y \cite{mcconnell2004}.
