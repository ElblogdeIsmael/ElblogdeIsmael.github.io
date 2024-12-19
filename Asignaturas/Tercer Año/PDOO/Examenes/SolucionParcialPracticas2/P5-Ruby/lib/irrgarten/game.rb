#encoding:utf-8
require_relative 'dice'
require_relative 'player'
require_relative 'monster'
require_relative 'labyrinth'
require_relative 'game_state'
require_relative 'game_character'
require_relative 'orientation'
require_relative 'fuzzy_player'
require_relative 'super_player'



# Módulo principal del juego Irrgarten, que contiene las clases de jugadores, monstruos y el laberinto.
module Irrgarten 
    # Representa el juego, manejando el estado actual, los jugadores, monstruos y el laberinto.
    class Game
        # Número máximo de rondas en el juego.
        @@MAX_ROUNDS = 10

        #--------VARIABLES PARA MI LABERINTO----------
        # Número de monstruos
        @@NUM_MONSTER = 3

        # Número de obstáculos
        @@NUM_BLOCKS = 5

        # Número de filas
        @@N_ROW = 7

        # Número de columnas
        @@N_COL = 7

        # Número de salida (fila)
        @@EXIT_ROW = 6

        # Número de salida (columna)
        @@EXIT_COL = 6

        # Número aleatorio para generar longitud de muro
        @@RANDOM_POS = 5

        # Número aleatorio para generar la orientación
        @@RANDOM_ORIENTATION = 2

        #------Accessors para las variables de clase------

        # @!attribute [rw] currentPlayerIndex
        #   @return [Integer] Índice del jugador actual en la lista de jugadores.
        attr_accessor :currentPlayerIndex

        # @!attribute [rw] log
        #   @return [Array<String>] Registro de eventos ocurridos durante el juego.
        attr_accessor :log

        # @!attribute [rw] players
        #   @return [Array<Player>] Lista de jugadores en el juego.
        attr_accessor :players

        # @!attribute [rw] currentPlayer
        #   @return [Player] El jugador que actualmente tiene el turno.
        attr_accessor :currentPlayer

        # @!attribute [rw] monsters
        #   @return [Array<Monster>] Lista de monstruos en el juego.
        attr_accessor :monsters

        # @!attribute [rw] lab
        #   @return [Labyrinth] El laberinto en el que se juega.
        attr_accessor :labyrinth

        #------Accessors para las variables de clase------

        # Inicializa una nueva instancia del juego con los jugadores, monstruos y el laberinto configurados.
        #
        # @param nPlayers [Integer] Número de jugadores en el juego.
        def initialize(nPlayers)
            @currentPlayerIndex = Dice.whoStarts(nPlayers)

            @log = ""

            @monsters = Array.new(@@NUM_MONSTER) #ya que los decidimos nosotros, inicializo ya el constructor aquí
            @players = Array.new(nPlayers)

            nPlayers.times do |i|
                @players[i]= Player.new(i,Dice.randomIntelligence, Dice.randomStrength)
            end

            @currentPlayer = @players[@currentPlayerIndex]

            configureLabyrinth()

            @labyrinth.spreadPlayers(players)
        end

        # Configura el laberinto añadiendo bloques y colocando monstruos.
        #
        # @return [void]
        def configureLabyrinth 
            #creamos el laberinto
            @labyrinth = Labyrinth.new(@@N_ROW,@@N_COL,@@EXIT_ROW,@@EXIT_COL) 

            #añiadimos 5 bloques por ejemplo
            @@NUM_BLOCKS.times do
                startRow = Dice.randomPos(labyrinth.nRows)
                startCol = Dice.randomPos(labyrinth.nCols)
                length = Dice.randomPos(@@NUM_BLOCKS) # definimos la longitud de los blocks
                orientation = Dice.randomPos(@@RANDOM_POS) == 0 ? Orientation::HORIZONTAL : Orientation::VERTICAL
                labyrinth.addBlock(orientation, startRow, startCol, length)
            end

            #creamos los monstruos
            monsters[0] = Monster.new("Goblin", Dice.randomIntelligence, Dice.randomStrength);
            monsters[1] = Monster.new("Orc", Dice.randomIntelligence, Dice.randomStrength);
            monsters[2] = Monster.new("Troll", Dice.randomIntelligence, Dice.randomStrength);
            monsters[2] = Monster.new("THEKILLER", 100000, 100000); #para probar que el jugador no puede ganar


            #añadimos los monstruos
            monsters.each do |monster|
                pos = @labyrinth.randomEmptyPos()
                @labyrinth.addMonster(pos[0], pos[1], monster)
            end
        end



        # Verifica si el juego ha terminado.
        #
        # @return [Boolean] `true` si el juego ha finalizado, `false` en caso contrario.
        def finished
            @labyrinth.haveAWinner
        end

        # Obtiene el estado actual del juego.
        #
        # @return [GameState] Una nueva instancia de GameState que representa el estado actual del juego.
        def getGameState
            player_string = ""
            @players.each do |player|
                player_string += player.to_s + "\n"
            end
    
            monster_string = ""
            @monsters.each do |monster|
                monster_string += monster.to_s + "\n"
            end
    
            GameState.new(@labyrinth.to_s, player_string, monster_string, @currentPlayerIndex, finished, @log)
        end

        

        # Cambia el turno al siguiente jugador.
        #
        # @return [void]
        def nextPlayer
            @currentPlayerIndex = (@currentPlayerIndex + 1) % @players.size
            @currentPlayer = @players[@currentPlayerIndex]
        end

        # Registra que el jugador actual ganó el combate en el registro de eventos.
        #
        # @return [void]
        def logPlayerWon
            
            @log += "Player " + @currentPlayer.number.to_s + " won the combat.\n"
        end

        # Registra que el monstruo ganó el combate contra el jugador actual en el registro de eventos.
        #
        # @return [void]
        def logMonsterWon
            @log += "Monster won the combat against player " + currentPlayer.number.to_s + ".\n"
        end

        # Registra en el log que el jugador actual ha sido resucitado.
        #
        # @return [void]
        def logResurrected
            @log += "Player " + currentPlayer.number.to_s + " was resurrected.\n"
        end

        # Registra en el log que el jugador actual se ha saltado el turno por estar muerto.
        #
        # @return [void]
        def logPlayerSkipTurn
            
            @log += "Player " + currentPlayer.number.to_s + " skipped the turn because they are dead.\n"
        end

        # Registra en el log que el jugador actual no siguió las instrucciones del jugador humano.
        #
        # @return [void]
        def logPlayerNoOrders
            
            @log += "Player " + currentPlayer.number.to_s + " did not follow the human player's instructions.\n"
        end

        # Registra en el log que el jugador actual se movió a una celda vacía o no pudo moverse.
        #
        # @return [void]
        def logNoMonster
            
            @log += "Player " + currentPlayer.number.to_s + " moved to an empty cell or could not move.\n"
        end

        # Registra en el log la ronda actual y el número máximo de rondas.
        #
        # @param rounds [Integer] Número de rondas transcurridas.
        # @param max [Integer] Número máximo de rondas.
        # @return [void]
        def logRounds(rounds, max)
            @log += "Rounds played " + rounds.to_s + " out of " + max.to_s + ".\n"
        end


        # Ejecuta el siguiente paso en el juego para el jugador actual.
        #
        # @param preferredDirection [Symbol] La dirección preferida en la que el jugador quiere moverse.
        # @return [Boolean] Devuelve true si el juego ha terminado, de lo contrario false.
        #
        # El método realiza las siguientes acciones:
        # - Verifica si el jugador actual está muerto. Si es así, maneja el proceso de resurrección.
        # - Determina la dirección real en la que el jugador se moverá.
        # - Registra un mensaje si la dirección real difiere de la dirección preferida.
        # - Intenta mover al jugador en el laberinto.
        # - Si se encuentra con un monstruo, se inicia un combate y se recompensa al ganador.
        # - Verifica si el juego ha terminado.
        # - Si el juego no ha terminado, procede al siguiente jugador.
        def nextStep(preferredDirection)
            @log=""
            dead=@currentPlayer.dead
            unless dead
                direction = actualDirection(preferredDirection)

                if direction != preferredDirection
                    logPlayerNoOrders
                end
                monster = labyrinth.putPlayer(preferredDirection, @currentPlayer)

                if (monster == nil)
                    logNoMonster
                else 
                    winner = combat(monster)
                    manageReward(winner)
                end
            else
                manageResurrection
            end
            endGame = finished
            unless endGame
                nextPlayer
            end
            endGame
        end

    
        
        # Determina la dirección real en la que el jugador puede moverse según su dirección preferida y los movimientos válidos.
        #
        # @param preferredDirection [Symbol] la dirección en la que el jugador prefiere moverse (:up, :down, :left, :right)
        # @return [Boolean] true si el jugador se mueve con éxito en la dirección preferida, false en caso contrario
        def actualDirection(preferredDirection)
            currentRow = @currentPlayer.row
            currentCol = @currentPlayer.col
            validMoves = @labyrinth.validMoves(currentRow, currentCol)
            @currentPlayer.move(preferredDirection, validMoves)
        end

        # Inicia una secuencia de combate entre el jugador actual y un monstruo.
        #
        # @param monster [Monster] El monstruo contra el que el jugador luchará.
        # @return [GameCharacter] El ganador del combate, ya sea GameCharacter::PLAYER o GameCharacter::MONSTER.
        #
        # El combate consiste en una serie de rondas donde el jugador y el monstruo se turnan para atacarse.
        # El combate continúa hasta que se alcanza el número máximo de rondas o uno de los participantes pierde toda su salud.
        # La función registra el número de rondas que tuvieron lugar y devuelve el ganador del combate.
        def combat(monster)
            rounds = 0
            winner = GameCharacter::PLAYER

            playerAttack = currentPlayer.attack
            lose = monster.defend(playerAttack)
            
            while !lose && rounds < @@MAX_ROUNDS
                winner = GameCharacter::MONSTER
                rounds += 1
                monster_attack = monster.attack
                lose = currentPlayer.defend(monster_attack)
            
                unless lose
                    player_attack = currentPlayer.attack
                    winner = GameCharacter::PLAYER
                    lose = monster.defend(player_attack)
                end
            end
            logRounds(rounds, @@MAX_ROUNDS)
            
            winner

        end

        # Maneja la recompensa para el ganador del combate.
        #
        # @param winner [GameCharacter] El ganador del combate.
        # @return [void]
        def manageReward(winner)
            if winner == GameCharacter::PLAYER
                currentPlayer.receiveReward
                logPlayerWon
            else
                logMonsterWon
            end
        end

        # Maneja la resurrección del jugador actual.
        #
        # @return [void]
        def manageResurrection
            resurrect = Dice.resurrectPlayer
            if resurrect
                currentPlayer.resurrect
                logResurrected
                
                p = Dice.WhoPlayerIs
                if(p == PlayerTypes::FUZZY)
                  fuzzy = FuzzyPlayer.new(@currentPlayer)
                  @players[@currentPlayerIndex] = fuzzy
                  @labyrinth.PlayerTOFuzzyPlayer(fuzzy)
                else
                  superPlayer = SuperPlayer.new(@currentPlayer)
                  @players[@currentPlayerIndex] = superPlayer
                  @labyrinth.PlayerTOSuperPlayer(superPlayer)
                end
                
            else
                logPlayerSkipTurn
            end
        end

    end
end


