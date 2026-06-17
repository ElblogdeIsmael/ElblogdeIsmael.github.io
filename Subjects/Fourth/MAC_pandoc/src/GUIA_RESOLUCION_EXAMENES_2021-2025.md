# 🎯 GUÍA DEFINITIVA DE RESOLUCIÓN — Exámenes MAC 2021–2025

> **Modelos Avanzados de Computación.** Guía orientada a sacar la **máxima nota en la parte de TEORÍA (Ejercicios 1–6)**.
> No incluye los problemas de prácticas / evaluación global (Ej 7-8 o 9-10), porque ya tienes las prácticas aprobadas.
>
> Cada respuesta sigue una **plantilla cerrada**: identificar el patrón → dar la clasificación/respuesta → justificarla con el teorema exacto. El profesor puntúa la **justificación**, no la intuición. Escribe siempre el "porqué".

---

## 📋 0. Estructura y puntuación del examen

El examen es **extremadamente predecible**. Casi siempre 6 preguntas de teoría que suman 10 puntos:

| Ej | Tema | Qué piden | Puntos 2024-25 | Puntos 2022-23 |
|----|------|-----------|----------------|----------------|
| **1** | T1-T2 Decidibilidad | Clasificar 4 problemas: decidible / semidecidible / no semidecidible | **2.4** | 2.0 |
| **2** | T2 Church-Turing | Simulación entre modelos o programa a bajo nivel | 1.3 | 2.0 |
| **3** | Varios | 4-5 afirmaciones **Verdadero/Falso razonadas** | **2.4** | 1.5 |
| **4** | T4 | SAT / NP-completitud / reducción concreta | 1.3 | 1.5 |
| **5** | T3 | Definir clases de complejidad y relaciones | 1.3 | 1.5 |
| **6** | T3-T4-T5-T6 | Problema específico (grafos, parejas, Red Feliz, mochila…) | 1.3 | 1.5 |

> **Regla de oro:** los Ejercicios 1 y 3 valen casi **5 puntos juntos** (la mitad del examen). Domínalos a la perfección.

---
---

# PARTE 1 — PLANTILLAS Y TEORÍA (cómo se resuelve cada tipo)

---

## 🧩 1. EJERCICIO 1 — Decidibilidad / Semidecidibilidad

### 1.1 Definiciones base (memoriza)

- **Recursivo (Decidible):** existe una MT que **siempre para** y dice SÍ/NO para cualquier entrada.
- **Recursivamente enumerable / r.e. (Semidecidible):** existe una MT que **para y acepta** si la respuesta es SÍ, pero puede **ciclar infinitamente** si es NO.
- **No semidecidible:** ni siquiera existe esa MT que acepte los casos SÍ.

**Teorema de los complementarios (cae muchísimo):**
1. Si `L` es recursivo → `L̄` (complementario) es recursivo.
2. Si `L` **y** `L̄` son ambos r.e. → `L` es **recursivo** (decidible).
3. Si `L` es r.e. pero **no** decidible → `L̄` **NO es semidecidible**.

**Teoría de reducciones (`P1 ∝ P2` = "P1 se reduce a P2", P2 es al menos tan difícil):**
- Si `P1` es indecidible → `P2` indecidible.
- Si `P1` **no** es semidecidible → `P2` **no** semidecidible.
- Si `P2` es semidecidible → `P1` **también** lo es.

### 1.2 EL ÁRBOL DE DECISIÓN (la pregunta que SIEMPRE debes hacerte primero)

> **¿La propiedad depende del LENGUAJE `L(M)` (qué palabras acepta) o del COMPORTAMIENTO de la máquina `M` (pasos, casillas, estados, movimientos)?**

```
┌─ ¿Hay un LÍMITE FINITO explícito? (≤N pasos, |w|≤100, ≤2|w| casillas, ≤5 estados)
│        └──> DECIDIBLE (simulación acotada). NO uses Rice.
│
├─ ¿Es propiedad del LENGUAJE L(M) y NO trivial? (acepta palíndromo, L regular, L vacío,
│   acepta 011, L = {todos}, acepta uⁱ...)
│        └──> NO DECIDIBLE por TEOREMA DE RICE.
│             Luego matiza si es semidecidible o no:
│             · "¿Existe una palabra...?"  → SEMIDECIDIBLE
│             · "¿Para TODA palabra...?" / "L1⊆L2" / "L(M)=∅" → NO SEMIDECIDIBLE
│
└─ ¿Es propiedad de la MÁQUINA M (sin límite finito)? (visita estado q, no para nunca,
    nunca se mueve a la izquierda en general...)
         └──> NO DECIDIBLE, pero NO por Rice → REDUCCIÓN desde PARADA / UNIVERSAL / DIAGONAL.
```

### 1.3 Las 4 plantillas de redacción (frases modelo para el 10)

**① Para demostrar DECIDIBLE (límite finito):**
> "Es decidible. Construyo una MT que simula `M` durante exactamente `N` pasos (o sobre todas las palabras de longitud ≤ N, que son un **conjunto finito**). Como el espacio de búsqueda es finito, la simulación **siempre termina** dando SÍ o NO."

**② Para demostrar NO DECIDIBLE — propiedad del lenguaje (Rice):**
> "Esta es una propiedad **no trivial de los lenguajes r.e.**, porque existe una MT que la cumple (p.ej. una que acepta `L={011}`) y otra que no (p.ej. `L=∅`). Por el **Teorema de Rice**, el problema es **indecidible**."

**③ Para demostrar SEMIDECIDIBLE ("¿existe…?"):**
> "Es semidecidible. Diseño una MT que hace **búsqueda en anchura (dovetailing)**: simula 1 paso de la 1ª palabra, luego 2 pasos de las 2 primeras, etc. Si existe la palabra buscada, en tiempo finito la encuentra y **acepta**; si no existe, cicla (lo cual cumple la definición de semidecidible)."
> *(Alternativa válida: "MT no determinista que adivina la palabra `w`, simula `M(w)` y acepta si `M` acepta".)*
> **Importante:** debe ser en **anchura**, NO en profundidad: en profundidad, si una palabra cicla, nunca probaría la siguiente.

**④ Para demostrar NO SEMIDECIDIBLE ("para TODA", "nunca", inclusión, vacío):**
> "No es semidecidible. Hago una **reducción** desde un problema conocido como no semidecidible (`C-UNIVERSAL`, `DIAGONAL` o `EMPTY`): dada una instancia de ese problema, construyo mi entrada de forma que la respuesta coincida."

### 1.4 Catálogo de PROBLEMAS BASE (apréndete su clasificación de memoria)

| Problema | Enunciado | Clasificación |
|----------|-----------|---------------|
| **UNIVERSAL** (Lu) | ¿`M` acepta `w`? | **Semidecidible, no decidible** |
| **C-UNIVERSAL** | ¿`M` **NO** acepta `w`? | **NO semidecidible** |
| **PARADA** | ¿`M` para con `w`? | Semidecidible, no decidible (indecidible) |
| **DIAGONAL** (Ld) | ¿`M` **no** acepta su propio código `⟨M⟩`? | **NO semidecidible** |
| **C-DIAGONAL** | ¿`M` **sí** acepta `⟨M⟩`? | Semidecidible |
| **EMPTY / VACÍO** (Le) | ¿`L(M)=∅`? | **NO semidecidible** |
| **C-VACÍO** (Lne) | ¿`L(M)≠∅`? (acepta ≥1 palabra) | Semidecidible |
| **PCP (Post)** | Correspondencias de Post | **Indecidible si |alfabeto|≥2**; ⚠️ **DECIDIBLE si alfabeto = {1}** |
| **GIC ambigua** | ¿una gramática indep. del contexto es ambigua? | **Indecidible** |
| **GIC genera w / APila acepta w** | — | **Decidible** (algoritmo CYK) |

**Reducción modelo (la que más cae): `L(M1) ⊆ L(M2)` NO es semidecidible.**
> Reduzco **EMPTY** a él. Dada `M` (instancia de EMPTY), construyo el par `(M, R)` con `R` una MT que rechaza todo (`L(R)=∅`). Entonces `L(M)⊆L(R)` ⟺ `L(M)=∅`. Como EMPTY (no semidecidible) se reduce a la inclusión, esta tampoco es semidecidible.

---

## 🔁 2. EJERCICIO 2 — Tesis de Church-Turing y simulaciones

> No hay que escribir todo el código: piden la **idea básica** y **cómo se organiza la información**. Detalla solo *una* transición.

### 2.1 Simulaciones entre modelos (las 3 estrella)

**a) Programa con variables → Programa Post-Turing (el que más cae):**
- *Organización:* las variables `X1,…,Xm,Z1,…,Zk,Y` se colocan en la cinta separadas por el blanco `#`: `#V1#V2#…#Vn#`.
- *Instrucciones:* añadir símbolo (`Vj ← ai Vj`) o borrar el último (`Vj ← Vj−`) se simulan con macros Post-Turing que mueven el cabezal hasta esa variable, **desplazan el bloque de la derecha** para hacer/tapar hueco y escriben/borran.

**b) Programa Post-Turing → MT:**
- *Organización:* mismo alfabeto. Por cada instrucción `Ii` del programa hay un estado `qi`, más un estado final `qf`.
- *Traducción 1 a 1:* `PRINT a` → `δ(qi,b)=(qi+1, a, S)`; `RIGHT` → `δ(qi,b)=(qi+1, b, D)`; `IF ak GOTO L` → desde `qi` va a `qL` si lee `ak`, y a `qi+1` si lee otro símbolo.

**c) MT → Programa con variables:**
- *Organización:* 3 variables: `X` = lo que hay a la izquierda del cabezal, `Z` = símbolo leído, `Y` = lo de la derecha.
- *Transición* `δ(qi,aj)=(qm,ak,D)`: escribe `ak` en `X` (pasa a la izquierda), vacía `Z`, lee el primer símbolo de `Y` y lo pasa a `Z`, y salta a la etiqueta del estado `qm`.

### 2.2 Sobrecarga de las simulaciones de cintas (te lo preguntan en V/F)

| Simulación | Coste |
|------------|-------|
| MT **multicinta → 1 cinta** | tiempo pasa a **O(t²)** (cuadrático) |
| Cinta **doble infinita → semiinfinita** (por la derecha) | **mismo orden O(t)** usando **2 pistas** que pliegan la cinta |
| MT **multipista → 1 cinta** | **mismo número de pasos** (la pista es una sola cinta con alfabeto ampliado) |

### 2.3 Variables numéricas ↔ variables de palabras
- Numéricas: variables `Xi,Zi,Y`; instrucciones `A←A+1`, `A←A−1`, `IF A≠0 GOTO L`.
- **Clave del 10:** son **equivalentes** porque hay una **biyección** entre las palabras de un alfabeto y los naturales (`N(w)=n`). Sumar `+1` en el modelo numérico = buscar la **palabra siguiente en orden lexicográfico** en el modelo de palabras.

### 2.4 Tesis de Church-Turing (trampa típica)
- Enunciado: *"Toda función efectivamente calculable por un proceso mecánico bien definido puede calcularla una Máquina de Turing."*
- ⚠️ *"Está demostrado que la tesis de Church-Turing es cierta"* → **FALSO**. Es una **tesis**, no un teorema: "efectivamente calculable" no es un término matemático cerrado. Es universalmente aceptada (todos los modelos resultan equivalentes a la MT) pero **no demostrable**.
- ⚠️ *"La computación cuántica pone en duda la tesis de Church-Turing"* → **FALSO** (afecta a la eficiencia, no a lo que es computable).

### 2.5 Macros / algoritmos clásicos
- Macros a expandir: `U←V` (copiar, usando variable auxiliar para invertir y reinvertir), `V←−V` (borrar el **primer** símbolo).
- Algoritmos: suma de cadenas `Z(u)=Z(u1)+Z(u2)`, número siguiente `Z(u)=n+1`, `V←V+1` sobre `{a,b}`, ¿`X1` múltiplo de `X2`?

---

## ✅ 3. EJERCICIO 3 — Verdadero/Falso razonado (BANCO DE RESPUESTAS)

> Regla: **justifica SIEMPRE**, aunque no lo pida. Si es FALSO, da un **contraejemplo** o cita el teorema que lo rompe.

| Afirmación | V/F | Justificación |
|------------|-----|---------------|
| `PESPACIO = NPESPACIO` | **V** | **Teorema de Savitch**: `NESPACIO(f) ⊆ ESPACIO(f²)`. |
| La clase L es distinta de PESPACIO | **V** | `L ⊊ PESPACIO` por el **Teorema de la Jerarquía de Espacio** (inclusión estricta demostrada). |
| Se sabe que `L = PESPACIO` | **F** | Justo al revés: se sabe que son **distintas**. |
| Si un problema está en NL, se resuelve en tiempo polinómico determinista | **V** | `NL ⊆ P` (cadena de inclusiones). |
| Cualquier problema NP se resuelve en espacio polinómico y tiempo exponencial | **V** | `NP ⊆ PESPACIO` y `NP ⊆ EXP`. |
| Si `P=NP`, el Viajante de Comercio se resuelve en tiempo polinómico determinista | **V** | TSP(decisión) es NP-completo; si `P=NP` toda NP cae en P. |
| Si `NL = NP`, entonces `NP = coNP` | **V** | `NL` es cerrada bajo complementario (Immerman-Szelepcsényi); si `NL=NP` se hereda. |
| Una MT universal puede calcular lo que cualquier otra MT calcula | **V** | Definición de máquina universal. |
| Se sabe que el complementario de SAT no tiene algoritmo polinómico | **F** | No está demostrado (equivaldría a `P≠NP`/`P≠coNP`). |
| Si `A` es NP-completo y `A ∝ B`, entonces `B` es NP-completo | **F** | Falta que `B ∈ NP`. La reducción solo prueba que `B` es **NP-difícil**. |
| Un problema NP-difícil es siempre NP-completo | **F** | NP-completo = NP-difícil **∩ está en NP**; un NP-difícil puede no estar en NP. |
| SAT para cláusulas Horn es NP-completo | **F** | Horn-SAT es **polinómico** (propagación unitaria). |
| Si tiene algoritmo δ-aproximado con δ=2, también con δ=3 | **V** | δ mayor = cota más laxa; el mismo algoritmo sirve. |
| Si el umbral de aproximación es 2, entonces tiene un algoritmo δ-aprox con δ=2 | **F** (cuidado) | El umbral es el **ínfimo**; puede no alcanzarse con igualdad. |
| Si `P1 ∝ P2 ∝ P3` y `P3` no semidecidible → `P1` tampoco | **F** | La reducción va al revés: que `P3` sea malo no fuerza a `P1`. |
| Si `P1 ∝ P2 ∝ P3` y `P1` es semidecidible → `P3` lo es | **F** | Si `P1∝P2` y `P2` semidecidible entonces `P1` lo es; no al revés. |
| Si `P1 ∝ P2` y `P2` semidecidible → `P1` semidecidible | **V** | Propiedad directa de la reducción. |
| Composición de dos algoritmos espacio-logarítmicos es espacio-logarítmico | **V** | No se guarda la salida intermedia: cuando el 2º pide un bit, se relanza el 1º (clave del Teorema de composición en L). |
| FNPT/TFNP se resuelven en tiempo polinómico determinista | **F** | La **solución existe siempre**, pero encontrarla puede ser difícil (p.ej. factorización). |
| Descomponer en factores primos ∈ FNPT pero sin algoritmo polinómico conocido | **V** | Ejemplo canónico de TFNP. |
| `P = EXP` | **F** | `P ⊊ EXP` (estricta) por el **Teorema de la Jerarquía de Tiempo**. |
| ¿Problema de decisión **no trivial** con espacio `O(1)`? | depende | Un problema no trivial sobre la entrada necesita al menos recorrerla → en general **no** `O(1)` significativo (lenguajes regulares). |
| Está demostrada la tesis de Church-Turing | **F** | Es una tesis, no demostrable. |
| Nuestro conocimiento actual es compatible con `P=NP` y `NP=coNP` | **V** | Ninguna de las dos está refutada. |
| PCP sobre `{1}` es semidecidible pero no decidible | **F** | Con alfabeto de **1 símbolo** PCP es **decidible**. |
| Una MT de una sola cinta tiene espacio al menos `O(n)` | **F** (matiz) | Si la cinta de **entrada** no se sobrescribe no cuenta; con cinta de trabajo aparte puede ser sublineal. ⚠️ revisa el enunciado exacto. |

---

## 🏛️ 4. CLASES DE COMPLEJIDAD (Ejercicio 5 típico)

### 4.1 La gran cadena (escríbela de memoria)
```
L ⊆ NL ⊆ P ⊆ NP ⊆ PESPACIO = NPESPACIO ⊊ EXP
```
- Inclusiones: ninguna se sabe estricta **salvo** `NL ⊊ PESPACIO`, `L ⊊ PESPACIO`, `P ⊊ EXP` (por teoremas de jerarquía).
- `PESPACIO = NPESPACIO` por **Savitch**.

### 4.2 Definiciones formales (para máxima nota, usa unión de tiempos/espacios)
- **P** `= ⋃_{j>0} TIEMPO(nʲ)` — MT determinista, tiempo polinómico.
- **NP** — MT **no determinista**, tiempo polinómico. *Alt.:* existe **certificado** verificable en tiempo polinómico por un **verificador** determinista.
- **coNP** — el complementario está en NP; acepta SÍ solo si **todas** las ramas aceptan.
- **L / NL** — espacio **logarítmico** determinista / no determinista.
- **PESPACIO / NPESPACIO** — espacio polinómico det. / no det. (iguales por Savitch).
- **EXP** `= ⋃ TIEMPO(2^{nʲ})`.

### 4.3 Medida de complejidad — el detalle clave
- La complejidad se mide en **longitud de la representación** `n = log(x)`, NO en el valor `x`. Por eso "primo por fuerza bruta" es **exponencial** en `n`.
- **Espacio:** NO se cuentan la cinta de **entrada** (si no se sobrescribe) ni la de **salida** (si se escribe de izquierda a derecha sin volver).

### 4.4 Clases de función y aproximación
- **FNP / FP / TFNP(FNPT):** búsqueda; FP = se calcula la solución en tiempo polinómico; TFNP = la solución **siempre existe** (factorización, Red Feliz).
- **NPO/PO/APX/PTAS/FPTAS:** optimización. APX = admite δ-aprox constante; PTAS = cualquier precisión en tiempo poli en `n`; FPTAS = poli en `n` **y** en `1/(δ−1)` (la mochila está en FPTAS).
- **DP** = `L1 ∩ L2` con `L1∈NP`, `L2∈coNP` (TSP exacto, SAT-UNSAT).

---

## ⚙️ 5. REDUCCIONES NP-completas (Ejercicios 4 y 6)

### 5.1 Los 4 PASOS OBLIGATORIOS de toda reducción `P1 ∝ P2`
1. **Algoritmo de transformación** de instancia de `P1` a instancia de `P2`.
2. **Eficiencia**: que sea **espacio logarítmico** (o polinómica) — esto da rigor.
3. **⇒** SÍ en origen ⟹ SÍ en destino.
4. **⇐** SÍ en destino ⟹ SÍ en origen (la vuelta, la que más se olvida).

> Para demostrar que `B` es **NP-completo**: (1) `B ∈ NP` (su certificado se verifica en tiempo polinómico) **y** (2) reducir un NP-completo conocido `A ∝ B`.

### 5.2 El MAPA de reducciones (memoriza las dos cadenas)
```
Teorema de Cook-Levin:  SAT es el 1er NP-completo
SAT → 3-SAT → Cubrimiento por Vértices (VC) → Circuito Hamiltoniano (CH) → Viajante (TSP)
3-SAT → Acoplamiento por Tripletas (ACTRI) → SUMA → PARTICIÓN → MOCHILA
Clique ≡ Conjunto Independiente ≡ Cubrimiento por Vértices   (los tres equivalentes)
```

### 5.3 Reducciones concretas que han caído
- **3-SAT → VC:** triángulo (gadget) por cada cláusula + arista por cada variable/literal; `K = n + 2m`.
- **Partición → Mochila:** truco comodín → fija pesos = valores y la capacidad/umbral a **la mitad de la suma total**.
- **SUMA → Partición:** añade dos elementos de relleno que fuerzan el reparto exacto a la mitad.
- **VC → Circuito Hamiltoniano:** cada **arista** se transforma en un **gadget** (dispositivo) que solo se puede recorrer de forma consistente con la selección de vértices.
- **CH → TSP:** matriz de distancias con peso **1** si hay arista y **2** si no; existe circuito ≤ n ⟺ hay hamiltoniano.
- **Conjunto Independiente ↔ VC:** `S` es independiente de tamaño `k` ⟺ `V∖S` es cubrimiento de tamaño `n−k`.

### 5.4 Zoológico de SAT (clasifícalos al instante)
| Variante | Clase | Por qué |
|----------|-------|---------|
| **SAT** | NP-completo | Cook-Levin (el primero) |
| **3-SAT** | NP-completo | reducción local desde SAT |
| **2-SAT** | **P (y NL)** | grafo de implicaciones; camino `x→¬x` y `¬x→x` = inconsistente |
| **Horn-SAT** | **P** | propagación unitaria |
| **MAX2SAT** | NP-completo | maximizar nº de cláusulas |
| **NAESAT** | NP-completo | Not-All-Equal |

### 5.5 Reducibilidad Turing vs Karp (log) — pregunta teórica
- **Karp / log (`∝`):** **una sola** llamada, mapea la respuesta directamente. Es **más fuerte** (más restrictiva).
- **Turing (`∝T`):** tiempo polinómico con **múltiples** llamadas a un **oráculo** y lógica adicional. Más débil/permisiva.
- **NP-difícil:** un NP-completo se reduce **Turing** a él; puede no estar en NP. Si se resuelve en poli → `P=NP`.
- Ejemplo **FSAT → SAT** (Turing): fija una variable a `true`, llama al oráculo SAT; si sigue consistente la mantienes, si no la pones a `false`; repites variable a variable hasta construir la asignación.

---

## 🌐 6. PROBLEMAS CLÁSICOS (Ejercicio 6 típico)

| Problema | Clase | Idea clave |
|----------|-------|-----------|
| **Existencia/búsqueda de caminos en grafos dirigidos** | **NL** | búsqueda no determinista adivinando el camino, guardando solo el nodo actual + contador (espacio log). En determinista: ∈ P. |
| **Parejas (emparejamiento perfecto)** | **P** | se reduce a Flujo Máximo (Ford-Fulkerson). |
| **Flujo Máximo** | **P** | Ford-Fulkerson, `O(n⁵)` con camino más corto. |
| **Red Feliz** | **TFNP** (búsqueda local, PLS) | algoritmo: mientras haya un nodo "infeliz", cambiarle el estado; **siempre converge** → la solución existe. |
| **Isomorfismo de grafos** | **GI** (ni P ni NP-completo conocido) | la gran excepción: ∈ NP, sin demostrar NP-completo ni P. |
| **PRIMO(n)** | **NP** (de hecho P) | certificado de **Pratt**: incluye recursivamente la primalidad de los factores de `n−1`; se verifica en tiempo polinómico. |
| **Parejas / ACTRI (tripletas)** | Parejas ∈ P, **ACTRI NP-completo** | ACTRI = versión 3-dimensional, ya NP-completa. |
| **Mochila (optimización)** | NP-completo, **FPTAS** | programación dinámica pseudopolinómica `O(n·B)`; admite esquema FPTAS. |
| **Umbral del Viajante** | euclídeo/desig. triangular ∈ **PTAS, δ≤2**; general **ni APX** (salvo P=NP) | — |

---
---

# PARTE 2 — RESOLUCIÓN EXAMEN POR EXAMEN (2021 → 2025)

> Formato de cada apartado: **enunciado → RESPUESTA → justificación**. Las justificaciones aplican las plantillas de la Parte 1.

---

## 📅 2021

### 22 de junio de 2021

**Ej 1. Decidibilidad**
1. *Dada MT `M` y palabra `w`, ¿`M` NO acepta `w`?* → **NO SEMIDECIDIBLE.** Es exactamente `C-UNIVERSAL` (complementario del Universal). El Universal es semidecidible-no-decidible, luego su complementario no es semidecidible (Teorema de los complementarios).
2. *Dada GIC, ¿es ambigua?* → **NO DECIDIBLE (indecidible).** La ambigüedad de GIC es un problema clásico indecidible.
3. *Dada GIC `G` y palabra `u`, ¿`G` genera `u`?* → **DECIDIBLE.** Algoritmo **CYK**: comprobación finita de derivaciones.
4. *¿Existe palabra de longitud ≤100 aceptada en <1000 pasos?* → **DECIDIBLE.** Doble límite finito: hay un nº finito de palabras de longitud ≤100; simulo cada una <1000 pasos. Conjunto finito → termina siempre.

**Ej 2. V/F**
1. *Todo NP en espacio polinómico y tiempo exponencial* → **V** (`NP⊆PESPACIO`, `NP⊆EXP`).
2. *MT universal calcula lo que cualquier MT* → **V** (definición).
3. *El complementario de SAT no tiene algoritmo polinómico (se sabe)* → **F** (no demostrado).
4. *Si `A` NP-completo y `A∝B`, `B` NP-completo* → **F** (falta `B∈NP`; solo NP-difícil).
5. *Si `P=NP`, el Viajante se resuelve en poli determinista* → **V**.

**Ej 3. NP-completitud** — *Reducción `SUMA(A,s,B) ∝ PARTICION(A',s')`.* → 4 pasos: a partir del conjunto y el objetivo `B`, añade elementos de relleno que obliguen a que una mitad sume `B`; transformación log; ⇒ y ⇐ por construcción de la mitad.

**Ej 4. Grafos** — *Complejidad en espacio determinista de caminos en grafos.* → Pertenece a **NL** (no determinista log); en determinista se ubica en su clase log/poli. Algoritmo: guardar solo el nodo actual + contador de pasos (espacio log) y avanzar.

**Ej 5. Simulaciones** — *MT cinta ilimitada en ambas direcciones → cinta ilimitada solo por la derecha.* → Se **pliega** la cinta en **2 pistas** (una para `x≥0`, otra para `x<0`) con tope a la izquierda; **mismo orden de complejidad** `O(t)`.

---

### 12 de julio de 2021

**Ej 1. Decidibilidad**
1. *¿El nº de estados de `M` ≤ `|w|`?* → **DECIDIBLE.** Propiedad **interna** de la máquina: cuentas estados de `⟨M⟩` y comparas con `|w|`. Comprobación finita directa.
2. *¿`M` acepta al menos 3 palabras distintas?* → **SEMIDECIDIBLE (no decidible).** Es "existe…": búsqueda en anchura hasta encontrar 3 aceptadas; no decidible por Rice (propiedad no trivial de `L(M)`).
3. *¿`M` acepta exactamente 3 palabras?* → **NO SEMIDECIDIBLE.** "Exactamente" exige además comprobar que **no** acepta ninguna más (un "para toda el resto"): reducción desde un problema no semidecidible.
4. *¿`M` acepta `w` sin usar más de `2|w|` casillas?* → **DECIDIBLE.** Espacio acotado a `2|w|` ⟹ nº finito de configuraciones; si se repite una, cicla (rechaza). Simulación acotada.

**Ej 2. V/F**
1. *`L ≠ PESPACIO`* → **V** (`L⊊PESPACIO`, jerarquía de espacio).
2. *Horn-SAT es NP-completo* → **F** (es polinómico).
3. *Si `P1∝P2` y `P2` semidecidible → `P1` semidecidible* → **V**.
4. *Si está en NL → tiempo polinómico determinista* → **V** (`NL⊆P`).
5. *La computación cuántica pone en duda Church-Turing* → **F** (afecta eficiencia, no computabilidad).

**Ej 3. Clase NP** — *Define NP con certificados y verificadores + ejemplo.* → NP = problemas con un **certificado** de tamaño polinómico verificable por una MT determinista en tiempo polinómico. Ejemplo **SAT**: certificado = asignación de verdad; verificador = evaluar todas las cláusulas (poli).

**Ej 4. Decidibilidad (P y C-P)** — *Relaciones entre `P(x)` y su contrario.* → Teorema de complementarios: si `P` decidible, `C-P` decidible; si `P` y `C-P` ambos semidecidibles, `P` decidible; si `P` semidecidible-no-decidible, `C-P` **no** semidecidible.

**Ej 5. Simulaciones** — *MT multicinta → 1 cinta + relación temporal.* → 1 cinta con **multipista** (una pista por cinta + pista de cabezales); cada paso de la multicinta requiere recorrer toda la zona usada ⟹ **tiempo `O(t²)`**.

---

## 📅 2022

### 27 de junio de 2022

**Ej 1. Decidibilidad**
1. *¿`u` es subcadena de `⟨M⟩`?* → **DECIDIBLE.** Solo lees el string del código y buscas `u`. Comprobación finita trivial.
2. *¿`M` NO acepta la palabra `011`?* → **NO SEMIDECIDIBLE.** Es `C-UNIVERSAL` con `w=011` (¿`M` no acepta `w`?).
3. *¿`L(M)` = conjunto de palíndromos sobre `{0,1}`?* → **NO DECIDIBLE (Rice)**, y además **no semidecidible** (igualdad exacta de lenguajes ⟹ reducción desde EMPTY/su complementario).
4. *¿`M` acepta alguna palabra de la forma `0^{2n}`?* → **SEMIDECIDIBLE (no decidible).** "Existe…": búsqueda en anchura sobre `0², 0⁴, …`; no decidible por Rice.

**Ej 2. V/F**
1. *Si MT escribe en su 1ª cinta, su espacio es `O(n)`* → **F** (depende de cuánto escriba; no necesariamente lineal).
2. *Umbral aprox = 2 ⟹ algoritmo δ-aprox con δ=2* → **F** (el umbral es ínfimo, no garantiza igualdad alcanzable).
3. *Composición de dos algoritmos espacio-log es log* → **V** (relanzar el primero bajo demanda; no se guarda la salida intermedia).
4. *Si `P1∝P2∝P3` y `P1` semidecidible → `P3` lo es* → **F** (la reducción no propaga semidecidibilidad "hacia abajo").
5. *Si `NL=NP` → `NP=coNP`* → **V** (NL cerrada bajo complementario).

**Ej 3. NP-completitud** — *Reducción `3-SAT(V,C) ∝ VC(G,K)` + ejemplo.* → Gadget triángulo por cláusula + arista por variable (literal/negación); `K = |V| + 2|C|`; ejemplo con 2-3 cláusulas.

**Ej 4. Existencia de caminos** — *Complejidad en espacio determinista.* → **NL** (no det. log); justificación con el algoritmo de nodo-actual + contador.

**Ej 5. Church-Turing** — *Ideas básicas: simular MT con programa con variables; detalla `δ(qi,aj)=(qm,ak,D)`.* → 3 variables `X,Z,Y`; ver §2.1c.

**Ej 6. Reducciones** — *Diferencias Turing vs log; ¿cuál más fuerte?* → log = 1 llamada, mapea respuesta, **más fuerte**; Turing = oráculo, múltiples llamadas, más débil.

---

### 15 de julio de 2022 (Extraordinario)

**Ej 1. Decidibilidad**
1. *¿`M` acepta `u` usando `n` o **más** casillas (`n` en binario)?* → **SEMIDECIDIBLE.** "Existe un cálculo que usa ≥n casillas y acepta": se busca simulando; aceptar al detectarlo. No acotado superiormente ⟹ no decidible.
2. *¿`M` acepta `u` usando `n` o **menos** casillas?* → **DECIDIBLE.** Espacio acotado a `n` ⟹ configuraciones finitas; simulación acotada (detecta ciclos).
3. *¿Existe un palíndromo NO aceptado por `M`?* → **NO SEMIDECIDIBLE.** Combina "existe palabra que NO acepta" (complementario) ⟹ reducción desde C-UNIVERSAL/EMPTY.
4. *¿`M` nunca se mueve a la izquierda al leer `u`?* → **DECIDIBLE** (matiz de un solo `u`): si no se mueve a la izquierda actúa como autómata que solo avanza; el cálculo sobre `u` se acota y se simula. *(Si fuera "para toda entrada" sería indecidible.)*

**Ej 2. V/F**
1. *MT multicinta se simula con multipista en mismo tiempo* → **V** (multipista mantiene los pasos).
2. *Si se resuelve en `f(n)`, se resuelve en `0.25f(n)+n`* → **V** (aceleración lineal / compresión de cinta — speed-up theorem).
3. *Si SAT∈P entonces FSAT∈P* → **V** (autorreducibilidad: construir la asignación con llamadas a SAT).
4. *Si `P1∝P2` log y `P1` NP-completo → `P2` NP-completo* → **F** (falta `P2∈NP`; solo NP-difícil).
5. *Si MT se mueve a la izquierda en la cinta de salida, su espacio es ≥ `O(n)`* → **V** (al volver atrás en salida, esa cinta deja de ser "solo escritura" y cuenta como espacio).

**Ej 3. Complejidad** — *Problema de las parejas, ¿complejidad?* → **P** (reducción a Flujo Máximo, Ford-Fulkerson).

**Ej 4. Decidibilidad** — *PCP: enunciado y decidibilidad.* → Dadas listas de palabras, ¿hay secuencia de índices con misma concatenación arriba/abajo? **Indecidible (|alfabeto|≥2)**; semidecidible (búsqueda en anchura de secuencias). Con alfabeto `{1}` es decidible.

**Ej 5. Church-Turing** — *Programa con variables para `V←V+1` en `{a,b}`.* → Interpreta `{a,b}` como dígitos binarios; suma 1 con acarreo recorriendo la palabra (equivale a "palabra siguiente" lexicográfica).

**Ej 6. Problemas** — *Red Feliz, ¿clase?* → **TFNP** (función total): siempre existe equilibrio; algoritmo = cambiar nodos infelices iterativamente hasta converger.

---

## 📅 2023

### 12 de junio de 2023

**Ej 1. Decidibilidad**
1. *PCP con alfabeto `A={1}`* → **DECIDIBLE** (la trampa clásica: 1 solo símbolo lo hace decidible).
2. *¿`L(M)` tiene complejidad polinómica?* → **NO DECIDIBLE (Rice)**, propiedad no trivial del lenguaje/comportamiento; no semidecidible (cuantifica sobre todas las entradas).
3. *Dado programa Post-Turing, ¿NO acepta la palabra vacía?* → **NO SEMIDECIDIBLE.** "No acepta `λ`" = C-UNIVERSAL para `w=λ`.
4. *¿`⟨M1⟩` es subcadena de `⟨M2⟩`?* → **DECIDIBLE.** Comparas dos strings finitos.

**Ej 2. V/F**
1. *Si δ=2 ⟹ δ=3* → **V** (cota más laxa).
2. *Caracterización de coNP (siempre acepta para SÍ; ≥1 rama rechaza para NO)* → **V** (definición de coNP por ramas universales).
3. *Si `P1∝P2∝P3` y `P3` no semidecidible → `P1` tampoco* → **F**.
4. *NP-difícil es siempre NP-completo* → **F** (falta estar en NP).

**Ej 3. SAT** — *Relación 2-SAT ↔ caminos en grafos dirigidos.* → Se construye el **grafo de implicaciones** (cada cláusula `(a∨b)` da `¬a→b` y `¬b→a`); la fórmula es **inconsistente** ⟺ existe camino `x→¬x` **y** `¬x→x` (x y ¬x en la misma componente fuertemente conexa). Por eso 2-SAT ∈ NL.

**Ej 4. Clases** — *Define P y EXP, relación.* → `P=⋃TIEMPO(nʲ)`, `EXP=⋃TIEMPO(2^{nʲ})`; `P ⊊ EXP` (estricta, jerarquía de tiempo).

**Ej 5. Reducciones** — *Conjunto Independiente → VC.* → `S` independiente de tamaño `k` ⟺ `V∖S` cubrimiento de tamaño `n−k`; misma `G`, complementa el umbral.

**Ej 6. MT** — *Simulación multicinta → 1 cinta; relación de pasos `t(n)`.* → Multipista; **`O(t(n)²)`**.

---

### 6 de julio de 2023

**Ej 1. Decidibilidad**
1. *¿Existe palíndromo aceptado por `M1` y NO por `M2`?* → **NO SEMIDECIDIBLE.** Mezcla "existe… aceptada por M1" con "no aceptada por M2" (complementario) ⟹ reducción desde C-UNIVERSAL/EMPTY.
2. *¿Existe `u` aceptada por `M1` tal que `u⁻¹` aceptada por `M2`?* → **SEMIDECIDIBLE (no decidible).** "Existe": búsqueda en anchura adivinando `u`, simular `M1(u)` y `M2(u⁻¹)`; aceptar si ambas aceptan.
3. *¿`M` acepta todas las palabras del alfabeto?* → **NO SEMIDECIDIBLE.** "Para TODA palabra": reducción desde EMPTY/complementario.
4. *¿`M` nunca escribe al leer la palabra vacía?* → **DECIDIBLE.** Comportamiento sobre **una** entrada (`λ`) acotado: simulas hasta que pare o se detecte ciclo en configuraciones (que son finitas mientras no escriba/expanda). Propiedad de la máquina sobre entrada fija.

**Ej 2. Variables numéricas** — *¿Qué es y cómo se simula con palabras?* → Variables que guardan naturales con `+1/−1/IF≠0`; se simula por la **biyección** palabra↔natural (orden lexicográfico).

**Ej 3. V/F**
1. *¿Problema de decisión no trivial en `O(1)` espacio?* → en general **NO** significativo (necesita leer la entrada; lenguajes regulares con espacio constante de trabajo).
2. *TFNP ⟹ decisión en tiempo lineal* → **V** trivialmente para la **decisión** (siempre "sí"), pero **encontrar** la solución no.
3. *Se sabe `L = PESPACIO`* → **F** (son distintas).
4. *El Viajante tiene δ-aprox con δ=2* → **V** solo el **caso métrico/euclídeo** (≤2); el general no.

**Ej 4. NP-completitud** — *`CH → TSP` (decisión).* → Matriz de distancias: peso 1 si hay arista, 2 si no; cota `B=n`. Hay circuito hamiltoniano ⟺ existe ruta TSP de coste ≤ n.

**Ej 5. Verificadores** — *PRIMO(n) ∈ NP.* → Certificado de **Pratt** (raíz primitiva + factorización de `n−1` con primalidad recursiva); verificable en tiempo polinómico.

**Ej 6. Complejidad** — *Parejas y ACTRI, ¿complejidad?* → Parejas ∈ **P** (Flujo Máximo); **ACTRI** (acoplamiento por tripletas, 3D) ∈ **NP-completo**.

---

## 📅 2024

### 12 de junio de 2024

**Ej 1. Decidibilidad**
1. *¿Si `M` acepta `u` también acepta `u⁻¹`?* → **NO DECIDIBLE (Rice)**; propiedad del lenguaje (cierre bajo inversión); "para toda u" ⟹ **no semidecidible** (reducción desde EMPTY/complementario).
2. *¿Toda palabra `|u|≤100` se acepta en `≤|u|³` pasos?* → **DECIDIBLE.** Conjunto finito de palabras (≤100) y límite de pasos finito por cada una ⟹ simulación acotada.
3. *¿La complejidad de `M` NO es `n³` en tiempo?* → **NO DECIDIBLE.** Propiedad asintótica del comportamiento sobre infinitas entradas; reducción desde problema no decidible.
4. *MT no determinista y `u`: ¿todos los caminos terminan en <100 pasos?* → **DECIDIBLE.** El árbol de cálculo hasta profundidad 100 es **finito** (factor de ramificación acotado); se explora entero.

**Ej 2. Decidibilidad teórica** — *`P(x)` y su contrario `C-P(x)`: enuncia y demuestra relaciones.* → Teorema de complementarios completo (ver §1.1 y Ej4 jul-2021).

**Ej 3. V/F**
1. *MT multipista → 1 cinta en mismo nº de pasos* → **V**.
2. *`PESPACIO = NPESPACIO`* → **V** (Savitch).
3. *Factorización ∈ FNPT sin algoritmo polinómico conocido* → **V**.
4. *Todo programa numérico se simula con variables en mismo nº de pasos* → **F** (la traducción introduce sobrecarga; "mismo número de pasos" es falso aunque sean equivalentes).

**Ej 4. NP-completitud (a elegir)**
- A) *Partición → Mochila:* enuncia ambos; reduce fijando pesos=valores y umbral a la mitad de la suma.
- B) *VC → Circuito Hamiltoniano:* cada **arista** se transforma en un **gadget** de 12 vértices recorrible de 3 formas consistentes con la cobertura.

**Ej 5. Clases** — *Clase de existencia de caminos en grafos dirigidos.* → **NL**, con el algoritmo de nodo-actual + contador (espacio log no determinista).

**Ej 6. Problemas** — *Red Feliz: enunciado, algoritmo y clase.* → **TFNP**; algoritmo de mejora local (voltear nodo infeliz) que siempre converge.

---

### 8 de julio de 2024

**Ej 1. Decidibilidad**
1. *¿`M` acepta siempre toda palabra de longitud ≤100?* → **DECIDIBLE.** Conjunto finito de palabras (≤100); pero "acepta" requiere que **pare** aceptando: como son finitas, se simula con cota de configuraciones / se reduce a comprobaciones finitas. *(En la práctica del examen se argumenta como conjunto finito de entradas a verificar.)* → **DECIDIBLE** por finitud del conjunto a comprobar.
2. *¿`M` nunca visita el estado `q` sea cual sea la entrada?* → **NO DECIDIBLE.** "Para cualquier entrada nunca alcanza `q`" = comportamiento sobre infinitas entradas; reducción desde el problema de la **PARADA**/UNIVERSAL.

**Ej 2. Church-Turing** — *Simular programa con variables → Post-Turing (organización + instrucciones básicas).* → Variables separadas por `#`; instrucciones = mover cabezal a la variable y desplazar bloque (ver §2.1a).

**Ej 3. V/F**
1. *Si hay algoritmo poli para CH (decisión), también para encontrarlo* → **V** (autorreducibilidad: fijar aristas y consultar el oráculo de decisión).
2. *MT 1 cinta ilimitada ambos lados → ilimitada a derecha en mismo orden temporal* → **V** (2 pistas, `O(t)`).
3. *Isomorfismo de grafos es NP-completo* → **F** (clase GI, no demostrado).
4. *Si `L2∝L1`, `L3∝L1` y `L1` r.e. → `L2∪L3` r.e.* → **V** (r.e. cerrada bajo unión y bajo reducción a un r.e.).

**Ej 4. NP-completitud** — *Horn, 2-SAT, NAESAT.* → Horn-SAT ∈ **P** (propagación unitaria); 2-SAT ∈ **P/NL** (grafo de implicaciones); NAESAT ∈ **NP-completo**.

**Ej 5. Jerarquía** — *Define P, NPESPACIO, NP, L, PESPACIO, NL + relaciones.* → Cadena `L⊆NL⊆P⊆NP⊆PESPACIO=NPESPACIO`; usa unión de tiempos/espacios e invoca Savitch.

---

## 📅 2025

### 11 de junio de 2025

**Ej 1. Decidibilidad**
1. *MT de 2 cintas, `|u|≤100`: ¿nunca usa más de 100 casillas en la 1ª cinta?* → **DECIDIBLE.** Entradas finitas (≤100) y espacio acotado (100 casillas) ⟹ configuraciones finitas; simulación acotada con detección de ciclo.
2. *¿`M` acepta todas las palabras de longitud ≤10?* → **DECIDIBLE.** Solo hay un nº finito de palabras de longitud ≤10. *(Subtileza: "acepta" implica parar; se trata como verificación de conjunto finito.)*
3. *¿Toda palabra `|w|≤100` aceptada por `M1` lo es por `M2` en ≤ pasos que `M1`?* → **DECIDIBLE.** Palabras finitas; para cada una simulas `M1` (si para) y comparas con `M2`. Conjunto finito acotado.
4. *`M2` siempre para: ¿`M1` da más pasos que `M2` al leer `u`?* → **SEMIDECIDIBLE.** Como `M2` para, conoces su nº de pasos `k`; simulas `M1` hasta `k+1` pasos: si supera, acepta; si `M1` no para, sigue (queda semidecidible).

**Ej 2. Máquinas de Turing** — *MT que reconoce `uu` (`u∈{0,1}*`) en espacio logarítmico.* → Descripción de alto nivel: con una cinta de trabajo como **contador binario** (log casillas), localiza la mitad `|w|/2`, y compara la posición `i` con la `i+|w|/2` usando índices guardados en log espacio; recorre `i=1..|w|/2`. No hace falta dibujar estados.

**Ej 3. V/F**
1. *MT ilimitada ambos lados → ilimitada derecha en **mismos** pasos* → **F** (mismo **orden** `O(t)`, no exactamente los mismos pasos).
2. *Para espacio `O(n²)` se necesitan ≥2 cintas para no escribir en la entrada* → **V** (la cinta de entrada no debe contarse; hace falta cinta de trabajo separada).
3. *Conocimiento actual compatible con `P=NP` y `NP=coNP`* → **V**.
4. *Está demostrado que Church-Turing es cierta* → **F**.

**Ej 4. NP-completitud** — *Problema de la SUMA, ¿complejidad?* → ¿existe subconjunto que sume exactamente `B`? **NP-completo**; en NP (certificado = subconjunto, se suma en poli) y NP-difícil (3-SAT/ACTRI → SUMA).

**Ej 5. Complejidad** — *Define EXP; relación con PESPACIO y P.* → `EXP=⋃TIEMPO(2^{nʲ})`; `P⊊EXP`, y `PESPACIO⊆EXP` (recorrer todas las configuraciones de espacio polinómico cuesta tiempo exponencial).

**Ej 6. Reducciones (a elegir)** — *`FSAT → SAT` Turing* (fijar variable, consultar oráculo, mantener si consistente) **o** *`FHAMILTONIANO → HAMILTONIANO`* (fijar aristas e ir preguntando al oráculo de decisión).

---

### 7 de julio de 2025

**Ej 1. Decidibilidad**
1. *¿Existe entrada `u` tal que `M` cicla con `u`?* → **NO SEMIDECIDIBLE.** "Ciclar" = no parar; "existe entrada que no para" se relaciona con el complementario de la parada ⟹ reducción desde un problema no semidecidible.
2. *¿Para toda `u`, si `M1` cicla entonces `M2` también?* → **NO SEMIDECIDIBLE.** "Para toda `u`" + condición sobre no-parada ⟹ reducción desde C-UNIVERSAL/no-parada.
3. *MT sin movimientos a la izquierda y `u`: ¿acepta `u`?* → **DECIDIBLE.** Sin movimientos a la izquierda el cabezal solo avanza ⟹ se comporta como autómata finito sobre `u`; el cálculo tiene longitud acotada por `|u|` (más una cola finita) ⟹ simulación que termina.
4. *¿Para ninguna entrada se mueve a la izquierda en sus 5 primeros movimientos?* → **DECIDIBLE.** Solo importan los **5 primeros** pasos: el comportamiento en 5 pasos depende de un prefijo finito de la entrada; nº finito de casos a comprobar ⟹ decidible.

**Ej 2. Church-Turing** — *Programa variables numéricas vs. variables con palabras.* → Equivalentes por biyección natural↔palabra; `+1` ≡ palabra siguiente lexicográfica (ver §2.3).

**Ej 3. V/F**
1. *PCP sobre `{1}` es semidecidible pero no decidible* → **F** (con `{1}` es **decidible**).
2. *MT de una cinta tiene espacio al menos `O(n)`* → **F** (la entrada no se cuenta si no se sobrescribe; puede ser sublineal).
3. *FNPT se resuelven en tiempo polinómico determinista* → **F** (existencia garantizada ≠ cálculo fácil).
4. *Caracterización de coNP (rechaza ≥1 rama para NO; acepta en todas para SÍ)* → **V**.

**Ej 4. NP-completitud** — *Cláusulas Horn, complejidad.* → Horn = ≤1 literal positivo por cláusula; **polinómico** por propagación unitaria (forzar literales unitarios y propagar).

**Ej 5. Máquinas de Turing** — *MT no deterministas vs deterministas; ventajas y ejemplo.* → MTND "adivina" y verifica; ventaja = diseño más simple para problemas de búsqueda; equivalente en potencia a la determinista (con coste). Ejemplo: aceptar palabras compuestas (adivinar el factor) o `L={uu}` adivinando el corte.

**Ej 6. Optimización** — *Mochila (optimización), ¿complejidad?* → NP-difícil (la versión decisión es NP-completa); programación dinámica **pseudopolinómica** `O(n·B)`; admite **FPTAS**.

---
---

# PARTE 3 — CHULETA FINAL (lo que marca el 10)

## 🎯 Tabla relámpago del Ejercicio 1

| Si el enunciado dice… | Respuesta inmediata | Justificación |
|------------------------|---------------------|---------------|
| "≤N pasos", "|w|≤K", "≤c casillas", "primeros 5 movimientos", "nº de estados" | **DECIDIBLE** | Simulación acotada / conjunto finito |
| "¿es subcadena de ⟨M⟩?", "¿⟨M1⟩ subcadena de ⟨M2⟩?" | **DECIDIBLE** | Solo comparas strings |
| Propiedad de `L(M)`: palíndromo, regular, finito, "acepta 011" | **NO DECIDIBLE** | **Rice** |
| "¿Existe palabra…?", "¿acepta alguna…?" | **SEMIDECIDIBLE** (y no decidible por Rice) | Búsqueda en anchura / MTND |
| "¿Para TODA palabra…?", "¿acepta todas?", "L1⊆L2", "L(M)=∅" | **NO SEMIDECIDIBLE** | Reducir EMPTY / C-UNIVERSAL / DIAGONAL |
| "¿M NO acepta w?" | **NO SEMIDECIDIBLE** | Es C-UNIVERSAL |
| "¿visita el estado q (cualquier entrada)?", "¿no para nunca?" | **NO DECIDIBLE** (no por Rice) | Reducción desde PARADA |
| "PCP" | **Indecidible** (|A|≥2) / **Decidible** (A={1}) | ⚠️ trampa del alfabeto |
| "GIC ambigua" | **Indecidible** · "GIC genera u" | **Decidible** (CYK) |

## ⚠️ Errores que tiran la nota
1. **Usar Rice en propiedades de la máquina** (pasos, casillas, estados, movimientos). Rice **solo** vale para propiedades **no triviales de `L(M)`**.
2. Decir que `B` es NP-completo solo con `A∝B` → **falta probar `B∈NP`** (si no, es solo NP-difícil).
3. "Está demostrada la tesis de Church-Turing" → **FALSO** (es tesis).
4. Confundir "se sabe que" con "se conjetura": `L=PESPACIO` (F, son distintas), `P=NP` (abierto).
5. Olvidar la **vuelta (⇐)** en las reducciones.
6. Búsqueda en **profundidad** en semidecidibilidad (debe ser **en anchura/dovetailing**).

## 🪄 Frases-comodín para máxima nota
- "Por el **Teorema de Savitch**, `NESPACIO(f)⊆ESPACIO(f²)`, luego `PESPACIO=NPESPACIO`."
- "Por el **Teorema de la Jerarquía** (tiempo/espacio), la inclusión es **estricta** (`P⊊EXP`, `L⊊PESPACIO`)."
- "Por el **Teorema de Rice**, toda propiedad no trivial de los lenguajes r.e. es indecidible."
- "Por el **Teorema de Cook-Levin**, SAT es NP-completo (codifica el cómputo de una MTND como fórmula booleana)."
- "Por el **Teorema de los complementarios**, si `L` es r.e. no recursivo, `L̄` no es r.e."
- Reducción: enuncia siempre los **4 pasos** (transformación · eficiencia log · ⇒ · ⇐).

---

*Guía elaborada a partir de los 24 archivos `.md` del export NotebookLM (estructura del examen, enunciados 2021-2025, Manual de Decidibilidad, temas tr1-tr6, clases de complejidad, mapa de reducciones y puntuaciones). Cubre exclusivamente la parte de TEORÍA (Ej 1-6). ¡Suerte! 🍀*
