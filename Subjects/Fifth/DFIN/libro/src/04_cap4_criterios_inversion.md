# Criterios clásicos de evaluación de inversiones

\begin{epigrafe}{El VAN mide euros reales de riqueza añadida hoy; la TIR solo mide un porcentaje que puede mentir cuando cambia el signo, la escala o el tiempo.}{Regla de oro del presupuesto de capital}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Evaluar el Valor Actual Neto (VAN) frente a métodos tradicionales incompletos como el Plazo de Recuperación (Payback) y la Rentabilidad Contable Media (RCM).
  \item Diagnosticar las cinco patologías matemáticas y económicas de la Tasa Interna de Rentabilidad (TIR): préstamos, raíces múltiples de Descartes, inexistencia de raíces reales, conflicto en proyectos excluyentes y tipos a plazo no constantes.
  \item Construir la inversión incremental para determinar la Tasa de Cruce de Fisher ($r_F$) y evitar el error de escala.
  \item Seleccionar proyectos bajo racionamiento de capital con el Índice de Rentabilidad (IR) y comparar horizontes desiguales mediante el Coste Anual Equivalente (CAE/VAE).
\end{itemize}
\end{objetivos}

## Por qué el VAN manda y cómo fallan Payback y RCM

En la selección de inversiones reales conviven métricas académicamente consistentes junto a atajos heurísticos heredados de la contabilidad y la práctica bancaria. Para juzgar con rigor cualquier criterio, debemos contrastarlo frente a tres propiedades mínimas deseables:

1. Tener en cuenta **todos los flujos de caja** generados durante la vida útil del proyecto.
2. Reconocer el **valor temporal y el riesgo** de cada flujo según una tasa de descuento de mercado $r$.
3. Permitir la **aditividad de valor**: el valor conjunto de emprender dos proyectos independientes $A$ y $B$ ha de ser igual a $\text{VAN}(A) + \text{VAN}(B)$.

El **Valor Actual Neto (VAN)** satisface simultáneamente las tres condiciones:

$$\text{VAN} = -I_0 + \sum_{t=1}^{T} \frac{FCL_t}{(1+r)^t} = \sum_{t=0}^{T} \frac{FC_t}{(1+r)^t}$$

Su regla de decisión es inequívoca: aceptar cualquier proyecto independiente con $\text{VAN} > 0$, rechazarlo si $\text{VAN} < 0$, y elegir el de mayor VAN positivo cuando dos alternativas compiten de forma mutuamente excluyente.

### El Plazo de Recuperación (*Payback*) y su versión descontada

El **Plazo de Recuperación o *Payback* ($PR$)** mide el número de años necesarios para que los flujos acumulados igualen al desembolso inicial $I_0$. Su cálculo sencillo lo convierte en un filtro intuitivo de liquidez, pero padece dos fallos graves:

- **Ignora el valor temporal del dinero** en su versión simple (un euro del año 3 pesa lo mismo que uno del año 1).
- **Desprecia todo flujo posterior al corte**, penalizando proyectos estratégicos de I+D, energía o infraestructura cuyos ingresos maduran a partir del cuarto o quinto año.

El **Payback Descontado ($PR_d$)** corrige el primer defecto actualizando previamente cada flujo al coste de capital $r$ antes de acumularlo; sin embargo, sigue ignorando cualquier flujo posterior al punto de recuperación y exige fijar un horizonte límite arbitrario. Nunca debe sustituir al VAN como criterio principal, aunque sirve como métrica complementaria de exposición a iliquidez o riesgo geopolítico.

### La Rentabilidad Contable Media (RCM)

La **Rentabilidad Contable Media** divide el beneficio neto medio anual esperado entre el valor contable medio de la inversión:

$$\text{RCM} = \frac{\text{Beneficio neto medio anual}}{\text{Valor contable medio de la inversión}}$$

Este indicador acumula todos los defectos posibles desde el punto de vista financiero: utiliza magnitudes contables afectadas por criterios de amortización arbitrarios en lugar de flujos de caja libre, promedia los años sin descontar cuándo se cobran, y carece de una referencia de mercado objetiva con la que compararse.

## La Tasa Interna de Rentabilidad (TIR) y sus cinco patologías

La **Tasa Interna de Rentabilidad ($\text{TIR}$)** es la tasa de descuento $r^*$ que anula exactamente el VAN de un proyecto:

$$\text{VAN}(r^*) = -I_0 + \sum_{t=1}^{T} \frac{FCL_t}{(1+r^*)^t} = 0$$

En proyectos convencionales —un único desembolso inicial negativo seguido únicamente de flujos positivos—, la curva $\text{VAN}(r)$ es estrictamente decreciente y convexa. En ese escenario limpio, la regla $\text{TIR} > r$ coincide al 100\% con $\text{VAN} > 0$ al decidir proyectos independientes. El problema estalla en cuanto abandonamos ese caso de manual: existen **cinco patologías bien documentadas** donde fiarse de la TIR conduce a decisiones erróneas.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_van_perfil_patologias.tex}
\caption{Perfiles $\text{VAN}(r)$ para proyectos normales, operaciones de financiación, múltiples raíces reales e inexistencia de TIR real.}
\label{fig:van-patologias}
\end{figure}

La Figura \ref{fig:van-patologias} resume gráficamente cuatro configuraciones estructurales:

1. **Patología 1: Inversión frente a financiación (préstamo).** Si $FC_0 > 0$ y los flujos futuros son negativos (cobras hoy y pagas después, como recibir un préstamo o cobrar una suscripción anual por adelantado con costes posteriores), el perfil $\text{VAN}(r)$ es **creciente**. La operación aporta valor únicamente si $r > \text{TIR}$ (el coste de financiación es inferior al coste de oportunidad), justo al revés de la regla habitual.
2. **Patología 2: Múltiples TIR (Regla de signos de Descartes).** Un proyecto cuyos flujos cambian de signo $k$ veces (por ejemplo, inversión inicial en $t=0$, caja positiva en $t=1$, y gran coste de desmantelamiento o cierre medioambiental en $t=2$, secuencia $-, +, -$) constituye un polinomio en $1/(1+r)$ que puede presentar hasta $k$ raíces reales positivas. El Panel (c) muestra el clásico flujo $(-1.000, +2.300, -1.320)$, cuyo VAN se anula tanto en $r_1 = 10\%$ como en $r_2 = 20\%$: ninguna de las dos tasas dice por sí sola si conviene aceptar el proyecto al $14\%$ (donde $\text{VAN} > 0$) o al $5\%$ (donde $\text{VAN} < 0$).
3. **Patología 3: Ninguna TIR real.** Secuencias no convencionales como $(+1.000, -3.000, +2.500)$ —Panel (d)— tienen discriminante negativo: el polinomio no corta al eje horizontal para ninguna tasa de descuento real y posee $\text{VAN} > 0$ para todo $r$, dejando a la TIR completamente muda.
4. **Patología 4: Proyectos mutuamente excluyentes (escala y calendario).** La TIR es una ratio relativa adimensional y resulta ciega al tamaño del proyecto (ganar un 50\% sobre 10 euros crea 5 euros, mucho menos que ganar un 20\% sobre 10.000 euros). Además, penaliza injustamente proyectos con flujos tardíos cuando los tipos de mercado son moderados.
5. **Patología 5: Curva ETTI no plana.** Cuando el tipo de descuento varía según el vencimiento ($r_1 \neq r_2 \neq \dots \neq r_T$), no existe una única tasa de corte $r$ contra la cual comparar una TIR escalar única. En cambio, el VAN sigue calculándose sin ambigüedad descontando cada flujo con su factor *spot* $(1+r_t)^{-t}$.

### El remedio de la TIR modificada y la inversión incremental (Tasa de Fisher)

Cuando dos proyectos $A$ y $B$ son mutuamente excluyentes y sus perfiles $\text{VAN}(r)$ se cruzan en una tasa $r_F$ (**Tasa de Cruce de Fisher**), se produce una zona de conflicto para todo $r < r_F$: la TIR elige un proyecto mientras el VAN maximizador de riqueza elige el otro.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_tasa_cruce_fisher.tex}
\caption{Conflicto entre VAN y TIR en proyectos excluyentes y cálculo de la Tasa de Cruce de Fisher ($r_F = 18{,}18\%$).}
\label{fig:cruce-fisher}
\end{figure}

La Figura \ref{fig:cruce-fisher} ilustra la mecánica rigurosa para resolver el dilema: construir el **proyecto incremental $A - B$** (restar flujo a flujo los del proyecto pequeño o temprano a los del proyecto grande o tardío). En el ejemplo graficado:

$$A = (-1.000,\ +100,\ +1.450), \qquad B = (-1.000,\ +1.200,\ +150)$$

La inversión incremental $(A - B)$ arroja $(0,\ -1.100,\ +1.300)$, cuya TIR exacta resuelve el punto de corte:

$$-\frac{1.100}{1+r_F} + \frac{1.300}{(1+r_F)^2} = 0 \quad \Longrightarrow \quad 1 + r_F = \frac{1.300}{1.100} = 1{,}1818 \quad \Longrightarrow \quad r_F = 18{,}18\%$$

Si el coste de capital de la empresa es $r < 18{,}18\%$, la inversión incremental posee VAN positivo y conviene elegir $A$; si $r > 18{,}18\%$, el coste de oportunidad castiga esperar al año 2 y gana $B$. Por supuesto, calcular directamente el $\text{VAN}(r)$ de ambos evita tener que construir diferencias incrementales sucesivas cuando compiten tres o más alternativas.

\begin{claseugr}{Resumen comparativo de los criterios de evaluación en DFIN (Tema 3)}
\begin{center}
\begin{tabular}{@{}lcccc@{}}
\toprule
\textbf{Criterio} & \textbf{Usa $FCL$} & \textbf{Descuenta} & \textbf{Mide valor} & \textbf{Válido excluyentes} \\
\midrule
VAN & Sí & Sí & Sí (euros) & \textbf{Sí, siempre} \\
TIR & Sí & Implícito & No (\%) & No sin análisis incremental \\
Payback simple & Sí & No & No (años) & No \\
Payback descontado & Sí & Sí & No (años) & No \\
RCM & No (contable) & No & No (\%) & No \\
Índice de Rentabilidad & Sí & Sí & Ratio & Solo racionamiento divisibilidad \\
CAE / VAE & Sí & Sí & Flujo anual & \textbf{Sí, vidas desiguales} \\
\bottomrule
\end{tabular}
\end{center}
\end{claseugr}

## Racionamiento de capital e Índice de Rentabilidad

En el mundo ideal sin restricciones financieras debería ejecutarse todo proyecto con $\text{VAN} > 0$. Sin embargo, muchas divisiones corporativas operan bajo un techo presupuestario anual ($K_{\max}$) impuesto por la matriz o por restricciones transitorias de endeudamiento (**racionamiento blando o duro de capital**). Si el presupuesto es limitado, elegir los proyectos de mayor VAN individual puede no maximizar el VAN agregado del presupuesto.

La métrica adecuada cuando los proyectos son divisibles es el **Índice de Rentabilidad ($IR$)** o ratio de beneficio sobre desembolso:

$$IR = \frac{VA(\text{flujos futuros})}{I_0} = 1 + \frac{\text{VAN}}{I_0}$$

Se ordenan los proyectos de mayor a menor $IR$ (siempre que $IR > 1 \iff \text{VAN} > 0$) y se asigna presupuesto hasta agotar el límite $K_{\max}$.

\begin{trampa}{Indivisibilidad de proyectos en racionamiento discreto (Problema de la Mochila)}
Cuando los proyectos no pueden fraccionarse al 30\% o al 60\% (no puedes construir medio puente ni medio centro de datos), ordenar de mayor a menor $IR$ puede dejar un remanente presupuestario ocioso y producir una combinación subóptima. En ese caso, propio de optimización discreta (\emph{0-1 Knapsack Problem}), deben enumerarse las carteras factibles con $\sum x_i I_{0,i} \le K_{\max}$ ($x_i \in \{0,1\}$) o resolver un programa lineal entero que maximice directamente $\sum x_i \text{VAN}_i$.
\end{trampa}

## Comparación de vidas útiles desiguales: CAE y VAE

Supongamos que una empresa debe elegir entre dos hornos industriales o dos flotas de reparto mutuamente excluyentes que cumplen la misma función pero poseen vidas económicas distintas: la máquina $A$ cuesta menos hoy y dura 3 años; la máquina $B$ exige más inversión inicial pero dura 5 años. Comparar directamente $\text{VAN}_A$ contra $\text{VAN}_B$ comete un sesgo de horizonte si la necesidad productiva es recurrente y las máquinas se renovarán indefinidamente en ciclos sucesivos.

El método riguroso consiste en transformar el VAN total (o el Valor Actual de Costes, VAC) en una renta anual constante equivalente distribuida durante los $n$ años de vida útil (**Valor Anual Equivalente, VAE**, o **Coste Anual Equivalente, CAE** cuando solo se analizan costes):

$$\text{VAE} = \frac{\text{VAN}_n}{a_{\overline{n}|r}}, \qquad \text{donde } a_{\overline{n}|r} = \frac{1 - (1+r)^{-n}}{r}$$

El proyecto preferible será el que presente **mayor VAE positivo** (si genera ingresos y gastos) o **menor CAE positivo** (si solo se comparan alternativas obligatorias de equipamiento por sus costes). En caso de existir inflación esperada en el precio futuro de reposición de maquinaria, la comparación ha de realizarse expresando los flujos y las anualidades equivalentes en **términos reales** (sin inflación) o proyectando cadenas explícitas hasta el mínimo común múltiplo de vidas útiles con precios nominales actualizados.

## Resumen y preguntas de autocomprobación

El VAN constituye la regla de decisión soberana en finanzas corporativas. El Payback aporta control de liquidez complementario, la TIR exige diagnóstico previo de signos y de tasa de cruce de Fisher antes de aplicarse, el Índice de Rentabilidad ordena carteras divisibles bajo restricción presupuestaria y el CAE/VAE iguala horizontes de renovación recurrente.

**Cuestiones de repaso rápido:**

1. Construye un proyecto sencillo de 3 años que tenga exactamente dos TIR reales positivas e identifica en qué intervalo de coste de capital $r$ conviene aceptarlo.
2. Si un proyecto de inversión cuesta $1.000\ \text{\euro}$ y genera un VAN de $350\ \text{\euro}$, ¿cuál es su Índice de Rentabilidad ($IR$)? ¿Por qué dos proyectos pueden tener el mismo VAN y distinto $IR$?
3. Una impresora industrial A cuesta $6.000\ \text{\euro}$, consume $1.200\ \text{\euro}$/año de mantenimiento y dura 3 años; la alternativa B cuesta $9.500\ \text{\euro}$, consume $900\ \text{\euro}$/año y dura 5 años. Con un coste de capital real del 8\%, calcula el CAE de ambas y decide cuál minimiza el coste anual perpetuo.
