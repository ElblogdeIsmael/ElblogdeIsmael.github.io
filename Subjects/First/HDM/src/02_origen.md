# El origen del crecimiento moderno

Tema 2 del programa. La economía orgánica preindustrial, la trampa maltusiana, los cambios
que la rompen y las explicaciones que se han propuesto.

## La economía preindustrial

| Rasgo | Contenido |
| --- | --- |
| **Base orgánica** | la energía procede de la biomasa, el músculo, el agua y el viento |
| **Predominio agrario** | el 70-80 % de la población trabaja la tierra |
| **Rendimientos decrecientes** | la tierra es fija y su calidad, desigual |
| Transporte caro | los mercados son locales salvo por vía fluvial o marítima |
| **Renta estancada** | el producto por habitante apenas varía en siglos |

**La restricción decisiva es energética.** Una economía orgánica solo dispone de la energía
que la superficie cultivada capta del sol cada año, así que producir más alimento, más leña
o más forraje compite por la misma tierra.

## La trampa maltusiana

```{=latex}
\begin{proposicion}
Si la población crece cuando la renta por habitante sube y decrece cuando baja, y la
producción agraria tiene rendimientos decrecientes, la economía converge a un
\textbf{equilibrio de subsistencia}: las mejoras técnicas se traducen en más población, no
en más renta por persona.
\end{proposicion}
```

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10cm, height=5.6cm, axis lines=left,
  xlabel={población}, ylabel={renta por habitante},
  xmin=0, xmax=10, ymin=0, ymax=3.2, xtick=\empty, ytick=\empty,
  label style={font=\small}, samples=160,
  legend style={font=\scriptsize, draw=none, at={(0.98,0.98)}, anchor=north east},
]
\addplot[thick, domain=1:10] {6/x};
\addlegendentry{renta, con tierra fija}
\addplot[dashed, domain=0:10] {1};
\addlegendentry{nivel de subsistencia}
\addplot[dotted, thick, domain=1:10] {9/x};
\addlegendentry{tras una mejora técnica}
\end{axis}
\end{tikzpicture}
\end{center}
```

**Una mejora técnica desplaza la curva hacia arriba y la renta sube por un tiempo**; la
población crece hasta que la renta vuelve al nivel de subsistencia, ahora con más gente. El
resultado a largo plazo de la innovación preindustrial es más población, no más bienestar.

| Freno | Tipo | Efecto |
| --- | --- | --- |
| **Preventivo** | matrimonio tardío, celibato, control de la natalidad | reduce la natalidad antes de la crisis |
| **Positivo** | hambre, epidemia, guerra | reduce la población tras la crisis |

```{=latex}
\begin{anotacion}
El modelo describe razonablemente bien el mundo anterior a 1800 y \textbf{deja de valer
justo después}, que es lo interesante. La pregunta del tema no es si Malthus tenía razón,
sino qué cambió para que dejara de tenerla: por qué a partir de cierto momento la
producción crece más deprisa que la población de forma sostenida.
\end{anotacion}
```

```{=latex}
\begin{ejemplo}
La peste negra de mediados del siglo XIV mató entre un tercio y la mitad de la población
europea. Con menos gente y la misma tierra, los salarios reales subieron con fuerza y se
mantuvieron altos casi un siglo. No fue una mejora económica: fue el modelo funcionando en
sentido inverso, y la recuperación demográfica posterior devolvió los salarios a su nivel
anterior.
\end{ejemplo}
```

## Los cambios que preparan la ruptura

### Expansión comercial y colonial

| Elemento | Consecuencia |
| --- | --- |
| Rutas atlánticas y asiáticas | mercados más amplios y productos nuevos |
| **Metales americanos** | aumento de la masa monetaria y de los precios |
| Comercio triangular | acumulación de capital en los puertos atlánticos |
| Compañías privilegiadas | primeras grandes organizaciones empresariales |

### Revolución agraria

| Cambio | Efecto |
| --- | --- |
| **Rotaciones sin barbecho** | más superficie cultivada cada año |
| Nuevos cultivos, forrajes y patata | más alimento y más ganado |
| **Cercamientos** | explotaciones mayores, y campesinos sin tierra |
| Selección de semillas y de ganado | rendimientos más altos |

**La revolución agraria libera mano de obra y alimenta a quien deja el campo.** Sin
excedente agrario no hay población urbana que sostener, y sin cercamientos no hay
trabajadores disponibles para las fábricas.

### Cambio institucional

| Institución | Por qué importa |
| --- | --- |
| **Derechos de propiedad seguros** | quien invierte espera recoger el fruto |
| Límites al poder arbitrario | reduce el riesgo de confiscación |
| **Patentes** | remuneran la invención sin impedir su difusión |
| Sistema financiero y deuda pública | canaliza el ahorro hacia la inversión |
| Mercados de trabajo y de tierra | permiten reasignar recursos |

```{=latex}
\begin{proposicion}
La tesis institucionalista sostiene que el crecimiento sostenido requiere reglas que hagan
rentable invertir a largo plazo. Su formulación clásica está en \cite{north1993}: las
instituciones son las reglas del juego, y determinan los incentivos de todos los que
participan en él.
\end{proposicion}
```

### Cambio cultural y científico

| Elemento | Aportación |
| --- | --- |
| Imprenta y alfabetización | difusión barata del conocimiento |
| **Revolución científica** | método experimental y medida |
| Ilustración industrial | acercamiento entre ciencia y oficio |
| Actitud hacia el comercio y el trabajo | prestigio social de la actividad productiva |

## Las explicaciones en debate

| Explicación | Idea central | Objeción principal |
| --- | --- | --- |
| **Institucional** | derechos de propiedad e incentivos | otras sociedades los tuvieron sin industrializarse |
| **Geográfica y de recursos** | carbón accesible, costas, clima | no explica el momento ni el ritmo |
| **De precios relativos** | salarios altos y energía barata hacen rentable mecanizar | discutida la medición de los salarios |
| **Cultural** | valores favorables a la innovación | difícil de cuantificar y de fechar |
| **Comercio y colonias** | demanda exterior y capital acumulado | el comercio era pequeño frente al PIB |
| Demográfica | control de la natalidad y capital humano | efecto lento |

```{=latex}
\begin{anotacion}
Ninguna explicación por sí sola resiste el contraste, y la síntesis actual —recogida en
\cite{koyama2022}— combina varias: instituciones que permitieron, precios relativos que
hicieron rentable y cultura y ciencia que hicieron posible. \textbf{Buscar una causa única
de la industrialización es la trampa clásica del tema}, porque siempre existe un caso que la
desmiente.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Explicar por qué la introducción de la patata en Europa elevó la población sin elevar la
renta por habitante.
\end{ejercicio}

\begin{solucion}
La patata aporta muchas más calorías por hectárea que el cereal, así que la misma tierra
alimenta a más gente. En el marco maltusiano, esa mejora desplaza la curva hacia arriba y la
renta sube temporalmente.

\medskip
Al subir la renta, cae la mortalidad y se adelanta la edad de matrimonio, así que la
población crece hasta que la renta vuelve al nivel de subsistencia, ahora con más
habitantes. El resultado final es demográfico, no económico.

\medskip
La contrapartida está en Irlanda: la dependencia de un solo cultivo convirtió una plaga en
una catástrofe demográfica, que es el freno positivo del modelo en su forma más extrema.
\end{solucion}

\begin{ejercicio}
Un país tiene derechos de propiedad seguros, sistema judicial independiente y patentes desde
hace siglos, y no se industrializa. ¿Invalida eso la explicación institucional?
\end{ejercicio}

\begin{solucion}
No la invalida, la delimita. Las instituciones son condición necesaria y no suficiente: sin
seguridad jurídica la inversión a largo plazo no ocurre, pero con ella tampoco ocurre
automáticamente.

\medskip
Faltan las otras piezas: precios relativos que hagan rentable sustituir trabajo por
máquinas, acceso a energía barata, un mercado suficientemente grande y una base técnica
capaz de construir y reparar la maquinaria.

\medskip
El caso obliga a formular la tesis con cuidado: las instituciones explican por qué el
crecimiento \emph{no} ocurre donde faltan, más que por qué ocurre donde están.
\end{solucion}

\begin{ejercicio}
Comentar la afirmación: «la revolución industrial fue posible gracias a los beneficios del
comercio colonial».
\end{ejercicio}

\begin{solucion}
Es parcialmente cierta y está mal formulada como causa suficiente. El comercio atlántico
acumuló capital en los puertos, amplió mercados y aportó materias primas —algodón, sobre
todo—, y esos efectos fueron reales.

\medskip
La objeción cuantitativa es que el comercio exterior representaba una fracción pequeña del
producto británico, insuficiente para financiar por sí sola la inversión industrial. Además
otras potencias con imperios mayores, como España y Portugal, no se industrializaron antes.

\medskip
La formulación defendible es más modesta: el comercio colonial fue uno de los factores que
concurrieron, especialmente en el algodón, y no la causa de la que dependía todo lo demás.
\end{solucion}
```

Los orígenes del crecimiento moderno están desarrollados en \cite{koyama2022} y
\cite{allen2013}, con el marco institucional de \cite{north1993} y la síntesis de
\cite{comin2010}.
