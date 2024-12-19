#encoding: UTF-8
# @autor: Ismael Sallami Moreno
module Irrgarten
    class LabyrinthCharacter
        # La fila o columna inválida.
        @@INVALID_POS=-1
        
        # Initializes a new LabyrinthCharacter object.
        #
        # @param name [String] el nombre del personaje
        # @param intelligence [Integer] el nivel de inteligencia del personaje
        # @param strength [Integer] el nivel de fuerza del personaje
        # @param health [Integer] el nivel de salud del personaje
        def initialize(name, intelligence, strength, health)
            @name = name
            @intelligence = intelligence
            @strength = strength
            @health = health
            @row = @@INVALID_POS
            @col = @@INVALID_POS
        end


        #-----------definición de accessor, reader, ...-----------
        protected
        # Consultor de @name
        # @return [String] nombre del personaje
        attr_reader :name

        # Consultor de @intelligence
        # @return [float] inteligencia del personaje
        attr_reader :intelligence

        # Consultor de @strength
        # @return [float] fuerza del personaje
        attr_reader :strength

        # Consultor y modificador de @health
        # @return [float] salud del personaje
        attr_accessor :health

        public
        # Consultor de @row
        # @return [int] fila de la posición del personaje
        attr_reader :row

        # Consultor de @col
        # @return [int] columna de la posición del personaje
        attr_reader :col

        #-----------definición de accessor, reader, ...-----------


        # Modificador de la posición del personaje
        #
        # @param row [int] fila de la posición del personaje
        # @param col [int] columna de la posición del personaje
        def pos(row, col)
            @row = row
            @col = col
        end




        # Crea una copia de otro objeto LabyrinthCharacter.
        #
        # @param other [LabyrinthCharacter] el otro objeto LabyrinthCharacter
        # @return [LabyrinthCharacter] una nueva instancia de LabyrinthCharacter
        def copy(other) # copia superficial
            @name = other.name
            @intelligence = other.intelligence
            @strength = other.strength
            @health = other.health
            pos(other.row, other.col)
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

        # # Establece el nivel de salud del personaje.
        # #
        # # @param health [Integer] el nuevo nivel de salud del personaje
        # def set_health(health)
        #     @health = health
        # end

        public

        # Establece la posición del personaje en el laberinto.
        #
        # @param row [Integer] la nueva fila del personaje
        # @param col [Integer] la nueva columna del personaje
        def setPos(row, col)
            @row = row
            @col = col
        end

        # Devuelve una representación en cadena del personaje.
        #
        # @return [String] una cadena que representa al personaje
        def to_s
            "#{@name} (Intelligence: #{@intelligence}, Strength: #{@strength}, Health: #{@health}, Row: #{@row}, Col: #{@col})"
        end

        protected
        
        # Reduce la salud del personaje en 1.
        def gotWounded
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




