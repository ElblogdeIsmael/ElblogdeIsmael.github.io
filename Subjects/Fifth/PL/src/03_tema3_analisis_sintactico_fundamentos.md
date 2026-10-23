# Fundamentos del Análisis Sintáctico

## 1. Misión y Descripción Funcional del Analizador Sintáctico

El analizador sintáctico opera como el núcleo articulador del compilador. Recibe como flujo de entrada la secuencia ordenada de tokens producida por el analizador léxico y debe alcanzar dos metas determinantes:

\vspace{0.3cm}

1. **Validación Sintáctica:** Verificar si la secuencia de tokens puede derivarse formalmente a partir de la gramática del lenguaje.
2. **Reconstrucción Estructural:** Identificar el orden exacto de aplicación de las producciones gramaticales para sintetizar el árbol sintáctico del programa, derivando errores con mensajes informativos si la cadena resulta inválida.

\vspace{0.4cm}

## 2. Gramáticas Libres del Contexto (GLC / Tipo 2)

Los lenguajes de programación no pueden describirse exclusivamente mediante expresiones regulares debido a que estas carecen de la capacidad de conteo o memoria necesaria para verificar estructuras arbitrariamente anidadas (como paréntesis balanceados, expresiones compuestas o bloques de control anidados). Se hace indispensable recurrir a las Gramáticas Libres del Contexto (tipo 2 en la jerarquía de Chomsky).

Formalmente, una gramática libre del contexto se define mediante la cuádrupla:

$$G = (V_N, V_T, P, S)$$

\vspace{0.3cm}

- **$V_N$:** Conjunto finito de símbolos no terminales (variables sintácticas intermedias como `Expresión`, `Sentencia`).
- **$V_T$:** Conjunto finito de símbolos terminales, equivalentes a los tokens generados por el analizador léxico.
- **$P$:** Conjunto finito de reglas de producción. Su rasgo definitorio es que la parte izquierda contiene un único símbolo no terminal:

$$A \to \alpha \quad \text{donde } A \in V_N \text{ y } \alpha \in (V_N \cup V_T)^*$$

La denominación "libre del contexto" radica en que la sustitución de $A$ por la forma sentencial $\alpha$ puede aplicarse con total independencia de los símbolos adyacentes a $A$ en la cadena.
- **$S$:** Símbolo inicial o axioma de la gramática ($S \in V_N$).

\vspace{0.4cm}

## 3. Árboles Sintácticos y Ambigüedad Gramatical

El árbol sintáctico es la representación gráfica de una derivación:
- La raíz del árbol es siempre el axioma inicial $S$.
- Los nodos interiores son no terminales ($V_N$), reflejando las producciones aplicadas.
- Las hojas son terminales ($V_T$) y leídas de izquierda a derecha componen la secuencia de entrada analizada.

\vspace{0.4cm}

### El Problema de la Ambigüedad

Una gramática se dice que es ambigua cuando admite **más de un árbol sintáctico distinto** para una misma secuencia de entrada (lo que equivale a tener más de una derivación más a la izquierda o más a la derecha).

En la construcción de procesadores de lenguajes, la ambigüedad constituye un problema crítico. Si consideramos la clásica gramática de expresiones aritméticas:

$$E \to E + E \mid E * E \mid id$$

La secuencia de tokens `id + id * id` admite dos árboles de derivación diferentes: uno agrupa la suma en primer lugar y otro prioriza la multiplicación. Dado que el árbol sintáctico gobierna la generación del código y el orden de evaluación matemática, tolerar ambigüedad llevaría a cálculos indeterministas. La solución estándar exige reescribir la gramática introduciendo niveles no terminales intermedios que capturen la precedencia y la asociatividad de las operaciones.

\vspace{0.4cm}

## 4. Formas Normales de Gramáticas Libres del Contexto

La teoría de lenguajes estandariza el formato de las producciones para habilitar algoritmos de análisis sintáctico formal:

\vspace{0.4cm}

### Forma Normal de Chomsky (FNC)

Toda gramática libre de contexto cuyas producciones responden exclusivamente a los formatos:

$$A \to BC \quad \text{o bien} \quad A \to a$$

donde $A, B, C \in V_N$ y $a \in V_T$. Es la base sobre la que operan algoritmos generales de reconocimiento como CYK (*Cocke-Younger-Kasami*), con coste de análisis $O(n^3)$.

\vspace{0.4cm}

### Forma Normal de Greibach (FNG)

Toda gramática libre de contexto cuyas reglas de derivación presentan la estructura:

$$A \to a\alpha$$

donde $A \in V_N$, $a \in V_T$ y $\alpha \in V_N^*$. La ventaja de Greibach es que cada paso de derivación consume exactamente un símbolo terminal de entrada, facilitando el diseño de reconocedores descendentes deterministas.

\vspace{0.4cm}

## 5. Autómatas de Pila (AP)

Así como los autómatas finitos modelan los lenguajes regulares, el autómata de pila es el modelo computacional canónico que reconoce los lenguajes libres de contexto. Su capacidad para apilar y desapilar símbolos en una memoria LIFO le permite verificar construcciones anidadas y correspondencias emparejadas.

Formalmente se define como una séptupla:

$$AP = (Q, \Sigma, \Gamma, \delta, q_0, Z_0, F)$$

\vspace{0.3cm}

- $Q$: Conjunto finito de estados del autómata.
- $\Sigma$: Alfabeto de entrada (finito).
- $\Gamma$: Alfabeto de la pila (permite almacenar terminales y no terminales).
- $\delta$: Función de transición de tipo:
  $$\delta: Q \times (\Sigma \cup \{\lambda\}) \times \Gamma \to \mathcal{P}_{\text{fin}}(Q \times \Gamma^*)$$
- $q_0 \in Q$: Estado inicial.
- $Z_0 \in \Gamma$: Símbolo inicial que reside en el fondo de la pila antes de arrancar.
- $F \subseteq Q$: Conjunto de estados finales de aceptación.

Una **Descripción Instantánea (DI)** representa la fotografía del sistema en un instante determinado mediante la terna $(q, \omega, \gamma)$, con $q \in Q$ como estado actual, $\omega \in \Sigma^*$ como la cadena de entrada restante y $\gamma \in \Gamma^*$ como la secuencia de elementos contenidos en la pila.

Los teoremas de equivalencia demuestran que un lenguaje $L$ es independiente del contexto si y solo si es aceptado por algún autómata de pila (bien por alcanzar un estado final de $F$, bien por vaciado total de la pila).

\vspace{0.4cm}

## 6. Estrategias de Análisis Sintáctico

La verificación estructural de una cadena de entrada $\omega$ puede abordarse desde dos ópticas metodológicas opuestas:

\vspace{0.3cm}

- **Análisis Descendente (*Top-Down*):**
  - Parte del símbolo inicial $S$ (la raíz del árbol) y aplica reglas de expansión hacia abajo hasta coincidir en las hojas con la secuencia de entrada $\omega$ ($S \Rightarrow^* \omega$).
  - Construye derivaciones más a la izquierda (*leftmost derivations*).
  - Es la base de los analizadores predictivos recursivos y de las gramáticas $LL(1)$.
- **Análisis Ascendente (*Bottom-Up*):**
  - Parte de los tokens leídos en las hojas $\omega$ y localiza subcadenas que encajen con la parte derecha de una regla para reemplazarlas por el no terminal correspondiente (*reducción*), ascendiendo hasta converger en el símbolo inicial $S$ ($\omega \Leftarrow^* S$).
  - Construye en sentido inverso la derivación canónica más a la derecha (*rightmost derivation in reverse*).
  - Es la base de los métodos de precedencia y de los analizadores $LR$ (SLR, LALR y LR canónico).
