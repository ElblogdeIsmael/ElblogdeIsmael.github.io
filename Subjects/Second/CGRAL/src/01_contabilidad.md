# La contabilidad

Tema 1 del programa. La actividad económica y sus flujos, la contabilidad como sistema de
información y su evolución hacia el marco conceptual, objetivos y usuarios, requisitos de la
información, principios contables y criterios de valoración.

## La actividad económica y los flujos

```{=latex}
\begin{definicion}
La actividad económica consiste en combinar factores productivos para obtener bienes y
servicios que satisfagan necesidades. La unidad que la realiza de forma organizada es la
empresa.
\end{definicion}
```

| Elemento integrante | Qué aporta |
| --- | --- |
| **Factores productivos** | trabajo, capital, recursos naturales, tecnología |
| **Bienes y servicios** | el resultado de la combinación |
| **Unidades económicas** | empresas, familias, sector público |

| Flujo | Sentido | Ejemplo |
| --- | --- | --- |
| **Real** | movimiento de bienes y servicios | entrega de mercancías |
| **Financiero** | movimiento de dinero o derechos de cobro | pago al proveedor |

**Los dos flujos suelen ser simultáneos y de sentido contrario, pero no siempre.** Una venta
a crédito genera el flujo real hoy y el financiero más tarde, y esa asincronía es justo lo
que la contabilidad tiene que registrar: de ahí salen los derechos de cobro y las
obligaciones de pago.

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth,
  u/.style={draw, thick, minimum width=2.6cm, minimum height=1cm, font=\small}]
\node[u] (e) at (0,0) {Empresa};
\node[u] (c) at (6.5,0) {Cliente};
\draw[->, thick] (e) to[bend left=25] node[above, font=\scriptsize] {flujo real: mercancía} (c);
\draw[->, thick] (c) to[bend left=25] node[below, font=\scriptsize] {flujo financiero: cobro} (e);
\end{tikzpicture}
\end{center}
```

## La contabilidad como sistema de información

```{=latex}
\begin{definicion}
Sistema de información que identifica, mide, registra y comunica en términos monetarios los
hechos económicos de una unidad, con el fin de que sus usuarios puedan tomar decisiones.
\end{definicion}
```

| Fase | Contenido |
| --- | --- |
| **Identificar** | qué hechos son relevantes y contabilizables |
| **Medir** | asignarles un valor monetario |
| **Registrar** | anotarlos de forma sistemática |
| **Comunicar** | presentarlos en estados financieros |

```{=latex}
\begin{anotacion}
La primera fase es la que decide qué queda dentro y qué queda fuera. Un hecho tan
relevante como la marcha del director general no se contabiliza, porque no es cuantificable
en unidades monetarias con fiabilidad. \textbf{La contabilidad no describe la empresa
entera}: describe la parte de ella que se puede medir en dinero.
\end{anotacion}
```

### De las reglas sueltas al marco conceptual

| Etapa | Enfoque | Problema que dejaba |
| --- | --- | --- |
| Contabilidad por partida doble | técnica de registro | sin criterio para casos nuevos |
| Normas por sectores y casos | reglas concretas | contradicciones entre normas |
| **Marco conceptual** | principios de los que se deducen las normas | — |

```{=latex}
\begin{definicion}[Marco conceptual]
Conjunto de fundamentos, principios y conceptos básicos del que se deriva el tratamiento
contable de cualquier operación. Es la primera parte del Plan General de Contabilidad.
\end{definicion}
```

**El marco conceptual no resuelve casos, resuelve el criterio para resolverlos.** Ante una
operación que ninguna norma prevé, se decide por lo que exigen los principios y la
definición de los elementos, no por analogía con otra operación distinta.

## Objetivos, fines y usuarios

```{=latex}
\begin{proposicion}
El objetivo de las cuentas anuales es mostrar la \textbf{imagen fiel} del patrimonio, de la
situación financiera y de los resultados de la empresa.
\end{proposicion}
```

| Usuario | Qué necesita saber |
| --- | --- |
| **Propietarios e inversores** | rentabilidad y riesgo de su inversión |
| **Acreedores y entidades de crédito** | capacidad de devolver la deuda |
| Trabajadores | estabilidad y capacidad de pago |
| Clientes y proveedores | continuidad de la relación |
| **Administración pública** | base imponible y cumplimiento |
| Dirección | información para gestionar |

| Rama | Destinatario | Regulación |
| --- | --- | --- |
| **Contabilidad financiera** | usuarios externos | normalizada y obligatoria |
| **Contabilidad de gestión** | dirección interna | libre |

```{=latex}
\begin{anotacion}
Que la contabilidad financiera esté normalizada no es burocracia: la información va dirigida
a terceros que no pueden verificarla por sí mismos y que la comparan entre empresas. Sin
reglas comunes, cada empresa elegiría el criterio que mejor la presentase y la comparación
sería imposible. \textbf{La normalización existe para proteger al usuario externo.}
\end{anotacion}
```

## Requisitos de la información contable

| Requisito | Qué exige |
| --- | --- |
| **Relevancia** | ser útil para decidir; incluye la importancia relativa |
| **Fiabilidad** | estar libre de errores y sesgos materiales |
| **Comparabilidad** | permitir el contraste entre ejercicios y entre empresas |
| **Claridad** | ser comprensible para un usuario con formación razonable |

```{=latex}
\begin{anotacion}
Relevancia y fiabilidad entran a veces en conflicto: el valor razonable de un activo sin
mercado es más relevante y menos fiable que su coste histórico. La norma resuelve caso por
caso, y por eso el criterio de valoración no es único.
\end{anotacion}
```

## Principios contables

| Principio | Enunciado |
| --- | --- |
| **Empresa en funcionamiento** | se presume que la actividad continúa; la valoración no es de liquidación |
| **Devengo** | los hechos se imputan cuando ocurren, no cuando se cobran o pagan |
| **Uniformidad** | adoptado un criterio, se mantiene en el tiempo |
| **Prudencia** | valoración prudente; solo se contabilizan los beneficios realizados |
| **No compensación** | no se compensan partidas de activo y pasivo, ni de ingreso y gasto |
| **Importancia relativa** | cabe la no aplicación estricta si la variación es poco significativa |

```{=latex}
\begin{proposicion}
El principio de \textbf{devengo} es el que separa el resultado del ejercicio de la tesorería
generada. Una empresa puede tener beneficio y no tener caja, y a la inversa, y las dos
situaciones son perfectamente coherentes.
\end{proposicion}
```

```{=latex}
\begin{ejemplo}
Una empresa vende en diciembre por 50\,000 euros y cobra en marzo. Paga en diciembre el
alquiler de todo el año siguiente, 12\,000 euros.

\medskip
Por devengo, la venta es ingreso del ejercicio que se cierra, aunque no se haya cobrado, y
el alquiler es gasto del ejercicio siguiente, aunque ya se haya pagado. En caja hay una
salida de 12\,000 y ninguna entrada; en resultado, un ingreso de 50\,000 y ningún gasto por
ese concepto.
\end{ejemplo}
```

## Criterios de valoración

| Criterio | Definición |
| --- | --- |
| **Coste histórico** | precio de adquisición o coste de producción |
| **Valor razonable** | importe por el que puede intercambiarse entre partes informadas |
| Valor neto realizable | importe que se obtendría al venderlo, menos los costes necesarios |
| Valor actual | valor descontado de los flujos futuros que genere |
| Valor en uso | valor actual de los flujos esperados de su uso y enajenación |
| **Coste amortizado** | valor inicial menos reembolsos, más intereses devengados |
| Valor contable | importe neto por el que figura en el balance |
| Valor residual | lo que se espera obtener al final de su vida útil |

**El criterio general es el coste histórico**, porque es verificable y no admite
discrecionalidad. El valor razonable se aplica donde hay mercado activo y su relevancia
compensa la pérdida de fiabilidad, principalmente en instrumentos financieros.

```{=latex}
\begin{ejemplo}
Un terreno comprado en 2005 por 200\,000 euros vale hoy 850\,000 según una tasación. En el
balance sigue por 200\,000, su coste histórico, porque no hay ningún hecho que justifique
darlo de alta por más.

\medskip
Si en cambio la tasación arrojara 150\,000, sí habría que reconocer un deterioro de 50\,000.
La asimetría es la prudencia en funcionamiento: \textbf{las pérdidas potenciales se
reconocen y las ganancias potenciales no}.
\end{ejemplo}
```

### El precio de adquisición y el coste de producción

| Componente | Se incluye | Ejemplo |
| --- | :---: | --- |
| Importe facturado por el vendedor | sí | precio de la máquina |
| Descuentos y rebajas | se restan | rappel por volumen |
| **Gastos adicionales hasta la puesta en condiciones de uso** | sí | transporte, instalación, aranceles |
| Impuestos indirectos no recuperables | sí | IVA en actividades exentas |
| **IVA soportado deducible** | **no** | es un derecho frente a Hacienda |
| Intereses de financiación | solo si el activo tarda más de un año en estar listo | |
| Gastos de formación del personal que lo usará | no | |

```{=latex}
\begin{anotacion}
La regla de los gastos adicionales tiene una consecuencia inmediata: lo que se activa deja
de ser gasto del ejercicio y pasa a repartirse por la vida útil vía amortización. Activar
más de lo debido mejora el resultado del año en curso y lo empeora en los siguientes, así
que \textbf{la frontera entre gasto y activo es una de las decisiones contables con más
efecto sobre el beneficio declarado}.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Indicar si son hechos contables, y por qué: la firma de un contrato de suministro para el
año próximo, la compra de mercancías a crédito, el incendio de un almacén y la contratación
de un empleado.
\end{ejercicio}

\begin{solucion}
La firma del contrato \emph{no} lo es: no ha habido flujo real ni financiero, solo un
compromiso futuro. Se informará en la memoria si es significativo.

\medskip
La compra a crédito \emph{sí}: hay flujo real de entrada y nace una obligación de pago.

\medskip
El incendio \emph{sí}: destruye un elemento patrimonial y es cuantificable.

\medskip
La contratación \emph{no} lo es en el momento de firmar: se contabilizará el gasto de
personal conforme se devengue la retribución.
\end{solucion}

\begin{ejercicio}
Una empresa quiere registrar un beneficio esperado por la revalorización de un terreno.
Valorar la operación.
\end{ejercicio}

\begin{solucion}
No procede. El principio de prudencia solo permite contabilizar los beneficios realizados a
la fecha de cierre, y el terreno se valora por su coste histórico mientras no se venda.

\medskip
Sí procede el tratamiento inverso: si el valor recuperable del terreno cae por debajo de su
valor contable, se reconoce la pérdida por deterioro. La asimetría es deliberada, y es la
forma que toma la prudencia.
\end{solucion}

\begin{ejercicio}
Explicar por qué una empresa con beneficio puede quebrar por falta de liquidez.
\end{ejercicio}

\begin{solucion}
Porque el resultado se calcula por devengo y la solvencia a corto plazo depende de la
tesorería. Una empresa que vende con cobro a 180 días y paga a sus proveedores a 30
acumula beneficio contable mientras la caja se vacía.

\medskip
Es la razón de que el estado de flujos de efectivo sea una cuenta anual distinta de la
cuenta de pérdidas y ganancias: miden cosas diferentes y las dos hacen falta.
\end{solucion}
```

Los fundamentos de la contabilidad y su marco conceptual están desarrollados en
\cite{rodriguez2022teoria}, con un enfoque internacional en \cite{brusca2004}.
