# Circuitos electrónicos básicos

Tema 6 del programa. Los bloques que se construyen con los dispositivos del tema
4: fuentes de alimentación, amplificadores, filtros activos y las interfaces entre
el mundo analógico y el digital.

## Fuente de alimentación lineal

Convierte la red alterna en continua estable. Cuatro etapas, y cada una resuelve
un problema del tema anterior:

```{=latex}
\begin{center}
\begin{tikzpicture}[
  every node/.style={draw, rectangle, minimum height=9mm, minimum width=19mm,
                     align=center, font=\scriptsize},
  every path/.style={draw, ->, >=stealth}
]
\node (t) at (0,0)    {Transformador};
\node (r) at (2.6,0)  {Rectificador};
\node (f) at (5.2,0)  {Filtro};
\node (g) at (7.8,0)  {Regulador};
\node[draw=none] (in)  at (-2.0,0) {230 V\\alterna};
\node[draw=none] (out) at (9.9,0)  {5 V\\continua};
\path (in) -- (t); \path (t) -- (r); \path (r) -- (f);
\path (f) -- (g); \path (g) -- (out);
\end{tikzpicture}
\end{center}
```

| Etapa | Qué hace | Con qué |
| --- | --- | --- |
| Transformador | baja la tensión y aísla de la red | inducción del tema 1 |
| Rectificador | elimina el semiciclo negativo | puente de cuatro diodos |
| Filtro | reduce el rizado | condensador en paralelo |
| Regulador | fija la salida pese a la carga | Zener, o integrado |

El **rizado** que deja el condensador es aproximadamente

$$V_r \approx \frac{I_{carga}}{2 f C}$$

con $2f$ porque el rectificador de onda completa recarga dos veces por ciclo.
Reducirlo exige más capacidad, y de ahí que las fuentes lineales lleven
condensadores voluminosos.

La alternativa moderna es la **fuente conmutada**: en vez de disipar el exceso en
un regulador lineal, conmuta a alta frecuencia y filtra. Su rendimiento supera el
90 % frente al 40-60 % de la lineal, y sus componentes son mucho más pequeños
porque el filtrado a decenas de kilohercios necesita bobinas y condensadores
menores. Es lo que hay dentro de cualquier cargador actual.

## Amplificadores

### Con transistor bipolar

Las tres configuraciones, según qué terminal es común a entrada y salida:

| Configuración | Ganancia de tensión | Ganancia de corriente | Impedancia de entrada | Uso |
| --- | --- | --- | --- | --- |
| Emisor común | alta, e invierte | alta | media | amplificación general |
| Colector común | ≈ 1 | alta | alta | adaptación de impedancias |
| Base común | alta | ≈ 1 | baja | alta frecuencia |

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.85, transform shape]
\draw (0,0) node[npn](Q){};
\draw (Q.collector) to[R=$R_C$] ++(0,2)
      node[anchor=south, font=\small] {$V_{CC}$};
\draw (Q.emitter) -- ++(0,-1.2) node[ground]{};
\draw (Q.base) to[C=$C$] ++(-1.8,0)
      node[anchor=east, font=\small] {$v_i$};
\draw (Q.collector) ++(0,0.55) node[circ]{} -- ++(1.6,0)
      node[anchor=west, font=\small] {$v_o$};
\node[font=\footnotesize] at (0.4,-2.1) {emisor común};
\end{circuitikz}
\end{center}
```

El emisor común amplifica y **invierte**: la ganancia es negativa. El colector
común no amplifica en tensión y sirve para lo contrario, que una fuente débil
pueda atacar una carga exigente sin que la señal se hunda.

**La polarización es lo que decide si el circuito funciona.** Hay que fijar un
punto de trabajo en la región activa que no se desplace con la temperatura ni con
la dispersión de $\beta$. La solución habitual es el divisor de tensión en la base
con una resistencia en el emisor, que introduce realimentación negativa: si la
corriente sube, la tensión del emisor sube y la de base-emisor baja, lo que
compensa.

Los condensadores de acoplo separan la continua de la polarización de la señal
alterna, y por eso el circuito se analiza dos veces: en continua para el punto de
trabajo y en alterna para la ganancia.

### Con amplificador operacional

Es lo que se usa en la práctica, porque la ganancia la fijan resistencias en vez
de un dispositivo. Las configuraciones del tema 4 más las que faltan:

| Circuito | Salida |
| --- | --- |
| Inversor | $-\dfrac{R_2}{R_1}v_i$ |
| No inversor | $\left(1+\dfrac{R_2}{R_1}\right)v_i$ |
| Sumador | $-R_f\sum \dfrac{v_i}{R_i}$ |
| Restador | $\dfrac{R_2}{R_1}(v_2 - v_1)$ |
| Integrador | $-\dfrac{1}{RC}\int v_i\,dt$ |
| Derivador | $-RC\,\dfrac{dv_i}{dt}$ |

El **restador**, o amplificador diferencial, es el que se usa con sensores:
amplifica la diferencia entre sus entradas y rechaza lo que es común a las dos,
que suele ser el ruido captado por igual en los dos cables. Esa capacidad se mide
con la relación de rechazo en modo común.

Y una limitación real que hay que conocer: el operacional no tiene ganancia
infinita a cualquier frecuencia. El **producto ganancia-ancho de banda** es
constante, así que pedir más ganancia reduce el ancho de banda en la misma
proporción. Un operacional con producto de 1 MHz y ganancia 100 solo llega a
10 kHz.

## Filtros activos

Un filtro RC pasivo tiene dos problemas: no puede amplificar, y **la carga
conectada a su salida cambia su respuesta**. Añadir un operacional resuelve los
dos.

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.85, transform shape]
\draw (0,0) node[op amp](A){};
\draw (A.-) -- ++(-0.7,0) coordinate(n) to[R=$R_1$] ++(-1.8,0)
      node[anchor=east, font=\small] {$v_i$};
\draw (A.+) -- ++(-0.7,0) node[ground]{};
\draw (n) -- ++(0,1.4) coordinate(a) to[R=$R_2$] ++(3.2,0) coordinate(b) -| (A.out);
\draw (a) ++(0,0.9) coordinate(c) to[C=$C$] ++(3.2,0) coordinate(d);
\draw (a) -- (c);  \draw (b) -- (d);
\draw (A.out) -- ++(0.5,0) node[anchor=west, font=\small] {$v_o$};
\node[font=\footnotesize] at (1.3,-1.7) {paso bajo activo de primer orden};
\end{circuitikz}
\end{center}
```

$$H(j\omega) = -\frac{R_2/R_1}{1 + j\omega R_2 C}, \qquad
f_c = \frac{1}{2\pi R_2 C}$$

Amplifica en la banda de paso y atenúa por encima de $f_c$, y como la salida del
operacional tiene impedancia baja, conectar una carga no altera la respuesta. Los
filtros de orden superior se construyen encadenando etapas.

## De analógico a digital y al revés

La frontera entre este tema y la informática.

### Conversión analógico-digital

Tres pasos, y cada uno introduce su propia limitación:

| Paso | Qué hace | Limitación |
| --- | --- | --- |
| Muestreo | toma valores a intervalos regulares | debe cumplir Nyquist |
| Cuantificación | asigna a cada muestra un nivel de un conjunto finito | error de cuantificación |
| Codificación | escribe el nivel en binario | número de bits |

El **teorema de Nyquist** exige muestrear a más del doble de la frecuencia máxima
de la señal. Si no se cumple, las frecuencias altas aparecen como frecuencias
bajas falsas, y el efecto es irreversible: por eso se filtra con un paso bajo
**antes** de muestrear, y no después.

Con $n$ bits hay $2^n$ niveles, y la relación señal-ruido de cuantificación es
aproximadamente

$$\text{SNR} \approx 6{,}02\,n + 1{,}76\ \text{dB}$$

Cada bit añade unos 6 dB. De ahí que el audio de 16 bits dé unos 98 dB, que es
suficiente para el oído, y que el audio profesional use 24.

### Conversión digital-analógica

La inversa. La más directa es la **red R-2R**, una escalera de resistencias que
pesa cada bit según su posición, seguida de un operacional sumador. Su salida es
escalonada, así que se filtra con un paso bajo para reconstruir la señal.

Es la conexión de toda la asignatura con la informática: un sensor entrega una
magnitud física continua, el circuito la acondiciona y la convierte a números, el
ordenador la procesa, y el camino inverso devuelve una señal al mundo. El primer y
el último tramo son este tema.

## Circuitos de interfaz

| Circuito | Para qué |
| --- | --- |
| Divisor de tensión con sensor resistivo | convertir resistencia en tensión |
| Puente de Wheatstone | medir variaciones pequeñas de resistencia |
| Amplificador de instrumentación | amplificar la diferencia y rechazar el ruido común |
| Comparador con histéresis | convertir una señal lenta en un flanco limpio |
| Optoacoplador | aislar galvánicamente dos partes del circuito |

El **comparador con histéresis**, o disparador de Schmitt, merece detalle: un
comparador sin histéresis conmuta varias veces cuando la señal cruza el umbral con
ruido, y produce una ráfaga de flancos falsos. La histéresis separa el umbral de
subida del de bajada, así que una vez conmutado hace falta una excursión apreciable
para volver. Es lo que hay a la entrada de cualquier circuito digital que reciba
una señal del exterior, y también lo que elimina los rebotes de un pulsador
mecánico.

Y el **optoacoplador** resuelve un problema de seguridad: un LED y un fototransistor
en el mismo encapsulado transmiten la señal sin conexión eléctrica, así que un
fallo en la parte de potencia no alcanza a la parte lógica. El desarrollo de estos
circuitos está en \cite{sedra2020}, \cite{malvino2007} y \cite{padilla2024b}.
