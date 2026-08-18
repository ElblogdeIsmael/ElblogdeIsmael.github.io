# Toma de decisiones

Tema 4 del programa. Cómo se decide, cómo se decide en realidad, y por qué las
dos cosas no coinciden.

## El proceso racional

El modelo normativo describe cómo debería tomarse una decisión:

```{=latex}
\begin{center}
\begin{tikzpicture}[
  paso/.style={draw, rounded corners=2pt, minimum width=27mm, minimum height=11mm,
               align=center, font=\footnotesize},
  node distance=6mm and 7mm
]
  \node[paso]                  (p1) {Identificar\\el problema};
  \node[paso, right=of p1]     (p2) {Fijar criterios\\y ponderarlos};
  \node[paso, right=of p2]     (p3) {Generar\\alternativas};
  \node[paso, below=of p3]     (p4) {Evaluarlas};
  \node[paso, left=of p4]      (p5) {Elegir};
  \node[paso, left=of p5]      (p6) {Implantar\\y controlar};
  \foreach \a/\b in {p1/p2, p2/p3, p3/p4, p4/p5, p5/p6}
    \draw[-{Latex[length=2mm]}] (\a) -- (\b);
  \draw[-{Latex[length=2mm]}] (p6) to[out=180, in=180, looseness=1.4] (p1);
\end{tikzpicture}
\end{center}
```

El bucle de vuelta no es decorativo: el control genera la información que
identifica el problema siguiente, y ahí es donde este tema enlaza con el tema 11.

El modelo supone que quien decide conoce todas las alternativas, todas sus
consecuencias y sus preferencias, y que optimiza. Ninguna de las tres cosas se
cumple.

## Racionalidad limitada

**Simon** sustituyó ese supuesto por otro más realista: quien decide tiene
información incompleta, capacidad de cálculo limitada y tiempo escaso, así que
construye un modelo simplificado del problema y **satisface** en vez de
optimizar. Es decir, se queda con la primera alternativa que supera un umbral de
aceptabilidad, no con la mejor de todas.

De ahí salen los sesgos que aparecen una y otra vez:

| Sesgo | En qué consiste |
| --- | --- |
| Anclaje | la primera cifra que se oye condiciona toda la negociación |
| Confirmación | se busca información que apoya lo que ya se cree |
| Disponibilidad | se sobrestima lo que se recuerda con facilidad, casi siempre lo reciente o lo dramático |
| Exceso de confianza | se estrechan los intervalos y se subestiman los plazos |
| Costes hundidos | se persevera por lo ya invertido, que es justo lo irrecuperable |
| Escalada del compromiso | se aumenta la apuesta en una decisión que va mal para no reconocerla |

El sesgo de costes hundidos merece una nota: lo invertido no vuelve decida uno lo
que decida, así que la única pregunta pertinente es si el gasto que queda por
hacer compensa el beneficio que queda por obtener.

## Tipos de decisión

Las decisiones **programadas** son repetitivas y se resuelven con una regla o un
procedimiento; las **no programadas** son nuevas y mal estructuradas, y piden
juicio. La proporción entre unas y otras es lo que separa a un directivo de
primera línea de uno de alta dirección, como se veía en el tema 1.

Según lo que se sabe del futuro:

- **Certeza**: se conoce el resultado de cada alternativa. Es raro y es el caso
  fácil.
- **Riesgo**: se conocen los resultados posibles y su probabilidad. Es el terreno
  del valor esperado y los árboles de decisión.
- **Incertidumbre**: no se conocen las probabilidades. Aquí no hay criterio
  óptimo, solo criterios defendibles —el pesimista *maximin*, el optimista
  *maximax*, el de arrepentimiento mínimo— y la elección entre ellos revela la
  actitud ante el riesgo de quien decide, no una verdad sobre el problema.

## Decidir en grupo

El grupo aporta más información, más alternativas y más aceptación de la
decisión; a cambio es más lento, diluye la responsabilidad y puede acabar
dominado por quien más habla.

Sus dos patologías tienen nombre propio y salen en el tema 8:

- **Pensamiento de grupo**: la presión por el consenso hace que nadie exprese
  dudas, y el grupo llega a una decisión que ninguno de sus miembros defendería
  a solas.
- **Desplazamiento del riesgo**: el grupo adopta posiciones más extremas —casi
  siempre más arriesgadas— que las que adoptarían sus miembros por separado,
  porque la responsabilidad se reparte.

Contra ambas funcionan las técnicas que separan la generación de ideas de su
evaluación: la **tormenta de ideas**, la **técnica del grupo nominal** —cada uno
escribe antes de que nadie hable— y el **método Delphi**, con expertos que no se
reúnen. Y una más barata: asignar explícitamente a alguien el papel de abogado
del diablo, de forma que discrepar sea su tarea y no su riesgo.
