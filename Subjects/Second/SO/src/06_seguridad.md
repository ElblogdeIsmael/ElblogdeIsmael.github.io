# Mecanismos de seguridad

Tema 6 del programa. Qué hay que proteger y de qué, cómo se comprueba quién es
alguien y cómo se decide lo que puede hacer una vez comprobado.

## Objetivos de protección y amenazas

### Los tres objetivos

| Objetivo | Qué garantiza | Ejemplo de violación |
| --- | --- | --- |
| Confidencialidad | la información solo la ve quien debe | lectura de un archivo ajeno |
| Integridad | la información solo la modifica quien debe | alteración de un registro |
| Disponibilidad | el servicio está cuando se necesita | agotamiento de recursos |

Los tres se contraponen en la práctica. Cifrar mejora la confidencialidad y
empeora la disponibilidad si se pierde la clave; replicar mejora la
disponibilidad y multiplica los sitios desde donde se puede filtrar información.

### Protección y seguridad

Dos palabras que no significan lo mismo:

- **Protección** son los mecanismos internos que controlan el acceso a los
  recursos del sistema. Es un problema técnico con solución técnica.
- **Seguridad** es el problema completo, e incluye el entorno: quién tiene acceso
  físico a la máquina, cómo se administra, qué hace el usuario cuando le piden la
  contraseña por teléfono.

Un sistema con protección perfecta puede ser inseguro. El sistema operativo solo
puede resolver la primera mitad.

### Principios de diseño

Los que Saltzer y Schroeder formularon en 1975 y siguen vigentes:

1. **Mínimo privilegio.** Cada componente con los permisos justos para su
   función, y ni uno más.
2. **Economía de mecanismo.** Lo simple se puede auditar; lo complejo, no.
3. **Valores por omisión seguros.** Denegar salvo permiso explícito. Una lista de
   lo prohibido siempre está incompleta.
4. **Mediación completa.** Comprobar cada acceso, no solo el primero.
5. **Diseño abierto.** La seguridad debe descansar en la clave, no en el secreto
   del mecanismo.
6. **Separación de privilegios.** Exigir dos condiciones independientes para las
   operaciones críticas.
7. **Menor mecanismo común.** Reducir lo que se comparte entre usuarios: lo
   compartido es un canal.
8. **Aceptabilidad psicológica.** Si el mecanismo estorba, se rodea. Una política
   de contraseñas imposible produce contraseñas apuntadas en un papel.

La **mediación completa** es la que explica una diferencia de diseño de Unix:
los permisos de un archivo se comprueban en `open` y no en cada `read`, así que
un cambio de permisos no afecta a un descriptor ya abierto. Es una desviación
consciente del principio, aceptada por rendimiento.

### El dominio de protección

Un proceso ejecuta dentro de un **dominio**, que es un conjunto de pares
(objeto, operaciones permitidas). En Unix el dominio lo definen el identificador
de usuario efectivo y los grupos.

El cambio de dominio ocurre al ejecutar un binario `setuid`, y es la operación
más delicada del modelo: el proceso pasa a tener los privilegios del propietario
del ejecutable. Un fallo en un programa `setuid` de root es una escalada de
privilegios inmediata, y por eso la tendencia moderna es sustituirlos por
**capacidades**, que trocean el privilegio de root en unas cuarenta piezas
independientes. Un programa que solo necesita abrir un puerto bajo recibe
`CAP_NET_BIND_SERVICE` y nada más.

### Amenazas

| Clase | Descripción |
| --- | --- |
| Caballo de Troya | programa con una función anunciada y otra oculta |
| Puerta trasera | acceso deliberado que salta la autenticación |
| Bomba lógica | código que actúa al cumplirse una condición |
| Escalada de privilegios | pasar de usuario sin privilegios a administrador |
| Denegación de servicio | agotar un recurso hasta que el servicio deja de responder |
| Canal encubierto | transmitir información por un medio no previsto para ello |

Y las técnicas de explotación que atacan directamente al sistema operativo:

**Desbordamiento de pila.** Escribir más allá del final de un vector local
sobrescribe la dirección de retorno del marco de llamada, y al volver la función
el control salta donde el atacante quiera. Las contramedidas se han ido
acumulando, y ninguna basta por sí sola:

| Contramedida | Qué hace | Cómo se rodea |
| --- | --- | --- |
| Canario | valor testigo antes de la dirección de retorno | fuga de información que lo revele |
| Pila no ejecutable (NX) | impide ejecutar lo escrito en la pila | reutilizar código ya presente (ROP) |
| ASLR | aleatoriza la posición de pila, montículo y bibliotecas | fuga de direcciones, o fuerza bruta en 32 bits |
| RELRO | pone de solo lectura las tablas de enlace tras cargar | — |

**Condición de carrera en tiempo de comprobación.** Un programa privilegiado
comprueba que un archivo es del usuario y luego lo abre; entre las dos
operaciones el atacante sustituye el archivo por un enlace simbólico. La única
solución correcta es no separar comprobación y uso: abrir primero y comprobar
sobre el descriptor, con `fstat` en vez de `stat`.

**Canales laterales.** Meltdown y Spectre no leen memoria protegida
directamente: obligan al procesador a ejecutar especulativamente un acceso y
después deducen el valor midiendo el tiempo de acceso a la caché. Son
interesantes aquí porque rompen la frontera que el tema 1 daba por sólida: la
protección de memoria seguía funcionando, y aun así la información se filtraba
por un efecto secundario del hardware. Las mitigaciones —aislar las tablas de
páginas del núcleo, vaciar predictores en cada transición— tienen un coste
medible en cada llamada al sistema.

## Autenticación

Comprobar que alguien es quien dice ser. Tres factores, que se combinan:

| Factor | Basado en | Debilidad |
| --- | --- | --- |
| Conocimiento | contraseña, PIN | se adivina, se reutiliza, se filtra |
| Posesión | tarjeta, llave física, generador de códigos | se pierde o se roba |
| Inherencia | huella, iris, voz | no se puede cambiar tras una filtración |

Esa última debilidad es la que se subestima. Una contraseña comprometida se
cambia; una huella dactilar, no.

### Contraseñas

Nunca se almacenan. Se almacena el resultado de una función que no se puede
invertir, y la comparación se hace sobre ese resultado.

La función no puede ser una función resumen criptográfica corriente. SHA-256 está
diseñada para ser rápida, y esa velocidad juega a favor de quien prueba
candidatos: una tarjeta gráfica calcula miles de millones por segundo. Lo que se
usa son funciones deliberadamente lentas y con coste ajustable —bcrypt, scrypt,
Argon2—, y las dos últimas además exigen memoria, lo que anula la ventaja del
hardware especializado.

La **sal** es un valor aleatorio distinto para cada usuario que se concatena
antes de aplicar la función. Sin ella, dos usuarios con la misma contraseña
tienen el mismo resultado almacenado, y una tabla precalculada sirve para todos
los sistemas del mundo a la vez. Con ella, cada contraseña hay que atacarla por
separado. La sal no es secreta, y se guarda junto al resultado.

En Unix los resultados no están en `/etc/passwd`, que es legible por todos, sino
en `/etc/shadow`, que solo lee root. La separación se introdujo cuando el
crecimiento de la potencia de cálculo hizo que dar acceso público a los
resultados dejara de ser aceptable.

### Ataques y defensas

| Ataque | Descripción | Defensa |
| --- | --- | --- |
| Fuerza bruta | probar todas las combinaciones | longitud, y retardo tras cada fallo |
| Diccionario | probar palabras y variantes frecuentes | función lenta, y comprobar contra listas filtradas |
| Tabla arcoíris | resultados precalculados | sal |
| Reutilización | probar credenciales filtradas de otro sitio | segundo factor |
| Suplantación | pantalla de acceso falsa | camino de confianza al sistema |
| Registro de teclas | capturar lo tecleado | segundo factor, y contraseñas de un solo uso |

La política de caducidad obligatoria cada pocas semanas ha sido **retirada de las
recomendaciones**: producía variaciones triviales de la contraseña anterior. Lo
que sí se recomienda es longitud, comprobación contra listas de contraseñas
filtradas y cambio solo cuando hay indicio de compromiso.

### PAM

Los módulos de autenticación conectables separan el mecanismo de autenticación de
las aplicaciones que lo usan. `login`, `sshd` y `sudo` no saben cómo se
autentica: llaman a PAM, y la configuración decide si detrás hay contraseñas
locales, un directorio LDAP, una tarjeta o un segundo factor. Es la separación
entre mecanismo y política del tema 1 aplicada aquí, y evita que añadir un método
nuevo obligue a tocar cada programa.

## Mecanismos de autorización

Decidida la identidad, queda decidir lo que puede hacer.

### La matriz de acceso

El modelo formal: una matriz con un dominio por fila, un objeto por columna y las
operaciones permitidas en cada celda. Es completa y no se implementa nunca, por
tamaño y dispersión. Lo que se implementa son sus dos proyecciones:

| | Lista de control de acceso | Lista de capacidades |
| --- | --- | --- |
| Se guarda por | columna, es decir, con el objeto | fila, es decir, con el sujeto |
| Responde barato a | quién puede acceder a este objeto | a qué puede acceder este sujeto |
| Revocar | fácil, se edita la lista del objeto | difícil, hay que perseguir las capacidades |
| Ejemplos | permisos y ACL de POSIX, NTFS | descriptores de archivo, seL4, `pledge` |

Un descriptor de archivo abierto es exactamente una capacidad: se obtiene tras
una comprobación, se puede pasar a otro proceso —por un socket de dominio Unix— y
quien lo tiene puede usarlo sin volver a demostrar nada.

### Control de acceso discrecional

Es el modelo Unix: el propietario de un objeto decide sus permisos. Se llama
discrecional porque la decisión queda a discreción del usuario.

Su límite es estructural: nada impide que un usuario, voluntariamente o
engañado, dé acceso a lo que no debía. Un caballo de Troya ejecutado por un
usuario tiene todos los permisos de ese usuario, y puede regalar sus archivos.

### Control de acceso obligatorio

La política la fija el administrador y el usuario no puede relajarla, ni sobre
sus propios archivos. Cada objeto y cada sujeto llevan una etiqueta, y las reglas
se aplican sobre las etiquetas.

El modelo **Bell-LaPadula**, orientado a confidencialidad, impone dos reglas que
son menos obvias de lo que parecen:

- **No leer hacia arriba.** Un sujeto no lee objetos de nivel superior.
- **No escribir hacia abajo.** Un sujeto no escribe objetos de nivel inferior.

La segunda sorprende, y es la que de verdad protege: sin ella, un proceso con
acceso a información clasificada podría copiarla a un archivo público. El modelo
**Biba** es su simétrico para integridad, y sus reglas van en el sentido
contrario: no leer hacia abajo, no escribir hacia arriba.

En Linux esto lo implementan SELinux y AppArmor a través de los módulos de
seguridad del núcleo, que insertan una comprobación adicional después de la
comprobación discrecional. Nunca la sustituyen: si los permisos clásicos
deniegan, la etiqueta no rescata nada.

### Control de acceso basado en roles

Los permisos se asignan a roles y los roles a usuarios. Escala mejor en
organizaciones porque un cambio de puesto es un cambio de rol y no una revisión
de cada objeto. `sudo` es su aproximación en Unix: en vez de repartir la
contraseña de root, se autoriza a cada usuario un conjunto de órdenes concretas,
y cada ejecución queda registrada.

### Aislamiento

Cuando ni siquiera se confía en el proceso, se le limita lo que puede pedir:

| Mecanismo | Qué acota |
| --- | --- |
| `chroot` | la raíz del sistema de archivos visible; no es una frontera de seguridad por sí solo |
| Espacios de nombres | qué procesos, montajes, red e identificadores ve |
| Grupos de control | cuánta CPU, memoria y ancho de banda consume |
| `seccomp` | qué llamadas al sistema puede ejecutar |
| Máquina virtual | la frontera más fuerte, y la más cara |

Un contenedor es la combinación de los cuatro primeros. Que `chroot` no sea una
frontera de seguridad tiene una razón concreta: un proceso con privilegios puede
salir de él, y el mecanismo se diseñó para aislar builds, no atacantes.

### Registro y auditoría

Lo que no se registra no se puede investigar, y un registro que el atacante puede
borrar no sirve. De ahí que los registros se envíen a una máquina distinta, y que
se firmen o se encadenen para detectar manipulaciones.

Los tres extremos que hay que evitar: registrar tan poco que no se pueda
reconstruir un incidente, registrar tanto que nadie mire, y registrar datos
sensibles —contraseñas tecleadas donde no debían, tokens— que convierten el
propio registro en un objetivo.

## Seguridad en la administración

Cierra el tema y enlaza con la práctica 1. La mayor parte de los compromisos no
explota un fallo del núcleo, sino una configuración:

- Servicios escuchando en la red que nadie usa.
- Actualizaciones sin aplicar sobre vulnerabilidades conocidas y publicadas.
- Permisos demasiado amplios, y directorios escribibles por todos en el camino
  de búsqueda de un programa privilegiado.
- Copias de seguridad que nunca se han probado restaurando.
- Cuentas de servicio con intérprete de órdenes y contraseña.

El principio del mínimo privilegio se aplica igual aquí: instalar lo que se usa,
abrir lo que se necesita, dar los permisos justos. Las guías de administración
que la asignatura recomienda —\cite{nemeth2010} y \cite{frisch2002}— desarrollan
esta parte, y el detalle de los mecanismos del núcleo está en \cite{love2010}.
