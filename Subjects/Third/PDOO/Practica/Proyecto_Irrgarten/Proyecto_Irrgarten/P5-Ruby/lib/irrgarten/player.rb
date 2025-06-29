#encoding:utf-8

require_relative 'weapon'
require_relative 'shield'
require_relative 'dice'
require_relative 'labyrinth_character'


# Módulo principal del juego Irrgarten, que contiene las clases de jugadores y otros elementos.
module Irrgarten 
    # Representa un jugador en el juego con atributos de salud, posición, fuerza, y defensas.
    class Player < LabyrinthCharacter
        # Número máximo de armas que un jugador puede llevar.
        @@MAX_WEAPONS = 2

        # Número máximo de escudos que un jugador puede llevar.
        @@MAX_SHIELDS = 3

        # Salud inicial con la que un jugador comienza o es resucitado.
        @@INITIAL_HEALTH = 10

        # Cantidad de golpes consecutivos necesarios para perder la partida.
        @@HITS2LOSE = 3

        # Inicializa un nuevo jugador con los atributos básicos de nombre, número, inteligencia y fuerza.
        #
        # @param number [Integer] El número de identificación del jugador.
        def initialize(number, intelligence, strength)
            super("Player#{number}", intelligence, strength, @@INITIAL_HEALTH)
            @number = number.to_s
            @consecutiveHits = 0 # Número de golpes consecutivos recibidos
            @weapons = Array.new # Array de armas
            @shields = Array.new # Array de escudos

        end 

        # Consultor de @number
        # @return [char] número del jugador
        attr_reader :number

        protected
        # Consultor de @weapons
        # @return [Array<Weapon>] array de armas del jugador
        attr_reader :weapons

        # Consultor de @shields
        # @return [Array<Shield>] array de escudos del jugador
        attr_reader :shields

        # Consultor de @consecutive_hits
        # @return [int] número de golpes consecutivos recibidos
        attr_reader :consecutiveHits

        public

        # Constructor de copia
        #
        # @param other [Player] El jugador original del que se creará una copia.
        # @return [void]
        #
        # Copia los atributos básicos del jugador original y los agrega al nuevo jugador.
        def copy(other)
            super
            @number = other.number
            @consecutiveHits = other.consecutiveHits
            @weapons = other.weapons
            @shields = other.shields
        end

        # Resucita al jugador, restaurando su salud inicial y reiniciando sus armas y escudos.
        #
        # @return [void]
        def resurrect 
            @health = @@INITIAL_HEALTH
            resetHits
            @weapons = Array.new
            @shields = Array.new
        end

        # Realiza un ataque utilizando la fuerza del jugador y el poder de sus armas.
        #
        # @return [Integer] La intensidad del ataque.
        def attack
            return @strength + sumWeapons
        end

        # Gestiona la defensa del jugador contra un ataque recibido.
        #
        # @param receivedAttack [Integer] El valor del ataque recibido.
        # @return [Integer] El resultado de la gestión del ataque.
        def defend(receivedAttack)
            return manageHits(receivedAttack)
        end

        # Convierte el estado del jugador en un string para representación.
        #
        # @return [String] La representación del jugador en formato `P[nombre, inteligencia, fuerza, salud, fila, columna]`.
        def to_s
            output = ""
            output += "[PLAYER]" + super.to_s
            output += "\nWeapons:"
            weapons.each do |w|
                output += "\n#{w.to_s}"
            end
            output += "\nShields:"
            shields.each do |s|
                output += "\n#{s.to_s}"
            end
            output += "\nConsecutive hits: #{@consecutiveHits}\n"
        end


        
        # Mueve al jugador en una dirección específica si es válida.
        #
        # @param direction [String] La dirección en la que se desea mover.
        # @param validMoves [Array<String>] Las direcciones válidas en las que el jugador puede moverse.
        # @return [String] La dirección en la que el jugador se moverá.
        def move(direction, validMoves) 
            size = validMoves.size
            firstElement = direction
            contained = validMoves.include?(direction)
            
            if size > 0 && !contained
                firstElement = validMoves[0]
            end
                
            firstElement
        end
        
        # Recibe recompensas para el jugador, que pueden incluir armas, escudos y salud extra.
        # El número de armas y escudos recibidos se determina lanzando dados.
        # La salud extra también se determina lanzando un dado.
        #
        # @return [void]
        def receiveReward
            wReward = Dice.weaponReward
            sReward = Dice.shieldReward

            for i in 0...wReward
                wnew = newWeapon
                receiveWeapon(wnew)
            end

            for i in 0...sReward
                snew = newShield
                receiveShield(snew)
            end

            extraHealth = Dice.healthReward
            @health += extraHealth
        end
        
        private 

        # Recibe una nueva arma para el jugador, descartando las armas usadas si es necesario.
        #
        # @param w [Weapon] La nueva arma a recibir.
        # @return [void]
        def receiveWeapon(w)
            @weapons.delete_if do |wi| # eliminamos las armas que debemos de eliminar
                wi.discard
            end

            if(@weapons.length < @@MAX_WEAPONS) # si caben se añaden
                @weapons.push(w)
            end
        end

        # Recibe un nuevo escudo para el jugador, descartando los escudos usados si es necesario.
        #
        # @param s [Shield] El nuevo escudo a recibir.
        # @return [void]    
        def receiveShield(s)
            @shields.delete_if do |si| # eliminamos los escudos que debemos de eliminar
                si.discard
            end

            if(@shields.length < @@MAX_SHIELDS) # si caben se añaden
                @shields.push(s)
            end
        end

        # Crea una nueva arma con poder y usos restantes aleatorios.
        #
        # @return [Weapon] La nueva arma generada.
        def newWeapon
            w = Weapon.new(Dice.weaponPower, Dice.usesLeft)
            return w 
        end

        # Crea un nuevo escudo con poder defensivo aleatorio.
        #
        # @return [Shield] El nuevo escudo generado.
        def newShield
            s = Shield.new(Dice.shieldPower, Dice.usesLeft)
            return s
        end
        

        # Gestiona los golpes recibidos por el jugador y determina si pierde la partida.
        #
        # @param receivedAttack [Integer] El valor del ataque recibido.
        # @return [Boolean] `true` si el jugador pierde la partida, `false` en caso contrario.
        def manageHits(receivedAttack)
            lose = true
            defense = defensiveEnergy
            if defense < receivedAttack
                gotWounded
                incConsecutiveHits
            else
                resetHits
            end
            if @consecutiveHits == @@HITS2LOSE || dead 
                resetHits
                lose = true
            else
                lose = false
            end
            return lose
        end

        # Reinicia el contador de golpes consecutivos del jugador.
        #
        # @return [void]
        def resetHits
            @consecutiveHits = 0
        end

        # Incrementa el contador de golpes consecutivos del jugador en 1.
        #
        # @return [void]
        def incConsecutiveHits
            @consecutiveHits += 1
        end

        protected 

        # Suma el poder de ataque de todas las armas del jugador.
        #
        # @return [Integer] La suma del poder de todas las armas.
        def sumWeapons 
            sum = 0
            @weapons.each do |w|
                sum += w.attack
            end
            sum
        end

        # Suma la energía defensiva de todos los escudos del jugador.
        #
        # @return [Integer] La suma de la energía defensiva de todos los escudos.
        def sumShields 
            sum = 0
            @shields.each do |s|
                sum += s.protect
            end
            sum
        end

        # Calcula la energía defensiva total del jugador sumando el poder de todos sus escudos.
        #
        # @return [Integer] La energía defensiva total.
        def defensiveEnergy
            return @intelligence + sumShields
        end

        





    end
end