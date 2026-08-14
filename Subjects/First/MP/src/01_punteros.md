# Punteros y memoria dinámica

Tema 1 del programa. El tipo puntero, su relación con los vectores y las cadenas,
y la reserva de memoria en tiempo de ejecución.

## El tipo de dato puntero

Un puntero guarda una **dirección de memoria**. Su tipo indica qué hay en esa
dirección, y eso es lo que permite al compilador saber cuántos bytes leer y cómo
interpretarlos.

```cpp
int  x = 42;
int *p = &x;       // p apunta a x

cout << x;         // 42, el valor
cout << p;         // 0x7ffd..., la direccion
cout << *p;        // 42, el valor apuntado
*p = 100;
cout << x;         // 100: se modifico x a traves de p
```

Dos operadores, y conviene fijarlos desde el principio:

| Operador | Nombre | Qué hace |
| --- | --- | --- |
| `&` | dirección de | devuelve la dirección de un objeto |
| `*` | indirección | accede al objeto apuntado |

El asterisco significa cosas distintas según dónde aparezca: en `int *p` forma
parte de la declaración del tipo; en `*p = 100` es el operador de indirección. Es
la fuente principal de confusión del tema.

### `nullptr` y punteros colgantes

```cpp
int *p = nullptr;      // no apunta a nada
if (p != nullptr) *p = 5;
```

Tres estados posibles de un puntero, y solo el primero es utilizable:

| Estado | Qué contiene | Desreferenciarlo |
| --- | --- | --- |
| Válido | la dirección de un objeto vivo | correcto |
| Nulo | `nullptr` | error detectable, suele abortar |
| Indeterminado o colgante | basura, o la dirección de algo que ya no existe | **comportamiento indefinido** |

El tercer caso es el peligroso porque **puede funcionar**. Un puntero colgante
apunta a memoria que el programa aún no ha reutilizado, así que el acceso da el
valor antiguo durante las pruebas y otro distinto en la corrección.

```cpp
int *malo() {
    int local = 5;
    return &local;      // local desaparece al volver
}
```

Esa función devuelve la dirección de una variable del marco de pila, que deja de
existir. `-Wall` avisa de este caso concreto.

Se declara `nullptr` y no `NULL` ni `0`: `nullptr` tiene tipo propio y no se
confunde con un entero al elegir entre funciones sobrecargadas.

### Aritmética de punteros

Sumar 1 a un puntero avanza **un elemento**, no un byte:

```cpp
int v[5] = {10, 20, 30, 40, 50};
int *p = v;

cout << *p;         // 10
cout << *(p + 1);   // 20
cout << *(p + 3);   // 40
```

El compilador multiplica por el tamaño del tipo, así que la aritmética funciona
igual con `char` que con `double`. Restar dos punteros al mismo vector da el
número de elementos entre ellos.

## Vectores, matrices, cadenas y punteros

### Un vector es un puntero a su primer elemento

El nombre de un vector se convierte en la dirección de `v[0]` en casi cualquier
contexto. De ahí que estas dos expresiones sean equivalentes:

```cpp
v[i]        // notacion de indice
*(v + i)    // aritmetica de punteros
```

Y de ahí también dos consecuencias que explican lo que en la asignatura anterior
había que aceptar sin justificación:

- **Un vector se pasa a una función por referencia sin escribir `&`**: lo que se
  copia es la dirección, no los elementos.
- **`sizeof` de un parámetro vector no da el tamaño del vector**, sino el de un
  puntero, porque dentro de la función eso es lo que hay. Por eso el tamaño se
  pasa aparte.

```cpp
void f(int v[]) {
    cout << sizeof(v);      // 8, el tamano de un puntero
}
```

### Cadenas al estilo C

Un vector de `char` terminado en el carácter nulo `'\0'`:

```cpp
char s[] = "Hola";     // 5 caracteres: 'H','o','l','a','\0'
cout << strlen(s);     // 4: no cuenta el terminador
```

El terminador ocupa espacio y no se cuenta en la longitud, y esa asimetría es la
causa de la mayoría de los errores con cadenas C. Reservar `strlen(s)` bytes para
copiar `s` deja fuera el `'\0'`, y la copia se lee más allá de su final.

`string` de C++ evita todo esto: gestiona su memoria, conoce su longitud y se
copia y compara con los operadores. **Se usa `string` salvo que haya una razón
concreta para no hacerlo**; las cadenas C se estudian porque están en muchas
interfaces heredadas.

### Matrices

Una matriz estática es un bloque contiguo recorrido por filas:

```cpp
int m[3][4];
// m[i][j] esta en la posicion i*4 + j
```

Con memoria dinámica hay dos representaciones, y la diferencia importa:

```cpp
// (a) vector de punteros a filas: las filas pueden estar dispersas
int **m = new int*[f];
for (int i = 0; i < f; i++) m[i] = new int[c];

// (b) un solo bloque: contiguo, se indexa a mano
int *m = new int[f * c];
// elemento (i,j): m[i * c + j]
```

La primera permite `m[i][j]` y hace dos accesos a memoria por elemento. La segunda
es contigua, más rápida al recorrer y se libera con un solo `delete[]`.

## Memoria dinámica

Las variables locales viven en la **pila** y su tamaño se fija al compilar. Cuando
el tamaño depende de datos leídos en ejecución, hay que reservar en el
**montículo**.

```cpp
int n;
cin >> n;

int *v = new int[n];       // reserva
for (int i = 0; i < n; i++) v[i] = 0;
delete[] v;                // libera
v = nullptr;
```

| Operación | Un objeto | Un vector |
| --- | --- | --- |
| Reservar | `new int` | `new int[n]` |
| Liberar | `delete p` | `delete[] p` |

**Emparejar `new` con `delete` y `new[]` con `delete[]`** no es una convención de
estilo: mezclarlos es comportamiento indefinido. Liberar con `delete` lo reservado
con `new[]` no llama a los destructores de los elementos y puede corromper el
gestor de memoria.

Poner el puntero a `nullptr` después de liberar convierte un uso posterior en un
fallo inmediato en vez de en un acceso a memoria liberada.

### Pila y montículo

| | Pila | Montículo |
| --- | --- | --- |
| Quién gestiona | el compilador | el programador |
| Tamaño | fijado al compilar | decidido en ejecución |
| Vida | hasta que el bloque termina | hasta el `delete` |
| Velocidad | máxima | menor |
| Capacidad | megabytes | la memoria disponible |
| Error típico | desbordamiento por recursión | fugas y liberaciones dobles |

### Los cuatro errores

| Error | Qué ocurre |
| --- | --- |
| Fuga de memoria | se reserva y no se libera; el consumo crece sin parar |
| Liberación doble | dos `delete` sobre el mismo puntero: corrompe el montículo |
| Uso tras liberar | acceso por un puntero ya liberado |
| Desbordamiento | escribir fuera del bloque reservado |

Ninguno produce un error de compilación, y tres de los cuatro pueden no fallar en
las pruebas. La herramienta que los encuentra es Valgrind:

```bash
g++ -Wall -g -o prog prog.cpp
valgrind --leak-check=full ./prog
```

Un programa correcto en esta asignatura termina con `All heap blocks were freed`
y `ERROR SUMMARY: 0 errors`.

La fuga en un bucle es el caso que enseña por qué importa:

```cpp
for (int i = 0; i < 1000000; i++) {
    int *p = new int[1000];
    // sin delete[]
}
```

Cada vuelta pierde 4 KB. Al millón de vueltas, 4 GB, y el programa muere sin
haber hecho nada incorrecto a la vista.

## Estructuras de datos simples

Con punteros y memoria dinámica se construyen estructuras cuyo tamaño no se
conoce de antemano.

### Vector dinámico

```cpp
class VectorDinamico {
private:
    int *datos_;
    int  n_;          // elementos usados
    int  capacidad_;

    void redimensionar(int nuevaCapacidad) {
        int *nuevo = new int[nuevaCapacidad];
        for (int i = 0; i < n_; i++) nuevo[i] = datos_[i];
        delete[] datos_;
        datos_ = nuevo;
        capacidad_ = nuevaCapacidad;
    }

public:
    VectorDinamico() : datos_(new int[4]), n_(0), capacidad_(4) {}
    ~VectorDinamico() { delete[] datos_; }

    void anadir(int x) {
        if (n_ == capacidad_) redimensionar(capacidad_ * 2);
        datos_[n_++] = x;
    }
};
```

**Duplicar la capacidad y no incrementarla en uno** es lo que hace que añadir $n$
elementos cueste $O(n)$ en total en vez de $O(n^2)$. Cada elemento se copia como
mucho $\log n$ veces, y la suma de las copias es lineal.

Es, en esencia, cómo funciona `vector` de la biblioteca estándar.

### Lista enlazada

```cpp
struct Nodo {
    int   dato;
    Nodo *siguiente;
};

class Lista {
private:
    Nodo *cabeza_;

public:
    Lista() : cabeza_(nullptr) {}

    ~Lista() {
        while (cabeza_ != nullptr) {
            Nodo *aux = cabeza_;
            cabeza_ = cabeza_->siguiente;
            delete aux;
        }
    }

    void insertarInicio(int x) {
        Nodo *nuevo = new Nodo{x, cabeza_};
        cabeza_ = nuevo;
    }
};
```

El destructor guarda el siguiente **antes** de liberar el nodo actual. Al revés
—liberar y luego leer `cabeza_->siguiente`— es un uso tras liberar, y suele
funcionar durante las pruebas.

| | Vector | Lista enlazada |
| --- | --- | --- |
| Acceso por posición | $O(1)$ | $O(n)$ |
| Insertar al principio | $O(n)$ | $O(1)$ |
| Insertar al final | $O(1)$ amortizado | $O(1)$ con puntero al final |
| Memoria por elemento | el dato | el dato más un puntero |
| Localidad | contigua, aprovecha la caché | dispersa |

La última fila es la que decide en la práctica: la lista gana en la teoría del
coste y pierde en la máquina real, porque cada salto entre nodos es un posible
fallo de caché.

### Otras estructuras del tema

- **Pila**: se inserta y se extrae por el mismo extremo. Con lista, insertar y
  borrar al principio, las dos operaciones en $O(1)$.
- **Cola**: se inserta por un extremo y se extrae por el otro. Con lista, hace
  falta un puntero al último para que las dos sean $O(1)$.
- **Lista doblemente enlazada**: cada nodo apunta al anterior y al siguiente, lo
  que permite recorrer en los dos sentidos y borrar un nodo conocido en $O(1)$.

El desarrollo completo de punteros, memoria dinámica y estas estructuras está en
\cite{garrido2016met} y en \cite{deitel2017}.
