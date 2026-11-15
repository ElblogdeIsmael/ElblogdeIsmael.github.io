# Interacción basada en gestos y movimiento

\epigraph{\textit{``Un gesto natural sin punto de apoyo mecánico ni delimitador claro de inicio y fin obliga al sistema a resolver en silencio cuándo el cuerpo habla con la máquina y cuándo solo se acomoda.''}}{Daniel Wigdor y Dennis Wixon, \textit{Brave NUI World} (2011)}

\begin{objetivos}
Al completar este capítulo dominarás las taxonomías lingüísticas y técnicas de los gestos en IHM, sabrás cuantificar la fatiga biomecánica mediante la métrica \textit{Consumed Endurance} frente al efecto brazo de gorila, entenderás la física de sensores inerciales (deriva giroscópica y fusión por filtro complementario y Kalman) y de las cámaras de profundidad (luz estructurada, tiempo de vuelo y estéreo infrarrojo), trabajarás con el modelo espacial del SDK de Leap Motion y las máquinas de estado sin contacto de \textit{TouchFree} con el filtro $1\text{\euro}$, y conocerás los algoritmos de reconocimiento geométrico y probabilístico (DTW, familia $\$1/\$P/\$Q$ y HMM).
\end{objetivos}

\inicial{D}{esde} fuera, agitar la mano frente a una pantalla gigante para pasar de diapositiva o girar un modelo molecular en el aire parece la cumbre de la simplicidad interactiva. Sin embargo, para el ingeniero de interfaces constituye uno de los problemas más engañosos de la disciplina. Un botón físico o una tecla del teclado ofrecen una frontera binaria inconfundible entre reposo y activación; un brazo moviéndose en el espacio tridimensional, en cambio, genera un flujo continuo e ininterrumpido donde la máquina debe resolver tres enigmas simultáneos: dónde empieza el gesto intencionado (**segmentación o *gesture spotting***), qué patrón representa entre cientos de variantes personales y cómo evitar que el usuario termine con el hombro exhausto al cabo de tres minutos.

## Taxonomías de gestos y ergonometría física

No todo movimiento de la mano cumple la misma función ni responde a las mismas leyes semánticas. Inspirados en la psicolingüística de Adam Kendon y David McNeill, los sistemas interactivos distinguen cuatro categorías funcionales de gestos \parencite{rogers2023interaction,wobbrock2007gestures}:

- **Deícticos (señalamiento):** establecen un vector direccional hacia un objeto o región del espacio ("abrir *eso*", "ir *allí*"). Carecen de significado completo sin un referente contextual.
- **Icónicos y metafóricos:** reproducen físicamente la geometría o dinámica de una acción real (juntar pulgar e índice para "pellizcar" una foto, rotar la mano como un pomo, dibujar un círculo en el aire para retroceder un vídeo).
- **Emblemáticos y simbólicos:** señales convencionales aprendidas culturalmente (levantar la palma abierta para "alto", hacer un signo de aprobación o dibujar un aspa de cierre).
- **Manipulativos continuos:** acoplamientos directos fotograma a fotograma entre desplazamiento corporal y transformación geométrica (rotar una pieza CAD siguiendo exactamente el cuaternión de la mano).

Desde el punto de vista de la ingeniería de reconocimiento, también conviene separar los **gestos discretos o balísticos** (se detectan y disparan una acción tras completarse, como un *swipe*) de los **gestos continuos** (actualizan un parámetro en tiempo real durante toda la trayectoria, como un regulador de volumen aéreo).

### Ergonomía en aire libre: el brazo de gorila y Consumed Endurance

En las interfaces de escritorio, la mesa soporta el peso del antebrazo y la muñeca. Cuando eliminamos el soporte horizontal para interactuar en el aire (*mid-air interaction*) frente a un sensor como Kinect o Leap Motion, los músculos deltoides anteriores deben sostener de forma isométrica toda la masa del brazo contra la gravedad. La sensación progresiva de ardor, temblor y rechazo de uso tras apenas decenas de segundos se conoce en la literatura como el **efecto brazo de gorila (*gorilla arm*)** \parencite{hincapie2014consumed}.

\begin{ley}[Consumed Endurance (CE) y postura de reposo]
\textcite{hincapie2014consumed} formalizaron la métrica \textbf{Consumed Endurance} como la relación porcentual entre la resistencia consumida por la postura del brazo y el tiempo máximo de aguante humano antes del fallo muscular (modelo biomecánico de torque en el hombro). Los experimentos demostraron que elevar la mano a la altura de los ojos multiplica la fatiga percibida por un factor superior a $3$ respecto a situar el sensor plano sobre el escritorio o a la altura de la cintura con los codos pegados al tronco.
\end{ley}

De esta ley biomecánica se derivan reglas directas para cualquier proyecto con gestos aéreos (por ejemplo, un punto de información en la ETSIIT): mantener las zonas activas bajas y cercanas al cuerpo, preferir microgestos de muñeca o dedos frente a barridos amplios de hombro, y limitar el tiempo continuo de mantenimiento en el aire a ráfagas cortas con retroalimentación inmediata.

## Sensores inerciales (IMU) y fusión complementaria

Dentro de teléfonos móviles, relojes inteligentes y mandos de realidad virtual residen unidades de medición inercial (**IMU**) microelectromecánicas (MEMS) con 6 o 9 ejes:

1. **Acelerómetro triaxial ($\mathbf{a} \in \mathbb{R}^3$, $\text{m/s}^2$):** mide la fuerza específica por unidad de masa a lo largo de los ejes del sensor, esto es, la aceleración lineal propia menos el vector gravedad ($\mathbf{a}_m = \mathbf{a}_{\mathrm{lin}} - \mathbf{g}$). En reposo absoluto permite hallar con exactitud el ángulo de inclinación (*pitch* y *roll*) respecto a la vertical terrestre ($\sim 9.81\text{ m/s}^2$), pero se contamina severamente con vibraciones y sacudidas rápidas, y resulta completamente ciego a giros horizontales (*yaw*) alrededor del eje de gravedad.
2. **Giróscopo triaxial ($\boldsymbol{\omega} \in \mathbb{R}^3$, $\text{rad/s}$):** mide velocidades angulares mediante fuerzas de Coriolis internas. Responde de maravilla ante movimientos rápidos y giros de $360^\circ$, siendo inmune a aceleraciones lineales repentinas. Su talón de Aquiles aparece al integrarlo numéricamente para obtener orientación ($\theta(t) = \theta_0 + \int_0^t \omega(\tau)\,d\tau$): cualquier pequeño sesgo térmico o ruido blanco en $\omega$ se integra sin cesar provocando una **deriva angular (*drift*)** creciente con el tiempo.
3. **Magnetómetro triaxial ($\mathbf{m} \in \mathbb{R}^3$, $\mu\text{T}$):** mide el campo magnético terrestre local para anclar la referencia absoluta hacia el norte magnético (*yaw*), aunque sufre fuertes distorsiones dentro de edificios con ferralla de hormigón armado, ascensores o motores eléctricos (*hard-iron* y *soft-iron interference*).

\mnota{Nunca integres un giróscopo a pelo durante más de unos segundos en una interfaz: un sesgo residual diminuto de $0.1^\circ/\text{s}$ acumula $6^\circ$ de error cada minuto.}

### Filtro complementario y filtro de Kalman

Para fusionar las virtudes de ambos sensores sin arrastrar sus defectos, se aprovecha el hecho de que sus errores viven en bandas de frecuencia opuestas. El **filtro complementario** combina una estimación paso alto del giróscopo integrado con una referencia paso bajo extraída del acelerómetro (y magnetómetro en 9DoF):

$$\hat{\theta}_k = \alpha \left(\hat{\theta}_{k-1} + \omega_k\,\Delta t\right) + (1 - \alpha)\,\theta_{\mathrm{acel},k}$$

donde $\alpha \in [0.95, 0.99]$ fija la constante de tiempo de corte (por ejemplo, con $\Delta t = 10\text{ ms}$ y $\alpha = 0.98$, la constante temporal es $\tau = \frac{\alpha\,\Delta t}{1-\alpha} \approx 0.49\text{ s}$). El término $\alpha$ confía en el giróscopo para giros ágiles de corta duración, mientras $(1-\alpha)$ corrige lentamente la deriva de largo plazo tirando hacia el vector gravedad. La Figura \ref{fig:imu_complementario} ilustra esta convergencia frente a la deriva pura del giróscopo y al ruido brusco del acelerómetro.

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_04_imu_complementario.png}
  \caption{Simulación de fusión inercial en eje de cabeceo (\textit{pitch}): el giróscopo integrado deriva progresivamente, el acelerómetro sufre picos por traslación y vibración, y el filtro complementario ($\alpha = 0.98$) converge a la trayectoria real.}
  \label{fig:imu_complementario}
\end{figure}

Cuando la dinámica es más exigente o la matriz de covarianza de ruido varía con el contexto (como en el cálculo del *Rotation Vector* en Android o en VIO de visores), se emplea un **Filtro de Kalman Extendido (EKF)** o el algoritmo **Madgwick**, formulados sobre **cuaterniones unitarios** para evitar singularidades de bloqueo cardánico (*gimbal lock*).

## Visión de profundidad: luz estructurada, ToF y estéreo infrarrojo

Para seguir manos libres o cuerpos enteros sin colocar sensores sobre la piel se utilizan cámaras activas y pasivas que miden la tercera coordenada $Z$ de cada píxel \parencite{webb2012kinect}:

| Tecnología | Principio físico | Ventajas | Limitaciones principales |
| :--- | :--- | :--- | :--- |
| **Luz estructurada** (ej. Kinect v1) | Proyecta un patrón infrarrojo pseudoaleatorio conocido y triangula su deformación mediante una cámara IR desplazada | Alta precisión espacial a $0.8\text{--}3.5\text{ m}$; bajo coste computacional | Degradación severa bajo luz solar directa e interferencia entre varios proyectores |
| **Tiempo de vuelo (ToF)** (ej. Kinect v2, Azure) | Emite luz IR modulada y mide el desfase de fase $\Delta\phi$ o retardo temporal de regreso en cada píxel | Precisión constante por distancia; robusto frente a texturas lisas | Sensible a múltiples reflexiones en esquinas (*multipath*) y luz solar intensa |
| **Estéreo infrarrojo activo** (ej. Leap Motion, RealSense) | Dos cámaras IR separadas por una línea base calibrada $b$ triangulan disparidad $d$, asistidas por LEDs IR | Excelente cadencia ($115\text{--}200\text{ fps}$), baja latencia y rango muy cercano ($10\text{--}80\text{ cm}$) | Campo de acción corto en manos; requiere calibración estéreo precisa |

En los sistemas tipo Kinect orientados a cuerpo completo, el mapa de profundidad se segmenta mediante bosques aleatorios de decisión por píxel (*Random Decision Forests*) entrenados sobre siluetas sintéticas para etiquetar partes anatómicas en milisegundos sin exigir inicialización previa \parencite{webb2012kinect}.

## Leap Motion y TouchFree en interacción sin contacto

Uno de los pilares prácticos de la asignatura NPI es la interacción de corto alcance mediante controladores **Ultraleap / Leap Motion** colocados mirando hacia arriba sobre una mesa o integrados en el marco de un punto de información público (*kiosk*).

### Sistema de coordenadas y modelo de datos del SDK

El controlador Leap Motion utiliza dos cámaras monocromáticas de infrarrojos y tres LEDs a $850\text{ nm}$ para reconstruir un modelo esquelético articulado de manos y dedos dentro de un volumen en pirámide invertida (de unos $10\text{ cm}$ a $60\text{--}80\text{ cm}$ sobre el sensor, con un campo angular cercano a $140^\circ \times 120^\circ$). Su sistema de referencia cartesiano es **dextrógiro** y mide todas las distancias en **milímetros** respecto al centro de la carcasa brillante, tal como detalla la Figura \ref{fig:leap_coordenadas_mano}:

- **Eje $+X$:** hacia la derecha a lo largo del borde largo del dispositivo.
- **Eje $+Y$:** hacia arriba en vertical, alejándose del sensor.
- **Eje $+Z$:** hacia el usuario (saliendo de la pantalla hacia el cuerpo); hacia la pantalla es $-Z$.

\input{src/tex/leap_coordenadas_mano.tex}

Cada instante muestreado (hasta $115\text{--}120\text{ fps}$) se encapsula en un objeto `Frame`, que contiene listas de `Hand` (identificadas por `isLeft` / `isRight`, `palmPosition`, `palmNormal`, `direction`, `grabStrength` $\in [0,1]$ y `pinchStrength` $\in [0,1]$) y sus cinco `Finger` asociados (`Thumb` a `Pinky`), descompuestos en cuatro huesos anatómicos (`Metacarpal`, `Proximal`, `Intermediate` y `Distal`). En las versiones clásicas del SDK orientadas a aplicaciones interactivas se incluían además cuatro gestos discretos listos para usar:

1. **`Circle`:** movimiento circular continuo de un dedo alrededor de un centro, ideal para controles rotatorios de ajuste fino o *scrubbing* de tiempo (expone `progress` y dirección horaria/antihoraria).
2. **`Swipe`:** desplazamiento rápido y prácticamente rectilíneo en cualquier dirección del espacio (pasar páginas o tarjetas).
3. **`KeyTap`:** movimiento rápido hacia abajo de la yema del dedo, como pulsar una tecla de piano invisible en el plano horizontal $XZ$.
4. **`ScreenTap`:** empuje breve hacia delante (dirección $-Z$) y retirada rápida, simulando tocar un botón virtual flotante en el aire frente al monitor.

```java
// Lectura típica en un Listener clásico de Leap Motion
@Override
public void onFrame(Controller controller) {
    Frame frame = controller.frame();
    for (Hand hand : frame.hands()) {
        Vector palm = hand.palmPosition();       // mm en marco sensor
        float pinch = hand.pinchStrength();      // 0.0 (abierta) .. 1.0 (pinza)
        if (pinch > 0.85f) {
            Vector tip = hand.fingers().fingerType(Finger.Type.TYPE_INDEX)
                             .get(0).tipPosition();
            moverCursor3D(tip.getX(), tip.getY(), tip.getZ());
        }
    }
    for (Gesture g : frame.gestures()) {
        if (g.type() == Gesture.Type.TYPE_SWIPE && g.state() == Gesture.State.STATE_STOP) {
            SwipeGesture swipe = new SwipeGesture(g);
            if (Math.abs(swipe.direction().getX()) > 0.7f) cambiarPanel();
        }
    }
}
```

### Interacción en quioscos públicos con TouchFree y filtro 1 Euro

Cuando se adapta una aplicación web o pantalla táctil ya existente para que funcione **sin tocar el cristal** en un hospital, museo o vestíbulo universitario (caso real de la solución **Ultraleap TouchFree**), reescribir todas las pantallas en 3D resulta inviable. TouchFree convierte los datos del sensor en eventos estándar de puntero 2D (`hover`, `pointerdown`, `pointerup`, `scroll`) resolviendo dos problemas críticos: el temblor natural de la mano en el aire y la confirmación sin clic mecánico.

\input{src/tex/touchfree_estados.tex}

La máquina de estados de TouchFree (Figura \ref{fig:touchfree_estados}) ofrece dos modos complementarios de disparo sobre un objetivo 2D:

- **AirPush (*push-to-click*):** empuja la palma o dedo unos centímetros en la dirección $-Z$ hacia la pantalla con una curva de velocidad e **histéresis de liberación** para evitar dobles clics involuntarios por rebote muscular al retroceder la mano.
- **Hover and Hold (*dwell*):** mantiene el cursor dentro de un radio tolerante sobre el botón durante un tiempo fijo (p. ej. $600\text{--}800\text{ ms}$) acompañado de un anillo visual de progreso, útil cuando el usuario comprende con dificultad la profundidad de empuje o tiene menor control balístico.

\begin{definicion}[El filtro 1 Euro (Casiez, Roussel y Vogel, 2012)]
Un filtro paso bajo lineal simple con frecuencia de corte baja elimina el temblor de la mano en reposo, pero introduce un retardo visual intolerable al mover rápido el cursor; subir la frecuencia de corte elimina el retardo pero devuelve el temblor. El \textbf{filtro 1\euro{}} resuelve ese dilema adaptando dinámicamente la frecuencia de corte exponencial $f_c$ en función de la velocidad instantánea $|\dot{\hat{x}}_i|$:
$$f_c = f_{c,\min} + \beta\,|\dot{\hat{x}}_i|$$
En reposo ($|\dot{\hat{x}}_i| \approx 0$), $f_c \approx f_{c,\min}$ suaviza con fuerza el temblor fisiológico; durante desplazamientos rápidos, $f_c$ sube proporcionalmente con $\beta$ anulando el retardo percibido con apenas una línea de código y dos parámetros ajustables.
\end{definicion}

## Reconocimiento de gestos: algoritmos clásicos

Para crear vocabularios de gestos propios más allá de los cuatro primitivos del SDK, la ingeniería de NPI utiliza dos familias principales de algoritmos de clasificación de trayectorias temporales:

### Dynamic Time Warping (DTW)

Dos personas nunca trazan una letra o un signo en el aire exactamente a la misma velocidad: una puede acelerar al principio y frenar en la curva mientras otra hace lo contrario. Si comparásemos punto a punto mediante distancia euclídea simple dos secuencias temporales de distinta velocidad o longitud, la distancia sería enorme pese a representar exactamente el mismo gesto.

**Dynamic Time Warping (DTW)** resuelve ese desfase mediante programación dinámica, alineando de forma no lineal las muestras de la trayectoria candidata $Q = (q_1, \dots, q_n)$ con una plantilla de referencia $C = (c_1, \dots, c_m)$, como muestra la Figura \ref{fig:dtw_gesto}. La recurrencia básica calcula el coste acumulado mínimo hasta el par $(i,j)$:

$$D(i, j) = d(q_i, c_j) + \min\bigl\{\,D(i-1, j),\; D(i, j-1),\; D(i-1, j-1)\,\bigr\}$$

sujeta a restricciones de frontera (inicio en $(1,1)$ y fin en $(n,m)$), continuidad y banda de Sakoe-Chiba ($|i-j| \le r$) para evitar distorsiones temporales antinaturales y reducir la complejidad de $\mathcal{O}(nm)$ a $\mathcal{O}(nr)$.

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_05_dtw_gesto.png}
  \caption{Alineamiento temporal no lineal de dos ejecuciones de un mismo gesto a distinta velocidad mediante \textit{Dynamic Time Warping} (izquierda) y matriz de distancia acumulada con camino óptimo de deformación (derecha).}
  \label{fig:dtw_gesto}
\end{figure}

### Familia de reconocedores geométricos ($1, $P y $Q)

En el diseño rápido de interfaces gestuales con pocos ejemplos por clase (*few-shot*), los reconocedores **$1 / $P / $Q** propuestos por \textcite{wobbrock2007gestures} eliminan la necesidad de entrenar modelos estadísticos masivos:

- **$\$1$ Recognizer:** para trazos continuos de un solo golpe (*unistroke*). Remuestrea el trazo a $N = 64$ puntos equidistantes, rota la nube de puntos usando el ángulo indicativo desde el centroide al primer punto, escala al cuadrado unitario preservando o normalizando proporciones y busca mediante sección áurea (*Golden Section Search*) el ángulo óptimo frente a cada plantilla almacenada. Cabe en menos de cien líneas de código.
- **$\$P$ (Point-Cloud Recognizer):** generaliza a trazos múltiples (*multistroke*) en cualquier orden o dirección tratando el gesto como una nube desordenada de puntos con emparejamiento bipartito aproximado.
- **$\$Q$:** optimiza $\$P$ mediante tablas de búsqueda de distancias precalculadas para correr en microcontroladores y hardware embebido limitado con decenas de gestos en menos de un milisegundo.

### Modelos Ocultos de Markov (HMM) y redes temporales

Cuando el vocabulario incluye centenares de usuarios con fuerte variabilidad estadística o es necesario realizar **detección continua en flujo vivo (*gesture spotting*)** sin botones explícitos de inicio y fin, se recurre a **Modelos Ocultos de Markov (HMM)** o redes neuronales temporales (LSTM, TCN y *Transformers* ligeros sobre secuencias de articulaciones óseas). En un HMM, cada gesto se modela como una cadena de estados ocultos secuenciales (inicio, núcleo de acción, relajación) capaces de absorber variaciones de duración mediante transiciones autodirigidas y modelar estados "basura" (*threshold/garbage models*) que absorben movimientos cotidianos para evitar falsos positivos continuos.
