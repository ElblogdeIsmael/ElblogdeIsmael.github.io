# Análisis Sintáctico Ascendente LR y Generación con YACC

## 1. La Familia de Analizadores LR(k): Fundamentos

Los analizadores LR(k) representan la técnica determinista más potente para el reconocimiento de lenguajes libres de contexto. Su nomenclatura técnica sintetiza su comportamiento operativo:

\vspace{0.3cm}

- **L (*Left-to-right*):** El texto fuente se lee y procesa de izquierda a derecha.
- **R (*Rightmost derivation in reverse*):** Reconstruye la derivación canónica por la derecha en sentido inverso (ascendente).
- **k:** Número de símbolos terminales de anticipación (*lookahead*) que inspecciona para tomar decisiones operativas (en la práctica estándar, $k = 1$).

Frente a los métodos descendentes $LL(1)$, los analizadores LR admiten gramáticas con recursividad por la izquierda sin requerir modificaciones estructurales y soportan un repertorio de construcciones de lenguaje mucho más amplio. Frente a los métodos de precedencia, un analizador LR no solo analiza el tope de la pila, sino que codifica todo el prefijo procesado mediante estados de un autómata finito.

\vspace{0.4cm}

## 2. Arquitectura y Dinámica de un Analizador LR

Un analizador LR se compone de una cinta de entrada, una pila de estados y una tabla de control estructurada en dos matrices complementarias:

\vspace{0.4cm}

### La Pila de Estados

La pila almacena una secuencia alternada de estados y símbolos gramaticales:

$$s_0 X_1 s_1 X_2 s_2 \dots X_m s_m$$

Dado que cada estado resume toda la información contenida en la pila que le precede, en implementaciones reales basta con apilar únicamente los identificadores de estado ($s_0 s_1 \dots s_m$).

\vspace{0.4cm}

### Las Tablas ACCIÓN e IR_A

- **Tabla ACCIÓN (*Action*):** Matriz indexada por $[estado, terminal]$. Determina la acción del analizador ante el estado en la cima $s_m$ y el token de entrada $a$:
  - **Desplazar ($d_j$):** Apila el terminal $a$ y el nuevo estado $j$, avanzando el puntero de lectura de la entrada.
  - **Reducir ($r_k$):** Dada la producción $k: A \to \beta$, extrae de la pila $2 \times |\beta|$ elementos (los $|\beta|$ símbolos y sus estados asociados). Al quedar al descubierto el estado anterior $s_{m-|\beta|}$, consulta la tabla IR_A.
  - **Aceptar ($acc$):** Da por concluido con éxito el análisis sintáctico.
  - **Error (celda vacía):** Dispara la rutina de recuperación de errores sintácticos.
- **Tabla IR_A (*Goto*):** Matriz indexada por $[estado, no\_terminal]$. Indica el nuevo estado que debe apilarse inmediatamente después de efectuar una reducción a un no terminal $A$.

\vspace{0.4cm}

## 3. Construcción del Analizador SLR(1) (Simple LR)

El método SLR(1) es la aproximación más directa y pedagógica para generar analizadores LR.

\vspace{0.4cm}

### Gramática Aumentada e Ítems LR(0)

- **Gramática Aumentada:** Se añade a la gramática $G$ la regla inicial ficticia $S' \to S$. Su propósito formal es fijar una única condición de parada en el autómata ($S' \to S \cdot$), evitando confundir el inicio con una reducción interna a $S$.
- **Ítem LR(0):** Es una regla de producción con un punto ($\cdot$) situado en alguna posición de su parte derecha. Indica cuánto de la regla ha sido reconocido en la pila y qué símbolos esperamos leer a continuación:
  - $A \to \cdot \alpha$: En espera de reconocer la cadena $\alpha$.
  - $A \to \alpha \cdot \beta$: Habiendo reconocido ya el prefijo $\alpha$, esperando leer $\beta$.
  - $A \to \alpha \cdot$: Ítem completo, candidato a ejecutar una reducción.

\vspace{0.4cm}

### Operaciones Clausura e Ir_A

- **$\text{Clausura}(I)$:** Si un ítem contiene el punto inmediatamente antes de un no terminal ($A \to \alpha \cdot B \beta$), se incorporan recursivamente al conjunto todos los ítems iniciales $B \to \cdot \gamma$ para cada producción de $B$ en la gramática.
- **$\text{Ir\_a}(I, X)$:** Toma todos los ítems de $I$ donde el punto precede al símbolo $X$ ($A \to \alpha \cdot X \beta$), traslada el punto una posición a la derecha ($A \to \alpha X \cdot \beta$) y computa la clausura del conjunto resultante.

\vspace{0.4cm}

### Colección Canónica LR(0) y Prefijos Viables

La aplicación repetida de las operaciones Clausura e Ir_A desde el ítem inicial $\{S' \to \cdot S\}$ genera la **Colección Canónica LR(0)**. Este conjunto define formalmente los estados del Autómata Finito Determinista (AFD) que reconoce los **prefijos viables** de la gramática (prefijos de formas sentenciales que pueden figurar en la pila sin rebasar el extremo derecho del pivote).

\vspace{0.4cm}

### Reglas de Relleno de la Tabla SLR

Dado el conjunto de estados de la colección canónica $\{I_0, I_1, \dots, I_n\}$:

\vspace{0.3cm}

1. Si $[A \to \alpha \cdot a \beta] \in I_i$ y $\text{Ir\_a}(I_i, a) = I_j$, se asigna $d_j$ en $\text{ACCIÓN}[i, a]$ (para $a \in V_T$).
2. Si $[A \to \alpha \cdot] \in I_i$, se asigna $r_{A \to \alpha}$ en $\text{ACCIÓN}[i, a]$ **únicamente para los terminales $a \in \text{SEGUIDORES}(A)$**.
3. Si $[S' \to S \cdot] \in I_i$, se asigna $acc$ en $\text{ACCIÓN}[i, \$]$.
4. Para la tabla de transiciones: Si $\text{Ir\_a}(I_i, A) = I_j$, se asigna $j$ en $\text{IR\_A}[i, A]$ (para $A \in V_N$).

Si ninguna celda de la tabla presenta solapamientos de acciones, la gramática es **SLR(1)**. Si una celda contiene a la vez un desplazamiento y una reducción se produce un conflicto desplaza/reduce; si contiene dos reducciones distintas, un conflicto reduce/reduce.

\vspace{0.4cm}

## 4. Comparativa Teórica: SLR(1), LR(1) Canónico y LALR(1)

\vspace{0.4cm}

### La Limitación de SLR y la Solución LR(1)

El método SLR(1) utiliza $\text{SEGUIDORES}(A)$ para autorizar una reducción. Esto representa una aproximación excesivamente laxa: un terminal $a$ puede pertenecer al conjunto global de seguidores de $A$ en algún punto del lenguaje, pero ser completamente ilícito en el contexto del estado específico en el que se encuentra el autómata. Esta pérdida de contexto induce conflictos ficticios.

Los analizadores **LR(1) Canónicos** solventan este déficit integrando en cada ítem un símbolo explícito de anticipación contextual:

$$[A \to \alpha \cdot \beta, a]$$

donde $a \in V_T \cup \{\$\}$ indica que la reducción $A \to \alpha$ solo es válida si el siguiente token de entrada es exactamente $a$.
- *Ventaja:* Es el modelo determinista más potente que existe para gramáticas libres de contexto.
- *Inconveniente:* Produce una explosión exponencial en el número de estados (pasa de decenas de estados a miles en gramáticas reales).

\vspace{0.4cm}

### El Compromiso Óptimo: LALR(1) (*Look-Ahead LR*)

Desarrollado para retener la potencia contextual de LR(1) sin asumir el coste de su tabla de estados.

- **Principio de Fusión de Núcleos:** El algoritmo construye el autómata LR(1) y **fusiona aquellos estados que poseen el mismo núcleo** (*core*, es decir, que contienen exactamente los mismos ítems LR(0) prescindiendo del símbolo de anticipación), uniendo sus conjuntos de *lookahead*.
- **Dimensiones:** Un autómata LALR(1) tiene exactamente el mismo número de estados que el autómata SLR(1)/LR(0) equivalente.
- **Teorema de Preservación de Conflictos (pregunta canónica de examen):**
  - La fusión de estados con idéntico núcleo **nunca genera conflictos desplaza/reduce** nuevos.
  - La unión de los símbolos de anticipación **sí puede generar nuevos conflictos reduce/reduce**, aunque en gramáticas reales de lenguajes de programación esta anomalía prácticamente nunca se manifiesta.

\vspace{0.4cm}

## 5. El Generador YACC (*Yet Another Compiler-Compiler*)

YACC es la herramienta estándar de generación de compiladores que sintetiza un analizador sintáctico LALR(1) en C a partir de un fichero de especificación `.y`.

\vspace{0.4cm}

### Estructura de un Fichero YACC

\vspace{0.3cm}

1. **Declaraciones:** Código C delimitado por `%{` y `%}`, declaración de tokens mediante `%token`, definición del axioma mediante `%start`, y fijación de precedencias con `%left`, `%right` y `%nonassoc`.
2. **Reglas Gramaticales:** Reglas de producción asociadas a acciones semánticas ejecutadas durante la reducción. Permite referenciar los valores calculados por los símbolos del lado derecho mediante `$1, $2, \dots, $n`, y escribir el valor resultante en la variable `$$` asociada al no terminal de la parte izquierda.
3. **Código de Usuario en C:** Funciones auxiliares, la rutina `main()` que invoca al analizador mediante `yyparse()` y el procedimiento de diagnóstico `yyerror(char *s)`.

\vspace{0.4cm}

### Resolución de Ambigüedades por Defecto en YACC

Cuando una gramática presenta conflictos y no se establecen directivas explícitas de precedencia, YACC aplica reglas deterministas por defecto:

\vspace{0.3cm}

- En conflictos **desplaza/reduce**: YACC opta siempre por **desplazar**. Esta regla resuelve automáticamente el dilema del *dangling-else*, asociando el `else` al `if` anidado más cercano.
- En conflictos **reduce/reduce**: YACC resuelve en favor de la producción que aparezca declarada **en primer lugar** en el fichero `.y`.
- Precedencia explícita: Declaraciones como `%left '+' '-'` y `%left '*' '/'` resuelven los conflictos de expresiones aritméticas evaluando el orden de definición (las líneas más bajas tienen mayor precedencia).

\vspace{0.4cm}

### Recuperación de Errores con el Token Reservado `error`

YACC proporciona una estrategia robusta basada en el pseudotoken `error`:
- Al producirse una incoherencia sintáctica, el analizador empieza a vaciar estados de la pila hasta alcanzar un estado que contenga una transición activa sobre el símbolo `error`.
- El autómata desplaza el token `error` a la pila y entra en modo de sincronización, descartando tokens de la cinta de entrada hasta encontrar un símbolo delimitador especificado en la regla (típicamente el punto y coma `;` en una sentencia).
- Al encontrar el delimitador, reduce por la regla de error y reanuda el análisis normal del resto del programa, evitando abortar la compilación.
