---
subject: "Dirección Financiera"
type: ade
about: "Teoría y Casos Prácticos"
header-includes:
  - \raggedbottom
  - \AtBeginDocument{\setlength{\headheight}{28pt}}
  - \renewcommand{\theHchapter}{\thepart.\thechapter}
---

# Alcance de estos apuntes {.unnumbered}

Este documento recoge el desarrollo sistemático, analítico y práctico de la materia de Dirección Financiera (código 2161151) impartida en el quinto curso del Doble Grado en Ingeniería Informática y Administración y Dirección de Empresas de la Universidad de Granada, adscrita al Departamento de Economía Financiera y Contabilidad.

El texto integra la fundamentación teórica rigurosa de las finanzas corporativas modernas a partir de los grandes manuales de referencia internacional (Brealey, Myers, Allen y Edmans, 2023; Berk y DeMarzo, 2020; Ross, Westerfield, Jaffe y Jordan, 2018; Martínez Abascal, 2019), complementada con los esquemas y diapositivas de la cátedra de la Universidad de Granada, las anotaciones de pizarra y la resolución analítica, gráfica y comentada de la relación oficial de problemas.

\nocite{*}

# Guía de Contexto y Mapeo Temático {.unnumbered}

Para facilitar el estudio y la articulación entre los modelos teóricos y la resolución cuantitativa de problemas, a continuación se detalla la correspondencia exacta entre el programa de la asignatura y los bloques desarrollados en esta obra:

- **Tema 1: La Empresa, el Director Financiero y el Teorema de Separación de Fisher**
  - *Teoría:* Formas jurídicas, separación de propiedad y control, costes de agencia, objetivo financiero de la empresa (creación de valor vs. beneficio contable), circuito de tesorería, modelo intertemporal de consumo e inversión y Teorema de Separación de Fisher con análisis de fricciones de mercado.
  - *Práctica:* Bloque 1 de la relación oficial (Ejercicios 1 a 3), con deducción matemática de óptimos y diagramas vectoriales de Fisher.

- **Tema 2: Valor Actual, Coste de Oportunidad del Capital y Valoración de Activos**
  - *Teoría:* Fundamentos del descuento intertemporal, valoración de renta fija (bonos, tipos spot y forward, curva de rendimientos, duración), valoración de renta variable (modelo de descuento de dividendos, modelo Gordon-Shapiro, determinantes internos del crecimiento $g = b \times \text{ROE}$, descomposición analítica del precio y Valor Actual de las Oportunidades de Crecimiento - VAOC).
  - *Práctica:* Bloque 2 de la relación oficial (Ejercicios 4 a 11), abordando supuestos de crecimiento acotado, fases múltiples, horizontes temporales y valoración de VAOC.

- **Tema 3: Criterios de Valoración de Inversiones**
  - *Teoría:* Análisis comparativo entre el Valor Actual Neto (VAN), el Plazo de Recuperación (*Payback* simple y descontado) y la Tasa Interna de Rentabilidad (TIR). Fallos estructurales de la TIR (proyectos mutuamente excluyentes, escala, diferente perfil temporal, múltiples tasas por la regla de signos de Descartes, supuesto de reinversión implícito) e Índice de Rentabilidad bajo racionamiento de capital.

- **Tema 4: Determinación de Flujos de Caja, Capital Circulante y Decisiones de Inversión**
  - *Teoría:* Criterios de estimación del Flujo de Caja Libre (FCL) frente al beneficio contable, flujos incrementales, costes de oportunidad, costes hundidos, canibalización, inversión y recuperación de Necesidades Operativas de Fondos (NOF), amortizaciones y escudo fiscal, cálculo del valor residual tras impuestos y proyectos con distinta vida útil mediante el Coste Anual Equivalente (CAE).

- **Temas Proyectados (Bloque de Riesgo, Coste de Capital y Financiación):**
  - *Tema 5: Riesgo, Rentabilidad y Modelo de Valoración de Activos de Capital (CAPM):* Teoría de carteras de Markowitz, diversificación, riesgo específico y sistemático, deducción del CAPM y Security Market Line (SML).
  - *Tema 6: Estructura Financiera de la Empresa y Coste de Capital (WACC):* Proposiciones de Modigliani y Miller con y sin impuestos, escudo fiscal de la deuda, costes de insolvencia financiera y cálculo del Coste Medio Ponderado del Capital.
