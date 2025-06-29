#encoding:utf-8
require_relative 'combat_element'
module Irrgarten
    # Clase que representa un arma en el juego.
    # Un arma tiene un nivel de potencia y un número limitado de usos.
    class Weapon < CombatElement   

        # Realiza un ataque con el arma si tiene usos restantes.
        # Decrementa los usos en 1 cada vez que se usa.
        #
        # @return [Integer] Potencia del arma si tiene usos restantes, 0 en caso contrario.
        def attack
            self.produce_effect
        end

        # Convierte el arma a una representación en cadena.
        #
        # @return [String] Representación en cadena del arma, formato "W[power, uses]".
        def to_s
            "W[#@power, #@uses]"
        end
    end
end
