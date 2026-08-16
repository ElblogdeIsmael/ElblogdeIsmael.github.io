# El ciclo contable

Tema 3 del programa. Operaciones de apertura, contabilización de los hechos del ejercicio,
operaciones de cierre y determinación del resultado.

## El ciclo y sus fases

```{=latex}
\begin{definicion}
Conjunto ordenado de operaciones contables que se repiten en cada ejercicio económico, desde
la apertura de los libros hasta la formulación de las cuentas anuales.
\end{definicion}
```

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth,
  f/.style={draw, thick, align=center, font=\scriptsize, minimum width=2.3cm,
            minimum height=1.05cm}]
\node[f] (a) at (0,0) {Asiento de\\apertura};
\node[f] (b) at (2.7,0) {Registro del\\ejercicio};
\node[f] (c) at (5.4,0) {Balance de\\comprobación};
\node[f] (d) at (8.1,0) {Ajustes y\\regularización};
\node[f] (e) at (10.8,0) {Cierre y\\cuentas anuales};
\foreach \x/\y in {a/b, b/c, c/d, d/e} {\draw[->, thick] (\x) -- (\y);}
\end{tikzpicture}
\end{center}
```

| Fase | Momento | Resultado |
| --- | --- | --- |
| **Apertura** | primer día del ejercicio | los saldos iniciales en los libros |
| **Registro** | a lo largo del ejercicio | diario y mayor al día |
| **Comprobación** | periódica y antes del cierre | verificación aritmética |
| **Ajustes** | a fecha de cierre | saldos conformes al devengo |
| **Cierre** | último día | resultado y cuentas anuales |

## Los libros contables

| Libro | Contenido | Obligatorio |
| --- | --- | --- |
| **Diario** | los hechos por orden cronológico | sí |
| **Mayor** | los movimientos agrupados por cuenta | no, pero imprescindible |
| **Inventarios y cuentas anuales** | balance inicial, balances de sumas y saldos, cuentas anuales | sí |

**El diario y el mayor contienen la misma información ordenada de dos formas.** El diario
responde a qué pasó y cuándo; el mayor, a cómo está cada cuenta.

## Operaciones de apertura

El asiento de apertura recoge el balance de cierre del ejercicio anterior: se cargan las
cuentas de activo por sus saldos y se abonan las de pasivo y patrimonio neto.

```{=latex}
\begin{anotacion}
Las cuentas de gestión —ingresos y gastos— \textbf{no aparecen en el asiento de apertura}.
Su saldo se anuló al cierre anterior contra la cuenta de resultados, así que empiezan el
ejercicio a cero. Es la diferencia entre cuentas de balance, que arrastran saldo, y cuentas
de gestión, que miden un flujo de un solo ejercicio.
\end{anotacion}
```

## Registro de los hechos del ejercicio

| Grupo del PGC | Contenido |
| --- | --- |
| 1 | Financiación básica |
| 2 | Activo no corriente |
| 3 | Existencias |
| 4 | Acreedores y deudores por operaciones comerciales |
| 5 | Cuentas financieras |
| **6** | **Compras y gastos** |
| **7** | **Ventas e ingresos** |
| 8 y 9 | Gastos e ingresos imputados al patrimonio neto |

```{=latex}
\begin{ejemplo}
Compra de mercancías por 5000 euros más un 21\,\% de IVA, a crédito:

\medskip
Se carga (600) Compras de mercaderías por 5000 y (472) Hacienda Pública, IVA soportado por
1050; se abona (400) Proveedores por 6050.

\medskip
El IVA soportado es un \emph{derecho de cobro} frente a la Hacienda Pública, no un gasto, y
por eso va al activo. El gasto es solo el precio de la mercancía.
\end{ejemplo}
```

## Operaciones de cierre

### Balance de comprobación de sumas y saldos

| Columna | Contenido |
| --- | --- |
| Sumas del debe | total cargado en cada cuenta |
| Sumas del haber | total abonado |
| Saldo deudor o acreedor | diferencia |

```{=latex}
\begin{proposicion}
En el balance de comprobación se cumplen dos igualdades: la suma de las sumas deudoras
iguala a la de las acreedoras, y la suma de saldos deudores iguala a la de saldos
acreedores. \textbf{Su cumplimiento no garantiza que la contabilidad sea correcta}: no
detecta un asiento omitido por completo, uno duplicado ni uno cuadrado en cuentas
equivocadas.
\end{proposicion}
```

```{=latex}
\begin{ejemplo}
Balance de comprobación de una empresa antes de los ajustes:

\medskip
\begin{center}
\begin{tabular}{lrrrr}
\toprule
& \multicolumn{2}{c}{Sumas} & \multicolumn{2}{c}{Saldos} \\
\cmidrule(lr){2-3}\cmidrule(lr){4-5}
Cuenta & Debe & Haber & Deudor & Acreedor \\
\midrule
(100) Capital social & — & 50\,000 & — & 50\,000 \\
(300) Mercaderías & 12\,000 & — & 12\,000 & — \\
(400) Proveedores & 26\,000 & 41\,000 & — & 15\,000 \\
(430) Clientes & 74\,000 & 59\,000 & 15\,000 & — \\
(572) Bancos & 91\,000 & 61\,000 & 30\,000 & — \\
(600) Compras & 41\,000 & — & 41\,000 & — \\
(640) Sueldos y salarios & 17\,000 & — & 17\,000 & — \\
(700) Ventas & — & 74\,000 & — & 74\,000 \\
(216) Mobiliario & 24\,000 & — & 24\,000 & — \\
\midrule
\textbf{Total} & \textbf{285\,000} & \textbf{285\,000} & \textbf{139\,000} &
\textbf{139\,000} \\
\bottomrule
\end{tabular}
\end{center}

\medskip
Las dos igualdades se cumplen. Aun así falta la regularización de existencias y los ajustes
por periodificación, así que estos saldos todavía no sirven para formular las cuentas
anuales.
\end{ejemplo}
```

### Ajustes por periodificación

**Aplican el principio de devengo a los saldos que la fecha de cierre corta por la mitad.**

| Ajuste | Situación | Asiento |
| --- | --- | --- |
| **Gasto anticipado** | pagado este año, corresponde al siguiente | (480) Gastos anticipados a (6xx) |
| **Ingreso anticipado** | cobrado este año, corresponde al siguiente | (7xx) a (485) Ingresos anticipados |
| **Gasto devengado y no pagado** | consumido, aún no facturado ni pagado | (6xx) a (411) Acreedores por prestación de servicios |
| **Ingreso devengado y no cobrado** | prestado, aún no cobrado | (441) Deudores a (7xx) |

### Regularización de existencias

$$\text{Consumo} = \text{Existencias iniciales} + \text{Compras} - \text{Existencias finales}$$

| Paso | Asiento |
| --- | --- |
| 1. Dar de baja las iniciales | (610) Variación de existencias a (300) Mercaderías |
| 2. Dar de alta las finales | (300) Mercaderías a (610) Variación de existencias |

```{=latex}
\begin{anotacion}
La cuenta (610) recoge, tras los dos asientos, la \textbf{variación} del ejercicio, no el
consumo. El consumo se obtiene sumándole las compras del grupo 60. Confundir ambas cifras es
el error más común del cierre, y desplaza el resultado en el importe de la variación.
\end{anotacion}
```

### Correcciones valorativas

| Corrección | Qué recoge | Cuenta compensadora |
| --- | --- | --- |
| **Amortización** | depreciación sistemática e irreversible | (281) Amortización acumulada |
| **Deterioro** | pérdida de valor reversible | (29x), (39x), (49x) |

**Las cuentas compensadoras figuran en el activo con signo negativo**, así que el
inmovilizado nunca pierde su valor de coste en libros: se muestran los dos importes y su
diferencia es el valor contable.

## El resultado del ejercicio

| Paso | Asiento | Efecto |
| --- | --- | --- |
| 1. Regularizar gastos | (129) Resultado del ejercicio a Grupo 6 | anula los saldos deudores |
| 2. Regularizar ingresos | Grupo 7 a (129) Resultado del ejercicio | anula los saldos acreedores |
| 3. Determinar | saldo de (129) | acreedor si hay beneficio |

$$\text{Resultado} = \text{Ingresos} - \text{Gastos}$$

| Nivel | Cálculo |
| --- | --- |
| Resultado de explotación | ingresos y gastos de la actividad ordinaria |
| Resultado financiero | ingresos y gastos financieros |
| **Resultado antes de impuestos** | suma de los dos anteriores |
| **Resultado del ejercicio** | menos el impuesto sobre beneficios |

```{=latex}
\begin{proposicion}
El resultado obtenido por diferencia entre ingresos y gastos coincide con la variación del
patrimonio neto del ejercicio, siempre que no haya habido aportaciones ni distribuciones a
los socios. Es la comprobación cruzada del cierre.
\end{proposicion}
```

### Asiento de cierre

Se cargan todas las cuentas con saldo acreedor y se abonan las de saldo deudor, dejando
todas a cero. **El asiento de cierre y el de apertura del año siguiente son idénticos con
las cuentas invertidas.**

## Ejercicios

```{=latex}
\begin{ejercicio}
Una empresa paga el 1 de octubre una prima de seguro de 2400 euros que cubre doce meses.
Registrar el pago y el ajuste de cierre a 31 de diciembre.
\end{ejercicio}

\begin{solucion}
\emph{1 de octubre}: se carga (625) Primas de seguros por 2400 y se abona (572) Bancos por
2400.

\medskip
\emph{31 de diciembre}: solo tres meses corresponden al ejercicio, es decir 600 euros. Los
1800 restantes se periodifican: se carga (480) Gastos anticipados por 1800 y se abona (625)
por 1800.

\medskip
El gasto del ejercicio queda en 600 y en el activo corriente figura un derecho de 1800, que
es la parte de cobertura ya pagada y todavía no consumida.
\end{solucion}

\begin{ejercicio}
Existencias iniciales 18\,000, compras del ejercicio 95\,000, existencias finales 22\,000.
Calcular el consumo y plantear los asientos de regularización.
\end{ejercicio}

\begin{solucion}
$$\text{Consumo} = 18\,000 + 95\,000 - 22\,000 = 91\,000$$

\medskip
\emph{Asiento 1}: (610) a (300) por 18\,000, para dar de baja las iniciales.

\medskip
\emph{Asiento 2}: (300) a (610) por 22\,000, para dar de alta las finales.

\medskip
La cuenta (610) queda con saldo acreedor de 4000, que es la variación. Sumada a los 95\,000
de compras con su signo, el gasto por aprovisionamientos es
$95\,000 - 4000 = 91\,000$, el consumo calculado.
\end{solucion}

\begin{ejercicio}
Al cierre, los saldos son: compras 91\,000, sueldos 40\,000, amortización 6000, ventas
158\,000 e ingresos financieros 1200. Determinar el resultado y su desglose.
\end{ejercicio}

\begin{solucion}
Resultado de explotación: $158\,000 - (91\,000+40\,000+6000) = 21\,000$.

\medskip
Resultado financiero: 1200.

\medskip
Resultado antes de impuestos: 22\,200. Con un tipo del 25\,\%, el impuesto es 5550 y el
resultado del ejercicio, \textbf{16\,650} euros, que se abona a (129) y figurará en el
patrimonio neto del balance hasta que la junta decida su aplicación.
\end{solucion}
```

El ciclo contable está desarrollado en \cite{rodriguez2022teoria}, con supuestos completos
en \cite{rodriguez2022practicas} y \cite{saez2002}.
