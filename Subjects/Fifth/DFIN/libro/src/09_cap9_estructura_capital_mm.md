\parteLibro{III}{Estructura de Capital, Impuestos e Interrelación Inversión--Financiación}{Los teoremas de irrelevancia de Modigliani y Miller, la asimetría fiscal de la deuda, los costes de insolvencia, el orden jerárquico y la integración WACC--VAA--FTE.}{part3_estructura.jpg}

# Teoremas de Modigliani y Miller y estructura óptima de capital

\begin{epigrafe}{El valor de una tarta económica depende del tamaño de sus ingredientes productivos en el lado izquierdo del balance, no de cómo se trocee su propiedad en el lado derecho.}{Franco Modigliani y Merton Miller (1958)}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Demostrar la Proposición I de Modigliani y Miller sin impuestos mediante replicación y arbitraje con endeudamiento casero (\emph{Modigliani S.A. frente a Miller S.A.}).
  \item Deducir la Proposición II sin impuestos sobre el coste exigido a los fondos propios ($r_E$) y contrastarla con la tesis tradicional del CMPC en forma de U.
  \item Incorporar el Impuesto de Sociedades ($\tau_c = 25\%$ en España) y la tributación personal (modelo de Miller 1977) para cuantificar el valor actual del escudo fiscal.
  \item Integrar los costes directos e indirectos de insolvencia, los problemas de agencia de la deuda (\emph{Trade-Off}) y la asimetría informativa (\emph{Pecking Order}), junto con la irrelevancia y señalización en la política de dividendos.
\end{itemize}
\end{objetivos}

## El debate clásico y la tesis tradicional

Antes de 1958, la visión predominante en las escuelas de negocios —denominada **Tesis Tradicional**— sostenía que una firma podía reducir su Coste Medio Ponderado de Capital ($\text{CMPC}$) aumentando moderadamente su endeudamiento. El argumento parecía intuitivo: como la deuda es más barata que las acciones ($r_D < r_E$), sustituir acciones caras por deuda barata rebaja el coste promedio siempre que el mercado de acciones tarde en penalizar el riesgo financiero añadido. Solo al alcanzar niveles excesivos de apalancamiento se dispararían tanto $r_E$ como $r_D$, formando un CMPC en forma de U con un óptimo intermedio $(D/E)^*$.

Franco Modigliani y Merton Miller demolieron este razonamiento demostrando que, bajo mercados perfectos de capitales, la tesis tradicional incurre en ilusión financiera: pasa por alto que cada euro de deuda añade riesgo financiero proporcional al euro restante de capital propio desde el primer euro endeudado.

## Modigliani--Miller en mercados perfectos sin impuestos

En ausencia de impuestos, costes de quiebra y asimetrías de información, y asumiendo que empresas e inversores pueden endeudarse al mismo tipo de mercado libre de fricciones:

\begin{axioma}{Proposición I de MM (sin impuestos): Ley de Conservación del Valor}
El valor de mercado total de una empresa apalancada ($V_L = D_L + E_L$) es exactamente igual al valor de mercado de una empresa idéntica no apalancada ($V_U = E_U$) con los mismos flujos operativos esperados ($\text{BAIT}$):
$$V_L = V_U = \frac{\mathbb{E}[\text{BAIT}]}{r_A}$$
Ninguna ingeniería financiera de reempaquetamiento entre acciones y bonos puede crear valor por sí misma si no modifica los flujos generados por los activos reales.
\end{axioma}

La prueba matemática no invoca ninguna fórmula estadística compleja: descansa únicamente en el **arbitraje de endeudamiento casero (*homemade leverage*)**.

\begin{casoreal}{Arbitraje doméstico: Modigliani S.A. frente a Miller S.A. (Tema 7 UGR)}
Consideremos dos compañías con idénticos activos reales y el mismo beneficio operativo esperado anual perpetuo $\text{BAIT} = 10.000\ \text{\euro}$, sin impuestos ($\tau_c = 0$):
\begin{itemize}
  \item \textbf{Modigliani S.A. ($U$, sin deuda):} financiada 100\% con 1.000 acciones a $100\ \text{\euro}$ ($V_U = E_U = 100.000\ \text{\euro}$; $r_A = 10\%$).
  \item \textbf{Miller S.A. ($L$, apalancada):} tiene deuda perpetua por valor de mercado $D_L = 40.000\ \text{\euro}$ al tipo $r_D = 5\%$ (interés anual fijo de $2.000\ \text{\euro}$). El beneficio esperado para accionistas asciende a $10.000 - 2.000 = 8.000\ \text{\euro}$ anuales.
\end{itemize}
¿Cuánto deben valer sus acciones ($E_L$) y su valor total ($V_L$)?
\begin{enumerate}
  \item \textbf{En equilibrio ($V_L = V_U = 100.000\ \text{\euro}$):} $E_L = 100.000 - 40.000 = 60.000\ \text{\euro}$. La rentabilidad esperada por los accionistas de Miller S.A. es $r_E = 8.000 / 60.000 = 13{,}33\%$.
  \item \textbf{¿Qué ocurre si el mercado se equivoca y valora Miller S.A. en $V_L = 110.000\ \text{\euro}$ ($E_L = 70.000\ \text{\euro}$)?} Un inversor que posea el 1\% de Miller S.A. ($700\ \text{\euro}$ de valor, recibiendo el 1\% de $8.000 = 80\ \text{\euro}$ anuales) vende sus acciones de Miller S.A. por $700\ \text{\euro}$, pide un préstamo personal de $400\ \text{\euro}$ al 5\% (interés $-20\ \text{\euro}$/año) y compra el 1\% de Modigliani S.A. por $1.000\ \text{\euro}$ (que rinde $100\ \text{\euro}$/año). Resultado neto de caja: \textbf{recibe $100 - 20 = 80\ \text{\euro}$ anuales idénticos}, pero invirtiendo solo $600\ \text{\euro}$ propios y embolsándose $100\ \text{\euro}$ libres sin riesgo hoy. La presión vendedora sobre Miller S.A. y compradora sobre Modigliani S.A. elimina la discrepancia hasta que $V_L = V_U$.
\end{enumerate}
\end{casoreal}

### Proposición II de MM sin impuestos: la subida lineal del coste propio

Si el coste promedio ponderado del capital invertido en los activos ($r_A$) permanece constante independientemente de $D/E$, despejando $r_E$ de la identidad $r_A = \frac{E}{D+E}r_E + \frac{D}{D+E}r_D$ surge inmediatamente la **Proposición II sin impuestos**:

$$r_E = r_A + \frac{D}{E}\bigl(r_A - r_D\bigr)$$

La rentabilidad esperada exigida por los accionistas crece linealmente con el ratio de endeudamiento $D/E$ mientras la deuda sea libre de riesgo ($r_D$ constante). Al aumentar $D/E$, el incremento exacto en $r_E$ neutraliza peso a peso la supuesta ventaja de emitir deuda más barata, manteniendo invariable $\text{CMPC} = r_A$. Incluso si en niveles altos de apalancamiento los acreedores empiezan a percibir riesgo de impago y elevan $r_D$, los accionistas traspasan parte de la variabilidad extrema hacia los bonistas: $r_E$ reduce su pendiente pero la media ponderada $\text{CMPC}$ sigue plana (Figura \ref{fig:mm-sin-imp}). En paralelo, aplicando el CAPM, la beta de las acciones sube proporcionalmente: $\beta_E = \beta_A + \frac{D}{E}(\beta_A - \beta_D)$.

\begin{figure}[H]
\includetikz[0.96\linewidth]{src/tex/fig_mm_sin_impuestos.tex}
\caption{Comparación entre Modigliani--Miller Proposición II sin impuestos (CMPC invariable) y la Tesis Tradicional (CMPC en forma de U).}
\label{fig:mm-sin-imp}
\end{figure}

## Modigliani--Miller con Impuesto de Sociedades ($\tau_c$)

En el mundo real, Hacienda rompe la simetría entre deuda y patrimonio neto. En España (con tipo general del Impuesto de Sociedades $\tau_c = 25\%$) y en la mayoría de sistemas fiscales, **los intereses pagados sobre la deuda son gasto fiscalmente deducible**, mientras que los dividendos repartidos a los accionistas tributan después de pagar impuestos.

Considérese una empresa con deuda perpetua $D$ a un tipo $r_D$. Cada año paga intereses $I = r_D D$, lo que reduce la base imponible y genera un **ahorro o escudo fiscal anual** de $\tau_c \cdot r_D \cdot D$. Como la deuda perpetua tiene un flujo de riesgo similar al servicio de la propia deuda (descontado a $r_D$ según la formulación original de MM 1963), el valor actual de todos los ahorros fiscales futuros asciende a:

$$\text{VA}(\text{Escudo fiscal}) = \frac{\tau_c \, r_D \, D}{r_D} = \tau_c \, D$$

\begin{formula}{Modigliani--Miller con Impuesto de Sociedades ($\tau_c = 25\%$)}
\begin{itemize}
  \item \textbf{Proposición I con impuestos:}
  $$V_L = V_U + \text{VA}(\text{Escudo fiscal}) = V_U + \tau_c \, D$$
  \item \textbf{Proposición II con impuestos (coste de los fondos propios):}
  $$r_E = r_A + \frac{D}{E}\bigl(r_A - r_D\bigr)(1 - \tau_c)$$
  \item \textbf{Coste Medio Ponderado de Capital después de impuestos ($K_{mpc,di}$):}
  $$K_{mpc,di} = \frac{E}{V} r_E + \frac{D}{V} r_D (1 - \tau_c) = r_A \left(1 - \tau_c \frac{D}{V}\right)$$
\end{itemize}
\end{formula}

Tomada al pie de la letra, la fórmula con impuestos de MM implicaría que toda compañía debería financiarse prácticamente al 100\% con deuda para maximizar el subsidio fiscal de Hacienda. En la realidad observada en bolsa, grandes corporaciones solventes mantienen ratios moderados (entre el 20\% y el 50\% de deuda) e incluso gigantes tecnológicos mantienen caja neta positiva. ¿Qué frena el apalancamiento extremo? Tres fuerzas reales: los impuestos personales, los costes de insolvencia y los conflictos de agencia.

### Tributación personal combinada: el modelo de Miller (1977)

Merton Miller (1977) incorporó también los impuestos que pagan los inversores en su renta personal (IRPF): tipo sobre intereses de renta fija ($\tau_{pd}$, tributación plena como rendimiento del capital mobiliario) frente al tipo efectivo sobre renta variable ($\tau_{pe}$, históricamente inferior gracias al diferimiento fiscal de plusvalías latentes hasta la venta y exenciones parciales). La ganancia neta agregada por cada euro de deuda pasa a ser:

$$\text{Ganancia neta } G_L = \left[1 - \frac{(1 - \tau_c)(1 - \tau_{pe})}{1 - \tau_{pd}}\right] D$$

Si $\tau_{pd} > \tau_{pe}$, la desventaja fiscal personal de cobrar intereses frente a plusvalías bursátiles recorta parcialmente el atractivo del escudo corporativo $\tau_c$, explicando por qué el beneficio fiscal real neto de la deuda es menor al 25\% nominal en países donde intereses y ganancias de capital tributan de forma asimétrica (además de existir límites legales a la deducibilidad de gastos financieros netos, como el tope europeo del 30\% del EBITDA operativo).

## Teoría del *Trade-Off*: costes de insolvencia y agencia de la deuda

Cuando una firma acumula deuda, el riesgo de no poder atender sus cupones crece de forma no lineal. La **Teoría del Equilibrio o *Trade-Off*** postula que el endeudamiento óptimo $(D/V)^*$ equilibra en el margen la ganancia presente de un euro adicional de escudo fiscal con el incremento en valor actual de los costes esperados de insolvencia y agencia:

$$V_L = V_U + \text{VA}(\text{Escudo fiscal}) - \text{VA}(\text{Costes de insolvencia y agencia})$$

Los **costes de dificultades financieras (*financial distress*)** no se reducen a los honorarios legales de abogados y administradores concursales en caso de liquidación (**costes directos**, apenas un 3\%--5\% del valor del activo en grandes concursos); los verdaderamente devastadores son los **costes indirectos**, que golpean mucho antes de declararse el concurso:

- **Fuga de clientes y proveedores:** un fabricante de automóviles, aerolínea o consultora tecnológica percibida al borde de la quiebra pierde contratos porque los clientes dudan del mantenimiento o garantía a 5 años, y los proveedores exigen pago al contado.
- **Pérdida de capital humano clave:** los ingenieros y directivos más valiosos abandonan el barco hacia competidores estables.
- **Liquidación forzosa de activos con descuento (*fire sales*):** necesidad urgente de malvender filiales o patentes muy por debajo de su valor intrínseco para cubrir vencimientos inmediatos.
- **Tres juegos perversos de agencia entre accionistas y acreedores (cuando $D$ es excesiva):**
  1. **Sustitución de activos (*risk shifting*):** con el agua al cuello, el accionista prefiere proyectos muy arriesgados con pequeña probabilidad de pelotazo (se queda toda la subida) y alta probabilidad de quiebra (que pagan los bonistas).
  2. **Infrainversión (*debt overhang*, Myers 1977):** los accionistas rechazan aportar dinero nuevo para un proyecto seguro con $\text{VAN} > 0$ si casi todo el beneficio creado va a parar a mejorar la recuperación de los acreedores antiguos en lugar de al bolsillo del accionista.
  3. **Vaciado de caja (*milking the property*):** repartir dividendos extraordinarios o vender activos clave antes de la insolvencia.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_tradeoff_valor.tex}
\caption{Teoría del \emph{Trade-Off}: compensación marginal entre el escudo fiscal de la deuda y los costes crecientes de insolvencia y agencia.}
\label{fig:tradeoff-valor}
\end{figure}

La Figura \ref{fig:tradeoff-valor} muestra por qué las empresas con activos tangibles líquidos (inmobiliarias, hoteles, redes eléctricas, ferrocarriles) y flujos estables soportan niveles de endeudamiento mucho más altos que firmas intensivas en intangibles y I+D (biotecnología, software emergente), cuyo valor desaparecería rápidamente en un concurso de acreedores.

## La Teoría del Orden Jerárquico (*Pecking Order*)

Stewart Myers y Nicholas Majluf (1984) ofrecieron una explicación complementaria basada en la **asimetría informativa**: los directivos internos conocen el verdadero valor intrínseco de los proyectos y activos mejor que los inversores externos.

Si una empresa anuncia una **ampliación de capital mediante emisión de acciones nuevas**, el mercado deduce racionalmente que si el directivo —que actúa en favor de los accionistas antiguos— decide vender participaciones a inversores nuevos, probablemente es porque sospecha que el precio actual en bolsa está *sobrevalorado*. De lo contrario, si creyera que la acción está infravalorada, no regalaría valor emitiendo acciones baratas y acudiría antes a deuda o caja interna. Por esa selección adversa, anunciar una emisión de acciones provoca de inmediato caídas medias del $-2\%$ al $-4\%$ en la cotización.

Para evitar regalar valor ni sufrir penalización bursátil, las empresas siguen la jerarquía ilustrada en la Figura \ref{fig:pecking-order}: agotan primero la **autofinanciación interna** (beneficios retenidos), recurren en segundo término a **deuda segura** (poco sensible a errores de valoración sobre las perspectivas futuras) y reservan la **ampliación de capital** exclusivamente como último recurso cuando la capacidad de deuda está colmada.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_pecking_order.tex}
\caption{Jerarquía de preferencias de financiación (\emph{Pecking Order Theory}) inducida por la selección adversa de Myers--Majluf.}
\label{fig:pecking-order}
\end{figure}

\begin{trampa}{Diferencia clave entre \emph{Trade-Off} y \emph{Pecking Order} sobre la rentabilidad}
El modelo de \emph{Trade-Off} predice que las empresas muy rentables deberían estar \textbf{más endeudadas} para aprovechar mayores escudos fiscales ($\tau_c D$) sin apenas riesgo de quiebra. En la realidad empírica ocurre exactamente lo contrario: gigantes ultrarrentables suelen exhibir \textbf{poca o nula deuda neta}. El \emph{Pecking Order} explica naturalmente esa paradoja: como generan enorme tesorería interna, financian toda su expansión con beneficios retenidos y ni siquiera necesitan emitir deuda externa.
\end{trampa}

## Política de dividendos y recompra de acciones

Al cerrar un ejercicio con flujo de caja excedente, el consejo decide cómo retribuir al accionista: repartiendo **dividendos en efectivo** o ejecutando una **recompra de acciones propias (*share buybacks*)** para amortizarlas.

En 1961, Miller y Modigliani demostraron el **Teorema de Irrelevancia de los Dividendos**: en mercados perfectos sin impuestos ni costes de emisión, la política de dividendos no altera el valor actual de la empresa ($V_0$). Si la empresa reparte un dividendo inesperado de $1\ \text{\euro}$ por acción manteniendo invariante su plan de inversión real, deberá emitir acciones nuevas o reducir caja por exactamente $1\ \text{\euro}$ por acción; la cotización caerá $1\ \text{\euro}$ exacto en la fecha *ex-dividendo* dejando inalterada la riqueza total del accionista (quien desee liquidez sin esperar dividendo siempre puede fabricar un "dividendo casero" vendiendo una pequeña fracción de sus títulos).

En mercados reales con fricciones cobran protagonismo cuatro matices prácticos:

- **Contenido informativo (señalización):** subir o recortar el dividendo actúa como señal costosa y creíble sobre la persistencia de los flujos futuros de tesorería; por eso las empresas mantienen políticas estables (*dividend smoothing*, modelo de Lintner) y solo elevan el dividendo cuando están seguras de poder sostenerlo.
- **Recompras de acciones frente a dividendos:** cuando los impuestos sobre plusvalías tributan solo al vender y permiten diferimiento fiscal, o cuando el directivo desea retribuir excedentes coyunturales de tesorería sin comprometer un dividendo anual rígido ni enviar una mala señal si al año siguiente baja la caja, las **recompras de acciones** resultan más flexibles y fiscalmente eficientes. No obstante, una recompra no aumenta el valor intrínseco "porque suba el BPA": si se compran acciones a su precio justo de mercado, el BPA sube exactamente para compensar el mayor apalancamiento o menor caja dejando intacto el valor por acción.

## Resumen y preguntas de autocomprobación

Bajo mercados perfectos, el apalancamiento es irrelevante para el valor total de la empresa (MM I) porque la subida lineal del riesgo y rentabilidad exigida por el accionista compensa la deuda barata (MM II). En el mundo real, el Impuesto de Sociedades crea una prima a favor de la deuda ($\tau_c D$), acotada en el límite por la tributación personal, los costes directos e indirectos de insolvencia y las fricciones informativas entre directivos e inversores.

**Cuestiones de repaso rápido:**

1. Una empresa completamente financiada con fondos propios ($V_U = 500.000\ \text{\euro}$, $r_A = 12\%$) decide recomprar $200.000\ \text{\euro}$ en acciones emitiendo $200.000\ \text{\euro}$ de deuda perpetua al $r_D = 5\%$. Sin impuestos ($\tau_c = 0$), calcula el nuevo valor de las acciones $E_L$, el nuevo $r_E$ por MM II y verifica que el CMPC sigue siendo exactamente el $12\%$.
2. Repite el cálculo anterior con Impuesto de Sociedades español ($\tau_c = 25\%$): ¿cuál es el nuevo valor total de la firma $V_L$, el nuevo patrimonio neto $E_L$, el nuevo coste de los fondos propios $r_E$ y el $K_{mpc,di}$ resultante?
3. Explica por qué el problema de infrainversión (*debt overhang*) puede llevar a rechazar un proyecto sin riesgo con $\text{VAN} > 0$ cuando una compañía arrastra un endeudamiento cercano a la quiebra.
