# Cambio organizacional

Tema 3 del programa. Por qué las organizaciones cambian, por qué la gente se
resiste y qué hace que un cambio se sostenga en vez de deshacerse.

## Qué empuja

Las fuerzas del cambio se dividen en externas —tecnología, competencia,
regulación, cambios sociales y económicos— e internas —una estrategia nueva, una
plantilla distinta, problemas de rendimiento—. Las externas marcan el ritmo; las
internas deciden si la organización llega a tiempo.

El cambio puede ser **incremental**, de mejora continua sobre lo que ya existe, o
**radical**, que redefine la actividad. El primero es más barato y más seguro; el
segundo es el que hace falta cuando lo que cambia es el sector entero, y es donde
más organizaciones se quedan por el camino.

## El modelo de Lewin

Es el esquema de referencia y sigue siendo útil por lo que obliga a mirar.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  fase/.style={draw, rounded corners=2pt, minimum width=30mm, minimum height=14mm,
               align=center, font=\small},
  node distance=12mm
]
  \node[fase] (d) {\textbf{Descongelar}\\[-1pt]\footnotesize crear la necesidad};
  \node[fase, right=of d] (c) {\textbf{Cambiar}\\[-1pt]\footnotesize mover a la situación nueva};
  \node[fase, right=of c] (r) {\textbf{Recongelar}\\[-1pt]\footnotesize consolidar};
  \draw[-{Latex[length=2mm]}] (d) -- (c);
  \draw[-{Latex[length=2mm]}] (c) -- (r);
\end{tikzpicture}
\end{center}
```

La fase que más se salta es la primera. Un cambio anunciado a gente que no ve el
problema se recibe como un capricho, y la energía que habría que gastar en
avanzar se gasta en discutir si hacía falta. La tercera se salta casi igual de a
menudo: sin consolidar —cambiando los indicadores, los incentivos y los
procedimientos—, la organización vuelve a su sitio en cuanto deja de mirarse.

Lewin propone además el **análisis del campo de fuerzas**: en cualquier situación
hay fuerzas que empujan al cambio y fuerzas que lo frenan, y suele ser más
efectivo debilitar las que frenan que aumentar las que empujan, porque presionar
más solo aumenta la tensión.

## La resistencia

Resistirse al cambio es la conducta esperable, no una anomalía. Las causas se
ordenan en dos grupos:

| Individuales | De la organización |
| --- | --- |
| Miedo a lo desconocido | Inercia estructural: selección y procedimientos sostienen lo que hay |
| Pérdida de estatus o de competencia adquirida | Alcance limitado del cambio: cambiar una parte y no las demás |
| Costumbre y hábito | Inercia del grupo: las normas informales frenan al individuo |
| Percepción selectiva de la información | Amenaza al reparto de poder y de recursos |

La resistencia también es información. Quien lleva veinte años en un puesto puede
estar oponiéndose por miedo, o porque sabe algo que quien diseñó el cambio no
sabía. Tratarla siempre como obstáculo garantiza no distinguir los dos casos.

## Cómo se gestiona

Las tácticas habituales, y cuándo tiene sentido cada una:

- **Comunicación y formación**, cuando el problema es falta de información o
  información incorrecta. Es lenta y es la única que no deja resentimiento.
- **Participación**, cuando quien resiste tiene conocimiento que hace falta.
  Mejora la decisión y compromete a quien participó; alarga los plazos.
- **Apoyo y facilitación**, cuando el problema es el miedo a no ser capaz.
- **Negociación**, cuando alguien pierde de verdad y tiene poder para bloquear.
- **Coerción**, cuando el plazo no admite nada más. Es rápida, y quema la
  confianza que hará falta para el cambio siguiente.

El desarrollo organizacional agrupa las intervenciones planificadas y a largo
plazo que buscan cambiar la organización desde sus valores y sus procesos, en vez
de por decreto \cite{robbins2010}. La conexión con el tema anterior es directa:
un cambio que contradice la cultura de la organización necesita, antes o después,
cambiar también la cultura.
