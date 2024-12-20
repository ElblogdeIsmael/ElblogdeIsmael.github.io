#encoding:utf-8

require_relative 'dice'
require_relative 'shield'
require_relative 'weapon'
require_relative 'game_state'
require_relative 'directions'
require_relative 'orientation'
require_relative 'game_character'

module Irrgarten
    class TestP1
        def self.run # manera de declarar main en ruby
            #------------------------------------------------------------------------------------
            #Crea varias instancias de cada clase creada en esta práctica y utiliza todos sus métodos.
            #------------------------------------------------------------------------------------

            #clase Dice
            # ------------------------------------------------------------------------------------
            #dice1 = Irrgarten::Dice.new()
            #dice2 = Irrgarten::Dice.new()

            #randomPos
            n1=Dice.randomPos(5)
            print "n1 randomPos: ", n1, "\n"
            n2=Dice.randomPos(5)
            print "n2 randomPos: ", n2, "\n"

            #whoStarts
            n1=Dice.whoStarts(5)
            print "n1 whoStarts: ", n1, "\n"
            n2=Dice.whoStarts(5)
             print "n2 whoStarts: ", n2, "\n"

            #randomIntelligence
            n1=Dice.randomIntelligence()
            print "n1 randomIntelligence: ", n1, "\n"
            n2=Dice.randomIntelligence()
            print "n2 randomIntelligence: ", n2, "\n"

            #resurrectPlayer
            n1=Dice.resurrectPlayer()
            print "n1 resurrectPlayer: ", n1, "\n"
            n2=Dice.resurrectPlayer()
            print "n2 resurrectPlayer: ", n2, "\n"

            #weaponReward
            n1=Dice.weaponReward()
            print "n1 weaponReward: ", n1, "\n"
            n2=Dice.weaponReward()
            print "n2 weaponReward: ", n2, "\n"

            #shieldReward
            n1=Dice.shieldReward()
            print "n1 shieldReward: ", n1, "\n"
            n2=Dice.shieldReward()
            print "n2 shieldReward: ", n2, "\n"

            #healthReward
            n1=Dice.healthReward()
            print "n1 healthReward: ", n1, "\n"
            n2=Dice.healthReward()
            print "n2 healthReward: ", n2, "\n"

            #weaponPower
            n1=Dice.weaponPower()
            print "n1 weaponPower: ", n1, "\n"
            n2=Dice.weaponPower()
            print "n2 weaponPower: ", n2, "\n"
            
            #shieldPower
            n1=Dice.shieldPower()
            print "n1 shieldPower: ", n1, "\n"
            n2=Dice.shieldPower()
            print "n2 shieldPower: ", n2, "\n"

            #usesLeft
            n1=Dice.usesLeft()
            print "n1 usesLeft: ", n1, "\n"
            n2=Dice.usesLeft()
            print "n2 usesLeft: ", n2, "\n"
            
            #intensity
            n1=Dice.intensity(5)
            print "n1 intensity: ", n1, "\n"
            n2=Dice.intensity(5)
            print "n2 intensity: ", n2, "\n"

            #discardElement
            n1=Dice.discardElement(3)
            print "n1 discardElement: ", n1, "\n"
            n2=Dice.discardElement(5)
            print "n2 discardElement: ", n2, "\n"
            # ------------------------------------------------------------------------------------

            #clase Shield

            # ------------------------------------------------------------------------------------

            shield1 = Irrgarten::Shield.new(1.5,3)
            shield2 = Irrgarten::Shield.new(2.5,2)

            #protect
            n1=shield1.protect()
            print "Shield 1 protect: ", n1, "\n"
            n2=shield2.protect()
            print "Shield 2 protect: ", n2, "\n"

            #to_s
            n1=shield1.to_s()
            print "Shield 1 to_s: ", n1, "\n"
            n2=shield2.to_s()
            print "Shield 2 to_s: ", n2, "\n"

            #discard
            n1=shield1.discard()   
            print "Shield 1 discard: ", n1, "\n"
            n2=shield2.discard()
            print "Shield 2 discard: ", n2, "\n"

            # ------------------------------------------------------------------------------------

            #clase Weapon

            # ------------------------------------------------------------------------------------

            weapon1 = Irrgarten::Weapon.new(2.5,3)
            weapon2 = Irrgarten::Weapon.new(3.5,2)

            #attack
            n1=weapon1.attack()
            print "Weapon 1 attack: ", n1, "\n"
            n2=weapon2.attack()
            print "Weapon 2 attack: ", n2, "\n"

            #toString
            n1=weapon1.to_s()
            print "Weapon 1 to_s: ", n1, "\n"
            n2=weapon2.to_s()
            print "Weapon 2 to_s: ", n2, "\n"

            #discard
            n1=weapon1.discard()
            print "Weapon 1 discard: ", n1, "\n"
            n2=weapon2.discard()
            print "Weapon 2 discard: ", n2, "\n"

            # ------------------------------------------------------------------------------------

            #clase GameState

            # ------------------------------------------------------------------------------------

            gamestate1 = Irrgarten::GameState.new("labyrinth-First", "players", "monster", 1, true, "log-game1")
            gamestate2 = Irrgarten::GameState.new("labyrinth-Second", "players", "monster", 2, false, "log-game2")

            #getlabyrinth
            n1=gamestate1.getlabyrinth()
            print "gamestate 1 getlabyrinth: ", n1, "\n"
            n2=gamestate2.getlabyrinth()
            print "gamestate 2 getlabyrinth: ", n2, "\n"

            #getplayers
            n1=gamestate1.getplayers()
            print "gamestate 1 getplayers: ", n1, "\n"
            n2=gamestate2.getplayers()
            print "gamestate 2 getplayers: ", n2, "\n"

            #getmonsters
            n1=gamestate1.getmonsters()
            print "gamestate 1 getmonsters: ", n1, "\n"
            n2=gamestate2.getmonsters()
            print "gamestate 2 getmonsters: ", n2, "\n"

            #getcurrentPlayer
            n1=gamestate1.getcurrentPlayer()
            print "gamestate 1 getcurrentPlayer: ", n1, "\n"
            n2=gamestate2.getcurrentPlayer()
            print "gamestate 2 getcurrentPlayer: ", n2, "\n"

            #getwinner
            n1=gamestate1.getwinner()
            print "gamestate 1 getwinner: ", n1, "\n"
            n2=gamestate2.getwinner()
            print "gamestate 2 getwinner: ", n2, "\n"

            #getlog
            n1=gamestate1.getlog()
            print "gamestate 1 getlog: ", n1, "\n"
            n2=gamestate2.getlog()
            print "gamestate 2 getlog: ", n2, "\n"

            # --------------------------------------------------------------------------------------------------------------------
        
        #------------------------------------------------------------------------------------
        # Prueba a utilizar los valores de los tipos enumerados creados.
        #------------------------------------------------------------------------------------
        
        #enum Orientation

        orientation1 = Irrgarten::Orientation::VERTICAL
        orientation2 = Irrgarten::Orientation::HORIZONTAL

        print "orientation1: ", orientation1, "\n"
        print "orientation2: ", orientation2, "\n"

        #enum Direction

        direction1 = Irrgarten::Directions::LEFT
        direction2 = Irrgarten::Directions::RIGHT
        direction3 = Irrgarten::Directions::UP
        direction4 = Irrgarten::Directions::DOWN

        print "direction1: ", direction1, "\n"
        print "direction2: ", direction2, "\n"
        print "direction3: ", direction3, "\n"
        print "direction4: ", direction4, "\n"

        #enum Game Character

        gamecharacter1 = Irrgarten::GameCharacter::PLAYER
        gamecharacter2 = Irrgarten::GameCharacter::MONSTER

        print "gamecharacter1: ", gamecharacter1, "\n"
        print "gamecharacter2: ", gamecharacter2, "\n"

        #Prueba la clase Dice: llama a cada método 100 veces y comprueba si se cumplen a nivel
        #práctico las instrucciones relativas a las probabilidades de cada evento.

        #randomPos

        for i in 0..100
            n1=Dice.randomPos(5)
            print "n1 randomPos: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a randomPos\n"
            end
        end

        #whoStarts

        for i in 0..100
            n1=Dice.whoStarts(5)
            print "n1 whoStarts: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a whoStarts\n"
            end
        end

        #randomIntelligence

        for i in 0..100
            n1=Dice.randomIntelligence()
            print "n1 randomIntelligence: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a randomIntelligence\n"
            end
        end

        #resurrectPlayer

        for i in 0..100
            n1=Dice.resurrectPlayer()
            print "n1 resurrectPlayer: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a resurrectPlayer\n"
            end
        end

        #weaponReward

        for i in 0..100
            n1=Dice.weaponReward()
            print "n1 weaponReward: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a weaponReward\n"
            end
        end

        #shieldReward

        for i in 0..99
            n1=Dice.shieldReward()
            print "n1 shieldReward: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a shieldReward\n"
            end
        end

        #healthReward

        for i in 0..99
            n1=Dice.healthReward()
            print "n1 healthReward: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a healthReward\n"
            end
        end

        #weaponPower

        for i in 0..99
            n1=Dice.weaponPower()
            print "n1 weaponPower: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a weaponPower\n"
            end
        end

        #shieldPower    

        for i in 0..99
            n1=Dice.shieldPower()
            print "n1 shieldPower: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a shieldPower\n"
            end
        end

        #usesLeft

        for i in 0..99
            n1=Dice.usesLeft()
            print "n1 usesLeft: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a usesLeft\n"
            end
        end

        #intensity

        for i in 0..99
            n1=Dice.intensity(5)
            print "n1 intensity: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a intensity\n"
            end
        end

        #discardElement

        for i in 0..99
            n1=Dice.discardElement(3)
            print "n1 discardElement: ", n1, "\n"
            if i==99
                print "Se ha llamado 100 veces a discardElement\n"
            end
        end




        end
    end
end

#Punto de entrada principal
if __FILE__ == $0
    Irrgarten::TestP1.run
end
