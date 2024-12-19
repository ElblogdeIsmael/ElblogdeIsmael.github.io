/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package irrgarten;
import irrgarten.UI.GraphicUI;
import irrgarten.UI.TextUI;
import irrgarten.controller.Controller;

/**
 *
 * @author ismael
 */
/**
 * La clase principal sirve como punto de entrada para la aplicación.
 * Inicializa la interfaz de usuario basada en texto (TextUI), el juego con un nivel especificado,
 * y el controlador que gestiona la interacción entre el juego y la interfaz de usuario.
 * Se llama al método play del controlador para iniciar el juego con la interfaz de texto.
 */

public class Main {
    public static void main(String[] args) {
        final int PLAYERS = 1;
        //TextUI textUI = new TextUI();
        GraphicUI graphicUI = new GraphicUI();
        Game game = new Game(PLAYERS );
        //Controller controller = new Controller(game,textUI);
        Controller controller = new Controller(game,graphicUI);
        controller.play();  // Inicia el juego con la interfaz de texto.
    }
}
