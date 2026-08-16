# La oferta y la demanda: el mecanismo de mercado

Capítulo 2 del programa. La demanda y la oferta, el equilibrio, las elasticidades, las
aplicaciones —ingreso total, controles de precios e impuestos— y la eficiencia del
equilibrio competitivo.

## La demanda

```{=latex}
\begin{definicion}
Cantidad de un bien que los compradores están dispuestos a adquirir a cada precio,
manteniendo constante todo lo demás.
\end{definicion}
```

La **ley de la demanda**: al subir el precio, la cantidad demandada disminuye.

| Desplaza la curva de demanda | Efecto |
| --- | --- |
| Aumento de la renta, bien normal | derecha |
| Aumento de la renta, bien inferior | izquierda |
| Sube el precio de un sustitutivo | derecha |
| Sube el precio de un complementario | izquierda |
| Cambio de gustos a favor | derecha |
| Expectativas de subida de precios | derecha |
| Más compradores | derecha |

```{=latex}
\begin{anotacion}
\textbf{Un cambio en el precio del propio bien no desplaza la curva}: produce un
movimiento a lo largo de ella. Todo lo demás la desplaza. Distinguir «variación de la
cantidad demandada» de «variación de la demanda» es la primera precisión de vocabulario
que la asignatura exige.
\end{anotacion}
```

## La oferta

Cantidad que los vendedores están dispuestos a ofrecer a cada precio. Tiene pendiente
positiva porque un precio mayor cubre costes marginales mayores y atrae a más productores.

| Desplaza la curva de oferta | Efecto |
| --- | --- |
| Bajan los precios de los factores | derecha |
| Mejora la tecnología | derecha |
| Suben los impuestos sobre la producción | izquierda |
| Expectativas de precios futuros altos | izquierda |
| Más vendedores | derecha |

## El equilibrio

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.6cm, height=6.0cm, axis lines=left,
  xlabel={$Q$}, ylabel={$P$},
  xmin=0, xmax=10, ymin=0, ymax=11,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\addplot[thick, domain=0:10] {10-x};
\addplot[thick, domain=0:10] {x};
\addplot[only marks, mark=*, mark size=1.5pt] coordinates {(5,5)};
\draw[dashed] (axis cs:5,0) -- (axis cs:5,5);
\draw[dashed] (axis cs:0,5) -- (axis cs:5,5);
\node[font=\scriptsize, anchor=west] at (axis cs:7.6,2.2) {demanda};
\node[font=\scriptsize, anchor=west] at (axis cs:7.6,8.2) {oferta};
\node[font=\scriptsize, anchor=south west] at (axis cs:5.1,5.1) {$E$};
\end{axis}
\end{tikzpicture}
\end{center}
```

| Situación | Qué ocurre |
| --- | --- |
| $P > P^{*}$ | exceso de oferta: los vendedores bajan el precio |
| $P < P^{*}$ | exceso de demanda: los compradores pujan al alza |
| $P = P^{*}$ | el mercado se vacía |

**El precio es una señal y un incentivo a la vez.** Informa de la escasez relativa y
premia a quien produce lo que se demanda, y esa doble función es lo que hace que el
mercado coordine sin que nadie dirija.

### Estática comparativa

| Cambio | $P^{*}$ | $Q^{*}$ |
| --- | --- | --- |
| Aumenta la demanda | sube | sube |
| Disminuye la demanda | baja | baja |
| Aumenta la oferta | baja | sube |
| Disminuye la oferta | sube | baja |
| Aumentan las dos | indeterminado | sube |
| Aumenta demanda, cae oferta | sube | indeterminado |

Las dos últimas filas son las importantes: **cuando las dos curvas se mueven, una de las
dos variables queda indeterminada** y depende de la magnitud relativa de los
desplazamientos.

## Elasticidades

$$\varepsilon_p = \frac{\text{variación porcentual de la cantidad}}
{\text{variación porcentual del precio}}$$

| Elasticidad-precio de la demanda | Nombre |
| --- | --- |
| $\lvert\varepsilon\rvert > 1$ | elástica |
| $\lvert\varepsilon\rvert = 1$ | unitaria |
| $\lvert\varepsilon\rvert < 1$ | inelástica |
| $\lvert\varepsilon\rvert = 0$ | perfectamente inelástica |
| $\lvert\varepsilon\rvert = \infty$ | perfectamente elástica |

| Determinante | Hace la demanda más elástica |
| --- | --- |
| Existencia de sustitutivos | sí |
| Bien de lujo frente a necesidad | sí |
| Proporción del presupuesto que absorbe | sí |
| Horizonte temporal largo | sí |
| Definición estrecha del mercado | sí |

**La última fila explica una aparente contradicción**: la demanda de «alimentos» es
inelástica y la de «una marca concreta de yogur» muy elástica, porque en el segundo caso
hay sustitutivos inmediatos.

Otras elasticidades:

$$\varepsilon_m = \frac{\%\Delta Q}{\%\Delta \text{renta}}, \qquad
\varepsilon_{xy} = \frac{\%\Delta Q_x}{\%\Delta P_y}$$

## Aplicaciones

### Ingreso total

$$IT = P \times Q$$

| Si la demanda es | Subir el precio |
| --- | --- |
| Elástica | **reduce** el ingreso |
| Unitaria | lo deja igual |
| Inelástica | lo **aumenta** |

```{=latex}
\begin{ejemplo}
La paradoja de la buena cosecha: un año de cosecha excepcional desplaza la oferta a la
derecha, el precio cae y, como la demanda de alimentos es inelástica, \textbf{el ingreso
total de los agricultores disminuye}. Una buena cosecha empobrece al agricultor
individualmente si le ocurre a todos a la vez.

\medskip
Es también una falacia de composición: al agricultor aislado con buena cosecha le va
mejor, porque su producción no mueve el precio.
\end{ejemplo}
```

### Controles de precios

| Control | Dónde se fija | Consecuencia |
| --- | --- | --- |
| **Precio máximo** | por debajo del equilibrio | escasez, colas, mercado negro, racionamiento |
| **Precio mínimo** | por encima del equilibrio | excedente no vendido |

Ejemplos habituales: el alquiler regulado como precio máximo y el salario mínimo como
precio mínimo en el mercado de trabajo.

```{=latex}
\begin{anotacion}
Un control de precios \textbf{no elimina el racionamiento}, cambia el criterio con que se
raciona: en vez del precio, la cola, la antigüedad, el contacto personal o el sorteo. La
pregunta relevante no es si se raciona sino qué criterio se prefiere, y esa es una
cuestión normativa.
\end{anotacion}
```

### Impuestos

Un impuesto por unidad separa el precio que paga el comprador del que recibe el vendedor.

```{=latex}
\begin{proposicion}[Incidencia impositiva]
El reparto de la carga entre comprador y vendedor \textbf{no depende de a quién se exija
legalmente el impuesto}, sino de las elasticidades: soporta más carga el lado más
inelástico.
\end{proposicion}
```

| Situación | Quién soporta la carga |
| --- | --- |
| Demanda inelástica, oferta elástica | el comprador |
| Demanda elástica, oferta inelástica | el vendedor |
| Elasticidades similares | se reparte |

Y todo impuesto reduce la cantidad intercambiada, generando **pérdida irrecuperable de
eficiencia**: transacciones que beneficiaban a las dos partes y que dejan de producirse.

$$\text{pérdida} \approx \tfrac{1}{2}\,t\,\Delta Q$$

**Cuanto más elásticas son las curvas, mayor es la pérdida**, porque más se reduce la
cantidad. De ahí el argumento de gravar bienes de demanda inelástica: recauda mucho y
distorsiona poco, aunque suele ser regresivo.

## Eficiencia del equilibrio competitivo

| Excedente | Definición |
| --- | --- |
| Del consumidor | disposición a pagar menos precio pagado |
| Del productor | precio recibido menos coste marginal |
| Total | la suma |

```{=latex}
\begin{teorema}
El equilibrio competitivo maximiza el excedente total: cualquier otra cantidad
intercambiada lo reduce.
\end{teorema}
```

La intuición: en el equilibrio, el último comprador valora el bien exactamente en lo que
cuesta producirlo. Una unidad más costaría más de lo que vale y una menos dejaría sin
realizar una ganancia mutua.

```{=latex}
\begin{anotacion}
El teorema supone competencia perfecta, información completa y ausencia de efectos sobre
terceros. Cuando alguna condición falla —monopolio, contaminación, información
asimétrica— hay \textbf{fallo de mercado}, y el equilibrio deja de ser eficiente. Eso es
lo que justifica el capítulo 4.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
La demanda de un bien es $Q_d = 120 - 3P$ y la oferta $Q_s = 2P$. Hallar el equilibrio y
los excedentes.
\end{ejercicio}

\begin{solucion}
$120-3P = 2P$ da $P^{*} = 24$ y $Q^{*} = 48$.

\medskip
La demanda corta el eje de precios en 40, así que el excedente del consumidor es
$\tfrac12\cdot48\cdot16 = 384$. La oferta parte del origen, así que el del productor es
$\tfrac12\cdot48\cdot24 = 576$. Total, 960.
\end{solucion}

\begin{ejercicio}
El precio de un bien sube un 10\,\% y su ingreso total aumenta un 3\,\%. ¿Qué se deduce
sobre la elasticidad?
\end{ejercicio}

\begin{solucion}
Que la demanda es \textbf{inelástica}: si subir el precio aumenta el ingreso, la cantidad ha
caído proporcionalmente menos de lo que ha subido el precio. En concreto, la cantidad ha
bajado en torno a un 6,4\,\%, así que $\lvert\varepsilon\rvert \approx 0{,}64$.
\end{solucion}

\begin{ejercicio}
Se establece un precio máximo por debajo del equilibrio en el mercado del alquiler. ¿Qué
efectos cabe esperar a corto y a largo plazo?
\end{ejercicio}

\begin{solucion}
A corto plazo, exceso de demanda: más gente busca piso del que hay disponible, y aparece
racionamiento por cola, contacto o pagos encubiertos.

\medskip
A largo plazo el efecto es mayor, porque la oferta es más elástica: se construye menos
vivienda para alquilar, se retiran pisos del mercado y se reduce el mantenimiento. La
escasez se agrava con el tiempo, que es lo contrario del efecto buscado.
\end{solucion}
```

El mecanismo de mercado y sus aplicaciones están desarrollados en \cite{krugman2022},
\cite{mankiw2017} y \cite{mochon2009}, con ejemplos aplicados en \cite{acemoglu2017}.
