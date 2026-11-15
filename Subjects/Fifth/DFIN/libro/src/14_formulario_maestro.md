# Formulario maestro y vademécum de Dirección Financiera

\begin{epigrafe}{Las fórmulas no sustituyen al razonamiento económico; solo condensan las relaciones de equilibrio para operar sin tropiezos bajo presión de examen.}{Vademécum de referencia rápida}
\end{epigrafe}

Este capítulo recopila de forma estructurada todas las identidades matemáticas, convenciones de signo y criterios de decisión utilizados a lo largo del tratado.

## Bloque I: Valor temporal, renta fija, acciones y presupuesto de capital

\begin{formula}{Matemática financiera, bonos y renta variable (Capítulos 2 y 3)}
\begin{itemize}
  \item \textbf{Conversión nominal--efectiva--continua:} $1 + r_{\text{ef}} = \left(1 + \frac{j_m}{m}\right)^m = (1+k)^m$, \quad $VA_{\text{cont}} = FC_t \, e^{-r_c t}$.
  \item \textbf{Rentas constantes y crecientes ($t=1\dots n$):}
  $$VA_0 = C \cdot \frac{1-(1+r)^{-n}}{r} = C \cdot a_{\overline{n}|r}, \qquad VA_{\text{crec}} = \frac{C_1}{r-g}\left[1-\left(\frac{1+g}{1+r}\right)^n\right]$$
  \item \textbf{Perpetuidad creciente y Gordon--Shapiro:} $VA_0 = \dfrac{C_1}{r-g}$ ($r > g$); \quad $P_0 = \dfrac{\text{Div}_1}{r_E - g}$ con $g = b \cdot \text{ROE}$.
  \item \textbf{Descomposición VAOC y PER:} $P_0 = \dfrac{\text{BPA}_1}{r_E} + \text{VAOC}$, \qquad $\dfrac{P_0}{\text{BPA}_1} = \dfrac{1}{r_E} + \dfrac{\text{VAOC}}{\text{BPA}_1}$.
  \item \textbf{Precio de bono, ETTI y tipo \emph{forward}:} $P_0 = \sum_{t=1}^T \dfrac{C}{(1+r_t)^t} + \dfrac{N}{(1+r_T)^T}$, \quad $f_{t-1,t} = \dfrac{(1+r_t)^t}{(1+r_{t-1})^{t-1}} - 1$.
  \item \textbf{Duración Macaulay ($D$), Modificada ($D^*$) y Convexidad:}
  $$D = \frac{1}{P_0}\sum_{t=1}^{T} t \frac{FC_t}{(1+y)^t}, \qquad D^* = \frac{D}{1+y}, \qquad \frac{\Delta P}{P} \approx -D^*\Delta y + \frac{1}{2}C_{\text{vex}}(\Delta y)^2$$
\end{itemize}
\end{formula}

\begin{formula}{Criterios de inversión, FCL incremental e inflación (Capítulos 4 y 5)}
\begin{itemize}
  \item \textbf{VAN y TIR:} $\text{VAN} = -I_0 + \sum_{t=1}^{T}\dfrac{FCL_t}{(1+r)^t}$; \quad $\text{VAN}(\text{TIR}) = 0$ (vigilar cambios de signo y Tasa de Fisher $r_F$).
  \item \textbf{Índice de Rentabilidad y Anualidad Equivalente:} $IR = 1 + \dfrac{\text{VAN}}{I_0}$; \quad $\text{VAE} = \dfrac{\text{VAN}_n}{a_{\overline{n}|r}}$ (o $\text{CAE} = \dfrac{\text{VAC}_n}{a_{\overline{n}|r}}$).
  \item \textbf{Flujo de Caja Operativo y Libre (3 vías equivalentes):}
  $$\text{FCO}_t = \text{BAIT}_t(1-\tau_c) + \text{Amort}_t = (I_t - G_t)(1-\tau_c) + \tau_c\,\text{Amort}_t$$
  $$\text{FCL}_t = \text{FCO}_t - \Delta \text{NOF}_t - \text{CAPEX}_t + \text{VR}_{\text{neto},T}, \qquad \text{VR}_{\text{neto},T} = \text{VR}_T - \tau_c(\text{VR}_T - \text{VNC}_T)$$
  \item \textbf{Ecuación exacta de Fisher (Inflación):} $(1 + r_{\text{nom}}) = (1 + r_{\text{real}})(1 + \pi) \implies r_{\text{real}} = \dfrac{r_{\text{nom}} - \pi}{1 + \pi}$.
\end{itemize}
\end{formula}

## Bloque II: Markowitz, CAPM, betas y equivalentes ciertos

\begin{formula}{Carteras, modelos de equilibrio y estimación de riesgo (Capítulos 6, 7 y 8)}
\begin{itemize}
  \item \textbf{Cartera de dos activos:} $\mathbb{E}[R_p] = w_A \mu_A + w_B \mu_B$, \quad $\sigma_p^2 = w_A^2\sigma_A^2 + w_B^2\sigma_B^2 + 2w_A w_B \rho_{AB}\sigma_A\sigma_B$.
  \item \textbf{Cartera de Mínima Varianza Global:} $w_A^{\min} = \dfrac{\sigma_B^2 - \rho_{AB}\sigma_A\sigma_B}{\sigma_A^2 + \sigma_B^2 - 2\rho_{AB}\sigma_A\sigma_B}$.
  \item \textbf{CML (solo eficientes) frente a SML (CAPM):}
  $$\text{CML: }\mathbb{E}[R_p] = r_f + \frac{\mathbb{E}[R_M]-r_f}{\sigma_M}\sigma_p \qquad \text{SML: }\mathbb{E}[R_i] = r_f + \beta_i\bigl(\mathbb{E}[R_M]-r_f\bigr)$$
  \item \textbf{Beta y varianza sistemática:} $\beta_i = \dfrac{\text{Cov}(R_i, R_M)}{\sigma_M^2} = \rho_{i,M}\dfrac{\sigma_i}{\sigma_M}$; \quad $\sigma_i^2 = \beta_i^2\sigma_M^2 + \sigma_\varepsilon^2$; \quad $R^2 = \dfrac{\beta_i^2\sigma_M^2}{\sigma_i^2}$.
  \item \textbf{Desapalancamiento económico ($FT=FP$ vs $FT=FP+FA$) y apalancamiento operativo:}
  $$\beta_A = \frac{D}{D+E}\beta_D + \frac{E}{D+E}\beta_E, \qquad \beta_{\text{activos}} = \beta_{\text{ingresos}}\left(1 + \frac{\text{VA}(CF)}{\text{VA}(\text{Activos})}\right)$$
  \item \textbf{Equivalentes Ciertos:} $\text{VAN} = -I_0 + \sum_{t=1}^T \dfrac{EC_t}{(1+r_f)^t}$, \quad $\alpha_t = \left(\dfrac{1+r_f}{1+k}\right)^t$.
\end{itemize}
\end{formula}

## Bloque III: Estructura de capital, WACC, VAA y FTE

\begin{formula}{Modigliani--Miller, Tres Pasos y valoración corporativa (Capítulos 9 y 10)}
\begin{itemize}
  \item \textbf{MM sin impuestos:} $V_L = V_U$; \quad $r_E = r_A + \dfrac{D}{E}(r_A - r_D)$; \quad $\text{CMPC} = r_A$.
  \item \textbf{MM con Impuesto de Sociedades ($\tau_c$):}
  $$V_L = V_U + \tau_c D, \qquad r_E = r_A + \frac{D}{E}(r_A - r_D)(1-\tau_c), \qquad K_{mpc,di} = \frac{E}{V}r_E + \frac{D}{V}r_D(1-\tau_c)$$
  \item \textbf{Miller (1977) con impuestos personales:} $G_L = \left[1 - \dfrac{(1-\tau_c)(1-\tau_{pe})}{1-\tau_{pd}}\right]D$.
  \item \textbf{Tres Pasos (convención continua $D/V$ constante en UGR):}
  $$\begin{aligned}
  (1)\ r_A &= \frac{D}{V}r_D + \frac{E}{V}r_E \quad \longrightarrow \quad (2)\ r_E' = r_A + \frac{D'}{E'}(r_A - r_D') \\
  &\longrightarrow \quad (3)\ K_{mpc,di}' = \frac{E'}{V'}r_E' + \frac{D'}{V'}r_D'(1-\tau_c)
  \end{aligned}$$
  \item \textbf{Valor Actual Ajustado (VAA):} $\text{VAA} = \text{VAN}_{\text{base}}(r_A) - \text{Emisión} + \text{VA}(\text{Escudo } r_D) + \text{VA}(\text{Subvención})$.
  \item \textbf{Flujo para el Accionista (FTE):} $\text{FCA}_t = FCL_t - I_t(1-\tau_c) + \Delta D_t$, descontado siempre a $r_E$.
\end{itemize}
\end{formula}

## Bloque IV: Opciones reales y finanzas a corto plazo

\begin{formula}{Derivados, Black--Scholes, circulante y tesorería (Capítulos 11 y 12)}
\begin{itemize}
  \item \textbf{Paridad Put--Call europea:} $S_0 + p_0 = c_0 + \dfrac{E}{(1+r_f)^T}$ (discreto) o $+ E e^{-r_f T}$ (continuo).
  \item \textbf{Árbol binomial neutral al riesgo:} $p = \dfrac{(1+r_f)-d}{u-d}$, \quad $C_0 = \dfrac{p\,C_u + (1-p)\,C_d}{1+r_f}$.
  \item \textbf{Black--Scholes (Call sin dividendos):} $C_0 = S_0 N(d_1) - E e^{-r_f T} N(d_2)$, \quad $d_{1,2} = \dfrac{\ln(S_0/E) + (r_f \pm \frac{\sigma^2}{2})T}{\sigma\sqrt{T}}$.
  \item \textbf{NOF, FM y Ciclo de Caja:} $\text{NOF} = \text{Existencias} + \text{Clientes} - \text{Proveedores}$; \quad $\text{Tesorería Neta} = \text{FM} - \text{NOF}$; \quad $PMM_f = (PM_a + PM_f + PM_v + PM_c) - PM_p$.
  \item \textbf{Baumol y Miller--Orr:} $C^* = \sqrt{\dfrac{2bT}{i}}$; \qquad $Z^* = L + \sqrt[3]{\dfrac{3b\sigma^2}{4i_{\text{diario}}}}$, \quad $H = 3Z^* - 2L$, \quad $\bar{C} = \dfrac{4Z^*-L}{3}$.
  \item \textbf{Coste TAE de renunciar a descuento ``$d / D_{\text{desc}}$ neto $D_{\text{neto}}$'':} $r_{\text{TAE}} = \left(1 + \dfrac{d}{1-d}\right)^{\frac{365}{D_{\text{neto}} - D_{\text{desc}}}} - 1$.
\end{itemize}
\end{formula}
