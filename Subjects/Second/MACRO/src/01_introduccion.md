# Introducción

Tema 1 del programa. El origen de la macroeconomía, las escuelas de pensamiento, las
variables y relaciones macroeconómicas, la ecuación fundamental de endeudamiento y los
marcos temporales de los modelos.

## Origen

La macroeconomía nace como disciplina con la **Gran Depresión** y la publicación en 1936
de la *Teoría general* de Keynes. Hasta entonces el análisis dominante era
microeconómico y sostenía que los mercados se ajustaban solos; una década de desempleo
masivo obligó a plantear preguntas que ese marco no respondía.

| Pregunta | Enfoque |
| --- | --- |
| ¿Por qué el paro persiste años? | insuficiencia de demanda agregada |
| ¿Puede el Estado hacer algo? | política fiscal y monetaria |
| ¿Qué determina la producción a corto plazo? | la demanda |
| ¿Y a largo plazo? | la capacidad productiva |

## Escuelas de pensamiento

| Escuela | Tesis central | Papel del Estado |
| --- | --- | --- |
| **Clásica** | los mercados se vacían, los precios son flexibles | mínimo |
| **Keynesiana** | los precios son rígidos a corto plazo; la demanda determina la producción | activo, estabilizador |
| **Monetarista** | la inflación es siempre un fenómeno monetario | reglas, no discrecionalidad |
| **Nueva clásica** | expectativas racionales; la política anticipada no tiene efectos reales | ineficaz salvo por sorpresa |
| **Nueva keynesiana** | rigideces con fundamento microeconómico | activo, con reglas |

```{=latex}
\begin{anotacion}
Las escuelas no se suceden descartando a la anterior: se acumulan. El consenso actual
combina el corto plazo keynesiano con el largo plazo clásico, y las diferencias se
refieren sobre todo a \textbf{cuánto dura el corto plazo} y a qué política es fiable. Por
eso el temario recorre los dos horizontes.
\end{anotacion}
```

## Variables y relaciones

| Variable | Qué mide |
| --- | --- |
| PIB | valor de la producción final en un periodo |
| Renta nacional | lo que perciben los factores |
| Consumo, inversión, gasto público | componentes de la demanda |
| Nivel de precios | media ponderada de los precios |
| Tasa de inflación | variación del nivel de precios |
| Tasa de paro | parados sobre población activa |
| Tipo de interés | precio del dinero prestado |
| Tipo de cambio | precio de una moneda en otra |

### Flujos y fondos

| Tipo | Se mide | Ejemplos |
| --- | --- | --- |
| **Flujo** | por unidad de tiempo | renta, inversión, déficit |
| **Fondo** o *stock* | en un instante | riqueza, capital, deuda |

**Confundirlos es el error más frecuente del curso.** El déficit es un flujo anual y la
deuda es el fondo que acumula esos flujos; una empresa puede tener beneficios —flujo— y
estar endeudada —fondo—, y las dos cosas a la vez no son contradictorias.

### La identidad fundamental

$$Y = C + I + G + (X - M)$$

Es una **identidad contable**, cierta por definición, y no una teoría: dice cómo se
reparte la producción, no qué la determina.

De ella y de la definición de renta disponible sale la relación entre ahorro e inversión:

$$S_{privado} + S_{público} + S_{externo} = I$$

que se lee así: **toda inversión se financia con algún ahorro**, propio o ajeno.

### Nominal y real

| Magnitud | Cómo se calcula |
| --- | --- |
| PIB nominal | a precios corrientes |
| PIB real | a precios de un año base |
| Deflactor del PIB | $100\times$ PIB nominal / PIB real |

$$\text{crecimiento real} \approx \text{crecimiento nominal} - \text{inflación}$$

La aproximación vale con tasas pequeñas; el cálculo exacto es el cociente de índices.
Distinguir las dos magnitudes es lo que separa un aumento de producción de una simple
subida de precios.

## La ecuación fundamental de endeudamiento

Para cualquier agente —familia, empresa, Estado o país— la variación de su deuda es lo
que gasta por encima de lo que ingresa, más los intereses de lo que ya debe:

$$B_t = (1+i)\,B_{t-1} + G_t - T_t$$

Expresada como porcentaje del PIB, y llamando $d$ a la deuda sobre PIB, $g$ al
crecimiento real y $s$ al superávit primario:

$$\Delta d \approx (i - \pi - g)\,d - s$$

| Situación | Efecto sobre la deuda |
| --- | --- |
| $i-\pi < g$ | la deuda se diluye sola aunque haya déficit primario |
| $i-\pi > g$ | hace falta superávit primario para estabilizarla |
| $s > (i-\pi-g)d$ | la deuda baja |

```{=latex}
\begin{anotacion}
La ecuación explica por qué la sostenibilidad de la deuda pública \textbf{no depende de
su nivel} sino de la relación entre el tipo de interés real y el crecimiento. Un país con
deuda del 120\,\% del PIB y $g > i-\pi$ está en trayectoria descendente; otro con el
60\,\% y la relación inversa, en trayectoria explosiva. Es el resultado con más
consecuencias prácticas del tema.
\end{anotacion}
```

```{=latex}
\begin{ejemplo}
Un país tiene deuda del 100\,\% del PIB, tipo de interés nominal del 3\,\%, inflación del
2\,\% y crecimiento real del 2\,\%. Entonces $i-\pi-g = 3-2-2 = -1$, así que
$$\Delta d \approx -1\cdot 1 - s = -1 - s$$
La deuda baja un punto de PIB al año \textbf{aunque el superávit primario sea nulo}. Si en
cambio el tipo subiera al 6\,\%, el término pasaría a $+2$ y haría falta un superávit
primario del 2\,\% del PIB solo para mantenerla estable.
\end{ejemplo}
```

## Marcos temporales

| Horizonte | Qué es flexible | Qué determina la producción |
| --- | --- | --- |
| **Corto plazo** | nada: precios y salarios rígidos | la demanda agregada |
| **Medio plazo** | los precios se ajustan | la oferta: capital, trabajo y tecnología |
| **Largo plazo** | también el capital | la acumulación y el progreso técnico |

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth, font=\scriptsize,
  c/.style={draw, minimum width=30mm, minimum height=9mm, align=center}
]
\node[c] (a) at (0,0)    {Corto plazo\\demanda: IS-LM};
\node[c] (b) at (4.4,0)  {Medio plazo\\OA-DA, Phillips};
\node[c] (d) at (8.8,0)  {Largo plazo\\crecimiento};
\draw[->] (a) -- (b); \draw[->] (b) -- (d);
\node[font=\scriptsize] at (0,-1.0) {temas 2 a 5};
\node[font=\scriptsize] at (4.4,-1.0) {temas 6 y 7};
\node[font=\scriptsize] at (8.8,-1.0) {tema 8};
\end{tikzpicture}
\end{center}
```

**El recorrido del temario es ese**: se empieza suponiendo precios fijos y demanda
determinante, se deja que los precios se ajusten, y se termina con el crecimiento a
largo plazo, donde la demanda ya no importa.

## Ejercicios

```{=latex}
\begin{ejercicio}
El PIB nominal crece un 5\,\% y el deflactor un 3\,\%. ¿Cuánto crece el PIB real?
\end{ejercicio}

\begin{solucion}
Exactamente, $1{,}05/1{,}03 = 1{,}0194$, un 1,94\,\%. La aproximación por diferencia da
2\,\%, muy próxima porque las tasas son pequeñas. Con inflaciones altas la aproximación
falla: con nominal del 30\,\% y deflactor del 25\,\%, la diferencia daría 5\,\% y el valor
correcto es 4\,\%.
\end{solucion}

\begin{ejercicio}
Distinguir cuáles de estas magnitudes son flujos y cuáles fondos: deuda pública, déficit
público, renta anual, riqueza, inversión, capital instalado.
\end{ejercicio}

\begin{solucion}
Flujos: déficit público, renta anual e inversión, todos medidos por unidad de tiempo.
Fondos: deuda pública, riqueza y capital instalado, medidos en un instante.

\medskip
Cada par está relacionado: el déficit acumula deuda, el ahorro acumula riqueza y la
inversión acumula capital. El fondo es la integral del flujo, descontada la
depreciación cuando la hay.
\end{solucion}

\begin{ejercicio}
Un país tiene deuda del 80\,\% del PIB, tipo real del 1\,\% y crecimiento del 3\,\%. ¿Qué
superávit primario necesita para que la deuda no crezca?
\end{ejercicio}

\begin{solucion}
$\Delta d \approx (1-3)\cdot 0{,}8 - s = -1{,}6 - s$. Para que la deuda no crezca basta
$\Delta d \le 0$, lo que se cumple con $s \ge -1{,}6$: puede permitirse un \textbf{déficit}
primario de hasta el 1,6\,\% del PIB y aun así ver bajar la ratio de deuda. Es el efecto
del crecimiento por encima del tipo de interés real.
\end{solucion}
```

Los conceptos introductorios y la contabilidad macroeconómica están desarrollados en
\cite{blanchard2017} y \cite{dornbusch2020}, con problemas resueltos en
\cite{sanchez2012} y \cite{belzunegui2014}.
