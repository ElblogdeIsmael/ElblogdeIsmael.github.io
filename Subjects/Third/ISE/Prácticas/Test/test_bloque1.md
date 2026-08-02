# Test Bloque 1

* **Autor:** Ismael Sallami Moreno
* **Titulación:** Doble Grado en Ingeniería Informática y ADE

1. ¿Qué tecnología permite agrupar varios dispositivos de almacenamiento creando un nuevo dispositivo virtual con capacidades extendidas?

    - (x) RAID
    - ( ) LVM
    - ( ) SSH
    - ( ) NAT

2. En LVM, ¿cuál es el componente que representa los dispositivos de almacenamiento físico como discos duros?

    - ( ) Logical Volume (LV)
    - ( ) Volume Group (VG)
    - (x) Physical Volume (PV)
    - ( ) File System (FS)

3. ¿Qué nivel de RAID es conocido como "Mirroring" y duplica los datos en dos o más discos?

    - ( ) RAID 0
    - (x) RAID 1
    - ( ) RAID 5
    - ( ) RAID 10

4. ¿Cuál es el comando utilizado en Rocky Linux para gestionar el firewall desde la línea de comandos?

    - ( ) iptables
    - ( ) ufw
    - (x) firewall-cmd
    - ( ) nmap

5. ¿Qué comando se utiliza para verificar la conectividad de red con otro host enviando paquetes ICMP Echo Request?

    - ( ) ssh
    - ( ) telnet
    - (x) ping
    - ( ) scp

6. El servicio SSH (SSHD) por defecto utiliza el puerto:

    - ( ) 80
    - (x) 22
    - ( ) 443
    - ( ) 21

7. En la configuración de red de una máquina virtual en VirtualBox, ¿qué modo de red permite la comunicación con el equipo Anfitrión y otras posibles máquinas virtuales, pero no necesariamente con Internet directamente?

    - ( ) NAT
    - ( ) Bridge (Adaptador Puente)
    - (x) Host-Only (Solo-anfitrión)
    - ( ) Red Interna

8. ¿Qué comando se utiliza para crear un Physical Volume (PV) en un sistema LVM?

    - ( ) vgcreate
    - ( ) lvcreate
    - (x) pvcreate
    - ( ) mkfs

9. ¿Cuál es la principal desventaja de RAID 0 (Striping)?

    - ( ) Coste elevado de almacenamiento.
    - ( ) Bajo rendimiento en escritura.
    - (x) Si un disco falla, se pierde toda la información.
    - ( ) Requiere un mínimo de 3 discos.

10. Para hacer permanente una regla añadida con `firewall-cmd` (por ejemplo, abrir un servicio), ¿qué opción se debe utilizar junto con `--add-service`?

    - ( ) --reload
    - (x) --permanent
    - ( ) --now
    - ( ) --save

11. ¿Qué es la virtualización de servidores según el contexto de las prácticas?

    - (x) Una forma de ejecutar múltiples sistemas operativos invitados sobre un único hardware físico.
    - ( ) Una técnica para dividir un disco duro en múltiples particiones.
    - ( ) Un método para asegurar conexiones de red mediante cifrado.
    - ( ) La creación de copias de seguridad incrementales de un servidor.

12. Para la instalación del SO Rocky Linux en las prácticas, ¿se recomienda instalar un entorno gráfico?

    - ( ) Sí, es obligatorio para facilitar la configuración.
    - (x) No, se debe asegurar que NO se instale un entorno gráfico.
    - ( ) Es opcional, depende de la preferencia del alumno.
    - ( ) Solo si se va a usar VirtualBox.

13. ¿Qué comando se utiliza en Rocky Linux para configurar las interfaces de red si se usa NetworkManager desde la CLI?

    - ( ) ifconfig
    - ( ) ip addr
    - (x) nmcli
    - ( ) netstat

14. ¿Cuál es una ventaja de usar LVM (Logical Volume Manager)?

    - ( ) Aumenta la velocidad de la CPU.
    - (x) Facilita la gestión y redimensión de volúmenes de almacenamiento.
    - ( ) Mejora la seguridad de las conexiones SSH.
    - ( ) Reduce el consumo de energía del servidor.

15. ¿Qué directorio en Linux contiene los archivos de arranque del sistema?

    - ( ) /etc
    - ( ) /var
    - (x) /boot
    - ( ) /home

16. En RAID 5 (Paridad distribuida), si un disco falla, ¿cómo se recuperan los datos?

    - ( ) Los datos se pierden permanentemente.
    - (x) Se recuperan utilizando la información de paridad de los discos restantes.
    - ( ) Se recuperan desde una copia espejo en otro disco.
    - ( ) Es necesario tener un disco de "hot spare" obligatoriamente.

17. ¿Para qué se utiliza el comando `nmap` en el contexto de la seguridad de servidores?

    - ( ) Para crear volúmenes lógicos LVM.
    - ( ) Para configurar reglas de firewall.
    - (x) Para escanear puertos y verificar la configuración del firewall.
    - ( ) Para editar archivos de configuración de SSH.

18. Al configurar SSH para acceso remoto sin contraseña usando claves, ¿dónde se almacena la clave pública del cliente en el servidor?

    - ( ) En el archivo `/etc/ssh/sshd_config` del servidor.
    - ( ) En el archivo `~/.ssh/id_rsa` del servidor.
    - ( ) En el archivo `~/.ssh/known_hosts` del servidor.
    - (x) En el archivo `~/.ssh/authorized_keys` del usuario en el servidor.

19. ¿Qué es Ansible, según se describe en el material?

    - ( ) Un software de virtualización similar a VirtualBox.
    - (x) Una herramienta para la automatización de la configuración de servidores.
    - ( ) Un sistema de gestión de bases de datos.
    - ( ) Un cliente de correo electrónico para servidores Linux.

20. ¿En qué se basa Ansible para la ejecución remota de comandos?

    - ( ) En Telnet y scripts Bash.
    - ( ) En RDP y PowerShell.
    - (x) En SSH y Python.
    - ( ) En SNMP y Perl.

21. ¿Cuál es el objetivo de utilizar `snapshots` en VirtualBox?

    - ( ) Aumentar la capacidad del disco duro virtual.
    - ( ) Mejorar el rendimiento gráfico de la máquina virtual.
    - (x) Almacenar el estado de una máquina virtual en un momento dado para poder revertirla a ese estado.
    - ( ) Crear una copia exacta de la máquina virtual en otro equipo.

22. El comando `useradd` en Linux se utiliza para:

    - ( ) Modificar un usuario existente.
    - ( ) Eliminar un usuario del sistema.
    - (x) Crear una nueva cuenta de usuario.
    - ( ) Listar los usuarios conectados.

23. ¿Qué característica principal diferencia a los contenedores de las máquinas virtuales tradicionales?

    - ( ) Los contenedores virtualizan el hardware, mientras que las VMs no.
    - (x) Los contenedores comparten el kernel del sistema operativo anfitrión, mientras que las VMs tienen su propio SO guest.
    - ( ) Las VMs son más ligeras y rápidas que los contenedores.
    - ( ) Los contenedores requieren más recursos de CPU y memoria que las VMs.

24. ¿Cuál es el propósito del archivo `/etc/fstab` en Linux?

    - ( ) Contener las reglas del firewall.
    - ( ) Almacenar las contraseñas de los usuarios encriptadas.
    - (x) Definir cómo y dónde se montarán los sistemas de archivos de forma persistente durante el arranque.
    - ( ) Guardar la configuración de las interfaces de red.

25. En el contexto de SSH, ¿qué significa "criptografía asimétrica"?

    - ( ) Se usa la misma clave para cifrar y descifrar.
    - (x) Se usa una clave pública para cifrar y una clave privada diferente para descifrar (o viceversa para firmas).
    - ( ) Es un tipo de cifrado que no requiere claves.
    - ( ) Solo se usa para verificar la integridad de los datos, no para cifrarlos.

26. ¿Cuál de estos NO es un nivel de Cloud Computing mencionado en las transparencias?

    - ( ) IaaS (Infrastructure as a Service)
    - ( ) PaaS (Platform as a Service)
    - ( ) SaaS (Software as a Service)
    - (x) DaaS (Desktop as a Service)

27. ¿Qué comando se utiliza para cambiar al "modo mantenimiento" o runlevel 1 en un sistema Linux con systemd?

    - ( ) systemctl shutdown now
    - (x) systemctl isolate runlevel1.target
    - ( ) init 1
    - ( ) reboot --maintenance

28. Para conceder privilegios de administración a un usuario en Rocky Linux, permitiéndole usar `sudo`, ¿a qué grupo se suele añadir?

    - ( ) root
    - ( ) admin
    - (x) wheel
    - ( ) users

29. ¿Qué es un "playbook" en Ansible?

    - ( ) Un comando ad-hoc para ejecutar una única tarea.
    - (x) Un archivo (generalmente en formato YAML) que define un conjunto de tareas y configuraciones a aplicar en los hosts gestionados.
    - ( ) El inventario de hosts que Ansible va a gestionar.
    - ( ) Un módulo específico para instalar software.

30. ¿Qué se recomienda en las prácticas de ISE para asegurar el prompt de la shell en las capturas de pantalla?

    - ( ) Que sea lo más corto posible.
    - (x) Que muestre el usuario actual, el hostname, la hora y el directorio actual.
    - ( ) Que solo muestre el directorio actual.
    - ( ) Que oculte la hora para mayor privacidad.

31. En LVM, ¿qué comando se utiliza para crear un Volume Group (VG)?

    - ( ) pvcreate
    - ( ) lvcreate
    - (x) vgcreate
    - ( ) vgdisplay

32. ¿Qué tipo de RAID utiliza "striping" pero no ofrece redundancia, resultando en pérdida total de datos si un disco falla?

    - ( ) RAID 1
    - (x) RAID 0
    - ( ) RAID 5
    - ( ) RAID 6

33. Para la práctica de configuración de red en Rocky Linux, se pide que la interfaz Host-Only tenga una IP:

    - ( ) Dinámica asignada por DHCP.
    - (x) Estática, configurada manualmente.
    - ( ) Asignada por el router de la red local.
    - ( ) Pública y accesible desde Internet.

34. ¿Cuál de las siguientes es una característica de la criptografía de clave simétrica?

    - ( ) Usa un par de claves: una pública y una privada.
    - ( ) La clave de cifrado es diferente de la clave de descifrado.
    - (x) Se usa la misma clave para cifrar y para descifrar.
    - ( ) Es ideal para la firma digital de documentos.

35. El comando `systemctl status firewalld` en Rocky Linux se utiliza para:

    - ( ) Abrir un puerto en el firewall.
    - (x) Verificar si el servicio de firewall está activo y su estado actual.
    - ( ) Recargar la configuración del firewall.
    - ( ) Listar todas las reglas del firewall.

36. ¿Qué permite el "Modo Bridge" (Adaptador Puente) en la configuración de red de VirtualBox?

    - ( ) Que la máquina virtual solo se comunique con el anfitrión.
    - (x) Que la máquina virtual actúe como si estuviera conectada directamente a la misma red física que el anfitrión, obteniendo su propia IP en esa red.
    - ( ) Que la máquina virtual comparta la IP del anfitrión para acceder a Internet mediante NAT.
    - ( ) Crear una red aislada solo entre máquinas virtuales.

37. ¿Cuál es el propósito del comando `ssh-keygen`?

    - ( ) Iniciar una conexión SSH a un servidor remoto.
    - ( ) Copiar la clave pública a un servidor remoto.
    - (x) Generar un par de claves SSH (pública y privada).
    - ( ) Cambiar la contraseña de un usuario para SSH.

38. En Ansible, el archivo de "inventario" se utiliza para:

    - ( ) Definir las tareas que se van a ejecutar.
    - ( ) Almacenar variables globales para los playbooks.
    - (x) Listar los hosts (servidores) que Ansible va a gestionar, opcionalmente agrupándolos.
    - ( ) Guardar los logs de ejecución de Ansible.

39. ¿Qué comando de LVM se utiliza para mostrar información sobre los Logical Volumes (LVs) existentes?

    - ( ) pvs
    - ( ) vgs
    - (x) lvs
    - ( ) lvscan

40. Si el directorio `/boot` de un sistema Linux se llena, ¿cuál podría ser una consecuencia directa?

    - (x) El sistema podría fallar al arrancar.
    - ( ) Los logs del sistema dejarían de escribirse.
    - ( ) No se podrían crear nuevos usuarios.
    - ( ) La conexión de red se volvería inestable.

41. ¿Qué es `mdadm` en Linux?

    - ( ) Una herramienta para gestionar LVM.
    - (x) Una utilidad para administrar arreglos RAID por software.
    - ( ) Un comando para montar sistemas de ficheros.
    - ( ) El gestor de paquetes por defecto en Rocky Linux.

42. ¿Cuál es el propósito de la opción `--runtime-to-permanent` en `firewall-cmd`?

    - ( ) Aplicar la configuración permanente a la configuración en tiempo de ejecución actual.
    - (x) Guardar la configuración actual en tiempo de ejecución como configuración permanente.
    - ( ) Eliminar todas las reglas permanentes.
    - ( ) Mostrar las diferencias entre la configuración en tiempo de ejecución y la permanente.

43. Al cambiar el puerto por defecto de SSHD, además de modificar `/etc/ssh/sshd_config`, ¿qué otra acción es crucial?

    - ( ) Reiniciar el servicio de red.
    - (x) Modificar la configuración del firewall para permitir el nuevo puerto y reiniciar SSHD.
    - ( ) Crear un nuevo par de claves SSH.
    - ( ) Actualizar el kernel del sistema operativo.

44. ¿Qué significa que un sistema de ficheros como ext4 o XFS sea "transaccional"?

    - ( ) Que solo permite transacciones financieras.
    - (x) Que utiliza un "journal" o diario para registrar los cambios antes de aplicarlos, ayudando a prevenir la corrupción de datos en caso de fallos.
    - ( ) Que es más rápido para transferir archivos grandes.
    - ( ) Que no requiere ser montado para su uso.

45. El comando `scp` (Secure Copy) se utiliza para:

    - ( ) Establecer una shell remota segura.
    - (x) Copiar archivos de forma segura entre un host local y uno remoto (o entre dos remotos) utilizando SSH.
    - ( ) Verificar el estado de los servicios de red.
    - ( ) Gestionar los certificados de seguridad del servidor.

46. ¿Qué es un "hipervisor" en el contexto de la virtualización?

    - ( ) El sistema operativo invitado que corre en la máquina virtual.
    - ( ) El hardware físico del servidor.
    - (x) El software o firmware que crea y ejecuta máquinas virtuales.
    - ( ) Una aplicación que se ejecuta dentro de una máquina virtual.

47. ¿Cuál de los siguientes es un ejemplo de Cloud Pública según las transparencias?

    - ( ) Proxmox alojado en la infraestructura propia.
    - ( ) OpenStack en servidores locales.
    - (x) Amazon Web Services (AWS).
    - ( ) Una combinación de servidores propios y AWS.

48. Para editar el archivo `/etc/sudoers` de forma segura, ¿qué comando se recomienda utilizar?

    - ( ) nano /etc/sudoers
    - ( ) vi /etc/sudoers
    - (x) visudo
    - ( ) cat /etc/sudoers > /etc/sudoers_new

49. ¿Cuál es una práctica de seguridad recomendada para el acceso con Ansible a los nodos controlados?

    - ( ) Utilizar siempre el usuario "root" con contraseña.
    - (x) Crear un usuario específico (ej: "admin") con acceso SSH por llave pública y capacidad de ejecutar comandos privilegiados sin contraseña adicional (vía sudoers).
    - ( ) Deshabilitar SSH y usar Telnet para mayor simplicidad.
    - ( ) Almacenar las contraseñas de root en texto plano en los playbooks.

50. En un `prompt` de bash como `[admin@dpsMV01-17:30:25 etc]$`, ¿qué representa `dpsMV01`?

    - ( ) El usuario actual.
    - ( ) El directorio actual.
    - (x) El hostname del servidor.
    - ( ) La hora actual.

51. ¿Qué software de virtualización se indica explícitamente para homogeneizar el entorno de prácticas en ISE?

    - ( ) VMware Workstation
    - ( ) KVM
    - (x) VirtualBox
    - ( ) Hyper-V

52. Al instalar Apache (httpd) en Rocky Linux, ¿qué comando se usa para iniciar el servicio?

    - ( ) sudo service httpd start
    - (x) sudo systemctl start httpd
    - ( ) sudo apachectl start
    - ( ) sudo /etc/init.d/httpd start

53. ¿Cuál es la principal utilidad del comando `hostnamectl` en Linux?

    - ( ) Configurar las interfaces de red.
    - (x) Consultar y cambiar el hostname del sistema de forma persistente.
    - ( ) Gestionar los usuarios y grupos del sistema.
    - ( ) Monitorizar el rendimiento del sistema.

54. En LVM, si se necesita expandir un Logical Volume (LV) y hay espacio libre en el Volume Group (VG), ¿qué comando se podría usar?

    - ( ) vgextend
    - (x) lvextend
    - ( ) pvextend
    - ( ) fsadm resize

55. ¿Qué directorio en Linux es el punto de montaje temporal estándar para sistemas de archivos?

    - ( ) /tmp
    - ( ) /media
    - (x) /mnt
    - ( ) /opt

56. ¿Cuál es la principal ventaja de RAID 1 (Mirroring) sobre RAID 0 (Striping)?

    - ( ) Mayor capacidad de almacenamiento útil.
    - ( ) Mejor rendimiento en escritura.
    - (x) Redundancia y tolerancia a fallos.
    - ( ) Menor coste por GB.

57. El comando `firewall-cmd --reload` se utiliza para:

    - ( ) Detener el servicio de firewall.
    - (x) Aplicar la configuración permanente del firewall sin perder las conexiones activas.
    - ( ) Restablecer el firewall a su configuración por defecto.
    - ( ) Listar todas las reglas activas del firewall.

58. En el contexto de la analogía "proceso vs hebra", ¿a qué se asemejan más los contenedores?

    - ( ) A dos procesos completamente virtualizados e independientes.
    - (x) A las hebras, que comparten recursos con el anfitrión y entre sí.
    - ( ) A una máquina virtual con su propio kernel.
    - ( ) A un hipervisor de tipo 1.

59. ¿Cuál es el comando en Ansible para ejecutar tareas únicas y rápidas sin necesidad de un playbook?

    - ( ) ansible-run
    - ( ) ansible-playbook
    - (x) ansible (seguido del host, módulo y argumentos)
    - ( ) ansible-task

60. ¿Qué formato de archivo se utiliza comúnmente para escribir playbooks de Ansible?

    - ( ) XML
    - ( ) JSON
    - (x) YAML
    - ( ) TXT

61. ¿Qué es el "Filesystem Hierarchy Standard (FHS)" en Linux?

    - ( ) Un tipo específico de sistema de archivos como ext4.
    - (x) Una norma que define la estructura estándar de directorios y la ubicación de los archivos en los sistemas operativos tipo Unix.
    - ( ) Una herramienta para formatear discos duros.
    - ( ) El protocolo de red utilizado para compartir archivos.

62. El comando `usermod` en Linux se utiliza principalmente para:

    - ( ) Monitorizar la actividad de los usuarios.
    - (x) Modificar los atributos de una cuenta de usuario existente.
    - ( ) Crear un nuevo directorio home para un usuario.
    - ( ) Cambiar la contraseña de root.

63. Si clonas una Máquina Virtual en VirtualBox, ¿qué obtienes?

    - ( ) Un snapshot del estado actual de la MV original.
    - (x) Una nueva máquina virtual independiente que es una copia exacta de la original.
    - ( ) Un disco duro virtual adicional para la MV original.
    - ( ) Una copia de seguridad de los archivos de configuración de la MV.

64. ¿Cuál es la función principal de `iptables` en Linux?

    - ( ) Gestionar la instalación de paquetes de software.
    - (x) Configurar el cortafuegos del kernel de Linux (Netfilter).
    - ( ) Monitorizar el tráfico de red en tiempo real.
    - ( ) Crear y gestionar tablas de particiones de disco.

65. El protocolo `sftp` (Secure File Transfer Protocol) funciona sobre:

    - ( ) HTTP
    - ( ) FTP
    - (x) SSH
    - ( ) Telnet

66. ¿Qué tipo de Cloud Computing es "PaaS" (Platform as a Service)?

    - ( ) Ofrece infraestructura básica como servidores y almacenamiento.
    - (x) Proporciona un entorno para desarrollar, ejecutar y gestionar aplicaciones sin preocuparse por la infraestructura subyacente.
    - ( ) Entrega software directamente a los usuarios finales a través de Internet.
    - ( ) Permite ejecutar funciones individuales de código en respuesta a eventos.

67. ¿Para qué se utiliza la opción `-p` en el comando `ssh`? (Ej: `ssh -p 2222 usuario@servidor`)

    - ( ) Para especificar la contraseña directamente.
    - (x) Para indicar el puerto al que se debe conectar en el servidor remoto.
    - ( ) Para solicitar permisos de superusuario tras la conexión.
    - ( ) Para habilitar el modo pasivo de conexión.

68. ¿Cuál de las siguientes NO es una responsabilidad de LVM?

    - ( ) Crear volúmenes lógicos.
    - ( ) Agrupar volúmenes físicos.
    - (x) Formatear los volúmenes lógicos con un sistema de ficheros específico.
    - ( ) Permitir la redimensión de volúmenes lógicos.

69. En un entorno de "Cloud Híbrida", ¿qué se combina?

    - ( ) Múltiples proveedores de cloud pública.
    - ( ) Servidores físicos y virtuales dentro de la misma infraestructura privada.
    - (x) Infraestructuras de cloud privada con servicios de cloud pública.
    - ( ) Diferentes niveles de servicio (IaaS, PaaS, SaaS) del mismo proveedor.

70. La directiva `PermitRootLogin` en el archivo de configuración de SSHD (`sshd_config`) controla:

    - ( ) Si se permite el reenvío de X11.
    - ( ) El número máximo de intentos de contraseña.
    - (x) Si el usuario root puede iniciar sesión directamente a través de SSH y bajo qué condiciones (ej: yes, no, prohibit-password).
    - ( ) Los algoritmos de cifrado permitidos para la conexión.

71. ¿Qué comando se utiliza para crear un Logical Volume (LV) en LVM, especificando su tamaño y nombre?

    - ( ) vgcreate -L 10G -n mi_lv mi_vg
    - ( ) pvcreate -L 10G -n mi_lv /dev/sda1
    - (x) lvcreate -L 10G -n mi_lv mi_vg
    - ( ) mkfs.ext4 -L 10G /dev/mi_vg/mi_lv

72. En el contexto de la seguridad SSH, ¿qué es un "man-in-the-middle attack"?

    - ( ) Un ataque de denegación de servicio al servidor SSH.
    - ( ) Un intento de adivinar contraseñas mediante fuerza bruta.
    - (x) Un ataque donde un tercero intercepta y posiblemente altera la comunicación entre dos partes sin que estas lo sepan.
    - ( ) La explotación de una vulnerabilidad en el software del cliente SSH.

73. ¿Qué tipo de información suele contener el directorio `/var` en un sistema Linux?

    - ( ) Archivos binarios esenciales del sistema.
    - ( ) Archivos de configuración del sistema y de aplicaciones.
    - (x) Datos variables del sistema, como logs, colas de correo y archivos temporales de aplicaciones.
    - ( ) Los directorios home de los usuarios.

74. ¿Cuál es una de las principales razones para usar RAID por hardware en lugar de RAID por software?

    - ( ) Es más barato de implementar.
    - ( ) Es más fácil de modificar por el administrador del sistema.
    - (x) Suele ser más eficiente y transparente para el sistema operativo, descargando el procesamiento de la CPU principal.
    - ( ) Requiere menos discos para el mismo nivel de RAID.

75. El comando `mkfs.ext4 /dev/vg_datos/lv_app` se utiliza para:

    - ( ) Crear el volumen lógico `lv_app`.
    - ( ) Montar el volumen lógico `lv_app` en `/mnt`.
    - (x) Formatear el volumen lógico `lv_app` con el sistema de archivos ext4.
    - ( ) Añadir el volumen lógico `lv_app` al grupo de volúmenes `vg_datos`.

76. Al configurar un servidor web como Apache o Nginx y habilitar su acceso por firewall, ¿qué puerto es el estándar para HTTP?

    - ( ) 22
    - ( ) 443
    - (x) 80
    - ( ) 8080

77. ¿Cuál es el objetivo de "asegurar" el servicio SSH, según lo mencionado en el temario?

    - ( ) Aumentar la velocidad de transferencia de archivos.
    - (x) Limitar el acceso por contraseña (especialmente para root), cambiar el puerto por defecto y usar autenticación por clave.
    - ( ) Permitir el acceso anónimo al servidor.
    - ( ) Reducir el uso de CPU del servicio SSHD.

78. ¿Qué son los "módulos" en Ansible?

    - ( ) Los servidores gestionados por Ansible.
    - (x) Pequeñas unidades de código o scripts que realizan tareas específicas (ej: gestionar paquetes, usuarios, servicios).
    - ( ) Los archivos de inventario.
    - ( ) Alias para comandos complejos de Ansible.

79. Si se desea que un servicio como `httpd` o `sshd` se inicie automáticamente al arrancar el sistema en Rocky Linux, ¿qué comando de `systemctl` se utiliza?

    - ( ) systemctl start nombredelservicio
    - (x) systemctl enable nombredelservicio
    - ( ) systemctl reload nombredelservicio
    - ( ) systemctl status nombredelservicio

80. ¿Qué información proporciona el comando `lsblk`?

    - ( ) El uso de CPU de cada proceso.
    - (x) Información sobre los dispositivos de bloque (discos, particiones, LVM, RAID) y sus puntos de montaje.
    - ( ) Las reglas activas del firewall.
    - ( ) El contenido detallado de los archivos de log.

81. La "Red NAT" en VirtualBox es útil principalmente para:

    - ( ) Comunicación directa entre la MV y el anfitrión usando IPs privadas.
    - (x) Permitir que la MV acceda a Internet compartiendo la conexión del anfitrión.
    - ( ) Aislar completamente la MV de cualquier red.
    - ( ) Asignar una IP pública directamente a la MV.

82. ¿Cuál es el comando para ver el contenido del archivo de configuración del demonio SSH en un sistema típico de Linux?

    - ( ) cat ~/.ssh/config
    - ( ) cat /etc/ssh/ssh_config
    - (x) cat /etc/ssh/sshd_config
    - ( ) cat /etc/secure.conf

83. ¿Qué se entiende por "idempotencia" en el contexto de Ansible?

    - ( ) Que los playbooks se ejecutan muy rápidamente.
    - (x) Que un playbook se puede ejecutar múltiples veces y el resultado final será el mismo (solo se aplican cambios si son necesarios).
    - ( ) Que Ansible puede gestionar múltiples sistemas operativos.
    - ( ) Que los playbooks deben estar escritos obligatoriamente en Python.

84. ¿Para qué sirve la opción `-a` del comando `cp` (ej: `cp -a /origen /destino`)?

    - ( ) Para copiar solo archivos ASCII.
    - ( ) Para preguntar antes de sobrescribir cada archivo.
    - (x) Para copiar recursivamente directorios y preservar atributos como permisos, propietario y timestamps (modo archivo).
    - ( ) Para añadir el contenido de /origen al final de /destino.

85. ¿Qué representa el "hardware virtual" en un entorno de virtualización?

    - ( ) Los componentes físicos reales del servidor anfitrión.
    - (x) Una emulación de componentes hardware (CPU, RAM, disco, red) que el hipervisor presenta al sistema operativo invitado.
    - ( ) El sistema operativo anfitrión.
    - ( ) Los drivers necesarios para que la VM funcione.

86. ¿Qué es FaaS (Function as a Service) en el contexto de Cloud Computing?

    - ( ) Un servicio que ofrece firewalls virtuales.
    - (x) Un modelo que permite ejecutar código en respuesta a eventos sin gestionar servidores (serverless).
    - ( ) Un tipo de almacenamiento de archivos en la nube.
    - ( ) Una plataforma para desplegar bases de datos como servicio.

87. El comando `umount /mnt/midisco` se utiliza para:

    - ( ) Formatear el dispositivo montado en `/mnt/midisco`.
    - (x) Desmontar el sistema de archivos que está actualmente montado en el directorio `/mnt/midisco`.
    - ( ) Verificar la integridad del sistema de archivos en `/mnt/midisco`.
    - ( ) Crear el directorio `/mnt/midisco` si no existe.

88. ¿Cuál de los siguientes NO es un componente de LVM según el diagrama de las transparencias?

    - ( ) Physical Volume
    - ( ) Volume Group
    - ( ) Logical Volume
    - (x) RAID Array

89. Si se modifica la `PS1` (variable del prompt de Bash) en el archivo `.bashrc`, ¿cuándo surten efecto los cambios?

    - ( ) Inmediatamente en todas las terminales abiertas.
    - ( ) Después de reiniciar el sistema operativo.
    - (x) Al abrir una nueva terminal o al ejecutar `source ~/.bashrc` en una terminal existente.
    - ( ) Solo si se ejecuta el comando `export PS1` manualmente cada vez.

90. ¿Qué es Docker en el contexto de los contenedores, según se menciona en las transparencias?

    - ( ) Un tipo de hipervisor para máquinas virtuales.
    - (x) Una plataforma y herramienta para crear, desplegar y ejecutar aplicaciones en contenedores.
    - ( ) Un sistema operativo ligero específico para contenedores.
    - ( ) Un protocolo de red para la comunicación entre contenedores.

91. En VirtualBox, ¿cuál es la diferencia fundamental entre un "Snapshot" y "Clonar" una máquina virtual?

    - ( ) Snapshot crea una nueva MV independiente, Clonar guarda un estado.
    - (x) Snapshot guarda un estado de la MV actual para revertir, Clonar crea una copia completa e independiente de la MV.
    - ( ) Snapshot es para MVs Linux y Clonar para MVs Windows.
    - ( ) No hay diferencia funcional, son sinónimos.

92. ¿Para qué se utiliza el comando `ping -c 4 google.com`?

    - ( ) Para copiar 4 archivos desde google.com.
    - (x) Para enviar 4 paquetes ICMP Echo Request a google.com y medir la respuesta.
    - ( ) Para establecer una conexión SSH con google.com durante 4 segundos.
    - ( ) Para mostrar la configuración de red de google.com 4 veces.

93. ¿Qué representa `ansible_host` en un archivo de inventario de Ansible?

    - ( ) El nombre del playbook a ejecutar.
    - ( ) El usuario con el que Ansible se conectará al host.
    - (x) La dirección IP o el nombre DNS del host gestionado al que Ansible debe conectarse.
    - ( ) El sistema operativo del host gestionado.

94. ¿Cuál es un riesgo de configurar `PermitRootLogin yes` en `sshd_config` sin otras medidas de seguridad?

    - ( ) El servicio SSHD podría no iniciarse.
    - (x) Aumenta la superficie de ataque, ya que permite intentos de inicio de sesión directos como root, que es un objetivo común.
    - ( ) Impide que otros usuarios puedan conectarse por SSH.
    - ( ) Reduce el rendimiento de las conexiones SSH.

95. El comando `firewall-cmd --list-services` muestra:

    - ( ) Todos los servicios instalados en el sistema.
    - (x) Los servicios que están actualmente permitidos a través del firewall en la zona por defecto (en tiempo de ejecución).
    - ( ) Los puertos abiertos manualmente en el firewall.
    - ( ) Los servicios que se iniciarán automáticamente al arrancar el sistema.

96. ¿Qué ventaja principal ofrecen los contenedores sobre las máquinas virtuales en términos de uso de recursos?

    - ( ) Mayor aislamiento del hardware.
    - (x) Son más ligeros y tienen un menor overhead porque comparten el kernel del SO anfitrión.
    - ( ) Permiten ejecutar diferentes sistemas operativos (Windows en host Linux) con mayor facilidad.
    - ( ) No requieren un sistema operativo anfitrión.

97. ¿Cuál es la diferencia entre un "RAID por Software" y un "RAID por Hardware"?

    - ( ) El RAID por software usa discos SSD y el de hardware HDD.
    - (x) El RAID por software es gestionado por el SO y consume recursos del sistema; el RAID por hardware utiliza una controladora dedicada.
    - ( ) El RAID por hardware es siempre más lento pero más seguro.
    - ( ) El RAID por software no permite niveles como RAID 5.

98. Para mover el contenido del directorio `/var` a un nuevo volumen LVM montado en `/mnt/nuevo_var` preservando atributos, ¿qué opción es adecuada para el comando `cp`?

    - ( ) cp -r /var/* /mnt/nuevo_var
    - (x) cp -a /var/* /mnt/nuevo_var
    - ( ) cp --move /var/* /mnt/nuevo_var
    - ( ) cp -link /var/* /mnt/nuevo_var

99. En el contexto del temario, ¿para qué se configura el `prompt` de la shell de una manera específica en las máquinas virtuales de prácticas?

    - ( ) Para que los comandos se ejecuten más rápido.
    - (x) Para facilitar la identificación del usuario, máquina, hora y directorio en las capturas de pantalla entregadas.
    - ( ) Para reducir el espacio que ocupa el prompt en la pantalla.
    - ( ) Para habilitar funcionalidades avanzadas de autocompletado.

100. Si un Volume Group (VG) en LVM se queda sin espacio, ¿qué se podría hacer para ampliarlo si se dispone de un nuevo disco o partición?

    - ( ) Crear un nuevo VG y mover todos los LVs al nuevo VG.
    - ( ) Formatear el VG existente para liberar espacio.
    - (x) Inicializar el nuevo disco/partición como un Physical Volume (PV) y luego añadir ese PV al Volume Group existente usando `vgextend`.
    - ( ) Reducir el tamaño de los Logical Volumes existentes para hacer espacio.

101. ¿Cuál es el comando correcto en un sistema basado en DNF (como Rocky Linux) para instalar tanto el servidor como el cliente SSH?

    - ( ) `sudo yum install openssh-all`
    - (x) `sudo dnf install -y openssh-server openssh-clients`
    - ( ) `sudo apt-get install openssh`
    - ( ) `sudo dnf setup ssh --server --client`

102. ¿Cuál de las siguientes configuraciones de la variable `PS1` en bash mostraría el nombre de usuario, el hostname, la hora actual (HH:MM:SS) y el directorio de trabajo actual, seguido de `$` o `#`?

    - ( ) `PS1=’\U@\H:\t:\w\$ ’`
    - (x) `PS1=’\u@\h:\t:\w\$ ’`
    - ( ) `PS1=’\user@\host:\time:\pwd\$ ’`
    - ( ) `PS1=’\h@\u:\T:\W\$ ’`

103. En el contexto de la configuración de red de una máquina virtual, ¿cuál es uno de los propósitos principales de NAT (Network Address Translation)?

    - ( ) Aislar completamente la máquina virtual de cualquier red externa.
    - (x) Permitir que la máquina virtual acceda a recursos en Internet utilizando la dirección IP de la máquina anfitriona.
    - ( ) Asignar múltiples direcciones IP públicas a una única máquina virtual.
    - ( ) Mejorar la velocidad de transferencia de archivos entre la máquina virtual y el anfitrión.

104. ¿Cuál es la característica principal de RAID 0 (Striping)?

    - ( ) Duplica los datos en dos o más discos para redundancia.
    - ( ) Distribuye los datos y la paridad entre tres o más discos.
    - (x) Divide los datos en bloques y los distribuye entre varios discos para mejorar el rendimiento, pero sin redundancia.
    - ( ) Utiliza un disco dedicado para almacenar la información de paridad.

105. ¿Cuál es la principal ventaja de RAID 1 (Mirroring)?

    - ( ) Maximiza el espacio de almacenamiento disponible utilizando la capacidad total de todos los discos.
    - ( ) Ofrece el mejor rendimiento de escritura en comparación con otros niveles de RAID.
    - (x) Proporciona redundancia duplicando los datos en dos o más discos, de modo que si un disco falla, los datos no se pierden.
    - ( ) Permite la recuperación de datos utilizando información de paridad distribuida.

106. ¿Cuál es el comando `mdadm` para crear un arreglo RAID 0 (striping) con el nombre `/dev/md0` utilizando dos discos, por ejemplo, `/dev/sdX` y `/dev/sdY`?

    - ( ) `mdadm --create --verbose /dev/md0 --level=1 --raid-devices=2 /dev/sdX /dev/sdY`
    - ( ) `mdadm --build /dev/md0 --level=0 --raid-devices=2 /dev/sdX /dev/sdY`
    - (x) `mdadm --create --verbose /dev/md0 --level=0 --raid-devices=2 /dev/sdX /dev/sdY`
    - ( ) `mdadm --add /dev/md0 --raid-devices=2 /dev/sdX /dev/sdY --level=0`

107. ¿Cuál es el comando `mdadm` correcto para crear un arreglo RAID 1 (mirroring) llamado `/dev/md0` con dos dispositivos, como `/dev/sdX` y `/dev/sdY`?

    - (x) `mdadm --create --verbose /dev/md0 --level=1 --raid-devices=2 /dev/sdX /dev/sdY`
    - ( ) `mdadm --assemble /dev/md0 --level=1 --raid-devices=2 /dev/sdX /dev/sdY`
    - ( ) `mdadm --create /dev/md0 --level=0 --mirror --raid-devices=2 /dev/sdX /dev/sdY`
    - ( ) `mdadm --new /dev/md0 --level=1 --devices=2 /dev/sdX /dev/sdY`

108. Para crear un arreglo RAID 5 llamado `/dev/md0` utilizando tres discos (`/dev/sdX`, `/dev/sdY`, `/dev/sdZ`), ¿cuál sería el comando `mdadm` apropiado?

    - (x) `mdadm --create --verbose /dev/md0 --level=5 --raid-devices=3 /dev/sdX /dev/sdY /dev/sdZ`
    - ( ) `mdadm --build /dev/md0 --level=5 --raid-disks=3 /dev/sdX /dev/sdY /dev/sdZ`
    - ( ) `mdadm --create --verbose /dev/md0 --level=parity --raid-devices=3 /dev/sdX /dev/sdY /dev/sdZ`
    - ( ) `mdadm --init /dev/md0 --type=5 --devices=3 /dev/sdX /dev/sdY /dev/sdZ`

109. ¿Qué comando se utiliza comúnmente en Linux para verificar el estado actual de los arreglos RAID gestionados por software (mdadm)?

    - ( ) `mdadm --detail /proc/mdstat`
    - ( ) `cat /dev/mdstat`
    - ( ) `ls /proc/raid/status`
    - (x) `cat /proc/mdstat`

110. Si necesitas detener un arreglo RAID activo, por ejemplo `/dev/md0`, ¿qué comando `mdadm` usarías?

    - ( ) `mdadm --remove /dev/md0`
    - ( ) `mdadm --fail /dev/md0 && mdadm --delete /dev/md0`
    - (x) `mdadm --stop /dev/md0`
    - ( ) `mdadm --deactivate /dev/md0`

111. En el comando `mdadm --create --verbose /dev/md0 ...`, ¿cuál es el propósito de la opción `--verbose`?

    - ( ) Verificar la integridad de los discos antes de crear el RAID.
    - (x) Mostrar información más detallada sobre el proceso de creación del RAID.
    - ( ) Establecer el nivel de RAID en modo "verbose" para mejor rendimiento.
    - ( ) Crear un volumen virtual además del arreglo RAID.

112. ¿Para qué se utiliza el comando `sudo systemctl isolate rescue.target` en un sistema Linux que utiliza systemd?

    - ( ) Para reiniciar el sistema en modo seguro.
    - ( ) Para apagar el sistema inmediatamente.
    - (x) Para cambiar al modo de mantenimiento o recuperación del sistema.
    - ( ) Para aislar los procesos de un usuario específico.

113. Si se desea volver al modo de operación normal multiusuario desde el modo de rescate en un sistema systemd, ¿qué comando se utilizaría?

    - ( ) `sudo systemctl isolate default.target`
    - ( ) `sudo systemctl isolate graphical.target`
    - (x) `sudo systemctl isolate multi-user.target`
    - ( ) `sudo systemctl reboot --target=multi-user`

114. En la jerarquía estándar del sistema de archivos de Linux, ¿cuál es la función principal del directorio `/etc`?

    - ( ) Contener los directorios personales de los usuarios.
    - ( ) Almacenar ejecutables esenciales para todos los usuarios.
    - ( ) Ser el directorio raíz que contiene todos los demás directorios.
    - (x) Almacenar los archivos de configuración del sistema.

115. ¿Cuál de los siguientes directorios en Linux está destinado a almacenar datos variables como registros (logs) y colas de impresión, que pueden crecer con el tiempo?

    - ( ) `/bin`
    - ( ) `/home`
    - (x) `/var`
    - ( ) `/root`

116. ¿Cuál de los siguientes NO es un sistema de archivos comúnmente soportado y utilizado en Linux?

    - ( ) ext4
    - ( ) XFS
    - ( ) Btrfs
    - (x) NTFS (de forma nativa con todas las funcionalidades y rendimiento de Windows)

117. Considerando la secuencia de comandos LVM: 1. `sudo pvcreate /dev/md0`, 2. `sudo vgcreate vg_datos /dev/md0`, 3. `sudo lvcreate -L 900M -n lv_datos vg_datos`. ¿Cuál es el propósito del segundo comando (`sudo vgcreate vg_datos /dev/md0`)?

    - ( ) Inicializar el dispositivo `/dev/md0` como un volumen físico (Physical Volume).
    - ( ) Crear un volumen lógico llamado `lv_datos` de 900MB.
    - (x) Crear un grupo de volúmenes (Volume Group) llamado `vg_datos` utilizando el volumen físico `/dev/md0`.
    - ( ) Formatear el dispositivo `/dev/md0` para su uso con LVM.

118. ¿Cuál es el propósito de la siguiente línea en el archivo `/etc/fstab`: `/dev/mapper/raid1-rvar /var ext4 defaults 0 0`?

    - ( ) Crear un nuevo sistema de archivos ext4 en `/dev/mapper/raid1-rvar`.
    - (x) Montar automáticamente el dispositivo `/dev/mapper/raid1-rvar` (formateado con ext4) en el directorio `/var` durante el arranque del sistema.
    - ( ) Realizar una copia de seguridad del directorio `/var` en `/dev/mapper/raid1-rvar`.
    - ( ) Establecer los permisos por defecto para el directorio `/var`.

119. En la gestión de `iptables`, ¿qué acción realiza el comando `iptables -L`?

    - ( ) Cargar un nuevo conjunto de reglas desde un archivo.
    - (x) Listar (mostrar) las reglas actuales del firewall.
    - ( ) Eliminar todas las reglas actuales (flush).
    - ( ) Guardar las reglas actuales en un archivo de configuración.

120. Si se utiliza el comando `iptables -F`, ¿qué sucederá con la configuración del firewall?

    - ( ) Se mostrarán todas las reglas de la cadena FORWARD.
    - ( ) Se forzará la recarga de las reglas desde el archivo de configuración.
    - (x) Se eliminarán (flush) todas las reglas de todas las cadenas.
    - ( ) Se filtrarán los paquetes basándose en una nueva política.

121. ¿Para qué se utiliza principalmente la herramienta `nmap` en la administración de servidores y redes?

    - ( ) Para monitorizar el tráfico de red en tiempo real.
    - ( ) Para configurar las reglas del firewall del sistema.
    - (x) Para escanear redes, descubrir hosts y verificar puertos abiertos y servicios.
    - ( ) Para gestionar las actualizaciones de software del sistema.

122. Al configurar el servicio SSHD, ¿cuál es el efecto de establecer la directiva `PermitRootLogin no` en el archivo `sshd_config`?

    - ( ) Permite el acceso del usuario root solo mediante clave pública.
    - ( ) Deshabilita completamente el servicio SSHD.
    - (x) Impide que el usuario root inicie sesión directamente a través de SSH.
    - ( ) Requiere que el usuario root cambie su contraseña en el próximo inicio de sesión SSH.

123. ¿Por qué se podría cambiar el puerto predeterminado de SSH (22) a otro valor, como `Port 2222`, en la configuración del servidor SSHD?

    - ( ) Para aumentar la velocidad de las conexiones SSH.
    - (x) Para reducir la exposición a ataques automatizados y escaneos dirigidos al puerto estándar.
    - ( ) Para permitir múltiples conexiones SSH simultáneas en diferentes puertos.
    - ( ) Porque el puerto 22 está obsoleto y es inseguro.

124. En el contexto de SSH, ¿cuál es la principal diferencia entre criptografía simétrica y asimétrica?

    - ( ) La simétrica usa dos claves (pública y privada) y la asimétrica usa una sola clave compartida.
    - ( ) La simétrica es más lenta pero más segura; la asimétrica es más rápida pero menos segura.
    - (x) La simétrica usa la misma clave para cifrar y descifrar, mientras que la asimétrica usa un par de claves (pública para cifrar o verificar firma, privada para descifrar o firmar).
    - ( ) SSH solo utiliza criptografía simétrica para toda la comunicación.

125. ¿Cuál es el propósito del comando `ssh-keygen -t rsa -b 4096`?

    - ( ) Generar un certificado SSL para un servidor web.
    - (x) Crear un par de claves SSH (pública y privada) utilizando el algoritmo RSA con una longitud de 4096 bits.
    - ( ) Encriptar un archivo usando RSA con una clave de 4096 bits.
    - ( ) Configurar el agente SSH para que use claves RSA de 4096 bits.

126. ¿Qué función principal realiza el comando `ssh-copy-id usuario@servidor`?

    - ( ) Copia la identidad (ID) de un servidor a otro para sincronización.
    - ( ) Crea un nuevo usuario en el servidor remoto con el mismo ID que el usuario local.
    - (x) Copia la clave pública SSH del usuario local al archivo `authorized_keys` del usuario especificado en el servidor remoto, permitiendo el inicio de sesión sin contraseña.
    - ( ) Verifica la identidad del servidor remoto y la añade al archivo `known_hosts` local.

127. Si se cambia el puerto de SSH a 2222 y SELinux está activo, ¿qué comando se utiliza para permitir este nuevo puerto para el servicio SSH en SELinux?

    - ( ) `sudo selinux port -a -t ssh_port_type -p tcp 2222`
    - (x) `sudo semanage port -a -t ssh_port_t -p tcp 2222`
    - ( ) `sudo setsebool -P ssh_port_tcp 2222 on`
    - ( ) `sudo audit2allow -a -M ssh_port_2222`

128. ¿Qué comando usarías para ver los logs del demonio SSHD (`sshd`) con el fin de diagnosticar problemas, mostrando información extendida?

    - ( ) `cat /var/log/sshd.log`
    - ( ) `dmesg | grep sshd`
    - ( ) `sudo journalctl -u sshd.service --all`
    - (x) `sudo journalctl -xeu sshd`

129. Si el servidor SSH está escuchando en un puerto no estándar (ej. 2222), ¿cómo se especificaría este puerto al usar `ssh-copy-id` para copiar una clave pública?

    - ( ) `ssh-copy-id usuario@IP_del_Servidor:2222`
    - ( ) `ssh-copy-id --port 2222 usuario@IP_del_Servidor`
    - (x) `ssh-copy-id -p 2222 usuario@IP_del_Servidor`
    - ( ) `ssh-copy-id usuario@IP_del_Servidor -P 2222`

130. Según el desarrollo del ejercicio de Ansible, ¿cuándo es más apropiado usar comandos Ad-Hoc de Ansible en lugar de playbooks?

    - ( ) Para configuraciones complejas y reutilizables que deben aplicarse a muchos servidores.
    - (x) Para tareas rápidas y únicas, como verificar el estado de un servicio o copiar un archivo a múltiples servidores, donde la reproducibilidad no es la principal preocupación.
    - ( ) Siempre que se necesite idempotencia en las operaciones.
    - ( ) Para definir la orquestación de procesos manuales en un orden definido.

131. En las variables de Ansible `ssh_pub_key_admin: "{{ lookup('file', 'claves/id_rsa_admin.pub') }}"`, ¿qué función realiza `lookup('file', ...)`?

    - ( ) Crea un nuevo archivo llamado `id_rsa_admin.pub` en el directorio `claves/`.
    - ( ) Busca un archivo en un repositorio remoto y lo descarga.
    - (x) Lee el contenido del archivo especificado (`claves/id_rsa_admin.pub`) y lo asigna como valor a la variable.
    - ( ) Verifica la existencia del archivo y devuelve `true` o `false`.

132. En la tarea de Ansible: `- name: Crear usuario {{ item.nombre }} user: name: "{{ item.nombre }}" groups: wheel ... loop: "{{ usuarios_extra }}"` ¿Cómo funciona la directiva `loop` junto con `item`?

    - ( ) `loop` define un contador y `item` es el valor actual del contador.
    - (x) La tarea se ejecuta una vez para cada elemento en la lista `usuarios_extra`, y `item` representa el elemento actual de la lista en cada iteración.
    - ( ) `item` es una variable global que debe definirse antes del bucle.
    - ( ) `loop` espera una condición y `item` almacena el resultado de la condición.

133. En un archivo de inventario de Ansible como `hosts.ini`, ¿qué significa la sección `[servidores:vars]` seguida de `ansible_user=ismMV01`?

    - ( ) Define un nuevo grupo llamado `vars` dentro del grupo `servidores`.
    - (x) Establece variables específicas para todos los hosts que pertenecen al grupo `servidores`, indicando que el usuario para la conexión SSH será `ismMV01`.
    - ( ) Es un comentario que Ansible ignora.
    - ( ) Indica que las variables para el grupo `servidores` se cargarán desde un archivo llamado `ansible_user_ismMV01.yml`.

134. ¿Cuál es el propósito de `--ask-become-pass` en el comando `ansible-playbook -i hosts.ini playbook.yml --ask-pass --ask-become-pass`?

    - ( ) Solicitar la contraseña para la conexión SSH (equivalente a `--ask-pass`).
    - (x) Solicitar la contraseña para la escalada de privilegios (por ejemplo, para `sudo`).
    - ( ) Preguntar si se desea convertirse en el usuario root.
    - ( ) Omitir la solicitud de contraseña para la escalada de privilegios si ya se proporcionó una para SSH.

135. En un playbook de Ansible, ¿qué efecto tiene la directiva `become: true` a nivel de play o tarea?

    - ( ) Hace que el playbook se ejecute más rápidamente.
    - (x) Indica que las tareas se ejecutarán con privilegios elevados (por ejemplo, como root usando `sudo`).
    - ( ) Activa el modo de depuración detallada para el playbook.
    - ( ) Confirma que el usuario que ejecuta el playbook es el propietario del sistema.

136. ¿Cuál es el propósito general del módulo `lineinfile` de Ansible, como se usa en la tarea "Permitir acceso root por contraseña temporalmente"?

    - ( ) Añadir múltiples líneas al final de un archivo.
    - (x) Asegurar que una línea específica exista en un archivo, o reemplazar una línea existente que coincida con una expresión regular, o añadirla si no existe.
    - ( ) Leer una línea específica de un archivo y guardarla en una variable.
    - ( ) Eliminar todas las líneas que coincidan con una expresión regular de un archivo.

137. En Ansible, ¿cómo interactúan `notify` y `handlers`?

    - ( ) `notify` envía una notificación por correo electrónico y `handlers` procesa la respuesta.
    - (x) Si una tarea con una directiva `notify` resulta en un cambio, se le indica al `handler` con el mismo nombre que se ejecute al final del play.
    - ( ) `handlers` son tareas que se ejecutan siempre, y `notify` puede usarse para detener su ejecución.
    - ( ) `notify` es un módulo para enviar mensajes entre hosts, y `handlers` los recibe.

138. ¿Cuál es el propósito principal de la tarea de Ansible que utiliza el módulo `user` con los parámetros `name: "{{ admin_user }}"`, `groups: wheel`, `append: yes`, `shell: /bin/bash`, `state: present`?

    - ( ) Modificar la contraseña del usuario "admin".
    - (x) Asegurar que el usuario especificado por `admin_user` exista, pertenezca (adicionalmente) al grupo `wheel`, tenga `/bin/bash` como shell, y se cree su directorio home si no existe.
    - ( ) Eliminar al usuario "admin" del grupo `wheel`.
    - ( ) Comprobar si el usuario "admin" está presente y tiene `/bin/bash` como shell.

139. ¿Para qué se utiliza el módulo `authorized_key` de Ansible en la tarea "Añadir clave pública SSH para admin"?

    - ( ) Para generar un nuevo par de claves SSH para el usuario.
    - (x) Para gestionar (añadir o eliminar) las claves públicas SSH autorizadas para un usuario específico en el archivo `~/.ssh/authorized_keys`.
    - ( ) Para verificar la validez de una clave SSH pública.
    - ( ) Para definir la clave privada que Ansible usará para conectarse como ese usuario.

140. En una estructura de directorios de Ansible como la mostrada (`Primera_parte/` con subdirectorios `group_vars/`, `tasks/`, `claves/`), ¿cuál es el rol típico de `group_vars/all.yml`?

    - ( ) Contener el playbook principal que se va a ejecutar.
    - ( ) Almacenar tareas reutilizables que pueden ser incluidas en playbooks.
    - (x) Definir variables que se aplicarán a todos los hosts en el inventario.
    - ( ) Guardar las claves SSH privadas necesarias para la conexión.

141. Si Ansible configura la línea `PermitRootLogin prohibit-password` en `/etc/ssh/sshd_config`, ¿qué implicación tiene para el acceso SSH del usuario root?

    - ( ) El usuario root puede iniciar sesión usando contraseña, pero no con clave pública.
    - ( ) El inicio de sesión como root está completamente deshabilitado, sin importar el método.
    - (x) El usuario root solo puede iniciar sesión utilizando autenticación basada en claves públicas; el inicio de sesión con contraseña está deshabilitado.
    - ( ) Se le pedirá al usuario root que cambie su contraseña al primer intento de inicio de sesión.

142. En el playbook de Ansible, la línea `vars_files: - "../vars/{{ group_names[0] }}.yml"` intenta cargar variables. ¿Cuál podría ser una consideración importante o posible limitación al usar `{{ group_names[0] }}` para cargar archivos de variables destinados a ser específicos del host o de un grupo particular?

    - ( ) Asegura que siempre se carguen las variables más específicas del host.
    - (x) Si un host pertenece a múltiples grupos, `group_names[0]` podría no referirse consistentemente al grupo deseado para la especificidad de variables, dependiendo del orden interno de Ansible.
    - ( ) Este método es obsoleto y se prefiere `host_vars`.
    - ( ) `group_names[0]` siempre se refiere al grupo 'all'.

143. En la tarea de Ansible "Asegurar que Apache (httpd) está detenido...", ¿cuál es el propósito de la cláusula `when: web_package == "nginx"`?

    - ( ) Instalar Nginx si la variable `web_package` es "nginx".
    - (x) Ejecutar la tarea de detener Apache (httpd) únicamente en los hosts donde la variable `web_package` esté definida como "nginx".
    - ( ) Detener Nginx si la variable `web_package` es "nginx".
    - ( ) Establecer la variable `web_package` a "nginx" antes de ejecutar la tarea.

144. ¿Qué efecto tiene `ignore_errors: true` en una tarea de Ansible, como la utilizada al intentar detener un servicio que podría no estar instalado?

    - ( ) La tarea se omite por completo si se anticipa un error.
    - (x) Corrige automáticamente cualquier error que ocurra durante la ejecución de la tarea.
    - ( ) Permite que el playbook continúe su ejecución incluso si la tarea falla, tratando el fallo como una advertencia en lugar de un error fatal.
    - ( ) Muestra información de error más detallada.

145. La tarea de Ansible "Asegurar que el servicio {{ web_service }} está iniciado y habilitado" utiliza el módulo `service` con `state: started` y `enabled: true`. ¿Qué garantiza esta configuración?

    - ( ) Que el servicio solo se inicie si estaba previamente detenido.
    - (x) Que el servicio esté actualmente en ejecución y que también se inicie automáticamente en los futuros arranques del sistema.
    - ( ) Que el servicio se reinicie cada vez que se ejecuta el playbook.
    - ( ) Que el servicio esté habilitado para iniciar en el arranque, pero no necesariamente iniciado en el momento.

146. Al usar el módulo `firewalld` de Ansible con `state: enabled` y `immediate: yes` para abrir un puerto, ¿qué significa `immediate: yes`?

    - ( ) Que la regla de firewall se aplica solo temporalmente hasta el próximo reinicio.
    - (x) Que los cambios en la configuración del firewall se aplican al instante a la configuración activa sin necesidad de recargar todo el servicio firewalld.
    - ( ) Que la tarea se ejecutará inmediatamente al inicio del playbook, ignorando su orden.
    - ( ) Que se debe reiniciar firewalld inmediatamente después de aplicar la regla.

147. En la tarea "Crear una página de prueba para Apache", se utiliza el módulo `copy` con el parámetro `content` y se incluye `notify: Reiniciar Apache`. ¿Cuál es la función combinada de estos elementos?

    - ( ) Copia un archivo existente y luego notifica al administrador para que reinicie Apache.
    - (x) Crea un nuevo archivo en el destino con el texto especificado en `content`, y si este archivo cambia o se crea, se notifica al handler "Reiniciar Apache" para que se ejecute.
    - ( ) Verifica el contenido del archivo y, si coincide, reinicia Apache.
    - ( ) Notifica al handler "Reiniciar Apache" solo si el módulo `copy` falla.

148. En la sección de `handlers`, el handler "Reiniciar Apache" tiene una cláusula `when: web_package == "httpd"`. ¿Cuál es el propósito de esta condición dentro del handler?

    - ( ) El handler solo se definirá si `web_package` es "httpd".
    - (x) El handler, una vez notificado, solo ejecutará la acción de reinicio si la condición `web_package == "httpd"` es verdadera en el host donde se está ejecutando.
    - ( ) Solo se puede notificar a este handler desde tareas que también cumplan la condición `web_package == "httpd"`.
    - ( ) Establece `web_package` a "httpd" antes de reiniciar.

149. Un script de shell contiene la línea: `ansible-playbook -i inventory/hosts.ini playbooks/configurar_web.yml`. ¿Qué acción principal realiza este script?

    - ( ) Comprueba la sintaxis del playbook `configurar_web.yml`.
    - ( ) Edita el archivo de inventario `inventory/hosts.ini`.
    - (x) Ejecuta el playbook de Ansible llamado `configurar_web.yml` utilizando el archivo de inventario `inventory/hosts.ini`.
    - ( ) Crea un nuevo playbook llamado `configurar_web.yml`.

150. El comando `VBoxManage startvm srv1 --type headless` se utiliza en un script. ¿Cuál es su función?

    - ( ) Crear una nueva máquina virtual VirtualBox llamada "srv1" en modo sin interfaz gráfica.
    - ( ) Conectarse a la consola de la máquina virtual "srv1".
    - (x) Iniciar una máquina virtual VirtualBox existente llamada "srv1" sin mostrar una ventana de interfaz gráfica.
    - ( ) Mostrar el estado de la máquina virtual "srv1", indicando si tiene cabecera o no.

151. Después de iniciar máquinas virtuales, un script ejecuta `ansible all -i inventory/hosts.ini -m ping`. ¿Cuál es el objetivo principal de este comando en ese contexto?

    - ( ) Enviar paquetes ICMP para verificar la conectividad de red básica con los hosts.
    - (x) Verificar que Ansible pueda conectarse a todos los hosts definidos en el inventario, autenticarse y ejecutar un módulo simple (como el módulo ping, que prueba la capacidad de ejecución de Python).
    - ( ) Instalar el módulo ping de Ansible en todos los hosts.
    - ( ) Mostrar la latencia de red hacia cada uno de los hosts.

152. Analizando la tabla comparativa, si un equipo de desarrollo prioriza la ejecución de contenedores sin privilegios de root por defecto y busca minimizar la superficie de ataque eliminando procesos daemon en segundo plano, ¿cuál de las siguientes afirmaciones refleja con mayor precisión la elección de herramienta más adecuada según las características listadas?

    - ( ) Docker, debido a su madurez como motor de contenedores y su compatibilidad con Dockerfiles.
    - (x) Podman, ya que está diseñado para rootless y no requiere un daemon, alineándose con los requisitos.
    - ( ) Docker Compose, porque facilita la orquestación de múltiples contenedores, lo cual es esencial para la seguridad.
    - ( ) Cualquiera de las tres, ya que todas son compatibles con Dockerfiles y pueden ejecutar contenedores.

153. La tabla indica que Docker Compose "Usa Docker" como motor de contenedores y "Sí (usa Docker)" para el requisito de daemon, mientras que Docker tiene "Limitado" soporte rootless y Docker Compose "No". ¿Qué implicación funcional o de dependencia se deriva directamente de estas características para Docker Compose en relación con la ejecución rootless?

    - ( ) Docker Compose puede habilitar un modo rootless avanzado que Docker por sí solo no posee.
    - (x) Las capacidades rootless de Docker Compose están intrínsecamente limitadas o condicionadas por las del daemon de Docker subyacente del cual depende.
    - ( ) Docker Compose no necesita un daemon si se utiliza con Podman en lugar de Docker.
    - ( ) Docker Compose puede ejecutar contenedores rootless de forma nativa e independiente del motor Docker.

154. Considerando la característica "Ejecuta múltiples contenedores", Docker se describe como "No directamente", Docker Compose como "Sí, orquestación básica" y Podman como "Sí, con podman-compose". ¿Cuál es la inferencia más precisa sobre la capacidad de Docker (sin Compose) para gestionar aplicaciones multicontenedor complejas?

    - ( ) Docker no puede ejecutar más de un contenedor simultáneamente en un mismo host.
    - (x) Aunque Docker puede lanzar múltiples contenedores, carece de las herramientas declarativas integradas para definir, enlazar y gestionar el ciclo de vida de aplicaciones compuestas por varios servicios de forma simplificada, tarea para la cual se usa Docker Compose.
    - ( ) Podman es la única herramienta que permite la ejecución de múltiples contenedores a través de un archivo de composición.
    - ( ) Docker gestiona múltiples contenedores de forma más eficiente que Docker Compose pero requiere configuración manual avanzada.

155. Si un administrador de sistemas necesita desplegar una aplicación multicontenedor definida en un Dockerfile y un archivo `docker-compose.yml`, pero en un entorno que estrictamente prohíbe procesos daemon con privilegios elevados y prioriza el soporte nativo para contenedores rootless, ¿qué combinación de herramientas o ajustes sería la MENOS viable o implicaría mayores desafíos según la tabla?

    - ( ) Utilizar Podman junto con `podman-compose` para interpretar el archivo `docker-compose.yml`, aprovechando el diseño sin daemon y rootless de Podman.
    - ( ) Intentar ejecutar Docker en modo rootless (con sus limitaciones) y luego usar Docker Compose sobre esta instancia.
    - (x) Utilizar directamente Docker y Docker Compose en su configuración estándar, ya que el "No" en rootless para Docker Compose y la dependencia de un daemon de Docker son directamente incompatibles con los requisitos estrictos.
    - ( ) Reescribir la lógica de orquestación para Podman sin usar `podman-compose`, gestionando los contenedores individualmente con Podman.
