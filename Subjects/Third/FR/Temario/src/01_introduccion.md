# Introducción a los fundamentos de redes

Tema 1 del programa, bloque 1. Qué es una red, por qué se diseña en capas, cómo
viaja la información y qué es Internet.

## Sistemas de comunicación y redes

Un sistema de comunicación traslada información de un punto a otro. Sus elementos:

| Elemento | Qué hace |
| --- | --- |
| Emisor | genera el mensaje |
| Transmisor | lo convierte en señal apta para el medio |
| Medio | soporte físico por el que viaja la señal |
| Receptor | recupera el mensaje a partir de la señal |
| Destino | consume el mensaje |

Una **red** es un conjunto de sistemas de comunicación que permite que muchos
equipos se comuniquen entre sí sin un enlace dedicado para cada par. Con $n$
equipos harían falta $n(n-1)/2$ enlaces punto a punto; la red los sustituye por
una infraestructura compartida y un mecanismo para dirigir cada mensaje a su
destino.

### Clasificación

| Criterio | Tipos |
| --- | --- |
| Alcance | red de área personal, local (LAN), metropolitana (MAN), amplia (WAN) |
| Topología | bus, estrella, anillo, árbol, malla |
| Conmutación | de circuitos, de paquetes |
| Titularidad | privada, pública |

### Conmutación de circuitos y de paquetes

Es la distinción que más consecuencias tiene, y conviene tenerla clara desde el
principio.

| | Circuitos | Paquetes |
| --- | --- | --- |
| Recursos | reservados durante toda la conexión | compartidos, se piden al usarse |
| Establecimiento previo | sí | no, en el modo sin conexión |
| Retardo | constante una vez establecido | variable, por las colas |
| Si el emisor calla | los recursos se desperdician | quedan para otros |
| Ante un fallo | la conexión cae | los paquetes se reencaminan |
| Garantía de capacidad | sí | no, salvo mecanismos añadidos |

La telefonía clásica es de circuitos e Internet es de paquetes. La razón del
cambio es la naturaleza del tráfico de datos: es **a ráfagas**. Un usuario que
navega transmite durante un instante y calla durante segundos, así que reservarle
capacidad todo el tiempo desaprovecha casi toda.

La contrapartida es que los paquetes compiten por los mismos enlaces, y de ahí
salen las colas, el retardo variable y la congestión que el tema 3 tiene que
controlar.

## Diseño funcional en capas

Comunicar dos equipos exige resolver muchos problemas a la vez: modular la señal,
detectar errores, encontrar el camino, reordenar lo que llega desordenado,
interpretar el contenido. Resolverlos todos en un solo bloque de software sería
inmanejable.

La solución es **estratificar**: cada capa resuelve un problema, usa los servicios
de la de abajo y ofrece un servicio a la de arriba.

| Principio | Qué significa |
| --- | --- |
| Servicio | lo que una capa ofrece a la superior |
| Protocolo | las reglas que siguen entre sí dos capas del mismo nivel |
| Interfaz | cómo se pide el servicio a la capa inferior |

**Servicio y protocolo son cosas distintas**, y confundirlos es el error habitual:
el servicio dice *qué* se hace y el protocolo *cómo*. Se puede cambiar el
protocolo de una capa sin tocar las demás mientras el servicio se mantenga, y esa
independencia es toda la ganancia del diseño en capas.

### Encapsulamiento

Cada capa añade su propia cabecera a lo que recibe de arriba y trata todo el
conjunto como datos.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, x=1cm, y=1cm]
% Cada fila anade su cabecera por delante de lo que recibe de arriba.
\draw (0,3) rectangle (5.0,3.7);   \node at (2.5,3.35) {datos de aplicación};

\draw (0,2) rectangle (1.2,2.7);   \node at (0.6,2.35) {cab. T};
\draw (1.2,2) rectangle (6.2,2.7); \node at (3.7,2.35) {datos de aplicación};

\draw (0,1) rectangle (1.2,1.7);   \node at (0.6,1.35) {cab. R};
\draw (1.2,1) rectangle (2.4,1.7); \node at (1.8,1.35) {cab. T};
\draw (2.4,1) rectangle (7.4,1.7); \node at (4.9,1.35) {datos de aplicación};

\draw (0,0) rectangle (1.2,0.7);   \node at (0.6,0.35) {cab. E};
\draw (1.2,0) rectangle (2.4,0.7); \node at (1.8,0.35) {cab. R};
\draw (2.4,0) rectangle (3.6,0.7); \node at (3.0,0.35) {cab. T};
\draw (3.6,0) rectangle (8.6,0.7); \node at (6.1,0.35) {datos de aplicación};
\draw (8.6,0) rectangle (9.5,0.7); \node at (9.05,0.35) {cola};

\node[anchor=east] at (-0.25,3.35) {Aplicación};
\node[anchor=east] at (-0.25,2.35) {Transporte};
\node[anchor=east] at (-0.25,1.35) {Red};
\node[anchor=east] at (-0.25,0.35) {Enlace};
\end{tikzpicture}
\end{center}
```

La unidad de datos de cada capa recibe un nombre propio: **mensaje** en
aplicación, **segmento** en transporte, **datagrama** en red y **trama** en enlace.
La asignatura los usa con precisión, y conviene hacerlo, porque decir «paquete»
para todo esconde en qué capa está el problema.

### Los dos modelos

| OSI, 7 capas | TCP/IP, 5 capas | Qué resuelve |
| --- | --- | --- |
| Aplicación, presentación, sesión | Aplicación | el servicio que ve el usuario |
| Transporte | Transporte | comunicación extremo a extremo entre procesos |
| Red | Red | encaminamiento entre redes distintas |
| Enlace | Enlace | transmisión fiable sobre un enlace |
| Física | Física | señales sobre el medio |

OSI es el modelo de referencia y no llegó a implantarse; TCP/IP es lo que se usa.
Sus capas de sesión y presentación no desaparecieron: sus funciones quedaron
dentro de la de aplicación, que es donde hoy se cifra y se codifica.

Y una asimetría que conviene registrar: **las capas de red hacia abajo están en
todos los nodos, y las de transporte hacia arriba solo en los extremos**. Un
encaminador no tiene TCP para el tráfico que reenvía. Por eso el control de
congestión del tema 3 lo hacen los extremos, que son los únicos que ven el
problema completo.

## Transmisión de información

Lo que viaja por el medio son señales, y sus límites condicionan todo lo demás.

### Capacidad del canal

La **velocidad de transmisión** se mide en bits por segundo, y su límite lo fijan
el ancho de banda del canal y el ruido. Con ruido, el teorema de Shannon da la
capacidad máxima:

$$C = B \log_2\!\left(1 + \frac{S}{N}\right)$$

con $B$ el ancho de banda en hercios y $S/N$ la relación señal-ruido. La
consecuencia práctica es que **la capacidad no se puede aumentar sin límite**
subiendo la potencia: crece de forma logarítmica con ella, mientras que crece de
forma lineal con el ancho de banda.

### Retardos

El tiempo que tarda un paquete en cruzar un enlace tiene cuatro componentes, y
mezclarlos es fuente de errores:

| Componente | Fórmula | De qué depende |
| --- | --- | --- |
| Procesamiento | — | la carga del nodo |
| Cola | variable | cuánto tráfico hay por delante |
| Transmisión | $L / R$ | tamaño del paquete y velocidad del enlace |
| Propagación | $d / v$ | distancia y velocidad de la señal en el medio |

$$T_{\text{total}} = T_{\text{proc}} + T_{\text{cola}} + \frac{L}{R} + \frac{d}{v}$$

**Transmisión y propagación son independientes.** La primera depende del tamaño
del paquete y de la velocidad del enlace; la segunda solo de la distancia. En un
enlace corto y lento domina la transmisión, y en un enlace transoceánico rápido
domina la propagación, y ahí el ancho de banda no compra latencia.

Solo el retardo de cola es variable, y es el que produce la **fluctuación** que
molesta a las aplicaciones en tiempo real del tema 5.

### Multiplexación

Compartir un medio entre varias comunicaciones:

| Técnica | Cómo reparte |
| --- | --- |
| Por división de frecuencia | cada canal, una banda distinta |
| Por división de tiempo | cada canal, una ranura temporal |
| Por división de longitud de onda | como la de frecuencia, en fibra óptica |
| Por división de código | todos a la vez, con códigos ortogonales |
| Estadística | ranuras asignadas según demanda, no fijas |

La **estadística** es la que usa la conmutación de paquetes, y es lo que la hace
eficiente: no reserva ranura a quien no tiene nada que enviar.

## Internet

Internet no es una red: es una **red de redes**. Miles de redes autónomas,
gestionadas por organizaciones distintas, interconectadas y funcionando como si
fueran una.

Su arquitectura descansa en tres decisiones:

1. **Un protocolo común en la capa de red, IP.** Cada red puede usar la tecnología
   de enlace que quiera —Ethernet, wifi, fibra— porque todas hablan IP por encima.
   Es el modelo del reloj de arena: mucha variedad arriba, mucha variedad abajo, y
   un solo protocolo en la cintura.
2. **La inteligencia en los extremos.** La red se limita a entregar paquetes lo
   mejor que puede, y la fiabilidad, el orden y el control de flujo los ponen los
   extremos. Eso hace la red simple, barata y capaz de crecer.
3. **El servicio del mejor esfuerzo.** IP no garantiza entrega, ni orden, ni
   retardo máximo. Todo lo que un usuario percibe como fiabilidad lo construye TCP
   por encima.

### Organización

| Nivel | Quién |
| --- | --- |
| Proveedores de nivel 1 | operadores globales, interconectados entre sí |
| Proveedores regionales | conectan a los de nivel 1 |
| Proveedores de acceso | dan servicio al usuario final |
| Puntos neutros | donde varios proveedores intercambian tráfico directamente |

Un **sistema autónomo** es una red bajo una administración única con una política
de encaminamiento propia. La distinción entre encaminar dentro de un sistema
autónomo y entre sistemas autónomos es la que ordena el tema 2.

Y los protocolos los publica el **IETF** como documentos RFC. Un RFC no es una
norma impuesta: es una especificación que se adopta si funciona y si se implanta,
y esa es la forma en que Internet ha ido cambiando sin que nadie la dirija.

El planteamiento general y las magnitudes de transmisión siguen a
\cite{garciateodoro2007}; la presentación por capas y de Internet, a
\cite{kurose2017} y \cite{tanenbaum2011}.
