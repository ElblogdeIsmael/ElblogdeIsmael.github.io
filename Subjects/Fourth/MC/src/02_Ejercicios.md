
\chapter{Relaciones de Ejercicios}

## Relación Tema 1:  Modelos de Computación

\begin{ejercicio}
Descripción de lenguajes generados por gramáticas.
\end{ejercicio}

a) Describir el lenguaje generado por la siguiente gramática:
    $$
    S \to XYX \\
    $$
    $$
    X \to aX \ | \ bX \ | \ \epsilon \\
    $$
    $$
    Y \to bbb
    $$

    \begin{solucion}[Ejercicio 1.a]

    El lenguaje generado por la gramática está compuesto por cadenas que tienen la forma:

    \begin{enumerate}
        \item Una secuencia de cero o más a o b (generada por X).
        \item Seguido por bbb (generado por Y).
        \item Seguido nuevamente por una secuencia de cero o más a o b (generada por X).
    \end{enumerate}

    Por lo tanto, el lenguaje generado es:

    $$
    L = \{ w_1 \ bbb \ w_2 \ | \ w_1, w_2 \in \{a, b\}^* \}
    $$

    Donde $w_1$ y $w_2$ son cadenas arbitrarias (incluyendo la cadena vacía) formadas por los símbolos a y b. Otra forma es demostrándolo mediante doble inclusión (manera más matemática).

    \end{solucion}

b) Describir el lenguaje generado por la siguiente gramática:
    $$
    S \to aX 
    $$
    $$
    X \to aX \ | \ bX \ | \ \epsilon
    $$

    \begin{solucion}[Ejercicio 1.b]

    El lenguaje generado por la gramática está compuesto por cadenas que tienen la forma:

    \begin{enumerate}
        \item Una a inicial (generada por $S$).
        \item Seguido por una secuencia de cero o más $a$ o $b$ (generada por $X$).
    \end{enumerate}

    Por lo tanto, el lenguaje generado es:

    $$
    L = \{ a \ w \ | \ w \in \{a, b\}^* \}
    $$

    Donde $w$ es una cadena arbitraria (incluyendo la cadena vacía) formada por los símbolos a y b. Otra forma de demostrarlo es mediante doble inclusión.

    \end{solucion}

c) Describir el lenguaje generado por la siguiente gramática:
    $$
    S \to XaXaX \\
    $$
    $$
    X \to aX \ | \ bX \ | \ \epsilon
    $$

    \begin{solucion}[Ejercicio 1.c]

    El lenguaje generado por la gramática está compuesto por cadenas que tienen la forma:

    \begin{enumerate}
        \item Una secuencia de cero o más $a$ o $b$ (generada por $X$).
        \item Seguido por una $a$.
        \item Seguido nuevamente por una secuencia de cero o más $a$ o $b$ (generada por $X$).
        \item Seguido por otra $a$.
        \item Seguido nuevamente por una secuencia de cero o más $a$ o $b$ (generada por $X$).
    \end{enumerate}

    Por lo tanto, el lenguaje generado es:

    $$
    L = \{ w_1 \ a \ w_2 \ a \ w_3  \ | \ w_1, w_2, w_3 \in \{a, b\}^* \}
    $$

    Donde $w_1$, $w_2$ y $w_3$ son cadenas arbitrarias (incluyendo la cadena vacía) formadas por los símbolos a y b. Otra forma de demostrarlo es mediante doble inclusión.

    \end{solucion}


d) Describir el lenguaje generado por la siguiente gramática:
    $$
    S \to SS \ | \ XaXaX \ | \ \epsilon \\
    $$
    $$
    X \to bX \ | \ \epsilon
    $$

    \begin{solucion}[Ejercicio 1.d]

    El lenguaje generado por la gramática está compuesto por cadenas que tienen las siguientes características:

    \begin{enumerate}
        \item La gramática permite generar la cadena vacía ($\epsilon$).
        \item También permite generar cadenas de la forma $w_1 \ a \ w_2 \ a \ w_3 $, donde $w_1$, $w_2$, y $w_3$ son cadenas formadas únicamente por el símbolo $b$ (generadas por $X$).
        \item Además, permite concatenar arbitrariamente las cadenas generadas en los puntos anteriores debido a la regla $S \to SS$.
    \end{enumerate}

    Por lo tanto, el lenguaje generado es:

    $$
    L = \{ \epsilon \} \cup \{ w_1 \ a \ w_2 \ a \ w_3  \ | \ w_1, w_2, w_3 \in \{b\}^* \} \cup \{ uv \ | \ u, v \in L \}
    $$

    Donde $w_1$, $w_2$, y $w_3$ son cadenas arbitrarias (incluyendo la cadena vacía) formadas por el símbolo $b$, y $u, v$ son cadenas generadas por la gramática. Otra forma de demostrarlo es mediante doble inclusión.

    \textbf{Demostración por doble inclusión:}

    \begin{itemize}
        \item \textbf{Primera inclusión ($L \subseteq R$):}

            Sea $w \in L$. Según las reglas de la gramática, $w$ puede ser:
            \begin{itemize}
                \item La cadena vacía ($\epsilon$), que claramente pertenece a $R$.
                \item Una cadena de la forma $w_1 \ a \ w_2 \ a \ w_3 \ a$, donde $w_1, w_2, w_3 \in \{b\}^*$. Estas cadenas también pertenecen a $R$ por definición.
                \item Una concatenación de cadenas en $L$ (por la regla $S \to SS$). Si $u, v \in L$, entonces $uv \in R$ porque $R$ es cerrado bajo concatenación.
            \end{itemize}

            Por lo tanto, $w \in R$, y se cumple que $L \subseteq R$.

        \item \textbf{Segunda inclusión ($R \subseteq L$):}

            Sea $w \in R$. Según la definición de $R$, $w$ puede ser:
            \begin{itemize}
                \item La cadena vacía ($\epsilon$), que claramente puede ser generada por la gramática.
                \item Una cadena de la forma $w_1 \ a \ w_2 \ a \ w_3 \ a$, donde $w_1, w_2, w_3 \in \{b\}^*$. Estas cadenas pueden ser generadas por la regla $S \to XaXaX$ y $X \to bX \ | \ \epsilon$.
                \item Una concatenación de cadenas en $R$. Si $u, v \in R$, entonces $uv \in L$ porque la regla $S \to SS$ permite concatenar cadenas generadas por la gramática.
            \end{itemize}

            Por lo tanto, $w \in L$, y se cumple que $R \subseteq L$.
    \end{itemize}

    Dado que $L \subseteq R$ y $R \subseteq L$, se concluye que $L = R$.

    \end{solucion}


\begin{ejercicio}
Determinar lenguajes.
\end{ejercicio}


a) Dada la gramática $G = (\{S, A\}, \{a, b\}, P, S)$ donde:  
    $$P = \{S \to abAS, \ abA \to baab, \ S \to a, \ A \to b\}$$
    Determinar el lenguaje que genera.

    \begin{solucion}[Ejercicio 2.a]

        Cada vez que aplicamos $S \to abAS$ generamos un bloque $abA$ adicional y dejamos un $S$ al final para poder repetir la expansión. Tras $m$ aplicaciones de $S \to abAS$ obtenemos la forma $(abA)^mS$.

        Cada bloque $abA$ puede convertirse o bien en $baab$ aplicando la regla $abA \to baab$, o bien en $abb$ aplicando primero $A \to b$ (porque $abA \Rightarrow abb$). Finalmente $S \to a$. Por tanto, cada bloque se convierte en $baab$ o en $abb$ y al final queda una $a$.

        De aquí se deduce la forma general de las cadenas generadas:

        $$
        L(G) = \{ xa \ | \ x \in \{baab, abb\}^* \},
        $$

        es decir, en notación de expresiones regulares:

        $$
        L(G) = (baab \ | \ abb)^* a.
        $$

        \textbf{Prueba formal (dos sentidos)}

        \begin{enumerate}
            \item $L(G) \subseteq (baab \ | \ abb)^* a$

                Tras $m$ aplicaciones de $S \to abAS$ se tiene $(abA)^mS$ (prueba por inducción sobre $m$: base $m=0$ trivial; paso: si $S \Rightarrow (abA)^kS$ entonces aplicando $S \to abAS$ al $S$ final obtenemos $(abA)^{k+1}S$).

                Para cada uno de los $m$ factores $abA$ podemos aplicar $abA \to baab$ (obteniendo $baab$) o bien aplicar $A \to b$ (obteniendo $abb$). Por tanto, la parte antes de la última $S$ es una concatenación de $baab$ y $abb$.

                Finalmente $S \to a$. Por tanto, toda cadena derivable tiene la forma (bloques $baab$ o $abb$) seguida de $a$.

            \item $(baab \ | \ abb)^* a \subseteq L(G)$

                Sea $w = b_1b_2\cdots b_ma$ con cada $b_i \in \{baab, abb\}$.

                Expandimos $S$ $m$ veces con $S \to abAS$ para obtener $(abA)^mS$.

                Para cada $i$: si $b_i = baab$ aplicamos la regla $abA \to baab$ sobre el $i$-ésimo factor; si $b_i = abb$ aplicamos $A \to b$ en ese factor (convirtiendo $abA$ en $abb$).

                Finalmente aplicamos $S \to a$. Eso produce exactamente $w$. Por tanto, cualquier cadena del lado derecho puede derivarse.
        \end{enumerate}

    \end{solucion}


b) Sea la gramática $G = (V, T, P, S)$ donde:  
    \begin{align*}
    V &= \{\langle numero \rangle, \langle digito \rangle\} \\
    T &= \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\} \\
    S &= \langle numero \rangle \\
    \end{align*}

    \begin{itemize}
        \item $\langle numero \rangle \to \langle numero \rangle \langle digito \rangle$
        \item $\langle numero \rangle \to \langle digito \rangle$
        \item $\langle digito \rangle \to 0 \ | \ 1 \ | \ 2 \ | \ 3 \ | \ 4 \ | \ 5 \ | \ 6 \ | \ 7 \ | \ 8 \ | \ 9$
    \end{itemize}

    Determinar el lenguaje que genera.

    \begin{solucion}[Ejercicio 2.b]

    El lenguaje generado por la gramática está compuesto por cadenas que tienen las siguientes características:

    \begin{enumerate}
        \item La gramática permite generar cadenas formadas por uno o más dígitos, ya que:
            \begin{itemize}
                \item $\langle numero \rangle \to \langle numero \rangle \langle digito \rangle$ permite construir cadenas de longitud arbitraria añadiendo dígitos.
                \item $\langle numero \rangle \to \langle digito \rangle$ permite terminar la construcción con un único dígito.
            \end{itemize}
        \item Cada dígito es uno de los símbolos terminales $\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$, según la regla $\langle digito \rangle \to 0 \ | \ 1 \ | \ \dots \ | \ 9$.
    \end{enumerate}

    Por lo tanto, el lenguaje generado es el conjunto de todas las cadenas no vacías de dígitos, es decir:

    $$
    L = \{ w \ | \ w \in \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}^+ \}.
    $$

    En notación de expresiones regulares, el lenguaje puede escribirse como:

    $$
    L = [0-9]^+.
    $$

    \end{solucion}


c) Sea la gramática $G = (\{A, S\}, \{a, b\}, S, P)$ donde las reglas de producción son:  
    \begin{itemize}
        \item $S \to aS$
        \item $S \to aA$
        \item $A \to bA$
        \item $A \to b$
    \end{itemize}
Determinar el lenguaje generado por la gramática.


    \begin{solucion}[Ejercicio 2.c]

    El lenguaje generado por la gramática está compuesto por cadenas que tienen las siguientes características:

    \begin{enumerate}
        \item La gramática permite generar cadenas que comienzan con uno o más símbolos $a$, ya que:
            \begin{itemize}
                \item $S \to aS$ permite añadir un número arbitrario de $a$ al principio.
                \item $S \to aA$ permite terminar la secuencia de $a$ y pasar a generar $b$.
            \end{itemize}
        \item Después de la secuencia de $a$, la gramática genera uno o más símbolos $b$, ya que:
            \begin{itemize}
                \item $A \to bA$ permite añadir un número arbitrario de $b$.
                \item $A \to b$ permite terminar la secuencia de $b$.
            \end{itemize}
    \end{enumerate}

    Por lo tanto, el lenguaje generado es el conjunto de todas las cadenas que consisten en una secuencia no vacía de $a$ seguida de una secuencia no vacía de $b$, es decir:

    $$
    L = \{ a^n b^m \ | \ n \geq 1, m \geq 1 \}.
    $$

    En notación de expresiones regulares, el lenguaje puede escribirse como:

    $$
    L = a^+b^+.
    $$

    \end{solucion}




\begin{ejercicio}
Gramáticas de tipo 2 y tipo 3. 

\begin{enumerate}[label=\alph*)]
    \item Encontrar una gramática de tipo 2 para el lenguaje de palabras en las que el número de $b$ no es tres.  
    Determinar si el lenguaje generado es de tipo 3.

    \item Encontrar una gramática de tipo 2 para el lenguaje de palabras que tienen 2 ó 3 $b$.  
    Determinar si el lenguaje generado es de tipo 3.
\end{enumerate}

\end{ejercicio}

    

\begin{ejercicio}
Gramáticas para lenguajes específicos.

\begin{enumerate}[label=\alph*)]
    \item Encontrar una gramática de tipo 2 para el lenguaje de palabras que no contienen la subcadena $ab$.  
    Determinar si el lenguaje generado es de tipo 3.

    \item Encontrar una gramática de tipo 2 para el lenguaje de palabras que no contienen la subcadena $baa$.  
    Determinar si el lenguaje generado es de tipo 3.
\end{enumerate}

\end{ejercicio}

\begin{ejercicio}
Lenguaje con más $a$ que $b$. Encontrar una gramática libre de contexto que genere el lenguaje sobre el alfabeto $\{a, b\}$ de las palabras que tienen más $a$ que $b$ (al menos una más).
\end{ejercicio}

    

\begin{ejercicio}
Gramáticas regulares o libres de contexto.

\begin{enumerate}[label=\alph*)]
    \item Encontrar, si es posible, una gramática regular (o, si no es posible, una gramática libre de contexto) que genere el lenguaje $L$ sobre el alfabeto $\{a, b\}$ tal que $u \in L$ si, y solamente si, $u$ no contiene dos símbolos $b$ consecutivos.

    \item Encontrar, si es posible, una gramática regular (o, si no es posible, una gramática libre de contexto) que genere el lenguaje $L$ sobre el alfabeto $\{a, b\}$ tal que $u \in L$ si, y solamente si, $u$ contiene dos símbolos $b$ consecutivos.
\end{enumerate}
\end{ejercicio}

\begin{ejercicio}
Propiedades de lenguajes.

\begin{enumerate}[label=\alph*)]
    \item Encontrar, si es posible, una gramática regular (o, si no es posible, una gramática libre de contexto) que genere el lenguaje $L$ sobre el alfabeto $\{a, b\}$ tal que $u \in L$ si, y solamente si, $u$ contiene un número impar de símbolos $a$.

    \item Encontrar, si es posible, una gramática regular (o, si no es posible, una gramática libre de contexto) que genere el lenguaje $L$ sobre el alfabeto $\{a, b\}$ tal que $u \in L$ si, y solamente si, $u$ no contiene el mismo número de símbolos $a$ que de símbolos $b$.
\end{enumerate}

\end{ejercicio}

\begin{ejercicio}
Gramáticas para palabras con restricciones.

\begin{enumerate}[label=\alph*)]
    \item Dado el alfabeto $A = \{a, b\}$, determinar si es posible encontrar una gramática libre de contexto que genere las palabras de longitud impar, y mayor o igual que 3, tales que la primera letra coincida con la letra central de la palabra.

    \item Dado el alfabeto $A = \{a, b\}$, determinar si es posible encontrar una gramática libre de contexto que genere las palabras de longitud par, y mayor o igual que 2, tales que las dos letras centrales coincidan.
\end{enumerate}

\end{ejercicio}



\begin{ejercicio}
Regularidad de un lenguaje.
Determinar si el lenguaje generado por la gramática  
$S \to SS$  
$S \to XXX$  
$X \to aX \ | \ Xa \ | \ b$  
es regular. Justificar la respuesta.
\end{ejercicio}



\begin{ejercicio}
Numerabilidad de un lenguaje.
Dado un lenguaje $L$ sobre un alfabeto $A$, ¿es $L^*$ siempre numerable? ¿nunca lo es? ¿o puede serlo unas veces sí y otras, no? Proporcionar ejemplos en este último caso.
\end{ejercicio}



\begin{ejercicio}
Propiedades de $L^*$. Dado un lenguaje $L$ sobre un alfabeto $A$, caracterizar cuándo $L^* = L$. Es decir, dar un conjunto de propiedades sobre $L$ de manera que $L$ cumpla esas propiedades si y sólo si $L^* = L$.
\end{ejercicio}



\begin{ejercicio}
Igualdad de homomorfismos. Dados dos homomorfismos $f : A^* \to B^*$, $g : A^* \to B^*$, se dice que son iguales si $f(x) = g(x)$, $\forall x \in A^*$. ¿Existe un procedimiento algorítmico para comprobar si dos homomorfismos son iguales?
\end{ejercicio}

\begin{ejercicio}
Lenguajes $S_i$ y $C_i$. 
Sea $L \subseteq A^*$ un lenguaje arbitrario. Sea $C_0 = L$ y definamos los lenguajes $S_i$ y $C_i$, para todo $i \geq 1$, por $S_i = C_{i-1}^+$ y $C_i = S_i^*$. 

\begin{enumerate}[label=\alph*)]
    \item ¿Es $S_1$ siempre, nunca o a veces igual a $C_2$? Justificar la respuesta.  

    \item Demostrar que $S_2 = C_3$, cualquiera que sea $L$. (Pista: Demostrar que $C_2$ es cerrado para la concatenación).
\end{enumerate}

\end{ejercicio}



\begin{ejercicio}
Numerabilidad de lenguajes finitos. Demostrar que, para todo alfabeto $A$, el conjunto de los lenguajes finitos sobre dicho alfabeto es numerable.
\end{ejercicio}

