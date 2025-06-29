## 🧠 ¿Qué es Ansible?

Ansible es una herramienta que sirve para **automatizar tareas en servidores** (por ejemplo, instalar software, crear usuarios, configurar servicios…).

---

## 🧰 ¿Qué necesitas para usar Ansible?

1. ✅ Un ordenador donde ejecutar Ansible (por ejemplo, tu portátil con Linux).
2. ✅ Unos servidores accesibles por red (por ejemplo, máquinas virtuales con IPs como `192.168.56.103`).
3. ✅ Acceso por SSH a esos servidores.

---

## 🗺️ ¿Cómo se estructura un proyecto de Ansible?

Un proyecto típico tiene estos archivos:

```
ansible-ejercicio/
├── playbook.yml          ← Aquí se define qué se va a hacer
├── hosts.ini             ← Aquí se indica en qué servidores se va a hacer
├── group_vars/
│   └── all.yml           ← Aquí se definen variables reutilizables (ej: claves, usuarios...)
├── tasks/
│   └── crear_usuario.yml ← Subtareas reutilizables
└── claves/               ← Aquí guardas llaves públicas y privadas
```

---

## 📁 El archivo `hosts.ini`

Es tu **inventario de servidores**. Ejemplo:

```ini
[servidores]
192.168.56.103
192.168.56.104

[servidores:vars]
ansible_user=root
ansible_ssh_pass=contraseña123
ansible_port=22
```

Esto le dice a Ansible:

> “Conéctate como root a las IPs 103 y 104 por el puerto 22 usando esa contraseña”.

---

## 📜 El archivo `playbook.yml`

Un **playbook** es una receta: lista de tareas a ejecutar en los servidores.

Ejemplo:

```yaml
- name: Configurar servidores Rocky con Ansible
  hosts: servidores
  become: true  # Para usar sudo

  tasks:
    - name: Crear usuario admin
      user:
        name: admin
        groups: wheel
        state: present
```

Este fragmento dice:

> “Ve a todos los servidores del grupo `servidores` (del `hosts.ini`), y crea un usuario `admin` con permisos de sudo”.

---

## 📦 Variables reutilizables: `group_vars/all.yml`

Aquí defines cosas que vas a usar en tu `playbook`, como nombres de usuarios o claves:

```yaml
admin_user: admin
ssh_pub_key_admin: "{{ lookup('file', 'claves/id_rsa_admin.pub') }}"
usuarios_extra:
  - nombre: juan
    clave: "{{ lookup('file', 'claves/id_rsa_juan.pub') }}"
  - nombre: maria
    clave: "{{ lookup('file', 'claves/id_rsa_maria.pub') }}"
```

---

## 🏃‍♂️ ¿Qué pasa cuando ejecutas `ansible-playbook`?

Supón que haces:

```bash
ansible-playbook -i hosts.ini playbook.yml
```

### Ansible hace:

1. 🔍 **Lee** `hosts.ini` para saber a qué servidores conectarse.
2. 🔑 Se conecta por **SSH** a cada IP usando el usuario/clave del inventario.
3. 📖 **Lee** `playbook.yml` y empieza a ejecutar las tareas, una a una.
4. 📦 Si el playbook necesita variables, las busca en `group_vars/all.yml`.
5. 🛠️ Aplica los cambios a los servidores remotos.
6. ✅ Muestra qué tareas se realizaron y si hubo errores.

---

## 🧪 ¿Cómo probar si todo funciona?

Antes de ejecutar un playbook, puedes probar si Ansible se conecta:

```bash
ansible servidores -i hosts.ini -m ping
```

Esto intenta un "ping lógico" (vía SSH) y devuelve “pong” si todo va bien.

---

## 🎯 Resumen visual

```bash
[ Tú ] --ansible--> [ hosts.ini → IPs ] --SSH→ [ Servidor 1 ]
                                      \--SSH→ [ Servidor 2 ]
```

Y Ansible ejecuta el `playbook.yml` en cada servidor.

---
