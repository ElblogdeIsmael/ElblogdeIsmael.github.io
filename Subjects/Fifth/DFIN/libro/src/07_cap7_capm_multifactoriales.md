# El modelo CAPM y modelos multifactoriales (APT y Fama-French)

\begin{epigrafe}{El mercado no remunera el riesgo que puedes eliminar diversificando; solo paga una prima por el riesgo sistemático que nadie puede esquivar.}{William Sharpe}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Deducir el coeficiente beta ($\beta_i$) como medida marginal de contribución de un activo individual al riesgo de la cartera de mercado.
  \item Formular la Línea del Mercado de Valores (SML) del CAPM y distinguir sin confusión su ámbito de validez frente a la Línea del Mercado de Capitales (CML).
  \item Interpretar la recta característica de regresión, el Alfa de Jensen ($\alpha_i$), el coeficiente de determinación $R^2$ y el riesgo específico.
  \item Evaluar las limitaciones empíricas del CAPM (crítica de Roll y anomalías de tamaño y valor) frente al modelo APT de Ross y los factores de Fama--French.
\end{itemize}
\end{objetivos}

## De Markowitz al equilibrio de mercado: derivación de Beta y el CAPM

El modelo de Markowitz permite construir carteras óptimas, pero no explica todavía **qué rentabilidad debe exigir el mercado a una acción individual** (o a un proyecto de inversión real dentro de una empresa). Durante la década de 1960, William Sharpe (1964), John Lintner (1965) y Jan Mossin (1966) cerraron la teoría deduciendo el equilibrio general de precios de los activos financieros, conocido como **CAPM (*Capital Asset Pricing Model*)**.

Supongamos que todos los inversores comparten expectativas homogéneas sobre rentabilidades y covarianzas y aplican el criterio media--varianza en mercados sin fricciones. En equilibrio, la cartera tangente óptima $M$ que todos mantienen en proporción es necesariamente la **cartera de mercado global** (la suma ponderada por capitalización de todos los activos arriesgados existentes). Si un inversor añade un desplazamiento marginal $\delta$ de su riqueza hacia la acción $i$, la variación marginal en la varianza de la cartera $M$ es proporcional exactamente a su covarianza con el mercado, $\text{Cov}(R_i, R_M)$. Normalizando esa covarianza por la varianza total del mercado obtenemos el parámetro central de las finanzas modernas: el **coeficiente Beta ($\beta_i$)**:

$$\beta_i = \frac{\text{Cov}(R_i, R_M)}{\sigma_M^2} = \rho_{i,M}\cdot \frac{\sigma_i}{\sigma_M}$$

El coeficiente $\beta_i$ mide la **sensibilidad esperada del activo $i$ ante movimientos del mercado**: si $\beta_i = 1{,}25$ y el mercado sube un 1\% por encima de lo esperado, la acción $i$ tiende a subir en promedio un 1,25\% adicional. Para que ningún inversor desee reajustar las ponderaciones de $M$ en equilibrio, la prima de riesgo exigida a cualquier activo individual debe ser exactamente proporcional a su beta. Surge así la ecuación de la **Línea del Mercado de Valores (SML, *Security Market Line*)**:

$$\mathbb{E}[R_i] = r_f + \beta_i \, \Bigl(\mathbb{E}[R_M] - r_f\Bigr)$$

De esta identidad lineal sobresalen tres referencias inmediatas:

- **Activo libre de riesgo:** $\beta = 0 \implies \mathbb{E}[R] = r_f$.
- **Cartera de mercado $M$:** $\beta_M = \frac{\text{Cov}(R_M,R_M)}{\sigma_M^2} = 1 \implies \mathbb{E}[R] = \mathbb{E}[R_M]$.
- **Activos defensivos frente a agresivos:** los títulos de alimentación o suministro eléctrico suelen tener $\beta < 1$ (baja ciclicidad), mientras que aerolíneas, banca o tecnología de alto crecimiento presentan $\beta > 1$ (alta sensibilidad al ciclo). Incluso existen títulos o coberturas con $\beta < 0$ (activos refugio contracíclicos) cuya rentabilidad exigida es inferior a $r_f$ porque estabilizan la cartera global en crisis.

\begin{axioma}{Aditividad de la Beta en carteras y empresas}
Gracias a la linealidad del operador covarianza, la beta de cualquier cartera de títulos (o de una corporación multidivisional formada por distintas unidades de negocio) es exactamente la \textbf{media ponderada por valor de mercado} de las betas de sus componentes:
$$\beta_P = \sum_{i=1}^{N} w_i \beta_i, \qquad \text{con } \sum_{i=1}^{N} w_i = 1$$
En consecuencia, cuando una corporación adquiere otra empresa o lanza una nueva línea de actividad, la nueva beta de sus activos es el promedio ponderado por el valor presente de cada división, no la media simple aritmética.
\end{axioma}

## La distinción clave de examen: CML frente a SML

Confundir la **Línea del Mercado de Capitales (CML)** con la **Línea del Mercado de Valores (SML)** figura entre las preguntas conceptuales más exigentes de DFIN. La Figura \ref{fig:cml-vs-sml} y la tabla inferior delimitan con rigor ambos planos.

\begin{figure}[H]
\includetikz[0.96\linewidth]{src/tex/fig_cml_vs_sml.tex}
\caption{CML (izquierda: eje de riesgo total $\sigma_p$, válida solo para carteras eficientes) frente a SML del CAPM (derecha: eje $\beta_i$, válida para todo activo en equilibrio).}
\label{fig:cml-vs-sml}
\end{figure}

| Rasgo comparativo | CML (Línea del Mercado de Capitales) | SML (Línea del Mercado de Valores / CAPM) |
| :--- | :--- | :--- |
| **Medida de riesgo (eje $X$)** | Desviación típica total ($\sigma_p$) | Coeficiente Beta sistemático ($\beta_i$) |
| **¿Qué activos caen sobre la línea?** | **Solo carteras eficientes** (combinaciones de $r_f$ y $M$) | **Todos los activos y carteras** en equilibrio perfecto |
| **¿Dónde cae una acción individual?** | **Debajo** de la CML (tiene riesgo específico no diversificado) | **Sobre** la SML (su riesgo específico no recibe prima) |
| **Pendiente de la recta** | Ratio de Sharpe de mercado: $\dfrac{\mathbb{E}[R_M]-r_f}{\sigma_M}$ | Prima de riesgo de mercado: $\mathbb{E}[R_M] - r_f$ |
| **Uso en finanzas corporativas** | Asignación estratégica de cartera global | **Tasa de descuento de acciones y proyectos ($r_E$, $r_A$)** |

## Estimación práctica: recta característica, Alfa de Jensen y $R^2$

En la práctica analítica, la beta de una compañía cotizada se estima ejecutando una regresión lineal por Mínimos Cuadrados Ordinarios (**recta característica o modelo de mercado**) de los excesos históricos de rentabilidad del título frente a los excesos de un índice amplio de bolsa (como el IBEX 35, EURO STOXX 50 o S\&P 500) durante una ventana móvil típica de 60 meses o 250 semanas:

$$R_{i,t} - r_{f,t} = \alpha_i + \beta_i (R_{M,t} - r_{f,t}) + \varepsilon_{i,t}$$

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_recta_caracteristica_beta.tex}
\caption{Recta característica por regresión lineal: interpretación geométrica de $\beta_i$, del Alfa de Jensen ($\alpha_i$) y del residuo específico ($\varepsilon_{i,t}$).}
\label{fig:recta-caracteristica}
\end{figure}

La Figura \ref{fig:recta-caracteristica} descompone las tres magnitudes que entrega la estadística de regresión:

1. **Pendiente ($\hat{\beta}_i$):** estimación histórica del riesgo sistemático. Muchas agencias financieras (como Bloomberg) aplican el **ajuste de Blume** ($\beta_{\text{ajustada}} = \frac{2}{3}\hat{\beta}_{\text{MCO}} + \frac{1}{3}\cdot 1$) porque las empresas maduras tienden estadísticamente a regresar hacia la media $\beta = 1$ con el paso de los años.
2. **Ordenada en el origen ($\hat{\alpha}_i$, Alfa de Jensen):** mide el exceso de rentabilidad anormal conseguido por encima de lo que justifica la SML según su nivel de beta. Un título situado por encima de la SML posee $\alpha_i > 0$ (infravalorado, oportunidad de compra); un título situado por debajo presenta $\alpha_i < 0$ (sobrevalorado). En un mercado perfectamente eficiente y en equilibrio estricto, el CAPM predice $\alpha_i = 0$ para todo activo.
3. **Descomposición de varianzas y $R^2$:** elevando al cuadrado ambos lados de la ecuación de regresión (dado que $\text{Cov}(R_M, \varepsilon_i) = 0$ por construcción):
$$\sigma_i^2 = \underbrace{\beta_i^2 \sigma_M^2}_{\text{Riesgo sistemático}} + \underbrace{\sigma_\varepsilon^2}_{\text{Riesgo específico}}$$
El coeficiente de determinación $R^2 = \frac{\beta_i^2 \sigma_M^2}{\sigma_i^2}$ indica la proporción de volatilidad total del título explicada por el mercado (habitualmente 20\%--45\% en acciones individuales, y superior al 85\%--95\% en carteras bien diversificadas). El resto ($1 - R^2$) responde a noticias sectoriales e idiosincráticas que desaparecen al diversificar.

\begin{trampa}{El error de elegir un título por su bajo $R^2$ o su alta volatilidad total}
Un error clásico consiste en rechazar un título porque su desviación típica anual $\sigma_i = 55\%$ parece enorme, o creer que un $R^2 = 10\%$ implica bajo riesgo sistemático. Una pequeña farmacéutica puede tener un $R^2 = 10\%$ (el 90\% de su riesgo es éxito o fracaso clínico específico) y simultáneamente $\beta = 1{,}4$ si su sensibilidad a las condiciones financieras es alta; a la inversa, una minera de oro puede tener alta volatilidad $\sigma_i$ pero $\beta \approx 0{,}2$ porque los resultados de perforación poco tienen que ver con el ciclo económico. Al incorporarla en cartera, el mercado solo exige prima proporcional a $\beta_i$, nunca a $\sigma_i$.
\end{trampa}

## Críticas empíricas al CAPM y modelos multifactoriales: APT y Fama-French

Pese a su enorme potencia pedagógica y su dominio indiscutible en banca de inversión y valoración corporativa, el CAPM descansa sobre supuestos fuertes y enfrenta dos objeciones académicas profundas:

1. **La crítica de Richard Roll (1977):** la verdadera "cartera de mercado" teórica debería incluir no solo acciones cotizadas, sino bonos, inmuebles, materias primas y capital humano mundial. Como ese índice total resulta inobservable y en la práctica se sustituye por índices locales de acciones (IBEX 35 o S\&P 500), cualquier test empírico del CAPM prueba conjuntamente si el modelo es cierto y si el índice proxy elegido es eficiente en la frontera de Markowitz; formalmente, el CAPM resulta imposible de verificar de forma definitiva.
2. **Anomalías empíricas persistentes:** desde finales de los años setenta, múltiples estudios mostraron que carteras de empresas de **pequeña capitalización** (*size effect*) y acciones con alto ratio **valor contable sobre valor de mercado** (*value effect*, alto *Book-to-Market*) obtuvieron rentabilidades medias históricas superiores a las predichas por su única beta de mercado.

### Teoría de Valoración por Arbitraje (APT) de Stephen Ross

En 1976, Stephen Ross propuso una derivación alternativa más general —la **APT (*Arbitrage Pricing Theory*)**— que prescinde de exigir que la cartera de mercado sea eficiente o que todos los inversores optimicen solo en media--varianza. Basta asumir que la rentabilidad de los activos responde a $K$ factores macroeconómicos sistemáticos comunes $F_1, \dots, F_K$ (sorpresas en PIB, inflación, pendiente de la curva de tipos, diferenciales de crédito o precios de energía) más un ruido específico diversificable:

$$R_i = a_i + b_{i1}F_1 + b_{i2}F_2 + \dots + b_{iK}F_K + \varepsilon_i$$

La ausencia de oportunidades de arbitraje en carteras muy diversificadas implica que la prima esperada de cualquier activo es combinación lineal de sus sensibilidades factoriales $b_{ik}$ por la prima de riesgo $\lambda_k$ asociada a cada factor $k$:

$$\mathbb{E}[R_i] = r_f + \sum_{k=1}^{K} b_{ik} \, \lambda_k$$

### Modelos de tres y cinco factores de Fama y French

Eugene Fama y Kenneth French (1993, 2015) concretaron empíricamente esta visión multifactorial capturando las primas históricas observadas en los mercados estadounidenses y globales. Su célebre **modelo de 3 factores** añade a la prima tradicional de mercado dos carteras largas-cortas que capturan el tamaño y el sesgo de valoración:

$$\mathbb{E}[R_i] - r_f = \beta_{i,M}(\mathbb{E}[R_M]-r_f) + s_i \cdot \mathbb{E}[\text{SMB}] + h_i \cdot \mathbb{E}[\text{HML}]$$

- **Factor de mercado ($R_M - r_f$):** prima general de renta variable.
- **SMB (*Small Minus Big*):** exceso medio de rentabilidad de empresas de baja capitalización frente a grandes corporaciones.
- **HML (*High Minus Low*):** exceso medio de acciones *value* (alto cociente Valor Contable / Capitalización Bursátil) frente a acciones *growth* (bajo cociente).

Posteriormente añadieron en el **modelo de 5 factores (2015)** la rentabilidad operativa robusta (**RMW**, *Robust Minus Weak*) y el perfil conservador frente a agresivo de inversión de activos (**CMA**, *Conservative Minus Aggressive*), mientras que Mark Carhart (1997) incorporó un cuarto factor de momento (**MOM**, *Momentum*).

\begin{puenteti}{Estimación econométrica multifactorial y validación \emph{out-of-sample}}
En ciencia de datos financiera conviene distinguir la potencia descriptiva \emph{in-sample} de la capacidad predictiva \emph{out-of-sample}. Aunque añadir factores aumenta mecánicamente el $R^2$ de la regresión sobre datos históricos, las primas estimadas $\hat{\lambda}_k$ presentan elevada incertidumbre de estimación muestral. Por esa razón, la mayoría de los departamentos de finanzas corporativas y manuales de valoración (como Brealey, Myers y Allen o Berk y DeMarzo) siguen utilizando el CAPM como línea base para descontar proyectos reales, reservando Fama--French para evaluar fondos de inversión o primas sectoriales persistentes.
\end{puenteti}

## Resumen y preguntas de autocomprobación

El CAPM reduce todo el universo de covarianzas de Markowitz a un único escalar intuitivo —la beta— que vincula el coste de capital exigido a la sensibilidad sistemática frente al mercado. Mientras la CML ordena únicamente carteras eficientes según su volatilidad total, la SML fija la tasa justa de descuento de equilibrio para todo activo según su beta. Frente a sus límites empíricos, modelos como la APT y Fama--French explican primas adicionales ligadas a variables macroeconómicas, tamaño y valoración contable.

**Cuestiones de repaso rápido:**

1. Supón $r_f = 3{,}0\%$ y $\mathbb{E}[R_M] = 9{,}5\%$. Una empresa tecnológica con $\beta = 1{,}40$ cotiza esperando entregar una rentabilidad anual del 11,5\%. ¿Cae por encima o por debajo de la SML? ¿Cuál es su Alfa de Jensen y está infravalorada o sobrevalorada?
2. Una cartera combina un 40\% en bonos con $\beta_D = 0{,}15$ y un 60\% en acciones con $\beta_E = 1{,}20$. Calcula la beta resultante de la cartera.
3. Si la desviación típica anual de una acción es $\sigma_i = 40\%$, la del mercado es $\sigma_M = 18\%$ y su coeficiente de correlación con el mercado es $\rho_{i,M} = 0{,}54$, calcula su beta $\beta_i$ y el porcentaje de riesgo que corresponde a riesgo sistemático ($R^2$).
