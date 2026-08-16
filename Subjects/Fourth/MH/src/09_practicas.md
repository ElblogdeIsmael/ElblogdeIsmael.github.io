# Prácticas y seminarios

El temario práctico de la guía docente: tres prácticas de laboratorio, las
prácticas de pizarra y los cinco seminarios. El código de las tres prácticas está
en el repositorio [`metaheuristics`](https://github.com/Ismael-Sallami/metaheuristics),
con quince algoritmos implementados sobre dos problemas.

## Los dos problemas del banco de pruebas

Las prácticas no cambian de problema en cada entrega: se resuelven los mismos dos
con técnicas distintas, que es lo que permite comparar.

**Selección de cartera de Markowitz.** Repartir un capital entre $n$ activos
minimizando el riesgo para una rentabilidad exigida:

$$\min_{w} \; w^{\top} \Sigma\, w
\quad \text{sujeto a} \quad
\sum_i w_i = 1, \quad \sum_i \mu_i w_i \ge R, \quad w_i \ge 0$$

con $\Sigma$ la matriz de covarianzas de los rendimientos y $\mu$ el vector de
rendimientos esperados. Es continuo y restringido; sin restricciones adicionales
tiene solución analítica, y lo que lo hace duro es añadir la **cardinalidad**:
obligar a que como mucho $k$ activos tengan peso no nulo convierte el problema en
mixto y NP-duro.

Las restricciones se tratan con las estrategias del tema 2: la de suma uno se cierra
en la representación normalizando el vector, y la de rentabilidad mínima se penaliza.

**Banco de funciones CEC'17.** El conjunto de referencia para optimización continua:
treinta funciones —unimodales, multimodales, híbridas y compuestas— definidas en
$[-100, 100]^D$ con el óptimo desplazado y rotado a propósito.

El desplazamiento y la rotación no son un adorno. Sin ellos el óptimo cae en el
origen, y un algoritmo que tienda al centro del dominio acierta sin buscar nada. La
rotación además elimina la separabilidad, con lo que optimizar coordenada a
coordenada deja de funcionar.

| Grupo | Qué mide |
| --- | --- |
| Unimodales (1–3) | velocidad de convergencia |
| Multimodales simples (4–10) | capacidad de escapar de óptimos locales |
| Híbridas (11–20) | comportamiento con subconjuntos de variables de distinta naturaleza |
| Compuestas (21–30) | robustez global |

El protocolo del banco fija el presupuesto en $10\,000 \cdot D$ evaluaciones y exige
51 ejecuciones por función, informando el error respecto del óptimo conocido. Es la
concreción de las reglas experimentales del tema 8.

## P1 · Técnicas de búsqueda local

La primera práctica implementa lo del tema 2 y el principio del 5, que es la base
sobre la que se mide todo lo demás.

| Algoritmo | Qué aporta |
| --- | --- |
| Búsqueda aleatoria | la línea base absoluta: si un algoritmo no la bate, está mal |
| Búsqueda local del primer mejor | el descenso, con exploración aleatorizada del entorno |
| Búsqueda local del mejor | el descenso completo, más caro por paso |
| Multiarranque básico | repetir el descenso desde puntos distintos |

Lo que se comprueba aquí, y condiciona el resto del curso:

- La búsqueda local mejora enormemente sobre la aleatoria en pocas evaluaciones y
  luego **se planta**. La curva de calidad frente a evaluaciones se aplana, y esa
  meseta es el óptimo local.
- El primer mejor suele batir al mejor con presupuesto fijo, porque hace muchos más
  pasos con las mismas evaluaciones.
- El multiarranque mejora poco: cada arranque parte de cero e ignora todo lo
  descubierto.

Sobre la cartera, la búsqueda local en el continuo se implementa con mutación
gaussiana sobre los pesos seguida de normalización, que es la forma de mantener la
representación cerrada.

## P2 · Poblaciones: genéticos y meméticos

La segunda cubre los temas 3 y 4. Las variantes que se comparan:

| Variante | Configuración |
| --- | --- |
| AGG | genético generacional con elitismo |
| AGE | genético estacionario |
| AM-(10,1.0) | memético, búsqueda local a toda la población cada 10 generaciones |
| AM-(10,0.1) | memético, al 10 % elegido al azar |
| AM-(10,0.1mej) | memético, al 10 % mejor |

Los tres meméticos aíslan la decisión del tema 4 sobre a cuántos individuos aplicar
la búsqueda local, con todo lo demás igual. Es la forma correcta de medirla: si se
cambian dos cosas a la vez, el resultado no atribuye la diferencia a ninguna.

Lo que se observa:

- Los meméticos baten a los genéticos puros con claridad, y la diferencia crece con
  el tamaño del problema.
- Aplicar la búsqueda local a toda la población es lo peor de los tres: gasta el
  presupuesto en refinar individuos mediocres.
- El estacionario converge antes que el generacional y con más riesgo de
  estancarse; el elitismo en el generacional no es opcional.

## P3 · Trayectorias: enfriamiento, multiarranque, GRASP e ILS

La tercera cubre el resto del tema 5:

| Algoritmo | Qué se compara |
| --- | --- |
| Enfriamiento simulado | el esquema de enfriamiento y $T_0$ |
| Búsqueda multiarranque básica | la línea base de reinicio |
| GRASP | construcción voraz aleatorizada más descenso |
| ILS | perturbación sobre la mejor solución |
| ILS híbrida | perturbación más enfriamiento simulado |

El resultado que suele salir es que el ILS y su versión híbrida quedan por delante,
porque conservan parte de la estructura de la mejor solución en vez de tirarla en
cada reinicio. Y que el enfriamiento simulado depende mucho más de sus parámetros
que el resto: mal calibrado queda por debajo del multiarranque.

**Aviso sobre el repositorio.** La práctica 3 no compila tal como está publicada: su
`CMakeLists.txt` incluye un directorio `common/` que nunca llegó a subirse. Está
documentado en el README del repositorio y en su lista de fallos conocidos, y ahí se
queda: el criterio del repositorio es afirmar los defectos de lo entregado, no
reescribirlo después.

## Prácticas de pizarra

La guía las plantea aparte de las de laboratorio, y son las que fuerzan a diseñar en
vez de programar. Dos bloques:

**Problemas clásicos.** Dado un problema —viajante, mochila, coloreado, asignación
cuadrática, horarios—, decidir las cuatro piezas del tema 1: representación, función
objetivo, operadores y criterio de parada. La parte que más discusión da es la
primera, porque arrastra todas las demás.

**Problemas con restricciones.** El mismo ejercicio cuando el espacio admisible es
una fracción del total. Se decide entre representación cerrada, reparación,
penalización y rechazo, con el orden de preferencia del tema 2. Un caso típico: en
horarios, «dos asignaturas del mismo curso no pueden solaparse» se puede cerrar en
la representación si se codifica por franjas, y hay que penalizar si se codifica por
asignaturas.

## Seminarios

| Seminario | Contenido |
| --- | --- |
| S1 | ejemplos de resolución con metaheurísticas y software disponible |
| S2 | optimización con metaheurísticas basadas en búsqueda local |
| S3 | optimización con metaheurísticas basadas en poblaciones |
| S4 | técnicas basadas en trayectorias simples y múltiples |
| S5 | manejo de restricciones |

El S1 recorre las bibliotecas que evitan reimplementar lo estándar —jMetal, DEAP,
ECJ, Optuna para hiperparámetros—, y conviene tomarlo en serio por una razón
concreta: una implementación propia de un algoritmo de referencia mal ajustada
convierte cualquier comparación en un resultado falso a favor del algoritmo nuevo,
que es el error que el tema 8 señala como el que más resultados invalida.

Las implementaciones de referencia y su discusión están en \cite{talbi2009} y
\cite{eiben2015}; los problemas de cartera y su formulación, en \cite{pardalos2002}.
