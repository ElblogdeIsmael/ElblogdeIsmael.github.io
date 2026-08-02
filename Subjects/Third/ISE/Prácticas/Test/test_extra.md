# Test Exámenes

* **Autor:** Ismael Sallami Moreno
* **Titulación:** Doble Grado en Ingeniería Informática y ADE

1. ¿Para qué se ha utilizado en la práctica el elemento Gaussian Random Timer de JMeter?

    - ( ) Para establecer de forma aleatoria el número y duración de las peticiones POST GET
    - (x) Para establecer un tiempo de espera aleatorio en cada petición POST y GET
    - ( ) Para introducir errores de forma aleatoria y temporal en las peticiones POST y GET
    - ( ) Para fijar de forma aleatoria el tiempo promedio de las peticiones POST y GET

2. ¿Para qué usa en la práctica el elemento Regular Expression Extractor de JMeter?

    - ( ) Para recuperar el elemento \$0\$ de la respuesta dada por el servidor a la petición GET
    - (x) Para recuperar el JWT de la respuesta dada por el servidor a la petición POST
    - ( ) Para añadirle la variable "token" a la petición POST
    - ( ) Para recuperar el JWT de la repsuesta dada por el servidor a la petición GET

3. ¿Para qué es la primera petición que se realiza en la aplicación de prácticas?

    - ( ) Para devolver la información de un alumno o grupo de alumnos
    - (x) Para recuperar el token que identifica al usuario logeado correctamente
    - ( ) Para recuperar el token que identifica a un grupo de administradores
    - ( ) Para recuperar el token que identifica a un grupo de alumnos

4. ¿Qué comando usamos para lanzar un benchmark con Phoronix (por ejemplo, "sudokut")?

    - ( ) phoronix-benchmark test sudokut
    - ( ) ab sudokut
    - ( ) phoronix-benchmark sudokut
    - (x) phoronix-text-suite run sudokut

5. ¿Tiene sentido aplicar el test a la misma máquina donde ejecutamos ab?

    - (x) No, ya que el resultado va a estar afectado por la capacidad de la máquina para generar la carga, lo cual afecta a su vez la capacidad para servir peticiones
    - ( ) Sí, siempre y cuando se haga uso de máquinas virtuales
    - ( ) Depende de si la carga que se genere está por debajo de un umbral concreto
    - ( ) Sí, ya que de esa forma no afecta a la latencia que pueda introducir la red

6. ¿Para qué ha utilizado en la práctica el elemento Access Log Sampler de Jmeter?

    - ( ) Para generar un fichero ".log" con todas las peticiones realizadas con los otros componentes de JMeter
    - ( ) Para leer un fichero ".log" y crear automáticamente un test de carga balanceado
    - (x) Para a prtir de un fichero ".log", generar automáticamente una serie de peticiones y registrar las repsuestas generadas
    - ( ) Para extrar los JWT de las peticiones POST y almacenarlas en un fichero ".log"

7. El ajuste de sistemas es...

    - ( ) ...distribuir una serie de tareas entre diferentes unidades computacionles para obtener un mayor rendimiento conjunto
    - (x) ...modificar parámetros del sistema para optimizar su funcionamiento, swgún los resultados que obtenemos mediante monitorización
    - ( ) ...aplicar una carga mientras monitorizamos un sistema, para comprobar como podría responder nuestro sistema ante cargas similares
    - ( ) ...visualizar el comportamiento de un sistema ante ciertas actividad que los usuarios generan

8. De cara a realizar un test con muchas hebras y con carga de CPU...

    - ( ) Todas las respuestas son correctas
    - ( ) usaríamos la interfaz de GUI de JMeter
    - ( ) usaríamos la interfaz del navegador web de JMeter
    - (x) usaríamos la interfaz de CLI de JMeter

9. ¿Cuáles son las ventajas de un contenedor frente a una Máquina Virtual?

    - ( ) Las Máquinas Virtuales ocupan menos espacio, requieren menos recursos y son más veloces en el arranque
    - ( ) Los contenedores ocupan más espacio, requieren más recursos y son más veloces en el arranque
    - ( ) Las Máquinas Virtuales ocupan más espacio, requieren los mismos recursos pero son más veloces en el arranque
    - (x) Los contenedores ocupan menos espacio, requieren menos recursos y son más veloces en el arranque

10. ¿Podríamos comparar el performance de dos servidores realizando test desde una máquina a la otra y viceversa?

    - ( ) Depende de si usamos máquinas virtuales o contenedores
    - (x) Sí, pero la comparación no sería justa
    - ( ) Sí, si son suficientemente potentes
    - ( ) No, ya que no se pueden ejecutar benchmarks en dos máquinas a la vez

11. ¿Dónde se tiene que añadir el token de login?

    - ( ) Al final de la segunda petición HTTP
    - ( ) A la cabecera HTTP de la primera petición
    - (x) A la cabecera HTTP de la segunda petición
    - ( ) Al final de la primera petición

12. Benchmarking es...

    - ( ) ...modificar parámetros del sistema para optimizar su funcionamiento, según los resultados que obtenemos mediante monitorización
    - ( ) ...distribuir una serie de tareas entrediferentes unidades computacionales, para obtener un mayor rendimiento conjunto
    - (x) ...aplicar una carga mientras monitorizamos un sistema, para comprobar como podría responder nuestro sistema ante cargas similares
    - ( ) ...monitorizar el comportamiento de un sistema ante ciertas actividades que los usuarios generan

13. ¿Qué contienen los CSV introducidos en JMeter?

    - ( ) Información personal de los administradores
    - ( ) Los tokens para la autenticación
    - (x) Las credenciales de alumnos y administradores con su correo y un password
    - ( ) Las notas de los alumos

14. ¿Cuál es el resultado de ejecutar "ab n 10 c 5 192.168.56.110/"?

    - ( ) Ejecuta un benchmark con 5 peticiones HTTP en total siendo 10 de ellas concurrentes
    - (x) Ejecuta un benchmark con 10 peticiones HTTP en total siendo 5 de ellas concurrentes
    - ( ) Ejecuta un benchmark con menos de 10 peticiones HTTP siendo 5 de ellas concurrentes
    - ( ) Ejecuta un benchmark con 10 peticiones HTTP en total siendo menos de 5 de ellas concurrentes

15. ¿A qué puerto haces las peticiones JMeter en la aplicación de prácticas?

    - (x) 3000
    - ( ) 22022
    - ( ) 3306
    - ( ) 27107

16. ¿Para qué se ha utilizado la petición GET en la práctica?

    - (x) Para obtener el JSON con la información del alumno
    - ( ) Para ejecutar el benchmark en el servidor remoto
    - ( ) Para autenticar al usuario y obtener el JWT
    - ( ) Para autenticar al usuario y generar el JWT con sus calificaciones

17. ¿Para qué se plantean 2 hebras en la aplicación de JMeter?

    - ( ) Para nada, JMeter no soporta concurrencia real a nivel de hebra
    - ( ) Para que no haya problemas de seguridad ni filtraciones entre grupos
    - (x) Para lograr concurrencia entre alumnos y admins, simulando un entorno más real
    - ( ) Porque son dos grupos distintos

18. Al hacer el test de JMeter ¿Dónde generamos carga?

    - ( ) En el contenedor de la API y el de la BD además de en la MV
    - ( ) En el contenedor de la API
    - ( ) En el contenedor de la API y el de la BD
    - (x) En el contenedor de la API, en el de la BD, en la MV que los contiene y en el cliente que lanza el test

19. ¿Cómo se instala un text en phoronix?

    - ( ) phoronix install nombreDelTest
    - ( ) phoronix-test-install nombreDelTest
    - (x) phoronix-test-suite install nombreDelTest
    - ( ) phoronix-install nombreDelTest

20. Phoromatic es una interfaz que se utiliza para

    - ( ) ejecutar los benchmarks de forma concurrente en múltiples máquinas
    - (x) orquestrar y automatizar la ejecución de benchmarks en múltiples máquinas
    - ( ) hacer un profiling de los benchmarks en múltiples máquinas
    - ( ) monitorizar la ejecución de benchmarks en múltiples máquinas

21. ¿Cómo se suelen comunicar los sistemas basdados en microservicios?

    - ( ) A través de RPCs
    - ( ) Mediante archivos compartidos
    - (x) Con APIs o sistemas de mensajes
    - ( ) Mediante sistemas de archivos distribuidos

22. ¿Con que comando iniciamos la aplicación antes de hacer el test de Jmeter?

    - ( ) docker compose run
    - ( ) docker-compose run
    - (x) docker-compose up
    - ( ) docker run

23. ¿Qué significa el parámetro -c en ab?

    - ( ) El número de peticiones simultáneas que es capaz de realizar
    - ( ) El número de procesos de httpd que creará el servidor
    - (x) La pseudoconcurrencia al realizar las peticiones
    - ( ) El número de peticiones totales que se harán en el tests

24. Si ejecutamos ab -n 1000 192.168.56.105 veremos...

    - (x) Un error al no haber especificado la página que queremos
    - ( ) El resultado del benchmark en el archivo ab.result
    - ( ) Un error al no haber especificado el nivel de concurrencia (-c)
    - ( ) El resultado del benchmark tras 1000 peticiones

25. ¿Qué contiene el archivo que se utiliza en el Access Log Sampler?

    - ( ) Un archivo con peticiones POST y GET
    - ( ) Un archivo con peticiones POST
    - ( ) Un archivo de texto con información para construir las peticiones de login
    - (x) Una bitácora de peticiones GET

26. Al hacer los tests obtenemos el valor de respuesta 401 porque...

    - ( ) nos hemos equivocado al meter la URL de la api
    - ( ) la petición ha sido correcta
    - ( ) nos hemos equivocado con el puerto
    - (x) nos hemos equivocado al meter los parámetros de autenticación

27. ¿Qué diferencia hay entre la opción run y la opción benchmark cuando usamos phoronix?

    - ( ) run es para suites, benchmark para tests
    - ( ) benchmark ejecuta el benchmark ya instalado, run igual pero lo instala en caso de no estar disponible
    - (x) run ejecuta el benchmark ya instalado, benchmark igual pero lo instala en caso de no estar disponible
    - ( ) tanto run como benchmark ejecutan el test y lo instala en caso de no estar disponible

28. ¿Dónde se especifican las credenciales de cada usuario para la petición de autenticación?

    - ( ) No hay que especificar credenciales.
    - (x) En el cuerpo de la petición
    - ( ) En la cabecera
    - ( ) Jmeter no tiene que especificar credenciales

29. Dado el siguiente dockerfile: <br><pre style='font-size: 0.9em; background: #eee; padding: 5px; border-radius: 3px; white-space: pre-wrap;'>FROM node:8\nRUN mkdir -p /usr/src/app\nCOPY ./usr/src/app\nEXPOSE 4000\nWORKDIR /usr/src/app\nRUN ["npm", "update"]\nENV NODE ENV=production\nCMD ["npm","start"]</pre> ¿Qué petición es la correcta?

    - ( ) curl -H "Authorization: Bearer \$TOKEN" http://\$SERVER:3000/api/v1/alumnos/alumno/asdfasdf%40tropoli
    - ( ) curl -H "Authorization: Basic etsiit:ApiDeLaETSIITDaLache" http://\$SERVER:4000/api/v1/alumnos/alumno/asdfasdf%40tropoli
    - ( ) curl -H "Authorization: Bearer \$TOKEN" -X POST http://\$SERVER:4000/api/v1/alumnos/alumno/asdfasdf%40tropoli
    - (x) curl -H "Authorization: Bearer \$TOKEN" http://\$SERVER:4000/api/v1/alumnos/alumno/asdfasdf%40tropoli

30. ¿Qué error es posible cometer al ejecutar ab por un despiste?

    - (x) Que las páginas servidas no sean iguales
    - ( ) Que se interfiera con la tarea de servicio de apache desde el cliente
    - ( ) Que no se especifique el puerto de httpd
    - ( ) Que el cortafuegos no permita la comunicación con la máquina

31. De cara a realizar un test con muchas hebras y con carga de CPU...

    - (x) usaríamos la interfaz de CLI de Jmeter
    - ( ) Todas las respuestas son correctas
    - ( ) usariamos la interfaz del navegador web de Jmeter
    - ( ) usariamos la interfaz de GUI de Jmeter

32. ¿Qué ventaja nos da JWT sobre otras autenticaciones?

    - ( ) Ninguna respuesta es correcta
    - ( ) Es más seguro porque usa TLS
    - ( ) Va cifrado en la cabecera
    - (x) No tendríamos que volver a autenticarnos si cambiaramos el dominio de destino

33. ¿En base a qué elemento podremos emitir juicios sobre un el rendimiento de una máquina tras ejecutar el benchmark?

    - ( ) Todas las respuestas son correctas
    - ( ) El tiempo de ejecución
    - ( ) El objetivo
    - (x) La métrica

34. ¿Qué debemos tener en cuenta antes de ejecutar un benchmark?

    - (x) Todas las otras respuestas son correctas
    - ( ) El objetivo
    - ( ) La métrica
    - ( ) Saber cómo usarlo

35. ¿Qué es lo primero que debemos tener en mente cuando vamos a seleccionar un benchmark?

    - ( ) Ninguna de las otras respuestas
    - ( ) Saber cómo usarlo
    - (x) El objetivo
    - ( ) La métrica

36. Si queremos utilizar el script pruebaEntorno.sh del repositorio...

    - ( ) ...deberemos probarlo en remoto
    - ( ) ...deberemos probarlo en local modificando la variable TOKEN
    - (x) ...deberemos probarlo en local al servidor y en remoto a éste modificando la variable SERVER
    - ( ) ...deberemos probarlo en local modificando la variable SERVER

37. ¿Cómo se comunica el cliente con la aplicación?

    - ( ) Con el backend en el 27017
    - ( ) Con el frontend en el puerto 3000 y con el backend en el 27017
    - (x) Con el frontend en el puerto 3000
    - ( ) Con el frontend en el puerto 27017 y con el backend en el 27017

38. ¿Es posible ajustar el comportamiento del sistema modificando los parámetros del kernel en tiempo de ejecución?

    - (x) Sí, con el comando sysctl
    - ( ) Hay que recompilar el kernel
    - ( ) Podríamos modificarlas al arrancar la imagen en el GRUB
    - ( ) No, habría que reiniciar el S.O.

39. Al hacer el test de Jmeter ¿Dónde generamos carga?

    - ( ) En el contenedor de la API y el de la BD además de en la MV
    - ( ) En el contenedor de la API
    - ( ) En el contenedor de la API y el de la BD
    - (x) En el contendor de la API, en el de la BD, en la MV que los contiene y en el cliente que lanza el test

40. ¿Cómo se autentica un usuario en la API para pedir información a la BD?

    - ( ) mediante Basic Auth
    - (x) mediante el uso de un token al portador
    - ( ) mediante LDAP
    - ( ) mediante OAuth

41. ¿Qué debemos tener instalado en los hosts para usar ansible?

    - ( ) SSH server y el agente
    - ( ) SSH y LAMP
    - ( ) Un agente
    - (x) SSH server

42. ¿Por qué no hemos usado Im-sensors en las prácticas?

    - ( ) Porque hemosido engañado por un virus informático malicioso.
    - ( ) Porque Im-sensors es incompatible con los sistemas raid que hemos usado.
    - (x) Porque Im-sensors no detectaría sensores en la máquina virtual.
    - ( ) Porque necesitamos privilegios root y no siempre están disponibles.

43. Dado este fragmento del archivo de configuración del agente, indique la linea que deberia continuar: <pre style='font-size: 0.9em; background: #eee; padding: 5px; border-radius: 3px; white-space: pre-wrap;'> ### Option: Server # List of comma delimited IP addresses, optionally in CIDR notation, or DNS names of Zabbix servers and Zabbix proxies. # Incoming connections will be accepted only from the hosts listed here. # If IPv6 support is enabled then '127.0.0.1', '::127.0.0.1', '::ffff:127.0.0.1' are treated equally # and '::/0' will allow any IPv4 or IPv6 address. # 0.0.0.0/0 can be used to allow any IPv4 address. # Example: Server=127.0.0.1,192.168.1.0/24,::1,2001:db8::/32,zabbix.example.com # # Mandatory: yes, if StartAgents is not explicitly set to 0. # Default: Server= </pre>

    - ( ) Server=UbuntuServer
    - ( ) Server=192.168.56.15
    - ( ) server=192.168.56.105
    - (x) Server=192.168.56.105

44. ¿Qué hace el comando dmesg?

    - ( ) Muestra los mensajes de los módulos
    - ( ) Muestra los mensajes de error del core
    - ( ) Muestra los mensajes directos
    - (x) Muestra los mensajes del kernel

45. ¿Qué es Naemon?

    - ( ) La API de Zabbix
    - ( ) Un daemon para Nautilus
    - (x) Un monitor de sistema con Nagios como origen
    - ( ) Un monitor específico para hardware

46. ¿Qué archivos de configuración en Zabbix hay que modificar en las prácticas?

    - ( ) /etc/zabbix/zabbix_agent.conf
    - ( ) /etc/zabbix/zabbix_agent.conf y /etc/zabbix/zabbix_server.conf
    - (x) /etc/zabbix/zabbix_agentd.conf y /etc/zabbix/zabbix_server.conf
    - ( ) /etc/zabbix/zabbix-agent.conf y /etc/zabbix/zabbix-server.conf

47. ¿Para que se usa el comando grep?

    - ( ) Para reemplazar cadenas dado un patrón de entrada
    - (x) Para filtrar información dado un patrón de entrada
    - ( ) Para procesar un fichero de texto
    - ( ) Para cambiar variables del SELinux

48. ¿A qué opción nos debemos ir si queremos empezar a monitorizar una nueva maquina desde el panel de Zabbix?

    - ( ) Menu-> Config -> Add host
    - ( ) Configuration -> New host
    - (x) Configuration -> Hosts -> Create Host
    - ( ) Dashboard -> Hosts-> Add host

49. ¿Por qué es necesario tener la pila LAMP instalada para usar Zabbix server?

    - (x) Porque usa PHP para el frontend, MySQL para la BBDD y Apache para alojar la información propia del servidor
    - ( ) Solo Apache y PHP, la BBDD esta con MongoDB
    - ( ) Solo MySQL para la BBDD y Apache para alojar la información propia del servidor, para el front se usa Python
    - ( ) No es necesario, no usa ninguna de las tecnologias incluidas en LAMP

50. ¿Cómo se denominan los archivos de scripts de ansible?

    - ( ) Ansible Books
    - ( ) Ansible Scripts
    - ( ) Playrooms
    - (x) Playbooks

51. ¿Con que comando podemos consultar la salida de un timer como el del guión?

    - ( ) journalctl mon_raid --since="tomorrow"
    - (x) journalctl -u mon_raid --since="yesterday"
    - ( ) systemctl status mon_raid
    - ( ) systemctl -u mon_raid --since="yesterday"

52. ¿Cual de las siguientes afirmaciones es correcta?

    - ( ) Zabbix solo tiene monitorización pasiva
    - ( ) Zabbix usa la arquitectura cliente-cliente
    - (x) Zabbix usa la pila LAMP
    - ( ) Zabbix siempre requiere la conexión cifrada

53. ¿Qué le ocurre a Ubuntu Server cuando quitamos uno de los dos discos virtuales?

    - ( ) El initramfs no nos permite continuar con el arranque del sistema
    - ( ) No tenemos GRUB instalado en el disco que hemos dejado puesto
    - ( ) /boot no se puede activar
    - (x) No es capaz de arrancar porque el RAID está inactivo

54. ¿Para que sirve el fichero create.sql.gz de Zabbix?

    - (x) Para importar la base de datos necesaria para Zabbix
    - ( ) Ninguna de las anteriores
    - ( ) Para instalar Zabbix junto con sus dependencias
    - ( ) Para instalar MySQL o MariaDB

55. ¿Qué significa cuando vemos en el prompt initramfs?

    - ( ) El arranque necesita una configuración manual
    - ( ) Estamos en varias consolas cargadas en el inicio
    - ( ) Ninguna de las otras es correcta
    - (x) Estamos en un sistema de archivos cargado en RAM durante el inicio

56. ¿En qué puerto escucha el agente de Zabbix por defecto?

    - ( ) 10500
    - (x) 10050
    - ( ) 10510
    - ( ) 10501

57. ¿Qué significa "[2/1][U_]" dentro del archivo de estado del md?

    - (x) El raid tiene dos discos y sólo el primero está funcionando
    - ( ) El raid tiene dos discos y sólo el segundo está funcionando
    - ( ) Hay dos discos disponibles pero el raid se creó con un disco
    - ( ) Para conocer el nivel RAID habría que ver la "personalities line"

58. ¿Dónde hemos especificado los nombres de los servidores o hosts en ansible?

    - (x) /ansible_platform/hosts
    - ( ) ~/ansible_platform/config/hosts
    - ( ) /ansible_platform/config.hosts
    - ( ) ~/ansible_platform/hosts_config

59. ¿Es necesario tener el servicio SSH para que Ansible funcione?

    - ( ) No, usa su propio protocolo
    - (x) Si en las máquinas a automatizar
    - ( ) Si, pero solo si es por el puerto 22
    - ( ) Tanto en las máquinas a automatizar como en la que tiene Ansible

60. ¿Con qué comando arreglamos finalmente la situación que detenía el arranque?

    - (x) mdadm -R /dev/md1
    - ( ) mdadm --activate /dev/md0
    - ( ) mdadm --norun /dev/md1
    - ( ) cat /proc/mdstat

61. ¿Qué cabecera del protocolo http devuelve el servidor web para informar que el contenido está comprimido?

    - ( ) Content-Length: zipped
    - ( ) Content-Type: text/html-zip
    - ( ) Content-Type: bin/zip
    - (x) Content-Encoding: gzip

62. ¿Cómo se busca un paquete en apt?

    - ( ) hack hotmail
    - (x) apt-cache search nombre-del-paquete
    - ( ) apt-get search nombre-del-paquete
    - ( ) apt-search nombre-del-paquete

63. ¿Qué compañía es la actual propietaria del SO Solaris?

    - ( ) HP
    - ( ) IBM
    - (x) Oracle
    - ( ) Microsoft

64. ¿Qué tipo de partición NO permite tamaño de archivos mayor de 4GB?

    - (x) vfat
    - ( ) ntfs
    - ( ) ext4
    - ( ) ext2

65. ¿Qué distribución es derivada de Red Hat?

    - (x) Fedora
    - ( ) Ubuntu
    - ( ) Open Suse
    - ( ) Linux Mint

66. Sobre la compresión del contenido Http:

    - ( ) Siempre es conveniente y debe ser activada para todos los tipos de contenidos y tamaños de archivos.
    - (x) Aumenta el uso de CPU en el servidor web al tener que comprimir los contenidos.
    - ( ) Reduce el uso de CPU en el cliente web ya que tiene que procesar menos información.
    - ( ) Es admitida por todos los servidores y clientes web actuales.

67. ¿Qué es cierto para Apache Httpd?

    - ( ) Todo es cierto
    - ( ) Es el segundo web más empleado en Internet detrás de IIS
    - ( ) No puede instalarse en Windows
    - (x) Es un servidor Http de código abierto y desarrollo comunitario

68. ¿Cuál de los siguientes programas es un editor de textos?

    - ( ) noteplus
    - (x) vim
    - ( ) telnet
    - ( ) dmesg

69. la opción -X de ssh sirve para:

    - ( ) Establecer una conexión cruzada
    - ( ) Para conectarse anónimamente a un servidor.
    - (x) Mostrar la interfaz de programas de la máquina remota.
    - ( ) Para cerrar una conexión remota.

70. REG_DWORD es un

    - ( ) Un parámetro modificable mediante el comando sysctl.
    - (x) Tipo de dato de registro de Windows
    - ( ) Estructura de datos del Kernel de Linux
    - ( ) Comando para abrir el editor del registro de Windows.

71. ¿Con qué opción de phoronix puedes comprobar el tamaño de un benchmark antes de descargarlo?

    - ( ) phoronix-test-suit check
    - (x) phoronix-test-suit info
    - ( ) phoronix-test-suit install info
    - ( ) phoronix-test-suit benchmark

72. ¿Con qué programa accedemos a la información de los monitores hw en Linux?

    - (x) lmsensors
    - ( ) top
    - ( ) Munin
    - ( ) Perfmon

73. MaxClients es un...

    - (x) parámetro para optimizar en Apache.
    - ( ) ninguna de las anteriores
    - ( ) parámetro para optimizar ssh
    - ( ) parámetro que muestra la carga de clientes.

74. Lynx es:

    - ( ) Lanza la interfaz gráfica de linux (XWindow)
    - ( ) El gestor de paquetes por defecto de Linux
    - ( ) Un editor de textos similar a vi pero más fácil de usar
    - (x) Un cliente web por linea de comandos.

75. ¿Qué archivo de auth.log contiene entradas más antiguas?

    - ( ) Ninguno, no hay archivos de logs que acaben en gz
    - ( ) auth.log.1.gz
    - ( ) auth.log.2.gz
    - (x) auth.log.3.gz

76. ¿En qué path del sistema de fichero linux tenemos acceso a modificar los parámetros del kernel?

    - ( ) /var/sys
    - (x) /proc/sys
    - ( ) /boot/Kernel
    - ( ) /proc/Kernel

77. ¿Qué comando emplearía en CentOS para comprobar si hay procesos del servidor web ejecutándose?

    - (x) ps -ax | grep httpd
    - ( ) top apache
    - ( ) start apache
    - ( ) ps -ax | less apache

78. ¿Qué editor de textos tiene modo edición y modo comandos?

    - (x) vi
    - ( ) nano
    - ( ) emacs
    - ( ) pico

79. ¿Qué hay que pulsar para matar un proceso desde top?

    - ( ) Q + PID del proceso
    - ( ) K + PID del proceso
    - ( ) m + PID del proceso
    - (x) k + PID del proceso

80. ¿Cual de las siguientes afirmaciones es cierta sobre la Fundación Apache?

    - ( ) Es una fundación para promover el desarrollo en comunidad de software abierto.
    - (x) Todas son ciertas
    - ( ) Es la responsable del desarrollo del contenedor de Servlets Tomcat.
    - ( ) Es responsable del desarrollo del servidor Web Apache Httpd.

81. ¿Cuál de los siguientes comandos de Linux te permite averiguar la IP del equipo?

    - (x) ifconfig
    - ( ) ifup
    - ( ) lynx
    - ( ) ipconfig

82. ¿Qué significa el parámetro -c en ab?

    - ( ) limita el porcentaje de CPU a usar.
    - ( ) Ninguna es correcta
    - (x) Especifica el nivel de concurrencia
    - ( ) Indica que las peticiones son ciclicas.

83. ¿Qué comando instala el programa midnight-commander?

    - ( ) apt-get installation mc
    - ( ) apt get install midnight-commander
    - ( ) Ninguna de las anteriores
    - (x) yum install mc

84. ¿Cuál de los siguientes no es un monitor?

    - (x) Monperd
    - ( ) Nagios
    - ( ) Ganglia
    - ( ) Munin

85. ¿Dónde está el archivo de configuración de SSH?

    - ( ) /var/ssh/conf
    - (x) /etc/ssh/sshd_config
    - ( ) /var/ssh/sshd_config
    - ( ) /home/ssh/sshd_config

86. Munin es un monitor que:

    - (x) Muestra información a través de un navegador web
    - ( ) muestra la información a través de una interfaz local
    - ( ) muestra información a través de una GUI remota
    - ( ) muestra la información a través de la consola.

87. ¿En qué directorio se sitúan por defecto los ficheros de registro de actividad de Linux?

    - ( ) /proc/sys
    - ( ) /etc/init.d
    - ( ) /tmp/log
    - (x) /var/log

88. ¿Qué empresa es responsable de VirtualBox?

    - ( ) MySQL
    - ( ) PostgreSQL
    - (x) Oracle
    - ( ) Apache

89. ¿Cuál de las siguientes afirmaciones es cierta?

    - (x) Para hacer permanentes los cambios en /proc/sys/ debo fijarlos en el archivo /etc/sysctl.conf
    - ( ) Los cambios realizados con sysctl se conservan tras reiniciar el sistema
    - ( ) los cambios realizados en /proc/sys/ son permanentes aun tras reiniciar el sistema
    - ( ) Para hacer permanentes los cambios de los parámetros de los módulos del sistema debo recompilar el kernel con los módulos modificados.

90. ¿Cuál de los siguientes es un servidor web?

    - (x) Lighttpd
    - ( ) Mapache
    - ( ) Skynet
    - ( ) midnight-commander

91. Las siglas LAMP hacen referencia a:

    - ( ) Ninguna de las anteriores
    - (x) Linux + Apache + MySQL + PHP
    - ( ) Linux + Apache + Mystic + Perl
    - ( ) Linux + Apache + MySQL + Python

92. ¿Cuáles son soluciones de virtualización?

    - ( ) Virtualbox e hipervisor
    - ( ) Xen y VirtualPC
    - (x) vmware y VirtualBox
    - ( ) vmware e Hipervisor

93. LVM es el acrónimo de:

    - ( ) Logical Virtual Machine
    - (x) Logical Volume Manager
    - ( ) Low-cost Virtualization Mechanism
    - ( ) Local Volume Management

94. ¿Cuál de los siguientes programas no es un benchmark de sistema?

    - ( ) ab
    - ( ) phoronix
    - (x) sysctl
    - ( ) aida64

95. ¿Qué significan las siglas JFS del sistema de ficheros empleado en prácticas?

    - ( ) Jam Format Session
    - ( ) Java File System
    - ( ) Journaled Format Structure
    - (x) Journaled File System

96. ¿Qué beneficio puede tener usar LVM?

    - ( ) Permite instalar un gestor de arranque
    - ( ) Ninguna de las anteriores
    - (x) Modificación dinámica de particiones
    - ( ) Aumenta las prestaciones del sistema de archivos

97. ¿Qué es Tomcat?

    - ( ) Un servidor MySQL en Java
    - ( ) Un servidor PHP
    - (x) Un servidor de aplicaciones web
    - ( ) Un servidor de ASP

98. ¿Qué herramienta de gestión de paquetes está disponible en Centos?

    - (x) yum
    - ( ) Lynx
    - ( ) apt
    - ( ) wget

99. Sobre la utilidad ab (Apache Benchmark)

    - ( ) Se emplea para generar test de carga http
    - ( ) Se instala junto con el servidor web apache httpd
    - (x) Todo lo anterior es cierto
    - ( ) Su uso no está limitado al servidor web apache httpd

100. ¿Qué comando emplearía en Linux para revisar los mensajes que ha generado el SO durante su arranque?

    - ( ) boot
    - (x) dmesg
    - ( ) htop
    - ( ) top

101. ¿Qué es cierto para Nagios?

    - ( ) Presenta una interfaz centralizada sobre el estado de toda la infraestructura monitorizada
    - (x) Todo lo anterior es cierto
    - ( ) Es una herramienta para monitorizar recursos de servidores como: memoria, uso de cpu.
    - ( ) Permite detectar caídas de servicios como http o ssh

102. En Munin ¿es posible mostrar gráficas en función del tiempo?

    - ( ) Sí, pero solo en tiempo real.
    - ( ) Sí, se pueden mostrar en función de horas, min y segs.
    - (x) Sí, se pueden mostrar en función de días, semanas, meses y años.
    - ( ) Sí, pero hay que activar la opción en el menú Graphics -> Main Handlers -> Display Options

103. ¿Qué aporta ssh respecto a Telnet?

    - ( ) Telnet sólo se ejecuta en Windows
    - ( ) Telnet es de pago
    - (x) ssh va encriptado
    - ( ) ssh permite manejar un ordenador de forma remota

104. ¿Qué puerto es el usado por defecto por los servidores web y debe ser abierto en el firewall para permitir su acceso público?

    - ( ) 8080
    - ( ) 88
    - (x) 80
    - ( ) 8888

105. ¿Qué archivo hay que consultar para ver quien se ha autorizado como su en Debian/Ubuntu?

    - ( ) /etc/authentication.log
    - ( ) /var/log/login.log
    - ( ) /var/user/login.log
    - (x) /var/log/auth.log

106. ¿Qué es un Servlet?

    - ( ) Un archivo PHP compilado
    - ( ) Un servidor de web services
    - (x) Un objeto Java que proporciona páginas web dinámicas
    - ( ) Un servidor web que proporciona datos heterogéneos

107. ¿Cuál es la diferencia entre top y htop?

    - ( ) No hay diferencias, ya que la "h" es muda.
    - ( ) htop no es un comando válido
    - ( ) top esta arriba
    - (x) Ninguna de las anteriores

108. ¿Qué comando emplearía para establecer una conexión cifrada con un equipo remoto?

    - ( ) rcp
    - ( ) sshd
    - (x) ssh
    - ( ) telnet

109. ¿Cuál es el tamaño por defecto a partir del cual IIS empieza a comprimir las páginas?

    - (x) 256 bytes
    - ( ) 1 byte
    - ( ) 1 mbyte
    - ( ) 1000 bytes

110. ¿Cuál es la ruta principal del archivo de configuración de logrotate en la mayoría de los sistemas Linux?

    - (x) /etc/logrotate.conf
    - ( ) /var/log/logrotate.conf
    - ( ) /usr/local/etc/logrotate.conf
    - ( ) /etc/logrotate.d/

111. ¿Cuál es la ruta del archivo de configuración principal y global de `cron` (system-wide crontab) en la mayoría de los sistemas Linux?

    - (x) /etc/crontab
    - ( ) /var/spool/cron/crontabs/
    - ( ) /etc/cron.allow
    - ( ) /usr/bin/crontab

112. Al configurar un RAID por software en Linux, ¿cuál es un paso crucial que generalmente precede al montaje del dispositivo RAID (por ejemplo, /dev/md0) en el sistema de archivos?

    - (x) Crear un sistema de archivos en el dispositivo RAID.
    - ( ) Añadir el dispositivo RAID directamente a /etc/fstab sin formatear.
    - ( ) Reiniciar el servidor inmediatamente después de crear el array.
    - ( ) Ejecutar fsck en los discos físicos individuales.

113. Considerando el entorno completo (nodo de control y nodos gestionados), ¿qué se necesita fundamentalmente para ejecutar playbooks de Ansible y que estos operen sobre los nodos gestionados?

    - ( ) Solo SSH.
    - ( ) SSH y Python.
    - (x) SSH, Python y Ansible.
    - ( ) Ninguna es correcta.
