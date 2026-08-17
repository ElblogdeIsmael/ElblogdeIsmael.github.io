# Autocorrelación

Tema 6 del programa. Cuando las perturbaciones están correlacionadas entre sí:
concepto, causas, consecuencias, contrastes y estimación.

## Concepto

H5 exige que $\Cov(u_i, u_j) = 0$ para $i \ne j$. Hay **autocorrelación** cuando esa
covarianza no es cero, es decir, cuando la perturbación de un período guarda
relación con la de otro.

$$\operatorname{E}[\mathbf{u}\mathbf{u}'] = \sigma^2 \boldsymbol{\Omega},
\qquad \boldsymbol{\Omega} \ne \mathbf{I},\ \text{con elementos no nulos fuera de la diagonal}$$

Es la otra forma de romper $\operatorname{E}[\mathbf{u}\mathbf{u}'] = \sigma^2
\mathbf{I}$. El tema 5 cambiaba la diagonal; este llena lo de fuera.

Aparece casi siempre en **series temporales**, por la razón del tema 1: lo que ocurre
en un período arrastra al siguiente.

### El esquema autorregresivo de primer orden

El caso habitual:

$$u_t = \rho\,u_{t-1} + \varepsilon_t, \qquad \lvert \rho \rvert < 1$$

con $\varepsilon_t$ ruido blanco: media cero, varianza constante y sin
autocorrelación. De ahí:

$$\Var(u_t) = \frac{\sigma_\varepsilon^2}{1-\rho^2}, \qquad
\Cov(u_t, u_{t-s}) = \rho^{s}\,\Var(u_t)$$

La correlación decae geométricamente con la distancia entre períodos. La condición
$\lvert \rho \rvert < 1$ es la de estacionariedad: sin ella la varianza no existe y
el proceso no es estable.

| Signo de $\rho$ | Qué se ve en los residuos |
| --- | --- |
| $\rho > 0$ | rachas: varios residuos positivos seguidos y luego varios negativos |
| $\rho < 0$ | alternancia de signo casi observación a observación |
| $\rho = 0$ | sin patrón |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=4.4cm,
  xlabel={$t$}, ylabel={$e_t$},
  xmin=0, xmax=25, ymin=-2.6, ymax=2.6,
  xtick=\empty, ytick=\empty,
  axis lines=middle,
  xlabel style={at={(axis description cs:0.5,-0.1)}}
]
% Autocorrelacion positiva: rachas de residuos del mismo signo.
\addplot[thick, mark=*, mark size=1.1pt] coordinates {
  (1,0.5) (2,1.1) (3,1.6) (4,1.9) (5,1.4) (6,0.9) (7,0.3) (8,-0.4)
  (9,-1.0) (10,-1.5) (11,-1.8) (12,-1.4) (13,-0.9) (14,-0.3) (15,0.4)
  (16,1.0) (17,1.5) (18,1.7) (19,1.2) (20,0.6) (21,-0.1) (22,-0.8)
  (23,-1.3) (24,-1.6)
};
\end{axis}
\end{tikzpicture}
\end{center}
```

## Causas

| Causa | Qué ocurre |
| --- | --- |
| Inercia económica | las magnitudes económicas tienen ciclos y persistencia |
| Variable relevante omitida | si la omitida está autocorrelacionada, la perturbación lo hereda |
| Forma funcional incorrecta | ajustar una recta a una relación curva deja residuos con patrón |
| Retardos no incluidos | el efecto de $X$ se reparte en varios períodos |
| Manipulación de los datos | interpolar, suavizar o agregar introduce correlación |
| Fenómenos de telaraña | la oferta responde con retardo al precio |

Las dos del medio son **errores de especificación disfrazados de autocorrelación**,
igual que en el tema 5. Es la primera comprobación: si al añadir la variable que
falta o al cambiar la forma funcional el patrón desaparece, no había autocorrelación.

## Consecuencias

Son las mismas que en el tema 5, y por la misma razón: lo que falla no es H3 sino la
matriz de covarianzas.

| Propiedad | Con autocorrelación |
| --- | --- |
| Insesgadez | **se mantiene** |
| Consistencia | **se mantiene**, salvo con endógena retardada |
| Eficiencia | **se pierde** |
| $\Var(\hat{\boldsymbol{\beta}})$ habitual | **incorrecta** |
| Inferencia | **no válida** |

Con $\rho > 0$, que es el caso frecuente, **los errores estándar salen demasiado
pequeños**. La dirección del sesgo importa: infla los $t$, infla el $R^2$ y hace
parecer significativo lo que no lo es. Es más peligroso que el caso contrario,
porque el resultado tiene mejor aspecto del que merece.

La salvedad de la segunda fila es importante: si el modelo incluye la variable
endógena retardada, $Y_{t-1}$ está correlacionada con $u_{t-1}$ y por tanto con
$u_t$, así que el estimador **deja de ser consistente**. Ahí la autocorrelación no
es solo un problema de eficiencia.

### Regresión espuria

En series temporales con tendencia aparece un fenómeno específico: dos variables sin
ninguna relación pueden dar un $R^2$ altísimo y coeficientes muy significativos solo
porque las dos crecen con el tiempo.

La señal de alarma es un **$R^2$ mayor que el estadístico de Durbin-Watson**. Esa
combinación —ajuste excelente y autocorrelación severa— indica regresión espuria y no
un buen modelo.

Se corrige trabajando en diferencias, o comprobando que las variables están
cointegradas, es decir, que existe una combinación lineal suya que sí es estacionaria.

## Procedimientos de detección

### Gráfico de residuos

Representar $e_t$ frente a $t$ y frente a $e_{t-1}$. Rachas o alternancia son el
indicio, y el segundo gráfico da además el signo de $\rho$: una nube con pendiente
positiva es $\rho > 0$.

### Contraste de Durbin-Watson

El clásico para autocorrelación de primer orden:

$$d = \frac{\sum_{t=2}^{n} (e_t - e_{t-1})^2}{\sum_{t=1}^{n} e_t^2} \approx 2(1-\hat{\rho})$$

| $\hat{\rho}$ | $d$ |
| ---: | ---: |
| $1$ | $0$ |
| $0$ | $2$ |
| $-1$ | $4$ |

La lectura se hace con dos valores críticos, $d_L$ y $d_U$, y deja **dos zonas sin
decisión**:

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize]
\draw[thick] (0,0) -- (12,0);
\foreach \x/\l in {0/0, 2/$d_L$, 4/$d_U$, 8/$4-d_U$, 10/$4-d_L$, 12/4} {
  \draw (\x,0.13) -- (\x,-0.13) node[below] {\l};
}
\node[align=center, anchor=south] at (1,0.15)  {$\rho>0$};
\node[align=center, anchor=south] at (3,0.15)  {duda};
\node[align=center, anchor=south] at (6,0.15)  {sin autocorrelación};
\node[align=center, anchor=south] at (9,0.15)  {duda};
\node[align=center, anchor=south] at (11,0.15) {$\rho<0$};
\end{tikzpicture}
\end{center}
```

Sus **condiciones de uso** son estrictas, y se incumplen a menudo:

- el modelo tiene que llevar término independiente;
- los regresores tienen que ser no estocásticos;
- **no puede haber variable endógena retardada** entre los regresores;
- solo detecta autocorrelación de orden 1.

Con endógena retardada, $d$ tiende a 2 aunque haya autocorrelación, así que el
contraste dice que no hay problema justo cuando lo hay. Ahí se usa la **h de
Durbin**:

$$h = \hat{\rho}\sqrt{\frac{n}{1 - n\,\widehat{\Var}(\hat{\beta}_{Y_{t-1}})}}
\ \sim N(0,1)$$

y solo se puede calcular si $n\,\widehat{\Var}(\hat{\beta}_{Y_{t-1}}) < 1$; si no, el
radicando es negativo y el estadístico no existe.

### Contraste de Breusch-Godfrey

El general, y el que resuelve las limitaciones del anterior.

| Paso | Qué se hace |
| --- | --- |
| 1 | estimar el modelo y obtener $e_t$ |
| 2 | regresar $e_t$ sobre los regresores originales **y** sobre $e_{t-1}, \dots, e_{t-p}$ |
| 3 | calcular $LM = (n-p)R^2$ de esa regresión |
| 4 | comparar con $\chi^2_p$ |

$$H_0: \rho_1 = \dots = \rho_p = 0$$

Sus ventajas sobre Durbin-Watson: detecta órdenes superiores al primero, **admite la
endógena retardada** y no tiene zona de duda. Su precio es que es asintótico y que
hay que elegir $p$.

### Contraste de Ljung-Box

Contrasta conjuntamente que las primeras $m$ autocorrelaciones son nulas:

$$Q = n(n+2)\sum_{s=1}^{m} \frac{\hat{\rho}_s^2}{n-s} \ \sim\ \chi^2_{m}$$

Se aplica sobre los residuos, y en ese caso los grados de libertad se reducen en el
número de parámetros estimados del proceso. Es el contraste habitual para comprobar
que un modelo de series temporales ha dejado residuos de ruido blanco.

## Estimación de modelos con perturbaciones autocorrelacionadas

### La transformación cuasidiferencial

Si $\rho$ se conociera, restando a la ecuación en $t$ la ecuación en $t-1$
multiplicada por $\rho$:

$$Y_t - \rho Y_{t-1} = \beta_1(1-\rho) + \beta_2 (X_t - \rho X_{t-1}) + \varepsilon_t$$

y la nueva perturbación $\varepsilon_t$ ya no está autocorrelacionada. Sobre esa
ecuación se aplica mínimos cuadrados ordinarios.

Se pierde la primera observación, y con muestras cortas eso es caro. La
**transformación de Prais-Winsten** la recupera multiplicándola por
$\sqrt{1-\rho^2}$, en vez de descartarla como hace Cochrane-Orcutt.

### Estimación de $\rho$

Como no se conoce, hay que estimarlo:

| Método | Cómo |
| --- | --- |
| A partir de $d$ | $\hat{\rho} \approx 1 - d/2$ |
| Regresión de residuos | regresar $e_t$ sobre $e_{t-1}$ |
| Cochrane-Orcutt | iterar: estimar $\rho$, transformar, reestimar, repetir hasta converger |
| Hildreth-Lu | barrer $\rho$ en una rejilla y quedarse con el que minimice la suma de residuos al cuadrado |
| Máxima verosimilitud | estimar $\boldsymbol{\beta}$ y $\rho$ a la vez |

Cochrane-Orcutt puede converger a un mínimo local; Hildreth-Lu no, porque explora
toda la rejilla, a cambio de más cálculo.

### Errores estándar robustos de Newey-West

Como los de White del tema 5, pero robustos además a la autocorrelación:

$$\widehat{\Var}(\hat{\boldsymbol{\beta}}) = (\mathbf{X}'\mathbf{X})^{-1}
\hat{\mathbf{S}} (\mathbf{X}'\mathbf{X})^{-1}$$

con $\hat{\mathbf{S}}$ construida con las autocovarianzas de los residuos hasta un
retardo máximo. Los coeficientes no cambian; solo se corrige la inferencia. Es la
opción por defecto cuando no se quiere modelar la estructura de la autocorrelación.

### Añadir dinámica al modelo

La alternativa de fondo, y a menudo la mejor: si la autocorrelación viene de que el
modelo es estático y el fenómeno no lo es, la corrección no es transformar sino
**especificar bien**. Incluir $Y_{t-1}$, o retardos de $X$, puede hacer desaparecer la
autocorrelación porque elimina su causa.

Es el mismo criterio del tema 5: **primero la especificación, después la
corrección**.

## Los tres problemas, juntos

| | Multicolinealidad | Heteroscedasticidad | Autocorrelación |
| --- | --- | --- | --- |
| Hipótesis que rompe | H2 | H4 | H5 |
| Dónde aparece | cualquier muestra | sección cruzada | series temporales |
| Insesgadez | se mantiene | se mantiene | se mantiene |
| Eficiencia | se mantiene | se pierde | se pierde |
| Varianza estimada | correcta, y grande | incorrecta | incorrecta |
| Detección | FIV, número de condición | Breusch-Pagan, White, Goldfeld-Quandt, Glejser | Durbin-Watson, $h$, Breusch-Godfrey, Ljung-Box |
| Corrección | más datos, transformar, contraer | ponderar, errores robustos | cuasidiferenciar, Newey-West, dinámica |

La fila que más se olvida es la quinta. **En multicolinealidad la varianza estimada
es correcta**: el problema es que es grande, y los resultados avisan solos con sus
$t$ pequeñas. En los otros dos la varianza estimada es **falsa**, y ahí los
resultados no avisan de nada. Por eso los temas 5 y 6 exigen contrastar siempre, y el
4 admite no hacer nada.

El tratamiento de la autocorrelación y de sus contrastes sigue a \cite{gujarati2010},
\cite{novales2000} y \cite{wooldridge2010}; los métodos de estimación y los errores
robustos, a \cite{greene1999} y \cite{johnston2001}; la regresión espuria y la
cointegración, a \cite{stock2012} y \cite{pindyck2001}. Los ejercicios de aplicación
están en \cite{garcia2017} y \cite{alonso2005}.
