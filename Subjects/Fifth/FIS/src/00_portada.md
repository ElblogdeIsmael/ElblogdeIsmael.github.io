---
subject: "Derecho Fiscal"
type: ade
about: "Apuntes y Casos Prácticos"
header-includes:
  - \raggedbottom
  - \AtBeginDocument{\setlength{\headheight}{24pt}}
---

# Alcance de estos apuntes {.unnumbered}

Este documento recoge el desarrollo sistemático, analítico y práctico de la materia de Derecho Fiscal impartida en el quinto curso del Doble Grado en Ingeniería Informática y Administración y Dirección de Empresas de la Universidad de Granada, adscrita al Departamento de Derecho Financiero y Tributario.

El texto integra la fundamentación dogmática de la Ley 58/2003, de 17 de diciembre, General Tributaria (LGT) y su normativa de desarrollo reglamentario, complementada con el análisis específico de las principales figuras del sistema tributario español (IRPF, Impuesto sobre Sociedades e IVA), los esquemas docentes de la cátedra y la resolución guiada de supuestos prácticos de calificación y liquidación.

\nocite{*}

# Guía de Contexto y Mapeo Temático {.unnumbered}

Para facilitar el estudio y la interconexión entre la teoría dogmática y la resolución analítica, a continuación se detalla la correspondencia exacta entre el temario oficial de la asignatura y los distintos bloques desarrollados en este documento:

- **Tema 1: Fundamentos y Estructura del Tributo**
  - *Teoría:* Desarrollo de la Ley General Tributaria, elementos del tributo y categorías tributarias.
  - *Práctica:* Cuestiones teóricas de autoevaluación (1 a 16) resueltas y justificadas normativamente.

- **Tema 2: IRPF - Conceptos Generales, Sujeción y Exenciones**
  - *Prácticas (Bloque 1):* Resoluciones de la 1 a la 7. Se centran en la determinación de la residencia fiscal, la condición de contribuyente y la delimitación de rentas exentas (indemnizaciones, becas, desempleo) frente a otros tributos directos (ISD).

- **Tema 3: IRPF - Rendimientos del Trabajo**
  - *Prácticas (Bloque 2):* Resoluciones de la 8 a la 12. Abordan monográficamente la calificación, cuantificación y tributación de los rendimientos del trabajo, dietas, retribuciones en especie (vehículos, seguros, acciones) y supuestos de irregularidad.

- **Tema 4: IRPF - Rendimientos del Capital Inmobiliario y Rendimientos del Capital Mobiliario**
  - *Prácticas (Bloque 3 - Capital Inmobiliario e Imputaciones):* Resoluciones de la 13 a la 16. Análisis de arrendamientos de viviendas y locales comerciales, cesión a familiares (suelo del art. 24 LIRPF), cobros en especie, usufructos vitalicios, prorrateos por temporada y la reducción del 90% en zonas tensionadas (Ley 12/2023).
  - *Prácticas (Bloque 4 - Capital Mobiliario):* Resolución 17. Rendimientos explícitos e implícitos (depósitos, letras, pagarés), dividendos, retribuciones en especie y el arrendamiento de negocio o industria en la Base Imponible General (art. 25.4.c LIRPF).

- **Tema 5: IRPF - Rendimientos de Actividades Económicas**
  - *Prácticas (Bloque 5):* Resoluciones de la 18 a la 20. Determinación del rendimiento neto en Estimación Directa Simplificada (ingresos, gastos deducibles, provisiones del 5%), comparativa de conveniencia fiscal frente a Estimación Objetiva (módulos) y reglas de renuncia.

- **Tema 6: IRPF - Ganancias y Pérdidas Patrimoniales**
  - *Prácticas (Bloque 6):* Resoluciones 21 y 22. Transmisiones onerosas y lucrativas de bienes inmuebles (afectos y desafectados), mejoras, donaciones inter vivos de acciones y pisos, premios vitalicios y tratamiento de pérdidas por estafas informáticas.

- **Tema 7: IRPF - Liquidación, Mínimos y Tributación Familiar**
  - *Prácticas (Bloque 7 - Integración y Liquidación):* Resoluciones de la 23 a la 26. Mecánica de compensación interna entre BIG y BIA (límite del 25%), reducciones por planes de pensiones y pensiones compensatorias, mínimo personal y familiar (ascendientes, descendientes, discapacidad) y liquidación de cuotas.
  - *Prácticas (Bloque 8 - Unidad Familiar y Declaración Conjunta):* Resoluciones 27 y 28. Inadmisibilidad de tributación conjunta en parejas de hecho, opciones monoparentales con hijos no comunes y comunes, y liquidación integral en declaración conjunta matrimonial con descendientes, ascendientes y deducción por vehículo eléctrico.

# Procedencia de las Fuentes y Bibliografía Docente {.unnumbered}

Todas las resoluciones, cálculos numéricos y fundamentos jurídicos desarrollados en estos apuntes proceden directamente de los fondos documentales oficiales de la asignatura, ubicados en la carpeta docente de la Universidad de Granada (`DOBLE GRADO/5-curso/FIS/bibliografia_FIS`):

1. **Textos Legales y Códigos Tributarios Consolidados del BOE:**
   - *Ley 35/2006, de 28 de noviembre, del Impuesto sobre la Renta de las Personas Físicas (LIRPF)* y *Real Decreto 439/2007 (RIRPF)* (`BOE-064_Impuesto_sobre_la_Renta_de_las_Personas_Fisicas.pdf`).
   - *Ley 58/2003, de 17 de diciembre, General Tributaria (LGT)* y normativa reglamentaria de recaudación, gestión e inspección (`BOE-049_Codigo_de_Legislacion_Tributaria`).
   - *Ley 27/2014, de 27 de noviembre, del Impuesto sobre Sociedades (LIS)* (`BOE-062_Impuesto_sobre_Sociedades.pdf` y `Extracto Ley Impuesto Sociedades.pdf`).
   - *Ley 12/2023, de 24 de mayo, por el derecho a la vivienda* (régimen de reducciones por alquiler en zonas de mercado residencial tensionado del art. 23.2 LIRPF).
   - *Ley 49/2002, de 23 de diciembre, de régimen fiscal de las entidades sin fines lucrativos y de los incentivos fiscales al mecenazgo* (deducción por donativos en cuota del IRPF).

2. **Manuales Prácticos Oficiales de la Administración Tributaria:**
   - *Manual práctico de Renta 2025* editado por el Departamento de Gestión Tributaria de la Agencia Estatal de Administración Tributaria (`Manual_práctico_de_Renta_2025._Parte_1...` y `Parte_2._Deducciones_autonómicas.pdf`).
   - Criterios interpretativos de la Dirección General de Tributos (DGT) y jurisprudencia unificada de la Sala Tercera del Tribunal Supremo.

3. **Material Docente Específico de la Cátedra de Derecho Fiscal (UGR):**
   - *Supuestos Clase IRPF DERECHO FISCAL 2026-27.pdf:* Colección oficial de las 28 prácticas docentes de clase.
   - *Derecho Fiscal Cuestiones TEMA 1 .doc:* Relación de las 16 cuestiones de autoevaluación teórica del Tema 1.
   - *Esquema liquidación IRPF.pdf* y *Esquema del sistema tributario.pdf:* Cuadros de flujo liquidatorio elaborados por el Departamento de Derecho Financiero y Tributario.
   - *Cuadro resumen INDEMNIZACIONES LABORALES EXENTAS:* Límites e indemnizaciones del Estatuto de los Trabajadores y su exención según el artículo 7.e de la LIRPF.
   - *Tarifa estatal.pdf:* Escalas progresivas estatal y autonómica aplicadas a la Base Liquidable y al Mínimo Personal y Familiar.
   - *Diapositivas y esquemas de aula (`TEMAS/t1_FIS_v2.pdf`, `t2_FIS_v2.pdf`, `t3_FIS_v2.pdf` y notas de clase de `fis-vistoenclase.md`).*


