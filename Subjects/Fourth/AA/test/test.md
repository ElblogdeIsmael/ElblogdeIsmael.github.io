# Test Aprendizaje Automático — Tests por temas

* **Autor:** Ismael Sallami Moreno
* **Descripción:** Batería de preguntas tipo test de la teoría de la asignatura Aprendizaje Automático. El cuestionario es acumulativo: cubre todos los temas de la asignatura y se amplía progresivamente conforme se avanza en el temario. Incluye el Tema 1 (Conceptos básicos), el Tema 2 (Aprendizaje supervisado, Partes I y II), el Tema 3 (Calidad de Datos, Partes I y II), el Tema 4 (Aprendizaje no supervisado), el Tema 5 (Aprendizaje profundo: fundamentos, Partes I y II), el Tema 6 (Aprendizaje profundo en distintos datos: redes convolucionales y Transformers) y el Tema 9 (Aspectos avanzados: XAI, AI Safety, OOD, causalidad y aprendizaje continuo).
* **Titulación:** Doble Grado en Ingeniería Informática y ADE

---

<!-- Tema 1 - Conceptos básicos -->

1. Según la definición de Arthur Samuel (1959), ¿qué es el aprendizaje automático?

    - ( ) Una rama de la estadística dedicada únicamente a resumir datos históricos
    - ( ) Un sistema de reglas codificadas a mano por expertos para cada caso posible
    - (x) El campo de estudio que da a los ordenadores la capacidad de aprender sin ser programados explícitamente
    - ( ) Una técnica de hardware para ejecutar algoritmos tradicionales con más rapidez

2. En la definición de Tom Mitchell (1997) con tarea T, experiencia E y rendimiento P, un programa aprende si...

    - ( ) la tarea T se simplifica a medida que se reduce la experiencia E disponible
    - (x) su rendimiento en T, medido por P, mejora con la experiencia E
    - ( ) la medida P deja de ser necesaria cuando la tarea T es suficientemente simple
    - ( ) la experiencia E sustituye por completo a la medida de rendimiento P

3. En el ejemplo del filtro antispam, ¿qué representa la experiencia E?

    - ( ) La tarea de etiquetar como spam los nuevos correos entrantes
    - ( ) La proporción de correos clasificados de forma correcta
    - ( ) El umbral de decisión que separa el spam del correo legítimo
    - (x) Los datos de entrenamiento formados por correos spam y no spam

4. En el ejemplo del filtro antispam, ¿cuál suele ser la medida de rendimiento P?

    - (x) La precisión, entendida como proporción de correos clasificados correctamente
    - ( ) El volumen total de correos electrónicos procesados por el filtro
    - ( ) El número de reglas manuales definidas en el sistema de filtrado
    - ( ) La velocidad media de entrega de los correos legítimos

5. ¿Cómo se denomina cada ejemplo individual del conjunto de entrenamiento?

    - ( ) Etiqueta, el valor objetivo asociado al ejemplo
    - ( ) Predictor, cada una de las características de entrada
    - (x) Instancia o muestra de entrenamiento
    - ( ) Medida de rendimiento del clasificador

6. ¿En qué tipo de problemas resulta especialmente útil el aprendizaje automático?

    - ( ) Problemas triviales que se resuelven con una sola regla fija y conocida
    - ( ) Tareas con una solución matemática cerrada, exacta y sin variabilidad
    - ( ) Situaciones en las que no se dispone de datos ni observaciones previas
    - (x) Problemas con reglas muy extensas, problemas complejos y entornos cambiantes

7. La exploración de grandes volúmenes de datos para descubrir relaciones no evidentes se denomina...

    - ( ) Regularización, restricción del modelo para reducir el sobreajuste
    - (x) Minería de datos, descubrimiento de relaciones ocultas
    - ( ) Validación cruzada para estimar el error de generalización
    - ( ) Ingeniería del conocimiento mediante reglas escritas a mano

8. La detección de fraudes con tarjetas de crédito se aborda habitualmente como un problema de...

    - ( ) Agrupación de clientes en segmentos homogéneos
    - ( ) Regresión sobre el importe de cada transacción
    - (x) Detección de anomalías
    - ( ) Sistema de recomendación de productos financieros

9. Segmentar a los clientes según sus compras para diseñar estrategias de marketing distintas es un caso de...

    - (x) Agrupación (clustering)
    - ( ) Clasificación supervisada con etiquetas conocidas
    - ( ) Regresión lineal sobre el gasto medio
    - ( ) Aprendizaje por refuerzo basado en recompensas

10. En la formalización del aprendizaje, ¿qué representa el riesgo R?

    - ( ) La función de pérdida o error calculada sobre un único ejemplo
    - (x) La pérdida promedio del modelo
    - ( ) El conjunto de parámetros que fijan el modelo
    - ( ) La distribución p(x,y), que se supone perfectamente conocida

11. ¿Qué caracteriza al aprendizaje supervisado?

    - ( ) Los datos de entrenamiento carecen por completo de etiquetas
    - ( ) El sistema aprende interactuando con un entorno mediante recompensas
    - ( ) Solo una fracción mínima de los datos dispone de etiqueta
    - (x) El conjunto de entrenamiento incluye las soluciones deseadas (etiquetas)

12. ¿Cuál es la diferencia entre clasificación y regresión?

    - ( ) La clasificación predice un valor numérico y la regresión asigna una clase
    - (x) La clasificación asigna una clase y la regresión predice un valor numérico
    - ( ) Ambas predicen siempre valores numéricos continuos
    - ( ) La regresión solo se aplica en aprendizaje no supervisado

13. En una tarea de regresión, las características de entrada (kilometraje, antigüedad, marca...) se llaman...

    - ( ) Etiquetas del modelo
    - ( ) Clases objetivo
    - (x) Predictores
    - ( ) Clusters de datos

14. ¿Cuál es la descripción correcta del conjunto de datos Iris?

    - (x) Tres clases (setosa, versicolor, virginica), cuatro atributos y 150 ejemplos
    - ( ) Dos clases, cuatro atributos y un total de 150 ejemplos
    - ( ) Tres clases, dos atributos y un total de 100 ejemplos
    - ( ) Una variable continua a predecir con cuatro atributos de entrada

15. ¿Cuál de los siguientes es un algoritmo de aprendizaje supervisado?

    - ( ) K-Means
    - ( ) DBSCAN
    - ( ) Apriori
    - (x) Máquinas de vectores soporte (SVM)

16. Cuando solo una parte pequeña de los datos está etiquetada y el resto no, se habla de...

    - ( ) Aprendizaje supervisado con etiquetas completas
    - ( ) Aprendizaje por refuerzo guiado por recompensas
    - (x) Aprendizaje semi-supervisado
    - ( ) Aprendizaje no supervisado en sentido estricto

17. ¿Qué caracteriza al aprendizaje no supervisado?

    - ( ) El conjunto de entrenamiento contiene etiquetas para cada instancia
    - (x) Los datos de entrenamiento no están etiquetados y el sistema aprende sin un profesor
    - ( ) El sistema recibe recompensas y penalizaciones por sus acciones
    - ( ) Cada predicción se compara con una solución previamente conocida

18. ¿Cuál de las siguientes es una tarea típica del aprendizaje no supervisado?

    - (x) Agrupamiento (clustering)
    - ( ) Regresión sobre un valor numérico objetivo
    - ( ) Clasificación de correos en spam y ham
    - ( ) Predicción de etiquetas conocidas de antemano

19. ¿Cuál de los siguientes es un algoritmo de agrupamiento (clustering)?

    - ( ) Análisis de componentes principales (PCA)
    - ( ) Algoritmo Apriori de reglas de asociación
    - ( ) Regresión logística binaria
    - (x) K-Means

20. PCA, Kernel PCA, LLE y t-SNE son técnicas de...

    - ( ) Agrupamiento jerárquico de instancias
    - ( ) Detección de anomalías y novedades
    - (x) Reducción de la dimensionalidad y visualización
    - ( ) Aprendizaje de reglas de asociación

21. Apriori y Eclat son algoritmos de...

    - ( ) Agrupamiento particional
    - (x) Aprendizaje de reglas de asociación
    - ( ) Reducción de la dimensionalidad
    - ( ) Clasificación supervisada multiclase

22. En clustering, ¿cuál es uno de los principales retos?

    - (x) Decidir el número de clusters (k)
    - ( ) Disponer de una etiqueta de clase para cada instancia
    - ( ) Calcular la pérdida respecto a las etiquetas verdaderas
    - ( ) Prescindir por completo de cualquier medida de distancia

23. En la detección de anomalías, ¿cómo se entrena habitualmente el sistema?

    - ( ) Mostrándole exclusivamente casos anómalos previamente etiquetados
    - ( ) Sin ningún dato, aprendiendo solo a partir de recompensas
    - ( ) Asignando una clase numérica concreta a cada anomalía
    - (x) Mostrándole sobre todo casos normales para que aprenda a reconocerlos

24. Descubrir que quienes compran salsa barbacoa y patatas fritas también suelen comprar filetes es un caso de...

    - ( ) Detección de valores atípicos en las ventas
    - ( ) Clasificación supervisada de productos
    - (x) Aprendizaje de reglas de asociación
    - ( ) Reducción de la dimensionalidad del catálogo

25. Sobre el aprendizaje basado en instancias (por ejemplo, kNN), ¿qué afirmación es correcta?

    - ( ) Construye un modelo paramétrico que resume todos los datos
    - (x) Generaliza comparando con los ejemplos mediante una medida de similitud y casi no requiere entrenamiento
    - ( ) Prescinde por completo de cualquier función de distancia
    - ( ) Aprende exclusivamente mediante recompensas del entorno

26. ¿En qué consiste el aprendizaje basado en modelos?

    - (x) Construir un modelo a partir de los ejemplos y usarlo para hacer predicciones
    - ( ) Memorizar todos los ejemplos y compararlos uno a uno al predecir
    - ( ) Aprender únicamente a partir de recompensas del entorno
    - ( ) Agrupar los datos sin emplear ninguna etiqueta

27. La tasa de error del modelo sobre casos nuevos no vistos se denomina...

    - ( ) Error de entrenamiento sobre la muestra conocida
    - ( ) Sesgo de muestreo de los datos recogidos
    - ( ) Riesgo empírico nulo del modelo entrenado
    - (x) Error de generalización (error fuera de la muestra)

28. ¿Cuál es la proporción habitual para dividir los datos entre entrenamiento y test?

    - ( ) 50% para entrenamiento y 50% para test
    - ( ) 20% para entrenamiento y 80% para test
    - (x) 80% para entrenamiento y 20% para test, según el tamaño del conjunto
    - ( ) 100% para entrenamiento, sin reservar conjunto de test

29. ¿Qué describe mejor la validación cruzada k-fold?

    - ( ) Entrenar y evaluar siempre sobre el conjunto completo de datos
    - (x) Partir los datos en k pliegues, entrenar con k-1 y evaluar con el restante, rotando
    - ( ) Reservar únicamente el 1% de los datos para entrenar el modelo
    - ( ) Eliminar las etiquetas antes de iniciar el entrenamiento

30. ¿Cuál de los siguientes es un criterio para evaluar un modelo?

    - (x) La interpretabilidad, es decir, la comprensibilidad del modelo obtenido
    - ( ) El número total de instancias del conjunto de datos
    - ( ) La popularidad del algoritmo en la comunidad científica
    - ( ) El número de clases presentes en el problema

31. En el aprendizaje por refuerzo, ¿cómo se llama la estrategia que indica qué acción elegir en cada situación?

    - ( ) Recompensa acumulada a lo largo del tiempo
    - ( ) Agente que interactúa con el entorno
    - (x) Política
    - ( ) Entorno en el que se toman las decisiones

32. En el aprendizaje por refuerzo, ¿cómo se denomina el sistema de aprendizaje?

    - ( ) Etiqueta de la acción tomada
    - ( ) Predictor de la recompensa futura
    - ( ) Cluster de estados similares
    - (x) Agente

33. ¿Qué afirma el teorema "No Free Lunch" (NFL) de David Wolpert?

    - ( ) Un modelo lineal siempre supera a una red neuronal
    - (x) Sin suposiciones sobre los datos, no hay razón para preferir un modelo a otro
    - ( ) Existe a priori un modelo óptimo para cualquier problema posible
    - ( ) Evaluar varios modelos es inútil porque uno domina siempre

34. ¿Qué es el sobreajuste (overfitting)?

    - (x) El modelo va bien con los datos de entrenamiento pero generaliza mal
    - ( ) El modelo va mal tanto en entrenamiento como en test
    - ( ) El modelo resulta demasiado simple para captar los patrones
    - ( ) El modelo no necesita datos para poder entrenarse

35. La restricción de un modelo para simplificarlo y reducir el riesgo de sobreajuste se llama...

    - ( ) Generalización del modelo a casos nuevos
    - ( ) Validación cruzada del rendimiento
    - ( ) Minería de los datos de entrenamiento
    - (x) Regularización

36. Cuando los datos de entrenamiento no representan bien los nuevos casos a los que se quiere generalizar, surge...

    - ( ) Sobreajuste de los datos de entrenamiento
    - ( ) Subajuste por excesiva simplicidad del modelo
    - (x) Sesgo de muestreo
    - ( ) Error irreductible debido al ruido de los datos

37. Según Banko y Brill (2001), en un problema complejo de desambiguación del lenguaje natural...

    - ( ) solo el algoritmo más complejo logra resultados aceptables
    - (x) algoritmos muy distintos rinden casi igual si reciben suficientes datos
    - ( ) la cantidad de datos resulta irrelevante para el rendimiento final
    - ( ) los algoritmos sencillos fracasan siempre frente a los complejos

38. ¿Cuál es la diferencia clave entre los enfoques Data Centric y Model Centric?

    - (x) Data Centric mejora la calidad de los datos; Model Centric se centra en mejorar el modelo
    - ( ) Data Centric ignora los datos y solo ajusta hiperparámetros del modelo
    - ( ) Model Centric consiste en limpiar y reetiquetar mejor los datos
    - ( ) No hay ninguna diferencia real entre ambos enfoques

39. ¿Por qué es importante dedicar tiempo a la calidad y limpieza de los datos?

    - ( ) Porque reduce automáticamente el número de clases del problema
    - ( ) Porque elimina la necesidad de un conjunto de test
    - ( ) Porque garantiza que el modelo nunca llegue a sobreajustar
    - (x) Porque los errores, valores atípicos y ruido dificultan detectar los patrones reales

40. El AI Act es el marco regulatorio sobre inteligencia artificial impulsado por...

    - ( ) Estados Unidos a través de su agencia federal
    - ( ) China mediante su plan nacional de IA
    - (x) La Unión Europea
    - ( ) Naciones Unidas en su asamblea general

<!-- Tema 2 - Parte I -->

41. En un clasificador binario, ¿cómo se define la precisión?

    - ( ) La proporción de casos positivos que el clasificador detecta correctamente
    - ( ) La proporción de instancias totales clasificadas de forma correcta
    - (x) La proporción de predicciones positivas que son realmente correctas, TP/(TP+FP)
    - ( ) La proporción de instancias negativas clasificadas como negativas

42. El recall (sensibilidad o tasa de verdaderos positivos) se define como...

    - (x) La proporción de casos positivos reales que el clasificador detecta, TP/(TP+FN)
    - ( ) La proporción de predicciones positivas que resultan correctas
    - ( ) La proporción de instancias negativas correctamente identificadas
    - ( ) La proporción de errores cometidos sobre el total de casos

43. ¿Qué es la puntuación F1?

    - ( ) La media aritmética simple de precisión y recall
    - ( ) El valor máximo entre la precisión y el recall
    - (x) La media armónica de precisión y recall, alta solo si ambas lo son
    - ( ) La diferencia absoluta entre precisión y recall

44. Sobre el compromiso precisión/recall al mover el umbral de decisión...

    - ( ) Subir el umbral aumenta a la vez la precisión y el recall
    - ( ) Bajar el umbral aumenta la precisión y reduce el recall
    - ( ) El umbral no influye en la precisión ni en el recall
    - (x) Subir el umbral suele aumentar la precisión y reducir el recall

45. La curva ROC representa...

    - (x) La tasa de verdaderos positivos frente a la tasa de falsos positivos
    - ( ) La precisión frente al recall para cada umbral posible
    - ( ) El error de entrenamiento frente al error de validación
    - ( ) La especificidad frente a la precisión del clasificador

46. La estrategia uno-contra-todos (OvA/OvR) para clasificación multiclase consiste en...

    - ( ) Entrenar un clasificador por cada par de clases y votar entre ellos
    - (x) Entrenar un clasificador binario por clase y elegir el de mayor puntuación
    - ( ) Entrenar un único modelo que produce todas las clases de forma nativa
    - ( ) Reducir las clases a dos mediante agrupamiento previo

47. En la estrategia uno-contra-uno (OvO) con N clases, ¿cuántos clasificadores binarios se entrenan?

    - ( ) Exactamente N clasificadores, uno por clase
    - ( ) Un total de 2N clasificadores binarios
    - (x) Un total de N×(N-1)/2 clasificadores, uno por par de clases
    - ( ) Un único clasificador que distingue todas las clases

48. Respecto al clasificador k-NN, ¿qué afirmación es correcta?

    - ( ) Construye durante el entrenamiento un modelo paramétrico compacto
    - ( ) Es insensible a la escala de las características de entrada
    - ( ) No necesita ninguna función de distancia para clasificar
    - (x) Clasifica según los vecinos más cercanos y es sensible a la escala de las características

49. En un modelo de regresión lineal, ¿qué es el término de sesgo (θ₀)?

    - (x) Una constante que se suma a la combinación ponderada de las características
    - ( ) El peso asociado a la característica más importante del modelo
    - ( ) El error irreductible debido al ruido de los datos
    - ( ) La tasa de aprendizaje empleada durante el entrenamiento

50. ¿Qué caracteriza a la ecuación normal en regresión lineal?

    - ( ) Es un método iterativo que ajusta los pesos paso a paso
    - (x) Es una solución de forma cerrada cuyo coste crece mucho con el número de características
    - ( ) Escala mal con el número de instancias pero muy bien con las características
    - ( ) Solo funciona si las características están previamente normalizadas

51. ¿Qué papel juega la tasa de aprendizaje (learning rate) en el descenso de gradiente?

    - ( ) Determina el número de características que se usan en cada paso
    - ( ) Fija el número total de instancias del conjunto de entrenamiento
    - (x) Fija el tamaño de los pasos: si es pequeña converge lento, si es grande puede diverger
    - ( ) Garantiza siempre la convergencia al mínimo global del problema

52. ¿En qué se diferencia el descenso de gradiente estocástico (SGD) del descenso por lotes?

    - ( ) El SGD usa todo el conjunto de entrenamiento en cada paso
    - ( ) El SGD solo funciona con funciones de coste no convexas
    - ( ) El SGD garantiza alcanzar exactamente el mínimo global
    - (x) El SGD usa una sola instancia aleatoria por paso, por lo que es más rápido pero más errático

53. ¿Por qué se garantiza que el descenso de gradiente alcance el mínimo global en regresión lineal?

    - (x) Porque la función de coste MSE de la regresión lineal es convexa
    - ( ) Porque siempre se usa una tasa de aprendizaje muy elevada
    - ( ) Porque el conjunto de entrenamiento se reduce en cada iteración
    - ( ) Porque la función de coste presenta numerosos mínimos locales

54. La regresión Ridge se caracteriza por...

    - ( ) Añadir un término de regularización basado en la norma ℓ1 de los pesos
    - (x) Añadir un término de regularización basado en la norma ℓ2; si α=0 equivale a regresión lineal
    - ( ) Eliminar automáticamente las características irrelevantes poniendo pesos a cero
    - ( ) Combinar a partes iguales las penalizaciones ℓ1 y ℓ2

55. Una propiedad distintiva de la regresión Lasso es que...

    - ( ) Mantiene siempre todos los pesos distintos de cero
    - ( ) Usa la norma ℓ2 al cuadrado como término de regularización
    - (x) Tiende a anular los pesos de las características menos útiles, haciendo selección de características
    - ( ) Equivale a la regresión lineal cuando el hiperparámetro es máximo

56. La regresión Elastic-Net (red elástica)...

    - ( ) Equivale exactamente a la regresión lineal sin regularización
    - ( ) Usa solo la norma ℓ1, como la regresión Lasso
    - ( ) Usa solo la norma ℓ2, como la regresión Ridge
    - (x) Mezcla Ridge y Lasso, y el ratio r controla el peso de cada penalización

57. ¿En qué consiste la parada anticipada (early stopping)?

    - (x) Detener el entrenamiento cuando el error de validación alcanza su mínimo
    - ( ) Detener el entrenamiento en cuanto el error de entrenamiento llega a cero
    - ( ) Reducir el grado del polinomio a medida que avanza el entrenamiento
    - ( ) Eliminar instancias de entrenamiento conforme el modelo mejora

58. Sobre la regresión logística, ¿qué afirmación es correcta?

    - ( ) Predice un valor numérico continuo igual que la regresión lineal
    - (x) Aplica la función sigmoide para estimar una probabilidad entre 0 y 1, con umbral del 50%
    - ( ) Solo puede resolver problemas con más de dos clases
    - ( ) Se entrena minimizando el error cuadrático medio (MSE)

59. La regresión Softmax (logística multinomial)...

    - ( ) Solo distingue entre dos clases, positiva y negativa
    - ( ) Requiere entrenar y combinar varios clasificadores binarios independientes
    - (x) Calcula una puntuación por clase y las normaliza con la función softmax
    - ( ) Sustituye la función de coste por el error cuadrático medio

60. ¿Cuál es la suposición característica del clasificador Naïve Bayes?

    - ( ) Que las características están fuertemente correlacionadas entre sí
    - ( ) Que la variable de clase depende de forma determinista de los atributos
    - ( ) Que todos los atributos tienen exactamente el mismo peso en la decisión
    - (x) Que los atributos son condicionalmente independientes dada la clase

<!-- Tema 2 - Parte II -->

61. La idea central de un clasificador SVM lineal es...

    - (x) Encontrar la frontera que deja el margen más ancho posible entre las clases
    - ( ) Trazar cualquier frontera que separe correctamente el conjunto de entrenamiento
    - ( ) Minimizar el número de instancias situadas en el lado correcto
    - ( ) Ajustar una recta que pase por el centro de cada clase

62. En una SVM, ¿qué son los vectores de soporte?

    - ( ) Los pesos que determinan la pendiente del hiperplano de decisión
    - (x) Las instancias del borde de la calle que determinan la frontera de decisión
    - ( ) Las características más relevantes seleccionadas por el modelo
    - ( ) Los puntos situados más lejos de la frontera de decisión

63. ¿Qué problemas presenta la clasificación de margen duro frente a la de margen blando?

    - ( ) Tolera demasiadas violaciones del margen y no separa bien las clases
    - ( ) Es insensible a la escala de las características de entrada
    - (x) Solo funciona si los datos son linealmente separables y es sensible a los valores atípicos
    - ( ) Ignora por completo los valores atípicos del conjunto de datos

64. En una SVM de margen blando, ¿qué controla el hiperparámetro C?

    - ( ) El número de vectores de soporte que se pueden usar
    - ( ) El grado del kernel polinómico empleado
    - ( ) La anchura del kernel RBF gaussiano
    - (x) El equilibrio entre mantener la calle ancha y limitar las violaciones del margen

65. ¿Por qué conviene escalar las características antes de entrenar una SVM?

    - (x) Porque las SVM son sensibles a la escala de las características
    - ( ) Porque el escalado elimina la necesidad de vectores de soporte
    - ( ) Porque sin escalar no es posible aplicar ningún kernel
    - ( ) Porque convierte cualquier problema en linealmente separable

66. ¿En qué consiste el "truco del kernel" (kernel trick)?

    - ( ) Reducir el número de clases del problema mediante agrupamiento
    - (x) Obtener el efecto de añadir muchas características sin calcularlas explícitamente
    - ( ) Eliminar los vectores de soporte para acelerar la predicción
    - ( ) Convertir un problema de regresión en uno de clasificación

67. El kernel RBF gaussiano se basa en...

    - (x) Una función de similitud en forma de campana respecto a puntos de referencia
    - ( ) La suma ponderada directa de las características originales
    - ( ) La distancia de Hamming entre variables nominales
    - ( ) El producto escalar elevado a un grado polinómico fijo

68. Respecto a la complejidad computacional de las clases de SVM en Scikit-Learn...

    - ( ) LinearSVC admite el truco del kernel y escala de forma cuadrática
    - ( ) SVC escala linealmente con el número de instancias de entrenamiento
    - (x) SVC (libsvm) tiene coste entre O(m²n) y O(m³n), lento con muchas instancias
    - ( ) Ambas clases tienen exactamente la misma complejidad de entrenamiento

69. En la regresión SVM, el objetivo es...

    - (x) Ajustar el mayor número de instancias dentro de la calle, cuya anchura controla ε
    - ( ) Ajustar la calle más ancha posible entre dos clases separadas
    - ( ) Minimizar el número de vectores de soporte hasta dejarlo en cero
    - ( ) Maximizar la distancia de todas las instancias a la recta

70. ¿Por qué los árboles de decisión se consideran modelos de "caja blanca"?

    - ( ) Porque obtienen siempre una precisión superior a la de otros modelos
    - (x) Porque sus decisiones son intuitivas y fáciles de interpretar
    - ( ) Porque no requieren ningún dato de entrenamiento para construirse
    - ( ) Porque sus predicciones no se pueden comprobar manualmente

71. ¿Cómo funciona el algoritmo de entrenamiento CART?

    - ( ) Construye el árbol óptimo global comprobando todas las divisiones posibles
    - ( ) Divide los datos en tantos subconjuntos como clases existan a la vez
    - (x) Divide de forma voraz por una característica y un umbral que generen subconjuntos más puros
    - ( ) Asigna umbrales aleatorios a cada característica en cada nodo

72. Sobre la elección entre impureza de Gini y entropía en un árbol de decisión...

    - ( ) La entropía es la opción por defecto por ser más rápida de calcular
    - (x) Gini es la opción por defecto y algo más rápida; suelen dar árboles parecidos
    - ( ) Gini y entropía producen siempre árboles radicalmente distintos
    - ( ) La entropía solo puede usarse en árboles de regresión

73. ¿Por qué un árbol de decisión sin restricciones tiende a sobreajustar?

    - (x) Porque es un modelo no paramétrico que se adapta libremente a los datos
    - ( ) Porque tiene un número fijo de parámetros definido de antemano
    - ( ) Porque siempre limita su profundidad máxima por defecto
    - ( ) Porque hace fuertes suposiciones previas sobre la forma de los datos

74. La eficacia de los métodos de ensemble se apoya en la idea de...

    - ( ) usar siempre el predictor individual más preciso disponible
    - ( ) entrenar un único modelo muy complejo sobre todos los datos
    - (x) la "sabiduría de la multitud": agregar varios predictores supera al mejor individual
    - ( ) reducir el conjunto de entrenamiento para acelerar el cálculo

75. En el contexto del boosting, un "aprendiz débil" (weak learner) es...

    - ( ) un modelo que sobreajusta siempre los datos de entrenamiento
    - ( ) un modelo imposible de combinar con otros predictores
    - (x) un predictor que acierta solo algo mejor que el azar
    - ( ) un predictor que alcanza por sí solo una precisión muy alta

76. ¿Cuál es la diferencia entre bagging y pasting?

    - ( ) Bagging entrena en serie y pasting en paralelo
    - ( ) Bagging usa árboles y pasting usa modelos lineales
    - ( ) Bagging muestrea características y pasting muestrea instancias
    - (x) Bagging muestrea instancias con reemplazo y pasting sin reemplazo

77. En la evaluación Out-of-Bag (OOB) de un ensemble de bagging...

    - ( ) se reserva siempre el 20% de los datos como conjunto de validación
    - (x) cada predictor deja sin muestrear de media un 37% de instancias, usadas para evaluar
    - ( ) se requiere obligatoriamente un conjunto de validación independiente
    - ( ) todas las instancias se muestrean exactamente una vez por predictor

78. Sobre Random Forests y Extra-Trees, ¿qué afirmación es correcta?

    - ( ) Random Forest entrena un solo árbol sobre todo el conjunto de datos
    - ( ) Extra-Trees busca siempre el mejor umbral posible en cada nodo
    - ( ) Ambos son modelos lineales regularizados
    - (x) Random Forest es un ensemble de árboles con bagging; Extra-Trees añade umbrales aleatorios

79. ¿Qué caracteriza al algoritmo AdaBoost?

    - (x) Entrena predictores en secuencia, dando más peso a las instancias mal clasificadas
    - ( ) Entrena todos los predictores en paralelo sobre subconjuntos aleatorios
    - ( ) Ajusta cada nuevo predictor a los residuos del anterior
    - ( ) Combina las predicciones mediante un metaaprendiz entrenado aparte

80. ¿En qué se diferencian Gradient Boosting y Stacking?

    - ( ) Gradient Boosting usa un metaaprendiz y Stacking ajusta residuos
    - ( ) Ambos entrenan los predictores base totalmente en paralelo
    - (x) Gradient Boosting ajusta cada predictor a los residuos; Stacking entrena un metaaprendiz que agrega predicciones
    - ( ) Ninguno de los dos combina varios predictores distintos

<!-- Tema 3 - Parte I -->

81. En la integración de datos, ¿qué técnica permite detectar que un atributo es redundante?

    - ( ) La normalización min-max de cada atributo
    - (x) El análisis de correlaciones entre atributos
    - ( ) La discretización en intervalos de igual amplitud
    - ( ) La imputación de los valores perdidos

82. ¿Cuándo se considera que un atributo es redundante?

    - ( ) Cuando contiene valores perdidos en muchas instancias
    - ( ) Cuando sus valores quedan fuera del rango esperado
    - ( ) Cuando aparece duplicado en varias filas del conjunto
    - (x) Cuando puede obtenerse a partir de otros atributos del conjunto

83. ¿Cuál es un objetivo de la etapa de limpieza de datos?

    - (x) Resolver inconsistencias, suavizar el ruido e identificar outliers
    - ( ) Proyectar los datos a un espacio de menor dimensión
    - ( ) Combinar varias fuentes en un único almacén de datos
    - ( ) Convertir los atributos continuos en intervalos nominales

84. Convertir la edad numérica en categorías {joven, adulto, anciano} es un ejemplo de...

    - ( ) Normalización min-max del atributo edad
    - ( ) Agregación de varios atributos en uno solo
    - (x) Generalización mediante jerarquías de conceptos
    - ( ) Imputación con el valor más probable

85. ¿Por qué es útil normalizar los atributos antes de aplicar ciertos algoritmos?

    - ( ) Porque elimina automáticamente los valores perdidos
    - (x) Porque beneficia a los métodos basados en distancias, como los vecinos más próximos
    - ( ) Porque reduce el número de instancias del conjunto
    - ( ) Porque convierte los atributos nominales en numéricos

86. ¿Qué caracteriza a la normalización min-max?

    - ( ) Usa la media y la desviación típica del atributo
    - ( ) Desplaza el punto decimal según el valor absoluto máximo
    - ( ) Solo puede aplicarse a atributos nominales
    - (x) Aplica una transformación lineal que conserva las relaciones entre los datos

87. La normalización zero-mean (z-score) resulta especialmente útil cuando...

    - (x) se desconocen los límites o hay datos anómalos que dominarían a min-max
    - ( ) todos los valores están ya dentro del rango [0,1]
    - ( ) se quiere desplazar el punto decimal de cada valor
    - ( ) el atributo es nominal y carece de orden

88. ¿En qué consiste la normalización por escala decimal?

    - ( ) En restar la media y dividir por la desviación típica
    - ( ) En transformar linealmente los valores al rango [0,1]
    - (x) En mover el punto decimal según el valor absoluto máximo del atributo
    - ( ) En sustituir los valores perdidos por la mediana

89. ¿Cuál de las siguientes es una forma válida de tratar los valores perdidos?

    - ( ) Duplicar las instancias afectadas para compensar
    - ( ) Aumentar el número de clases del problema
    - ( ) Proyectar el atributo a un espacio de menor dimensión
    - (x) Rellenar con el valor más probable usando un árbol de decisión o un método bayesiano

90. Imputar los valores perdidos con la media del atributo...

    - ( ) garantiza recuperar exactamente el valor original perdido
    - (x) preserva la media pero tiende a reducir la desviación típica
    - ( ) aumenta siempre la varianza del atributo
    - ( ) solo resulta válido para atributos nominales

91. ¿Cuál de los siguientes es un método de imputación basado en aprendizaje automático?

    - (x) Imputación con k-NN (KNNI)
    - ( ) Normalización por escala decimal
    - ( ) Discretización por igual frecuencia
    - ( ) Generalización mediante jerarquías de conceptos

92. En la limpieza de ruido, ¿cómo se clasifican los ejemplos respecto a la frontera de decisión?

    - ( ) Numéricos, nominales y ordinales
    - ( ) Supervisados, no supervisados e híbridos
    - (x) Seguros (safe), frontera (borderline) y ruidosos (noisy)
    - ( ) Redundantes, irrelevantes y relevantes

93. Los filtros de ruido EF, CVCF e IPF comparten que...

    - ( ) sustituyen los valores perdidos por la media de la clase
    - ( ) reducen la dimensionalidad proyectando los datos
    - ( ) discretizan los atributos continuos antes de entrenar
    - (x) usan un esquema de votación para decidir qué instancias eliminar

94. ¿Qué caracteriza al Ensemble Filter (EF)?

    - ( ) Usa siempre un único algoritmo de aprendizaje (C4.5)
    - (x) Usa varios algoritmos distintos (C4.5, 1-NN y LDA) como filtros de ruido
    - ( ) Imputa los valores perdidos mediante regresión lineal
    - ( ) Elimina atributos redundantes en lugar de instancias

95. En el esquema de votación de un filtro de ruido, el voto por consenso...

    - (x) elimina una instancia solo si la clasifican mal todos los clasificadores
    - ( ) elimina una instancia si más de la mitad la clasifican mal
    - ( ) conserva las instancias clasificadas mal por algún clasificador
    - ( ) elige el atributo más correlacionado con la clase

96. ¿En qué se diferencia el Cross-Validated Committees Filter (CVCF) del Ensemble Filter?

    - ( ) Solo elimina atributos redundantes, no instancias ruidosas
    - ( ) No utiliza validación cruzada en ningún paso
    - (x) Usa el mismo algoritmo (C4.5) y etiqueta todas las instancias de entrenamiento
    - ( ) Sustituye los valores ruidosos por su valor más probable

97. El Iterative Partitioning Filter (IPF) se caracteriza por...

    - ( ) eliminar todo el ruido en una única pasada
    - (x) eliminar ruido en varias iteraciones de CVCF hasta cumplir un criterio de parada
    - ( ) no requerir ningún algoritmo de aprendizaje
    - ( ) imputar en lugar de eliminar las instancias ruidosas

98. ¿Cuál es el objetivo de la reducción de datos?

    - ( ) Añadir atributos derivados para enriquecer el conjunto
    - ( ) Aumentar el número de instancias de entrenamiento
    - ( ) Sustituir los valores perdidos por estimaciones
    - (x) Seleccionar o extraer los datos relevantes para la tarea de minería

99. La integración de datos consiste principalmente en...

    - (x) combinar datos de varias fuentes en un único almacén, evitando duplicados e inconsistencias
    - ( ) dividir el conjunto en entrenamiento y test
    - ( ) transformar los atributos continuos en nominales
    - ( ) reducir el número de dimensiones del problema

100. Totalizar las ventas mensuales en un único atributo de ventas anuales es un ejemplo de...

    - ( ) normalización del atributo de ventas
    - ( ) discretización por igual frecuencia
    - (x) agregación de datos
    - ( ) imputación de valores perdidos

<!-- Tema 3 - Parte II -->

101. ¿En qué consiste la discretización?

    - ( ) En proyectar los datos a un espacio de menor dimensión
    - ( ) En rellenar los valores perdidos de un atributo
    - ( ) En combinar varias fuentes de datos en una sola
    - (x) En transformar valores continuos ordenados en valores nominales no ordenados

102. ¿Por qué la discretización se considera también una técnica de reducción de datos?

    - ( ) Porque elimina las instancias ruidosas del conjunto
    - (x) Porque los valores nominales tienen un dominio finito de etiquetas
    - ( ) Porque proyecta los atributos sobre componentes principales
    - ( ) Porque descarta los atributos redundantes

103. ¿Qué distingue a la discretización supervisada de la no supervisada?

    - (x) La supervisada tiene en cuenta el atributo de clase y la no supervisada no
    - ( ) La supervisada solo se aplica a atributos nominales
    - ( ) La no supervisada siempre produce intervalos de igual amplitud
    - ( ) La no supervisada exige disponer de etiquetas de clase

104. La discretización en intervalos de igual frecuencia se caracteriza por...

    - ( ) dividir el rango en intervalos exactamente del mismo tamaño
    - ( ) usar la entropía para elegir los puntos de corte
    - (x) repartir las instancias de modo que cada intervalo tenga aproximadamente las mismas
    - ( ) requerir el atributo de clase para fijar los cortes

105. ¿Cuál de los siguientes es un método de discretización supervisada?

    - ( ) Intervalos de igual amplitud
    - ( ) Intervalos de igual frecuencia
    - ( ) Agrupamiento (clustering) de los valores
    - (x) Discretización basada en entropía (Fayyad e Irani)

106. ¿Por qué es útil la selección de características?

    - (x) Porque más atributos no implican mejor clasificación y menos variables mejoran la generalización
    - ( ) Porque aumenta siempre el número de instancias disponibles
    - ( ) Porque garantiza eliminar todo el ruido de los datos
    - ( ) Porque transforma los atributos numéricos en nominales

107. En selección de características, el enfoque de filtro (filter)...

    - ( ) entrena el clasificador final para evaluar cada subconjunto
    - (x) evalúa los subconjuntos por su información intrínseca, sin entrenar el clasificador final
    - ( ) devuelve siempre el subconjunto óptimo global
    - ( ) requiere etiquetas y un clasificador en cada paso

108. El enfoque envolvente (wrapper) en selección de características...

    - ( ) evalúa los subconjuntos con medidas de separabilidad de clases
    - ( ) es independiente del clasificador que se usará finalmente
    - (x) aplica el clasificador final a cada subconjunto candidato y usa su acierto como evaluación
    - ( ) no necesita ninguna estrategia de búsqueda

109. ¿Cuál es un inconveniente del enfoque envolvente (wrapper)?

    - (x) Es costoso y su solución queda sesgada hacia el clasificador utilizado
    - ( ) Tiende a incluir demasiadas variables por su función monótona
    - ( ) No puede emplearse con clasificadores supervisados
    - ( ) Ignora por completo el acierto del clasificador

110. La búsqueda secuencial hacia delante (forward) en selección de características...

    - ( ) parte del conjunto completo y elimina variables una a una
    - ( ) evalúa exhaustivamente los 2^N subconjuntos posibles
    - ( ) genera los subconjuntos de forma totalmente aleatoria
    - (x) parte del conjunto vacío y añade en cada paso la variable que más mejora la función objetivo

111. La búsqueda secuencial hacia atrás (backward)...

    - ( ) parte del conjunto vacío y añade variables progresivamente
    - (x) parte del conjunto completo y elimina la variable que menos penaliza la función objetivo
    - ( ) evalúa todos los subconjuntos posibles sin heurística
    - ( ) no permite eliminar variables del subconjunto

112. La búsqueda hacia delante (forward) suele ser preferible cuando...

    - ( ) el subconjunto óptimo contiene muchas variables
    - ( ) se quieren reevaluar variables previamente descartadas
    - (x) el subconjunto óptimo contiene pocas variables
    - ( ) se dispone de tiempo para una búsqueda exhaustiva

113. ¿Por qué no suele ser aceptable una búsqueda exhaustiva en selección de características?

    - (x) Porque explorar todos los subconjuntos de N variables supone 2^N evaluaciones
    - ( ) Porque la función objetivo no se puede calcular
    - ( ) Porque las variables no se pueden combinar entre sí
    - ( ) Porque obliga a usar siempre un enfoque envolvente

114. ¿Cuál es el objetivo de la selección de instancias?

    - ( ) Reducir el número de atributos del conjunto
    - ( ) Convertir los atributos continuos en nominales
    - ( ) Combinar varias fuentes de datos en una sola
    - (x) Elegir los ejemplos relevantes para lograr el máximo rendimiento con menos datos

115. ¿Cómo se evalúa habitualmente un algoritmo de selección de instancias para k-NN?

    - ( ) Por el número de atributos que elimina del conjunto
    - (x) Por la reducción de almacenamiento, la tolerancia al ruido y la precisión en generalización
    - ( ) Por la varianza preservada tras la proyección
    - ( ) Por el número de componentes principales conservados

116. ¿Qué describe la "maldición de la dimensionalidad"?

    - ( ) Que añadir instancias siempre reduce el sobreajuste
    - ( ) Que los atributos nominales son más difíciles de discretizar
    - (x) Que en alta dimensión los datos son muy dispersos y crece el riesgo de sobreajuste
    - ( ) Que la proyección aleatoria distorsiona siempre las distancias

117. El enfoque de proyección para reducir la dimensionalidad se apoya en que...

    - ( ) los datos se distribuyen siempre de forma uniforme por todas las dimensiones
    - ( ) cada atributo es independiente de todos los demás
    - ( ) las clases están perfectamente separadas en el espacio original
    - (x) las instancias suelen situarse cerca de un subespacio de menor dimensión

118. La hipótesis de la variedad (manifold) sostiene que...

    - (x) la mayoría de los conjuntos de alta dimensión se aproximan a una variedad de dimensión mucho menor
    - ( ) toda proyección lineal conserva exactamente las distancias originales
    - ( ) el número de clases coincide con el número de dimensiones
    - ( ) los datos de alta dimensión nunca pueden reducirse

119. ¿Qué hace el análisis de componentes principales (PCA)?

    - ( ) Conserva las relaciones locales con los vecinos más cercanos
    - (x) Encuentra ejes ortogonales que preservan la máxima varianza y proyecta sobre ellos
    - ( ) Proyecta los datos mediante una matriz totalmente aleatoria
    - ( ) Mantiene las distancias geodésicas entre las instancias

120. La incrustación lineal local (LLE) se caracteriza por...

    - ( ) basarse en una proyección lineal, igual que PCA
    - ( ) preservar la varianza global del conjunto de datos
    - (x) ser una técnica no lineal que conserva las relaciones locales entre vecinos
    - ( ) requerir siempre el atributo de clase

<!-- Tema 4 - Aprendizaje no supervisado -->

121. ¿En qué consiste la tarea de clustering?

    - ( ) Predecir un valor numérico a partir de características de entrada
    - ( ) Asignar cada instancia a una clase previamente etiquetada
    - (x) Identificar instancias similares y agruparlas sin usar etiquetas
    - ( ) Reducir el número de atributos preservando la varianza

122. ¿Cómo funciona el algoritmo k-means en cada iteración?

    - (x) Asigna cada instancia al centroide más cercano y recoloca cada centroide en la media de sus instancias
    - ( ) Conecta en cada paso el par de clústeres más cercano
    - ( ) Desplaza cada punto hacia la región de mayor densidad
    - ( ) Elimina las instancias que quedan lejos de todos los centroides

123. ¿De qué depende que k-means converja a una buena solución?

    - ( ) Del número de atributos del conjunto de datos
    - ( ) De que las clases estén perfectamente etiquetadas
    - ( ) De que los clústeres tengan formas alargadas
    - (x) De la inicialización de los centroides, ya que puede caer en un óptimo local

124. ¿Qué aporta la inicialización k-means++?

    - ( ) Garantiza encontrar siempre el óptimo global en una sola ejecución
    - (x) Tiende a elegir centroides iniciales alejados entre sí, reduciendo soluciones subóptimas
    - ( ) Elimina la necesidad de fijar el número de clústeres
    - ( ) Acelera el cálculo eliminando la desigualdad triangular

125. ¿Qué caracteriza al mini-batch k-means?

    - (x) Usa minilotes en cada iteración, es más rápido pero con inercia algo peor
    - ( ) Recorre el conjunto completo en cada paso para minimizar la inercia
    - ( ) No requiere fijar el número de clústeres de antemano
    - ( ) Solo funciona con clústeres de forma esférica idéntica

126. ¿Qué mide la inercia en k-means?

    - ( ) La distancia media entre los centroides de distintos clústeres
    - ( ) El número de iteraciones hasta la convergencia
    - (x) La suma de las distancias al cuadrado de cada instancia a su centroide más cercano
    - ( ) La proporción de instancias mal asignadas

127. ¿Por qué la inercia no sirve por sí sola para elegir el número de clústeres k?

    - ( ) Porque solo puede calcularse con datos etiquetados
    - ( ) Porque aumenta de forma arbitraria al subir k
    - ( ) Porque es independiente del valor de k
    - (x) Porque disminuye continuamente a medida que aumenta k

128. La técnica del "codo" para elegir k consiste en...

    - ( ) maximizar la inercia en función de k
    - (x) buscar el punto de inflexión en la curva de inercia frente a k
    - ( ) elegir el k que produzca clústeres del mismo tamaño
    - ( ) fijar k igual al número de características

129. El coeficiente de silueta de una instancia...

    - (x) vale (b − a) / max(a, b) y se mueve entre −1 y +1
    - ( ) es siempre positivo y crece con el número de clústeres
    - ( ) mide la suma de distancias al cuadrado a su centroide
    - ( ) solo se puede calcular si se conocen las etiquetas reales

130. ¿Cuál es una limitación conocida de k-means?

    - ( ) No converge nunca aunque se ejecute varias veces
    - ( ) Exige una matriz de similitud entre todas las instancias
    - ( ) Solo detecta anomalías, no clústeres
    - (x) Se comporta mal con clústeres de tamaños, densidades o formas no esféricas

131. El índice Davies-Bouldin para evaluar un clustering...

    - ( ) es mejor cuanto más alto sea su valor
    - (x) es mejor cuanto más bajo, pues mide dispersión interna frente a separación entre centroides
    - ( ) solo es válido cuando se conocen las etiquetas verdaderas
    - ( ) mide la profundidad media de los árboles de aislamiento

132. El índice de Dunn...

    - ( ) es mejor cuanto más bajo sea su valor
    - ( ) penaliza los clústeres bien separados
    - (x) es mejor cuanto más alto, pues relaciona la distancia mínima entre clústeres con el diámetro máximo
    - ( ) coincide siempre con el coeficiente de silueta

133. ¿Cómo define los clústeres el algoritmo DBSCAN?

    - (x) Como regiones continuas de alta densidad separadas por zonas de baja densidad
    - ( ) Como los k grupos que minimizan la inercia total
    - ( ) Como una jerarquía construida de abajo a arriba
    - ( ) Como los ejemplares elegidos por intercambio de mensajes

134. En DBSCAN, ¿qué es una instancia central (core)?

    - ( ) La instancia situada exactamente en el centroide del clúster
    - ( ) Cualquier instancia que no tenga vecinos cercanos
    - ( ) La primera instancia procesada por el algoritmo
    - (x) Una instancia con al menos min_samples vecinos dentro de su vecindad ε

135. ¿Cuál es una ventaja de DBSCAN frente a k-means?

    - ( ) Escala mejor a conjuntos enormes por su coste lineal
    - (x) Detecta clústeres de cualquier forma y es robusto frente a valores atípicos
    - ( ) Garantiza el óptimo global sin reinicios
    - ( ) No necesita ningún hiperparámetro

136. El clustering aglomerativo...

    - ( ) parte de un único clúster y lo va dividiendo
    - ( ) requiere fijar el radio de una ventana móvil
    - (x) construye una jerarquía de abajo a arriba fusionando los clústeres más cercanos
    - ( ) asigna cada instancia al centroide más próximo

137. ¿Para qué escenario se diseñó específicamente el algoritmo BIRCH?

    - ( ) Para clústeres de forma arbitraria con mucho ruido
    - ( ) Para datos con un número muy elevado de características
    - ( ) Para detectar anomalías puntuales
    - (x) Para conjuntos de datos muy grandes, usando una estructura de árbol y memoria limitada

138. El algoritmo mean-shift...

    - (x) desplaza ventanas hacia las zonas de mayor densidad hasta hallar máximos locales
    - ( ) requiere fijar de antemano el número de clústeres
    - ( ) construye un dendrograma de fusiones sucesivas
    - ( ) aísla anomalías mediante árboles aleatorios

139. ¿Qué caracteriza a la propagación por afinidad (affinity propagation)?

    - ( ) Necesita fijar el número de clústeres antes de entrenar
    - (x) Las instancias intercambian mensajes y eligen ejemplares (exemplars) que representan cada clúster
    - ( ) Solo funciona con clústeres esféricos del mismo tamaño
    - ( ) Reduce la dimensionalidad antes de agrupar

140. El clustering espectral...

    - ( ) asigna cada punto al centroide más cercano directamente
    - ( ) construye una jerarquía de fusiones entre instancias
    - (x) parte de una matriz de similitud, crea una incrustación de baja dimensión y agrupa en ese espacio
    - ( ) escala muy bien a un número enorme de instancias

141. La estimación de densidad en aprendizaje no supervisado...

    - ( ) asigna cada instancia a un clúster mediante centroides
    - ( ) reduce la dimensionalidad preservando distancias
    - ( ) requiere etiquetas para estimar las probabilidades
    - (x) estima la función de densidad y considera anomalías los casos en regiones de muy baja densidad

142. Una anomalía puntual es...

    - (x) una instancia individual que resulta anómala respecto al resto de los datos
    - ( ) un dato anómalo solo dentro de un contexto determinado
    - ( ) un conjunto de instancias relacionadas que en conjunto son anómalas
    - ( ) una instancia que define la frontera de un clúster

143. Una anomalía contextual se caracteriza por...

    - ( ) ser anómala con independencia de cualquier contexto
    - ( ) estar formada por una colección de instancias relacionadas
    - (x) ser anómala solo dentro de un contexto concreto (anomalía condicional)
    - ( ) coincidir siempre con el centroide de un clúster

144. Una anomalía colectiva...

    - ( ) es siempre una única instancia muy alejada del resto
    - (x) es un conjunto de instancias relacionadas anómalo en su conjunto, aunque cada una por separado no lo sea
    - ( ) solo aparece en datos sin ninguna relación entre instancias
    - ( ) se detecta midiendo la densidad local de un único punto

145. La detección de anomalías basada en distancia (enfoque del vecino más próximo)...

    - ( ) entrena un hiperplano que separa la clase del origen
    - ( ) estima la función de densidad de probabilidad global
    - ( ) construye árboles de aislamiento aleatorios
    - (x) marca como atípicos los puntos con mayor distancia a su k-ésimo vecino más cercano

146. El algoritmo Local Outlier Factor (LOF)...

    - (x) compara la densidad local de una instancia con la de sus vecinos para detectar atípicos
    - ( ) aísla los puntos mediante particiones aleatorias recursivas
    - ( ) separa la clase normal del origen con margen máximo
    - ( ) agrupa las instancias en regiones de alta densidad

147. El One-Class SVM (OCSVM) para detección de anomalías...

    - ( ) compara la densidad local de cada punto con la de sus vecinos
    - ( ) calcula la distancia al k-ésimo vecino más cercano
    - (x) busca el hiperplano que separa la clase objetivo del origen con margen máximo
    - ( ) construye múltiples árboles de aislamiento aleatorios

148. ¿En qué se basa el Isolation Forest para detectar anomalías?

    - ( ) En estimar la densidad de probabilidad de los datos normales
    - (x) En que las anomalías se aíslan en menos particiones, con menor profundidad media en los árboles
    - ( ) En comparar la densidad local de cada punto con sus vecinos
    - ( ) En maximizar el margen respecto al origen

<!-- Tema 5 - Parte I -->

149. ¿Qué produce una neurona biológica para comunicarse con otras?

    - ( ) Una suma ponderada de sus entradas numéricas
    - (x) Potenciales de acción que viajan por el axón y liberan neurotransmisores
    - ( ) Una función escalón aplicada a sus pesos
    - ( ) Un gradiente que se propaga hacia atrás

150. El modelo de neurona artificial de McCulloch y Pitts...

    - ( ) usa la función sigmoide para producir probabilidades
    - ( ) aprende sus pesos mediante retropropagación
    - ( ) admite entradas continuas con pesos reales
    - (x) tiene una o más entradas binarias y una salida binaria que se activa por umbral

151. ¿Cómo calcula su salida una unidad lógica de umbral (TLU) del perceptrón?

    - (x) Calcula z = w·x + b y le aplica una función escalón
    - ( ) Promedia las salidas de sus vecinos más cercanos
    - ( ) Normaliza sus entradas con media y desviación típica
    - ( ) Aplica la función softmax a todas las clases

152. ¿Cuál es una limitación fundamental de un perceptrón de una sola capa?

    - ( ) No puede entrenarse con descenso de gradiente
    - ( ) Solo admite entradas estrictamente binarias
    - (x) Su frontera de decisión es lineal, por lo que no resuelve problemas como el XOR
    - ( ) Necesita siempre la función softmax en la salida

153. Una capa en la que cada neurona está conectada a todas las entradas se denomina...

    - ( ) capa convolucional
    - (x) capa totalmente conectada o densa
    - ( ) capa de agrupación (pooling)
    - ( ) capa de normalización

154. La regla de aprendizaje del perceptrón (inspirada en Hebb)...

    - ( ) ajusta los pesos minimizando la entropía cruzada de toda la red
    - ( ) congela los pesos y solo modifica el término de sesgo
    - ( ) elimina las conexiones con peso negativo
    - (x) refuerza las conexiones que habrían contribuido a la predicción correcta cuando hay error

155. ¿Cómo se supera la incapacidad del perceptrón para resolver el XOR?

    - (x) Apilando varios perceptrones en capas, formando un perceptrón multicapa (MLP)
    - ( ) Aumentando la tasa de aprendizaje del perceptrón simple
    - ( ) Sustituyendo el escalón por una función lineal
    - ( ) Eliminando el término de sesgo de cada neurona

156. Un perceptrón multicapa (MLP) se compone de...

    - ( ) una única capa de unidades de umbral conectadas a la entrada
    - ( ) varias capas convolucionales seguidas de pooling
    - (x) una capa de entrada, una o más capas ocultas y una capa de salida
    - ( ) un conjunto de árboles de decisión combinados por votación

157. La retropropagación (backprop) combina...

    - ( ) inicialización aleatoria de pesos y validación cruzada
    - ( ) normalización por lotes y dropout
    - ( ) búsqueda en cuadrícula y parada anticipada
    - (x) diferenciación automática en modo inverso con un paso de descenso de gradiente

158. En el paso hacia delante (forward) de la retropropagación...

    - ( ) se ajustan los pesos para reducir el error
    - (x) se calculan y conservan las salidas de cada capa, necesarias para el paso hacia atrás
    - ( ) se propaga el gradiente desde la salida hacia la entrada
    - ( ) se mide la contribución al error de cada parámetro

159. El paso hacia atrás (backward) de la retropropagación...

    - (x) aplica la regla de la cadena para medir la contribución de cada parámetro al error
    - ( ) calcula las salidas de la red para el minilote actual
    - ( ) inicializa los pesos de las capas ocultas
    - ( ) normaliza las entradas de cada capa

160. ¿Por qué es importante inicializar los pesos de las capas ocultas de forma aleatoria?

    - ( ) Para reducir el número de parámetros del modelo
    - ( ) Para que todas las neuronas aprendan exactamente lo mismo
    - (x) Porque si no, el entrenamiento falla al quedar las neuronas simétricas
    - ( ) Para evitar tener que usar una función de activación

161. ¿Por qué Rumelhart et al. sustituyeron la función escalón por la sigmoide en el MLP?

    - ( ) Porque la sigmoide es más rápida de calcular que el escalón
    - ( ) Porque la sigmoide produce salidas binarias exactas
    - ( ) Porque el escalón satura en valores negativos grandes
    - (x) Porque el escalón es plano y no tiene gradiente útil, mientras la sigmoide sí lo tiene

162. La función de activación tangente hiperbólica (tanh)...

    - ( ) produce salidas entre 0 y 1 como la sigmoide
    - (x) tiene forma de S con salida entre −1 y 1, lo que centra las activaciones en 0
    - ( ) devuelve max(0, z) para sus entradas
    - ( ) no es diferenciable en ningún punto

163. La función de activación ReLU...

    - ( ) satura tanto para valores positivos como negativos
    - ( ) produce siempre una salida entre −1 y 1
    - (x) se define como max(0, z), es rápida de calcular y es la opción por defecto habitual
    - ( ) requiere calcular una exponencial por neurona

164. Para una regresión multivariante con un MLP...

    - (x) se usa una neurona de salida por cada valor numérico a predecir
    - ( ) se usa una única neurona con activación softmax
    - ( ) se usa una neurona por clase con sigmoide
    - ( ) no se necesita ninguna neurona de salida

165. Para una clasificación binaria con un MLP, la capa de salida suele tener...

    - ( ) una neurona por clase con función softmax
    - (x) una única neurona con activación sigmoide que estima la probabilidad de la clase positiva
    - ( ) tantas neuronas como características de entrada
    - ( ) una neurona lineal sin función de activación

166. Para clasificación multiclase con clases excluyentes, la capa de salida del MLP usa...

    - ( ) una sola neurona sigmoide
    - ( ) una neurona lineal por clase
    - ( ) la función tanh en toda la capa
    - (x) una neurona por clase con la función de activación softmax

167. ¿Qué función de pérdida es habitual al entrenar un MLP de clasificación?

    - (x) La entropía cruzada (log-loss)
    - ( ) El error cuadrático medio (MSE)
    - ( ) La inercia de los clústeres
    - ( ) La distancia de Hamming

168. En el entrenamiento por retropropagación, una "época" es...

    - ( ) una única actualización de un solo peso de la red
    - ( ) el procesamiento de una sola instancia de entrenamiento
    - (x) una pasada completa por todo el conjunto de entrenamiento
    - ( ) el cálculo del gradiente de una sola capa

<!-- Tema 5 - Parte II -->

169. El problema de los gradientes que se desvanecen (vanishing gradients)...

    - (x) hace que los gradientes se vuelvan diminutos en las capas inferiores, que apenas se entrenan
    - ( ) hace que los pesos crezcan sin control hasta divergir
    - ( ) solo aparece cuando se usa la función ReLU
    - ( ) se debe a inicializar todos los pesos a cero

170. El problema de los gradientes explosivos...

    - ( ) deja los pesos de las capas inferiores prácticamente sin cambios
    - ( ) se elimina usando siempre la función sigmoide
    - (x) hace que los gradientes crezcan tanto que el entrenamiento diverge, frecuente en redes recurrentes
    - ( ) solo ocurre durante el paso hacia delante

171. La inicialización de Glorot busca que...

    - ( ) todos los pesos empiecen exactamente en cero
    - (x) la varianza de las salidas de cada capa sea similar a la de sus entradas, usando fan_avg
    - ( ) los pesos sigan una distribución uniforme entre 0 y 1
    - ( ) las activaciones se saturen rápidamente

172. La inicialización de He (Kaiming) está pensada especialmente para...

    - ( ) la función de activación sigmoide
    - ( ) la función tangente hiperbólica
    - ( ) la función softmax de la capa de salida
    - (x) la función ReLU y sus variantes

173. El problema de las "ReLU moribundas" (dying ReLU) consiste en que...

    - (x) algunas neuronas quedan inactivas y solo producen 0 para todas las entradas
    - ( ) las neuronas saturan en 1 para entradas grandes
    - ( ) los gradientes explotan en las capas superiores
    - ( ) la red deja de poder calcular el paso hacia delante

174. La función Leaky ReLU evita las neuronas muertas porque...

    - ( ) satura suavemente para entradas positivas grandes
    - (x) tiene una pequeña pendiente para z < 0, de modo que la neurona puede recuperarse
    - ( ) elimina por completo el término de sesgo
    - ( ) normaliza las entradas antes de aplicarse

175. ¿Qué ventaja aporta la función de activación ELU frente a ReLU?

    - ( ) Es más rápida de calcular que ReLU
    - ( ) Produce salidas estrictamente binarias
    - (x) Toma valores negativos para z < 0, acercando la media a 0 y evitando neuronas muertas
    - ( ) Garantiza que la red nunca sobreajuste

176. La función de activación SELU resulta atractiva porque...

    - ( ) es la más rápida de calcular de todas
    - ( ) solo funciona en capas convolucionales
    - ( ) produce salidas entre 0 y 1 como la sigmoide
    - (x) en un MLP de capas densas hace que la red se autonormalice (media 0, desviación 1)

177. Las funciones de activación GELU y Swish...

    - ( ) son funciones escalón discontinuas
    - (x) son variantes suaves de ReLU que en la práctica suelen superarla en tareas complejas
    - ( ) producen siempre salidas binarias
    - ( ) eliminan la necesidad de retropropagación

178. La normalización por lotes (batch normalization)...

    - (x) centra en cero y normaliza las entradas de cada capa por minilote, y luego las escala y desplaza
    - ( ) elimina las neuronas menos importantes de cada capa
    - ( ) recorta los gradientes para evitar que exploten
    - ( ) congela los pesos de las capas inferiores

179. Un beneficio práctico de añadir batch normalization como primera capa es que...

    - ( ) obliga a usar siempre la función sigmoide
    - ( ) elimina la necesidad de una función de pérdida
    - ( ) reduce el número de clases del problema
    - (x) suele hacer innecesario estandarizar manualmente el conjunto de entrenamiento

180. El recorte de gradiente (gradient clipping) se usa para...

    - ( ) acelerar el cálculo del paso hacia delante
    - ( ) reducir el número de parámetros entrenables
    - (x) limitar la magnitud de los gradientes y mitigar los gradientes explosivos
    - ( ) inicializar los pesos de forma adecuada

181. El aprendizaje por transferencia (transfer learning) consiste en...

    - ( ) entrenar siempre la red desde cero con pesos aleatorios
    - (x) reutilizar capas de un modelo ya preentrenado para una nueva tarea relacionada
    - ( ) transferir los datos entre distintos servidores
    - ( ) intercambiar las funciones de activación entre capas

182. El preentrenamiento no supervisado es útil cuando...

    - (x) se dispone de pocos datos etiquetados pero muchos sin etiquetar
    - ( ) todos los datos están perfectamente etiquetados
    - ( ) no se quiere usar ninguna capa oculta
    - ( ) el problema es estrictamente lineal

183. El optimizador con momentum mejora el descenso de gradiente porque...

    - ( ) reduce el número de parámetros del modelo
    - ( ) normaliza las entradas de cada capa
    - ( ) elimina la necesidad de elegir la tasa de aprendizaje
    - (x) acumula los gradientes anteriores para avanzar más rápido y amortiguar oscilaciones

184. El gradiente acelerado de Nesterov se diferencia del momentum clásico en que...

    - ( ) no utiliza ninguna acumulación de gradientes
    - ( ) escala el gradiente por la raíz de su media cuadrática
    - (x) mide el gradiente un poco más adelante, en la dirección del momento
    - ( ) ajusta una tasa de aprendizaje distinta por parámetro

185. AdaGrad y RMSProp se caracterizan por...

    - (x) adaptar la tasa de aprendizaje de cada parámetro según la escala de sus gradientes
    - ( ) usar siempre la misma tasa de aprendizaje para todos los parámetros
    - ( ) prescindir por completo del gradiente
    - ( ) requerir datos etiquetados adicionales

186. El optimizador Adam combina las ideas de...

    - ( ) batch normalization y dropout
    - ( ) transfer learning y early stopping
    - ( ) Glorot y He
    - (x) momentum y una tasa de aprendizaje adaptativa tipo RMSProp

187. La técnica de regularización dropout...

    - ( ) recorta los gradientes que superan un umbral
    - (x) desactiva aleatoriamente neuronas durante el entrenamiento para reducir el sobreajuste
    - ( ) normaliza las activaciones de cada minilote
    - ( ) reutiliza capas de un modelo preentrenado

188. El MC dropout (Monte Carlo dropout)...

    - ( ) desactiva el dropout durante todo el entrenamiento
    - ( ) recorta la norma de los vectores de peso
    - (x) mantiene el dropout activo en inferencia para estimar la incertidumbre de las predicciones
    - ( ) sustituye la función de pérdida por la entropía cruzada

<!-- Tema 6 - Parte I (Redes convolucionales) -->

189. ¿Qué caracteriza a una red neuronal profunda (deep)?

    - (x) Tiene muchas capas ocultas y aprende representaciones jerárquicas de los datos
    - ( ) Usa una única capa con muchísimas neuronas
    - ( ) Solo admite datos previamente etiquetados
    - ( ) Carece de funciones de activación no lineales

190. Una red neuronal convolucional (CNN/ConvNet) es...

    - ( ) una red sin ninguna capa oculta
    - ( ) un conjunto de árboles de decisión combinados
    - (x) una red con al menos una capa de convolución, útil para datos en forma de matriz/grid
    - ( ) una red recurrente que procesa secuencias paso a paso

191. ¿Qué es una operación de convolución en este contexto?

    - ( ) Una suma global de todas las entradas de la imagen
    - (x) Una operación local lineal que aplica una máscara o filtro sobre la entrada
    - ( ) Una normalización de los píxeles por su media
    - ( ) Una reducción de la imagen a un único valor escalar

192. El resultado de aplicar un filtro convolucional sobre la entrada se denomina...

    - ( ) vector de sesgo
    - ( ) función de pérdida
    - ( ) matriz de confusión
    - (x) mapa de características (feature map) o de activación

193. La "idea clave" de las CNN respecto a los filtros es que...

    - (x) los coeficientes de los filtros se aprenden, no los diseña un experto humano
    - ( ) los filtros son siempre filtros de Sobel fijos
    - ( ) cada píxel tiene su propio conjunto de pesos independiente
    - ( ) los filtros se eligen al azar y no cambian durante el entrenamiento

194. La conectividad dispersa de las capas convolucionales significa que...

    - ( ) cada neurona se conecta a toda la entrada, como en una capa densa
    - ( ) no hay conexiones entre capas consecutivas
    - (x) cada neurona opera localmente sobre una región pequeña de la entrada, con menos operaciones
    - ( ) las conexiones se eliminan aleatoriamente en cada paso

195. La compartición de parámetros (weight sharing) en una CNN implica que...

    - ( ) cada posición de la imagen aprende su propio filtro distinto
    - (x) el mismo filtro se aplica a toda la imagen, reduciendo parámetros y actuando como regularización
    - ( ) los pesos cambian en cada época de forma aleatoria
    - ( ) no se usan filtros, solo capas densas

196. Una capa convolucional es equivariante respecto a la traslación, lo que significa que...

    - ( ) la salida no cambia aunque se rote la imagen
    - ( ) es invariante a cualquier transformación de la entrada
    - ( ) ignora la posición de los objetos por completo
    - (x) si se traslada un objeto en la entrada, su representación se traslada igual en la salida

197. En una CNN, la profundidad de cada filtro convolucional...

    - (x) coincide con la profundidad del volumen de entrada de esa capa
    - ( ) es siempre igual a 1, independientemente de la entrada
    - ( ) coincide con el número de clases del problema
    - ( ) se elige siempre igual al tamaño de la imagen

198. ¿Por qué se intercalan funciones de activación no lineales entre capas convolucionales?

    - ( ) Para reducir el tamaño de la imagen en cada paso
    - ( ) Para normalizar las entradas a media cero
    - (x) Porque sin no-linealidad la red entera equivaldría a una sola función lineal
    - ( ) Para eliminar la necesidad de retropropagación

199. El hiperparámetro stride en una convolución controla...

    - ( ) el número de filtros de la capa
    - (x) el desplazamiento del filtro sobre la entrada en cada paso
    - ( ) la profundidad del volumen de salida
    - ( ) la función de activación empleada

200. El padding (por ejemplo, zero-padding) se utiliza para...

    - ( ) aumentar el número de filtros de la capa
    - ( ) introducir no linealidad en la red
    - ( ) eliminar los bordes de la imagen
    - (x) conservar el tamaño de los mapas y no reducir la dimensionalidad demasiado rápido

201. Para una entrada de tamaño N con filtro F, padding P y stride S, el tamaño de salida es...

    - ( ) N · F / S
    - ( ) (N − F) · S + P
    - (x) ((N + 2P − F) / S) + 1
    - ( ) (N + F − P) / S

202. Para un volumen de entrada de profundidad 3 y filtros de 3×3, ¿cuántos parámetros tiene cada filtro (con sesgo)?

    - (x) 3×3×3 + 1 = 28 parámetros
    - ( ) 3×3 + 1 = 10 parámetros
    - ( ) 3×3×3 = 27 parámetros sin sesgo posible
    - ( ) 9 parámetros, uno por celda del filtro

203. La capa de pooling (por ejemplo, max-pooling)...

    - ( ) añade parámetros entrenables a la red
    - ( ) aumenta la resolución de los mapas de características
    - ( ) introduce la no linealidad principal de la red
    - (x) reduce la dimensionalidad e introduce cierta invarianza a pequeñas traslaciones

204. Las capas totalmente conectadas (densas) en una CNN...

    - ( ) operan localmente sobre regiones pequeñas
    - (x) suelen situarse al final de la red y contienen muchos parámetros
    - ( ) comparten un único filtro en toda la imagen
    - ( ) reducen el tamaño espacial mediante stride

205. La operación de "flatten" en una CNN...

    - (x) aplana un volumen de mapas de características en un vector para una capa densa
    - ( ) normaliza las activaciones por minilote
    - ( ) aplica un filtro convolucional adicional
    - ( ) desactiva neuronas aleatoriamente

206. La función softmax al final de una CNN de clasificación...

    - ( ) aplana el volumen de características en un vector
    - ( ) reduce el tamaño espacial de los mapas
    - (x) normaliza la salida en probabilidades de pertenencia a cada clase
    - ( ) introduce conexiones residuales

207. Una diferencia metodológica clave entre deep learning y machine learning clásico es que...

    - ( ) el deep learning no necesita datos de entrenamiento
    - ( ) el ML clásico aprende automáticamente las características
    - ( ) ambos requieren diseñar las características a mano
    - (x) las CNN aprenden las características (feature learning) en lugar de diseñarlas a mano

208. Un autoencoder de eliminación de ruido (denoising autoencoder)...

    - ( ) clasifica imágenes en categorías predefinidas
    - (x) recibe entradas corrompidas y se entrena para reconstruir los datos originales sin ruido
    - ( ) genera secuencias de texto token a token
    - ( ) detecta anomalías mediante árboles de aislamiento

<!-- Tema 6 - Parte II (Transformers) -->

209. Una secuencia (texto, audio, serie temporal) se caracteriza por...

    - ( ) carecer por completo de orden entre sus elementos
    - ( ) ser siempre de longitud fija
    - (x) estar formada por elementos con un orden y un contexto
    - ( ) no poder representarse mediante vectores

210. Antes de procesar una secuencia, una red neuronal convierte cada elemento en...

    - (x) un vector (por ejemplo, un embedding para cada palabra)
    - ( ) una etiqueta de clase
    - ( ) un único número escalar
    - ( ) una matriz de confusión

211. ¿Cuál es un problema de usar una red densa para procesar secuencias?

    - ( ) Aprovecha demasiado bien el orden temporal
    - ( ) Solo funciona con secuencias de longitud variable
    - ( ) Procesa cada elemento de forma independiente y recurrente
    - (x) Trata la entrada como un bloque fijo y no generaliza a longitudes variables

212. Una red recurrente (RNN) procesa una secuencia...

    - ( ) en paralelo, mirando todos los elementos a la vez
    - (x) elemento a elemento, manteniendo un estado oculto que actúa como memoria
    - ( ) aplicando un filtro convolucional local
    - ( ) sin tener en cuenta el orden de los elementos

213. ¿Cuál es la principal dificultad de las RNN con secuencias largas?

    - (x) La información inicial tiende a perderse: cuesta mantener dependencias a largo plazo
    - ( ) No pueden procesar texto, solo imágenes
    - ( ) Generan demasiados parámetros por la compartición de pesos
    - ( ) Procesan toda la secuencia en paralelo y se confunden

214. Las LSTM mejoran a las RNN gracias a...

    - ( ) eliminar por completo el estado oculto
    - ( ) procesar la secuencia en paralelo
    - (x) puertas de olvido, entrada y salida que regulan qué información se guarda y se usa
    - ( ) sustituir la recurrencia por convoluciones

215. Una limitación que mantienen las LSTM es que...

    - ( ) no tienen ningún mecanismo de memoria
    - ( ) no pueden aprender dependencias de ningún tipo
    - ( ) procesan toda la secuencia simultáneamente
    - (x) siguen procesando en cadena, lo que dificulta la paralelización y ralentiza el entrenamiento

216. El mecanismo de atención permite que...

    - ( ) cada elemento solo dependa de un único estado oculto comprimido
    - (x) cada elemento consulte directamente al resto y establezca conexiones directas
    - ( ) la secuencia se procese estrictamente paso a paso
    - ( ) se elimine la necesidad de representar los tokens como vectores

217. En la atención, a partir de cada embedding se generan tres vectores cuyo significado es...

    - (x) Query (qué busco), Key (qué ofrezco) y Value (qué información transmito)
    - ( ) Peso, sesgo y activación
    - ( ) Media, varianza y desviación típica
    - ( ) Entrada, capa oculta y salida

218. En la Scaled Dot-Product Attention, tras comparar queries con keys se aplica...

    - ( ) una convolución sobre los scores
    - ( ) una función ReLU a cada valor
    - (x) softmax para convertir las similitudes en pesos positivos que suman 1
    - ( ) una normalización por lotes

219. En self-attention...

    - ( ) las queries vienen de una secuencia y las keys/values de otra distinta
    - (x) Q, K y V proceden de la misma secuencia, que se relaciona consigo misma
    - ( ) no se usan vectores Query ni Key
    - ( ) cada token solo puede atender a sí mismo

220. En cross-attention...

    - ( ) Q, K y V salen siempre de la misma secuencia
    - ( ) no se utilizan los vectores Value
    - ( ) se prohíbe atender a tokens anteriores
    - (x) las queries vienen de una secuencia y las keys/values de otra secuencia distinta

221. La máscara causal de atención en la generación de texto sirve para...

    - (x) impedir que un token atienda a los tokens futuros, solo a los anteriores y al actual
    - ( ) acelerar el cálculo eliminando el softmax
    - ( ) normalizar las representaciones de cada capa
    - ( ) compartir pesos entre todas las cabezas de atención

222. La atención multi-cabeza (multi-head attention) permite...

    - ( ) reducir el número de parámetros a una sola proyección
    - ( ) procesar la secuencia de forma estrictamente secuencial
    - (x) aplicar varias atenciones en paralelo para capturar distintos tipos de relación
    - ( ) eliminar la necesidad de embeddings

223. El positional encoding se añade en un Transformer porque...

    - ( ) reduce la dimensionalidad de los embeddings
    - ( ) normaliza la escala de las representaciones
    - ( ) sustituye al mecanismo de atención
    - (x) la atención por sí sola no conoce la posición de los tokens en la secuencia

224. Un bloque Transformer combina, esencialmente...

    - ( ) una capa convolucional y una de pooling
    - (x) atención multi-cabeza (mezcla información entre tokens) y una red feed-forward (procesa cada token)
    - ( ) una RNN y una LSTM en serie
    - ( ) dos capas densas sin ninguna atención

225. Las conexiones residuales (Add) en el Transformer...

    - ( ) eliminan información redundante de cada capa
    - ( ) sustituyen a la red feed-forward
    - (x) suman la entrada original a la transformada, estabilizando el gradiente en redes profundas
    - ( ) normalizan las activaciones por minilote

226. La normalización de capa (Layer Normalization) en el Transformer...

    - (x) estabiliza el entrenamiento ajustando la escala de cada representación
    - ( ) recorta los gradientes que superan un umbral
    - ( ) desactiva neuronas aleatoriamente
    - ( ) añade información posicional a los embeddings

227. ¿Qué distingue al decoder del encoder en un Transformer?

    - ( ) El decoder no usa atención de ningún tipo
    - ( ) El encoder genera la salida token a token
    - ( ) El decoder carece de red feed-forward
    - (x) El decoder usa self-attention enmascarada y además cross-attention sobre la salida del encoder

228. Respecto al coste del mecanismo de self-attention...

    - ( ) es lineal con la longitud de la secuencia
    - (x) es cuadrático O(T²) con la longitud T, pero permite procesar la secuencia en paralelo
    - ( ) no depende de la longitud de la secuencia
    - ( ) es más lento que una RNN para secuencias largas

<!-- Tema 9 - Parte I (Aspectos avanzados) -->

229. ¿Qué es la Inteligencia Artificial Explicable (XAI)?

    - ( ) Un tipo de red neuronal más profunda y precisa
    - (x) Un conjunto de técnicas que hacen comprensibles para humanos las decisiones de modelos caja negra
    - ( ) Un algoritmo de optimización de hiperparámetros
    - ( ) Una técnica para acelerar la inferencia de los modelos

230. ¿Cuál es uno de los motivos para usar XAI?

    - ( ) Reducir el tamaño del conjunto de entrenamiento
    - ( ) Eliminar la necesidad de datos etiquetados
    - ( ) Aumentar automáticamente la precisión del modelo
    - (x) Generar confianza, depurar sesgos y cumplir requisitos regulatorios

231. La distinción pre-hoc vs post-hoc en XAI se refiere a...

    - (x) si el modelo se diseña interpretable desde el inicio o se explica a posteriori una caja negra
    - ( ) si la explicación es para un caso concreto o para todo el modelo
    - ( ) si el método depende o no de la arquitectura del modelo
    - ( ) si se usa antes o después de recoger los datos

232. La distinción local vs global en XAI se refiere a...

    - ( ) si el método funciona con cualquier arquitectura o solo con una
    - ( ) si el modelo es interpretable de origen o no
    - (x) si la explicación cubre una predicción individual o el comportamiento completo del modelo
    - ( ) si se ejecuta en local o en la nube

233. La distinción agnóstico vs específico (model-agnostic vs model-specific) indica...

    - ( ) si la explicación es local o global
    - ( ) si el modelo es lineal o no lineal
    - ( ) si la explicación se da antes o después de entrenar
    - (x) si el método funciona con cualquier modelo o requiere acceso a su arquitectura interna (p. ej. Grad-CAM)

234. ¿En qué se basa el método LIME?

    - ( ) En calcular los valores de Shapley de la teoría de juegos
    - ( ) En propagar la relevancia hacia atrás por la red
    - (x) En perturbar la entrada localmente y ajustar un modelo simple que aproxime al clasificador en esa vecindad
    - ( ) En ocultar características durante el entrenamiento

235. El método SHAP para explicabilidad...

    - (x) atribuye importancia a cada característica basándose en los valores de Shapley
    - ( ) solo funciona con redes convolucionales
    - ( ) entrena el modelo para que sea interpretable desde el inicio
    - ( ) elimina las características redundantes del conjunto

236. ¿Qué exige el EU AI Act a los sistemas de IA de alto riesgo?

    - ( ) Que usen exclusivamente modelos lineales
    - ( ) Que se entrenen sin datos personales
    - (x) Trazabilidad de las decisiones, explicabilidad de los resultados y supervisión humana
    - ( ) Que alcancen una precisión mínima del 99%

237. ¿Qué abarca el campo de la AI Safety (seguridad de la IA)?

    - (x) Prevenir accidentes, usos indebidos y consecuencias dañinas de los sistemas de IA
    - ( ) Maximizar la precisión del modelo en el conjunto de test
    - ( ) Cifrar los datos de entrenamiento del modelo
    - ( ) Reducir el coste computacional del entrenamiento

238. En el contexto de AI Safety, la robustez es...

    - ( ) la capacidad de entrenar con muy pocos datos
    - ( ) la rapidez de la inferencia del modelo
    - (x) la capacidad de mantener el rendimiento frente a perturbaciones y entradas adversarias
    - ( ) la facilidad para interpretar las decisiones del modelo

239. La afirmación "AI safety ≠ AI security" significa que...

    - ( ) ambos términos son intercambiables
    - ( ) la seguridad informática es irrelevante para la IA
    - ( ) la robustez no forma parte de ninguno de los dos
    - (x) prevenir daños accidentales/uso indebido (safety) es distinto de proteger frente a atacantes (security)

240. ¿Cuál de los siguientes es una amenaza a la robustez de un sistema de IA?

    - ( ) Disponer de un conjunto de entrenamiento muy grande
    - (x) Los ataques adversarios y las puertas traseras (backdoors)
    - ( ) Usar validación cruzada en la evaluación
    - ( ) Aplicar normalización a los datos de entrada

241. La detección Out-of-Distribution (OOD) se ocupa de...

    - ( ) acelerar el entrenamiento en GPU
    - ( ) reducir la dimensionalidad de los datos
    - (x) identificar, en un entorno de mundo abierto, datos que difieren de la distribución de entrenamiento
    - ( ) etiquetar automáticamente los datos de entrenamiento

242. La distinción entre OOD "near" y "far" se refiere a...

    - (x) cuán semánticamente cercanos o lejanos son los datos anómalos respecto a los de entrenamiento
    - ( ) la distancia física entre los servidores de inferencia
    - ( ) el número de capas de la red usada
    - ( ) la antigüedad de los datos recogidos

243. ¿Por qué es importante la detección OOD?

    - ( ) Porque siempre mejora la precisión sobre datos conocidos
    - ( ) Porque elimina la necesidad de un conjunto de test
    - ( ) Porque reduce el número de parámetros del modelo
    - (x) Porque un modelo puede dar predicciones muy confiadas sobre datos que en realidad no conoce

244. Una idea habitual para detectar ejemplos OOD es que...

    - ( ) deben estar muy cerca de los ejemplos de entrenamiento en el espacio de características
    - (x) deben quedar lejos, en el espacio de características, de los ejemplos in-distribution (ID)
    - ( ) siempre tienen la misma etiqueta que los ejemplos ID
    - ( ) se identifican aumentando la tasa de aprendizaje

245. ¿Qué advierte el principio "correlación no implica causalidad"?

    - (x) Que dos variables pueden estar correlacionadas sin que una cause la otra
    - ( ) Que la correlación siempre indica una relación causal directa
    - ( ) Que las variables causales nunca están correlacionadas
    - ( ) Que la causalidad se mide con el coeficiente de correlación

246. En el ejemplo de clasificar vacas y camellos, el modelo falla al predecir "camello" para una vaca en la playa porque...

    - ( ) las vacas y los camellos son indistinguibles
    - ( ) el modelo no tenía suficientes capas ocultas
    - (x) aprendió un atajo (shortcut) basado en el fondo en lugar del animal: una correlación espuria
    - ( ) la imagen estaba mal etiquetada en el test

247. ¿Por qué son peligrosas las correlaciones espurias en aplicaciones reales?

    - ( ) Porque mejoran la generalización a entornos nuevos
    - (x) Porque el modelo se apoya en patrones irrelevantes y falla fuera del entrenamiento (p. ej. una marca de agua en diagnóstico)
    - ( ) Porque reducen el tamaño del modelo
    - ( ) Porque obligan a usar menos datos

248. En el caso clásico de helados y ahogamientos, la variable "calor" actúa como...

    - ( ) una variable irrelevante para ambos
    - ( ) la causa directa de los helados sobre los ahogos
    - ( ) una etiqueta de clase
    - (x) una variable confusora (confounder) que aumenta de forma independiente ambos fenómenos

249. ¿Qué permite afirmar una relación causal más allá de la mera correlación?

    - (x) La intervención: actuar sobre una variable y observar el efecto
    - ( ) Aumentar el tamaño de la muestra observacional
    - ( ) Calcular un coeficiente de correlación más alto
    - ( ) Normalizar las variables implicadas

250. El causal discovery se utiliza cuando...

    - ( ) se dispone de un experimento controlado perfecto
    - ( ) se quiere reducir la dimensionalidad de los datos
    - (x) solo hay datos observacionales y se intenta inferir el grafo causal a partir de (in)dependencias estadísticas
    - ( ) se necesita etiquetar datos automáticamente

251. El "shortcut learning" (aprendizaje por atajo) consiste en que el modelo...

    - ( ) aprende la relación causal verdadera del problema
    - (x) se apoya en señales fáciles pero irrelevantes que correlacionan con la etiqueta en el entrenamiento
    - ( ) memoriza todos los ejemplos de entrenamiento
    - ( ) reduce su número de parámetros automáticamente

252. Que dos variables muestren una correlación positiva fuerte (como helados y ahogos) indica que...

    - ( ) una es necesariamente la causa de la otra
    - ( ) no existe ninguna relación entre ellas
    - ( ) ambas son irrelevantes para cualquier análisis
    - (x) tienden a variar juntas, pero la relación puede deberse a un factor común y no a causalidad

253. El olvido catastrófico (catastrophic forgetting) ocurre cuando...

    - (x) un modelo reentrenado en una tarea nueva pierde drásticamente el rendimiento en las anteriores
    - ( ) un modelo no consigue aprender ninguna tarea
    - ( ) el modelo memoriza perfectamente todas las tareas a la vez
    - ( ) se eliminan datos del conjunto de entrenamiento a propósito

254. ¿Por qué se produce el olvido catastrófico?

    - ( ) Porque el modelo no tiene suficientes capas
    - ( ) Porque las tareas nuevas siempre son más fáciles
    - (x) Porque los gradientes de la nueva tarea sobrescriben los pesos importantes de las anteriores
    - ( ) Porque se reduce la tasa de aprendizaje

255. El escenario "task-incremental" del aprendizaje continuo se caracteriza por...

    - ( ) añadir nuevas clases en cada tarea sin identificador
    - ( ) mantener las clases pero cambiar la distribución de entrada
    - ( ) entrenar todas las tareas simultáneamente
    - (x) conocer el identificador de la tarea en test, pudiendo usar un cabezal por tarea

256. El escenario "class-incremental" es el más desafiante porque...

    - ( ) las clases nunca cambian entre tareas
    - (x) se añaden nuevas clases y el modelo debe distinguir entre todas sin recibir el ID de tarea
    - ( ) siempre se dispone del identificador de tarea en test
    - ( ) solo cambia la distribución de los datos de entrada

257. La técnica EWC (Elastic Weight Consolidation) combate el olvido...

    - (x) penalizando los cambios en los pesos importantes para tareas previas, ponderados por la matriz de Fisher
    - ( ) reentrenando el modelo entero desde cero en cada tarea
    - ( ) eliminando las capas ocultas menos usadas
    - ( ) aumentando indefinidamente la tasa de aprendizaje

258. LoRA (Low-Rank Adaptation) aplicado al aprendizaje continuo...

    - ( ) actualiza todos los pesos del modelo en cada tarea
    - ( ) elimina la necesidad de un modelo base preentrenado
    - (x) entrena adaptadores de bajo rango por tarea mientras los pesos base permanecen congelados
    - ( ) fusiona todas las tareas en un único cabezal sin parámetros nuevos

259. La métrica Backward Transfer (BWT) en aprendizaje continuo...

    - ( ) mide la rapidez de entrenamiento de cada tarea
    - ( ) cuenta el número de parámetros añadidos por tarea
    - ( ) evalúa la precisión solo en la última tarea
    - (x) mide cuánto cambia el rendimiento en tareas anteriores tras aprender nuevas (negativo = olvido)

260. El machine unlearning aborda el problema de...

    - ( ) añadir nuevas tareas sin olvidar las anteriores
    - (x) hacer que un modelo olvide información específica como si nunca la hubiera visto
    - ( ) acelerar la inferencia del modelo
    - ( ) reducir la dimensionalidad de los datos de entrada
