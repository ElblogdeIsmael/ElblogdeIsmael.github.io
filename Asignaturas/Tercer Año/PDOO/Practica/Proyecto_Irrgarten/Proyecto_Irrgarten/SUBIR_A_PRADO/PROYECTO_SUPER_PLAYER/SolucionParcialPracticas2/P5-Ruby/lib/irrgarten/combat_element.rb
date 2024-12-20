#encoding : UTF-8

require_relative 'dice'

module Irrgarten

    #Clase que representa un elemento de combate que puede ser weapon o shield
    #
    # es abstracta, pero en ruby no existe la abstracción
    # @author Ismael Sallami Moreno 
    class CombatElement
        #Constructor de la clase
        # @param effect [Float] Efecto del elemento de combate
        # @param uses [Int] Número de usos del elemento de combate
        def initialize(effect, uses)
            @effect = effect
            @uses = uses
        end

        protected
        # Método que devuelve el efecto si quedan usos
        # @return [Float] Efecto del elemento de combate
        def produce_effect
            val = 0
            if @uses>0
                @uses -= 1
                val = @effect
            end
            val
        end
        public
        # Método que devuelve si elemento debe de ser descartado
        # @return [Boolean] `true` si el elemento debe ser descartado, `false` en caso contrario    
        def discard
            Dice.discardElement(@uses)
        end

        # Método que devuelve el string del elemento de combate
        # @return [String] String del elemento de combate
        def to_s
            "Elemento de Combate: Effect: #{@effect}, Uses: #{@uses}"
        end

    end

end
