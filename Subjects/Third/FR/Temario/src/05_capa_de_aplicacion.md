# Capa de aplicación

Tema 5 del programa, bloque 5. Los protocolos que ve el usuario: nombres, web,
correo y multimedia.

## El paradigma cliente/servidor

Un proceso **servidor** espera en un puerto conocido; un proceso **cliente** inicia
la comunicación cuando la necesita.

| | Cliente | Servidor |
| --- | --- | --- |
| Quién empieza | él | espera |
| Dirección | puede ser dinámica, y estar tras NAT | fija y conocida |
| Disponibilidad | intermitente | permanente |
| Con quién habla | con el servidor | con muchos clientes |

La alternativa es el modelo **entre pares**, donde cada nodo es cliente y servidor a
la vez. Su ventaja es que la capacidad crece con el número de participantes, en vez
de repartirse entre ellos; sus problemas son encontrar quién tiene qué, y atravesar
los NAT del tema 2.

### Sockets

La interfaz que ofrece el sistema operativo a la capa de transporte. El esquema de
un servidor TCP:

```c
int s = socket(AF_INET, SOCK_STREAM, 0);
bind(s, direccion, longitud);      /* se asocia al puerto */
listen(s, cola);                   /* pasa a modo de espera */
int c = accept(s, NULL, NULL);     /* bloquea hasta que llega un cliente */
read(c, buffer, n);                /* c es la conexion, s sigue escuchando */
write(c, respuesta, m);
close(c);
```

Y el del cliente: `socket`, `connect`, `write`, `read`, `close`.

Dos detalles que se aprenden equivocándose:

- **`accept` devuelve un socket nuevo.** El original sigue escuchando; el nuevo es
  esa conexión concreta. Cerrar el que no toca deja al servidor sin poder atender a
  nadie más.
- **TCP es un flujo, no un mensaje.** Un `write` de 1000 octetos puede llegar en
  tres `read`. Si el protocolo necesita delimitar mensajes, lo tiene que hacer él:
  con una longitud por delante, o con un separador.

Con UDP no hay `connect` ni `accept`: se usan `sendto` y `recvfrom`, y ahí cada
datagrama sí es una unidad.

## DNS

Traduce nombres de dominio en direcciones IP. Sin él habría que recordar
direcciones, y ninguna máquina podría cambiar de dirección sin romper sus enlaces.

### La jerarquía

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, level distance=11mm,
  level 1/.style={sibling distance=30mm},
  level 2/.style={sibling distance=26mm},
  every node/.style={draw, inner sep=3pt}]
\node {raíz}
  child { node {.es}
    child { node {ugr.es} } }
  child { node {.com}
    child { node {ejemplo.com} } }
  child { node {.org} };
\end{tikzpicture}
\end{center}
```

Cada nivel delega en el siguiente: la raíz sabe quién gestiona `.es`, el servidor
de `.es` sabe quién gestiona `ugr.es`, y ese último conoce los nombres de dentro.
Ningún servidor conoce todo, y por eso el sistema escala.

| Tipo de servidor | Qué sabe |
| --- | --- |
| Raíz | qué servidor gestiona cada dominio de primer nivel |
| De primer nivel | qué servidor gestiona cada dominio bajo él |
| Autoritativo | los registros de su propio dominio |
| Local o recursivo | nada propio; consulta por el cliente y guarda en caché |

### Resolución

- **Recursiva**: el cliente pregunta a su servidor local y recibe la respuesta
  final. El trabajo lo hace el servidor.
- **Iterativa**: cada servidor responde con la dirección del siguiente al que
  preguntar, y quien pregunta va recorriendo la jerarquía.

En la práctica el cliente hace una consulta recursiva a su servidor local, y ese
resuelve de forma iterativa hacia arriba.

La **caché** es lo que hace el sistema viable: sin ella, los trece servidores raíz
recibirían todas las consultas del mundo. Cada registro lleva un tiempo de vida que
dice cuánto se puede conservar, y ese valor es también el retardo con el que se
propaga un cambio: bajarlo antes de mover un servicio es la práctica habitual.

### Registros

| Tipo | Qué asocia |
| --- | --- |
| `A` | nombre a dirección IPv4 |
| `AAAA` | nombre a dirección IPv6 |
| `NS` | dominio al servidor que lo gestiona |
| `MX` | dominio al servidor de correo, con prioridad |
| `CNAME` | nombre a otro nombre |
| `PTR` | dirección a nombre, para la resolución inversa |
| `TXT` | texto libre; se usa para verificaciones y políticas de correo |

DNS usa **UDP en el puerto 53**, porque una consulta y una respuesta caben en un
datagrama y abrir una conexión TCP costaría más que la consulta. Pasa a TCP cuando
la respuesta es grande o para las transferencias de zona entre servidores.

Y una limitación de origen: **DNS no autentica nada**. Una respuesta falsificada
lleva al usuario a otro servidor sin que lo note. Eso es lo que DNSSEC corrige,
firmando los registros con la cadena de confianza del tema 4.

## La navegación web y HTTP

### Direcciones

```
https://www.ugr.es:443/estudios/index.html?id=7#seccion
|___|   |_________||_||_________________||_____||______|
esquema      host  puerto      ruta      consulta  fragmento
```

El **fragmento** no se envía al servidor: lo usa el navegador para posicionarse
dentro del documento recibido.

### El protocolo

HTTP es **sin estado**: cada petición se atiende sin memoria de las anteriores. Eso
simplifica enormemente el servidor y obliga a construir la sesión por encima, con
cookies.

Una petición:

```
GET /estudios/index.html HTTP/1.1
Host: www.ugr.es
User-Agent: navegador/1.0
Accept: text/html
Connection: keep-alive
```

Y una respuesta:

```
HTTP/1.1 200 OK
Date: Mon, 16 Aug 2026 10:00:00 GMT
Server: nginx
Content-Type: text/html; charset=utf-8
Content-Length: 4096

<!doctype html> ...
```

| Método | Qué hace |
| --- | --- |
| `GET` | pide un recurso |
| `HEAD` | pide solo la cabecera |
| `POST` | envía datos al servidor |
| `PUT` | crea o sustituye un recurso |
| `DELETE` | lo borra |
| `OPTIONS` | pregunta qué métodos admite |

| Código | Familia | Ejemplos |
| --- | --- | --- |
| 1xx | informativo | 100 Continue |
| 2xx | éxito | 200 OK, 204 No Content |
| 3xx | redirección | 301 permanente, 304 no modificado |
| 4xx | error del cliente | 400, 403, 404 |
| 5xx | error del servidor | 500, 502, 503 |

La cabecera **`Host` es obligatoria en HTTP/1.1**, y es lo que permite servir muchos
dominios desde una misma dirección IP: sin ella el servidor no sabría cuál de sus
sitios se pide.

### Conexiones persistentes

En HTTP/1.0 cada objeto abría y cerraba su propia conexión TCP. Una página con
treinta imágenes pagaba treinta aperturas en tres pasos, y treinta arranques lentos
del tema 3.

HTTP/1.1 reutiliza la conexión para varios objetos, y es de las mejoras que más se
notan. HTTP/2 va más allá y multiplexa varias peticiones sobre una sola conexión, con
lo que una respuesta lenta deja de bloquear a las que van detrás.

### Caché y cookies

La **caché** evita transferir de nuevo lo que no ha cambiado. El cliente pregunta con
`If-Modified-Since` y el servidor responde `304 Not Modified` sin cuerpo, o envía el
recurso completo. Ahorra tráfico y latencia.

Las **cookies** dan estado a un protocolo que no lo tiene: el servidor envía
`Set-Cookie`, el cliente lo devuelve en cada petición siguiente, y así el servidor
reconoce al usuario entre peticiones. Es lo que sostiene las sesiones de usuario, y
también el seguimiento entre sitios.

## Correo electrónico

Tres piezas, y el reparto de tareas importa:

| Pieza | Qué es |
| --- | --- |
| Agente de usuario | el programa de correo del usuario |
| Servidor de correo | recibe, almacena y reenvía |
| Protocolos | SMTP para enviar, POP3 e IMAP para recoger |

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, >=stealth, node distance=13mm]
\node[draw, minimum height=0.8cm, minimum width=1.7cm] (u1) {emisor};
\node[draw, minimum height=0.8cm, minimum width=2.0cm, right=of u1] (s1) {servidor A};
\node[draw, minimum height=0.8cm, minimum width=2.0cm, right=of s1] (s2) {servidor B};
% Este hueco es mayor que los otros dos porque su rotulo, «POP3, IMAP», es
% mas ancho que «SMTP» y con 13 mm se imprimia encima de la caja anterior.
\node[draw, minimum height=0.8cm, minimum width=1.9cm, right=24mm of s2] (u2) {receptor};
\draw[->, thick] (u1) -- node[above, font=\scriptsize] {SMTP} (s1);
\draw[->, thick] (s1) -- node[above, font=\scriptsize] {SMTP} (s2);
% La etiqueta va debajo: en dos lineas y encima se subia hasta rozar la
% tabla anterior.
\draw[<-, thick] (u2) -- node[below, font=\scriptsize] {POP3, IMAP} (s2);
\end{tikzpicture}
\end{center}
```

**SMTP empuja y POP3 o IMAP tiran.** El correo llega hasta el servidor del
destinatario por iniciativa del emisor, y de ahí al buzón del usuario por iniciativa
de este, que puede estar apagado cuando el mensaje llegó.

### SMTP

Puerto 25 entre servidores, sobre TCP, con órdenes en texto:

```
HELO cliente.ejemplo.com
MAIL FROM: <ismael@ejemplo.com>
RCPT TO: <destino@otro.com>
DATA
Subject: prueba
...
.
QUIT
```

Un punto solo en una línea marca el final del mensaje. Y una consecuencia de haber
nacido como protocolo de texto de siete bits: **para enviar adjuntos hay que
codificarlos**, y eso es lo que hace MIME, declarando el tipo de contenido y
codificando lo binario en base 64, con un 33 % de sobrecoste.

**SMTP no autentica al remitente por diseño.** El `MAIL FROM` lo pone quien envía y
nadie lo comprueba, y de ahí viene la suplantación en el correo. Las defensas
—SPF, DKIM y DMARC— se montaron después, y funcionan publicando en el DNS del
dominio, con registros `TXT`, qué servidores pueden enviar en su nombre y con qué
clave se firman sus mensajes.

### POP3 e IMAP

| | POP3 | IMAP |
| --- | --- | --- |
| Puerto | 110 | 143 |
| Modelo | descargar y borrar | mantener en el servidor |
| Carpetas en el servidor | no | sí |
| Varios dispositivos | mal: cada uno se lleva lo suyo | bien: todos ven el mismo estado |
| Uso sin conexión | completo | parcial |

IMAP es el que encaja con varios dispositivos, que es la situación normal hoy. POP3
sigue teniendo sentido cuando se quiere un único archivo local y no depender del
servidor.

Y las versiones cifradas de los tres —puertos 465 o 587, 995 y 993— son los mismos
protocolos sobre TLS, con lo visto en el tema 4.

## Aplicaciones multimedia

Voz y vídeo tienen requisitos distintos de los de la web:

| Requisito | Web | Multimedia en tiempo real |
| --- | --- | --- |
| Pérdidas | intolerables | tolerables en pequeña proporción |
| Retardo | tolerable | acotado, en torno a 150 ms en voz |
| Fluctuación | irrelevante | crítica |
| Ancho de banda | a ráfagas | sostenido |

Por eso usan **UDP** con RTP por encima: TCP retransmitiría lo perdido, y ese
paquete llegaría cuando ya no sirve, además de introducir una espera que rompe la
fluidez.

Las técnicas para funcionar sobre una red del mejor esfuerzo:

- **Búfer de reproducción**: se acumulan unos cientos de milisegundos antes de
  empezar, y así la fluctuación del retardo no produce cortes. Es el compromiso entre
  latencia y continuidad.
- **Ocultación de pérdidas**: se rellena el hueco repitiendo o interpolando la trama
  anterior.
- **Adaptación de la tasa**: se cambia la calidad según la capacidad disponible. Es
  lo que hace la difusión adaptativa sobre HTTP, que trocea el vídeo y ofrece cada
  trozo en varias calidades.
- **Redes de distribución de contenido**: se replica el contenido cerca del usuario,
  con lo que baja el retardo de propagación del tema 1, que es el único que no se
  puede reducir de otra forma.

La distinción práctica: en **difusión** —vídeo bajo demanda— el búfer puede ser de
segundos y ahí TCP y HTTP sirven perfectamente; en **conversación** el retardo total
tiene que caber en unos 150 ms, y por eso hace falta UDP.

Los protocolos de aplicación siguen a \cite{kurose2017} y \cite{garciateodoro2007};
la programación con sockets, a \cite{comer2001}; el tratamiento de DNS y del correo,
también a \cite{tanenbaum2011}.
