# Métodos de Análisis Sintáctico Ascendentes y Precedencias

## 1. El Motor de Desplazamiento y Reducción (*Shift-Reduce*)

El análisis sintáctico ascendente (*Bottom-Up*) aborda la construcción del árbol sintáctico desde las hojas hacia la raíz. Su propósito consiste en determinar si una secuencia de terminales de entrada $w \in V_T^*$ pertenece al lenguaje $L(G)$, aplicando reducciones sucesivas basadas en las producciones de la gramática hasta alcanzar el axioma inicial $S$.

Desde una perspectiva formal, este proceso invierte paso a paso una derivación canónica por la derecha (*rightmost derivation in reverse*). Si la derivación directa genera las formas sentenciales derechas:

$$S \Rightarrow_{rm} \gamma_1 \Rightarrow_{rm} \gamma_2 \dots \Rightarrow_{rm} \gamma_{n-1} \Rightarrow_{rm} w$$

el analizador ascendente parte de $\gamma_n = w$ y efectúa la secuencia inversa de reducciones:

$$\gamma_n \Leftarrow \gamma_{n-1} \Leftarrow \dots \Leftarrow \gamma_1 \Leftarrow S$$

\vspace{0.3cm}

### 1.1 Modelo Formal del Autómata de Pila

El analizador ascendente general opera sobre una máquina de pila determinista o no determinista caracterizada por los siguientes componentes:

\vspace{0.3cm}

- **Alfabeto de la pila ($\Gamma$):** Formado por la unión de terminales, no terminales y el marcador de fondo de pila: $\Gamma = V_T \cup V_N \cup \{\$\}$.
- **Alfabeto de entrada ($\Sigma$):** Compuesto por los terminales del lenguaje junto con el delimitador de fin de cadena: $\Sigma = V_T \cup \{\$\}$.
- **Descripción instantánea:** Representada en todo momento por la terna formada por el contenido de la pila, la secuencia restante en la cinta de entrada y el histórico de producciones aplicadas:

$$(\$ \, \alpha, \; w \, \$, \; \pi)$$

donde $\alpha \in (V_N \cup V_T)^*$, $w \in V_T^*$ y $\pi$ denota la secuencia de reglas gramaticales reducidas hasta el instante actual.

\vspace{0.3cm}

### 1.2 Las Cuatro Acciones Fundamentales

La función de control del autómata ejecuta cuatro operaciones sobre la configuración instantánea:

\vspace{0.3cm}

1. **Desplazar (*Shift*):** Lee el símbolo terminal situado bajo el cabezal de entrada, lo introduce en la cima de la pila y avanza el puntero de lectura una posición a la derecha:

$$(\$ \, \alpha, \; a \, w \, \$, \; \pi) \vdash (\$ \, \alpha \, a, \; w \, \$, \; \pi)$$

2. **Reducir (*Reduce*):** Identifica en la cima de la pila una subcadena $\beta$ que coincide con la parte derecha de una regla gramatical $A \to \beta$. Extrae dicha subcadena $\beta$ de la pila e inserta en su lugar el no terminal $A$:

$$(\$ \, \alpha \, \beta, \; w \, \$, \; \pi) \vdash (\$ \, \alpha \, A, \; w \, \$, \; \pi \cdot [A \to \beta])$$

3. **Aceptar (*Accept*):** Si la cinta de entrada se ha consumido por completo (apunta a $\$$) y en la pila solo resta el axioma inicial $S$ sobre el centinela de fondo, el proceso concluye con éxito:

$$(\$ \, S, \; \$, \; \pi) \implies \text{Éxito de Reconocimiento}$$

4. **Error:** Ocurre cuando el autómata alcanza una configuración donde no es posible aplicar desplazamiento, ninguna reducción válida casa con la cima de la pila y no se cumplen las condiciones de aceptación.

\vspace{0.4cm}

## 2. Los Conflictos Ascendentes Clásicos

En gramáticas libres de contexto arbitrarias, el analizador carece de información suficiente para saber si conviene desplazar o reducir en un momento dado, o bien desconoce por qué regla reducir. Emergen dos tipos de indecisión:

\vspace{0.3cm}

- **Conflicto Desplaza/Reduce (*Shift/Reduce*):** La configuración de la pila contiene una subcadena que coincide con el lado derecho de una producción $A \to \beta$, invitando a reducir, pero al mismo tiempo el desplazamiento del siguiente terminal de entrada $a$ permitiría formar una subcadena más larga perteneciente a otra derivación válida.
- **Conflicto Reduce/Reduce (*Reduce/Reduce*):** La subcadena alojada en la cima de la pila coincide simultáneamente con la parte derecha de dos o más producciones distintas ($A \to \beta$ y $B \to \beta$, con $A \neq B$). El autómata no puede dilucidar a qué no terminal debe reducir.

Sin restricciones gramaticales predictivas o tablas auxiliares, el método de desplazamiento y reducción general se ve forzado a explorar ramas mediante retroceso (*backtracking*), lo que arruina el tiempo lineal de ejecución.

\vspace{0.4cm}

## 3. Análisis de Precedencia de Operador

Introducido formalmente por Robert Floyd en 1963, el análisis de precedencia de operador representa una técnica ascendente determinista orientada al procesamiento ágil de expresiones aritméticas y fórmulas algebraicas.

\vspace{0.3cm}

### 3.1 Definición y Restricciones de una Gramática de Operador

Una gramática independiente del contexto $G = (V_N, V_T, P, S)$ es una **gramática de operador** si satisface dos condiciones estructurales:

\vspace{0.3cm}

1. **Ausencia de producciones vacías:** No existe ninguna producción en $P$ de la forma $A \to \epsilon$.
2. **No contigüidad de no terminales:** En el lado derecho de ninguna producción aparecen dos variables contiguas. Es decir, no existen reglas de la forma $A \to \alpha B C \beta$ con $B, C \in V_N$.

\vspace{0.3cm}

### 3.2 Relaciones de Precedencia entre Terminales

En esta técnica, las decisiones operativas se toman consultando relaciones definidas exclusivamente entre pares de símbolos terminales ($a, b \in V_T \cup \{\$\}$):

\vspace{0.3cm}

- **Menor precedencia ($a \lessdot b$):** Indica que el símbolo $a$ en la pila cede la prioridad ante el símbolo $b$ de la entrada. El analizador debe **desplazar** $b$.
- **Igual precedencia ($a \doteq b$):** Ambos terminales forman parte de una misma estructura sintáctica o delimitación equilibrada (por ejemplo, el paréntesis de apertura y el de cierre `(` $\doteq$ `)`). El analizador mantiene ambos símbolos vinculados en la pila.
- **Mayor precedencia ($a \gtrdot b$):** El terminal $a$ en la pila posee mayor prioridad que el terminal entrante $b$. Marca el límite derecho de la subcadena que debe ser **reducida**.

\vspace{0.3cm}

*Propiedad matemática:* Estas relaciones no son relaciones de orden en sentido algebraico. Carecen de simetría (que $a \lessdot b$ sea cierto no impide que en otra configuración se dé $b \lessdot a$) y no satisfacen la propiedad transitiva.

\vspace{0.3cm}

### 3.3 Métodos para la Obtención de las Relaciones

Existen tres métodos reconocidos para construir la tabla de relaciones de precedencia:

\vspace{0.3cm}

1. **Método intuitivo:** Asigna las relaciones apoyándose en las jerarquías de prioridad y asociatividad estándar del álgebra escolar. Por ejemplo, la multiplicación tiene mayor precedencia que la suma ($* \gtrdot +$, $+ \lessdot *$), y la asociatividad por la izquierda determina $+ \gtrdot +$.
2. **Método deductivo:** Examina las derivaciones formales y los árboles sintácticos en gramáticas no ambiguas, observando qué operadores se resuelven a menor cota en el árbol respecto a otros.
3. **Método asociativo y algorítmico formal:** Basado en el cálculo analítico de los conjuntos extremos de terminales para cada no terminal de la gramática.

\vspace{0.3cm}

### 3.4 Cálculo Algorítmico mediante PRIMERO y ULTIMO (*FirstOp* y *LastOp*)

Para cada no terminal $A \in V_N$, se definen los conjuntos de terminales que pueden aparecer en las posiciones extremas de sus formas derivadas:

$$\text{PRIMERO}(A) = \{a \in V_T \mid A \Rightarrow^+ a \dots \lor A \Rightarrow^+ B a \dots \quad \text{con } B \in V_N\}$$

$$\text{ULTIMO}(A) = \{a \in V_T \mid A \Rightarrow^+ \dots a \lor A \Rightarrow^+ \dots a B \quad \text{con } B \in V_N\}$$

El cálculo de estos conjuntos se realiza mediante el siguiente algoritmo de propagación:

\vspace{0.3cm}

1. Si $A \to a \dots$ o $A \to B a \dots$, entonces $a \in \text{PRIMERO}(A)$.
2. Si $A \to B \dots$ y $b \in \text{PRIMERO}(B)$, entonces $b \in \text{PRIMERO}(A)$.
3. Si $A \to \dots a$ o $A \to \dots a B$, entonces $a \in \text{ULTIMO}(A)$.
4. Si $A \to \dots B$ y $b \in \text{ULTIMO}(B)$, entonces $b \in \text{ULTIMO}(A)$.

Una vez computados, la tabla de relaciones entre terminales se rellena inspeccionando las partes derechas de todas las producciones:

\vspace{0.3cm}

- **Regla para $\doteq$:** Para cada subcadena de la forma $a b$ o $a B b$ en la parte derecha de una regla ($a, b \in V_T, B \in V_N$), se establece $a \doteq b$.
- **Regla para $\lessdot$:** Para cada subcadena de la forma $a B$ con $a \in V_T$ y $B \in V_N$, se establece $a \lessdot b$ para todo $b \in \text{PRIMERO}(B)$.
- **Regla para $\gtrdot$:** Para cada subcadena de la forma $B a$ con $B \in V_N$ y $a \in V_T$, se establece $b \gtrdot a$ para todo $b \in \text{ULTIMO}(B)$.
- **Delimitadores de frontera ($\$$):** Se fija $\$ \lessdot a$ para todo $a \in \text{PRIMERO}(S)$, y $b \gtrdot \$$ para todo $b \in \text{ULTIMO}(S)$.

\vspace{0.3cm}

### 3.5 Algoritmo del Analizador de Precedencia de Operador

El analizador mantiene en la pila terminales y no terminales, pero toma sus decisiones de avance comparando únicamente el terminal más alto de la pila con el terminal entrante:

\vspace{0.3cm}

1. Sea $a$ el terminal visible más cercano a la cima de la pila (saltando los no terminales que residan por encima) y sea $b$ el terminal actual de la entrada.
2. Si $a \lessdot b$ o $a \doteq b$:
   - Desplaza el token $b$ a la pila y avanza el lector de entrada.
3. Si $a \gtrdot b$:
   - Se ha alcanzado el extremo derecho de la subcadena reducible.
   - El analizador retrocede en la pila examinando pares sucesivos de terminales hasta encontrar el primer terminal $c$ que cumpla $c \lessdot d$.
   - La subcadena situada entre dicho $c$ y la cima forma el mango de reducción.
   - Se reduce dicha subcadena sustituyéndola por un no terminal genérico.
4. Si la celda de la tabla está vacía, se dispara la rutina de error sintáctico.

\vspace{0.3cm}

### 3.6 Funciones de Precedencia

Almacenar una tabla bidimensional de tamaño $|V_T \cup \{\$\}| \times |V_T \cup \{\$\}|$ consume memoria innecesaria. Cuando las relaciones lo permiten, la tabla se compacta en dos funciones enteras:

$$f: V_T \cup \{\$\} \to \mathbb{Z}^+ \quad \text{y} \quad g: V_T \cup \{\$\} \to \mathbb{Z}^+$$

tales que para cualquier par de terminales se preserva la relación original:

\vspace{0.3cm}

- $a \lessdot b \iff f(a) < g(b)$
- $a \doteq b \iff f(a) = g(b)$
- $a \gtrdot b \iff f(a) > g(b)$

Para construir $f$ y $g$:
1. Se crea un grafo dirigido con nodos $\{f_a \mid a \in V_T \cup \{\$\}\} \cup \{g_a \mid a \in V_T \cup \{\$\}\}$.
2. Si $a \lessdot b$, se dibuja una arista dirigida de $g_b$ a $f_a$.
3. Si $a \gtrdot b$, se dibuja una arista dirigida de $f_a$ a $g_b$.
4. Si $a \doteq b$, se fusionan los nodos $f_a$ y $g_b$ en un único supernodo.
5. El valor de $f(a)$ y $g(a)$ equivale a la longitud del camino más largo que parte desde dicho nodo. Si el grafo contiene algún ciclo dirigido, es imposible construir funciones de precedencia para esa gramática.

\vspace{0.3cm}

### 3.7 Limitaciones Críticas del Método

El análisis de precedencia de operador exhibe dos debilidades severas:

\vspace{0.3cm}

1. **Ceguera ante no terminales:** Dado que las relaciones ignoran la identidad de las variables, el autómata ejecuta reducciones mecánicas sin cotejar si la parte derecha existe en la gramática. Por consiguiente, acepta como cadenas válidas entradas sintácticamente erróneas como `id + + id` o `* id`.
2. **Tokens polimórficos de doble precedencia:** Resulta incapaz de manejar operadores cuyo peso depende del contexto sintáctico, como el operador menos (`-`), que requiere alta precedencia en versión unaria y precedencia intermedia en versión binaria.

\vspace{0.4cm}

## 4. Análisis de Precedencia Simple (Wirth y Weber, 1966)

Desarrollado por Niklaus Wirth y Helmut Weber, este método generaliza las precedencias a **la totalidad del vocabulario** de la gramática, estableciendo relaciones tanto entre terminales como entre no terminales ($V_N \cup V_T$).

\vspace{0.3cm}

### 4.1 Definición Rigurosa de Pivote (*Handle*)

En una forma sentencial derecha $\gamma = \alpha \beta w$ obtenida en el curso de una derivación canónica por la derecha:

$$S \Rightarrow_{rm}^* \alpha A w \Rightarrow_{rm} \alpha \beta w$$

se define el **pivote** (*handle* o mango) como la subcadena $\beta$ en la posición respectiva, cuya reducción al no terminal $A$ mediante la producción $A \to \beta$ restituye el paso previo de la derivación canónica inversa.

\vspace{0.3cm}

### 4.2 Definición Formal de las Relaciones de Precedencia Simple

Sobre cualquier par de símbolos $X, Y \in (V_N \cup V_T)$:

\vspace{0.3cm}

1. **Igual precedencia ($X \doteq Y$):** Se cumple si existe una producción en la gramática que contiene a ambos símbolos en posiciones adyacentes:

$$\exists A \to \alpha X Y \beta \in P$$

2. **Menor precedencia ($X \lessdot Y$):** Se cumple si existe una producción donde $X$ precede a un no terminal $B$ que deriva en una cadena que arranca con $Y$:

$$\exists A \to \alpha X B \beta \in P \quad \text{tal que} \quad B \Rightarrow^+ Y \gamma$$

3. **Mayor precedencia ($X \gtrdot Y$):** Se cumple si existe una producción donde un no terminal $B$ deriva en una cadena que finaliza con $X$, y dicho $B$ va seguido inmediatamente de $Y$ (o de un no terminal que deriva en $Y$):

$$\exists A \to \alpha B \beta \in P \quad \text{tal que} \quad B \Rightarrow^+ \gamma X \quad \land \quad (\beta \Rightarrow^* Y \delta \lor Y \in \text{SEGUIDORES}(A))$$

\vspace{0.3cm}

### 4.3 Cálculo Matricial mediante PRIMERO+ y ULTIMO+

Para formalizar el cálculo sobre todo el vocabulario:

$$\text{PRIMERO}^+(A) = \{X \in V_N \cup V_T \mid A \Rightarrow^+ X \dots\}$$

$$\text{ULTIMO}^+(A) = \{X \in V_N \cup V_T \mid A \Rightarrow^+ \dots X\}$$

Con estos conjuntos, la detección de relaciones se sistematiza:
- Si $A \to \alpha X Y \beta$, entonces $X \doteq Y$.
- Si $A \to \alpha X B \beta$, entonces $X \lessdot Y$ para todo $Y \in \text{PRIMERO}^+(B)$.
- Si $A \to \alpha B Y \beta$ con $Y \in V_T$, entonces $X \gtrdot Y$ para todo $X \in \text{ULTIMO}^+(B)$.
- Si $A \to \alpha B C \beta$ con $B, C \in V_N$, entonces $X \gtrdot Y$ para todo $X \in \text{ULTIMO}^+(B)$ y todo $Y \in \text{PRIMERO}^+(C)$.
- Delimitadores: $\$ \lessdot Y$ para todo $Y \in \text{PRIMERO}^+(S)$ y $X \gtrdot \$$ para todo $X \in \text{ULTIMO}^+(S)$.

\vspace{0.3cm}

### 4.4 Restricciones de una Gramática de Precedencia Simple (GPS)

Una gramática es de precedencia simple si y solo si cumple tres condiciones estrictas:

\vspace{0.3cm}

1. **Unívocamente invertible:** No existen dos producciones con idéntica parte derecha:

$$A \to \beta \in P \quad \land \quad B \to \beta \in P \implies A = B$$

2. **Ausencia de $\epsilon$-producciones:** No contiene reglas que deriven en la cadena vacía ($A \to \epsilon \notin P$).
3. **Relaciones disjuntas:** Para cualquier par de símbolos $X, Y \in V_N \cup V_T$, a lo sumo una relación de precedencia es válida ($\lessdot \cap \doteq = \emptyset$, $\lessdot \cap \gtrdot = \emptyset$, $\doteq \cap \gtrdot = \emptyset$).

\vspace{0.3cm}

### 4.5 Identificación Algorítmica del Pivote

Dada una cadena sentencial en la pila delimitada por los centinelas $\$$, el pivote queda aislado de manera inequívoca:

\vspace{0.3cm}

1. Se exploran las relaciones entre símbolos contiguos de izquierda a derecha.
2. El extremo izquierdo del pivote corresponde al primer cambio donde aparece $\lessdot$.
3. El cuerpo del pivote está enlazado por relaciones de igualdad $\doteq$:

$$
\$ \dots \lessdot X_1 \doteq X_2 \doteq \dots \doteq X_k \gtrdot \dots \$
$$

4. El extremo derecho del pivote concluye en el primer símbolo donde aparece $\gtrdot$.
5. La subcadena $X_1 X_2 \dots X_k$ constituye el pivote y se sustituye por la única variable $A$ tal que $A \to X_1 \dots X_k \in P$.

\vspace{0.4cm}

## 5. Detección y Tratamiento de Errores en Métodos de Precedencia

Los analizadores de precedencia detectan anomalías en dos momentos específicos:

\vspace{0.3cm}

- **Error de relación (hueco en la tabla):** Ocurre cuando al consultar la relación entre el símbolo de la cima y el de entrada, la celda carece de valor asignado. El analizador aplica heurísticas locales (descartar el terminal de entrada, desapilar símbolos en la cima o forzar la inserción de un operador esperado).
- **Error de reducción:** Ocurre cuando el analizador aísla un pivote formal delimitado por $\lessdot \dots \gtrdot$, pero la subcadena no coincide con la parte derecha de ninguna regla registrada en la gramática.

\vspace{0.4cm}

## 6. Problemas Integrales de Examen Resueltos Paso a Paso

### 6.1 Problema 1: Análisis de Precedencia de Operador sobre Expresiones

Dada la gramática de expresiones aritméticas:

$$E \to E + E \mid E * E \mid id$$

\vspace{0.3cm}

1. Demostrar que cumple las restricciones para ser gramática de operador.
2. Calcular formalmente los conjuntos $\text{PRIMERO}(E)$ y $\text{ULTIMO}(E)$.
3. Construir la matriz de relaciones de precedencia sabiendo que $*$ tiene mayor prioridad que $+$ y que ambos operadores asocian por la izquierda.
4. Mostrar la traza de ejecución completa para la entrada $id + id * id \$$.
5. Demostrar analíticamente por qué este analizador acepta la cadena errónea $id + + id \$$.

\vspace{0.3cm}

#### Resolución

\vspace{0.3cm}

1. **Condiciones de gramática de operador:**
   - No contiene producciones a la cadena vacía ($E \to \epsilon \notin P$).
   - No contiene dos variables contiguas en ninguna parte derecha ($E + E$ y $E * E$ tienen un terminal intermedio). Por tanto, la gramática es formalmente de operador.

2. **Cálculo de PRIMERO y ULTIMO:**
   - $\text{PRIMERO}(E)$: terminales que inician derivaciones: $\{+, *, id\}$.
   - $\text{ULTIMO}(E)$: terminales que finalizan derivaciones: $\{+, *, id\}$.

3. **Matriz de relaciones entre terminales ($V_T \cup \{\$\}$):**

\vspace{0.3cm}

| | $+$ | $*$ | $id$ | $\$$ |
| :---: | :---: | :---: | :---: | :---: |
| **$+$** | $\gtrdot$ | $\lessdot$ | $\lessdot$ | $\gtrdot$ |
| **$*$** | $\gtrdot$ | $\gtrdot$ | $\lessdot$ | $\gtrdot$ |
| **$id$** | $\gtrdot$ | $\gtrdot$ | | $\gtrdot$ |
| **$\$$** | $\lessdot$ | $\lessdot$ | $\lessdot$ | |

\vspace{0.3cm}

4. **Traza de la pila para $id + id * id \$$:**

\vspace{0.3cm}

| Paso | Pila | Relación | Entrada | Acción |
| :---: | :--- | :---: | ---: | :--- |
| 1 | $\$$ | $\lessdot$ | $id + id * id \$$ | Desplaza $id$ |
| 2 | $\$ \, id$ | $\gtrdot$ | $+ id * id \$$ | Reduce ($id \to E$) |
| 3 | $\$ \, E$ | $\lessdot$ | $+ id * id \$$ | Compara $\$$ con $+$, desplaza $+$ |
| 4 | $\$ \, E +$ | $\lessdot$ | $id * id \$$ | Desplaza $id$ |
| 5 | $\$ \, E + id$ | $\gtrdot$ | $* id \$$ | Reduce ($id \to E$) |
| 6 | $\$ \, E + E$ | $\lessdot$ | $* id \$$ | Compara $+$ en pila con $*$ entrante ($+ \lessdot *$), desplaza $*$ |
| 7 | $\$ \, E + E *$ | $\lessdot$ | $id \$$ | Desplaza $id$ |
| 8 | $\$ \, E + E * id$ | $\gtrdot$ | $\$$ | Reduce ($id \to E$) |
| 9 | $\$ \, E + E * E$ | $\gtrdot$ | $\$$ | Compara $*$ con $\$$ ($* \gtrdot \$$), reduce $E * E \to E$ |
| 10 | $\$ \, E + E$ | $\gtrdot$ | $\$$ | Compara $+$ con $\$$ ($+ \gtrdot \$$), reduce $E + E \to E$ |
| 11 | $\$ \, E$ | | $\$$ | Aceptación con éxito |

\vspace{0.3cm}

5. **Aceptación errónea de $id + + id \$:**
   Al procesar la entrada tras reducir el primer $id$ a $E$ y apilar el primer $+$, la cima de la pila tiene $\$ \, E +$. Al comparar el terminal visible $+$ con el segundo $+$ de entrada, la tabla estipula $+ \gtrdot +$. El analizador reduce a ciegas sin verificar la presencia de operandos a ambos lados, eliminando el operador y permitiendo que la cadena prosiga hasta ser aceptada erróneamente.

\vspace{0.4cm}

### 6.2 Problema 2: Construcción de Funciones de Precedencia

Dada la matriz de precedencias del problema anterior, obtener las funciones de precedencia $f$ y $g$ mediante el algoritmo del grafo acíclico dirigido.

\vspace{0.3cm}

#### Resolución

\vspace{0.3cm}

1. **Construcción del grafo:**
   Se generan nodos $\{f_+, f_*, f_{id}, f_\$\}$ y $\{g_+, g_*, g_{id}, g_\$\}$.
   - De $+ \lessdot *$, $+ \lessdot id$, $\$ \lessdot +$, $\$ \lessdot *$, $\$ \lessdot id$: aristas dirigidas desde $g$ hacia $f$.
   - De $+ \gtrdot +$, $+ \gtrdot \$$, $* \gtrdot +$, $* \gtrdot *$, $* \gtrdot \$$, $id \gtrdot +$, $id \gtrdot *$, $id \gtrdot \$$: aristas dirigidas desde $f$ hacia $g$.

2. **Cálculo de caminos máximos:**
   Analizando las longitudes de los caminos máximos salientes desde cada nodo:
   - $f(id) = 4, \quad g(id) = 5$
   - $f(*) = 4, \quad g(*) = 3$
   - $f(+) = 2, \quad g(+) = 1$
   - $f(\$) = 0, \quad g(\$) = 0$

3. **Verificación de consistencia:**
   - $+ \lessdot * \iff f(+) < g(*) \iff 2 < 3$ (Correcto).
   - $* \gtrdot + \iff f(*) > g(+) \iff 4 > 1$ (Correcto).
   - $+ \gtrdot + \iff f(+) > g(+) \iff 2 > 1$ (Correcto).
   - $* \gtrdot * \iff f(*) > g(*) \iff 4 > 3$ (Correcto).
   - El grafo no contiene ciclos dirigidos, por lo que las funciones $f$ y $g$ existen y preservan las decisiones del analizador reduciendo el espacio de almacenamiento de $O(|V_T|^2)$ a $O(|V_T|)$.

\vspace{0.4cm}

### 6.3 Problema 3: Precedencia Simple de Wirth-Weber (Ejemplo Canónico UGR)

Dada la gramática oficial de la cátedra (ETSIIT UGR, Tema 5, Diapositiva 19):

$$S \to a A a$$
$$A \to b B \mid c$$
$$B \to A c d$$

\vspace{0.3cm}

1. Demostrar formalmente que es una Gramática de Precedencia Simple (GPS) comprobando invertibilidad unívoca, ausencia de producciones vacías y disyunción estricta de relaciones.
2. Calcular los conjuntos $\text{PRIMERO}^+$ y $\text{ULTIMO}^+$ para todas las variables.
3. Obtener la matriz de precedencia simple completa $(V_N \cup V_T) \times (V_N \cup V_T)$.
4. Simular paso a paso el aislamiento del pivote y la reducción ascendente para la cadena de entrada $a b c c d a \$$.

\vspace{0.3cm}

#### Resolución

\vspace{0.3cm}

1. **Condiciones GPS:**
   - Partes derechas: $\{a A a, b B, c, A c d\}$. Todas son distintas entre sí. La gramática es unívocamente invertible.
   - Ninguna regla deriva a la cadena vacía $\epsilon$.

2. **Cálculo de $\text{PRIMERO}^+$ y $\text{ULTIMO}^+$:**
   - $\text{PRIMERO}^+(S) = \{a\}$, $\text{ULTIMO}^+(S) = \{a\}$.
   - $\text{PRIMERO}^+(A) = \{b, c\}$, $\text{ULTIMO}^+(A) = \{B, c, d\}$ (puesto que $A \Rightarrow b B$ y $B \Rightarrow A c d$).
   - $\text{PRIMERO}^+(B) = \{A, b, c\}$, $\text{ULTIMO}^+(B) = \{d\}$.

3. **Matriz de Relaciones de Precedencia Simple:**
   - De $S \to a A a$: $a \doteq A$, $A \doteq a$.
     - $a \lessdot Y$ para todo $Y \in \text{PRIMERO}^+(A) = \{b, c\} \implies a \lessdot b, a \lessdot c$.
     - $X \gtrdot a$ para todo $X \in \text{ULTIMO}^+(A) = \{B, c, d\} \implies B \gtrdot a, c \gtrdot a, d \gtrdot a$.
   - De $A \to b B$: $b \doteq B$.
     - $b \lessdot Y$ para todo $Y \in \text{PRIMERO}^+(B) = \{A, b, c\} \implies b \lessdot A, b \lessdot b, b \lessdot c$.
   - De $B \to A c d$: $A \doteq c$, $c \doteq d$.
     - $X \gtrdot c$ para todo $X \in \text{ULTIMO}^+(A) = \{B, c, d\} \implies B \gtrdot c, c \gtrdot c, d \gtrdot c$.
   - Delimitadores: $\$ \lessdot a$ y $a \gtrdot \$$.
   - Ninguna celda contiene más de una relación. Por consiguiente, **la gramática es estrictamente GPS**.

4. **Aislamiento del pivote para la cadena $a b c c d a \$$:**

\vspace{0.3cm}

- **Configuración 1:** Evaluando relaciones en $\$ \lessdot a \lessdot b \lessdot c \gtrdot c \doteq d \gtrdot a \gtrdot \$$.
  - El primer $\lessdot$ a la izquierda del primer $\gtrdot$ se da en $b \lessdot c \gtrdot$.
  - El pivote es **$c$**.
  - Reducción aplicada: $A \to c$.

\vspace{0.2cm}

- **Configuración 2:** Forma sentencial resultante: $\$ \, a \, b \, A \, c \, d \, a \, \$$.
  - Relaciones: $\$ \lessdot a \lessdot b \lessdot A \doteq c \doteq d \gtrdot a \gtrdot \$$.
  - El pivote delimitado entre $\lessdot$ y $\gtrdot$ es **$A c d$**.
  - Reducción aplicada: $B \to A c d$.

\vspace{0.2cm}

- **Configuración 3:** Forma sentencial resultante: $\$ \, a \, b \, B \, a \, \$$.
  - Relaciones: $\$ \lessdot a \lessdot b \doteq B \gtrdot a \gtrdot \$$.
  - El pivote delimitado es **$b B$**.
  - Reducción aplicada: $A \to b B$.

\vspace{0.2cm}

- **Configuración 4:** Forma sentencial resultante: $\$ \, a \, A \, a \, \$$.
  - Relaciones: $\$ \lessdot a \doteq A \doteq a \gtrdot \$$.
  - El pivote delimitado es **$a A a$**.
  - Reducción aplicada: $S \to a A a$.

\vspace{0.2cm}

- **Configuración 5:** Forma sentencial resultante: $\$ \, S \, \$$.
  - Alcanzado el axioma inicial sobre el centinela de fondo. **Cadena aceptada con éxito**.
