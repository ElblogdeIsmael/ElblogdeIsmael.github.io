# Entornos virtuales, aumentados y mixtos

\epigraph{\textit{``Un sistema de realidad virtual no convence por el número de polígonos por segundo que dibuja, sino cuando el cerebro acepta que su cuerpo habita ese lugar y que lo que allí ocurre es real.''}}{Mel Slater, \textit{Place Illusion and Plausibility} (2009)}

\begin{objetivos}
Al terminar este capítulo dominarás el continuo de virtualidad de Milgram y Kishino, los cuatro pilares que definen un sistema de realidad virtual según Sherman y Craig y las tres propiedades estrictas de Azuma para realidad aumentada; comprenderás la física óptica de visores ESTEREOSCÓPICOS (VAC, campo de visión, OST frente a VST), el seguimiento en 6 grados de libertad (SLAM/VIO) y el presupuesto crítico de latencia para evitar el mareo cinemático; y sabrás seleccionar metáforas de selección, manipulación y locomoción 3D adecuadas según Bowman.
\end{objetivos}

\inicial{C}{uando} el espacio de interacción deja de estar confinado a un rectángulo plano de cristal frente a nosotros y pasa a rodear por completo nuestro cuerpo, las reglas del diseño gráfico tradicional dejan de bastar. Un botón ya no se sitúa simplemente en unas coordenadas de pantalla $(x, y)$; existe a dos metros a nuestra izquierda, detrás de una columna virtual o anclado físicamente sobre una puerta real del edificio.

Esta transformación espacial exige coordinar tres disciplinas a la vez: la óptica y la fisiología de la visión humana, la estimación cinemática en tiempo real de cabeza y manos con tolerancias de milisegundos, y el diseño de metáforas de interacción capaces de manipular objetos fuera del alcance natural del brazo \parencite{sherman2018understanding,lavalle2023vr}.

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_11_editorial_vr.jpg}
  \caption{Representación conceptual de la integración entre geometría visual, proyección óptica estereoscópica y marcos de referencia espaciales en computación espacial y realidad mixta.}
  \label{fig:editorial_vr}
\end{figure}

## El continuo de virtualidad y sus definiciones formales

Lejos de ser compartimentos estancos, la realidad física y los mundos enteramente sintéticos forman un espectro continuo de mezcla visual y espacial. \textcite{milgram1994taxonomy} formalizaron este eje bajo el nombre de **Continuo de Virtualidad**, representado en la Figura \ref{fig:milgram_kishino}.

\input{src/tex/milgram_kishino.tex}

- **Entorno real:** el mundo físico sin mediación sintética añadida.
- **Realidad Aumentada (RA / AR):** el entorno predominante es físico y en él se integran objetos gráficos virtuales alineados en tiempo real.
- **Virtualidad Aumentada (VA / AV):** el entorno predominante es digital, pero dentro de él se inyectan elementos reales capturados en vivo (por ejemplo, ver las propias manos y el teclado físico recortados dentro de un escritorio completamente virtual).
- **Realidad Virtual (RV / VR):** entorno completamente generado por ordenador en el que se excluye la percepción visual del mundo exterior.

Hoy se suele agrupar todo el espectro bajo el término paraguas **Realidad Extendida (XR)** o **Computación Espacial**, aunque para diagnosticar problemas técnicos sigue siendo indispensable distinguir las definiciones estrictas de RV y RA.

### Los cuatro elementos de la Realidad Virtual (Sherman y Craig)

En su tratado de referencia, \textcite{sherman2018understanding} definen la Realidad Virtual mediante la confluencia de cuatro elementos indispensables:

1. **Un mundo virtual:** un contenido imaginario o simulado dotado de reglas físicas, geométricas y de comportamiento propias.
2. **Inmersión:** subdividida en **inmersión física o sensorial** (proporcionada por el hardware al sustituir los estímulos del mundo real por señales visuales, auditivas y hápticas sintéticas) e **inmersión mental o presencia** (el estado psicológico subjetivo de "estar allí").
3. **Realimentación sensorial (*sensory feedback*):** el sistema actualiza de forma inmediata las señales enviadas a los sentidos en función de la postura física del usuario, no de un guion pasivo de cine.
4. **Interactividad:** el usuario puede influir de manera significativa sobre el estado, la trayectoria y las leyes del mundo virtual en tiempo real.

\mnota{\textcite{slater2009place} distingue dos fenómenos psicológicos independientes: la \textit{Place Illusion} (``estoy allí'', dependiente de las contingencias sensoriomotoras del visor) y la \textit{Plausibility Illusion} (``lo que ocurre está pasando de verdad'', dependiente de la coherencia causal del entorno).}

### Las tres condiciones de Azuma para la Realidad Aumentada

Por su parte, \textcite{azuma1997survey} estableció una definición técnica precisa de Realidad Aumentada que evita llamarla erróneamente así a simples superposiciones 2D de vídeo tipo rótulo televisivo. Un sistema es auténtica RA únicamente si cumple tres condiciones simultáneas:

\begin{definicion}[Criterios de Azuma (1997) para Realidad Aumentada]
Un sistema constituye Realidad Aumentada si y solo si: (1) \textbf{combina mundo real y contenido virtual}, (2) es \textbf{interactivo en tiempo real}, y (3) \textbf{registra los elementos virtuales en tres dimensiones (3D)} respecto a las coordenadas geométricas del mundo físico. Si un letrero permanece pegado en una esquina de las gafas sin respetar la perspectiva ni girar al mover la cabeza, no es RA, sino un visor \textit{Head-Up Display} (HUD) plano.
\end{definicion}

## Óptica estereoscópica y arquitecturas de visores

Para engañar al sistema visual humano, un visor montado en la cabeza (HMD) debe imitar cómo nuestros ojos reconstruyen la profundidad.

### Percepción de profundidad y conflicto vergencia-acomodación

El cerebro fusiona múltiples pistas de profundidad (*depth cues*): pistas pictóricas monoculares (oclusión, perspectiva lineal, gradiente de textura, sombras), paralaje de movimiento (al desplazar la cabeza, los objetos cercanos barren mayor ángulo visual que los lejanos) y dos pistas fisiológicas binoculares:

- **Estereopsis (disparidad binocular):** la separación interpupilar media ($\text{IPD} \approx 63\text{ mm}$) genera dos imágenes ligeramente desplazadas en la retina izquierda y derecha.
- **Vergencia y acomodación:** en la naturaleza están acopladas fisiológicamente. Al mirar un lápiz a $30\text{ cm}$, ambos ojos convergen hacia dentro (**vergencia**) y el cristalino aumenta su curvatura para enfocarlo (**acomodación**). Sin embargo, casi todos los visores comerciales actuales presentan un único plano focal fijo a $\sim 1.5\text{--}2.5\text{ m}$ mediante sus lentes. Si un objeto virtual aparece a $30\text{ cm}$, los ojos convergen a $30\text{ cm}$ mientras el cristalino intenta enfocar a $2\text{ m}$. Esa disociación artificial, conocida como **conflicto vergencia-acomodación (VAC)**, es una de las causas primarias de fatiga ocular y dolor de cabeza en sesiones prolongadas \parencite{lavalle2023vr,hainich2009end}.

### Lentes Fresnel, Pancake, FOV y resolución angular

Al colocar una micropantalla a pocos centímetros del ojo, el sistema óptico necesita lentes convergentes cortas que agranden la imagen virtual hasta un plano cómodo de enfoque. Durante años predominaron las **lentes Fresnel** (anillos concéntricos tallados para ahorrar grosor y peso), aunque introducen reflejos internos ("*god rays*") en escenas de alto contraste. La generación actual adopta ópticas **pancake** basadas en reflexión polarizada plegada: la luz rebota varias veces entre películas reflectantes y polarizadores dentro de un bloque finísimo, reduciendo a la mitad la distancia visor-cara y mejorando la nitidez en los bordes a cambio de absorber cerca del $75\text{--}85\%$ de la luminosidad emitida por el panel.

\mnota{La densidad en megapíxeles de un panel engaña si se amplía el campo de visión: el parámetro real de nitidez es el \textbf{PPD} (píxeles por grado visual); el ojo sano distingue detalles hasta $\sim 60\text{ PPD}$.}

Como parámetro de calidad visual, no basta mirar la resolución en píxeles de la pantalla; hay que dividirla por el **campo de visión (FOV)** horizontal. Un visor típico abarca $90^\circ\text{--}110^\circ$ horizontales frente a los $\sim 200^\circ$ binoculares humanos. Si repartimos $2\,000$ píxeles horizontales por ojo en $100^\circ$, obtenemos $20\text{ PPD}$ (*pixels per degree*), todavía lejos de la agudeza visual humana normal ($\sim 60\text{ PPD}$), lo que explica la percepción residual del entramado de subpíxeles (*screen-door effect*) en visores antiguos \parencite{hainich2009end}.

### Visores Optical See-Through (OST) frente a Video See-Through (VST)

En Realidad Aumentada existen dos arquitecturas ópticas opuestas para mezclar luz física y píxeles sintéticos, cuyas diferencias estructurales resume la Figura \ref{fig:ost_vs_vst}:

\input{src/tex/ost_vs_vst.tex}

| Criterio técnico | Optical See-Through (OST) | Video See-Through (VST / Passthrough) |
| :--- | :--- | :--- |
| Visión del mundo real | Directa (guía de ondas o espejo semitransparente) | Indirecta (cámaras frontales + pantallas internas) |
| Seguridad ante fallo eléctrico | Alta: el usuario sigue viendo el entorno físico | Crítica: ceguera instantánea si falla el sistema |
| Oclusión real-virtual | Muy difícil: los píxeles suman luz (fantasmas traslúcidos) | Sencilla: se sustituye cada píxel por composición digital |
| Latencia real vs. virtual | El mundo real tiene $0\text{ ms}$; el virtual llega con retraso (*swim*) | Sincronizables: ambas capas pasan por el mismo frame |
| Campo de visión aumentado | Estrecho hoy en guías difractivas ($30^\circ\text{--}55^\circ$) | Amplio ($\sim 95^\circ\text{--}115^\circ$), igual que RV |

## Tracking 6DoF, presupuesto de latencia y mareo cinemático

### De 3DoF a 6DoF mediante SLAM y VIO

El seguimiento espacial describe cuántos parámetros independientes de postura captura el sistema respecto a un marco de referencia fijo:

- **3 grados de libertad (3DoF):** mide únicamente la orientación rotacional $(yaw, pitch, roll)$ usando giróscopos, acelerómetros y magnetómetros integrados. Permite mirar alrededor desde un asiento fijo, pero si el usuario inclina el torso hacia delante para inspeccionar un objeto cercano, el mundo acompaña a su cabeza y produce una disonancia vestibular inmediata.
- **6 grados de libertad (6DoF):** añade los tres grados de traslación $(x, y, z)$ mediante seguimiento **outside-in** (estaciones emisoras externas o cámaras fijas en la sala) o seguimiento autónomo **inside-out** integrado en el propio visor. La técnica estándar de inside-out es **VIO (*Visual-Inertial Odometry*)** combinada con **SLAM (*Simultaneous Localization and Mapping*)**: la IMU muestrea aceleraciones y rotaciones a $500\text{--}1\,000\text{ Hz}$ para predecir movimientos ultrarrápidos, mientras cámaras gran angular de espectro visible o infrarrojo extraen puntos característicos estáticos de la habitación a $30\text{--}90\text{ Hz}$ y triangulan su posición corrigiendo continuamente la deriva inercial.

### El umbral de los 20 milisegundos y Asynchronous Timewarp

Para que el cerebro no detecte que la escena va a remolque del giro de la cabeza ni aparezca **mareo cinemático (*cybersickness*)**, la latencia total **motion-to-photon** (desde que empieza el giro físico del cráneo hasta que los nuevos fotones correspondientes alcanzan la retina) debe mantenerse estrictamente por debajo de **$20\text{ ms}$**, objetivo ideal en torno a $10\text{--}12\text{ ms}$, tal como cuantifica la Figura \ref{fig:vr_latencia_fov} \parencite{lavalle2023vr}.

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_03_vr_latencia_fov.png}
  \caption{Desglose del presupuesto de latencia \textit{motion-to-photon} bajo el umbral crítico de 20 ms mediante reproyección ATW (izquierda) y relación empírica entre flujo óptico en campo periférico, incoherencia vestibular y severidad de mareo cinemático (derecha).}
  \label{fig:vr_latencia_fov}
\end{figure}

Dado que renderizar escenas complejas en dos vistas estereoscópicas a $90\text{ Hz}$ (presupuesto de $11.1\text{ ms}$ por fotograma) puede sufrir caídas puntuales de GPU, los entornos de ejecución actuales aplican una salvaguarda llamada **Asynchronous Timewarp (ATW)** o **Spacewarp (ASW)**. Justo antes de enviar el fotograma a la pantalla (*scanout*), un hilo prioritario consulta la última lectura de la IMU ocurrida hace $< 2\text{ ms}$ y deforma homográfica o geométricamente la imagen ya renderizada para alinear exactamente la orientación de los últimos milisegundos. Esto no sustituye un motor fluido, pero evita que una caída puntual de renderizado dispare un desajuste vestibular severo.

\begin{alerta}[Teoría del conflicto sensorial y control del mareo cinemático]
El mareo en RV ocurre principalmente cuando el flujo óptico en la visión periférica indica desplazamiento o aceleración constante mientras los otolitos y canales semicirculares del oído interno reportan reposo absoluto en la silla. Para mitigarlo sin amputar la aplicación se aplican tres reglas de ingeniería: (1) usar traslación discreta (\textbf{teletransporte}) en lugar de locomoción continua con joystick cuando no exista movimiento físico real; (2) aplicar un \textbf{viñeteado dinámico} (\textit{tunneling}) que oscurece suavemente el campo periférico durante aceleraciones artificiales; y (3) garantizar que ninguna aplicación bloquee ni desacople el control de la cámara respecto al giro físico de la cabeza.
\end{alerta}

## Metáforas de interacción 3D según Bowman

Manipular en tres dimensiones introduce seis grados de libertad simultáneos y elimina los apoyos físicos que estabilizaban el ratón sobre el escritorio. \textcite{bowman2004user} organizan las tareas espaciales universales en selección/manipulación, desplazamiento (*travel*) y control del sistema.

### Técnicas de selección y manipulación a distancia

Cuando un objeto virtual está más allá del alcance anatómico del brazo ($\sim 0.7\text{ m}$), el diseñador elige entre dos grandes familias de técnicas:

- **Técnicas virtuales con mano directa y extensión no lineal (*arm-extension*):**
  - *Mano virtual simple:* mapeo isométrico $1:1$ entre la posición real de la mano y su avatar; natural a corta distancia, inútil más allá del brazo.
  - **Técnica Go-Go (Poupyrev et al., 1996):** dentro de un umbral radial cercano $r < D$ próximo al pecho, la mano virtual mantiene relación $1:1$ para ofrecer manipulación precisa. Al estirar el brazo por encima de $D$, la distancia virtual crece de forma cuadrática $R_v = R_r + k\,(R_r - D)^2$, permitiendo alcanzar objetos a decenas de metros con una mínima extensión adicional, como ilustra la Figura \ref{fig:interaccion_3d_gogo}.
- **Técnicas basadas en puntero láser (*Ray-casting*) e híbridas:**
  - **Ray-casting:** proyecta un rayo desde el controlador o muñeca e intersecta el primer objeto atravesado. Es rapidísimo para seleccionar a gran distancia pero sufre en **objetos pequeños o distantes**, donde un microtemblor de $1^\circ$ en la muñeca barre $35\text{ cm}$ a $20\text{ m}$ de distancia, y resulta torpe para rotar o acercar con precisión un objeto una vez enganchado.
  - **HOMER (*Hand-centered Object Manipulation Extending Ray-casting*):** combina lo mejor de ambos mundos: selecciona a distancia con un rayo láser, teletransporta instantáneamente la mano virtual hasta la posición del objeto en el momento del clic, y permite rotarlo y trasladarlo centrándose en el eje local de la mano antes de devolverla a su sitio al soltar.
  - **World in Miniature (WIM):** coloca en la mano no dominante una maqueta tridimensional a escala reducida de toda la habitación; mover una silla en la miniatura mueve de inmediato el mueble real a escala natural, habilitando manipulación sin desplazarse.

\input{src/tex/interaccion_3d_gogo.tex}

### Metáforas de locomoción (*Travel*)

Mover al usuario a través de un escenario que supera el área física de la sala requiere decidir entre **locomoción continua** (andar por un pasillo con palanca, alto riesgo de mareo si no hay aceleración real), **teletransporte por arco parabólico** (apuntar el lugar de destino con confirmación visual antes de efectuar un salto discreto libre de flujo óptico), **caminar en el sitio (*walking-in-place*)** y el elegante **Redirected Walking**: cuando la sala física tiene al menos $6\text{--}10\text{ m}$ libres, el visor inyecta imperceptiblemente curvaturas de $1\text{--}3^\circ$ por metro de avance al girar la cámara virtual, haciendo que el usuario camine en círculos físicos seguros mientras percibe estar recorriendo pasillos infinitos en línea recta \parencite{bowman2004user,lavalle2023vr}.
