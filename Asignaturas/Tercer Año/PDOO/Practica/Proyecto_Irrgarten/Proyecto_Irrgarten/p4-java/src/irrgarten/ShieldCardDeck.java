/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

/**
 *
 * @author ismael
 */
public class ShieldCardDeck extends CardDeck<Shield>{
    /**
     * Añade cartas de tipo Shield
    */
    @Override
    protected void addCards(){
        int i = 0;
        while(i++<CardDeck.MAX_CARDS){
            this.addCard(new Shield(Dice.shieldPower(), Dice.usesLeft()));
        }
    }
}
