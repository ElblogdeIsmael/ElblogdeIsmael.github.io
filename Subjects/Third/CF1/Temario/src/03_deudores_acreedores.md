# Deudores y acreedores de la actividad habitual

Tema 3 del programa. Los derechos de cobro y las obligaciones de pago que nacen de
la actividad ordinaria: valoración, deterioro, IVA e información.

## Valoración y registro de los créditos y partidas a cobrar

Un **crédito comercial** es un derecho de cobro nacido de la venta de bienes o de la
prestación de servicios. Sus cuentas:

| Cuenta | Qué recoge |
| --- | --- |
| (430) Clientes | derechos de cobro por la actividad habitual |
| (431) Clientes, efectos comerciales a cobrar | los documentados en letras o pagarés |
| (436) Clientes de dudoso cobro | los reclasificados por riesgo de impago |
| (440) Deudores | derechos de cobro ajenos a la actividad habitual |
| (470) Hacienda Pública, deudora | créditos frente a la Administración |

La distinción entre (430) y (440) es por el **origen**: la venta del producto propio
va a Clientes, y la venta de un elemento del inmovilizado va a Deudores.

### Valoración inicial

Se valoran por su **valor razonable**, que salvo prueba en contrario es el precio de
la transacción, más los costes directamente atribuibles.

El PGC permite una simplificación de mucho uso: los créditos **con vencimiento no
superior a un año y sin tipo de interés contractual** se valoran por su valor
nominal, siempre que el efecto de no actualizar los flujos no sea significativo. Es
lo habitual en el crédito comercial, y por eso una venta a 90 días se registra por su
importe sin descontar.

### Valoración posterior

Al **coste amortizado**, con los intereses devengados reconocidos por el método del
tipo de interés efectivo. Para los créditos a corto plazo valorados por su nominal,
se mantiene ese valor menos el deterioro.

### Efectos comerciales

Un **efecto comercial** documenta el derecho de cobro en una letra de cambio, un
pagaré o un cheque. Documentar el crédito no cambia su naturaleza; cambia lo que se
puede hacer con él:

| Operación | Qué ocurre |
| --- | --- |
| **En cartera** | se conserva hasta el vencimiento |
| **Descuento** | el banco anticipa el importe menos intereses y comisiones |
| **Gestión de cobro** | el banco cobra al vencimiento y cobra comisión |
| **Endoso** | se transmite a un tercero como medio de pago |

**Descuento y gestión de cobro no son lo mismo y se contabilizan distinto**, y esa
es la distinción central del apartado:

| | Descuento | Gestión de cobro |
| --- | --- | --- |
| ¿Anticipa dinero el banco? | sí | no |
| ¿Nace una deuda? | **sí**, con la entidad | no |
| Riesgo de impago | sigue en la empresa | sigue en la empresa |
| Cuentas | (4311) Efectos descontados y (5208) Deudas por efectos descontados | (4312) Efectos en gestión de cobro |

En el descuento, la empresa recibe el dinero antes y **sigue respondiendo si el
cliente no paga**: no ha transferido los riesgos, así que el crédito no se da de baja
y aparece a la vez una deuda. Solo al vencimiento, y si el cliente paga, se cancelan
las dos.

**Asientos del descuento de un efecto de 1000 €, con 40 € de intereses y comisiones:**

| Momento | Debe | Haber |
| --- | --- | --- |
| Al descontar | (572) Bancos 960 · (665) Intereses por descuento 40 | (5208) Deudas por efectos descontados 1000 |
| Reclasificar el efecto | (4311) Efectos descontados 1000 | (4310) Efectos en cartera 1000 |
| Si el cliente paga | (5208) Deudas por efectos descontados 1000 | (4311) Efectos descontados 1000 |
| Si **no** paga | (4315) Efectos impagados 1000 | (4311) Efectos descontados 1000 |
| Y el banco carga la deuda | (5208) Deudas por efectos descontados 1000 | (572) Bancos 1000 |

Las dos últimas filas son el caso que explica todo el tratamiento: el impago devuelve
el problema a la empresa, y por eso el crédito nunca se había dado de baja.

## Deterioro de valor de los créditos

Un crédito se deteriora cuando existe evidencia objetiva de que no se cobrará
íntegramente: dificultades financieras del deudor, impago, concurso.

$$\text{Deterioro} = \text{valor contable} - \text{valor actual de los flujos que se espera cobrar}$$

Hay dos formas de estimarlo, y el PGC admite las dos:

| Método | Cómo | Cuándo conviene |
| --- | --- | --- |
| **Individualizado** | se analiza cada saldo dudoso por separado | pocos clientes, importes grandes |
| **Global** o de porcentaje | un porcentaje sobre el saldo total de clientes | muchos clientes pequeños |

Los asientos, con el método individualizado:

| Momento | Debe | Haber |
| --- | --- | --- |
| Reclasificar a dudoso | (436) Clientes de dudoso cobro | (430) Clientes |
| Dotar el deterioro | (694) Pérdidas por deterioro de créditos | (490) Deterioro de valor de créditos |
| Si finalmente se cobra | (572) Bancos | (436) Clientes de dudoso cobro |
| Y revertir el deterioro | (490) Deterioro de valor de créditos | (794) Reversión del deterioro de créditos |
| Si resulta **incobrable** | (650) Pérdidas de créditos comerciales incobrables | (436) Clientes de dudoso cobro |
| Y cancelar el deterioro | (490) Deterioro de valor de créditos | (794) Reversión del deterioro |

Tres cosas que conviene fijar:

- **Reclasificar a (436) no es dotar el deterioro.** Son dos asientos independientes:
  el primero cambia de sitio el saldo y el segundo reconoce la pérdida estimada.
- **La cuenta (490) es compensadora de activo**, como la (39x) del tema 2: el crédito
  no se reduce, se resta aparte.
- **Deterioro y fallido son cosas distintas.** El deterioro es una estimación
  reversible; el fallido, la baja definitiva cuando ya no hay nada que cobrar.

## Valoración y registro de los débitos y partidas a pagar

La otra cara. Sus cuentas:

| Cuenta | Qué recoge |
| --- | --- |
| (400) Proveedores | deudas por compras de la actividad habitual |
| (401) Proveedores, efectos comerciales a pagar | las documentadas en efectos |
| (410) Acreedores por prestación de servicios | deudas ajenas a la actividad habitual |
| (475) Hacienda Pública, acreedora | deudas con la Administración |
| (476) Organismos de la Seguridad Social, acreedores | cuotas pendientes |

La simetría con los créditos es exacta: (400) es a (430) lo que (410) es a (440), y la
regla de clasificación es la misma —el origen de la operación, no su importe ni su
plazo—.

Su valoración también es simétrica: valor razonable inicial, coste amortizado
después, y la misma simplificación para las deudas a corto plazo sin interés
contractual.

**Lo que no tienen los débitos es deterioro.** Deteriorarse es perder valor, y una
deuda que se espera no pagar no se deteriora: se da de baja contra un ingreso, cuando
jurídicamente se extingue.

## El Impuesto sobre el Valor Añadido

El **IVA** grava el consumo y la empresa actúa como recaudador: lo cobra a sus
clientes y lo paga a sus proveedores, y liquida la diferencia con Hacienda.

| Cuenta | Cuándo aparece | Naturaleza |
| --- | --- | --- |
| (472) Hacienda Pública, IVA soportado | en las compras | **activo**: crédito frente a Hacienda |
| (477) Hacienda Pública, IVA repercutido | en las ventas | **pasivo**: deuda con Hacienda |

**El IVA no es ni gasto ni ingreso para la empresa**, y esa es la idea de fondo. Por
eso no aparece en la cuenta de pérdidas y ganancias: entra y sale del balance.

### La liquidación

Al final de cada periodo se cancelan las dos cuentas contra su diferencia:

$$\text{IVA a liquidar} = \text{IVA repercutido} - \text{IVA soportado deducible}$$

| Resultado | Asiento |
| --- | --- |
| Repercutido **mayor** que soportado | (477) a (472) y a **(4750) Hacienda Pública, acreedora por IVA** |
| Repercutido **menor** que soportado | (477) y **(4700) Hacienda Pública, deudora por IVA** a (472) |

El segundo caso —más IVA soportado que repercutido— es normal en una empresa que
invierte mucho o que exporta, y genera un crédito que se compensa en periodos
siguientes o se solicita a devolución.

**Ejemplo.** Compras del trimestre por 10 000 € más 21 % de IVA y ventas por
30 000 € más IVA.

| Concepto | Base | IVA |
| --- | ---: | ---: |
| Compras | 10 000 | 2 100 soportado |
| Ventas | 30 000 | 6 300 repercutido |
| **A ingresar** | | **4 200** |

Comprobación: $6300 - 2100 = 4200$. Y ese importe es exactamente el 21 % del valor
añadido, $30\,000 - 10\,000 = 20\,000$, que es $4200$. **Las dos vías dan lo mismo**,
que es lo que justifica el nombre del impuesto.

### El IVA no deducible

No todo el IVA soportado se puede deducir. Cuando no se puede —por afectar a
operaciones exentas, o por tratarse de gastos excluidos—, **el IVA se incorpora al
coste del bien o del gasto**, y por tanto sí acaba pasando por la cuenta de
resultados. Es la excepción que el tema 2 apuntaba al hablar del precio de
adquisición.

## Información a suministrar en las cuentas anuales

En el **balance**, dentro del activo corriente, en «Deudores comerciales y otras
cuentas a cobrar», con los clientes por ventas separados de los deudores varios y de
los créditos con Administraciones Públicas. Y en el pasivo corriente, en «Acreedores
comerciales y otras cuentas a pagar», con la misma separación.

Los saldos con Hacienda por IVA aparecen **por su neto de cada concepto y sin
compensar entre activo y pasivo**, que es el principio de no compensación del tema 1.

En la **memoria**: los criterios de reconocimiento y valoración aplicados, el
movimiento de las correcciones por deterioro con las dotaciones y reversiones del
ejercicio, la clasificación de los saldos por vencimientos, los efectos descontados
pendientes de vencer y el periodo medio de pago a proveedores.

El desarrollo de las normas de instrumentos financieros aplicables al crédito y al
débito comercial sigue a \cite{pgc2007} y \cite{zafra2024}; los supuestos, a
\cite{zafra2024practicos} y \cite{besteiro2011}.
