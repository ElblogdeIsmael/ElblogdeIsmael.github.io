# Temario práctico

La guía indica que el temario práctico acompaña al teórico: se resuelven ejercicios a
mano y con hoja de cálculo o software estadístico, aplicando la inferencia a datos
reales.

## Herramientas

| Herramienta | Para qué |
| --- | --- |
| Hoja de cálculo | funciones de distribución, contrastes básicos, gráficos |
| R o Python | todo lo anterior, más los no paramétricos y el ANOVA |
| Tablas estadísticas | comprobar que el resultado del programa es razonable |

**Las tablas no sobran aunque haya programa.** Buscar el valor crítico a mano una vez
por cada tipo de contraste fija qué distribución se está usando y cuántos grados de
libertad tiene, que es donde se cometen los errores.

| Cálculo | Hoja de cálculo | R |
| --- | --- | --- |
| Cuantil normal | `INV.NORM.ESTAND(p)` | `qnorm(p)` |
| Cuantil $t$ | `INV.T.2C(alfa; gl)` | `qt(p, gl)` |
| Cuantil $\chi^2$ | `INV.CHICUAD(p; gl)` | `qchisq(p, gl)` |
| Cuantil $F$ | `INV.F(p; gl1; gl2)` | `qf(p, gl1, gl2)` |
| Contraste $t$ | `PRUEBA.T(...)` | `t.test(x, y)` |

## Práctica 1. Distribuciones continuas

| Actividad | Qué se obtiene |
| --- | --- |
| Representar densidades | forma de cada modelo al variar sus parámetros |
| Calcular probabilidades | áreas bajo la densidad |
| Tipificar | pasar de $N(\mu,\sigma)$ a $N(0,1)$ y al revés |
| Comparar $t$ con normal | el efecto de los grados de libertad |
| Simular el teorema central del límite | medias de muestras de una población no normal |

**El experimento del teorema central del límite es el que más convence:** se genera una
población claramente no normal —exponencial, o uniforme discreta—, se extraen miles de
muestras de tamaño $n$, se representa el histograma de las medias y se repite con
$n = 2, 5, 10, 30$. La campana aparece sola, y se ve **a partir de qué $n$**, que es la
pregunta que las tablas no responden.

## Práctica 2. Estimación puntual

| Actividad | Qué se comprueba |
| --- | --- |
| Simular muchas muestras y calcular $\bar{X}$ | su media coincide con $\mu$: insesgadez |
| Ídem con $S^2$ y $\hat{S}^2$ | la primera subestima, la segunda no |
| Ver cómo cambia $\Var(\bar{X})$ con $n$ | la ley $1/\sqrt{n}$, medida |
| Comparar dos estimadores por su $\ECM$ | el compromiso entre sesgo y varianza |

La comprobación del sesgo de $S^2$ es especialmente instructiva: con $n=5$ y muchas
repeticiones, la media de las varianzas muestrales se queda en torno al 80 % de
$\sigma^2$, exactamente el factor $(n-1)/n$ que predice la teoría.

## Práctica 3. Intervalos de confianza

| Actividad | Qué se obtiene |
| --- | --- |
| Construir intervalos para $\mu$, $\sigma^2$ y $p$ | con datos propios |
| Variar el nivel de confianza | ver cómo cambia la amplitud |
| Variar $n$ | ídem |
| Calcular el tamaño de muestra necesario | para un error dado |

**El experimento que aclara la interpretación:** simular 100 muestras de una población
conocida, construir el intervalo del 95 % con cada una y contar cuántos contienen la
verdadera $\mu$. Salen unos 95, y los cinco que fallan se ven en el gráfico. Eso es lo
que significa «95 % de confianza», y verlo evita la lectura incorrecta que el tema 4
advierte.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.6cm, height=4.6cm, axis lines=left,
  xlabel={muestra}, ylabel={intervalo},
  xmin=0, xmax=21, ymin=40, ymax=60,
  tick label style={font=\scriptsize}, label style={font=\scriptsize},
]
\addplot[thick, domain=0:21, samples=2] {50};
\draw (axis cs:1,46.6) -- (axis cs:1,51.8);
\draw (axis cs:2,48.2) -- (axis cs:2,53.4);
\draw (axis cs:3,46.0) -- (axis cs:3,51.2);
\draw (axis cs:4,48.9) -- (axis cs:4,54.1);
\draw (axis cs:5,47.5) -- (axis cs:5,52.7);
\draw (axis cs:6,45.3) -- (axis cs:6,50.5);
\draw (axis cs:7,49.6) -- (axis cs:7,54.8);
\draw (axis cs:8,46.9) -- (axis cs:8,52.1);
\draw (axis cs:9,48.0) -- (axis cs:9,53.2);
\draw (axis cs:10,51.3) -- (axis cs:10,56.5);
\draw (axis cs:11,46.3) -- (axis cs:11,51.5);
\draw (axis cs:12,48.5) -- (axis cs:12,53.7);
\draw (axis cs:13,47.2) -- (axis cs:13,52.4);
\draw (axis cs:14,47.8) -- (axis cs:14,53.0);
\draw (axis cs:15,45.6) -- (axis cs:15,50.8);
\draw (axis cs:16,49.2) -- (axis cs:16,54.4);
\draw (axis cs:17,48.3) -- (axis cs:17,53.5);
\draw (axis cs:18,46.5) -- (axis cs:18,51.7);
\draw (axis cs:19,49.4) -- (axis cs:19,54.6);
\draw (axis cs:20,47.6) -- (axis cs:20,52.8);
\node[font=\scriptsize, anchor=west] at (axis cs:10.4,56.8) {no contiene $\mu$};
\end{axis}
\end{tikzpicture}
\end{center}
```

## Práctica 4. Contrastes de hipótesis

| Actividad | Qué se obtiene |
| --- | --- |
| Contrastes para una y dos muestras | con datos reales |
| Comparar la decisión por región crítica y por $p$-valor | coinciden siempre |
| Datos emparejados frente a independientes | el mismo conjunto tratado de las dos formas |
| Curva de potencia | $1-\beta$ frente al valor real del parámetro |
| ANOVA de un factor | tabla completa e interpretación |

**La comparación entre emparejado e independiente** es el ejercicio que más enseña: con
los mismos datos, el contraste emparejado detecta la diferencia y el independiente no,
porque el segundo trata como ruido la variabilidad entre sujetos que el primero elimina.

Y la **curva de potencia** hace visible el error de tipo II, que en el papel es una letra
griega: se representa la probabilidad de rechazar frente al valor verdadero del
parámetro, y se ve que cerca de $H_0$ la potencia es casi nula por muy grande que sea la
muestra.

## Práctica 5. Tests no paramétricos

| Actividad | Qué se obtiene |
| --- | --- |
| $\chi^2$ de bondad de ajuste | comprobar si unos datos siguen un modelo |
| $\chi^2$ de independencia | sobre una tabla de contingencia real |
| Mann-Whitney y Wilcoxon | comparados con la $t$ sobre los mismos datos |
| Kruskal-Wallis | comparado con el ANOVA |
| Test de rachas | sobre residuos de una regresión |

El experimento de cierre: aplicar el test paramétrico y el no paramétrico **a los mismos
datos**, primero con datos normales y después contaminados con un valor atípico extremo.
Con datos limpios las conclusiones coinciden; con el atípico, la $t$ cambia de decisión y
Mann-Whitney no. Eso es la robustez, medida en vez de enunciada.

## Sobre la memoria

Lo que se entrega:

1. Origen de los datos y su descripción.
2. **Comprobación de los supuestos** antes de aplicar cada técnica.
3. Cálculos, con la distribución y los grados de libertad indicados.
4. Decisión, con el $p$-valor.
5. **Conclusión redactada en términos del problema**, no en jerga estadística.
6. Limitaciones.

El punto 2 es el que separa aplicar una fórmula de hacer inferencia: antes de una $t$ hay
que mirar si la normalidad es defendible, y antes de un ANOVA, si las varianzas son
comparables.

Y el punto 5 se evalúa por sí solo. «Se rechaza $H_0$ con $p=0{,}03$» no es una
conclusión; «los datos aportan evidencia de que el nuevo proceso reduce el tiempo medio
de montaje, con una diferencia estimada de entre 1,2 y 4,8 minutos» sí lo es.

```{=latex}
\begin{anotacion}
Y la advertencia que cierra la asignatura: \textbf{el programa siempre devuelve un
número}. Aplica una $t$ a datos que no lo permiten, calcula un $\chi^2$ con frecuencias
esperadas de 0,5 y da un $p$-valor con cuatro decimales en los tres casos. Comprobar los
supuestos es responsabilidad de quien analiza, y ningún software lo hace por su cuenta.
\end{anotacion}
```

El material de las prácticas sigue \cite{fernandez2023} y \cite{herrerias2012ej}, con
el enfoque de hoja de cálculo de \cite{black2001} y los conjuntos de datos de
\cite{lind2012}.
