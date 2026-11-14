# Métodos de Análisis Sintáctico Descendentes y Gramáticas $LL(1)$

## 1. El Método Intuitivo y la Limitación de la Recursividad Izquierda

El análisis sintáctico descendente reconstruye el árbol sintáctico desde la raíz hacia las hojas, determinando la secuencia de derivaciones más a la izquierda que transforma el símbolo inicial $S$ en la cadena de tokens leída en la entrada ($S \underset{izq}{\Rightarrow}^* \omega$).

En su versión más elemental (el método intuitivo o por fuerza bruta), el analizador evalúa las distintas producciones mediante búsqueda con retroceso (*backtracking*):
1. Expande la primera producción asociada al axioma $S$.
2. Selecciona el símbolo no terminal situado más a la izquierda y le aplica la primera regla disponible.
3. Compara los terminales generados con los símbolos leídos en la cinta de entrada:
   - Si coinciden, avanza la lectura.
   - Si se produce una discrepancia, retrocede la lectura en la entrada (*backtracking*) y prueba con la siguiente producción alternativa del no terminal.

\vspace{0.4cm}

### El Fallo Estructural ante la Recursividad a la Izquierda

Una gramática es recursiva a la izquierda si admite una derivación de la forma $A \Rightarrow^+ A\alpha$. Si se intenta aplicar el método descendente sobre una regla con recursividad inmediata:

$$A \to A\alpha \mid \beta$$

el algoritmo selecciona en primer lugar la rama $A\alpha$. Para expandir el nuevo no terminal $A$ situado a la izquierda, vuelve a seleccionar la misma regla generando $A\alpha\alpha$, y sucesivamente $A\alpha^n$, sin llegar a consumir jamás un solo símbolo terminal de la entrada. El analizador entra en un bucle infinito que agota la memoria del sistema.

\vspace{0.4cm}

## 2. Eliminación Sistemática de la Recursividad a la Izquierda

Para habilitar cualquier variante de análisis descendente, la gramática debe transformarse para erradicar cualquier ciclo recursivo por la izquierda.

\vspace{0.4cm}

### Caso Directo o Inmediato

Dada la producción con recursividad inmediata $A \to A\alpha \mid \beta$ (donde $\beta$ no comienza por $A$), la recursividad se desplaza a la derecha introduciendo un nuevo símbolo no terminal $A'$:

\vspace{0.3cm}

$$A \to \beta A'$$
$$A' \to \alpha A' \mid \epsilon$$

*Justificación formal:* Ambas formas generan exactamente el lenguaje regular denotado por $\beta\alpha^*$. Sin embargo, en la gramática reescrita el analizador expande primero $\beta$, lo que fuerza el consumo de tokens de entrada antes de evaluar las posibles repeticiones de $\alpha$.

\vspace{0.4cm}

### Generalización a Múltiples Alternativas

Si un símbolo no terminal presenta $m$ ramas recursivas y $n$ ramas no recursivas:

$$A \to A\alpha_1 \mid A\alpha_2 \mid \dots \mid A\alpha_m \mid \beta_1 \mid \beta_2 \mid \dots \mid \beta_n$$

la transformación sistemática produce:

\vspace{0.3cm}

$$A \to \beta_1 A' \mid \beta_2 A' \mid \dots \mid \beta_n A'$$
$$A' \to \alpha_1 A' \mid \alpha_2 A' \mid \dots \mid \alpha_m A' \mid \epsilon$$

\vspace{0.4cm}

### Algoritmo General para Recursividad Indirecta o no Inmediata

Cuando la recursividad involucra dos o más pasos de derivación (por ejemplo, $S \to Aa$ y $A \to Sb$), la recursividad izquierda no es visible a simple vista. El algoritmo canónico de eliminación opera ordenando los no terminales:

\vspace{0.3cm}

1. Se establece una ordenación arbitraria de los no terminales: $A_1, A_2, \dots, A_n$.
2. Para cada $i$ desde $1$ hasta $n$:
   - Para cada $j$ desde $1$ hasta $i - 1$:
     - Si existe una producción $A_i \to A_j\gamma$, se reemplaza sustituyendo $A_j$ por todas sus producciones actuales ($A_j \to \delta_1 \mid \dots \mid \delta_k$), obteniendo $A_i \to \delta_1\gamma \mid \dots \mid \delta_k\gamma$.
   - Se eliminan las posibles recursividades izquierdas inmediatas generadas sobre $A_i$ aplicando la transformación directa.
3. Se eliminan las producciones no accesibles desde el axioma inicial.

\vspace{0.4cm}

## 3. Analizadores Predictivos y Factorización a la Izquierda

Un analizador descendente predictivo elimina la necesidad de retroceso (*backtracking*) eligiendo en cada paso la regla gramatical correcta basándose únicamente en el siguiente token de entrada (*lookahead*).

\vspace{0.4cm}

### Algoritmo de Factorización a la Izquierda

Si dos o más alternativas de un no terminal comparten un prefijo común de símbolos:

$$A \to \alpha\beta_1 \mid \alpha\beta_2 \mid \dots \mid \alpha\beta_k \mid \gamma$$

el analizador no puede determinar qué regla aplicar al observar el inicio de $\alpha$. La **factorización a la izquierda** pospone la decisión hasta haber consumido el prefijo común:

\vspace{0.3cm}

$$A \to \alpha A' \mid \gamma$$
$$A' \to \beta_1 \mid \beta_2 \mid \dots \mid \beta_k$$

\vspace{0.3cm}

Toda gramática que aspire a ser analizada de forma predictiva debe carecer de recursividad a la izquierda y estar completamente factorizada a la izquierda.

\vspace{0.4cm}

## 4. Analizador Predictivo no Recursivo mediante Autómata de Pila

Para evitar la sobrecarga de implementar funciones recursivas en el código del compilador, se recurre a un autómata de pila gobernado por una matriz bidimensional denominada **tabla de análisis sintáctico** $M[A, a]$.

\vspace{0.4cm}

### Elementos Estructurales

\vspace{0.3cm}

- **Cinta de entrada:** Almacena la cadena de tokens generada por el analizador léxico, finalizada por el marcador especial de fin de fichero $\$$ ($a_1 a_2 \dots a_n \$$).
- **Pila del autómata:** Contiene símbolos terminales y no terminales tomados de $V_N \cup V_T \cup \{\$\}$. En el arranque contiene el símbolo inicial $S$ en la cima, situado sobre el marcador de fondo de pila $\$$: cima $\to [S, \$]$.
- **Tabla de análisis $M[A, a]$:** Matriz donde las filas representan a los símbolos no terminales ($A \in V_N$) y las columnas a los símbolos terminales más el marcador fin de cadena ($a \in V_T \cup \{\$\}$). Las celdas contienen la producción gramatical que debe aplicarse o una marca de error.

\vspace{0.4cm}

### Algoritmo de Control de la Pila

En cada ciclo, el analizador examina el símbolo en la cima de la pila $X$ y el token actual apuntado en la entrada $a$:

\vspace{0.3cm}

1. Si $X = a = \$$, el análisis se completa con éxito: la cadena es sintácticamente correcta y es aceptada.
2. Si $X = a \neq \$$, se extrae el terminal $X$ de la pila y el puntero de lectura de la entrada avanza al siguiente token (operación de coincidencia o *match*).
3. Si $X \in V_N$, se consulta la celda correspondiente en la tabla $M[X, a]$:
   - Si la celda contiene la regla $X \to Y_1 Y_2 \dots Y_k$, se saca $X$ de la cima y se introducen en la pila los símbolos $Y_k, \dots, Y_2, Y_1$ en orden inverso, de forma que $Y_1$ quede en la nueva cima.
   - Si la producción es $X \to \epsilon$, simplemente se extrae $X$ de la pila sin apilar ningún símbolo nuevo.
   - Si la celda está vacía (contiene ERROR), se activa de inmediato el protocolo de tratamiento y recuperación de errores sintácticos.
4. Si $X \in V_T$ y $X \neq a$, existe una discrepancia léxica entre lo esperado y lo leído; la celda reporta error sintáctico.

\vspace{0.4cm}

## 5. Cálculo Sistemático de los Conjuntos INICIALES y SEGUIDORES

La construcción formal de la tabla predictiva $M$ descansa sobre el cálculo de dos conjuntos matemáticos para cada símbolo de la gramática.

\vspace{0.4cm}

### Conjunto INICIALES (*First*)

Para cualquier forma sentencial $\alpha \in (V_N \cup V_T)^*$, $\text{INICIALES}(\alpha)$ se define como el conjunto de símbolos terminales que pueden aparecer como primer símbolo de alguna cadena derivada a partir de $\alpha$:

$$\text{INICIALES}(\alpha) = \{a \in V_T \mid \alpha \Rightarrow^* a\beta\}$$

Si $\alpha$ puede derivar en la cadena vacía ($\alpha \Rightarrow^* \epsilon$), entonces $\epsilon \in \text{INICIALES}(\alpha)$.

\vspace{0.4cm}

#### Reglas Operativas de Cálculo de INICIALES

\vspace{0.3cm}

1. Si $X$ es un símbolo terminal ($X \in V_T$), entonces $\text{INICIALES}(X) = \{X\}$.
2. Si existe la producción $X \to \epsilon$, se añade $\epsilon$ al conjunto $\text{INICIALES}(X)$.
3. Para cada producción de la forma $X \to Y_1 Y_2 \dots Y_k$:
   - Se añade al conjunto $\text{INICIALES}(X)$ todo elemento terminal presente en $\text{INICIALES}(Y_1)$ distinto de $\epsilon$.
   - Si $\epsilon \in \text{INICIALES}(Y_1)$, se añade también $(\text{INICIALES}(Y_2) \setminus \{\epsilon\})$.
   - Se continúa propagando sucesivamente con $Y_3, \dots, Y_k$ mientras todos los símbolos precedentes puedan derivar en $\epsilon$.
   - Si todos los símbolos $Y_1, Y_2, \dots, Y_k$ contienen $\epsilon$ en sus respectivos conjuntos iniciales, se añade formalmente $\epsilon$ a $\text{INICIALES}(X)$.

\vspace{0.4cm}

### Conjunto SEGUIDORES (*Follow*)

Para cada símbolo no terminal $A \in V_N$, $\text{SEGUIDORES}(A)$ se define como el conjunto de símbolos terminales que pueden aparecer inmediatamente a la derecha de $A$ en alguna forma sentencial alcanzable desde el axioma inicial:

$$\text{SEGUIDORES}(A) = \{a \in V_T \mid S \Rightarrow^* \alpha A a \beta\}$$

Si $A$ puede situarse como el último símbolo de una derivación sentencial, el marcador de fin de entrada $\$$ pertenece a $\text{SEGUIDORES}(A)$. La cadena vacía $\epsilon$ nunca forma parte de un conjunto de seguidores.

\vspace{0.4cm}

#### Reglas Operativas de Cálculo de SEGUIDORES

\vspace{0.3cm}

1. Se inserta el marcador de fin de cadena $\$$ en el conjunto de seguidores del símbolo inicial: $\$ \in \text{SEGUIDORES}(S)$.
2. Si existe una producción de la forma $A \to \alpha B \beta$, todo símbolo terminal de $\text{INICIALES}(\beta)$ (excepto $\epsilon$) pertenece a $\text{SEGUIDORES}(B)$:
   $$(\text{INICIALES}(\beta) \setminus \{\epsilon\}) \subseteq \text{SEGUIDORES}(B)$$
3. Si existe una producción de la forma $A \to \alpha B$, o bien de la forma $A \to \alpha B \beta$ donde $\beta$ puede derivar en la cadena vacía ($\epsilon \in \text{INICIALES}(\beta)$), entonces todo elemento contenido en $\text{SEGUIDORES}(A)$ se transfiere a $\text{SEGUIDORES}(B)$:
   $$\text{SEGUIDORES}(A) \subseteq \text{SEGUIDORES}(B)$$

\vspace{0.4cm}

## 6. Algoritmo de Construcción de la Tabla Predictiva $M$

Con los conjuntos de INICIALES y SEGUIDORES calculados, la matriz de predicción se construye aplicando el siguiente procedimiento sistemático:

\vspace{0.3cm}

```
Para cada producción de la forma A -> alfa en la gramática G:
    1. Para cada símbolo terminal a perteneciente a INICIALES(alfa):
           Añadir la regla "A -> alfa" en la celda M[A, a]
    2. Si epsilon pertenece a INICIALES(alfa):
           Para cada símbolo b perteneciente a SEGUIDORES(A) (incluyendo $):
               Añadir la regla "A -> alfa" en la celda M[A, b]

Todas las celdas de la matriz M que queden indefinidas se marcan como ERROR.
```

\vspace{0.4cm}

## 7. Gramáticas $LL(1)$ y Condiciones Formales de no Ambigüedad

Una gramática es **$LL(1)$** (lectura de izquierda a derecha, derivación más a la izquierda, 1 token de anticipación) si su tabla de análisis predictivo $M$ carece de celdas con más de una producción asignada. La presencia de dos o más producciones en una misma celda representa un conflicto de predicción que invalida el determinismo del autómata.

\vspace{0.4cm}

### Condiciones Algebraicas Necesarias y Suficientes

Una gramática independiente del contexto es $LL(1)$ si y solo si, para cada par de producciones alternativas del mismo no terminal $A \to \alpha \mid \beta$, se satisfacen simultáneamente tres condiciones:

\vspace{0.3cm}

1. **Disyunción de Iniciales:** Los conjuntos de terminales con los que arrancan ambas ramas son estrictamente disjuntos:
   $$\text{INICIALES}(\alpha) \cap \text{INICIALES}(\beta) = \emptyset$$
2. **Nulabilidad Excluyente:** Como máximo una de las dos formas sentenciales puede derivar en la cadena vacía. Es decir:
   $$\epsilon \notin \text{INICIALES}(\alpha) \quad \text{o bien} \quad \epsilon \notin \text{INICIALES}(\beta)$$
3. **Disyunción con Seguidores ante Nulabilidad:** Si una de las ramas deriva en la cadena vacía (por ejemplo, $\beta \Rightarrow^* \epsilon$), entonces los iniciales de la otra rama deben ser disjuntos con los seguidores de la variable $A$:
   $$\text{INICIALES}(\alpha) \cap \text{SEGUIDORES}(A) = \emptyset$$

\vspace{0.4cm}

### Gramáticas $LL(1)$ Simples (S-Gramáticas)

Una S-Gramática es un caso particular restringido de gramática $LL(1)$ donde:
1. Toda producción con alternativas arranca en su lado derecho con un símbolo terminal distinto.
2. No existen producciones a la cadena vacía ($\epsilon$).

Todas sus reglas responden a la estructura canónica $A \to a_1\alpha_1 \mid a_2\alpha_2 \mid \dots \mid a_k\alpha_k$, con $a_i \neq a_j$ para todo $i \neq j$.

\vspace{0.4cm}

## 8. Tratamiento y Recuperación de Errores Sintácticos

Cuando el autómata accede a una celda vacía de la tabla de análisis ($M[X, a] = \text{ERROR}$), se confirma que la secuencia de entrada presenta un fallo sintáctico. El compilador debe emitir un diagnóstico claro y aplicar una política de recuperación que le permita proseguir el análisis del resto del código.

\vspace{0.4cm}

### Recuperación a Nivel de Frase

Consiste en asociar a cada celda errónea de la tabla un puntero a una rutina de corrección ad-hoc diseñada para solventar fallos frecuentes (por ejemplo, insertar un paréntesis de cierre omitido, descartar una coma duplicada o imprimir un mensaje especializado).

\vspace{0.4cm}

### Recuperación en Modo Pánico (*Panic Mode*)

Es la técnica predominante. Al detectar el fallo, el analizador descarta secuencialmente tokens de la cinta de entrada hasta encontrar un símbolo perteneciente a un conjunto predeterminado denominado **conjunto de sincronización**. En ese punto, el analizador reanuda su operación regular.

\vspace{0.4cm}

#### Criterios de Selección del Conjunto de Sincronización

\vspace{0.3cm}

1. **Sincronización por SEGUIDORES:** Para cada no terminal $A$, se definen como símbolos de sincronización los elementos de $\text{SEGUIDORES}(A)$. Al topar con un símbolo de $\text{SEGUIDORES}(A)$, se extrae $A$ de la cima de la pila y se asume que $A$ ya ha sido procesado, reanudando el análisis con el resto de la frase.
2. **Sincronización por INICIALES:** En estructuras delimitadas por palabras clave (como bloques `begin ... end` o declaraciones de funciones), si el programador olvida el delimitador final resulta preferible sincronizar por $\text{INICIALES}$ de la siguiente sentencia, evitando descartar código válido subsiguiente.
3. **Variables con derivación a $\epsilon$:** Si un no terminal $A$ deriva en la cadena vacía, ante un error en la entrada el analizador puede optar por aplicar la producción $A \to \epsilon$, minimizando la pérdida de tokens.
4. **Discrepancia en terminales:** Si en la cima de la pila figura un símbolo terminal $a$ que no coincide con el token de entrada, una política eficaz consiste en desapilar $a$ emitiendo un aviso de que el terminal $a$ ha sido omitido en el código fuente.

\vspace{0.4cm}

## 9. Problema Integral de Examen Resuelto: Gramática Aritmética Completa

A continuación se resuelve de forma exhaustiva un problema representativo del examen parcial de la ETSIIT.

\vspace{0.4cm}

### Enunciado

Dada la gramática libre del contexto de expresiones aritméticas ya transformada (sin recursividad a la izquierda y factorizada):

\vspace{0.3cm}

1. $E \to T E'$
2. $E' \to + T E' \mid \epsilon$
3. $T \to F T'$
4. $T' \to * F T' \mid \epsilon$
5. $F \to ( E ) \mid id$

Se pide:
1. Calcular formalmente los conjuntos INICIALES de todas las formas sentenciales y no terminales.
2. Calcular formalmente los conjuntos SEGUIDORES de todos los símbolos no terminales.
3. Construir la tabla de análisis predictivo no recursivo $M[A, a]$.
4. Demostrar si la gramática es $LL(1)$.
5. Realizar la traza de ejecución de la pila para la cadena incorrecta $id + * id \$$ aplicando recuperación en modo pánico sincronizando por $\text{SEGUIDORES}$.

\vspace{0.4cm}

### Paso 1: Cálculo de Conjuntos INICIALES

\vspace{0.3cm}

- $\text{INICIALES}(F) = \{(, id\}$ (a partir de las reglas $F \to (E)$ y $F \to id$).
- $\text{INICIALES}(T') = \{*, \epsilon\}$ (a partir de las reglas $T' \to *FT'$ y $T' \to \epsilon$).
- $\text{INICIALES}(T) = \text{INICIALES}(FT') = \text{INICIALES}(F) = \{(, id\}$.
- $\text{INICIALES}(E') = \{+, \epsilon\}$ (a partir de las reglas $E' \to +TE'$ y $E' \to \epsilon$).
- $\text{INICIALES}(E) = \text{INICIALES}(TE') = \text{INICIALES}(T) = \{(, id\}$.

\vspace{0.4cm}

### Paso 2: Cálculo de Conjuntos SEGUIDORES

\vspace{0.3cm}

1. **Para el axioma $E$:** Por la regla 1 de cálculo, $\$ \in \text{SEGUIDORES}(E)$. Por la regla $F \to (E)$, el paréntesis de cierre sigue a $E$, por lo que $) \in \text{SEGUIDORES}(E)$.
   $$\text{SEGUIDORES}(E) = \{), \$\}$$

2. **Para la variable $E'$:** En la regla $E \to TE'$, $E'$ se sitúa al final, heredando $\text{SEGUIDORES}(E)$. En la regla $E' \to +TE'$, hereda de sí mismo sin aportar nuevos símbolos.
   $$\text{SEGUIDORES}(E') = \text{SEGUIDORES}(E) = \{), \$\}$$

3. **Para la variable $T$:** En las reglas $E \to TE'$ y $E' \to +TE'$, $T$ va seguido de $E'$. Por tanto, recibe $(\text{INICIALES}(E') \setminus \{\epsilon\}) = \{+\}$. Como $E' \Rightarrow^* \epsilon$, recibe también $\text{SEGUIDORES}(E)$ y $\text{SEGUIDORES}(E')$.
   $$\text{SEGUIDORES}(T) = \{+, ), \$\}$$

4. **Para la variable $T'$:** En la regla $T \to FT'$, $T'$ se ubica al final, heredando directamente $\text{SEGUIDORES}(T)$. En $T' \to *FT'$, hereda de sí mismo.
   $$\text{SEGUIDORES}(T') = \text{SEGUIDORES}(T) = \{+, ), \$\}$$

5. **Para la variable $F$:** En las reglas $T \to FT'$ y $T' \to *FT'$, $F$ va seguido de $T'$. Recibe $(\text{INICIALES}(T') \setminus \{\epsilon\}) = \{*\}$. Al derivar $T'$ en $\epsilon$, recibe además $\text{SEGUIDORES}(T)$.
   $$\text{SEGUIDORES}(F) = \{*, +, ), \$\}$$

\vspace{0.4cm}

### Paso 3: Construcción de la Tabla de Análisis Predictivo $M$

Aplicando el algoritmo de relleno sistemático sobre cada producción:

\vspace{0.3cm}

| No Terminal | $id$ | $+$ | $*$ | $($ | $)$ | $\$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$E$** | $E \to TE'$ | | | $E \to TE'$ | | |
| **$E'$** | | $E' \to +TE'$ | | | $E' \to \epsilon$ | $E' \to \epsilon$ |
| **$T$** | $T \to FT'$ | | | $T \to FT'$ | | |
| **$T'$** | | $T' \to \epsilon$ | $T' \to *FT'$ | | $T' \to \epsilon$ | $T' \to \epsilon$ |
| **$F$** | $F \to id$ | | | $F \to (E)$ | | |

\vspace{0.3cm}

Las celdas no ocupadas por ninguna producción corresponden a entradas de ERROR. Si se incorporan las marcas de sincronización basadas en los conjuntos de seguidores, se asigna la etiqueta `sinc` en:
- Fila $E$: en las columnas $)$ y $\$$.
- Fila $E'$: (no requiere marcas extra al derivar directamente en $\epsilon$).
- Fila $T$: en las columnas $+$, $)$ y $\$$.
- Fila $T'$: (no requiere marcas extra al derivar directamente en $\epsilon$).
- Fila $F$: en las columnas $+$, $*$, $)$ y $\$$.

\vspace{0.4cm}

### Paso 4: Demostración de la Condición $LL(1)$

Analizamos los dos únicos no terminales que poseen alternativas:

\vspace{0.3cm}

- **Para $E'$ ($E' \to +TE' \mid \epsilon$):**
  1. $\text{INICIALES}(+TE') \cap \text{INICIALES}(\epsilon) = \{+\} \cap \emptyset = \emptyset$.
  2. Solo una rama deriva en $\epsilon$ ($\epsilon \in \text{INICIALES}(\epsilon)$, pero $+ \notin \text{INICIALES}(\epsilon)$).
  3. $\text{INICIALES}(+TE') \cap \text{SEGUIDORES}(E') = \{+\} \cap \{), \$\} = \emptyset$.
  Se satisfacen las tres condiciones.

- **Para $T'$ ($T' \to *FT' \mid \epsilon$):**
  1. $\text{INICIALES}(*FT') \cap \text{INICIALES}(\epsilon) = \{*\} \cap \emptyset = \emptyset$.
  2. Solo una rama deriva en $\epsilon$.
  3. $\text{INICIALES}(*FT') \cap \text{SEGUIDORES}(T') = \{*\} \cap \{+, ), \$\} = \emptyset$.
  Se satisfacen las tres condiciones.

Dado que ninguna celda de la tabla $M$ contiene más de una regla y se cumplen las tres condiciones algebraicas de no ambigüedad, la gramática es estrictamente $LL(1)$.

\vspace{0.4cm}

### Paso 5: Traza de Ejecución de la Pila con Recuperación en Modo Pánico

Analizamos la cadena sintácticamente incorrecta $\omega = id + * id \$$, donde tras el operador $+$ aparece de forma anómala una multiplicación $*$ sin operando intermedio:

\vspace{0.3cm}

| Paso | Contenido de la Pila | Entrada Restante | Producción / Acción Aplicada |
| :---: | :--- | :--- | :--- |
| 1 | $\$ E$ | $id + * id \$$ | $M[E, id]: E \to TE'$ (desapila $E$, apila $E' T$) |
| 2 | $\$ E' T$ | $id + * id \$$ | $M[T, id]: T \to FT'$ (desapila $T$, apila $T' F$) |
| 3 | $\$ E' T' F$ | $id + * id \$$ | $M[F, id]: F \to id$ (desapila $F$, apila $id$) |
| 4 | $\$ E' T' id$ | $id + * id \$$ | Coincidencia (*Match*): desapila $id$, avanza entrada |
| 5 | $\$ E' T'$ | $+ * id \$$ | $M[T', +]: T' \to \epsilon$ (desapila $T'$) |
| 6 | $\$ E'$ | $+ * id \$$ | $M[E', +]: E' \to +TE'$ (desapila $E'$, apila $E' T +$) |
| 7 | $\$ E' T +$ | $+ * id \$$ | Coincidencia (*Match*): desapila $+$, avanza entrada |
| 8 | $\$ E' T$ | $* id \$$ | $M[T, *] = \text{ERROR}$. Se activa modo pánico. |
| 9 | $\$ E' T$ | $* id \$$ | Símbolo $*$ no pertenece a $\text{SEGUIDORES}(T) = \{+, ), \$\}$. Descarta token $*$. |
| 10 | $\$ E' T$ | $id \$$ | Entrada actual es $id$. $M[T, id]$ existe ($T \to FT'$). Reanuda análisis. |
| 11 | $\$ E' T' F$ | $id \$$ | $M[F, id]: F \to id$ |
| 12 | $\$ E' T' id$ | $id \$$ | Coincidencia (*Match*): desapila $id$, avanza entrada |
| 13 | $\$ E' T'$ | $\$$ | $M[T', \$]: T' \to \epsilon$ (desapila $T'$) |
| 14 | $\$ E'$ | $\$$ | $M[E', \$]: E' \to \epsilon$ (desapila $E'$) |
| 15 | $\$$ | $\$$ | Pila $\$$ y Entrada $\$$: Análisis finalizado con éxito tras recuperación. |
