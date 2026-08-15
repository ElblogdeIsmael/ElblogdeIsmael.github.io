# Los mercados de factores de producción

Capítulo 8 del programa. Los mercados de factores competitivos, el equilibrio y la renta
económica, y los mercados con poder de monopsonio y de monopolio.

## Qué cambia respecto de los mercados de productos

| | Mercado de productos | Mercado de factores |
| --- | --- | --- |
| Quién demanda | los consumidores | las empresas |
| Quién ofrece | las empresas | los hogares |
| De qué depende la demanda | preferencias y renta | **la demanda del producto** |

La tercera fila es la clave: **la demanda de factores es derivada**. Una empresa no
contrata trabajo por gusto, sino porque el trabajo produce algo que se vende. Si cae la
demanda del producto, cae la del factor sin que nada haya cambiado en el mercado de
trabajo.

## Mercados de factores competitivos

La empresa contrata mientras lo que aporta la unidad adicional supere lo que cuesta.

```{=latex}
\begin{definicion}[Ingreso del producto marginal]
$$IPM_L = \Pmg_L \times IMg$$
En competencia perfecta en el mercado de productos, $IMg = P$ y entonces
$IPM_L = \Pmg_L \times P$, que se llama \emph{valor del producto marginal}.
\end{definicion}

\begin{proposicion}[Condición de contratación]
$$IPM_L = w$$
La curva de $IPM_L$ es la curva de demanda de trabajo de la empresa.
\end{proposicion}
```

La demanda de trabajo tiene pendiente negativa **porque el producto marginal es
decreciente**, no por ninguna razón adicional: es la ley del capítulo 3 vista desde el
mercado.

| Cambio | Efecto sobre la demanda de trabajo |
| --- | --- |
| Sube el precio del producto | se desplaza a la derecha |
| Mejora la tecnología | se desplaza a la derecha |
| Sube el precio del capital, si son sustitutivos | se desplaza a la derecha |
| Sube el salario | movimiento **a lo largo** de la curva |

La última fila recoge la distinción entre desplazamiento y movimiento, que es donde más
se confunde el análisis.

### La oferta de trabajo

El hogar reparte su tiempo entre trabajo y ocio, y el salario es el **coste de
oportunidad del ocio**. Al subir el salario actúan los dos efectos del capítulo 2:

| Efecto | Dirección |
| --- | --- |
| Sustitución | el ocio se encarece: se trabaja más |
| Renta | se es más rico y se demanda más ocio: se trabaja menos |

Cuando el efecto renta domina, la oferta individual **se dobla hacia atrás**: a partir de
cierto salario, subirlo reduce las horas trabajadas. La oferta de mercado, en cambio,
suele tener pendiente positiva porque salarios más altos atraen a personas nuevas.

### Equilibrio y renta económica

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.6cm, height=6.0cm, axis lines=left,
  xlabel={$L$}, ylabel={$w$},
  xmin=0, xmax=10, ymin=0, ymax=11,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\addplot[fill=black!18, draw=none] coordinates {(0,2) (0,6) (4,6)} \closedcycle;
\addplot[thick, domain=0:10] {10-x};
\addplot[thick, domain=0:10] {2+x};
\addplot[dashed, domain=0:4] {6};
\node[font=\scriptsize] at (axis cs:1.2,4.2) {renta};
\node[font=\scriptsize] at (axis cs:1.2,3.55) {económica};
\node[font=\scriptsize, anchor=west] at (axis cs:7.4,2.4) {$D_L = IPM$};
\node[font=\scriptsize, anchor=west] at (axis cs:7.4,9.4) {$S_L$};
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{definicion}[Renta económica]
Pago a un factor por encima de lo mínimo necesario para que se ofrezca en ese uso. Es el
excedente del oferente aplicado a los factores.
\end{definicion}
```

**Cuanto más inelástica es la oferta, mayor es la renta económica.** Con oferta
perfectamente inelástica —la tierra, o un talento irrepetible— todo el pago es renta
económica, y por eso un impuesto sobre ella no altera la cantidad ofrecida. Es el
argumento clásico a favor de gravar el suelo.

## Monopsonio

Un solo comprador del factor. Ahora la empresa **se enfrenta a la curva de oferta del
mercado**, así que contratar una unidad más obliga a subir el salario de todas.

$$CMg_L = w + L\,\frac{dw}{dL} > w$$

Es la imagen especular del monopolio: allí $IMg<P$, aquí $CMg_L>w$.

```{=latex}
\begin{proposicion}
El monopsonista contrata donde $IPM_L = CMg_L$, y paga el salario que la curva de oferta
marca para esa cantidad:
$$L_m < L_c, \qquad w_m < w_c$$
Emplea menos y paga menos que un mercado competitivo.
\end{proposicion}
```

```{=latex}
\begin{anotacion}
De aquí sale un resultado que contradice la intuición corriente: en un mercado
monopsonista, un \textbf{salario mínimo} fijado entre $w_m$ y $w_c$ aumenta a la vez el
salario \emph{y} el empleo. En un mercado competitivo lo reduciría. Que el efecto del
salario mínimo dependa de la estructura del mercado es la razón de que la evidencia
empírica sea mixta y el debate siga abierto.
\end{anotacion}
```

Dónde aparece el monopsonio: empresas dominantes en localidades pequeñas, sistemas
sanitarios públicos como empleadores casi únicos de ciertas especialidades, y ligas
deportivas con derechos exclusivos sobre los jugadores.

## Poder de monopolio en el mercado de factores

El caso simétrico: el oferente del factor tiene poder de mercado. El ejemplo canónico es
el **sindicato**, que negocia colectivamente en lugar de que cada trabajador compita con
los demás.

| Objetivo del sindicato | Resultado |
| --- | --- |
| Maximizar el salario | menos empleo |
| Maximizar el empleo | salario cercano al competitivo |
| Maximizar la masa salarial | punto intermedio, donde la elasticidad vale 1 |

Con poder de mercado a los dos lados —sindicato frente a monopsonio— el resultado no lo
determina el modelo sino la **negociación**, y el salario cae en un intervalo cuyos
extremos son el que preferiría cada parte.

```{=latex}
\begin{anotacion}
El poder de monopolio de un sindicato frente a un monopsonio puede \textbf{acercar} el
resultado al competitivo, en empleo y en salario. Es el argumento del poder compensador:
dos distorsiones opuestas se cancelan en parte. No es un resultado general, pero desmonta
la idea de que más poder de mercado siempre empeora el resultado.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Una empresa competitiva vende su producto a 5 euros y su producto marginal del trabajo
es $\Pmg_L = 20 - 2L$. Si el salario es 30, ¿cuántos trabajadores contrata?
\end{ejercicio}

\begin{solucion}
$IPM_L = 5(20-2L) = 100-10L$. Igualando al salario: $100-10L = 30$, de donde $L = 7$.

\medskip
Si el precio del producto subiera a 6, la demanda se desplazaría: $120-12L = 30$ da
$L = 7{,}5$. La demanda de trabajo es derivada, así que responde al mercado del producto
sin que nada cambie en el de trabajo.
\end{solucion}

\begin{ejercicio}
Un monopsonista se enfrenta a la oferta $w = 10 + 2L$ y su $IPM_L = 100 - 2L$. Hallar
empleo y salario, y compararlos con el resultado competitivo.
\end{ejercicio}

\begin{solucion}
El coste total del trabajo es $wL = 10L+2L^2$, así que $CMg_L = 10+4L$. Igualando al
$IPM$: $100-2L = 10+4L$, de donde $L_m = 15$ y el salario que marca la oferta es
$w_m = 10+30 = 40$.

\medskip
En competencia se igualaría $IPM$ con la oferta: $100-2L = 10+2L$ da $L_c = 22{,}5$ y
$w_c = 55$. El monopsonio emplea a 7,5 personas menos y paga 15 euros menos.
\end{solucion}

\begin{ejercicio}
La oferta de un factor es perfectamente inelástica. ¿Qué parte de su remuneración es
renta económica y qué efecto tendría un impuesto sobre ella?
\end{ejercicio}

\begin{solucion}
Toda: el factor se ofrece en la misma cantidad sea cual sea el pago, así que el mínimo
necesario para que se ofrezca es cero y el pago entero es renta económica.

\medskip
Un impuesto sobre esa renta \textbf{no cambia la cantidad ofrecida} y por tanto no genera
pérdida de eficiencia: solo transfiere renta del propietario al Estado. Es el argumento
clásico a favor de gravar el valor del suelo, que se remonta a Ricardo y a Henry George.
\end{solucion}
```

Los mercados de factores están desarrollados en \cite{pindyck2018} y \cite{frank2009},
con la exposición introductoria de \cite{krugman2013} y una revisión crítica de los
supuestos en \cite{guerrien2008}.
