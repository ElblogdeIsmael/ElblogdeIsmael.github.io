# Análisis descriptivo de series cronológicas

Tema 4 del programa. Definición y representación, componentes y modelos, tendencia
secular, variación estacional, desestacionalización y predicción.

## Definición

```{=latex}
\begin{definicion}[Serie cronológica]
Sucesión de observaciones de una variable ordenadas en el tiempo y tomadas a intervalos
regulares.
\end{definicion}
```

Lo que distingue una serie temporal de un conjunto de datos cualquiera es que **el orden
importa**: las observaciones no son intercambiables ni independientes, y por eso las
técnicas de los temas anteriores no bastan.

| Frecuencia | Periodos por año |
| --- | ---: |
| Anual | 1 |
| Trimestral | 4 |
| Mensual | 12 |
| Semanal | 52 |
| Diaria | 365 |

## Componentes

| Componente | Símbolo | Qué recoge |
| --- | --- | --- |
| Tendencia | $T_t$ | el movimiento de fondo a largo plazo |
| Estacionalidad | $E_t$ | oscilaciones que se repiten cada año |
| Ciclo | $C_t$ | oscilaciones de varios años, sin periodo fijo |
| Irregular | $I_t$ | lo que queda: aleatorio e imprevisible |

En la práctica el ciclo y la tendencia se estudian juntos, porque separarlos exige
series muy largas.

### Los dos modelos

| Modelo | Expresión | Cuándo |
| --- | --- | --- |
| **Aditivo** | $Y_t = T_t + E_t + I_t$ | la oscilación estacional es de tamaño constante |
| **Multiplicativo** | $Y_t = T_t \cdot E_t \cdot I_t$ | la oscilación crece con el nivel de la serie |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=4.8cm, axis lines=left,
  xlabel={$t$}, ylabel={$Y_t$},
  xmin=0, xmax=24, ymin=0, ymax=60,
  tick label style={font=\scriptsize}, label style={font=\small},
  samples=200, domain=0:24,
]
\addplot[thick] {10 + 1.6*x + 0.35*x*sin(deg(x*3.1416/2))};
\addplot[dashed] {10 + 1.6*x};
\node[font=\scriptsize, anchor=west] at (axis cs:14,26) {tendencia};
\end{axis}
\end{tikzpicture}
\end{center}
```

**Cómo se elige el modelo:** se mira la gráfica. Si las oscilaciones alrededor de la
tendencia mantienen su amplitud, aditivo; si se abren en abanico, multiplicativo. Y el
multiplicativo se convierte en aditivo tomando logaritmos, que es lo que se hace cuando
conviene trabajar con un solo esquema.

## Tendencia secular

### Ajuste por mínimos cuadrados

Se ajusta una función del tiempo con la técnica del tema 2, tomando $t$ como variable
explicativa:

| Función | Cuándo |
| --- | --- |
| Lineal, $T_t = a+bt$ | crecimiento constante en unidades |
| Parabólica, $T_t = a+bt+ct^2$ | crecimiento acelerado o desacelerado |
| Exponencial, $T_t = ab^{t}$ | crecimiento a tasa constante |

La exponencial se ajusta tomando logaritmos: $\ln T_t = \ln a + t\ln b$, que es lineal.

**Un truco de cálculo que ahorra mucho:** codificar el tiempo de forma que
$\sum t = 0$. Con un número impar de periodos se numera $\dots,-2,-1,0,1,2,\dots$; con
número par, $\dots,-3,-1,1,3,\dots$. Entonces $a = \bar{y}$ y $b = \sum ty/\sum t^2$, sin
resolver ningún sistema.

### Medias móviles

Suavizan la serie promediando cada observación con sus vecinas:

$$MM_k(t) = \frac{1}{k}\sum_{i=-(k-1)/2}^{(k-1)/2} Y_{t+i}$$

| Elección de $k$ | Efecto |
| --- | --- |
| Igual al número de periodos del año | elimina la estacionalidad por completo |
| Pequeño | suaviza poco, conserva detalle |
| Grande | suaviza mucho, pierde los extremos de la serie |

Con $k$ **par** —trimestres o meses— la media móvil no queda centrada en un periodo, y
hay que **centrarla** promediando dos consecutivas. Es el paso que más se olvida al
desestacionalizar datos trimestrales.

```{=latex}
\begin{anotacion}
Toda media móvil \textbf{pierde datos en los extremos}: con $k=4$ centrada se pierden
dos observaciones al principio y dos al final. Y son justo las del final las que
interesan para predecir, así que la media móvil sirve para describir el pasado y no
para extrapolar.
\end{anotacion}
```

## Variación estacional

El procedimiento estándar, para un modelo multiplicativo con datos trimestrales:

1. Calcular la media móvil centrada de orden 4: es la tendencia-ciclo.
2. Dividir la serie original entre ella: queda estacionalidad más irregular.
3. Promediar esos cocientes por trimestre: se cancela lo irregular y quedan los
   **índices estacionales brutos**.
4. **Ajustarlos** para que sumen 400 —o 1200 con datos mensuales—, multiplicando por el
   factor que corresponda.

```{=latex}
\begin{ejemplo}
Los índices brutos de una serie trimestral son 92, 105, 118 y 81, que suman 396.

\medskip
El factor de ajuste es $400/396 = 1{,}0101$, y los índices definitivos quedan 92,9,
106,1, 119,2 y 81,8, que ya suman 400.

\medskip
Se leen así: el tercer trimestre está un 19,2\,\% por encima de lo que correspondería a
la tendencia, y el cuarto un 18,2\,\% por debajo.
\end{ejemplo}
```

## Desestacionalización

$$Y^{des}_t = \frac{Y_t}{E_t}\times 100 \quad\text{(multiplicativo)}, \qquad
Y^{des}_t = Y_t - E_t \quad\text{(aditivo)}$$

Es la operación que permite comparar periodos consecutivos: sin ella, un descenso del
primer al segundo trimestre puede ser pura estacionalidad y no un empeoramiento.

**Por eso los organismos estadísticos publican las dos series.** El dato bruto sirve
para comparar con el mismo trimestre del año anterior, y el desestacionalizado para
comparar con el trimestre inmediatamente anterior.

## Predicción

Con las componentes estimadas, la predicción se construye recomponiéndolas:

$$\hat{Y}_{t+h} = \hat{T}_{t+h}\times \hat{E}_{t+h}$$

1. Extrapolar la tendencia al periodo futuro con la función ajustada.
2. Multiplicar por el índice estacional del trimestre o mes correspondiente.
3. El componente irregular no se predice: su esperanza es cero, o uno en el modelo
   multiplicativo.

```{=latex}
\begin{ejemplo}
La tendencia ajustada de una serie trimestral es $T_t = 200 + 5t$ con $t$ en
trimestres, y el índice estacional del tercer trimestre es 119,2. Para el trimestre
$t=25$:
$$\hat{Y}_{25} = (200+125)\times\frac{119{,}2}{100} = 325\times1{,}192 = 387{,}4$$
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
Toda predicción por descomposición supone que \textbf{el patrón se mantiene}, y ese
supuesto es tanto más frágil cuanto más lejos se extrapola. Una predicción a un
trimestre es razonable; a cinco años es una extrapolación de la recta con adornos, y las
crisis económicas son justamente los momentos en que el patrón se rompe.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Una serie trimestral tiene valores 100, 120, 140, 90 en el primer año. Calcular la media
móvil centrada de orden 4 correspondiente al tercer trimestre, sabiendo que el primer
trimestre del año siguiente vale 110.
\end{ejercicio}

\begin{solucion}
La media móvil de orden 4 sin centrar de los cuatro primeros valores es
$(100+120+140+90)/4 = 112{,}5$, situada entre el segundo y el tercer trimestre. La
siguiente, con $120,140,90,110$, es $115$, situada entre el tercero y el cuarto.

\medskip
La media móvil \textbf{centrada} en el tercer trimestre es la media de esas dos:
$(112{,}5+115)/2 = 113{,}75$.
\end{solucion}

\begin{ejercicio}
Los índices estacionales de una serie mensual suman 1188. Ajustarlos.
\end{ejercicio}

\begin{solucion}
Con datos mensuales deben sumar 1200, así que el factor es $1200/1188 = 1{,}0101$. Cada
índice se multiplica por él. Un índice bruto de 95 pasa a 95,96.
\end{solucion}

\begin{ejercicio}
El PIB trimestral desestacionalizado cae un 0,3\,\% respecto del trimestre anterior, y
el dato bruto sube un 2\,\%. ¿Cómo se interpreta?
\end{ejercicio}

\begin{solucion}
La subida del 2\,\% es lo que cabía esperar por la estacionalidad y algo más: comparado
con lo que un trimestre así suele aportar, la economía se ha quedado por debajo. La
señal relevante es la del dato desestacionalizado, que indica contracción. Comparar
datos brutos de trimestres consecutivos mezcla la estacionalidad con la evolución real y
es el error más habitual al leer estas cifras.
\end{solucion}
```

El análisis de series cronológicas está desarrollado en \cite{pliego2004} y
\cite{newbold2013}, con problemas resueltos en \cite{hermoso2000} y \cite{amor2016}.
