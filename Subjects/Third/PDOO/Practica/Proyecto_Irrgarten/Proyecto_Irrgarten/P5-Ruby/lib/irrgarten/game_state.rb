#encoding:utf-8
module Irrgarten
    # Representa el estado actual del juego, incluyendo el laberinto, jugadores, monstruos,
    # el jugador actual, el ganador, y el registro de eventos (log).
    class GameState    

        # Método que devuelve el estado del laberinto
        # @return [String] Devuelve el estado del laberinto
        attr_reader :labyrinth

        # Método que devuelve el estado de los jugadores
        # @return [String] Devuelve el estado de los jugadores
        attr_reader :players

        # Método que devuelve el estado de los monstruos
        # @return [String] Devuelve el estado de los monstruos
        attr_reader :monsters

        # Método que devuelve el índice del jugador que tiene el turno
        # @return [int] Devuelve el índice del jugador que tiene el turno
        attr_reader :current_player

        # Método que devuelve si hay un ganador o no
        # @return [boolean] Devuelve si hay un ganador o no
        attr_reader :winner

        # Método que devuelve la cadena de caracteres con eventos interesantes
        # @return [String] Devuelve la cadena de caracteres con eventos interesantes
        attr_reader :log


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
            
    end
end
