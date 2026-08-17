# Normalización contable y Plan General de Contabilidad

Tema 1 del programa. Por qué la contabilidad está normalizada, qué norma se aplica
en España, y el marco conceptual del que sale todo lo demás.

## Normalización contable

**Normalizar** es fijar reglas comunes para elaborar y presentar la información
financiera. Sin ellas, dos empresas iguales podrían publicar cuentas muy distintas y
nadie podría compararlas.

Quién necesita esa información y para qué:

| Usuario | Qué decide con ella |
| --- | --- |
| Socios e inversores | comprar, mantener o vender su participación |
| Acreedores y bancos | conceder crédito y en qué condiciones |
| Trabajadores | estabilidad del empleo, negociación colectiva |
| Administración | liquidación de impuestos, estadística |
| Clientes y proveedores | continuidad de la relación comercial |
| La propia dirección | gestionar |

De ahí los objetivos de la normalización: que la información sea **comparable** entre
empresas y entre ejercicios, **fiable**, y que quien la elabora no pueda elegir a
conveniencia el criterio que más le favorezca.

## Normas Internacionales de Información Financiera

Las **NIIF** —o IFRS, por sus siglas en inglés— las emite el IASB, un organismo
privado independiente. La Unión Europea las adopta mediante reglamentos, y desde
2005 son **obligatorias para las cuentas consolidadas de los grupos cotizados**.

| Ámbito | Norma aplicable en España |
| --- | --- |
| Cuentas consolidadas de grupos cotizados | NIIF adoptadas por la UE |
| Cuentas consolidadas del resto de grupos | NIIF adoptadas o normativa española, a elección |
| **Cuentas individuales** | **Plan General de Contabilidad** |

La tercera fila es la que interesa aquí: **esta asignatura trabaja con cuentas
individuales, y por tanto con el PGC**. Lo que ocurre es que el PGC de 2007 se
redactó para converger con las NIIF, así que sus criterios son en lo esencial los
mismos.

Un rasgo de fondo de las NIIF, que explica buena parte del PGC actual: son normas
**basadas en principios** más que en reglas detalladas. Dan un marco y exigen juicio
profesional, frente al modelo alternativo de enumerar casos. La ventaja es que
cubren situaciones no previstas; el coste, que dos profesionales pueden llegar a
soluciones distintas y hay que justificar la elegida.

## La normativa contable en España

La jerarquía de fuentes:

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize]
% Piramide normativa. Las anchuras estan medidas contra el rotulo mas largo
% de cada franja: con un trapecio mas estrecho, los cuatro textos se salian
% por los lados. El de abajo va en dos lineas por la misma razon.
\draw[thick] (-2.1,3.6) -- (2.1,3.6) -- (2.7,2.7) -- (-2.7,2.7) -- cycle;
\node at (0,3.15) {Código de Comercio};

\draw[thick] (-2.7,2.7) -- (2.7,2.7) -- (3.3,1.8) -- (-3.3,1.8) -- cycle;
\node at (0,2.25) {Ley de Sociedades de Capital};

\draw[thick] (-3.3,1.8) -- (3.3,1.8) -- (3.9,0.9) -- (-3.9,0.9) -- cycle;
\node at (0,1.35) {Plan General de Contabilidad};

\draw[thick] (-3.9,0.9) -- (3.9,0.9) -- (4.7,-0.4) -- (-4.7,-0.4) -- cycle;
\node[align=center] at (0,0.25) {Adaptaciones sectoriales\\y resoluciones del ICAC};
\end{tikzpicture}
\end{center}
```

El **Instituto de Contabilidad y Auditoría de Cuentas** desarrolla e interpreta el
PGC mediante resoluciones, y es también el organismo de control de la auditoría, hoy
regulada por la Ley 22/2015 \cite{ley22_2015}.

### Estructura del Plan General de Contabilidad

El PGC \cite{pgc2007} se divide en cinco partes, y **solo las tres primeras son
obligatorias**:

| Parte | Contenido | Obligatoria |
| --- | --- | --- |
| 1 | Marco conceptual | **sí** |
| 2 | Normas de registro y valoración | **sí** |
| 3 | Cuentas anuales | **sí** |
| 4 | Cuadro de cuentas | no |
| 5 | Definiciones y relaciones contables | no |

Que las partes 4 y 5 no sean obligatorias sorprende, porque son las que todo el mundo
usa a diario: el cuadro de cuentas con sus códigos —(300) Mercaderías, (430)
Clientes, (700) Ventas— es una guía, no una imposición. Lo obligatorio es que la
información resultante sea la que el marco conceptual exige.

Existe además un **PGC de PYMES** \cite{pgcpymes2007}, con criterios simplificados
para empresas que no superen dos de estos tres límites durante dos ejercicios
seguidos: 4 millones de euros de activo, 8 millones de cifra de negocios y 50
trabajadores.

## Marco conceptual

Es la parte 1 del PGC y **la que hay que entender antes que ninguna otra**: cuando
una operación no encaja en ninguna norma concreta, la respuesta se busca aquí.

### Cuentas anuales e imagen fiel

Las cuentas anuales deben mostrar la **imagen fiel** del patrimonio, de la situación
financiera y de los resultados. Es el objetivo último, y tiene una consecuencia poco
conocida: si aplicar una norma impidiera mostrar la imagen fiel, **hay que dejar de
aplicarla** y explicarlo en la memoria.

Los documentos que forman las cuentas anuales:

| Documento | Qué muestra | Obligatorio para PYMES |
| --- | --- | --- |
| Balance | el patrimonio en un momento dado | sí |
| Cuenta de pérdidas y ganancias | el resultado del ejercicio | sí |
| Estado de cambios en el patrimonio neto | variaciones del patrimonio neto | sí |
| Estado de flujos de efectivo | los cobros y pagos del ejercicio | **no** |
| Memoria | amplía y comenta los anteriores | sí |

Los cinco forman **una unidad**: la memoria no es un anexo prescindible, y muchas
normas de valoración terminan con una obligación de información que solo se cumple
en ella. Por eso cada tema de este temario acaba con un apartado de información en
las cuentas anuales.

### Requisitos de la información

| Requisito | Qué exige |
| --- | --- |
| **Relevante** | útil para tomar decisiones; incluye lo significativo |
| **Fiable** | libre de errores materiales y neutral |
| Comparable | entre ejercicios y entre empresas |
| Clara | comprensible para un usuario con conocimiento razonable |

Relevancia y fiabilidad son los dos básicos, y **entran en conflicto con frecuencia**:
la información más relevante suele ser la más reciente y la menos contrastada. El
equilibrio entre las dos es lo que decide, por ejemplo, cuándo se reconoce una
estimación.

### Principios contables

El PGC recoge seis, y son de aplicación obligatoria:

| Principio | Qué establece |
| --- | --- |
| **Empresa en funcionamiento** | se supone que la actividad continúa; si no, se valora por liquidación |
| **Devengo** | los hechos se registran cuando ocurren, no cuando se cobra o se paga |
| **Uniformidad** | adoptado un criterio, se mantiene en el tiempo |
| **Prudencia** | se es cauto en las estimaciones |
| **No compensación** | no se compensan partidas de activo y pasivo, ni de gastos e ingresos |
| **Importancia relativa** | se admite no aplicar estrictamente algún principio si el efecto es poco significativo |

El de **devengo** es el que más consecuencias tiene en el día a día: una venta se
reconoce cuando se entrega la mercancía, aunque se cobre tres meses después, y un
gasto de alquiler corresponde al periodo en que se disfruta el local, no a la fecha
de la transferencia. De ahí sale toda la periodificación del tema 4.

El de **prudencia** cambió de alcance con el PGC de 2007. Antes era el principio
dominante y admitía cierta infravaloración sistemática; ahora es cautela ante la
incertidumbre y **no autoriza a crear reservas ocultas**, porque eso vulneraría la
imagen fiel.

Si dos principios entran en conflicto, prevalece el que mejor conduzca a la imagen
fiel.

## Elementos de los estados financieros

Los siete elementos, con su definición del marco conceptual:

| Elemento | Definición | Dónde aparece |
| --- | --- | --- |
| **Activo** | bien, derecho o recurso controlado, del que se esperan beneficios futuros | balance |
| **Pasivo** | obligación actual surgida de sucesos pasados, cuya extinción supone salida de recursos | balance |
| **Patrimonio neto** | activo menos pasivo | balance |
| **Ingreso** | incremento del patrimonio neto que no procede de aportaciones de los socios | pérdidas y ganancias |
| **Gasto** | decremento del patrimonio neto que no procede de distribuciones a los socios | pérdidas y ganancias |

De donde sale la **ecuación fundamental**:

$$\text{Activo} = \text{Pasivo} + \text{Patrimonio neto}$$

Y, desdoblando el patrimonio neto en su composición:

$$\text{Activo} = \text{Pasivo} + \text{Capital} + \text{Resultado}$$

Dos precisiones sobre las definiciones que se preguntan en examen:

- **El activo exige control, no propiedad.** Un bien en régimen de arrendamiento
  financiero se activa aunque jurídicamente no sea de la empresa, porque esta asume
  los riesgos y beneficios.
- **El pasivo exige obligación actual por un suceso pasado.** La intención de
  comprar algo el año que viene no es un pasivo por mucho que sea segura: no ha
  ocurrido todavía el hecho que la origina.

### Reconocimiento

Un elemento se registra cuando cumple su definición **y** se dan las dos condiciones:

1. es **probable** que se obtengan o cedan beneficios económicos asociados;
2. su valor se puede determinar con **fiabilidad**.

Fallar la segunda es lo que deja fuera del balance activos que existen: una marca
generada internamente vale mucho y su coste no se puede separar del de la actividad
ordinaria, así que no se reconoce.

## Criterios de valoración

Valorar es asignar un importe monetario. El PGC recoge varios criterios y usa uno u
otro según el elemento y el momento:

| Criterio | Qué es |
| --- | --- |
| **Coste histórico** | precio de adquisición o coste de producción |
| **Valor razonable** | importe por el que puede intercambiarse entre partes informadas |
| **Valor neto realizable** | lo que se obtendría al venderlo, menos los costes de venta |
| **Valor actual** | flujos futuros descontados a una tasa adecuada |
| **Valor en uso** | valor actual de los flujos que se espera obtener de su uso |
| **Coste amortizado** | valor inicial menos reembolsos, más intereses devengados |
| Costes de venta | los directamente atribuibles a la venta |
| Valor contable | el importe neto por el que figura en el balance |
| Valor residual | lo que se obtendría al final de su vida útil |

**El criterio general es el coste histórico**, y esa es la respuesta por defecto: un
elemento entra en el balance por lo que costó. El valor razonable se aplica de forma
tasada, sobre todo a instrumentos financieros.

La razón de esa preferencia es el equilibrio entre relevancia y fiabilidad: el valor
razonable es más relevante y depende de una estimación; el coste histórico es menos
informativo y es un dato verificable con una factura.

Estos criterios reaparecen en cada tema: el valor neto realizable rige el deterioro
de existencias del tema 2, el coste amortizado los créditos del tema 3, y el valor
en uso el deterioro del inmovilizado de los temas 5 y 6.

El desarrollo del marco conceptual y de la normativa sigue a \cite{pgc2007} y
\cite{zafra2024}; el marco de las normas internacionales, a \cite{ifrs2018}. Los
planteamientos generales están en \cite{cervera2017} y \cite{wandenberghe2011}.
