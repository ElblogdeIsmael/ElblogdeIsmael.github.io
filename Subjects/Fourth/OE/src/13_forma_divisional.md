# La forma divisional

Tema 13 del programa. No es una organización completa: es una estructura superpuesta
a otras, con una sede que controla resultados y unas divisiones que producen.

## Descripción

| Rasgo | Valor |
| --- | --- |
| Mecanismo de coordinación | normalización de resultados |
| Parte dominante | línea media |
| Agrupación | de mercado, en el nivel superior |
| Descentralización | tipo C: vertical limitada, hacia los jefes de división |
| Sistemas | control de rendimiento muy desarrollado |
| Formalización | alta dentro de cada división |

La sede central agrupa por mercado —producto, cliente o zona— y da a cada división
un flujo de trabajo completo. Después le fija objetivos y la deja decidir cómo
alcanzarlos.

**Es una estructura de dos pisos.** El superior es la relación sede-divisiones; el
inferior es la estructura interna de cada división, que suele ser una burocracia
maquinal. Y no por casualidad: lo que la sede exige son resultados medibles y
previsibles, y eso es lo que una burocracia maquinal produce y una adhocracia no.

## Qué hace la sede

Cinco funciones, y solo cinco:

| Función | En qué consiste |
| --- | --- |
| Cartera de negocios | decidir en qué mercados se está: comprar, vender, cerrar |
| Asignación de recursos | repartir el capital entre divisiones |
| Control de rendimiento | fijar objetivos y vigilar el cumplimiento |
| Nombramiento y sustitución | designar a los directores de división |
| Servicios comunes | los pocos que compensa centralizar: jurídico, financiero, marca |

Lo que **no** hace es dirigir el negocio de las divisiones. Si lo hiciera, la
configuración se derrumbaría: las divisiones dejarían de poder responder de un
resultado que no controlan.

## Condiciones en las que aparece

| Factor | Valor |
| --- | --- |
| Edad y tamaño | muy grande y madura |
| Entorno | diversificado en mercados, no especialmente complejo ni dinámico |
| Sistema técnico | divisible entre divisiones |
| Poder | del ápice y de la línea media |

**La diversidad de mercados es la condición necesaria.** La forma divisional aparece
cuando la organización sirve a mercados suficientemente distintos como para que la
agrupación funcional deje de tener sentido. Es la tercera hipótesis del entorno del
tema 8.

**Y el sistema técnico tiene que ser divisible.** Si todas las líneas de producto
salen de la misma planta indivisible, no se pueden separar en divisiones con cuentas
propias, y la configuración no es viable por mucho que los mercados difieran.

## Ventajas

- **Reparte el riesgo.** Cada división tiene su ciclo; que una vaya mal no arrastra
  al resto.
- **Asigna capital mejor.** La sede mueve recursos de los negocios maduros a los que
  crecen, algo que un mercado externo haría más despacio y con menos información.
- **Forma directivos generales.** Dirigir una división es el mejor entrenamiento
  para el ápice, y la organización lo produce por sí sola.
- **Responde rápido en cada mercado.** La decisión se toma dentro de la división,
  que conoce su cliente.
- **Permite entrar y salir de negocios** sin rediseñar la organización entera.

## Problemas

**El sistema de control empuja al corto plazo.** Es el problema central. La sede
controla con cifras, y las cifras de un trimestre no reflejan las inversiones cuyo
efecto tarda años. El director de división que quiere cumplir aplaza el
mantenimiento, recorta formación y no arriesga en desarrollo, y sus números mejoran.

**Desanima la innovación.** Innovar es incierto por definición, y en un sistema que
premia el objetivo alcanzado, la incertidumbre se penaliza. Por eso las divisiones
tienden a explotar lo que ya funciona y la innovación se concentra en unidades
separadas del sistema de control.

**Concentra el poder en una sola persona por división.** Dentro de la división, el
director responde de todo y por tanto controla todo. La configuración es
descentralizada arriba y centralizada abajo.

**Duplica recursos.** Cada división tiene su producción, su comercial y su
administración. Es el precio de la agrupación por mercado del tema 5.

**Optimiza la parte a costa del conjunto.** Dos divisiones pueden competir por el
mismo cliente o negarse a compartir un desarrollo, porque cada una responde de sus
propios números y no de los del grupo.

**La sede puede dejar de aportar valor.** Si se limita a agregar cuentas y fijar
objetivos, hace lo que un accionista haría por su cuenta con menos coste. La
pregunta que se le hace a la sede de cualquier grupo diversificado es exactamente
esa: qué aporta que justifique lo que cuesta.

## La tensión permanente

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\small, >=stealth]
\node[draw, minimum width=3.0cm, minimum height=0.9cm, align=center] (s) at (0,1.7)
  {sede central};
\node[draw, minimum width=2.2cm, minimum height=0.9cm, align=center] (d1) at (-3.1,0)
  {división A};
\node[draw, minimum width=2.2cm, minimum height=0.9cm, align=center] (d2) at (0,0)
  {división B};
\node[draw, minimum width=2.2cm, minimum height=0.9cm, align=center] (d3) at (3.1,0)
  {división C};
\draw[thick] (s) -- (d1);
\draw[thick] (s) -- (d2);
\draw[thick] (s) -- (d3);
\node[right=4mm of s, align=left, font=\footnotesize] at (2.1,2.35)
  {objetivos y capital $\downarrow$};
\node[right=4mm of s, align=left, font=\footnotesize] at (2.1,1.1)
  {resultados $\uparrow$};
\end{tikzpicture}
\end{center}
```

Toda la configuración vive de un equilibrio inestable: si la sede controla poco,
las divisiones optimizan lo suyo y el grupo no es más que la suma de sus partes; si
controla mucho, invade la autonomía sobre la que descansa la responsabilidad por
resultados y las divisiones dejan de poder responder de ellos.

Y hay un límite exterior que conviene señalar: llevada al extremo —divisiones que no
comparten nada y una sede puramente financiera— la forma divisional se parece cada
vez más a un mercado de capitales, y entonces la pregunta ya no es cómo diseñarla,
sino por qué esas actividades están dentro de la misma empresa. Vuelve a ser la
pregunta del tema 1 sobre el límite de la organización.

La caracterización de la forma divisional sigue a \cite{mintzberg2009} y
\cite{sanchez2025}; el análisis de la diversificación y del control de divisiones,
\cite{daft2005} y \cite{bueno1996}.
