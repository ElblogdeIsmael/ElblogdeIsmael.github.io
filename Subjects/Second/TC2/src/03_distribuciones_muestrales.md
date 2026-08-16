# Distribuciones de los estadísticos muestrales

Temas 3 y 4 del programa. Las distribuciones en el muestreo de la media, la varianza y
la proporción en poblaciones normales, y las de la diferencia de medias, el cociente de
varianzas y la diferencia de proporciones para dos poblaciones.

Todo lo que sigue es la maquinaria que los temas 5 y 6 usan sin volver a deducirla:
**cada intervalo de confianza y cada contraste sale de una de estas distribuciones**.

## Una población normal

### Media con varianza conocida

$$\bar{X}\sim N\!\left(\mu,\ \frac{\sigma}{\sqrt{n}}\right)
\qquad\Longrightarrow\qquad
Z = \frac{\bar{X}-\mu}{\sigma/\sqrt{n}} \sim N(0,1)$$

La cantidad $\sigma/\sqrt{n}$ se llama **error típico de la media**, y no debe
confundirse con $\sigma$: la primera mide cuánto varía la media muestral y la segunda
cuánto varían los datos.

Por el teorema central del límite, el resultado vale aproximadamente aunque la población
no sea normal, siempre que $n$ sea suficientemente grande.

### Varianza y cuasivarianza

```{=latex}
\begin{teorema}
Si la población es $N(\mu,\sigma)$,
$$\frac{(n-1)\hat{S}^2}{\sigma^2} = \frac{nS^2}{\sigma^2} \sim \chi^2_{n-1}$$
y además $\bar{X}$ y $\hat{S}^2$ son independientes.
\end{teorema}
```

**La independencia entre media y cuasivarianza es exclusiva de la normal**, y es lo que
permite construir la $t$ de Student del apartado siguiente. En cualquier otra
distribución no se cumple, y toda la inferencia clásica se apoya en ella.

Los grados de libertad son $n-1$ y no $n$ porque una desviación queda determinada por
las otras: $\sum(X_i-\bar{X}) = 0$.

### Media con varianza desconocida

Sustituyendo $\sigma$ por $\hat{S}$, el cociente deja de ser normal:

$$T = \frac{\bar{X}-\mu}{\hat{S}/\sqrt{n}} \sim t_{n-1}$$

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.6cm, height=4.6cm, axis lines=left,
  xmin=-4, xmax=4, ymin=0, ymax=0.45,
  xtick={-2,0,2}, ytick=\empty,
  tick label style={font=\scriptsize}, samples=150,
  legend style={font=\scriptsize, draw=none, at={(0.99,0.98)}, anchor=north east},
]
\addplot[thick, domain=-4:4] {exp(-x^2/2)/sqrt(2*pi)};
\addlegendentry{$N(0,1)$}
\addplot[dashed, domain=-4:4] {0.3796/(1+x^2/3)^2};
\addlegendentry{$t_3$}
\addplot[dotted, domain=-4:4] {0.3796/(1+x^2/3)^2*0+0};
\end{axis}
\end{tikzpicture}
\end{center}
```

La $t$ es más achatada y con colas más pesadas: **estimar $\sigma$ añade incertidumbre**,
y eso se traduce en valores críticos mayores y por tanto en intervalos más anchos. Al
crecer $n$ converge a la normal, y a partir de 30 grados de libertad la diferencia deja
de importar en la práctica.

### Proporción

Para $n$ grande, con $\hat{p} = X/n$ y $X\sim \text{B}(n,p)$:

$$\hat{p} \approx N\!\left(p,\ \sqrt{\frac{p(1-p)}{n}}\right)$$

La aproximación se admite cuando $np\ge5$ y $n(1-p)\ge5$. Con proporciones muy pequeñas
o muy grandes no vale, y hay que trabajar con la binomial exacta.

## Resumen para una población

| Se estudia | Estadístico | Distribución | Condición |
| --- | --- | --- | --- |
| $\mu$, $\sigma$ conocida | $\dfrac{\bar{X}-\mu}{\sigma/\sqrt{n}}$ | $N(0,1)$ | normal, o $n$ grande |
| $\mu$, $\sigma$ desconocida | $\dfrac{\bar{X}-\mu}{\hat{S}/\sqrt{n}}$ | $t_{n-1}$ | población normal |
| $\sigma^2$ | $\dfrac{(n-1)\hat{S}^2}{\sigma^2}$ | $\chi^2_{n-1}$ | población normal |
| $p$ | $\dfrac{\hat{p}-p}{\sqrt{p(1-p)/n}}$ | $N(0,1)$ aprox. | $np\ge5$, $n(1-p)\ge5$ |

## Dos poblaciones normales independientes

### Diferencia de medias

| Caso | Estadístico | Distribución |
| --- | --- | --- |
| Varianzas **conocidas** | $\dfrac{(\bar{X}_1-\bar{X}_2)-(\mu_1-\mu_2)}{\sqrt{\sigma_1^2/n_1+\sigma_2^2/n_2}}$ | $N(0,1)$ |
| Desconocidas e **iguales** | el mismo con $S_p$ | $t_{n_1+n_2-2}$ |
| Desconocidas y **distintas** | aproximación de Welch | $t_{\nu}$ con $\nu$ aproximado |
| Desconocidas, $n$ grandes | con $\hat{S}_1^2$ y $\hat{S}_2^2$ | $N(0,1)$ aprox. |

Con varianzas iguales se usa la **cuasivarianza combinada**, que promedia las dos
ponderando por grados de libertad:

$$S_p^2 = \frac{(n_1-1)\hat{S}_1^2 + (n_2-1)\hat{S}_2^2}{n_1+n_2-2}$$

Y con varianzas distintas, la **aproximación de Welch** ajusta los grados de libertad:

$$\nu \approx \frac{\left(\dfrac{\hat{S}_1^2}{n_1}+\dfrac{\hat{S}_2^2}{n_2}\right)^2}
{\dfrac{(\hat{S}_1^2/n_1)^2}{n_1-1}+\dfrac{(\hat{S}_2^2/n_2)^2}{n_2-1}}$$

que en general no es entero y se redondea hacia abajo.

```{=latex}
\begin{anotacion}
Decidir entre los casos segundo y tercero exige contrastar antes la igualdad de
varianzas con la $F$, y ese contraste previo es sensible a la falta de normalidad. Por
eso la práctica moderna recomienda usar \textbf{Welch siempre}: cuando las varianzas son
iguales pierde muy poca potencia, y cuando no lo son evita un error grave.
\end{anotacion}
```

### Cociente de varianzas

$$F = \frac{\hat{S}_1^2/\sigma_1^2}{\hat{S}_2^2/\sigma_2^2} \sim F_{n_1-1,\ n_2-1}$$

Bajo la hipótesis de igualdad de varianzas, el cociente se reduce a
$\hat{S}_1^2/\hat{S}_2^2$, que es el estadístico del contraste.

La $F$ tiene una propiedad que ahorra tablas:

$$F_{n,m;\,\alpha} = \frac{1}{F_{m,n;\,1-\alpha}}$$

y por eso las tablas solo recogen la cola derecha.

### Diferencia de proporciones

$$\hat{p}_1-\hat{p}_2 \approx
N\!\left(p_1-p_2,\ \sqrt{\frac{p_1(1-p_1)}{n_1}+\frac{p_2(1-p_2)}{n_2}}\right)$$

Con las mismas condiciones de aproximación en cada muestra.

## Resumen para dos poblaciones

| Se estudia | Estadístico | Distribución |
| --- | --- | --- |
| $\mu_1-\mu_2$, varianzas conocidas | tipificado | $N(0,1)$ |
| $\mu_1-\mu_2$, desconocidas iguales | con $S_p$ | $t_{n_1+n_2-2}$ |
| $\mu_1-\mu_2$, desconocidas distintas | Welch | $t_\nu$ |
| $\sigma_1^2/\sigma_2^2$ | $\hat{S}_1^2/\hat{S}_2^2$ | $F_{n_1-1,n_2-1}$ |
| $p_1-p_2$ | tipificado | $N(0,1)$ aprox. |

```{=latex}
\begin{anotacion}
Todo lo anterior supone \textbf{muestras independientes}. Si los datos están emparejados
—las mismas personas antes y después, o mediciones de dos aparatos sobre las mismas
piezas— hay que trabajar con las diferencias individuales y aplicar el caso de una sola
población. Tratar datos emparejados como independientes desperdicia la información del
emparejamiento y suele impedir detectar diferencias que existen.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
De una población normal con $\sigma=12$ se toma una muestra de 16 elementos. ¿Cuál es la
probabilidad de que la media muestral se aleje de $\mu$ más de 5 unidades?
\end{ejercicio}

\begin{solucion}
El error típico es $12/\sqrt{16} = 3$, así que
$\bar{X}\sim N(\mu,3)$. Tipificando, $z = 5/3 = 1{,}667$, y
$$P(\lvert \bar{X}-\mu\rvert > 5) = 2\,P(Z>1{,}667) = 2\cdot0{,}0478 = 0{,}0956$$
Un 9,6\,\%. Con $n=64$ el error típico bajaría a 1,5 y la probabilidad a 0,0009.
\end{solucion}

\begin{ejercicio}
En una muestra de 10 elementos de una población normal se obtiene $\hat{S}^2 = 25$.
¿Qué distribución sigue $9\hat{S}^2/\sigma^2$?
\end{ejercicio}

\begin{solucion}
Una $\chi^2$ con $n-1 = 9$ grados de libertad. Su valor observado es $225/\sigma^2$, y
esa relación es la que permite construir el intervalo de confianza para $\sigma^2$ del
tema siguiente sin más que buscar dos cuantiles de la tabla.
\end{solucion}

\begin{ejercicio}
Dos muestras de tamaños 10 y 15 dan cuasivarianzas 40 y 25. ¿Qué grados de libertad
tiene el estadístico $F$ para contrastar la igualdad de varianzas, y cuánto vale?
\end{ejercicio}

\begin{solucion}
$F = 40/25 = 1{,}6$ con $9$ y $14$ grados de libertad. Conviene poner en el numerador la
cuasivarianza mayor, porque así el valor supera 1 y basta consultar la cola derecha de
la tabla, que es la única tabulada.
\end{solucion}
```

Las distribuciones en el muestreo están desarrolladas en \cite{canavos1987} y
\cite{herrerias2012}, con problemas resueltos en \cite{herrerias2012ej} y
\cite{espejo2016}.
