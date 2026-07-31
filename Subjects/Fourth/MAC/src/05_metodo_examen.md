# Apéndice. Método de resolución

Reúne los criterios de clasificación, las plantillas de redacción y los errores
que con más frecuencia restan calificación. No forma parte del temario: es la
sistemática con la que se abordan los ejercicios de las convocatorias.

## Estructura y puntuación del examen

| Ej | Tema | Contenido | Puntos 2024-25 | Puntos 2022-23 |
|----|------|-----------|----------------|----------------|
| 1 | T1-T2 Decidibilidad | Clasificar 4 problemas: decidible / semidecidible / no semidecidible | 2.4 | 2.0 |
| 2 | T2 Church-Turing | Simulación entre modelos o programa a bajo nivel | 1.3 | 2.0 |
| 3 | Varios | 4-5 afirmaciones de Verdadero/Falso razonadas | 2.4 | 1.5 |
| 4 | T4 | SAT / NP-completitud / reducción concreta | 1.3 | 1.5 |
| 5 | T3 | Definición de clases de complejidad y relaciones | 1.3 | 1.5 |
| 6 | T3-T4-T5-T6 | Problema específico (grafos, parejas, Red Feliz, mochila…) | 1.3 | 1.5 |

Los Ejercicios 1 y 3 suman casi 5 puntos (la mitad del examen).

## Criterio de clasificación de un problema

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

## Plantillas de redacción

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

## Banco de afirmaciones de verdadero y falso

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

### Tabla de referencia rápida del Ejercicio 1

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

### Errores frecuentes que reducen la calificación
1. Aplicar Rice a propiedades de la máquina (pasos, casillas, estados, movimientos): Rice solo vale para propiedades no triviales de `L(M)`.
2. Confundir "cota de pasos" con "cota de longitud de entrada": con cota de pasos es decidible; sin ella, "acepta todas las palabras ≤K" es solo semidecidible.
3. Afirmar que `B` es NP-completo solo con `A∝B`: falta probar `B∈NP`.
4. Afirmar que la tesis de Church-Turing está demostrada.
5. Confundir "se sabe que" con "se conjetura": `L=PESPACIO` es falso (son distintas), `P=NP` permanece abierto.
6. Omitir la implicación recíproca en las reducciones.
7. Realizar búsqueda en profundidad en las pruebas de semidecidibilidad (debe ser en anchura / dovetailing).

### Formulaciones recomendadas para la justificación
- "Por el Teorema de Savitch, `NESPACIO(f)⊆ESPACIO(f²)`, luego `PESPACIO=NPESPACIO`."
- "Por el Teorema de la Jerarquía (de tiempo o de espacio), la inclusión es estricta (`P⊊EXP`, `L⊊PESPACIO`)."
- "Por el Teorema de Rice, toda propiedad no trivial de los lenguajes r.e. es indecidible."
- "Por el Teorema de Cook-Levin, SAT es NP-completo (codifica el cómputo de una MT no determinista como fórmula booleana)."
- "Por el Teorema de los complementarios, si `L` es r.e. no recursivo, `L̄` no es r.e."
- En toda reducción se enuncian los cuatro pasos: transformación, eficiencia, implicación directa e implicación recíproca.
