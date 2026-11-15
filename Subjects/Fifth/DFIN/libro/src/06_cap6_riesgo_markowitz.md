\parteLibro{II}{Riesgo, Rentabilidad y Coste del Capital}{De la historia empírica de las primas de riesgo a la teoría de carteras de Markowitz, el modelo CAPM, los modelos multifactoriales y la estimación de tasas de descuento por proyecto.}{part2_riesgo.jpg}

# Historia del riesgo y teoría de carteras de Markowitz

\begin{epigrafe}{La diversificación es el único almuerzo gratis en finanzas.}{Harry Markowitz}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Interpretar la evidencia empírica histórica de rentabilidades, primas de riesgo e inflación sobre cinco grandes familias de activos (Tema 5 UGR / Dimson--Marsh--Staunton).
  \item Formular la esperanza y la varianza de una cartera de $N$ activos y demostrar por qué la covarianza domina el riesgo asintótico al diversificar.
  \item Calcular carteras de dos activos con correlación imperfecta (caso \emph{Coca-Cola y Reebok}), hallar la cartera de mínima varianza y caracterizar la frontera eficiente.
  \item Introducir el activo libre de riesgo para deducir el Teorema de Separación de Tobin y la Línea del Mercado de Capitales (CML).
\end{itemize}
\end{objetivos}

## Evidencia empírica de un siglo de rentabilidades y primas de riesgo

Para descontar flujos futuros con riesgo no basta un tipo teórico abstracto: necesitamos anclar nuestras expectativas en la evidencia empírica de largo plazo sobre cuánto exigen los inversores reales por renunciar a la seguridad del dinero líquido. Los estudios históricos de referencia en finanzas corporativas (Ibbotson Associates para Estados Unidos desde 1926, contrastados globalmente para veintiún mercados por Dimson, Marsh y Staunton) exhiben la jerarquía clásica estudiada en el Tema 5 de la UGR, representada en la Figura \ref{fig:primas-historicas}.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_primas_historicas.tex}
\caption{Rentabilidad media histórica nominal, real y prima de riesgo por clase de activo ($\pi = 3{,}10\%$ anual; tabla de referencia Tema 5 UGR).}
\label{fig:primas-historicas}
\end{figure}

Con una tasa media histórica de inflación de referencia del **3,10\%** anual, la lectura económica de la tabla muestra cuatro regularidades estables:

| Clase de activo | Nominal media | Real aproximada | Prima sobre Letras | Desviación típica anual ($\sigma$) |
| :--- | :---: | :---: | :---: | :---: |
| **Letras del Tesoro** (corto plazo) | 3,90\% | 0,80\% | 0,00\% | $\approx 3{,}1\%$ |
| **Obligaciones del Estado** (largo plazo) | 5,70\% | 2,60\% | 1,80\% | $\approx 9{,}8\%$ |
| **Obligaciones de empresas** | 6,00\% | 2,90\% | 2,10\% | $\approx 8{,}5\%$ |
| **Acciones grandes (S\&P 500)** | 13,00\% | 9,90\% | 9,10\% | $\approx 20{,}2\%$ |
| **Acciones de pequeñas empresas (Pymes)** | 17,30\% | 14,20\% | 13,40\% | $\approx 32{,}0\%$ |

Un euro invertido de forma pasiva en Letras del Tesoro apenas logra preservar el poder adquisitivo real ($+0{,}80\%$ anual neto de inflación). En el otro extremo, la renta variable remunera con una **prima de riesgo de mercado ($\text{PRM} = R_m - r_f$)** sustancial por absorber la volatilidad macroeconómica, que históricamente en medidas aritméticas supera el 7\%--9\% en Estados Unidos y se sitúa entre el **5\% y el 7,5\%** en estimaciones geométricas o prospectivas europeas contemporáneas.

\begin{axioma}{Media aritmética frente a media geométrica}
Para describir el rendimiento compuesto efectivamente obtenido por un inversor que mantuvo capital sin retirar dinero durante $T$ años se emplea la \textbf{media geométrica}:
$$r_G = \left[\prod_{t=1}^{T}(1 + r_t)\right]^{1/T} - 1$$
Sin embargo, cuando queremos construir la tasa esperada a un año vista para descontar flujos futuros en un ejercicio típico del VAN ($\text{FD}_t$), la estadística matemática demuestra que el estimador insesgado de la esperanza anual es la \textbf{media aritmética} $\bar{r}_A = \frac{1}{T}\sum_{t=1}^{T} r_t$ (que supera siempre a $r_G$ aproximadamente en $\frac{1}{2}\sigma^2$ cuando los retornos son independientes). Para horizontes muy largos de actualización compuesta, la fórmula de Blume pondera ambas medias según el plazo.
\end{axioma}

## Varianza, covarianza y el mecanismo de la diversificación

Harry Markowitz revolucionó las finanzas en 1952 demostrando que el riesgo relevante de un título **no debe juzgarse de forma aislada**, sino por cómo contribuye a la variabilidad agregada de toda una cartera.

Para $N$ activos con ponderaciones $w_i$ ($\sum_{i=1}^{N} w_i = 1$), rentabilidades esperadas $\mu_i = \mathbb{E}[R_i]$ y matriz de covarianzas $\Sigma = [\sigma_{ij}]$ (donde $\sigma_{ii} = \sigma_i^2$ y $\sigma_{ij} = \rho_{ij}\sigma_i\sigma_j$), la esperanza y la varianza de la cartera $p$ son:

$$\mathbb{E}[R_p] = \sum_{i=1}^{N} w_i \, \mu_i = \mathbf{w}^\top \boldsymbol{\mu}$$

$$\sigma_p^2 = \sum_{i=1}^{N} w_i^2 \sigma_i^2 + \sum_{i=1}^{N}\sum_{j \neq i} w_i w_j \, \sigma_{ij} = \mathbf{w}^\top \Sigma \, \mathbf{w}$$

La diferencia cualitativa aparece al repartir el capital de forma equiponderada ($w_i = 1/N$) entre un número creciente de acciones. La matriz completa de $N \times N$ casillas contiene exactamente $N$ varianzas en la diagonal principal y $N(N-1)$ covarianzas fuera de ella:

$$\sigma_p^2 = \frac{1}{N}\,\overline{\sigma_i^2} + \left(1 - \frac{1}{N}\right)\overline{\sigma_{ij}}$$

Al crecer $N$ ($N = 10, 20, 30, \dots$), el peso $1/N$ de las varianzas individuales tiende rápidamente a cero: el **riesgo específico o diversificable** desaparece. En el límite ($N \to \infty$), la varianza total de la cartera converge hacia la **covarianza media ($\overline{\sigma_{ij}}$)** entre las acciones de la economía, que captura la exposición común a recesiones, tipos de interés, crisis energéticas o tensiones geopolíticas (**riesgo sistemático o de mercado**). La Figura \ref{fig:diversificacion-n} representa esta desintegración asimétrica del riesgo.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_diversificacion_n_activos.tex}
\caption{Reducción asintótica de la volatilidad total de una cartera hacia el suelo de riesgo sistemático al aumentar $N$.}
\label{fig:diversificacion-n}
\end{figure}

## Carteras de dos activos y caso clásico Coca-Cola frente a Reebok

Para dos activos $A$ y $B$ en proporciones $w_A$ y $w_B = 1 - w_A$, la varianza de la combinación se reduce a:

$$\sigma_p^2 = w_A^2 \sigma_A^2 + w_B^2 \sigma_B^2 + 2\,w_A w_B \, \rho_{AB} \, \sigma_A \sigma_B$$

Excepto en el caso extremo de correlación lineal perfecta positiva ($\rho_{AB} = +1$, donde la desviación típica resultante es simplemente la suma lineal ponderada $w_A\sigma_A + w_B\sigma_B$), la desigualdad triangular garantiza que $\sigma_p < w_A\sigma_A + w_B\sigma_B$. En cuanto $\rho_{AB} < 1$, la curva trazada en el plano $(\sigma_p, \mathbb{E}[R_p])$ se abomba hacia la izquierda formando una hipérbola: ganar rentabilidad adicional al incorporar un título volátil resulta mucho menos costoso en riesgo de lo que sugiere su volatilidad en solitario.

\begin{casoreal}{Combinación Coca-Cola y Reebok (ejemplo oficial Tema 5 UGR)}
Consideremos los datos clásicos trabajados en las diapositivas de la asignatura:
\begin{itemize}
  \item \textbf{Coca-Cola ($C$):} $\mathbb{E}[R_C] = 10{,}0\%$, $\sigma_C = 31{,}5\%$.
  \item \textbf{Reebok ($R$):} $\mathbb{E}[R_R] = 20{,}0\%$, $\sigma_R = 58{,}5\%$.
  \item \textbf{Correlación ($\rho_{CR}$):} $+0{,}20$.
\end{itemize}

Si invertimos el \textbf{65\% en Coca-Cola} y el \textbf{35\% en Reebok}:
$$\mathbb{E}[R_p] = 0{,}65 \times 10\% + 0{,}35 \times 20\% = 6{,}5\% + 7{,}0\% = 13{,}5\%$$
$$\begin{aligned}
\sigma_p^2 &= 0{,}65^2(31{,}5)^2 + 0{,}35^2(58{,}5)^2 + 2(0{,}65)(0{,}35)(0{,}20)(31{,}5)(58{,}5) \\
&= 419{,}23 + 419{,}23 + 167{,}69 = 1.006{,}14
\end{aligned}$$
$$\sigma_p = \sqrt{1.006{,}14} = 31{,}72\%$$
Obsérvese el efecto casi milagroso de la diversificación: al incorporar un 35\% de Reebok (una acción casi el doble de volátil, $\sigma_R = 58{,}5\%$), la rentabilidad esperada salta de 10\% a 13,5\% (+35\% relativo) mientras el riesgo total de la cartera apenas pasa de 31,50\% a 31,72\%. Incluso más notable aún: la \textbf{Cartera de Mínima Varianza (CMV)} ($w_R^* = 16{,}96\%$, $w_C^* = 83{,}04\%$) logra una volatilidad de $\sigma_{\min} = 29{,}07\%$, \emph{inferior} a la de cualquiera de las dos acciones por separado, con una rentabilidad esperada del 11,70\%.
\end{casoreal}

Derivando $\sigma_p^2$ respecto a $w_A$ e igualando a cero se obtiene en forma cerrada la ponderación de la **Cartera de Mínima Varianza Global** para dos activos:

$$w_A^{\min} = \frac{\sigma_B^2 - \rho_{AB}\sigma_A\sigma_B}{\sigma_A^2 + \sigma_B^2 - 2\rho_{AB}\sigma_A\sigma_B}, \qquad w_B^{\min} = 1 - w_A^{\min}$$

## Frontera eficiente de Markowitz, Teorema de Tobin y Línea del Mercado de Capitales

Al extender el análisis a todos los activos con riesgo de la economía, el conjunto factible forma una región en forma de bala acotada por la izquierda. Su contorno superior —desde la Cartera de Mínima Varianza Global hacia arriba— recibe el nombre de **Frontera Eficiente**: ninguna cartera ofrece mayor rentabilidad esperada para el mismo nivel de desviación típica, ni menor riesgo para la misma rentabilidad esperada. Todo inversor racional averso al riesgo elegirá únicamente puntos sobre esta rama eficiente superior.

En 1958, James Tobin completó el modelo introduciendo un **activo libre de riesgo** (Letras del Tesoro) con rentabilidad segura $r_f$ y desviación típica $\sigma_f = 0$. Al combinar en proporción $(1 - w_T)$ este activo sin riesgo con cualquier cartera arriesgada $T$ en proporción $w_T$, el lugar geométrico resultante en el plano $(\sigma_p, \mathbb{E}[R_p])$ deja de ser curvo y pasa a ser una **semirrecta exacta** que nace en $(0, r_f)$:

$$\mathbb{E}[R_p] = r_f + w_T(\mathbb{E}[R_T] - r_f), \qquad \sigma_p = w_T \sigma_T \quad \Longrightarrow \quad \mathbb{E}[R_p] = r_f + \left(\frac{\mathbb{E}[R_T] - r_f}{\sigma_T}\right)\sigma_p$$

Para maximizar la pendiente de esa semirrecta —es decir, maximizar el **Ratio de Sharpe ($S_T = \frac{\mathbb{E}[R_T]-r_f}{\sigma_T}$)** o exceso de rentabilidad por unidad de riesgo total—, debemos girarla en sentido antihorario hasta hacerla **tangente** a la frontera eficiente de activos arriesgados. A esa cartera tangente única la llamamos **Cartera de Mercado ($M$)**, y a la semirrecta tangente que une $(0, r_f)$ pasando por $M$ (y prolongándose hacia la derecha mediante apalancamiento al tipo $r_f$) se la denomina **Línea del Mercado de Capitales (CML)**.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_markowitz_cml.tex}
\caption{Frontera de posibilidades (caso Coca-Cola/Reebok, CMV) y Línea del Mercado de Capitales tangente desde $r_f = 3{,}5\%$.}
\label{fig:markowitz-cml}
\end{figure}

La Figura \ref{fig:markowitz-cml} resume la dualidad de Tobin (**Teorema de Separación de dos fondos**): cualquier inversor, con independencia de su grado subjetivo de aversión al riesgo, debería dividir su patrimonio entre dos únicos vehículos: el activo libre de riesgo y exactamente la **misma cartera tangente óptima $M$**. Un inversor muy conservador sitúa sus fondos cerca de $r_f$; uno moderado en torno a $M$; uno agresivo toma dinero prestado al tipo $r_f$ ($w_M > 1$) para escalar sobre la CML más allá de $M$.

\begin{puenteti}{Optimización cuadrática de fronteras eficientes en Python / SciPy}
Para $N$ títulos reales, hallar la cartera eficiente de varianza mínima sujeta a un retorno objetivo $\mu^*$ y sin posiciones cortas ($w_i \ge 0$) constituye un programa cuadrático convexo resoluble en milisegundos mediante \texttt{scipy.optimize.minimize} (algoritmo SLSQP) o programación cuadrática analítica con multiplicadores de Lagrange:
$$\min_{\mathbf{w}} \ \frac{1}{2}\mathbf{w}^\top \Sigma \mathbf{w} \quad \text{sujeto a } \mathbf{w}^\top \boldsymbol{\mu} = \mu^*, \ \mathbf{w}^\top \mathbf{1} = 1$$
En aplicaciones reales de gestión cuantitativa (\emph{robo-advisors}), las matrices $\Sigma$ muestrales suelen regularizarse con estimadores \emph{shrinkage} de Ledoit-Wolf para evitar ponderaciones extremas causadas por ruido muestral en covarianzas pasadas.
\end{puenteti}

## Resumen y preguntas de autocomprobación

La evidencia histórica prueba que el mercado remunera la asunción de riesgo sistemático pero no paga primas por riesgos individuales evitables. Markowitz demostró que la clave matemática no radica en las varianzas aisladas sino en las covarianzas entre activos, y Tobin demostró que al añadir un activo libre de riesgo todos los inversores eficientes convergen hacia una única cartera tangente de renta variable de máximo Ratio de Sharpe.

**Cuestiones de repaso rápido:**

1. Si combinas dos acciones $A$ y $B$ exactamente a partes iguales ($w_A = w_B = 0{,}5$), cada una con volatilidad $\sigma = 30\%$ y correlación mutua $\rho = -0{,}50$, ¿cuál es la desviación típica exacta de la cartera? ¿Y si $\rho = -1$?
2. En el ejemplo Coca-Cola / Reebok ($w_C = 0{,}65, w_R = 0{,}35$), ¿cuál habría sido la volatilidad de la cartera si hubieras ignorado el beneficio de la correlación imperfecta suponiendo erróneamente $\rho = +1$?
3. Explica con claridad económica qué significa un punto situado a la derecha de la cartera tangente $M$ sobre la CML ($w_M = 1{,}40$, $w_{r_f} = -0{,}40$).
