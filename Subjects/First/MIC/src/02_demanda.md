# La demanda individual y del mercado

Capítulo 2 del programa. La función de demanda generalizada, la curva precio-consumo y
la derivación de la demanda, la curva renta-consumo y las curvas de Engel, el efecto
sustitución y el efecto renta, y la demanda del mercado.

## La función de demanda generalizada

Resolviendo el problema del capítulo anterior para cualesquiera precios y renta se
obtiene la **demanda marshalliana**:

$$x_1^{*} = x_1(p_1, p_2, m), \qquad x_2^{*} = x_2(p_1, p_2, m)$$

```{=latex}
\begin{proposicion}[Homogeneidad de grado cero]
$$x_i(\lambda p_1, \lambda p_2, \lambda m) = x_i(p_1,p_2,m)$$
para todo $\lambda>0$.
\end{proposicion}
```

Multiplicar precios y renta por la misma cantidad no cambia la demanda, que es la
**ausencia de ilusión monetaria**: solo importan los precios relativos y la renta real.

## Variaciones del precio

Manteniendo $p_2$ y $m$ fijos y variando $p_1$, la recta presupuestaria pivota sobre el
eje vertical. Los óptimos sucesivos forman la **curva precio-consumo**, y llevando cada
par $(p_1, x_1)$ a un gráfico se obtiene la **curva de demanda**.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=6.4cm, height=5.2cm, axis lines=left,
  xlabel={$x_1$}, ylabel={$x_2$},
  xmin=0, xmax=8, ymin=0, ymax=6,
  tick label style={font=\scriptsize}, label style={font=\scriptsize}, samples=100,
  title={curva precio-consumo}, title style={font=\scriptsize},
]
\addplot[thin, domain=0:3] {5-1.667*x};
\addplot[thin, domain=0:5] {5-x};
\addplot[thin, domain=0:7.5] {5-0.667*x};
\addplot[only marks, mark=*, mark size=1.2pt]
  coordinates {(1.5,2.5) (2.5,2.5) (3.75,2.5)};
\addplot[dashed, domain=1.2:4.2] {2.5};
\end{axis}
\begin{axis}[
  at={(7.2cm,0)},
  width=6.4cm, height=5.2cm, axis lines=left,
  xlabel={$x_1$}, ylabel={$p_1$},
  xmin=0, xmax=5, ymin=0, ymax=3,
  tick label style={font=\scriptsize}, label style={font=\scriptsize}, samples=100,
  title={curva de demanda}, title style={font=\scriptsize},
]
\addplot[thick, domain=1.2:4.6] {3.75/x};
\addplot[only marks, mark=*, mark size=1.2pt]
  coordinates {(1.5,2.5) (2.5,1.5) (3.75,1)};
\end{axis}
\end{tikzpicture}
\end{center}
```

**La curva de demanda no es un supuesto: es el resultado** de resolver el problema del
consumidor para cada precio. Que tenga pendiente negativa es lo habitual, y el apartado
del efecto renta explica por qué puede no tenerla.

## Variaciones de la renta

Variando $m$ con los precios fijos, la recta se desplaza en paralelo. Los óptimos forman
la **curva renta-consumo**, y la relación entre renta y cantidad demandada es la **curva
de Engel**.

| Tipo de bien | Cómo responde a la renta | Elasticidad renta |
| --- | --- | --- |
| **Normal necesario** | sube menos que proporcionalmente | entre 0 y 1 |
| **Normal de lujo** | sube más que proporcionalmente | mayor que 1 |
| **Inferior** | baja al subir la renta | negativa |

```{=latex}
\begin{anotacion}
Ningún bien es inferior en sí mismo: depende del nivel de renta y del contexto. El
transporte público es normal con renta baja e inferior cuando el coche se vuelve
asequible. Y la \textbf{ley de Engel} —la proporción de renta gastada en alimentación
cae al subir la renta— es una de las regularidades empíricas más sólidas de la economía.
\end{anotacion}
```

## Efecto sustitución y efecto renta

Cuando cambia un precio, la demanda se mueve por dos razones distintas, y separarlas es
el resultado más importante del capítulo.

| Efecto | Qué recoge | Signo |
| --- | --- | --- |
| **Sustitución** | el bien se ha encarecido *en relación* con el otro | siempre negativo |
| **Renta** | el poder adquisitivo ha cambiado | depende del tipo de bien |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=9.4cm, height=6.2cm, axis lines=left,
  xlabel={$x_1$}, ylabel={$x_2$},
  xmin=0, xmax=9, ymin=0, ymax=6,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=140,
]
\addplot[thick, domain=0:5] {5-x};
\addplot[thick, domain=0:8.5] {5-0.588*x};
\addplot[dashed, domain=0:6.6] {3.9-0.588*x};
\addplot[domain=0.5:8] {1.5625/x};
\addplot[domain=1.1:8.8] {3.0/x};
\addplot[only marks, mark=*, mark size=1.4pt]
  coordinates {(2.5,2.5) (3.35,1.93) (4.4,2.41)};
\node[font=\scriptsize, anchor=south] at (axis cs:2.5,2.65) {$A$};
\node[font=\scriptsize, anchor=north] at (axis cs:3.35,1.82) {$B$};
\node[font=\scriptsize, anchor=south] at (axis cs:4.4,2.55) {$C$};
\end{axis}
\end{tikzpicture}
\end{center}
```

En la figura, al bajar $p_1$ el consumidor pasa de $A$ a $C$. La descomposición separa
ese movimiento en dos:

- **De $A$ a $B$**: el efecto sustitución, sobre la misma curva de indiferencia con los
  precios nuevos.
- **De $B$ a $C$**: el efecto renta, el desplazamiento paralelo hasta la nueva recta.

| Descomposición | Cómo compensa | La curva de referencia |
| --- | --- | --- |
| **Hicks** | mantiene la utilidad | el mismo nivel de indiferencia |
| **Slutsky** | mantiene el poder de compra de la cesta inicial | la cesta $A$ sigue siendo asequible |

Las dos dan el mismo signo y valores algo distintos. Hicks es la habitual en teoría y
Slutsky la operativa, porque la cesta inicial es observable y el nivel de utilidad no.

### Los tres casos

| Tipo de bien | Efecto sustitución | Efecto renta | Efecto total |
| --- | --- | --- | --- |
| Normal | negativo | negativo | negativo: demanda decreciente |
| Inferior corriente | negativo | positivo, menor | negativo |
| **Giffen** | negativo | positivo, **mayor** | **positivo**: demanda creciente |

```{=latex}
\begin{anotacion}
Un bien de Giffen exige dos condiciones a la vez: ser inferior y absorber una parte
grande del presupuesto, de modo que el efecto renta domine. Es teóricamente posible y
empíricamente rarísimo; el caso mejor documentado son estudios sobre el arroz en
provincias pobres de China. Que exista importa porque muestra que \textbf{la ley de la demanda
no es un teorema}, sino una regularidad con excepciones acotadas.
\end{anotacion}
```

## Elasticidades

$$\varepsilon_{p} = \frac{\partial x_1}{\partial p_1}\cdot\frac{p_1}{x_1}, \qquad
\varepsilon_{m} = \frac{\partial x_1}{\partial m}\cdot\frac{m}{x_1}, \qquad
\varepsilon_{12} = \frac{\partial x_1}{\partial p_2}\cdot\frac{p_2}{x_1}$$

| Elasticidad-precio | Demanda | Efecto de subir el precio sobre el ingreso |
| --- | --- | --- |
| $\lvert\varepsilon_p\rvert > 1$ | elástica | el ingreso **baja** |
| $\lvert\varepsilon_p\rvert = 1$ | unitaria | el ingreso no cambia |
| $\lvert\varepsilon_p\rvert < 1$ | inelástica | el ingreso **sube** |

**Esa tabla es la de más uso práctico de toda la asignatura**: dice si conviene subir o
bajar el precio para aumentar los ingresos, y la respuesta depende solo de la
elasticidad.

Y el signo de la elasticidad cruzada clasifica la relación entre bienes:

| $\varepsilon_{12}$ | Relación |
| --- | --- |
| Positiva | sustitutivos: café y té |
| Negativa | complementarios: coche y gasolina |
| Nula | independientes |

## La demanda del mercado

$$X(p) = \sum_{i=1}^{n} x_i(p)$$

Es la **suma horizontal** de las demandas individuales: para cada precio se suman las
cantidades, no los precios.

| Propiedad | Consecuencia |
| --- | --- |
| Es más plana que las individuales | más consumidores, más respuesta al precio |
| Puede ser continua con demandas escalonadas | la agregación suaviza |
| Depende de la distribución de la renta | no solo de la renta total |

La última fila es una limitación importante del modelo: **agregar consumidores no es
inmediato**. Dos distribuciones de renta con la misma media generan demandas de mercado
distintas, salvo bajo supuestos muy restrictivos sobre las preferencias.

## Ejercicios

```{=latex}
\begin{ejercicio}
La demanda de un bien es $x = 100 - 2p$. Calcular la elasticidad-precio en $p=10$ y en
$p=40$, e indicar si conviene subir el precio en cada caso.
\end{ejercicio}

\begin{solucion}
$dx/dp = -2$.

\medskip
En $p=10$: $x = 80$ y $\varepsilon = -2\cdot10/80 = -0{,}25$, inelástica. Subir el precio
aumenta el ingreso.

\medskip
En $p=40$: $x = 20$ y $\varepsilon = -2\cdot40/20 = -4$, elástica. Subir el precio reduce
el ingreso.

\medskip
El ingreso es máximo donde la elasticidad vale $-1$, que aquí es $p=25$ con $x=50$ e
ingreso 1250.
\end{solucion}

\begin{ejercicio}
Un bien es inferior. ¿Puede su demanda tener pendiente positiva? ¿Y negativa?
\end{ejercicio}

\begin{solucion}
Las dos cosas son posibles. Al bajar su precio, el efecto sustitución aumenta la
cantidad y el efecto renta la reduce, porque el consumidor es más rico y un bien inferior
se compra menos. Si el efecto renta domina, la demanda tiene pendiente positiva y el
bien es de Giffen; si no, negativa como es habitual. \textbf{Todo bien de Giffen es inferior, y
casi ningún bien inferior es de Giffen.}
\end{solucion}

\begin{ejercicio}
El precio del té sube un 10\,\% y la demanda de café aumenta un 4\,\%. ¿Qué relación hay
entre los dos bienes?
\end{ejercicio}

\begin{solucion}
$\varepsilon_{\text{café,té}} = 4/10 = 0{,}4$, positiva: son \textbf{sustitutivos}. El valor
es menor que 1, así que la sustitución es débil: el consumidor no cambia de bebida con
facilidad. Con una elasticidad cruzada cercana a cero serían independientes.
\end{solucion}
```

La derivación de la demanda y la descomposición en efectos está desarrollada en
\cite{pindyck2018} y \cite{frank2009}, con la exposición introductoria de
\cite{krugman2013}.
