# Valoración de renta fija y renta variable

\begin{epigrafe}{Un bono promete un flujo cierto si no hay impago; una acción promete participación residual en todo lo incierto que la empresa logre crear.}{Tradición analítica de Wall Street}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Valorar bonos con cupón periódico, bonos cupón cero y deuda perpetua utilizando tanto una TIR uniforme como la Estructura Temporal de los Tipos de Interés (ETTI) libre de arbitraje.
  \item Cuantificar la sensibilidad al riesgo de tipos de interés mediante Duración de Macaulay, Duración Modificada y ajuste de segundo orden por Convexidad.
  \item Deducir el modelo de descuento de dividendos (DDM y Gordon-Shapiro) y descomponer el precio de la acción en valor sin crecimiento más Valor Actual de las Oportunidades de Crecimiento (VAOC).
  \item Resolver en detalle el caso de oportunidades de crecimiento diferidas (\emph{Problema 8 MILLION S.A.}) y auditar el uso correcto de múltiplos de mercado como el PER.
\end{itemize}
\end{objetivos}

## Valoración de activos de renta fija

Un bono es un instrumento contractual de deuda a largo plazo emitido por un Estado, organismo público o corporación privada. Quien compra el bono entrega un precio de emisión o mercado ($P_0$) y adquiere el derecho a recibir unos pagos periódicos denominados **cupones** ($C = c \cdot N$, producto del tipo de cupón nominal $c$ por el valor nominal o principal $N$) más la restitución del nominal $N$ al vencimiento ($T$).

En mercados competitivos, el precio teórico de un bono coincide con el valor actual de sus flujos futuros descontados a la rentabilidad exigida o **Tasa Interna de Rentabilidad del bono (TIR o $y$, *yield to maturity*)**:

$$P_0 = \sum_{t=1}^{T} \frac{C}{(1+y)^t} + \frac{N}{(1+y)^T} = C \cdot \frac{1 - (1+y)^{-T}}{y} + \frac{N}{(1+y)^T}$$

De esta ecuación se desprenden tres relaciones fundamentales entre el tipo de cupón $c$, la rentabilidad exigida por el mercado $y$ y la cotización respecto a la par ($N=100\%$):

- Si $c = y \implies P_0 = N$: el bono cotiza **a la par** (100\%).
- Si $c > y \implies P_0 > N$: el bono paga cupones superiores a lo que hoy exige el mercado, por lo que cotiza **sobre la par** (con prima).
- Si $c < y \implies P_0 < N$: sus cupones quedaron desfasados respecto a los tipos vigentes, por lo que el comprador exige comprarlo **bajo la par** (al descuento) para compensar con ganancia de capital al vencimiento.

### Valoración por ETTI, tipos *spot* y tipos implícitos *forward*

La TIR $y$ es en realidad un promedio interno no lineal de los tipos de interés aplicables a cada vencimiento. La valoración libre de arbitraje utiliza la **Estructura Temporal de los Tipos de Interés (ETTI)** o curva cero-cupón $\{r_1, r_2, \dots, r_T\}$, donde cada flujo fechado en $t$ se descuenta a su tipo *spot* específico $r_t$:

$$P_{\text{sin arbitraje}} = \sum_{t=1}^{T-1} \frac{C}{(1+r_t)^t} + \frac{C + N}{(1+r_T)^T}$$

Si el precio de mercado de un bono con cupón difiriera de la suma del valor de cada uno de sus flujos replicados por separado mediante letras y bonos cupón cero (*stripping*), un banco de inversión compraría el paquete barato y vendería por separado el caro capturando un beneficio seguro sin riesgo. De la curva *spot* se derivan además los **tipos implícitos o *forward*** ($f_{t-1,t}$), que representan el tipo de interés pactado hoy para un préstamo futuro entre $t-1$ y $t$:

$$(1 + r_t)^t = (1 + r_{t-1})^{t-1}(1 + f_{t-1,t}) \quad \Longrightarrow \quad f_{t-1,t} = \frac{(1 + r_t)^t}{(1 + r_{t-1})^{t-1}} - 1$$

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_curva_etti_2026.tex}
\caption{Formas clásicas de la ETTI y anclaje con referencias monetarias de la Eurozona y España en noviembre de 2026.}
\label{fig:curva-etti}
\end{figure}

La Figura \ref{fig:curva-etti} muestra la morfología habitual de tres regímenes de curva junto con las referencias observadas en noviembre de 2026 en la Eurozona y España: facilidad de depósito del BCE en el **2,50\%**, Euríbor a 12 meses en el entorno del **3,29\%** y rentabilidad del bono soberano español a 10 años próxima al **3,94\%**. Tres teorías económicas explican por qué adopta pendiente positiva, plana o invertida:

- **Teoría de las expectativas puras:** los tipos *forward* reflejan simplemente el consenso del mercado sobre futuros tipos *spot* de corto plazo ($f_{1,2} = \mathbb{E}[r_{1,2}]$). Una curva invertida anticipa recortes de tipos o enfriamiento macroeconómico.
- **Teoría de la preferencia por la liquidez:** los inversores exigen una prima creciente por plazo ($L_t > 0$) para compensar la mayor volatilidad del precio ante variaciones de tipos en los vencimientos largos; por eso la curva suele tener pendiente ligeramente positiva incluso con expectativas estables.
- **Teoría de la segmentación de mercados:** bancos y fondos monetarios concentran su demanda en tramos cortos mientras aseguradoras y fondos de pensiones buscan tramos a 20 o 30 años para casar pasivos actuariales, determinando precios por oferta y demanda local.

### Riesgo de tipo de interés: Duración de Macaulay, Duración Modificada y Convexidad

Cuando sube la rentabilidad de mercado $y$, el precio de todo bono cae en proporción inversa. La **Duración de Macaulay ($D$)** mide la vida media ponderada de los flujos de caja del bono, utilizando como peso la fracción del precio actual que representa cada flujo:

$$D = \frac{\sum_{t=1}^{T} t \cdot \dfrac{FC_t}{(1+y)^t}}{P_0} = \sum_{t=1}^{T} t \cdot w_t$$

Para un bono cupón cero que solo paga en $T$, se cumple exactamente $D = T$; en cualquier bono con cupones intermedios, $D < T$. Dividiendo por $(1+y)$ obtenemos la **Duración Modificada ($D^*$)**, que expresa la elasticidad negativa lineal del precio frente a cambios infinitesimales de rentabilidad ($\Delta y$):

$$D^* = \frac{D}{1+y} \quad \Longrightarrow \quad \frac{\Delta P}{P} \approx -D^* \cdot \Delta y$$

Dado que la función $P(y)$ es estrictamente **convexa**, la recta tangente marcada por la Duración Modificada subestima siempre el precio efectivo cuando los tipos fluctúan con intensidad: al bajar los tipos, el bono sube *más* de lo predicho linealmente; al subir los tipos, el bono cae *menos* de lo predicho linealmente. Incorporando el término cuadrático de Taylor aparece la **Convexidad ($C_{\text{vex}}$)**:

$$\frac{\Delta P}{P} \approx -D^* \cdot \Delta y + \frac{1}{2} \, C_{\text{vex}} \cdot (\Delta y)^2, \qquad C_{\text{vex}} = \frac{1}{P_0(1+y)^2}\sum_{t=1}^{T} t(t+1)\frac{FC_t}{(1+y)^t}$$

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_bono_duracion_convexidad.tex}
\caption{Curva exacta precio--rentabilidad de un bono a 10 años (cupón 5\%), tangente lineal por Duración Modificada y ganancia por convexidad.}
\label{fig:bono-duracion}
\end{figure}

La Figura \ref{fig:bono-duracion} ilustra esta asimetría favorable: para movimientos extremos de $\pm 300$ puntos básicos desde el punto de paridad ($r_0 = 5\%$), la curvatura positiva protege al bonista en las subidas de tipos y acelera las plusvalías en las bajadas.

## Valoración de acciones ordinarias

A diferencia de un bono, una acción ordinaria carece de fecha de vencimiento prefijada y sus flujos futuros (dividendos) ni son contractualmente obligatorios ni son constantes. Si un inversor compra una acción hoy al precio $P_0$, espera cobrar un dividendo $\text{Div}_1$ al cabo de un año y venderla entonces a un precio $P_1$, la rentabilidad esperada por el accionista ($r_E$ o $k_e$) satisface:

$$r_E = \frac{\text{Div}_1 + (P_1 - P_0)}{P_0} \quad \Longleftrightarrow \quad P_0 = \frac{\text{Div}_1 + P_1}{1 + r_E}$$

Sustituyendo recursivamente $P_1$ en función de $\text{Div}_2$ y $P_2$, y reiterando hasta el horizonte $H \to \infty$ bajo la condición de no burbujas especulativas ($\lim_{H\to\infty} P_H / (1+r_E)^H = 0$), el precio teórico de una acción es igual al valor actual de todos los dividendos futuros esperados (**Modelo de Descuento de Dividendos, DDM**):

$$P_0 = \sum_{t=1}^{\infty} \frac{\text{Div}_t}{(1 + r_E)^t}$$

### Crecimiento constante: modelo de Gordon-Shapiro y tasa sostenible

Si una empresa distribuye una fracción estable de beneficios (*payout*) y retiene una tasa constante $b = 1 - \text{payout}$ que reinvierte obteniendo una rentabilidad sobre recursos propios $\text{ROE}$ constante, el crecimiento perpetuo sostenible de beneficios y dividendos asciende a:

$$g = b \cdot \text{ROE}$$

Cuando $g < r_E$, la suma geométrica infinita converge a la célebre ecuación de **Myron Gordon y Eli Shapiro (1956)**:

$$P_0 = \frac{\text{Div}_1}{r_E - g} \quad \Longleftrightarrow \quad r_E = \frac{\text{Div}_1}{P_0} + g$$

Esta última identidad divide la rentabilidad total exigida por el mercado en dos componentes visibles: la **rentabilidad por dividendo** ($\text{Div}_1 / P_0$) y la **tasa esperada de revalorización de capital** ($g$).

\begin{trampa}{El error de suponer $g \ge r_E$ o confundir $\text{Div}_0$ con $\text{Div}_1$}
La fórmula de Gordon-Shapiro exige dos cautelas elementales. Primero, el numerador es siempre el \textbf{primer dividendo futuro} ($\text{Div}_1 = \text{Div}_0(1+g)$), nunca el dividendo recién pagado ayer. Segundo, una empresa real no puede crecer perpetuamente a un ritmo superior al coste del capital ni al crecimiento nominal del PIB ($g < r_E$); si durante un ciclo de expansión una firma tecnológica crece al 20\% anual, debe modelizarse un \textbf{modelo multietapa} de crecimiento transitorio seguido de una perpetuidad madura sostenible con $g_{\text{madura}} \in [1{,}5\%, 3{,}5\%]$.
\end{trampa}

### El Valor Actual de las Oportunidades de Crecimiento (VAOC)

Retener beneficios no crea valor por sí mismo. Si una sociedad reparte todo su beneficio en dividendos ($\text{Div}_1 = \text{BPA}_1$, $g = 0$), actúa como "vaca lechera" (*cash cow*) y su precio sin crecimiento asciende a $\text{BPA}_1 / r_E$. Si por el contrario retiene una fracción $b$, su valor actual total puede descomponerse en dos bloques económicos independientes:

$$P_0 = \underbrace{\frac{\text{BPA}_1}{r_E}}_{\text{Valor sin crecimiento}} + \underbrace{\text{VAOC}}_{\text{Valor Actual Oportunidades Crecimiento}}$$

Despejando directamente, el **VAOC** mide la diferencia entre el precio de mercado y el valor de la capacidad instalada actual:

$$\text{VAOC} = P_0 - \frac{\text{BPA}_1}{r_E}$$

Solo se crea valor neto ($\text{VAOC} > 0$) cuando el capital retenido se invierte en proyectos cuya rentabilidad supera el coste de oportunidad del accionista ($\text{ROE} > r_E$). Si $\text{ROE} = r_E$, retener dinero es financieramente indiferente ($\text{VAOC} = 0$, aunque el beneficio nominal crezca cada año). Si $\text{ROE} < r_E$, reinvertir dentro de la empresa destruye riqueza ($\text{VAOC} < 0$) y el consejo debería repartir el efectivo como dividendo o recompra de acciones.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_accion_vaoc.tex}
\caption{Descomposición del precio de la acción entre valor en marcha ($\text{BPA}_1 / r_E$) y VAOC según la relación entre $\text{ROE}$ y $r_E$.}
\label{fig:accion-vaoc}
\end{figure}

\begin{casoreal}{Oportunidades de crecimiento diferidas: Problema 8 (MILLION S.A.)}
En los exámenes y relaciones de la UGR aparece un caso clásico donde la reinversión no comienza en $t=1$, sino de forma diferida (Problema 8 de la Relación 25-26). Consideremos una firma similar: en $t=1$ se espera un beneficio por acción $\text{BPA}_1 = 8\ \text{\euro}$ con un reparto íntegro del 100\% durante el primer año ($\text{Div}_1 = 8\ \text{\euro}$, sin inversión nueva). En $t=2$, la compañía espera generar el mismo $\text{BPA}_2 = 8\ \text{\euro}$, pero decide retener el 60\% ($b = 0{,}60 \implies I_2 = 4{,}80\ \text{\euro}$ y $\text{Div}_2 = 3{,}20\ \text{\euro}$) e iniciar un proyecto único en $t=2$ que produce un flujo perpetuo a partir de $t=3$ con un $\text{ROE} = 20\%$, siendo $r_E = 10\%$.

\begin{enumerate}
  \item \textbf{VAN en $t=2$ de la oportunidad que nace en $t=2$:} La inversión de $4{,}80\ \text{\euro}$ genera a perpetuidad desde $t=3$ un rendimiento adicional de $4{,}80 \times 0{,}20 = 0{,}96\ \text{\euro}$ anuales. Su valor en $t=2$ es:
  $$\text{VAN}_2 = -4{,}80 + \frac{0{,}96}{0{,}10} = -4{,}80 + 9{,}60 = +4{,}80\ \text{\euro}$$
  \item \textbf{Si esa política de retener $b=0{,}60$ se repitiese perpetuamente desde $t=2$:} desde $t=2$ arranca un crecimiento $g = 0{,}60 \times 0{,}20 = 12\%$, inviable a perpetuidad frente a $r_E = 10\%$ (si fuese finita o si $b=0{,}40 \implies g=8\% < 10\%$, la expresión de Gordon se aplicaría en $t=2$ y se actualizaría dos años por $(1+r_E)^2$). Para una oportunidad puntual nacida en $t=2$:
  $$\text{VAOC}_0 = \frac{\text{VAN}_2}{(1+r_E)^2} = \frac{4{,}80}{1{,}10^2} = 3{,}97\ \text{\euro}, \qquad P_0 = \frac{8}{0{,}10} + 3{,}97 = 83{,}97\ \text{\euro}$$
\end{enumerate}
La lección clave para el examen UGR es actualizar los flujos o el VAOC desde la fecha exacta en que se incurre en la inversión inicial del crecimiento ($t=2$), nunca suponer automáticamente que todo crecimiento empieza en $t=1$.
\end{casoreal}

## Vínculo entre VAOC y el ratio PER

En bolsa y banca de inversión se cotiza con frecuencia por múltiplos relativos, destacando el **PER (*Price-to-Earnings Ratio*)**: $\text{PER} = P_0 / \text{BPA}_1$. Dividiendo ambos miembros de la identidad de descomposición por $\text{BPA}_1$ obtenemos la lectura económica exacta de este múltiplo:

$$\frac{P_0}{\text{BPA}_1} = \frac{1}{r_E} + \frac{\text{VAOC}}{\text{BPA}_1}$$

Un PER elevado no significa automáticamente que una acción esté cara, ni un PER bajo que sea una ganga. Una empresa puede cotizar a un PER de 25 veces frente a un inverso del coste de capital $1/r_E = 10$ veces simplemente porque el mercado le atribuye un $\text{VAOC}$ positivo que aporta $15$ veces beneficio gracias a proyectos futuros con $\text{ROE} \gg r_E$. A la inversa, un banco o petrolera madura puede cotizar a un PER de 6 veces porque sus expectativas de crecimiento futuro con rentabilidad sobre el coste de capital son negativas o exigen una prima de riesgo muy alta.

## Resumen y preguntas de autocomprobación

Los bonos se valoran descontando flujos contractuales mediante su TIR o de forma exacta por arbitraje contra la curva *spot* (ETTI); su riesgo ante oscilaciones de tipos se mide linealmente mediante la Duración Modificada y se corrige al alza mediante la Convexidad. Las acciones representan flujos residuales sin vencimiento, cuyo valor equilibra los dividendos corrientes y las rentas futuras esperadas por encima del coste de oportunidad ($\text{VAOC}$).

**Cuestiones de repaso rápido:**

1. Si la rentabilidad exigida de un bono a 8 años con Duración Modificada $D^* = 6{,}4$ sube repentinamente en 50 puntos básicos ($+0{,}50\%$), ¿qué variación porcentual aproximada de precio estima la Duración y en qué sentido actúa el sesgo de convexidad?
2. Calcula los tipos implícitos anuales $f_{1,2}$ y $f_{2,3}$ dada la ETTI española actual aproximada: $r_1 = 3{,}29\%$, $r_2 = 3{,}42\%$ y $r_3 = 3{,}55\%$.
3. Demuestra algebraicamente por qué una empresa que retiene el 50\% de sus beneficios ($\text{BPA}_1 = 10\ \text{\euro}$) pero los reinvierte a un $\text{ROE} = r_E = 8\%$ posee exactamente el mismo valor $P_0$ que otra idéntica que reparte el 100\% como dividendo.
