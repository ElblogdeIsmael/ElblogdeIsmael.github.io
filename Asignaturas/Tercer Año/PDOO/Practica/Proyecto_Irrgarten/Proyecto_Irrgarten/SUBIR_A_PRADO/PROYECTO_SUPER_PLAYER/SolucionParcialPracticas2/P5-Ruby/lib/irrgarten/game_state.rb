#encoding:utf-8
module Irrgarten
    # Representa el estado actual del juego, incluyendo el laberinto, jugadores, monstruos,
    # el jugador actual, el ganador, y el registro de eventos (log).
    class GameState
        attr_accessor :labyrinth, :players, :monsters, :currentPlayer, :winner, :log

        # Inicializa un nuevo estado del juego.
        #
        # @param labyrinth [String] Representación del laberinto.
        # @param players [Array<Player>] Lista de jugadores en el juego.
        # @param monsters [Array<Monster>] Lista de monstruos en el juego.
        # @param currentPlayer [Player] Jugador que está en turno actualmente.
        # @param winner [Boolean] Estado de victoria, `true` si hay un ganador.
        # @param log [String] Registro de eventos ocurridos en el juego.
        def initialize(labyrinth, players, monsters, currentPlayer, winner, log)
            @labyrinth = labyrinth
            @players = players
            @monsters = monsters
            @currentPlayer = currentPlayer
            @winner = winner
            @log = log
        end

        # Retorna el laberinto actual.
        #
        # @return [String] Laberinto en su estado actual.
        def getlabyrinth
            @labyrinth
        end

        # Retorna la lista de jugadores.
        #
        # @return [Array<Player>] Lista de jugadores en el juego.
        def getplayers
            @players
        end

        # Retorna la lista de monstruos.
        #
        # @return [Array<Monster>] Lista de monstruos en el juego.
        def getmonsters
            @monsters
        end

        # Retorna el jugador actual en turno.
        #
        # @return [Player] Jugador en turno actual.
        def getcurrentPlayer
            @currentPlayer
        end

        # Indica si hay un ganador en el juego.
        #
        # @return [Boolean] `true` si hay un ganador, `false` si aún no.
        def getwinner
            @winner
        end

        # Retorna el log de eventos en el juego.
        #
        # @return [String] Log de eventos del juego.
        def getlog
            @log
        end

        def to_s
            "\nlabyrinth=#{labyrinth}" +
            "\n \nplayers=#{players}" +
            "\n \nmonsters=#{monsters}" +
            "\n \ncurrent_player=#{currentPlayer}" +
            "\n \nwinner=#{winner}" +
            "\n \nlog=#{log}" +
            "\n"
        end
            
    end
end
