# Computación ubicua e interacción móvil

\epigraph{\textit{``Las tecnologías más profundas son aquellas que desaparecen. Se entretejen en el tejido de la vida cotidiana hasta resultar indistinguibles de ella.''}}{Mark Weiser, \textit{The Computer for the 21st Century} (1991)}

\begin{objetivos}
Al terminar este capítulo conocerás el programa fundacional de Mark Weiser sobre computación ubicua y tecnología calma, los \textit{Tangible Bits} de Ishii y Ullmer y la definición formal de computación consciente del contexto de Dey; dominarás la arquitectura del \texttt{SensorManager} en Android (ejes físicos, sensores de hardware frente a compuestos, bloqueo cardánico frente a cuaterniones y detección de planta por barómetro), el funcionamiento matemático de la trilateración GNSS (WGS84 y sesgo de reloj) y la localización interior por RSSI de balizas BLE, NFC y códigos QR, así como la implementación robusta de geocercas con histéresis espacial y temporal.
\end{objetivos}

\inicial{U}{n} ordenador portátil obliga al usuario a detener lo que está haciendo, sentarse, abrir la tapa y trasladar toda su atención visual hacia una ventana rectangular. La **computación ubicua (*Ubicomp*)** invierte por completo esa relación: en lugar de obligar a la persona a entrar en el mundo cerrado de la máquina, distribuye centenares de nodos de cómputo, sensores y actuadores discretos por todo el entorno físico para que el sistema colabore en segundo plano mientras vivimos en el mundo real \parencite{weiser1991computer,krumm2018ubiquitous}.

En el ámbito universitario de la ETSIIT o en una ciudad conectada, este paradigma toma cuerpo principalmente a través del teléfono inteligente como pasarela personal combinada con balizas de corto alcance, etiquetas pasivas, sensores ambientales y servicios en la nube.

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_12_editorial_ubicomp.jpg}
  \caption{Visión arquitectónica de la computación ubicua: coordinación discreta entre objetos cotidianos, balizas espaciales de proximidad y sensores ambientales que operan en la periferia de la atención.}
  \label{fig:editorial_ubicomp}
\end{figure}

## Fundamentos de la computación ubicua y consciente del contexto

### Mark Weiser: escalas de dispositivo y Tecnología Calma

En su ensayo visionario de 1991, \textcite{weiser1991computer} describió la convivencia natural de dispositivos de tres escalas espaciales distintas dentro de una misma habitación, anticipando con décadas el ecosistema actual:

- **Tabs (escala de centímetros):** dispositivos portátiles de bolsillo equivalentes a notas adhesivas activas, identificadores personales o *smartwatches* que acompañan a cada individuo.
- **Pads (escala de decímetros):** superficies manipulables análogas a libretas o hojas de papel (*smartphones* grandes, tabletas, lectores de tinta electrónica) que cualquiera toma, usa sobre la mesa y presta sin "sesión personal fija".
- **Boards (escala de metros):** pizarras compartidas, paneles de pared y quioscos interactivos situados en pasillos, laboratorios o salas de reuniones para trabajo colaborativo público.

Sobre esta ecología física, Weiser formuló el principio rector de la **Tecnología Calma (*Calm Technology*)**: una buena interfaz ubicua no compite a gritos con alarmas por el centro de nuestra atención consciente todo el tiempo. Al contrario, reside cómodamente en la **periferia atencional**, transmitiendo señales ambientales sutiles que solo pasan al foco principal cuando ocurre algo relevante, tal como representa la Figura \ref{fig:weiser_atencion}.

\input{src/tex/weiser_atencion.tex}

### Tangible Bits: acoplamiento entre bits y átomos

Mientras la computación ubicua clásica multiplicaba pantallas de cristal por todas partes, Hiroshi Ishii y Brygg Ullmer propusieron en el MIT Media Lab otra vía complementaria llamada **Tangible Bits (Interfaces Tangibles de Usuario, TUI)** \parencite{ishii1997tangible}. Su tesis central consiste en dotar de forma física manipulable a la información digital, convirtiendo un mismo objeto cotidiano (un disco de madera, una ficha arquitectónica, una botella) simultáneamente en **control de entrada y representación física de salida**. Al mover un bloque físico sobre una mesa interactiva, no existe separación entre el instrumento que actúa y el resultado representado: los bordes mecánicos del objeto incorporan de forma natural restricciones físicas (*affordances* y *constraints*) que guían la mano sin leer un solo manual.

### Computación consciente del contexto (Dey, 2001)

Para que un dispositivo adaptado al entorno actúe con criterio sin preguntar continuamente "dónde estás" o "qué haces", necesita una definición operativa de contexto. \textcite{dey2001understanding} ofreció la formulación estándar en ingeniería de software ubicuo:

\begin{definicion}[Contexto y sistema consciente del contexto (Dey, 2001)]
\textbf{Contexto} es cualquier información que pueda usarse para caracterizar la situación de una entidad (una persona, lugar u objeto considerado relevante para la interacción entre usuario y aplicación, incluyendo al propio usuario y a la aplicación). Un sistema es \textbf{consciente del contexto} (\textit{context-aware}) si utiliza dicha información para ofrecer datos o servicios relevantes al usuario, donde la relevancia depende de la tarea en curso.
\end{definicion}

Dey identificó cuatro categorías primarias de contexto (**ubicación, identidad, tiempo y actividad**) de las que se infieren niveles semánticos secundarios (por ejemplo, combinar hora $10:00$, coordenada dentro del aula $1.3$ y calendario académico para deducir "el usuario está en clase teórica de NPI y conviene silenciar avisos"). El ciclo arquitectónico completo exige cuatro etapas: adquisición sensorial bruta, abstracción e interpretación hacia modelos de alto nivel, gestión de incertidumbre (confianza de la inferencia) y disparo de reglas o políticas de adaptación.

## Arquitectura sensorial en Android: SensorManager

En el desarrollo móvil moderno (y específicamente en el bloque práctico de Android de la asignatura), el acceso uniforme al hardware físico y a los algoritmos de fusión reside en el servicio de sistema `SensorManager`.

### Sistema de ejes del dispositivo y tipos de sensores

Cuando se sostiene un teléfono móvil en su orientación natural (vertical en teléfonos, apaisada en muchas tabletas), `SensorManager` define un sistema de coordenadas dextrógiro fijo respecto a la carcasa del terminal, representado en la Figura \ref{fig:android_sensormanager_ejes}:

\input{src/tex/android_sensormanager_ejes.tex}

El sistema distingue entre **sensores de hardware** (lectura física directa de un chip MEMS) y **sensores compuestos o virtuales** (calculados por el HAL o el sistema operativo combinando varias fuentes):

- **Sensores de movimiento:** acelerómetro (`TYPE_ACCELEROMETER`, incluye la gravedad $g \approx 9.81\text{ m/s}^2$), giróscopo (`TYPE_GYROSCOPE`) y tres sensores derivados clave: `TYPE_GRAVITY` (aisla el vector gravedad), `TYPE_LINEAR_ACCELERATION` (aceleración lineal neta $\mathbf{a} - \mathbf{g}$) y `TYPE_STEP_DETECTOR` / `TYPE_STEP_COUNTER` (ejecutados en coprocesador de ultra bajo consumo).
- **Sensores de posición:** magnetómetro (`TYPE_MAGNETIC_FIELD`, campo en $\mu\text{T}$), sensor de proximidad (`TYPE_PROXIMITY`, infrarrojo corto cerca del auricular superior) y **vector de rotación (`TYPE_ROTATION_VECTOR`)**, que fusiona acelerómetro, giróscopo y magnetómetro en un cuaternión unitario sin deriva acumulada.
- **Sensores ambientales:** luz ambiental (`TYPE_LIGHT`, en lux para adaptar contraste y brillo), temperatura y **barómetro (`TYPE_PRESSURE`, en hectopascales $\text{hPa}$)**.

\begin{alerta}[Bloqueo cardánico frente a cuaterniones en orientación móvil]
Expresar la orientación 3D de un teléfono directamente con tres ángulos de Euler (\textit{yaw, pitch, roll}) o usar el método legado \texttt{TYPE\_ORIENTATION} provoca dos errores graves: inestabilidad ante vibraciones magnéticas y el fenómeno matemático de \textbf{bloqueo cardánico (\textit{gimbal lock})}, donde al inclinar el teléfono cerca de $90^\circ$ (vertical frente a la cara en realidad aumentada móvil) dos ejes de rotación colapsan perdiendo un grado de libertad. En código profesional de Android se lee siempre \texttt{TYPE\_ROTATION\_VECTOR} (o \texttt{TYPE\_GAME\_ROTATION\_VECTOR} cuando no interesa la referencia magnética en interiores) y se convierte el cuaternión $[x, y, z, w]$ mediante \texttt{SensorManager.getRotationMatrixFromVector()} y \texttt{remapCoordinateSystem()} si la pantalla gira entre vertical y horizontal.
\end{alerta}

### Estimación de planta con barómetro y fórmula hipsométrica

El GPS se degrada con facilidad dentro de edificios y suele ofrecer errores verticales mayores a $\pm 15\text{ m}$, inservibles para distinguir si un estudiante se encuentra en la planta baja o en el tercer piso de la ETSIIT. En cambio, los barómetros MEMS modernos detectan variaciones de presión atmosférica inferiores a $0.05\text{ hPa}$. Puesto que en la baja troposfera la presión cae aproximadamente $1\text{ hPa}$ cada $8.4\text{ m}$ de ascenso, medir $\Delta P$ respecto a una presión de referencia conocida $P_0$ permite deducir variaciones de altura con precisión submétrica mediante la aproximación barométrica estándar (implementada en `SensorManager.getAltitude(p0, pressure)`):

$$h = 44330 \left[ 1 - \left(\frac{P}{P_0}\right)^{1/5.255} \right]$$

Dado que la presión meteorológica $P_0$ cambia lentamente a lo largo del día al paso de borrascas o anticiclones, un sistema robusto en edificios nunca asume $P_0 = 1013.25\text{ hPa}$ fijo: calibra continuamente $P_0$ con una estación de referencia en el vestíbulo o compara solo diferencias relativas $\Delta h$ frente al último punto de entrada registrado (por ejemplo, al cruzar una baliza BLE en la puerta principal).

### Gestión energética y batching por FIFO

Registrar un acelerómetro a `SENSOR_DELAY_FASTEST` ($\sim 200\text{--}400\text{ Hz}$) mantiene despierta la CPU principal de forma continua, drenando la batería en pocas horas. La buena práctica en aplicaciones ubicuas consiste en:

1. Ajustar la tasa mínima necesaria (`SENSOR_DELAY_NORMAL`, $\sim 5\text{ Hz}$, para contexto grueso; `SENSOR_DELAY_UI` o `GAME`, $15\text{--}50\text{ Hz}$, para interfaz fluida).
2. Desregistrar siempre el `SensorEventListener` en `onPause()` cuando la actividad pase a segundo plano.
3. Emplear **FIFO hardware (*sensor batching*)** pasando el parámetro `maxReportLatencyUs` al registrar el sensor: el microcontrolador (*sensor hub*) almacena las muestras en su búfer interno mientras el procesador principal duerme y las entrega en ráfagas cada varios segundos, multiplicando la autonomía de la batería en aplicaciones de monitorización continua.

## Localización exterior e interior

Un sistema ubicuo rara vez depende de una única tecnología de posicionamiento; combina sensores de satélite en exteriores con infraestructura local de corto alcance dentro de edificios \parencite{krumm2018ubiquitous}.

### Trilateración GNSS (WGS84) y FusedLocationProviderClient

Constelaciones como **GPS** (EE. UU.), **Galileo** (Unión Europea), **GLONASS** y **BeiDou** emiten señales horarias precisas mediante relojes atómicos orbitales sobre el elipsoide de referencia global **WGS84** (latitud, longitud y altitud elipsoidal). Un receptor en tierra mide el tiempo de tránsito $\Delta t_i$ de la señal del satélite $i$ y estima la **pseudodistancia** $\rho_i = c\,\Delta t_i$.

¿Por qué hacen falta al menos **cuatro satélites** y no tres para ubicarse en 3D? Porque aunque las esferas geométricas de tres satélites bastarían si los relojes fuesen perfectos, el oscilador de cuarzo de un teléfono móvil sufre un sesgo desconocido $\delta t_u$ respecto al tiempo atómico del sistema. Un error de apenas $1\text{ ms}$ en $\delta t_u$ equivale a $c \cdot 10^{-3} \approx 300\text{ km}$ de error espacial. Por ello hay **cuatro incógnitas** $(x_u, y_u, z_u, \delta t_u)$ que exigen resolver un sistema no lineal de al menos cuatro ecuaciones (Figura \ref{fig:gps_geofencing}, izquierda):

$$\rho_i = \sqrt{(x_i - x_u)^2 + (y_i - y_u)^2 + (z_i - z_u)^2} + c\,\delta t_u$$

En Android, consultar directamente el proveedor `GPS_PROVIDER` es lento en arranque en frío y costoso en interiores. Por ello se recomienda usar el proveedor fusionado (`FusedLocationProviderClient`) de Google Play Services, que oculta el hardware bajo una política adaptativa que combina GNSS, triangulación Wi-Fi (mediante BSSID cercanos), antenas celulares e IMU según la prioridad solicitada (`PRIORITY_HIGH_ACCURACY`, `PRIORITY_BALANCED_POWER_ACCURACY` o `PRIORITY_PASSIVE`).

### Posicionamiento interior: BLE Log-Distance RSSI, NFC y QR

Dentro de un edificio, la señal de satélite sufre atenuación severa y rebotes (*multipath*). Para localizar al usuario por aulas o pasillos en la práctica de NPI se combinan tres tecnologías según el nivel de certeza y pasividad requerido:

- **Balizas Bluetooth Low Energy (BLE / iBeacon / Eddystone):** emisores autónomos que anuncian periódicamente su identificador (`UUID`, `major`, `minor`) y su potencia calibrada a $1\text{ m}$ ($P_0$ o `TxPower`). El teléfono estima la distancia $d$ mediante el **modelo log-normal de pérdida de trayecto (*Log-Distance Path Loss*)**:
$$\mathrm{RSSI}(d) = \mathrm{RSSI}(d_0) - 10\,n\,\log_{10}\!\left(\frac{d}{d_0}\right) + X_\sigma$$
donde $n \in [2.0, 4.0]$ es el exponente de atenuación del entorno (pasillos frente a despachos cerrados) y $X_\sigma$ recoge fluctuaciones por desvanecimiento y sombra del cuerpo humano. Como muestra la Figura \ref{fig:ble_barometro}, la relación logarítmica hace que el error absoluto de distancia crezca rápido más allá de $5\text{--}8\text{ m}$, exigiendo suavizado exponencial (EMA o Kalman 1D) sobre la serie de RSSI antes de clasificar la zona.
- **NFC (*Near Field Communication*, $13.56\text{ MHz}$):** comunicación inductiva pasiva de alcance milimétrico ($< 4\text{--}10\text{ cm}$). Elimina toda ambigüedad de proximidad (tocar con el móvil la placa de la puerta del aula garantiza qué aula es con $100\%$ de certeza) y funciona sin batería en la etiqueta física (NDEF).
- **Códigos QR (*Fallback* universal):** cuando el dispositivo carece de permisos BLE o chip NFC activo, escanear un código QR impreso en la puerta o en el quiosco actúa como ancla espacial instantánea de coste casi nulo e independiente de radiofrecuencias.

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_06_ble_barometro.png}
  \caption{Modelo log-distancia RSSI para balizas BLE con suavizado frente a ruido \textit{multipath} (izquierda) y perfil barométrico hipsométrico para discriminación discreta de plantas dentro de un edificio universitario (derecha).}
  \label{fig:ble_barometro}
\end{figure}

## Geocercas (Geofencing) y control de histéresis

Una **geocerca (*geofence*)** delimita un perímetro virtual alrededor de una coordenada geográfica $(lat, lon, R)$ para disparar eventos automáticos cuando el usuario cruza la frontera. En Android, la API `GeofencingClient` soporta tres transiciones fundamentales:

- `GEOFENCE_TRANSITION_ENTER`: el usuario entra en el círculo de radio $R$.
- `GEOFENCE_TRANSITION_DWELL`: el usuario permanece dentro del área al menos un tiempo configurado $\tau_d$ (`loiteringDelay`).
- `GEOFENCE_TRANSITION_EXIT`: el usuario abandona el área vigilada.

\input{src/tex/gps_geofencing.tex}

Un error clásico de implementación consiste en reaccionar al evento `ENTER` o `EXIT` inmediato con un radio demasiado pequeño ($R < 50\text{ m}$ en exteriores GPS). La dispersión normal de la posición cerca del borde provoca **efecto ping-pong**: el móvil dispara falsamente `ENTER-EXIT-ENTER` cinco veces seguidas mientras la persona camina paralela a la valla del edificio. Como muestra el panel derecho de la Figura \ref{fig:gps_geofencing}, el diseño robusto aplica simultáneamente **histéresis espacial** (exigir salir más allá de $R_{\mathrm{in}} + \Delta R$) e **histéresis temporal** (sustituir el disparo instantáneo por `DWELL` con ventana $\tau_d \ge 30\text{--}60\text{ s}$ o confirmar el cruce mediante balizas BLE en accesos interiores).

## Arquitecturas multi-dispositivo y privacidad en Ubicomp

Cuando un quiosco público (`Board`) transfiere la ruta guiada al móvil de un visitante (`Tab/Pad`) o varios nodos ambientales comparten telemetría en tiempo real, el acoplamiento debe desacoplarse de peticiones HTTP bloqueantes continuas:

- **Protocolos ligeros de evento:** en flujos móviles hacia servidor o quiosco destacan **WebSockets** (canal TCP bidireccional persistente de baja latencia ideal para control remoto o traspaso de sesión QR) y **MQTT** (arquitectura publicación/suscripción muy ligera con QoS configurable, ubicua en pasarelas IoT de edificios inteligentes).
- **Privacidad por diseño (*Privacy by Design*):** el mayor riesgo de la computación ubicua es convertir un entorno asistivo en un sistema involuntario de vigilancia masiva. Las pautas de ingeniería exigen procesar los datos biométricos o de trayectoria en el borde (*edge computing*) cuando sea viable, usar identificadores rotatorios efímeros en BLE, limitar la granularidad espacial al mínimo funcional (saber "en el vestíbulo" en lugar de coordinadas exactas cada segundo) y garantizar consentimiento transparente y derecho a pasar desapercibido (*opt-out*).
