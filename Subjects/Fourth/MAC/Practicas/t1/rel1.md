# Ejercicio 1

### (a) Palabras sobre el alfabeto {0,1} con el mismo número de ceros que de unos

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

### (b) $$L = \{a^n b^n c^n | n \ge 1\}$$

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

### (c) $$\{ww^{-1} | w \in \{0, 1\}^*\}$$

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

### (d) $$\{wcw | w \in \{0, 1\}^*\}$$

**Base teórica:** Este es el lenguaje copia, un lenguaje que no es libre de contexto. El diseño de esta MT ilustra la técnica de "Múltiples pistas" o marcado de símbolos, donde el alfabeto de trabajo es un producto cartesiano. El documento de referencia proporciona el modelo exacto detallado para este caso.

**Diseño detallado (extraído de la demostración algorítmica formal):**
La MT asume un alfabeto de entrada **A = {0, 1, c}**. La idea fundamental radica en recordar el primer símbolo leído mediante el estado y verificar que coincida con el primer símbolo no marcado después del separador **c**.
1. **Marcar y recordar (q1):** Leemos el primer símbolo **a** (donde **a** puede ser 0 o 1), lo recordamos en el estado interno pasando a **[q2, a]**, lo marcamos como leído (escribiendo el equivalente a **[a, *]** en una pista virtual) y nos movemos a la derecha.
2. **Buscar el centro (q2):** En el estado **[q2, a]**, nos movemos hacia la derecha saltando **0**s y **1**s hasta encontrar el separador **c**. Al encontrarlo, cambiamos al estado **[q3, a]**.
3. **Buscar y comparar destino (q3):** En **[q3, a]**, saltamos todo lo que ya esté marcado a la derecha de **c**. Cuando encontremos el primer símbolo no marcado, verificamos que sea exactamente el símbolo **a** que la máquina recordó en el paso 1. Lo marcamos y pasamos al estado de retorno **[q4, #]**.
4. **Retorno (q4 a q6):** Nos movemos hacia la izquierda recorriendo todo hasta llegar a **c** (estado **q5**) y seguimos a la izquierda saltando los símbolos no marcados de la primera mitad hasta chocar con el símbolo que marcamos en el paso 1. Al encontrarlo, damos un paso a la derecha y volvemos a iniciar el ciclo en **q1**.
5. **Aceptación (q7 a q9):** Cuando en la primera fase encontramos directamente la **c**, verificamos que todos los símbolos a la derecha de la **c** también estén marcados. Si es así, la máquina acepta.

Te animo a trazar estos pasos con cadenas de prueba cortas (por ejemplo, **0011** para el primer problema, o **0c0** para el último) simulando las transiciones estado por estado. Esto consolidará definitivamente tu comprensión de la lógica interna de estos autómatas.

## Errores comunes en el apartado b

### 1. Fundamento Teórico: Ampliación del Alfabeto (Marcado de Símbolos)

En la teoría de autómatas, cuando necesitamos contabilizar o "tachar" un símbolo sin perder el espacio físico que ocupa en la cinta (para no destruir la contigüidad de los datos), recurrimos a una técnica conocida en textos clásicos (como Hopcroft y Ullman) como **ampliación del alfabeto de cinta** o el uso de **pistas múltiples**. 

En lugar de borrar el símbolo con un blanco general (`-` o `#`), lo reemplazamos por una versión "marcada" de sí mismo. Por ejemplo, si en tu Fase 1 conviertes el alfabeto original en $X, Y, Z$, en tu Fase 2 puedes "tachar" usando letras minúsculas: $x, y, z$. 

De este modo, el cabezal puede "caminar" sobre los símbolos tachados ($x, y, z$) sabiendo que ya fueron procesados, pero sin confundirlos jamás con el límite exterior de la cinta (`-`).

### 2. (Algunos errores) La Solución Detallada (Corrección de Fase 2)

Vamos a reescribir la Fase 2 de tu algoritmo utilizando $x, y, z$ como símbolos de tachado. Fíjate bien en cómo el estado de rebobinado (`q-rewind`) ahora funciona perfectamente.

* **Paso A: Iniciar el tachado en `q-verify`**
    El cabezal está sobre la primera $X$ disponible. La tachamos (escribiendo $x$) y vamos a buscar la $Y$.
    `q-verify X x r qeliminaY`

* **Paso B: Buscar y tachar la $Y$ en `qeliminaY`**
    Debemos saltar las $X$ que aún no hemos procesado y las $y$ que ya tachamos en ciclos anteriores.
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

### 3. La Condición de Parada (Aceptación)

Con este diseño, ¿qué ocurre cuando ya no quedan más $X$ que tachar? 
El cabezal, estando en `q-verify`, leerá una $y$ (la primera $Y$ que se tachó). Esto indica que se han agotado las $X$. Para que la MT acepte formalmente, debemos verificar que **solo** quedan símbolos tachados ($y$, $z$) hasta llegar al blanco (`-`), lo que demuestra que no sobraron letras.

Añadimos estas transiciones finales:
`q-verify y y r q-check-end`
`q-check-end y y r q-check-end` (salta todas las $y$)
`q-check-end z z r q-check-end` (salta todas las $z$)
`q-check-end - - * halt-accept` (Si llega al final y todo estaba tachado, la palabra es perfecta).

# Ejercicio 2

1.  **Almacenamiento de símbolo:** El conjunto de estados pasa a ser $Q' \times B$, permitiendo que la unidad de control "recuerde" un símbolo (el estado se denota como $[q, b]$).
2.  **Pistas Múltiples:** El alfabeto de trabajo de la cinta se define como $B^k$. Esto nos permite tener los datos intactos en una pista y utilizar otra pista exclusivamente para colocar marcas de control (ej. un símbolo sería $[a, *]$ o $[a, \#]$).
3.  **Subrutinas:** Definimos un conjunto de estados con un punto de entrada y uno de retorno para realizar tareas mecánicas repetitivas (como rebobinar o desplazar bloques) sin tener que reescribir la lógica.

La solución sería:

---

### (a) Palabras sobre el alfabeto {0,1} con el mismo número de ceros que de unos

**Técnica aplicada:** Pistas múltiples + Almacenamiento de símbolo.

En el diseño original, "ensuciábamos" la cinta sobrescribiendo con $X$ e $Y$. Ahora, utilizaremos una cinta de dos pistas. La pista superior tendrá los datos y la inferior las marcas (usaremos $*$ para "emparejado" y $\#$ para "no procesado"). El alfabeto será $B = \{0, 1, \#\} \times \{\#, *\}$. Además, almacenaremos en el estado el símbolo que buscamos.

**Lógica del programa:**
1.  **Inicio y Memorización:** La máquina lee el primer símbolo no marcado, por ejemplo, $[0, \#]$. Lo marca en la segunda pista escribiendo $[0, *]$ y "guarda" en su estado finito el símbolo complementario que debe buscar (el $1$) transitando al estado $[q_{buscar}, 1]$.
2.  **Búsqueda (Subrutina):** En el estado $[q_{buscar}, 1]$, el cabezal avanza a la derecha ignorando cualquier símbolo que ya esté marcado en la segunda pista $[*, *]$ y saltando también los de la misma clase no marcados $[0, \#]$.
3.  **Emparejamiento:** Al encontrar el símbolo complementario $[1, \#]$, lo marca escribiendo $[1, *]$.
4.  **Rebobinado (Subrutina):** Llama a una subrutina estándar que retrocede a la izquierda hasta encontrar el límite o el último símbolo procesado, y reinicia el ciclo principal.

---

### (b) $L = \{a^n b^n c^n \mid n \ge 1\}$

**Técnica aplicada:** Pistas múltiples (Multipista) y Subrutinas.

Al igual que en el caso anterior, evitaremos borrar las letras originales para mantener la integridad de los datos, usando el alfabeto $B = \{a, b, c, \#\} \times \{\#, *\}$.

**Lógica del programa:**
1.  **Marcar A:** Leemos $[a, \#]$, escribimos $[a, *]$ y pasamos a la subrutina `BUSCAR_B`.
2.  **Subrutina `BUSCAR_B`:** Avanzamos a la derecha. Podemos ver $[a, \#]$ (otras $a$ pendientes), $[a, *]$ ($a$ ya procesadas) o $[b, *]$ ($b$ ya procesadas de ciclos anteriores). Saltamos todas ellas. Al leer la primera $[b, \#]$, la marcamos como $[b, *]$ y pasamos a `BUSCAR_C`.
3.  **Subrutina `BUSCAR_C`:** Saltamos las $[b, \#]$ restantes y las $[c, *]$ ya procesadas. Al leer la primera $[c, \#]$, la marcamos como $[c, *]$ y pasamos a la subrutina `REBOBINAR`.
4.  **Subrutina `REBOBINAR`:** Nos movemos hacia la izquierda incondicionalmente hasta encontrar la última $[a, *]$ que marcamos. Damos un paso a la derecha y reiniciamos el ciclo.

---

### (c) $\{ww^{-1} \mid w \in \{0, 1\}^*\}$ (Palíndromos pares)

**Técnica aplicada:** Almacenamiento de símbolo en el estado.

En tu diseño clásico, necesitabas bifurcar tu programa completamente: una rama entera de estados para procesar si leías un $0$, y otra rama entera si leías un $1$. La técnica de almacenamiento de símbolo compacta esto drásticamente.

**Lógica del programa:**
1.  Definimos los estados como $[q, \sigma]$ donde $\sigma \in \{0, 1, \#\}$.
2.  **Leer y Recordar:** En el estado inicial $[q_0, \#]$, leemos un símbolo $a \in \{0,1\}$, lo sobrescribimos con un blanco $\#$ (o lo marcamos), y lo "cargamos" en el estado pasando a $[q_{buscar\_fin}, a]$.
3.  **Avanzar:** La transición genérica $\delta([q_{buscar\_fin}, a], b) = ([q_{buscar\_fin}, a], b, D)$ (para cualquier $b$) nos lleva al final de la palabra. Al chocar con el blanco, retrocedemos un paso a la izquierda pasando a $[q_{verificar}, a]$.
4.  **Verificación Mágica:** Aquí ocurre la elegancia técnica. Definimos la transición $\delta([q_{verificar}, a], a) = ([q_{rebobinar}, \#], \#, I)$. Esta única regla obliga matemáticamente a que el símbolo en la cinta coincida con el $a$ que guardamos en nuestro estado. Si no coincide, la MT no tiene transición y rechaza inmediatamente.

---

### (d) $\{wcw \mid w \in \{0, 1\}^*\}$

**Técnica aplicada:** Almacenamiento de símbolo + Pistas Múltiples.

Este es el ejemplo canónico que se resuelve de forma oficial en el material de clase (Tema 1, diapositivas 53 a 58). Utiliza el alfabeto $B = \{0, 1, c, \#\} \times \{\#, *\}$ y estados formados por la tupla $Q' \times \{0, 1, \#\}$.

**Lógica del programa (extraída del modelo formal):**
1.  **Fase de memorización:** Leemos el primer símbolo no marcado $a$ (que será $0$ o $1$), lo registramos en la unidad de control cambiando al estado $[q_2, a]$, lo marcamos en la cinta escribiendo $[a, *]$ y nos movemos a la derecha.
2.  **Transición al segundo bloque:** En el estado $[q_2, a]$, avanzamos hacia la derecha hasta que detectamos el separador central `c` (representado como $[c, \#]$), momento en el que transitamos a $[q_3, a]$.
3.  **Comprobación de identidad:** En $[q_3, a]$, saltamos todos los símbolos que ya tengan la marca `*` en la segunda pista. Cuando encontramos el primer símbolo no marcado, exigimos mediante la función de transición que coincida exactamente con el símbolo $a$ almacenado en nuestro estado. Si coincide, lo marcamos escribiendo $[a, *]$ y pasamos al estado de retorno $[q_4, \#]$.
4.  **Retorno guiado:** Rebobinamos hacia la izquierda cruzando la `c` (pasando a $q_5$) y seguimos hasta encontrar un símbolo marcado $[a, *]$ del primer bloque. Damos un paso a la derecha hacia el nuevo símbolo no marcado, cambiamos al estado inicial $[q_1, \#]$ y repetimos.

# Ejercicio 3

Para este problema, el requerimiento nos impone una restricción muy estricta: el alfabeto de trabajo es únicamente $B = \{0, 1, \#\}$. Esto significa que **no podemos usar pistas múltiples ni símbolos especiales de marcado** (como $X$ o $Y$) para recordar dónde empezamos. 

### 1. Fundamentos Teóricos: "Acarreo" y Almacenamiento de Símbolo

Para solucionar este desafío, debemos aplicar la técnica de **almacenamiento de símbolo en el estado** (recordando el símbolo leído en la unidad de control). La estrategia algorítmica es un "acarreo" (shift) en cadena:
1. Leemos el símbolo actual, lo borramos (escribiendo un blanco $\#$) y lo "guardamos" en nuestro estado.
2. Nos movemos a la derecha. Leemos el siguiente símbolo, escribimos el que traíamos guardado, y guardamos el nuevo.
3. Repetimos hasta encontrar el primer blanco $\#$. Allí depositamos el último símbolo que traíamos.
4. Retrocedemos a la izquierda hasta chocar con el blanco $\#$ que dejamos en el paso 1. ¡Esa es nuestra posición original garantizada! 

### 2. Diseño Detallado de las Transiciones

Asumiremos que los movimientos posibles son **D** (Derecha) e **I** (Izquierda). Vamos a definir los estados de nuestra subrutina:

* **Estado inicial de la subrutina:** $q_{inicio}$
* **Estados de acarreo:** $q_{lleva\_0}$ y $q_{lleva\_1}$
* **Estado de rebobinado:** $q_{retorno}$
* **Estado final de la subrutina (punto de salida):** $q_{fin}$

**Fase 1: Extraer el primer símbolo y dejar el hueco**
Si leemos un $0$ o un $1$, lo guardamos pasando al estado correspondiente, dejamos un $\#$ para marcar nuestro punto de retorno, y avanzamos a la derecha. Si leemos $\#$, no hay nada que desplazar y terminamos directamente.
* $\delta(q_{inicio}, 0) = (q_{lleva\_0}, \#, D)$
* $\delta(q_{inicio}, 1) = (q_{lleva\_1}, \#, D)$
* $\delta(q_{inicio}, \#) = (q_{fin}, \#, S)$ *(Nota: Si la MT permite el movimiento estático **S**, nos quedamos ahí; si no, la subrutina simplemente asume que ya está en la posición correcta).*

**Fase 2: El desplazamiento en cadena (Acarreo)**
En estos estados, soltamos el símbolo que traemos, recogemos el que está en la cinta para nuestro próximo estado, y avanzamos a la derecha.
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


