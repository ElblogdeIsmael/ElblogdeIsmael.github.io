# Creatividad, diseño centrado en personas y selección de ideas

\epigrafe{No puedes resolver un problema con el mismo nivel de pensamiento que lo creó.}{Albert Einstein (citado en el programa de creatividad aplicada UGR)}

\begin{hojaruta}
\begin{itemize}
  \item Distinguir entre creatividad divergente, invención técnica e innovación rentable en el mercado.
  \item Aplicar las técnicas sistemáticas de ideación y evaluación crítica (SCAMPER, Seis Sombreros de De Bono, ideación visual y Design Thinking).
  \item Construir filtros objetivos de selección (matriz de Timmons, criterios de mercado, técnicos y de economía unitaria) antes de invertir en desarrollo.
  \item Evitar los errores cognitivos más frecuentes al enamorarse de una idea técnica sin validación previa.
\end{itemize}
\end{hojaruta}

## De la creatividad a la innovación empresarial

Una idea brillante encerrada en un cuaderno o en un repositorio privado de código carece de valor económico. La dirección estratégica distingue con rigor tres conceptos que suelen mezclarse en las presentaciones tempranas:

\begin{concepto}{Creatividad, invención e innovación}
\textbf{Creatividad} es la capacidad humana de generar asociaciones nuevas y útiles frente a un problema abierto. \textbf{Invención} es la materialización técnica de esa idea en un artefacto, algoritmo o proceso inédito. \textbf{Innovación} solo ocurre cuando esa invención supera la fricción de adopción, se integra en un modelo de negocio sostenible y genera retorno económico o impacto social medible en usuarios reales.
\end{concepto}

Edward de Bono contrapuso en 1967 el **pensamiento vertical o convergente** (lógico, analítico, secuencial, orientado a depurar una solución única dentro de reglas dadas) al **pensamiento lateral o divergente** (exploratorio, asociativo, orientado a romper supuestos implícitos antes de juzgar). Un equipo creador necesita alternar ambos modos sin confundir el momento de cada uno: juzgar prematuramente durante la divergencia mata las opciones menos obvias, mientras que divergir sin converger paraliza cualquier lanzamiento.

En el ámbito tecnológico y empresarial suelen operar cuatro bloqueos que frenan la generación de oportunidades valiosas:

1. **Inercia perceptiva y miopía de categoría:** definir la actividad por el soporte actual ("fabricamos libros de texto impresos" en lugar de "resolvemos el aprendizaje universitario") impide ver sustitutos emergentes.
2. **Aversión al error temprano:** la cultura académica penaliza el fallo único en examen; la creación de empresas premia el experimento barato que descarta pronto una hipótesis equivocada.
3. **Sesgo de confirmación (*confirmation bias*):** preguntar a amigos y familiares si les gusta nuestra idea produce cortesía social, nunca intención real de compra.
4. **Confusión entre característica técnica y beneficio percibido:** el cliente no compra un modelo de lenguaje cuantizado ni una arquitectura en contenedores; compra ahorrar tres horas semanales de revisión documental sin riesgo legal.

## Técnicas estructuradas de generación y contraste de ideas

Para sistematizar el paso de una intuición vaga a conceptos evaluables, el manual del Tema 2 de la UGR y la literatura de diseño combinan herramientas de expansión creativa con métodos de evaluación equilibrada.

### Lista de atributos y método SCAMPER

Creada por Bob Eberle a partir del listado de preguntas de Alex Osborn, la técnica **SCAMPER** fuerza siete transformaciones explícitas sobre un producto, servicio o proceso ya existente para descubrir nichos desatendidos:

- **S — Sustituir:** cambiar componentes, materiales, canales de entrega o perfiles de usuario (sustituir el aula física por micro-lecciones interactivas en el móvil).
- **C — Combinar:** fusionar dos propuestas separadas en una sola experiencia (combinar gestión de citas clínicas con historia digital compartida y recordatorio automatizado).
- **A — Adaptar:** trasladar un mecanismo que funciona en otro sector hacia el propio (adaptar la tarificación por uso del almacenamiento en nube al alquiler de maquinaria agrícola).
- **M — Modificar / Magnificar / Minimizar:** alterar escala, velocidad, frecuencia o peso (empaquetar un máster de 60 créditos en píldoras certificables de 4 horas).
- **P — Proponer otros usos:** explorar qué nuevo segmento aprovecharía un subproducto actual (convertir la infraestructura interna de cómputo de Amazon en servicio al público con AWS).
- **E — Eliminar:** suprimir características que encarecen el producto pero que la mayoría no valora (eliminar recepciones físicas en hoteles urbanos con acceso mediante código móvil).
- **R — Reordenar / Invertir:** alterar el orden temporal del flujo o quién asume la tarea (invertir el modelo de restaurante con comida preparada lista antes de llegar).

### Los Seis Sombreros para Pensar y el embudo de selección

Cuando un equipo fundador discute una idea sin método, suelen enfrentarse personalidades (el optimista frente al escéptico crónico) en lugar de analizar dimensiones complementarias. La técnica de **Edward de Bono** obliga a que todo el grupo adopte simultáneamente el mismo prisma durante intervalos cortos de entre cinco y diez minutos. La Figura \ref{fig:matriz-bono} integra este protocolo con los tres filtros básicos de viabilidad temprana.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_matriz_filtros_bono.tex}
  \caption{Protocolo de evaluación por seis sombreros (De Bono) y embudo en tres filtros previos al plan formal.}
  \label{fig:matriz-bono}
\end{figure}

Este doble esquema evita el bloqueo típico de las reuniones de socios: cuando todos llevan el **sombrero negro**, hasta el fundador más entusiasta colabora en listar fallos críticos; cinco minutos después, bajo el **sombrero verde**, hasta el perfil más conservador debe proponer maneras de sortear cada objeción sin censura previa.

## Design Thinking: iteración desde la empatía hasta el prototipo

Popularizado por Tim Brown (IDEO) y la escuela d.school de Stanford, el **Design Thinking** invierte el orden habitual de los proyectos técnicos. En lugar de especificar requisitos cerrados en un despacho, exige observar conductas reales en el terreno, redefinir el problema raíz, idear múltiples alternativas, construir prototipos baratos y someterlos a prueba antes de escribir código definitivo o contratar proveedores. La Figura \ref{fig:design-thinking} recoge las cinco fases iterativas y los bucles de retorno cuando una prueba invalida el encuadre previo.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_design_thinking.tex}
  \caption{Proceso iterativo en cinco fases del Design Thinking con bucles de validación temprana.}
  \label{fig:design-thinking}
\end{figure}

Conviene comprender bien qué aporta cada etapa:

1. **Empatizar:** observar en silencio qué hace realmente la persona (no solo qué dice en una encuesta). En diseño B2B, acompañar una mañana a un administrativo revela hojas de cálculo ocultas que jamás aparecerían en una entrevista telefónica.
2. **Definir (Punto de Vista, *POV*):** sintetizar los hallazgos en una declaración accionable de tres piezas: *usuario específico* + *necesidad profunda (verbo)* + *hallazgo sorprendente (insight)*.
3. **Idear:** generar volumen amplio de soluciones mediante bocetos rápidos (*crazy eights*, *brainwriting*) antes de votar las más viables y diferenciales.
4. **Prototipar:** construir el artefacto mínimo que permita sentir la solución (*wireframes* en papel, maquetas clicables en Figma, servicio manual "mago de Oz"). Si cuesta más de unas horas o unos días en fase exploratoria, el prototipo es demasiado caro.
5. **Evaluar (*Testear*):** entregar el prototipo al usuario sin defenderlo ni explicarlo paso a paso. El silencio incómodo donde el usuario duda revela exactamente qué parte del modelo fracasa.

\begin{claseugr}{Por qué Design Thinking precede al Canvas y al Plan}
El error más caro en un trabajo de Creación de Empresas consiste en abrir una hoja de cálculo financiera sobre un problema inventado. Empatizar y definir aseguran que el segmento elegido sufre un dolor frecuente e intenso; solo después tiene sentido poblar el Lienzo Canvas y calcular el punto muerto.
\end{claseugr}

## Criterios objetivos para seleccionar y priorizar ideas

Cuando sobre la mesa hay cuatro o cinco conceptos candidatos, la intuición suele inclinarse por el que suena más sofisticado o resulta más cómodo de programar. Para neutralizar ese sesgo, la metodología docente emplea una **matriz ponderada de filtrado** inspirada en los criterios de Jeffry Timmons:

| Criterio de evaluación | Peso orientativo | Preguntas de contraste empírico | Señal de alerta (descarte o pivote) |
| :--- | :---: | :--- | :--- |
| Intensidad del problema | 25% | ¿Es un dolor urgente ("analgésico") o un capricho estético ("vitamina")? | El cliente dice "suena interesante" pero no paga ni dedica tiempo hoy a resolverlo. |
| Ventana y tendencia | 15% | ¿Qué cambio regulatorio, demográfico o tecnológico habilita la solución justo ahora? | Mercado estancado, hiperconcentrado o dependiente de un hábito que aún tardará 10 años. |
| Economía unitaria | 25% | ¿El margen bruto por cliente supera con holgura su coste de captación? | Solo salen las cuentas asumiendo millones de usuarios gratuitos sin ruta de monetización. |
| Barreras y ventaja | 20% | ¿Qué impide que un gigante o un competidor local copie la oferta en 90 días? | Cero efecto de red, cero datos propios, cero propiedad intelectual o coste de cambio nulo. |
| Encaje con el equipo | 15% | ¿Dominamos las habilidades clave o sabemos quién puede aportarlas con compromiso? | Equipo puramente técnico sin contacto comercial o viceversa sin capacidad de ejecución. |

\begin{enfoqueti}{El síndrome de la "solución buscando problema"}
En informática resulta tentador partir de una tecnología de moda —un agente autónomo, una red blockchain, un visor de realidad mixta— y salir a buscar qué industria podría adoptarla. Salvo en investigación pura de largo plazo, ese punto de partida suele conducir a productos vistosos con retención nula al trigésimo día. Una regla higiénica consiste en redactar primero la ficha del problema sin mencionar ninguna tecnología concreta durante el primer párrafo; si el dolor sigue pareciendo evidente e importante sin la palabra de moda, la oportunidad existe.
\end{enfoqueti}

\begin{casoreal}{De las entrevistas con padres al enfoque de SokraKids}
En proyectos educativos orientados a familias (como el caso SokraKids trabajado en prácticas), los equipos técnicos tienden inicialmente a imaginar plataformas con decenas de minijuegos adaptativos y analítica predictiva compleja. Sin embargo, al contrastar la propuesta con padres y centros escolares surgen fricciones muy distintas: saturación de pantallas, desconfianza ante la privacidad infantil y falta de tiempo real de las familias entre semana. Redefinir la oportunidad desde la empatía desplaza el producto hacia actividades guiadas breves, transparentes para las familias y medibles en progreso lector o lógico semanal, recortando a la mitad la complejidad técnica inicial.
\end{casoreal}

\begin{sintesis}
\begin{itemize}
  \item \textbf{Delimitación:} la creatividad genera opciones; la invención las materializa técnicamente; la innovación captura valor repetible en el mercado.
  \item \textbf{Divergencia y crítica:} SCAMPER expande alternativas sobre ofertas existentes y los Seis Sombreros separan el optimismo, la emoción y el juicio crítico en turnos ordenados.
  \item \textbf{Design Thinking:} obliga a empatizar, definir un punto de vista accionable y validar prototipos baratos antes de programar la solución definitiva.
  \item \textbf{Selección:} una matriz ponderada (dolor tipo "analgésico", ventana temporal, economía unitaria, defendibilidad y encaje de equipo) frena el sesgo hacia soluciones técnicamente vistosas pero comercialmente débiles.
\end{itemize}
\end{sintesis}
