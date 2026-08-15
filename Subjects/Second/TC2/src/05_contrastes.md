# Contraste de hipótesis sobre parámetros

Tema 7 del programa. Introducción al contraste, y los contrastes para una muestra, para
dos y para más de dos.

## Planteamiento

```{=latex}
\begin{definicion}
Un contraste enfrenta dos hipótesis complementarias sobre un parámetro:
\begin{itemize}
\item $H_0$, la \emph{hipótesis nula}: la que se somete a prueba y se mantiene salvo que
      los datos la contradigan;
\item $H_1$, la \emph{alternativa}: lo que se sostiene si $H_0$ se rechaza.
\end{itemize}
\end{definicion}
```

| Tipo | $H_0$ | $H_1$ | Región crítica |
| --- | --- | --- | --- |
| Bilateral | $\theta=\theta_0$ | $\theta\ne\theta_0$ | las dos colas |
| Unilateral derecho | $\theta\le\theta_0$ | $\theta>\theta_0$ | cola derecha |
| Unilateral izquierdo | $\theta\ge\theta_0$ | $\theta<\theta_0$ | cola izquierda |

**La igualdad va siempre en $H_0$**, porque es la hipótesis bajo la cual se calcula la
distribución del estadístico. Y la alternativa se fija **antes de mirar los datos**:
elegirla después según lo que se ha observado invalida el contraste.

## Los dos errores

| | $H_0$ cierta | $H_0$ falsa |
| --- | --- | --- |
| **Se rechaza $H_0$** | error de tipo I ($\alpha$) | decisión correcta ($1-\beta$) |
| **No se rechaza** | decisión correcta | error de tipo II ($\beta$) |

| Concepto | Definición |
| --- | --- |
| Nivel de significación $\alpha$ | probabilidad de rechazar $H_0$ siendo cierta |
| Potencia $1-\beta$ | probabilidad de rechazar $H_0$ siendo falsa |

```{=latex}
\begin{anotacion}
Los dos errores \textbf{no se pueden reducir a la vez} con la misma muestra: bajar
$\alpha$ sube $\beta$. La única forma de mejorar los dos es aumentar $n$. Por eso se fija
$\alpha$ de antemano —normalmente 0,05 o 0,01— según cuál de los dos errores sea más
grave en el contexto.
\end{anotacion}
```

La asimetría del planteamiento es deliberada: el contraste **protege $H_0$**. Por eso la
hipótesis nula suele ser «no hay efecto», «el proceso funciona» o «los dos grupos son
iguales», y se necesita evidencia fuerte para abandonarla.

```{=latex}
\begin{anotacion}
\textbf{No rechazar no es aceptar.} Que los datos sean compatibles con $H_0$ puede
deberse a que sea cierta o a que la muestra sea demasiado pequeña para detectar la
diferencia. La conclusión correcta es «no hay evidencia suficiente para rechazar», y
nunca «queda demostrado que $H_0$ es cierta».
\end{anotacion}
```

## Procedimiento

1. Formular $H_0$ y $H_1$.
2. Fijar $\alpha$.
3. Elegir el estadístico de contraste y su distribución bajo $H_0$.
4. Determinar la región crítica, o calcular el $p$-valor.
5. Calcular el estadístico con la muestra.
6. Decidir y **redactar la conclusión en términos del problema**.

### El $p$-valor

```{=latex}
\begin{definicion}
Probabilidad de obtener un resultado tan extremo como el observado, o más, siendo $H_0$
cierta.
\end{definicion}
```

La regla de decisión: se rechaza $H_0$ si $p < \alpha$.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.6cm, height=4.6cm, axis lines=left,
  xmin=-4, xmax=4, ymin=0, ymax=0.45,
  xtick={-1.96,0,1.96}, xticklabels={$-z_{\alpha/2}$,0,$z_{\alpha/2}$},
  ytick=\empty, tick label style={font=\scriptsize}, samples=150,
]
\addplot[thick, domain=-4:4] {exp(-x^2/2)/sqrt(2*pi)};
\addplot[fill=black!18, draw=none, domain=1.96:4] {exp(-x^2/2)/sqrt(2*pi)} \closedcycle;
\addplot[fill=black!18, draw=none, domain=-4:-1.96] {exp(-x^2/2)/sqrt(2*pi)} \closedcycle;
\node[font=\scriptsize, anchor=west] at (axis cs:2.2,0.07) {$\alpha/2$};
\node[font=\scriptsize, anchor=east] at (axis cs:-2.2,0.07) {$\alpha/2$};
\node[font=\scriptsize] at (axis cs:0,0.18) {no se rechaza};
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{anotacion}
El $p$-valor \textbf{no es la probabilidad de que $H_0$ sea cierta}, ni la probabilidad
de haberse equivocado. Es una probabilidad calculada \emph{suponiendo} $H_0$ cierta. Y un
$p$ pequeño indica que los datos son raros bajo $H_0$, no que el efecto sea grande: con
muestras enormes, diferencias sin ninguna importancia práctica salen significativas.
Significación estadística y relevancia no son lo mismo.
\end{anotacion}
```

## Contrastes para una muestra

| Parámetro | Condiciones | Estadístico | Distribución |
| --- | --- | --- | --- |
| $\mu$ | $\sigma$ conocida | $\dfrac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}$ | $N(0,1)$ |
| $\mu$ | $\sigma$ desconocida | $\dfrac{\bar{x}-\mu_0}{\hat{s}/\sqrt{n}}$ | $t_{n-1}$ |
| $\sigma^2$ | población normal | $\dfrac{(n-1)\hat{s}^2}{\sigma_0^2}$ | $\chi^2_{n-1}$ |
| $p$ | $n$ grande | $\dfrac{\hat{p}-p_0}{\sqrt{p_0(1-p_0)/n}}$ | $N(0,1)$ |

En el contraste de proporciones, el error típico se calcula con $p_0$ y no con
$\hat{p}$, **porque bajo $H_0$ el valor del parámetro es $p_0$**. Es la diferencia con el
intervalo de confianza, donde $p_0$ no existe.

```{=latex}
\begin{ejemplo}
Un fabricante afirma que sus piezas pesan 500 g. Una muestra de 36 da media 495 g y
cuasidesviación 12 g. ¿Hay evidencia contra la afirmación al 5\,\%?

\medskip
$H_0: \mu=500$ frente a $H_1: \mu\ne500$. El estadístico es
$$t = \frac{495-500}{12/6} = -2{,}5$$
con 35 grados de libertad. El valor crítico es $t_{35;\,0{,}025} = 2{,}030$, y
$\lvert -2{,}5\rvert > 2{,}030$: \textbf{se rechaza}. El $p$-valor es 0,017.

\medskip
Conclusión en términos del problema: los datos aportan evidencia de que el peso medio
difiere de 500 g, y apuntan a que es menor.
\end{ejemplo}
```

## Contrastes para dos muestras

| Se compara | Condiciones | Distribución |
| --- | --- | --- |
| $\mu_1$ y $\mu_2$ | varianzas conocidas | $N(0,1)$ |
| $\mu_1$ y $\mu_2$ | desconocidas iguales | $t_{n_1+n_2-2}$ |
| $\mu_1$ y $\mu_2$ | desconocidas distintas | $t_\nu$ de Welch |
| $\mu_1$ y $\mu_2$ | **datos emparejados** | $t_{n-1}$ sobre las diferencias |
| $\sigma_1^2$ y $\sigma_2^2$ | poblaciones normales | $F_{n_1-1,n_2-1}$ |
| $p_1$ y $p_2$ | muestras grandes | $N(0,1)$ con proporción combinada |

En el contraste de proporciones, bajo $H_0: p_1=p_2$ se usa la **proporción combinada**:

$$\hat{p} = \frac{x_1+x_2}{n_1+n_2}, \qquad
z = \frac{\hat{p}_1-\hat{p}_2}
{\sqrt{\hat{p}(1-\hat{p})\left(\frac{1}{n_1}+\frac{1}{n_2}\right)}}$$

**Los datos emparejados merecen atención.** Cuando cada observación de una muestra tiene
su pareja en la otra —el mismo sujeto antes y después—, se trabaja con las diferencias
individuales y el problema se reduce a una sola muestra. Tratarlos como independientes
desperdicia la información del emparejamiento y suele impedir detectar diferencias
reales.

## Contrastes para más de dos muestras

Comparar $k$ medias no se puede hacer con contrastes dos a dos: con $k=5$ hay 10
comparaciones, y **la probabilidad de al menos un falso positivo se dispara**. Con
$\alpha=0{,}05$ en cada una, la global es $1-0{,}95^{10} = 0{,}40$.

La solución es el **análisis de la varianza**, que contrasta de una vez

$$H_0: \mu_1=\mu_2=\dots=\mu_k$$

descomponiendo la variabilidad total:

$$SC_{total} = SC_{entre} + SC_{dentro}$$

$$F = \frac{SC_{entre}/(k-1)}{SC_{dentro}/(N-k)} \sim F_{k-1,\ N-k}$$

| Fuente | Suma de cuadrados | Grados de libertad |
| --- | --- | --- |
| Entre grupos | $\sum n_i(\bar{x}_i-\bar{x})^2$ | $k-1$ |
| Dentro de los grupos | $\sum\sum(x_{ij}-\bar{x}_i)^2$ | $N-k$ |
| Total | $\sum\sum(x_{ij}-\bar{x})^2$ | $N-1$ |

La idea: si las medias fuesen iguales, la variabilidad entre grupos sería del mismo
orden que la de dentro, y el cociente rondaría 1. Un $F$ grande indica que los grupos
difieren más de lo que la variabilidad interna explica.

| Hipótesis del ANOVA | Qué exige |
| --- | --- |
| Normalidad | dentro de cada grupo |
| Homocedasticidad | misma varianza en todos |
| Independencia | entre y dentro de los grupos |

**Rechazar $H_0$ solo dice que no todas las medias son iguales**, no cuáles difieren.
Para eso hacen falta comparaciones múltiples posteriores, que ajustan el nivel para
controlar el error global.

## Ejercicios

```{=latex}
\begin{ejercicio}
Un proceso produce históricamente un 4\,\% de defectuosas. En una muestra de 500 piezas
aparecen 28. ¿Ha empeorado el proceso, al 5\,\%?
\end{ejercicio}

\begin{solucion}
$H_0: p\le0{,}04$ frente a $H_1: p>0{,}04$, unilateral derecho.
$\hat{p} = 28/500 = 0{,}056$ y el error típico bajo $H_0$ es
$\sqrt{0{,}04\cdot0{,}96/500} = 0{,}00876$.
$$z = \frac{0{,}056-0{,}04}{0{,}00876} = 1{,}83$$
El valor crítico es 1,645, y $1{,}83 > 1{,}645$: se rechaza. El $p$-valor es 0,034. Hay
evidencia de empeoramiento al 5\,\%, aunque no al 1\,\%.
\end{solucion}

\begin{ejercicio}
Un contraste da un $p$-valor de 0,08. ¿Qué se concluye a los niveles del 5\,\% y del
10\,\%?
\end{ejercicio}

\begin{solucion}
Al 5\,\% no se rechaza $H_0$, porque $0{,}08 > 0{,}05$; al 10\,\% sí, porque
$0{,}08 < 0{,}10$. Eso muestra por qué $\alpha$ debe fijarse \textbf{antes} de ver los
datos: elegirlo después según convenga al resultado convierte el contraste en un
ejercicio de autoengaño. Lo correcto es informar del $p$-valor y dejar que el lector
juzgue.
\end{solucion}

\begin{ejercicio}
Tres máquinas producen piezas con medias muestrales 20, 22 y 21, sobre 10 piezas cada
una. El ANOVA da $F=4{,}2$ con 2 y 27 grados de libertad, y el valor crítico al 5\,\% es
3,35. ¿Qué se concluye?
\end{ejercicio}

\begin{solucion}
$4{,}2 > 3{,}35$, así que se rechaza $H_0$: hay evidencia de que **no todas** las medias
son iguales. El contraste no dice cuáles difieren; para eso hacen falta comparaciones
múltiples, que ajustan el nivel para que la probabilidad global de falso positivo siga
siendo el 5\,\%.
\end{solucion}
```

Los contrastes de hipótesis están desarrollados en \cite{herrerias2012} y
\cite{lind2012}, con problemas resueltos en \cite{herrerias2012ej}, \cite{casas2006} y
\cite{espejo2016}.
