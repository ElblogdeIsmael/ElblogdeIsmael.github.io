#encoding: UTF-8

require_relative 'player'
require_relative 'dice'

module Irrgarten
  class SuperPlayer < Player
  
    def initialize(other)
            copy(other)
    end
    
    def attack
            (Dice.intensity(@strength) + sumWeapons) * @intelligence
    end
    
    def to_s
            "[Soy Super] #{super.to_s} "
    end
    
  end
end
