# Principios básicos de la ciencia económica

Capítulo 1 del programa. Definición y objeto, la economía como ciencia de la elección, la
organización de la actividad económica, y la investigación económica con sus instrumentos
de análisis.

## Definición y objeto

```{=latex}
\begin{definicion}[Economía]
Ciencia que estudia cómo las sociedades administran recursos escasos para producir bienes
y servicios y distribuirlos entre sus miembros.
\end{definicion}
```

Las dos palabras que hacen falta:

| Concepto | Qué significa |
| --- | --- |
| **Escasez** | los recursos son limitados frente a necesidades ilimitadas |
| **Elección** | usar un recurso en algo obliga a renunciar a otra cosa |

```{=latex}
\begin{definicion}[Coste de oportunidad]
Valor de la mejor alternativa a la que se renuncia al tomar una decisión.
\end{definicion}
```

**El coste de oportunidad es el concepto central de toda la asignatura**, y no coincide
con el desembolso monetario. Estudiar un grado tiene un coste de matrícula y, sobre todo,
el salario que no se percibe durante esos años.

| División | Qué estudia |
| --- | --- |
| **Microeconomía** | el comportamiento de consumidores, empresas y mercados concretos |
| **Macroeconomía** | los agregados: producción total, empleo, precios |
| **Economía positiva** | cómo son las cosas: proposiciones verificables |
| **Economía normativa** | cómo deberían ser: incorpora juicios de valor |

```{=latex}
\begin{anotacion}
La distinción entre positivo y normativo no elimina los juicios de valor, solo obliga a
explicitarlos. «Subir el salario mínimo reduce el empleo juvenil» es positiva y se
contrasta con datos; «hay que subir el salario mínimo» es normativa y depende de qué se
valore. Confundirlas es la forma más común de disfrazar una preferencia de conclusión
técnica.
\end{anotacion}
```

## La frontera de posibilidades de producción

Representa las combinaciones máximas de dos bienes que una economía puede producir con sus
recursos y su tecnología.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.6cm, height=6.0cm, axis lines=left,
  xlabel={bien A}, ylabel={bien B},
  xmin=0, xmax=11, ymin=0, ymax=11,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=120,
]
\addplot[thick, domain=0:10] {sqrt(100-x^2)};
\addplot[only marks, mark=*, mark size=1.4pt] coordinates {(4,9.17) (3,4) (9,7)};
\node[font=\scriptsize, anchor=south west] at (axis cs:4.1,9.2) {eficiente};
\node[font=\scriptsize, anchor=west] at (axis cs:3.2,4) {ineficiente};
\node[font=\scriptsize, anchor=west] at (axis cs:9.1,7) {inalcanzable};
\end{axis}
\end{tikzpicture}
\end{center}
```

| Punto | Significado |
| --- | --- |
| Sobre la curva | eficiente: no se puede producir más de un bien sin renunciar a otro |
| Dentro | ineficiente: hay recursos ociosos o mal empleados |
| Fuera | inalcanzable con los recursos actuales |

**La pendiente de la frontera es el coste de oportunidad**, y que sea cóncava refleja que
los recursos no son igual de aptos para todo: los primeros que se trasladan de un bien a
otro son los más adecuados, y los siguientes cada vez menos.

Un desplazamiento hacia fuera de la frontera es **crecimiento económico**, y lo producen
más recursos, mejor tecnología o mejores instituciones.

## Los tres problemas económicos

Toda sociedad debe resolver:

| Pregunta | En qué consiste |
| --- | --- |
| **Qué** producir | la composición de la producción |
| **Cómo** producirlo | qué técnica y qué combinación de factores |
| **Para quién** | cómo se reparte lo producido |

| Sistema | Quién decide | Mecanismo |
| --- | --- | --- |
| Economía de mercado | los agentes privados | precios y beneficio |
| Economía planificada | una autoridad central | plan |
| **Economía mixta** | ambos | mercado con regulación y sector público |

Ninguna economía real es de mercado puro ni planificada pura. **Todas son mixtas**, y lo
que las diferencia es el peso relativo de cada mecanismo.

### El flujo circular de la renta

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth, font=\scriptsize,
  c/.style={draw, minimum width=26mm, minimum height=10mm, align=center}
]
\node[c] (h) at (0,0)    {Hogares};
\node[c] (e) at (6.4,0)  {Empresas};
\draw[->] (h) to[bend left=32] node[above] {factores de producción} (e);
\draw[->] (e) to[bend left=32] node[below] {rentas: salarios, rentas, beneficios} (h);
\draw[->] (e) to[bend left=75] node[above=6mm] {bienes y servicios} (h);
\draw[->] (h) to[bend left=75] node[below=6mm] {gasto en consumo} (e);
\end{tikzpicture}
\end{center}
```

El esquema muestra que **la renta de unos es el gasto de otros**, y que producción, renta
y gasto son tres formas de medir lo mismo. Es la base de la contabilidad nacional.

## Los instrumentos de análisis

| Instrumento | Para qué |
| --- | --- |
| Modelos | simplificar la realidad para aislar lo relevante |
| Supuestos | acotar el ámbito de validez |
| Datos y contraste empírico | verificar las predicciones |
| Gráficos | representar relaciones |
| Matemáticas | precisar y deducir |

```{=latex}
\begin{anotacion}
Todo modelo es falso por construcción: si no simplificara, no serviría. La pregunta no es
si un modelo es realista sino \textbf{si sus simplificaciones son inocuas para la
pregunta que responde}. Un mapa a escala 1:1 no ayuda a nadie.
\end{anotacion}
```

### Errores de razonamiento frecuentes

| Falacia | En qué consiste |
| --- | --- |
| **Post hoc** | confundir sucesión temporal con causalidad |
| **De composición** | suponer que lo cierto para uno lo es para el conjunto |
| **Ceteris paribus** olvidado | atribuir a una causa lo que produjeron varias |
| Correlación por causalidad | dos variables se mueven juntas por una tercera |

La falacia de composición aparece constantemente en macroeconomía: que a una familia le
convenga ahorrar más no implica que a todas a la vez les convenga, y ese es el contenido
de la paradoja del ahorro.

## Los diez principios

Un resumen de lo que el resto del programa desarrolla:

| Sobre las decisiones individuales |
| --- |
| Los individuos se enfrentan a disyuntivas |
| El coste de algo es aquello a lo que se renuncia |
| Las personas racionales piensan en términos marginales |
| Los individuos responden a incentivos |

| Sobre la interacción |
| --- |
| El comercio puede mejorar el bienestar de todos |
| Los mercados suelen ser un buen mecanismo de asignación |
| El Estado puede mejorar a veces el resultado del mercado |

| Sobre la economía en conjunto |
| --- |
| El nivel de vida depende de la producción por habitante |
| Los precios suben cuando se emite demasiado dinero |
| A corto plazo hay disyuntiva entre inflación y desempleo |

**El tercero merece un comentario**: pensar en el margen significa comparar el beneficio
adicional con el coste adicional de una unidad más, no los totales. Es lo que explica que
una compañía aérea acepte vender el último asiento por debajo del coste medio del vuelo.

## Ejercicios

```{=latex}
\begin{ejercicio}
Una persona deja un empleo de 25\,000 euros anuales para estudiar un máster que cuesta
12\,000. ¿Cuál es el coste de estudiar durante ese año?
\end{ejercicio}

\begin{solucion}
$25\,000 + 12\,000 = 37\,000$ euros: el desembolso explícito más el salario al que
renuncia. Lo que no cuenta es el gasto en alojamiento y comida, porque se incurriría de
todos modos.

\medskip
Ese cálculo explica por qué estudiar un máster es relativamente más caro para quien tiene
un buen salario, aunque la matrícula sea la misma para todos.
\end{solucion}

\begin{ejercicio}
Una economía produce alimentos y máquinas. Al pasar de 10 a 11 unidades de alimentos
renuncia a 2 máquinas; al pasar de 11 a 12, renuncia a 4. ¿Qué forma tiene su frontera y
por qué?
\end{ejercicio}

\begin{solucion}
Cóncava hacia el origen, porque el coste de oportunidad es creciente: cada unidad
adicional de alimentos exige sacrificar más máquinas que la anterior.

\medskip
La causa es que los recursos no son perfectamente adaptables. Al ampliar la producción de
alimentos se van empleando factores cada vez menos aptos para ello y más productivos en
el otro uso.
\end{solucion}

\begin{ejercicio}
Clasificar como positiva o normativa: «la inflación fue del 3\,\% el año pasado», «el
paro es demasiado alto» y «bajar los tipos de interés estimula la inversión».
\end{ejercicio}

\begin{solucion}
La primera es positiva y verificable con datos. La segunda es normativa: «demasiado alto»
exige un criterio de qué nivel es aceptable. La tercera es positiva: afirma una relación
causal contrastable, aunque contrastarla sea difícil.
\end{solucion}
```

Los principios de la economía están desarrollados en \cite{krugman2022},
\cite{mankiw2017} y \cite{samuelson2010}, con un enfoque aplicado en
\cite{acemoglu2017}.
