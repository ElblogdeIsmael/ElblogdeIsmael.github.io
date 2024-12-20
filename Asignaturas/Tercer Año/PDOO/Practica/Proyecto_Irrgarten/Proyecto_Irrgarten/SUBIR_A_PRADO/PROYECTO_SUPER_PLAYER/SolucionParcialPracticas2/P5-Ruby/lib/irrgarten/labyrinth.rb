#encoding:utf-8

#añadimos lo require relative necesarios
require_relative 'player'
require_relative 'monster'
require_relative 'directions'
require_relative 'dice'
require_relative 'orientation'


# Módulo principal del juego Irrgarten, que contiene las clases de jugadores, monstruos y el laberinto.
module Irrgarten
    # Representa el laberinto en el juego, donde se encuentran monstruos, jugadores, y la salida.
    class Labyrinth 
        # Carácter que representa un bloque en el laberinto.
        @@BLOCK_CHAR = 'X'

        # Carácter que representa una posición vacía en el laberinto.
        @@EMPTY_CHAR = '-'

        # Carácter que representa un monstruo en el laberinto.
        @@MONSTER_CHAR = 'M'

        # Carácter que representa un combate en el laberinto.
        @@COMBAT_CHAR = 'C'

        # Carácter que representa la salida del laberinto.
        @@EXIT_CHAR = 'E'

        # Constantes de posición.
        @@ROW = 0
        @@COL = 1

        # Posición inválida.
        @@INVALID_POS = -1

        # @!attribute [rw] nRows
        #   @return [Integer] Número de filas en el laberinto.
        attr_accessor :nRows

        # @!attribute [rw] nCols
        #   @return [Integer] Número de columnas en el laberinto.
        attr_accessor :nCols

        # @!attribute [rw] exitRow
        #   @return [Integer] Fila donde se encuentra la salida del laberinto.
        attr_accessor :exitRow

        # @!attribute [rw] exitCol
        #   @return [Integer] Columna donde se encuentra la salida del laberinto.
        attr_accessor :exitCol

        # @!attribute [rw] labyrinth
        #   @return [Array<Array<String>>] Matriz que representa el laberinto con caracteres.
        attr_accessor :labyrinth

        # @!attribute [rw] monsters
        #   @return [Array<Array<Monster>>] Matriz de monstruos en el laberinto.
        attr_accessor :monsters

        # @!attribute [rw] players
        #   @return [Array<Array<Player>>] Matriz de jugadores en el laberinto.
        attr_accessor :players

        # Inicializa un nuevo laberinto con las dimensiones y posición de salida especificadas.
        #
        # @param nRows [Integer] Número de filas en el laberinto.
        # @param nCols [Integer] Número de columnas en el laberinto.
        # @param exitRow [Integer] Fila de la salida.
        # @param exitCol [Integer] Columna de la salida.
        def initialize(nRows, nCols, exitRow, exitCol)
            @nRows = nRows
            @nCols = nCols
            @exitRow = exitRow
            @exitCol = exitCol
            @labyrinth = Array.new(@nRows) { Array.new(@nCols, @@EMPTY_CHAR) }
            @labyrinth[@exitRow][@exitCol] = @@EXIT_CHAR
            @monsters = Array.new(@nRows) { Array.new(@nCols) }
            @players = Array.new(@nRows) { Array.new(@nCols) }
        end

        # Distribuye los jugadores en el laberinto (implementación pendiente).
        #
        # @param players [Array<Player>] Lista de jugadores a distribuir.
        # @return [void]
        def spreadPlayers(players)
            for i in 0...players.size
                p = players[i]
                pos = randomEmptyPos
                putPlayer2D(@@INVALID_POS, @@INVALID_POS, pos[@@ROW], pos[@@COL], p)
            end
        end

        # Verifica si hay un ganador, es decir, si un jugador alcanzó la salida.
        #
        # @return [Boolean] `true` si un jugador está en la posición de salida, `false` en caso contrario.
        def haveAWinner
            return @players[@exitRow][@exitCol] != nil
        end

        # Convierte el estado del laberinto en un string para representación.
        #
        # @return [String] La representación del laberinto con el número de filas, columnas y posición de salida.
        def to_s
            s=""
            s = "nRows: #{@nRows}, nCols: #{@nCols}, exitRow: #{@exitRow}, exitCol: #{@exitCol}"
            
            s+="\n Laberinto: \n"
            @nRows.times do |i|
                @nCols.times do |j|
                    s+=" [ #{labyrinth[i][j]} ]"
                end
                s+="\n"
            end
            s+="\n"
            #Esta parte de impresión la añado para que el usuario pueda visualizar el juego

            s #devolvemos el string
        end

        # Verifica si la posición especificada está dentro de los límites del laberinto.
        #
        # @param row [Integer] La fila de la posición a verificar.
        # @param col [Integer] La columna de la posición a verificar.
        # @return [Boolean] `true` si la posición está dentro del laberinto, `false` en caso contrario.
        def posOK(row, col)
            (0..nRows-1).include?(row) && (0..nCols-1).include?(col) #he usado la función include para hacer más legible el código
        end

        # Agrega un monstruo a una posición específica en el laberinto si está vacía.
        #
        # @param row [Integer] Fila en la que se colocará el monstruo.
        # @param col [Integer] Columna en la que se colocará el monstruo.
        # @param monster [Monster] El monstruo a añadir.
        # @return [void]
        def addMonster(row, col, monster)
            if(emptyPos(row, col) && posOK(row, col))
                monster.setPos(row, col)
                @monsters[row][col] = monster
                @labyrinth[row][col] = @@MONSTER_CHAR
            end
        end

        # Verifica si una posición específica está vacía.
        #
        # @param row [Integer] La fila de la posición.
        # @param col [Integer] La columna de la posición.
        # @return [Boolean] `true` si la posición está vacía, `false` en caso contrario.
        def emptyPos(row, col)
            @labyrinth[row][col] == @@EMPTY_CHAR
        end

        # Verifica si una posición específica contiene un monstruo.
        #
        # @param row [Integer] La fila de la posición.
        # @param col [Integer] La columna de la posición.
        # @return [Boolean] `true` si la posición contiene un monstruo, `false` en caso contrario.
        def monsterPos(row, col)
            posOK(row, col) && @labyrinth[row][col] == @@MONSTER_CHAR
        end

        # Verifica si una posición específica es la salida.
        #
        # @param row [Integer] La fila de la posición.
        # @param col [Integer] La columna de la posición.
        # @return [Boolean] `true` si la posición es la salida, `false` en caso contrario.
        def exitPos(row, col)
            posOK(row, col) && @labyrinth[row][col] == @@EXIT_CHAR
        end

        # Verifica si una posición específica es un área de combate.
        #
        # @param row [Integer] La fila de la posición.
        # @param col [Integer] La columna de la posición.
        # @return [Boolean] `true` si la posición es un área de combate, `false` en caso contrario.
        def combatPos(row, col)
            posOK(row, col) && @labyrinth[row][col] == @@COMBAT_CHAR
        end

        # Verifica si una posición es transitable (vacía, con monstruo o con salida).
        #
        # @param row [Integer] La fila de la posición.
        # @param col [Integer] La columna de la posición.
        # @return [Boolean] `true` si se puede transitar, `false` en caso contrario.
        def canStepOn(row, col)
            posOK(row, col) && (emptyPos(row, col) || monsterPos(row, col) || exitPos(row, col)) 
        end

        # Actualiza una posición anterior, dejándola vacía o con un monstruo, si estaba en combate.
        #
        # @param row [Integer] La fila de la posición.
        # @param col [Integer] La columna de la posición.
        # @return [void]
        def updateOldPos(row, col)
            if posOK(row, col)
                @labyrinth[row][col] = (@labyrinth[row][col]==@@COMBAT_CHAR) ? @@MONSTER_CHAR : @@EMPTY_CHAR
                @players[row][col] = nil
            end
        end

        # Calcula la nueva posición basándose en una dirección.
        #
        # @param row [Integer] La fila actual.
        # @param col [Integer] La columna actual.
        # @param direction [String] Dirección a tomar ('UP', 'DOWN', 'RIGHT', 'LEFT').
        # @return [Array<Integer>] Las nuevas coordenadas (fila, columna).
        def dir2Pos(row, col, direction)
            pos = Array.new(2)
            pos[@@ROW] = row
            pos[@@COL] = col
            case direction
                when Irrgarten::Directions::UP
                    pos[@@ROW] = row - 1
                when Irrgarten::Directions::DOWN
                    pos[@@ROW] = row + 1
                when Irrgarten::Directions::RIGHT
                    pos[@@COL] = col + 1
                when Irrgarten::Directions::LEFT
                    pos[@@COL] = col - 1
            else
                raise ArgumentError, "Invalid direction: #{direction}"
            #implementamos un raise al final del case para que no se pueda pasar un valor que no sea UP, DOWN, RIGHT o LEFT
            end
            pos
        end

        # Encuentra una posición vacía aleatoria en el laberinto.
        #
        # @return [Array<Integer>] Las coordenadas de la posición vacía (fila, columna).
        def randomEmptyPos
            pos = Array.new(2)
            while true
                pos[@@ROW] = Dice.randomPos(@nRows)
                pos[@@COL] = Dice.randomPos(@nCols)
                if emptyPos(pos[0],pos[1])
                    break
                end
            end
            pos
        
        end

        # Coloca un jugador en una nueva posición 2D, devolviendo el monstruo si lo hay.
        #
        # @param oldRow [Integer] La fila anterior.
        # @param oldCol [Integer] La columna anterior.
        # @param row [Integer] La nueva fila.
        # @param col [Integer] La nueva columna.
        # @param player [Player] El jugador a colocar.
        # @return [Monster, nil] El monstruo en la nueva posición, si lo hay.
        def putPlayer2D(oldRow, oldCol, row, col, player)
            output = nil
            if canStepOn(row, col)
                if posOK(oldRow, oldCol)
                    p = @players[oldRow][oldCol]
                    if p == player
                        updateOldPos(oldRow, oldCol)
                        @players[oldRow][oldCol] = nil
                    end
                end

                monsterPosVar = monsterPos(row, col)

                if monsterPosVar
                    @labyrinth[row][col] = @@COMBAT_CHAR
                    output = @monsters[row][col]
                else
                    number = player.number
                    @labyrinth[row][col] = number
                end
                @players[row][col] = player
                player.setPos(row, col)
            end
            output
        end

        # Coloca un jugador en una nueva posición basada en una dirección, devolviendo el monstruo si lo hay.
        #
        # @param direction [String] La dirección a tomar ('UP', 'DOWN', 'RIGHT', 'LEFT').
        # @param player [Player] El jugador a colocar.
        # @return [Monster, nil] El monstruo en la nueva posición, si lo hay.
        def putPlayer(direction, player)
            oldRow = player.row
            oldCol = player.col

            newPos = dir2Pos(oldRow, oldCol, direction)
            monster = putPlayer2D(oldRow, oldCol, newPos[@@ROW], newPos[@@COL], player) 
            monster
        end

        # Agrega un bloque en una orientación específica.
        #
        # @param orientation [String] La orientación del bloque ('HORIZONTAL', 'VERTICAL').
        # @param startRow [Integer] La fila inicial.
        # @param startCol [Integer] La columna inicial.
        # @param length [Integer] La longitud del bloque.
        # @return [void]
        def addBlock(orientation, startRow, startCol, length)
            if orientation == Orientation::VERTICAL
                incRow = 1
                incCol = 0
            else 
                incRow = 0
                incCol = 1
            end
            row = startRow
            col = startCol

            while posOK(row, col) && emptyPos(row, col) && (length > 0)
                @labyrinth[row][col] = @@BLOCK_CHAR
                length -= 1
                row += incRow
                col += incCol
            end
        end

        # Devuelve las direcciones válidas desde una posición específica.
        #
        # @param row [Integer] La fila de la posición.
        # @param col [Integer] La columna de la posición.
        # @return [Array<String>] Las direcciones válidas ('UP', 'DOWN', 'RIGHT', 'LEFT').
        def validMoves(row, col)
            valid_moves = Array.new
            if canStepOn(row-1, col)
            valid_moves.push(Irrgarten::Directions::UP)
            end
            if canStepOn(row+1, col)
            valid_moves.push(Irrgarten::Directions::DOWN)
            end
            if canStepOn(row, col+1)
            valid_moves.push(Irrgarten::Directions::RIGHT)
            end
            if canStepOn(row, col-1)
            valid_moves.push(Irrgarten::Directions::LEFT)
            end
            valid_moves
        end

        # -----###-----###-----###--FUNCIONES AUXILIARES IMPLEMENTADAS DE MI PARTE PARA AYUDARME A REALIZAR PRUEBAS---###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-----###-

        # Añade un jugador a una posición específica en el laberinto si está vacía.
        #
        # @param row [Integer] Fila en la que se colocará el jugador.
        # @param col [Integer] Columna en la que se colocará el jugador.
        # @param player [Player] El jugador a añadir.
        # @return [void]
        def addPlayer(row, col, player)
            if emptyPos(row, col)
                @labyrinth[row][col] = player.name
                player.setPos(row, col)
                @players[row][col] = player
            end
        end

        # Muestra las posiciones de los monstruos y jugadores en el laberinto.
        #
        # @return [void]
        def showMonstersAndPlayers
            @nRows.times do |i|
                @nCols.times do |j|
                    if monsterPos(i, j)
                        puts "Hay un monstruo en la posición: #{i}, #{j}"
                    end
                    if @players[i][j]
                        puts "Hay un jugador en la posición: #{i}, #{j}"
                    end
                end
            end
        end

        # Añade una casilla de combate en una posición específica del laberinto.
        #
        # @param row [Integer] Fila de la casilla.
        # @param col [Integer] Columna de la casilla.
        # @return [void]
        def addCombat(row, col)
            @labyrinth[row][col] = @@COMBAT_CHAR
        end

        # Muestra las posiciones de las casillas de combate en el laberinto.
        #
        # @return [void]
        def showCombat
            @nRows.times do |i|
                @nCols.times do |j|
                    if combatPos(i, j)
                        puts "Hay combate en la posición: #{i}, #{j}"
                    end
                end
            end
        end

        # -------------Añadidas extra para pruebas--------------------------------

        # Convierte un jugador en un FuzzyPlayer y lo actualiza en la matriz de jugadores si coincide el número.
        #
        # @param FuzzyPlayer [FuzzyPlayer] El jugador difuso que se va a convertir y actualizar.
        # @return [void]
        def PlayerTOFuzzyPlayer(fuzzy)
            row = fuzzy.row
            col = fuzzy.col

            if @players[row][col].number == fuzzy.number
                @players[row][col] = fuzzy
            end

        end
        
        def PlayerTOSuperPlayer(superPlayer)
            row = superPlayer.row
            col = superPlayer.col

            if @players[row][col].number == superPlayer.number
                @players[row][col] = superPlayer
            end

        end





    end
end
