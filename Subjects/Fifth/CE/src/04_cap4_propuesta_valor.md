# Diseño de la propuesta de valor y ajuste con el cliente

\epigrafe{El cliente rara vez compra lo que la empresa cree que está vendiendo; contrata una solución para avanzar en su propia vida.}{Clayton M. Christensen, teoría de los \textit{Jobs to be Done}}

\begin{hojaruta}
\begin{itemize}
  \item Aplicar el Lienzo de la Propuesta de Valor (Osterwalder et al., 2014) para conectar la oferta con la demanda real.
  \item Descomponer el perfil del cliente en trabajos funcionales, sociales y emocionales, frustraciones y alegrías medibles.
  \item Distinguir los diez disparadores clásicos de creación de valor (novedad, rendimiento, personalización, diseño, precio, marca, reducción de riesgo y accesibilidad).
  \item Verificar los tres niveles de encaje: sobre papel, en mercado y en escala rentable.
\end{itemize}
\end{hojaruta}

## Anatomía del Lienzo de la Propuesta de Valor

El Business Model Canvas ofrece una vista aérea de toda la compañía, pero precisamente por esa amplitud deja poco espacio para examinar el corazón del sistema: el acoplamiento exacto entre la casilla de **Propuesta de Valor** y la de **Segmentos de Clientes**. Para ampliar ese zoom crítico, Alexander Osterwalder, Yves Pigneur, Greg Bernarda y Alan Smith desarrollaron el **Lienzo de la Propuesta de Valor** (*Value Proposition Design*, 2014), representado en la Figura \ref{fig:vpc-encaje}.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_value_proposition_canvas.tex}
  \caption{El Lienzo de la Propuesta de Valor: simetría entre el Mapa de Valor (izquierda) y el Perfil del Cliente (derecha).}
  \label{fig:vpc-encaje}
\end{figure}

El error más extendido al rellenar esta herramienta consiste en empezar por el cuadrado izquierdo enumerando funcionalidades del producto. El método riguroso obliga a caminar de derecha a izquierda: primero observar al cliente, clasificar sus prioridades reales y solo después seleccionar qué aliviadores y creadores merecen inversión técnica.

## El Perfil del Cliente: trabajos, frustraciones y alegrías

El círculo derecho descompone a cada segmento objetivo en tres planos observables:

### Trabajos del cliente (*Customer Jobs*)

Describen las tareas que las personas o empresas intentan completar en su vida laboral o cotidiana, siguiendo el enfoque de **Jobs to be Done** formulado por Clayton Christensen. Nunca son puramente técnicos; se clasifican en tres familias y una dimensión de apoyo:

- **Trabajos funcionales:** resolver una tarea concreta y tangible (emitir facturas conformes al reglamento Verifactu, cortar el césped, compilar pruebas automáticas antes de desplegar).
- **Trabajos sociales:** proyectar una imagen deseada ante terceros o evitar quedar desacreditado (parecer un proveedor solvente ante un comité de compras, ser percibido como padre atento en el colegio).
- **Trabajos emocionales:** alcanzar un estado anímico específico (sentir tranquilidad financiera al dormir, disfrutar autonomía profesional, reducir ansiedad ante una auditoría).
- **Trabajos de apoyo:** tareas periféricas derivadas de evaluar ofertas (*co-comprador*), transferir datos (*transferidor*) o cancelar suscripciones.

No todos los trabajos pesan lo mismo. Conviene ordenarlos en una escala de importancia entre trivial e indispensable, porque un producto brillante que resuelve un trabajo irrelevante fracasa igual que uno defectuoso.

### Frustraciones (*Pains*)

Recogen todo aquello que molesta antes, durante o después de intentar resolver el trabajo, o directamente impide siquiera intentarlo:

1. **Resultados y características no deseadas:** soluciones que funcionan mal, son lentas, aburridas o generan efecto rebote (un ERP potente pero con interfaz confusa que exige dos meses de formación).
2. **Obstáculos de entrada:** falta de presupuesto inicial, curva de aprendizaje empinada, trámites burocráticos o dependencias técnicas incompatibles.
3. **Riesgos temidos:** miedo a perder dinero, prestigio profesional, datos críticos de clientes o tiempo irrecuperable si la herramienta falla.

### Alegrías (*Gains*)

Describen los resultados positivos y aspiraciones concretas que el segmento busca o agradecería recibir al resolver el trabajo:

- **Alegrías necesarias:** requisitos mínimos sin los que ni siquiera consideran la oferta (que una aplicación bancaria no falle al transferir dinero).
- **Alegrías esperadas:** estándares básicos aunque no estrictamente funcionales (acabado cuidado, soporte en castellano, factura automática).
- **Alegrías deseadas:** beneficios que el cliente conoce y menciona cuando se le entrevista (integración nativa con su software contable).
- **Alegrías inesperadas:** atributos que el cliente no sabía pedir hasta verlos en acción (la rueda de selección táctil frente a botones múltiples, o las copias instantáneas sin configurar servidor).

## El Mapa de Valor y los diez palancas de creación de valor

Una vez jerarquizado el perfil del cliente, el cuadrado izquierdo diseña la respuesta empresarial estrictamente acotada a las prioridades top 3 o top 5 del segmento:

1. **Productos y servicios:** inventario de los componentes físicos, intangibles, digitales o financieros que componen la oferta (incluyendo versión gratuita si existe).
2. **Aliviadores de frustraciones (*Pain Relievers*):** explicación precisa de cómo cada módulo suprime o reduce una frustración extrema concreta del círculo derecho. No hace falta aliviar cada incomodidad menor; basta con neutralizar las dos o tres más dolorosas.
3. **Creadores de alegrías (*Gain Creators*):** modo verificable en que el producto genera ahorros cuantitativos, mejoras de rendimiento o beneficios sociales deseados.

La experiencia histórica en creación de empresas muestra diez mecanismos típicos por los que una propuesta genera valor superior frente al estándar del mercado:

| Palanca de valor | Mecanismo económico | Ejemplo ilustrativo |
| :--- | :--- | :--- |
| Novedad | Satisface necesidades inexistentes o antes invisibles. | Primeros teléfonos inteligentes o asistentes conversacionales. |
| Rendimiento | Multiplica velocidad, precisión o capacidad de cómputo. | Motores de búsqueda instantáneos o bases de datos en memoria. |
| Personalización | Adapta el bien al cliente individual a coste de serie. | Software modular *no-code* o zapatillas configuradas a medida. |
| Hacer el trabajo | El cliente delega completamente la ejecución operativa. | Rolls-Royce cobrando por horas de vuelo motor (*Power-by-the-Hour*). |
| Diseño | Experiencia estética y ergonómica claramente superior. | Electrónica de consumo de Apple o mobiliario funcional escandinavo. |
| Marca / Estatus | Significado social, pertenencia y señalización externa. | Relojería suiza tradicional o universidades con sello de élite. |
| Precio | Misma función esencial a una fracción significativa del coste. | Aerolíneas *low cost*, marcas blancas eficientes, software *open-core*. |
| Reducción de costes | Ayuda al cliente a recortar gastos operativos propios. | Infraestructura cloud de pago por uso frente a servidores propios ociosos. |
| Reducción de riesgos | Garantías, SLA contractuales o cumplimiento normativo automático. | Garantías extendidas en vehículos usados o cifrado certificado. |
| Accesibilidad / Comodidad | Pone al alcance de nuevos segmentos algo antes complejo o exclusivo. | Fondos indexados desde 10 euros o edición gráfica web como Canva. |

\begin{claseugr}{Por qué "ser más barato" rara vez basta como única propuesta}
En proyectos universitarios aparece con demasiada frecuencia la frase "nuestra ventaja es que somos un 20\% más baratos". Competir exclusivamente en precio sin haber diseñado una arquitectura de costes radicalmente más liviana (como un modelo de autoservicio sin intermediarios) conduce a márgenes frágiles: el competidor establecido puede igualar el descuento durante seis meses para asfixiar la tesorería del nuevo entrante. La reducción de precio solo es sostenible cuando nace de un modelo de negocio estructuralmente distinto.
\end{claseugr}

## Los tres niveles de encaje (*Fit*) y la validación de hipótesis

Rellenar simétricamente el cuadrado izquierdo y el círculo derecho no garantiza nada por sí solo. Osterwalder et al. advierten que el encaje entre propuesta y cliente no es un evento binario, sino un recorrido en tres etapas progresivas:

1. **Encaje sobre el papel (*Problema--Solución*):** se alcanza cuando existe coherencia lógica en la pizarra y evidencia cualitativa en entrevistas de que las frustraciones y alegrías elegidas importan de verdad al segmento. Aquí todavía no hay ventas masivas ni rentabilidad demostrada.
2. **Encaje en el mercado (*Producto--Mercado*):** ocurre cuando el mercado confirma las hipótesis con hechos costosos: los clientes reales prueban la solución, pagan por ella, la utilizan de forma recurrente y la recomiendan sin subsidios artificiales. Es el verdadero punto de inflexión descrito por Marc Andreessen (*Product-Market Fit*).
3. **Encaje en el modelo de negocio:** consiste en demostrar que la propuesta validada puede entregarse a escala dentro de un Canvas rentable, donde el valor de vida del cliente (**LTV**) supera holgadamente el coste completo de captación (**CAC**) y la estructura fija operativa.

| Tipo de prueba temprana | Coste y rapidez | Qué mide realmente | Qué NO prueba todavía |
| :--- | :--- | :--- | :--- |
| Entrevista de descubrimiento | Muy bajo (días) | Jerarquía real de trabajos y soluciones actuales (*status quo*). | Disposición real a sacar la tarjeta de crédito. |
| *Landing page* o prueba de humo | Bajo (horas--días) | Tasa de clic e interés en la promesa de valor antes de programar. | Retención tras usar el producto real durante un mes. |
| Prototipo "Mago de Oz" / Conserje | Medio (semanas) | Si el resultado final satisface al cliente (aunque detrás opere un humano). | Escalabilidad automática de costes variables. |
| Preventa o carta de intenciones (LOI) | Bajo--Medio | Compromiso económico real antes de fabricar o escalar. | Operación estable con cientos de clientes concurrentes. |

\begin{enfoqueti}{Del usuario gratuito al comprador decisor en entornos B2B}
Un error clásico al diseñar software corporativo (SaaS para despachos, clínicas o pymes) consiste en entrevistar únicamente al usuario operativo final (el técnico o administrativo) olvidando que existen tres roles distintos en el perfil de cliente empresarial: el \textbf{usuario final}, el \textbf{prescriptor o validador técnico} (responsable de sistemas o seguridad) y el \textbf{decisor presupuestario} (dirección financiera o gerencia). El Mapa de Valor debe incluir creadores de alegría para el usuario (ahorro de tiempo), aliviadores para TI (SSO, RGPD, integración por API) y retorno claro para quien firma la transferencia.
\end{enfoqueti}

\begin{casoreal}{Nespresso frente a Dolce Gusto: dos propuestas de valor dentro del mismo grupo}
Aunque ambas marcas nacieron dentro de Nestlé y operan con cápsulas cerradas, sus Lienzos de Propuesta de Valor atacan segmentos y trabajos opuestos. \textbf{Nespresso} se enfocó en hogares de renta media-alta y oficinas ejecutivas que valoran el trabajo emocional de replicar un espresso de cafetería italiana con estatus de marca, canal exclusivo en \textit{boutiques} elegantes y club de fidelización directa con márgenes muy altos. \textbf{Dolce Gusto}, en cambio, se orientó hacia un público familiar y joven centrado en variedad rápida (capuchinos, chocolates, tés), precio más accesible de cápsula y distribución masiva a través de supermercados y grandes superficies. Mismo origen industrial, propuestas de valor y canales completamente diferenciados.
\end{casoreal}

\begin{sintesis}
\begin{itemize}
  \item \textbf{Orden de diseño:} empezar siempre por el círculo derecho (trabajos, frustraciones, alegrías) antes de diseñar el producto o sus funcionalidades.
  \item \textbf{Enfoque quirúrgico:} una propuesta ganadora no resuelve todo a medias; alivia las dos o tres frustraciones más extremas y entrega alegrías medibles.
  \item \textbf{Tres encajes:} distinguir validación sobre papel (entrevistas), encaje en mercado (retención y pago real) y encaje de modelo (economía unitaria escalable).
  \item \textbf{Multipersona B2B:} diferenciar usuario, validador técnico y comprador presupuestario cuando se venden servicios a organizaciones.
\end{itemize}
\end{sintesis}
