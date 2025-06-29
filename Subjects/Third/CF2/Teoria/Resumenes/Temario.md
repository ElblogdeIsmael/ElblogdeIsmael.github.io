---
title: "Contabilidad Financiera II"
subtitle: "Temario"
author: "Ismael Sallami Moreno"
date: "Mayo de 2025"
lang: es

# Opciones específicas de la plantilla Eisvogel para la portada
titlepage: true
titlepage-logo: "../../Practica/EjerciciosMD/images/logo-universidad.jpg" # COLOCA TU LOGO AQUÍ (ej. logo-mi-uni.png)
                                        # Eisvogel lo pondrá arriba, centrado.
# titlepage-background: "images/portada-fondo.jpg" # OPCIONAL: Imagen de fondo para TODA la portada
                                                     # Debe estar diseñada para que el texto sea legible encima.

# Colores para la portada (Eisvogel los usa)
# titlepage-color: "F5F5F5" # Color de fondo de la portada si NO usas titlepage-background (ej. un gris muy claro)
titlepage-text-color: "333333"   # Color del texto en la portada (gris oscuro)
titlepage-rule-color: "4682B4"   # Color para la línea horizontal decorativa (azul acero)
                                  # Puedes ponerlo igual que titlepage-color para ocultar la línea si usas fondo de color.
# titlepage-rule-height: 2 # Grosor de la línea en pt (default es 2)

# Opciones generales del documento
mainfont: "Latin Modern Roman"   # Asegúrate de tener esta fuente. Alternativas: "CMU Serif", "TeX Gyre Termes"
# fontsize: 11pt                 # Puedes elegir 10pt, 11pt, 12pt
geometry: "margin=2.5cm"
colorlinks: true
linkcolor: "008080"              # Teal para los enlaces
toc: true
toc-own-page: true             # Descomenta si quieres la tabla de contenido en su propia página (recomendado por Eisvogel)
numbersections: true
book: true                       # Para un estilo más de "libro" con Eisvogel (afecta títulos de capítulo, etc.)

# Encabezados y pies de página (Eisvogel los gestiona bien)
# header-left: "\\small{Ingeniería Informática + ADE}" # Puedes personalizar el contenido del encabezado
header-right: "\\small Ingeniería Informática + ADE"
# footer-center: "\\small{\\thepage}" # Número de página centrado y pequeño

# IMPORTANTE: Elimina cualquier `header-includes` complejo que tuvieras antes para la portada.
# Dejamos que Eisvogel maneje la creación de la portada con las variables de arriba.
---

# Fondos Propios

## Elementos de Patrimonio Neto: Concepto y Características

* **Perspectiva de las Normas Internacionales de Contabilidad (IASB):** El Marco Conceptual del IASB (IASB, 2018) no define el Patrimonio como tal, sino que lo delimita de forma indirecta, indicando que "Patrimonio es la parte residual de los activos de la entidad, una vez deducidos todos sus pasivos". A la hora de medirlo, tampoco establece un criterio específico, sino que, conceptualmente, "es igual al total del importe en libros de todos los activos reconocidos menos el total de los importes en libros de todos los pasivos reconocidos".

* **Perspectiva del Plan General de Contabilidad (PGC):** El PGC también asume que el Patrimonio Neto es la parte residual al deducir el valor de los pasivos del valor de los activos. Sin embargo, el PGC añade que el Patrimonio Neto "incluye las aportaciones realizadas, ya sea en el momento de su constitución o en otros posteriores, por sus socios o propietarios, que no tengan la consideración de pasivos, así como los resultados acumulados u otras variaciones que le afecten".

* **Componentes Clave destacados por el PGC:** La definición del PGC, influenciada por la normativa mercantil española, introduce la figura de socios y propietarios de esos derechos residuales sobre el activo. Delimita el concepto de Capital (vinculado a las aportaciones de socios) y el de Reservas (resultados acumulados que permanecen en la empresa), que conforman dos de los principales bloques del patrimonio, estructurados en los subgrupos 10 (Capital), 11 (Reservas) y 12 (Resultados).

* **Distinción entre Instrumento de Patrimonio y Pasivo Financiero:** Para referirse al patrimonio, es necesario distinguir correctamente un "instrumento de patrimonio" de un "pasivo financiero". Se retoma la norma de registro y valoración (NRV) 9ª, que establece que "un instrumento financiero es un contrato que da lugar a un activo financiero en una empresa y, simultáneamente, a un pasivo financiero o a un instrumento de patrimonio en otra empresa". Un pasivo financiero supone una obligación de pago, una deuda futura para la empresa, mientras que un instrumento de patrimonio representa una participación en los activos de la empresa.

* **Características de los Instrumentos de Patrimonio (NRV 9.4):**
    * Son un negocio jurídico que evidencia/refleja la participación residual en los activos, una vez deducidos los pasivos.
    * Si son adquiridos por la propia empresa, nunca serán un activo, sino que minorarán los Fondos Propios.
    * Los gastos derivados de su emisión son parte del Patrimonio, contabilizándose como reservas, salvo cuando se haya desistido de su emisión, que se contabilizan en la cuenta de Pérdidas y Ganancias.


## Capital y Reservas

Esta sección del capítulo se adentra en dos componentes fundamentales de los fondos propios: el capital y las reservas, recurriendo a una perspectiva tanto contable como jurídica.

### Capital: Concepto y Contabilización

El Marco Conceptual del PGC define el Capital como la financiación procedente de las aportaciones realizadas por los propietarios, ya sea en la constitución de la empresa o posteriormente. Desde una óptica jurídica, la cifra de capital es una garantía para los acreedores, ya que se espera que esté materializada en activos. La legislación mercantil busca mantener la integridad del capital, obligando, por ejemplo, a "reservar" parte del resultado.

Las cuentas que conforman el subgrupo 10 «Capital» son:

* **100. Capital social:** Para sociedades mercantiles (anónima, limitada, comanditaria por acciones). Refleja el capital formalmente escriturado.
* **101. Fondo social:** Para entidades sin forma mercantil, como cooperativas.
* **102. Capital:** Para empresas individuales. Al final del ejercicio, los resultados se integran directamente en esta cuenta. La cuenta (550) «Titular de la explotación» recoge movimientos entre el empresario y la empresa durante el ejercicio, trasladando su saldo a la (102) al cierre.
* **103. Socios por desembolsos no exigidos:** Deudas de socios por la parte del capital suscrito pendiente de pago.
* **104. Socios por aportaciones no dinerarias pendientes:** Similar a la 103, pero para aportaciones en especie.
* **108. Acciones o participaciones propias en situaciones especiales.**
* **109. Acciones o participaciones propias para reducción de capital.**
    * Las cuentas 108 y 109 se refieren a situaciones especiales donde la empresa adquiere sus propias acciones, minorando el Patrimonio Neto.

La contabilización del **Capital Social (cuenta 100)** en sociedades mercantiles se detalla a través del proceso de **constitución de la empresa**, centrándose en la **fundación simultánea** (creación en un único acto por acuerdo de los socios fundadores). Los pasos contables son:

1.  **Emisión de las acciones:** Se utiliza el subgrupo 19 «Situaciones transitorias de financiación» antes de la inscripción registral.
    * Asiento: (190) Acciones emitidas a (194) Capital emitido pendiente de inscripción. El importe incluye el nominal y, si la hay, la prima de emisión.
2.  **Suscripción de las acciones:** Implica un compromiso de aportación de los socios.
    * Asiento: (1034) Socios por desembolsos no exigidos, capital pendiente de inscripción y/o (1044) Socios por aportaciones no dinerarias pendientes, capital pendiente de inscripción a (190) Acciones emitidas.
3.  **Desembolso de las acciones:** La ley exige un desembolso mínimo (al menos el 25% del valor nominal para S.A., y el 100% de la prima de emisión si existe).
    * Asiento: (57) Tesorería a (1034) Socios por desembolsos no exigidos, capital pendiente de inscripción.
    * Los desembolsos parciales posteriores se conocen como "dividendo pasivo". Su exigencia se contabiliza: (558) Socios por desembolsos exigidos a (103) Socios por desembolsos no exigidos.
4.  **Inscripción de la sociedad en el Registro Mercantil:** La empresa adquiere personalidad jurídica.
    * Asiento 1 (Capital): (194) Capital emitido pendiente de inscripción a (100) Capital Social y, si procede, a (110) Prima de Emisión.
    * Asiento 2 (Socios): (1030) Socios por desembolsos no exigidos y/o (1040) Socios por aportaciones no dinerarias pendientes a (1034) y/o (1044) por la parte del capital suscrito no desembolsado que ahora corresponde a una sociedad inscrita.
5.  **Gastos de constitución:** Se contabilizan directamente contra el Patrimonio Neto, cargando una cuenta de reservas (generalmente (113) Reservas voluntarias) con abono a tesorería o la deuda correspondiente.

El proceso es similar para las ampliaciones de capital.

### Reservas: Concepto y Tipología

Las Reservas son los beneficios obtenidos por la empresa que no han sido distribuidos entre sus propietarios. Se clasifican según su origen:

1.  **De Autofinanciación (o autofinanciación de enriquecimiento):** Derivadas del resultado positivo del ejercicio que los propietarios deciden mantener en la empresa.
    * **(112) Reserva legal:** Obligatoria por ley (art. 274 RDL 1/2010). Se destina un 10% del beneficio del ejercicio hasta que esta reserva alcance el 20% del capital social. Es, salvo casos especiales, indisponible.
    * **(1141) Reservas estatutarias:** Establecidas en los estatutos de la empresa.
    * **(113) Reservas voluntarias:** Constituidas libremente por la empresa y de libre disposición. También recogen los gastos de constitución o ajustes por cambios de criterio contable o errores.
2.  **Procedentes de Ampliaciones de Capital:**
    * **(110) Prima de emisión de acciones:** Es el sobreprecio pagado por las acciones sobre su valor nominal. Se justifica por la riqueza acumulada previamente por la empresa (reservas preexistentes) o buenas expectativas futuras. La normativa española prohíbe emisiones "por debajo de la par". La prima de emisión debe desembolsarse en su totalidad en el momento inicial.
    * **(111) Otros instrumentos de patrimonio neto.**
3.  **Para el Mantenimiento Efectivo del Capital:** Cuentas de la subdivisión (114) «Reservas especiales» que buscan asegurar que la cifra de Capital sea representativa de una garantía frente a terceros (ej. reservas por acciones propias, acciones de la sociedad dominante, o por capital amortizado).
4.  **Por Ajuste en el Capital:**
    * **(119) Diferencias por ajustes del capital en euros:** Derivada de los ajustes por redondeo en el traspaso de pesetas a euros.
5.  **Por la Compensación de Pérdidas:**
    * **(118) Aportaciones de socios o propietarios:** Aportaciones de socios diferentes a la suscripción de capital, habitualmente para compensar pérdidas y que no aparezcan en el Balance.

### Asientos Contables Relacionados

1. **Emisión de acciones:**
   
    DEBE                                   | HABER
    --------------------------------------|--------------------------------------
    (190) Acciones emitidas               | (194) Capital emitido pendiente de inscripción
    

2. **Suscripción de acciones:**
   
    DEBE                                   | HABER
    --------------------------------------|--------------------------------------
    (1034) Socios por desembolsos no      | (190) Acciones emitidas
    exigidos, capital pendiente de        |
    inscripción                           |
    (1044) Socios por aportaciones no     |
    dinerarias pendientes, capital        |
    pendiente de inscripción              |

3. **Desembolso de acciones:**
   
    DEBE                                   | HABER
    --------------------------------------|--------------------------------------
    (57) Tesorería                        | (1034) Socios por desembolsos no exigidos,capital pendiente de inscripción

4. **Exigencia de aportaciones pendientes:**
   
    DEBE                                   | HABER
    --------------------------------------|--------------------------------------
    (558) Socios por desembolsos exigidos | (103) Socios por desembolsos no exigidos

5. **Inscripción en el Registro Mercantil:**
   
    - **Capital:**
    
        DEBE                               | HABER
        ----------------------------------|--------------------------------------
        (194) Capital emitido pendiente   | (100) Capital Social
        de inscripción                    | (110) Prima de Emisión
    - **Socios:**
  
        DEBE                               | HABER
        ----------------------------------|--------------------------------------
        (1030) Socios por desembolsos no  | (1034) Socios por desembolsos no exigidos,
        exigidos                          | capital pendiente de inscripción
        (1040) Socios por aportaciones no | (1044) Socios por aportaciones no dinerarias
        dinerarias pendientes             | pendientes, capital pendiente de inscripción

## Otras Partidas del Patrimonio Neto

Esta sección se centra en cómo se gestionan y aplican los resultados económicos de la empresa, que son una parte crucial del patrimonio neto. La idea fundamental es que los incrementos (ingresos) y decrementos (gastos) del patrimonio se deben contabilizar para conocer la evolución periódica del mismo.

**Resultados Pendientes de Aplicación (Subgrupo 12):**

Este subgrupo recoge el resultado económico que no se imputa directamente al patrimonio y está pendiente de una decisión sobre su destino. Las cuentas principales son:

* **129. «Resultados del ejercicio»:** Esta es la cuenta más representativa. Al final del ejercicio, aglutina todos los ingresos (grupo 7) y gastos (grupo 6) para determinar si ha habido beneficio (saldo acreedor) o pérdida (saldo deudor). Su saldo es transitorio hasta que la Junta General de Accionistas (o el órgano correspondiente) decide qué hacer con él.
* **121. «Resultados negativos de ejercicios anteriores»:** Si el ejercicio arroja pérdidas, estas se traspasan de la cuenta (129) a la (121). Esta cuenta siempre tendrá saldo deudor y minora los fondos propios. Debe ser compensada con beneficios futuros.
    * *Asiento de traspaso de pérdidas:* (121) Resultados negativos de ejercicios anteriores a (129) Resultado del ejercicio.
* **120. «Remanente»:** Son beneficios no repartidos ni aplicados específicamente a ninguna otra cuenta tras la aprobación de las cuentas anuales y la distribución de resultados. Quedan a disposición de los administradores para su uso futuro (convertirlos en reservas o repartirlos).

**Aplicación del Resultado del Ejercicio (cuando hay beneficios):**

Si la cuenta (129) presenta un beneficio, la empresa debe decidir su destino. Las opciones principales son:

1.  **Compensar pérdidas anteriores:** Si la cuenta (121) tiene saldo, se utiliza parte del beneficio para reducirlo o eliminarlo.
2.  **Dotar Reservas:** Se traspasa parte del beneficio a cuentas de reservas (subgrupo 11), como:
    * Reserva Legal (obligatoria por ley).
    * Reservas Estatutarias (si así lo establecen los estatutos).
    * Reservas Voluntarias.
3.  **Repartir Dividendos:** Se reconoce una deuda con los accionistas.
    * La cuenta **(526) «Dividendo activo a pagar»** recoge la obligación de pago desde que se aprueba el dividendo hasta que se paga.
    * Si durante el ejercicio se han adelantado dividendos "a cuenta" del beneficio previsible, estos se habrán contabilizado en la cuenta **(557) «Dividendo activo a cuenta»** (saldo deudor). Antes de determinar el dividendo final a pagar, se debe saldar esta cuenta (557).
4.  **Destinar a Remanente:** La parte del beneficio que no se aplica a los puntos anteriores puede quedar en la cuenta (120) «Remanente».

El asiento contable para la aplicación del resultado del ejercicio (cuando hay beneficios) típicamente sería:

| DEBE                               | HABER                                                 |
| :--------------------------------- | :---------------------------------------------------- |
| (129) Resultado del ejercicio      | a (121) Rdos negativos de ejercicios anteriores (si hay) |
|                                    | a (11X) Reservas (Legal, Estatutaria, Voluntarias, etc.) |
|                                    | a (557) Dividendo activo a cuenta (para saldarlo)     |
|                                    | a (526) Dividendo activo a pagar                      |
|                                    | a (120) Remanente                                     |

Todas estas cuentas del subgrupo 12 figuran en el patrimonio neto del Balance, con signo positivo o negativo según corresponda.

## Ajustes por Cambio de Valor

Esta sección explica que, aunque la mayoría de los ingresos y gastos del ejercicio se imputan a la cuenta de Pérdidas y Ganancias, algunos deben imputarse directamente al patrimonio neto. Esta distinción se realiza porque ciertas variaciones del patrimonio, aunque se registran contablemente cuando ocurren, no se consideran "realizadas". Imputarlas directamente a resultados podría llevar a una descapitalización si, por ejemplo, se repartieran dividendos basados en beneficios no consolidados. El objetivo final es evitar la descapitalización de la empresa.

**Proceso Contable General:**

1.  **Reconocimiento Inicial:**
    * Los decrementos de valor (gastos) que no están "consolidados" se contabilizan utilizando cuentas del **grupo 8** («Gastos imputados al patrimonio neto»).
    * Los incrementos de valor (ingresos) que no están "consolidados" se contabilizan utilizando cuentas del **grupo 9** («Ingresos imputados al patrimonio neto»).
2.  **Regularización al Cierre del Ejercicio:**
    * Al final del ejercicio, los saldos de las cuentas de los grupos 8 y 9 se agrupan y se trasladan a las cuentas correspondientes del **subgrupo 13** («Subvenciones, donaciones y ajustes por cambios de valor»). Estas cuentas del subgrupo 13 reflejarán el efecto neto de estas variaciones en el Balance.
3.  **Realización y Transferencia a Resultados:**
    * Cuando las variaciones de patrimonio previamente imputadas directamente al patrimonio neto se "realizan" (por ejemplo, a través de una venta o transacción), se transfieren desde el subgrupo 13 a la cuenta de Pérdidas y Ganancias (cuenta 129 «Resultado del ejercicio»).
    * Este traspaso implica utilizar cuentas específicas de los grupos 6 o 7 para los gastos o ingresos realizados, y sus contrapartidas son cuentas de los grupos 8 o 9 destinadas a la "transferencia" de estas partidas desde el patrimonio.
    * El efecto de este traspaso en el Patrimonio Neto es cualitativo (cambia la composición dentro del patrimonio), pero no cuantitativo (la cantidad total del patrimonio no varía por este traspaso en sí mismo, ya que una partida disminuye en el subgrupo 13 y aumenta en la cuenta de resultados).

**Ejemplo con Activos Financieros a Valor Razonable con Cambios en Patrimonio Neto:**

* **Pérdida de valor no realizada:**
    * Reconocimiento del gasto: (800) Pérdidas en activos financieros a VR con cambios en PN a (250) Inversiones financieras l/p en instrumentos de patrimonio.
    * Regularización al cierre: (133) Ajustes por valoración en activos financieros a VR con cambios en PN a (800).
* **Ganancia de valor no realizada:**
    * Reconocimiento del ingreso: (250) Inversiones financieras l/p en instrumentos de patrimonio a (900) Beneficios en activos financieros a VR con cambios en PN.
    * Regularización al cierre: (900) a (133).
* **Venta del activo (realización):**
    * Si existía una pérdida acumulada en (133) (saldo deudor):
        * Traspaso a resultados: (663) Pérdidas por valoración de instrumentos financieros por su VR a (902) Transferencia de pérdidas de activos financieros a VR con cambios en PN.
        * Regularización en PN: (902) a (133) Ajustes por valoración en activos financieros a VR con cambios en PN.
    * Si existía un beneficio acumulado en (133) (saldo acreedor):
        * Traspaso a resultados: (802) Transferencia de beneficios en activos financieros a VR con cambios en PN a (763) Beneficios por valoración de instrumentos financieros por su VR.
        * Regularización en PN: (133) a (802).

**Presentación en Cuentas Anuales:**

* Estas operaciones se reflejan detalladamente en el **Estado de Cambios en el Patrimonio Neto (ECPN)**.
    * La primera parte del ECPN, el **Estado de Ingresos y Gastos Reconocidos**, muestra:
        * Primero, las variaciones del patrimonio que han ido al resultado del ejercicio (grupos 6 y 7).
        * Luego, las variaciones imputadas directamente al patrimonio neto (grupos 8 y 9, agregadas en el subgrupo 13).
        * Finalmente, las transferencias realizadas desde el patrimonio neto (subgrupo 13) hacia la cuenta de Resultados.

El subgrupo 13 incluye cuentas como:

* **130. Subvenciones oficiales de capital:** Subvenciones otorgadas por organismos oficiales destinadas a financiar activos no corrientes o inversiones a largo plazo.
* **131. Donaciones y legados de capital:** Aportaciones gratuitas de terceros, ya sean personas físicas o jurídicas, destinadas a incrementar el patrimonio de la empresa.
* **133. Ajustes por valoración en activos financieros a valor razonable con cambios en el patrimonio neto:** Variaciones en el valor razonable de activos financieros que se registran directamente en el patrimonio neto, sin pasar por la cuenta de resultados.
* **134. Operaciones de cobertura:** Ajustes relacionados con instrumentos financieros utilizados para cubrir riesgos específicos, como tipos de interés, tipos de cambio o precios de materias primas, que afectan directamente al patrimonio neto.
* **Otras:** Cualquier otra partida que, según la normativa contable, deba imputarse directamente al patrimonio neto y no encaje en las categorías anteriores.

## Subvenciones, Donaciones y Legados

Esta sección trata la contabilidad de las aportaciones recibidas por la empresa que no provienen de sus socios como contraprestación por su participación en el capital.

**Definiciones Clave:**

* **Subvención:** Importe (en efectivo o en especie) otorgado por un organismo (estatal u otro) a título gratuito, condicionado a que se emplee en una actividad económica específica y se cumplan ciertos requisitos.
* **Donación:** Acto de liberalidad por el que un donante transfiere un activo a un beneficiario sin recibir remuneración.
* **Legado:** Patrimonio entregado a un tercero mediante disposición testamentaria.
* **Exclusión Importante:** Las aportaciones realizadas incondicionalmente por los socios a la empresa (que no sean capital) no se consideran subvenciones o donaciones a efectos contables, sino que se registran como Fondos Propios en la cuenta (118) «Aportaciones de socios o propietarios» (según la Norma de Registro y Valoración - NRV 18.2).

**Valoración (NRV 18.1.2):**

* **Monetarias:** Se valoran por el importe recibido.
* **No monetarias:** Se valoran por el valor razonable del bien en el momento de su reconocimiento. Este criterio también aplica a las aportaciones de socios mencionadas en la NRV 18.2.

**Reconocimiento y Contabilización (NRV 18.1.1):**

La contabilización depende de si están sujetas a condiciones y si estas se han cumplido:

* **Subvenciones Reintegrables:** Si la recepción está supeditada a condiciones y su cumplimiento no está garantizado, se contabilizan como un pasivo. Se utilizan cuentas como la (172) «Deudas a largo plazo transformables en subvenciones, donaciones y legados» o la (522) si es a corto plazo.
* **Subvenciones No Reintegrables:** Son cantidades recibidas incondicionalmente o aquellas cuyas condiciones ya se han cumplido y no hay dudas razonables sobre su recepción. Generalmente, se imputan inicialmente al Patrimonio Neto, aunque en algunos casos específicos van directamente a la Cuenta de Pérdidas y Ganancias.

**Criterios de Imputación para Subvenciones No Reintegrables (NRV 18.1.3):**

La imputación a resultados depende de la finalidad de la subvención:

1.  **Para asegurar rentabilidad mínima o compensar déficits de explotación:** Se imputan como ingresos del ejercicio en que se conceden (directamente a la cuenta 740).
2.  **Para financiar gastos específicos:** Se imputan como ingresos en el mismo ejercicio en que se devengan los gastos que financian (inicialmente a patrimonio neto, luego a resultados).
3.  **Para adquirir activos (inmovilizado intangible, material, inversiones inmobiliarias):** Se imputan como ingresos del ejercicio en proporción a la amortización de dichos activos, o cuando se enajenen, corrijan valorativamente por deterioro o se den de baja (inicialmente a patrimonio neto, luego a resultados).
4.  **Para adquirir existencias o activos financieros:** Se imputan como ingresos del ejercicio en que se produzca su enajenación, corrección valorativa por deterioro o baja en balance (inicialmente a patrimonio neto, luego a resultados).
5.  **Para cancelación de deudas:** Se imputan como ingresos del ejercicio en que se produzca la cancelación, salvo que se otorguen para una financiación específica (en cuyo caso, la imputación sigue al elemento financiado) (inicialmente a patrimonio neto, luego a resultados).
6.  **Importes monetarios sin asignación a una finalidad específica:** Se imputan como ingresos del ejercicio en que se reconozcan (directamente a la cuenta 740).

**Proceso Contable Simplificado para Subvenciones No Reintegrables:**

* **Imputación Directa a Resultados (Pérdidas y Ganancias):**
    * Ocurre cuando la subvención financia la actividad general de la empresa o no tiene una finalidad concreta (casos 1 y 6 de la NRV 18.1.3).
    * Se utiliza la cuenta (740) «Subvenciones, donaciones y legados a la explotación».
* **Imputación Inicial a Patrimonio Neto y Posterior Transferencia a Resultados:**
    * Ocurre para las subvenciones con una finalidad concreta (casos 2, 3, 4, 5).
    * **Paso 1 (Reconocimiento inicial):** Se contabiliza como un ingreso directamente en el patrimonio neto, utilizando cuentas del **subgrupo 94** («Ingresos por subvenciones, donaciones y legados»). Por ejemplo, (940) para subvenciones oficiales de capital, (941) para donaciones y legados de capital, o (942) para otras.
    * **Paso 2 (Regularización al cierre):** El saldo de estas cuentas del subgrupo 94 se traspasa al final del ejercicio a la cuenta correspondiente del **subgrupo 13** (por ejemplo, (130), (131), (132)).
    * **Paso 3 (Transferencia a Resultados):** La cantidad subvencionada se va trasladando a la Cuenta de Pérdidas y Ganancias de forma sistemática y correlacionada con los gastos que financia. Para ello, se carga una cuenta del **subgrupo 84** («Transferencias de subvenciones, donaciones y legados») y se abona una cuenta del **subgrupo 74** (por ejemplo, (746) o (747)). El saldo de la cuenta del subgrupo 84 también se imputa a la cuenta del subgrupo 13, de modo que esta última quedará saldada cuando la subvención haya sido completamente traspasada al resultado.

**Consideraciones Adicionales:**

* **Deterioro de bienes financiados con subvenciones:** Si un activo financiado con una subvención sufre un deterioro, una parte proporcional de la subvención se transfiere a resultados. La NRV 18 establece que, para simplificar, las correcciones valorativas por deterioro de la parte de los elementos financiada gratuitamente se consideran irreversibles.
* **Efecto impositivo:** La imputación a Patrimonio Neto de las subvenciones debe realizarse neta del efecto impositivo. Esto implica contabilizar diferencias temporarias (utilizando el subgrupo 83 y la cuenta 479), un tema que se trata en otro capítulo del manual.



# Provisiones y Contingencias

## Definiciones y características

- `Concepto de pasivo`: obligaciones actuales surgidas como consecuencia de sucesos pasados, para cuya extinción la empresa espera desprenderse de recursos que puedan producir beneficios o rendimientos económicos futuros. A estos efectos se incluyen las `provisiones`.
- Se trata del grupo **14**.
- En esta parte del PGC __las provisiones__ se conocen como obligaciones expresas o tácitas a largo plazo, claramente específicas en cuanto a naturaleza, pero que en la fecha de cierre del ejercicio son indeterminadas en cuanto a su importe exacto o a la fecha en que se producirán.
- Se reconocen como `provisiones` los pasivos que resulten `indeterminados` respecto a su importe o a la fecha en la que se cancelará.

**Provisiones:**

* Son **obligaciones actuales** de una empresa, surgidas de hechos pasados.
* Implican una **salida probable de recursos** para cancelarlas (desprenderse de recursos).
* Existe **incertidumbre sobre su importe exacto o la fecha** de cancelación.
* Deben poder **estimarse de forma fiable**.
* Se reconocen en el balance como un pasivo.

**Contingencias (Pasivos Contingentes):**

* Pueden ser **obligaciones posibles**, cuya existencia se confirmará por eventos futuros inciertos no controlados por la empresa.
* O pueden ser **obligaciones presentes** que no se reconocen porque:
    * No es probable que la empresa tenga que desprenderse de recursos para cancelarla.
    * El importe no puede valorarse con suficiente fiabilidad.
* **No se reconocen en el balance**, pero se informan en la memoria si no son remotas.

**Diferencia Clave:**

* Una **provisión** es una obligación presente, probable y medible con fiabilidad (se contabiliza).
* Una **contingencia** es una obligación posible, o una obligación presente que no es probable o no se puede medir fiablemente (se revela en notas, no se contabiliza en el balance).

**Activos Contingentes:**

* Son **derechos posibles** (no presentes) surgidos de sucesos pasados, cuya existencia se confirmará por eventos futuros inciertos.
* **No se reconocen en el balance** porque no cumplen la definición de activo (no son presentes ni es seguro que generen beneficios). Se informan en la memoria si es probable la entrada de beneficios.

## Criterios de Reconocimiento y Valoración de las Provisiones

### Reconocimiento de Provisiones

Según la NIC 37, se debe reconocer una provisión cuando se cumplen las siguientes condiciones:

* La entidad tiene una **obligación presente** (legal o implícita) como resultado de un suceso pasado.
* Es **probable** que la entidad tenga que desprenderse de recursos que incorporen beneficios económicos para cancelar dicha obligación.
* Puede hacerse una **estimación fiable** del importe de la obligación.

Si no se cumplen estas tres condiciones, no se debe reconocer la provisión. Las contingencias se mencionan en la Memoria, mientras que las provisiones, además de otras menciones, implican un asiento contable. El Plan General de Contabilidad (PGC) establece el subgrupo 14 para el registro de las provisiones a largo plazo.

El PGC contempla diversas cuentas para provisiones, como (de la 140-147):

* Provisión por retribuciones a largo plazo al personal.
* Provisión para impuestos.
* Provisión para otras responsabilidades.
* Provisión por desmantelamiento, retiro o rehabilitación del inmovilizado.
* Provisión para actuaciones medioambientales.
* Provisión para reestructuraciones.
* Provisión por transacciones con pagos basados en instrumentos de patrimonio.

Estas cuentas tienen su equivalente a corto plazo en las divisionarias de la cuenta (529) Provisiones a corto plazo.

### Valoración de las Provisiones

La NRV 15.2 establece que las provisiones se valorarán por:

* El **valor actual de la mejor estimación posible** del importe necesario para cancelar o transferir a un tercero la obligación.
* Los **ajustes por actualización** se registrarán como un gasto financiero conforme se devenguen.

Esto implica que:

1.  **Imputación inicial**: Se cuantifica la provisión por el valor actual de la mejor estimación de la deuda.
2.  **Cierre de cada ejercicio**:
    * **Actualización financiera**: Se ajusta el valor por el paso del tiempo, utilizando la cuenta (660) Gastos financieros por actualización de provisiones. El tipo de interés debe considerar el valor temporal del dinero y el riesgo específico del pasivo.
    * **Ajuste de la estimación**: Se vuelve a estimar el valor actual de la deuda con la mejor información disponible.
        * Si la provisión debe aumentarse, se carga a la misma cuenta de gasto que la originó.
        * Si debe disminuirse, se utiliza alguna de las divisionarias de la cuenta (795) Exceso de provisiones.

**Puntualizaciones importantes:**

* **Provisión por desmantelamiento, retiro y rehabilitación (cuenta 143)**:
    * Está relacionada con inmovilizados materiales y su valoración inicial (NRV 2).
    * Los cambios de valor derivados de la mejora en la estimación de esta provisión repercuten sobre el valor del inmovilizado correspondiente, incluso si ya está en funcionamiento.
* **Provisiones a corto plazo (vencimiento $leq$ 1 año)**:
    * Si el efecto financiero no es significativo, **no será necesario llevar a cabo ningún tipo de descuento** (actualización financiera). Se contabilizarán directamente en la cuenta 529.

### Compensaciones de Terceros

Cuando se espere recibir una compensación de un tercero al liquidar la obligación (por ejemplo, de un seguro):

* **No se minorará el importe de la deuda** (provisión).
* Se reconocerá un **derecho de cobro en el activo** (por un importe que no exceda el de la obligación) siempre que no existan dudas de que dicho reembolso será percibido.
* **Excepción**: Si existe un vínculo legal o contractual por el que se haya exteriorizado parte del riesgo y la empresa no esté obligada a responder por esa parte, la provisión se estimará por el importe neto que asume la empresa.

## Provisiones por Operaciones Comerciales

La actividad comercial de una empresa conlleva la asunción de obligaciones con los clientes, como garantías post-venta, reparaciones o la aceptación de devoluciones. Estas situaciones se ajustan a la definición de provisiones.

**Reconocimiento y Valoración:**

* El Plan General de Contabilidad (PGC) incluye la cuenta **(499) Provisiones por operaciones comerciales** dentro del subgrupo 49.
* Específicamente, se utiliza la cuenta **(4999) Provisión para otras operaciones comerciales** para estos fines.
* **Procedimiento Contable Particular:**
    1.  **Al cierre del ejercicio:** Se dota la provisión por la cuantía estimada de estas obligaciones futuras. Esto se hace cargando la cuenta (6959) Dotación a la provisión para otras operaciones comerciales y abonando la (4999) Provisión para otras operaciones comerciales.
    2.  **Al año siguiente:** Se anula la provisión dotada el año anterior por el mismo importe. Esto se hace cargando la (4999) y abonando la (79549) Exceso de provisión para otras operaciones comerciales.
    3.  Los gastos reales por devoluciones, reparaciones, etc., se contabilizan en sus respectivas cuentas de gasto cuando ocurren durante el ejercicio.
* Este método asegura una adecuada **correlación de ingresos y gastos**: el gasto estimado por estas operaciones se reconoce en el mismo año que la venta que las origina. Al anular la provisión al año siguiente, en el resultado solo queda la diferencia entre lo estimado y los gastos reales.

**Estimación de la Provisión:**

* Se debe considerar la **mejor estimación posible**.
* Para valorar un conjunto importante de casos individuales (como el total de ventas de un ejercicio), la NIC 37 sugiere utilizar el **"valor esperado"**. Esto implica calcular un promedio de los posibles desenlaces ponderado por sus probabilidades de ocurrencia.


# Impuesto sobre beneficios

## Definición y características

Son aquellos impuestos directos que se liquidan a partir de un resultado empresarial de acuerdo a las normas fiscales. Como características, podemos destacar:

- Impuesto directo, personal, hace referencia a una persona en concreto (jurídica), proporcional y periódico.
- El hecho imponible lo constituyen la obtención de la renta.
- Se aplica un gravamen único.
- Básicamente, es un gasto más del ejercicio.

Por otro lado, debemos de mencionar el `impuesto sobre sociedades`, cuya base imponible, se determina a partir del resultado contable.

## El Resultado Contable y la Base Imponible

Este apartado detalla el proceso para determinar la base imponible del Impuesto sobre Sociedades a partir del resultado contable de una empresa, así como los pasos subsecuentes para calcular la cuota final del impuesto.

**Normativa y Punto de Partida:**

* Los contribuyentes están obligados a presentar la declaración del Impuesto sobre Sociedades conforme a la Ley 27/2014, de 27 de noviembre, del Impuesto sobre Sociedades, y el Real Decreto 634/2015, de 10 de julio, que aprueba el Reglamento del Impuesto sobre Sociedades.
* El cálculo para determinar la cuota a pagar se inicia con el **resultado contable** de la entidad. 

| **Análisis**                                   |                                               |
|------------------------------------------------|-----------------------------------------------|
| Resultado contable antes de Impuestos          |                                               |
| (+/-) Ajustes                                  |                                               |
| (=) Base imponible previa                      |                                               |
| (+/-) Bases imponibles negativas de ejercicios anteriores |                                               |
| (=) Base imponible                             |                                               |
| (x) Tipo de gravamen                           |                                               |
| (=) Cuota íntegra                              |                                               |
| (-) Deducciones y bonificaciones fiscales      |                                               |
| (=) Cuota líquida                              |                                               |
| (-) Retenciones y pagos a cuenta               |                                               |
| (=) Cuota diferencial                          |                                               |

**Proceso de Cálculo de la Base Imponible y Cuota:**

1.  **Resultado Contable Antes de Impuestos (RCAI)**: Es el punto de inicio.
2.  **Ajustes al Resultado Contable**:
    * Se realizan correcciones o ajustes al resultado contable debido a diferencias entre los criterios de cálculo contables y los permitidos por la Ley del Impuesto sobre Sociedades.
    * Estos ajustes pueden ser positivos o negativos.
    * Su origen puede estar en **diferencias de carácter temporal o permanente**.
3.  **Base Imponible Previa**: Resultado de aplicar los ajustes al RCAI.
4.  **Compensación de Bases Imponibles Negativas**:
    * Se tienen en cuenta las bases imponibles negativas de ejercicios anteriores (pérdidas fiscales).
    * La normativa permite su compensación en el cálculo del impuesto.
5.  **Base Imponible**: Resultado tras la posible compensación de bases imponibles negativas.
6.  **Aplicación del Tipo de Gravamen**:
    * Al resultado obtenido (Base Imponible) se le aplica el tipo de gravamen que corresponda.
7.  **Cuota Íntegra**: Es el resultado de aplicar el tipo de gravamen a la base imponible.
8.  **Deducciones y Bonificaciones**:
    * Se restan las deducciones o bonificaciones fiscales a las que la empresa tenga derecho.
    * El objetivo de estas deducciones es fomentar la realización de ciertas actividades que benefician tanto a la entidad como a la economía general.
    * Ejemplos de estas actividades incluyen: investigación y desarrollo, innovación tecnológica, creación de empleo, etc.
9.  **Cuota Líquida**: Resulta tras restar las deducciones y bonificaciones de la cuota íntegra.
10. **Retenciones y Pagos a Cuenta**:
    * Finalmente, de la cuota líquida se deducen las cantidades que hayan sido objeto de retención (cuando la empresa recibe ciertas rentas) y los pagos que la empresa haya realizado a la Administración Tributaria como pagos a cuenta del impuesto.
11. **Cuota Diferencial**: Es el importe final a ingresar o a devolver por la Hacienda Pública.


## El Impuesto Corriente

Este apartado se enfoca en el concepto y registro contable del impuesto corriente.

**Definición y Cálculo:**

* El **impuesto corriente** es la cantidad que una empresa debe pagar (o puede recuperar) por el impuesto sobre beneficios devengado en el ejercicio actual. Este monto se calcula aplicando las normas fiscales correspondientes tras realizar los ajustes pertinentes al resultado contable.
* En esencia, el impuesto corriente como gasto se corresponde con la **cuota líquida** que se obtiene después de aplicar el tipo impositivo a la base imponible y restar las deducciones y bonificaciones fiscales.

**Factores que Afectan el Cálculo:**

* El impuesto corriente (entendido como la cuota líquida o gasto por impuesto) puede verse reducido por:
    * **Deducciones y ventajas fiscales** aplicables sobre la cuota íntegra.
* Es importante distinguir que la **compensación de pérdidas de ejercicios anteriores** reduce la base imponible sobre la cual se calcula el impuesto, afectando así la cuota íntegra y, por ende, la cuota líquida (impuesto corriente).
* Por otro lado, hay elementos que **no modifican el importe del impuesto corriente (gasto)**, pero sí afectan la cantidad final a pagar o a devolver (cuota diferencial):
    * **Retenciones** soportadas por la empresa.
    * **Pagos a cuenta** realizados durante el ejercicio.

**Cuentas Contables Involucradas:**

El registro contable del impuesto corriente utiliza principalmente las siguientes cuentas:

* **(6300) Impuesto corriente**: Refleja el gasto por el impuesto sobre beneficios devengado en el ejercicio. Corresponde a la cuota líquida.
* **(4752) Hacienda Pública acreedora por impuesto de sociedades**: Es una cuenta de pasivo que representa la cantidad que la empresa debe pagar a Hacienda por este impuesto, una vez descontadas todas las deducciones, retenciones y pagos a cuenta.
* **(473) Hacienda Pública retenciones y pagos a cuenta**: Cuenta de activo que acumula las cantidades retenidas a la empresa y los pagos fraccionados realizados a cuenta del impuesto del ejercicio. Se regulariza al contabilizar el impuesto.
* **(4709) Hacienda Pública deudora por devoluciones de impuestos**: Cuenta de activo que surge cuando las retenciones y pagos a cuenta superan la cuota líquida, reflejando el derecho de la empresa a recibir una devolución.

**Ejemplificación:**

Podemos ejemplificar dos casos en los que se contabiliza el impuesto corriente:
1.  Cuando las retenciones y pagos a cuenta son inferiores a la cuota del impuesto, resultando en una cantidad a pagar.
2.  Cuando las retenciones y pagos a cuenta son superiores a la cuota del impuesto, resultando en una cantidad a devolver por Hacienda.

Finalmente, **si el resultado del ejercicio es de pérdida, surge una problemática que da lugar a un impuesto diferido**.

* Por impuesto diferido entendemos el efecto contable que surge de las diferencias temporarias entre el resultado contable y la base imponible fiscal. Estas diferencias generan activos o pasivos por impuestos diferidos, que reflejan el impacto fiscal futuro derivado de dichas discrepancias. El impuesto diferido se registra para garantizar que los impuestos se imputen al ejercicio en el que realmente se devengan, independientemente de cuándo se paguen o recuperen.


## Diferencias Permanentes y Temporarias

Este apartado profundiza en los ajustes entre el resultado contable y la base imponible, centrándose en las diferencias temporarias y permanentes, y su relación con el impuesto diferido.

### Definición

Se retoma el concepto de los ajustes que surgen por la discrepancia entre los criterios contables y fiscales.

* **Diferencias Temporarias**:
    * Son aquellas que se derivan de la diferente valoración contable y fiscal atribuida a los activos, pasivos y determinados instrumentos de patrimonio propio de la empresa.
    * Estas diferencias tienen incidencia en la carga fiscal futura.
    * Pueden originar dos situaciones:
        * **Diferencias Imponibles**: Darán lugar a mayores cantidades a pagar (**en la práctica se restan**) o menores cantidades a devolver por impuestos en ejercicios futuros, normalmente a medida que se recuperen los activos o se liquiden los pasivos de los que se derivan.
        * **Diferencias Deducibles**: Darán lugar a menores cantidades a pagar (**en la práctica se suman**) o a mayores cantidades a devolver por impuestos en ejercicios futuros, a medida que se recuperen los activos o se liquiden los pasivos de los que se derivan.
        * "Imponible" se refiere a aquello que está sujeto a impuesto, es decir, la cantidad o valor sobre el cual se va a aplicar una tasa impositiva para calcular el impuesto a pagar. Constituye la materia prima del tributo. Podemos pensar que es toda renta, bien, servicio o transacción, susceptible de ser gravada.
        * Deducible" se refiere a aquellos gastos, costes o minoraciones que la ley permite restar de los ingresos brutos o de la base imponible para determinar la base imponible neta o la cuota tributaria. El objetivo de las deducciones es ajustar la capacidad económica real del contribuyente.
        * En relación: Primero se determinan los ingresos o valores imponibles para obtener una base bruta. Luego, se restan los gastos y otros conceptos deducibles permitidos por la ley para llegar a una base neta o liquidable, sobre la cual se aplica el porcentaje de impuesto correspondiente.

* **Diferencias Permanentes**:
    * Son aquellas diferencias entre las magnitudes contables y fiscales que no se identifican como temporarias.
    * No se registran contablemente como impuesto diferido, aunque sí deben considerarse en el cálculo del impuesto corriente del ejercicio.

* **Ejemplos:**:
    * Un beneficio por la cesión de una patente que está parcialmente exento fiscalmente genera una **diferencia permanente negativa** (menor base imponible que resultado contable).
    * Una multa de tráfico no deducible fiscalmente es una **diferencia permanente positiva** (mayor base imponible que resultado contable).
    * Un deterioro de valor de un cliente contabilizado como gasto, pero que fiscalmente será deducible el próximo año, origina una **diferencia temporaria deducible**.
    * La amortización acelerada de un activo fiscalmente (libertad de amortización) mientras contablemente se amortiza en más años, genera una **diferencia temporaria imponible**.

### Diferencias Temporarias e Impuesto Diferido

Las diferencias temporarias son la clave para entender el impuesto diferido.

* Se originan por la **diferente valoración contable y fiscal** (diferencia entre la base fiscal y el valor contable) de activos, pasivos e instrumentos de patrimonio, siempre que tengan incidencia en la carga fiscal futura.
    * La **base fiscal** es el importe atribuido a un elemento según la legislación fiscal.
* Normalmente, surgen de **diferencias temporales** en la imputación de ingresos y gastos entre el resultado contable y la base imponible, las cuales revierten en periodos siguientes.
* Estas diferencias (imponibles o deducibles) se reflejan contablemente mediante cuentas específicas, principalmente:
    * **(6301) Impuesto diferido**
    * **(4740) Activos por diferencias temporarias deducibles**
    * **(479) Pasivos por diferencias temporarias imponibles**

* **Registro de Diferencias Temporarias Imponibles (originan un pasivo por impuesto diferido)**:
    * **Origen**: Se carga la cuenta (6301) Impuesto diferido y se abona la (479) Pasivos por diferencias temporarias imponibles.
        ```
        XXX (6301) Impuesto diferido
                a (479) Pasivos por diferencias temporarias imponibles XXX
        ```
    * **Reversión**: Se carga la (479) Pasivos por diferencias temporarias imponibles y se abona la (6301) Impuesto diferido.
        ```
        XXX (479) Pasivos por diferencias temporarias imponibles
                a (6301) Impuesto diferido XXX
        ```

* **Registro de Diferencias Temporarias Deducibles (originan un activo por impuesto diferido)**:
    * **Origen**: Se carga la cuenta (4740) Activos por diferencias temporarias deducibles y se abona la (6301) Impuesto diferido.
        ```
        XXX (4740) Activos por diferencias temporarias deducibles
                a (6301) Impuesto diferido XXX
        ```
    * **Reversión**: Se carga la (6301) Impuesto diferido y se abona la (4740) Activos por diferencias temporarias deducibles.
        ```
        XXX (6301) Impuesto diferido
                a (4740) Activos por diferencias temporarias deducibles XXX
        ```

## Explicación Extra
Ahora vamos a añadir una serie de ejemplos para que se entienda mejor en cuanto a las casuísticas que pueden surgir en la vida real, ya que puede ser un poco lioso, por ejemplo, el caso de que una multa de tráfico sea una diferencia permanente positiva:
Cuando analizamos el Impuesto sobre Sociedades, uno de los conceptos que más dudas genera son las **diferencias permanentes**. En concreto, vamos a entender por qué una **multa de tráfico** se considera una **diferencia permanente positiva**.

---

### La Multa de Tráfico: Un Gasto Contable que No es Deducible Fiscalmente

Para entenderlo, debemos diferenciar dos perspectivas:

1.  **Perspectiva Contable:**
    * Desde el punto de vista contable, una multa de tráfico es un **gasto** para la empresa.
    * Se registra en la contabilidad como tal (por ejemplo, en una cuenta de gastos excepcionales o servicios exteriores).
    * Al ser un gasto, **resta** al resultado contable de la empresa. Es decir, reduce el beneficio que la empresa ha obtenido según sus libros contables.

2.  **Perspectiva Fiscal:**
    * La Ley del Impuesto sobre Sociedades establece claramente que las **sanciones y multas (incluidas las de tráfico) no son gastos fiscalmente deducibles**.
    * Esto significa que, a ojos de Hacienda, la multa no puede ser utilizada para reducir la base imponible sobre la que se calculará el impuesto.

---

### ¿Por qué se produce un "Ajuste Positivo"?

Aquí es donde entra en juego la necesidad de realizar un **ajuste**. Imagina el proceso de cálculo del impuesto:

* Se parte del **Resultado Contable Antes de Impuestos**. Este resultado ya tiene la multa restada como gasto.
* Sin embargo, la ley fiscal nos dice que esa multa no debe haber restado. Para "deshacer" el efecto de esa resta contable, tenemos que **sumar de nuevo** el importe de la multa al resultado contable.

**Ejemplo numérico:**

Imagina que tu empresa tiene:

* Un **Resultado Contable Antes de Impuestos de 50.000 €**.
* Dentro de esos 50.000 €, ya se ha restado una **multa de 1.000 €**. (Es decir, si no hubiera habido multa, el resultado contable habría sido 51.000 €).

Cuando calculas la **Base Imponible Fiscal**:

* **Partes de:** 50.000 € (Resultado Contable)
* **Ajuste por multa:** Como fiscalmente esos 1.000 € no son deducibles, los **sumas** para revertir la resta que se hizo contablemente.
* **Base Imponible Fiscal:** 50.000 € + 1.000 € = **51.000 €**

En este caso, la multa provoca que tu **base imponible fiscal (51.000 €) sea mayor que tu resultado contable (50.000 €)**. Por eso se le denomina **"positiva"**, porque incrementa la cantidad sobre la que pagarás impuestos.

---

### ¿Por qué es "Permanente"?

Se le llama **permanente** porque esta diferencia **nunca se va a revertir o compensar** en el futuro. La multa nunca será un gasto deducible fiscalmente, ni en el ejercicio actual ni en los siguientes.

Esto la distingue de las "diferencias temporarias", que sí se compensan con el tiempo (por ejemplo, un gasto que es deducible ahora contablemente pero fiscalmente lo será en el futuro, o viceversa).

---

### En Resumen:

Una multa de tráfico es una **diferencia permanente positiva** porque:

* Es un **gasto** que reduce tu resultado contable.
* **Nunca será deducible fiscalmente**, lo que la convierte en **permanente**.
* Para calcular la base imponible fiscal, debes **sumarla de nuevo** al resultado contable, lo que **incrementa** dicha base imponible y, por lo tanto, es un ajuste **positivo**.

Esto asegura que, a efectos fiscales, la empresa no se beneficie de una reducción de su base imponible por un gasto que la ley no considera deducible.

Creo que este ejemplo es bastante global y abarca todas las posibles dudas que el lector pueda tener.

---

### Diferencias Temporarias por Pérdidas a Compensar

Este subapartado explica cómo se tratan las pérdidas fiscales de ejercicios anteriores que están pendientes de compensar con beneficios futuros.

* **Naturaleza**: Las pérdidas de ejercicios anteriores se consideran un tipo de **diferencia temporaria**. Esto se debe a que, cuando una empresa incurre en pérdidas fiscales, se genera un derecho (un crédito fiscal) que solo podrá aplicarse (revertir) cuando la empresa obtenga beneficios fiscales en el futuro.
* **Cuenta Contable**: La cuenta principal para reflejar este derecho es la **(4745) Crédito por pérdidas a compensar del ejercicio**. Esta cuenta recoge el importe de la reducción del Impuesto sobre Beneficios que se espera pagar en el futuro, gracias a la compensación de estas bases imponibles negativas pendientes.
* **Reconocimiento del Activo por Impuesto Diferido**:
    * Siguiendo el **principio de prudencia**, un activo por impuesto diferido derivado de estas pérdidas solo se reconocerá si es **probable** que la empresa genere ganancias fiscales futuras suficientes para poder aplicar estos créditos.
    * Siempre que se cumpla la condición anterior, se reconocerá un activo por: el derecho a compensar pérdidas fiscales en ejercicios posteriores, por las diferencias temporarias deducibles, y por las deducciones y otras ventajas fiscales no utilizadas que queden pendientes de aplicar fiscalmente.
    * Si existe un historial de pérdidas continuadas, se presume (salvo prueba en contrario) que no es probable obtener dichas ganancias futuras que permitan compensar las bases imponibles negativas en un plazo no superior al previsto por la legislación tributaria, lo que limitaría el reconocimiento de este activo.
* **Registro Contable**:
    * **Origen del crédito fiscal (al surgir la pérdida compensable y ser probable su aprovechamiento)**:
        ```
        XXX (4745) Crédito por pérdidas a compensar del ejercicio
                a (6301) Impuesto diferido XXX
        ```
    * **Reversión del crédito fiscal (al compensar las pérdidas con beneficios futuros)**:
        ```
        XXX (6301) Impuesto diferido
                a (4745) Crédito por pérdidas a compensar del ejercicio XXX
        ```

# Estados Financieros

## Los estados financieros en el PGC

### Definición, objetivo y tipología

Los estados financieros constituyen una representación estructurada de la **situación financiera** y del **rendimiento financiero** de una entidad.

EL objetivo es **proporcionar** a los distintos usuarios información sobre la situación financiera para que sea *útil para la toma de decisiones*.

Como venimos viendo en las asignaturas anteriores de Contabilidad, este tema se enfoca en la información útil para la toma de decisiones.

La legislación mercantil obliga a las empresas a elaborar un conjunto de estados financieros denominados **cuentas anuales**. Sabemos que el *Marco conceptula* posee los cinco documentos que las integran.

### Normas para la elaboración de las cuentas anuales y formatos de presentación


| **NECA (PGC)** | **NECA (PGC Pymes)** |
|-----------------|----------------------|
| 1. Documentos que integran las CCAA | 1. Documentos que integran las CCAA |
| 2. Formulación de las CCAA          | 2. Formulación de las CCAA          |
| 3. Estructura de las CCAA           | 3. Estructura de las CCAA           |
| 4. Cuentas anuales abreviadas       | 4. Normas comunes al balance, la cuenta de pérdidas y ganancias y el estado de cambios en el patrimonio neto |
| 5. Normas comunes al balance, la cuenta de pérdidas y ganancias, el estado de cambios en el patrimonio neto y el estado de flujos de efectivo | 5. Balance |
| 6. Balance                          | 6. Cuenta de pérdidas y ganancias   |
| 7. Cuentas de pérdidas y ganancias  | 7. Estado de cambios en el patrimonio neto |
| 8. Estado de cambios en el patrimonio neto | 8. Memoria                          |
| 9. Estado de flujos de efectivo     | 9. Número medio de trabajadores     |
| 10. Memoria                         | 10. Empresas del grupo, multigrupo y asociadas |
| 11. Cifra anual de negocios         | 11. Estados financieros intermedios |
| 12. Número medio de trabajadores    | 12. Partes vinculadas               |
| 13. Empresas del grupo, multigrupo y asociadas |                                  |
| 14. Estados financieros intermedios |                                      |
| 15. Partes vinculadas               |                                      |


### Diferencias entre el PGC Régimen General y el PGC Pymes

| **NECA (PGC Régimen General)**                          | **NECA (PGC Pymes)**                                                                 |
|---------------------------------------------------------|-------------------------------------------------------------------------------------|
| Balance (normal y abreviado)                            | Balance                                                                            |
| Cuenta de pérdidas y ganancias (normal y abreviada)     | Cuenta de pérdidas y ganancias                                                    |
| Memoria (normal y abreviada)                            | Memoria                                                                            |
| Estado de Cambios en el Patrimonio Neto                 | Estado de Cambios en el Patrimonio Neto (optativo)                                 |
| Estado de Flujos de efectivo                            | El Estado de Flujos de efectivo es optativo, se seguirá, en su caso, el formato establecido en el PGC |

Vemos que se hace distinción repecto de las Pymes. Esto se debe a que ciertas partes de su PGC varían y son optativas, como es el caso de *formular el estado de flujos de efectivo*.

### Documentos que integran las cuentas anuales

Como hemos estudiado en asignaturas anteriores estas son:
1. Balance
2. Cuenta de Pérdidas y Ganancias.
3. Estado de cambios en el PN.
4. Estado de flujos de efectivo.
5. Memoria.

Cada documento que conformas las cuentas anuales se ha de redactar de conformidad con lo previsto en la legislación mercantil.

### Formulación de las cuentas anuales

<!-- En este punto vamos a tratar: periodicidad, responsabilidad, fecha y firma, identificabilidad y valores que se han de expresar en las CCAA. -->

* Periodicidad, responsabilidad,fecha y firma, identificabilidad y valores.
  * Periodicidad: las cuentas anuales, por norma general, se han de elaborar con una periodicidad de doce meses, salvo en determinados casos.
  * Responsabilidad: éstas deben de ser formuladas por el *empresario o administradores*, quienes **responderán de su veracidad**.
  * Fecha y firma: deben de ser firmadas por el empresario y en ellas debe de aparecer la fecha.
    * **Plazos para la formulación, aprobación y depósito de las cuentas anuales**:
        * **Formulación**: Las cuentas anuales deben ser formuladas por los administradores de la empresa en un plazo máximo de tres meses desde el cierre del ejercicio social.
        * **Aprobación**: Una vez formuladas, las cuentas anuales deben ser aprobadas por la junta general de socios o accionistas en un plazo máximo de seis meses desde el cierre del ejercicio social.
        * **Depósito**: Tras su aprobación, las cuentas anuales deben ser depositadas en el Registro Mercantil correspondiente en el plazo de un mes desde la fecha de su aprobación.

    Estos plazos son esenciales para garantizar el cumplimiento de las obligaciones legales y la transparencia en la información financiera de las empresas.
  * Identificabilidad: todas las cuentas deben de estar identificadas de forma *clara* aportando la información necesaria en cada una.
  * Valores: Se elaborarán siguiendo sus valores expresados en euros.
  <!-- https://www.supercontable.com/boletin/F/img/IMG_plazos_cuentas_anuales.jpg -->
* Obligación de auditar las cuentas anuales y excepción por razón de tamaño.
  Las cuentas han de ser revisadas por un **auditor de cuentas**.
  * Excepción por tamaño a la obligación de auditar las cuentas anuales

    | **Criterios para la excepción**                | **Límite**          |
    |-----------------------------------------------|---------------------|
    | Total Activos                                  | $\leq$ 2.850.000 €       |
    | Cifra de Negocios                              | $\leq$ 5.700.000 €       |
    | Número medio de trabajadores                   | $\leq$ 50                |


### Estructura de las cuentas anuales y formatos para su presentación

Se consideran dos formatos:

- Régimen General del PGC

* **Formato Normal:**
    * Es el modelo general que deben utilizar las sociedades anónimas, limitadas, en comandita por acciones, sociedades colectivas, comanditarias simples y cooperativas.
    * Las entidades de interés público siempre deben utilizar el formato normal.
    * Incluye modelos para el Balance, Cuenta de Pérdidas y Ganancias, Memoria, Estado de Cambios en el Patrimonio Neto y Estado de Flujos de Efectivo.

* **Formato Abreviado:**
    * Es la obligación mínima para empresarios individuales y empresas con otras formas societarias no mencionadas para el formato normal.
    * Una sociedad mercantil que generalmente usaría el formato normal puede optar por el abreviado si durante dos ejercicios consecutivos no supera dos de los siguientes límites:
        * **Para Balance y Memoria abreviados**:
            * Total de activo: 4.000.000 €.
            * Importe neto de la cifra anual de negocio: 8.000.000 €.
            * Número medio de trabajadores: 50.
        * **Para Cuenta de Pérdidas y Ganancias abreviada**:
            * Total de activo: 11.400.000 €.
            * Importe neto de la cifra anual de negocio: 22.800.000 €.
            * Número medio de trabajadores: 250.
    * En el primer ejercicio desde su constitución, transformación o fusión, las sociedades pueden formular cuentas anuales abreviadas si al cierre de ese primer ejercicio no superan dos de los límites mencionados.
    * Se pierde la posibilidad de usar formatos abreviados si durante dos ejercicios consecutivos se superan dos de los límites.
    * Si se puede formular balance y memoria abreviados, el Estado de Cambios en el Patrimonio Neto y el Estado de Flujos de Efectivo no son obligatorios.

- PGC para PYMES

* **Formato para PYMES:**
    * Las PYMES pueden presentar las cuentas anuales siguiendo el formato establecido en el PGC para PYMES, que es similar al modelo abreviado del régimen general, con ciertas diferencias en criterios de valoración y formulación.
    * Una empresa puede acogerse al PGC para PYMES si durante dos ejercicios consecutivos, a fecha de cierre de cada uno, no supera dos de los tres límites siguientes:
        * Total de activo: 4.000.000 €.
        * Importe neto de la cifra anual de negocios: 8.000.000 €.
        * Número medio de trabajadores: 50.
    * Se pierde la facultad de aplicar el PGC para PYMES si durante dos ejercicios consecutivos se superan dos de los límites anteriores.
    * El PGC para PYMES incluye un único formato para el Balance, la Cuenta de Pérdidas y Ganancias, la Memoria y el Estado de Cambios en el Patrimonio Neto (este último es optativo).
    * El Estado de Flujos de Efectivo es optativo para las PYMES; si deciden formularlo, deben usar el formato del PGC general.
    * No pueden aplicar el PGC de PYMES:
        * Entidades de interés público.
        * Empresas que forman parte de un grupo obligado a formular cuentas anuales consolidadas.
        * Empresas cuya moneda funcional sea distinta del euro.
        * Entidades financieras que captan fondos del público y las que asuman la gestión de las anteriores.
    * Las PYMES que opten por aplicar la versión específica para PYMES deben mantener esta opción de forma continuada al menos durante tres años, salvo que superen los límites.

### Normas Comunes al Balance, Cuenta de Pérdidas y Ganancias, Estado de Cambios en el Patrimonio Neto y Estado de Flujos de Efectivo

* **Comparabilidad de Cifras**: En cada partida deben figurar las cifras del ejercicio actual (n) y las del ejercicio anterior (n-1). Si no son comparables (por cambios en estructura, criterio contable o corrección de error), se debe adaptar el ejercicio precedente y explicarlo en la memoria.
* **Partidas sin Importe**: No se incluirán partidas sin importe en el ejercicio actual ni en el precedente.
* **Uniformidad de Criterios**: Los criterios de contabilización no deben modificarse de un ejercicio a otro, salvo casos excepcionales que se justificarán en la memoria.
* **Flexibilidad en Partidas**:
    * Se pueden añadir nuevas partidas a las previstas.
    * Se puede realizar una subdivisión más detallada de las partidas existentes.
    * Se pueden agrupar partidas (precedidas de números árabes en balance y estado de cambios en el patrimonio neto, o letras en la cuenta de pérdidas y ganancias y estado de flujos de efectivo) si su importe es irrelevante para la imagen fiel o si favorece la claridad.
* **Referencias Cruzadas**: Cada partida, cuando proceda, tendrá una referencia cruzada a la información correspondiente en la memoria.
* **Empresas del Grupo y Asociadas**: Los créditos, deudas, ingresos y gastos con empresas del grupo y asociadas figurarán en las partidas correspondientes, pero separadas del resto.
* **Negocios Conjuntos sin Personalidad Jurídica**: Las empresas que participen en negocios conjuntos (como UTEs, comunidades de bienes, etc.) deben presentar esta información según la norma de registro y valoración relativa a negocios conjuntos.

### Balance de Situación

El Balance de Situación es el estado contable que refleja los recursos económicos (Activo) y financieros (Pasivo y Patrimonio Neto) de la empresa en un momento dado. Su objetivo es mostrar la situación financiera de la entidad.

* **Estructura y Clasificación**:
    * Las partidas se clasifican en **corrientes** (vinculadas al ciclo normal de explotación, generalmente inferior a un año, o mantenidas para negociar) y **no corrientes** (el resto, con permanencia superior a un año). Esto aplica tanto al Activo como al Pasivo.
    * Los activos y pasivos financieros pueden presentarse por su importe neto si existe el derecho exigible de compensarlos y la intención de liquidarlos por el neto.
    * Las correcciones valorativas por deterioro y las amortizaciones acumuladas minoran la partida del activo correspondiente, presentándose los activos por su valor neto contable.
* **Partidas Específicas Destacadas**:
    * **Inversiones Inmobiliarias**: Terrenos o construcciones destinados a obtener rentas o plusvalías fuera del curso ordinario de las operaciones.
    * **Capital Social y Prima de Emisión**: Deben figurar en el patrimonio neto si la inscripción en el Registro Mercantil es anterior a la formulación de las cuentas; de lo contrario, irán a deudas a corto plazo.
    * **Instrumentos de Patrimonio Propios**: Se registran en el Patrimonio Neto, generalmente con signo negativo.
    * **Subvenciones, Donaciones y Legados no Reintegrables**: Las otorgadas por terceros distintos a socios forman parte del patrimonio neto en una sub-agrupación específica; las otorgadas por socios se incluyen en fondos propios.
    * **Activos no Corrientes Mantenidos para la Venta y Pasivos Vinculados**: Se presentan de forma separada en el activo y pasivo, respectivamente, y no se compensan.

### Cuenta de Pérdidas y Ganancias

La Cuenta de Pérdidas y Ganancias (o Cuenta de Resultados) muestra el total de ingresos y gastos reconocidos por la empresa durante un ejercicio económico, con el fin de determinar el resultado del periodo (beneficio o pérdida), excepto aquellos que se imputen directamente al patrimonio neto.

* **Estructura por Resultados Parciales**:
    * **Resultado de Explotación**: Diferencia entre ingresos y gastos de las actividades ordinarias y no financieras.
    * **Resultado Financiero**: Diferencia entre ingresos y gastos derivados de instrumentos financieros.
    * **Resultado antes de Impuestos**: Suma de los dos anteriores.
    * **Resultado del Ejercicio Procedente de Operaciones Continuadas**: Resultado antes de impuestos menos el impuesto sobre beneficios.
    * **Resultado del Ejercicio Procedente de Operaciones Interrumpidas**: Resultado (neto de impuestos) de componentes de la empresa que se han enajenado o clasificado como mantenidos para la venta y representan una línea de negocio o área geográfica principal.
    * **Resultado del Ejercicio**: Suma del resultado de operaciones continuadas e interrumpidas; esta cifra se refleja en el patrimonio neto.
* **Principios de Formulación Clave**:
    * Los ingresos y gastos se clasifican según su **naturaleza**.
    * Ventas, prestaciones de servicios y otros ingresos de explotación se reflejan por su **importe neto** de devoluciones y descuentos.
    * Las **subvenciones** se imputan a resultados según su finalidad (explotación, financiación de activos no financieros, o de carácter financiero).
    * Los **excesos de provisiones** (reversiones) se recogen en una partida específica, con excepciones para las de personal y operaciones comerciales.
    * Ingresos o gastos de **carácter excepcional y cuantía significativa** (ej. inundaciones, multas) se pueden agrupar en "Otros resultados" dentro del resultado de explotación.

### La Memoria

La Memoria es un documento que completa, amplía y comenta la información contenida en los otros estados financieros que integran las cuentas anuales. Su principal función es aportar información, en su mayoría cualitativa, para facilitar la comprensión de la situación patrimonial, financiera y los resultados de la empresa.

* **Objetivo**: Aclarar y detallar la información sintética de los otros estados para que las cuentas anuales reflejen la imagen fiel de la empresa.
* **Contenido**:
    * Incluye información mínima a cumplimentar; los apartados no significativos pueden omitirse.
    * Debe incluir cualquier otra información relevante no solicitada explícitamente si es necesaria para la imagen fiel, incluyendo datos cualitativos del ejercicio anterior si son significativos.
    * Incorpora información que otras normativas exijan incluir.
    * La información cuantitativa se refiere al ejercicio actual y al anterior (comparativo), salvo que una norma contable indique lo contrario.
    * Un ejemplo de información específica es el período medio de pago a proveedores para empresas que elaboren la memoria en modelo normal.

## Estado de Flujos de Efectivo (EFE)

El Estado de Flujos de Efectivo informa sobre el origen y la utilización de los activos monetarios representativos de efectivo y otros activos líquidos equivalentes, clasificando los movimientos por actividades e indicando la variación neta de dicha magnitud en el ejercicio.

* **Concepto y Características**:
    * **Objetivo**: Mostrar los cobros y pagos realizados por la empresa para explicar la variación de la tesorería.
    * **Efectivo y equivalentes**: Incluye la tesorería en caja y bancos a la vista, instrumentos financieros convertibles en efectivo con vencimiento no superior a tres meses desde su adquisición (sin riesgo significativo de cambio de valor y parte de la gestión normal de tesorería), y en algunos casos, descubiertos bancarios ocasionales.
    * **Características**: Proporciona magnitudes objetivas (cobros y pagos), informa sobre las causas de las variaciones de tesorería, aumenta la transparencia para la toma de decisiones y es de fácil comprensión.

* **Clasificación de los Flujos de Efectivo**:
    * **Actividades de Explotación**: Principalmente los ocasionados por las actividades que constituyen la principal fuente de ingresos de la empresa y otras no calificables como inversión o financiación. Incluye pagos de intereses, cobros de intereses y dividendos, y el pago del impuesto de beneficios.
    * **Actividades de Inversión**: Pagos por adquisición de activos no corrientes (intangibles, materiales, inversiones inmobiliarias, financieras) y otros activos no equivalentes, así como los cobros por su enajenación o amortización.
    * **Actividades de Financiación**: Cobros de la emisión de títulos o recursos de terceros (préstamos) y los pagos por su amortización o devolución. También incluye los pagos de dividendos a los accionistas.

* **Metodología de Cálculo**:
    * **Flujos de Explotación**: El PGC utiliza un método mixto.
        * Se parte del "Resultado del ejercicio antes de impuestos".
        * Se realizan "Ajustes del resultado" para eliminar partidas que no suponen movimiento de efectivo (ej. amortizaciones, deterioros, resultados por bajas de inmovilizado, ingresos y gastos financieros que se tratarán por separado) y partidas cuyos flujos se clasifican como de inversión o financiación.
        * Se consideran los "Cambios en el capital corriente" (variaciones en existencias, deudores, acreedores, etc.).
        * Finalmente, se incorporan de forma directa otros flujos como pagos de intereses, cobros de dividendos e intereses, y cobros/pagos por impuesto sobre beneficios.
    * **Flujos de Inversión y Financiación**: Se utiliza el método directo, presentando los cobros y pagos brutos asociados a estas actividades.
        * **Inversión**: Pagos por adquisiciones y cobros por desinversiones de activos no corrientes.
        * **Financiación**: Cobros por emisión de instrumentos de patrimonio o pasivo financiero, y pagos por su amortización o por dividendos.

* **Consideraciones Adicionales**:
    * Los flujos de activos y pasivos financieros de alta rotación (plazo entre adquisición y vencimiento no superior a seis meses) pueden presentarse netos.
    * Las transacciones en moneda extranjera se convierten al tipo de cambio de la fecha del flujo o una media ponderada.
    * Se debe informar sobre saldos significativos de efectivo no disponibles para ser utilizados.

* **Utilidad**:
    * Evalúa la capacidad de la empresa para generar flujos de efectivo.
    * Permite analizar la política de dividendos y la capacidad para atender deudas.
    * Ayuda a comprender la relación entre el resultado contable y los movimientos reales de tesorería.
    * Facilita la proyección de futuros flujos de efectivo.

## Estado de Cambios en el Patrimonio Neto (ECPN)

El Estado de Cambios en el Patrimonio Neto tiene como objetivo mostrar las variaciones ocurridas en el patrimonio de la empresa durante el ejercicio. Es fundamental para que los accionistas y otros interesados puedan evaluar la evolución de la riqueza de la empresa.

Este estado se compone de dos partes principales:

1.  **Estado de Ingresos y Gastos Reconocidos (EIGR)**:
    * Recoge los cambios en el patrimonio neto derivados de:
        * El **resultado del ejercicio** obtenido de la Cuenta de Pérdidas y Ganancias.
        * Los **ingresos y gastos** que, según las normas de registro y valoración, deben imputarse **directamente al patrimonio neto** (por ejemplo, ciertas valoraciones de instrumentos financieros, coberturas de flujos de efectivo, subvenciones de capital recibidas, diferencias de conversión, y el efecto impositivo de estas partidas).
        * Las **transferencias realizadas a la Cuenta de Pérdidas y Ganancias** de partidas que previamente se habían reconocido en el patrimonio neto (por ejemplo, cuando se realiza un activo financiero valorado con cambios en el patrimonio neto, o la imputación de subvenciones).

2.  **Estado Total de Cambios en el Patrimonio Neto (ETCPN)**:
    * Informa de **todos los cambios** habidos en el patrimonio neto, detallando:
        * El **saldo total de los ingresos y gastos reconocidos** (que es el resultado final del EIGR).
        * Las **variaciones originadas por operaciones con los socios o propietarios** cuando actúen como tales (ej. ampliaciones o reducciones de capital, distribución de dividendos, operaciones con acciones propias).
        * Las **restantes variaciones** que se produzcan en el patrimonio neto (ej. traspaso del resultado del ejercicio a reservas, aplicación de resultados de ejercicios anteriores).
        * Los **ajustes al patrimonio neto debidos a cambios en criterios contables y correcciones de errores** de ejercicios anteriores. Estos ajustes se presentan modificando los saldos iniciales del patrimonio del ejercicio más antiguo presentado a efectos comparativos.

* **Funciones y Utilidad**:
    * Permite a los accionistas conocer cómo ha variado su inversión y la política de la empresa respecto a dividendos y autofinanciación.
    * Informa sobre los efectos de cambios en políticas contables o correcciones de errores.
    * Detalla las modificaciones en el valor de activos que afectan directamente al patrimonio.
    * Muestra las pérdidas y beneficios no realizados (por ejemplo, por ajustes a valor razonable de ciertos instrumentos financieros o por operaciones de cobertura).
    * Sirve de base para que otros interesados (acreedores, empleados, Administración) evalúen la solvencia y garantía que ofrece el patrimonio de la empresa.
    * Ayuda a analizar el excedente generado por la empresa, distinguiendo entre el realizado y el no realizado.