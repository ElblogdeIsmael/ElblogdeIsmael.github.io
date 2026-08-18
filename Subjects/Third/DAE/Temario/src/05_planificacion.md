# Planificación

Tema 5 del programa. La primera de las cuatro funciones: decidir a dónde se va
antes de organizar a nadie para llegar.

## Para qué sirve

Planificar es fijar objetivos y elegir los medios para alcanzarlos. Cumple cuatro
cosas a la vez: **marca la dirección**, **reduce la incertidumbre** obligando a
mirar hacia delante, **evita el solapamiento y el desperdicio** al coordinar, y
**fija los criterios del control**, porque no se puede controlar lo que no se
planificó. Esa última es la que conecta con el tema 11.

La objeción habitual es que en un entorno turbulento planificar es inútil. La
respuesta es que en un entorno turbulento lo inútil es el plan rígido, no la
planificación: lo que se gana es el análisis, y por eso los planes se revisan en
vez de tirarse.

## Tipos de plan

| Criterio | Tipos |
| --- | --- |
| Alcance | estratégicos (toda la organización) / tácticos / operativos |
| Horizonte | largo, medio y corto plazo |
| Frecuencia | de un solo uso (un proyecto, un presupuesto) / permanentes |
| Concreción | direccionales, que fijan un rumbo / específicos, sin ambigüedad |

Los planes **permanentes** son las políticas, los procedimientos y las reglas, y
son la forma en que una organización convierte una decisión no programada en una
programada: se decide una vez y se aplica muchas.

Un plan **específico** es mejor cuando el entorno es estable; uno **direccional**,
cuando no lo es, porque deja margen para reaccionar sin tener que rehacerlo.

## Los objetivos

Un objetivo bien formulado es concreto, medible, alcanzable, relevante y con un
plazo. Lo importante no es la regla nemotécnica sino sus consecuencias: sin
medida no hay control, y sin plazo no hay urgencia.

Los objetivos se despliegan en cascada, de forma que los de cada nivel sean los
medios del nivel superior:

```{=latex}
\begin{center}
\begin{tikzpicture}[
  niv/.style={draw, rounded corners=2pt, minimum width=52mm, minimum height=11mm,
              align=center, font=\small},
  node distance=7mm
]
  \node[niv, fill=black!10] (e) {Objetivos estratégicos\\[-2pt]\footnotesize alta dirección · largo plazo};
  \node[niv, fill=black!5, below=of e] (t) {Objetivos tácticos\\[-2pt]\footnotesize dirección intermedia · medio plazo};
  \node[niv, below=of t] (o) {Objetivos operativos\\[-2pt]\footnotesize primera línea · corto plazo};
  \draw[-{Latex[length=2mm]}] (e) -- (t);
  \draw[-{Latex[length=2mm]}] (t) -- (o);
  \node[right=6mm of t, align=left, font=\footnotesize] (n)
       {cada nivel concreta\\el de arriba};
  \draw[dashed] (t.east) -- (n.west);
\end{tikzpicture}
\end{center}
```

La **dirección por objetivos** lleva esa idea al extremo: superior y subordinado
acuerdan los objetivos, se fija un plazo y la evaluación se hace sobre el
resultado. Funciona cuando el resultado es medible y el subordinado tiene margen
real para decidir cómo llegar; falla cuando se mide lo fácil en vez de lo
importante, que es la crítica clásica y sigue vigente \cite{koontz2004}.

## Del plan a la estrategia

El proceso estratégico ordena el trabajo así: misión y visión, análisis externo e
interno, formulación, implantación y control. El análisis interno y externo se
resume habitualmente en la matriz DAFO, que cruza lo interno —fortalezas y
debilidades— con lo externo —oportunidades y amenazas—.

Las estrategias genéricas de nivel de negocio son tres: **liderazgo en costes**,
**diferenciación** y **enfoque** en un segmento. La advertencia que las acompaña
es que quedarse a medias entre las dos primeras suele ser peor que cualquiera de
ellas, porque se pierde la ventaja en coste sin ganar la de precio.

Las herramientas de previsión —series temporales, escenarios, opinión de
expertos, análisis del punto muerto— no son el contenido de esta asignatura, pero
conviene saber para qué está cada una: la extrapolación sirve cuando el pasado
informa del futuro, y los escenarios justamente cuando no.
