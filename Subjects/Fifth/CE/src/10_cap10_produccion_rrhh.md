# Plan de producción, operaciones, organización y RR. HH.

\epigrafe{No contrates personas para hacer crecer un organigrama; diséñalo para que el flujo de trabajo entregue valor al cliente sin fricciones internas.}{Principio de operaciones ajustadas}

\begin{hojaruta}
\begin{itemize}
  \item Seleccionar la configuración productiva óptima (proyecto, lotes, línea o flujo continuo) según volumen y personalización.
  \item Decidir con criterio económico y estratégico entre producir internamente o subcontratar (\textit{Make vs. Buy}).
  \item Estructurar la organización inicial, la descripción de puestos y el pacto de socios para evitar bloqueos entre fundadores.
  \item Calcular con exactitud el Coste Laboral Total en España con las tablas de cotización y el MEI vigentes en 2026.
\end{itemize}
\end{hojaruta}

## Configuraciones productivas y decisión de *Make vs. Buy* (Tema 6)

El **Plan de Producción u Operaciones** responde a la viabilidad técnica del negocio: cómo transformamos entradas (materias primas, tiempo de ingeniería, APIs de terceros, información) en productos o servicios entregados dentro del coste, plazo y calidad prometidos. La matriz clásica de Hayes y Wheelwright (Figura \ref{fig:config-prod}) enseña que el diseño operativo debe situarse sobre la diagonal que alinea el volumen de demanda con el grado de personalización exigido por el cliente.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_configuraciones_productivas.tex}
  \caption{Matriz volumen-variedad de configuraciones productivas (Hayes y Wheelwright) adaptada a empresas industriales y digitales.}
  \label{fig:config-prod}
\end{figure}

- **Por proyecto:** cada entrega es única, compleja y requiere coordinación multidisciplinar dedicada (construcción, desarrollo de software a medida, consultoría estratégica).
- **Por taller o lotes (*Job-shop / Batch*):** maquinaria o equipos flexibles producen pequeñas series variadas (panadería artesanal, impresión personalizada, servicios clínicos por cita).
- **En línea o masa:** procesos altamente estandarizados con tareas repetitivas secuenciales donde manda la eficiencia de escala (ensamblaje industrial).
- **Flujo continuo:** operación ininterrumpida de altísimo volumen y nula variación individual (suministros básicos, infraestructuras cloud *multi-tenant*, plataformas SaaS estándar).

Junto a la elección de proceso, todo plan operativo resuelve dos decisiones económicas inmediatas: **localización** (proximidad a clientes frente a costes de alquiler, acceso a talento técnico y ayudas locales) y **externalización (*Make vs. Buy*)**. Conviene internalizar únicamente aquellas actividades que forman la competencia nuclear o la "ventaja injusta" de la empresa, externalizando en socios actividades auxiliares como logística de paquetería, contabilidad fiscal, pasarelas de pago o alojamiento de servidores gestionados.

\begin{formula}{Criterio cuantitativo básico de Make vs. Buy}
$$\text{Coste producir internamente} = CF_{\text{nuevo}} + CV_u \cdot Q \qquad \text{frente a} \qquad \text{Coste subcontratar} = P_{\text{proveedor}} \cdot Q$$
$$\text{Umbral de indiferencia:} \quad Q_{\text{indif}} = \frac{CF_{\text{nuevo}}}{P_{\text{proveedor}} - CV_u}$$
\end{formula}

Si la demanda prevista $Q$ es inferior a $Q_{\text{indif}}$ (muy frecuente durante los primeros dieciocho meses de una startup), subcontratar evita transformar pagos variables controlables en costes fijos inamovibles, protegiendo el punto muerto y la tesorería.

## Organización, pacto de socios y estructura del equipo (Tema 7)

Muchos proyectos técnicamente viables quiebran no por falta de clientes, sino por conflictos internos en el equipo promotor cuando llega la primera oferta de compra, cuando uno de los socios deja de trabajar en el proyecto pero conserva el 40\% del capital, o cuando no está claro quién tiene voto decisivo en una crisis financiera.

Antes incluso de constituir la sociedad ante notario, el Plan Organizativo debe blindar cuatro acuerdos en un **Pacto de Socios** privado vinculante:

1. **Reparto de funciones y dedicación mínima:** horas semanales exigidas, exclusividad durante el arranque y prohibición de competencia directa.
2. **Consolidación gradual (*Vesting*) de participaciones:** aunque el reparto nominal sea 50/50 o tercios al inicio, las participaciones se consolidan de forma progresiva durante 3 o 4 años (habitualmente con un período mínimo inicial o *cliff* de 12 meses). Si un socio abandona al sexto mes, la sociedad recupera sus participaciones a valor nominal en lugar de dejar un "socio muerto" bloqueando futuras ampliaciones.
3. **Reglas de gobierno y mayorías reforzadas:** qué decisiones decide el administrador solidario o mancomunado y qué decisiones estratégicas (ampliación de capital, venta de propiedad intelectual, endeudamiento superior a un umbral) exigen mayoría cualificada.
4. **Cláusulas de arrastre y acompañamiento (*Drag-along / Tag-along*) y salida por conflicto (*Good / Bad Leaver*).**

En cuanto a la estructura formal, una empresa naciente debe mantener un organigrama **plano y funcional** (Dirección General/Estrategia, Producto/TI, Comercial/Marketing, Administración/Finanzas), evitando jerarquías intermedias innecesarias hasta superar los 15--25 empleados.

## Cálculo riguroso del Coste Laboral Total en España (2026)

Una de las trampas numéricas más castigadas en los exámenes y planes financieros de Creación de Empresas consiste en presupuestar un salario bruto de `30.000 €/año` pensando que la empresa desembolsa exactamente `2.500 €/mes`. En España, sobre el salario bruto pactado con el trabajador recae la **cuota empresarial a la Seguridad Social**, elevando el desembolso real del empleador alrededor de un **30,5\% a 32\% adicional**. La Figura \ref{fig:desglose-nomina} descompone visualmente qué cobra el trabajador, qué retiene Hacienda y cuánto paga realmente la empresa con los tipos vigentes en 2026.

\begin{figure}[H]
  \centering
  \input{src/tex/fig_desglose_nomina.tex}
  \caption{Anatomía salarial en España (2026): del salario neto percibido en banco al coste laboral total empresarial.}
  \label{fig:desglose-nomina}
\end{figure}

\begin{formula}{Ecuaciones de nómina y Coste Laboral Total (Régimen General España, 2026)}
$$\text{Cotización Trabajador (6,50\%)} = \underbrace{4,70\%}_{\text{Cont. Comunes}} + \underbrace{1,55\%}_{\text{Desempleo indef.}} + \underbrace{0,10\%}_{\text{Form. Prof.}} + \underbrace{0,15\%}_{\text{MEI 2026}}$$
$$\text{Salario Neto} = \text{Salario Bruto} \times \bigl(1 - 0,0650 - t_{\text{IRPF}}\bigr)$$
$$\text{Cotización Empresa (sin AT/EP)} = \underbrace{23,60\%}_{\text{Cont. Comunes}} + \underbrace{5,50\%}_{\text{Desempleo indef.}} + \underbrace{0,20\%}_{\text{FOGASA}} + \underbrace{0,60\%}_{\text{Form. Prof.}} + \underbrace{0,75\%}_{\text{MEI 2026}} = 30,65\%$$
$$\text{Coste Laboral Total Empresa} = \text{Salario Bruto} \times \bigl(1 + 0,3065 + t_{\text{AT/EP}}\bigr)$$
\end{formula}

Dos matices legales imprescindibles para proyectar presupuestos reales en 2026:

1. **Mecanismo de Equidad Intergeneracional (MEI):** en 2026 se sitúa en un **0,90\% total** sobre la base de cotización por contingencias comunes, repartido en un **0,75\% a cargo de la empresa** y un **0,15\% a cargo del trabajador** (en trabajadores autónomos recae íntegro el 0,90\%).
2. **Accidentes de Trabajo y Enfermedades Profesionales ($t_{\text{AT/EP}}$):** varía por código CNAE de actividad: alrededor del **1,0\%--1,5\%** en oficinas, consultoría y desarrollo de software, y superior al **3\%--6\%** en construcción, industria pesada o logística de transporte. Además, en contratos de duración determinada el tipo empresarial por desempleo sube del 5,50\% al **6,70\%** (y al 1,60\% para el empleado).

Si los socios fundadores prestan servicios efectivos como administradores con control societario (habitualmente $\ge 25\%$ del capital más cargo de administrador, o $\ge 33\%$ como socio trabajador), deben encuadrarse en el **Régimen Especial de Trabajadores Autónomos (RETA)** —bajo el sistema de cotización por tramos de rendimientos netos reales y posible tarifa plana inicial reducida para altas nuevas—, no en el Régimen General.

\begin{enfoqueti}{Gestión ágil en equipos mixtos de ingeniería y negocio}
Las herramientas operativas heredadas del desarrollo de software (sprints semanales o quincenales, tableros Kanban, documentación viva en wikis compartidos y revisiones retrospectivas) funcionan igual de bien para coordinar campañas de marketing o entregas legales que para desplegar código. Establecer objetivos trimestrales medibles (OKRs) impide que el equipo técnico optimice arquitectura interna desconectada de las métricas comerciales que necesita el equipo de negocio para cerrar el mes en caja.
\end{enfoqueti}

\begin{sintesis}
\begin{itemize}
  \item \textbf{Operaciones:} alinear el proceso productivo sobre la matriz volumen--variedad y evitar costes fijos tempranos usando el umbral de indiferencia \textit{Make vs. Buy}.
  \item \textbf{Gobierno societario:} firmar Pacto de Socios con calendario de \textit{vesting} (consolidación en 3--4 años) antes de iniciar desarrollo intensivo.
  \item \textbf{Coste de personal:} en España 2026, presupuestar cada empleado por cuenta ajena multiplicando su salario bruto por aproximadamente $1,3165$ a $1,33$ (incluyendo MEI empresarial del 0,75\% y AT/EP), nunca solo por el bruto nominal.
\end{itemize}
\end{sintesis}
