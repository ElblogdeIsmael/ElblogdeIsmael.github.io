# Interfaces conversacionales y sistemas de diálogo oral

\epigraph{\textit{``Hablar es la forma más rápida de expresar una intención compleja, pero escuchar es la forma más lenta y frágil de explorar un catálogo lleno de opciones desconocidas.''}}{Philip Kortum, \textit{HCI Beyond the GUI} (2008)}

\begin{objetivos}
Al finalizar este capítulo comprenderás las asimetrías cognitivas del canal vocal frente al canal visual según Kortum y Hempel, seguirás paso a paso el flujo de un sistema de diálogo hablado (ASR, NLU, Gestor de Diálogo, NLG y TTS) documentado por McTear, Callejas, Griol y López-Cózar, dominarás las políticas de iniciativa, gestión de errores con doble umbral de confianza, \textit{barge-in} y recuperación robusta de Suendermann y Liscombe, diseñarás diálogos multilingües y multimodales con habla y texto, y evaluarás la calidad global de un sistema conversacional mediante el modelo PARADISE y escalas subjetivas como SASSI.
\end{objetivos}

\inicial{E}{n} la imaginación popular alimentada por décadas de cine, hablar con un ordenador parece el fin de todas las barreras tecnológicas. Sin embargo, cualquiera que haya peleado con un contestador telefónico automático sabe lo frustrante que resulta una interfaz oral mal planteada. El motivo no reside solo en que el reconocedor falle alguna palabra; radica en una **asimetría cognitiva profunda entre producir habla y procesar audio**.

Para el ser humano, hablar resulta rapidísimo ($\sim 150\text{--}200$ palabras por minuto) y prácticamente gratuito en esfuerzo físico. En cambio, **escuchar es estrictamente secuencial y efímero** \parencite{kortum2008hci,hempel2008usability}. Una pantalla permite escanear veinte filas en un segundo, volver la vista atrás si olvidamos el nombre de un aula y comparar precios en paralelo. El audio desaparece conforme suena, obligando al oyente a sostener en memoria de trabajo cada opción que dicta el sistema mientras espera la siguiente. Si el sistema recita un menú de ocho elementos, al llegar al séptimo el usuario ya ha olvidado el segundo (capacidad de trabajo acotada de Cowan, $4 \pm 1$ unidades).

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_13_editorial_dialogo.jpg}
  \caption{Arquitectura conceptual de un sistema conversacional hablado: transición desde la onda acústica continua hasta el seguimiento de estado, la toma de iniciativa y la síntesis prosódica.}
  \label{fig:editorial_dialogo}
\end{figure}

## Arquitectura de un Sistema de Diálogo Hablado (SDS)

Un **Sistema de Diálogo Hablado (*Spoken Dialogue System*, SDS)** clásico se estructura como un bucle cerrado de cinco módulos encadenados, representados en la Figura \ref{fig:pipeline_dialogo}, cuya coordinación convierte presión acústica en acciones verificadas sobre el mundo digital \parencite{lopezcozar2005spoken,mctear2016conversational}.

\input{src/tex/pipeline_dialogo.tex}

### Reconocimiento Automático del Habla (ASR)

El primer bloque transforma una señal acústica unidimensional $s(t)$ capturada por el micrófono en una hipótesis textual (o lista ordenada de las $N$ mejores hipótesis, *N-best list*) acompañada de puntuaciones de confianza:

1. **Detección de actividad vocal (VAD) y ventaneado:** el audio se fragmenta en ventanas cortas de $20\text{--}25\text{ ms}$ con desplazamiento de $10\text{ ms}$ (bajo el supuesto de estacionariedad local de los órganos articulatorios) y ponderación de Hamming.
2. **Extracción espectral en escala Mel:** se aplica la Transformada Rápida de Fourier (FFT) y se proyecta el espectro sobre un banco de filtros triangulares espaciados en la **escala Mel**, aproximación psicofísica al oído humano que ofrece alta resolución en frecuencias graves (formantes vocálicos) y menor resolución en agudos. Como ilustra la Figura \ref{fig:espectrograma_mel}, sobre el log-espectrograma Mel se aplica en sistemas clásicos la Transformada Coseno Discreta (DCT) para obtener coeficientes **MFCC**, mientras las arquitecturas neuronales recientes operan directamente sobre espectrogramas *log-Mel*.
3. **Modelado acústico, léxico y de lenguaje:** los sistemas híbridos clásicos buscan la secuencia de palabras $\hat{W}$ que maximiza la probabilidad a posteriori según el Teorema de Bayes:
$$\hat{W} = \arg\max_W P(W \mid X) = \arg\max_W \underbrace{P(X \mid W)}_{\text{Modelo Acústico}} \cdot \underbrace{P(W)}_{\text{Modelo de Lenguaje}}$$
combinando Modelos Ocultos de Markov y redes profundas (**HMM-DNN**) para alinear fonemas con tramas acústicas. Los sistemas modernos **End-to-End** (como arquitecturas **CTC**, *RNN-Transducer* o modelos secuencia-a-secuencia basados en *Transformers* como *Whisper*) aprenden el mapeo audio-texto de forma conjunta sobre millones de horas multilingües, tolerando mucho mejor acentos regionales y cambios de idioma.

\mnota{La métrica estándar de precisión acústica es el \textbf{WER} (\textit{Word Error Rate}): $\mathrm{WER} = \frac{S + D + I}{N}$, donde $S$ son sustituciones, $D$ borrados, $I$ inserciones y $N$ palabras totales de referencia. Ojo: puede superar el $100\%$ si hay muchas inserciones.}

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_07_espectrograma_mel.png}
  \caption{Forma de onda en el dominio temporal de una locución hablada (arriba) y su espectrograma log-Mel resultante con traza de formantes y concentración energética vocálica por debajo de 4 kHz (abajo).}
  \label{fig:espectrograma_mel}
\end{figure}

### Comprensión del Lenguaje Natural (NLU)

Transcribir literalmente las palabras no basta; el usuario dice *"Oye perdona, ¿tienes idea de por dónde cae el aula dos punto cuatro?"* cuando quiere consultar una ubicación. El módulo **NLU** extrae una estructura semántica formal compuesta por:

- **Intención (*Intent*):** el propósito operativo de la frase (ej. `consultar_ubicacion`).
- **Ranuras (*Slots* / Entidades):** los parámetros concretos necesarios para ejecutarla (ej. `{tipo_espacio: "aula", codigo: "2.4"}`).
- **Resolución anafórica y contextual:** interpretar pronombres o elipsis apoyándose en el turno anterior (*"¿Y cómo subo hasta ella en ascensor?"* hereda `aula 2.4` del historial reciente).

## Gestión de Diálogo: iniciativa, estado y grounding

El **Gestor de Diálogo (DM)** es el cerebro interactivo del sistema \parencite{mctear2016conversational,goldin2006interactive}. Recibe el marco semántico del NLU, actualiza el **estado del diálogo (*Dialogue State Tracking*, DST)**, consulta las bases de conocimiento externas (API de horarios, mapa del edificio, estado del comedor universitario) y aplica una **política de decisión** para escoger la siguiente acción comunicativa (*confirmar, pedir un dato que falta, consultar API, informar o escalar a un humano*).

### Estrategias de iniciativa conversacional

Quién lleva las riendas de la conversación define la naturalidad y robustez de la experiencia \parencite{lopezcozar2005spoken}:

| Tipo de iniciativa | Comportamiento típico | Cuándo conviene emplearla |
| :--- | :--- | :--- |
| **Iniciativa del sistema** | La máquina pregunta campo por campo siguiendo un orden rígido (*"Diga el día"*, *"Diga la hora"*) | Entornos ruidosos, usuarios novatos, reconocimiento limitado o tareas críticas con formularios estrictos |
| **Iniciativa del usuario** | El usuario formula libremente órdenes y preguntas abiertas sin guion impuesto | Asistentes de consulta rápida donde el usuario sabe exactamente qué información soporta el sistema |
| **Iniciativa mixta** | El sistema guía si falta información, pero acepta que el usuario adelante varios *slots* de golpe o cambie de tema | Estándar profesional en asistentes avanzados y quioscos públicos multitemáticos |

Desde el punto de vista de la implementación del DM, coexisten cuatro paradigmas crecientes en flexibilidad: **autómatas de estados finitos** (grafos deterministas simples pero rígidos), **diálogo basado en marcos (*frame-based / slot-filling*)** que permite rellenar los huecos de una plantilla en cualquier orden manteniendo iniciativa mixta, **modelos estadísticos POMDP** que representan una distribución de probabilidad sobre múltiples estados ocultos para optimizar decisiones bajo incertidumbre de ASR, y **gestores híbridos con grandes modelos de lenguaje (LLM)** acotados mediante llamadas verificadas a herramientas (*function calling*) para evitar alucinaciones factuales en datos institucionales.

### Generación de Lenguaje Natural (NLG) y Síntesis (TTS)

Mientras el DM decide *qué* comunicar (un acto de diálogo abstracto), el módulo **NLG** redacta el mensaje evitando muros de texto imposibles de recordar al vuelo, aplicando las máximas conversacionales de Grice (claridad, veracidad, pertinencia y brevedad). A continuación, el módulo **TTS (*Text-to-Speech*)** convierte la cadena textual en habla audible mediante síntesis neuronal moderna (modelos acústicos más *vocoders* neuronales que imitan entonación y pausas respiratorias).

Para controlar la prosodia en respuestas críticas, la NLG anota las frases con el estándar **SSML (*Speech Synthesis Markup Language*)**: etiqueta `<say-as interpret-as="characters">` para deletrear códigos de aula sin leerlos como decimales extraños, `<break time="350ms"/>` para separar pasos de una ruta y `<prosody rate="92%">` para ralentizar ligeramente datos complejos como un horario o un teléfono.

## Robustez comercial y recuperación ante errores

Los usuarios no hablan como locutores de estudio en silencio absoluto; dudan, tosen, corrigen a mitad de frase (*"llévame al aula tres... no, perdón, al laboratorio dos"*) y sufren ruido de pasillo. \textcite{suendermann2011advances} documentan las técnicas que separan una maqueta académica frágil de un sistema desplegado en producción.

### Barge-in, confirmaciones y política de doble umbral

- **Barge-in (interrupción activa):** permite que el usuario empiece a hablar mientras el TTS todavía está locutando una respuesta larga. Exige **cancelación de eco acústico (AEC)** hardware o DSP para que el ASR no transcriba la propia voz que sale por los altavoces del quiosco confundiéndola con el habla del visitante.
- **Confirmación implícita frente a explícita:** en lugar de preguntar constantemente *"¿Has dicho edificio A, sí o no?"* (lo que duplica los turnos y aburre), cuando la confianza es alta el sistema integra lo entendido dentro de la siguiente respuesta útil: *"El aula 2.4 está en la segunda planta del edificio A..."*. La **confirmación explícita** se reserva para dudas medias o acciones irreversibles (borrar datos, confirmar una cita o enviar una solicitud oficial).

\input{src/tex/gestion_errores_asr.tex}

La Figura \ref{fig:gestion_errores_asr} resume la regla de **doble umbral de confianza** $(\theta_{\mathrm{baja}}, \theta_{\mathrm{alta}})$: por encima de $\theta_{\mathrm{alta}}$ el sistema ejecuta y confirma de forma implícita; entre $\theta_{\mathrm{baja}}$ y $\theta_{\mathrm{alta}}$ solicita confirmación explícita acotada; y por debajo de $\theta_{\mathrm{baja}}$ (o tras silencio por *timeout*) aplica recuperación escalonada:

1. **No repetir el mismo mensaje literal:** ante un primer fallo, reformular el *prompt* ofreciendo un ejemplo concreto de qué decir (*"No te he oído bien; puedes preguntarme, por ejemplo: ¿dónde está secretaría?"*).
2. **Escalado gradual y degradación multimodal:** si ocurren dos errores consecutivos (*consec. no-match* o *no-input*), la voz ha demostrado no ser fiable en ese instante por ruido o acento. El sistema debe abandonar el bucle de frustración verbal y ofrecer un botón grande en pantalla, teclado en pantalla o código QR para continuar en silencio \parencite{suendermann2011advances,hempel2008usability}.

### Soporte multilingüe y fusión con otras modalidades

En un entorno universitario abierto a estudiantes internacionales (como visitantes Erasmus en la ETSIIT), un quiosco conversacional no puede fijar un idioma monolítico invisible:

- **Detección automática de idioma (*LID*) o cambio explícito persistente:** identificar el idioma en los primeros $1.5\text{ s}$ de locución o proporcionar selectores visuales visibles de bandera/código ISO (`ES / EN / FR`) sincronizando al instante ASR, gramática NLU, base de respuestas y voz TTS nativa.
- **Diálogo multimodal:** tal como demostraron \textcite{lopezcozar2005spoken}, combinar la voz con pulsaciones táctiles o gestos aéreos (por ejemplo, decir *"¿qué horarios tiene esto?"* mientras se señala un icono del comedor en el plano del quiosco mediante fusión semántica tardía) reduce drásticamente el número de errores de reconocimiento de entidades difíciles y acorta la duración total de la tarea.

## Evaluación de sistemas de diálogo: PARADISE y SASSI

Medir si un sistema conversacional es bueno observando únicamente el WER del ASR conduce a engaños: un sistema con mejor ASR puede resultar odioso si obliga a dar doce vueltas burocráticas para saber dónde hay clase, mientras otro con WER modesto triunfa si resuelve el problema en dos turnos cómodos.

### El marco formal PARADISE (Walker et al., 1997)

Para resolver esa brecha, \textcite{walker1997paradise} propusieron el estándar **PARADISE (*PARAdigm for DIalogue System Evaluation*)**, modelando la **satisfacción subjetiva del usuario** como una función lineal múltiple de objetivos maximizados (éxito real de la tarea) menos costes de interacción cuantificables automáticamente desde los registros de diálogo:

$$S = \alpha\,\mathcal{N}(\kappa) - \sum_{i} w_i\,\mathcal{N}(c_i)$$

donde $\mathcal{N}(\cdot)$ denota normalización estadística ($z$-scores), $\kappa$ es el estadístico Kappa que mide el **éxito neto de cumplimiento de tarea (*Task Completion*)** corregido por azar usando la matriz de confusión de atributos resueltos, y $c_i$ agrupa **costes de eficiencia** (duración en segundos, número de turnos) y **costes de calidad** (porcentaje de errores de ASR, número de re-preguntas por incomprensión, interrupciones y latencia de respuesta). La Figura \ref{fig:paradise_eval} ejemplifica el equilibrio empírico que revela este análisis.

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_10_paradise_eval.png}
  \caption{Evaluación de sistemas conversacionales mediante el marco PARADISE: descomposición de regresión sobre éxito de tarea $\kappa$ frente a costes de turnos/errores (izquierda) y relación entre eficiencia del diálogo y satisfacción percibida (derecha).}
  \label{fig:paradise_eval}
\end{figure}

### Evaluación subjetiva con SASSI y pruebas Wizard-of-Oz

Junto a las métricas objetivas de PARADISE, la dimensión psicológica se mide mediante el cuestionario validado **SASSI (*Subjective Assessment of Speech System Interfaces*)**, de Hone y Graham, que evalúa 34 ítems agrupados en seis factores mediante escala Likert: precisión percibida de respuesta, simpatía (*likeability*), carga cognitiva, molestia (*annoyance*), habitabilidad (si el usuario sabe en todo momento qué puede decir) y velocidad. Antes incluso de entrenar modelos costosos, los diseñadores de NPI validan guiones conversacionales mediante prototipos **Mago de Oz (*Wizard of Oz*)**, donde un operador humano oculto simula las respuestas del sistema en tiempo real para detectar qué frases espontáneas pronuncian realmente los usuarios antes de fijar las gramáticas NLU \parencite{rogers2023interaction,mctear2016conversational}.
