# Estructuras de control

Tema 2 del programa. Las construcciones que deciden qué se ejecuta y cuántas
veces: condicionales y repetitivas.

## El teorema de la programación estructurada

Böhm y Jacopini demostraron en 1966 que **cualquier algoritmo se puede escribir
con tres estructuras**: secuencia, selección e iteración. No hace falta nada más,
y en particular no hace falta el salto incondicional.

Es el resultado que justifica el estilo de toda la asignatura. Un programa
construido solo con esas tres tiene una propiedad valiosa: cada bloque tiene una
entrada y una salida, así que se puede razonar sobre él por partes.

## Estructura condicional

### `if` simple y doble

```cpp
if (nota >= 5) {
    cout << "Aprobado" << endl;
} else {
    cout << "Suspenso" << endl;
}
```

Las llaves son obligatorias por disciplina, aunque el cuerpo tenga una sola
instrucción. Sin ellas, añadir una segunda línea más tarde produce un error que
la indentación oculta:

```cpp
if (x > 0)
    cout << "positivo";
    contador++;          // se ejecuta SIEMPRE: no esta dentro del if
```

### Anidamiento y escalera

```cpp
if (nota >= 9) {
    cout << "Sobresaliente";
} else if (nota >= 7) {
    cout << "Notable";
} else if (nota >= 5) {
    cout << "Aprobado";
} else {
    cout << "Suspenso";
}
```

El orden importa y no es intercambiable: si la primera comprobación fuera
`nota >= 5`, todas las notas aprobadas caerían ahí y las demás ramas nunca se
alcanzarían. En una escalera de rangos se comprueba **de más restrictivo a menos**.

Cada condición se evalúa sabiendo que las anteriores fallaron, así que
`else if (nota >= 7)` significa en realidad «entre 7 y 9». Escribir
`else if (nota >= 7 && nota < 9)` es redundante.

### `switch`

```cpp
switch (opcion) {
    case 1:
        alta();
        break;
    case 2:
    case 3:
        baja();
        break;
    default:
        cout << "Opcion no valida" << endl;
}
```

Tres reglas:

- **La expresión debe ser entera o de carácter.** No admite reales ni cadenas.
- **`break` es obligatorio** al final de cada caso, o la ejecución continúa por el
  siguiente. Ese comportamiento se llama caída, y es la fuente principal de
  errores con `switch`.
- **Dos casos seguidos sin código entre ellos** comparten el mismo tratamiento, y
  eso sí es un uso deliberado de la caída.

### El operador condicional

```cpp
int mayor = (a > b) ? a : b;
```

Es una expresión, no una instrucción, así que se puede usar donde hace falta un
valor. Solo compensa cuando las dos alternativas son cortas; anidarlo produce
código ilegible.

## Estructuras repetitivas

### `while`

Comprueba **antes** de ejecutar, así que el cuerpo puede no ejecutarse ninguna
vez. Es la estructura adecuada cuando el número de repeticiones no se conoce de
antemano.

```cpp
int suma = 0, n;
cout << "Numeros (0 para terminar): ";
cin >> n;
while (n != 0) {
    suma += n;
    cin >> n;
}
cout << "Suma: " << suma << endl;
```

Ese esquema —leer antes del bucle y volver a leer al final del cuerpo— se llama
**lectura adelantada**, y es el patrón estándar para procesar una secuencia
terminada por un centinela.

Todo `while` correcto tiene tres piezas, y olvidar cualquiera lo rompe:

| Pieza | Dónde va | Si falta |
| --- | --- | --- |
| Inicialización | antes del bucle | la condición usa un valor indeterminado |
| Condición | en el `while` | — |
| Progreso hacia la condición | dentro del cuerpo | bucle infinito |

### `do-while`

Comprueba **después**, así que el cuerpo se ejecuta al menos una vez. Su uso
natural es la validación de entrada:

```cpp
int opcion;
do {
    cout << "Elija (1-3): ";
    cin >> opcion;
} while (opcion < 1 || opcion > 3);
```

El punto y coma final tras la condición es obligatorio, y olvidarlo es un error de
compilación difícil de leer.

### `for`

Reúne las tres piezas en una línea. Es la estructura para cuando el número de
repeticiones se conoce:

```cpp
for (int i = 0; i < n; i++) {
    cout << v[i] << " ";
}
```

La variable declarada en el `for` **existe solo dentro del bucle**. Eso es lo
deseable: si hace falta después, es que el bucle no era el sitio para declararla.

Recorrer un vector desde `0` hasta `n-1` con `i < n` es el idioma correcto. Los
dos errores clásicos:

```cpp
for (int i = 0; i <= n; i++)   // accede a v[n]: fuera del vector
for (int i = 1; i < n; i++)    // se salta v[0]
```

Se llaman **errores de desplazamiento en uno**, y son los más frecuentes de la
programación con vectores. En C++ no producen un error: leen o escriben memoria
ajena, y el programa puede funcionar durante las pruebas.

### Cuál usar

| Situación | Estructura |
| --- | --- |
| Número de repeticiones conocido | `for` |
| Repetir mientras se cumpla una condición | `while` |
| Al menos una repetición | `do-while` |

Las tres son intercambiables —cualquiera se escribe con cualquier otra—, así que
elegir es una cuestión de que el código diga lo que hace.

### Bucles anidados

```cpp
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        cout << "*";
    }
    cout << endl;
}
```

El bucle interno se ejecuta completo por cada vuelta del externo, así que el
número total de iteraciones es el producto. Cada nivel necesita su propia
variable de control: reutilizar `i` en los dos rompe el externo.

### `break` y `continue`

`break` sale del bucle; `continue` salta al final del cuerpo y sigue con la
iteración siguiente.

Los dos rompen la propiedad de entrada única y salida única, así que se usan con
moderación. `break` está justificado en una búsqueda que ya ha encontrado lo que
buscaba; `continue`, casi nunca, porque suele ser un `if` mal escrito.

Un peligro concreto: en un `for`, `continue` **sí** ejecuta el incremento, pero en
un `while` no ejecuta nada de lo que hubiera después. Un `continue` colocado antes
de la línea que hace avanzar un `while` produce un bucle infinito.

## Diseño y verificación de bucles

### El invariante

Un **invariante** es una propiedad que se cumple antes y después de cada
iteración. Formularlo es la forma de convencerse de que un bucle es correcto sin
ejecutarlo.

```cpp
int suma = 0;
for (int i = 0; i < n; i++) {
    suma += v[i];
}
// Invariante: al empezar cada vuelta, suma contiene v[0] + ... + v[i-1].
```

Al terminar, `i == n`, así que el invariante dice que `suma` contiene la suma de
los `n` elementos. Eso es la demostración.

### Terminación

Un bucle termina si alguna magnitud decrece hacia la condición de salida y no
puede hacerlo indefinidamente. Los bucles infinitos accidentales tienen tres
causas casi siempre:

| Causa | Ejemplo |
| --- | --- |
| Falta el progreso | se olvida el `i++` |
| La condición no se puede alcanzar | `while (x != 0)` decrementando de dos en dos desde un impar |
| Se compara un real con `!=` | el redondeo hace que nunca coincida exactamente |

### Depuración

El seminario 2 de la asignatura trata esto, y las tres técnicas que valen:

1. **Trazar a mano** una ejecución corta, anotando el valor de cada variable en
   cada vuelta. Encuentra la mayoría de los errores de bucle.
2. **Imprimir** valores intermedios, en `cerr` para no mezclarlos con la salida.
3. **Usar el depurador**: punto de ruptura en el bucle, ejecución paso a paso y
   observación de las variables.

```bash
g++ -Wall -g -o prog prog.cpp
gdb ./prog
```

| Orden de GDB | Efecto |
| --- | --- |
| `break 25` | punto de ruptura en la línea 25 |
| `run` | ejecuta |
| `next` | siguiente línea, sin entrar en funciones |
| `step` | siguiente línea, entrando |
| `print x` | valor de una variable |
| `continue` | sigue hasta el próximo punto |

`-g` incluye información de depuración. Sin ella, GDB no puede relacionar el
código máquina con las líneas del fuente.

### Casos de prueba

Un programa se prueba con casos elegidos, no con los que salgan. Los que hay que
incluir siempre:

| Caso | Por qué |
| --- | --- |
| Típico | comprueba la lógica normal |
| Vacío o cero repeticiones | el bucle puede no ejecutarse nunca |
| Un solo elemento | los casos límite del recorrido |
| Extremos del rango | el primero y el último |
| Entrada inválida | el programa no debe romperse |

Las tres primeras filas encuentran la mayor parte de los errores de esta
asignatura. El desarrollo de estas estructuras y de la metodología de diseño de
bucles está en \cite{garrido2005} y en \cite{savitch2017}.
