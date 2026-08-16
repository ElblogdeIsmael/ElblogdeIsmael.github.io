# Metaheurísticas basadas en trayectorias

Tema 5 del programa. Una sola solución que se mueve por el espacio, y los distintos
mecanismos para que ese recorrido no muera en el primer óptimo local.

## El inconveniente de la búsqueda local

La búsqueda local del tema 2 termina cuando ningún vecino mejora, y ese punto es
un óptimo local respecto del entorno elegido. Nada garantiza que sea el global, y
en paisajes rugosos suele estar lejos.

Dos formas de medir el daño:

- **Calidad**: en instancias del viajante de tamaño medio, el 2-opt desde una
  solución aleatoria se queda entre un 5 y un 8 % por encima del óptimo, y no baja
  de ahí por mucho que se repita el mismo descenso.
- **Varianza**: dos ejecuciones desde puntos de partida distintos acaban en
  óptimos locales distintos, con diferencias grandes entre ellos. La solución
  depende más del azar inicial que del algoritmo.

Las respuestas de este tema se agrupan en tres ideas:

| Idea | Cómo | Algoritmos |
| --- | --- | --- |
| Aceptar empeoramientos | con una probabilidad que decrece | enfriamiento simulado |
| Prohibir volver atrás | con memoria explícita | búsqueda tabú |
| Empezar otra vez | desde otro punto, mejor elegido | multiarranque, GRASP, ILS |

## Enfriamiento simulado

Toma su esquema del recocido de los metales: se calienta el material y se enfría
despacio, de modo que los átomos tengan tiempo de reordenarse en una estructura de
energía baja. La analogía es fiel en un punto concreto: **a temperatura alta se
aceptan estados peores, y a temperatura baja casi no**.

```
funcion enfriamiento_simulado(s0, T0):
    s = s0;  mejor = s0;  T = T0
    mientras no parada:
        repetir L veces:
            s' = vecino_aleatorio(s)
            delta = f(s') - f(s)
            si delta < 0 o aleatorio() < exp(-delta / T):
                s = s'
                si f(s) < f(mejor): mejor = s
        T = enfriar(T)
    devolver mejor
```

El criterio de aceptación es el de Metropolis: un empeoramiento de tamaño $\Delta$
se acepta con probabilidad

$$P(\Delta, T) = e^{-\Delta / T}$$

Dos lecturas de esa fórmula, y las dos importan:

- **A $T$ alta**, el exponente es casi cero y la probabilidad casi uno: se acepta
  casi todo y la búsqueda es prácticamente aleatoria.
- **A $T$ baja**, la probabilidad se hunde y solo pasan los movimientos que
  mejoran: el algoritmo degenera en búsqueda local.
- **Para $T$ fija**, un empeoramiento pequeño se acepta mucho más que uno grande.
  Esto es lo que distingue al enfriamiento simulado de aceptar al azar: discrimina
  por cuánto se empeora, no solo por si se empeora.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.5cm, height=5cm,
  xlabel={$\Delta = f(s') - f(s)$},
  ylabel={$P$ de aceptar},
  xmin=0, xmax=10, ymin=0, ymax=1.08,
  legend pos=north east,
  legend style={font=\small},
  grid=major, grid style={dashed, gray!30},
  samples=100, domain=0:10
]
\addplot[thick] {exp(-x/8)};
\addlegendentry{$T = 8$}
\addplot[thick, dashed] {exp(-x/2)};
\addlegendentry{$T = 2$}
\addplot[thick, dotted] {exp(-x/0.5)};
\addlegendentry{$T = 0{,}5$}
\end{axis}
\end{tikzpicture}
\end{center}
```

### El esquema de enfriamiento

Es el parámetro que decide el rendimiento.

| Esquema | Fórmula | Comentario |
| --- | --- | --- |
| Geométrico | $T_{k+1} = \alpha T_k$, con $\alpha \in [0{,}8, 0{,}99]$ | el habitual, por simple |
| Lineal | $T_{k+1} = T_k - \beta$ | enfría demasiado deprisa al final |
| Cauchy | $T_k = T_0 / (1 + k)$ | más lento en la cola |
| Logarítmico | $T_k = T_0 / \log(1 + k)$ | garantiza el óptimo, en tiempo infinito |

El logarítmico es el único con garantía teórica de convergencia al óptimo global, y
es inútil en la práctica: exige más iteraciones que enumerar el espacio. Lo que se
usa es el geométrico, ajustando $\alpha$ al presupuesto disponible.

La **temperatura inicial** se fija de modo que al principio se acepte una fracción
dada de los empeoramientos, típicamente el 80 o el 90 %. Se estima muestreando
movimientos al azar, calculando el $\Delta$ medio y despejando $T_0$ de
$e^{-\bar\Delta / T_0} = 0{,}9$. Fijarla a ojo es la causa más común de que el
algoritmo no funcione: demasiado alta y malgasta la mitad del presupuesto haciendo
un paseo aleatorio; demasiado baja y es una búsqueda local desde el primer paso.

El número de iteraciones por temperatura, $L$, debe ser proporcional al tamaño del
entorno, para que a cada temperatura le dé tiempo a alcanzar el equilibrio.

## Búsqueda tabú

La otra respuesta clásica, y de naturaleza opuesta: en vez de aceptar
empeoramientos al azar, **se mueve siempre al mejor vecino aunque empeore**, y usa
memoria para no volver por donde ya ha pasado.

```
funcion busqueda_tabu(s0):
    s = s0;  mejor = s0;  T = lista_vacia
    mientras no parada:
        s' = mejor_vecino_no_tabu(s, T)
        si f(s') < f(mejor):            # criterio de aspiracion
            mejor = s'
        T.insertar(movimiento(s, s'))
        T.eliminar_los_mas_antiguos()
        s = s'
    devolver mejor
```

Sin la lista tabú, «moverse siempre al mejor vecino» produce un ciclo: desde un
óptimo local el mejor vecino es el que empeora menos, y desde él el mejor vecino
vuelve a ser el óptimo local. La búsqueda oscila entre dos puntos para siempre. La
**lista tabú** lo rompe prohibiendo deshacer los últimos movimientos.

### Qué se guarda en la lista

No la solución completa —comparar soluciones enteras es caro y ocupa mucho—, sino
el **atributo del movimiento**. En el viajante, las dos ciudades intercambiadas; en
representación binaria, el índice del bit invertido.

Eso hace la lista barata y trae un efecto secundario: prohibir un atributo prohíbe
también soluciones que nunca se han visitado. Es una pérdida asumida, y el
**criterio de aspiración** la compensa: un movimiento tabú se permite si lleva a
una solución mejor que la mejor conocida, porque entonces no puede estar
reincidiendo.

La **longitud de la lista** —el *tenor*— controla el equilibrio:

| Tenor | Efecto |
| --- | --- |
| Corto | intensifica; riesgo de ciclos largos |
| Largo | diversifica; puede prohibir toda la región buena |
| Variable | se alarga al estancarse y se acorta al mejorar |

Un valor de referencia es $\sqrt{n}$ con $n$ el tamaño del problema, ajustado
después de forma empírica.

### Memoria a largo plazo

La lista tabú es memoria a corto plazo. Una búsqueda tabú completa añade dos
mecanismos más:

- **Intensificación**: se registra la frecuencia con que cada atributo aparece en
  las buenas soluciones y se reinicia desde una construida con los más frecuentes.
- **Diversificación**: se penalizan los atributos más usados, forzando a la
  búsqueda a regiones que no ha visitado.

Las dos comparten estructura, una tabla de frecuencias, y se disparan cuando el
algoritmo lleva muchas iteraciones sin mejorar.

## Trayectorias múltiples

La tercera respuesta: en vez de arreglar un recorrido, hacer varios.

### Multiarranque básico

Repetir búsqueda local desde soluciones aleatorias y quedarse con la mejor. Es la
línea base contra la que hay que comparar cualquier técnica de este tema: si una
metaheurística no bate al multiarranque con el mismo presupuesto, no aporta nada.

Su defecto es que **no aprende**: cada arranque ignora todo lo que descubrieron los
anteriores. Las dos técnicas que siguen son dos formas de corregirlo.

### GRASP

*Greedy Randomized Adaptive Search Procedure*. Cada iteración construye una
solución con un voraz aleatorizado y luego la mejora con búsqueda local.

```
funcion grasp():
    mejor = nulo
    mientras no parada:
        s = construir_voraz_aleatorizado()
        s = busqueda_local(s)
        si f(s) < f(mejor): mejor = s
    devolver mejor
```

La fase de construcción es lo característico. En cada paso se ordenan los elementos
candidatos por su coste voraz y se forma la **lista restringida de candidatos**
—los mejores según un umbral— de la que se elige uno **al azar**:

$$\text{LRC} = \{\, e : c(e) \le c_{\min} + \alpha\,(c_{\max} - c_{\min}) \,\}$$

El parámetro $\alpha$ interpola entre los dos extremos:

| $\alpha$ | Comportamiento |
| ---: | --- |
| $0$ | voraz puro: la misma solución siempre, y una sola iteración útil |
| $1$ | aleatorio puro: equivale al multiarranque básico |
| $0{,}1$–$0{,}3$ | el rango útil: soluciones buenas y distintas entre sí |

Su ventaja sobre el multiarranque es que parte de soluciones ya razonables, así que
la búsqueda local tiene menos trabajo y termina en óptimos locales mejores.

### ILS

*Iterated Local Search*. En vez de empezar de cero, **perturba la mejor solución
encontrada** y vuelve a optimizar.

```
funcion ils(s0):
    s = busqueda_local(s0)
    mientras no parada:
        s' = perturbar(s)
        s' = busqueda_local(s')
        s  = aceptar(s, s')
    devolver s
```

Todo depende del tamaño de la perturbación, y el equilibrio es estrecho:

- **Demasiado pequeña**: la búsqueda local deshace la perturbación y devuelve al
  mismo óptimo local. El algoritmo se queda quieto sin que nada lo indique.
- **Demasiado grande**: la solución resultante no conserva nada de la anterior y
  el ILS degenera en multiarranque.

Un valor razonable en el viajante es el **doble puente**, que corta el recorrido en
cuatro tramos y los reordena: es un movimiento que el 2-opt **no puede deshacer**,
que es justo la propiedad que se necesita.

El criterio de aceptación fija cuánto se intensifica: aceptar solo si mejora es lo
más intensificador; aceptar siempre convierte el recorrido en un paseo aleatorio
por óptimos locales; aceptar con el criterio de Metropolis del enfriamiento simulado
es el punto intermedio.

### ILS híbrida

Sustituir la búsqueda local del ILS por el enfriamiento simulado. Se obtiene un
algoritmo que escapa de óptimos locales en dos escalas: la fina, dentro de cada
enfriamiento, y la gruesa, con la perturbación. Es de las combinaciones más
efectivas para problemas combinatorios con presupuesto medio.

## Búsqueda por entornos variables

La idea complementaria: un óptimo local **lo es respecto de un entorno concreto**.
Si al atascarse se cambia de entorno, deja de serlo.

```
funcion vns(s, entornos N1..Nk):
    mientras no parada:
        i = 1
        mientras i <= k:
            s' = aleatorio_de(Ni(s))
            s' = busqueda_local(s')
            si f(s') < f(s):
                s = s';  i = 1            # se vuelve al primero
            si no:
                i = i + 1                 # se pasa al siguiente
    devolver s
```

Los entornos se ordenan de menor a mayor. Mientras haya mejora se trabaja con el
más pequeño, que es el más barato, y solo al agotarlo se pasa a uno mayor. Volver a
$N_1$ tras cada mejora es lo que mantiene el coste bajo.

## Comparación

| Algoritmo | Memoria | Escapa por | Parámetros críticos |
| --- | --- | --- | --- |
| Búsqueda local | no | no escapa | entorno |
| Enfriamiento simulado | no | aceptar empeoramientos | $T_0$, $\alpha$, $L$ |
| Búsqueda tabú | sí, explícita | prohibir el retorno | tenor, aspiración |
| Multiarranque | no | reiniciar | ninguno |
| GRASP | no | reiniciar mejor | $\alpha$ de la LRC |
| ILS | implícita, en la solución actual | perturbar | tamaño de perturbación |
| VNS | no | cambiar de entorno | los entornos y su orden |

Ninguno domina a los demás en todos los problemas, y ese es el contenido práctico
del teorema de no hay comida gratis. Lo que decide es la comparación experimental
sobre el problema concreto, con las mismas evaluaciones para todos y varias
semillas por algoritmo.

El desarrollo detallado de estas técnicas está en \cite{talbi2009} y
\cite{chopard2018}; su análisis comparado en \cite{du2016}, y el catálogo de
aplicaciones en \cite{pardalos2002}.
