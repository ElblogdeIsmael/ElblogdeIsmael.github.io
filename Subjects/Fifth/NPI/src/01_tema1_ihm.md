# Interacción Hombre-Máquina: fundamentos cognitivos y modelos formales

\epigraph{\textit{``El diseño de objetos cotidianos falla casi siempre por la misma razón: los ingenieros optimizan la máquina ignorando la arquitectura cognitiva y física de quien la opera.''}}{Donald A. Norman, \textit{The Design of Everyday Things} (2013)}

\begin{objetivos}
Al terminar este capítulo comprenderás por qué una interfaz interactiva rompe el modelo clásico de máquina de Turing, cómo modelar el bucle percepción-cognición-acción mediante el ciclo de Norman y el Procesador Humano de Información, y cómo predecir tiempos de operación con las leyes de Fitts, Hick-Hyman y dirección antes de escribir una sola línea de código.
\end{objetivos}

\inicial{C}{uando} un programador diseña un algoritmo de ordenación, parte de una premisa cómoda: recibe un vector completo en memoria, ejecuta pasos deterministas sin interferencias externas, devuelve el resultado y se detiene. Un sistema interactivo hace exactamente lo contrario. Vive encendido mientras recibe interrupciones impredecibles de sensores, dedos, micrófonos o paquetes de red, y modifica su respuesta sobre la marcha en función de lo que acaba de hacer el usuario hace diez milisegundos.

Estudiar Interacción Hombre-Máquina (IHM, o HCI en inglés) consiste en modelar ese acoplamiento continuo entre dos procesadores radicalmente distintos: un sistema digital discreto de alta velocidad y un organismo humano con limitaciones perceptuales, memoria de trabajo efímera y restricciones biomecánicas estrictas \parencite{dix2004human,rogers2023interaction}.

## De la computación cerrada a la computación interactiva

\mnota{Goldin, Smolka y Wegner (2006): la interacción supera el paradigma entrada-proceso-salida.}Durante décadas, la informática teórica identificó "computar" con la máquina de Turing clásica. En ese marco, un problema queda especificado por una función matemática $f: \Sigma^* \to \Sigma^*$ sobre cadenas finitas depositadas en la cinta antes de empezar. El entorno permanece mudo hasta la parada.

Sin embargo, \textcite{goldin2006interactive} demostraron que este modelo resulta insuficiente para describir sistemas operativos, servidores web, robots autónomos o aplicaciones móviles con sensores. En una **máquina de interacción persistente** (*Persistent Turing Machine*), el sistema mantiene una memoria interna entre transiciones y dialoga con el entorno mediante flujos infinitos de pares entrada-salida $(i_t, o_t)$ ordenados en el tiempo. Lo decisivo ya no es únicamente qué valor calcula la máquina, sino cuándo llega cada estímulo y qué estado previo arrastra la conversación.

\input{src/tex/turing_vs_interaccion}

\begin{definicion}[Computación interactiva frente a algorítmica]
Una computación es \textbf{algorítmica} cuando todas sus entradas están disponibles antes del primer paso de cómputo y el entorno no puede alterar la ejecución intermedia. Es \textbf{interactiva} cuando la entrada $i_{t+1}$ depende causalmente de la salida previa $o_t$ generada por el sistema, estableciendo un bucle abierto e irreductible a una única transformación estática \parencite{goldin2006interactive}.
\end{definicion}

Esta distinción tiene consecuencias prácticas inmediatas en el desarrollo de interfaces naturales. Un módulo que lee un acelerómetro o escucha un micrófono no puede diseñarse como una función síncrona bloqueante; exige arquitecturas dirigidas por eventos, colas asíncronas, estados persistentes y manejo explícito de la concurrencia temporal.

| Propiedad | Computación algorítmica (Turing) | Computación interactiva (NPI) |
| :--- | :--- | :--- |
| Disponibilidad de datos | Completa al inicio ($t=0$) | Flujo continuo asíncrono ($t \ge 0$) |
| Papel del entorno | Pasivo durante el cálculo | Coautor activo del estado del sistema |
| Criterio de corrección | Terminación y valor final exacto | Respuesta oportuna, latencia y consistencia |
| Memoria entre ejecuciones | Se reinicia en cada invocación | Estado persistente de larga duración |
| Ejemplos representativos | Compilador, cálculo matricial | App móvil con GPS, visor RV, asistente oral |

Table: Diferencias estructurales entre el paradigma algorítmico clásico y la computación interactiva.

## El ciclo de acción-percepción y los modelos conceptuales

Para explicar por qué un usuario comprende o se frustra ante una interfaz, \textcite{norman2013design} propuso descomponer cualquier interacción en **siete etapas** organizadas en dos vertientes: ejecutar una intención sobre el mundo y evaluar qué ha sucedido tras actuar.

\input{src/tex/ciclo_norman}

Entre la intención del usuario y el estado físico de la máquina se abren dos brechas críticas que todo diseñador debe estrechar:

1. **Golfo de ejecución:** mide cuánto esfuerzo cognitivo cuesta averiguar qué acciones permite el sistema y cómo articularlas. Se reduce mediante buenos *significantes* (pistas visuales, sonoras o táctiles), *affordances* claras (propiedades percibidas que sugieren uso, como un tirador frente a una placa plana), restricciones físicas y un mapeo natural entre control y efecto.
2. **Golfo de evaluación:** mide cuánto cuesta percibir qué ha cambiado en el sistema tras la acción y decidir si la meta se ha cumplido. Se reduce con retroalimentación inmediata, multimodal y proporcional: un chasquido háptico al pulsar un botón virtual, un cambio cromático o una confirmación vocal breve.

\mnota{Modelo conceptual vs. modelo mental: el primero lo proyecta la interfaz; el segundo lo construye el usuario en su cabeza.}A esta dinámica subyacen los **modelos conceptuales** \parencite{rogers2023interaction}. El diseñador parte de un modelo de implementación (clases, sensores, bases de datos), pero debe exponer al usuario un modelo conceptual comprensible, a menudo apoyado en metáforas cotidianas (carpetas, brújulas, tarjetas). Cuando el modelo mental que el usuario deduce al observar la interfaz coincide con el modelo conceptual diseñado, el aprendizaje se vuelve transparente. Si divergen, aparecen los errores sistemáticos de uso.

\begin{alerta}[El riesgo de las metáforas literales en NUI]
Copiar sin criterio objetos físicos hacia un entorno digital (eskeuomorfismo rígido) puede lastrar la interacción. En una interfaz aérea con Leap Motion o en realidad virtual, imitar un teclado mecánico flotante sin resistencia física provoca pulsaciones erráticas y fatiga muscular. La metáfora debe conservar la lógica mental familiar, pero adaptarse a la física real del nuevo canal.
\end{alerta}

## El Procesador Humano de Información (MHP)

Mientras Norman analiza el significado de las acciones, \textcite{card1983psychology} modelaron al ser humano desde la ingeniería cognitiva mediante el **Model Human Processor (MHP)**. Su objetivo era estimar tiempos de respuesta y cuellos de botella antes de construir prototipos costosos.

\input{src/tex/procesador_humano}

El MHP divide el sistema humano en tres procesadores que operan en paralelo o en serie según la tarea, acoplados a memorias con parámetros empíricos bien acotados:

- **Procesador perceptual ($\tau_P \approx 100\text{ ms}$, rango $50\text{--}200\text{ ms}$):** transduce estímulos físicos a representaciones simbólicas en los almacenes sensoriales. El almacén visual retiene trazas durante unos $\delta_V \approx 200\text{ ms}$, mientras que el eco auditivo persiste alrededor de $\delta_A \approx 1500\text{ ms}$, dato fundamental para entender por qué las confirmaciones orales breves son procesables sin apoyo en pantalla.
- **Procesador cognitivo ($\tau_C \approx 70\text{ ms}$, rango $25\text{--}170\text{ ms}$):** conecta los perceptos con la **memoria de trabajo** (capacidad clásica de $7 \pm 2$ fragmentos o *chunks*, aunque \textcite{cowan2001magical} sitúa la retención activa sin repaso cerca de $4$ bloques) y recupera esquemas de la memoria a largo plazo.
- **Procesador motor ($\tau_M \approx 70\text{ ms}$, rango $30\text{--}100\text{ ms}$):** traduce decisiones en impulsos musculares hacia dedos, manos, cuello o aparato fonador.

\begin{ejemplo}[Cálculo de latencia perceptiva en un sistema interactivo]
Si una pantalla táctil responde a un toque en menos de $\tau_P \approx 100\text{ ms}$, el cerebro humano fusiona acción y reacción en un único evento causal inmediato. A partir de $200\text{--}300\text{ ms}$, el retraso rompe la sensación de manipulación directa. Cuando una respuesta supera $1000\text{ ms}$ sin indicador de progreso, la memoria de trabajo empieza a perder el hilo de la tarea y el usuario repite la pulsación por error.
\end{ejemplo}

A partir del MHP surgieron familias de modelos predictivos de tareas sin errores como **GOMS** (*Goals, Operators, Methods, Selection rules*) y su variante simplificada **KLM** (*Keystroke-Level Model*), que suman tiempos elementales de pulsación ($K \approx 0.20\text{ s}$), apuntado ($P \approx 1.10\text{ s}$), preparación mental ($M \approx 1.35\text{ s}$) y respuesta del sistema ($R$). Aunque KLM nació para teclados y ratones, su lógica modular sigue empleándose para comparar si una orden de voz de tres segundos resulta más eficiente que cinco toques en un menú móvil.

## Leyes cuantitativas de la interacción

Los modelos cognitivos cualitativos se complementan con tres leyes empíricas procedentes de la psicofísica y la teoría de la información que permiten dimensionar botones, menús y trayectorias en cualquier paradigma.

### Ley de Fitts y formulación de Shannon

\mnota{Fitts (1954) aplicó el teorema de Shannon-Hartley al sistema motor humano.}En 1954, Paul Fitts estudió la velocidad y precisión de movimientos dirigidos de la mano y formuló que el tiempo necesario para alcanzar un objetivo de anchura $W$ situado a distancia $D$ crece logarítmicamente con la relación entre distancia y tolerancia \parencite{fitts1954information}. Décadas después, \textcite{mackenzie1992fitts} consolidó la formulación de Shannon por su mejor ajuste experimental y porque evita índices negativos cuando $D < W$:

\begin{ley}[Ley de Fitts (formulación de Shannon)]
El tiempo medio de movimiento $MT$ para adquirir un objetivo unidimensional viene dado por:
$$MT = a + b \cdot ID, \qquad ID = \log_2\left(\frac{D}{W} + 1\right)$$
donde $ID$ es el \textbf{índice de dificultad} medido en bits, $a$ recoge la latencia fija de inicio/parada muscular (ms) y $b = 1/IP$ es la inversa del índice de rendimiento motor (ms/bit). El \textbf{throughput} efectivo del dispositivo se define como $TP = ID_e / MT$, calculado con la anchura efectiva $W_e = 4.133\,\sigma_x$ ajustada a la dispersión real de los impactos del usuario.
\end{ley}

¿Por qué importa tanto esta ecuación en Nuevos Paradigmas de Interacción? Porque los coeficientes $a$, $b$ y $W_e$ cambian drásticamente al abandonar el ratón de escritorio:

- **Pantallas táctiles:** el dedo carece de cursor de un píxel y ocluye parcialmente el objetivo al acercarse (problema del "dedo grueso"). Esto incrementa la dispersión $\sigma_x$ y obliga a diseñar áreas táctiles mínimas de $9\text{--}10\text{ mm}$ ($48\text{ dp}$ en Material Design) para mantener la tasa de error por debajo del $4\%$.
- **Punteros aéreos (Leap Motion, mandos RV):** al desaparecer la superficie de apoyo mecánico para la muñeca, entra en juego el temblor fisiológico de la extremidad superior, elevando tanto $a$ como $b$ y reduciendo el *throughput* respecto al ratón clásico (de $\sim 4\text{--}5\text{ bits/s}$ en ratón a $\sim 1.5\text{--}2.5\text{ bits/s}$ en aire libre).

\begin{figure}[H]
  \centering
  \includegraphics[width=\linewidth]{media/fig_01_fitts_hick.png}
  \caption{Curvas comparativas de rendimiento motor según la Ley de Fitts para distintos dispositivos (izquierda) y análisis cognitivo amplitud-profundidad mediante la Ley de Hick-Hyman (derecha).}
  \label{fig:fitts_hick}
\end{figure}

### Ley de Hick-Hyman

Mientras Fitts modela el esfuerzo motor de alcanzar un blanco visible, la **Ley de Hick-Hyman** \parencite{hick1952rate} cuantifica el tiempo de decisión cognitiva $RT$ cuando el usuario debe elegir una alternativa entre $n$ estímulos equiprobables:

$$RT = a + b \log_2(n + 1)$$

Si las opciones tienen probabilidades desiguales $p_i$, el término $\log_2(n+1)$ se sustituye por la entropía de Shannon de la distribución: $H = -\sum_{i=1}^n p_i \log_2 p_i$. Por eso situar las tres acciones más frecuentes al inicio o en accesos directos reduce drásticamente el tiempo medio de selección aunque el menú total siga siendo amplio. Como muestra el panel derecho de la Figura \ref{fig:fitts_hick}, dividir un menú muy extenso en jerarquías solo compensa cuando el ahorro de entropía supera el coste fijo $a$ de transición entre niveles (y el coste motor asociado).

### Ley de dirección (Steering Law)

No toda interacción consiste en pulsar botones aislados; trazar un gesto continuo, recorrer un submenú desplegable en cascada o mover una herramienta dentro de un pasillo estrecho exige controlar una trayectoria completa. \textcite{accot1997beyond} derivaron la **Ley de dirección** (*Steering Law*) integrando la ley de Fitts a lo largo de un túnel curvo $C$ de anchura variable $W(s)$:

$$T = a + b \int_C \frac{ds}{W(s)}$$

Para un túnel recto de longitud $A$ y anchura constante $W$, la expresión se simplifica a $T = a + b (A/W)$. Nótese que, a diferencia del apuntado puntual, el tiempo crece **linealmente** con $A/W$ y no logarítmicamente: duplicar la longitud de un túnel o estrecharlo a la mitad duplica el tiempo de recorrido y dispara la probabilidad de salirse del carril. En interfaces aéreas y en realidad virtual, esta ley desaconseja los submenús lineales anidados a favor de menús radiales (*pie menus*), donde la distancia $A$ es mínima y el ángulo de apertura ofrece un corredor mucho más ancho.

## Usabilidad, diseño universal y accesibilidad inclusiva

\mnota{Guía Docente UGR: la inclusión para diversidad funcional tiene peso explícito en la evaluación de NPI.}Más allá de la eficiencia matemática, un sistema interactivo fracasa si excluye a parte de sus usuarios potenciales o les exige memorizar convenciones opacas. Para auditar el diseño de cualquier interfaz, la literatura clásica sintetiza tres marcos complementarios:

1. **Las ocho reglas de oro de \textcite{shneiderman2016designing}:** consistencia interna, atajos universales para expertos, retroalimentación informativa, diálogos con cierre claro, prevención y recuperación sencilla de errores, reversibilidad fácil de acciones, locus de control interno (el usuario dirige a la máquina, nunca al revés) y reducción de la carga en memoria a corto plazo.
2. **Las diez heurísticas de Nielsen:** visibilidad del estado del sistema, correspondencia con el mundo real, control y libertad del usuario, consistencia y estándares, prevención de errores, reconocimiento antes que recuerdo, flexibilidad y eficiencia, diseño minimalista, ayuda clara ante errores y documentación contextual.
3. **Los siete principios del Diseño Universal (Ronald Mace, NCSU):** uso equitativo, flexibilidad de uso, uso simple e intuitivo, información perceptible por varios canales, tolerancia al error, bajo esfuerzo físico y dimensiones espaciales apropiadas para el alcance y postura de cualquier persona.

En la práctica de los nuevos paradigmas, la accesibilidad deja de ser un añadido tardío para convertirse en motor de diseño. Una interfaz de punto de información que solo ofrece una pantalla táctil alta margina a usuarios en silla de ruedas y a personas con baja visión; si añade interacción oral, guiado háptico por vibración y gestos aéreos configurables, no solo se vuelve inclusiva para la diversidad funcional, sino más cómoda para cualquier visitante que cargue bolsas o tenga las manos ocupadas.

\begin{practica}[Puente con la ETSIIT: diseño inclusivo multimodal]
Al concebir el punto de información de la ETSIIT, las leyes de este capítulo dictan decisiones concretas:
\begin{itemize}
  \item \textbf{Fitts en aire libre:} en TouchFree/Leap Motion los objetivos interactivos deben ser grandes ($W$ generosa) y agrupados en el centro ergonómico para compensar la menor precisión del puntero sin apoyo.
  \item \textbf{Hick-Hyman en voz:} un menú hablado nunca debería enumerar más de 4 o 5 opciones seguidas porque el almacén auditivo ($\sim 1.5\text{ s}$) y la memoria de trabajo colapsan antes que la vista.
  \item \textbf{Accesibilidad multisensorial:} combinar voz (TTS/ASR), pantalla de alto contraste y vibración diferenciada en móvil cubre simultáneamente barreras visuales, motoras y auditivas.
\end{itemize}
\end{practica}
