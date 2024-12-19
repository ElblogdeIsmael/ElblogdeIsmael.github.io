#encoding: UTF-8
require_relative 'player'
require_relative 'dice'

# Module containing classes related to the Irrgarten game.
module Irrgarten
    # Clase que representa a un FuzzyPlayer en el juego Irrgarten.
    # Hereda de Player y añade lógica difusa para el movimiento y el ataque.
    #
    # @!author Ismael Sallami Moreno
    class FuzzyPlayer < Player
        # Inicializa un nuevo FuzzyPlayer copiando otro jugador.
        #
        # @param other [Player] el jugador a copiar
        # @return [void]
        def initialize(other)
            copy(other)
        end

        # Determina el siguiente movimiento basado en lógica difusa.
        #
        # @param direction [Symbol] la dirección a moverse
        # @param validMoves [Array<Symbol>] los movimientos válidos disponibles
        # @return [Symbol] la dirección elegida
        def move(direction, validMoves)
            preference = super(direction, validMoves)
            Dice.nextStep(preference, validMoves, intelligence)
        end

        # Calcula la intensidad del ataque basado en la fuerza y las armas.
        #
        # @return [float] la intensidad del ataque
        def attack
            Dice.intensity(@strength) + sumWeapons
        end

        # Devuelve una representación en cadena del FuzzyPlayer.
        #
        # @return [String] la representación en cadena
        def to_s
            "[Fuzzy] #{super.to_s} "
        end

        protected

        # Calcula la energía defensiva basada en la inteligencia y los escudos.
        #
        # @return [float] la energía defensiva
        def defensive_energy
            Dice.intensity(@intelligence) + sumShields
        end
    end
end

