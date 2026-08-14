# Algoritmos divide y vencerás

Tema 2 del programa. Partir un problema en subproblemas del mismo tipo,
resolverlos por separado y combinar sus soluciones.

## El esquema

```
funcion dyv(P):
    si P es suficientemente pequeño:
        devolver solucion_directa(P)
    dividir P en subproblemas P1, ..., Pk
    para cada Pi: Si = dyv(Pi)
    devolver combinar(S1, ..., Sk)
```

Tres piezas, y el coste sale de cómo se reparten:

| Pieza | Qué hace |
| --- | --- |
| Umbral y caso directo | resolver sin recursión los problemas pequeños |
| División | partir en subproblemas del mismo tipo y menor tamaño |
| Combinación | construir la solución a partir de las parciales |

Su coste responde a la recurrencia del tema 1:

$$T(n) = a\,T(n/b) + f(n)$$

con $a$ el número de subproblemas, $b$ el factor de reducción y $f(n)$ el coste de
dividir y combinar.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  level distance=13mm,
  level 1/.style={sibling distance=48mm},
  level 2/.style={sibling distance=24mm},
  every node/.style={draw, rounded corners=1pt, inner sep=3pt, font=\small}
]
\node {$n$}
  child { node {$n/2$}
    child { node {$n/4$} }
    child { node {$n/4$} } }
  child { node {$n/2$}
    child { node {$n/4$} }
    child { node {$n/4$} } };
\end{tikzpicture}
\end{center}
```

Cuándo compensa: cuando el coste de dividir y combinar es bajo frente al de
resolver el problema entero, y cuando los subproblemas son **independientes**. Si
se solapan, resolverlos por separado repite trabajo, y eso es lo que la
programación dinámica del tema 5 viene a corregir.

## El umbral

La recursión no se lleva hasta un elemento: por debajo de cierto tamaño el coste
de las llamadas supera al de resolver directamente.

```cpp
void ordenar(int v[], int izq, int der) {
    if (der - izq < UMBRAL) {
        insercion(v, izq, der);      // directo
        return;
    }
    // ... dividir y combinar
}
```

El umbral se determina midiendo, y suele estar entre 10 y 50 elementos. Es la
razón por la que las bibliotecas combinan la ordenación rápida con la inserción,
y la primera comprobación cuando un divide y vencerás resulta más lento de lo
esperado.

## Búsqueda binaria

El caso más simple: un subproblema, y la mitad del anterior.

```cpp
int buscar(const int v[], int izq, int der, int x) {
    if (izq > der) return -1;
    int centro = izq + (der - izq) / 2;
    if (v[centro] == x)     return centro;
    if (v[centro] < x)      return buscar(v, centro + 1, der, x);
    return buscar(v, izq, centro - 1, x);
}
```

$$T(n) = T(n/2) + \Theta(1) \implies T(n) \in \Theta(\log n)$$

Con $a = 1$ no hay ramificación: es una **reducción**, no una división. `izq +
(der - izq) / 2` en vez de `(izq + der) / 2` evita el desbordamiento cuando los
índices son grandes.

## Ordenación por mezcla

```cpp
void mezclar(int v[], int izq, int centro, int der) {
    vector<int> aux(der - izq + 1);
    int i = izq, j = centro + 1, k = 0;
    while (i <= centro && j <= der)
        aux[k++] = (v[i] <= v[j]) ? v[i++] : v[j++];
    while (i <= centro) aux[k++] = v[i++];
    while (j <= der)    aux[k++] = v[j++];
    for (int t = 0; t < k; t++) v[izq + t] = aux[t];
}

void ordenarMezcla(int v[], int izq, int der) {
    if (izq >= der) return;
    int centro = izq + (der - izq) / 2;
    ordenarMezcla(v, izq, centro);
    ordenarMezcla(v, centro + 1, der);
    mezclar(v, izq, centro, der);
}
```

$$T(n) = 2T(n/2) + \Theta(n) \implies T(n) \in \Theta(n \log n)$$

Aquí la división es trivial —partir por la mitad— y el trabajo está en la
combinación. `<=` en la comparación de `mezclar` es lo que hace el algoritmo
**estable**: ante dos elementos iguales se toma antes el de la izquierda. Con `<`
dejaría de serlo, y ese detalle importa cuando se ordena por un segundo criterio.

Su coste en memoria es $\Theta(n)$ por el vector auxiliar, y es su desventaja
frente a la ordenación rápida.

## Ordenación rápida

Aquí el trabajo está en la división y la combinación es gratuita.

```cpp
int particion(int v[], int izq, int der) {
    int pivote = v[der];
    int i = izq - 1;
    for (int j = izq; j < der; j++) {
        if (v[j] <= pivote) swap(v[++i], v[j]);
    }
    swap(v[i + 1], v[der]);
    return i + 1;
}

void ordenarRapida(int v[], int izq, int der) {
    if (izq >= der) return;
    int p = particion(v, izq, der);
    ordenarRapida(v, izq, p - 1);
    ordenarRapida(v, p + 1, der);
}
```

| Caso | Reparto | Recurrencia | Coste |
| --- | --- | --- | --- |
| Mejor | mitades iguales | $2T(n/2) + \Theta(n)$ | $\Theta(n \log n)$ |
| Medio | reparto razonable | — | $\Theta(n \log n)$ |
| Peor | uno vacío y otro de $n-1$ | $T(n-1) + \Theta(n)$ | $\Theta(n^2)$ |

El peor caso ocurre con el vector **ya ordenado** y el pivote al extremo, que es
justo la entrada que más aparece en la práctica. Se evita eligiendo el pivote como
mediana de tres, o al azar. Con pivote aleatorio el peor caso deja de depender de
la entrada y pasa a depender de la suerte, lo que impide construir un caso adverso
a propósito.

Frente a la mezcla: la rápida es in situ salvo la pila, tiene mejor constante y no
garantiza el orden en el peor caso; la mezcla garantiza $\Theta(n \log n)$ y es
estable, a cambio de $\Theta(n)$ de memoria.

## Selección: el $k$-ésimo menor

La misma partición, y solo se recurre **a un lado**:

```cpp
int seleccion(int v[], int izq, int der, int k) {
    if (izq == der) return v[izq];
    int p = particion(v, izq, der);
    int posicion = p - izq + 1;
    if (k == posicion) return v[p];
    if (k <  posicion) return seleccion(v, izq, p - 1, k);
    return seleccion(v, p + 1, der, k - posicion);
}
```

$$T(n) = T(n/2) + \Theta(n) \implies T(n) \in \Theta(n)$$

Encontrar la mediana **sin ordenar** cuesta lineal en el caso medio. Con el
algoritmo de la mediana de medianas se consigue $\Theta(n)$ también en el peor
caso, a costa de una constante grande.

## Multiplicación rápida

Dos casos donde divide y vencerás bate al algoritmo directo.

**Karatsuba**, para enteros grandes. El método clásico multiplica dos números de
$n$ dígitos en $\Theta(n^2)$. Partiéndolos por la mitad harían falta cuatro
productos:

$$x = x_1 B + x_0, \quad y = y_1 B + y_0$$
$$xy = x_1y_1 B^2 + (x_1y_0 + x_0y_1) B + x_0y_0$$

Karatsuba observa que el término central se obtiene con **un** producto más:

$$x_1y_0 + x_0y_1 = (x_1 + x_0)(y_1 + y_0) - x_1y_1 - x_0y_0$$

Con tres productos en vez de cuatro:

$$T(n) = 3T(n/2) + \Theta(n) \implies T(n) \in \Theta(n^{\log_2 3}) = \Theta(n^{1{,}585})$$

**Strassen**, para matrices. El método clásico es $\Theta(n^3)$; partir en bloques
da ocho productos, y Strassen los reduce a siete:

$$T(n) = 7T(n/2) + \Theta(n^2) \implies T(n) \in \Theta(n^{\log_2 7}) = \Theta(n^{2{,}807})$$

Los dos son el mismo truco: **cambiar multiplicaciones por sumas**, porque el
número de subproblemas es lo que domina la recurrencia. Y los dos tienen el mismo
problema práctico: su constante es grande, así que solo compensan a partir de
tamaños considerables.

## Cuándo no aplicar el esquema

| Situación | Qué pasa |
| --- | --- |
| Los subproblemas se solapan | se repite trabajo; usar programación dinámica |
| La combinación cuesta más que resolver | no se gana nada |
| El problema no se puede partir | no aplica |
| Se lleva la recursión hasta $n = 1$ | la sobrecarga domina; hay que poner umbral |

La primera fila es la que separa este tema del 5. Fibonacci escrito como divide y
vencerás es exponencial porque `fib(n-1)` y `fib(n-2)` comparten casi todo su
trabajo, y ningún ajuste del esquema lo arregla. El desarrollo de esta técnica y
sus análisis está en \cite{brassard1997}, \cite{cormen2022} y
\cite{verdegay2017}.
