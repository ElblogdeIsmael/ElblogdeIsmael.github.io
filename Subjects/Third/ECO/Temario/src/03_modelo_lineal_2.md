# El modelo lineal II

Tema 3 del programa. Intervalos de confianza, contrastes sobre los parámetros y
explotación del modelo.

## De dónde sale la inferencia

Con H7 —normalidad de la perturbación— el estimador es normal:

$$\hat{\boldsymbol{\beta}} \sim N\!\left(\boldsymbol{\beta},\ \sigma^2 (\mathbf{X}'\mathbf{X})^{-1}\right)$$

Como $\sigma^2$ no se conoce y se sustituye por $\hat{\sigma}^2$, el estadístico
tipificado deja de ser normal y pasa a ser una $t$ de Student con $n-k$ grados de
libertad:

$$t_j = \frac{\hat{\beta}_j - \beta_j}{\text{ee}(\hat{\beta}_j)} \sim t_{n-k},
\qquad
\text{ee}(\hat{\beta}_j) = \sqrt{\hat{\sigma}^2\,[(\mathbf{X}'\mathbf{X})^{-1}]_{jj}}$$

Toda la inferencia del tema sale de ahí, y por eso **todo lo que rompa H4 o H5
invalida el error estándar** y con él los intervalos y los contrastes. Los temas 5 y
6 vuelven sobre esto.

## Intervalos de confianza

$$\hat{\beta}_j \pm t_{\alpha/2,\,n-k}\ \text{ee}(\hat{\beta}_j)$$

Lectura correcta: si se repitiera el muestreo muchas veces, el $100(1-\alpha)$ %
de los intervalos construidos así contendría el verdadero $\beta_j$. **No** es que
$\beta_j$ esté en este intervalo con probabilidad $0{,}95$: $\beta_j$ es un número
fijo, y lo aleatorio es el intervalo.

Su amplitud crece con $\hat{\sigma}^2$ y con la correlación entre regresores, y
decrece con la variabilidad de $X_j$ y con $n$. Es la misma lista de la varianza del
tema 2.

Para $\sigma^2$ el intervalo se construye con la $\chi^2$:

$$\left[\frac{(n-k)\hat{\sigma}^2}{\chi^2_{\alpha/2,\,n-k}},\
\frac{(n-k)\hat{\sigma}^2}{\chi^2_{1-\alpha/2,\,n-k}}\right]$$

y es asimétrico, porque la $\chi^2$ lo es.

## Contrastes sobre los parámetros

### Contraste individual

$$H_0: \beta_j = 0 \quad \text{frente a} \quad H_1: \beta_j \ne 0$$

$$t = \frac{\hat{\beta}_j}{\text{ee}(\hat{\beta}_j)}$$

Se rechaza si $|t| > t_{\alpha/2,\,n-k}$. Rechazar significa que la variable es
**significativa**: aporta al modelo dado el resto de variables incluidas.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.5cm, height=4.6cm,
  axis lines=middle,
  xlabel={$t$},
  xmin=-4.2, xmax=4.2, ymin=0, ymax=0.46,
  xtick={-2,0,2}, xticklabels={$-t_{\alpha/2}$,,$t_{\alpha/2}$},
  ytick=\empty,
  samples=200
]
\addplot[thick, domain=-4:4] {exp(-x^2/2)/sqrt(2*pi)};
\addplot[draw=none, fill=gray!35, domain=-4:-2]
  {exp(-x^2/2)/sqrt(2*pi)} \closedcycle;
\addplot[draw=none, fill=gray!35, domain=2:4]
  {exp(-x^2/2)/sqrt(2*pi)} \closedcycle;
\node[font=\footnotesize] at (axis cs:0,0.16) {aceptación};
\node[font=\footnotesize, anchor=south] at (axis cs:-3.0,0.055) {rechazo};
\node[font=\footnotesize, anchor=south] at (axis cs:3.0,0.055) {rechazo};
\end{axis}
\end{tikzpicture}
\end{center}
```

Dos precisiones que se piden en los exámenes:

- **No rechazar no es aceptar.** Que $t$ no supere el valor crítico puede deberse a
  que el efecto no existe o a que la muestra no da para detectarlo. Con
  multicolinealidad, el tema 4 produce exactamente ese segundo caso.
- **Significativo no es importante.** Con una muestra grande, un efecto
  económicamente irrelevante sale significativo. Hay que mirar además el tamaño del
  coeficiente.

### Contraste de significación global

$$H_0: \beta_2 = \beta_3 = \dots = \beta_k = 0$$

$$F = \frac{\text{SCE}/(k-1)}{\text{SCR}/(n-k)} = \frac{R^2/(k-1)}{(1-R^2)/(n-k)}
\sim F_{k-1,\,n-k}$$

El término independiente queda fuera de $H_0$: lo que se contrasta es si el modelo
explica algo más que la media.

**El contraste conjunto no es la suma de los individuales.** Rechazar $H_0$ con la
$F$ y no rechazar ninguno con la $t$ es perfectamente posible, y es el síntoma
clásico de la multicolinealidad del tema 4: las variables explican en conjunto y no
se puede separar la contribución de cada una.

### Contrastes de restricciones lineales

El caso general: $q$ restricciones escritas como $\mathbf{R}\boldsymbol{\beta} =
\mathbf{r}$, con $\mathbf{R}$ de orden $q \times k$.

$$F = \frac{(\text{SCR}_R - \text{SCR}_{NR})/q}{\text{SCR}_{NR}/(n-k)}
\sim F_{q,\,n-k}$$

donde $\text{SCR}_R$ es la del modelo restringido y $\text{SCR}_{NR}$ la del libre.
La idea es directa: imponer una restricción falsa empeora mucho el ajuste, y una
verdadera apenas lo empeora.

| Restricción | $\mathbf{R}\boldsymbol{\beta} = \mathbf{r}$ | $q$ |
| --- | --- | ---: |
| $\beta_2 = 0$ | $(0\ 1\ 0\ \cdots)\boldsymbol{\beta} = 0$ | 1 |
| $\beta_2 = \beta_3$ | $(0\ 1\ -1\ 0\ \cdots)\boldsymbol{\beta} = 0$ | 1 |
| $\beta_2 + \beta_3 = 1$ | $(0\ 1\ 1\ 0\ \cdots)\boldsymbol{\beta} = 1$ | 1 |
| $\beta_2 = \beta_3 = 0$ | dos filas | 2 |

La tercera fila es la de **rendimientos constantes a escala** en una función de
producción Cobb-Douglas estimada en logaritmos, y es el ejemplo canónico de por qué
hacen falta estos contrastes: la teoría propone una relación entre parámetros, no
un valor para cada uno.

Con $q=1$ se cumple $F = t^2$, así que el contraste individual es un caso
particular de este.

### Cambio estructural

El contraste de Chow comprueba si los parámetros son los mismos en dos submuestras:

$$F = \frac{(\text{SCR}_T - \text{SCR}_1 - \text{SCR}_2)/k}
{(\text{SCR}_1 + \text{SCR}_2)/(n_1 + n_2 - 2k)}$$

Necesita $n_1 > k$ y $n_2 > k$, y supone la misma varianza en los dos tramos. Si la
varianza cambia, lo que rechaza puede ser la heteroscedasticidad del tema 5 y no el
cambio de parámetros.

Una alternativa que evita esa confusión es usar variables ficticias: se define una
ficticia para el segundo tramo, se incluyen sus productos con los regresores y se
contrasta que sus coeficientes son cero. Además dice **qué** parámetro cambió, y no
solo que alguno lo hizo.

## Explotación del modelo

### Predicción

Para un vector de valores $\mathbf{x}_0$:

$$\hat{y}_0 = \mathbf{x}_0' \hat{\boldsymbol{\beta}}$$

Y hay dos intervalos distintos, que se confunden con frecuencia:

| Qué se predice | Varianza |
| --- | --- |
| La **media** de $Y$ dado $\mathbf{x}_0$ | $\sigma^2\,\mathbf{x}_0'(\mathbf{X}'\mathbf{X})^{-1}\mathbf{x}_0$ |
| Un **valor individual** de $Y$ | $\sigma^2\,[\,1 + \mathbf{x}_0'(\mathbf{X}'\mathbf{X})^{-1}\mathbf{x}_0\,]$ |

El sumando 1 de la segunda fila es la varianza de la perturbación del período que se
predice, que no desaparece por bien estimado que esté el modelo. Por eso el
intervalo individual es siempre más ancho, y no se estrecha aunque $n$ crezca: hay
un suelo irreducible.

Las dos varianzas crecen conforme $\mathbf{x}_0$ se aleja de la media muestral. De
ahí la regla práctica: **extrapolar lejos del rango de los datos es poco fiable**, y
el propio intervalo lo indica al ensancharse.

### Medidas de error de predicción

| Medida | Fórmula |
| --- | --- |
| Error cuadrático medio | $\text{ECM} = \frac{1}{m}\sum (y_t - \hat{y}_t)^2$ |
| Raíz del error cuadrático medio | $\sqrt{\text{ECM}}$, en las unidades de $Y$ |
| Error absoluto medio | $\frac{1}{m}\sum \lvert y_t - \hat{y}_t \rvert$ |
| Error porcentual absoluto medio | $\frac{100}{m}\sum \lvert (y_t - \hat{y}_t)/y_t \rvert$ |

La raíz del error cuadrático medio es la más usada porque va en las unidades de la
variable y se compara con su media. Y el error porcentual falla cuando algún $y_t$
se acerca a cero, porque el cociente explota.

Y una advertencia de método: **el error de predicción debe medirse fuera de la
muestra de estimación**. Medido dentro, siempre sale bueno, y un modelo con muchos
regresores sale mejor cuanto más sobreajustado esté.

### Simulación

Con el modelo estimado se puede evaluar el efecto de una política: cambiar el valor
de una variable exógena y ver qué predice el modelo.

Su límite es la **crítica de Lucas**: los parámetros estimados con datos de un
régimen pueden cambiar cuando la política cambia, porque los agentes reaccionan al
cambio de reglas. Un modelo estimado bajo unas reglas no predice bien lo que pasará
bajo otras distintas, y eso ningún contraste lo detecta.

Los intervalos, los contrastes y la predicción siguen a \cite{gujarati2010},
\cite{novales2000} y \cite{wooldridge2010}; el tratamiento matricial de las
restricciones lineales, a \cite{greene1999} y \cite{johnston2001}.
