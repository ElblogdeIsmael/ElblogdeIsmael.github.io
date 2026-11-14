# Experimentación Lean Startup, abismo de mercado y escalado

\epigrafe{Una startup es una institución humana diseñada para crear un nuevo producto o servicio bajo condiciones de incertidumbre extrema.}{Eric Ries, \textit{The Lean Startup} (2011)}

\begin{hojaruta}
\begin{itemize}
  \item Aplicar el desarrollo de clientes de Steve Blank ("salir del edificio") y la gestión por hipótesis frente al plan estático.
  \item Dominar el circuito Construir--Medir--Aprender de Eric Ries, la tipología de Productos Mínimos Viables (MVP) y la taxonomía de los diez pivotes.
  \item Diferenciar métricas vanidosas de métricas accionables mediante cohortes y el embudo pirata AARRR.
  \item Analizar el abismo de Geoffrey Moore (\textit{Crossing the Chasm}) y la disrupción de Clayton Christensen para escalar sin estrellarse.
\end{itemize}
\end{hojaruta}

## Una startup no es una versión en pequeño de una gran empresa

Durante décadas se aplicaron a empresas recién nacidas las mismas herramientas de gestión diseñadas para corporaciones con cincuenta años de historia: presupuestos rígidos a cinco años, calendarios cerrados en cascada (*waterfall*) y evaluación del éxito por cumplimiento del plan inicial. **Steve Blank** desmontó ese supuesto en *The Four Steps to the Epiphany* (2005) con una tesis rotunda: mientras una gran empresa ejecuta un modelo de negocio **conocido** con clientes y métricas estables, una startup es una **organización temporal creada para buscar un modelo de negocio repetible y escalable**.

Tratar una fase de búsqueda con herramientas de ejecución conduce a construir perfectamente algo que nadie quiere comprar. Por eso Blank propone paralelizar el desarrollo técnico del producto con el **Desarrollo de Clientes (*Customer Development*)** en cuatro pasos iterativos:

1. **Descubrimiento de clientes:** salir del edificio para verificar que el problema y el segmento existen realmente antes de diseñar especificaciones definitivas.
2. **Validación de clientes:** comprobar que un grupo repetible de compradores firma pedidos o paga suscripciones bajo un esquema comercial replicable (si falla, se retrocede al paso 1 sin vergüenza).
3. **Creación de clientes:** una vez probada la economía unitaria, invertir en demanda escalable y cruzar hacia el mercado mayoritario.
4. **Construcción de la empresa:** transición hacia departamentos formales, organigrama estable y gestión causal tradicional.

## El método Lean Startup: Construir–Medir–Aprender

A partir de las ideas de Blank y del sistema de producción ajustada de Toyota (*Lean Manufacturing*), **Eric Ries** sistematizó en *The Lean Startup* (2011) un método científico para reducir el desperdicio máximo de cualquier proyecto naciente: **fabricar código o activos físicos para hipótesis no validadas**. La unidad de progreso de una startup no es la cantidad de funcionalidades programadas sino el **aprendizaje validado**: evidencia empírica sobre qué funciona para el cliente y cómo genera ingresos.

La Figura \ref{fig:lean-aarrr} une el motor iterativo **Construir–Medir–Aprender** con el embudo de métricas accionables **AARRR** de Dave McClure, mostrando cómo cada vuelta al bucle desemboca en una decisión binaria exigente: perseverar en la hipótesis actual o ejecutar un pivote estructurado.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_lean_bml_aarrr.tex}
  \caption{Circuito Construir--Medir--Aprender de Eric Ries acoplado al embudo de métricas pirata AARRR de Dave McClure.}
  \label{fig:lean-aarrr}
\end{figure}

El vehículo para dar la vuelta al circuito al mínimo coste es el **Producto Mínimo Viable (MVP)**: no es una versión defectuosa o chapucera del producto final, sino **la versión mínima que permite recoger el máximo aprendizaje validado con el menor esfuerzo**. Según la fase del proyecto, adopta formas muy diversas:

- **MVP de prueba de humo / vídeo explicativo:** antes de programar una sola línea compleja de sincronización distribuida, Drew Houston publicó un vídeo de tres minutos mostrando cómo funcionaría **Dropbox**; la lista de espera saltó de 5.000 a 75.000 correos en veinticuatro horas.
- **MVP Conserje:** el fundador ejecuta manualmente para los primeros tres o cinco clientes lo que en el futuro automatizará un algoritmo (por ejemplo, planificar compras semanales y enviar listas personalizadas por correo antes de crear el recomendador).
- **MVP Mago de Oz:** el cliente interactúa con una interfaz aparentemente automática, mientras en el *back-office* un humano procesa las peticiones en tiempo real para observar fricciones reales sin gastar meses de desarrollo en automatización.
- **MVP de una sola funcionalidad:** reducir la aplicación inicial a una única acción crítica (Foursquare arrancó solo con el *check-in* y puntos; el resto llegó tras validar el hábito).

## Contabilidad de la innovación, cohortes y tipos de pivote

Cuando las métricas iniciales estancan la conversión o la retención, la contabilidad tradicional solo dice que las ventas son bajas sin explicar por qué. La **contabilidad de la innovación** sustituye medias engañosas acumuladas por **análisis de cohortes** (separar qué porcentaje de usuarios llegados en la semana 1 frente a la semana 4 sigue activo al día 30) y **experimentos divididos A/B** para aislar el efecto real de cada cambio.

Si el experimento confirma que una hipótesis raíz es falsa, insistir más fuerte solo quema caja. Ries catalogó **diez tipos formales de pivote** (un cambio estratégico de rumbo manteniendo firme la visión general):

| Tipo de pivote | En qué consiste exactamente | Ejemplo clásico |
| :--- | :--- | :--- |
| *Zoom-in* (Acercamiento) | Una sola funcionalidad del producto actual se convierte en todo el producto. | Instagram nació como función fotográfica dentro de Burbn. |
| *Zoom-out* (Alejamiento) | La oferta actual pasa a ser solo un módulo dentro de una plataforma mayor. | Software único convertido en suite completa de gestión clínica. |
| Segmento de cliente | El producto resuelve el problema real, pero para otro perfil comprador distinto. | Herramienta concebida para consumidores adoptada por agencias B2B. |
| Necesidad del cliente | Descubrir durante entrevistas un dolor mucho más urgente del mismo segmento. | Slack nació de la herramienta interna de un estudio de videojuegos. |
| Plataforma | Pasar de aplicación puntual a infraestructura abierta para terceros (o viceversa). | Shopify evolucionando de tienda de tablas de snowboard a motor comercial. |
| Arquitectura de negocio | Saltar de margen alto / volumen bajo (B2B complejo) a margen bajo / volumen masivo (B2C). | Servicios consultivos convertidos en SaaS autogestionado. |
| Captura de valor | Rediseñar cómo se monetiza (suscripción, Freemium, comisión, licencia). | Prensa digital migrando de publicidad pura a muro de pago híbrido. |
| Motor de crecimiento | Cambiar entre crecimiento viral, pegajoso (retención) o pagado (CAC/LTV). | Sustituir publicidad cara por referidos incentivados estilo Dropbox. |
| Canal | Sustituir intermediarios lentos por venta directa web o viceversa. | Marcas de consumo directo saltando a distribución en grandes superficies. |
| Tecnología | Entregar la misma propuesta de valor sobre una arquitectura más rápida o barata. | Procesamiento local sustituido por inferencia en la nube o móvil. |

\begin{trampa}{El peligro del pivote disfrazado de cambio cosmético}
Cambiar el color del logotipo o mover un botón no es pivotar; y cambiar simultáneamente de cliente, de producto y de canal cada quince días sin medir resultados tampoco es Lean Startup, sino improvisación caótica. Todo pivote serio nace de una métrica de cohorte concreta que refutó la hipótesis previa.
\end{trampa}

## Cruzar el abismo (*Crossing the Chasm*, Geoffrey Moore)

Lograr que cien innovadores entusiasmados prueben una tecnología nueva engaña con facilidad al equipo fundador, haciéndole creer que la adopción masiva es cuestión de semanas. En *Crossing the Chasm* (1991), **Geoffrey Moore** demostró sobre la curva clásica de difusión de Everett Rogers que existe una fractura psicológica profunda entre los **primeros adoptantes (visionarios)** —que toleran productos incompletos si prometen ventaja radical— y la **mayoría temprana (pragmáticos)** —que exigen referencias fiables de pares de su mismo sector, ausencia de riesgos operativos y soporte completo antes de comprar. La Figura \ref{fig:crossing-chasm} representa esa grieta crítica.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_crossing_chasm.tex}
  \caption{Curva de adopción tecnológica y el Abismo de Geoffrey Moore entre el mercado temprano y la mayoría pragmática.}
  \label{fig:crossing-chasm}
\end{figure}

Para cruzar el abismo sin quedarse sin financiación a mitad de camino, Moore prescribe exactamente la táctica de la **bolera (*Bowling Alley*)**:

1. Seleccionar un **único nicho pragmático** estrecho donde un problema urgente esté sin resolver y los clientes hablen entre sí.
2. Entregar un **"producto completo" (*Whole Product*)** para ese nicho: no basta el software núcleo; hay que añadir documentación, integraciones contables, formación, soporte y garantías normativas para eliminar toda fricción al pragmático.
3. Usar la reputación ganada en ese primer nicho (primer bolo) para derribar nichos adyacentes hasta alcanzar el tornado de adopción mayoritaria.

## Innovación disruptiva de Clayton Christensen

Conviene cerrar este bloque distinguiendo dos términos que suelen usarse incorrectamente como sinónimos. Según **Clayton Christensen** (*The Innovator's Dilemma*, 1997), una tecnología no es disruptiva simplemente por ser muy avanzada o cara; al contrario, una mejora más rápida o precisa para clientes exigentes actuales suele ser una **innovación sostenida** donde casi siempre terminan ganando los líderes establecidos gracias a su balance y red comercial.

La **innovación disruptiva** genuina ocurre por dos vías inicialmente despreciadas por los gigantes del sector:

- **Disrupción desde gama baja (*low-end*):** ofrecer una solución suficientemente buena a coste radicalmente menor para los clientes menos exigentes a quienes el líder estaba sobre-atendiendo con funciones caras que no usan (el acero en mini-acerías o aerolíneas sin lujos).
- **Disrupción de nuevo mercado:** permitir que personas sin renta ni conocimientos previos consuman algo antes inaccesible (ordenadores personales frente a *mainframes*, o herramientas web de diseño para no diseñadores).

Mientras el incumbente ignora esos segmentos iniciales porque tienen márgenes bajos y tamaño pequeño, la solución disruptiva mejora su curva tecnológica a gran velocidad hasta capturar también al mercado principal.

\begin{enfoqueti}{Deuda técnica deliberada vs. código descartable en el MVP}
En un MVP para validar mercado conviene distinguir qué calidad de ingeniería exige cada componente: la seguridad básica (autenticación, protección de datos personales y pagos seguros a través de pasarelas certificadas como Stripe) nunca es negociable, pero diseñar desde el día uno clústeres multi-región o abstracciones prematuras retrasa semanas el contacto con el usuario. Usar herramientas \textit{low-code}, monorepos sencillos o bases de datos gestionadas acorta el ciclo Construir--Medir--Aprender; la refactorización y escalado de arquitectura llegan cuando el modelo ha demostrado encaje de mercado.
\end{enfoqueti}

\begin{sintesis}
\begin{itemize}
  \item \textbf{Búsqueda vs. ejecución:} las startups buscan un modelo repetible mediante el Desarrollo de Clientes de Blank antes de construir organigramas pesados.
  \item \textbf{MVP y aprendizaje:} medir progreso por hipótesis validadas con experimentos baratos, evitando métricas vanidosas y tomando decisiones mediante cohortes.
  \item \textbf{El abismo de Moore:} pasar de visionarios a pragmáticos exige conquistar un único nicho con un "producto completo" y referencias verificables entre pares.
  \item \textbf{Disrupción:} rara vez nace atacando al líder en su producto más rentable; suele empezar atendiendo con sencillez a no clientes o a la gama baja ignorada.
\end{itemize}
\end{sintesis}
