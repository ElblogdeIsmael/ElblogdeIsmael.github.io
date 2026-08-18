# Ética y responsabilidad social

Tema 12 del programa. Qué debe una empresa a quien no es su accionista, y por qué
la respuesta no es obvia.

## Ética en la empresa

La ética empresarial estudia qué conductas son correctas en la actividad
económica. Los tres criterios que se usan para juzgar una decisión rara vez
coinciden, y ahí está la dificultad:

| Criterio | Pregunta |
| --- | --- |
| Utilitario | ¿qué opción produce el mayor bien para el mayor número? |
| De derechos | ¿respeta los derechos básicos de los afectados? |
| De justicia | ¿reparte cargas y beneficios de forma equitativa? |

Una decisión puede maximizar el beneficio agregado y vulnerar el derecho de una
minoría. El criterio utilitario, aplicado solo, justifica eso; por eso se usan
los tres y se explicita cuál pesa más en cada caso.

Lo que determina la conducta ética real en una organización no es tanto el código
escrito como tres factores: el **desarrollo moral** de la persona, la **intensidad
del asunto** —magnitud del daño, proximidad de la víctima— y sobre todo la
**cultura** del tema 2, que decide qué se tolera. Un código ético en una cultura
que premia el resultado a cualquier precio no cambia nada.

## Responsabilidad social corporativa

La **obligación social** es cumplir la ley. La **sensibilidad social** es
responder a las demandas sociales del momento. La **responsabilidad social** va
más allá: es asumir obligaciones a largo plazo que benefician a la sociedad
aunque no las exija ninguna norma.

El debate clásico tiene dos posiciones bien formuladas:

- **A favor:** la empresa usa recursos de la sociedad y opera con su permiso; los
  problemas sociales le acaban afectando; anticiparse evita regulación; y mejora
  la reputación y la capacidad de atraer talento.
- **En contra**, en la formulación de Friedman: la responsabilidad de la
  dirección es con los accionistas, gastar su dinero en fines sociales que no
  eligieron es impropio, los directivos no tienen legitimidad ni competencia para
  decidir prioridades sociales, y para eso están los poderes públicos.

La postura de los **grupos de interés** ordena el problema mejor que el debate
frontal: la empresa depende de accionistas, empleados, clientes, proveedores,
comunidad y administración, y su continuidad exige atender a todos, no solo al
primero.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  gi/.style={draw, rounded corners=2pt, minimum width=25mm, minimum height=9mm,
             align=center, font=\footnotesize},
  node distance=13mm and 9mm
]
  \node[draw, thick, minimum width=27mm, minimum height=11mm, font=\small] (emp) {Empresa};
  \node[gi, above left=of emp]  (ac) {Accionistas};
  \node[gi, above right=of emp] (em) {Empleados};
  \node[gi, left=18mm of emp]   (cl) {Clientes};
  \node[gi, right=18mm of emp]  (pr) {Proveedores};
  \node[gi, below left=of emp]  (co) {Comunidad};
  \node[gi, below right=of emp] (ad) {Administración};
  \foreach \n in {ac, em, cl, pr, co, ad} \draw (emp) -- (\n);
\end{tikzpicture}
\end{center}
```

## De la declaración a la práctica

Lo que distingue una política real de una campaña es que la primera se mide y se
publica. Las herramientas habituales son la memoria de sostenibilidad con
indicadores comparables, la auditoría social, los códigos de conducta que
alcanzan también a los proveedores, y la integración de criterios ambientales y
sociales en la decisión de inversión.

El riesgo conocido tiene nombre: el **lavado de imagen**, hacer más ruido con lo
que se hace que trabajo en hacerlo. Se detecta con la misma prueba del tema 2:
comparar los valores declarados con lo que la organización premia y castiga de
verdad \cite{fernandezgago2006}.

Y una nota final que cierra el temario. Las cuatro funciones —planificar,
organizar, dirigir y controlar— describen cómo se administra; este tema pregunta
para qué. Una organización eficaz y eficiente que produce un daño sigue siendo
eficaz y eficiente, y ese es exactamente el motivo de que la pregunta no se pueda
dejar fuera.
