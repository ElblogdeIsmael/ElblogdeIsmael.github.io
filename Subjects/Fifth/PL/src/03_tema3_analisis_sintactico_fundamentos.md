# Fundamentos del Análisis Sintáctico

## 1. Misión y Descripción Funcional del Analizador Sintáctico

El analizador sintáctico (*parser*) constituye el núcleo estructural del compilador. Recibe como flujo de entrada la secuencia ordenada de tokens producida por el analizador léxico y cumple dos funciones complementarias:

\vspace{0.3cm}

1. **Validación Sintáctica:** Comprueba si la secuencia de tokens suministrada pertenece al lenguaje formal definido por la gramática de la especificación.
2. **Construcción del Árbol Sintáctico:** Determina la jerarquía y el orden exacto en el que deben aplicarse las reglas gramaticales para estructurar las sentencias, facilitando la detección y localización precisa de fallos cuando una frase no es correcta.

\vspace{0.4cm}

## 2. Gramáticas Libres del Contexto (GLC / Tipo 2)

Los lenguajes regulares modelados mediante expresiones regulares y autómatas finitos carecen de memoria infinita o capacidad de conteo, lo que les impide comprobar construcciones balanceadas o anidamientos de profundidad arbitraria (como el equilibrio de paréntesis en expresiones o la correspondencia entre bloques `begin` y `end`). Para describir la sintaxis de un lenguaje de programación es indispensable recurrir a las Gramáticas Libres del Contexto (Tipo 2 en la jerarquía de Chomsky).

Formalmente, una gramática libre del contexto se modela mediante la cuádrupla:

$$G = (V_N, V_T, P, S)$$

\vspace{0.3cm}

- **$V_N$:** Conjunto finito de símbolos no terminales o variables sintácticas (por ejemplo, `Expresion`, `Sentencia`, `Declaracion`).
- **$V_T$:** Conjunto finito de símbolos terminales o tokens, disjunto de $V_N$ ($V_N \cap V_T = \emptyset$).
- **$P$:** Conjunto finito de reglas de producción. En las gramáticas libres del contexto, cada regla presenta en su lado izquierdo exactamente un único símbolo no terminal:

$$A \to \alpha \quad \text{donde } A \in V_N \text{ y } \alpha \in (V_N \cup V_T)^*$$

La denominación "libre del contexto" refleja que la sustitución de $A$ por la secuencia $\alpha$ puede ejecutarse en cualquier posición de la cadena sin importar los símbolos que rodeen a $A$.
- **$S$:** Símbolo inicial o axioma de la gramática ($S \in V_N$), desde donde arrancan todas las derivaciones formales.

\vspace{0.4cm}

## 3. Derivaciones, Árboles Sintácticos y Ambigüedad Gramatical

Una derivación formal es una sucesión finita de transformaciones de formas sentenciales $\alpha_0 \Rightarrow \alpha_1 \Rightarrow \dots \Rightarrow \alpha_n$, donde cada paso consiste en sustituir un no terminal por el lado derecho de una de sus producciones.

\vspace{0.3cm}

- **Derivación más a la izquierda (*Leftmost derivation*):** En cada paso se sustituye el no terminal ubicado más a la izquierda de la forma sentencial. Se denota como $\alpha \underset{izq}{\Rightarrow} \beta$.
- **Derivación más a la derecha (*Rightmost derivation* o canónica):** En cada paso se reemplaza el no terminal situado más a la derecha. Se denota como $\alpha \underset{der}{\Rightarrow} \beta$.

\vspace{0.3cm}

El **árbol sintáctico** es la representación geométrica de una derivación:
- La raíz alberga el símbolo inicial $S$.
- Los nodos interiores corresponden a símbolos no terminales ($V_N$), etiquetados con el símbolo que encabeza la regla aplicada.
- Las hojas albergan símbolos terminales ($V_T$) o la cadena vacía $\epsilon$. Al leer las hojas de izquierda a derecha se obtiene la cadena analizada.

\vspace{0.4cm}

### Ambigüedad Gramatical y sus Implicaciones en Compilación

Una gramática libre del contexto es **ambigua** si existe al menos una cadena en su lenguaje que admite dos o más árboles sintácticos distintos (o equivalentemente, dos derivaciones más a la izquierda diferentes).

\vspace{0.4cm}

#### Caso Canónico de Examen: Expresiones Aritméticas

Consideremos la siguiente gramática clásica sin estratificar:

$$E \to E + E \mid E * E \mid id$$

Para la secuencia de tokens `id + id * id`, la gramática permite construir dos derivaciones más a la izquierda dispares:

\vspace{0.3cm}

*Derivación 1 (prioriza la suma):*
$$E \underset{izq}{\Rightarrow} E * E \underset{izq}{\Rightarrow} E + E * E \underset{izq}{\Rightarrow} id + E * E \underset{izq}{\Rightarrow} id + id * E \underset{izq}{\Rightarrow} id + id * id$$

*Derivación 2 (prioriza el producto):*
$$E \underset{izq}{\Rightarrow} E + E \underset{izq}{\Rightarrow} id + E \underset{izq}{\Rightarrow} id + E * E \underset{izq}{\Rightarrow} id + id * E \underset{izq}{\Rightarrow} id + id * id$$

\vspace{0.3cm}

En el primer árbol, el operador suma queda en un nivel inferior al producto, lo que evaluaría la expresión como $(id + id) * id$. En el segundo árbol, la multiplicación queda en el subárbol inferior, evaluándose como $id + (id * id)$. Como el árbol sintáctico dicta el orden de emisión de instrucciones y la evaluación semántica, permitir ambigüedad provocaría resultados computacionales arbitrarios.

\vspace{0.4cm}

#### Técnica de Desambiguación por Estratificación de Niveles

Para erradicar la ambigüedad preservando el lenguaje, se divide el axioma en tantos niveles de no terminales como prioridades existan, ligando la recursividad con la asociatividad deseada (recursividad a la izquierda para asociatividad por la izquierda):

\vspace{0.3cm}

$$E \to E + T \mid T$$
$$T \to T * F \mid F$$
$$F \to ( E ) \mid id$$

En esta gramática transformada:
- $E$ genera operaciones aditivas de menor precedencia.
- $T$ (*Término*) introduce operaciones multiplicativas de mayor precedencia.
- $F$ (*Factor*) encapsula operandos básicos y expresiones entre paréntesis con máxima prioridad.
- La secuencia `id + id * id` admite ahora un único árbol sintáctico determinista donde la multiplicación desciende obligatoriamente a un nivel más profundo que la suma.

\vspace{0.4cm}

## 4. Formas Normales de Gramáticas Tipo 2

La teoría de compiladores define formas canónicas que simplifican el análisis matemático de las gramáticas:

\vspace{0.4cm}

### Forma Normal de Chomsky (FNC)

Una gramática libre del contexto está en FNC si todas sus producciones presentan una de las dos siguientes estructuras:

$$A \to BC \quad \text{o bien} \quad A \to a$$

donde $A, B, C \in V_N$ y $a \in V_T$. Es el formato requerido por algoritmos de reconocimiento tabular como el algoritmo CYK (*Cocke-Younger-Kasami*), cuyo coste computacional es $\mathcal{O}(n^3)$.

\vspace{0.4cm}

### Forma Normal de Greibach (FNG)

Una gramática está en FNG si todas sus producciones responden a la regla:

$$A \to a\alpha$$

donde $A \in V_N$, $a \in V_T$ y $\alpha \in V_N^*$. La ventaja de Greibach es que cada paso de derivación consume de forma inmediata exactamente un símbolo terminal de la entrada, evitando derivaciones estacionarias o ciclos vacíos.

\vspace{0.4cm}

## 5. Autómatas de Pila (AP)

El autómata de pila es el modelo computacional formal que reconoce exactamente los lenguajes libres de contexto. Su arquitectura añade a un autómata finito una estructura de almacenamiento lineal con disciplina LIFO (pila), permitiendo almacenar un número no acotado de símbolos.

Formalmente se define mediante una séptupla:

$$AP = (Q, \Sigma, \Gamma, \delta, q_0, Z_0, F)$$

\vspace{0.3cm}

- $Q$: Conjunto finito de estados.
- $\Sigma$: Alfabeto de entrada (finito).
- $\Gamma$: Alfabeto de la pila (contiene los símbolos que pueden almacenarse en la pila).
- $\delta$: Función de transición de tipo:
  $$\delta: Q \times (\Sigma \cup \{\lambda\}) \times \Gamma \to \mathcal{P}_{\text{fin}}(Q \times \Gamma^*)$$
- $q_0 \in Q$: Estado inicial del autómata.
- $Z_0 \in \Gamma$: Símbolo de fondo de pila inicial.
- $F \subseteq Q$: Conjunto de estados de aceptación.

\vspace{0.4cm}

### Descripciones Instantáneas y Modos de Aceptación

El estado dinámico del autómata en un momento dado se modela mediante una **Descripción Instantánea (DI)**, representada por la terna $(q, \omega, \gamma) \in Q \times \Sigma^* \times \Gamma^*$, donde $q$ es el estado actual, $\omega$ la secuencia de entrada pendiente de lectura y $\gamma$ el contenido íntegro de la pila (con el tope a la izquierda).

La transición de un estado a otro se indica mediante el operador de paso $(q, a\omega, Z\alpha) \vdash (p, \omega, \beta\alpha)$, siempre que $(p, \beta) \in \delta(q, a, Z)$.

Existen dos criterios formales de aceptación de cadenas:
1. **Aceptación por estado final:** El autómata consume toda la cadena y alcanza un estado perteneciente a $F$, sin importar el contenido final de la pila.
2. **Aceptación por vaciado de pila:** El autómata consume toda la cadena y la pila queda completamente vacía ($\gamma = \lambda$), sin importar el estado en que se detenga.

Ambos criterios son matemáticamente equivalentes: cualquier lenguaje aceptado por estado final puede ser reconocido por vaciado de pila mediante una transformación constructiva del autómata, y viceversa.

\vspace{0.4cm}

## 6. Clasificación Metodológica: Análisis Descendente frente a Ascendente

Dada una cadena de entrada $\omega$, el compilador puede reconstruir el árbol sintáctico siguiendo dos estrategias contrapuestas:

\vspace{0.4cm}

### Análisis Descendente (*Top-Down*)

- **Estrategia:** Arranca desde el símbolo inicial $S$ en la raíz del árbol y aplica reglas gramaticales hacia abajo hasta generar la secuencia de tokens leída en las hojas ($S \Rightarrow^* \omega$).
- **Derivación generada:** Reconstruye la derivación más a la izquierda (*leftmost derivation*).
- **Modelos:** Analizadores recursivos predictivos y gramáticas de clase $LL(k)$ (notablemente $LL(1)$).
- **Condición clave:** La gramática no puede tener recursividad a la izquierda ni factores comunes sin factorizar.

\vspace{0.4cm}

### Análisis Ascendente (*Bottom-Up*)

- **Estrategia:** Arranca desde los tokens reales leídos en las hojas y localiza subcadenas que coincidan con el lado derecho de una producción para reemplazarlas por el correspondiente no terminal (operación de *reducción*), ascendiendo de nivel hasta alcanzar el axioma $S$ ($\omega \Leftarrow^* S$).
- **Derivación generada:** Reconstruye en orden inverso la derivación canónica más a la derecha (*rightmost derivation in reverse*).
- **Modelos:** Analizadores por desplazamiento y reducción (*shift-reduce*), análisis de precedencia y analizadores de la familia $LR$ (SLR, LALR, LR(1)).
- **Potencia:** Acepta gramáticas recursivas a la izquierda y cubre un subconjunto más amplio de lenguajes libres de contexto que los métodos descendentes.

\vspace{0.4cm}

## 7. Cuestión Práctica de Examen Resuelta

**Pregunta:** Demuestre formalmente que la gramática definida por las producciones $S \to aSb \mid aSbb \mid \epsilon$ es ambigua encontrando una cadena del lenguaje que admita dos árboles de análisis sintáctico dispares, y obtenga sus respectivas derivaciones más a la izquierda.

**Resolución Técnica:**
Tomemos la cadena de entrada $\omega = aabbb$. Comprobemos si admite dos derivaciones distintas a partir del axioma $S$:

\vspace{0.3cm}

*Derivación más a la izquierda A:*
$$S \underset{izq}{\Rightarrow} aSb \underset{izq}{\Rightarrow} a(aSbb)b = aabbb$$
(En el primer paso se aplicó la regla $S \to aSb$; en el segundo, sobre el $S$ interior se aplicó $S \to aSbb$, y finalmente $S \to \epsilon$).

*Derivación más a la izquierda B:*
$$S \underset{izq}{\Rightarrow} aSbb \underset{izq}{\Rightarrow} a(aSb)bb = aabbb$$
(En el primer paso se aplicó la regla $S \to aSbb$; en el segundo paso, sobre el $S$ interior se aplicó $S \to aSb$, y finalmente $S \to \epsilon$).

Ambas derivaciones son derivaciones más a la izquierda distintas que generan la misma cadena terminal $aabbb$, correspondiendo a dos árboles sintácticos con estructuras jerárquicas diferentes. Queda demostrado formalmente que la gramática es ambigua.
