# Clases

Tema 5 del programa. El paso de la programación estructurada a la orientada a
objetos: agrupar los datos con las operaciones que los manipulan, y ocultar cómo
están representados.

## De registro a clase

Un registro agrupa datos; una **clase** agrupa datos y las funciones que operan
sobre ellos, y decide qué es visible desde fuera.

El problema que resuelve se ve con el vector del tema 4. Un vector y su tamaño
lógico viajan siempre juntos, y nada obliga a mantenerlos coherentes: cualquier
parte del programa puede escribir `n = 500` y romper el invariante. Con una clase,
`n` es privado y solo las operaciones de la clase lo tocan.

```cpp
class Fecha {
private:
    int dia_, mes_, anio_;

public:
    Fecha(int d, int m, int a);
    int  dia()  const;
    int  mes()  const;
    int  anio() const;
    void avanzarDia();
    bool esBisiesto() const;
};
```

Las convenciones que la asignatura usa: el guion bajo final en los datos privados
para distinguirlos de los parámetros, y el orden privado antes que público.

## Encapsulación

Los **datos miembro** guardan el estado; los **métodos** son las operaciones. Un
método accede a los datos del objeto sobre el que se invoca sin recibirlos como
parámetros.

```cpp
Fecha hoy(14, 8, 2026);
hoy.avanzarDia();
cout << hoy.dia();
```

Dentro de un método, `dia_` se refiere al dato del objeto que recibió la llamada.
El puntero implícito `this` apunta a ese objeto, y solo hace falta escribirlo
cuando un parámetro oculta al dato miembro.

## Ocultación de información

| Ámbito | Quién accede |
| --- | --- |
| `private` | solo los métodos de la clase |
| `public` | cualquiera |
| `protected` | la clase y sus derivadas |

La regla: **los datos privados, los métodos públicos que hagan falta**. Lo que
gana:

- **El invariante se mantiene.** Si `mes_` solo se modifica por métodos que
  comprueban el rango, no puede valer 13.
- **La representación se puede cambiar.** Guardar la fecha como tres enteros o
  como días desde una referencia es una decisión interna; el código que usa la
  clase no cambia.
- **La superficie de error se reduce.** Un dato incorrecto solo puede haberlo
  escrito un método de la clase.

Los métodos que dan acceso a un dato se llaman **consultores** —o *getters*— y los
que lo modifican, **modificadores**. Escribir mecánicamente un par por cada dato
privado anula la encapsulación: si todo se puede leer y escribir desde fuera, la
clase es un registro con más líneas. Se ofrecen las operaciones que el problema
necesita, no accesos a los campos.

## Constructores

Un constructor inicializa el objeto. Tiene el nombre de la clase, no devuelve nada
y se ejecuta al crear el objeto.

```cpp
class Fecha {
private:
    int dia_, mes_, anio_;

public:
    Fecha() : dia_(1), mes_(1), anio_(2000) {}          // por defecto

    Fecha(int d, int m, int a)                          // con parametros
        : dia_(d), mes_(m), anio_(a) {}
};
```

La lista después de los dos puntos es la **lista de inicialización**, y es la
forma correcta de inicializar. La alternativa —asignar en el cuerpo— primero
construye los miembros y después les asigna, así que hace el trabajo dos veces; y
con miembros constantes o referencias no funciona en absoluto.

Si no se escribe ningún constructor, el compilador genera uno por defecto que **no
inicializa los tipos básicos**. Un objeto recién creado tendría enteros con valor
indeterminado, que es el error del tema 1 otra vez.

Y en cuanto se escribe un constructor con parámetros, el compilador deja de
generar el de por defecto. Si hace falta, hay que escribirlo.

### Validar en el constructor

```cpp
Fecha::Fecha(int d, int m, int a) {
    if (m < 1 || m > 12) m = 1;
    if (d < 1 || d > diasDelMes(m, a)) d = 1;
    dia_ = d; mes_ = m; anio_ = a;
}
```

Comprobar aquí es lo que garantiza que **ningún objeto de la clase existe en un
estado inválido**. Es el punto donde se establece el invariante que los demás
métodos pueden dar por cierto.

## Copias de objetos

### Constructor de copia y asignación

```cpp
Fecha a(14, 8, 2026);
Fecha b = a;      // constructor de copia
Fecha c;
c = a;            // operador de asignacion
```

El compilador genera los dos, y copian miembro a miembro. Con datos básicos eso
basta.

Deja de bastar cuando la clase gestiona un recurso: si un miembro fuera un
puntero a memoria reservada, la copia por omisión duplicaría el puntero y los dos
objetos apuntarían al mismo sitio. Se llama **copia superficial**, y sus
consecuencias son que modificar uno modifica el otro y que al destruirse ambos se
libera dos veces la misma memoria.

En esa situación hay que escribir constructor de copia, operador de asignación y
destructor. Es la regla de los tres, y aparece en cuanto la clase deja de
contener solo tipos básicos.

### Paso a funciones

Un objeto se pasa **por referencia constante**, salvo que la función deba
modificarlo:

```cpp
void mostrar(const Fecha &f);      // no copia, no modifica
void avanzar(Fecha &f);            // modifica
```

Pasarlo por valor invoca el constructor de copia, y con objetos grandes eso cuesta.

## Datos y métodos constantes

Un método que no modifica el objeto se marca `const`:

```cpp
int  dia()   const { return dia_; }
void avanzarDia();                  // sin const: si modifica
```

El compilador comprueba que un método `const` no modifica ningún dato, y **solo
los métodos `const` se pueden invocar sobre un objeto constante**. De ahí que
olvidar el `const` en un consultor rompa el código que recibe el objeto por
referencia constante:

```cpp
void mostrar(const Fecha &f) {
    cout << f.dia();     // error de compilacion si dia() no es const
}
```

Marcar `const` todo lo que no modifica es una disciplina que se paga sola: el
compilador convierte en error de compilación lo que si no sería un error de
lógica.

Un dato miembro `const` se inicializa en la lista de inicialización y no se puede
modificar después. Y un miembro `static` es compartido por todos los objetos de la
clase, no por cada uno: sirve para contadores de instancias y para constantes de
la clase.

## Sobrecarga de operadores

Una clase puede dar significado a los operadores del lenguaje:

```cpp
class Fecha {
    // ...
public:
    bool operator==(const Fecha &otra) const;
    bool operator<(const Fecha &otra) const;
};

bool Fecha::operator<(const Fecha &otra) const {
    if (anio_ != otra.anio_) return anio_ < otra.anio_;
    if (mes_  != otra.mes_)  return mes_  < otra.mes_;
    return dia_ < otra.dia_;
}
```

Es lo que hace que `string` se comporte como un tipo básico: `s1 == s2` compara el
contenido porque la clase define `operator==`.

La salida se sobrecarga con una función externa, porque el operando izquierdo es
el flujo y no el objeto:

```cpp
ostream & operator<<(ostream &os, const Fecha &f) {
    os << f.dia() << "/" << f.mes() << "/" << f.anio();
    return os;
}
```

Devolver el flujo por referencia es lo que permite encadenar: `cout << a << b`.

La regla al sobrecargar: **el operador debe significar lo que significa**.
Redefinir `+` como una resta compila y hace el programa ilegible.

## Colecciones: secuencia y tabla

La aplicación del tema. Una clase que encapsula el vector y su tamaño lógico,
resolviendo el problema con el que empezó el capítulo:

```cpp
class Secuencia {
private:
    static const int MAX = 100;
    int datos_[MAX];
    int n_;                       // invariante: 0 <= n_ <= MAX

public:
    Secuencia() : n_(0) {}

    int  tamanio() const { return n_; }
    bool vacia()   const { return n_ == 0; }
    bool llena()   const { return n_ == MAX; }

    bool anadir(int x) {
        if (llena()) return false;
        datos_[n_] = x;
        n_++;
        return true;
    }

    int elemento(int i) const {   // precondicion: 0 <= i < n_
        return datos_[i];
    }

    bool eliminar(int i) {
        if (i < 0 || i >= n_) return false;
        for (int j = i; j < n_ - 1; j++) datos_[j] = datos_[j + 1];
        n_--;
        return true;
    }
};
```

Lo que la clase garantiza y el vector suelto no:

- `n_` nunca supera `MAX`, porque `anadir` lo comprueba.
- `n_` nunca es negativo, porque `eliminar` valida el índice.
- Nadie de fuera puede escribir en `datos_` saltándose las comprobaciones.

La **tabla** es la otra colección del programa: guarda pares clave-valor y busca
por clave.

```cpp
struct Par { string clave; int valor; };

class Tabla {
private:
    static const int MAX = 100;
    Par datos_[MAX];
    int n_;

    int posicion(const string &c) const {   // privado: es un detalle interno
        for (int i = 0; i < n_; i++)
            if (datos_[i].clave == c) return i;
        return -1;
    }

public:
    Tabla() : n_(0) {}

    bool contiene(const string &c) const { return posicion(c) >= 0; }

    bool insertar(const string &c, int v) {
        int p = posicion(c);
        if (p >= 0) { datos_[p].valor = v; return true; }   // ya estaba
        if (n_ == MAX) return false;
        datos_[n_].clave = c;
        datos_[n_].valor = v;
        n_++;
        return true;
    }
};
```

`posicion` es privado a propósito: devuelve un índice del vector interno, que es
justo lo que no se quiere exponer. Si se hiciera público, el código de fuera
empezaría a depender de que la tabla es un vector, y cambiar la representación
—por ejemplo a una tabla *hash*— dejaría de ser posible.

Esa es la idea central del tema: **la interfaz es lo que se promete, y la
representación es lo que se puede cambiar**. El desarrollo de las clases en C++
está en \cite{lafore2005} y en \cite{garrido2005}, y las colecciones de la
biblioteca estándar en \cite{garrido2016stl}.
