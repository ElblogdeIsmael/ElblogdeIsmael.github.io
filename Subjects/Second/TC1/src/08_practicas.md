# Temario práctico

La guía indica que el temario práctico coincide con el teórico: se resuelven ejercicios
a mano y con software estadístico, y **el objetivo es hacer un análisis descriptivo
completo de datos reales** obtenidos de bases de datos públicas.

## De dónde salen los datos

| Fuente | Qué ofrece |
| --- | --- |
| INE | población, IPC, EPA, contabilidad nacional |
| Eurostat | lo mismo comparable entre países de la UE |
| Banco de España | tipos, crédito, balanza de pagos |
| Datos abiertos de ayuntamientos y comunidades | padrón, tráfico, presupuestos |
| Banco Mundial, FMI, OCDE | series internacionales largas |

Lo que se pide antes de calcular nada:

1. **Identificar la unidad de observación**: qué es una fila.
2. Determinar el tipo de cada variable, que decide qué medidas valen.
3. Anotar el periodo y la fuente exacta, para poder rehacer el trabajo.
4. Detectar **datos ausentes** y decidir qué hacer con ellos, diciéndolo.

```{=latex}
\begin{anotacion}
Lo que más falsea un análisis no es un cálculo mal hecho, es un dato mal entendido. Una
serie de «paro registrado» y otra de «tasa de paro EPA» miden cosas distintas y no se
pueden comparar ni encadenar. Leer la definición metodológica de la fuente es parte del
trabajo, no un trámite.
\end{anotacion}
```

## Práctica 1. Análisis descriptivo unidimensional

| Actividad | Qué se obtiene |
| --- | --- |
| Tabla de frecuencias | absolutas, relativas y acumuladas |
| Histograma o diagrama de barras | la forma de la distribución |
| Medidas de posición | media, mediana, moda, cuartiles |
| Medidas de dispersión | recorrido, varianza, desviación típica, $CV$ |
| Medidas de forma | asimetría y curtosis |
| Diagrama de caja | mediana, cuartiles y valores atípicos |

Lo que se pide interpretar, y es donde está la nota:

- **Si media y mediana difieren mucho**, la distribución es asimétrica y la media no
  representa al conjunto. Con datos de renta o de facturación ocurre siempre.
- **Si el coeficiente de variación pasa de 1**, la dispersión es del orden de la propia
  media y hablar de «un valor típico» es engañoso.
- **Qué hacer con los atípicos**: comprobarlos primero —un error de captura se corrige, un
  valor extremo real no se borra— y decir explícitamente qué se ha hecho.

## Práctica 2. Análisis descriptivo bidimensional

| Actividad | Qué se obtiene |
| --- | --- |
| Diagrama de dispersión | la forma de la relación |
| Covarianza y correlación | signo e intensidad de la relación lineal |
| Recta de regresión | el modelo lineal |
| $R^2$ | la bondad del ajuste |
| Análisis de residuos | si el modelo lineal es adecuado |

**El diagrama de dispersión va siempre antes que el coeficiente**, no después. Es la
única forma de detectar que la relación es curva, que hay dos subpoblaciones mezcladas o
que un solo punto extremo está sosteniendo toda la correlación.

El **análisis de residuos** cierra la práctica: se representan los residuos frente a los
valores predichos, y si el modelo es adecuado no debe verse ningún patrón. Una forma de
embudo indica que la dispersión crece con el nivel, y una curva indica que faltaba un
término no lineal.

## Práctica 3. Números índices y deflación

| Actividad | Fuente típica |
| --- | --- |
| Construir un índice simple de una serie propia | cualquier serie del INE |
| Calcular tasas de variación interanual y media | ídem |
| Deflactar una serie nominal con el IPC | salarios, ventas, PIB |
| Enlazar dos series con distinta base | cambios de base del IPC |
| Descomponer la variación por grupos | IPC por divisiones |

El ejercicio que más enseña: **tomar una serie de salarios medios de los últimos veinte
años, deflactarla y comparar las dos curvas.** La nominal sube siempre; la real suele
tener tramos planos y caídas, y esa diferencia es todo el tema 3 en un gráfico.

## Práctica 4. Series cronológicas

| Actividad | Qué se obtiene |
| --- | --- |
| Representar la serie | tendencia y estacionalidad a la vista |
| Media móvil centrada | la tendencia-ciclo |
| Índices estacionales | ajustados a 400 o 1200 |
| Serie desestacionalizada | comparable entre periodos consecutivos |
| Predicción | tendencia extrapolada por índice estacional |

Series con estacionalidad clara y fáciles de conseguir: pernoctaciones hoteleras,
matriculaciones de vehículos, consumo eléctrico, afiliación a la Seguridad Social.

Se pide comparar la predicción con lo que realmente ocurrió, reservando los últimos
periodos de la serie y no usándolos para ajustar. **Predecir sobre datos que se han
usado para ajustar no mide nada.**

## Práctica 5. Probabilidad y distribuciones

| Actividad | Órdenes típicas |
| --- | --- |
| Simular experimentos | generar muestras aleatorias |
| Comprobar la frecuentista | frecuencia relativa frente a probabilidad al crecer $n$ |
| Calcular probabilidades binomiales | función de masa y acumulada |
| Ídem Poisson, hipergeométrica y geométrica | ídem |
| Comprobar aproximaciones | binomial por Poisson, hipergeométrica por binomial |

Los tres experimentos que se piden:

- **Ley de los grandes números**: simular lanzamientos de una moneda y representar la
  frecuencia relativa acumulada frente al número de lanzamientos. Se ve converger a 0,5
  y, sobre todo, se ve cuánto tarda.
- **Comparar binomial y Poisson** para $n$ creciente con $np$ fijo, y medir a partir de
  qué $n$ la diferencia es despreciable.
- **Comprobar el factor de corrección** de la hipergeométrica: calcular la misma
  probabilidad con las dos distribuciones para $n/N$ creciente y ver cuándo deja de
  valer la aproximación.

```{=latex}
\begin{anotacion}
Una simulación con pocas repeticiones no demuestra nada: la variabilidad del propio
experimento domina. Antes de concluir que un resultado simulado contradice la teoría hay
que repetirlo con órdenes de magnitud más de muestras y comprobar si la diferencia
persiste.
\end{anotacion}
```

## Sobre la memoria

Lo que se entrega:

1. Origen de los datos, con la referencia exacta y la fecha de descarga.
2. Descripción de las variables y su tipo.
3. Tablas y gráficos, **numerados y con título**.
4. Cálculos, indicando las fórmulas usadas.
5. **Interpretación**, que es lo que se evalúa.
6. Limitaciones del análisis.

El punto 5 no es repetir los números en palabras. Es responder a qué significa que la
asimetría sea positiva, por qué la media no es representativa, o qué implica un $R^2$ de
0,3 para la predicción que se pretende hacer.

Y el punto 6 distingue una memoria buena: decir que la muestra no es representativa, que
la correlación no implica causalidad, o que la predicción supone que el patrón se
mantiene, es parte del análisis y no una excusa.

El material de las prácticas sigue \cite{amor2016} y \cite{hermoso2016}, con los
conjuntos de problemas de \cite{hermoso2000} y \cite{arnaldos2003}.
