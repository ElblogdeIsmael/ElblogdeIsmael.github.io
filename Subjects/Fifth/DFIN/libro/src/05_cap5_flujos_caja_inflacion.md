# Construcción del flujo de caja libre e inflación

\begin{epigrafe}{El beneficio contable es una opinión; la caja incremental después de impuestos es un hecho verificable.}{Principio de presupuestación de capital}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Aplicar los cinco mandamientos del flujo de caja incremental: flujos de caja frente a beneficio contable, exclusión de costes hundidos, inclusión de costes de oportunidad, sinergias o erosión de líneas existentes e invariancia ante gastos financieros.
  \item Calcular con precisión el Flujo de Caja Libre (FCL) mediante las tres formulaciones algebraicas equivalentes (cascada BAIT, flujo neto más intereses ajustados y escudo fiscal de la amortización).
  \item Modelizar correctamente el impacto fiscal de las amortizaciones, la venta de activos usada (Valor Residual Neto) y las variaciones de Necesidades Operativas de Fondos (NOF).
  \item Garantizar la coherencia estricta entre flujos nominales y tasas nominales frente a flujos reales y tasas reales mediante la ecuación de Fisher, integrando además las decisiones óptimas de momento de inversión y sustitución de maquinaria.
\end{itemize}
\end{objetivos}

## Principios del análisis incremental de flujos de caja

Determinar la rentabilidad económica de un proyecto exige responder una pregunta contrafactual precisa: **¿en cuántos euros cambia la tesorería libre de la empresa si emprendemos este proyecto respecto al escenario base de no emprenderlo?** Para responder sin sesgos deben observarse cinco reglas inquebrantables:

1. **Caja después de impuestos, nunca beneficio contable.** Se computan entradas y salidas reales de efectivo tras liquidar el Impuesto de Sociedades ($\tau_c = 25\%$ tipo general en España).
2. **Ignorar los costes hundidos (*sunk costs*).** Todo desembolso ya realizado o comprometido de forma irrevocable antes de la decisión (estudios previos de mercado, ensayos de laboratorio pasados, licencias ya pagadas sin valor de reventa) permanece idéntico se apruebe o no el proyecto; por tanto, es $0$ en la columna incremental.
3. **Incluir los costes de oportunidad.** Si la nueva línea utiliza un almacén propio que hoy está vacío pero podría alquilarse a un tercero por $24.000\ \text{\euro}$ netos anuales o venderse hoy por $300.000\ \text{\euro}$ netos de impuestos, esa renta sacrificada constituye un coste incremental real del proyecto.
4. **Computar efectos colaterales: erosión y sinergias.** Lanzar un canal *online* propio (caso analizado en el Problema 20 de la Relación UGR) o un modelo más barato suele restar ventas a las tiendas físicas o productos tradicionales ya existentes (**canibalización o erosión**). Debe restarse el margen perdido en los productos antiguos, igual que deben sumarse las ventas inducidas de accesorios complementarios (**sinergia**).
5. **Separar inversión y financiación.** En el cálculo estándar del FCL para descontar al coste medio ponderado de capital ($\text{WACC}$), **no se restan los intereses de préstamos ni la devolución de su principal**, ni se suma el préstamo recibido en $t=0$. De lo contrario contaríamos el coste de la deuda y su ventaja fiscal dos veces (en los flujos y en el descuento).

\begin{claseugr}{La trampa del préstamo en el FCL: Problema 19 de la Relación DFIN}
En el Problema 19 de la relación oficial UGR, un proyecto requiere invertir $100.000\ \text{\euro}$ en activo fijo y $7.500\ \text{\euro}$ en fondo de maniobra (NOF), y el enunciado informa explícitamente de que la empresa financia la inversión mediante un préstamo por el método americano al 8\% de interés. Para hallar el \textbf{Flujo de Caja Libre} y descontarlo al WACC, la presencia de ese préstamo americano se ignora por completo en la tabla de flujos del proyecto: se evalúa la capacidad económica del activo suponiendo financiación 100\% con fondos propios (\emph{unlevered cash flow}) y el efecto del préstamo se introduce únicamente en la tasa de descuento (WACC) o mediante el Valor Actual Ajustado (VAA), nunca restando los intereses ni sumando la devolución del principal al FCL.
\end{claseugr}

## Arquitectura del Flujo de Caja Libre (FCL)

Partiendo de los ingresos y costes operativos incrementales de cada ejercicio $t$, el Flujo de Caja Libre se construye siguiendo la cascada presentada en la Figura \ref{fig:cascada-fcl}.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_cascada_fcl.tex}
\caption{Cascada contable y financiera para derivar el Flujo de Caja Libre incremental ($\text{FCL}_t$) a partir del BAIT.}
\label{fig:cascada-fcl}
\end{figure}

Algebraicamente, la relación entre resultados operativos y tesorería libre adopta tres expresiones equivalentes que todo estudiante de DFIN debe saber alternar con soltura según los datos disponibles en el enunciado:

\begin{formula}{Tres vías equivalentes para calcular el Flujo de Caja Operativo ($\text{FCO}_t$)}
Sea $I_t$ el ingreso operativo incremental, $G_t$ los gastos operativos desembolsables (personal, materiales, suministros, alquileres), $\text{Amort}_t$ la dotación fiscalmente deducible a la amortización y $\tau_c$ el tipo del Impuesto de Sociedades:

\begin{enumerate}
  \item \textbf{Vía estándar BAIT (enfoque NOPAT + Amortización):}
  $$\text{FCO}_t = \text{BAIT}_t(1-\tau_c) + \text{Amort}_t$$
  \item \textbf{Vía escudo fiscal directo de la amortización (enfoque EBITDA):}
  $$\text{FCO}_t = (I_t - G_t)(1-\tau_c) + \tau_c \cdot \text{Amort}_t$$
  \item \textbf{Vía de entradas menos salidas de caja directas:}
  $$\text{FCO}_t = I_t - G_t - \text{Impuestos}_t, \qquad \text{donde } \text{Impuestos}_t = \tau_c \cdot (I_t - G_t - \text{Amort}_t)$$
\end{enumerate}

Restando a continuación las inversiones incrementales en circulante ($\Delta \text{NOF}_t$) y en activo fijo ($\text{CAPEX}_t$), y sumando los flujos netos de liquidación al cierre ($\text{VR}_{\text{neto},T}$), se obtiene el Flujo de Caja Libre completo:
$$\text{FCL}_t = \text{FCO}_t - \Delta \text{NOF}_t - \text{CAPEX}_t + \text{VR}_{\text{neto},T}$$
\end{formula}

La segunda vía desvela un hecho de gran calado económico: **la amortización no es una salida de caja, pero ahorra impuestos**. Cada euro amortizado reduce la base imponible y rebaja la factura fiscal en $\tau_c$ euros (por ejemplo, $0{,}25\ \text{\euro}$ por cada euro amortizado en España). De ahí el incentivo de las empresas a utilizar sistemas de amortización acelerada permitidos fiscalmente en lugar de la amortización lineal cuando la normativa lo autoriza: aunque la suma nominal de amortizaciones sea idéntica a lo largo de la vida del activo, adelantar el escudo fiscal a los primeros años eleva su valor actual neto.

## El capital circulante (NOF) y el valor residual neto de impuestos

Dos partidas operativas suelen provocar errores mecánicos en la construcción de tablas de flujos: las Necesidades Operativas de Fondos y el tratamiento fiscal del valor residual.

### Dinámica de las NOF: variaciones, nunca saldos acumulados

Cuando una fábrica o comercio amplía su actividad necesita mantener un nivel permanente de inventarios y financiar crédito a clientes por encima de la financiación espontánea obtenida de sus proveedores:

$$\text{NOF}_t = \text{Existencias}_t + \text{Clientes}_t - \text{Proveedores}_t$$

Lo que absorbe o libera tesorería en un periodo concreto **no es el saldo total de NOF acumulado en balance**, sino exclusivamente su **incremento respecto al año anterior**: $\Delta \text{NOF}_t = \text{NOF}_t - \text{NOF}_{t-1}$. En el último ejercicio del proyecto ($t=T$), salvo indicación contraria de continuidad perpetua, los clientes pagan sus últimas facturas, se liquidan las existencias y se salda a los proveedores; por tanto, $\text{NOF}_T = 0$, lo que genera una entrada positiva de caja igual al saldo recuperado ($\Delta \text{NOF}_T < 0 \implies -\Delta \text{NOF}_T > 0$). La Figura \ref{fig:dinamica-nof} visualiza este perfil clásico de inversión inicial, ampliaciones intermedias y recuperación final.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_dinamica_nof.tex}
\caption{Evolución temporal del stock acumulado de NOF en balance frente al flujo incremental anual en caja ($-\Delta\text{NOF}_t$).}
\label{fig:dinamica-nof}
\end{figure}

### Valor residual contable, de mercado y efecto fiscal en la desinversión

Cuando un equipo se vende al término de su vida útil por un precio de mercado $\text{VR}$ (Valor Residual bruto), la Hacienda Pública grava (o deduce) la plusvalía o minusvalía respecto a su **Valor Neto Contable** en esa fecha ($\text{VNC}_T = \text{Coste de adquisición} - \text{Amortización acumulada}$):

$$\text{VR}_{\text{neto},T} = \text{VR} - \tau_c \cdot (\text{VR} - \text{VNC}_T)$$

- Si $\text{VR} > \text{VNC}_T$: existe plusvalía contable y se pagan impuestos por $\tau_c(\text{VR}-\text{VNC}_T)$, reduciendo el cobro neto.
- Si $\text{VR} < \text{VNC}_T$: se materializa una pérdida fiscal que reduce la base imponible agregada de la empresa (suponiendo beneficios positivos en otras divisiones), generando un ahorro fiscal positivo que aumenta el $\text{VR}_{\text{neto}}$ por encima del precio de venta en el mercado de ocasión.
- Si el activo quedó totalmente amortizado ($\text{VNC}_T = 0$), todo el valor residual bruto tributa: $\text{VR}_{\text{neto}} = \text{VR}(1-\tau_c)$.

\begin{trampa}{El tratamiento de la variación de existencias y la recuperación incompleta}
Revisa cuidadosamente los enunciados de examen para distinguir dos detalles sutiles sobre el circulante y los equipos: primero, nunca restes dos veces el desembolso de NOF en $t=0$ ni olvides recuperarlo al 100\% en $t=T$ (o al porcentaje incobrable especificado, por ejemplo 90\% recuperado si un 10\% de clientes resulta incobrable al liquidar); segundo, cuando se venden activos fijos antes de completar su amortización fiscal (\emph{sustitución anticipada}), el flujo de caja hoy en $t=0$ por liquidar la máquina vieja es precisamente su $\text{VR}_{\text{neto},0}$ y además se pierde desde $t=1$ el ahorro fiscal $\tau_c \cdot \text{Amort}_{\text{vieja}}$ que esa máquina habría seguido generando.
\end{trampa}

## Inflación y consistencia nominal--real

La regla técnica contra la ilusión monetaria es inflexible: **los flujos nominales (expresados en euros corrientes de cada año futuro) deben descontarse al tipo de interés nominal; los flujos reales (expresados en euros constantes de poder adquisitivo de $t=0$) deben descontarse al tipo de interés real.** Mezclar flujos reales con tasa nominal subestima sistemáticamente proyectos largos con apariencia conservadora; mezclar flujos nominales con tasa real sobreestima artificialmente la rentabilidad.

La relación matemática exacta que vincula el tipo nominal $r_N$, el tipo real $r_R$ y la tasa esperada de inflación $\pi$ responde a la **ecuación de Irving Fisher**:

$$(1 + r_N) = (1 + r_R)(1 + \pi) \quad \Longleftrightarrow \quad r_R = \frac{1 + r_N}{1 + \pi} - 1 = \frac{r_N - \pi}{1 + \pi}$$

Solo para tasas muy pequeñas resulta admisible en el cálculo mental rápido la aproximación lineal $r_R \approx r_N - \pi$, pero en problemas cuantitativos debe aplicarse la razón exacta $(1+r_N)/(1+\pi) - 1$.

### Por qué una inflación elevada erosiona las inversiones en euros reales

Incluso realizando un cálculo coherente en euros nominales, **la inflación no es fiscalmente neutral**: perjudica a la inversión productiva porque la normativa tributaria española y comparada permite amortizar únicamente el **coste histórico de adquisición**, sin indexarlo a la subida de precios. Al aumentar la inflación, los ingresos y gastos corrientes crecen en euros nominales mientras la amortización permanece congelada en euros históricos; en consecuencia, el valor real del escudo fiscal $\tau_c \cdot \text{Amort}$ se encoge y sube la presión tributaria efectiva sobre el rendimiento real del capital. Asimismo, no todas las partidas crecen al ritmo del IPC general: salarios, tarifas energéticas y materias primas requieren muchas veces tasas de crecimiento específicas distintas de $\pi$.

## Decisiones intertemporales especiales: momento óptimo y reemplazo

Cerrar un análisis de inversiones requiere dominar tres variantes frecuentes en la práctica corporativa y los exámenes avanzados de DFIN:

1. **Momento óptimo de tala o inversión diferida:** Supongamos una inversión o activo biológico (madera en crecimiento, reserva de vino, proyecto tecnológico que abarata su inversión con la curva de aprendizaje). Retrasar el proyecto desde hoy hasta el año $t^*$ solo añade riqueza si el valor actual neto actualizado a hoy ($\text{VAN}_0(t) = \text{VAN}_t / (1+r)^t$) crece al esperar; el momento óptimo $t^*$ llega cuando la tasa de incremento porcentual del valor del proyecto cae por debajo del coste de oportunidad $r$.
2. **Sustitución de máquina vieja antes del final de su vida útil:** La comparación correcta calcula los **flujos incrementales de reemplazar hoy frente a conservar la máquina antigua** durante los años que le queden (o bien compara el CAE anual de la máquina nueva frente al coste marginal de conservar un año más la vieja, incluyendo la pérdida de valor de reventa y su escudo fiscal de amortización).
3. **Exceso de capacidad informática o industrial instalada:** Si un nuevo proyecto consume el 40\% de la capacidad de un servidor o nave actualmente ociosa que no pensaba alquilarse ni venderse, el uso hoy parece gratuito ($0\ \text{\euro}$ en $t=0$); sin embargo, si ese consumo adelanta desde el año 5 al año 3 la necesidad de comprar una ampliación de capacidad de $200.000\ \text{\euro}$, el coste incremental imputable al proyecto equivale a la diferencia actualizada: $\frac{200.000}{(1+r)^3} - \frac{200.000}{(1+r)^5}$.

## Resumen y preguntas de autocomprobación

La calidad de un VAN depende íntegramente de la precisión con que se estimen sus Flujos de Caja Libre incrementales. Todo coste pasado es irrelevante, todo recurso propio con uso alternativo acarrea un coste de oportunidad, las variaciones de NOF consumen o liberan liquidez según crezca o se liquide el negocio, los escudos fiscales amortizables y los valores residuales netos cierran el modelo tributario, y la consistencia nominal--real previene sesgos inflacionarios.

**Cuestiones de repaso rápido:**

1. Una maquinaria adquirida hace 3 años por $120.000\ \text{\euro}$ (vida útil fiscal inicial 6 años, amortización lineal) se vende hoy en el mercado secundario por $45.000\ \text{\euro}$. Con $\tau_c = 25\%$, ¿cuál es su Valor Neto Contable hoy y cuál es el flujo de caja neto de impuestos tras la venta?
2. Si el coste nominal de oportunidad es $r_N = 9{,}2\%$ y la inflación esperada es $\pi = 2{,}8\%$, ¿cuál es el tipo de descuento real exacto que debes utilizar si proyectaste todos los ingresos y costes en euros constantes de hoy?
3. Una firma lanza un servicio digital por suscripción que reportará $500.000\ \text{\euro}$ anuales de margen operativo antes de impuestos, pero provocará que clientes actuales abandonen una licencia tradicional por valor de $120.000\ \text{\euro}$ anuales de margen operativo antes de impuestos. ¿Qué margen antes de impuestos debe entrar en la tabla incremental del proyecto?
