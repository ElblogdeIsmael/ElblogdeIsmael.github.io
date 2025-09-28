\part{Teoría}

# Introducción

- Profesor: Serafín Moral  
- Correo: smc@decsai.ugr.es  
- El profesor recomienda ir a las tutorías y avisarle antes.  
- J.E. Hopcroft, J.D. Ullman, Introduction to Automata Theory, Languages and Computation. Addison-Wesley (1979): un libro básico, se requiere ciertos conocimientos matemáticos para leerlo.  
- M. Alfonseca, J. Sancho. M. Martínez, Teoría de Autómatas y Lenguajes Formales. Publicaciones R.A.E.C., Textos Cátedra (1997): básico y fácil de entender, está en la biblioteca en español.  
- Los demás son una buena opción también.

La asignatura de Modelos de Computación se centra en el estudio de los fundamentos teóricos de la informática, explorando conceptos como autómatas, lenguajes formales, gramáticas y máquinas de Turing. Estos temas proporcionan las bases para comprender las capacidades y limitaciones de los sistemas computacionales, así como para analizar la complejidad de los problemas y los algoritmos que los resuelven. Es una materia esencial para quienes deseen profundizar en la teoría de la computación y su aplicación en el diseño de sistemas eficientes y correctos.

# Introducción a la Computación 

En el pasado, había teoremas que eran verdad, pero las matemáticas no eran capaces de demostrarlo. Turing puso solución a esto exponiendo que esta incompletitud de las matemáticas se corregía diciendo que este tipo de problemas eran indecidibles. En cuanto a la complejidad de los algoritmos, como vimos en algorítmica, podemos distinguir entre p (polinómico) y np (polinómico no determinista). Dentro de np, encontramos los np completos y los np difíciles (problemas que no puede resolver un ordenador convencional). Hoy día lo más importante es la complejidad algorítmica. Nadie ha demostrado que p sea distinto de np.

## Problema de la parada

Trata el tema de la existencia de que un programa que lea otro programa y unos datos y nos diga si este termina o cicla indefinidamente. Un programa es lo mismo que los datos, según Turing. En este caso, se pone como datos del programa el mismo programa.


```python
If Stops(P, P) GOTO L
```

Este programa lleva a una contradicción, ya que si termina no termina y si termina termina, cosa que no es coherente. Por ende, podemos concluir que si un programa se llama así mismo, en este caso, llegamos a una contradicción. Turing, con esto, llegó a la conclusión de que las matemáticas eran incompletas, ya que este programa no existe. La explicación es sencilla, basta con decir que es como un espejo, nunca va a pasar STOP ya que si eso pasa el programa nunca arrancaría.

## Definiciones

<!-- - Alfabeto: conjunto finito, sus elementos se llaman símbolos o letras. Si tenemos símbolos con varios elementos se denotan entre < >.  
- Palabra: Es una sucesión finita de elementos del conjunto A  $u=a_1...a_n$ donde $a_i \in A, \forall i = 1,\ldots,n$.
- El conjunto de todas las palabras sobre un alfabeto $A$ se denota como $A^*$.
- Notación: Palabras: $u, v, x, y, z, \ldots$
- Si $u \in A^*$, entonces la longitud de la palabra $u$ es el número de símbolos de $A$ que contiene.  
    - Notación: $\lvert u \rvert$
    - Si $u = a_1 \ldots a_n$, entonces $\lvert u \rvert = n$.
- La palabra vacía es la palabra de longitud cero.  
    - Notación: $\varepsilon$
- Notación: El conjunto de cadenas sobre un alfabeto $A$ excluyendo la cadena vacía se denota como $A^+$. -->

\begin{definicion}
\textbf{Alfabeto}: Un alfabeto es un conjunto finito cuyos elementos se denominan símbolos o letras. Si los símbolos tienen varios elementos, se representan entre $\langle \rangle$.  
\end{definicion}

\begin{definicion}
\textbf{Palabra}: Una palabra es una sucesión finita de elementos de un alfabeto $A$. Formalmente, $u = a_1 a_2 \ldots a_n$, donde $a_i \in A$ para todo $i = 1, \ldots, n$.  
\end{definicion}

\begin{definicion}
\textbf{Conjunto de Palabras}: El conjunto de todas las palabras que se pueden formar sobre un alfabeto $A$ se denota como $A^*$.  
\end{definicion}

\begin{definicion}
\textbf{Notación de Palabras}: Las palabras se denotan comúnmente como $u, v, x, y, z, \ldots$.  
\end{definicion}

\begin{definicion}
\textbf{Longitud de una Palabra}: Si $u \in A^*$, la longitud de la palabra $u$ es el número de símbolos de $A$ que contiene.  
\begin{itemize}
    \item Notación: $\lvert u \rvert$  
    \item Si $u = a_1 a_2 \ldots a_n$, entonces $\lvert u \rvert = n$.  
\end{itemize}
\end{definicion}

\begin{definicion}
\textbf{Palabra Vacía}: La palabra vacía es la palabra de longitud cero.  
\begin{itemize}
    \item Notación: $\varepsilon$  
\end{itemize}
\end{definicion}

\begin{definicion}
\textbf{Conjunto de Palabras no Vacías}: El conjunto de cadenas sobre un alfabeto $A$ excluyendo la palabra vacía se denota como $A^+$.  
\end{definicion}

## Operaciones: Concatenación

\begin{definicion}
\textbf{Concatenación de Palabras}: Si $u, v \in A^*$, $u = a_1 \ldots a_n$, $v = b_1 \ldots b_m$, se llama concatenación de $u$ y $v$ a la cadena $u.v$ (o simplemente $uv$) dada por $a_1 \ldots a_n b_1 \ldots b_m$.
\end{definicion}

\begin{ejemplo}
Si $u = 011$, $v = 1010$, entonces $uv = 0111010$.
\end{ejemplo}

**Propiedades**  

1. $\lvert u.v \rvert = \lvert u \rvert + \lvert v \rvert$, $\forall u, v \in A^*$  
2. **Asociativa**: $u.(v.w) = (u.v).w$, $\forall u, v, w \in A^*$  
3. **Elemento Neutro**: $u.\varepsilon = \varepsilon.u = u$, $\forall u \in A^*$  

\begin{definicion}
\textbf{Monoide}: Un monoide es una estructura algebraica $(M, \cdot, e)$ que consta de un conjunto $M$, una operación binaria asociativa $\cdot : M \times M \to M$, y un elemento neutro $e \in M$ tal que:  
1. Asociatividad: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$, $\forall a, b, c \in M$.  
2. Elemento Neutro: $a \cdot e = e \cdot a = a$, $\forall a \in M$.  
\end{definicion}

**Estructura de monoide**  
La concatenación de palabras sobre un alfabeto $A$ junto con la palabra vacía $\varepsilon$ forma un monoide.



## Prefijos, Sufijos y subcadenas

\begin{definicion}
\textbf{Prefijo}: Si $u \in A^*$, entonces $v$ es un prefijo de $u$ si $\exists z \in A^*$ tal que $vz = u$.  
Un prefijo $v$ de $u$ se dice propio si $v \neq \varepsilon$ y $v \neq u$.  
\end{definicion}

\begin{definicion}
\textbf{Sufijo}: Si $u \in A^*$, entonces $v$ es un sufijo de $u$ si $\exists z \in A^*$ tal que $zv = u$.  
Un sufijo $v$ de $u$ se dice propio si $v \neq \varepsilon$ y $v \neq u$.  
\end{definicion}

\begin{definicion}
\textbf{Subcadena}: Si $u \in A^*$, entonces $v$ es una subcadena de $u$ si $\exists z_1, z_2 \in A^*$ tal que $z_1vz_2 = u$.  
Una subcadena $v$ de $u$ se dice propia si $v \neq \varepsilon$ y $v \neq u$.  
\end{definicion}

## Iteración y Palabra Inversa

\begin{definicion}
\textbf{Iteración de una Cadena}: La iteración n-ésima de una cadena ($u^n$) se define como la concatenación de la cadena consigo misma $n$ veces.  
Si $u \in A^*$, entonces:  
\begin{itemize}
    \item $u^0 = \varepsilon$  
    \item $u^{i+1} = u^i.u$, $\forall i \geq 0$  
\end{itemize}
\end{definicion}

\begin{ejemplo}
Si $u = 010$, entonces $u^3 = 010010010$.
\end{ejemplo}

\begin{definicion}
\textbf{Palabra Inversa}: Si $u = a_1 \ldots a_n \in A^*$, entonces la palabra inversa de $u$ es la cadena $u^{-1} = a_n \ldots a_1 \in A^*$.  
\end{definicion}

\begin{ejemplo}
Si $u = 011$, entonces la palabra inversa de $u$ es $u^{-1} = 110$.
\end{ejemplo}

## Lenguajes 

\begin{definicion}
\textbf{Lenguaje}: Un lenguaje sobre un alfabeto $A$ es un subconjunto del conjunto de las cadenas sobre $A$, es decir, $L \subseteq A^*$.  
La palabra vacía siempre pertenece a un lenguaje.
\end{definicion}

**Notación**  
\begin{itemize}
    \item Lenguajes: $L, M, N, \ldots$
\end{itemize}

\begin{ejemplo}
    \begin{enumerate}
        \item $L_1 = \{a, b, \varepsilon\}$  
        \item $L_2 = \{a^i b^i \mid i = 0, 1, 2, \ldots\}$  
        \item $L_3 = \{u u^{-1} \mid u \in A^*\}$  
        \item $L_4 = \{a^{n^2} \mid n = 1, 2, 3, \ldots\}$  
    \end{enumerate}
\end{ejemplo}

### Ejemplos Adicionales de Lenguajes

1. $L_5 = \{a^n b^m c^k \mid n, m, k \geq 0\}$: Palabras con cualquier número de $a$, $b$, y $c$ en ese orden.  
2. $L_6 = \{w \in \{0, 1\}^* \mid w \text{ tiene un número par de } 1\}$: Palabras binarias con un número par de unos.  
3. $L_7 = \{a^n b^n c^n \mid n \geq 0\}$: Palabras con el mismo número de $a$, $b$, y $c$ en ese orden.  
4. $L_8 = \{w \in \{0, 1\}^* \mid w \text{ es un palíndromo}\}$: Palabras binarias que son palíndromos.  
5. $L_9 = \{a^{2^n} \mid n \geq 0\}$: Sucesiones de $a$ cuya longitud es una potencia de dos.  

### Conjuntos Numerables  

Un conjunto se dice numerable si existe una aplicación inyectiva (corresponde cada elemento con su imagen) de este conjunto en el conjunto de los números naturales, o lo que es lo mismo, se le puede asignar un número natural a cada elemento del conjunto de tal manera que dos elementos distintos tengan números distintos.
 
\begin{ejemplo}
$A^*$ es siempre numerable. Si $A = \{a_1, \ldots, a_n\}$, entonces puedo asignar un número binario distinto de 0 y de la misma longitud a cada $a_i$ de tal manera que símbolos distintos reciben números distintos, y a cada palabra $b_1 \ldots b_k$ se le asigna el número cuya representación en binario es el que se obtiene sustituyendo cada $b_i$ por su número binario.  

\textit{Ejemplo}: Si $A = \{a, b\}$, podemos asignar $a = 01$, $b = 10$. Entonces, para la palabra $ab$, su representación binaria sería $0110$.  
\end{ejemplo}

\begin{ejemplo}
El conjunto de programas bien escritos en C es numerable. Esto se debe a que los programas son cadenas finitas de un alfabeto finito, y por lo tanto, se pueden enumerar de manera similar a las palabras en $A^*$.  
\end{ejemplo}

El hecho de que en el ordenador se trabaje con float, double, … es porque como los números reales son conjuntos no numerables, un solo número real acabaría con toda la memoria del ordenador. Lo mismo pasa en los lenguajes, debemos de restringirnos a los lenguajes con los que podamos trabajar. Solo existe un conjunto numerable de programas.

## Un Conjunto No Numerable

\begin{ejemplo}
El conjunto de lenguajes sobre $A^*$ (si $A$ no es vacío) nunca es numerable.  
\end{ejemplo}

Haremos la demostración por reducción al absurdo.  
\begin{demostracion}
Si lo fuese, se podría asignar un número natural distinto $f(L)$ a cada lenguaje $L$.  

Sea $a \in A$.  
Definamos el lenguaje $L$ formado por palabras de la forma $a^i$ de acuerdo a lo siguiente: para cada $i$ número natural:  
\begin{itemize}
    \item Si este número no es de un lenguaje, entonces $a^i \in L$.  
    \item Si este número es del lenguaje $M$ ($i = f(M)$):  
        \begin{itemize}
            \item Si $a^i \notin M$, entonces $a^i \in L$.  
            \item Si $a^i \in M$, entonces $a^i \notin L$.  
        \end{itemize}
\end{itemize}

$L$ no puede tener ningún número asociado. Si fuese $j = f(L)$, entonces la pertenencia de $a^j$ a $L$ es contradictoria:  
\begin{itemize}
    \item Si $a^j \in L$ como $j = f(L)$, entonces $a^j \notin L$.  
    \item Si $a^j \notin L$ y $j = f(L)$, entonces $a^j \in L$.  
\end{itemize}

Por lo tanto, el conjunto de lenguajes sobre $A^*$ no es numerable.  
\end{demostracion}

## Operaciones con Lenguajes: Concatenación

Dada su condición de conjuntos, además de las operaciones de unión, intersección y complementario, los lenguajes también admiten la operación de concatenación.

Si $L_1, L_2$ son dos lenguajes sobre el alfabeto $A$, la concatenación de estos dos lenguajes se define como:

$$
L_1L_2 = \{u_1u_2 \mid u_1 \in L_1, u_2 \in L_2\}
$$

\begin{ejemplo}
Si $L_1 = \{0^i1^i \mid i \geq 0\}$ y $L_2 = \{1^j0^j \mid j \geq 0\}$, entonces:

$$
L_1L_2 = \{0^i1^i1^j0^j \mid i, j \geq 0\}
$$
\end{ejemplo}


## Propiedades de la Concatenación de Lenguajes

1. **Propiedad de Aniquilación**  
    $$L \emptyset = \emptyset L = \emptyset$$  

2. **Elemento Neutro**  
    $$\{\varepsilon\}L = L\{\varepsilon\} = L$$  

3. **Asociatividad**  
    $$L_1(L_2L_3) = (L_1L_2)L_3$$  

## Iteración de Lenguajes y Clausura de Kleene

La iteración de lenguajes se define de forma recursiva:  

- $L^0 = \{\varepsilon\}$  
- $L^{i+1} = L^iL$, $\forall i \geq 0$  

Si $L$ es un lenguaje sobre el alfabeto $A$, se definen las siguientes clausuras:  

- **Clausura de Kleene**:  
    $$
    L^* = \bigcup_{i \geq 0} L^i
    $$

- **Clausura Positiva**:  
    $$
    L^+ = \bigcup_{i \geq 1} L^i
    $$

\begin{ejemplo}
Si $L = \{a, b\}$:  
\begin{itemize}
    \item $L^0 = \{\varepsilon\}$  
    \item $L^1 = \{a, b\}$  
    \item $L^2 = \{aa, ab, ba, bb\}$  
    \item $L^* = \{\varepsilon, a, b, aa, ab, ba, bb, \ldots\}$  
    \item $L^+ = \{a, b, aa, ab, ba, bb, \ldots\}$  
\end{itemize}
\end{ejemplo}

## Operaciones con Lenguajes: Propiedades de Clausuras

1. **Relación entre Clausura de Kleene y Clausura Positiva**  
    - Si $\varepsilon \in L$, entonces $L^+ = L^*$.  
    - Si $\varepsilon \notin L$, entonces $L^+ = L^* \setminus \{\varepsilon\}$.  

\begin{ejemplo}
Si $L = \{0, 01\}$:  
    \begin{itemize}
        \item $L^* =$ Conjunto de palabras sobre $\{0, 1\}$ en las que un $1$ siempre va precedido de un $0$.  
        \item $L^+ =$ Conjunto de palabras sobre $\{0, 1\}$ en las que un $1$ siempre va precedido de un $0$ y distintas de la palabra vacía.  
    \end{itemize}
\end{ejemplo}


## Lenguaje Inverso

\begin{definicion}
\textbf{Lenguaje Inverso}: El lenguaje inverso de un lenguaje $L$ sobre un alfabeto $A$ se define como:

$$
L^{-1} = \{u \mid u^{-1} \in L\}
$$
\end{definicion}

\begin{ejemplo}
Si $L = \{011, 101\}$, entonces:

$$
L^{-1} = \{110, 101\}
$$
\end{ejemplo}

**Propiedades**  

1. $(L^{-1})^{-1} = L$  
2. $(L_1 \cup L_2)^{-1} = L_1^{-1} \cup L_2^{-1}$  
3. $(L_1L_2)^{-1} = L_2^{-1}L_1^{-1}$  
4. $(L^*)^{-1} = (L^{-1})^*$  

## Cabecera de un Lenguaje
\begin{definicion}
\textbf{Cabecera de un Lenguaje}: La cabecera de un lenguaje $L$ sobre un alfabeto $A$ se define como:

$$
\text{CAB}(L) = \{u \mid u \in A^* \text{ y } \exists v \in A^* \text{ tal que } uv \in L\}
$$
\end{definicion}


\begin{ejemplo}
Si $L = \{0^i1^i \mid i \geq 0\}$, entonces:

$$
\text{CAB}(L) = \{0^i1^j \mid i \geq j \geq 0\}
$$
\end{ejemplo}


## Homomorfismos entre Alfabetos

\begin{definicion}
Si $A_1$ y $A_2$ son dos alfabetos, una aplicación $h : A_1^* \to A_2^*$ se dice que es un \textbf{homomorfismo} si y solo si:

$$
h(uv) = h(u)h(v), \quad \forall u, v \in A_1^*
$$

La transformación de uv debe de ser igual a la concatenación de la transformación de u y la transformación de v.
\end{definicion}

### Consecuencias de la Definición

1. **Imagen de la palabra vacía**  
    $$
    h(\varepsilon) = \varepsilon
    $$

2. **Imagen de una palabra**  
    Si $u = a_1a_2 \ldots a_n \in A_1^*$, entonces:
    $$
    h(u) = h(a_1)h(a_2) \ldots h(a_n)
    $$

\begin{ejemplo}
    \textbf{Ejemplo de Homomorfismo}

    Sea $A_1 = \{a, b\}$ y $A_2 = \{0, 1\}$. Definimos $h : A_1^* \to A_2^*$ como:

    \begin{itemize}
        \item $h(a) = 01$
        \item $h(b) = 10$
    \end{itemize}

    Entonces:

    \begin{itemize}
        \item $h(\varepsilon) = \varepsilon$
        \item $h(ab) = h(a)h(b) = 0110$
        \item $h(aba) = h(a)h(b)h(a) = 010110$
    \end{itemize}
\end{ejemplo}

### Propiedades de Homomorfismos

1. **Preservación de la Concatenación**  
    $$
    h(u.v) = h(u)h(v), \quad \forall u, v \in A_1^*
    $$

2. **Homomorfismo Inverso**  
    Si $h : A_1^* \to A_2^*$ es un homomorfismo, entonces:
    $$
    h(u^{-1}) = h(u)^{-1}, \quad \forall u \in A_1^*
    $$

3. **Composición de Homomorfismos**  
    Si $h_1 : A_1^* \to A_2^*$ y $h_2 : A_2^* \to A_3^*$ son homomorfismos, entonces su composición $h_2 \circ h_1 : A_1^* \to A_3^*$ también es un homomorfismo.

\begin{ejemplo}
    \textbf{Ejemplo de Composición}  
    Sea $h_1 : A_1^* \to A_2^*$ y $h_2 : A_2^* \to A_3^*$ definidos como:

    \begin{itemize}
        \item $h_1(a) = 01$
        \item $h_1(b) = 10$
        \item $h_2(0) = x$
        \item $h_2(1) = y$
    \end{itemize}

    Entonces, para $u = ab \in A_1^*$:

    \begin{itemize}
        \item $h_1(u) = 0110$
        \item $h_2(h_1(u)) = h_2(0110) = xyxy$
    \end{itemize}
\end{ejemplo}


## Gramática Generativa
\begin{definicion}
Una gramática generativa es una cuádrupla $(V, T, P, S)$ donde:

\begin{itemize}
    \item \textbf{$V$}: Es un alfabeto llamado de variables o símbolos no terminales. Sus elementos se suelen representar con letras mayúsculas.
    \item \textbf{$T$}: Es un alfabeto llamado de símbolos terminales. Sus elementos se suelen representar con letras minúsculas.
    \item \textbf{$P$}: Es un conjunto finito de pares $(\alpha, \beta)$, llamados reglas de producción, donde $\alpha, \beta \in (V \cup T)^*$ y $\alpha$ contiene al menos un símbolo de $V$.
        \begin{itemize}
            \item El par $(\alpha, \beta)$ se suele representar como $\alpha \to \beta$.
        \end{itemize}
    \item \textbf{$S$}: Es un elemento de $V$, llamado símbolo de partida.
\end{itemize}
\end{definicion}

Tiene la misma potencia que un lenguaje, por ende, podemos pensar que es similar a un lenguaje de programación aunque pensemos que no.


\begin{ejemplo}
Sea la gramática $G = (V, T, P, S)$ definida como:  
    \begin{itemize}
        \item $V = \{S, A\}$  
        \item $T = \{a, b\}$  
        \item $P = \{S \to aA, A \to b\}$  
        \item $S = S$  
    \end{itemize}
\end{ejemplo} 

Esta gramática genera el lenguaje $L = \{ab\}$.  

## Lenguaje Generado: Idea Intuitiva

Una gramática sirve para determinar un lenguaje. Las palabras generadas pertenecen al conjunto de símbolos terminales $T^*$ y se obtienen a partir del símbolo inicial efectuando pasos de derivación. Cada paso consiste en elegir una parte de la palabra que coincide con la parte izquierda de una producción y sustituir esa parte por la derecha de la misma producción.

\begin{ejemplo}
    Dada la gramática:

    \begin{itemize}
        \item $E \to E + E$
        \item $E \to E * E$
        \item $E \to (E)$
        \item $E \to a$
        \item $E \to b$
        \item $E \to c$
    \end{itemize}

    Derivación de una palabra:

    $$
    E \Rightarrow E * E \Rightarrow (E) * E \Rightarrow (E + E) * E \Rightarrow (a + E) * E \Rightarrow (a + b) * E \Rightarrow (a + b) * b
    $$

    \textbf{Palabra Generada}: $(a + b) * b$
\end{ejemplo}

## Derivación y Lenguaje Generado

### Derivación en un Paso

Dada una gramática $G = (V, T, P, S)$ y dos palabras $\alpha, \beta \in (V \cup T)^*$, se dice que $\beta$ es derivable a partir de $\alpha$ en un paso ($\alpha \Rightarrow \beta$) si y solo si existe una producción $\gamma \to \phi$ tal que $\alpha$ contiene a $\gamma$ como subcadena y $\beta$ se obtiene sustituyendo $\gamma$ por $\phi$ en $\alpha$.

### Secuencia de Derivación

Se dice que $\beta$ es derivable de $\alpha$ ($\alpha \overset{*}{\Rightarrow} \beta$) si y solo si existe una sucesión de palabras $\gamma_1, \ldots, \gamma_n$ ($n \geq 1$) tales que:

$$
\alpha = \gamma_1 \Rightarrow \gamma_2 \Rightarrow \ldots \Rightarrow \gamma_n = \beta
$$

### Lenguaje Generado por una Gramática

El lenguaje generado por una gramática $G = (V, T, P, S)$ es el conjunto de cadenas formadas por símbolos terminales que son derivables a partir del símbolo de partida $S$. Formalmente:

$$
L(G) = \{u \in T^* \mid S \overset{*}{\Rightarrow} u\}
$$

## Gramática Generativa: Ejemplo y Propiedades

### Gramática Definida

Sea la gramática $G = (V, T, P, S)$ definida como:  
- $V = \{S, A, B\}$  
- $T = \{a, b\}$  
- $P = \{S \to aB, S \to bA, A \to a, A \to aS, A \to bAA, B \to b, B \to bS, B \to aBB\}$  
- $S = S$  

### Lenguaje Generado

Esta gramática genera el lenguaje:

$$
L(G) = \{u \mid u \in \{a, b\}^+ \text{ y } N_a(u) = N_b(u)\}
$$

donde $N_a(u)$ y $N_b(u)$ son el número de apariciones de los símbolos $a$ y $b$ en $u$, respectivamente.

### Interpretación de las Variables

- $A$: Representa palabras con una $a$ de más.  
- $B$: Representa palabras con una $b$ de más.  
- $S$: Representa palabras con igual número de $a$ que de $b$.  

### Propiedades del Lenguaje Generado

1. **Todas las palabras generadas tienen el mismo número de $a$ que de $b$.**  
2. **Cualquier palabra con el mismo número de $a$ que de $b$ puede ser generada.**

### Demostración de la Primera Propiedad

\begin{demostracion}
Consideremos $N_{a,A}(\alpha)$ (número de $a$ más número de $A$) y $N_{b,B}(\alpha)$ (número de $b$ más número de $B$). Para una derivación $S \overset{*}{\Rightarrow} u$, tenemos:  

\begin{itemize}
    \item Al inicio: $N_{a,A}(S) = N_{b,B}(S) = 0$.  
    \item Al aplicar cualquier regla $\alpha_1 \to \alpha_2$, si $N_{a,A}(\alpha_1) = N_{b,B}(\alpha_1)$, entonces $N_{a,A}(\alpha_2) = N_{b,B}(\alpha_2)$.  
\end{itemize}

Por lo tanto, al final de la derivación, $N_{a,A}(u) = N_{b,B}(u)$. Como $u$ no contiene variables, $N_a(u) = N_b(u)$, lo que demuestra la propiedad.
\end{demostracion}

### Algoritmo de Generación

La generación de palabras se realiza por la izquierda, un símbolo a la vez:

- **Para generar una $a$:**
    - Si $a$ es el último símbolo, aplicar $A \to a$.  
    - Si no es el último símbolo:  
        - Si la primera variable es $S$, aplicar $S \to aB$.  
        - Si la primera variable es $B$, aplicar $B \to aBB$.  
        - Si la primera variable es $A$:  
            - Si hay más variables, aplicar $A \to a$.  
            - Si no hay más, aplicar $A \to aS$.  

- **Para generar una $b$:**
    - Si $b$ es el último símbolo, aplicar $B \to b$.  
    - Si no es el último símbolo:  
        - Si la primera variable es $S$, aplicar $S \to bA$.  
        - Si la primera variable es $A$, aplicar $A \to bAA$.  
        - Si la primera variable es $B$:  
            - Si hay más variables, aplicar $B \to b$.  
            - Si no hay más, aplicar $B \to bS$.  

### Condiciones de Garantía

1. Las palabras generadas tienen primero símbolos terminales y después variables.  
2. Se genera un símbolo de la palabra en cada paso de derivación.  
3. Las variables que aparecen en la palabra pueden ser:  
     - Una cadena de $A$ (si se han generado más $b$ que $a$).  
     - Una cadena de $B$ (si se han generado más $a$ que $b$).  
     - Una $S$ (si se han generado el mismo número de $a$ y $b$).  

Antes de generar el último símbolo, las variables serán:  
- Una $A$ si se necesita generar una $a$.  
- Una $B$ si se necesita generar una $b$.  

En este caso, se aplica la primera opción para generar los símbolos, y la palabra queda generada.  


## Gramática Alternativa para el Mismo Lenguaje

### Gramática que Incluye la Palabra Vacía

Esta gramática genera todas las palabras con el mismo número de símbolos $a$ que $b$, incluyendo la palabra vacía:

- $S \to aSbS$
- $S \to bSaS$
- $S \to \varepsilon$

### Gramática que Excluye la Palabra Vacía

Si no se desea incluir la palabra vacía, se puede usar la siguiente gramática:

- $S \to SS$
- $S \to ab$
- $S \to ba$
- $S \to aSb$
- $S \to bSa$

## Gramática Generativa: Ejemplo Adicional

### Gramática Definida

Sea la gramática $G = (V, T, P, S)$ definida como:  
- $V = \{S, X, Y\}$  
- $T = \{a, b, c\}$  
- $P = \{  
    S \to abc,  
    S \to aXbc,  
    Xb \to bX,  
    Xc \to Ybcc,  
    bY \to Yb,  
    aY \to aaX,  
    aY \to aa  
\}$  
- $S = S$  

### Lenguaje Generado

Esta gramática genera el lenguaje:

$$
L(G) = \{a^n b^n c^n \mid n \geq 1\}
$$

### Proceso de Derivación

1. **Caso Base**  
   - $S \to abc$: Genera la palabra $abc$ para $n = 1$.  

2. **Caso General**  
   - $S \to aXbc$: Introduce la variable $X$ para generar palabras de mayor longitud.  

   A partir de $aXbc$, el proceso es el siguiente:  
   - $aXbc \Rightarrow abXc \Rightarrow abYbcc \Rightarrow aYbbcc$  

   En este punto, se tienen dos opciones:  
   - Aplicar $aY \to aa$:  
     $$
     aYbbcc \Rightarrow aabbcc
     $$
     Genera la palabra $a^2b^2c^2$.  

   - Aplicar $aY \to aaX$:  
     $$
     aYbbcc \Rightarrow aaXbbcc
     $$
     Introduce nuevamente la variable $X$, permitiendo repetir el proceso para generar palabras más largas.  

3. **Iteración del Proceso**  
   - En cada iteración, la variable $X$ se mueve hacia la frontera $b-c$, donde se añade una $b$ y una $c$, y $X$ se transforma en $Y$.  
   - La variable $Y$ se mueve hacia la frontera $a-b$, donde se elige entre añadir una $a$ o una $aX$, permitiendo continuar el proceso.  

\underline{Ejemplo de Derivación para $n = 3$}

$$
S \Rightarrow aXbc \Rightarrow abXc \Rightarrow abYbcc \Rightarrow aYbbcc \Rightarrow aaXbbcc \Rightarrow aabXbcc 
$$
$$
\Rightarrow aabYbbccc \Rightarrow aaYbbbccc \Rightarrow aaaXbbbccc \Rightarrow aaabbbbccc
$$

\underline{Propiedades del Lenguaje Generado}

1. **Todas las palabras generadas tienen la forma $a^n b^n c^n$.**  
2. **El proceso de derivación asegura que el número de $a$, $b$, y $c$ es siempre igual.**  
3. **El lenguaje generado es un subconjunto de $\{a, b, c\}^*$ con la restricción de igualdad en las cantidades de $a$, $b$, y $c$.**

<!-- Podemos encontrar gramáticas independientes del lenguaje y dependientes del lenguaje.

\begin{definicion}[Gramáticas Dependientes del Lenguaje]
Son aquellas gramáticas que están diseñadas específicamente para generar un lenguaje particular. Estas gramáticas no pueden ser reutilizadas para otros lenguajes sin modificaciones significativas.
\end{definicion}

\begin{definicion}[Gramáticas Independientes del Lenguaje]
Son aquellas gramáticas que pueden ser utilizadas para generar múltiples lenguajes con estructuras similares. Estas gramáticas suelen ser más generales y flexibles, permitiendo adaptaciones para diferentes lenguajes con cambios mínimos.
\end{definicion} -->

Podemos encontrar gramáticas independientes del contexto y dependientes del contexto.

\begin{definicion}[Gramática Independiente del Contexto]
Una gramática es independiente del contexto si todas sus reglas de producción tienen la forma $\alpha \to \beta$, donde $\alpha \in V$ y $\beta \in (V \cup T)^*$. Es decir, el lado izquierdo de cada regla de producción está compuesto por un único símbolo no terminal.
\end{definicion}

\begin{definicion}[Gramática Dependiente del Contexto]
Una gramática es dependiente del contexto si sus reglas de producción tienen la forma $\gamma \to \beta$, donde $\gamma, \beta \in (V \cup T)^*$ y $\gamma$ contiene al menos un símbolo no terminal. En este caso, $\gamma$ puede depender del contexto en el que aparece para ser sustituido por $\beta$.
\end{definicion}


Cuando se inventa un lenguaje, se está inventando un lenguaje independiente del contexto, es lo más lógico naturalmente.

<!-- Chomsky diapo 67 -->

### Jerarquía de Chomsky

- Tipo 0: Cualquier gramática, sin restricciones. *Lenguajes recursivamente enumerables*.

- Tipo 1: Si todas las producciones tienen la forma 

    $$
    \alpha_1A\alpha_2 \rightarrow \alpha_1\beta\alpha_2\
    $$

    donde $\alpha_1, \alpha_2, \beta \in (V \cup T)^*,\; A \in V \;\; \text{y} \;\; \beta \neq \varepsilon$, en cuyo caso S no aparece a la derecha de las reglas. Es lo que se conoce como lenguaje dependientes del contexto.

    Ejemplo es esta regla de producción: 
    $$
    Xc \rightarrow Ybcc 
    $$

    Donde se ve que para que se de esta regla de producción debe de haber un c antes y después, se puede pensar que es como un invariante.

- Tipo 2: Si cualquier producción tiene la forma  

    $$
    A \to \alpha
    $$  

    donde $A \in V$, $\alpha \in (V \cup T)^*$.  

    *Lenguajes Independientes del Contexto*  

- Tipo 3: Si toda regla tiene la forma  

    $$
    A \to uB \quad \text{o} \quad A \to u
    $$  

    donde $u \in T^*$ y $A, B \in V$.  

    *Conjuntos Regulares*  

\begin{center}
\begin{tikzpicture}
    % Draw the ellipses
    \draw[fill=magenta!50] (0,0) ellipse (4cm and 2.5cm);
    \draw[fill=yellow!50] (0,0) ellipse (3cm and 2cm);
    \draw[fill=red!50] (0,0) ellipse (2cm and 1.5cm);
    \draw[fill=green!50] (0,0) ellipse (1cm and 1cm);

    % Add labels inside the ellipses
    \node at (0,0) {\(\mathcal{L}_3\)};
    \node at (0.7,0.5) {\(\mathcal{L}_2\)};
    \node at (1.5,1) {\(\mathcal{L}_1\)};
    \node at (2.5,1.5) {\(\mathcal{L}_0\)};

    % Add the inclusion relation above the ellipses
    \node[above] at (0,2.8) {\(\mathcal{L}_3 \subseteq \mathcal{L}_2 \subseteq \mathcal{L}_1 \subseteq \mathcal{L}_0\)};
\end{tikzpicture}
\end{center}

Como podemos observar la familia $\mathcal{L}_0$ es la más amplia, destacando que la $\mathcal{L}_2$ es la de independientes y la de $\mathcal{L}_3$ de los regulares.

\begin{ejercicioresuelto}
Demostrar que la gramática \( G = (\{S\}, \{a, b\}, \{S \to \varepsilon, S \to aSb\}, S) \) genera el lenguaje \( L = \{a^i b^i \mid i = 0, 1, 2, \ldots\} \).

\begin{demostracion}
La gramática \( G \) tiene dos reglas de producción: \( S \to \varepsilon \) y \( S \to aSb \). Procedemos a demostrar que genera el lenguaje \( L \) siguiendo los pasos de derivación.

\begin{itemize}
    \item \textbf{Caso Base:}  
    Si aplicamos la regla \( S \to \varepsilon \), obtenemos la palabra vacía \( \varepsilon \), que pertenece al lenguaje \( L \) para \( i = 0 \).

    \item \textbf{Caso General:}  
    Si aplicamos la regla \( S \to aSb \), obtenemos una palabra de la forma \( aSb \). Si continuamos aplicando esta regla, podemos generar palabras de la forma:
    \[
    S \Rightarrow aSb \Rightarrow aaSbb \Rightarrow aaaSbbb \Rightarrow \ldots
    \]
    Finalmente, al aplicar \( S \to \varepsilon \), obtenemos:
    \[
    S \Rightarrow aSb \Rightarrow aaSbb \Rightarrow aaaSbbb \Rightarrow \ldots \Rightarrow a^i b^i
    \]
    donde \( i \geq 0 \). Por lo tanto, todas las palabras de la forma \( a^i b^i \) pertenecen al lenguaje \( L \).

    \item \textbf{Unicidad:}  
    Observemos que cada vez que aplicamos la regla \( S \to aSb \), se añade exactamente un símbolo \( a \) al principio y un símbolo \( b \) al final de la palabra. Esto asegura que el número de \( a \)'s y \( b \)'s siempre sea igual. Además, la única forma de terminar la derivación es aplicando \( S \to \varepsilon \), lo que garantiza que no se generen palabras adicionales. Por lo tanto, las únicas palabras generadas por \( G \) son las de la forma \( a^i b^i \), con \( i \geq 0 \).
\end{itemize}

\textbf{Conclusión:} La gramática \( G \) genera exactamente el lenguaje \( L = \{a^i b^i \mid i = 0, 1, 2, \ldots\} \).
\end{demostracion}
\end{ejercicioresuelto}

\begin{ejercicioresuelto}
Encontrar el lenguaje generado por la gramática \( G = (\{S, A, B\}, \{a, b\}, P, S) \), donde \( P \) contiene las siguientes producciones:

\[
\begin{aligned}
    S &\to aAB \\
    B &\to a \\
    Ab &\to SBb \\
    Aa &\to SaB \\
    B &\to SA \\
    B &\to ab
\end{aligned}
\]

\textbf{Resultado:} El lenguaje generado por esta gramática es el \textbf{lenguaje vacío}. Esto se debe a que nunca se puede llegar a generar una palabra compuesta únicamente por símbolos terminales. 

\begin{demostracion}
Analicemos las producciones de la gramática:


\begin{itemize}
    \item La producción inicial \( S \to aAB \) introduce las variables \( A \) y \( B \).
    \item Cada vez que se sustituye \( A \), aparece \( S \) nuevamente, como se observa en las producciones \( Ab \to SBb \) y \( Aa \to SaB \).
    \item De manera similar, cada vez que se sustituye \( S \), aparece \( A \), como se observa en la producción inicial \( S \to aAB \).
    \item Por lo tanto, las variables \( S \) y \( A \) se refieren mutuamente de forma cíclica, sin posibilidad de reducirse a símbolos terminales.
    \item Aunque \( B \) tiene producciones que incluyen símbolos terminales (\( B \to a \) y \( B \to ab \)), estas producciones no pueden ser utilizadas sin que \( S \) o \( A \) aparezcan nuevamente en la derivación.
\end{itemize}

Por lo tanto, no es posible generar ninguna palabra que consista únicamente en símbolos terminales, lo que implica que el lenguaje generado por la gramática es el lenguaje vacío (\( \emptyset \)).
\end{demostracion}
\end{ejercicioresuelto}

\begin{ejercicioresuelto}
Encontrar una gramática independiente del contexto para generar cada uno de los siguientes lenguajes:

\begin{enumerate}
    \item \( L = \{a^i b^j \mid i, j \in \mathbb{N}, i \leq j\} \)

    \begin{solucion}
    La gramática es:
    \[
    G = (\{S\}, \{a, b\}, P, S)
    \]
    donde \( P \) contiene las siguientes producciones:
    \[
    \begin{aligned}
        S &\to Sb \mid aSb \mid \varepsilon
    \end{aligned}
    \]
    \end{solucion}

    \item \( L = \{a^i b^j a^j b^i \mid i, j \in \mathbb{N}\} \)

    \begin{solucion}
    La gramática es:
    \[
    G = (\{S\}, \{a, b\}, P, S)
    \]
    donde \( P \) contiene las siguientes producciones:
    \[
    \begin{aligned}
        S &\to aSb \mid T \\
        T &\to bTa \mid \varepsilon
    \end{aligned}
    \]
    \end{solucion}

    \item \( L = \{a^i b^i a^j b^j \mid i, j \in \mathbb{N}\} \)

    \begin{solucion}
    La gramática es:
    \[
    G = (\{S_1\}, \{a, b\}, P, S)
    \]
    donde \( P \) contiene las siguientes producciones:
    \[
    \begin{aligned}
        S_1 &\to aS_1b \\
        S_1 &\to \varepsilon
    \end{aligned}
    \]
    El lenguaje $L$ se puede generar añadiendo $S \rightarrow S_1S_1$
    \end{solucion}

    \item \( L = \{a^i b^j a^i b^j \mid i, j \in \mathbb{N}\} \)

    \begin{solucion}
    No es posible construir una gramática independiente del contexto para este lenguaje, ya que requiere contar dos cantidades \( i \) y \( j \) de forma independiente y luego repetirlas en el mismo orden, lo cual excede las capacidades de las gramáticas independientes del contexto.
    \end{solucion}

    \item \( L = \{a^i b^i \mid i \in \mathbb{N}\} \cup \{b^i a^i \mid i \in \mathbb{N}\} \)

    \begin{solucion}
    Para no repetir la definición de gramática, se va a obviar.

    Las reglas de producción serían:
    \begin{align*}
    S_1 \rightarrow aS_1b \\
    S_1 \rightarrow \varepsilon
    \end{align*}

    \end{solucion}

    \item \( L = \{uu^{-1} \mid u \in \{a, b\}^*\} \)

    \begin{solucion}
    La gramática es:
    \[
    G = (\{S\}, \{a, b\}, P, S)
    \]
    donde \( P \) contiene las siguientes producciones:
    \[
    \begin{aligned}
        S &\to aSa \mid bSb \mid \varepsilon
    \end{aligned}
    \]
    \end{solucion}

    \item \( L = \{a^i b^j c^{i+j} \mid i, j \in \mathbb{N}\} \)

    \begin{solucion}
    La gramática es:
    \[
    G = (\{S\}, \{a, b, c\}, P, S)
    \]
    donde \( P \) contiene las siguientes producciones:
    \[
    \begin{aligned}
        S &\to aSc \mid bSc \mid \varepsilon
    \end{aligned}
    \]
    \end{solucion}
\end{enumerate}
\end{ejercicioresuelto}

\begin{ejercicioresuelto}
Determinar si la gramática \( G = (\{S, A, B\}, \{a, b, c, d\}, P, S) \), donde \( P \) es el conjunto de reglas de producción:

\[
\begin{aligned}
    S &\to AB \\
    A &\to Ab \\
    A &\to a \\
    B &\to cB \\
    B &\to d
\end{aligned}
\]

genera un lenguaje de tipo 3.

\textbf{Solución:} Esta gramática genera el lenguaje:

\[
L = \{ab^i c^j d \mid i, j \in \mathbb{N}\}
\]

Este lenguaje se puede generar mediante la siguiente gramática:

\[
\begin{aligned}
    S &\to aB \\
    B &\to bB \mid C \\
    C &\to cC \mid d
\end{aligned}
\]

Como esta gramática cumple las restricciones de las gramáticas de tipo 3 (producciones de la forma \( A \to uB \) o \( A \to u \), donde \( u \in T^* \) y \( A, B \in V \)), el lenguaje generado es de tipo 3.
\end{ejercicioresuelto}









