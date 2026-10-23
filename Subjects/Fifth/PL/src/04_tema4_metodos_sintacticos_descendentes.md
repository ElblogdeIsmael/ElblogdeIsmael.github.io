# Métodos de Análisis Sintáctico Descendentes

## 1. El Método Intuitivo y el Problema de la Recursividad Izquierda

El análisis sintáctico descendente busca reconstruir el árbol sintáctico desde la raíz hacia las hojas, derivando el axioma $S$ hasta alcanzar la secuencia de tokens leída en la entrada.

En su formulación más simple (método intuitivo o por fuerza bruta), el analizador prueba sucesivamente las alternativas de cada producción mediante vuelta atrás (*backtracking*):
- Expande la primera producción del símbolo inicial.
- Toma el no terminal más a la izquierda y aplica la primera producción disponible.
- Si en algún punto los terminales generados no coinciden con la entrada, retrocede la lectura y prueba con la siguiente alternativa gramatical.

\vspace{0.4cm}

### El Problema Crítico de la Recursividad a la Izquierda

Una gramática es recursiva a la izquierda si existe algún símbolo no terminal $X$ tal que $X \Rightarrow^* X\alpha$. Si se intenta aplicar un método descendente sobre una regla con recursividad inmediata:

$$A \to A\alpha \mid \beta$$

El algoritmo intentará expandir $A$ sustituyéndolo nuevamente por $A\alpha$, y este a su vez por $A\alpha\alpha$, entrando en un bucle infinito en tiempo de ejecución sin llegar a consumir jamás un solo token de la entrada.

\vspace{0.4cm}

## 2. Eliminación Sistemática de la Recursividad a la Izquierda

Para hacer viable el análisis descendente, es obligatorio transformar la gramática eliminando cualquier ciclo recursivo por la izquierda.

\vspace{0.4cm}

### Transformación para Recursividad Inmediata

Dada la regla $A \to A\alpha \mid \beta$ (donde $\beta$ no comienza por $A$), la recursividad se traslada a la derecha mediante la introducción de un nuevo no terminal $A'$:

$$A \to \beta A'$$
$$A' \to \alpha A' \mid \epsilon$$

*Justificación matemática:* Ambas estructuras generan idéntico lenguaje regular $\beta \alpha^*$. No obstante, en la versión transformada el analizador descendente expande primero $\beta$, lo que permite consumir tokens de la entrada antes de evaluar las posibles repeticiones de $\alpha$.

\vspace{0.4cm}

### Generalización a Múltiples Alternativas

Si un no terminal presenta varias ramas recursivas y varias ramas base:

$$A \to A\alpha_1 \mid A\alpha_2 \mid \dots \mid A\alpha_m \mid \beta_1 \mid \beta_2 \mid \dots \mid \beta_n$$

Se transforma en:

$$A \to \beta_1 A' \mid \beta_2 A' \mid \dots \mid \beta_n A'$$
$$A' \to \alpha_1 A' \mid \alpha_2 A' \mid \dots \mid \alpha_m A' \mid \epsilon$$

\vspace{0.4cm}

## 3. Factorización a la Izquierda para Analizadores Predictivos

Un analizador predictivo persigue seleccionar la producción correcta en cada paso inspeccionando únicamente el siguiente símbolo de entrada (un único token de anticipación, *lookahead*), erradicando por completo el coste del *backtracking*.

Sin embargo, si dos o más alternativas de un no terminal arrancan con el mismo prefijo:

$$A \to \alpha\beta_1 \mid \alpha\beta_2$$

El analizador no puede determinar qué producción escoger al leer el inicio de $\alpha$. La **factorización a la izquierda** resuelve este problema aplazando la decisión hasta haber consumido el prefijo común:

$$A \to \alpha A'$$
$$A' \to \beta_1 \mid \beta_2$$

\vspace{0.4cm}

## 4. Analizador Predictivo no Recursivo con Autómata de Pila

Para evitar la sobrecarga de implementar funciones recursivas en el código del compilador, se utiliza una máquina de pila gobernada por una tabla de análisis sintáctico bidimensional $M[A, a]$.

\vspace{0.4cm}

### Componentes y Dinámica de Ejecución

- **Cinta de entrada:** Cadena de tokens finalizada por el delimitador de cierre $\$$ ($a_1 a_2 \dots a_n \$$).
- **Pila del autómata:** Almacena terminales y no terminales, con el símbolo inicial $S$ en la cima sobre el marcador de fondo $\$$: cima $\to [S, \$]$.
- **Tabla de análisis $M[A, a]$:** Matriz donde las filas corresponden a los no terminales $V_N$ y las columnas a los terminales $V_T \cup \{\$\}$.

La rutina cíclica evalúa en cada paso el elemento en la cima de la pila $X$ y el token actual de entrada $a$:

\vspace{0.3cm}

1. Si $X = a = \$$, el análisis concluye con éxito (cadena aceptada).
2. Si $X = a \neq \$$, se desapila el terminal $X$ y se avanza la lectura al siguiente token (*match*).
3. Si $X$ es un no terminal, se consulta la celda $M[X, a]$:
   - Si contiene la regla $X \to Y_1 Y_2 \dots Y_k$, se extrae $X$ de la pila y se apilan los símbolos en orden inverso ($Y_k \dots Y_2 Y_1$), de modo que $Y_1$ quede en la cima.
   - Si la producción es $X \to \epsilon$, simplemente se extrae $X$ de la pila sin apilar nada nuevo.
   - Si la celda está vacía, se ha detectado un error sintáctico.

\vspace{0.4cm}

## 5. Cálculo Formal de los Conjuntos INICIALES y SEGUIDORES

Para construir la tabla predictiva $M$ sin ambigüedades, se calculan dos conjuntos matemáticos para cada símbolo de la gramática.

\vspace{0.4cm}

### Conjunto INICIALES (*First*)

Representa el conjunto de símbolos terminales que pueden aparecer al principio de cualquier cadena derivada a partir de una forma sentencial $\alpha$:

$$\text{INICIALES}(\alpha) = \{a \in V_T \mid \alpha \Rightarrow^* a\beta\}$$

Reglas formales de cálculo:

\vspace{0.3cm}

1. Si $X \in V_T$, entonces $\text{INICIALES}(X) = \{X\}$.
2. Si existe la producción $X \to \epsilon$, entonces $\epsilon \in \text{INICIALES}(X)$.
3. Para producciones $X \to Y_1 Y_2 \dots Y_k$:
   - Se añade $(\text{INICIALES}(Y_1) \setminus \{\epsilon\})$ a $\text{INICIALES}(X)$.
   - Si $Y_1 \Rightarrow^* \epsilon$, se añade también $(\text{INICIALES}(Y_2) \setminus \{\epsilon\})$, y así sucesivamente mientras los $Y_i$ anteriores deriven a $\epsilon$.
   - Si todos los símbolos $Y_1, \dots, Y_k$ derivan a $\epsilon$, entonces $\epsilon \in \text{INICIALES}(X)$.

\vspace{0.4cm}

### Conjunto SEGUIDORES (*Follow*)

Representa el conjunto de terminales que pueden aparecer inmediatamente a la derecha de un no terminal $A$ en alguna derivación sentencial:

$$\text{SEGUIDORES}(A) = \{a \in V_T \mid S \Rightarrow^* \alpha A a \beta\}$$

Reglas formales de cálculo:

\vspace{0.3cm}

1. El marcador de fin de entrada pertenece al axioma: $\$ \in \text{SEGUIDORES}(S)$.
2. Si existe una producción de la forma $A \to \alpha B \beta$, todo símbolo perteneciente a $\text{INICIALES}(\beta)$ (excepto $\epsilon$) se añade a $\text{SEGUIDORES}(B)$.
3. Si existe una producción $A \to \alpha B$, o bien $A \to \alpha B \beta$ donde $\beta \Rightarrow^* \epsilon$, entonces todo elemento de $\text{SEGUIDORES}(A)$ pasa a formar parte de $\text{SEGUIDORES}(B)$.

\vspace{0.4cm}

## 6. Algoritmo de Construcción de la Tabla Predictiva $M$

Con los conjuntos de INICIALES y SEGUIDORES computados, la tabla $M[A, a]$ se rellena aplicando el siguiente procedimiento:

\vspace{0.3cm}

```
Para cada producción A -> alfa en la gramática G:
    Para cada terminal a perteneciente a INICIALES(alfa):
        Añadir "A -> alfa" en M[A, a]
    Si epsilon pertenece a INICIALES(alfa):
        Para cada terminal b perteneciente a SEGUIDORES(A) (incluyendo $):
            Añadir "A -> alfa" en M[A, b]
Todas las celdas indefinidas en M se marcan como ERROR.
```

\vspace{0.4cm}

## 7. Gramáticas $LL(1)$ y Condiciones de no Ambigüedad

Una gramática se define como $LL(1)$ (lectura de izquierda a derecha, derivación más a la izquierda, 1 token de anticipación) si su tabla de análisis predictivo carece de entradas múltiples. Una celda con más de una regla implica un conflicto de predicción.

Formalmente, una gramática es $LL(1)$ si y solo si para cada par de alternativas $A \to \alpha \mid \beta$:

\vspace{0.3cm}

1. $\text{INICIALES}(\alpha) \cap \text{INICIALES}(\beta) = \emptyset$.
2. Como máximo una de las dos formas sentenciales ($\alpha$ o $\beta$) puede derivar en $\epsilon$.
3. Si $\beta \Rightarrow^* \epsilon$, entonces $\text{INICIALES}(\alpha) \cap \text{SEGUIDORES}(A) = \emptyset$.

Una **S-Gramática** (o $LL(1)$ simple) es una versión restringida donde todas las alternativas de un no terminal comienzan por terminales distintos y no existen producciones a la cadena vacía.

\vspace{0.4cm}

## 8. Tratamiento y Recuperación de Errores Sintácticos

Cuando el analizador accede a una celda vacía de la tabla $M$, se activa el protocolo de recuperación para seguir procesando el fichero:

\vspace{0.3cm}

- **Recuperación a Nivel de Frase:** Rellena los huecos vacíos con punteros a rutinas específicas que corrigen errores previsibles (por ejemplo, insertar un paréntesis de cierre omitido o suprimir un token repetido).
- **Recuperación en Modo Pánico:** El autómata descarta tokens de la entrada hasta topar con un símbolo de sincronización predeterminado:
  - La elección estándar consiste en tomar los símbolos de $\text{SEGUIDORES}(A)$ como conjunto de sincronización. Al alcanzar uno de ellos, el analizador extrae $A$ de la pila y reanuda el análisis regular.
  - Para límites de sentencias o bloques de código, se suelen usar los propios terminales de inicio de sentencia (`INICIALES`) para evitar saltarse bloques completos de instrucciones.
