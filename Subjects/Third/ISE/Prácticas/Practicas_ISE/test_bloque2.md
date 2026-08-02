# Test Interactivo: Bloque 2 - Monitorización, Carga y Contenedores

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

36. En la imagen de JMeter proporcionada, bajo "Login Administradores", ¿qué parámetros se envían en la petición HTTP POST?

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

51. En la imagen de JMeter que has proporcionado, ¿qué elemento se utiliza para manejar las credenciales de autenticación básica HTTP de forma global en el plan de pruebas?

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

71. En JMeter, como se ve en la imagen, un "JWT Token" obtenido tras el login se utiliza probablemente en peticiones subsiguientes dentro de un:

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

98. En la imagen de JMeter proporcionada, elementos como "Login Alumnos", "Obtener JWT Token" y "Recuperar datos alumnos" están organizados bajo un elemento padre llamado "Alumnos". Este elemento "Alumnos" es probablemente un:

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
