# El crecimiento económico

Tema 8 del programa. Los hechos sobre el crecimiento, el modelo neoclásico, el
crecimiento endógeno y las políticas de crecimiento.

## Por qué importa

A largo plazo la demanda ya no determina la producción, así que las preguntas cambian:
qué hace que un país produzca más por habitante y por qué unos crecen y otros no.

```{=latex}
\begin{anotacion}
La aritmética del crecimiento compuesto explica por qué este tema pesa más que todos los
anteriores juntos. Un país que crece al 2\,\% anual dobla su renta por habitante en 35
años; al 3\,\%, en 23; al 1\,\%, en 70. Diferencias de un punto, imperceptibles en un año,
separan niveles de vida en una generación. La \textbf{regla del 70} lo resume: los años
para doblar son aproximadamente $70/g$.
\end{anotacion}
```

## Los hechos

| Hecho estilizado | Observación |
| --- | --- |
| El crecimiento sostenido es reciente | apenas dos siglos de historia humana |
| Las diferencias entre países son enormes | de 1 a 50 en renta por habitante |
| Hay **convergencia condicional** | los países pobres crecen más deprisa *si* comparten instituciones y tecnología |
| No hay convergencia absoluta | la brecha global no se ha cerrado |
| La productividad total de los factores explica la mayor parte | no basta acumular capital |

La contabilidad del crecimiento descompone el aumento del producto:

$$\frac{\Delta Y}{Y} = \frac{\Delta A}{A} + \alpha\,\frac{\Delta K}{K}
+ (1-\alpha)\,\frac{\Delta L}{L}$$

El término $\Delta A/A$ es el **residuo de Solow**: lo que el crecimiento de los factores
no explica. Que sea grande es el hallazgo empírico que motiva todo el tema.

## El modelo neoclásico de Solow

Con función de producción $Y = F(K, AL)$ de rendimientos constantes a escala, en
términos por trabajador efectivo:

$$y = f(k), \qquad \Delta k = s\,f(k) - (\delta + n + g)\,k$$

| Término | Qué representa |
| --- | --- |
| $s\,f(k)$ | inversión por trabajador efectivo |
| $(\delta+n+g)\,k$ | inversión necesaria para mantener $k$ constante |
| $\delta$ | depreciación |
| $n$ | crecimiento de la población |
| $g$ | progreso técnico |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=9.4cm, height=6.0cm, axis lines=left,
  xlabel={$k$}, ylabel={},
  xmin=0, xmax=10, ymin=0, ymax=5,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=140,
]
\addplot[thick, domain=0:10] {1.4*sqrt(x)};
\addplot[thick, domain=0:10] {0.42*sqrt(x)};
\addplot[thick, domain=0:10] {0.2*x};
\addplot[only marks, mark=*, mark size=1.4pt] coordinates {(4.41,0.882)};
\draw[dashed] (axis cs:4.41,0) -- (axis cs:4.41,0.882);
\node[font=\scriptsize, anchor=west] at (axis cs:8.2,4.3) {$f(k)$};
\node[font=\scriptsize, anchor=west] at (axis cs:8.2,2.1) {$(\delta+n+g)k$};
\node[font=\scriptsize, anchor=west] at (axis cs:8.2,1.4) {$s\,f(k)$};
\node[font=\scriptsize, anchor=north] at (axis cs:4.41,-0.1) {$k^{*}$};
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{proposicion}[Estado estacionario]
Existe un único $k^{*}>0$ con $s\,f(k^{*}) = (\delta+n+g)k^{*}$. En él, el capital y la
producción por trabajador efectivo son constantes, así que la producción por trabajador
crece a la tasa $g$ del progreso técnico y la producción total a $n+g$.
\end{proposicion}
```

**El resultado central del modelo:** a largo plazo, el crecimiento de la renta por
habitante **lo determina únicamente el progreso técnico**. Ni la tasa de ahorro ni la
inversión lo cambian de forma permanente.

| Un aumento permanente de | Efecto sobre el nivel de $y$ | Efecto sobre la tasa de crecimiento |
| --- | --- | --- |
| Tasa de ahorro $s$ | sube | temporal, no permanente |
| Crecimiento demográfico $n$ | baja | ninguno a largo plazo |
| Progreso técnico $g$ | --- | **permanente** |

```{=latex}
\begin{anotacion}
El modelo predice \textbf{convergencia condicional}: países con los mismos parámetros
convergen al mismo estado estacionario, y los que están más lejos crecen más deprisa. Los
datos lo confirman dentro de grupos homogéneos —regiones de un país, países de la OCDE— y
lo desmienten a escala global, lo que sugiere que los parámetros institucionales difieren
de verdad.
\end{anotacion}
```

### La regla de oro

El nivel de capital que maximiza el consumo en el estado estacionario cumple

$$f'(k_{oro}) = \delta + n + g$$

| Si | Situación | Qué conviene |
| --- | --- | --- |
| $k^{*} < k_{oro}$ | ahorro insuficiente | ahorrar más, con coste inicial de consumo |
| $k^{*} > k_{oro}$ | **sobreacumulación** | ahorrar menos: se gana consumo desde el primer día |

El segundo caso se llama ineficiencia dinámica, y las estimaciones sugieren que las
economías desarrolladas están **por debajo** de la regla de oro: acumulan menos capital
del que maximizaría el consumo a largo plazo.

## El crecimiento endógeno

La insatisfacción con Solow es que deja el crecimiento a largo plazo **fuera del modelo**:
$g$ es un dato exógeno. Los modelos de crecimiento endógeno lo explican.

| Modelo | Idea |
| --- | --- |
| Capital humano (Lucas) | la educación acumula un factor que no tiene rendimientos decrecientes |
| $AK$ (Romer) | con externalidades del capital, $f'$ no decrece y hay crecimiento sostenido |
| Investigación y desarrollo | el conocimiento es **no rival**: usarlo no lo agota |
| Aprender haciendo | la productividad crece con la experiencia acumulada |

**La no rivalidad del conocimiento es la clave.** Una máquina la usa una fábrica a la vez;
una idea la usan todas a la vez sin agotarse. Eso rompe los rendimientos decrecientes y
permite crecimiento sostenido sin progreso técnico exógeno.

A cambio, plantea un problema: el conocimiento es difícil de apropiar, así que el mercado
invierte **menos de lo socialmente óptimo** en investigación. De ahí las patentes, la
financiación pública de la ciencia y los incentivos fiscales a la investigación.

## Políticas de crecimiento

| Política | Canal |
| --- | --- |
| Educación y formación | capital humano |
| Investigación y desarrollo | progreso técnico |
| Infraestructuras | productividad del capital privado |
| Instituciones y seguridad jurídica | incentivos a invertir |
| Apertura comercial | acceso a tecnología y a mercados |
| Estabilidad macroeconómica | reduce la incertidumbre |
| Competencia | presiona a innovar |

```{=latex}
\begin{anotacion}
La literatura empírica coincide en que \textbf{las instituciones son el factor más
robusto}: derechos de propiedad, cumplimiento de contratos, control de la corrupción y
estabilidad política explican más de la variación entre países que la tasa de ahorro o la
inversión en capital físico. Y son también lo más difícil de cambiar por decreto, que es
lo que hace el crecimiento un problema abierto.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Un país crece al 3\,\% anual y otro al 1,5\,\%. ¿Cuánto tarda cada uno en doblar su renta
por habitante?
\end{ejercicio}

\begin{solucion}
Por la regla del 70: $70/3 = 23$ años y $70/1{,}5 = 47$ años. En 47 años el primero habrá
doblado dos veces —cuadruplicado— y el segundo una.

\medskip
Partiendo del mismo nivel, al cabo de medio siglo la renta del primero será el doble que
la del segundo. Un punto y medio de diferencia anual, imperceptible cualquier año
concreto, decide el nivel de vida de una generación.
\end{solucion}

\begin{ejercicio}
En el modelo de Solow con $f(k) = \sqrt{k}$, $s = 0{,}3$ y $\delta+n+g = 0{,}1$, hallar el
capital y la producción del estado estacionario.
\end{ejercicio}

\begin{solucion}
$0{,}3\sqrt{k} = 0{,}1k$ da $\sqrt{k} = 3$, es decir $k^{*} = 9$ e $y^{*} = 3$.

\medskip
La regla de oro exige $f'(k) = 0{,}1$, es decir $1/(2\sqrt{k}) = 0{,}1$, de donde
$k_{oro} = 25$. Como $k^{*} = 9 < 25$, este país ahorra \textbf{por debajo} de la regla de oro:
aumentar $s$ elevaría el consumo a largo plazo, a costa de reducirlo durante la
transición.
\end{solucion}

\begin{ejercicio}
Un país duplica su tasa de ahorro. ¿Crecerá el doble de deprisa para siempre?
\end{ejercicio}

\begin{solucion}
No. En el modelo de Solow, un aumento de $s$ eleva el estado estacionario, así que hay un
periodo de crecimiento más rápido \textbf{durante la transición} al nuevo $k^{*}$. Una vez
alcanzado, la tasa de crecimiento de la renta por habitante vuelve a ser $g$.

\medskip
El nivel de renta será permanentemente más alto, y la tasa de crecimiento no. Distinguir
efectos de nivel y de tasa es la lección práctica del tema.
\end{solucion}
```

La teoría del crecimiento está desarrollada en \cite{blanchard2017},
\cite{dornbusch2020} y \cite{mankiw2014}, con problemas resueltos en \cite{sanchez2012}
y \cite{belzunegui2014}.
