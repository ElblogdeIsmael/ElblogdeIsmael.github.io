---
title: "Análisis de Operaciones Financieras"
subtitle: "Temario y Ejercicios"
author: "Ismael Sallami Moreno"
date: "Mayo de 2025"
lang: es

# Opciones específicas de la plantilla Eisvogel para la portada
titlepage: true
titlepage-logo: "../images/logo-universidad.jpg" # COLOCA TU LOGO AQUÍ (ej. logo-mi-uni.png)
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
# toc-own-page: true             # Descomenta si quieres la tabla de contenido en su propia página (recomendado por Eisvogel)
numbersections: true
book: true                       # Para un estilo más de "libro" con Eisvogel (afecta títulos de capítulo, etc.)

# Encabezados y pies de página (Eisvogel los gestiona bien)
# header-left: "\\small{Contabilidad}" # Puedes personalizar el contenido del encabezado
# header-right: "\\small{Ejercicios Tema 6}"
# footer-center: "\\small{\\thepage}" # Número de página centrado y pequeño

# IMPORTANTE: Elimina cualquier `header-includes` complejo que tuvieras antes para la portada.
# Dejamos que Eisvogel maneje la creación de la portada con las variables de arriba.
---
  
# Operaciones a plazo y mercado de futuros

## Arbitraje y derivado

Derivado: instrumento cuyo valor depende del otro activo, el cual, se denomina activo subyacente (acciones, tipo interés, tipos de cambio, materias primas).
**Operación a plazo:** Acuerdo por el que hoy (t = 0) se pactan las condiciones (precio pactado a plazo y vencimiento) para la compra o venta de un determinado activo (el subyacente), liquidándose el acuerdo en el vencimiento pactado (t = n). En t = 0, comprador y vendedor no intercambian ninguna cantidad. El precio a plazo, fijado en t = 0, debe representar el "precio correcto" para ambas partes.

En este tipo de operaciones existe cierto riesgo debido a que si una de las partes no desempeña su función o incumpla la obligación específica, este riesgo se conoce como **riesgo de contrapartida o de insolvencia**. *Con el fin de eliminar este riesgo de contrapartida, entre otros, surgen los mercados organizados*.

$$
\text{Precio teórico a plazo} = P_{\text{contado}} \left( 1 + \frac{i \times t}{360} \right) + \text{Gastos mantenimiento} \left( 1 + \frac{i' \times t'}{360} \right) 
$$
$$
- \text{Ingresos generados activo subyacente} \left( 1 + \frac{i'' \times t''}{360} \right)
$$

Se dice que existe una **Oportunidad de arbitraje** cuando se puede construir una cartera verificando las siguientes propiedades:
1. El valor inicial de la cartera es nulo.
2. Al vencimiento, el valor de la cartera es mayor o igual a cero independientemente de cómo varíen los precios en el mercado.
3. Existe una posibilidad real (probabilidad positiva) de que el valor de la cartera al vencimiento sea estrictamente mayor a cero.
$$
P_{\text{plazo (n)}} = P_{\text{contado}} + \text{Coste Neto de la Financiación (n)}
$$

Podemos definir más informalmente un arbitraje como una estrategia financiera que aprovechará la diferencia de precios entre diferentes mercados sobre un mismo activo, para obtener un beneficio económico.

<!-- En cuanto al *arbitraje*, se pueden distinguir:
- Si el precio a plazo $>$ precio al contado: **venta a plazo**, comprando la letra al contado con un préstamo.
- Si el precio a plazo $<$ precio al contado: **venta al contado de la letra (hoy)** y compra a plazo de 30 días de la letra. -->

La estrategia para realizar estos ejercicios se basa en calcular el precio teórico a plazo, que básicamente es el precio al contado más los intereses generados. Si lo denotamos como P, nos queda:
- Si P $<$ precio del mercado en el futuro: venta a plazo y compro al contado con un préstamo.
- Si es al contrario, compra a plazo y venta al contado (*funciona como una inversión, por ende, me genera ingresos*).

## Ejercicio 109: Libro de Menéndez Alonso

### Enunciado

Las acciones de una determinada sociedad cotizan a 19 €. El precio del contrato a plazo sobre dichas acciones con vencimiento a 6 meses es de 22 €. El tipo de interés anual libre de riesgo es del 5%. Se estima que este título no generará ningún dividendo durante la vigencia del contrato a plazo. Suponga capitalización compuesta continua.

a) ¿Cómo podría un inversor beneficiarse de esta situación? ¿Cómo se denomina esta estrategia?  
b) Responda a la pregunta anterior si el precio a plazo fuese de 18 €.  
c) ¿A qué precio debe negociarse el contrato a plazo para que no tengan sentido las anteriores operaciones? Razona la respuesta.

### Resolución

a) Estrategia de arbitraje con precio a plazo de 22 €

1. **En el momento inicial (t = 0):**
    - El inversor pide prestado el precio de mercado actual de la acción (19 €) a 6 meses al tipo de interés libre de riesgo del 5%.
    - Compra las acciones al precio de mercado (19 €).
    - Adopta una posición corta en el contrato a plazo a 6 meses.

2. **Al vencimiento del contrato (t = 6 meses):**
    - Ejerce el contrato a plazo, vendiendo la acción a 22.
        - Devuelve el préstamo de 19 € al $5\%$ anual, es decir, paga:
          $$
          19 \times e^{0.05 \times 0.5} \approx 19.48 \, \text{€}
          $$
        - Beneficio obtenido:
          $$
          22 - 19.48 = 2.52 \, \text{€}
          $$

        b) Estrategia de arbitraje con precio a plazo de 18 €

        1. **En el momento inicial (t = 0):**
            - El inversor vende al descubierto la acción, obteniendo 19 €.
            - Invierte los 19 € obtenidos al tipo de interés libre de riesgo del 5% anual.
            - Adopta una posición larga en el contrato a plazo a 6 meses.

        2. **Al vencimiento del contrato (t = 6 meses):**
            - Ejerce el contrato a plazo, comprando la acción a 18 €.
            - Devuelve la acción prestada.
            - Recupera la inversión inicial con intereses:
              $$
              19 \times e^{0.05 \times 0.5} \approx 19.48 \, \text{€}
              $$
            - Beneficio obtenido:
              $$
              19.48 - 18 = 1.48 \, \text{€}
              $$

        c) Precio de equilibrio del contrato a plazo

        Para que no existan oportunidades de arbitraje, el precio a plazo debe cumplir la siguiente relación:

        $$
        F = S \times e^{rT}
        $$

        Donde:
        - \( S = 19 \, \text{€} \) (precio al contado),
        - \( r = 0.05 \) (tipo de interés anual),
        - \( T = 0.5 \) (tiempo en años).

        Sustituyendo los valores:

        $$
        F = 19 \times e^{0.05 \times 0.5} \approx 19.48 \, \text{€}
        $$

        Por lo tanto, el precio a plazo debe ser de aproximadamente 19.48 € para evitar arbitraje.


## Ejercicio 110: Libro de Menéndez Alonso

### Enunciado

El precio de contado de una acción es de 20 €. El contrato a plazo con vencimiento a 6 meses sobre dicha acción tiene un precio de ejercicio de 22 €. Se estima que el título devengará un dividendo de 1 € inmediatamente antes del vencimiento del contrato a plazo. El tipo de interés anual libre de riesgo es del 4% anual.

a) ¿Qué estrategia podría adoptar un inversor que pretenda beneficiarse de las condiciones actuales del mercado de contado y del mercado a plazo?  
b) ¿Y si el precio a plazo fuese de 17,50 €?  
c) ¿Sería posible obtener un beneficio si el precio del contrato a plazo fuese de 19,40 €? Razone la respuesta.

**Aplique capitalización compuesta continua en la resolución del ejercicio.**

### Resolución

a) Estrategia de arbitraje con precio a plazo de 22 €

1. **En el momento inicial (t = 0):**
    - El inversor pide prestado el precio de mercado actual de la acción (20 €) a 6 meses al tipo de interés libre de riesgo del 4%.
    - Compra las acciones al precio de mercado (20 €).
    - Adopta una posición corta en el contrato a plazo a 6 meses.

2. **Al vencimiento del contrato (t = 6 meses):**
    - Devuelve el préstamo de 20 € al 4% anual, es decir, paga:
      $$
      20 \times e^{0.04 \times 0.5} \approx 20.40 \, \text{€}
      $$
    - Percibe el dividendo de 1 €.
    - Ejerce el contrato a plazo, vendiendo la acción a 22 €.
    - Beneficio obtenido:
      $$
      22 + 1 - 20.40 = 2.60 \, \text{€}
      $$

b) Estrategia de arbitraje con precio a plazo de 17,50 €

1. **En el momento inicial (t = 0):**
    - Recurre al préstamo de valores, y vende al descubierto la acción a 20 €.
    - Adopta una posición larga en el contrato a plazo, para atender a la entrega de la acción a los 6 meses.
    - Invierte el resultado de la venta al descubierto al 4% anual continuo.

2. **Al vencimiento del contrato a plazo:**
    - Ejerce el contrato a plazo, paga 17,50 € por la acción.
    - Recupera la inversión realizada a 6 meses, por la que recibe:
        $$
        20 \times e^{0.04 \times 0.5} \approx 20.40 \, \text{€}
        $$
    - Devuelve el préstamo de valores, y el dividendo generado por la acción durante el periodo de préstamo, esto es, 1 €.

    Beneficio obtenido:
    $$
    20.40 - 17.50 - 1 = 1.90 \, \text{€}
    $$

c) Precio de equilibrio del contrato a plazo

Si el precio del contrato a plazo es de 19,40 €, el inversor puede adoptar la siguiente estrategia:

1. **En el momento inicial (t = 0):**
    - Recurre al préstamo de valores y vende al descubierto la acción a 20 €.
    - Invierte el resultado de la venta al descubierto al 4% anual continuo.
    - Adopta una posición larga en el contrato a plazo, para atender a la entrega de la acción a los 6 meses.

2. **Al vencimiento del contrato a plazo (t = 6 meses):**
    - Ejerce el contrato a plazo, paga 19,40 € por la acción.
    - Devuelve el préstamo de valores y reintegra el importe del dividendo al intermediario que le prestó el valor, abonando 1 €.
    - Recupera la inversión realizada a 6 meses, por la que percibe:
        $$
        20 \times e^{0.04 \times 0.5} \approx 20.40 \, \text{€}
        $$

    Resultado de la estrategia:
    $$
    20.40 - 1 - 19.40 = 0
    $$

Por lo tanto, si el precio del contrato a plazo es de 19,40 €, no es posible realizar operaciones rentables de arbitraje, ya que existe una situación de equilibrio entre el precio de contado y el precio a plazo del activo financiero.

## Tipos de futuros y posiciones básicas

Un **futuro** es un contrato a plazo estandarizado negociado en un mercado organizado, donde las partes acuerdan la compraventa de un activo subyacente (como instrumentos financieros o commodities) en una fecha futura a un precio previamente establecido.

#### Liquidación al vencimiento
1. **Por entrega:** El comprador recibe el activo subyacente y el vendedor el importe acordado.
2. **Por diferencias:** Se intercambian las ganancias o pérdidas generadas. La mayoría de los contratos se liquidan de esta forma.

Fórmulas de liquidación:
- Comprador: \( F_n - F_0 \)
- Vendedor: \( F_0 - F_n \)

#### Antes del vencimiento
Los contratos pueden anularse realizando una operación de signo contrario:
- Comprador: \( F_t - F_0 \)


El **principio de convergencia** establece que, al vencimiento de un contrato de futuros, el precio del activo subyacente al contado (\( S_n \)) y el precio del futuro (\( F_n \)) deben coincidir. Esto se debe a que cualquier diferencia entre ambos precios generaría oportunidades de arbitraje. En los mercados de futuros, la diferencia entre el precio del futuro y el precio al contado se denomina **BASE**, la cual tiende a cero al acercarse el vencimiento (\( \text{BASE}_n = 0 \)).

Si \( F_n < S_n \), un arbitrajista podría comprar futuros y vender el activo al contado, obteniendo un beneficio sin riesgo. Si \( F_n > S_n \), la estrategia sería inversa: vender futuros y comprar el activo al contado.

## Tipos de futuros

Los futuros financieros se clasifican en las siguientes categorías principales:

1. **Futuros sobre mercancías o commodities**: Incluyen materias primas, metales preciosos, productos agrícolas, mercancías diversas y energía (como petróleo o electricidad).
2. **Futuros sobre acciones**: Contratos basados en valores de empresas específicas.
3. **Futuros sobre índices bursátiles**: Basados en el rendimiento de índices de mercado.
4. **Futuros sobre divisas**: Relacionados con tipos de cambio entre monedas.
5. **Futuros sobre tipos de interés**: Pueden ser a largo plazo (l/p) o corto plazo (c/p).

Otros tipos de futuros incluyen aquellos relacionados con el clima, como temperaturas o huracanes.

## Posiciones Básicas

- COMPRA DE FUTUROS: se obtienen ganacias si los precios suben (posición larga)..
- VENTA DE FUTUROS: se obtienen ganancias si los precios bajan (posición corta).


### Contratos de Futuros sobre Índices

| Contrato                    | Mercado  | Multiplicador | Tick mínimo |
| --------------------------- | -------- | ------------- | ----------- |
| **IBEX 35**                 | MEFF     | 10 €          | 1 punto     |
| **Mini IBEX 35**            | MEFF     | 1 €           | 5 puntos    |
| **Micro IBEX 35**           | MEFF     | 0,1 €         | 1 punto     |
| **EuroStoxx 50**            | EUREX    | 10 €          | 1 punto     |
| **DAX 40**                  | EUREX    | 25 €          | 0,5 puntos  |
| **Mini DAX 40**             | EUREX    | 5 €           | 1 punto     |
| **CAC 40**                  | Euronext | 10 €          | 0,5 puntos  |
| **AEX (Países Bajos)**      | Euronext | 200 €         | 0,05 puntos |
| **FTSE MIB (Italia)**       | IDEM     | 5 €           | 5 puntos    |
| **Mini FTSE MIB**           | IDEM     | 1 €           | 5 puntos    |
| **E-mini S\&P 500**         | CME      | 50 \$         | 0,25 puntos |
| **E-mini NASDAQ-100**       | CME      | 20 \$         | 0,25 puntos |
| **E-mini Dow Jones (DJIA)** | CBOT     | 5 \$          | 1 punto     |


## Tipos de operaciones: Cobertura y Especulación

### Cobertura

La cobertura se utiliza para mitigar el riesgo de variaciones en los precios. Consiste en tomar una posición en el mercado de futuros que compense las pérdidas potenciales en el mercado de contado.

#### Cobertura Larga
- **Intención:** Comprar un activo en el futuro (posición corta en contado).
- **Riesgo:** Subida de precios.
- **Estrategia:** Compra de contratos de futuros (posición larga en futuros).
- **Resultado:** Ganancia si el precio futuro (\( C_n \)) es mayor al precio inicial (\( F_0 \)).

#### Cobertura Corta
- **Intención:** Vender un activo en el futuro (posición larga en contado).
- **Riesgo:** Bajada de precios.
- **Estrategia:** Venta de contratos de futuros (posición corta en futuros).
- **Resultado:** Ganancia si el precio futuro (\( C_n \)) es menor al precio inicial (\( F_0 \)).

### Requisitos de una Cobertura Perfecta

Para que una cobertura sea considerada perfecta, debe cumplir con los siguientes requisitos:

1. **Correlación Perfecta:** El precio del activo subyacente en el mercado de contado y el precio del contrato de futuros deben estar perfectamente correlacionados. Esto asegura que las variaciones en ambos mercados se compensen de manera exacta.

2. **Tamaño de la Posición:** El tamaño de la posición en el mercado de futuros debe coincidir exactamente con el tamaño de la exposición en el mercado de contado. Esto implica que no debe haber exceso ni déficit en la cobertura.

3. **Vencimiento Coincidente:** La fecha de vencimiento del contrato de futuros debe coincidir con el momento en que se materializa la exposición en el mercado de contado. Esto elimina el riesgo de desajustes temporales entre ambos mercados.

### Operaciones de Especulación

Los especuladores buscan obtener ganancias aprovechando las diferencias de precios en los mercados, sin interés en el activo subyacente. Existen dos tipos principales de posiciones:

- **Posición Larga (Alcista):** Se espera que los precios suban.
- **Posición Corta (Bajista):** Se espera que los precios bajen.

La especulación se basa en analizar tendencias del mercado para anticiparse a los movimientos de precios y obtener beneficios. 


# Opciones
## Contratos de Futuros y Contratos de Opciones

Los contratos de futuros permiten fijar hoy el precio de un activo para comprarlo o venderlo en el futuro, pero las pérdidas pueden ser ilimitadas. Los diagramas de resultados son:

- **Compra de futuros (largo):** Ganancias si el precio futuro (\( S_n \)) supera el precio pactado (\( F_0 \)).
- **Venta de futuros (corto):** Ganancias si el precio futuro (\( S_n \)) es menor al precio pactado (\( F_0 \)).

Para limitar las pérdidas, surgen los **contratos de opciones**, que permiten fijar el precio de un activo con resultados limitados:

- **Opción de compra (CALL):** Ganancias si el precio futuro (\( S_T \)) supera el precio de ejercicio (\( K \)).
- **Opción de venta (PUT):** Ganancias si el precio futuro (\( S_T \)) es menor al precio de ejercicio (\( K \)).

## Diferencias entre CALL y PUT

| Tipo de Contrato | Derecho del Comprador | Obligación del Comprador | Derecho del Vendedor | Obligación del Vendedor |
|------------------|-----------------------|--------------------------|----------------------|--------------------------|
| **CALL**         | Comprar el activo     | Pagar prima              | Recibir prima        | Vender el activo         |
| **PUT**          | Vender el activo      | Pagar prima              | Recibir prima        | Comprar el activo        |

## Contrato de Opción

Un contrato de opción otorga al comprador el **derecho**, pero no la obligación, de **comprar o vender** un activo subyacente (\( S \)) a un precio de ejercicio (\( K \)) en una fecha de vencimiento (\( T \)).

### Roles en el contrato:
- **Comprador:** Tiene el derecho de comprar o vender al vencimiento.
- **Vendedor:** Está obligado a cumplir si el comprador ejerce su derecho.

### Decisión al vencimiento:
El comprador decide si ejerce el derecho en función de la diferencia entre el precio de ejercicio (\( K \)) y el precio del activo subyacente en el mercado al contado (\( S \)).

## Introducción a las Opciones

### Introducción

El precio de una opción, conocido como **prima**, es el importe que el comprador paga para obtener el derecho asociado al contrato. Este precio es el objeto principal de negociación en los mercados de opciones.

- **Comprador de opciones:** Tiene únicamente derechos y ninguna obligación. Sus pérdidas están limitadas a la prima pagada, ya que transfiere el riesgo a un tercero.
- **Vendedor de opciones:** Tiene únicamente obligaciones y asume el riesgo de pérdidas potencialmente ilimitadas. Sin embargo, siempre conserva la prima recibida, independientemente de si la opción es ejercida o no.

### Tipos de Opciones y Posiciones Básicas

#### Según el derecho que otorgan:
- **Opciones de compra (CALL):** Otorgan el derecho a comprar el activo subyacente.
- **Opciones de venta (PUT):** Otorgan el derecho a vender el activo subyacente.

#### Según el momento en que se pueden ejercer:
- **Opción europea:** Solo puede ejercerse en la fecha de vencimiento.
- **Opción americana:** Puede ejercerse en cualquier momento hasta la fecha de vencimiento.

En el mercado MEFF:
- Las opciones sobre acciones pueden ser de tipo europeo o americano.
- Las opciones sobre el IBEX 35 son exclusivamente de tipo europeo.

### Ejemplo de Opción CALL

Este ejemplo analiza el resultado para el comprador de una opción de compra (CALL) europea (se ejerce solo al vencimiento) bajo diferentes escenarios de precios del activo subyacente al vencimiento (\( S_T \)).

#### Datos Iniciales de la Opción CALL:

- **Precio de Ejercicio (Strike Price, \( K \)):** 300€  
    Es el precio al que el comprador de la CALL tiene el derecho, pero no la obligación, de comprar el activo subyacente.
- **Prima (Coste de la opción, \( c \)):** 20€  
    Es el precio que el comprador paga al vendedor para adquirir este derecho. Esta prima se paga independientemente de si la opción se ejerce o no.

#### Conceptos Clave para el Comprador de una CALL:

- **Decisión de Ejercicio:** El comprador ejercerá la opción si el precio del activo subyacente al vencimiento ($S_T$) es mayor que el precio de ejercicio ($K$). Es decir, si $S_T > K$. Si $S_T \leq K$, no ejercerá (o será indiferente si $S_T = K$, pero generalmente se asume que no se ejerce para evitar costes de transacción si el beneficio es nulo).
- **Valor Intrínseco al Vencimiento:** $\max(0, S_T - K)$. Es el beneficio que se obtendría al ejercer la opción, antes de considerar la prima pagada.
- **Resultado (Beneficio/Pérdida) de la Opción:** $(\text{Valor Intrínseco al Vencimiento}) - \text{Prima}$.
- **Punto de Equilibrio (Breakeven Point):** Es el precio del subyacente ($S_T$) al cual el comprador no gana ni pierde. Se calcula como $K + c$. En este caso, $300€ + 20€ = 320€$.

#### Análisis de los Casos:

**CASO 1: Precio del activo al vencimiento ($S_T$) = $400€$**

- **¿Ejerce el comprador?** Sí. Porque $S_T (400€) > K (300€)$. Al comprador le interesa comprar a $300€$ algo que en el mercado vale $400€$.
- **Valor Intrínseco:** $S_T - K = 400€ - 300€ = 100€$.
- **Resultado de la Opción (Beneficio del Comprador):** $\text{Valor Intrínseco} - \text{Prima} = 100€ - 20€ = 80€$.
- **Precio Efectivo de Compra del Activo (si se ejerce):** El comprador paga $K$ al vendedor ($300€$) y ya pagó la prima ($20€$). Precio efectivo = $K + c = 300€ + 20€ = 320€$. (El comprador adquiere un activo que vale $400€$ por un coste total de $320€$).

**CASO 2: Precio del activo al vencimiento ($S_T$) = $320€$**

- **¿Ejerce el comprador?** Sí. Porque $S_T (320€) > K (300€)$.
- **Valor Intrínseco:** $S_T - K = 320€ - 300€ = 20€$.
- **Resultado de la Opción (Beneficio del Comprador):** $\text{Valor Intrínseco} - \text{Prima} = 20€ - 20€ = 0€$. Este es el punto de equilibrio. El comprador no gana ni pierde.
- **Precio Efectivo de Compra del Activo (si se ejerce):** Precio efectivo = $K + c = 300€ + 20€ = 320€$. (Adquiere un activo que vale $320€$ por un coste total de $320€$).

**CASO 3: Precio del activo al vencimiento ($S_T$) = $300€$**

- **¿Ejerce el comprador?** No (o indiferente). Porque $S_T (300€) = K (300€)$. El valor intrínseco es cero. Ejercer implicaría comprar a $300€$ algo que vale $300€$, sin obtener beneficio por la compra en sí, y habiendo pagado la prima. Generalmente se asume que no se ejerce si $S_T \leq K$.
- **Valor Intrínseco:** $S_T - K = 300€ - 300€ = 0€$.
- **Resultado de la Opción (Pérdida del Comprador):** Si no ejerce: Pérdida = $- \text{Prima} = -20€$. Si ejerce (indiferente): $(\text{Valor Intrínseco}) - \text{Prima} = 0€ - 20€ = -20€$. El resultado es el mismo: una pérdida igual a la prima pagada.

**CASO 4: Precio del activo al vencimiento ($S_T$) = $280€$**

- **¿Ejerce el comprador?** No. Porque $S_T (280€) < K (300€)$. No tiene sentido ejercer el derecho a comprar a $300€$ algo que en el mercado puede comprar más barato a $280€$.
- **Valor Intrínseco:** $\max(0, S_T - K) = \max(0, 280€ - 300€) = 0€$.
- **Resultado de la Opción (Pérdida del Comprador):** Pérdida = $- \text{Prima} = -20€$. (La opción expira sin valor y la pérdida es el coste de la prima).

**CASO 5: Precio del activo al vencimiento ($S_T$) = $250€$**

- **¿Ejerce el comprador?** No. Porque $S_T (250€) < K (300€)$.
- **Valor Intrínseco:** $\max(0, S_T - K) = \max(0, 250€ - 300€) = 0€$.
- **Resultado de la Opción (Pérdida del Comprador):** Pérdida = $- \text{Prima} = -20€$.

# Relación de Ejercicios y Ejercicios Extra

## Relación de Ejercicios

### Ejercicio 13

A inicios de enero de 2012 un fondo de inversión tiene una inversión importante en una cartera de 3 acciones (Citibank, Bank of America y Exxon Mobil) que forman parte del índice S&P 500. Dentro de 3 meses, el gestor de la cartera tiene previsto vender las acciones. Sin embargo, estima que las cotizaciones pueden descender, por lo que se considera conveniente acudir al mercado de futuros para realizar una operación de cobertura sobre la cartera ante posibles caídas de precios de las acciones en esos 3 meses.

La información de que se dispone en estos momentos es la siguiente:

- Valor en contado del índice S&P 500 = 200 puntos.
- Valor de la cartera = 2.040.000 $.
- Beta de la cartera (respecto al índice S&P 500) = 1,5.

Para cubrir el valor de la cartera durante los próximos 3 meses, el gestor utiliza el contrato de futuros sobre el índice S&P 500 vencimiento dentro de 4 meses, cuya cotización actual es de 204 puntos. Este contrato de futuros requiere la entrega de 500 $ (multiplicador monetario del índice).

Si a los tres meses el gestor realiza tanto la venta de las acciones de su cartera en contado, como la liquidación de la posición en futuros, se pide:

1) Describa la estrategia que realiza el gestor (posición en contado, a futuros y tipo de cobertura).  
   - Posición en el mercado de contado: posición larga en contado.
   - En el mercado de futuros: posición corta debido a la venta de futuros.
   - Tipo de cobertura: cobertura perfecta.
2) ¿Podría utilizarse algún otro contrato de futuros para la cobertura? Razone su respuesta.  
   Sí, podríamos realizar una venta a plazo.
3) Número de contratos necesarios.  
    $\frac{2034000}{204 \times 500} \times 1.5 = 30$

4) Resultado en el mercado de futuros, sabiendo que la cotización del contrato de futuros a los tres meses es de 180,9 puntos.  

    $F_0 - F_t \times \text{nº contratos} \times \text{multiplicador} =$

    $= (204 - 180,9) \times 30 \times 1,5 = 346.500$

5) Resultado en contado para el gestor de la cartera, suponiendo que a los tres meses el índice S&P 500 ha bajado hasta los 180 puntos y la cartera se comporta como su beta indicaba (Recuerde que la beta muestra la relación entre los movimientos del índice S&P 500 y los movimientos de la cartera. Por lo tanto, puede calcular la evolución de su cartera a los tres meses a partir de la evolución del índice en esos tres meses).  

    Variación final a los 3 meses = $\frac{S_t - S_0}{S_0} = \frac{180-200}{200} = -10\%$

    Variación en cartera = $\beta \times -10 = -15\%$

    $204000 \times -15\% = -306000$
6) Resultado global de la estrategia. ¿Ha sido conveniente la contratación en el mercado de futuros?  
    $346500 - 306000 = 40500$

    Sí, sin la cobertura hubiésemos sufrido una pérdida de 306.000, mientras que gracias a ella hemos ganado 40.500.

7) ¿Recomendaría usted al gestor esperar los 4 meses hasta el vencimiento del contrato de futuros para liquidar la posición? Razone la respuesta.

    No, ya que la cobertura es solo de 3 meses, por ende, ese cuarto mes se quedaría descubierto, adoptando una posición especulativa en el mercado que conlleva más riesgo.


### Ejercicio 17

Un fabricante de láminas de plástico tiene como principal materia prima un producto químico denominado polietileno lineal de baja densidad (LLDPE en adelante). El próximo mes de junio tendrá que comprar 235.000 libras de este producto, que cotiza hoy al contado a 0,59 $/libra, pero está preocupado por la alta volatilidad de los precios existente en este mercado. Su director financiero le propone realizar una cobertura del riesgo de precios mediante contratos de futuros, presentándole dos opciones:

a) Cubrirlo con el contrato de vencimiento junio que se negocia en el Chicago Mercantile Exchange sobre LLDPE (tamaño: 47.000 libras de LLDPE; garantía inicial: 1.000 \$/contrato y margen de mantenimiento: 75\% de la garantía inicial), y que cotiza hoy a F0 = 0,58 \$/libra.

b) Dado que el LLDPE es un producto derivado del petróleo, plantea también la posibilidad de cubrirlo con futuros sobre petróleo crudo del mismo mercado y vencimiento junio (tamaño: 1.000 barriles; garantía inicial: 2.075 \$ por contrato y margen de mantenimiento: 75\%), y que cotiza hoy a F0 = 63,90 \$/barril, siendo el coeficiente beta estimado de la regresión entre los precios históricos del LLDPE y los del petróleo de 0,8.

Ayude al director financiero de esta compañía a evaluar estas propuestas:

1) Suponiendo que se realiza la cobertura con la opción A) y que esta se liquida a vencimiento, indique la estrategia a adoptar en futuros, el número de contratos necesarios y el precio final que pagará la empresa por cada libra de LLDPE teniendo en cuenta la cobertura realizada. Sol: Compra; 5; 0,585 $/libra.

    Se trata de una cobertura perfecta, por ende, se nos asegura un beneficio.

    Número de contratos:
    $\frac{235000}{47000} = 5$
    Precio final:
    $0,59 - 0,58 \times 47000 \times 5 = 2350$

2) Suponiendo que se realiza la cobertura con la opción B), indique la estrategia a adoptar en futuros y el número de contratos necesarios. Realice la liquidación diaria de pérdidas y ganancias, especificando la evolución de las cuentas de garantías y la necesidad de aportar garantías adicionales, suponiendo que la empresa liquida la posición en futuros dos días después, teniendo en cuenta la siguiente evolución en los precios del contrato de futuros sobre petróleo: día 1, 63 \$/barril; día 2, 62,5 \$/barril. Sol: Compra; 2; pérdida de 1.400 \$/contrato; día 1, garantía adicional de 900 \$/contrato.

    No es una cobertura perfecta. Compra futuros ya que tiene la posibilidad de cubrirlos.

    Nº contratos = $\frac{235000 \times 0,59}{63900} \times 0,8 \approx 2$

    | Día | Valor Contado | G/p del Día (\$) | G/p Acumulada (\$) | Garantías Adicionales (\$) | Cuenta de Garantías del Comprador (\$) |
    |-----|---------------|-------------------------------|----------------------------------|----------------------------|-----------------------------------------|
    | 0   | 63,90 = 63.900        | -                             | 0                                | 0                          | 2.075                                   |
    | 1   | 63,00         | -900                          | -900                             | 900                        | 2.075                                   |
    | 2   | 62,50         | -500                          | -1.400                           | 0                          | 2.075                                   |

    Rdo = -1400 x 2 = -2800

3) Suponga ahora que las posiciones en futuros no se liquidan hasta la fecha de vencimiento (junio), y que ese día el precio del LLDPE es de 0,538 $/libra, y el precio del petróleo asciende a 58,12 $/barril. Determine el resultado en contado, el resultado en futuros y el resultado total tanto de la cobertura con la estrategia A) como de la cobertura con la estrategia B). Sol: Resultado en contado 12.220; Resultado en futuros: A) -9.870 B) -11.560.

    Rdo contado = $(0,59 - 0,538) \times 5 \times 47000 = 12220$

    Rdo futuro A = $(0,538 - 0,58) \times ... = -9870$

    Rdo total A = Rdo contado + Rdo futuro = 12220 - 9870 = **2350**

    Rdo futuro B = $(58,12 - 63,9) \times 1000 \times 2 = -11560$

    Rdo total B = ... = **660**


4) Comente los resultados obtenidos en el apartado anterior y explique qué diferencias hay entre las coberturas A) y B) propuestas y los riesgos a que se expone la empresa en cada caso.


    | Característica                | Cobertura A (Futuros LLDPE)                                                                 | Cobertura B (Futuros Petróleo Crudo)                                                                 |
    |-------------------------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
    | **Tipo de Cobertura**         | Directa: El activo subyacente del futuro es el mismo (o muy similar) al activo que se quiere cubrir (LLDPE). Considerada perfecta. | Cruzada: El activo subyacente del futuro (petróleo) es diferente del activo que se quiere cubrir (LLDPE), pero se espera que sus precios estén correlacionados. |
    | **Activo Subyacente del Futuro** | LLDPE.                                                                                   | Petróleo Crudo.                                                                                     |
    | **Objetivo Principal**        | Fijar el precio de compra del LLDPE con alta precisión.                                     | Reducir la exposición al riesgo de precio del LLDPE usando un activo correlacionado como proxy.      |
    | **Riesgos Principales**       |                                                                                            |                                                                                                      |
    | **Riesgo Base**               | Menor. Existe si hay discrepancia entre las especificaciones del LLDPE de la empresa y las del contrato de futuros, o si los precios spot y futuro no convergen perfectamente. | Mayor. La efectividad depende de la estabilidad de la correlación entre los precios del LLDPE y del petróleo. Si esta correlación cambia, la cobertura es menos efectiva. |
    | **Riesgo de Modelo/Estimación (Beta)** | No aplica directamente de la misma manera (ratio de cobertura generalmente 1).                              | Significativo. Se basa en una beta estimada (0,8 en este caso) que puede no ser estable. Una estimación incorrecta reduce la efectividad. |
    | **Riesgo de Liquidez del Contrato** | Podría ser un factor si el mercado de futuros sobre LLDPE es poco líquido.                                     | Generalmente menor, ya que los futuros sobre petróleo crudo suelen ser muy líquidos.                |
    | **Complejidad**               | Más sencilla de estructurar y entender.                                                   | Más compleja, requiere estimar y monitorear la correlación y la beta.                               |
    | **Efectividad Esperada**      | Generalmente más alta para reducir el riesgo de precio del activo específico.              | Menor que la cobertura directa, pero puede ser la única opción si no existen futuros sobre el activo específico o si no son líquidos. |

### Ejercicio 18

La empresa XON, S.A. se dedica a la elaboración y comercialización de productos químicos derivados del petróleo, entre ellos el denominado polietileno lineal de baja densidad (LLDPE en adelante). Este producto se vende hoy (09/04/2018) al contado a 0,59 \$/libra. La empresa ha cerrado hoy una operación de venta con un cliente muy importante, consistente en el suministro de 250.000 libras de LLDPE a 0,62 \$/libra, con entrega del producto y pago del precio el 09 de julio.

La principal materia prima para la fabricación del LLDPE es el petróleo crudo. Hoy su precio en contado es de 62 \$/barril, pero a la empresa XON le preocupa que existan subidas en los próximos meses, lo que podría encarecer el coste de producción del LLDPE. El proceso de producción del pedido se iniciará en mayo, fecha en la que la empresa necesitará adquirir 3.000 barriles de petróleo crudo. Decide cubrir esta operación con futuros sobre petróleo crudo del Chicago Mercantile Exchange, vencimiento mayo (tamaño: 1.000 barriles; garantía inicial: 2.075 \$ por contrato; margen de mantenimiento: 75\%), y que cotiza hoy a F0=63,90 \$/barril.

Se pide:

1) ¿Qué tipo de operación ha pactado XON, S.A. con su cliente? Explíquela.
    
    Venta a plazo.

2) Si el tipo de interés libre de riesgo es del 1\% y no existen otros gastos de mantenimiento ni ingresos derivados del LLDPE, ¿le parece adecuado el precio de 0,62 \$/libra pactado entre las partes para el 9 de julio? Justifique su respuesta.
    
    $F_t = S_0 \times (1 + i \times \frac{T}{360 ó 365})$ + costes de almacenamiento - ingresos por posesión
    $0,59 \times (1,01 \times \frac{91}{365}) \approx 0,5915$
    
    Al vendedor le sale mejor ya que es un precio mayor, mientras que al comprador no ya que esta comprando más caro.

3) Por otra parte, suponga que XON, S.A. realiza la cobertura propuesta para la compra de su materia prima (petróleo crudo). Indique la estrategia a adoptar en futuros y el número de contratos necesarios. Realice la liquidación diaria de pérdidas y ganancias, especificando la evolución de la cuenta de garantías y la necesidad de aportar garantías adicionales, suponiendo que la empresa liquida la posición en futuros dos días después, teniendo en cuenta la siguiente evolución en los precios del contrato de futuros sobre petróleo: día 1, 63 \$/barril; día 2, 62,5 \$/barril.
    
    Nº contratos = $\frac{3000}{1000} = 3$

    | Día | Precio del Futuro ($/barril) | P/G Diaria ($)               | P/G Acumulada ($) | Saldo Cuenta Garantías Antes de Ajuste ($) | Garantías Adicionales Requeridas ($) | Saldo Cuenta Garantías Después de Ajuste ($) |
    | :-- | :--------------------------- | :--------------------------- | :---------------- | :----------------------------------------- | :----------------------------------- | :------------------------------------------ |
    | 0   | 63,90                        | -                            | -                 | -                                         | -                                    | 2.075                                       |
    | 1   | 63,00                        | (63,00 - 63,90) * 1.000 = -900 | -900             | 2.075 - 900 = 1.175                      | 2.075 - 1.175 = 900                  | 1.175 + 900 = 2.075                         |
    | 2   | 62,50                        | (62,50 - 63,00) * 1.000 = -500 | -1.400           | 2.075 - 500 = 1.575                      | 0 (ya que 1.575 > 1.556,25)          | 1.575                                       |


4) Suponga ahora que la empresa decide liquidar la posición en el vencimiento y que en esa fecha el precio del petróleo crudo asciende a 70 \$/barril, determine los resultados totales de la cobertura y el precio de compra que se ha garantizado para el petróleo, teniendo en cuenta la cobertura realizada.

    Rdo contado garantizado = $(62-63,9)\times 1000 \times 3 = 5700$

    Rdo contado sabiendo que a vencimiento sube a 70= $(62-70)\times ... = 24000$

    Rdo futuro = $(70 - 63,9) \times ... = 18300$

    Rdo total = Podíamos haber ganado 24000, pero ha sido 18300 = pérdida de 5700

    Podemos comprobar de la siguiente manera:
        Importe de la compra = 70 x 3000 - 18300 = 1917000 = p
        ¿Coincide el precio unitario? = p/3000 = 63,9


5) Comente las principales diferencias existentes entre operaciones del tipo de la pactada entre XON y su cliente y operaciones realizadas a través de un mercado organizado como el de futuros del Chicago Mercantile Exchange.


| Característica                  | Operaciones a Plazo (Forward)                                                                 | Operaciones en Mercados Organizados (Futuros)                                                      |
|---------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| **Estandarización del Contrato** | Personalizadas: las condiciones (cantidad, vencimiento, precio) se negocian entre las partes. | Estandarizadas: las condiciones del contrato (tamaño, vencimiento, etc.) están predeterminadas.  |
| **Mercado**                     | Mercado no organizado (OTC, Over-The-Counter).                                               | Mercado organizado (como el CME).                                                                |
| **Riesgo de Contrapartida**     | Alto: depende de la solvencia de las partes.                                                 | Bajo: la cámara de compensación actúa como intermediaria y garantiza las operaciones.            |
| **Liquidación**                 | Generalmente por entrega física del activo al vencimiento.                                   | Puede ser por entrega física o por diferencias (cash settlement).                                |
| **Flexibilidad**                | Alta: se adapta a las necesidades específicas de las partes.                                 | Baja: los contratos son rígidos y estandarizados.                                                |
| **Garantías (Margen)**          | No se requieren garantías iniciales ni ajustes diarios.                                      | Requiere garantías iniciales y ajustes diarios de pérdidas y ganancias (mark-to-market).         |
| **Liquidez**                    | Baja: depende de encontrar una contrapartida específica.                                     | Alta: los mercados organizados suelen tener mayor volumen de negociación.                        |
| **Transparencia**               | Baja: los precios y condiciones no son públicos.                                             | Alta: los precios y condiciones son públicos y accesibles.                                       |
| **Costes de Transacción**       | Generalmente más altos debido a la personalización y menor liquidez.                         | Generalmente más bajos debido a la estandarización y mayor liquidez.                             |
| **Regulación**                  | Menor regulación, mayor riesgo de incumplimiento.                                            | Altamente regulado, lo que reduce el riesgo de incumplimiento.                                   |

En resumen, las operaciones a plazo ofrecen flexibilidad y personalización, pero conllevan mayores riesgos de contrapartida y menor liquidez. Por otro lado, los mercados organizados de futuros proporcionan mayor seguridad, liquidez y transparencia, aunque con menor flexibilidad en las condiciones del contrato.


### Ejercicio 19

La empresa ETNOSUR S.L. dispone hoy (16/04/18) de un excedente de tesorería de 50.000€, y como no necesitará liquidez hasta el 16/06/18, ha pensado en las siguientes inversiones:

1) Dedicar una parte del presupuesto a adquirir la siguiente cartera de acciones:

| Empresa | Nº acciones | Precio de compra (por acción) | Beta Acción/IBEX35 |
|---------|-------------|-------------------------------|--------------------|
| BSCH    | 3.000       | 8,75 €                        | 1,2                |
| BBVA    | 1.000       | 11,50 €                       | 1,2                |

Aunque las expectativas son alcistas en el sector de la banca, la empresa quiere protegerse de movimientos desfavorables de los precios, y decide realizar una cobertura con futuros sobre el “mini” IBEX-35, cuya cotización actual es de 10.125 puntos y las garantías iniciales del 10% del valor de la posición. Estas garantías las abonará también con cargo al excedente de tesorería.

2) Una vez realizado el desembolso para la cartera de acciones, así como para el pago de las garantías del contrato de futuros mencionado anteriormente, el presupuesto restante lo dedicará a especular con contratos de futuros sobre acciones de REPSOL, ya que tiene expectativas bajistas sobre ellas. La cotización actual del contrato de futuros sobre REPSOL -con vencimiento 16 de junio, tamaño 100 acciones por contrato y garantías iniciales del 10% del valor de la posición- es de 15€/acción.

Suponiendo que el 16/06/18 la empresa liquida todas sus posiciones en contado y en futuros, que las acciones cotizan en contado a 13€ (REPSOL), 9,25€ (BSCH) y 12€ (BBVA), y que el contrato de futuros sobre el “mini” IBEX-35 cotiza a 10.650 puntos. Se pide:

a) Respecto a su inversión en la cartera de acciones de la banca:
    - Posición básica que debe adoptar en futuros para cubrir su inversión.
    - Resultado en contado, en futuros y total.
    - ¿Ha resultado exitosa la estrategia de cobertura? Razone su respuesta.
b) Respecto a su inversión especulativa en acciones de REPSOL:
    - Posición a adoptar en futuros.
    - Número de contratos que podrá firmar, teniendo en cuenta que no dispone de más liquidez que la proveniente del presupuesto arriba indicado.
    - Resultado de la liquidación en futuros.

c) Indique a cuánto asciende la tesorería disponible el 16/06 tras las liquidaciones de todas las posiciones arriba realizadas.

d) Respecto a las acciones de REPSOL y su correspondiente contrato de futuros, suponiendo que la base el 16/04/18 hubiese sido cero, y que sus expectativas sobre los precios en contado hubiesen sido alcistas, indique cómo podría haber especulado con acciones de REPSOL en contado, así como el resultado obtenido si hubiese destinado el presupuesto que utilizó para especular en contratos de futuros sobre REPSOL. Sol: Larga; -958€.

---

**Solución:**

#### Apartado A

La empresa ha comprado una cartera de acciones y quiere protegerse de movimientos desfavorables de los precios (una caída). Para cubrir una posición larga en contado, debe **adoptar una posición corta en el mercado de futuros**.

**Beta de la cartera:**

Cartera compuesta por:

- 3.000 acciones de BSCH a 8,75 €/acción, Beta BSCH = 1,2.  
    Valor BSCH:  
    $3.000 \times 8,75 = 26.250 \, \text{€}$.

- 1.000 acciones de BBVA a 11,50 €/acción, Beta BBVA = 1,2.  
    Valor BBVA:  
    $1.000 \times 11,50 = 11.500 \, \text{€}$.

Valor total inicial de la cartera:  
$26.250 + 11.500 = 37.750 \, \text{€}$.

Beta de la cartera ($\beta_c$):  
$\beta_c = \frac{26.250}{37.750} \cdot 1,2 + \frac{11.500}{37.750} \cdot 1,2$  
$\beta_c = (0,69536 \cdot 1,2) + (0,30464 \cdot 1,2)$  
$\beta_c = 0,834432 + 0,365568 = 1,2$.

*La beta de la cartera es 1,2.*

**Número de contratos:**

Se utilizan futuros sobre el "mini" IBEX-35.  
Cotización actual del futuro = 10.125 puntos.  
Asumiendo un multiplicador de 1 € por punto para el mini IBEX-35  
Valor de un contrato de futuro = $10.125 \, \text{puntos} \times 1 \, \text{€/punto} = 10.125 \, \text{€}$.

Número de contratos ($N$):  
$N = \frac{\text{Valor de la cartera}}{\text{Valor del contrato de futuro}} \cdot \beta_c = \frac{37.750}{10.125} \cdot 1,2 \approx 3,7284 \cdot 1,2 \approx 4,474$.

Redondeando por exceso, se necesitan **5 contratos**.

**Garantías iniciales a aportar**

Las garantías iniciales son el 10% del valor de la posición en futuros.

- **Valor de la posición en futuros:**  
    $5 \, \text{contratos} \times 10.125 \, \text{€/contrato} = 50.625 \, \text{€}$.

- **Garantías iniciales:**  
    $10\% \times 50.625 \, \text{€} = 5.062,5 \, \text{€}$.

**Resultado en contado, en futuros y total**

**Resultado en contado:**

- **Valor inicial de la cartera:**  
    $37.750 \, \text{€}$.

- **Precios de liquidación el 16/06/18:**  
    - BSCH: $9,25 \, \text{€/acción}$  
    - BBVA: $12 \, \text{€/acción}$  

- **Valor final de la cartera:**  
    - BSCH: $3.000 \, \text{acciones} \times 9,25 \, \text{€/acción} = 27.750 \, \text{€}$  
    - BBVA: $1.000 \, \text{acciones} \times 12 \, \text{€/acción} = 12.000 \, \text{€}$  
    - Total: $27.750 \, \text{€} + 12.000 \, \text{€} = 39.750 \, \text{€}$  

- **Resultado en contado:**  
    $39.750 \, \text{€} - 37.750 \, \text{€} = 2.000 \, \text{€} \, (\text{Beneficio})$.

**Resultado en futuros:**

- **Posición inicial:** Vendidos $5$ contratos de futuros mini IBEX-35.  
- **Precio inicial del futuro:** $10.125 \, \text{puntos}$.  
- **Precio de liquidación del futuro:** $10.650 \, \text{puntos}$.  

- **Resultado en futuros:**  
    $(\text{Precio inicial} - \text{Precio final}) \times \text{Nº contratos} \times \text{Multiplicador}$  
    $(10.125 - 10.650) \times 5 \times 1 = -525 \times 5 = -2.625 \, \text{€} \, (\text{Pérdida})$.

**Resultado total:**

- **Resultado total:**  
    $\text{Resultado en contado} + \text{Resultado en futuros}$  
    $2.000 \, \text{€} + (-2.625 \, \text{€}) = -625 \, \text{€} \, (\text{Pérdida})$.

**¿Ha resultado exitosa la estrategia de cobertura?**

La estrategia de cobertura no ha resultado exitosa desde la perspectiva de maximizar el beneficio en esta situación particular. 

- La cartera de acciones generó un beneficio de $2.000 \, \text{€}$ debido a la subida de los precios en el mercado de contado.  
- Sin embargo, la posición corta en futuros, diseñada para proteger contra caídas, generó una pérdida de $2.625 \, \text{€}$ porque el mercado (el índice IBEX-35) también subió.  

El resultado neto fue una pérdida de $625 \, \text{€}$. Si no se hubiera realizado la cobertura, la empresa habría obtenido un beneficio de $2.000 \, \text{€}$. 

La cobertura protege contra movimientos adversos (caídas de precios en este caso), pero también limita las ganancias o incluso puede generar pérdidas si el mercado se mueve favorablemente a la posición en contado.

---

### Apartado B

#### Posición a adoptar en futuros

La empresa tiene expectativas bajistas sobre las acciones de REPSOL, es decir, espera que su precio baje. Para especular sobre una caída de precios, la posición a adoptar en el mercado de futuros es una posición corta (venta de futuros).

#### Número de contratos que podrá firmar

**Presupuesto inicial total:** 50.000 €.

- **Desembolso para la cartera de acciones (BSCH y BBVA):**  
    $(3.000 \, \text{acciones} \times 8,75 \, €/\text{acción}) + (1.000 \, \text{acciones} \times 11,50 \, €/\text{acción}) = 26.250 \, € + 11.500 \, € = 37.750 \, €.$

- **Desembolso para las garantías de los futuros sobre "mini" IBEX-35 (calculado en el apartado a):**  
    $5.062,5 \, €.$

- **Presupuesto restante para especular con futuros de REPSOL:**  
    $50.000 \, € - 37.750 \, € - 5.062,5 \, € = 7.187,5 \, €.$

**Datos del contrato de futuros sobre REPSOL:**

- Tamaño del contrato: 100 acciones por contrato.  
- Cotización actual del futuro: $15 \, €/\text{acción}$.  
- Valor de un contrato de futuro:  
    $100 \, \text{acciones/contrato} \times 15 \, €/\text{acción} = 1.500 \, €.$  
- Garantías iniciales exigidas:  
    $10\% \times 1.500 \, € = 150 \, €/\text{contrato}.$  

**Número máximo de contratos de futuros sobre REPSOL que se pueden firmar:**  
$\text{Número de contratos} = \frac{\text{Presupuesto restante}}{\text{Garantía inicial por contrato}} = \frac{7.187,5 \, €}{150 \, €/\text{contrato}} = 47,9166\ldots$  

Como no se pueden firmar fracciones de contrato, el número máximo es **47 contratos**.

#### Resultado de la liquidación en futuros

- **Se vendieron:** 47 contratos de futuros sobre REPSOL.  
- **Precio de venta de los futuros:** $15 \, €/\text{acción}$.  
- **El 16/06/18, las acciones de REPSOL cotizan en contado a:** $13 \, €/\text{acción}$.  
    Se asume que el precio del futuro converge con el precio de contado en la fecha de liquidación.  
- **Precio de liquidación de los futuros:** $13 \, €/\text{acción}$.  

**Resultado en futuros:**  
$(\text{Precio de venta} - \text{Precio de liquidación}) \times \text{Nº de contratos} \times \text{Tamaño del contrato}$  

$(15 \, €/\text{acción} - 13 \, €/\text{acción}) \times 47 \, \text{contratos} \times 100 \, \text{acciones/contrato}$  

$2 \, €/\text{acción} \times 4.700 \, \text{acciones} = 9.400 \, € \, (\text{Beneficio}).$

---

### Apartado C


**Tesorería disponible el 16/06 tras las liquidaciones:**

Para calcular la tesorería disponible final, partimos de la tesorería inicial y sumamos los resultados netos de todas las operaciones realizadas:

1. **Tesorería inicial:** 50.000 €.
2. **Resultado neto de la inversión en la cartera de acciones de la banca (contado + futuros):** -625 € (calculado en el apartado 19a).
3. **Resultado de la inversión especulativa en futuros sobre REPSOL:** 9.400 € (calculado en el apartado 19b).

**Tesorería disponible el 16/06:**

$$
\text{Tesorería final} = \text{Tesorería inicial} + \text{Resultado total de la cartera de banca} + \text{Resultado de futuros REPSOL}
$$

$$
\text{Tesorería final} = 50.000 \, € - 625 \, € + 9.400 \, € = 58.775 \, €.
$$

**Detalle de los flujos de caja:**

1. **Flujo inicial:** +50.000 €.
2. **Compra de acciones BSCH:** - (3.000 acciones × 8,75 €/acción) = -26.250 €.
3. **Compra de acciones BBVA:** - (1.000 acciones × 11,50 €/acción) = -11.500 €.
4. **Garantías iniciales futuros "mini" IBEX-35:** -5.062,5 €.
5. **Garantías iniciales futuros REPSOL:** - (47 contratos × 150 €/contrato) = -7.050 €.
6. **Venta de acciones BSCH:** + (3.000 acciones × 9,25 €/acción) = +27.750 €.
7. **Venta de acciones BBVA:** + (1.000 acciones × 12 €/acción) = +12.000 €.
8. **Liquidación futuros "mini" IBEX-35 (garantías devueltas + resultado):** +5.062,5 € - 2.625 € = +2.437,5 €.
9. **Liquidación futuros REPSOL (garantías devueltas + resultado):** +7.050 € + 9.400 € = +16.450 €.

**Tesorería final:**

$$
50.000 - 26.250 - 11.500 - 5.062,5 - 7.050 + 27.750 + 12.000 + 2.437,5 + 16.450 = 58.775 \, €.
$$

---

### Apartado D

**Especulación en contado con acciones de REPSOL:**

Si las expectativas sobre los precios en contado de REPSOL hubiesen sido alcistas, la estrategia habría sido una **posición larga** en el mercado de contado, es decir, comprar acciones de REPSOL.

1. **Presupuesto para la especulación:**  
    El presupuesto utilizado para especular con contratos de futuros sobre REPSOL fue de 7.187,5 € (calculado en el apartado 19b).

2. **Condiciones iniciales (16/04/18):**  
    - Precio de contado inicial de REPSOL: 15 €/acción (base cero).  
    - Número de acciones que se podrían haber comprado:  
      $$
      \text{Número de acciones} = \frac{\text{Presupuesto}}{\text{Precio de contado inicial}} = \frac{7.187,5 \, €}{15 \, €/\text{acción}} = 479,166\ldots \, \text{acciones}.
      $$
      Se comprarían 479 acciones, con un coste de:  
      $$
      479 \, \text{acciones} \times 15 \, €/\text{acción} = 7.185 \, €.
      $$
      (Quedarían 2,5 € sin invertir).

3. **Condiciones de liquidación (16/06/18):**  
    - Precio de contado final de REPSOL: 13 €/acción.  
    - Valor de la venta de las acciones:  
      $$
      479 \, \text{acciones} \times 13 \, €/\text{acción} = 6.227 \, €.
      $$

4. **Resultado obtenido de la especulación en contado:**  
    $$
    \text{Resultado} = \text{Valor de la venta} - \text{Coste de la compra} = 6.227 \, € - 7.185 \, € = -958 \, € \, (\text{Pérdida}).
    $$

**Conclusión:**  
Si se hubiese especulado en contado con acciones de REPSOL en lugar de utilizar contratos de futuros, la empresa habría incurrido en una pérdida de 958 €. Esto contrasta con el beneficio de 9.400 € obtenido al especular con contratos de futuros sobre REPSOL, lo que demuestra que la estrategia en futuros fue más rentable en este caso.



## Ejercicio del Libro

### Ejercicio 118: Libro de Menéndez Alonso

#### Enunciado

Identifique en cada uno de los siguientes casos el riesgo a cubrir y diseñe la estrategia adecuada a adoptar en el mercado de futuros para cubrir dicho riesgo.

a) Un inversor posee una cartera de renta variable que desea mantener a largo plazo, protegiéndose de una evolución desfavorable de la Bolsa en el corto plazo.  
b) Un fondo de pensiones estima que dispondrá dentro de un mes de un cierto volumen de fondos que destinará a invertir en Bolsa.  
c) Una entidad de crédito ha concedido préstamos a tipo fijo a largo plazo financiando la inversión crediticia mediante la captación de depósitos con vencimiento a corto plazo.  
d) Una empresa estima que dentro de unos meses realizará una emisión de pagarés.  
e) Una empresa recurrirá a corto plazo al mercado de bonos para obtener financiación a medio y largo plazo.  
f) Una empresa se plantea realizar a corto plazo una inversión financiera en activos monetarios con la finalidad de invertir un exceso transitorio de tesorería.  
g) Un gestor de un FIAMM desea proteger una parte de su cartera de valores mobiliarios.  
h) Un inversor desea proteger su cartera de renta fija a largo plazo de una evolución desfavorable de los mercados financieros.

#### Resolución

a) El riesgo asociado a una caída de la Bolsa se puede cubrir mediante la venta de futuros sobre el IBEX-35.

b) El fondo de pensiones asume el riesgo de un incremento de las cotizaciones bursátiles a corto plazo, en el periodo de tiempo que transcurre desde el momento presente hasta que disponga de los fondos necesarios para invertir en Bolsa. Este riesgo se puede cubrir mediante la compra de futuros sobre el IBEX-35.

c) La entidad de crédito está expuesta a una posible subida de los tipos de interés a corto plazo. El incremento del tipo de interés se traduce en un aumento del coste de financiación vía depósitos, sin que pueda repercutir este incremento a los clientes que han formalizado operaciones de préstamo a tipo de interés fijo. El riesgo derivado de un potencial incremento de los tipos de interés se puede cubrir vendiendo contratos de futuros sobre el EURIBOR a 3 meses.

d) En este caso el riesgo que asume la empresa consiste en una posible subida de los tipos de interés a corto plazo, lo que implicará un aumento del coste de emisión de los pagarés. Al igual que en el caso anterior, este riesgo se puede cubrir mediante la venta de futuros sobre el EURIBOR a 3 meses.

e) La empresa está expuesta a un incremento de los tipos de interés a largo plazo. Este riesgo se puede cubrir vendiendo futuros sobre el bono nocional a 10 años.

f) Si los tipos de interés a corto plazo experimentan una caída, se reducirá la rentabilidad que genera la inversión en activos monetarios. Por tanto, el riesgo de una reducción de los tipos de interés a corto plazo se puede cubrir mediante la compra de futuros sobre el EURIBOR a 3 meses.

g) El gestor del FIAMM desea cubrir el riesgo asociado a una posible reducción de los tipos de interés a corto plazo, que reduzca la rentabilidad de sus inversiones en activos monetarios. Este riesgo se cubre mediante la compra de futuros sobre el EURIBOR a 3 meses.

h) El inversor está expuesto a una subida de los tipos de interés a largo plazo, que reduzca el valor de su cartera de renta fija a largo plazo. Este riesgo se cubre mediante la venta de futuros sobre el bono nocional a 10 años.



### Ejercicio 119: Libro de Menéndez Alonso

#### Enunciado

Explique qué estrategia de especulación en los mercados de futuros podría adoptar un inversor ante los siguientes escenarios:

a) Un inversor anticipa un incremento inminente en los tipos de interés a corto plazo.  
b) Un inversor estima una relajación de la política monetaria adoptada por el Banco Central Europeo, dado el grado de cumplimiento del objetivo de inflación.  
c) Un inversor anticipa una corrección generalizada de la Bolsa a corto plazo por toma de beneficios.  
d) Un inversor desea posicionarse en la bolsa ante una previsible caída de los tipos de interés a corto.  
e) Un inversor anticipa el anuncio a corto plazo de profit warnings en una sociedad cotizada.  
f) Un inversor estima una próxima reducción de los tipos de interés a largo plazo.

### Resolución

<!-- a) Venta de futuros sobre el EURIBOR a 3 meses.  

b) Una relajación de la política monetaria del Banco Central Europeo conducirá a una reducción de los tipos de interés. Por tanto, la estrategia adecuada será comprar futuros sobre el EURIBOR a 3 meses.  

c) El inversor puede beneficiarse de la corrección que experimente la Bolsa a corto plazo vendiendo futuros sobre el IBEX-35.  

d) La caída de los tipos de interés provocará una reacción alcista en la Bolsa. La estrategia adecuada será comprar futuros sobre el índice IBEX-35.  

e) El anuncio de una revisión a la baja en las estimaciones de beneficio de la sociedad afectada implicará previsiblemente una caída del precio de las acciones. Por tanto, la estrategia adecuada será vender futuros sobre dicho valor.  

f) El inversor puede beneficiarse de una reducción de los tipos de interés a largo plazo comprando futuros sobre el bono nocional a 10 años.   -->


### Ejercicio 125: Libro de Menéndez Alonso

#### Enunciado

Supongamos que el Sr. Amagüestu dispone de la siguiente cartera de acciones de renta variable:

| TÍTULO | IMPORTANCIA RELATIVA | BETA |
|--------|-----------------------|------|
| A      | 15%                  | 1,40 |
| B      | 25%                  | 0,50 |
| C      | 30%                  | 0,60 |
| D      | 20%                  | 1,55 |
| E      | 10%                  | 0,95 |

El valor de mercado de la cartera es de 250.000 €. El inversor estima a corto plazo una tendencia bajista respecto a la evolución del mercado. No está interesado en deshacerse de la anterior cartera y quiere diseñar una estrategia de cobertura con contratos de futuros ante movimientos desfavorables del mercado. El precio del futuro Mini sobre el IBEX-35 que se ajusta a sus necesidades específicas cotiza a 6.580. El IBEX-35 es actualmente de 6.500 puntos.

a) ¿Qué estrategia deberá adoptar en el mercado de futuros? ¿Cuántos contratos de futuros necesita para cubrir su posición?  
b) Determine el resultado de la cobertura realizada en las siguientes situaciones:  
    - Escenario 1: El valor de la cartera cae un 8%, mientras que el precio del futuro se sitúa en el momento de la liquidación en 6.120 puntos.  
    - Escenario 2: El valor de la cartera sube un 4%, mientras que el precio del futuro en el momento de la liquidación es de 6.712 puntos.  
c) Estudie el grado de eficiencia de la cobertura tratando de explicar las causas de las posibles limitaciones de la misma.


### Resolución del apartado a)

El Sr. Amagüestu deberá vender contratos de futuros Mini sobre el IBEX-35. El número de contratos a utilizar para realizar la cobertura depende de la beta de la cartera.

La beta de la cartera es la suma ponderada de las betas $(\beta_i )$ de los títulos que la forman, ponderados por su importancia relativa en la cartera. Por tanto, la beta de la cartera será:

$$
\beta_{\text{Cartera}} = \sum_{i=1}^N \beta_i X_i
$$

Donde \( X_i \) es la importancia relativa de cada título en la cartera.

Sustituyendo los valores:

$$
\beta_{\text{Cartera}} = 1,40(0,15) + 0,50(0,25) + 0,60(0,30) + 1,55(0,20) + 0,95(0,10) = 0,92
$$

Por tanto, la beta de la cartera del Sr. Amagüestu es $\beta_{\text{Cartera}} = 0,92$.

El número de contratos necesarios para cubrir la posición se calcula con la fórmula:

$$
\text{Número de contratos} = \frac{\text{Valor de la cartera}}{\text{Precio del futuro} \times \text{Multiplicador}} \times \beta_{\text{Cartera}}
$$

Sustituyendo los valores:

$$
\text{Número de contratos} = \frac{250.000}{6.580 \times 1} \times 0,92 \approx 34,95 \approx 35
$$

Por lo tanto, el Sr. Amagüestu deberá vender **35 contratos de futuros Mini sobre el IBEX-35**.


### Resolución del apartado b)

#### Escenario 1: El valor de la cartera cae un 8%, mientras que el precio del futuro se sitúa en 6.120 puntos.

1. **Resultado en la cartera:**

    La caída del 8% en el valor de la cartera implica una pérdida de:

    $$
    \text{Pérdida cartera} = 250.000 \times (-0,08) = -20.000 \, \text{€}
    $$

2. **Resultado en futuros:**

    El precio inicial del futuro es 6.580, y el precio final es 6.120. La ganancia por contrato es:

    $$
    \text{Ganancia por contrato} = (6.580 - 6.120) \times 1 = 460 \, \text{€}
    $$

    Para 35 contratos, la ganancia total es:

    $$
    \text{Ganancia total futuros} = 460 \times 35 = 16.100 \, \text{€}
    $$

3. **Resultado neto:**

    $$
    \text{Resultado neto} = \text{Ganancia futuros} + \text{Pérdida cartera} = 16.100 - 20.000 = -3.900 \, \text{€}
    $$

#### Escenario 2: El valor de la cartera sube un 4%, mientras que el precio del futuro se sitúa en 6.712 puntos.

1. **Resultado en la cartera:**

    La subida del 4% en el valor de la cartera implica una ganancia de:

    $$
    \text{Ganancia cartera} = 250.000 \times 0,04 = 10.000 \, \text{€}
    $$

2. **Resultado en futuros:**

    El precio inicial del futuro es 6.580, y el precio final es 6.712. La pérdida por contrato es:

    $$
    \text{Pérdida por contrato} = (6.580 - 6.712) \times 1 = -132 \, \text{€}
    $$

    Para 35 contratos, la pérdida total es:

    $$
    \text{Pérdida total futuros} = -132 \times 35 = -4.620 \, \text{€}
    $$

3. **Resultado neto:**

    $$
    \text{Resultado neto} = \text{Ganancia cartera} + \text{Pérdida futuros} = 10.000 - 4.620 = 5.380 \, \text{€}
    $$

---

### Resolución del apartado c)

La cobertura no es perfecta, lo que se refleja en los resultados netos obtenidos en los dos escenarios. Esto se debe a las siguientes razones:

1. **Redondeo del número de contratos:**  
    El número de contratos necesarios para la cobertura fue redondeado a 35, lo que introduce un pequeño desajuste en la cobertura.

2. **Beta estimada de la cartera:**  
    La beta de la cartera $(\beta = 0,92 )$ es una estimación basada en datos históricos. Si la beta real de la cartera durante el periodo de cobertura difiere de esta estimación, la cobertura no será completamente efectiva.

3. **Riesgo de base:**  
    Existe un riesgo de base debido a la posible diferencia entre el comportamiento del índice subyacente del futuro (IBEX-35) y el comportamiento de la cartera. Aunque la beta intenta ajustar esta diferencia, no elimina completamente el riesgo.

En resumen, aunque la cobertura reduce significativamente el impacto de las variaciones del mercado, no elimina completamente el riesgo debido a las limitaciones mencionadas.

## Segundo Parcial de AOF: GADE - Ingenierías


### Ejercicio 1

#### Enunciado

Un inversor tiene expectativas alcistas sobre el precio de las acciones del Banco Santander y se está planteando realizar una de las dos estrategias alternativas siguientes para el próximo mes:

A. Especular con acciones del Banco Santander, que cotizan hoy a un precio de 2,78 €/acción.  
B. Especular con contratos de futuros sobre acciones del Banco Santander (tamaño 100 acciones, garantía inicial del 10% y vencimiento justo dentro de un mes), que cotizan hoy a 2,76 €/acción.

Suponiendo que el inversor dispone de un presupuesto de 10.000 euros y que, dentro de un mes, las acciones del Banco Santander cotizasen a 2,65 €/acción, indica:  
i) Posición a adoptar con acciones y número de acciones a negociar si eligiese la estrategia A.  
ii) Posición a adoptar con futuros y número máximo de contratos que podría negociar si eligiese la estrategia B.  
iii) Rentabilidad obtenida por el inversor en cada estrategia (utilizando capitalización simple, base 360).  
iv) Compara los resultados obtenidos y explica el concepto de apalancamiento.



#### Solución
i) Posición a adoptar con acciones y número de acciones a negociar si eligiese la estrategia A:

- **Posición a adoptar:**  
    Dado que el inversor tiene expectativas alcistas, debería comprar acciones (posición larga).  

- **Número de acciones a negociar:**  
    Con un presupuesto de 10.000 € y un precio por acción de 2,78 €, el número de acciones que puede comprar es:  
    $$
    \text{Número de acciones} = \frac{\text{Presupuesto}}{\text{Precio por acción}} = \frac{10.000}{2,78} \approx 3.597,12
    $$
    Dado que no se pueden comprar fracciones de acciones, el inversor comprará **3.597 acciones**.  

- **Desembolso inicial:**  
    $$
    3.597 \, \text{acciones} \times 2,78 \, €/\text{acción} = 9.999,66 \, €
    $$


ii) Posición a adoptar con futuros y número máximo de contratos que podría negociar si eligiese la estrategia B:

- **Posición a adoptar:**  
    Con expectativas alcistas, el inversor debería comprar contratos de futuros (posición larga).  

- **Número máximo de contratos:**  
    - Precio del futuro por acción: 2,76 €  
    - Tamaño del contrato: 100 acciones  
    - Valor nocional de un contrato de futuros:  
        $$
        2,76 \, €/\text{acción} \times 100 \, \text{acciones/contrato} = 276 \, €/\text{contrato}
        $$
    - Garantía inicial requerida: 10% del valor nominal del contrato.  
        $$
        \text{Garantía por contrato} = 0,10 \times 276 \, € = 27,60 \, €/\text{contrato}
        $$
    - Número máximo de contratos que puede negociar con un presupuesto de 10.000 € para garantías:  
        $$
        \text{Número de contratos} = \frac{\text{Presupuesto}}{\text{Garantía por contrato}} = \frac{10.000}{27,60} \approx 362,31
        $$
        Dado que no se pueden negociar fracciones de contratos, el inversor podrá negociar un máximo de **362 contratos**.  

- **Desembolso inicial en garantías:**  
    $$
    362 \, \text{contratos} \times 27,60 \, €/\text{contrato} = 9.991,20 \, €
    $$


iii) Rentabilidad obtenida por el inversor en cada estrategia (utilizando capitalización simple, base 360):

- **Estrategia A (Acciones):**
    - Capital invertido inicialmente:  
        $$
        3.597 \, \text{acciones} \times 2,78 \, €/\text{acción} = 9.999,66 \, €
        $$
    - Valor de las acciones después de un mes:  
        $$
        3.597 \, \text{acciones} \times 2,65 \, €/\text{acción} = 9.532,05 \, €
        $$
    - Resultado de la operación:  
        $$
        9.532,05 \, € - 9.999,66 \, € = -467,61 \, €
        $$
    - Rentabilidad mensual (simple):  
        $$
        \text{Rentabilidad} = \frac{\text{Resultado}}{\text{Capital invertido}} = \frac{-467,61}{9.999,66} \approx -0,04676 \, \text{(mensual)}
        $$
    - Rentabilidad anualizada (base 360):  
        $$
        i = \left( \frac{9.532,05}{9.999,66} - 1 \right) \times 12 \approx -0,5611 \, \text{(anual)} \, \text{o} \, -56,11\%.
        $$

- **Estrategia B (Futuros):**
    - Capital invertido inicialmente (garantías):  
        $$
        362 \, \text{contratos} \times 27,60 \, €/\text{contrato} = 9.991,20 \, €
        $$
    - Precio del futuro al inicio: 2,76 €/acción  
    - Precio de la acción al vencimiento (y por tanto del futuro, asumiendo convergencia): 2,65 €/acción  
    - Resultado de la liquidación de futuros:  
        $$
        \text{Resultado} = (\text{Precio final} - \text{Precio inicial}) \times \text{Tamaño del contrato} \times \text{Nº de contratos}
        $$
        $$
        \text{Resultado} = (2,65 - 2,76) \times 100 \times 362 = -0,11 \times 36.200 = -3.982 \, €
        $$
    - Capital final (considerando solo la variación de garantías por la liquidación):  
        $$
        9.991,20 \, € - 3.982 \, € = 6.009,20 \, €
        $$
    - Rentabilidad mensual (simple):  
        $$
        \text{Rentabilidad} = \frac{\text{Resultado}}{\text{Capital invertido}} = \frac{-3.982}{9.991,20} \approx -0,39855 \, \text{(mensual)}
        $$
    - Rentabilidad anualizada (base 360):  
        $$
        i = \left( \frac{6.009,20}{9.991,20} - 1 \right) \times 12 \approx -4,7826 \, \text{(anual)} \, \text{o} \, -478,26\%.
        $$

---

#### iv) Comparación de resultados y explicación del concepto de apalancamiento:

- **Comparación de resultados:**
    - Estrategia A (Acciones): Pérdida de 467,61 € sobre una inversión de 9.999,66 €, lo que representa una rentabilidad anualizada del -56,11%.  
    - Estrategia B (Futuros): Pérdida de 3.982 € sobre una inversión (garantía) de 9.991,20 €, lo que representa una rentabilidad anualizada del -478,26%.  

    En ambas estrategias el inversor obtiene pérdidas porque sus expectativas alcistas no se cumplieron (el precio de la acción bajó de 2,78 € a 2,65 €). Sin embargo, la pérdida porcentual (y absoluta, aunque sobre un capital inicial similar) es mucho mayor con la estrategia de futuros.  

- **Concepto de apalancamiento:**
    El apalancamiento financiero es la posibilidad de multiplicar la rentabilidad (o la pérdida) de una inversión utilizando un capital propio reducido y recurriendo a capital ajeno (deuda) o, como en el caso de los futuros, invirtiendo un pequeño depósito (garantía) para controlar un activo de valor nocional mucho mayor.  

    En la estrategia A (acciones), el apalancamiento es 1:1 si no se usa financiación externa (se invierten 9.999,66 € para controlar acciones por valor de 9.999,66 €).  

    En la estrategia B (futuros), el inversor deposita una garantía de 9.991,20 € para controlar un nocional de:  
    $$
    362 \, \text{contratos} \times 100 \, \text{acciones/contrato} \times 2,76 \, €/\text{acción} = 99.912 \, €
    $$
    El grado de apalancamiento es aproximadamente:  
    $$
    \frac{99.912}{9.991,20} \approx 10
    $$
    Esto significa que cada variación porcentual en el precio del activo subyacente (las acciones) se traduce en una variación aproximadamente 10 veces mayor en la rentabilidad sobre la garantía depositada.  

    En este caso, como el precio de la acción se movió en contra de las expectativas del inversor, el apalancamiento magnificó las pérdidas en la estrategia con futuros en comparación con la estrategia de compra directa de acciones. Si el precio hubiera subido, el apalancamiento habría magnificado las ganancias de la misma manera. El apalancamiento, por tanto, incrementa tanto el potencial de beneficio como el riesgo de pérdida.

### Ejercicio 2

(1,25 puntos) Hoy, 30 de abril de 2022, las acciones de Telefónica cotizan a 4,6330 €/acción y el futuro sobre estas acciones de vencimiento 17/06/2022 cotiza a 4,49 €/acción. Se prevé que la acción reparta un dividendo de 0,15€/acción el día 17/06, justo antes del vencimiento del contrato de futuros. Utilizando para tus cálculos capitalización simple y base 360, y considerando que no existen oportunidades de arbitraje entre los precios de contado y los precios de los contratos de futuros, ¿cuál será la tasa libre de riesgo?


- **Precio Contado ($S_0$):** 4,633 €
- **Precio Futuro ($F_0$):** 4,49 €
- **Dividendo ($DIV$):** 0,15 €
- **Días al vencimiento ($n$):** 48 días (del 30 de abril al 17 de junio)

Usamos la fórmula del precio del futuro:
$$
F_0 = S_0 \cdot \left(1 + r_f \cdot \frac{n}{360}\right) - DIV
$$


1. Sustituimos los valores:
    $$
    4,49 = 4,633 \cdot \left(1 + r_f \cdot \frac{48}{360}\right) - 0,15
    $$
2. Pasamos el dividendo sumando:
    $$
    4,49 + 0,15 = 4,633 \cdot \left(1 + r_f \cdot \frac{48}{360}\right)
    $$
    $$
    4,64 = 4,633 \cdot \left(1 + r_f \cdot 0,1333\right)
    $$
3. Dividimos ambos lados por $4,633$:
    $$
    \frac{4,64}{4,633} = 1 + r_f \cdot 0,1333
    $$
    $$
    1,00151 = 1 + r_f \cdot 0,1333
    $$
4. Restamos 1:
    $$
    0,00151 = r_f \cdot 0,1333
    $$
5. Despejamos $r_f$:
    $$
    r_f = \frac{0,00151}{0,1333} \approx 0,0113
    $$


La tasa libre de riesgo es:
$$
r_f \approx 0,0113 \quad (1,13\% \text{ anual})
$$



### Ejercicio 3

(1,25 puntos) Un inversor ha vendido hoy 8 contratos de futuros sobre el IBEX 35 en su versión micro para cubrir, durante un mes, una cartera que posee de 10.000 acciones de la empresa AOF, valorada hoy en 5.000 euros y con una beta de 1,5. Indica:  

a) suponiendo que no se ha tenido que realizar ningún redondeo en el cálculo del número de contratos para la cobertura ¿a cuánto estará cotizando hoy el contrato de futuros utilizado?  
b) si, transcurrido un mes, el inversor liquida su posición en acciones y en futuros, calcule el precio final de venta de las acciones teniendo en cuenta la cobertura realizada, suponiendo que la evolución de las acciones de AOF y del IBEX durante este mes se produce según la relación indicada por la beta. Considere que las acciones cotizan pasado el mes a 0,425 €/acción y que la base inicial en el contrato de futuros fue nula.


a) **Cotización del contrato de futuros utilizado**

Sabemos que el número de contratos de futuros necesarios para cubrir una cartera es:

$$
n = \frac{\beta \cdot \text{Valor cartera}}{\text{Valor nocional del contrato}}
$$

En el enunciado:
- $n = 8$ contratos (micro IBEX 35)
- Valor de la cartera: $5.000\,€$
- $\beta = 1,5$

El valor nocional del contrato será:

$$
\text{Valor nocional del contrato} = \frac{\beta \cdot \text{Valor cartera}}{n} = \frac{1,5 \times 5.000}{8} = 937,5\,€
$$

El contrato micro IBEX 35 tiene un multiplicador de $0,1\,€$ por punto, por lo que el precio de cotización del futuro será:

$$
\text{Precio futuro} = \frac{937,5}{0,1} = 9.375 \text{ puntos}
$$

**Respuesta:** El contrato de futuros utilizado cotiza hoy a **9.375 puntos**.



b) **Precio final de venta de las acciones con cobertura**

El objetivo es calcular el **precio final de venta de las acciones teniendo en cuenta la cobertura realizada con los futuros**. Esto significa que debemos determinar el valor neto obtenido por el inversor al liquidar tanto su posición en acciones como su posición en futuros, y luego expresar este valor en términos de un precio por acción.

**Datos iniciales y de la parte a):**
* Número de acciones de AOF: 10.000 acciones
* Valor inicial de la cartera de acciones: 5.000 €
* Beta ($\beta$) de la cartera: 1,5
* Número de contratos de futuros micro IBEX 35 vendidos (posición corta): 8 contratos
* Precio inicial del futuro micro IBEX 35 ($F_0$): 9.375 puntos (calculado en la parte a)
* Multiplicador del contrato micro IBEX 35: 0,1 € por punto
* Precio final de las acciones de AOF ($P_{AOF,1}$): 0,425 €/acción
* La evolución de las acciones y del IBEX se produce según la beta.
* La base inicial en el contrato de futuros fue nula.

Paso 1: Calcular el precio inicial por acción de AOF

$P_{AOF,0} = \frac{\text{Valor inicial de la cartera}}{\text{Número de acciones}}$
$P_{AOF,0} = \frac{5.000\,€}{10.000 \text{ acciones}} = 0,50\,€/\text{acción}$

Paso 2: Calcular el valor final de la cartera de acciones y la pérdida sin cobertura

Valor final de la cartera de acciones ($V_{acciones,1}$):
$V_{acciones,1} = P_{AOF,1} \cdot \text{Número de acciones}$
$V_{acciones,1} = 0,425\,€/\text{acción} \cdot 10.000 \text{ acciones} = 4.250\,€$

Pérdida en la cartera de acciones (sin cobertura):
Pérdida = Valor inicial - Valor final
Pérdida = $5.000\,€ - 4.250\,€ = 750\,€$

Variación porcentual del precio de las acciones de AOF ($\Delta \% P_{AOF}$):
$\Delta \% P_{AOF} = \frac{P_{AOF,1} - P_{AOF,0}}{P_{AOF,0}} = \frac{0,425 - 0,50}{0,50} = \frac{-0,075}{0,50} = -0,15 \text{ o } -15\%$

Paso 3: Calcular la variación porcentual del IBEX 35

Dado que la evolución de las acciones y del IBEX se produce según la beta:
$\Delta \% P_{AOF} = \beta \cdot \Delta \% \text{IBEX}$
$-15\% = 1,5 \cdot \Delta \% \text{IBEX}$

Despejamos la variación del IBEX ($\Delta \% \text{IBEX}$):
$\Delta \% \text{IBEX} = \frac{-15\%}{1,5} = -10\%$

Paso 4: Calcular el precio final del contrato de futuros del IBEX 35

El precio inicial del futuro era $F_0 = 9.375$ puntos. Con una caída del 10%:
$F_1 = F_0 \cdot (1 + \Delta \% \text{IBEX})$
$F_1 = 9.375 \cdot (1 - 0,10) = 9.375 \cdot 0,90 = 8.437,5 \text{ puntos}$


Paso 5: Calcular el resultado de la cobertura con futuros

El inversor vendió 8 contratos (posición corta). Una posición corta se beneficia si el precio del futuro baja.

Ganancia por contrato de futuros:
Ganancia por contrato = $(F_0 - F_1) \cdot \text{Multiplicador}$
Ganancia por contrato = $(9.375 - 8.437,5) \text{ puntos} \cdot 0,1\,€/\text{punto}$
Ganancia por contrato = $937,5 \text{ puntos} \cdot 0,1\,€/\text{punto} = 93,75\,€$

Ganancia total de los 8 contratos de futuros:
Ganancia total futuros = Ganancia por contrato $\cdot$ Número de contratos
Ganancia total futuros = $93,75\,€/\text{contrato} \cdot 8 \text{ contratos} = 750\,€$

Paso 6: Calcular el valor neto final de la posición combinada (acciones + futuros)

Valor neto final = Valor final de la cartera de acciones + Ganancia total futuros
Valor neto final = $4.250\,€ + 750\,€ = 5.000\,€$


Paso 7 (Resultado): Calcular el precio final de venta de las acciones teniendo en cuenta la cobertura

Este precio efectivo es el valor neto final dividido entre el número de acciones:
Precio final efectivo por acción = $\frac{\text{Valor neto final}}{\text{Número de acciones}}$
Precio final efectivo por acción = $\frac{5.000\,€}{10.000 \text{ acciones}} = 0,50\,€/\text{acción}$

4. (1,25 puntos) Hace un mes, un inversor adoptó una posición larga en el contrato de futuros sobre el bono nocional que cotiza en MEFF (valor nominal 100.000 euros, cupón 6%, plazo 10 años), vencimiento junio, siendo en aquella fecha la cotización del contrato de futuros de 139,585. Se pide:  
a) Calcula el resultado que obtendría el inversor si liquida su posición hoy, 9 de mayo, cuando el futuro cotiza a 137,403;  

$$
(137,403-139,585) \times 1000 = - 2182 = (2182)
$$

b) Suponiendo que, a vencimiento, el contrato de futuros cotiza a 135,512, que el entregable más barato son obligaciones del Estado que pagan un cupón anual del 5% y vencen el 30 de julio de 2023 y que el factor de conversión es de 1,0185628, determina el precio que el comprador deberá pagar al vendedor y la liquidación por diferencias que tendrá lugar a través de la Cámara de Compensación.

En esta parte, se calcula el importe de compra del bono y la liquidación por diferencias.
* $F_N$ (Precio del futuro a vencimiento): $135,512$
* MBE (Entregable Más Barato): Obligaciones del Estado, Cupón (C) = 5%, Vencimiento del bono entregable = 30/07
* Factor de conversión (Factor conv): $1,0185628$
* Días para el cálculo de interés corrido (según la anotación en la imagen): $314$ días (base 365): del 30/07/21 al 30/06/22
* Valor Nominal del contrato ($VN$): $100.000$ (implícito de la parte a)

**Cálculo del Importe de Compra (Precio Factura):**

El importe de compra se calcula como:
$$
\text{Importe compra} = \left(135,512 \times \frac{100.000}{100} \times 1,0185628\right) + \left(\frac{5\% \times 100.000}{365} \times 314\right)
$$

*En la fórmula anterior añadimos el cupón.*

$$
\text{Importe compra} = 135,512 \times 100.000 \times 1,0185628 + \frac{5\% \times 100.000}{365} \times 314 = 142.328,85 \, €
$$

* **Nota**: La expresión "$135,512 \times 100.000 \times 1,0185628$" para el primer término debe interpretarse como el cálculo del principal ajustado. Standardmente, esto sería:
$(Precio Futuro_{\%} \times \frac{Valor Nominal}{100}) \times \text{Factor Conversión} = (135,512 \times \frac{100.000}{100}) \times 1,0185628 = (135,512 \times 1000) \times 1,0185628 = 138.038,086 \, €$.
El segundo término es el Interés Corrido:
$\frac{0,05 \times 100.000}{365} \times 314 = \frac{5.000}{365} \times 314 \approx 4.299,37 \, €$.
La suma de estos dos componentes ($138.038,086 + 4.299,37$) es $142.328,85 \, €$. (**Valores ajustados**)

**Cálculo de la Liquidación por Diferencias:**

El inversor tenía una posición larga desde $F_0 = 139,585$. El futuro liquida a $F_N = 135,512$.
La liquidación por diferencias para el inversor es:
$$\text{Liq. por dif.} = (F_N - F_0) \times \text{Multiplicador}$$
$$\text{Liq. por dif.} = (135,512 - 139,585) \times 1000$$
$$\text{Liq. por dif.} = (-4,073) \times 1000 = -4.073 \, €$$
$$\text{Liq. por dif.} = (135,512 - 139,585) \times 1000 = (4073)$$
Esto representa una pérdida de **4.073 €** para el inversor.

* **Liquidación por Diferencias para el inversor:** Una pérdida de $(4.073) \, €$


**CASO PRÁCTICO (5 puntos)**

El 17/03/2022 se publicaba en Reuters la siguiente información sobre la opinión de los analistas respecto de la evolución del precio del petróleo en los próximos meses:

**Morgan Stanley: "Brent a 120 USD en 3er trimestre 2022 por bajos inventarios".** El banco Morgan Stanley aumentó sus previsiones sobre el precio del petróleo Brent a 120 dólares por barril en el 3er trimestre del 2022, citando una implacable reducción de los inventarios mundiales y una menor producción de Rusia.

Uno de los sectores que más directamente se ve afectado por esta subida es la industria manufacturera y, en particular, el sector de refinerías de petróleo, cuya principal materia prima es el petróleo crudo.

Considere el caso de una empresa de refino de petróleo, que necesita adquirir 600.000 barriles de petróleo el 15 julio de 2022. Hoy, día 2 de mayo de 2022, el petróleo cotiza en contado a 105,78 $/barril. La empresa desea realizar una cobertura de la operación de compra con futuros sobre petróleo Brent del Grupo CME (tamaño: 1.000 barriles), vencimiento 15 de julio, que cotizan hoy a $F_0$ = 106,08 $/barril.

Por otra parte, para financiar la operación de compra del petróleo, la empresa pedirá en julio un préstamo a 60 días, al Euribor a 3 meses más un diferencial del 1%. Según las últimas noticias, el Banco Central Europeo no descarta un encarecimiento del precio del dinero en julio. En este sentido, la empresa petrolera también quiere asegurar el coste de su financiación, para lo que utilizará el contrato de futuros sobre el Euribor a 3 meses (Nominal: 1.000.000, plazo 3 meses), vencimiento el 15 de julio, que cotiza hoy a 100,080. La garantía inicial es del 5% del valor del contrato y el margen de mantenimiento del 75% de la garantía inicial.

**Nota:** supondremos que no existe riesgo de tipo de cambio, de forma que 1 euro equivale a 1 dólar a lo largo del periodo de análisis.

**Se pide:**

1.  Indicar el riesgo a que está expuesta la refinería respecto del precio del petróleo, la estrategia a adoptar en futuros para realizar la cobertura y el número de contratos necesarios. Indique si se estaría realizando una cobertura perfecta.

    El riesgo al que se expone es que el precio del petróleo aumente. Como solución puede optar por comprar futuros.

    $$
    \text{Contratos} = \frac{600.000}{1.000} = 600 
    $$

    No hay redondeo, el vencimiento coincide ya que no nos dice nada que nos haga pensar lo contrario y no es sobre el activo subyacente, por ende, estamos ante una **cobertura perfecta**.

2.  Determinar el importe que le supondrá la compra del petróleo en julio, así como el resultado de la cobertura, si se mantiene la posición hasta el vencimiento.

    Precio de compra = $F_0 = 106,08$ 

    Importe $= 600.000 \times = 106,08 = 63.648.000$
    
    Rdo cobertura = $(105,78 \times 106,08) \times 600 \times 1000 = -180.000 = (180.000)$

3.  Teniendo en cuenta el importe que tendrá que financiar para la compra del petróleo en julio, determinar la posición a adoptar en futuros sobre el Euribor a 3 meses para cubrir el coste de esta financiación, indicando el número de contratos necesarios y comentando si se trata de una cobertura perfecta.
   
   Si el Euribor (tipo de interés) sube, el precio del contrato de futuros sobre Euribor (100 - Euribor) baja.
   El riesgo que se tiene es que aumenten los tipos de intereses y disminuya el precio, por ende, venta de futuros (posición **corta**).
   
   $$
    \text{Contratos} = \frac{63.648.000}{1.000.000} \times \frac{60}{90} = 42,432 \approx 42
   $$
   *Se multiplica por 2/3 porque es el Euribor a 3 meses, pero dura 2 (60 días).*

    Al tener el **redondeo** en cuanto al número de contratos, debemos de mencionar que **no** es una cobertura perfecta.


4.  Realizar la liquidación de pérdidas y ganancias y determinar la evolución de la cuenta de garantías, la necesidad de garantías adicionales para cada contrato de futuros sobre tipos de interés y el resultado en este periodo, si la cotización evoluciona del siguiente modo en los tres días siguientes a la contratación:

    | Fecha | Cotización |
    |-------|------------|
    | 03/05 | 101,030    |
    | 04/05 | 100,750    |
    | 05/05 | 99,900     |

    **Cálculo de cuanto vale cada punto:**
    $1.000.000 \times 0,1 \times \frac{3}{12} = 2.500$

    **Parámetros y Supuestos para esta Tabla (por contrato):**

    * **Posición:** Corta (venta) en 1 contrato de futuros sobre Euribor.
    * **Multiplicador:** Una variación de 1 punto en la cotización del futuro (ej. de 100,00 a 101,00) implica una P/L de 2.500 € por contrato.
    * **Cotizaciones del Futuro:**
        * Día 0 (02/05, contratación): $F_0 = 100,080$
        * Día 1 (03/05): $F_1 = 101,030$
        * Día 2 (04/05): $F_2 = 100,750$
        * Día 3 (05/05): $F_3 = 99,900$
    * **Garantía Inicial (GI) por contrato:** Según tu tabla, para el Día 0, la "Cuenta de garantía" es $0,05 \times 1.000.000 = \mathbf{50.000 €}$.
    * **Margen de Mantenimiento (MM) por contrato:** Asumiendo el 75% de la GI (como en el enunciado general del problema): $0,75 \times 50.000 € = \mathbf{37.500 €}$.
    * **Definición de "Valor contable" (según tu tabla):** Cotización del Futuro del día ($F_t$) $\times 2.500 €$.

    **Tabla Completada y Explicada:**

    | Día | Valor contable                                     | G/P diaria          | G/P acumulada       | Garantía adicional | Cuenta de garantía (Saldo Final del Día) |
    |-----|----------------------------------------------------|---------------------|---------------------|--------------------|--------------------------------------|
    | 0   | $100,080 \times 2.500 = \mathbf{250.200 €}$           | -                   | -                   | -                  | **50.000 €** |
    | 1   | $101,030 \times 2.500 = \mathbf{252.575 €}$           | **(2.375 €)** | **(2.375 €)** | **0 €** | **47.625 €** |
    | 2   | $100,750 \times 2.500 = \mathbf{251.875 €}$           | **+700 €** | **(1.675 €)** | **0 €** | **48.325 €** |
    | 3   | $99,900 \times 2.500 = \mathbf{249.750 €}$            | **+2.125 €** | **+450 €** | **0 €** | **50.450 €** |


    **Explicación del Cálculo de Cada Celda:**

    **Día 0 (02/05 - Contratación):**
    * **Valor contable:** $F_0 \times 2.500 € = 100,080 \times 2.500 € = 250.200 €$. (Este es el valor que resulta de multiplicar la cotización por el valor monetario de 1 punto).
    * **G/P diaria:** No aplica, es el día de contratación.
    * **G/P acumulada:** No aplica.
    * **Garantía adicional:** No aplica.
    * **Cuenta de garantía:** Se deposita la Garantía Inicial por contrato: $0,05 \times 1.000.000 € = 50.000 €$.

    **Día 1 (03/05):**
    * **Valor contable:** $F_1 \times 2.500 € = 101,030 \times 2.500 € = 252.575 €$.
    * **G/P diaria:**
        * Cambio en la cotización: $F_1 - F_0 = 101,030 - 100,080 = +0,95$ puntos.
        * P/L para posición CORTA = $-(\text{Cambio en cotización}) \times 2.500 € = -(+0,95) \times 2.500 € = -2.375 €$ (Pérdida).
    * **G/P acumulada:** $-2.375 €$ (P/L del Día 1).
    * **Cuenta de garantía:**
        * Saldo inicial del día (desde Día 0): $50.000 €$.
        * Saldo después de P/L diaria: $50.000 € - 2.375 € = 47.625 €$.
    * **Garantía adicional:**
        * Saldo actual: $47.625 €$.
        * Margen de Mantenimiento (MM): $37.500 €$.
        * Como Saldo ($47.625 €$) > MM ($37.500 €$), no se requiere garantía adicional. Aportación = $0 €$.
        * El saldo final de la cuenta de garantía es $47.625 €$.

    **Día 2 (04/05):**
    * **Valor contable:** $F_2 \times 2.500 € = 100,750 \times 2.500 € = 251.875 €$.
    * **G/P diaria:**
        * Cambio en la cotización: $F_2 - F_1 = 100,750 - 101,030 = -0,28$ puntos.
        * P/L para posición CORTA = $-(\text{Cambio en cotización}) \times 2.500 € = -(-0,28) \times 2.500 € = +700 €$ (Ganancia).
    * **G/P acumulada:** $-2.375 € (\text{acumulada Día 1}) + 700 € (\text{G/P Día 2}) = -1.675 €$.
    * **Cuenta de garantía:**
        * Saldo inicial del día (desde Día 1): $47.625 €$.
        * Saldo después de P/L diaria: $47.625 € + 700 € = 48.325 €$.
    * **Garantía adicional:**
        * Saldo actual: $48.325 €$.
        * MM: $37.500 €$.
        * Como Saldo ($48.325 €$) > MM ($37.500 €$), no se requiere garantía adicional. Aportación = $0 €$.
        * El saldo final de la cuenta de garantía es $48.325 €$.

    **Día 3 (05/05):**
    * **Valor contable:** $F_3 \times 2.500 € = 99,900 \times 2.500 € = 249.750 €$.
    * **G/P diaria:**
        * Cambio en la cotización: $F_3 - F_2 = 99,900 - 100,750 = -0,85$ puntos.
        * P/L para posición CORTA = $-(\text{Cambio en cotización}) \times 2.500 € = -(-0,85) \times 2.500 € = +2.125 €$ (Ganancia).
    * **G/P acumulada:** $-1.675 € (\text{acumulada Día 2}) + 2.125 € (\text{G/P Día 3}) = +450 €$.
    * **Cuenta de garantía:**
        * Saldo inicial del día (desde Día 2): $48.325 €$.
        * Saldo después de P/L diaria: $48.325 € + 2.125 € = 50.450 €$.
    * **Garantía adicional:**
        * Saldo actual: $50.450 €$.
        * MM: $37.500 €$.
        * Como Saldo ($50.450 €$) > MM ($37.500 €$), no se requiere garantía adicional. Aportación = $0 €$.
        * El saldo final de la cuenta de garantía es $50.450 €$.
    
    *Rdo total = 450 x 42 = 18.900*

    

5.  Si el Euribor a 3 meses se sitúa en el 0,15% en la fecha de liquidación del contrato de futuros, coincidente con la fecha de contratación del préstamo a corto plazo por parte de la empresa, determina el resultado obtenido en futuros en esta operación de cobertura y calcula el coste de financiación de la empresa teniendo en cuenta la cobertura (utilice Actual/360).


    **1. Resultado obtenido en la operación de futuros**

    Datos iniciales:

    - Precio de entrada de los futuros sobre Euribor: $F_{\text{entrada}} = 100{,}08$
    - Euribor a 3 meses en la fecha de liquidación: $i_M = 0{,}15$ %

    Cálculo del precio de liquidación del futuro:

    $$
    F_N = 100 - i_M = 100 - 0{,}15 = 99{,}85
    $$

    Resultado en futuros (posición corta en 42 contratos, con multiplicador de 2.500 € por punto):

    $$
    \text{Resultado} = (F_{\text{entrada}} - F_N) \times 2.500 \times 42
    $$

    $$
    = (100{,}08 - 99{,}85) \times 2.500 \times 42 = 0{,}23 \times 2.500 \times 42 = 575 \times 42 = 24.150
    $$

    Este resultado representa una ganancia para la empresa, ya que el precio del futuro bajó (de 100,08 a 99,85) y la empresa tenía una posición corta.

    **2. Coste de financiación con cobertura**

    **a) Cálculo directo del tipo de interés con cobertura**

    Tipo de interés sin cobertura:

    $$
    i_{\text{sin cob}} = 0{,}15 + 1 = 1{,}15
    $$

    Tipo de interés efectivo con cobertura:

    $$
    i_{\text{con cob}} = 1{,}15 - 0{,}23 = 0{,}92
    $$

    Interpretado como un tipo efectivo del 0,92 % anual.

    **b) Justificación alternativa con valores monetarios**

    Importe del préstamo: 63.648.000 €  
    Ganancia en futuros: 24.150 €  
    Intereses al 1,15 % por 60 días (base Actual/360):

    $$
    M = 63.648.000 \left(1 + 0{,}0115 \cdot \frac{60}{360} \right) = 63.769.992
    $$

    Ajustando por la ganancia en futuros:

    $$
    63.648.000 + 24.150 = \frac{63.769.992}{1 + i \cdot \frac{60}{360}} \Rightarrow 63.672.150 = \frac{63.769.992}{1 + i \cdot \frac{60}{360}}
    $$

    Resolviendo:

    $$
    1 + i \cdot \frac{60}{360} = \frac{63.769.992}{63.672.150} \approx 1{,}0015366
    $$

    $$
    i \approx 0{,}922
    $$

    Interpretado como un tipo efectivo del 0,922 % anual.

    **Conclusión final:**

    - Resultado en futuros: ganancia de **24.150 €**
    - Coste de financiación efectivo con cobertura: **0,92 % anual**




