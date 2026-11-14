# Cuestiones de Parcial y Ejercicios Tipo Examen (Temas 1 al 6)

Este capítulo recopila cuestiones de teoría resueltas del primer parcial (curso 2023/2024), diez preguntas cortas de respuesta rápida y catorce problemas completos de examen sobre los Temas 1 al 6 con su solución detallada.

## Primer parcial 2023/2024: cuestiones de teoría resueltas

1. **¿Para qué se usa la construcción de Thompson en los analizadores léxicos? Pon un ejemplo.**
   Sirve para generar de manera sistemática y automática un autómata finito no determinista con transiciones vacías ($\text{AFN-}\lambda$) a partir de la expresión regular que define cada token. Se construye por inducción estructural: autómatas base para $\varepsilon$ y cada símbolo del alfabeto, y plantillas con transiciones $\lambda$ para unión, concatenación y clausura de Kleene. Luego se unen los AFN de todos los patrones desde un estado inicial común, se determinizan mediante el algoritmo de subconjuntos y el AFD resultante implementa el reconocedor léxico (como hace LEX). Por ejemplo, `a|b` crea un estado inicial con dos ramas $\lambda$ paralelas (una con `a` y otra con `b`) que convergen mediante $\lambda$ en el estado final; `(a|b)*` añade además una transición $\lambda$ de retorno desde el final al inicio y otra $\lambda$ directa para aceptar cero repeticiones.

2. **En traducción, ¿la abstracción léxica consiste únicamente en detectar las expresiones regulares del lenguaje?**
   **No.** Identificar las expresiones regulares es solo el primer paso. La abstracción léxica consiste en agrupar bajo un mismo componente léxico (token) los lexemas que cumplen exactamente la misma función sintáctica, repitiendo el proceso hasta alcanzar el nivel máximo de abstracción y obtener una gramática abstracta más compacta. Dado que el objetivo es traducir, las fases posteriores (semántico y generación de código) necesitan saber qué lexema concreto llegó; por ello cada token agrupado transporta un **atributo** (qué operador representa, valor numérico de la constante o entrada en la tabla de símbolos).

3. **Dada $S \to a \mid b \mid cD \mid \varepsilon$, $D \to cD \mid e \mid SF$, $F \to e$, ¿es de precedencia de operador? ¿Y de precedencia simple?**
   - **Precedencia de operador: no.** Incumple dos condiciones estructurales: existe una producción vacía ($S \to \varepsilon$) y aparecen dos no terminales consecutivos ($D \to SF$).
   - **Precedencia simple: no.** Presenta una producción vacía ($S \to \varepsilon$) y dos reglas con idéntica parte derecha ($D \to e$ y $F \to e$), de modo que al reducir el pivote `e` resultaría imposible decidir a qué no terminal reducir. No es necesario construir ninguna matriz.

4. **¿Qué ventajas aportan los analizadores LR($k$)?**
   Reconocen prácticamente todos los lenguajes de programación descritos por gramáticas independientes del contexto; constituyen el método determinista sin retroceso más general y sencillo de implementar dentro del análisis ascendente; su clase de gramáticas contiene estrictamente a la de los métodos predictivos LL y de precedencia; detectan los errores sintácticos en cuanto leen el primer símbolo incompatible de izquierda a derecha; y, a diferencia de los métodos de precedencia, el estado en la cima resume todo el contexto acumulado en la pila.

5. **En análisis LR, ¿qué tipos de conflictos existen y cuáles se deben a una especificación redundante?**
   Existen conflictos **desplaza/reduce (d/r)** y **reduce/reduce (r/r)**. Los debidos a una especificación redundante son los conflictos **reduce/reduce**: aparecen cuando dos reglas distintas generan exactamente la misma construcción en el mismo contexto (por ejemplo $A \to d$ y $B \to d$) y se corrigen eliminando las producciones redundantes. Los conflictos d/r suelen originarse por ambigüedad en operadores o estructuras condicionales y se resuelven con directivas de precedencia y asociatividad o desplazando.

## Preguntas cortas de teoría (Bloque A)

1. **Define modelo semántico y esquema de traducción, e indica las dos condiciones para construir un traductor de $L_1$ a $L_2$.**
   Un modelo semántico es una terna $M = (L(G), D, I)$ con $I : L(G) \to D$. Un esquema de traducción es una aplicación $T : L_1 \to L_2$ que satisface $I_1(\alpha) = I_2(T(\alpha))$ para todo $\alpha \in L_1$. Requiere $D_1 \subseteq D_2$ y que toda sentencia $\alpha \in L_1$ posea una traducción $\beta \in L_2$ con significado equivalente.

2. **Diferencia entre token, lexema y patrón con un ejemplo.**
   El **token** es la categoría sintáctica (`ID`); el **lexema** es la secuencia de caracteres del programa fuente (`contador`); el **patrón** es la expresión regular que describe los lexemas válidos (`letra(letra|digito)*`).

3. **Da dos razones para separar el análisis léxico del sintáctico.**
   Simplifica el diseño de la gramática y mejora la eficiencia del analizador sintáctico (trabaja sobre una gramática abstracta menor), y aísla los detalles dependientes de la entrada aportando portabilidad al traductor.

4. **Diferencia entre condiciones de arranque** `%START` y `%X` **en LEX.**
   Las condiciones declaradas con `%START` (inclusivas) mantienen activas las reglas sin prefijo de condición cuando se activan; las declaradas con `%X` (exclusivas) desactivan todas las reglas sin prefijo, ejecutando solo las etiquetadas con `<COND>`.

5. **¿Qué es una S-gramática? ¿Toda S-gramática es LL(1)? ¿Y al revés?**
   Es una gramática LL(1) cuyas alternativas comienzan por terminales distintos y carece de $\varepsilon$-producciones. Toda S-gramática es LL(1), pero no al revés: $E' \to +TE' \mid \varepsilon$ es LL(1) sin ser S-gramática.

6. **Enuncia los dos defectos del análisis de precedencia de operador.**
   No soporta tokens con doble precedencia (como `-` unario y binario en una sola tabla) y puede aceptar cadenas inválidas como `id++id` al no verificar la parte derecha completa de la producción al reducir.

7. **¿Qué es un prefijo viable y por qué el análisis LR usa un AFD con pila?**
   Un prefijo viable es cualquier prefijo de una forma sentencial derecha que no rebasa el extremo derecho del pivote. El teorema de Knuth demuestra que el conjunto de prefijos viables forma un lenguaje regular, por lo que un AFD (cuyos estados son colecciones de ítems) lo reconoce mientras la pila registra la trayectoria de estados.

8. **¿Puede LALR(1) introducir un conflicto d/r nuevo frente a LR(1)? ¿Y uno r/r?**
   **d/r no:** el desplazamiento depende únicamente del núcleo, luego si aparece en el estado fusionado ya existía en alguno de los estados LR(1) originales. **r/r sí:** la fusión une los conjuntos de anticipación, pudiendo provocar solapamientos entre dos ítems de reducción distintos.

9. **Resolución por defecto de conflictos en YACC y efecto en el *dangling else*.**
   Por defecto resuelve d/r **desplazando** y r/r eligiendo la **primera regla** escrita en la especificación. En el *dangling else*, desplazar `else` lo empareja con el `if` más cercano.

10. **Fases del método de Graham--Rhodes.**
    La fase de **condensación** delimita el contexto del error en pila y entrada; la fase de **corrección** decide qué tokens eliminar o insertar en ese entorno local para reanudar el análisis.

## Problemas tipo examen resueltos (Bloque B)

### Problema 1: Diagramas en T y *half-bootstrap* (Tema 1)

Disponemos en un PC **x86** de un compilador nativo de C (`[C -> x86]_x86`) y del código fuente de ese compilador escrito en C (`[C -> x86]_C`). Queremos obtener un compilador de C nativo para una placa **RISC-V** (`RV`).

**Solución:**

1. Reescribimos el generador de código en el fuente: `[C -> x86]_C` pasa a `[C -> RV]_C`.
2. Compilamos `[C -> RV]_C` en el PC usando `[C -> x86]_x86` $\Rightarrow$ obtenemos el **compilador cruzado** `[C -> RV]_x86` (se ejecuta en x86 y emite binario RISC-V).
3. Compilamos de nuevo `[C -> RV]_C`, ahora usando `[C -> RV]_x86` ejecutado en el PC $\Rightarrow$ obtenemos `[C -> RV]_RV`, que ya se transfiere y ejecuta nativamente en la placa RISC-V.

Para compilar un programa `P.c` en el PC y ejecutarlo en la placa se coloca el compilador cruzado `[C -> RV]_x86` sobre la máquina `x86`: entra `P` en C y sale `P` en `RV`.

### Problema 2: Thompson y subconjuntos para $r = a(a \mid b)^* b$ (Tema 2)

**Solución:**

1. **AFN-$\lambda$ de Thompson (estado inicial 0, final 9):** $0 \xrightarrow{a} 1$, $1 \xrightarrow{\lambda} 2$, $1 \xrightarrow{\lambda} 8$, $2 \xrightarrow{\lambda} 3$, $2 \xrightarrow{\lambda} 5$, $3 \xrightarrow{a} 4$, $5 \xrightarrow{b} 6$, $4 \xrightarrow{\lambda} 7$, $6 \xrightarrow{\lambda} 7$, $7 \xrightarrow{\lambda} 2$, $7 \xrightarrow{\lambda} 8$, $8 \xrightarrow{b} 9$.
2. **Subconjuntos:**
   - $A = \lambda\text{-cl}(\{0\}) = \{0\}$.
   - $\mathrm{Move}(A, a) = \{1\} \Rightarrow B = \{1,2,3,5,8\}$; $\mathrm{Move}(A, b) = \emptyset$.
   - $\mathrm{Move}(B, a) = \{4\} \Rightarrow C = \{2,3,4,5,7,8\}$; $\mathrm{Move}(B, b) = \{6,9\} \Rightarrow D = \{2,3,5,6,7,8,9\}$ (final).
   - Desde $C$ y $D$: entrada $a$ va a $C$ y entrada $b$ va a $D$.
3. **Minimización:** $B$ y $C$ son ambos no finales y tienen idéntica fila de transiciones ($a \to C$, $b \to D$). Se fusionan en un único estado, dejando un AFD mínimo de 3 estados útiles más el de error.

### Problema 3: Tabla de tokens con máxima abstracción (Tema 2)

Dada la gramática:

- $\mathit{programa} \to \texttt{begin}\;\mathit{lista}\;\texttt{end}$
- $\mathit{lista} \to \mathit{lista}\;\texttt{;}\;\mathit{sent} \mid \mathit{sent}$
- $\mathit{sent} \to \mathit{id}\;\texttt{:=}\;\mathit{exp} \mid \texttt{read}\;\texttt{(}\;\mathit{id}\;\texttt{)} \mid \texttt{write}\;\texttt{(}\;\mathit{exp}\;\texttt{)}$
- $\mathit{exp} \to \mathit{exp}+\mathit{exp} \mid \mathit{exp}-\mathit{exp} \mid \mathit{exp}*\mathit{exp} \mid -\mathit{exp} \mid (\;\mathit{exp}\;) \mid \mathit{num} \mid \mathit{id}$

**Solución:** `+` y `*` son solo binarios (`OPBIN`), mientras `-` es unario y binario (`MENOS`, separado). `read` y `write` **no pueden agruparse** en un solo token porque `read` va seguido de `( id )` y `write` de `( exp )`; fusionarlos permitiría `read(3+x)`, alterando el lenguaje.

| Token | Código | Atributo | Patrón |
| :--- | :---: | :--- | :--- |
| `BEGIN` / `END` | 257 / 258 | -- | `begin` / `end` |
| `PYC` / `ASIGN` | 259 / 260 | -- | `;` / `:=` |
| `READ` / `WRITE` | 261 / 262 | -- | `read` / `write` |
| `PARIZQ` / `PARDER` | 263 / 264 | -- | `(` / `)` |
| `OPBIN` | 265 | 0: `+`, 1: `*` | `+` $\mid$ `*` |
| `MENOS` | 266 | -- | `-` |
| `NUM` | 267 | valor | `[0-9]+` |
| `ID` | 268 | lexema / entrada TS | `[a-z][a-z0-9]*` |

### Problema 4: Traza de salida en LEX y `REJECT` (Tema 2)

```lex
%%
"if"         printf("IF ");
[a-z]+       printf("ID(%s) ", yytext);
[a-z]+[0-9]  printf("IDN(%s) ", yytext);
[0-9]+       printf("NUM ");
"ifx"        printf("IFX ");
[ \t\n]      ;
%%
```

- Con entrada `if ifx if2 x23 iff 7?` imprime: `IF ID(ifx) IDN(if2) IDN(x2) NUM ID(iff) NUM ?`. La regla de `ifx` nunca se dispara porque `[a-z]+` empata con 3 letras y aparece antes. El carácter `?` pasa a `stdout` por la acción por defecto.
- En el fragmento con `she { s++; REJECT; }` y `he { h++; REJECT; }` ante `shehe`: con `REJECT` imprime `1 2` (`she` retrocede, `.` consume `s` y entonces casa `he`); sin `REJECT` imprime `1 1`.

### Problema 5: Ambigüedad y desambiguación (Tema 3)

Sea $E \to E - E \mid E \mathbin{\hat{}} E \mid (E) \mid id$.

- `id - id - id` tiene dos derivaciones izquierdas (asociación a izquierda frente a derecha).
- Gramática equivalente no ambigua con `^` de mayor precedencia y asociativo a derechas, y `-` asociativo a izquierdas:

$$E \to E - P \mid P \qquad P \to B \mathbin{\hat{}} P \mid B \qquad B \to (E) \mid id$$

- El árbol de `id ^ id ^ id` agrupa a derechas: $id \mathbin{\hat{}} (id \mathbin{\hat{}} id)$.

### Problema 6: Recursividad indirecta (Tema 4)

Sea $S \to Aa \mid b$, $A \to Ac \mid Sd \mid \varepsilon$.

- $S$ es recursiva indirecta porque $S \Rightarrow Aa \Rightarrow Sda$.
- Eliminando en orden $S, A$ (sustituyendo $A \to Sd$ por $Aad \mid bd$ y eliminando la recursión inmediata de $A$):

$$S \to Aa \mid b \qquad A \to bdA' \mid A' \qquad A' \to cA' \mid adA' \mid \varepsilon$$

- $\mathrm{INI}(S)=\{a,b,c\}$, $\mathrm{INI}(A)=\{a,b,c,\varepsilon\}$, $\mathrm{INI}(A')=\{a,c,\varepsilon\}$; $\mathrm{SIG}(S)=\{\$\}$, $\mathrm{SIG}(A)=\mathrm{SIG}(A')=\{a\}$.
- **No es LL(1):** conflicto en $M[S,b]$ ($S \to Aa$ y $S \to b$) y en $M[A',a]$ ($A' \to adA'$ y $A' \to \varepsilon$).

### Problema 7: LL(1) completo y recuperación en modo pánico (Tema 4)

Para $E \to E\;\texttt{or}\;T \mid T$, $T \to T\;\texttt{and}\;F \mid F$, $F \to \texttt{not}\;F \mid (E) \mid \texttt{true} \mid \texttt{false}$:

- Eliminando recursividad izquierda: $E \to TE'$, $E' \to \texttt{or}\;TE' \mid \varepsilon$, $T \to FT'$, $T' \to \texttt{and}\;FT' \mid \varepsilon$.
- $\mathrm{INI}(E)=\mathrm{INI}(T)=\mathrm{INI}(F)=\{\texttt{not},(,\texttt{true},\texttt{false}\}$, $\mathrm{INI}(E')=\{\texttt{or},\varepsilon\}$, $\mathrm{INI}(T')=\{\texttt{and},\varepsilon\}$.
- $\mathrm{SIG}(E)=\mathrm{SIG}(E')=\{),\$\}$, $\mathrm{SIG}(T)=\mathrm{SIG}(T')=\{\texttt{or},),\$\}$, $\mathrm{SIG}(F)=\{\texttt{and},\texttt{or},),\$\}$.
- La tabla $M$ queda limpia (**es LL(1)**). En la traza con errores para `true or and false )`, al llegar a `$E'T` frente a `and`, como $M[T,\texttt{and}]$ está vacía y $\texttt{and} \notin \mathrm{SIG}(T)$, se descarta `and` de la entrada y prosigue con `false`; al final sobra `)` en pila `$` y se descarta terminando con 2 errores informados.

### Problema 8: Diagnóstico LL(1) sin tabla (Tema 4)

- **(a)** $S \to Aa \mid b$, $A \to aA \mid \varepsilon$: **no es LL(1)** ($\mathrm{INI}(aA) \cap \mathrm{SIG}(A) = \{a\}$).
- **(b)** $S \to iEtSS' \mid a$, $S' \to eS \mid \varepsilon$, $E \to b$: **no es LL(1)** (conflicto en $M[S',e]$, *dangling else*).
- **(c)** $S \to aB \mid bA$, $A \to a \mid bAA$, $B \to b \mid aBB$: **sí es LL(1)** (es una S-gramática).

### Problema 9: Precedencia de operador (Tema 5)

Para $E \to E - E \mid E \mathbin{\hat{}} E \mid (E) \mid id$ (`^` más prioritario que `-`, `-` asoc. izquierda, `^` asoc. derecha):

| | $id$ | $-$ | $\hat{}$ | $($ | $)$ | $\$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $id$ | | $\gtrdot$ | $\gtrdot$ | | $\gtrdot$ | $\gtrdot$ |
| $-$ | $\lessdot$ | $\gtrdot$ | $\lessdot$ | $\lessdot$ | $\gtrdot$ | $\gtrdot$ |
| $\hat{}$ | $\lessdot$ | $\gtrdot$ | $\lessdot$ | $\lessdot$ | $\gtrdot$ | $\gtrdot$ |
| $($ | $\lessdot$ | $\lessdot$ | $\lessdot$ | $\lessdot$ | $\doteq$ | |
| $)$ | | $\gtrdot$ | $\gtrdot$ | | $\gtrdot$ | $\gtrdot$ |
| $\$$ | $\lessdot$ | $\lessdot$ | $\lessdot$ | $\lessdot$ | | |

En la traza de `id - id ^ id ^ id`, el segundo `^` se desplaza por $\hat{} \lessdot \hat{}$ reduciendo primero el exponente derecho: $id - (id \mathbin{\hat{}} (id \mathbin{\hat{}} id))$. Si se añade $E \to -E$ (menos unario), el mismo token tendría doble precedencia y surgiría conflicto $\lessdot / \gtrdot$ en $(-,-)$.

### Problema 10: Precedencia simple (Tema 5)

- **(a)** $S \to aSb \mid c$: $\mathrm{PRIM}^+(S)=\{a,c\}$, $\mathrm{ULT}^+(S)=\{b,c\}$; relaciones $a \doteq S$, $S \doteq b$, $a \lessdot a$, $a \lessdot c$, $b \gtrdot b$, $c \gtrdot b$ (y delimitadores con $\$$). Es GPS porque no hay $\varepsilon$, las partes derechas son distintas y las relaciones disjuntas. Para `aacbb`: $\$\lessdot a\lessdot a\lessdot \underline{c}\gtrdot b\gtrdot b\gtrdot\$$ $\to$ reduce `c` a $S$; luego $\$\lessdot a\lessdot \underline{a\doteq S\doteq b}\gtrdot b\gtrdot\$$ $\to$ reduce $aSb$; finalmente reduce $aSb$ exterior y acepta.
- **(b)** $S \to (L) \mid a$, $L \to L,S \mid S$: como $L$ es recursivo por la izquierda, $L \in \mathrm{PRIM}^+(L)$, generando simultáneamente $(\doteq L$ y $(\lessdot L$. **No es GPS**.

### Problema 11: SLR(1) completo (Tema 6)

Sea $(0)\;Z\to E,\;(1)\;E\to E+T,\;(2)\;E\to T,\;(3)\;T\to id,\;(4)\;T\to (E)$, con $\mathrm{SIG}(E)=\mathrm{SIG}(T)=\{+,),\$\}$.

| Estado | $id$ | $+$ | $($ | $)$ | $\$$ | $E$ | $T$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | $d_3$ | | $d_4$ | | | 1 | 2 |
| **1** | | $d_5$ | | | $\text{acc}$ | | |
| **2** | | $r_2$ | | $r_2$ | $r_2$ | | |
| **3** | | $r_3$ | | $r_3$ | $r_3$ | | |
| **4** | $d_3$ | | $d_4$ | | | 6 | 2 |
| **5** | $d_3$ | | $d_4$ | | | | 7 |
| **6** | | $d_5$ | | $d_8$ | | | |
| **7** | | $r_1$ | | $r_1$ | $r_1$ | | |
| **8** | | $r_4$ | | $r_4$ | $r_4$ | | |

Es **SLR(1)** (9 estados sin conflictos). Ante la cadena errónea `id + ) id`, reduce `id` a $E$, desplaza `+` pasando al estado 5, y falla porque $\text{Acción}[5, )]$ está vacía ("se esperaba `id` o `(`").

### Problema 12: Comparación SLR vs LR(1) vs LALR(1)

Corresponde a la gramática de punteros $S \to L=R \mid R$, $L \to *R \mid id$, $R \to L$ desarrollada íntegramente paso a paso en la sección 4 y sección 5 del capítulo anterior: falla en SLR(1) en $[2,=]$ (10 estados), es **LR(1)** (14 estados) y es **LALR(1)** (10 estados al fusionar $4{+}10$, $5{+}11$, $7{+}13$ y $8{+}12$).

### Problema 13: Gramática LR(1) pero no LALR(1)

Para $S \to aAd \mid bBd \mid aBe \mid bAe$, $A \to c$, $B \to c$: en LR(0) aparecen juntos $A \to c\boldsymbol{\cdot}$ y $B \to c\boldsymbol{\cdot}$ (conflicto r/r en $d, e$ para SLR). En LR(1) los dos caminos quedan separados en $[A\to c\boldsymbol{\cdot}, d], [B\to c\boldsymbol{\cdot}, e]$ (tras `ac`) y $[A\to c\boldsymbol{\cdot}, e], [B\to c\boldsymbol{\cdot}, d]$ (tras `bc`), siendo **LR(1)** (14 estados). Al fusionarlos en LALR(1) las anticipaciones se mezclan creando un conflicto **r/r** en $d$ y $e$ (no es LALR(1)), confirmando el teorema de que la fusión LALR puede crear conflictos r/r pero nunca d/r.

### Problema 14: Precedencias y recuperación con `error` en YACC

Dada la especificación:

```yacc
%token NUM ID
%left  '+' '-'
%left  '*'
%right '^'
%nonassoc UMINUS
%%
prog : prog sent | sent ;
sent : ID '=' expr ';'
     | error ';'        { yyerrok; } ;
expr : expr '+' expr | expr '-' expr | expr '*' expr | expr '^' expr
     | '-' expr %prec UMINUS | '(' expr ')' | NUM | ID ;
```

- **Agrupación:** `1-2-3` $\to$ `(1-2)-3`; `2^3^2` $\to$ `2^(3^2)`; `1+2*3` $\to$ `1+(2*3)`; `-2^2` $\to$ `(-2)^2` (porque `UMINUS` está por debajo de `'^'`). Sin `%prec UMINUS`, `'-' expr` heredaría la precedencia de `'-'`, menor que `'^'`, agrupando `-(2^2)`.
- **Conflicto con `-` frente a `*`:** la regla `expr '-' expr` toma la precedencia de su último terminal (`'-'`); ante `'*'` (mayor precedencia) **desplaza**, y ante `'-'` (igual precedencia y `%left`) **reduce**.
- **Traza de `x = 3 ; y = = 4 ; z = 5 ;`:** tras `y =`, al llegar el segundo `=` falla y llama a `yyerror` una sola vez; desapila hasta el estado que espera `sent` con `sent -> . error ';'`, desplaza `error`, descarta `= 4` hasta encontrar `;`, desplaza `;`, reduce `sent -> error ';'`, ejecuta `yyerrok` para reactivar el aviso de errores y analiza `z = 5 ;` sin problemas. Si la regla fuera `sent : error` sin `;`, tras `error` descartaría todo hasta el siguiente símbolo de $\mathrm{SIG}(\mathit{sent})$ (`ID`, `error`, `$`), perdiendo incluso el `;`.
