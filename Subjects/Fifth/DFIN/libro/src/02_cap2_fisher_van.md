# Valor temporal del dinero y teorema de separación de Fisher

\begin{epigrafe}{El interés compuesto es la fuerza más poderosa de la aritmética aplicada al tiempo: quien lo entiende, lo cobra; quien lo ignora, lo paga.}{Principio clásico de valoración financiera}
\end{epigrafe}

\begin{objetivos}
\begin{itemize}
  \item Formular las leyes de capitalización y descuento y aplicar rentas constantes, crecientes, prepagables y perpetuas sin memorización mecánica.
  \item Demostrar gráfica y analíticamente el Teorema de Separación de Fisher en mercados perfectos de capitales.
  \item Reproducir con fidelidad la nomenclatura de aula UGR ($R_0$, $J^*$, $J_R$, $N_D$) y la verificación numérica completa del Problema 3 oficial.
  \item Analizar por qué quiebra la unanimidad de los accionistas cuando existen fricciones reales como diferenciales de tipos entre ahorro y deuda ($r_D > r_A$).
\end{itemize}
\end{objetivos}

## Por qué un euro hoy vale más que un euro mañana

En finanzas, sumar unidades monetarias de periodos distintos sin homogeneizarlas temporalmente constituye un error equivalente a sumar metros con pulgadas. Un euro disponible hoy vale estrictamente más que un euro cobrado dentro de un año por tres causas acumulativas:

1. **Coste de oportunidad productivo:** un euro invertido hoy en un activo libre de riesgo al tipo anual $r$ se convierte en $(1+r)$ euros dentro de un año. Renunciar al euro de hoy exige renunciar al interés ganado durante ese plazo.
2. **Erosión por inflación:** si el nivel general de precios crece a una tasa $\pi > 0$, la misma unidad monetaria compra menos bienes reales en el futuro.
3. **Incertidumbre y preferencia temporal:** un flujo prometido dentro de varios ejercicios soporta riesgo de impago y obliga a postergar el consumo presente.

La operación que traslada capitales hacia el futuro multiplicándolos por $(1+r)^t$ recibe el nombre de **capitalización**, mientras que la operación inversa que trae flujos futuros al momento presente dividiéndolos por $(1+r)^t$ (o multiplicándolos por el **factor de descuento** $\text{FD}_t = (1+r)^{-t}$) se denomina **actualización o descuento**.

| Tipología de flujo | Fórmula de Valor Actual ($VA_0$) | Condición de convergencia | Uso habitual en DFIN |
| :--- | :--- | :--- | :--- |
| **Pago único en $t$** | $\dfrac{FC_t}{(1+r)^t}$ | $r > -1$ | Vencimiento nominal bono, VR proyecto |
| **Perpetuidad constante** | $\dfrac{C}{r}$ | $r > 0$, inicio en $t=1$ | Acciones preferentes, renta fija perpetua |
| **Perpetuidad creciente** | $\dfrac{C_1}{r - g}$ | $r > g$ | Valor terminal Gordon-Shapiro ($t=T$) |
| **Renta temporal constante** ($n$ años) | $C \cdot \dfrac{1 - (1+r)^{-n}}{r}$ | $r \neq 0$, inicio en $t=1$ | Cupones de bonos, cuotas préstamo francés |
| **Renta temporal creciente** ($n$ años) | $\dfrac{C_1}{r - g}\left[1 - \left(\dfrac{1+g}{1+r}\right)^n\right]$ | $r \neq g$, inicio en $t=1$ | Rentas indexadas o salarios crecientes |
| **Modalidad prepagable** (inicio en $t=0$) | $VA_{\text{pospagable}} \cdot (1+r)$ | Desplaza 1 periodo | Alquileres anticipados, primas seguros |

\begin{trampa}{El desfase de un periodo en las rentas y el valor terminal}
Una renta pospagable de $n$ términos que comienza en el instante $k+1$ actualiza siempre al instante $k$, no al instante $0$. Por ejemplo, si una empresa aplica la fórmula del valor terminal por crecimiento perpetuo en el año 5, $\text{VT}_5 = \frac{\text{FCL}_6}{r - g}$, ese resultado está fechado en $t=5$ y debe descontarse cinco años completos dividiendo por $(1+r)^5$. Olvidar el flujo del numerador $\text{FCL}_6 = \text{FCL}_5(1+g)$ o descontar seis periodos en lugar de cinco figura entre los errores más frecuentes de examen.
\end{trampa}

### Conversión entre tipos nominales, efectivos y continuos

Cuando los intereses se liquidan con frecuencia $m$ veces al año (semestral $m=2$, trimestral $m=4$, mensual $m=12$), el tipo anual cotizado por contrato o TIN ($j_m$) difiere de la **Tasa Anual Equivalente (TAE)** o tipo efectivo anual ($r_{\text{ef}}$). Conforme a la notación trabajada en clase, donde cada subperiodo devenga $k = j_m / m$:

$$1 + r_{\text{ef}} = \left(1 + \frac{j_m}{m}\right)^m = (1 + k)^m \quad \Longrightarrow \quad r_{\text{ef}} = \left(1 + \frac{j_m}{m}\right)^m - 1$$

Si hacemos tender el número de capitalizaciones anuales hacia infinito ($m \to \infty$), surge la **capitalización continua**, esencial en valoración de derivados (Black-Scholes) y matemáticas actuariales:

$$\lim_{m \to \infty} \left(1 + \frac{r_c}{m}\right)^m = e^{r_c} \quad \Longrightarrow \quad VA_0 = FC_t \cdot e^{-r_c t}$$

## Economía de dos periodos: preferencias y oportunidades reales

Para entender por qué una regla tan simple como el Valor Actual Neto (VAN) recibe el apoyo unánime de millones de accionistas con edades, patrimonios y actitudes ante el ahorro completamente distintos, Irving Fisher propuso en 1930 analizar un mundo simplificado de dos fechas ($t=0$ hoy y $t=1$ mañana) bajo certeza perfecta.

Supongamos un individuo con dotación inicial de tesorería $R_0$ disponible hoy (y nula en $t=1$, o expresada como riqueza presente $W_0$) y un conjunto de oportunidades productivas reales representadas por una frontera cóncava de transformación: por cada euro invertido hoy en su negocio, obtiene rendimiento marginal decreciente en $t=1$ (los primeros proyectos rinden un 80\%, los siguientes un 40\%, los últimos apenas un 2\%).

Al introducir un **mercado financiero perfecto** donde cualquier inversor puede prestar o pedir prestado dinero al mismo tipo de interés único $r$, sin comisiones ni restricciones de cuantía, se abre una **recta de mercado** con pendiente $-(1+r)$. Si alguien no ejecuta ninguna inversión productiva real y se limita a operar en el banco, puede moverse sobre la recta de presupuesto:

$$C_1 = (R_0 - C_0)(1+r) \quad \Longleftrightarrow \quad C_0 + \frac{C_1}{1+r} = R_0$$

El punto de corte con el eje horizontal mide la riqueza máxima consumible hoy ($W_0 = R_0$) y el corte con el eje vertical mide la riqueza futura si se ahorra todo ($W_1 = R_0(1+r)$).

## El Teorema de Separación de Fisher y el criterio del VAN

¿Cuál debe ser el plan de inversión real del empresario cuando conviven oportunidades productivas y mercado de capitales? La respuesta constituye uno de los teoremas más elegantes de toda la economía financiera.

\begin{axioma}{Teorema de Separación de Fisher (1930)}
En un mercado de capitales perfecto, completo y sin fricciones, la decisión de inversión productiva de la empresa es \textbf{completamente independiente} de las preferencias subjetivas de consumo intertemporal de sus propietarios. Todos los accionistas —desde el más paciente hasta el más impaciente— coinciden unánimemente en el mismo nivel óptimo de inversión real ($J^*$): aquel que maximiza la riqueza presente $W_0^*$ (o, equivalentemente, el Valor Actual Neto de la inversión). Cada propietario alcanza después su cesta de consumo óptima ($C_0^*, C_1^*$) prestando o tomando prestado en el mercado a lo largo de la recta tangente.
\end{axioma}

La condición geométrica de optimalidad exige desplazar la recta de mercado de pendiente $-(1+r)$ lo más arriba y a la derecha posible hasta hacerla **tangente** a la frontera de oportunidades de inversión real en el punto $J^*$. En ese punto exacto de tangencia, la rentabilidad marginal de la última unidad monetaria invertida en la empresa iguala al tipo de interés del mercado financiero:

$$\left.\frac{d\,C_1}{d\,(-C_0)}\right|_{J^*} = 1 + \text{TIR}_{\text{marginal}}(J^*) = 1 + r \quad \Longrightarrow \quad \text{TIR}_{\text{marginal}}(J^*) = r$$

Toda inversión previa a $J^*$ rendía más que el mercado ($\text{TIR}_{\text{marginal}} > r$) y aumentaba la ordenada en origen de la recta de riqueza; toda inversión posterior a $J^*$ rendiría menos que el mercado ($\text{TIR}_{\text{marginal}} < r$) y contraería la recta hacia adentro, destruyendo riqueza.

\begin{figure}[H]
\includetikz[0.95\linewidth]{src/tex/fig_fisher_separacion.tex}
\caption{Demostración gráfica del Teorema de Separación de Fisher con los datos exactos del Problema 3 (UGR).}
\label{fig:fisher-separacion}
\end{figure}

La Figura \ref{fig:fisher-separacion} plasma el resultado en dos pasos estrictamente separados:

1. **Etapa productiva (decisión corporativa unánime):** A partir de $R_0 = 12.000$ u.m., se invierte exactamente $I_0 = 4.000$ u.m. en activos reales (consumiendo o reteniendo en $t=0$ un saldo de $8.000$ u.m.) para alcanzar $C_1 = 6.240$ u.m. en el punto óptimo $J^*$. Esa inversión eleva la riqueza actual hasta $W_0^* = 14.000$ u.m., lo que equivale exactamente a un $\text{VAN} = +2.000$ u.m.
2. **Etapa financiera (decisión individual heterogénea):** El accionista impaciente ($U_1$) pide prestado en el mercado a costa de su renta futura para consumir más hoy sin pedir a la empresa que deshaga inversión rentable; el accionista paciente ($U_2$) presta parte de sus recursos hoy al 4\% para disfrutar mayor consumo mañana. Ambos alcanzan curvas de utilidad muy superiores a cualquier situación sin mercado de capitales o con inversión subóptima.

\begin{claseugr}{Resolución y notación de clase del Problema 3 (Relación DFIN 25-26)}
En las explicaciones de clase de la UGR se emplean las siglas $R_0$ para la riqueza inicial, $J^*$ (o punto óptimo de inversión real) y $N_D$ o $J_R$ para distinguir niveles reales de riqueza de las desviaciones subóptimas. Tomando los datos literales del \textbf{Problema 3}: un inversor dispone de $R_0 = 12.000\ \text{\euro}$ y el tipo de mercado es $r = 4\%$. Invierte $C_0 = 4.000\ \text{\euro}$ en el proyecto óptimo y obtiene $C_1 = 6.240\ \text{\euro}$ el próximo año.

\begin{itemize}
  \item \textbf{Rentabilidad interna del proyecto:} $\text{TIR} = \frac{6.240}{4.000} - 1 = 0{,}56 = 56\% \gg 4\%$.
  \item \textbf{Valor Actual Neto ($\Delta W_0$):} $\text{VAN} = -4.000 + \frac{6.240}{1{,}04} = -4.000 + 6.000 = +2.000\ \text{\euro}$.
  \item \textbf{Riqueza total presente tras invertir:} $W_0^* = R_0 + \text{VAN} = 12.000 + 2.000 = 14.000\ \text{\euro}$.
  \item \textbf{Incremento neto de riqueza futura ($\Delta W_1$):} Sin proyecto real habría obtenido $12.000 \times 1{,}04 = 12.480\ \text{\euro}$; con el proyecto óptimo su recta alcanza $14.000 \times 1{,}04 = 14.560\ \text{\euro}$, es decir, $\Delta W_{\text{futuro}} = 2.000 \times 1{,}04 = +2.080\ \text{\euro}$ (comprobación directa: $(12.000 - 4.000)\times 1{,}04 + 6.240 = 8.320 + 6.240 = 14.560\ \text{\euro}$).
\end{itemize}
\end{claseugr}

## Fricciones reales: por qué se rompe la separación de Fisher

En economías reales, prestar a un banco suele remunerar un tipo pasivo $r_A$ inferior al tipo activo $r_D$ que ese mismo banco cobra al conceder crédito ($r_D > r_A$). Cuando existe ese diferencial entre tipos acreedores y deudores, la recta única de presupuesto se quiebra en dos semirrectas de distinta pendiente unidas por un tramo curvo central sobre la propia frontera real, tal como recoge la Figura \ref{fig:fisher-friccion}.

\begin{figure}[H]
\includetikz[0.93\linewidth]{src/tex/fig_fisher_friccion_tipos.tex}
\caption{Ruptura de la unanimidad en el Teorema de Separación de Fisher cuando $r_D > r_A$.}
\label{fig:fisher-friccion}
\end{figure}

El efecto económico inmediato es la desaparición de la unanimidad:

- Los accionistas **pacientes** (prestamistas netos) evalúan las inversiones descontando a su coste de oportunidad $r_A$, más bajo, por lo que prefieren ampliar la inversión productiva hasta $J_A^*$.
- Los accionistas **impacientes** (prestatarios netos) soportan el coste $r_D > r_A$, exigen mayor rentabilidad mínima y reclaman recortar la inversión hasta $J_D^*$.
- Los accionistas cuya tangencia cae dentro de la zona de **autarquía financiera** (entre $J_A^*$ y $J_D^*$) no desean ni prestar al banco a $r_A$ ni endeudarse a $r_D$; prefieren utilizar su tasa marginal interna de sustitución como tasa de descuento propia.

Otras fricciones que rompen la separación perfecta incluyen los costes de transacción al emitir títulos, la imposición fiscal asimétrica entre dividendos y ganancias de capital, el racionamiento cuantitativo del crédito y la información asimétrica entre empresa e inversores externos. Sin embargo, para sociedades anónimas cotizadas en mercados líquidos donde el diferencial institucional de tipos es mínimo, la maximización del VAN descontado al coste de capital de mercado continúa siendo la brújula más robusta y aceptada.

\begin{puenteti}{Cómputo algorítmico de tasas equivalentes y factores de descuento}
En sistemas cuantitativos de tesorería (\emph{treasury management systems}), nunca debe almacenarse un único tipo genérico sin metadatos de convención: base anual (\texttt{ACT/360}, \texttt{ACT/365}, \texttt{30/360}), frecuencia de capitalización $m$ y calendario de días hábiles (\texttt{TARGET2}). La función de actualización correcta convierte primero cualquier cotización contractual a un factor de descuento continuo o efectivo consistente antes de sumar flujos.
\end{puenteti}

## Resumen y preguntas de autocomprobación

La regla del Valor Actual Neto no es una convención arbitraria de escritorio, sino la consecuencia matemática directa del Teorema de Separación de Fisher: en mercados eficientes, aceptar todo proyecto con $\text{VAN} > 0$ expande al máximo el conjunto presupuestario de cualquier accionista con independencia de si desea consumir hoy o ahorrar para mañana.

**Cuestiones de repaso rápido:**

1. Si un préstamo comercial declara un TIN del 6\% anual liquidable por meses ($m=12$), calcula el tipo efectivo mensual $k$ y la TAE real que soporta la empresa.
2. En el Problema 3 de clase ($R_0 = 12.000$, $r = 4\%$, inversión de $4.000$ que devuelve $6.240$), supón que un inversor desea consumir exactamente $10.000\ \text{\euro}$ en $t=0$ tras ejecutar la inversión óptima de $4.000\ \text{\euro}$. ¿Cuánto dinero deberá pedir prestado hoy en el mercado y cuánto podrá consumir en $t=1$? *(Pista: tras invertir $4.000$ le quedan $8.000$ hoy; pide prestados $2.000$ al 4\%).*
3. ¿Qué dos grupos de accionistas aparecen en desacuerdo respecto al volumen óptimo de inversión cuando $r_D > r_A$?
