# Introducción y Fundamentos de la Visión por Computador

## Tema 1: Concepto, Disciplinas Afines y Estado del Arte

La visión por computador constituye una de las disciplinas troncales de la inteligencia artificial. Su propósito formal consiste en dotar a sistemas computacionales de la capacidad de interpretar, modelar y reconstruir el mundo físico tridimensional a partir de señales visuales bidimensionales o secuencias de vídeo. Como señalan Russell y Norvig (2021), la visión no representa un módulo aislado, sino un componente indispensable para superar el test de Turing completo en entornos físicos, ya que exige interacción perceptiva directa con objetos y personas.

Desde una perspectiva operativa, el procesamiento visual invierte el flujo clásico de la computación gráfica. Mientras los gráficos por computador transforman representaciones geométricas y propiedades de iluminación en proyecciones bidimensionales de píxeles, la visión por computador se enfrenta al problema inverso: reconstruir la física, la geometría y el significado semántico de la escena a partir de una matriz discreta de mediciones ópticas.

\vspace{0.4cm}

### 1. Definición Formal y Modelos Jerárquicos

Diversos autores canónicos han delimitado el alcance de la disciplina:

\vspace{0.3cm}

- **Richard Szeliski (2022):** Define la visión computacional como el intento de describir el mundo observado en una o varias imágenes y reconstruir sus propiedades intrínsecas, tales como la forma volumétrica, las fuentes de iluminación y las distribuciones espectrales de color.
- **Milan Sonka, Vaclav Hlavac y Roger Boyle (2015):** Enfatizan el objetivo de duplicar las capacidades del sistema visual biológico mediante la percepción electrónica y la comprensión semántica de escenas del mundo real.
- **David Forsyth y Jean Ponce (2012):** Describen la disciplina como la aplicación de métodos estadísticos, geométricos y de teoría del aprendizaje para desenredar los datos ópticos y extraer descripciones estructuradas del mundo.

\vspace{0.4cm}

#### Niveles de Procesamiento Visual

Para estructurar la complejidad de las tareas, la literatura establece una jerarquía en función del nivel de abstracción representacional. Siguiendo la taxonomía clásica de Gonzalez y Woods (2018), contrastada con los esquemas de Forsyth y Ponce (2012) y Sonka et al. (2015), distinguimos tres estratos bien diferenciados:

\vspace{0.3cm}

1. **Bajo Nivel (*Low-Level Vision* o *Early Vision*):**
   Las operaciones toman como entrada imágenes matriciales y devuelven como salida imágenes procesadas. Carecen de conocimiento contextual semántico sobre el contenido. Incluye el preprocesamiento para reducción de ruido, realce de contraste, operaciones morfológicas, transformaciones en el dominio de la frecuencia y detección de bordes primitivos.

2. **Nivel Medio (*Mid-Level Vision*):**
   La entrada sigue siendo una señal visual, pero la salida consiste en atributos y entidades estructuradas extraídas de los píxeles (esquinas, contornos continuos, regiones homogéneas o identidades preliminares). Comprende la segmentación semántica, el seguimiento de trayectorias (*tracking*), el emparejamiento de características locales y el agrupamiento perceptual.

3. **Alto Nivel (*High-Level Vision* o *Image Understanding*):**
   Opera sobre las representaciones intermedias para dotar de significado semántico al conjunto de elementos detectados, emulando procesos cognitivos complejos. Agrupa el reconocimiento y categorización de objetos, la estimación de posturas humanas, el registro volumétrico de imágenes, la navegación autónoma y el razonamiento visual compositivo.

\vspace{0.4cm}

### 2. Disciplinas Conexas y Límites Epistemológicos

El análisis visual converge en una intersección multidisciplinar donde conviven cuatro ramas del conocimiento:

\vspace{0.3cm}

- **Procesamiento Digital de Imágenes (*Digital Image Processing*):** Se centra en la manipulación de la señal de imagen para mejorar su calidad para observación humana o prepararla para almacenamiento y transmisión eficiente (filtrado, restauración, compresión JPEG).
- **Gráficos por Computador (*Computer Graphics*):** Proceso directo (*forward model*) que parte de modelos 3D matemáticos, cámaras virtuales y parámetros de reflectancia para sintetizar matrices de píxeles realistas.
- **Visión por Computador (*Computer Vision*):** Proceso inverso (*inverse problem*) que toma las matrices de intensidad captadas por sensores físicos e infiere las configuraciones 3D, propiedades de los materiales y relaciones funcionales.
- **Reconocimiento de Patrones y Aprendizaje Automático (*Pattern Recognition / Machine Learning*):** Proporciona el marco probabilístico, algebraico y estadístico para inferir modelos de decisión a partir de vectores de características visuales o directamente de tensores de datos crudos (*end-to-end*).

\vspace{0.4cm}

### 3. Las Dos Grandes Vertientes Metodológicas

A lo largo del curso y de la práctica investigadora contemporánea, la visión por computador se estructura en dos aproximaciones complementarias:

\vspace{0.3cm}

- **La Vertiente Geométrica (Modelado Físico y Proyectivo):**
  Se apoya en la geometría proyectiva, la óptica física y la estimación lineal y robusta. Formula la relación entre el espacio euclídeo $\mathbb{R}^3$ y el plano sensor $\mathbb{R}^2$ mediante coordenadas homogéneas y matrices de proyección de cámara. Resuelve problemas fundamentales como la geometría epipolar (matriz esencial $E$ y matriz fundamental $F$), la reconstrucción tridimensional a partir de múltiples vistas (*Structure from Motion*, SfM), el ajuste de haces (*Bundle Adjustment*) y la estimación robusta con RANSAC.

- **La Vertiente de Aprendizaje (*Data-Driven Vision*):**
  Trata de inferir patrones visuales a partir de grandes volúmenes de datos empíricos. Abarca desde los clasificadores clásicos basados en descriptores artesanales (*handcrafted features* como SIFT, HOG o LBP) combinados con SVM o árboles de decisión, hasta los paradigmas modernos de aprendizaje profundo:
  - *Supervised Learning:* Entrenamiento supervisado con etiquetas densas (*bounding boxes*, máscaras de segmentación).
  - *Self-Supervised Learning:* Extracción de representaciones visuales invariantes a partir de secuencias de vídeo o tareas pretextuales sin supervisión humana directa.
  - *Fine-Tuning y RLHF:* Ajuste supervisado y alineación con refuerzo humano para modelos multimodales visión-lenguaje (VLMs).
  - *Modelos Generativos:* Difusión probabilística y redes antagónicas (GANs) para síntesis y restauración visual.

Un elemento determinante en el éxito contemporáneo de la vertiente de aprendizaje ha sido la disponibilidad de conjuntos de datos masivos. Mientras ImageNet (Deng et al., 2009) supuso la chispa del aprendizaje profundo convolucional con más de 14 millones de imágenes anotadas, conjuntos a escala de internet como LAION-5B (Schuhmann et al., 2022), con más de 5.800 millones de pares de imagen y texto, han permitido el entrenamiento de modelos fundacionales multimodales capaces de generalización visual de disparo cero (*zero-shot*).

\vspace{0.4cm}

### 4. Por Qué la Visión por Computador es un Problema Difícil

Para los seres humanos, la visión resulta intuitiva y aparentemente inmediata, pues más del 50% de la corteza cerebral de los primates está involucrada directa o indirectamente en el procesamiento visual. Sin embargo, en términos computacionales se trata de un problema formalmente mal condicionado (*ill-posed inverse problem*).

\vspace{0.3cm}

1. **Pérdida de Dimensionalidad (Ambigüedad 3D a 2D):**
   La proyección de una escena tridimensional sobre una superficie sensora bidimensional destruye la coordenada de profundidad. Infinitas configuraciones tridimensionales de distinta escala y distancia pueden proyectar exactamente la misma configuración de intensidades sobre la imagen (el principio del trampantojo o las ilusiones anamórficas de Ames).

2. **Variabilidad Fotométrica y de Iluminación:**
   El valor registrado en cada píxel es el producto de la radiancia de la fuente de luz incidente por la función de reflectancia bidireccional (BRDF) de la superficie del material. Variaciones en la posición del foco solar, sombras arrojadas o reflexiones especulares alteran los valores RGB de un mismo objeto de forma mucho más drástica que un cambio radical de categoría.

3. **Variabilidad Geométrica y de Punto de Vista:**
   La pose de la cámara respecto al objeto introduce rotaciones fuera del plano, deformaciones afines y distorsiones de perspectiva que desalinean por completo la disposición de las intensidades en la matriz.

4. **Oclusión Parcial y Desorden de Fondo (*Clutter*):**
   En entornos naturales, los objetos raras veces aparecen aislados sobre fondos planos. Frecuentemente se intersecan, quedan parcialmente ocultos por otros elementos o presentan texturas indistinguibles de los patrones de fondo.

5. **Variabilidad Intra-Clase y Deformabilidad:**
   Objetos pertenecientes a la misma categoría semántica (por ejemplo, sillas o animales) presentan una infinita variabilidad de formas, colores, dimensiones y configuraciones cinemáticas no rígidas.

\vspace{0.4cm}

### 5. Hitos Históricos Fundamentales

La disciplina ha transitado por diversas etapas conceptuales desde sus inicios a mediados del siglo XX:

\vspace{0.3cm}

- **1966 — El Proyecto de Verano de Marvin Minsky (MIT):**
  Al inicio de la IA, Minsky encargó al estudiante de grado Gerald Sussman *"conectar una cámara a un ordenador y hacer que describiera lo que veía"* como proyecto de verano de unas diez semanas. La anécdota ilustra cómo se subestimó profundamente la complejidad de la percepción biológica y la visión de bajo nivel.
- **Década de 1970 — El Mundo de los Bloques y Procesado Primitivo:**
  Investigaciones centradas en entornos sintéticos controlados (*blocks world* de Roberts) y extracción de aristas lineales mediante operadores heurísticos (Roberts, Sobel, Prewitt).
- **1982 — El Paradigma Computacional de David Marr:**
  Marr publica su obra seminal *Vision*, proponiendo que la visión es un sistema de procesamiento de información estructurado en tres niveles (computacional, algorítmico y de implementación física) que transita secuencialmente desde el esbozo primario (*primal sketch*), pasando por el esbozo 2.5D (orientación de superficies y profundidad relativa centrada en el observador), hasta el modelo 3D centrado en el objeto.
- **Décadas de 1980 y 1990 — Madurez Geométrica y Filtros Óptimos:**
  Formulación del detector de bordes óptimo de Canny (1986), espacios de escala (*scale-space theory*) de Witkin y Koenderink, la Laplaciana de Gaussiana y la consolidación de la visión multivista con Hartley, Zisserman y Faugeras.
- **Años 2000 — Ingeniería de Características Locales Robustas:**
  Aparición de detectores invariantes a escala y rotación como SIFT (Lowe, 2004), SURF y descriptores de gradientes orientados HOG (Dalal y Triggs, 2005), combinados con modelos de bolsas de palabras visuales (*Bag of Visual Words*) y el detector en tiempo real de Viola-Jones (2001) para caras.
- **2012 — La Revolución del Aprendizaje Profundo (AlexNet):**
  Krizhevsky, Sutskever y Hinton reducen drásticamente el error de clasificación en el reto ImageNet mediante una red convolucional profunda entrenada en GPUs, desplazando los enfoques artesanales por representaciones aprendidas directamente de los datos.
- **Actualidad — Modelos Fundacionales y Transformers Visuales:**
  Generalización de arquitecturas Vision Transformer (ViT), modelos multimodales contrastivos (CLIP), modelos de segmentación universales (Segment Anything - SAM) y modelos generativos de difusión probabilística.

\vspace{0.4cm}

### 6. Limitaciones Contemporáneas y Retos Abiertos

A pesar de que los modelos modernos superan con frecuencia el rendimiento medio humano en tareas cerradas y específicas de laboratorio (como la clasificación a 1.000 clases de ImageNet), presentan fragilidades estructurales cuando se enfrentan a situaciones reales:

\vspace{0.3cm}

1. **Inconsistencia de Sentido Común Físico:**
   Los modelos actuales carecen de un modelo intuitivo del mundo físico (gravedad, soporte, permanencia de los objetos, masa o fricción). Se basan en correlaciones estadísticas de alta dimensión y pueden segmentar un objeto flotando en el vacío o predecir interpenetraciones de materia que violan las leyes físicas elementales.

2. **Vulnerabilidad ante Ataques Adversarios (*Adversarial Perturbations*):**
   Modificaciones imperceptibles para el ojo humano añadidas a una imagen pueden inducir a una red neuronal profunda a clasificar un vehículo escolar como un avestruz con una certidumbre superior al 99%, demostrando que las representaciones neuronales difieren notablemente de los mecanismos perceptivos de la corteza biológica.

3. **Dependencia Extrema de Datos y Huella Energética:**
   El entrenamiento de redes profundas requiere millones de muestras etiquetadas y consumos energéticos considerables. Un ser humano es capaz de asimilar un concepto visual nuevo con uno o dos ejemplos (*few-shot learning*), mientras que un modelo de visión suele necesitar miles de iteraciones de optimización.

4. **Opacidad y Falta de Interpretabilidad (*Black-Box*):**
   En aplicaciones críticas como el diagnóstico biomédico o la conducción autónoma, la ausencia de trazabilidad explicativa dificulta garantizar el comportamiento del sistema ante condiciones de fallo o distribuciones no vistas (*out-of-distribution*).

5. **Sesgos Algorítmicos y Alucinaciones:**
   Los modelos replican y amplifican los sesgos sociodemográficos, geográficos y culturales presentes en los datos masivos de internet. Asimismo, los modelos generativos y los decodificadores visuales modernos pueden inventar texturas o detalles inexistentes (*alucinaciones visuales*), comprometiendo su uso en contextos periciales y forenses.
