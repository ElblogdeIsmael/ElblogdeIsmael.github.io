# Finanzas a corto plazo, capital circulante y tesorería

\begin{epigrafe}{Los beneficios pagan los dividendos futuros, pero es la tesorería a corto plazo la que paga las nóminas del viernes.}{Máxima de tesorería corporativa}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Distinguir con rigor financiero dos conceptos contables a menudo confundidos: el Fondo de Maniobra (FM, magnitud de financiación a largo plazo) frente a las Necesidades Operativas de Fondos (NOF, inversión neta circulante operativa).
  \item Calcular e interpretar el Período Medio de Maduración Económico ($PMM_e$) y el Período Medio de Maduración Financiero o Ciclo de Caja ($PMM_f$).
  \item Optimizar el saldo de liquidez en caja aplicando el modelo determinista de Baumol y el modelo estocástico con bandas de control de Miller--Orr.
  \item Evaluar el coste financiero efectivo de renunciar al descuento por pronto pago comercial frente al coste de líneas bancarias, \emph{factoring} y \emph{confirming}.
\end{itemize}
\end{objetivos}

## Fondo de Maniobra frente a Necesidades Operativas de Fondos (NOF)

Gran parte de las crisis empresariales no estallan en empresas con pérdidas estructurales, sino en compañías en rápido crecimiento que descuidan el equilibrio de su corto plazo (**morir de éxito**). Para diagnosticar la salud líquida de un balance es imprescindible separar la lógica operativa diaria de la estructura financiera a largo plazo:

- **Necesidades Operativas de Fondos ($\text{NOF}$):** representan la inversión neta en circulante que requiere inevitablemente el ciclo de explotación una vez descontada la financiación espontánea no remunerada de proveedores y Hacienda:
$$\text{NOF} = (\text{Existencias} + \text{Clientes}) - (\text{Proveedores operativos y acreedores corrientes sin coste})$$
Las NOF dependen de decisiones comerciales, logísticas e industriales (rotación de almacén, días de cobro concedidos, plazo negociado con suministradores) y crecen de forma casi proporcional con la facturación.
- **Fondo de Maniobra ($\text{FM}$ o *Working Capital*):** representa la parte de los capitales permanentes a largo plazo (Patrimonio Neto más Deuda a largo plazo) que excede al Activo No Corriente y queda disponible para financiar el circulante:
$$\text{FM} = \text{Capitales Permanentes} - \text{Activo Fijo Neto} = \text{Activo Corriente} - \text{Pasivo Corriente}$$

La diferencia contable y financiera entre ambos define la **posición neta de tesorería a corto plazo**:

$$\text{Tesorería neta operativa} = \text{FM} - \text{NOF} = \text{Caja e inversiones líquidas} - \text{Deuda bancaria a corto plazo}$$

- Si $\text{FM} > \text{NOF}$: la compañía posee excedente de tesorería libre (colchón financiero sano, aunque excesivo si rinde menos que el coste de capital).
- Si $\text{FM} < \text{NOF}$: las inversiones operativas del día a día superan el colchón a largo plazo; ese déficit debe cubrirse obligatoriamente con **pólizas de crédito o deuda bancaria a corto plazo** (**Recurso Negociado a Corto Plazo, RNCP**). Cuando el crecimiento de ventas dispara las $\text{NOF}$ por encima de la póliza concedida, aparece la suspensión de pagos aunque la cuenta de resultados muestre beneficios.

## El Período Medio de Maduración (PMM) y el Ciclo de Caja

El reloj operativo de cualquier industria se mide a través del **Período Medio de Maduración (PMM)**: los días que tarda en dar una vuelta completa cada euro invertido en el ciclo productivo hasta regresar convertido en efectivo cobrado. La Figura \ref{fig:pmm-ciclo} representa gráficamente sus cinco subperíodos.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_pmm_ciclo_caja.tex}
\caption{Desglose temporal del Período Medio de Maduración Económico ($PMM_e$) y del Ciclo de Conversión de Caja ($PMM_f$).}
\label{fig:pmm-ciclo}
\end{figure}

Para una empresa industrial (en una comercial desaparecen $PM_f$ y los consumos intermedios se reducen a mercaderías):

1. **Almacenamiento de materias primas ($PM_a$):** $365 \cdot \dfrac{\text{Saldo medio Materias Primas}}{\text{Consumo anual MP}}$
2. **Fabricación ($PM_f$):** $365 \cdot \dfrac{\text{Saldo medio Productos en Curso}}{\text{Coste anual de producción}}$
3. **Almacenamiento de producto terminado ($PM_v$):** $365 \cdot \dfrac{\text{Saldo medio Productos Terminados}}{\text{Coste anual de ventas}}$
4. **Cobro a clientes ($PM_c$):** $365 \cdot \dfrac{\text{Saldo medio Clientes (IVA inc.)}}{\text{Ventas anuales (IVA inc.)}}$
5. **Pago a proveedores ($PM_p$):** $365 \cdot \dfrac{\text{Saldo medio Proveedores (IVA inc.)}}{\text{Compras anuales (IVA inc.)}}$

La suma de los cuatro primeros marca el **PMM Económico** ($PMM_e = PM_a + PM_f + PM_v + PM_c$), es decir, la duración total del ciclo desde que entra materia prima al almacén hasta que el cliente paga la factura. Restando el plazo gratuito que financian los suministradores obtenemos el **PMM Financiero o Ciclo de Conversión de Efectivo ($PMM_f$)**:

$$PMM_f = PMM_e - PM_p$$

Cada día que la dirección logra reducir $PM_a$ o $PM_c$ (o negociar ampliar $PM_p$ sin perder descuentos) reduce directamente la inversión inmovilizada en NOF. Grandes cadenas minoristas de distribución alimentaria o comercio electrónico operan habitualmente con **$PMM_f < 0$**: cobran al contado en tienda hoy ($PM_c \approx 0$), rotan existencias en 15 días y pagan a proveedores a 60 días, disfrutando de una fuente estructural gratuita de caja permanente.

## Gestión óptima de tesorería: modelos de Baumol y Miller--Orr

Mantener saldo en cuenta corriente evita impagos y comisiones bancarias continuas, pero sacrifica el interés $i$ que rendiría ese efectivo en Letras del Tesoro o depósitos remunerados. Dos modelos clásicos formalizan el equilibrio entre coste de transacción y coste de oportunidad.

### Modelo determinista de inventario de efectivo (William Baumol, 1952)

Si una empresa desembolsa efectivo a un ritmo predecible y constante $T$ euros al año (por ejemplo, pagos periódicos de nóminas), tiene un coste fijo de conversión por cada venta de títulos líquidos $b$ (comisión bancaria fija por operación) y el tipo anual de mercado monetario es $i$, el saldo óptimo de reposición $C^*$ —análogo exacto al lote económico de pedido de Wilson en inventarios— minimiza la suma de costes de transacción $(b \cdot T/C)$ y costes financieros de oportunidad $(i \cdot C/2)$:

$$C^* = \sqrt{\frac{2 \, b \, T}{i}}, \qquad \text{Saldo medio en caja} = \frac{C^*}{2}, \qquad \text{Número óptimo de reposiciones/año} = \frac{T}{C^*}$$

### Modelo estocástico de bandas de control (Merton Miller y Daniel Orr, 1966)

En la realidad empresarial, los cobros y pagos fluctúan aleatoriamente cada día con varianza diaria $\sigma^2$. El modelo de **Miller--Orr** fija un límite inferior de seguridad $L$ (determinado por el mínimo operativo de la dirección o el descubierto tolerado) y deja fluctuar libremente el saldo entre $L$ y un límite superior $H$:

- Cuando el saldo toca $H$, el tesorero compra Letras o fondos monetarios por $(H - Z^*)$ para devolver la caja al **punto de retorno óptimo $Z^*$**.
- Cuando el saldo desciende hasta $L$, vende activos líquidos por $(Z^* - L)$ para reponer la caja de nuevo hasta $Z^*$.

Minimizar el coste esperado de transferencias más el coste diario de oportunidad $i_{\text{diario}} = i_{\text{anual}} / 365$ arroja:

$$Z^* = L + \sqrt[3]{\frac{3 \, b \, \sigma^2}{4 \, i_{\text{diario}}}}, \qquad H = 3\,Z^* - 2\,L, \qquad \text{Saldo medio esperado} = \frac{4\,Z^* - L}{3}$$

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_miller_orr_tesoreria.tex}
\caption{Dinámica de control del saldo de tesorería con las tres cotas del modelo estocástico de Miller y Orr ($L$, $Z^*$ y $H$).}
\label{fig:miller-orr}
\end{figure}

Nótese en la Figura \ref{fig:miller-orr} que el nivel óptimo de retorno $Z^*$ **no está en el centro aritmético** entre $L$ y $H$, sino exactamente en un tercio de la amplitud total por encima de $L$: es más económico bajar frecuentemente desde $Z^*$ cerca del mínimo reduciendo el saldo medio ocioso, que soportar un saldo promedio elevado cada día.

## Gestión del crédito comercial y costes implícitos a corto plazo

Al vender con aplazamiento, la empresa concede crédito comercial que suele cotizarse en términos como **"2/10 neto 30"** (descuento del 2\% si el cliente paga en 10 días, o pago del 100\% neto al día 30). ¿Cuánto cuesta financiar al proveedor o dejar escapar ese descuento?

Quien renuncia a un descuento $d$ por pagar al día $D_{\text{neto}}$ en lugar de al día $D_{\text{desc}}$ recibe un préstamo de $(1 - d)$ euros y devuelve $1$ euro exactamente $(D_{\text{neto}} - D_{\text{desc}})$ días después. Su coste efectivo anual compuesto (TAE) se dispara exponencialmente:

$$r_{\text{TAE}} = \left(1 + \frac{d}{1 - d}\right)^{\frac{365}{D_{\text{neto}} - D_{\text{desc}}}} - 1$$

\begin{casoreal}{El coste oculto de renunciar al descuento ``2/10 neto 30''}
Si una pyme rechaza el descuento ``2/10 neto 30'' porque prefiere retener el dinero 20 días más hasta el vencimiento normal:
$$r_{\text{periodo 20d}} = \frac{0{,}02}{1 - 0{,}02} = \frac{0{,}02}{0{,}98} = 2{,}0408\%$$
$$\text{TAE} = (1 + 0{,}020408)^{\frac{365}{20}} - 1 = (1{,}020408)^{18{,}25} - 1 = 44{,}59\%$$
Pagar un 44,59\% anual equivale a la financiación más cara del balance; si una empresa dispone de póliza bancaria o línea de \emph{confirming} al 5\%--6\% TAE, siempre debe aprovechar el descuento por pronto pago bancarizándolo.
\end{casoreal}

En la gestión cotidiana del pasivo y activo circulante, el director financiero combina además tres instrumentos bancarios clave:

- **Descuento comercial y líneas de crédito:** anticipo de efectos o pagarés reteniendo el riesgo de impago frente a terceros (**con recurso**), o pólizas de disponibilidad flexible donde solo se pagan intereses por el saldo dispuesto más una comisión mínima de disponibilidad.
- ***Factoring*:** cesión de la cartera de facturas a una entidad financiera que asume su gestión de cobro y puede adelantar los fondos; en modalidad **sin recurso**, el banco asume también el riesgo de insolvencia del cliente, sacando las facturas del riesgo de balance.
- ***Confirming* (gestión de pagos a proveedores):** la empresa compradora encarga a su banco gestionar las facturas aprobadas de sus proveedores, permitiendo a cada proveedor elegir entre cobrar al vencimiento pactado o anticipar el cobro con la solvencia crediticia de la gran empresa compradora a un tipo mucho más barato que su propia financiación bancaria.

## Resumen y preguntas de autocomprobación

La liquidez operativa se gobierna manteniendo el equilibrio $\text{FM} \ge \text{NOF}$ salvo cobertura bancaria estable, comprimiendo el $PMM_f$ sin erosionar las ventas, dimensionando los saldos ociosos con Baumol o Miller--Orr según la volatilidad de cobros, y aprovechando siempre los descuentos comerciales por pronto pago cuyo coste implícito supera sistemáticamente al tipo bancario de mercado.

**Cuestiones de repaso rápido:**

1. Una empresa tiene Existencias por $90.000\ \text{\euro}$, Clientes por $140.000\ \text{\euro}$, Proveedores por $80.000\ \text{\euro}$, Capitales Permanentes por $600.000\ \text{\euro}$ y Activo Fijo Neto por $480.000\ \text{\euro}$. Calcula sus $\text{NOF}$, su $\text{FM}$ y determina si presenta superávit o déficit de tesorería neta operativa.
2. Si un proveedor ofrece condiciones **"3/15 neto 45"**, calcula el coste TAE exacto de financiar esos 30 días adicionales renunciando al descuento. ¿Qué harías si tu póliza bancaria cuesta el 6\% TAE?
3. Según la fórmula de Miller--Orr, si la volatilidad diaria de los flujos de caja ($\sigma$) se duplica (es decir, $\sigma^2$ se multiplica por 4), ¿en qué proporción exacta crece la distancia óptima $(Z^* - L)$ entre el punto de retorno y el mínimo de seguridad?
