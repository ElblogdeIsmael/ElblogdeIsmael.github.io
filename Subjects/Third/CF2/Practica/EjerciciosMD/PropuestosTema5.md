---
title: "Contabilidad Financiera II"
subtitle: "Ejercicios propuestos - Tema 5"
author: "Ismael Sallami Moreno"
date: "Mayo de 2025"
lang: es
mainfont: "Latin Modern Roman"
geometry: margin=2.5cm
colorlinks: true
linkcolor: "008080"
toc: true
toc-own-page: true
numbersections: true
titlepage: true
header-left: "Contabilidad Financiera II"
header-right: "Ejercicios Tema 5"
# footer-center: "\\thepage"
titlepage-color: "87CEEB"
titlepage-rule-color: "4682B4"
# titlepage-background: "images/img2.jpg"
titlepage-background-opacity: 0.5
---

# Ejercicios Propuestos Tema 5: Provisiones y contingencias

## Ejercicio Propuesto 1

**SE PIDE:** Contabilizar las siguientes operaciones.
Entendemos que es por solo un trabajador y que como se despide a mediados de mes las cuantías son de medio mes, por ende, debemos de contabilizar medio mes solo (dividir las cuantías entre dos, dicho de otra forma). Debemos de tener en cuenta que como se dejan a deber todo forma un pasivo para la empresa.

| DEBE       | Devengo de la nómina de septiembre del 20X2                                                   | HABER |
|------------|------------------------------------------------------------|-------|
| | 640. Sueldos y salarios | |
| | 476 Organismos de la SS, acreedores | 420/2 = 210 |
| | 4751. HP. acreedora por retenciones practicadas |320/2 = 160|
|| 465. Remuneraciones pendientes de pago |1800/2 = 900|
||||
|640/2 = 320| 642. SS a cargo de la empresa ||
||476. Organismos de la SS, acreedores|320|

Debemos de tener en cuenta que como se deja a deber, queda pendiente.


| DEBE  | Dotación de la provisión a 15 de sept 2022                  | HABER |
|-------|-------------------------------------------------------------|-------|
| 20.000 | 641. Indemnizaciones                                       |       |
|        | 142. Provisiones para otras responsabilidades              | 20.000 |

| DEBE  | Operaciones a 31 de dic 2022                                | HABER |
|-------|-------------------------------------------------------------|-------|
| 1.500 | 660. Gastos financieros por actualización de provisiones    |       |
|       | 142. Provisiones para otras responsabilidades               | 1.500 |

24.600 - 21.500 = 3.100  
24.600 - 15.000 = 9.600  

| DEBE  | Operaciones a 31 de dic 2023                                | HABER |
|-------|-------------------------------------------------------------|-------|
| 3.100 | 660. Gastos financieros por actualización de provisiones    |       |
|       | 142. Provisiones para otras responsabilidades               | 3.100 |
|       | **Ajustamos la diferencia de 9.600**                            |       |
| 9.600 | 142...                                                      |       |
|       | 7952. Exceso Provisión Otras responsabilidades              | 9.600 |
|| **Reclasificamos a corto plazo**||
|15.000| 142... ||
||5292. Provisiones CP otras responsabilidades|15.000|

|DEBE|Pago de la sentencia|HABER|
|-------|-------------------------------------------------------------|-------|
|900| 465... ||
|15.000|5292... || 
||572. Bancos |12.000 (obligado) + 900 (más la nómina pendiente)|12.900
||7952. Exceso provisión...|3.000|

## Ejercicio Propuesto 2


Una sociedad anónima AGOSTO se dedica a la fabricación de carpintería metálica.  
El día 1 de enero de 2015, un trabajador sufre un accidente durante su intervención en el proceso productivo de la empresa. Ese mismo día, el trabajador presenta demanda judicial por considerar que la empresa no está aplicando las medidas necesarias de prevención de riesgos laborales, solicitando una indemnización de 70.000 €.  

La asesoría jurídica de la empresa determina que la demanda prosperará a favor del trabajador, previendo que el proceso judicial se prolongará durante tres años y estimando una indemnización, valorada a fecha de la demanda, en 50.000 €.  

Durante el ejercicio 2015, el tipo de interés es el 4%, y los asesores jurídicos de la empresa, analizando la evolución de los acontecimientos con relación al proceso judicial, estiman a 31 de diciembre de 2015, que la indemnización podría alcanzar un valor, en esa fecha, de 58.000 €.  

A 31 de diciembre de 2016, el tipo de interés sigue siendo del 4%, y se tiene conocimiento de que la sentencia saldrá en 2017.  

El 18 de enero de 2017, hay sentencia firme condenatoria a favor del trabajador, condenando a la empresa a pagar, de manera firme, una indemnización total de 58.500 €, que es pagada mediante transferencia bancaria.


En este apartado debemos de poner el `valor actualizado hasta la fecha`.

| DEBE | Interposición de la demanda por el trabajador el 23 de enero de 2015 | HABER |
|------|------------------------------------------------------------------|-------|
| 50.000 | 641. Indemnizaciones | |
| | 142. Provisiones para otras responsabilidades | 50.000 |

El tipo de interés es del 4%, por ende, el interés generado durante el 2015 es:  
$$
50.000 \times (1,04)^1 - 50.000 = 2.000
$$

| DEBE  | Actualización contable de la provisión 31 de dic 2015, así como su ajuste contable | HABER |
|-------|-------------------------------------------------------------|-------|
||**Actualización de los gastos financieros**||
|2.000|660...||
||142...|2.000|
||Nos dice que pasamos de 52.000 a 58.000||
|6.000|641...||
||142...|"|

`Si se ponen " quiere decir el mismo precio que el anterior.`

|DEBE|Operaciones a 31 de dic de 2016|HABER|
|-------|-------------------------------------------------------------|-------|

En este apartado debemos de dotar los gastos financieros de nuevo por la cantidad de:

$$
    58.000 \times 1,04^1 - 58.000 = 2.320
$$

Además debemos de pasar de largo a corto plazo, haciendo uso de la cuenta 5292, por la cantidad de \(50.000 + 2.000 + 6.000 + 2.320 = 60.320\)

Nos afirman que el valor de la sentencia firme pasa a ser 58.000, por ende, nos sobra.

| DEBE    | Operaciones a 18 de enero de 2017                     | HABER  |
|---------|-------------------------------------------------------|--------|
| 60.320  | 5292. Provisiones CP otras responsabilidades          |        |
|         | 572. Bancos e instituciones de crédito c/c            | 58.000 |
|         | 7952. Exceso de provisión para otras responsabilidades| 1.820  |



## Ejercicio Propuesto 3

La empresa SERRANITO S.A., dedicada a la comercialización de jamones, ha realizado unas ventas durante 2019 de 480.000 €, dando garantía de devolución de los productos defectuosos. Se estima que los gastos que tendrá que afrontar la empresa como consecuencia de la devolución de productos defectuosos con ocasión de la garantía de los mismos para el año 2020 ascenderán al 0,5% de las ventas, para lo que contabiliza la oportuna provisión.

Por otro lado, el 1 de febrero de 2019 despidió a su director financiero, reclamándole éste a la empresa una indemnización de 50.000 € de valor actualizado a esa fecha, iniciándose un proceso judicial que se estima durará varios años.

A 31 de diciembre de 2019, SERRANITO S.A. actualiza la cuantía a indemnizar según el interés establecido, esto es el 6%. De otra parte, a esa fecha nuestros abogados estiman que, con el cambio legislativo, como mucho tendríamos que abonar una indemnización de 42.000 €.

A 31 de diciembre de 2020, las ventas del año 2020 ascendieron a 400.000 €, estimándose que las devoluciones relacionadas con las garantías para el año 2021 ascienden también al 0,5% de las ventas de 2020. Por otro lado, se actualiza la posible indemnización en un 5%, y se incrementa la misma, una vez actualizada, en 2.000 € por un aumento en la estimación de nuestros letrados. Asimismo, nos comunican que el litigio se resolverá definitivamente en febrero de 2021.

A la resolución del litigio y sin posibilidad de nuevo recurso, la empresa es condenada en firme a pagar 47.000 €, lo que realiza el 15 de febrero de 2021 mediante transferencia bancaria.

**SE PIDE:** Contabilizar en la empresa SERRANITO S.A., en la medida que proceda, las siguientes operaciones.



|DEBE|Actualización a 31 de dic 2019 de la provisión dotada por la indemnización|HABER|
|-------|-------------------------------------------------------------|-------|

$$
    50.000 \times 1,06^{11/12} - 50.000 = 2743,27 = x
$$

Anotamos de nuevo estos gastos financieros a la cuenta 142.

Debemos de ajustar la provisión:

$$
    (50.000 + x) - 42.000 = 10.747,27 = y    
$$

Anotamos un exceso por la cuantía de `y`.

Para el siguiente apartado debemos de tener en cuenta la dotación de las provisiones comerciales.

|DEBE|Dotación de provisiones comerciales|HABER|
|-------|-------------------------------------------------------------|-------|
|\(0,5\% \times 480.000 = 2400\)|6959. Dotación a la provisión por operaciones comerciales||
||4999. Provisión para operaciones comerciales|\(0,5\% \times 480.000 = 2400\)|

Sabiendo que en este tipo de provisiones, siempre se debe de dar de baja las del año anterior y dotar las de este año.

|DEBE|Operaciones a 31 de dic de 2020 en base a las operaciones comerciales|HABER|
|-------|-------------------------------------------------------------|-------|
|2.400,00|4999. Provisión para operaciones comerciales||
||79549. Exceso Provisión Operaciones Comerciales|2.400,00|
||||
|2.000,00|6959. Dotación a la provisión por operaciones comerciales||
||4999. Provisión para operaciones comerciales|2.000,00|

Ahora debemos de actualizar los intereses de este año (**NO LO PIDE**)

Además debemos de aumentar la provisión en 2.000 en base al enunciado cargando la cuenta 641 y abonando la 142, y acto seguido se debe de reclasificar a corto plazo, para ello debemos de cargar la cuenta 142 y abonar la `5292` que es la correspondiente a CP.



|DEBE|Operaciones a 15 de febrero del 2021|HABER|
|-------|-------------------------------------------------------------|-------|
|46.100|5292...||
||572...|47.000|
|Aquí como falta, debemos de abonarlo: 900 |641...||

<!-- Con estos ejercicios básicamente se deben de saber hacer todos. Lo que puede variar en este punto es el uso de las distintas cuentas de provisiones como puede ser la de `actuaciones medioambientales` y de manera análoga la cuenta de gasto a la que se asocia. -->


## Ejercicio Propuesto 4

El 01/12/20X2, debido a una disposición medioambiental donde está ubicada la sede social de la empresa B, S.A., ésta tiene que reconocer la deuda derivada del impacto medioambiental que está causando en un bosque cercano. Se estima que el importe a pagar, transcurridos 10 años, será de 20.000 €. El tipo de interés anual de descuento es del 5%.

A 31/12/20X4, por un cambio legislativo, se espera que habrá que pagar por la obligación medioambiental, un importe de 15.000 € (valor actualizado a 31/12/20X4).

El 01/12/20X12 cuando el saldo de la obligación medioambiental asciende a 30.000 €, se realiza la recuperación del bosque por un importe total de 30.500 €.

**SE PIDE:** Contabilizar las operaciones que procedan en las fechas que se indican a continuación.

$$
20.000 \times 1,05^{-10} = 12278,26
$$
$$
12278,26 \times 1,05^{\frac{1}{12}} - 12278,26 = 50,02
$$

|DEBE|Anotación a 1.12.20X2|HABER|
|-------|-------------------------------------------------------------|-------|
|12278,26|622. Reparaciones y conservación||
||145. Provisión por actuaciones medioambientales|12278,26|

$$
12.278{,}26\ \text{€ (valor inicial)} + 50{,}02\ \text{€ (interés dic/22)} = 12.328{,}28\ \text{€}
$$

Lo actualizamos un año (exponente = 1):

$$
I = 12.328{,}28 \times (1{,}05)^1 - 12.328{,}28 = 616{,}41\ \text{€}
$$


|DEBE|Anotación derivada de la actualización financiera de la obligación medioambiental a 31.12.20X3|HABER|
|-------|-------------------------------------------------------------|-------|
|616,41|660....||
||145...|616,41|

$$
12.278{,}26\ \text{€ (valor inicial)} + 50{,}02\ \text{€ (interés dic/22)} + 616{,}41\ \text{€ (interés dic/23)} = 12.945\ \text{€}
$$
La cantidad debe de ser 15.000, por ende hay que anotar un gasto extra de $2055$.

| DEBE     | Ajuste contable de la obligación medioambiental a 31.12.20X3 por el cambio legislativo | HABER    |
|----------|-----------------------------------------------------------------------------------|----------|
| 2.055    | 622. Reparaciones y conservación                                                  |          |
|          | 145. Provisión por actuaciones medioambientales                                   | 2.055    |

<!-- Antes del siguiente asiento debemos de contabilizar los intereses. -->


|DEBE|Pago al vencimiento de la provisión el 1.12.20x12|HABER|
|-------|-------------------------------------------------------------|-------|
|30.000|5295. Provisión CP actualizaciones medioambientales||
||572...|30.500|
|500|622....||

## Ejercicio Propuesto 5

La empresa SORPRESA, S.A. dedicada a la comercialización de flores, ha realizado unas ventas durante 20X0 de 100.000 €, dando garantía de devolución de los productos defectuosos. Se estimó que los productos defectuosos serían un 0,1% de las ventas. Para el año 20X1, la garantía será el 0,2% de las ventas, que para este año han ascendido a 150.000 €.

Por otro lado, el 1 de abril de 20X1 despidió a su director comercial, reclamando éste a la empresa una indemnización de 90.000 € (valor actualizado a 01/04/20X1) por despido improcedente. Nuestros abogados consideran que la demanda tiene base, con lo que la empresa procede a dotar, a esa fecha, la oportuna provisión. Comienza un proceso judicial que se estima durará varios años.

A 31/12/20X1, SORPRESA, S.A. actualiza la cuantía a indemnizar según el interés establecido del 6%. Por otro lado, nuestros abogados estiman que, con el cambio en las leyes laborales que está previsto que apruebe el gobierno de España en breve, como mucho tendríamos que abonar una indemnización de 92.000 €.

A 31/12/20X2 se actualiza la posible indemnización en un 5%, y se incrementa la misma, una vez actualizada en 3.400 € por recomendación de nuestros letrados. Además, se informa que el juicio tendrá lugar en mayo del año que viene. Además, se dice que la garantía de devolución de productos defectuosos para este año será del 0,1% de las ventas que ascendieron a 350.000 €.

El 23/05/20X3 la empresa es condenada en firme a pagar 110.000 €, cantidad que abona mediante transferencia bancaria.


$$
90.000 \times 1,06^{\frac{9}{12}} - 90.000 = 4020,36
$$

|DEBE|Actualización de la indemnización a 31.12.x1|HABER|
|-------|-------------------------------------------------------------|-------|
|4020,36|660 ....||
||142. Provisión LP para otras responsabilidades|4020,36|

*TOTAL CUENTA 142 = 94020,36 y nos dicen que se estima que será 92.000, por ende, dotamos el exceso*

|DEBE|Correcciones valorativas a 31/12/20X1|HABER|
|-------|-------------------------------------------------------------|-------|
|2020,36|142...||
||7952|2020,36|

|DEBE|Operaciones a 31 de dic de 20X2 en relación con la provisión por operaciones comerciales|HABER|
|-------|-------------------------------------------------------------|-------|
|300|4999 Provisión para operaciones comerciales||
||79549 Exceso Provisión operaciones comerciales|300|
|350|6959 Dotación a la provisión por operaciones comerciales||
||4999....|350|

**Antes de hacer este asiento debemos de saber que desde que la cuenta poseía el valor de 92.000 se han producido:**

La actualización (de un año completo) en este momento se hace al 5% de interés: $I = 92.000 (1.05)^1 - 92.000 = 4.600 \text{ €}$

|DEBE|Correcciones valorativas a 31/12/20X1|HABER|
|-------|-------------------------------------------------------------|-------|
|4.600,00|660 Gastos financieros por actualización de provisiones||
||142 Provisión LP para otras responsabilidades|4.600,00|

También nos dicen que hay que incrementar su valoración en 3.400 €. (hay que ajustar su valor)

|DEBE|Correcciones valorativas a 31/12/20X1|HABER|
|-------|-------------------------------------------------------------|-------|
|3.400,00|641 Indemnizaciones||
||142 Provisión LP para otras responsabilidades|3.400,00|

**Saldo total: 100.000**
**OJO:** Se debe de reclasificar:
```
100.000 142 ....
    a
        5292 Provisión CP Otras responsabilidades 100.000
```

|DEBE|Operaciones a 23/05/20X3|HABER|
|-------|-------------------------------------------------------------|-------|
|100.000|5292...||
||572...|110.000|
|10.000|641. Indemnizaciones||

## Ejercicio Propuesto 6

El 01/04/20X1, la empresa constructora VICEVER, S.A. recibe la comunicación de un cliente de que la obra entregada no cumple con el pliego de calidad, por lo que plantea un litigio, solicitando una indemnización de 175.000 €. Los técnicos de la empresa consideran que la reclamación tiene fundamento y estiman que el proceso judicial durará unos tres años a partir de la fecha y que la cuantía a abonar será de unos 100.000 €.

La empresa contaba con un seguro que cubría, entre otras cuestiones, posibles reclamaciones en el momento de la entrega. Analizadas las cláusulas del contrato no existen dudas de que la aseguradora abonará a VICEVER, S.A. una cuantía que, a día de hoy, está valorada en 30.000 €.

Al cierre de 20X3 la empresa recibe comunicación de la pronta resolución de la demanda. En ese momento la indemnización está valorada contablemente en 95.000 €. La empresa ofrece al cliente resolver la demanda mediante un pago de 105.000 €. En los primeros días de enero el cliente acepta la oferta, firmando un acuerdo de conformidad y pagando VICEVER, S.A. la cuantía propuesta.

La empresa trabaja con una tasa de descuento del 5%.

**SE PIDE:** Realizar los asientos contables en el libro diario de la sociedad VICEVERSA relativos a las siguientes operaciones:

$$
100.000 \times 1,03^{-3} = 86.383'76
$$

|DEBE|Si procede, dotación de la provisión el 01/04/20X1|HABER|
|-------|-------------------------------------------------------------|-------|
|86.383'76 | 641...| |
| | 142... | 86.383'76|
| | | |

|DEBE|Asientos que procedan a 01/04/20X1 derivados del contrato de seguro|HABER|
|-------|-------------------------------------------------------------|-------|
|30.000 |45x Deudores LP | |
| | 778 Ingresos Excepcionales | 30.000|

$$
86.383'76 \times (1'05)^{9/12} - 86.383'76 = 3.219'55 \text{ €}
$$

|DEBE|Si procede, actualización de la provisión el 31/12/20X1|HABER|
|-------|-------------------------------------------------------------|-------|
|3.219,55|660. Gastos financieros por actualización de provisiones||
||142. Provisión para otras responsabilidades|3.219,55|

$$
(86.383'76 + 3.219'55) \times (1'05)^1 - (86.383'76 + 3.219'55) = 4.480'17 \text{ €}
$$

|DEBE|Si procede, actualización de la provisión el 31/12/20X2|HABER|
|-------|-------------------------------------------------------------|-------|
|4.480,17|660. Gastos financieros por actualización de provisiones||
||142. Provisión para otras responsabilidades|4.480,17|


|DEBE|Pago de la indemnización en enero 20X4|HABER|
|-------|-------------------------------------------------------------|-------|
|95.000 | **5292...**| |
| |572 | 105.000|
|10.000|641...||

## Ejercicio Propuesto 7

La Entidad PARCIALES, S.A., al inicio del ejercicio 20X4 ha contraído la obligación legal de reparar ciertos daños causados al medioambiente con motivo del impacto negativo que su actividad productiva ejercerá en los próximos tres años. Se estima que el valor de las reparaciones a realizar a finales del año 20X6 ascenderá a 125.000 €. La empresa utiliza una tasa de actualización anual del 4%.

A finales del ejercicio 20X5, se estima que los costes de reparación no superarán los 100.000 €, cuyo valor actual considerando el tipo de actualización del 4% es de 96.153,85 €.

Al final del ejercicio 20X6 se ejecutan las reparaciones medioambientales por importe de 75.000 €.

**SE PIDE:** contabilizar las siguientes operaciones

Debemos descontar tres años y nos queda: 111.124'54

| DEBE | Reconocimiento inicial de la provisión al inicio del ejercicio 20X4 | HABER |
|------|-------------------------------------------------------------------|-------|
|   111.124'54   |             622...                                                      |       |
|      |    145 Provisión por actuaciones medioambientales                                                              | 111.124'54      |
|      |                                                                   |       |
|      |                                                                   |       |
|      |                                                                   |       |

$$
\text{Valor interés acumulado en 2024 a la provisión 31/12/24} = 
$$
$$
111.124'54 \times (1'04)^1 - 111.124'54 = 4.444'98
$$

| DEBE | Asientos correspondientes a la actualización de la provisión al 31/12/20X4 | HABER |
|------|-------------------------------------------------------------------------|-------|
|      |  660...                                                                       |       |
|      |        145....                                                                 |       |
|      |                                                                         |       |
|      |                                                                         |       |
|      |       
                                                                  |       |
En contabilidad vale: 96.153'85, y debe valer 100.000. 
Hay que aumentarla de valor: 100.000 - 96.153'85 = 3.846'15

| DEBE | Asientos correspondientes al ajuste de la provisión a 31/12/20X5 | HABER |
|------|------------------------------------------------------------------|-------|
| 3.846'15     |        622...                                                    |       |
|      |           145...                                                       |  3.846'15     |
|      |                                                                  |       |
|      |                                                                  |       |
|      |          

**Pasamos a C/P y los intereses de X6 que ascienden a 4000.**                                                        |       |

| DEBE | Asientos correspondientes a la reparación realizada al 31/12/X6 | HABER |
|------|------------------------------------------------------------------|-------|
|  104.000    |    5295...                                                              |       |
|      |                                                                  |       |
|      |       572....                                                           | 75.000      |
|      |       7955. Exceso de Provisión Actuaciones Medioambientales                                                    |    29.000   |
|      |                                                                  |       |

## Ejercicio Propuesto 8

El 01/07/2023, la empresa AGUAS DE TORRES asume la obligación de restablecer el entorno natural donde desarrolló su actividad. Los expertos estiman que reequilibrar el medio ambiente podría ascender a 200.000 € al término de su actividad, que se prevé sea a finales de 2025, en el escenario más caro para la empresa, y a 120.000 € en el supuesto menos gravoso. Debido a la naturaleza de la actividad desarrollada, existe una probabilidad del 80% de darse el escenario más caro y una probabilidad del 20% de estar en el caso con menos gastos. Se sabe que el tipo de interés aplicable a esta operación es del 5%.

A finales de 2025, se pagan por banco 170.000 € correspondientes al cumplimiento de los compromisos adquiridos dos años antes.

**SE PIDE:** Reflejo contable de las siguientes operaciones

```
Obligación: Restablecer el entorno
Inicio Provisión: 01/07/x3 Fin Provisión: 31/12/20x5 (tiempo que transcurre: 2'5 años)
Estimaciones valor provisión al vencimiento:
Escenario más caro: 200.000 € (80% probabilidad) >>>> 
>>>> Nos quedamos con este (debe ser probabilidad mayor al 50%)
Escenario más barato: 120.000 € (20% probabilidad)
VA provisión: 200.000 (1'05) -2 '5 = 177.034'03 €
```

| DEBE | Reconimiento inicial el 01/07/2023 | HABER |
|------|------------------------------|-------|
|  177.034,03    |     622...                         |       |
|      |           145...                   |   177.034,03    |
|      |                              |       |
|      |                              |       |

$$ 
 = 177.034'03 (1'05)^{6/12} - 177.034'03 = 181.405'86 -177.034'03 = 4.371'87
$$

| DEBE | Registro contable de todas las operaciones a 31/12/2023 | HABER |
|------|------------------------------|-------|
|  4.371'87  |          660...                    |       |
|      |                145...              |   4.371'87   |
|      |                              |       |
|      |                              |       |

$$ 
I = 181.405'86 \times (1'05) - 181.405'86 = 190.476'16 -181.405'86 = 9.070'29 = r
$$

| DEBE | Registro contable de todas las operaciones a 31/12/2024 | HABER |
|------|------------------------------|-------|
|  r    |        660...                      |       |
|      |              145...                |    r   |
|      |          Reclasificamos... abonando la 5295...                    |       |
|      |                              |       |

| DEBE | Registro contable del pago de los compromisos adquiridos a 31/12/2025 | HABER |
|------|------------------------------|-------|
|  9.070,29    |       660...                       |       |
|      |             145...                 |   9.070,29    |
|   200.000   |        5295..                      |       |
|      |              572...                |  170.000     |
||7955...|30.000|


