#encoding:utf-8
# La enumeración {Directions} define las direcciones básicas de movimiento 
# en un entorno bidimensional.
# 
# Las direcciones posibles son:
# - {Directions::LEFT} - Movimiento hacia la izquierda
# - {Directions::RIGHT} - Movimiento hacia la derecha
# - {Directions::UP} - Movimiento hacia arriba
# - {Directions::DOWN} - Movimiento hacia abajo
module Irrgarten
    class Directions
        # Movimiento hacia la izquierda.
        LEFT = :left
        
        # Movimiento hacia la derecha.
        RIGHT = :right
        
        # Movimiento hacia arriba.
        UP = :up
        
        # Movimiento hacia abajo.
        DOWN = :down
    end 
end

