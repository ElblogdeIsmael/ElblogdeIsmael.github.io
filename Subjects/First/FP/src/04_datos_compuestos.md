# Registros, vectores y matrices

Tema 4 del programa. Los tipos que agrupan varios valores, y los algoritmos de
búsqueda y ordenación que se construyen sobre ellos.

## Registros

Un registro agrupa datos **de tipos distintos** bajo un nombre. En C++ se declara
con `struct`:

```cpp
struct Alumno {
    string nombre;
    int    edad;
    double nota;
};

Alumno a;
a.nombre = "Ana";
a.edad   = 19;
a.nota   = 8.5;
```

A los campos se accede con el punto. Un registro se puede asignar entero, pasar a
una función y devolver:

```cpp
Alumno leerAlumno() {
    Alumno a;
    cin >> a.nombre >> a.edad >> a.nota;
    return a;
}
```

Esa última propiedad resuelve el problema de devolver varios valores: en vez de
tres parámetros por referencia, se devuelve un registro.

Los registros se anidan, y así se modela la estructura real de los datos:

```cpp
struct Fecha  { int dia, mes, anio; };
struct Persona {
    string nombre;
    Fecha  nacimiento;
};

Persona p;
p.nacimiento.anio = 2005;
```

Un registro se pasa a una función **por referencia constante** salvo que haya que
modificarlo: copiarlo entero cuesta, y con `const` el compilador garantiza que no
se toca.

## Vectores

Un vector guarda varios elementos **del mismo tipo** en posiciones consecutivas.

```cpp
const int MAX = 100;
int v[MAX];

for (int i = 0; i < MAX; i++) {
    v[i] = 0;
}
```

Cuatro hechos que gobiernan todo el uso de vectores en C++:

1. **Los índices van de `0` a `n-1`.** El primero es `v[0]`.
2. **El tamaño es constante y se fija al compilar.** No se puede usar una variable
   leída del teclado como tamaño de un vector estático.
3. **No se comprueban los límites.** `v[MAX]` compila y accede a memoria ajena. El
   programa puede no fallar, y ese es el problema.
4. **No se pueden asignar ni comparar enteros.** `v = w` no copia el vector, y
   `v == w` compara direcciones. Hay que recorrer elemento a elemento.

### Vector y tamaño lógico

Como el tamaño físico se fija al compilar y rara vez se llena, se lleva aparte
cuántos elementos hay de verdad:

```cpp
const int MAX = 100;
int  v[MAX];
int  n = 0;          // tamano logico: cuantos hay usados

// Anadir al final
if (n < MAX) {
    v[n] = x;
    n++;
}
```

El par vector-tamaño viaja siempre junto, y de ahí que las funciones reciban los
dos parámetros. Agruparlos en un registro es la mejora natural, y es lo que el
tema 5 formaliza como clase.

### Vectores y funciones

Un vector **siempre se pasa por referencia**, aunque no se escriba `&`: lo que se
pasa es la dirección del primer elemento. Por eso una función puede modificarlo, y
por eso hay que pasar el tamaño aparte.

```cpp
void imprimir(const int v[], int n);   // const: no lo modifica
void rellenar(int v[], int n);         // sin const: si lo modifica
```

Poner `const` cuando la función no modifica no es un adorno: documenta la
intención y el compilador la comprueba.

### Cadenas

`string` es un vector de caracteres con operaciones propias, y se comporta como un
tipo básico porque la clase redefine los operadores:

```cpp
string s = "Hola";
s += " mundo";           // concatena
cout << s.length();      // 10
cout << s[0];            // 'H'
cout << s.substr(0, 4);  // "Hola"
if (s == "Hola mundo") { /* compara contenido */ }
```

La diferencia con un vector clásico es exactamente esa: `==` compara el contenido
y `=` copia. Es lo que las clases permiten hacer, y el tema 5 lo explica.

## Algoritmos de búsqueda

### Búsqueda lineal

Recorre el vector hasta encontrar el valor:

```cpp
int buscarLineal(const int v[], int n, int x) {
    for (int i = 0; i < n; i++) {
        if (v[i] == x) return i;
    }
    return -1;
}
```

- No exige que el vector esté ordenado.
- Coste: $O(n)$ en el peor caso y en el medio, $O(1)$ en el mejor.

### Búsqueda binaria

Sobre un vector **ordenado**, compara con el elemento central y descarta la mitad:

```cpp
int buscarBinaria(const int v[], int n, int x) {
    int izq = 0, der = n - 1;
    while (izq <= der) {
        int centro = izq + (der - izq) / 2;
        if (v[centro] == x)      return centro;
        else if (v[centro] < x)  izq = centro + 1;
        else                     der = centro - 1;
    }
    return -1;
}
```

- **Precondición: el vector está ordenado.** Sin ella el resultado es incorrecto y
  nada avisa.
- Coste: $O(\log n)$.

Dos detalles del código que no son casuales:

- `izq + (der - izq) / 2` en vez de `(izq + der) / 2`. La segunda forma desborda
  cuando los dos índices son grandes, y es un error que estuvo presente durante
  veinte años en implementaciones muy usadas.
- La condición es `izq <= der`, con igual. Con `<` se pierde el caso en que queda
  un solo elemento por examinar.

La diferencia de coste es la que justifica ordenar: con un millón de elementos, la
lineal examina un millón en el peor caso y la binaria veinte.

| $n$ | Lineal | Binaria |
| ---: | ---: | ---: |
| 100 | 100 | 7 |
| 10 000 | 10 000 | 14 |
| 1 000 000 | 1 000 000 | 20 |

## Algoritmos de ordenación

### Selección

Busca el mínimo del resto y lo coloca en su sitio:

```cpp
void ordenarSeleccion(int v[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int pos = i;
        for (int j = i + 1; j < n; j++) {
            if (v[j] < v[pos]) pos = j;
        }
        swap(v[i], v[pos]);
    }
}
```

Hace siempre $n(n-1)/2$ comparaciones, con independencia de los datos, y como
mucho $n-1$ intercambios. Es la opción cuando mover elementos cuesta mucho.

### Inserción

Coloca cada elemento en su posición dentro de la parte ya ordenada:

```cpp
void ordenarInsercion(int v[], int n) {
    for (int i = 1; i < n; i++) {
        int actual = v[i];
        int j = i - 1;
        while (j >= 0 && v[j] > actual) {
            v[j + 1] = v[j];
            j--;
        }
        v[j + 1] = actual;
    }
}
```

Su ventaja está en el mejor caso: con el vector ya ordenado hace $n-1$
comparaciones y ningún desplazamiento, es decir $O(n)$. Por eso es la mejor de las
tres para vectores casi ordenados, y por eso las bibliotecas la usan para los
tramos pequeños dentro de algoritmos más elaborados.

### Burbuja

Intercambia elementos adyacentes desordenados en pasadas sucesivas:

```cpp
void ordenarBurbuja(int v[], int n) {
    bool cambio = true;
    for (int i = 0; i < n - 1 && cambio; i++) {
        cambio = false;
        for (int j = 0; j < n - 1 - i; j++) {
            if (v[j] > v[j + 1]) {
                swap(v[j], v[j + 1]);
                cambio = true;
            }
        }
    }
}
```

La bandera `cambio` es lo que la hace terminar antes si el vector ya está
ordenado; sin ella, la burbuja no tiene ninguna ventaja sobre las otras dos.

### Comparación

| Algoritmo | Mejor | Medio | Peor | Estable | Intercambios |
| --- | --- | --- | --- | :-: | --- |
| Selección | $O(n^2)$ | $O(n^2)$ | $O(n^2)$ | no | $O(n)$ |
| Inserción | $O(n)$ | $O(n^2)$ | $O(n^2)$ | sí | $O(n^2)$ |
| Burbuja | $O(n)$ | $O(n^2)$ | $O(n^2)$ | sí | $O(n^2)$ |

**Estable** significa que dos elementos con la misma clave conservan su orden
relativo. Importa cuando se ordena por un campo y ya estaba ordenado por otro:
ordenar por apellido un listado ordenado por nombre deja, si el algoritmo es
estable, los apellidos iguales ordenados por nombre.

Los tres son cuadráticos, y por eso no se usan en la práctica con vectores
grandes: `sort` de la biblioteca estándar es $O(n \log n)$. Se estudian porque
son la base sobre la que se construyen los buenos, y porque su análisis es el
primer contacto con el coste de un algoritmo.

## Matrices

Un vector de vectores. En C++ los elementos se guardan **por filas**:

```cpp
const int F = 3, C = 4;
int m[F][C];

for (int i = 0; i < F; i++) {
    for (int j = 0; j < C; j++) {
        m[i][j] = i * C + j;
    }
}
```

La dirección de `m[i][j]` es $base + (i \cdot C + j) \cdot t$, con $t$ el tamaño
del elemento. De ahí sale la regla que en cursos posteriores se convierte en una
cuestión de rendimiento: **recorrer por filas es más rápido que por columnas**,
porque los elementos consecutivos de una fila están juntos en memoria.

Al pasar una matriz a una función hay que indicar todas las dimensiones salvo la
primera, porque el compilador necesita el número de columnas para calcular la
dirección:

```cpp
void imprimir(const int m[][C], int filas);   // C debe ser constante conocida
```

Esa limitación es lo que hace incómodas las matrices estáticas, y la razón de que
en la práctica se usen otras representaciones.

### Operaciones habituales

```cpp
// Suma de matrices
for (int i = 0; i < F; i++)
    for (int j = 0; j < C; j++)
        s[i][j] = a[i][j] + b[i][j];

// Transpuesta
for (int i = 0; i < F; i++)
    for (int j = 0; j < C; j++)
        t[j][i] = m[i][j];

// Producto: A es F x K, B es K x C
for (int i = 0; i < F; i++)
    for (int j = 0; j < C; j++) {
        p[i][j] = 0;
        for (int k = 0; k < K; k++)
            p[i][j] += a[i][k] * b[k][j];
    }
```

El producto es el primer algoritmo cúbico del curso: con matrices de 1000×1000
son mil millones de multiplicaciones. Es un buen sitio para ver que la
complejidad no es una abstracción.

## Vectores de registros

La combinación que aparece en casi todos los ejercicios:

```cpp
const int MAX = 100;
Alumno clase[MAX];
int n = 0;

// Media de la clase
double suma = 0.0;
for (int i = 0; i < n; i++) suma += clase[i].nota;
double media = (n > 0) ? suma / n : 0.0;

// Ordenar por nota, de mayor a menor
for (int i = 0; i < n - 1; i++) {
    int pos = i;
    for (int j = i + 1; j < n; j++)
        if (clase[j].nota > clase[pos].nota) pos = j;
    swap(clase[i], clase[pos]);
}
```

La guarda `(n > 0)` antes de dividir no es paranoia: un vector vacío es un caso de
prueba obligatorio, y sin ella el programa divide por cero. Los algoritmos de este
tema, con su análisis, están desarrollados en \cite{garrido2005} y en
\cite{savitch2017}.
