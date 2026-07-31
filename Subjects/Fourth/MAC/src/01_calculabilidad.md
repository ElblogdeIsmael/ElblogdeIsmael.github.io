# Calculabilidad y modelos de cómputo

Cubre los temas 1 y 2 del programa: la máquina de Turing como modelo de
referencia, las funciones y lenguajes calculables, los modelos alternativos de
cálculo y la tesis de Church-Turing.

## Lenguajes recursivos y recursivamente enumerables

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

## Catálogo de problemas de referencia

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

## Otros modelos de cálculo y tesis de Church-Turing

#### Simulaciones entre modelos

a) Programa con variables hacia programa Post-Turing:
- Organización: las variables `X1,…,Xm,Z1,…,Zk,Y` se disponen en la cinta separadas por el blanco `#`, con la forma `#V1#V2#…#Vn#`.
- Instrucciones: añadir un símbolo (`Vj ← ai Vj`) o borrar el último (`Vj ← Vj−`) se simulan con macros Post-Turing que desplazan el cabezal hasta la variable, desplazan el bloque a la derecha para crear o cerrar hueco, y escriben o borran.

b) Programa Post-Turing hacia MT:
- Organización: mismo alfabeto. Por cada instrucción `Ii` un estado `qi`, más un estado final `qf`.
- Traducción uno a uno: `PRINT a` → `δ(qi,b)=(qi+1, a, S)`; `RIGHT` → `δ(qi,b)=(qi+1, b, D)`; `IF ak GOTO L` → desde `qi` a `qL` si se lee `ak`, y a `qi+1` en otro caso.

c) MT hacia programa con variables:
- Organización: `X` = parte izquierda del cabezal, `Z` = símbolo leído, `Y` = parte derecha.
- Transición `δ(qi,aj)=(qm,ak,D)`: se escribe `ak` en `X`, se vacía `Z`, se lee el primer símbolo de `Y` y se traslada a `Z`, y se salta a la etiqueta de `qm`.

#### Sobrecarga de las simulaciones de cintas

| Simulación | Coste |
|------------|-------|
| MT multicinta hacia 1 cinta | tiempo `O(t²)` |
| Cinta doble infinita hacia semiinfinita (por la derecha) | mismo orden `O(t)`, con 2 pistas |
| MT multipista hacia 1 cinta | mismo número de pasos |

#### Variables numéricas frente a variables de palabras
- Numéricas: `Xi,Zi,Y`; instrucciones `A←A+1`, `A←A−1`, `IF A≠0 GOTO L`.
- Equivalencia: existe una biyección entre palabras y naturales (`N(w)=n`); `+1` equivale a la palabra siguiente en orden lexicográfico.

#### Tesis de Church-Turing
- Enunciado: "Toda función efectivamente calculable mediante un proceso mecánico bien definido puede ser calculada por una Máquina de Turing".
- "Está demostrada": FALSO (es una tesis, no un teorema). "La computación cuántica la pone en duda": FALSO (afecta a la eficiencia).

#### Macros y algoritmos clásicos
- `U←V` (copia con variable auxiliar para invertir y reinvertir), `V←−V` (borrar el primer símbolo), suma de cadenas, número siguiente, `V←V+1`, comprobar múltiplo.
