# Cuestiones y Problemas Resueltos

## Tema 2: Representación, Filtrado Espacial y Detección de Bordes

Este capítulo recoge la resolución analítica, matemática y conceptual de las cuestiones teóricas, problemas de diseño de kernels y baterías de autoevaluación planteadas al cierre del Tema 2 (dividido en los bloques 2.1 *Image Representation and Filtering* y 2.2 *Gaussian Filtering and Edges*) del programa oficial de Visión por Computador en la Universidad de Granada.

Las deducciones se fundamentan en el tratamiento formal del procesado de señal bidimensional y la teoría clásica de visión computacional, referenciando las obras canónicas de Szeliski (2022), Gonzalez y Woods (2018), Birchfield (2018) y los artículos seminales de Otsu (1979) y Canny (1986).

\vspace{0.5cm}

### Bloque I: Cuestiones Teóricas sobre Filtros Lineales

Las siguientes cuestiones corresponden a los ejercicios propuestos en las diapositivas 118 y 119 del bloque temático 2.1.

\vspace{0.4cm}

**CUESTIÓN 1: Equivariancia de la convolución frente a rotación y escalado**

*Enunciado:*

¿Es la convolución equivariante frente a la rotación y frente al escalado?

*Respuesta breve:*

La convolución estándar **no** es equivariante a la rotación ni al escalado; únicamente lo es ante traslaciones. Para la rotación requeriría un kernel estrictamente isotrópico (como una Gaussiana circular), y para el escalado una adaptación dinámica del tamaño del filtro o el uso de pirámides multiescala.

\vspace{0.3cm}

*Resolución analítica:*

Un operador o transformación $T$ es equivariante respecto a un grupo de transformaciones $g \in G$ si aplicar la transformación a la entrada y luego operar produce exactamente el mismo resultado que operar primero sobre la entrada y transformar posteriormente la salida:

$$T(g \cdot I) = g \cdot (T(I))$$

Analizamos cada caso por separado:

\vspace{0.3cm}

- **1. Equivariancia a la traslación (comportamiento de referencia)**

La convolución continua en $\mathbb{R}^2$ de una imagen $I(\mathbf{x})$ con un kernel $K(\mathbf{x})$ se define como:

$$(I * K)(\mathbf{x}) = \int_{\mathbb{R}^2} I(\boldsymbol{\tau}) K(\mathbf{x} - \boldsymbol{\tau}) \, d\boldsymbol{\tau}$$

Si aplicamos una traslación espacial pura $\mathbf{x}_0$, de modo que $I'(\mathbf{x}) = I(\mathbf{x} - \mathbf{x}_0)$, la respuesta del filtro es:

$$(I' * K)(\mathbf{x}) = \int_{\mathbb{R}^2} I(\boldsymbol{\tau} - \mathbf{x}_0) K(\mathbf{x} - \boldsymbol{\tau}) \, d\boldsymbol{\tau}$$

Mediante el cambio de variable $\boldsymbol{\mu} = \boldsymbol{\tau} - \mathbf{x}_0$ ($d\boldsymbol{\mu} = d\boldsymbol{\tau}$):

$$(I' * K)(\mathbf{x}) = \int_{\mathbb{R}^2} I(\boldsymbol{\mu}) K((\mathbf{x} - \mathbf{x}_0) - \boldsymbol{\mu}) \, d\boldsymbol{\mu} = (I * K)(\mathbf{x} - \mathbf{x}_0)$$

La convolución es intrínsecamente equivariante ante traslaciones. El valor detectado se desplaza exactamente en la misma magnitud espacial que la escena de entrada.

\vspace{0.3cm}

- **2. Equivariancia a la rotación**

Sea $R_\theta$ una matriz ortogonal de rotación de ángulo $\theta$ en $\mathbb{R}^2$. Definimos la imagen rotada como $I_{rot}(\mathbf{x}) = I(R_\theta^{-1} \mathbf{x})$. Si convolucionamos esta imagen con el kernel estático $K$:

$$(I_{rot} * K)(\mathbf{x}) = \int_{\mathbb{R}^2} I(R_\theta^{-1} \boldsymbol{\tau}) K(\mathbf{x} - \boldsymbol{\tau}) \, d\boldsymbol{\tau}$$

Efectuando el cambio de variable $\boldsymbol{\mu} = R_\theta^{-1} \boldsymbol{\tau}$, donde $\boldsymbol{\tau} = R_\theta \boldsymbol{\mu}$ y el jacobiano satisface $|\det(R_\theta)| = 1$:

$$(I_{rot} * K)(\mathbf{x}) = \int_{\mathbb{R}^2} I(\boldsymbol{\mu}) K(\mathbf{x} - R_\theta \boldsymbol{\mu}) \, d\boldsymbol{\mu}$$

Por otra parte, si calculáramos la convolución sobre la imagen original y rotáramos posteriormente el mapa de salida resultante, obtendríamos:

$$[R_\theta (I * K)](\mathbf{x}) = (I * K)(R_\theta^{-1} \mathbf{x}) = \int_{\mathbb{R}^2} I(\boldsymbol{\mu}) K(R_\theta^{-1} \mathbf{x} - \boldsymbol{\mu}) \, d\boldsymbol{\mu}$$

Multiplicando el argumento de $K$ por $R_\theta$ aprovechando la linealidad de la transformación:

$$K(R_\theta^{-1} \mathbf{x} - \boldsymbol{\mu}) = K(R_\theta^{-1} (\mathbf{x} - R_\theta \boldsymbol{\mu}))$$

Para que ambas expresiones coincidan para cualquier imagen $I$, es estrictamente necesario que:

$$K(\mathbf{x} - R_\theta \boldsymbol{\mu}) = K(R_\theta^{-1} (\mathbf{x} - R_\theta \boldsymbol{\mu})) \quad \forall \, \mathbf{x}, \boldsymbol{\mu}$$

Esto solo se cumple si el kernel es rotacionalmente invariante (isotrópico), es decir, dependiente exclusivamente del radio euclídeo $\|\mathbf{x}\|$ respecto al origen, como sucede en una Gaussiana circular $G(\mathbf{x}) = \frac{1}{2\pi\sigma^2} e^{-\frac{\|\mathbf{x}\|^2}{2\sigma^2}}$ o en un Laplaciano de Gaussiana (LoG).

Para cualquier kernel direccional común (como los operadores de Sobel, Prewitt, Gabor o derivadas orientadas), el kernel mantiene fija su orientación respecto al sistema de coordenadas de la matriz. Si la imagen rota $45^\circ$, un detector horizontal continuará diferenciando filas horizontales en lugar de seguir la inclinación de la estructura rotada. En consecuencia, en el caso general la convolución **no es equivariante a la rotación**.

\vspace{0.3cm}

- **3. Equivariancia al escalado**

Sea una transformación de escala isotrópica por un factor escalar $s > 0$, de forma que $I_{esc}(\mathbf{x}) = I(s \mathbf{x})$. Al filtrar con un kernel de tamaño fijo $K$:

$$(I_{esc} * K)(\mathbf{x}) = \int_{\mathbb{R}^2} I(s \boldsymbol{\tau}) K(\mathbf{x} - \boldsymbol{\tau}) \, d\boldsymbol{\tau}$$

Con el cambio $\boldsymbol{\mu} = s \boldsymbol{\tau}$ ($d\boldsymbol{\tau} = s^{-2} d\boldsymbol{\mu}$):

$$(I_{esc} * K)(\mathbf{x}) = \frac{1}{s^2} \int_{\mathbb{R}^2} I(\boldsymbol{\mu}) K\left(\mathbf{x} - \frac{\boldsymbol{\mu}}{s}\right) \, d\boldsymbol{\mu}$$

Sin embargo, filtrar primero y escalar después la respuesta generaría:

$$[S_s (I * K)](\mathbf{x}) = (I * K)(s \mathbf{x}) = \int_{\mathbb{R}^2} I(\boldsymbol{\mu}) K(s \mathbf{x} - \boldsymbol{\mu}) \, d\boldsymbol{\mu}$$

Ambas integrales difieren sustancialmente: el kernel $K$ posee una huella de píxeles finita fija. Si reducimos la imagen a la mitad, los patrones visuales ocupan menos píxeles y el filtro cubrirá el doble de contexto semántico; si la ampliamos, cubrirá la mitad. Para mantener la equivariancia sería imperativo redimensionar dinámicamente el soporte y la varianza del propio filtro ($K_{s}(\mathbf{x}) = \frac{1}{s^2} K(\mathbf{x}/s)$).

Por tanto, con máscaras fijas, la convolución estándar **no es equivariante al escalado**. Esta limitación motivó históricamente la teoría del espacio-escala (*scale-space representation*) de Witkin y Lindeberg, así como las pirámides Gaussianas y Laplacianas.

\vspace{0.5cm}

**CUESTIÓN 2: Equivalencia entre correlación cruzada y convolución rotando la salida**

*Enunciado:*

¿Es la correlación equivalente a la convolución si rotamos su salida 180 grados? Es decir, ¿se cumple la igualdad:

$$rotate180(Correlation(I, K)) == Convolution(I, K)?$$

*Respuesta breve:*

**No**. Rotar la salida invierte todo el marco de coordenadas de la imagen resultante, lo que equivale a convolucionar la imagen original invertida. Para que la correlación sea idéntica a la convolución, lo que debe rotarse $180^\circ$ es el **kernel** antes de operar ($I * K = I \otimes \text{rot}_{180}(K)$).

\vspace{0.3cm}

*Resolución analítica:*

La respuesta matemática es **no**. Rotar la salida tras haber calculado la correlación no equivale a convolucionar la imagen original.

Analicemos las definiciones discretas bidimensionales centradas en el origen. Para simplificar la notación y sin pérdida de generalidad, consideramos dominios simétricos indexados por números enteros:

\vspace{0.3cm}

- **1. Correlación cruzada ($I \otimes K$):**

$$(I \otimes K)(x, y) = \sum_{u} \sum_{v} I(x+u, y+v) K(u, v)$$

\vspace{0.3cm}

- **2. Convolución ($I * K$):**

$$(I * K)(x, y) = \sum_{u} \sum_{v} I(x-u, y-v) K(u, v)$$

Efectuando el cambio de índices mudos $u' = -u$ y $v' = -v$, la convolución se expresa de manera idéntica a una correlación pero invirtiendo los ejes del kernel:

$$(I * K)(x, y) = \sum_{u'} \sum_{v'} I(x+u', y+v') K(-u', -v') = [I \otimes rotate180(K)](x, y)$$

Esta es la relación canónica fundamental: **la convolución equivale a la correlación cruzada cuando se rota el kernel 180 grados antes de operar**.

\vspace{0.3cm}

- **3. Efecto de rotar la salida de la correlación:**

Sea $C(x, y) = (I \otimes K)(x, y)$. La operación $rotate180(C)$ aplicada sobre la imagen de salida invierte simultáneamente ambas coordenadas espaciales:

$$C_{rot180}(x, y) = C(-x, -y)$$

Sustituyendo $(-x, -y)$ en la definición de la correlación:

$$C(-x, -y) = \sum_{u} \sum_{v} I(-x+u, -y+v) K(u, v)$$

Haciendo el cambio de variables $u' = -u$ y $v' = -v$:

$$C(-x, -y) = \sum_{u'} \sum_{v'} I(-(x+u'), -(y+v')) K(-u', -v')$$

Definiendo la imagen de entrada rotada 180 grados como $I_{rot180}(x, y) = I(-x, -y)$, reconocemos que la expresión anterior es:

$$C(-x, -y) = \sum_{u'} \sum_{v'} I_{rot180}(x+u', y+v') K(-u', -v') = [rotate180(I) * K](x, y)$$

Rotar la imagen resultante de la correlación equivale a haber convolucionado la imagen original rotada 180 grados con el kernel original sin rotar. Toda la escena resultante queda orientada boca abajo y con el eje horizontal invertido. Para obtener la convolución $I * K$, el giro de 180 grados debe realizarse obligatoriamente sobre el soporte del **filtro** $K$ con carácter previo al cálculo, nunca sobre la imagen de respuesta generada.

\vspace{0.5cm}

**CUESTIÓN 3: Linealidad del umbralizado (*Thresholding*)**

*Enunciado:*

¿Puede implementarse el umbralizado mediante un filtro lineal? Dicho de otro modo, ¿es el umbralizado una operación lineal?

*Respuesta breve:*

**No**. El umbralizado es una operación estrictamente no lineal (función escalón de Heaviside). Viola tanto la homogeneidad ($T(\alpha I) \neq \alpha T(I)$) como la aditividad ($T(I_1 + I_2) \neq T(I_1) + T(I_2)$) del principio de superposición, por lo que no puede implementarse como un filtro lineal ni mediante convolución.

\vspace{0.3cm}

*Resolución analítica:*

La respuesta categórica es **no**. El umbralizado es una operación estrictamente **no lineal**.

Para que un operador $T: \mathcal{I} \to \mathcal{I}$ sea lineal en el espacio vectorial de imágenes, debe satisfacer rigurosamente el **principio de superposición**, descompuesto en dos condiciones necesarias y suficientes:

1. **Homogeneidad:** $T(\alpha I) = \alpha T(I)$ para cualquier escalar $\alpha \in \mathbb{R}$.
2. **Aditividad:** $T(I_1 + I_2) = T(I_1) + T(I_2)$ para cualquier par de imágenes $I_1, I_2$.

Consideremos la definición estándar del operador de umbralizado con valor umbral $\theta > 0$, que mapea la intensidad de cada píxel a un valor binario:

$$T_\theta(I)(x, y) = \begin{cases} 1 & \text{si } I(x, y) \ge \theta \\ 0 & \text{si } I(x, y) < \theta \end{cases}$$

Demostramos la violación de ambas propiedades mediante contraejemplos analíticos directos:

\vspace{0.3cm}

- **Violación de la homogeneidad:**

Tomemos un píxel con intensidad $I(x, y) = 0,5\,\theta$. Al aplicar el umbral:

$$T_\theta(I)(x, y) = 0$$

Multipliquemos la imagen de entrada por el factor de escala escalar $\alpha = 2$. La nueva intensidad es $(\alpha I)(x, y) = 2 \cdot (0,5\,\theta) = \theta$. Evaluando el operador:

$$T_\theta(\alpha I)(x, y) = 1$$

Sin embargo, multiplicar la salida por el escalar produce:

$$\alpha \cdot T_\theta(I)(x, y) = 2 \cdot 0 = 0$$

Dado que $1 \neq 0$, se incumple la homogeneidad: $T_\theta(\alpha I) \neq \alpha T_\theta(I)$.

\vspace{0.3cm}

- **Violación de la aditividad:**

Consideremos dos imágenes $I_1$ e $I_2$ que en la posición $(x, y)$ presentan valores $I_1(x, y) = 0,6\,\theta$ e $I_2(x, y) = 0,6\,\theta$. Evaluando por separado:

$$T_\theta(I_1)(x, y) = 0 \quad \text{y} \quad T_\theta(I_2)(x, y) = 0 \implies T_\theta(I_1)(x, y) + T_\theta(I_2)(x, y) = 0$$

Sumando ambas imágenes previamente a la entrada, la intensidad combinada es $(I_1 + I_2)(x, y) = 1,2\,\theta \ge \theta$. Por tanto:

$$T_\theta(I_1 + I_2)(x, y) = 1 \neq 0$$

El umbralizado modela una función escalón de Heaviside desplazada, cuya derivada contiene una delta de Dirac. Introduce componentes espectrales inexistentes en la señal original y carece de representación matricial o convolucional mediante máscaras espaciales.

\vspace{0.5cm}

**CUESTIÓN 4: Diseño analítico de filtro de contraste local con 4-vecinos**

*Enunciado:*

¿Cuál de los siguientes filtros $3 \times 3$ devuelve un valor positivo si el promedio de los cuatro vecinos contiguos (4-conectados) es menor que el centro, y un valor negativo (o cero) en caso contrario?

\begin{equation*}
(a) \, \begin{bmatrix} 0 & 1/4 & 0 \\ 1/4 & -1 & 1/4 \\ 0 & 1/4 & 0 \end{bmatrix} \qquad
(b) \, \begin{bmatrix} -1 & -2 & -1 \\ 0 & 0 & 0 \\ 1 & 2 & 2 \end{bmatrix} \qquad
(c) \, \begin{bmatrix} 0 & -1 & 0 \\ -1 & 4 & -1 \\ 0 & -1 & 0 \end{bmatrix}
\end{equation*}

*Respuesta breve:*

El filtro correcto es el **(c)** (con centro $+4$ y los cuatro vecinos ortogonales con peso $-1$). Su respuesta es $4(I_c - \bar{I}_{adj})$, estrictamente positiva si y solo si el centro supera la media de los vecinos. Corresponde al Laplaciano discreto negativo ($-\nabla^2$), que actúa como detector de máximos locales y picos de contraste.

\vspace{0.3cm}

*Resolución analítica:*

Modelamos matemáticamente la condición exigida en el enunciado. Sea $I_c = I(x, y)$ la intensidad del píxel central y definamos el conjunto de sus cuatro vecinos ortogonales $N_4(x, y) = \{I(x, y-1), I(x-1, y), I(x+1, y), I(x, y+1)\}$.

El promedio aritmético de dichos cuatro vecinos es:

$$\bar{I}_{adj} = \frac{1}{4} \sum_{(u, v) \in N_4} I(u, v)$$

La condición especifica que la respuesta $R$ debe ser estrictamente positiva si y solo si $\bar{I}_{adj} < I_c$:

$$\bar{I}_{adj} < I_c \iff I_c - \bar{I}_{adj} > 0$$

Multiplicando la inecuación por la constante positiva 4:

$$4(I_c - \bar{I}_{adj}) > 0 \iff 4 I_c - \sum_{(u, v) \in N_4} I(u, v) > 0$$

Evaluamos la respuesta de convolución de cada uno de los filtros candidatos sobre el entorno local:

\vspace{0.3cm}

- **Filtro (a):**

$$R_a = \frac{1}{4}\sum_{(u, v) \in N_4} I(u, v) - 1 \cdot I_c = \bar{I}_{adj} - I_c = -(I_c - \bar{I}_{adj})$$

Si el promedio de los vecinos es menor que el centro ($\bar{I}_{adj} < I_c$), la diferencia $I_c - \bar{I}_{adj}$ es positiva, por lo que $R_a$ toma un valor **negativo**. Produce exactamente el signo opuesto al buscado.

\vspace{0.3cm}

- **Filtro (b):**

Es un operador diferencial asimétrico orientado en el eje vertical (variante de Sobel con error en el extremo inferior derecho donde figura un 2 en lugar de 1). No evalúa la relación isotrópica entre el centro y sus vecinos, sino un gradiente direccional con peso nulo en la fila central.

\vspace{0.3cm}

- **Filtro (c):**

$$R_c = 4 I_c - 1 \cdot \sum_{(u, v) \in N_4} I(u, v) = 4(I_c - \bar{I}_{adj})$$

Analizando su signo:
1. Si $\bar{I}_{adj} < I_c \implies I_c - \bar{I}_{adj} > 0 \implies R_c > 0$ (valor estrictamente positivo).
2. Si $\bar{I}_{adj} \ge I_c \implies I_c - \bar{I}_{adj} \le 0 \implies R_c \le 0$ (valor negativo o cero).

La respuesta es unívocamente la **(c)**.

Desde el punto de vista del procesado digital, el filtro (c) representa la aproximación en diferencias finitas del **Laplaciano discreto negativo** ($-\nabla^2 I$). El Laplaciano clásico mide la divergencia del gradiente: en un máximo local (donde la intensidad central sobresale de su entorno inmediato), la curvatura es cóncava ($\nabla^2 I < 0$), por lo que $-\nabla^2 I$ produce una respuesta positiva máxima que detecta picos luminosos y realza detalles finos.

\vspace{0.5cm}

### Bloque II: Problema Analítico del Kernel Gaussiano

Este ejercicio corresponde al problema cuantitativo propuesto en la diapositiva 85 del bloque temático 2.2.

*Enunciado general:*

Imaginemos un kernel Gaussiano bidimensional de tamaño $9 \times 9$.

\vspace{0.4cm}

**APARTADO 1: Determinación de $\sigma$ equivalente bajo la cota $k \ge 3\sigma$**

*Pregunta:*

¿Cuál sería el valor equivalente de $\sigma$, asumiendo que $k$ debe ser el entero más pequeño mayor o igual que $3\sigma$?

*Respuesta breve:*

Para un kernel $9 \times 9$, el radio es $k = 4$. Al cumplirse $k = \lceil 3\sigma \rceil = 4$, el rango admisible es $1 < \sigma \le 4/3$, resultando en el límite exacto de diseño que cubre el soporte $[-3\sigma, +3\sigma]$ el valor $\boldsymbol{\sigma = 4/3 \approx 1,333}$.

\vspace{0.3cm}

*Resolución:*

Un kernel digital bidimensional simétrico centrado en el origen posee dimensiones impares $N \times N$, donde $N = 2k + 1$ y $k$ denota el radio espacial o semiancho del filtro en píxeles (las coordenadas recorren el intervalo $[-k, +k]$ tanto en $x$ como en $y$).

Para un kernel de tamaño $9 \times 9$:

$$2k + 1 = 9 \implies 2k = 8 \implies k = 4$$

La condición impuesta en el enunciado establece que $k$ es el menor número entero mayor o igual que $3\sigma$, lo cual se expresa formalmente mediante la función techo (*ceiling*):

$$k = \lceil 3\sigma \rceil = 4$$

Por definición de la función techo, esto impone el rango de valores admisibles para $3\sigma$:

$$3 < 3\sigma \le 4 \implies 1 < \sigma \le \frac{4}{3}$$

En el límite estricto de diseño óptimo donde el soporte del filtro trunca la distribución en exactamente $3\sigma$ a cada lado del centro:

$$3\sigma = 4 \implies \sigma = \frac{4}{3} \approx 1,3333$$

Con este valor de $\sigma$, el intervalo de discretización $[-4, 4]$ cubre el rango $[-3\sigma, +3\sigma]$, garantizando que el filtro contenga más del $99,73\%$ del volumen de la campana Gaussiana continua y minimizando los artefactos de discontinuidad en los bordes del kernel.

\vspace{0.5cm}

**APARTADO 2: Tamaño equivalente tras 3 aplicaciones sucesivas mediante soporte discreto**

*Pregunta:*

Si quisiéramos aplicar este mismo kernel de $9 \times 9$ un total de 3 veces consecutivas, ¿cuál sería el tamaño del kernel equivalente resultante?

*Nota incluida en la diapositiva:* Al aplicar el mismo kernel de tamaño $N$ un total de $k_{rep}$ veces, el tamaño del filtro equivalente viene dado por $N_{eq} = N + (k_{rep} - 1)(N - 1)$.

*Respuesta breve:*

Por la regla del soporte algebraico discreto $N_{eq} = N + (k_{rep} - 1)(N - 1)$, aplicando el filtro de tamaño $N = 9$ tres veces consecutivas ($k_{rep} = 3$), el tamaño del kernel discreto equivalente resultante es $9 + 2 \times 8 = \mathbf{25 \times 25}$.

\vspace{0.3cm}

*Resolución:*

La fórmula suministrada proviene de la propiedad del soporte algebraico de la convolución discreta. Si convolucionamos dos señales discretas de soportes finitos $L_1$ y $L_2$, la longitud del soporte resultante es $L_1 + L_2 - 1$.

Al convolucionar $k_{rep} = 3$ veces un kernel con lado de dimensión $N = 9$:

- Primera convolución: tamaño $N = 9$.
- Segunda convolución: $(N) + (N - 1) = 9 + 8 = 17$.
- Tercera convolución: $(17) + (N - 1) = 17 + 8 = 25$.

Aplicando la expresión compacta:

$$N_{eq} = 9 + (3 - 1)(9 - 1) = 9 + 2 \times 8 = 9 + 16 = 25$$

El kernel discreto resultante equivalente que sintetiza las tres etapas en una sola pasada posee una dimensión de **$25 \times 25$**.

\vspace{0.5cm}

**APARTADO 3: Tamaño equivalente por efecto de desenfoque continuo Gaussiano ($\sigma\sqrt{N_{rep}}$)**

*Pregunta:*

Si quisiéramos aplicar este mismo kernel de $9 \times 9$ un total de 3 veces consecutivas, ¿cuál sería el tamaño del kernel equivalente utilizando la propiedad de que la Gaussiana es cerrada bajo la convolución (es decir, convolucionar $N_{rep}$ veces consecutivas con desviación $\sigma$ equivale a una única convolución con una Gaussiana de desviación $\sigma \sqrt{N_{rep}}$)? En este caso, buscamos el filtro que proporcione el efecto de desenfoque (*blurring*) equivalente.

*Respuesta breve:*

Por la propiedad reproductiva de adición de varianzas Gaussianas, $\sigma_{eq} = \sigma\sqrt{3} = \frac{4}{\sqrt{3}} \approx 2,309$. Aplicando la regla $k_{eq} = \lceil 3\sigma_{eq} \rceil = \lceil 4\sqrt{3} \rceil = 7$, el tamaño de filtro con desenfoque equivalente es $2(7) + 1 = \mathbf{15 \times 15}$.

\vspace{0.3cm}

*Resolución:*

La función de densidad Gaussiana satisface la propiedad reproductiva bajo la operación de convolución continua. Si convolucionamos dos Gaussianas independientes con desviaciones estándar $\sigma_1$ y $\sigma_2$:

$$G_{\sigma_1}(\mathbf{x}) * G_{\sigma_2}(\mathbf{x}) = G_{\sigma_{eq}}(\mathbf{x}) \quad \text{donde} \quad \sigma_{eq}^2 = \sigma_1^2 + \sigma_2^2$$

Al aplicar $N_{rep} = 3$ convoluciones consecutivas con la misma desviación estándar $\sigma$:

$$\sigma_{eq}^2 = \sigma^2 + \sigma^2 + \sigma^2 = 3\sigma^2 \implies \sigma_{eq} = \sigma \sqrt{3}$$

Tomando el valor de $\sigma = 4/3$ obtenido en el Apartado 1:

$$\sigma_{eq} = \frac{4}{3} \sqrt{3} = \frac{4}{\sqrt{3}} \approx 2,3094$$

Para diseñar un nuevo filtro discreto que proporcione exactamente este mismo efecto visual de suavizado respetando la regla inicial ($k_{eq} = \lceil 3\sigma_{eq} \rceil$):

$$3\sigma_{eq} = 3 \cdot \frac{4}{\sqrt{3}} = 4\sqrt{3} \approx 4 \times 1,73205 = 6,9282$$

Calculando el radio entero mínimo necesario:

$$k_{eq} = \lceil 6,9282 \rceil = 7$$

Calculamos la dimensión total del filtro simétrico:

$$N'_{eq} = 2 k_{eq} + 1 = 2(7) + 1 = 15$$

Por consiguiente, el tamaño del kernel equivalente en cuanto a desenfoque es de **$15 \times 15$**.

\vspace{0.4cm}

*Discusión técnica comparativa (25 vs 15):*

Existe una aparente discrepancia entre el resultado del Apartado 2 ($25 \times 25$) y el del Apartado 3 ($15 \times 15$). Su justificación radica en la naturaleza de la discretización:

- El cálculo algebraico $25 \times 25$ determina el soporte exterior estricto de convolucionar tres matrices truncadas. Sin embargo, los coeficientes en las coronas exteriores (para radios de distancia entre 8 y 12 píxeles respecto al centro) son producto de multiplicar valores ya infinitesimales de las colas de la campana. La suma de todos los pesos en esa franja externa representa menos del $0,05\%$ de la masa energética total del filtro.
- Al emplear la propiedad continua y truncar la Gaussiana equivalente en el umbral del $99,73\%$ ($3\sigma_{eq}$), un kernel de $15 \times 15$ captura prácticamente la totalidad de la función. Convolucionar con una matriz de $15 \times 15$ requiere $15^2 = 225$ operaciones por píxel (o $2 \times 15 = 30$ si se descompone de forma separable 1D), mientras que una matriz ingenua de $25 \times 25$ exige $25^2 = 625$ multiplicaciones (o $2 \times 25 = 50$). El tratamiento analítico mediante $\sigma\sqrt{3}$ permite reducir el coste computacional en un $64\%$ produciendo una salida indistinguible perceptualmente.

\vspace{0.5cm}

### Bloque III: Cuestiones de Examen y Autoevaluación

Resolución exhaustiva de los siete quizzes oficiales de examen correspondientes a las diapositivas 86 a 89 del bloque temático 2.2.

\vspace{0.4cm}

**QUIZ 1: Composición de filtros complejos (Diapositiva 86)**

*Enunciado:*

¿Qué propiedad o teorema relativo a la convolución es el que, principalmente, permite la creación/composición de filtros más complejos a partir de filtros más sencillos?

a) Asociativa  
b) Conmutativa  
c) Distributiva  
d) Teorema de la Convolución  

*Respuesta correcta:* **a) Asociativa**

*Respuesta breve:*

Opción **a) Asociativa**. Permite componer y preconvolucionar filtros en cascada ($K = K_1 * K_2$) antes de aplicarlos a la imagen en una sola pasada, base matemática que permite derivar analíticamente la Gaussiana ($\frac{\partial}{\partial x}(I * G) = I * \frac{\partial G}{\partial x}$).

\vspace{0.3cm}

*Justificación analítica:*

La propiedad asociativa establece que, dadas una imagen $I$ y dos filtros espaciales $K_1$ y $K_2$:

$$[I * K_1] * K_2 = I * [K_1 * K_2]$$

Esta identidad permite convolucionar previamente los dos núcleos elementales entre sí para sintetizar un único operador compuesto $K_{comp} = K_1 * K_2$ de forma estática (*offline*). Al procesar la imagen, basta realizar una única convolución directa $I * K_{comp}$ en lugar de filtrar secuencialmente toda la escena en dos etapas sucesivas.

El ejemplo fundamental en visión por computador es el operador de **Derivada de la Gaussiana** (DoG o gradiente suavizado): en lugar de suavizar la imagen completa con una Gaussiana $G$ y luego derivar numéricamente el resultado ($D * (G * I)$), la propiedad asociativa permite derivar analíticamente la función Gaussiana primero y aplicar directamente el kernel precalculado:

$$\frac{\partial}{\partial x}(I * G) = I * \left(\frac{\partial G}{\partial x}\right)$$

*Análisis de las opciones incorrectas:*

- **b) Conmutativa ($I * K = K * I$):** Garantiza que el orden de los factores no altera el resultado, pero no permite la agrupación y prefusión de operadores.
- **c) Distributiva ($I * (K_1 + K_2) = I * K_1 + I * K_2$):** Rige la adición de filtros en paralelo, no la aplicación en cascada o composición jerárquica.
- **d) Teorema de la Convolución ($\mathcal{F}\{I * K\} = \mathcal{F}\{I\} \cdot \mathcal{F}\{K\}$):** Transforma la convolución en multiplicación puntual en el dominio frecuencial, pero la propiedad que rige el diseño algorítmico y la composición de máscaras espaciales en el dominio directo es la asociatividad.

\vspace{0.5cm}

**QUIZ 2: Identificación del filtro de realce (Diapositiva 86)**

*Enunciado:*

¿Qué tipo de filtro considera que es el siguiente?

\begin{equation*}
\begin{bmatrix}
0 & -1 & 0 \\
-1 & 5 & -1 \\
0 & -1 & 0
\end{bmatrix}
\end{equation*}

a) Suavizado Gaussiano  
b) Laplaciana de la Gaussiana  
c) Sharpening  
d) Ninguna de las anteriores  

*Respuesta correcta:* **c) Sharpening**

*Respuesta breve:*

Opción **c) Sharpening**. El filtro descompone en Identidad más Laplaciano negativo ($I - \nabla^2 I$, máscara de desenfoque). Sus pesos suman 1 para no alterar el brillo en zonas homogéneas, mientras que su centro dominante 5 frente a vecinos $-1$ realza las altas frecuencias (bordes).

\vspace{0.3cm}

*Justificación analítica:*

Descomponemos matricialmente el kernel dado $K$:

$$K = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix} + \begin{bmatrix} 0 & -1 & 0 \\ -1 & 4 & -1 \\ 0 & -1 & 0 \end{bmatrix} = \delta(x, y) - \nabla^2$$

donde $\delta(x, y)$ representa el operador identidad (filtro delta de Dirac centrado que reproduce el píxel original intacto) y el segundo término es el Laplaciano discreto estándar con signo negativo ($-\nabla^2$).

La acción del filtro sobre un píxel $I_c$ con vecinos ortogonales $N_4$ es:

$$(I * K)(x, y) = 5 I_c - \sum_{(u, v) \in N_4} I(u, v) = I_c + \left(4 I_c - \sum_{(u, v) \in N_4} I(u, v)\right) = I_c - \nabla^2 I$$

Esta formulación corresponde exactamente a la técnica clásica de **máscara de desenfoque (*Unsharp Masking*) o Sharpening**:
1. En regiones homogéneas (zonas planas), los vecinos tienen la misma intensidad que el centro ($I_c \approx \bar{I}_{adj}$). La suma de los coeficientes de la máscara es $5 - 4 = 1$, por lo que la ganancia es unitaria y la luminosidad media de la imagen no se altera.
2. En bordes o transiciones bruscas, la segunda derivada $-\nabla^2 I$ detecta la discontinuidad y suma un valor proporcional a la curvatura local, intensificando el salto de contraste y haciendo que los perfiles visuales parezcan más nítidos.

*Análisis de las opciones incorrectas:*

- **a) Suavizado Gaussiano:** Falsa. Los filtros de suavizado actúan como promedios ponderados paso bajo, por lo que todos sus coeficientes son estrictamente no negativos y normalizados para sumar 1.
- **b) Laplaciana de la Gaussiana (LoG):** Falsa. Los núcleos LoG son operadores derivados puros de segundo orden cuya suma de coeficientes es estrictamente cero (anulan áreas uniformes y solo responden a bordes).

\vspace{0.5cm}

**QUIZ 3: Sigma equivalente tras tres etapas de suavizado (Diapositiva 87)**

*Enunciado:*

Si suavizamos una imagen tres veces consecutivas con un filtro Gaussiano $\sigma$, ¿cuál sería el sigma equivalente que nos permitiría obtener el mismo resultado suavizando una única vez?

a) $\sigma\sqrt{3}$  
b) $\sqrt{3\sigma}$  
c) $3\sqrt{\sigma}$  
d) Ninguna de las anteriores  

*Respuesta correcta:* **a) $\sigma\sqrt{3}$**

*Respuesta breve:*

Opción **a) $\boldsymbol{\sigma\sqrt{3}}$**. La convolución continua de filtros Gaussianos suma algebraicamente sus varianzas ($\sigma_{eq}^2 = \sigma^2 + \sigma^2 + \sigma^2 = 3\sigma^2$), lo que proporciona una desviación estándar equivalente resultante de $\sigma_{eq} = \sqrt{3\sigma^2} = \sigma\sqrt{3}$.

\vspace{0.3cm}

*Justificación analítica:*

La función Gaussiana unidimensional centrada viene dada por:

$$g(x; \sigma) = \frac{1}{\sqrt{2\pi}\sigma} e^{-\frac{x^2}{2\sigma^2}}$$

Su transformada de Fourier continua es asimismo otra función Gaussiana:

$$\mathcal{F}\{g(x; \sigma)\}(\omega) = e^{-\frac{\sigma^2 \omega^2}{2}}$$

Por el teorema de convolución, convolucionar en el dominio espacial tres veces consecutivas con la misma desviación estándar $\sigma$ equivale a multiplicar algebraicamente sus espectros de Fourier:

$$\mathcal{F}\{g * g * g\}(\omega) = e^{-\frac{\sigma^2 \omega^2}{2}} \cdot e^{-\frac{\sigma^2 \omega^2}{2}} \cdot e^{-\frac{\sigma^2 \omega^2}{2}} = e^{-\frac{3\sigma^2 \omega^2}{2}} = e^{-\frac{\sigma_{eq}^2 \omega^2}{2}}$$

Igualando los exponentes:

$$\sigma_{eq}^2 = 3\sigma^2 \implies \sigma_{eq} = \sqrt{3\sigma^2} = \sigma\sqrt{3}$$

El mismo principio aplica directamente a Gaussianas bidimensionales isotrópicas por su propiedad de separabilidad cartesiana ($G(x, y; \sigma) = g(x; \sigma) g(y; \sigma)$).

*Análisis de las opciones incorrectas:*

- **b) $\sqrt{3\sigma}$:** Falsa. En esta opción la raíz cuadrada abarca tanto al 3 como al parámetro $\sigma$. Desde una perspectiva de análisis dimensional, si $\sigma$ se mide en píxeles, $\sqrt{\sigma}$ tendría unidades de $\text{píxeles}^{1/2}$, lo cual es físicamente absurdo.
- **c) $3\sqrt{\sigma}$:** Falsa. Padece del mismo error dimensional y confunde la suma de varianzas con la multiplicación lineal del factor de escala.

\vspace{0.5cm}

**QUIZ 4: Análisis comparativo de Canny y Otsu (Diapositiva 87)**

*Enunciado:*

¿Cuál de las siguientes afirmaciones sobre los algoritmos de Canny y Otsu es correcta?

a) El detector de bordes de Canny se comporta como un filtro lineal dado que emplea filtrado Gaussiano para suavizar/emborronar la imagen y, a continuación, emplea filtrado lineal para calcular el gradiente.  
b) El umbral óptimo en el algoritmo de Otsu se obtiene minimizando la varianza inter-clase o maximizando la varianza intra-clase.  
c) En el algoritmo de Canny obtendremos bordes más discontinuos/fragmentados si reducimos el umbral bajo.  
d) Las tres respuestas anteriores son erróneas.  

*Respuesta correcta:* **d) Las tres respuestas anteriores son erróneas**

*Respuesta breve:*

Opción **d) Las tres respuestas anteriores son erróneas**. Canny no es lineal (incorpora supresión de no máximos e histéresis); Otsu maximiza la varianza inter-clase (no la minimiza); y reducir el umbral bajo en Canny genera bordes más continuos y conectados, no más fragmentados.

\vspace{0.3cm}

*Justificación analítica:*

Demostramos la falsedad individual de cada una de las proposiciones anteriores:

\vspace{0.3cm}

- **Refutación de la afirmación a:**

El detector de Canny consta de cuatro etapas:
1. Suavizado Gaussiano (lineal).
2. Cálculo de gradiente por derivadas direccionales (lineal).
3. **Supresión de no máximos (*Non-Maximum Suppression*, NMS):** Operación de adelgazamiento que compara la magnitud de cada píxel con sus dos vecinos en la dirección normal al gradiente y anula el píxel si no es el máximo local estricto. Es una función de conmutación no lineal condicionada.
4. **Umbralización con histéresis:** Clasifica píxeles en fuertes, débiles y fondo mediante dos umbrales y preserva los débiles únicamente si forman una cadena conectada de 8-vecindad con un borde fuerte. La conectividad topológica y el umbralizado son operaciones fuertemente no lineales.

En consecuencia, el detector de Canny en su conjunto es un sistema **no lineal**.

\vspace{0.3cm}

- **Refutación de la afirmación b:**

En la formulación matemática de Otsu (1979), la varianza total de las intensidades de la imagen $\sigma_T^2$ es constante e invariante respecto al umbral $t$, satisfaciendo la descomposición:

$$\sigma_T^2 = \sigma_W^2(t) + \sigma_B^2(t)$$

donde $\sigma_W^2(t)$ es la varianza intra-clase (*within-class variance*, dispersión interna de los dos grupos) y $\sigma_B^2(t)$ es la varianza inter-clase (*between-class variance*, distancia cuadrática entre las medias ponderadas de ambos grupos).

Para encontrar la separación que maximiza la discriminación estadística entre fondo y objeto, Otsu busca el umbral óptimo $t^*$ mediante:

$$t^* = \arg\max_t \sigma_B^2(t) \quad \iff \quad t^* = \arg\min_t \sigma_W^2(t)$$

La opción b invierte deliberadamente el criterio al enunciar: "minimizando la varianza inter-clase o maximizando la intra-clase", lo cual generaría la peor segmentación posible.

\vspace{0.3cm}

- **Refutación de la afirmación c:**

En el umbralizado por histéresis de Canny, el umbral alto $T_{high}$ inicia contornos con alta confianza, mientras que el umbral bajo $T_{low}$ actúa como cota de corte inferior para extender dichos contornos a través de zonas donde el gradiente se debilita.

Si **reducimos** $T_{low}$, admitimos gradientes más débiles para prolongar las cadenas de bordes, permitiendo cerrar discontinuidades y logrando contornos **más continuos y conectados**. Los bordes se volverían más discontinuos o fragmentados si *aumentáramos* $T_{low}$ (o $T_{high}$).

Al ser a, b y c estrictamente falsas, la opción válida es la **d**.

\vspace{0.5cm}

**QUIZ 5: Propiedades del gradiente y derivadas espaciales (Diapositiva 88)**

*Enunciado:*

¿Cuál de las afirmaciones siguientes sobre procesado de imagen es cierta?

a) Las derivadas en X detectan bordes horizontales, y las derivadas en Y detectan bordes verticales.  
b) La magnitud del gradiente puede tener valores negativos, dado que el gradiente puede hacer referencia a pendientes positivas o negativas.  
c) El gradiente en una imagen es mayor en las regiones planas que en las zonas con bordes.  
d) Ninguna de las anteriores es correcta.  

*Respuesta correcta:* **d) Ninguna de las anteriores es correcta**

*Respuesta breve:*

Opción **d) Ninguna de las anteriores es correcta**. Las derivadas en $X$ detectan bordes verticales (no horizontales); la magnitud euclídea del gradiente es una norma no negativa ($\|\nabla I\| \ge 0$); y en zonas planas el gradiente es nulo, alcanzando su máximo en los bordes.

\vspace{0.3cm}

*Justificación analítica:*

Examinamos la falsedad de las opciones planteadas:

\vspace{0.3cm}

- **Refutación de la afirmación a:**

La derivada parcial respecto a $X$, $\frac{\partial I}{\partial x}$, mide la tasa de variación de intensidad a lo largo del eje horizontal (de izquierda a derecha). Por definición geométrica, un cambio brusco horizontal se produce al atravesar un **borde vertical**. De forma análoga, $\frac{\partial I}{\partial y}$ mide el cambio vertical al atravesar un **borde horizontal**. Las correspondencias están cruzadas en el enunciado.

\vspace{0.3cm}

- **Refutación de la afirmación b:**

El vector gradiente espacial se define como $\nabla I = \left[\frac{\partial I}{\partial x}, \frac{\partial I}{\partial y}\right]^T$. Aunque las derivadas parciales individuales pueden tomar valores negativos (indicando pendientes descendentes de intensidad), la **magnitud del gradiente** es su norma euclídea:

$$\|\nabla I\| = \sqrt{\left(\frac{\partial I}{\partial x}\right)^2 + \left(\frac{\partial I}{\partial y}\right)^2}$$

Por propiedades de la métrica euclídea, la norma es una cantidad real no negativa ($\|\nabla I\| \ge 0$). El signo o sentido de la transición queda codificado en el ángulo de orientación del gradiente ($\theta = \text{atan2}(I_y, I_x)$), jamás en su módulo.

\vspace{0.3cm}

- **Refutación de la afirmación c:**

En una región plana o uniforme de una imagen, la intensidad es prácticamente constante ($I(x, y) \approx c$). Sus derivadas parciales son nulas ($\partial I / \partial x \approx 0, \partial I / \partial y \approx 0$), lo que da lugar a una magnitud de gradiente próxima a cero. El gradiente alcanza sus valores más elevados precisamente en las fronteras entre regiones (bordes).

Al ser todas las anteriores afirmaciones erróneas, la única alternativa válida es la **d**.

\vspace{0.5cm}

**QUIZ 6: Equivariancia de la convolución bidimensional (Diapositiva 88)**

*Enunciado:*

¿Cuáles de las siguientes afirmaciones relativas a la operación de convolución son correctas?

a) La convolución es equivariante con la traslación.  
b) La convolución no es equivariante con el escalado.  
c) La convolución no es equivariante con la rotación.  
d) Todas las anteriores son correctas.  

*Respuesta correcta:* **d) Todas las anteriores son correctas**

*Respuesta breve:*

Opción **d) Todas las anteriores son correctas**. La convolución espacial es equivariante ante traslaciones, pero no lo es ante escalados (el filtro tiene tamaño fijo en píxeles) ni ante rotaciones (los kernels direccionales no giran con la imagen).

\vspace{0.3cm}

*Justificación analítica:*

Esta cuestión sintetiza los fundamentos matemáticos demostrados en la Cuestión 1 del Bloque I:

1. **Equivariancia con la traslación (Proposición a):** Es una propiedad intrínseca de los sistemas lineales e invariantes en el espacio (LSI). Desplazar la entrada una distancia $\mathbf{x}_0$ desplaza idénticamente la respuesta: $(I(\cdot - \mathbf{x}_0) * K)(\mathbf{x}) = (I * K)(\mathbf{x} - \mathbf{x}_0)$.
2. **Falta de equivariancia con el escalado (Proposición b):** El soporte de la máscara $K$ está definido sobre una cuadrícula fija de píxeles. Si la imagen se amplía o reduce, el filtro muestrea una escala espacial distinta de la escena, requiriendo pirámides espaciales para compensarlo.
3. **Falta de equivariancia con la rotación (Proposición c):** Para un kernel direccional general (como Sobel o Prewitt), rotar la imagen no rota la orientación preferente del filtro, por lo que la convolución estándar no conmuta con rotaciones espaciales en el caso general.

Al ser las tres proposiciones verdaderas, la opción correcta es la **d**.

\vspace{0.5cm}

**QUIZ 7: Reconocimiento del perfil de un kernel 1D (Diapositiva 89)**

*Enunciado:*

La siguiente figura representa el perfil de un kernel 1D. ¿Qué tipo de filtro representa?

*(Gráfica: Función unidimensional continua y suave, simétrica respecto a $x = 0$, no negativa en todo su soporte $[-7, 7]$, con un único valor máximo unitario en el origen y decaimiento asintótico hacia cero en los extremos).*

a) Un kernel de suavizado Gaussiano.  
b) Un kernel de primeras derivadas.  
c) Un kernel de segundas derivadas.  
d) Ninguno de los anteriores.  

*Respuesta correcta:* **a) Un kernel de suavizado Gaussiano**

*Respuesta breve:*

Opción **a) Un kernel de suavizado Gaussiano**. La función es simétrica par, estrictamente no negativa en todo el intervalo $[-7, 7]$, con un único valor máximo unitario en $x = 0$ y decaimiento exponencial asintótico a cero en las colas.

\vspace{0.3cm}

*Justificación analítica:*

Analizamos la estructura funcional de la señal representada:

1. **Simetría par:** $f(x) = f(-x)$, simétrica respecto al eje de ordenadas $x = 0$.
2. **No negatividad:** $f(x) \ge 0$ para todo $x \in [-7, 7]$. Todos los pesos son positivos, lo que define una operación de promedio ponderado local (filtro paso bajo).
3. **Monotonía y concavidad:** Presenta un único máximo central en $x = 0$ ($f(0) = 1,0$), con puntos de inflexión característicos a una distancia proporcional a $\sigma$ y decaimiento exponencial hacia cero en las colas.

Esta función reproduce de forma exacta la campana de Gauss unidimensional sin normalizar:

$$g(x) = \exp\left(-\frac{x^2}{2\sigma^2}\right)$$

Observando los valores del gráfico: en $x = \pm 3$, el valor es aproximadamente $0,55$; en $x = \pm 7$, desciende por debajo de $0,05$. Ajustando la ecuación $\exp(-3^2 / (2\sigma^2)) \approx 0,55$, obtenemos $\sigma \approx 2,75$, plenamente compatible con el decaimiento observado en la ventana $[-7, 7]$.

*Análisis de las opciones incorrectas:*

- **b) Kernel de primeras derivadas:** Una primera derivada (como la derivada de una Gaussiana $\frac{d}{dx} G(x) = -\frac{x}{\sigma^2} G(x)$) es una función **impar y antisimétrica** ($f(-x) = -f(x)$). Debe presentar obligatoriamente un lóbulo positivo y un lóbulo negativo que sumen cero.
- **c) Kernel de segundas derivadas:** Una segunda derivada (como el Laplaciano de la Gaussiana $\frac{d^2}{dx^2} G(x) = \frac{x^2 - \sigma^2}{\sigma^4} G(x)$) presenta perfil de sombrero mexicano (*Mexican hat*): un pico central positivo (o negativo) flanqueado por dos lóbulos laterales de signo opuesto, con integral total nula.
