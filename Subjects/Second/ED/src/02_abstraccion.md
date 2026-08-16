# Abstracción de datos

Tema 2 del programa. Qué es un tipo de dato abstracto, cómo se especifica sin
comprometerse con una implementación y qué ofrece C++ para construirlo.

## El problema que resuelve

Un programa que manipula directamente la representación de sus datos queda atado a
ella. Si una agenda guarda los contactos en un vector ordenado y cincuenta puntos
del código recorren ese vector, cambiar a un árbol obliga a tocar los cincuenta.

La **abstracción de datos** separa dos cosas que se suelen confundir:

| | Qué describe |
| --- | --- |
| **Especificación** | qué operaciones hay y qué hacen |
| **Implementación** | cómo se representan los datos y cómo se programan las operaciones |

Quien usa el tipo trabaja contra la especificación. Quien lo implementa puede
cambiar la representación entera mientras la especificación se mantenga, y ningún
usuario se entera.

```{=latex}
\begin{definicion}[Tipo de dato abstracto]
Un TDA es un conjunto de valores junto con las operaciones definidas sobre ellos,
descritas por su comportamiento observable y no por su representación interna.
\end{definicion}
```

Que la definición no mencione punteros ni vectores es el punto entero. Una pila es
una pila porque el último que entra es el primero que sale, no porque por dentro
haya un array.

## Especificar un TDA

Una especificación completa dice, para cada operación:

| Elemento | Qué recoge |
| --- | --- |
| Signatura | tipos de los argumentos y del resultado |
| Precondición | qué debe cumplirse antes de llamarla |
| Postcondición | qué garantiza al terminar |
| Coste | orden de eficiencia comprometido |

La última fila se olvida a menudo y es parte del contrato. Un TDA conjunto que
promete pertenencia en $O(1)$ y otro que la promete en $O(\log n)$ tienen la misma
signatura y **no son intercambiables**: el segundo puede sustituir al primero sin
que nada deje de compilar, y arruinar el rendimiento del programa entero.

```{=latex}
\begin{ejemplo}
Especificación de la pila, sin decir cómo se guarda nada:

\medskip
\begin{tabular}{@{}lll@{}}
\toprule
Operación & Precondición & Postcondición \\
\midrule
\texttt{vacia()} & --- & cierto si no hay elementos \\
\texttt{tope()} & la pila no está vacía & devuelve el último insertado \\
\texttt{poner(x)} & --- & \texttt{x} pasa a ser el tope \\
\texttt{quitar()} & la pila no está vacía & elimina el tope \\
\bottomrule
\end{tabular}
\end{ejemplo}
```

### El invariante de la representación

Cuando se pasa a implementar, aparece una condición que la especificación no
menciona porque no habla de representación: **el invariante**. Es lo que toda
instancia válida cumple entre operación y operación.

En una pila sobre vector con un entero `n` que cuenta los elementos, el invariante
es `0 <= n <= capacidad` y que las primeras `n` posiciones contienen los datos. Si
una operación lo rompe a mitad, tiene que restaurarlo antes de terminar.

El invariante es la herramienta que hace demostrable la corrección de una
estructura, y en la práctica es lo primero que se escribe al depurar: una función
que lo comprueba y se llama al entrar y al salir de cada operación encuentra en
minutos errores que de otro modo se manifiestan mucho después y lejos.

## Encapsulamiento en C++

El mecanismo del lenguaje es la clase con sus niveles de acceso:

| Nivel | Quién puede acceder |
| --- | --- |
| `public` | cualquiera: es la especificación |
| `private` | solo la propia clase: es la representación |
| `protected` | la clase y sus derivadas |

```cpp
class Pila {
public:
  bool vacia() const;
  const int& tope() const;
  void poner(const int& x);
  void quitar();

private:
  int* datos;        // representación: nadie de fuera la ve
  int n;             // elementos ocupados
  int capacidad;     // reservados
};
```

Cambiar `datos` por una lista enlazada no obliga a recompilar la lógica de quien
usa la pila, solo a recompilar la clase. Ese es el beneficio concreto.

```{=latex}
\begin{anotacion}
Un \texttt{struct} de C++ es una clase cuyo acceso por defecto es \texttt{public}.
La diferencia es esa y ninguna más. Usar \texttt{struct} para agregados sin
invariante y \texttt{class} para tipos con invariante es una convención útil
precisamente porque el compilador no la impone.
\end{anotacion}
```

## Constructores, destructor y copia

Una clase que gestiona memoria dinámica necesita algo más que las operaciones del
TDA. Son las que el lenguaje genera solas si no se escriben, y las que genera solas
suelen estar mal en cuanto hay un puntero de por medio.

| Función | Cuándo se llama |
| --- | --- |
| Constructor por defecto | al declarar un objeto sin argumentos |
| Constructor con parámetros | al declararlo dándole valores iniciales |
| Constructor de copia | al inicializar a partir de otro objeto y al pasar por valor |
| Operador de asignación | al asignar un objeto ya construido |
| Destructor | al salir de ámbito o al hacer `delete` |

### El problema de la copia superficial

El constructor de copia que genera el compilador copia campo a campo. Con un
puntero dentro, copia **la dirección**, no lo apuntado:

```cpp
Pila a;              // reserva su vector
Pila b = a;          // b.datos apunta al mismo bloque que a.datos
```

Las consecuencias llegan las dos:

- Modificar `b` modifica `a`, porque comparten el bloque.
- Al destruirse las dos, el mismo bloque se libera dos veces, y eso es un error de
  memoria que puede no manifestarse hasta mucho después.

La solución es la **copia profunda**: reservar un bloque nuevo y copiar el
contenido.

```cpp
Pila::Pila(const Pila& otra)
    : n(otra.n), capacidad(otra.capacidad) {
  datos = new int[capacidad];
  for (int i = 0; i < n; ++i) datos[i] = otra.datos[i];
}
```

Y el operador de asignación, que además tiene dos casos que el constructor de
copia no tiene: liberar lo que ya había, y protegerse de `a = a`.

```cpp
Pila& Pila::operator=(const Pila& otra) {
  if (this != &otra) {           // sin esta guarda, a = a se destruye a sí mismo
    delete[] datos;
    n = otra.n;
    capacidad = otra.capacidad;
    datos = new int[capacidad];
    for (int i = 0; i < n; ++i) datos[i] = otra.datos[i];
  }
  return *this;
}
```

```{=latex}
\begin{anotacion}
La regla práctica: \textbf{si una clase necesita destructor, necesita también
constructor de copia y operador de asignación}. Los tres aparecen y desaparecen
juntos, porque los tres existen por la misma razón, que es poseer un recurso.
\end{anotacion}
```

## Plantillas: un TDA para cualquier tipo

Una pila de enteros y una de cadenas tienen el mismo código con un tipo distinto.
Duplicarlo es la peor opción posible: dos copias que hay que corregir dos veces.

Las **plantillas** permiten escribirlo una vez con el tipo como parámetro:

```cpp
template <typename T>
class Pila {
public:
  bool vacia() const;
  const T& tope() const;
  void poner(const T& x);
  void quitar();

private:
  T* datos;
  int n, capacidad;
};

Pila<int> pilaEnteros;
Pila<std::string> pilaCadenas;
```

El compilador genera una clase distinta por cada tipo usado. Dos consecuencias
prácticas:

- **La plantilla se define entera en la cabecera.** El compilador necesita el
  cuerpo de los métodos en el punto donde se instancia, así que separar
  declaración e implementación en `.h` y `.cpp` como con una clase normal produce
  errores de enlazado.
- **Los errores aparecen al instanciar, no al escribir.** Una plantilla que llama a
  `operator<` compila sin quejarse hasta que alguien la instancia con un tipo que
  no lo define.

### Requisitos sobre el tipo parámetro

Una plantilla impone condiciones implícitas sobre `T`. Las habituales:

| Si la estructura hace | `T` necesita |
| --- | --- |
| copiar elementos | constructor de copia y asignación |
| declarar un hueco sin valor | constructor por defecto |
| ordenar | `operator<` |
| buscar por igualdad | `operator==` |
| imprimir | `operator<<` |

Documentar esos requisitos es parte de la especificación del TDA. Es lo que
distingue una plantilla utilizable de una que hay que descifrar leyendo mensajes
de error del compilador.

## Iteradores

Un TDA contenedor tiene que dejar recorrer sus elementos sin exponer cómo los
guarda. La solución que adopta C++ es el **iterador**: un objeto que señala a un
elemento y sabe avanzar al siguiente.

```cpp
for (Lista<int>::iterator it = l.begin(); it != l.end(); ++it)
  std::cout << *it << " ";
```

El bucle es idéntico para un vector, una lista y un conjunto, y cada uno lo
implementa de forma completamente distinta por dentro. Esa uniformidad es la que
permite escribir algoritmos genéricos que funcionan sobre cualquier contenedor.

Las categorías de iterador según lo que soportan:

| Categoría | Operaciones | Ejemplo |
| --- | --- | --- |
| Entrada / salida | leer o escribir y avanzar, una pasada | flujos |
| Hacia delante | leer y avanzar, varias pasadas | lista simple |
| Bidireccional | además retroceder con `--` | lista doble, `set`, `map` |
| Acceso aleatorio | además `it + k` y comparaciones de orden | vector, `deque` |

La categoría es lo que determina qué algoritmos se pueden aplicar. Ordenar exige
acceso aleatorio, y por eso `std::sort` funciona sobre un `vector` y no sobre un
`list`, que trae su propio `sort` con otro algoritmo.

```{=latex}
\begin{anotacion}
Modificar un contenedor mientras se recorre \textbf{invalida iteradores}. En un
vector, insertar puede redimensionar y dejar todos los iteradores apuntando a
memoria liberada; en una lista, borrar un nodo invalida solo el iterador a ese
nodo. Las funciones de borrado devuelven un iterador válido al elemento siguiente
justo para poder seguir el recorrido.
\end{anotacion}
```

## Relaciones entre TDAs

Al construir tipos complejos aparecen tres formas de apoyarse en otros, y
distinguirlas evita diseños confusos:

| Relación | Significado | Ejemplo |
| --- | --- | --- |
| Composición | está formado por | una pila **contiene** un vector |
| Adaptación | se implementa usando otro y restringe su interfaz | una cola sobre una lista |
| Herencia | es un caso particular de | una cola con prioridad es una cola |

En estructuras de datos la **composición domina**. Una pila que hereda de un vector
expone el acceso por posición, y con él la posibilidad de insertar por el medio,
que es justo lo que la pila prohíbe. Contener el vector y publicar solo cuatro
operaciones da un tipo correcto; heredarlo da uno que miente sobre lo que es.

## Ejercicios

```{=latex}
\begin{ejercicio}
Una clase \texttt{Cadena} guarda un \texttt{char*} reservado con \texttt{new[]} y
define destructor, pero no constructor de copia. ¿Qué ocurre al pasar un objeto
\texttt{Cadena} por valor a una función?
\end{ejercicio}

\begin{solucion}
Se genera una copia superficial: el parámetro apunta al mismo bloque. Al terminar
la función se destruye el parámetro y libera ese bloque, y el objeto original queda
con un puntero a memoria liberada. El fallo aparece más tarde, al usarlo o al
destruirlo por segunda vez, lejos de donde está la causa. Se corrige con copia
profunda, o pasando por referencia constante.
\end{solucion}

\begin{ejercicio}
Especificar el TDA conjunto con las operaciones de inserción, borrado, pertenencia
y cardinal, indicando el coste comprometido de cada una.
\end{ejercicio}

\begin{solucion}
Las cuatro signaturas son \texttt{void insertar(T)}, \texttt{void borrar(T)},
\texttt{bool pertenece(T) const} y \texttt{int tam() const}. Insertar y borrar no
tienen precondición y garantizan, respectivamente, que el elemento está y que no
está; \texttt{pertenece} no modifica nada; \texttt{tam} devuelve el número de
elementos distintos. Sobre el coste hay dos contratos razonables y distintos:
$O(\log n)$ para las tres primeras si se exige recorrido ordenado, y $O(1)$ medio
si no se exige. Elegir uno es parte de la especificación, no de la implementación.
\end{solucion}

\begin{ejercicio}
¿Por qué una plantilla no puede separarse en \texttt{.h} y \texttt{.cpp} como una
clase normal?
\end{ejercicio}

\begin{solucion}
Porque el compilador genera el código de la plantilla en el punto donde se
instancia, y para hacerlo necesita ver el cuerpo de los métodos. Compilando el
\texttt{.cpp} por separado no hay ninguna instanciación a la vista, así que no se
genera nada y el enlazador no encuentra los símbolos. Se resuelve incluyendo la
implementación desde la propia cabecera.
\end{solucion}
```

El tratamiento de la abstracción y del encapsulamiento en C++ está desarrollado en
\cite{garrido2006} y \cite{carrano2017}, y el de las plantillas en
\cite{garrido2017}.
