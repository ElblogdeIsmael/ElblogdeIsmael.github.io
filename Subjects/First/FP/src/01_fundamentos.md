# Programación en C++: fundamentos

Tema 1 del programa. Qué es un algoritmo y qué lo distingue de un programa, cómo
se representa la información dentro de la máquina, y los tipos, operadores y
expresiones con los que se empieza a escribir en C++.

## El ordenador, algoritmos y programas

Un **algoritmo** es una secuencia finita de pasos que resuelve un problema. Para
serlo tiene que cumplir cinco propiedades:

| Propiedad | Qué exige |
| --- | --- |
| Finitud | termina tras un número finito de pasos |
| Precisión | cada paso está definido sin ambigüedad |
| Entrada | recibe cero o más datos |
| Salida | produce al menos un resultado |
| Efectividad | cada paso es realizable en tiempo finito |

Un **programa** es un algoritmo escrito en un lenguaje que la máquina puede
ejecutar. La distinción importa porque el algoritmo se puede razonar, comparar y
demostrar correcto con independencia del lenguaje; el programa añade los detalles
que un lenguaje concreto exige.

### Del código fuente al ejecutable

C++ es un lenguaje compilado, y el paso de un fichero de texto a un programa
ejecutable tiene cuatro etapas:

| Etapa | Herramienta | Entrada | Salida |
| --- | --- | --- | --- |
| Preprocesado | `cpp` | `.cpp` | texto expandido |
| Compilación | `g++` | texto expandido | ensamblador |
| Ensamblado | `as` | ensamblador | objeto `.o` |
| Enlazado | `ld` | objetos y bibliotecas | ejecutable |

```bash
g++ -Wall -std=c++17 -o programa programa.cpp
./programa
```

La opción `-Wall` no es opcional en esta asignatura: activa los avisos que
detectan variables sin inicializar, comparaciones sospechosas y valores de
retorno olvidados. Un programa que compila sin avisos no es necesariamente
correcto, pero uno que compila con avisos casi nunca lo es.

La alternativa a compilar es **interpretar**, que traduce y ejecuta a la vez.
Compilar produce programas más rápidos y separa el momento de encontrar los
errores del momento de ejecutar; interpretar acorta el ciclo de prueba. C++ está
del lado compilado, y por eso el compilador detecta antes de ejecutar muchos
errores que un lenguaje interpretado solo descubre al llegar a la línea.

### Paradigmas

| Paradigma | Idea central | Ejemplos |
| --- | --- | --- |
| Imperativo | secuencia de instrucciones que cambian el estado | C, Pascal |
| Estructurado | imperativo con solo tres estructuras de control | el de esta asignatura |
| Orientado a objetos | datos y operaciones agrupados en clases | C++, Java |
| Funcional | composición de funciones sin estado mutable | Haskell, Lisp |

C++ admite los tres primeros y parte del cuarto. La asignatura recorre el camino
del estructurado al orientado a objetos: los cuatro primeros temas son
programación estructurada y el tema 5 introduce las clases.

## Especificación de programas

Antes de escribir código hay que decir **qué** hace el programa, no cómo. La
especificación de una función se compone de tres partes:

| Parte | Qué expresa |
| --- | --- |
| Precondición | lo que debe cumplirse al entrar |
| Postcondición | lo que se garantiza al salir |
| Descripción | qué hace, en una frase |

```cpp
/**
 * @brief Calcula la raiz cuadrada entera de un numero.
 * @param n Numero del que se calcula la raiz. Precondicion: n >= 0.
 * @return El mayor entero r tal que r*r <= n.
 */
int raizEntera(int n);
```

La precondición reparte la responsabilidad: si dice `n >= 0`, quien llama debe
garantizarlo y la función no está obligada a comprobarlo. Escribirla evita el
código defensivo repetido y, sobre todo, deja claro de quién es el error cuando
algo falla.

Es el contenido de la práctica del seminario 3, y la razón de que la
documentación se escriba **antes** que el cuerpo de la función.

## Datos y tipos de datos

Un **tipo de dato** define un conjunto de valores y las operaciones válidas sobre
ellos. Un **objeto** es una zona de memoria con un tipo y, casi siempre, un
nombre. La distinción del enunciado de la asignatura: `int` es un tipo; `int x;`
declara un objeto de ese tipo.

### Representación de la información

Todo dato acaba siendo bits, y la codificación elegida determina el rango y la
precisión.

**Enteros sin signo.** Con $n$ bits se representan los valores de $0$ a $2^n-1$.

**Enteros con signo, en complemento a dos.** El rango es de $-2^{n-1}$ a
$2^{n-1}-1$. Se usa esta codificación y no otra por dos razones: el cero tiene
una única representación, y la resta se hace con el mismo circuito que la suma.

Con 8 bits:

| Valor | Binario |
| ---: | --- |
| 127 | `01111111` |
| 1 | `00000001` |
| 0 | `00000000` |
| −1 | `11111111` |
| −128 | `10000000` |

El rango es asimétrico: hay un negativo más que positivos. De ahí que el opuesto
del mínimo no sea representable, y que negar `INT_MIN` sea un error.

**Reales, en coma flotante.** Un número se guarda como signo, exponente y
mantisa. La norma IEEE 754 fija dos tamaños:

| Tipo | Bits | Dígitos decimales fiables | Rango aproximado |
| --- | ---: | ---: | --- |
| `float` | 32 | ~7 | $10^{\pm 38}$ |
| `double` | 64 | ~15 | $10^{\pm 308}$ |

La consecuencia que hay que interiorizar desde el primer día: **no todos los
decimales se representan exactamente**. `0.1` en binario es periódico, igual que
un tercio en decimal, así que se guarda redondeado.

```cpp
if (a == b)          // mal, con reales
if (fabs(a - b) < 1e-9)   // bien
```

Comparar reales con `==` es un error, no un estilo. `0.1 + 0.2 == 0.3` es falso.

**Caracteres.** Un `char` guarda un código numérico. ASCII usa 7 bits para 128
caracteres, y Unicode con codificación UTF-8 cubre el resto usando de uno a
cuatro bytes. Que `'A'` valga 65 permite operar con caracteres como con enteros,
que es lo que hace funcionar `c - '0'` para convertir un dígito.

### Tipos comunes en C++

| Tipo | Contenido | Tamaño típico |
| --- | --- | ---: |
| `bool` | `true` o `false` | 1 byte |
| `char` | un carácter | 1 byte |
| `int` | entero | 4 bytes |
| `long long` | entero grande | 8 bytes |
| `float` | real | 4 bytes |
| `double` | real de doble precisión | 8 bytes |
| `string` | cadena de caracteres | variable |

`string` no es un tipo primitivo: es una clase de la biblioteca estándar, y por
eso hace falta `#include <string>`. Se comporta como un tipo básico porque
redefine los operadores, que es justo lo que el tema 5 explica.

### Declaración e inicialización

```cpp
int contador = 0;          // declarada e inicializada
const double PI = 3.14159; // constante: no se puede modificar
int sinValor;              // declarada sin inicializar: valor indeterminado
```

Leer una variable sin inicializar es **comportamiento indefinido**: el programa
puede dar cualquier resultado, y a menudo da el correcto durante las pruebas y
otro en la corrección. La regla es inicializar en la declaración, siempre.

Las constantes se declaran `const` y se nombran en mayúsculas. Un número suelto
en medio del código —un *número mágico*— hay que ponerle nombre: `if (n > 100)`
no dice nada, `if (n > MAX_ALUMNOS)` sí.

## Operadores y expresiones

### Aritméticos

| Operador | Operación | Detalle |
| --- | --- | --- |
| `+ - *` | suma, resta, producto | — |
| `/` | división | **entera si los dos operandos son enteros** |
| `%` | resto | solo enteros |

La división es la trampa del tema:

```cpp
int a = 7, b = 2;
cout << a / b;                          // 3, no 3.5
cout << static_cast<double>(a) / b;     // 3.5
cout << 1 / 2 * 4.0;                    // 0, porque 1/2 vale 0
```

`1 / 2 * 4.0` es 0 porque los operadores del mismo nivel se evalúan de izquierda
a derecha: primero `1/2`, que es división entera.

### Relacionales y lógicos

| Operador | Significado |
| --- | --- |
| `== != < > <= >=` | comparaciones |
| `&&` | conjunción |
| `\|\|` | disyunción |
| `!` | negación |

`&&` y `||` evalúan **en cortocircuito**: si el primer operando decide el
resultado, el segundo no se evalúa. No es una optimización, es semántica, y se
usa deliberadamente:

```cpp
if (i < n && v[i] > 0)      // correcto: no accede a v[i] si i >= n
if (v[i] > 0 && i < n)      // incorrecto: accede antes de comprobar
```

Y el error de escritura más frecuente del curso:

```cpp
if (x = 5)    // asigna 5 y evalua a cierto: siempre entra
if (x == 5)   // compara
```

`-Wall` avisa de eso.

### Asignación e incremento

```cpp
x += 3;        // equivale a x = x + 3
x++;           // postincremento: usa el valor y luego incrementa
++x;           // preincremento: incrementa y luego usa
```

`a = b++` deja en `a` el valor **anterior** de `b`; `a = ++b`, el nuevo. Con
objetos no primitivos el preincremento es además más eficiente, porque el
postincremento tiene que guardar una copia del valor antiguo.

### Precedencia y conversiones

De mayor a menor prioridad: `!`, luego `* / %`, luego `+ -`, luego los
relacionales, luego `&&`, luego `||`, y por último la asignación. Ante la duda,
paréntesis: son gratis y evitan errores.

En una expresión mixta, C++ **promociona** el tipo menor al mayor: `int` con
`double` da `double`. Esa conversión implícita es cómoda y esconde pérdidas de
información en la dirección contraria:

```cpp
int n = 3.99;             // n vale 3: se trunca, no se redondea
double d = 5 / 2;         // d vale 2.0: la division fue entera
```

La conversión explícita se escribe `static_cast<double>(x)`, y no con la sintaxis
heredada `(double)x`: la forma con plantilla es más fácil de localizar y el
compilador comprueba que la conversión tenga sentido.

## Entrada y salida

```cpp
#include <iostream>
using namespace std;

int main() {
    int edad;
    cout << "Introduzca su edad: ";
    cin >> edad;
    cout << "El ano que viene tendra " << edad + 1 << endl;
    return 0;
}
```

`cin >>` salta los espacios en blanco y se detiene en el primero que encuentra,
así que no sirve para leer una línea con espacios. Para eso está `getline(cin,
linea)`.

Y el problema clásico de mezclar los dos: `cin >> n` deja el salto de línea en el
flujo, y el `getline` siguiente lee una cadena vacía. Se resuelve con
`cin.ignore()` entre ambos.

Si la entrada no encaja con el tipo, el flujo entra en estado de error y las
lecturas siguientes fallan sin bloquear. Comprobarlo es lo que distingue un
programa robusto:

```cpp
if (!(cin >> edad)) {
    cerr << "Entrada no valida" << endl;
    return 1;
}
```

`cerr` es el flujo de error, no almacenado en búfer, y es donde van los mensajes
de error para no mezclarse con la salida del programa cuando esta se redirige.

## Estructura de un programa

```cpp
#include <iostream>        // directivas de preprocesado
#include <cmath>

using namespace std;

const double PI = 3.14159; // constantes globales

/**
 * @brief Calcula el area de un circulo.
 * @param radio Radio del circulo. Precondicion: radio >= 0.
 * @return El area.
 */
double area(double radio) {
    return PI * radio * radio;
}

int main() {
    double r;
    cout << "Radio: ";
    cin >> r;
    cout << "Area: " << area(r) << endl;
    return 0;
}
```

`main` devuelve `int`, y ese valor es el código de salida que el sistema recibe:
0 significa éxito. `return 0` al final es opcional en `main` y se escribe por
claridad.

Sobre `using namespace std`: es cómodo en programas de aprendizaje y desaconsejado
en código real, porque trae al ámbito global todos los nombres de la biblioteca
estándar y provoca ambigüedades. En ficheros de cabecera no debe aparecer nunca.
El desarrollo completo de estos fundamentos está en \cite{garrido2005}, y el
tratamiento del lenguaje en \cite{stroustrup2015}.
