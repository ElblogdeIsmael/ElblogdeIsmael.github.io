# Control

Tema 11 del programa. La cuarta función: comprobar si lo que sale se parece a lo
que se planificó, y hacer algo cuando no.

## El ciclo

Controlar es medir el rendimiento, compararlo con el estándar y corregir la
desviación. Sin planificación no hay control, porque no hay estándar contra el
que comparar; y sin control la planificación es un deseo.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  p/.style={draw, rounded corners=2pt, minimum width=30mm, minimum height=12mm,
            align=center, font=\footnotesize},
  node distance=9mm and 14mm
]
  \node[p] (e) {Fijar estándares\\[-2pt]\footnotesize (viene del plan)};
  \node[p, right=of e] (m) {Medir el\\rendimiento real};
  \node[p, below=of m] (c) {Comparar\\con el estándar};
  \node[p, left=of c] (a) {Corregir\\la desviación};
  \draw[-{Latex[length=2mm]}] (e) -- (m);
  \draw[-{Latex[length=2mm]}] (m) -- (c);
  \draw[-{Latex[length=2mm]}] (c) -- (a);
  \draw[-{Latex[length=2mm]}] (a) -- (e);
\end{tikzpicture}
\end{center}
```

La comparación admite un margen: no toda desviación merece intervención. La
**dirección por excepción** consiste en fijar ese margen y actuar solo cuando se
sale de él, que es lo que hace el control sostenible en una organización grande.

## Cuándo se controla

| Momento | Tipo | Qué permite |
| --- | --- | --- |
| Antes | preventivo | evitar el problema: selección de personal, control de calidad de la entrada, presupuesto |
| Durante | concurrente | corregir sobre la marcha: supervisión directa, indicadores en tiempo real |
| Después | correctivo | aprender para la próxima vez: auditoría, análisis de desviaciones |

El preventivo es el más barato y el que menos se usa, porque exige anticipar. El
correctivo llega tarde por definición y sigue siendo útil: es el que alimenta el
plan siguiente, y ahí se cierra el ciclo con el tema 5.

## Qué hace útil a un sistema de control

Preciso, oportuno, económico, comprensible, con criterios razonables, centrado en
los puntos críticos y con **acción correctora** prevista. La última condición es
la que más se incumple: un informe que nadie usa para decidir no es control, es
documentación.

Y la advertencia grande: **la gente se comporta según lo que se mide**. Un
indicador se convierte en objetivo, y en cuanto lo hace deja de medir lo que
medía. Las consecuencias típicas:

- Se optimiza lo medible y se abandona lo importante y difícil de medir.
- Se manipula el dato cuando falsearlo es más barato que mejorarlo.
- Se posponen decisiones necesarias que empeorarían el indicador este trimestre.

De ahí que un sistema de control con un solo indicador sea siempre peor que uno
con varios que se compensen. Es el argumento del **cuadro de mando integral**:
mirar a la vez la perspectiva financiera, la del cliente, la de los procesos
internos y la de aprendizaje, de forma que mejorar una a costa de las otras se
vea \cite{koontz2004}.

## Áreas y herramientas

El control **financiero** usa presupuestos, ratios y análisis de desviaciones;
el de **operaciones**, indicadores de calidad, productividad y plazo; el de
**personas**, evaluación del desempeño, absentismo y rotación. La conexión con
los temas anteriores es que el sistema de evaluación es a la vez control (tema
11) y motivación (tema 6), y cuando los dos papeles entran en conflicto suele
ganar el peor.

Por último, el control tiene un límite ético que enlaza con el tema 12: la
capacidad técnica de vigilar el trabajo —correo, ubicación, actividad en el
equipo— ha crecido mucho más deprisa que el consenso sobre hasta dónde debe
llegar, y «se puede medir» nunca ha sido lo mismo que «se debe medir».
