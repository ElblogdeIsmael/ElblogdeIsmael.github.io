# Análisis Léxico y Generación Automática con LEX / Flex

## 1. Descripción Funcional y Conceptos Fundamentales

El análisis léxico representa la fase inicial de la etapa de análisis (*Front-End*) de un compilador. Su tarea operativa consiste en escanear el flujo continuo de caracteres del texto fuente y segmentarlo en unidades elementales dotadas de significado sintáctico, denominadas componentes léxicos (*tokens*).

Separar el nivel léxico del nivel sintáctico responde a dos principios de diseño:
1. **Simplificación gramatical:** El analizador sintáctico queda liberado de gestionar detalles de bajo nivel como espacios en blanco, tabulaciones, saltos de línea y comentarios, operando únicamente con categorías abstractas.
2. **Eficiencia en el manejo de E/S:** El escaneo carácter a carácter es una de las tareas computacionalmente más intensivas del compilador. Centralizarlo en un autómata finito determinista permite aplicar técnicas optimizadas de doble búfer de entrada (*double buffering*) con centinelas, mejorando sensiblemente el rendimiento global.

\vspace{0.4cm}

### Diferenciación Rigurosa: Token, Lexema y Patrón

La cátedra de Procesadores de Lenguajes incide en la delimitación matemática entre estos tres conceptos:

\vspace{0.3cm}

- **Token (Componente léxico):** Símbolo abstracto terminal que representa a una clase o familia de elementos con idéntica función sintáctica. En la comunicación con el analizador sintáctico se codifica mediante un identificador entero (por ejemplo, `NUMERO`, `ID`, `ASIGN`).
- **Lexema:** Secuencia textual concreta de caracteres leída en el código fuente que encaja con la especificación de un determinado token. Si en el código aparece `contador = 42;`, las cadenas `"contador"`, `"="`, `"42"` y `";"` son los lexemas reales.
- **Patrón:** Regla o especificación formal que determina qué secuencias de caracteres pertenecen a un token. Los patrones se formulan mediante expresiones regulares y se reconocen mediante un Autómata Finito Determinista (AFD).

\vspace{0.4cm}

### Nivel de Abstracción en la Tabla de Tokens

El diseño de la tabla de tokens debe equilibrar la granularidad para facilitar la labor del analizador sintáctico. Cuando varios operadores comparten idéntica precedencia y asociatividad gramatical (por ejemplo, la suma y la resta binarias, o la multiplicación y la división), el nivel óptimo de abstracción aconseja agruparlos bajo un único token (como `OPBIN` o `MULSUM`), pasando el operador concreto como atributo a través de la variable `yylval`.

Por el contrario, operadores que sintácticamente juegan roles diferentes no deben fusionarse. Un caso clásico de examen es el operador guion (`-`):
- Como operador de resta binaria, exige dos operandos (`a - b`) y se asocia a `OPBIN`.
- Como operador de cambio de signo unario, precede a un único operando (`-a`) y debe clasificarse bajo un token diferenciado (por ejemplo, `OPUNA`), pues su posición en el árbol sintáctico y su precedencia difieren por completo.

\vspace{0.4cm}

## 2. Fundamentos Formales: Álgebra de Lenguajes y Expresiones Regulares

Dado un alfabeto finito $\Sigma$, un lenguaje formal $L$ es cualquier subconjunto de cadenas formadas sobre el cierre de Kleene del alfabeto ($L \subseteq \Sigma^*$).

\vspace{0.4cm}

### Operaciones Cerradas sobre Lenguajes

Sobre dos lenguajes $L$ y $M$ se definen las siguientes operaciones:

\vspace{0.3cm}

- **Unión:** $L \cup M = \{s \mid s \in L \lor s \in M\}$.
- **Concatenación:** $LM = \{st \mid s \in L \land t \in M\}$.
- **Clausura de Kleene:** $L^* = \bigcup_{i=0}^{\infty} L^i$, donde $L^0 = \{\lambda\}$ (siendo $\lambda$ o $\epsilon$ la cadena vacía).
- **Clausura positiva:** $L^+ = \bigcup_{i=1}^{\infty} L^i = L L^*$.

\vspace{0.4cm}

### Expresiones Regulares

Una expresión regular denota de forma inductiva un lenguaje regular:
1. $\epsilon$ (o $\lambda$) es una expresión regular que denota $\{\epsilon\}$.
2. Para cada símbolo $a \in \Sigma$, $a$ es una expresión regular que denota $\{a\}$.
3. Si $r$ y $s$ denotan los lenguajes $L(r)$ y $L(s)$, entonces $(r) \mid (s)$ denota $L(r) \cup L(s)$, $(r)(s)$ denota $L(r)L(s)$, y $(r)^*$ denota $(L(r))^*$.

\vspace{0.4cm}

## 3. Del Patrón al Autómata Finito: Construcción y Determinización

Para ejecutar un analizador léxico en tiempo lineal $\mathcal{O}(n)$ respecto al número de caracteres de entrada, las expresiones regulares se transforman primero en un autómata no determinista y finalmente en un autómata finito determinista.

\vspace{0.4cm}

### Construcción de Thompson (ER a AFN-$\lambda$)

El algoritmo de Ken Thompson genera un Autómata Finito no Determinista con transiciones vacías (AFN-$\lambda$) preservando la composición inductiva de la expresión regular:

\vspace{0.3cm}

1. **Casos base:** Para el símbolo individual $a \in \Sigma$, se genera un autómata de dos estados con una transición directa etiquetada con $a$. Para $\epsilon$, la transición se etiqueta con la cadena vacía.
2. **Unión ($r \mid s$):** Se crea un nuevo estado inicial que bifurca mediante transiciones $\lambda$ hacia los estados iniciales de $r$ y $s$. Los estados de aceptación de ambos autómatas convergen mediante transiciones $\lambda$ hacia un único nuevo estado de aceptación.
3. **Concatenación ($rs$):** El estado de aceptación de $r$ se fusiona o conecta mediante transición $\lambda$ con el estado inicial de $s$.
4. **Clausura de Kleene ($r^*$):** Se añaden dos transiciones $\lambda$: una hacia adelante que conecta el nuevo estado inicial con el nuevo estado final (para aceptar la cadena vacía), y otra hacia atrás que retroalimenta desde el final de $r$ hasta su inicio (para permitir repeticiones ilimitadas).

\vspace{0.4cm}

### Algoritmo de Subconjuntos (Determinización AFN a AFD)

Un AFN no puede ejecutarse directamente en hardware de forma determinista, ya que puede activar múltiples ramas simultáneas ante transiciones $\lambda$ o ante un mismo símbolo. El método de construcción de subconjuntos construye un AFD equivalente donde cada macroestado representa un subconjunto de estados del AFN original.

Se definen dos operaciones formales sobre un conjunto de estados $T$:

\vspace{0.3cm}

- $\epsilon\text{-clausura}(T)$: Conjunto formado por los propios estados de $T$ más todos los estados del AFN alcanzables a partir de ellos recorriendo exclusivamente transiciones $\epsilon$ (o $\lambda$).
- $\text{Mover}(T, a)$: Conjunto de estados del AFN a los que se puede transitar desde algún estado de $T$ consumiendo el símbolo de entrada $a$.

\vspace{0.4cm}

#### Procedimiento de Construcción del AFD

\vspace{0.3cm}

1. Se computa el estado inicial del AFD como $S_0 = \epsilon\text{-clausura}(\{s_0\})$, donde $s_0$ es el estado de arranque del AFN.
2. Mientras queden macroestados del AFD sin marcar:
   - Se toma un macroestado $T$.
   - Para cada símbolo $a \in \Sigma$:
     - Se calcula $U = \epsilon\text{-clausura}(\text{Mover}(T, a))$.
     - Si $U$ no está vacío y no figuraba previamente en la lista de estados del AFD, se añade como nuevo estado no marcado.
     - Se registra la transición en la tabla: $\delta_{\text{AFD}}(T, a) = U$.
3. Un macroestado del AFD es de aceptación si contiene al menos uno de los estados de aceptación del AFN original.

\vspace{0.4cm}

## 4. Tratamiento y Recuperación de Errores Léxicos

Se produce un error léxico cuando el flujo de caracteres leídos no satisface ningún patrón registrado en la especificación del analizador.

\vspace{0.4cm}

### Estrategias de Manejo en el Compilador

\vspace{0.3cm}

- **Modo Pánico (*Panic Mode*):** El analizador descarta el carácter conflictivo y continúa leyendo caracteres sucesivos hasta encontrar un delimitador de token válido (como un espacio en blanco, un punto y coma o un salto de línea), momento en el cual reinicia el escaneo. Es el método más común en compiladores reales por su sencillez y bajo coste en tiempo.
- **Reparación por Distancia de Edición (Métrica de Levenshtein):** Mide el número mínimo de operaciones elementales necesarias para convertir el lexema anómalo en un lexema válido del lenguaje:
  1. Supresión de un carácter superfluo.
  2. Inserción de un carácter omitido.
  3. Reemplazo de un carácter erróneo.
  4. Transposición de dos caracteres contiguos invertidos (error tipográfico común, como escribir `whlie` por `while`).

\vspace{0.4cm}

## 5. El Generador LEX / Flex: Arquitectura y Reglas Operativas

LEX (y su versión moderna y compatible Flex, *Fast Lexical Analyzer*) procesa un archivo fuente con extensión `.l` y genera un archivo de código C denominado `lex.yy.c`, que contiene la función de escaneo `yylex()`.

\vspace{0.4cm}

### Estructura de un Fichero de Especificación

Un archivo de Flex se divide en tres secciones separadas obligatoriamente por marcas `%%`:

\vspace{0.3cm}

```lex
%{
/* Sección 1: Declaraciones y cabeceras en lenguaje C */
#include <stdio.h>
#include <stdlib.h>
#include "tokens.h"
%}

/* Definiciones regulares y condiciones de inicio */
DIGITO    [0-9]
LETRA     [a-zA-Z_]
ID        {LETRA}({LETRA}|{DIGITO})*

%%
/* Sección 2: Reglas de traducción (Patrón  { Acción en C }) */
"if"            { return TOKEN_IF; }
"while"         { return TOKEN_WHILE; }
{ID}            { return TOKEN_ID; }
{DIGITO}+       { return TOKEN_ENTERO; }
[ \t\n]+        { /* Descartar espacios y saltos */ }
.               { printf("Error léxico en línea %d: %s\n", yylineno, yytext); }

%%
/* Sección 3: Código de usuario en C */
int main(int argc, char** argv) {
    yylex();
    return 0;
}
```

\vspace{0.4cm}

### Resolución de Ambigüedades en Flex

Cuando un prefijo de entrada encaja simultáneamente con más de una regla de la especificación, Flex resuelve el conflicto aplicando dos directrices deterministas:

\vspace{0.3cm}

1. **Principio del Encaje más Largo (*Longest Match* o *Maximal Munch*):** El analizador selecciona la regla que coincida con el mayor número de caracteres de la entrada. Si el texto contiene `if_condition`, Flex lo reconoce como un identificador único `TOKEN_ID` y no como la palabra reservada `if` seguida de `_condition`.
2. **Precedencia por Orden Textual de Declaración:** Ante dos patrones que coinciden con el mismo número exacto de caracteres, vence la regla declarada antes en el fichero `.l`. Por ello, las palabras reservadas (`if`, `while`, `return`) deben colocarse siempre por encima de la regla general para identificadores `{ID}`. Si se invierte el orden, la regla `{ID}` absorberá todas las palabras reservadas.

\vspace{0.4cm}

### Variables y Funciones del Sistema Flex

\vspace{0.3cm}

- `yytext`: Puntero al búfer de caracteres que almacena el lexema exacto recién reconocido.
- `yyleng`: Entero que contiene la longitud del lexema en `yytext` (`strlen(yytext)`).
- `yylval`: Variable global (habitualmente de tipo `YYSTYPE`) que almacena el valor semántico o atributo asociado al token devuelto al analizador sintáctico.
- `yylineno`: Contador de línea actual del fichero de entrada (requiere activar la opción `%option yylineno`).
- `yylex()`: Función central del escáner. Devuelve un entero con el identificador del token o 0 al llegar a fin de fichero (`EOF`).
- `yyin` y `yyout`: Punteros de tipo `FILE*` que determinan el flujo de lectura (por defecto `stdin`) y de escritura (por defecto `stdout`).
- `yywrap()`: Función invocada por el motor de escaneo al alcanzar el final del archivo `yyin`. Si retorna 1, el análisis concluye; si retorna 0, permite reasignar `yyin` a otro archivo para continuar escaneando.
- `ECHO`: Macro que copia el contenido íntegro de `yytext` en `yyout`. Es la acción por defecto para cualquier carácter no atrapado por las reglas.
- `REJECT`: Directiva de control que indica a Flex que descarte la coincidencia actual, restaure el puntero de entrada y ejecute la siguiente mejor regla coincidente.
- `yymore()`: Indica al escáner que mantenga el contenido de `yytext` para que el siguiente token reconocido se anexe al final del actual en lugar de sobrescribirlo.
- `yyless(n)`: Devuelve al flujo de entrada todos los caracteres de `yytext` a partir de la posición $n$.

\vspace{0.4cm}

### Condiciones de Inicio (*Start Conditions*)

Permiten crear analizadores léxicos sensibles al contexto que alternan dinámicamente entre distintos subconjuntos de reglas. Se activan en las acciones mediante la macro `BEGIN(NOMBRE_ESTADO)` y se restablecen al estado base con `BEGIN(INITIAL)` o `BEGIN(0)`.

\vspace{0.3cm}

- **Condiciones Inclusivas (`%s` o `%START`):** Al activarse, operan las reglas prefijadas con `<NOMBRE_ESTADO>` junto con todas las reglas normales sin prefijo de la especificación.
- **Condiciones Exclusivas (`%x` o `%X`):** Al activarse, únicamente se evalúan las reglas explícitamente etiquetadas con `<NOMBRE_ESTADO>`. Todas las demás reglas quedan desactivadas. Son indispensables para gestionar bloques de comentarios multilínea (`/* ... */`) o literales de cadena entrecomillados sin que las reglas generales de tokens interfieran.

\vspace{0.4cm}

## 6. Problemas de Examen Resueltos de Análisis Léxico

\vspace{0.4cm}

### Problema 1: Gestión de Comentarios Multilínea y Cadenas con Condiciones Exclusivas

**Enunciado:** Escriba una especificación Flex completa que ignore los comentarios multilínea de tipo C (`/* ... */`) detectando si quedan sin cerrar al llegar a fin de archivo, procese literales de cadena entre comillas dobles permitiendo secuencias de escape `\"`, y contabilice el número total de identificadores y líneas del programa fuente.

**Resolución Técnica:**

```lex
%{
#include <stdio.h>
#include <stdlib.h>

int num_lineas = 1;
int num_identificadores = 0;
%}

%option noyywrap
%x COMENTARIO
%x CADENA

LETRA   [a-zA-Z_]
DIGITO  [0-9]
ID      {LETRA}({LETRA}|{DIGITO})*

%%

"/*"                { BEGIN(COMENTARIO); }
<COMENTARIO>"*/"    { BEGIN(INITIAL); }
<COMENTARIO>\n      { num_lineas++; }
<COMENTARIO>.       { /* Descartar caracteres dentro del comentario */ }
<COMENTARIO><<EOF>> { 
    printf("Error léxico: comentario sin cerrar en línea %d\n", num_lineas); 
    BEGIN(INITIAL); 
    return 0; 
}

"\""                { BEGIN(CADENA); }
<CADENA>"\\\""      { /* Ignora comilla escapada dentro de la cadena */ }
<CADENA>"\""        { BEGIN(INITIAL); }
<CADENA>\n          { 
    printf("Error léxico: salto de línea no permitido en cadena, línea %d\n", num_lineas); 
    num_lineas++; 
    BEGIN(INITIAL); 
}
<CADENA>.           { /* Acumular o ignorar caracteres de la cadena */ }
<CADENA><<EOF>>     { 
    printf("Error léxico: cadena sin cerrar al alcanzar EOF en línea %d\n", num_lineas); 
    BEGIN(INITIAL); 
    return 0; 
}

{ID}                { num_identificadores++; }
\n                  { num_lineas++; }
[ \t\r]+            { /* Descartar espacios y retornos */ }
.                   { /* Cualquier otro carácter no contabilizado */ }

%%

int main(int argc, char** argv) {
    yylex();
    printf("Procesamiento finalizado:\n");
    printf("- Líneas procesadas: %d\n", num_lineas);
    printf("- Identificadores reconocidos: %d\n", num_identificadores);
    return 0;
}
```

\vspace{0.4cm}

### Justificación Técnica de la Solución:
- Se utilizan estados exclusivos `%x COMENTARIO` y `%x CADENA`. De haberse usado `%s` (inclusivos), la regla `{ID}` habría intentado identificar palabras dentro de los comentarios o de las cadenas de texto.
- La secuencia `\"` dentro de la cadena se captura con una regla específica antes de la regla `"\""` de cierre. Al tener mayor longitud (2 caracteres frente a 1), el principio de *longest match* garantiza que la comilla escapada no cierre la cadena prematuramente.
- El tratamiento del token especial `<<EOF>>` dentro del estado exclusivo detecta errores de sintaxis léxica al final del archivo sin entrar en bucles infinitos.
