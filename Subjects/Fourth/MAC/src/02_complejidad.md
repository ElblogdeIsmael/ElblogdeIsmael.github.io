# Clases de complejidad

Cubre los temas 3 a 6 del programa: las clases de complejidad y sus relaciones,
la NP-completitud, la complejidad de los problemas de optimización aproximados y
las clases de espacio.

## Clases y relaciones entre ellas

Cadena: `L ⊆ NL ⊆ P ⊆ NP ⊆ PESPACIO = NPESPACIO ⊊ EXP`. Estrictas demostradas: `L⊊PESPACIO`, `NL⊊PESPACIO`, `P⊊EXP`. `PESPACIO=NPESPACIO` por Savitch.

Definiciones: `P=⋃TIEMPO(nʲ)`; NP = MT no determinista en tiempo polinómico, o equivalentemente existencia de certificado verificable en tiempo polinómico; coNP = complementario en NP; L/NL = espacio logarítmico det./no det.; PESPACIO = espacio polinómico; `EXP=⋃TIEMPO(2^{nʲ})`.

Medida: sobre la longitud de la representación `n=log(x)`. En espacio no se cuentan la cinta de entrada (si no se sobrescribe) ni la de salida (si se escribe en una sola dirección).

Funciones: FNP (búsqueda), FP (se calcula la solución en tiempo polinómico), TFNP (la solución existe siempre). Aproximación: APX (δ constante), PTAS (cualquier precisión en tiempo polinómico en `n`), FPTAS (polinómico en `n` y en `1/(δ−1)`). DP `= L1∩L2` con `L1∈NP`, `L2∈coNP`.

## NP-completitud y reducciones

Cuatro pasos de `P1 ∝ P2`: (1) algoritmo de transformación; (2) eficiencia (espacio logarítmico o tiempo polinómico); (3) SÍ en origen ⟹ SÍ en destino; (4) SÍ en destino ⟹ SÍ en origen.

Para demostrar `B` NP-completo: probar `B∈NP` y reducir `A∝B` con `A` NP-completo conocido.

Mapa: `SAT → 3-SAT → VC → CH → TSP`; `3-SAT → ACTRI → SUMA → PARTICIÓN → MOCHILA`; `Clique ≡ Conjunto Independiente ≡ VC`.

Variantes de SAT: SAT, 3-SAT, MAX2SAT y NAESAT son NP-completos; 2-SAT y Horn-SAT son polinómicos.

Reducibilidad: Karp/logarítmica (una llamada, mapea la respuesta) es más fuerte; Turing (oráculo, varias llamadas) es más débil. NP-difícil: un NP-completo se reduce Turing a él.

## Problemas clásicos y su clasificación

| Problema | Clase | Idea |
|----------|-------|------|
| Caminos en grafos dirigidos | NL | adivinar el camino guardando nodo actual y contador |
| Parejas (emparejamiento perfecto) | P | reducción a Flujo Máximo (Ford-Fulkerson) |
| Red Feliz | TFNP (PLS) | mejora local: voltear nodos infelices hasta converger |
| Isomorfismo de grafos | GI | en NP, no demostrado NP-completo ni P |
| PRIMO(n) | NP (de hecho P) | certificado de Pratt |
| ACTRI (tripletas) | NP-completo | versión tridimensional de Parejas |
| Mochila (optimización) | NP-difícil, FPTAS | programación dinámica `O(n·B)` |
