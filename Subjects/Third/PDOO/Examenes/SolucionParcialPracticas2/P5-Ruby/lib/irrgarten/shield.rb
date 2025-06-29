#encoding:utf-8
require_relative 'combat_element'
module Irrgarten
    # Clase que representa un escudo en el juego.
    # Un escudo tiene un nivel de protección y un número limitado de usos.
    class Shield < CombatElement

        # Proporciona protección si el escudo tiene usos restantes. 
        # Decrementa los usos en 1 cada vez que se utiliza.
        #
        # @return [Integer] Nivel de protección si tiene usos restantes, 0 en caso contrario.
        def protect
            self.produce_effect
        end
        
        # Convierte el escudo a una representación en cadena.
        #
        # @return [String] Representación en cadena del escudo, formato "S[protection, uses]".
        def to_s    
            "S[#{@protection}, #{@uses}]"
        end
    end
end
