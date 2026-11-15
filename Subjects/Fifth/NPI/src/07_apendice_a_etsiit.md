# Apéndice A. Síntesis práctica: diseño de un quiosco inclusivo para la ETSIIT {.unnumbered}

\epigraph{\textit{``Un proyecto integrador de interacción demuestra su madurez no por apilar todos los sensores disponibles a la vez, sino por orquestar cada modalidad en el instante y contexto físico donde ofrece menor fricción.''}}{Síntesis metodológica de prácticas de NPI, ETSIIT (UGR)}

\inicial{L}{os} bloques prácticos de Nuevos Paradigmas de Interacción desembocan en el diseño de un **punto de información multimodal e inteligente para el vestíbulo de la ETSIIT**, acompañado de su extensión móvil en Android para desplazamiento por el campus. En lugar de yuxtaponer demos inconexas de Leap Motion, micrófono, pantalla táctil y GPS, este apéndice conecta todas las piezas teóricas estudiadas en los seis capítulos dentro de una única arquitectura coherente.

\input{src/tex/arquitectura_etsiit.tex}

## A.1 Orquestación multimodal y accesibilidad universal {.unnumbered}

Como muestra la Figura \ref{fig:arquitectura_etsiit}, el quiosco combina cuatro entradas complementarias bajo el principio de **accesibilidad redundante y fusión semántica tardía**:

- **Higiene y uso sin contacto (*TouchFree*):** en vestíbulos concurridos, un controlador infrarrojo Leap Motion montado en la repisa inferior (orientado hacia arriba con ángulo inclinado a altura cómoda para evitar el *brazo de gorila* del Capítulo 4) proyecta un puntero 2D estabilizado mediante el **filtro $1\text{\euro{}}$**. Permite pulsar mediante *AirPush* o *Hover \& Hold* con objetivos amplios ($\ge 18\text{ mm}$ equivalentes para respetar la Ley de Fitts con mayor $\sigma_x$ en aire libre).
- **Voz multilingüe con confirmación adaptativa:** cuando un estudiante busca información compleja con varios parámetros (*"¿A qué hora abre hoy el comedor de Aynadamar y qué menú hay para celíacos?"*), el habla resulta mucho más rápida que navegar cuatro submenús táctiles. El módulo DM aplica la regla de **doble umbral** (Capítulo 6): confirma implícitamente en voz clara acompañada de tarjeta visual en pantalla y, tras dos fallos por ruido en el vestíbulo, conmuta automáticamente hacia menús visuales con iconos grandes sin encerrar al usuario en un bucle verbal.
- **Continuidad móvil (*Hand-off* hacia Android):** el quiosco (`Board` fijo) es excelente para explorar planos y consultar horarios, pero no acompaña al estudiante hasta su aula. Al localizar el aula en el mapa, el sistema genera un código QR / enlace profundo y transfiere el destino al móvil (`Tab/Pad`), donde `FusedLocationProviderClient`, balizas **BLE** interiores, lectura **NFC** en las placas de despacho y el **barómetro** (`SensorManager` con fórmula hipsométrica relativa) guían hasta la planta y puerta exactas evitando rebotes mediante geocercas con histéresis (Capítulo 5).

## A.2 Decisiones de diseño trazadas a la teoría {.unnumbered}

| Problema detectado en pruebas | Decisión arquitectónica aplicada | Fundamento teórico del libro |
| :--- | :--- | :--- |
| Fatiga en brazo tras $30\text{ s}$ frente al quiosco | Repisa baja a altura de cintura + *AirPush* corto + atajo por voz | *Consumed Endurance* \parencite{hincapie2014consumed} y Ley de Fitts (Cap. 1 y 4) |
| Temblor del puntero aéreo al intentar pulsar iconos | Filtro $1\text{\euro{}}$ adaptativo + botones amplios con imán (*target snapping*) | Filtro de Casiez y modelado subóptimo en aire (Cap. 4) |
| Pregunta oral *"¿cómo llego aquí?"* con toque previo en mapa | Fusión semántica tardía en ventana $\Delta t = 2.5\text{ s}$ (NLU + coordenada) | Mitos 1-2 de \textcite{oviatt1999ten} y fusión tardía \parencite{lopezcozar2005spoken} (Cap. 2) |
| Confusión del GPS entre planta baja y planta 3 de aulas | Calibración barométrica relativa en puerta de entrada + balizas BLE | Ecuación hipsométrica y *Log-Distance RSSI* (Cap. 5) |
| Usuario sordo o ruido elevado en cambios de clase | Todo aviso oral de TTS tiene copia textual síncrona y control táctil pleno | Diseño inclusivo y degradación elegante \parencite{suendermann2011advances} (Cap. 6) |
| Salto erróneo de *Welcome* al pasar por la acera exterior | Geocerca exterior con radio $R_{\mathrm{in}}$ + histéresis + evento `DWELL` ($\ge 45\text{ s}$) | Control de efecto *ping-pong* \parencite{krumm2018ubiquitous} (Cap. 5) |
