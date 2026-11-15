# Presupuesto de capital bajo riesgo, determinación de betas y equivalentes ciertos

\begin{epigrafe}{Utilizar un único coste de capital corporativo para todos los proyectos de una empresa destruye valor por partida doble: rechaza los proyectos seguros y aprueba los especulativos.}{Brealey, Myers y Allen}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Demostrar por qué cada proyecto debe descontarse al coste de oportunidad dictado por su propio riesgo sistemático y no al CMPC histórico medio de la matriz.
  \item Deducir el coste del capital económico de los activos ($r_A$) y su beta desapalancada ($\beta_A$) distinguiendo las convenciones UGR de estructura financiera ($FT = FP$ frente a $FT = FP + FA$).
  \item Explicar los factores estructurales que determinan $\beta_A$: ciclicidad de ingresos y grado de apalancamiento operativo ($\text{VA}(CF)/\text{VA}(\text{Activos})$).
  \item Evaluar proyectos secuenciales en varias fases (I+D frente a explotación) y dominar el método alternativo de los Equivalentes Ciertos ($EC_t$).
\end{itemize}
\end{objetivos}

## La falacia del CMPC corporativo único

Cuando una compañía evalúa proyectos reales mediante el Valor Actual Neto, una práctica burocrática tan común como peligrosa consiste en descontar todas las propuestas con una única tasa corporativa fija: el Coste Medio Ponderado de Capital (**CMPC** o WACC) calculado para el conjunto de la empresa en el último ejercicio.

Esta simplificación solo es válida si se cumplen dos hipótesis muy estrictas: el nuevo proyecto posee exactamente **el mismo riesgo de negocio** que la media de los activos existentes de la compañía, y se financia exactamente en **la misma proporción de deuda y capital** que la empresa matriz. En cuanto la empresa opera en divisiones heterogéneas (por ejemplo, redes eléctricas reguladas frente a generación eólica mercantil o consultoría digital), usar el CMPC promedio genera errores sistemáticos en ambas direcciones, tal como demuestra la Figura \ref{fig:cmpc-trampa}.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_cmpc_vs_capm_trampa.tex}
\caption{Regiones de error al comparar un CMPC corporativo horizontal ($10\%$) frente a la tasa correcta dictada por la SML según la beta de cada proyecto.}
\label{fig:cmpc-trampa}
\end{figure}

El análisis gráfico revela dos equivocaciones simétricas:

- **Rechazo erróneo de proyectos conservadores ($\beta < \beta_{\text{empresa}}$):** Un proyecto logístico de bajo riesgo ($\beta = 0{,}30$) ofrece una $\text{TIR} = 8{,}0\%$ mientras el mercado solo le exige un $5{,}45\%$ según la SML. Su VAN genuino es positivo; sin embargo, al compararlo con la valla del $10\%$ del CMPC corporativo se rechaza erróneamente dejando dinero sobre la mesa.
- **Aceptación errónea de proyectos especulativos ($\beta > \beta_{\text{empresa}}$):** Una aventura de expansión internacional arriesgada ($\beta = 1{,}70$) promete una $\text{TIR} = 11{,}8\%$. Como supera el $10\%$ del CMPC medio recibe luz verde de la dirección, cuando el mercado exige un $14{,}55\%$ por ese nivel de riesgo y el proyecto destruye riqueza neta para los accionistas.

**Regla fundamental del Tema 6 UGR:** la tasa de descuento relevante pertenece al **proyecto evaluado**, nunca a la empresa que lo financia.

## Coste de capital de los activos ($r_A$) y desapalancamiento de beta ($\beta_A$)

Para medir la rentabilidad mínima exigida a un negocio puro (sin mezcla financiera), debemos mirar el lado izquierdo del balance: los activos reales. Por conservación del valor —puesto que los flujos totales generados por los activos se reparten íntegramente entre los tenedores de deuda ($D$) y los accionistas ($E$)—, la rentabilidad esperada de los activos ($r_A$, o coste económico sin deuda) equivale siempre a la media ponderada del coste de la deuda ($r_D$) y del coste de los recursos propios ($r_E$) medidos a **valores de mercado** ($V = D + E$):

$$r_A = \frac{D}{D + E}\, r_D + \frac{E}{D + E}\, r_E$$

Exactamente por la misma linealidad (aditividad de las betas en cartera), la **beta económica o desapalancada de los activos ($\beta_A$)** es el promedio ponderado por valor de mercado de la beta de la deuda ($\beta_D$) y la beta observada de las acciones cotizadas ($\beta_E$):

$$\beta_A = \frac{D}{D + E}\, \beta_D + \frac{E}{D + E}\, \beta_E$$

\begin{claseugr}{Las dos situaciones de financiación en los problemas de la UGR}
En el Tema 6 y en los exámenes de Dirección Financiera de la UGR se distinguen formalmente dos escenarios al evaluar el coste económico de un proyecto o utilizar una empresa comparable (\emph{pure play}):
\begin{enumerate}
  \item \textbf{Financiación íntegramente con fondos propios ($FT = FP \implies D = 0$):} la totalidad de la financiación corresponde al patrimonio neto ($V = E$). En ausencia de deuda, la beta de los activos coincide con la beta de las acciones ($\beta_A = \beta_E$) y el coste del capital económico iguala al rendimiento exigido a los fondos propios ($r_A = r_E = r_f + \beta_A \cdot \text{PRM}$).
  \item \textbf{Financiación mixta con fondos propios y deuda ($FT = FP + FA \implies V = E + D$):} el apalancamiento financiero amplifica la volatilidad del beneficio residual del accionista. Aunque los activos del negocio mantengan intacto su riesgo operativo ($\beta_A$ constante), las acciones cotizadas muestran una beta apalancada mayor ($\beta_E > \beta_A$). En deuda corporativa de alta calidad crediticia suele aceptarse en primera aproximación $\beta_D \approx 0$ (o un valor bajo dado en enunciado, por ejemplo $\beta_D = 0{,}15$).
\end{enumerate}
Por eso, para importar la beta desde una empresa cotizada comparable hacia un proyecto propio con distinta estructura de deuda, primero se \textbf{desapalanca} $\beta_E$ para hallar $\beta_A$ del negocio puro y, si hace falta la tasa apalancada, se \textbf{reapalanca} después con el endeudamiento del proyecto (como detallaremos en la Parte III con los escudos fiscales).
\end{claseugr}

\begin{casoreal}{Cálculo de $\beta_A$ y $r_A$ a partir de una comparable cotizada}
Supongamos que una firma diversificada planea entrar en el negocio de gestión de centros de datos. Identifica una empresa comparable pura en el sector (\emph{pure play}) cuya acción cotiza con una beta estimada $\beta_E = 1{,}30$. Su capitalización bursátil asciende a $E = 600$ millones \texteuro{} y el valor de mercado de su deuda financiera es $D = 400$ millones \texteuro{} (con deuda calificada \emph{investment grade}, $\beta_D = 0{,}10$). En el mercado, $r_f = 3{,}5\%$ y la prima de riesgo de mercado es $\text{PRM} = 6{,}5\%$.

\begin{enumerate}
  \item \textbf{Desapalancamiento hasta la beta de activos ($\beta_A$):}
  $$V = D + E = 400 + 600 = 1.000\ \text{M\texteuro}, \qquad \frac{D}{V} = 0{,}40, \qquad \frac{E}{V} = 0{,}60$$
  $$\beta_A = 0{,}40 \times 0{,}10 + 0{,}60 \times 1{,}30 = 0{,}04 + 0{,}78 = 0{,}82$$
  \item \textbf{Coste de capital económico del proyecto puro ($r_A$):}
  $$r_A = 3{,}5\% + 0{,}82 \times 6{,}5\% = 3{,}5\% + 5{,}33\% = 8{,}83\%$$
\end{enumerate}
Nótese el error que cometeríamos aplicando directamente $\beta_E = 1{,}30$: exigiríamos $3{,}5\% + 1{,}30 \times 6{,}5\% = 11{,}95\%$, castigando la rentabilidad intrínseca del activo real por culpa del endeudamiento financiero de la comparable.
\end{casoreal}

## Qué determina realmente la beta económica ($\beta_A$)

Más allá de las regresiones estadísticas pasadas —que a menudo faltan en proyectos nuevos, pymes no cotizadas o divisiones internas—, el director financiero debe entender las **causas económicas fundamentales** que gobiernan la $\beta_A$ de un activo real:

1. **Ciclicidad de los ingresos del sector:** Las empresas cuyos ingresos dependen fuertemente de la evolución del PIB (automóviles, construcción residencial, acero, aerolíneas de negocios, lujo) tienen betas elevadas porque sus flujos caen con fuerza en recesiones y despegan en expansiones. Por el contrario, sectores acíclicos o básicos (alimentación de primera necesidad, farmacia hospitalaria, suministro eléctrico y agua regulados) muestran ventas estables y betas reducidas.
2. **Apalancamiento operativo (proporción de costes fijos frente a variables):** De la misma manera que la deuda financiera amplifica el riesgo del accionista mediante intereses fijos, los **costes fijos operativos** (alquileres de largo plazo, mantenimiento de grandes plantas automatizadas, plantilla estructural fija) amplifican la sensibilidad del BAIT ante pequeñas oscilaciones de las ventas. Aplicando la misma lógica aditiva sobre el valor presente de los ingresos ($\text{VA}(\text{Ingresos})$) igualado al valor presente de los costes fijos ($\text{VA}(CF)$), los costes variables ($\text{VA}(CV)$) y los activos ($\text{VA}(\text{Activos})$), se demuestra la relación estructural clave del Tema 6:

$$\beta_{\text{activos}} = \beta_{\text{ingresos}} \left(1 + \frac{\text{VA}(\text{Costes Fijos})}{\text{VA}(\text{Activos})}\right)$$

Cuanto mayor es la carga de costes fijos respecto al valor del activo real, mayor es la $\beta_A$ económica incluso con cero deuda bancaria. Por eso una aerolínea llena de contratos de *leasing* y tripulaciones fijas posee una beta operativa muy superior a una agencia de viajes que trabaja a comisión variable, aunque ambas dependan del mismo flujo turístico.

3. **Otros factores citados en la literatura y el aula:** el tamaño de la firma, el horizonte temporal o **duración de los flujos** (proyectos cuyos flujos se concentran en años muy lejanos, como biotecnología o infraestructura verde, resultan más sensibles a variaciones de la tasa de descuento real) y el poder de fijación de precios en mercados oligopolísticos.

\begin{trampa}{Riesgo específico en la tasa de descuento frente a los flujos esperados}
¿Debemos subir la tasa de descuento $r$ porque una perforación petrolífera tiene un 70\% de probabilidad de resultar seca, o porque una fábrica puede sufrir un incendio, una huelga o una sanción regulatoria? \textbf{Nunca.} Esos riesgos son idiosincráticos (diversificables) o asimétricos, no riesgo de mercado sistemático. La regla ortodoxa exige reflejar los escenarios negativos en el \textbf{numerador} (calculando el flujo esperado ponderado por probabilidades $\mathbb{E}[FCL_t] = \sum p_s FCL_{t,s}$, ya sea positivo o negativo), manteniendo en el \textbf{denominador} exclusivamente la tasa SML acorde a la $\beta_A$ sistemática del negocio.
\end{trampa}

## Proyectos secuenciales multifase y método de los Equivalentes Ciertos

En sectores como el desarrollo farmacéutico, el software empresarial, la exploración minera o el despliegue por fases de franquicias (ejemplos tratados en el Tema 6 como el proyecto piloto frente a expansión nacional o las fases farmacéuticas I, II y III), el riesgo cambia drásticamente a lo largo del tiempo.

La Figura \ref{fig:arbol-fases} esquematiza esta estructura de decisión en dos etapas:

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_arbol_fases_riesgo.tex}
\caption{Estructura en dos etapas (Fase I piloto de alto riesgo frente a Fase II de explotación estable) y resolución por inducción hacia atrás.}
\label{fig:arbol-fases}
\end{figure}

- Durante la **Fase I** (I+D o establecimiento piloto), muchos proyectos poseen riesgo técnico diversificable (si la molécula funciona o no en laboratorio no depende del PIB), por lo que su resultado esperado pondera la probabilidad de éxito $p$ en el numerador y puede resolverse mediante árboles de decisión valorados por **inducción hacia atrás**. Cuando la propia viabilidad del piloto está correlacionada con la fase del ciclo (o cuando el proyecto presenta costes fijos iniciales altísimos durante el despegue), se asigna una tasa $k_1$ superior para descontar el periodo inicial hasta la fecha de resolución de incertidumbre, aplicando una tasa de madurez menor $k_2 < k_1$ a los flujos estables de explotación de la Fase II.

### El método alternativo de los Equivalentes Ciertos ($EC_t$)

Descontar un flujo futuro esperado $\mathbb{E}[FC_t]$ mediante una **Tasa de Descuento Ajustada al Riesgo (TDAR)** única $k = r_f + \theta$ contiene una hipótesis implícita restrictiva: asume que la penalización acumulada por incertidumbre crece de forma estrictamente exponencial con el tiempo $t$. Sin embargo, en muchos contratos de ingeniería o fases clínicas, casi toda la incertidumbre queda despejada en los primeros 12 o 24 meses, manteniéndose los ingresos posteriores prácticamente garantizados por contrato.

El enfoque teóricamente más puro —el método de los **Equivalentes Ciertos ($EC_t$)**— separa por completo los dos componentes del descuento (tiempo frente a riesgo):

1. En el **numerador**, transforma cada flujo incierto esperado $\mathbb{E}[FC_t]$ en su **equivalente cierto** $EC_t = \alpha_t \cdot \mathbb{E}[FC_t]$, donde $\alpha_t \in [0, 1]$ representa el porcentaje de ese flujo que el inversor aceptaría cobrar de forma 100\% segura para ser indiferente respecto a la lotería aleatoria del año $t$.
2. En el **denominador**, descuenta esos flujos ya libres de riesgo exclusivamente al **tipo libre de riesgo $r_f$** para capturar tan solo el valor temporal del dinero:

$$\text{VAN} = -I_0 + \sum_{t=1}^{T} \frac{EC_t}{(1 + r_f)^t} = -I_0 + \sum_{t=1}^{T} \frac{\alpha_t \, \mathbb{E}[FC_t]}{(1 + r_f)^t}$$

Cuando la TDAR constante $k$ sí resulta exacta año tras año, igualando término a término $\frac{EC_t}{(1+r_f)^t} = \frac{\mathbb{E}[FC_t]}{(1+k)^t}$ se obtiene la relación de equivalencia exacta que plasma la Figura \ref{fig:equivalente-cierto}:

$$\alpha_t = \left(\frac{1 + r_f}{1 + k}\right)^t$$

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_equivalente_cierto.tex}
\caption{Comparación del factor implícito de descuento por riesgo en una TDAR constante ($\alpha_t = [(1+r_f)/(1+k)]^t$) frente a una senda de Equivalentes Ciertos cuando el riesgo se resuelve pronto.}
\label{fig:equivalente-cierto}
\end{figure}

De igual forma, partiendo del CAPM uniperiodo, el equivalente cierto del flujo en el periodo $t$ viene dado directamente por el precio de mercado de su covarianza con la cartera de mercado ($r_f$ más la prima ajustada al flujo en dólares o euros). En la práctica corporativa, cuando la incertidumbre se resuelve de forma irregular en hitos discretos, los equivalentes ciertos (o su evolución moderna mediante opciones reales, objeto del Capítulo 11) superan con claridad las rigideces de aplicar una TDAR constante.

## Resumen y preguntas de autocomprobación

Cada proyecto debe medirse con su propia vara de riesgo sistemático ($\beta_A$): usar un CMPC corporativo único destruye valor sistemáticamente en firmas diversificadas. Cuando no conocemos la beta directamente, podemos extraer $\beta_A$ desapalancando comparables puros ($FT = FP + FA \to FT = FP$), ajustando por apalancamiento operativo si cambia la proporción de costes fijos y corrigiendo asimetrías técnicas en los flujos esperados o mediante equivalentes ciertos ($EC_t$).

**Cuestiones de repaso rápido:**

1. Una empresa cotizada comparable en energías renovables tiene $\beta_E = 1{,}10$, valor de mercado de acciones $E = 500\ \text{M\texteuro}$ y deuda sin riesgo ($\beta_D = 0$) de valor $D = 300\ \text{M\texteuro}$. Si $r_f = 3{,}5\%$ y $\text{PRM} = 6\%$, calcula la beta desapalancada $\beta_A$ y el coste de capital económico $r_A$ de un proyecto idéntico financiado al 100\% con fondos propios.
2. Si otro proyecto similar tiene exactamente la misma ciclicidad de ingresos ($\beta_{\text{ingresos}}$) pero sustituye mano de obra subcontratada por una gran planta automatizada propia (duplicando el cociente $\text{VA}(CF)/\text{VA}(\text{Activos})$), ¿aumentará o disminuirá su $\beta_A$? Razona por qué.
3. Si $\mathbb{E}[FC_2] = 100.000\ \text{\euro}$, el equivalente cierto estimado en ese periodo es $EC_2 = 82.000\ \text{\euro}$ y el tipo libre de riesgo es $r_f = 3{,}5\%$, calcula el valor actual de ese flujo y determina qué TDAR constante anual $k$ arrojaría el mismo valor actual en $t=2$.
