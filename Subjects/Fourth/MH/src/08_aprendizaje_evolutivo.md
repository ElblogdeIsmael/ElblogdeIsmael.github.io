# Aprendizaje evolutivo: problemas y modelos

Tema 8 del programa. Plantear el aprendizaje automático como un problema de
optimización y resolverlo con metaheurísticas.

## El aprendizaje como problema de optimización

Aprender de datos es buscar, dentro de un espacio de modelos, el que mejor explica
un conjunto de ejemplos. Escrito con la notación del tema 1:

| Pieza | En aprendizaje |
| --- | --- |
| Espacio de búsqueda $S$ | los modelos posibles: pesos, reglas, estructuras |
| Función objetivo $f$ | el error sobre los datos, más un término de complejidad |
| Restricciones | la forma admisible del modelo |

$$f(m) = \text{error}(m, D) + \lambda\,\text{complejidad}(m)$$

El segundo término es la **regularización**, y sin él el proceso encuentra modelos
que memorizan los datos de entrenamiento y fallan con datos nuevos. Es la forma que
toma aquí el sobreajuste: el algoritmo optimiza exactamente lo que se le pide, y si
lo que se le pide es el error de entrenamiento, eso es lo que minimiza.

De ahí sale la regla de trabajo: **el error que guía la búsqueda se calcula sobre
entrenamiento y el que se informa sobre un conjunto de prueba separado**, que el
algoritmo no ha visto nunca. Un resultado medido sobre los datos con los que se
optimizó no dice nada.

## Cuándo compensa una metaheurística

Los métodos clásicos de aprendizaje usan el gradiente, que es mucho más eficiente
cuando se puede calcular. Las metaheurísticas entran en los casos en que no:

| Situación | Por qué falla el gradiente |
| --- | --- |
| La función objetivo no es derivable | no hay gradiente que calcular |
| El espacio es discreto o mixto | seleccionar atributos, elegir estructura |
| Hay muchos óptimos locales | el descenso se queda en el primero |
| El objetivo es una simulación o una caja negra | no se conoce la forma analítica |
| Hay varios objetivos en conflicto | precisión frente a interpretabilidad |

Y la contrapartida, que conviene decir: **con un problema derivable y convexo, una
metaheurística es la herramienta equivocada**. El descenso de gradiente lo resuelve
en órdenes de magnitud menos tiempo y con garantía.

## Modelos de aprendizaje basados en metaheurísticas

Tres niveles, según qué parte del modelo se optimiza:

| Nivel | Qué se busca | Espacio |
| --- | --- | --- |
| Parámetros | los valores del modelo, con la estructura fija | continuo |
| Estructura | la forma del modelo | discreto |
| Preprocesado | qué datos y qué atributos entran | binario |

### Selección de características

El caso más limpio y el más usado. Con $n$ atributos hay $2^n$ subconjuntos, así que
la enumeración deja de ser viable enseguida.

- **Representación**: vector binario de $n$ bits, uno por atributo.
- **Función objetivo**: la precisión del clasificador entrenado solo con los
  atributos seleccionados, penalizando el número de atributos.
- **Operadores**: cruce uniforme y mutación por bit.

$$f(v) = \text{precisión}(v) - \lambda \frac{\lvert v \rvert}{n}$$

El coste está en la evaluación: cada individuo exige entrenar y validar un modelo.
Con validación cruzada de cinco particiones, una población de 50 durante 100
generaciones son 25 000 entrenamientos. Aquí la paralelización de la evaluación del
tema 7 no es una mejora, es lo que hace el experimento posible.

Este planteamiento se llama **envolvente** porque envuelve al clasificador y lo trata
como una caja negra. Encuentra subconjuntos mejores que los métodos de filtro, que
puntúan cada atributo por separado, porque tiene en cuenta las interacciones entre
atributos; y es mucho más caro.

### Optimización de parámetros

Ajustar los pesos de un modelo cuya estructura está fija: los pesos de una red
neuronal, los parámetros de una función de pertenencia, los coeficientes de un
controlador.

Con redes neuronales, entrenar los pesos con un algoritmo evolutivo se llama
**neuroevolución**. Frente a la retropropagación:

| | Retropropagación | Neuroevolución |
| --- | --- | --- |
| Necesita gradiente | sí | no |
| Función de activación | derivable | cualquiera |
| Óptimos locales | se atasca | escapa |
| Velocidad | mucho mayor | mucho menor |
| Puede optimizar la topología | no | sí |

Para redes grandes la retropropagación gana con diferencia. La neuroevolución tiene
su sitio en redes pequeñas, en aprendizaje por refuerzo donde no hay una señal de
error derivable, y cuando lo que se busca **es** la topología además de los pesos.

## Aprendizaje evolutivo de reglas

Un modelo basado en reglas del tipo

```
SI temperatura ALTA Y humedad BAJA ENTONCES clase = riesgo
```

es legible por una persona, y esa es su razón de ser: en dominios donde hay que
justificar la decisión —médico, financiero, legal— un modelo interpretable vale más
que uno algo más preciso que no lo sea.

El espacio de las bases de reglas es discreto, enorme y sin gradiente. Es terreno
natural para los algoritmos evolutivos, y hay tres formas de codificarlo:

| Enfoque | Un individuo es | Ventaja | Problema |
| --- | --- | --- | --- |
| **Pittsburgh** | una base de reglas completa | la aptitud mide lo que interesa | cromosomas largos y variables |
| **Michigan** | una sola regla | cromosomas cortos | la aptitud de una regla no mide la base |
| **IRL** | una regla por ejecución, iterando | control del proceso | las reglas no se optimizan juntas |

El enfoque de **Pittsburgh** evalúa lo correcto —el rendimiento del conjunto— a costa
de manejar cromosomas de longitud variable, lo que obliga a operadores de cruce
específicos. El de **Michigan** es barato pero arrastra un problema de fondo: una
regla individual buena no garantiza que la base lo sea, porque lo que importa es
cómo se cubren entre ellas. **IRL**, aprendizaje iterativo de reglas, extrae una
regla, marca los ejemplos que cubre y repite; es un voraz, y como todo voraz puede
dejar un residuo difícil al final.

En el caso de reglas difusas hay que decidir además qué se optimiza: solo la parte
antecedente, solo las funciones de pertenencia, o las dos a la vez. Lo último se
llama **aprendizaje simultáneo** y es lo que da mejores resultados, a costa de un
espacio de búsqueda mucho mayor.

## Aprendizaje evolutivo de parámetros y modelos

El nivel más alto: dejar que el algoritmo decida también la **forma** del modelo.

- **Selección de modelo**: elegir entre árbol, red neuronal o máquina de vectores
  soporte, y su configuración.
- **Optimización de hiperparámetros**: profundidad del árbol, número de capas, tasa
  de aprendizaje, constante de regularización.
- **Búsqueda de arquitecturas neuronales**: qué capas y cómo se conectan.
- **AutoML**: la cadena completa —preprocesado, selección de atributos, modelo e
  hiperparámetros— optimizada a la vez.

La dificultad propia de este nivel es que el espacio es **mixto y condicional**:
mezcla variables continuas, enteras y categóricas, y algunas solo tienen sentido si
otra toma cierto valor —el número de capas solo importa si se eligió una red—. Los
operadores tienen que respetar esa condicionalidad, o la mitad de los individuos
serán configuraciones sin sentido.

Y una advertencia que vale para todo el tema: cada evaluación entrena un modelo, así
que el presupuesto es de decenas o centenares de evaluaciones, no de millones. En
ese régimen conviene una población pequeña, una búsqueda local que aproveche cada
evaluación, y un modelo sustituto que estime la aptitud de los candidatos malos sin
llegar a entrenarlos.

## Un experimento bien planteado

Reuniendo lo que la asignatura pide en cada tema, así se compara un algoritmo:

1. **Instancias**: un banco de pruebas público y reconocido, no instancias propias.
2. **Presupuesto**: el mismo número de **evaluaciones** para todos los algoritmos.
   Comparar por tiempo mezcla el algoritmo con la implementación; comparar por
   iteraciones favorece al que más hace en cada una.
3. **Repeticiones**: varias ejecuciones con semillas distintas, porque son
   algoritmos estocásticos.
4. **Estadísticos**: media y desviación típica, no el mejor de las ejecuciones. El
   mejor de treinta corridas mide la suerte.
5. **Contraste**: pruebas no paramétricas —Wilcoxon para dos algoritmos, Friedman
   con un test *post hoc* para varios—, porque los resultados no suelen ser normales
   y las muestras son pequeñas.
6. **Parámetros**: los mismos criterios de ajuste para todos, ajustados sobre
   instancias distintas de las de la comparación.

El punto 4 es donde más se falla, y el 6 el que más resultados invalida: ajustar el
algoritmo propio a fondo y dejar el de referencia con sus valores por defecto
produce una ventaja que no es del algoritmo.

Los modelos de aprendizaje evolutivo y su encaje en la computación evolutiva están
en \cite{eiben2015} y \cite{du2016}; el planteamiento como optimización y las
aplicaciones, en \cite{talbi2009} y \cite{pardalos2002}.
