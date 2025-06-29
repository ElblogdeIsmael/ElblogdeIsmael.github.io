/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package irrgarten.UI;
import irrgarten.Directions;
import irrgarten.GameState;

/**
 *
 * @author ismael
 */
public interface UI {
    
    /**
     * @brief Método de la clase TextUI, trata de devolver el siguiente movimiento
     * @return la siguiente dirección
     */
    public Directions nextMove();
    
    /**
     * @brief Método que devuelve el estado del juego
     */
    public void showGame(GameState gameState);
}
