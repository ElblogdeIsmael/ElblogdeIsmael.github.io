# Programación multiobjetivo

Tema 8 del programa, y último. Optimizar varios objetivos a la vez sobre una región
continua: soluciones Pareto-óptimas, cómo generarlas y cómo elegir entre ellas.

## Aspectos básicos

$$\text{Opt.}\quad \left[\,f_1(\mathbf{x}), f_2(\mathbf{x}), \dots, f_k(\mathbf{x})\,\right]
\qquad \text{s.a.}\quad \mathbf{x} \in S$$

Con $k > 1$, **el problema no tiene solución en el sentido habitual**: salvo que los
objetivos no entren en conflicto, no hay un punto que optimice todos a la vez.

La diferencia con el tema 6, que conviene repetir: allí las alternativas eran un
conjunto finito ya dado, y aquí son una región continua definida por restricciones.

### Dos espacios

Hay que distinguirlos porque el análisis salta de uno a otro:

| Espacio | Qué contiene |
| --- | --- |
| De decisión | los $\mathbf{x}$ de la región factible $S$, en $\mathbb{R}^n$ |
| De objetivos | los vectores $(f_1(\mathbf{x}), \dots, f_k(\mathbf{x}))$, en $\mathbb{R}^k$ |

La región factible vive en el primero y el frente de Pareto se dibuja en el segundo.
Dos soluciones muy distintas en decisión pueden ser casi iguales en objetivos, y al
revés.

## Soluciones Pareto-óptimas

$\mathbf{x}^*$ es **Pareto-óptima** o eficiente si no existe otra solución factible
que mejore algún objetivo sin empeorar ninguno.

Formalmente, para maximización: no existe $\mathbf{x} \in S$ con
$f_j(\mathbf{x}) \ge f_j(\mathbf{x}^*)$ para todo $j$ y desigualdad estricta en
alguno.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.2cm, height=5.4cm,
  xlabel={$f_1$ (maximizar)}, ylabel={$f_2$ (maximizar)},
  xmin=0, xmax=11, ymin=0, ymax=11,
  xtick=\empty, ytick=\empty,
  % La leyenda va fuera: dentro caia justo encima de los puntos dominados.
  legend style={font=\footnotesize, at={(1.03,1)}, anchor=north west,
                draw=none, fill=none}
]
\addplot[only marks, mark=*, mark size=1.8pt] coordinates {
  (1.5,9.4) (3.0,9.0) (4.6,8.2) (6.2,7.0) (7.6,5.4) (8.6,3.4) (9.2,1.5)
};
\addlegendentry{frente de Pareto}
\addplot[only marks, mark=o, mark size=1.9pt] coordinates {
  (2.2,6.8) (4.0,5.6) (5.6,4.2) (3.2,7.5) (6.4,3.0) (1.8,4.4) (7.0,2.0)
};
\addlegendentry{dominadas}
\node[circle, fill, inner sep=1.4pt] at (axis cs:9.2,9.4) {};
\node[font=\footnotesize, anchor=east] at (axis cs:9.05,9.9) {punto ideal};
\end{axis}
\end{tikzpicture}
\end{center}
```

Los puntos rellenos forman el **frente de Pareto**: mejorar un objetivo exige
empeorar el otro. Los huecos están dominados y ningún decisor razonable los elegiría.

### Puntos de referencia

| Punto | Cómo se calcula | Qué es |
| --- | --- | --- |
| **Ideal** | optimizar cada objetivo por separado | lo mejor alcanzable en cada uno |
| **Antiideal** o nadir | el peor valor de cada objetivo **dentro del frente** | el extremo opuesto |

El punto ideal **casi nunca es factible**: si lo fuera, no habría conflicto entre
objetivos y el problema sería de un solo objetivo disfrazado. Su utilidad es servir
de referencia para medir distancias, que es lo que hace la programación por
compromiso.

Y un cuidado con el antiideal: se calcula **sobre el frente**, no sobre toda la
región factible. Tomando el peor valor de cada objetivo en toda $S$ sale un punto
mucho más pesimista que no representa ninguna solución razonable.

## Resolución gráfica con dos objetivos

Con dos variables y dos objetivos se resuelve dibujando, como en el tema 2:

| Paso | Qué se hace |
| --- | --- |
| 1 | dibujar la región factible en el espacio de decisión |
| 2 | optimizar cada objetivo por separado y marcar dónde se alcanza |
| 3 | el frente eficiente es el tramo de frontera entre esos dos puntos |
| 4 | trasladar ese tramo al espacio de objetivos |

En un problema lineal el frente está **en la frontera de la región factible**, y va
del vértice que optimiza $f_1$ al que optimiza $f_2$ recorriendo las aristas
intermedias. Los vértices de ese tramo son las **soluciones eficientes básicas**.

## Técnicas generadoras

Producen soluciones eficientes sin pedir todavía las preferencias del decisor.

### Método de las ponderaciones

Se convierte en un problema de un solo objetivo:

$$\max\ \sum_{j=1}^{k} w_j f_j(\mathbf{x}),
\qquad w_j > 0,\ \sum_j w_j = 1$$

Variando los pesos se generan soluciones distintas del frente.

| Propiedad | Alcance |
| --- | --- |
| Con $w_j > 0$, la solución es siempre eficiente | sí |
| Se alcanzan todas las eficientes | **solo si el problema es convexo** |

La segunda limitación es la importante: en un problema no convexo hay soluciones
eficientes situadas en las «hendiduras» del frente que **ninguna combinación de pesos
alcanza**. El método las pierde y nada avisa de ello.

Y los objetivos deben normalizarse antes de ponderar, porque si están en unidades
distintas el peso no significa lo que parece.

### Método de las restricciones

Se optimiza un objetivo y los demás pasan a ser restricciones:

$$\max\ f_1(\mathbf{x})
\qquad \text{s.a.}\quad f_j(\mathbf{x}) \ge \varepsilon_j,\ j = 2,\dots,k,
\quad \mathbf{x} \in S$$

Variando los $\varepsilon_j$ se recorre el frente.

**Su ventaja sobre las ponderaciones es que sí funciona en problemas no convexos**:
alcanza cualquier solución eficiente. Su coste es resolver un problema por cada
combinación de valores de $\varepsilon$, que crece deprisa con $k$.

Además los multiplicadores de las restricciones añadidas son los precios sombra del
tema 3 aplicados aquí: dicen **cuánto cuesta en $f_1$ exigir una unidad más de
$f_j$**, que es exactamente la relación de intercambio entre objetivos.

### Método simplex multicriterio

Adapta el símplex del tema 3 para generar todos los vértices eficientes de un
problema lineal multiobjetivo. Da el frente completo en el caso lineal, y su coste
crece mucho con el tamaño.

## Programación por compromiso

Elige la solución **más próxima al punto ideal**. Se minimiza una distancia:

$$L_p(\mathbf{x}) = \left[\sum_{j=1}^{k} w_j^p
\left(\frac{f_j^* - f_j(\mathbf{x})}{f_j^* - f_{j*}}\right)^{p}\right]^{1/p}$$

con $f_j^*$ el valor ideal y $f_{j*}$ el antiideal, que es lo que normaliza el
cociente.

| $p$ | Qué minimiza | Comportamiento |
| ---: | --- | --- |
| 1 | la suma de las desviaciones | **eficiencia**: acepta que un objetivo quede muy mal si otros compensan |
| 2 | la distancia euclídea | intermedio |
| $\infty$ | la desviación **máxima** | **equilibrio**: reparte el sacrificio entre objetivos |

Los dos extremos tienen nombre propio: con $p=1$ se busca el mayor logro agregado, y
con $p = \infty$ la solución más equilibrada, que es el criterio minimax aplicado a
las desviaciones. **El conjunto de soluciones entre $L_1$ y $L_\infty$ es el conjunto
compromiso**, y suele ser una parte pequeña del frente, lo que ya es una ayuda para
el decisor.

## Programación por metas

Cambia el planteamiento: en vez de optimizar, **el decisor fija una meta $t_j$ para
cada objetivo** y se busca la solución que menos se desvíe de ellas.

Cada meta se escribe con dos variables de desviación:

$$f_j(\mathbf{x}) + d_j^- - d_j^+ = t_j,
\qquad d_j^-,\, d_j^+ \ge 0$$

con $d_j^-$ la desviación por defecto y $d_j^+$ por exceso. **En el óptimo al menos
una de las dos es cero**: no se puede quedar por encima y por debajo a la vez.

Qué se penaliza depende del tipo de meta:

| Tipo de meta | Qué se minimiza |
| --- | --- |
| «al menos $t_j$» | $d_j^-$ |
| «como mucho $t_j$» | $d_j^+$ |
| «exactamente $t_j$» | $d_j^- + d_j^+$ |

### Variantes

**Programación por metas ponderada.** Se minimiza la suma ponderada de las
desviaciones no deseadas:

$$\min\ \sum_j \left(u_j d_j^- + v_j d_j^+\right)$$

**Programación por metas lexicográfica.** Las metas se agrupan en niveles de
prioridad y se optimizan en orden: primero el nivel 1, y una vez alcanzado su mejor
valor posible, se optimiza el nivel 2 **sin empeorar el primero**.

La diferencia es de fondo: la ponderada **compensa** entre metas, y la lexicográfica
**no**. Una meta de prioridad 2 nunca justifica sacrificar nada de la prioridad 1, por
mucha ganancia que ofrezca.

### Un aviso

La programación por metas **puede devolver una solución dominada** si las metas se
fijan por debajo de lo alcanzable: se cumplen todas con desviación cero y el proceso
se detiene, aunque existiera una solución mejor en todos los objetivos. La
comprobación es directa: si todas las desviaciones son cero, hay que verificar la
eficiencia de la solución obtenida.

## Comparación

| Enfoque | Cuándo se piden las preferencias | Qué produce |
| --- | --- | --- |
| Ponderaciones y restricciones | después, sobre el frente | el frente eficiente |
| Compromiso | antes: pesos y $p$ | una solución |
| Metas | antes: metas y prioridades | una solución |
| Métodos interactivos | durante, por etapas | una solución, refinada |

Los **interactivos** son el punto intermedio: presentan una solución, el decisor
indica en qué objetivo quiere mejorar y a costa de cuál, y el método genera otra. Es
lo más realista cuando el decisor no sabe de antemano qué pesos quiere, que es lo
habitual.

Y la conclusión que cierra la asignatura: **ningún método elimina la subjetividad de
la decisión**. Lo que hacen es separar lo que es análisis —qué soluciones son
eficientes— de lo que es preferencia —cuál de ellas se elige—, y dejar la segunda
parte explícita en vez de escondida en el modelo.

La programación multiobjetivo y las técnicas generadoras siguen a \cite{romero1993} y
\cite{ehrgott2005}; la programación por metas y por compromiso, también a
\cite{riosinsua2004} y \cite{martin2003}.
