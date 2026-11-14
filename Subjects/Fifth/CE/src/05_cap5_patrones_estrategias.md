# Patrones de negocio, plataformas y Networking 2.0

\epigrafe{Gran parte de los negocios verdaderamente transformadores no inventan una tecnología nueva; combinan un patrón de negocio probado con una capacidad emergente.}{Síntesis del enfoque de patrones de Osterwalder y Gassmann}

\begin{hojaruta}
\begin{itemize}
  \item Analizar los cinco patrones maestros de modelos de negocio sistematizados por Osterwalder y Pigneur.
  \item Entender la economía de la Desagregación, la Larga Cola, las Plataformas Multilaterales, el modelo Gratis/Freemium y la Innovación Abierta.
  \item Incorporar el repertorio estratégico del Tema 4 oficial: alianzas, crecimiento, internacionalización y redes digitales (\textit{Networking 2.0}).
  \item Aprender a combinar varios patrones sobre un mismo Lienzo sin romper el círculo virtuoso.
\end{itemize}
\end{hojaruta}

## Por qué estudiar patrones antes de reinventar desde cero

La ingeniería del software popularizó en los años noventa los patrones de diseño como soluciones reutilizables a problemas arquitectónicos recurrentes. En diseño empresarial ocurre exactamente lo mismo: gran parte de los lanzamientos exitosos no inventa mecanismos inéditos de captura de valor, sino que traslada un **patrón de modelo de negocio** probado en una industria hacia otra donde los incumbentes siguen anclados en el esquema tradicional.

Osterwalder y Pigneur recopilaron cinco grandes familias de patrones estructurales que constituyen el núcleo del análisis avanzado de modelos en la asignatura, ampliados posteriormente por Oliver Gassmann en el *St. Gallen Business Model Navigator*. Dominar su lógica evita gastar meses redescubriendo restricciones económicas que ya tienen nombre y solución documentada.

## Patrón 1: Desagregación (*Unbundling*)

Inspirado en los trabajos de John Hagel III y Marc Singer (1999), este patrón sostiene que dentro de muchas empresas grandes conviven forzadamente **tres negocios con economías, culturas y dinámicas competitivas irreconciliables**: la gestión de infraestructura, la innovación de producto y la relación con clientes. La Figura \ref{fig:pat-unbundling} expone sus tensiones estructurales.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_unbundling.tex}
  \caption{Patrón de Desagregación: los tres tipos de negocio incompatibles bajo un mismo techo corporativo.}
  \label{fig:pat-unbundling}
\end{figure}

- **Gestión de infraestructura:** exige tamaño gigantesco, estandarización extrema y obsesión por diluir costes fijos (redes de telecomunicación, fábricas de semiconductores como TSMC, redes logísticas, centros de datos cloud).
- **Innovación de producto:** depende de ciclos rápidos, talento creativo autónomo y tolerancia al fallo para llegar primero con novedades de alto margen (estudios de diseño, laboratorios biotecnológicos, creadores de videojuegos).
- **Relación con clientes:** busca capturar el mayor porcentaje del gasto anual del cliente mediante confianza personal, marcas de asesoría y amplia cartera de terceros (banca privada, plataformas de intermediación comercial).

Cuando una compañía intenta destacar simultáneamente en las tres dimensiones, la burocracia de la infraestructura frena a los innovadores y los costes de personalización hunden los márgenes de escala. Por ello, los operadores de telecomunicaciones europeos separaron sus torres físicas (Cellnex) de la operación de marca comercial, y la banca moderna separa cada vez más la infraestructura regulada (*Banking-as-a-Service*) de la relación móvil con el usuario final.

## Patrón 2: La Larga Cola (*Long Tail*)

Formulado por Chris Anderson en 2004, el patrón de Larga Cola rompe la tiranía histórica del espacio limitado en estanterías físicas o parrillas de emisión. En una librería tradicional o cadena musical de los años noventa, exhibir cada referencia tenía un coste fijo elevado; por eso el comercio aplicaba la regla de Pareto concentrándose en el 20\% de títulos superventas (*hits*).

Cuando la digitalización, la impresión bajo demanda y la logística centralizada reducen casi a cero el coste marginal de mantener un producto adicional en catálogo, las curvas de demanda muestran una propiedad decisiva ilustrada en la Figura \ref{fig:pat-longtail}: **la suma agregada de millones de nichos que apenas venden unas pocas unidades al año iguala o supera el volumen del bloque de superventas**.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_long_tail.tex}
  \caption{Modelo de Larga Cola (Chris Anderson): superventas de cabeza estrecha frente al valor acumulado de miles de nichos.}
  \label{fig:pat-longtail}
\end{figure}

Para que una Larga Cola resulte viable hacen falta dos ingredientes obligatorios que suelen olvidarse al copiar el modelo:

1. **Coste de inventario y distribución casi nulo** (catálogo digital, fabricación bajo pedido como *print-on-demand* en Lulu.com, o proveedores externos en *dropshipping* gestionado).
2. **Motores eficaces de filtrado y descubrimiento** (recomendadores algorítmicos, reseñas verificadas y buscadores precisos): tener un millón de artículos invisibles no sirve de nada si el usuario no encuentra el que coincide con su gusto específico.

## Patrón 3: Plataformas Multilaterales (*Multi-Sided Platforms*)

Las plataformas multilaterales crean valor actuando como intermediarias directas entre dos o más grupos diferenciados e interdependientes. El valor para un usuario de un lado crece conforme aumenta el número y la calidad de participantes en el otro lado, fenómeno conocido como **efectos de red cruzados o indirectos**. La Figura \ref{fig:pat-plataforma} muestra esta dinámica junto al dilema crítico de arranque.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_plataforma_multilateral.tex}
  \caption{Arquitectura de Plataforma Multilateral: subsidio asimétrico, efectos de red cruzados y problema del huevo y la gallina.}
  \label{fig:pat-plataforma}
\end{figure}

\begin{trampa}{El problema del huevo y la gallina y la estrategia del subsidio}
Toda plataforma nueva sufre una trampa inicial mortal: ningún proveedor entra si no hay compradores, y ningún comprador vuelve si el catálogo está vacío. Para romper el bloqueo, los diseñadores de plataformas aplican dos reglas clásicas: \textbf{(a) subvencionar al lado más sensible al precio o más difícil de atraer} (por ejemplo, usuarios gratuitos en Google o comisiones cero temporales para restaurantes iniciales), monetizando al lado que obtiene retorno directo por acceder a esa masa crítica; y \textbf{(b) arrancar acotando un micro-nicho geográfico o temático} (una sola ciudad universitaria en Uber o Facebook, o una categoría única) en lugar de lanzar en todo el país simultáneamente.
\end{trampa}

## Patrón 4: GRATIS como modelo de negocio (*Freemium* y *Cebo y Anzuelo*)

Popularizado igualmente por Chris Anderson (*Free*, 2009), el patrón **GRATIS** demuestra que ofrecer una propuesta sin coste monetario directo al usuario final no es filantropía, sino una arquitectura deliberada donde al menos un segmento recibe el servicio gratis de forma permanente porque otro segmento (o el mismo usuario más adelante) financia todo el sistema. La Figura \ref{fig:pat-freemium} contrasta el embudo **Freemium** con las tres variantes estructurales del patrón.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_freemium_embudo.tex}
  \caption{El patrón GRATIS: economía matemática del embudo Freemium y las tres variantes de subvención cruzada.}
  \label{fig:pat-freemium}
\end{figure}

1. **Oferta gratuita financiada por plataforma multilateral (publicidad o datos):** el lector no paga la prensa digital o el buscador porque los anunciantes compran atención segmentada.
2. **Modelo Freemium:** todo el mundo accede indefinidamente a una versión funcional gratuita, mientras una minoría de pago (habitualmente entre el 2\% y el 8\% en servicios de consumo, y hasta el 10--15\% en B2B) contrata funciones avanzadas, límites mayores o soporte prioritario. La viabilidad exige que servir al usuario gratuito tenga un coste marginal mínimo (almacenamiento o ancho de banda digital).
3. **Cebo y anzuelo (*Bait & Hook*):** se vende el soporte principal a precio muy bajo o con pérdida controlada (impresoras domésticas, maquinillas, consolas de videojuegos, cafeteras promocionales) para capturar margen recurrente muy elevado sobre consumibles cautivos o licencias posteriores (cartuchos, cuchillas, videojuegos o cápsulas).

\begin{casoreal}{Skype y la economía del coste marginal cero en comunicaciones}
Cuando Skype irrumpió en telefonía internacional frente a las operadoras tradicionales, ofreció llamadas gratuitas de ordenador a ordenador (P2P sin red conmutada propia), atrayendo decenas de millones de usuarios con un gasto de servidor mínimo. Alrededor del 90\% de su base jamás pagó un céntimo, pero el 5\%--10\% que compró crédito \textbf{SkypeOut} para llamar a teléfonos fijos y móviles tradicionales financió con creces toda la infraestructura de la compañía hasta convertirla en líder global de tráfico internacional de voz antes de ser adquirida por eBay y posteriormente por Microsoft.
\end{casoreal}

## Patrón 5: Innovación Abierta (*Open Innovation*)

Acuñado por Henry Chesbrough en 2003, el patrón de **Innovación Abierta** sustituye el antiguo departamento hermético de I+D ("todo lo valioso debe inventarse dentro") por una membrana porosa bidireccional entre el laboratorio interno y el ecosistema externo (universidades, startups, proveedores e incluso competidores). La Figura \ref{fig:pat-open} representa ambos sentidos del flujo innovador.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_innovacion_abierta.tex}
  \caption{Patrón de Innovación Abierta (Chesbrough): flujos Outside-In de captación externa e Inside-Out de monetización hacia fuera.}
  \label{fig:pat-open}
\end{figure}

- **Innovación hacia dentro (*Outside-In*):** integrar ideas, patentes, APIs de terceros o equipos adquiridos fuera de la empresa para acortar plazos y dividir el riesgo de I+D. El programa *Connect + Develop* de Procter \& Gamble pasó en pocos años a generar más de la mitad de sus lanzamientos combinando descubrimientos externos con su formidable maquinaria comercial global.
- **Innovación hacia fuera (*Inside-Out*):** en lugar de archivar en un cajón las tecnologías o patentes que no encajan en el negocio principal, la empresa las licencia, las cede a socios o crea empresas derivadas (*spin-off*) para capturar ingresos extra y validar nuevos estándares.

## Estrategias de negocio y Networking 2.0 (Tema 4 UGR)

La Guía Docente oficial complementa estos cinco patrones de diseño con las decisiones estratégicas de crecimiento y posicionamiento relacional que sostienen una empresa naciente en sus tres primeros años:

### Vectores estratégicos de crecimiento y alianzas

Una empresa consolidada tras validar su encaje inicial dispone de cuatro rutas principales para crecer sin dispersar recursos:

1. **Penetración y fidelización:** aumentar frecuencia de compra o reducir rotación (*churn*) en los segmentos actuales mediante programas de suscripción o paquetes combinados.
2. **Extensión de mercado o internacionalización:** llevar una oferta probada a nuevas geografías o verticales aprovechando socios locales (*joint ventures*, franquicias, distribuidores regionales) antes de asumir filiales propias costosas.
3. **Estrategia de nicho frente a liderazgo en volumen:** una startup rara vez vence en guerra frontal contra un incumbente por precio generalista; vence dominando primero un nicho vertical desatendido y expandiéndose luego hacia nichos adyacentes.
4. **Alianzas estratégicas y *coopetición*:** acuerdos de distribución cruzada, integración tecnológica (*co-engineering*) o compra conjunta que multiplican el alcance sin diluir capital accionarial.

### Networking 2.0 y capital relacional digital

En la economía actual, la red de contactos del equipo fundador dejó de depender únicamente de ferias presenciales o cámaras de comercio. El **Networking 2.0** integra las plataformas digitales profesionales y las comunidades de conocimiento abierto dentro de la estrategia comercial y de captación de recursos:

- **Marca profesional y prueba social verificable:** mantener presencia técnica o sectorial sólida (LinkedIn orientado a problemas del cliente, publicaciones especializadas, repositorios abiertos en GitHub, charlas técnicas) reduce el coste de confianza en ventas B2B y atrae talento sin intermediarios costosos.
- **Construcción en público y comunidades de nicho:** compartir avances reales, métricas de aprendizaje o herramientas gratuitas atrae *early adopters* dispuestos a dar retroalimentación honesta y actuar como primeros prescriptores.
- **Ecosistemas de APIs e integraciones:** en negocios digitales, integrarse en directorios de socios (Shopify App Store, marketplaces de ERP, conectores CRM) transforma herramientas de terceros en canales estables de captación gratuita de demanda cualificada.

\begin{enfoqueti}{Combinar patrones de forma consciente sin crear un Frankenstein operativo}
Muchos proyectos tecnológicos potentes combinan exactamente dos patrones maestros bien engranados: por ejemplo, un SaaS B2B con código núcleo abierto (\textbf{Innovación Abierta} + \textbf{Freemium} autogestionado para desarrolladores individuales que actúan como prescriptores dentro de sus empresas) o un mercado educativo que usa contenidos gratuitos como imán SEO (\textbf{Larga Cola} + \textbf{Plataforma Multilateral}). Sin embargo, intentar activar tres o cuatro lógicas opuestas desde el día uno suele colapsar la capacidad de desarrollo y confundir el mensaje comercial. Conviene dominar primero un patrón principal y activar el segundo solo cuando el primero esté estabilizado.
\end{enfoqueti}

\begin{sintesis}
\begin{itemize}
  \item \textbf{Desagregación:} separar infraestructura, innovación y relación con clientes evita choques de cultura y de economía unitaria.
  \item \textbf{Larga Cola:} rentable únicamente cuando el coste de almacenamiento/entrega es mínimo y existen buenos filtros de descubrimiento.
  \item \textbf{Plataformas:} requieren gestionar efectos de red cruzados y resolver el bloqueo inicial subvencionando al lado más elástico.
  \item \textbf{GRATIS y Freemium:} requieren coste marginal cercano a cero para el usuario gratuito y conversión suficiente de clientes de pago o anunciantes.
  \item \textbf{Innovación Abierta y Networking 2.0:} aceleran el acceso a tecnología, alianzas y primeros clientes sin inflar costes fijos iniciales.
\end{itemize}
\end{sintesis}
