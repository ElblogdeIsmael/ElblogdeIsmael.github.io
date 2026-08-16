# Tests no paramétricos

Tema 8 del programa. Los contrastes que no suponen una forma concreta para la
distribución de la población.

## Por qué hacen falta

Todos los contrastes del tema anterior suponen normalidad, o un tamaño de muestra
suficiente para invocar el teorema central del límite. Cuando ninguna de las dos cosas se
cumple, sus conclusiones no son fiables.

| Situación | Problema |
| --- | --- |
| Muestra pequeña y población no normal | el teorema central del límite no se aplica |
| Datos ordinales | la media no tiene sentido |
| Valores atípicos extremos | la media y la varianza se distorsionan |
| Distribución muy asimétrica | los intervalos simétricos son inadecuados |

| | Paramétricos | No paramétricos |
| --- | --- | --- |
| Suponen | forma de la distribución | poco o nada |
| Usan | los valores | rangos, signos o frecuencias |
| Potencia | mayor, si los supuestos se cumplen | menor, pero robusta |
| Si los supuestos fallan | conclusiones no válidas | siguen valiendo |

**El precio de la generalidad es la potencia**: con datos realmente normales, un test no
paramétrico necesita más muestra para detectar el mismo efecto. La regla práctica es
usar el paramétrico cuando sus supuestos se sostienen y el no paramétrico cuando no.

## Bondad de ajuste

Contrastan si una muestra procede de una distribución dada.

### Chi-cuadrado de Pearson

$$\chi^2 = \sum_{i=1}^{k}\frac{(O_i-E_i)^2}{E_i} \sim \chi^2_{k-1-r}$$

con $O_i$ las frecuencias observadas, $E_i$ las esperadas bajo $H_0$ y $r$ el número de
parámetros estimados a partir de los datos.

| Requisito | Detalle |
| --- | --- |
| Frecuencias esperadas | $E_i \ge 5$ en todas las clases |
| Si alguna es menor | se agrupan clases contiguas |
| Grados de libertad | se pierde uno por cada parámetro estimado |
| Cola | siempre la derecha |

```{=latex}
\begin{ejemplo}
Se lanza un dado 120 veces y salen las frecuencias 15, 25, 18, 22, 20, 20. ¿Es
equilibrado?

\medskip
Bajo $H_0$, $E_i = 20$ para las seis caras.
$$\chi^2 = \frac{25+25+4+4+0+0}{20} = \frac{58}{20} = 2{,}9$$
con 5 grados de libertad. El valor crítico al 5\,\% es 11,07, muy por encima: no se
rechaza. Los datos son compatibles con un dado equilibrado.
\end{ejemplo}
```

### Kolmogorov-Smirnov

Compara la función de distribución empírica con la teórica:

$$D_n = \sup_x \lvert F_n(x)-F_0(x)\rvert$$

| Ventaja frente a la $\chi^2$ | Limitación |
| --- | --- |
| No exige agrupar en clases | solo para distribuciones continuas |
| Más potente con muestras pequeñas | los parámetros deben conocerse, no estimarse |
| Usa la información de todos los datos | menos flexible |

Cuando los parámetros se estiman de la muestra, los valores críticos cambian, y para el
caso normal se usa la corrección de Lilliefors.

## Contrastes de posición

### Test de los signos

El más elemental. Para contrastar que la mediana vale $m_0$, se cuentan cuántas
observaciones la superan y cuántas no, y ese recuento es binomial de parámetro
$p=0{,}5$ bajo $H_0$.

Usa solo el signo de las diferencias, así que **descarta la magnitud** y es poco potente.
A cambio, no supone absolutamente nada sobre la distribución.

### Test de Wilcoxon de los rangos con signo

Para una muestra o para datos emparejados. Ordena las diferencias por valor absoluto, les
asigna rangos y suma los rangos de las positivas.

Aprovecha la magnitud además del signo, así que **es más potente que el de los signos**.
Su único supuesto es que la distribución de las diferencias sea simétrica.

| Test | Alternativa paramétrica |
| --- | --- |
| Signos | $t$ para una muestra |
| Wilcoxon de rangos con signo | $t$ para una muestra o emparejada |
| Mann-Whitney | $t$ para dos muestras independientes |
| Kruskal-Wallis | ANOVA de un factor |

### Mann-Whitney

Para dos muestras independientes. Se juntan las observaciones, se ordenan, se asignan
rangos y se suman los de cada grupo. Si las dos poblaciones fuesen iguales, las sumas
serían proporcionales a los tamaños.

Contrasta si una distribución está desplazada respecto de la otra, y con muestras
grandes su estadístico se aproxima por la normal.

### Kruskal-Wallis

La extensión a $k$ muestras, y el equivalente no paramétrico del ANOVA:

$$H = \frac{12}{N(N+1)}\sum_{i=1}^{k}\frac{R_i^2}{n_i} - 3(N+1)
\ \sim\ \chi^2_{k-1}$$

con $R_i$ la suma de rangos del grupo $i$.

```{=latex}
\begin{anotacion}
Al asignar rangos, los \textbf{empates} reciben el rango medio de las posiciones que
ocupan, y el estadístico lleva un factor de corrección. Con muchos empates —típico de
datos ordinales con pocas categorías— la corrección deja de ser menor y hay que
aplicarla.
\end{anotacion}
```

## Independencia y homogeneidad

### Chi-cuadrado de independencia

Sobre una tabla de contingencia $r\times c$:

$$E_{ij} = \frac{n_{i\cdot}\,n_{\cdot j}}{N}, \qquad
\chi^2 = \sum_{i,j}\frac{(O_{ij}-E_{ij})^2}{E_{ij}} \sim \chi^2_{(r-1)(c-1)}$$

Es el contraste que formaliza la independencia estadística del curso anterior: las
frecuencias esperadas son justamente el producto de las marginales dividido por el total.

**El mismo estadístico sirve para dos preguntas distintas:**

| Contraste | $H_0$ | Diseño |
| --- | --- | --- |
| Independencia | los dos caracteres son independientes | una muestra, dos variables |
| Homogeneidad | las poblaciones tienen la misma distribución | varias muestras, una variable |

La aritmética es idéntica y la interpretación no, así que conviene decir cuál de los dos
se está haciendo.

```{=latex}
\begin{ejemplo}
Una tabla $2\times2$ con observados 30, 20, 20 y 30, y $N=100$. Las marginales son 50 en
las cuatro, así que todas las esperadas valen $50\cdot50/100 = 25$.
$$\chi^2 = 4\cdot\frac{25}{25} = 4$$
con $(2-1)(2-1) = 1$ grado de libertad. El crítico al 5\,\% es 3,84, y $4 > 3{,}84$: se
rechaza la independencia, por muy poco. El $p$-valor es 0,046.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
Rechazar la independencia \textbf{no mide la intensidad} de la asociación. Con muestras
grandes, asociaciones ínfimas salen significativas. Para cuantificar hace falta una
medida de asociación como el coeficiente de contingencia o la $V$ de Cramér, y
conviene informar de las dos cosas.
\end{anotacion}
```

## Aleatoriedad

El **test de rachas** contrasta si una secuencia de observaciones es aleatoria. Una racha
es un bloque máximo de valores consecutivos del mismo tipo.

| Número de rachas | Indica |
| --- | --- |
| Demasiado pocas | agrupamiento, tendencia o persistencia |
| Demasiadas | alternancia sistemática |
| Intermedio | compatible con la aleatoriedad |

Es un contraste bilateral: **los dos extremos delatan falta de aleatoriedad**. Se usa
sobre los residuos de una regresión para comprobar que no queda estructura sin modelar.

## Cómo se elige

| Objetivo | Paramétrico | No paramétrico |
| --- | --- | --- |
| Una media o mediana | $t$ | signos, Wilcoxon |
| Dos muestras independientes | $t$ | Mann-Whitney |
| Dos muestras emparejadas | $t$ emparejada | Wilcoxon |
| Más de dos muestras | ANOVA | Kruskal-Wallis |
| Ajuste a una distribución | --- | $\chi^2$, Kolmogorov-Smirnov |
| Asociación entre dos caracteres | correlación de Pearson | $\chi^2$, correlación de Spearman |
| Aleatoriedad | --- | rachas |

## Ejercicios

```{=latex}
\begin{ejercicio}
Se observan 40 llegadas por hora durante 5 horas: 8, 12, 6, 9 y 5. Contrastar al 5\,\%
que las llegadas se reparten uniformemente.
\end{ejercicio}

\begin{solucion}
Bajo $H_0$, $E_i = 40/5 = 8$.
$$\chi^2 = \frac{0+16+4+1+9}{8} = \frac{30}{8} = 3{,}75$$
con 4 grados de libertad. El crítico al 5\,\% es 9,49, y $3{,}75 < 9{,}49$: no se
rechaza. Se cumple además el requisito de que todas las esperadas superen 5.
\end{solucion}

\begin{ejercicio}
¿Por qué no se usa siempre un test no paramétrico, si exige menos supuestos?
\end{ejercicio}

\begin{solucion}
Porque pierde potencia. Al trabajar con rangos en vez de valores descarta información, y
necesita más muestra para detectar el mismo efecto. Con datos realmente normales, la
eficiencia de Mann-Whitney frente a la $t$ es de aproximadamente el 95\,\%, así que la
pérdida es modesta; pero con otras alternativas es mayor. La regla es usar el
paramétrico cuando sus supuestos se sostienen.
\end{solucion}

\begin{ejercicio}
En un contraste $\chi^2$ de bondad de ajuste a una Poisson se estima $\lambda$ con la
propia muestra, y quedan 6 clases. ¿Cuántos grados de libertad tiene el estadístico?
\end{ejercicio}

\begin{solucion}
$k - 1 - r = 6 - 1 - 1 = 4$. Se pierde uno por la restricción de que las frecuencias
sumen $n$ y otro por haber estimado $\lambda$. Olvidar el segundo descuento da un valor
crítico mayor del que corresponde y hace el contraste demasiado conservador.
\end{solucion}
```

Los contrastes no paramétricos están desarrollados en \cite{canavos1987} y
\cite{lind2012}, con problemas resueltos en \cite{herrerias2012ej} y \cite{espejo2016}.
