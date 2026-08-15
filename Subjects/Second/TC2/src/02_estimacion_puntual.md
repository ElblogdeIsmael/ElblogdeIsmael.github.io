# Estimación puntual de parámetros

Tema 2 del programa. El concepto de estimador, los métodos de máxima verosimilitud y de
los momentos, y las propiedades deseables: insesgadez, consistencia, eficiencia y
suficiencia.

## Concepto

```{=latex}
\begin{definicion}[Estimador]
Estadístico $\hat{\theta} = T(X_1,\dots,X_n)$ que se usa para aproximar un parámetro
desconocido $\theta$ de la población.
\end{definicion}
```

Conviene separar dos cosas que la notación confunde:

| Término | Qué es |
| --- | --- |
| **Estimador** | la fórmula, que es una variable aleatoria |
| **Estimación** | el número que sale con una muestra concreta |

Preguntar por la probabilidad de que la estimación acierte no tiene sentido: el número
ya está fijado. Lo que tiene distribución es el estimador, y es de él de lo que se
habla al decir que un método es bueno.

## Método de máxima verosimilitud

La idea: **elegir el valor del parámetro que hace más probable lo observado**.

```{=latex}
\begin{definicion}[Función de verosimilitud]
$$L(\theta) = \prod_{i=1}^{n} f(x_i;\theta)$$
El estimador de máxima verosimilitud es el valor de $\theta$ que la maximiza.
\end{definicion}
```

En la práctica se maximiza el logaritmo, que tiene el mismo máximo y convierte el
producto en suma:

$$\ell(\theta) = \ln L(\theta) = \sum_{i=1}^{n}\ln f(x_i;\theta),
\qquad \frac{d\ell}{d\theta} = 0$$

```{=latex}
\begin{ejemplo}[Bernoulli]
Con $n$ observaciones de las que $k$ son éxitos,
$$L(p) = p^{k}(1-p)^{n-k}, \qquad \ell(p) = k\ln p + (n-k)\ln(1-p)$$
$$\frac{d\ell}{dp} = \frac{k}{p} - \frac{n-k}{1-p} = 0
\ \Longrightarrow\ \hat{p} = \frac{k}{n}$$
La proporción muestral, que es lo que la intuición dictaba. Que el método lo confirme es
lo que da confianza en aplicarlo donde la intuición no llega.
\end{ejemplo}
```

```{=latex}
\begin{ejemplo}[Normal]
$$\hat{\mu} = \bar{X}, \qquad \hat{\sigma}^2 = \frac{1}{n}\sum(X_i-\bar{X})^2 = S^2$$
La media muestral y \textbf{la varianza muestral, no la cuasivarianza}. El estimador de
máxima verosimilitud de $\sigma^2$ es sesgado, lo que muestra que el método no garantiza
insesgadez.
\end{ejemplo}
```

| Ventaja | Inconveniente |
| --- | --- |
| Es consistente y asintóticamente eficiente | puede ser sesgado en muestras pequeñas |
| Invariante: si $\hat\theta$ estima $\theta$, $g(\hat\theta)$ estima $g(\theta)$ | a veces no tiene solución cerrada |
| Usa toda la información de la muestra | exige conocer la forma de la distribución |

**La invarianza es muy cómoda:** si $\hat{\sigma}^2$ es el estimador máximo verosímil de
la varianza, $\sqrt{\hat{\sigma}^2}$ lo es de la desviación típica, sin volver a
derivar nada. La insesgadez, en cambio, no se conserva al transformar.

## Método de los momentos

Igualar los momentos muestrales a los poblacionales y despejar:

$$a_r = \frac{1}{n}\sum X_i^{\,r} \ =\ E[X^r] \qquad r=1,2,\dots$$

Se plantean tantas ecuaciones como parámetros haya.

```{=latex}
\begin{ejemplo}[Uniforme]
Para $U(0,\theta)$, $E[X]=\theta/2$, así que igualando a $\bar{X}$ sale
$\hat{\theta} = 2\bar{X}$.

\medskip
Es un estimador insesgado y \textbf{puede dar valores imposibles}: si la muestra es
$\{1, 2, 9\}$, entonces $\hat\theta = 8$, menor que el 9 observado. El de máxima
verosimilitud, $\hat\theta = \max X_i = 9$, nunca produce esa incoherencia.
\end{ejemplo}
```

| Método | Ventaja | Inconveniente |
| --- | --- | --- |
| Momentos | sencillo, no exige conocer la densidad completa | puede dar estimaciones absurdas |
| Máxima verosimilitud | mejores propiedades asintóticas | más laborioso |

## Propiedades deseables

### Insesgadez

```{=latex}
\begin{definicion}
$\hat\theta$ es insesgado si $E[\hat\theta] = \theta$ para todo valor de $\theta$. En
otro caso, su sesgo es $\Sesgo(\hat\theta) = E[\hat\theta]-\theta$.
\end{definicion}
```

| Estimador | ¿Insesgado? |
| --- | --- |
| $\bar{X}$ para $\mu$ | sí |
| $\hat{p}$ para $p$ | sí |
| $S^2$ para $\sigma^2$ | **no**: $E[S^2] = \frac{n-1}{n}\sigma^2$ |
| $\hat{S}^2$ para $\sigma^2$ | sí |
| $\hat{S}$ para $\sigma$ | **no**, aunque $\hat{S}^2$ sí lo sea |

La última fila recoge la advertencia importante: **la insesgadez no se conserva al
transformar**, porque $E[g(X)]\ne g(E[X])$ salvo que $g$ sea lineal.

### Eficiencia

Entre dos estimadores insesgados, es preferible el de menor varianza. El criterio que
compara todos, sesgados incluidos, es el **error cuadrático medio**:

$$\ECM(\hat\theta) = E\big[(\hat\theta-\theta)^2\big]
= \Var(\hat\theta) + \Sesgo(\hat\theta)^2$$

```{=latex}
\begin{anotacion}
La descomposición del error cuadrático medio explica por qué un estimador sesgado puede
ser preferible: si a cambio del sesgo reduce mucho la varianza, su error total es menor.
Es el compromiso entre sesgo y varianza, y reaparece idéntico en aprendizaje automático.
\end{anotacion}
```

```{=latex}
\begin{teorema}[Cota de Cramér-Rao]
Bajo condiciones de regularidad, todo estimador insesgado cumple
$$\Var(\hat\theta) \ge \frac{1}{n\,I(\theta)}$$
con $I(\theta)$ la información de Fisher. Un estimador que alcanza la cota se llama
eficiente.
\end{teorema}
```

La cota dice que **hay un límite a lo que se puede afinar con $n$ datos**, y no depende
del ingenio del estadístico sino de la propia distribución.

### Consistencia

```{=latex}
\begin{definicion}
$\hat\theta_n$ es consistente si converge en probabilidad a $\theta$:
$$\lim_{n\to\infty} P\big(\lvert \hat\theta_n - \theta\rvert > \varepsilon\big) = 0
\quad \text{para todo } \varepsilon>0$$
\end{definicion}

\begin{proposicion}
Si $E[\hat\theta_n]\to\theta$ y $\Var(\hat\theta_n)\to 0$, entonces $\hat\theta_n$ es
consistente.
\end{proposicion}
```

La condición suficiente es la que se usa en la práctica, y con $\bar{X}$ se comprueba de
inmediato: es insesgado y su varianza $\sigma^2/n$ tiende a cero.

**La consistencia es un requisito mínimo.** Un estimador que no mejora al crecer la
muestra no sirve para nada, por muchas otras propiedades que tenga.

### Suficiencia

```{=latex}
\begin{definicion}
$T$ es suficiente para $\theta$ si la distribución de la muestra condicionada a $T$ no
depende de $\theta$.
\end{definicion}

\begin{teorema}[Factorización de Fisher-Neyman]
$T$ es suficiente si y solo si la verosimilitud se factoriza como
$$L(\theta) = g\big(T(x),\theta\big)\cdot h(x)$$
con $h$ sin depender de $\theta$.
\end{teorema}
```

Un estadístico suficiente **resume la muestra sin perder información** sobre el
parámetro. En la Bernoulli, el número de éxitos es suficiente para $p$: saber además en
qué orden salieron no aporta nada.

El criterio de factorización convierte la comprobación en un ejercicio algebraico:
basta escribir la verosimilitud y ver si el parámetro aparece solo a través de una
función de los datos.

## Resumen de estimadores habituales

| Parámetro | Estimador | Insesgado | Consistente |
| --- | --- | :-: | :-: |
| $\mu$ | $\bar{X}$ | sí | sí |
| $\sigma^2$ | $\hat{S}^2$ | sí | sí |
| $\sigma^2$ | $S^2$ | no | sí |
| $p$ | $\hat{p}=X/n$ | sí | sí |
| $\mu_1-\mu_2$ | $\bar{X}_1-\bar{X}_2$ | sí | sí |

## Ejercicios

```{=latex}
\begin{ejercicio}
Obtener el estimador de máxima verosimilitud del parámetro $\lambda$ de una
distribución de Poisson.
\end{ejercicio}

\begin{solucion}
$$L(\lambda) = \prod \frac{e^{-\lambda}\lambda^{x_i}}{x_i!}, \qquad
\ell(\lambda) = -n\lambda + \left(\sum x_i\right)\ln\lambda - \sum\ln(x_i!)$$
Derivando, $-n + \sum x_i/\lambda = 0$, de donde $\hat\lambda = \bar{X}$. Coincide con
el estimador por el método de los momentos, porque en la Poisson $E[X]=\lambda$.
\end{solucion}

\begin{ejercicio}
Dados dos estimadores insesgados de $\mu$ con $\Var(T_1)=4$ y $\Var(T_2)=9$, ¿cuál se
prefiere? ¿Y si $T_2$ tuviera sesgo 1 y varianza 2?
\end{ejercicio}

\begin{solucion}
En el primer caso, $T_1$: entre insesgados manda la varianza.

\medskip
En el segundo, $\ECM(T_1) = 4$ y $\ECM(T_2) = 2 + 1^2 = 3$, así que se prefiere $T_2$
pese a ser sesgado. Es el compromiso entre sesgo y varianza: lo que se minimiza es el
error total, no el sesgo.
\end{solucion}

\begin{ejercicio}
Demostrar que $\bar{X}$ es consistente para $\mu$.
\end{ejercicio}

\begin{solucion}
$E[\bar{X}] = \mu$ para todo $n$, así que la primera condición se cumple sin necesidad
de límite. Y $\Var(\bar{X}) = \sigma^2/n \to 0$. Por la condición suficiente,
$\bar{X}$ es consistente. Alternativamente, es consecuencia directa de la ley débil de
los grandes números.
\end{solucion}
```

Los métodos de estimación y sus propiedades están desarrollados en \cite{gomez2007} y
\cite{canavos1987}, con problemas resueltos en \cite{casas2006} y
\cite{herrerias2012ej}.
