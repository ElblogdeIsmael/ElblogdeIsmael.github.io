# Informe de Configuración de Servidores con Ansible

## Datos del alumno

- **Nombre**: Ismael
- **Fecha**: Abril 2025
- **Entorno**: Ubuntu con dos máquinas virtuales Rocky Linux (`srv1` y `srv2`) con IPs:
  - `192.168.56.103`
  - `192.168.56.104`

---

**Nota:** Deben de estar ambas máquinas encendidas para esta parte.

## Estructura de la solución

```
Primera_parte/
├── playbook.yml          ← Aquí se define qué se va a hacer
├── hosts.ini             ← Aquí se indica en qué servidores se va a hacer
├── group_vars/
│   └── all.yml           ← Aquí se definen variables reutilizables (ej: claves, usuarios...)
├── tasks/
│   └── crear_usuario.yml ← Subtareas reutilizables
└── claves/               ← Aquí guardas llaves públicas y privadas
```

## Objetivo del ejercicio

Configurar mediante Ansible los siguientes aspectos en ambos servidores:

1. Crear un usuario `admin` con privilegios `sudo` sin contraseña.
2. Dar acceso SSH al usuario `admin` mediante clave pública.
3. Crear el grupo `wheel` (si no existe) y permitir que sus miembros puedan usar `sudo`.
4. Crear una lista variable de usuarios (ejemplo: `juan` y `maria`), añadirlos al grupo `wheel` y permitir acceso SSH con clave pública.
5. Deshabilitar el acceso por contraseña al usuario `root`.

---

## Comprobaciones realizadas

### 1. Verificar existencia del usuario `admin`

```bash
id admin
```

Salida muestra que el usuario `admin` existe y pertenece a los grupos esperados.

---

### 2. Verificar que `admin` puede usar `sudo` sin contraseña

```bash
sudo -u admin sudo -n true
```

Si el comando no solicita contraseña y no da error, significa que `admin` tiene privilegios sudo sin contraseña.

---

### 3. Verificar acceso SSH con clave pública para `admin`

```bash
ssh -i claves/id_rsa_admin admin@192.168.56.103
```

Se establece conexión sin necesidad de contraseña, lo que indica que la clave pública funciona correctamente.

---

### 4. Verificar existencia del grupo `wheel` y sus miembros

```bash
getent group wheel
```

Salida contiene a `admin`, `juan`, `maria`, etc.

---

### 5. Verificar claves públicas de usuarios variables

```bash
cat /home/juan/.ssh/authorized_keys
cat /home/maria/.ssh/authorized_keys
```

Salida muestra las claves públicas configuradas correctamente para cada usuario.

---

### 6. Verificar deshabilitación del login por contraseña para `root`

```bash
sudo grep 'PermitRootLogin' /etc/ssh/sshd_config
```

Salida:

```text
PermitRootLogin prohibit-password
```

Esto indica que el acceso a `root` solo es posible mediante clave pública (no con contraseña).

---

## Conclusión

Todos los objetivos del ejercicio han sido cumplidos satisfactoriamente. Se ha verificado que:

- El usuario `admin` existe y tiene privilegios sudo sin contraseña.
- El acceso SSH con claves públicas funciona correctamente.
- El grupo `wheel` está configurado y funcional.
- Se han añadido usuarios adicionales con acceso SSH y permisos adecuados.
- Se ha restringido el acceso por contraseña al usuario `root`.

---

---
**comando para probarlo**: `ansible-playbook -i hosts.ini -u root --ask-pass playbook.yml`
---


