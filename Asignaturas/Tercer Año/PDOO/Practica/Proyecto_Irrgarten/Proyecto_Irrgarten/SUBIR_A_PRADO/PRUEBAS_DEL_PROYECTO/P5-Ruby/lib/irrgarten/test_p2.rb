#encoding: utf-8
require_relative 'monster'
require_relative 'player'
require_relative 'labyrinth'
require_relative 'game'
require_relative 'dice'
require_relative 'shield'
require_relative 'weapon'
require_relative 'game_state'
require_relative 'directions'
require_relative 'orientation'
require_relative 'game_character'

module Irrgarten
  class TestP2
    def self.run

      # pruebas de las funciones de la clase Monster
      #-------------------------------------------------------------------------------
      monster1 = Monster.new("m1", 0.5, 20.0)
      monster2 = Monster.new("m2", 0.2, 15.0)

      # pintar por pantalla el string de cada monster
      puts "Monster 1: #{monster1.to_s}"
      puts "Monster 2: #{monster2.to_s}"

      # comprobamos la funcion de dead
      puts "Monster 1 dead: #{monster1.dead}"

      # disminuimos la vida
      5.times { monster1.gotWounded }

      # comprobamos si la funcion de dead ha decrementado
      puts "Monster 1 dead: #{monster1.dead}"

      # comprobamos la funcion de setPos
      monster1.setPos(10, 15)
      puts "Monster 1 pos: (#{monster1.row}, #{monster1.col})"
      #-------------------------------------------------------------------------------

      # pruebas de la clase Player
      p1 = Player.new('1', 0.5, 20.0)

      # pintar por pantalla el string de player
      puts p1.to_s

      # comprobamos la funcion resurrect
      p1.gotWounded
      s = p1.newShield
      w = p1.newWeapon
      # imprimimos los valores de shield y weapon
      puts "Shield: #{s.to_s}"
      puts "Weapon: #{w.to_s}"
      3.times { p1.incConsecutiveHits }

      puts "Despues de las modificaciones: \n#{p1.to_s}"

      # despues de resucitar
      p1.resurrect
      puts "Despues de resucitar: \n#{p1.to_s}"

      p1.setPos(3, 4)
      puts "Tras añadir la pos (3,4) #{p1.to_s}"

      # comprobamos la funcion de dead
      puts "Player 1 dead: #{p1.dead}"

      # matamos a player
      10.times { p1.gotWounded }

      puts "Player 1 dead (después de matarlo): #{p1.dead}"

      # comprobamos la función de attack
      puts "Player 1 attack: #{p1.attack}"

      # comprobamos la función de defend, manageHit no esta implementado
      # puts "Player 1 defend: #{p1.defend(5.0)}"

      # comprobamos las funciones de newShield y newWeapon
      puts "Player 1 newShield: #{p1.newShield.to_s}"
      puts "Player 1 newWeapon: #{p1.newWeapon.to_s}"

      # comprobamos la función de defensiveEnergy
      puts "Player 1 defensiveEnergy: #{p1.defensiveEnergy}"

      # comprobamos la función de resetHits
      puts "Player 1 resetHits: #{p1.to_s}"

      3.times { p1.incConsecutiveHits }

      puts "Player 1 incConsecutiveHits, después de incrementarlo: #{p1.to_s}"

      # comprobamos la función de sumWeapons, para ello antes añadimos una serie de armas
      arma1 = p1.newWeapon
      puts "Weapon: #{arma1.to_s}"
      p1.addWeapon(arma1)

      arma1 = p1.newWeapon
      puts "Weapon: #{arma1.to_s}"
      p1.addWeapon(arma1)

      arma1 = p1.newWeapon
      puts "Weapon: #{arma1.to_s}"
      p1.addWeapon(arma1)

      puts "Player 1 sumWeapons (tras añadir 3 armas): #{p1.sumWeapons}"

      # comprobamos la función de sumShields, para ello antes añadimos una serie de escudos
      s1 = p1.newShield
      puts "Shield: #{s1.to_s}"
      p1.addShield(s1)

      s1 = p1.newShield
      puts "Shield: #{s1.to_s}"
      p1.addShield(s1)

      s1 = p1.newShield
      puts "Shield: #{s1.to_s}"
      p1.addShield(s1)

      puts "Player 1 sumShields (tras añadir 3 escudos): #{p1.sumShields}"

      #--------------------------------------------------------------------------------

      # vamos a probar la clase Labyrinth
      laberinto = Labyrinth.new(10, 10, 9, 9)

      # probamos el haveawinner
      puts "Laberinto haveawinner: #{laberinto.haveAWinner}"

      # añadimos un jugador
      p2 = Player.new('2', 0.5, 20.0)
      laberinto.addPlayer(9, 9, p2)
      laberinto.showMonstersAndPlayers

      # mostramos de nuevo el haveawinner
      puts "Laberinto haveawinner (despues de añadir a un jugador en la salida): #{laberinto.haveAWinner}"

      # comprobamos la función de to_s
      puts "Laberinto to_s: #{laberinto.to_s}"

      # comprobamos la función de addMonster
      m1 = Monster.new("m1", 0.5, 20.0)
      laberinto.addMonster(0, 0, m1)
      puts "Laberinto to_s (tras añadir un monstruo): "
      laberinto.showMonstersAndPlayers

      # comprobamos la función de posOK
      puts "\nProbando la función de posOK \n\n"
      puts "Laberinto posOK (10,10): #{laberinto.posOK(10, 10)}"
      puts "Laberinto posOK (9,9): #{laberinto.posOK(9, 9)}"

      # comprobamos la función de emptyPos
      puts "\nProbando la función de emptyPos \n\n"
      puts "Laberinto emptyPos (9,9): #{laberinto.emptyPos(9, 9)}"
      puts "Laberinto emptyPos (3,3): #{laberinto.emptyPos(3, 3)}"

      # comprobamos la función de monsterPos
      puts "\nProbando la función de monsterPos \n\n"
      puts "Laberinto monsterPos (0,0): #{laberinto.monsterPos(0, 0)}"
      puts "Laberinto monsterPos (9,9): #{laberinto.monsterPos(9, 9)}"

      # comprobamos la función de exitPos
      puts "\nProbando la función de exitPos \n\n"
      puts "Laberinto exitPos (9,9): #{laberinto.exitPos(9, 9)}"
      puts "Laberinto exitPos (3,3): #{laberinto.exitPos(3, 3)}"

      # comprobamos la función de canStepOn
      puts "\nProbando la función de canStepOn \n\n"
      puts "Laberinto canStepOn (9,9): #{laberinto.canStepOn(9, 9)}"
      puts "Laberinto canStepOn (0,0): #{laberinto.canStepOn(0, 0)}"
      puts "Laberinto canStepOn (4,4): #{laberinto.canStepOn(4, 4)}"
      puts "Laberinto canStepOn (10,10): #{laberinto.canStepOn(10, 10)}"

      puts "\nProbando la función de updateOldPos \n\n"
      # comprobamos la función de updateOldPos
      laberinto.updateOldPos(9, 9)
      puts "Laberinto updateOldPos (9,9): "
      laberinto.showMonstersAndPlayers

      laberinto.updateOldPos(0, 0)
      puts "Laberinto updateOldPos (0,0): "
      laberinto.showMonstersAndPlayers

      # añadimos una casilla de combate para comprobar ese caso
      laberinto.addCombat(5, 5)
      puts "Laberinto addCombat (5,5): "
      laberinto.showCombat
      laberinto.updateOldPos(5, 5)
      laberinto.showMonstersAndPlayers
      laberinto.showCombat

      # comprobamos la función de dir2Pos
      puts "\nProbando la función de dir2Pos \n\n"

      # hacia abajo
      salida = laberinto.dir2Pos(0, 0, Directions::DOWN)
      puts "Laberinto dir2Pos (0,0, DOWN): (#{salida[0]},#{salida[1]})"

      # hacia arriba
      salida = laberinto.dir2Pos(0, 0, Directions::UP)
      puts "Laberinto dir2Pos (0,0, UP): (#{salida[0]},#{salida[1]})"

      # hacia la derecha
      salida = laberinto.dir2Pos(0, 0, Directions::RIGHT)
      puts "Laberinto dir2Pos (0,0, RIGHT): (#{salida[0]},#{salida[1]})"

      # hacia la izquierda
      salida = laberinto.dir2Pos(0, 0, Directions::LEFT)
      puts "Laberinto dir2Pos (0,0, LEFT): (#{salida[0]},#{salida[1]})"

      # comprobamos la función de randomEmptyPos
      # Para ello vamos a llenar el tablero y solo dejamos una libre a ver si nos devuelve la que esta libre
      puts "\nProbando la función de randomEmptyPos \n\n"
      (0...laberinto.nRows).each do |i|
        (0...laberinto.nCols).each do |j|
          laberinto.addCombat(i, j) unless i == 1 && j == 1
        end
      end
      laberinto.showCombat

      puts "Laberinto randomEmptyPos(tiene que devolver la (1,1) ): "
      p = laberinto.randomEmptyPos
      puts "[#{p[0]}, #{p[1]}]"
      #--------------------------------------------------------------------------------
      puts "No podemos probar la clase Game ya que no tiene algunas funciones definidas en este práctica"
    end
  end
end



if __FILE__ == $0
  Irrgarten::TestP2.run
end
