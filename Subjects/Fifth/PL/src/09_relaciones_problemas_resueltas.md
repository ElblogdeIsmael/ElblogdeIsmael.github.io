# Relaciones de Problemas Resueltas (Relaciones 1, 2 y 3)

Este capítulo reúne la resolución completa de las tres primeras relaciones de problemas de la asignatura, cubriendo los Temas 1 al 6. En cada ejercicio se incluye la justificación paso a paso y las comprobaciones clave.

## Relación 1: Procesadores de lenguajes

### Ejercicio 1.1: Identificación de fases de compilación

| Tarea del compilador | Fase |
| :--- | :--- |
| Asignar una variable al registro 5 | Generación de código objeto (asignación de registros) |
| Identificar `loop` como etiqueta | Léxico (identificador) y sintáctico (estructura de etiqueta) |
| Detectar tipos incompatibles en una asignación | Análisis semántico |
| Transformar `ind + 4*4` en `ind + 16` | Optimización (plegado de constantes) |
| Traducir `ind + 16` a `Add #16, ind` | Generación de código objeto |
| Construir el árbol sintáctico | Análisis sintáctico |
| Detectar una variable no declarada | Análisis semántico (consulta a la tabla de símbolos) |

### Ejercicio 1.2: Compilador de $L$ para $M$ en dos etapas (*bootstrapping*)

Disponemos de un compilador $C_M^{Y \to M}$ (traduce de $Y$ a código máquina $M$, ejecutándose sobre $M$). Para obtener un compilador nativo de $L$ sobre $M$ ($C_M^{L \to M}$):

1. **Etapa 1:** escribimos un compilador de un subconjunto $L_0$ en el lenguaje $Y$ disponible, $C_Y^{L_0 \to M}$, y lo compilamos con $C_M^{Y \to M}$ obteniendo el ejecutable $C_M^{L_0 \to M}$.
2. **Etapa 2:** escribimos el compilador completo de $L$ usando el subconjunto $L_0$ ($C_{L_0}^{L \to M}$) y lo compilamos con $C_M^{L_0 \to M}$, produciendo finalmente $C_M^{L \to M}$.

### Ejercicio 1.3: Notación BNF extendida del `CASE` de Pascal y del `IF` de Ada

En BNF extendida, `{ ... }` indica cero o más repeticiones y `[ ... ]` indica opcionalidad:

```text
<sent_case> ::= CASE <expresion> OF <caso> { ; <caso> } [ ; ] END
<caso>      ::= <constante> { , <constante> } : <sentencia>

<sent_if>   ::= IF <expresion> THEN <sentencia>
                { ELSIF <expresion> THEN <sentencia> }
                [ ELSE <sentencia> ] ENDIF
```

El delimitador explícito `ENDIF` elimina la ambigüedad clásica del `else` colgante.

### Ejercicio 1.4: Aplicabilidad de un procesador de lenguajes

- **Buscar y sustituir texto:** **sí.** Se apoya en análisis léxico mediante expresiones regulares (como hace `sed` o LEX).
- **Generador de informes:** **sí.** El formato de salida se describe con un lenguaje orientado al problema; requiere análisis léxico, sintáctico (fase central junto al semántico) y síntesis del informe.
- **Expendedor de billetes:** **sí**, si las órdenes del usuario se formulan mediante un lenguaje específico; las fases principales son el análisis sintáctico-semántico de la orden y su interpretación.
- **Medir una pieza a partir de una imagen:** **no** como procesador de lenguajes, ya que una imagen no es una sentencia de un lenguaje formal definido por gramática, sino un problema de visión por computador y reconocimiento de formas.

### Ejercicio 1.5: Corrección de una regla BNF para `WHILE`

La regla `<sentencia_while> ::= WHILE ( <expresión> ) DO <bloque>` es demasiado restrictiva porque obliga a usar un bloque (`BEGIN ... END`) impidiendo sentencias simples como `WHILE (c) DO x := x+1`, y a la vez demasiado permisiva si `<bloque>` incluye declaraciones locales de variables o subprogramas en cada iteración. Se corrige sustituyendo `<bloque>` por `<sentencia>`:

```text
<sentencia_while> ::= WHILE ( <expresión> ) DO <sentencia>
```

## Relación 2: Análisis léxico

### Ejercicio 2.1: Separación de lexemas y tokens

**Apartado (a): fragmento en C:** `int max(int i, intj) { /*...*/ return i>j?i:j; }`

| Token | Lexemas | Atributo |
| :--- | :--- | :--- |
| `TIPO` | `int`, `int` | Tipo entero |
| `ID` | `max`, `i`, `intj`, `i`, `j`, `i`, `j` | Entrada en tabla de símbolos |
| `PARIZQ` / `PARDCH` | `(`, `)` | Sin atributo |
| `COMA` | `,` | Sin atributo |
| `LLAVEIZQ` / `LLAVEDCH` | `{`, `}` | Sin atributo |
| `RETURN` | `return` | Sin atributo |
| `OPREL` | `>` | Mayor |
| `INTERR` / `DOSPUNTOS` | `?`, `:` | Sin atributo |
| `PYC` | `;` | Sin atributo |

Nótese que `intj` (sin espacio intermedio) se agrupa como un único identificador por la regla del lexema más largo; el error sintáctico aparecerá después al faltar un nombre o separador tras el tipo. El comentario `/*...*/` y los espacios no generan tokens.

**Apartado (b): Fortran 77:** `FUNCTION`, `ID(MAX)`, `(`, `ID(I)`, `,`, `ID(J)`, `)` (la línea con `C` en la primera columna es comentario), `IF`, `(`, `ID(I)`, `OPREL(.GT.)`, `ID(J)`, `)`, `THEN`, `ID(MAX)`, `ASIGN(=)`, `ID(I)`, `ELSE`, `ID(MAX)`, `=`, `ID(J)`, `ENDIF` (`END IF` constituye un único token en Fortran 77 porque los espacios no actúan como separadores), `RETURN`.

**Apartado (c): Pascal:** `FUNCTION`, `ID(max)`, `(`, `ID(i)`, `,`, `ID(j)`, `:`, `TIPO(integer)`, `)`, `:`,
`TIPO(integer)`, `;` (comentario `{...}` descartado), `BEGIN`, `IF`, `ID(i)`, `OPREL(>)`,
`ID(j)`, `THEN`, `ID(max)`, `ASIGN(:=)`, `ID(i)`, `ELSE`, `ID(max)`, `:=`, `ID(j)`, `END`, `;`.

### Ejercicio 2.2: Constante real en Pascal sin signo ni exponente

Pascal exige al menos un dígito a ambos lados del punto decimal (válido `3.0`, inválidos `3.` y `.5`). Con $d = [0\text{-}9]$, la expresión regular es:

$$r = d\,d^* \,.\, d\,d^* = d^+ \,.\, d^+$$

Tras construir el AFN mediante Thompson y determinizar por subconjuntos (absorbiendo las transiciones $\lambda$), el AFD resultante tiene cuatro estados útiles (y transiciones implícitas al estado de error):

\input{src/tex/afd_real_pascal.tex}

### Ejercicio 2.3: Especificación LEX básica

```lex
%%
[ \t\n]+                ;
[a-zA-Z][a-zA-Z0-9]*    { return ID; }
\"[^\"\n]*\"            { return CADENA; }
"**"                    { return POTENCIA; }
"*"                     { return POR; }
":="                    { return ASIGN; }
"="                     { return IGUAL; }
"+"                     { return MAS; }
"-"                     { return MENOS; }
"/"                     { return DIV; }
.                       { printf("error lexico: %s\n", yytext); }
%%
```

LEX resuelve `**` frente a `*` y `:=` frente a `=` por longitud del lexema, independientemente del orden. Si existieran palabras reservadas, deberían preceder a la regla de `ID`.

### Ejercicios 2.4 al 2.9: Tablas de tokens con máximo nivel de abstracción

El criterio de abstracción consiste en agrupar en un mismo token todos los terminales que comparten exactamente las mismas posiciones sintácticas y aridad, evitando juntar un operador exclusivamente binario con otro que sea unario y binario. Si la salida alimenta un traductor completo, se añaden atributos; si solo hay análisis sintáctico, se omiten.

**Problema 2.4:** $S \to \texttt{repeat}\;\mathit{exp}\;S\;\texttt{;} \mid \texttt{while}\;\mathit{exp}\;S\;\texttt{;} \mid \texttt{if}\;\mathit{exp}\;S\;\texttt{;} \mid \varepsilon$, y $\mathit{exp} \to \mathit{exp}\texttt{*}\mathit{exp} \mid \mathit{exp}\texttt{/}\mathit{exp} \mid \mathit{exp}\texttt{+}\mathit{exp} \mid \texttt{++}\mathit{exp} \mid \texttt{*}\mathit{exp} \mid \texttt{(}\mathit{exp}\texttt{)} \mid \mathit{const}$.

- `repeat`, `while`, `if` comparten posición (`CONDCICLO`).
- `/` y `+` son exclusivamente binarios (`OPBIN`), mientras `*` es binario y unario (`ASTER`) y `++` es solo unario (`OPUN`).

| Token | Código | Atributo (traducción) | Patrón |
| :--- | :---: | :--- | :--- |
| `CONDCICLO` | 257 | 0 `repeat`, 1 `while`, 2 `if` | `repeat` $\mid$ `while` $\mid$ `if` |
| `PYC` | 258 | -- | `;` |
| `OPBIN` | 259 | 0 `/`, 1 `+` | `/` $\mid$ `+` |
| `ASTER` | 260 | -- | `*` |
| `OPUN` | 261 | -- | `++` |
| `PARIZQ` / `PARDCH` | 262 / 263 | -- | `(` / `)` |
| `CONST` | 264 | valor numérico | `[0-9]+` |

Gramática abstracta equivalente:

$$S \to \mathrm{CONDCICLO}\;\mathit{exp}\;S\;\mathrm{PYC} \mid \varepsilon$$
$$\mathit{exp} \to \mathit{exp}\;\mathrm{ASTER}\;\mathit{exp} \mid \mathit{exp}\;\mathrm{OPBIN}\;\mathit{exp} \mid \mathrm{OPUN}\;\mathit{exp}$$
$$\mathit{exp} \to \mathrm{ASTER}\;\mathit{exp} \mid \mathrm{PARIZQ}\;\mathit{exp}\;\mathrm{PARDCH} \mid \mathrm{CONST}$$

**Problema 2.5 (agrupación de lexemas imperativos):** `OPADIT` $\{+, -\}$, `OPMULT` $\{*, /\}$, `OPREL` $\{>, <\}$, `AND`, `NOT` (unario, separado de `AND`), `TIPO` $\{\texttt{integer}, \texttt{float}, \texttt{char}\}$, `CONSTLOG` $\{\texttt{true}, \texttt{false}\}$, `BEGIN`, `END`, `IF`, `ID` (`j`). Si `-` actuara también como unario, tendría un token propio.

**Problema 2.6:** en $\mathit{Exp} \to \mathit{Const}\;\texttt{!=}\;\mathit{Exp} \mid \mathit{Const}\;\texttt{<}\;\mathit{Exp} \mid \mathit{Const}\;\texttt{>}\;\mathit{Exp} \mid \mathit{Const}\;\texttt{+}\;\mathit{Exp} \mid \texttt{*}\;\mathit{Exp} \mid \texttt{+}\;\mathit{Exp} \mid \mathit{Const}$, resulta: `SENT` $\{\texttt{repeat}, \texttt{while}, \texttt{if}\}$, `OPREL` $\{\texttt{!=}, \texttt{<}, \texttt{>}\}$, `MAS` (`+`, binario y unario), `ASTER` (`*`, unario) y `CONST`.

**Problema 2.7:** ambos operadores `+` y `**` aparecen como binarios y como unarios en las mismas reglas $\Rightarrow$ `OPUB` $\{+, **\}$ (atributos 0: `+`, 1: `**`), `PARIZQ`, `PARDCH` (posiciones distintas) y `CONST`.

**Problema 2.8 (estructura modular con `begin`/`end`, `+` binario y `-` unario/binario):**

| Token | Código | Atributo (traducción) | Patrón |
| :--- | :---: | :--- | :--- |
| `BEGIN` | 257 | -- | `begin` |
| `END` | 258 | -- | `end` |
| `PYC` | 259 | -- | `;` |
| `ASIGN` | 260 | -- | `=` |
| `MAS` | 261 | -- | `+` |
| `MENOS` | 262 | -- | `-` |
| `CONST` | 263 | valor | `[0-9]+` |
| `IDENT` | 264 | lexema / entrada en TS | `[a-z]+` |

Gramática abstracta:

$$\mathit{programa} \to \mathrm{BEGIN}\;\mathit{sentencias}\;\mathrm{END}$$
$$\mathit{sentencias} \to \mathit{sentencias}\;\mathrm{PYC}\;\mathit{sentencia} \mid \mathit{sentencia}$$
$$\mathit{sentencia} \to \mathrm{IDENT}\;\mathrm{ASIGN}\;\mathit{exp} \mid \mathit{programa}$$
$$\mathit{exp} \to \mathit{exp}\;\mathrm{MAS}\;\mathit{exp} \mid \mathit{exp}\;\mathrm{MENOS}\;\mathit{exp} \mid \mathrm{MENOS}\;\mathit{exp} \mid \mathrm{CONST} \mid \mathrm{IDENT}$$

**Problema 2.9:** `*`, `&` y `**` no comparten roles sintácticos (van por separado); `function` y `main` encabezan construcciones distintas (`FUNCTION`, `MAIN`). Resto de tokens: `IDENT`, `PARIZQ`, `PARDCH`, `LLAVEIZQ`, `LLAVEDCH`, `ASIGN`, `PYC`, `ASTER`, `POT` (`**`), `AMP` (`&`), `CONST` (valor y tipo entero/real).

### Ejercicio 2.10: Prioridad en LEX y palabras reservadas

Si la regla `[a-zA-Z]([a-zA-Z0-9])*` antecede a `while` e `if`, al leer `while` las tres reglas empatan en longitud (5 caracteres) y LEX elige la primera, devolviendo siempre `ID`. Soluciones:

1. Colocar las palabras reservadas **antes** de la regla de `ID`.
2. Reconocer cualquier palabra con la regla de `ID` y consultar en su acción una tabla de palabras reservadas antes de insertarla en la tabla de símbolos.

## Relación 3: Análisis sintáctico

### Ejercicio 3.1: Ambigüedad de $S \to aSbS \mid bSaS \mid \varepsilon$

La cadena `abab` admite dos derivaciones más a la izquierda distintas (y dos árboles diferentes):

1. $S \Rightarrow aSbS \Rightarrow abS \Rightarrow abaSbS \Rightarrow ababS \Rightarrow abab$ (la primera $S$ deriva a $\varepsilon$ y la segunda a $aSbS$).
2. $S \Rightarrow aSbS \Rightarrow abSaSbS \Rightarrow abaSbS \Rightarrow ababS \Rightarrow abab$ (la primera $S$ deriva a $bSaS$ y la última a $\varepsilon$).

### Ejercicio 3.2: Gramática no ambigua de los enteros pares

$$N \to D\,P \mid P \qquad D \to D\,d \mid d \qquad P \to 0 \mid 2 \mid 4 \mid 6 \mid 8 \qquad d \to 0 \mid 1 \mid \cdots \mid 9$$

La recursividad lineal por la izquierda en $D$ garantiza un único árbol de derivación por cada cadena.

### Ejercicio 3.3: Desambiguación de `Numero -> Digito | Numero Numero`

La cadena `123` tiene dos árboles: `(12)(3)` y `(1)(23)`. Se elimina la ambigüedad restringiendo la recursión a un solo lado:

$$\mathit{Numero} \to \mathit{Numero}\;\mathit{Digito} \mid \mathit{Digito}$$

### Ejercicio 3.4: Derivaciones en $S \to (S*S) \mid x$

- `x`: $S \Rightarrow x$ (izquierda y derecha coinciden).
- `(x*(x*x))`: derivación izquierda $S \Rightarrow (S*S) \Rightarrow (x*S) \Rightarrow (x*(S*S)) \Rightarrow (x*(x*S)) \Rightarrow (x*(x*x))$; derivación derecha $S \Rightarrow (S*S) \Rightarrow (S*(S*S)) \Rightarrow (S*(S*x)) \Rightarrow (S*(x*x)) \Rightarrow (x*(x*x))$.
- `x*x`: no pertenece al lenguaje (todo `*` aparece entre paréntesis).

### Ejercicio 3.5: Tabla LL(1) de $S \to x \mid (SR,\; R \to ,SR \mid )$

Conjuntos: $\mathrm{INI}(S)=\{x,(\}$, $\mathrm{INI}(R)=\{,\,,)\}$, $\mathrm{SIG}(S)=\mathrm{SIG}(R)=\{,\,,),\$\}$. Las alternativas empiezan por terminales disjuntos: es **LL(1)**.

| | $x$ | $($ | $,$ | $)$ | $\$$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| $S$ | $S \to x$ | $S \to (SR$ | | | |
| $R$ | | | $R \to ,SR$ | $R \to )$ | |

Traza de `(x,(x,x))` (cima de la pila a la derecha):

| Pila | Entrada | Acción |
| :--- | :--- | :--- |
| `$ S` | `(x,(x,x))$` | $S \to (SR$ |
| `$ R S (` | `(x,(x,x))$` | emparejar `(` |
| `$ R S` | `x,(x,x))$` | $S \to x$, emparejar `x` |
| `$ R` | `,(x,x))$` | $R \to ,SR$, emparejar `,` |
| `$ R S` | `(x,x))$` | $S \to (SR$, emparejar `(` |
| `$ R R S` | `x,x))$` | $S \to x$, emparejar `x` |
| `$ R R` | `,x))$` | $R \to ,SR$, emparejar `,` |
| `$ R R S` | `x))$` | $S \to x$, emparejar `x` |
| `$ R R` | `))$` | $R \to )$, emparejar `)` |
| `$ R` | `)$` | $R \to )$, emparejar `)` |
| `$` | `$` | aceptar |

### Ejercicio 3.6: Diagnóstico rápido LL(1)

- **(a)** $S \to aABC$, $A \to a \mid bbD$, $B \to a \mid \varepsilon$, $C \to b \mid \varepsilon$, $D \to c \mid \varepsilon$: $\mathrm{SIG}(B)=\{b,\$\}$, $\mathrm{SIG}(C)=\{\$\}$, $\mathrm{SIG}(D)=\mathrm{SIG}(A)=\{a,b,\$\}$. Todas las intersecciones son vacías $\Rightarrow$ **LL(1)**.
- **(b)** $S \to AD$, $A \to bB \mid \varepsilon$, $B \to Ca \mid D$, $C \to a \mid \varepsilon$, $D \to b \mid c$: $\mathrm{SIG}(A)=\mathrm{INI}(D)=\{b,c\}$ choca en $M[A,b]$, y $\mathrm{SIG}(C)=\{a\}$ choca en $M[C,a]$. **No es LL(1)**.
- **(c)** $S \to BDf \mid e$, $B \to eD \mid aB$, $D \to d \mid \varepsilon$: conflicto en $M[S,e]$ y $M[D,d]$. **No es LL(1)**.
- **(d)** Conflicto por falta de factorización en $B \to c \mid cBh$, además de $M[X,c]$ y $M[M,c]$. **No es LL(1)**.

### Ejercicio 3.7: El *dangling else* en LL(1)

Para $S \to iEtSS' \mid a,\; S' \to eS \mid \varepsilon,\; E \to c$, se cumple $\mathrm{SIG}(S')=\mathrm{SIG}(S)=\{e,\$\}$. Como $S' \to eS$ empieza por $e$ y $S'$ es anulable con $e \in \mathrm{SIG}(S')$, la celda $M[S',e]$ contiene dos reglas ($eS$ y $\varepsilon$): **no es LL(1)** (ambigua). Para asociar el `else` al `if` más cercano en `i c t i c t a e a`, se conserva únicamente $S' \to eS$ en $M[S',e]$.

### Ejercicio 3.8: Recuperación de errores en tabla LL(1) de expresiones

| | $+$ | $*$ | $id$ | $($ | $)$ | $\$$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $E$ | `e1` | `e1` | $TE'$ | $TE'$ | `sinc` | `sinc` |
| $E'$ | $+TE'$ | `e2` | `e2` | `e2` | $\varepsilon$ | $\varepsilon$ |
| $T$ | `sinc` | `e1` | $FT'$ | $FT'$ | `sinc` | `sinc` |
| $T'$ | $\varepsilon$ | $*FT'$ | `e2` | `e2` | $\varepsilon$ | $\varepsilon$ |
| $F$ | `sinc` | `sinc` | $id$ | $(E)$ | `sinc` | `sinc` |

Significado en modo pánico: `sinc` (la entrada pertenece a $\mathrm{SIG}$) indica falta de operando y extrae el no terminal de la pila; `e1` (expresión iniciada por operador como `+id`) salta el símbolo de entrada; `e2` (dos operandos seguidos) supone falta de operador y salta la entrada. Si la cima terminal discrepa del token entrante (por ejemplo falta `)`), se extrae el terminal de la pila.

### Ejercicio 3.9: Eliminación de recursividad izquierda y prueba LL(1)

Dada $H \to Hab \mid Hjc \mid mHj \mid ck \mid tHj \mid \varepsilon$:

$$H \to mHjH' \mid ckH' \mid tHjH' \mid H' \qquad H' \to abH' \mid jcH' \mid \varepsilon$$

Como $j \in \mathrm{SIG}(H) = \mathrm{SIG}(H')$ y $H' \to jcH'$ empieza por $j$ siendo $H'$ anulable, aparece conflicto en $M[H',j]$: **no es LL(1)**.

### Ejercicio 3.10: Factorización por la izquierda

- **(a)** $Z \to bY \mid cN \mid j$, $Y \to NW \mid Aj$, $W \to AV \mid c$, $V \to c \mid \varepsilon$, $N \to x$, $A \to h \mid z$. Conjuntos iniciales disjuntos y $V$ anulable con $\mathrm{SIG}(V)=\{\$\}$: **LL(1)**.
- **(b)** Aunque se factorice $S \to wP \mid xQ$, $P \to Az \mid BR$, $R \to y \mid z$, $Q \to Bz \mid Ay$, como $A \to v$ y $B \to v$, resulta $\mathrm{INI}(Az)=\mathrm{INI}(BR)=\{v\}$. La gramática es ambigua (`wvz` tiene dos derivaciones) y **no es LL(1)**.
- **(c)** Sustituyendo $N \to bk \mid cH$ en $Z \to \cdots \mid Nc \mid \cdots$ y factorizando: $Z \to bY \mid cW \mid t$, $Y \to NAc \mid kc \mid j$, $W \to Hc \mid A$. Alternativas disjuntas: **LL(1)**.

### Ejercicio 3.11: Relaciones de precedencia simple en formas sentenciales

Para $E \to C \mid E\;\texttt{or}\;C,\; C \to I \mid C\;\texttt{and}\;I,\; I \to P \mid \texttt{not}\;P,\; P \to t \mid f \mid (E)$:

- $\mathrm{PRIM}^+(E)=\{E, C, I, P,$ $\texttt{not}, t, f, (\}$, $\mathrm{PRIM}^+(C)=\{C, I, P, \texttt{not}, t, f, (\}$,
  $\mathrm{PRIM}^+(I)=\{P, \texttt{not}, t, f, (\}$, $\mathrm{PRIM}^+(P)=\{t, f, (\}$.
- $\mathrm{ULT}^+(E)=\{C, I, P,$ $t, f, )\}$, $\mathrm{ULT}^+(C)=\{I, P, t, f, )\}$,
  $\mathrm{ULT}^+(I)=\{P, t, f, )\}$, $\mathrm{ULT}^+(P)=\{t, f, )\}$.

En `(d) E or C` y `(e) E or C and I` surge conflicto $\texttt{or} \doteq C$ (de $E \to E\;\texttt{or}\;C$) junto a $\texttt{or} \lessdot C$ (porque $C \in \mathrm{PRIM}^+(C)$ vía $C \to C\;\texttt{and}\;I$). Por tanto **no es de precedencia simple**.

### Ejercicio 3.12: Clasificación en precedencia de operador y simple

- **(a)** La gramática del 3.11 **sí es de precedencia de operador** (sin $\varepsilon$, sin dos no terminales seguidos y relaciones disjuntas entre terminales: `and` tiene más precedencia que `or`, `not` más que `and`, asociatividad izquierda), pero **no simple** ($\texttt{or} \doteq/\lessdot C$ y $( \doteq/\lessdot E$).
- **(b)** $E \to E+T \mid T$, $T \to TF \mid F$, $F \to F* \mid a \mid b$: ni operador ($TF$) ni simple ($+\doteq/\lessdot T$ y $T \doteq/\lessdot F$).
- **(c)** $S \to aAd \mid bec \mid bAc$, $A \to e$: forma de operador, pero $b \doteq e$ (por $bec$) choca con $b \lessdot e$ (por $bAc$). No es de operador ni simple.
- **(d)** Con $A \to \varepsilon$ y $C \to \varepsilon$: falla en ambos métodos ($\varepsilon$ y dos reglas con parte derecha vacía).
- **(e)** $L \to Lb \mid aAC$, $A \to dA \mid b$, $C \to Ad \mid f$: ni operador ($AC$) ni simple ($A \doteq/\lessdot d$).

### Ejercicio 3.13: Colecciones SLR(1), LR(1) y LALR(1)

Resumen de resultados sobre las ocho gramáticas de la relación:

1. **(a)** $S \to Aa \mid bAc \mid Bc \mid bBa$, $A \to d$, $B \to d$: **LR(1) sí** (13 estados); **SLR y LALR no** (fusión de $I_5$ e $I_9$ genera r/r en $a$ y $c$).
2. **(b)** $S \to wAz \mid xBz \mid wBy \mid wBz \mid xAy$, $A \to v$, $B \to v$: **ambigua** (`wvz`); conflicto r/r en $z$ en LR(1). No es SLR, LR(1) ni LALR.
3. **(c)** $(1)\;S \to aSD,\;(2)\;S \to b,\;(3)\;D \to Dc,\;(4)\;D \to e$: **SLR, LALR (8 estados) y LR(1) (14 estados)**. En $I_5=\{S\to aSD\boldsymbol{\cdot},\; D\to D\boldsymbol{\cdot}c\}$ LR(0) tendría d/r con $c$, pero $c \notin \mathrm{SIG}(S)=\{e,\$\}$.
4. **(d)** $(1)\;S \to aDS,\;(2)\;S \to b,\;(3)\;D \to cD,\;(4)\;D \to \varepsilon$: $\mathrm{SIG}(S)=\{\$\}$, $\mathrm{SIG}(D)=\{a,b\}$. Tanto SLR como LR(1) y LALR tienen exactamente **8 estados sin conflictos** (nota clave: $\mathrm{goto}(I_0, D) = \emptyset$ porque $I_0$ no contiene ningún ítem con $\boldsymbol{\cdot}D$).

| Estado (3.13d) | $a$ | $b$ | $c$ | $\$$ | $S$ | $D$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | $d_2$ | $d_3$ | | | 1 | |
| **1** | | | | $\text{acc}$ | | |
| **2** | $r_4$ | $r_4$ | $d_5$ | | | 4 |
| **3** | | | | $r_2$ | | |
| **4** | $d_2$ | $d_3$ | | | 6 | |
| **5** | $r_4$ | $r_4$ | $d_5$ | | | 7 |
| **6** | | | | $r_1$ | | |
| **7** | $r_3$ | $r_3$ | | | | |

5. **(e)** $(1)\;S \to AD,\;(2)\;A \to mD,\;(3)\;A \to \varepsilon,\;(4)\;D \to b,\;(5)\;D \to c$: **SLR (8 estados), LALR (8) y LR(1) (10)**. En $I_0$, $r_3$ va solo en $\mathrm{SIG}(A)=\{b,c\}$ y $d_3$ en $m$.
6. **(f)** $S \to ADk$, $A \to Df \mid \varepsilon$, $D \to b \mid c$: conflicto d/r en $[0, b]$ y $[0, c]$ que persiste en LR(1) (requeriría mirar dos símbolos, LR(2)). No es SLR, LR(1) ni LALR.
7. **(g)** $(1)\;S \to badD,\;(2)\;D \to Df,\;(3)\;D \to a,\;(4)\;D \to \varepsilon$: **SLR, LALR y LR(1)** (8 estados).
8. **(h)** $S \to aSbb \mid a \mid \varepsilon$: en $I_3=\mathrm{goto}(I_2,a)$ coexisten $[S\to a\boldsymbol{\cdot},b]$ y $[S\to\boldsymbol{\cdot},b]$ $\Rightarrow$ conflicto r/r en $b$. No es SLR, LR(1) ni LALR.

### Ejercicio 3.14: Entradas de error en tabla SLR(1) de $S \to XX,\; X \to aX \mid b$

| Estado | $a$ | $b$ | $\$$ | $S$ | $X$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | $d_3$ | $d_4$ | `e1` | 1 | 2 |
| **1** | `e2` | `e2` | $\text{acc}$ | | |
| **2** | $d_3$ | $d_4$ | `e3` | | 5 |
| **3** | $d_3$ | $d_4$ | `e4` | | 6 |
| **4** | $r_3$ | $r_3$ | $r_3$ | | |
| **5** | `e2` | `e2` | $r_1$ | | |
| **6** | $r_2$ | $r_2$ | $r_2$ | | |

- `e1`: entrada vacía (faltan las dos $X$; insertar `b b` o terminar).
- `e2`: entrada sobrante tras frase completa (descartar entrada hasta `$`).
- `e3`: falta la segunda $X$ (insertar `b` y continuar).
- `e4`: falta terminador tras `a` (se esperaba `a` o `b`; insertar `b`).

### Ejercicio 3.15: Resolución de conflictos en cuatro operadores

Para $E \to E+E \mid E*E \mid E/E \mid E-E \mid (E) \mid id$ (con `*`, `/` más prioritarios que `+`, `-` y todos asociativos por la izquierda), en los estados $I_9$ ($+$), $I_{10}$ ($*$), $I_{11}$ ($/$) y $I_{12}$ ($-$) aparecen 16 conflictos d/r:

| Estado reducido | $+$ | $-$ | $*$ | $/$ |
| :--- | :---: | :---: | :---: | :---: |
| $I_9$: $E \to E+E\boldsymbol{\cdot}$ | $r_1$ | $r_1$ | $d_5$ | $d_6$ |
| $I_{12}$: $E \to E-E\boldsymbol{\cdot}$ | $r_4$ | $r_4$ | $d_5$ | $d_6$ |
| $I_{10}$: $E \to E*E\boldsymbol{\cdot}$ | $r_2$ | $r_2$ | $r_2$ | $r_2$ |
| $I_{11}$: $E \to E/E\boldsymbol{\cdot}$ | $r_3$ | $r_3$ | $r_3$ | $r_3$ |

Las columnas `)` y `$` siempre reducen.

### Ejercicio 3.16: Transformación a LL(1) de gramática con bloques y declaraciones

Dada $S \to AB$, $A \to \texttt{begin}\;S\;\texttt{end}\;B\;\texttt{theend} \mid \varepsilon$, $B \to \texttt{var}\;L\;\texttt{:}\;\texttt{tipo} \mid B\;\texttt{endvar} \mid \varepsilon$, $L \to L\;\texttt{,}\;\texttt{id} \mid \texttt{id}$:

1. No es LL(1) inicialmente por recursividad izquierda en $B$ y $L$. Al eliminarla: $B \to \texttt{var}\;L\;\texttt{:}\;\texttt{tipo}\;B' \mid B'$, $B' \to \texttt{endvar}\;B' \mid \varepsilon$, $L \to \texttt{id}\;L'$, $L' \to \texttt{,}\;\texttt{id}\;L' \mid \varepsilon$.
2. Con $\mathrm{SIG}(B)=\mathrm{SIG}(B')=\{\texttt{end},$ $\texttt{theend}, \$\}$, $\mathrm{SIG}(L)=\mathrm{SIG}(L')=\{\texttt{:}\}$ y $\mathrm{SIG}(A)=\{\texttt{var},$ $\texttt{endvar}, \texttt{end}, \$\}$, la tabla LL(1) queda sin conflictos.
3. La cadena de entrada `begin var a,b:tipo` `var c:tipo endvar` `end var d:tipo theend` provoca error cuando la cima es $B'$ y llega el segundo `var`, ya que $B$ admite como máximo una cláusula `var` seguida de cero o más `endvar`.

### Ejercicio 3.17: El *if-then-else* en análisis LR

Para $(1)\;S\to iEtSS',\;(2)\;S\to a,\;(3)\;S'\to eS,\;(4)\;S'\to \varepsilon,\;(5)\;E\to c$, en $I_7 = \{ S \to iEtS\boldsymbol{\cdot} S' \mid S' \to \boldsymbol{\cdot} eS,\; S' \to \boldsymbol{\cdot} \}$ aparece un conflicto d/r en $[7, e]$ ($d_9$ frente a $r_4$) porque $e \in \mathrm{SIG}(S')$. Persiste en LR(1) (19 estados) y en LALR (11 estados) al tratarse de una gramática ambigua. Se resuelve dejando $d_9$ para emparejar cada `else` con el `if` más interno.

### Ejercicio 3.18: Matriz de precedencia y asociatividad en conflictos LR

Estados 5 ($E+E\boldsymbol{\cdot}$) y 6 ($E-E\boldsymbol{\cdot}$), con desplazamientos $d_3$ ($+$) y $d_4$ ($-$):

| Supuesto | Estado 5: entra $+$ | Estado 5: entra $-$ | Estado 6: entra $+$ | Estado 6: entra $-$ |
| :--- | :---: | :---: | :---: | :---: |
| (a) $+$ izq, $-$ der, $-$ $>$ $+$ | $r_1$ | $d_4$ | $r_2$ | $d_4$ |
| (b) $+$ der, $-$ der, $-$ $>$ $+$ | $d_3$ | $d_4$ | $r_2$ | $d_4$ |
| (c) $+$ izq, $-$ der, $+$ $>$ $-$ | $r_1$ | $r_1$ | $d_3$ | $d_4$ |
| (d) $+$ der, $-$ der, $+$ $>$ $-$ | $d_3$ | $r_1$ | $d_3$ | $d_4$ |
| (e), (f) $+$ izq, $-$ izq, $-$ $>$ $+$ | $r_1$ | $d_4$ | $r_2$ | $r_2$ |
| (g) ambos izq, misma prec. | $r_1$ | $r_1$ | $r_2$ | $r_2$ |
| (h) ambos der, misma prec. | $d_3$ | $d_4$ | $d_3$ | $d_4$ |

### Ejercicio 3.19: Conflicto del `IF` en YACC

- **(a)** Es un conflicto **desplaza/reduce**: tras `IF e THEN sentencia`, ante `ELSE` duda entre reducir el `IF` simple o desplazar `ELSE`.
- **(b)** Puede resolverse declarando `%nonassoc LOWER_THAN_ELSE`, debajo `%nonassoc TOKEN_ELSE`, y añadiendo `%prec LOWER_THAN_ELSE` a la regla sin `ELSE` (o reescribiendo la gramática en sentencias emparejadas y no emparejadas).
- **(c)** La acción por defecto de YACC (desplazar) resuelve correctamente el conflicto asociando cada `ELSE` al `IF` más cercano.

### Ejercicio 3.20: Producciones `error` en YACC a partir de `y.output`

Añadiendo solo las reglas mínimas para no multiplicar conflictos:

- Error en `expresion`: `expresion : error ;` (sincroniza con $\mathrm{SIG}(\mathit{expresion})$).
- Error en `COMA`: `lista_expr : lista_expr error expresion ;`.
- Error en `PCOMA`: `sentencias : sentencias error PCOMA | error PCOMA ;` (descarta hasta el punto y coma y reanuda en la siguiente sentencia).
