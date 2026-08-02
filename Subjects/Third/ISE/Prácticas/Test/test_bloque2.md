# Test Bloque 2

* **Autor:** Ismael Sallami Moreno
* **Titulación:** Doble Grado en Ingeniería Informática y ADE

1. ¿Cuál es la principal diferencia entre una máquina virtual (VM) y un contenedor Docker?

    - ( ) Las VMs son más ligeras que los contenedores.
    - ( ) Los contenedores virtualizan el hardware y las VMs el sistema operativo.
    - (x) Los contenedores comparten el kernel del SO anfitrión, mientras que cada VM tiene su propio SO guest completo.
    - ( ) Docker no permite el aislamiento de procesos, las VMs sí.

2. ¿Qué herramienta se utiliza para definir y ejecutar aplicaciones Docker de múltiples contenedores mediante un archivo YAML?

    - ( ) Dockerfile
    - ( ) Docker Swarm
    - (x) Docker Compose
    - ( ) Kubernetes

3. ¿Cuál es el comando de Docker para ejecutar una imagen llamada "hello-world"?

    - ( ) docker build hello-world
    - ( ) docker start hello-world
    - ( ) docker pull hello-world
    - (x) docker run hello-world

4. ¿Qué es un "benchmark" en el contexto de la ingeniería de servidores?

    - ( ) Un tipo de sistema de ficheros optimizado para rendimiento.
    - (x) Una prueba diseñada para medir el rendimiento de un sistema, componente o servicio.
    - ( ) Un protocolo de red para la transferencia rápida de datos.
    - ( ) Una herramienta de monitorización en tiempo real.

5. ¿Para qué sirve la herramienta Apache Benchmark (`ab`)?

    - ( ) Para realizar pruebas de carga y rendimiento sobre servidores DNS.
    - ( ) Para monitorizar el uso de CPU y memoria de un servidor Apache.
    - (x) Para mostrar cuántas peticiones por segundo es capaz de servir un servidor HTTP.
    - ( ) Para compilar y desplegar aplicaciones web en servidores Apache.

6. Apache JMeter es una aplicación diseñada principalmente para:

    - ( ) Gestionar logs del sistema.
    - (x) Probar la carga funcional y medir el rendimiento de diversos servicios.
    - ( ) Automatizar la configuración de servidores mediante playbooks.
    - ( ) Visualizar métricas de sistemas en dashboards.

7. En Docker, ¿qué es un `Dockerfile`?

    - ( ) Un contenedor en ejecución.
    - (x) Un archivo de texto que contiene todos los comandos necesarios para construir una imagen de Docker.
    - ( ) Un repositorio de imágenes Docker en la nube.
    - ( ) La configuración de red para un grupo de contenedores.

8. ¿Qué herramienta de monitorización clásica en Linux presenta una interfaz de texto para ver procesos y uso de recursos en tiempo real?

    - ( ) Grafana
    - ( ) Prometheus
    - (x) top (o htop)
    - ( ) JMeter

9. ¿Para qué se utiliza `cron` en un sistema Linux?

    - ( ) Para gestionar la memoria virtual del sistema.
    - (x) Para programar la ejecución de tareas periódicas de administración o mantenimiento.
    - ( ) Para monitorizar el tráfico de red en tiempo real.
    - ( ) Para compilar código fuente de aplicaciones.

10. ¿Cuál es la función principal de Prometheus en una pila de monitorización?

    - ( ) Visualizar los datos de telemetría en dashboards interactivos.
    - (x) Extraer (scraping), almacenar y gestionar información de monitorización como series temporales.
    - ( ) Generar carga de trabajo para pruebas de estrés.
    - ( ) Gestionar la rotación de archivos de logs del sistema.

11. ¿Qué herramienta se utiliza comúnmente junto con Prometheus para la visualización de métricas y la creación de dashboards?

    - ( ) JMeter
    - ( ) Docker Compose
    - (x) Grafana
    - ( ) Nagios

12. En el contexto de Docker, ¿qué significa `EXPOSE 3000` en un Dockerfile?

    - ( ) Mapea el puerto 3000 del contenedor al puerto 3000 del host.
    - ( ) Instala una aplicación que escucha en el puerto 3000.
    - (x) Informa a Docker que el contenedor escucha en el puerto 3000, pero no lo publica automáticamente.
    - ( ) Abre el puerto 3000 en el firewall del host.

13. ¿Qué es el "load average" que muestra el comando `top`?

    - ( ) La cantidad de memoria RAM utilizada por los procesos.
    - ( ) El porcentaje de tiempo que la CPU está inactiva.
    - (x) Un promedio de la carga del sistema (procesos en ejecución o esperando CPU) en los últimos 1, 5 y 15 minutos.
    - ( ) La velocidad de transferencia de datos de la red.

14. ¿Cuál es el propósito de `logrotate`?

    - ( ) Analizar el contenido de los archivos de log en busca de errores.
    - (x) Gestionar los archivos de log, rotándolos, comprimiéndolos y eliminando los antiguos para evitar que ocupen demasiado espacio.
    - ( ) Enviar notificaciones por correo electrónico cuando se generan logs críticos.
    - ( ) Escribir logs en un formato binario seguro.

15. ¿Qué comando se utiliza para consultar los logs del sistema gestionados por `systemd-journald`?

    - ( ) cat /var/log/messages
    - ( ) logread
    - (x) journalctl
    - ( ) dmesg

16. En JMeter, ¿qué es un "Thread Group" (Grupo de Hilos)?

    - ( ) Un conjunto de configuraciones por defecto para las peticiones HTTP.
    - (x) Un elemento que define el número de usuarios virtuales (hilos), el período de subida (ramp-up) y el número de iteraciones.
    - ( ) Un componente para visualizar los resultados de las pruebas en forma de árbol.
    - ( ) Un post-procesador para extraer datos de las respuestas.

17. ¿Qué es un "Exporter" en el contexto de Prometheus?

    - ( ) Una consulta escrita en PromQL para obtener métricas.
    - (x) Un software que expone métricas de un sistema o aplicación en un formato que Prometheus puede recolectar (scrape).
    - ( ) Un tipo de dashboard predefinido en Grafana.
    - ( ) La base de datos donde Prometheus almacena las series temporales.

18. La arquitectura de Microservicios implica:

    - ( ) Una única aplicación monolítica desplegada en varios servidores.
    - (x) Descomponer una aplicación en un conjunto de pequeños servicios independientes que se comunican mediante APIs.
    - ( ) Usar exclusivamente máquinas virtuales para cada componente de la aplicación.
    - ( ) Escribir toda la aplicación en un único lenguaje de programación para mayor cohesión.

19. ¿Qué ventaja ofrece Podman sobre Docker según se menciona en el temario?

    - ( ) Es más fácil de instalar en Windows.
    - (x) Permite ejecutar contenedores sin necesidad de un servicio demonio (daemonless) y con mejor soporte para rootless containers.
    - ( ) Tiene una interfaz gráfica de usuario integrada más avanzada (Docker Desktop).
    - ( ) Es la única herramienta compatible con Docker Compose.

20. En Grafana, al configurar Prometheus como "Datasource", ¿qué URL se utiliza si Grafana y Prometheus corren como servicios en el mismo `docker-compose.yml`?

    - ( ) http://localhost:9090
    - ( ) La IP pública del servidor anfitrión seguida del puerto de Prometheus.
    - (x) http://prometheus:9090 (usando el nombre del servicio definido en docker-compose.yml).
    - ( ) Se debe usar la IP interna del contenedor de Prometheus.

21. ¿Qué comando se utiliza para listar todas las imágenes Docker descargadas localmente?

    - ( ) docker ps -a
    - (x) docker images
    - ( ) docker list images
    - ( ) docker search

22. En un `docker-compose.yml`, ¿qué especifica la sección `ports: - "8080:80"` para un servicio?

    - ( ) Expone el puerto 8080 del contenedor al exterior.
    - (x) Mapea el puerto 80 del contenedor al puerto 8080 del host.
    - ( ) Mapea el puerto 8080 del contenedor al puerto 80 del host.
    - ( ) Indica que el servicio internamente usa los puertos 80 y 8080.

23. Phoronix Test Suite (PTS) es una plataforma para:

    - ( ) Desarrollar aplicaciones web interactivas.
    - (x) Gestionar y ejecutar un conjunto de benchmarks de rendimiento.
    - ( ) Monitorizar la seguridad de los contenedores Docker.
    - ( ) Automatizar el despliegue de microservicios.

24. En JMeter, ¿qué elemento se utiliza para simular que un usuario realiza una petición HTTP a un servidor?

    - ( ) Listener
    - ( ) Timer
    - (x) HTTP Request Sampler
    - ( ) Assertion

25. ¿Qué tipo de información se encuentra típicamente en `/proc/meminfo` en un sistema Linux?

    - ( ) Información detallada sobre los procesos en ejecución.
    - (x) Estadísticas sobre el uso de la memoria RAM y swap del sistema.
    - ( ) Configuración de las interfaces de red.
    - ( ) Logs de errores del kernel.

26. ¿Cuál es el propósito principal de Grafana en una pila de monitorización con Prometheus?

    - ( ) Recolectar las métricas directamente de los servicios (scraping).
    - ( ) Almacenar a largo plazo las series temporales de métricas.
    - (x) Proporcionar servicios de visualización (dashboards, paneles) y alertas sobre los datos de telemetría recolectados por Prometheus.
    - ( ) Definir los `exporters` para cada servicio a monitorizar.

27. En Prometheus, ¿qué es un `job_name` dentro de `scrape_configs` en el archivo `prometheus.yml`?

    - ( ) El nombre del dashboard de Grafana donde se mostrarán las métricas.
    - (x) Un identificador para un conjunto de `targets` (objetivos de scraping) que comparten una configuración común.
    - ( ) El tipo de métrica que se va a recolectar (counter, gauge, histogram).
    - ( ) El comando para iniciar el servicio de Prometheus.

28. ¿Qué comando se utiliza para editar el archivo crontab del usuario actual?

    - ( ) cron -e
    - ( ) crontab -l
    - (x) crontab -e
    - ( ) editcron

29. ¿Cuál es una de las principales ventajas de `htop` sobre `top`?

    - ( ) Consume menos recursos del sistema.
    - (x) Ofrece una interfaz de texto más interactiva y visualmente mejorada, con scroll y selección de procesos más fácil.
    - ( ) Solo muestra información de los procesos del usuario actual.
    - ( ) No requiere privilegios de superusuario para ejecutarse.

30. ¿Qué tipo de métrica de Prometheus es `http_requests_total` típicamente?

    - ( ) Gauge
    - ( ) Histogram
    - ( ) Summary
    - (x) Counter

31. En JMeter, si deseas extraer un valor de una respuesta JSON (por ejemplo, un token JWT), ¿qué tipo de Post-Procesador podrías usar?

    - ( ) CSV Data Set Config
    - ( ) HTTP Header Manager
    - (x) JSON Extractor o Regular Expression Extractor
    - ( ) Gaussian Random Timer

32. ¿Qué representa `scrape_interval: 5s` en la configuración global de `prometheus.yml`?

    - ( ) Prometheus almacena las métricas durante 5 segundos antes de descartarlas.
    - ( ) Grafana actualiza sus dashboards cada 5 segundos.
    - (x) Prometheus recolectará métricas de sus `targets` cada 5 segundos por defecto.
    - ( ) Las alertas de Prometheus se evaluarán cada 5 segundos.

33. ¿Cuál es una de las funciones de `docker compose up -d`?

    - ( ) Construye las imágenes pero no inicia los contenedores.
    - ( ) Inicia los servicios definidos en `docker-compose.yml` en primer plano mostrando los logs.
    - (x) Inicia los servicios definidos en `docker-compose.yml` en segundo plano (detached mode).
    - ( ) Detiene y elimina los contenedores, redes y volúmenes.

34. ¿Qué información se espera encontrar en el directorio `/var/log` de un sistema Linux?

    - ( ) Archivos de configuración del sistema.
    - ( ) Archivos binarios de los programas instalados.
    - (x) Archivos de registro (logs) del sistema operativo y de las aplicaciones.
    - ( ) Archivos temporales creados por los usuarios.

35. La función `rate(http_requests_total[5m])` en PromQL calcula:

    - ( ) El número total de peticiones HTTP en los últimos 5 minutos.
    - (x) La tasa de cambio promedio por segundo de un contador de peticiones HTTP en los últimos 5 minutos.
    - ( ) El tiempo promedio de respuesta de las peticiones HTTP en los últimos 5 minutos.
    - ( ) El percentil 95 de la duración de las peticiones HTTP en los últimos 5 minutos.

36. En la estructura de JMeter, bajo "Login Administradores", ¿qué parámetros se envían en la petición HTTP POST?

    - ( ) token y jwt
    - ( ) username y token
    - (x) login y password (con valores como ${login} y ${password})
    - ( ) auth_user y auth_pass

37. Para importar un dashboard predefinido en Grafana desde Grafana.com/dashboards, ¿qué se suele necesitar?

    - ( ) La URL completa del dashboard.
    - (x) El ID del dashboard o el archivo JSON del mismo.
    - ( ) Las credenciales del autor del dashboard.
    - ( ) Una suscripción de pago a Grafana Cloud.

38. El "Node Exporter" de Prometheus se utiliza para:

    - ( ) Exportar los dashboards de Grafana a formato JSON.
    - (x) Exponer métricas del hardware y del sistema operativo de un nodo Linux (CPU, memoria, disco, red).
    - ( ) Monitorizar aplicaciones específicas escritas en NodeJS.
    - ( ) Gestionar los nodos en un clúster de Kubernetes.

39. En el `docker-compose.yml` para Grafana y Prometheus, `depends_on: - prometheus` en la definición del servicio Grafana significa:

    - ( ) Que Grafana enviará sus métricas a Prometheus.
    - (x) Que Docker Compose iniciará el servicio Prometheus antes que el servicio Grafana.
    - ( ) Que Grafana y Prometheus deben usar la misma imagen base de Docker.
    - ( ) Que Prometheus depende de Grafana para su visualización.

40. ¿Qué es "stress" en el contexto de las pruebas de rendimiento en Linux?

    - ( ) Un tipo de configuración de firewall para alta carga.
    - (x) Una herramienta para generar carga artificial en componentes del sistema como CPU, memoria o E/S.
    - ( ) Un algoritmo de compresión de logs.
    - ( ) Una métrica específica que Prometheus recolecta por defecto.

41. En un Dockerfile, ¿qué instrucción se utiliza para especificar la imagen base a partir de la cual se construirá la nueva imagen?

    - ( ) COPY
    - ( ) RUN
    - (x) FROM
    - ( ) CMD

42. ¿Cuál es el propósito de la directiva `volumes` en un archivo `docker-compose.yml` al definir un servicio como Prometheus o Grafana, según el ejemplo del temario?

    - ( ) Especificar el tamaño máximo del disco que puede usar el contenedor.
    - (x) Mapear directorios o archivos del host a directorios dentro del contenedor para persistencia de datos o configuración.
    - ( ) Definir las redes a las que se conectará el contenedor.
    - ( ) Limitar el número de volúmenes que el contenedor puede crear.

43. ¿Qué herramienta se menciona en el temario para ejecutar benchmarks que está disponible como imagen Docker (phoronix/pts)?

    - ( ) Apache JMeter
    - ( ) Apache Benchmark (ab)
    - (x) Phoronix Test Suite
    - ( ) Sysbench

44. En JMeter, ¿para qué se utiliza un "CSV Data Set Config"?

    - ( ) Para exportar los resultados de la prueba a un archivo CSV.
    - (x) Para leer datos de un archivo CSV y utilizarlos como variables en las peticiones (ej. credenciales de usuario).
    - ( ) Para configurar el formato de los logs de JMeter.
    - ( ) Para generar gráficos a partir de datos CSV externos.

45. El comando `journalctl -f` en Linux se utiliza para:

    - ( ) Formatear el journal de systemd.
    - (x) Mostrar las entradas del journal de systemd en tiempo real (seguir el log).
    - ( ) Filtrar el journal por un servicio específico.
    - ( ) Exportar todo el journal a un archivo.

46. Al configurar Grafana con Prometheus, ¿qué se define como "Datasource"?

    - ( ) El archivo de configuración de Grafana.
    - ( ) Un panel específico dentro de un dashboard.
    - (x) La instancia de Prometheus de donde Grafana obtendrá los datos para visualizar.
    - ( ) El tipo de alerta que se configurará.

47. ¿Qué es PromQL?

    - ( ) Un lenguaje de scripting para automatizar tareas en Grafana.
    - (x) El lenguaje de consulta funcional de Prometheus utilizado para seleccionar y agregar datos de series temporales.
    - ( ) Un formato de archivo para exportar dashboards de Grafana.
    - ( ) Una biblioteca de Python para interactuar con la API de Prometheus.

48. En un archivo crontab, la expresión `*/5 * * * * /ruta/a/mi/script.sh` significa:

    - ( ) Ejecutar el script a las 5 de la mañana todos los días.
    - (x) Ejecutar el script cada 5 minutos.
    - ( ) Ejecutar el script el día 5 de cada mes.
    - ( ) Ejecutar el script 5 veces cada hora.

49. ¿Qué información muestra la columna `%CPU` en la salida del comando `top`?

    - ( ) El porcentaje de memoria RAM utilizada por el proceso.
    - ( ) La prioridad del proceso en la CPU.
    - (x) El porcentaje de tiempo de CPU utilizado por el proceso desde la última actualización.
    - ( ) El tiempo total de CPU que el proceso ha consumido desde que inició.

50. Si Prometheus no puede acceder a un `target` para hacer `scraping`, ¿qué estado mostrará típicamente para ese `target` en su interfaz web?

    - ( ) ACTIVE
    - ( ) UP
    - (x) DOWN
    - ( ) PENDING

51. En JMeter, ¿qué elemento se utiliza para manejar las credenciales de autenticación básica HTTP de forma global en el plan de pruebas?

    - ( ) Gaussian Random Timer
    - ( ) HTTP Request (dentro de Login Alumnos)
    - (x) HTTP Basic Auth (probablemente un HTTP Authorization Manager)
    - ( ) View Results Tree

52. La persistencia de datos en Grafana (dashboards, configuraciones) cuando se ejecuta en Docker se logra típicamente mediante:

    - ( ) La opción `SAVE_STATE=true` en el comando `docker run`.
    - (x) El uso de volúmenes Docker para mapear `/var/lib/grafana` del contenedor a un directorio en el host.
    - ( ) La configuración de `scrape_interval` en Prometheus.
    - ( ) Almacenando toda la configuración en el archivo `prometheus.yml`.

53. ¿Cuál es el propósito de un "Listener" como "View Results Tree" en JMeter?

    - ( ) Generar la carga de peticiones HTTP.
    - (x) Mostrar los resultados de las peticiones ejecutadas, incluyendo detalles de la petición y la respuesta.
    - ( ) Definir variables de usuario para el plan de pruebas.
    - ( ) Pausar la ejecución entre peticiones para simular el pensamiento del usuario.

54. En el archivo `docker-compose.yml` de ejemplo para Prometheus y Grafana, ¿qué puerto del host se mapea al puerto 3000 del contenedor Grafana?

    - ( ) 9090
    - ( ) 3000
    - (x) 4000
    - ( ) No se mapea, se accede directamente al 3000 del contenedor.

55. Al monitorizar un servidor Linux con Node Exporter y Prometheus, ¿qué tipo de información se puede visualizar en Grafana?

    - ( ) Únicamente el estado de los servicios SSHD y Apache.
    - ( ) Solo el contenido de los archivos de log del sistema.
    - (x) Métricas de uso de CPU, memoria, disco, red, carga del sistema y estado de servicios (si se configuran colectores adicionales).
    - ( ) La estructura de los playbooks de Ansible ejecutados en el servidor.

56. ¿Qué permite hacer la opción "Export for sharing externally" al compartir un dashboard en Grafana?

    - ( ) Enviar el dashboard por correo electrónico directamente desde Grafana.
    - (x) Generar un archivo JSON que contiene la definición del dashboard para poder importarlo en otra instancia de Grafana.
    - ( ) Publicar el dashboard en una URL pública accesible por cualquiera.
    - ( ) Crear una copia de seguridad del dashboard en la base de datos de Prometheus.

57. Si en JMeter se utiliza un "HTTP Authorization Manager" para configurar la autenticación básica, ¿qué información se suele proporcionar?

    - (x) La URL base, un nombre de usuario y una contraseña.
    - ( ) Solo un token JWT.
    - ( ) El path al archivo CSV con las credenciales.
    - ( ) Los certificados SSL del cliente y del servidor.

58. ¿Cuál es una ventaja de ejecutar Phoronix Test Suite dentro de un contenedor Docker, según el temario?

    - ( ) Permite modificar directamente el kernel del sistema anfitrión para optimizar los benchmarks.
    - ( ) Garantiza que los benchmarks se ejecuten más rápido que en la máquina local.
    - (x) Proporciona un entorno limpio, preconfigurado y aislado, mitigando problemas de dependencias o configuraciones locales.
    - ( ) No requiere conexión a internet para descargar los tests.

59. En el archivo `prometheus.yml`, la sección `static_configs` dentro de un `job_name` se utiliza para:

    - ( ) Definir dinámicamente los targets usando descubrimiento de servicios.
    - (x) Listar manualmente las direcciones y puertos de los `targets` que Prometheus debe monitorear.
    - ( ) Especificar las reglas de alerta para ese job.
    - ( ) Indicar el intervalo de scraping específico para ese job.

60. Para monitorizar el estado de servicios como SSHD y Apache Httpd (Activo/Inactivo) en Grafana usando Node Exporter, ¿qué métrica de Node Exporter (con el colector systemd habilitado) podría ser útil?

    - ( ) node_cpu_seconds_total
    - ( ) node_filesystem_avail_bytes
    - (x) node_systemd_unit_state (con labels como `name` y `state`)
    - ( ) process_cpu_seconds_total

61. ¿Qué comando de Docker se utiliza para detener un contenedor en ejecución sin eliminarlo?

    - ( ) docker rm [nombre_contenedor]
    - (x) docker stop [nombre_contenedor]
    - ( ) docker pause [nombre_contenedor]
    - ( ) docker kill [nombre_contenedor]

62. En el contexto del `docker-compose.yml` para la aplicación de JMeter, la directiva `build: ./nodejs` para el servicio `nodejs` significa:

    - ( ) Que se usará una imagen preexistente llamada `./nodejs` de Docker Hub.
    - (x) Que se debe construir una imagen para este servicio utilizando el Dockerfile que se encuentra en el directorio `./nodejs`.
    - ( ) Que el código fuente de la aplicación Node.js se encuentra en el directorio `./nodejs` del host.
    - ( ) Que se debe ejecutar el script `./nodejs` al iniciar el contenedor.

63. Según el temario, ¿cuál es una de las ventajas de la arquitectura de microservicios relacionada con la tecnología?

    - ( ) Reduce la complejidad de la comunicación entre servicios.
    - ( ) Obliga a usar el mismo lenguaje de programación para todos los servicios.
    - (x) Permite que cada servicio pueda utilizar su propio stack tecnológico, adaptándose mejor a sus necesidades específicas.
    - ( ) Simplifica la gestión de bases de datos monolíticas.

64. En JMeter, ¿qué función cumple un "HTTP Cookie Manager"?

    - ( ) Genera cookies aleatorias para cada petición.
    - (x) Almacena y envía cookies como lo haría un navegador web, permitiendo gestionar sesiones.
    - ( ) Elimina todas las cookies de las respuestas del servidor.
    - ( ) Valida que las cookies recibidas tengan el formato correcto.

65. ¿Qué indica el valor `wa` (I/O wait) en la línea de uso de CPU del comando `top`?

    - ( ) El porcentaje de CPU utilizado por procesos de usuario.
    - ( ) El porcentaje de CPU inactiva.
    - (x) El porcentaje de tiempo que la CPU estuvo esperando a que se completaran operaciones de entrada/salida.
    - ( ) El porcentaje de CPU consumido por procesos del kernel.

66. ¿Cuál es el puerto por defecto en el que Prometheus expone su propia interfaz web y métricas?

    - ( ) 3000
    - ( ) 8080
    - (x) 9090
    - ( ) 9100

67. Al importar un dashboard en Grafana usando un ID, ¿de dónde se obtiene típicamente ese dashboard?

    - ( ) Del sistema de archivos local.
    - (x) Del repositorio oficial de Grafana (Grafana.com/dashboards).
    - ( ) De la configuración de Prometheus.
    - ( ) Se genera automáticamente basado en los datasources.

68. ¿Qué utilidad tiene el comando `logger` en el contexto de un script de `cron`?

    - ( ) Rotar los archivos de log generados por cron.
    - (x) Enviar mensajes desde el script al log del sistema (syslog o journal).
    - ( ) Limpiar el contenido de los logs de cron.
    - ( ) Mostrar en tiempo real los logs de las tareas cron.

69. El sistema de ficheros `/proc` en Linux es:

    - ( ) Un directorio en disco que almacena permanentemente los procesos del sistema.
    - (x) Un sistema de ficheros virtual que proporciona información en tiempo real sobre el kernel y los procesos en ejecución.
    - ( ) El directorio donde se guardan las configuraciones de los programas.
    - ( ) Una partición de swap utilizada por el sistema.

70. ¿Qué tipo de métrica de Prometheus es adecuada para representar valores que pueden subir y bajar, como la temperatura actual o la memoria en uso?

    - ( ) Counter
    - (x) Gauge
    - ( ) Histogram
    - ( ) Summary

71. En JMeter un "JWT Token" obtenido tras el login se utiliza probablemente en peticiones subsiguientes dentro de un:

    - ( ) CSV Data Set Config.
    - (x) HTTP Header Manager (como cabecera `Authorization: Bearer ${TOKEN}`).
    - ( ) User Defined Variables, directamente en la URL.
    - ( ) Response Assertion.

72. Al ejecutar `docker compose down`, ¿qué sucede con los contenedores definidos en el archivo `docker-compose.yml`?

    - ( ) Solo se pausan, manteniendo su estado.
    - (x) Se detienen y se eliminan, junto con las redes creadas por defecto (a menos que se especifique lo contrario con opciones).
    - ( ) Se reinician y se actualizan a la última imagen disponible.
    - ( ) Se guardan como nuevas imágenes en el repositorio local.

73. ¿Cuál es el propósito principal de un "Panel" en un dashboard de Grafana?

    - ( ) Definir la conexión a una fuente de datos como Prometheus.
    - ( ) Agrupar varios dashboards relacionados.
    - (x) Visualizar una o más métricas específicas utilizando un tipo de gráfico (tabla, gráfica de líneas, gauge, etc.).
    - ( ) Configurar las reglas de alerta para todo el dashboard.

74. Si en el archivo `prometheus.yml` se define un `target` como `mi_servidor_rocky:9100`, ¿a qué puerto se conectará Prometheus en `mi_servidor_rocky` para obtener métricas del Node Exporter?

    - ( ) 9090
    - ( ) 3000
    - ( ) 80
    - (x) 9100

75. Para ejecutar una prueba de JMeter sin la interfaz gráfica, desde la línea de comandos, ¿qué opción se suele usar?

    - ( ) jmeter -g /ruta/al/plan.jmx
    - (x) jmeter -n -t /ruta/al/plan.jmx -l /ruta/al/resultados.jtl
    - ( ) jmeter --nogui --plan /ruta/al/plan.jmx
    - ( ) jmeter -cmd /ruta/al/plan.jmx

76. ¿Qué representa la métrica `nodejs_heap_size_used_bytes` en la monitorización de una API Node.js con Prometheus?

    - ( ) El tamaño total del heap de Node.js disponible en bytes.
    - ( ) El número de objetos actualmente en el heap de Node.js.
    - (x) La cantidad de memoria del heap de Node.js que está siendo utilizada actualmente en bytes.
    - ( ) El tiempo total de CPU consumido por el proceso Node.js.

77. ¿Cuál es uno de los objetivos de monitorizar los "Tiempos de respuesta de los endpoints de la API" (ej: `http_request_duration_seconds_bucket`)?

    - ( ) Contar el número total de errores 404.
    - (x) Identificar cuellos de botella y medir la latencia experimentada por los usuarios de la API.
    - ( ) Verificar la cantidad de datos transferidos por cada endpoint.
    - ( ) Determinar el uso de CPU específico de cada endpoint.

78. ¿Qué tecnología subyacente del kernel de Linux utilizan los contenedores para aislar los sistemas de archivos y los procesos?

    - ( ) Hipervisores de tipo 2.
    - ( ) SELinux y AppArmor exclusivamente.
    - (x) Namespaces y Cgroups.
    - ( ) Systemd timers y sockets.

79. Al configurar una alarma en Grafana para el uso de CPU, si la condición es "cuando la media del uso de CPU supere el 75% durante 5 minutos", ¿qué implica el "durante 5 minutos"?

    - ( ) La alarma se silenciará durante 5 minutos después de dispararse.
    - (x) La condición debe cumplirse de forma sostenida durante un período de 5 minutos para que la alarma se active.
    - ( ) Grafana solo evaluará esta regla de alerta cada 5 minutos.
    - ( ) La gráfica mostrará los datos de los últimos 5 minutos únicamente cuando la alarma esté activa.

80. ¿Cuál de estas herramientas NO se menciona en el temario del Bloque 2 como una solución de monitorización o pruebas de carga?

    - ( ) Munin
    - ( ) Nagios
    - (x) Wireshark
    - ( ) Zabbix

81. ¿Qué información específica NO suele estar directamente en el archivo `/proc/cpuinfo`?

    - ( ) Modelo del procesador y velocidad de reloj.
    - ( ) Número de núcleos y threads.
    - ( ) Tamaño de las cachés L1, L2, L3.
    - (x) El uso actual de CPU de cada proceso.

82. En el contexto de Docker, ¿qué es una "imagen"?

    - ( ) Un contenedor en ejecución con una aplicación activa.
    - (x) Una plantilla de solo lectura con instrucciones para crear un contenedor Docker (incluye la aplicación y sus dependencias).
    - ( ) El archivo `docker-compose.yml`.
    - ( ) Un volumen de datos persistente utilizado por un contenedor.

83. ¿Qué tipo de "Sampler" en JMeter se usaría para realizar una petición a una base de datos mediante JDBC?

    - ( ) HTTP Request Sampler
    - ( ) FTP Request Sampler
    - (x) JDBC Request Sampler
    - ( ) TCP Sampler

84. ¿Cuál de las siguientes es una característica de la pila ELK (Elasticsearch, Logstash, Kibana)?

    - ( ) Está principalmente enfocada en la simulación de carga de trabajo.
    - ( ) Es una solución para la gestión de contenedores alternativa a Docker.
    - (x) Permite recolectar, indexar, buscar y visualizar grandes volúmenes de logs y datos.
    - ( ) Es un sistema de gestión de configuración como Ansible o Chef.

85. En el archivo `prometheus.yml`, ¿qué especifica la directiva `scrape_configs`?

    - ( ) La configuración de las alertas que enviará Prometheus.
    - ( ) Los dashboards por defecto que se cargarán en Grafana.
    - (x) Define los `jobs` y `targets` de los cuales Prometheus recolectará (hará scraping) métricas.
    - ( ) Las reglas de grabación para precalcular métricas complejas.

86. ¿Qué es un "Assertion" en JMeter?

    - ( ) Un elemento para introducir pausas entre peticiones.
    - ( ) Un componente que define el número de hilos para la prueba.
    - (x) Un criterio de validación que se aplica a la respuesta de un sampler para determinar si la petición fue exitosa.
    - ( ) Un extractor de datos de las respuestas.

87. La utilidad `vmstat` en Linux proporciona información sobre:

    - ( ) El estado detallado de las interfaces de red.
    - (x) Memoria virtual, procesos, E/S de bloques, interrupciones y actividad de la CPU.
    - ( ) Los usuarios actualmente conectados y sus actividades.
    - ( ) El espacio libre en los sistemas de archivos montados.

88. Al definir un servicio en `docker-compose.yml` con `image: mongo:6`, Docker Compose:

    - ( ) Intentará construir una imagen desde un Dockerfile local llamado `mongo:6`.
    - (x) Buscará y descargará la imagen `mongo` con la etiqueta `6` desde Docker Hub (o el registro configurado) si no está localmente.
    - ( ) Creará un volumen llamado `mongo` con un tamaño de 6GB.
    - ( ) Ejecutará 6 instancias del contenedor mongo.

89. ¿Qué indica el estado "zombie" de un proceso en la salida de `top`?

    - ( ) Un proceso que está consumiendo el 100% de la CPU.
    - ( ) Un proceso que ha sido detenido por el usuario.
    - (x) Un proceso que ha terminado su ejecución pero su entrada aún existe en la tabla de procesos, esperando a que el proceso padre recoja su estado de salida.
    - ( ) Un proceso que está bloqueado esperando una operación de E/S.

90. El comando `docker exec -it [nombre_contenedor] sh` permite:

    - ( ) Exportar la configuración del contenedor a un archivo `sh`.
    - ( ) Ver los logs del contenedor en formato shell.
    - (x) Abrir una sesión de shell interactiva dentro de un contenedor que ya está en ejecución.
    - ( ) Ejecutar un script `sh` que se encuentra en el host dentro del contenedor.

91. ¿Cuál es una de las principales ventajas de usar `docker-compose` para una aplicación con múltiples servicios (ej. app web + base de datos)?

    - ( ) Reduce el tamaño de las imágenes Docker de cada servicio.
    - (x) Permite definir y gestionar la configuración, redes y dependencias entre múltiples contenedores con un solo archivo y comando.
    - ( ) Elimina la necesidad de tener Docker Engine instalado.
    - ( ) Ofrece una interfaz gráfica para monitorizar los servicios.

92. En el contexto de Grafana, ¿qué es un "dashboard"?

    - ( ) Una única consulta PromQL.
    - ( ) La configuración de una fuente de datos.
    - (x) Una colección de uno o más paneles organizados y mostrados juntos para visualizar datos.
    - ( ) El servidor donde se almacenan las métricas de Prometheus.

93. Para que Prometheus pueda recolectar métricas de un servicio (ej. Node Exporter), el servicio debe:

    - ( ) Estar escrito en el lenguaje Go.
    - (x) Exponer sus métricas en un endpoint HTTP en un formato compatible (generalmente texto plano).
    - ( ) Enviar sus métricas directamente a la base de datos de Prometheus mediante un push.
    - ( ) Tener un agente de Grafana instalado.

94. Si un `docker-compose.yml` define dos servicios, `webapp` y `database`, y `webapp` tiene `links: - database`, esto permite que:

    - (x) El contenedor `webapp` pueda acceder al contenedor `database` usando el hostname `database`.
    - ( ) Ambos contenedores compartan el mismo sistema de archivos.
    - ( ) Se cree una copia del contenedor `database` dentro del contenedor `webapp`.
    - ( ) El servicio `database` se inicie siempre después que `webapp`.

95. ¿Qué representa la opción `-n` en el comando `ab -n 1000 -c 100 http://example.com/`?

    - ( ) El número de segundos que durará la prueba.
    - ( ) El número de conexiones concurrentes a realizar.
    - (x) El número total de peticiones a realizar durante la prueba.
    - ( ) El tamaño del payload de cada petición en Kilobytes.

96. El archivo `~/.ssh/known_hosts` en un cliente SSH se utiliza para:

    - ( ) Almacenar la clave privada del cliente.
    - (x) Almacenar las claves públicas de los servidores a los que el cliente se ha conectado y ha confiado, para evitar advertencias de "man-in-the-middle".
    - ( ) Configurar opciones específicas para diferentes hosts SSH.
    - ( ) Guardar las contraseñas de los servidores SSH.

97. ¿Qué es el "scraping" en el contexto de Prometheus?

    - ( ) El proceso de eliminar métricas antiguas de la base de datos.
    - (x) La acción de Prometheus de solicitar y recolectar métricas desde los endpoints HTTP expuestos por los `targets`.
    - ( ) La visualización de datos en Grafana.
    - ( ) La generación de alertas basadas en umbrales.

98. En JMeter, elementos como "Login Alumnos", "Obtener JWT Token" y "Recuperar datos alumnos" están organizados bajo un elemento padre llamado "Alumnos". Este elemento "Alumnos" es probablemente un:

    - ( ) HTTP Request Defaults
    - (x) Thread Group
    - ( ) Logic Controller (como un Simple Controller)
    - ( ) Listener

99. ¿Cuál es la función de la directiva `CMD ["npm", "start"]` en un Dockerfile para una aplicación Node.js?

    - ( ) Instala las dependencias del proyecto Node.js durante la construcción de la imagen.
    - (x) Especifica el comando por defecto que se ejecutará cuando se inicie un contenedor a partir de la imagen.
    - ( ) Copia el código fuente de la aplicación Node.js a la imagen.
    - ( ) Define variables de entorno para la aplicación Node.js.

100. Si en Grafana se observa que un panel que muestra métricas de Prometheus no actualiza datos o muestra "N/A", una posible causa NO sería:

    - ( ) El servicio Prometheus está caído o inaccesible para Grafana.
    - ( ) El `target` (exporter) del que Prometheus debería obtener las métricas está caído.
    - ( ) La consulta PromQL en el panel de Grafana es incorrecta o no devuelve datos.
    - (x) El `scrape_interval` de Prometheus es demasiado corto (ej. 1s).

101. El comando `sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin` instala Docker Engine y varios componentes. ¿Cuál es la implicación principal de incluir paquetes como `docker-buildx-plugin` y `docker-compose-plugin` en esta instalación?

    - ( ) Asegura la compatibilidad con versiones anteriores de Docker únicamente.
    - (x) Proporciona funcionalidades extendidas directamente integradas con la CLI de Docker, como la capacidad de construir imágenes para múltiples arquitecturas y gestionar aplicaciones multicontenedor sin instalar `docker-compose` como un binario separado.
    - ( ) Son dependencias mínimas necesarias solo para que `containerd.io` funcione correctamente.
    - ( ) Habilita un modo de alta seguridad para el Docker Engine (`docker-ce`).

102. La arquitectura de microservicios permite que cada servicio utilice su propio stack tecnológico. Si bien esto ofrece gran flexibilidad, ¿cuál de los siguientes escenarios describe mejor una consecuencia directa y a menudo desafiante de esta característica en un entorno de producción complejo?

    - ( ) Una reducción significativa en la necesidad de herramientas de monitorización centralizadas.
    - ( ) La estandarización forzada de los protocolos de comunicación entre servicios.
    - (x) Un incremento en la complejidad operativa para la gestión, el versionado y el mantenimiento de la compatibilidad entre múltiples stacks tecnológicos heterogéneos.
    - ( ) Una simplificación automática del proceso de despliegue continuo (CI/CD).

103. Respecto a la escalabilidad en microservicios, ¿cuál de las siguientes afirmaciones distingue más sutilmente la escalabilidad horizontal de la vertical, más allá de la simple definición?

    - ( ) La escalabilidad vertical siempre es más costosa que la horizontal.
    - (x) La escalabilidad horizontal (añadir instancias) puede introducir mayor complejidad en la gestión del estado y la consistencia de datos entre instancias, a diferencia de la vertical (mejorar recursos de una instancia) que no la introduce en la misma medida.
    - ( ) La escalabilidad horizontal se limita al número de núcleos físicos del servidor.
    - ( ) Solo la escalabilidad vertical se beneficia del uso de contenedores.

104. Un benchmark, como NameBench para DNS, está diseñado para medir el rendimiento. ¿Cuál es el valor fundamental de ejecutar un benchmark específico para un componente (DNS) en lugar de un benchmark general del sistema?

    - ( ) Los benchmarks específicos son siempre más rápidos de ejecutar.
    - (x) Permite aislar y evaluar métricas de rendimiento directamente relevantes para la función de ese componente particular, ofreciendo resultados más accionables para su optimización.
    - ( ) Garantiza que el componente no afectará el rendimiento de otros servicios.
    - ( ) Elimina la necesidad de monitorizar el consumo de recursos del sistema.

105. Phoronix Test Suite (PTS) se integra con OpenBenchmarking para comparar resultados. ¿Qué ventaja estratégica principal ofrece esta integración a un usuario que evalúa el rendimiento de un nuevo hardware o configuración?

    - ( ) Asegura que los tests de PTS se ejecuten más rápido en el sistema local.
    - (x) Permite contextualizar los resultados propios comparándolos con una amplia base de datos de resultados de otros sistemas y configuraciones, facilitando una evaluación relativa del rendimiento.
    - ( ) Garantiza la validez de los resultados de PTS para cualquier tipo de carga de trabajo.
    - ( ) Simplifica la instalación de PTS en contenedores Docker.

106. El comando Apache Benchmark (ab) `ab -n 100 -c 10 http://localhost/` realiza 100 peticiones con una concurrencia de 10. Si se incrementara significativamente solo el valor de `-c` (concurrencia) manteniendo `-n` constante, ¿qué aspecto del rendimiento del servidor se estaría poniendo a prueba de forma más intensiva?

    - ( ) La velocidad máxima de procesamiento de una única petición secuencial.
    - (x) La capacidad del servidor para manejar múltiples conexiones y peticiones simultáneas y la gestión de sus recursos bajo dicha carga (ej. hilos, memoria).
    - ( ) La eficiencia de la caché del navegador del cliente.
    - ( ) El ancho de banda de la red entre el cliente y el servidor para transferir grandes volúmenes de datos.

107. La instalación de Apache Benchmark (ab) en sistemas basados en Debian/Ubuntu se realiza comúnmente con `sudo apt install apache2-utils -y`. ¿Qué indica el uso de `apache2-utils` en lugar de un paquete llamado, por ejemplo, `ab-standalone`?

    - ( ) `ab` solo funciona si el servidor web Apache completo está instalado en la misma máquina.
    - ( ) `apache2-utils` es un metapaquete que también instala otros servidores web como Nginx.
    - (x) `ab` se distribuye como parte de un conjunto de herramientas y utilidades asociadas con el servidor Apache, aunque `ab` pueda usarse para probar cualquier servidor HTTP.
    - ( ) Es la única forma de obtener la versión más reciente de `ab`.

108. Al realizar un benchmark comparativo entre Apache y Nginx usando Apache Benchmark (`ab`) con el objetivo de "elevar significativamente la carga", ¿cuál de las siguientes estrategias de parametrización de `ab` sería MENOS efectiva para revelar diferencias fundamentales en cómo ambos servidores manejan la concurrencia y el consumo de recursos bajo estrés?

    - (x) Un número muy bajo de peticiones totales (`-n`) con una concurrencia también muy baja (`-c`).
    - ( ) Incrementar progresivamente la concurrencia (`-c`) mientras se mantiene un número alto de peticiones (`-n`) y se observa el punto de degradación del rendimiento.
    - ( ) Utilizar la opción `-k` (KeepAlive) para simular un comportamiento de cliente más realista y evaluar el manejo de conexiones persistentes.
    - ( ) Realizar pruebas con diferentes tamaños de documentos solicitados para observar el impacto en el throughput y el uso de memoria.

109. Al interpretar los resultados de Apache Benchmark (`ab`) al comparar dos servidores HTTP, si el "Time per request (mean, across all concurrent requests)" es significativamente menor para el Servidor A que para el Servidor B con alta concurrencia, ¿qué indicaría esto primordialmente?

    - ( ) El Servidor A tiene una conexión de red más rápida, independientemente de su capacidad de procesamiento.
    - (x) El Servidor A es más eficiente gestionando un gran número de solicitudes simultáneas, resultando en menor tiempo de espera promedio por petición bajo carga.
    - ( ) El Servidor B está sirviendo contenido dinámico mientras que el Servidor A sirve contenido estático.
    - ( ) El Servidor A tiene un límite de "keep-alive timeout" más corto.

110. El comando `./jmeter -n -t /ruta/archivo.jmx -l /ruta/archivo_resultados.jtl` ejecuta JMeter en modo no-GUI. ¿Cuál es una ventaja CRUCIAL de este modo de ejecución para pruebas de carga de alto volumen en comparación con el modo GUI?

    - ( ) Permite la modificación interactiva del plan de pruebas mientras se ejecuta la carga.
    - (x) El modo no-GUI consume significativamente menos recursos (CPU y memoria) en la máquina que genera la carga, permitiendo simular un mayor número de usuarios virtuales y obtener resultados más precisos al no interferir la GUI con la prueba.
    - ( ) Genera informes gráficos más detallados directamente en el archivo JTL.
    - ( ) Es el único modo que soporta la ejecución de scripts Groovy en JMeter.

111. El sistema de archivos `/proc` en Linux es una fuente crítica de información dinámica del sistema. Si un script necesita obtener el tiempo exacto que el sistema lleva encendido desde el último arranque, ¿qué característica de `/proc/uptime` es más relevante para esta tarea?

    - ( ) Su contenido se actualiza solo durante el proceso de arranque.
    - ( ) Proporciona una marca de tiempo del último apagado del sistema.
    - (x) Contiene dos valores numéricos: el tiempo total que el sistema ha estado encendido y el tiempo que ha estado inactivo, ambos en segundos y actualizados en tiempo real por el kernel.
    - ( ) Es un archivo de registro que acumula los tiempos de actividad de cada sesión de usuario.

112. ¿Cuál de los siguientes ficheros dentro del sistema de archivos `/proc` sería el más directo y apropiado para analizar la distribución y el uso actual de la memoria RAM y swap del sistema, incluyendo detalles como memoria total, libre, buffers y caché?

    - ( ) `/proc/stat`
    - ( ) `/proc/cpuinfo`
    - ( ) `/proc/loadavg`
    - (x) `/proc/meminfo`

113. Un administrador configura una tarea cron con la entrada `1 * * * * * /opt/scripts/monitor.sh`. Si la intención es registrar la carga del sistema, ¿cuál sería el efecto más notable de esta configuración específica en los logs generados por `monitor.sh` usando `logger -t ISE`, asumiendo que el script se ejecuta instantáneamente?

    - ( ) Un log cada hora, al primer segundo.
    - (x) Un log cada minuto, al segundo 1.
    - ( ) El script no se ejecutaría por sintaxis errónea en cron.
    - ( ) Múltiples logs por minuto, uno por segundo, pudiendo saturar los logs.

114. Al intentar depurar un problema ocurrido durante el penúltimo arranque (no el actual, sino el anterior a ese), un técnico necesita ver únicamente los mensajes con nivel de prioridad `crit` o superior. ¿Cuál de los siguientes comandos `journalctl` es el más preciso y eficiente para esta tarea específica?

    - (x) `journalctl -b -2 -p crit`
    - ( ) `journalctl -p crit --since "2 days ago"`
    - ( ) `journalctl -b -1 -p err | grep 'crit\|alert\|emerg'`
    - ( ) `journalctl -b --list-boots | tail -n 3 | head -n 1 | xargs journalctl -b ID -p crit` (asumiendo ID es el identificador)

115. El script programado con cron debe generar un mensaje con el formato "<SusIniciales>: <Fecha y hora actual>– <Carga actual del Sistema>". Si, tras configurar el cronjob, no aparecen logs con la etiqueta "ISE" mediante `journalctl -t ISE`, pero el administrador confirma que el script tiene permisos de ejecución y la ruta en crontab es correcta, ¿cuál podría ser una causa plausible relacionada directamente con la interacción entre el script y `logger` o el entorno de cron?

    - ( ) El servicio `systemd-journald` está inactivo.
    - (x) La utilidad `logger` no está en el PATH del entorno de ejecución de cron.
    - ( ) El script no puede obtener la carga del sistema y termina prematuramente sin llamar a logger.
    - ( ) El directorio `/var/log` no tiene espacio disponible, impidiendo la escritura de nuevos logs.

116. Si se ejecuta el comando `journalctl -b -p warning` y, entre los resultados, se observa un mensaje con nivel de prioridad `emerg`, ¿qué implicación directa se deriva de la funcionalidad de `journalctl` según la información proporcionada?

    - ( ) `journalctl` ha filtrado incorrectamente, mostrando más de lo pedido.
    - ( ) El sistema está inestable y solo muestra mensajes `emerg`.
    - (x) La opción `-p warning` incluye niveles de mayor gravedad que warning.
    - ( ) Es necesario usar `journalctl -b -p emerg` para ver solo emergencias.

117. Un script programado en el crontab del usuario para ejecutarse cada minuto (`* * * * * /home/user/script.sh`) tiene como objetivo registrar la carga del sistema usando `logger -t ISE "Carga: $(uptime)"`. El script tiene permisos de ejecución. Si no aparecen logs con la etiqueta "ISE" en `journalctl -t ISE`, pero otros logs del sistema sí se registran correctamente, ¿cuál de las siguientes es una causa raíz probable y específica del problema con este cron job?

    - (x) El comando `uptime` no está disponible en el PATH mínimo que usa cron para ejecutar los scripts.
    - ( ) La partición `/var/log` está completamente llena, impidiendo nuevos registros en el journal.
    - ( ) El servicio `crond` no está activo o no se ha reiniciado tras añadir la tarea.
    - ( ) `systemd-journald` está filtrando los mensajes de `logger` con la etiqueta ISE por una regla específica.

118. Sabiendo que `journalctl -p warning` muestra mensajes de prioridad `warning, err, crit, alert, emerg`, ¿cómo se consultarian los logs del arranque actual para ver mensajes que sean `err` o `crit`, pero excluyendo explícitamente los de nivel `warning` y también los más graves como `alert` o `emerg`?

    - (x) `journalctl -b -p err..crit`
    - ( ) `journalctl -b -p warning | grep -E 'err|crit'`
    - ( ) `journalctl -b -p crit -p err --grep-invert-level=warning --grep-invert-level=alert --grep-invert-level=emerg`
    - ( ) No es posible con una sola invocación de `journalctl` sin post-procesamiento.

119. El script para cron debe generar un log con el formato "<SusIniciales>: <Fecha y hora actual>– <Carga actual del Sistema>". Si el log generado solo muestra "<SusIniciales>: <Fecha y hora actual>– " y la parte de la carga del sistema está ausente, asumiendo que `logger` se invoca correctamente con todas las partes concatenadas, ¿cuál es el fallo más probable dentro del script?

    - ( ) La variable de entorno para las iniciales no está definida en el entorno de cron.
    - (x) El comando para obtener la carga del sistema (e.g., `uptime` o similar) está fallando o devolviendo una cadena vacía.
    - ( ) La utilidad `logger` tiene un límite en la longitud del mensaje que se está excediendo.
    - ( ) El comando para obtener la fecha y hora actual está configurado en un formato incorrecto.

120. Un administrador necesita revisar los logs de todos los arranques registrados, excepto el actual, para buscar mensajes con prioridad `alert`. Antes de ejecutar cualquier comando `journalctl`, verifica el estado de `systemd-journald` y lo encuentra "active (running)". ¿Cuál sería la aproximación más directa y adecuada con `journalctl` para esta tarea, considerando que podrían existir múltiples arranques anteriores?

    - (x) `journalctl --list-boots | grep -v " 0 " | awk '{print $1}' | xargs -I{} journalctl -b {} -p alert`
    - ( ) `journalctl -b -1 -p alert && journalctl -b -2 -p alert && ...` (repitiendo para cada arranque)
    - ( ) Iterar con un script sobre `journalctl -b -k -p alert` donde k va desde 1 hasta el número de arranques.
    - ( ) `journalctl -p alert --boot=-1 --boot=-2 --boot=-3` (y así sucesivamente para los arranques necesarios).

121. Durante la configuración manual de `node_exporter` en un servidor Rocky Linux, tras mover el binario a `/usr/local/bin/` y crear un servicio systemd, este falla al iniciar. Un análisis posterior revela que SELinux está denegando la ejecución. Según la problemática descrita en la documentación, ¿cuál es la solución específica mencionada para resolver este conflicto con SELinux?

    - ( ) Desactivar SELinux temporalmente usando `setenforce 0`.
    - (x) Corregir el contexto de seguridad SELinux del binario `node_exporter` al tipo `bin_t`.
    - ( ) Añadir una regla a SELinux para permitir la ejecución de cualquier binario en `/usr/local/bin/`.
    - ( ) Recompilar `node_exporter` con soporte para políticas SELinux personalizadas.

122. En la configuración de `docker-compose.yml` proporcionada para desplegar Prometheus y Grafana, el servicio de Grafana expone un puerto al host y depende de Prometheus. ¿Qué par de puertos (`HOST:CONTAINER`) se utiliza para Grafana y cuál es la implicación principal de la directiva `depends_on: - prometheus`?

    - ( ) Grafana usa `3000:4000`, y `depends_on` asegura que Grafana siempre tenga más recursos asignados.
    - ( ) Grafana usa `9090:9090`, y `depends_on` configura Prometheus para que envíe datos a Grafana.
    - (x) Grafana usa `4000:3000`, y `depends_on` indica que el contenedor de Grafana se iniciará después de que el de Prometheus haya comenzado.
    - ( ) Grafana usa `4000:3000`, y `depends_on` establece un enlace de red directo para la comunicación exclusiva entre ellos.

123. El archivo `prometheus.yml` define una configuración global y un trabajo de scraping. Si el `scrape_interval` global es de `5s` y el único `job_name` es `"prometheus_service"` que apunta a `"prometheus:9090"`, ¿qué significa esto para la recolección de métricas del propio Prometheus?

    - (x) Prometheus intentará recolectar sus propias métricas cada 5 segundos desde el puerto 9090 del contenedor llamado "prometheus".
    - ( ) Prometheus solo recolectará métricas de otros servicios, no de sí mismo, a menos que se añada un job específico.
    - ( ) El intervalo de `5s` se aplica a todos los jobs excepto a `"prometheus_service"`, que usará un valor por defecto.
    - ( ) Las métricas de `"prometheus_service"` se recolectarán, pero no se almacenarán debido a que es un target interno.

124. Para la monitorización de una API WEB, se requiere crear un panel que muestre la relación entre la memoria heap total de NodeJS y la memoria heap usada. ¿Cuáles son las dos métricas específicas de `prom-client` mencionadas en la documentación que se utilizarían para construir este panel?

    - ( ) `process_resident_memory_bytes` y `nodejs_external_memory_bytes`.
    - ( ) `nodejs_heap_space_size_available_bytes` y `nodejs_heap_size_used_bytes`.
    - (x) `nodejs_heap_size_total_bytes` y `nodejs_heap_size_used_bytes`.
    - ( ) `http_request_duration_seconds_bucket` y `process_cpu_seconds_total`.

125. Al configurar volúmenes persistentes para Prometheus y Grafana en Docker, la documentación menciona la necesidad de ejecutar comandos para evitar problemas de permisos. Para el directorio de datos de Grafana (`./grafana_data`), ¿qué UID/GID específico se utiliza en el comando `sudo chown -R` y qué permisos se establecen con `sudo chmod -R`?

    - ( ) `chown` a `root:root` y `chmod` a `777` para máxima compatibilidad.
    - (x) `chown` a `472:472` y `chmod` a `755`.
    - ( ) `chown` a `65534:65534` (nobody:nogroup) y `chmod` a `700`.
    - ( ) `chown` al usuario actual y `chmod` a `644` para mayor seguridad.

126. Al configurar Grafana por primera vez, se indica que se accede con credenciales por defecto y luego se cambian. Posteriormente, para que Grafana pueda obtener datos de Prometheus (asumiendo que ambos corren en contenedores Docker en la misma red), ¿cuál es la URL HTTP que típicamente se configura en Grafana para el Data Source de Prometheus, según lo ilustrado en la documentación?

    - ( ) `http://localhost:9090`
    - ( ) `http://prometheus_service:9090`
    - (x) `http://prometheus:9090`
    - ( ) La IP del contenedor de Prometheus seguida del puerto 9090.

127. Un estudiante intenta monitorizar el estado del servicio SSH (`sshd.service`) usando `node_exporter` y Grafana, pero el panel no muestra los datos correctos. La documentación sugiere una solución específica que implica modificar la configuración de `node_exporter`. ¿Cuál es esta modificación clave para que `node_exporter` exponga correctamente las métricas de los servicios de systemd?

    - (x) Añadir `--collector.systemd` a la línea de ejecución de `node_exporter.service`.
    - ( ) Crear un nuevo scraper en `prometheus.yml` para el puerto específico del colector systemd.
    - ( ) Instalar un plugin adicional en Grafana para interpretar las métricas de systemd.
    - ( ) Modificar los permisos del socket de systemd para permitir el acceso a `node_exporter`.

128. Para crear una alerta en Grafana que se dispare cuando el uso promedio de CPU supere el 75% durante 5 minutos, se utiliza una consulta PromQL y se configura una regla de alerta. Basándose en la configuración de alerta descrita (Query A, Condition B, y Alert evaluation behavior), ¿cuál es la combinación correcta de la condición y el comportamiento de evaluación de la alerta?

    - ( ) Condición: `WHEN last() OF A IS ABOVE 75`. Evaluación: `Evaluate every 5m for 1m`.
    - ( ) Condición: `WHEN avg() OF A IS ABOVE 0.75`. Evaluación: `Evaluate every 1m for 5m`.
    - (x) Condición: `WHEN last() OF A IS ABOVE 75`. Evaluación: `Evaluate every 1m for 5m`.
    - ( ) Condición: `WHEN count() OF A > 75 FOR 5m`. Evaluación: `Evaluate every minute`.

129. La consulta PromQL proporcionada para calcular el "Uso Total CPU (%)" en un panel de Grafana es `(1 - avg by (instance) (rate(node_cpu_seconds_total{job="rocky_linux_server",mode="idle"}[5m]))) * 100`. ¿Qué representa específicamente la parte `rate(node_cpu_seconds_total{...mode="idle"}[5m])` en este contexto?

    - ( ) El número total de segundos que la CPU ha estado inactiva desde el último reinicio del servidor.
    - (x) La fracción promedio de tiempo por segundo, durante los últimos 5 minutos, que la CPU estuvo en modo inactivo.
    - ( ) El porcentaje de uso de CPU en modo "idle" acumulado en los últimos 5 minutos.
    - ( ) La cantidad de ciclos de CPU consumidos por procesos inactivos en un intervalo de 5 minutos.

130. La documentación indica que para los volúmenes de datos de Docker, como `./prometheus_data`, se ejecuta `sudo chown -R 65534:65534 ./prometheus_data`. ¿Cuál es la razón técnica más probable para utilizar el UID/GID `65534:65534` en este contexto específico?

    - ( ) Es el UID/GID estándar para todos los servicios que se ejecutan en contenedores Docker.
    - (x) Corresponde al usuario y grupo 'nobody' o al usuario interno con el que el proceso de Prometheus se ejecuta dentro del contenedor, para asegurar permisos de escritura.
    - ( ) Este UID/GID otorga permisos de solo lectura, mejorando la seguridad del volumen de datos.
    - ( ) Facilita la compartición de este volumen entre múltiples contenedores sin conflictos de permisos.

131. Si el colector `systemd` de `node_exporter` no se habilita explícitamente (es decir, no se añade `--collector.systemd` a sus argumentos de inicio), ¿cuál sería el resultado más probable al intentar ejecutar la consulta PromQL `node_systemd_unit_state{name="sshd.service"}` en Prometheus?

    - ( ) La consulta devolvería un valor de '0' o 'unknown' por defecto para el estado del servicio.
    - ( ) Prometheus generaría un error de sintaxis en la consulta porque la métrica es opcional.
    - (x) No se encontrarían series temporales para la métrica `node_systemd_unit_state`, resultando en una respuesta vacía o un error de "no data".
    - ( ) `node_exporter` expondría la métrica, pero con valores predeterminados indicando que el colector no está configurado.

132. En la configuración de una regla de alerta en Grafana para el uso de CPU, se establece "Evaluate every `1m`" y "for `5m`". ¿Cuál es la diferencia fundamental en el comportamiento de la alerta si el parámetro "for `5m`" se omitiera o se estableciera en "for `0m`"?

    - ( ) Sin "for `5m`", la alerta se dispararía cada minuto si la condición es verdadera, en lugar de una vez cada cinco minutos.
    - (x) La alerta se dispararía inmediatamente en la primera evaluación donde la condición sea verdadera, sin requerir que la condición persista durante 5 minutos.
    - ( ) Omitir "for `5m`" haría que la alerta solo se compruebe una vez cada 5 minutos, en lugar de cada minuto.
    - ( ) La severidad de la alerta cambiaría de crítica a advertencia si "for `5m`" no está presente.

133. La métrica `node_cpu_seconds_total` de `node_exporter` es un contador que registra el tiempo de CPU acumulado en diferentes modos (idle, user, system, etc.). En la consulta PromQL para el uso de CPU: `(1 - avg by (instance) (rate(node_cpu_seconds_total{job="rocky_linux_server",mode="idle"}[5m]))) * 100`, ¿cuál es el propósito principal de la función `avg by (instance)`?

    - ( ) Calcular el promedio de uso de CPU entre todas las instancias monitorizadas por Prometheus.
    - (x) Asegurar que el resultado se muestre como un promedio si hay múltiples cores de CPU en la misma instancia, preservando la etiqueta 'instance'.
    - ( ) Convertir la tasa de segundos a un valor promediado en el tiempo para suavizar picos instantáneos.
    - ( ) Seleccionar solo la instancia con la carga de CPU promedio más alta para la visualización.

134. En el archivo `docker-compose.yml`, el servicio de Prometheus tiene una sección `command` con el argumento `--config.file=/etc/prometheus/prometheus.yml`. ¿Cuál es la implicación principal de este comando para el contenedor de Prometheus?

    - ( ) Permite que Prometheus genere un archivo de configuración por defecto en `/etc/prometheus/prometheus.yml` si no existe.
    - (x) Indica al proceso de Prometheus dentro del contenedor que utilice el archivo mapeado desde el host (`./prometheus.yml`) como su fichero de configuración principal.
    - ( ) Valida la sintaxis del archivo `/etc/prometheus/prometheus.yml` antes de iniciar el servicio completo.
    - ( ) Establece un modo de solo lectura para el archivo de configuración para prevenir cambios accidentales desde el contenedor.

135. La configuración de Grafana en `docker-compose.yml` incluye `ports: - "4000:3000"`. ¿Cuál es el propósito y efecto de este mapeo de puertos específico?

    - ( ) Permite que Grafana dentro del contenedor escuche en el puerto 4000 y se comunique con Prometheus en el puerto 3000 del host.
    - ( ) Redirige el tráfico del puerto 3000 del host al puerto 4000 del contenedor de Grafana para la interfaz web.
    - (x) Hace que la interfaz web de Grafana, que escucha en el puerto 3000 dentro del contenedor, sea accesible en el puerto 4000 del host.
    - ( ) Limita el acceso a Grafana únicamente a través del puerto 4000, mientras que el 3000 se reserva para la API interna.

136. Si se desea que Prometheus monitoree una instancia de `node_exporter` que se ejecuta en el host de Docker (o en otro contenedor accesible en la red Docker como 'node-exporter-host:9100'), ¿cómo se modificaría principalmente el archivo `prometheus.yml` para añadir este nuevo objetivo de scraping?

    - ( ) Añadiendo una nueva entrada `global.scrape_targets` con la dirección del `node_exporter`.
    - (x) Creando un nuevo job dentro de `scrape_configs` con un `static_configs` que apunte a `targets: ["node-exporter-host:9100"]`.
    - ( ) Modificando el job existente `"prometheus_service"` para incluir también `"node-exporter-host:9100"` en sus targets.
    - ( ) Configurando una regla de reetiquetado (relabel_configs) para descubrir automáticamente todos los exporters.

137. La métrica `http_request_duration_seconds_bucket` se menciona para la monitorización de tiempos de respuesta de una API WEB. ¿Qué tipo de información fundamental proporciona esta métrica de tipo histograma para el análisis del rendimiento?

    - ( ) El número total de solicitudes HTTP que han excedido un umbral de tiempo específico.
    - ( ) La duración exacta de la última solicitud HTTP procesada por la API.
    - (x) La distribución de las duraciones de las solicitudes en cubos (buckets) predefinidos, permitiendo calcular percentiles (e.g., p95, p99).
    - ( ) Un promedio móvil de los tiempos de respuesta de todos los endpoints de la API durante el último intervalo de scrape.

138. En el contexto del ejercicio de monitorización del servidor Linux, se menciona el uso de la herramienta `stress` para "poner de manifiesto el funcionamiento de la alarma" asociada al uso de CPU. ¿Cuál es el propósito general de utilizar `stress` en este escenario?

    - ( ) Verificar la correcta instalación y configuración de Prometheus y Grafana.
    - (x) Generar una carga artificial y controlada en el sistema (CPU, memoria, I/O) para simular condiciones de alta demanda.
    - ( ) Optimizar automáticamente la configuración de la alarma de CPU en Grafana.
    - ( ) Probar la conectividad de red entre el servidor monitorizado y el sistema de monitorización.

139. En el archivo `docker-compose.yml`, el servicio `grafana` tiene la directiva `depends_on: - prometheus`. Además de influir en el orden de inicio de los contenedores, ¿qué otra facilidad importante proporciona esta directiva en el contexto de una red Docker Compose por defecto?

    - ( ) Garantiza que el contenedor de Grafana siempre tenga mayor prioridad de CPU que el de Prometheus.
    - (x) Permite que el contenedor de Grafana resuelva el nombre de host 'prometheus' a la dirección IP interna del contenedor de Prometheus.
    - ( ) Crea automáticamente un volumen compartido entre Grafana y Prometheus para el intercambio de datos de configuración.
    - ( ) Sincroniza automáticamente los relojes de los contenedores de Grafana y Prometheus para la consistencia de las series temporales.

140. La consulta PromQL para el uso de CPU es `(1 - avg by (instance) (rate(node_cpu_seconds_total{job="rocky_linux_server",mode="idle"}[5m]))) * 100`. Si se eliminara el filtro `mode="idle"`, resultando en `rate(node_cpu_seconds_total{job="rocky_linux_server"}[5m])`, ¿qué representaría esta parte modificada de la consulta?

    - (x) La tasa de incremento de todos los modos de CPU combinados, lo que podría equivaler al número de cores si el sistema está completamente ocupado.
    - ( ) Un error de consulta, ya que `node_cpu_seconds_total` siempre requiere un filtro de `mode`.
    - ( ) El porcentaje de tiempo de CPU total no utilizado, ya que el modo "idle" es el predominante.
    - ( ) La tasa de uso de CPU exclusivamente por procesos de usuario, excluyendo system e idle.

141. Si después de instalar `node_exporter` en `/usr/local/bin/` y configurar su servicio systemd, este falla consistentemente al iniciar y los logs del sistema (journal) indican errores de "permission denied" relacionados con la ejecución del binario, a pesar de que el archivo tiene permisos de ejecución (e.g. 755), ¿cuál de las siguientes problemáticas, discutida en la documentación, sería la causa más directa y probable en un sistema como Rocky Linux?

    - ( ) El firewall del sistema está bloqueando la ejecución de nuevos servicios.
    - (x) Una política de SELinux está impidiendo que el proceso `node_exporter` se ejecute debido a un contexto de seguridad incorrecto en el archivo binario.
    - ( ) El usuario bajo el cual systemd intenta ejecutar el servicio `node_exporter` no tiene permisos de lectura en `/usr/local/bin/`.
    - ( ) Falta de dependencias o librerías requeridas por el binario de `node_exporter` en el sistema.

142. Al definir una alerta en Grafana, como la "Alerta CPU Alta (ISM)", se incluye un campo "Summary". ¿Cuál es la función principal de este campo en el ciclo de vida de una alerta?

    - ( ) Contiene la consulta PromQL exacta que Grafana evalúa para la condición de alerta.
    - (x) Es un texto descriptivo corto que se utiliza en las notificaciones y en la interfaz de usuario de Grafana para identificar y resumir rápidamente el propósito de la alerta.
    - ( ) Define las etiquetas (labels) que se adjuntarán a la alerta para su enrutamiento hacia diferentes canales de notificación.
    - ( ) Especifica el umbral numérico y la duración que deben cumplirse para que la alerta cambie a estado "Firing".

143. La métrica `node_cpu_seconds_total` es fundamental para calcular el uso de CPU. Dado que es un contador (counter) que solo aumenta, ¿por qué es esencial aplicar la función `rate()` (o similar como `irate()`) a esta métrica en PromQL antes de intentar calcular un porcentaje de uso?

    - ( ) `rate()` convierte los segundos acumulados en un valor porcentual directamente.
    - (x) Calcula la tasa de incremento por segundo de los segundos de CPU durante un intervalo de tiempo, lo que refleja la actividad actual en lugar del valor acumulado total.
    - ( ) `rate()` normaliza los valores de diferentes CPUs o cores para que puedan ser comparados equitativamente.
    - ( ) La función `rate()` es necesaria para filtrar los modos de CPU no deseados antes de la agregación.

144. En un sistema Linux que interpreta estrictamente la sintaxis cron tradicional de 5 campos (minuto, hora, día del mes, mes, día de la semana), ¿cuál sería el comportamiento de una entrada crontab como `1 * * * * * /ruta/script.sh` que, según la documentación inicial, pretendía una ejecución específica?

    - ( ) El script se ejecutaría cada segundo del primer minuto de cada hora.
    - (x) La línea sería rechazada como inválida por el demonio cron debido al exceso de campos.
    - ( ) Se ejecutaría una vez al día, al primer minuto de la medianoche.
    - ( ) Se ejecutaría cada minuto de cada hora, ignorando el primer campo '1'.

145. Para investigar problemas con un servicio específico (por ejemplo, `nginx.service`) durante el arranque actual, utilizando `journalctl`, ¿qué comando filtraría los mensajes de log para esta unidad específica, mostrando solo aquellos con una prioridad de 'error' o más grave?

    - (x) `journalctl -b -u nginx.service -p err`
    - ( ) `journalctl --system-unit nginx.service --priority=error`
    - ( ) `journalctl -b _SYSTEMD_UNIT=nginx.service PRIORITY=3`
    - ( ) `cat /var/log/syslog | grep nginx | grep error`

146. El script de cron debe generar un mensaje de log incluyendo la "<Carga actual del Sistema>". ¿Cuál de los siguientes ficheros del sistema de archivos `/proc` proporcionaría directamente los valores de la media de carga (load average) que comúnmente se usan para este propósito?

    - ( ) `/proc/stat`
    - ( ) `/proc/cpuinfo`
    - (x) `/proc/loadavg`
    - ( ) `/proc/meminfo`

147. Al instalar `node_exporter`, se descarga un archivo `.tar.gz`. Si un usuario intenta descomprimir este archivo directamente en `/usr/local/src` usando `tar -xvzf node_exporter.tar.gz -C /usr/local/src` sin `sudo`, ¿cuál es el resultado más probable si el usuario no tiene permisos de escritura en `/usr/local/src`?

    - ( ) `tar` creará el directorio en el home del usuario y extraerá los archivos allí.
    - (x) Se producirá un error de "Permiso denegado" y la extracción fallará.
    - ( ) Los archivos se extraerán, pero con propietario `nobody`.
    - ( ) `tar` solicitará interactivamente la contraseña de superusuario.

148. Si un servicio como `node_exporter` falla al iniciar debido a una denegación de SELinux, y cambiar el contexto del binario a `bin_t` no resuelve el problema, ¿cuál de las siguientes acciones sería un paso lógico de diagnóstico adicional para entender la causa raíz según las prácticas comunes de SELinux?

    - ( ) Reinstalar el servicio desde un repositorio oficial que maneje SELinux.
    - ( ) Desactivar SELinux permanentemente editando `/etc/selinux/config`.
    - (x) Consultar el log de auditoría de SELinux (`/var/log/audit/audit.log` o usando `ausearch`) para mensajes de denegación detallados (AVC).
    - ( ) Ejecutar el servicio con `setenforce Permissive` y verificar si funciona para confirmar el problema.

149. En el archivo `docker-compose.yml` se especifica la imagen `prom/prometheus:v2.50.0`. Si se descubre una vulnerabilidad crítica en la versión `v2.50.0` de Prometheus, ¿cuál sería la acción más recomendable y segura a seguir, asumiendo que existe una versión parcheada como `v2.50.1`?

    - ( ) Continuar usando `v2.50.0` pero restringir el acceso a la red de Prometheus.
    - ( ) Actualizar la etiqueta de la imagen a `prom/prometheus:latest` para obtener siempre la última versión.
    - (x) Modificar la etiqueta de la imagen a la versión parcheada específica (`prom/prometheus:v2.50.1`), probar y redesplegar.
    - ( ) Deshabilitar temporalmente el servicio de Prometheus hasta que se publique una guía oficial.

150. En Docker Compose, la línea `./prometheus_data:/prometheus` en la sección de volúmenes de Prometheus establece un montaje. ¿Cuál es la diferencia principal si en lugar de `./prometheus_data` (un bind mount a una ruta del host), se utilizara un volumen nombrado gestionado por Docker, como `prometheus_volume:/prometheus`?

    - ( ) Los volúmenes nombrados no son persistentes entre reinicios del contenedor.
    - ( ) Los bind mounts son gestionados completamente por Docker y son más portables entre sistemas.
    - (x) Los volúmenes nombrados son gestionados por Docker, su ubicación en el host es controlada por Docker, y son más fáciles de respaldar y migrar usando comandos de Docker.
    - ( ) Los bind mounts ofrecen mejor rendimiento de I/O que los volúmenes nombrados.

151. El archivo `prometheus.yml` tiene una configuración `global: scrape_interval: 5s`. Si se quisiera que un job específico para `node_exporter` tuviera un intervalo de recolección de 15 segundos en lugar de 5, ¿cómo se configuraría esto para ese job en particular?

    - ( ) No es posible anular el `scrape_interval` global para jobs individuales.
    - ( ) Añadiendo `scrape_interval_override: 15s` en la sección global.
    - (x) Definiendo `scrape_interval: 15s` directamente dentro de la configuración de ese job específico en `scrape_configs`.
    - ( ) Creando un archivo `prometheus_node_exporter.yml` separado con el intervalo deseado.

152. El ejercicio de monitorización de servidor Linux pide extender el dashboard para incorporar indicadores sobre el nivel de activación ("Activo"/"Inactivo", 1/0) de los servicios SSHD y Apache Httpd. Desde una perspectiva operativa, ¿cuál es el principal beneficio de tener estos indicadores visuales en un dashboard?

    - ( ) Permite medir el rendimiento exacto y el uso de recursos de cada servicio.
    - ( ) Facilita la depuración de errores de configuración en los archivos de los servicios.
    - (x) Proporciona una visión rápida y de alto nivel sobre la disponibilidad y estado operativo de servicios críticos.
    - ( ) Ayuda a predecir futuras fallas en los servicios basados en su tiempo de actividad.

153. Para monitorizar la memoria de una aplicación NodeJS, se usan las métricas `nodejs_heap_size_total_bytes` y `nodejs_heap_size_used_bytes`. ¿Qué tipo de visualización en Grafana sería más efectiva para mostrar la relación entre estas dos métricas y el porcentaje de uso del heap?

    - ( ) Un panel de tipo "Stat" mostrando solo el valor de `nodejs_heap_size_used_bytes`.
    - (x) Un gráfico de barras apiladas o un medidor (gauge) que represente el usado como un porcentaje del total.
    - ( ) Un histograma de la distribución de `nodejs_heap_size_total_bytes`.
    - ( ) Un panel de tipo "Table" listando los valores crudos de ambas métricas a lo largo del tiempo.

154. Al configurar permisos para el volumen `./grafana_data`, la documentación especifica `sudo chmod -R 755 ./grafana_data`. ¿Cuál sería el principal riesgo de seguridad si, en lugar de `755`, se utilizara despreocupadamente `chmod -R 777 ./grafana_data` en un sistema multiusuario?

    - ( ) El contenedor de Grafana podría no tener suficientes permisos para escribir sus datos.
    - ( ) Solo el usuario root podría acceder a los datos de Grafana en el host.
    - (x) Cualquier usuario en el sistema host tendría permisos de lectura, escritura y ejecución sobre los archivos de datos de Grafana, lo que podría exponer información sensible o permitir modificaciones no autorizadas.
    - ( ) Los permisos `777` harían que el sistema de archivos se vuelva inestable.

155. Al añadir Prometheus como fuente de datos en Grafana (ambos en contenedores Docker), la configuración de la URL HTTP es `http://prometheus:9090` y el modo de Acceso (Access) suele ser "Server". ¿Por qué es preferible el modo "Server" en este escenario en lugar de "Browser"?

    - ( ) El modo "Browser" es más seguro ya que las peticiones se originan desde el cliente.
    - (x) Con "Server", el backend de Grafana realiza las peticiones a Prometheus, lo cual es necesario si Prometheus no es directamente accesible desde el navegador del usuario (e.g., está en una red Docker interna).
    - ( ) El modo "Server" permite el uso de WebSockets, mejorando el rendimiento de las consultas.
    - ( ) El modo "Browser" no soporta la autenticación con Prometheus.

156. Si se inicia `node_exporter` con los colectores `--collector.systemd` y `--collector.filesystem` habilitados, además de sus colectores por defecto, ¿qué tipo de información adicional específica del sistema se podría esperar que exponga para Prometheus?

    - ( ) Métricas detalladas sobre el rendimiento de la red y estadísticas de TCP/IP.
    - (x) Información sobre el estado de unidades systemd (servicios, timers, etc.) y estadísticas de uso de los sistemas de archivos montados (espacio total, libre, etc.).
    - ( ) Datos sobre la temperatura de la CPU, velocidad de los ventiladores y otros sensores de hardware.
    - ( ) Logs de aplicaciones y del kernel del sistema en tiempo real.

157. En la consulta PromQL `rate(node_cpu_seconds_total{...}[5m])`, el selector de rango `[5m]` especifica el intervalo de tiempo sobre el cual se calcula la tasa. ¿Cómo influye este intervalo en los puntos de datos utilizados por la función `rate`?

    - ( ) `rate` solo considera el primer y último punto de datos dentro de los últimos 5 minutos.
    - (x) Prometheus debe tener al menos dos puntos de datos dentro del rango de 5 minutos para calcular la tasa; extrapola si solo hay uno.
    - ( ) El rango de 5 minutos define cuántos puntos de datos futuros se utilizarán para predecir la tasa.
    - ( ) La función `rate` promedia todos los valores de la métrica dentro de los últimos 5 minutos.

158. La configuración de una alerta en Grafana incluye la condición principal y el parámetro "for" (ej. `for 5m`). ¿Cuál es el propósito fundamental de este parámetro "for" para mejorar la calidad de las alertas?

    - ( ) Define durante cuánto tiempo la alerta permanecerá en estado "Firing" antes de resolverse automáticamente.
    - (x) Especifica que la condición de alerta debe ser verdadera continuamente durante ese período antes de que la alerta cambie a estado "Firing", ayudando a evitar alertas por fluctuaciones breves.
    - ( ) Indica la frecuencia con la que se reenviará la notificación de alerta si no se acusa recibo.
    - ( ) Establece un retardo antes de que la regla de alerta comience a evaluarse después de guardarla.

159. ¿Cuál es la distinción clave entre "monitorización" y "alerting" en el contexto de sistemas como Prometheus y Grafana?

    - ( ) Monitorización es la visualización de datos históricos, mientras que alerting es la visualización de datos en tiempo real.
    - (x) Monitorización implica la recolección, almacenamiento y visualización de métricas del sistema, mientras que alerting es el proceso de notificar automáticamente a los responsables cuando ciertas condiciones predefinidas (basadas en esas métricas) se cumplen.
    - ( ) Alerting se refiere a la creación de dashboards, y monitorización a la configuración de los data sources.
    - ( ) Monitorización es pasiva (solo observar datos), mientras que alerting es activa (permite modificar la configuración del sistema remotamente).

160. Si un objetivo de scraping (target) configurado en `prometheus.yml`, como una instancia de `node_exporter` en `host-servidor:9100`, está inaccesible (por ejemplo, el host está apagado o el servicio `node_exporter` no se está ejecutando), ¿qué estado mostrará Prometheus para este target en su interfaz web (sección Targets)?

    - ( ) UNKNOWN - Prometheus no puede determinar el estado y esperará indefinidamente.
    - ( ) UP - Pero con un error indicando que no se pudieron recolectar métricas.
    - (x) DOWN - Junto con un mensaje de error que indica la razón del fallo (e.g., connection refused, context deadline exceeded).
    - ( ) DISABLED - Prometheus deshabilitará automáticamente el target después de varios intentos fallidos.

161. La documentación menciona que el exporter de Prometheus para la API Web se generó empleando `prom-client` y `express-prom-bundle` para NodeJS. ¿Cuál es el rol general de estas librerías en una aplicación NodeJS que necesita exponer métricas a Prometheus?

    - ( ) Analizar las métricas recolectadas por Prometheus y generar dashboards automáticamente.
    - ( ) Proporcionar un servidor Prometheus embebido dentro de la aplicación NodeJS.
    - (x) Facilitar la instrumentación del código de la aplicación para definir, registrar y exponer métricas personalizadas y estándar (como tiempos de respuesta HTTP) en el formato que Prometheus espera, típicamente a través de un endpoint `/metrics`.
    - ( ) Conectarse directamente a la base de datos de series temporales de Prometheus para escribir métricas.

162. Para la entrega de los dashboards de Grafana, se indica usar la opción "Share Dashboard or Panel" y exportar con "Export for sharing externally". ¿En qué formato se exporta típicamente la definición del dashboard mediante esta opción y cuál es su principal ventaja?

    - ( ) Formato PDF, para una fácil visualización estática y documentación.
    - (x) Formato JSON, que contiene la estructura completa del dashboard y permite su importación en otras instancias de Grafana para reproducibilidad.
    - ( ) Formato CSV, exportando los datos crudos de los paneles para análisis externo.
    - ( ) Como una imagen PNG del dashboard, para compartir una instantánea visual.

163. La utilidad `logger`, usada en el ejercicio de la tarea periódica con cron, genera mensajes de log. Si no se realiza una configuración específica para que `logger` envíe sus mensajes a `systemd-journald`, y el sistema utiliza una configuración de syslog tradicional (como rsyslog), ¿dónde se esperaría encontrar típicamente los mensajes generados por `logger` por defecto?

    - ( ) Únicamente en la salida estándar del script de cron, que se envía por correo al usuario.
    - ( ) En un archivo específico creado por `logger` en el directorio home del usuario.
    - (x) En archivos de log del sistema centralizados en `/var/log`, como `/var/log/syslog` o `/var/log/messages`, dependiendo de la configuración de syslog y la facilidad/prioridad del mensaje.
    - ( ) Directamente en el journal de systemd, ya que `logger` se integra automáticamente sin configuración.

164. En la configuración del "Regular Expression Extractor" denominado "Obtener JWT token", si el campo "Field to check" se cambia a "Response Headers" y el token JWT se encuentra en un encabezado como "Authorization: Bearer [JWT_TOKEN]", ¿cuál sería la expresión regular más precisa para capturar únicamente el JWT_TOKEN?

    - ( ) Authorization: Bearer (.+)
    - (x) (?i)Authorization: Bearer\s+([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)
    - ( ) Bearer\s(.+?)\s
    - ( ) .+

165. Observando el "Test Plan" donde se definen las variables HOST (172.17.0.1) y PORT (3000), si un "Thread Group" específico dentro de este plan define una "User Defined Variables" con la variable HOST con valor "localhost", ¿qué valor de HOST utilizará un "HTTP Request" sampler dentro de ese "Thread Group" que referencia `${HOST}`?

    - ( ) 172.17.0.1, ya que las variables del Test Plan tienen precedencia global.
    - (x) localhost, debido a la regla de alcance (scope) donde las definiciones más cercanas al elemento tienen mayor precedencia.
    - ( ) JMeter generará un error por definición duplicada de variables.
    - ( ) Se utilizará una concatenación de ambos valores: "172.17.0.1localhost".

166. En el "Gaussian Random Timer" configurado con una "Deviation" de 100.0 ms y un "Constant Delay Offset" de 300 ms, ¿cuál es la implicación principal de usar este temporizador en comparación con un "Uniform Random Timer" con un rango equivalente?

    - ( ) El Gaussian Random Timer generará pausas que siempre serán mayores que la suma del offset y la desviación.
    - (x) Las pausas generadas se agruparán más cercanamente alrededor del valor del "Constant Delay Offset", siguiendo una distribución normal (gaussiana), lo que puede simular de forma más realista el comportamiento humano.
    - ( ) Garantiza que cada pausa sea exactamente de 300ms más o menos 100ms, sin aleatoriedad.
    - ( ) El Gaussian Random Timer solo es útil para pruebas de estrés y no para pruebas de carga funcionales.

167. El "Access Log Sampler" está configurado para usar `org.apache.jmeter.protocol.http.util.accesslog.TCLogParser` y un archivo de log `datos/apiAlumnos.log`. Si el archivo de log no sigue estrictamente el formato esperado por `TCLogParser` (por ejemplo, Tomcat Combined Log Format), ¿cuál es el resultado más probable?

    - ( ) JMeter intentará adivinar el formato y podría generar algunas solicitudes correctas.
    - (x) El sampler fallará en parsear las líneas del log, no generando ninguna solicitud HTTP o generando solicitudes incorrectas, y probablemente mostrando errores en el log de JMeter.
    - ( ) JMeter convertirá automáticamente el formato del log al formato `TCLogParser`.
    - ( ) El sampler utilizará un parser por defecto si `TCLogParser` falla.

168. En la petición HTTP "Login Administradores", se envían los parámetros `login` y `password` con "Content-Type" `text/plain`. Si el servidor espera estos parámetros en el cuerpo de una solicitud POST pero con un "Content-Type" de `application/x-www-form-urlencoded` o `application/json`, ¿qué problema podría surgir?

    - ( ) Ninguno, el servidor interpretará `text/plain` como `application/x-www-form-urlencoded` por defecto.
    - (x) El servidor podría no ser capaz de parsear correctamente los parámetros, resultando en un fallo de autenticación o un error de tipo "Unsupported Media Type" (415).
    - ( ) JMeter convertirá automáticamente el Content-Type al más apropiado antes de enviar la solicitud.
    - ( ) La petición se enviará como GET en lugar de POST debido al Content-Type especificado.

169. En la configuración "CSV Data Set Config" para "Credenciales Administradores", si el archivo `datos/administradores.csv` contiene 10 líneas de datos (excluyendo la cabecera), "Recycle on EOF" es "True", y un Thread Group ejecuta 25 iteraciones usando estas credenciales, ¿qué sucederá con los valores de `login` y `password` a partir de la undécima iteración?

    - ( ) Las variables `login` y `password` quedarán vacías.
    - ( ) El hilo se detendrá ya que "Stop thread on EOF" está implícitamente activado si no se selecciona.
    - (x) JMeter comenzará a leer nuevamente desde la primera línea de datos del archivo CSV.
    - ( ) Se utilizarán los valores de la décima línea para todas las iteraciones restantes.

170. El "HTTP Authorization Manager" llamado "Autorización Básica API" está configurado con una "Base URL". Si una petición HTTP dentro de su ámbito se dirige a un subdominio o a un path diferente pero dentro del mismo HOST y PORT especificados en la "Base URL", ¿aplicará el Authorization Manager las credenciales?

    - ( ) No, la URL de la petición debe coincidir exactamente con la "Base URL".
    - (x) Sí, el Authorization Manager aplica las credenciales a cualquier URL que comience con la "Base URL" especificada, incluyendo diferentes paths o subdominios si la base lo permite.
    - ( ) Solo si la petición HTTP no define sus propias cabeceras de autorización.
    - ( ) Aplicará las credenciales, pero cambiará el mecanismo de "BASIC" a "DIGEST" automáticamente.

171. En "HTTP Request Defaults" ("Acceso API"), se especifican `${HOST}` y `${PORT}`. Si un "HTTP Request" individual dentro del mismo ámbito omite el "Server Name or IP" pero especifica un "Path" diferente al de "HTTP Request Defaults" (que está vacío), ¿cómo se construye la URL final de la petición?

    - (x) Se usará el HOST y PORT de Defaults, pero el Path del HTTP Request individual.
    - ( ) Se ignorarán los Defaults y solo se usará el Path del HTTP Request, resultando en una URL incompleta.
    - ( ) Se concatenarán los Paths de Defaults y del HTTP Request individual.
    - ( ) El HTTP Request individual debe redefinir HOST y PORT si define un Path.

172. Considerando el "Regular Expression Extractor" para "Obtener JWT token" que usa la expresión `.+` y "Match No." en 0 (Random), si el cuerpo de la respuesta contiene múltiples líneas y el token JWT aparece en una línea específica, ¿qué comportamiento es más probable para la variable "token"?

    - (x) Capturará todo el cuerpo de la respuesta como una sola cadena, ya que `.` por defecto no incluye saltos de línea y `.+` es greedy.
    - ( ) Capturará aleatoriamente una de las líneas del cuerpo de la respuesta.
    - ( ) No capturará nada si no se usa el modo multilínea en la expresión regular.
    - ( ) Dependerá de la configuración de "Template", que si es `$1$` y la regex `.+` no define grupos de captura, resultará en un error o valor vacío.

173. En el "CSV Data Set Config" ("Credenciales Administradores"), el "Sharing mode" está configurado como "Current thread group". Si este CSV Data Set Config está bajo un Test Plan (y no directamente bajo un Thread Group específico) y es referenciado por dos Thread Groups diferentes, ¿cómo se compartirán los datos del CSV?

    - (x) Cada Thread Group tendrá su propia copia independiente del cursor del archivo CSV, y dentro de cada grupo, todos los hilos compartirán ese cursor.
    - ( ) Todos los hilos de todos los Thread Groups compartirán un único cursor global para el archivo CSV.
    - ( ) El "Sharing mode" "Current thread group" no es válido a nivel de Test Plan y causará un error. Debe ser "All threads".
    - ( ) Solo el primer Thread Group que acceda al CSV podrá leer los datos; el segundo encontrará el archivo bloqueado o vacío.

174. Si el "Gaussian Random Timer" (Desviación 100ms, Offset 300ms) se coloca como hijo directo de una petición HTTP Sampler en lugar de a nivel de Thread Group o Controlador, ¿cuándo se ejecutará la pausa introducida por este temporizador?

    - (x) Antes de que se ejecute cada petición HTTP Sampler de la que es hijo.
    - ( ) Después de que se ejecute cada petición HTTP Sampler de la que es hijo.
    - ( ) No tendrá efecto, ya que los temporizadores solo funcionan a nivel de Thread Group o Controlador.
    - ( ) La pausa se aplicará globalmente a todos los samplers del Thread Group, ignorando su posición específica.

175. En la configuración del "Access Log Sampler", el campo "Parser" está definido como `org.apache.jmeter.protocol.http.util.accesslog.TCLogParser`. Si se quisiera utilizar un formato de log de acceso personalizado que no es compatible con los parsers predeterminados de JMeter, ¿cuál sería el enfoque principal para procesar dicho log?

    - ( ) Modificar el archivo de log para que se ajuste al formato de `TCLogParser`.
    - ( ) Intentar con todos los parsers disponibles en JMeter hasta que uno funcione.
    - (x) Implementar una clase Java que extienda `org.apache.jmeter.protocol.http.util.accesslog.LogParser` o implemente la interfaz `Generator`, y luego especificar el nombre completo de esta clase en el campo "Parser".
    - ( ) Utilizar un script JSR223 PreProcessor para leer y parsear el log manualmente antes de que el Access Log Sampler se ejecute.

176. En la petición HTTP "Login Administradores", si el servidor responde con un código 302 (Redirección) y la opción "Follow Redirects" está marcada, pero el "HTTP Authorization Manager" solo está configurado para la URL original (`/api/v1/auth/login`), ¿qué ocurrirá con las credenciales de autorización en la petición redirigida si esta va a un dominio o path no cubierto por la "Base URL" del Authorization Manager?

    - ( ) JMeter automáticamente aplicará las mismas credenciales a la URL redirigida.
    - (x) La petición redirigida se enviará sin las cabeceras de autorización gestionadas por este Authorization Manager, a menos que otro Authorization Manager aplicable la cubra.
    - ( ) JMeter reintentará la petición original hasta 5 veces antes de seguir la redirección.
    - ( ) Se producirá un error en JMeter indicando una falta de coincidencia de autorización.

177. Si en el "HTTP Authorization Manager" se activa la opción "Clear auth on each iteration?", ¿cuál sería el impacto en un escenario donde un hilo realiza múltiples peticiones HTTP dentro de una misma iteración del bucle del Thread Group, todas ellas requiriendo la misma autorización básica?

    - ( ) Las credenciales se borrarán después de la primera petición HTTP de la iteración, y las subsiguientes fallarán por falta de autorización.
    - (x) Las credenciales se mantendrán para todas las peticiones dentro de la misma iteración; la limpieza ocurre solo al final de la iteración completa del Thread Group.
    - ( ) Esta opción solo afecta a la autorización de tipo Kerberos, no a la Básica.
    - ( ) JMeter solicitará interactivamente las credenciales al inicio de cada iteración.

178. El "Regular Expression Extractor" está configurado para extraer un "token" del "Body" de la respuesta. Si la petición falla (ej. error 500) y el cuerpo de la respuesta es una página de error HTML que no contiene el patrón esperado, ¿qué valor tomará la variable "token" si no se especifica un "Default Value" y no hay coincidencia?

    - ( ) La variable "token" contendrá la cadena "NULL".
    - (x) La variable "token" no se creará o mantendrá su valor previo si ya existía (comportamiento puede variar ligeramente por versión, pero generalmente no se actualiza).
    - ( ) JMeter lanzará una excepción y detendrá el hilo.
    - ( ) La variable "token" contendrá el cuerpo completo de la respuesta de error.

179. En un sistema Linux que utiliza LVM sobre un RAID 1 por software (mdadm) para el directorio `/var`, si uno de los discos físicos del RAID 1 comienza a experimentar fallos de escritura intermitentes que no son inmediatamente detectados como un fallo total por `mdadm`, ¿cuál es el riesgo más significativo?

    - ( ) LVM se volverá de solo lectura.
    - (x) Podría ocurrir una "escritura corrupta silenciosa" en el disco defectuoso, y si este disco se usa para reconstruir el mirror posteriormente, la corrupción podría propagarse al disco sano, comprometiendo la integridad de los datos en el Logical Volume.
    - ( ) mdadm entra en modo degradado sin pérdida de datos inmediata, usando solo el disco sano.
    - ( ) El sistema de archivos (ej. ext4) sobre el LV reparará los bloques afectados en tiempo real.

180. Al configurar `firewalld` en Rocky Linux, si se añade una regla para permitir el puerto 8080/tcp usando `firewall-cmd --add-port=8080/tcp` y posteriormente se ejecuta `firewall-cmd --runtime-to-permanent`, pero no se recarga explícitamente `firewalld` con `firewall-cmd --reload`. Si el sistema se reinicia, ¿cuál será el estado de la regla para el puerto 8080/tcp?

    - (x) Persiste; `runtime-to-permanent` la guarda para el inicio.
    - ( ) No activa; falta `reload` para cargarla en la configuración en ejecución aunque esté guardada.
    - ( ) La regla estará activa solo en la sesión actual, pero se perderá al reiniciar porque `firewall-cmd --reload` es indispensable para hacerla persistente en el arranque del sistema.
    - ( ) La regla se aplicará únicamente a la zona `public` por defecto y no a otras zonas configuradas, independientemente del reinicio o la recarga.

181. En Ansible, un playbook tiene un handler notificado por una tarea que ejecuta un script con `ansible.builtin.command`. Si este script devuelve un código de salida erróneo, pero la tarea tiene `ignore_errors: true`, ¿se ejecutará el handler?

    - ( ) Handler no se ejecuta.
    - (x) Handler se ejecuta; `ignore_errors` implica éxito para la notificación.
    - ( ) Se ejecutará, pero solo si el playbook se invoca con la opción `--force-handlers` para anular el estado de error.
    - ( ) La ejecución del handler dependerá únicamente del estado "changed" de la tarea; `ignore_errors` solo suprime el fallo, no afecta la lógica de notificación por cambio.

182. ¿Cuál es la diferencia fundamental en cómo Docker utiliza los `namespaces` del kernel de Linux en comparación con los `cgroups` para el aislamiento de contenedores?

    - ( ) Namespaces controlan el acceso a recursos (CPU, memoria); cgroups aíslan la vista del proceso (PID, red).
    - (x) Namespaces aíslan vista; cgroups limitan recursos.
    - ( ) Ambos se utilizan para limitar recursos, pero los `namespaces` son primordialmente para el aislamiento de la pila de red y los `cgroups` para la gestión de CPU y memoria exclusivamente.
    - ( ) Los `namespaces` definen la imagen base del contenedor y su sistema de archivos, mientras que los `cgroups` se encargan de gestionar los volúmenes persistentes y el almacenamiento efímero.

183. Al monitorizar un sistema con `top`, si se observa un valor consistentemente alto en `%wa` (I/O wait) y valores bajos en `%us` (user) y `%sy` (system), pero la memoria RAM y swap no están saturadas, ¿cuál es el cuello de botella más probable?

    - ( ) CPU sobrecargada por usuario.
    - (x) El subsistema de almacenamiento (disco duro/SSD o almacenamiento de red) es lento o está sobrecargado, causando que la CPU permanezca inactiva esperando a que se completen las operaciones de entrada/salida pendientes, lo que se refleja en un alto `%wa`.
    - ( ) Un problema de latencia de red, donde la CPU está esperando la llegada de paquetes de red para continuar el procesamiento.
    - ( ) La memoria RAM es insuficiente, lo que fuerza al sistema a realizar un uso excesivo del espacio de swap, y aunque `top` no lo refleje directamente en `%wa` como causa primaria, es el origen del problema.

184. En `prometheus.yml`, el `scrape_interval` global es 15s. Un job para `node_exporter` no define su propio `scrape_interval`. Un panel en Grafana usa `rate(node_cpu_seconds_total[1m])`. ¿Cómo afecta esto la precisión?

    - ( ) `rate` anula `scrape_interval`.
    - (x) `rate(1m)` con scrape de 15s usa 4 puntos de datos; puede sesgar la tasa por pocas muestras.
    - ( ) Prometheus ajustará automáticamente el `scrape_interval` del job a 1 minuto para que coincida con la consulta de `rate`.
    - ( ) La métrica resultante será altamente imprecisa porque la ventana de `rate` (1m) siempre debe ser estrictamente menor que el `scrape_interval` (15s).

185. Al migrar el directorio `/var` a un nuevo Logical Volume (LV) formateado con `ext4` sobre un RAID 1, ¿por qué es crucial `cp -a /var/* /mnt/` en lugar de `cp -r` en modo de mantenimiento?

    - ( ) `cp -a` es significativamente más rápido para grandes cantidades de datos que `cp -r`.
    - (x) `cp -a` preserva todos los atributos; `cp -r` no.
    - ( ) `cp -a` realiza una copia a nivel de bloque físico, mientras que `cp -r` copia a nivel de archivo lógico.
    - ( ) Solo `cp -a` puede manejar correctamente los archivos especiales como sockets y pipes que pueden existir dentro de `/var`.

186. Si `PermitRootLogin prohibit-password` está en `sshd_config`, y `/root/.ssh/authorized_keys` es correcto, ¿por qué podría fallar un login root con clave?

    - ( ) El servicio `sshd` no fue reiniciado tras el cambio en `sshd_config`.
    - ( ) La opción `PubkeyAuthentication` está establecida en `no` en el archivo `sshd_config`.
    - ( ) El directorio `/root` o `/root/.ssh` tienen permisos demasiado abiertos (ej. `777` o escribibles por grupo/otros).
    - (x) Todas las anteriores.

187. En un Dockerfile: `COPY ./myapp /usr/src/app`, `WORKDIR /usr/src/app`, `RUN ["npm", "install"]`. Si `myapp/node_modules` se copia, ¿qué comportamiento tendrá `npm install`?

    - ( ) `npm install` fallará.
    - ( ) `npm install` reinstalará todas las dependencias de `package.json` en el `node_modules` copiado, sobrescribiendo o actualizando módulos.
    - ( ) `npm install` no hará nada si `node_modules` copiado satisface `package.json` para la plataforma del host.
    - (x) Es mejor práctica añadir `node_modules` a `.dockerignore` para evitar copiarlo y siempre ejecutar `npm install` en un entorno limpio dentro del contenedor. `npm install`, si se ejecuta sobre un `node_modules` existente, verificará las dependencias y solo instalará/reconstruirá las faltantes o las que no coincidan con la arquitectura/plataforma del contenedor.

188. Un script cron usa `logger -t MYSCRIPT "Mensaje"`. El sistema usa `rsyslog`. Sin configuración específica para "MYSCRIPT", ¿dónde irán los mensajes y cuál es el problema si `/var/log/syslog` está muy concurrido?

    - ( ) A `/dev/null`.
    - (x) A `/var/log/syslog` o `messages`; filtrar "MYSCRIPT" en un log general muy activo es necesario y puede ser menos eficiente.
    - ( ) `logger` creará `/var/log/MYSCRIPT.log` automáticamente por la etiqueta proporcionada.
    - ( ) Los mensajes solo se enviarán por correo electrónico al propietario del trabajo cron definido en el sistema.

189. En JMeter, un "Regular Expression Extractor" captura un token de un encabezado de respuesta que puede aparecer varias veces. Con "Match No." en 0 (random), ¿cuál es el desafío para obtener consistentemente el token de la *última* aparición?

    - ( ) "Match No." 0 siempre tomará el primer token encontrado en el ámbito de la búsqueda.
    - ( ) Se debe usar "Match No." con valor -1 para obtener todas las coincidencias posibles y luego procesarlas con un JSR223 PostProcessor.
    - (x) "Match No." 0 es aleatorio; no garantiza la última.
    - ( ) El "Regular Expression Extractor" no puede manejar múltiples encabezados con el mismo nombre dentro de una única respuesta.

190. En JMeter, "CSV Data Set Config" con "Recycle on EOF:True", "Stop thread on EOF:False", CSV de 100 líneas, 5 hilos, Loop 30. ¿Qué impacto tiene "Sharing mode: Current thread group" vs "All threads" en la unicidad de datos por hilo?

    - ( ) "Current": cada hilo recicla 1.5x; "All": globalmente más.
    - (x) En "Current thread group", cada uno de los 5 hilos tendrá su propio cursor independiente sobre las 100 líneas; cada hilo leerá las líneas 1-30 del CSV para sus 30 iteraciones (asumiendo que 30
    - ( ) "Sharing mode" no afecta la unicidad de los datos asignados a cada hilo, solo la concurrencia de acceso al archivo físico.
    - ( ) Con "All threads", cada hilo obtiene una copia completa en memoria de las 100 líneas del CSV y las utiliza de forma totalmente independiente del resto de los hilos.

191. Un Volume Group (VG) de LVM contiene un PV en SSD y otro en HDD. Se crea un LV sin política de asignación y luego se extiende. ¿Cuál es la implicación crítica para el rendimiento?

    - ( ) LVM asignará los datos más accedidos al SSD.
    - ( ) El rendimiento será consistentemente el del HDD más lento en todas las operaciones del LV.
    - (x) Rendimiento impredecible; LVM asigna secuencialmente.
    - ( ) LVM creará automáticamente un mirror implícito entre el SSD y el HDD para asegurar la consistencia de los datos.

192. Con `ssh-copy-id`, si el home del usuario remoto o `.ssh` tienen permisos excesivos (ej. `777`), ¿por qué podría el servidor SSH rechazar la autenticación por clave aunque `authorized_keys` sea correcta?

    - ( ) Permisos no afectan clave.
    - (x) El servidor SSH (OpenSSH) es estricto con los permisos de los directorios home, `.ssh` y el archivo `authorized_keys` del usuario. Si estos son escribibles por otros usuarios que no sean el propietario o root, SSH considerará esto un riesgo de seguridad (alguien podría modificar `authorized_keys`) y, por lo tanto, rechazará la autenticación basada en claves para proteger al usuario, incluso si la clave pública en sí es válida.
    - ( ) Este problema de permisos solo es relevante si SELinux está en modo `enforcing` en el servidor.
    - ( ) El comando `ssh-copy-id` está diseñado para corregir automáticamente estos problemas de permisos en el servidor remoto.

193. En Ansible, `my_package: httpd` está en `group_vars/all.yml` y `my_package: nginx` en `host_vars/server1.yml`. La tarea `ansible.builtin.package: name={{ my_package }}` ¿qué instalará en `server1`?

    - ( ) `httpd`; `group_vars/all.yml` es más general y se aplica a todos los hosts primero.
    - (x) `nginx`; `host_vars` tiene mayor precedencia.
    - ( ) Ansible generará un error por la definición conflictiva de la variable `my_package`.
    - ( ) Se intentarán instalar ambos paquetes, primero `httpd` y luego `nginx`, sobreescribiendo la configuración.

194. ¿Cuál es la diferencia crítica entre `EXPOSE 3000` en Dockerfile y `-p 8080:3000` en `docker run` para la accesibilidad de red del contenedor?

    - ( ) `EXPOSE` publica a host:3000; `-p` a host:8080.
    - (x) `EXPOSE 3000` en un Dockerfile es principalmente una forma de documentación para el usuario de la imagen y para otras herramientas (como Docker Compose al usar `ports` sin especificar el puerto del host), indicando que la aplicación dentro del contenedor está escuchando en el puerto 3000. No publica el puerto al host por sí mismo ni lo hace accesible desde fuera. La opción `-p 8080:3000` al ejecutar `docker run` es la que efectivamente crea una regla de NAT en el host, mapeando el puerto 3000 del contenedor al puerto 8080 del host, permitiendo así el acceso externo.
    - ( ) Ambos logran exactamente lo mismo en términos de publicación de puertos; `-p` es solo una forma abreviada de `EXPOSE` que se puede usar en tiempo de ejecución.
    - ( ) `EXPOSE` solo funciona si se utiliza Docker Compose para orquestar los contenedores, mientras que la opción `-p` es exclusiva del comando `docker run`.

195. Al configurar una alerta en Grafana basada en `avg_over_time(process_cpu_seconds_total[5m]) > 0.75`, ¿qué impacto tiene la elección del "For" (duración) en la alerta si la métrica fluctúa cerca del umbral?

    - ( ) "For" es espera post-resolución.
    - (x) "For": la condición (CPU > 75%) debe persistir continuamente ese tiempo para "Firing"; evita alertas por picos, pero retrasa notificación.
    - ( ) El "For" define el intervalo con el que Grafana consulta a Prometheus para obtener los datos actualizados de la métrica especificada.
    - ( ) El parámetro "For" solo se utiliza para configurar alertas de tipo "No Data", no para alertas basadas en umbrales de métricas.

196. En el Dockerfile de una aplicación Node.js, se usa `ENV NODE_ENV=production`. ¿Cuál es una consecuencia común de esto para frameworks como Express?

    - ( ) Habilita el logging detallado para depuración avanzada en producción y reduce el rendimiento general de la aplicación.
    - ( ) Desactiva la instalación de todas las dependencias listadas en `devDependencies` durante la ejecución de `npm install`.
    - (x) Activa optimizaciones, deshabilita depuración.
    - ( ) Fuerza a la aplicación Node.js a ejecutarse en un único hilo de proceso para garantizar una mayor estabilidad en el entorno de producción.

197. `logrotate` se ejecuta diariamente vía cron. Config en `/etc/logrotate.d/myservice`: `size 10M`, `rotate 4`, `daily`. Si el log de `myservice` crece a 50MB en 12 horas. ¿Cuándo y cómo se rotarán?

    - ( ) Rotará al alcanzar 10MB.
    - (x) Solo se rotará una vez al día cuando `logrotate` se ejecute desde cron, independientemente de que haya superado los 10MB mucho antes. En ese momento, `logrotate` evaluará las condiciones. Si el archivo actual excede 10MB, lo rotará (renombrándolo, por ejemplo, a `myservice.log.1`) y creará un nuevo archivo `myservice.log` vacío. Se conservarán hasta 4 archivos rotados. Las directivas `daily` y `size` pueden interactuar; `daily` asegura una rotación si ha pasado un día, `size` fuerza una rotación si el tamaño se excede *en el momento de la ejecución de logrotate*.
    - ( ) La opción `daily` anulará completamente la opción `size 10M`, y el log solo rotará estrictamente cada 24 horas.
    - ( ) El servicio `myservice` debe estar configurado para llamar explícitamente a `logrotate` cada vez que su archivo de log exceda el umbral de 10MB.

198. Al usar `semanage port -a -t ssh_port_t -p tcp 2222` para un puerto SSH no estándar con SELinux en `enforcing`, ¿qué sucede si este comando no se ejecuta tras cambiar el puerto en `sshd_config` y reiniciar `sshd` (asumiendo que `firewalld` permite el puerto)?

    - ( ) SELinux no interfiere.
    - (x) `sshd` no iniciará; SELinux deniega enlace a puerto sin etiqueta `ssh_port_t`.
    - ( ) Las conexiones al nuevo puerto serán permitidas por `firewalld`, pero SELinux registrará múltiples alertas AVC sin bloquear el acceso.
    - ( ) El comando `semanage` solo es necesario si `firewalld` no está instalado o está deshabilitado en el sistema.

199. En Docker Compose, si el servicio `webapp` tiene `depends_on: [db]`, ¿qué garantiza Compose sobre el servicio `db` antes de iniciar `webapp`?

    - ( ) Garantiza que el contenedor `db` se ha iniciado y que la aplicación dentro de `db` (ej. PostgreSQL) está completamente lista y operativa para aceptar conexiones.
    - (x) Solo garantiza inicio de contenedor `db`, no que app esté lista.
    - ( ) Garantiza que la imagen del contenedor `db` ha sido descargada o construida, pero no necesariamente que el contenedor haya sido creado o iniciado.
    - ( ) `depends_on` únicamente controla el orden en que los contenedores son detenidos durante un `docker-compose down`, no el orden de inicio.

200. Un script de Ansible usa `ansible.builtin.lineinfile` con `state: present` para asegurar una línea en `/etc/security/limits.conf`. Si se ejecuta repetidamente y la línea ya existe y coincide, ¿cuál es el comportamiento y cómo afecta al estado "changed"?

    - ( ) Siempre reescribe; changed: true.
    - (x) La tarea verificará la presencia de la línea. Si ya existe y coincide exactamente con la línea especificada, no realizará ninguna modificación en el archivo y, por lo tanto, reportará "changed: false". Este es el comportamiento idempotente fundamental de Ansible. Si la línea no existe, o si se utiliza un `regexp` para buscar una línea a reemplazar y esta no coincide con la línea deseada, entonces `lineinfile` añadirá o modificará la línea según sea necesario y reportará "changed: true".
    - ( ) La tarea fallará con un error si la línea ya existe, a menos que se utilice explícitamente `state: absent` primero para eliminarla.
    - ( ) La tarea añadirá una línea duplicada en cada ejecución si no se usa un `regexp` para buscarla, y siempre reportará "changed: true".
