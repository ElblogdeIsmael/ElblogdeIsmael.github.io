# Prólogo {.unnumbered}

\inicial{D}{urante} más de cuatro décadas, la informática de consumo convivió con una ficción cómoda: sentar al usuario frente a un escritorio rígido, entregarle un teclado alfanumérico y un ratón de dos botones, y pedirle que tradujera cualquier intención humana a clics sobre rectángulos planos. Ese modelo, conocido como WIMP (*Windows, Icons, Menus, Pointer*), funcionó bien mientras el ordenador ocupaba una mesa fija y las tareas cabían en hojas de cálculo o editores de texto. Cuando los dispositivos salieron del escritorio para meterse en el bolsillo, colgarse frente a los ojos o integrarse en la arquitectura de un edificio, la metáfora de la ventana empezó a hacer aguas.

La asignatura **Nuevos Paradigmas de Interacción** (código 296114C, impartida en la ETSIIT de la Universidad de Granada dentro de la especialidad de Computación y Sistemas Inteligentes) estudia precisamente qué ocurre cuando la interfaz abandona la pantalla plana y entra en el espacio físico, el movimiento corporal, el entorno acústico y el contexto ambiental.

Este libro recoge toda la base teórica de la materia con el rigor de un manual técnico, pero sin perder de vista por qué importa cada modelo cuando toca programar una aplicación real. Cada capítulo conecta los teoremas y marcos formales de la literatura de referencia con los problemas de ingeniería que aparecen al construir interfaces naturales: desde la deriva de un giroscopio MEMS o el conflicto vergencia-acomodación en unas gafas de realidad aumentada, hasta la gestión de un diálogo hablado en un pasillo ruidoso de la facultad.

\begin{figure}[H]
  \centering
  \includegraphics[width=0.92\linewidth]{media/fig_00_editorial_nui.jpg}
  \caption{Convergencia de modalidades en las interfaces naturales de usuario: geometría espacial en 3D, propagación acústica y nodos sensoriales distribuidos.}
  \label{fig:editorial_nui}
\end{figure}

## Estructura de la obra y fuentes

El programa oficial se organiza en seis capítulos troncales y dos apéndices integradores, respaldados por la bibliografía básica y complementaria de la guía docente:

- **Capítulo 1 (Interacción Hombre-Máquina):** computación interactiva frente a algoritmia clásica \parencite{goldin2006interactive}, ciclo cognitivo de \textcite{norman2013design}, Procesador Humano de Información \parencite{card1983psychology}, leyes cuantitativas de Fitts, Hick-Hyman y dirección, heurísticas de usabilidad y diseño inclusivo.
- **Capítulo 2 (Paradigmas, estilos y nuevos dispositivos):** evolución histórica hacia las interfaces naturales (NUI), taxonomía de estilos, fusión multimodal temprana y tardía \parencite{oviatt1999ten,lopezcozar2005spoken}, fisiología háptica \parencite{kortum2008hci}, superficies capacitivas multitáctiles, seguimiento ocular e interfaces cerebro-computador.
- **Capítulo 3 (Entornos virtuales: RV y RA):** continuo de Milgram y Kishino, pilares de \textcite{sherman2018understanding}, óptica estereoscópica y guías de onda \parencite{hainich2009end}, seguimiento espacial 6DoF, presupuesto de latencia *motion-to-photon* y metáforas de interacción 3D \parencite{bowman2004user,lavalle2023vr}.
- **Capítulo 4 (Interacción basada en gestos y movimiento):** taxonomía gestual, fatiga biomecánica (*brazo de gorila* y *Consumed Endurance*), sensores inerciales y filtro complementario, sensores ópticos de profundidad \parencite{webb2012kinect}, modelo cinemático de Leap Motion/TouchFree y algoritmos de reconocimiento (DTW, reconocedores $\$1$ y HMM).
- **Capítulo 5 (Computación ubicua):** *Calm Technology* \parencite{weiser1991computer}, computación sensible al contexto \parencite{dey2001understanding}, arquitectura sensorial en Android (`SensorManager`), GNSS/WGS84, balizas BLE, barómetro diferencial, geovallado con histéresis y sistemas distribuidos multi-dispositivo \parencite{krumm2018ubiquitous}.
- **Capítulo 6 (Sistemas de diálogo e interacción oral):** asimetrías cognitivas del habla \parencite{hempel2008usability}, cadena ASR-NLU-DM-NLG-TTS, gestión de iniciativa mixta y *grounding* \parencite{mctear2016conversational}, robustez comercial \parencite{suendermann2011advances}, diálogo multilingüe y evaluación con PARADISE \parencite{lopezcozar2005spoken,walker1997paradise}.
- **Apéndices A y B:** arquitectura de síntesis aplicada al punto de información accesible de la ETSIIT y banco comentado de cuestiones de autoevaluación.
