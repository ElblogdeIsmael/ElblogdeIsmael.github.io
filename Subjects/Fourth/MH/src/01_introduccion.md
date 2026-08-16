# Introducción a las metaheurísticas

Tema 1 del programa. Qué hace que un problema de optimización sea intratable, qué
se puede ofrecer cuando el óptimo está fuera de alcance y qué es exactamente una
metaheurística.

## El problema de optimización

Un problema de optimización queda descrito por tres piezas:

| Pieza | Notación | Qué es |
| --- | --- | --- |
| Espacio de búsqueda | $S$ | el conjunto de todas las soluciones posibles |
| Función objetivo | $f: S \to \mathbb{R}$ | lo que mide la calidad de una solución |
| Restricciones | $s \in F \subseteq S$ | qué soluciones son admisibles |

Resolverlo es encontrar

$$s^* = \argmin_{s \in F} f(s)$$

para un problema de minimización, o el $\argmax$ si se maximiza. Los dos son el
mismo problema: minimizar $f$ equivale a maximizar $-f$, así que el temario habla
de minimización y lo demás se traduce cambiando el signo.

Dos distinciones que condicionan todo lo que sigue:

- **Combinatorio o continuo.** En el combinatorio $S$ es finito —permutaciones,
  subconjuntos, asignaciones— y en el continuo es un subconjunto de
  $\mathbb{R}^n$. El primero se recorre; el segundo se muestrea.
- **Óptimo global u óptimo local.** $s^*$ es global si $f(s^*) \le f(s)$ para todo
  $s \in F$, y local si la desigualdad solo vale dentro de un entorno de $s^*$.
  Casi todo lo que este temario construye existe para salir de los locales.

## Complejidad de los problemas

La razón por la que hacen falta las metaheurísticas es que la mayoría de los
problemas de optimización interesantes no admiten un algoritmo exacto eficiente.

| Clase | Qué significa |
| --- | --- |
| **P** | resolubles en tiempo polinómico por una máquina determinista |
| **NP** | una solución candidata se **verifica** en tiempo polinómico |
| **NP-completo** | está en NP y todo problema de NP se reduce a él en tiempo polinómico |
| **NP-duro** | todo problema de NP se reduce a él, pero puede no estar en NP |

Un problema de optimización cuya versión de decisión es NP-completa es NP-duro. Y
para un NP-duro no se conoce ningún algoritmo exacto de coste polinómico; si
alguien encontrara uno, tendría P = NP.

El caso de referencia es el **viajante de comercio**: dadas $n$ ciudades y las
distancias entre ellas, encontrar el recorrido más corto que las visita todas una
vez. El espacio de búsqueda tiene $(n-1)!/2$ recorridos distintos.

| $n$ | Recorridos | Tiempo a $10^9$ por segundo |
| ---: | ---: | --- |
| 10 | $1{,}8 \times 10^5$ | instantáneo |
| 20 | $6{,}1 \times 10^{16}$ | 2 años |
| 30 | $4{,}4 \times 10^{30}$ | $1{,}4 \times 10^{14}$ años |

Treinta ciudades es un problema pequeño, y la enumeración exhaustiva ya no
termina. La ramificación y poda recorta el árbol, pero su peor caso sigue siendo
exponencial y basta una instancia adversa para alcanzarlo.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.5cm, height=5.6cm,
  xlabel={Tamaño del problema $n$},
  ylabel={Operaciones},
  ymode=log,
  xmin=1, xmax=25, ymin=1, ymax=1e22,
  legend pos=north west,
  legend style={font=\small},
  grid=major, grid style={dashed, gray!30},
  samples=60
]
\addplot[thick, domain=1:25] {x^2};
\addlegendentry{$n^2$}
\addplot[thick, dashed, domain=1:25] {x^3};
\addlegendentry{$n^3$}
\addplot[thick, dotted, domain=1:25] {2^x};
\addlegendentry{$2^n$}
\addplot[thick, dashdotted, domain=1:21] {exp(ln(x)*x - x + 0.5*ln(6.2832*x))};
\addlegendentry{$n!$}
\end{axis}
\end{tikzpicture}
\end{center}
```

La escala del eje vertical es logarítmica, así que una recta es crecimiento
exponencial. Ninguna mejora de la máquina cambia la forma de esas dos últimas
curvas: duplicar la velocidad del procesador añade **una** ciudad al tamaño
abordable por enumeración.

## Algoritmos aproximados

Cuando el óptimo no se puede garantizar, se renuncia a él a cambio de tiempo. Las
opciones no son equivalentes:

| Tipo | Qué garantiza | Qué cuesta |
| --- | --- | --- |
| Exacto | el óptimo | tiempo exponencial en el peor caso |
| Aproximación | una cota sobre el error, del tipo $f(s) \le \rho f(s^*)$ | polinómico, pero solo existe para algunos problemas |
| Heurística | nada demostrable | rápido, y depende del problema |
| Metaheurística | nada demostrable | ajustable: más tiempo, mejor solución |

Un **algoritmo de aproximación** es el caso cómodo: para el viajante con
distancias métricas, el algoritmo de Christofides garantiza una solución a lo sumo
un 50 % peor que la óptima. El problema es que esas garantías no existen para la
mayoría de los problemas reales, y cuando existen la cota suele ser demasiado
holgada para servir de algo.

Una **heurística** es una regla razonable, atada a un problema concreto: en el
viajante, «ir siempre a la ciudad no visitada más cercana». Se programa en veinte
líneas, corre en un instante y no ofrece ninguna garantía; en instancias adversas
puede quedarse muy lejos.

La diferencia práctica entre las dos últimas filas está en **cómo se comportan al
darles más tiempo**. Una heurística constructiva termina y devuelve lo que ha
construido: correrla el doble de tiempo no mejora nada. Una metaheurística usa el
tiempo extra para seguir explorando, y su curva de calidad frente a tiempo es
creciente. Por eso la pregunta que ordena la asignatura no es «¿cuál es el mejor
algoritmo?», sino «¿qué calidad se alcanza con el presupuesto de tiempo que hay?».

## Concepto de metaheurística

Una metaheurística es una **estrategia de alto nivel** que guía a otras
heurísticas subordinadas en la exploración del espacio de búsqueda. El prefijo
*meta* es justamente eso: no resuelve el problema, organiza a quien lo resuelve.

Sus rasgos:

- **Independiente del problema.** El esquema es el mismo para el viajante que
  para el entrenamiento de una red neuronal. Lo que cambia son las piezas que se
  le enchufan: representación, función objetivo y operadores.
- **No exacta.** No garantiza el óptimo ni una cota sobre la distancia a él.
- **Estocástica**, en casi todos los casos. Dos ejecuciones con la misma entrada
  dan resultados distintos, y por eso los resultados se informan como media y
  desviación típica sobre varias semillas, nunca como un número suelto.
- **Guiada por un compromiso** entre explorar el espacio y explotar lo que ya se
  ha encontrado.

### Diversificación y intensificación

Es el eje sobre el que se explica toda la asignatura.

| | Diversificación | Intensificación |
| --- | --- | --- |
| Qué hace | visitar regiones nuevas del espacio | refinar lo que ya se tiene |
| Si sobra | la búsqueda se vuelve aleatoria y no converge | se queda atrapada en el primer óptimo local |
| Ejemplo | reinicio desde una solución aleatoria | búsqueda local sobre la mejor solución |

Todo lo que viene después son formas distintas de repartir el presupuesto entre
las dos. El enfriamiento simulado lo hace con una temperatura que decrece; la
búsqueda tabú, con una memoria que prohíbe deshacer lo recién hecho; los
algoritmos genéticos, con la mutación de un lado y la selección del otro.

### Componentes que hay que fijar

Antes de aplicar cualquier metaheurística a un problema hay que decidir cuatro
cosas, y el temario vuelve a ellas en cada tema:

1. **Representación.** Cómo se codifica una solución: vector binario, permutación,
   vector real, árbol. Determina qué operadores son posibles.
2. **Función objetivo.** Cómo se evalúa. Su coste manda en el diseño: si evaluar
   es caro, el número de evaluaciones es el presupuesto real.
3. **Operadores.** Cómo se genera una solución nueva a partir de las que hay:
   vecindario, cruce, mutación.
4. **Criterio de parada.** Número de evaluaciones, tiempo, o estancamiento
   durante un número de iteraciones.

De las cuatro, la representación es la que más decisiones arrastra. Codificar un
recorrido del viajante como permutación hace natural el intercambio de dos
ciudades y absurdo el cruce en un punto, que produciría recorridos con ciudades
repetidas.

## Clasificación

Las metaheurísticas del programa se ordenan por cuántas soluciones mantienen
vivas a la vez:

| Familia | Soluciones activas | Temas | Ejemplos |
| --- | --- | --- | --- |
| Basadas en trayectorias | una | 5 | enfriamiento simulado, búsqueda tabú, GRASP, ILS |
| Basadas en poblaciones | muchas | 3, 6 | algoritmos genéticos, evolución diferencial, hormigas, nubes de partículas |
| Híbridas | ambas | 4 | algoritmos meméticos |

Y por otros dos criterios que reaparecen:

- **Con memoria o sin ella.** La búsqueda tabú recuerda de forma explícita por
  dónde ha pasado; el enfriamiento simulado no recuerda nada.
- **Inspiradas en la naturaleza o no.** Los algoritmos genéticos, las hormigas y
  las nubes de partículas toman su esquema de un fenómeno natural. La inspiración
  ayuda a explicar el algoritmo y **no** es un argumento a favor de su
  rendimiento: lo que decide es la comparación experimental.

El programa sigue este orden: primero poblaciones (tema 3), luego su hibridación
con búsqueda local (tema 4), después trayectorias (tema 5) y por último la
adaptación social (tema 6). Los temas 7 y 8 son los aspectos avanzados y una
aplicación completa.

Los tratamientos generales de este marco están en \cite{talbi2009},
\cite{chopard2018} y \cite{du2016}, y el catálogo de problemas y aplicaciones en
\cite{pardalos2002}.
