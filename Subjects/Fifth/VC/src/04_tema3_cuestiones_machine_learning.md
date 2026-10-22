# Cuestiones y Autoevaluación de Machine Learning

## Tema 3: Introducción al Aprendizaje Automático

Este capítulo recoge la resolución analítica, matemática y conceptual de la batería oficial de autoevaluación correspondiente al bloque temático 3.1 (*(A Very Brief) Introduction to Machine Learning*) de la asignatura Visión por Computador, impartida por el profesor Pablo Mesejo en el Departamento de Ciencias de la Computación e Inteligencia Artificial de la Universidad de Granada.

El aprendizaje automático proporciona las herramientas para que un sistema aprenda patrones complejos directamente a partir de datos visuales. La colección de 32 cuestiones aborda los fundamentos de la disciplina: paradigmas de supervisión, formulación de modelos lineales y redes neuronales, dinámica del descenso de gradiente, prevención del sobreajuste mediante regularización, protocolos de validación rigurosos y fenómenos contemporáneos como el doble descenso. Las deducciones se apoyan en los manuales de referencia del curso: Abu-Mostafa et al. (2012), Bishop (2006), Hastie et al. (2009), Murphy (2022) y Szeliski (2022).

\vspace{0.5cm}

### Bloque I: Concepto, Paradigmas de Aprendizaje y Modelos Básicos

\vspace{0.3cm}

**QUIZ 1: Idea central del aprendizaje automático (Diapositiva 4)**

*Enunciado:*

What is the central idea of machine learning?

A. Writing explicit rules to describe the data  
B. Using data plus learning algorithms to uncover underlying patterns  
C. Building symbolic reasoning systems  
D. None of the above  

*Respuesta correcta:* **B. Using data plus learning algorithms to uncover underlying patterns**

*Respuesta breve:*

El aprendizaje automático invierte el paradigma clásico de la programación: en lugar de codificar manualmente reglas deterministas, alimenta un algoritmo de optimización con observaciones para que infiera de forma autónoma los patrones subyacentes.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Como formalizan Abu-Mostafa et al. (2012) en *Learning from Data* y François Chollet (2018), la programación tradicional toma como entrada reglas lógicas codificadas a mano y datos brutos para generar respuestas computadas. El aprendizaje automático toma como entrada datos empíricos y respuestas observadas para que un algoritmo de aprendizaje descubra la función o conjunto de reglas subyacentes:

$$\text{Datos} + \text{Algoritmo de Aprendizaje} \longrightarrow \text{Modelo / Patrones}$$

El objetivo operativo consiste en estimar una hipótesis $h \in \mathcal{H}$ que aproxime con fidelidad una función objetivo desconocida $f: \mathcal{X} \to \mathcal{Y}$.

*Análisis de las opciones descartadas:*

- **A. Writing explicit rules to describe the data:** Describe la programación imperativa y los sistemas expertos basados en reglas cableadas a mano, incapaces de escalar ante variaciones visuales complejas.
- **C. Building symbolic reasoning systems:** Caracteriza la inteligencia artificial simbólica clásica (sistemas basados en lógica de primer orden y grafos de conocimiento), que no aprenden de distribuciones estadísticas continuas.
- **D. None of the above:** La opción B sintetiza con exactitud la definición matemática del campo.

\vspace{0.4cm}

**QUIZ 2: Condiciones de inaplicabilidad del aprendizaje automático (Diapositiva 4)**

*Enunciado:*

When can't we apply machine learning algorithms?

A. There is no pattern to learn, only randomness  
B. We can describe our problem mathematically  
C. We have no data whatsoever  
D. We have data, but we know it's poorly annotated  

*Respuesta correcta:* **A, B y C representan las condiciones canónicas de inaplicabilidad; la opción D es la excepción donde el aprendizaje sí es viable**

*Respuesta breve:*

Siguiendo el criterio de Abu-Mostafa et al. (2012), el aprendizaje automático no debe ni puede aplicarse si el fenómeno es puro ruido aleatorio (A), si disponemos de una fórmula determinista cerrada (B) o si carecemos por completo de datos (C). En cambio, disponer de datos con anotaciones ruidosas o deficientes (D) sí permite aplicar técnicas específicas como aprendizaje débilmente supervisado (*weakly supervised learning*).

\vspace{0.3cm}

*Justificación teórica y analítica:*

Abu-Mostafa et al. (2012, Cap. 1) formulan tres condiciones necesarias para que un problema requiera y admita aprendizaje automático:

\vspace{0.2cm}

1. Existe un patrón subyacente.
2. No es posible describirlo mediante una fórmula matemática exacta de forma analítica cerrada.
3. Se dispone de observaciones empíricas (datos).

\vspace{0.2cm}

Al examinar las opciones ante la pregunta de cuándo **no** podemos aplicar aprendizaje automático:

- Si no hay patrón y solo existe aleatoriedad estocástica pura (opción A), cualquier algoritmo se limitará a ajustar ruido espurio, derivando en un sobreajuste absoluto sin capacidad predictiva.
- Si el fenómeno cuenta con una derivación física o matemática exacta (opción B), como calcular el tiro parabólico en el vacío o liquidar una tabla de retenciones fiscales fijas, la solución cerrada es exacta, computacionalmente óptima y trivialmente verificable, haciendo innecesario e ineficiente recurrir a aproximaciones estadísticas.
- Si no existen datos (opción C), la formulación empírica $D = \{(\mathbf{x}_i, y_i)\}$ queda vacía y ningún parámetro puede actualizarse.
- Por el contrario, la opción D describe un escenario donde **sí** se aplica aprendizaje automático: el aprendizaje débilmente supervisado (*weakly supervised learning*) y el aprendizaje con etiquetas ruidosas (*learning with label noise*), apoyados en funciones de pérdida robustas o destilación de conocimiento.

\vspace{0.4cm}

**QUIZ 3: Definición de aprendizaje autosupervisado (Diapositiva 8)**

*Enunciado:*

Which statement best describes self-supervised learning?

A. It uses human-provided labels for every training example.  
B. It learns a policy exclusively from rewards received from an environment.  
C. It derives supervisory signals or training targets from the data itself.  
D. It necessarily requires only one labeled example per class.  

*Respuesta correcta:* **C. It derives supervisory signals or training targets from the data itself**

*Respuesta breve:*

El aprendizaje autosupervisado extrae la señal de entrenamiento a partir de la propia estructura intrínseca del dato sin intervención humana, formulando tareas pretextuales como predecir parches enmascarados, rotaciones o contrastar vistas aumentadas.

\vspace{0.3cm}

*Justificación teórica y analítica:*

En el aprendizaje autosupervisado (*Self-Supervised Learning*, SSL), el sistema convierte datos no etiquetados en problemas supervisados mediante tareas pretexto (*pretext tasks*). Por ejemplo, en visión por computador, modelos como SimCLR, MoCo o Masked Autoencoders (MAE) ocultan parches de una imagen y entrenan la red para reconstruirlos, o contrastan representaciones de distintas transformaciones geométricas de la misma escena. La función de pérdida se calcula comparando la predicción del modelo con la porción retenida u oculta del propio dato, prescindiendo de etiquetas manuales.

*Análisis de las opciones descartadas:*

- **A. It uses human-provided labels for every training example:** Definición canónica del aprendizaje totalmente supervisado (*Supervised Learning*).
- **B. It learns a policy exclusively from rewards received from an environment:** Describe el aprendizaje por refuerzo (*Reinforcement Learning*).
- **D. It necessarily requires only one labeled example per class:** Define el régimen de aprendizaje con un único ejemplo (*one-shot learning*), una variante de *few-shot learning*.

\vspace{0.4cm}

**QUIZ 4: Identificación de paradigma a partir de vídeo demostrativo (Diapositivas 8 y 13)**

*Enunciado:*

Observe the video and tell the machine learning paradigm that you think it's more likely being used? (Vídeo: DQN Breakout, DeepMind, https://www.youtube.com/watch?v=TmPfTpjtdgg)

A. Supervised Learning  
B. Reinforcement Learning  
C. Unsupervised Learning  
D. Self-supervised Learning  

*Respuesta correcta:* **B. Reinforcement Learning**

*Respuesta breve:*

El vídeo muestra el agente DQN (*Deep Q-Network*) de DeepMind aprendiendo a jugar a Atari Breakout mediante interacción con el entorno, recibiendo la puntuación del juego como recompensa escalar para optimizar su política de acciones.

\vspace{0.3cm}

*Justificación teórica y analítica:*

El experimento seminal de Mnih et al. (Nature, 2015) introdujo las redes neuronales profundas en el marco del aprendizaje por refuerzo (*Deep Q-Networks*). El agente observa el estado actual $s_t$ (los últimos cuatro fotogramas de la pantalla en escala de grises), ejecuta una acción $a_t \in \{\text{izquierda}, \text{derecha}, \text{disparo}, \text{espera}\}$ guiada por una política $\epsilon$-codiciosa, y recibe una recompensa $r_t$ (incremento en el marcador del juego) junto con el nuevo estado $s_{t+1}$. La red aprende a estimar la función de valor óptima $Q^*(s, a)$ mediante la ecuación de Bellman:

$$Q(s, a) \leftarrow Q(s, a) + \alpha \left[ r + \gamma \max_{a'} Q(s', a') - Q(s, a) \right]$$

A partir del episodio 600, el agente descubre de forma autónoma la estrategia óptima: perforar un túnel lateral en los bloques para que la bola rebote en el techo a alta velocidad acumulando puntos de forma continuada.

*Análisis de las opciones descartadas:*

- **A. Supervised Learning:** Requeriría un conjunto de datos con millones de trayectorias previamente etiquetadas por jugadores expertos con la acción exacta a tomar en cada milisegundo.
- **C. Unsupervised Learning:** Agruparía estados o reduciría dimensionalidad sin noción de recompensa ni optimización de toma de decisiones secuenciales.
- **D. Self-supervised Learning:** Aunque la red convolucional extrae características visuales de los píxeles, la dinámica que guía la toma de decisiones y el aprendizaje temporal es un proceso de decisión de Markov gobernado por refuerzo.

\vspace{0.4cm}

**QUIZ 5: Elementos actualizados durante el entrenamiento (Diapositiva 10)**

*Enunciado:*

What do models "learn"/update in most cases?

A. Features  
B. Labels  
C. Weights/parameters  
D. Only hyperparameters  

*Respuesta correcta:* **C. Weights/parameters**

*Respuesta breve:*

Los modelos paramétricos aprenden ajustando iterativamente sus pesos y sesgos internos mediante gradiente descendente para minimizar el error empírico.

\vspace{0.3cm}

*Justificación teórica y analítica:*

En modelos de regresión, clasificadores lineales y redes neuronales, el conjunto de parámetros entrenables se denota como $\mathbf{w} \in \mathbb{R}^d$ o $\boldsymbol{\theta}$. El entrenamiento consiste en resolver un problema de optimización continua:

$$\mathbf{w}^* = \arg\min_{\mathbf{w}} \mathcal{L}(\mathbf{w}; \mathcal{D}_{train})$$

Los pesos modulan la importancia y combinación de las señales de entrada a lo largo de las capas.

*Análisis de las opciones descartadas:*

- **A. Features:** Son las variables o atributos de entrada extraídos de los datos. En arquitecturas profundas las representaciones intermedias emergen de los datos, pero lo que se actualiza físicamente mediante los gradientes son los pesos de los filtros.
- **B. Labels:** Constituyen la verdad terreno fija (*ground truth*), permaneciendo inmutables durante el ajuste.
- **D. Only hyperparameters:** Los hiperparámetros (tasa de aprendizaje $\eta$, factor de regularización $\lambda$, número de capas o tamaño de lote) no se optimizan por descenso de gradiente estándar, sino que se configuran externamente antes del entrenamiento o se ajustan mediante búsqueda sobre el conjunto de validación.

\vspace{0.4cm}

**QUIZ 6: Modelos sin fase de entrenamiento explícita (Diapositiva 10)**

*Enunciado:*

Which model has no proper "training" phase in the traditional sense and mainly memorizes data?

A. Logistic regression  
B. k-Nearest Neighbors (KNN)  
C. Support Vector Machine  
D. Decision Tree  

*Respuesta correcta:* **B. k-Nearest Neighbors (KNN)**

*Respuesta breve:*

KNN es un clasificador perezoso (*lazy learner*) basado en instancias: no ajusta ningún vector de parámetros durante el entrenamiento, limitándose a almacenar el conjunto de datos para calcular distancias en tiempo de inferencia.

\vspace{0.3cm}

*Justificación teórica y analítica:*

A diferencia de los modelos ansiosos (*eager learners*), el algoritmo de los $k$ vecinos más cercanos no construye una función discriminante explícita durante una etapa de entrenamiento previa. Su coste de entrenamiento es $O(1)$ (o el tiempo requerido para indexar los datos en una estructura tipo *KD-Tree* o *Ball-Tree*). Toda la carga computacional se difiere a la fase de inferencia, donde, para cada punto de consulta $\mathbf{x}_q$, debe calcular la distancia métrica frente a todos los puntos almacenados:

$$d(\mathbf{x}_q, \mathbf{x}_i) = \|\mathbf{x}_q - \mathbf{x}_i\|_2$$

La predicción final se obtiene mediante votación mayoritaria entre los $k$ puntos más próximos en clasificación, o mediante el promedio de sus valores en regresión.

*Análisis de las opciones descartadas:*

- **A. Logistic regression:** Requiere optimización numérica mediante descenso de gradiente o algoritmos cuasi-Newton para hallar el vector de coeficientes $\mathbf{w}$.
- **C. Support Vector Machine:** Resuelve un problema de programación cuadrática convexa para encontrar el hiperplano de margen máximo y los multiplicadores de Lagrange asociados a los vectores de soporte.
- **D. Decision Tree:** Construye de forma voraz una jerarquía de divisiones ortogonales evaluando la ganancia de información o la reducción del índice de impureza de Gini en cada nodo.

\vspace{0.4cm}

**QUIZ 7: Modelos discriminativos frente a generativos (Diapositiva 9)**

*Enunciado:*

Discriminative vs. Generative: which pairing is correct (assuming inputs X and outputs Y)?

A. Discriminative $\to p(X)$; Generative $\to p(Y|X)$  
B. Discriminative $\to p(Y|X)$; Generative $\to p(X)$ or $p(X,Y)$  
C. Discriminative $\to p(X,Y)$; Generative $\to p(Y|X)$  
D. Both model $p(X)$ only  

*Respuesta correcta:* **B. Discriminative $\to p(Y|X)$; Generative $\to p(X)$ or $p(X,Y)$**

*Respuesta breve:*

Los modelos discriminativos aprenden la frontera de decisión modelando la probabilidad condicional de las clases dadas las entradas $p(Y|X)$, mientras que los modelos generativos aprenden la distribución conjunta de las variables $p(X,Y)$ o la distribución marginal de los datos $p(X)$.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Siguiendo la formalización canónica de Ng y Jordan (NeurIPS, 2001) y Murphy (2022):

\vspace{0.2cm}

- **Enfoque discriminativo:** Modela directamente la frontera entre clases estimando $p(Y|X)$ (ejemplos: regresión logística, redes neuronales clásicas) o una función de asignación determinista $f(X)$ sin probabilidades explícitas (ejemplo: SVM dura). No gasta capacidad representacional en modelar cómo se distribuyen las entradas $X$ en el espacio.
- **Enfoque generativo:** Modela la distribución conjunta $p(X, Y) = p(X|Y)p(Y)$. Al capturar cómo se generan los datos para cada clase, puede aplicar la regla de Bayes para inferir la probabilidad posterior:

$$p(Y|X) = \frac{p(X|Y)p(Y)}{p(X)}$$

Además, un modelo generativo permite muestrear sintéticamente nuevos datos artificiales $\mathbf{x}_{nuevo} \sim p(X)$ (ejemplos: Naive Bayes, Modelos de Mezclas Gaussianas, Variational Autoencoders y Modelos de Difusión).

*Análisis de las opciones descartadas:*

- **A y C:** Intercambian las distribuciones o invierten el orden epistemológico de modelado.
- **D:** Limitarse a modelar exclusivamente $p(X)$ corresponde a la estimación de densidad no supervisada, ignorando las etiquetas del problema discriminativo.

\vspace{0.4cm}

**QUIZ 8: Señal de supervisión en aprendizaje por refuerzo (Diapositivas 8 y 13)**

*Enunciado:*

In reinforcement learning, the learner mainly uses?

A. Exact labels for each state/situation  
B. A reward or penalty signal to learn a policy  
C. No label or feedback at all  
D. None of the above  

*Respuesta correcta:* **B. A reward or penalty signal to learn a policy**

*Respuesta breve:*

En aprendizaje por refuerzo no existen respuestas correctas prescritas para cada estado; el agente recibe recompensas o castigos escalares derivados de sus acciones y aprende una política que maximiza la recompensa acumulada esperada.

\vspace{0.3cm}

*Justificación teórica y analítica:*

El paradigma de aprendizaje por refuerzo modela la interacción entre un agente y un entorno formulado como un Proceso de Decisión de Markov (MDP), formalizado mediante la tupla $(\mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma)$. El objetivo no consiste en ajustar una salida a una etiqueta supervisada instantánea $y$, sino en encontrar una política $\pi(a|s)$ que maximice el retorno acumulado descontado a lo largo del horizonte temporal:

$$G_t = \sum_{k=0}^{\infty} \gamma^k r_{t+k+1}$$

donde $\gamma \in [0, 1)$ representa el factor de descuento temporal.

*Análisis de las opciones descartadas:*

- **A. Exact labels for each state/situation:** Corresponde al aprendizaje supervisado clásico o al aprendizaje por imitación (*behavioral cloning*), donde un experto humano suministra la acción perfecta para cada fotograma.
- **C. No label or feedback at all:** El aprendizaje no supervisado carece de retroalimentación; en RL existe una retroalimentación evaluativa continua mediante la recompensa escalar $r_t$.

\vspace{0.5cm}

### Bloque II: Modelos Lineales, Optimización y Funciones de Pérdida

\vspace{0.3cm}

**QUIZ 9: Formulación del descenso de gradiente (Diapositivas 12 a 15)**

*Enunciado:*

Machine learning training via gradient descent is framed as?

A. A combinatorial enumeration problem  
B. An optimization problem minimizing a loss  
C. A constraint satisfaction problem  
D. A symbolic regression problem  

*Respuesta correcta:* **B. An optimization problem minimizing a loss**

*Respuesta breve:*

El ajuste paramétrico mediante gradiente descendente formula el aprendizaje como la minimización continua y diferenciable de una función de coste sobre el espacio de pesos.

\vspace{0.3cm}

*Justificación teórica y analítica:*

El marco matemático predominante en el aprendizaje continuo es la minimización del riesgo empírico (*Empirical Risk Minimization*, ERM). Dados $N$ ejemplos $\{(\mathbf{x}_i, y_i)\}_{i=1}^N$, se define una función de pérdida $\mathcal{L}(\mathbf{w}) = \frac{1}{N}\sum_{i=1}^N \ell(f(\mathbf{x}_i; \mathbf{w}), y_i)$. Al ser $\mathcal{L}$ diferenciable con respecto al vector de pesos $\mathbf{w}$, el algoritmo actualiza los parámetros en la dirección opuesta al vector gradiente:

$$\mathbf{w}^{(t+1)} = \mathbf{w}^{(t)} - \eta \, \nabla_{\mathbf{w}} \mathcal{L}(\mathbf{w}^{(t)})$$

donde $\eta > 0$ es la tasa de aprendizaje.

*Análisis de las opciones descartadas:*

- **A. A combinatorial enumeration problem:** La optimización combinatoria explora configuraciones discretas (como la búsqueda en grafos o el problema del viajante), computacionalmente intratable para espacios continuos de millones de parámetros.
- **C. A constraint satisfaction problem:** Propio de la programación con restricciones (CSP), donde se busca cualquier asignación de variables discretas que cumpla un conjunto de cláusulas lógicas, sin noción de gradiente de descenso continuo.
- **D. A symbolic regression problem:** Técnica basada en algoritmos genéticos que busca la expresión matemática analítica exacta del árbol sintáctico, no los pesos numéricos continuos de una arquitectura fija.

\vspace{0.4cm}

**QUIZ 10: Correspondencia gráfica de modelos lineales clásicos (Diapositiva 11)**

*Enunciado:*

Which model matches each graphical representation? (Referencia: Y. Abu-Mostafa, Caltech CS156, Slide 10). Señal acumulada de entrada: $s = \sum_{i=0}^d w_i x_i$.

A. Linear classification (Perceptron)  
B. Linear regression  
C. Logistic regression  

1. $h(\mathbf{x}) = \text{sign}(s)$  
2. $h(\mathbf{x}) = s$  
3. $h(\mathbf{x}) = \theta(s)$ con función logística suave  

*Respuesta correcta:* **1-A, 2-B, 3-C**

*Respuesta breve:*

El Perceptrón aplica la función signo no diferenciable para clasificar en clases binarias discretas (1-A); la regresión lineal utiliza la identidad manteniendo la salida real continua (2-B); y la regresión logística aplica la sigmoide suave para generar probabilidades en el intervalo $[0, 1]$ (3-C).

\vspace{0.3cm}

*Justificación teórica y analítica:*

Los tres modelos comparten idéntico núcleo lineal: el cálculo de la suma ponderada o producto escalar $s = \mathbf{w}^T \mathbf{x} = \sum_{i=0}^d w_i x_i$. La diferencia radica exclusivamente en la función de activación final aplicada a la señal $s$:

\vspace{0.2cm}

1. **Perceptrón de Rosenblatt (1 $\to$ A):** Aplica la función escalón duro o signo:
   $$h(\mathbf{x}) = \text{sign}(s) \in \{-1, +1\}$$
   Produce una partición estricta mediante un hiperplano separator en el espacio de características.

2. **Regresión Lineal (2 $\to$ B):** Aplica la función identidad:
   $$h(\mathbf{x}) = s \in \mathbb{R}$$
   La salida es un número real continuo sin acotar, optimizado habitualmente mediante el error cuadrático medio.

3. **Regresión Logística (3 $\to$ C):** Aplica la función de activación sigmoide o logística $\theta(s)$:
   $$h(\mathbf{x}) = \theta(s) = \frac{1}{1 + e^{-s}} \in (0, 1)$$
   Interpreta la salida como la probabilidad condicionada posterior de la clase positiva $P(y=1|\mathbf{x})$. Al ser suave y diferenciable, permite calcular analíticamente el gradiente de la entropía cruzada.

\vspace{0.4cm}

**QUIZ 11: Configuración canónica de pérdidas y funciones de activación de salida (Diapositivas 11 y 38)**

*Enunciado:*

Fill the table with the most common configuration of loss function and output units activation function.

\vspace{0.2cm}

| Problema | Función de Pérdida (*Loss Function*) | Activación de Salida (*Output Activation*) |
| :--- | :--- | :--- |
| Regresión | (a) | (d) |
| Clasificación Binaria | (b) | (e) |
| Clasificación Multiclase | (c) | (f) |

\vspace{0.2cm}

Opciones disponibles:  
1 – Sigmoid  
2 – Mean Squared Error  
3 – Binary Crossentropy  
4 – Softmax  
5 – Identity/Linear  
6 – Categorical Crossentropy  

*Respuesta correcta:* **(a)=2, (b)=3, (c)=6, (d)=5, (e)=1, (f)=4**

*Respuesta breve:*

- Regresión: Mean Squared Error (2) con activación Identidad (5).
- Clasificación Binaria: Binary Crossentropy (3) con activación Sigmoide (1).
- Clasificación Multiclase: Categorical Crossentropy (6) con activación Softmax (4).

\vspace{0.3cm}

*Justificación teórica y analítica:*

El emparejamiento entre la función de activación de la capa de salida y la función de pérdida no es arbitrario; se deriva del principio de estimación de máxima verosimilitud (*Maximum Likelihood Estimation*, MLE):

\vspace{0.3cm}

- **Regresión continua:** Asumiendo ruido gaussiano homocedástico $\epsilon \sim \mathcal{N}(0, \sigma^2)$, maximizar la verosimilitud equivale a minimizar el error cuadrático medio:
  $$\mathcal{L}_{MSE} = \frac{1}{N}\sum_{i=1}^N (y_i - \hat{y}_i)^2$$
  La activación debe ser la función identidad $g(s) = s$ para permitir predecir cualquier valor real en $(-\infty, +\infty)$.
- **Clasificación binaria:** Modelada bajo una distribución de Bernoulli con $y \in \{0, 1\}$. La activación sigmoide acota la predicción $\hat{y} = \sigma(s) \in (0, 1)$, y la pérdida de entropía cruzada binaria penaliza la discrepancia logarítmica:
  $$\mathcal{L}_{BCE} = -\frac{1}{N}\sum_{i=1}^N \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]$$
- **Clasificación multiclase:** Modelada bajo una distribución categórica sobre $K$ clases mutuamente excluyentes. La función Softmax normaliza las salidas garantizando $\sum_{k=1}^K \hat{y}_k = 1$:
  $$\hat{y}_k = \frac{e^{s_k}}{\sum_{j=1}^K e^{s_j}}$$
  Se combina con la entropía cruzada categórica $\mathcal{L}_{CCE} = -\sum_{k=1}^K y_k \log(\hat{y}_k)$, cuya derivada respecto a los logits de entrada adopta la forma lineal limpia $\frac{\partial \mathcal{L}}{\partial s_k} = \hat{y}_k - y_k$, evitando el desvanecimiento prematuro del gradiente.

\vspace{0.4cm}

**QUIZ 13: Función del término de sesgo (*bias*) (Diapositivas 10 y 11)**

*Enunciado:*

What role does the bias term play in linear models and neural nets?

A. Forces the decision boundary through the origin  
B. Shifts decision boundaries and adds flexibility  
C. Prevents overfitting  
D. Normalizes inputs  

*Respuesta correcta:* **B. Shifts decision boundaries and adds flexibility**

*Respuesta breve:*

El término de sesgo $w_0$ traslada el hiperplano de decisión alejándolo del origen de coordenadas, otorgando la flexibilidad necesaria para separar distribuciones no centradas.

\vspace{0.3cm}

*Justificación teórica y analítica:*

En una frontera de decisión lineal definida por $\mathbf{w}^T \mathbf{x} + b = 0$, los pesos $\mathbf{w} = (w_1, \dots, w_d)$ determinan el vector normal que define la orientación angular del hiperplano. Si el sesgo $b = w_0$ fuese idénticamente cero, la ecuación quedaría restringida a $\mathbf{w}^T \mathbf{x} = 0$, obligando al hiperplano a cruzar forzosamente por el origen $(0, 0, \dots, 0)$. El parámetro $b$ actúa como una traslación rígida: la distancia euclídea ortogonal desde el origen hasta el hiperplano es exactamente $\frac{|b|}{\|\mathbf{w}\|_2}$.

*Análisis de las opciones descartadas:*

- **A. Forces the decision boundary through the origin:** Es justo lo contrario; prescindir del sesgo es lo que fuerza a cruzar el origen.
- **C. Prevents overfitting:** Añadir un parámetro libre aumenta ligeramente la capacidad del modelo; la prevención del sobreajuste se logra mediante regularización o parada temprana.
- **D. Normalizes inputs:** La normalización es una transformación de preprocesamiento sobre los datos $\mathbf{x}$, no un parámetro entrenable del modelo.

\vspace{0.4cm}

**QUIZ 31: Linealidad respecto a los pesos entrenables (Diapositiva 10)**

*Enunciado:*

Which of the following models is linear with respect to its trainable weights?

A. $y = w_0 + w_1 x_1 + w_2 x_2^2$  
B. $y = w_0 + w_1^2 x_1 + w_2 x_2$  
C. $y = w_0 + w_1 w_2 x_1 + w_3 x_2$  
D. $y = w_0 + \sin(w_1 x_1) + w_2 x_2$  

*Respuesta correcta:* **A. $y = w_0 + w_1 x_1 + w_2 x_2^2$**

*Respuesta breve:*

Un modelo es lineal si depende linealmente de sus parámetros entrenables $\mathbf{w}$, con independencia de que las variables de entrada hayan sufrido transformaciones no lineales como $x_2^2$.

\vspace{0.3cm}

*Justificación teórica y analítica:*

En teoría del aprendizaje estadístico (Hastie et al., 2009; Bishop, 2006), la definición formal de modelo lineal exige que la hipótesis pueda expresarse como una combinación lineal de funciones base fijas $\boldsymbol{\phi}(\mathbf{x})$:

$$f(\mathbf{x}; \mathbf{w}) = \mathbf{w}^T \boldsymbol{\phi}(\mathbf{x}) = \sum_{j=0}^M w_j \phi_j(\mathbf{x})$$

En la opción A, definiendo el vector de características no lineales como $\boldsymbol{\phi}(\mathbf{x}) = [1, x_1, x_2^2]^T$, la salida es un producto escalar directo $\mathbf{w}^T \boldsymbol{\phi}(\mathbf{x})$. El gradiente $\nabla_{\mathbf{w}} y = \boldsymbol{\phi}(\mathbf{x})$ no depende de los pesos, lo que garantiza que el problema de mínimos cuadrados posea una solución analítica convexa en forma cerrada (las ecuaciones normales).

*Análisis de las opciones descartadas:*

- **B. $y = w_0 + w_1^2 x_1 + w_2 x_2$:** Presenta una dependencia cuadrática con respecto a $w_1$, perdiendo la linealidad en los parámetros y generando una superficie de error no lineal respecto a $w_1$.
- **C. $y = w_0 + w_1 w_2 x_1 + w_3 x_2$:** Contiene el producto bilineal entre dos pesos ($w_1 w_2$), rompiendo la linealidad.
- **D. $y = w_0 + \sin(w_1 x_1) + w_2 x_2$:** El peso $w_1$ está atrapado dentro de la función trascendente trigonométrica no lineal seno.

\vspace{0.4cm}

**QUIZ 32: Linealidad de una red de dos capas con activaciones lineales (Diapositivas 10 y 11)**

*Enunciado:*

Consider a two-layer neural network with identity activations and no biases: $y = w_2 (w_1 x)$.

A. Linear in $x$ and linear in $(w_1, w_2)$.  
B. Linear in $x$, but nonlinear in $(w_1, w_2)$.  
C. Nonlinear in $x$, but linear in $(w_1, w_2)$.  
D. Nonlinear in both $x$ and $(w_1, w_2)$.  

*Respuesta correcta:* **B. Linear in $x$, but nonlinear in $(w_1, w_2)$**

*Respuesta breve:*

Al colapsar las funciones identidad, la salida es un múltiplo escalar directo de la entrada $y = (w_2 w_1) x$ (lineal en $x$), pero depende del producto multilineal de los pesos $w_2 w_1$ (no lineal en los parámetros).

\vspace{0.3cm}

*Justificación teórica y analítica:*

Analizamos la relación de dependencia respecto a cada término:

\vspace{0.2cm}

- **Respecto a la variable de entrada $x$:** Agrupando los escalares, tenemos $y = c \cdot x$, donde $c = w_2 w_1$. Cumple estrictamente las propiedades de aditividad $f(x + x') = f(x) + f(x')$ y homogeneidad $f(\alpha x) = \alpha f(x)$, por lo que es estrictamente lineal en $x$.
- **Respecto al vector conjunto de parámetros $\mathbf{w} = (w_1, w_2)$:** La función $g(w_1, w_2) = w_2 w_1 x$ es una forma bilineal de segundo grado. Si duplicamos simultáneamente ambos pesos ($w_1' = 2w_1, w_2' = 2w_2$), la salida se multiplica por cuatro ($2w_2 \cdot 2w_1 x = 4 w_2 w_1 x \neq 2 y$), violando la homogeneidad de grado 1.

Este principio demuestra por qué las redes neuronales profundas lineales, a pesar de colapsar a transformaciones lineales globales, exhiben dinámicas de entrenamiento no lineales y paisajes de optimización no convexos con puntos de silla (Saxe et al., 2014).

\vspace{0.5cm}

### Bloque III: Sobreajuste, Dinámica de Optimización y Curvas de Aprendizaje

\vspace{0.3cm}

**QUIZ 12: Definición y manifestación del sobreajuste (Diapositiva 50)**

*Enunciado:*

Overfitting is most closely associated with:

A. Too simple a model for a complex task  
B. Model memorizing training data and performing poorly on new data  
C. Too high the learning rate  
D. Infinite training time  

*Respuesta correcta:* **B. Model memorizing training data and performing poorly on new data**

*Respuesta breve:*

El sobreajuste ocurre cuando un modelo con excesiva capacidad memoriza el ruido y las peculiaridades locales del conjunto de entrenamiento, perdiendo su habilidad para generalizar sobre datos no observados.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Desde la perspectiva del compromiso sesgo-varianza (*bias-variance trade-off*), el sobreajuste (*overfitting*) se manifiesta cuando el modelo exhibe una varianza excesivamente elevada. El error de entrenamiento ($E_{in}$) decrece hasta valores cercanos a cero, pero el error fuera de muestra ($E_{out}$ o error de test) se degrada drásticamente:

$$E_{in} \ll E_{out}$$

El algoritmo ajusta tanto la señal subyacente legítima como el ruido estocástico inherente a las muestras recogidas.

*Análisis de las opciones descartadas:*

- **A. Too simple a model for a complex task:** Define el subajuste (*underfitting* o sesgo elevado), donde el modelo carece de capacidad para capturar la tendencia de los datos.
- **C. Too high the learning rate:** Provoca divergencia u oscilaciones numéricas en el optimizador, no necesariamente sobreajuste estadístico.
- **D. Infinite training time:** Aunque un tiempo prolongado puede favorecer el sobreajuste si la capacidad lo permite, no lo define conceptualmente.

\vspace{0.4cm}

**QUIZ 14: Efecto del valor de la tasa de aprendizaje $\eta$ (Diapositivas 16 y 21)**

*Enunciado:*

Which learning rate matches each graphical representation? (Referencia: Y. Abu-Mostafa, Caltech CS156, Slide 21). Regla de actualización: $w_j := w_j - \eta \frac{\partial E_{in}(\mathbf{w})}{\partial w_j}$.

A. $\eta$ too small  
B. $\eta$ too large  
C. $\eta$ just right  

1. Pasos diminutos descendiendo con extrema lentitud por la parábola.  
2. Rebotes bruscos de un extremo a otro de las paredes del valle, aumentando la oscilación.  
3. Saltos amplios pero convergentes que reducen el error con rapidez hacia el vértice mínimo.  

*Respuesta correcta:* **1-A, 2-B, 3-C**

*Respuesta breve:*

Un valor de $\eta$ demasiado pequeño avanza a ritmo lento y costoso (1-A); uno excesivamente grande rebota entre las paredes del error y arriesga la divergencia (2-B); y un valor equilibrado desciende con rapidez y estabilidad al mínimo (3-C).

\vspace{0.3cm}

*Justificación teórica y analítica:*

La dinámica del descenso de gradiente depende de la curvatura local de la función de coste, descrita por los valores propios de la matriz Hessiana $\mathbf{H}$:

\vspace{0.2cm}

- **1 $\to$ A ($\eta$ demasiado pequeña):** Cada actualización resta un vector gradiente escalado por una fracción reducida. Aunque la estabilidad matemática está asegurada en funciones convexas Lipschitz-continuas ($\eta < 2/\lambda_{max}$), el avance resulta ineficiente y susceptible de quedar atrapado en mesetas prolongadas.
- **2 $\to$ B ($\eta$ demasiado grande):** Cuando $\eta > 2/\lambda_{max}$, el paso supera la anchura del valle parabólico. El optimizador evalúa el gradiente en puntos con pendientes opuestas cada vez mayores, generando oscilaciones divergentes donde $E_{in} \to \infty$.
- **3 $\to$ C ($\eta$ adecuada):** El valor de paso aprovecha la curvatura local para recortar distancias de forma sustancial en las primeras etapas y aproximarse con precisión al mínimo.

\vspace{0.4cm}

**QUIZ 21: Objetivo primordial del aprendizaje automático (Diapositivas 43 y 50)**

*Enunciado:*

What is our actual goal in machine learning?

A. Minimizing training loss  
B. Reaching zero gradient  
C. Generalizing to unseen data  
D. Maximizing parameter count  

*Respuesta correcta:* **C. Generalizing to unseen data**

*Respuesta breve:*

Minimizar la pérdida de entrenamiento es solo un medio instrumental; la meta genuina del aprendizaje automático es la generalización, logrando que el modelo rinda con precisión ante distribuciones y datos nunca vistos.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Abu-Mostafa et al. (2012) destacan que cualquier memorización trivial puede reducir a cero la pérdida de entrenamiento sin aportar valor funcional. El objetivo teórico y práctico consiste en garantizar que el error fuera de muestra $E_{out} = \mathbb{E}_{(\mathbf{x}, y) \sim \mathcal{D}} [\ell(f(\mathbf{x}), y)]$ sea lo menor posible. Las cotas clásicas de generalización como la dimensión VC acotan esta diferencia:

$$E_{out} \le E_{in} + \Omega(N, \mathcal{H})$$

donde $\Omega$ cuantifica el coste de complejidad del espacio de hipótesis.

*Análisis de las opciones descartadas:*

- **A. Minimizing training loss:** Representa un sustituto instrumental (*proxy*), susceptible de inducir sobreajuste si se persigue de forma ciega.
- **B. Reaching zero gradient:** Señala un punto estacionario de optimización (que puede ser un mal mínimo local, un punto de silla o un punto sobreajustado).
- **D. Maximizing parameter count:** Aumentar parámetros sin control satura el modelo y encarece el cómputo sin garantizar una mejora predictiva.

\vspace{0.4cm}

**QUIZ 26: Interpretación formal de curvas de aprendizaje clásicas (Diapositiva 55)**

*Enunciado:*

In the classical learning-curve picture, which of the following pairs of graphs is correct?

\vspace{0.2cm}

- Pareja (a):
  - Gráfica izquierda: Abscisas = `# training examples`. Error de entrenamiento arranca bajo y asciende asintóticamente; error de test arranca alto y desciende asintóticamente hacia un límite común.
  - Gráfica derecha: Abscisas = `# parameters`. Error de entrenamiento desciende monótonamente hacia cero; error de test describe una curva en "U" (desciende y luego sube por sobreajuste).
- Pareja (b): Intercambia los ejes horizontales entre ambas gráficas.

*Respuesta correcta:* **Pareja (a)**

*Respuesta breve:*

La pareja (a) describe con precisión la teoría estadística clásica: al aumentar los ejemplos, las curvas de entrenamiento y test convergen asintóticamente; al aumentar los parámetros, el error de test forma una curva en U gobernada por el compromiso sesgo-varianza.

\vspace{0.3cm}

*Justificación teórica y analítica:*

El comportamiento de las curvas de aprendizaje se apoya en dos regímenes complementarios:

\vspace{0.2cm}

1. **Error frente al número de datos de entrenamiento ($N$):** Con pocas muestras ($N$ pequeño), el modelo ajusta con facilidad todos los datos ($E_{train} \approx 0$), pero no representa la distribución general ($E_{test}$ muy elevado). Al incorporar más datos, resulta más costoso ajustar cada punto individual y $E_{train}$ sube ligeramente, mientras que $E_{test}$ desciende al mejorar la representatividad estadística. Ambas curvas convergen hacia una asíntota determinada por el sesgo inherente del modelo y el ruido irreducible de Bayes.
2. **Error frente a la capacidad del modelo (número de parámetros):** Con pocos parámetros, el modelo sufre de alto sesgo (subajuste) y ambos errores son elevados. Al dotarlo de mayor capacidad, el error disminuye hasta un umbral óptimo. Si la capacidad continúa creciendo sin regularización, el error de entrenamiento se anula por memorización mientras que el error de test repunta bruscamente debido a la varianza.

\vspace{0.4cm}

**QUIZ 29: Regularización L1 (Lasso) frente a L2 (Ridge) (Diapositivas 51 y 52)**

*Enunciado:*

Which statement about L1 and L2 regularization is generally correct?

A. L1 tends to encourage sparse weights; L2 tends to reduce weight magnitudes without necessarily setting them to zero.  
B. L1 and L2 always yield exactly the same optimal parameters.  
C. L2 tends to encourage sparse weights; L1 tends to reduce weight magnitudes without necessarily setting them to zero.  
D. Regularization guarantees perfect generalization.  

*Respuesta correcta:* **A. L1 tends to encourage sparse weights; L2 tends to reduce weight magnitudes without necessarily setting them to zero**

*Respuesta breve:*

La penalización L1 induce dispersión forzando muchos pesos a cero exacto (selección implícita de características), mientras que L2 reduce proporcionalmente la magnitud de todos los pesos atenuando su impacto sin anularlos del todo.

\vspace{0.3cm}

*Justificación teórica y analítica:*

La regularización añade una penalización sobre los parámetros a la función de pérdida original: $\mathcal{L}_{reg}(\mathbf{w}) = \mathcal{L}_0(\mathbf{w}) + \lambda \mathcal{R}(\mathbf{w})$.

\vspace{0.2cm}

- **Regularización L1 (Lasso, $\mathcal{R}(\mathbf{w}) = \sum_j |w_j|$):** Las curvas de nivel de la norma $\ell_1$ forman un poliedro rómbico con vértices afilados sobre los ejes de coordenadas. Cuando las curvas de nivel elípticas de la pérdida contactan con la región de restricción, el punto de tangencia se sitúa con alta probabilidad en una esquina, anulando por completo las componentes $w_j = 0$ correspondientes a variables prescindibles.
- **Regularización L2 (Ridge / *Weight Decay*, $\mathcal{R}(\mathbf{w}) = \frac{1}{2} \sum_j w_j^2$):** La región de restricción es una bola hiperesférica suave sin aristas. La fuerza de contracción es directamente proporcional al peso ($\frac{\partial \mathcal{R}}{\partial w_j} = w_j$), comprimiendo las magnitudes de forma uniforme pero sin fijarlas en cero de forma analítica estricta.

*Análisis de las opciones descartadas:*

- **B:** L1 y L2 resuelven problemas geométricos distintos con diferentes soluciones óptimas.
- **C:** Invierte las propiedades de ambas regularizaciones.
- **D:** Ningún método garantiza una generalización perfecta, ya que subsisten el error irreducible de Bayes y el sesgo de representación.

\vspace{0.4cm}

**QUIZ 30: El fenómeno del doble descenso (*Double Descent*) (Diapositiva 54)**

*Enunciado:*

What does the double-descent phenomenon show about model size and generalization?

A. Test error must always increase when a model has more parameters.  
B. The smallest model always generalizes best.  
C. Test error can rise and then fall again as model capacity increases.  
D. Training error must increase monotonically with model size.  

*Respuesta correcta:* **C. Test error can rise and then fall again as model capacity increases**

*Respuesta breve:*

El fenómeno del doble descenso demuestra que, al sobrepasar el umbral de interpolación donde el modelo ajusta por completo los datos de entrenamiento, un incremento adicional en los parámetros puede hacer que el error de test vuelva a descender.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Identificado formalmente por Belkin et al. (PNAS, 2019) y ampliado en modelos profundos por Nakkiran et al. (ICLR, 2020), el doble descenso reconcilia la teoría estadística tradicional con la práctica empírica de las redes neuronales:

\vspace{0.2cm}

1. **Régimen clásico (subparametrizado, $p < N$):** Al aumentar los parámetros $p$, el error de test describe la clásica forma de U, alcanzando un pico crítico en el **umbral de interpolación** ($p \approx N$), donde el modelo apenas tiene grados de libertad suficientes para anular el error de entrenamiento forzando pesos extremos.
2. **Régimen moderno (sobreparametrizado, $p \gg N$):** Una vez sobrepasado dicho límite, el espacio de soluciones que consiguen interpolar perfectamente los datos ($E_{train} = 0$) pasa a tener infinitas dimensiones. Los algoritmos basados en gradiente eligen de manera implícita la solución de mínima norma $\|\mathbf{w}\|_2$, lo que suaviza la función de interpolación y reduce de nuevo el error de generalización fuera de muestra.

*Análisis de las opciones descartadas:*

- **A:** Desmentida por el comportamiento del régimen sobreparametrizado.
- **B:** Un modelo excesivamente pequeño sufre de subajuste severo.
- **D:** El error de entrenamiento decrece de forma monótona conforme se incorporan más parámetros.

\vspace{0.5cm}

### Bloque IV: Protocolos de Validación Experimental y Fuga de Datos

\vspace{0.3cm}

**QUIZ 15: Forma extrema de validación cruzada (Diapositiva 44)**

*Enunciado:*

Which validation scheme is the most extreme form of cross-validation?

A. 5-fold CV  
B. Leave-one-out (LOO)  
C. Hold-out  
D. Bootstrap only  

*Respuesta correcta:* **B. Leave-one-out (LOO)**

*Respuesta breve:*

Leave-one-out (LOO) representa el caso límite de $k$-fold cross-validation donde el número de particiones iguala al total de datos disponibles ($k = N$).

\vspace{0.3cm}

*Justificación teórica y analítica:*

En una validación cruzada con $k$ particiones, el conjunto se subdivide en $k$ subconjuntos disjuntos. En la variante extrema *Leave-One-Out* (LOO-CV), fijamos $k = N$: en cada una de las $N$ iteraciones se entrena el modelo con $N-1$ ejemplos y se valida sobre la única muestra retenida. Proporciona una estimación casi insesgada del error de generalización, pero a cambio de un coste computacional de entrenar el modelo $N$ veces consecutivas.

*Análisis de las opciones descartadas:*

- **A. 5-fold CV:** Configuración intermedia estándar con $k=5$, donde cada fold retiene el 20% de las observaciones.
- **C. Hold-out:** Partición estática única (típicamente 70/30 u 80/20), sin rotación cruzada de subconjuntos.
- **D. Bootstrap:** Muestreo con reemplazamiento (*bagging*), diferente en formulación a la partición exhaustiva determinista de LOO.

\vspace{0.4cm}

**QUIZ 16: Estrategia de evaluación para conjuntos reducidos y cómputo ligero (Diapositiva 44)**

*Enunciado:*

With very small datasets and computationally inexpensive training, which evaluation strategy allows us to robustly estimate the performance of our model and, at the same time, allows us to maximize the number of training examples?

A. 5-fold CV  
B. Leave-one-out (LOO)  
C. Hold-out  
D. No validation  

*Respuesta correcta:* **B. Leave-one-out (LOO)**

*Respuesta breve:*

Con pocos datos y entrenamiento rápido, Leave-one-out maximiza los datos disponibles para entrenar ($N-1$ muestras por partición) y ofrece una estimación robusta y determinista del rendimiento.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Cuando $N$ es reducido (por ejemplo, entre 30 y 100 muestras), realizar una partición fija tipo *Hold-out* (como dejar el 20% para test) priva al modelo de datos valiosos para aprender y genera métricas de test con varianza elevada dependientes del azar del corte. Por contra, LOO-CV utiliza el 100% de la información disponible para evaluar y entrena cada modelo con prácticamente todo el conjunto ($N-1$), minimizando el sesgo pesimista de estimación. Dado que el modelo es computacionalmente barato, entrenar $N$ veces se completa en pocos segundos.

*Análisis de las opciones descartadas:*

- **A. 5-fold CV:** Entrena con el 80% de los datos en cada partición, desechando una fracción mayor de datos frente al $(N-1)/N$ de LOO.
- **C. Hold-out:** Desperdicia una parte sustancial de datos para entrenamiento y sufre de alta varianza estadística con muestras pequeñas.
- **D. No validation:** Carecer de validación impide cuantificar el rendimiento predictivo del sistema.

\vspace{0.4cm}

**QUIZ 17: Estrategia de evaluación para modelos y datos masivos (Diapositiva 44)**

*Enunciado:*

When dealing with very large models and datasets, which evaluation strategy is the most commonly used?

A. 5-fold CV  
B. Leave-one-out (LOO)  
C. Hold-out  
D. No validation  

*Respuesta correcta:* **C. Hold-out**

*Respuesta breve:*

En presencia de grandes volúmenes de datos y modelos pesados como redes neuronales profundas, la partición simple *Hold-out* (entrenamiento, validación y test) es el estándar indiscutible por razones de viabilidad computacional.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Entrenar un modelo de aprendizaje profundo contemporáneo sobre millones de imágenes (por ejemplo, en ImageNet) o miles de millones de tokens requiere días de cómputo sobre clústeres de GPUs. Multiplicar dicho coste por 5 o 10 veces mediante validación cruzada resulta inviable en la práctica. Dado que el tamaño de muestra $N$ es muy elevado, la ley de los grandes números asegura que un subconjunto de validación fijo retenido del 10% contenga suficientes muestras para que la varianza de la métrica sea despreciable.

*Análisis de las opciones descartadas:*

- **A y B:** Multiplican el coste de computación por $k$ o por $N$, inasumible en modelos a gran escala.
- **D:** Evaluar sobre entrenamiento sin conjunto de prueba incurre en ceguera operativa frente al sobreajuste.

\vspace{0.4cm}

**QUIZ 18: Concepto de contaminación de datos (*Data Snooping*) (Diapositivas 44 a 46)**

*Enunciado:*

"Data snooping" refers to:

A. Using only training data for all decisions  
B. Any leakage of test information into modeling decisions  
C. Hyperparameter tuning on the validation set  
D. Random initialization of weights  

*Respuesta correcta:* **B. Any leakage of test information into modeling decisions**

*Respuesta breve:*

El fenómeno de *Data Snooping* (o *Data Leakage*) describe cualquier filtración, directa o indirecta, de información procedente del conjunto de test hacia las decisiones de diseño, modelado o preprocesamiento del sistema.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Abu-Mostafa et al. (2012, Principio 2) formalizan que si un conjunto de datos influye en cualquier fase del aprendizaje (selección de modelo, normalización, reducción de dimensionalidad o selección de hiperparámetros), su capacidad para evaluar objetivamente el error fuera de muestra queda comprometida. El rendimiento en test deja de ser una estimación insesgada de $E_{out}$ y pasa a estar sesgado al alza de forma optimista:

$$E_{test} \text{ pasa a actuar como un } E_{in} \text{ encubierto}$$

*Análisis de las opciones descartadas:*

- **A. Using only training data for all decisions:** Es la práctica metodológica correcta para evitar sesgos.
- **C. Hyperparameter tuning on the validation set:** Es el procedimiento normativo estándar; la validación existe precisamente para ajustar hiperparámetros sin tocar el conjunto de test.
- **D. Random initialization of weights:** Es una técnica estándar de ruptura de simetría en optimización, independiente de la fuga de información entre particiones.

\vspace{0.4cm}

**QUIZ 19: Situaciones prácticas de *Data Snooping* (Diapositivas 45 y 46)**

*Enunciado:*

Which of the following situations could be considered data snooping:

A. Someone calculates the mean and standard deviation to standardize the data using all the examples (i.e. prior to any data partition).  
B. We visualize the full dataset, and we have the impression that it's linearly separable. Consequently, we decide to use the Perceptron Learning Algorithm (PLA).  
C. We have 3 candidate hypotheses (SVM, MLP, RF), and we decide which one is the best by looking at its performance in the test set.  
D. All of the above  

*Respuesta correcta:* **D. All of the above**

*Respuesta breve:*

Las tres acciones contaminan el modelado: calcular estadísticas sobre la totalidad de los datos filtra distribuciones futuras (A), inspeccionar visualmente el conjunto de test condiciona la elección del algoritmo (B) y comparar modelos finales sobre test convierte la prueba en una variable de decisión (C).

\vspace{0.3cm}

*Justificación teórica y analítica:*

Analizamos la transgresión metodológica de cada supuesto:

\vspace{0.2cm}

- **Situación A:** Calcular $\mu = \frac{1}{N}\sum x_i$ y $\sigma$ sobre toda la base de datos antes de particionar propaga la escala y dispersión de las muestras de test dentro de las entradas de entrenamiento. Al escalar, el modelo de entrenamiento recibe información matemática derivada de datos que en un entorno real aún no habrían ocurrido.
- **Situación B (Ejemplo de Abu-Mostafa, Diapositiva 45):** Inspeccionar el espacio completo contamina el ojo del investigador. Decidir usar el Perceptrón porque la nube completa parece separable implica que las etiquetas y posiciones de los puntos de test han sesgado el espacio de hipótesis $\mathcal{H}$ escogido.
- **Situación C (Diapositiva 46):** Evaluar SVM, MLP y Random Forest en test y seleccionar el que mejor resultado obtenga equivale a utilizar el conjunto de prueba como conjunto de validación. El test final debe ejecutarse sobre una única hipótesis final congelada.

\vspace{0.4cm}

**QUIZ 20: Función de pérdida frente a métrica de evaluación (Diapositiva 43)**

*Enunciado:*

Which pair below correctly distinguishes loss function vs evaluation metric?

A. Loss: measures generalization; Metric: drives optimization  
B. Loss: optimized during training; Metric: used to evaluate performance  
C. Loss: computed only on test; Metric: only on train  
D. Both are always identical  

*Respuesta correcta:* **B. Loss: optimized during training; Metric: used to evaluate performance**

*Respuesta breve:*

La función de pérdida es el objetivo matemático continuo y diferenciable que guía el descenso de gradiente durante el ajuste; la métrica de evaluación mide el rendimiento del sistema en términos comprensibles para la aplicación real.

\vspace{0.3cm}

*Justificación teórica y analítica:*

La distinción responde a condicionantes matemáticos y operacionales:

\vspace{0.2cm}

- **Función de pérdida (*Loss function*):** Diseñada para optimización numérica. Debe ser suave y casi con seguridad diferenciable respecto a los pesos $\mathbf{w}$ (por ejemplo, MSE, Huber Loss o Entropía Cruzada) para permitir el cálculo de gradientes por propagación hacia atrás.
- **Métrica de evaluación (*Evaluation metric*):** Diseñada para reflejar el objetivo del problema (por ejemplo, tasa de acierto *accuracy*, F1-Score, mAP en detección de objetos o BLEU en traducción). Estas métricas son escalonadas, discretas o no convexas, careciendo de derivadas informativas y no pudiendo optimizarse directamente mediante descenso de gradiente.

\vspace{0.4cm}

**QUIZ 23: Coeficientes de escalado aplicables a los datos de test (Diapositivas 44 y 46)**

*Enunciado:*

Which coefficients should we use to scale the test data?

A. Those calculated in test  
B. Those calculated before in training  
C. It's the same  

*Respuesta correcta:* **B. Those calculated before in training**

*Respuesta breve:*

Para transformar los datos de test deben utilizarse obligatoriamente los mismos parámetros de centrado y dispersión (media y desviación típica) calculados exclusivamente sobre el conjunto de entrenamiento.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Sea $\mathbf{x}_{test}$ una muestra del conjunto de prueba. Su estandarización se rige por:

$$\mathbf{x}_{test}^{escalado} = \frac{\mathbf{x}_{test} - \boldsymbol{\mu}_{train}}{\boldsymbol{\sigma}_{train}}$$

El conjunto de test emula el entorno de producción o inferencia en el mundo real, donde las muestras futuras llegan individualmente o en pequeños lotes sin permitir calcular una media o varianza poblacional fiable. Si recalculásemos $\boldsymbol{\mu}_{test}$ y $\boldsymbol{\sigma}_{test}$, estaríamos aplicando una proyección espacial distinta a la que utilizó el clasificador durante su ajuste, desalineando las fronteras aprendidas.

*Análisis de las opciones descartadas:*

- **A. Those calculated in test:** Introduce fuga de datos (*data snooping*) y genera distribuciones desacopladas con respecto al entrenamiento.
- **C. It's the same:** En muestras finitas $\boldsymbol{\mu}_{train} \neq \boldsymbol{\mu}_{test}$, por lo que los resultados numéricos difieren sensiblemente.

\vspace{0.4cm}

**QUIZ 28: Monitorización en parada temprana (*Early Stopping*) (Diapositivas 44 y 53)**

*Enunciado:*

When using early stopping to choose the training epoch, which dataset should normally be monitored?

A. The test set, to directly optimize the reported final score.  
B. The validation set, while keeping the test set untouched.  
C. Only the training set, because validation is unnecessary.  
D. All data merged together after every epoch.  

*Respuesta correcta:* **B. The validation set, while keeping the test set untouched**

*Respuesta breve:*

La parada temprana debe monitorizar la pérdida o métrica en el conjunto de validación, reservando el conjunto de test totalmente intacto para la evaluación final imparcial.

\vspace{0.3cm}

*Justificación teórica y analítica:*

La parada temprana (*early stopping*) funciona como una técnica de regularización que selecciona un hiperparámetro: el número óptimo de épocas de entrenamiento $T^*$. La pérdida de entrenamiento desciende de forma continuada a lo largo del tiempo, mientras que la pérdida de validación desciende hasta un punto mínimo y comienza a repuntar en cuanto el modelo sobreajusta. El criterio detiene el entrenamiento cuando la pérdida de validación deja de mejorar durante una paciencia fijada:

$$T^* = \arg\min_t \mathcal{L}_{val}(t)$$

Monitorizar el conjunto de test para tomar la decisión de frenar convertiría ese conjunto en una partición de entrenamiento implícita, invalidando su condición de estimador insesgado.

\vspace{0.5cm}

### Bloque V: Preprocesamiento de Datos, Codificación y Arquitecturas

\vspace{0.3cm}

**QUIZ 22: Propósito fundamental del escalado de variables (Diapositivas 47 y 48)**

*Enunciado:*

Feature/variable scaling primarily aims to:

A. Make variables integer-valued  
B. Put variables on similar ranges to speed optimization  
C. Reduce the need for cross-validation  
D. Put variables on similar ranges to better understand their meaning  

*Respuesta correcta:* **B. Put variables on similar ranges to speed optimization**

*Respuesta breve:*

El escalado homogeneiza los rangos numéricos de las entradas, transformando curvas de nivel elípticas alargadas e inestables en contornos circulares regulares que aceleran y estabilizan la convergencia del descenso de gradiente.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Cuando dos variables de entrada $x_1$ y $x_2$ poseen escalas dispares (por ejemplo, $x_1 \in [0, 1]$ y $x_2 \in [0, 100\,000]$), la matriz Hessiana de la función de coste presenta un número de condición $\kappa(\mathbf{H}) = \lambda_{max}/\lambda_{min} \gg 1$. En consecuencia, las curvas de nivel del error son elipses muy estrechas. El gradiente apunta casi ortogonal a la dirección del mínimo óptimo, provocando oscilaciones violentas en el eje de mayor pendiente y un avance lento en el eje plano.

Al aplicar estandarización ($z = \frac{x - \mu}{\sigma}$) o escalado Min-Max ($z = \frac{x - x_{min}}{x_{max} - x_{min}}$), los contornos se tornan cuasi-esféricos, permitiendo que el gradiente apunte en línea recta hacia el mínimo y admitiendo tasas de aprendizaje $\eta$ más altas. Además, en métodos basados en distancias (KNN, SVM) previene que la variable con magnitudes grandes monopolice la norma euclídea.

\vspace{0.4cm}

**QUIZ 24: Cálculo de iteraciones de optimización por época (Diapositiva 41)**

*Enunciado:*

Assume standard mini-batch gradient descent, processing every example once per epoch. If our training set contains 10000 images and the batch size is 8, how many optimization iterations are there per epoch?

A. 1  
B. 10  
C. 1000  
D. None of the above  

*Respuesta correcta:* **D. None of the above**

*Respuesta breve:*

El número exacto de iteraciones requeridas para procesar las 10000 imágenes en lotes de 8 es $10000 / 8 = 1250$ iteraciones por época, cifra no incluida en las opciones A, B o C.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Por definición, una época (*epoch*) concluye cuando el algoritmo de optimización ha procesado cada ejemplo del conjunto de entrenamiento exactamente una vez. Si el conjunto contiene $N$ ejemplos y cada lote (*mini-batch*) procesa $B$ muestras simultáneamente, el número de iteraciones (pasos de actualización del vector de pesos $\mathbf{w}$) por época es:

$$\text{Iteraciones por época} = \left\lceil \frac{N}{B} \right\rceil = \frac{10000}{8} = 1250$$

Al ser 1250 una división exacta sin resto y diferir sustancialmente de 1, 10 y 1000, la respuesta correcta es la opción D.

\vspace{0.4cm}

**QUIZ 25: Elección de modelo según la naturaleza de los datos y sesgo inductivo (Diapositiva 57)**

*Enunciado:*

Which statement about model choice and data type is correct?

A. Deep learning is unsuitable for sequential data  
B. For tabular data, tree-based models often have the right inductive bias  
C. KNN is specifically designed to exploit spatial patterns in images  
D. An autoencoder is usually best for graphs  

*Respuesta correcta:* **B. For tabular data, tree-based models often have the right inductive bias**

*Respuesta breve:*

Los modelos basados en árboles de decisión (como Random Forest, XGBoost y LightGBM) poseen el sesgo inductivo idóneo para datos tabulares heterogéneos, manejando escalas dispares, valores faltantes y fronteras ortogonales de forma natural.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Cada familia de modelos asume hipótesis estructurales previas (*inductive bias*) sobre el tipo de función subyacente:

\vspace{0.2cm}

- **Datos tabulares y modelos de árboles:** Las tablas contienen variables categóricas y numéricas continuas con distribuciones asimétricas y relaciones complejas sin correlación espacial. Los árboles particionan el espacio con hiperplanos ortogonales a los ejes, siendo invariantes a transformaciones monótonas en las entradas y robustos frente a escalas desordenadas.
- **Datos con estructura espacial (imágenes):** El sesgo inductivo idóneo es la invariancia a traslaciones y la localidad espacial, explotadas de manera natural por los campos receptivos de las Redes Convolucionales (CNN) y la atención visual de los Vision Transformers (ViT), no por KNN.
- **Datos secuenciales (texto, series temporales):** Se procesan de forma habitual mediante arquitecturas recurrentes (LSTM, GRU) y mecanismos de autoatención (*Transformers*), desmintiendo rotundamente la opción A.
- **Grafos y datos relacionales:** La arquitectura diseñada para explotar su topología son las Redes Neuronales sobre Grafos (*Graph Neural Networks*, GNN), no los autoencoders convencionales.

\vspace{0.4cm}

**QUIZ 27: Codificación de variables categóricas no ordinales (Diapositiva 47)**

*Enunciado:*

For a non-ordinal categorical feature (e.g., color = red, green, blue), which encoding usually avoids imposing an arbitrary numerical order?

A. Assign the integers 0, 1 and 2 to the categories.  
B. Use one-hot encoding, with one indicator per category.  
C. Assign 10, 20 and 30, then standardize the resulting numbers.  
D. Apply cosine/sine transformation.  

*Respuesta correcta:* **B. Use one-hot encoding, with one indicator per category**

*Respuesta breve:*

La codificación *one-hot* representa cada categoría como un vector binario ortogonal independiente, evitando introducir relaciones métricas o de orden artificiales entre elementos cualitativos.

\vspace{0.3cm}

*Justificación teórica y analítica:*

Si codificamos una variable no ordinal como el color asignando números enteros ($\text{rojo}=0$, $\text{verde}=1$, $\text{azul}=2$), un modelo lineal o basado en distancias asumirá que:

$$\text{azul} > \text{verde} > \text{rojo} \quad \text{y que} \quad d(\text{rojo}, \text{azul}) = 2 \cdot d(\text{rojo}, \text{verde})$$

Esta jerarquía numérica carece de justificación física o semántica y distorsiona el aprendizaje.

La codificación *one-hot* (*One-Hot Encoding*) proyecta la variable a un espacio vectorial de dimensión $K$ (donde $K$ es el número de categorías), asignando un vector base canónico con un único 1 y el resto ceros:

$$\text{rojo} \mapsto [1, 0, 0]^T, \quad \text{verde} \mapsto [0, 1, 0]^T, \quad \text{azul} \mapsto [0, 0, 1]^T$$

Todos los vectores resultan ortogonales entre sí y equidistantes:

$$\|\mathbf{v}_i - \mathbf{v}_j\|_2 = \sqrt{2} \quad \forall i \neq j$$

eliminando cualquier ordenación preferente arbitraria.
