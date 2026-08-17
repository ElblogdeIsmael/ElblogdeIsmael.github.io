# Existencias: compras y ventas

Tema 2 del programa. Qué son las existencias, cómo se valoran al entrar y al salir,
cómo se contabilizan y qué hay que informar.

## Concepto, características y tipología

Las **existencias** son activos poseídos para ser vendidos en el curso normal de la
explotación, en proceso de producción con ese fin, o para ser consumidos en el
proceso productivo o en la prestación de servicios.

Lo que las distingue del inmovilizado de los temas 5 y 6 **no es lo que son, sino
para qué las tiene la empresa**:

| | Existencias | Inmovilizado |
| --- | --- | --- |
| Destino | vender o consumir en el ciclo | usar de forma duradera |
| Permanencia | corto plazo, rotan | más de un ejercicio |
| En el balance | activo corriente | activo no corriente |
| Al usarse | se dan de baja al vender | se amortizan |

Un ordenador es existencia en una tienda de informática e inmovilizado en un
despacho de abogados. Es el mismo bien y la clasificación es distinta.

### Tipología, con sus cuentas

| Subgrupo | Cuenta | Qué recoge |
| --- | --- | --- |
| 30 | Comerciales o **mercaderías** | se adquieren y se venden sin transformar |
| 31 | Materias primas | se incorporan al producto fabricado |
| 32 | Otros aprovisionamientos | combustibles, repuestos, embalajes, material de oficina |
| 33 y 34 | Productos en curso y semiterminados | en fabricación al cierre |
| 35 | Productos terminados | fabricados y listos para vender |
| 36 | Subproductos, residuos y materiales recuperados | salidas secundarias del proceso |
| 407 | Anticipos a proveedores | entregas a cuenta de compras futuras |

La cuenta (407) figura dentro del epígrafe de existencias del balance aunque no sea
una existencia física: representa el derecho a recibirlas.

## Reconocimiento y valoración inicial

Las existencias se valoran por su **coste**, que es el precio de adquisición si se
compran o el coste de producción si se fabrican.

### Precio de adquisición

$$\text{Precio de adquisición} = \text{importe facturado} - \text{descuentos} +
\text{gastos adicionales hasta su almacenaje}$$

| Se incluye | No se incluye |
| --- | --- |
| importe facturado por el vendedor | IVA soportado deducible |
| transportes, seguros y aranceles | descuentos comerciales y rappels |
| envases y embalajes no retornables | intereses de financiación, en general |
| impuestos indirectos **no** recuperables | gastos de almacenamiento posteriores |

**El IVA soportado deducible no forma parte del coste**, porque la empresa lo
recupera de Hacienda: es un crédito, no un mayor valor del bien. Si la empresa no
puede deducirlo, entonces sí se incorpora al coste.

Los **descuentos** se tratan distinto según cuándo se conceden:

| Descuento | Cuenta | Efecto |
| --- | --- | --- |
| **En factura**, comercial | ninguna: menor importe | reduce el precio de adquisición |
| **Fuera de factura**, por pronto pago | (606) Descuentos sobre compras por pronto pago | menor gasto |
| **Rappel** por volumen | (609) Rappels por compras | menor gasto |
| Por defectos o incumplimientos | (608) Devoluciones de compras y operaciones similares | menor gasto |

Los descuentos en factura no se contabilizan aparte: la compra se registra ya neta.
Los de fuera de factura sí llevan cuenta propia, porque interesa conocer su importe.

### Coste de producción

$$\text{Coste de producción} = \text{materias primas} + \text{costes directos} +
\text{parte razonable de los costes indirectos}$$

La palabra **razonable** hace todo el trabajo: solo se imputan los costes indirectos
correspondientes al periodo de fabricación, y en función de la capacidad normal de
trabajo. Si la fábrica trabaja muy por debajo de su capacidad, **los costes de la
capacidad ociosa son gasto del ejercicio y no mayor valor de las existencias**. Sin
esa regla se podría inflar el activo simplemente produciendo menos.

Los gastos de administración y de comercialización nunca forman parte del coste de
producción.

## Valoración posterior

Al cierre del ejercicio hay que comparar dos valores:

$$\text{Valor en balance} = \min\,\{\,\text{coste},\ \text{valor neto realizable}\,\}$$

El **valor neto realizable** es el precio estimado de venta menos los costes
necesarios para venderlo y, en su caso, para terminarlo.

Si el valor neto realizable es menor que el coste, se reconoce un **deterioro** por
la diferencia. Es una aplicación directa del principio de prudencia del tema 1: las
pérdidas potenciales se reconocen y las ganancias potenciales no.

| Asiento | Debe | Haber |
| --- | --- | --- |
| Dotación del deterioro | (693) Pérdidas por deterioro de existencias | (39x) Deterioro de valor de existencias |
| Reversión | (39x) Deterioro de valor de existencias | (793) Reversión del deterioro de existencias |

Dos precisiones:

- **El deterioro es reversible.** Si en un ejercicio posterior desaparecen las
  circunstancias que lo causaron, se revierte. Nunca por encima del coste original:
  la reversión deshace el deterioro, no genera beneficio.
- **La cuenta (39x) es compensadora de activo.** No se abona la cuenta de
  existencias: se deja el coste y se resta el deterioro aparte, de modo que el
  balance muestre las dos cifras.

### Distinguir deterioro de pérdida definitiva

| | Deterioro | Pérdida irreversible |
| --- | --- | --- |
| Qué es | pérdida estimada y reversible de valor | destrucción, robo, caducidad |
| Cómo se registra | cuenta compensadora (39x) | baja directa de la existencia |
| Reversible | sí | no |

Una mercancía pasada de moda cuyo precio ha caído se deteriora. Una mercancía que se
ha estropeado ya no existe, y **no se deteriora: se da de baja**.

## Procedimientos de contabilización

Hay dos formas de llevar las existencias, y el PGC admite ambas.

### Procedimiento especulativo o administrativo

Cada entrada y cada salida se registra en el momento, en la propia cuenta de
existencias. Se conoce el saldo en todo momento y exige un sistema de inventario
permanente.

### Procedimiento de desdoblamiento

Es el que sigue el PGC de 2007, y el que se usa en la asignatura. Durante el
ejercicio:

- las **compras** van a la cuenta (600) Compras de mercaderías, que es un **gasto**;
- las **ventas** van a la cuenta (700) Ventas de mercaderías, que es un **ingreso**;
- la cuenta (300) Mercaderías **no se toca**: conserva el saldo inicial.

Y al cierre se hace la **regularización**, en dos asientos:

| Asiento | Debe | Haber |
| --- | --- | --- |
| Dar de baja la existencia inicial | (610) Variación de existencias de mercaderías | (300) Mercaderías |
| Dar de alta la existencia final | (300) Mercaderías | (610) Variación de existencias de mercaderías |

Tras los dos, la cuenta (300) refleja la existencia final y la (610) recoge la
variación del ejercicio:

$$\text{Variación} = \text{Existencia final} - \text{Existencia inicial}$$

```{=latex}
\begin{center}
% Los dos asientos de regularizacion en fila y el saldo colgando del centro:
% con las cuatro cajas en cuadro, la flecha «alta» salia en diagonal y se
% cruzaba con la del saldo.
\begin{tikzpicture}[font=\footnotesize, >=stealth,
  caja/.style={draw, minimum height=0.9cm, minimum width=3.1cm, align=center}]
\node[caja] (ei)  at (0,0)     {(300) Mercaderías\\existencia inicial};
\node[caja] (var) at (4.9,0)   {(610) Variación\\de existencias};
\node[caja] (ef)  at (9.8,0)   {(300) Mercaderías\\existencia final};
\node[caja] (pyg) at (4.9,-1.9) {Pérdidas\\y ganancias};
\draw[->, thick] (ei)  -- node[above, font=\scriptsize] {baja} (var);
\draw[->, thick] (var) -- node[above, font=\scriptsize] {alta} (ef);
\draw[->, thick] (var) -- node[right, font=\scriptsize] {saldo} (pyg);
\end{tikzpicture}
\end{center}
```

**El signo de la (610) es el que más se falla.** Si las existencias han aumentado, la
cuenta queda con saldo acreedor y en la cuenta de pérdidas y ganancias **suma**,
porque parte de lo comprado sigue en el almacén y no es consumo del ejercicio. Si han
disminuido, resta.

El consumo del ejercicio se obtiene así:

$$\text{Consumo} = \text{Existencia inicial} + \text{Compras} - \text{Existencia final}$$

### Métodos de asignación de valor

Cuando las unidades no son distinguibles entre sí hay que elegir un método:

| Método | Cómo valora las salidas | Admitido por el PGC |
| --- | --- | --- |
| **Precio medio ponderado** | media del coste de las existencias disponibles | **sí**, es el preferente |
| **FIFO** | las primeras que entraron son las primeras que salen | **sí** |
| LIFO | las últimas que entraron son las primeras que salen | **no** |
| Identificación específica | cada unidad por su coste real | sí, y solo si son distinguibles |

$$\text{Precio medio ponderado} =
\frac{\sum (\text{unidades} \times \text{coste unitario})}{\sum \text{unidades}}$$

Y el efecto de elegir uno u otro, **con precios crecientes**:

| | FIFO | Precio medio |
| --- | --- | --- |
| Coste de las salidas | menor, son las antiguas y baratas | intermedio |
| Valor de la existencia final | mayor, las recientes y caras | intermedio |
| Resultado del ejercicio | **mayor** | intermedio |

Con precios decrecientes ocurre al revés. Por eso el método elegido no es indiferente
y el principio de uniformidad del tema 1 obliga a mantenerlo: cambiarlo de un año a
otro alteraría el resultado sin que la actividad hubiera cambiado.

**Ejemplo.** Existencia inicial de 100 unidades a 10 €. Se compran 200 a 13 €. Se
venden 250.

| Método | Coste de las 250 salidas | Existencia final, 50 uds. |
| --- | ---: | ---: |
| FIFO | $100 \times 10 + 150 \times 13 = 2950$ | $50 \times 13 = 650$ |
| Precio medio, 12 €/ud. | $250 \times 12 = 3000$ | $50 \times 12 = 600$ |

El precio medio sale de $(100 \times 10 + 200 \times 13)/300 = 3600/300 = 12$. Y la
comprobación que hay que hacer siempre: coste de salidas más existencia final tiene
que dar el coste total disponible, $1000 + 2600 = 3600$. Con FIFO,
$2950 + 650 = 3600$; con precio medio, $3000 + 600 = 3600$. **Cuadra en los dos.**

## Información a suministrar en las cuentas anuales

En el **balance**, dentro del activo corriente, en el epígrafe de existencias, con
sus categorías por separado y los anticipos a proveedores.

En la **cuenta de pérdidas y ganancias**, las existencias afectan a tres partidas:

| Partida | Qué recoge |
| --- | --- |
| Importe neto de la cifra de negocios | las ventas |
| Variación de existencias de productos terminados y en curso | la (71x), solo de lo fabricado |
| Aprovisionamientos | las compras y la (610), de lo comercial |

**La variación de existencias aparece en dos sitios distintos y no es un
duplicado:** la de mercaderías y materias primas va dentro de Aprovisionamientos,
como menor o mayor consumo; la de productos terminados y en curso va en su propia
partida, por encima, porque es producción del ejercicio no vendida.

En la **memoria** hay que informar de los criterios de valoración aplicados, del
método de asignación elegido, de los importes de los deterioros y sus reversiones con
las circunstancias que los motivaron, y de las existencias afectas a garantía.

El desarrollo de la norma de existencias sigue a \cite{pgc2007} y \cite{zafra2024};
los supuestos de aplicación, a \cite{zafra2024practicos} y \cite{cervera2017}.
