# Procesadores de Lenguajes y Arquitectura de la Traducción

## 1. Fundamentos y Definición Formal de la Traducción

Un procesador de lenguajes es un sistema software que procesa texto estructurado escrito en un lenguaje origen para transformarlo, interpretarlo o adaptarlo a un entorno ejecutable de destino. Cuando el nivel de abstracción del lenguaje fuente supera la capacidad de procesamiento directo del hardware, la traducción actúa como el mecanismo puente que materializa la computación. Todo lenguaje formal de programación implanta, en su base, una máquina abstracta con normas propias de estado y control.

La teoría de compiladores descarta la idea de que traducir sea una simple sustitución de cadenas de texto. El proceso establece una correspondencia estricta entre dos marcos semánticos formales. Siguiendo la formalización de la cátedra, un modelo semántico queda definido unívocamente por la terna:

$$M = (L, D, I)$$

\vspace{0.3cm}

- **Lenguaje ($L$):** Conjunto estructurado de construcciones simbólicas formadas a partir de secuencias finitas de símbolos tomados de un alfabeto $\Sigma$. Puede definirse por extensión (listando sus secuencias, viable solo en casos triviales) o por comprensión mediante una gramática formal $G$, cumpliéndose que $L = L(G)$.
- **Dominio semántico ($D$):** Conjunto estructurado de valores, objetos computacionales y transiciones de estado sobre los que cobran sentido las sentencias. Comprende valores semánticos elementales (enteros, booleanos, caracteres, punteros) y valores estructurados (registros, vectores, objetos en memoria y contextos de activación).
- **Interpretación ($I$):** Función matemática $I: L(G) \to D$ que asigna a cada construcción sintáctica válida de $L$ su significado operativo exacto en el dominio semántico $D$.

\vspace{0.4cm}

### Requisitos Formales de la Traducción y Preservación Semántica

Sean dos modelos semánticos $M_1 = (L_1, D_1, I_1)$ para el lenguaje fuente y $M_2 = (L_2, D_2, I_2)$ para el lenguaje objeto. La viabilidad técnica de un traductor exige el cumplimiento de dos propiedades algebraicas:

\vspace{0.3cm}

1. **Inclusión de dominios semánticos:** $D_1 \subseteq D_2$. El dominio destino debe tener la capacidad representacional necesaria para modelar todos los valores, tipos y efectos laterales del origen. Si existiera un concepto en $L_1$ carente de homólogo o codificación en $D_2$, la traducción directa resultaría imposible sin recurrir a capas pesadas de emulación.
2. **Esquema de traducción ($T$):** Es una aplicación computable $T: L_1 \to L_2$ que preserva rigurosamente el significado original de los programas. Para cualquier programa fuente $p \in L_1$, debe satisfacerse la conmutatividad del diagrama semántico:

$$I_2(T(p)) = I_1(p)$$

\vspace{0.3cm}

Si un traductor produce un programa cuya ejecución en la máquina destino discrepa del comportamiento prescrito por $I_1$ para cualquier entrada, el traductor no es correcto.

\vspace{0.4cm}

## 2. Ámbitos de Aplicación de los Traductores

La ingeniería de compiladores abarca múltiples áreas de software aplicado:

\vspace{0.3cm}

- **Lenguajes de programación de propósito general:** Traductores de lenguajes como C, C++, Rust o Ada a código binario ejecutable. En estos entornos, el dominio semántico del lenguaje de programación se mapea sobre el dominio semántico del procesador físico (registros, memoria direccionable, saltos condicionales).
- **Lenguajes orientados al dominio (*Domain-Specific Languages*, DSL):** Lenguajes diseñados para expresar de forma directa problemas de una disciplina técnica o de negocio (consultas relacionales con SQL, maquetación tipográfica con LaTeX, configuración de infraestructuras o reglas financieras). Permiten redactar instrucciones empleando la jerga del usuario, transformándolas luego en código fuente de tercera o cuarta generación.
- **Macroensambladores y preprocesadores:** Convierten plantillas, directivas de sustitución y macros parametrizadas en código plano antes del ensamblado final.
- **Motores de ejecución de bases de datos:** Analizan secuencias declarativas, construyen árboles de operadores relacionales, los optimizan mediante heurísticas de coste y sintetizan rutinas internas de acceso a disco.

\vspace{0.4cm}

## 3. Anatomía de un Compilador: Front-End y Back-End

Para evitar el acoplamiento directo entre la sintaxis de un lenguaje fuente y la arquitectura física de una CPU, los compiladores adoptan una estructura desacoplada en dos bloques principales: el extremo inicial (*Front-End*) y el extremo final (*Back-End*). Esta separación permite reutilizar el mismo generador de código objeto para distintos lenguajes fuente o compilar un mismo lenguaje para múltiples arquitecturas hardware mediante una representación intermedia compartida.

\vspace{0.4cm}

### Fase de Análisis (*Front-End*)

Se orienta a comprender y validar el texto fuente conforme a las normas del lenguaje $L_1$. Se estructura en tres etapas sucesivas:

\vspace{0.3cm}

1. **Análisis Léxico:** Recorre el flujo de caracteres del código fuente, elimina espacios en blanco y comentarios, y agrupa los caracteres en unidades elementales llamadas componentes léxicos (*tokens*).
2. **Análisis Sintáctico:** Verifica si la secuencia de tokens se ajusta a la estructura jerárquica dictada por una gramática libre de contexto ($G \in \text{Tipo 2}$). Genera el árbol de análisis sintáctico (o árbol de sintaxis abstracta, AST).
3. **Análisis Semántico:** Revisa restricciones contextuales que la gramática sintáctica no puede comprobar, como la compatibilidad de tipos en asignaciones, la comprobación de variables no declaradas o la coherencia de llamadas a funciones. Como salida, genera una representación en código intermedio independiente del hardware.

\vspace{0.4cm}

### Fase de Síntesis (*Back-End*)

Adapta la representación intermedia generada por el Front-End a los condicionantes físicos del procesador destino:

\vspace{0.3cm}

1. **Optimización de Código:** Aplica transformaciones sobre el código intermedio (propagación de constantes, eliminación de subexpresiones comunes, desenrollado de bucles) y sobre las instrucciones destino para reducir el tiempo de cálculo o la memoria requerida, sin alterar la semántica original.
2. **Generación de Código Objeto:** Transforma el código intermedio en instrucciones nativas de la máquina destino, planificando el uso óptimo de registros hardware y organizando los marcos de pila en memoria.

\vspace{0.4cm}

### Componentes Transversales del Compilador

Dos módulos permanecen operativos de forma simultánea a lo largo de todo el proceso de compilación:

\vspace{0.3cm}

- **Tabla de Símbolos:** Estructura de datos que indexa cada identificador junto con sus atributos (tipo de dato, tamaño en bytes, dirección de memoria relativa, ámbito de visibilidad y número de línea). El analizador léxico localiza el lexema, los analizadores sintáctico y semántico completan sus propiedades lógicas, y el generador de código consulta su ubicación física para emitir los accesos a memoria.
- **Gestor de Errores:** Centraliza la detección y el informe de fallos en cualquiera de las fases. Su cometido principal es coordinar estrategias de recuperación (como el modo pánico) para que el compilador sea capaz de seguir analizando el resto del texto sin abortar tras el primer fallo detectado.

\vspace{0.4cm}

## 4. Estrategias de Ejecución: Compilación, Interpretación y Modelos Híbridos

La ejecución de programas escritos en lenguajes de alto nivel se aborda desde distintas filosofías de diseño:

\vspace{0.3cm}

- **Compilación pura:** El código fuente se traduce en su totalidad a código binario antes de la ejecución. Genera binarios rápidos y optimizados para una CPU concreta, protegiendo el código fuente original, pero exige recompilar de forma específica para cada arquitectura destino.
- **Interpretación pura:** Un programa intérprete lee directamente el código fuente y ejecuta las acciones instrucción a instrucción en tiempo de ejecución. Aporta portabilidad inmediata y depuración interactiva, a costa de un rendimiento sensiblemente menor provocado por el reanálisis constante de bucles y funciones.
- **Modelos híbridos con máquina virtual:** Sistemas como la máquina virtual de Java (JVM) o el CLR de .NET compilan primero el texto fuente a un lenguaje intermedio tipado (*bytecode*). La máquina virtual interpreta este código o lo compila dinámicamente a lenguaje máquina nativo mediante un compilador *Just-In-Time* (JIT) en las regiones críticas de ejecución.

\vspace{0.4cm}

## 5. Diagramas en T de Watt y Arquitectura de Traductores

Para modelar de forma rigurosa las relaciones entre el lenguaje que se compila, el código resultante y el entorno en que se ejecuta el propio compilador, D. A. Watt introdujo en 1993 los diagramas en T (*Tombstone Diagrams*).

\vspace{0.4cm}

### Elementos Básicos de Notación

Un procesador de lenguajes involucra tres lenguajes distintos:

\vspace{0.3cm}

- **Brazo izquierdo de la T:** Lenguaje fuente ($S$, *Source*), que el compilador acepta como entrada.
- **Brazo derecho de la T:** Lenguaje objeto ($T$, *Target*), generado como salida.
- **Base inferior de la T:** Lenguaje de implementación ($L$, *Language*), en el que está escrito o codificado el propio ejecutable del compilador.

\vspace{0.3cm}

Un compilador solo puede ejecutarse de manera directa sobre una máquina física $M$ si el lenguaje de su base coincide con el código máquina nativo de dicha máquina ($L = M$). Gráficamente, el bloque del compilador se encaja sobre el bloque soporte de la máquina $M$.

\vspace{0.4cm}

### Compilación Cruzada (*Cross-Compilation*)

Se habla de compilación cruzada cuando un compilador se ejecuta físicamente sobre una máquina origen $M_1$, pero produce código binario destinado a una arquitectura física distinta $M_2$. Este método es indispensable para programar microcontroladores, consolas o dispositivos embebidos que carecen de recursos de cálculo o memoria para ejecutar un compilador completo en su propio hardware.

\vspace{0.4cm}

### Procedimiento Sistemático de Half-Bootstrap

Cuando se dispone del código fuente de un compilador de un lenguaje $L$ implementado en el propio lenguaje $L$, y se tiene ya un ejecutable de dicho compilador sobre una máquina $M_1$, el método de *Half-Bootstrap* permite trasladarlo a una nueva máquina $M_2$ mediante tres pasos estrictos:

\vspace{0.3cm}

1. **Reescritura del generador de código:** Se modifica únicamente el módulo final del compilador fuente para que emita instrucciones de la nueva arquitectura $M_2$. El nuevo compilador sigue escrito en lenguaje $L$, pero su salida pasa a ser código para $M_2$.
2. **Generación del compilador cruzado:** Se compila el nuevo código fuente en la máquina original $M_1$ empleando el compilador binario existente. El resultado es un ejecutable que corre sobre $M_1$ y genera código para $M_2$ (un compilador cruzado de $L$ a $M_2$ sobre base $M_1$).
3. **Autocompilación y binario nativo:** Se vuelve a compilar el código fuente modificado en la máquina $M_1$, pero haciéndolo pasar ahora a través del compilador cruzado obtenido en el paso anterior. La salida resultante es un binario del compilador de $L$ a $M_2$ cuya base de ejecución es el código máquina nativo de $M_2$, completando la portabilidad sin necesidad de herramientas externas en la máquina destino.

\vspace{0.4cm}

### Bootstrapping (Arranque Progresivo de Compiladores)

El concepto de *bootstrapping* describe el proceso por el cual un lenguaje complejo se compila a sí mismo partiendo de un núcleo mínimo o de un lenguaje intermedio más elemental. El procedimiento clásico arranca escribiendo a mano un subconjunto simplificado del lenguaje en ensamblador; con este primer compilador rudimentario se compila una versión más rica del lenguaje, iterando hasta disponer del compilador completo autoalojado (*self-hosting*).

\vspace{0.4cm}

## 6. Cuestiones de Examen Resueltas con Rigor

Las siguientes preguntas recogen cuestiones conceptuales habituales en las pruebas escritas de la ETSIIT:

\vspace{0.4cm}

### Cuestión 1: Condición de Inclusión de Dominios Semánticos

**Pregunta:** Justifique formalmente por qué la condición $D_1 \subseteq D_2$ es necesaria para que exista un esquema de traducción $T: L_1 \to L_2$ válido entre dos modelos semánticos $M_1 = (L_1, D_1, I_1)$ y $M_2 = (L_2, D_2, I_2)$.

**Respuesta Técnica:**
Para que un esquema de traducción $T$ sea correcto debe preservar el significado exacto de cualquier programa $p \in L_1$, lo que impone la condición de conmutatividad semántica:

$$I_2(T(p)) = I_1(p)$$

Si el dominio semántico destino $D_2$ no contiene al dominio semántico origen $D_1$ ($D_1 \not\subseteq D_2$), existirá al menos un estado computacional, tipo de dato o valor $v \in D_1$ tal que $v \notin D_2$. Por tanto, para cualquier programa $p$ cuya interpretación produzca dicho valor ($I_1(p) = v$), la función de interpretación destino $I_2$ jamás podrá alcanzar $v$, al no pertenecer a su codominio ($v \notin \text{Im}(I_2) \subseteq D_2$). En consecuencia, no existirá ningún programa objeto $T(p) \in L_2$ que cumpla $I_2(T(p)) = v$, haciendo imposible la preservación semántica sin incorporar capas externas de interpretación.

\vspace{0.4cm}

### Cuestión 2: Análisis de Pasos en Half-Bootstrap

**Pregunta:** Explique la diferencia conceptual entre el paso 2 y el paso 3 de la técnica de *Half-Bootstrap* empleando la notación de Watt.

**Respuesta Técnica:**
En el paso 2, el compilador modificado (fuente $L$, destino $M_2$, escrito en $L$) es procesado por el compilador original que corre en $M_1$ (fuente $L$, destino $M_1$, base $M_1$). Por ello, el ejecutable resultante tiene base $M_1$: se trata de un compilador cruzado que se ejecuta en la máquina de origen $M_1$.

En el paso 3, el mismo código fuente del compilador modificado es procesado, pero esta vez por el compilador cruzado obtenido en el paso 2 (fuente $L$, destino $M_2$, base $M_1$). Como este compilador emite código para la arquitectura $M_2$, el binario resultante tiene base $M_2$. Deja de ser un compilador cruzado para convertirse en el compilador nativo final que corre de forma autónoma en la máquina de destino $M_2$.
