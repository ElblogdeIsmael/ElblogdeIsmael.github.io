# Uso del código en un archivo separado
require_relative 'Ejemplo'

p = Ejemplo.new
puts p.contador  # Salida: 0

p.aumentar
p.aumentar
puts p.contador  # Salida: 2
