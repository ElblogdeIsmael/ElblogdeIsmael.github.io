#encoding:utf-8
module Irrgarten
    # Clase que representa un dado para generar valores aleatorios en el juego.
    # Contiene métodos para calcular atributos y valores relacionados con jugadores, monstruos, armas, y escudos.
    class Dice
        @@MAX_USES = 5          # Número máximo de usos de armas y escudos
        @@MAX_INTELLIGENCE = 10.0 # Valor máximo para la inteligencia de jugadores y monstruos
        @@MAX_STRENGTH = 10.0    # Valor máximo para la fuerza de jugadores y monstruos
        @@RESURRECT_PROB = 0.3   # Probabilidad de que un jugador sea resucitado en cada turno
        @@WEAPONS_REWARD = 2     # Número máximo de armas recibidas al ganar un combate
        @@SHIELDS_REWARD = 3     # Número máximo de escudos recibidos al ganar un combate
        @@HEALTH_REWARD = 5      # Número máximo de unidades de salud recibidas al ganar un combate
        @@MAX_ATTACK = 3         # Potencia máxima de las armas
        @@MAX_SHIELD = 2         # Potencia máxima de los escudos

        @@generator = Random.new # Generador de números aleatorios

        # Genera una posición aleatoria hasta un valor máximo.
        #
        # @param max [Integer] Valor máximo para la posición.
        # @return [Integer] Posición aleatoria entre 0 y max - 1.
        def self.randomPos(max)
            @@generator.rand(max.to_i)
        end

        # Determina qué jugador comienza el juego.
        #
        # @param nplayers [Integer] Número de jugadores.
        # @return [Integer] Índice del jugador que empieza, entre 0 y nplayers - 1.
        def self.whoStarts(nplayers)
            @@generator.rand(nplayers.to_i)
        end
        
        # Genera un valor aleatorio para la inteligencia de un jugador o monstruo.
        #
        # @return [Float] Valor de inteligencia entre 0 y MAX_INTELLIGENCE.
        def self.randomIntelligence
            @@generator.rand(@@MAX_INTELLIGENCE.to_f)
        end

        # Genera un valor aleatorio para la fuerza de un jugador o monstruo.
        #
        # @return [Float] Valor de fuerza entre 0 y MAX_STRENGTH.
        def self.randomStrength
            @@generator.rand(@@MAX_STRENGTH.to_f)
        end

        # Determina si un jugador es resucitado según la probabilidad definida.
        #
        # @return [Boolean] `true` si el jugador es resucitado, `false` en caso contrario.
        def self.resurrectPlayer
            @@generator.rand <= @@RESURRECT_PROB
        end

        # Genera un número aleatorio de armas como recompensa tras ganar un combate.
        #
        # @return [Integer] Cantidad de armas recibidas, entre 1 y WEAPONS_REWARD.
        def self.weaponReward
            @@generator.rand(@@WEAPONS_REWARD.to_i+1)
        end  

        # Genera un número aleatorio de escudos como recompensa tras ganar un combate.
        #
        # @return [Integer] Cantidad de escudos recibidos, entre 1 y SHIELDS_REWARD.
        def self.shieldReward
            @@generator.rand(@@SHIELDS_REWARD.to_i+1)
        end

        # Genera una cantidad aleatoria de salud como recompensa tras ganar un combate.
        #
        # @return [Integer] Cantidad de salud recibida, entre 1 y HEALTH_REWARD.
        def self.healthReward
            @@generator.rand(@@HEALTH_REWARD.to_i+1)
        end

        # Genera la potencia de un arma aleatoria.
        #
        # @return [Integer] Potencia del arma, entre 0 y MAX_ATTACK.
        def self.weaponPower
            @@generator.rand(@@MAX_ATTACK.to_f)
        end

        # Genera la potencia de un escudo aleatorio.
        #
        # @return [Integer] Potencia del escudo, entre 0 y MAX_SHIELD.
        def self.shieldPower
            @@generator.rand(@@MAX_SHIELD.to_f)
        end

        # Genera un número aleatorio de usos restantes para un arma o escudo.
        #
        # @return [Integer] Número de usos, entre 1 y MAX_USES.
        def self.usesLeft
            @@generator.rand(@@MAX_USES.to_i+1)
        end 

        # Calcula la intensidad de un ataque o defensa según una competencia.
        #
        # @param competence [Float] Competencia del jugador o monstruo.
        # @return [Float] Intensidad aleatoria entre 0 y el valor de competencia.
        def self.intensity(competence)
            @@generator.rand(competence.to_f)
        end

        # Genera un valor booleano que indica si un elemento debe ser descartado
        #
        # @param usesLeft [Integer] El número de usos restantes del elemento
        # @return [Boolean] `true` si el elemento debe ser descartado, `false` en caso contrario
        def self.discardElement(usesLeft)
            probabilidad=usesLeft.to_f/@@MAX_USES
            return (@@generator.rand >= probabilidad)
        end

        #Otra forma de hacerlo
        # def self.discardElement(usesLeft)
        #     return @@generator.rand(1)<(@@MAX_USES-usesLeft)/(1.0*@@MAX_USES)
        # end
        
        # Genera el siguiente paso que debe de dar en base a los parámetros proporcionados y en base a la probabilidad calculada
        #
        # @param preference [Symbol] El paso que el jugador prefiere realizar.
        # @param validMoves [Array<Symbol>] Los pasos válidos que el jugador puede realizar.
        # @param intelligence [Float] La inteligencia del jugador.
        # @return [Symbol] El siguiente paso que el jugador debe dar.
        def self.nextStep(preference, validMoves, intelligence)
            out = preference

            # if @@generator.rand < intelligence/@@MAX_INTELLIGENCE
            #     out = validMoves[@@generator.rand(validMoves.size)]
            # end

            if randomIntelligence > intelligence
                out = validMoves[@@generator.rand(validMoves.size)]
            end

            out
        end

        

    end
end 