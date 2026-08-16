# Conceptos básicos

Tema 1 del programa. Capital financiero, ley financiera y sus propiedades, operación
financiera, reserva matemática, características comerciales, tantos efectivos y TAE, y
cómo se forman los tipos de interés.

## Capital financiero

```{=latex}
\begin{definicion}[Capital financiero]
Par ordenado $(C, t)$ formado por una cuantía monetaria $C$ y el instante $t$ en que está
disponible.
\end{definicion}
```

**El instante forma parte del capital, no es un dato accesorio.** Mil euros hoy y mil
euros dentro de un año son capitales financieros distintos, y toda la asignatura consiste
en saber cómo compararlos.

| Principio | Enunciado |
| --- | --- |
| **Preferencia por la liquidez** | a igualdad de cuantía se prefiere el capital más próximo |
| Comparación | dos capitales en instantes distintos no se comparan directamente |
| Equivalencia | hay que llevarlos a un mismo instante con una ley financiera |

## Ley financiera

```{=latex}
\begin{definicion}[Ley financiera de capitalización]
Función $L(t, p)$ que da el valor en el instante $p$ de un capital unitario disponible en
$t$, con $p \ge t$.
\end{definicion}
```

| Tipo | Sentido del movimiento | Nombre |
| --- | --- | --- |
| **Capitalización** | del presente al futuro | valor final |
| **Descuento** | del futuro al presente | valor actual |

| Propiedad | Qué exige |
| --- | --- |
| Positividad | $L > 0$ |
| Continuidad | pequeñas variaciones de tiempo, pequeñas de valor |
| Creciente en $p$ | cuanto más lejos se lleva, mayor valor |
| **Escindibilidad** | capitalizar en dos tramos da lo mismo que en uno solo |

```{=latex}
\begin{anotacion}
La escindibilidad es la propiedad que separa las dos familias del programa. La
capitalización \textbf{compuesta} es escindible: llevar un capital de 0 a 2 años equivale a
llevarlo de 0 a 1 y de 1 a 2. La \textbf{simple} no lo es, y por eso su uso se restringe a
operaciones a corto plazo, donde la diferencia es pequeña y la sencillez compensa.
\end{anotacion}
```

## Operación financiera

```{=latex}
\begin{definicion}
Intercambio de capitales no simultáneos entre dos partes, de forma que la prestación y la
contraprestación resulten equivalentes según una ley financiera pactada.
\end{definicion}
```

| Elemento | Qué es |
| --- | --- |
| **Prestación** | el conjunto de capitales que entrega una parte |
| **Contraprestación** | los que entrega la otra |
| Origen y final | instantes en que empieza y termina |
| Duración | diferencia entre los dos |
| Ley financiera | la que hace equivalentes las dos corrientes |

$$\text{Valor de la prestación} = \text{Valor de la contraprestación}$$

**Esa igualdad, planteada en un instante cualquiera, es la ecuación de equivalencia
financiera**, y de ella se despeja lo que se desconozca: un capital, un plazo o un tipo.

| Clasificación | Tipos |
| --- | --- |
| Por la duración | a corto plazo (hasta un año) o a largo |
| Por el número de capitales | simples o compuestas |
| Por el sentido | de capitalización o de descuento |
| Por la certeza | ciertas o aleatorias |

## Reserva matemática o saldo financiero

```{=latex}
\begin{definicion}
Valor en un instante intermedio $s$ de la parte de la operación pendiente de ejecutar. Es
la deuda viva en ese momento.
\end{definicion}
```

Se puede calcular de dos formas, que deben coincidir:

| Método | Cómo |
| --- | --- |
| **Retrospectivo** | valor en $s$ de lo entregado menos lo recibido hasta $s$ |
| **Prospectivo** | valor en $s$ de lo que queda por entregar |

```{=latex}
\begin{anotacion}
Que los dos métodos coincidan \textbf{solo está garantizado si la ley es escindible}. Con
capitalización compuesta siempre coinciden; con simple, no, y ahí está la razón técnica de
que los préstamos se pacten siempre en régimen compuesto. La reserva matemática es además
lo que se paga para cancelar anticipadamente.
\end{anotacion}
```

## Características comerciales

Son los gastos e ingresos adicionales que acompañan a la operación y que no forman parte
del capital pactado.

| Tipo | Quién lo soporta | Ejemplo |
| --- | --- | --- |
| **Bilaterales** | afectan a las dos partes | ninguna en la práctica habitual |
| **Unilaterales del prestamista** | solo a él | gastos de estudio que no cobra |
| **Unilaterales del prestatario** | solo a él | comisión de apertura, tasación, notaría |

**Las características comerciales son la razón de que exista el tanto efectivo.** El tipo
nominal pactado no refleja lo que la operación cuesta de verdad cuando hay comisiones.

| Tanto | Qué recoge |
| --- | --- |
| **Nominal** | el pactado, sin gastos |
| **Efectivo del prestatario** | incluye todo lo que él paga |
| **Efectivo del prestamista** | incluye todo lo que él recibe |
| **TAE** | el efectivo del prestatario, calculado según norma legal |

```{=latex}
\begin{proposicion}
Con características comerciales unilaterales del prestatario, el tanto efectivo que
soporta es \textbf{mayor} que el nominal, y el que obtiene el prestamista es menor o igual
que el efectivo del prestatario.
\end{proposicion}
```

### La TAE

Es el tanto efectivo anual calculado según la circular del Banco de España, e incluye los
gastos inherentes a la operación. Su función es **permitir comparar productos** con
estructuras de comisiones distintas.

| Incluye | No incluye |
| --- | --- |
| Comisión de apertura | seguros no obligatorios |
| Intereses | notaría y registro, en algunos supuestos |
| Comisión de estudio | impuestos |

```{=latex}
\begin{anotacion}
La TAE es comparable \textbf{solo entre operaciones del mismo plazo y del mismo tipo}. Dos
préstamos con la misma TAE y plazos distintos no son equivalentes, y en operaciones a tipo
variable la TAE se calcula suponiendo que el índice se mantiene, supuesto que casi nunca se
cumple. Es una herramienta de comparación, no una predicción.
\end{anotacion}
```

## Cómo se forman los tipos de interés

$$i \approx r + \pi^{e} + \text{prima de riesgo} + \text{prima de liquidez} + \text{prima de plazo}$$

| Componente | Qué remunera |
| --- | --- |
| Tipo real puro | la renuncia a consumir hoy |
| Expectativa de inflación | la pérdida de poder adquisitivo |
| Prima de riesgo | la posibilidad de impago |
| Prima de liquidez | la dificultad de recuperar el dinero antes |
| Prima de plazo | la incertidumbre de los plazos largos |

```{=latex}
\begin{proposicion}[Ecuación de Fisher]
$$(1+i) = (1+r)(1+\pi^{e}) \qquad\Longrightarrow\qquad i \approx r + \pi^{e}$$
\end{proposicion}
```

La aproximación vale con inflaciones pequeñas. Con inflaciones altas hay que usar la
expresión exacta, y la diferencia deja de ser despreciable.

### El euríbor

Tipo de referencia del mercado interbancario del euro: la media de los tipos a los que las
entidades declaran prestarse entre sí sin garantía, publicada a distintos plazos.

| Plazo | Uso más frecuente |
| --- | --- |
| Una semana | operaciones muy cortas |
| Tres meses | referencia de mercado monetario |
| **Doce meses** | revisión de hipotecas a tipo variable |

En un préstamo a tipo variable, el tipo aplicable es el euríbor del plazo pactado **más un
diferencial** fijo, y se revisa con la periodicidad acordada.

## Ejercicios

```{=latex}
\begin{ejercicio}
Explicar por qué $(1000, 0)$ y $(1000, 1)$ no son el mismo capital financiero y qué hace
falta para compararlos.
\end{ejercicio}

\begin{solucion}
Porque el capital financiero es un par cuantía-instante, y los instantes difieren.
Disponer de mil euros hoy permite invertirlos, consumirlos o cancelar una deuda; disponer
de ellos dentro de un año no.

\medskip
Para compararlos hace falta una ley financiera y un tipo: llevando el segundo al presente
con un 4\,\%, su valor actual es $1000/1{,}04 = 961{,}54$, menor que 1000. La preferencia
por la liquidez queda cuantificada.
\end{solucion}

\begin{ejercicio}
Un préstamo de 10\,000 euros a un año pacta un tipo nominal del 6\,\% y una comisión de
apertura del 1\,\%. ¿Cuál es el tanto efectivo del prestatario?
\end{ejercicio}

\begin{solucion}
Recibe $10\,000 - 100 = 9900$ y devuelve $10\,000\cdot1{,}06 = 10\,600$. La ecuación de
equivalencia es
$$9900\,(1+i) = 10\,600 \ \Longrightarrow\ i = 0{,}0707$$
Un 7,07\,\% frente al 6\,\% nominal. La comisión, que parecía un uno por ciento, encarece
la operación en más de un punto porcentual.
\end{solucion}

\begin{ejercicio}
El tipo nominal de un depósito es del 3\,\% y la inflación esperada del 2,5\,\%. ¿Cuál es
la rentabilidad real?
\end{ejercicio}

\begin{solucion}
Por Fisher exacto, $1{,}03/1{,}025 = 1{,}00488$: un 0,49\,\%. La aproximación por
diferencia daría 0,5\,\%, prácticamente igual porque las cifras son pequeñas.

\medskip
Con una inflación del 10\,\% y un nominal del 12\,\%, el exacto sería
$1{,}12/1{,}10 = 1{,}0182$, un 1,82\,\%, frente al 2\,\% de la aproximación. El error crece
con la inflación.
\end{solucion}
```

Los conceptos básicos de la matemática financiera están desarrollados en
\cite{frias2025}, con su versión en inglés en \cite{frias2025en}.
