<!-- Autor: Ismael Sallami Moreno -->
# Cuestionario Ingeniería de Servidores
<!-- Bloque 1 -->

1. ¿Qué tecnología permite agrupar varios dispositivos de almacenamiento creando un nuevo dispositivo virtual con capacidades extendidas?
    - (x) RAID.
    - ( ) LVM.
    - ( ) SSH.
    - ( ) NAT.

2. En LVM, ¿cuál es el componente que representa los dispositivos de almacenamiento físico como discos duros?
    - ( ) Logical Volume (LV).
    - ( ) Volume Group (VG).
    - (x) Physical Volume (PV).
    - ( ) File System (FS).

3. ¿Qué nivel de RAID es conocido como "Mirroring" y duplica los datos en dos o más discos?
    - ( ) RAID 0.
    - (x) RAID 1.
    - ( ) RAID 5.
    - ( ) RAID 10.

4. ¿Cuál es el comando utilizado en Rocky Linux para gestionar el firewall desde la línea de comandos?
    - ( ) iptables.
    - ( ) ufw.
    - (x) firewall-cmd.
    - ( ) nmap.

5. ¿Qué comando se utiliza para verificar la conectividad de red con otro host enviando paquetes ICMP Echo Request?
    - ( ) ssh.
    - ( ) telnet.
    - (x) ping.
    - ( ) scp.

6. El servicio SSH (SSHD) por defecto utiliza el puerto:
    - ( ) 80.
    - (x) 22.
    - ( ) 443.
    - ( ) 21.

7. En la configuración de red de una máquina virtual en VirtualBox, ¿qué modo de red permite la comunicación con el equipo Anfitrión y otras posibles máquinas virtuales, pero no necesariamente con Internet directamente?
    - ( ) NAT.
    - ( ) Bridge (Adaptador Puente).
    - (x) Host-Only (Solo-anfitrión).
    - ( ) Red Interna.

8. ¿Qué comando se utiliza para crear un Physical Volume (PV) en un sistema LVM?
    - ( ) vgcreate.
    - ( ) lvcreate.
    - (x) pvcreate.
    - ( ) mkfs.

9. ¿Cuál es la principal desventaja de RAID 0 (Striping)?
    - ( ) Coste elevado de almacenamiento.
    - ( ) Bajo rendimiento en escritura.
    - (x) Si un disco falla, se pierde toda la información.
    - ( ) Requiere un mínimo de 3 discos.

10. Para hacer permanente una regla añadida con `firewall-cmd` (por ejemplo, abrir un servicio), ¿qué opción se debe utilizar junto con `--add-service`?
    - ( ) --reload.
    - (x) --permanent.
    - ( ) --now.
    - ( ) --save.

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
 - ( ) sudo systemctl isolate default.target
 - ( ) sudo systemctl isolate graphical.target
 - (x) sudo systemctl isolate multi-user.target
 - ( ) sudo systemctl reboot --target=multi-user

114. En la jerarquía estándar del sistema de archivos de Linux, ¿cuál es la función principal del directorio `/etc`?
 - ( ) Contener los directorios personales de los usuarios.
 - ( ) Almacenar ejecutables esenciales para todos los usuarios.
 - ( ) Ser el directorio raíz que contiene todos los demás directorios.
 - (x) Almacenar los archivos de configuración del sistema.

115. ¿Cuál de los siguientes directorios en Linux está destinado a almacenar datos variables como registros (logs) y colas de impresión, que pueden crecer con el tiempo?
 - ( ) /bin
 - ( ) /home
 - (x) /var
 - ( ) /root

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
 - ( ) sudo selinux port -a -t ssh_port_type -p tcp 2222
 - (x) sudo semanage port -a -t ssh_port_t -p tcp 2222
 - ( ) sudo setsebool -P ssh_port_tcp 2222 on
 - ( ) sudo audit2allow -a -M ssh_port_2222

128. ¿Qué comando usarías para ver los logs del demonio SSHD (`sshd`) con el fin de diagnosticar problemas, mostrando información extendida?
 - ( ) cat /var/log/sshd.log
 - ( ) dmesg | grep sshd
 - ( ) sudo journalctl -u sshd.service --all
 - (x) sudo journalctl -xeu sshd

129. Si el servidor SSH está escuchando en un puerto no estándar (ej. 2222), ¿cómo se especificaría este puerto al usar `ssh-copy-id` para copiar una clave pública?
 - ( ) ssh-copy-id usuario@IP_del_Servidor:2222
 - ( ) ssh-copy-id --port 2222 usuario@IP_del_Servidor
 - (x) ssh-copy-id -p 2222 usuario@IP_del_Servidor
 - ( ) ssh-copy-id usuario@IP_del_Servidor -P 2222

130. Según el desarrollo del ejercicio de Ansible, ¿cuándo es más apropiado usar comandos Ad-Hoc de Ansible en lugar de playbooks?
 - ( ) Para configuraciones complejas y reutilizables que deben aplicarse a muchos servidores.
 - (x) Para tareas rápidas y únicas, como verificar el estado de un servicio o copiar un archivo a múltiples servidores, donde la reproducibilidad no es la principal preocupación.
 - ( ) Siempre que se necesite idempotencia en las operaciones.
 - ( ) Para definir la orquestación de procesos manuales en un orden definido.

131. En las variables de Ansible `ssh_pub_key_admin: "{{ lookup('file', 'claves/id_rsa_admin.pub') }}"`, ¿qué función realiza `lookup('file', ...)`?
 - ( ) Crea un nuevo archivo llamado `id_rsa_admin.pub` en el directorio `claves/`.
 - ( ) Busca un archivo en un repositorio remoto y lo descarga.
 - (x) Lee el contenido del archivo especificado (`claves/id_rsa_admin.pub`) y lo asigna como valor a la variable.
 - ( ) Verifica la existencia del archivo y devuelve true o false.

132. En la tarea de Ansible:
 ```
 - name: Crear usuario {{ item.nombre }}
   user:
     name: "{{ item.nombre }}"
     groups: wheel
     ...
   loop: "{{ usuarios_extra }}"
 ```
 ¿Cómo funciona la directiva `loop` junto con `item`?
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
 - ( ) Corrige automáticamente cualquier error que ocurra durante la ejecución de la tarea.
 - (x) Permite que el playbook continúe su ejecución incluso si la tarea falla, tratando el fallo como una advertencia en lugar de un error fatal.
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

| Característica                  | Docker         | Docker Compose         | Podman                  |
|----------------------------------|---------------|-----------------------|-------------------------|
| **Motor de contenedores**        | Sí            | Usa Docker            | Sí                      |
| **Ejecuta múltiples contenedores** | No directamente | Sí, orquestación básica | Sí, con podman-compose  |
| **Requiere daemon**              | Sí            | Sí (usa Docker)       | No                      |
| **Rootless**                     | Limitado      | No                    | Sí, por diseño          |
| **Compatible con Dockerfiles**   | Sí            | Sí                    | Sí                      |

<sub><b>Tabla:</b> Diferencias entre Docker, Docker Compose y Podman</sub>

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

<!-- Bloque 2 -->


156. ¿Cuál es la principal diferencia entre una máquina virtual (VM) y un contenedor Docker?
    - ( ) Las VMs son más ligeras que los contenedores.
    - ( ) Los contenedores virtualizan el hardware y las VMs el sistema operativo.
    - (x) Los contenedores comparten el kernel del SO anfitrión, mientras que cada VM tiene su propio SO guest completo.
    - ( ) Docker no permite el aislamiento de procesos, las VMs sí.

157. ¿Qué herramienta se utiliza para definir y ejecutar aplicaciones Docker de múltiples contenedores mediante un archivo YAML?
    - ( ) Dockerfile
    - ( ) Docker Swarm
    - (x) Docker Compose
    - ( ) Kubernetes

158. ¿Cuál es el comando de Docker para ejecutar una imagen llamada "hello-world"?
    - ( ) docker build hello-world
    - ( ) docker start hello-world
    - ( ) docker pull hello-world
    - (x) docker run hello-world

159. ¿Qué es un "benchmark" en el contexto de la ingeniería de servidores?
    - ( ) Un tipo de sistema de ficheros optimizado para rendimiento.
    - (x) Una prueba diseñada para medir el rendimiento de un sistema, componente o servicio.
    - ( ) Un protocolo de red para la transferencia rápida de datos.
    - ( ) Una herramienta de monitorización en tiempo real.

160. ¿Para qué sirve la herramienta Apache Benchmark (`ab`)?
    - ( ) Para realizar pruebas de carga y rendimiento sobre servidores DNS.
    - ( ) Para monitorizar el uso de CPU y memoria de un servidor Apache.
    - (x) Para mostrar cuántas peticiones por segundo es capaz de servir un servidor HTTP.
    - ( ) Para compilar y desplegar aplicaciones web en servidores Apache.

161. Apache JMeter es una aplicación diseñada principalmente para:
    - ( ) Gestionar logs del sistema.
    - (x) Probar la carga funcional y medir el rendimiento de diversos servicios.
    - ( ) Automatizar la configuración de servidores mediante playbooks.
    - ( ) Visualizar métricas de sistemas en dashboards.

162. En Docker, ¿qué es un `Dockerfile`?
    - ( ) Un contenedor en ejecución.
    - (x) Un archivo de texto que contiene todos los comandos necesarios para construir una imagen de Docker.
    - ( ) Un repositorio de imágenes Docker en la nube.
    - ( ) La configuración de red para un grupo de contenedores.

163. ¿Qué herramienta de monitorización clásica en Linux presenta una interfaz de texto para ver procesos y uso de recursos en tiempo real?
    - ( ) Grafana
    - ( ) Prometheus
    - (x) top (o htop)
    - ( ) JMeter

164. ¿Para qué se utiliza `cron` en un sistema Linux?
    - ( ) Para gestionar la memoria virtual del sistema.
    - (x) Para programar la ejecución de tareas periódicas de administración o mantenimiento.
    - ( ) Para monitorizar el tráfico de red en tiempo real.
    - ( ) Para compilar código fuente de aplicaciones.

165. ¿Cuál es la función principal de Prometheus en una pila de monitorización?
    - ( ) Visualizar los datos de telemetría en dashboards interactivos.
    - (x) Extraer (scraping), almacenar y gestionar información de monitorización como series temporales.
    - ( ) Generar carga de trabajo para pruebas de estrés.
    - ( ) Gestionar la rotación de archivos de logs del sistema.
  

166. ¿Qué herramienta se utiliza comúnmente junto con Prometheus para la visualización de métricas y la creación de dashboards?
    - ( ) JMeter
    - ( ) Docker Compose
    - (x) Grafana
    - ( ) Nagios

167. En el contexto de Docker, ¿qué significa `EXPOSE 3000` en un Dockerfile?
    - ( ) Mapea el puerto 3000 del contenedor al puerto 3000 del host.
    - ( ) Instala una aplicación que escucha en el puerto 3000.
    - (x) Informa a Docker que el contenedor escucha en el puerto 3000, pero no lo publica automáticamente.
    - ( ) Abre el puerto 3000 en el firewall del host.

168. ¿Qué es el "load average" que muestra el comando `top`?
    - ( ) La cantidad de memoria RAM utilizada por los procesos.
    - ( ) El porcentaje de tiempo que la CPU está inactiva.
    - (x) Un promedio de la carga del sistema (procesos en ejecución o esperando CPU) en los últimos 1, 5 y 15 minutos.
    - ( ) La velocidad de transferencia de datos de la red.

169. ¿Cuál es el propósito de `logrotate`?
    - ( ) Analizar el contenido de los archivos de log en busca de errores.
    - (x) Gestionar los archivos de log, rotándolos, comprimiéndolos y eliminando los antiguos para evitar que ocupen demasiado espacio.
    - ( ) Enviar notificaciones por correo electrónico cuando se generan logs críticos.
    - ( ) Escribir logs en un formato binario seguro.

170. ¿Qué comando se utiliza para consultar los logs del sistema gestionados por `systemd-journald`?
    - ( ) cat /var/log/messages
    - ( ) logread
    - (x) journalctl
    - ( ) dmesg

171. En JMeter, ¿qué es un "Thread Group" (Grupo de Hilos)?
    - ( ) Un conjunto de configuraciones por defecto para las peticiones HTTP.
    - (x) Un elemento que define el número de usuarios virtuales (hilos), el período de subida (ramp-up) y el número de iteraciones.
    - ( ) Un componente para visualizar los resultados de las pruebas en forma de árbol.
    - ( ) Un post-procesador para extraer datos de las respuestas.

172. ¿Qué es un "Exporter" en el contexto de Prometheus?
    - ( ) Una consulta escrita en PromQL para obtener métricas.
    - (x) Un software que expone métricas de un sistema o aplicación en un formato que Prometheus puede recolectar (scrape).
    - ( ) Un tipo de dashboard predefinido en Grafana.
    - ( ) La base de datos donde Prometheus almacena las series temporales.

173. La arquitectura de Microservicios implica:
    - ( ) Una única aplicación monolítica desplegada en varios servidores.
    - (x) Descomponer una aplicación en un conjunto de pequeños servicios independientes que se comunican mediante APIs.
    - ( ) Usar exclusivamente máquinas virtuales para cada componente de la aplicación.
    - ( ) Escribir toda la aplicación en un único lenguaje de programación para mayor cohesión.

174. ¿Qué ventaja ofrece Podman sobre Docker según se menciona en el temario?
    - ( ) Es más fácil de instalar en Windows.
    - (x) Permite ejecutar contenedores sin necesidad de un servicio demonio (daemonless) y con mejor soporte para rootless containers.
    - ( ) Tiene una interfaz gráfica de usuario integrada más avanzada (Docker Desktop).
    - ( ) Es la única herramienta compatible con Docker Compose.

175. En Grafana, al configurar Prometheus como "Datasource", ¿qué URL se utiliza si Grafana y Prometheus corren como servicios en el mismo `docker-compose.yml`?
    - ( ) http://localhost:9090
    - ( ) La IP pública del servidor anfitrión seguida del puerto de Prometheus.
    - (x) http://prometheus:9090 (usando el nombre del servicio definido en docker-compose.yml).
    - ( ) Se debe usar la IP interna del contenedor de Prometheus.

176. ¿Qué comando se utiliza para listar todas las imágenes Docker descargadas localmente?
    - ( ) docker ps -a
    - (x) docker images
    - ( ) docker list images
    - ( ) docker search

177. En un `docker-compose.yml`, ¿qué especifica la sección `ports: - "8080:80"` para un servicio?
    - ( ) Expone el puerto 8080 del contenedor al exterior.
    - (x) Mapea el puerto 80 del contenedor al puerto 8080 del host.
    - ( ) Mapea el puerto 8080 del contenedor al puerto 80 del host.
    - ( ) Indica que el servicio internamente usa los puertos 80 y 8080.

178. Phoronix Test Suite (PTS) es una plataforma para:
    - ( ) Desarrollar aplicaciones web interactivas.
    - (x) Gestionar y ejecutar un conjunto de benchmarks de rendimiento.
    - ( ) Monitorizar la seguridad de los contenedores Docker.
    - ( ) Automatizar el despliegue de microservicios.

179. En JMeter, ¿qué elemento se utiliza para simular que un usuario realiza una petición HTTP a un servidor?
    - ( ) Listener
    - ( ) Timer
    - (x) HTTP Request Sampler
    - ( ) Assertion

180. ¿Qué tipo de información se encuentra típicamente en `/proc/meminfo` en un sistema Linux?
    - ( ) Información detallada sobre los procesos en ejecución.
    - (x) Estadísticas sobre el uso de la memoria RAM y swap del sistema.
    - ( ) Configuración de las interfaces de red.
    - ( ) Logs de errores del kernel.

181. ¿Cuál es el propósito principal de Grafana en una pila de monitorización con Prometheus?
    - ( ) Recolectar las métricas directamente de los servicios (scraping).
    - ( ) Almacenar a largo plazo las series temporales de métricas.
    - (x) Proporcionar servicios de visualización (dashboards, paneles) y alertas sobre los datos de telemetría recolectados por Prometheus.
    - ( ) Definir los `exporters` para cada servicio a monitorizar.

182. En Prometheus, ¿qué es un `job_name` dentro de `scrape_configs` en el archivo `prometheus.yml`?
    - ( ) El nombre del dashboard de Grafana donde se mostrarán las métricas.
    - (x) Un identificador para un conjunto de `targets` (objetivos de scraping) que comparten una configuración común.
    - ( ) El tipo de métrica que se va a recolectar (counter, gauge, histogram).
    - ( ) El comando para iniciar el servicio de Prometheus.

183. ¿Qué comando se utiliza para editar el archivo crontab del usuario actual?
    - ( ) cron -e
    - ( ) crontab -l
    - (x) crontab -e
    - ( ) editcron

184. ¿Cuál es una de las principales ventajas de `htop` sobre `top`?
    - ( ) Consume menos recursos del sistema.
    - (x) Ofrece una interfaz de texto más interactiva y visualmente mejorada, con scroll y selección de procesos más fácil.
    - ( ) Solo muestra información de los procesos del usuario actual.
    - ( ) No requiere privilegios de superusuario para ejecutarse.

185. ¿Qué tipo de métrica de Prometheus es `http_requests_total` típicamente?
    - ( ) Gauge
    - ( ) Histogram
    - ( ) Summary
    - (x) Counter

186. En JMeter, si deseas extraer un valor de una respuesta JSON (por ejemplo, un token JWT), ¿qué tipo de Post-Procesador podrías usar?
    - ( ) CSV Data Set Config
    - ( ) HTTP Header Manager
    - (x) JSON Extractor o Regular Expression Extractor
    - ( ) Gaussian Random Timer

187. ¿Qué representa `scrape_interval: 5s` en la configuración global de `prometheus.yml`?
    - ( ) Prometheus almacena las métricas durante 5 segundos antes de descartarlas.
    - ( ) Grafana actualiza sus dashboards cada 5 segundos.
    - (x) Prometheus recolectará métricas de sus `targets` cada 5 segundos por defecto.
    - ( ) Las alertas de Prometheus se evaluarán cada 5 segundos.

188. ¿Cuál es una de las funciones de `docker compose up -d`?
    - ( ) Construye las imágenes pero no inicia los contenedores.
    - ( ) Inicia los servicios definidos en `docker-compose.yml` en primer plano mostrando los logs.
    - (x) Inicia los servicios definidos en `docker-compose.yml` en segundo plano (detached mode).
    - ( ) Detiene y elimina los contenedores, redes y volúmenes.

189. ¿Qué información se espera encontrar en el directorio `/var/log` de un sistema Linux?
    - ( ) Archivos de configuración del sistema.
    - ( ) Archivos binarios de los programas instalados.
    - (x) Archivos de registro (logs) del sistema operativo y de las aplicaciones.
    - ( ) Archivos temporales creados por los usuarios.

190. La función `rate(http_requests_total[5m])` en PromQL calcula:
    - ( ) El número total de peticiones HTTP en los últimos 5 minutos.
    - (x) La tasa de cambio promedio por segundo de un contador de peticiones HTTP en los últimos 5 minutos.
    - ( ) El tiempo promedio de respuesta de las peticiones HTTP en los últimos 5 minutos.
    - ( ) El percentil 95 de la duración de las peticiones HTTP en los últimos 5 minutos.

191. En la estructura de JMeter, bajo "Login Administradores", ¿qué parámetros se envían en la petición HTTP POST?
    - ( ) token y jwt
    - ( ) username y token
    - (x) login y password (con valores como ${login} y ${password})
    - ( ) auth_user y auth_pass

192. Para importar un dashboard predefinido en Grafana desde Grafana.com/dashboards, ¿qué se suele necesitar?
    - ( ) La URL completa del dashboard.
    - (x) El ID del dashboard o el archivo JSON del mismo.
    - ( ) Las credenciales del autor del dashboard.
    - ( ) Una suscripción de pago a Grafana Cloud.

193. El "Node Exporter" de Prometheus se utiliza para:
    - ( ) Exportar los dashboards de Grafana a formato JSON.
    - (x) Exponer métricas del hardware y del sistema operativo de un nodo Linux (CPU, memoria, disco, red).
    - ( ) Monitorizar aplicaciones específicas escritas en NodeJS.
    - ( ) Gestionar los nodos en un clúster de Kubernetes.

194. En el `docker-compose.yml` para Grafana y Prometheus, `depends_on: - prometheus` en la definición del servicio Grafana significa:
    - ( ) Que Grafana enviará sus métricas a Prometheus.
    - (x) Que Docker Compose iniciará el servicio Prometheus antes que el servicio Grafana.
    - ( ) Que Grafana y Prometheus deben usar la misma imagen base de Docker.
    - ( ) Que Prometheus depende de Grafana para su visualización.

195. ¿Qué es "stress" en el contexto de las pruebas de rendimiento en Linux?
    - ( ) Un tipo de configuración de firewall para alta carga.
    - (x) Una herramienta para generar carga artificial en componentes del sistema como CPU, memoria o E/S.
    - ( ) Un algoritmo de compresión de logs.
    - ( ) Una métrica específica que Prometheus recolecta por defecto.

196. En un Dockerfile, ¿qué instrucción se utiliza para especificar la imagen base a partir de la cual se construirá la nueva imagen?
 - ( ) COPY
 - ( ) RUN
 - (x) FROM
 - ( ) CMD

197. ¿Cuál es el propósito de la directiva `volumes` en un archivo `docker-compose.yml` al definir un servicio como Prometheus o Grafana, según el ejemplo del temario?
 - ( ) Especificar el tamaño máximo del disco que puede usar el contenedor.
 - (x) Mapear directorios o archivos del host a directorios dentro del contenedor para persistencia de datos o configuración.
 - ( ) Definir las redes a las que se conectará el contenedor.
 - ( ) Limitar el número de volúmenes que el contenedor puede crear.

198. ¿Qué herramienta se menciona en el temario para ejecutar benchmarks que está disponible como imagen Docker (phoronix/pts)?
 - ( ) Apache JMeter
 - ( ) Apache Benchmark (ab)
 - (x) Phoronix Test Suite
 - ( ) Sysbench

199. En JMeter, ¿para qué se utiliza un "CSV Data Set Config"?
 - ( ) Para exportar los resultados de la prueba a un archivo CSV.
 - (x) Para leer datos de un archivo CSV y utilizarlos como variables en las peticiones (ej. credenciales de usuario).
 - ( ) Para configurar el formato de los logs de JMeter.
 - ( ) Para generar gráficos a partir de datos CSV externos.

200. El comando `journalctl -f` en Linux se utiliza para:
 - ( ) Formatear el journal de systemd.
 - (x) Mostrar las entradas del journal de systemd en tiempo real (seguir el log).
 - ( ) Filtrar el journal por un servicio específico.
 - ( ) Exportar todo el journal a un archivo.

201. Al configurar Grafana con Prometheus, ¿qué se define como "Datasource"?
 - ( ) El archivo de configuración de Grafana.
 - ( ) Un panel específico dentro de un dashboard.
 - (x) La instancia de Prometheus de donde Grafana obtendrá los datos para visualizar.
 - ( ) El tipo de alerta que se configurará.

202. ¿Qué es PromQL?
 - ( ) Un lenguaje de scripting para automatizar tareas en Grafana.
 - (x) El lenguaje de consulta funcional de Prometheus utilizado para seleccionar y agregar datos de series temporales.
 - ( ) Un formato de archivo para exportar dashboards de Grafana.
 - ( ) Una biblioteca de Python para interactuar con la API de Prometheus.

203. En un archivo crontab, la expresión `*/5 * * * * /ruta/a/mi/script.sh` significa:
 - ( ) Ejecutar el script a las 5 de la mañana todos los días.
 - (x) Ejecutar el script cada 5 minutos.
 - ( ) Ejecutar el script el día 5 de cada mes.
 - ( ) Ejecutar el script 5 veces cada hora.

204. ¿Qué información muestra la columna `%CPU` en la salida del comando `top`?
 - ( ) El porcentaje de memoria RAM utilizada por el proceso.
 - ( ) La prioridad del proceso en la CPU.
 - (x) El porcentaje de tiempo de CPU utilizado por el proceso desde la última actualización.
 - ( ) El tiempo total de CPU que el proceso ha consumido desde que inició.

205. Si Prometheus no puede acceder a un `target` para hacer `scraping`, ¿qué estado mostrará típicamente para ese `target` en su interfaz web?
 - ( ) ACTIVE
 - ( ) UP
 - (x) DOWN
 - ( ) PENDING

206. En JMeter, ¿qué elemento se utiliza para manejar las credenciales de autenticación básica HTTP de forma global en el plan de pruebas?
 - ( ) Gaussian Random Timer
 - ( ) HTTP Request (dentro de Login Alumnos)
 - (x) HTTP Basic Auth (probablemente un HTTP Authorization Manager)
 - ( ) View Results Tree

207. La persistencia de datos en Grafana (dashboards, configuraciones) cuando se ejecuta en Docker se logra típicamente mediante:
 - ( ) La opción `SAVE_STATE=true` en el comando `docker run`.
 - (x) El uso de volúmenes Docker para mapear `/var/lib/grafana` del contenedor a un directorio en el host.
 - ( ) La configuración de `scrape_interval` en Prometheus.
 - ( ) Almacenando toda la configuración en el archivo `prometheus.yml`.

208. ¿Cuál es el propósito de un "Listener" como "View Results Tree" en JMeter?
 - ( ) Generar la carga de peticiones HTTP.
 - (x) Mostrar los resultados de las peticiones ejecutadas, incluyendo detalles de la petición y la respuesta.
 - ( ) Definir variables de usuario para el plan de pruebas.
 - ( ) Pausar la ejecución entre peticiones para simular el pensamiento del usuario.

209. En el archivo `docker-compose.yml` de ejemplo para Prometheus y Grafana, ¿qué puerto del host se mapea al puerto 3000 del contenedor Grafana?
 - ( ) 9090
 - (x) 3000
 - ( ) 4000
 - ( ) No se mapea, se accede directamente al 3000 del contenedor.

210. Al monitorizar un servidor Linux con Node Exporter y Prometheus, ¿qué tipo de información se puede visualizar en Grafana?
 - ( ) Únicamente el estado de los servicios SSHD y Apache.
 - ( ) Solo el contenido de los archivos de log del sistema.
 - (x) Métricas de uso de CPU, memoria, disco, red, carga del sistema y estado de servicios (si se configuran colectores adicionales).
 - ( ) La estructura de los playbooks de Ansible ejecutados en el servidor.

211. ¿Qué permite hacer la opción "Export for sharing externally" al compartir un dashboard en Grafana?
 - ( ) Enviar el dashboard por correo electrónico directamente desde Grafana.
 - (x) Generar un archivo JSON que contiene la definición del dashboard para poder importarlo en otra instancia de Grafana.
 - ( ) Publicar el dashboard en una URL pública accesible por cualquiera.
 - ( ) Crear una copia de seguridad del dashboard en la base de datos de Prometheus.

212. Si en JMeter se utiliza un "HTTP Authorization Manager" para configurar la autenticación básica, ¿qué información se suele proporcionar?
 - (x) La URL base, un nombre de usuario y una contraseña.
 - ( ) Solo un token JWT.
 - ( ) El path al archivo CSV con las credenciales.
 - ( ) Los certificados SSL del cliente y del servidor.

213. ¿Cuál es una ventaja de ejecutar Phoronix Test Suite dentro de un contenedor Docker, según el temario?
 - ( ) Permite modificar directamente el kernel del sistema anfitrión para optimizar los benchmarks.
 - ( ) Garantiza que los benchmarks se ejecuten más rápido que en la máquina local.
 - (x) Proporciona un entorno limpio, preconfigurado y aislado, mitigando problemas de dependencias o configuraciones locales.
 - ( ) No requiere conexión a internet para descargar los tests.

214. En el archivo `prometheus.yml`, la sección `static_configs` dentro de un `job_name` se utiliza para:
 - ( ) Definir dinámicamente los targets usando descubrimiento de servicios.
 - (x) Listar manualmente las direcciones y puertos de los `targets` que Prometheus debe monitorear.
 - ( ) Especificar las reglas de alerta para ese job.
 - ( ) Indicar el intervalo de scraping específico para ese job.

215. Para monitorizar el estado de servicios como SSHD y Apache Httpd (Activo/Inactivo) en Grafana usando Node Exporter, ¿qué métrica de Node Exporter (con el colector systemd habilitado) podría ser útil?
 - ( ) node_cpu_seconds_total
 - ( ) node_filesystem_avail_bytes
 - (x) node_systemd_unit_state (con labels como `name` y `state`)
 - ( ) process_cpu_seconds_total

216. ¿Qué comando de Docker se utiliza para detener un contenedor en ejecución sin eliminarlo?
 - ( ) docker rm [nombre_contenedor]
 - (x) docker stop [nombre_contenedor]
 - ( ) docker pause [nombre_contenedor]
 - ( ) docker kill [nombre_contenedor]

217. En el contexto del `docker-compose.yml` para la aplicación de JMeter, la directiva `build: ./nodejs` para el servicio `nodejs` significa:
 - ( ) Que se usará una imagen preexistente llamada `./nodejs` de Docker Hub.
 - (x) Que se debe construir una imagen para este servicio utilizando el Dockerfile que se encuentra en el directorio `./nodejs`.
 - ( ) Que el código fuente de la aplicación Node.js se encuentra en el directorio `./nodejs` del host.
 - ( ) Que se debe ejecutar el script `./nodejs` al iniciar el contenedor.

218. Según el temario, ¿cuál es una de las ventajas de la arquitectura de microservicios relacionada con la tecnología?
 - ( ) Reduce la complejidad de la comunicación entre servicios.
 - ( ) Obliga a usar el mismo lenguaje de programación para todos los servicios.
 - (x) Permite que cada servicio pueda utilizar su propio stack tecnológico, adaptándose mejor a sus necesidades específicas.
 - ( ) Simplifica la gestión de bases de datos monolíticas.

219. En JMeter, ¿qué función cumple un "HTTP Cookie Manager"?
 - ( ) Genera cookies aleatorias para cada petición.
 - (x) Almacena y envía cookies como lo haría un navegador web, permitiendo gestionar sesiones.
 - ( ) Elimina todas las cookies de las respuestas del servidor.
 - ( ) Valida que las cookies recibidas tengan el formato correcto.

220. ¿Qué indica el valor `wa` (I/O wait) en la línea de uso de CPU del comando `top`?
 - ( ) El porcentaje de CPU utilizado por procesos de usuario.
 - ( ) El porcentaje de CPU inactiva.
 - (x) El porcentaje de tiempo que la CPU estuvo esperando a que se completaran operaciones de entrada/salida.
 - ( ) El porcentaje de CPU consumido por procesos del kernel.

221. ¿Cuál es el puerto por defecto en el que Prometheus expone su propia interfaz web y métricas?
 - ( ) 3000
 - ( ) 8080
 - (x) 9090
 - ( ) 9100

222. Al importar un dashboard en Grafana usando un ID, ¿de dónde se obtiene típicamente ese dashboard?
 - ( ) Del sistema de archivos local.
 - (x) Del repositorio oficial de Grafana (Grafana.com/dashboards).
 - ( ) De la configuración de Prometheus.
 - ( ) Se genera automáticamente basado en los datasources.

223. ¿Qué utilidad tiene el comando `logger` en el contexto de un script de `cron`?
 - ( ) Rotar los archivos de log generados por cron.
 - (x) Enviar mensajes desde el script al log del sistema (syslog o journal).
 - ( ) Limpiar el contenido de los logs de cron.
 - ( ) Mostrar en tiempo real los logs de las tareas cron.

224. El sistema de ficheros `/proc` en Linux es:
 - ( ) Un directorio en disco que almacena permanentemente los procesos del sistema.
 - (x) Un sistema de ficheros virtual que proporciona información en tiempo real sobre el kernel y los procesos en ejecución.
 - ( ) El directorio donde se guardan las configuraciones de los programas.
 - ( ) Una partición de swap utilizada por el sistema.

225. ¿Qué tipo de métrica de Prometheus es adecuada para representar valores que pueden subir y bajar, como la temperatura actual o la memoria en uso?
 - ( ) Counter
 - (x) Gauge
 - ( ) Histogram
 - ( ) Summary

223. En JMeter un "JWT Token" obtenido tras el login se utiliza probablemente en peticiones subsiguientes dentro de un:
    - ( ) CSV Data Set Config.
    - (x) HTTP Header Manager (como cabecera `Authorization: Bearer ${TOKEN}`).
    - ( ) User Defined Variables, directamente en la URL.
    - ( ) Response Assertion.

224. Al ejecutar `docker compose down`, ¿qué sucede con los contenedores definidos en el archivo `docker-compose.yml`?
    - ( ) Solo se pausan, manteniendo su estado.
    - (x) Se detienen y se eliminan, junto con las redes creadas por defecto (a menos que se especifique lo contrario con opciones).
    - ( ) Se reinician y se actualizan a la última imagen disponible.
    - ( ) Se guardan como nuevas imágenes en el repositorio local.

225. ¿Cuál es el propósito principal de un "Panel" en un dashboard de Grafana?
    - ( ) Definir la conexión a una fuente de datos como Prometheus.
    - ( ) Agrupar varios dashboards relacionados.
    - (x) Visualizar una o más métricas específicas utilizando un tipo de gráfico (tabla, gráfica de líneas, gauge, etc.).
    - ( ) Configurar las reglas de alerta para todo el dashboard.

226. Si en el archivo `prometheus.yml` se define un `target` como `mi_servidor_rocky:9100`, ¿a qué puerto se conectará Prometheus en `mi_servidor_rocky` para obtener métricas del Node Exporter?
    - ( ) 9090
    - ( ) 3000
    - ( ) 80
    - (x) 9100

227. Para ejecutar una prueba de JMeter sin la interfaz gráfica, desde la línea de comandos, ¿qué opción se suele usar?
    - ( ) jmeter -g /ruta/al/plan.jmx
    - (x) jmeter -n -t /ruta/al/plan.jmx -l /ruta/al/resultados.jtl
    - ( ) jmeter --nogui --plan /ruta/al/plan.jmx
    - ( ) jmeter -cmd /ruta/al/plan.jmx

228. ¿Qué representa la métrica `nodejs_heap_size_used_bytes` en la monitorización de una API Node.js con Prometheus?
    - ( ) El tamaño total del heap de Node.js disponible en bytes.
    - ( ) El número de objetos actualmente en el heap de Node.js.
    - (x) La cantidad de memoria del heap de Node.js que está siendo utilizada actualmente en bytes.
    - ( ) El tiempo total de CPU consumido por el proceso Node.js.

229. ¿Cuál es uno de los objetivos de monitorizar los "Tiempos de respuesta de los endpoints de la API" (ej: `http_request_duration_seconds_bucket`)?
    - ( ) Contar el número total de errores 404.
    - (x) Identificar cuellos de botella y medir la latencia experimentada por los usuarios de la API.
    - ( ) Verificar la cantidad de datos transferidos por cada endpoint.
    - ( ) Determinar el uso de CPU específico de cada endpoint.

230. ¿Qué tecnología subyacente del kernel de Linux utilizan los contenedores para aislar los sistemas de archivos y los procesos?
    - ( ) Hipervisores de tipo 2.
    - ( ) SELinux y AppArmor exclusivamente.
    - (x) Namespaces y Cgroups.
    - ( ) Systemd timers y sockets.

231. Al configurar una alarma en Grafana para el uso de CPU, si la condición es "cuando la media del uso de CPU supere el 75% durante 5 minutos", ¿qué implica el "durante 5 minutos"?
    - ( ) La alarma se silenciará durante 5 minutos después de dispararse.
    - (x) La condición debe cumplirse de forma sostenida durante un período de 5 minutos para que la alarma se active.
    - ( ) Grafana solo evaluará esta regla de alerta cada 5 minutos.
    - ( ) La gráfica mostrará los datos de los últimos 5 minutos únicamente cuando la alarma esté activa.

232. ¿Cuál de estas herramientas NO se menciona en el temario del Bloque 2 como una solución de monitorización o pruebas de carga?
    - ( ) Munin
    - ( ) Nagios
    - (x) Wireshark
    - ( ) Zabbix

233. ¿Qué información específica NO suele estar directamente en el archivo `/proc/cpuinfo`?
    - ( ) Modelo del procesador y velocidad de reloj.
    - ( ) Número de núcleos y threads.
    - ( ) Tamaño de las cachés L1, L2, L3.
    - (x) El uso actual de CPU de cada proceso.

234. En el contexto de Docker, ¿qué es una "imagen"?
    - ( ) Un contenedor en ejecución con una aplicación activa.
    - (x) Una plantilla de solo lectura con instrucciones para crear un contenedor Docker (incluye la aplicación y sus dependencias).
    - ( ) El archivo `docker-compose.yml`.
    - ( ) Un volumen de datos persistente utilizado por un contenedor.

235. ¿Qué tipo de "Sampler" en JMeter se usaría para realizar una petición a una base de datos mediante JDBC?
    - ( ) HTTP Request Sampler
    - ( ) FTP Request Sampler
    - (x) JDBC Request Sampler
    - ( ) TCP Sampler

236. ¿Cuál de las siguientes es una característica de la pila ELK (Elasticsearch, Logstash, Kibana)?
    - ( ) Está principalmente enfocada en la simulación de carga de trabajo.
    - ( ) Es una solución para la gestión de contenedores alternativa a Docker.
    - (x) Permite recolectar, indexar, buscar y visualizar grandes volúmenes de logs y datos.
    - ( ) Es un sistema de gestión de configuración como Ansible o Chef.

237. En el archivo `prometheus.yml`, ¿qué especifica la directiva `scrape_configs`?
    - ( ) La configuración de las alertas que enviará Prometheus.
    - ( ) Los dashboards por defecto que se cargarán en Grafana.
    - (x) Define los `jobs` y `targets` de los cuales Prometheus recolectará (hará scraping) métricas.
    - ( ) Las reglas de grabación para precalcular métricas complejas.

238. ¿Qué es un "Assertion" en JMeter?
    - ( ) Un elemento para introducir pausas entre peticiones.
    - ( ) Un componente que define el número de hilos para la prueba.
    - (x) Un criterio de validación que se aplica a la respuesta de un sampler para determinar si la petición fue exitosa.
    - ( ) Un extractor de datos de las respuestas.

239. La utilidad `vmstat` en Linux proporciona información sobre:
    - ( ) El estado detallado de las interfaces de red.
    - (x) Memoria virtual, procesos, E/S de bloques, interrupciones y actividad de la CPU.
    - ( ) Los usuarios actualmente conectados y sus actividades.
    - ( ) El espacio libre en los sistemas de archivos montados.

240. Al definir un servicio en `docker-compose.yml` con `image: mongo:6`, Docker Compose:
    - ( ) Intentará construir una imagen desde un Dockerfile local llamado `mongo:6`.
    - (x) Buscará y descargará la imagen `mongo` con la etiqueta `6` desde Docker Hub (o el registro configurado) si no está localmente.
    - ( ) Creará un volumen llamado `mongo` con un tamaño de 6GB.
    - ( ) Ejecutará 6 instancias del contenedor mongo.

241. ¿Qué indica el estado "zombie" de un proceso en la salida de `top`?
    - ( ) Un proceso que está consumiendo el 100% de la CPU.
    - ( ) Un proceso que ha sido detenido por el usuario.
    - (x) Un proceso que ha terminado su ejecución pero su entrada aún existe en la tabla de procesos, esperando a que el proceso padre recoja su estado de salida.
    - ( ) Un proceso que está bloqueado esperando una operación de E/S.

242. El comando `docker exec -it [nombre_contenedor] sh` permite:
    - ( ) Exportar la configuración del contenedor a un archivo `sh`.
    - ( ) Ver los logs del contenedor en formato shell.
    - (x) Abrir una sesión de shell interactiva dentro de un contenedor que ya está en ejecución.
    - ( ) Ejecutar un script `sh` que se encuentra en el host dentro del contenedor.

243. ¿Cuál es una de las principales ventajas de usar `docker-compose` para una aplicación con múltiples servicios (ej. app web + base de datos)?
    - ( ) Reduce el tamaño de las imágenes Docker de cada servicio.
    - (x) Permite definir y gestionar la configuración, redes y dependencias entre múltiples contenedores con un solo archivo y comando.
    - ( ) Elimina la necesidad de tener Docker Engine instalado.
    - ( ) Ofrece una interfaz gráfica para monitorizar los servicios.

244. En el contexto de Grafana, ¿qué es un "dashboard"?
    - ( ) Una única consulta PromQL.
    - ( ) La configuración de una fuente de datos.
    - (x) Una colección de uno o más paneles organizados y mostrados juntos para visualizar datos.
    - ( ) El servidor donde se almacenan las métricas de Prometheus.

245. Para que Prometheus pueda recolectar métricas de un servicio (ej. Node Exporter), el servicio debe:
    - ( ) Estar escrito en el lenguaje Go.
    - (x) Exponer sus métricas en un endpoint HTTP en un formato compatible (generalmente texto plano).
    - ( ) Enviar sus métricas directamente a la base de datos de Prometheus mediante un push.
    - ( ) Tener un agente de Grafana instalado.

246. Si un `docker-compose.yml` define dos servicios, `webapp` y `database`, y `webapp` tiene `links: - database`, esto permite que:
    - (x) El contenedor `webapp` pueda acceder al contenedor `database` usando el hostname `database`.
    - ( ) Ambos contenedores compartan el mismo sistema de archivos.
    - ( ) Se cree una copia del contenedor `database` dentro del contenedor `webapp`.
    - ( ) El servicio `database` se inicie siempre después que `webapp`.

247. ¿Qué representa la opción `-n` en el comando `ab -n 1000 -c 100 http://example.com/`?
    - ( ) El número de segundos que durará la prueba.
    - ( ) El número de conexiones concurrentes a realizar.
    - (x) El número total de peticiones a realizar durante la prueba.
    - ( ) El tamaño del payload de cada petición en Kilobytes.

248. El archivo `~/.ssh/known_hosts` en un cliente SSH se utiliza para:
    - ( ) Almacenar la clave privada del cliente.
    - (x) Almacenar las claves públicas de los servidores a los que el cliente se ha conectado y ha confiado, para evitar advertencias de "man-in-the-middle".
    - ( ) Configurar opciones específicas para diferentes hosts SSH.
    - ( ) Guardar las contraseñas de los servidores SSH.

249. ¿Qué es el "scraping" en el contexto de Prometheus?
    - ( ) El proceso de eliminar métricas antiguas de la base de datos.
    - (x) La acción de Prometheus de solicitar y recolectar métricas desde los endpoints HTTP expuestos por los `targets`.
    - ( ) La visualización de datos en Grafana.
    - ( ) La generación de alertas basadas en umbrales.

250. En JMeter, elementos como "Login Alumnos", "Obtener JWT Token" y "Recuperar datos alumnos" están organizados bajo un elemento padre llamado "Alumnos". Este elemento "Alumnos" es probablemente un:
    - ( ) HTTP Request Defaults
    - (x) Thread Group
    - ( ) Logic Controller (como un Simple Controller)
    - ( ) Listener

251. ¿Cuál es la función de la directiva `CMD ["npm", "start"]` en un Dockerfile para una aplicación Node.js?
    - ( ) Instala las dependencias del proyecto Node.js durante la construcción de la imagen.
    - (x) Especifica el comando por defecto que se ejecutará cuando se inicie un contenedor a partir de la imagen.
    - ( ) Copia el código fuente de la aplicación Node.js a la imagen.
    - ( ) Define variables de entorno para la aplicación Node.js.

252. Si en Grafana se observa que un panel que muestra métricas de Prometheus no actualiza datos o muestra "N/A", una posible causa NO sería:
    - ( ) El servicio Prometheus está caído o inaccesible para Grafana.
    - ( ) El `target` (exporter) del que Prometheus debería obtener las métricas está caído.
    - ( ) La consulta PromQL en el panel de Grafana es incorrecta o no devuelve datos.
    - (x) El `scrape_interval` de Prometheus es demasiado corto (ej. 1s).

253. El comando `sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin` instala Docker Engine y varios componentes. ¿Cuál es la implicación principal de incluir paquetes como `docker-buildx-plugin` y `docker-compose-plugin` en esta instalación?
    - ( ) Asegura la compatibilidad con versiones anteriores de Docker únicamente.
    - (x) Proporciona funcionalidades extendidas directamente integradas con la CLI de Docker, como la capacidad de construir imágenes para múltiples arquitecturas y gestionar aplicaciones multicontenedor sin instalar `docker-compose` como un binario separado.
    - ( ) Son dependencias mínimas necesarias solo para que `containerd.io` funcione correctamente.
    - ( ) Habilita un modo de alta seguridad para el Docker Engine (`docker-ce`).

254. La arquitectura de microservicios permite que cada servicio utilice su propio stack tecnológico. Si bien esto ofrece gran flexibilidad, ¿cuál de los siguientes escenarios describe mejor una consecuencia directa y a menudo desafiante de esta característica en un entorno de producción complejo?
    - ( ) Una reducción significativa en la necesidad de herramientas de monitorización centralizadas.
    - ( ) La estandarización forzada de los protocolos de comunicación entre servicios.
    - (x) Un incremento en la complejidad operativa para la gestión, el versionado y el mantenimiento de la compatibilidad entre múltiples stacks tecnológicos heterogéneos.
    - ( ) Una simplificación automática del proceso de despliegue continuo (CI/CD).

255. Respecto a la escalabilidad en microservicios, ¿cuál de las siguientes afirmaciones distingue más sutilmente la escalabilidad horizontal de la vertical, más allá de la simple definición?
    - ( ) La escalabilidad vertical siempre es más costosa que la horizontal.
    - (x) La escalabilidad horizontal (añadir instancias) puede introducir mayor complejidad en la gestión del estado y la consistencia de datos entre instancias, a diferencia de la vertical (mejorar recursos de una instancia) que no la introduce en la misma medida.
    - ( ) La escalabilidad horizontal se limita al número de núcleos físicos del servidor.
    - ( ) Solo la escalabilidad vertical se beneficia del uso de contenedores.

256. Un benchmark, como NameBench para DNS, está diseñado para medir el rendimiento. ¿Cuál es el valor fundamental de ejecutar un benchmark específico para un componente (DNS) en lugar de un benchmark general del sistema?
    - ( ) Los benchmarks específicos son siempre más rápidos de ejecutar.
    - (x) Permite aislar y evaluar métricas de rendimiento directamente relevantes para la función de ese componente particular, ofreciendo resultados más accionables para su optimización.
    - ( ) Garantiza que el componente no afectará el rendimiento de otros servicios.
    - ( ) Elimina la necesidad de monitorizar el consumo de recursos del sistema.

257. Phoronix Test Suite (PTS) se integra con OpenBenchmarking para comparar resultados. ¿Qué ventaja estratégica principal ofrece esta integración a un usuario que evalúa el rendimiento de un nuevo hardware o configuración?
    - ( ) Asegura que los tests de PTS se ejecuten más rápido en el sistema local.
    - (x) Permite contextualizar los resultados propios comparándolos con una amplia base de datos de resultados de otros sistemas y configuraciones, facilitando una evaluación relativa del rendimiento.
    - ( ) Garantiza la validez de los resultados de PTS para cualquier tipo de carga de trabajo.
    - ( ) Simplifica la instalación de PTS en contenedores Docker.

258. El comando Apache Benchmark (ab) `ab -n 100 -c 10 http://localhost/` realiza 100 peticiones con una concurrencia de 10. Si se incrementara significativamente solo el valor de `-c` (concurrencia) manteniendo `-n` constante, ¿qué aspecto del rendimiento del servidor se estaría poniendo a prueba de forma más intensiva?
    - ( ) La velocidad máxima de procesamiento de una única petición secuencial.
    - (x) La capacidad del servidor para manejar múltiples conexiones y peticiones simultáneas y la gestión de sus recursos bajo dicha carga (ej. hilos, memoria).
    - ( ) La eficiencia de la caché del navegador del cliente.
    - ( ) El ancho de banda de la red entre el cliente y el servidor para transferir grandes volúmenes de datos.

259. La instalación de Apache Benchmark (ab) en sistemas basados en Debian/Ubuntu se realiza comúnmente con `sudo apt install apache2-utils -y`. ¿Qué indica el uso de `apache2-utils` en lugar de un paquete llamado, por ejemplo, `ab-standalone`?
    - ( ) `ab` solo funciona si el servidor web Apache completo está instalado en la misma máquina.
    - ( ) `apache2-utils` es un metapaquete que también instala otros servidores web como Nginx.
    - (x) `ab` se distribuye como parte de un conjunto de herramientas y utilidades asociadas con el servidor Apache, aunque `ab` pueda usarse para probar cualquier servidor HTTP.
    - ( ) Es la única forma de obtener la versión más reciente de `ab`.

260. Al realizar un benchmark comparativo entre Apache y Nginx usando Apache Benchmark (`ab`) con el objetivo de "elevar significativamente la carga", ¿cuál de las siguientes estrategias de parametrización de `ab` sería MENOS efectiva para revelar diferencias fundamentales en cómo ambos servidores manejan la concurrencia y el consumo de recursos bajo estrés?
    - (x) Un número muy bajo de peticiones totales (`-n`) con una concurrencia también muy baja (`-c`).
    - ( ) Incrementar progresivamente la concurrencia (`-c`) mientras se mantiene un número alto de peticiones (`-n`) y se observa el punto de degradación del rendimiento.
    - ( ) Utilizar la opción `-k` (KeepAlive) para simular un comportamiento de cliente más realista y evaluar el manejo de conexiones persistentes.
    - ( ) Realizar pruebas con diferentes tamaños de documentos solicitados para observar el impacto en el throughput y el uso de memoria.

261. Al interpretar los resultados de Apache Benchmark (`ab`) al comparar dos servidores HTTP, si el "Time per request (mean, across all concurrent requests)" es significativamente menor para el Servidor A que para el Servidor B con alta concurrencia, ¿qué indicaría esto primordialmente?
    - ( ) El Servidor A tiene una conexión de red más rápida, independientemente de su capacidad de procesamiento.
    - (x) El Servidor A es más eficiente gestionando un gran número de solicitudes simultáneas, resultando en menor tiempo de espera promedio por petición bajo carga.
    - ( ) El Servidor B está sirviendo contenido dinámico mientras que el Servidor A sirve contenido estático.
    - ( ) El Servidor A tiene un límite de "keep-alive timeout" más corto.

262. El comando `./jmeter -n -t /ruta/archivo.jmx -l /ruta/archivo_resultados.jtl` ejecuta JMeter en modo no-GUI. ¿Cuál es una ventaja CRUCIAL de este modo de ejecución para pruebas de carga de alto volumen en comparación con el modo GUI?
    - ( ) Permite la modificación interactiva del plan de pruebas mientras se ejecuta la carga.
    - (x) El modo no-GUI consume significativamente menos recursos (CPU y memoria) en la máquina que genera la carga, permitiendo simular un mayor número de usuarios virtuales y obtener resultados más precisos al no interferir la GUI con la prueba.
    - ( ) Genera informes gráficos más detallados directamente en el archivo JTL.
    - ( ) Es el único modo que soporta la ejecución de scripts Groovy en JMeter.

263. El sistema de archivos `/proc` en Linux es una fuente crítica de información dinámica del sistema. Si un script necesita obtener el tiempo exacto que el sistema lleva encendido desde el último arranque, ¿qué característica de `/proc/uptime` es más relevante para esta tarea?
 - ( ) Su contenido se actualiza solo durante el proceso de arranque.
 - ( ) Proporciona una marca de tiempo del último apagado del sistema.
 - (x) Contiene dos valores numéricos: el tiempo total que el sistema ha estado encendido y el tiempo que ha estado inactivo, ambos en segundos y actualizados en tiempo real por el kernel.
 - ( ) Es un archivo de registro que acumula los tiempos de actividad de cada sesión de usuario.

264. ¿Cuál de los siguientes ficheros dentro del sistema de archivos `/proc` sería el más directo y apropiado para analizar la distribución y el uso actual de la memoria RAM y swap del sistema, incluyendo detalles como memoria total, libre, buffers y caché?
 - ( ) /proc/stat
 - ( ) /proc/cpuinfo
 - ( ) /proc/loadavg
 - (x) /proc/meminfo

265. Un administrador configura una tarea cron con la entrada `1 * * * * * /opt/scripts/monitor.sh`. Si la intención es registrar la carga del sistema, ¿cuál sería el efecto más notable de esta configuración específica en los logs generados por `monitor.sh` usando `logger -t ISE`, asumiendo que el script se ejecuta instantáneamente?
 - ( ) Un log cada hora, al primer segundo.
 - (x) Un log cada minuto, al segundo 1.
 - ( ) El script no se ejecutaría por sintaxis errónea en cron.
 - ( ) Múltiples logs por minuto, uno por segundo, pudiendo saturar los logs.

266. Al intentar depurar un problema ocurrido durante el penúltimo arranque (no el actual, sino el anterior a ese), un técnico necesita ver únicamente los mensajes con nivel de prioridad `crit` o superior. ¿Cuál de los siguientes comandos `journalctl` es el más preciso y eficiente para esta tarea específica?
 - (x) journalctl -b -2 -p crit
 - ( ) journalctl -p crit --since "2 days ago"
 - ( ) journalctl -b -1 -p err | grep 'crit\|alert\|emerg'
 - ( ) journalctl -b --list-boots | tail -n 3 | head -n 1 | xargs journalctl -b ID -p crit

267. El script programado con cron debe generar un mensaje con el formato "<SusIniciales>: <Fecha y hora actual>– <Carga actual del Sistema>". Si, tras configurar el cronjob, no aparecen logs con la etiqueta "ISE" mediante `journalctl -t ISE`, pero el administrador confirma que el script tiene permisos de ejecución y la ruta en crontab es correcta, ¿cuál podría ser una causa plausible relacionada directamente con la interacción entre el script y `logger` o el entorno de cron?
 - ( ) El servicio systemd-journald está inactivo.
 - (x) La utilidad logger no está en el PATH del entorno de ejecución de cron.
 - ( ) El script no puede obtener la carga del sistema y termina prematuramente sin llamar a logger.
 - ( ) El directorio /var/log no tiene espacio disponible, impidiendo la escritura de nuevos logs.

268. Si se ejecuta el comando `journalctl -b -p warning` y, entre los resultados, se observa un mensaje con nivel de prioridad `emerg`, ¿qué implicación directa se deriva de la funcionalidad de `journalctl` según la información proporcionada?
 - ( ) journalctl ha filtrado incorrectamente, mostrando más de lo pedido.
 - ( ) El sistema está inestable y solo muestra mensajes emerg.
 - (x) La opción -p warning incluye niveles de mayor gravedad que warning.
 - ( ) Es necesario usar journalctl -b -p emerg para ver solo emergencias.

269. Un script programado en el crontab del usuario para ejecutarse cada minuto (`* * * * * /home/user/script.sh`) tiene como objetivo registrar la carga del sistema usando `logger -t ISE "Carga: $(uptime)"`. El script tiene permisos de ejecución. Si no aparecen logs con la etiqueta "ISE" en `journalctl -t ISE`, pero otros logs del sistema sí se registran correctamente, ¿cuál de las siguientes es una causa raíz probable y específica del problema con este cron job?
 - (x) El comando uptime no está disponible en el PATH mínimo que usa cron para ejecutar los scripts.
 - ( ) La partición /var/log está completamente llena, impidiendo nuevos registros en el journal.
 - ( ) El servicio crond no está activo o no se ha reiniciado tras añadir la tarea.
 - ( ) systemd-journald está filtrando los mensajes de logger con la etiqueta ISE por una regla específica.

270. Sabiendo que `journalctl -p warning` muestra mensajes de prioridad warning, err, crit, alert, emerg, ¿cómo se consultarian los logs del arranque actual para ver mensajes que sean err o crit, pero excluyendo explícitamente los de nivel warning y también los más graves como alert o emerg?
 - (x) journalctl -b -p err..crit
 - ( ) journalctl -b -p warning | grep -E 'err|crit'
 - ( ) journalctl -b -p crit -p err --grep-invert-level=warning --grep-invert-level=alert --grep-invert-level=emerg
 - ( ) No es posible con una sola invocación de journalctl sin post-procesamiento.

271. El script para cron debe generar un log con el formato "<SusIniciales>: <Fecha y hora actual>– <Carga actual del Sistema>". Si el log generado solo muestra "<SusIniciales>: <Fecha y hora actual>– " y la parte de la carga del sistema está ausente, asumiendo que logger se invoca correctamente con todas las partes concatenadas, ¿cuál es el fallo más probable dentro del script?
 - ( ) La variable de entorno para las iniciales no está definida en el entorno de cron.
 - (x) El comando para obtener la carga del sistema (e.g., uptime o similar) está fallando o devolviendo una cadena vacía.
 - ( ) La utilidad logger tiene un límite en la longitud del mensaje que se está excediendo.
 - ( ) El comando para obtener la fecha y hora actual está configurado en un formato incorrecto.

272. Un administrador necesita revisar los logs de todos los arranques registrados, excepto el actual, para buscar mensajes con prioridad `alert`. Antes de ejecutar cualquier comando `journalctl`, verifica el estado de `systemd-journald` y lo encuentra "active (running)". ¿Cuál sería la aproximación más directa y adecuada con `journalctl` para esta tarea, considerando que podrían existir múltiples arranques anteriores?
 - (x) journalctl --list-boots | grep -v " 0 " | awk '{print $1}' | xargs -I{} journalctl -b {} -p alert
 - ( ) journalctl -b -1 -p alert && journalctl -b -2 -p alert && ... (repitiendo para cada arranque)
 - ( ) Iterar con un script sobre journalctl -b -k -p alert donde k va desde 1 hasta el número de arranques.
 - ( ) journalctl -p alert --boot=-1 --boot=-2 --boot=-3 (y así sucesivamente para los arranques necesarios).

273. Durante la configuración manual de `node_exporter` en un servidor Rocky Linux, tras mover el binario a `/usr/local/bin/` y crear un servicio systemd, este falla al iniciar. Un análisis posterior revela que SELinux está denegando la ejecución. Según la problemática descrita en la documentación, ¿cuál es la solución específica mencionada para resolver este conflicto con SELinux?
 - ( ) Desactivar SELinux temporalmente usando setenforce 0.
 - (x) Corregir el contexto de seguridad SELinux del binario node_exporter al tipo bin_t.
 - ( ) Añadir una regla a SELinux para permitir la ejecución de cualquier binario en /usr/local/bin/.
 - ( ) Recompilar node_exporter con soporte para políticas SELinux personalizadas.

274. En la configuración de `docker-compose.yml` proporcionada para desplegar Prometheus y Grafana, el servicio de Grafana expone un puerto al host y depende de Prometheus. ¿Qué par de puertos (HOST:CONTAINER) se utiliza para Grafana y cuál es la implicación principal de la directiva `depends_on: - prometheus`?
 - ( ) Grafana usa 3000:4000, y depends_on asegura que Grafana siempre tenga más recursos asignados.
 - ( ) Grafana usa 9090:9090, y depends_on configura Prometheus para que envíe datos a Grafana.
 - (x) Grafana usa 4000:3000, y depends_on indica que el contenedor de Grafana se iniciará después de que el de Prometheus haya comenzado.
 - ( ) Grafana usa 4000:3000, y depends_on establece un enlace de red directo para la comunicación exclusiva entre ellos.

275. El archivo `prometheus.yml` define una configuración global y un trabajo de scraping. Si el `scrape_interval` global es de `5s` y el único `job_name` es `"prometheus_service"` que apunta a `"prometheus:9090"`, ¿qué significa esto para la recolección de métricas del propio Prometheus?
 - (x) Prometheus intentará recolectar sus propias métricas cada 5 segundos desde el puerto 9090 del contenedor llamado "prometheus".
 - ( ) Prometheus solo recolectará métricas de otros servicios, no de sí mismo, a menos que se añada un job específico.
 - ( ) El intervalo de 5s se aplica a todos los jobs excepto a "prometheus_service", que usará un valor por defecto.
 - ( ) Las métricas de "prometheus_service" se recolectarán, pero no se almacenarán debido a que es un target interno.

276. Para la monitorización de una API WEB, se requiere crear un panel que muestre la relación entre la memoria heap total de NodeJS y la memoria heap usada. ¿Cuáles son las dos métricas específicas de `prom-client` mencionadas en la documentación que se utilizarían para construir este panel?
 - ( ) process_resident_memory_bytes y nodejs_external_memory_bytes.
 - ( ) nodejs_heap_space_size_available_bytes y nodejs_heap_size_used_bytes.
 - (x) nodejs_heap_size_total_bytes y nodejs_heap_size_used_bytes.
 - ( ) http_request_duration_seconds_bucket y process_cpu_seconds_total.

277. Al configurar volúmenes persistentes para Prometheus y Grafana en Docker, la documentación menciona la necesidad de ejecutar comandos para evitar problemas de permisos. Para el directorio de datos de Grafana (`./grafana_data`), ¿qué UID/GID específico se utiliza en el comando `sudo chown -R` y qué permisos se establecen con `sudo chmod -R`?
 - ( ) chown a root:root y chmod a 777 para máxima compatibilidad.
 - (x) chown a 472:472 y chmod a 755.
 - ( ) chown a 65534:65534 (nobody:nogroup) y chmod a 700.
 - ( ) chown al usuario actual y chmod a 644 para mayor seguridad.

278. Al configurar Grafana por primera vez, se indica que se accede con credenciales por defecto y luego se cambian. Posteriormente, para que Grafana pueda obtener datos de Prometheus (asumiendo que ambos corren en contenedores Docker en la misma red), ¿cuál es la URL HTTP que típicamente se configura en Grafana para el Data Source de Prometheus, según lo ilustrado en la documentación?
 - ( ) http://localhost:9090
 - ( ) http://prometheus_service:9090
 - (x) http://prometheus:9090
 - ( ) La IP del contenedor de Prometheus seguida del puerto 9090.

279. Un estudiante intenta monitorizar el estado del servicio SSH (`sshd.service`) usando `node_exporter` y Grafana, pero el panel no muestra los datos correctos. La documentación sugiere una solución específica que implica modificar la configuración de `node_exporter`. ¿Cuál es esta modificación clave para que `node_exporter` exponga correctamente las métricas de los servicios de systemd?
 - (x) Añadir --collector.systemd a la línea de ejecución de node_exporter.service.
 - ( ) Crear un nuevo scraper en prometheus.yml para el puerto específico del colector systemd.
 - ( ) Instalar un plugin adicional en Grafana para interpretar las métricas de systemd.
 - ( ) Modificar los permisos del socket de systemd para permitir el acceso a node_exporter.

280. Para crear una alerta en Grafana que se dispare cuando el uso promedio de CPU supere el 75% durante 5 minutos, se utiliza una consulta PromQL y se configura una regla de alerta. Basándose en la configuración de alerta descrita (Query A, Condition B, y Alert evaluation behavior), ¿cuál es la combinación correcta de la condición y el comportamiento de evaluación de la alerta?
 - ( ) Condición: WHEN last() OF A IS ABOVE 75. Evaluación: Evaluate every 5m for 1m.
 - ( ) Condición: WHEN avg() OF A IS ABOVE 0.75. Evaluación: Evaluate every 1m for 5m.
 - (x) Condición: WHEN last() OF A IS ABOVE 75. Evaluación: Evaluate every 1m for 5m.
 - ( ) Condición: WHEN count() OF A > 75 FOR 5m. Evaluación: Evaluate every minute.

281. La consulta PromQL proporcionada para calcular el "Uso Total CPU (%)" en un panel de Grafana es `(1 - avg by (instance) (rate(node_cpu_seconds_total{job="rocky_linux_server",mode="idle"}[5m]))) * 100`. ¿Qué representa específicamente la parte `rate(node_cpu_seconds_total{...mode="idle"}[5m])` en este contexto?
 - ( ) El número total de segundos que la CPU ha estado inactiva desde el último reinicio del servidor.
 - (x) La fracción promedio de tiempo por segundo, durante los últimos 5 minutos, que la CPU estuvo en modo inactivo.
 - ( ) El porcentaje de uso de CPU en modo "idle" acumulado en los últimos 5 minutos.
 - ( ) La cantidad de ciclos de CPU consumidos por procesos inactivos en un intervalo de 5 minutos.

282. La documentación indica que para los volúmenes de datos de Docker, como `./prometheus_data`, se ejecuta `sudo chown -R 65534:65534 ./prometheus_data`. ¿Cuál es la razón técnica más probable para utilizar el UID/GID `65534:65534` en este contexto específico?
 - ( ) Es el UID/GID estándar para todos los servicios que se ejecutan en contenedores Docker.
 - (x) Corresponde al usuario y grupo 'nobody' o al usuario interno con el que el proceso de Prometheus se ejecuta dentro del contenedor, para asegurar permisos de escritura.
 - ( ) Este UID/GID otorga permisos de solo lectura, mejorando la seguridad del volumen de datos.
 - ( ) Facilita la compartición de este volumen entre múltiples contenedores sin conflictos de permisos.

283. Si el colector `systemd` de `node_exporter` no se habilita explícitamente (es decir, no se añade `--collector.systemd` a sus argumentos de inicio), ¿cuál sería el resultado más probable al intentar ejecutar la consulta PromQL `node_systemd_unit_state{name="sshd.service"}` en Prometheus?
 - ( ) La consulta devolvería un valor de '0' o 'unknown' por defecto para el estado del servicio.
 - ( ) Prometheus generaría un error de sintaxis en la consulta porque la métrica es opcional.
 - (x) No se encontrarían series temporales para la métrica node_systemd_unit_state, resultando en una respuesta vacía o un error de "no data".
 - ( ) node_exporter expondría la métrica, pero con valores predeterminados indicando que el colector no está configurado.

284. En la configuración de una regla de alerta en Grafana para el uso de CPU, se establece "Evaluate every 1m" y "for 5m". ¿Cuál es la diferencia fundamental en el comportamiento de la alerta si el parámetro "for 5m" se omitiera o se estableciera en "for 0m"?
 - ( ) Sin "for 5m", la alerta se dispararía cada minuto si la condición es verdadera, en lugar de una vez cada cinco minutos.
 - (x) La alerta se dispararía inmediatamente en la primera evaluación donde la condición sea verdadera, sin requerir que la condición persista durante 5 minutos.
 - ( ) Omitir "for 5m" haría que la alerta solo se compruebe una vez cada 5 minutos, en lugar de cada minuto.
 - ( ) La severidad de la alerta cambiaría de crítica a advertencia si "for 5m" no está presente.

285. La métrica `node_cpu_seconds_total` de `node_exporter` es un contador que registra el tiempo de CPU acumulado en diferentes modos (idle, user, system, etc.). En la consulta PromQL para el uso de CPU: `(1 - avg by (instance) (rate(node_cpu_seconds_total{job="rocky_linux_server",mode="idle"}[5m]))) * 100`, ¿cuál es el propósito principal de la función `avg by (instance)`?
 - ( ) Calcular el promedio de uso de CPU entre todas las instancias monitorizadas por Prometheus.
 - (x) Asegurar que el resultado se muestre como un promedio si hay múltiples cores de CPU en la misma instancia, preservando la etiqueta 'instance'.
 - ( ) Convertir la tasa de segundos a un valor promediado en el tiempo para suavizar picos instantáneos.
 - ( ) Seleccionar solo la instancia con la carga de CPU promedio más alta para la visualización.

286. En el archivo `docker-compose.yml`, el servicio de Prometheus tiene una sección `command` con el argumento `--config.file=/etc/prometheus/prometheus.yml`. ¿Cuál es la implicación principal de este comando para el contenedor de Prometheus?
 - ( ) Permite que Prometheus genere un archivo de configuración por defecto en /etc/prometheus/prometheus.yml si no existe.
 - (x) Indica al proceso de Prometheus dentro del contenedor que utilice el archivo mapeado desde el host (./prometheus.yml) como su fichero de configuración principal.
 - ( ) Valida la sintaxis del archivo /etc/prometheus/prometheus.yml antes de iniciar el servicio completo.
 - ( ) Establece un modo de solo lectura para el archivo de configuración para prevenir cambios accidentales desde el contenedor.

287. La configuración de Grafana en `docker-compose.yml` incluye `ports: - "4000:3000"`. ¿Cuál es el propósito y efecto de este mapeo de puertos específico?
 - ( ) Permite que Grafana dentro del contenedor escuche en el puerto 4000 y se comunique con Prometheus en el puerto 3000 del host.
 - ( ) Redirige el tráfico del puerto 3000 del host al puerto 4000 del contenedor de Grafana para la interfaz web.
 - (x) Hace que la interfaz web de Grafana, que escucha en el puerto 3000 dentro del contenedor, sea accesible en el puerto 4000 del host.
 - ( ) Limita el acceso a Grafana únicamente a través del puerto 4000, mientras que el 3000 se reserva para la API interna.

288. Si se desea que Prometheus monitoree una instancia de `node_exporter` que se ejecuta en el host de Docker (o en otro contenedor accesible en la red Docker como 'node-exporter-host:9100'), ¿cómo se modificaría principalmente el archivo `prometheus.yml` para añadir este nuevo objetivo de scraping?
 - ( ) Añadiendo una nueva entrada global.scrape_targets con la dirección del node_exporter.
 - (x) Creando un nuevo job dentro de scrape_configs con un static_configs que apunte a targets: ["node-exporter-host:9100"].
 - ( ) Modificando el job existente "prometheus_service" para incluir también "node-exporter-host:9100" en sus targets.
 - ( ) Configurando una regla de reetiquetado (relabel_configs) para descubrir automáticamente todos los exporters.

289. La métrica `http_request_duration_seconds_bucket` se menciona para la monitorización de tiempos de respuesta de una API WEB. ¿Qué tipo de información fundamental proporciona esta métrica de tipo histograma para el análisis del rendimiento?
 - ( ) El número total de solicitudes HTTP que han excedido un umbral de tiempo específico.
 - ( ) La duración exacta de la última solicitud HTTP procesada por la API.
 - (x) La distribución de las duraciones de las solicitudes en cubos (buckets) predefinidos, permitiendo calcular percentiles (e.g., p95, p99).
 - ( ) Un promedio móvil de los tiempos de respuesta de todos los endpoints de la API durante el último intervalo de scrape.

290. En el contexto del ejercicio de monitorización del servidor Linux, se menciona el uso de la herramienta `stress` para "poner de manifiesto el funcionamiento de la alarma" asociada al uso de CPU. ¿Cuál es el propósito general de utilizar `stress` en este escenario?
 - ( ) Verificar la correcta instalación y configuración de Prometheus y Grafana.
 - (x) Generar una carga artificial y controlada en el sistema (CPU, memoria, I/O) para simular condiciones de alta demanda.
 - ( ) Optimizar automáticamente la configuración de la alarma de CPU en Grafana.
 - ( ) Probar la conectividad de red entre el servidor monitorizado y el sistema de monitorización.

291. En el archivo `docker-compose.yml`, el servicio `grafana` tiene la directiva `depends_on: - prometheus`. Además de influir en el orden de inicio de los contenedores, ¿qué otra facilidad importante proporciona esta directiva en el contexto de una red Docker Compose por defecto?
 - ( ) Garantiza que el contenedor de Grafana siempre tenga mayor prioridad de CPU que el de Prometheus.
 - (x) Permite que el contenedor de Grafana resuelva el nombre de host 'prometheus' a la dirección IP interna del contenedor de Prometheus.
 - ( ) Crea automáticamente un volumen compartido entre Grafana y Prometheus para el intercambio de datos de configuración.
 - ( ) Sincroniza automáticamente los relojes de los contenedores de Grafana y Prometheus para la consistencia de las series temporales.

292. La consulta PromQL para el uso de CPU es `(1 - avg by (instance) (rate(node_cpu_seconds_total{job="rocky_linux_server",mode="idle"}[5m]))) * 100`. Si se eliminara el filtro `mode="idle"`, resultando en `rate(node_cpu_seconds_total{job="rocky_linux_server"}[5m])`, ¿qué representaría esta parte modificada de la consulta?
 - (x) La tasa de incremento de todos los modos de CPU combinados, lo que podría equivaler al número de cores si el sistema está completamente ocupado.
 - ( ) Un error de consulta, ya que node_cpu_seconds_total siempre requiere un filtro de mode.
 - ( ) El porcentaje de tiempo de CPU total no utilizado, ya que el modo "idle" es el predominante.
 - ( ) La tasa de uso de CPU exclusivamente por procesos de usuario, excluyendo system e idle.

293. Si después de instalar `node_exporter` en `/usr/local/bin/` y configurar su servicio systemd, este falla consistentemente al iniciar y los logs del sistema (journal) indican errores de "permission denied" relacionados con la ejecución del binario, a pesar de que el archivo tiene permisos de ejecución (e.g. 755), ¿cuál de las siguientes problemáticas, discutida en la documentación, sería la causa más directa y probable en un sistema como Rocky Linux?
 - ( ) El firewall del sistema está bloqueando la ejecución de nuevos servicios.
 - (x) Una política de SELinux está impidiendo que el proceso node_exporter se ejecute debido a un contexto de seguridad incorrecto en el archivo binario.
 - ( ) El usuario bajo el cual systemd intenta ejecutar el servicio node_exporter no tiene permisos de lectura en /usr/local/bin/.
 - ( ) Falta de dependencias o librerías requeridas por el binario de node_exporter en el sistema.

294. Al definir una alerta en Grafana, como la "Alerta CPU Alta (ISM)", se incluye un campo "Summary". ¿Cuál es la función principal de este campo en el ciclo de vida de una alerta?
 - ( ) Contiene la consulta PromQL exacta que Grafana evalúa para la condición de alerta.
 - (x) Es un texto descriptivo corto que se utiliza en las notificaciones y en la interfaz de usuario de Grafana para identificar y resumir rápidamente el propósito de la alerta.
 - ( ) Define las etiquetas (labels) que se adjuntarán a la alerta para su enrutamiento hacia diferentes canales de notificación.
 - ( ) Especifica el umbral numérico y la duración que deben cumplirse para que la alerta cambie a estado "Firing".

295. La métrica `node_cpu_seconds_total` es fundamental para calcular el uso de CPU. Dado que es un contador (counter) que solo aumenta, ¿por qué es esencial aplicar la función `rate()` (o similar como `irate()`) a esta métrica en PromQL antes de intentar calcular un porcentaje de uso?
 - ( ) rate() convierte los segundos acumulados en un valor porcentual directamente.
 - (x) Calcula la tasa de incremento por segundo de los segundos de CPU durante un intervalo de tiempo, lo que refleja la actividad actual en lugar del valor acumulado total.
 - ( ) rate() normaliza los valores de diferentes CPUs o cores para que puedan ser comparados equitativamente.
 - ( ) La función rate() es necesaria para filtrar los modos de CPU no deseados antes de la agregación.

296. En un sistema Linux que interpreta estrictamente la sintaxis cron tradicional de 5 campos (minuto, hora, día del mes, mes, día de la semana), ¿cuál sería el comportamiento de una entrada crontab como `1 * * * * * /ruta/script.sh` que, según la documentación inicial, pretendía una ejecución específica?
 - ( ) El script se ejecutaría cada segundo del primer minuto de cada hora.
 - (x) La línea sería rechazada como inválida por el demonio cron debido al exceso de campos.
 - ( ) Se ejecutaría una vez al día, al primer minuto de
 - Se ejecutaría cada minuto de cada hora, ignorando el primer campo '1'.
297. Para investigar problemas con un servicio específico (por ejemplo, `nginx.service`) durante el arranque actual, utilizando `journalctl`, ¿qué comando filtraría los mensajes de log para esta unidad específica, mostrando solo aquellos con una prioridad de 'error' o más grave?
    - (x) journalctl -b -u nginx.service -p err
    - ( ) journalctl --system-unit nginx.service --priority=error
    - ( ) journalctl -b _SYSTEMD_UNIT=nginx.service PRIORITY=3
    - ( ) cat /var/log/syslog | grep nginx | grep error

298. El script de cron debe generar un mensaje de log incluyendo la "<Carga actual del Sistema>". ¿Cuál de los siguientes ficheros del sistema de archivos `/proc` proporcionaría directamente los valores de la media de carga (load average) que comúnmente se usan para este propósito?
    - ( ) /proc/stat
    - ( ) /proc/cpuinfo
    - (x) /proc/loadavg
    - ( ) /proc/meminfo

299. Al instalar `node_exporter`, se descarga un archivo `.tar.gz`. Si un usuario intenta descomprimir este archivo directamente en `/usr/local/src` usando `tar -xvzf node_exporter.tar.gz -C /usr/local/src` sin `sudo`, ¿cuál es el resultado más probable si el usuario no tiene permisos de escritura en `/usr/local/src`?
    - ( ) tar creará el directorio en el home del usuario y extraerá los archivos allí.
    - (x) Se producirá un error de "Permiso denegado" y la extracción fallará.
    - ( ) Los archivos se extraerán, pero con propietario nobody.
    - ( ) tar solicitará interactivamente la contraseña de superusuario.

300. Si un servicio como `node_exporter` falla al iniciar debido a una denegación de SELinux, y cambiar el contexto del binario a `bin_t` no resuelve el problema, ¿cuál de las siguientes acciones sería un paso lógico de diagnóstico adicional para entender la causa raíz según las prácticas comunes de SELinux?
    - ( ) Reinstalar el servicio desde un repositorio oficial que maneje SELinux.
    - ( ) Desactivar SELinux permanentemente editando `/etc/selinux/config`.
    - (x) Consultar el log de auditoría de SELinux (`/var/log/audit/audit.log` o usando `ausearch`) para mensajes de denegación detallados (AVC).
    - ( ) Ejecutar el servicio con `setenforce Permissive` y verificar si funciona para confirmar el problema.

301. En el archivo `docker-compose.yml` se especifica la imagen `prom/prometheus:v2.50.0`. Si se descubre una vulnerabilidad crítica en la versión `v2.50.0` de Prometheus, ¿cuál sería la acción más recomendable y segura a seguir, asumiendo que existe una versión parcheada como `v2.50.1`?
    - ( ) Continuar usando `v2.50.0` pero restringir el acceso a la red de Prometheus.
    - ( ) Actualizar la etiqueta de la imagen a `prom/prometheus:latest` para obtener siempre la última versión.
    - (x) Modificar la etiqueta de la imagen a la versión parcheada específica (`prom/prometheus:v2.50.1`), probar y redesplegar.
    - ( ) Deshabilitar temporalmente el servicio de Prometheus hasta que se publique una guía oficial.

302. En Docker Compose, la línea `./prometheus_data:/prometheus` en la sección de volúmenes de Prometheus establece un montaje. ¿Cuál es la diferencia principal si en lugar de `./prometheus_data` (un bind mount a una ruta del host), se utilizara un volumen nombrado gestionado por Docker, como `prometheus_volume:/prometheus`?
    - ( ) Los volúmenes nombrados no son persistentes entre reinicios del contenedor.
    - ( ) Los bind mounts son gestionados completamente por Docker y son más portables entre sistemas.
    - (x) Los volúmenes nombrados son gestionados por Docker, su ubicación en el host es controlada por Docker, y son más fáciles de respaldar y migrar usando comandos de Docker.
    - ( ) Los bind mounts ofrecen mejor rendimiento de I/O que los volúmenes nombrados.

303. El archivo `prometheus.yml` tiene una configuración `global: scrape_interval: 5s`. Si se quisiera que un job específico para `node_exporter` tuviera un intervalo de recolección de 15 segundos en lugar de 5, ¿cómo se configuraría esto para ese job en particular?
    - ( ) No es posible anular el `scrape_interval` global para jobs individuales.
    - ( ) Añadiendo `scrape_interval_override: 15s` en la sección global.
    - (x) Definiendo `scrape_interval: 15s` directamente dentro de la configuración de ese job específico en `scrape_configs`.
    - ( ) Creando un archivo `prometheus_node_exporter.yml` separado con el intervalo deseado.

304. El ejercicio de monitorización de servidor Linux pide extender el dashboard para incorporar indicadores sobre el nivel de activación ("Activo"/"Inactivo", 1/0) de los servicios SSHD y Apache Httpd. Desde una perspectiva operativa, ¿cuál es el principal beneficio de tener estos indicadores visuales en un dashboard?
    - ( ) Permite medir el rendimiento exacto y el uso de recursos de cada servicio.
    - ( ) Facilita la depuración de errores de configuración en los archivos de los servicios.
    - (x) Proporciona una visión rápida y de alto nivel sobre la disponibilidad y estado operativo de servicios críticos.
    - ( ) Ayuda a predecir futuras fallas en los servicios basados en su tiempo de actividad.

305. Para monitorizar la memoria de una aplicación NodeJS, se usan las métricas `nodejs_heap_size_total_bytes` y `nodejs_heap_size_used_bytes`. ¿Qué tipo de visualización en Grafana sería más efectiva para mostrar la relación entre estas dos métricas y el porcentaje de uso del heap?
    - ( ) Un panel de tipo "Stat" mostrando solo el valor de `nodejs_heap_size_used_bytes`.
    - (x) Un gráfico de barras apiladas o un medidor (gauge) que represente el usado como un porcentaje del total.
    - ( ) Un histograma de la distribución de `nodejs_heap_size_total_bytes`.
    - ( ) Un panel de tipo "Table" listando los valores crudos de ambas métricas a lo largo del tiempo.

306. Al configurar permisos para el volumen `./grafana_data`, la documentación especifica `sudo chmod -R 755 ./grafana_data`. ¿Cuál sería el principal riesgo de seguridad si, en lugar de `755`, se utilizara despreocupadamente `chmod -R 777 ./grafana_data` en un sistema multiusuario?
    - ( ) El contenedor de Grafana podría no tener suficientes permisos para escribir sus datos.
    - ( ) Solo el usuario root podría acceder a los datos de Grafana en el host.
    - (x) Cualquier usuario en el sistema host tendría permisos de lectura, escritura y ejecución sobre los archivos de datos de Grafana, lo que podría exponer información sensible o permitir modificaciones no autorizadas.
    - ( ) Los permisos 777 harían que el sistema de archivos se vuelva inestable.

307. Al añadir Prometheus como fuente de datos en Grafana (ambos en contenedores Docker), la configuración de la URL HTTP es `http://prometheus:9090` y el modo de Acceso (Access) suele ser "Server". ¿Por qué es preferible el modo "Server" en este escenario en lugar de "Browser"?
    - ( ) El modo "Browser" es más seguro ya que las peticiones se originan desde el cliente.
    - (x) Con "Server", el backend de Grafana realiza las peticiones a Prometheus, lo cual es necesario si Prometheus no es directamente accesible desde el navegador del usuario (e.g., está en una red Docker interna).
    - ( ) El modo "Server" permite el uso de WebSockets, mejorando el rendimiento de las consultas.
    - ( ) El modo "Browser" no soporta la autenticación con Prometheus.

308. Si se inicia `node_exporter` con los colectores `--collector.systemd` y `--collector.filesystem` habilitados, además de sus colectores por defecto, ¿qué tipo de información adicional específica del sistema se podría esperar que exponga para Prometheus?
    - ( ) Métricas detalladas sobre el rendimiento de la red y estadísticas de TCP/IP.
    - (x) Información sobre el estado de unidades systemd (servicios, timers, etc.) y estadísticas de uso de los sistemas de archivos montados (espacio total, libre, etc.).
    - ( ) Datos sobre la temperatura de la CPU, velocidad de los ventiladores y otros sensores de hardware.
    - ( ) Logs de aplicaciones y del kernel del sistema en tiempo real.

309. En la consulta PromQL `rate(node_cpu_seconds_total{...}[5m])`, el selector de rango `[5m]` especifica el intervalo de tiempo sobre el cual se calcula la tasa. ¿Cómo influye este intervalo en los puntos de datos utilizados por la función `rate`?
    - ( ) rate solo considera el primer y último punto de datos dentro de los últimos 5 minutos.
    - (x) Prometheus debe tener al menos dos puntos de datos dentro del rango de 5 minutos para calcular la tasa; extrapola si solo hay uno.
    - ( ) El rango de 5 minutos define cuántos puntos de datos futuros se utilizarán para predecir la tasa.
    - ( ) La función rate promedia todos los valores de la métrica dentro de los últimos 5 minutos.

310. La configuración de una alerta en Grafana incluye la condición principal y el parámetro "for" (ej. `for 5m`). ¿Cuál es el propósito fundamental de este parámetro "for" para mejorar la calidad de las alertas?
    - ( ) Define durante cuánto tiempo la alerta permanecerá en estado "Firing" antes de resolverse automáticamente.
    - (x) Especifica que la condición de alerta debe ser verdadera continuamente durante ese período antes de que la alerta cambie a estado "Firing", ayudando a evitar alertas por fluctuaciones breves.
    - ( ) Indica la frecuencia con la que se reenviará la notificación de alerta si no se acusa recibo.
    - ( ) Establece un retardo antes de que la regla de alerta comience a evaluarse después de guardarla.

311. ¿Cuál es la distinción clave entre "monitorización" y "alerting" en el contexto de sistemas como Prometheus y Grafana?
    - ( ) Monitorización es la visualización de datos históricos, mientras que alerting es la visualización de datos en tiempo real.
    - (x) Monitorización implica la recolección, almacenamiento y visualización de métricas del sistema, mientras que alerting es el proceso de notificar automáticamente a los responsables cuando ciertas condiciones predefinidas (basadas en esas métricas) se cumplen.
    - ( ) Alerting se refiere a la creación de dashboards, y monitorización a la configuración de los data sources.
    - ( ) Monitorización es pasiva (solo observar datos), mientras que alerting es activa (permite modificar la configuración del sistema remotamente).

312. Si un objetivo de scraping (target) configurado en `prometheus.yml`, como una instancia de `node_exporter` en `host-servidor:9100`, está inaccesible (por ejemplo, el host está apagado o el servicio `node_exporter` no se está ejecutando), ¿qué estado mostrará Prometheus para este target en su interfaz web (sección Targets)?
    - ( ) UNKNOWN - Prometheus no puede determinar el estado y esperará indefinidamente.
    - ( ) UP - Pero con un error indicando que no se pudieron recolectar métricas.
    - (x) DOWN - Junto con un mensaje de error que indica la razón del fallo (e.g., connection refused, context deadline exceeded).
    - ( ) DISABLED - Prometheus deshabilitará automáticamente el target después de varios intentos fallidos.

313. La documentación menciona que el exporter de Prometheus para la API Web se generó empleando `prom-client` y `express-prom-bundle` para NodeJS. ¿Cuál es el rol general de estas librerías en una aplicación NodeJS que necesita exponer métricas a Prometheus?
    - ( ) Analizar las métricas recolectadas por Prometheus y generar dashboards automáticamente.
    - ( ) Proporcionar un servidor Prometheus embebido dentro de la aplicación NodeJS.
    - (x) Facilitar la instrumentación del código de la aplicación para definir, registrar y exponer métricas personalizadas y estándar (como tiempos de respuesta HTTP) en el formato que Prometheus espera, típicamente a través de un endpoint `/metrics`.
    - ( ) Conectarse directamente a la base de datos de series temporales de Prometheus para escribir métricas.

314. Para la entrega de los dashboards de Grafana, se indica usar la opción "Share Dashboard or Panel" y exportar con "Export for sharing externally". ¿En qué formato se exporta típicamente la definición del dashboard mediante esta opción y cuál es su principal ventaja?
    - ( ) Formato PDF, para una fácil visualización estática y documentación.
    - (x) Formato JSON, que contiene la estructura completa del dashboard y permite su importación en otras instancias de Grafana para reproducibilidad.
    - ( ) Formato CSV, exportando los datos crudos de los paneles para análisis externo.
    - ( ) Como una imagen PNG del dashboard, para compartir una instantánea visual.

315. La utilidad `logger`, usada en el ejercicio de la tarea periódica con cron, genera mensajes de log. Si no se realiza una configuración específica para que `logger` envíe sus mensajes a `systemd-journald`, y el sistema utiliza una configuración de syslog tradicional (como rsyslog), ¿dónde se esperaría encontrar típicamente los mensajes generados por `logger` por defecto?
    - ( ) Únicamente en la salida estándar del script de cron, que se envía por correo al usuario.
    - ( ) En un archivo específico creado por `logger` en el directorio home del usuario.
    - (x) En archivos de log del sistema centralizados en `/var/log`, como `/var/log/syslog` o `/var/log/messages`, dependiendo de la configuración de syslog y la facilidad/prioridad del mensaje.
    - ( ) Directamente en el journal de systemd, ya que `logger` se integra automáticamente sin configuración.

316. En la configuración del "Regular Expression Extractor" denominado "Obtener JWT token", si el campo "Field to check" se cambia a "Response Headers" y el token JWT se encuentra en un encabezado como "Authorization: Bearer [JWT_TOKEN]", ¿cuál sería la expresión regular más precisa para capturar únicamente el JWT_TOKEN?
    - ( ) Authorization: Bearer (.+)
    - (x) (?i)Authorization: Bearer\s+([A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*)
    - ( ) Bearer\s(.+?)\s
    - ( ) .+

317. Observando el "Test Plan" donde se definen las variables HOST (172.17.0.1) y PORT (3000), si un "Thread Group" específico dentro de este plan define una "User Defined Variables" con la variable HOST con valor "localhost", ¿qué valor de HOST utilizará un "HTTP Request" sampler dentro de ese "Thread Group" que referencia `${HOST}`?
    - ( ) 172.17.0.1, ya que las variables del Test Plan tienen precedencia global.
    - (x) localhost, debido a la regla de alcance (scope) donde las definiciones más cercanas al elemento tienen mayor precedencia.
    - ( ) JMeter generará un error por definición duplicada de variables.
    - ( ) Se utilizará una concatenación de ambos valores: "172.17.0.1localhost".

318. En el "Gaussian Random Timer" configurado con una "Deviation" de 100.0 ms y un "Constant Delay Offset" de 300 ms, ¿cuál es la implicación principal de usar este temporizador en comparación con un "Uniform Random Timer" con un rango equivalente?
    - ( ) El Gaussian Random Timer generará pausas que siempre serán mayores que la suma del offset y la desviación.
    - (x) Las pausas generadas se agruparán más cercanamente alrededor del valor del "Constant Delay Offset", siguiendo una distribución normal (gaussiana), lo que puede simular de forma más realista el comportamiento humano.
    - ( ) Garantiza que cada pausa sea exactamente de 300ms más o menos 100ms, sin aleatoriedad.
    - ( ) El Gaussian Random Timer solo es útil para pruebas de estrés y no para pruebas de carga funcionales.

319. El "Access Log Sampler" está configurado para usar `org.apache.jmeter.protocol.http.util.accesslog.TCLogParser` y un archivo de log `datos/apiAlumnos.log`. Si el archivo de log no sigue estrictamente el formato esperado por `TCLogParser` (por ejemplo, Tomcat Combined Log Format), ¿cuál es el resultado más probable?
    - ( ) JMeter intentará adivinar el formato y podría generar algunas solicitudes correctas.
    - (x) El sampler fallará en parsear las líneas del log, no generando ninguna solicitud HTTP o generando solicitudes incorrectas, y probablemente mostrando errores en el log de JMeter.
    - ( ) JMeter convertirá automáticamente el formato del log al formato `TCLogParser`.
    - ( ) El sampler utilizará un parser por defecto si `TCLogParser` falla.

320. En la petición HTTP "Login Administradores", se envían los parámetros `login` y `password` con "Content-Type" `text/plain`. Si el servidor espera estos parámetros en el cuerpo de una solicitud POST pero con un "Content-Type" de `application/x-www-form-urlencoded` o `application/json`, ¿qué problema podría surgir?
    - ( ) Ninguno, el servidor interpretará `text/plain` como `application/x-www-form-urlencoded` por defecto.
    - (x) El servidor podría no ser capaz de parsear correctamente los parámetros, resultando en un fallo de autenticación o un error de tipo "Unsupported Media Type" (415).
    - ( ) JMeter convertirá automáticamente el Content-Type al más apropiado antes de enviar la solicitud.
    - ( ) La petición se enviará como GET en lugar de POST debido al Content-Type especificado.

321. En la configuración "CSV Data Set Config" para "Credenciales Administradores", si el archivo `datos/administradores.csv` contiene 10 líneas de datos (excluyendo la cabecera), "Recycle on EOF" es "True", y un Thread Group ejecuta 25 iteraciones usando estas credenciales, ¿qué sucederá con los valores de `login` y `password` a partir de la undécima iteración?
    - ( ) Las variables `login` y `password` quedarán vacías.
    - ( ) El hilo se detendrá ya que "Stop thread on EOF" está implícitamente activado si no se selecciona.
    - (x) JMeter comenzará a leer nuevamente desde la primera línea de datos del archivo CSV.
    - ( ) Se utilizarán los valores de la décima línea para todas las iteraciones restantes.

322. En "HTTP Request Defaults" ("Acceso API"), se especifican `${HOST}` y `${PORT}`. Si un "HTTP Request" individual dentro del mismo ámbito omite el "Server Name or IP" pero especifica un "Path" diferente al de "HTTP Request Defaults" (que está vacío), ¿cómo se construye la URL final de la petición?
 - (x) Se usará el HOST y PORT de Defaults, pero el Path del HTTP Request individual.
 - ( ) Se ignorarán los Defaults y solo se usará el Path del HTTP Request, resultando en una URL incompleta.
 - ( ) Se concatenarán los Paths de Defaults y del HTTP Request individual.
 - ( ) El HTTP Request individual debe redefinir HOST y PORT si define un Path.

323. Considerando el "Regular Expression Extractor" para "Obtener JWT token" que usa la expresión `.+` y "Match No." en 0 (Random), si el cuerpo de la respuesta contiene múltiples líneas y el token JWT aparece en una línea específica, ¿qué comportamiento es más probable para la variable "token"?
 - (x) Capturará todo el cuerpo de la respuesta como una sola cadena, ya que `.` por defecto no incluye saltos de línea y `.+` es greedy.
 - ( ) Capturará aleatoriamente una de las líneas del cuerpo de la respuesta.
 - ( ) No capturará nada si no se usa el modo multilínea en la expresión regular.
 - ( ) Dependerá de la configuración de "Template", que si es `$1$` y la regex `.+` no define grupos de captura, resultará en un error o valor vacío.

324. En el "CSV Data Set Config" ("Credenciales Administradores"), el "Sharing mode" está configurado como "Current thread group". Si este CSV Data Set Config está bajo un Test Plan (y no directamente bajo un Thread Group específico) y es referenciado por dos Thread Groups diferentes, ¿cómo se compartirán los datos del CSV?
 - (x) Cada Thread Group tendrá su propia copia independiente del cursor del archivo CSV, y dentro de cada grupo, todos los hilos compartirán ese cursor.
 - ( ) Todos los hilos de todos los Thread Groups compartirán un único cursor global para el archivo CSV.
 - ( ) El "Sharing mode" "Current thread group" no es válido a nivel de Test Plan y causará un error. Debe ser "All threads".
 - ( ) Solo el primer Thread Group que acceda al CSV podrá leer los datos; el segundo encontrará el archivo bloqueado o vacío.

325. Si el "Gaussian Random Timer" (Desviación 100ms, Offset 300ms) se coloca como hijo directo de una petición HTTP Sampler en lugar de a nivel de Thread Group o Controlador, ¿cuándo se ejecutará la pausa introducida por este temporizador?
 - (x) Antes de que se ejecute cada petición HTTP Sampler de la que es hijo.
 - ( ) Después de que se ejecute cada petición HTTP Sampler de la que es hijo.
 - ( ) No tendrá efecto, ya que los temporizadores solo funcionan a nivel de Thread Group o Controlador.
 - ( ) La pausa se aplicará globalmente a todos los samplers del Thread Group, ignorando su posición específica.

326. En la configuración del "Access Log Sampler", el campo "Parser" está definido como `org.apache.jmeter.protocol.http.util.accesslog.TCLogParser`. Si se quisiera utilizar un formato de log de acceso personalizado que no es compatible con los parsers predeterminados de JMeter, ¿cuál sería el enfoque principal para procesar dicho log?
 - ( ) Modificar el archivo de log para que se ajuste al formato de `TCLogParser`.
 - ( ) Intentar con todos los parsers disponibles en JMeter hasta que uno funcione.
 - (x) Implementar una clase Java que extienda `org.apache.jmeter.protocol.http.util.accesslog.LogParser` o implemente la interfaz `Generator`, y luego especificar el nombre completo de esta clase en el campo "Parser".
 - ( ) Utilizar un script JSR223 PreProcessor para leer y parsear el log manualmente antes de que el Access Log Sampler se ejecute.

327. En la petición HTTP "Login Administradores", si el servidor responde con un código 302 (Redirección) y la opción "Follow Redirects" está marcada, pero el "HTTP Authorization Manager" solo está configurado para la URL original (`/api/v1/auth/login`), ¿qué ocurrirá con las credenciales de autorización en la petición redirigida si esta va a un dominio o path no cubierto por la "Base URL" del Authorization Manager?
 - ( ) JMeter automáticamente aplicará las mismas credenciales a la URL redirigida.
 - (x) La petición redirigida se enviará sin las cabeceras de autorización gestionadas por este Authorization Manager, a menos que otro Authorization Manager aplicable la cubra.
 - ( ) JMeter reintentará la petición original hasta 5 veces antes de seguir la redirección.
 - ( ) Se producirá un error en JMeter indicando una falta de coincidencia de autorización.

328. Si en el "HTTP Authorization Manager" se activa la opción "Clear auth on each iteration?", ¿cuál sería el impacto en un escenario donde un hilo realiza múltiples peticiones HTTP dentro de una misma iteración del bucle del Thread Group, todas ellas requiriendo la misma autorización básica?
 - ( ) Las credenciales se borrarán después de la primera petición HTTP de la iteración, y las subsiguientes fallarán por falta de autorización.
 - (x) Las credenciales se mantendrán para todas las peticiones dentro de la misma iteración; la limpieza ocurre solo al final de la iteración completa del Thread Group.
 - ( ) Esta opción solo afecta a la autorización de tipo Kerberos, no a la Básica.
 - ( ) JMeter solicitará interactivamente las credenciales al inicio de cada iteración.

329. El "Regular Expression Extractor" está configurado para extraer un "token" del "Body" de la respuesta. Si la petición falla (ej. error 500) y el cuerpo de la respuesta es una página de error HTML que no contiene el patrón esperado, ¿qué valor tomará la variable "token" si no se especifica un "Default Value" y no hay coincidencia?
 - ( ) La variable "token" contendrá la cadena "NULL".
 - (x) La variable "token" no se creará o mantendrá su valor previo si ya existía (comportamiento puede variar ligeramente por versión, pero generalmente no se actualiza).
 - ( ) JMeter lanzará una excepción y detendrá el hilo.
 - ( ) La variable "token" contendrá el cuerpo completo de la respuesta de error.

330. En un sistema Linux que utiliza LVM sobre un RAID 1 por software (mdadm) para el directorio `/var`, si uno de los discos físicos del RAID 1 comienza a experimentar fallos de escritura intermitentes que no son inmediatamente detectados como un fallo total por `mdadm`, ¿cuál es el riesgo más significativo?
 - ( ) LVM se volverá de solo lectura.
 - (x) Podría ocurrir una "escritura corrupta silenciosa" en el disco defectuoso, y si este disco se usa para reconstruir el mirror posteriormente, la corrupción podría propagarse al disco sano, comprometiendo la integridad de los datos en el Logical Volume.
 - ( ) mdadm entra en modo degradado sin pérdida de datos inmediata, usando solo el disco sano.
 - ( ) El sistema de archivos (ej. ext4) sobre el LV reparará los bloques afectados en tiempo real.

331. Al configurar `firewalld` en Rocky Linux, si se añade una regla para permitir el puerto 8080/tcp usando `firewall-cmd --add-port=8080/tcp` y posteriormente se ejecuta `firewall-cmd --runtime-to-permanent`, pero no se recarga explícitamente `firewalld` con `firewall-cmd --reload`. Si el sistema se reinicia, ¿cuál será el estado de la regla para el puerto 8080/tcp?
 - (x) Persiste; `runtime-to-permanent` la guarda para el inicio.
 - ( ) No activa; falta `reload` para cargarla en la configuración en ejecución aunque esté guardada.
 - ( ) La regla estará activa solo en la sesión actual, pero se perderá al reiniciar porque `firewall-cmd --reload` es indispensable para hacerla persistente en el arranque del sistema.
 - ( ) La regla se aplicará únicamente a la zona `public` por defecto y no a otras zonas configuradas, independientemente del reinicio o la recarga.

332. En Ansible, un playbook tiene un handler notificado por una tarea que ejecuta un script con `ansible.builtin.command`. Si este script devuelve un código de salida erróneo, pero la tarea tiene `ignore_errors: true`, ¿se ejecutará el handler?
    - ( ) Handler no se ejecuta.
    - (x) Handler se ejecuta; `ignore_errors` implica éxito para la notificación.
    - ( ) Se ejecutará, pero solo si el playbook se invoca con la opción `--force-handlers` para anular el estado de error.
    - ( ) La ejecución del handler dependerá únicamente del estado "changed" de la tarea; `ignore_errors` solo suprime el fallo, no afecta la lógica de notificación por cambio.

333. ¿Cuál es la diferencia fundamental en cómo Docker utiliza los `namespaces` del kernel de Linux en comparación con los `cgroups` para el aislamiento de contenedores?
    - ( ) Namespaces controlan el acceso a recursos (CPU, memoria); cgroups aíslan la vista del proceso (PID, red).
    - (x) Namespaces aíslan vista; cgroups limitan recursos.
    - ( ) Ambos se utilizan para limitar recursos, pero los `namespaces` son primordialmente para el aislamiento de la pila de red y los `cgroups` para la gestión de CPU y memoria exclusivamente.
    - ( ) Los `namespaces` definen la imagen base del contenedor y su sistema de archivos, mientras que los `cgroups` se encargan de gestionar los volúmenes persistentes y el almacenamiento efímero.

334. Al monitorizar un sistema con `top`, si se observa un valor consistentemente alto en `%wa` (I/O wait) y valores bajos en `%us` (user) y `%sy` (system), pero la memoria RAM y swap no están saturadas, ¿cuál es el cuello de botella más probable?
    - ( ) CPU sobrecargada por usuario.
    - (x) El subsistema de almacenamiento (disco duro/SSD o almacenamiento de red) es lento o está sobrecargado, causando que la CPU permanezca inactiva esperando a que se completen las operaciones de entrada/salida pendientes, lo que se refleja en un alto `%wa`.
    - ( ) Un problema de latencia de red, donde la CPU está esperando la llegada de paquetes de red para continuar el procesamiento.
    - ( ) La memoria RAM es insuficiente, lo que fuerza al sistema a realizar un uso excesivo del espacio de swap, y aunque `top` no lo refleje directamente en `%wa` como causa primaria, es el origen del problema.

335. En `prometheus.yml`, el `scrape_interval` global es 15s. Un job para `node_exporter` no define su propio `scrape_interval`. Un panel en Grafana usa `rate(node_cpu_seconds_total[1m])`. ¿Cómo afecta esto la precisión?
    - ( ) `rate` anula `scrape_interval`.
    - (x) `rate(1m)` con scrape de 15s usa 4 puntos de datos; puede sesgar la tasa por pocas muestras.
    - ( ) Prometheus ajustará automáticamente el `scrape_interval` del job a 1 minuto para que coincida con la consulta de `rate`.
    - ( ) La métrica resultante será altamente imprecisa porque la ventana de `rate` (1m) siempre debe ser estrictamente menor que el `scrape_interval` (15s).

336. Al migrar el directorio `/var` a un nuevo Logical Volume (LV) formateado con `ext4` sobre un RAID 1, ¿por qué es crucial `cp -a /var/* /mnt/` en lugar de `cp -r` en modo de mantenimiento?
    - ( ) `cp -a` es significativamente más rápido para grandes cantidades de datos que `cp -r`.
    - (x) `cp -a` preserva todos los atributos; `cp -r` no.
    - ( ) `cp -a` realiza una copia a nivel de bloque físico, mientras que `cp -r` copia a nivel de archivo lógico.
    - ( ) Solo `cp -a` puede manejar correctamente los archivos especiales como sockets y pipes que pueden existir dentro de `/var`.

337. Si `PermitRootLogin prohibit-password` está en `sshd_config`, y `/root/.ssh/authorized_keys` es correcto, ¿por qué podría fallar un login root con clave?
    - ( ) El servicio `sshd` no fue reiniciado tras el cambio en `sshd_config`.
    - ( ) La opción `PubkeyAuthentication` está establecida en `no` en el archivo `sshd_config`.
    - ( ) El directorio `/root` o `/root/.ssh` tienen permisos demasiado abiertos (ej. `777` o escribibles por grupo/otros).
    - (x) Todas las anteriores.

338. En un Dockerfile: `COPY ./myapp /usr/src/app`, `WORKDIR /usr/src/app`, `RUN ["npm", "install"]`. Si `myapp/node_modules` se copia, ¿qué comportamiento tendrá `npm install`?
    - ( ) `npm install` fallará.
    - ( ) `npm install` reinstalará todas las dependencias de `package.json` en el `node_modules` copiado, sobrescribiendo o actualizando módulos.
    - ( ) `npm install` no hará nada si `node_modules` copiado satisface `package.json` para la plataforma del host.
    - (x) Es mejor práctica añadir `node_modules` a `.dockerignore` para evitar copiarlo y siempre ejecutar `npm install` en un entorno limpio dentro del contenedor. `npm install`, si se ejecuta sobre un `node_modules` existente, verificará las dependencias y solo instalará/reconstruirá las faltantes o las que no coincidan con la arquitectura/plataforma del contenedor.

339. Un script cron usa `logger -t MYSCRIPT "Mensaje"`. El sistema usa `rsyslog`. Sin configuración específica para "MYSCRIPT", ¿dónde irán los mensajes y cuál es el problema si `/var/log/syslog` está muy concurrido?
    - ( ) A `/dev/null`.
    - (x) A `/var/log/syslog` o `messages`; filtrar "MYSCRIPT" en un log general muy activo es necesario y puede ser menos eficiente.
    - ( ) `logger` creará `/var/log/MYSCRIPT.log` automáticamente por la etiqueta proporcionada.
    - ( ) Los mensajes solo se enviarán por correo electrónico al propietario del trabajo cron definido en el sistema.

340. En JMeter, un "Regular Expression Extractor" captura un token de un encabezado de respuesta que puede aparecer varias veces. Con "Match No." en 0 (random), ¿cuál es el desafío para obtener consistentemente el token de la *última* aparición?
    - ( ) "Match No." 0 siempre tomará el primer token encontrado en el ámbito de la búsqueda.
    - ( ) Se debe usar "Match No." con valor -1 para obtener todas las coincidencias posibles y luego procesarlas con un JSR223 PostProcessor.
    - (x) "Match No." 0 es aleatorio; no garantiza la última.
    - ( ) El "Regular Expression Extractor" no puede manejar múltiples encabezados con el mismo nombre dentro de una única respuesta.

341. En JMeter, "CSV Data Set Config" con "Recycle on EOF:True", "Stop thread on EOF:False", CSV de 100 líneas, 5 hilos, Loop 30. ¿Qué impacto tiene "Sharing mode: Current thread group" vs "All threads" en la unicidad de datos por hilo?
    - ( ) "Current": cada hilo recicla 1.5x; "All": globalmente más.
    - (x) En "Current thread group", cada uno de los 5 hilos tendrá su propio cursor independiente sobre las 100 líneas; cada hilo leerá las líneas 1-30 del CSV para sus 30 iteraciones (asumiendo que 30 <= 100, si no, reciclará para completar 30). En "All threads", los 5 hilos comparten un único cursor global sobre el archivo CSV; consumirán las 100 líneas de forma colaborativa y luego, como grupo, comenzarán a reciclar. Esto significa que es más probable que los hilos utilicen datos diferentes entre sí en las primeras iteraciones hasta agotar el CSV, pero luego todos reciclarán sobre el mismo conjunto de datos de forma compartida.
    - ( ) "Sharing mode" no afecta la unicidad de los datos asignados a cada hilo, solo la concurrencia de acceso al archivo físico.
    - ( ) Con "All threads", cada hilo obtiene una copia completa en memoria de las 100 líneas del CSV y las utiliza de forma totalmente independiente del resto de los hilos.

342. Un Volume Group (VG) de LVM contiene un PV en SSD y otro en HDD. Se crea un LV sin política de asignación y luego se extiende. ¿Cuál es la implicación crítica para el rendimiento?
    - ( ) LVM asignará los datos más accedidos al SSD.
    - ( ) El rendimiento será consistentemente el del HDD más lento en todas las operaciones del LV.
    - (x) Rendimiento impredecible; LVM asigna secuencialmente.
    - ( ) LVM creará automáticamente un mirror implícito entre el SSD y el HDD para asegurar la consistencia de los datos.

343. Con `ssh-copy-id`, si el home del usuario remoto o `.ssh` tienen permisos excesivos (ej. `777`), ¿por qué podría el servidor SSH rechazar la autenticación por clave aunque `authorized_keys` sea correcta?
    - ( ) Permisos no afectan clave.
    - (x) El servidor SSH (OpenSSH) es estricto con los permisos de los directorios home, `.ssh` y el archivo `authorized_keys` del usuario. Si estos son escribibles por otros usuarios que no sean el propietario o root, SSH considerará esto un riesgo de seguridad (alguien podría modificar `authorized_keys`) y, por lo tanto, rechazará la autenticación basada en claves para proteger al usuario, incluso si la clave pública en sí es válida.
    - ( ) Este problema de permisos solo es relevante si SELinux está en modo `enforcing` en el servidor.
    - ( ) El comando `ssh-copy-id` está diseñado para corregir automáticamente estos problemas de permisos en el servidor remoto.

344. En Ansible, `my_package: httpd` está en `group_vars/all.yml` y `my_package: nginx` en `host_vars/server1.yml`. La tarea `ansible.builtin.package: name={{ my_package }}` ¿qué instalará en `server1`?
    - ( ) `httpd`; `group_vars/all.yml` es más general y se aplica a todos los hosts primero.
    - (x) `nginx`; `host_vars` tiene mayor precedencia.
    - ( ) Ansible generará un error por la definición conflictiva de la variable `my_package`.
    - ( ) Se intentarán instalar ambos paquetes, primero `httpd` y luego `nginx`, sobreescribiendo la configuración.

345. ¿Cuál es la diferencia crítica entre `EXPOSE 3000` en Dockerfile y `-p 8080:3000` en `docker run` para la accesibilidad de red del contenedor?
    - ( ) `EXPOSE` publica a host:3000; `-p` a host:8080.
    - (x) `EXPOSE 3000` en un Dockerfile es principalmente una forma de documentación para el usuario de la imagen y para otras herramientas (como Docker Compose al usar `ports` sin especificar el puerto del host), indicando que la aplicación dentro del contenedor está escuchando en el puerto 3000. No publica el puerto al host por sí mismo ni lo hace accesible desde fuera. La opción `-p 8080:3000` al ejecutar `docker run` es la que efectivamente crea una regla de NAT en el host, mapeando el puerto 3000 del contenedor al puerto 8080 del host, permitiendo así el acceso externo.
    - ( ) Ambos logran exactamente lo mismo en términos de publicación de puertos; `-p` es solo una forma abreviada de `EXPOSE` que se puede usar en tiempo de ejecución.
    - ( ) `EXPOSE` solo funciona si se utiliza Docker Compose para orquestar los contenedores, mientras que la opción `-p` es exclusiva del comando `docker run`.

346. Al configurar una alerta en Grafana basada en `avg_over_time(process_cpu_seconds_total[5m]) > 0.75`, ¿qué impacto tiene la elección del "For" (duración) en la alerta si la métrica fluctúa cerca del umbral?
    - ( ) "For" es espera post-resolución.
    - (x) "For": la condición (CPU > 75%) debe persistir continuamente ese tiempo para "Firing"; evita alertas por picos, pero retrasa notificación.
    - ( ) El "For" define el intervalo con el que Grafana consulta a Prometheus para obtener los datos actualizados de la métrica especificada.
    - ( ) El parámetro "For" solo se utiliza para configurar alertas de tipo "No Data", no para alertas basadas en umbrales de métricas.

347. En el Dockerfile de una aplicación Node.js, se usa `ENV NODE_ENV=production`. ¿Cuál es una consecuencia común de esto para frameworks como Express?
    - ( ) Habilita el logging detallado para depuración avanzada en producción y reduce el rendimiento general de la aplicación.
    - ( ) Desactiva la instalación de todas las dependencias listadas en `devDependencies` durante la ejecución de `npm install`.
    - (x) Activa optimizaciones, deshabilita depuración.
    - ( ) Fuerza a la aplicación Node.js a ejecutarse en un único hilo de proceso para garantizar una mayor estabilidad en el entorno de producción.

348. `logrotate` se ejecuta diariamente vía cron. Configuración en `/etc/logrotate.d/myservice`: `size 10M`, `rotate 4`, `daily`. Si el log de `myservice` crece a 50MB en 12 horas, ¿cuándo y cómo se rotarán?
 - ( ) Rotará al alcanzar 10MB.
 - (x) Solo se rotará una vez al día cuando `logrotate` se ejecute desde cron, independientemente de que haya superado los 10MB mucho antes. En ese momento, `logrotate` evaluará las condiciones. Si el archivo actual excede 10MB, lo rotará (renombrándolo, por ejemplo, a `myservice.log.1`) y creará un nuevo archivo `myservice.log` vacío. Se conservarán hasta 4 archivos rotados. Las directivas `daily` y `size` pueden interactuar; `daily` asegura una rotación si ha pasado un día, `size` fuerza una rotación si el tamaño se excede *en el momento de la ejecución de logrotate*.
 - ( ) La opción `daily` anulará completamente la opción `size 10M`, y el log solo rotará estrictamente cada 24 horas.
 - ( ) El servicio `myservice` debe estar configurado para llamar explícitamente a `logrotate` cada vez que su archivo de log exceda el umbral de 10MB.


349. Al usar `semanage port -a -t ssh_port_t -p tcp 2222` para un puerto SSH no estándar con SELinux en `enforcing`, ¿qué sucede si este comando no se ejecuta tras cambiar el puerto en `sshd_config` y reiniciar `sshd` (asumiendo que `firewalld` permite el puerto)?
    - ( ) SELinux no interfiere.
    - (x) `sshd` no iniciará; SELinux deniega enlace a puerto sin etiqueta `ssh_port_t`.
    - ( ) Las conexiones al nuevo puerto serán permitidas por `firewalld`, pero SELinux registrará múltiples alertas AVC sin bloquear el acceso.
    - ( ) El comando `semanage` solo es necesario si `firewalld` no está instalado o está deshabilitado en el sistema.

350. En Docker Compose, si el servicio `webapp` tiene `depends_on: [db]`, ¿qué garantiza Compose sobre el servicio `db` antes de iniciar `webapp`?
    - ( ) Garantiza que el contenedor `db` se ha iniciado y que la aplicación dentro de `db` (ej. PostgreSQL) está completamente lista y operativa para aceptar conexiones.
    - (x) Solo garantiza inicio de contenedor `db`, no que app esté lista.
    - ( ) Garantiza que la imagen del contenedor `db` ha sido descargada o construida, pero no necesariamente que el contenedor haya sido creado o iniciado.
    - ( ) `depends_on` únicamente controla el orden en que los contenedores son detenidos durante un `docker-compose down`, no el orden de inicio.

351. Un script de Ansible usa `ansible.builtin.lineinfile` con `state: present` para asegurar una línea en `/etc/security/limits.conf`. Si se ejecuta repetidamente y la línea ya existe y coincide, ¿cuál es el comportamiento y cómo afecta al estado "changed"?
    - ( ) Siempre reescribe; changed: true.
    - (x) La tarea verificará la presencia de la línea. Si ya existe y coincide exactamente con la línea especificada, no realizará ninguna modificación en el archivo y, por lo tanto, reportará "changed: false". Este es el comportamiento idempotente fundamental de Ansible. Si la línea no existe, o si se utiliza un `regexp` para buscar una línea a reemplazar y esta no coincide con la línea deseada, entonces `lineinfile` añadirá o modificará la línea según sea necesario y reportará "changed: true".
    - ( ) La tarea fallará con un error si la línea ya existe, a menos que se utilice explícitamente `state: absent` primero para eliminarla.
    - ( ) La tarea añadirá una línea duplicada en cada ejecución si no se usa un `regexp` para buscarla, y siempre reportará "changed: true".

<!-- Test extra  -->