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

        # Verifica si el monstruo está muerto (salud <= 0).
        #
        # @return [Boolean] `true` si la salud es 0 o menor, `false` en caso contrario.
        def dead 
            return @health <= 0
        end

        # Realiza un ataque utilizando la fuerza del monstruo.
        #
        # @return [Integer] La intensidad del ataque del monstruo.
        def attack 
            return Dice.intensity(@strength)
        end

        # # Establece la posición del monstruo en una fila y columna específicas.
        # #
        # # @param row [Integer] La fila de la nueva posición.
        # # @param col [Integer] La columna de la nueva posición.
        # # @return [void]
        # def setPos(row, col)
        #     @row = row
        #     @col = col
        # end

        # # Convierte el estado del monstruo en un string para representación.
        # #
        # # @return [String] La representación del monstruo en formato `M[nombre, inteligencia, fuerza, salud, fila, columna]`.
        # def to_s
        #     #return "Monster[name: #{@name}, intelligence: #{@intelligence}, strength: #{@strength}, health: #{@health}, row: #{@row}, col: #{@col}]"
        #     output = "[MONSTER]"
        #     output += super.to_s
        # end

        # # Reduce la salud del monstruo en 1 punto, indicando que ha sido herido.
        # #
        # # @return [void]
        # def gotWounded 
        #     @health -= 1
        # end

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
            return isDead
        end

        # -----###-----###-----###--FUNCIONES AUXILIARES IMPLEMENTADAS DE MI PARTE PARA AYUDARME A REALIZAR PRUEBAS---###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-

        # Obtiene la fila de la posición actual del monstruo.
        #
        # @return [Integer] La fila de la posición actual.
        def get_pos_x
            return @row
        end

        # Obtiene la columna de la posición actual del monstruo.
        #
        # @return [Integer] La columna de la posición actual.
        def get_pos_y
            return @col
        end
        # -----###-----###-----###--FUNCIONES AUXILIARES IMPLEMENTADAS DE MI PARTE PARA AYUDARME A REALIZAR PRUEBAS---###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-
    end
end
