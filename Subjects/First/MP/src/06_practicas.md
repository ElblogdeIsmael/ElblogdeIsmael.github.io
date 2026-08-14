# Temario práctico

Las prácticas sobre los cuatro temas y el proyecto informático de programación,
que es lo que la guía docente sitúa como cierre de la asignatura.

## Prácticas sobre el tema 1. Punteros y memoria dinámica

Ejercicios característicos:

- Recorrer un vector con aritmética de punteros en vez de con índices, y comprobar
  que `v[i]` y `*(v+i)` producen el mismo código.
- Reservar un vector cuyo tamaño se lee del teclado, usarlo y liberarlo.
- Implementar `strlen`, `strcpy` y `strcmp` sobre cadenas al estilo C, con el
  terminador nulo gestionado a mano.
- Matriz dinámica en las dos representaciones —vector de punteros y bloque
  contiguo— y comparar el tiempo de recorrerlas.

El ejercicio que enseña lo que hay que retener:

```cpp
int *v = new int[n];
// ...
delete[] v;
v = nullptr;      // usarlo despues falla en el acto, no en silencio
```

Y el que enseña lo contrario:

```cpp
int *v = new int[n];
v = new int[m];   // el primer bloque se ha perdido: fuga
```

Reasignar un puntero sin liberar antes pierde el bloque anterior. Valgrind lo
señala con `definitely lost`.

**Toda práctica de este tema se entrega con Valgrind limpio.** Un programa que da
el resultado correcto y pierde memoria no está terminado.

## Prácticas sobre el tema 2. Funciones

- Un programa que lea sus parámetros de la línea de órdenes y compruebe `argc`
  antes de usarlos.
- Comparar el paso por valor, por referencia y por puntero sobre la misma función,
  imprimiendo las direcciones para ver qué se copia.
- Escribir una ordenación que reciba el criterio como puntero a función y usarla
  con varios criterios sin tocar el algoritmo.
- Una tabla de opciones de menú resuelta con un vector de punteros a función en
  lugar de un `switch`.

```cpp
struct Opcion { const char *texto; void (*accion)(); };

Opcion menu[] = {
    {"Alta",   alta},
    {"Baja",   baja},
    {"Listar", listar}
};

// Ejecutar la opcion i
menu[i].accion();
```

Añadir una opción es una línea del vector y una función. Con `switch` habría que
tocar dos sitios.

## Prácticas sobre el tema 3. Clases

La práctica central de la asignatura: una clase que gestiona memoria dinámica, con
la regla de los tres completa.

```cpp
class Cadena {
private:
    char *datos_;
    int   longitud_;

public:
    Cadena();
    Cadena(const char *s);
    Cadena(const Cadena &otra);              // constructor de copia
    ~Cadena();                               // destructor
    Cadena & operator=(const Cadena &otra);  // asignacion

    int  longitud() const;
    char operator[](int i) const;
    char & operator[](int i);
    Cadena operator+(const Cadena &otra) const;
    bool   operator==(const Cadena &otra) const;
};
```

La batería de pruebas que hay que pasar, y qué detecta cada una:

```cpp
Cadena a("hola");
Cadena b = a;          // constructor de copia
Cadena c;
c = a;                 // operador de asignacion
c = c;                 // autoasignacion: no debe romper nada
{
    Cadena d = a;      // se destruye al salir del bloque
}
assert(a.longitud() == 4);   // a debe seguir intacta
```

| Prueba | Qué detecta si falla |
| --- | --- |
| `Cadena b = a;` y modificar `b` | copia superficial: cambia también `a` |
| Salir de un bloque con una copia viva | liberación doble al destruirse las dos |
| `c = c;` | falta la comprobación de autoasignación |
| Asignar dos veces al mismo objeto | fuga: no se liberó lo anterior |
| Valgrind al final | cualquiera de los cuatro |

La comprobación con Valgrind es la que cierra la práctica, porque tres de esos
cuatro errores pueden no manifestarse ejecutando.

## Prácticas sobre el tema 4. Ficheros

- Leer un fichero de texto con campos separados y cargarlo en un vector de
  registros.
- Escribir el resultado en otro fichero, comprobando la apertura en los dos casos.
- El mismo programa con fichero binario, y comparar tamaños y tiempos.
- Acceso directo: modificar el registro $i$ de un fichero binario sin leer los
  demás.

```cpp
ifstream f("alumnos.csv");
if (!f) { cerr << "No se pudo abrir" << endl; return 1; }

string linea;
getline(f, linea);              // descartar la cabecera
while (getline(f, linea)) {
    istringstream campos(linea);
    string nombre, edadTexto, notaTexto;
    getline(campos, nombre,    ',');
    getline(campos, edadTexto, ',');
    getline(campos, notaTexto, ',');
    // convertir y guardar
}
```

Los dos errores que el guion busca:

- `while (!f.eof())`, que procesa el último elemento dos veces.
- No comprobar la apertura, con lo que un fichero inexistente produce cero
  registros y ningún mensaje.

## Proyecto informático de programación

Reúne los cuatro temas y los cinco seminarios. La guía docente lo describe como un
proyecto completo con análisis, diseño, implementación y documentación, y ese es
el reparto del trabajo.

### Lo que debe tener

| Aspecto | Qué se espera |
| --- | --- |
| Estructura | módulos con su cabecera y su fuente |
| Construcción | `makefile` con dependencias correctas, incluidas las cabeceras |
| Tipos propios | al menos una clase con gestión de memoria y la regla de los tres |
| Ficheros | persistencia de los datos, texto o binario |
| Errores | valores de retorno, aserciones y excepciones donde corresponda |
| Documentación | Doxygen sobre toda la interfaz pública |
| Pruebas | casos elegidos, incluidos los límite |
| Memoria | sin fugas, verificado con Valgrind |

### Estructura de trabajo

```
proyecto/
  include/   *.h
  src/       *.cpp
  obj/       *.o
  bin/       ejecutable
  doc/       Doxyfile y salida
  datos/     ficheros de prueba
  makefile
```

### Orden de desarrollo

1. **Analizar**: qué datos hay y qué operaciones se piden.
2. **Diseñar** los tipos, y escribir sus cabeceras con la documentación completa
   antes de implementar nada.
3. **Implementar módulo a módulo**, probando cada uno por separado en cuanto
   compila.
4. **Integrar** y probar el conjunto.
5. **Pasar Valgrind** en cada entrega parcial, no al final.

El punto 5 es el que más tiempo ahorra. Una fuga introducida en la primera semana
y detectada en la última obliga a revisar todo el código; detectada el mismo día,
son dos líneas.

### Antes de entregar

```bash
make clean && make                  # compila sin avisos desde cero
./bin/programa < casos/prueba1.txt  # con los casos elegidos
valgrind --leak-check=full ./bin/programa < casos/prueba1.txt
doxygen doc/Doxyfile                # la documentacion se genera sin errores
```

Y la revisión final: ningún aviso del compilador, ninguna variable global no
constante, ningún `new` sin su `delete`, ninguna función sin documentar y ningún
fichero abierto sin comprobar. Los guiones de estas prácticas y sus ejercicios
están en \cite{garrido2017practicas} y en \cite{garrido2016ejercicios}; el
planteamiento del proyecto, en \cite{garrido2016met}.
