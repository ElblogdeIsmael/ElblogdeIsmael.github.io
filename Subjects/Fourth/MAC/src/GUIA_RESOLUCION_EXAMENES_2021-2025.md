# Guía de resolución de exámenes — MAC 2021–2025

Modelos Avanzados de Computación. Documento orientado a la obtención de la máxima calificación en la parte de teoría (Ejercicios 1 a 6).

No se incluyen los problemas de prácticas ni de evaluación global, dado que las prácticas ya constan como superadas.

La Parte 1 reúne las plantillas y la teoría de respaldo. La Parte 2 contiene la resolución desarrollada, ejercicio por ejercicio, de las diez convocatorias de 2021 a 2025. La Parte 3 ofrece una síntesis final. La calificación recae sobre la justificación; por ello cada respuesta razona el porqué y, cuando procede, describe la construcción completa (la máquina que decide, la búsqueda que semidecide o la reducción que prueba la no semidecidibilidad).

---

## 0. Estructura y puntuación del examen

| Ej | Tema | Contenido | Puntos 2024-25 | Puntos 2022-23 |
|----|------|-----------|----------------|----------------|
| 1 | T1-T2 Decidibilidad | Clasificar 4 problemas: decidible / semidecidible / no semidecidible | 2.4 | 2.0 |
| 2 | T2 Church-Turing | Simulación entre modelos o programa a bajo nivel | 1.3 | 2.0 |
| 3 | Varios | 4-5 afirmaciones de Verdadero/Falso razonadas | 2.4 | 1.5 |
| 4 | T4 | SAT / NP-completitud / reducción concreta | 1.3 | 1.5 |
| 5 | T3 | Definición de clases de complejidad y relaciones | 1.3 | 1.5 |
| 6 | T3-T4-T5-T6 | Problema específico (grafos, parejas, Red Feliz, mochila…) | 1.3 | 1.5 |

Los Ejercicios 1 y 3 suman casi 5 puntos (la mitad del examen).

---
---

# PARTE 1 — Plantillas y teoría de respaldo

---

## 1. Ejercicio 1 — Decidibilidad / Semidecidibilidad

### 1.1 Definiciones base

- Recursivo (decidible): existe una MT que siempre se detiene y responde SÍ/NO para cualquier entrada.
- Recursivamente enumerable, r.e. (semidecidible): existe una MT que se detiene y acepta cuando la respuesta es SÍ, pero puede ciclar indefinidamente cuando es NO.
- No semidecidible: no existe siquiera esa MT que acepte los casos afirmativos.

Teorema de los complementarios:
1. Si `L` es recursivo, `L̄` también lo es.
2. Si `L` y `L̄` son ambos r.e., entonces `L` es recursivo.
3. Si `L` es r.e. pero no decidible, entonces `L̄` no es semidecidible.

Propiedades de cierre útiles: r.e. es cerrada bajo unión e intersección finitas. La intersección de finitos r.e. es r.e.; por ello un "para todo sobre un conjunto finito de aceptaciones" sigue siendo r.e. (semidecidible), pero no por ello decidible.

Teoría de reducciones (`P1 ∝ P2` = "P1 se reduce a P2"; P2 es al menos tan difícil):
- Si `P1` es indecidible, `P2` es indecidible.
- Si `P1` no es semidecidible, `P2` no es semidecidible.
- Si `P2` es semidecidible, entonces `P1` también lo es.

### 1.2 Árbol de decisión (cuestión previa obligatoria)

Pregunta inicial: ¿la propiedad depende del lenguaje `L(M)` (qué palabras acepta) o del comportamiento de la máquina `M` (pasos, casillas, estados, movimientos)?

```
Existe un LÍMITE FINITO explícito de pasos o de espacio (≤N pasos, ≤c casillas)
        -> DECIDIBLE (simulación acotada). No aplicar Rice.

Solo se acota la LONGITUD de la entrada, pero NO los pasos, y la condición es "aceptar"
        -> CUIDADO: "aceptar" es semidecidible. Suele quedar SEMIDECIDIBLE (no decidible),
           no decidible. La finitud del conjunto de entradas no basta si no hay cota de pasos.

Propiedad del LENGUAJE L(M) y NO trivial (acepta palíndromo, L regular, L vacío,
acepta 011, L = {todas}, acepta u^i...)
        -> NO DECIDIBLE por el TEOREMA DE RICE; después se matiza:
           · "¿Existe una palabra...?"           -> SEMIDECIDIBLE
           · "¿Para TODA palabra...?" / "L1⊆L2"  -> NO SEMIDECIDIBLE

Propiedad de la MÁQUINA M sin límite finito (visita el estado q, no se detiene nunca,
cicla para alguna entrada...)
        -> NO DECIDIBLE, no por Rice -> REDUCCIÓN desde PARADA / UNIVERSAL / DIAGONAL.
```

Distinción crítica (origen de la mayoría de errores): "¿acepta toda palabra ≤K en ≤f(K) pasos?" es DECIDIBLE (hay cota de pasos), mientras que "¿acepta toda palabra ≤K?" sin cota de pasos es SEMIDECIDIBLE no decidible.

### 1.3 Las cuatro plantillas de redacción

Plantilla 1 — DECIDIBLE por simulación acotada:
> "Es decidible. Se construye una MT que simula `M` durante exactamente `N` pasos (o sobre las palabras de un conjunto finito). Como el espacio de búsqueda es finito, la simulación siempre termina y devuelve SÍ o NO. Si solo se acota el espacio (`c` casillas) sin acotar pasos, el número de configuraciones distintas es finito (≤ |Q|·c·|Γ|^c); si la simulación supera ese número, hay ciclo y se responde en consecuencia."

Plantilla 2 — NO DECIDIBLE por Rice (propiedad del lenguaje):
> "Es una propiedad no trivial de los lenguajes r.e.: existe una MT que la cumple (p. ej. una que acepta `{011}`) y otra que no (p. ej. una que acepta `∅`). Por el Teorema de Rice, el problema es indecidible."

Plantilla 3 — SEMIDECIDIBLE por búsqueda en anchura:
> "Es semidecidible. Se diseña una MT que enumera las palabras `w0, w1, w2, …` y aplica dovetailing: en la etapa `k` simula `k` pasos de `M` sobre `w0, …, wk`. Si existe la palabra buscada, en una etapa finita se detecta y se acepta. Si no existe, la máquina no se detiene, lo cual es compatible con la semidecidibilidad."
> La búsqueda debe ser en anchura: en profundidad, si una palabra cicla, nunca se probaría la siguiente.

Plantilla 4 — NO SEMIDECIDIBLE por reducción:
> "No es semidecidible. Se reduce un problema conocido como no semidecidible (`C-UNIVERSAL`, `DIAGONAL` o `EMPTY`) a este. Se describe el algoritmo `F` que transforma la instancia y se comprueba que la respuesta se conserva en ambos sentidos."

Gadget de "simulación durante |x| pasos" (clave para reducir a propiedades del tipo "acepta todas" o "existe palabra no aceptada"): dada `(M, w)`, se construye `M'` que, ante una entrada `x`, ignora su contenido y simula `M` sobre `w` durante `|x|` pasos; `M'` acepta `x` salvo que en esos `|x|` pasos `M` haya aceptado `w`. Entonces, si `M` nunca acepta `w`, `M'` acepta toda palabra (`L(M')=Σ*`); y si `M` acepta `w` en `k` pasos, `M'` rechaza toda `x` con `|x|≥k`. Este artificio transforma `C-UNIVERSAL` en "¿`L(M')=Σ*`?".

### 1.4 Catálogo de problemas base

| Problema | Enunciado | Clasificación |
|----------|-----------|---------------|
| UNIVERSAL (Lu) | ¿`M` acepta `w`? | Semidecidible, no decidible |
| C-UNIVERSAL | ¿`M` NO acepta `w`? | No semidecidible |
| PARADA | ¿`M` se detiene con `w`? | Semidecidible, no decidible |
| DIAGONAL (Ld) | ¿`M` no acepta su código `⟨M⟩`? | No semidecidible |
| C-DIAGONAL | ¿`M` sí acepta `⟨M⟩`? | Semidecidible |
| EMPTY / VACÍO (Le) | ¿`L(M)=∅`? | No semidecidible |
| C-VACÍO (Lne) | ¿`L(M)≠∅`? | Semidecidible |
| PCP (Post) | Correspondencias de Post | Indecidible si \|alfabeto\|≥2; decidible si alfabeto `{1}` |
| GIC ambigua | ¿una gramática indep. del contexto es ambigua? | Indecidible |
| GIC genera w / AP acepta w | — | Decidible (CYK) |

---

## 2. Ejercicio 2 — Tesis de Church-Turing y simulaciones

### 2.1 Simulaciones entre modelos

a) Programa con variables hacia programa Post-Turing:
- Organización: las variables `X1,…,Xm,Z1,…,Zk,Y` se disponen en la cinta separadas por el blanco `#`, con la forma `#V1#V2#…#Vn#`.
- Instrucciones: añadir un símbolo (`Vj ← ai Vj`) o borrar el último (`Vj ← Vj−`) se simulan con macros Post-Turing que desplazan el cabezal hasta la variable, desplazan el bloque a la derecha para crear o cerrar hueco, y escriben o borran.

b) Programa Post-Turing hacia MT:
- Organización: mismo alfabeto. Por cada instrucción `Ii` un estado `qi`, más un estado final `qf`.
- Traducción uno a uno: `PRINT a` → `δ(qi,b)=(qi+1, a, S)`; `RIGHT` → `δ(qi,b)=(qi+1, b, D)`; `IF ak GOTO L` → desde `qi` a `qL` si se lee `ak`, y a `qi+1` en otro caso.

c) MT hacia programa con variables:
- Organización: `X` = parte izquierda del cabezal, `Z` = símbolo leído, `Y` = parte derecha.
- Transición `δ(qi,aj)=(qm,ak,D)`: se escribe `ak` en `X`, se vacía `Z`, se lee el primer símbolo de `Y` y se traslada a `Z`, y se salta a la etiqueta de `qm`.

### 2.2 Sobrecarga de las simulaciones de cintas

| Simulación | Coste |
|------------|-------|
| MT multicinta hacia 1 cinta | tiempo `O(t²)` |
| Cinta doble infinita hacia semiinfinita (por la derecha) | mismo orden `O(t)`, con 2 pistas |
| MT multipista hacia 1 cinta | mismo número de pasos |

### 2.3 Variables numéricas frente a variables de palabras
- Numéricas: `Xi,Zi,Y`; instrucciones `A←A+1`, `A←A−1`, `IF A≠0 GOTO L`.
- Equivalencia: existe una biyección entre palabras y naturales (`N(w)=n`); `+1` equivale a la palabra siguiente en orden lexicográfico.

### 2.4 Tesis de Church-Turing
- Enunciado: "Toda función efectivamente calculable mediante un proceso mecánico bien definido puede ser calculada por una Máquina de Turing".
- "Está demostrada": FALSO (es una tesis, no un teorema). "La computación cuántica la pone en duda": FALSO (afecta a la eficiencia).

### 2.5 Macros y algoritmos clásicos
- `U←V` (copia con variable auxiliar para invertir y reinvertir), `V←−V` (borrar el primer símbolo), suma de cadenas, número siguiente, `V←V+1`, comprobar múltiplo.

---

## 3. Ejercicio 3 — Verdadero/Falso (banco de referencia)

| Afirmación | V/F | Justificación |
|------------|-----|---------------|
| `PESPACIO = NPESPACIO` | V | Teorema de Savitch: `NESPACIO(f) ⊆ ESPACIO(f²)`. |
| `L ≠ PESPACIO` | V | `L ⊊ PESPACIO` por la jerarquía de espacio. |
| Se sabe que `L = PESPACIO` | F | Se sabe que son distintas. |
| `NL ⊆ P` (en NL implica tiempo polinómico) | V | Inclusión de la cadena. |
| `NP ⊆ PESPACIO` y `NP ⊆ EXP` | V | Cadena de inclusiones. |
| Si `P=NP`, TSP en tiempo polinómico determinista | V | TSP(decisión) es NP-completo. |
| Si `NL = NP`, entonces `NP = coNP` | V | NL cerrada bajo complementario. |
| El complementario de SAT no tiene algoritmo polinómico (se sabe) | F | No demostrado. |
| Si `A` NP-completo y `A∝B`, entonces `B` NP-completo | F | Falta `B∈NP` (solo NP-difícil). |
| NP-difícil es siempre NP-completo | F | Falta pertenecer a NP. |
| Horn-SAT es NP-completo | F | Es polinómico. |
| `P = EXP` | F | `P ⊊ EXP` (jerarquía de tiempo). |
| FNPT se resuelven en tiempo polinómico determinista | F | La existencia está garantizada; el cálculo no. |
| La tesis de Church-Turing está demostrada | F | Es una tesis. |

---

## 4. Clases de complejidad

Cadena: `L ⊆ NL ⊆ P ⊆ NP ⊆ PESPACIO = NPESPACIO ⊊ EXP`. Estrictas demostradas: `L⊊PESPACIO`, `NL⊊PESPACIO`, `P⊊EXP`. `PESPACIO=NPESPACIO` por Savitch.

Definiciones: `P=⋃TIEMPO(nʲ)`; NP = MT no determinista en tiempo polinómico, o equivalentemente existencia de certificado verificable en tiempo polinómico; coNP = complementario en NP; L/NL = espacio logarítmico det./no det.; PESPACIO = espacio polinómico; `EXP=⋃TIEMPO(2^{nʲ})`.

Medida: sobre la longitud de la representación `n=log(x)`. En espacio no se cuentan la cinta de entrada (si no se sobrescribe) ni la de salida (si se escribe en una sola dirección).

Funciones: FNP (búsqueda), FP (se calcula la solución en tiempo polinómico), TFNP (la solución existe siempre). Aproximación: APX (δ constante), PTAS (cualquier precisión en tiempo polinómico en `n`), FPTAS (polinómico en `n` y en `1/(δ−1)`). DP `= L1∩L2` con `L1∈NP`, `L2∈coNP`.

---

## 5. Reducciones NP-completas

Cuatro pasos de `P1 ∝ P2`: (1) algoritmo de transformación; (2) eficiencia (espacio logarítmico o tiempo polinómico); (3) SÍ en origen ⟹ SÍ en destino; (4) SÍ en destino ⟹ SÍ en origen.

Para demostrar `B` NP-completo: probar `B∈NP` y reducir `A∝B` con `A` NP-completo conocido.

Mapa: `SAT → 3-SAT → VC → CH → TSP`; `3-SAT → ACTRI → SUMA → PARTICIÓN → MOCHILA`; `Clique ≡ Conjunto Independiente ≡ VC`.

Variantes de SAT: SAT, 3-SAT, MAX2SAT y NAESAT son NP-completos; 2-SAT y Horn-SAT son polinómicos.

Reducibilidad: Karp/logarítmica (una llamada, mapea la respuesta) es más fuerte; Turing (oráculo, varias llamadas) es más débil. NP-difícil: un NP-completo se reduce Turing a él.

---

## 6. Problemas clásicos

| Problema | Clase | Idea |
|----------|-------|------|
| Caminos en grafos dirigidos | NL | adivinar el camino guardando nodo actual y contador |
| Parejas (emparejamiento perfecto) | P | reducción a Flujo Máximo (Ford-Fulkerson) |
| Red Feliz | TFNP (PLS) | mejora local: voltear nodos infelices hasta converger |
| Isomorfismo de grafos | GI | en NP, no demostrado NP-completo ni P |
| PRIMO(n) | NP (de hecho P) | certificado de Pratt |
| ACTRI (tripletas) | NP-completo | versión tridimensional de Parejas |
| Mochila (optimización) | NP-difícil, FPTAS | programación dinámica `O(n·B)` |

---
---

# PARTE 2 — Resolución desarrollada, examen por examen

Cada apartado incluye: enunciado, identificación del tipo, clasificación y desarrollo (construcción de la máquina, búsqueda o reducción según corresponda).

---

## 2021

### 22 de junio de 2021

Ejercicio 1. Decidibilidad

1. *Dada MT `M` y palabra `w`, ¿es cierto que `M` NO acepta `w`?*
   - Tipo: comportamiento sobre una entrada fija; es directamente el problema base C-UNIVERSAL.
   - Clasificación: NO SEMIDECIDIBLE.
   - Desarrollo: el problema UNIVERSAL ("¿`M` acepta `w`?") es semidecidible y no decidible (se semidecide con el simulador universal: acepta si `M` acepta `w`, y cicla en caso contrario). Por el Teorema de los complementarios, si UNIVERSAL es r.e. y no recursivo, su complementario "¿`M` no acepta `w`?" no es r.e. Por tanto, no es semidecidible.

2. *Dada una GIC, ¿es ambigua?*
   - Tipo: propiedad estructural de gramáticas independientes del contexto.
   - Clasificación: NO DECIDIBLE (indecidible).
   - Desarrollo: la ambigüedad de una GIC es un problema clásico indecidible (se demuestra por reducción del Problema de Correspondencias de Post: a partir de una instancia de PCP se construye una gramática que es ambigua si y solo si la instancia tiene solución). No se exige reproducir la reducción, pero conviene citarla.

3. *Dada una GIC `G` y una palabra `u`, ¿`G` genera `u`?*
   - Tipo: pertenencia de una palabra concreta al lenguaje de una GIC.
   - Clasificación: DECIDIBLE.
   - Desarrollo: el algoritmo CYK decide la pertenencia en tiempo `O(|u|³)` tras pasar `G` a forma normal de Chomsky. El procedimiento es finito y siempre termina con SÍ o NO.

4. *¿Existe una palabra de longitud ≤100 aceptada por `M` en menos de 1000 pasos?*
   - Tipo: doble cota finita (longitud de entrada y número de pasos).
   - Clasificación: DECIDIBLE.
   - Desarrollo: el conjunto de palabras de longitud ≤100 sobre `{0,1}` es finito (a lo sumo `2^{101}−1`). Para cada una se simula `M` durante 999 pasos como máximo. Como tanto el número de palabras como el de pasos por palabra son finitos, la simulación completa termina; se responde SÍ si alguna acepta dentro del límite, y NO en caso contrario.

Ejercicio 2. Verdadero/Falso

1. *Todo problema NP puede resolverse en espacio polinómico y tiempo exponencial.* VERDADERO. Se recorre el árbol de cálculo no determinista por backtracking: cada rama tiene profundidad polinómica, luego se reutiliza el espacio (polinómico) y el tiempo total es exponencial. Equivale a `NP ⊆ PESPACIO ⊆ EXP`.
2. *Una MT universal puede calcular cualquier cosa que cualquier otra MT pueda calcular.* VERDADERO por definición de máquina universal: recibe `⟨M⟩` y `w` y reproduce el cómputo de `M` sobre `w`.
3. *Se sabe que el complementario de SAT no tiene un algoritmo de tiempo polinómico.* FALSO. Afirmarlo equivaldría a demostrar `P≠coNP` (y `P≠NP`), cuestión abierta.
4. *Si `A` es NP-completo y `A∝B`, entonces `B` es NP-completo.* FALSO. La reducción solo prueba que `B` es NP-difícil; para ser NP-completo debe además pertenecer a NP, lo que aquí no se afirma.
5. *Si `P=NP`, el Viajante de Comercio se resuelve en tiempo polinómico determinista.* VERDADERO. La versión decisión del TSP es NP-completa; si `P=NP`, toda la clase NP cae en P.

Ejercicio 3. NP-completitud — *Reducción de SUMA(A,s,B) a PARTICIÓN(A',s').*
- Enunciados: SUMA pregunta si existe un subconjunto de `A` cuyos tamaños (función `s`) sumen exactamente `B`. PARTICIÓN pregunta si un conjunto se puede dividir en dos partes de igual suma.
- (1) Transformación: sea `T = Σ_{a∈A} s(a)`. Se construye `A' = A ∪ {y, z}` con `s'(y) = T + B` y `s'(z) = 2T − B` (ambos positivos si `0 ≤ B ≤ T`). La suma total de `A'` es `T + (T+B) + (2T−B) = 4T`, de modo que cada mitad debe sumar `2T`.
- (2) Eficiencia: el cálculo de `T` y la creación de dos elementos es espacio logarítmico.
- (3) Implicación directa: si en `A` existe `S` con suma `B`, entonces `S ∪ {z}` suma `B + (2T−B) = 2T`; su complementario `(A∖S) ∪ {y}` suma `(T−B) + (T+B) = 2T`. Hay partición.
- (4) Implicación recíproca: en cualquier partición de `A'`, los elementos `y` y `z` no pueden caer en la misma parte (sumarían `3T−... > 2T`); por tanto quedan separados. La parte que contiene `z` debe completar `2T − (2T−B) = B` con elementos de `A`; ese subconjunto resuelve SUMA.
- Ejemplo: `A={3,1,2}`, `B=3`. `T=6`, `y=9`, `z=9`. `A'={3,1,2,9,9}`, total `24`, mitad `12`. La partición `{3,9}` y `{1,2,9}` corresponde al subconjunto `{3}` (suma 3) de SUMA.

Ejercicio 4. Grafos — *Complejidad en espacio del problema de caminos en grafos dirigidos.*
- Pertenece a NL (espacio logarítmico no determinista). Algoritmo: partiendo del nodo origen, se adivina de forma no determinista el siguiente nodo del camino, guardando únicamente el nodo actual y un contador del número de pasos (a lo sumo `n`, es decir `log n` bits). Se acepta si se alcanza el destino en ≤ `n` pasos. El espacio es logarítmico. En versión determinista pertenece a P (recorrido en anchura/profundidad).

Ejercicio 5. Simulaciones — *MT con cinta ilimitada en ambas direcciones mediante MT con cinta ilimitada solo por la derecha.*
- Organización: se pliega la cinta bi-infinita por la casilla 0 y se representa con 2 pistas: la pista superior almacena las posiciones `0, 1, 2, …` y la inferior las posiciones `−1, −2, −3, …`. La cinta resultante es semiinfinita (tope a la izquierda en la casilla 0).
- Simulación: la MT marca en qué pista trabaja; un movimiento a la derecha en la cinta original avanza en la pista superior (o retrocede en la inferior, según la zona); al cruzar la casilla 0 se cambia de pista. El control finito duplica los estados (uno por pista).
- Complejidad: cada paso de la original es un paso (o un cambio de pista) en la simulación, luego el orden temporal es el mismo, `O(t)`.

---

### 12 de julio de 2021

Ejercicio 1. Decidibilidad

1. *Dada `M` y `w`, ¿el número de estados de `M` es ≤ `|w|`?*
   - Tipo: propiedad sintáctica de `⟨M⟩`, sin ejecutar `M`.
   - Clasificación: DECIDIBLE.
   - Desarrollo: se cuentan los estados que aparecen en la codificación `⟨M⟩` y se compara con `|w|`. Es una comprobación finita y directa que no requiere simular la máquina.

2. *¿`M` acepta al menos 3 palabras distintas?*
   - Tipo: propiedad del lenguaje (cardinalidad ≥ 3), de tipo existencial.
   - Clasificación: SEMIDECIDIBLE, no decidible.
   - Desarrollo: no decidible por Rice (la propiedad "tener al menos 3 palabras" es no trivial: hay lenguajes que la cumplen y otros que no). Semidecidible mediante dovetailing: se simulan en anchura todas las palabras; en cuanto se acumulan 3 aceptaciones distintas, se acepta. Si el lenguaje tiene menos de 3 palabras, la máquina no se detiene.

3. *¿`M` acepta exactamente 3 palabras distintas?*
   - Tipo: conjunción de "al menos 3" (existencial, r.e.) y "como mucho 3" (universal sobre el resto, co-r.e.).
   - Clasificación: NO SEMIDECIDIBLE.
   - Desarrollo: "como mucho 3" exige garantizar que ninguna otra palabra es aceptada, lo cual no es r.e. (es una condición universal sobre infinitas palabras, emparentada con el complementario del problema de no vacuidad). La intersección de un r.e. con un problema que no es r.e. no es r.e. Se prueba reduciendo un problema no semidecidible (del tipo EMPTY ampliado): se construye una máquina que acepta 3 palabras testigo fijas y, además, simula `M` para añadir aceptaciones; el resultado tiene exactamente 3 palabras si y solo si `M` no acepta ninguna, que es EMPTY.

4. *¿`M` acepta `w` sin usar más de `2|w|` casillas?*
   - Tipo: cota finita de espacio.
   - Clasificación: DECIDIBLE.
   - Desarrollo: con el espacio limitado a `2|w|` casillas, el número de configuraciones posibles es finito (acotado por `|Q|·(2|w|)·|Γ|^{2|w|}`). Se simula `M` sobre `w` respetando ese límite: si acepta dentro del espacio, SÍ; si intenta usar la casilla `2|w|+1`, NO; si el número de pasos supera la cota de configuraciones sin aceptar, hay ciclo y se responde NO. Siempre termina.

Ejercicio 2. Verdadero/Falso

1. *La clase L es distinta de PESPACIO.* VERDADERO. Por el Teorema de la Jerarquía de Espacio, `L ⊊ PESPACIO` es una inclusión estricta demostrada.
2. *El problema SAT para cláusulas Horn es NP-completo.* FALSO. Horn-SAT se resuelve en tiempo polinómico por propagación unitaria; pertenece a P.
3. *Si `P1∝P2` y `P2` es semidecidible, entonces `P1` lo es.* VERDADERO. Componiendo el algoritmo de transformación con el semidecisor de `P2` se obtiene un semidecisor de `P1`.
4. *Si un problema está en NL, se resuelve en tiempo polinómico determinista.* VERDADERO. `NL ⊆ P`.
5. *La computación cuántica pone en duda la tesis de Church-Turing.* FALSO. Afecta a la eficiencia (posibles aceleraciones), no a lo que es computable; todo lo cuánticamente calculable lo es por una MT.

Ejercicio 3. Clase NP — *Definición con certificados y verificadores, con ejemplo.*
- Definición: un problema pertenece a NP si existe una relación `R(x,y)` verificable en tiempo polinómico y un polinomio `p` tales que `x` es instancia positiva si y solo si existe un certificado `y` con `|y| ≤ p(|x|)` y `R(x,y)` cierto. El verificador es una MT determinista que, dados `x` e `y`, comprueba `R` en tiempo polinómico.
- Ejemplo (SAT): la entrada `x` es una fórmula; el certificado `y` es una asignación de verdad de sus variables; el verificador sustituye y evalúa todas las cláusulas en tiempo polinómico. Si alguna asignación la satisface, existe certificado; en caso contrario, ninguno funciona.

Ejercicio 4. Decidibilidad (P y su contrario) — *Relaciones entre `P(x)` y `C-P(x)`.*
- Resultados: (i) si `P` es decidible, `C-P` es decidible (se invierte la salida del decisor). (ii) Si `P` y `C-P` son ambos semidecidibles, entonces `P` (y `C-P`) son decidibles: se ejecutan en paralelo los dos semidecisores y, como exactamente uno se detiene, se obtiene siempre una respuesta. (iii) Si `P` es semidecidible pero no decidible, entonces `C-P` no es semidecidible (de lo contrario, por (ii), `P` sería decidible). Conviene ilustrarlo con UNIVERSAL (semidecidible) y C-UNIVERSAL (no semidecidible).

Ejercicio 5. Simulaciones — *MT multicinta mediante MT de una sola cinta y relación temporal.*
- Organización: una sola cinta con multipista; se dedican dos pistas por cada cinta original (una para el contenido y otra para marcar la posición de su cabezal).
- Simulación de un paso: la MT recorre toda la zona usada de izquierda a derecha para leer los símbolos bajo todos los cabezales, decide la transición conjunta, y vuelve a recorrer para escribir y mover las marcas de cabezal.
- Complejidad: si la multicinta ejecuta `t(n)` pasos, la zona usada tiene longitud `O(t(n))`; cada paso simulado cuesta `O(t(n))` recorridos, luego el total es `O(t(n)²)`.

---

## 2022

### 27 de junio de 2022

Ejercicio 1. Decidibilidad

1. *¿`u` es subcadena de `⟨M⟩`?*
   - Tipo: propiedad sintáctica de la codificación.
   - Clasificación: DECIDIBLE.
   - Desarrollo: `⟨M⟩` es una cadena finita; se aplica un algoritmo de búsqueda de subcadena. No requiere ejecutar `M`. Termina siempre.

2. *¿`M` NO acepta la palabra `011`?*
   - Tipo: comportamiento sobre entrada fija (`w=011`).
   - Clasificación: NO SEMIDECIDIBLE.
   - Desarrollo: es C-UNIVERSAL con `w=011`. UNIVERSAL es r.e. no recursivo; su complementario no es r.e. (Teorema de los complementarios).

3. *¿`L(M)` es exactamente el conjunto de palíndromos sobre `{0,1}`?*
   - Tipo: igualdad del lenguaje con un lenguaje fijo; propiedad del lenguaje.
   - Clasificación: NO DECIDIBLE (Rice) y, además, NO SEMIDECIDIBLE.
   - Desarrollo: por Rice es indecidible (propiedad no trivial de `L(M)`). No es semidecidible porque `L(M) = PAL` exige `PAL ⊆ L(M)` (universal sobre infinitas palabras) y `L(M) ⊆ PAL`. La parte `PAL ⊆ L(M)` se reduce desde un problema no semidecidible del tipo "acepta todas" (usando el gadget de simulación durante `|x|` pasos restringido a palíndromos): así se transforma C-UNIVERSAL en esta igualdad.

4. *¿`M` acepta alguna palabra de la forma `0^{2n}`?*
   - Tipo: propiedad del lenguaje, existencial.
   - Clasificación: SEMIDECIDIBLE, no decidible.
   - Desarrollo: no decidible por Rice. Semidecidible por dovetailing sobre las palabras `0^0, 0^2, 0^4, …`: se simulan en anchura y se acepta en cuanto una es aceptada. Si ninguna lo es, no se detiene.

Ejercicio 2. Verdadero/Falso

1. *Si una MT escribe en su primera cinta, su complejidad en espacio es `O(n)`.* FALSO. El espacio depende de cuántas casillas distintas visite o escriba, no del hecho de escribir; puede ser sublineal (logarítmica) o superlineal según el algoritmo.
2. *Si un problema de optimización tiene umbral de aproximación 2, entonces tiene un algoritmo δ-aproximado polinómico con δ=2.* FALSO. El umbral es el ínfimo de las razones alcanzables; puede no alcanzarse con igualdad, de modo que existan algoritmos con `δ>2` pero no exactamente `2`.
3. *La composición de dos algoritmos espacio-logarítmicos es espacio-logarítmica.* VERDADERO. No se almacena la salida intermedia `y=ALG1(x)`: cuando `ALG2` necesita el bit `i` de `y`, se relanza `ALG1(x)` y se cuenta hasta ese bit. El espacio adicional es un índice logarítmico.
4. *Si `P1∝P2∝P3` y `P1` es semidecidible, entonces `P3` lo es.* FALSO. La semidecidibilidad se transmite del destino al origen, no al revés: de `P1∝P2` y `P2` semidecidible se deduce `P1` semidecidible, pero `P1` semidecidible no dice nada de `P3`.
5. *Si `NL=NP`, entonces `NP=coNP`.* VERDADERO. NL es cerrada bajo complementario (Immerman–Szelepcsényi); si `NL=NP`, esa propiedad se traslada a NP, luego `NP=coNP`.

Ejercicio 3. NP-completitud — *Reducción de 3-SAT(V,C) a Cubrimiento por Vértices VC(G,K), con ejemplo.*
- (1) Transformación: por cada variable `xi` se crea un gadget de 2 vértices unidos por una arista (`xi`, `¬xi`). Por cada cláusula de 3 literales se crea un triángulo de 3 vértices (gadget de cláusula). Se conecta cada vértice del triángulo con el vértice del literal correspondiente del gadget de variable. Se fija `K = |V| + 2|C|` (un vértice por variable más dos por cláusula).
- (2) Eficiencia: la construcción del grafo es espacio logarítmico (recorre variables y cláusulas).
- (3) Directa: dada una asignación que satisface la fórmula, se toma de cada gadget de variable el vértice del literal FALSO, y de cada triángulo los 2 vértices cuyos literales no satisfacen (dejando fuera uno que sí satisface). Esos `|V| + 2|C|` vértices cubren todas las aristas.
- (4) Recíproca: un cubrimiento de tamaño `K = |V| + 2|C|` debe usar exactamente 1 vértice por gadget de variable (cubrir su arista) y 2 por triángulo (cubrir las 3 aristas internas). El literal no elegido en cada variable define una asignación; las aristas de conexión obligan a que cada cláusula tenga al menos un literal verdadero, luego la fórmula es satisfacible.
- Ejemplo: `(x1 ∨ x2 ∨ x3)`. Gadgets de variable `{x1,¬x1}`, `{x2,¬x2}`, `{x3,¬x3}`; un triángulo para la cláusula; `K = 3 + 2 = 5`. La asignación `x1=V` cubre con el vértice `¬x1`, etc.

Ejercicio 4. Existencia de caminos — *Complejidad en espacio determinista, con justificación.*
- Pertenece a NL en versión no determinista (adivina el camino, guarda nodo actual y contador, espacio logarítmico). En determinista se ubica en su clase logarítmica/polinómica y, en todo caso, en P. Por el Teorema de Savitch, el problema (no determinista en espacio `log n`) se resuelve en espacio determinista `O(log²n)`.

Ejercicio 5. Church-Turing — *Simular una MT con un programa con variables; detalle de la transición.*
- Organización: tres variables `X` (izquierda del cabezal, almacenada invertida para tener el símbolo más cercano accesible), `Z` (símbolo bajo el cabezal) e `Y` (derecha del cabezal). Un bloque de etiquetas por estado.
- Transición `δ(qi,aj)=(qm,ak,D)`: estando en la etiqueta de `qi` y con `Z=aj`, se escribe `ak` y se añade a `X` (el cabezal avanza, lo escrito queda a la izquierda), se toma el primer símbolo de `Y` y se coloca en `Z` (si `Y` está vacío, `Z` recibe el blanco), y se salta a la etiqueta de `qm`. Un movimiento a la izquierda es simétrico (se traslada de `X` a `Z`).

Ejercicio 6. Reducciones — *Diferencias entre reducibilidad Turing y logarítmica; cuál es más fuerte.*
- La reducción logarítmica (Karp) transforma una instancia de `P1` en una de `P2` con una única llamada y devuelve directamente la respuesta de `P2`; preserva las clases NP, coNP, etc.
- La reducción Turing resuelve `P1` en tiempo polinómico empleando un oráculo de `P2` al que puede llamar varias veces y combinar las respuestas con lógica adicional.
- La logarítmica es más fuerte (más restrictiva): toda reducción logarítmica es una reducción Turing, pero no al revés. La de Turing es más permisiva.

---

### 15 de julio de 2022 (Extraordinario)

Ejercicio 1. Decidibilidad

1. *Dada `M`, `u` y `n` (en binario), ¿`M` acepta `u` usando `n` o más casillas?*
   - Tipo: existencia de un cálculo aceptador con consumo de espacio ≥ `n`; no hay cota superior.
   - Clasificación: SEMIDECIDIBLE, no decidible.
   - Desarrollo: se simula `M` sobre `u`; si `M` acepta y, en esa computación, llegó a usar al menos `n` casillas, se acepta. La aceptación es semidecidible; al detenerse aceptando se conoce el espacio usado. Si `M` no acepta `u`, la simulación no se detiene. No es decidible porque el caso negativo (no acepta) no se puede confirmar.

2. *Igual, pero usando `n` o menos casillas.*
   - Tipo: cota finita de espacio (`≤ n`).
   - Clasificación: DECIDIBLE.
   - Desarrollo: con el espacio limitado a `n`, las configuraciones son finitas; se simula con detección de ciclo. Si acepta dentro de `n` casillas, SÍ; si excede `n` casillas o entra en ciclo sin aceptar, NO.

3. *¿Existe un palíndromo que NO sea aceptado por `M`?*
   - Tipo: existencia de una palabra (palíndromo) en el complementario del lenguaje.
   - Clasificación: NO SEMIDECIDIBLE.
   - Desarrollo: "no aceptada" remite al complementario, que no es r.e. Para confirmar que un palíndromo concreto no es aceptado habría que descartar la no parada, lo cual no es semidecidible. Se reduce C-UNIVERSAL: a partir de `(M,w)` se construye una máquina que sobre un palíndromo testigo simula `M` sobre `w`, de modo que "existe palíndromo no aceptado" equivale a "M no acepta w".

4. *Dada `M` y `u`, ¿en el cálculo sobre `u` la MT nunca se mueve a la izquierda?*
   - Tipo: comportamiento sobre una entrada fija, sin movimientos a la izquierda.
   - Clasificación: DECIDIBLE.
   - Desarrollo: si la MT nunca se mueve a la izquierda, el cabezal solo avanza o se mantiene; nunca revisita casillas escritas. Tras pasar la entrada `u` lee blancos, y el comportamiento sobre blancos depende solo del estado (finitos). Se simula: si en algún paso se mueve a la izquierda, NO; si el cabezal avanza indefinidamente o repite un par (estado, símbolo bajo cabezal) en la zona de blancos sin moverse a la izquierda, se concluye que nunca lo hará, SÍ. El proceso termina.

Ejercicio 2. Verdadero/Falso

1. *Una MT multicinta se puede simular con una MT multipista con la misma complejidad en tiempo.* VERDADERO. La multipista es una sola cinta cuyo alfabeto agrupa los símbolos de todas las pistas; un acceso simultáneo a las pistas es un único paso, luego se mantiene el orden temporal.
2. *Si un problema se resuelve con complejidad `f(n)`, también con `0.25·f(n)+n`.* VERDADERO. Por el teorema de aceleración lineal (compresión de cinta mediante un alfabeto ampliado), se puede reducir el factor constante; el término `+n` cubre la lectura inicial de la entrada.
3. *Si SAT se resolviera en tiempo polinómico, FSAT también.* VERDADERO. Por autorreducibilidad: se fija `x1=V` y se consulta SAT sobre la fórmula resultante; si sigue siendo satisfacible se mantiene, si no `x1=F`; se repite variable a variable, con un número polinómico de llamadas, hasta construir una asignación.
4. *Si `P1∝P2` en espacio logarítmico y `P1` es NP-completo, entonces `P2` también.* FALSO. De ello se deduce que `P2` es NP-difícil, pero para ser NP-completo debe pertenecer a NP, lo que no se afirma.
5. *Si una MT se mueve a la izquierda en la cinta de salida, su complejidad en espacio es al menos `O(n)`.* VERDADERO. La cinta de salida solo deja de contabilizarse si se escribe en una única dirección sin retroceder; al moverse a la izquierda en ella, deja de ser de solo escritura y pasa a contar como espacio de trabajo, que para producir una salida de tamaño `O(n)` es al menos lineal.

Ejercicio 3. Complejidad — *Problema de las parejas: enunciado y complejidad.*
- Enunciado: dado un grafo bipartito (o dos conjuntos con compatibilidades), determinar si existe un emparejamiento perfecto que asocie todos los elementos uno a uno.
- Complejidad: pertenece a P. Se reduce en tiempo polinómico al problema de Flujo Máximo (fuente conectada a un lado, sumidero al otro, capacidades 1) y se resuelve con Ford–Fulkerson; un flujo entero máximo igual al número de elementos equivale a un emparejamiento perfecto.

Ejercicio 4. Decidibilidad — *Correspondencias de Post: descripción y decidibilidad.*
- Enunciado: dadas dos listas de palabras `(α1,…,αk)` y `(β1,…,βk)` sobre un alfabeto, determinar si existe una secuencia de índices `i1,…,im` tal que `αi1…αim = βi1…βim`.
- Decidibilidad: indecidible cuando el alfabeto tiene al menos 2 símbolos (se demuestra reduciendo el problema de la palabra/parada de las MT). Semidecidible en general: se enumeran en anchura todas las secuencias de índices y se acepta si alguna iguala las concatenaciones. Con alfabeto de un solo símbolo `{1}` el problema se reduce a una condición aritmética y es decidible.

Ejercicio 5. Church-Turing — *Programa con variables para `V←V+1` sobre `{a,b}`.*
- Se interpreta la palabra como un número en base 2 con dígitos `a=0`, `b=1`, leído de modo que la operación sea sumar 1 con acarreo. Recorriendo la palabra desde el dígito menos significativo: mientras el dígito sea `b` (1) se cambia a `a` (0) y se propaga el acarreo; al encontrar el primer `a` (0) se cambia a `b` (1) y se detiene; si todos eran `b`, se añade un `b` al final. Equivale a calcular la palabra siguiente en orden lexicográfico.

Ejercicio 6. Problemas — *Red Feliz: enunciado y clase de complejidad.*
- Enunciado: en una red de nodos con estados, cada nodo es "feliz" o "infeliz" según una condición local respecto a sus vecinos; se busca una configuración estable (todos felices o sin posibilidad de mejora local).
- Clase: TFNP (funciones totales), concretamente del tipo búsqueda local (PLS). El equilibrio existe siempre, por lo que la decisión es trivialmente "sí"; el algoritmo cambia el estado de un nodo infeliz de forma iterativa y, como cada cambio mejora una función potencial acotada, converge. Encontrar el equilibrio puede no ser polinómico.

---

## 2023

### 12 de junio de 2023

Ejercicio 1. Decidibilidad

1. *PCP con alfabeto `A={1}`.*
   - Tipo: caso particular del Problema de Correspondencias de Post.
   - Clasificación: DECIDIBLE.
   - Desarrollo: con un único símbolo, cada palabra `αi`, `βi` se reduce a su longitud; la existencia de una secuencia se convierte en una condición lineal entera (existencia de coeficientes no negativos que igualen sumas de longitudes), que es decidible. Con alfabeto de ≥2 símbolos sería indecidible.

2. *¿La complejidad del lenguaje aceptado por `M` es polinómica?*
   - Tipo: propiedad del lenguaje aceptado.
   - Clasificación: NO DECIDIBLE (Rice); no semidecidible.
   - Desarrollo: por Rice es indecidible (propiedad no trivial de `L(M)`). No es semidecidible: afirmar que la complejidad es polinómica cuantifica sobre el comportamiento en infinitas entradas y no admite confirmación finita; se reduce un problema no r.e.

3. *Dado un programa Post-Turing `P`, ¿`P` NO acepta la palabra vacía?*
   - Tipo: comportamiento sobre la entrada fija `λ`.
   - Clasificación: NO SEMIDECIDIBLE.
   - Desarrollo: los programas Post-Turing son equivalentes a las MT, por lo que "P no acepta `λ`" es C-UNIVERSAL con `w=λ`, que no es r.e.

4. *Dadas `M1` y `M2`, ¿`⟨M1⟩` es subcadena de `⟨M2⟩`?*
   - Tipo: propiedad sintáctica de las codificaciones.
   - Clasificación: DECIDIBLE.
   - Desarrollo: ambas codificaciones son cadenas finitas; se aplica búsqueda de subcadena. Termina siempre.

Ejercicio 2. Verdadero/Falso

1. *Si existe un algoritmo δ-aproximado polinómico con δ=2, también con δ=3.* VERDADERO. Una razón de aproximación mayor es una cota más laxa; el mismo algoritmo, que garantiza estar dentro del factor 2, también está dentro del factor 3.
2. *Caracterización de coNP: una MT no determinista tal que para "SÍ" todos los cálculos aceptan y para "NO" al menos uno rechaza.* VERDADERO. Es la definición de coNP por ramas universales (aceptación si y solo si todas las ramas aceptan).
3. *Si `P1∝P2∝P3` y `P3` no es semidecidible, entonces `P1` tampoco.* FALSO. La no semidecidibilidad se transmite del origen al destino (`P1∝P3` con `P1` no r.e. implica `P3` no r.e.), no en sentido contrario; que `P3` sea no r.e. no fuerza a `P1`.
4. *Un problema NP-difícil es siempre NP-completo.* FALSO. NP-completo exige además pertenecer a NP; existen problemas NP-difíciles fuera de NP (por ejemplo, problemas indecidibles o de clases superiores).

Ejercicio 3. SAT — *Relación entre 2-SAT y la búsqueda de caminos en grafos dirigidos.*
- Construcción: para una fórmula 2-SAT se define el grafo de implicaciones, con un vértice por cada literal (`x` y `¬x`). Cada cláusula `(a ∨ b)` genera dos aristas dirigidas: `¬a → b` y `¬b → a` (si `a` es falso, `b` debe ser verdadero, y viceversa).
- Criterio: la fórmula es insatisfacible si y solo si existe alguna variable `x` con caminos dirigidos `x → ¬x` y `¬x → x` (es decir, `x` y `¬x` en la misma componente fuertemente conexa). La búsqueda de tales caminos es un problema de alcanzabilidad en grafos dirigidos.
- Consecuencia: 2-SAT se resuelve mediante alcanzabilidad, luego pertenece a NL (y a P).

Ejercicio 4. Clases — *Definición de P y EXP, y relación.*
- `P = ⋃_{j>0} TIEMPO(nʲ)` (tiempo polinómico determinista). `EXP = ⋃_{j>0} TIEMPO(2^{nʲ})` (tiempo exponencial determinista).
- Relación: `P ⊆ EXP` y, por el Teorema de la Jerarquía de Tiempo, la inclusión es estricta: `P ⊊ EXP`.

Ejercicio 5. Reducciones — *Reducción de Conjunto Independiente a Cubrimiento por Vértices (decisión).*
- (1) Transformación: se conserva el mismo grafo `G` de `n` vértices; si la pregunta de Conjunto Independiente es "¿existe un independiente de tamaño ≥ k?", se traduce a "¿existe un cubrimiento de tamaño ≤ n−k?".
- (2) Eficiencia: la transformación es trivial (solo cambia el umbral), espacio logarítmico.
- (3) y (4): `S` es un conjunto independiente si y solo si su complementario `V∖S` es un cubrimiento por vértices (toda arista tiene al menos un extremo fuera de `S`, es decir, en `V∖S`). Luego existe independiente de tamaño ≥ k si y solo si existe cubrimiento de tamaño ≤ n−k. La equivalencia es exacta en ambos sentidos.

Ejercicio 6. MT — *Simulación de multicinta a una cinta; relación de pasos `t(n)`.*
- Idéntica a la del 12 de julio de 2021, Ejercicio 5: multipista con marcas de cabezal; cada paso simulado cuesta `O(t(n))` y el total es `O(t(n)²)`.

---

### 6 de julio de 2023

Ejercicio 1. Decidibilidad

1. *Dadas `M1` y `M2`, ¿existe un palíndromo aceptado por `M1` y NO aceptado por `M2`?*
   - Tipo: existencial sobre `M1`, combinado con "no aceptada" por `M2` (complementario).
   - Clasificación: NO SEMIDECIDIBLE.
   - Desarrollo: aunque "existe palíndromo aceptado por `M1`" sería semidecidible, la condición "y no aceptada por `M2`" depende del complementario de `L(M2)`, que no es r.e. Se reduce un problema no r.e. (tipo C-UNIVERSAL/EMPTY) construyendo `M2` para que "no acepta" equivalga a la condición no semidecidible.

2. *Dadas `M1` y `M2`, ¿existe `u` aceptada por `M1` tal que `u⁻¹` es aceptada por `M2`?*
   - Tipo: existencial con dos condiciones de aceptación.
   - Clasificación: SEMIDECIDIBLE, no decidible.
   - Desarrollo: ambas condiciones son de aceptación (r.e.). Se hace dovetailing: se enumeran las palabras `u`; para cada una se simulan en anchura `M1(u)` y `M2(u⁻¹)`; se acepta cuando ambas aceptan. Si no existe tal `u`, no se detiene.

3. *¿`M` acepta todas las palabras del alfabeto de entrada?*
   - Tipo: propiedad universal del lenguaje (`L(M)=Σ*`).
   - Clasificación: NO SEMIDECIDIBLE.
   - Desarrollo: no decidible por Rice. No es semidecidible: se reduce C-UNIVERSAL con el gadget de "simulación durante `|x|` pasos". Dada `(M,w)`, se construye `M'` que ante `x` simula `M` sobre `w` durante `|x|` pasos y acepta salvo que `M` haya aceptado `w` en ese tramo. Entonces `M` no acepta `w` (caso C-UNIVERSAL positivo) si y solo si `M'` acepta todas las palabras. Como C-UNIVERSAL no es r.e., "acepta todas" tampoco.

4. *¿`M` nunca escribe en sus cintas cuando lee la palabra vacía?*
   - Tipo: comportamiento sobre entrada fija (`λ`).
   - Clasificación: DECIDIBLE.
   - Desarrollo: si `M` no escribe, la cinta permanece toda en blanco; la configuración queda determinada por el estado y la posición del cabezal sobre celdas indistinguibles (blancas). El comportamiento reading-blank en cada estado es determinista, de modo que sin escribir se entra en un ciclo de estados en a lo sumo `|Q|` pasos. Se simula: si en algún paso `M` escribe, NO; si transcurren más de `|Q|` pasos sin escribir, se concluye que nunca escribirá, SÍ. Termina.

Ejercicio 2. Variables numéricas — *Qué son y cómo se simulan con palabras.*
- Un programa con variables numéricas opera sobre naturales con instrucciones elementales `A←A+1`, `A←A−1` (con tope en 0) e `IF A≠0 GOTO L`.
- Simulación con variables que contienen palabras: se fija un alfabeto y una biyección `N: Σ* → ℕ` (orden lexicográfico). Cada variable numérica se representa por la palabra cuya imagen es su valor. `A←A+1` se simula calculando la palabra siguiente; `A←A−1`, la anterior; `IF A≠0` comprueba si la palabra es la que codifica el 0 (la vacía). La equivalencia es exacta porque `N` es biyectiva.

Ejercicio 3. Verdadero/Falso

1. *¿Es posible que un problema de decisión no trivial tenga complejidad en espacio `O(1)`?* En general NO de forma significativa: un problema no trivial requiere al menos leer la entrada; con espacio de trabajo constante solo se reconocen lenguajes regulares. Cualquier problema que dependa de la estructura global de la entrada necesita más que `O(1)` de trabajo.
2. *Si un problema está en TFNP, su problema de decisión asociado se resuelve en tiempo lineal.* VERDADERO para la decisión "¿existe solución?", que es trivialmente "sí" (la solución siempre existe); FALSO si se interpreta como encontrar la solución, que puede ser difícil.
3. *Se sabe que la clase L es distinta de PESPACIO.* VERDADERO. `L ⊊ PESPACIO` está demostrado por la jerarquía de espacio.
4. *El Viajante de Comercio tiene un algoritmo δ-aproximado polinómico con δ=2.* VERDADERO solo para la variante métrica/euclídea (por ejemplo, el algoritmo de Christofides da `3/2`, y la cota `2` es alcanzable con árbol generador mínimo). El TSP general no admite aproximación constante salvo que `P=NP`.

Ejercicio 4. NP-completitud — *Reducción de Circuito Hamiltoniano a Viajante de Comercio (decisión).*
- (1) Transformación: dado el grafo `G=(V,E)` de Circuito Hamiltoniano, se construye una instancia de TSP con las mismas `n` ciudades y matriz de distancias `d(i,j)=1` si `{i,j}∈E` y `d(i,j)=2` si no. El umbral de coste es `B=n`.
- (2) Eficiencia: construir la matriz es espacio logarítmico.
- (3) Directa: si `G` tiene un circuito hamiltoniano, ese mismo recorrido usa `n` aristas de peso `1`, coste total `n ≤ B`.
- (4) Recíproca: una ruta TSP de coste `≤ n` que visita las `n` ciudades usa `n` aristas; como cada una pesa al menos `1`, todas deben pesar exactamente `1`, es decir, todas son aristas de `G`; esa ruta es un circuito hamiltoniano.
- Ejemplo: un cuadrilátero `1-2-3-4-1` con aristas presentes da una ruta de coste `4=n`; si faltara una arista, la ruta mínima costaría `5>4`.

Ejercicio 5. Verificadores — *Justificar que PRIMO(n) está en NP.*
- El certificado de primalidad de Pratt para `n` consiste en una raíz primitiva `g` módulo `n` y la factorización de `n−1`, junto con certificados recursivos de la primalidad de cada factor primo. El verificador comprueba que `g^{n−1} ≡ 1 (mod n)` y que `g^{(n−1)/q} ≢ 1 (mod n)` para cada factor primo `q` de `n−1`, todo con exponenciación modular en tiempo polinómico en `log n`. La recursión tiene profundidad logarítmica, luego el certificado es de tamaño polinómico y verificable en tiempo polinómico. Por tanto, PRIMO ∈ NP.

Ejercicio 6. Complejidad — *Parejas y Acoplamiento por Tripletas (ACTRI): complejidad.*
- Parejas (emparejamiento bipartito) pertenece a P (reducción a Flujo Máximo).
- ACTRI (acoplamiento por tripletas, la variante con tres conjuntos) es NP-completo: pertenece a NP (un acoplamiento es un certificado verificable) y es NP-difícil (se reduce 3-SAT a ACTRI). El salto de dimensión de 2 a 3 conjuntos cambia la complejidad de P a NP-completo.

---

## 2024

### 12 de junio de 2024

Ejercicio 1. Decidibilidad

1. *¿Es cierto que siempre que `M` acepta `u` también acepta `u⁻¹`?*
   - Tipo: propiedad del lenguaje (cierre bajo inversión), de forma universal.
   - Clasificación: NO DECIDIBLE (Rice) y NO SEMIDECIDIBLE.
   - Desarrollo: por Rice es indecidible (propiedad no trivial de `L(M)`: hay lenguajes cerrados bajo inversión y otros que no). No es semidecidible porque la condición es universal ("para toda palabra aceptada…"); confirmarla exigiría comprobar infinitas palabras y descartar no paradas. Se reduce un problema no r.e. (tipo EMPTY): si `L(M)=∅`, la propiedad se cumple vacuamente; con la construcción adecuada, decidir el cierre equivaldría a decidir un problema no r.e.

2. *¿Toda palabra de longitud ≤100 se acepta en un número de pasos ≤ `|u|³`?*
   - Tipo: cota de longitud de entrada y cota explícita de pasos.
   - Clasificación: DECIDIBLE.
   - Desarrollo: hay un número finito de palabras de longitud ≤100. Para cada una se simula `M` durante a lo sumo `|u|³` pasos (cota finita) y se comprueba si acepta dentro de ese límite. Conjunto finito de simulaciones finitas, luego termina. La presencia de la cota de pasos es lo que lo hace decidible.

3. *¿La complejidad en tiempo de `M` NO es `n³`?*
   - Tipo: propiedad asintótica del comportamiento.
   - Clasificación: NO DECIDIBLE.
   - Desarrollo: la complejidad en tiempo depende del comportamiento sobre infinitas entradas; es una propiedad no decidible (se reduce desde el problema de la parada: no se puede determinar en general la cota de pasos de una MT arbitraria).

4. *Dada una MT no determinista `M` y `u`, ¿todos los caminos terminan en menos de 100 pasos?*
   - Tipo: cota explícita de pasos (100) sobre un árbol de cómputo no determinista.
   - Clasificación: DECIDIBLE.
   - Desarrollo: el árbol de configuraciones hasta profundidad 100 es finito (el factor de ramificación está acotado por el número de transiciones posibles). Se explora por completo y se comprueba que toda rama se detiene en menos de 100 pasos. Termina siempre.

Ejercicio 2. Decidibilidad teórica — *Relaciones entre `P(x)` y `C-P(x)`.*
- Mismos resultados que en el 12 de julio de 2021, Ejercicio 4, demostrados: complementario de decidible es decidible; si ambos son semidecidibles, son decidibles (ejecución en paralelo); si uno es semidecidible no decidible, el otro no es semidecidible.

Ejercicio 3. Verdadero/Falso

1. *Si se tiene una MT multipista, se puede simular con una MT de una sola cinta con el mismo número de pasos.* VERDADERO. La multipista ya es una sola cinta con alfabeto compuesto; el acceso a todas las pistas en una posición es un único paso.
2. *PESPACIO = NPESPACIO.* VERDADERO por el Teorema de Savitch (`NESPACIO(f) ⊆ ESPACIO(f²)`, y `f²` sigue siendo polinómica si `f` lo es).
3. *Descomponer un número en factores primos es de la clase FNPT, pero sin algoritmo polinómico conocido.* VERDADERO. La factorización siempre tiene solución (todo número tiene factorización), luego es total; encontrarla no se sabe hacer en tiempo polinómico.
4. *Todo programa con variables numéricas se simula con un programa con variables (palabras) ejecutándose con el mismo número de pasos para cualquier entrada.* FALSO. Ambos modelos son equivalentes en potencia, pero la traducción introduce sobrecarga (cada operación numérica se simula con varias instrucciones sobre palabras); el "mismo número de pasos" no se mantiene.

Ejercicio 4. NP-completitud (a elegir)
- Opción A — Partición a Mochila: la Mochila (decisión) pregunta si existe un subconjunto con peso ≤ W y valor ≥ V. Tomando una instancia de Partición con suma total `2T`, se define cada objeto con peso = valor = su tamaño, `W = T` y `V = T`. Existe partición en dos mitades de suma `T` si y solo si existe un subconjunto de peso ≤ T y valor ≥ T, es decir, de peso y valor exactamente `T`. Esto prueba que Mochila es NP-difícil; como está en NP (un subconjunto es certificado), es NP-completa.
- Opción B — Cubrimiento por Vértices a Circuito Hamiltoniano: cada arista `{u,v}` de `G` se sustituye por un gadget (dispositivo) de 12 vértices que solo puede atravesarse de tres maneras consistentes (entrar y salir por el lado de `u`, por el de `v`, o por ambos). Se añaden `k` vértices selectores conectados a todos los gadgets. El grafo resultante tiene circuito hamiltoniano si y solo si `G` tiene un cubrimiento de tamaño `k`; cada selector "elige" un vértice de la cobertura que recorre sus gadgets incidentes.

Ejercicio 5. Clases — *Clase de complejidad de la existencia de caminos en grafos dirigidos.*
- Pertenece a NL. Algoritmo no determinista en espacio logarítmico: se guarda el nodo actual (inicialmente el origen) y un contador de pasos; en cada paso se adivina un vecino y se actualiza el nodo actual; se acepta si se alcanza el destino en ≤ `n` pasos. Solo se almacenan un nodo y un contador, ambos en `log n` bits.

Ejercicio 6. Problemas — *Red Feliz: enunciado, algoritmo y clase.*
- Igual que en el 15 de julio de 2022, Ejercicio 6: TFNP (búsqueda local); algoritmo de voltear nodos infelices con función potencial decreciente que garantiza la convergencia.

---

### 8 de julio de 2024

Ejercicio 1. Decidibilidad

1. *¿`M` acepta todas las palabras de longitud ≤100?*
   - Tipo: propiedad universal sobre un conjunto finito de palabras, pero SIN cota de pasos; la condición es "aceptar".
   - Clasificación: SEMIDECIDIBLE, no decidible.
   - Desarrollo: hay un número finito de palabras de longitud ≤100, pero "¿`M` acepta una palabra dada?" es semidecidible (UNIVERSAL), no decidible. La conjunción finita de condiciones r.e. es r.e.: se simulan en anchura `M` sobre todas las palabras de longitud ≤100 y se acepta cuando todas han aceptado. Si alguna no es aceptada (rechazo por parada o ciclo), no se detiene. No es decidible porque ese caso negativo no se puede confirmar; además, por Rice, la propiedad "contener todas las palabras ≤100" es no trivial, luego indecidible. (Contraste con el 12 de junio de 2024, Ej.1.2, que sí es decidible por incluir cota de pasos.)

2. *Dado uno de sus estados `q`, ¿`M` nunca visita `q` sea cual sea la entrada?*
   - Tipo: propiedad universal del comportamiento sobre todas las entradas.
   - Clasificación: NO DECIDIBLE.
   - Desarrollo: "para cualquier entrada nunca alcanza `q`" cuantifica sobre infinitas entradas y cómputos posiblemente no terminantes. Se reduce el problema de la PARADA/UNIVERSAL: se transforma `M` para que alcanzar `q` equivalga a aceptar `w`, de modo que decidir esta propiedad decidiría un problema indecidible.

Ejercicio 2. Church-Turing — *Simular un programa con variables (palabras) mediante un programa Post-Turing.*
- Organización de la información: las variables se concatenan en la cinta separadas por el blanco `#`, con la forma `#V1#V2#…#Vn#`. El programa Post-Turing mantiene la convención de posición para localizar cada variable.
- Simulación de instrucciones básicas: `Vj ← ai Vj` (añadir el símbolo `ai` al principio de `Vj`) se simula localizando el separador de `Vj`, desplazando hacia la derecha todo el bloque a partir de ahí para abrir una casilla, y escribiendo `ai`. `Vj ← Vj−` (borrar el último símbolo) localiza el final de `Vj` y desplaza hacia la izquierda el resto para cerrar la casilla. Las comprobaciones de tipo `IF Vj ENDS a` se simulan leyendo el último símbolo de `Vj`.

Ejercicio 3. Verdadero/Falso

1. *Si existiera un algoritmo polinómico para decidir la existencia de circuito hamiltoniano, también existiría uno para encontrarlo.* VERDADERO. Por autorreducibilidad: se prueba a eliminar cada arista y se consulta el oráculo de decisión; si tras eliminarla el grafo sigue teniendo circuito, se descarta; si no, la arista es necesaria y se conserva. Con un número polinómico de llamadas se reconstruye el circuito.
2. *Una MT con 1 cinta ilimitada en ambas direcciones se simula con una de cinta limitada solo por la derecha con el mismo orden de complejidad en tiempo.* VERDADERO. La técnica de las 2 pistas (plegado por la casilla 0) mantiene el orden `O(t)`.
3. *El problema del isomorfismo de grafos es NP-completo.* FALSO. Está en NP, pero no se ha demostrado que sea NP-completo ni que esté en P; se ubica en la clase GI.
4. *Si `L2∝L1` y `L3∝L1`, y `L1` es r.e., entonces `L2∪L3` es r.e.* VERDADERO. Si `L1` es r.e., de `L2∝L1` se sigue que `L2` es r.e., e igualmente `L3`; la unión de dos lenguajes r.e. es r.e. (se semidecide ejecutando ambos semidecisores en paralelo).

Ejercicio 4. NP-completitud — *Complejidad de SAT para cláusulas Horn, 2-SAT y NAESAT.*
- Horn-SAT: polinómico. Una cláusula Horn tiene a lo sumo un literal positivo; se resuelve por propagación unitaria (se fijan los literales obligados y se propagan hasta saturar o hallar contradicción).
- 2-SAT: polinómico (pertenece a NL). Se resuelve con el grafo de implicaciones y la búsqueda de `x` y `¬x` en la misma componente fuertemente conexa.
- NAESAT: NP-completo. A pesar de exigir que en cada cláusula no todos los literales sean iguales, sigue siendo tan difícil como SAT (se demuestra por reducción desde 3-SAT con un literal de control).

Ejercicio 5. Jerarquía — *Definir P, NPESPACIO, NP, L, PESPACIO, NL y sus relaciones.*
- Definiciones: `L` y `NL` = espacio logarítmico determinista y no determinista; `P = ⋃TIEMPO(nʲ)`; `NP` = tiempo polinómico no determinista; `PESPACIO` = espacio polinómico determinista; `NPESPACIO` = espacio polinómico no determinista.
- Relaciones: `L ⊆ NL ⊆ P ⊆ NP ⊆ PESPACIO`, y `PESPACIO = NPESPACIO` por Savitch. Estrictas demostradas: `L ⊊ PESPACIO` y `NL ⊊ PESPACIO`. El resto de inclusiones se conjeturan estrictas pero no se ha demostrado.

---

## 2025

### 11 de junio de 2025

Ejercicio 1. Decidibilidad

1. *MT `M` de dos cintas y `|u|≤100`: ¿nunca usa más de 100 casillas en la primera cinta al leer `u`?*
   - Tipo: cota finita de espacio (100 casillas) y de entrada.
   - Clasificación: DECIDIBLE.
   - Desarrollo: limitando la primera cinta a 100 casillas (y observando la segunda en consonancia), el número de configuraciones distintas es finito. Se simula `M` sobre `u`: si intenta acceder a la casilla 101 de la primera cinta, se responde NO; si se detiene o repite configuración (ciclo) sin superar las 100 casillas, se responde SÍ. Termina siempre porque las configuraciones acotadas en espacio son finitas.

2. *¿`M` acepta todas las palabras de longitud ≤10?*
   - Tipo: propiedad universal sobre conjunto finito de palabras, SIN cota de pasos.
   - Clasificación: SEMIDECIDIBLE, no decidible.
   - Desarrollo: análogo al 8 de julio de 2024, Ej.1.1. Las palabras de longitud ≤10 son finitas, pero la aceptación de cada una es semidecidible. Se semidecide simulando en anchura todas ellas y aceptando cuando todas hayan aceptado; no se detiene si alguna no es aceptada. No es decidible (por Rice, la propiedad del lenguaje es no trivial; y el caso negativo no es confirmable). Contraste con el apartado 1, que sí es decidible por tener cota de espacio.

3. *Dadas `M1` y `M2`, ¿toda palabra de longitud ≤100 aceptada por `M1` lo es también por `M2` con un número de pasos ≤ al empleado por `M1`?*
   - Tipo: condición universal con aceptación de `M1` (semidecidible) en el antecedente.
   - Clasificación: NO SEMIDECIDIBLE.
   - Desarrollo: el complementario sí es semidecidible: para refutar la afirmación basta encontrar una palabra `w` (≤100) que `M1` acepte en `k1` pasos y que `M2` no acepte en ≤ `k1` pasos; esto se busca por dovetailing (al aceptar `M1` se conoce `k1` y se simula `M2` durante `k1` pasos). Como el complementario es r.e., la afirmación es co-r.e.; y no es r.e., porque su verdad incluye casos en que `M1` cicla sobre alguna `w` (antecedente falso, no confirmable). Por tanto, no es semidecidible.

4. *Dadas `M1` y `M2` (con `M2` garantizada de terminar para toda entrada) y una palabra `u`, ¿`M1` da más pasos que `M2` al leer `u`?*
   - Tipo: comparación de pasos sobre una entrada fija, con `M2` total.
   - Clasificación: DECIDIBLE.
   - Desarrollo: como `M2` siempre termina, se simula `M2` sobre `u` y se obtiene su número exacto de pasos `k2` (finito). Después se simula `M1` sobre `u` durante `k2+1` pasos: si `M1` se detiene en ≤ `k2` pasos, no da más que `M2`, NO; si tras `k2+1` pasos `M1` sigue en ejecución, entonces dará al menos `k2+1 > k2` pasos (incluso si cicla indefinidamente), SÍ. La simulación está acotada por `k2+1`, luego siempre termina.

Ejercicio 2. Máquinas de Turing — *Describir una MT que reconozca `uu` (`u∈{0,1}*`) en espacio logarítmico.*
- Idea de alto nivel: la entrada `w` tiene longitud par `2m` (si es impar, se rechaza). Hay que comprobar que la primera mitad coincide con la segunda.
- Construcción en espacio logarítmico: se usa una cinta de trabajo como contador binario (a lo sumo `log(2m)` casillas). Primero se determina `m` contando símbolos. Después, para cada índice `i` de `1` a `m`, se guardan en binario los índices `i` e `i+m`, se sitúa el cabezal sobre la posición `i` (recorriendo con el contador), se memoriza el símbolo en el control finito, se desplaza a la posición `i+m` y se compara; si difieren, se rechaza. Solo se almacenan índices en espacio logarítmico (no se copia la mitad de la palabra), de modo que el espacio de trabajo es `O(log m)`. No es necesario detallar los estados.

Ejercicio 3. Verdadero/Falso

1. *Una MT ilimitada en ambos lados se simula con una ilimitada a la derecha con los mismos pasos.* FALSO. Se simula con el mismo orden de complejidad `O(t)` mediante 2 pistas, pero no exactamente con el mismo número de pasos (los cambios de pista y la gestión del plegado añaden pasos constantes).
2. *Para que una MT tenga complejidad en espacio `O(n²)` necesita más de una cinta para no escribir en la cinta de entrada.* VERDADERO. La cinta de entrada no se contabiliza solo si no se sobrescribe; para disponer de espacio de trabajo `O(n²)` sin tocar la entrada se requiere al menos una cinta de trabajo separada.
3. *El conocimiento actual es compatible con que `P≠NP` y `NP=coNP`.* VERDADERO. Ninguna de las dos relaciones está demostrada ni refutada; son escenarios posibles con el conocimiento actual.
4. *Está demostrado que la tesis de Church-Turing es cierta.* FALSO. Es una tesis, no un teorema: "efectivamente calculable" no es un concepto matemático formalizable, por lo que no admite demostración.

Ejercicio 4. NP-completitud — *Problema de la SUMA: enunciado y complejidad.*
- Enunciado: dados un conjunto de naturales y un objetivo `B`, ¿existe un subconjunto cuya suma sea exactamente `B`?
- Complejidad: NP-completo. Pertenece a NP (el subconjunto es un certificado y la suma se comprueba en tiempo polinómico). Es NP-difícil porque problemas NP-completos se reducen a él (3-SAT mediante ACTRI, o directamente desde otras variantes numéricas); de SUMA se reduce además a PARTICIÓN y a MOCHILA.

Ejercicio 5. Complejidad — *Definir EXP y su relación con PESPACIO y P.*
- `EXP = ⋃_{j>0} TIEMPO(2^{nʲ})` (tiempo exponencial determinista).
- Relaciones: `P ⊆ PESPACIO ⊆ EXP`. Además `P ⊊ EXP` (jerarquía de tiempo). `PESPACIO ⊆ EXP` porque una MT con espacio polinómico `p(n)` tiene un número de configuraciones acotado por `2^{O(p(n))}`; recorrerlas (o detectar ciclo) cuesta tiempo exponencial. No se sabe si `PESPACIO ⊊ EXP` es estricta.

Ejercicio 6. Reducciones (a elegir) — *Reducción Turing de FSAT a SAT, o de FHAMILTONIANO a HAMILTONIANO.*
- FSAT a SAT: con un oráculo para SAT (decisión), se construye una asignación satisfactoria. Se comprueba primero que la fórmula es satisfacible; luego, variable a variable, se fija `xi=V` y se pregunta al oráculo por la fórmula resultante; si sigue siendo satisfacible se mantiene, si no se fija `xi=F`. Tras `n` llamadas se obtiene una asignación que satisface la fórmula. Es una reducción Turing (varias llamadas al oráculo, con lógica adicional).
- FHAMILTONIANO a HAMILTONIANO: con un oráculo de decisión, se prueban aristas: se elimina una arista y se pregunta si el grafo conserva circuito hamiltoniano; si sí, se descarta; si no, la arista es necesaria y se conserva. Al final quedan exactamente las aristas del circuito.

---

### 7 de julio de 2025

Ejercicio 1. Decidibilidad

1. *¿Existe una entrada `u` tal que `M` cicla con `u`?*
   - Tipo: existencial sobre el comportamiento de no parada.
   - Clasificación: NO SEMIDECIDIBLE.
   - Desarrollo: "ciclar con `u`" es no detenerse, propiedad co-r.e. (no r.e.) para una entrada fija. "Existe `u` que cicla" combina un cuantificador existencial con un predicado no r.e., y no es r.e. Confirmar que una `u` concreta cicla no es semidecidible; tampoco lo es la existencia. Se reduce el complementario del problema de la parada.

2. *Dadas `M1` y `M2`, ¿para toda `u`, si `M1` cicla entonces `M2` también cicla?*
   - Tipo: condición universal con predicados de no parada.
   - Clasificación: NO SEMIDECIDIBLE.
   - Desarrollo: el "para toda `u`" junto con "ciclar" (no r.e.) impide la semidecidibilidad. No hay forma de confirmar en tiempo finito que la implicación se cumple para todas las entradas, ya que "M1 cicla" no es confirmable. Se reduce un problema no r.e. (tipo C-UNIVERSAL/no parada).

3. *MT `M` sin ningún movimiento a la izquierda y palabra `u`: ¿`M` acepta `u`?*
   - Tipo: aceptación sobre entrada fija con una restricción estructural (sin movimientos a la izquierda).
   - Clasificación: DECIDIBLE.
   - Desarrollo: sin movimientos a la izquierda, el cabezal solo avanza (o se mantiene) y nunca revisita una casilla escrita. Al pasar la entrada `u`, lee blancos; la conducta en la zona de blancos depende únicamente del estado, con un número finito de posibilidades. Se simula: si acepta, SÍ; si se detiene sin aceptar, NO; si repite un par (estado, símbolo leído) en blancos sin avanzar hacia la aceptación, se concluye que no aceptará, NO. El proceso termina en un número acotado de pasos.

4. *¿Para ninguna entrada `M` se mueve a la izquierda en sus 5 primeros movimientos?*
   - Tipo: propiedad universal sobre las entradas, pero limitada a los 5 primeros pasos.
   - Clasificación: DECIDIBLE.
   - Desarrollo: en 5 movimientos el cabezal solo puede leer las primeras casillas de la entrada; el comportamiento durante esos pasos depende solo de un prefijo de longitud ≤5. Hay un número finito de prefijos de longitud ≤5 sobre `{0,1}`. Se simulan los 5 primeros pasos para cada prefijo y se comprueba si en algún caso hay un movimiento a la izquierda. Finito, luego decidible.

Ejercicio 2. Church-Turing — *Programa con variables numéricas frente a variables con palabras.*
- Un programa con variables numéricas usa naturales (`A←A+1`, `A←A−1`, `IF A≠0 GOTO L`). Un programa con variables que contienen palabras opera sobre cadenas (`A←aA`, `A←A−`, comprobaciones de símbolo).
- Equivalencia: mediante la biyección `N: Σ* → ℕ` (orden lexicográfico), cada natural se corresponde con una palabra. Incrementar un natural equivale a calcular la palabra siguiente, y decrementar, la anterior. Por ello cualquier cómputo de un modelo se reproduce en el otro; son equivalentes en potencia (aunque no paso a paso).

Ejercicio 3. Verdadero/Falso

1. *El PCP sobre el alfabeto `{1}` es semidecidible pero no decidible.* FALSO. Con un solo símbolo, el PCP es decidible (se reduce a una condición aritmética sobre longitudes).
2. *Si una MT tiene una sola cinta, su complejidad en espacio es al menos `O(n)`.* FALSO. Si la cinta de entrada no se sobrescribe (o si hay una cinta de trabajo separada), el espacio puede ser sublineal, por ejemplo logarítmico.
3. *Los problemas FNPT se resuelven en tiempo polinómico determinista.* FALSO. La solución existe siempre (totales), pero encontrarla puede no ser polinómico (por ejemplo, la factorización).
4. *Caracterización de coNP: una MT no determinista que, si la respuesta es "NO", rechaza en al menos un cálculo, y si es "SÍ", acepta en todos.* VERDADERO. Es la definición de coNP por ramas universales (aceptación si y solo si todas las ramas aceptan).

Ejercicio 4. NP-completitud — *Cláusulas Horn: enunciado y complejidad.*
- Enunciado: una cláusula Horn es una disyunción con a lo sumo un literal positivo (equivalente a una implicación `a1 ∧ … ∧ ak → b`). Horn-SAT pregunta si un conjunto de cláusulas Horn es satisfacible.
- Complejidad: polinómico. Algoritmo de propagación unitaria: se ponen a verdadero los literales forzados por cláusulas unitarias positivas y se propagan; si se deduce una contradicción (una cláusula sin literal positivo cuyos antecedentes son todos verdaderos), es insatisfacible; en caso contrario, la asignación construida la satisface. Pertenece a P.

Ejercicio 5. Máquinas de Turing — *MT no deterministas frente a deterministas: ventajas y ejemplo.*
- Una MT no determinista puede tener varias transiciones posibles por configuración; acepta si existe algún camino de cómputo que acepte. Es equivalente en potencia a la determinista (toda MTND se simula con una MTD explorando su árbol de cómputo), aunque con coste temporal potencialmente exponencial.
- Ventaja: simplifica el diseño cuando basta "adivinar" un testigo y verificarlo. Ejemplo: para reconocer `L = {uu}` o palabras compuestas, la MTND adivina el punto de corte (o el factor) y solo verifica; la versión determinista debe probar todas las posibilidades.

Ejercicio 6. Optimización — *Mochila en versión de optimización: complejidad.*
- Enunciado: dados objetos con peso y valor y una capacidad `W`, maximizar el valor total sin superar `W`.
- Complejidad: NP-difícil (su versión decisión es NP-completa). Admite un algoritmo de programación dinámica pseudopolinómico `O(n·W)` (polinómico en el valor de `W`, no en su longitud). Admite un esquema de aproximación totalmente polinómico (FPTAS), por lo que pertenece a la mejor clase de aproximabilidad.

---
---

# PARTE 3 — Síntesis final

## Tabla de referencia rápida del Ejercicio 1

| Si el enunciado indica… | Respuesta inmediata | Justificación |
|------------------------|---------------------|---------------|
| Cota de PASOS (≤N pasos) o de ESPACIO (≤c casillas), aun con entrada acotada | DECIDIBLE | Simulación acotada / configuraciones finitas |
| Solo cota de LONGITUD de entrada, sin cota de pasos, y condición "aceptar" | SEMIDECIDIBLE, no decidible | Aceptar es r.e.; conjunción finita de r.e. es r.e. |
| "¿es subcadena de ⟨M⟩?", número de estados | DECIDIBLE | Propiedad sintáctica de la codificación |
| Propiedad no trivial de `L(M)`: palíndromo, regular, finito, "acepta 011" | NO DECIDIBLE | Rice |
| "¿Existe palabra…?", "¿acepta alguna…?" | SEMIDECIDIBLE (no decidible por Rice) | Búsqueda en anchura / MT no determinista |
| "¿Para TODA palabra…?", "¿acepta todas?", "L1⊆L2", "L(M)=∅" | NO SEMIDECIDIBLE | Reducir EMPTY / C-UNIVERSAL / DIAGONAL |
| "¿M NO acepta w?" | NO SEMIDECIDIBLE | Es C-UNIVERSAL |
| "¿visita el estado q (cualquier entrada)?", "¿cicla para alguna entrada?", "¿no se detiene nunca?" | NO DECIDIBLE / NO SEMIDECIDIBLE | Reducción desde PARADA / su complementario |
| "PCP" | Indecidible (\|A\|≥2) / Decidible (A={1}) | Caso particular del alfabeto |
| "GIC ambigua" | Indecidible. "GIC genera u" | Decidible (CYK) |

## Errores frecuentes que reducen la calificación
1. Aplicar Rice a propiedades de la máquina (pasos, casillas, estados, movimientos): Rice solo vale para propiedades no triviales de `L(M)`.
2. Confundir "cota de pasos" con "cota de longitud de entrada": con cota de pasos es decidible; sin ella, "acepta todas las palabras ≤K" es solo semidecidible.
3. Afirmar que `B` es NP-completo solo con `A∝B`: falta probar `B∈NP`.
4. Afirmar que la tesis de Church-Turing está demostrada.
5. Confundir "se sabe que" con "se conjetura": `L=PESPACIO` es falso (son distintas), `P=NP` permanece abierto.
6. Omitir la implicación recíproca en las reducciones.
7. Realizar búsqueda en profundidad en las pruebas de semidecidibilidad (debe ser en anchura / dovetailing).

## Formulaciones recomendadas para la justificación
- "Por el Teorema de Savitch, `NESPACIO(f)⊆ESPACIO(f²)`, luego `PESPACIO=NPESPACIO`."
- "Por el Teorema de la Jerarquía (de tiempo o de espacio), la inclusión es estricta (`P⊊EXP`, `L⊊PESPACIO`)."
- "Por el Teorema de Rice, toda propiedad no trivial de los lenguajes r.e. es indecidible."
- "Por el Teorema de Cook-Levin, SAT es NP-completo (codifica el cómputo de una MT no determinista como fórmula booleana)."
- "Por el Teorema de los complementarios, si `L` es r.e. no recursivo, `L̄` no es r.e."
- En toda reducción se enuncian los cuatro pasos: transformación, eficiencia, implicación directa e implicación recíproca.

---

Documento elaborado a partir de los 24 archivos `.md` del export NotebookLM (estructura del examen, enunciados 2021-2025, Manual de Decidibilidad, temas tr1-tr6, clases de complejidad, mapa de reducciones y puntuaciones). Cubre exclusivamente la parte de teoría (Ejercicios 1 a 6).
