# Métodos de Análisis Sintáctico Ascendentes y Precedencias

## 1. El Motor de Desplazamiento y Reducción (*Shift-Reduce*)

El análisis sintáctico ascendente (*Bottom-Up*) aborda la construcción del árbol en orden inverso: arranca en las hojas con la secuencia de tokens leída de la entrada y busca reducir subcadenas sucesivas hacia los no terminales de la gramática hasta alcanzar el axioma inicial $S$.

Esta familia de analizadores se apoya en una máquina de pila que ejecuta cuatro operaciones atómicas:

\vspace{0.3cm}

- **Desplazar (*Shift*):** Lee el siguiente token de la cinta de entrada y lo apila en la cima de la pila.
- **Reducir (*Reduce*):** Localiza en la cima de la pila una subcadena $\tau$ que coincide exactamente con el lado derecho de una producción $A \to \tau$. Extrae los símbolos de $\tau$ y apila en su lugar el no terminal $A$.
- **Aceptar (*Accept*):** Si la cinta de entrada se ha consumido por completo y en la pila solo resta el axioma inicial $S$ sobre el centinela de fondo $\$$, el análisis concluye satisfactoriamente.
- **Error:** El autómata no puede ni desplazar el token actual ni reducir válidamente la cima de la pila.

\vspace{0.4cm}

## 2. Los Conflictos Ascendentes Clásicos

En gramáticas no restringidas, el analizador puede encontrarse en situaciones de indecisión determinista:

\vspace{0.3cm}

- **Conflicto Desplaza/Reduce (*Shift/Reduce*):** El autómata no puede decidir si debe desplazar el siguiente token de entrada a la pila o si debe reducir los elementos que ya residen en la cima. Es el conflicto típico en construcciones como sentencias `if-then-else`.
- **Conflicto Reduce/Reduce:** La subcadena alojada en la cima de la pila coincide con el lado derecho de dos o más producciones distintas ($A \to \tau$ y $B \to \tau$), desconociendo a qué no terminal debe reducir.

\vspace{0.4cm}

## 3. Análisis de Precedencia de Operador

Propuesto originalmente por Robert Floyd en 1963, este método predictivo ascendente fue diseñado para compilar expresiones algebraicas complejas prescindiendo de la construcción de gramáticas completas.

\vspace{0.4cm}

### Restricciones de una Gramática de Operador

Para poder aplicar precedencia de operador, la gramática debe cumplir dos restricciones fundamentales:

\vspace{0.3cm}

1. No existen producciones que deriven a la cadena vacía ($A \to \epsilon$).
2. No aparecen dos símbolos no terminales contiguos en la parte derecha de ninguna producción (no se permiten formas $A \to \alpha B C \beta$).

\vspace{0.4cm}

### Relaciones de Precedencia entre Operadores

Las relaciones se evalúan estrictamente entre terminales (operadores e identificadores), sin intervenir los no terminales:

\vspace{0.3cm}

- $a \lessdot b$: El terminal $a$ tiene menor precedencia que $b$. Ordena la acción de **desplazar** $b$ a la pila.
- $a \doteq b$: Ambos terminales tienen igual precedencia (emparejamientos de ámbito, como paréntesis `(` $\doteq$ `)`).
- $a \gtrdot b$: El terminal $a$ tiene mayor precedencia que $b$. Indica que se ha alcanzado el límite derecho de un subcálculo y ordena la acción de **reducir**.

*Propiedad matemática formal:* Estas relaciones no constituyen relaciones de orden convencionales, ya que carecen de transitividad y no son simétricas (que $a \lessdot b$ se cumpla no excluye que en otro contexto se dé $b \lessdot a$).

\vspace{0.4cm}

### Cálculo Formal mediante PRIMERO y ULTIMO (*FirstOp* y *LastOp*)

Para cada símbolo no terminal $A$, se definen los conjuntos de terminales extremos:

$$\text{PRIMERO}(A) = \{a \in V_T \mid A \Rightarrow^* a\dots \lor A \Rightarrow^* X a\dots \quad (X \in V_N)\}$$
$$\text{ULTIMO}(A) = \{a \in V_T \mid A \Rightarrow^* \dots a \lor A \Rightarrow^* \dots a X \quad (X \in V_N)\}$$

Con estos conjuntos, la tabla de relaciones de precedencia se construye inspeccionando las subcadenas del lado derecho de las producciones:
- Si aparece $a B$ con $a \in V_T$ y $B \in V_N$, entonces $a \lessdot b$ para todo $b \in \text{PRIMERO}(B)$.
- Si aparece $B a$ con $B \in V_N$ y $a \in V_T$, entonces $b \gtrdot a$ para todo $b \in \text{ULTIMO}(B)$.
- Para los delimitadores externos: $\$ \lessdot a$ para todo $a \in \text{PRIMERO}(S)$ y $b \gtrdot \$$ para todo $b \in \text{ULTIMO}(S)$.

\vspace{0.4cm}

### Limitaciones de la Precedencia de Operador

- **Ceguera de no terminales:** Durante la reducción solo se verifica el operador terminal, ignorando los no terminales intermediarios. En consecuencia, el analizador acepta como sintácticamente válidas secuencias erróneas como `id + + id` o `* id`.
- **Incapacidad ante operadores polimórficos:** Presenta serias deficiencias al manejar símbolos con distinta precedencia según el contexto sintáctico, como el operador menos (`-`), que tiene precedencia unaria alta y precedencia binaria media.

\vspace{0.4cm}

## 4. Análisis de Precedencia Simple (Wirth y Weber, 1966)

Para subsanar las limitaciones de la precedencia de operador, Niklaus Wirth y Helmut Weber extendieron las relaciones de precedencia a **todos los símbolos** del vocabulario gramatical, comparando indistintamente terminales y no terminales ($V_N \cup V_T$).

\vspace{0.4cm}

### El Concepto de Pivote (*Handle* o Mango)

El pivote es la subcadena alojada en la cima de la pila que coincide con la parte derecha de una regla gramatical, cuya sustitución por la parte izquierda representa un paso formal en la inversión de una derivación canónica por la derecha.

En precedencia simple, el pivote queda delimitado inequívocamente por las relaciones de precedencia calculadas sobre los símbolos adyacentes:

$$\lessdot X_1 \doteq X_2 \doteq \dots \doteq X_k \gtrdot$$

\vspace{0.4cm}

### Reglas para la Tabla de Precedencia Simple

Sobre cualquier par de símbolos $X, Y \in (V_N \cup V_T)$:

\vspace{0.3cm}

1. $X \doteq Y$: Si existe una producción $A \to \alpha X Y \beta$ (ambos símbolos cuelgan de un mismo nodo en el árbol sintáctico).
2. $X \lessdot Y$: Si existe una producción $A \to \alpha X B \beta$ tal que $B \Rightarrow^+ Y \gamma$ ($X$ cuelga de un nodo a la izquierda e inmediatamente superior al nodo del que desciende $Y$).
3. $X \gtrdot Y$: Si existe una producción $A \to \alpha B \beta$ tal que $B \Rightarrow^+ \gamma X$ y además $\beta \Rightarrow^* Y \delta$ o bien $Y \in \text{SEGUIDORES}(A)$.

\vspace{0.4cm}

### Restricciones de una Gramática de Precedencia Simple

1. **Unívocamente Invertible:** No existen dos producciones con idéntica parte derecha ($A \to \alpha$ y $B \to \alpha \implies A = B$).
2. **Ausencia de $\epsilon$-producciones:** No existen reglas que deriven en la cadena vacía.
3. **Relaciones Disjuntas:** Entre cualquier par de símbolos $X, Y$ existe como máximo una única relación de precedencia. Si para un par aparecen simultáneamente $\lessdot$ y $\gtrdot$, la gramática no es de precedencia simple.

\vspace{0.4cm}

## 5. Detección y Tratamiento de Errores

En el análisis sintáctico por precedencia, los fallos emergen en dos escenarios concretos:

\vspace{0.3cm}

- **Error de relación (hueco en la tabla):** Al consultar la relación entre el símbolo en la cima de la pila y el símbolo actual de la entrada, la celda correspondiente carece de relación definida.
- **Error de reducción:** El analizador identifica los límites del pivote ($\lessdot \dots \gtrdot$), pero la subcadena aislada no se corresponde con el lado derecho de ninguna producción registrada en la gramática. La recuperación pasa por vaciar estados de la pila o insertar operandos asumidos según las heurísticas de Aho y Ullman.
