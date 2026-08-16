# Introducción a la econometría

Tema 1 del programa. Qué es la econometría, cómo se construye un modelo y con qué
clase de datos se trabaja.

## Econometría y modelos econométricos

La **econometría** mide relaciones económicas: toma una relación que la teoría
propone, la escribe como un modelo, la estima con datos y contrasta si los datos
la sostienen.

Reúne tres disciplinas, y ninguna basta por su cuenta:

| Disciplina | Qué aporta |
| --- | --- |
| Teoría económica | qué variables se relacionan y en qué sentido |
| Estadística y probabilidad | cómo estimar y cómo medir la incertidumbre |
| Datos económicos | la evidencia sobre la que se estima |

La teoría económica dice que el consumo depende de la renta y no dice cuánto. La
econometría cuantifica ese *cuánto* y dice además con qué margen de error.

### Modelo económico y modelo econométrico

Un **modelo económico** es una relación exacta entre variables:

$$C = f(R)$$

Un **modelo econométrico** añade una perturbación aleatoria y una forma funcional
concreta:

$$C_i = \beta_1 + \beta_2 R_i + u_i$$

La diferencia está en $u_i$, y es toda la diferencia:

| | Modelo económico | Modelo econométrico |
| --- | --- | --- |
| Relación | exacta | estocástica |
| Ajuste a los datos | perfecto por construcción | imperfecto, y el residuo se mide |
| Contrastable | no | sí |

### La perturbación

$u_i$ recoge todo lo que afecta a $C_i$ y no está en el modelo. Sus fuentes, y
conviene distinguirlas porque no todas se corrigen igual:

| Fuente | Qué es |
| --- | --- |
| Variables omitidas | factores que influyen y no se han incluido |
| Errores de medida | la variable observada no es exactamente la teórica |
| Forma funcional incorrecta | la relación no es lineal y se ha supuesto que sí |
| Comportamiento aleatorio | las decisiones humanas no son deterministas |

La primera es la peligrosa. Si una variable omitida está correlacionada con las
incluidas, la perturbación también lo está, y el estimador del tema 2 deja de ser
insesgado. Es el **sesgo por variable omitida**, y ningún contraste de los temas 4
a 6 lo detecta: hay que pensarlo al especificar.

## Fases del método econométrico

| Fase | Qué se hace |
| --- | --- |
| 1 · Especificación | elegir variables, forma funcional y estructura de la perturbación |
| 2 · Estimación | calcular los parámetros a partir de la muestra |
| 3 · Validación | contrastar hipótesis y comprobar los supuestos |
| 4 · Explotación | predecir, simular políticas, interpretar |

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, >=stealth, node distance=13mm,
  caja/.style={draw, minimum height=0.9cm, minimum width=2.1cm, align=center}]
\node[caja] (e) {especifi-\\cación};
\node[caja, right=of e] (s) {estimación};
\node[caja, right=of s] (v) {validación};
\node[caja, right=of v] (x) {explotación};
\draw[->, thick] (e) -- (s);
\draw[->, thick] (s) -- (v);
\draw[->, thick] (v) -- (x);
\draw[->, thick] (v.south) -- ++(0,-0.8) -| node[below, pos=0.25, font=\scriptsize]
  {si los supuestos fallan} (e.south);
\end{tikzpicture}
\end{center}
```

El proceso **no es lineal**: la validación devuelve a la especificación cuando los
contrastes rechazan un supuesto, y ese ciclo es donde se pasa la mayor parte del
trabajo.

Y una advertencia sobre ese ciclo: cuantas más especificaciones se prueban sobre la
misma muestra, más fácil es encontrar una que pase todos los contrastes por azar.
Un modelo elegido tras cien pruebas no tiene los niveles de significación que dice
tener. La defensa es que la especificación la guíe la teoría, no la búsqueda del
mejor ajuste.

## Componentes de un modelo econométrico

| Componente | Notación | Qué es |
| --- | --- | --- |
| Variable endógena | $Y$ | lo que el modelo explica |
| Variables exógenas | $X_2, \dots, X_k$ | lo que explica |
| Parámetros | $\beta_1, \dots, \beta_k$ | lo que se estima |
| Perturbación | $u$ | lo no observable |

El modelo lineal general con $k$ regresores y $n$ observaciones:

$$Y_i = \beta_1 + \beta_2 X_{2i} + \dots + \beta_k X_{ki} + u_i,
\qquad i = 1, \dots, n$$

Y en forma matricial, que es como se trabaja en los temas siguientes:

$$\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \mathbf{u}$$

con $\mathbf{y}$ de orden $n \times 1$, $\mathbf{X}$ de orden $n \times k$ —su
primera columna de unos, para el término independiente—, $\boldsymbol{\beta}$ de
orden $k \times 1$ y $\mathbf{u}$ de orden $n \times 1$.

### Interpretación de los parámetros

$\beta_j$ es el efecto sobre $Y$ de aumentar $X_j$ en una unidad **manteniendo
constantes las demás variables del modelo**. Esa cláusula es lo que distingue el
efecto parcial de la correlación simple, y es la razón de estimar con todas las
variables a la vez en vez de una a una.

### Formas funcionales

El modelo es lineal **en los parámetros**, no necesariamente en las variables. Eso
deja sitio a relaciones no lineales:

| Forma | Modelo | Interpretación de $\beta_2$ |
| --- | --- | --- |
| Lineal | $Y = \beta_1 + \beta_2 X$ | variación de $Y$ por unidad de $X$ |
| Log-log | $\ln Y = \beta_1 + \beta_2 \ln X$ | elasticidad: variación porcentual por variación porcentual |
| Log-lineal | $\ln Y = \beta_1 + \beta_2 X$ | variación porcentual de $Y$ por unidad de $X$ |
| Lineal-log | $Y = \beta_1 + \beta_2 \ln X$ | variación de $Y$ por variación porcentual de $X$ |
| Cuadrática | $Y = \beta_1 + \beta_2 X + \beta_3 X^2$ | el efecto marginal es $\beta_2 + 2\beta_3 X$ |

La **log-log** es la más usada en economía porque su parámetro es directamente una
elasticidad, que es la magnitud con la que la teoría suele razonar.

La **cuadrática** es la primera en la que el efecto de $X$ depende del propio $X$.
Ahí no se puede leer $\beta_2$ como el efecto: hay que derivar. Y el punto donde el
efecto cambia de signo es $X^* = -\beta_2 / (2\beta_3)$.

Lo que **no** se puede tratar así es un modelo no lineal en los parámetros, como
$Y = \beta_1 X^{\beta_2} + u$: ahí no hay transformación que lo linealice y hacen
falta métodos de estimación distintos.

## Naturaleza de la información

| Tipo de datos | Qué es | Problema característico |
| --- | --- | --- |
| Serie temporal | una unidad observada a lo largo del tiempo | autocorrelación (tema 6) |
| Sección cruzada | muchas unidades en un mismo momento | heteroscedasticidad (tema 5) |
| Datos de panel | muchas unidades a lo largo del tiempo | los dos, y la heterogeneidad no observable |

**La correspondencia entre el tipo de datos y el problema no es casual**, y ordena
la segunda mitad del temario. En una serie temporal, lo que ocurre en un periodo
arrastra al siguiente, así que las perturbaciones están correlacionadas entre sí.
En una sección cruzada, unidades de tamaños muy distintos —empresas, hogares,
países— tienen dispersiones muy distintas, y de ahí la varianza no constante.

### Cualidades de los datos

| Cualidad | Qué significa |
| --- | --- |
| Escala | nominal, ordinal, de intervalo o de razón |
| Frecuencia | anual, trimestral, mensual, diaria |
| Fuente | primaria, recogida por el investigador; secundaria, publicada |
| Precios | corrientes o constantes |

Dos cuidados que cambian los resultados y no dan ningún aviso:

- **Trabajar con precios corrientes en una serie larga** mete la inflación dentro
  del parámetro estimado, que deja de medir lo que se pretendía.
- **Agregar** oculta el comportamiento individual. Una relación que se cumple entre
  agregados puede no cumplirse para ninguna unidad, y al revés.

### Variables cualitativas

Se incorporan con **variables ficticias**, que valen 1 si se da la característica y
0 si no. Con $m$ categorías se incluyen $m-1$ ficticias, y la que se deja fuera es
la de referencia: su efecto va dentro del término independiente.

Incluir las $m$ junto con el término independiente produce **multicolinealidad
exacta** —las ficticias suman exactamente la columna de unos— y el modelo no se
puede estimar. Es la trampa de las ficticias, y es el caso extremo del tema 4.

El planteamiento del método econométrico y la naturaleza de los datos siguen a
\cite{gujarati2010} y \cite{wooldridge2010}; el tratamiento de las formas
funcionales, también a \cite{novales2000} y \cite{stock2012}.
