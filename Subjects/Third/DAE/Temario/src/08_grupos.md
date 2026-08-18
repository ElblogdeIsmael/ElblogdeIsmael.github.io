# Grupos de trabajo

Tema 8 del programa. Cuándo un grupo rinde más que sus miembros por separado y
cuándo rinde menos, que ocurre más a menudo de lo que se admite.

## Grupo y equipo

Un **grupo** son dos o más personas que interactúan y comparten un objetivo. Un
**equipo** es un grupo cuyos esfuerzos producen un rendimiento **mayor que la
suma** de las aportaciones individuales. La diferencia no es de tamaño ni de
nombre: es de sinergia, responsabilidad compartida y habilidades complementarias.

Los grupos son **formales** —creados por la organización— o **informales**, que
surgen solos y son los que descubrieron los estudios de Hawthorne del tema 1.

## Cómo se forman

El modelo de Tuckman describe cinco etapas, y su valor está en avisar de que la
tercera no se salta:

```{=latex}
\begin{center}
\begin{tikzpicture}[
  et/.style={draw, rounded corners=2pt, minimum width=21mm, minimum height=10mm,
             align=center, font=\footnotesize},
  node distance=5mm
]
  \node[et] (f) {Formación};
  \node[et, right=of f] (c) {Conflicto};
  \node[et, right=of c] (n) {Normalización};
  \node[et, right=of n] (d) {Desempeño};
  \node[et, right=of d] (x) {Disolución};
  \foreach \a/\b in {f/c, c/n, n/d, d/x} \draw[-{Latex[length=2mm]}] (\a) -- (\b);
  \node[below=3mm of c, font=\scriptsize, align=center, text width=30mm]
       {se define quién manda y para qué está el grupo};
\end{tikzpicture}
\end{center}
```

El **conflicto** de la segunda etapa no es una avería: es donde el grupo negocia
los roles y el liderazgo. Un grupo que lo evita llega a la etapa de desempeño con
las cuestiones sin resolver y las arrastra en cada decisión.

## Qué determina que funcione

| Factor | Cómo influye |
| --- | --- |
| Tamaño | los pequeños son más rápidos; los grandes aportan más información y sufren más holgazanería |
| Composición | la diversidad mejora la calidad de la decisión y empeora la cohesión inicial |
| Roles | además del asignado, cada uno adopta uno de hecho: coordinador, especialista, cohesionador, bloqueador |
| Normas | lo que el grupo espera de cada uno. Son más fuertes que las reglas escritas |
| Estatus | la desigualdad percibida silencia al de menor estatus, aunque tenga razón |
| Cohesión | aumenta la satisfacción; sube el rendimiento **solo si** las normas del grupo lo favorecen |

La última fila es la más importante y la que más se malinterpreta: un grupo muy
cohesionado cuya norma sea rendir poco rinde muy poco, y con gran regularidad.

## Las dos patologías

- **Holgazanería social**: el esfuerzo individual baja al aumentar el grupo,
  porque la aportación de cada uno deja de ser identificable. Se corrige haciendo
  visible lo que aporta cada uno y con grupos pequeños.
- **Pensamiento de grupo**: la presión por el consenso suprime la disidencia. Se
  reconoce por sus síntomas —ilusión de invulnerabilidad, racionalización
  colectiva, presión sobre el que duda, ilusión de unanimidad— y se combate como
  se vio en el tema 4: abogado del diablo, opinión escrita antes del debate, y un
  líder que no diga primero lo que piensa.

## Grupos de trabajo en la práctica

Las técnicas que separan generar de evaluar —tormenta de ideas, grupo nominal,
Delphi— vienen del tema 4 y son aquí la herramienta principal. Y para los
equipos que ya funcionan, las tres condiciones que la investigación repite:
objetivos claros y compartidos, tamaño reducido, y **responsabilidad conjunta por
el resultado**, no la suma de responsabilidades individuales \cite{robbins2010}.
