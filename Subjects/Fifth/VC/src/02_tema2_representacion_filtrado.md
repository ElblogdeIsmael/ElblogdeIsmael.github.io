# Representación, Filtrado Espacial y Detección de Bordes

## Tema 2: Fundamentos del Procesado Bidimensional y Operadores Diferenciales

El presente capítulo aborda los principios matemáticos y algorítmicos que gobiernan la manipulación de la señal de imagen en el dominio espacial. Comprende desde la naturaleza física de la formación de la imagen y su discretización digital, pasando por la teoría del filtrado lineal y no lineal, hasta los operadores de gradiente y el detector de bordes óptimo de Canny.

\vspace{0.4cm}

### 1. Formación y Representación de la Imagen Digital

Una imagen en el plano continuo puede modelarse como una función bidimensional de intensidad lumínica $f(x, y)$, donde $(x, y)$ denotan las coordenadas espaciales en el plano de proyección y el valor escalar $f(x, y)$ representa la irradiancia o energía luminosa por unidad de área recibida por el sensor.

Desde el punto de vista radiométrico, la energía captada en cada punto de la escena viene determinada por dos componentes primordiales:

$$f(x, y) = i(x, y) \cdot r(x, y)$$

donde $i(x, y) \in (0, \infty)$ representa la componente de iluminación incidente procedente de las fuentes luminosas del entorno, y $r(x, y) \in [0, 1]$ es el coeficiente de reflectancia intrínseco de los materiales de la superficie observada.

\vspace{0.3cm}

#### Muestreo y Cuantización

Para su procesamiento en arquitecturas digitales, la señal continua $f(x, y)$ debe someterse a dos etapas sucesivas de discretización:

\vspace{0.3cm}

1. **Muestreo Espacial (*Sampling*):** Discretización de las coordenadas espaciales $(x, y)$ sobre una rejilla regular de $M \times N$ elementos, dando lugar a los píxeles (*picture elements*). Si el periodo de muestreo no cumple el teorema de Nyquist-Shannon respecto a las frecuencias espaciales más altas de la escena óptica, se producen artefactos de solapamiento espectral (*aliasing*).
2. **Cuantización de Amplitud (*Quantization*):** Mapeo del rango continuo de irradiancia a un conjunto finito de $L$ niveles discretos. Habitualmente se emplean representaciones de 8 bits por canal ($L = 2^8 = 256$, en el rango entero $[0, 255]$), o representaciones normalizadas en coma flotante $\in [0.0, 1.0]$.

En imágenes multicanal o a color, la señal se representa mediante una función vectorial:

$$\mathbf{I}(x, y) = \begin{bmatrix} I_R(x, y) \\ I_G(x, y) \\ I_B(x, y) \end{bmatrix}$$

La conversión estándar a escala de grises combina los canales ponderando la sensibilidad fototópica de la fóvea humana según la recomendación ITU-R BT.601:

$$Y(x, y) = 0.299 \cdot I_R(x, y) + 0.587 \cdot I_G(x, y) + 0.114 \cdot I_B(x, y)$$

\vspace{0.4cm}

### 2. Filtrado Espacial Lineal: Correlación y Convolución

El filtrado en el dominio espacial consiste en sustituir el valor de cada píxel de la imagen de entrada por una combinación ponderada de las intensidades de sus píxeles vecinos dentro de una ventana de soporte local. La matriz de ponderaciones que define los coeficientes de dicha ventana recibe el nombre de máscara, filtro o *kernel* $h$ de tamaño $(2k+1) \times (2k+1)$.

\vspace{0.3cm}

#### Correlación Cruzada (*Cross-Correlation*)

La correlación cruzada bidimensional desplaza directamente el kernel $h$ sobre la imagen $I$ sin modificar la orientación relativa de sus índices:

$$(I \otimes h)(x, y) = \sum_{u=-k}^{k} \sum_{v=-k}^{k} I(x+u, y+v) \, h(u, v)$$

La correlación cruzada mide el grado de coincidencia o similitud local entre la estructura del kernel y el vecindario del píxel. Se emplea extensamente en técnicas de emparejamiento de plantillas (*template matching*). Sin embargo, la correlación carece de la propiedad asociativa y conmutativa respecto a la combinación sucesiva de filtros.

\vspace{0.3cm}

#### Convolución Lineal Bidimensional (*Convolution*)

La convolución lineal invierte espacialmente el kernel en ambos ejes coordenados (equivalente a una rotación de $180^\circ$) antes de calcular el producto escalar ponderado:

$$(I * h)(x, y) = \sum_{u=-k}^{k} \sum_{v=-k}^{k} I(x-u, y-v) \, h(u, v) = \sum_{u=-k}^{k} \sum_{v=-k}^{k} I(x+u, y+v) \, h(-u, -v)$$

La inversión de índices dota a la convolución de propiedades algebraicas fundamentales en el análisis de sistemas lineales e invariantes a la traslación (LTI):

\vspace{0.3cm}

- **Conmutatividad:** $I * h = h * I$.
- **Asociatividad:** $I * (h_1 * h_2) = (I * h_1) * h_2$. Permite prefusionar múltiples filtros en un único kernel equivalente mediante $h_{eq} = h_1 * h_2$, reduciendo el coste computacional.
- **Distributividad respecto a la suma:** $I * (h_1 + h_2) = (I * h_1) + (I * h_2)$.
- **Equivariancia ante traslación:** Si $T_{\Delta}$ es un operador de desplazamiento espacial puro tal que $T_{\Delta}(I)(x, y) = I(x - x_0, y - y_0)$, entonces $T_{\Delta}(I * h) = (T_{\Delta} I) * h$.

\vspace{0.3cm}

#### Tratamiento de Condiciones de Frontera

Al evaluar la convolución cerca de los bordes exteriores de la matriz de tamaño $M \times N$, el soporte del kernel sobresale de las dimensiones válidas de la imagen. Existen cuatro estrategias analíticas para resolver estas discontinuidades de frontera:

\vspace{0.3cm}

1. **Relleno con ceros (*Zero Padding*):** Asume que todos los píxeles fuera del dominio de la imagen tienen intensidad nula. Introduce una caída artificial de energía que oscurece el perímetro de la imagen filtrada.
2. **Replicación de borde (*Clamp / Border Replicate*):** Extiende el valor del píxel frontera más próximo de forma constante. Evita contrastes bruscos espurios.
3. **Reflexión o Simetría (*Reflect / Mirroring*):** Refleja la señal hacia el interior en torno al eje de la frontera. Preserva la continuidad de las derivadas de primer orden y minimiza artefactos de alta frecuencia.
4. **Periódica o Toroidal (*Wrap around*):** Conecta el borde superior con el inferior y el izquierdo con el derecho. Es la condición implícita en la convolución circular mediante la Transformada Rápida de Fourier (FFT).

\vspace{0.4cm}

### 3. Filtros Lineales de Suavizado: Box Filter frente al Filtro Gaussiano

El suavizado espacial (*smoothing*) tiene por objeto atenuar las fluctuaciones rápidas debidas a ruido aditivo independiente, actuando como un filtro paso bajo (*low-pass filter*).

\vspace{0.3cm}

#### Filtro de Media (*Box Filter*)

El filtro de caja asigna ponderaciones uniformes a todas las posiciones del vecindario dentro de un soporte $K \times K$:

$$h_{\text{box}}(u, v) = \frac{1}{K^2}, \quad \forall (u, v) \in \left[-\frac{K-1}{2}, \frac{K-1}{2}\right]^2$$

Aunque resulta computacionalmente trivial, presenta dos desventajas analíticas graves:
- Asigna el mismo peso a un píxel contiguo al centro que a un píxel ubicado en los vértices del vecindario.
- Su respuesta en el dominio frecuencial es una función sinc bidimensional ($\text{sinc}(u)\text{sinc}(v)$), caracterizada por lóbulos secundarios prominentes que introducen frecuencias espurias y artefactos visuales en forma de bandas rectangulares (*ringing* y efecto de cuadrícula).

\vspace{0.3cm}

#### El Filtro Gaussiano y sus Propiedades Analíticas

La función gaussiana continua bidimensional isotrópica centrada en el origen se formula como:

$$G_{\sigma}(x, y) = \frac{1}{2\pi\sigma^2} \exp\left(-\frac{x^2 + y^2}{2\sigma^2}\right)$$

donde $\sigma$ es la desviación típica que parametriza la escala o anchura efectiva del filtro. Sus propiedades distintivas son:

\vspace{0.3cm}

- **Isotropía (Simetría Circular):** La respuesta depende exclusivamente de la distancia euclídea al origen $r = \sqrt{x^2+y^2}$. Suaviza con igual intensidad en todas las direcciones del plano.
- **Respuesta Frecuencial Óptima:** La transformada de Fourier de una gaussiana en el espacio es otra gaussiana en la frecuencia. Carece de lóbulos secundarios, lo que garantiza que no introduce artefactos oscilatorios ni altas frecuencias espurias.
- **Teorema de Convolución de Gaussianas:** La convolución sucesiva de dos filtros gaussianos con parámetros $\sigma_1$ y $\sigma_2$ equivale a aplicar una única gaussiana con varianza acumulada:
  $$G_{\sigma_1} * G_{\sigma_2} = G_{\sqrt{\sigma_1^2 + \sigma_2^2}}$$
- **Separabilidad Computacional:** La función gaussiana bidimensional se descompone en el producto exacto de dos gaussianas unidimensionales independientes:
  $$G_{\sigma}(x, y) = \left( \frac{1}{\sqrt{2\pi}\sigma} \exp\left(-\frac{x^2}{2\sigma^2}\right) \right) \cdot \left( \frac{1}{\sqrt{2\pi}\sigma} \exp\left(-\frac{y^2}{2\sigma^2}\right) \right) = G_{\sigma}(x) \cdot G_{\sigma}(y)$$
  En virtud de la asociatividad de la convolución:
  $$I * G_{\sigma}(x, y) = (I * G_{\sigma}(x)) * G_{\sigma}(y)$$
  Esta descomposición reduce la complejidad algorítmica de aplicar un kernel de $K \times K$ píxeles de $O(K^2)$ operaciones por píxel a tan solo $O(2K)$, permitiendo aceleraciones de más de un orden de magnitud en kernels medianos y grandes.

Para discretizar el kernel en una matriz de tamaño $(2k+1) \times (2k+1)$, se trunca habitualmente el soporte a una distancia de $k = \lceil 3\sigma \rceil$, abarcando el $99.73\%$ de la masa probabilística, y se normalizan los coeficientes resultantes dividiendo entre la suma total para garantizar ganancia unitaria en continua (preservación del nivel medio de iluminación).

\vspace{0.4cm}

### 4. Filtros No Lineales y Transformaciones Estadísticas

Cuando el ruido de la imagen no es de naturaleza gaussiana aditiva, los operadores lineales no consiguen desacoplar el ruido de las aristas genuinas.

\vspace{0.3cm}

#### Filtro de Mediana (*Median Filter*)

El filtro de mediana sustituye el píxel central por el valor mediano estadístico de las intensidades contenidas en su ventana local:

$$I_{\text{med}}(x, y) = \text{mediana}\left(\{I(x+u, y+v) \mid -k \le u, v \le k\}\right)$$

Es especialmente efectivo frente a ruido de tipo impulso (*sal y pimienta*). Debido a que la mediana es un estimador estadístico robusto de orden, descarta valores extremos atípicos sin promediarlos, preservando con gran fidelidad la nitidez de los bordes rectilíneos y contrastados.

\vspace{0.3cm}

#### Umbralización Óptima: Algoritmo de Otsu

La umbralización global (*thresholding*) segmenta una imagen $I$ en dos clases (fondo y primer plano) mediante un valor de corte $T$:

$$B(x, y) = \begin{cases} 1 & \text{si } I(x, y) \ge T \\ 0 & \text{si } I(x, y) < T \end{cases}$$

El algoritmo de Otsu (1979) calcula de forma analítica el umbral óptimo $T^*$ maximizando la varianza entre clases $\sigma_B^2(T)$, o equivalentemente minimizando la varianza intraclase $\sigma_W^2(T)$:

$$\sigma_B^2(T) = \omega_0(T) \omega_1(T) [\mu_0(T) - \mu_1(T)]^2$$

donde $\omega_0(T)$ y $\omega_1(T)$ son las probabilidades acumuladas de cada clase bajo el histograma normalizado, y $\mu_0(T), \mu_1(T)$ son sus medias respectivas. Este criterio no requiere parámetros heurísticos y converge evaluando directamente las frecuencias acumuladas del histograma.

\vspace{0.4cm}

### 5. Detección de Bordes y Operadores Diferenciales

Un borde o arista (*edge*) en una imagen se define como una discontinuidad local significativa en la función de intensidad luminosa, originada comúnmente por saltos de profundidad geométrica, cambios en la orientación normal de la superficie o variaciones en la reflectancia del material.

\vspace{0.3cm}

#### Operadores de Gradiente de Primer Orden

Para una función continua $f(x, y)$, el gradiente espacial es un campo vectorial bidimensional orientado en la dirección de máxima variación de intensidad:

$$\nabla f(x, y) = \begin{bmatrix} \frac{\partial f}{\partial x} \\ \frac{\partial f}{\partial y} \end{bmatrix}$$

En el dominio discreto de la imagen digital, las derivadas parciales se aproximan mediante diferencias finitas:
- Diferencia hacia adelante: $\frac{\partial I}{\partial x} \approx I(x+1, y) - I(x, y)$
- Diferencia centrada: $\frac{\partial I}{\partial x} \approx \frac{I(x+1, y) - I(x-1, y)}{2}$

Los núcleos de derivación combinan la diferenciación en un eje con el suavizado en el eje ortogonal para amortiguar el ruido:

\vspace{0.3cm}

- **Filtro de Sobel (3x3):**
  $$S_x = \begin{bmatrix} -1 & 0 & +1 \\ -2 & 0 & +2 \\ -1 & 0 & +1 \end{bmatrix}, \quad S_y = \begin{bmatrix} -1 & -2 & -1 \\ 0 & 0 & 0 \\ +1 & +2 & +1 \end{bmatrix}$$
  El operador de Sobel es separable en el producto de una máscara de suavizado binomial $[1, 2, 1]^T$ y un operador de diferencia finita centrada $[-1, 0, 1]$.

A partir de los mapas de respuesta $g_x = I * S_x$ y $g_y = I * S_y$, se obtienen la magnitud escalar y el ángulo de orientación del gradiente en cada píxel:

$$M(x, y) = \|\nabla I(x, y)\| = \sqrt{g_x^2(x, y) + g_y^2(x, y)}$$

$$\theta(x, y) = \text{atan2}(g_y(x, y), g_x(x, y)) \in [-\pi, \pi]$$

La magnitud mide la fuerza del contraste local, mientras que $\theta(x, y)$ es el vector normal ortogonal a la dirección tangente a lo largo del contorno del borde.

\vspace{0.3cm}

#### Operadores de Segundo Orden: La Laplaciana y Laplaciana de Gaussiana (LoG)

La Laplaciana es un operador diferencial isotrópico de segundo orden definido como la divergencia del gradiente:

$$\nabla^2 f(x, y) = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2}$$

Los puntos donde se localizan los máximos de pendiente en la función de intensidad corresponden a los cruces por cero (*zero-crossings*) de la segunda derivada. No obstante, la diferenciación de segundo orden amplifica drásticamente el ruido de alta frecuencia. Por este motivo, David Marr y Ellen Hildreth (1980) propusieron prefilar la imagen con un núcleo gaussiano antes de aplicar el operador de Laplace:

$$\nabla^2 (I * G_{\sigma}) = I * (\nabla^2 G_{\sigma})$$

El núcleo combinado resultante es la Laplaciana de Gaussiana (LoG), formulada como:

$$\text{LoG}_{\sigma}(x, y) = \nabla^2 G_{\sigma}(x, y) = \frac{1}{\pi \sigma^4} \left( \frac{x^2 + y^2}{2\sigma^2} - 1 \right) \exp\left( -\frac{x^2 + y^2}{2\sigma^2} \right)$$

Este filtro adopta el característico perfil de *"sombrero mexicano"* (*Mexican hat*). Asimismo, puede aproximarse de forma computacionalmente eficiente mediante la Diferencia de Gaussianas (DoG):

$$\text{DoG}(x, y) = G_{\sigma_1}(x, y) - G_{\sigma_2}(x, y) \approx (\sigma_1 - \sigma_2) \, \nabla^2 G_{\sigma}$$

\vspace{0.4cm}

### 6. El Detector de Bordes de Canny

John F. Canny formalizó en 1986 una formulación analítica de la detección de bordes a partir de tres criterios de optimalidad matemática:

\vspace{0.3cm}

1. **Baja Tasa de Error:** Debe detectar todas las aristas genuinas minimizando falsos positivos provocados por ruido y falsos negativos causados por contrastes débiles.
2. **Localización Exacta:** Los puntos detectados deben situarse lo más próximos posible al verdadero centro físico del borde.
3. **Respuesta Única:** No debe generar múltiples detecciones espurias adyacentes para una única transición física de borde (*aristas de un solo píxel de espesor*).

Para satisfacer estas condiciones de forma rigurosa, el algoritmo de Canny se ejecuta en cuatro fases secuenciales:

\vspace{0.3cm}

- **Fase 1: Suavizado Gaussiano:**
  La imagen de entrada se convoluciona con un filtro gaussiano de escala $\sigma$ para eliminar componentes de ruido estocástico de alta frecuencia:
  $$I_{\sigma} = I * G_{\sigma}$$

- **Fase 2: Cálculo del Gradiente:**
  Se aplican operadores diferenciales (habitualmente Sobel) para calcular las componentes ortogonales del gradiente $g_x$ y $g_y$. Se obtienen la magnitud $M(x, y)$ y la dirección $\theta(x, y)$, cuantizando este ángulo en cuatro orientaciones discretas principales: horizontal ($0^\circ$), diagonal principal ($45^\circ$), vertical ($90^\circ$) y diagonal secundaria ($135^\circ$).

- **Fase 3: Supresión de No Máximos (*Non-Maximum Suppression*, NMS):**
  Para garantizar la respuesta única y reducir el espesor del contorno a un solo píxel, se examina si la magnitud $M(x, y)$ es un máximo local respecto a sus dos vecinos situados a lo largo de la dirección ortogonal al borde $\theta(x, y)$:
  $$M_{\text{NMS}}(x, y) = \begin{cases} M(x, y) & \text{si } M(x, y) \ge M(x+d_x, y+d_y) \text{ y } M(x, y) \ge M(x-d_x, y-d_y) \\ 0 & \text{en caso contrario} \end{cases}$$
  Todos los píxeles que no superan a sus vecinos directos en la línea del gradiente se anulan a cero, produciendo crestas de arista perfectamente delgadas.

- **Fase 4: Umbralización con Histéresis y Conectividad (*Hysteresis Thresholding*):**
  Un único umbral global introduce aristas rotas si es demasiado alto o contornos ruidosos espurios si es demasiado bajo. Canny introduce dos umbrales complementarios, $T_{\text{alto}}$ y $T_{\text{bajo}}$ (habitualmente fijados en relación $T_{\text{alto}} / T_{\text{bajo}} \approx 2:1$ o $3:1$):
  - Los píxeles con magnitud $M_{\text{NMS}} \ge T_{\text{alto}}$ se declaran bordes firmes (*aristas fuertes*).
  - Los píxeles con $M_{\text{NMS}} < T_{\text{bajo}}$ se descartan definitivamente como ruido.
  - Los píxeles con $T_{\text{bajo}} \le M_{\text{NMS}} < T_{\text{alto}}$ (*aristas débiles*) solo se aceptan como bordes legítimos si se encuentran conectados topológicamente (mediante vecindad de 8) con algún píxel perteneciente a una arista fuerte.
