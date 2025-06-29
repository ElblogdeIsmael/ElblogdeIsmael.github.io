#!/bin/bash
echo "Ejecutando playbook para configurar servidores web..."
ansible-playbook -i inventory/hosts.ini playbooks/configurar_web.yml

