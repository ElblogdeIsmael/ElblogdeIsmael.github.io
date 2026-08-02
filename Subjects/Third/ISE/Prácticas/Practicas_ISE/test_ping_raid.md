# Test Interactivo: Bloque 1 - SO y Servicios

* **Autor:** Ismael Sallami Moreno
* **Titulación:** Doble Grado en Ingeniería Informática y ADE

1. ¿Qué tecnología permite agrupar varios dispositivos de almacenamiento creando un nuevo dispositivo virtual con capacidades extendidas? [cite: 79]

    - (x) RAID
    - ( ) LVM
    - ( ) SSH
    - ( ) NAT

2. En LVM, ¿cuál es el componente que representa los dispositivos de almacenamiento físico como discos duros? [cite: 594]

    - ( ) Logical Volume (LV)
    - ( ) Volume Group (VG)
    - (x) Physical Volume (PV)
    - ( ) File System (FS)

3. ¿Qué nivel de RAID es conocido como "Mirroring" y duplica los datos en dos o más discos? [cite: 193, 615]

    - ( ) RAID 0
    - (x) RAID 1
    - ( ) RAID 5
    - ( ) RAID 10

4. ¿Cuál es el comando utilizado en Rocky Linux para gestionar el firewall desde la línea de comandos? [cite: 90, 235]

    - ( ) iptables
    - ( ) ufw
    - (x) firewall-cmd
    - ( ) nmap

5. ¿Qué comando se utiliza para verificar la conectividad de red con otro host enviando paquetes ICMP Echo Request?

    - ( ) ssh
    - ( ) telnet
    - (x) ping
    - ( ) scp

6. El servicio SSH (SSHD) por defecto utiliza el puerto: [cite: 715]

    - ( ) 80
    - (x) 22
    - ( ) 443
    - ( ) 21

7. En la configuración de red de una máquina virtual en VirtualBox, ¿qué modo de red permite la comunicación con el equipo Anfitrión y otras posibles máquinas virtuales, pero no necesariamente con Internet directamente? [cite: 52, 13]

    - ( ) NAT
    - ( ) Bridge (Adaptador Puente)
    - (x) Host-Only (Solo-anfitrión)
    - ( ) Red Interna

8. ¿Qué comando se utiliza para crear un Physical Volume (PV) en un sistema LVM? [cite: 603]

    - ( ) vgcreate
    - ( ) lvcreate
    - (x) pvcreate
    - ( ) mkfs

9. ¿Cuál es la principal desventaja de RAID 0 (Striping)? [cite: 191]

    - ( ) Coste elevado de almacenamiento.
    - ( ) Bajo rendimiento en escritura.
    - (x) Si un disco falla, se pierde toda la información.
    - ( ) Requiere un mínimo de 3 discos.

10. Para hacer permanente una regla añadida con `firewall-cmd` (por ejemplo, abrir un servicio), ¿qué opción se debe utilizar junto con `--add-service`? [cite: 240]

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
