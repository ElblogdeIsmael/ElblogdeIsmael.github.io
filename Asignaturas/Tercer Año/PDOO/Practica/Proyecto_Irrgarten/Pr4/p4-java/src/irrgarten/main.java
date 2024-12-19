/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

package irrgarten;
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

public class main {
    public static void main(String[] args) {
        TextUI textUI = new TextUI();
        Game game = new Game(2);
        Controller controller = new Controller(game,textUI);
        controller.play();  // Inicia el juego con la interfaz de texto.
    }
}
