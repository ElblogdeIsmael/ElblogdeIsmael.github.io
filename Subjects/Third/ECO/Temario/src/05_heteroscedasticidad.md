# Heteroscedasticidad

Tema 5 del programa. Cuando la varianza de la perturbación no es constante:
concepto, causas, consecuencias, contrastes y estimación.

## Concepto

H4 exige que $\Var(u_i) = \sigma^2$ para toda observación. Hay
**heteroscedasticidad** cuando esa varianza cambia con $i$:

$$\Var(u_i) = \sigma_i^2$$

La matriz de varianzas y covarianzas deja de ser escalar y pasa a ser diagonal con
elementos distintos:

$$\operatorname{E}[\mathbf{u}\mathbf{u}'] = \sigma^2 \boldsymbol{\Omega},
\qquad
\boldsymbol{\Omega} =
\begin{pmatrix}
\omega_1 & 0 & \cdots & 0 \\
0 & \omega_2 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & \omega_n
\end{pmatrix}$$

**Sigue siendo diagonal**, y esa es la diferencia con el tema 6: aquí lo que cambia
es la diagonal y los ceros de fuera se mantienen, porque las perturbaciones siguen
siendo independientes entre sí.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.5cm, height=5cm,
  xlabel={$X$}, ylabel={$Y$},
  xmin=0, xmax=11, ymin=0, ymax=16,
  xtick=\empty, ytick=\empty
]
\addplot[only marks, mark=*, mark size=1.3pt] coordinates {
  (1,2.1) (1,1.7) (2,2.9) (2,2.4) (3,4.4) (3,3.2) (4,5.6) (4,3.8)
  (5,7.0) (5,4.1) (6,8.4) (6,4.4) (7,10.2) (7,4.2) (8,11.4) (8,4.4)
  (9,13.2) (9,4.3) (10,14.6) (10,4.6)
};
\addplot[thick, domain=0.5:10.5] {0.62*x + 2.5};
\end{axis}
\end{tikzpicture}
\end{center}
```

La nube se abre en abanico: la dispersión alrededor de la recta crece con $X$. Es la
forma en que la heteroscedasticidad se ve, y por eso el primer diagnóstico es
siempre un gráfico de residuos.

## Causas

| Causa | Ejemplo |
| --- | --- |
| Escala muy distinta entre unidades | gasto de hogares con rentas muy diferentes |
| Aprendizaje | los errores se reducen conforme se gana experiencia |
| Mejora en la recogida de datos | series largas cuya calidad de medida mejora |
| Valores atípicos | unas pocas observaciones muy alejadas |
| Datos agregados con distinto número de unidades | medias de grupos de tamaño desigual |
| Error de especificación | omitir una variable o usar una forma funcional errónea |

La última merece atención: **un modelo mal especificado produce residuos con
apariencia heteroscedástica**. Si se omite una variable relevante o la relación es
en logaritmos y se estima en niveles, los contrastes de este tema rechazan la
homoscedasticidad. La corrección entonces no es ponderar, sino arreglar la
especificación.

Y es sobre todo un problema de **sección cruzada**, por la razón del tema 1: unidades
de tamaños muy distintos tienen dispersiones muy distintas.

## Consecuencias

| Propiedad | Con heteroscedasticidad |
| --- | --- |
| Insesgadez de $\hat{\boldsymbol{\beta}}$ | **se mantiene** |
| Consistencia | **se mantiene** |
| Eficiencia | **se pierde**: ya no es de mínima varianza |
| $\Var(\hat{\boldsymbol{\beta}}) = \sigma^2(\mathbf{X}'\mathbf{X})^{-1}$ | **es incorrecta** |
| Errores estándar, $t$, $F$ e intervalos | **no válidos** |

La primera fila es la que hay que retener: **la estimación no está sesgada; lo que
está mal es la medida de su precisión**. Los coeficientes son correctos en media, y
todo lo que se dice sobre su significación no vale.

La expresión correcta de la varianza es

$$\Var(\hat{\boldsymbol{\beta}}) = (\mathbf{X}'\mathbf{X})^{-1}\mathbf{X}'\,
\sigma^2\boldsymbol{\Omega}\,\mathbf{X}(\mathbf{X}'\mathbf{X})^{-1}$$

y no hay ninguna razón para que se parezca a la que el programa imprime por defecto.
El sesgo puede ir en cualquier dirección: los errores estándar habituales pueden
salir demasiado pequeños —y entonces se declara significativo lo que no lo es— o
demasiado grandes.

## Procedimientos de detección

### Análisis gráfico

Representar $e_i^2$ o $\lvert e_i \rvert$ frente a $\hat{y}_i$ y frente a cada
regresor. Un abanico, un embudo o una curva son indicios; una banda de anchura
constante, no.

Es informal y es el primer paso siempre, porque además sugiere **qué forma** tiene
la heteroscedasticidad, que es lo que hace falta para corregirla.

### Contraste de Goldfeld-Quandt

Supone que la varianza es monótona respecto de una variable $Z$, normalmente uno de
los regresores.

| Paso | Qué se hace |
| --- | --- |
| 1 | ordenar las observaciones según $Z$ |
| 2 | eliminar las $c$ centrales, en torno a $n/4$ |
| 3 | estimar el modelo en cada uno de los dos grupos |
| 4 | calcular $F = \text{SCR}_2 / \text{SCR}_1$ con $\text{SCR}_2 > \text{SCR}_1$ |

$$F \sim F_{\,(n-c)/2 - k,\ (n-c)/2 - k}$$

Eliminar el centro es lo que da potencia al contraste: acentúa la diferencia entre
los dos extremos. Su limitación es que **exige saber respecto de qué variable crece
la varianza**, y que solo detecta heteroscedasticidad monótona.

### Contraste de Breusch-Pagan

Más general: contrasta si la varianza depende linealmente de un conjunto de
variables.

$$\sigma_i^2 = \alpha_1 + \alpha_2 Z_{2i} + \dots + \alpha_p Z_{pi}$$

| Paso | Qué se hace |
| --- | --- |
| 1 | estimar el modelo original y obtener $e_i$ |
| 2 | regresar $e_i^2$ sobre las $Z$ |
| 3 | calcular $LM = n R^2$ de esa regresión auxiliar |
| 4 | comparar con $\chi^2_{p-1}$ |

$$H_0: \alpha_2 = \dots = \alpha_p = 0 \quad \text{(homoscedasticidad)}$$

Es un contraste **asintótico**: necesita muestras grandes. Y en su versión original
es **sensible a la no normalidad** de la perturbación, lo que puede hacerle rechazar
por un motivo distinto del que dice; la versión robusta de Koenker corrige eso.

El contraste de White es de la misma familia y añade a la regresión auxiliar los
cuadrados y los productos cruzados de los regresores, con lo que detecta también
formas no lineales. Su precio son muchos grados de libertad, y por eso pierde
potencia en modelos con muchas variables.

### Contraste de Glejser

Regresa $\lvert e_i \rvert$ sobre alguna función de $Z$:

$$\lvert e_i \rvert = \alpha_1 + \alpha_2 f(Z_i) + v_i$$

con $f(Z) = Z$, $\sqrt{Z}$, $1/Z$ o $1/\sqrt{Z}$. Se contrasta $\alpha_2 = 0$.

Su interés está en que **la forma funcional que resulte significativa indica cómo
corregir**: si lo que ajusta es $f(Z) = Z$, la desviación típica es proporcional a
$Z$, y esa es exactamente la ponderación que hay que usar. Los otros contrastes
dicen que hay problema y este dice de qué tipo.

Su inconveniente conocido es que el término de error de esa regresión auxiliar no
cumple las hipótesis habituales, así que su validez es asintótica.

## Estimación de modelos con heteroscedasticidad

### Mínimos cuadrados generalizados

Si $\boldsymbol{\Omega}$ se conoce:

$$\hat{\boldsymbol{\beta}}_{\text{MCG}} =
(\mathbf{X}'\boldsymbol{\Omega}^{-1}\mathbf{X})^{-1}\mathbf{X}'\boldsymbol{\Omega}^{-1}\mathbf{y}$$

Este estimador **sí es óptimo** bajo heteroscedasticidad: es el teorema de
Gauss-Markov generalizado, o teorema de Aitken.

### Mínimos cuadrados ponderados

Es lo mismo, visto como una transformación. Si $\Var(u_i) = \sigma^2 Z_i^2$, se
divide toda la ecuación por $Z_i$:

$$\frac{Y_i}{Z_i} = \beta_1\frac{1}{Z_i} + \beta_2\frac{X_i}{Z_i} + \frac{u_i}{Z_i}$$

y la nueva perturbación tiene varianza constante:

$$\Var\!\left(\frac{u_i}{Z_i}\right) = \frac{\sigma^2 Z_i^2}{Z_i^2} = \sigma^2$$

Sobre el modelo transformado se aplica mínimos cuadrados ordinarios. En términos de
peso, cada observación pesa $1/Z_i^2$: **las observaciones más precisas pesan más**,
que es la idea de fondo.

Dos cuidados al transformar:

- **El término independiente desaparece como tal**: se convierte en el coeficiente
  de $1/Z_i$, y la nueva ecuación no tiene término independiente propio.
- **El $R^2$ del modelo transformado no es comparable** con el del original, porque
  la variable dependiente ha cambiado.

Si $\boldsymbol{\Omega}$ no se conoce —el caso normal—, se estima primero, con la
forma que sugieran Glejser o el gráfico, y se aplica **mínimos cuadrados
generalizados factibles**. Su validez es asintótica, y depende de haber acertado con
la forma: **una ponderación equivocada puede empeorar el resultado** respecto de no
ponderar.

### Errores estándar robustos de White

La alternativa que evita tener que acertar con la forma:

$$\widehat{\Var}(\hat{\boldsymbol{\beta}}) =
(\mathbf{X}'\mathbf{X})^{-1}\left(\sum_i e_i^2\, \mathbf{x}_i \mathbf{x}_i'\right)(\mathbf{X}'\mathbf{X})^{-1}$$

Se estima por mínimos cuadrados ordinarios y se corrigen **solo** los errores
estándar. Los coeficientes no cambian, y no hace falta especificar
$\boldsymbol{\Omega}$.

| | Mínimos cuadrados ponderados | Errores robustos |
| --- | --- | --- |
| Coeficientes | cambian y son más eficientes | no cambian |
| Hay que conocer la forma de $\boldsymbol{\Omega}$ | sí | no |
| Validez | asintótica si se estima $\boldsymbol{\Omega}$ | asintótica |
| Riesgo | acertar mal la forma empeora | ninguno equivalente |

En la práctica, **los errores robustos son la opción por defecto** cuando el objetivo
es la inferencia y la eficiencia no es crítica: son más fáciles de justificar y no
dependen de una suposición que puede fallar.

## Un procedimiento de trabajo

1. Mirar el gráfico de residuos frente a $\hat{y}$ y frente a cada regresor.
2. **Comprobar la especificación antes que nada.** Si falta una variable o la forma
   funcional es errónea, corregir eso primero.
3. Aplicar Breusch-Pagan o White como contraste general.
4. Si rechaza, usar Goldfeld-Quandt o Glejser para averiguar **respecto de qué**
   variable y con qué forma.
5. Corregir: ponderar si la forma está clara, errores robustos si no.
6. Informar de la corrección aplicada y de por qué.

El paso 2 es el que más se salta y el que más resultados salva: corregir con
ponderaciones un problema que era de especificación deja el modelo igual de mal
especificado y con la apariencia de haberlo arreglado.

El tratamiento de la heteroscedasticidad y de sus contrastes sigue a
\cite{gujarati2010} y \cite{wooldridge2010}; los mínimos cuadrados generalizados y
los errores robustos, a \cite{greene1999} y \cite{johnston2001}; la práctica con
programas estadísticos, a \cite{fernandez2016}.
