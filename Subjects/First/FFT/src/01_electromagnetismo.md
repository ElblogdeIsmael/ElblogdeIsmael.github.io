# Fundamentos de electromagnetismo

Tema 1 del programa. Las leyes que gobiernan la carga y el campo, y de dónde
salen las magnitudes que el resto de la asignatura da por conocidas: tensión,
corriente, capacidad e inductancia.

## Carga eléctrica

La carga es una propiedad de la materia, cuantizada en múltiplos de la carga
elemental $e = 1{,}602 \cdot 10^{-19}$ C. Se conserva: en un sistema aislado la
carga total no cambia.

La **ley de Coulomb** da la fuerza entre dos cargas puntuales:

$$\vec{F} = \frac{1}{4\pi\varepsilon_0}\,\frac{q_1 q_2}{r^2}\,\hat{u}_r$$

con $\varepsilon_0 = 8{,}854\cdot10^{-12}$ F/m la permitividad del vacío. La
fuerza es repulsiva entre cargas del mismo signo y atractiva entre signos
opuestos, y decae con el cuadrado de la distancia.

## Campo eléctrico

El campo es la fuerza por unidad de carga de prueba:

$$\vec{E} = \frac{\vec{F}}{q}, \qquad [\vec E] = \text{N/C} = \text{V/m}$$

Para una carga puntual, $E = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q}{r^2}$.

### Ley de Gauss

El flujo del campo a través de una superficie cerrada es proporcional a la carga
encerrada:

$$\oint_S \vec{E}\cdot d\vec{S} = \frac{Q_{enc}}{\varepsilon_0}$$

Su utilidad es práctica: cuando hay simetría —esférica, cilíndrica o plana— el
campo sale del integral y se despeja sin integrar. De ahí salen dos resultados
que se usan después:

| Distribución | Campo |
| --- | --- |
| Plano infinito con densidad $\sigma$ | $E = \dfrac{\sigma}{2\varepsilon_0}$, uniforme |
| Dos planos paralelos con cargas opuestas | $E = \dfrac{\sigma}{\varepsilon_0}$ dentro, cero fuera |

El segundo es el condensador plano del apartado siguiente.

Y una consecuencia con nombre propio: en un **conductor en equilibrio**, el campo
interior es nulo y toda la carga está en la superficie. Eso es la jaula de
Faraday, y es la razón por la que un cable apantallado protege la señal que lleva
dentro.

## Potencial eléctrico

El campo electrostático es conservativo, así que deriva de un potencial:

$$V_A - V_B = \int_A^B \vec{E}\cdot d\vec{l}, \qquad \vec{E} = -\nabla V$$

La **diferencia de potencial** entre dos puntos es el trabajo por unidad de carga
para llevarla de uno a otro. Su unidad es el voltio, y es lo que en el resto de la
asignatura se llama **tensión**.

Que el campo sea conservativo tiene una consecuencia directa sobre los circuitos:
la integral en un camino cerrado es cero, y eso es exactamente la segunda ley de
Kirchhoff del tema 2. Las leyes de circuitos no son reglas aparte: son estas
mismas leyes en un caso particular.

## Capacidad y condensadores

Dos conductores con cargas $+Q$ y $-Q$ separados por un aislante forman un
condensador. Su **capacidad** es

$$C = \frac{Q}{V}, \qquad [C] = \text{F (faradio)}$$

Para el condensador plano de área $A$ y separación $d$:

$$C = \frac{\varepsilon_0 \varepsilon_r A}{d}$$

con $\varepsilon_r$ la permitividad relativa del dieléctrico. Aumentar la
capacidad se consigue con más área, menos separación o un dieléctrico mejor, y
esas tres vías son las que sigue la fabricación de condensadores reales.

La energía almacenada:

$$U = \frac{1}{2} C V^2 = \frac{Q^2}{2C}$$

Es la energía que un condensador de desacoplo entrega cuando un circuito digital
conmuta y demanda corriente de golpe, que es su función principal en una placa.

### Asociación

| Asociación | Capacidad equivalente | Qué se conserva |
| --- | --- | --- |
| Serie | $\dfrac{1}{C_{eq}} = \sum \dfrac{1}{C_i}$ | la carga |
| Paralelo | $C_{eq} = \sum C_i$ | la tensión |

Es al revés que con resistencias, y conviene fijarlo desde el principio.

## Corriente eléctrica

La corriente es el flujo de carga:

$$I = \frac{dq}{dt}, \qquad [I] = \text{A (amperio)}$$

Por convenio, el sentido positivo es el del movimiento de cargas positivas, que es
**contrario** al de los electrones. Es una convención histórica anterior al
descubrimiento del electrón, y se mantiene porque cambiarla no aportaría nada.

La **densidad de corriente** relaciona la corriente con el campo dentro del
material:

$$\vec{J} = \sigma \vec{E}$$

con $\sigma$ la conductividad. Integrada sobre la sección de un conductor
cilíndrico, esa expresión da la ley de Ohm del tema 2, y la resistencia resulta
ser

$$R = \frac{\rho\,L}{A}$$

con $\rho = 1/\sigma$ la resistividad. De ahí que un cable largo y fino tenga más
resistencia que uno corto y grueso.

## Campo magnético

Una carga en movimiento crea campo magnético, y una carga en movimiento dentro de
un campo magnético sufre una fuerza:

$$\vec{F} = q\,\vec{v} \times \vec{B}$$

La fuerza es perpendicular a la velocidad y al campo, así que no hace trabajo: un
campo magnético curva la trayectoria y no cambia la energía cinética.

### Ley de Ampère

$$\oint_C \vec{B}\cdot d\vec{l} = \mu_0 I_{enc}$$

Para un hilo recto infinito, $B = \dfrac{\mu_0 I}{2\pi r}$. Para un solenoide de
$n$ espiras por unidad de longitud, $B = \mu_0 n I$ en su interior, y ese es el
resultado que sostiene las bobinas.

### Inducción

La **ley de Faraday** cierra el electromagnetismo: un flujo magnético variable
induce una fuerza electromotriz.

$$\varepsilon = -\frac{d\Phi}{dt}, \qquad \Phi = \int_S \vec{B}\cdot d\vec{S}$$

El signo negativo es la **ley de Lenz**: la corriente inducida se opone al cambio
que la produjo. Es una consecuencia de la conservación de la energía, no una regla
adicional.

Es el principio de los generadores, los transformadores y los motores. Y también
la razón de un problema muy concreto de la informática: un cambio brusco de
corriente en una pista induce tensión en las pistas vecinas, que es la
**diafonía**. Las placas modernas se diseñan contra ese efecto.

## Autoinducción y bobinas

Una bobina se opone a los cambios de la corriente que la atraviesa:

$$v = L\,\frac{di}{dt}, \qquad [L] = \text{H (henrio)}$$

Para un solenoide, $L = \mu_0 \mu_r n^2 A \ell$. La energía almacenada:

$$U = \frac{1}{2} L I^2$$

De ahí un efecto que se observa a diario: cortar la corriente de una bobina de
golpe produce una tensión enorme, porque $di/dt$ es grande. Es la chispa al abrir
un interruptor inductivo, y la razón por la que en electrónica se pone un diodo en
antiparalelo con los relés.

## Los tres elementos pasivos

Todo el tema 2 y el 3 se construyen sobre estos tres, y conviene verlos juntos:

| Elemento | Relación | Almacena | En continua, en régimen permanente |
| --- | --- | --- | --- |
| Resistencia | $v = R\,i$ | nada, disipa | se comporta como $R$ |
| Condensador | $i = C\,\dfrac{dv}{dt}$ | energía eléctrica | circuito abierto |
| Bobina | $v = L\,\dfrac{di}{dt}$ | energía magnética | cortocircuito |

La última columna es lo que hace resoluble un circuito en continua: pasado el
transitorio, las derivadas se anulan y los dos elementos reactivos se sustituyen
por un abierto y un corto.

```{=latex}
\begin{center}
\begin{circuitikz}[scale=0.9, transform shape]
\draw (0,0) to[R=$R$] (2,0);
\draw (3,0) to[C=$C$] (5,0);
\draw (6,0) to[L=$L$] (8,0);
\draw (0,-0.9) node[anchor=west, font=\footnotesize] {$v=Ri$};
\draw (3,-0.9) node[anchor=west, font=\footnotesize] {$i=C\,dv/dt$};
\draw (6,-0.9) node[anchor=west, font=\footnotesize] {$v=L\,di/dt$};
\end{circuitikz}
\end{center}
```

## Las ecuaciones de Maxwell

Las cuatro leyes anteriores, reunidas:

| Ecuación | Forma integral | Qué dice |
| --- | --- | --- |
| Gauss eléctrica | $\oint \vec E \cdot d\vec S = Q/\varepsilon_0$ | la carga crea campo eléctrico |
| Gauss magnética | $\oint \vec B \cdot d\vec S = 0$ | no hay cargas magnéticas aisladas |
| Faraday | $\oint \vec E\cdot d\vec l = -d\Phi_B/dt$ | un campo magnético variable crea campo eléctrico |
| Ampère-Maxwell | $\oint \vec B\cdot d\vec l = \mu_0 I + \mu_0\varepsilon_0\, d\Phi_E/dt$ | la corriente y el campo eléctrico variable crean campo magnético |

Combinadas predicen ondas electromagnéticas que se propagan a

$$c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}} \approx 3\cdot10^8\ \text{m/s}$$

Ese resultado, obtenido de constantes medidas en el laboratorio, es lo que
identificó la luz como una onda electromagnética. Y para esta asignatura tiene una
consecuencia práctica: dentro de un circuito integrado, una señal no llega
instantáneamente al otro extremo, y a frecuencias altas la aproximación de
circuitos concentrados —que el tema 2 usa— deja de valer. El desarrollo de estos
fundamentos está en \cite{padilla2024a} y en \cite{alvarez2010}.
