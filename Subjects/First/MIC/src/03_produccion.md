# La producción

Capítulo 3 del programa. La tecnología de la producción, el corto y el largo plazo, los
rendimientos de escala y el cambio tecnológico.

## La tecnología

```{=latex}
\begin{definicion}[Función de producción]
$$Q = f(K, L)$$
La cantidad máxima de producto que se puede obtener con cada combinación de capital y
trabajo, dada la tecnología disponible.
\end{definicion}
```

La palabra **máxima** es la que carga con el supuesto: la función describe la frontera
de lo técnicamente eficiente, no lo que una empresa concreta consigue.

| Corto plazo | Largo plazo |
| --- | --- |
| Al menos un factor es fijo | todos son variables |
| Normalmente $K$ está dado | la empresa elige $K$ y $L$ |
| Se estudian los rendimientos de un factor | los rendimientos de escala |

La distinción **no es cronológica**: el largo plazo es el horizonte en el que todos los
factores se pueden ajustar, y cuánto tiempo sea eso depende del sector. Para una
consultora son meses y para una central eléctrica, años.

## La producción a corto plazo

Con $K = \bar{K}$ fijo:

| Concepto | Definición |
| --- | --- |
| Producto total | $PT = f(\bar{K}, L)$ |
| Producto medio | $PMe_L = Q/L$ |
| Producto marginal | $\Pmg_L = \partial Q/\partial L$ |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.4cm, height=5.4cm, axis lines=left,
  xlabel={$L$}, ylabel={},
  xmin=0, xmax=10, ymin=0, ymax=13,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=140,
  legend style={font=\scriptsize, draw=none, at={(0.99,0.98)}, anchor=north east},
]
\addplot[thick, domain=0:9.5] {-0.06*x^3 + 0.75*x^2 + 1.2*x};
\addlegendentry{producto total}
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{proposicion}[Ley de los rendimientos marginales decrecientes]
Al aumentar la cantidad de un factor variable manteniendo fijos los demás, a partir de
cierto punto el producto marginal de ese factor disminuye.
\end{proposicion}
```

**No es una ley económica sino técnica**, y su causa es que el factor fijo se reparte
entre cada vez más unidades del variable: la décima persona en una cocina para tres
estorba más que aporta.

Dos relaciones geométricas que se usan constantemente:

| Relación | Cuándo |
| --- | --- |
| $\Pmg > PMe$ | el medio está creciendo |
| $\Pmg < PMe$ | el medio está decreciendo |
| $\Pmg = PMe$ | el medio está en su máximo |

Es el mismo argumento que con las notas de un examen: una nota por encima de la media
sube la media.

## La producción a largo plazo

Con los dos factores variables, la tecnología se representa con **isocuantas**: curvas
que unen las combinaciones de $K$ y $L$ que producen la misma cantidad.

| Propiedad | Analogía con el consumidor |
| --- | --- |
| No se cortan | como las curvas de indiferencia |
| Pendiente negativa | ídem |
| Convexas hacia el origen | ídem |
| Están **cardinalmente etiquetadas** | aquí sí: la cantidad producida es medible |

La última fila marca la diferencia importante: **la producción es cardinal y la utilidad
ordinal**. Doblar la producción significa algo; doblar la utilidad no.

$$\RMST_{LK} = -\frac{dK}{dL}\bigg|_{Q=\text{cte}} = \frac{\Pmg_L}{\Pmg_K}$$

La relación marginal de sustitución técnica indica cuánto capital se puede retirar al
añadir una unidad de trabajo sin cambiar la producción.

| Tecnología | Función | Isocuantas |
| --- | --- | --- |
| Cobb-Douglas | $Q = AK^{\alpha}L^{\beta}$ | convexas, sustitución suave |
| Sustitutivos perfectos | $Q = aK+bL$ | rectas |
| Proporciones fijas (Leontief) | $Q = \min(aK, bL)$ | ángulos rectos |

## Rendimientos de escala

Multiplicando **todos** los factores por $\lambda > 1$:

| Si $f(\lambda K,\lambda L)$ es | Rendimientos | Causa habitual |
| --- | --- | --- |
| $> \lambda f(K,L)$ | crecientes | especialización, indivisibilidades |
| $= \lambda f(K,L)$ | constantes | replicación de la planta |
| $< \lambda f(K,L)$ | decrecientes | costes de coordinación y gestión |

Para una Cobb-Douglas, los rendimientos los da la suma de los exponentes:

| $\alpha+\beta$ | Rendimientos |
| --- | --- |
| $>1$ | crecientes |
| $=1$ | constantes |
| $<1$ | decrecientes |

```{=latex}
\begin{anotacion}
Rendimientos de escala y rendimientos marginales decrecientes son cosas
\textbf{distintas}. Los primeros varían todos los factores a la vez y son un concepto de
largo plazo; los segundos varían uno solo con el resto fijo y son de corto plazo. Una
Cobb-Douglas con $\alpha+\beta = 1$ tiene rendimientos constantes de escala y, a la vez,
producto marginal decreciente en cada factor.
\end{anotacion}
```

## Cambio tecnológico

Una mejora tecnológica **desplaza la función de producción**: la misma combinación de
factores rinde más, y las isocuantas se acercan al origen.

| Tipo de progreso | Qué hace |
| --- | --- |
| Neutral (Hicks) | aumenta la productividad de los dos factores por igual |
| Ahorrador de trabajo | aumenta más la productividad del capital |
| Ahorrador de capital | aumenta más la del trabajo |

La distinción importa porque el tipo de progreso decide **cómo se reparte** el aumento
de producción entre los factores, y de ahí el debate recurrente sobre el efecto de la
automatización en el empleo.

```{=latex}
\begin{ejemplo}
$Q = AK^{0{,}3}L^{0{,}5}$. Los exponentes suman 0,8, así que hay rendimientos
decrecientes de escala: doblar los dos factores multiplica la producción por
$2^{0{,}8} = 1{,}74$.

\medskip
Y el producto marginal del trabajo es
$\Pmg_L = 0{,}5\,AK^{0{,}3}L^{-0{,}5}$, decreciente en $L$: la ley de rendimientos
marginales decrecientes se cumple para cada factor por separado.

\medskip
Un aumento de $A$ es progreso técnico neutral: multiplica la producción sin alterar la
$\RMST$, así que la proporción óptima entre capital y trabajo no cambia.
\end{ejemplo}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Una empresa produce con $Q = 20\sqrt{L}$ a corto plazo. Hallar el producto medio y el
marginal del trabajo con $L=25$, y comprobar la relación entre ellos.
\end{ejercicio}

\begin{solucion}
$Q(25) = 100$, así que $PMe = 100/25 = 4$. Y
$\Pmg = 10/\sqrt{L} = 10/5 = 2$.

\medskip
Como $\Pmg < PMe$, el producto medio está decreciendo. En efecto,
$PMe = 20/\sqrt{L}$ es decreciente en todo el dominio, y en esta función el medio y el
marginal nunca se cortan: el máximo del medio estaría en $L\to0$.
\end{solucion}

\begin{ejercicio}
Clasificar los rendimientos de escala de $Q = K + 2L$ y de $Q = K^{0{,}6}L^{0{,}6}$.
\end{ejercicio}

\begin{solucion}
La primera: $f(\lambda K,\lambda L) = \lambda K + 2\lambda L = \lambda f(K,L)$,
rendimientos \textbf{constantes}. Los factores son sustitutivos perfectos y las isocuantas
son rectas.

\medskip
La segunda: $\alpha+\beta = 1{,}2 > 1$, rendimientos \textbf{crecientes}. Doblar los factores
multiplica la producción por $2^{1{,}2} = 2{,}30$.
\end{solucion}

\begin{ejercicio}
Una tecnología es $Q = \min(2K, 3L)$. ¿Cuánto vale la $\RMST$? ¿Qué implica para la
elección de factores?
\end{ejercicio}

\begin{solucion}
Es una tecnología de proporciones fijas: las isocuantas tienen forma de ángulo recto y
la $\RMST$ vale 0 en el tramo horizontal, es infinita en el vertical y no está definida
en el vértice.

\medskip
La empresa producirá siempre en el vértice, con $2K = 3L$, porque cualquier exceso de
un factor es puro desperdicio. Los factores no se pueden sustituir, así que la
proporción entre ellos está fijada por la tecnología y no por los precios.
\end{solucion}
```

La teoría de la producción está desarrollada en \cite{pindyck2018} y \cite{frank2009},
con la exposición introductoria de \cite{krugman2013}.
