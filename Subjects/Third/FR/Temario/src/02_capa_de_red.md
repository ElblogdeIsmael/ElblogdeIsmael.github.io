# Capa de red

Tema 2 del programa, bloque 2. Llevar un datagrama de un extremo a otro
atravesando redes distintas: direcciones, formato, fragmentación, encaminamiento y
los protocolos auxiliares.

## Funcionalidades

La capa de red tiene dos funciones, y conviene separarlas porque ocurren en
tiempos distintos:

| Función | Qué hace | Cuándo |
| --- | --- | --- |
| **Reenvío** | mover un datagrama de la entrada a la salida correcta de un nodo | por cada paquete, en nanosegundos |
| **Encaminamiento** | calcular las rutas que llenan la tabla de reenvío | cada cierto tiempo, en segundos o minutos |

El reenvío es local y rápido: mirar la dirección, consultar la tabla, sacar el
paquete por el puerto que diga. El encaminamiento es global y lento: los nodos
intercambian información y calculan caminos.

El servicio que ofrece IP es del **mejor esfuerzo**: sin conexión, sin garantía de
entrega, sin garantía de orden y sin garantía de retardo. Los datagramas pueden
perderse, duplicarse, llegar desordenados o llegar tarde. Todo eso lo arregla TCP
en el tema 3, o no se arregla.

## El protocolo IP

### Direcciones IP

Una dirección IPv4 son 32 bits, escritos como cuatro octetos decimales separados
por puntos: `192.168.10.5`.

La dirección **no identifica al equipo, sino a su interfaz**. Un encaminador con
tres interfaces tiene tres direcciones IP, una por cada red a la que se asoma.

La dirección se parte en dos:

```
   192.168.10.5 / 24
   |__________|  |__|
     direccion   longitud del prefijo
```

- El **prefijo de red**, los primeros bits, identifica la red.
- El **identificador de host**, el resto, identifica la interfaz dentro de ella.

La **máscara** marca con unos los bits de red: `/24` equivale a
`255.255.255.0`. Con máscara de $n$ bits hay $2^{32-n}$ direcciones en la red, de
las cuales dos no se pueden asignar:

| Dirección | Qué es |
| --- | --- |
| Todo ceros en el host | identifica a la red |
| Todo unos en el host | difusión dirigida a esa red |

Así que una `/24` da $256 - 2 = 254$ direcciones asignables.

Direcciones con significado propio:

| Rango | Uso |
| --- | --- |
| `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16` | privadas, no encaminables en Internet |
| `127.0.0.0/8` | bucle local |
| `169.254.0.0/16` | autoconfiguración cuando no hay servidor |
| `224.0.0.0/4` | multidifusión |
| `255.255.255.255` | difusión limitada, no se reenvía |

### De las clases al CIDR

El diseño original repartía el espacio en clases fijas: A con `/8`, B con `/16` y
C con `/24`. El problema es que las tallas no encajaban con nadie: una
organización con 300 equipos no cabía en una C —254 direcciones— y una B le daba
65 534, de las que malgastaba casi todas.

**CIDR** elimina las clases y admite prefijos de cualquier longitud. Con él llegan
dos cosas:

- **Subredes**: partir una red asignada en varias más pequeñas alargando el
  prefijo.
- **Agregación de rutas**: anunciar varias redes contiguas como un solo prefijo
  más corto, con lo que las tablas de los encaminadores del núcleo crecen mucho
  menos.

**Ejemplo de subredes.** De `192.168.1.0/24` hay que sacar cuatro subredes:

| Subred | Rango | Difusión | Asignables |
| --- | --- | --- | ---: |
| `192.168.1.0/26` | `.1` – `.62` | `.63` | 62 |
| `192.168.1.64/26` | `.65` – `.126` | `.127` | 62 |
| `192.168.1.128/26` | `.129` – `.190` | `.191` | 62 |
| `192.168.1.192/26` | `.193` – `.254` | `.255` | 62 |

Cuatro subredes son dos bits más de prefijo: `/24 + 2 = /26`. La regla general es
que para $k$ subredes iguales hacen falta $\lceil \log_2 k \rceil$ bits, y para
$h$ hosts en una subred hacen falta $\lceil \log_2 (h+2) \rceil$ bits de host.

Cuando las subredes necesitan tamaños distintos se usan **máscaras de longitud
variable**: se asignan primero las más grandes, y cada bloque se coloca en una
frontera múltiplo de su tamaño. Ese último requisito es lo que más se falla en los
ejercicios: una `/26` no puede empezar en `.32`.

### Formato del datagrama

La cabecera IPv4 son 20 octetos sin opciones:

| Campo | Bits | Para qué |
| --- | ---: | --- |
| Versión | 4 | 4 o 6 |
| Longitud de cabecera | 4 | en palabras de 32 bits; 5 si no hay opciones |
| Tipo de servicio | 8 | prioridad y trato del datagrama |
| Longitud total | 16 | cabecera más datos, en octetos; máximo 65 535 |
| Identificación | 16 | mismo valor en todos los fragmentos de un datagrama |
| Indicadores | 3 | `DF` no fragmentar, `MF` hay más fragmentos |
| Desplazamiento | 13 | posición del fragmento, en unidades de 8 octetos |
| Tiempo de vida | 8 | se decrementa en cada salto; a 0 se descarta |
| Protocolo | 8 | qué hay dentro: 1 ICMP, 6 TCP, 17 UDP |
| Suma de comprobación | 16 | solo de la cabecera, no de los datos |
| Direcciones origen y destino | 32 + 32 | quién y a quién |

Tres detalles que se preguntan y se olvidan:

- **El TTL evita los bucles.** Si el encaminamiento se equivoca y un datagrama da
  vueltas, el TTL lo mata. Sin él, un bucle transitorio saturaría el enlace para
  siempre.
- **La suma de comprobación cubre solo la cabecera**, y hay que recalcularla en
  cada salto porque el TTL cambia. Los datos los comprueba la capa de transporte.
- **El desplazamiento va en unidades de 8 octetos**, no de octetos. Es la causa de
  que todo fragmento salvo el último tenga una longitud de datos múltiplo de 8.

### Fragmentación

Cada tecnología de enlace impone una unidad máxima de transferencia: 1500 octetos
en Ethernet, menos en otras. Si un datagrama es mayor que la MTU del siguiente
enlace, el encaminador lo parte.

**Ejemplo.** Un datagrama de 4000 octetos —20 de cabecera y 3980 de datos— hacia
un enlace con MTU 1500:

| Fragmento | Datos | Identificación | MF | Desplazamiento |
| --- | ---: | --- | ---: | ---: |
| 1 | 1480 | 777 | 1 | 0 |
| 2 | 1480 | 777 | 1 | 185 |
| 3 | 1020 | 777 | 0 | 370 |

Los datos por fragmento son $1500 - 20 = 1480$, y 1480 es múltiplo de 8. Los
desplazamientos son $0$, $1480/8 = 185$ y $2960/8 = 370$.

Dos reglas que causan casi todos los errores en los ejercicios:

- **El reensamblado solo lo hace el destino**, nunca un encaminador intermedio.
  Los fragmentos pueden seguir caminos distintos, así que ningún nodo del camino
  los ve todos.
- **Perder un fragmento equivale a perder el datagrama entero**, porque no hay
  retransmisión de fragmentos sueltos. Por eso la fragmentación es cara y se evita:
  con el bit `DF` puesto, el emisor descubre la MTU mínima del camino y envía
  datagramas que caben. En IPv6 la fragmentación en tránsito directamente no
  existe.

## Encaminamiento

Calcular por dónde va cada datagrama. La tabla de reenvío asocia prefijos de
destino con la interfaz de salida y el siguiente salto:

| Destino | Máscara | Siguiente salto | Interfaz |
| --- | --- | --- | --- |
| `192.168.1.0` | `/24` | directo | eth0 |
| `10.0.0.0` | `/8` | `192.168.1.254` | eth0 |
| `0.0.0.0` | `/0` | `192.168.1.1` | eth0 |

La búsqueda usa la regla del **prefijo más largo**: entre todas las entradas que
casan, gana la de máscara más larga. La última fila, con `/0`, casa siempre y es
la ruta por defecto, así que solo se usa cuando ninguna otra sirve.

### Algoritmos

| Familia | Cómo | Qué conoce cada nodo | Protocolo |
| --- | --- | --- | --- |
| Vector de distancias | cada nodo anuncia a sus vecinos su distancia a cada destino | solo lo que le cuentan sus vecinos | RIP |
| Estado del enlace | cada nodo inunda la red con el estado de sus enlaces | el mapa completo | OSPF |
| Vector de caminos | se anuncia el camino completo, no solo la distancia | los sistemas autónomos que atraviesa | BGP |

**Vector de distancias** aplica la ecuación de Bellman-Ford:

$$d_x(y) = \min_{v \in N(x)}\ \{\, c(x,v) + d_v(y) \,\}$$

Es simple y sufre el problema de la **cuenta a infinito**: si un enlace cae, dos
nodos pueden estar anunciándose el uno al otro una ruta que ya no existe,
incrementando el coste de uno en uno hasta alcanzar el infinito convenido. Se
mitiga con horizonte dividido —no anunciar una ruta al vecino del que se aprendió—
y con un valor de infinito bajo: en RIP, 16 saltos.

**Estado del enlace** hace lo contrario: cada nodo difunde a toda la red el estado
de sus enlaces, todos construyen el mismo mapa y cada uno ejecuta Dijkstra por su
cuenta. Converge más rápido y no tiene cuenta a infinito, a cambio de más tráfico
de control y más cálculo. Es lo que usa OSPF, que además divide el dominio en áreas
para que ese coste no crezca sin límite.

**BGP** encamina entre sistemas autónomos y su criterio no es la distancia sino la
**política**: un operador elige por dónde sale su tráfico según los acuerdos
comerciales que tenga, aunque el camino sea más largo. Anunciar el camino completo
sirve además para detectar bucles: si un sistema autónomo se ve a sí mismo en la
ruta anunciada, la descarta.

De ahí la división que ordena el encaminamiento en Internet: **dentro de un sistema
autónomo se optimiza el coste; entre sistemas autónomos se aplica la política**.

## ARP: la asociación con la capa de enlace

IP encamina hasta la última red, y en ella el datagrama tiene que ir dentro de una
trama dirigida a una dirección física de 48 bits. **ARP** traduce una dirección IP
de la misma red en su dirección física.

```{=latex}
\begin{center}
% Diagrama de secuencia, como el saludo de TCP del tema 3. Con las dos
% flechas dibujadas a los lados de las cajas, los bordes de estas cerraban
% la figura y el conjunto se leia como un rectangulo.
\begin{tikzpicture}[font=\footnotesize, >=stealth]
\draw[thick] (0,0) -- (0,-2.6);
\draw[thick] (7.6,0) -- (7.6,-2.6);
\node[above] at (0,0) {A};
\node[above] at (7.6,0) {B};
\draw[->] (0,-0.75) -- node[above, align=center]
  {petición ARP, en difusión:\\¿quién tiene 192.168.1.7?} (7.6,-0.75);
\draw[<-] (0,-2.1) -- node[above, align=center]
  {respuesta ARP, directa a A:\\soy yo, y esta es mi MAC} (7.6,-2.1);
\end{tikzpicture}
\end{center}
```

La petición va en **difusión**, porque no se sabe a quién preguntar; la respuesta
va **directa**, porque el que responde ya conoce la dirección física del que
preguntó, que venía en la petición. El resultado se guarda en una caché con
caducidad, para no preguntar por cada datagrama.

**ARP solo funciona dentro de la misma red.** Si el destino está fuera, el emisor
no pregunta por él: pregunta por la dirección física de su encaminador por defecto
y le entrega la trama a él. Es el error de concepto más frecuente del tema.

## ICMP

El protocolo de control y de errores de la capa de red. Viaja **dentro** de
datagramas IP aunque sea parte de la misma capa, y sirve para informar de lo que
IP no puede resolver.

| Tipo | Mensaje | Cuándo |
| --- | --- | --- |
| 0 y 8 | respuesta y petición de eco | `ping` |
| 3 | destino inalcanzable | red, host, protocolo o puerto no accesible |
| 5 | redirección | hay un encaminador mejor en esta red |
| 11 | tiempo excedido | el TTL llegó a cero |
| 12 | problema de parámetro | cabecera mal formada |

Todo mensaje de error incluye la cabecera IP del datagrama que lo provocó más sus
primeros 8 octetos de datos, que es justo lo necesario para que el origen sepa a
qué conexión corresponde: en esos 8 octetos están los puertos de TCP o UDP.

**`traceroute`** se construye con esto: se envían datagramas con TTL 1, 2, 3…, y
cada encaminador del camino devuelve un «tiempo excedido» que lo identifica.

Y una limitación: **ICMP no hace fiable a IP**. Informa de errores cuando puede, y
sus mensajes también se pueden perder. Además muchas redes los filtran, y por eso
un `ping` sin respuesta no prueba que el destino esté caído.

## NAT

La traducción de direcciones permite que una red entera con direcciones privadas
salga a Internet con una sola dirección pública.

El encaminador que hace NAT mantiene una tabla y reescribe las cabeceras:

| Interno | Puerto | Externo | Puerto traducido |
| --- | ---: | --- | ---: |
| `192.168.1.10` | 5000 | `88.20.30.40` | 40001 |
| `192.168.1.11` | 5000 | `88.20.30.40` | 40002 |

Al salir, sustituye la dirección y el puerto de origen; al volver, hace lo
contrario. Como distingue las conexiones por el puerto traducido, con una sola
dirección pública caben miles de conexiones simultáneas.

| Ventajas | Inconvenientes |
| --- | --- |
| ahorra direcciones públicas | rompe la conectividad extremo a extremo |
| oculta la estructura interna | un equipo interno no es alcanzable desde fuera sin configuración |
| se puede cambiar de proveedor sin renumerar | los protocolos que llevan direcciones dentro de los datos se rompen |

El segundo inconveniente contradice el principio de que la inteligencia está en los
extremos: NAT guarda estado de las conexiones en un nodo intermedio, y con ello un
elemento de la red pasa a mirar dentro de la capa de transporte. La tercera fila es
su consecuencia práctica, y es la razón de que las aplicaciones entre pares
necesiten mecanismos añadidos para atravesarlo.

El tratamiento de IP, del direccionamiento y del encaminamiento sigue a
\cite{garciateodoro2007} y \cite{kurose2017}; los algoritmos de encaminamiento y
sus análisis, a \cite{tanenbaum2011} y \cite{stallings2006}.
