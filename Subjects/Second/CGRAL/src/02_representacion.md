# La representación contable

Tema 2 del programa. Elementos de las cuentas anuales y criterios de reconocimiento, el
patrimonio empresarial y su representación, la cuenta y los hechos contables.

## Elementos de las cuentas anuales

```{=latex}
\begin{definicion}[Activo]
Bien, derecho o recurso controlado por la empresa, resultante de sucesos pasados, del que se
espera obtener beneficios o rendimientos económicos en el futuro.
\end{definicion}
```

```{=latex}
\begin{definicion}[Pasivo]
Obligación actual surgida de sucesos pasados, para cuya extinción la empresa espera
desprenderse de recursos que puedan producir beneficios económicos.
\end{definicion}
```

```{=latex}
\begin{definicion}[Patrimonio neto]
Parte residual de los activos, una vez deducidos todos los pasivos.
\end{definicion}
```

| Elemento | Del balance | De la cuenta de resultados |
| --- | --- | --- |
| Activo | sí | — |
| Pasivo | sí | — |
| Patrimonio neto | sí | — |
| **Ingreso** | — | incremento del patrimonio neto que no procede de aportaciones |
| **Gasto** | — | decremento que no procede de distribuciones a los socios |

```{=latex}
\begin{proposicion}[Ecuación fundamental del patrimonio]
$$\text{Activo} = \text{Pasivo} + \text{Patrimonio neto}$$
Se cumple siempre y en cualquier instante, y es la razón de que el balance cuadre.
\end{proposicion}
```

**El patrimonio neto es un residuo, no un activo.** No hay ningún bien concreto que lo
represente: es la diferencia entre lo que se tiene y lo que se debe, y por eso la fórmula
suele escribirse también como $\text{PN} = \text{Activo} - \text{Pasivo}$.

### Criterios de reconocimiento y registro

```{=latex}
\begin{proposicion}
Un elemento se registra cuando cumple su definición y además, con un grado de certeza
suficiente, es \textbf{probable} que genere o consuma beneficios económicos y su valor puede
\textbf{estimarse con fiabilidad}.
\end{proposicion}
```

| Condición | Qué excluye |
| --- | --- |
| Cumplir la definición | un compromiso futuro sin obligación actual |
| Probabilidad | un ingreso solo posible, no probable |
| **Medición fiable** | un activo intangible cuyo valor no se puede estimar |

```{=latex}
\begin{anotacion}
La tercera condición es la que deja fuera activos que existen económicamente: la marca
generada internamente, la cartera de clientes o el valor del equipo humano no figuran en el
balance porque su valor no se puede medir con fiabilidad. \textbf{Un balance no dice lo que
vale una empresa}, y confundir ambas cosas es el malentendido más extendido sobre la
contabilidad.
\end{anotacion}
```

## El patrimonio empresarial y su representación

| Masa patrimonial | Contenido | Criterio de ordenación |
| --- | --- | --- |
| **Activo no corriente** | inmovilizado material, intangible, inversiones a largo | menor liquidez |
| **Activo corriente** | existencias, deudores, tesorería | mayor liquidez |
| **Patrimonio neto** | capital, reservas, resultado del ejercicio | — |
| **Pasivo no corriente** | deudas a largo plazo | menor exigibilidad |
| **Pasivo corriente** | deudas a corto plazo, acreedores | mayor exigibilidad |

**El criterio de separación entre corriente y no corriente es el año**, contado desde la
fecha de cierre, o el ciclo normal de explotación si es más largo.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\scriptsize]
\draw[thick] (0,0) rectangle (4,6);
\draw[thick] (4,0) rectangle (8,6);
\draw[thick] (0,3.2) -- (4,3.2);
\draw[thick] (4,2.4) -- (8,2.4);
\draw[thick] (4,4.2) -- (8,4.2);
\node at (2,6.35) {\textbf{ACTIVO}};
\node at (6,6.35) {\textbf{PN + PASIVO}};
\node[align=center] at (2,4.6) {Activo\\no corriente};
\node[align=center] at (2,1.6) {Activo\\corriente};
\node[align=center] at (6,5.1) {Patrimonio\\neto};
\node[align=center] at (6,3.3) {Pasivo\\no corriente};
\node[align=center] at (6,1.2) {Pasivo\\corriente};
\draw[<->, thick] (-0.5,6) -- node[left, rotate=90, anchor=south] {liquidez creciente} (-0.5,0);
\draw[<->, thick] (8.5,6) -- node[right, rotate=90, anchor=north] {exigibilidad creciente} (8.5,0);
\end{tikzpicture}
\end{center}
```

### Equilibrios patrimoniales

| Situación | Relación | Diagnóstico |
| --- | --- | --- |
| Estabilidad total | activo $=$ patrimonio neto | sin deuda; poco frecuente |
| **Estabilidad normal** | fondo de maniobra positivo | situación sana |
| Inestabilidad a corto | fondo de maniobra negativo | riesgo de suspensión de pagos |
| **Quiebra** | pasivo $>$ activo, patrimonio neto negativo | insolvencia definitiva |

$$\text{Fondo de maniobra} = \text{Activo corriente} - \text{Pasivo corriente}$$

**Un fondo de maniobra negativo no siempre es un problema.** En empresas que cobran al
contado y pagan a plazo, como la distribución minorista, es la situación normal y no indica
riesgo.

## La cuenta

```{=latex}
\begin{definicion}
Instrumento de representación y medida de cada elemento patrimonial, que recoge su situación
inicial y las variaciones que experimenta.
\end{definicion}
```

| Parte | Nombre | Contenido |
| --- | --- | --- |
| Izquierda | **Debe** | cargos o adeudos |
| Derecha | **Haber** | abonos o datas |
| Diferencia | **Saldo** | deudor si el debe es mayor, acreedor si lo es el haber |

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\small]
\draw[thick] (0,2.4) -- (7,2.4);
\draw[thick] (3.5,2.4) -- (3.5,0);
\node at (3.5,2.75) {(572) Bancos};
\node at (1.75,2.1) {\textbf{Debe}};
\node at (5.25,2.1) {\textbf{Haber}};
\node[font=\scriptsize] at (1.75,1.6) {12.000};
\node[font=\scriptsize] at (1.75,1.2) {3.500};
\node[font=\scriptsize] at (5.25,1.6) {4.200};
\draw (0.9,0.85) -- (2.6,0.85);
\node[font=\scriptsize] at (1.75,0.5) {saldo deudor 11.300};
\end{tikzpicture}
\end{center}
```

### Convenio de cargo y abono

| Naturaleza | Aumenta por | Disminuye por | Saldo normal |
| --- | --- | --- | --- |
| **Activo** | debe | haber | deudor |
| **Pasivo** | haber | debe | acreedor |
| **Patrimonio neto** | haber | debe | acreedor |
| **Gasto** | debe | haber | deudor |
| **Ingreso** | haber | debe | acreedor |

```{=latex}
\begin{anotacion}
El convenio se deduce de la ecuación fundamental y no hay que memorizarlo por separado. El
activo está a la izquierda de la igualdad y aumenta por el debe; el pasivo y el patrimonio
neto están a la derecha y aumentan por el haber. Los gastos disminuyen el patrimonio neto,
así que \textbf{se comportan como su contrario} y aumentan por el debe.
\end{anotacion}
```

### El método de la partida doble

```{=latex}
\begin{proposicion}
En todo hecho contable, la suma de los importes cargados es igual a la suma de los abonados.
De ahí que la ecuación fundamental se mantenga tras cualquier anotación y que la suma de
saldos deudores iguale a la de acreedores.
\end{proposicion}
```

| Principio | Enunciado |
| --- | --- |
| Dualidad | todo hecho tiene al menos dos efectos |
| Equivalencia | no hay deudor sin acreedor por el mismo importe |
| **Comprobación** | el descuadre revela un error, aunque no diga cuál |

**La partida doble detecta errores de importe y de anotación, no errores de criterio.** Un
asiento cuadrado que carga la cuenta equivocada pasa todas las comprobaciones aritméticas.

## Hechos económicos y su representación

| Tipo | Efecto sobre el patrimonio | Ejemplo |
| --- | --- | --- |
| **Permutativo** | cambia la composición, no la cuantía | cobro de un cliente |
| **Modificativo** | cambia la cuantía del patrimonio neto | pago de un gasto |
| **Mixto** | combina las dos cosas | venta con beneficio |

```{=latex}
\begin{ejemplo}
Venta de mercancías cuyo coste fue de 800 euros por 1000 euros al contado. Es un hecho
mixto: el activo aumenta en 1000 de tesorería y disminuye en 800 de existencias, y el
patrimonio neto aumenta en los 200 de beneficio.
\end{ejemplo}
```

### El asiento

$$\underbrace{\text{Importe}}_{\text{debe}}\ \text{Cuenta cargada}\quad \text{a}\quad
\text{Cuenta abonada}\ \underbrace{\text{Importe}}_{\text{haber}}$$

**Los pasos para plantear un asiento son siempre los mismos**: identificar qué elementos
patrimoniales varían, decidir si aumentan o disminuyen, aplicar el convenio y comprobar que
la suma del debe iguala a la del haber.

### Cuentas de balance y cuentas de gestión

| Tipo | Grupos del PGC | Al cierre |
| --- | --- | --- |
| **De balance** | 1 a 5 | arrastran saldo al ejercicio siguiente |
| **De gestión** | 6 y 7 | se saldan contra el resultado y empiezan a cero |

```{=latex}
\begin{proposicion}
Las cuentas de gestión miden un \textbf{flujo} referido a un periodo y las de balance un
\textbf{fondo} referido a un instante. De ahí que un saldo de (700) Ventas solo tenga sentido
acompañado del periodo que abarca, mientras que uno de (572) Bancos tiene sentido con solo
indicar la fecha.
\end{proposicion}
```

### Cuentas compensadoras

Algunas cuentas figuran en el activo con saldo acreedor y minoran a otra, en lugar de
aparecer en el pasivo.

| Cuenta | Compensa a | Motivo |
| --- | --- | --- |
| (281) Amortización acumulada del inmovilizado material | (21x) | conservar visible el coste histórico |
| (490) Deterioro de créditos comerciales | (430), (436) | la estimación es reversible |
| (390) Deterioro de valor de las mercaderías | (300) | ídem |

**Presentar el coste y su corrección por separado da más información que presentar solo la
diferencia**: permite ver la antigüedad del inmovilizado y la política de deterioros, que en
el valor neto quedarían ocultas.

## Ejercicios

```{=latex}
\begin{ejercicio}
Clasificar como permutativo, modificativo o mixto: pago de una deuda con un proveedor, cobro
de intereses de una cuenta, compra de mercancías a crédito y venta de un equipo informático
por debajo de su valor contable.
\end{ejercicio}

\begin{solucion}
Pago al proveedor: \emph{permutativo}. Disminuye tesorería y disminuye la deuda; el
patrimonio neto no cambia.

\medskip
Cobro de intereses: \emph{modificativo}. Aumenta tesorería por un ingreso, así que aumenta
el patrimonio neto.

\medskip
Compra a crédito: \emph{permutativo}. Aumentan existencias y aumenta la deuda.

\medskip
Venta con pérdida: \emph{mixto}. Sale un activo por su valor contable, entra tesorería por
menos, y la diferencia es una pérdida que reduce el patrimonio neto.
\end{solucion}

\begin{ejercicio}
Una empresa tiene un activo de 480\,000 euros y un pasivo de 310\,000. Calcular el patrimonio
neto y decir qué ocurre si un deterioro reduce el activo en 200\,000.
\end{ejercicio}

\begin{solucion}
$\text{PN} = 480\,000 - 310\,000 = 170\,000$ euros.

\medskip
Tras el deterioro, el activo baja a 280\,000 y el pasivo no cambia, así que
$\text{PN} = -30\,000$: patrimonio neto negativo, situación de quiebra contable. El pasivo
no se altera porque los acreedores conservan íntegro su derecho; \textbf{la pérdida la
soporta siempre el patrimonio neto}, que es el residuo.
\end{solucion}

\begin{ejercicio}
Registrar en cuentas T la constitución de una sociedad con 60\,000 euros de capital, de los
que 45\,000 se ingresan en banco y 15\,000 se aportan en mobiliario.
\end{ejercicio}

\begin{solucion}
Se carga (572) Bancos por 45\,000 y (216) Mobiliario por 15\,000, y se abona (100) Capital
social por 60\,000.

\medskip
La suma del debe, 60\,000, iguala a la del haber. La ecuación fundamental se cumple:
activo 60\,000 $=$ pasivo 0 $+$ patrimonio neto 60\,000. Es un hecho permutativo desde la
perspectiva de la sociedad recién creada, que pasa de no tener nada a tener activo y
patrimonio neto por el mismo importe.
\end{solucion}
```

La representación contable y el método de la partida doble están desarrollados en
\cite{rodriguez2022teoria}, con ejercicios en \cite{rodriguez2022practicas}.
