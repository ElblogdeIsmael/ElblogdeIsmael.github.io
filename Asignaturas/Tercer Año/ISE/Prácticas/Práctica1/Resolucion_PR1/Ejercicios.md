# Primer Ejercicio Opcional: Resolucón

### **Resolución del Ejercicio Opcional 2.2: Configuración de Red y SSH en Rocky Linux**  

A continuación, se detalla el procedimiento para realizar el ejercicio opcional 2.2, asegurando que la configuración sea persistente tras cada reinicio del sistema.  

---

## **1. Configuración de la Red en VirtualBox**  

Para garantizar la conectividad de la máquina virtual (MV) tanto con el equipo anfitrión como con Internet, es necesario configurar dos interfaces de red en VirtualBox:  

1. **Primer adaptador:** Modo **NAT**, que permitirá el acceso a Internet.  
2. **Segundo adaptador:** Modo **Host-Only**, para permitir la comunicación con el equipo anfitrión.  

### **Pasos para configurar la red en VirtualBox:**  
1. Apagar la máquina virtual si está en ejecución.  
2. Abrir VirtualBox y acceder a **Configuración → Red**.  
3. En el **"Adaptador 1"**, configurar los siguientes parámetros:  
   - **Habilitar adaptador de red**: Activado.  
   - **Conectado a:** NAT.  
4. En el **"Adaptador 2"**, establecer:  
   - **Habilitar adaptador de red**: Activado.  
   - **Conectado a:** Red solo anfitrión (Host-Only).  
   - Asegurarse de que existe una interfaz "Host-Only" creada en **"Herramientas → Red"** en VirtualBox.  
5. Guardar los cambios y encender la máquina virtual.  

---

## **2. Configuración de la Red en Rocky Linux**  

Una vez iniciada la máquina virtual, se debe configurar la interfaz de red para establecer una dirección IP estática.  

1. **Verificar las interfaces de red disponibles:**  
   ```bash
   ip a
   ```
   Se deben identificar al menos dos interfaces, por ejemplo:  
   - `enp0s3` (correspondiente a NAT, utilizada para el acceso a Internet).  
   - `enp0s8` (correspondiente a Host-Only, utilizada para la comunicación con el anfitrión).  

2. **Asignar una IP estática a la interfaz Host-Only (`enp0s8`)**  
   Editar el archivo de configuración de la interfaz:  
   ```bash
   sudo nano /etc/sysconfig/network-scripts/ifcfg-enp0s8
   ```
   Modificar su contenido para que contenga la siguiente configuración:  
   ```
   DEVICE=enp0s8
   BOOTPROTO=none
   ONBOOT=yes
   IPADDR=192.168.56.100
   NETMASK=255.255.255.0
   ```
   Guardar los cambios y cerrar el editor.  

3. **Reiniciar la configuración de red para aplicar los cambios:**  
   ```bash
   sudo systemctl restart NetworkManager
   ```

4. **Verificar que la configuración se ha aplicado correctamente:**  
   ```bash
   ip a
   ```
   La interfaz `enp0s8` debe reflejar la dirección IP **192.168.56.100**.  

---

## **3. Validación de Conectividad**  

Para confirmar que la configuración de red es correcta, se deben realizar las siguientes pruebas de conectividad.  

### **3.1. Ping desde el equipo anfitrión a la máquina virtual**  
Desde el equipo anfitrión (Windows o Linux), ejecutar:  
```bash
ping 192.168.56.100
```
Si la máquina virtual responde correctamente, significa que la comunicación entre el anfitrión y la MV está funcionando.  

### **3.2. Ping desde la máquina virtual al equipo anfitrión**  
Desde la máquina virtual, ejecutar:  
```bash
ping 192.168.56.1
```
(Si la dirección de la interfaz Host-Only del anfitrión es diferente, se debe ajustar el comando).  

### **3.3. Ping desde la máquina virtual a un servidor en Internet**  
Desde la máquina virtual, probar conectividad con Internet mediante:  
```bash
ping 8.8.8.8
```
Si este comando no responde, se debe revisar la configuración del adaptador NAT.  

---

## **4. Configuración y Validación de SSH**  

Para permitir el acceso remoto a la máquina virtual mediante SSH, es necesario configurar y habilitar el servicio SSHD.  

### **4.1. Verificación de instalación del servicio SSHD**  
Ejecutar el siguiente comando para comprobar si el paquete `openssh-server` está instalado:  
```bash
rpm -q openssh-server
```
Si no está instalado, proceder con la instalación:  
```bash
sudo dnf install -y openssh-server
```

### **4.2. Habilitación y arranque del servicio SSHD**  
Para iniciar el servicio SSHD y asegurarse de que se inicie automáticamente en cada reinicio del sistema:  
```bash
sudo systemctl enable --now sshd
```
Verificar el estado del servicio con:  
```bash
sudo systemctl status sshd
```
El servicio debe estar en estado **"active (running)"**.  

### **4.3. Configuración del Firewall para SSH**  
Para permitir conexiones SSH, es necesario abrir el puerto correspondiente en el firewall:  
```bash
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload
```
Se puede verificar que la regla se aplicó correctamente con:  
```bash
sudo firewall-cmd --list-services
```
Debe aparecer `ssh` en la lista.  

### **4.4. Prueba de conexión SSH desde el equipo anfitrión**  
Desde el equipo anfitrión, abrir un terminal y ejecutar:  
```bash
ssh usuario@192.168.56.100
```
(Sustituyendo `usuario` por el nombre de usuario configurado en la máquina virtual).  

Si se solicita la contraseña y se establece la conexión, significa que SSH está funcionando correctamente.  

---

## **5. Validación de Persistencia de la Configuración**  

Para garantizar que la configuración de red y SSH se mantenga tras un reinicio del sistema, se deben realizar las siguientes verificaciones:  

1. **Confirmar que las interfaces de red se activan al inicio:**  
   ```bash
   sudo systemctl is-enabled NetworkManager
   ```
   Si devuelve `enabled`, significa que se activará automáticamente en cada inicio.  

2. **Confirmar que el servicio SSHD se ejecuta al inicio:**  
   ```bash
   sudo systemctl is-enabled sshd
   ```
   Si devuelve `enabled`, el servicio SSH estará activo tras cada reinicio.  

3. **Reiniciar la máquina virtual y repetir las pruebas de conectividad y SSH:**  
   ```bash
   sudo reboot
   ```
   Luego de reiniciar, se deben repetir los comandos `ping` y `ssh` para asegurarse de que la configuración se mantiene intacta.  

---