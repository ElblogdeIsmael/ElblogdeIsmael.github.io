# Análisis Léxico y Generación Automática con LEX

## 1. Descripción Funcional y Conceptos Fundamentales

El análisis léxico constituye la primera línea de procesamiento en la fase de análisis de un compilador. Su tarea operativa consiste en leer secuencialmente el texto fuente carácter a carácter y agruparlos en unidades con entidad propia denominadas componentes léxicos (*tokens*).

Esta separación entre el nivel léxico y el sintáctico aporta dos ventajas de ingeniería: simplifica enormemente la estructura del analizador sintáctico (que no debe gestionar detalles triviales como espacios en blanco o retornos de carro) y confiere mayor portabilidad y eficiencia al compilador, permitiendo optimizar el escaneo continuo a nivel de búfer de entrada.

\vspace{0.4cm}

### Diferenciación Rigurosa: Token, Lexema y Patrón

La teoría formal establece una distinción nítida entre tres conceptos complementarios:

\vspace{0.3cm}

- **Token (Componente léxico):** Categoría abstracta que engloba a todas las secuencias de caracteres que desempeñan idéntica función sintáctica dentro del lenguaje. Al analizador sintáctico solo le concierne el identificador del token (por ejemplo, `NUMERO`, `ID`, `ASIGN`), no su valor textual concreto.
- **Lexema:** Secuencia exacta de caracteres leída en el texto fuente que encaja con la definición de un determinado token. Si en el código aparece `limite = 100;`, las cadenas `"limite"`, `"="`, `"100"` y `";"` son los lexemas reales.
- **Patrón:** Regla formal o descripción que delimita qué secuencias de caracteres pertenecen a un token. Los patrones se especifican matemáticamente mediante expresiones regulares y se reconocen mediante un Autómata Finito Determinista (AFD).

\vspace{0.4cm}

## 2. Fundamentos Formales: Álgebra de Lenguajes y Expresiones Regulares

Dado un alfabeto finito $\Sigma$ de símbolos, un lenguaje formal $L$ es cualquier subconjunto de cadenas formadas sobre $\Sigma^*$ ($L \subseteq \Sigma^*$).

\vspace{0.4cm}

### Operaciones Fundamentales sobre Lenguajes

Sobre dos lenguajes $L$ y $M$ se definen las siguientes operaciones cerradas:

\vspace{0.3cm}

- **Unión:** $L \cup M = \{s \mid s \in L \lor s \in M\}$.
- **Concatenación:** $LM = \{st \mid s \in L \land t \in M\}$.
- **Clausura de Kleene:** $L^* = \bigcup_{i=0}^{\infty} L^i$, donde $L^0 = \{\lambda\}$ (cadena vacía).
- **Clausura positiva:** $L^+ = \bigcup_{i=1}^{\infty} L^i = L L^*$.

\vspace{0.4cm}

### Expresiones Regulares

Las expresiones regulares denotan lenguajes regulares construidos inductivamente a partir de los casos base:
1. $\lambda$ es una expresión regular cuyo lenguaje es $\{\lambda\}$.
2. Para todo símbolo $a \in \Sigma$, $a$ es una expresión regular que denota el lenguaje $\{a\}$.
3. Si $r$ y $s$ son expresiones regulares que denotan $L(r)$ y $L(s)$, entonces $(r) \mid (s)$, $(r)(s)$ y $(r)^*$ son expresiones regulares que denotan respectivamente $L(r) \cup L(s)$, $L(r)L(s)$ y $(L(r))^*$.

\vspace{0.4cm}

## 3. Del Patrón al Autómata Finito Determinista

Para que un procesador pueda reconocer tokens en tiempo lineal sobre la entrada, las expresiones regulares deben transformarse en autómatas de estados finitos.

\vspace{0.4cm}

### Construcción de Thompson (ER a AFN)

El teorema clásico de autómata de estados garantiza que a toda expresión regular le corresponde un Autómata Finito no Determinista con transiciones vacías (AFN-$\lambda$). El algoritmo de Thompson construye el autómata de forma compositiva:
- Los casos base ($\lambda$ y el símbolo individual $a$) se modelan con autómatas elementales de dos estados.
- La unión de patrones $r \mid s$ se resuelve creando un nuevo estado inicial y otro final enlazados con transiciones $\lambda$ hacia los autómatas de $r$ y $s$.
- La concatenación $rs$ enlaza el estado de aceptación de $r$ con el inicial de $s$.
- La clausura $r^*$ introduce bucles de retroalimentación y saltos vacíos mediante aristas $\lambda$.

\vspace{0.4cm}

### Algoritmo de Subconjuntos: Determinización de AFN a AFD

Dado que un AFN puede residir en múltiples estados a la vez, no resulta viable ejecutarlo de forma directa sin incurrir en costes combinatorios. El método de construcción de subconjuntos construye un AFD equivalente donde cada estado del AFD representa un conjunto de estados del AFN original. Se apoya en dos operaciones:

\vspace{0.3cm}

- $\lambda\text{-clausura}(T)$: Conjunto de todos los estados del AFN alcanzables desde cualquier estado $s \in T$ siguiendo únicamente transiciones $\lambda$.
- $\text{Move}(T, a)$: Conjunto de estados del AFN hacia los cuales existe una transición con el símbolo de entrada $a$ desde algún estado $s \in T$.

El estado inicial del AFD corresponde a $\lambda\text{-clausura}(\{s_0\})$. A partir de ahí, para cada nuevo conjunto de estados y cada símbolo del alfabeto se computa $\lambda\text{-clausura}(\text{Move}(T, a))$ hasta que no aparezcan nuevos conjuntos.

\vspace{0.4cm}

### Minimización de Estados del AFD

El AFD resultante se optimiza agrupando estados indistinguibles para reducir el consumo en memoria de la tabla de transiciones. Se divide inicialmente el conjunto de estados en dos grupos disjuntos (estados de aceptación y estados de no aceptación), y se refinan sucesivamente las particiones hasta que los estados pertenecientes a un mismo bloque exhiban transiciones idénticas ante cualquier símbolo de entrada.

\vspace{0.4cm}

## 4. Tratamiento y Recuperación de Errores Léxicos

Un analizador léxico detecta un error cuando la secuencia de caracteres leída no encaja con ningún patrón definido en el alfabeto del lenguaje.

\vspace{0.4cm}

### Estrategias de Sincronización y Recuperación

- **Modo Pánico (*Panic Mode*):** Al detectar un carácter no reconocible, el analizador entra en un proceso de sincronización donde descarta caracteres sucesivos de la entrada hasta topar con un delimitador conocido (como espacios, comas o puntos y coma), reiniciando el autómata en su estado de reposo.
- **Reparación por Distancia de Edición (Levenshtein):** Cuando se busca mayor sofisticación, el escáner evalúa transformaciones elementales sobre el lexema con menor coste:
  - Eliminación de un carácter anómalo.
  - Inserción de un carácter omitido.
  - Sustitución de un carácter incorrecto.
  - Transposición de dos caracteres contiguos invertidos involuntariamente por el usuario (ej. `retunr` por `return`).

\vspace{0.4cm}

## 5. El Generador LEX: Arquitectura y Reglas Operativas

LEX es la herramienta canónica de generación de analizadores léxicos. Recibe un fichero de especificación `.l` y sintetiza una rutina en lenguaje C denominada `yylex()`.

\vspace{0.4cm}

### Estructura de una Especificación LEX

Un archivo LEX se organiza en tres secciones separadas por delimitadores `%%`:

\vspace{0.3cm}

1. **Definiciones:** Delimitadas por `%{` y `%}` para incluir directivas de preprocesador C, cabeceras y macros con nombres de expresiones regulares (por ejemplo, `LETRA [a-zA-Z]`).
2. **Reglas:** Conjunto de pares formados por un patrón regular y su correspondiente bloque de código C entre llaves que se ejecuta al reconocerse el patrón.
3. **Código de Usuario:** Procedimientos auxiliares en C y la función de invocación `main()`.

\vspace{0.4cm}

### Resolución de Ambigüedades en LEX

Cuando dos o más expresiones regulares coinciden con el texto que entra por el flujo de lectura, LEX aplica dos reglas deterministas de desempate:

\vspace{0.3cm}

1. **Principio del Encaje más Largo (*Longest Match* o *Maximal Munch*):** LEX siempre favorece la regla que consuma la mayor cantidad de caracteres de entrada. Si la entrada es `cadena`, no lo segmenta como la palabra `cad` seguida de `ena`.
2. **Precedencia por Orden Textual:** A igualdad de caracteres consumidos, gana la primera regla declarada en el fichero. Por esta razón, las palabras reservadas del lenguaje (`if`, `while`) deben definirse siempre antes de la regla general de los identificadores.

\vspace{0.4cm}

### La Acción REJECT

Cuando una regla ejecuta la macro especial `REJECT`, LEX ejecuta las instrucciones de esa acción pero de inmediato restituye el puntero de entrada y procede a evaluar la siguiente alternativa coincidente. Permite encadenar ejecuciones en cascada ante solapamientos de patrones.

\vspace{0.4cm}

### Variables y Funciones Clave del Sistema

\vspace{0.3cm}

- `yytext`: Puntero al array de caracteres que contiene el lexema real recién identificado.
- `yyleng`: Entero que almacena la longitud en caracteres del lexema en `yytext`.
- `yylex()`: Función principal generada por LEX que devuelve el identificador entero del token reconocido.
- `yywrap()`: Función invocada automáticamente al detectar el fin de fichero (`EOF`). Retorna 1 para dar por finalizado el análisis o 0 si enlaza con otro archivo.
- Acciones por defecto: Todo carácter reconocido que carezca de acción asociada no genera salida; todo carácter que no coincida con ningún patrón es enviado a la salida estándar (`stdout`, equivalente a la macro `ECHO`).

\vspace{0.4cm}

### Condiciones de Inicio (*Start Conditions*)

Permiten conferir al analizador léxico sensibilidad al contexto izquierdo, activando y desactivando subconjuntos de reglas según el estado interno:

\vspace{0.3cm}

- **Condiciones Inclusivas (`%START` o `%s`):** Al activarse con `BEGIN(NOMBRE)`, entran en juego las reglas etiquetadas con `<NOMBRE>` y simultáneamente todas las reglas generales no etiquetadas.
- **Condiciones Exclusivas (`%X` o `%x`):** Al activarse con `BEGIN(NOMBRE)`, quedan activas de forma exclusiva las reglas marcadas con `<NOMBRE>`. Las reglas normales sin prefijo quedan suspendidas hasta que se ejecute `BEGIN(0)`, siendo el mecanismo canónico para procesar cadenas entrecomilladas o bloques de comentarios multilínea.
