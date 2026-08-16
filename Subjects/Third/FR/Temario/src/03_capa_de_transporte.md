# Capa de transporte

Tema 3 del programa, bloque 3. Comunicar procesos, no máquinas: UDP y TCP, y los
tres controles que hacen fiable un servicio que no lo es.

## Qué añade la capa de transporte

La capa de red entrega datagramas de una máquina a otra. La de transporte los
entrega **de un proceso a otro**, y solo existe en los extremos.

| Función | UDP | TCP |
| --- | --- | --- |
| Multiplexación por puertos | sí | sí |
| Detección de errores | sí, opcional en IPv4 | sí |
| Orientado a conexión | no | sí |
| Entrega fiable | no | sí |
| Entrega ordenada | no | sí |
| Control de flujo | no | sí |
| Control de congestión | no | sí |

### Puertos y sockets

Un **puerto** es un número de 16 bits que identifica al proceso dentro de la
máquina.

| Rango | Uso |
| --- | --- |
| 0 – 1023 | bien conocidos: 80 HTTP, 25 SMTP, 53 DNS |
| 1024 – 49151 | registrados |
| 49152 – 65535 | dinámicos, para el extremo cliente |

Cómo se identifica una comunicación es distinto en cada protocolo, y es una
diferencia de fondo:

- **UDP**: el socket es la pareja (dirección destino, puerto destino). Dos
  clientes distintos que envían al mismo servidor llegan al mismo socket.
- **TCP**: el socket es la **cuaterna** (IP origen, puerto origen, IP destino,
  puerto destino). Dos clientes distintos producen dos conexiones distintas aunque
  el puerto de destino sea el mismo.

Por eso un servidor web atiende a miles de clientes en el puerto 80: cada conexión
es una cuaterna diferente.

## El protocolo UDP

Cabecera de 8 octetos: puerto origen, puerto destino, longitud y suma de
comprobación. Nada más.

Lo que hace es multiplexar y comprobar errores. Lo que no hace es todo lo demás: no
establece conexión, no retransmite, no ordena, no controla el flujo ni la
congestión.

**Y eso es una ventaja en algunos casos**:

| Motivo | Dónde importa |
| --- | --- |
| Sin establecimiento previo | DNS: una consulta y una respuesta, sin gastar un ida y vuelta en abrir |
| Cabecera de 8 octetos frente a 20 | tráfico de muchos mensajes muy pequeños |
| Sin retransmisiones ni control de congestión | voz y vídeo: llegar tarde es peor que no llegar |
| Sin estado de conexión | un servidor aguanta muchos más clientes |

En tiempo real, retransmitir un paquete de voz perdido es inútil: cuando llegue, el
instante que representaba ya ha pasado. Es preferible el hueco.

La **suma de comprobación** de UDP cubre los datos y una pseudocabecera con las
direcciones IP. Esa pseudocabecera es una violación deliberada de la separación
entre capas, y está para detectar un datagrama entregado a la máquina equivocada.

## El protocolo TCP

Servicio fiable, ordenado y orientado a conexión, sobre un IP que no garantiza
nada.

### Cabecera

| Campo | Bits | Para qué |
| --- | ---: | --- |
| Puertos origen y destino | 16 + 16 | multiplexación |
| Número de secuencia | 32 | posición del primer octeto del segmento en el flujo |
| Número de asentimiento | 32 | siguiente octeto que se espera recibir |
| Longitud de cabecera | 4 | en palabras de 32 bits |
| Indicadores | 6 | `URG`, `ACK`, `PSH`, `RST`, `SYN`, `FIN` |
| Ventana | 16 | cuántos octetos puede recibir el emisor de este segmento |
| Suma de comprobación | 16 | cabecera, datos y pseudocabecera |
| Puntero de urgencia | 16 | con `URG` |

Dos cosas que hay que fijar desde el principio:

- **La numeración es por octetos, no por segmentos.** El número de secuencia es la
  posición del primer octeto de datos dentro del flujo.
- **El asentimiento es acumulativo y dice lo que se espera, no lo que se recibió.**
  Un `ACK = 5001` significa «tengo todo hasta el 5000, mándame desde el 5001».

### Control de conexión

**Apertura, en tres pasos:**

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, >=stealth]
\draw[thick] (0,0) -- (0,-3.3);
\draw[thick] (7.2,0) -- (7.2,-3.3);
\node[above] at (0,0) {Cliente};
\node[above] at (7.2,0) {Servidor};
\draw[->] (0,-0.55) -- node[above, sloped] {SYN, seq = $x$} (7.2,-1.15);
\draw[<-] (0,-2.05) -- node[above, sloped] {SYN + ACK, seq = $y$, ack = $x+1$} (7.2,-1.55);
\draw[->] (0,-2.45) -- node[above, sloped] {ACK, ack = $y+1$} (7.2,-3.05);
\end{tikzpicture}
\end{center}
```

Hacen falta **tres** y no dos porque los dos extremos tienen que sincronizar su
numeración inicial y saber que el otro la ha recibido. Y los números iniciales se
eligen al azar, no en cero: así un segmento retrasado de una conexión anterior
entre los mismos puertos no se cuela en la nueva.

**Cierre, en cuatro pasos**, porque la conexión es dúplex y cada sentido se cierra
por separado: `FIN`, `ACK`, `FIN`, `ACK`. Entre el primer par y el segundo, un
extremo puede haber terminado de enviar y seguir recibiendo.

El que cierra primero queda en espera durante el doble del tiempo máximo de vida de
un segmento antes de liberar la conexión. Es para poder reenviar el último `ACK` si
se pierde, y para que ningún segmento rezagado aparezca en una conexión nueva con
la misma cuaterna.

### Control de errores

La fiabilidad se construye con tres piezas: numeración, asentimientos y
retransmisión por temporizador.

El **temporizador de retransmisión** se calcula a partir del tiempo de ida y vuelta
medido, suavizado y con un margen por su variabilidad:

$$\text{RTT}_{\text{est}} \leftarrow (1-\alpha)\,\text{RTT}_{\text{est}} + \alpha\,\text{RTT}_{\text{medido}}$$
$$\text{RTO} = \text{RTT}_{\text{est}} + 4\,\text{DesvRTT}$$

con $\alpha = 0{,}125$. Un temporizador demasiado corto retransmite lo que aún no se
ha perdido y empeora la congestión; demasiado largo deja el enlace parado tras cada
pérdida. Y al retransmitir se duplica el valor, que es la forma de no insistir sobre
una red ya saturada.

**Retransmisión rápida.** Esperar al temporizador es lento. Si llegan tres
asentimientos duplicados —el receptor pidiendo el mismo octeto una y otra vez—, el
emisor deduce que ese segmento se perdió y lo reenvía sin esperar.

Que los `ACK` duplicados indiquen pérdida y no otra cosa es una inferencia: podrían
venir de un reordenamiento. Tres seguidos es el compromiso entre reaccionar rápido y
no reaccionar ante un simple desorden.

### Control de flujo

Impide que el emisor desborde el **búfer del receptor**. El receptor anuncia en cada
segmento su ventana disponible, y el emisor no envía más octetos sin asentir de los
que quepan en ella.

Si la ventana llega a cero, el emisor se detiene. Y para no quedarse bloqueado si el
anuncio de reapertura se pierde, envía periódicamente un segmento de un octeto que
fuerza al receptor a repetir su ventana.

**El control de flujo protege al receptor. El de congestión protege a la red.** Son
mecanismos distintos con causas distintas, y confundirlos es el error clásico del
tema.

### Control de congestión

El emisor mantiene además una **ventana de congestión** que estima cuánto aguanta la
red. Lo que puede enviar sin asentir es el mínimo de las dos ventanas.

TCP no recibe ninguna notificación de la red: **deduce la congestión de las
pérdidas**. Y para deducirla tiene que provocarla, aumentando hasta que algo se
pierde.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=5.2cm,
  xlabel={Tiempo (rondas)},
  ylabel={Ventana de congestión},
  xmin=0, xmax=22, ymin=0, ymax=31,
  xtick=\empty,
  ytick={0,8,16,24},
  grid=major, grid style={dashed, gray!30},
  legend pos=north west, legend style={font=\footnotesize}
]
% Arranque lento (exponencial), umbral en 16, evitacion (lineal),
% perdida en la ronda 12 y arranque de nuevo.
\addplot[thick, mark=*, mark size=1.1pt] coordinates {
  (0,1) (1,2) (2,4) (3,8) (4,16) (5,17) (6,18) (7,19) (8,20) (9,21)
  (10,22) (11,23) (12,1) (13,2) (14,4) (15,8) (16,11) (17,12) (18,13)
  (19,14) (20,15) (21,16)
};
\addplot[dashed, thick, domain=0:22] {16};
\addlegendentry{ventana}
\addlegendentry{umbral inicial}
\end{axis}
\end{tikzpicture}
\end{center}
```

Las fases:

| Fase | Cómo crece | Cuándo |
| --- | --- | --- |
| **Arranque lento** | se dobla cada ida y vuelta: crecimiento exponencial | al empezar, y tras un vencimiento del temporizador |
| **Evitación de la congestión** | un segmento por ida y vuelta: crecimiento lineal | por encima del umbral |
| **Recuperación rápida** | se reduce a la mitad y se sigue en lineal | tras tres `ACK` duplicados |

La reacción **no es la misma según cómo se detecte la pérdida**, y esa asimetría es
deliberada:

- **Tres `ACK` duplicados** significan que los segmentos siguientes sí llegaron, o
  sea, que la red aún entrega. La ventana se reduce a la mitad.
- **Vencimiento del temporizador** significa que no llega nada. Se supone congestión
  grave y la ventana vuelve a 1.

El nombre «arranque lento» despista: es la fase que **más rápido crece**. Se llama
así porque empieza en un solo segmento, frente a la alternativa previa de empezar
enviando toda la ventana anunciada.

Y el efecto de conjunto: cuando muchas conexiones comparten un enlace, todas suben
hasta perder, todas se recortan y todas vuelven a subir. Eso reparte la capacidad
entre ellas de forma aproximadamente equitativa, sin que ningún nodo de la red
arbitre nada. Es el mismo principio del tema 1: la inteligencia en los extremos.

El tratamiento de UDP, de TCP y de sus tres controles sigue a \cite{kurose2017} y
\cite{garciateodoro2007}; los algoritmos de ventana y su análisis, a
\cite{tanenbaum2011} y \cite{stallings2006}.
