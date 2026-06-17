# Guía de resolución de exámenes — MAC 2021–2025

Modelos Avanzados de Computación. Documento orientado a la obtención de la máxima calificación en la parte de teoría (Ejercicios 1 a 6).

No se incluyen los problemas de prácticas ni de evaluación global (Ejercicios 7-8 o 9-10), dado que las prácticas ya constan como superadas.

Cada respuesta sigue una plantilla cerrada: identificación del patrón, clasificación o respuesta, y justificación con el teorema correspondiente. La calificación recae sobre la justificación, no sobre la intuición; en consecuencia, conviene razonar siempre el porqué de cada respuesta.

---

## 0. Estructura y puntuación del examen

El examen presenta un formato muy predecible. Por lo general consta de 6 preguntas de teoría que suman 10 puntos:

| Ej | Tema | Contenido | Puntos 2024-25 | Puntos 2022-23 |
|----|------|-----------|----------------|----------------|
| 1 | T1-T2 Decidibilidad | Clasificar 4 problemas: decidible / semidecidible / no semidecidible | 2.4 | 2.0 |
| 2 | T2 Church-Turing | Simulación entre modelos o programa a bajo nivel | 1.3 | 2.0 |
| 3 | Varios | 4-5 afirmaciones de Verdadero/Falso razonadas | 2.4 | 1.5 |
| 4 | T4 | SAT / NP-completitud / reducción concreta | 1.3 | 1.5 |
| 5 | T3 | Definición de clases de complejidad y relaciones | 1.3 | 1.5 |
| 6 | T3-T4-T5-T6 | Problema específico (grafos, parejas, Red Feliz, mochila…) | 1.3 | 1.5 |

Conviene observar que los Ejercicios 1 y 3 suman casi 5 puntos (la mitad del examen). Su dominio resulta prioritario.

---
---

# PARTE 1 — Plantillas y teoría (procedimiento por tipo de ejercicio)

---

## 1. Ejercicio 1 — Decidibilidad / Semidecidibilidad

### 1.1 Definiciones base

- Recursivo (decidible): existe una MT que siempre se detiene y responde SÍ/NO para cualquier entrada.
- Recursivamente enumerable, r.e. (semidecidible): existe una MT que se detiene y acepta cuando la respuesta es SÍ, pero puede ciclar indefinidamente cuando es NO.
- No semidecidible: no existe siquiera esa MT que acepte los casos afirmativos.

Teorema de los complementarios (de aparición muy frecuente):
1. Si `L` es recursivo, su complementario `L̄` también lo es.
2. Si `L` y `L̄` son ambos r.e., entonces `L` es recursivo (decidible).
3. Si `L` es r.e. pero no decidible, entonces `L̄` no es semidecidible.

Teoría de reducciones (`P1 ∝ P2` significa "P1 se reduce a P2"; P2 es al menos tan difícil):
- Si `P1` es indecidible, `P2` es indecidible.
- Si `P1` no es semidecidible, `P2` no es semidecidible.
- Si `P2` es semidecidible, entonces `P1` también lo es.

### 1.2 Árbol de decisión (cuestión previa obligatoria)

La pregunta que debe formularse en primer lugar es: ¿la propiedad depende del lenguaje `L(M)` (qué palabras acepta) o del comportamiento de la máquina `M` (pasos, casillas, estados, movimientos)?

```
Existe un LÍMITE FINITO explícito (≤N pasos, |w|≤100, ≤2|w| casillas, ≤5 estados)
        -> DECIDIBLE (simulación acotada). No aplicar Rice.

Propiedad del LENGUAJE L(M) y NO trivial (acepta palíndromo, L regular, L vacío,
acepta 011, L = {todas}, acepta u^i...)
        -> NO DECIDIBLE por el TEOREMA DE RICE.
           A continuación se matiza si es semidecidible o no:
           · "¿Existe una palabra...?"  -> SEMIDECIDIBLE
           · "¿Para TODA palabra...?" / "L1 ⊆ L2" / "L(M)=∅" -> NO SEMIDECIDIBLE

Propiedad de la MÁQUINA M sin límite finito (visita el estado q, no se detiene nunca,
nunca se mueve a la izquierda en general...)
        -> NO DECIDIBLE, pero no por Rice -> REDUCCIÓN desde PARADA / UNIVERSAL / DIAGONAL.
```

### 1.3 Las cuatro plantillas de redacción

Plantilla 1 — Demostración de DECIDIBLE (límite finito):
> "Es decidible. Se construye una MT que simula `M` durante exactamente `N` pasos (o sobre todas las palabras de longitud ≤ N, que forman un conjunto finito). Como el espacio de búsqueda es finito, la simulación siempre termina y devuelve SÍ o NO."

Plantilla 2 — Demostración de NO DECIDIBLE, propiedad del lenguaje (Rice):
> "Se trata de una propiedad no trivial de los lenguajes r.e., puesto que existe una MT que la cumple (por ejemplo, una que acepta `L={011}`) y otra que no (por ejemplo, `L=∅`). Por el Teorema de Rice, el problema es indecidible."

Plantilla 3 — Demostración de SEMIDECIDIBLE ("¿existe…?"):
> "Es semidecidible. Se diseña una MT que realiza una búsqueda en anchura (dovetailing): simula 1 paso de la primera palabra, después 2 pasos de las dos primeras, y así sucesivamente. Si la palabra buscada existe, se encuentra en tiempo finito y se acepta; si no existe, la máquina cicla, lo cual es compatible con la definición de semidecidible."
> Alternativa válida: "MT no determinista que adivina la palabra `w`, simula `M(w)` y acepta si `M` acepta."
> Observación importante: la búsqueda debe ser en anchura, no en profundidad; en profundidad, si una palabra cicla, la máquina nunca probaría la siguiente.

Plantilla 4 — Demostración de NO SEMIDECIDIBLE ("para TODA", "nunca", inclusión, vacío):
> "No es semidecidible. Se efectúa una reducción desde un problema conocido como no semidecidible (`C-UNIVERSAL`, `DIAGONAL` o `EMPTY`): dada una instancia de ese problema, se construye la entrada de modo que las respuestas coincidan."

### 1.4 Catálogo de problemas base

| Problema | Enunciado | Clasificación |
|----------|-----------|---------------|
| UNIVERSAL (Lu) | ¿`M` acepta `w`? | Semidecidible, no decidible |
| C-UNIVERSAL | ¿`M` NO acepta `w`? | No semidecidible |
| PARADA | ¿`M` se detiene con `w`? | Semidecidible, no decidible (indecidible) |
| DIAGONAL (Ld) | ¿`M` no acepta su propio código `⟨M⟩`? | No semidecidible |
| C-DIAGONAL | ¿`M` sí acepta `⟨M⟩`? | Semidecidible |
| EMPTY / VACÍO (Le) | ¿`L(M)=∅`? | No semidecidible |
| C-VACÍO (Lne) | ¿`L(M)≠∅`? (acepta ≥1 palabra) | Semidecidible |
| PCP (Post) | Correspondencias de Post | Indecidible si el alfabeto tiene ≥2 símbolos. Caso particular a vigilar: con alfabeto `{1}` es decidible |
| GIC ambigua | ¿una gramática independiente del contexto es ambigua? | Indecidible |
| GIC genera w / AP acepta w | — | Decidible (algoritmo CYK) |

Reducción modelo (de aparición frecuente): `L(M1) ⊆ L(M2)` no es semidecidible.
> Se reduce EMPTY a este problema. Dada `M` (instancia de EMPTY), se construye el par `(M, R)`, donde `R` es una MT que rechaza toda entrada (`L(R)=∅`). Entonces `L(M)⊆L(R)` equivale a `L(M)=∅`. Como EMPTY (no semidecidible) se reduce a la inclusión, esta tampoco es semidecidible.

---

## 2. Ejercicio 2 — Tesis de Church-Turing y simulaciones

No se exige escribir todo el código, sino exponer la idea básica y la organización de la información. Basta con detallar una única transición.

### 2.1 Simulaciones entre modelos

a) Programa con variables hacia programa Post-Turing (caso más habitual):
- Organización: las variables `X1,…,Xm,Z1,…,Zk,Y` se disponen en la cinta separadas por el blanco `#`, con la forma `#V1#V2#…#Vn#`.
- Instrucciones: añadir símbolo (`Vj ← ai Vj`) o borrar el último (`Vj ← Vj−`) se simulan con macros Post-Turing que desplazan el cabezal hasta la variable correspondiente, desplazan el bloque situado a la derecha para crear o cerrar hueco, y escriben o borran el símbolo.

b) Programa Post-Turing hacia MT:
- Organización: mismo alfabeto. Por cada instrucción `Ii` del programa existe un estado `qi`, más un estado final `qf`.
- Traducción uno a uno: `PRINT a` corresponde a `δ(qi,b)=(qi+1, a, S)`; `RIGHT` a `δ(qi,b)=(qi+1, b, D)`; `IF ak GOTO L` lleva desde `qi` a `qL` si se lee `ak`, y a `qi+1` si se lee otro símbolo.

c) MT hacia programa con variables:
- Organización: tres variables: `X` almacena lo situado a la izquierda del cabezal, `Z` el símbolo leído, e `Y` lo situado a la derecha.
- Transición `δ(qi,aj)=(qm,ak,D)`: se escribe `ak` en `X` (paso a la izquierda), se vacía `Z`, se lee el primer símbolo de `Y` y se traslada a `Z`, y se salta a la etiqueta del estado `qm`.

### 2.2 Sobrecarga de las simulaciones de cintas

| Simulación | Coste |
|------------|-------|
| MT multicinta hacia 1 cinta | el tiempo pasa a `O(t²)` (cuadrático) |
| Cinta doble infinita hacia semiinfinita (por la derecha) | mismo orden `O(t)` mediante 2 pistas que pliegan la cinta |
| MT multipista hacia 1 cinta | mismo número de pasos (la pista es una sola cinta con alfabeto ampliado) |

### 2.3 Variables numéricas frente a variables de palabras
- Numéricas: variables `Xi,Zi,Y`; instrucciones `A←A+1`, `A←A−1`, `IF A≠0 GOTO L`.
- Argumento clave: ambos modelos son equivalentes porque existe una biyección entre las palabras de un alfabeto y los naturales (`N(w)=n`). Sumar `+1` en el modelo numérico equivale a buscar la palabra siguiente en orden lexicográfico en el modelo de palabras.

### 2.4 Tesis de Church-Turing (cuestión que suele inducir a error)
- Enunciado: "Toda función efectivamente calculable mediante un proceso mecánico bien definido puede ser calculada por una Máquina de Turing".
- Afirmación "Está demostrado que la tesis de Church-Turing es cierta": FALSA. Es una tesis, no un teorema, ya que "efectivamente calculable" no es un término matemático cerrado. Es universalmente aceptada (todos los modelos propuestos resultan equivalentes a la MT), pero no demostrable.
- Afirmación "La computación cuántica pone en duda la tesis de Church-Turing": FALSA (afecta a la eficiencia, no a lo que es computable).

### 2.5 Macros y algoritmos clásicos
- Macros a expandir: `U←V` (copia, con variable auxiliar para invertir y volver a invertir) y `V←−V` (borrado del primer símbolo).
- Algoritmos: suma de cadenas `Z(u)=Z(u1)+Z(u2)`, número siguiente `Z(u)=n+1`, `V←V+1` sobre `{a,b}`, y comprobación de si `X1` es múltiplo de `X2`.

---

## 3. Ejercicio 3 — Verdadero/Falso razonado (banco de respuestas)

Toda afirmación debe justificarse, aunque el enunciado no lo solicite explícitamente. Si es falsa, conviene aportar un contraejemplo o citar el teorema que la invalida.

| Afirmación | V/F | Justificación |
|------------|-----|---------------|
| `PESPACIO = NPESPACIO` | V | Teorema de Savitch: `NESPACIO(f) ⊆ ESPACIO(f²)`. |
| La clase L es distinta de PESPACIO | V | `L ⊊ PESPACIO` por el Teorema de la Jerarquía de Espacio (inclusión estricta demostrada). |
| Se sabe que `L = PESPACIO` | F | Es justamente lo contrario: se sabe que son distintas. |
| Si un problema está en NL, se resuelve en tiempo polinómico determinista | V | `NL ⊆ P`. |
| Cualquier problema NP se resuelve en espacio polinómico y tiempo exponencial | V | `NP ⊆ PESPACIO` y `NP ⊆ EXP`. |
| Si `P=NP`, el Viajante de Comercio se resuelve en tiempo polinómico determinista | V | TSP (decisión) es NP-completo; si `P=NP`, toda clase NP cae en P. |
| Si `NL = NP`, entonces `NP = coNP` | V | `NL` es cerrada bajo complementario (Immerman-Szelepcsényi); la propiedad se hereda. |
| Una MT universal puede calcular lo que cualquier otra MT calcula | V | Por definición de máquina universal. |
| Se sabe que el complementario de SAT no tiene algoritmo polinómico | F | No está demostrado (equivaldría a `P≠NP` / `P≠coNP`). |
| Si `A` es NP-completo y `A ∝ B`, entonces `B` es NP-completo | F | Falta que `B ∈ NP`. La reducción solo prueba que `B` es NP-difícil. |
| Un problema NP-difícil es siempre NP-completo | F | NP-completo = NP-difícil y además pertenece a NP; un NP-difícil puede no estar en NP. |
| SAT para cláusulas Horn es NP-completo | F | Horn-SAT es polinómico (propagación unitaria). |
| Si tiene algoritmo δ-aproximado con δ=2, también con δ=3 | V | Una cota mayor es más laxa; el mismo algoritmo sirve. |
| Si el umbral de aproximación es 2, entonces tiene un algoritmo δ-aprox con δ=2 | F | El umbral es el ínfimo; puede no alcanzarse con igualdad. |
| Si `P1 ∝ P2 ∝ P3` y `P3` no es semidecidible, entonces `P1` tampoco | F | La reducción opera en sentido contrario: que `P3` sea no semidecidible no fuerza a `P1`. |
| Si `P1 ∝ P2 ∝ P3` y `P1` es semidecidible, entonces `P3` lo es | F | La semidecidibilidad se transmite de `P2` a `P1`, no en sentido descendente. |
| Si `P1 ∝ P2` y `P2` es semidecidible, entonces `P1` lo es | V | Propiedad directa de la reducción. |
| La composición de dos algoritmos espacio-logarítmicos es espacio-logarítmica | V | No se almacena la salida intermedia: cuando el segundo solicita un bit, se relanza el primero (clave del teorema de composición en L). |
| FNPT/TFNP se resuelven en tiempo polinómico determinista | F | La solución existe siempre, pero encontrarla puede ser difícil (por ejemplo, la factorización). |
| Descomponer en factores primos pertenece a FNPT pero sin algoritmo polinómico conocido | V | Ejemplo canónico de TFNP. |
| `P = EXP` | F | `P ⊊ EXP` (estricta) por el Teorema de la Jerarquía de Tiempo. |
| ¿Un problema de decisión no trivial puede tener espacio `O(1)`? | depende | Un problema no trivial sobre la entrada requiere al menos recorrerla; en general el `O(1)` significativo se limita a lenguajes regulares. |
| Está demostrado que la tesis de Church-Turing es cierta | F | Es una tesis, no demostrable. |
| El conocimiento actual es compatible con `P=NP` y `NP=coNP` | V | Ninguna de las dos está refutada. |
| PCP sobre `{1}` es semidecidible pero no decidible | F | Con alfabeto de un solo símbolo, PCP es decidible. |
| Una MT de una sola cinta tiene espacio al menos `O(n)` | F (con matices) | Si la cinta de entrada no se sobrescribe, no se contabiliza; con una cinta de trabajo aparte el espacio puede ser sublineal. Conviene atender al enunciado exacto. |

---

## 4. Clases de complejidad (Ejercicio 5 habitual)

### 4.1 La cadena de inclusiones
```
L ⊆ NL ⊆ P ⊆ NP ⊆ PESPACIO = NPESPACIO ⊊ EXP
```
- Ninguna inclusión se conoce como estricta, salvo `NL ⊊ PESPACIO`, `L ⊊ PESPACIO` y `P ⊊ EXP` (por los teoremas de jerarquía).
- `PESPACIO = NPESPACIO` por el Teorema de Savitch.

### 4.2 Definiciones formales (para máxima precisión, mediante unión de tiempos/espacios)
- P `= ⋃_{j>0} TIEMPO(nʲ)`: MT determinista en tiempo polinómico.
- NP: MT no determinista en tiempo polinómico. Caracterización alternativa: existe un certificado verificable en tiempo polinómico por un verificador determinista.
- coNP: el complementario está en NP; se acepta SÍ solo si todas las ramas aceptan.
- L / NL: espacio logarítmico determinista / no determinista.
- PESPACIO / NPESPACIO: espacio polinómico determinista / no determinista (iguales por Savitch).
- EXP `= ⋃ TIEMPO(2^{nʲ})`.

### 4.3 Medida de la complejidad
- La complejidad se mide sobre la longitud de la representación `n = log(x)`, no sobre el valor `x`. Por ello, comprobar la primalidad por fuerza bruta es exponencial en `n`.
- En espacio no se contabilizan la cinta de entrada (si no se sobrescribe) ni la de salida (si se escribe de izquierda a derecha sin retroceder).

### 4.4 Clases de función y de aproximación
- FNP / FP / TFNP (FNPT): problemas de búsqueda; FP indica que la solución se calcula en tiempo polinómico; TFNP indica que la solución existe siempre (factorización, Red Feliz).
- NPO/PO/APX/PTAS/FPTAS: problemas de optimización. APX admite δ-aproximación con constante; PTAS admite cualquier precisión en tiempo polinómico en `n`; FPTAS es polinómico en `n` y en `1/(δ−1)` (la mochila pertenece a FPTAS).
- DP `= L1 ∩ L2`, con `L1∈NP` y `L2∈coNP` (TSP exacto, SAT-UNSAT).

---

## 5. Reducciones NP-completas (Ejercicios 4 y 6)

### 5.1 Los cuatro pasos obligatorios de toda reducción `P1 ∝ P2`
1. Algoritmo de transformación de una instancia de `P1` en una instancia de `P2`.
2. Eficiencia: que sea espacio logarítmico (o polinómica), lo cual aporta rigor.
3. Implicación directa: SÍ en origen implica SÍ en destino.
4. Implicación recíproca: SÍ en destino implica SÍ en origen (la dirección que con más frecuencia se omite).

Para demostrar que `B` es NP-completo: (1) `B ∈ NP` (su certificado se verifica en tiempo polinómico) y (2) reducir a `B` un problema NP-completo conocido `A ∝ B`.

### 5.2 Mapa de reducciones (dos cadenas a memorizar)
```
Teorema de Cook-Levin: SAT es el primer problema NP-completo
SAT -> 3-SAT -> Cubrimiento por Vértices (VC) -> Circuito Hamiltoniano (CH) -> Viajante (TSP)
3-SAT -> Acoplamiento por Tripletas (ACTRI) -> SUMA -> PARTICIÓN -> MOCHILA
Clique ≡ Conjunto Independiente ≡ Cubrimiento por Vértices  (los tres equivalentes)
```

### 5.3 Reducciones concretas que han aparecido
- 3-SAT hacia VC: un triángulo (gadget) por cada cláusula más una arista por cada variable/literal; `K = n + 2m`.
- Partición hacia Mochila: se fijan pesos iguales a valores y la capacidad/umbral a la mitad de la suma total.
- SUMA hacia Partición: se añaden dos elementos de relleno que fuerzan el reparto exacto a la mitad.
- VC hacia Circuito Hamiltoniano: cada arista se transforma en un gadget que solo puede recorrerse de forma consistente con la selección de vértices.
- CH hacia TSP: matriz de distancias con peso 1 si existe arista y 2 si no; existe un circuito de coste ≤ n si y solo si hay circuito hamiltoniano.
- Conjunto Independiente frente a VC: `S` es independiente de tamaño `k` si y solo si `V∖S` es cubrimiento de tamaño `n−k`.

### 5.4 Variantes de SAT
| Variante | Clase | Motivo |
|----------|-------|--------|
| SAT | NP-completo | Teorema de Cook-Levin (el primero) |
| 3-SAT | NP-completo | reemplazo local desde SAT |
| 2-SAT | P (y NL) | grafo de implicaciones; un camino `x→¬x` y `¬x→x` indica inconsistencia |
| Horn-SAT | P | propagación unitaria |
| MAX2SAT | NP-completo | maximizar el número de cláusulas |
| NAESAT | NP-completo | Not-All-Equal |

### 5.5 Reducibilidad Turing frente a Karp (logarítmica) — cuestión teórica
- Karp / logarítmica (`∝`): una única llamada, mapea la respuesta directamente. Es la más fuerte (más restrictiva).
- Turing (`∝T`): tiempo polinómico con múltiples llamadas a un oráculo y lógica adicional. Es más débil/permisiva.
- NP-difícil: un problema NP-completo se reduce Turing a él; puede no pertenecer a NP. Si se resuelve en tiempo polinómico, `P=NP`.
- Ejemplo `FSAT → SAT` (Turing): se fija una variable a `true` y se consulta el oráculo SAT; si la fórmula sigue siendo consistente, se mantiene; en caso contrario se fija a `false`; el proceso se repite variable a variable hasta construir la asignación.

---

## 6. Problemas clásicos (Ejercicio 6 habitual)

| Problema | Clase | Idea clave |
|----------|-------|-----------|
| Existencia/búsqueda de caminos en grafos dirigidos | NL | búsqueda no determinista que adivina el camino, almacenando solo el nodo actual y un contador (espacio logarítmico). En determinista pertenece a P. |
| Parejas (emparejamiento perfecto) | P | se reduce a Flujo Máximo (Ford-Fulkerson). |
| Flujo Máximo | P | Ford-Fulkerson, `O(n⁵)` con el camino más corto. |
| Red Feliz | TFNP (búsqueda local, PLS) | algoritmo: mientras exista un nodo "infeliz", se cambia su estado; el proceso siempre converge, por lo que la solución existe. |
| Isomorfismo de grafos | GI (ni P ni NP-completo conocidos) | constituye la excepción notable: pertenece a NP, sin que se haya demostrado que sea NP-completo ni que esté en P. |
| PRIMO(n) | NP (de hecho P) | certificado de Pratt: incluye recursivamente la primalidad de los factores de `n−1`; se verifica en tiempo polinómico. |
| Parejas / ACTRI (tripletas) | Parejas en P, ACTRI NP-completo | ACTRI es la versión tridimensional, ya NP-completa. |
| Mochila (optimización) | NP-difícil, FPTAS | programación dinámica pseudopolinómica `O(n·B)`; admite esquema FPTAS. |
| Umbral del Viajante | euclídeo / desigualdad triangular en PTAS, δ≤2; general fuera de APX (salvo P=NP) | — |

---
---

# PARTE 2 — Resolución examen por examen (2021 a 2025)

Formato de cada apartado: enunciado, respuesta y justificación. Las justificaciones aplican las plantillas de la Parte 1.

---

## 2021

### 22 de junio de 2021

Ejercicio 1. Decidibilidad
1. *Dada MT `M` y palabra `w`, ¿`M` NO acepta `w`?* — NO SEMIDECIDIBLE. Coincide con `C-UNIVERSAL` (complementario del Universal). El Universal es semidecidible no decidible, luego su complementario no es semidecidible (Teorema de los complementarios).
2. *Dada GIC, ¿es ambigua?* — NO DECIDIBLE (indecidible). La ambigüedad de una GIC es un problema clásico indecidible.
3. *Dada GIC `G` y palabra `u`, ¿`G` genera `u`?* — DECIDIBLE. Mediante el algoritmo CYK: comprobación finita de derivaciones.
4. *¿Existe palabra de longitud ≤100 aceptada en <1000 pasos?* — DECIDIBLE. Doble límite finito: hay un número finito de palabras de longitud ≤100; se simula cada una durante menos de 1000 pasos. Conjunto finito, luego siempre termina.

Ejercicio 2. Verdadero/Falso
1. *Todo problema NP en espacio polinómico y tiempo exponencial* — V (`NP⊆PESPACIO`, `NP⊆EXP`).
2. *La MT universal calcula lo que cualquier MT* — V (por definición).
3. *Se sabe que el complementario de SAT no tiene algoritmo polinómico* — F (no está demostrado).
4. *Si `A` es NP-completo y `A∝B`, entonces `B` es NP-completo* — F (falta `B∈NP`; solo NP-difícil).
5. *Si `P=NP`, el Viajante se resuelve en tiempo polinómico determinista* — V.

Ejercicio 3. NP-completitud — *Reducción `SUMA(A,s,B) ∝ PARTICION(A',s')`.* A partir del conjunto y el objetivo `B`, se añaden elementos de relleno que obligan a que una mitad sume `B`; transformación logarítmica; las dos implicaciones se obtienen de la construcción de la mitad.

Ejercicio 4. Grafos — *Complejidad en espacio determinista de los caminos en grafos.* Pertenece a NL (logarítmico no determinista); en determinista se ubica en su clase logarítmica/polinómica. Algoritmo: almacenar solo el nodo actual y un contador de pasos (espacio logarítmico) y avanzar.

Ejercicio 5. Simulaciones — *MT con cinta ilimitada en ambas direcciones hacia cinta ilimitada solo por la derecha.* Se pliega la cinta en 2 pistas (una para `x≥0`, otra para `x<0`) con tope a la izquierda; mismo orden de complejidad `O(t)`.

---

### 12 de julio de 2021

Ejercicio 1. Decidibilidad
1. *¿El número de estados de `M` es ≤ `|w|`?* — DECIDIBLE. Propiedad interna de la máquina: se cuentan los estados de `⟨M⟩` y se comparan con `|w|`. Comprobación finita directa.
2. *¿`M` acepta al menos 3 palabras distintas?* — SEMIDECIDIBLE (no decidible). Es del tipo "existe": búsqueda en anchura hasta hallar 3 palabras aceptadas; no decidible por Rice (propiedad no trivial de `L(M)`).
3. *¿`M` acepta exactamente 3 palabras?* — NO SEMIDECIDIBLE. "Exactamente" exige además comprobar que no acepta ninguna más (un "para toda el resto"): reducción desde un problema no semidecidible.
4. *¿`M` acepta `w` sin usar más de `2|w|` casillas?* — DECIDIBLE. Espacio acotado a `2|w|`, luego número finito de configuraciones; si una se repite, hay ciclo (rechazo). Simulación acotada.

Ejercicio 2. Verdadero/Falso
1. *`L ≠ PESPACIO`* — V (`L⊊PESPACIO`, jerarquía de espacio).
2. *Horn-SAT es NP-completo* — F (es polinómico).
3. *Si `P1∝P2` y `P2` es semidecidible, entonces `P1` lo es* — V.
4. *Si está en NL, se resuelve en tiempo polinómico determinista* — V (`NL⊆P`).
5. *La computación cuántica pone en duda la tesis de Church-Turing* — F (afecta a la eficiencia, no a la computabilidad).

Ejercicio 3. Clase NP — *Definición de NP con certificados y verificadores, con ejemplo.* NP comprende los problemas con un certificado de tamaño polinómico verificable por una MT determinista en tiempo polinómico. Ejemplo SAT: el certificado es una asignación de verdad; el verificador evalúa todas las cláusulas (tiempo polinómico).

Ejercicio 4. Decidibilidad (P y C-P) — *Relaciones entre `P(x)` y su contrario.* Teorema de los complementarios: si `P` es decidible, `C-P` lo es; si `P` y `C-P` son ambos semidecidibles, `P` es decidible; si `P` es semidecidible no decidible, `C-P` no es semidecidible.

Ejercicio 5. Simulaciones — *MT multicinta hacia 1 cinta y relación temporal.* Una cinta con multipista (una pista por cinta más una pista de cabezales); cada paso de la multicinta requiere recorrer toda la zona empleada, luego el tiempo es `O(t²)`.

---

## 2022

### 27 de junio de 2022

Ejercicio 1. Decidibilidad
1. *¿`u` es subcadena de `⟨M⟩`?* — DECIDIBLE. Basta con leer el código y buscar `u`. Comprobación finita trivial.
2. *¿`M` NO acepta la palabra `011`?* — NO SEMIDECIDIBLE. Es `C-UNIVERSAL` con `w=011`.
3. *¿`L(M)` es el conjunto de palíndromos sobre `{0,1}`?* — NO DECIDIBLE (Rice) y, además, no semidecidible (la igualdad exacta de lenguajes se reduce desde EMPTY o su complementario).
4. *¿`M` acepta alguna palabra de la forma `0^{2n}`?* — SEMIDECIDIBLE (no decidible). Del tipo "existe": búsqueda en anchura sobre `0², 0⁴, …`; no decidible por Rice.

Ejercicio 2. Verdadero/Falso
1. *Si una MT escribe en su primera cinta, su espacio es `O(n)`* — F (depende de cuánto escriba; no necesariamente lineal).
2. *Umbral de aproximación 2 implica algoritmo δ-aprox con δ=2* — F (el umbral es ínfimo, no garantiza igualdad alcanzable).
3. *La composición de dos algoritmos espacio-logarítmicos es logarítmica* — V (se relanza el primero bajo demanda; no se almacena la salida intermedia).
4. *Si `P1∝P2∝P3` y `P1` es semidecidible, entonces `P3` lo es* — F (la reducción no propaga la semidecidibilidad en sentido descendente).
5. *Si `NL=NP`, entonces `NP=coNP`* — V (NL es cerrada bajo complementario).

Ejercicio 3. NP-completitud — *Reducción `3-SAT(V,C) ∝ VC(G,K)` con ejemplo.* Gadget triángulo por cláusula más arista por variable (literal/negación); `K = |V| + 2|C|`; ejemplo con 2-3 cláusulas.

Ejercicio 4. Existencia de caminos — *Complejidad en espacio determinista.* NL (logarítmico no determinista); se justifica con el algoritmo de nodo actual y contador.

Ejercicio 5. Church-Turing — *Ideas básicas para simular una MT con un programa con variables; detalle de `δ(qi,aj)=(qm,ak,D)`.* Tres variables `X,Z,Y` (véase 2.1c).

Ejercicio 6. Reducciones — *Diferencias entre Turing y logarítmica; cuál es más fuerte.* La logarítmica admite una sola llamada y mapea la respuesta, por lo que es más fuerte; la Turing usa un oráculo y múltiples llamadas, por lo que es más débil.

---

### 15 de julio de 2022 (Extraordinario)

Ejercicio 1. Decidibilidad
1. *¿`M` acepta `u` usando `n` o más casillas (`n` en binario)?* — SEMIDECIDIBLE. "Existe un cálculo que usa ≥n casillas y acepta": se busca por simulación y se acepta al detectarlo. Sin cota superior, luego no decidible.
2. *¿`M` acepta `u` usando `n` o menos casillas?* — DECIDIBLE. Espacio acotado a `n`, luego configuraciones finitas; simulación acotada con detección de ciclos.
3. *¿Existe un palíndromo NO aceptado por `M`?* — NO SEMIDECIDIBLE. Combina "existe palabra que no acepta" (complementario), luego reducción desde C-UNIVERSAL/EMPTY.
4. *¿`M` nunca se mueve a la izquierda al leer `u`?* — DECIDIBLE (para un único `u`): si no se mueve a la izquierda, actúa como un autómata que solo avanza; el cálculo sobre `u` queda acotado y se simula. Si fuera "para toda entrada", sería indecidible.

Ejercicio 2. Verdadero/Falso
1. *Una MT multicinta se simula con multipista en el mismo tiempo* — V (la multipista mantiene los pasos).
2. *Si se resuelve en `f(n)`, se resuelve en `0.25f(n)+n`* — V (aceleración lineal / compresión de cinta, teorema de speed-up).
3. *Si `SAT∈P`, entonces `FSAT∈P`* — V (autorreducibilidad: la asignación se construye con llamadas a SAT).
4. *Si `P1∝P2` logarítmica y `P1` es NP-completo, entonces `P2` lo es* — F (falta `P2∈NP`; solo NP-difícil).
5. *Si una MT se mueve a la izquierda en la cinta de salida, su espacio es al menos `O(n)`* — V (al retroceder en la salida, esa cinta deja de ser de solo escritura y se contabiliza como espacio).

Ejercicio 3. Complejidad — *Problema de las parejas, complejidad.* P (reducción a Flujo Máximo, Ford-Fulkerson).

Ejercicio 4. Decidibilidad — *PCP: enunciado y decidibilidad.* Dadas listas de palabras, ¿existe una secuencia de índices con la misma concatenación arriba y abajo? Indecidible con alfabeto ≥2; semidecidible (búsqueda en anchura de secuencias). Con alfabeto `{1}` es decidible.

Ejercicio 5. Church-Turing — *Programa con variables para `V←V+1` sobre `{a,b}`.* Se interpreta `{a,b}` como dígitos binarios; se suma 1 con acarreo recorriendo la palabra (equivale a la palabra siguiente lexicográfica).

Ejercicio 6. Problemas — *Red Feliz, clase.* TFNP (función total): el equilibrio existe siempre; el algoritmo consiste en cambiar los nodos infelices de forma iterativa hasta converger.

---

## 2023

### 12 de junio de 2023

Ejercicio 1. Decidibilidad
1. *PCP con alfabeto `A={1}`* — DECIDIBLE (caso particular: un solo símbolo lo hace decidible).
2. *¿`L(M)` tiene complejidad polinómica?* — NO DECIDIBLE (Rice), propiedad no trivial del lenguaje/comportamiento; no semidecidible (cuantifica sobre todas las entradas).
3. *Dado un programa Post-Turing, ¿NO acepta la palabra vacía?* — NO SEMIDECIDIBLE. "No acepta `λ`" equivale a C-UNIVERSAL con `w=λ`.
4. *¿`⟨M1⟩` es subcadena de `⟨M2⟩`?* — DECIDIBLE. Comparación de dos cadenas finitas.

Ejercicio 2. Verdadero/Falso
1. *Si δ=2, entonces δ=3* — V (cota más laxa).
2. *Caracterización de coNP (siempre acepta para SÍ; al menos una rama rechaza para NO)* — V (definición de coNP por ramas universales).
3. *Si `P1∝P2∝P3` y `P3` no es semidecidible, entonces `P1` tampoco* — F.
4. *Un problema NP-difícil es siempre NP-completo* — F (falta pertenecer a NP).

Ejercicio 3. SAT — *Relación entre 2-SAT y los caminos en grafos dirigidos.* Se construye el grafo de implicaciones (cada cláusula `(a∨b)` genera `¬a→b` y `¬b→a`); la fórmula es inconsistente si y solo si existe un camino `x→¬x` y otro `¬x→x` (x y ¬x en la misma componente fuertemente conexa). De ahí que 2-SAT pertenezca a NL.

Ejercicio 4. Clases — *Definición de P y EXP, relación.* `P=⋃TIEMPO(nʲ)`, `EXP=⋃TIEMPO(2^{nʲ})`; `P ⊊ EXP` (estricta, jerarquía de tiempo).

Ejercicio 5. Reducciones — *Conjunto Independiente hacia VC.* `S` es independiente de tamaño `k` si y solo si `V∖S` es cubrimiento de tamaño `n−k`; misma `G`, se complementa el umbral.

Ejercicio 6. MT — *Simulación multicinta hacia 1 cinta; relación de pasos `t(n)`.* Multipista; `O(t(n)²)`.

---

### 6 de julio de 2023

Ejercicio 1. Decidibilidad
1. *¿Existe un palíndromo aceptado por `M1` y NO por `M2`?* — NO SEMIDECIDIBLE. Combina "existe… aceptada por M1" con "no aceptada por M2" (complementario), luego reducción desde C-UNIVERSAL/EMPTY.
2. *¿Existe `u` aceptada por `M1` tal que `u⁻¹` sea aceptada por `M2`?* — SEMIDECIDIBLE (no decidible). Del tipo "existe": búsqueda en anchura que adivina `u`, simula `M1(u)` y `M2(u⁻¹)` y acepta si ambas aceptan.
3. *¿`M` acepta todas las palabras del alfabeto?* — NO SEMIDECIDIBLE. "Para toda palabra": reducción desde EMPTY/complementario.
4. *¿`M` nunca escribe al leer la palabra vacía?* — DECIDIBLE. Comportamiento sobre una única entrada (`λ`) acotado: se simula hasta que se detenga o se detecte ciclo en las configuraciones (finitas mientras no escriba ni expanda). Propiedad de la máquina sobre entrada fija.

Ejercicio 2. Variables numéricas — *Qué son y cómo se simulan con palabras.* Variables que almacenan naturales con `+1/−1/IF≠0`; se simulan por la biyección palabra/natural (orden lexicográfico).

Ejercicio 3. Verdadero/Falso
1. *¿Un problema de decisión no trivial puede resolverse en espacio `O(1)`?* — en general no de forma significativa (necesita leer la entrada; lenguajes regulares con espacio de trabajo constante).
2. *TFNP implica decisión en tiempo lineal* — V de forma trivial para la decisión (siempre "sí"), pero no para encontrar la solución.
3. *Se sabe que `L = PESPACIO`* — F (son distintas).
4. *El Viajante tiene δ-aproximación con δ=2* — V solo en el caso métrico/euclídeo (≤2); el general no.

Ejercicio 4. NP-completitud — *`CH → TSP` (decisión).* Matriz de distancias: peso 1 si hay arista, 2 si no; cota `B=n`. Existe circuito hamiltoniano si y solo si existe una ruta TSP de coste ≤ n.

Ejercicio 5. Verificadores — *`PRIMO(n) ∈ NP`.* Certificado de Pratt (raíz primitiva más factorización de `n−1` con primalidad recursiva); verificable en tiempo polinómico.

Ejercicio 6. Complejidad — *Parejas y ACTRI, complejidad.* Parejas en P (Flujo Máximo); ACTRI (acoplamiento por tripletas, tridimensional) NP-completo.

---

## 2024

### 12 de junio de 2024

Ejercicio 1. Decidibilidad
1. *¿Si `M` acepta `u`, también acepta `u⁻¹`?* — NO DECIDIBLE (Rice); propiedad del lenguaje (cierre bajo inversión); el "para toda u" la hace no semidecidible (reducción desde EMPTY/complementario).
2. *¿Toda palabra `|u|≤100` se acepta en `≤|u|³` pasos?* — DECIDIBLE. Conjunto finito de palabras (≤100) y límite de pasos finito para cada una, luego simulación acotada.
3. *¿La complejidad de `M` NO es `n³` en tiempo?* — NO DECIDIBLE. Propiedad asintótica del comportamiento sobre infinitas entradas; reducción desde un problema no decidible.
4. *MT no determinista y `u`: ¿todos los caminos terminan en <100 pasos?* — DECIDIBLE. El árbol de cálculo hasta profundidad 100 es finito (factor de ramificación acotado); se explora por completo.

Ejercicio 2. Decidibilidad teórica — *`P(x)` y su contrario `C-P(x)`: enunciado y demostración de las relaciones.* Teorema de los complementarios completo (véanse 1.1 y el Ejercicio 4 de julio de 2021).

Ejercicio 3. Verdadero/Falso
1. *MT multipista hacia 1 cinta en el mismo número de pasos* — V.
2. *`PESPACIO = NPESPACIO`* — V (Savitch).
3. *La factorización pertenece a FNPT sin algoritmo polinómico conocido* — V.
4. *Todo programa numérico se simula con variables en el mismo número de pasos* — F (la traducción introduce sobrecarga; el "mismo número de pasos" es falso aunque sean equivalentes).

Ejercicio 4. NP-completitud (a elegir)
- A) *Partición hacia Mochila:* se enuncian ambos; la reducción fija pesos iguales a valores y el umbral a la mitad de la suma.
- B) *VC hacia Circuito Hamiltoniano:* cada arista se transforma en un gadget de 12 vértices recorrible de 3 formas consistentes con la cobertura.

Ejercicio 5. Clases — *Clase de la existencia de caminos en grafos dirigidos.* NL, con el algoritmo de nodo actual y contador (espacio logarítmico no determinista).

Ejercicio 6. Problemas — *Red Feliz: enunciado, algoritmo y clase.* TFNP; algoritmo de mejora local (voltear un nodo infeliz) que siempre converge.

---

### 8 de julio de 2024

Ejercicio 1. Decidibilidad
1. *¿`M` acepta siempre toda palabra de longitud ≤100?* — DECIDIBLE. El conjunto de palabras (≤100) es finito; como "aceptar" requiere detenerse, se argumenta por la finitud del conjunto a verificar (simulación con cota de configuraciones). DECIDIBLE por finitud.
2. *¿`M` nunca visita el estado `q`, sea cual sea la entrada?* — NO DECIDIBLE. "Para cualquier entrada nunca alcanza `q`" es comportamiento sobre infinitas entradas; reducción desde el problema de la PARADA/UNIVERSAL.

Ejercicio 2. Church-Turing — *Simular un programa con variables hacia Post-Turing (organización y simulación de instrucciones básicas).* Variables separadas por `#`; las instrucciones desplazan el cabezal hasta la variable y desplazan el bloque (véase 2.1a).

Ejercicio 3. Verdadero/Falso
1. *Si hay un algoritmo polinómico para CH (decisión), también lo hay para encontrarlo* — V (autorreducibilidad: se fijan aristas y se consulta el oráculo de decisión).
2. *MT de 1 cinta ilimitada por ambos lados hacia ilimitada por la derecha, en el mismo orden temporal* — V (2 pistas, `O(t)`).
3. *El isomorfismo de grafos es NP-completo* — F (clase GI, no demostrado).
4. *Si `L2∝L1`, `L3∝L1` y `L1` es r.e., entonces `L2∪L3` es r.e.* — V (r.e. es cerrada bajo unión y bajo reducción a un r.e.).

Ejercicio 4. NP-completitud — *Horn, 2-SAT, NAESAT.* Horn-SAT en P (propagación unitaria); 2-SAT en P/NL (grafo de implicaciones); NAESAT NP-completo.

Ejercicio 5. Jerarquía — *Definición de P, NPESPACIO, NP, L, PESPACIO, NL y relaciones.* Cadena `L⊆NL⊆P⊆NP⊆PESPACIO=NPESPACIO`; se emplea la unión de tiempos/espacios y se invoca Savitch.

---

## 2025

### 11 de junio de 2025

Ejercicio 1. Decidibilidad
1. *MT de 2 cintas, `|u|≤100`: ¿nunca usa más de 100 casillas en la primera cinta?* — DECIDIBLE. Entradas finitas (≤100) y espacio acotado (100 casillas), luego configuraciones finitas; simulación acotada con detección de ciclo.
2. *¿`M` acepta todas las palabras de longitud ≤10?* — DECIDIBLE. Solo existe un número finito de palabras de longitud ≤10. Matiz: como "aceptar" implica detenerse, se trata como verificación de un conjunto finito.
3. *¿Toda palabra `|w|≤100` aceptada por `M1` lo es por `M2` en un número de pasos ≤ que `M1`?* — DECIDIBLE. Palabras finitas; para cada una se simula `M1` (si se detiene) y se compara con `M2`. Conjunto finito acotado.
4. *`M2` siempre se detiene: ¿`M1` da más pasos que `M2` al leer `u`?* — SEMIDECIDIBLE. Como `M2` se detiene, se conoce su número de pasos `k`; se simula `M1` hasta `k+1` pasos: si lo supera, se acepta; si `M1` no se detiene, se continúa (queda semidecidible).

Ejercicio 2. Máquinas de Turing — *MT que reconoce `uu` (`u∈{0,1}*`) en espacio logarítmico.* Descripción de alto nivel: con una cinta de trabajo como contador binario (espacio logarítmico) se localiza la mitad `|w|/2` y se compara la posición `i` con la `i+|w|/2` empleando índices guardados en espacio logarítmico; se recorre `i=1..|w|/2`. No es necesario representar los estados.

Ejercicio 3. Verdadero/Falso
1. *MT ilimitada por ambos lados hacia ilimitada por la derecha en los mismos pasos* — F (mismo orden `O(t)`, no exactamente los mismos pasos).
2. *Para un espacio `O(n²)` se necesitan ≥2 cintas para no escribir en la entrada* — V (la cinta de entrada no debe contabilizarse; se requiere una cinta de trabajo separada).
3. *El conocimiento actual es compatible con `P=NP` y `NP=coNP`* — V.
4. *Está demostrado que la tesis de Church-Turing es cierta* — F.

Ejercicio 4. NP-completitud — *Problema de la SUMA, complejidad.* ¿Existe un subconjunto que sume exactamente `B`? NP-completo; pertenece a NP (certificado es el subconjunto, la suma se comprueba en tiempo polinómico) y es NP-difícil (3-SAT/ACTRI hacia SUMA).

Ejercicio 5. Complejidad — *Definición de EXP; relación con PESPACIO y P.* `EXP=⋃TIEMPO(2^{nʲ})`; `P⊊EXP`, y `PESPACIO⊆EXP` (recorrer todas las configuraciones de un espacio polinómico cuesta tiempo exponencial).

Ejercicio 6. Reducciones (a elegir) — *`FSAT → SAT` Turing* (fijar variable, consultar el oráculo, mantenerla si es consistente) o *`FHAMILTONIANO → HAMILTONIANO`* (fijar aristas y consultar el oráculo de decisión).

---

### 7 de julio de 2025

Ejercicio 1. Decidibilidad
1. *¿Existe una entrada `u` tal que `M` cicla con `u`?* — NO SEMIDECIDIBLE. "Ciclar" equivale a no detenerse; "existe una entrada que no se detiene" se relaciona con el complementario de la parada, luego reducción desde un problema no semidecidible.
2. *¿Para toda `u`, si `M1` cicla entonces `M2` también?* — NO SEMIDECIDIBLE. El "para toda `u`" junto con la condición sobre la no parada conduce a una reducción desde C-UNIVERSAL/no-parada.
3. *MT sin movimientos a la izquierda y `u`: ¿acepta `u`?* — DECIDIBLE. Sin movimientos a la izquierda, el cabezal solo avanza, luego se comporta como un autómata finito sobre `u`; el cálculo tiene longitud acotada por `|u|` (más una cola finita), luego la simulación termina.
4. *¿Para ninguna entrada se mueve a la izquierda en sus 5 primeros movimientos?* — DECIDIBLE. Solo intervienen los 5 primeros pasos: el comportamiento en 5 pasos depende de un prefijo finito de la entrada; número finito de casos a comprobar, luego decidible.

Ejercicio 2. Church-Turing — *Variables numéricas frente a variables con palabras.* Equivalentes por la biyección natural/palabra; `+1` equivale a la palabra siguiente lexicográfica (véase 2.3).

Ejercicio 3. Verdadero/Falso
1. *PCP sobre `{1}` es semidecidible pero no decidible* — F (con `{1}` es decidible).
2. *Una MT de una cinta tiene espacio al menos `O(n)`* — F (la entrada no se contabiliza si no se sobrescribe; puede ser sublineal).
3. *Los FNPT se resuelven en tiempo polinómico determinista* — F (la existencia garantizada no implica un cálculo fácil).
4. *Caracterización de coNP (rechaza al menos una rama para NO; acepta en todas para SÍ)* — V.

Ejercicio 4. NP-completitud — *Cláusulas Horn, complejidad.* Horn admite ≤1 literal positivo por cláusula; es polinómico por propagación unitaria (se fuerzan los literales unitarios y se propaga).

Ejercicio 5. Máquinas de Turing — *MT no deterministas frente a deterministas; ventajas y ejemplo.* La MT no determinista adivina y verifica; la ventaja es un diseño más simple para los problemas de búsqueda; es equivalente en potencia a la determinista (con coste). Ejemplo: aceptar palabras compuestas (adivinar el factor) o `L={uu}` (adivinar el corte).

Ejercicio 6. Optimización — *Mochila (optimización), complejidad.* NP-difícil (la versión decisión es NP-completa); programación dinámica pseudopolinómica `O(n·B)`; admite FPTAS.

---
---

# PARTE 3 — Síntesis final

## Tabla de referencia rápida del Ejercicio 1

| Si el enunciado indica… | Respuesta inmediata | Justificación |
|------------------------|---------------------|---------------|
| "≤N pasos", "|w|≤K", "≤c casillas", "primeros 5 movimientos", "número de estados" | DECIDIBLE | Simulación acotada / conjunto finito |
| "¿es subcadena de ⟨M⟩?", "¿⟨M1⟩ subcadena de ⟨M2⟩?" | DECIDIBLE | Comparación de cadenas |
| Propiedad de `L(M)`: palíndromo, regular, finito, "acepta 011" | NO DECIDIBLE | Rice |
| "¿Existe palabra…?", "¿acepta alguna…?" | SEMIDECIDIBLE (y no decidible por Rice) | Búsqueda en anchura / MT no determinista |
| "¿Para TODA palabra…?", "¿acepta todas?", "L1⊆L2", "L(M)=∅" | NO SEMIDECIDIBLE | Reducir EMPTY / C-UNIVERSAL / DIAGONAL |
| "¿M NO acepta w?" | NO SEMIDECIDIBLE | Es C-UNIVERSAL |
| "¿visita el estado q (cualquier entrada)?", "¿no se detiene nunca?" | NO DECIDIBLE (no por Rice) | Reducción desde PARADA |
| "PCP" | Indecidible (|A|≥2) / Decidible (A={1}) | Caso particular del alfabeto |
| "GIC ambigua" | Indecidible. "GIC genera u" | Decidible (CYK) |

## Errores frecuentes que reducen la calificación
1. Aplicar Rice a propiedades de la máquina (pasos, casillas, estados, movimientos). Rice solo es válido para propiedades no triviales de `L(M)`.
2. Afirmar que `B` es NP-completo solo con `A∝B`: falta probar `B∈NP` (en otro caso es únicamente NP-difícil).
3. Afirmar que la tesis de Church-Turing está demostrada: es falso (es una tesis).
4. Confundir "se sabe que" con "se conjetura": `L=PESPACIO` es falso (son distintas), `P=NP` permanece abierto.
5. Omitir la implicación recíproca en las reducciones.
6. Realizar búsqueda en profundidad en las pruebas de semidecidibilidad (debe ser en anchura / dovetailing).

## Formulaciones recomendadas para la justificación
- "Por el Teorema de Savitch, `NESPACIO(f)⊆ESPACIO(f²)`, luego `PESPACIO=NPESPACIO`."
- "Por el Teorema de la Jerarquía (de tiempo o de espacio), la inclusión es estricta (`P⊊EXP`, `L⊊PESPACIO`)."
- "Por el Teorema de Rice, toda propiedad no trivial de los lenguajes r.e. es indecidible."
- "Por el Teorema de Cook-Levin, SAT es NP-completo (codifica el cómputo de una MT no determinista como fórmula booleana)."
- "Por el Teorema de los complementarios, si `L` es r.e. no recursivo, `L̄` no es r.e."
- En toda reducción se enuncian los cuatro pasos: transformación, eficiencia logarítmica, implicación directa e implicación recíproca.

---

Documento elaborado a partir de los 24 archivos `.md` del export NotebookLM (estructura del examen, enunciados 2021-2025, Manual de Decidibilidad, temas tr1-tr6, clases de complejidad, mapa de reducciones y puntuaciones). Cubre exclusivamente la parte de teoría (Ejercicios 1 a 6).
