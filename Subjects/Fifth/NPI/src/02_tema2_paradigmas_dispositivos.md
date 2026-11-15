# Paradigmas de interacción y dispositivos sensoriales

\epigraph{\textit{``Los usuarios no utilizan una sola modalidad porque sea elegante; combinan voz, mirada y gesto porque el lenguaje humano distribuye la carga cognitiva entre varios canales en paralelo.''}}{Sharon Oviatt, \textit{Ten Myths of Multimodal Interaction} (1999)}

\begin{objetivos}
Al finalizar este capítulo sabrás situar los nuevos paradigmas de interacción en su evolución histórica desde el procesamiento por lotes hasta las interfaces naturales (NUI), distinguir estilos y tipos de interacción según Dix y Rogers, diseñar fusiones multimodales evitando los mitos clásicos documentados por Oviatt, y explotar las propiedades psicofísicas y hardware de pantallas multitáctiles, actuadores hápticos, audio no verbal, seguimiento ocular e interfaces cerebro-computador (BCI).
\end{objetivos}

\inicial{D}{urante} más de cuatro décadas, la metáfora del escritorio fue el estándar casi indiscutible de la informática personal. Sentado frente a un monitor rectangular, con un teclado y un ratón mecánico sobre una mesa horizontal, el usuario ejecutaba acciones puntuales sobre ventanas, iconos y menús. Ese modelo funciona extraordinariamente bien para tareas sedentarias de edición de texto o cálculo, pero se derrumba en cuanto salimos a caminar por una calle luminosa, manipulamos instrumental médico con las manos ocupadas o intentamos orientar un volumen anatómico en tres dimensiones.

Un **paradigma de interacción** no es simplemente una tecnología de hardware nueva; es un pacto implícito sobre dónde reside la iniciativa, qué capacidades físicas y cognitivas del ser humano se movilizan, y en qué grado la máquina exige nuestra atención exclusiva o se disuelve en el entorno \parencite{rogers2023interaction}.

## Evolución histórica de los paradigmas de interacción

La transición desde los primeros computadores hasta la interacción ubicua y natural responde a una reducción progresiva de la fricción entre la intención humana y la representación digital. Cada etapa histórica desplazó el centro de gravedad desde la máquina hacia el cuerpo y el contexto social del operador, como sintetiza la Figura \ref{fig:evolucion_paradigmas}.

\input{src/tex/evolucion_paradigmas.tex}

1. **Procesamiento por lotes (*batch*, años 50-60):** la interacción era estrictamente asíncrona y diferida. El programador codificaba tarjetas perforadas y esperaba horas hasta recibir un listado impreso. El usuario se adaptaba por completo a las restricciones temporales del hardware.
2. **Interfaz de línea de comandos (CLI, años 60-70):** la llegada del teletipo y el terminal de vídeo permitió el diálogo en tiempo real mediante lenguaje simbólico. A cambio de una alta eficiencia para usuarios expertos (gracias a la composición de tuberías y alias), impone un coste severo de **recuerdo frente a reconocimiento**: obliga a memorizar nombres de órdenes, banderas y sintaxis estricta.
3. **Metáfora del escritorio y WIMP (*Windows, Icons, Menus, Pointer*, años 70-90):** concebida en Xerox PARC (Alto y Star) y popularizada por Apple Lisa, Macintosh y Windows, sustituyó el recuerdo léxico por el reconocimiento visual y la **manipulación directa** \parencite{shneiderman2016designing}. Al ver un icono de carpeta y arrastrar un documento sobre él, la operación es visible, continua y reversible.
4. **Computación ubicua (*Ubicomp*, desde los años 90):** formulada por Mark Weiser en 1991, plantea invertir el esquema del ordenador personal como único foco de atención: centenares de dispositivos de distintas escalas se integran en objetos físicos cotidianos y coordinan su respuesta según el contexto \parencite{weiser1991computer,krumm2018ubiquitous}.
5. **Interfaces naturales de usuario (NUI) y sistemas multimodales (siglo XXI):** aprovechan destrezas humanas adquiridas antes de aprender a usar un ordenador, como señalar, hablar, sujetar objetos o mirar \parencite{wigdor2011brave}. El adjetivo "natural" no significa que el dispositivo funcione por magia sin aprendizaje previo; indica que la curva inicial se apoya en la experiencia biológica previa en el mundo físico.

## Taxonomías de estilos y tipos de interacción

Para analizar o diseñar una interfaz concreta conviene separar dos planos complementarios: el **estilo** mecánico de diálogo con la máquina y el **tipo** cognitivo de relación entre usuario y sistema.

### Estilos de interacción según Dix et al.

\textcite{dix2004human} clasifican los mecanismos concretos de entrada y salida en siete estilos básicos que suelen coexistir dentro de una misma aplicación:

| Estilo | Mecanismo principal | Ventaja clave | Limitación principal |
| :--- | :--- | :--- | :--- |
| Línea de comandos | Órdenes textuales y parámetros | Máxima expresividad y automatización | Alta carga de memoria; sintaxis frágil |
| Menús y navegación | Selección entre listas jerárquicas | Reduce errores y favorece reconocimiento | Ralentiza flujos profundos (Hick-Hyman) |
| Lenguaje natural | Texto libre o habla espontánea | Curva de entrada mínima para principiantes | Ambigüedad léxica y errores de ASR |
| Pregunta / respuesta | Diálogo guiado paso a paso | Útil en asistentes acotados y trámites | Rígido si el usuario quiere saltar pasos |
| Formularios y hojas | Campos estructurados y rejillas | Alta densidad de datos y validación rápida | Poco apto para contextos móviles sin teclado |
| WIMP | Ventanas, iconos, menús y puntero | Consistencia visual y transferencia entre apps | Dependiente de superficie 2D y cursor preciso |
| Puntos de interés / 3D | Enlaces, objetos directos, realidad espacial | Explota memoria espacial y contexto | Riesgo de desorientación y fatiga |

### Cuatro tipos de interacción según Rogers, Sharp y Preece

Desde la perspectiva de la psicología de la actividad, \textcite{rogers2023interaction} proponen organizar cualquier experiencia interactiva en torno a cuatro modos fundamentales:

- **Instruir (*Instructing*):** el usuario emite órdenes explícitas al sistema (pulsar "Imprimir", decir "Pon una alarma a las siete", ejecutar `git commit`). Es rápido y predecible para acciones repetitivas.
- **Conversar (*Conversing*):** diálogo bidireccional con turnos sucesivos en lenguaje natural, ya sea texto o voz. El sistema actúa como interlocutor que mantiene estado e intenta aclarar intenciones ambiguas.
- **Manipular (*Manipulating*):** interacción continua con objetos digitales o físicos como si tuvieran inercia, fricción o posición espacial. Se apoya en la coordinación sensoriomotora directa: pellizcar una fotografía, girar un dial háptico o colocar una pieza física sobre una mesa interactiva (*Tangible Bits*).
- **Explorar (*Exploring*):** el usuario recorre libremente un entorno virtual, un mapa tridimensional o un espacio físico aumentado con sensores, obteniendo información bajo demanda al acercarse o dirigir la atención hacia los elementos del entorno.

\begin{ejemplo}[Un mismo edificio visto desde los cuatro tipos de interacción]
En un quiosco inteligente de la ETSIIT, preguntar en voz alta ``¿dónde está el despacho del profesor Cabrera?'' ejemplifica la interacción \textbf{conversacional}; pulsar el botón ``Ver horario de secretaría'' es \textbf{instruir}; pellizcar y rotar el plano 3D de la tercera planta con dos dedos es \textbf{manipular}; y caminar con el móvil por los pasillos recibiendo notificaciones al cruzar un pasillo con balizas BLE es \textbf{explorar}.
\end{ejemplo}

## Interacción multimodal y arquitectura de fusión

Combinar dos canales de entrada (por ejemplo, voz y señalización táctil) no equivale a duplicar la misma interfaz en dos sensores. En condiciones reales, los usuarios no hablan y señalan de manera redundante a cada palabra, sino que reparten la información según la naturaleza de cada modalidad: utilizan la mano o la mirada para anclar **dónde** está un objeto y usan la voz para especificar **qué** quieren hacer con él \parencite{oviatt1999ten}.

### Los diez mitos de la interacción multimodal (Oviatt, 1999)

Sharon Oviatt recopiló diez errores de diseño recurrentes basados en estudios empíricos con sistemas que combinan voz, lápiz óptico y gestos. Cuatro de ellos tienen impacto directo en la arquitectura del software de NPI:

1. **Mito de la redundancia:** el usuario rara vez dice lo mismo por voz y por gesto. En la práctica, las modalidades son **complementarias** el mayor porcentaje del tiempo ("mueve *esto* [toque en A] hasta *aquí* [toque en B]").
2. **Mito de la simultaneidad exacta:** las señales multimodales no llegan en el mismo milisegundo. El gesto suele preceder a la palabra deíctica asociada entre $200\text{ ms}$ y $1\,000\text{ ms}$, o bien finalizar justo después de la frase.
3. **Mito de la invariancia contextual:** conforme aumenta la dificultad cognitiva de la tarea o el ruido ambiental, los usuarios incrementan espontáneamente el uso multimodal para evitar errores en un único canal frágil.
4. **Mito del incremento lineal de carga:** lejos de saturar al operador, permitir elegir y combinar canales reduce la tasa global de error frente a sistemas unimodales equivalentes cuando la interfaz se diseña respetando el esquema temporal de las modalidades.

\mnota{Deixis: término lingüístico para palabras como ``esto'', ``aquí'' o ``ese aula'' cuyo significado depende de un gesto o foco espacial externo.}

### Fusión temprana frente a fusión semántica tardía

Al integrar varios flujos de sensores en un sistema multimodal, existen dos puntos arquitectónicos donde combinar la información, ilustrados en la Figura \ref{fig:fusion_multimodal} \parencite{lopezcozar2005spoken}:

\input{src/tex/fusion_multimodal.tex}

- **Fusión temprana (*early / feature-level fusion*):** concatena vectores de características de bajo nivel extraídos de señales estrechamente acopladas en el tiempo (por ejemplo, vectores MFCC de audio y coordenadas de movimiento labial cada $10\text{ ms}$) antes de pasarlos a un único clasificador conjunto. Exige sincronización temporal estricta a nivel de trama y falla si cambia la frecuencia de muestreo o uno de los sensores sufre caídas intermitentes, aunque permite capturar correlaciones finas como el reconocimiento audiovisual del habla en entornos ruidosos.
- **Fusión tardía (*late / semantic-level fusion*):** cada canal dispone de su propio reconocedor independiente (un motor ASR+NLU para la voz y un detector de gestos o coordenadas para el panel táctil) que emite hipótesis semánticas etiquetadas con marcas temporales e índices de confianza. Un **unificador semántico** compara las estructuras en una ventana temporal deslizante $\Delta t$ (típicamente $1\text{--}3\text{ s}$) para resolver referencias anafóricas y deícticas. Es la opción predominante en NPI por su modularidad, capacidad de trabajar con fuentes asíncronas y tolerancia parcial a fallos.

## Modalidades sensoriales de salida y percepción humana

El catálogo de dispositivos de salida supera ampliamente el píxel visual. \textcite{kortum2008hci} organiza el diseño de interfaces más allá de la vista examinando la fisiología de cada sentido como un canal de comunicación con ancho de banda, latencia y umbrales propios.

### Canal háptico y psicofísica táctil

El término **háptico** agrupa dos subsistemas fisiológicos distintos: la percepción **cutánea** (deformación, vibración y temperatura sobre la piel) y la percepción **cinestésica o propioceptiva** (fuerza, par mecánico y posición articular detectados en músculos y tendones). En la piel glabra de las yemas de los dedos operan cuatro familias de mecanorreceptores cuya selectividad temporal y espacial determina qué vibraciones sentimos y qué resolución podemos discriminar, tal como muestra la Figura \ref{fig:mecanorreceptores} \parencite{kortum2008hci}.

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_02_mecanorreceptores.png}
  \caption{Respuesta en frecuencia y tamaño de campo receptivo de los cuatro mecanorreceptores cutáneos humanos (izquierda) y ventana óptima de sensibilidad vibrotáctil para diseño de actuadores hápticos (derecha).}
  \label{fig:mecanorreceptores}
\end{figure}

- **Discos de Merkel (SA I):** adaptación lenta y campo receptivo diminuto ($2\text{--}3\text{ mm}$). Detectan presión sostenida, bordes geométricos finos y relieve como los puntos Braille ($0.4\text{--}15\text{ Hz}$).
- **Corpúsculos de Meissner (RA I):** adaptación rápida con máxima sensibilidad entre $10$ y $50\text{ Hz}$. Responden al deslizamiento inicial de un objeto entre los dedos y a texturas de grano grueso.
- **Corpúsculos de Pacini (RA II / PC):** adaptación ultrarrápida y campo receptivo amplio (varios centímetros). Su sensibilidad alcanza un mínimo de umbral entorno a $200\text{--}250\text{ Hz}$, donde bastan desplazamientos de apenas unas décimas de micrómetro para percibir una vibración nítida.
- **Terminaciones de Ruffini (SA II):** adaptación lenta y campo extenso; informan sobre el estiramiento lateral de la piel y el ángulo de articulación de los dedos.

Para excitar estos receptores, la ingeniería de dispositivos emplea cuatro tecnologías principales de actuación:

1. **Motores de masa rotativa excéntrica (ERM):** un micromotor convencional hace girar un contrapeso desequilibrado. Son baratos pero presentan una inercia mecánica alta ($40\text{--}80\text{ ms}$ para arrancar y frenar) y acoplan amplitud y frecuencia: al subir el voltaje giran más rápido y vibran más fuerte a la vez, lo que impide generar "clics" secos y precisos.
2. **Actuadores lineales resonantes (LRA):** un imán suspendido en un resorte oscila axialmente al excitase a su frecuencia de resonancia (típicamente $175\text{--}240\text{ Hz}$, alineada justo con la máxima sensibilidad de los corpúsculos de Pacini). Responden en $\sim 10\text{--}15\text{ ms}$, permitiendo simular clics mecánicos realistas (*Taptic Engine*).
3. **Actuadores piezoeléctricos:** cerámicas que se deforman al aplicar tensión eléctrica. Alcanzan tiempos de subida inferiores a $1\text{ ms}$ y ancho de banda plano de $50$ a $500\text{ Hz}$, ideales para pantallas táctiles grandes o texturización por fricción ultrasónica, aunque requieren voltajes altos ($\sim 60\text{--}120\text{ V}$).
4. **Dispositivos cinestésicos de realimentación de fuerza (*force feedback*):** brazos robóticos articulados (como *Geomagic Touch / PHANToM*) o exoesqueletos que aplican fuerzas vectoriales opuestas cuando el cursor 3D penetra una malla virtual, cerrando bucles de control a $1\,000\text{ Hz}$ para garantizar estabilidad mecánica sin oscilaciones \parencite{kortum2008hci}.

### Audio no verbal: iconos auditivos frente a earcons

El oído ofrece detección omnidireccional de $360^\circ$ y reacciona más rápido que la visión ante alertas repentinas, sin requerir que miremos la pantalla. Fuera del habla, \textcite{kortum2008hci} y \textcite{dix2004human} distinguen dos familias de señales sonoras:

- **Iconos auditivos (*auditory icons*):** utilizan sonidos cotidianos cuya semántica procede de la asociación metafórica con el mundo físico (el sonido de papel arrugándose al vaciar la papelera, el chasquido metálico al encajar una ventana). Exigen mínimo aprendizaje porque aprovechan la escucha cotidiana, aunque es difícil encontrar metáforas acústicas claras para conceptos puramente abstractos como "error de compilación" o "sincronización en curso".
- **Earcons:** motivos musicales sintéticos breves (secuencias abstractas de timbre, altura tonal, ritmo e intensidad) que no guardan relación analógica con el evento real, igual que los iconos visuales abstractos. Su potencia radica en la **composición jerárquica**: cambiando solo el timbre de una frase musical puede distinguirse un archivo de sistema de un mensaje personal mientras el patrón rítmico indica "eliminación" frente a "creación".

### Interfaces olfativas y gustativas

Aunque su presencia en el mercado masivo sigue siendo marginal frente a la vista y el oído, \textcite{kortum2008hci} dedica sendos capítulos a estas dos modalidades sensoriales por su papel único en inmersión multisensorial, terapia y simulación clínica:

- **Olfato digital:** estimula directamente el bulbo olfatorio, conectado anatómica y emocionalmente con el sistema límbico y la memoria a largo plazo (efecto Proust). Su cuello de botella técnico no reside solo en sintetizar o almacenar cartuchos químicos, sino en la **persistencia residual**: a diferencia de un píxel que desaparece al instante siguiente, las moléculas odoríferas permanecen en suspensión y saturan los receptores nasales (habituación olfativa), exigiendo microdispensación direccional breve y sistemas de evacuación o neutralización de aire.
- **Interfaces gustativas:** reproducen los cinco gustos básicos (dulce, salado, ácido, amargo y umami) bien mediante microinyección de soluciones líquidas sobre la lengua o mediante **estimulación eléctrica y térmica directa** sobre las papilas gustativas, donde pulsos de corriente de microamperios y cambios rápidos de temperatura evocan sensaciones agrias o metálicas sin consumibles físicos.

## Pantallas multitáctiles y seguimiento ocular

### Física del tacto capacitivo proyectado (PCAP)

Las pantallas capacitivas proyectadas actuales emplean una matriz ortogonal transparente de electrodos de óxido de indio y estaño (ITO) dispuestos en filas de emisión (Tx) y columnas de recepción (Rx) bajo el cristal protector. Cada cruce forma un pequeño condensador con capacitancia mutua $C_m$.

Cuando un dedo humano (conductor conectado a la masa corporal) se aproxima a un nodo de la matriz, parte de las líneas de campo eléctrico entre el electrodo Tx y el electrodo Rx se derivan hacia el cuerpo a través de la capacidad dedo-tierra. Esto reduce localmente la capacitancia mutua medida en ese cruce. Un controlador escanea toda la matriz a $60\text{--}240\text{ Hz}$ generando un "mapa de calor" bidimensional de variaciones $\Delta C_m(i,j)$. La **multitáctilidad real (*true multi-touch*)** se logra porque cada intersección $(i,j)$ se mide de forma independiente, a diferencia de las antiguas pantallas resistivas o de infrarrojos simples que sufrían el fenómeno de **puntos fantasma (*ghosting*)** al pulsar dos vértices diagonales de un rectángulo.

\mnota{La diferencia entre \textit{self-capacitance} y \textit{mutual capacitance} es crítica: la autocapacidad mide filas y columnas enteras por separado y no resuelve múltiples dedos sin ambigüedad.}

Sobre ese mapa discreto (con pasos de rejilla de $\sim 4\text{--}5\text{ mm}$), el firmware aplica interpolación subpíxel por **centroide ponderado** para alcanzar precisión por debajo del milímetro, filtra ruido eléctrico del cargador o palma apoyada (*palm rejection*) y asigna un **identificador persistente (`pointerId`)** a cada dedo mientras permanezca en contacto.

### Gestión de gestos multitáctiles en Android

En Android, la pila de entrada entrega cada cambio táctil a la vista correspondiente mediante el método `onTouchEvent(MotionEvent event)`. La arquitectura diferencia dos conceptos que suelen confundirse al programar interfaces táctiles por primera vez:

- **Índice del puntero (`pointerIndex`):** posición efímera del dedo dentro del array interno de un `MotionEvent` concreto ($0, 1, \dots, \text{getPointerCount()}-1$). Cambia si se levanta un dedo anterior.
- **Identificador del puntero (`pointerId`):** etiqueta inmutable asignada desde que el dedo toca la pantalla hasta que se levanta. Todo seguimiento fiable de varios dedos debe guardar el `pointerId` y consultar `event.findPointerIndex(id)` en eventos posteriores, como resume la Figura \ref{fig:motionevent_multitouch}.

\input{src/tex/motionevent_multitouch.tex}

Para distinguir acciones primarias del primer dedo de dedos secundarios simultáneos, `MotionEvent` codifica en el byte superior de `getActionMasked()` el índice del dedo que disparó la transición: `ACTION_DOWN` y `ACTION_UP` notifican el primer y último contacto en pantalla, mientras `ACTION_POINTER_DOWN` y `ACTION_POINTER_UP` señalan la entrada o salida de dedos adicionales mientras al menos otro permanece apoyado. El evento `ACTION_MOVE` agrupa el desplazamiento simultáneo de todos los contactos activos en ese fotograma de refresco (usando el mecanismo de sincronización *VSync*).

```kotlin
override fun onTouchEvent(event: MotionEvent): Boolean {
    when (event.actionMasked) {
        MotionEvent.ACTION_DOWN, MotionEvent.ACTION_POINTER_DOWN -> {
            val idx = event.actionIndex // índice del dedo recién apoyado
            val id = event.getPointerId(idx)
            activePointers[id] = PointF(event.getX(idx), event.getY(idx))
        }
        MotionEvent.ACTION_MOVE -> {
            // Itera por todos los dedos presentes en este frame
            for (i in 0 until event.pointerCount) {
                val id = event.getPointerId(i)
                activePointers[id]?.set(event.getX(i), event.getY(i))
            }
        }
        MotionEvent.ACTION_POINTER_UP, MotionEvent.ACTION_UP, MotionEvent.ACTION_CANCEL -> {
            val id = event.getPointerId(event.actionIndex)
            activePointers.remove(id)
        }
    }
    invalidate()
    return true
}
```

Para evitar reimplementar máquinas de estado de bajo nivel en gestos estándar, Android proporciona dos detectores combinables: `GestureDetector` (gestos de un dedo como *tap*, doble toque, pulsación larga y deslizamiento balístico o *fling* basado en `VelocityTracker`) y `ScaleGestureDetector` (que calcula el factor de escala incremental a partir del cambio de distancia euclídea entre el foco medio de varios punteros).

### Seguimiento ocular (*Eye-Tracking*)

El seguimiento ocular mide dónde fija la mirada el usuario en tiempo real sin necesidad de contacto manual. Los sistemas modernos de video-oculografía por **reflexión corneal y centro pupilar (PCCR)** proyectan luz infrarroja cercana ($\sim 850\text{ nm}$, invisible y segura para el ojo) y registran mediante una cámara el vector geométrico entre el centro oscuro o brillante de la pupila y el reflejo especular sobre la córnea (primera imagen de Purkinje). La estabilidad relativa del reflejo corneal frente al giro del globo ocular permite compensar micro-movimientos de la cabeza y estimar el punto de mirada en pantalla con errores típicos de $0.5^\circ\text{--}1.0^\circ$ visuales.

El ojo humano no se mueve de forma suave al leer o inspeccionar una escena, sino alternando dos dinámicas fisiológicas:

- **Fijaciones:** pausas de $150\text{--}400\text{ ms}$ durante las cuales la fóvea absorbe información visual de alta agudeza (solo en un cono central de $\sim 2^\circ$).
- **Sacadas:** saltos balísticos rápidos ($20\text{--}80\text{ ms}$, velocidades de hasta $700^\circ/\text{s}$) durante los cuales ocurre la **supresión sacádica**: el sistema nervioso atenúa temporalmente el procesamiento visual para no percibir desenfoque de movimiento.

\begin{alerta}[El problema del toque de Midas en interacción por mirada]
Como el ojo explora de manera involuntaria y continua cualquier estímulo nuevo en pantalla, utilizar la mirada directamente para ``hacer clic'' produce activaciones accidentales constantes en cuanto el usuario simplemente lee una opción. Este fallo clásico se denomina \textbf{problema del toque de Midas} (\textit{Midas Touch}). Las soluciones eficaces en NPI evitan convertir el ojo en ratón puro y aplican el patrón \textbf{``la mirada apunta, la mano confirma''} (como combinar mirada + pinza de dedos en visores espaciales actuales, ilustrado en la Figura \ref{fig:bimanual_gaze}), o bien tiempos de permanencia (\textit{dwell time}) largos ($> 600\text{ ms}$) reservados para usuarios con movilidad reducida severa.
\end{alerta}

## Interfaces Cerebro-Computador (BCI)

Una **interfaz cerebro-computador (BCI)** establece un canal directo de comunicación o control entre la actividad eléctrica cerebral y un dispositivo externo, prescindiendo por completo de las vías neuromusculares periféricas \parencite{kortum2008hci}. Aunque existen modalidades invasivas (matrices intracorticales como *Utah array*) y semi-invasivas (electrocorticografía ECoG bajo el cráneo), en entornos académicos y asistenciales predomina la **electroencefalografía (EEG) no invasiva** mediante electrodos superficiales colocados según el sistema internacional 10-20 sobre el cuero cabelludo.

### Paradigmas fisiológicos principales en EEG

Debido a la fuerte atenuación espacial que introduce el cráneo al actuar como filtro paso bajo, un casco EEG no "lee pensamientos" literales; clasifica respuestas fisiológicas macroscópicas robustas mediante tres paradigmas clásicos, comparados en la Figura \ref{fig:bci_eeg}:

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_08_bci_eeg.png}
  \caption{Tres paradigmas clásicos en interfaces BCI basadas en EEG: potencial evocado P300 tras estímulo infrecuente (izquierda), espectrograma de potenciales SSVEP por parpadeo visual periódico (centro) y desincronización relacionada con eventos (ERD) en bandas $\mu$/$\beta$ durante imaginación motora (derecha).}
  \label{fig:bci_eeg}
\end{figure}

1. **Potencial evocado P300 (*oddball paradigm*):** deflexión positiva en el EEG registrada en electrodos parietales (Pz/Cz) alrededor de $300\text{ ms}$ después de que el usuario perciba un estímulo esperado pero infrecuente (por ejemplo, cuando se ilumina la fila o columna de la letra deseada en un deletreador *P300 Speller*). Exige promediar varias repeticiones para elevar la relación señal-ruido, lo que sitúa la tasa típica en $15\text{--}30\text{ bits/min}$.
2. **Potenciales evocados visuales en estado estacionario (SSVEP):** cuando varias opciones parpadean simultáneamente en pantalla a frecuencias distintas (ej. $10\text{ Hz}$, $12\text{ Hz}$, $15\text{ Hz}$), la corteza visual occipital (O1/O2/Oz) sincroniza su actividad en la frecuencia fundamental de la opción a la que atiende el usuario y en sus armónicos. Requiere menos calibración que otros enfoques y alcanza mayores tasas de transferencia ($30\text{--}60\text{ bits/min}$), a costa de fatiga visual si la frecuencia es baja.
3. **Imaginación motora (*Motor Imagery*, MI):** el usuario no necesita mirar ningún estímulo intermitente; imagina mover la mano izquierda, la derecha o ambos pies. Esto induce una **desincronización relacionada con eventos (ERD)** observable como una caída de potencia espectral en el ritmo sensoriomotor $\mu$ ($8\text{--}12\text{ Hz}$) y $\beta$ ($13\text{--}30\text{ Hz}$) sobre el hemisferio contralateral (electrodos C3 y C4). Es puramente endógeno y asíncrono, pero presenta una tasa de *analfabetismo BCI* en torno al $15\text{--}20\%$ de la población sin entrenamiento largo.

## Interacción bimanual y síntesis del bloque

Guiar el diseño multimodal de dispositivos modernos requiere evitar tanto la saturación de un canal único como los solapamientos forzados entre manos u ojos. La Figura \ref{fig:bimanual_gaze} recoge la ley asimétrica de Guiard para el uso coordinado de ambas manos junto al principio clásico de división de roles entre mirada (foco espacial sin esfuerzo muscular) y gesto manual fino (confirmación o manipulación exacta).

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_09_bimanual_gaze.png}
  \caption{Modelo bimanual asimétrico de Guiard aplicado a interacción espacial y separación de responsabilidades entre foco ocular y confirmación gestual en interfaces naturales.}
  \label{fig:bimanual_gaze}
\end{figure}

- **Principio de Guiard en interfaces bimanuales:** en un usuario diestro, la mano no dominante (izquierda) actúa primero para establecer el **marco de referencia espacial** grueso (sujetar la regla, sostener la paleta de herramientas o encuadrar el lienzo 3D), mientras que la mano dominante (derecha) trabaja dentro de ese marco ejecutando operaciones finas de alta frecuencia (trazar una línea, esculpir o hacer clic preciso). Forzar a ambas manos a realizar tareas simétricas independientes suele degradar el rendimiento respecto al trabajo coordinado asimétrico.
