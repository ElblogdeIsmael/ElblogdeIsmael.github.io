# Dispositivos electrónicos

Tema 4 del programa. Los semiconductores y los tres dispositivos que se
construyen con ellos: el diodo, el transistor bipolar y el transistor de efecto
de campo.

## Semiconductores

Un semiconductor tiene una conductividad intermedia entre la de un conductor y la
de un aislante, y —esto es lo que lo hace útil— **modificable**.

La explicación está en la estructura de bandas. En un aislante la banda prohibida
es grande y ningún electrón la salta; en un conductor las bandas se solapan; en un
semiconductor la banda prohibida es pequeña, del orden de 1 eV, así que la
agitación térmica basta para que algunos electrones la crucen.

| Material | Banda prohibida | Uso |
| --- | ---: | --- |
| Silicio | 1,12 eV | el 95 % de los circuitos integrados |
| Germanio | 0,67 eV | histórico, tensión de codo menor |
| Arseniuro de galio | 1,42 eV | alta frecuencia y optoelectrónica |

Cuando un electrón salta a la banda de conducción deja un **hueco** en la de
valencia. El hueco se comporta como una carga positiva móvil, y la corriente en un
semiconductor la llevan los dos: electrones y huecos.

### Dopado

Añadir impurezas controladas cambia la conductividad en varios órdenes de
magnitud:

| Tipo | Impureza | Portadores mayoritarios |
| --- | --- | --- |
| N | pentavalente (fósforo, arsénico) | electrones |
| P | trivalente (boro, galio) | huecos |

El material dopado sigue siendo **eléctricamente neutro**: se han añadido cargas
móviles, no carga neta. Es la confusión más frecuente del tema.

## La unión PN

Al unir un semiconductor tipo P con uno tipo N ocurren dos cosas seguidas:

1. Los electrones del lado N difunden hacia el P y los huecos al revés, y se
   recombinan.
2. Quedan los iones fijos, sin portadores móviles: es la **zona de deplexión**, y
   el campo eléctrico que crean detiene la difusión.

En equilibrio hay una barrera de potencial de unos 0,7 V en silicio.

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.95]
\draw[fill=black!8] (0,0) rectangle (2.6,1.4);
\draw[fill=black!22] (2.6,0) rectangle (3.6,1.4);
\draw[fill=black!8] (3.6,0) rectangle (6.2,1.4);
\node at (1.3,0.7) {\large P};
\node at (4.9,0.7) {\large N};
\node[font=\scriptsize, align=center] at (3.1,-0.55) {zona de\\deplexión};
\draw[->, >=stealth] (3.55,1.75) -- (2.65,1.75);
\node[font=\scriptsize, anchor=south] at (3.1,1.8) {$\vec{E}$};
\node[font=\scriptsize] at (1.3,-0.55) {huecos};
\node[font=\scriptsize] at (4.9,-0.55) {electrones};
\end{tikzpicture}
\end{center}
```

### Polarización

| Polarización | Conexión | Efecto sobre la zona de deplexión | Corriente |
| --- | --- | --- | --- |
| Directa | $+$ al P, $-$ al N | se estrecha | crece exponencialmente por encima de 0,7 V |
| Inversa | $+$ al N, $-$ al P | se ensancha | despreciable, del orden de nA |

Ese comportamiento asimétrico es lo que convierte la unión en un dispositivo útil,
y es todo el contenido del diodo.

## El diodo

La ecuación de Shockley describe la característica:

$$I = I_S\left(e^{V/(n V_T)} - 1\right), \qquad V_T = \frac{kT}{q} \approx 26\ \text{mV a } 300\ \text{K}$$

```{=latex}
\begin{center}
\begin{tikzpicture}[scale=0.95]
\draw[->, >=stealth] (-2.6,0) -- (2.6,0) node[anchor=west, font=\small] {$V$};
\draw[->, >=stealth] (0,-1.1) -- (0,2.1) node[anchor=south, font=\small] {$I$};
\draw[thick, domain=-2.5:0.68, samples=60] plot (\x, {0.02*\x});
\draw[thick, domain=0.68:1.35, samples=60]
      plot (\x, {0.02 + 0.16*exp(4.6*(\x-0.68))});
\draw[dashed] (0.7,0) -- (0.7,-0.35) node[anchor=north, font=\scriptsize] {0,7 V};
\node[font=\scriptsize, anchor=north east] at (-1.4,-0.05) {inversa};
\node[font=\scriptsize, anchor=south west] at (0.95,0.9) {directa};
\end{tikzpicture}
\end{center}
```

Para analizar circuitos se usan modelos simplificados, y elegir el adecuado es
parte del ejercicio:

| Modelo | Aproximación | Cuándo |
| --- | --- | --- |
| Ideal | interruptor: 0 V en directa, abierto en inversa | estimaciones rápidas |
| Con tensión de codo | 0,7 V constante en directa | el habitual |
| Con resistencia | 0,7 V más $r_d$ en serie | corrientes altas |
| Exponencial | la ecuación completa | análisis preciso o simulación |

### Aplicaciones

**Rectificación.** Convertir alterna en continua, que es el primer paso de
cualquier fuente de alimentación.

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.85, transform shape]
\draw (0,0) to[sV=$v_i$] (0,2.4) to[D=$D$] (2.4,2.4)
      to[R=$R_L$, v^=$v_o$] (2.4,0) -- (0,0);
\draw (0,0) node[ground]{};
\node[font=\footnotesize] at (1.2,-1) {rectificador de media onda};
\end{circuitikz}
\end{center}
```

El de **media onda** deja pasar un semiciclo; el de **onda completa** con puente de
cuatro diodos aprovecha los dos, y un condensador en paralelo con la carga alisa la
salida. El rizado que queda es inversamente proporcional a la capacidad, que es la
razón de que las fuentes lleven condensadores grandes.

**Diodo Zener.** Diseñado para trabajar en ruptura inversa, donde mantiene una
tensión casi constante. Sirve como referencia de tensión y como protección.

**LED.** La recombinación en directa emite fotones. Su tensión de codo depende del
color, de 1,8 V en rojo a 3,4 V en azul, y **siempre necesita una resistencia en
serie**: sin ella, la característica exponencial hace que un pequeño exceso de
tensión lo destruya.

**Fotodiodo y célula solar.** El proceso inverso: la luz genera pares
electrón-hueco.

## El transistor bipolar

Tres regiones dopadas alternadamente, NPN o PNP, con dos uniones. Tres terminales:
emisor, base y colector.

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.95, transform shape]
\draw (0,0) node[npn](Q){};
\draw (Q.base) -- ++(-0.9,0) node[anchor=east, font=\small] {B};
\draw (Q.collector) -- ++(0,0.7) node[anchor=south, font=\small] {C};
\draw (Q.emitter) -- ++(0,-0.7) node[anchor=north, font=\small] {E};
\node[font=\footnotesize, anchor=west] at (1.1,0) {NPN};
\end{circuitikz}
\end{center}
```

La relación fundamental:

$$I_E = I_B + I_C, \qquad I_C = \beta\,I_B, \qquad \beta \approx 100\text{--}300$$

Una corriente pequeña en la base controla una mucho mayor en el colector: eso es
la **amplificación**.

### Regiones de trabajo

| Región | Unión BE | Unión BC | Comportamiento |
| --- | --- | --- | --- |
| Corte | inversa | inversa | no conduce: interruptor abierto |
| Activa | directa | inversa | $I_C = \beta I_B$: amplificador |
| Saturación | directa | directa | conduce al máximo: interruptor cerrado |
| Inversa | inversa | directa | no se usa |

Las dos aplicaciones salen directamente de la tabla:

- **Amplificar**: se polariza en la región activa, en un punto de trabajo estable,
  y la señal se superpone.
- **Conmutar**: se alterna entre corte y saturación. Es lo que hace la lógica
  digital, y la razón de que la región activa se evite en un circuito digital:
  ahí el transistor disipa potencia.

$\beta$ varía mucho entre unidades del mismo modelo y con la temperatura, así que
un circuito **no debe depender de su valor exacto**. La polarización por divisor
de tensión en la base con resistencia en el emisor es la configuración habitual
precisamente porque estabiliza el punto de trabajo frente a esa variación.

## El transistor de efecto de campo

Aquí el control es por **tensión** y no por corriente, y ese es el motivo de que
domine la electrónica digital.

El MOSFET tiene puerta, drenador, surtidor y sustrato. La puerta está aislada por
óxido, así que **no consume corriente en régimen permanente**.

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.95, transform shape]
\draw (0,0) node[nmos](M){};
\draw (M.gate) -- ++(-0.9,0) node[anchor=east, font=\small] {G};
\draw (M.drain) -- ++(0,0.7) node[anchor=south, font=\small] {D};
\draw (M.source) -- ++(0,-0.7) node[anchor=north, font=\small] {S};
\node[font=\footnotesize, anchor=west] at (1.3,0) {NMOS de acumulación};
\end{circuitikz}
\end{center}
```

| Región | Condición | Corriente |
| --- | --- | --- |
| Corte | $V_{GS} < V_T$ | $I_D \approx 0$ |
| Óhmica | $V_{GS} > V_T$ y $V_{DS} < V_{GS}-V_T$ | crece con $V_{DS}$: se comporta como resistencia |
| Saturación | $V_{GS} > V_T$ y $V_{DS} \ge V_{GS}-V_T$ | $I_D \approx \frac{k}{2}(V_{GS}-V_T)^2$ |

### Por qué el MOSFET desplazó al bipolar

| | Bipolar | MOSFET |
| --- | --- | --- |
| Control | por corriente de base | por tensión de puerta |
| Consumo en régimen permanente | corriente de base continua | prácticamente nulo |
| Integración | menos denso | mucho más denso |
| Simetría N y P | menos práctica | inmediata: es la base de CMOS |
| Velocidad de conmutación | alta | alta, y escala mejor |

La segunda fila es la decisiva: con miles de millones de transistores, una
corriente de control por cada uno sería inviable. La tercera y la cuarta explican
por qué toda la lógica digital moderna es CMOS, que es el tema siguiente.

## El amplificador operacional

Un amplificador diferencial de ganancia muy alta, empaquetado como bloque. Se
analiza con dos hipótesis, el **cortocircuito virtual**:

1. La corriente por las entradas es nula, porque la impedancia de entrada es
   enorme.
2. Con realimentación negativa, las dos entradas están al mismo potencial.

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.85, transform shape]
\draw (0,0) node[op amp](A){};
\draw (A.-) -- ++(-0.7,0) coordinate(n) to[R=$R_1$] ++(-1.6,0)
      node[anchor=east, font=\small] {$v_i$};
\draw (A.+) -- ++(-0.7,0) node[ground]{};
\draw (n) -- ++(0,1.5) coordinate(t) to[R=$R_2$] ++(3.1,0) -| (A.out);
\draw (A.out) -- ++(0.5,0) node[anchor=west, font=\small] {$v_o$};
\node[font=\footnotesize] at (1.3,-1.6) {amplificador inversor};
\end{circuitikz}
\end{center}
```

Para el inversor de la figura:

$$v_o = -\frac{R_2}{R_1}\,v_i$$

La ganancia la fijan **dos resistencias**, no el operacional. Esa es la idea
central: la realimentación negativa cambia una ganancia enorme, imprecisa y
variable con la temperatura por una pequeña, precisa y estable.

| Configuración | Ganancia |
| --- | --- |
| Inversor | $-R_2/R_1$ |
| No inversor | $1 + R_2/R_1$ |
| Seguidor | $1$, con impedancia de entrada altísima |
| Sumador | $-\sum (R_f/R_i)\,v_i$ |
| Comparador | saturación, **sin** realimentación negativa |

El seguidor no amplifica y sirve para lo que se llama adaptación de impedancias:
permite conectar una fuente débil a una carga exigente sin que la señal se
hunda. El desarrollo de los dispositivos está en \cite{sedra2020},
\cite{malvino2007} y \cite{padilla2024b}.
