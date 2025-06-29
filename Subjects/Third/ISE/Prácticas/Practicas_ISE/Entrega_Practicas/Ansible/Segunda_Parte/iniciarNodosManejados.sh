#!/bin/bash
echo "Iniciando máquinas virtuales..."
VBoxManage startvm srv1 --type headless
VBoxManage startvm srv2 --type headless
echo "Esperando 10 segundos para asegurar arranque..."
sleep 10
echo "Comprobando conectividad con Ansible..."
ansible all -i inventory/hosts.ini -m ping

