# Seguridad en redes

Tema 4 del programa, bloque 4. Cifrado, autenticación, funciones resumen, firma y
certificados, y los protocolos que los combinan.

## Qué hay que proteger

| Propiedad | Qué garantiza | Con qué se consigue |
| --- | --- | --- |
| Confidencialidad | que solo el destinatario lea el contenido | cifrado |
| Integridad | que el contenido no se ha alterado | funciones resumen |
| Autenticación | que el interlocutor es quien dice ser | firma, certificados |
| No repudio | que el emisor no pueda negar haberlo enviado | firma digital |
| Disponibilidad | que el servicio siga funcionando | fuera del alcance de la criptografía |

Las cuatro primeras se consiguen con criptografía. La quinta no: contra un ataque
de denegación de servicio no protege ningún cifrado, y por eso se trata con
filtrado, dimensionado y limitación de tasa.

Los ataques que este tema considera:

| Ataque | Qué hace | Contra qué propiedad |
| --- | --- | --- |
| Escucha | leer el tráfico ajeno | confidencialidad |
| Modificación | alterar los mensajes en tránsito | integridad |
| Suplantación | hacerse pasar por otro | autenticación |
| Repetición | reenviar un mensaje válido capturado antes | autenticación |
| Intermediario | situarse entre los dos extremos | todas |

## Cifrado

### Cifrado simétrico

La misma clave cifra y descifra.

$$C = E_K(M), \qquad M = D_K(C)$$

| Ventajas | Inconvenientes |
| --- | --- |
| muy rápido, apto para grandes volúmenes | hay que compartir la clave por un canal seguro |
| claves cortas: 128 o 256 bits | $n$ interlocutores necesitan $n(n-1)/2$ claves |
| | no da no repudio: los dos tienen la misma clave |

Algoritmos: **AES** es el estándar actual, con claves de 128, 192 o 256 bits; DES
está retirado, porque sus 56 bits de clave se recorren por fuerza bruta.

El problema del reparto de claves es el que motiva todo lo que sigue: **para
compartir una clave en secreto haría falta un canal secreto, que es lo que se
quería construir**.

### Cifrado asimétrico

Cada participante tiene un par de claves: una **pública**, que se publica, y una
**privada**, que no sale de su poder. Lo cifrado con una solo se descifra con la
otra.

| Se cifra con | Solo descifra | Sirve para |
| --- | --- | --- |
| clave pública del destino | el destino, con su privada | confidencialidad |
| clave privada del emisor | cualquiera, con su pública | autenticación y no repudio |

La segunda fila es la base de la firma digital: si algo se descifra con la clave
pública de alguien, es que se cifró con su privada, y esa solo la tiene él.

Se apoya en problemas matemáticos difíciles de invertir: factorizar un número
grande en RSA, el logaritmo discreto en Diffie-Hellman y en curva elíptica.

Su inconveniente es la **velocidad**: es varios órdenes de magnitud más lento que
el simétrico, y las claves son mucho más largas para un nivel de seguridad
equivalente.

### El esquema híbrido

Es lo que se usa en la práctica, y combina lo bueno de los dos:

1. Se genera una clave simétrica **de sesión**, al azar y para un solo uso.
2. Se cifra esa clave con la **pública del destinatario** y se le envía.
3. Todo el tráfico se cifra con la clave de sesión, en simétrico.

El asimétrico resuelve el reparto de claves, que era su cometido, y el simétrico
hace el trabajo pesado. Es lo que hacen TLS, SSH y el correo cifrado.

### Diffie-Hellman

Permite que dos extremos acuerden una clave secreta **hablando por un canal
público**, sin haber compartido nada antes.

| Paso | Alicia | Público | Bruno |
| --- | --- | --- | --- |
| 1 | elige $a$ | $p$, $g$ | elige $b$ |
| 2 | calcula $A = g^a \bmod p$ | $A$, $B$ | calcula $B = g^b \bmod p$ |
| 3 | $K = B^a \bmod p$ | | $K = A^b \bmod p$ |

Los dos llegan a $K = g^{ab} \bmod p$. Quien escucha ve $p$, $g$, $A$ y $B$, y para
obtener $K$ tendría que resolver el logaritmo discreto.

**Por sí solo no autentica**, y es su límite: un atacante que se sitúe en medio
puede acordar una clave con cada extremo y retransmitir descifrando y recifrando.
Por eso el intercambio se firma, y ahí entran los certificados.

## Funciones resumen

Una función resumen convierte un mensaje de cualquier tamaño en una cadena de
longitud fija. Sus propiedades:

| Propiedad | Qué significa |
| --- | --- |
| Unidireccional | del resumen no se puede recuperar el mensaje |
| Efecto avalancha | cambiar un bit cambia todo el resumen |
| Resistente a preimagen | dado $h$, no se puede encontrar $m$ con $H(m) = h$ |
| Resistente a colisiones | no se pueden encontrar $m_1 \ne m_2$ con $H(m_1) = H(m_2)$ |

Algoritmos: **SHA-256** y SHA-3 son los recomendados; MD5 y SHA-1 están rotos,
porque se saben construir colisiones, y no deben usarse para nada que dependa de
la integridad.

Un resumen a secas **no protege contra modificación**: quien altera el mensaje
recalcula el resumen. Hacen falta dos construcciones distintas según lo que se
quiera:

- **HMAC**: resumen con una clave secreta compartida. Da integridad y autenticación
  de origen entre quienes comparten la clave, y no da no repudio.
- **Firma digital**: el resumen se cifra con la clave privada del emisor. Da además
  no repudio, porque solo él pudo producirla.

## Firma digital y certificados

### Firma

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, >=stealth, node distance=6mm]
\node[draw, minimum height=0.8cm, minimum width=1.9cm] (m) {mensaje};
\node[draw, minimum height=0.8cm, minimum width=1.9cm, right=of m] (h) {resumen};
\node[draw, minimum height=0.8cm, minimum width=2.6cm, right=of h, align=center] (c)
  {cifrado con la\\clave privada};
\node[draw, minimum height=0.8cm, minimum width=1.9cm, right=of c] (f) {firma};
\draw[->, thick] (m) -- node[above, font=\scriptsize] {$H$} (h);
\draw[->, thick] (h) -- (c);
\draw[->, thick] (c) -- (f);
\end{tikzpicture}
\end{center}
```

Para verificar, el receptor descifra la firma con la clave pública del emisor,
calcula por su cuenta el resumen del mensaje recibido y compara. Si coinciden, el
mensaje no se ha alterado y solo pudo firmarlo quien tiene la clave privada.

**Se firma el resumen y no el mensaje** por dos razones: el asimétrico es lento y
solo opera sobre bloques del tamaño de la clave, y el resumen es corto y de tamaño
fijo.

Firmar **no cifra**. Un mensaje firmado se lee sin problema; lo que garantiza es
que no ha cambiado y de quién viene. Para las dos cosas hay que firmar y cifrar.

### Certificados

Queda un problema abierto: **cómo saber que una clave pública es de quien dice**.
Un atacante puede publicar una clave a nombre de otro.

Un **certificado digital** es un documento que asocia una identidad con una clave
pública, firmado por una **autoridad de certificación** en la que ambos confían. Su
contenido, en el formato X.509:

| Campo | Qué lleva |
| --- | --- |
| Sujeto | a quién identifica |
| Clave pública | la que se certifica |
| Emisor | qué autoridad lo firma |
| Validez | fechas de inicio y de fin |
| Número de serie | identificador único dentro de esa autoridad |
| Firma | de la autoridad, sobre todo lo anterior |

Los certificados forman una **cadena**: el del servidor lo firma una autoridad
intermedia, a esta la firma otra, y arriba hay una autoridad raíz cuyo certificado
está **autofirmado** y viene preinstalado en el navegador o el sistema.

La confianza descansa por completo en esa raíz preinstalada. Si una autoridad raíz
se ve comprometida o emite certificados indebidos, todo lo que cuelga de ella deja
de valer, y esa es la debilidad conocida del modelo.

Un certificado se puede **revocar** antes de caducar, si su clave privada queda
expuesta. Se comprueba con listas de revocación o consultando en línea el estado
del certificado.

## Protocolos seguros

Combinan lo anterior, y cada uno actúa en una capa distinta:

| Protocolo | Capa | Qué protege |
| --- | --- | --- |
| TLS | entre transporte y aplicación | el tráfico de una conexión TCP |
| IPsec | red | todo el tráfico IP entre dos extremos o dos redes |
| SSH | aplicación | acceso remoto y túneles |
| S/MIME y PGP | aplicación | el correo, de extremo a extremo |
| WPA2 y WPA3 | enlace | el acceso a una red inalámbrica |

**TLS** es el más presente: es lo que convierte HTTP en HTTPS. Su negociación
reúne todo el tema:

1. El cliente propone versiones y suites criptográficas.
2. El servidor elige y envía su **certificado**.
3. El cliente lo valida contra las autoridades en las que confía.
4. Se acuerda una clave de sesión, hoy con **Diffie-Hellman efímero**.
5. El resto de la comunicación va cifrada en simétrico, con HMAC para la
   integridad.

El paso 4 con claves efímeras da **secreto hacia el futuro**: como la clave de
sesión no se deriva de la clave privada del servidor, quien grabe hoy el tráfico
cifrado no podrá descifrarlo aunque esa clave privada se filtre mañana.

**La capa importa.** IPsec protege todo el tráfico entre dos puntos, incluidas las
cabeceras de transporte, y es la base de una red privada virtual; TLS protege una
conexión concreta y deja a la vista con quién se habla. Lo que se cifra en una capa
no protege lo que va por debajo: **con HTTPS, un observador no ve la página pedida
y sí ve la dirección IP del servidor**.

Los fundamentos de criptografía aplicada a redes siguen a \cite{garciateodoro2007} y
\cite{stallings2006}; los protocolos seguros y su encaje por capas, a
\cite{kurose2017} y \cite{tanenbaum2011}.
