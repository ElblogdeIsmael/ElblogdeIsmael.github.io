# Aspectos avanzados en metaheurísticas

Tema 7 del programa. El equilibrio entre diversidad y convergencia, qué hacer
cuando no basta una sola solución, y qué aporta el paralelismo.

## Diversidad frente a convergencia

Es el eje del tema 1, tratado ahora con instrumentos.

Una población pierde diversidad de forma natural: la selección premia a los mejores,
sus descendientes se parecen a ellos y con las generaciones todos convergen al mismo
punto. Si eso ocurre **antes** de que el algoritmo haya explorado lo suficiente, se
llama **convergencia prematura** y el resultado es un óptimo local mediocre.

### Cómo se mide

No se puede controlar lo que no se mide, y la diversidad hay que medirla en cada
generación:

| Medida | Cómo se calcula | Cuándo |
| --- | --- | --- |
| Distancia media entre pares | media de $d(s_i, s_j)$ sobre todos los pares | general, coste $O(\mu^2)$ |
| Distancia media al centroide | media de $d(s_i, \bar{s})$ | continuo, coste $O(\mu)$ |
| Entropía por gen | entropía de la distribución de valores en cada posición | binaria y entera |
| Varianza de la aptitud | varianza de $f$ sobre la población | barata, y engañosa |

La última es la más fácil y la menos fiable: **soluciones muy distintas pueden tener
la misma aptitud**. Una varianza de aptitud nula no prueba que la población haya
colapsado, y una alta no prueba que no. Cuando la medida importa, se mide sobre el
genotipo.

### Mecanismos de control

| Mecanismo | Qué hace | Coste |
| --- | --- | --- |
| Elitismo moderado | conserva solo al mejor, no al 10 % | ninguno |
| Reemplazo del más parecido | evita duplicados en la población | una distancia por hijo |
| Compartición de aptitud | penaliza a los individuos con muchos vecinos | $O(\mu^2)$ |
| Aclarado | dentro de un radio, solo los mejores conservan su aptitud | $O(\mu^2)$ |
| Reinicio | se regenera la población conservando a los mejores | una generación |
| Mutación adaptativa | sube la probabilidad de mutación al estancarse | ninguno |

La **compartición de aptitud** divide la aptitud de cada individuo por el número de
vecinos dentro de un radio $\sigma_{\text{share}}$:

$$f'(s_i) = \frac{f(s_i)}{\sum_j \text{sh}(d(s_i, s_j))},
\qquad
\text{sh}(d) = \begin{cases}
1 - (d/\sigma_{\text{share}})^{\gamma} & d < \sigma_{\text{share}} \\
0 & \text{en otro caso}
\end{cases}$$

Un individuo rodeado de copias suyas ve su aptitud dividida entre muchos, así que la
selección deja de favorecerlo. El resultado es que la población se reparte entre los
picos del paisaje en vez de amontonarse en uno. El precio es fijar
$\sigma_{\text{share}}$, que exige saber a qué distancia están los picos, que es
justo lo que no se sabe.

## Modelos evolutivos con equilibrio explícito

Algunos modelos no controlan la diversidad con un añadido, sino que la estructuran
en el propio esquema.

**Modelo de islas.** La población se parte en subpoblaciones que evolucionan
aisladas y cada cierto número de generaciones intercambian individuos. Cada isla
converge a su propia región, y la migración transfiere lo bueno sin homogeneizarlo
todo.

| Parámetro | Qué controla |
| --- | --- |
| Número de islas | cuántas regiones se exploran a la vez |
| Frecuencia de migración | cada cuántas generaciones se intercambia |
| Tasa de migración | cuántos individuos viajan |
| Topología | qué isla manda a cuál: anillo, malla, completa |

Migrar demasiado a menudo convierte el conjunto en una sola población grande y anula
la ventaja. Migrar demasiado poco deja islas independientes que no cooperan.

**Modelo celular.** Cada individuo ocupa una posición en una malla y solo se cruza
con sus vecinos inmediatos. La información buena se propaga por difusión, y esa
lentitud es la que sostiene la diversidad. Es la **estructuración espacial** frente
a la temporal: en vez de repartir el presupuesto a lo largo del tiempo —enfriar,
decrecer la inercia—, se reparte en el espacio de la población.

## Múltiples soluciones: nichos

Hasta aquí el objetivo era una solución. Hay casos en que hacen falta varias:

- El problema tiene **varios óptimos globales equivalentes** y conviene conocerlos
  todos, porque el criterio real de elección no está en $f$.
- Se busca **robustez**: una solución algo peor pero en una región amplia aguanta
  mejor los cambios que otra óptima en un pico estrecho.
- El problema es **multiobjetivo** y no hay un único óptimo, sino un frente.

Las técnicas de nichos mantienen subpoblaciones en picos distintos:

| Técnica | Cómo |
| --- | --- |
| Compartición de aptitud | penaliza la concentración, como arriba |
| Aclarado | dentro de un radio, solo los $k$ mejores conservan su aptitud |
| Apiñamiento determinista | el hijo compite con el padre más parecido, no con el peor |
| Especiación | la población se agrupa y cada grupo evoluciona por separado |

El **apiñamiento determinista** es el más simple y de los más efectivos: no necesita
radio ni ningún parámetro nuevo, solo una distancia.

### Optimización multiobjetivo

Con varios objetivos en conflicto no existe una solución mejor que todas. Se compara
por **dominancia**: $a$ domina a $b$ si $a$ es al menos igual de bueno en todos los
objetivos y estrictamente mejor en alguno. Las soluciones no dominadas por ninguna
otra forman el **frente de Pareto**.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=9.6cm, height=5.6cm,
  xlabel={$f_1$ (minimizar)},
  ylabel={$f_2$ (minimizar)},
  xmin=0, xmax=11.5, ymin=0, ymax=11.5,
  xtick=\empty, ytick=\empty,
  legend pos=north east,
  legend style={font=\small, draw=none, fill=none}
]
\addplot[only marks, mark=*, mark size=1.7pt] coordinates {
  (1.2,8.6) (1.9,6.4) (2.9,4.8) (4.2,3.6) (5.8,2.8) (7.6,2.2) (9.0,1.9)
};
\addlegendentry{frente}
\addplot[only marks, mark=o, mark size=1.9pt] coordinates {
  (3.4,7.4) (5.1,5.9) (6.8,4.7) (4.6,8.2) (7.9,6.3) (2.8,8.9)
};
\addlegendentry{dominadas}
\end{axis}
\end{tikzpicture}
\end{center}
```

Un algoritmo multiobjetivo persigue dos cosas a la vez: acercarse al frente y
**repartirse a lo largo de él**, porque un frente concentrado en un extremo no le
sirve a quien tiene que elegir. NSGA-II lo consigue ordenando por niveles de
dominancia y desempatando por distancia de apiñamiento, que premia a las soluciones
en zonas poco pobladas del frente.

## Nuevos algoritmos bioinspirados

En las últimas dos décadas se han publicado decenas de metaheurísticas nuevas con
metáforas de lo más variado. Conviene mirarlas con criterio:

- **La metáfora no es el algoritmo.** Bajo la analogía casi siempre hay una
  población, un operador de perturbación y una selección. Muchas propuestas resultan
  ser, tras quitar el vocabulario, variantes de la evolución diferencial o de las
  nubes de partículas.
- **La comparación tiene que ser justa**: mismo número de evaluaciones, mismas
  instancias, varias semillas y contraste estadístico. Comparar por iteraciones en
  vez de por evaluaciones favorece a quien más hace por iteración.
- **Contra algoritmos actuales.** Batir a un genético de los años noventa no dice
  nada; hay que compararse con CMA-ES o con evolución diferencial bien ajustada.

Es la aplicación práctica del teorema de no hay comida gratis: si un algoritmo
nuevo gana en todas partes, casi siempre lo que falla es el protocolo experimental.

## Metaheurísticas paralelas

El paralelismo aporta dos cosas distintas, y conviene no mezclarlas: **acelerar** lo
mismo, o **buscar mejor**.

| Modelo | Qué se reparte | Qué se gana |
| --- | --- | --- |
| Paralelización de la evaluación | las evaluaciones de la función objetivo | velocidad; el algoritmo no cambia |
| Paralelización del entorno | los vecinos de una búsqueda local | velocidad |
| Modelo de islas | subpoblaciones independientes | velocidad **y** calidad |
| Modelo celular | la malla de individuos | velocidad **y** calidad |
| Ejecuciones independientes | varias corridas con semillas distintas | robustez frente al azar |

Las dos primeras son paralelismo puro: el resultado es el mismo que en secuencial,
solo que antes. Compensan cuando evaluar es caro, que es el caso habitual en
problemas reales —una simulación, un entrenamiento— y ahí la ganancia es casi
lineal en el número de procesadores.

Las dos siguientes **cambian el algoritmo**, y por eso pueden dar mejores soluciones
que la versión secuencial con el mismo número total de evaluaciones. Es la
estructuración espacial frente a la temporal otra vez: repartir la población en el
espacio produce un comportamiento que ninguna planificación temporal reproduce.

La medida de referencia es la aceleración $S_p = T_1 / T_p$ con $p$ procesadores. Su
límite lo pone la ley de Amdahl: si una fracción $\beta$ del algoritmo es
intrínsecamente secuencial, la aceleración no pasa de $1/\beta$ por muchos
procesadores que se añadan. En el modelo de islas la parte secuencial es la
migración, así que migrar poco es bueno también por esta razón.

El tratamiento completo del paralelismo en metaheurísticas está en \cite{alba2005},
y los modelos de diversidad y multiobjetivo en \cite{eiben2015} y \cite{talbi2009}.
