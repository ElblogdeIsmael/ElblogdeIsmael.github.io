# Análisis Sintáctico Ascendente LR y Generación con YACC

## 1. La Familia de Analizadores LR(k): Fundamentos y Taxonomía

Propuestos por Donald Knuth en 1965, los analizadores sintácticos LR(k) constituyen la técnica determinista más potente para el reconocimiento y traducción de gramáticas independientes del contexto. Su denominación técnica sintetiza su comportamiento operativo:

\vspace{0.3cm}

- **L (*Left-to-right*):** El texto fuente se lee y procesa secuencialmente de izquierda a derecha.
- **R (*Rightmost derivation in reverse*):** Reconstruye la derivación canónica por la derecha en sentido inverso (ascendente), localizando en cada etapa el pivote adecuado.
- **k:** Número de símbolos terminales de anticipación (*lookahead*) leídos en la cinta de entrada para resolver posibles ambigüedades operativas. En la construcción práctica de compiladores modernos se utiliza invariablemente $k = 1$ o $k = 0$.

\vspace{0.3cm}

### 1.1 Jerarquía Comparativa de Potencia

La relación de inclusión entre las distintas familias de gramáticas analizadas deterministamente satisface la cadena estricta:

$$LL(1) \subset SLR(1) \subset LALR(1) \subset LR(1) \subset LR(k)$$

Frente a los métodos descendentes $LL(1)$, los analizadores LR presentan ventajas computacionales determinantes:

\vspace{0.3cm}

1. **Soporte nativo de recursividad por la izquierda:** No exigen transformar la gramática eliminando la recursividad directa o indirecta a la izquierda, evitando la proliferación artificial de no terminales y producciones vacías.
2. **Reconocimiento con memoria histórica:** A diferencia de las gramáticas de precedencia (que solo inspeccionan el símbolo visible en la cima de la pila y sufren ceguera respecto al contexto previo), el analizador LR condensa en su pila de estados todo el prefijo de la frase analizado hasta el momento.
3. **Detección inmediata de errores:** Detecta una incoherencia sintáctica en el instante exacto en que lee el primer terminal de entrada que no puede formar una continuación válida de la cadena.

\vspace{0.4cm}

## 2. Arquitectura y Dinámica Operativa de un Analizador LR

Un analizador LR está compuesto por una cinta de entrada, una pila de trabajo donde se alternan estados y símbolos gramaticales, y una tabla de control dividida en dos matrices complementarias: la tabla **ACCIÓN** (*Action*) y la tabla **IR_A** (*Goto*).

\vspace{0.3cm}

### 2.1 La Pila del Autómata

La configuración instantánea de la pila almacena pares formados por un símbolo gramatical y un identificador numérico de estado:

$$(\$ \, s_0 \, X_1 \, s_1 \, X_2 \, s_2 \dots X_m \, s_m, \; a_i \, a_{i+1} \dots a_n \, \$)$$

donde $s_0$ es el estado inicial, cada $X_j \in V_N \cup V_T$ representa un símbolo gramatical, $s_j$ es el estado asociado y $a_i$ es el terminal de entrada actual. Dado que cada estado $s_j$ codifica y resume completamente la secuencia de símbolos que le precede en la pila, en implementaciones reales de producción basta con almacenar los estados:

$$s_0 \, s_1 \, s_2 \dots s_m$$

\vspace{0.3cm}

### 2.2 Las Tablas ACCIÓN e IR_A

La tabla de control parametriza el comportamiento determinista del motor de ejecución:

\vspace{0.3cm}

- **Tabla ACCIÓN ($[estado, terminal]$):** Indexada por el estado en la cima $s_m$ y el terminal entrante $a \in V_T \cup \{\$\}$. Puede contener cuatro tipos de instrucciones:
  - **Desplazar ($d_j$ o $shift \; j$):** Introduce el terminal $a$ y el estado destino $j$ en la cima de la pila, avanzando el cabezal de lectura de la entrada.
  - **Reducir ($r_k$ o $reduce \; k$):** Dada la producción $k: A \to \beta$ de longitud $|\beta| = r$, desapila $2r$ elementos de la pila ($r$ símbolos y $r$ estados), dejando al descubierto el estado previo $s_{m-r}$. A continuación, consulta la tabla IR_A para determinar el nuevo estado a apilar.
  - **Aceptar ($acc$):** Da por finalizado el análisis sintáctico con éxito. Ocurre cuando se alcanza el marcador de fin de cadena sobre el estado que reconoce la producción raíz de la gramática aumentada.
  - **Error (celda vacía):** Activa el gestor de recuperación de errores sintácticos.
- **Tabla IR_A ($[estado, no\_terminal]$):** Indexada por el estado descubierto $s_{m-r}$ y el no terminal $A \in V_N$ resultante de la reducción. Indica el estado $s'$ que debe apilarse inmediatamente sobre la pila junto con $A$:

$$s' = \text{IR\_A}[s_{m-r}, A]$$

\vspace{0.3cm}

### 2.3 Algoritmo del Motor de Ejecución LR

El bucle central del autómata se formaliza de la siguiente manera:

\vspace{0.3cm}

1. Inicializar la pila con el estado $s_0$: $\text{Pila} = [s_0]$. Sea $a$ el primer token de la entrada.
2. Bucle infinito:
   - Sea $s$ el estado situado en la cima de la pila.
   - Consultar la entrada $\text{ACCIÓN}[s, a]$:
     - Caso **Desplazar $j$ ($d_j$):**
       - Apilar el terminal $a$ y el estado $j$: $\text{Pila} \leftarrow a, j$.
       - Avanzar el puntero de lectura al siguiente token de entrada $a$.
     - Caso **Reducir $A \to \beta$ ($r_k$):**
       - Extraer de la pila $2 \times |\beta|$ elementos.
       - Sea $s'$ el estado que ahora ocupa la cima de la pila.
       - Consultar la transición $j = \text{IR\_A}[s', A]$.
       - Apilar el no terminal $A$ y el estado $j$: $\text{Pila} \leftarrow A, j$.
       - Mantener el token actual $a$ sin avanzar en la entrada.
     - Caso **Aceptar ($acc$):**
       - Salir del bucle informando de éxito.
     - Caso **Celda vacía:**
       - Invocar la rutina de gestión y recuperación de errores sintácticos.

\vspace{0.4cm}

## 3. Construcción del Analizador SLR(1) (*Simple LR*)

El método SLR(1) es la aproximación más directa y pedagógica para generar analizadores sintácticos LR. Se apoya en la noción de gramática aumentada y en la construcción del Autómata Finito Determinista (AFD) que reconoce los prefijos viables.

\vspace{0.3cm}

### 3.1 Gramática Aumentada e Ítems LR(0)

Dada una gramática libre de contexto $G = (V_N, V_T, P, S)$, se define su **gramática aumentada** $G'$ añadiendo un nuevo axioma inicial $S'$ y una regla de producción adicional:

$$S' \to S$$

El propósito técnico de esta extensión consiste en establecer una única condición formal de parada para el analizador. Cuando la regla $S' \to S$ esté completamente reconocida, el compilador sabe que el texto completo ha sido validado, evitando confundir reducciones intermedias al axioma $S$ con el fin del programa.

Un **ítem LR(0)** es una producción de la gramática a la que se le añade una marca tipográfica en forma de punto ($\cdot$) en alguna posición de su lado derecho. El punto actúa como un cursor operativo que divide la regla en dos segmentos:

$$A \to \alpha \cdot \beta$$

\vspace{0.3cm}

- $\alpha$: Segmento de la producción que ya ha sido reconocido y procesado en la pila del autómata.
- $\beta$: Segmento que se espera leer a continuación en la entrada para completar el reconocimiento de la regla.

Si el punto se ubica al final ($A \to \alpha \cdot$), el ítem se denomina **ítem de reducción** (*complete item*), señalando que la regla está lista para ser reducida.

\vspace{0.3cm}

### 3.2 Operaciones Clausura e Ir_A

La construcción de los estados del autómata se articula mediante dos funciones matemáticas:

\vspace{0.3cm}

#### Función Clausura ($\text{clausura}(I)$)
Dado un conjunto de ítems $I$:
1. Todo ítem de $I$ pertenece a $\text{clausura}(I)$.
2. Si un ítem $[A \to \alpha \cdot B \beta]$ pertenece a $\text{clausura}(I)$ y existe una regla $B \to \gamma \in P$, se incorpora el ítem inicial $[B \to \cdot \gamma]$ a $\text{clausura}(I)$, siempre que no figure previamente.
3. Se repite este procedimiento de propagación hasta alcanzar el punto fijo (ningún nuevo ítem puede ser añadido).

\vspace{0.3cm}

#### Función Ir_A ($\text{ir\_a}(I, X)$)
Dado un conjunto de ítems $I$ y un símbolo gramatical cualquiera $X \in V_N \cup V_T$:

$$\text{ir\_a}(I, X) = \text{clausura}(\{ [A \to \alpha X \cdot \beta] \mid [A \to \alpha \cdot X \beta] \in I \})$$

La operación traslada el punto una posición a la derecha sobre el símbolo $X$ para todos aquellos ítems donde $X$ se encontraba inmediatamente a la derecha del punto, y calcula la clausura del conjunto resultante.

\vspace{0.3cm}

### 3.3 Prefijos Viables y la Colección Canónica LR(0)

Un prefijo $\gamma \in (V_N \cup V_T)^*$ se denomina **prefijo viable** de una gramática si constituye un prefijo de alguna forma sentencial derecha que puede residir en la pila de un analizador de desplazamiento y reducción sin rebasar el extremo derecho del pivote.

La **Colección Canónica LR(0)** es el conjunto finito de estados $\mathcal{C} = \{I_0, I_1, \dots, I_m\}$ generado iterando $\text{ir\_a}$ sobre todos los símbolos de la gramática a partir del estado inicial $I_0 = \text{clausura}(\{ [S' \to \cdot S] \})$. Los estados de $\mathcal{C}$ definen exactamente los estados del Autómata Finito Determinista que reconoce los prefijos viables.

\vspace{0.3cm}

### 3.4 Reglas Sistemáticas de Relleno de la Tabla SLR(1)

A partir de la colección canónica $\{I_0, I_1, \dots, I_m\}$, la tabla de análisis se rellena aplicando cuatro reglas:

\vspace{0.3cm}

1. **Relleno de desplazamientos:** Si $[A \to \alpha \cdot a \beta] \in I_i$ con $a \in V_T$, y se verifica $\text{ir\_a}(I_i, a) = I_j$, se escribe en la celda de acción:

$$\text{ACCIÓN}[i, a] = d_j$$

2. **Relleno de reducciones:** Si $[A \to \alpha \cdot] \in I_i$ (con $A \neq S'$), se escribe la reducción por la regla $A \to \alpha$ **únicamente para los terminales que pertenecen a los seguidores globales de $A$**:

$$\text{ACCIÓN}[i, a] = r_{A \to \alpha} \quad \forall a \in \text{SEGUIDORES}(A)$$

3. **Relleno de aceptación:** Si el ítem $[S' \to S \cdot]$ reside en $I_i$, se asigna aceptación ante el centinela de fin de cadena:

$$\text{ACCIÓN}[i, \$] = acc$$

4. **Relleno de transiciones de no terminales:** Si $\text{ir\_a}(I_i, A) = I_j$ con $A \in V_N$, se escribe en la tabla de transiciones:

$$\text{IR\_A}[i, A] = j$$

5. Toda celda que permanezca sin asignar tras aplicar estas reglas representa un error sintáctico.

\vspace{0.3cm}

### 3.5 Conflictos SLR(1) y el Fallo Intrínseco de los Seguidores Globales

Si al aplicar estas reglas alguna celda de la tabla $\text{ACCIÓN}$ recibe más de una instrucción, se dice que la gramática **no es SLR(1)**. Emergen dos tipos de conflictos:

\vspace{0.3cm}

- **Conflicto Desplaza/Reduce:** En un mismo estado $I_i$ coexisten un ítem que invita a desplazar un terminal $a$ ($A \to \alpha \cdot a \beta$) y un ítem de reducción ($B \to \gamma \cdot$) tal que $a \in \text{SEGUIDORES}(B)$.
- **Conflicto Reduce/Reduce:** En un mismo estado $I_i$ coexisten dos ítems de reducción distintos ($A \to \alpha \cdot$ y $B \to \beta \cdot$) cuyos conjuntos de seguidores no son disjuntos ($\text{SEGUIDORES}(A) \cap \text{SEGUIDORES}(B) \neq \emptyset$).

\vspace{0.3cm}

#### El Ejemplo Clásico de Invalidez de SLR(1)

Consideremos la gramática que modela asignaciones y llamadas a procedimientos sin parámetros:

$$S \to id \mid V = E, \quad V \to id, \quad E \to V \mid num$$

Construyendo el estado inicial y calculando $\text{ir\_a}(I_0, id)$, obtenemos un estado $I_k$ que contiene los ítems:

$$S \to id \cdot \quad \text{y} \quad V \to id \cdot$$

Para el método SLR(1), debemos colocar la reducción $S \to id$ en los seguidores de $S$ ($\{\$\}$) y la reducción $V \to id$ en los seguidores de $V$. Puesto que $V$ aparece a la izquierda de la asignación en $S \to V = E$, se deduce que $= \in \text{SEGUIDORES}(V)$. Además, como $E \to V$ y $V = E$ es cuerpo de $S$, el centinela $\$$ también pertenece a $\text{SEGUIDORES}(V)$.

En consecuencia, ante el terminal $\$$, la celda $\text{ACCIÓN}[k, \$]$ recibe simultáneamente:
- Reducir por $S \to id$ (porque $\$ \in \text{SEGUIDORES}(S)$).
- Reducir por $V \to id$ (porque $\$ \in \text{SEGUIDORES}(V)$).

Se produce un **conflicto reduce/reduce irresoluble en SLR(1)**. La causa raíz radica en que el conjunto global $\text{SEGUIDORES}(V)$ recopila todos los terminales que pueden seguir a $V$ en cualquier rincón del lenguaje, perdiendo la noción del contexto específico por el que se ha llegado al estado actual.

\vspace{0.4cm}

## 4. Analizador LR(1) Canónico: Precisión Contextual

Para superar las deficiencias de SLR(1), Donald Knuth diseñó los analizadores **LR(1) Canónicos**, incorporando a cada ítem un componente de anticipación contextual explícito.

\vspace{0.3cm}

### 4.1 Definición de Ítem LR(1)

Un **ítem LR(1)** es un par formal:

$$[A \to \alpha \cdot \beta, \; a]$$

donde $A \to \alpha \beta$ es una producción de la gramática y $a \in V_T \cup \{\$\}$ representa el símbolo terminal de anticipación (*lookahead*). El símbolo $a$ estipula que una reducción por la regla $A \to \alpha \beta$ solo estará autorizada si el siguiente token visible en la cinta de entrada coincide estrictamente con $a$.

En un ítem donde el punto no ha alcanzado el final ($[A \to \alpha \cdot \beta, a]$), el símbolo $a$ carece de efecto sobre los desplazamientos; su función es propagarse adecuadamente hacia los ítems derivados para blindar las futuras reducciones.

\vspace{0.3cm}

### 4.2 Operaciones Clausura e Ir_A en LR(1)

\vspace{0.3cm}

#### Clausura LR(1)
Dado un conjunto de ítems LR(1) $I$:
1. Todo ítem de $I$ pertenece a $\text{clausura}(I)$.
2. Si $[A \to \alpha \cdot B \beta, \; a] \in \text{clausura}(I)$ y existe una regla $B \to \gamma \in P$, se añade el ítem inicial:

$$[B \to \cdot \gamma, \; b] \in \text{clausura}(I) \quad \forall b \in \text{INICIALES}(\beta a)$$

Nótese que el lookahead $b$ se calcula evaluando los terminales iniciales de la subcadena $\beta$ concatenada con el lookahead original $a$. Si $\beta$ deriva a la cadena vacía ($\beta \Rightarrow^* \epsilon$), entonces $a$ pasa directamente a formar parte del lookahead de $B$.

\vspace{0.3cm}

#### Ir_A en LR(1)
Para un conjunto de ítems $I$ y un símbolo $X \in V_N \cup V_T$:

$$\text{ir\_a}(I, X) = \text{clausura}(\{ [A \to \alpha X \cdot \beta, \; a] \mid [A \to \alpha \cdot X \beta, \; a] \in I \})$$

\vspace{0.3cm}

### 4.3 Potencia frente al Coste de Estados

El analizador LR(1) Canónico resuelve el conflicto del ejemplo anterior porque distingue que la reducción $V \to id$ solo puede ir seguida del operador de asignación `=`, mientras que la reducción $S \to id$ solo puede ir seguida del centinela de fin de programa $\$$.

No obstante, esta ganancia teórica tiene un precio desorbitado: en gramáticas reales de lenguajes como C, Java o Python, la colección canónica LR(1) suele requerir decenas de miles de estados (frente a unos cientos de estados en LR(0)), haciendo que las tablas canónicas resulten prohibitivas en memoria y lentas de generar.

\vspace{0.4cm}

## 5. Analizador LALR(1) (*Look-Ahead LR*)

El método LALR(1) representa el compromiso de ingeniería óptimo entre la contención en tamaño de SLR(1) y la agudeza contextual de LR(1). Es el algoritmo adoptado internamente por herramientas como YACC y Bison.

\vspace{0.3cm}

### 5.1 Principio de Fusión de Núcleos (*Cores*)

El **núcleo** (*core*) de un conjunto de ítems LR(1) es el subconjunto de ítems LR(0) que resulta tras eliminar los símbolos de anticipación contextual.

El algoritmo LALR(1) opera del siguiente modo:
1. Construye la colección canónica completa de estados LR(1).
2. Localiza todos aquellos pares o grupos de estados que poseen **exactamente el mismo núcleo**.
3. Fusiona dichos estados en un único macroestado LALR, unificando los símbolos de anticipación para cada ítem homólogo:

$$\{[A \to \alpha \cdot \beta, \; a]\} \cup \{[A \to \alpha \cdot \beta, \; b]\} \implies \{[A \to \alpha \cdot \beta, \; a / b]\}$$

Dado que el número de núcleos distintos coincide exactamente con el número de estados de la colección canónica LR(0), el autómata LALR(1) resultante tiene **exactamente el mismo número de estados que el autómata SLR(1)**.

\vspace{0.3cm}

### 5.2 Teorema Fundamental de Preservación de Conflictos

La propiedad matemática medular de la técnica LALR (pregunta canónica de examen) establece:

\vspace{0.3cm}

1. **La fusión de estados con idéntico núcleo nunca introduce conflictos desplaza/reduce nuevos.**
   *Demostración:* Supongamos que en el estado fusionado surgiera un conflicto desplaza/reduce ante el terminal $a$. Esto requeriría la coexistencia de un ítem de desplazamiento $[A \to \alpha \cdot a \beta, b]$ y un ítem de reducción $[B \to \gamma \cdot, a]$. Como la fusión no altera las partes izquierdas ni la posición del punto en las partes derechas, ambos ítems ya existían en los estados LR(1) originales con sus respectivos núcleos. Dado que el terminal $a$ ya estaba en el ítem de reducción de uno de los estados originales y el desplazamiento de $a$ ya operaba en el otro, el conflicto desplaza/reduce ya existía previamente en el autómata LR(1) original. Por tanto, si la gramática era LR(1), la fusión jamás induce conflictos desplaza/reduce.
2. **La fusión de estados sí puede introducir nuevos conflictos reduce/reduce.**
   *Causa:* Si dos estados independientes con idéntico núcleo contenían ítems de reducción disjuntos respecto a sus lookaheads (por ejemplo, $[A \to \alpha \cdot, a]$ en uno y $[B \to \beta \cdot, b]$ en otro), y tras la fusión sus símbolos de anticipación coinciden en algún terminal, el macroestado fusionado exhibirá un conflicto reduce/reduce no presente en LR(1).

\vspace{0.4cm}

## 6. Tratamiento y Resolución de Ambigüedades

En la práctica del diseño de compiladores se emplean gramáticas deliberadamente ambiguas para especificar construcciones sintácticas como las expresiones aritméticas y las sentencias condicionales. Las gramáticas ambiguas permiten formulaciones concisas de una sola línea (por ejemplo, $E \to E + E \mid E * E \mid id$) en lugar de jerarquías multinivel pesadas ($E \to E + T, T \to T * F, F \to id$).

\vspace{0.3cm}

### 6.1 Desambiguación de Operadores

Para una gramática como:

$$E \to E + E \mid E * E \mid id$$

el autómata LR presentará estados con conflictos desplaza/reduce. Al procesar la pila $\$ \, E + E$ ante el terminal $*$, el analizador debe dirimir entre:
- **Reducir por $E \to E + E$:** Otorgaría mayor precedencia a la suma.
- **Desplazar $*$:** Otorga mayor prioridad a la multiplicación.

La asignación explícita de directivas de precedencia y asociatividad resuelve mecánicamente el conflicto en la tabla:
- Si el terminal en la cima tiene mayor precedencia que el terminal entrante ($* \text{ frente a } +$), se elige **reducir**.
- Si el terminal en la cima tiene menor precedencia que el terminal entrante ($+ \text{ frente a } *$), se elige **desplazar**.
- Ante operadores de idéntica precedencia: la asociatividad por la izquierda resuelve en **reducir**, mientras que la asociatividad por la derecha resuelve en **desplazar**.

\vspace{0.3cm}

### 6.2 La Ambigüedad Clásica del *Dangling-Else*

La regla condicional común en lenguajes imperativos:

$$S \to \text{if } C \text{ then } S \mid \text{if } C \text{ then } S \text{ else } S \mid \text{otras\_sentencias}$$

provoca un conflicto desplaza/reduce al encontrarse el token `else` en la entrada tras haber analizado el primer `then S`. El autómata puede:
- **Reducir:** Cerrar la sentencia condicional interior sin rama `else`.
- **Desplazar:** Asociar el `else` entrante al `if` interior inmediatamente precedente.

La convención universal de la teoría de lenguajes establece que el `else` debe asociarse al `if` abierto más cercano. En generadores como YACC y Bison, la regla por defecto ante conflictos desplaza/reduce consiste precisamente en **desplazar**, resolviendo de manera natural y óptima este dilema sintáctico.

\vspace{0.4cm}

## 7. Detección y Recuperación de Errores Sintácticos

Un analizador LR detecta una anomalía de sintaxis en el momento exacto en que consulta una celda vacía en la tabla $\text{ACCIÓN}[s, a]$.

\vspace{0.3cm}

### 7.1 Estrategias de Recuperación

1. **Modo pánico:** El autómata desapila estados hasta descubrir en la cima un estado con transiciones estables sobre un conjunto predefinido de no terminales mayores (como sentencias o declaraciones). A continuación, descarta tokens de la cinta de entrada hasta alcanzar un símbolo de sincronización (típicamente el punto y coma `;` o la llave de cierre `}`) y reanuda el análisis normal.
2. **Reparación a nivel de frase:** Rellena las celdas vacías de la tabla con llamadas a rutinas diagnósticas que emiten mensajes comprensibles (por ejemplo, "falta operando" o "paréntesis sin cerrar") e insertan o alteran localmente los tokens para continuar la compilación.
3. **Método de Graham-Rhodes:** Técnica avanzada que estructura la corrección en dos fases:
   - *Fase de condensación:* Reduce hacia atrás todas las subcadenas circundantes no conflictivas para aislar el contexto del fallo.
   - *Fase de corrección:* Modifica la configuración de la pila y de la entrada minimizando una métrica de coste de edición sintáctica.

\vspace{0.4cm}

## 8. La Herramienta YACC / Bison en la Práctica

YACC (*Yet Another Compiler-Compiler*), y su versión moderna GNU Bison, constituye el estándar industrial y académico para sintetizar analizadores LALR(1) en lenguaje C.

\vspace{0.3cm}

### 8.1 Estructura de la Especificación YACC

Un fichero fuente `.y` se divide formalmente en tres secciones delimitadas por marcas `%%`:

\vspace{0.3cm}

```yacc
%{
/* SECCIÓN 1: Declaraciones en C */
#include <stdio.h>
#include <stdlib.h>
extern int yylex();
void yyerror(const char *s);
%}

/* Declaración de tokens y tipos de atributos */
%token ID NUMERO
%token IF THEN ELSE

/* Declaraciones de precedencia y asociatividad (de menor a mayor) */
%left '+' '-'
%left '*' '/'
%right UMINUS

/* Definición del axioma inicial */
%start programa

%%
/* SECCIÓN 2: Reglas Gramaticales y Acciones Semánticas */
expresion : expresion '+' expresion    { $$ = $1 + $3; }
          | expresion '*' expresion    { $$ = $1 * $3; }
          | '-' expresion %prec UMINUS { $$ = -$2; }
          | NUMERO                     { $$ = $1; }
          ;
%%
/* SECCIÓN 3: Código de Usuario en C */
void yyerror(const char *s) {
    fprintf(stderr, "Error sintáctico: %s\n", s);
}

int main(void) {
    return yyparse();
}
```

\vspace{0.3cm}

### 8.2 Mecanismo de Desambiguación y Directivas Clave

- `%left`, `%right`, `%nonassoc`: Fijan la asociatividad y el nivel de precedencia. La precedencia crece conforme descendemos en las líneas de declaración del bloque inicial.
- `%prec ETIQUETA`: Fuerza a una producción concreta a adoptar la precedencia asignada a `ETIQUETA`, superando la precedencia natural de los tokens que contiene. Se emplea habitualmente para otorgar máxima precedencia al operador menos unario (`%prec UMINUS`).
- Para eliminar el conflicto en la sentencia condicional `if-then-else` en Bison sin alterar la gramática:

```yacc
%nonassoc LOWER_THAN_ELSE
%nonassoc ELSE

%%
sentencia : IF '(' condicion ')' sentencia %prec LOWER_THAN_ELSE
          | IF '(' condicion ')' sentencia ELSE sentencia
          ;
```

Al asignar a `ELSE` mayor precedencia que a `LOWER_THAN_ELSE`, el generador favorece el desplazamiento del token `ELSE`, asociándolo al `IF` más interno y eliminando por completo el conflicto en la tabla.

\vspace{0.3cm}

### 8.3 Recuperación de Errores con el Pseudotoken `error`

YACC ofrece una técnica de sincronización programada mediante el pseudotoken reservado `error`:

\vspace{0.3cm}

```yacc
sentencia : error ';'  { yyerrok; }
          ;
```

Cuando acontece un error:
1. El analizador desapila estados sucesivamente hasta encontrar un estado que tenga una transición activa sobre el token `error`.
2. El autómata desplaza `error` a la pila.
3. Descarta símbolos de la cinta de entrada hasta encontrar el terminal de sincronización especificado tras `error` (en el ejemplo, el `;`).
4. Reduce por la regla de error, ejecuta la acción asociada y reanuda el análisis normal del fichero.
5. La macro `yyerrok` notifica a Bison que la sincronización se ha completado con éxito, restableciendo la emisión de diagnósticos para errores futuros.
6. La macro auxiliar `yyclearin` permite descartar cualquier token de anticipación pendiente en el búfer si el programador desea reiniciar la lectura desde una posición limpia.

\vspace{0.4cm}

## 9. Problemas Integrales de Examen Resueltos Paso a Paso

### 9.1 Problema 1: Construcción de la Colección Canónica LR(0) y Tabla SLR(1)

Dada la gramática aumentada:

\vspace{0.3cm}

(0) $S' \to S$
(1) $S \to A a$
(2) $A \to b$
(3) $A \to c$

\vspace{0.3cm}

1. Obtener la colección canónica completa de conjuntos de ítems LR(0).
2. Calcular los conjuntos de SEGUIDORES de todos los no terminales.
3. Rellenar la tabla de análisis sintáctico SLR(1).
4. Simular la traza completa de la pila para la cadena $b a \$$.

\vspace{0.3cm}

#### Resolución

\vspace{0.3cm}

1. **Colección Canónica LR(0):**
   - $I_0 = \text{clausura}(\{ [S' \to \cdot S] \}) = \{ [S' \to \cdot S], [S \to \cdot A a], [A \to \cdot b], [A \to \cdot c] \}$
   - $\text{ir\_a}(I_0, S) = I_1 = \{ [S' \to S \cdot] \}$
   - $\text{ir\_a}(I_0, A) = I_2 = \{ [S \to A \cdot a] \}$
   - $\text{ir\_a}(I_0, b) = I_3 = \{ [A \to b \cdot] \}$
   - $\text{ir\_a}(I_0, c) = I_4 = \{ [A \to c \cdot] \}$
   - $\text{ir\_a}(I_2, a) = I_5 = \{ [S \to A a \cdot] \}$

2. **Conjuntos SEGUIDORES:**
   - $\text{SEGUIDORES}(S) = \{\$\}$ (axioma).
   - $\text{SEGUIDORES}(A) = \{a\}$ (de la producción $S \to A a$).

3. **Tabla de Análisis SLR(1):**

\vspace{0.3cm}

| Estado | $a$ | $b$ | $c$ | $\$$ | $S$ | $A$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | | $d_3$ | $d_4$ | | 1 | 2 |
| **1** | | | | $acc$ | | |
| **2** | $d_5$ | | | | | |
| **3** | $r_2$ | | | | | |
| **4** | $r_3$ | | | | | |
| **5** | | | | $r_1$ | | |

\vspace{0.3cm}

*Diagnóstico:* En los estados de reducción $I_3$ y $I_4$, las reducciones solo se posicionan en la columna del seguidor $a \in \text{SEGUIDORES}(A)$. Ninguna celda contiene instrucciones solapadas. **La gramática es estrictamente SLR(1)**.

4. **Traza de Pila para $b a \$:$**

\vspace{0.3cm}

| Paso | Pila | Entrada | Acción |
| :---: | :--- | ---: | :--- |
| 1 | $\$ \, 0$ | $b a \$$ | $\text{ACCIÓN}[0, b] = d_3$: desplaza $b$, apila 3 |
| 2 | $\$ \, 0 \, b \, 3$ | $a \$$ | $\text{ACCIÓN}[3, a] = r_2$ ($A \to b$): desapila $b 3$, cima 0, $\text{IR\_A}[0, A] = 2$ |
| 3 | $\$ \, 0 \, A \, 2$ | $a \$$ | $\text{ACCIÓN}[2, a] = d_5$: desplaza $a$, apila 5 |
| 4 | $\$ \, 0 \, A \, 2 \, a \, 5$ | $\$$ | $\text{ACCIÓN}[5, \$] = r_1$ ($S \to A a$): desapila 4 elementos, cima 0, $\text{IR\_A}[0, S] = 1$ |
| 5 | $\$ \, 0 \, S \, 1$ | $\$$ | $\text{ACCIÓN}[1, \$] = acc$: Aceptación exitosa |

\vspace{0.4cm}

### 9.2 Problema 2: Diagnóstico del Fallo de SLR(1) ante Seguidores Globales

Dada la gramática que modela llamadas a funciones y asignaciones:

\vspace{0.3cm}

(0) $S' \to S$
(1) $S \to id$
(2) $S \to V = E$
(3) $V \to id$
(4) $E \to V$
(5) $E \to num$

\vspace{0.3cm}

Demostrar formalmente por qué esta gramática produce un conflicto reduce/reduce en SLR(1).

\vspace{0.3cm}

#### Resolución

\vspace{0.3cm}

1. Calculamos el estado inicial $I_0$:
   $$I_0 = \text{clausura}(\{ [S' \to \cdot S] \}) = \{ [S' \to \cdot S], [S \to \cdot id], [S \to \cdot V = E], [V \to \cdot id] \}$$
2. Calculamos la transición bajo el terminal $id$:
   $$\text{ir\_a}(I_0, id) = I_k = \{ [S \to id \cdot], \; [V \to id \cdot] \}$$
   Ambos ítems son ítems completos de reducción.
3. Regla de relleno SLR(1):
   - Reducción (1) $S \to id$ se coloca en $\text{SEGUIDORES}(S) = \{\$\}$.
   - Reducción (3) $V \to id$ se coloca en $\text{SEGUIDORES}(V)$.
4. Cálculo de $\text{SEGUIDORES}(V)$:
   - De la regla $S \to V = E$, $= \in \text{SEGUIDORES}(V)$.
   - De la regla $E \to V$, $\text{SEGUIDORES}(E) \subseteq \text{SEGUIDORES}(V)$.
   - De la regla $S \to V = E$, como $E$ finaliza la producción, $\text{SEGUIDORES}(S) \subseteq \text{SEGUIDORES}(E) \implies \$ \in \text{SEGUIDORES}(V)$.
5. Conflicto resultante:
   En la celda $\text{ACCIÓN}[k, \$]$ coinciden $r_1$ y $r_3$. Se produce un **conflicto reduce/reduce irresoluble en SLR(1)**.
   *Causa raíz:* En la derivación de una asignación, $V$ solo puede ir seguido de $=$. El centinela $\$$ solo sigue a $V$ cuando este actúa como expresión derecha en otra estructura. Al colapsar todos los contextos en un único conjunto de seguidores globales, SLR(1) pierde la discriminación contextual.

\vspace{0.4cm}

### 9.3 Problema 3: Colección Canónica LR(1) Canónica (Ejemplo Canónico UGR)

Dada la gramática de la cátedra (ETSIIT UGR, Tema 6, Diapositiva 25):

\vspace{0.3cm}

(0) $S' \to S$
(1) $S \to C C$
(2) $C \to a C$
(3) $C \to d$

\vspace{0.3cm}

Construir los estados LR(1) con símbolos de anticipación (*lookahead*) y verificar la ausencia de conflictos.

\vspace{0.3cm}

#### Resolución

\vspace{0.3cm}

Iniciamos con el ítem aumentado $[S' \to \cdot S, \; \$]$:

\vspace{0.2cm}

- **$I_0 = \text{clausura}(\{ [S' \to \cdot S, \; \$] \})$:**
  - $[S' \to \cdot S, \; \$]$
  - $[S \to \cdot C C, \; \$]$
  - Anticipación para $C$: $\text{INICIALES}(C \$) = \{a, d\}$.
  - $[C \to \cdot a C, \; a/d]$
  - $[C \to \cdot d, \; a/d]$

\vspace{0.2cm}

- **Transiciones desde $I_0$:**
  - $\text{ir\_a}(I_0, S) = I_1 = \{ [S' \to S \cdot, \; \$] \}$
  - $\text{ir\_a}(I_0, C) = I_2 = \{ [S \to C \cdot C, \; \$], \; [C \to \cdot a C, \; \$], \; [C \to \cdot d, \; \$] \}$
    *(Nótese que la anticipación para el segundo $C$ es $\text{INICIALES}(\epsilon \$) = \{\$\}$)*
  - $\text{ir\_a}(I_0, a) = I_3 = \{ [C \to a \cdot C, \; a/d], \; [C \to \cdot a C, \; a/d], \; [C \to \cdot d, \; a/d] \}$
  - $\text{ir\_a}(I_0, d) = I_4 = \{ [C \to d \cdot, \; a/d] \}$

\vspace{0.2cm}

- **Transiciones desde $I_2$:**
  - $\text{ir\_a}(I_2, C) = I_5 = \{ [S \to C C \cdot, \; \$] \}$
  - $\text{ir\_a}(I_2, a) = I_6 = \{ [C \to a \cdot C, \; \$], \; [C \to \cdot a C, \; \$], \; [C \to \cdot d, \; \$] \}$
  - $\text{ir\_a}(I_2, d) = I_7 = \{ [C \to d \cdot, \; \$] \}$

\vspace{0.2cm}

- **Transiciones desde $I_3$ e $I_6$:**
  - $\text{ir\_a}(I_3, C) = I_8 = \{ [C \to a C \cdot, \; a/d] \}$
  - $\text{ir\_a}(I_3, a) = I_3, \quad \text{ir\_a}(I_3, d) = I_4$
  - $\text{ir\_a}(I_6, C) = I_9 = \{ [C \to a C \cdot, \; \$] \}$
  - $\text{ir\_a}(I_6, a) = I_6, \quad \text{ir\_a}(I_6, d) = I_7$

\vspace{0.3cm}

La colección canónica consta de 10 estados ($I_0$ a $I_9$). Las reducciones se ubican estrictamente en las columnas que coinciden con su lookahead ($I_4$ en $a, d$; $I_7$ en $\$$; $I_8$ en $a, d$; $I_9$ en $\$$; $I_5$ en $\$$). No existe solapamiento en ninguna celda. **La gramática es estrictamente LR(1)**.

\vspace{0.4cm}

### 9.4 Problema 4: Fusión de Núcleos en LALR(1)

A partir de la colección canónica LR(1) del problema anterior, obtener el autómata LALR(1) fusionando estados con núcleos idénticos.

\vspace{0.3cm}

#### Resolución

\vspace{0.3cm}

Examinamos los conjuntos de ítems LR(0) (ignorando los lookaheads):
1. **Fusión de $I_3$ e $I_6$:** Comparten el núcleo $\{ [C \to a \cdot C], [C \to \cdot a C], [C \to \cdot d] \}$.
   - Se crea el macroestado $I_{36}$ uniendo lookaheads: $\{a, d\} \cup \{\$\} = \{a, d, \$\}$.
2. **Fusión de $I_4$ e $I_7$:** Comparten el núcleo $\{ [C \to d \cdot] \}$.
   - Se crea el macroestado $I_{47}$ con lookahead $\{a, d, \$\}$.
3. **Fusión de $I_8$ e $I_9$:** Comparten el núcleo $\{ [C \to a C \cdot] \}$.
   - Se crea el macroestado $I_{89}$ con lookahead $\{a, d, \$\}$.
4. Los estados $I_0, I_1, I_2, I_5$ permanecen inalterados por poseer núcleos únicos.

El autómata LALR(1) colapsa los 10 estados en solo **6 estados**, igualando exactamente el tamaño de la tabla SLR(1). Puesto que los lookaheads unificados no entran en conflicto con desplazamientos ni con otras reducciones, la gramática es **LALR(1)**.

\vspace{0.4cm}

### 9.5 Problema 5: Teorema de Preservación de Conflictos y el Caso Clásico de Aho-Sethi-Ullman

Demostrar que la fusión LALR(1) puede inducir conflictos reduce/reduce que no existían en LR(1), utilizando la gramática canónica:

\vspace{0.3cm}

$$S \to a A d \mid b B d \mid a B e \mid b A e$$
$$A \to c$$
$$B \to c$$

\vspace{0.3cm}

#### Resolución

\vspace{0.3cm}

1. **Análisis en LR(1):**
   - Tras consumir la secuencia $a c$, el analizador alcanza un estado $I_i$ con:
     $$[A \to c \cdot, \; d], \quad [B \to c \cdot, \; e]$$
     Los lookaheads $\{d\}$ y $\{e\}$ son estrictamente disjuntos. Ante $d$ reduce por $A$, y ante $e$ reduce por $B$. Cero conflictos.
   - Tras consumir la secuencia $b c$, el analizador alcanza un estado $I_j$ con:
     $$[A \to c \cdot, \; e], \quad [B \to c \cdot, \; d]$$
     Los lookaheads $\{e\}$ y $\{d\}$ son estrictamente disjuntos. Cero conflictos.
   Por tanto, **la gramática es LR(1)**.

2. **Fusión LALR(1):**
   Los estados $I_i$ e $I_j$ tienen exactamente el mismo núcleo: $\{ [A \to c \cdot], [B \to c \cdot] \}$.
   Al fusionarlos en el macroestado LALR $I_{ij}$, los símbolos de anticipación se unen para cada ítem:
   - $[A \to c \cdot, \; d / e]$
   - $[B \to c \cdot, \; d / e]$

3. **Conflicto inducido:**
   En el macroestado $I_{ij}$, ante el terminal $d$, la tabla debe decidir si reduce por $A \to c$ o por $B \to c$. Lo mismo sucede ante el terminal $e$.
   Se genera un **conflicto reduce/reduce en LALR(1)** inducido exclusivamente por la unión de núcleos. Esto demuestra experimentalmente que $LALR(1) \subset LR(1)$ es una inclusión estricta.

\vspace{0.4cm}

### 9.6 Problema 6: Especificación Modular Yacc/Bison con Desambiguación y Sincronización

Diseñar una especificación Yacc/Bison completa y robusta para un procesador de sentencias que satisfaga:
1. Resolución de ambigüedad en operadores binarios con precedencia `%left '+' '-'` y `%left '*' '/'`.
2. Asignación de máxima precedencia al operador menos unario mediante `%prec UMINUS`.
3. Sincronización de errores sintácticos mediante el token `error` y punto y coma `;` con llamada a `yyerrok`.

\vspace{0.3cm}

#### Código Fuente (`calculadora.y`)

\vspace{0.3cm}

```yacc
%{
#include <stdio.h>
#include <stdlib.h>

extern int yylex();
void yyerror(const char *mensaje);
int memoria[26];
%}

%token NUMERO IDENTIFICADOR
%token ASIGN PCOMA
%left '+' '-'
%left '*' '/'
%right UMINUS
%start bloque

%%

bloque : bloque instruccion
       | /* vacio */
       ;

instruccion : IDENTIFICADOR ASIGN expresion PCOMA 
              { 
                memoria[$1] = $3; 
                printf("Asignacion valida: variable [%c] = %d\n", $1 + 'a', $3); 
              }
            | expresion PCOMA                    
              { 
                printf("Resultado evaluado = %d\n", $1); 
              }
            | error PCOMA                        
              { 
                yyerrok; 
                printf("Recuperacion completada: descartada instruccion errónea hasta ';'\n"); 
              }
            ;

expresion : expresion '+' expresion          { $$ = $1 + $3; }
          | expresion '-' expresion          { $$ = $1 - $3; }
          | expresion '*' expresion          { $$ = $1 * $3; }
          | expresion '/' expresion          
            { 
              if ($3 == 0) {
                  yyerror("Error en ejecucion: Division por cero");
                  $$ = 0;
              } else {
                  $$ = $1 / $3;
              }
            }
          | '-' expresion %prec UMINUS       { $$ = -$2; }
          | '(' expresion ')'                { $$ = $2; }
          | NUMERO                           { $$ = $1; }
          | IDENTIFICADOR                    { $$ = memoria[$1]; }
          ;

%%

void yyerror(const char *mensaje) {
    fprintf(stderr, "Diagnóstico del compilador: %s\n", mensaje);
}

int main(void) {
    printf("Procesador de Lenguajes listo para recibir entrada.\n");
    return yyparse();
}
```
