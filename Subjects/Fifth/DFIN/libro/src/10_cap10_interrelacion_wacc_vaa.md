# Interrelación entre inversión y financiación: WACC, VAA y FTE

\begin{epigrafe}{El método del WACC es el camino rápido cuando el endeudamiento relativo permanece estable; el VAA es la hoja de bisturí cuando la financiación cambia de forma o aporta subsidios.}{Brealey, Myers y Allen}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Formular el Coste Medio Ponderado de Capital después de impuestos ($K_{mpc,di}$) a valores de mercado y conocer cuándo es válido descontar con él los flujos de caja libre.
  \item Dominar el método de los Tres Pasos (ajuste de apalancamiento y riesgo operativo) en sus dos variantes académicas: esquema permanente de Modigliani--Miller y reequilibrio periódico de Miles--Ezzell (1980).
  \item Aplicar el método del Valor Actual Ajustado (VAA / APV) descomponiendo el VAN base sin deuda, los costes de emisión, los préstamos subvencionados y los ahorros fiscales reales (caso \emph{Galatino S.A.}).
  \item Resolver el método del Flujo para el Accionista (FTE) y demostrar numéricamente la equivalencia rigurosa entre WACC, VAA y FTE bajo condiciones consistentes.
\end{itemize}
\end{objetivos}

## Tres caminos para valorar un proyecto apalancado

Hasta el Capítulo 8 asumimos implícitamente que los proyectos se evaluaban como si se financiasen al 100\% con fondos propios ($r_A$). En cuanto un proyecto real se financia combinando patrimonio neto y deuda financiera deducible fiscalmente ($\tau_c$), la interacción entre decisiones de inversión y financiación obliga a elegir entre tres metodologías equivalentes si se aplican con coherencia:

1. **Coste Medio Ponderado de Capital después de impuestos (WACC / $K_{mpc,di}$):** conserva en el numerador el Flujo de Caja Libre puro ($FCL_t$, sin deuda) e introduce el beneficio fiscal de los intereses **dentro del denominador** reduciendo la tasa de descuento.
2. **Valor Actual Ajustado (VAA / APV de Stewart Myers, 1974):** desdobla el problema en piezas aditivas: valora primero el negocio como si fuese 100\% propio ($\text{VAN}_{\text{base}}$ a $r_A$) y suma aparte el valor actual de todos los efectos secundarios de la financiación elegida.
3. **Flujo para el Accionista (FTE, *Flow to Equity*):** resta explícitamente del FCL los intereses netos de impuestos y añade los movimientos del principal de deuda para obtener la caja residual exclusiva del socio ($\text{FCA}_t$), descontándola al coste apalancado de las acciones ($r_E$).

La Figura \ref{fig:wacc-vaa-decision} sintetiza qué herramienta conviene desplegar según la política financiera de la empresa.

\begin{figure}[H]
\includetikz[0.96\linewidth]{src/tex/fig_wacc_vs_vaa_decision.tex}
\caption{Árbol de selección entre el método CMPC/WACC, el Valor Actual Ajustado (VAA) y el Flujo para el Accionista (FTE).}
\label{fig:wacc-vaa-decision}
\end{figure}

## El WACC después de impuestos ($K_{mpc,di}$) y sus hipótesis ocultas

El **Coste Medio Ponderado de Capital después de impuestos** (denotado $K_{mpc,di}$ en las diapositivas del Tema 8 UGR, o $\text{WACC}$) pondera el coste efectivo tras impuestos de cada fuente de financiación a sus **pesos objetivos de valor de mercado** ($V = E + D$):

$$K_{mpc,di} = \frac{E}{V}\, r_E + \frac{D}{V}\, r_D \, (1 - \tau_c)$$

Cuando existen acciones preferentes ($P$) u otras categorías de deuda con distinto coste, simplemente se añade un sumando ponderado por su peso en $V$, teniendo cuidado de que solo los intereses de deuda gozan del escudo $(1 - \tau_c)$, nunca los dividendos preferentes ni ordinarios.

\begin{trampa}{Tres errores fatales al calcular el WACC}
\begin{enumerate}
  \item \textbf{Usar valores contables en lugar de valores de mercado:} las ponderaciones $E/V$ y $D/V$ deben reflejar lo que hoy pagarían los inversores en mercado por el capital y la deuda, nunca las cifras históricas de capital social y reservas escrituradas hace décadas en el balance contable.
  \item \textbf{Incluir deuda comercial gratuita en $D$:} proveedores y acreedores a corto plazo sin interés explícito forman parte de las NOF descontadas en el $FCL$ (restando en $\text{NOF} = \text{Existencias} + \text{Clientes} - \text{Proveedores}$); solo la \textbf{deuda financiera remunerada} a corto y largo plazo entra en $D$.
  \item \textbf{Aplicar el WACC cuando cambia el ratio $D/V$ año a año:} si un proyecto amortiza su préstamo en cuotas crecientes hasta $D_T = 0$ mientras la empresa no reequilibra su deuda objetivo en proporción al valor vivo del proyecto, un WACC fijo sobreestima o subestima el escudo fiscal y distorsiona el resultado frente al VAA.
\end{enumerate}
\end{trampa}

## El algoritmo de los Tres Pasos para ajustar el WACC

¿Qué hace una empresa si conoce el WACC o la beta de un comparable cotizado que tiene otro nivel de endeudamiento distinto al del proyecto que desea evaluar? Por ejemplo, una compañía con ratio $D/V = 20\%$ quiere valorar un proyecto de infraestructuras que se financiará en un ratio objetivo $D'/V' = 50\%$. El procedimiento estándar en las aulas de la UGR y en Brealey--Myers consiste en el **Algoritmo de los Tres Pasos**, esquematizado en la Figura \ref{fig:tres-pasos}.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_tres_pasos_apalancamiento.tex}
\caption{Algoritmo de los Tres Pasos para trasladar tasas y betas entre distintas estructuras de endeudamiento ($D/V \to D'/V'$).}
\label{fig:tres-pasos}
\end{figure}

Un matiz técnico de enorme precisión diferencia dos fórmulas según la política de ajuste de deuda elegida por la empresa:

\begin{axioma}{Deuda fija perpetua (MM / Hamada) frente a ratio $D/V$ constante (Miles--Ezzell)}
\begin{enumerate}
  \item \textbf{Esquema de Miles y Ezzell (1980) --- Ratio objetivo $D/V$ reequilibrado continuamente:} es el supuesto implícito habitual al usar la fórmula estándar de los tres pasos con WACC en el Tema 8 UGR y en Brealey--Myers. Como la deuda sube o baja cada año en proporción directa al valor futuro de los activos, los ahorros fiscales futuros soportan casi el mismo riesgo sistemático que los activos (salvo el escudo ya seguro del periodo en curso). En la convención exacta de clase sin ajuste de un periodo de desfase (reequilibrio continuo), desapalancar y reapalancar utiliza las fórmulas limpias sin $\tau_c$:
  $$r_A = \frac{D}{V}r_D + \frac{E}{V}r_E \quad \Longrightarrow \quad r_E' = r_A + \frac{D'}{E'}(r_A - r_D') \quad \Longrightarrow \quad K_{mpc,di}' = \frac{E'}{V'}r_E' + \frac{D'}{V'}r_D'(1-\tau_c)$$
  (Y su análogo exacto con ajuste anual discreto de Miles--Ezzell sería $\beta_E' = \beta_A + \frac{D'}{E'}(\beta_A - \beta_D')\bigl(1 - \frac{\tau_c r_D'}{1+r_D'}\bigr)$).
  \item \textbf{Esquema de Modigliani--Miller (1963) / Hamada (1972) --- Deuda constante en euros:} cuando el importe de la deuda $D$ permanece fijo en unidades monetarias durante un horizonte muy largo o perpetuo, el riesgo del escudo fiscal iguala al riesgo de la propia deuda ($\beta_D$), por lo que las fórmulas de desapalancamiento y reapalancamiento incorporan el factor $(1 - \tau_c)$:
  $$\beta_A = \frac{\beta_E + \frac{D}{E}(1-\tau_c)\beta_D}{1 + (1-\tau_c)\frac{D}{E}}, \qquad \beta_E' = \beta_A + (1 - \tau_c)\frac{D'}{E'}(\beta_A - \beta_D')$$
\end{enumerate}
En los ejercicios del Tema 8 de la UGR con el procedimiento de los Tres Pasos y WACC, se aplica por defecto la \textbf{convención Miles--Ezzell continua (Pasos 1 y 2 sin $\tau_c$, Paso 3 con $(1-\tau_c)$ en el WACC)}, salvo cuando el problema especifica explícitamente deuda fija perpetua o fórmulas de Hamada/MM.
\end{axioma}

## El Valor Actual Ajustado (VAA / APV)

Propuesto por Stewart Myers en 1974, el **Valor Actual Ajustado ($\text{VAA}$)** evita por completo cualquier fórmula compleja de reapalancamiento del WACC y resuelve con elegancia las fricciones reales de la financiación mediante la regla aditiva de conservación de valor:

$$\text{VAA} = \text{VAN}_{\text{base}}(r_A) + \sum \text{VA}(\text{Efectos derivados de la financiación})$$

Desplegado término a término en los problemas corporativos de la UGR:

$$\begin{aligned}
\text{VAA} &= \text{VAN}_{\text{base}}(r_A) - \text{Costes de emisión} + \text{VA}(\text{Ahorro fiscal intereses}) \\
&\quad + \text{VA}(\text{Préstamo subvencionado}) - \text{VA}(\text{Costes insolvencia})
\end{aligned}$$

Cada bloque se valora a la tasa de riesgo que corresponde a *su propio flujo*:

1. **$\text{VAN}_{\text{base}}$:** se calcula descontando los Flujos de Caja Libre operativos ($FCL_t$) exclusivamente al **coste económico sin deuda ($r_A$)** del proyecto. Responde si el negocio es intrínsecamente bueno antes de buscar financiación especial.
2. **Costes de emisión:** comisiones bancarias, colocación bursátil y aranceles notariales pagados en $t=0$ por emitir acciones o bonos (ajustados por su deducibilidad fiscal si procede, por ejemplo comisiones deducibles al tipo $\tau_c$ multiplicadas por $(1-\tau_c)$ cuando así lo indique el enunciado).
3. **$\text{VA}(\text{Ahorro fiscal de la deuda})$:** si el proyecto incorpora un calendario fijo y conocido de deuda $D_t$ con intereses deducibles $I_t = r_D D_{t-1}$, el escudo fiscal de cada año es $\tau_c \cdot I_t$, que se actualiza al propio **coste de mercado de la deuda $r_D$** (puesto que la certeza de cobrar el ahorro fiscal está ligada al cumplimiento del servicio de la deuda).
4. **$\text{VA}(\text{Préstamo subvencionado})$:** si un organismo público o proveedor estratégico concede financiación por importe $D_0$ a un tipo privilegiado $r_{\text{sub}}$ inferior al tipo de mercado $r_D$ correspondiente a su riesgo crediticio, el proyecto recibe un regalo financiero cuyo valor actual es la diferencia entre el principal recibido hoy y el valor actual de todas las cuotas pactadas (principal más intereses al tipo $r_{\text{sub}}$) **descontadas al tipo de mercado $r_D$**.

\begin{casoreal}{Aplicación del VAA con costes de emisión y deuda específica (estilo Caso Galatino S.A. UGR)}
Supongamos una compañía que analiza un proyecto industrial con coste inicial $I_0 = 1.000.000\ \text{\euro}$ y flujos libres perpetuos esperados de $FCL = 135.000\ \text{\euro}$ anuales. Para empresas de este sector sin deuda, el mercado exige $r_A = 12\%$. El proyecto permite soportar $D = 400.000\ \text{\euro}$ de deuda perpetua al $r_D = 6\%$ de mercado ($\tau_c = 25\%$). Para obtener los $600.000\ \text{\euro}$ restantes mediante ampliación de capital se incurren en unos costes netos de emisión del 4\% sobre el importe emitido, y la emisión de deuda conlleva gastos de apertura de $8.000\ \text{\euro}$.

\begin{enumerate}
  \item \textbf{VAN base sin financiación:}
  $$\text{VAN}_{\text{base}} = -1.000.000 + \frac{135.000}{0{,}12} = -1.000.000 + 1.125.000 = +125.000\ \text{\euro}$$
  \item \textbf{Costes totales de emisión ($t=0$):}
  $$0{,}04 \times 600.000 + 8.000 = 24.000 + 8.000 = 32.000\ \text{\euro}$$
  (Nótese que si el proyecto necesitase emitir más acciones para absorber los propios costes de emisión brutos $C_{\text{em}} = 0{,}04(600.000 + C_{\text{em}})$, el bruto sería $600.000/(1-0{,}04) - 600.000 = 25.000\ \text{\euro}$; aquí seguimos el enunciado neto estándar en primera ronda o el que precise el supuesto).
  \item \textbf{VA del ahorro fiscal de la deuda:}
  $$\text{VA}(\text{Escudo}) = \tau_c \cdot D = 0{,}25 \times 400.000 = +100.000\ \text{\euro}$$
  \item \textbf{VAA integrado:}
  $$\text{VAA} = +125.000 - 32.000 + 100.000 = +193.000\ \text{\euro} > 0$$
\end{enumerate}
Obsérvese la potencia diagnóstica del VAA: un WACC tradicional nunca habría captado de forma limpia los $32.000\ \text{\euro}$ puntuales de emisión ni permitiría aislar qué parte del éxito ($125.000\ \text{\euro}$) procede de la actividad productiva real y qué parte ($68.000\ \text{\euro}$ netos) procede de la ingeniería financiera y fiscal.
\end{casoreal}

## El método del Flujo para el Accionista (FTE) y equivalencia numérica

El tercer enfoque —**Flujo de Caja para el Accionista ($\text{FCA}$ o *Flow to Equity*, FTE)**— valora directamente la riqueza residual que termina en el bolsillo de los propietarios después de pagar a la banca e ingresar nuevos préstamos o devolver principal:

$$\text{FCA}_0 = -(I_0 - D_0) = -E_0^{\text{aportado}}, \qquad \text{FCA}_t = FCL_t - I_t(1 - \tau_c) + (D_t - D_{t-1})$$

donde $D_t - D_{t-1}$ refleja la variación neta de deuda (entrada de caja si se toma nueva deuda, salida de caja negativa si se amortiza principal en el año $t$). Este flujo residual $\text{FCA}_t$ incorpora ya todo el riesgo operativo y financiero, por lo que **debe descontarse exactamente a la tasa apalancada de los accionistas $r_E$** (nunca a $r_A$ ni al WACC):

$$\text{VAN}_{\text{FTE}} = \text{FCA}_0 + \sum_{t=1}^{T} \frac{\text{FCA}_t}{(1 + r_E)^t}$$

### Comprobación de equivalencia matemática en perpetuidad

Supongamos un proyecto perpetuo sin costes de emisión ni subvenciones, con inversión $I_0 = 1.000$, flujo operativo perpetuo $FCL = 120$, $r_A = 10\%$, $\tau_c = 25\%$, y política constante de ratio $D/V = 40\%$ con $r_D = 5\%$ (para comprobar el caso MM con deuda perpetua fija en $D = 400$):

1. **Vía VAA (con deuda fija perpetua $D = 400$):** $\text{VAN}_{\text{base}} = -1.000 + \frac{120}{0{,}10} = +200$. Añadimos $\tau_c D = 0{,}25 \times 400 = +100$. Luego $\text{VAA} = +300$, lo que implica un valor total de los activos apalancados $V_L = 1.000 + 300 = 1.300$ (de los cuales $D = 400$ y $E = 900$).
2. **Vía FTE (a partir de $E = 900$, $D = 400$):** aplicando MM II con impuestos usando los pesos sobre valor total de mercado del proyecto ($D/E = 400/900 = 4/9$):
$$r_E = 10\% + \frac{400}{900}(10\% - 5\%)(1 - 0{,}25) = 10\% + \frac{4}{9}\times 3{,}75\% = 11{,}6667\%$$
El flujo perpetuo para el accionista es $\text{FCA} = 120 - (0{,}05 \times 400)(1 - 0{,}25) = 120 - 15 = 105$. Como los accionistas aportan $1.000 - 400 = 600$ hoy:
$$\text{VAN}_{\text{FTE}} = -600 + \frac{105}{0{,}116667} = -600 + 900 = +300$$
3. **Vía WACC exacto sobre valores de mercado ($E/V = 900/1.300$, $D/V = 400/1.300$):**
$$K_{mpc,di} = \frac{900}{1.300}(11{,}6667\%) + \frac{400}{1.300}(5\%)(0{,}75) = 8{,}0769\% + 1{,}1538\% = 9{,}23077\%$$
$$\text{VAN}_{\text{WACC}} = -1.000 + \frac{120}{0{,}0923077} = -1.000 + 1.300 = +300$$

Los tres caminos arrojan el **mismo céntimo exacto ($+300$)** cuando $V_L$ y la tasa apalancada respetan la misma estructura financiera y horizonte temporal de la deuda.

## Resumen y preguntas de autocomprobación

La interacción entre inversión y financiación admite tres formulaciones rigurosas según el patrón de deuda. Cuando la firma rebalancea su endeudamiento para mantener un porcentaje fijo $D/V$, el WACC después de impuestos (calculado en tres pasos si cambia el sector o el apalancamiento) ofrece el método más directo. Cuando el calendario de deuda está preestablecido en euros, existen subvenciones o costes de emisión relevantes, el VAA aísla con máxima transparencia cada fuente de valor. En operaciones muy apalancadas con calendario cerrado de amortización de deuda, el método FTE mide directamente el retorno residual del capital propio.

**Cuestiones de repaso rápido:**

1. Una empresa del sector logístico ($r_E = 11{,}6\%$, $r_D = 4{,}5\%$, $D/V = 30\%$, $\tau_c = 25\%$) estudia un proyecto con el mismo riesgo de negocio que financiará elevando su ratio objetivo hasta $D'/V' = 50\%$ al mismo coste de deuda ($4{,}5\%$). Aplica los Tres Pasos (convención continua de clase) para hallar $r_A$, $r_E'$ y el nuevo $K_{mpc,di}'$.
2. Un ayuntamiento concede a una empresa industrial un préstamo bonificado a 3 años de $600.000\ \text{\euro}$ al $2\%$ anual (sistema americano: solo intereses de $12.000\ \text{\euro}$ en $t=1,2$ y devolución de $612.000\ \text{\euro}$ en $t=3$) cuando el coste de mercado de su deuda es $r_D = 6\%$. Ignorando impuestos en este apartado, ¿cuál es el Valor Actual neto de la subvención financiera del préstamo en el VAA?
3. Explica por qué sería un grave error descontar los Flujos para el Accionista ($\text{FCA}_t$) utilizando el WACC en lugar de $r_E$.
