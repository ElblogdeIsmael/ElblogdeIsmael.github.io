# Temario práctico

Los diez bloques prácticos del programa, con el planteamiento y la resolución de un supuesto
por bloque.

## 1. El patrimonio y sus componentes

```{=latex}
\begin{ejercicio}
Clasificar en activo no corriente, activo corriente, patrimonio neto, pasivo no corriente y
pasivo corriente: local en propiedad 180\,000; mercaderías 24\,000; capital social 150\,000;
préstamo bancario a cinco años 90\,000; clientes 31\,000; proveedores 18\,000; bancos 12\,000;
mobiliario 9\,000; reservas 8\,000; deuda con Hacienda a corto 4\,000. Comprobar la ecuación
fundamental.
\end{ejercicio}

\begin{solucion}
\begin{center}
\begin{tabular}{lr@{\qquad}lr}
\toprule
Activo no corriente & 189\,000 & Patrimonio neto & 158\,000 \\
\quad Local & 180\,000 & \quad Capital social & 150\,000 \\
\quad Mobiliario & 9\,000 & \quad Reservas & 8\,000 \\
Activo corriente & 67\,000 & Pasivo no corriente & 90\,000 \\
\quad Mercaderías & 24\,000 & \quad Préstamo a largo & 90\,000 \\
\quad Clientes & 31\,000 & Pasivo corriente & 22\,000 \\
\quad Bancos & 12\,000 & \quad Proveedores & 18\,000 \\
 & & \quad Hacienda acreedora & 4\,000 \\
\midrule
\textbf{Total activo} & \textbf{256\,000} & \textbf{Total PN y pasivo} & \textbf{270\,000} \\
\bottomrule
\end{tabular}
\end{center}

\medskip
\textbf{No cuadra}: faltan 14\,000 en el activo o sobran en el pasivo. Con estos datos, el
patrimonio neto real es $256\,000 - 112\,000 = 144\,000$, así que las reservas no pueden ser
8000 con un capital de 150\,000: hay un resultado negativo de 14\,000 que el enunciado no
menciona.

\medskip
La conclusión práctica: \textbf{el descuadre es información}, y lo primero ante un balance
que no cuadra es buscar la partida ausente, no forzar los números.
\end{solucion}
```

## 2. La cuenta

```{=latex}
\begin{ejercicio}
La cuenta (430) Clientes presenta un saldo inicial deudor de 15\,000. Durante el mes se
realizan ventas a crédito por 42\,000, se cobran 38\,000 y se acepta la devolución de una
venta por 1500. Determinar el saldo final y explicar su significado.
\end{ejercicio}

\begin{solucion}
Debe: $15\,000 + 42\,000 = 57\,000$. Haber: $38\,000 + 1500 = 39\,500$.

\medskip
Saldo deudor de \textbf{17\,500} euros. Es un derecho de cobro: lo que los clientes deben a
la fecha. Un saldo acreedor en esta cuenta sería anómalo y señalaría un anticipo recibido,
que va a (438) Anticipos de clientes.
\end{solucion}
```

## 3. El asiento contable

```{=latex}
\begin{ejercicio}
Registrar en el diario: compra de un ordenador por 1200 euros más IVA del 21\,\%, pagando la
mitad por banco y quedando a deber el resto.
\end{ejercicio}

\begin{solucion}
Base 1200, IVA 252, total 1452, del que se pagan 726.

\medskip
\begin{center}
\begin{tabular}{rlr}
\toprule
Debe & Cuenta & Haber \\
\midrule
1200 & (217) Equipos para procesos de información & \\
252 & (472) H.P., IVA soportado & \\
 & (572) Bancos & 726 \\
 & (523) Proveedores de inmovilizado a corto plazo & 726 \\
\bottomrule
\end{tabular}
\end{center}

\medskip
El ordenador va al grupo 2 y no a (600) Compras: es inmovilizado porque se va a usar más de
un ejercicio. Y la deuda va a (523), no a (400) Proveedores, porque no procede de la
actividad comercial habitual.
\end{solucion}
```

## 4. El ciclo contable

```{=latex}
\begin{ejercicio}
Una empresa abre el ejercicio con: bancos 20\,000, mercaderías 10\,000, proveedores 6\,000 y
capital social 24\,000. Durante el año compra mercancías por 30\,000 a crédito, vende por
48\,000 al contado y paga sueldos por 9\,000. Las existencias finales son 7\,000. Plantear el
ciclo completo.
\end{ejercicio}

\begin{solucion}
\emph{Apertura}: se cargan (572) 20\,000 y (300) 10\,000; se abonan (400) 6\,000 y (100)
24\,000.

\medskip
\emph{Ejercicio}: (600) a (400) por 30\,000; (572) a (700) por 48\,000; (640) a (572) por
9\,000.

\medskip
\emph{Regularización de existencias}: (610) a (300) por 10\,000 y (300) a (610) por 7\,000.
La cuenta (610) queda con saldo deudor de 3000: las existencias han disminuido, así que el
consumo supera a las compras.

\medskip
\emph{Resultado}: ingresos 48\,000; gastos $30\,000 + 3000 + 9000 = 42\,000$. Beneficio de
\textbf{6000} euros.

\medskip
\emph{Comprobación}: patrimonio neto final $24\,000 + 6000 = 30\,000$. Activo final:
bancos $20\,000+48\,000-9000 = 59\,000$ y mercaderías 7000, total 66\,000. Pasivo:
$6000+30\,000 = 36\,000$. En efecto, $66\,000 - 36\,000 = 30\,000$.
\end{solucion}
```

## 5. El balance de comprobación

```{=latex}
\begin{ejercicio}
Un balance de sumas y saldos cuadra perfectamente y sin embargo la contabilidad tiene tres
errores: un asiento de compra de 2000 euros no se ha registrado, un asiento de venta se ha
anotado dos veces y un pago a proveedor se ha cargado a (410) en lugar de a (400). Explicar
por qué ninguno se detecta.
\end{ejercicio}

\begin{solucion}
Los tres respetan la partida doble. El asiento omitido no aparece en ninguna columna, así
que las sumas siguen siendo iguales entre sí, aunque menores de lo debido. El duplicado
suma el mismo importe al debe y al haber. Y el error de cuenta cambia dónde está el importe,
no cuánto hay en cada columna.

\medskip
\textbf{El balance de comprobación verifica la aritmética, no la contabilidad.} Los errores
de omisión, duplicación y cuenta equivocada se detectan con conciliaciones externas
—extracto bancario, circularización de saldos, inventario físico—, no con el cuadre.
\end{solucion}
```

## 6. Periodificación de ingresos y gastos

```{=latex}
\begin{ejercicio}
A 31 de diciembre: se ha cobrado por adelantado un alquiler de 9000 euros correspondiente a
seis meses que empiezan el 1 de noviembre; están pendientes de pago intereses devengados de
un préstamo por 1400; y se pagó en septiembre una suscripción anual de 3600 euros que cubre
doce meses desde el 1 de septiembre. Plantear los ajustes.
\end{ejercicio}

\begin{solucion}
\emph{Alquiler cobrado}: de los seis meses, dos corresponden al ejercicio, es decir 3000. Se
periodifican 6000: (752) a (485) Ingresos anticipados por 6000.

\medskip
\emph{Intereses devengados y no pagados}: (662) a (527) Intereses a corto plazo de deudas
por 1400.

\medskip
\emph{Suscripción}: cuatro de los doce meses son del ejercicio, es decir 1200. Se
periodifican 2400: (480) Gastos anticipados a (629) por 2400.

\medskip
Sin estos tres ajustes el resultado estaría sobrevalorado en $6000 - 1400 + 2400 = 7000$
euros, y ninguno de los tres errores rompería el cuadre.
\end{solucion}
```

## 7. Regularización de la cuenta de mercaderías

```{=latex}
\begin{ejercicio}
Existencias iniciales 40\,000. Compras 210\,000, con descuentos por pronto pago de 4000 y
devoluciones de compras por 6000. Existencias finales 35\,000. Calcular el consumo.
\end{ejercicio}

\begin{solucion}
Compras netas: $210\,000 - 4000 - 6000 = 200\,000$.

\medskip
$$\text{Consumo} = 40\,000 + 200\,000 - 35\,000 = 205\,000$$

\medskip
Los descuentos por pronto pago sobre compras van a (606) y las devoluciones a (608): ambas
minoran el aprovisionamiento. \textbf{No son ingresos}, y llevarlas al grupo 7 inflaría a la
vez ingresos y gastos dejando el resultado igual, pero falseando las cifras de negocio.
\end{solucion}
```

## 8. Correcciones valorativas: la amortización

```{=latex}
\begin{ejercicio}
Una máquina cuesta 60\,000 euros, tiene una vida útil de ocho años y un valor residual
estimado de 4000. Calcular la cuota anual por el método lineal y el valor contable al cierre
del cuarto año. Comparar con el método de los números dígitos decrecientes.
\end{ejercicio}

\begin{solucion}
\emph{Lineal}:
$$\text{Cuota} = \frac{60\,000-4000}{8} = 7000 \text{ euros al año}$$
Amortización acumulada tras cuatro años: 28\,000. Valor contable: $60\,000 - 28\,000 =
32\,000$.

\medskip
\emph{Dígitos decrecientes}: la suma de dígitos es $1+2+\dots+8 = 36$. La cuota del año $k$
es $(9-k)/36$ de la base amortizable de 56\,000.

\medskip
\begin{center}
\begin{tabular}{crrr}
\toprule
Año & Fracción & Cuota & Acumulada \\
\midrule
1 & 8/36 & 12\,444 & 12\,444 \\
2 & 7/36 & 10\,889 & 23\,333 \\
3 & 6/36 & 9\,333 & 32\,667 \\
4 & 5/36 & 7\,778 & 40\,444 \\
\bottomrule
\end{tabular}
\end{center}

\medskip
Valor contable tras cuatro años: 19\,556. El método acelerado ha amortizado un 72\,\% de la
base frente al 50\,\% del lineal. \textbf{El total amortizado a lo largo de la vida útil es
el mismo}; lo que cambia es su reparto, y con él el resultado de cada ejercicio.
\end{solucion}
```

## 9. Efectos comerciales a cobrar: descuento y gestión de cobro

```{=latex}
\begin{ejercicio}
Se libra una letra de 20\,000 euros a un cliente y se lleva al banco. Registrar los dos
supuestos: entrega en gestión de cobro con una comisión de 60 euros, y descuento con 400
euros de intereses y 60 de comisión.
\end{ejercicio}

\begin{solucion}
\emph{Libramiento}: (431) Clientes, efectos comerciales a cobrar a (430) Clientes por
20\,000.

\medskip
\emph{Gestión de cobro}: (4312) Efectos en gestión de cobro a (431) por 20\,000. Al
vencimiento: (572) 19\,940 y (626) Servicios bancarios 60, a (4312) 20\,000.

\medskip
\emph{Descuento}: (4311) Efectos descontados a (431) por 20\,000, y (572) 19\,540, (665)
Intereses por descuento de efectos 400 y (626) 60, a (5208) Deudas por efectos descontados
20\,000.

\medskip
La diferencia esencial: en gestión de cobro \textbf{no nace ninguna deuda}, porque el banco
solo cobra por cuenta de la empresa. En el descuento sí, porque el banco anticipa el dinero
y conserva la acción de regreso si el cliente no paga. Al vencimiento, si el efecto se
atiende, se cancelan (5208) contra (4311).
\end{solucion}
```

## 10. Operaciones con clientes: insolvencias

```{=latex}
\begin{ejercicio}
Un cliente debe 8000 euros y entra en concurso. Registrar la reclasificación, la dotación
del deterioro estimado en el 60\,\% y el desenlace en los dos escenarios: cobro final de 3000
y declaración de fallido total.
\end{ejercicio}

\begin{solucion}
\emph{Reclasificación}: (436) Clientes de dudoso cobro a (430) Clientes por 8000. El saldo
cambia de sitio dentro del activo; no hay gasto todavía.

\medskip
\emph{Deterioro}: (694) Pérdidas por deterioro de créditos comerciales a (490) Deterioro de
valor de créditos por operaciones comerciales, por 4800. Ahora sí hay gasto, y (490) figura
en el activo minorando a (436).

\medskip
\emph{Escenario 1, cobro de 3000}: se carga (572) por 3000 y (650) Pérdidas de créditos
comerciales incobrables por 5000, abonando (436) por 8000. Y se revierte el deterioro
sobrante: (490) a (794) Reversión del deterioro por 4800.

\medskip
\emph{Escenario 2, fallido total}: (650) por 8000 a (436) por 8000, más la misma reversión
de 4800.

\medskip
En los dos casos el gasto neto acumulado coincide con la pérdida real, 5000 en el primero y
8000 en el segundo. \textbf{El deterioro es una estimación provisional}, y su reversión
evita contabilizar la pérdida dos veces.
\end{solucion}
```

## Supuesto de síntesis

```{=latex}
\begin{ejercicio}
Con los datos del bloque 4, añadir estos hechos y rehacer el resultado: amortización del
inmovilizado por 2500, un cliente de 1200 declarado de dudoso cobro con un deterioro
estimado del 50\,\%, y una factura de suministros de diciembre por 800 recibida en enero.
\end{ejercicio}

\begin{solucion}
Gastos adicionales: amortización 2500, deterioro 600 y suministros devengados 800, en total
3900.

\medskip
El beneficio pasa de 6000 a \textbf{2100} euros.

\medskip
Nótese que ninguno de los tres implica salida de dinero en el ejercicio: la tesorería es la
misma y el resultado ha caído un 65\,\%. Es la consecuencia directa del principio de
devengo, y la razón de que el beneficio y la caja se analicen por separado.
\end{solucion}
```

## Supuestos adicionales

```{=latex}
\begin{ejercicio}
Una empresa compra una furgoneta por 28\,000 euros más IVA. Paga además 900 de transporte,
1200 de matriculación e impuestos no recuperables, 400 de rotulación publicitaria con el
logotipo y 350 de un curso de conducción eficiente para los repartidores. Determinar el
precio de adquisición.
\end{ejercicio}

\begin{solucion}
Se activan el precio, el transporte, la matriculación y la rotulación, porque son necesarios
para poner el vehículo en condiciones de uso o forman parte de él:
$$28\,000 + 900 + 1200 + 400 = 30\,500$$

\medskip
El curso \textbf{no} se activa: es formación de personal, gasto del ejercicio, y su beneficio
no está incorporado al vehículo. El IVA soportado tampoco, porque es deducible.

\medskip
Si se activaran los 350 del curso, el resultado del año mejoraría en esa cifra y empeoraría
en los siguientes por el mayor cargo de amortización. Es pequeño en este caso y el criterio
es el mismo para importes grandes.
\end{solucion}

\begin{ejercicio}
Determinar el fondo de maniobra y valorar la situación: activo corriente 145\,000, del que
existencias 90\,000; pasivo corriente 130\,000.
\end{ejercicio}

\begin{solucion}
$$\text{Fondo de maniobra} = 145\,000 - 130\,000 = 15\,000$$
Es positivo, así que el equilibrio a corto plazo parece correcto.

\medskip
El matiz está en la composición. La \emph{prueba ácida}, que excluye las existencias por ser
la partida menos líquida, da
$$\frac{145\,000-90\,000}{130\,000} = 0{,}42$$
muy por debajo de 1. La empresa solo puede atender el 42\,\% de sus deudas a corto sin
vender mercancía, y si las ventas se ralentizan tiene un problema de tesorería pese al fondo
de maniobra positivo.

\medskip
\textbf{Un solo ratio no diagnostica nada}: el fondo de maniobra dice cuánto y la prueba
ácida dice de qué está hecho.
\end{solucion}

\begin{ejercicio}
Una empresa contabiliza como gasto del ejercicio una reparación de 40\,000 euros que alarga
en tres años la vida útil de una máquina. Discutir el tratamiento.
\end{ejercicio}

\begin{solucion}
El tratamiento es incorrecto. Una intervención que amplía la capacidad, mejora el
rendimiento o alarga la vida útil es una \emph{renovación o mejora} y se capitaliza, sumando
su importe al valor del inmovilizado y recalculando la amortización sobre la vida útil
revisada. Solo el mantenimiento que conserva el activo en condiciones normales es gasto.

\medskip
El efecto de contabilizarlo mal: el resultado del ejercicio baja 40\,000 euros de golpe y el
de los tres siguientes sube, porque no soportan la amortización adicional. El patrimonio
neto queda infravalorado y la comparación entre ejercicios, distorsionada.

\medskip
Es el reverso del caso anterior, y muestra que la frontera entre gasto y activo se puede
cruzar en las dos direcciones.
\end{solucion}
```

## Supuesto global: del balance de comprobación a las cuentas anuales

Comercial Alhambra, S.L. presenta a 31 de diciembre los siguientes saldos, antes de ajustes.

```{=latex}
\begin{center}
\begin{tabular}{lrr}
\toprule
Cuenta & Deudor & Acreedor \\
\midrule
(100) Capital social & — & 60\,000 \\
(113) Reservas voluntarias & — & 14\,000 \\
(170) Deudas a largo plazo con entidades de crédito & — & 45\,000 \\
(211) Construcciones & 96\,000 & — \\
(216) Mobiliario & 18\,000 & — \\
(281) Amortización acumulada del inmovilizado material & — & 21\,000 \\
(300) Mercaderías & 26\,000 & — \\
(400) Proveedores & — & 33\,000 \\
(430) Clientes & 41\,000 & — \\
(572) Bancos & 19\,000 & — \\
(600) Compras de mercaderías & 184\,000 & — \\
(621) Arrendamientos & 14\,400 & — \\
(628) Suministros & 7\,600 & — \\
(640) Sueldos y salarios & 62\,000 & — \\
(642) Seguridad Social a cargo de la empresa & 19\,000 & — \\
(662) Intereses de deudas & 2\,000 & — \\
(700) Ventas de mercaderías & — & 316\,000 \\
\midrule
\textbf{Total} & \textbf{489\,000} & \textbf{489\,000} \\
\bottomrule
\end{tabular}
\end{center}
```

Información para los ajustes:

| Dato | Importe |
| --- | --- |
| Existencias finales de mercaderías | 31 000 |
| Amortización del ejercicio | 5 400 |
| Un cliente de 3 000 pasa a dudoso cobro, con deterioro del 50 % | |
| Suministros de diciembre pendientes de factura | 900 |
| El arrendamiento incluye enero del año siguiente | 1 200 |
| Tipo del impuesto sobre beneficios | 25 % |

```{=latex}
\begin{ejercicio}
Plantear los ajustes, determinar el resultado y formular el balance y la cuenta de pérdidas
y ganancias.
\end{ejercicio}

\begin{solucion}
\emph{Ajustes}:

\medskip
\begin{tabular}{@{}ll@{}}
1. Existencias & (610) a (300) 26\,000 y (300) a (610) 31\,000 \\
2. Amortización & (681) a (281) 5\,400 \\
3. Reclasificación & (436) a (430) 3\,000 \\
4. Deterioro & (694) a (490) 1\,500 \\
5. Suministros devengados & (628) a (410) 900 \\
6. Arrendamiento anticipado & (480) a (621) 1\,200 \\
\end{tabular}

\medskip
\emph{Cuenta de pérdidas y ganancias}:

\medskip
\begin{center}
\begin{tabular}{lr}
\toprule
Importe neto de la cifra de negocios & 316\,000 \\
Aprovisionamientos & $-$179\,000 \\
Gastos de personal & $-$81\,000 \\
Otros gastos de explotación & $-$23\,200 \\
Amortización del inmovilizado & $-$5\,400 \\
\midrule
\textbf{A) Resultado de explotación} & \textbf{27\,400} \\
Gastos financieros & $-$2\,000 \\
\midrule
\textbf{B) Resultado financiero} & \textbf{$-$2\,000} \\
\textbf{C) Resultado antes de impuestos} & \textbf{25\,400} \\
Impuesto sobre beneficios & $-$6\,350 \\
\midrule
\textbf{D) Resultado del ejercicio} & \textbf{19\,050} \\
\bottomrule
\end{tabular}
\end{center}

\medskip
Los aprovisionamientos son $184\,000 - 5000$ de variación positiva de existencias. Los otros
gastos de explotación reúnen arrendamientos $14\,400-1200 = 13\,200$, suministros
$7600+900 = 8500$ y el deterioro de 1500.

\medskip
\emph{Balance}:

\medskip
\begin{center}
\begin{tabular}{lr@{\qquad}lr}
\toprule
\textbf{Activo} & & \textbf{PN y pasivo} & \\
\midrule
Inmovilizado material & 87\,600 & Capital social & 60\,000 \\
\quad Construcciones y mobiliario & 114\,000 & Reservas & 14\,000 \\
\quad Amort. acumulada & $-$26\,400 & Resultado del ejercicio & 19\,050 \\
Existencias & 31\,000 & \textbf{Patrimonio neto} & \textbf{93\,050} \\
Clientes & 38\,000 & Deudas a largo plazo & 45\,000 \\
Clientes de dudoso cobro & 3\,000 & Proveedores & 33\,000 \\
Deterioro de créditos & $-$1\,500 & Acreedores por servicios & 900 \\
Periodificaciones & 1\,200 & H.P. acreedora por I. Sociedades & 6\,350 \\
Bancos & 19\,000 & & \\
\midrule
\textbf{Total activo} & \textbf{178\,300} & \textbf{Total PN y pasivo} &
\textbf{178\,300} \\
\bottomrule
\end{tabular}
\end{center}

\medskip
El balance cuadra, y esa es la comprobación final del ciclo. Nótese que el fondo de maniobra
es $90\,700 - 40\,250 = 50\,450$, holgado, y que de los 19\,050 de beneficio ninguna parte
está todavía en caja de forma identificable: el resultado y la tesorería son magnitudes
distintas.
\end{solucion}
```

Los supuestos siguen el planteamiento de \cite{rodriguez2022practicas}, con desarrollo
teórico en \cite{rodriguez2022teoria} y casos adicionales en \cite{saez2002}.
