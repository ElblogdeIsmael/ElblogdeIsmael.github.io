/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

/**
 *
 * @author ismael
 */
/**
 * La clase ShieldCardDeck representa una baraja de cartas de tipo Shield.
 * Extiende la clase genérica CardDeck con el tipo de carta Shield.
 * 
 * <p>Esta clase se encarga de añadir cartas de tipo Shield a la baraja
 * utilizando el método addCards.</p>
 * 
 * @see CardDeck
 * @see Shield
 */
public class ShieldCardDeck extends CardDeck<Shield>{
    /**
     * Añade cartas de tipo Shield
    */
    @Override
    protected void addCards(){
        int i = 0;
        while(i++<ShieldCardDeck.MAX_CARDS){
            addCard(new Shield(Dice.shieldPower(), Dice.usesLeft()));
        }
    }
}
