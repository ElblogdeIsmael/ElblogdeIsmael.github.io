# ANOTACIONES

Ya he realizado la primera parte del ejercicio de ansible y todo funciona correctamente.

**comando para probarlo**: `ansible-playbook -i hosts.ini -u root --ask-pass playbook.yml`


## Comprobaciones:

1. Para ver que el usuario admin existe: `id admin`.
2. Para ver que admin puede ejecutar sudo sin contraseña: `sudo -u admin sudo -n true`, y si no pide contraseña funciona.
3. Probamos si nos podemos conectar mediante ssh: `ssh -i claves/id_rsa_admin admin@192.168.56.103`
4. Para ver si el grupo wheel exite: `gatent group wheel` y nos debe de salir los usuarios que pertenecen a él.
5. Añadir una lista variable de usuarios (se proporcionará un ejemplo con al menos dos), añadiéndolos al grupo “wheel” y concediéndoles acceso por SSH con llave pública: Para ello ejecutamos los comandos: `cat /home/juan/.ssh/authorized_keys
; cat /home/maria/.ssh/authorized_keys` dentro de la máquina y debe de devolver el fichero.
6. Accediendo al fichero con el comando que sigue: `sudo nano /etc/ssh/sshd_config` vemos que al final del mismo se encuentra la línea: `PermitRootLogin prohibit-password`

chat de ayuda: https://chatgpt.com/c/67fc2b00-1958-800c-bbe1-60b346adbad8, con la cuenta de ismEngineer
