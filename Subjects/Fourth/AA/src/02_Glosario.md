
# Glosario

**A**

- **Aprendizaje Automático (AA):** Ciencia de programar ordenadores para que aprendan de los datos sin ser programados explícitamente. Se enfoca en algoritmos cuyo rendimiento en una tarea mejora con la experiencia.
- **Aprendizaje Basado en Instancias:** Sistema que memoriza los ejemplos de entrenamiento y clasifica nuevos casos empleando una medida de similitud (como la distancia matemática), sin requerir una fase de entrenamiento previo.
- **Aprendizaje Basado en Modelos:** Sistema que construye una función matemática (modelo) a partir de los datos para generalizar y hacer predicciones minimizando un error.
- **Aprendizaje Continuo (Continual Learning):** Paradigma donde el modelo aprende múltiples tareas secuencialmente en el tiempo. Su mayor reto es mantener el rendimiento en tareas antiguas sin reentrenar desde cero.
- **Aprendizaje No Supervisado:** Entrenamiento con datos no etiquetados donde el algoritmo busca patrones ocultos. Sus tareas principales incluyen agrupamiento (clustering), reducción de dimensionalidad y detección de anomalías.
- **Aprendizaje por Refuerzo:** Método donde un agente interactúa con un entorno tomando acciones y recibiendo recompensas o penalizaciones, optimizando una política que maximice las recompensas acumuladas a largo plazo.
- **Aprendizaje Supervisado:** Método que utiliza datos previamente etiquetados con las soluciones deseadas, principalmente para resolver tareas de clasificación y regresión.
- **Árboles de Decisión (CART):** Modelos no paramétricos y basados en reglas que dividen el espacio buscando reducir la impureza (Gini/Entropía). Son altamente propensos al sobreajuste si no se restringen sus hiperparámetros (ej. controlando su profundidad máxima).
- **Atención (Mecanismo de):** Permite conexiones directas entre los elementos de una secuencia, calculando matemáticamente (mediante Queries, Keys y Values) cuánto debe atender cada componente al resto, reemplazando así la memoria secuencial por comunicación directa.
- **AUC (Área Bajo la Curva):** Métrica asociada a la curva ROC. Un clasificador perfecto obtiene un AUC de 1, mientras que un clasificador puramente aleatorio obtiene un 0.5.
- **Autoencoders:** Arquitecturas de red neuronal divididas en encoder y decoder que aprenden representaciones latentes al comprimir la información y reconstruirla, siendo muy eficaces en tareas como la reducción de ruido.

**B**

- **Bagging:** Técnica de ensamblado (ensemble) que reduce la varianza entrenando el mismo algoritmo en diversos subconjuntos de datos muestreados con reemplazo (bootstrap).
- **Batch Normalization (Normalización por Lotes):** Capa en redes profundas que centra, normaliza y escala las entradas según su minilote. Previene la inestabilidad de los gradientes, acelera la convergencia y actúa como regularizador.
- **Boosting:** Método de ensamblado donde los modelos débiles se entrenan secuencialmente, y cada nuevo predictor intenta corregir los fallos residuales de su predecesor (ej. AdaBoost).

**C**

- **Causal Representation Learning:** Intento de descomponer el espacio latente de la IA separando los factores causales invariantes (el contenido real) de los factores espurios o engañosos (el entorno o estilo).
- **Clustering (Agrupamiento):** Técnica no supervisada que asigna instancias a grupos subyacentes de alta similitud. Algoritmos destacados incluyen K‑Means y DBSCAN.
- **Curva ROC:** Gráfico que evalúa el rendimiento de clasificadores binarios mostrando el compromiso entre la tasa de verdaderos positivos (recuperación) y la tasa de falsos positivos a través de distintos umbrales de decisión.

**D**

- **Data-Centric AI:** Enfoque de la ingeniería de IA donde, manteniendo arquitecturas de modelo estandarizadas, el esfuerzo principal se dedica a limpiar, adquirir y mejorar la calidad de los datos.
- **Detección de Anomalías:** Tarea no supervisada encargada de aprender la frontera de normalidad de un dataset para identificar valores raros, atípicos o ruidosos.
- **Discretización:** Transformación de características numéricas continuas en variables categóricas de intervalos, vital para algoritmos incapaces de procesar campos numéricos puros.
- **Dropout (Abandono):** Poderoso regularizador para redes neuronales en el que cada neurona tiene una probabilidad específica de apagarse en cada paso del entrenamiento, previniendo coadaptaciones frágiles y forzando a aprender características más generalizables.

**E**

- **Early Stopping (Parada Anticipada):** Estrategia de regularización para optimizaciones iterativas que detiene el algoritmo de entrenamiento cuando el error en el conjunto de validación llega a su mínimo y comienza a empeorar.
- **Ecuación de Bellman:** Ecuación recursiva en el corazón del aprendizaje por refuerzo que conecta el valor de un estado con el valor esperado de los estados futuros subsiguientes.
- **Ensembles (Ensamblados):** Consisten en fusionar múltiples modelos individuales (aprendices) con el propósito de generar una predicción final con menor error y mayor robustez, guiados por la “sabiduría de la multitud”.
- **EWC (Elastic Weight Consolidation):** Técnica usada en el aprendizaje continuo que penaliza el cambio de los pesos críticos pertenecientes a tareas pasadas (usando la Matriz de Información de Fisher) para evadir el olvido catastrófico.

**F**

- **F1 Score:** Métrica de clasificación construida como la media armónica entre la precisión y la recuperación. Favorece a los modelos que logran un balance equilibrado entre ambas, penalizando fuertemente si una de ellas es baja.

**G**

- **Gradient Clipping (Recorte de Gradientes):** Limitar artificialmente la magnitud de los gradientes a un umbral preestablecido durante la retropropagación. Fundamental en redes recurrentes para evitar explosiones matemáticas.

**H**

- **Hiperparámetro:** Un parámetro estructural del propio algoritmo de aprendizaje o de la regularización, definido externamente antes del entrenamiento, y que el modelo no puede aprender ni actualizar de los datos.

**I**

- **IA Explicable (XAI):** Dominio orientado a auditar y entender los razonamientos internos de cajas negras. Incluye taxonomías como local/global, pre-hoc/post-hoc y agnóstico/específico.

**L**

- **Lasso (Norma L1):** Regularización de modelos lineales que restringe los pesos aplicando penalizaciones absolutas. Posee la propiedad natural de reducir a cero exacto los atributos inútiles, logrando selección automática de características.
- **LIME:** Algoritmo agnóstico de explicabilidad local (XAI) que perturba las entradas alrededor de una predicción y ajusta un modelo muy simple sobre ella para descubrir en qué se basó la caja negra.

**M**

- **MAE (Error Medio Absoluto):** Métrica de evaluación para regresiones cimentada en la norma Manhattan (L1); su gran ventaja respecto al MSE es que no es tan sensible al ruido generado por los valores atípicos (outliers).
- **Model-Centric AI:** Enfoque tradicional que centra sus iteraciones en modificar la arquitectura y los hiperparámetros del código del modelo, asumiendo el dataset como estático.

**O**

- **Olvido Catastrófico (Catastrophic Forgetting):** Defecto severo inherente a las redes neuronales estándar, en el cual sobrescriben el conocimiento de una tarea anterior al aprender una tarea secuencial nueva mediante el descenso de gradiente.
- **OOD (Out-of-Distribution):** Situaciones en las que los datos proporcionados al modelo provienen de distribuciones marginales distintas a las vistas en entrenamiento, suponiendo vulnerabilidades enormes en un contexto de mundo abierto.
- **Overfitting (Sobreajuste):** Circunstancia en la que un modelo es excesivamente complejo y se ajusta meticulosamente al ruido subyacente de la muestra de entrenamiento, impidiéndole generalizar correctamente ante instancias inexploradas.

**P**

- **Pasting:** Algoritmo de ensamblado homólogo al bagging, con la particularidad de que los subconjuntos aleatorios de entrenamiento se seleccionan estricta y obligatoriamente sin reemplazo.
- **PCA (Análisis de Componentes Principales):** Técnica canónica no supervisada para reducir la dimensionalidad. Proyecta los datos matemáticamente (vía SVD) hacia un hiperplano que consigue preservar su máxima varianza.
- **Precisión (Precision):** Métrica en clasificación que cuantifica la proporción de aciertos exclusivamente entre todos aquellos elementos que el modelo predijo como positivos.

**R**

- **Recuperación / Sensibilidad (Recall):** Fracción matemática de instancias que efectivamente pertenecían a la clase positiva que fueron correctamente identificadas por el modelo.
- **Redes Neuronales Convolucionales (CNN):** Modelos caracterizados por su conectividad dispersa y compartición de pesos mediante kernels, arquitectónicamente superiores para extraer características automatizadas de matrices (imágenes).
- **Regularización:** Constreñir intencionalmente los grados de libertad de un modelo paramétrico para restringir su complejidad o reducir los pesos, actuando como cura principal frente al sobreajuste.
- **Ridge (Norma L2):** Método de regularización lineal que restringe la magnitud de los pesos penalizándolos cuadráticamente. A diferencia del Lasso, minimiza los valores pero raramente los anula por completo.
- **RMSE (Raíz del Error Cuadrático Medio):** Medida evaluativa prioritaria en regresión apoyada en la norma Euclídea; es fuertemente sensible ya que eleva al cuadrado y amplifica los errores grandes.

**S**

- **Selección de Características (Feature Selection):** Proceso mediante algoritmos Filtro o Envolventes que determina qué subconjunto óptimo de variables (columnas) debe utilizarse, minimizando la complejidad del sistema final.
- **Selección de Instancias:** Optimización orientada al recorte de filas en la base de datos, reteniendo instancias cruciales de las fronteras de decisión y descartando duplicados o ruidosos (vital en el k‑NN).
- **Self-Attention:** Mecanismo transformacional donde los elementos (Queries, Keys y Values) son extraídos de la misma secuencia de entrada, forzando a los tokens a interactuar unos con otros sin la dependencia temporal del orden lineal.
- **SHAP:** Sistema XAI fundamentado en la teoría de juegos (Valores de Shapley); asegura explicaciones justas garantizando el peso y contribución marginal exacta que cada variable brindó a la respuesta final.
- **SISA:** Paradigma arquitectónico de Machine Unlearning que segmenta el aprendizaje en fragmentos independientes (Sharded) para admitir aislar y olvidar características concretas dictadas por las leyes de privacidad, sin incurrir en costes inabarcables por reentrenamiento completo.

**T**

- **Teorema "No Free Lunch" (NFL):** Postulado que garantiza que sin adoptar asunciones previas sobre un conjunto de datos, ningún algoritmo computacional ostenta superioridad sobre los demás; se ha de probar o asumir empíricamente.
- **Transformer:** Módulo fundacional paralelo en aprendizaje profundo orientado a secuencias; descarta toda recurrencia interna estructurándose en mecanismos Self-Attention paralelos en conjunto con codificación posicional para conservar el orden.

**U**

- **Underfitting (Subajuste):** Circunstancia opuesta al sobreajuste en donde el modelo estadístico es demasiado ingenuo (baja capacidad representativa o excesiva regularización) como para aprender o ajustarse ni siquiera a los datos de entrenamiento base.

