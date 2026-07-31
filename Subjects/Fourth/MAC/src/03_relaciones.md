# Relaciones de problemas

Ejercicios resueltos de las relaciones de la asignatura. Cada apartado enuncia el
problema y desarrolla la demostración completa.

## Relación 1

### Ejercicio 1

##### (a) Palabras sobre el alfabeto {0,1} con el mismo número de ceros que de unos

**Base teórica:** Este es un lenguaje incontextual (libre de contexto), pero que una MT puede decidir fácilmente utilizando una estrategia de emparejamiento cruzado ("zig-zag"), demostrando que la MT no está limitada por el orden de aparición de los símbolos gracias a su cinta de acceso bidireccional.

**Diseño detallado (Algoritmo sin ambigüedad):**
1. **Estado inicial (q0):** El cabezal lee el primer símbolo no marcado.
    * Si es **0**, lo marca con **X**, se mueve a la derecha (R) y pasa a un estado **q1** (buscando un 1).
    * Si es **1**, lo marca con **Y**, se mueve a la derecha (R) y pasa a un estado **q2** (buscando un 0).
    * Si es un blanco **#** o si todos los símbolos restantes son marcas (**X** o **Y**), pasa al estado de aceptación **q_acc** y se detiene.
2. **Estado de búsqueda (q1 - busca un 1):**
    * Lee **0**, **X** o **Y**: avanza a la derecha (R).
    * Lee **1**: lo marca con **Y**, cambia de dirección a la izquierda (L) y pasa al estado **q_rewind**.
3. **Estado de búsqueda (q2 - busca un 0):**
    * Lee **1**, **X** o **Y**: avanza a la derecha (R).
    * Lee **0**: lo marca con **X**, cambia de dirección a la izquierda (L) y pasa al estado **q_rewind**.
4. **Estado de rebobinado (q_rewind):**
    * Se mueve hacia la izquierda (L) saltando cualquier símbolo (**0**, **1**, **X**, **Y**) hasta encontrar un blanco **#**.
    * Al encontrar el blanco **#**, da un paso a la derecha (R) y vuelve al estado **q0** para iniciar el siguiente ciclo.
5. **Rechazo implícito:** Si en **q1** o **q2** se encuentra un blanco **#** antes de hallar la pareja correspondiente, la máquina no tiene transición definida y se detiene rechazando la palabra.

---

##### (b) $L = \{a^n b^n c^n \mid n \ge 1\}$

**Base teórica:** Este es el ejemplo canónico de un lenguaje sensible al contexto (no incontextual). Las gramáticas libres de contexto no pueden generar este lenguaje (demostrable vía el Lema del Bombeo), pero una MT lo decide emparejando tríos de símbolos.

**Diseño detallado (Algoritmo sin ambigüedad):**
1. **Estado inicial (q0):**
    * Lee **a**, la sustituye por **X**, se mueve a la derecha y pasa a **q1**.
    * Si lee **Y** (lo que indicaría que ya no quedan **a**'s), pasa a un estado de verificación **q_verify**.
2. **Estado q1 (buscar la b):**
    * Salta las **a** y las **Y** moviéndose a la derecha.
    * Al leer la primera **b**, la sustituye por **Y**, se mueve a la derecha y pasa a **q2**.
3. **Estado q2 (buscar la c):**
    * Salta las **b** y las **Z** moviéndose a la derecha.
    * Al leer la primera **c**, la sustituye por **Z**, se mueve a la izquierda y pasa al estado de rebobinado **q3**.
4. **Estado q3 (rebobinar):**
    * Se mueve a la izquierda saltando **a**, **b**, **Y**, **Z** hasta encontrar la última **X** escrita.
    * Da un paso a la derecha y vuelve a **q0**.
5. **Estado q_verify (comprobar fin de cadena):**
    * Se mueve a la derecha saltando únicamente marcas **Y** y **Z**.
    * Si encuentra un blanco **#**, la cadena es válida y transita al estado de aceptación **q_acc**. Si encuentra alguna **a**, **b** o **c** suelta, rechaza.

---

##### (c) $\{ww^{-1} \mid w \in \{0,1\}^*\}$

**Base teórica:** Este lenguaje describe palíndromos de longitud par. Aquí la notación formal $$w^{-1}$$ representa la palabra invertida de la cadena binaria $$w$$. Utilizaremos el no determinismo implícito o un diseño determinista que recuerda símbolos utilizando el propio estado finito de la máquina.

**Diseño detallado (Algoritmo determinista sin ambigüedad):**
1. **Memorizar y marcar (q0):**
    * Si lee **0**, lo marca con **X**, avanza a la derecha y entra en **q_find_0** (recordando que debe emparejar un 0).
    * Si lee **1**, lo marca con **X**, avanza a la derecha y entra en **q_find_1** (recordando que debe emparejar un 1).
    * Si lee **X** o un blanco **#**, significa que la cadena se ha analizado completamente con éxito y pasa a **q_acc**.
2. **Ir al final no procesado (q_find_0 / q_find_1):**
    * Salta los **0** y **1** hacia la derecha hasta encontrar un blanco **#** o una marca **X**.
    * Retrocede un paso a la izquierda y entra en un estado de verificación respectivo **q_check_0** o **q_check_1**.
3. **Verificar el extremo (q_check_0 / q_check_1):**
    * En **q_check_0**: Si el símbolo es **0**, lo marca con **X**, se mueve a la izquierda y pasa a **q_rewind**. Si no es **0**, rechaza.
    * En **q_check_1**: Si el símbolo es **1**, lo marca con **X**, se mueve a la izquierda y pasa a **q_rewind**. Si no es **1**, rechaza.
4. **Rebobinar (q_rewind):**
    * Se mueve a la izquierda saltando **0** y **1** hasta encontrar la última marca **X** de la izquierda.
    * Da un paso a la derecha y vuelve a **q0**.

---

##### (d) $\{wcw \mid w \in \{0,1\}^*\}$

**Base teórica:** Este es el lenguaje copia, un lenguaje que no es libre de contexto. El diseño de esta MT ilustra la técnica de "Múltiples pistas" o marcado de símbolos, donde el alfabeto de trabajo es un producto cartesiano. El documento de referencia proporciona el modelo exacto detallado para este caso.

**Diseño detallado (extraído de la demostración algorítmica formal):**
La MT asume un alfabeto de entrada **A = {0, 1, c}**. La idea fundamental radica en recordar el primer símbolo leído mediante el estado y verificar que coincida con el primer símbolo no marcado después del separador **c**.
1. **Marcar y recordar (q1):** Leemos el primer símbolo **a** (donde **a** puede ser 0 o 1), lo recordamos en el estado interno pasando a **[q2, a]**, lo marcamos como leído (escribiendo el equivalente a **[a, *]** en una pista virtual) y nos movemos a la derecha.
2. **Buscar el centro (q2):** En el estado **[q2, a]**, nos movemos hacia la derecha saltando **0**s y **1**s hasta encontrar el separador **c**. Al encontrarlo, cambiamos al estado **[q3, a]**.
3. **Buscar y comparar destino (q3):** En **[q3, a]**, saltamos todo lo que ya esté marcado a la derecha de **c**. Cuando encontremos el primer símbolo no marcado, verificamos que sea exactamente el símbolo **a** que la máquina recordó en el paso 1. Lo marcamos y pasamos al estado de retorno **[q4, #]**.
4. **Retorno (q4 a q6):** Nos movemos hacia la izquierda recorriendo todo hasta llegar a **c** (estado **q5**) y seguimos a la izquierda saltando los símbolos no marcados de la primera mitad hasta chocar con el símbolo que marcamos en el paso 1. Al encontrarlo, damos un paso a la derecha y volvemos a iniciar el ciclo en **q1**.
5. **Aceptación (q7 a q9):** Cuando en la primera fase encontramos directamente la **c**, verificamos que todos los símbolos a la derecha de la **c** también estén marcados. Si es así, la máquina acepta.

Te animo a trazar estos pasos con cadenas de prueba cortas (por ejemplo, **0011** para el primer problema, o **0c0** para el último) simulando las transiciones estado por estado. Esto consolidará definitivamente tu comprensión de la lógica interna de estos autómatas.

#### Errores comunes en el apartado b

##### 1. Fundamento Teórico: Ampliación del Alfabeto (Marcado de Símbolos)

En la teoría de autómatas, cuando necesitamos contabilizar o "tachar" un símbolo sin perder el espacio físico que ocupa en la cinta (para no destruir la contigüidad de los datos), recurrimos a una técnica conocida en textos clásicos (como Hopcroft y Ullman) como **ampliación del alfabeto de cinta** o el uso de **pistas múltiples**. 

En lugar de borrar el símbolo con un blanco general (`-` o `#`), lo reemplazamos por una versión "marcada" de sí mismo. Por ejemplo, si en tu Fase 1 conviertes el alfabeto original en $X, Y, Z$, en tu Fase 2 puedes "tachar" usando letras minúsculas: $x, y, z$. 

De este modo, el cabezal puede "caminar" sobre los símbolos tachados ($x, y, z$) sabiendo que ya fueron procesados, pero sin confundirlos jamás con el límite exterior de la cinta (`-`).

##### 2. (Algunos errores) La Solución Detallada (Corrección de Fase 2)

Vamos a reescribir la Fase 2 de tu algoritmo utilizando $x, y, z$ como símbolos de tachado. Fíjate bien en cómo el estado de rebobinado (`q-rewind`) ahora funciona perfectamente.

* **Paso A: Iniciar el tachado en `q-verify`**
    El cabezal está sobre la primera $X$ disponible. La se tacharon (escribiendo $x$) y vamos a buscar la $Y$.
    `q-verify X x r qeliminaY`

* **Paso B: Buscar y tachar la $Y$ en `qeliminaY`**
    Hay que saltar las $X$ aún sin procesar y las $y$ ya tachadas en ciclos anteriores.
    `qeliminaY X X r qeliminaY` (salta las $X$ restantes)
    `qeliminaY y y r qeliminaY` (salta las $Y$ ya tachadas)
    `qeliminaY Y y r qeliminaZ` (encuentra la primera $Y$ válida, la tacha con $y$ y avanza)

* **Paso C: Buscar y tachar la $Z$ en `qeliminaZ`**
    Igual que antes, saltamos lo necesario. **Nota crucial:** Una vez que tachas la $Z$, el movimiento inmediato debe ser a la izquierda (`l`), ¡no a la derecha!, para empezar a volver.
    `qeliminaZ Y Y r qeliminaZ` (salta las $Y$ restantes)
    `qeliminaZ z z r qeliminaZ` (salta las $Z$ ya tachadas)
    `qeliminaZ Z z l q-rewind` (encuentra la $Z$, la tacha con $z$ y **gira a la izquierda**)

* **Paso D: El Rebobinado seguro en `q-rewind`**
    Ahora retrocedemos saltando todo (marcados y no marcados) hasta chocar con el símbolo $x$ que acabamos de marcar en el Paso A.
    `q-rewind i i l q-rewind` (con $i \in \{X, Y, Z, y, z\}$)
    `q-rewind x x r q-verify` (Al chocar con la $x$, damos un paso a la derecha. ¡El cabezal queda exactamente sobre la siguiente $X$ lista para el próximo ciclo!)

##### 3. La Condición de Parada (Aceptación)

Con este diseño, ¿qué ocurre cuando ya no quedan más $X$ que tachar? 
El cabezal, estando en `q-verify`, leerá una $y$ (la primera $Y$ que se tachó). Esto indica que se han agotado las $X$. Para que la MT acepte formalmente, hay que verificar que **solo** quedan símbolos tachados ($y$, $z$) hasta llegar al blanco (`-`), lo que demuestra que no sobraron letras.

Añadimos estas transiciones finales:
`q-verify y y r q-check-end`
`q-check-end y y r q-check-end` (salta todas las $y$)
`q-check-end z z r q-check-end` (salta todas las $z$)
`q-check-end - - * halt-accept` (Si llega al final y todo estaba tachado, la palabra es perfecta).

### Ejercicio 2

1.  **Almacenamiento de símbolo:** El conjunto de estados pasa a ser $Q' \times B$, permitiendo que la unidad de control "recuerde" un símbolo (el estado se denota como $[q, b]$).
2.  **Pistas Múltiples:** El alfabeto de trabajo de la cinta se define como $B^k$. Esto nos permite tener los datos intactos en una pista y utilizar otra pista exclusivamente para colocar marcas de control (ej. un símbolo sería $[a, *]$ o $[a, \#]$).
3.  **Subrutinas:** Definimos un conjunto de estados con un punto de entrada y uno de retorno para realizar tareas mecánicas repetitivas (como rebobinar o desplazar bloques) sin tener que reescribir la lógica.

La solución sería:

---

##### (a) Palabras sobre el alfabeto {0,1} con el mismo número de ceros que de unos

**Técnica aplicada:** Pistas múltiples + Almacenamiento de símbolo.

En el diseño original, "ensuciábamos" la cinta sobrescribiendo con $X$ e $Y$. Ahora, utilizaremos una cinta de dos pistas. La pista superior tendrá los datos y la inferior las marcas (usaremos $*$ para "emparejado" y $\#$ para "no procesado"). El alfabeto será $B = \{0, 1, \#\} \times \{\#, *\}$. Además, almacenaremos en el estado el símbolo que buscamos.

**Lógica del programa:**
1.  **Inicio y Memorización:** La máquina lee el primer símbolo no marcado, por ejemplo, $[0, \#]$. Lo marca en la segunda pista escribiendo $[0, *]$ y "guarda" en su estado finito el símbolo complementario que debe buscar (el $1$) transitando al estado $[q_{buscar}, 1]$.
2.  **Búsqueda (Subrutina):** En el estado $[q_{buscar}, 1]$, el cabezal avanza a la derecha ignorando cualquier símbolo que ya esté marcado en la segunda pista $[*, *]$ y saltando también los de la misma clase no marcados $[0, \#]$.
3.  **Emparejamiento:** Al encontrar el símbolo complementario $[1, \#]$, lo marca escribiendo $[1, *]$.
4.  **Rebobinado (Subrutina):** Llama a una subrutina estándar que retrocede a la izquierda hasta encontrar el límite o el último símbolo procesado, y reinicia el ciclo principal.

---

##### (b) $L = \{a^n b^n c^n \mid n \ge 1\}$

**Técnica aplicada:** Pistas múltiples (Multipista) y Subrutinas.

Al igual que en el caso anterior, evitaremos borrar las letras originales para mantener la integridad de los datos, usando el alfabeto $B = \{a, b, c, \#\} \times \{\#, *\}$.

**Lógica del programa:**
1.  **Marcar A:** Leemos $[a, \#]$, escribimos $[a, *]$ y pasamos a la subrutina `BUSCAR_B`.
2.  **Subrutina `BUSCAR_B`:** El cabezal avanza a la derecha. Caben tres lecturas: $[a, \#]$ (otras $a$ pendientes), $[a, *]$ ($a$ ya procesadas) o $[b, *]$ ($b$ ya procesadas de ciclos anteriores). Saltamos todas ellas. Al leer la primera $[b, \#]$, la marcamos como $[b, *]$ y pasamos a `BUSCAR_C`.
3.  **Subrutina `BUSCAR_C`:** Saltamos las $[b, \#]$ restantes y las $[c, *]$ ya procesadas. Al leer la primera $[c, \#]$, la marcamos como $[c, *]$ y pasamos a la subrutina `REBOBINAR`.
4.  **Subrutina `REBOBINAR`:** Nos movemos hacia la izquierda incondicionalmente hasta encontrar la última $[a, *]$ que marcamos. Damos un paso a la derecha y reiniciamos el ciclo.

---

##### (c) $\{ww^{-1} \mid w \in \{0, 1\}^*\}$ (Palíndromos pares)

**Técnica aplicada:** Almacenamiento de símbolo en el estado.

En tu diseño clásico, necesitabas bifurcar tu programa completamente: una rama entera de estados para procesar si leías un $0$, y otra rama entera si leías un $1$. La técnica de almacenamiento de símbolo compacta esto drásticamente.

**Lógica del programa:**
1.  Definimos los estados como $[q, \sigma]$ donde $\sigma \in \{0, 1, \#\}$.
2.  **Leer y Recordar:** En el estado inicial $[q_0, \#]$, leemos un símbolo $a \in \{0,1\}$, lo sobrescribimos con un blanco $\#$ (o lo marcamos), y lo "cargamos" en el estado pasando a $[q_{buscar\_fin}, a]$.
3.  **Avanzar:** La transición genérica $\delta([q_{buscar\_fin}, a], b) = ([q_{buscar\_fin}, a], b, D)$ (para cualquier $b$) nos lleva al final de la palabra. Al chocar con el blanco, retrocedemos un paso a la izquierda pasando a $[q_{verificar}, a]$.
4.  **Verificación Mágica:** Aquí ocurre la elegancia técnica. Definimos la transición $\delta([q_{verificar}, a], a) = ([q_{rebobinar}, \#], \#, I)$. Esta única regla obliga matemáticamente a que el símbolo en la cinta coincida con el $a$ almacenado en el estado. Si no coincide, la MT no tiene transición y rechaza inmediatamente.

---

##### (d) $\{wcw \mid w \in \{0, 1\}^*\}$

**Técnica aplicada:** Almacenamiento de símbolo + Pistas Múltiples.

Este es el ejemplo canónico que se resuelve de forma oficial en el material de clase (Tema 1, diapositivas 53 a 58). Utiliza el alfabeto $B = \{0, 1, c, \#\} \times \{\#, *\}$ y estados formados por la tupla $Q' \times \{0, 1, \#\}$.

**Lógica del programa (extraída del modelo formal):**
1.  **Fase de memorización:** Leemos el primer símbolo no marcado $a$ (que será $0$ o $1$), lo registramos en la unidad de control cambiando al estado $[q_2, a]$, lo marcamos en la cinta escribiendo $[a, *]$ y nos movemos a la derecha.
2.  **Transición al segundo bloque:** En el estado $[q_2, a]$, avanzamos hacia la derecha hasta que detectamos el separador central `c` (representado como $[c, \#]$), momento en el que transitamos a $[q_3, a]$.
3.  **Comprobación de identidad:** En $[q_3, a]$, saltamos todos los símbolos que ya tengan la marca `*` en la segunda pista. Cuando encontramos el primer símbolo no marcado, exigimos mediante la función de transición que coincida exactamente con el símbolo $a$ almacenado en el estado. Si coincide, se marca escribiendo $[a, *]$ y pasamos al estado de retorno $[q_4, \#]$.
4.  **Retorno guiado:** Rebobinamos hacia la izquierda cruzando la `c` (pasando a $q_5$) y seguimos hasta encontrar un símbolo marcado $[a, *]$ del primer bloque. Damos un paso a la derecha hacia el nuevo símbolo no marcado, cambiamos al estado inicial $[q_1, \#]$ y repetimos.

### Ejercicio 3

Para este problema, el requerimiento nos impone una restricción muy estricta: el alfabeto de trabajo es únicamente $B = \{0, 1, \#\}$. Esto significa que **no cabe usar pistas múltiples ni símbolos especiales de marcado** (como $X$ o $Y$) para recordar dónde empezamos. 

##### 1. Fundamentos Teóricos: "Acarreo" y Almacenamiento de Símbolo

Para solucionar este desafío, hay que aplicar la técnica de **almacenamiento de símbolo en el estado** (recordando el símbolo leído en la unidad de control). La estrategia algorítmica es un "acarreo" (shift) en cadena:
1. Leemos el símbolo actual, lo borramos (escribiendo un blanco $\#$) y se almacena en el estado.
2. Nos movemos a la derecha. Leemos el siguiente símbolo, escribimos el que traíamos guardado, y guardamos el nuevo.
3. Repetimos hasta encontrar el primer blanco $\#$. Allí depositamos el último símbolo que traíamos.
4. Retrocedemos a la izquierda hasta chocar con el blanco $\#$ dejado en el paso 1. Esa es la posición original. 

##### 2. Diseño Detallado de las Transiciones

Asumiremos que los movimientos posibles son **D** (Derecha) e **I** (Izquierda). Los estados de la subrutina son:

* **Estado inicial de la subrutina:** $q_{inicio}$
* **Estados de acarreo:** $q_{lleva\_0}$ y $q_{lleva\_1}$
* **Estado de rebobinado:** $q_{retorno}$
* **Estado final de la subrutina (punto de salida):** $q_{fin}$

**Fase 1: Extraer el primer símbolo y dejar el hueco**
Si leemos un $0$ o un $1$, lo guardamos pasando al estado correspondiente, se deja un $\#$ que marca el punto de retorno y se avanza a la derecha. Si leemos $\#$, no hay nada que desplazar y terminamos directamente.
* $\delta(q_{inicio}, 0) = (q_{lleva\_0}, \#, D)$
* $\delta(q_{inicio}, 1) = (q_{lleva\_1}, \#, D)$
* $\delta(q_{inicio}, \#) = (q_{fin}, \#, S)$ *(Nota: Si la MT permite el movimiento estático **S**, nos quedamos ahí; si no, la subrutina simplemente asume que ya está en la posición correcta).*

**Fase 2: El desplazamiento en cadena (Acarreo)**
En estos estados, soltamos el símbolo transportado, se recoge el de la cinta para el estado siguiente y se avanza a la derecha.
* $\delta(q_{lleva\_0}, 0) = (q_{lleva\_0}, 0, D)$ *(Traigo un 0, leo un 0 $\rightarrow$ dejo un 0, me llevo un 0)*
* $\delta(q_{lleva\_0}, 1) = (q_{lleva\_1}, 0, D)$ *(Traigo un 0, leo un 1 $\rightarrow$ dejo el 0, me llevo un 1)*
* $\delta(q_{lleva\_1}, 0) = (q_{lleva\_0}, 1, D)$ *(Traigo un 1, leo un 0 $\rightarrow$ dejo el 1, me llevo un 0)*
* $\delta(q_{lleva\_1}, 1) = (q_{lleva\_1}, 1, D)$ *(Traigo un 1, leo un 1 $\rightarrow$ dejo el 1, me llevo un 1)*

**Fase 3: Fin del bloque y depositar el último símbolo**
Cuando el acarreo encuentra el primer blanco $\#$, significa que el bloque ha terminado. Escribimos el último símbolo que traíamos y comenzamos a retroceder a la izquierda.
* $\delta(q_{lleva\_0}, \#) = (q_{retorno}, 0, I)$
* $\delta(q_{lleva\_1}, \#) = (q_{retorno}, 1, I)$

**Fase 4: Rebobinar hasta la posición de inicio**
Ahora nos movemos hacia la izquierda saltando los $0$s y $1$s que acabamos de desplazar. Cuando topemos con el blanco $\#$ (que es exactamente el que creamos en la Fase 1), nos detenemos.
* $\delta(q_{retorno}, 0) = (q_{retorno}, 0, I)$
* $\delta(q_{retorno}, 1) = (q_{retorno}, 1, I)$
* $\delta(q_{retorno}, \#) = (q_{fin}, \#, S)$ *(O si no se permite movimiento **S**, pasamos a $q_{fin}$ y damos el control a la siguiente instrucción del programa principal).*

## Relación 2

\paragraph*{Problema 10}

Dado el siguiente programa con variables:

\begin{flushleft}
\hspace*{2em}\texttt{IF X ENDS 0 GOTO A} \\
\hspace*{2em}\texttt{IF X ENDS 1 GOTO B} \\
\hspace*{2em}\texttt{HALT}

\vspace{0.5em}
\begin{tabular}{@{}l l@{}}
[A] & \texttt{X <- X-} \\
	& \texttt{Y <- 0Y} \\
	& \texttt{IF X ENDS 0 GOTO A}
\end{tabular}

\vspace{0.8em}
\begin{tabular}{@{}l l@{}}
[B] & \texttt{IF X ENDS 1 GOTO B} \\
	& \texttt{HALT} \\
	& \texttt{X <- X-} \\
	& \texttt{Y <- 1Y} \\
	& \texttt{IF X ENDS 0 GOTO A} \\
	& \texttt{IF X ENDS 1 GOTO B} \\
	& \texttt{HALT}
\end{tabular}
\end{flushleft}

Construir un programa Post-Turing equivalente (se pueden usar macros).

## Relación 4

### Ejercicio 1

#### (a) Todo grafo finito dirigido acíclico (DAG) tiene una fuente.

**Prueba:** Supóngase, por reducción al absurdo, que el grafo no tiene ninguna fuente. Por definición, una fuente es un nodo con grado de entrada igual a 0. Si no existe ninguna fuente, significa que **todos los nodos del grafo tienen al menos un arco entrante**.

Se parte de un nodo cualquiera $v_1$. Como $v_1$ tiene al menos un arco entrante, debe existir un nodo $v_2$ tal que $(v_2, v_1) \in E$. Del mismo modo, como $v_2$ no es una fuente, existe un $v_3$ tal que $(v_3, v_2) \in E$. El proceso se prolonga de forma indefinida construyendo un camino hacia atrás:

$$\dots \longrightarrow v_3 \longrightarrow v_2 \longrightarrow v_1$$

Como el grafo es **finito** (tiene un número $n$ finito de nodos), por el **principio del palomar** (*pigeonhole principle*), eventualmente habrá que repetir un nodo en la secuencia de longitud mayor a $n$. Es decir, existen índices $i < j$ tales que $v_i = v_j$. Esto demuestra la existencia de un ciclo dirigido ($v_j \rightarrow v_{j-1} \rightarrow \dots \rightarrow v_i$), lo cual contradice directamente la hipótesis de que el grafo es acíclico. Por lo tanto, el grafo debe tener al menos una fuente.

#### (b) Caracterización de numeración topológica.

**Prueba:**

* **Implicación directa ($\Rightarrow$):** Supóngase que el grafo es acíclico. Por el apartado (a), se sabe que tiene al menos una fuente. Le asignamos a esta fuente el número $1$ y la eliminamos del grafo junto con todos sus arcos salientes. El grafo restante sigue siendo finito y acíclico, por lo que tendrá otra fuente en el subgrafo resultante, a la cual le asignamos el número $2$. Repitiendo este proceso de forma inductiva, numeramos los nodos del $1$ al $n$. Como en cada paso eliminamos un nodo que no tiene arcos entrantes en el grafo restante, cualquier arco del grafo original irá necesariamente de un nodo eliminado antes (número menor) a uno eliminado después (número mayor).
* **Implicación inversa ($\Leftarrow$):** Supóngase que existe dicha numeración. Se trata de probar que el grafo no tiene ciclos. Supóngase, por reducción al absurdo, que existe un ciclo dirigido de la forma:

$$v_{i_1} \longrightarrow v_{i_2} \longrightarrow \dots \longrightarrow v_{i_k} \longrightarrow v_{i_1}$$

Por la propiedad de la numeración, se debe cumplir simultáneamente que:

$$\text{num}(v_{i_1}) < \text{num}(v_{i_2}) < \dots < \text{num}(v_{i_k}) < \text{num}(v_{i_1})$$

Lo cual implica que $\text{num}(v_{i_1}) < \text{num}(v_{i_1})$, una contradicción matemática estricta. Por tanto, el grafo no contiene ciclos.

#### (c) Algoritmo en tiempo polinómico (Algoritmo de Kahn).

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

### Ejercicio 2

#### (a) Un grafo es bipartito si y solo si todos sus ciclos son de longitud par.

**Prueba:**

* **Implicación directa ($\Rightarrow$):** Sea $G=(V,E)$ un grafo bipartito con partición $V = V_1 \cup V_2$. Cualquier arista conecta un nodo de $V_1$ con uno de $V_2$. Por tanto, cualquier camino en el grafo debe alternar estrictamente entre ambos conjuntos. Para empezar en un nodo de $V_1$, recorrer un camino cerrado (ciclo) y regresar al mismo nodo de $V_1$, el camino debe realizar obligatoriamente un número par de transiciones (ir a $V_2$ y volver). Así, la longitud de todo ciclo es par.
* **Implicación inversa ($\Leftarrow$):** Supóngase que todos los ciclos tienen longitud par. Asumiendo que el grafo es conexo (si no lo es, se aplica a cada componente), elegimos un nodo origen $v_0$. Definimos la partición de vértices como:

$$V_1 = \{u \in V : \text{dist}(v_0, u) \text{ es par}\}$$


$$V_2 = \{u \in V : \text{dist}(v_0, u) \text{ es impar}\}$$



Supóngase, por reducción al absurdo, que existen dos nodos $x, y \in V_1$ conectados por una arista $(x,y) \in E$. Como ambos están en $V_1$, la longitud de los caminos mínimos desde $v_0$ a $x$ y a $y$ tienen la misma paridad. El circuito cerrado formado por el camino mínimo $v_0 \rightsquigarrow x$, la arista $(x, y)$ y el camino mínimo inverso $y \rightsquigarrow v_0$ tendría una longitud total de $\text{dist}(v_0, x) + 1 + \text{dist}(v_0, y)$, lo cual es un número impar ($\text{par} + 1 + \text{par} = \text{impar}$). Todo circuito impar contiene necesariamente un ciclo de longitud impar, contradiciendo la hipótesis. Por tanto, no existen aristas internas y el grafo es bipartito.

#### (b) Algoritmo en tiempo polinómico.

Se utiliza un recorrido en anchura (BFS) para intentar colorear el grafo con 2 colores:

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

### Ejercicio 3

#### Demostrar que P es cerrada para la unión y la intersección.

Sean $L_1, L_2 \in \text{P}$. Por definición, existen dos Máquinas de Turing Deterministas (MTD) $M_1$ y $M_2$ que deciden $L_1$ y $L_2$ en tiempos acotados por los polinomios $p_1(n)$ y $p_2(n)$ respectivamente.

* **Clausura para la Unión ($L_1 \cup L_2$):** Se construye una MTD $M_{\cup}$ que recibe una entrada $x$ de longitud $n$. $M_{\cup}$ simula en primer lugar la ejecución de $M_1(x)$. Si $M_1$ acepta, $M_{\cup}$ acepta inmediatamente. Si $M_1$ rechaza, $M_{\cup}$ pasa a simular $M_2(x)$, aceptando si esta acepta y rechazando en caso contrario. El tiempo total de ejecución está acotado por $p_1(n) + p_2(n)$, que sigue siendo una función polinómica.
* **Clausura para la Intersección ($L_1 \cap L_2$):** Se construye de igual forma una MTD $M_{\cap}$. Ante una entrada $x$, ejecuta secuencialmente $M_1(x)$. Si $M_1$ rechaza, $M_{\cap}$ rechaza inmediatamente. Si $M_1$ acepta, ejecuta $M_2(x)$, devolviendo el mismo resultado que $M_2$. El tiempo máximo vuelve a ser $p_1(n) + p_2(n)$, un orden polinómico.

---

### Ejercicio 4

Siguiendo la nota del documento, evaluamos el comportamiento sustituyendo polinomios genéricos por $p(n) = n^l$ ($l > 0$).

#### (a) $\{n^k : k > 0\}$

* **Izquierda:** $p(f(n)) = (n^k)^l = n^{k \cdot l}$. Como $k \cdot l > 0$, la función pertenece a la clase. **Sí es cerrada**.
* **Derecha:** $f(p(n)) = (n^l)^k = n^{l \cdot k}$. Mismo caso. **Sí es cerrada**.

#### (b) $\{n \cdot k : k \ge 0\}$

* **Izquierda:** $p(f(n)) = (n \cdot k)^l = n^l \cdot k^l$. Si $l > 1$, la función resultante crece como $O(n^l)$, que supera la escala lineal de la clase. **No es cerrada**.
* **Derecha:** $f(p(n)) = n^l \cdot k$. Para cualquier $l > 1$, no pertenece a la clase. **No es cerrada**.

#### (c) $\{k^n : k > 0\}$

* **Izquierda:** $p(f(n)) = (k^n)^l = k^{l \cdot n} = (k^l)^n$. Como $k^l$ es una constante, la función resultante mantiene la forma exponencial de la clase. **Sí es cerrada**.
* **Derecha:** $f(p(n)) = k^{(n^l)}$. Para $l > 1$, la función de orden $k^{n^2}$ o superior crece mucho más rápido que cualquier simple exponencial $m^n$. **No es cerrada**.

#### (d) $\{2^{n^k} : k > 0\}$

* **Izquierda:** $p(f(n)) = (2^{n^k})^l = 2^{l \cdot n^k}$. Al aplicar la notación $O$, se cumple que $2^{l \cdot n^k} \le 2^{n^{k+1}}$ para $n$ suficientemente grande, cuya función base está en la clase ($k+1 > 0$). **Sí es cerrada**.
* **Derecha:** $f(p(n)) = 2^{(n^l)^k} = 2^{n^{l \cdot k}}$. Como $l \cdot k > 0$, la función pertenece a la clase. **Sí es cerrada**.

#### (e) $\{\log^k(n) : k > 0\}$

* **Izquierda:** $p(f(n)) = (\log^k n)^l = \log^{k \cdot l} n \in C$. **Sí es cerrada**.
* **Derecha:** $f(p(n)) = \log^k(n^l) = (l \cdot \log n)^k = l^k \cdot \log^k n = O(\log^k n) \in C$. **Sí es cerrada**.

#### (f) $\{\log(\log n)\}$

* **Izquierda:** $p(f(n)) = (\log(\log n))^l \notin C$ para $l > 1$. **No es cerrada**.
* **Derecha:** $f(p(n)) = \log(\log(n^l)) = \log(l \cdot \log n) = \log l + \log(\log n) = O(\log(\log n)) \in C$. **Sí es cerrada**.

---

### Ejercicio 5

#### Demostrar que $L=\{wcw:w\in\{0,1\}^{*}\}$ está en espacio $\log(n)$.

Para diseñar un algoritmo en espacio logarítmico, contamos con una cinta de entrada de *solo lectura* y cintas de trabajo con espacio limitado a $O(\log n)$. No cabe almacenar la palabra $w$ en la memoria de trabajo porque ocuparía espacio lineal.

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

### Ejercicio 6

#### Demostrar que si $L \in \text{P}$, entonces $L^{*} \in \text{P}$.

Resolvemos este problema mediante un enfoque de **programación dinámica**. Sea $x$ una palabra de entrada de longitud $n$. Se trata de determinar si $x$ se puede descomponer en $x = w_1 w_2 \dots w_k$ tal que cada subpalabra $w_i \in L$.

Definimos un vector booleano $T$ de tamaño $n + 1$, donde $T[i] = \text{VERDADERO}$ si y solo si el prefijo de la palabra de longitud $i$ ($x[1 \dots i]$) pertenece a $L^*$.

* **Caso base:** $T[0] = \text{VERDADERO}$ (la palabra vacía $\epsilon$ siempre pertenece a $L^*$).
* **Paso inductivo:** Para cada $i$ desde $1$ hasta $n$:

$$T[i] = \text{VERDADERO} \iff \exists j \in \{0, \dots, i-1\} \text{ tal que } (T[j] == \text{VERDADERO} \land x[j+1 \dots i] \in L)$$



Como $L \in \text{P}$, la verificación de si la subpalabra de entrada $x[j+1 \dots i]$ pertenece a $L$ tarda un tiempo polinómico $p(n)$. El algoritmo realiza como máximo $O(n^2)$ subconsultas. La complejidad temporal total estará acotada por $O(n^2 \cdot p(n))$, que es polinómica, por tanto $L^* \in \text{P}$.

---

### Ejercicio 7

#### Demostrar que si $L \in \text{NP}$, entonces $L^{*} \in \text{NP}$.

Si $L \in \text{NP}$, existe una Máquina de Turing No Determinista (MTND) $M$ que decide el lenguaje $L$ en tiempo polinómico. Diseñamos una nueva MTND $M^*$ para decidir $L^*$:

Ante una palabra de entrada $x$ de longitud $n$:

1. **Adivinar de forma no determinista** una partición de la cadena $x$ en $k$ subpalabras ($1 \le k \le n$). Esto equivale a seleccionar un conjunto de índices de corte intermedios.
2. Para cada una de las subpalabras de la partición ($w_1, w_2, \dots, w_k$), ejecutar de forma secuencial (o en paralelo no determinista) la MTND original $M$.
3. Si todas las simulaciones de las subpalabras entran en estado de aceptación, entonces $M^*$ **acepta**. En caso de que alguna subpalabra sea rechazada, esa rama del cómputo no determinista **rechaza**.

**Complejidad:** La fase de generación no determinista de los cortes toma tiempo lineal $O(n)$, y la verificación de las subpalabras toma a lo sumo $n \cdot p(n)$ pasos. Al ser la composición de procesos polinómicos, $M^*$ opera en tiempo polinómico no determinista, luego $L^* \in \text{NP}$.

---

### Ejercicio 8

#### Demostrar que NP es cerrada para la unión y la intersección.

Sean $L_1, L_2 \in \text{NP}$ decididos por las MTND $M_1$ y $M_2$ en tiempo polinómico acotado por $p_1(n)$ y $p_2(n)$ respectivamente.

* **Unión ($L_1 \cup L_2$):** Diseñamos una MTND $M_{\cup}$ que, ante una entrada $x$, realiza en su primer paso una ramificación no determinista con dos opciones. La primera opción ejecuta $M_1(x)$ y la segunda ejecuta $M_2(x)$. Si al menos una de las ramas alcanza un estado de aceptación, la máquina acepta. El tiempo global del árbol de cómputo es $\max(p_1(n), p_2(n))$, que es polinómico.
* **Intersección ($L_1 \cap L_2$):** Diseñamos una MTND $M_{\cap}$ que, ante una entrada $x$, ejecuta secuencialmente la simulación de $M_1(x)$. Si $M_1$ alcanza una configuración de aceptación, la máquina no se detiene, sino que toma esa configuración y procede a simular de forma no determinista $M_2(x)$. Si esta segunda fase también encuentra una ruta de aceptación, la máquina $M_{\cap}$ acepta. La profundidad del cómputo está acotada por $p_1(n) + p_2(n)$, manteniendo la condición polinómica.

---

### Ejercicio 9

#### Demostrar que si $\text{NP} \neq \text{coNP}$ entonces $\text{P} \neq \text{NP}$.

Demostramos esta propiedad utilizando el razonamiento **contrarrecíproco**: probaremos que si $\text{P} = \text{NP}$, entonces obligatoriamente $\text{NP} = \text{coNP}$.

Por la propia naturaleza de las Máquinas de Turing Deterministas, la clase $\text{P}$ es cerrada bajo complementación ($\text{P} = \text{coP}$), dado que para calcular el complemento de un lenguaje en $\text{P}$ basta con intercambiar los estados de aceptación y rechazo de la MTD que lo resuelve.

Si se asume como premisa que $\text{P} = \text{NP}$, cabe aplicar el operador de complemento a ambos lados de la igualdad, obteniendo que $\text{coP} = \text{coNP}$. Combinando todas las equivalencias:

$$\text{NP} = \text{P} = \text{coP} = \text{coNP} \implies \text{NP} = \text{coNP}$$

Por tanto, si la comunidad matemática demuestra que $\text{NP} \neq \text{coNP}$, se deduce de forma directa y rigurosa que $\text{P} \neq \text{NP}$.

---

### Ejercicio 10

#### Demostrar que determinar si una entrada de paréntesis está correctamente emparejada y anidada está en L.

Para verificar el anidamiento correcto sin recurrir a una estructura de pila en memoria (que requeriría espacio lineal), cabe emplear un único contador entero dinámico.

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

### Ejercicio 11

#### Caso con dos tipos de paréntesis `()` y `[]`.

* **Demostración de que está en L:** Si disponemos de la capacidad de mover el cabezal de la cinta de entrada en cualquier dirección (hacia adelante y hacia atrás), cabe resolver el problema en espacio logarítmico combinando dos fases:
1. Verificar que los paréntesis `()` y los corchetes `[]` están balanceados de manera independiente numéricamente utilizando dos contadores logarítmicos (tal como se implementó en el Ejercicio 10).
2. Para comprobar que el anidamiento es correcto y no existen cruces ilegales del tipo `([)]`, aplicamos el siguiente análisis geométrico: para cada símbolo de cierre (por ejemplo, un `]` en la posición $i$), hacemos un recorrido hacia atrás (a la izquierda) buscando su apertura correspondiente. Para ello, se usa un contador que se incrementa con cierres del mismo tipo y se decrementa con aperturas. Cuando el contador vuelve a 0, localizamos su apertura correspondiente en el índice $j$. En ese momento, validamos que la subcadena interna contenida entre $j$ e $i$ tenga un balance de paréntesis correcto.
Como solo almacenamos los índices de las posiciones de los cabezales y pequeños contadores locales de valor inferior a $n$, el espacio consumido en las cintas es estrictamente **$O(\log n)$**, lo que prueba que el problema está en $\text{L}$.


* **Demostración de que requiere $O(n)$ de memoria si no se puede volver hacia atrás:** Si se restringe la lectura a un único recorrido secuencial de izquierda a derecha sin retroceso (*algoritmo online*), la máquina se ve obligada a recordar el orden exacto de los tipos de paréntesis abiertos que todavía no han sido cerrados para verificar la validez del cierre inmediato (estructura LIFO).
Consideremos una entrada que comienza con una secuencia de longitud $m = n/2$ formada exclusivamente por símbolos de apertura arbitrarios (elección libre entre `(` y `[`). Existen exactamente $2^m$ posibles combinaciones distintas de apertura. Para que la máquina responda correctamente ante cualquier secuencia posterior de cierre, debe ser capaz de almacenar un estado interno único por cada una de estas combinaciones. Por la teoría de la información, para diferenciar de manera unívoca entre $2^m$ estados posibles de almacenamiento, la memoria interna de trabajo debe tener una capacidad mínima de:

$$\log_2(2^m) = m = \frac{n}{2} = O(n) \text{ bits}$$



Por consiguiente, sin retroceso de cabezal, el problema requiere espacio lineal **$O(n)$**.

---

### Ejercicio 12

#### Demostrar que el problema del palíndromo requiere $O(n)$ de memoria si no puede volver hacia atrás.

**Prueba:** Supóngase una Máquina de Turing restringida a leer la entrada de izquierda a derecha sin posibilidad de retroceder su cabezal principal. Consideremos el conjunto de todas las cadenas binarias posibles de longitud $m = n/2$ que forman la primera mitad del palíndromo. Existen $2^m$ cadenas distintas.

Si la máquina dispusiera de menos de $m$ bits de memoria de trabajo, por el principio de las casillas, existirían al menos dos cadenas iniciales distintas, $w_1 \neq w_2$, que llevarían a la máquina exactamente al mismo estado de memoria interna tras leer los primeros $m$ caracteres.

Si la entrada continuase con el reverso exacto de la primera cadena ($w_1^R$), el string total sería $w_1 w_1^R$, el cual es un palíndromo válido y la máquina debería aceptarlo. Sin embargo, al recibir la entrada $w_2 w_1^R$, como el estado interno de la memoria tras los primeros $m$ pasos es idéntico al caso anterior, la máquina procesaría la segunda mitad de la misma manera y también la **aceptaría**. Esto representa un error algorítmico, ya que $w_2 w_1^R$ no es un palíndromo si $w_1 \neq w_2$.

Para evitar este solapamiento de configuraciones, la máquina debe registrar de forma unívoca cada uno de los $2^m$ estados informacionales posibles. Por tanto, la memoria de trabajo requiere un número de bits de orden:


$$\log_2(2^m) = m = \frac{n}{2} = O(n)$$

---

### Ejercicio 13

#### Demostrar que $\text{NP} \neq \text{ESPACIO}(n)$.

Siguiendo la sugerencia del enunciado, analizamos el comportamiento de ambas clases respecto al operador de reducción en espacio logarítmico ($\text{L}$-reducciones, denotado como $\propto_{\text{L}}$):

1. **La clase NP es cerrada bajo $\text{L}$-reducciones:** Sean dos problemas tales que $P_1 \propto_{\text{L}} P_2$ y $P_2 \in \text{NP}$. Por definición de reducción en espacio logarítmico, existe una MTD que transforma cualquier instancia $x$ de $P_1$ en una instancia $y$ de $P_2$ utilizando un espacio de trabajo acotado por $O(\log |x|)$. Dado que el espacio es logarítmico, la longitud de la salida estará acotada polinómicamente respecto a la entrada ($|y| = O(|x|^c)$). Como $P_2 \in \text{NP}$, existe una MTND que decide $P_2$ en tiempo polinómico respecto a la longitud de su entrada $y$, lo cual se traduce en un tiempo polinómico respecto a la entrada original $x$. Componiendo ambos procesos mediante la técnica de "recálculo de bits de salida bajo demanda en espacio logarítmico" (evitando escribir la cadena intermedia $y$ completa en una cinta de trabajo ), obtenemos que el problema completo se puede decidir en tiempo no determinista polinómico. Por tanto, $P_1 \in \text{NP}$. **NP es cerrada bajo $\text{L}$-reducciones**.


2. **La clase $\text{ESPACIO}(n)$ NO es cerrada bajo $\text{L}$-reducciones:** Por el **Teorema de la Jerarquía en Espacio**, consta de forma rigurosa que un incremento en la cota de espacio permite decidir lenguajes estrictamente más complejos; por ejemplo, $\text{ESPACIO}(n) \subsetneq \text{ESPACIO}(n^2)$. Mediante una reducción en espacio logarítmico, es posible mapear (comprimir) instancias de un problema de una clase espacial superior en instancias de tamaño lineal de un problema base. Si la clase $\text{ESPACIO}(n)$ fuese cerrada bajo este tipo de reducciones, provocaría un colapso en cadena de la jerarquía espacial, permitiendo resolver problemas de orden cuadrático o superior en espacio estrictamente lineal, lo cual contradice el teorema fundamental de la jerarquía.


3. **Conclusión:** Al haber demostrado que la clase de complejidad $\text{NP}$ posee la propiedad estructural de clausura ante reducciones en espacio logarítmico y la clase $\text{ESPACIO}(n)$ carece de ella, concluimos de forma matemática que ambas clases representan conjuntos de lenguajes diferentes, luego **$\text{NP} \neq \text{ESPACIO}(n)$**.

## Relación 5


### Ejercicio 2: Máquinas de Turing No Deterministas Fuertes y $\text{NP} \cap \text{coNP}$

Se trata de demostrar que un lenguaje $L$ es decidido por una Máquina de Turing No Determinista Fuerte (MTND-F) en tiempo polinómico si y solo si $L \in \text{NP} \cap \text{coNP}$.

#### Implicación directa ($\Rightarrow$)

Supóngase que $L$ es decidido por una MTND-F polinómica $M$.

*  **Probar que $L \in \text{NP}$:** Por definición de la máquina, si $x \in L$, existe al menos un camino de cómputo que termina en 'Si'. Si $x \notin L$, ningún camino termina en 'Si' (todos terminan en 'No' o 'Duda'). Si ignoramos las salidas 'No' y tratamos 'Duda' como un estado de no-aceptación estándar, $M$ se comporta exactamente como una MTND polinómica clásica que acepta $L$. Por tanto, $L \in \text{NP}$.


* **Probar que $L \in \text{coNP}$ (es decir, $\bar{L} \in \text{NP}$):** Se construye una nueva máquina $M'$ a partir de $M$ modificando únicamente los estados finales: intercambiamos las salidas 'Si' por 'No', y las salidas 'No' por 'Si', manteniendo 'Duda' intacto. Si $x \in \bar{L}$ (es decir, $x \notin L$), la máquina original $M$ garantizaba al menos un camino hacia 'No', el cual ahora será un camino hacia 'Si' en $M'$. Si $x \in L$, ningún camino en $M'$ llegará a 'Si'. Así, $M'$ es una MTND polinómica que acepta $\bar{L}$ , lo que implica que $\bar{L} \in \text{NP} \implies L \in \text{coNP}$.



Al cumplirse ambas condiciones, $L \in \text{NP} \cap \text{coNP}$.

#### Implicación inversa ($\Leftarrow$)

Supóngase ahora que $L \in \text{NP} \cap \text{coNP}$.

* Como $L \in \text{NP}$, existe una MTND polinómica $M_1$ que acepta $L$.


* Como $L \in \text{coNP} \implies \bar{L} \in \text{NP}$, existe otra MTND polinómica $M_2$ que acepta $\bar{L}$.



Se construye una MTND Fuerte $M$ que, ante una entrada $x$, comienza con una **bifurcación no determinista** de dos ramas principales:

1. La primera rama simula el cómputo de $M_1(x)$. Si la simulación de $M_1$ acepta, la máquina $M$ finaliza devolviendo **'Si'**. Si la simulación termina sin aceptar, devuelve **'Duda'**.


2. La segunda rama simula el cómputo de $M_2(x)$. Si la simulación de $M_2$ acepta (lo que significa que $x \in \bar{L}$), $M$ finaliza devolviendo **'No'**. Si no acepta, devuelve **'Duda'**.



**Verificación de las condiciones:**

* Si $x \in L$, $M_1(x)$ tiene al menos un camino de aceptación (que dará 'Si') , y $M_2(x)$ no tiene ninguno (todos darán 'Duda'). Todos los caminos terminan en 'Si' o 'Duda' con al menos un 'Si'.


* Si $x \notin L$, $M_1(x)$ no tiene caminos de aceptación (todos darán 'Duda') , y $M_2(x)$ tiene al menos uno (que dará 'No'). Todos los caminos terminan en 'No' o 'Duda' con al menos un 'No'.



El tiempo de ejecución sigue estando acotado polinómicamente. Queda demostrado.

---

### Ejercicio 3: Certificado de Pratt para $p = 13$

El teorema de Pratt establece que un número $p > 1$ es primo si y solo si existe un testigo $r$ ($1 < r < p$) tal que:

1. $r^{p-1} \equiv 1 \pmod p$ 


2. $r^{\frac{p-1}{q}} \not\equiv 1 \pmod p$ para todos los divisores primos $q$ de $p-1$.



#### Paso 1: Aplicación a $p = 13$

* Los componentes son $p - 1 = 12$. Los divisores primos de 12 son $q_1 = 2$ y $q_2 = 3$.


* Elegimos como testigo $r = 2$.


* **Condición 1:** $2^{12} = 4096$. Calculando el módulo: $4096 \pmod{13} = 1$. Se cumple.


* **Condición 2 (para $q=2$):** $\frac{12}{2} = 6 \implies 2^6 = 64$. Calculando el módulo: $64 \equiv 12 \not\equiv 1 \pmod{13}$. Se cumple.


* **Condición 2 (para $q=3$):** $\frac{12}{3} = 4 \implies 2^4 = 16$. Calculando el módulo: $16 \equiv 3 \not\equiv 1 \pmod{13}$. Se cumple.



#### Paso 2: Certificación recursiva de los divisores primos

Siguiendo la estructura del certificado de Pratt (pág. 33-34 del Tema 4), el divisor $2$ es un caso base que no requiere desglose , pero el divisor $3$ debe ser certificado a su vez de forma recursiva.

* Para $p = 3$, se tiene $p - 1 = 2$, cuyo único divisor primo es $q = 2$.
* Elegimos el testigo $r = 2$.
* **Condición 1:** $2^{3-1} = 2^2 = 4 \equiv 1 \pmod 3$. Se cumple.


* **Condición 2:** $2^{\frac{2}{2}} = 2^1 = 2 \not\equiv 1 \pmod 3$. Se cumple.



#### Formato Final del Certificado Estructural

Siguiendo la sintaxis formal explicada por el profesor Serafín Moral:

$$\text{Cert}(13) = \Big( \big(13 : 2 \ (2, 3)\big), \ \big(3 : 2 \ (2)\big) \Big)$$

---

### Ejercicio 4: Demostración de que la Exponenciación Modular está en P

Deseamos probar que el problema de determinar si $a^b \equiv c \pmod p$ es resoluble en tiempo polinómico respecto a la longitud de la entrada $n$.

Consideremos que $n$ representa la cantidad total de bits necesarios para almacenar los cuatro números en memoria. El valor del exponente $b$ puede ser de un orden de magnitud de hasta $2^n$. Por tanto, un bucle de multiplicaciones sucesivas de tamaño $b$ tardaría un tiempo exponencial $O(2^n)$.

Para resolverlo en tiempo polinómico aplicamos el **Algoritmo de Exponenciación Binaria** (también conocido como *Square-and-Multiply*):

1. Expresar el exponente $b$ en su representación binaria: $b = (b_k b_{k-1} \dots b_0)_2$. El número de bits del exponente está estrictamente acotado por la longitud de la entrada: $k \le n$.


2. Inicializar una variable acumuladora $R = 1$ y otra variable para las potencias de la base $A = a \pmod p$.
3. Para cada bit $b_i$ desde $0$ hasta $k$:
* Si $b_i == 1$, hacer $R = (R \cdot A) \pmod p$.
* Hacer $A = (A \cdot A) \pmod p$.


4. Finalmente, comprobar si $R == c$.

#### Análisis de Complejidad Temporal

* El bucle principal se ejecuta exactamente $k$ veces, por lo que realiza un máximo de **$n$ iteraciones**.


* En cada iteración se efectúan multiplicaciones y operaciones de módulo con números cuyo tamaño máximo de almacenamiento está acotado por $n$ bits. El coste de multiplicar y aplicar el módulo a dos enteros de $n$ bits mediante métodos estándar es de orden **$O(n^2)$**.


* La complejidad total del algoritmo es $O(n \cdot n^2) = \mathbf{O(n^3)}$, lo cual constituye una cota estrictamente polinómica. Por tanto, el problema está en P.



---

### Ejercicio 5: El Problema de la Factorización está en $\text{NP} \cap \text{coNP}$

El problema consiste en determinar si un número $x$ tiene un divisor $k$ en el rango abierto $1 < k < y$.

* **Demostración de que está en NP:** El certificado es simplemente el valor del propio divisor $k$. El verificador polinómico realiza únicamente dos comprobaciones:


1. Validar que $1 < k < y$.
2. Efectuar la división entera y comprobar que el resto de la operación $x \pmod k$ sea exactamente $0$.
Dado que una división de números de tamaño polinómico se computa de forma eficiente en tiempo $O(n^2)$ , el problema se puede verificar de forma polinómica, luego está en NP.




* **Demostración de que está en coNP:** Para probar que pertenece a coNP, es preciso demostrar que el problema complementario ("$x$ **NO** tiene ningún divisor $k$ en el rango $1 < k < y$") se encuentra en la clase NP.


* **Certificado de la instancia NO:** El certificado consiste en proporcionar la **descomposición en factores primos completa** de $x$, expresada como $x = p_1^{e_1} p_2^{e_2} \dots p_m^{e_m}$ , adjuntando además el correspondiente **certificado de Pratt** para cada uno de los factores primos $p_i$ indicados.


* **Algoritmo Verificador de co-Factorización:**
1. Multiplicar todos los factores de la lista aportada y comprobar que el producto resultante sea exactamente igual a $x$.


2. Validar la primalidad de cada factor $p_i$ utilizando sus respectivos certificados de Pratt adjuntos (lo cual toma tiempo polinómico).


3. Revisar de forma directa que todos los factores primos de la lista cumplan la condición de ser **mayores o iguales que $y$** (es decir, $p_i \ge y$). Si todos los divisores primos de un número son $\ge y$, es matemáticamente imposible construir un divisor compuesto que sea menor que $y$ y mayor que 1.
Al ser todas estas comprobaciones polinómicas, el problema complementario está en NP $\implies$ el problema original pertenece a coNP.







Como consecuencia directa de ambos apartados, el problema se encuadra en $\text{NP} \cap \text{coNP}$.

---

### Ejercicio 6: Correspondencia entre $\text{NP} \cap \text{coNP}$ y la Clase TFNP

La clase **TFNP** (*Total Functional NP*) representa el conjunto de los problemas de búsqueda de funciones dentro de FNP para los cuales se garantiza matemáticamente que **siempre existe al menos una solución válida** para cualquier valor de entrada posible.

Dado un lenguaje arbitrario $L \in \text{NP} \cap \text{coNP}$, por las caracterizaciones de los problemas de verificación se sabe que:

* Si $x \in L$, existe un certificado polinómico $c_1$ que satisface a un verificador $V_1(x, c_1) = 1$.


* Si $x \notin L$, existe un certificado polinómico $c_2$ que satisface a un verificador de su complemento $V_2(x, c_2) = 1$.



Por tanto, cada lenguaje en esta intersección sugiere el siguiente problema de búsqueda de funciones en TFNP:

> **Problema sugerido:** "Dada una cadena de entrada $x$, encontrar un objeto $c$ que cumpla alguna de estas dos condiciones verificables de forma polinómica: o bien $c$ es un certificado válido de que $x \in L$ (haciendo $V_1(x, c) = 1$), o bien $c$ es un certificado válido de que $x \notin L$ (haciendo $V_2(x, c) = 1$)."

#### ¿Por qué pertenece a TFNP?

1. **Es un problema total:** Debido a que por la ley del bando excluido una cadena de entrada necesariamente se cumple que $x \in L$ o bien que $x \notin L$, la existencia de la solución (ya sea el testigo $c_1$ o el testigo $c_2$) está **absolutamente garantizada** para todo elemento $x$. No existen instancias con respuesta vacía ($\epsilon$).


2. **Es verificable en tiempo polinómico:** Un verificador determinista puede tomar la solución $c$ suministrada y evaluar los algoritmos $V_1$ y $V_2$ eficientemente para comprobar su validez.



---

### Ejercicio 7: Demostración de que FSAT es FNP-completo

Para demostrar la FNP-completitud de FSAT (*la versión de búsqueda de soluciones de SAT*), es preciso validar los dos pasos de la teoría de funciones de complejidad:

#### 1. Pertenencia a la clase: $\text{FSAT} \in \text{FNP}$

El problema recibe como datos un conjunto de cláusulas $C$. Su relación asociada es $R(C, A) = 1 \iff A$ es una asignación de valores de verdad que satisface la fórmula booleana $C$. La longitud en bits de la asignación $A$ está estrictamente acotada de forma lineal por el número de variables de $C$, y comprobar si la asignación satisface las cláusulas toma tiempo polinómico lineal. Por tanto, FSAT pertenece a FNP.

#### 2. Dificultad: Cualquier problema $\Pi \in \text{FNP}$ se reduce a FSAT

Sea $\Pi$ un problema genérico de funciones de la clase FNP, definido por una relación polinómica $R_{\Pi}(x, y)$. Por la propia definición de la clase, el problema de decisión subyacente ("¿Existe un objeto $y$ tal que $R_{\Pi}(x, y) = 1$?") pertenece por derecho propio a la clase NP.

Por el **Teorema de Cook-Levin**, se sabe que cualquier problema de decisión en la clase NP se puede reducir en espacio logarítmico al problema de decisión SAT. Existe una transformación polinómica $f(x)$ que genera un conjunto de cláusulas $C = f(x)$ que reproduce fielmente el comportamiento de la Máquina de Turing No Determinista que evalúa la relación.

La reducción estándar de Cook-Levin tiene la propiedad fundamental de ser constructiva respecto a las variables : dentro de las variables proposicionales del diseño de componentes de la reducción, un subconjunto específico de variables de la fórmula —denotémoslas como el grupo de variables de opciones o configuración inicial— codifica de forma directa, bit a bit, los elementos correspondientes a la cadena solución $y$ que satisface la relación del problema original.

Definimos las dos funciones de la reducción en FNP (siguiendo el esquema formal de la pág. 38 del Tema 4):

1. **Transformador de entrada ($R$):** Toma la instancia $x$ de el problema original y aplica la reducción de Cook-Levin para generar la fórmula de cláusulas de FSAT: $C = R(x)$.


2. **Transformador de soluciones ($S$):** Es un algoritmo que toma la asignación de variables de verdad $A$ que satisface a la fórmula calculada $C$ y, leyendo de forma directa las posiciones asignadas a las variables que representaban las opciones de la máquina, reconstruye y escribe el string solución $y = S(A, x)$.



Dado que ambas funciones de transformación operan eficientemente en espacio logarítmico, queda demostrado que FSAT es FNP-completo.

---

### Ejercicio 8: (a) El Problema de los Spines con $J_{ij} \ge 0$ está en P

Dada la función de energía del sistema sobre un grafo $G = (V, E)$:


$$R(s) = -\sum_{(i,j)\in E} J_{ij} s_i s_j$$

Donde cada nodo tiene asignado un spin $s_i \in \{-1, +1\}$. Analicemos algebraicamente el término multiplicativo de la interacción para cada arista del grafo:

* Si los dos extremos conectados tienen asignado el mismo signo ($s_i = s_j$), entonces el producto es par y positivo: $s_i s_j = 1$.
* Si los extremos tienen signos opuestos ($s_i \neq s_j$), entonces el producto es negativo: $s_i s_j = -1$.

El sumatorio se reescribe analíticamente de la energía total descomponiéndolo en estos dos conjuntos de aristas excluyentes:


$$R(s) = -\left( \sum_{s_i = s_j} J_{ij} - \sum_{s_i \neq s_j} J_{ij} \right)$$

Definamos $W = \sum_{(i,j)\in E} J_{ij}$ como la constante fija que representa la suma total de los pesos de todas las aristas del grafo original. Es evidente que la suma de las interacciones de los nodos con igual signo se puede calcular restando del total las aristas de signo opuesto: $\sum_{s_i = s_j} J_{ij} = W - \sum_{s_i \neq s_j} J_{ij}$. Sustituyendo este término en la ecuación de energía:


$$R(s) = -\left( W - \sum_{s_i \neq s_j} J_{ij} - \sum_{s_i \neq s_j} J_{ij} \right) = -W + 2 \sum_{s_i \neq s_j} J_{ij}$$

Se trata de determinar si existe una configuración de spines tal que $R(s) \le K$. Despejando el sumatorio de la equivalencia matemática obtenemos:


$$-W + 2 \sum_{s_i \neq s_j} J_{ij} \le K \iff \sum_{s_i \neq s_j} J_{ij} \le \frac{K + W}{2}$$

#### Reducción al Problema del Corte Mínimo

El término $\sum_{s_i \neq s_j} J_{ij}$ representa exactamente la definición matemática del **peso de un corte** en un grafo; es decir, la suma de los valores de las aristas que conectan el conjunto de vértices de la partición asignada al bando $+1$ con los vértices de la partición asignada al bando $-1$.

Como la hipótesis del enunciado nos garantiza estrictamente que **$J_{ij} \ge 0$ para todas las aristas del grafo**, el problema se reduce de forma directa a encontrar el **Corte Mínimo Global** (*Global Minimum Cut*) de un grafo con capacidades no negativas.

Este problema clásico se resuelve de forma exacta y eficiente en tiempo polinómico utilizando algoritmos estándar de flujos sobre redes (como el algoritmo de Edmonds-Karp o el algoritmo de Ford-Fulkerson por caminos cortos estudiado en el Tema 3), que operan en un coste polinómico de $O(|V| \cdot |E|^2)$.

Por tanto, al poder calcular el valor mínimo absoluto de la energía en tiempo polinómico y evaluar si es menor o igual que la cota solicitada, **el problema está en P**.

## Simulacro de la tercera relación

#### Ejercicio 1 (El Palíndromo en Clase L)

**Enunciado:**
Demuestre formalmente que el problema de determinar si una palabra de entrada es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda) pertenece a la clase de complejidad **L**.

**Resolución detallada:**
Para demostrar que el problema pertenece a la clase **L** (espacio logarítmico), se utiliza el modelo computacional estándar para la evaluación de espacio sublineal: una Máquina de Turing equipada con una **cinta de entrada de solo lectura**, cuyo espacio no se contabiliza y que permite mover el cabezal libremente hacia adelante y hacia atrás, y una cinta de trabajo de lectura/escritura separada.

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

#### Ejercicio 2 (Análisis de Conjuntos Numéricos)

**Enunciado:**
Se plantean los dos siguientes problemas de decisión sobre conjuntos de números:
*   **Problema A:** Dado un conjunto de números, determinar si existe un elemento que sea la mediana. Si la cantidad total de números en la entrada no es impar, la máquina debe rechazar automáticamente.
*   **Problema B:** Dado un conjunto de números, determinar si es posible agrupar todos sus elementos en parejas de tal forma que la suma de los dos elementos de cada pareja sea exactamente la misma.

Sabiendo que uno de los problemas pertenece a la clase **L** y el otro pertenece a la clase **P**, identifique a qué clase de complejidad pertenece cada uno y demuestre formalmente su clasificación detallando el algoritmo utilizado y analizando su consumo de recursos.

**Resolución detallada:**

##### **1. El Problema A (La Mediana) pertenece a la Clase L**
Para demostrar que este problema se puede decidir en espacio logarítmico, diseñamos un algoritmo usando la misma máquina de Turing con cinta de entrada de solo lectura descrita anteriormente. Es fundamental **no copiar nunca la entrada en la cinta de trabajo**, ya que eso supondría gastar un espacio de tamaño lineal.

**Algoritmo y Justificación:**
*   La máquina primero cuenta el número total de elementos $n$. Si $n$ es par, rechaza automáticamente la entrada.
*   Si es impar, utiliza un contador $i$ para iterar por cada elemento del array, tratándolo como el "candidato a mediana".
*   Para cada candidato $Array[i]$, lanza un segundo bucle interno con un índice $j$ que recorre todo el conjunto. Durante este recorrido, utiliza dos contadores numéricos auxiliares: `C_menores` (que suma 1 si $Array[j] < Array[i]$) y `C_mayores` (que suma 1 si $Array[j] > Array[i]$).
*   Al finalizar el recorrido interno, si `C_menores` es exactamente igual a `C_mayores`, la máquina **acepta** (ha encontrado la mediana). Si no coinciden, reinicia los contadores y pasa al siguiente candidato con el índice $i$.
*   **Espacio:** La máquina solo ha utilizado 4 variables enteras ($i$, $j$, `C_menores` y `C_mayores`). Como sus valores están acotados por la longitud de la entrada $n$, cada una ocupa un espacio binario de $\lceil \log_2(n+1) \rceil$. Al utilizar un número fijo de contadores logarítmicos, el espacio total consumido es **$O(\log n)$**, justificando su pertenencia a **L**.

##### **2. El Problema B (Parejas de sumas iguales) pertenece a la Clase P**
Este problema no se puede resolver eficientemente en espacio $L$ sin alterar la entrada, por lo que demostraremos que pertenece a la clase **P** diseñando una Máquina de Turing determinista que lo resuelva en un tiempo acotado por un polinomio $O(n^c)$.

**Algoritmo y Justificación:**
*   **Paso 1:** La máquina ordena todos los elementos del array de menor a mayor. Los algoritmos de ordenación deterministas más eficientes toman un tiempo de **$O(n \log n)$**.
*   **Paso 2:** Por pura lógica matemática, para que todos los pares sumen lo mismo, el número más pequeño ($Array$) debe estar emparejado obligatoriamente con el número más grande ($Array[n]$). La máquina suma ambos extremos para obtener la única constante de "Suma Objetivo" posible: $S = Array + Array[n]$. Esto cuesta un tiempo constante $O(1)$.
*   **Paso 3:** La máquina emplea dos punteros (uno al inicio y otro al final) y los va moviendo hacia el centro del array paso a paso. En cada iteración suma los dos elementos a los que apuntan y verifica que su resultado sea exactamente igual a $S$. Este recorrido toma un tiempo lineal **$O(n)$**.
*   Si alguna pareja falla, **rechaza**. Si los punteros se cruzan en el centro y todas han sumado $S$, **acepta**. 
*   **Tiempo:** El paso de mayor coste es la ordenación ($O(n \log n)$). Como el tiempo global de ejecución está dominado por este paso y, por tanto, acotado superiormente por la función polinómica cuadrática genérica $O(n^2)$, queda formalmente demostrado que el problema pertenece a la clase **P**.


#### Ejercicio 3 (Cuestión Conceptual: El Óptimo del Viajante de Comercio)

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

#### Ejercicio 4 (Estructuras Anidadas y la restricción sin retroceso)

**Enunciado:**
Dada una cadena de entrada compuesta por dos tipos de paréntesis (por ejemplo, `()` y `[]`), demuestre que determinar si están correctamente emparejados y anidados pertenece a la clase L. Indique teóricamente por qué este problema requeriría obligatoriamente un espacio lineal $O(n)$ si la cabeza de lectura no tuviera permitido retroceder.

**Resolución detallada:**

**Parte 1: Pertenencia a la Clase L (Modelo estándar)**
Se utiliza una Máquina de Turing que dispone de una cinta de entrada de solo lectura **con capacidad para retroceder** (releer) y una cinta de trabajo separada. Para que la cadena de paréntesis múltiples sea válida, se deben verificar dos propiedades: el balance global de la cadena ignorando los tipos, y que cada cierre coincida en tipo con su apertura correspondiente en el anidamiento.

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

#### Ejercicio 5 (Cierre de la Clase NP para la Estrella de Kleene $L^*$)

**Enunciado del Simulacro:**
Demuestre, definiendo rigurosamente su certificado y su verificador, que si un lenguaje $L$ pertenece a la clase **NP**, entonces la clausura de Kleene $L^*$ también pertenece a **NP**.

**Resolución detallada:**
La definición de la estrella de Kleene $L^*$ establece que una palabra $x \in L^*$ si, y solo si, se puede particionar en $k$ trozos consecutivos ($w_1, w_2, \dots, w_k$) de forma que cada subpalabra o bloque $w_j$ pertenezca obligatoriamente al lenguaje original $L$.

**1. Hipótesis de partida:**
Dado que el enunciado nos garantiza que $L \in \text{NP}$, la teoría garantiza que existe un verificador determinista polinómico $V$ y que toda palabra válida cuenta con un certificado individual de tamaño polinómico acotado por un polinomio $q(|w|)$.

**2. El Diseño del Certificado para $L^*$ (El Súper-Certificado):**
Para demostrar que la palabra completa $x$ (de longitud $n$) pertenece a $L^*$, no cabe comprobarlo de golpe, por lo que el certificado aportado debe constar de dos elementos clave:
*   **Los puntos de partición (Cortes):** Una secuencia de índices $i_0 = 0 < i_1 < i_2 < \dots < i_k = n$ que delimitan exactamente dónde empieza y dónde termina cada trozo $w_j$ dentro de la palabra $x$.
*   **Las pruebas individuales:** Una lista de sub-certificados $(c_1, c_2, \dots, c_k)$, donde cada $c_j$ es el certificado individual que convence al verificador original de que ese trozo concreto $w_j \in L$.

**3. El Verificador Determinista $V^*$ para $L^*$:**
El algoritmo verificador recibe la entrada $x$ y el súper-certificado, operando de la siguiente manera:
1. Comprueba lógicamente que los índices de corte ($i_j$) están ordenados, no se solapan y cubren toda la longitud $n$.
2. Para cada subpalabra $w_j$ delimitada por los cortes, ejecuta el verificador original de la hipótesis: $V(w_j, c_j) == 1$.
3. Si el verificador devuelve "1" (Acepta) para todos y cada uno de los trozos, $V^*$ **acepta**. Si alguna subpalabra es rechazada, $V^*$ rechaza automáticamente.

**4. Justificación Matemática (El Cierre Polinómico):**
Para probar la pertenencia a NP, es preciso justificar que estos recursos no explotan exponencialmente:
*   **Tamaño del Súper-Certificado:** Como la palabra se puede partir como máximo en $n$ trozos de 1 carácter ($k \le n$), hay a lo sumo $n$ índices de corte, y cada índice requiere $O(\log n)$ bits. Por otro lado, la suma de las longitudes de todos los trozos es exactamente $n$ ($\sum |w_j| = n$). Dado que cada certificado individual $c_j$ está acotado por $q(|w_j|)$, el tamaño total de la suma de todos los certificados no superará $n \cdot q(n)$, lo cual es una medida estrictamente polinómica.
*   **Tiempo de Ejecución:** Comprobar los cortes toma tiempo lineal. La ejecución del verificador original $V$ es de coste polinómico y se llama, a lo sumo, $n$ veces. Como multiplicar un polinomio por $n$ da como resultado otro polinomio, el proceso entero requiere un tiempo determinista polinómico. 
*   **Conclusión:** Existe un certificado de tamaño polinómico evaluable en tiempo polinómico, por lo que queda demostrado que **$L^* \in \text{NP}$**.

---

#### Ejercicio 6 (Composición de Funciones)

**Enunciado del Simulacro:**
Evalúe el comportamiento de la clase de funciones exponenciales de la forma $\{k^n : k > 0\}$ bajo la composición polinómica por la izquierda $p(f(n))$ y por la derecha $f(p(n))$, asumiendo para la prueba que $p(n) = n^l$ ($l>0$). ¿Es la clase cerrada en ambos casos? Demuéstrelo matemáticamente.

**Resolución detallada:**
Para evaluar si la clase sobrevive o es "absorbida" bajo composición polinómica, se introduce la función genérica $p(n) = n^l$ (donde $l$ es una constante entera $\ge 2$ para evaluar el crecimiento no lineal).

**1. Composición polinómica por la izquierda $p(f(n))$:**
En este escenario, sustituimos la función completa dentro del polinomio, lo que equivale a elevar la función a una potencia constante $l$:
$$p(f(n)) = (k^n)^l$$
Por las propiedades de las potencias, multiplicamos los exponentes:
$$(k^n)^l = k^{n \cdot l} = (k^l)^n$$
Dado que $k$ y $l$ son dos valores constantes positivas, cabe definir una nueva constante $K = k^l$. Si sustituimos esto, nos queda la función $K^n$.
Como el resultado sigue teniendo la misma estructura exacta de una base constante elevada a $n$ ($K^n \in \{k^n\}$), la función no se ha salido de la familia. 
**Conclusión:** La familia exponencial de base constante **SÍ es cerrada** bajo la composición por la izquierda.

**2. Composición polinómica por la derecha $f(p(n))$:**
En este caso, se introduce el polinomio $n^l$ directamente como el argumento (la variable $n$) de la función exponencial, lo que se traduce en colocar el polinomio en el exponente:
$$f(p(n)) = k^{(n^l)}$$
Para $l \ge 2$, la expresión $k^{n^l}$ crece de forma dramáticamente más violenta que la clase base. Para que estuviera dentro de la familia original $\{k^n : k > 0\}$, tendría que existir alguna constante mágica enorme $K'$ tal que $k^{n^l} \le (K')^n$ para cualquier $n$ grande.
Sin embargo, es matemáticamente imposible acotar $k^{n^l}$ usando una función con exponente puramente lineal ($n$), ya que un grado de libertad adicional introducido en el exponente ($n^l$) "explota" superando a cualquier constante $K'$ que intentemos fijar en la base. 
**Conclusión:** La familia no contiene ninguna función capaz de dominar ese crecimiento masivo. Por lo tanto, la clase exponencial de base constante **NO es cerrada** bajo la composición por la derecha.


---

#### Pregunta 7 (Separación de Clases: $\text{NP} \neq \text{ESPACIO}(n)$)

**Enunciado:**
Demuestre formalmente que $\text{NP} \neq \text{ESPACIO}(n)$. Para ello, base su demostración en el comportamiento que tiene cada una de estas dos clases frente a las reducciones computables en espacio logarítmico ($L$-reducciones).

**Resolución detallada:**
Para demostrar matemáticamente que ambas clases no son iguales, no vamos a evaluar si una contiene a la otra, sino que emplearemos la táctica de buscar una propiedad estructural que una clase posea y la otra no. Dos clases idénticas tendrían las mismas propiedades; al diferir en al menos una, queda demostrado que son distintas. La propiedad a evaluar es la **clausura bajo reducciones en espacio logarítmico ($\propto_L$)**.

**Paso 1: Demostrar que NP sí es cerrada para L-reducciones.**
Decir que es cerrada significa que si $P_1 \propto_L P_2$ y $P_2 \in \text{NP}$, entonces obligatoriamente $P_1 \in \text{NP}$. 
Una reducción calculable en espacio logarítmico $O(\log n)$ puede alcanzar como máximo un número polinómico de configuraciones de memoria distintas ($2^{O(\log n)} = n^{O(1)}$) sin entrar en bucle infinito. Por tanto, cualquier reducción en espacio $L$ se ejecuta a lo sumo en tiempo polinómico. Al encadenar esta reducción polinómica con el verificador polinómico del problema $P_2$, el tiempo de cómputo global sigue siendo estrictamente polinómico, demostrando que **la clase NP es cerrada bajo estas reducciones**.

**Paso 2: Demostrar que ESPACIO(n) NO es cerrada para L-reducciones.**
Para este paso, nos apoyamos en el **Teorema de la Jerarquía de Espacio**, el cual garantiza que disponer de más memoria estricta nos permite resolver más problemas; en concreto: $\text{ESPACIO}(n) \subsetneq \text{ESPACIO}(n^2)$.
Gracias a esto, cabe fijar un problema testigo "muy difícil" $A$ tal que consta de forma absoluta que **$A \in \text{ESPACIO}(n^2)$ pero $A \notin \text{ESPACIO}(n)$**.

Se aplica ahora la técnica del **Padding** (Relleno). Se construye un lenguaje disfrazado $B$ añadiendo caracteres neutros `#` a la entrada original $x \in A$ hasta que el tamaño total de la nueva cadena sea el cuadrado de la original ($N = |x|^2$).
*   **$B \in \text{ESPACIO}(n)$:** Para que una máquina decida $B$, solo tiene que extraer $x$ y ejecutar el decididor original de $A$. Como este decididor consumía un espacio de $|x|^2$, y la entrada de ahora mide exactamente $N = |x|^2$, el espacio consumido respecto al nuevo tamaño es exactamente lineal $O(N)$.
*   **La reducción:** El proceso de transformar la entrada corta $x$ en la entrada gigante $x\#^{|x|^2 - |x|}$ consiste en ir contando caracteres, lo cual requiere apuntadores logarítmicos. Así que $A$ se reduce a $B$ en espacio $L$ ($A \propto_L B$).

**Conclusión final:**
Queda demostrado que $A \propto_L B$ y que $B \in \text{ESPACIO}(n)$. Si la clase $\text{ESPACIO}(n)$ fuera verdaderamente cerrada bajo estas reducciones, obligaría a que $A$ estuviera en $\text{ESPACIO}(n)$. Sin embargo, la Jerarquía de Espacio nos prohíbe esto ($A \notin \text{ESPACIO}(n)$). Para evitar esta contradicción matemática, la única salida es que **$\text{ESPACIO}(n)$ NO es cerrada**. Al diferir en esta propiedad fundamental, concluimos formalmente que **$\text{NP} \neq \text{ESPACIO}(n)$**.

---

#### Pregunta 8 (Tratabilidad Numérica de la Exponenciación Modular)

**Enunciado:**
Se desea probar que el problema de la Exponenciación Modular (determinar si $a^b \equiv c \pmod p$) pertenece a la clase **P**. Demuestre esta pertenencia detallando el algoritmo eficiente necesario, y justifique previamente por qué un enfoque de multiplicaciones sucesivas estándar tendría un coste exponencial respecto al tamaño de la entrada en bits.

**Resolución detallada:**
El problema exige demostrar que la decisión $a^b \equiv c \pmod p$ se puede computar en tiempo polinómico respecto a la longitud de la entrada. 

**1. Análisis de los recursos y la trampa del enfoque estándar:**
En la teoría de complejidad, el tamaño de la entrada $n$ representa la **cantidad total de bits** necesarios para almacenar los cuatro números ($a, b, c, p$) en la memoria de la máquina. 
Si decidiéramos abordar el problema con un bucle simple de fuerza bruta que multiplicase consecutivamente $a \cdot a \cdot a \dots$ dando tantas vueltas como indique el exponente $b$, caeríamos en una trampa exponencial. Dado que el tamaño de la entrada está en bits, el valor numérico del exponente $b$ puede ascender a un orden de magnitud enorme de hasta $2^n$. Por consiguiente, dar esa cantidad de vueltas requeriría efectuar un tiempo de ejecución exponencial **$O(2^n)$**, un coste inasumible para la clase P.

**2. El algoritmo eficiente (Exponenciación Binaria por Cuadrados Sucesivos):**
Para situar el problema en la clase **P**, es preciso evadir el valor gigante de $b$ y fijarnos únicamente en su longitud en bits. Diseñamos una Máquina de Turing determinista que emplea la **exponenciación binaria**:
*   La máquina reserva una variable acumuladora inicializada a 1 y recorre, uno a uno, los bits que componen el exponente $b$ (que son a lo sumo $n$ bits).
*   En cada paso (iteración del bucle), la máquina **eleva al cuadrado** su variable de base actual, aplicando la operación módulo $p$ inmediatamente para garantizar que el número resultante nunca supere el tamaño de la entrada (evitando desbordamientos de memoria).
*   Si el bit evaluado en esa vuelta es un `1`, la máquina además multiplica el acumulador por el valor actual y vuelve a aplicar el módulo $p$.
*   Al concluir el bucle por los bits, si el resultado contenido en el acumulador coincide exactamente con $c$, la máquina acepta. En caso contrario, rechaza.

**3. Justificación Matemática del Tiempo:**
A diferencia del caso exponencial, este bucle determinista da un número de iteraciones estrictamente equivalente a la cantidad de bits del exponente. Como el exponente es parte de la entrada, el bucle da a lo sumo $O(n)$ vueltas.
En el interior de cada ciclo, la máquina solo realiza multiplicaciones y divisiones enteras (el módulo) entre variables cuyo tamaño en bits está matemáticamente acotado. Dichas operaciones aritméticas básicas entre números de tamaño $n$ se pueden realizar eficientemente en tiempo $O(n^2)$. 
Por consiguiente, el tiempo total global del algoritmo es el producto del número de vueltas por el coste interno ($O(n) \cdot O(n^2)$), lo que resulta en un tiempo estrictamente acotado por un polinomio **$O(n^3)$**. Queda demostrado así formalmente que el problema se ubica dentro de la **clase P**.

---

#### Pregunta 9 (El Problema de la Factorización)

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
Para probar que el problema original pertenece a coNP, es preciso demostrar teóricamente que el problema complementario ("¿Es cierto que $x$ NO tiene divisores en el rango $1 < k < y$?") pertenece a la clase NP.
*   **Certificado para el NO:** Para refutar la existencia de divisores en ese rango, el certificado debe proporcionar la **descomposición completa en factores primos de $x$** ($x = p_1^{e_1} \cdot p_2^{e_2} \cdots p_m^{e_m}$). El elemento crucial de la demostración es que se debe adjuntar obligatoriamente el **Certificado de Pratt** para cada uno de los factores primos $p_i$ suministrados en la lista.
*   **Verificador:** Con este súper-certificado, la MTD ejecutará tres pasos deterministas:
    1. Multiplicará todos los factores de la lista para corroborar que el resultado general iguala exactamente a la entrada $x$.
    2. Validará irrefutablemente que cada uno de esos factores es primo comprobando la validez de sus respectivos Certificados de Pratt (cuyo formato formal sería, por ejemplo, $\text{Cert}(13) = \Big( \big(13 : 2 \ (2, 3)\big), \ \big(3 : 2 \ (2)\big) \Big)$). Esto se realiza en tiempo polinómico.
    3. Comprobará visualmente que todos y cada uno de los factores primos validados cumplen la condición de ser **mayores o iguales que $y$** ($p_i \ge y$).
*   **Justificación matemática:** El Teorema Fundamental de la Aritmética nos asegura que, si todos los componentes o "ladrillos" primos indivisibles de un número son estrictamente mayores o iguales que $y$, es algebraicamente imposible que combinándolos podamos construir un divisor compuesto menor que $y$. Dado que todo el proceso de validación opera en tiempo polinómico, el problema complementario está en NP.

**Conclusión:**
Como el problema original pertenece a NP y su complementario también (lo que lo ubica en coNP), el lenguaje queda clasificado lógicamente en la región **$\text{NP} \cap \text{coNP}$**.

---

#### Pregunta 10 (Problemas de Búsqueda y TFNP)

**Enunciado:**
Todo lenguaje $L$ arbitrario que pertenezca a la intersección $\text{NP} \cap \text{coNP}$ sugiere un problema de búsqueda de funciones. Defina dicho problema sugerido y demuestre teóricamente que pertenece a la clase TFNP (Total Functional NP).

**Resolución detallada:**
La clase **TFNP (Total Functional NP)** abarca problemas de búsqueda donde, además de operar con certificados polinómicos, existe una garantía matemática inquebrantable de que **siempre existirá al menos una solución válida** para cualquier entrada (la relación es total).

**1. Definición del problema sugerido:**
Sea un lenguaje arbitrario $L \in \text{NP} \cap \text{coNP}$. Por la definición de pertenencia simultánea a estas clases, se sabe que:
*   Al estar en NP, existe una Máquina de Turing verificadora polinómica $M_1$ que valida un certificado $c_1$ demostrando que $x \in L$.
*   Al estar en coNP (es decir, $\bar{L} \in \text{NP}$), existe otro verificador polinómico $M_2$ que evalúa un certificado $c_2$ demostrando que $x \notin L$.

Basándonos en esto, el problema de búsqueda que la intersección sugiere se define formalmente como:
*   *"Dada una cadena de entrada $x$, encontrar un objeto $c$ que actúe como un testigo comprobable de forma eficiente de que, o bien $x \in L$ (satisfaciendo a $M_1$), o bien $x \notin L$ (satisfaciendo a $M_2$)."*

**2. Demostración de pertenencia a TFNP:**
Para clasificar este problema en **TFNP**, es preciso validar las dos condiciones principales de la clase:

*   **Verificación polinómica (Condición FNP):** Tanto $c_1$ como $c_2$ son certificados cuya longitud en memoria está matemáticamente acotada por polinomios. Un algoritmo evaluador general puede simplemente recibir el certificado $c$ suministrado y ejecutar secuencialmente los verificadores $M_1$ y $M_2$ en tiempo polinómico para determinar si la solución cumple las condiciones del problema. Por tanto, es tratable en el esquema NP funcional.
*   **Totalidad garantizada (Condición T):** Para demostrar que la función nunca queda "indefinida", invocamos el principio lógico de la **Ley del bando excluido**. Para cualquier cadena $x$ que se introduzca como entrada, independientemente de su estructura, rige una dualidad estricta: **obligatoriamente se debe cumplir que $x \in L$ o que $x \notin L$**. Como forzosamente una de estas dos afirmaciones será una verdad matemática, la existencia del testigo (ya sea la solución $c_1$ que prueba el "Sí", o el testigo $c_2$ que prueba el "No") está garantizada para el $100\%$ de las instancias. Nunca existirá una entrada $x$ que carezca de solución. 

**Conclusión:**
Al haber construido un problema de búsqueda que es verificable algorítmicamente en tiempo polinómico y cuya solución está siempre garantizada mediante la totalidad lógica, concluimos que se inserta perfectamente en los márgenes teóricos de la clase **TFNP**.


---

#### Pregunta 11 (Completitud Funcional: FSAT)

**Enunciado:**
Demuestre formalmente, validando los dos pasos exigidos por la teoría de complejidad de funciones, que el problema **FSAT** (la versión de búsqueda que exige devolver la asignación de valores de verdad) es **FNP-completo**.

**Resolución detallada:**
Para demostrar que la versión de búsqueda funcional de SAT (FSAT) es completa para la clase FNP, es preciso justificar formalmente dos pasos: su pertenencia a la clase y su completitud (dificultad funcional).

**Paso 1: Demostrar que $\text{FSAT} \in \text{FNP}$**
Un problema pertenece a la clase de búsqueda FNP si la solución solicitada tiene un tamaño acotado y es verificable en tiempo polinómico:
1.  Dada una entrada formada por un conjunto de cláusulas lógicas $C$, el objeto solución que buscamos es una asignación de verdad $A$ (qué variables son Verdaderas y cuáles Falsas).
2.  La longitud en bits de esta asignación $A$ está estrictamente **acotada de forma lineal** por el número total de variables lógicas presentes en $C$. Por tanto, el tamaño de la solución cumple el requisito polinómico.
3.  El algoritmo verificador simplemente toma la asignación $A$ propuesta, sustituye los valores en las cláusulas de $C$ y evalúa las puertas lógicas. Esta comprobación se ejecuta eficientemente en **tiempo polinómico**. Al cumplir ambas propiedades, concluimos que $\text{FSAT} \in \text{FNP}$.

**Paso 2: Demostrar la completitud (FNP-dificultad)**
Es preciso probar que cualquier problema de búsqueda genérico $\Pi \in \text{FNP}$ puede ser reducido a FSAT operando en espacio logarítmico. A diferencia de los problemas de decisión, aquí hacen falta dos funciones (transformador de entrada $R$ y transformador de solución $S$):
1.  Por el **Teorema de Cook-Levin**, se sabe que la ejecución de cualquier Máquina de Turing No Determinista se puede traducir a un conjunto de cláusulas proposicionales (SAT) computándolo en espacio logarítmico. 
2.  La propiedad fundamental de esta reducción es que es **"constructiva respecto a las variables"**. Esto significa que, dentro de la enorme fórmula proposicional generada por la máquina, hay un pequeño grupo de variables lógicas que codifican y almacenan bit a bit la solución original del problema.
3.  Definimos el **transformador $R$** para que aplique Cook-Levin y convierta la entrada de $\Pi$ en cláusulas. A continuación, definimos el **transformador $S$** para que tome la asignación $A$ devuelta por FSAT, lea únicamente los valores V/F de esas variables constructivas clave, y traduzca esos bits para imprimir la solución exacta de $\Pi$. 
4.  Como ambos transformadores $R$ y $S$ son computables eficientemente y permiten que cualquier problema construya su solución a través de FSAT, queda demostrado que **FSAT es FNP-completo**.

---

#### Pregunta 12 (El Problema de los Spines / Red Feliz)

**Enunciado:**
Dado un grafo $G = (V, E)$ donde cada arista $(i,j)$ tiene asignada una fuerza de interacción $J_{ij} \ge 0$, y donde cada nodo tiene un spin $s_i \in \{-1, +1\}$. La energía total se define como $R(s) = -\sum_{(i,j)\in E} J_{ij} s_i s_j$. Demuestre analíticamente que el problema de determinar si existe una asignación tal que la energía sea menor o igual a una cota $K$ ($R(s) \le K$) se puede resolver en tiempo polinómico (**Clase P**).

**Resolución detallada:**
Para demostrar que este problema es tratable (Clase P), no cabe probar todas las combinaciones de spines (lo cual sería un tiempo exponencial $O(2^n)$), sino que es preciso realizar un análisis algebraico sobre la fórmula de la energía que explote el hecho de que todos los pesos son positivos o cero ($J_{ij} \ge 0$).

**1. Descomposición del Sumatorio:**
Al multiplicar los spines de los dos extremos de una arista ($s_i \cdot s_j$), los valores resultantes solo pueden ser dos:
*   Si ambos nodos tienen el **mismo signo** (por ejemplo, ambos $+1$ o ambos $-1$), su producto es positivo: $s_i s_j = 1$.
*   Si tienen **signos opuestos**, su producto es negativo: $s_i s_j = -1$.

Con esta premisa, cabe dividir el cálculo de la energía separando las aristas del grafo en esos dos conjuntos excluyentes:
$$R(s) = -\left( \sum_{s_i = s_j} J_{ij} - \sum_{s_i \neq s_j} J_{ij} \right)$$

**2. Sustitución Matemática:**
Definimos una constante universal $W$ equivalente a la suma total de todos los pesos del grafo: $W = \sum_{(i,j)\in E} J_{ij}$. 
Sabiendo que las aristas de igual signo equivalen al total menos las de distinto signo ($\sum_{s_i = s_j} J_{ij} = W - \sum_{s_i \neq s_j} J_{ij}$), lo sustituimos en la ecuación inicial:
$$R(s) = -\left( W - \sum_{s_i \neq s_j} J_{ij} - \sum_{s_i \neq s_j} J_{ij} \right) = -W + 2 \sum_{s_i \neq s_j} J_{ij}$$

**3. Condición de Decisión y Algoritmo Determinista:**
El problema nos pide evaluar si se puede cumplir que $R(s) \le K$, lo que matemáticamente equivale a despejar la nueva fórmula:
$$ \sum_{s_i \neq s_j} J_{ij} \le \frac{K + W}{2} $$
El sumatorio $\sum_{s_i \neq s_j} J_{ij}$ representa el coste de las aristas que conectan nodos con signos diferentes (el "peso del corte"). Como el enunciado garantiza que absolutamente todas las interacciones son nulas o positivas ($J_{ij} \ge 0$), **este sumatorio nunca puede ser negativo**.

Por tanto, el valor absoluto mínimo que puede alcanzar la energía se da cuando ese sumatorio vale exactamente $0$. El algoritmo para lograr este mínimo es trivial: **asignar a todos los nodos del grafo exactamente el mismo signo** (por ejemplo, todos $+1$). En este caso, la energía colapsa a su mínimo posible: **$-W$**.

**4. Conclusión (Pertenencia a P):**
Una Máquina de Turing determinista simplemente tiene que recorrer las aristas para sumar su peso total y calcular el valor extremo $-W$. Si $-W \le K$, acepta; si no, rechaza. Como la suma y la comparación de $n$ aristas es un proceso aritmético lineal evaluable en tiempo estrictamente polinómico, el problema **pertenece a la Clase P**.
