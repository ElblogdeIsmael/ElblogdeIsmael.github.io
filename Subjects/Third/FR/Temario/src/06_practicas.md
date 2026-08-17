# Seminarios y prácticas de laboratorio

El temario práctico de la guía docente: seis seminarios y tres prácticas.

## Los seminarios

| Seminario | Contenido |
| --- | --- |
| S1 | creación de un laboratorio virtual de redes |
| S2 | diagnóstico y resolución de fallos en redes |
| S3 | resolución de problemas del tema 2: IP y encaminamiento |
| S4 | creación de aplicaciones cliente/servidor |
| S5 | resolución de problemas del tema 3: TCP y UDP |
| S6 | resolución de problemas del tema 4: seguridad, DNS y SMTP |

### S1 · Laboratorio virtual

Montar varias máquinas y encaminadores sobre un solo equipo, con redes virtuales
entre ellos. Lo que hay que dejar claro antes de empezar son los modos de red:

| Modo | Qué permite |
| --- | --- |
| NAT | la máquina sale a Internet y no es alcanzable desde fuera |
| Red interna | las máquinas se ven entre sí y no salen |
| Adaptador puente | la máquina aparece como un equipo más de la red física |
| Solo anfitrión | se comunica con el anfitrión y no con el exterior |

Una topología típica del laboratorio son dos redes internas unidas por una máquina
con dos interfaces que actúa de encaminador. Y ahí el fallo de novato es olvidar
habilitar el reenvío de paquetes en esa máquina: con `net.ipv4.ip_forward` a cero,
todo está bien configurado y nada pasa de una red a la otra.

### S2 · Diagnóstico

El método que ordena todo el diagnóstico es **subir por las capas**: no tiene
sentido mirar el DNS si el enlace está caído.

| Capa | Comprobación | Órdenes |
| --- | --- | --- |
| Enlace | ¿la interfaz está levantada y con dirección? | `ip link`, `ip addr` |
| Enlace | ¿se ve al vecino de la misma red? | `ping` al encaminador, `ip neigh` |
| Red | ¿hay ruta al destino? | `ip route`, `ping`, `traceroute` |
| Red | ¿por dónde se va y dónde se corta? | `traceroute`, `mtr` |
| Transporte | ¿el puerto está abierto y escuchando? | `ss -tlnp`, `nc -vz` |
| Aplicación | ¿el nombre resuelve? | `dig`, `host` |
| Aplicación | ¿el servicio responde? | `curl -v`, cliente propio |

Dos casos que aparecen siempre y se distinguen así:

- **`ping` a la IP funciona y al nombre no**: el problema es DNS, no la red.
- **`ping` funciona y el servicio no responde**: la capa de red está bien; mirar si
  el proceso escucha, y después el cortafuegos.

Y la herramienta que resuelve lo que las demás no: **capturar el tráfico** con
`tcpdump` o Wireshark. Un filtro concreto —`tcp port 80 and host 10.0.0.5`— evita
ahogarse en tráfico irrelevante, y las capturas enseñan el saludo en tres pasos, las
retransmisiones y la evolución de la ventana del tema 3 mejor que ninguna
explicación.

**Cuidado con lo que un `ping` sin respuesta demuestra**, que es poco: muchas redes
filtran ICMP a propósito, y un destino que no contesta puede estar perfectamente
vivo. Es la limitación del tema 2.

### S3, S5 y S6 · Problemas

Los tres seminarios de problemas cubren lo que más cae:

| Seminario | Tipos de ejercicio |
| --- | --- |
| S3 | subredes con máscara variable, tablas de reenvío, fragmentación, camino de un datagrama |
| S5 | diagramas de tiempos de TCP, cálculo de números de secuencia y de asentimiento, evolución de la ventana de congestión, rendimiento |
| S6 | esquemas de cifrado y firma, resolución DNS paso a paso, diálogo SMTP |

Errores que se repiten, y que conviene comprobar antes de dar por bueno un
resultado:

- **En subredes, cada bloque empieza en una frontera múltiplo de su tamaño.** Una
  `/26` no puede empezar en `.32`.
- **En fragmentación, el desplazamiento va en unidades de 8 octetos**, y los datos de
  todo fragmento salvo el último son múltiplo de 8.
- **En TCP, el asentimiento dice el siguiente octeto esperado**, no el último
  recibido.
- **Los segmentos `SYN` y `FIN` consumen un número de secuencia** aunque no lleven
  datos.
- **En rendimiento, distinguir transmisión de propagación.** Es el reparto del tema 1
  y es lo que decide si el resultado depende del tamaño del paquete o de la distancia.

### S4 · Aplicaciones cliente/servidor

Programar con sockets lo del tema 5. El servidor iterativo atiende a un cliente cada
vez, y el concurrente lanza un proceso o un hilo por conexión.

Tres cosas que no se ven en el código y sí en la ejecución:

- **TCP entrega un flujo, no mensajes.** Hay que delimitar por longitud o por
  separador; suponer que un `write` corresponde a un `read` funciona en pruebas
  locales y falla en cuanto hay latencia.
- **`SO_REUSEADDR` evita el «dirección ya en uso»** al reiniciar el servidor. Viene
  del estado de espera del cierre de TCP, que el tema 3 explica.
- **El orden de los octetos.** Los números en la red van en orden de red, así que
  `htons` y `ntohs` no son opcionales entre máquinas distintas.

## Las prácticas de laboratorio

### P1 · Encaminamiento y cortafuegos

Encaminamiento **estático**: escribir a mano las rutas de cada equipo con
`ip route add`, y comprobar el camino con `traceroute`. Es donde se ve que la regla
del prefijo más largo del tema 2 decide de verdad, y que una ruta por defecto tapa
los errores hasta que aparece un destino que sí tenía ruta específica.

Encaminamiento **dinámico**: levantar RIP u OSPF y observar cómo convergen las
tablas, cómo reaccionan al caer un enlace y cuánto tardan. Es la comprobación
experimental de la comparación entre vector de distancias y estado del enlace.

**Cortafuegos** con `iptables` o `nftables`. Lo que hay que entender es el orden de
evaluación y la política por defecto:

| Cadena | Cuándo se aplica |
| --- | --- |
| `INPUT` | el paquete va dirigido a esta máquina |
| `OUTPUT` | lo genera esta máquina |
| `FORWARD` | pasa por ella hacia otra red |

Dos reglas prácticas: **la primera regla que casa decide**, así que el orden importa
tanto como el contenido; y una política por defecto de descarte exige acordarse de
permitir el tráfico de retorno, o la máquina puede enviar y no recibir respuestas.
También aquí se configura el NAT del tema 2, con la cadena de posencaminamiento.

### P2 · Servicios básicos

| Servicio | Qué se configura | Del temario |
| --- | --- | --- |
| DHCP | rangos, tiempos de concesión, reservas | direccionamiento del tema 2 |
| DNS | zona directa e inversa, registros `A`, `NS`, `MX`, `PTR` | tema 5 |
| Web | servidor HTTP, sitios virtuales por nombre | tema 5 |

La comprobación no es «arranca el servicio», es **que responde lo que debe**: `dig`
contra el servidor propio, `curl -v` contra cada sitio virtual, y una captura para
ver la consulta y la respuesta.

Y el sitio virtual por nombre es la comprobación práctica de por qué la cabecera
`Host` es obligatoria: dos sitios en la misma dirección IP solo se distinguen por
ella.

### P3 · Servicios avanzados

| Servicio | Qué se configura | Del temario |
| --- | --- | --- |
| Correo | SMTP para envío y recepción, IMAP para el buzón | tema 5 |
| HTTPS | certificado, clave y redirección desde HTTP | tema 4 |
| Túneles y red privada virtual | cifrado entre dos redes | tema 4 |

Al montar el correo aparece el problema de fondo del tema 5: **un servidor recién
instalado es un retransmisor abierto** si no se restringe quién puede enviar a
través de él, y eso lo convierte en emisor de correo no deseado en cuestión de
horas. Restringir el reenvío y exigir autenticación es parte de la práctica, no un
extra.

Con HTTPS se comprueba lo del tema 4 sobre un certificado real: un certificado
autofirmado funciona criptográficamente y el navegador avisa, porque no hay cadena
hasta una autoridad en la que confíe. Es exactamente el problema que los
certificados vienen a resolver, visto desde el otro lado.

## Lo que ya publica esta ficha

En `Resumenes/` están los resúmenes de los temas 1 a 5, en `Teoria/` las preguntas de
examen resueltas paso a paso, y en `TestsFR/` los tres cuestionarios de las
prácticas, hechos con [`/md2html/`](../../../../md2html/).

Los guiones y la orientación práctica siguen a \cite{garciateodoro2007}; la
programación con sockets, a \cite{comer2001}, y las herramientas de diagnóstico y su
lectura, a \cite{kurose2017}.
