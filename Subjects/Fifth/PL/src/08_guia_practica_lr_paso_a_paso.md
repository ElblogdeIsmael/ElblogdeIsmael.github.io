# Guía Práctica de Métodos LR Paso a Paso

Esta guía recorre la familia LR con ejemplos encadenados: donde falla un método arranca el siguiente. El objetivo es dominar la mecánica exacta de examen desde la gramática aumentada hasta las trazas de pila y la resolución de ambigüedades.

## Núcleo común a todos los analizadores LR

Todos los analizadores LR(0), SLR(1), LR(1) y LALR(1) ejecutan el mismo bucle sobre la pila de estados y símbolos alternados $0 \; X_1 \; s_1 \; X_2 \; s_2 \cdots X_m \; s_m$. Con el estado $s$ en la cima y el token $a$ en la entrada, consultan $\text{Acción}[s, a]$:

- **Desplazar ($d_j$):** apila el terminal $a$ y el estado $j$, y avanza al siguiente token.
- **Reducir ($r_k$, regla $A \to \beta$):** desapila $2|\beta|$ elementos (símbolo y estado por cada elemento de $\beta$). Si $|\beta| = 0$ (producción $\varepsilon$), no se extrae nada. Con el estado $t$ que queda visible en la cima, se apila $A$ y luego $\text{Ir\_a}[t, A]$.
- **Aceptar ($\text{acc}$):** entrada aceptada.
- **Casilla vacía:** error sintáctico.

Al construir la tabla para cualquier gramática aumentada con $(0)\; S' \to S$:

1. Si $\mathrm{goto}(I_i, a) = I_j$ para $a \in V_T$, entonces $\text{Acción}[i, a] = d_j$.
2. Si $\mathrm{goto}(I_i, A) = I_j$ para $A \in V_N$, entonces $\text{Ir\_a}[i, A] = j$.
3. Si el ítem de cierre completo de $S'$ está en $I_i$, entonces $\text{Acción}[i, \$] = \text{acc}$.
4. Lo único que cambia entre LR(0), SLR(1), LR(1) y LALR(1) es en qué columnas se colocan las reducciones $r_k$ y si el ítem lleva o no símbolo de anticipación.

## Ejemplo 1: LR(0) paso a paso

Sea la gramática:

$$S \to XX \qquad X \to aX \mid b$$

Aumentamos y numeramos:

$$(0)\; S' \to S \qquad (1)\; S \to XX \qquad (2)\; X \to aX \qquad (3)\; X \to b$$

### Construcción de la colección LR(0)

Partimos de $S' \to \boldsymbol{\cdot} S$. Al haber un no terminal tras el punto, incorporamos las reglas de $S$, y por $S \to \boldsymbol{\cdot} XX$ añadimos las reglas de $X$:

- $I_0 = \mathrm{clausura}(\{S' \to \boldsymbol{\cdot} S\}) = \{ S' \to \boldsymbol{\cdot} S \mid S \to \boldsymbol{\cdot} XX,\; X \to \boldsymbol{\cdot} aX,\; X \to \boldsymbol{\cdot} b \}$
- $I_1 = \mathrm{goto}(I_0, S) = \{ S' \to S\boldsymbol{\cdot} \}$
- $I_2 = \mathrm{goto}(I_0, X) = \{ S \to X\boldsymbol{\cdot} X \mid X \to \boldsymbol{\cdot} aX,\; X \to \boldsymbol{\cdot} b \}$
- $I_3 = \mathrm{goto}(I_0, a) = \{ X \to a\boldsymbol{\cdot} X \mid X \to \boldsymbol{\cdot} aX,\; X \to \boldsymbol{\cdot} b \}$
- $I_4 = \mathrm{goto}(I_0, b) = \{ X \to b\boldsymbol{\cdot} \}$
- Desde $I_2$: $I_5 = \mathrm{goto}(I_2, X) = \{ S \to XX\boldsymbol{\cdot} \}$, $\mathrm{goto}(I_2, a) = I_3$, $\mathrm{goto}(I_2, b) = I_4$.
- Desde $I_3$: $I_6 = \mathrm{goto}(I_3, X) = \{ X \to aX\boldsymbol{\cdot} \}$, $\mathrm{goto}(I_3, a) = I_3$ (bucle), $\mathrm{goto}(I_3, b) = I_4$.

\input{src/tex/afd_lr0_s_xx.tex}

### Tabla LR(0) y verificación

En LR(0), un ítem de reducción coloca $r_k$ en todas las columnas de Acción:

| Estado | $a$ | $b$ | $\$$ | $S$ | $X$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | $d_3$ | $d_4$ | | 1 | 2 |
| **1** | | | $\text{acc}$ | | |
| **2** | $d_3$ | $d_4$ | | | 5 |
| **3** | $d_3$ | $d_4$ | | | 6 |
| **4** | $r_3$ | $r_3$ | $r_3$ | | |
| **5** | $r_1$ | $r_1$ | $r_1$ | | |
| **6** | $r_2$ | $r_2$ | $r_2$ | | |

Cada estado con reducción ($I_1, I_4, I_5, I_6$) contiene únicamente ese ítem, sin conflictos. Por tanto la gramática es LR(0) (y automáticamente SLR(1), LALR(1) y LR(1)).

### Trazas sobre la tabla LR(0)

Para la cadena válida `abaab`:

| Pila | Entrada | Acción |
| :--- | :--- | :--- |
| `0` | `a b a a b $` | $d_3$ ($\text{Acción}[0,a]$) |
| `0 a 3` | `b a a b $` | $d_4$ |
| `0 a 3 b 4` | `a a b $` | $r_3$: $X \to b$. Saca 2 (`b`, `4`), queda `3`; $\text{Ir\_a}[3,X] = 6$ |
| `0 a 3 X 6` | `a a b $` | $r_2$: $X \to aX$. Saca 4, queda `0`; $\text{Ir\_a}[0,X] = 2$ |
| `0 X 2` | `a a b $` | $d_3$ |
| `0 X 2 a 3` | `a b $` | $d_3$ |
| `0 X 2 a 3 a 3` | `b $` | $d_4$ |
| `0 X 2 a 3 a 3 b 4` | `$` | $r_3$, $\text{Ir\_a}[3,X] = 6$ |
| `0 X 2 a 3 a 3 X 6` | `$` | $r_2$, $\text{Ir\_a}[3,X] = 6$ |
| `0 X 2 a 3 X 6` | `$` | $r_2$, $\text{Ir\_a}[2,X] = 5$ |
| `0 X 2 X 5` | `$` | $r_1$: $S \to XX$. Saca 4, queda `0`; $\text{Ir\_a}[0,S] = 1$ |
| `0 S 1` | `$` | $\text{acc}$ |

Para la cadena errónea `aba`: llega hasta `0 X 2 a 3` con entrada `$`. Como $\text{Acción}[3, \$]$ está vacía, se detecta el error (falta la `b` del segundo $X$). Un fallo frecuente en el examen es consultar `Ir_a` con el estado de la cima antes de desapilar; siempre se consulta con el estado que queda debajo tras extraer $2|\beta|$ elementos.

## Ejemplo 2: SLR(1) con $\varepsilon$-producciones

Consideremos una gramática con declaraciones opcionales y sentencias:

$$(0)\; S' \to P \qquad (1)\; P \to DS \qquad (2)\; D \to v ; D \qquad (3)\; D \to \varepsilon \qquad (4)\; S \to Si \qquad (5)\; S \to i$$

Calculamos Iniciales y Seguidores:

- $\mathrm{INI}(D) = \{v, \varepsilon\}$, $\mathrm{INI}(S) = \{i\}$, $\mathrm{INI}(P) = \{v, i\}$.
- $\mathrm{SIG}(P) = \{\$\}$, $\mathrm{SIG}(D) = \{i\}$, $\mathrm{SIG}(S) = \{i, \$\}$.

### Colección de estados

Observa que $D \to \varepsilon$ genera el ítem $D \to \boldsymbol{\cdot}$, que ya es de reducción:

- $I_0 = \{ S' \to \boldsymbol{\cdot} P \mid P \to \boldsymbol{\cdot} DS,\; D \to \boldsymbol{\cdot} v;D,\; D \to \boldsymbol{\cdot} \}$
- $I_1 = \mathrm{goto}(I_0, P) = \{ S' \to P\boldsymbol{\cdot} \}$
- $I_2 = \mathrm{goto}(I_0, D) = \{ P \to D\boldsymbol{\cdot} S \mid S \to \boldsymbol{\cdot} Si,\; S \to \boldsymbol{\cdot} i \}$
- $I_3 = \mathrm{goto}(I_0, v) = \{ D \to v\boldsymbol{\cdot} ;D \}$
- $I_4 = \mathrm{goto}(I_2, S) = \{ P \to DS\boldsymbol{\cdot},\; S \to S\boldsymbol{\cdot} i \}$
- $I_5 = \mathrm{goto}(I_2, i) = \{ S \to i\boldsymbol{\cdot} \}$
- $I_6 = \mathrm{goto}(I_3, ;) = \{ D \to v;\boldsymbol{\cdot} D \mid D \to \boldsymbol{\cdot} v;D,\; D \to \boldsymbol{\cdot} \}$
- $I_7 = \mathrm{goto}(I_4, i) = \{ S \to Si\boldsymbol{\cdot} \}$
- $I_8 = \mathrm{goto}(I_6, D) = \{ D \to v;D\boldsymbol{\cdot} \}$, y $\mathrm{goto}(I_6, v) = I_3$.

En LR(0) aparecen tres conflictos desplaza/reduce: en $I_0$ e $I_6$ frente a $v$ (desplazar $v$ o reducir $D \to \varepsilon$) y en $I_4$ frente a $i$ (desplazar $i$ o reducir $P \to DS$). Por tanto no es LR(0).

### Tabla SLR(1) y traza con $\varepsilon$

En SLR(1), cada reducción $A \to \alpha\boldsymbol{\cdot}$ se escribe solo en $\mathrm{SIG}(A)$ (la parte izquierda de la regla, nunca la de otras reglas):

| Estado | $v$ | $;$ | $i$ | $\$$ | $P$ | $D$ | $S$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | $d_3$ | | $r_3$ | | 1 | 2 | |
| **1** | | | | $\text{acc}$ | | | |
| **2** | | | $d_5$ | | | | 4 |
| **3** | | $d_6$ | | | | | |
| **4** | | | $d_7$ | $r_1$ | | | |
| **5** | | | $r_5$ | $r_5$ | | | |
| **6** | $d_3$ | | $r_3$ | | | 8 | |
| **7** | | | $r_4$ | $r_4$ | | | |
| **8** | | | $r_2$ | | | | |

No hay casillas con dos acciones: la gramática es SLR(1).

Traza para `v ; v ; i i`:

| Pila | Entrada | Acción |
| :--- | :--- | :--- |
| `0` | `v ; v ; i i $` | $d_3$ |
| `0 v 3` | `; v ; i i $` | $d_6$ |
| `0 v 3 ; 6` | `v ; i i $` | $d_3$ |
| `0 v 3 ; 6 v 3` | `; i i $` | $d_6$ |
| `0 v 3 ; 6 v 3 ; 6` | `i i $` | $r_3$: $D \to \varepsilon$. Saca 0 elementos; apila $D$ y $\text{Ir\_a}[6,D]=8$ |
| `0 v 3 ; 6 v 3 ; 6 D 8` | `i i $` | $r_2$: $D \to v;D$. Saca 6, queda `6`; $\text{Ir\_a}[6,D]=8$ |
| `0 v 3 ; 6 D 8` | `i i $` | $r_2$: saca 6, queda `0`; $\text{Ir\_a}[0,D]=2$ |
| `0 D 2` | `i i $` | $d_5$ |
| `0 D 2 i 5` | `i $` | $r_5$: $S \to i$, $\text{Ir\_a}[2,S]=4$ |
| `0 D 2 S 4` | `i $` | $d_7$ |
| `0 D 2 S 4 i 7` | `$` | $r_4$: $S \to Si$, $\text{Ir\_a}[2,S]=4$ |
| `0 D 2 S 4` | `$` | $r_1$: $P \to DS$, $\text{Ir\_a}[0,P]=1$ |
| `0 P 1` | `$` | $\text{acc}$ |

El fallo del método SLR aparece cuando $\mathrm{SIG}(A)$ es demasiado amplio: como es global para toda la gramática, incluye terminales que jamás pueden seguir a $A$ en el estado concreto actual.

## Ejemplo 3: LR(1) canónico cuando SLR falla

Sea la gramática de asignaciones con punteros:

$$(0)\; S' \to S \quad (1)\; S \to L=R \quad (2)\; S \to R \quad (3)\; L \to *R \quad (4)\; L \to id \quad (5)\; R \to L$$

Aquí $\mathrm{SIG}(S) = \{\$\}$ y $\mathrm{SIG}(L) = \mathrm{SIG}(R) = \{=, \$\}$. En LR(0), el estado $I_2 = \mathrm{goto}(I_0, L) = \{ S \to L\boldsymbol{\cdot}=R,\; R \to L\boldsymbol{\cdot} \}$ tiene un conflicto d/r con `=` en SLR porque `=` pertenece a $\mathrm{SIG}(R)$. Sin embargo, en $I_2$ estamos al principio de una sentencia; tras $R$ allí solo puede venir `$` (el `=` detrás de $R$ solo aparece dentro de $*R$).

### Regla exacta de clausura LR(1)

De $[A \to \alpha\boldsymbol{\cdot} B\beta,\; a]$ añadimos $[B \to \boldsymbol{\cdot}\gamma,\; b]$ para todo $b \in \mathrm{INI}(\beta a)$:

1. $\beta$ empieza por terminal o no es anulable: $b \in \mathrm{INI}(\beta)$ (la $a$ no pasa).
2. $\beta = \varepsilon$ ($B$ al final): $b = a$ (la anticipación se hereda).
3. $\beta$ es anulable y no vacía: $b \in (\mathrm{INI}(\beta) - \{\varepsilon\}) \cup \{a\}$.

Ejemplo rápido del caso 3: en $S \to AB,\; A \to a,\; B \to b \mid \varepsilon$, desde $[S \to \boldsymbol{\cdot} AB,\; \$]$ la cola tras $A$ es $\beta = B$ (anulable). Luego $\mathrm{INI}(B\$) = \{b, \$\}$ y se añade $[A \to \boldsymbol{\cdot} a,\; b/\$]$.

### Colección LR(1)

1. $[S' \to \boldsymbol{\cdot} S,\; \$]$ da por herencia $[S \to \boldsymbol{\cdot} L=R,\; \$]$ y $[S \to \boldsymbol{\cdot} R,\; \$]$.
2. De $[S \to \boldsymbol{\cdot} L=R,\; \$]$, con $\beta = (=R)$, $\mathrm{INI}(=R\$) = \{=\}$: añade $[L \to \boldsymbol{\cdot} *R,\; =]$ y $[L \to \boldsymbol{\cdot} id,\; =]$.
3. De $[S \to \boldsymbol{\cdot} R,\; \$]$ por herencia sale $[R \to \boldsymbol{\cdot} L,\; \$]$, que hereda $[L \to \boldsymbol{\cdot} *R,\; \$]$ y $[L \to \boldsymbol{\cdot} id,\; \$]$.

Agrupando anticipaciones por núcleo:

- $I_0 = \{ [S' \to \boldsymbol{\cdot} S,\;\$] \mid [S \to \boldsymbol{\cdot} L=R,\;\$],\; [S \to \boldsymbol{\cdot} R,\;\$],\; [L \to \boldsymbol{\cdot} *R,\;=/\$],\; [L \to \boldsymbol{\cdot} id,\;=/\$],\; [R \to \boldsymbol{\cdot} L,\;\$] \}$
- $I_1 = \mathrm{goto}(I_0, S) = \{ [S' \to S\boldsymbol{\cdot},\;\$] \}$
- $I_2 = \mathrm{goto}(I_0, L) = \{ [S \to L\boldsymbol{\cdot}=R,\;\$],\; [R \to L\boldsymbol{\cdot},\;\$] \}$ (ahora $R \to L$ solo reduce en $\$$)
- $I_3 = \mathrm{goto}(I_0, R) = \{ [S \to R\boldsymbol{\cdot},\;\$] \}$
- $I_4 = \mathrm{goto}(I_0, *) = \{ [L \to *\boldsymbol{\cdot} R,\;=/\$] \mid [R \to \boldsymbol{\cdot} L,\;=/\$],\; [L \to \boldsymbol{\cdot} *R,\;=/\$],\; [L \to \boldsymbol{\cdot} id,\;=/\$] \}$
- $I_5 = \mathrm{goto}(I_0, id) = \{ [L \to id\boldsymbol{\cdot},\;=/\$] \}$
- $I_6 = \mathrm{goto}(I_2, =) = \{ [S \to L=\boldsymbol{\cdot} R,\;\$] \mid [R \to \boldsymbol{\cdot} L,\;\$],\; [L \to \boldsymbol{\cdot} *R,\;\$],\; [L \to \boldsymbol{\cdot} id,\;\$] \}$
- $I_7 = \mathrm{goto}(I_4, R) = \{ [L \to *R\boldsymbol{\cdot},\;=/\$] \}$, $I_8 = \mathrm{goto}(I_4, L) = \{ [R \to L\boldsymbol{\cdot},\;=/\$] \}$
- $I_9 = \mathrm{goto}(I_6, R) = \{ [S \to L=R\boldsymbol{\cdot},\;\$] \}$
- $I_{10} = \mathrm{goto}(I_6, *) = \{ [L \to *\boldsymbol{\cdot} R,\;\$] \mid [R \to \boldsymbol{\cdot} L,\;\$],\; [L \to \boldsymbol{\cdot} *R,\;\$],\; [L \to \boldsymbol{\cdot} id,\;\$] \}$ (distinto de $I_4$: sus ítems solo anticipan $\$$, no $=/\$$)
- $I_{11} = \mathrm{goto}(I_6, id) = \{ [L \to id\boldsymbol{\cdot},\;\$] \}$, $I_{12} = \mathrm{goto}(I_6, L) = \{ [R \to L\boldsymbol{\cdot},\;\$] \}$, $I_{13} = \mathrm{goto}(I_{10}, R) = \{ [L \to *R\boldsymbol{\cdot},\;\$] \}$

Además $\mathrm{goto}(I_4, *) = I_4$, $\mathrm{goto}(I_4, id) = I_5$, $\mathrm{goto}(I_{10}, *) = I_{10}$, $\mathrm{goto}(I_{10}, id) = I_{11}$, $\mathrm{goto}(I_{10}, L) = I_{12}$. Total: 14 estados (SLR tenía 10).

### Tabla LR(1)

| Estado | $=$ | $*$ | $id$ | $\$$ | $S$ | $L$ | $R$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **0** | | $d_4$ | $d_5$ | | 1 | 2 | 3 |
| **1** | | | | $\text{acc}$ | | | |
| **2** | $d_6$ | | | $r_5$ | | | |
| **3** | | | | $r_2$ | | | |
| **4** | | $d_4$ | $d_5$ | | | 8 | 7 |
| **5** | $r_4$ | | | $r_4$ | | | |
| **6** | | $d_{10}$ | $d_{11}$ | | | 12 | 9 |
| **7** | $r_3$ | | | $r_3$ | | | |
| **8** | $r_5$ | | | $r_5$ | | | |
| **9** | | | | $r_1$ | | | |
| **10** | | $d_{10}$ | $d_{11}$ | | | 12 | 13 |
| **11** | | | | $r_4$ | | | |
| **12** | | | | $r_5$ | | | |
| **13** | | | | $r_3$ | | | |

No hay conflictos: la gramática es LR(1). La casilla $[2, =]$ solo desplaza ($d_6$).

Con la entrada errónea `id = * id =`, tras reducir `id` a $L$ en el estado 11 llega a `0 L 2 = 6 * 10 id 11` mirando el `=` final. Como $\text{Acción}[11, =]$ está vacía, LR(1) detecta el error inmediatamente sin hacer ni una reducción innecesaria.

## Ejemplo 4: LALR(1), detección tardía y creación de conflictos r/r

Partimos de la colección LR(1) del Ejemplo 3 y agrupamos estados que comparten exactamente el mismo núcleo LR(0):

- $I_4$ e $I_{10}$ (núcleo $L \to *\boldsymbol{\cdot} R$) $\to I_{4,10}$ con anticipación $=/\$$.
- $I_5$ e $I_{11}$ (núcleo $L \to id\boldsymbol{\cdot}$) $\to I_{5,11}$ con anticipación $=/\$$.
- $I_7$ e $I_{13}$ (núcleo $L \to *R\boldsymbol{\cdot}$) $\to I_{7,13}$ con anticipación $=/\$$.
- $I_8$ e $I_{12}$ (núcleo $R \to L\boldsymbol{\cdot}$) $\to I_{8,12}$ con anticipación $=/\$$.

El estado $I_2$ tiene núcleo único y conserva $[R \to L\boldsymbol{\cdot},\; \$]$. Quedan 10 estados (igual que SLR), pero $\text{Acción}[2, =]$ sigue siendo $d_6$ sin conflicto: la gramática es LALR(1).

### Diferencia ante errores respecto a LR(1)

Si analizamos la misma cadena errónea `id = * id =` con la tabla LALR:

| Pila | Entrada | Acción LALR |
| :--- | :--- | :--- |
| `0 L 2 = 6 * 4,10 id 5,11` | `= $` | $r_4$ (LR(1) ya daba error aquí), $\text{Ir\_a} = 8,12$ |
| `0 L 2 = 6 * 4,10 L 8,12` | `= $` | $r_5$, $\text{Ir\_a} = 7,13$ |
| `0 L 2 = 6 * 4,10 R 7,13` | `= $` | $r_3$, $\text{Ir\_a}[6, L] = 8,12$ |
| `0 L 2 = 6 L 8,12` | `= $` | $r_5$, $\text{Ir\_a}[6, R] = 9$ |
| `0 L 2 = 6 R 9` | `= $` | **ERROR** ($\text{Acción}[9, =]$ vacía) |

Al fusionar núcleos, LALR ensancha las anticipaciones y puede realizar varias reducciones extra antes de abortar, aunque **nunca desplaza** un token erróneo más allá de la posición del fallo.

### Contraejemplo donde LALR crea un conflicto reduce/reduce

Sea la gramática:

$$(1)\; S \to Aa \quad (2)\; S \to bAc \quad (3)\; S \to Bc \quad (4)\; S \to bBa \quad (5)\; A \to d \quad (6)\; B \to d$$

1. **SLR:** $\mathrm{SIG}(A) = \mathrm{SIG}(B) = \{a, c\}$. En $\mathrm{goto}(I_0, d) = \{ A \to d\boldsymbol{\cdot},\; B \to d\boldsymbol{\cdot} \}$ hay conflicto $r_5/r_6$ en $a$ y $c$.
2. **LR(1):** desde $I_0$ se alcanza $I_5 = \mathrm{goto}(I_0, d) = \{ [A \to d\boldsymbol{\cdot},\; a],\; [B \to d\boldsymbol{\cdot},\; c] \}$ (sin conflicto), y desde $I_3 = \mathrm{goto}(I_0, b)$ se alcanza $I_9 = \mathrm{goto}(I_3, d) = \{ [A \to d\boldsymbol{\cdot},\; c],\; [B \to d\boldsymbol{\cdot},\; a] \}$ (sin conflicto). Es LR(1) con 13 estados.
3. **LALR(1):** $I_5$ e $I_9$ comparten núcleo $\{ A \to d\boldsymbol{\cdot},\; B \to d\boldsymbol{\cdot} \}$. Al fusionarlos en $I_{5,9}$ queda $\{ [A \to d\boldsymbol{\cdot},\; a/c],\; [B \to d\boldsymbol{\cdot},\; a/c] \}$, provocando conflicto $r_5/r_6$ tanto en $a$ como en $c$. No es LALR(1).

¿Por qué la fusión nunca crea conflictos desplaza/reduce? Si el estado fusionado contiene $[A \to \alpha\boldsymbol{\cdot},\; a]$ y $[B \to \beta\boldsymbol{\cdot} a\gamma,\; b]$, el primer ítem proviene de algún estado original $I_k$ con idéntico núcleo. Por tanto $I_k$ también tenía $B \to \beta\boldsymbol{\cdot} a\gamma$ (con alguna anticipación), y como desplazar $a$ solo depende de que $a$ siga al punto, ese conflicto d/r ya existía en LR(1).

## Gramáticas ambiguas en LR

Toda gramática ambigua queda fuera de cualquier clase LR($k$). Sin embargo, en casos prácticos como expresiones aritméticas o *dangling else* resulta más limpio mantener la gramática ambigua y resolver los conflictos con precedencia y asociatividad:

$$(1)\; E \to E+E \qquad (2)\; E \to E*E \qquad (3)\; E \to (E) \qquad (4)\; E \to id$$

Los estados conflictivos son $I_7 = \{ E \to E+E\boldsymbol{\cdot},\; E \to E\boldsymbol{\cdot}+E,\; E \to E\boldsymbol{\cdot}*E \}$ e $I_8 = \{ E \to E*E\boldsymbol{\cdot},\; E \to E\boldsymbol{\cdot}+E,\; E \to E\boldsymbol{\cdot}*E \}$, que producen cuatro conflictos d/r: $[7,+]$, $[7,*]$, $[8,+]$ y $[8,*]$.

Fijando `*` con mayor precedencia que `+` y ambos asociativos a izquierdas:

- **$[7,+]$:** ya tenemos $E+E$ y llega otro $+$; igual precedencia y asociatividad izquierda $\Rightarrow$ **reducir ($r_1$)**.
- **$[7,*]$:** llega `*` con mayor precedencia $\Rightarrow$ **desplazar ($d_5$)**.
- **$[8,+]$:** llega `+` con menor precedencia que `*` $\Rightarrow$ **reducir ($r_2$)**.
- **$[8,*]$:** igual precedencia y asociatividad izquierda $\Rightarrow$ **reducir ($r_2$)**.

En YACC equivale a declarar `%left '+'` seguido más abajo de `%left '*'`. Con `id + id * id`, al llegar a `0 E 1 + 4 E 7` frente a `*`, la tabla elige $d_5$ y agrupa $id + (id * id)$.

## Protocolo de examen y errores frecuentes

Para clasificar una gramática sin trabajar de más, conviene seguir este orden:

1. Construir la colección LR(0) numerando el orden de visita. Si ningún estado con ítem de reducción comparte estado con otro ítem $\Rightarrow$ es **LR(0)** (y también SLR, LALR y LR(1)).
2. Si hay choques, colocar las reducciones en $\mathrm{SIG}$ de la parte izquierda. Si desaparecen $\Rightarrow$ es **SLR(1)** (y también LALR y LR(1)).
3. Si SLR falla, construir LR(1). Si queda conflicto $\Rightarrow$ no es LR(1) (comprobar si es ambigua).
4. Si LR(1) funciona, fusionar núcleos iguales. Si no nace ningún r/r $\Rightarrow$ es **LALR(1)**; si aparece alguno $\Rightarrow$ es LR(1) pero no LALR(1).

Errores habituales que conviene revisar antes de entregar:

- Poner la reducción de $A \to \alpha\boldsymbol{\cdot}$ en $\mathrm{SIG}$ de otro no terminal distinto de $A$.
- Olvidar heredar la anticipación en LR(1) cuando $\beta = \varepsilon$ o es anulable.
- Recalcular la anticipación dentro de $\mathrm{goto}$ (en $\mathrm{goto}$, las anticipaciones siempre se copian; la regla $\mathrm{INI}(\beta a)$ solo actúa al expandir la clausura).
- Fusionar dos estados LR(1) distintos por tener el mismo núcleo: solo coinciden si comparten ítems y anticipaciones.
- Extraer símbolos de la pila al reducir por una producción $A \to \varepsilon$: no se desapila nada.
