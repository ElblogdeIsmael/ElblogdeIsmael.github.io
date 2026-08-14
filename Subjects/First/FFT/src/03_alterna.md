# Fundamentos de teoría de circuitos. Corriente alterna

Tema 3 del programa. El régimen permanente senoidal, el método de los fasores, la
impedancia y la respuesta en frecuencia.

## Señales senoidales

Una señal senoidal se describe con tres parámetros:

$$v(t) = V_m \sin(\omega t + \varphi)$$

| Parámetro | Nombre | Unidad |
| --- | --- | --- |
| $V_m$ | amplitud o valor de pico | V |
| $\omega = 2\pi f$ | pulsación | rad/s |
| $\varphi$ | fase inicial | rad |

Y dos valores derivados que se usan constantemente:

$$V_{ef} = \frac{V_m}{\sqrt{2}} \qquad\text{(valor eficaz)}, \qquad
V_{med} = \frac{2V_m}{\pi} \qquad\text{(medio en un semiciclo)}$$

El **valor eficaz** es el de la señal continua que disipa la misma potencia en una
resistencia, y por eso es el que dan los instrumentos y las especificaciones. Los
230 V de la red son eficaces: el pico son 325 V, que es el valor que un
aislamiento tiene que soportar.

## Por qué se usa la alterna

La razón es histórica y sigue vigente: **el transformador solo funciona en
alterna**, porque necesita flujo variable. Elevar la tensión para transportar
energía reduce la corriente y, con ella, las pérdidas $R\,i^2$ del tema anterior.
En continua no había forma sencilla de cambiar de tensión.

En electrónica hay otra razón: cualquier señal se descompone en suma de
senoidales, así que analizar un circuito para una senoide de cada frecuencia
describe su comportamiento ante cualquier entrada. Eso es lo que la respuesta en
frecuencia del final del tema formaliza.

## Fasores

Resolver un circuito en alterna con las ecuaciones diferenciales de bobinas y
condensadores es laborioso. El método de los fasores lo convierte en álgebra de
números complejos.

A la señal $v(t) = V_m\cos(\omega t + \varphi)$ se le asocia el fasor

$$\overline{V} = V_{ef}\,\angle\,\varphi = V_{ef}\,e^{j\varphi}$$

El fasor guarda amplitud y fase; la frecuencia es común a todo el circuito y no se
representa. Las derivadas se convierten en productos:

$$\frac{d}{dt} \longrightarrow j\omega, \qquad \int dt \longrightarrow \frac{1}{j\omega}$$

Con eso, las ecuaciones diferenciales pasan a ser ecuaciones lineales complejas, y
**todos los métodos del tema 2 siguen valiendo**: Kirchhoff, nodos, mallas,
superposición, Thévenin. Solo cambia que las magnitudes son complejas.

## Impedancia

La impedancia generaliza la resistencia:

$$\overline{Z} = \frac{\overline{V}}{\overline{I}} = R + jX$$

con $R$ la resistencia y $X$ la reactancia.

| Elemento | Impedancia | Módulo | Desfase de $v$ respecto a $i$ |
| --- | --- | --- | --- |
| Resistencia | $R$ | $R$ | 0° |
| Bobina | $j\omega L$ | $\omega L$ | $+90°$: la tensión adelanta |
| Condensador | $\dfrac{1}{j\omega C}$ | $\dfrac{1}{\omega C}$ | $-90°$: la tensión retrasa |

La regla mnemotécnica clásica: en una bobina la tensión va por delante; en un
condensador, la corriente. Y el comportamiento en los extremos de frecuencia
explica casi todo lo que sigue:

| | $\omega \to 0$ (continua) | $\omega \to \infty$ |
| --- | --- | --- |
| Bobina | $Z \to 0$: cortocircuito | $Z \to \infty$: abierto |
| Condensador | $Z \to \infty$: abierto | $Z \to 0$: cortocircuito |

La fila de la continua es exactamente lo que el tema 2 daba por sabido, ahora
justificado.

La **admitancia** es su inversa, $\overline{Y} = 1/\overline{Z} = G + jB$, y
simplifica las asociaciones en paralelo.

### Asociación

Las mismas reglas que con resistencias, con números complejos:

$$\overline{Z}_{serie} = \sum \overline{Z}_i, \qquad
\frac{1}{\overline{Z}_{par}} = \sum \frac{1}{\overline{Z}_i}$$

## Potencia en alterna

Con $\varphi$ el desfase entre tensión y corriente:

| Potencia | Expresión | Unidad | Qué es |
| --- | --- | --- | --- |
| Activa | $P = V_{ef} I_{ef}\cos\varphi$ | W | la que se consume de verdad |
| Reactiva | $Q = V_{ef} I_{ef}\sin\varphi$ | var | va y vuelve entre fuente y carga |
| Aparente | $S = V_{ef} I_{ef}$ | VA | la que dimensiona la instalación |

Se relacionan como $S^2 = P^2 + Q^2$, y en forma compleja
$\overline{S} = \overline{V}\,\overline{I}^{*} = P + jQ$.

El **factor de potencia** es $\cos\varphi$. Con un factor bajo, la corriente
necesaria para entregar la misma potencia activa es mayor, y esa corriente calienta
los conductores igual. De ahí que las compañías eléctricas penalicen un factor de
potencia bajo y que las instalaciones con muchos motores lleven condensadores para
compensarlo: el condensador aporta reactiva de signo contrario a la de la bobina.

## Resonancia

En un circuito RLC serie, la reactancia total es $X = \omega L - 1/(\omega C)$. Se
anula cuando

$$\omega_0 = \frac{1}{\sqrt{LC}}, \qquad f_0 = \frac{1}{2\pi\sqrt{LC}}$$

En resonancia la impedancia es **mínima y puramente resistiva**, así que la
corriente es máxima y está en fase con la tensión.

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.9, transform shape]
\draw (0,0) to[sV=$v_g$] (0,2.6)
      to[R=$R$] (2,2.6)
      to[L=$L$] (4,2.6)
      to[C=$C$] (6,2.6) -- (6,0) -- (0,0);
\draw (0,0) node[ground]{};
\end{circuitikz}
\end{center}
```

El **factor de calidad** mide lo selectiva que es la resonancia:

$$Q = \frac{\omega_0 L}{R} = \frac{1}{R}\sqrt{\frac{L}{C}}, \qquad
\Delta\omega = \frac{\omega_0}{Q}$$

Un $Q$ alto da un pico estrecho, que es lo que se busca en un sintonizador de
radio: seleccionar una emisora y rechazar las vecinas.

En el circuito RLC **paralelo** ocurre lo simétrico: en resonancia la impedancia
es máxima y la corriente de la fuente, mínima.

## Respuesta en frecuencia

La **función de transferencia** relaciona salida y entrada en función de la
frecuencia:

$$H(j\omega) = \frac{\overline{V}_o}{\overline{V}_i}$$

y se representa en un **diagrama de Bode**: el módulo en decibelios,
$|H|_{dB} = 20\log_{10}|H|$, y la fase, ambos frente a la frecuencia en escala
logarítmica.

La **frecuencia de corte** es aquella en la que la potencia cae a la mitad, es
decir $|H| = 1/\sqrt{2} = 0{,}707$, o $-3$ dB.

### Los cuatro filtros básicos

| Filtro | Deja pasar | Realización simple |
| --- | --- | --- |
| Paso bajo | frecuencias bajas | RC con la salida en el condensador |
| Paso alto | frecuencias altas | RC con la salida en la resistencia |
| Paso banda | una banda | RLC serie, salida en R |
| Banda eliminada | todo menos una banda | RLC con salida en L y C |

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.85, transform shape]
% Paso bajo
\draw (0,0) to[sV=$v_i$] (0,2.4) to[R=$R$] (2.2,2.4)
      to[C=$C$, v^=$v_o$] (2.2,0) -- (0,0);
\draw (0,0) node[ground]{};
\node[font=\footnotesize] at (1.1,-1) {paso bajo};

% Paso alto
\draw (6,0) to[sV=$v_i$] (6,2.4) to[C=$C$] (8.2,2.4)
      to[R=$R$, v^=$v_o$] (8.2,0) -- (6,0);
\draw (6,0) node[ground]{};
\node[font=\footnotesize] at (7.1,-1) {paso alto};
\end{circuitikz}
\end{center}
```

Para el paso bajo RC:

$$H(j\omega) = \frac{1}{1 + j\omega RC}, \qquad
f_c = \frac{1}{2\pi RC}$$

Por encima de $f_c$ la respuesta cae a **20 dB por década**, que es una pendiente
de $-1$ en el diagrama logarítmico. Cada polo añadido suma otros 20 dB por década.

### Por qué importa en informática

Tres consecuencias directas:

- **El desacoplo de la alimentación.** Un condensador entre alimentación y tierra
  es un paso bajo: presenta impedancia baja a las variaciones rápidas de corriente
  que produce la conmutación, y las absorbe cerca del chip en vez de dejar que
  viajen por la pista.
- **La integridad de la señal.** Una pista es en realidad una R, una L y una C
  distribuidas, es decir un paso bajo. Los flancos de una señal digital se
  redondean, y a partir de cierta frecuencia dejan de reconocerse como niveles
  lógicos.
- **El muestreo.** Antes de convertir una señal a digital hay que filtrarla con un
  paso bajo, o las frecuencias por encima de la mitad de la de muestreo aparecen
  como frecuencias falsas. Es el teorema de Nyquist, y el filtro se llama
  antialiasing precisamente por eso.

El análisis en alterna, los fasores y la respuesta en frecuencia están
desarrollados en \cite{hayt2019}, \cite{nilsson2008} y \cite{padilla2024a}.
