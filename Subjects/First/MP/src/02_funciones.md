# Funciones

Tema 2 del programa. La función `main`, el mecanismo de la pila que sostiene toda
llamada, el paso de parámetros con punteros y referencias, y las funciones en
línea y los punteros a función.

## La función `main`

El punto de entrada del programa. Tiene dos formas admitidas:

```cpp
int main();
int main(int argc, char *argv[]);
```

La segunda recibe los argumentos de la línea de órdenes:

| Parámetro | Contenido |
| --- | --- |
| `argc` | número de argumentos, incluido el nombre del programa |
| `argv[0]` | el nombre con el que se invocó |
| `argv[1]`…`argv[argc-1]` | los argumentos |
| `argv[argc]` | `nullptr` |

```cpp
int main(int argc, char *argv[]) {
    if (argc != 3) {
        cerr << "Uso: " << argv[0] << " <entrada> <salida>" << endl;
        return 1;
    }
    string entrada = argv[1];
    string salida  = argv[2];
    // ...
    return 0;
}
```

Comprobar `argc` **antes** de leer `argv[1]` no es opcional: sin la comprobación,
ejecutar el programa sin argumentos lee fuera del vector.

El valor devuelto es el **código de salida**: 0 significa éxito y cualquier otro
valor, error. Lo consulta el intérprete de órdenes en `$?`, y es lo que permite
encadenar programas en un guion.

## La pila

Cada llamada a una función crea un **marco de activación** en la pila, que
contiene:

| Contenido | Para qué |
| --- | --- |
| Parámetros | los valores recibidos |
| Dirección de retorno | dónde continuar al volver |
| Variables locales | el estado de esta llamada |
| Registros salvados | los que la función va a usar |

El marco se apila al llamar y se desapila al volver. De ahí salen los hechos que
gobiernan todo lo demás:

- **Cada llamada tiene sus propias variables locales.** Es lo que hace funcionar
  la recursión.
- **Las locales dejan de existir al volver.** Devolver su dirección produce un
  puntero colgante, que es el error del tema 1.
- **La pila es finita.** Unos megabytes, así que una recursión demasiado profunda
  la agota. El programa aborta con desbordamiento de pila.
- **Un vector local grande no cabe.** `int v[1000000]` como variable local
  desborda; ese tamaño va al montículo.

```
   direcciones altas
   +--------------------------+
   | marco de main            |
   +--------------------------+
   | marco de f, llamada por  |
   | main                     |
   +--------------------------+
   | marco de g, llamada por f|  <- cima
   +--------------------------+
   direcciones bajas
```

En GDB, `backtrace` imprime exactamente esa pila, y es la orden que localiza de
dónde vino una llamada que falló.

## Paso de parámetros y devolución de resultados

Tres formas, y la elección tiene consecuencias distintas de las del curso
anterior porque ahora entran los punteros.

### Por valor

```cpp
void f(int x);            // copia
void g(Objeto o);         // copia el objeto entero
```

Modificar el parámetro no afecta al argumento. Con objetos grandes la copia
cuesta, y si el objeto gestiona memoria dinámica invoca su constructor de copia.

### Por referencia

```cpp
void incrementar(int &x)          { x++; }
void mostrar(const string &s)     { cout << s; }
```

Sin copia, y `const` impide modificar. **Es la opción por omisión para objetos**:
no copia y el compilador comprueba la intención.

### Por puntero

```cpp
void incrementar(int *x) {
    if (x != nullptr) (*x)++;
}
```

Equivale a la referencia con dos diferencias que deciden cuándo usar cada una:

| | Referencia | Puntero |
| --- | --- | --- |
| Puede ser nula | no | sí |
| Se puede reasignar | no | sí |
| Sintaxis en la llamada | `f(x)` | `f(&x)` |
| Se ve en la llamada que puede modificar | no | sí |

La regla: **referencia cuando el argumento siempre existe; puntero cuando puede no
haberlo**. Un parámetro opcional se pasa por puntero precisamente porque
`nullptr` es un valor válido que significa «no hay».

El paréntesis de `(*x)++` es obligatorio: `*x++` incrementa el puntero, no el
valor, porque el postincremento tiene más prioridad que la indirección.

### Devolver por referencia

```cpp
int & elemento(int v[], int i) { return v[i]; }

elemento(v, 2) = 99;      // asigna a v[2]
```

Es lo que permite que una función aparezca a la izquierda de una asignación, y es
como se implementa `operator[]` en el tema 3.

**Nunca se devuelve una referencia a una variable local**: deja de existir al
volver. La referencia devuelta debe apuntar a algo que sobreviva a la llamada —un
parámetro, un dato miembro o memoria dinámica—.

### Devolver varios resultados

```cpp
// (a) parametros de salida por referencia
void dividir(int a, int b, int &cociente, int &resto);

// (b) un registro
struct Division { int cociente, resto; };
Division dividir(int a, int b);
```

La segunda es preferible: los resultados van juntos, tienen nombre y no se pueden
confundir de orden en la llamada.

## Parámetros con valor por defecto

```cpp
void imprimir(double x, int decimales = 2, bool alinear = false);

imprimir(3.14159);              // 2 decimales, sin alinear
imprimir(3.14159, 4);           // 4 decimales
imprimir(3.14159, 4, true);     // todo explicito
```

Dos reglas: **van al final** de la lista, porque los argumentos se emparejan por
posición; y **el valor se escribe una sola vez**, en la declaración, no en la
definición.

## Funciones en línea

`inline` sugiere al compilador que sustituya la llamada por el cuerpo, ahorrando
el coste de crear y destruir el marco:

```cpp
inline int maximo(int a, int b) { return (a > b) ? a : b; }
```

Tres precisiones:

- **Es una sugerencia, no una orden.** El compilador decide, y con optimización
  activada pone en línea funciones que no llevan la palabra y descarta algunas
  que sí.
- **Solo compensa con funciones muy cortas.** Con una función grande, el código
  crece y empeora el aprovechamiento de la caché de instrucciones.
- **Su efecto real hoy es otro**: permite definir una función en una cabecera sin
  que el enlazador se queje de definiciones duplicadas. Los métodos definidos
  dentro de la declaración de una clase son implícitamente `inline`, y por eso se
  pueden escribir en el `.h`.

## Punteros a función

Una función tiene dirección, y esa dirección se puede guardar:

```cpp
int sumar(int a, int b) { return a + b; }
int restar(int a, int b) { return a - b; }

int (*operacion)(int, int) = sumar;
cout << operacion(3, 4);      // 7
operacion = restar;
cout << operacion(3, 4);      // -1
```

Los paréntesis de `(*operacion)` son necesarios: sin ellos, `int *operacion(int,
int)` declara una función que devuelve un puntero a entero.

Para qué sirven:

**Pasar comportamiento a una función.** Una ordenación que recibe el criterio de
comparación sirve para cualquier orden sin duplicar el algoritmo:

```cpp
void ordenar(int v[], int n, bool (*antes)(int, int)) {
    for (int i = 0; i < n - 1; i++) {
        int pos = i;
        for (int j = i + 1; j < n; j++)
            if (antes(v[j], v[pos])) pos = j;
        swap(v[i], v[pos]);
    }
}

bool creciente(int a, int b)   { return a < b; }
bool decreciente(int a, int b) { return a > b; }

ordenar(v, n, creciente);
ordenar(v, n, decreciente);
```

Es exactamente lo que hacen `qsort` de C y `sort` de C++, y es el primer ejemplo
de un algoritmo genérico: el recorrido y los intercambios se escriben una vez y el
criterio se pasa desde fuera.

**Tablas de funciones.** Un menú puede ser un vector de punteros a función
indexado por la opción, en lugar de un `switch` con una llamada por caso.

**Retrollamadas.** Una biblioteca recibe una función del usuario y la invoca
cuando ocurre algo.

### Alternativas modernas

`typedef` o `using` hacen legible el tipo:

```cpp
using Comparador = bool (*)(int, int);
void ordenar(int v[], int n, Comparador antes);
```

Y las **expresiones lambda** permiten escribir la función en el punto de uso:

```cpp
sort(v, v + n, [](int a, int b) { return a > b; });
```

Un puntero a función solo puede apuntar a una función libre y no lleva estado
asociado; una lambda sí puede capturar variables del entorno. Por eso las
bibliotecas modernas reciben objetos función o lambdas, y no punteros a función.
El tratamiento de estos mecanismos está en \cite{garrido2016met} y en
\cite{stroustrup2013}.
