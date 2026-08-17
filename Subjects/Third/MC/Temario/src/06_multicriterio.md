# Decisiones multicriterio

Tema 6 del programa. Elegir entre un conjunto finito de alternativas cuando hay
varios criterios que no apuntan en la misma dirección.

## La teoría de la decisión multicriterio discreta

El tema 5 suponía un solo criterio: se maximiza el beneficio, o se minimiza el coste.
Casi ninguna decisión real es así. Comprar un vehículo, elegir un proveedor, escoger
la localización de una planta: en todos hay precio, calidad, plazo y riesgo, y lo que
mejora uno empeora otro.

**Con varios criterios no existe una alternativa mejor que todas.** Existen las que
no son peores que ninguna, y una elección que depende de las preferencias del
decisor.

### Elementos

| Elemento | Notación |
| --- | --- |
| Alternativas | $a_1, \dots, a_m$, un conjunto finito |
| Criterios | $c_1, \dots, c_n$ |
| Evaluaciones | $x_{ij}$: valor de la alternativa $i$ en el criterio $j$ |
| Pesos | $w_1, \dots, w_n$, con $\sum_j w_j = 1$ |

La **matriz de decisión** es la misma estructura del tema 5, y las columnas
significan otra cosa: allí eran estados que podían ocurrir, aquí son criterios que se
valoran a la vez. Esa diferencia es la que hace que aquí no haya probabilidades ni
valor esperado.

### Discreto y continuo

| | Multicriterio discreto (tema 6) | Multiobjetivo continuo (tema 8) |
| --- | --- | --- |
| Alternativas | un conjunto finito, ya dado | una región factible continua |
| Qué se hace | ordenarlas o elegir la mejor | generar soluciones eficientes |
| Herramientas | MAUT, PROMETHEE, AHP | programación por metas y por compromiso |

Es la distinción que el tema 1 avisaba de no confundir.

## Preparación de los datos

### Normalización

Los criterios vienen en unidades distintas —euros, kilómetros, puntuaciones— y no se
pueden sumar sin normalizar.

| Método | Fórmula |
| --- | --- |
| Por el máximo | $r_{ij} = x_{ij} / \max_i x_{ij}$ |
| Por el rango | $r_{ij} = (x_{ij} - \min_i x_{ij}) / (\max_i x_{ij} - \min_i x_{ij})$ |
| Por la suma | $r_{ij} = x_{ij} / \sum_i x_{ij}$ |
| Euclídea | $r_{ij} = x_{ij} / \sqrt{\sum_i x_{ij}^2}$ |

**El método elegido puede cambiar el resultado final**, y por eso hay que declararlo.
No es un paso técnico neutro.

Los criterios que se minimizan —coste, tiempo— se convierten en criterios a maximizar
cambiando el signo o tomando $1 - r_{ij}$.

### Pesos

Cuánto importa cada criterio. Formas de obtenerlos:

| Método | Cómo |
| --- | --- |
| Asignación directa | el decisor los da |
| Ordenación | se ordenan los criterios y se traduce el orden a pesos |
| Comparación por pares | se comparan de dos en dos; es lo que hace AHP |
| Entropía | se derivan de la dispersión de los datos, sin decisor |

## Dominancia y eficiencia

Antes de aplicar ningún método se puede cribar. La alternativa $a$ **domina** a $b$
si es al menos igual de buena en todos los criterios y estrictamente mejor en alguno.

Las **alternativas dominadas se descartan**: ningún decisor razonable las elegiría.
Las que quedan forman el conjunto eficiente, y ahí ya no hay criterio objetivo que
las ordene.

## MAUT

Teoría de la utilidad multiatributo. Construye una **función de utilidad** que
resume todos los criterios en un número.

$$U(a_i) = \sum_{j=1}^{n} w_j\, u_j(x_{ij})$$

con $u_j$ la utilidad parcial del criterio $j$, normalizada entre 0 y 1. Se elige la
alternativa de mayor $U$.

Las funciones $u_j$ recogen la actitud del decisor ante cada criterio, igual que la
utilidad del tema 5: cóncava si la mejora marginal decrece —los primeros euros de
ahorro valen más que los últimos—, lineal si es proporcional.

**La forma aditiva exige independencia entre criterios**, y es su condición más
exigente. Si dos criterios interaccionan —la calidad importa más cuanto mayor es el
precio— la suma ponderada no representa las preferencias y hace falta una forma
multiplicativa.

| Ventajas | Inconvenientes |
| --- | --- |
| da un valor y una ordenación completa | exige construir las utilidades parciales |
| base teórica sólida | supone independencia entre criterios |
| fácil de comunicar | compensa totalmente: un criterio muy malo se tapa con otros buenos |

La última es lo que se llama **compensación total**, y no siempre es aceptable: un
proveedor con un plazo inadmisible no se salva por ser barato.

## PROMETHEE

Método de superación. En vez de agregar en una utilidad, **compara las alternativas
por pares** y mide cuánto supera cada una a las demás.

| Paso | Qué se hace |
| --- | --- |
| 1 | para cada par $(a,b)$ y criterio $j$, calcular la diferencia $d_j = x_{aj} - x_{bj}$ |
| 2 | aplicar una **función de preferencia** $P_j(d)$, entre 0 y 1 |
| 3 | agregar con los pesos: $\pi(a,b) = \sum_j w_j P_j(d_j)$ |
| 4 | calcular los flujos de superación |

Los flujos:

$$\phi^+(a) = \frac{1}{m-1}\sum_{b \ne a} \pi(a,b),
\qquad
\phi^-(a) = \frac{1}{m-1}\sum_{b \ne a} \pi(b,a)$$

$$\phi(a) = \phi^+(a) - \phi^-(a)$$

- $\phi^+$ mide cuánto supera $a$ a las demás: su fuerza.
- $\phi^-$ mide cuánto la superan a ella: su debilidad.
- $\phi$ es el flujo neto, y ordena de mayor a menor.

**PROMETHEE I** ordena solo parcialmente, con $\phi^+$ y $\phi^-$ por separado, y
admite que dos alternativas sean incomparables. **PROMETHEE II** usa el flujo neto y
ordena todas, a costa de forzar una comparación que los datos no sostienen.

Lo característico del método son las **funciones de preferencia**: permiten declarar
un umbral de indiferencia —diferencias pequeñas que no cuentan— y uno de preferencia
estricta. Con ellas se evita que una diferencia de un euro decida entre dos ofertas,
que es lo que ocurre con una suma ponderada.

Y su rasgo de fondo: **no compensa del todo**. Una alternativa mala en un criterio
recibe una superación negativa que las demás no borran por completo.

## AHP

Proceso analítico jerárquico. Su aportación es **cómo obtener los pesos**, y lo hace
comparando de dos en dos.

### La jerarquía

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, level distance=12mm,
  level 1/.style={sibling distance=27mm},
  level 2/.style={sibling distance=18mm},
  every node/.style={draw, inner sep=3pt}]
\node {objetivo}
  child { node {criterio 1}
    child { node {$a_1$} }
    child { node {$a_2$} } }
  child { node {criterio 2}
    child { node {$a_1$} }
    child { node {$a_2$} } }
  child { node {criterio 3}
    child { node {$a_1$} }
    child { node {$a_2$} } };
\end{tikzpicture}
\end{center}
```

### Comparación por pares

El decisor compara cada par de criterios con la escala de Saaty:

| Valor | Significado |
| ---: | --- |
| 1 | igual importancia |
| 3 | importancia moderada de uno sobre otro |
| 5 | importancia fuerte |
| 7 | importancia muy fuerte |
| 9 | importancia extrema |

Con los pares 2, 4, 6 y 8 como valores intermedios. Se construye la matriz
$\mathbf{A}$ con $a_{ij}$ el juicio y $a_{ji} = 1/a_{ij}$, y los pesos salen del
**vector propio** asociado al mayor valor propio de $\mathbf{A}$.

### Consistencia

Es lo que distingue a AHP: **comprueba si los juicios son coherentes**. Si el decisor
dice que A es 3 veces mejor que B y B es 2 veces mejor que C, debería decir que A es
6 veces mejor que C.

$$\text{IC} = \frac{\lambda_{\max} - n}{n - 1},
\qquad
\text{RC} = \frac{\text{IC}}{\text{IA}}$$

con IA el índice aleatorio tabulado según $n$. Si $\text{RC} < 0{,}1$ los juicios se
consideran aceptables; si no, hay que revisarlos.

Esa comprobación es su ventaja principal: los demás métodos aceptan los pesos que se
les den, sin poder decir si son contradictorios.

| Ventajas | Inconvenientes |
| --- | --- |
| pesos a partir de comparaciones sencillas | $n(n-1)/2$ comparaciones por nivel: crece deprisa |
| mide la consistencia | la escala de 1 a 9 es discreta y arbitraria |
| admite criterios cualitativos | inversión de rango al añadir una alternativa |
| estructura jerárquica clara | |

La **inversión de rango** es su crítica más seria: añadir una alternativa irrelevante
puede cambiar el orden entre las que ya estaban, que es el mismo defecto que el
criterio de Savage del tema 5.

## Comparación

| | MAUT | PROMETHEE | AHP |
| --- | --- | --- | --- |
| Enfoque | utilidad agregada | superación por pares | comparación jerárquica |
| Compensación | total | parcial | total |
| Resultado | valor y orden completo | orden parcial o completo | valor y orden completo |
| Qué exige | funciones de utilidad | umbrales y funciones de preferencia | juicios por pares |
| Punto fuerte | fundamento teórico | umbrales realistas | consistencia comprobada |

**Ningún método es el correcto.** Aplicados a los mismos datos pueden dar órdenes
distintos, y por eso el informe debe declarar qué método, qué normalización y qué
pesos se han usado. Un análisis multicriterio que solo publica el resultado no es
verificable.

Y una comprobación que conviene hacer siempre: repetir el análisis variando los pesos
y ver si el ganador cambia. Si el resultado es estable, la recomendación es sólida;
si depende de la tercera cifra de un peso, no lo es.

El tratamiento de la decisión multicriterio discreta sigue a \cite{romero1993},
\cite{barbaromero1997} y \cite{rios1989}; los métodos de superación y su comparación,
a \cite{ehrgott2005}.
