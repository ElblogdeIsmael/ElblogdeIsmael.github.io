# Introducción

Datos del profesor: 

- daniels@ugr.es  
- tutorías: X,J: 9:30-12:30, puede ser otro día y otra hora, mandando previamente un correo

\begin{center}
\textbf{Enlace a la guía docente:} \href{https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/diseno-desarrollo-sistemas-informacion/guia-docente}{https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/diseno-desarrollo-sistemas-informacion/guia-docente}
\end{center}

# Introducción a los Sistemas de Información

\begin{definicion}[Definición de sistema de información]
Entendemos por SI a aquel que mediante una aplicación podemos acceder a ciertos datos tratando variables como volumen de datos, restricciones y demás. En el contexto de la asignatura, estos son aquellos que utilizan los SGBD (Sistemas Gestores de Bases de Datos), este es parte del SI, no es un SI como tal. Un SI puede usar varios o bien manejar bases de datos distribuidas. Diversas SI pueden usar una misma DB. Ejemplo de un SI es el sistema de actas de la UGR.
\end{definicion}

Las redes sociales son ejemplos de SI, es habitual que usen diversos SGBD, muchos de ellos no basados en el modelo relacional. Por ejemplo, Instagram, entre otras base de datos, usa PostgreSQL y cassandra (NoSql).

\begin{definicion}[Sistemas de Gestión de Aprendizaje]
SI para administrar, distribuir y controlar las actividades de formación en cursos de educación. Como es el caso de Moodle. Es open source y puede usar SGBD (Microsoft SQL, ...). Por ejemplo, Prado esta montado sobre esta platafora educativa.
\end{definicion}

Algunos SI tienen que gestionar datos de gran complejidad, que mezclan números con imágenes, gran volúmen de columnas, como es el caso de la invesstigación médica de los genes, ... Por ello, suelen usar modelos de datos más complejos.

Los Sistemas de Información (SI) son esenciales en las empresas modernas, facilitando la gestión y análisis de datos. Suelen requerir conocimientos avanzados de configuración y uso, más que de desarrollo. Entre los tipos destacados se encuentran:

- **Sistemas de Inteligencia de Negocio (Business Intelligence):** Enfocados en la exploración y visualización de datos, basados en SGBD Multidimensionales y técnicas como OLAP para gestionar Almacenes de Datos.
- **Ciencia de Datos y Análisis Avanzado:** Incluyen análisis estadístico, Minería de Datos, Big Data e Inteligencia Artificial para descubrir patrones y conocimiento en bases de datos.
- **Sistemas de Información para Empresas:** Herramientas específicas que se abordarán más adelante en el tema.

Muchos de los sistemas informáticos más complejos que existen son de Sistemas de Información.

Los Sistemas de Información (SI) se benefician de una amplia gama de recursos tecnológicos para su desarrollo. Suelen construirse sobre múltiples capas de abstracción y emplear herramientas basadas en configuración, como SGAs y ERPs, destacando las fases de análisis y diseño. El uso de tecnologías web y servicios de computación en la nube (AWS, Google Cloud, Azure, etc.) es fundamental, junto con arquitecturas hardware complejas, como clusters en redes sociales y cloud computing. Además, hacen un uso intensivo de bases de datos distribuidas y tecnologías para el procesamiento distribuido de datos.

Estos deben de cumplir aspectos legales y éticos relacionados con las leyes de protección de datos.

- **En España:** Existe la [Agencia Española de Protección de Datos](https://www.aepd.es/es).
- **En la UGR:** [Oficina de Protección de Datos](https://secretariageneral.ugr.es/unidades/oficina-proteccion-datos).
- **A nivel Europeo:** El [Comité Europeo de Protección de Datos](https://edpb.europa.eu/edpb_es).


Toda base de datos con información personal debe de tener a un responsable. La seguridad de los datos es un aspecto clave, para evitar ciberataques (Blockchain desarrollo creciente).

\nota{Ideas principales}{

\begin{itemize}
    \item Los SI son sistemas informáticos que gestionan información almacenada en BD, para lo cual usan al menos un SGBD.
    \item En la Sociedad de la Información, estamos rodeados y usamos a diario estos sistemas en prácticamente todos los aspectos de la vida.
    \item Son fundamentales en el ámbito científico, económico y social.
    \item Pueden ser extraordinariamente complejos.
    \item Gran cantidad de recursos, plataformas y tecnologías para su desarrollo.
    \item Existe una gran demanda de perfiles profesionales relacionados con el diseño y desarrollo de SI. Esta demanda no para de crecer.
\end{itemize}

}

**Organización jerárquica de los sistemas de información empresarial**

Los sistemas de información empresarial se organizan jerárquicamente en función de los niveles de decisión y las necesidades de información dentro de una organización. Estos niveles incluyen:

- **Sistemas de Procesamiento de Transacciones (TPS):** Son la base de la jerarquía y se encargan de gestionar las operaciones diarias de la empresa, como ventas, compras, inventarios, etc. Proveen datos estructurados y detallados que alimentan los niveles superiores.

- **Sistemas de Información Gerencial (MIS):** Utilizan los datos recopilados por los TPS para generar informes y resúmenes que apoyan la toma de decisiones a nivel táctico. Ayudan a los gerentes a evaluar el desempeño y planificar actividades.

- **Sistemas de Soporte a la Decisión (DSS):** Proveen herramientas analíticas y modelos para ayudar en la toma de decisiones complejas y no estructuradas. Se enfocan en el análisis de datos y la simulación de escenarios.

- **Sistemas de Información Ejecutiva (EIS):** Diseñados para los altos directivos, ofrecen una visión general y estratégica de la organización. Presentan información clave de manera resumida y visual, facilitando la toma de decisiones estratégicas.

- **Software de Gestión Empresarial (ERP):** Los ERP (Enterprise Resource Planning) son sistemas integrados que permiten gestionar y automatizar los procesos clave de una organización, como finanzas, recursos humanos, producción, logística y ventas. Estos sistemas centralizan la información en una única base de datos, facilitando la comunicación entre departamentos y mejorando la eficiencia operativa. Ejemplos destacados incluyen SAP, Oracle ERP y Microsoft Dynamics.

\incluirimagen{media/areaempresa.png}{Áreas funcionales de una empresa}

\begin{definicion}[Sistemas OLTP (Online Transaction Processing)]
Sistemas de procesamiento de transacciones en línea que se centran en la gestión de datos operativos y transaccionales. Son utilizados para registrar, almacenar y procesar transacciones en tiempo real, como ventas, compras o inventarios.
\end{definicion}

\begin{definicion}[Sistemas OLAP (Online Analytical Processing)]
Sistemas de procesamiento analítico en línea diseñados para realizar consultas complejas y análisis multidimensional de grandes volúmenes de datos. Son utilizados en aplicaciones de inteligencia de negocio para explorar y visualizar datos históricos.
\end{definicion}

\begin{definicion}[Sistemas de procesamiento de datos]
Sistemas que procesan información operativa en una empresa mediante la recopilación, manipulación, almacenamiento y preparación de datos. Incluyen actividades como clasificación, ordenación, cálculos, resúmenes y generación de informes.
\end{definicion}

\begin{definicion}[Sistemas de información contable]
Sistemas diseñados para gestionar y procesar la información financiera y contable de una organización. Facilitan el registro de transacciones económicas, la generación de informes financieros y el cumplimiento de normativas contables.
\end{definicion}

\begin{definicion}[Sistemas de información empleados en el funcionamiento cotidiano de una empresa]
Sistemas que procesan la información operativa generada en las actividades diarias de una empresa. Incluyen:
- Recopilación de datos (transacciones).
- Manipulación de datos: clasificación, ordenación, cálculos, resúmenes.
- Almacenamiento de datos (base de datos).
- Preparación de documentos (informes).
- Gestión de contenidos (CMS).
- Business Intelligence: Data Warehousing y Data Mining.
\end{definicion}

\begin{definicion}[Planificador de recursos empresariales (ERP)]
Sistema integrado de gestión que permite integrar los distintos flujos de información de la empresa (finanzas, compras, ventas, recursos humanos...) de forma modular y adaptada al cliente. “Sistema integrado de Software de Gestión Empresarial, compuesto por un conjunto de módulos funcionales, susceptibles de ser adaptados a las necesidades de cada cliente.”\footnote{Sistemas de Información. Herramientas prácticas para la gestión empresarial. 4ª Edición. (Gómez Vieites; Suárez Rey: 2011)} Es el único integrado en toda la compañía, usa base de datos centralizada y actualiza los datos en tiempo real para la compañia.
\end{definicion}

\begin{definicion}[SAP - Systemanalyse und Programmentwicklung (SAP®)]

\begin{itemize}
    \item Es un sistema de información estándar modular.
    \item Puede ser parametrizado para adaptarse a las necesidades específicas de cada compañía.
    \item Proporciona datos disponibles en tiempo real.
    \item Genera pantallas con información resumida para facilitar la toma de decisiones.
\end{itemize}

\textbf{Módulos SAP®}

\begin{itemize}
\item Financial Accounting (FI)
\item Financial Supply Chain Management (FSCM)
\item Controlling (CO)
\item Materials Management (MM)
\item Sales and Distribution (SD)
\item Logistics Execution (LE)
\item Production Planning (PP)
\item Quality Management (QM)
\item Plant Maintenance (PM)
\item Project System (PS)
\item Human Resources (HR)
\end{itemize}

\textbf{Características SAP®}

\begin{itemize}
\item Indicado para grandes volúmenes de datos (grandes compañías).
\item Coste elevado.
\item Desarrollado siguiendo estándares de calidad:
    \begin{itemize}
    \item Los ingenieros de SAP diseñan el producto para que los diversos procesos de negocio se realicen siguiendo las mejores prácticas de la industria.
    \item En ocasiones el proceso de implantación no se trata tanto de adaptar SAP a la empresa, sino de adaptar la empresa a SAP.
    \end{itemize}
\end{itemize}

\textbf{Adaptación de SAP®}

\begin{itemize}
\item Los paquetes de SAP® incluyen diversas opciones de configuración para adaptarse a los detalles de operación de cada empresa.
\item Cuando los requisitos van más allá de retocar algún parámetro, se pueden escribir nuevas funcionalidades usando el lenguaje ABAP® (Advanced Business Application Programming).
\end{itemize}
\end{definicion}

# Desarrollo de Sistemas de Información

Las tareas a realizar son las mismas que para otro Sistema Informático: Planificacion, Análisis, Diseño, Implementación, Pruebas, Instalación, Mantenimiento. Se usan, asimismo, las mismas herramientas UML que en cualquier otro proceso de software a las que se van a añadir otras.

\subsubsection*{Componentes de SI}

- Agentes externos: son elementos externos al sistema y que interactúan con el mismo. Pueden ser personas o sistemas informáticos, incluyendo otros SI. La interacción con el sistema de estos agentes consiste en enviar y recibir datos y eventos indicativos de acciones a realizar por el SI (o bien que informan de un estado). En la fase de análisis se identifica a a los agentes externos y sus roles de interacción. 
- Datos: componen un papel central en SI. Encontramos:
  - Aspectos Estructurales.
  - Restricciones que nos indican configuraciones de los datos almacenados.
Ambos aspectos pueden recogerse en la fase de Análisis, gracias al Análisis Conjunto guiado por las funciones. 
- Software.
- Hardware.


En la fase de diseño se usan los modelos de datos conceptuales y lógicos adecuados al SI para tratar las estructuras y las restricciones.

En la fase de Análisis se sirve de los flujos de datos para describir el sistema desde el punto de vista de almacenamiento, procesamientos, adquisición y publicación de datos.

Se usan diagramas de flujos de datos (DFD) o el equivalente a diagrama de actividades de UML\footnote{Más rico semánticamente y que permite integrar flujos de datos y de control.}.

Se deben de tener en cuenta ciertos aspectos relacionados con el ciclo de vida en el desarrollo SI:

- Adquisición de datos: fuente de datos y métodos de adquisición.
- Uso de datos en el SI: flujos de datos, transformación y almacenado a través del SI e interacción con el exterior.
- Archivado de datos: cuando y como eliminar datos del sistema.

diapo 8 acabar hemos dado hasta la 11
