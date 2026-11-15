# Apéndice B. Banco de autoevaluación razonada {.unnumbered}

\epigraph{\textit{``Comprender un paradigma de interacción significa poder predecir cuándo fracasará antes de construir la interfaz y justificar qué parámetro físico o cognitivo explica ese fallo.''}}{Criterio de evaluación de Nuevos Paradigmas de Interacción}

\inicial{E}{ste} apéndice reúne dieciocho cuestiones de reflexión y tipo test razonado repartidas por los seis capítulos del libro. Cada pregunta exige identificar el mecanismo físico, matemático o cognitivo subyacente, evitando memorizaciones vacías de siglas. Se recomienda intentar responder cada bloque antes de consultar las soluciones comentadas del final.

## B.1 Bloque I: Fundamentos IHM y modelos formales (Capítulo 1) {.unnumbered}

**1.** Según la Ley de Fitts ($MT = a + b\log_2(1 + D/W)$), si duplicamos exactamente tanto la distancia $D$ hasta un botón como su anchura $W$ en la dirección del movimiento, ¿qué le ocurre al tiempo medio de adquisición?

**2.** En un menú jerárquico de una pantalla pública disponemos de 64 elementos homogéneos que queremos organizar como 2 niveles de 8 opciones ($8 \times 8$) o como 3 niveles de 4 opciones ($4 \times 4 \times 4$). Según la Ley de Hick-Hyman ($RT = a + b\log_2(n+1)$) con una constante empírica típica $b = 155\text{ ms/bit}$ y un coste fijo por pulsación y refresco de transición de página $c = 400\text{ ms}$, ¿qué jerarquía ofrece menor tiempo total esperado?

**3.** Explica brevemente la diferencia práctica entre un **golfo de ejecución** y un **golfo de evaluación** en el ciclo de Norman al interactuar con un quiosco sin contacto.

## B.2 Bloque II: Paradigmas, fusión y sentidos (Capítulo 2) {.unnumbered}

**4.** ¿Por qué Sharon Oviatt afirma que la "simultaneidad temporal estricta" en interacción multimodal es un mito y qué arquitectura (fusión temprana frente a tardía) resuelve de forma más natural ese desfase en aplicaciones "voz + gesto"?

**5.** Si diseñamos retroalimentación vibrotáctil para simular un "clic" limpio y nítido en un dispositivo portátil usando un actuador LRA, ¿alrededor de qué banda de frecuencias debemos sintonizar la resonancia y qué familia de mecanorreceptores cutáneos es la principal responsable de percibirlo?

**6.** Al implementar pellizco con varios dedos en Android usando `MotionEvent`, ¿por qué es incorrecto guardar el valor de `actionIndex` entre una llamada `ACTION_MOVE` y la siguiente, y qué identificador debe usarse en su lugar?

## B.3 Bloque III: Realidad Virtual, Aumentada y 3D (Capítulo 3) {.unnumbered}

**7.** Un visor de Realidad Virtual muestra objetos virtuales a $35\text{ cm}$ de la cara del usuario mientras su sistema óptico tiene un plano focal fijo situado a $2.0\text{ m}$. ¿Qué conflicto fisiológico se produce y qué síntoma genera en sesiones largas?

**8.** Un sistema coloca un indicador de batería y hora fijo en la esquina superior derecha de unas gafas de vídeo con cámara frontal, sin que cambie su posición en pantalla al girar la cabeza. Según la definición estricta de Azuma (1997), ¿se trata de Realidad Aumentada? Razona la respuesta.

**9.** Compara la dificultad de lograr **oclusión real-virtual coherente** (que un edificio físico tape por completo a un personaje virtual que camina detrás) en un visor *Optical See-Through* frente a un visor *Video See-Through*.

## B.4 Bloque IV: Gestos, IMU y Leap Motion (Capítulo 4) {.unnumbered}

**10.** ¿Por qué no basta integrar únicamente un giróscopo triaxial para conocer la inclinación absoluta de una raqueta o mando durante diez minutos de juego, y qué papel desempeña $(1-\alpha)$ en un filtro complementario?

**11.** En el sistema de coordenadas del SDK de Leap Motion colocado plano sobre una mesa frente al usuario, ¿hacia dónde apunta el eje $+Z$ y qué gesto discreto estándar está pensado para simular la pulsación de un botón flotante frente a la pantalla?

**12.** Explica intuitivamente cómo consigue el **filtro $1\text{\euro{}}$** eliminar el temblor de la mano en reposo sin añadir retraso perceptible cuando el usuario cruza rápidamente toda la pantalla con el cursor aéreo.

## B.5 Bloque V: Computación ubicua y sensores móviles (Capítulo 5) {.unnumbered}

**13.** ¿Por qué un receptor GPS necesita recibir simultáneamente señal válida de al menos **cuatro** satélites para fijar una posición 3D sobre el elipsoide WGS84 si el espacio físico solo tiene tres dimensiones $(x,y,z)$?

**14.** ¿Qué magnitud física del sensor barométrico de Android (`TYPE_PRESSURE`) impide usarlo directamente con una presión fija estándar $P_0 = 1013.25\text{ hPa}$ para saber si estamos en el segundo o tercer piso de la ETSIIT, y cómo se resuelve en la práctica?

**15.** ¿Cómo evitan simultáneamente las geocercas robustas (`GeofencingClient`) el efecto *ping-pong* cuando un teléfono oscila por ruido GNSS junto a la frontera del área vigilada?

## B.6 Bloque VI: Sistemas de diálogo oral y evaluación (Capítulo 6) {.unnumbered}

**16.** Si el sistema de diálogo oral pide confirmación explícita absolutamente para cada palabra reconocida (incluso cuando la confianza del ASR supera $0.95$), ¿qué magnitudes del modelo **PARADISE** salen más perjudicadas aunque la precisión final sea alta?

**17.** ¿Por qué no suele recomendarse ofrecer listas habladas de ocho o diez resultados seguidos por TTS, y qué técnica de diseño evita que el usuario espere diez segundos antes de poder interrumpir con una nueva frase (*barge-in*)?

**18.** En una frase de referencia de $10$ palabras, un reconocedor ASR devuelve $12$ palabras donde $2$ han sido sustituidas, $0$ borradas y $2$ insertadas por ruido de fondo. Calcula el valor exacto del *Word Error Rate* (WER).

\clearpage

## B.7 Soluciones comentadas {.unnumbered}

1. **Ley de Fitts invariante a escala:** el cociente $D/W$ permanece idéntico ($(2D)/(2W) = D/W$), por lo que el Índice de Dificultad $ID = \log_2(1 + D/W)$ no cambia y el tiempo predicho $MT$ es exactamente el mismo. Lo que importa es el tamaño relativo respecto a la distancia de viaje, no el tamaño absoluto aislado (siempre que no choque con el grosor mínimo del dedo).
2. **Comparación Hick-Hyman:** en $8 \times 8$ son 2 niveles de $n=8$: cada nivel toma $RT_8 = a + 155\log_2(9) \approx a + 155 \times 3.17 \approx a + 491\text{ ms}$; el total con 2 transiciones es $2a + 982 + 2(400) = 2a + 1\,782\text{ ms}$. En $4 \times 4 \times 4$ son 3 niveles de $n=4$: $RT_4 = a + 155\log_2(5) \approx a + 155 \times 2.32 \approx a + 360\text{ ms}$; el total con 3 transiciones es $3a + 1\,080 + 3(400) = 3a + 2\,280\text{ ms}$. La arquitectura más ancha y plana ($8 \times 8$) resulta claramente más rápida porque ahorra costes de transición visual y decisión motora repetida.
3. **Golfos de Norman:** el **golfo de ejecución** aparece si el visitante se acerca al quiosco y no sabe cómo activar el cursor ni qué gesto equivale a hacer clic (desconoce qué acciones acepta el sistema). El **golfo de evaluación** aparece si al mover la mano en el aire o hablar no recibe un cambio de cursor, anillo de progreso ni onda sonora que confirme que el sensor lo está detectando.
4. **Oviatt y fusión:** estudios empíricos muestran que el gesto de señalamiento precede o rodea asíncronamente al habla deíctica por cientos de milisegundos ($\sim 200\text{--}1\,000\text{ ms}$). La **fusión semántica tardía** resuelve esto manteniendo reconocedores independientes que emiten hipótesis con marcas temporales y las combinan en una ventana temporal deslizante $\Delta t$.
5. **Psicofísica LRA:** alrededor de $175\text{--}250\text{ Hz}$, banda de máxima sensibilidad humana (umbral mínimo de desplazamiento del orden de submicrómetros) regida principalmente por los **corpúsculos de Pacini** (adaptación ultrarrápida, alta frecuencia).
6. **Punteros Android:** `pointerIndex` es solo la posición temporal dentro del array del `MotionEvent` actual y se reordena si otro dedo se levanta (`ACTION_POINTER_UP`). Debe almacenarse el **`pointerId`** devuelto por `event.getPointerId(idx)` y recuperar su índice actual en el siguiente evento mediante `event.findPointerIndex(id)`.
7. **Conflicto VAC:** se produce el **conflicto vergencia-acomodación (VAC)**: los ojos convergen hacia adentro para fusionar la disparidad a $35\text{ cm}$, mientras el cristalino intenta relajarse enfocando el plano óptico fijo a $2.0\text{ m}$. Romper ese reflejo acoplado provoca fatiga ocular, visión borrosa transitoria y cefaleas.
8. **Azuma (1997):** **no** es Realidad Aumentada en sentido estricto. Aunque combina imagen real de cámara y gráficos en tiempo real, incumple la tercera condición imprescindible de Azuma: el rótulo no está **registrado en las coordenadas 3D** del mundo físico. Es un HUD acoplado a pantalla (*screen-locked*).
9. **Oclusión OST frente a VST:** en un visor **OST** las guías ópticas solo pueden sumar luz proyectada sobre la escena real transparente que atraviesa el cristal; no pueden "restar" fotones reales fácilmente sin complejos moduladores espaciales por píxel, de modo que los objetos virtuales parecen fantasmas traslúcidos delante de paredes físicas salvo que no se rendericen. En **VST**, la escena real ya es una textura digital en memoria: basta comparar el mapa de profundidad (*Z-buffer*) del entorno reconstruido frente al virtual y ocultar píxel a píxel lo que quede detrás.
10. **Fusión IMU:** cualquier pequeño sesgo o ruido blanco en la velocidad angular medida $\boldsymbol{\omega}$ se acumula linealmente sin límite al integrarse (**deriva angular o *drift***). El término $(1-\alpha)$ del filtro complementario inyecta lentamente una referencia paso bajo del vector gravedad medido por el acelerómetro para corregir esa deriva de largo plazo sin contaminar los giros rápidos.
11. **Ejes Leap Motion y gestos:** con el dispositivo tumbado mirando arriba, $+X$ apunta a la derecha, $+Y$ apunta hacia arriba alejándose del sensor y **$+Z$ apunta hacia el usuario** (saliendo desde la pantalla hacia el cuerpo; hacia el monitor es $-Z$). El gesto diseñado para pulsar un botón aéreo frente a la pantalla es **`ScreenTap`**.
12. **Filtro $1\text{\euro{}}$:** ajusta dinámicamente la frecuencia de corte exponencial $f_c = f_{c,\min} + \beta|\dot{\hat{x}}|$ según la velocidad estimada. Cuando la mano está quieta ($|\dot{\hat{x}}| \approx 0$), $f_c$ baja a $f_{c,\min}$ filtrando con firmeza el temblor de alta frecuencia; al mover rápido la mano, $f_c$ crece proporcionalmente con la velocidad y elimina el retardo de arrastre.
13. **Cuatro satélites GNSS:** además de las tres coordenadas espaciales $(x_u, y_u, z_u)$, existe una cuarta incógnita crítica: el **sesgo de reloj del receptor $\delta t_u$** respecto al tiempo atómico de la constelación. Sin resolver $\delta t_u$, un desfase temporal de milisegundos produce errores de cientos de kilómetros, exigiendo como mínimo cuatro ecuaciones de pseudodistancia independientes.
14. **Barómetro y presión meteorológica:** la presión atmosférica de referencia a nivel del mar $P_0$ fluctúa continuamente a lo largo del día por cambios meteorológicos (borrascas y anticiclones pueden variar $\pm 15\text{ hPa}$, equivalente a $\pm 125\text{ m}$ falsos de altitud). Se resuelve calibrando $P_0$ dinámicamente al entrar al edificio (por ejemplo junto a una baliza BLE o puerta conocida) y midiendo únicamente variaciones relativas $\Delta P$ respecto a la planta de entrada.
15. **Control de geocercas:** combinan **histéresis espacial** (añadiendo un anillo amortiguador $\Delta R$ entre el umbral de entrada y el de salida) e **histéresis temporal** mediante la transición `GEOFENCE_TRANSITION_DWELL` con ventana de permanencia $\tau_d$ (p. ej. $45\text{--}60\text{ s}$) antes de consolidar la transición.
16. **PARADISE y sobreconfirmación:** aunque la precisión o cumplimiento $\kappa$ sea alto, preguntar confirmación constante multiplica los **costes de diálogo** $c_i$ (duración total, número de turnos y percepción de lentitud y molestia), desplomando la satisfacción predicha $S$ en la regresión de PARADISE.
17. **Canal auditivo secuencial y barge-in:** el audio es temporal y no permite escaneo paralelo como una tabla visual, saturando la memoria de trabajo tras $4\pm 1$ ítems. La solución combina respuestas resumidas en bloques cortos con **cancelación de eco acústico (AEC)** para que el VAD/ASR siga escuchando sin confundirse con su propio altavoz y admita interrupción instantánea (**barge-in**).
18. **Cálculo de WER:** aplicando $\mathrm{WER} = \frac{S + D + I}{N} = \frac{2 + 0 + 2}{10} = \frac{4}{10} = 0.40$, es decir, un **$40\%$ de tasa de error de palabra**.
