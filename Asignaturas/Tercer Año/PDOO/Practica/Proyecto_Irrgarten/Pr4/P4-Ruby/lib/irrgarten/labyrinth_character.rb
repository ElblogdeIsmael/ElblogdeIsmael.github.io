#encoding: UTF-8
# @autor: Ismael Sallami Moreno
module Irrgarten
    class LabyrinthCharacter
        @@INVALID_POS=-1
        # Initializes a new LabyrinthCharacter object.
        #
        # @param name [String] el nombre del personaje
        # @param intelligence [Integer] el nivel de inteligencia del personaje
        # @param strength [Integer] el nivel de fuerza del personaje
        # @param health [Integer] el nivel de salud del personaje
        def inititialize(name, intelligence, strength, health)
            @name = name
            @intelligence = intelligence
            @strength = strength
            @health = health
            @row = @@INVALID_POS
            @col = @@INVALID_POS
        end

        # Crea una copia de otro objeto LabyrinthCharacter.
        #
        # @param other [LabyrinthCharacter] el otro objeto LabyrinthCharacter
        # @return [LabyrinthCharacter] una nueva instancia de LabyrinthCharacter
        def copy(other)
            LabyrinthCharacter.new(other.name, other.intelligence, other.strength, other.health)
        end

        # Verifica si el personaje está muerto.
        #
        # @return [Boolean] true si el personaje está muerto, false en caso contrario
        def dead
            @health <= 0
        end

        # Obtiene la fila actual del personaje.
        #
        # @return [Integer] la fila actual del personaje
        def get_row
            @row
        end

        # Obtiene la columna actual del personaje.
        #
        # @return [Integer] la columna actual del personaje
        def get_col
            @col
        end

        protected 

        # Obtiene el nivel de inteligencia del personaje.
        #
        # @return [Integer] el nivel de inteligencia del personaje
        def get_intelligence
            @intelligence
        end

        # Obtiene el nivel de fuerza del personaje.
        #
        # @return [Integer] el nivel de fuerza del personaje
        def get_strength
            @strength
        end

        # Obtiene el nivel de salud del personaje.
        #
        # @return [Integer] el nivel de salud del personaje
        def get_health
            @health
        end

        # Establece el nivel de salud del personaje.
        #
        # @param health [Integer] el nuevo nivel de salud del personaje
        def set_health(health)
            @health = health
        end

        public

        # Establece la posición del personaje en el laberinto.
        #
        # @param row [Integer] la nueva fila del personaje
        # @param col [Integer] la nueva columna del personaje
        def set_pos(row, col)
            @row = row
            @col = col
        end

        # Devuelve una representación en cadena del personaje.
        #
        # @return [String] una cadena que representa al personaje
        def to_s
            "Labyrinth Character#{@name} (Row: #{@row}, Col: #{@col})"
        end

        protected
        
        # Reduce la salud del personaje en 1.
        def got_wounded
            @health -= 1
        end

        public

        # Método abstracto para atacar.
        #
        # @raise [NotImplementedError] si el método no es implementado por una subclase
        def attack
            raise NotImplementedError
        end

        # Método abstracto para defenderse de un ataque.
        #
        # @param attack [Object] el ataque recibido
        # @raise [NotImplementedError] si el método no es implementado por una subclase
        def defend(attack)
            raise NotImplementedError
        end
    end
end




