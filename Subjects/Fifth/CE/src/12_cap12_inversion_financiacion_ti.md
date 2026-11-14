# Plan de inversión, financiación, devengo y arquitectura TI

\epigrafe{Los ingresos son vanidad, el beneficio es cordura, pero la caja es la realidad.}{Máxima clásica de gestión financiera operativa}

\begin{hojaruta}
\begin{itemize}
  \item Construir el Plan de Inversión inicial distinguiendo activos fijos (CAPEX) del fondo de maniobra indispensable para arrancar.
  \item Calcular el Punto Muerto en unidades físicas y monetarias junto con el margen de seguridad operativo.
  \item Resolver en detalle la diferencia entre Principio de Devengo y Principio de Caja para evitar el fenómeno de "morir de éxito".
  \item Recorrer el ciclo completo de financiación a través del Valle de la Muerte y diseñar la arquitectura TI mediante los 8 modelos atómicos de Weill y Vitale.
\end{itemize}
\end{hojaruta}

## Plan de inversión inicial y estructura de costes (Tema 8)

Todo lanzamiento requiere inmovilizar recursos antes de recibir el primer cobro. El **Plan de Inversión** recoge todos los activos necesarios para abrir las puertas y operar con normalidad hasta alcanzar la autosuficiencia en tesorería. Se estructura en tres bloques:

1. **Inmovilizado intangible:** desarrollo inicial de plataforma software o aplicación, patentes, registros de marca OEPM, licencias perpetuas de software y gastos de traspaso si existe local comercial.
2. **Inmovilizado material:** equipamiento informático, servidores propios (si no se opera en la nube), mobiliario, maquinaria industrial, reforma de instalaciones y vehículos.
3. **Capital circulante inicial (*Working Capital*) / Fondo de Maniobra de arranque:** error gravísimo es sumar solo ordenadores y mobiliario. Si la empresa necesita tres meses de nóminas, alquiler, cuota de autónomos, asesoría y campañas comerciales antes de empezar a cobrar sus primeras facturas, **esa reserva de liquidez inicial forma parte obligatoria de la inversión a financiar el día cero**.

Una regla sana en proyectos nacientes consiste en minimizar inversiones pesadas en activos fijos irreversibles (CAPEX) transformándolas siempre que sea posible en **gasto operativo variable o flexible (OPEX)** mediante alquiler de equipos, infraestructura cloud elástica por consumo o espacios compartidos en viveros públicos.

## Viabilidad económica: Punto Muerto y apalancamiento operativo

Conocida la estructura fija mensual o anual ($CF$, independiente del volumen vendido: salarios fijos, alquiler, seguros, suscripciones base, amortizaciones) y el coste variable unitario ($CV_u$, directamente proporcional a cada unidad vendida: comisiones de pasarela de pago, coste de envío, materias primas, consumo cloud por usuario), la diferencia entre el precio neto de venta ($p$, sin IVA) y $CV_u$ define el **margen de contribución unitario**: la aportación de cada venta adicional para ir pagando la estructura fija. La Figura \ref{fig:punto-muerto} visualiza la intersección de ingresos y costes totales.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_punto_muerto.tex}
  \caption{Gráfico de Punto Muerto (umbral de rentabilidad económica): cruce entre Ingresos Totales y Costes Totales.}
  \label{fig:punto-muerto}
\end{figure}

\begin{formula}{Umbral de rentabilidad o Punto Muerto ($Q^*$ y $V^*$)}
$$M_u = p - CV_u \qquad \text{(Margen de contribución unitario)}$$
$$Q^* = \frac{CF}{p - CV_u} \qquad \text{(Unidades físicas o suscripciones para beneficio } B = 0\text{)}$$
$$V^* = p \cdot Q^* = \frac{CF}{1 - \dfrac{CV_u}{p}} \qquad \text{(Cifra de facturación de equilibrio)}$$
$$\text{Margen de Seguridad (\%)} = \frac{Q_{\text{previsto}} - Q^*}{Q_{\text{previsto}}} \times 100$$
\end{formula}

Dos lecciones estratégicas emanan directamente de estas ecuaciones:

- **En negocios de software puro (*SaaS*)**, el coste variable unitario por licencia es muy pequeño (a menudo inferior al 10\%--15\% del precio), por lo que el margen de contribución resulta elevadísimo, pero los **costes fijos de ingeniería** hacen que por debajo de $Q^*$ la empresa pierda dinero rápido y, una vez superado $Q^*$, el beneficio crezca de forma acelerada (**alto apalancamiento operativo**).
- **En servicios intensivos en consultoría o comercio minorista**, el coste variable representa una fracción mayor del precio, reduciendo la volatilidad pero exigiendo mucho volumen para escalar márgenes.

## Viabilidad financiera: Principio de Devengo frente a Principio de Caja

Este es el punto crítico más repetido en el aula y en los casos prácticos de Creación de Empresas: **una empresa puede presentar beneficios contables brillantes y quebrar ese mismo trimestre por quedarse sin saldo en su cuenta corriente**. Esta paradoja —conocida en finanzas corporativas como **"morir de éxito"**— nace de confundir dos criterios de registro:

- **Principio de Devengo (Cuenta de Pérdidas y Ganancias $\rightarrow$ Viabilidad Económica):** los ingresos se anotan cuando se entrega el bien o se presta el servicio (fecha de factura), y los gastos cuando se consume el recurso, con independencia del momento de cobro o pago. Además, las compras de inversión (ordenadores, maquinaria) no aparecen enteras como gasto el primer mes, sino repartidas en varios años como **amortización**, aunque el proveedor exija pagarlas al contado hoy.
- **Principio de Caja (Presupuesto de Tesorería $\rightarrow$ Viabilidad Financiera):** solo registra dinero efectivo que entra (**cobros**) o sale (**pagos**) de la cuenta bancaria en el mes exacto en que se produce el movimiento (incluyendo el IVA soportado y repercutido, las fianzas, las amortizaciones de deuda financiera y el pago al contado de inversiones).

La Figura \ref{fig:devengo-caja} ilustra un escenario típico de empresa B2B que crece rápido vendiendo a grandes clientes que pagan a 90 días, mientras paga nóminas, proveedores e impuestos cada 30 días.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_devengo_vs_caja.tex}
  \caption{Divergencia entre beneficio contable devengado y tesorería acumulada: el mecanismo de "morir de éxito".}
  \label{fig:devengo-caja}
\end{figure}

| Factor que agrava el desfase de caja | Impacto contable (PyG) | Impacto en Tesorería (Caja) | Medida correctora en el Plan |
| :--- | :--- | :--- | :--- |
| Clientes pagan a 60--90 días | Ninguno (venta ya contabilizada). | Entrada diferida; exige financiar nóminas de 3 meses. | Anticipar cobros (descuento pronto pago, suscripción anual anticipada, *factoring*). |
| Crecimiento explosivo de pedidos | Sube el beneficio devengado. | Obliga a comprar más stock o contratar antes de cobrar. | Ligar crecimiento a póliza de crédito o línea de circulante bancaria. |
| Desfase de IVA trimestral | Neutro en resultado contable. | Si se factura a 90 días, puede tocar ingresar IVA a Hacienda antes de cobrar la factura. | Solicitar régimen de criterio de caja en IVA si aplica o reservar provisión mensual. |
| Inversiones iniciales al contado | Solo gasta amortización mensual pequeña. | Salida inmediata de toda la caja al comprar el activo. | *Leasing*, *renting*, nube por consumo o financiación a largo plazo. |

## Ciclo de financiación y cruce del Valle de la Muerte

Durante los primeros 12 a 24 meses de vida, la suma de desarrollos iniciales, contratación temprana y captación comercial supera casi siempre a los cobros recibidos, dibujando una curva negativa acumulada conocida como el **Valle de la Muerte** (Figura \ref{fig:valle-muerte}). La regla de oro de estructura financiera consiste en **emparejar cada fase de riesgo con la fuente de capital adecuada**: la banca comercial ordinaria exige garantías e históricos de beneficios que una empresa naciente no tiene, por lo que no financia el riesgo exploratorio inicial.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_valle_muerte_financiacion.tex}
  \caption{Curva en J del flujo acumulado, Valle de la Muerte y fuentes idóneas de financiación por etapas.}
  \label{fig:valle-muerte}
\end{figure}

### Mapa de fuentes financieras por etapa

1. **Etapa idea / arranque (*Pre-Seed*):** *Bootstrapping* (autofinanciación estricta reinvirtiendo ingresos de consultoría o ahorros propios), **FFF (*Family, Friends and Fools*)**, premios universitarios y *crowdfunding* de recompensa o donación (que además valida demanda real antes de fabricar).
2. **Etapa validación y primer producto (*Seed*):** **Business Angels** (inversores privados que aportan entre 20.000 y 250.000 euros junto con red comercial y mentoría), aceleradoras, préstamos participativos **ENISA** sin avales reales y ayudas **CDTI NEOTEC**.
3. **Etapa expansión y cruce del abismo (*Series A/B y crecimiento*):** fondos de **Venture Capital (Capital Riesgo)** que invierten millones a cambio de participación societaria minoritaria pero influyente y buscan multiplicar su inversión en 5--7 años mediante salida (*exit*), combinados con banca tradicional, líneas ICO y *venture debt* una vez existen flujos de caja predecibles.

\begin{formula}{Cálculo de dilución societaria y valoración en rondas de capital}
$$\text{Valoración Post-money} = \text{Valoración Pre-money} + \text{Inversión captada}$$
$$\%\,\text{Inversor} = \frac{\text{Inversión captada}}{\text{Valoración Post-money}} \qquad\text{y}\qquad \%\,\text{Fundadores nuevo} = \%\,\text{Anterior} \times (1 - \%\,\text{Inversor})$$
\end{formula}

### Evaluación cuantitativa de inversiones: VAN, TIR y *Payback*

Al presentar el plan financiero ante socios o entidades, los flujos netos de caja anuales ($Q_t = \text{Cobros}_t - \text{Pagos}_t$) tras el desembolso inicial ($A$) se evalúan descontando el valor temporal del dinero a una tasa de coste de capital o rentabilidad mínima exigida ($k$):

\begin{formula}{Criterios dinámicos de rentabilidad de proyecto}
$$\text{VAN} = -A + \sum_{t=1}^{n} \frac{Q_t}{(1+k)^t} \qquad \text{(Aceptable si }\text{VAN} > 0\text{)}$$
$$\text{TIR } (r): \quad 0 = -A + \sum_{t=1}^{n} \frac{Q_t}{(1+r)^t} \qquad \text{(Aceptable si }\text{TIR} > k\text{)}$$
\end{formula}

## Modelos electrónicos atómicos y arquitectura TI (Weill y Vitale)

Para completar el enfoque estratégico propio del Doble Grado en Ingeniería Informática y ADE, la arquitectura de negocio en la economía conectada puede modularizarse mediante los **ocho modelos electrónicos atómicos** definidos por Peter Weill y Michael Vitale (*Place to Space*, 2001). Al igual que los patrones de Osterwalder, rara vez operan aislados: las compañías digitales más rentables ensamblan dos o tres modelos atómicos sobre una misma infraestructura de datos y seguridad (Figura \ref{fig:weill-vitale}).

\begin{figure}[H]
  \centering
  \input{src/tex/fig_weill_vitale.tex}
  \caption{Taxonomía de los ocho modelos de negocio electrónicos atómicos según Weill y Vitale.}
  \label{fig:weill-vitale}
\end{figure}

Desde la sala de máquinas informática, diseñar hoy esta infraestructura exige alinear tres decisiones con impacto directo en el plan económico-financiero:

- **Elasticidad cloud y control de OPEX:** utilizar arquitecturas *serverless*, contenedores gestionados y bases de datos como servicio al arrancar sustituye compras rígidas de hardware por costes variables que crecen solo cuando crecen los clientes, siempre monitorizando cuotas y alertas de facturación para evitar sorpresas en picos de tráfico o abuso de APIs.
- **Seguridad y cumplimiento desde el diseño (*Privacy & Security by Design*):** en entornos B2B europeos, el cumplimiento de **RGPD**, cifrado en tránsito y reposo, copias verificadas y trazabilidad normativa (como la adaptación de facturación electrónica en España) no es un sobrecoste burocrático; es un requisito comercial previo sin el cual los departamentos de compras corporativos descartan a un proveedor en la fase de evaluación.
- **Propiedad del dato y observabilidad de negocio:** instrumentar desde la versión inicial el registro ético de eventos de producto permite alimentar en tiempo real el cálculo de activación, retención por cohortes y margen bruto por cliente en el cuadro de mando financiero.

\begin{sintesis}
\begin{itemize}
  \item \textbf{Inversión completa:} incluir siempre el fondo de maniobra de los primeros meses junto al inmovilizado material e intangible.
  \item \textbf{Punto Muerto:} dominar el margen de contribución unitario ($p - CV_u$) y la sensibilidad de $Q^*$ ante subidas de costes fijos.
  \item \textbf{Devengo vs. Caja:} separar la rentabilidad contable (PyG) de la liquidez bancaria mensual (Tesorería) para prevenir la ruptura de caja en fase de crecimiento rápido.
  \item \textbf{Financiación y TI:} atravesar el Valle de la Muerte combinando FFF, Business Angels y ENISA antes de ceder gran porcentaje societario, apoyándose en costes cloud variables alineados con los modelos atómicos de Weill y Vitale.
\end{itemize}
\end{sintesis}
