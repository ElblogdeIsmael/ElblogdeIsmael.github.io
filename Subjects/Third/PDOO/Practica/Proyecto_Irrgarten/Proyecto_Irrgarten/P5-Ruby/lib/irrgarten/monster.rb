#encoding:utf-8
require_relative 'labyrinth_character'

# Módulo principal del juego Irrgarten, que contiene las clases de monstruos, jugadores y otros elementos.
module Irrgarten
    # Representa un monstruo en el juego con atributos de salud, posición, fuerza e inteligencia.
    class Monster < LabyrinthCharacter
        # Salud inicial de un monstruo.
        @@INITIAL_HEALTH = 5

        # Inicializa un nuevo monstruo con los atributos de nombre, inteligencia, fuerza, salud y posición.
        #
        # @param name [String] El nombre del monstruo.
        # @param intelligence [Integer] La inteligencia del monstruo.
        # @param strength [Integer] La fuerza del monstruo.
        def initialize(name, intelligence, strength)
            super(name, intelligence, strength, @@INITIAL_HEALTH)
        end


        # Realiza un ataque utilizando la fuerza del monstruo.
        #
        # @return [Integer] La intensidad del ataque del monstruo.
        def attack 
            return Dice.intensity(@strength)
        end


        # Gestiona la defensa del monstruo (detalles en prácticas futuras).
        #
        # @return [boolean]
        def defend( receivedAttack)
            isDead = dead
            if isDead
                defensiveEnergy = Dice.intensity(@intelligence)

                if defensiveEnergy<receivedAttack
                    gotWounded
                    isDead = dead
                end
            end
            isDead
        end
    end
end
