# Introducción: historia económica, desarrollo y progreso

Tema 1 del programa. Objeto y método de la historia económica, las magnitudes con las que
se mide el desarrollo, la distinción entre crecimiento, desarrollo y progreso, y las
fuentes.

## Objeto y método

```{=latex}
\begin{definicion}
La historia económica estudia cómo las sociedades del pasado organizaron la producción, la
distribución y el consumo, y por qué unas alcanzaron niveles de renta muy superiores a los
de otras.
\end{definicion}
```

| Disciplina | Aporta |
| --- | --- |
| **Historia** | el contexto, las fuentes y la crítica documental |
| **Economía** | los conceptos y los modelos que ordenan los datos |
| **Estadística** | la cuantificación y la comparación en el tiempo |

**La historia económica no es economía con ejemplos antiguos ni historia con cifras.** Su
pregunta propia es por qué el crecimiento sostenido apareció tarde, en un sitio concreto, y
por qué se difundió de forma tan desigual.

## Crecimiento, desarrollo y progreso

| Concepto | Qué mide | Indicador habitual |
| --- | --- | --- |
| **Crecimiento** | aumento de la producción | PIB, PIB por habitante |
| **Desarrollo** | cambio estructural y mejora de las condiciones de vida | esperanza de vida, alfabetización, IDH |
| **Progreso** | juicio de valor sobre la dirección del cambio | no es una magnitud |

```{=latex}
\begin{anotacion}
Los tres términos se usan como sinónimos y no lo son. Una economía puede crecer sin
desarrollarse —el enclave minero que exporta materia prima sin transformar la sociedad que
lo rodea— y puede mejorar el bienestar sin crecer mucho, si reparte mejor o si invierte en
salud y educación. \textbf{Y el progreso es una valoración}: incorporar la degradación
ambiental o la desigualdad cambia el signo del juicio sin cambiar un solo dato de
producción.
\end{anotacion}
```

## Cómo se mide

| Magnitud | Definición | Límite |
| --- | --- | --- |
| **PIB** | valor de los bienes y servicios finales producidos en un año | ignora el trabajo no remunerado y el deterioro ambiental |
| **PIB por habitante** | PIB dividido por la población | no dice nada del reparto |
| Paridad de poder adquisitivo | corrige por los precios relativos de cada país | estimación con márgenes amplios |
| **Esperanza de vida y alfabetización** | resultados sociales | responden despacio a los cambios |
| **IDH** | índice compuesto de renta, salud y educación | la ponderación es una convención |
| Índice de Gini | desigualdad de la renta | resume una distribución en un número |

$$\text{Tasa de crecimiento anual acumulativa} =
\Big(\frac{Y_T}{Y_0}\Big)^{1/T} - 1$$

```{=latex}
\begin{proposicion}
Una diferencia pequeña en la tasa acumulativa produce divergencias enormes en el largo
plazo. Al 1\,\% anual, la renta se multiplica por 2,7 en un siglo; al 2\,\%, por 7,2; al
3\,\%, por 19,2. \textbf{Esa aritmética es la que explica la Gran Divergencia}, y no ningún
salto repentino.
\end{proposicion}
```

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10cm, height=5.6cm, axis lines=left,
  xlabel={años}, ylabel={renta relativa}, xmin=0, xmax=100, ymin=0, ymax=20,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=140,
  legend style={font=\scriptsize, draw=none, at={(0.02,0.98)}, anchor=north west},
]
\addplot[thick, domain=0:100] {1.03^x};
\addlegendentry{3\,\% anual}
\addplot[dashed, domain=0:100] {1.02^x};
\addlegendentry{2\,\% anual}
\addplot[dotted, thick, domain=0:100] {1.01^x};
\addlegendentry{1\,\% anual}
\end{axis}
\end{tikzpicture}
\end{center}
```

## Las grandes preguntas de la asignatura

| Pregunta | Tema donde se trata |
| --- | --- |
| ¿Por qué el crecimiento moderno tarda tanto en aparecer? | 2 |
| ¿Por qué empieza en Gran Bretaña y no en otro sitio? | 3 |
| ¿Por qué se difunde de forma desigual? | 3 y 7 |
| ¿Por qué el sistema se rompe en el periodo de entreguerras? | 4 |
| ¿Por qué el crecimiento de posguerra fue excepcional y por qué terminó? | 5 y 6 |
| ¿Por qué España llega tarde y luego converge? | 8 |

## Las fuentes

| Tipo | Ejemplos | Problema crítico |
| --- | --- | --- |
| **Documentales** | contratos, contabilidades, informes, prensa | representatividad de lo conservado |
| **Estadísticas** | censos, series de precios, comercio exterior, producción | cambios de definición y de cobertura |
| **Reconstrucciones** | series históricas de PIB estimadas hacia atrás | son estimaciones, con márgenes de error |
| Cartografía y gráficos | mapas de red ferroviaria, de comercio | escala y proyección condicionan la lectura |

```{=latex}
\begin{anotacion}
Las series históricas de PIB anteriores al siglo XX \textbf{no son observaciones, son
reconstrucciones}: se estiman a partir de salarios, precios, población y producción física,
con supuestos explícitos. Usarlas es correcto; presentarlas con tres decimales y sin
mencionar su origen, no. La regla de trabajo es citar siempre la fuente y su método.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Un país A tiene una renta por habitante de 2000 unidades y crece al 1\,\% anual; un país B
parte de 1000 y crece al 3\,\%. ¿Cuándo alcanza B a A?
\end{ejercicio}

\begin{solucion}
Se busca $t$ tal que $1000\cdot1{,}03^{t} = 2000\cdot1{,}01^{t}$, es decir
$$\Big(\frac{1{,}03}{1{,}01}\Big)^{t} = 2 \ \Longrightarrow\
t = \frac{\ln 2}{\ln(1{,}0198)} = 35{,}3 \text{ años}$$

\medskip
Poco más de una generación. A los cien años, B tendría 19\,200 unidades y A solo 5400. La
convergencia rápida de los países que crecen a tasas altas y sostenidas —Japón, Corea del
Sur, China— es exactamente este cálculo, y es la razón de que dos puntos de tasa importen
más que el nivel de partida.
\end{solucion}

\begin{ejercicio}
Dos países tienen el mismo PIB por habitante. En el primero la esperanza de vida es de 78
años y el Gini de 0,28; en el segundo, 62 años y 0,55. Comentar qué añade cada indicador.
\end{ejercicio}

\begin{solucion}
El PIB por habitante es una media y no dice cómo se reparte ni en qué se traduce. El
segundo país produce lo mismo con una distribución mucho más desigual, y su esperanza de
vida sugiere que buena parte de la población no accede a los servicios básicos.

\medskip
El caso ilustra la distinción del tema: los dos han crecido igual, y solo uno se ha
desarrollado. Y muestra por qué los índices compuestos como el IDH aparecieron: para que
el debate no se cerrara con una sola cifra de producción.
\end{solucion}

\begin{ejercicio}
Un trabajo utiliza una serie de PIB de 1700 con variaciones anuales del 0,3\,\% y concluye
que hubo una recesión en un año concreto. Valorar la conclusión.
\end{ejercicio}

\begin{solucion}
No se sostiene. Una serie reconstruida para 1700 tiene un margen de error muy superior al
0,3\,\%, porque se estima a partir de precios, salarios y producción física con supuestos de
interpolación. La variación observada está dentro del ruido del método.

\medskip
Lo que esas series sí permiten es comparar niveles y tendencias de décadas o siglos, que es
para lo que fueron construidas. \textbf{La precisión de una fuente marca qué preguntas se le
pueden hacer}, y esa es la primera regla del trabajo con datos históricos.
\end{solucion}
```

Los conceptos y el método de la historia económica están desarrollados en
\cite{caruana2015} y \cite{allen2013}, con una síntesis reciente del problema del
crecimiento en \cite{koyama2022}.
