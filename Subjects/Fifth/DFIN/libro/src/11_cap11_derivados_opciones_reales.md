\parteLibro{IV}{Opciones Reales, Circulante y Síntesis Práctica UGR}{Valoración de derivados financieros, flexibilidad estratégica como opciones reales, gestión del capital circulante y casos integradores resueltos paso a paso.}{part4_opciones.jpg}

# Opciones financieras, Black--Scholes y opciones reales

\begin{epigrafe}{El VAN estático trata la inversión como un billete de tren sin devolución ni escalas; las opciones reales valoran la inteligencia de poder decidir sobre la marcha cuando llega nueva información.}{Tradición estratégica de Brealey--Myers}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Caracterizar las posiciones básicas en opciones financieras (\emph{Call} y \emph{Put}, compradas y vendidas) y demostrar la paridad \emph{Put--Call} europea libre de arbitraje.
  \item Valorar derivados en tiempo discreto mediante árboles binomiales por cartera replicante y probabilidad neutral al riesgo ($p$).
  \item Interpretar económicamente la fórmula de Black--Scholes--Merton y sus cinco derivadas parciales (\emph{Griegas}: $\Delta$, $\Gamma$, $\Theta$, $\nu$, $\rho$).
  \item Traducir la flexibilidad operativa corporativa (esperar, ampliar, abandonar o reconfigurar) al lenguaje de las opciones reales, conectando con la analogía de clase UGR (\emph{caso Telefónica}) y la lectura del capital propio como opción de compra.
\end{itemize}
\end{objetivos}

## Anatomía de las opciones financieras y paridad *Put--Call*

Una **opción financiera** otorga a su comprador el **derecho, pero no la obligación**, de comprar (*Call*) o vender (*Put*) un activo subyacente ($S$) a un precio prefijado llamado **precio de ejercicio (*strike*, $E$)** en una fecha futura ($T$, opción **europea**) o en cualquier momento hasta dicha fecha (opción **americana**). A cambio de esa asimetría favorable, el comprador abona hoy una prima inicial ($c_0$ o $p_0$) al vendedor (*writer*), quien asume la obligación vinculante si el comprador ejerce.

Al vencimiento $T$, el valor intrínseco o *payoff* bruto de cada contrato depende exclusivamente de dónde cierre la cotización $S_T$ respecto a $E$:

$$\text{Payoff Call}_T = \max(S_T - E,\ 0), \qquad \text{Payoff Put}_T = \max(E - S_T,\ 0)$$

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_payoff_opciones.tex}
\caption{Funciones de pago al vencimiento (línea continua) y beneficio neto descontando la prima inicial (línea discontinua) en opciones \emph{Call} y \emph{Put}.}
\label{fig:payoff-opciones}
\end{figure}

La Figura \ref{fig:payoff-opciones} muestra la asimetría fundamental de estos contratos: mientras quien compra limita su pérdida máxima a la prima pagada ($-c_0$ o $-p_0$), quien vende cobra una prima acotada hoy asumiendo pérdidas potencialmente muy superiores si el mercado se mueve en contra.

### Paridad *Put--Call* europea y ley del precio único

Consideremos dos carteras formadas hoy ($t=0$) sobre la misma acción que no reparte dividendos hasta el vencimiento $T$:

- **Cartera $A$ (Put protectora):** compramos 1 acción al contado ($S_0$) más 1 opción Put europea con ejercicio $E$ ($p_0$). En $T$, si $S_T < E$ ejercemos la Put y vendemos por $E$; si $S_T \ge E$ dejamos expirar la Put y nos quedamos la acción $S_T$. Pago seguro en $T$: $\max(S_T, E)$.
- **Cartera $B$ (Call + bono sin riesgo):** compramos 1 opción Call europea con el mismo ejercicio $E$ ($c_0$) e invertimos hoy en Letras del Tesoro el valor actual de $E$, es decir $E / (1+r_f)^T$ (o $E e^{-r_f T}$ en tiempo continuo). En $T$, el bono entrega $E$; si $S_T \ge E$ ejercemos la Call pagando esos $E$ y recibiendo la acción ($S_T$); si $S_T < E$ dejamos expirar la Call y conservamos los $E$. Pago idéntico en $T$: $\max(S_T, E)$.

Como dos carteras con idéntico pago en todo estado futuro del mundo deben costar exactamente lo mismo hoy para impedir arbitraje gratuito, obtenemos la **Paridad *Put--Call***:

$$S_0 + p_0 = c_0 + \frac{E}{(1+r_f)^T}$$

Esta identidad sirve tanto para detectar anomalías de precios entre opciones como para fabricar sintéticamente una Put a partir de una Call vendiendo acciones en corto e invirtiendo en deuda pública.

## Valoración en tiempo discreto: el árbol binomial

¿Por qué no basta descontar el *payoff* esperado de una opción al CAPM? Porque una opción cambia drásticamente de apalancamiento y riesgo sistemático en cada subida o bajada del subyacente, haciendo imposible aplicar una tasa constante única $k$. Fischer Black, Myron Scholes y Robert Merton descubrieron en 1973 la solución exacta mediante **replicación libre de arbitraje**.

En un paso binomial elemental, una acción de precio actual $S_0$ puede subir a $S_u = u S_0$ o bajar a $S_d = d S_0$ con el tipo libre de riesgo $r_f$ cumpliendo $d < 1+r_f < u$. Es siempre posible construir una cartera con $\Delta = \frac{C_u - C_d}{S_u - S_d}$ acciones y préstamo sin riesgo que reproduzca exactamente los pagos $(C_u, C_d)$ de la opción. Igualando al coste de replicación o despejando directamente los pesos, emerge un atajo matemático de enorme belleza: la **probabilidad neutral al riesgo ($p$)** —nótese que *no* es la probabilidad estadística real de que suba la bolsa, sino el peso sintético que hace que el subyacente rinda exactamente $r_f$ en esperanza—:

$$p = \frac{(1+r_f) - d}{u - d}, \qquad C_0 = \frac{p \, C_u + (1-p) \, C_d}{1 + r_f}$$

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_arbol_binomial_opcion.tex}
\caption{Valoración paso a paso de una opción \emph{Call} mediante árbol binomial de dos periodos ($S_0=100$, $E=110$, $u=1{,}25$, $d=0{,}80$, $r_f=5\%$).}
\label{fig:arbol-binomial}
\end{figure}

La Figura \ref{fig:arbol-binomial} resuelve un árbol completo de dos periodos mediante **inducción hacia atrás**: calculamos los tres valores terminales en $t=2$ ($\max(S_2 - 110, 0) = \{46{,}25;\ 0;\ 0\}$), retrocedemos a $t=1$ con $p = 5/9$ ($C_u = 24{,}47$, $C_d = 0$) y retrocedemos de nuevo hasta $t=0$ obteniendo el precio único libre de arbitraje $C_0 = 12{,}95$. En opciones americanas, basta comprobar en cada nodo intermedio si el ejercicio inmediato ($S - E$) supera al valor de continuación calculado por la fórmula neutral al riesgo.

## El modelo continuo de Black--Scholes--Merton y las Griegas

Si dividimos el intervalo $[0, T]$ en un número creciente de subintervalos binomiales cada vez más breves ($n \to \infty$), el árbol discreto converge a un movimiento browniano geométrico y la suma binomial converge a la célebre fórmula analítica de **Black, Scholes y Merton (1973)** para una opción *Call* europea sobre acción sin dividendos:

$$C_0 = S_0 \, N(d_1) - E \, e^{-r_f T} \, N(d_2)$$

donde $N(\cdot)$ es la función de distribución acumulada de la normal estándar y las distancias tipificadas valen:

$$d_1 = \frac{\ln(S_0/E) + \left(r_f + \frac{\sigma^2}{2}\right)T}{\sigma\sqrt{T}}, \qquad d_2 = d_1 - \sigma\sqrt{T}$$

La lectura intuitiva de la fórmula refleja su construcción por arbitraje: $N(d_1) = \Delta$ indica el número de acciones de la cartera replicante necesaria hoy, $E e^{-r_f T} N(d_2)$ representa el préstamo bancario descontado para financiar esa réplica, y $N(d_2)$ mide la probabilidad neutral al riesgo de que la opción acabe en dinero ($S_T > E$) al vencimiento.

### Sensibilidad de la prima: las cinco Griegas

| Griega | Definición matemática | Signo (Call comprada) | Interpretación económica para gestión y opciones reales |
| :--- | :--- | :---: | :--- |
| **Delta ($\Delta$)** | $\dfrac{\partial C}{\partial S_0} = N(d_1)$ | Positivo $(0, 1)$ | Variación del valor de la opción por 1\texteuro{} de subida del subyacente; ratio de cobertura |
| **Gamma ($\Gamma$)** | $\dfrac{\partial^2 C}{\partial S_0^2}$ | Positivo $(>0)$ | Curvatura de la opción; velocidad a la que cambia $\Delta$ y coste de reajuste |
| **Vega ($\nu$)** | $\dfrac{\partial C}{\partial \sigma}$ | Positivo $(>0)$ | Impacto de la incertidumbre ($\sigma$): \textbf{¡a mayor volatilidad, mayor valor de opción!} |
| **Theta ($\Theta$)** | $\dfrac{\partial C}{\partial t} = -\dfrac{\partial C}{\partial T}$ | Negativo $(<0)$ | Desgaste temporal: acercarse al vencimiento reduce el valor temporal vivo |
| **Rho ($\rho$)** | $\dfrac{\partial C}{\partial r_f}$ | Positivo $(>0)$ | Mayor tipo libre de riesgo reduce el valor presente del ejercicio futuro $E e^{-r_f T}$ |

## Las opciones reales en la empresa y la analogía de clase (caso Telefónica)

El análisis clásico del VAN supone implícitamente un mundo rígido de "ahora o nunca": aceptas invertir en $t=0$ o pierdes el proyecto para siempre, y una vez iniciado operas sin cambios hasta $t=T$. En la economía real, los directivos poseen **flexibilidad estratégica** para reaccionar ante el flujo de nueva información. Esa flexibilidad vale dinero y convierte el criterio estratégico de decisión en:

$$\text{VAN}_{\text{estratégico}} = \text{VAN}_{\text{estático básico}} + \text{Valor de las Opciones Reales}$$

Existen cuatro familias principales de opciones reales dentro de la empresa:

1. **Opción de diferir o esperar (*Call* sobre el proyecto):** poseer una patente farmacéutica, una reserva minera o una licencia de espectro móvil 5G otorga el derecho —no la obligación— de invertir $I_0$ si el mercado demuestra ser rentable. Esperar tiene un coste (perder los flujos tempranos) pero protege contra escenarios adversos y permite capturar solo la cola positiva.
2. **Opción de ampliar o seguir (*Call* de segunda etapa):** abrir una primera tienda piloto o lanzar una versión básica de software con $\text{VAN}$ ligeramente negativo hoy para adquirir el derecho a escalar rápidamente si la demanda despega.
3. **Opción de abandonar o liquidar (*Put* sobre el proyecto):** diseñar una fábrica o flota con activos modulares revendibles en el mercado de ocasión permite rescatar su valor residual $V_{\text{liq}}$ si el negocio fracasa, poniendo un suelo a las pérdidas.
4. **Opción de flexibilidad productiva (*switching*):** plantas eléctricas duales gas/hidrógeno o cadenas logísticas multimodales que cambian de proveedor o producto según los precios relativos.

\begin{claseugr}{Analogía vista en clase UGR: el VAN de Telefónica como opción Call}
En los apuntes de clase de la asignatura (\emph{Temas finales / ampliación sobre opciones reales}) se ilustra con el ejemplo de \textbf{Telefónica} y una concesión o inversión tecnológica cómo la estructura matemática de la decisión corporativa imita exactamente el gráfico de pagos de una opción de compra:
$$\text{Payoff de la inversión flexible} = \max(S - E,\ 0)$$
donde $S = \text{VA}(\text{flujos operativos del despliegue})$ y $E = I_0$ (la inversión de despliegue requerida). Como recoge la Figura \ref{fig:van-como-call}, si el proyecto fuese una obligación rígida hoy ($\text{VAN} = S - E$) cuando $S$ es ligeramente inferior a $I_0$, el criterio estático ordenaría rechazarlo (\text{VAN} $< 0$). Sin embargo, mientras la concesión o tecnología siga vigente durante un plazo $T > 0$ con volatilidad de demanda $\sigma > 0$, la empresa conserva una \textbf{opción Call viva cuyo valor es estrictamente positivo} incluso estando fuera de dinero ($S < E$). Solo debe ejercerse la opción real (invertir hoy $I_0$) cuando $S$ supere a $E$ lo bastante como para compensar la pérdida del valor temporal de seguir esperando.
\end{claseugr}

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_van_como_call.tex}
\caption{Isomorfismo entre opción \emph{Call} y opción real de diferimiento (arriba) frente a la curva de valor estratégico vs VAN rígido (abajo).}
\label{fig:van-como-call}
\end{figure}

\begin{axioma}{Las acciones de una empresa endeudada son una opción Call sobre los activos}
Desde la teoría de Black, Scholes y Merton (1974), las acciones ($E$) de una compañía con deuda cupón cero de nominal $D$ con vencimiento $T$ equivalen exactamente a una \textbf{opción Call sobre los activos totales ($V$)} con precio de ejercicio igual al principal de la deuda ($E_{\text{strike}} = D$). Si al vencimiento $V_T > D$, los accionistas "ejercen" pagando $D$ a los acreedores y se quedan $V_T - D$; si $V_T < D$, ejercen la responsabilidad limitada entregando las llaves de la empresa a los acreedores y percibiendo $0$. Esta simetría explica matemáticamente el problema de agencia del Capítulo 1 y del Trade-Off: dado que Vega ($\partial C/\partial \sigma$) es positiva para una Call, los accionistas de una empresa cerca de la insolvencia ganan valor destruyendo estabilidad si aumentan el riesgo ($\sigma$) de los activos a costa de los acreedores.
\end{axioma}

## Resumen y preguntas de autocomprobación

Las opciones financieras y reales rompen la linealidad del descuento clásico al introducir decisiones asimétricas contingentes al estado del mercado. Valorar correctamente esa opcionalidad evita infraestimar inversiones estratégicas en entornos de alta incertidumbre, pero también exige disciplina para comprobar cuándo el valor de esperar supera al coste de perder los primeros flujos de caja.

**Cuestiones de repaso rápido:**

1. Una acción cotiza hoy a $S_0 = 60\ \text{\euro}$ sin dividendos. Una opción Call europea a 1 año con precio de ejercicio $E = 60\ \text{\euro}$ cotiza a $c_0 = 7{,}20\ \text{\euro}$. Con $r_f = 4\%$ anual compuesto (capitalización simple discreta $(1+r_f)$), ¿cuál debe ser el precio exacto de equilibrio de la Put europea equivalente según la Paridad *Put--Call*?
2. En el árbol binomial de la Figura \ref{fig:arbol-binomial} ($S_0=100, u=1{,}25, d=0{,}80, r_f=5\%$), calcula el valor hoy ($t=0$) de una opción Put europea con el mismo vencimiento $t=2$ y precio de ejercicio $E = 110$, y comprueba la paridad *Put--Call* frente a $C_0 = 12{,}95$.
3. Explica usando el signo de Vega ($\nu$) por qué una mayor volatilidad de mercado deprime el valor actual de un bono corporativo tradicional con riesgo, mientras incrementa el valor de una patente tecnológica pendiente de desarrollo comercial.
