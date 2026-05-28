# Relación 4 MAC

## Ejercicio 1

### (a) Todo grafo finito dirigido acíclico (DAG) tiene una fuente.

**Prueba:** Supongamos por contradicción que el grafo no tiene ninguna fuente. Por definición, una fuente es un nodo con grado de entrada igual a 0. Si no existe ninguna fuente, significa que **todos los nodos del grafo tienen al menos un arco entrante**.

Empecemos en un nodo cualquiera $v_1$. Como $v_1$ tiene al menos un arco entrante, debe existir un nodo $v_2$ tal que $(v_2, v_1) \in E$. Del mismo modo, como $v_2$ no es una fuente, existe un $v_3$ tal que $(v_3, v_2) \in E$. Podemos prolongar este proceso de forma indefinida construyendo un camino hacia atrás:

$$\dots \longrightarrow v_3 \longrightarrow v_2 \longrightarrow v_1$$

Como el grafo es **finito** (tiene un número $n$ finito de nodos), por el **principio del palomar** (*pigeonhole principle*), eventualmente tendremos que repetir un nodo en nuestra secuencia de longitud mayor a $n$. Es decir, existen índices $i < j$ tales que $v_i = v_j$. Esto demuestra la existencia de un ciclo dirigido ($v_j \rightarrow v_{j-1} \rightarrow \dots \rightarrow v_i$), lo cual contradice directamente la hipótesis de que el grafo es acíclico. Por lo tanto, el grafo debe tener al menos una fuente.

### (b) Caracterización de numeración topológica.

**Prueba:**

* **Implicación directa ($\Rightarrow$):** Supongamos que el grafo es acíclico. Por el apartado (a), sabemos que tiene al menos una fuente. Le asignamos a esta fuente el número $1$ y la eliminamos del grafo junto con todos sus arcos salientes. El grafo restante sigue siendo finito y acíclico, por lo que tendrá otra fuente en el subgrafo resultante, a la cual le asignamos el número $2$. Repitiendo este proceso de forma inductiva, numeramos los nodos del $1$ al $n$. Como en cada paso eliminamos un nodo que no tiene arcos entrantes en el grafo restante, cualquier arco del grafo original irá necesariamente de un nodo eliminado antes (número menor) a uno eliminado después (número mayor).
* **Implicación inversa ($\Leftarrow$):** Supongamos que existe dicha numeración. Queremos probar que el grafo no tiene ciclos. Supongamos por contradicción que existe un ciclo dirigido de la forma:

$$v_{i_1} \longrightarrow v_{i_2} \longrightarrow \dots \longrightarrow v_{i_k} \longrightarrow v_{i_1}$$

Por la propiedad de la numeración, se debe cumplir simultáneamente que:

$$\text{num}(v_{i_1}) < \text{num}(v_{i_2}) < \dots < \text{num}(v_{i_k}) < \text{num}(v_{i_1})$$

Lo cual implica que $\text{num}(v_{i_1}) < \text{num}(v_{i_1})$, una contradicción matemática estricta. Por tanto, el grafo no contiene ciclos.

### (c) Algoritmo en tiempo polinómico (Algoritmo de Kahn).

El algoritmo se basa en la eliminación iterativa de fuentes descrita en el apartado anterior:

1. Calcular el grado de entrada (*in-degree*) de todos los nodos del grafo.
2. Introducir en una cola todos los nodos cuyo grado de entrada sea $0$.
3. Mientras la cola no esté vacía:
* Extraer un nodo $u$ de la cola.
* Para cada vecino $v$ tal que exista el arco dirigido $(u, v)$, decrementar el grado de entrada de $v$ en $1$.
* Si el grado de entrada de $v$ se reduce a $0$, añadir $v$ a la cola.


4. Si al finalizar el bucle se han extraído los $n$ nodos, el grafo es **acíclico**. Si quedan nodos sin procesar, el grafo contiene **al menos un ciclo**.

**Complejidad:** Calcular el grado de entrada inicial cuesta $O(|V|+|E|)$. Cada nodo y cada arco se procesa exactamente una vez en la cola, por lo que la complejidad total es **$O(|V| + |E|)$**, que es de tiempo polinómico (lineal).

---

## Ejercicio 2

### (a) Un grafo es bipartito si y solo si todos sus ciclos son de longitud par.

**Prueba:**

* **Implicación directa ($\Rightarrow$):** Sea $G=(V,E)$ un grafo bipartito con partición $V = V_1 \cup V_2$. Cualquier arista conecta un nodo de $V_1$ con uno de $V_2$. Por tanto, cualquier camino en el grafo debe alternar estrictamente entre ambos conjuntos. Para empezar en un nodo de $V_1$, recorrer un camino cerrado (ciclo) y regresar al mismo nodo de $V_1$, el camino debe realizar obligatoriamente un número par de transiciones (ir a $V_2$ y volver). Así, la longitud de todo ciclo es par.
* **Implicación inversa ($\Leftarrow$):** Supongamos que todos los ciclos tienen longitud par. Asumiendo que el grafo es conexo (si no lo es, se aplica a cada componente), elegimos un nodo origen $v_0$. Definimos la partición de vértices como:

$$V_1 = \{u \in V : \text{dist}(v_0, u) \text{ es par}\}$$


$$V_2 = \{u \in V : \text{dist}(v_0, u) \text{ es impar}\}$$



Supongamos por contradicción que existen dos nodos $x, y \in V_1$ conectados por una arista $(x,y) \in E$. Como ambos están en $V_1$, la longitud de los caminos mínimos desde $v_0$ a $x$ y a $y$ tienen la misma paridad. El circuito cerrado formado por el camino mínimo $v_0 \rightsquigarrow x$, la arista $(x, y)$ y el camino mínimo inverso $y \rightsquigarrow v_0$ tendría una longitud total de $\text{dist}(v_0, x) + 1 + \text{dist}(v_0, y)$, lo cual es un número impar ($\text{par} + 1 + \text{par} = \text{impar}$). Todo circuito impar contiene necesariamente un ciclo de longitud impar, contradiciendo la hipótesis. Por tanto, no existen aristas internas y el grafo es bipartito.

### (b) Algoritmo en tiempo polinómico.

Utilizamos un recorrido en anchura (BFS) para intentar colorear el grafo con 2 colores:

1. Inicializar todos los nodos como *no visitados*.
2. Para cada nodo no visitado, asignarle el "Color 1" y meterlo en una cola BFS.
3. Mientras la cola no esté vacía:
* Extraer el nodo $u$.
* Para cada vecino $v$ de $u$:
* Si $v$ no ha sido visitado, asignarle el color opuesto a $u$ y meterlo en la cola.
* Si $v$ ya está visitado y tiene el mismo color que $u$, detener el algoritmo y devolver **FALSO** (se detectó un ciclo impar).




4. Si el recorrido termina sin conflictos, devolver **VERDADERO**.

**Complejidad:** Al ser una modificación directa de BFS, su complejidad temporal es **$O(|V| + |E|)$**, que es polinómica.

---

## Ejercicio 3

### Demostrar que P es cerrada para la unión y la intersección.

Sean $L_1, L_2 \in \text{P}$. Por definición, existen dos Máquinas de Turing Deterministas (MTD) $M_1$ y $M_2$ que deciden $L_1$ y $L_2$ en tiempos acotados por los polinomios $p_1(n)$ y $p_2(n)$ respectivamente.

* **Clausura para la Unión ($L_1 \cup L_2$):** Construimos una MTD $M_{\cup}$ que recibe una entrada $x$ de longitud $n$. $M_{\cup}$ simula en primer lugar la ejecución de $M_1(x)$. Si $M_1$ acepta, $M_{\cup}$ acepta inmediatamente. Si $M_1$ rechaza, $M_{\cup}$ pasa a simular $M_2(x)$, aceptando si esta acepta y rechazando en caso contrario. El tiempo total de ejecución está acotado por $p_1(n) + p_2(n)$, que sigue siendo una función polinómica.
* **Clausura para la Intersección ($L_1 \cap L_2$):** Construimos de igual forma una MTD $M_{\cap}$. Ante una entrada $x$, ejecuta secuencialmente $M_1(x)$. Si $M_1$ rechaza, $M_{\cap}$ rechaza inmediatamente. Si $M_1$ acepta, ejecuta $M_2(x)$, devolviendo el mismo resultado que $M_2$. El tiempo máximo vuelve a ser $p_1(n) + p_2(n)$, un orden polinómico.

---

## Ejercicio 4

Siguiendo la nota del documento, evaluamos el comportamiento sustituyendo polinomios genéricos por $p(n) = n^l$ ($l > 0$).

### (a) $\{n^k : k > 0\}$

* **Izquierda:** $p(f(n)) = (n^k)^l = n^{k \cdot l}$. Como $k \cdot l > 0$, la función pertenece a la clase. **Sí es cerrada**.
* **Derecha:** $f(p(n)) = (n^l)^k = n^{l \cdot k}$. Mismo caso. **Sí es cerrada**.

### (b) $\{n \cdot k : k \ge 0\}$

* **Izquierda:** $p(f(n)) = (n \cdot k)^l = n^l \cdot k^l$. Si $l > 1$, la función resultante crece como $O(n^l)$, que supera la escala lineal de la clase. **No es cerrada**.
* **Derecha:** $f(p(n)) = n^l \cdot k$. Para cualquier $l > 1$, no pertenece a la clase. **No es cerrada**.

### (c) $\{k^n : k > 0\}$

* **Izquierda:** $p(f(n)) = (k^n)^l = k^{l \cdot n} = (k^l)^n$. Como $k^l$ es una constante, la función resultante mantiene la forma exponencial de la clase. **Sí es cerrada**.
* **Derecha:** $f(p(n)) = k^{(n^l)}$. Para $l > 1$, la función de orden $k^{n^2}$ o superior crece mucho más rápido que cualquier simple exponencial $m^n$. **No es cerrada**.

### (d) $\{2^{n^k} : k > 0\}$

* **Izquierda:** $p(f(n)) = (2^{n^k})^l = 2^{l \cdot n^k}$. Al aplicar la notación $O$, se cumple que $2^{l \cdot n^k} \le 2^{n^{k+1}}$ para $n$ suficientemente grande, cuya función base está en la clase ($k+1 > 0$). **Sí es cerrada**.
* **Derecha:** $f(p(n)) = 2^{(n^l)^k} = 2^{n^{l \cdot k}}$. Como $l \cdot k > 0$, la función pertenece a la clase. **Sí es cerrada**.

### (e) $\{\log^k(n) : k > 0\}$

* **Izquierda:** $p(f(n)) = (\log^k n)^l = \log^{k \cdot l} n \in C$. **Sí es cerrada**.
* **Derecha:** $f(p(n)) = \log^k(n^l) = (l \cdot \log n)^k = l^k \cdot \log^k n = O(\log^k n) \in C$. **Sí es cerrada**.

### (f) $\{\log(\log n)\}$

* **Izquierda:** $p(f(n)) = (\log(\log n))^l \notin C$ para $l > 1$. **No es cerrada**.
* **Derecha:** $f(p(n)) = \log(\log(n^l)) = \log(l \cdot \log n) = \log l + \log(\log n) = O(\log(\log n)) \in C$. **Sí es cerrada**.

---

## Ejercicio 5

### Demostrar que $L=\{wcw:w\in\{0,1\}^{*}\}$ está en espacio $\log(n)$.

Para diseñar un algoritmo en espacio logarítmico, contamos con una cinta de entrada de *solo lectura* y cintas de trabajo con espacio limitado a $O(\log n)$. No podemos almacenar la palabra $w$ en la memoria de trabajo porque ocuparía espacio lineal.

**Algoritmo:**

1. Recorrer la cinta de entrada con un contador en binario para localizar la posición exacta del carácter especial 'c'. Almacenamos este índice $m$ en la cinta de trabajo (ocupa $\approx \log_2 n$ bits).
2. Verificar que la longitud total del string sea exactamente $2m + 1$. Si no es así, rechazar.
3. Utilizar un segundo contador en binario, $i$, inicializado en $0$.
4. Mientras $i < m$:
* Mover el cabezal de la cinta de entrada a la posición $i$ y leer el símbolo $w[i]$.
* Mover el cabezal de entrada a la posición $m + 1 + i$ y leer el símbolo correspondiente.
* Comparar ambos símbolos. Si difieren, **rechazar**.
* Incrementar el contador $i$ en $1$.


5. Si el bucle finaliza con éxito, **aceptar**.

**Análisis de espacio:** Únicamente se han utilizado dos contadores enteros binarios ($m$ e $i$) cuyos valores máximos están acotados por el tamaño de la entrada $n$. Por tanto, el espacio de trabajo utilizado es estrictamente **$O(\log n)$**.

---

## Ejercicio 6

### Demostrar que si $L \in \text{P}$, entonces $L^{*} \in \text{P}$.

Resolvemos este problema mediante un enfoque de **programación dinámica**. Sea $x$ una palabra de entrada de longitud $n$. Queremos determinar si $x$ se puede descomponer en $x = w_1 w_2 \dots w_k$ tal que cada subpalabra $w_i \in L$.

Definimos un vector booleano $T$ de tamaño $n + 1$, donde $T[i] = \text{VERDADERO}$ si y solo si el prefijo de la palabra de longitud $i$ ($x[1 \dots i]$) pertenece a $L^*$.

* **Caso base:** $T[0] = \text{VERDADERO}$ (la palabra vacía $\epsilon$ siempre pertenece a $L^*$).
* **Paso inductivo:** Para cada $i$ desde $1$ hasta $n$:

$$T[i] = \text{VERDADERO} \iff \exists j \in \{0, \dots, i-1\} \text{ tal que } (T[j] == \text{VERDADERO} \land x[j+1 \dots i] \in L)$$



Como $L \in \text{P}$, la verificación de si la subpalabra de entrada $x[j+1 \dots i]$ pertenece a $L$ tarda un tiempo polinómico $p(n)$. El algoritmo realiza como máximo $O(n^2)$ subconsultas. La complejidad temporal total estará acotada por $O(n^2 \cdot p(n))$, que es polinómica, por tanto $L^* \in \text{P}$.

---

## Ejercicio 7

### Demostrar que si $L \in \text{NP}$, entonces $L^{*} \in \text{NP}$.

Si $L \in \text{NP}$, existe una Máquina de Turing No Determinista (MTND) $M$ que decide el lenguaje $L$ en tiempo polinómico. Diseñamos una nueva MTND $M^*$ para decidir $L^*$:

Ante una palabra de entrada $x$ de longitud $n$:

1. **Adivinar de forma no determinista** una partición de la cadena $x$ en $k$ subpalabras ($1 \le k \le n$). Esto equivale a seleccionar un conjunto de índices de corte intermedios.
2. Para cada una de las subpalabras de la partición ($w_1, w_2, \dots, w_k$), ejecutar de forma secuencial (o en paralelo no determinista) la MTND original $M$.
3. Si todas las simulaciones de las subpalabras entran en estado de aceptación, entonces $M^*$ **acepta**. En caso de que alguna subpalabra sea rechazada, esa rama del cómputo no determinista **rechaza**.

**Complejidad:** La fase de generación no determinista de los cortes toma tiempo lineal $O(n)$, y la verificación de las subpalabras toma a lo sumo $n \cdot p(n)$ pasos. Al ser la composición de procesos polinómicos, $M^*$ opera en tiempo polinómico no determinista, luego $L^* \in \text{NP}$.

---

## Ejercicio 8

### Demostrar que NP es cerrada para la unión y la intersección.

Sean $L_1, L_2 \in \text{NP}$ decididos por las MTND $M_1$ y $M_2$ en tiempo polinómico acotado por $p_1(n)$ y $p_2(n)$ respectivamente.

* **Unión ($L_1 \cup L_2$):** Diseñamos una MTND $M_{\cup}$ que, ante una entrada $x$, realiza en su primer paso una ramificación no determinista con dos opciones. La primera opción ejecuta $M_1(x)$ y la segunda ejecuta $M_2(x)$. Si al menos una de las ramas alcanza un estado de aceptación, la máquina acepta. El tiempo global del árbol de cómputo es $\max(p_1(n), p_2(n))$, que es polinómico.
* **Intersección ($L_1 \cap L_2$):** Diseñamos una MTND $M_{\cap}$ que, ante una entrada $x$, ejecuta secuencialmente la simulación de $M_1(x)$. Si $M_1$ alcanza una configuración de aceptación, la máquina no se detiene, sino que toma esa configuración y procede a simular de forma no determinista $M_2(x)$. Si esta segunda fase también encuentra una ruta de aceptación, la máquina $M_{\cap}$ acepta. La profundidad del cómputo está acotada por $p_1(n) + p_2(n)$, manteniendo la condición polinómica.

---

## Ejercicio 9

### Demostrar que si $\text{NP} \neq \text{coNP}$ entonces $\text{P} \neq \text{NP}$.

Demostramos esta propiedad utilizando el razonamiento **contrarrecíproco**: probaremos que si $\text{P} = \text{NP}$, entonces obligatoriamente $\text{NP} = \text{coNP}$.

Por la propia naturaleza de las Máquinas de Turing Deterministas, la clase $\text{P}$ es cerrada bajo complementación ($\text{P} = \text{coP}$), dado que para calcular el complemento de un lenguaje en $\text{P}$ basta con intercambiar los estados de aceptación y rechazo de la MTD que lo resuelve.

Si asumimos como premisa que $\text{P} = \text{NP}$, podemos aplicar el operador de complemento a ambos lados de la igualdad, obteniendo que $\text{coP} = \text{coNP}$. Combinando todas las equivalencias:

$$\text{NP} = \text{P} = \text{coP} = \text{coNP} \implies \text{NP} = \text{coNP}$$

Por tanto, si la comunidad matemática demuestra que $\text{NP} \neq \text{coNP}$, se deduce de forma directa y rigurosa que $\text{P} \neq \text{NP}$.

---

## Ejercicio 10

### Demostrar que determinar si una entrada de paréntesis está correctamente emparejada y anidada está en L.

Para verificar el anidamiento correcto sin recurrir a una estructura de pila en memoria (que requeriría espacio lineal), podemos emplear un único contador entero dinámico.

**Algoritmo:**

1. Inicializar un contador binario $c = 0$ en la cinta de trabajo.
2. Leer la cadena de entrada de izquierda a derecha, símbolo a símbolo:
* Si el símbolo actual es `(`, incrementar el contador: $c = c + 1$.
* Si el símbolo actual es `)`, decrementar el contador: $c = c - 1$.
* Si en algún punto intermedio del recorrido se cumple que $c < 0$, **rechazar inmediatamente** (indica un exceso de paréntesis de cierre mal balanceados).


3. Al alcanzar el final de la cinta de entrada, comprobar el valor de $c$:
* Si $c == 0$, **aceptar**.
* Si $c > 0$, **rechazar** (quedaron paréntesis abiertos sin cerrar).



**Espacio:** El valor máximo que puede alcanzar el contador $c$ es el tamaño de la entrada $n$. Representar el valor entero $n$ en binario requiere exactamente $\lceil \log_2(n+1) \rceil$ casillas en la cinta de memoria de trabajo, lo que es del orden de **$O(\log n)$**. Por tanto, el problema pertenece a $\text{L}$.

---

## Ejercicio 11

### Caso con dos tipos de paréntesis `()` y `[]`.

* **Demostración de que está en L:** Si disponemos de la capacidad de mover el cabezal de la cinta de entrada en cualquier dirección (hacia adelante y hacia atrás), podemos resolver el problema en espacio logarítmico combinando dos fases:
1. Verificar que los paréntesis `()` y los corchetes `[]` están balanceados de manera independiente numéricamente utilizando dos contadores logarítmicos (tal como se implementó en el Ejercicio 10).
2. Para comprobar que el anidamiento es correcto y no existen cruces ilegales del tipo `([)]`, aplicamos el siguiente análisis geométrico: para cada símbolo de cierre (por ejemplo, un `]` en la posición $i$), hacemos un recorrido hacia atrás (a la izquierda) buscando su apertura correspondiente. Para ello, usamos un contador que se incrementa con cierres del mismo tipo y se decrementa con aperturas. Cuando el contador vuelve a 0, localizamos su apertura correspondiente en el índice $j$. En ese momento, validamos que la subcadena interna contenida entre $j$ e $i$ tenga un balance de paréntesis correcto.
Como solo almacenamos los índices de las posiciones de los cabezales y pequeños contadores locales de valor inferior a $n$, el espacio consumido en las cintas es estrictamente **$O(\log n)$**, lo que prueba que el problema está en $\text{L}$.


* **Demostración de que requiere $O(n)$ de memoria si no se puede volver hacia atrás:** Si se restringe la lectura a un único recorrido secuencial de izquierda a derecha sin retroceso (*algoritmo online*), la máquina se ve obligada a recordar el orden exacto de los tipos de paréntesis abiertos que todavía no han sido cerrados para verificar la validez del cierre inmediato (estructura LIFO).
Consideremos una entrada que comienza con una secuencia de longitud $m = n/2$ formada exclusivamente por símbolos de apertura arbitrarios (elección libre entre `(` y `[`). Existen exactamente $2^m$ posibles combinaciones distintas de apertura. Para que la máquina responda correctamente ante cualquier secuencia posterior de cierre, debe ser capaz de almacenar un estado interno único por cada una de estas combinaciones. Por la teoría de la información, para diferenciar de manera unívoca entre $2^m$ estados posibles de almacenamiento, la memoria interna de trabajo debe tener una capacidad mínima de:

$$\log_2(2^m) = m = \frac{n}{2} = O(n) \text{ bits}$$



Por consiguiente, sin retroceso de cabezal, el problema requiere espacio lineal **$O(n)$**.

---

## Ejercicio 12

### Demostrar que el problema del palíndromo requiere $O(n)$ de memoria si no puede volver hacia atrás.

**Prueba:** Supongamos una Máquina de Turing restringida a leer la entrada de izquierda a derecha sin posibilidad de retroceder su cabezal principal. Consideremos el conjunto de todas las cadenas binarias posibles de longitud $m = n/2$ que forman la primera mitad del palíndromo. Existen $2^m$ cadenas distintas.

Si la máquina dispusiera de menos de $m$ bits de memoria de trabajo, por el principio de las casillas, existirían al menos dos cadenas iniciales distintas, $w_1 \neq w_2$, que llevarían a la máquina exactamente al mismo estado de memoria interna tras leer los primeros $m$ caracteres.

Si la entrada continuase con el reverso exacto de la primera cadena ($w_1^R$), el string total sería $w_1 w_1^R$, el cual es un palíndromo válido y la máquina debería aceptarlo. Sin embargo, al recibir la entrada $w_2 w_1^R$, como el estado interno de la memoria tras los primeros $m$ pasos es idéntico al caso anterior, la máquina procesaría la segunda mitad de la misma manera y también la **aceptaría**. Esto representa un error algorítmico, ya que $w_2 w_1^R$ no es un palíndromo si $w_1 \neq w_2$.

Para evitar este solapamiento de configuraciones, la máquina debe registrar de forma unívoca cada uno de los $2^m$ estados informacionales posibles. Por tanto, la memoria de trabajo requiere un número de bits de orden:


$$\log_2(2^m) = m = \frac{n}{2} = O(n)$$

---

## Ejercicio 13

### Demostrar que $\text{NP} \neq \text{ESPACIO}(n)$.

Siguiendo la sugerencia del enunciado, analizamos el comportamiento de ambas clases respecto al operador de reducción en espacio logarítmico ($\text{L}$-reducciones, denotado como $\propto_{\text{L}}$):

1. **La clase NP es cerrada bajo $\text{L}$-reducciones:** Sean dos problemas tales que $P_1 \propto_{\text{L}} P_2$ y $P_2 \in \text{NP}$. Por definición de reducción en espacio logarítmico, existe una MTD que transforma cualquier instancia $x$ de $P_1$ en una instancia $y$ de $P_2$ utilizando un espacio de trabajo acotado por $O(\log |x|)$. Dado que el espacio es logarítmico, la longitud de la salida estará acotada polinómicamente respecto a la entrada ($|y| = O(|x|^c)$). Como $P_2 \in \text{NP}$, existe una MTND que decide $P_2$ en tiempo polinómico respecto a la longitud de su entrada $y$, lo cual se traduce en un tiempo polinómico respecto a la entrada original $x$. Componiendo ambos procesos mediante la técnica de "recálculo de bits de salida bajo demanda en espacio logarítmico" (evitando escribir la cadena intermedia $y$ completa en una cinta de trabajo ), obtenemos que el problema completo se puede decidir en tiempo no determinista polinómico. Por tanto, $P_1 \in \text{NP}$. **NP es cerrada bajo $\text{L}$-reducciones**.


2. **La clase $\text{ESPACIO}(n)$ NO es cerrada bajo $\text{L}$-reducciones:** Por el **Teorema de la Jerarquía en Espacio**, sabemos de forma rigurosa que un incremento en la cota de espacio permite decidir lenguajes estrictamente más complejos; por ejemplo, $\text{ESPACIO}(n) \subsetneq \text{ESPACIO}(n^2)$. Mediante una reducción en espacio logarítmico, es posible mapear (comprimir) instancias de un problema de una clase espacial superior en instancias de tamaño lineal de un problema base. Si la clase $\text{ESPACIO}(n)$ fuese cerrada bajo este tipo de reducciones, provocaría un colapso en cadena de la jerarquía espacial, permitiendo resolver problemas de orden cuadrático o superior en espacio estrictamente lineal, lo cual contradice el teorema fundamental de la jerarquía.


3. **Conclusión:** Al haber demostrado que la clase de complejidad $\text{NP}$ posee la propiedad estructural de clausura ante reducciones en espacio logarítmico y la clase $\text{ESPACIO}(n)$ carece de ella, concluimos de forma matemática que ambas clases representan conjuntos de lenguajes diferentes, luego **$\text{NP} \neq \text{ESPACIO}(n)$**.

# Relación 5


## Ejercicio 2: Máquinas de Turing No Deterministas Fuertes y $\text{NP} \cap \text{coNP}$

Queremos demostrar que un lenguaje $L$ es decidido por una Máquina de Turing No Determinista Fuerte (MTND-F) en tiempo polinómico si y solo si $L \in \text{NP} \cap \text{coNP}$.

### Implicación directa ($\Rightarrow$)

Supongamos que $L$ es decidido por una MTND-F polinómica $M$.

*  **Probar que $L \in \text{NP}$:** Por definición de la máquina, si $x \in L$, existe al menos un camino de cómputo que termina en 'Si'. Si $x \notin L$, ningún camino termina en 'Si' (todos terminan en 'No' o 'Duda'). Si ignoramos las salidas 'No' y tratamos 'Duda' como un estado de no-aceptación estándar, $M$ se comporta exactamente como una MTND polinómica clásica que acepta $L$. Por tanto, $L \in \text{NP}$.


* **Probar que $L \in \text{coNP}$ (es decir, $\bar{L} \in \text{NP}$):** Construimos una nueva máquina $M'$ a partir de $M$ modificando únicamente los estados finales: intercambiamos las salidas 'Si' por 'No', y las salidas 'No' por 'Si', manteniendo 'Duda' intacto. Si $x \in \bar{L}$ (es decir, $x \notin L$), la máquina original $M$ garantizaba al menos un camino hacia 'No', el cual ahora será un camino hacia 'Si' en $M'$. Si $x \in L$, ningún camino en $M'$ llegará a 'Si'. Así, $M'$ es una MTND polinómica que acepta $\bar{L}$ , lo que implica que $\bar{L} \in \text{NP} \implies L \in \text{coNP}$.



Al cumplirse ambas condiciones, $L \in \text{NP} \cap \text{coNP}$.

### Implicación inversa ($\Leftarrow$)

Supongamos ahora que $L \in \text{NP} \cap \text{coNP}$.

* Como $L \in \text{NP}$, existe una MTND polinómica $M_1$ que acepta $L$.


* Como $L \in \text{coNP} \implies \bar{L} \in \text{NP}$, existe otra MTND polinómica $M_2$ que acepta $\bar{L}$.



Construimos una MTND Fuerte $M$ que, ante una entrada $x$, comienza con una **bifurcación no determinista** de dos ramas principales:

1. La primera rama simula el cómputo de $M_1(x)$. Si la simulación de $M_1$ acepta, nuestra máquina $M$ finaliza devolviendo **'Si'**. Si la simulación termina sin aceptar, devuelve **'Duda'**.


2. La segunda rama simula el cómputo de $M_2(x)$. Si la simulación de $M_2$ acepta (lo que significa que $x \in \bar{L}$), $M$ finaliza devolviendo **'No'**. Si no acepta, devuelve **'Duda'**.



**Verificación de las condiciones:**

* Si $x \in L$, $M_1(x)$ tiene al menos un camino de aceptación (que dará 'Si') , y $M_2(x)$ no tiene ninguno (todos darán 'Duda'). Todos los caminos terminan en 'Si' o 'Duda' con al menos un 'Si'.


* Si $x \notin L$, $M_1(x)$ no tiene caminos de aceptación (todos darán 'Duda') , y $M_2(x)$ tiene al menos uno (que dará 'No'). Todos los caminos terminan en 'No' o 'Duda' con al menos un 'No'.



El tiempo de ejecución sigue estando acotado polinómicamente. Queda demostrado.

---

## Ejercicio 3: Certificado de Pratt para $p = 13$

El teorema de Pratt establece que un número $p > 1$ es primo si y solo si existe un testigo $r$ ($1 < r < p$) tal que:

1. $r^{p-1} \equiv 1 \pmod p$ 


2. $r^{\frac{p-1}{q}} \not\equiv 1 \pmod p$ para todos los divisores primos $q$ de $p-1$.



### Paso 1: Aplicación a $p = 13$

* Los componentes son $p - 1 = 12$. Los divisores primos de 12 son $q_1 = 2$ y $q_2 = 3$.


* Elegimos como testigo $r = 2$.


* **Condición 1:** $2^{12} = 4096$. Calculando el módulo: $4096 \pmod{13} = 1$. Se cumple.


* **Condición 2 (para $q=2$):** $\frac{12}{2} = 6 \implies 2^6 = 64$. Calculando el módulo: $64 \equiv 12 \not\equiv 1 \pmod{13}$. Se cumple.


* **Condición 2 (para $q=3$):** $\frac{12}{3} = 4 \implies 2^4 = 16$. Calculando el módulo: $16 \equiv 3 \not\equiv 1 \pmod{13}$. Se cumple.



### Paso 2: Certificación recursiva de los divisores primos

Siguiendo la estructura del certificado de Pratt (pág. 33-34 del Tema 4), el divisor $2$ es un caso base que no requiere desglose , pero el divisor $3$ debe ser certificado a su vez de forma recursiva.

* Para $p = 3$, tenemos $p - 1 = 2$, cuyo único divisor primo es $q = 2$.
* Elegimos el testigo $r = 2$.
* **Condición 1:** $2^{3-1} = 2^2 = 4 \equiv 1 \pmod 3$. Se cumple.


* **Condición 2:** $2^{\frac{2}{2}} = 2^1 = 2 \not\equiv 1 \pmod 3$. Se cumple.



### Formato Final del Certificado Estructural

Siguiendo la sintaxis formal explicada por el profesor Serafín Moral:

$$\text{Cert}(13) = \Big( \big(13 : 2 \ (2, 3)\big), \ \big(3 : 2 \ (2)\big) \Big)$$

---

## Ejercicio 4: Demostración de que la Exponenciación Modular está en P

Deseamos probar que el problema de determinar si $a^b \equiv c \pmod p$ es resoluble en tiempo polinómico respecto a la longitud de la entrada $n$.

Consideremos que $n$ representa la cantidad total de bits necesarios para almacenar los cuatro números en memoria. El valor del exponente $b$ puede ser de un orden de magnitud de hasta $2^n$. Por tanto, un bucle de multiplicaciones sucesivas de tamaño $b$ tardaría un tiempo exponencial $O(2^n)$.

Para resolverlo en tiempo polinómico aplicamos el **Algoritmo de Exponenciación Binaria** (también conocido como *Square-and-Multiply*):

1. Expresar el exponente $b$ en su representación binaria: $b = (b_k b_{k-1} \dots b_0)_2$. El número de bits del exponente está estrictamente acotado por la longitud de la entrada: $k \le n$.


2. Inicializar una variable acumuladora $R = 1$ y otra variable para las potencias de la base $A = a \pmod p$.
3. Para cada bit $b_i$ desde $0$ hasta $k$:
* Si $b_i == 1$, hacer $R = (R \cdot A) \pmod p$.
* Hacer $A = (A \cdot A) \pmod p$.


4. Finalmente, comprobar si $R == c$.

### Análisis de Complejidad Temporal

* El bucle principal se ejecuta exactamente $k$ veces, por lo que realiza un máximo de **$n$ iteraciones**.


* En cada iteración se efectúan multiplicaciones y operaciones de módulo con números cuyo tamaño máximo de almacenamiento está acotado por $n$ bits. El coste de multiplicar y aplicar el módulo a dos enteros de $n$ bits mediante métodos estándar es de orden **$O(n^2)$**.


* La complejidad total del algoritmo es $O(n \cdot n^2) = \mathbf{O(n^3)}$, lo cual constituye una cota estrictamente polinómica. Por tanto, el problema está en P.



---

## Ejercicio 5: El Problema de la Factorización está en $\text{NP} \cap \text{coNP}$

El problema consiste en determinar si un número $x$ tiene un divisor $k$ en el rango abierto $1 < k < y$.

* **Demostración de que está en NP:** El certificado es simplemente el valor del propio divisor $k$. El verificador polinómico realiza únicamente dos comprobaciones:


1. Validar que $1 < k < y$.
2. Efectuar la división entera y comprobar que el resto de la operación $x \pmod k$ sea exactamente $0$.
Dado que una división de números de tamaño polinómico se computa de forma eficiente en tiempo $O(n^2)$ , el problema se puede verificar de forma polinómica, luego está en NP.




* **Demostración de que está en coNP:** Para probar que pertenece a coNP, debemos demostrar que el problema complementario ("$x$ **NO** tiene ningún divisor $k$ en el rango $1 < k < y$") se encuentra en la clase NP.


* **Certificado de la instancia NO:** El certificado consiste en proporcionar la **descomposición en factores primos completa** de $x$, expresada como $x = p_1^{e_1} p_2^{e_2} \dots p_m^{e_m}$ , adjuntando además el correspondiente **certificado de Pratt** para cada uno de los factores primos $p_i$ indicados.


* **Algoritmo Verificador de co-Factorización:**
1. Multiplicar todos los factores de la lista aportada y comprobar que el producto resultante sea exactamente igual a $x$.


2. Validar la primalidad de cada factor $p_i$ utilizando sus respectivos certificados de Pratt adjuntos (lo cual toma tiempo polinómico).


3. Revisar de forma directa que todos los factores primos de la lista cumplan la condición de ser **mayores o iguales que $y$** (es decir, $p_i \ge y$). Si todos los divisores primos de un número son $\ge y$, es matemáticamente imposible construir un divisor compuesto que sea menor que $y$ y mayor que 1.
Al ser todas estas comprobaciones polinómicas, el problema complementario está en NP $\implies$ el problema original pertenece a coNP.







Como consecuencia directa de ambos apartados, el problema se encuadra en $\text{NP} \cap \text{coNP}$.

---

## Ejercicio 6: Correspondencia entre $\text{NP} \cap \text{coNP}$ y la Clase TFNP

La clase **TFNP** (*Total Functional NP*) representa el conjunto de los problemas de búsqueda de funciones dentro de FNP para los cuales se garantiza matemáticamente que **siempre existe al menos una solución válida** para cualquier valor de entrada posible.

Dado un lenguaje arbitrario $L \in \text{NP} \cap \text{coNP}$, por las caracterizaciones de los problemas de verificación sabemos que:

* Si $x \in L$, existe un certificado polinómico $c_1$ que satisface a un verificador $V_1(x, c_1) = 1$.


* Si $x \notin L$, existe un certificado polinómico $c_2$ que satisface a un verificador de su complemento $V_2(x, c_2) = 1$.



Por tanto, cada lenguaje en esta intersección sugiere el siguiente problema de búsqueda de funciones en TFNP:

> **Problema sugerido:** "Dada una cadena de entrada $x$, encontrar un objeto $c$ que cumpla alguna de estas dos condiciones verificables de forma polinómica: o bien $c$ es un certificado válido de que $x \in L$ (haciendo $V_1(x, c) = 1$), o bien $c$ es un certificado válido de que $x \notin L$ (haciendo $V_2(x, c) = 1$)."

### ¿Por qué pertenece a TFNP?

1. **Es un problema total:** Debido a que por la ley del bando excluido una cadena de entrada necesariamente se cumple que $x \in L$ o bien que $x \notin L$, la existencia de la solución (ya sea el testigo $c_1$ o el testigo $c_2$) está **absolutamente garantizada** para todo elemento $x$. No existen instancias con respuesta vacía ($\epsilon$).


2. **Es verificable en tiempo polinómico:** Un verificador determinista puede tomar la solución $c$ suministrada y evaluar los algoritmos $V_1$ y $V_2$ eficientemente para comprobar su validez.



---

## Ejercicio 7: Demostración de que FSAT es FNP-completo

Para demostrar la FNP-completitud de FSAT (*la versión de búsqueda de soluciones de SAT*), debemos validar los dos pasos de la teoría de funciones de complejidad:

### 1. Pertenencia a la clase: $\text{FSAT} \in \text{FNP}$

El problema recibe como datos un conjunto de cláusulas $C$. Su relación asociada es $R(C, A) = 1 \iff A$ es una asignación de valores de verdad que satisface la fórmula booleana $C$. La longitud en bits de la asignación $A$ está estrictamente acotada de forma lineal por el número de variables de $C$, y comprobar si la asignación satisface las cláusulas toma tiempo polinómico lineal. Por tanto, FSAT pertenece a FNP.

### 2. Dificultad: Cualquier problema $\Pi \in \text{FNP}$ se reduce a FSAT

Sea $\Pi$ un problema genérico de funciones de la clase FNP, definido por una relación polinómica $R_{\Pi}(x, y)$. Por la propia definición de la clase, el problema de decisión subyacente ("¿Existe un objeto $y$ tal que $R_{\Pi}(x, y) = 1$?") pertenece por derecho propio a la clase NP.

Por el **Teorema de Cook-Levin**, sabemos que cualquier problema de decisión en la clase NP se puede reducir en espacio logarítmico al problema de decisión SAT. Existe una transformación polinómica $f(x)$ que genera un conjunto de cláusulas $C = f(x)$ que reproduce fielmente el comportamiento de la Máquina de Turing No Determinista que evalúa la relación.

La reducción estándar de Cook-Levin tiene la propiedad fundamental de ser constructiva respecto a las variables : dentro de las variables proposicionales del diseño de componentes de la reducción, un subconjunto específico de variables de la fórmula —denotémoslas como el grupo de variables de opciones o configuración inicial— codifica de forma directa, bit a bit, los elementos correspondientes a la cadena solución $y$ que satisface la relación del problema original.

Definimos las dos funciones de nuestra reducción en FNP (siguiendo el esquema formal de la pág. 38 del Tema 4):

1. **Transformador de entrada ($R$):** Toma la instancia $x$ de nuestro problema original y aplica la reducción de Cook-Levin para generar la fórmula de cláusulas de FSAT: $C = R(x)$.


2. **Transformador de soluciones ($S$):** Es un algoritmo que toma la asignación de variables de verdad $A$ que satisface a la fórmula calculada $C$ y, leyendo de forma directa las posiciones asignadas a las variables que representaban las opciones de la máquina, reconstruye y escribe el string solución $y = S(A, x)$.



Dado que ambas funciones de transformación operan eficientemente en espacio logarítmico, queda demostrado que FSAT es FNP-completo.

---

## Ejercicio 8: (a) El Problema de los Spines con $J_{ij} \ge 0$ está en P

Dada la función de energía del sistema sobre un grafo $G = (V, E)$:


$$R(s) = -\sum_{(i,j)\in E} J_{ij} s_i s_j$$

Donde cada nodo tiene asignado un spin $s_i \in \{-1, +1\}$. Analicemos algebraicamente el término multiplicativo de la interacción para cada arista del grafo:

* Si los dos extremos conectados tienen asignado el mismo signo ($s_i = s_j$), entonces el producto es par y positivo: $s_i s_j = 1$.
* Si los extremos tienen signos opuestos ($s_i \neq s_j$), entonces el producto es negativo: $s_i s_j = -1$.

Podemos reescribir analíticamente el sumatorio de la energía total descomponiéndolo en estos dos conjuntos de aristas excluyentes:


$$R(s) = -\left( \sum_{s_i = s_j} J_{ij} - \sum_{s_i \neq s_j} J_{ij} \right)$$

Definamos $W = \sum_{(i,j)\in E} J_{ij}$ como la constante fija que representa la suma total de los pesos de todas las aristas del grafo original. Es evidente que la suma de las interacciones de los nodos con igual signo se puede calcular restando del total las aristas de signo opuesto: $\sum_{s_i = s_j} J_{ij} = W - \sum_{s_i \neq s_j} J_{ij}$. Sustituyendo este término en nuestra ecuación de energía:


$$R(s) = -\left( W - \sum_{s_i \neq s_j} J_{ij} - \sum_{s_i \neq s_j} J_{ij} \right) = -W + 2 \sum_{s_i \neq s_j} J_{ij}$$

Queremos determinar si existe una configuración de spines tal que $R(s) \le K$. Despejando el sumatorio de nuestra equivalencia matemática obtenemos:


$$-W + 2 \sum_{s_i \neq s_j} J_{ij} \le K \iff \sum_{s_i \neq s_j} J_{ij} \le \frac{K + W}{2}$$

### Reducción al Problema del Corte Mínimo

El término $\sum_{s_i \neq s_j} J_{ij}$ representa exactamente la definición matemática del **peso de un corte** en un grafo; es decir, la suma de los valores de las aristas que conectan el conjunto de vértices de la partición asignada al bando $+1$ con los vértices de la partición asignada al bando $-1$.

Como la hipótesis del enunciado nos garantiza estrictamente que **$J_{ij} \ge 0$ para todas las aristas del grafo**, el problema se reduce de forma directa a encontrar el **Corte Mínimo Global** (*Global Minimum Cut*) de un grafo con capacidades no negativas.

Este problema clásico se resuelve de forma exacta y eficiente en tiempo polinómico utilizando algoritmos estándar de flujos sobre redes (como el algoritmo de Edmonds-Karp o el algoritmo de Ford-Fulkerson por caminos cortos estudiado en el Tema 3), que operan en un coste polinómico de $O(|V| \cdot |E|^2)$.

Por tanto, al poder calcular el valor mínimo absoluto de la energía en tiempo polinómico y evaluar si es menor o igual que la cota solicitada, **el problema está en P**.

