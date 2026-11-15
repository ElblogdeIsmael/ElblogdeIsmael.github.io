---
subject: "Dirección Financiera — Problemas tipo del Parcial 1"
type: ade
about: "Lo que cae siempre en la práctica, resuelto paso a paso con casos reales de examen"
header-includes:
  - \raggedbottom
  - \AtBeginDocument{\setlength{\headheight}{28pt}}
---

\decimalpoint

\input{src/tex/estilo_ejes.tex}

# Cómo usar este documento {.unnumbered}

La parte práctica del primer parcial de **Dirección Financiera** (UGR, temas 1 a 4) se repite mucho de un año a otro. Revisando los parciales y ordinarias de GADE (2016-2026), los exámenes con la plantilla de la asignatura (2000-2012) y las pruebas de FICO «Dirección Financiera I», salen cuatro tipos de problema:

| # | Tipo | Exámenes reales en que aparece | Capítulo |
| :---: | :--- | :---: | :---: |
| 1 | **Valoración de acciones: VAOC, dividendos por fases, $g = b\cdot ROE$** | ≈ 13 (casi todos) | 1 |
| 2 | **Flujos de caja de un proyecto y VAN** | ≈ 7 | 2 |
| 3 | **CAE, elección y renovación de equipos** | 3 + muchas preguntas de test | 3 |
| 4 | **Bonos: precio, TIR y rentabilidad realizada** | 2 (FICO) | 4 |

Cada capítulo tiene siempre las mismas partes:

1. **Cómo reconocerlo:** las palabras del enunciado que delatan el tipo de problema.
2. **Plan de ataque:** los pasos que sirven para cualquier problema del tipo.
3. **Caso resuelto completo:** un problema real de examen, con el enunciado original y cada número justificado.
4. **Comprobaciones:** cómo saber si el resultado tiene sentido antes de entregar.
5. **Variantes que ya han caído**, resueltas en corto.
6. **Errores típicos** que cuestan puntos.

Al final hay una **lista de comprobación para el examen** y una **hoja de enunciados sin resolver** para practicar: intenta cada problema antes de mirar su solución.

**Notación.** $r$ (o $k$): coste de oportunidad del capital. $BPA_t$: beneficio por acción del año $t$. $DIV_t$: dividendo. $b$: tasa de retención (reinversión), $1-b$ la de reparto. $ROE$: rentabilidad de las reinversiones. $VAOC$: valor actual de las oportunidades de crecimiento. $C_0^{di}$, $Q_t^{di}$, $VR_n^{di}$: inversión inicial, flujo de explotación y valor residual después de impuestos. $t_c$: tipo impositivo. $CAF$: cuota de amortización fiscal. $FM$: fondo de maniobra. $a_{\overline{n}|r} = \dfrac{1-(1+r)^{-n}}{r}$: factor de anualidad.

Todas las cifras están recalculadas. Cuando difieren de una resolución publicada, se dice.
