# Variables estadísticas unidimensionales

Tema 1 del programa. Tablas y representaciones, momentos, y las medidas de posición,
dispersión, forma y concentración.

## Conceptos previos

| Término | Qué es |
| --- | --- |
| Población | conjunto de elementos objeto de estudio |
| Muestra | subconjunto observado |
| Individuo | cada elemento |
| Carácter | la propiedad que se observa |
| Modalidades | los valores que puede tomar |

| Tipo de carácter | Modalidades | Ejemplo |
| --- | --- | --- |
| Cualitativo nominal | sin orden | sector de actividad |
| Cualitativo ordinal | con orden | nivel de satisfacción |
| Cuantitativo discreto | valores aislados | número de empleados |
| Cuantitativo continuo | cualquier valor de un intervalo | facturación |

**El tipo decide qué medidas tienen sentido.** Calcular la media de un carácter nominal
codificado con números es el error más común del tema, y produce cifras que no
significan nada.

## Tablas estadísticas

| Frecuencia | Definición |
| --- | --- |
| Absoluta $n_i$ | número de veces que aparece $x_i$ |
| Relativa $f_i = n_i/N$ | proporción |
| Absoluta acumulada $N_i$ | suma de las absolutas hasta $x_i$ |
| Relativa acumulada $F_i$ | suma de las relativas hasta $x_i$ |

Con datos agrupados en intervalos hacen falta dos elementos más:

$$c_i = \frac{L_{i-1}+L_i}{2} \quad\text{(marca de clase)}, \qquad
a_i = L_i - L_{i-1} \quad\text{(amplitud)}$$

y la **densidad de frecuencia** $h_i = n_i/a_i$, que es lo que se representa en el
histograma.

```{=latex}
\begin{anotacion}
Con intervalos de amplitud desigual, el histograma debe representar la \textbf{densidad}
y no la frecuencia. Si se dibujan alturas iguales a $n_i$, un intervalo ancho parece
tener más casos de los que le corresponden, y la forma de la distribución sale falseada.
Es el gráfico mal hecho más frecuente en informes reales.
\end{anotacion}
```

| Representación | Para qué carácter |
| --- | --- |
| Diagrama de barras | discreto o cualitativo |
| Histograma | continuo agrupado |
| Polígono de frecuencias | continuo, uniendo las marcas de clase |
| Diagrama de sectores | cualitativo, con pocas modalidades |
| Diagrama acumulado | para leer percentiles |

## Momentos

$$a_r = \frac{1}{N}\sum_i x_i^{\,r}n_i \quad\text{(no centrados)}, \qquad
m_r = \frac{1}{N}\sum_i (x_i-\bar{x})^{r}n_i \quad\text{(centrados)}$$

Casos particulares: $a_1 = \bar{x}$ es la media, $m_1 = 0$ siempre y $m_2 = s^2$ es la
varianza.

La relación entre unos y otros es la que ahorra cálculos:

$$m_2 = a_2 - a_1^2, \qquad m_3 = a_3 - 3a_1a_2 + 2a_1^3$$

La primera es la fórmula abreviada de la varianza, y se usa constantemente.

## Medidas de posición

### Medias

| Media | Fórmula | Cuándo |
| --- | --- | --- |
| Aritmética | $\bar{x} = \dfrac{1}{N}\sum x_in_i$ | magnitudes que se suman |
| Geométrica | $G = \sqrt[N]{\prod x_i^{\,n_i}}$ | tasas de variación, índices |
| Armónica | $H = \dfrac{N}{\sum n_i/x_i}$ | velocidades, ratios inversos |

```{=latex}
\begin{proposicion}
Para datos positivos, $H \le G \le \bar{x}$, con igualdad solo si todos los valores
coinciden.
\end{proposicion}
```

**Elegir la media equivocada da un resultado sistemáticamente sesgado.** Para promediar
tasas de crecimiento hay que usar la geométrica: crecer un 50 % y después caer un 50 %
no deja igual, deja un 25 % menos, y solo la geométrica lo refleja.

```{=latex}
\begin{ejemplo}
Una inversión crece un 50\,\% el primer año y cae un 50\,\% el segundo. Los factores son
1,5 y 0,5.

\medskip
La media aritmética de los factores es 1, que sugeriría que no ha pasado nada. La
geométrica es $\sqrt{1{,}5\cdot 0{,}5} = 0{,}866$, es decir una caída media anual del
13,4\,\%, y es la correcta: el capital final es el 75\,\% del inicial, y en efecto
$0{,}866^2 = 0{,}75$.
\end{ejemplo}
```

Propiedades de la media aritmética:

| Propiedad | Expresión |
| --- | --- |
| Desviaciones | $\sum(x_i-\bar{x})n_i = 0$ |
| Linealidad | si $y = a+bx$, entonces $\bar{y} = a+b\bar{x}$ |
| Mínimo cuadrático | $\sum(x_i-k)^2n_i$ es mínimo con $k=\bar{x}$ |
| Sensibilidad | un valor extremo la arrastra |

### Medidas de posición no centrales

| Medida | Definición |
| --- | --- |
| Moda | el valor más frecuente |
| Mediana | deja el 50 % de los datos a cada lado |
| Cuartiles $Q_1,Q_2,Q_3$ | dividen en cuatro partes iguales |
| Deciles, percentiles | en diez y en cien partes |

Para datos agrupados, el percentil $k$ se interpola dentro de su intervalo:

$$P_k = L_{i-1} + \frac{\frac{kN}{100} - N_{i-1}}{n_i}\,a_i$$

**La mediana es robusta y la media no.** Con la renta de un barrio, un solo millonario
mueve la media y deja la mediana intacta, y por eso los informes de renta publican
siempre la mediana.

## Medidas de dispersión

| Medida | Fórmula | Unidades |
| --- | --- | --- |
| Recorrido | $x_{máx}-x_{mín}$ | las de la variable |
| Recorrido intercuartílico | $Q_3-Q_1$ | las de la variable |
| Varianza | $s^2 = \dfrac{1}{N}\sum(x_i-\bar{x})^2n_i$ | al cuadrado |
| Desviación típica | $s = \sqrt{s^2}$ | las de la variable |
| **Coeficiente de variación** | $CV = s/\bar{x}$ | **adimensional** |

La última fila es la que permite comparar dispersiones entre variables distintas. Una
desviación típica de 100 es enorme si la media es 200 y despreciable si la media es
100 000, y el coeficiente de variación lo dice en un número.

```{=latex}
\begin{anotacion}
El coeficiente de variación \textbf{no sirve si la media está cerca de cero}, porque se
dispara, ni con variables que toman valores negativos, porque pierde el signo su
sentido. En esos casos hay que quedarse con la desviación típica y decir respecto de
qué.
\end{anotacion}
```

Propiedades de la varianza:

| Propiedad | Expresión |
| --- | --- |
| Traslación | $\Var(x+a) = \Var(x)$ |
| Escala | $\Var(bx) = b^2\Var(x)$ |
| Fórmula abreviada | $s^2 = \overline{x^2} - \bar{x}^2$ |
| No negatividad | $s^2 \ge 0$, con igualdad si todos los valores son iguales |

## Medidas de forma

| Medida | Fórmula | Interpretación |
| --- | --- | --- |
| Asimetría de Fisher | $g_1 = m_3/s^3$ | $>0$ cola a la derecha, $<0$ a la izquierda |
| Curtosis de Fisher | $g_2 = m_4/s^4 - 3$ | $>0$ más apuntada que la normal |

El $-3$ de la curtosis está para que la distribución normal dé exactamente 0, y así el
signo se lea como comparación con ella.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=4.6cm,
  axis lines=left, xtick=\empty, ytick=\empty,
  xmin=-1, xmax=11, ymin=0, ymax=0.55, samples=120,
  legend style={font=\scriptsize, draw=none, at={(0.99,0.98)}, anchor=north east},
]
\addplot[thick, domain=0:10] {exp(-(x-5)^2/2)/sqrt(2*pi)};
\addlegendentry{simétrica}
\addplot[dashed, domain=0.05:10] {exp(-(ln(x)-1)^2/0.5)/(x*sqrt(2*pi*0.25))};
\addlegendentry{asimétrica a la derecha}
\end{axis}
\end{tikzpicture}
\end{center}
```

La **asimetría a la derecha** es la forma típica de las variables económicas: rentas,
patrimonios, tamaños de empresa. Y es la razón de que en ellas la media supere a la
mediana.

## Medidas de concentración

Miden cómo se reparte el total de una magnitud entre los individuos. En un reparto
perfectamente equitativo, el 20 % de la población acumula el 20 % del total.

| Elemento | Definición |
| --- | --- |
| $p_i$ | porcentaje acumulado de individuos |
| $q_i$ | porcentaje acumulado del total de la magnitud |
| Curva de Lorenz | la poligonal que une los puntos $(p_i,q_i)$ |
| Diagonal | $q=p$: equidistribución perfecta |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=6.8cm, height=6.0cm,
  xlabel={$p$}, ylabel={$q$},
  xmin=0, xmax=100, ymin=0, ymax=100,
  axis lines=left, tick label style={font=\scriptsize}, samples=60,
]
\addplot[dashed, domain=0:100] {x};
\addplot[thick, domain=0:100] {x^2/100};
\node[font=\scriptsize, anchor=north west] at (axis cs:58,26) {Lorenz};
\node[font=\scriptsize, anchor=south east] at (axis cs:62,64) {equidistribución};
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{definicion}[Índice de Gini]
$$IG = \frac{\sum_{i=1}^{k-1}(p_i - q_i)}{\sum_{i=1}^{k-1}p_i}$$
Vale 0 en la equidistribución perfecta y 1 en la concentración total.
\end{definicion}
```

Geométricamente, el Gini es el doble del área entre la diagonal y la curva de Lorenz.
Cuanto más se hunde la curva, mayor es la desigualdad.

La **mediala** es el valor que divide la magnitud total en dos mitades: por debajo de
ella se acumula el 50 % del total. Comparada con la mediana, cuantifica la
concentración: en un reparto equitativo coinciden, y cuanto más se separan, más
desigual es la distribución.

## Ejercicios

```{=latex}
\begin{ejercicio}
Los salarios mensuales de seis empleados son 1200, 1300, 1400, 1500, 1600 y 9000.
Calcular media, mediana y coeficiente de variación, y decir cuál describe mejor.
\end{ejercicio}

\begin{solucion}
La media es $16\,000/6 = 2666{,}7$ y la mediana $(1400+1500)/2 = 1450$. La desviación
típica es 2829,4, así que $CV = 1{,}06$.

\medskip
La mediana describe mucho mejor: cinco de los seis empleados cobran menos de la media, y
el sexto la arrastra él solo. Un coeficiente de variación mayor que 1 es ya la señal de
que la media no representa a nadie.
\end{solucion}

\begin{ejercicio}
Una acción sube un 20\,\% un año y baja un 20\,\% al siguiente. ¿Cuál es la rentabilidad
media anual?
\end{ejercicio}

\begin{solucion}
Los factores son 1,2 y 0,8, cuyo producto es 0,96: se ha perdido un 4\,\%. La media
geométrica es $\sqrt{0{,}96} = 0{,}9798$, es decir una pérdida media anual del
2,02\,\%. La media aritmética de los porcentajes daría 0, que es falso.
\end{solucion}

\begin{ejercicio}
En una distribución, la media es 50 y la desviación típica 10. Se aplica la
transformación $y = 3x - 20$. Hallar la media y la desviación típica de $y$.
\end{ejercicio}

\begin{solucion}
$\bar{y} = 3\cdot 50 - 20 = 130$ por linealidad. Y
$\Var(y) = 3^2\Var(x) = 900$, así que $s_y = 30$: la traslación no afecta a la
dispersión y el factor de escala la multiplica en valor absoluto. El coeficiente de
variación pasa de 0,20 a 0,23, porque la traslación sí cambia la media.
\end{solucion}
```

La estadística descriptiva unidimensional está desarrollada en \cite{hernandez2007},
\cite{castillo2006} y \cite{pliego2004}, con problemas resueltos en \cite{hermoso2000}
y \cite{amor2016}.
