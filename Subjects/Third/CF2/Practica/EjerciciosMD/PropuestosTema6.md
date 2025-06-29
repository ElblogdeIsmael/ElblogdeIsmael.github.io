---
title: "Contabilidad Financiera II"
subtitle: "Ejercicios propuestos - Tema 6"
author: "Ismael Sallami Moreno"
date: "Mayo de 2025"
lang: es

# Opciones específicas de la plantilla Eisvogel para la portada
titlepage: true
titlepage-logo: "images/logo-universidad.jpg" # COLOCA TU LOGO AQUÍ (ej. logo-mi-uni.png)
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

# Ejercicios Propuestos Tema 6: Impuesto sobre beneficios


La empresa ALFA, S. L. ha adquirido el 1 de enero del año 2020 una maquinaria por valor de 40.000 €, con una vida útil estimada de 10 años. Según la normativa fiscal, la empresa puede aplicar un coeficiente máximo de amortización del 8%.

Los datos para la contabilización del impuesto sobre el beneficio de las sociedades del ejercicio 2020 son los siguientes: beneficio contable, 60.000 €; deducciones fiscales, 1.000 € y pagos a cuenta del Impuesto de Sociedades, 500 €. Los datos para la contabilización del impuesto sobre el beneficio de sociedades del último ejercicio en el que se producen efectos fiscales de la amortización de la maquinaria son los siguientes: beneficio contable, 40.000 €; deducciones fiscales, 2.000 € y pagos a cuenta del Impuesto de Sociedades, 800 €.

**SE PIDE:** Sabiendo que el tipo de gravamen del Impuesto de Sociedades es del 30%, contabilice las siguientes operaciones:

* Cálculo del impuesto corriente:
  * Debemos de tener en cuenta que en cuanto a a amortización fiscal, esta es como máximo del 8%.

| Año  | Contable (VIDA ÚTIL: 10 AÑOS) | Fiscal (VIDA ÚTIL: 12.5 AÑOS) | Diferencia Liquidación | Signo |
|------|-------------------------------|--------------------------------|------------------------|-------|
| 2020 | 4.000,00                     | 3.200,00                      | 800,00                | (+)   |
| 2021 | 4.000,00                     | 3.200,00                      | 800,00                | (+)   |
| 2022 | 4.000,00                     | 3.200,00                      | 800,00                | (+)   |
| 2023 | 4.000,00                     | 3.200,00                      | 800,00                | (+)   |
| 2024 | 4.000,00                     | 3.200,00                      | 800,00                | (+)   |
| 2025 | 4.000,00                     | 3.200,00                      | 800,00                | (+)   |
| 2026 | 4.000,00                     | 3.200,00                      | 800,00                | (+)   |
| 2027 | 4.000,00                     | 3.200,00                      | 800,00                | (+)   |
| 2028 | 4.000,00                     | 3.200,00                      | 800,00                | (+)   |
| 2029 | 0,00                         | 3.200,00                      | -3.200,00             | Ajuste (+) |
| 2030 | 0,00                         | 3.200,00                      | -3.200,00             | Ajuste (+) |
| 2031 | 0,00                         | 3.200,00                      | -3.200,00             | Ajuste (+) |
| 2032 | 0,00                         | 1.600,00                      | -1.600,00             | Ajuste (+) |
| **Total** | **40.000,00**           | **40.000,00**                 |                        |       |

**Nota**


En los años de reversión (2029-2032), la amortización fiscal (3.200 €) es mayor que la contable (0 €). Esto significa que:

- Contablemente, no hay gasto de amortización.
- Fiscalmente, sí hay gasto de amortización.

Para pasar del Resultado Contable a la Base Imponible Fiscal, debemos restar esos 3.200 € (o 1.600 €) que fiscalmente son deducibles. Esta resta disminuye la Base Imponible Fiscal.

Por lo tanto, la interpretación del "Ajuste (+)" en esos años debería ser que estas diferencias temporarias (ahora deducibles) se están aplicando para reducir la base imponible fiscal y, consecuentemente, el impuesto a pagar. Aunque el número en la columna "Diferencia Liquidación" es negativo (-3.200 €), el efecto en el cálculo de la base imponible es de una deducción fiscal, lo cual es beneficioso para la empresa y por eso se puede considerar un "ajuste positivo" en el sentido de que favorece al contribuyente al reducir la base.

Es crucial entender que, en los primeros años, la empresa está pagando más impuestos de lo que lo haría si aplicara la amortización contable (diferencia temporaria imponible). En los años finales, la empresa pagará menos impuestos gracias a la amortización fiscal pendiente (diferencia temporaria deducible). La tabla parece estar enfocada en cómo estas diferencias afectan la base imponible a lo largo del tiempo, y el "Ajuste (+)" en los años de reversión indica que se está aplicando un beneficio fiscal que reduces la base imponible.

---


| Concepto                                | 2020      | 2032      |
|-----------------------------------------|-----------|-----------|
| Rdo. Ejercicio                          | 60.000,00 | 40.000,00 |
| (+/-) Diferencias Permanentes           | 0,00      | 0,00      |
| (+/-) Diferencias Temporarias (maquina) | 800,00    | -1.600,00 |
| (=) BI Previa                           | 60.800,00 | 38.400,00 |
| (-) Rdos. Negativos años anteriores     | 0,00      | 0,00      |
| (=) Bimponible                          | 60.800,00 | 38.400,00 |
| (x) Tipo Gravamen (30%)                 | 0,30      | 0,30      |
| (=) Cuota Íntegra                       | 18.240,00 | 11.520,00 |
| (-) Deducciones/Bonificaciones          | -1.000,00 | -2.000,00 |
| (=) Cuota Líquida (6300)                | 17.240,00 | 9.520,00  |
| (-) Retenciones y P/Cta (473)           | -500,00   | -800,00   |
| (=) Cuota Diferencial (4752)            | 16.740,00 | 8.720,00  |

Llegado hasta este punto, el impuesto corriente coincide con la cuota líquida y el asiento quedaría de la siguiente manera:

|DEBE|Asiento relativo al impuesto corriente del ejercicio 2020|HABER|
|-------|-------------------------------------------------------------|-------|
|17.240 | 6300. Impuesto corriente. ||
|473 | H.P. retenciones y pagos a cuenta|500|
|4752 | H.P. Acreedora por impuesto de sociedades ||

Vemos que el último año con amortización fiscal es el 2032.

|DEBE|Asiento relativo al impuesto corriente del último ejercicio con efectos fiscales de la amortización de la maquinaria|HABER|
|-------|-------------------------------------------------------------|-------|
|9.520 | 6300. Impuesto corriente. ||
|473 | H.P. retenciones y pagos a cuenta|800|
|4752 | H.P. Acreedora por impuesto de sociedades |8.720|

En cuanto al impuesto diferido, vemos que a finales del 2032 tenemos una diferencia temporaria negativa, por ende, 1.600 x 30% = 480
<!-- |DEBE|Asiento relativo al impuesto diferido del último ejercicio con efectos fiscales de la amortización de la maquinaria|HABER|
|-------|-------------------------------------------------------------|-------|
|||| -->
```
Asiento relativo al impuesto diferido del último ejercicio 
con efectos fiscales de la amortización de la maquinaria

480 6301. Impuesto diferido 
    a 474 Activo por diferencias temporarias deducibles

```

## Ejercicio Propuesto 2

La empresa C, S.L. ha obtenido un Resultado antes de impuestos de 100.000 € en el año 2022. Se tiene la siguiente información adicional:

1. El 5/3/20x22 le impusieron una sanción tributaria por importe de 500 €.
2. El 30/6/20x22 adquirió un elemento de transporte por 30.000 € y vida útil 3 años. La sociedad se acoge a libertad de amortización deduciéndose la mitad en el año 20x22 y la otra mitad en el año 20x23.
3. La sociedad tiene una Base Imponible negativa del ejercicio 2021 de 20.000 €, que contabilizó el año anterior.
4. La sociedad tiene derecho a una deducción fiscal de 4.000 €.
5. Las Retenciones y pagos a cuenta realizados durante el año 20x22 es de 60.000 €.

Sabiendo que el tipo impositivo es del 25%, **SE PIDE:** Contabilizar el 31/12/20x22.

* Asiento 31 de dic de 2022. Impuesto corriente del ejercicio 2022

| AÑO  | CONTABLE | FISCAL   | DIFERENCIA (Contable - Fiscal) | SIGNO/TIPO |
|------|----------|----------|-------------------------------|------------|
| 2022 | 5.000,00 | 15.000,00 | -10.000,00                   | (-)        |
| 2023 | 10.000,00 | 15.000,00 | -5.000,00                    | (-)        |
| 2024 | 10.000,00 | 0,00      | 10.000,00                    | Ajuste (-) |
| 2025 | 5.000,00  | 0,00      | 5.000,00                     | Ajuste (-) |

| AÑO  | CONTABLE | FISCAL | DIFERENCIA (Contable - Fiscal) | SIGNO/TIPO |
|------|----------|--------|-------------------------------|------------|
| 2022 | 500,00   | 0,00   | 500,00                        | (+)        |

```
100.000 + 500 -10.000 = BI PREVIA = 90.500
BI PREVIA - 20.000 = 70.500 = BI
BI X TIPO DE GRAVAMEN = BI X 0,25 = CUOTA ÍNTEGRA = 17.625 = CI
CI - DEDUCCIONES Y BONIFICACIONES = CI - 4.000 = 13.625 = 
= CUOTA LÍQUIDA (impuesto corriente)

13.625 (6300) impuesto corriente 
    a 
    473 H.P retenciones y pagos a cuenta 60.000
    H.P Deudora por devolución de impuestos 46.375

```

* 31/12/2022 Diferencia del ejercicio 2022 referente a la sanción

```
Al ser una multa, corresponde con una diferencia PERMANENTE, 
la cual no genera asiento contable.

NPAC
```

* 31/12/2022 Diferencia del ejercicio 2022 TEMPORARIA de la libertad de amortización

```
Viendo la tabla, vemos que la diferencia de lo contable y fiscal = 10.000

10.000 x 0,25 = 2.500

2.500 (6301) Impuesto diferido 
    a
    (479) Pasivo por diferencias temporarias imponibles 2.500

¿Por que se usa aquí la cuenta de pasivo?

Una diferencia temporaria que genera un ahorro fiscal en 
el presente (Base Imponible actual más baja) pero que 
resultará en un mayor pago de impuestos en el futuro 
(Base Imponible futura más alta) es una diferencia temporaria imponible.
Las diferencias temporarias imponibles dan lugar
 al reconocimiento de un Pasivo por Impuesto Diferido 
 (cuenta 479). Este pasivo representa la obligación que 
 tiene la empresa de pagar más impuestos en el futuro 
 debido a la reversión de esta diferencia temporal.

En resumen, se usa un pasivo porque la libertad de 
amortización te permite pagar menos 
impuestos ahora (ahorro fiscal), pero te obliga a 
pagar más en el futuro cuando esa diferencia se compense.
```

* 31/12/2022 Diferencia temporaria de la base imponible negativa

```
Aquí se refiere a la del año anterior, que recordemos que era 20.000, 
por ende nos queda: 20.000 x 0,25 = 5.000 = z

z (6301) Impuesto diferido 
    a
    (4745) Crédito por Pérdidas a compensar del ejercicio z 

```

## Ejercicio Propuesto 3

La empresa MOORE, SA, adquiere el 1 de julio de 2018 un vehículo para el transporte de su personal por importe de 20.000 €. Según la contabilidad, la vida útil se estima en 5 años y su valor residual es nulo. A efectos fiscales, el límite máximo de amortización son 4 años.

Se conocen los siguiente datos a efectos de la liquidación del impuesto sobre beneficios relativos al ejercicio 2019:  
a) el tipo de gravamen de este ejercicio y de los anteriores es del 30%;  
b) la empresa obtuvo un beneficio antes de impuestos de 85.000 €;  
c) la empresa contabilizó como gasto una sanción tributaria de 900 € que no es deducible fiscalmente;  
d) además, debido a pérdidas en ejercicios anteriores, tiene acumuladas unas bases imponibles negativas de 5.625 €;  
e) las retenciones fiscales ascienden a 2.000 €;  
f) ha sido beneficiaria de unas bonificaciones fiscales por valor de 3.000 €.

**Se pide:** Liquidar el impuesto de sociedades y contabilizar las siguientes operaciones:

**Liquidación del Impuesto de Sociedades 2019**

| Año  | Contable | Fiscal | Diferencia (Contable - Fiscal) | Signo/Tipo |
|------|----------|--------|-------------------------------|------------|
| 2018 | 2.000,00 | 5.000,00 | -3.000,00                   | (-)        |
| 2019 | 4.000,00 | 5.000,00 | -1.000,00                   | (-)        |
| 2020 | 4.000,00 | 5.000,00 | -1.000,00                   | (-)        |
| 2021 | 4.000,00 | 5.000,00 | -1.000,00                   | (-)        |
| 2022 | 4.000,00 | 0,00     | 4.000,00                    | Ajuste (-) |
| 2023 | 2.000,00 | 0,00     | 2.000,00                    | Ajuste (-) |

| Año  | Contable | Fiscal | Diferencia (Contable - Fiscal) | Signo/Tipo |
|------|----------|--------|-------------------------------|------------|
| 2019 | 900,00   | 0,00   | 900,00                        | (+)        |

| Concepto                                | 2019       |
|-----------------------------------------|------------|
| Rdo. Ejercicio                          | 85.000,00  |
| (+/-) Diferencias Permanentes           | 900,00     |
| (+/-) Diferencias Temporarias           | -1.000,00  |
| (=) BI Previa                           | 84.900,00  |
| (-) Rdos. Negativos años anteriores     | -5.625,00  |
| (=) Bimponible                          | 79.275,00  |
| (x) Tipo Gravamen (30%)                 | 0,30       |
| (=) Cuota Íntegra                       | 23.782,50  |
| (-) Deducciones/Bonificaciones          | -3.000,00  |
| (=) Cuota Líquida                       | 20.782,50  |
| (-) Retenciones y P/Cta                 | -2.000,00  |
| (=) Cuota Diferencial                   | 18.782,50  |

* Asiento del impuesto diferido en 2018 

```
3.000 de la amortización del elemento de transporte: 3.000 x 30% = 900 = j

j (6301) Impuesto diferido
    a
    479 Pasivo por diferencia temporaria imponible 
    (Es pasivo debido a que la fiscal > contable) j
```
* Impuesto corriente de 2019

```
De manera análoga a los casos anteriores: cargamos la 
cuenta 6300 por la cantidad de 20.783,50 ...

```

* Impuesto diferido de 2019, relativo a la compensación de pérdidas

```
Según el enunciado: 5.625 x 30% = 1.687,5 = i

i (6301) ...
    a 
    (4745) Crédito por pérdidas a compensar del ejercicio i
```

**NO LO PIDE**: de manera análoga en este mismo momento se debería de realizar las operaciones pertinentes con la amortización del elemento de transporte, siendo 1000 x 30%

* Imputación a resultados del impuesto sobre sociedades del ejercicio 2019

```
Cuando nos pide imputación a rdo en base al impuesto sobre sociedades
    - Impuesto diferido
    - Impuesto corriente

Corriente: j (notado más arriba)
Diferido: i + la parte de la amortización: i + 1000 x 30% = 1.987,5 = r

r + j (129) Rdo del ejercicio
    a
    (6301)... r
    (6300)... j
```

## Ejercicio Propuesto 4

La empresa HARTA, S.A. ha recibido el 31/08/20X0 una notificación de la Junta de Andalucía en la que se le comunica que está contaminando el medioambiente y que va a proceder a abrir expediente y su correspondiente sanción, catalogada como muy grave y que puede llegar hasta los 400.000 €. 

Reunido el equipo de abogados de HARTA, S.A., se estima que es altamente probable que seamos sancionados, pero que el proceso se dilatará en el tiempo unos tres años. Igualmente, se estima que el importe a pagar será de 300.000 € (valor actualizado a 31/12/20X0).

Durante el año 20X1, el tipo de interés es del 5% importe por el que se actualiza, en su caso, la estimación de la obligación previsible de pago. Una vez considerada esta actualización, en la misma fecha, el equipo de abogados revisa la previsión del importe a pagar por la sanción y estima que está será inferior en 50.000 € a la inicialmente estimada (se sabe que el expediente estará resuelto el próximo año).

Finalmente, la sentencia judicial, dictada el 04/04/20X2, condena a HARTA, S.A. a pagar un total de 250.000 €. Desde el punto de vista fiscal, la empresa elaboró un plan aceptado por la Administración Tributaria en 20X0 para que el 50% del importe contabilizado de la provisión sea fiscalmente deducible.

Por otro lado, esta empresa presenta la siguiente liquidación del impuesto sobre sociedades correspondiente a los ejercicios 20X0, 20X1 y 20X2. La empresa adquirió el 1 de enero de 20X0 una maquinaria especializada para hacer frente a los daños medioambientales señalados anteriormente. Esta maquinaria se adquiere por un importe de 3.000.000 euros, cuya vida útil a efectos contables es de 3 años, mientras que, según la norma fiscal, y acogiéndose a la libertad de amortización, la empresa decide amortizarlo en su totalidad el primer año. El método de amortización contable es el lineal. Por otro lado, HARTA está compensando bases imponibles negativas de ejercicios anteriores, terminando en 20X0 este proceso.

| CONCEPTO (importes en miles de euros) | 20X0 | 20X1 | 20X2 |
|---------------------------------------|------|------|------|
| Resultado Contable Antes de Impuestos | 3850 | 4.000 | 6.000 |
| (+/-) Ajustes de las diferencias derivadas de la provisión | 150 | - | - |
| (+/-) Ajustes de las diferencias derivadas de la amortización maquinaria | (2.000) | 1.000 | 1.000 |
| (=) Base Imponible Previa | 2.000 | 5.000 | 7.000 |
| (-) Bases Imponibles negativas de ejercicios anteriores | (1.000) | - | - |
| (=) Base Imponible | 1.000 | 5.000 | 7.000 |
| x Tipo de gravamen | 30% | 30% | 30% |

Veamos las diferencias del cuadro de liquidación: (**OJO**: LAS CANTIDADES EN EL CUADRO ESTÁN EN MILES)

1) Diferencia por la provisión: es una diferencia permanente positiva, porque solo la
deducimos en el 2020, por la mitad de lo provisionado. Normalmente las sanciones no se deducen,
pero aquí nos dicen expresamente que se deduce el 50%. En contabilidad hemos provisonado por 300.000 €,
y en fiscal hemos deducido la mitad. La diferencia (300.000 - 150.000 =150.000 (+)), la tenemos sólo en
ese año.
2) Diferencia por la amortización: En contabilidad amortizamos 3.000.000 / 3 = 1.000.000 €/año (se compra el 1/ene),
mientras que en fiscal lo deducimos todo en el 2020. La diferencia (1.000.000 - 3.000.000 = -2.000.000 €), vemos que
es negativa en el primer año. Se trata, por tanto de una DT (-), que en 2021 y 2022 pasa a ser "ajuste de DT (-)".
3) Diferencias negativas de años anteriores: Sólo las tenemos en el 2020


| DEBE | Si procede, asiento contable para la compensación de bases imponibles negativas de ejercicios anteriores en el ejercicio 20X0 | HABER |
|------|---------------------------------------------------------------------------------------------|-------|
|    300  |                6301. Impuesto Diferido                                                                             |       |
||4745. Crédito por Pérdidas a compensar del Ejercicio|$1000 \times 0,3 = 300$|

| DEBE | Si procede, asiento contable de la diferencia derivada de la amortización en el ejercicio 20X1 | HABER |
|------|---------------------------------------------------------------------------------------------|-------|
|   300   |  479. Pasivos por diferencias temporarias imponibles                                                              |       |
||6301. ISOC Impuesto Diferido|300|

* Antes debemos de ver el saldo:
  * La primera provisión fue dotada por 300.000
  * En el 2021 se anotaron intereses de cantidad 15.000
  * Ajustes de quitar 50.000
  * Reclasificamos (cuenta C/P 5295)
  * Saldo: 265.000
  * Nos condenana a pagar 250.000

| DEBE | Asiento contable derivado del pago de la provisión en el ejercicio de 20X2 | HABER |
|------|-------------------------------------------------------------|-------|
|      |                   5295. Provision CP Actuaciones Medioambientales                                          |       |
||572...|250.000|
||7955...|15.000|

## Ejercicio Propuesto 5

La empresa PORTÓN, S.A. presenta la siguiente información del año 20X3 relacionada con la liquidación del impuesto sobre sociedades:

1. El resultado contable antes de impuestos asciende a **400.000 € de beneficio**.
2. En el ejercicio 20X2 se contabilizó como gasto un deterioro de valor de créditos por operaciones de tráfico de **100.000 €**. Fiscalmente este gasto era deducible en ese ejercicio la mitad de dicho importe, el resto lo será el ejercicio 20X3.
3. El 01/01/20X1 se adquirió una maquinaria por **400.000 €**. Contablemente se amortiza en 4 años y se amortiza de manera lineal. La normativa fiscal permite la amortización máxima permitida por el régimen de amortización acelerada del **50% del valor total de la maquinaria**, por lo que debe deducir fiscalmente esa cantidad.
4. El 01/07/20X3 se vende por **400.000 €** un inmovilizado obteniendo un beneficio de **250.000 €**. La venta se realizó a crédito en dos plazos, uno a cobrar en el año 20X4 y otro en el año 20X5 (fiscalmente se imputa, según la normativa, por igual importe en ambos ejercicios de acuerdo con el calendario de cobro de los plazos).
5. La empresa cobró el importe de un premio por valor de **5.000 €**. Esta cantidad está exenta fiscalmente.
6. La sociedad tiene una Base Imponible negativa del ejercicio 20X2 de **80.000 €**, que contabilizó el año anterior.

Las deducciones de la cuota ascienden a **5.000 €** y las retenciones y pagos a cuenta a **30.000 €**.

### Liquidación del Impuesto sobre Beneficios del año 20X3:

| Concepto                                | Importe (€) |
|-----------------------------------------|-------------|
| Beneficio antes de impuestos            | 400.000,00  |
| Ajustes                                 | -50.000,00  |
| Diferencia apartado 2 deterioro         | -50.000,00  |
| Diferencia apartado 3 libertad amortización | -200.000,00 |
| Diferencia apartado 4 venta inmovilizado | -250.000,00 |
| Diferencia apartado 5 premio            | -5.000,00   |
| Base imponible previa                   | 195.000,00  |
| Base imponible negativa ejercicios anteriores | -80.000,00 |
| Base imponible                          | 115.000,00  |
| Tipo de gravamen                        | 25%         |

| Concepto                                | Importe (€) |
|-----------------------------------------|-------------|
| Cuota íntegra (25%)                     | 28.750,00   |
| Deducción                               | -5.000,00   |
| Cuota líquida                           | 23.750,00   |
| Retenciones y pagos a cuenta            | -30.000,00  |
| Cuota diferencial                       | -6.250,00   |



SE PIDE:

Realizar los asientos contables en el libro diario de la sociedad PORTÓN, S.A. relativos a las siguientes operaciones:


1. **Deterioro de Clientes (Diferencia Temporaria - Varios Años)**  
    | Año  | Contable (€) | Fiscal (€) | Diferencia Liquidación (€) | Signo |
    |------|--------------|------------|----------------------------|-------|
    | 2022 | 100.000,00   | 50.000,00  | 50.000,00                  | (+)   |
    | 2023 | 0,00         | 50.000,00  | -50.000,00                 | Ajuste (+) |

2. **Maquinaria (Diferencia Temporaria - Varios Años)**  
    | Año  | Contable (€) | Fiscal (€) | Diferencia Liquidación (€) | Signo |
    |------|--------------|------------|----------------------------|-------|
    | 2021 | 100.000,00   | 200.000,00 | -100.000,00                | (-)   |
    | 2022 | 100.000,00   | 200.000,00 | -100.000,00                       | (-)      |
    | 2023 | 100.000,00   | 0,00       | 100.000,00                 | Ajuste (-) |
    | 2024 | 100.000,00   | 0,00       | 100.000,00                 | Ajuste (-) |

3. **Beneficio por Venta de Inmovilizado (Diferencia Temporaria - Varios Años)**  
    | Año  | Contable (€) | Fiscal (€) | Diferencia Liquidación (€) | Signo |
    |------|--------------|------------|----------------------------|-------|
    | 2023 | -250.000,00  | 0,00       | -250.000,00                | (-)   |
    | 2024 | 0,00  | -125.000,00| 125.000,00                       |  Ajuste (-)     |
    | 2025 | 0,00  | -125.000,00| 125.000,00                       |  Ajuste (-)     |

4. **Premio (Diferencias Permanentes - Un Año)**  
    | Año  | Contable (€) | Fiscal (€) | Diferencia (€) | Signo |
    |------|--------------|------------|----------------|-------|
    | 2023 | -5.000,00    | 0,00       | -5.000,00      | (-)   |

**Asientos Contables**

1. **Asiento contable por el impuesto corriente a 31/12/20X3**  
   | DEBE | Impuesto corriente 31.12.X3 | HABER |
   |------|----------|-------|
   |  23.750    |  6300. Impuesto Corriente        |       |
    ||473. H.P retenciones y pagos a cuenta|30.000|
    |6.250|4709. H.P Deudora por devolución de impuestos||

2. **Impuesto diferido correspondiente al gasto por deterioro del punto 2**  
   | DEBE | Concepto | HABER |
   |------|----------|-------|
   |   12.500   |   6301...       |       |
    ||474. Activo por diferencias temporarias deducibles|12.500 = $50.000 \times 0,25$|

3. **Impuesto diferido correspondiente a la maquinaria del punto 3 y a la venta del inmovilizado del punto 4**  
   | DEBE | Concepto | HABER |
   |------|----------|-------|
   |  25.000    |  479. Pasivos por diferencias temporarias imponibles        |       |
    ||6301...|25.000|
    ||479...|62.500 (venta)|
    |62.500|6301...||


4. **Impuesto diferido relativo a la compensación de pérdidas del punto 6**  
   | DEBE | Concepto | HABER |
   |------|----------|-------|
   | 20.000     |  6301...        |       |
   ||4745. Crédito por Pérdidas a compensar del ejercicio|20.000|

## Ejercicio Propuesto 6

La empresa VICENTEMAZO, S.A. ha obtenido un resultado antes de impuestos de **500.000 €** en el año 20X3. Se dispone de la siguiente información adicional:

1. La sociedad tiene una base imponible negativa de **50.000 €** pendiente de compensar (contabilizada el año 20X1).
2. Las diferencias temporarias existentes son las siguientes:
   - **Diferencia deducible** originada en el ejercicio 20X3 por **100.000 €**.
   - **Diferencia imponible** originada en el ejercicio 20X3 por **50.000 €**.
   - **Reversión de diferencia deducible** originada en el ejercicio 20X2 por **200.000 €**.
   - **Reversión de diferencia imponible** originada en el ejercicio 20X2 por **25.000 €**.
3. El 23/05/20X3 le impusieron una sanción tributaria por importe de **2.000 €**.
4. Las deducciones y bonificaciones en la cuenta ascienden a **30.000 €**.
5. Las retenciones y pagos a cuenta realizados por la empresa en el ejercicio ascienden a **70.000 €**.

**SE PIDE:**
Sabiendo que el tipo impositivo es del **25%**, realizar los asientos contables en el libro diario de la sociedad VICENTEMAZO relativos a las siguientes operaciones:



**Asientos Contables**

| Concepto                                | 2023       |
|-----------------------------------------|------------|
| Rdo. Ejercicio                          | 500.000,00 |
| (+/-) Diferencia deducible 2023 (DT+)   | 100.000,00 |
| (+/-) Diferencia imponible 2023 (DT-)   | -50.000,00 |
| (+/-) Reversión Dif. deducible 2022 (AJUSTE DT +) | -200.000,00 |
| (+/-) Reversión Dif. imponible 2022 (AJUSTE DT -) | 25.000,00  |
| (+/-) Diferencias Permanentes (MULTA)   | 2.000,00   |
| (=) BI Previa                           | 377.000,00 |
| (-) Rdos. Negativos años anteriores     | -50.000,00 |
| (=) Bimponible                          | 327.000,00 |
| (x) Tipo Gravamen (25%)                 | 0,25       |
| (=) Cuota Íntegra                       | 81.750,00  |
| (-) Deducciones/Bonificaciones          | -30.000,00 |
| (=) Cuota Líquida                       | 51.750,00  |
| (-) Retenciones y P/Cta                 | -70.000,00 |
| (=) Cuota Diferencial                   | -18.250,00 |

| DEBE | impuesto corriente 31.12.X3 | HABER |
|------|-------------------------------------------------------------|-------|
|   51.750   |     6300...                                                        |       |
|      |             473...                                                |  70.000     |
| 18.250     |                4709. H.P Deudora por devolución de impuestos                                             |       |

| DEBE | compensación de bases imponibles negativas | HABER |
|------|-------------------------------------------------------------|-------|
| 12.500 | 6301. ISOC Impuesto Diferido                              |       |
|       | 4745. Crédito por Pérdidas a compensar del Ejercicio       | 12.500 |

| DEBE | contabilización de la diferencia temporaria imponible originada 20X3 | HABER |
| DEBE | contabilización de la diferencia temporaria imponible originada 20X3 | HABER |
|------|-------------------------------------------------------------|-------|
| 12.500 | 6301. ISOC Impuesto Diferido                              |       |
|       | 479. Pasivos por diferencias temporarias imponibles        | 12.500 |

| DEBE | asiento correspondiente de la diferencia temporaria deducible del ejercicio 20X2 | HABER |
|------|---------------------------------------------------------------------------------------------|-------|
|  50.0000    |       6301...                                                                                      |       |
|      |             474. Activo por diferencias temporarias deducibles                                                                                |       |
|      |                                                                                             |   50.000    |

## Ejercicio Propuesto 7

En el ejercicio económico 20X2 la sociedad RECOR S.A. ha obtenido un beneficio antes de impuestos de **100.000 €**, que incluye una sanción por incumplimiento de la normativa medioambiental de **5.000 €** (**no deducible**). Además, esta compañía ha aplicado una aceleración de amortizaciones a una maquinaria adquirida el 01/04/20X2 por **20.000 €**, con vida útil de 5 años, la cual será fiscalmente amortizada en 2 años a partir de la fecha de compra.

Por otro lado, esta empresa ha contabilizado en 20X2 un deterioro de valor por **30.000 €** que en este año solo es deducible en el **40%**, si bien el **60% restante será deducible en 20X3**.

Además, al cierre de 20X2 existe una base imponible negativa pendiente de compensar del año 20X1 por **10.000 €**. Las deducciones fiscales que corresponden en el ejercicio 20X2 son de **3.000 €** y las retenciones y pagos a cuenta ascienden a **12.125 €**.

SE PIDE:
Sabiendo que el tipo impositivo aplicado es el **25%**, reflejo contable en el libro diario de las siguientes operaciones:

SANCIÓN - DIFERENCIAS PERMANENTES (UN AÑO)

| Año  | Contable (€) | Fiscal (€) | Diferencia (€) | Signo |
|------|--------------|------------|----------------|-------|
| 2022 | 5.000,00     | 0,00       | 5.000,00       | (+)   |


AMORTIZACIÓN - DIFERENCIA TEMPORARIA (VARIOS AÑOS)

| Año  | Contable (€) | Fiscal (€) | Diferencia (€) | Signo |
|------|--------------|------------|----------------|-------|
| 2022 | 3.000,00     | 7.500,00   | -4.500,00      | (-)   |
| 2023 | 4.000,00     | 10.000,00  | -6.000,00      |  (-) |
| 2024 | 2.500,00     | 0,00       | 1.500,00       | Ajuste (-) |
| 2025 | 4.000,00     | 0,00       | 4.000,00       | Ajuste (-) |
| 2026 | 4.000,00     | 0,00       | 4.000,00       | Ajuste (-) |
| 2027 | 1.000,00     | 0,00       | 1.000,00       | Ajuste (-) |



DETERIORO - DIFERENCIA TEMPORARIA (VARIOS AÑOS)

| Año  | Contable (€) | Fiscal (€) | Diferencia (€) | Signo |
|------|--------------|------------|----------------|-------|
| 2022 | 30.000,00    | 12.000,00  | 18.000,00      | (+)   |
| 2023 | 0,00         | 18.000,00  | -18.000,00     | Ajuste (+) |


LIQUIDACIÓN IMPUESTO - 2022

| Concepto                                | 2022 (€)    |
|-----------------------------------------|-------------|
| Rdo. Ejercicio                          | 100.000,00  |
| (+/-) Diferencias AMORTIZACIÓN MÁQUINA  | -4.500,00   |
| (+/-) Diferencias DETERIORO             | 18.000,00   |
| (+/-) Diferencias SANCIÓN               | 5.000,00    |
| (=) BI Previa                           | 118.500,00  |
| (-) Rdos. Negativos años anteriores     | -10.000,00  |
| (=) Bimponible                          | 108.500,00  |
| (x) Tipo Gravamen (25%)                 | 0,25        |
| (=) Cuota Íntegra                       | 27.125,00   |
| (-) Deducciones/Bonificaciones          | -3.000,00   |
| (=) Cuota Líquida (6300)                | 24.125,00   |
| (-) Retenciones y P/Cta (473)           | -12.125,00  |
| (=) Cuota Diferencial (4752)            | 12.000,00   |


a) Asiento contable por el impuesto corriente a 31/12/20X2  

| DEBE | Asiento contable por el impuesto corriente a 31/12/20X2 | HABER |
|------|---------------------------------------------------------|-------|
|  24.125    |                6300...                                         |       |
|      |           473 ....                                              |  12.125     |
|      |            4752 H.P Acreedora por ISOC                                             |       |


b) Asiento contable, en su caso, por la diferencia derivada de la aceleración de amortizaciones el 31/12/20X2  

| DEBE | Asiento contable, en su caso, por la diferencia derivada de la aceleración de amortizaciones el 31/12/20X2 | HABER |
|------|-----------------------------------------------------------------------------------------------------------|-------|
| 1.125 | 6301 ISOC Impuesto Diferido                                                                              |       |
|      | 479 Pasivos por diferencias temporarias imponibles                                                        | 1.125 |



c) Asiento contable, en su caso, por la diferencia derivada de la sanción medioambiental a 31/12/20X2  

| DEBE | Asiento contable, en su caso, por la diferencia derivada de la sanción medioambiental a 31/12/20X2 | HABER |
|------|---------------------------------------------------------------------------------------------------|-------|
|      |              NPAC                                                                                     |       |
|      |                                                                                                   |       |
|      |                                                                                                   |       |



d) Impuesto diferido relativo a la compensación de pérdidas de ejercicios anteriores, el 31/12/20X2  

| DEBE | Impuesto diferido relativo a la compensación de pérdidas de ejercicios anteriores, el 31/12/20X2 | HABER |
|------|-------------------------------------------------------------------------------------------------|-------|
| 2.500     |       6301....                                                                                          |       |
|      |               4745....                                                                                  |  2500...     |
|      |                                                                                                 |       |

## EJERCICIO PROPUESTO 8

Al cierre del ejercicio económico 20X3, primer año de su actividad, la sociedad "A." generó unas pérdidas de 15.000 € (resultado contable negativo), si bien en los próximos años espera obtener beneficios.

Durante 20X3, las únicas diferencias temporarias responden a que el 1 de julio del 20X3 adquirió un inmovilizado material por 10.000 €, que amortiza contablemente en 5 años, sin valor residual. Sin embargo, al amparo de la normativa fiscal, esta inversión es deducible en su totalidad en el año 20X3, ventaja que la empresa aprovecha. A 31/12/20X3, las retenciones y pagos a cuenta del año ascendieron a 3.000 €.

En el ejercicio siguiente, 20X4, esta empresa genera un resultado contable antes de impuestos de + 30.000 € (beneficios), el cual incluye el gasto por recargo exigido por la Agencia Tributaria por presentación fuera de plazo de una declaración fiscal, por importe de 5.000 €, que no es deducible según la normativa fiscal. La única diferencia temporaria de dicho ejercicio proviene del inmovilizado adquirido en el año anterior. A 31/12/20X4, la empresa tiene derecho a una deducción de 1.000 € por haber contratado un trabajador, y las retenciones y pagos a cuenta son 500 €.

SE PIDE: Sabiendo que el tipo impositivo aplicado es el 25%, reflejo contable en el libro diario de las siguientes operaciones:


| año  | contable | fiscal    | diferencia | Signo      |
|------|----------|-----------|------------|------------|
| 2023 | 1.000,00 | 10.000,00 | -9.000,00  | (-)        |
| 2024 | 2.000,00 | 0,00      | 2.000,00   | Ajuste (-) |
| 2025 | 2.000,00 | 0,00      | 2.000,00   | Ajuste (-) |
| 2026 | 2.000,00 | 0,00      | 2.000,00   | Ajuste (-) |
| 2027 | 2.000,00 | 0,00      | 2.000,00   | Ajuste (-) |
| 2028 | 1.000,00 | 0,00      | 1.000,00   | Ajuste (-) |

a) En su caso, asiento contable por el efecto impositivo de la pérdida del año 20X3

| DEBE |                                                                              | HABER |
|------|------------------------------------------------------------------------------|-------|
|   3750 = $15.000 \times 0,25$   |              4745...                                                                |       |
|      |                     6301...                                                         |  3750     |
|      |                                                                              |       |
|      |                                                                              |       |

b) Liquidación del impuesto en el año 20X4

| DEBE |                                            | HABER |
|------|--------------------------------------------|-------|
|   4.500   |                   6300...                         |       |
|      |        473...                                    |   500    |
|      |          4752. H.P Acreedora por impuesto de sociedades                                  |   4000    |
|      |                                            |       |

c) En su caso, el efecto fiscal del recargo por presentación fuera de plazo en el ejercicio 20X4

| DEBE |                                                                                            | HABER |
|------|--------------------------------------------------------------------------------------------|-------|
|      |            **las diferencias permanentes no generan asiento**                                                                                |       |
|      |                  NPAC                                                                          |       |
|      |                                                                                            |       |
|      |                                                                                            |       |

d) En su caso, diferencias temporarias del ejercicio 20X4 relativas a la amortización

| DEBE |                                                                                        | HABER |
|------|----------------------------------------------------------------------------------------|-------|
|  $2000 \times 0,25 = 500$    |         479. Pasivos ...                                                                               |       |
|      |                         6301...                                                               |   500    |
|      |                                                                                        |       |
|      |                                                                                        |       |