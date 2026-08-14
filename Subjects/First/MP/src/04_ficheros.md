# Gestión de entrada/salida. Ficheros

Tema 4 del programa. Los flujos de C++, las operaciones comunes a todos ellos, y
los tres destinos que pueden tener: la consola, una cadena y un fichero.

## Flujos de entrada/salida

Un **flujo** es una secuencia de bytes con un origen o un destino. C++ los
organiza en una jerarquía de clases, y esa es la razón de que la misma sintaxis
sirva para la consola, para un fichero y para una cadena.

| Clase | Definida en | Para qué |
| --- | --- | --- |
| `istream` | `<iostream>` | entrada genérica |
| `ostream` | `<iostream>` | salida genérica |
| `ifstream` | `<fstream>` | lectura de fichero |
| `ofstream` | `<fstream>` | escritura en fichero |
| `fstream` | `<fstream>` | lectura y escritura |
| `istringstream` | `<sstream>` | lectura desde una cadena |
| `ostringstream` | `<sstream>` | escritura sobre una cadena |

Los objetos predefinidos:

| Objeto | Qué es | Almacenamiento intermedio |
| --- | --- | --- |
| `cin` | entrada estándar | sí |
| `cout` | salida estándar | sí |
| `cerr` | salida de error | no |
| `clog` | registro | sí |

`cerr` no usa búfer, así que sus mensajes salen inmediatamente aunque el programa
aborte después. Es la razón por la que los errores van ahí y no a `cout`: la
salida de `cout` puede perderse en el búfer si el programa termina de forma
anómala.

Y hay otra razón, más práctica: `cout` y `cerr` son flujos distintos, así que al
redirigir la salida a un fichero los errores siguen apareciendo en la pantalla.

### La consecuencia de la jerarquía

Una función que recibe `ostream &` funciona con la consola, con un fichero y con
una cadena sin cambiar una línea:

```cpp
void informe(ostream &os, const Datos &d) {
    os << "Total: " << d.total() << endl;
}

informe(cout, d);                 // a la consola
ofstream f("salida.txt");
informe(f, d);                    // a un fichero
ostringstream s;
informe(s, d);                    // a una cadena
```

Es el polimorfismo de la biblioteca aplicado a algo cotidiano, y es la razón por
la que **una función que escribe nunca debe usar `cout` directamente**: recibe el
flujo y así se puede probar redirigiéndola a una cadena.

## Operaciones básicas con flujos

### Operadores de inserción y extracción

```cpp
os << valor;      // insercion: escribe
is >> variable;   // extraccion: lee
```

Devuelven el flujo, lo que permite encadenar, y **se convierten a `bool` según el
estado**, que es lo que hace funcionar el idioma de lectura de más abajo.

`>>` salta los espacios en blanco iniciales y se detiene en el primer separador,
así que no lee una línea con espacios.

### Lectura de líneas

```cpp
string linea;
while (getline(is, linea)) {
    // procesar linea
}
```

Ese bucle es el patrón estándar de lectura, y funciona porque `getline` devuelve
el flujo y el flujo se evalúa como falso cuando falla.

El problema clásico de mezclar los dos operadores:

```cpp
int n;
cin >> n;              // deja el salto de linea en el flujo
string nombre;
getline(cin, nombre);  // lee una cadena vacia
```

Se corrige descartando lo que queda de la línea:

```cpp
cin >> n;
cin.ignore(numeric_limits<streamsize>::max(), '\n');
getline(cin, nombre);
```

### Estado del flujo

| Bandera | Consulta | Significado |
| --- | --- | --- |
| `good` | `is.good()` | todo correcto |
| `eof` | `is.eof()` | se alcanzó el final |
| `fail` | `is.fail()` | la última operación falló, formato incorrecto |
| `bad` | `is.bad()` | error irrecuperable |

Una vez que un flujo entra en estado de error, **las operaciones siguientes no
hacen nada**. Se limpia con `is.clear()`, y suele hacer falta descartar además lo
que quedaba en el flujo:

```cpp
int n;
while (!(cin >> n)) {
    cin.clear();
    cin.ignore(numeric_limits<streamsize>::max(), '\n');
    cerr << "Numero no valido, repita: ";
}
```

### El error de leer con `eof`

```cpp
while (!f.eof()) {          // incorrecto
    f >> x;
    procesar(x);
}
```

`eof()` se activa **después** de intentar leer más allá del final, no antes. Con
ese bucle, la última lectura falla, `x` conserva el valor anterior y se procesa
**dos veces el último elemento**. Es el error más frecuente del tema, y no falla:
da un resultado incorrecto.

La forma correcta usa el resultado de la propia lectura como condición:

```cpp
while (f >> x) {
    procesar(x);
}
```

### Formato

```cpp
#include <iomanip>

cout << fixed << setprecision(2) << 3.14159;   // 3.14
cout << setw(10) << left  << "Nombre";
cout << setw(8)  << right << 42;
cout << setfill('0') << setw(3) << 7;          // 007
```

`setw` afecta **solo a la siguiente inserción**; los demás manipuladores son
persistentes hasta que se cambien. Es la asimetría que produce tablas
desalineadas.

## Flujos asociados a cadenas

Un `stringstream` trata una cadena como un flujo, y resuelve dos problemas
habituales.

### Convertir y trocear

```cpp
#include <sstream>

// De cadena a numero
string s = "42";
int n;
istringstream(s) >> n;

// Trocear una linea por espacios
istringstream iss("uno dos tres");
string palabra;
while (iss >> palabra) {
    cout << palabra << endl;
}

// Trocear por un separador concreto
istringstream campos("Ana;19;8.5");
string nombre, edad, nota;
getline(campos, nombre, ';');
getline(campos, edad,   ';');
getline(campos, nota,   ';');
```

El tercer parámetro de `getline` es el delimitador, y es lo que permite leer un
fichero de campos separados sin escribir un analizador a mano.

### Construir una cadena

```cpp
ostringstream oss;
oss << "Alumno " << nombre << " con nota " << fixed << setprecision(2) << nota;
string mensaje = oss.str();
```

Da acceso a todo el formato de los flujos para producir una cadena, que es lo que
las funciones de conversión sueltas no ofrecen.

## Flujos asociados a ficheros

### Abrir y cerrar

```cpp
#include <fstream>

ifstream entrada("datos.txt");
if (!entrada) {
    cerr << "No se pudo abrir datos.txt" << endl;
    return 1;
}
// ...
entrada.close();
```

**Comprobar que se abrió** es obligatorio: un fichero que no existe, o sin
permisos, deja el flujo en estado de error y las lecturas devuelven basura sin
avisar de nada.

El destructor cierra el fichero, así que `close` explícito solo hace falta para
cerrarlo antes de que el objeto salga del ámbito. Que el destructor libere el
recurso es el mismo principio que el destructor del tema 3.

### Modos de apertura

| Modo | Efecto |
| --- | --- |
| `ios::in` | lectura |
| `ios::out` | escritura; **trunca** el fichero |
| `ios::app` | escritura al final, sin truncar |
| `ios::binary` | modo binario |
| `ios::ate` | se posiciona al final tras abrir |

```cpp
ofstream f("registro.log", ios::app);   // anade, no borra
```

Abrir para escritura sin `ios::app` **borra el contenido**. Es el error que hace
perder un fichero de datos por escribir el modo equivocado.

### Ficheros de texto

```cpp
// Escribir
ofstream salida("alumnos.txt");
for (int i = 0; i < n; i++) {
    salida << v[i].nombre << ";" << v[i].edad << ";" << v[i].nota << endl;
}
salida.close();

// Leer
ifstream entrada("alumnos.txt");
string linea;
while (getline(entrada, linea)) {
    istringstream campos(linea);
    string nombre, edad, nota;
    getline(campos, nombre, ';');
    getline(campos, edad,   ';');
    getline(campos, nota,   ';');
    // convertir y guardar
}
```

Leer línea a línea y trocear con `istringstream` es más robusto que leer campo a
campo del fichero: una línea mal formada no descoloca el resto del proceso.

### Ficheros binarios

Se escribe la representación interna, sin convertir a texto:

```cpp
struct Registro { int id; double valor; };

// Escribir
ofstream f("datos.bin", ios::binary);
Registro r = {1, 3.5};
f.write(reinterpret_cast<const char *>(&r), sizeof(r));

// Leer
ifstream g("datos.bin", ios::binary);
Registro leido;
g.read(reinterpret_cast<char *>(&leido), sizeof(leido));
```

| | Texto | Binario |
| --- | --- | --- |
| Legible | sí | no |
| Tamaño | mayor | menor |
| Velocidad | menor, hay conversión | mayor |
| Acceso directo | difícil, líneas de longitud variable | inmediato si los registros son de tamaño fijo |
| Portable entre máquinas | sí | **no** |

La última fila es la limitación seria: un fichero binario depende del tamaño de
los tipos, del relleno de la estructura y del orden de los bytes. Un fichero
escrito en una máquina puede no leerse en otra. Y **no se puede escribir así una
clase con punteros**: lo que se guardaría son direcciones, que no significan nada
en la siguiente ejecución.

### Acceso directo

Con registros de tamaño fijo se salta a cualquiera sin leer los anteriores:

```cpp
f.seekg(i * sizeof(Registro), ios::beg);   // posicionar para leer
f.read(reinterpret_cast<char *>(&r), sizeof(r));
```

| Función | Para qué |
| --- | --- |
| `seekg`, `tellg` | posición de lectura |
| `seekp`, `tellp` | posición de escritura |
| `ios::beg`, `ios::cur`, `ios::end` | origen del desplazamiento |

Es lo que permite modificar el registro $i$ de un fichero de un millón sin tocar
los demás, y es la razón práctica de usar formato binario. La gestión de flujos y
ficheros está desarrollada en \cite{garrido2016met}, \cite{deitel2017} y
\cite{gaddis2019}.
