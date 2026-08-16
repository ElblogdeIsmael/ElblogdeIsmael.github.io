# Operaciones a corto plazo

Tema 3 del programa. Las operaciones que se liquidan en régimen simple: descuento de
efectos, cuentas corrientes, cuentas de crédito y los instrumentos del mercado monetario.

## Descuento de efectos

```{=latex}
\begin{definicion}
Operación por la que una entidad anticipa al tenedor de un efecto comercial su importe,
antes del vencimiento, descontando intereses y comisiones y reservándose la acción de
regreso si el librado no paga.
\end{definicion}
```

**La entidad no compra el crédito, lo anticipa.** Si el efecto resulta impagado, lo devuelve
al cedente con los gastos, y de ahí que el riesgo real siga siendo del cliente.

| Concepto | Cómo se calcula |
| --- | --- |
| Nominal | el importe del efecto, $N$ |
| **Descuento** | $D = N\,d\,\dfrac{t}{360}$, con $t$ en días |
| Comisión | un tanto por mil sobre el nominal, con mínimo por efecto |
| Otros gastos | correo, timbres, gastos de domiciliación |
| **Efectivo** | $E = N - D - \text{comisión} - \text{gastos}$ |

```{=latex}
\begin{anotacion}
La \textbf{comisión con mínimo} es lo que hace que descontar efectos pequeños sea
desproporcionadamente caro. Con un mínimo de 6 euros por efecto, un efecto de 300 euros a
30 días soporta un coste que equivale a un tanto anual muy superior al tipo nominal
pactado. Al comparar, se calcula siempre el tanto efectivo, nunca el nominal.
\end{anotacion}
```

### La remesa

Los efectos se presentan en grupo. El descuento de la remesa se puede liquidar efecto a
efecto o, si el contrato lo permite, por el **método del vencimiento medio**: se sustituye
la remesa por un solo capital igual a la suma de nominales, con el vencimiento medio del
tema anterior.

```{=latex}
\begin{proposicion}
Con descuento comercial y sin comisiones, liquidar efecto a efecto y liquidar por el
vencimiento medio dan \textbf{el mismo descuento total}. La equivalencia se rompe en cuanto
hay comisión con mínimo, porque esta no es proporcional al nominal.
\end{proposicion}
```

```{=latex}
\begin{ejemplo}
Remesa de tres efectos al 10\,\% de descuento, comisión del 4 por mil con mínimo de 5 euros,
año de 360 días:

\medskip
\begin{center}
\begin{tabular}{lrrrr}
\toprule
Efecto & Nominal & Días & Descuento & Comisión \\
\midrule
A & 3\,000 & 30 & 25,00 & 12,00 \\
B & 1\,500 & 60 & 25,00 & 6,00 \\
C & \phantom{0}500 & 90 & 12,50 & 5,00 \\
\midrule
Total & 5\,000 & & 62,50 & 23,00 \\
\bottomrule
\end{tabular}
\end{center}

\medskip
El efectivo es $5000 - 62{,}50 - 23 = 4914{,}50$. En el efecto C la comisión llega al
mínimo: 5 euros sobre 500 es un 1\,\%, frente al 0,4\,\% de los otros dos.
\end{ejemplo}
```

### El tanto efectivo de la operación

Se obtiene de la ecuación de equivalencia entre lo que se recibe hoy y lo que se deja de
cobrar al vencimiento:

$$E\,\Big(1 + i\,\tfrac{t}{360}\Big) = N \qquad\Longrightarrow\qquad
i = \frac{N - E}{E}\cdot\frac{360}{t}$$

**Ese tanto es siempre mayor que el tipo de descuento nominal**, por dos motivos que se
suman: el descuento se calcula sobre el nominal y no sobre el efectivo, y las comisiones
reducen lo recibido sin reducir lo debido.

## Cuentas corrientes

Registro de los movimientos entre dos partes, con liquidación periódica de intereses. Se
liquidan en régimen simple.

| Método | Cómo funciona | Uso |
| --- | --- | --- |
| **Hamburgués** o de saldos | se calcula el saldo tras cada movimiento y se capitalizan los días que dura | **el que usa la banca** |
| Directo | cada movimiento genera intereses desde su fecha hasta el cierre | histórico |
| Indirecto | cada movimiento genera intereses desde su fecha hasta una fecha de referencia | histórico |

### El método hamburgués

```{=latex}
\begin{definicion}[Número comercial]
Producto del saldo por los días que permanece: $\text{Nc} = S\cdot t$. Los intereses del
periodo son $\sum \text{Nc}\cdot i/360$.
\end{definicion}
```

| Columna | Contenido |
| --- | --- |
| Fecha valor | la que determina el cómputo de días, no la de la operación |
| Concepto | ingreso o disposición |
| Saldo | acumulado tras el movimiento |
| Días | hasta el movimiento siguiente o el cierre |
| **Números** | saldo por días |

```{=latex}
\begin{anotacion}
La \textbf{fecha valor} no coincide con la fecha de la operación, y esa diferencia es
retribución encubierta: en un abono suele ser posterior y en un cargo anterior, así que el
saldo que genera intereses a favor del cliente es menor que el saldo contable. La normativa
de transparencia limita los desfases aplicables, pero la distinción sigue siendo la primera
cosa que hay que mirar en una liquidación.
\end{anotacion}
```

```{=latex}
\begin{ejemplo}
Cuenta al 2\,\% anual, liquidación al final del trimestre, año de 360 días:

\medskip
\begin{center}
\begin{tabular}{lrrrr}
\toprule
Fecha valor & Movimiento & Saldo & Días & Números \\
\midrule
1-ene & +6\,000 & 6\,000 & 40 & 240\,000 \\
10-feb & $-$2\,000 & 4\,000 & 30 & 120\,000 \\
12-mar & +1\,000 & 5\,000 & 20 & 100\,000 \\
\midrule
\multicolumn{4}{r}{Suma de números} & 460\,000 \\
\bottomrule
\end{tabular}
\end{center}

\medskip
Intereses: $460\,000\cdot0{,}02/360 = 25{,}56$ euros.
\end{ejemplo}
```

## Cuentas de crédito

La entidad pone un límite a disposición del cliente, que dispone de él según lo necesite y
paga por lo dispuesto.

| Concepto | Qué se paga | Sobre qué |
| --- | --- | --- |
| **Interés deudor** | tipo pactado | los saldos dispuestos |
| **Comisión de disponibilidad** | tanto reducido | el saldo **no** dispuesto |
| Comisión de apertura | porcentaje único | el límite |
| **Interés excedido** | tipo penalizador | lo que supera el límite |

**La diferencia con un préstamo es la flexibilidad, y su precio es la comisión de
disponibilidad.** Se paga por tener el dinero disponible aunque no se use, así que una
póliza infrautilizada es más cara que un préstamo del importe realmente necesario.

```{=latex}
\begin{anotacion}
La liquidación de una cuenta de crédito usa el método hamburgués con \textbf{tres columnas
de números}: deudores, acreedores y excedidos, cada una con su tipo. El error clásico es
aplicar el tipo deudor al tramo excedido; el excedido lleva su propio tipo, muy superior, y
a veces una comisión sobre el mayor saldo excedido del periodo.
\end{anotacion}
```

## Instrumentos del mercado monetario

| Instrumento | Emisor | Forma de rendimiento |
| --- | --- | --- |
| **Letra del Tesoro** | Estado | al descuento: se compra bajo par y se amortiza a la par |
| Pagaré de empresa | empresas | al descuento |
| Repo | entidades | compraventa con pacto de recompra |
| Depósito interbancario | entidades | interés explícito |

### Letras del Tesoro

Se emiten a 3, 6, 9 y 12 meses. Al ser emitidas al descuento, el rendimiento es la
diferencia entre precio de compra y nominal.

$$\text{Rentabilidad} = \frac{N - P}{P}\cdot\frac{360}{t} \quad (t \le 376),
\qquad \Big(\frac{N}{P}\Big)^{365/t} - 1 \quad (t > 376)$$

**El Tesoro usa régimen simple para plazos hasta 376 días y compuesto por encima**, y esa
convención es la que hay que respetar al comparar con otros productos.

### Operaciones repo

```{=latex}
\begin{definicion}
Compraventa de un activo con pacto de recompra en fecha y precio fijados de antemano. El
rendimiento es la diferencia entre los dos precios.
\end{definicion}
```

Económicamente es un préstamo con garantía: quien vende obtiene liquidez y quien compra
obtiene un activo como colateral. **Por eso su tipo es inferior al de un depósito sin
garantía del mismo plazo**, y la diferencia entre los dos mide la percepción de riesgo del
mercado.

## Ejercicios

```{=latex}
\begin{ejercicio}
Se descuenta un efecto de 6000 euros a 45 días al 11\,\% de descuento, con una comisión del
3 por mil y 4 euros de gastos. Año de 360 días. Hallar el efectivo y el tanto efectivo de la
operación.
\end{ejercicio}

\begin{solucion}
$D = 6000\cdot0{,}11\cdot45/360 = 82{,}50$. Comisión: $6000\cdot0{,}003 = 18$.

\medskip
$E = 6000 - 82{,}50 - 18 - 4 = 5895{,}50$.

\medskip
$$i = \frac{6000-5895{,}50}{5895{,}50}\cdot\frac{360}{45} = 0{,}1418$$
Un 14,18\,\% frente al 11\,\% nominal. Los tres puntos de diferencia salen de la comisión,
de los gastos fijos y de que el descuento se calcula sobre el nominal.
\end{solucion}

\begin{ejercicio}
Una cuenta de crédito de 50\,000 euros de límite cobra un 7\,\% deudor, un 0,5\,\% de
comisión de disponibilidad sobre el saldo medio no dispuesto y un 25\,\% de excedido.
Durante un trimestre de 90 días el saldo medio dispuesto es de 20\,000 euros y hubo 10 días
con 4000 euros de excedido. Estimar el coste.
\end{ejercicio}

\begin{solucion}
Intereses deudores: $20\,000\cdot0{,}07\cdot90/360 = 350$.

\medskip
Disponibilidad: el no dispuesto medio es $50\,000-20\,000 = 30\,000$, así que
$30\,000\cdot0{,}005\cdot90/360 = 37{,}50$.

\medskip
Excedido: $4000\cdot0{,}25\cdot10/360 = 27{,}78$.

\medskip
Total: 415,28 euros. Los diez días de excedido cuestan casi tanto como el trimestre entero
de comisión de disponibilidad, que es exactamente lo que la penalización busca.
\end{solucion}

\begin{ejercicio}
Una letra del Tesoro a 12 meses (365 días) de 1000 euros de nominal se adjudica a 972 euros.
Hallar su rentabilidad.
\end{ejercicio}

\begin{solucion}
El plazo no supera los 376 días, así que se aplica régimen simple:
$$i = \frac{1000-972}{972}\cdot\frac{360}{365} = 0{,}0284$$
Un 2,84\,\%. Nótese que la rentabilidad se calcula sobre el precio pagado, no sobre el
nominal: dividir 28 entre 1000 daría un 2,8\,\%, algo menos, y es el error habitual.
\end{solucion}
```

Las operaciones financieras a corto plazo están desarrolladas en \cite{frias2025}, con su
versión en inglés en \cite{frias2025en}.
