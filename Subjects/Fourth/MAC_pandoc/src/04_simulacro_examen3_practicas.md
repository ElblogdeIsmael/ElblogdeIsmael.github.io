# Simulacro Examen 3 MAC

### Ejercicio 1 (El Palíndromo en Clase L)

**Enunciado:**
Demuestre formalmente que el problema de determinar si una palabra de entrada es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda) pertenece a la clase de complejidad **L**.

**Resolución detallada:**
Para demostrar que el problema pertenece a la clase **L** (espacio logarítmico), utilizamos el modelo computacional estándar para la evaluación de espacio sublineal: una Máquina de Turing equipada con una **cinta de entrada de solo lectura**, cuyo espacio no se contabiliza y que permite mover el cabezal libremente hacia adelante y hacia atrás, y una cinta de trabajo de lectura/escritura separada.

**Diseño del Algoritmo:**
1.  Inicializamos dos punteros (contadores numéricos) en la cinta de trabajo: $i = 1$ apuntando al principio de la palabra de entrada, y $j = n$ apuntando al símbolo final.
2.  Iniciamos un bucle que se ejecuta mientras $i < j$.
3.  En cada iteración, la máquina mueve el cabezal de la cinta de entrada a la posición $i$ para leer su símbolo, y posteriormente lo mueve a la posición $j$ para leer el suyo.
4.  Si los símbolos leídos en $i$ y $j$ son diferentes, la máquina **rechaza** inmediatamente, ya que la palabra no es simétrica.
5.  Si los símbolos coinciden, se incrementa el puntero $i$ en 1 y se decrementa el puntero $j$ en 1, continuando la comprobación hacia el centro de la palabra.
6.  Si el bucle finaliza sin haber encontrado ninguna diferencia, la máquina **acepta** la entrada.

**Justificación de Complejidad (Espacio):**
Los únicos datos que se han almacenado en la cinta de trabajo durante toda la ejecución han sido los contadores $i$ y $j$. Como el valor numérico máximo que pueden alcanzar estos contadores está estrictamente acotado por la longitud total de la entrada $n$, representarlos en formato binario requiere exactamente $\lceil \log_2(n+1) \rceil$ casillas de memoria. Al emplear un número constante de contadores de este tamaño, el espacio de memoria de trabajo total consumido es **$O(\log n)$**, lo que demuestra formalmente que el problema se encuadra en la clase **L**.

---

### Ejercicio 2 (Análisis de Conjuntos Numéricos)

**Enunciado:**
Se plantean los dos siguientes problemas de decisión sobre conjuntos de números:
*   **Problema A:** Dado un conjunto de números, determinar si existe un elemento que sea la mediana. Si la cantidad total de números en la entrada no es impar, la máquina debe rechazar automáticamente.
*   **Problema B:** Dado un conjunto de números, determinar si es posible agrupar todos sus elementos en parejas de tal forma que la suma de los dos elementos de cada pareja sea exactamente la misma.

Sabiendo que uno de los problemas pertenece a la clase **L** y el otro pertenece a la clase **P**, identifique a qué clase de complejidad pertenece cada uno y demuestre formalmente su clasificación detallando el algoritmo utilizado y analizando su consumo de recursos.

**Resolución detallada:**

#### **1. El Problema A (La Mediana) pertenece a la Clase L**
Para demostrar que este problema se puede decidir en espacio logarítmico, diseñamos un algoritmo usando la misma máquina de Turing con cinta de entrada de solo lectura descrita anteriormente. Es fundamental **no copiar nunca la entrada en la cinta de trabajo**, ya que eso supondría gastar un espacio de tamaño lineal.

**Algoritmo y Justificación:**
*   La máquina primero cuenta el número total de elementos $n$. Si $n$ es par, rechaza automáticamente la entrada.
*   Si es impar, utiliza un contador $i$ para iterar por cada elemento del array, tratándolo como el "candidato a mediana".
*   Para cada candidato $Array[i]$, lanza un segundo bucle interno con un índice $j$ que recorre todo el conjunto. Durante este recorrido, utiliza dos contadores numéricos auxiliares: `C_menores` (que suma 1 si $Array[j] < Array[i]$) y `C_mayores` (que suma 1 si $Array[j] > Array[i]$).
*   Al finalizar el recorrido interno, si `C_menores` es exactamente igual a `C_mayores`, la máquina **acepta** (ha encontrado la mediana). Si no coinciden, reinicia los contadores y pasa al siguiente candidato con el índice $i$.
*   **Espacio:** La máquina solo ha utilizado 4 variables enteras ($i$, $j$, `C_menores` y `C_mayores`). Como sus valores están acotados por la longitud de la entrada $n$, cada una ocupa un espacio binario de $\lceil \log_2(n+1) \rceil$. Al utilizar un número fijo de contadores logarítmicos, el espacio total consumido es **$O(\log n)$**, justificando su pertenencia a **L**.

#### **2. El Problema B (Parejas de sumas iguales) pertenece a la Clase P**
Este problema no se puede resolver eficientemente en espacio $L$ sin alterar la entrada, por lo que demostraremos que pertenece a la clase **P** diseñando una Máquina de Turing determinista que lo resuelva en un tiempo acotado por un polinomio $O(n^c)$.

**Algoritmo y Justificación:**
*   **Paso 1:** La máquina ordena todos los elementos del array de menor a mayor. Los algoritmos de ordenación deterministas más eficientes toman un tiempo de **$O(n \log n)$**.
*   **Paso 2:** Por pura lógica matemática, para que todos los pares sumen lo mismo, el número más pequeño ($Array$) debe estar emparejado obligatoriamente con el número más grande ($Array[n]$). La máquina suma ambos extremos para obtener la única constante de "Suma Objetivo" posible: $S = Array + Array[n]$. Esto cuesta un tiempo constante $O(1)$.
*   **Paso 3:** La máquina emplea dos punteros (uno al inicio y otro al final) y los va moviendo hacia el centro del array paso a paso. En cada iteración suma los dos elementos a los que apuntan y verifica que su resultado sea exactamente igual a $S$. Este recorrido toma un tiempo lineal **$O(n)$**.
*   Si alguna pareja falla, **rechaza**. Si los punteros se cruzan en el centro y todas han sumado $S$, **acepta**. 
*   **Tiempo:** El paso de mayor coste es la ordenación ($O(n \log n)$). Como el tiempo global de ejecución está dominado por este paso y, por tanto, acotado superiormente por la función polinómica cuadrática genérica $O(n^2)$, queda formalmente demostrado que el problema pertenece a la clase **P**.


### Ejercicio 3 (Cuestión Conceptual: El Óptimo del Viajante de Comercio)

**Enunciado:**
En relación con el Problema del Viajante de Comercio, justifique detalladamente por qué comprobar si un circuito dado es la solución ÓPTIMA absoluta del grafo no pertenece a la clase NP ni a la clase coNP, sino que su resolución requiere utilizar clases de ESPACIO.

**Resolución detallada:**
El problema de certificar que un circuito es el **óptimo absoluto** en el Viajante de Comercio es estructuralmente distinto a simplemente comprobar si existe un camino con un coste menor o igual a un límite dado. 

Para poder convencer a un verificador de que un circuito concreto es la solución óptima, el certificado aportado tendría que demostrar dos afirmaciones de naturaleza opuesta simultáneamente:
1.  **Condición existencial:** Demostrar que el camino existe, es válido y tiene un coste $X$. Esta propiedad es característica de la clase **NP** ("Existe un camino...").
2.  **Condición universal:** Demostrar que **NO existe** en la totalidad del grafo ningún otro circuito posible cuyo coste sea estrictamente menor que $X$. Para refutar la existencia de alternativas mejores necesitamos evaluar todas las combinaciones, lo cual es una propiedad característica de la clase **coNP** ("Para todo camino, ninguno es mejor...").

Dado que evaluar una "solución óptima" exige simultáneamente verificar un "Existe" y un "Para todo", un certificado de tamaño polinómico simple no puede abarcar la evaluación de todas las rutas alternativas, por lo que certificar el óptimo no se encuadra de forma aislada ni en **NP** ni en **coNP**.

**Resolución mediante clases de ESPACIO:**
A pesar de lo anterior, el problema sí puede resolverse de forma determinista si apelamos a los recursos de **ESPACIO** (dentro de clases como PSPACE). Una Máquina de Turing determinista puede recorrer de manera sistemática todo el árbol de caminos posibles del grafo mediante un algoritmo de búsqueda en profundidad (backtracking). 
La clave radica en que la máquina **reutiliza constantemente la memoria**. Al explorar rama por rama, solo necesita almacenar el estado de la ruta actual y llevar la cuenta del "mejor coste encontrado hasta el momento". Por lo tanto, el espacio de memoria que consume está acotado de forma **lineal $O(n)$** respecto al tamaño del grafo, logrando encontrar la solución óptima sin agotar la memoria, a pesar de que el proceso requiera un tiempo de ejecución de orden exponencial.

---

### Ejercicio 4 (Estructuras Anidadas y la restricción sin retroceso)

**Enunciado:**
Dada una cadena de entrada compuesta por dos tipos de paréntesis (por ejemplo, `()` y `[]`), demuestre que determinar si están correctamente emparejados y anidados pertenece a la clase L. Indique teóricamente por qué este problema requeriría obligatoriamente un espacio lineal $O(n)$ si la cabeza de lectura no tuviera permitido retroceder.

**Resolución detallada:**

**Parte 1: Pertenencia a la Clase L (Modelo estándar)**
Utilizamos una Máquina de Turing que dispone de una cinta de entrada de solo lectura **con capacidad para retroceder** (releer) y una cinta de trabajo separada. Para que la cadena de paréntesis múltiples sea válida, se deben verificar dos propiedades: el balance global de la cadena ignorando los tipos, y que cada cierre coincida en tipo con su apertura correspondiente en el anidamiento.

**Algoritmo en Espacio $O(\log n)$:**
1.  La máquina recorre la palabra con un **contador de balance global $b$**, incrementándolo en las aperturas y decrementándolo en los cierres, y comprobando que nunca sea menor a 0 para validar el balance.
2.  Cada vez que el cabezal de lectura encuentra un símbolo de cierre (por ejemplo en la posición $j$), la máquina detiene su avance, memoriza el índice $j$ y debe localizar su apertura asociada.
3.  La apertura asociada a ese cierre será exactamente la **última posición $i < j$** tal que el segmento intermedio de la palabra ($x[i+1 .. j-1]$) está **perfectamente balanceado**.
4.  Para encontrar ese punto operativamente, el algoritmo lanza un segundo recorrido auxiliar desde el inicio hasta $j$. Lleva un contador sub-balance y memoriza el índice $i$ de la última apertura que provocó que el sub-balance se situara en cero justo antes del cierre.
5.  Una vez localizada la posición de apertura $i$, la máquina comprueba de manera directa que el símbolo situado en $i$ y el situado en $j$ **sean exactamente del mismo tipo** (ambos redondos o ambos cuadrados). Si difieren, rechaza.

**Justificación Matemática:**
Durante toda esta operación, la máquina ha evitado utilizar estructuras de datos dinámicas como pilas. Solamente ha necesitado almacenar en la cinta de trabajo unos pocos contadores enteros (como $b$) y punteros a índices de la cinta (como $i$ y $j$). Como el valor numérico máximo de todas estas variables está estrictamente limitado por la longitud total $n$, su escritura binaria precisa un número constante de contadores de tamaño $\lceil \log_2(n+1) \rceil$. En consecuencia, el espacio total empleado en la memoria es **$O(\log n)$**, lo que demuestra formalmente su pertenencia a **L**.

**Parte 2: Por qué requiere espacio $O(n)$ si NO se permite retroceder (Modelo Online)**
Si le prohibimos a la máquina mover su cabezal hacia atrás, le impedimos ejecutar la estrategia de "buscar emparejamientos bajo demanda". Teóricamente, esto la obliga a emplear un espacio **lineal $\Omega(n)$**, lo cual se demuestra usando un **argumento de distinguibilidad (fooling set)**.

1.  Consideremos un conjunto de $2^m$ cadenas distintas que están formadas exclusivamente por un prefijo de $m$ símbolos de apertura combinados de redondos y cuadrados (por ejemplo, `([(([` vs `([[[[`).
2.  Para cualquier par de prefijos diferentes $u \neq u'$, siempre existirá una posición concreta donde el tipo de paréntesis elegido no coincide. 
3.  Si le suministramos a la máquina la continuación exacta de cierres del primer prefijo (su "espejo" lógicamente correcto), esta concatenación formará una palabra válida y la máquina la **aceptará**. Sin embargo, si le adjuntamos esa misma continuación al segundo prefijo $u'$, los tipos chocarán y la máquina debe **rechazar**.
4.  Como la máquina no puede retroceder en la cinta para revisar qué prefijo leyó al principio, su decisión futura depende única y exclusivamente de la "fotografía" o estado en el que quedó su memoria tras leer la primera mitad de la entrada. 
5.  Para evitar equivocarse al evaluar las $2^m$ posibles continuaciones en el futuro, la máquina **debe obligatoriamente alcanzar una configuración de memoria completamente distinta para cada uno de los $2^m$ prefijos posibles**.
6.  Sabiendo que una memoria de tamaño $s$ puede codificar como máximo $2^{O(s)}$ configuraciones diferentes, la desigualdad $2^{O(s)} \ge 2^m$ requiere matemáticamente que **$s = \Omega(m)$**. Tomando la longitud de los prefijos como la mitad de la palabra ($m = \lfloor n/2 \rfloor$), se demuestra formalmente que la máquina precisa almacenar todos los tipos, necesitando forzosamente un espacio lineal **$O(n)$**.

---
### Ejercicio 5 (Cierre de la Clase NP para la Estrella de Kleene $L^*$)

**Enunciado del Simulacro:**
Demuestre, definiendo rigurosamente su certificado y su verificador, que si un lenguaje $L$ pertenece a la clase **NP**, entonces la clausura de Kleene $L^*$ también pertenece a **NP**.

**Resolución detallada:**
La definición de la estrella de Kleene $L^*$ establece que una palabra $x \in L^*$ si, y solo si, se puede particionar en $k$ trozos consecutivos ($w_1, w_2, \dots, w_k$) de forma que cada subpalabra o bloque $w_j$ pertenezca obligatoriamente al lenguaje original $L$.

**1. Hipótesis de partida:**
Dado que el enunciado nos garantiza que $L \in \text{NP}$, sabemos por teoría que existe un verificador determinista polinómico $V$ y que toda palabra válida cuenta con un certificado individual de tamaño polinómico acotado por un polinomio $q(|w|)$.

**2. El Diseño del Certificado para $L^*$ (El Súper-Certificado):**
Para demostrar que la palabra completa $x$ (de longitud $n$) pertenece a $L^*$, no podemos comprobarlo de golpe, por lo que el certificado aportado debe constar de dos elementos clave:
*   **Los puntos de partición (Cortes):** Una secuencia de índices $i_0 = 0 < i_1 < i_2 < \dots < i_k = n$ que delimitan exactamente dónde empieza y dónde termina cada trozo $w_j$ dentro de la palabra $x$.
*   **Las pruebas individuales:** Una lista de sub-certificados $(c_1, c_2, \dots, c_k)$, donde cada $c_j$ es el certificado individual que convence al verificador original de que ese trozo concreto $w_j \in L$.

**3. El Verificador Determinista $V^*$ para $L^*$:**
El algoritmo verificador recibe la entrada $x$ y el súper-certificado, operando de la siguiente manera:
1. Comprueba lógicamente que los índices de corte ($i_j$) están ordenados, no se solapan y cubren toda la longitud $n$.
2. Para cada subpalabra $w_j$ delimitada por los cortes, ejecuta el verificador original de la hipótesis: $V(w_j, c_j) == 1$.
3. Si el verificador devuelve "1" (Acepta) para todos y cada uno de los trozos, $V^*$ **acepta**. Si alguna subpalabra es rechazada, $V^*$ rechaza automáticamente.

**4. Justificación Matemática (El Cierre Polinómico):**
Para probar la pertenencia a NP, debemos justificar que estos recursos no explotan exponencialmente:
*   **Tamaño del Súper-Certificado:** Como la palabra se puede partir como máximo en $n$ trozos de 1 carácter ($k \le n$), hay a lo sumo $n$ índices de corte, y cada índice requiere $O(\log n)$ bits. Por otro lado, la suma de las longitudes de todos los trozos es exactamente $n$ ($\sum |w_j| = n$). Dado que cada certificado individual $c_j$ está acotado por $q(|w_j|)$, el tamaño total de la suma de todos los certificados no superará $n \cdot q(n)$, lo cual es una medida estrictamente polinómica.
*   **Tiempo de Ejecución:** Comprobar los cortes toma tiempo lineal. La ejecución del verificador original $V$ es de coste polinómico y se llama, a lo sumo, $n$ veces. Como multiplicar un polinomio por $n$ da como resultado otro polinomio, el proceso entero requiere un tiempo determinista polinómico. 
*   **Conclusión:** Existe un certificado de tamaño polinómico evaluable en tiempo polinómico, por lo que queda demostrado que **$L^* \in \text{NP}$**.

---

### Ejercicio 6 (Composición de Funciones)

**Enunciado del Simulacro:**
Evalúe el comportamiento de la clase de funciones exponenciales de la forma $\{k^n : k > 0\}$ bajo la composición polinómica por la izquierda $p(f(n))$ y por la derecha $f(p(n))$, asumiendo para la prueba que $p(n) = n^l$ ($l>0$). ¿Es la clase cerrada en ambos casos? Demuéstrelo matemáticamente.

**Resolución detallada:**
Para evaluar si la clase sobrevive o es "absorbida" bajo composición polinómica, introduciremos nuestra función genérica $p(n) = n^l$ (donde $l$ es una constante entera $\ge 2$ para evaluar el crecimiento no lineal).

**1. Composición polinómica por la izquierda $p(f(n))$:**
En este escenario, sustituimos la función completa dentro del polinomio, lo que equivale a elevar la función a una potencia constante $l$:
$$p(f(n)) = (k^n)^l$$
Por las propiedades de las potencias, multiplicamos los exponentes:
$$(k^n)^l = k^{n \cdot l} = (k^l)^n$$
Dado que $k$ y $l$ son dos valores constantes positivas, podemos definir una nueva constante $K = k^l$. Si sustituimos esto, nos queda la función $K^n$.
Como el resultado sigue teniendo la misma estructura exacta de una base constante elevada a $n$ ($K^n \in \{k^n\}$), la función no se ha salido de la familia. 
**Conclusión:** La familia exponencial de base constante **SÍ es cerrada** bajo la composición por la izquierda.

**2. Composición polinómica por la derecha $f(p(n))$:**
En este caso, se introduce el polinomio $n^l$ directamente como el argumento (la variable $n$) de la función exponencial, lo que se traduce en colocar el polinomio en el exponente:
$$f(p(n)) = k^{(n^l)}$$
Para $l \ge 2$, la expresión $k^{n^l}$ crece de forma dramáticamente más violenta que la clase base. Para que estuviera dentro de la familia original $\{k^n : k > 0\}$, tendría que existir alguna constante mágica enorme $K'$ tal que $k^{n^l} \le (K')^n$ para cualquier $n$ grande.
Sin embargo, es matemáticamente imposible acotar $k^{n^l}$ usando una función con exponente puramente lineal ($n$), ya que un grado de libertad adicional introducido en el exponente ($n^l$) "explota" superando a cualquier constante $K'$ que intentemos fijar en la base. 
**Conclusión:** La familia no contiene ninguna función capaz de dominar ese crecimiento masivo. Por lo tanto, la clase exponencial de base constante **NO es cerrada** bajo la composición por la derecha.


---

### Pregunta 7 (Separación de Clases: $\text{NP} \neq \text{ESPACIO}(n)$)

**Enunciado:**
Demuestre formalmente que $\text{NP} \neq \text{ESPACIO}(n)$. Para ello, base su demostración en el comportamiento que tiene cada una de estas dos clases frente a las reducciones computables en espacio logarítmico ($L$-reducciones).

**Resolución detallada:**
Para demostrar matemáticamente que ambas clases no son iguales, no vamos a evaluar si una contiene a la otra, sino que emplearemos la táctica de buscar una propiedad estructural que una clase posea y la otra no. Dos clases idénticas tendrían las mismas propiedades; al diferir en al menos una, queda demostrado que son distintas. La propiedad a evaluar es la **clausura bajo reducciones en espacio logarítmico ($\propto_L$)**.

**Paso 1: Demostrar que NP sí es cerrada para L-reducciones.**
Decir que es cerrada significa que si $P_1 \propto_L P_2$ y $P_2 \in \text{NP}$, entonces obligatoriamente $P_1 \in \text{NP}$. 
Una reducción calculable en espacio logarítmico $O(\log n)$ puede alcanzar como máximo un número polinómico de configuraciones de memoria distintas ($2^{O(\log n)} = n^{O(1)}$) sin entrar en bucle infinito. Por tanto, cualquier reducción en espacio $L$ se ejecuta a lo sumo en tiempo polinómico. Al encadenar esta reducción polinómica con el verificador polinómico del problema $P_2$, el tiempo de cómputo global sigue siendo estrictamente polinómico, demostrando que **la clase NP es cerrada bajo estas reducciones**.

**Paso 2: Demostrar que ESPACIO(n) NO es cerrada para L-reducciones.**
Para este paso, nos apoyamos en el **Teorema de la Jerarquía de Espacio**, el cual garantiza que disponer de más memoria estricta nos permite resolver más problemas; en concreto: $\text{ESPACIO}(n) \subsetneq \text{ESPACIO}(n^2)$.
Gracias a esto, podemos fijar un problema testigo "muy difícil" $A$ tal que sabemos de forma absoluta que **$A \in \text{ESPACIO}(n^2)$ pero $A \notin \text{ESPACIO}(n)$**.

Utilizamos ahora la técnica del **Padding** (Relleno). Construimos un lenguaje disfrazado $B$ añadiendo caracteres neutros `#` a la entrada original $x \in A$ hasta que el tamaño total de la nueva cadena sea el cuadrado de la original ($N = |x|^2$).
*   **$B \in \text{ESPACIO}(n)$:** Para que una máquina decida $B$, solo tiene que extraer $x$ y ejecutar el decididor original de $A$. Como este decididor consumía un espacio de $|x|^2$, y nuestra entrada de ahora mide exactamente $N = |x|^2$, el espacio consumido respecto al nuevo tamaño es exactamente lineal $O(N)$.
*   **La reducción:** El proceso de transformar la entrada corta $x$ en la entrada gigante $x\#^{|x|^2 - |x|}$ consiste en ir contando caracteres, lo cual requiere apuntadores logarítmicos. Así que $A$ se reduce a $B$ en espacio $L$ ($A \propto_L B$).

**Conclusión final:**
Hemos demostrado que $A \propto_L B$ y que $B \in \text{ESPACIO}(n)$. Si la clase $\text{ESPACIO}(n)$ fuera verdaderamente cerrada bajo estas reducciones, obligaría a que $A$ estuviera en $\text{ESPACIO}(n)$. Sin embargo, la Jerarquía de Espacio nos prohíbe esto ($A \notin \text{ESPACIO}(n)$). Para evitar esta contradicción matemática, la única salida es que **$\text{ESPACIO}(n)$ NO es cerrada**. Al diferir en esta propiedad fundamental, concluimos formalmente que **$\text{NP} \neq \text{ESPACIO}(n)$**.

---

### Pregunta 8 (Tratabilidad Numérica de la Exponenciación Modular)

**Enunciado:**
Se desea probar que el problema de la Exponenciación Modular (determinar si $a^b \equiv c \pmod p$) pertenece a la clase **P**. Demuestre esta pertenencia detallando el algoritmo eficiente necesario, y justifique previamente por qué un enfoque de multiplicaciones sucesivas estándar tendría un coste exponencial respecto al tamaño de la entrada en bits.

**Resolución detallada:**
El problema exige demostrar que la decisión $a^b \equiv c \pmod p$ se puede computar en tiempo polinómico respecto a la longitud de la entrada. 

**1. Análisis de los recursos y la trampa del enfoque estándar:**
En la teoría de complejidad, el tamaño de la entrada $n$ representa la **cantidad total de bits** necesarios para almacenar los cuatro números ($a, b, c, p$) en la memoria de la máquina. 
Si decidiéramos abordar el problema con un bucle simple de fuerza bruta que multiplicase consecutivamente $a \cdot a \cdot a \dots$ dando tantas vueltas como indique el exponente $b$, caeríamos en una trampa exponencial. Dado que el tamaño de la entrada está en bits, el valor numérico del exponente $b$ puede ascender a un orden de magnitud enorme de hasta $2^n$. Por consiguiente, dar esa cantidad de vueltas requeriría efectuar un tiempo de ejecución exponencial **$O(2^n)$**, un coste inasumible para la clase P.

**2. El algoritmo eficiente (Exponenciación Binaria por Cuadrados Sucesivos):**
Para situar el problema en la clase **P**, debemos evadir el valor gigante de $b$ y fijarnos únicamente en su longitud en bits. Diseñamos una Máquina de Turing determinista que emplea la **exponenciación binaria**:
*   La máquina reserva una variable acumuladora inicializada a 1 y recorre, uno a uno, los bits que componen el exponente $b$ (que son a lo sumo $n$ bits).
*   En cada paso (iteración del bucle), la máquina **eleva al cuadrado** su variable de base actual, aplicando la operación módulo $p$ inmediatamente para garantizar que el número resultante nunca supere el tamaño de la entrada (evitando desbordamientos de memoria).
*   Si el bit evaluado en esa vuelta es un `1`, la máquina además multiplica el acumulador por el valor actual y vuelve a aplicar el módulo $p$.
*   Al concluir el bucle por los bits, si el resultado contenido en el acumulador coincide exactamente con $c$, la máquina acepta. En caso contrario, rechaza.

**3. Justificación Matemática del Tiempo:**
A diferencia del caso exponencial, este bucle determinista da un número de iteraciones estrictamente equivalente a la cantidad de bits del exponente. Como el exponente es parte de la entrada, el bucle da a lo sumo $O(n)$ vueltas.
En el interior de cada ciclo, la máquina solo realiza multiplicaciones y divisiones enteras (el módulo) entre variables cuyo tamaño en bits está matemáticamente acotado. Dichas operaciones aritméticas básicas entre números de tamaño $n$ se pueden realizar eficientemente en tiempo $O(n^2)$. 
Por consiguiente, el tiempo total global del algoritmo es el producto del número de vueltas por el coste interno ($O(n) \cdot O(n^2)$), lo que resulta en un tiempo estrictamente acotado por un polinomio **$O(n^3)$**. Queda demostrado así formalmente que el problema se ubica dentro de la **clase P**.

---
### Pregunta 9 (El Problema de la Factorización)

**Enunciado:**
Dado un número $x$, se desea determinar si tiene un divisor $k$ en el rango abierto $1 < k < y$. Demuestre con todo detalle que este problema pertenece a la intersección $\text{NP} \cap \text{coNP}$, indicando los certificados exactos requeridos para las instancias afirmativas y negativas.

**Resolución detallada:**
Para demostrar que el problema de la factorización pertenece a la intersección **$\text{NP} \cap \text{coNP}$**, es imperativo estructurar la demostración validando su pertenencia a ambas clases de complejidad por separado.

**1. Demostración de pertenencia a NP (Instancias afirmativas):**
Si la respuesta a la pregunta es "SÍ", existe un divisor pequeño oculto en ese rango.
*   **Certificado:** Definimos como certificado simplemente el propio valor numérico del divisor $k$.
*   **Verificador:** Una Máquina de Turing Determinista (MTD) tomará la entrada ($x, y$) y el certificado $k$, y evaluará en tiempo polinómico dos propiedades:
    1. Validar las cotas numéricas: comprobar que $1 < k < y$.
    2. Efectuar la división entera para constatar que el resto $x \pmod k == 0$.
*   **Justificación de complejidad:** La operación aritmética de división entera entre números de un tamaño $n$ medido en bits se computa eficientemente en un tiempo algorítmico acotado por **$O(n^2)$**. Dado que un certificado de tamaño polinómico se puede verificar en tiempo polinómico, queda demostrado que el problema **pertenece a NP**.

**2. Demostración de pertenencia a coNP (Instancias negativas):**
Para probar que el problema original pertenece a coNP, debemos demostrar teóricamente que el problema complementario ("¿Es cierto que $x$ NO tiene divisores en el rango $1 < k < y$?") pertenece a la clase NP.
*   **Certificado para el NO:** Para refutar la existencia de divisores en ese rango, el certificado debe proporcionar la **descomposición completa en factores primos de $x$** ($x = p_1^{e_1} \cdot p_2^{e_2} \cdots p_m^{e_m}$). El elemento crucial de la demostración es que se debe adjuntar obligatoriamente el **Certificado de Pratt** para cada uno de los factores primos $p_i$ suministrados en la lista.
*   **Verificador:** Con este súper-certificado, la MTD ejecutará tres pasos deterministas:
    1. Multiplicará todos los factores de la lista para corroborar que el resultado general iguala exactamente a la entrada $x$.
    2. Validará irrefutablemente que cada uno de esos factores es primo comprobando la validez de sus respectivos Certificados de Pratt (cuyo formato formal sería, por ejemplo, $\text{Cert}(13) = \Big( \big(13 : 2 \ (2, 3)\big), \ \big(3 : 2 \ (2)\big) \Big)$). Esto se realiza en tiempo polinómico.
    3. Comprobará visualmente que todos y cada uno de los factores primos validados cumplen la condición de ser **mayores o iguales que $y$** ($p_i \ge y$).
*   **Justificación matemática:** El Teorema Fundamental de la Aritmética nos asegura que, si todos los componentes o "ladrillos" primos indivisibles de un número son estrictamente mayores o iguales que $y$, es algebraicamente imposible que combinándolos podamos construir un divisor compuesto menor que $y$. Dado que todo el proceso de validación opera en tiempo polinómico, el problema complementario está en NP.

**Conclusión:**
Como el problema original pertenece a NP y su complementario también (lo que lo ubica en coNP), el lenguaje queda clasificado lógicamente en la región **$\text{NP} \cap \text{coNP}$**.

---

### Pregunta 10 (Problemas de Búsqueda y TFNP)

**Enunciado:**
Todo lenguaje $L$ arbitrario que pertenezca a la intersección $\text{NP} \cap \text{coNP}$ sugiere un problema de búsqueda de funciones. Defina dicho problema sugerido y demuestre teóricamente que pertenece a la clase TFNP (Total Functional NP).

**Resolución detallada:**
La clase **TFNP (Total Functional NP)** abarca problemas de búsqueda donde, además de operar con certificados polinómicos, existe una garantía matemática inquebrantable de que **siempre existirá al menos una solución válida** para cualquier entrada (la relación es total).

**1. Definición del problema sugerido:**
Sea un lenguaje arbitrario $L \in \text{NP} \cap \text{coNP}$. Por la definición de pertenencia simultánea a estas clases, sabemos que:
*   Al estar en NP, existe una Máquina de Turing verificadora polinómica $M_1$ que valida un certificado $c_1$ demostrando que $x \in L$.
*   Al estar en coNP (es decir, $\bar{L} \in \text{NP}$), existe otro verificador polinómico $M_2$ que evalúa un certificado $c_2$ demostrando que $x \notin L$.

Basándonos en esto, el problema de búsqueda que la intersección sugiere se define formalmente como:
*   *"Dada una cadena de entrada $x$, encontrar un objeto $c$ que actúe como un testigo comprobable de forma eficiente de que, o bien $x \in L$ (satisfaciendo a $M_1$), o bien $x \notin L$ (satisfaciendo a $M_2$)."*

**2. Demostración de pertenencia a TFNP:**
Para clasificar este problema en **TFNP**, debemos validar las dos condiciones principales de la clase:

*   **Verificación polinómica (Condición FNP):** Tanto $c_1$ como $c_2$ son certificados cuya longitud en memoria está matemáticamente acotada por polinomios. Un algoritmo evaluador general puede simplemente recibir el certificado $c$ suministrado y ejecutar secuencialmente los verificadores $M_1$ y $M_2$ en tiempo polinómico para determinar si la solución cumple las condiciones del problema. Por tanto, es tratable en el esquema NP funcional.
*   **Totalidad garantizada (Condición T):** Para demostrar que la función nunca queda "indefinida", invocamos el principio lógico de la **Ley del bando excluido**. Para cualquier cadena $x$ que se introduzca como entrada, independientemente de su estructura, rige una dualidad estricta: **obligatoriamente se debe cumplir que $x \in L$ o que $x \notin L$**. Como forzosamente una de estas dos afirmaciones será una verdad matemática, la existencia del testigo (ya sea la solución $c_1$ que prueba el "Sí", o el testigo $c_2$ que prueba el "No") está garantizada para el $100\%$ de las instancias. Nunca existirá una entrada $x$ que carezca de solución. 

**Conclusión:**
Al haber construido un problema de búsqueda que es verificable algorítmicamente en tiempo polinómico y cuya solución está siempre garantizada mediante la totalidad lógica, concluimos que se inserta perfectamente en los márgenes teóricos de la clase **TFNP**.


---

### Pregunta 11 (Completitud Funcional: FSAT)

**Enunciado:**
Demuestre formalmente, validando los dos pasos exigidos por la teoría de complejidad de funciones, que el problema **FSAT** (la versión de búsqueda que exige devolver la asignación de valores de verdad) es **FNP-completo**.

**Resolución detallada:**
Para demostrar que la versión de búsqueda funcional de SAT (FSAT) es completa para la clase FNP, debemos justificar formalmente dos pasos: su pertenencia a la clase y su completitud (dificultad funcional).

**Paso 1: Demostrar que $\text{FSAT} \in \text{FNP}$**
Un problema pertenece a la clase de búsqueda FNP si la solución solicitada tiene un tamaño acotado y es verificable en tiempo polinómico:
1.  Dada una entrada formada por un conjunto de cláusulas lógicas $C$, el objeto solución que buscamos es una asignación de verdad $A$ (qué variables son Verdaderas y cuáles Falsas).
2.  La longitud en bits de esta asignación $A$ está estrictamente **acotada de forma lineal** por el número total de variables lógicas presentes en $C$. Por tanto, el tamaño de la solución cumple el requisito polinómico.
3.  El algoritmo verificador simplemente toma la asignación $A$ propuesta, sustituye los valores en las cláusulas de $C$ y evalúa las puertas lógicas. Esta comprobación se ejecuta eficientemente en **tiempo polinómico**. Al cumplir ambas propiedades, concluimos que $\text{FSAT} \in \text{FNP}$.

**Paso 2: Demostrar la completitud (FNP-dificultad)**
Debemos probar que cualquier problema de búsqueda genérico $\Pi \in \text{FNP}$ puede ser reducido a FSAT operando en espacio logarítmico. A diferencia de los problemas de decisión, aquí requerimos definir dos funciones (transformador de entrada $R$ y transformador de solución $S$):
1.  Por el **Teorema de Cook-Levin**, sabemos que la ejecución de cualquier Máquina de Turing No Determinista se puede traducir a un conjunto de cláusulas proposicionales (SAT) computándolo en espacio logarítmico. 
2.  La propiedad fundamental de esta reducción es que es **"constructiva respecto a las variables"**. Esto significa que, dentro de la enorme fórmula proposicional generada por la máquina, hay un pequeño grupo de variables lógicas que codifican y almacenan bit a bit la solución original del problema.
3.  Definimos el **transformador $R$** para que aplique Cook-Levin y convierta la entrada de $\Pi$ en cláusulas. A continuación, definimos el **transformador $S$** para que tome la asignación $A$ devuelta por FSAT, lea únicamente los valores V/F de esas variables constructivas clave, y traduzca esos bits para imprimir la solución exacta de $\Pi$. 
4.  Como ambos transformadores $R$ y $S$ son computables eficientemente y permiten que cualquier problema construya su solución a través de FSAT, queda demostrado que **FSAT es FNP-completo**.

---

### Pregunta 12 (El Problema de los Spines / Red Feliz)

**Enunciado:**
Dado un grafo $G = (V, E)$ donde cada arista $(i,j)$ tiene asignada una fuerza de interacción $J_{ij} \ge 0$, y donde cada nodo tiene un spin $s_i \in \{-1, +1\}$. La energía total se define como $R(s) = -\sum_{(i,j)\in E} J_{ij} s_i s_j$. Demuestre analíticamente que el problema de determinar si existe una asignación tal que la energía sea menor o igual a una cota $K$ ($R(s) \le K$) se puede resolver en tiempo polinómico (**Clase P**).

**Resolución detallada:**
Para demostrar que este problema es tratable (Clase P), no podemos probar todas las combinaciones de spines (lo cual sería un tiempo exponencial $O(2^n)$), sino que debemos realizar un análisis algebraico sobre la fórmula de la energía que explote el hecho de que todos los pesos son positivos o cero ($J_{ij} \ge 0$).

**1. Descomposición del Sumatorio:**
Al multiplicar los spines de los dos extremos de una arista ($s_i \cdot s_j$), los valores resultantes solo pueden ser dos:
*   Si ambos nodos tienen el **mismo signo** (por ejemplo, ambos $+1$ o ambos $-1$), su producto es positivo: $s_i s_j = 1$.
*   Si tienen **signos opuestos**, su producto es negativo: $s_i s_j = -1$.

Con esta premisa, podemos dividir el cálculo de la energía separando las aristas del grafo en esos dos conjuntos excluyentes:
$$R(s) = -\left( \sum_{s_i = s_j} J_{ij} - \sum_{s_i \neq s_j} J_{ij} \right)$$

**2. Sustitución Matemática:**
Definimos una constante universal $W$ equivalente a la suma total de todos los pesos del grafo: $W = \sum_{(i,j)\in E} J_{ij}$. 
Sabiendo que las aristas de igual signo equivalen al total menos las de distinto signo ($\sum_{s_i = s_j} J_{ij} = W - \sum_{s_i \neq s_j} J_{ij}$), lo sustituimos en la ecuación inicial:
$$R(s) = -\left( W - \sum_{s_i \neq s_j} J_{ij} - \sum_{s_i \neq s_j} J_{ij} \right) = -W + 2 \sum_{s_i \neq s_j} J_{ij}$$

**3. Condición de Decisión y Algoritmo Determinista:**
El problema nos pide evaluar si se puede cumplir que $R(s) \le K$, lo que matemáticamente equivale a despejar nuestra nueva fórmula:
$$ \sum_{s_i \neq s_j} J_{ij} \le \frac{K + W}{2} $$
El sumatorio $\sum_{s_i \neq s_j} J_{ij}$ representa el coste de las aristas que conectan nodos con signos diferentes (el "peso del corte"). Como el enunciado garantiza que absolutamente todas las interacciones son nulas o positivas ($J_{ij} \ge 0$), **este sumatorio nunca puede ser negativo**.

Por tanto, el valor absoluto mínimo que puede alcanzar la energía se da cuando ese sumatorio vale exactamente $0$. El algoritmo para lograr este mínimo es trivial: **asignar a todos los nodos del grafo exactamente el mismo signo** (por ejemplo, todos $+1$). En este caso, la energía colapsa a su mínimo posible: **$-W$**.

**4. Conclusión (Pertenencia a P):**
Una Máquina de Turing determinista simplemente tiene que recorrer las aristas para sumar su peso total y calcular el valor extremo $-W$. Si $-W \le K$, acepta; si no, rechaza. Como la suma y la comparación de $n$ aristas es un proceso aritmético lineal evaluable en tiempo estrictamente polinómico, el problema **pertenece a la Clase P**. 

