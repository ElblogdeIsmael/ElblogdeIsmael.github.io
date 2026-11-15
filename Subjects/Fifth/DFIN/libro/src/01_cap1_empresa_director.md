\parteLibro{I}{Valor del Dinero, Activos y Decisiones de Inversión}{El circuito de flujos de caja, el teorema de separación de Fisher, la valoración de renta fija y variable, y la presupuestación de capital bajo certeza.}{part1_valor.jpg}

# La empresa, la dirección financiera y el problema de agencia

\begin{epigrafe}{El precio es lo que pagas; el valor es lo que recibes.}{Warren Buffett}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Distinguir las dos decisiones troncales del director financiero (presupuesto de capital y estructura financiera) sobre el circuito real y financiero de la empresa.
  \item Fundamentar el objetivo único de la dirección financiera: la maximización de la riqueza de los accionistas medida a precios de mercado, frente a criterios contables estáticos como el beneficio neto.
  \item Modelizar los conflictos de agencia entre accionistas, directivos y acreedores, así como los mecanismos internos y externos de gobierno corporativo que los acotan.
  \item Conectar la función financiera tradicional con la arquitectura de datos e información en entornos corporativos modernos.
\end{itemize}
\end{objetivos}

## Qué es una empresa y qué decide el director financiero

Una empresa no es únicamente un edificio ni una colección de contratos laborales; desde la óptica financiera constituye una cartera organizada de **activos reales** capaces de generar flujos futuros de tesorería inciertos. Para adquirir maquinaria, software propietario, marcas comerciales, centros logísticos o capital circulante, la compañía necesita financiación. Esa financiación se capta vendiendo derechos sobre dichos flujos futuros en forma de **activos financieros**: acciones (títulos de propiedad residual) y obligaciones o préstamos (títulos de deuda con prelación de cobro).

El director financiero (CFO, *Chief Financial Officer*) actúa como nodo bisagra entre las operaciones productivas internas y los mercados de capitales externos. Brealey, Myers y Allen (2023) sintetizan su trabajo en dos preguntas permanentes que articulan toda esta asignatura:

1. **Decisión de inversión (presupuesto de capital o *capital budgeting*):** En qué activos reales conviene inmovilizar capital hoy para que su valor actual supere su coste de adquisición. La respuesta exige estimar flujos incrementales de caja libre, horizonte temporal y tasa de descuento ajustada al riesgo.
2. **Decisión de financiación (*financing decision*):** Cómo reunir el capital necesario mediante deuda bancaria, emisión de bonos, ampliación de capital o retención de beneficios, y con qué política de vencimientos, divisas y dividendos conviene devolverlo.

Una tercera dimensión operativa atraviesa el día a día entre ambas: la **gestión de tesorería y capital circulante** (existencias, crédito comercial a clientes y aplazamiento con proveedores), que garantiza que la solvencia a corto plazo no ahogue a un negocio rentable a largo plazo.

\begin{figure}[H]
\includetikz[0.96\linewidth]{src/tex/fig_circuito_financiero.tex}
\caption{Circuito completo de flujos entre activos reales, dirección financiera, mercados de capitales y Hacienda Pública.}
\label{fig:circuito-financiero}
\end{figure}

La Figura \ref{fig:circuito-financiero} describe el movimiento cerrado del dinero en cinco etapas numeradas: (1) la empresa emite pasivos y patrimonio neto para captar efectivo en los mercados; (2) invierte esos recursos en activos reales; (3) la explotación productiva genera flujos de caja libre ($FCL$); (4a) parte de esa caja se reinvierte internamente en reposición y crecimiento mientras que (4b) el excedente se restituye a inversores y acreedores en forma de dividendos, recompras, intereses y amortización de principal; y (5) el Estado detrae el Impuesto de Sociedades sobre la base imponible generada.

\begin{claseugr}{Estructura orgánica y el binomio Tesorería--Control en la UGR}
En el Tema 1 de la asignatura se distingue la doble vertiente del departamento financiero en corporaciones medianas y grandes:
\begin{itemize}
  \item \textbf{Tesorero (\emph{Treasurer}):} gestiona la liquidez diaria, las relaciones bancarias, las líneas de descuento, el tipo de cambio, los seguros y la emisión de títulos. Responde de la caja física y del riesgo financiero.
  \item \textbf{Controlador (\emph{Controller}):} supervisa la contabilidad financiera, los costes analíticos, la planificación fiscal y los presupuestos internos. Responde de la información veraz para tomar decisiones.
\end{itemize}
En empresas pequeñas ambas figuras recaen sobre el mismo director financiero; cuando la firma crece, separar la custodia del dinero de su registro reduce el riesgo de fraude interno.
\end{claseugr}

## Formas jurídicas y separación entre propiedad y control

La complejidad financiera de una empresa depende directamente de su forma jurídica. En el ordenamiento mercantil español y comparado convivimos con tres escalones organizativos bien diferenciados:

| Dimensión | Empresario individual / Autónoma | Sociedad Limitada (S.L.) | Sociedad Anónima Cotizada (S.A.) |
| :--- | :--- | :--- | :--- |
| **Responsabilidad** | Ilimitada (compromete patrimonio personal) | Limitada al capital aportado | Limitada al capital aportado |
| **Vida jurídica** | Vinculada a la vida del titular | Perpetua e independiente | Perpetua e independiente |
| **Transmisión propiedad** | Difícil; requiere traspaso de activos | Restringida por estatutos y pactos | Líquida e instantánea en bolsa |
| **Acceso a capital** | Crédito personal y autofinanciación | Banca y capital privado cerrado | Mercados públicos de renta fija y variable |
| **Coste de agencia** | Nulo (propietario = gestor) | Bajo o moderado (socios próximos) | Alto (propiedad atomizada y control delegado) |
| **Fiscalidad directa** | IRPF (escala progresiva) | Impuesto de Sociedades (25\% general) | Impuesto de Sociedades + doble imposición dividendos |

El rasgo económico definitorio de la gran sociedad anónima es la **separación entre propiedad y control**. Cientos de miles de accionistas dispersos aportan el capital asumiendo el riesgo residual, pero delegan la gestión cotidiana en ejecutivos profesionales con contrato laboral y facultades ejecutivas. Sin esa delegación resultaría imposible reunir decenas de miles de millones de euros para construir redes eléctricas, plataformas de computación en la nube o plantas de semiconductores; sin embargo, delegar abre la puerta a divergencias sistemáticas entre quien posee y quien decide.

## Por qué maximizar el valor de mercado y no el beneficio contable

Resulta tentador afirmar que una empresa debe "maximizar beneficios". Un análisis financiero estricto demuestra que ese objetivo resulta ambiguo y, en demasiadas ocasiones, contraproducente. Maximizar el beneficio neto contable del ejercicio falla por cuatro razones estructurales:

1. **Ignora el valor temporal del dinero.** Dos proyectos que generan 100.000 euros acumulados no valen lo mismo si uno los entrega en el mes 6 y otro en el año 12. El beneficio contable anual no descuenta el coste de oportunidad del capital comprometido en el balance.
2. **Omite el riesgo.** Un beneficio esperado de 1 millón de euros obtenido con una farmacéutica en fase clínica I exige una rentabilidad muy distinta a 1 millón garantizado por el arrendamiento de un local comercial a largo plazo.
3. **Confunde devengo contable con tesorería real.** Una compañía puede facturar con amplio margen y declarar un beneficio contable récord mientras entra en concurso de acreedores por acumular facturas incobradas de clientes y almacenes saturados (crecimiento descontrolado de las NOF).
4. **Se presta a miopía y manipulación contable.** Un directivo próximo a su jubilación o ligado a un bono anual puede disparar el beneficio a corto plazo recortando el mantenimiento preventivo, suprimiendo el presupuesto de I+D o eligiendo criterios de amortización más lentos. Todo ello engorda el resultado de este año destruyendo capacidad competitiva futura.

Frente a esa ambigüedad, la teoría financiera postula un criterio único y verificable: **maximizar el valor actual de mercado de las acciones existentes** ($P_0$, o la riqueza total del accionista $E = N \cdot P_0$). El precio de mercado sintetiza simultáneamente la cuantía de los flujos de caja futuros esperados, su momento de cobro y la prima de riesgo que los inversores exigen por soportarlos.

\begin{axioma}{Maximización de riqueza frente a externalidades}
Maximizar el valor de las acciones constituye una condición normativa coherente cuando los mercados son competitivos y no existen externalidades no internalizadas. Si una empresa cumple leyes ambientales, laborales y de competencia —y paga un salario justo a empleados, intereses pactados a acreedores e impuestos a Hacienda—, lo que queda como valor residual para los accionistas mide la diferencia entre el valor social que los clientes asignan al bien producido y el coste de oportunidad de los recursos consumidos. Cuando aparecen externalidades negativas (contaminación no tarifada, abuso de posición dominante), la regulación pública debe fijar precios o límites para alinear de nuevo valor privado y bienestar social.
\end{axioma}

## La teoría de la agencia y el gobierno corporativo

En su artículo fundacional de 1976, Michael Jensen y William Meckling definieron la **relación de agencia** como un contrato en el que una o más personas (el *principal*) encargan a otra (el *agente*) la realización de un servicio en su nombre, delegando autoridad decisoria. Si ambas partes maximizan su propia utilidad y poseen intereses divergentes, el agente no actuará espontáneamente en el mejor interés del principal.

El **coste total de agencia** se descompone en tres partidas tangibles:

$$\text{Costes de agencia} = \text{Gastos de supervisión} + \text{Gastos de fianza} + \text{Pérdida residual}$$

- **Gastos de supervisión (*monitoring costs*):** auditorías externas, consejos de administración con consejeros independientes, departamentos de control interno y sistemas de reporte financiero.
- **Gastos de fianza (*bonding costs*):** compromisos voluntarios que el directivo asume para dar credibilidad a su gestión (cláusulas de permanencia, prohibición de vender acciones durante años, contratos transparentes).
- **Pérdida residual (*residual loss*):** reducción inevitable en el valor de la empresa causada por las decisiones subóptimas del agente que no compensa vigilar porque vigilarlas costaría más que el daño evitado.

\begin{figure}[H]
\includetikz[0.96\linewidth]{src/tex/fig_agencia_gobierno.tex}
\caption{Red de conflictos de agencia entre accionistas, directivos y acreedores junto con los mecanismos de gobierno corporativo.}
\label{fig:agencia-gobierno}
\end{figure}

En la empresa endeudada emergen, además, **conflictos triangulares** (véase la Figura \ref{fig:agencia-gobierno}):

- **Accionistas contra directivos:** construcción de imperios (*empire building* mediante adquisiciones sobrepagadas que aumentan el prestigio y salario del CEO pero destruyen valor), resistencia a liquidar negocios obsoletos, rechazo a proyectos arriesgados pero con VAN positivo cuando el directivo teme perder su empleo si salen mal, y consumo excesivo de privilegios ejecutivos (*perks*).
- **Accionistas/directivos contra acreedores:** cuando la empresa se acerca a dificultades financieras, los accionistas poseen un incentivo perverso a asumir proyectos ruinosos de altísima volatilidad (*asset substitution* o "jugar con el dinero de los bonistas"), emitir deuda con igual o mayor prelación (*claim dilution*), o pagar dividendos extraordinarios vaciando la caja (*milking the property*), conducta que estudiaremos formalmente con teoría de opciones en la Parte IV.

\begin{casoreal}{Alineación imperfecta: la trampa de las opciones sobre acciones}
Durante las décadas de 1990 y 2000, muchas tecnológicas y entidades financieras diseñaron paquetes retributivos basados casi en exclusiva en \emph{stock options} a corto plazo. En apariencia, otorgar opciones ligaba el sueldo del directivo al precio de la acción. En la práctica, el diseño asimétrico de una opción call (ganancia ilimitada si sube la cotización, pérdida acotada a cero si quiebra) incentivó el apalancamiento extremo y la manipulación temporal de ingresos trimestrales. Los códigos modernos de buen gobierno corporativo en Europa y España corrigen ese sesgo exigiendo \textbf{acciones restringidas a largo plazo}, cláusulas \emph{clawback} de devolución de bonos ante reformulaciones contables y métricas vinculadas al Retorno sobre el Capital Invertido (ROIC) frente al coste de capital (WACC).
\end{casoreal}

\begin{puenteti}{Arquitectura de datos e integridad del dato financiero}
Desde la perspectiva de la ingeniería informática aplicada a las finanzas, un problema de agencia también es un problema de \textbf{asimetría de información}. Los sistemas ERP modernos, la trazabilidad inmutable de asientos (\emph{audit trails}), la automatización de controles internos mediante reglas de negocio (\emph{Segregation of Duties} o segregación de funciones en accesos) y los estándares abiertos de reporte digital como \textbf{XBRL / ESEF} en la Unión Europea reducen drásticamente el coste marginal de supervisión del principal sobre el agente.
\end{puenteti}

## Resumen y preguntas de autocomprobación

El valor de una empresa nace en el lado izquierdo del balance (activos reales con VAN positivo) y se distribuye y financia en el lado derecho. La dirección financiera persigue maximizar la riqueza actual de los propietarios en el mercado de capitales, evitando las trampas de corto plazo del beneficio contable. La existencia de delegación obliga a diseñar contratos de incentivos y órganos de supervisión cuyo equilibrio marca la calidad del gobierno corporativo.

**Cuestiones de repaso rápido:**

1. ¿Por qué un proyecto con un aumento previsto del beneficio neto del 20\% el próximo año puede reducir el valor actual de las acciones de la compañía?
2. Explica la diferencia funcional entre las competencias del tesorero y las del controlador dentro de una corporación.
3. Si los acreedores prevén que una empresa muy endeudada sustituirá activos seguros por proyectos especulativos, ¿quién termina pagando el coste ex ante mediante tipos de interés más altos o cláusulas restrictivas (*covenants*)?
