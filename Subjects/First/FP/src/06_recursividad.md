# Recursividad

Tema 6 del programa. Funciones que se llaman a sí mismas: cómo se diseñan, cómo
se ejecutan por dentro y cuándo compensan frente a un bucle.

## La idea

Una función es **recursiva** si se llama a sí misma, directa o indirectamente. Se
apoya en que muchos problemas contienen versiones más pequeñas de sí mismos: el
factorial de $n$ es $n$ por el factorial de $n-1$.

```cpp
int factorial(int n) {
    if (n <= 1) return 1;          // caso base
    return n * factorial(n - 1);   // caso recursivo
}
```

## Los tres requisitos

Un algoritmo recursivo correcto tiene tres piezas, y faltar cualquiera lo rompe:

| Requisito | Qué exige | Si falta |
| --- | --- | --- |
| Caso base | al menos un caso que se resuelve sin recursión | recursión infinita |
| Caso recursivo | resuelve el problema con una versión menor de sí mismo | no hay recursión |
| Convergencia | cada llamada se acerca al caso base | recursión infinita |

La recursión infinita no cuelga el programa: **agota la pila** y aborta con
desbordamiento. Es la señal inequívoca de que falta el caso base o de que las
llamadas no convergen.

```cpp
int mal(int n) {
    if (n == 0) return 1;
    return n * mal(n - 2);    // con n impar nunca llega a 0
}
```

Ese ejemplo tiene caso base y no converge: con `n` impar salta de 1 a −1, −3, y
sigue indefinidamente. El caso base tiene que ser **alcanzable desde cualquier
entrada válida**, y por eso `n <= 1` es mejor que `n == 1`.

## Cómo se ejecuta

Cada llamada crea su propio marco en la pila, con sus parámetros y sus locales.
Los marcos se apilan al descender y se desapilan al volver.

```
factorial(4)
 +-- 4 * factorial(3)
      +-- 3 * factorial(2)
           +-- 2 * factorial(1)
                +-- devuelve 1     <- caso base
           +-- devuelve 2
      +-- devuelve 6
 +-- devuelve 24
```

Dos consecuencias:

- **Cada llamada tiene sus propias variables.** Es lo que hace que la recursión
  funcione, y por qué en el tema 3 se insistía en que los marcos son
  independientes.
- **La profundidad está acotada.** La pila mide unos megabytes, así que una
  recursión de un millón de niveles la agota aunque el algoritmo sea correcto.

## Diseño de algoritmos recursivos

El método, en cuatro pasos:

1. Identificar el caso base: la entrada más pequeña que se resuelve directamente.
2. Suponer que la función **ya funciona** para entradas menores. Es el paso
   difícil, y es exactamente la hipótesis de inducción.
3. Expresar el caso general en términos de esa suposición.
4. Comprobar que cada llamada se acerca al caso base.

El paso 2 es donde la gente se atasca: intentar seguir mentalmente todas las
llamadas anidadas es imposible y no hace falta. Se confía en que la función
resuelve el caso menor, igual que se confía en cualquier otra función ya escrita.

### Ejemplos

**Suma de un vector.**

```cpp
int suma(const int v[], int n) {
    if (n == 0) return 0;
    return v[n - 1] + suma(v, n - 1);
}
```

**Potencia.**

```cpp
double potencia(double base, int exp) {
    if (exp == 0) return 1.0;
    if (exp < 0)  return 1.0 / potencia(base, -exp);
    return base * potencia(base, exp - 1);
}
```

**Potencia rápida**, que divide el exponente en vez de restarle uno:

```cpp
double potenciaRapida(double base, int exp) {
    if (exp == 0) return 1.0;
    double mitad = potenciaRapida(base, exp / 2);
    if (exp % 2 == 0) return mitad * mitad;
    return base * mitad * mitad;
}
```

Pasa de $O(n)$ a $O(\log n)$, y la clave está en guardar el resultado en `mitad`
en vez de llamar dos veces: llamar dos veces daría $O(n)$ otra vez, porque el
número de llamadas se duplicaría en cada nivel.

**Invertir una cadena.**

```cpp
string invertir(const string &s) {
    if (s.length() <= 1) return s;
    return invertir(s.substr(1)) + s[0];
}
```

**Palíndromo.**

```cpp
bool esPalindromo(const string &s, int izq, int der) {
    if (izq >= der)      return true;
    if (s[izq] != s[der]) return false;
    return esPalindromo(s, izq + 1, der - 1);
}
```

Los dos índices como parámetros evitan copiar la cadena en cada llamada, que es lo
que hace `substr` en el ejemplo anterior. Es el patrón habitual: **pasar el rango
en vez de la subestructura**.

**Torres de Hanói**, el problema donde la recursión es claramente la solución
natural:

```cpp
void hanoi(int n, char origen, char destino, char auxiliar) {
    if (n == 0) return;
    hanoi(n - 1, origen, auxiliar, destino);
    cout << "Mover disco " << n << " de " << origen
         << " a " << destino << endl;
    hanoi(n - 1, auxiliar, destino, origen);
}
```

Mueve $2^n - 1$ discos. Escribirlo con bucles es posible y mucho más difícil de
entender, que es el argumento a favor de la recursión.

## Tipos de recursión

| Tipo | Descripción | Ejemplo |
| --- | --- | --- |
| Simple | una llamada por caso recursivo | factorial |
| Múltiple | varias llamadas | Fibonacci, Hanói |
| Final | la llamada recursiva es lo último que se hace | ver abajo |
| No final | queda trabajo después de la llamada | factorial |
| Mutua | dos funciones que se llaman entre sí | `par` e `impar` |
| Anidada | el argumento de la llamada es otra llamada | función de Ackermann |

La **recursión final** —el resultado de la llamada es directamente el resultado de
la función— tiene una propiedad útil: el compilador puede convertirla en un bucle
y no consumir pila.

```cpp
int factorialFinal(int n, int acumulado = 1) {
    if (n <= 1) return acumulado;
    return factorialFinal(n - 1, n * acumulado);   // nada despues
}
```

`g++ -O2` la convierte en un bucle. Es una optimización, no una garantía del
lenguaje: sin optimizar, la pila crece igual.

## Recursión frente a iteración

**Toda función recursiva se puede escribir con bucles**, y al revés. La elección
es de claridad y de coste.

| | Recursión | Iteración |
| --- | --- | --- |
| Legibilidad | mayor si el problema es recursivo | mayor si no lo es |
| Memoria | un marco de pila por llamada | constante |
| Velocidad | algo menor, por el coste de llamar | mayor |
| Riesgo | desbordamiento de pila | bucle infinito |

### El caso donde la recursión ingenua es inaceptable

```cpp
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

Es correcto y su coste es exponencial, $O(2^n)$, porque **recalcula los mismos
valores una y otra vez**: `fibonacci(30)` invoca `fibonacci(5)` decenas de miles
de veces. Con $n = 45$ ya tarda minutos.

La versión iterativa es lineal:

```cpp
int fibonacciIterativo(int n) {
    if (n <= 1) return n;
    int anterior = 0, actual = 1;
    for (int i = 2; i <= n; i++) {
        int siguiente = anterior + actual;
        anterior = actual;
        actual = siguiente;
    }
    return actual;
}
```

La diferencia no es un porcentaje: para $n = 50$ son unas horas frente a unos
microsegundos. Es el ejemplo que enseña que **elegir mal el algoritmo no se
compensa con nada**.

La otra salida es guardar los resultados ya calculados —memorización— para no
repetirlos, y eso convierte el árbol de llamadas en lineal sin abandonar la
recursión. Es la puerta a la programación dinámica de cursos posteriores.

### Cuándo usar cada una

Recursión cuando la definición del problema es recursiva y la iteración obligaría
a gestionar una pila a mano: recorridos de árboles, divide y vencerás, vuelta
atrás, Hanói.

Iteración cuando el problema es un recorrido lineal: sumar un vector, contar,
buscar. Escribir `suma` recursiva es un ejercicio, no una buena solución.

## Errores frecuentes

| Error | Síntoma |
| --- | --- |
| Sin caso base | desbordamiento de pila |
| Caso base inalcanzable | desbordamiento de pila con ciertas entradas |
| No converger hacia el caso base | igual |
| Llamar con el mismo argumento | recursión infinita inmediata |
| Recalcular subproblemas | correcto, y exponencial |
| Copiar estructuras grandes en cada llamada | correcto, y muy lento |

Los dos últimos son los peligrosos, porque el programa **funciona**: da el
resultado correcto y tarda lo que no debe. Ninguna herramienta avisa de eso, y por
eso el análisis del coste forma parte del diseño y no de la optimización
posterior. El diseño de algoritmos recursivos y su análisis están desarrollados en
\cite{garrido2005}, \cite{garrido2016met} y \cite{savitch2017}.
