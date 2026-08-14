# Tipos de datos abstractos en C++: clases

Tema 3 del programa. Diseñar un tipo nuevo separando lo que promete de cómo está
hecho, y qué hay que escribir cuando ese tipo gestiona memoria dinámica.

## Abstracción y diseño de clases

Un **tipo de dato abstracto** es un tipo definido por sus operaciones y no por su
representación. Quien lo usa conoce qué hace cada operación; cómo está hecho por
dentro es privado y puede cambiar.

La separación tiene dos caras:

| Cara | Qué contiene | Quién la ve |
| --- | --- | --- |
| Interfaz | los métodos públicos y lo que prometen | quien usa la clase |
| Implementación | los datos y el cuerpo de los métodos | solo la clase |

```cpp
class Conjunto {
private:
    int *datos_;
    int  n_;
    int  capacidad_;

    int posicion(int x) const;         // detalle interno

public:
    Conjunto();
    Conjunto(const Conjunto &otro);
    ~Conjunto();
    Conjunto & operator=(const Conjunto &otro);

    bool contiene(int x) const;
    bool insertar(int x);
    bool borrar(int x);
    int  cardinal() const;
};
```

Que `posicion` sea privado es deliberado: devuelve un índice del vector interno, y
exponerlo ataría el código de fuera a que la representación sea un vector.

### Atributos y métodos

Los **atributos** guardan el estado y son privados. Los **métodos** son las
operaciones, y solo se hacen públicos los que el problema necesita.

Escribir mecánicamente un consultor y un modificador por cada atributo anula la
encapsulación: si todo se lee y se escribe desde fuera, la clase es un registro
con más líneas. La pregunta no es «qué datos tengo» sino «qué operaciones ofrezco».

### El invariante

Un **invariante de clase** es una propiedad que se cumple en todo objeto válido
entre operaciones. En el `Conjunto` de arriba:

```
0 <= n_ <= capacidad_,  datos_ != nullptr,  los n_ primeros no se repiten
```

El constructor lo establece y cada método lo mantiene. Escribirlo como comentario
en la clase es lo que convierte la corrección de los métodos en algo comprobable
por partes: cada uno puede suponer el invariante al entrar y debe dejarlo cierto
al salir.

### `const` en los métodos

Un método que no modifica el objeto se marca `const`, y **solo esos se pueden
llamar sobre un objeto constante**:

```cpp
int  cardinal() const;      // consulta
bool insertar(int x);       // modifica
```

Olvidar el `const` en un consultor rompe todo el código que recibe el objeto por
referencia constante, que es la forma habitual de pasarlo. Es un error de
compilación, y por eso conviene: el compilador comprueba lo que si no habría que
recordar.

## Clases que gestionan memoria dinámica

Aquí está el contenido propio del tema, y lo que lo separa de las clases del curso
anterior.

### El problema

Si un atributo es un puntero a memoria reservada, el constructor de copia y el
operador de asignación que el compilador genera **copian el puntero, no lo
apuntado**. Se llama copia superficial, y produce dos objetos que comparten el
mismo bloque:

```cpp
Conjunto a;
a.insertar(5);
Conjunto b = a;      // copia superficial: b.datos_ == a.datos_
```

Consecuencias, las tres graves:

1. Modificar `b` modifica `a`.
2. Al destruirse los dos, el bloque se libera dos veces y el montículo se corrompe.
3. Si uno redimensiona, el otro queda con un puntero colgante.

### La regla de los tres

Una clase que gestiona un recurso necesita **destructor, constructor de copia y
operador de asignación**. Si hace falta uno, hacen falta los tres.

#### Constructor y destructor

```cpp
Conjunto::Conjunto()
    : datos_(new int[4]), n_(0), capacidad_(4) {}

Conjunto::~Conjunto() {
    delete[] datos_;
}
```

El destructor se llama solo: al salir del ámbito para un objeto local, al hacer
`delete` para uno dinámico, y al destruirse el objeto que lo contiene. Es lo que
garantiza que la memoria se libere aunque la función termine por un camino
inesperado.

#### Constructor de copia

```cpp
Conjunto::Conjunto(const Conjunto &otro)
    : datos_(new int[otro.capacidad_]),
      n_(otro.n_),
      capacidad_(otro.capacidad_) {
    for (int i = 0; i < n_; i++) datos_[i] = otro.datos_[i];
}
```

Reserva memoria propia y copia el contenido: copia **profunda**. Se invoca al
inicializar un objeto con otro, al pasar por valor y al devolver por valor.

#### Operador de asignación

```cpp
Conjunto & Conjunto::operator=(const Conjunto &otro) {
    if (this != &otro) {                 // 1. autoasignacion
        delete[] datos_;                 // 2. liberar lo propio
        capacidad_ = otro.capacidad_;    // 3. reservar y copiar
        n_ = otro.n_;
        datos_ = new int[capacidad_];
        for (int i = 0; i < n_; i++) datos_[i] = otro.datos_[i];
    }
    return *this;                        // 4. permitir encadenar
}
```

Los cuatro pasos son obligatorios y cada uno arregla un fallo concreto:

| Paso | Si falta |
| --- | --- |
| Comprobar la autoasignación | `a = a` libera los datos y luego los copia de sí mismo, ya liberados |
| Liberar lo propio | fuga de memoria: el bloque anterior se pierde |
| Copia profunda | los dos objetos comparten el bloque |
| Devolver `*this` | `a = b = c` no compila |

La diferencia con el constructor de copia: el constructor trabaja sobre un objeto
que aún no existe, así que no tiene nada que liberar; el operador trabaja sobre uno
ya construido, y por eso empieza liberando.

### Cómo se comprueba

```cpp
void probarCopia() {
    Conjunto a;
    a.insertar(1); a.insertar(2);

    Conjunto b = a;          // constructor de copia
    b.insertar(3);
    assert(a.cardinal() == 2);   // a no debe haber cambiado
    assert(b.cardinal() == 3);

    Conjunto c;
    c = a;                   // asignacion
    c = c;                   // autoasignacion: no debe romper nada
    assert(c.cardinal() == 2);
}
```

Y después, Valgrind. Una clase correcta de este tema termina con cero fugas y cero
errores.

## Sobrecarga de operadores

Dar significado a los operadores del lenguaje para el tipo nuevo. Es lo que hace
que un tipo definido por el programador se use como uno básico.

### Métodos frente a funciones externas

```cpp
class Conjunto {
public:
    bool operator==(const Conjunto &otro) const;
    Conjunto operator+(const Conjunto &otro) const;   // union
    int  operator[](int i) const;
};
```

Se declara **como método** cuando el operando izquierdo es el objeto, y **como
función externa** cuando no lo es:

```cpp
ostream & operator<<(ostream &os, const Conjunto &c) {
    os << "{";
    for (int i = 0; i < c.cardinal(); i++) {
        if (i > 0) os << ", ";
        os << c[i];
    }
    return os << "}";
}
```

Devolver el flujo por referencia es lo que permite encadenar `cout << a << b`.

### `operator[]` en dos versiones

```cpp
int & operator[](int i);              // para objetos no constantes
int   operator[](int i) const;        // para objetos constantes
```

La primera devuelve una referencia, así que `v[0] = 5` funciona. La segunda
devuelve una copia y se aplica a objetos `const`. Las dos hacen falta, y es el
mismo motivo por el que el tema 2 hablaba de devolver por referencia.

### Reglas

| Regla | Motivo |
| --- | --- |
| El operador debe significar lo que significa | `+` que resta compila y hace ilegible el programa |
| No todos se pueden sobrecargar | `.`, `::`, `?:` y `sizeof` no |
| No se puede inventar un operador nuevo | solo redefinir los existentes |
| Al menos un operando debe ser del tipo propio | no se puede cambiar `int + int` |
| Si se define `==`, definir también `!=` | o el uso se vuelve asimétrico |

## Amistad

`friend` da a una función externa acceso a lo privado:

```cpp
class Conjunto {
    friend ostream & operator<<(ostream &, const Conjunto &);
};
```

Rompe la encapsulación a propósito, así que se usa lo mínimo. En el caso del
operador de salida a menudo ni hace falta: si la clase ya ofrece los consultores
necesarios, la función se escribe sin ser amiga, que es lo que hace el ejemplo de
más arriba.

## Compilación separada

Una clase se reparte en dos ficheros:

```cpp
// conjunto.h
#ifndef CONJUNTO_H
#define CONJUNTO_H

class Conjunto {
    // declaraciones
};

#endif
```

```cpp
// conjunto.cpp
#include "conjunto.h"

Conjunto::Conjunto() : datos_(new int[4]), n_(0), capacidad_(4) {}
// resto de definiciones
```

El operador `::` indica a qué clase pertenece cada definición. Y en la cabecera no
se escribe `using namespace std`, porque se lo impone a todo el que la incluya.
El diseño de tipos abstractos y la gestión de recursos en clases están
desarrollados en \cite{garrido2016met} y en \cite{deitel2017}; el detalle del
lenguaje, en \cite{stroustrup2013}.
