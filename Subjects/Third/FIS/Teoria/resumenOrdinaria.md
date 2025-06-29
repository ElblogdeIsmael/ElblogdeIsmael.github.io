# FIS

## Introducción al modelado de requisitos

La **ingeniería de requisitos** es el proceso que identifica y documenta las necesidades del cliente, analiza su viabilidad, negocia soluciones y crea un documento de requisitos validado y completo. Este documento describe el software que se construirá para satisfacer esas necesidades. El proceso también incluye el análisis y validación de los requisitos, así como su evolución y control a lo largo del ciclo de desarrollo.

**Factores de fracaso en proyectos software** (Informe CHAOS, 1995):
- Falta de información por parte de los usuarios.
- Especificación de requisitos incompleta.
- Continuos cambios en los requisitos.
- Pobres habilidades técnicas en la especificación.

**Problemas comunes en la ingeniería de requisitos**:
- Dificultades de comunicación en el equipo de desarrollo.
- Complejidad del problema a resolver.
- Identificación deficiente de los requisitos del cliente.
- Requisitos que no se pueden obtener directamente del cliente.
- Naturaleza cambiante de los requisitos.
  
**Concepto de requisito**:  
Es la condición o capacidad que un producto software debe tener para resolver una necesidad de usuario, ser aceptado por el cliente y cumplir restricciones específicas.

**Propiedades de los requisitos**:  
- **Completos**: Representan todos los aspectos del sistema.  
- **Consistentes**: No se contradicen entre sí.  
- **No ambiguos**: Se interpretan de una sola forma.  
- **Correctos**: Representan exactamente lo que necesita el cliente.  
- **Realistas**: Se pueden implementar con los recursos y tecnología disponibles.  
- **Verificables**: Se pueden probar.  
- **Trazables**: Se puede seguir su evolución en todo momento.  
- **Identificables**: Tienen identificadores únicos.  
- **Cuantificables**: Es posible medir su cumplimiento.

**Tipos de requisitos**:  
- **Funcionales**: Describen la interacción entre el sistema y su entorno, especificando las funciones que el sistema debe realizar.  
- **No funcionales**: Describen cualidades o restricciones generales del sistema (rendimiento, fiabilidad, seguridad, etc.).  
- **De información**: Necesidades de almacenamiento y gestión de datos.

**Clasificación FURPS+** (Grady-1992):  
- **F**: Funcionalidad.  
- **U**: Facilidad de uso.  
- **R**: Fiabilidad.  
- **P**: Rendimiento.  
- **S**: Soporte.  
- **+**: Restricciones de diseño, interfaz, operación, empaquetado y aspectos legales.

**Ejemplos**:  
- Validar la tarjeta en menos de 3 segundos.  
- El sistema debe insertar palabras en orden correcto.  
- El sistema debe contar el número de palabras procesadas.  
- Los usuarios serán en su mayoría novatos.  

**Tareas principales de la ingeniería de requisitos**:  
1. **Estudio de viabilidad**: Viabilidad técnica, económica y jurídica.  
2. **Obtención de requisitos**: Recopilar información de usuarios y clientes mediante entrevistas, casos de uso, prototipos, etc.  
3. **Análisis de requisitos**: Detectar conflictos, profundizar en el conocimiento del sistema y establecer las bases para el diseño.  
4. **Especificación de requisitos**: Representar los requisitos mediante documentos, diagramas o modelos matemáticos.  
5. **Revisión de requisitos**: Verificar y validar la representación de los requisitos.

**Actores en la ingeniería de requisitos**:  
- **Stakeholders**: Usuarios, clientes y cualquier persona relacionada con el sistema.

## Obtención de requisitos

La obtención de requisitos es la fase inicial de la ingeniería de requisitos, cuyo objetivo es recopilar toda la información necesaria para definir el sistema o producto a desarrollar. Implica identificar, negociar y documentar las necesidades de los usuarios y stakeholders.

### Proceso de obtención de requisitos
El proceso incluye las siguientes tareas principales:
- **Identificar implicados (stakeholders)**: Personas que poseen o necesitan la información sobre el sistema (clientes, usuarios, desarrolladores, etc.).
- **Conocer las necesidades** de clientes y usuarios: Entender qué objetivos tienen y qué problemas necesitan resolver.
- **Revisar objetivos y requisitos**: Evaluar su importancia, urgencia y estado durante el desarrollo (en construcción, pendiente de solución, etc.).
- **Identificar requisitos de información y funcionales**: Describir cada requisito, su contenido, frecuencia, rendimiento y estabilidad.
- **Revisar requisitos no funcionales**: Relacionados con rendimiento, fiabilidad, facilidad de uso, soporte, implementación, interfaz, operación y restricciones legales.

Se destacan aspectos como la identificación de prioridades (vital, importante o deseable), la estabilidad y la urgencia de los requisitos. Además, se deben clasificar los requisitos en categorías y verificar su consistencia.

### Técnicas de obtención
Las técnicas utilizadas para la elicitación de requisitos incluyen:
- **Entrevistas**: Individuales o en grupo, formales o informales. Implican la preparación, realización y análisis de la información obtenida.
- **Escenarios y puntos de vista**: Analizar diferentes perspectivas para descubrir requisitos.
- **Casos de uso**: Permiten entender las interacciones entre los usuarios y el sistema.
- **Prototipado**: Crear representaciones tempranas del sistema para validarlo con el usuario.
- **Análisis etnográfico**: Observación del entorno y actividades de los usuarios.

### Productos generados
- **Documentos de entrevistas**: Recogen la información obtenida en las reuniones con los implicados.
- **Lista estructurada de requisitos**: Organiza todos los requisitos de forma sistemática.
- **Diagramas de casos de uso y de actividad**: Modelan gráficamente los escenarios funcionales y sus interacciones.

### Importancia de la obtención de requisitos
La calidad de esta fase es crítica para el éxito del proyecto, ya que un error o una omisión puede derivar en problemas costosos y difíciles de corregir en fases posteriores del desarrollo.

**Ejemplo de implicados en un videoclub**:  
- **Cliente**: Usuario casual, su éxito depende de poder comprar películas de forma sencilla.  
- **Encargado**: Responsable de la gestión económica y de los proveedores, debe tener control sobre películas y pagos.  
- **Socio**: Usuario que alquila o compra películas.  
- **Empleado**: Usuario del producto que realiza las gestiones diarias.  
- **Proveedor**: Suministra películas al videoclub.

La obtención de requisitos se apoya en una colaboración activa con los stakeholders para consensuar los requisitos finales y garantizar que reflejan fielmente las necesidades reales del cliente y del sistema.

## Modelado de casos de uso

El modelado de casos de uso es una técnica de ingeniería de requisitos que permite delimitar el sistema a estudiar, describir el punto de vista de los usuarios y servir como base para el análisis, diseño, validación y construcción de prototipos del sistema. Además, facilita la validación del software y es el punto de inicio para las ayudas en línea y la documentación del usuario.

### Elementos principales
- **Actores**: Entidades externas que interactúan con el sistema y que adoptan roles durante la interacción.
- **Casos de uso**: Especifican secuencias de acciones que un sistema o subsistema realiza con actores externos para cumplir un objetivo concreto.
- **Relaciones entre actores y casos de uso**: Comunicación directa o flujos de control compartidos.

### Diagrama de casos de uso
Es un diagrama UML que representa gráficamente la frontera del sistema, los actores y los casos de uso, mostrando sus relaciones.

Ejemplo:
- **Cajero automático de un videoclub**: actores como Cliente, Empleado y casos de uso como Alquilar película, Devolver película.

### Tipos de actores
- **Principales**: Activan los casos de uso.
- **Secundarios**: Interactúan pero no activan el caso de uso.
- **Otros tipos**: Personas, dispositivos de entrada/salida, sensores, sistemas externos, temporizadores o relojes.

### Características de los casos de uso
- Iniciados por un actor.
- Intercambio de datos y control entre actor y sistema.
- Tienen utilidad real y concreta para algún actor.
- Deben describirse desde el punto de vista de los actores.
- Abarcan la funcionalidad de principio a fin.

### Descripción de casos de uso
Incluye:
- Objetivo y propósito.
- Precondiciones y poscondiciones.
- Secuencia de acciones normales y alternativas.
- Atributos como frecuencia, rendimiento, importancia y urgencia.

### Relaciones en el modelo
- **Asociación**: Comunicación directa entre actor y caso de uso.
- **Inclusión (<<include>>)**: Un caso de uso base incorpora completamente otro caso de uso para completar su funcionalidad.
- **Extensión (<<extend>>)**: Un caso de uso opcional que amplía la funcionalidad de un caso de uso base en ciertos puntos de extensión.
- **Generalización**: Un caso de uso hijo hereda las características de un caso de uso padre, pudiendo ampliarlas o anularlas.

### Construcción del modelo de casos de uso
Pasos:
1. Identificar actores y sus objetivos.
2. Identificar casos de uso principales y necesidades.
3. Identificar nuevos casos de uso a partir de variaciones, acciones opuestas o complementarias.
4. Crear diagramas de casos de uso y diagramas de paquetes.
5. Describir cada caso de uso (plantilla básica o extendida).
6. Definir prioridades de los requisitos (vitales, importantes, deseables).
7. Completar descripciones extendidas de casos de uso y desarrollar diagramas de actividad.
8. Desarrollar prototipos de la interfaz de usuario.

### Otros aspectos relevantes
- **Diagramas de paquetes**: Agrupan casos de uso relacionados lógicamente (ej. gestión de socios, películas, proveedores).
- **Diagramas de actividad**: Representan flujos de actividad de uno o varios casos de uso.

La correcta elaboración de este modelo facilita la comprensión de los requisitos, guía el diseño e incrementa la calidad del sistema resultante.

## Análisis y especificación de requisitos

El análisis y especificación de requisitos constituyen una fase clave en la ingeniería de requisitos, cuyo objetivo principal es **refinar, estructurar y describir los requisitos** para lograr una comprensión más precisa y facilitar el desarrollo y mantenimiento del sistema.

### Análisis de requisitos
El **análisis de requisitos** consiste en:
- **Detectar y resolver conflictos** entre los requisitos.
- **Delimitar el software** y establecer sus interacciones con elementos externos.
- **Construir modelos abstractos** que sirvan de base para el diseño.
- **Comprender en profundidad** el dominio del problema.
- **Establecer prioridades** y clasificar los requisitos.
- **Negociar** y ajustar requisitos con los stakeholders.

El análisis orientado a objetos (AOO) facilita esta tarea, modelando tanto aspectos estáticos (estructura) como dinámicos (comportamiento) del sistema. Las principales actividades de análisis incluyen:
- Clasificación y priorización de los requisitos.
- Modelado conceptual y estudio de soluciones.
- Obtención de modelos estáticos (diagramas conceptuales) y dinámicos (diagramas de secuencia y contratos de operaciones).

### Modelos del análisis orientado a objetos
El AOO emplea herramientas como **UML** para representar modelos, y se basa en:
- **Modelo estático o estructural**: Diagrama de clases que describe los conceptos clave del dominio y sus relaciones.
- **Modelo dinámico o de comportamiento**: Diagramas de secuencia y contratos que muestran las interacciones y responsabilidades de cada componente.

### Especificación de requisitos
La especificación de requisitos tiene como fin representar los requisitos utilizando el modelo construido durante el análisis, mediante:
- Documentos escritos, diagramas o modelos matemáticos.
- Herramientas y estándares que aseguren la calidad.
- Un **manual preliminar del usuario** que sirva como guía inicial.

Los productos generados incluyen:
- **Documento de especificación de requisitos**.
- **Modelos arquitectónicos**: Dividen el sistema en subsistemas.
- **Diagramas de paquetes**: Agrupan lógicamente los elementos del sistema.
- **Modelo estático**: Diagrama de clases.
- **Modelo dinámico**: Diagramas de secuencia del sistema y contratos de operaciones.

### Validación y verificación
La especificación debe cumplir con los estándares de calidad (ej. **IEEE 830-1998**):
- Ser completa, verificable, consistente, modificable y trazable.
- No contener ambigüedades y ser utilizable en todas las fases del ciclo de vida.

Durante esta fase se realizan actividades de:
- **Validación**: Comprobar que los requisitos documentados representen el problema real del cliente.
- **Verificación**: Comprobar que la representación de los requisitos es correcta y adecuada.

Se utilizan herramientas y técnicas como:
- Creación de prototipos.
- Simulaciones.
- Revisiones automáticas.

La correcta especificación de requisitos y su verificación continua son fundamentales para evitar problemas costosos y garantizar la calidad final del sistema.

## Modelo estático

El modelo estático o **modelo estructural** describe los principales conceptos del dominio del problema, sus propiedades y las relaciones entre ellos. Este modelo representa la estructura del sistema y se conoce por varios nombres: **diagrama de conceptos**, **diagrama conceptual**, **modelo de dominio**, o **modelo del análisis**.

### Elementos principales
- **Clases**: Representan conceptos del dominio.
- **Atributos**: Propiedades relevantes de los conceptos.
- **Asociaciones**: Relaciones significativas entre conceptos.
- **Generalizaciones**: Jerarquías que agrupan conceptos generales y específicos.

### Pasos para la elaboración
1. Identificar e incorporar conceptos.
2. Identificar asociaciones entre conceptos.
3. Incorporar generalizaciones.
4. Identificar e incorporar atributos.
5. Estructurar y empaquetar el modelo, agrupando conceptos relacionados en **paquetes**.

### Herramientas de representación
- **Diagramas de clases UML**: Muestran conceptos (clases) y relaciones.
- **Diagramas de paquetes**: Agrupan elementos relacionados.

Este modelo proporciona la base para la definición de la arquitectura y facilita el diseño y la implementación del sistema:contentReference[oaicite:0]{index=0}.

---

## Modelo de comportamiento

El **modelo dinámico o de comportamiento** describe cómo los elementos del sistema interactúan a lo largo del tiempo para realizar tareas específicas. Representa las interacciones y responsabilidades de los componentes del sistema en la realización de casos de uso.

### Elementos principales
- **Diagramas de secuencia del sistema (DSS)**: Muestran la secuencia de mensajes entre actores y el sistema visto como una caja negra.
- **Contratos de operaciones**: Documentan las responsabilidades de las operaciones principales del sistema.

### Pasos para su elaboración
1. Identificar los actores que inician operaciones.
2. Asignar un nombre al sistema.
3. Identificar y nombrar operaciones principales basadas en los casos de uso.
4. Determinar los parámetros de las operaciones.
5. Representar operaciones en el DSS.
6. Incluir las operaciones en la clase que representa al sistema:contentReference[oaicite:1]{index=1}.

### Ejemplo
**Caso de uso CU01: Procesar Venta con pago efectivo**  
1. Cliente llega al terminal.  
2. Cajero inicia una nueva venta.  
3. El cajero inserta el identificador de artículo.  
4. El sistema registra y presenta descripción, precio y total.  
5. El sistema muestra el total con impuestos.  
6. El cajero solicita el pago.  
7. El cliente paga y el sistema gestiona el pago.

En el DSS se representan las llamadas como `nuevaVenta()`, `introducirArtículo()`, `terminarVenta()`, `realizarPago()`, con parámetros y condiciones de repetición (loops).

El modelo de comportamiento complementa al modelo estático y es fundamental para validar que el sistema cumple con los requisitos dinámicos, asegurando la correcta interacción entre usuarios y sistema.

## Fundamentos del diseño software

El diseño de software es la fase que traduce los requisitos y modelos de análisis en una representación más detallada y estructurada del sistema. Se encuentra en la intersección de la tecnología y los propósitos humanos, y busca crear un sistema que funcione correctamente, sea apropiado y placentero para su uso.

### Definición y características
El **diseño** consiste en aplicar métodos, herramientas y principios para definir un sistema o proceso con un nivel de detalle suficiente para su realización. Es una tarea clave que:
- Proporciona la base para las etapas posteriores.
- Mejora la calidad y facilita la evolución del sistema.
- Permite la evaluación temprana de la calidad y facilita las pruebas.

Un buen diseño debe garantizar que el sistema funcione correctamente desde el principio, y no que simplemente funcione de forma incompleta o inestable.

### Principios del diseño
Son fundamentales para estructurar el sistema de forma efectiva y asegurar su calidad técnica:

- **División de problemas y modularidad**:  
  Dividir problemas complejos en módulos independientes que colaboran para cumplir objetivos comunes. Los módulos son más fáciles de entender, mantener, probar y permiten el desarrollo paralelo.

- **Abstracción**:  
  Identificar qué detalles son relevantes para un determinado nivel de diseño. Se puede hacer a nivel procedimental, de datos o de control. El refinamiento es clave para bajar de nivel de abstracción y añadir detalles progresivamente.

- **Ocultamiento de información**:  
  Los módulos deben exponer solo lo necesario, reduciendo los efectos colaterales y facilitando la evolución del sistema.

- **Independencia modular**:  
  Cada módulo debe tener alta cohesión (un solo objetivo) y bajo acoplamiento (mínima dependencia con otros módulos). Esto facilita el mantenimiento y reduce el impacto de los cambios.

### Herramientas del diseño
Existen herramientas que ayudan a representar los modelos de diseño:
- **Diagramas UML** (clases, interacción, paquetes, componentes, despliegue).
- **Cartas de estructura y tablas de decisión**.
- **Diagramas de flujo de control** y **Nassi-Shneiderman**.
- **Lenguajes de diseño de programas (LDP)**.

### Métodos de diseño
Son enfoques sistemáticos que guían la creación de modelos de diseño y sus transformaciones. Ejemplos:
- **SSD (Diseño estructurado de sistemas)**.  
- **JSD (Desarrollo de sistemas Jackson)**.  
- **ERA (Entidad-Relación-Atributo)**.  
- **OMT (Técnicas de modelado de objetos)**.  
- **Método de Booch (orientado a objetos)**.  
- Métodos basados en UML y el Proceso Unificado.

Cada método ofrece principios, mecanismos de traducción desde el análisis al diseño, herramientas para representar componentes funcionales y estructurales, y heurísticas para mejorar la calidad del diseño:contentReference[oaicite:0]{index=0}.

### Modelo del diseño
El modelo de diseño traduce el análisis en un conjunto de elementos técnicos listos para su implementación:
- Se organiza en **subsistemas de diseño** con sus interfaces requeridas o proporcionadas.
- Detalla las clases, componentes y relaciones necesarias para construir el sistema.
- Se construye con herramientas como diagramas de clases, componentes, paquetes y despliegue.

Un buen modelo de diseño permite la trazabilidad desde el análisis hasta la implementación, asegurando que todas las necesidades identificadas están correctamente representadas y listas para codificación y prueba.


## Diseño de la arquitectura

El diseño de la arquitectura es el proceso creativo que organiza la estructura global del sistema. Define cómo se dividen y relacionan los subsistemas, teniendo en cuenta los requisitos no funcionales (rendimiento, seguridad, facilidad de mantenimiento, etc.).

### Actividades principales
- **Identificar los objetivos del diseño**.
- **Seleccionar el estilo arquitectónico** más adecuado (como MVC, cliente-servidor, capas, repositorio).
- **Identificar y refinar los subsistemas** que forman la arquitectura.
- **Modelar la arquitectura** mediante diagramas de paquetes, componentes y despliegue.
- **Refinar la descomposición** en subsistemas, cuidando la cohesión y el acoplamiento.

### Herramientas de representación
- **Diagramas de paquetes**: muestran cómo se agrupan los elementos del sistema.
- **Diagramas de componentes**: representan subsistemas y sus interfaces.
- **Diagramas de despliegue**: describen la distribución del software en el hardware.

Una buena arquitectura permite el desarrollo y mantenimiento eficiente del sistema, y facilita la integración de nuevos cambios.

---

## Diseño de los casos de uso

El diseño de los casos de uso especifica cómo se implementarán las interacciones detectadas en el análisis. Se centra en detallar la colaboración de los objetos y asignar responsabilidades claras a cada uno.

### Actividades principales
- **Modelo de interacción de objetos**: diagramas de interacción UML que muestran cómo los objetos colaboran.
- **Contratos de operaciones**: documentos que describen qué debe hacer cada operación, sin entrar en cómo se implementa.
- **Patrones de diseño**: especialmente patrones como los de Craig Larman, que ayudan a asignar responsabilidades y a mejorar la calidad del diseño.

Este diseño traduce las necesidades y requisitos de los usuarios en funcionalidades bien estructuradas y claras.

---

## Diseño de la estructura de objetos

En esta fase se crea el **diagrama de clases del diseño**, que describe cómo se organizarán las clases del sistema, sus atributos, operaciones y relaciones.

### Pasos principales
1. **Identificar y representar las clases** del sistema.
2. **Añadir las operaciones** detectadas en los diagramas de interacción.
3. **Incluir tipos de atributos y parámetros**.
4. **Establecer asociaciones y su navegabilidad**.
5. **Incluir relaciones de dependencia**.
6. **Añadir generalizaciones** si es necesario.

El resultado final es un modelo de clases que facilita la implementación y el mantenimiento del sistema.

---

## Planificación y gestión de proyectos

La gestión de proyectos de software busca coordinar actividades y recursos para cumplir los objetivos de funcionalidad, tiempo y coste.

### Etapas principales
- **Planificación**: identificación de tareas, recursos necesarios, estimación de tiempos y costes.
- **Seguimiento**: controlar el avance del proyecto, gestionando riesgos y desviaciones.
- **Revisión y evaluación**: comprobar si los objetivos se han alcanzado con la calidad esperada.
- **Cierre del proyecto**: análisis de resultados y lecciones aprendidas.

Se utilizan herramientas como:
- **Estructura de descomposición del trabajo**: divide el proyecto en tareas jerarquizadas.
- **Métodos CPM y PERT**: técnicas de red para determinar el camino crítico.
- **Diagramas de Gantt**: representan visualmente la planificación y el seguimiento.

---

## Validación y verificación del software

Son procesos fundamentales para asegurar que el software cumple con los requisitos establecidos.

- **Verificación**: comprobar que el software se ha construido correctamente (¿lo hemos hecho bien?).
- **Validación**: comprobar que el software satisface las necesidades del cliente (¿hemos hecho lo correcto?).

### Técnicas utilizadas
- **Inspecciones y revisiones**: detectan errores sin ejecutar el software.
- **Pruebas**: ejecutan el software con datos de prueba para comprobar su comportamiento.
- **Prototipos y simulaciones**: facilitan la revisión y la validación temprana.

El objetivo final es garantizar que el sistema sea confiable y de calidad, cumpliendo con las expectativas del cliente.

---

## Mantenimiento del software

El mantenimiento comprende todas las actividades necesarias para modificar el software después de su entrega.

### Tipos de mantenimiento
- **Correctivo**: corregir errores encontrados.
- **Adaptativo**: modificar para adaptarlo a nuevos entornos.
- **Perfectivo**: mejorar el rendimiento o la mantenibilidad.
- **Preventivo**: anticiparse a problemas futuros.

### Actividades del mantenimiento
- **Identificación y clasificación de cambios**.
- **Modificación y actualización de documentación**.
- **Re-pruebas (pruebas de regresión)** para asegurar que no se han introducido nuevos errores.
- **Evaluación de impacto** y planificación de recursos.

### Factores que afectan al mantenimiento
- Calidad del diseño inicial.
- Claridad de la documentación.
- Modularidad y baja complejidad de los componentes.

La gestión del mantenimiento es esencial para garantizar la evolución y la sostenibilidad del sistema software.