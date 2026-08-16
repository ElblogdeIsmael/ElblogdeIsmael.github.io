# Estimación por intervalos de confianza

Temas 5 y 6 del programa. El concepto de intervalo de confianza, y los intervalos para
la media, la varianza y la proporción de una población, y para la diferencia de medias,
la razón de varianzas y la diferencia de proporciones de dos.

## Concepto

```{=latex}
\begin{definicion}[Intervalo de confianza]
Un intervalo aleatorio $(L_1, L_2)$, construido a partir de la muestra, tal que
$$P\big(L_1 < \theta < L_2\big) = 1-\alpha$$
El valor $1-\alpha$ es el nivel de confianza.
\end{definicion}
```

```{=latex}
\begin{anotacion}
\textbf{Lo aleatorio es el intervalo, no el parámetro.} Una vez calculado con datos
concretos, $\theta$ está dentro o no lo está, y no hay ninguna probabilidad de por
medio. La lectura correcta es frecuentista: si se repitiera el muestreo muchas veces, el
95\,\% de los intervalos construidos así contendrían el verdadero valor. Decir «hay un
95\,\% de probabilidad de que $\mu$ esté entre 48 y 52» es incorrecto.
\end{anotacion}
```

Todos los intervalos del tema tienen la misma forma:

$$\text{estimador} \ \pm\ (\text{valor crítico})\times(\text{error típico})$$

y el semiancho se llama **error máximo admisible**.

| Factor | Efecto sobre la amplitud |
| --- | --- |
| Mayor nivel de confianza | más ancho |
| Mayor tamaño de muestra | más estrecho, como $1/\sqrt{n}$ |
| Mayor variabilidad de la población | más ancho |

**Confianza y precisión compiten.** Un intervalo del 99 % es más ancho que uno del 95 %
con los mismos datos, y la única forma de ganar en las dos cosas a la vez es aumentar la
muestra.

## Una población

### Media, con $\sigma$ conocida

$$\bar{x} \pm z_{\alpha/2}\,\frac{\sigma}{\sqrt{n}}$$

| $1-\alpha$ | $z_{\alpha/2}$ |
| --- | --- |
| 90 % | 1,645 |
| 95 % | 1,960 |
| 99 % | 2,576 |

### Media, con $\sigma$ desconocida

$$\bar{x} \pm t_{n-1;\,\alpha/2}\,\frac{\hat{s}}{\sqrt{n}}$$

Con $n$ grande la $t$ se aproxima por la normal, pero conviene usar la $t$ siempre que
$\sigma$ sea desconocida: no cuesta más y es exacta con poblaciones normales.

### Tamaño de muestra necesario

Imponiendo que el error máximo no supere $E$:

$$n \ge \left(\frac{z_{\alpha/2}\,\sigma}{E}\right)^2$$

```{=latex}
\begin{ejemplo}
Para estimar una media con error máximo de 2 unidades al 95\,\% de confianza, sabiendo
que $\sigma\approx 10$:
$$n \ge \left(\frac{1{,}96\cdot10}{2}\right)^2 = 96{,}04 \ \Longrightarrow\ n = 97$$
Reducir el error a 1 exigiría $n = 385$: \textbf{dividir el error por dos cuadruplica la
muestra}, que es la ley de rendimientos decrecientes vista otra vez.
\end{ejemplo}
```

### Varianza

$$\left(\frac{(n-1)\hat{s}^2}{\chi^2_{n-1;\,\alpha/2}},\ \
\frac{(n-1)\hat{s}^2}{\chi^2_{n-1;\,1-\alpha/2}}\right)$$

**No es simétrico** respecto de $\hat{s}^2$, porque la $\chi^2$ no lo es. Escribirlo como
«estimación más menos algo» es un error.

### Proporción

$$\hat{p} \pm z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

Y el tamaño de muestra, tomando el caso más desfavorable $\hat{p}=0{,}5$:

$$n \ge \frac{z_{\alpha/2}^2}{4E^2}$$

```{=latex}
\begin{ejemplo}
La fórmula anterior explica un número que aparece en todas las encuestas: con
$E = 0{,}03$ y confianza del 95\,\%,
$$n \ge \frac{1{,}96^2}{4\cdot0{,}0009} = 1067$$
De ahí que las encuestas electorales usen sistemáticamente muestras en torno a las
1000-1100 personas, con un margen de error de unos tres puntos.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
El tamaño necesario \textbf{no depende del tamaño de la población}, salvo que la muestra
sea una fracción apreciable de ella. Para estimar la opinión de un país de cuarenta
millones y la de uno de cuatro hacen falta las mismas mil personas, y eso es lo que más
sorprende de este resultado.
\end{anotacion}
```

## Dos poblaciones

### Diferencia de medias

| Caso | Intervalo |
| --- | --- |
| Varianzas conocidas | $(\bar{x}_1-\bar{x}_2) \pm z_{\alpha/2}\sqrt{\frac{\sigma_1^2}{n_1}+\frac{\sigma_2^2}{n_2}}$ |
| Desconocidas iguales | $(\bar{x}_1-\bar{x}_2) \pm t_{n_1+n_2-2;\,\alpha/2}\,s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}}$ |
| Desconocidas distintas | ídem con las cuasivarianzas por separado y $t_\nu$ de Welch |

**La lectura clave: si el intervalo contiene el cero**, los datos son compatibles con
que las dos medias sean iguales. Si no lo contiene, hay evidencia de diferencia, y el
signo del intervalo dice en qué sentido.

### Razón de varianzas

$$\left(\frac{\hat{s}_1^2}{\hat{s}_2^2}\cdot\frac{1}{F_{n_1-1,n_2-1;\,\alpha/2}},\ \
\frac{\hat{s}_1^2}{\hat{s}_2^2}\cdot F_{n_2-1,n_1-1;\,\alpha/2}\right)$$

Aquí lo que se mira es si el intervalo contiene el **uno**, porque el parámetro es un
cociente y no una diferencia.

### Diferencia de proporciones

$$(\hat{p}_1-\hat{p}_2) \pm
z_{\alpha/2}\sqrt{\frac{\hat{p}_1(1-\hat{p}_1)}{n_1}+\frac{\hat{p}_2(1-\hat{p}_2)}{n_2}}$$

## Tabla de decisión

| Parámetro | Condiciones | Distribución |
| --- | --- | --- |
| $\mu$ | $\sigma$ conocida | $N(0,1)$ |
| $\mu$ | $\sigma$ desconocida, población normal | $t_{n-1}$ |
| $\sigma^2$ | población normal | $\chi^2_{n-1}$ |
| $p$ | $n$ grande | $N(0,1)$ |
| $\mu_1-\mu_2$ | varianzas conocidas | $N(0,1)$ |
| $\mu_1-\mu_2$ | desconocidas iguales | $t_{n_1+n_2-2}$ |
| $\mu_1-\mu_2$ | desconocidas distintas | $t_\nu$ |
| $\sigma_1^2/\sigma_2^2$ | poblaciones normales | $F$ |
| $p_1-p_2$ | muestras grandes | $N(0,1)$ |

## Ejercicios

```{=latex}
\begin{ejercicio}
Una muestra de 25 piezas da una longitud media de 10,2 cm con cuasidesviación típica
0,5 cm. Construir un intervalo al 95\,\% para la longitud media, suponiendo normalidad.
\end{ejercicio}

\begin{solucion}
$\sigma$ es desconocida, así que se usa la $t$ con 24 grados de libertad:
$t_{24;\,0{,}025} = 2{,}064$.
$$10{,}2 \pm 2{,}064\cdot\frac{0{,}5}{5} = 10{,}2 \pm 0{,}2064
= (9{,}994,\ 10{,}406)$$
Con la normal saldría $\pm0{,}196$: algo más estrecho, y sería incorrecto porque
$\sigma$ se ha estimado.
\end{solucion}

\begin{ejercicio}
En una encuesta a 400 personas, 240 se declaran a favor. Intervalo al 95\,\% para la
proporción poblacional.
\end{ejercicio}

\begin{solucion}
$\hat{p} = 0{,}6$ y el error típico es $\sqrt{0{,}6\cdot0{,}4/400} = 0{,}0245$.
$$0{,}6 \pm 1{,}96\cdot0{,}0245 = 0{,}6\pm0{,}048 = (0{,}552,\ 0{,}648)$$
Se cumplen las condiciones: $np = 240$ y $n(1-p) = 160$, los dos muy por encima de 5.
\end{solucion}

\begin{ejercicio}
Dos métodos de producción dan medias 52 y 48 con cuasidesviaciones típicas 6 y 5, sobre
muestras de 20 y 25 piezas. Suponiendo varianzas iguales, ¿hay diferencia entre los dos
al 95\,\%?
\end{ejercicio}

\begin{solucion}
$$s_p^2 = \frac{19\cdot36 + 24\cdot25}{43} = \frac{684+600}{43} = 29{,}86,
\qquad s_p = 5{,}46$$
$$4 \pm 2{,}017\cdot5{,}46\sqrt{\tfrac{1}{20}+\tfrac{1}{25}}
= 4 \pm 2{,}017\cdot5{,}46\cdot0{,}300 = 4\pm3{,}30$$
El intervalo es $(0{,}70,\ 7{,}30)$, que \textbf{no contiene el cero}: hay evidencia de
que el primer método da una media mayor, con una diferencia de entre 0,7 y 7,3 unidades.
\end{solucion}
```

Los intervalos de confianza están desarrollados en \cite{herrerias2012} y
\cite{lind2012}, con problemas resueltos en \cite{herrerias2012ej}, \cite{casas2006} y
\cite{fernandez2023}.
