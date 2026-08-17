# El modelo lineal I

Tema 2 del programa. Las hipótesis del modelo, la estimación por mínimos cuadrados
ordinarios y la medida de la bondad del ajuste.

## Hipótesis del modelo

El modelo, en forma matricial:

$$\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \mathbf{u}$$

Sobre él se hacen estas hipótesis, y cada una tiene su tema en el resto del
programa:

| | Hipótesis | Si falla |
| --- | --- | --- |
| H1 | linealidad en los parámetros | error de especificación |
| H2 | $\mathbf{X}$ es no estocástica y de rango completo, $\rg(\mathbf{X}) = k$ | multicolinealidad (tema 4) |
| H3 | $\operatorname{E}[\mathbf{u}] = \mathbf{0}$ | sesgo en el término independiente |
| H4 | homoscedasticidad: $\Var(u_i) = \sigma^2$ para todo $i$ | heteroscedasticidad (tema 5) |
| H5 | ausencia de autocorrelación: $\Cov(u_i, u_j) = 0$ si $i \ne j$ | autocorrelación (tema 6) |
| H6 | $n > k$ | el modelo no se puede estimar |
| H7 | normalidad: $\mathbf{u} \sim N(\mathbf{0}, \sigma^2 \mathbf{I})$ | la inferencia del tema 3 no vale en muestras pequeñas |

H4 y H5 juntas se escriben como

$$\operatorname{E}[\mathbf{u}\mathbf{u}'] = \sigma^2 \mathbf{I}_n$$

es decir, matriz de varianzas y covarianzas escalar: la misma varianza en la
diagonal y ceros fuera. Los temas 5 y 6 son cada uno una forma de romper esa
igualdad: el 5 cambia la diagonal, el 6 llena lo de fuera.

**H7 no hace falta para estimar**, solo para la inferencia exacta del tema 3. En
muestras grandes se puede prescindir de ella, porque los estadísticos convergen a
sus distribuciones asintóticas.

## Estimación por mínimos cuadrados ordinarios

El criterio: elegir $\hat{\boldsymbol{\beta}}$ que minimice la suma de los residuos
al cuadrado.

$$S(\boldsymbol{\beta}) = \sum_{i=1}^{n} e_i^2 = \mathbf{e}'\mathbf{e}
= (\mathbf{y} - \mathbf{X}\boldsymbol{\beta})'(\mathbf{y} - \mathbf{X}\boldsymbol{\beta})$$

Derivando e igualando a cero se obtienen las **ecuaciones normales**:

$$\mathbf{X}'\mathbf{X}\hat{\boldsymbol{\beta}} = \mathbf{X}'\mathbf{y}$$

y, si $\mathbf{X}'\mathbf{X}$ es invertible —que es H2—, el estimador:

$$\hat{\boldsymbol{\beta}} = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{y}$$

**Los residuos no son las perturbaciones.** $u_i$ es lo no observable del modelo
verdadero; $e_i = y_i - \hat{y}_i$ es lo que queda tras estimar, y es observable.
Todos los contrastes de los temas 4 a 6 se hacen sobre los residuos, que es lo
único que hay, y de ahí sus limitaciones.

### El caso de dos variables

Con $Y_i = \beta_1 + \beta_2 X_i + u_i$ las fórmulas se escriben en escalares:

$$\hat{\beta}_2 = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sum (X_i - \bar{X})^2}
= \frac{S_{XY}}{S_{XX}}, \qquad
\hat{\beta}_1 = \bar{Y} - \hat{\beta}_2 \bar{X}$$

La segunda fórmula dice que **la recta pasa siempre por el punto medio**
$(\bar{X}, \bar{Y})$.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10cm, height=5.4cm,
  xlabel={$X$}, ylabel={$Y$},
  xmin=0, xmax=11, ymin=0, ymax=13,
  xtick=\empty, ytick=\empty,
  legend pos=north west, legend style={font=\footnotesize, draw=none, fill=none}
]
\addplot[only marks, mark=*, mark size=1.5pt] coordinates {
  (1,2.4) (2,2.6) (3,4.6) (4,4.2) (5,6.4) (6,6.0) (7,8.3) (8,7.9) (9,10.2) (10,9.6)
};
\addlegendentry{observaciones}
\addplot[thick, domain=0.5:10.5] {0.86*x + 1.3};
\addlegendentry{recta estimada}
% Un residuo senalado: la distancia vertical del punto a la recta. Se marca
% el de la observacion 9, que es el mas largo: en los del centro el trazo
% queda tan corto que el rotulo se monta sobre el punto.
\draw[dashed] (axis cs:9,10.2) -- (axis cs:9,9.04);
\node[anchor=west, font=\footnotesize] at (axis cs:9.15,9.62) {$e_i$};
\end{axis}
\end{tikzpicture}
\end{center}
```

Se minimizan las distancias **verticales**, no las perpendiculares. Es una decisión
con consecuencias: hace que la regresión de $Y$ sobre $X$ y la de $X$ sobre $Y$ sean
rectas distintas, porque cada una minimiza en una dirección.

### Propiedades algebraicas

Salen de las ecuaciones normales y se cumplen siempre, sin necesidad de ninguna
hipótesis estadística:

| Propiedad | Expresión | Condición |
| --- | --- | --- |
| Los residuos suman cero | $\sum e_i = 0$ | si hay término independiente |
| Los residuos son ortogonales a los regresores | $\mathbf{X}'\mathbf{e} = \mathbf{0}$ | siempre |
| La recta pasa por las medias | $\bar{Y} = \hat{\beta}_1 + \hat{\beta}_2\bar{X}$ | si hay término independiente |
| La media de lo ajustado es la de lo observado | $\bar{\hat{y}} = \bar{y}$ | si hay término independiente |

Las condiciones no son un detalle: **un modelo sin término independiente no cumple
tres de las cuatro**, y por eso su coeficiente de determinación puede salir negativo
y no se puede comparar con el de un modelo que sí lo tiene.

## Propiedades del estimador

### Insesgadez

Sustituyendo $\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \mathbf{u}$:

$$\hat{\boldsymbol{\beta}} = \boldsymbol{\beta} + (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\mathbf{u}$$

y tomando esperanzas, con H2 y H3:

$$\operatorname{E}[\hat{\boldsymbol{\beta}}] = \boldsymbol{\beta}$$

Solo hacen falta H2 y H3. **La insesgadez no depende de H4 ni de H5**, y de ahí sale
la conclusión que gobierna los temas 5 y 6: con heteroscedasticidad o
autocorrelación el estimador sigue siendo insesgado, y lo que se rompe es su
varianza.

### Varianza

$$\Var(\hat{\boldsymbol{\beta}}) = \sigma^2 (\mathbf{X}'\mathbf{X})^{-1}$$

Aquí sí hacen falta H4 y H5. Y la expresión dice de qué depende la precisión:

- **Menos varianza de la perturbación**, más precisión.
- **Más variabilidad en los regresores**, más precisión: si $X$ apenas varía en la
  muestra, su efecto no se puede medir.
- **Menos correlación entre regresores**, más precisión. Es el tema 4.

### Estimación de $\sigma^2$

$$\hat{\sigma}^2 = \frac{\mathbf{e}'\mathbf{e}}{n - k} = \frac{\text{SCR}}{n-k}$$

El divisor es $n-k$ y no $n$ porque se han consumido $k$ grados de libertad al
estimar los parámetros. Con ese divisor el estimador es insesgado; con $n$ sale
sesgado a la baja, y el sesgo es tanto mayor cuantos más regresores haya.

### El teorema de Gauss-Markov

**Bajo H1 a H6, el estimador de mínimos cuadrados ordinarios es el de menor varianza
dentro de los estimadores lineales e insesgados.**

Las tres condiciones importan y se citan juntas por costumbre:

- **Lineal**: en $\mathbf{y}$.
- **Insesgado**: su esperanza es $\boldsymbol{\beta}$.
- **Óptimo**: mínima varianza dentro de esa clase.

**No dice que sea el mejor estimador posible.** Fuera de la clase de los lineales e
insesgados puede haber otros mejores, y aceptando un poco de sesgo se puede reducir
mucho la varianza: eso es lo que hace la regresión contraída del tema 4.

Y el teorema **no necesita normalidad**. H7 solo hace falta para la inferencia del
tema 3.

## Bondad del ajuste

### Descomposición de la varianza

$$\underbrace{\sum (y_i - \bar{y})^2}_{\text{SCT}}
= \underbrace{\sum (\hat{y}_i - \bar{y})^2}_{\text{SCE}}
+ \underbrace{\sum e_i^2}_{\text{SCR}}$$

La descomposición **solo se cumple si hay término independiente**, porque necesita
que los residuos sumen cero.

### Coeficiente de determinación

$$R^2 = \frac{\text{SCE}}{\text{SCT}} = 1 - \frac{\text{SCR}}{\text{SCT}},
\qquad 0 \le R^2 \le 1$$

Es la proporción de la variación de $Y$ que el modelo explica. Y tiene un defecto
grave: **$R^2$ nunca baja al añadir un regresor**, sea cual sea. Añadir ruido puro
como variable explicativa lo sube un poco, así que maximizar $R^2$ lleva a modelos
sobrecargados.

### Coeficiente corregido

$$\bar{R}^2 = 1 - \frac{\text{SCR}/(n-k)}{\text{SCT}/(n-1)}
= 1 - (1 - R^2)\,\frac{n-1}{n-k}$$

Penaliza por el número de parámetros: solo sube si el regresor nuevo aporta más de
lo que cuesta en grados de libertad. Puede salir **negativo**, y eso indica un
modelo peor que la simple media.

### Criterios de información

Formalizan el mismo compromiso: ajuste frente a número de parámetros.

$$\text{AIC} = \ln\!\left(\frac{\text{SCR}}{n}\right) + \frac{2k}{n},
\qquad
\text{SBC} = \ln\!\left(\frac{\text{SCR}}{n}\right) + \frac{k \ln n}{n}$$

En los dos, **menor es mejor**. La diferencia está en la penalización: $2$ por
parámetro en Akaike, $\ln n$ en Schwarz. Como $\ln n > 2$ para $n > 7$, **Schwarz
penaliza más y elige modelos más pequeños**, y esa diferencia crece con el tamaño de
la muestra.

Tres cuidados al comparar modelos:

- **Solo se comparan modelos con la misma variable endógena.** Un modelo en $Y$ y
  otro en $\ln Y$ no son comparables por $R^2$ ni por AIC: sus SCT son cantidades
  distintas.
- **Un $R^2$ alto no valida el modelo.** En series temporales dos variables con
  tendencia dan $R^2$ altísimos sin ninguna relación real. Es la regresión espuria,
  y el tema 6 la trata.
- **Un $R^2$ bajo no lo invalida.** En sección cruzada con datos individuales,
  valores de 0,2 son normales y los parámetros pueden estar perfectamente estimados.

El desarrollo del modelo lineal y de las propiedades de mínimos cuadrados sigue a
\cite{gujarati2010}, \cite{novales2000} y \cite{greene1999}; el tratamiento de los
criterios de selección, a \cite{wooldridge2010} y \cite{maddala2001}.
