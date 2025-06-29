require_relative 'Control/controller'
require_relative 'UI/textUI'
require_relative 'game'

class Main
  def self.main
    text_ui = UI::TextUI.new
    game = Irrgarten::Game.new(1)
    controller = Control::Controller.new(game, text_ui)
    controller.play  # Inicia el juego con la interfaz de texto.
  end
end

Main.main if __FILE__ == $0