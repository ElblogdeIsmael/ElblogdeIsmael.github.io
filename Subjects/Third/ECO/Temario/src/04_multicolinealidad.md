# Multicolinealidad

Tema 4 del programa. Qué pasa cuando los regresores están relacionados entre sí:
concepto, causas, consecuencias, detección y soluciones.

## Concepto

La **multicolinealidad** es la existencia de relaciones lineales entre las columnas
de $\mathbf{X}$. Es un incumplimiento de H2, y tiene dos grados:

| Grado | Qué ocurre | Consecuencia |
| --- | --- | --- |
| **Exacta** | una columna es combinación lineal exacta de otras | $\mathbf{X}'\mathbf{X}$ es singular y el modelo no se puede estimar |
| **Aproximada** | la relación es fuerte pero no exacta | se puede estimar, y muy mal |

La exacta se detecta sola: el programa se detiene o elimina una variable. La
**aproximada** es la que importa, porque el modelo se estima, imprime resultados con
aspecto normal y esos resultados no valen.

**Es un problema de la muestra, no del modelo.** Las variables pueden estar
relacionadas en estos datos y no estarlo en otros. No es un error de especificación
ni una violación de una hipótesis sobre la perturbación: es falta de información
para separar dos efectos.

## Causas

| Causa | Ejemplo |
| --- | --- |
| Variables que se mueven juntas por naturaleza | renta y riqueza, consumo e ingreso |
| Tendencia común en series temporales | casi todo lo macroeconómico crece con el tiempo |
| Variables redundantes | incluir la misma magnitud en dos escalas |
| Retardos de una misma variable | $X_t$ y $X_{t-1}$ están muy correlacionados |
| Potencias de una variable | $X$ y $X^2$ en un rango estrecho |
| Muestra pequeña | con pocos datos casi todo parece correlacionado |
| La trampa de las ficticias | $m$ ficticias y término independiente: colinealidad exacta |

La última es un error de especificación y no un problema de los datos: se corrige
dejando fuera una categoría, como dice el tema 1.

## Consecuencias

Lo primero, y conviene decirlo antes que nada: **el estimador sigue siendo insesgado
y óptimo**. Gauss-Markov solo necesita $\rg(\mathbf{X}) = k$, y con multicolinealidad
aproximada eso se cumple. El problema no es el sesgo.

El problema es la **varianza**, y se ve en el factor de inflación:

$$\Var(\hat{\beta}_j) = \frac{\sigma^2}{S_{jj}\,(1 - R_j^2)}$$

con $R_j^2$ el coeficiente de determinación de la regresión de $X_j$ sobre las demás
explicativas. Cuando $R_j^2 \to 1$, la varianza se dispara.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10cm, height=5cm,
  xlabel={$R_j^2$},
  ylabel={FIV $= 1/(1-R_j^2)$},
  xmin=0, xmax=1, ymin=0, ymax=26,
  ytick={0,5,10,15,20,25},
  grid=major, grid style={dashed, gray!30},
  samples=200
]
\addplot[thick, domain=0:0.962] {1/(1-x)};
\addplot[dashed, domain=0:1] {10};
\node[anchor=west, font=\footnotesize] at (axis cs:0.05,11.6) {FIV = 10};
\end{axis}
\end{tikzpicture}
\end{center}
```

De ahí los efectos observables:

| Efecto | Por qué |
| --- | --- |
| Errores estándar grandes | la varianza está inflada |
| Estadísticos $t$ pequeños | el denominador es grande |
| $F$ significativa con todas las $t$ no significativas | el conjunto explica; cada uno por separado no se distingue |
| Coeficientes con signo contrario al esperado | la estimación es imprecisa y salta de signo |
| Estimaciones muy sensibles | quitar una observación o una variable las cambia mucho |
| Intervalos de confianza enormes | son proporcionales al error estándar |

**La tercera fila es el síntoma característico**, y es la que hay que reconocer: si
$F$ rechaza y ninguna $t$ lo hace, la primera sospecha es multicolinealidad.

Y algo que la multicolinealidad **no** estropea: la **predicción**. Si los
regresores mantienen la misma relación entre sí en el período que se predice, el
modelo predice bien aunque no se pueda decir cuánto aporta cada variable. Lo que se
pierde es la interpretación de los coeficientes, no el ajuste.

## Detección

Ningún procedimiento la detecta con un sí o un no, porque es cuestión de grado.

### Matriz de correlaciones

Correlaciones altas entre pares de regresores, por encima de $0{,}8$, son un indicio.
**No es concluyente**: puede haber multicolinealidad grave con todas las
correlaciones simples moderadas, si la relación involucra a tres o más variables a
la vez.

### Factor de inflación de la varianza

$$\text{FIV}_j = \frac{1}{1 - R_j^2}, \qquad
\text{Tolerancia}_j = 1 - R_j^2$$

| FIV | Lectura habitual |
| ---: | --- |
| 1 | ninguna relación con las demás |
| 5 | atención |
| 10 | problema serio, $R_j^2 = 0{,}9$ |

Es el procedimiento más informativo porque **identifica qué variable** está
implicada, y no solo que hay un problema. El umbral de 10 es convencional, no una
frontera con significado estadístico.

### Regresiones auxiliares

Regresar cada $X_j$ sobre las demás y contrastar su significación conjunta con la
$F$. Es lo mismo que el FIV, con un contraste formal encima.

### Número de condición

$$\kappa = \sqrt{\frac{\lambda_{\max}}{\lambda_{\min}}}$$

con $\lambda$ los valores propios de $\mathbf{X}'\mathbf{X}$. Valores de $\kappa$
entre 10 y 30 indican multicolinealidad moderada, y por encima de 30, grave.

Las variables deben estar tipificadas antes de calcularlo: si no, un simple cambio
de unidades cambia el diagnóstico, que es justo lo que no debe pasar.

## Soluciones

Ordenadas de más a menos recomendables:

### No hacer nada

Es una respuesta legítima y a menudo la mejor. Si el objetivo es predecir, si los
coeficientes que interesan están bien estimados, o si las variables afectadas son
controles cuyo valor no se va a interpretar, la multicolinealidad no impide nada.

### Ampliar la muestra

Es la solución de fondo: el problema es falta de información, y más datos la
aportan. Con $n$ mayor, $S_{jj}$ crece y la varianza baja.

Su límite es evidente: los datos económicos suelen no estar disponibles, y en series
temporales alargar la muestra hacia atrás puede introducir el cambio estructural del
tema 3.

### Eliminar variables

Quitar una de las variables correlacionadas resuelve el síntoma **y puede introducir
sesgo por variable omitida**, que es peor: se cambia un problema de varianza por uno
de sesgo, y el sesgo no se ve en los resultados.

Solo es aceptable si la teoría admite que esa variable sobre. Eliminar por criterio
estadístico una variable que la teoría exige es sustituir un modelo mal estimado por
un modelo mal especificado.

### Transformar las variables

- **Primeras diferencias** en series temporales: $\Delta X_t = X_t - X_{t-1}$ elimina
  la tendencia común, que es la causa más frecuente. A cambio puede introducir
  autocorrelación, que es el tema 6.
- **Cocientes**: usar magnitudes por habitante o por unidad de producto en vez de los
  totales.
- **Combinar variables** en un índice, cuando miden lo mismo.
- **Centrar** antes de elevar al cuadrado: $X$ y $X^2$ dejan de estar tan
  correlacionados si se usa $(X - \bar{X})^2$.

### Regresión contraída

$$\hat{\boldsymbol{\beta}}_{\text{ridge}} = (\mathbf{X}'\mathbf{X} + \lambda \mathbf{I})^{-1}\mathbf{X}'\mathbf{y}$$

Sumar $\lambda$ a la diagonal hace la matriz invertible y estable. El estimador es
**sesgado**, y a cambio su varianza es mucho menor; con un $\lambda$ adecuado su
error cuadrático medio es menor que el de mínimos cuadrados.

Es el caso que muestra el alcance real de Gauss-Markov del tema 2: el teorema
garantiza mínima varianza **dentro de los insesgados**, y saliendo de esa clase se
puede hacer mejor. El precio es elegir $\lambda$, que no tiene una regla cerrada.

### Componentes principales

Sustituir los regresores por combinaciones lineales suyas ortogonales entre sí, con
lo que la multicolinealidad desaparece por construcción. El inconveniente es que las
componentes no tienen interpretación económica, así que se pierde exactamente lo que
la multicolinealidad estropeaba.

## Un procedimiento de trabajo

1. Calcular la matriz de correlaciones y los FIV.
2. Si algún FIV pasa de 10, identificar qué variables lo producen.
3. Preguntarse **para qué es el modelo**: si es para predecir, seguir.
4. Si es para interpretar, intentar ampliar la muestra o transformar variables.
5. Eliminar una variable solo si la teoría lo permite, y decirlo.
6. Documentar el diagnóstico en el informe, aunque se decida no hacer nada.

El paso 6 no es burocracia: unos coeficientes con signo raro y unas $t$ pequeñas se
interpretan de una manera si hay multicolinealidad y de otra si no, y quien lea el
informe necesita saberlo.

El tratamiento de la multicolinealidad y sus diagnósticos sigue a
\cite{gujarati2010} y \cite{novales2000}; el número de condición y la regresión
contraída, a \cite{greene1999} y \cite{maddala2001}; los ejercicios de aplicación,
a \cite{garcia2017}.
