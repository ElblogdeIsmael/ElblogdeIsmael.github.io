/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

/**
 *
 * @author ismael
 */
public class WeaponCardDeck extends CardDeck<Weapon>{
    /**
     * Añade cartas de tipo Weapon
     */
    @Override
    protected void addCards(){
        int i=0;
        while(i++<CardDeck.MAX_CARDS){
            this.addCard(new Weapon(Dice.weaponPower(), Dice.usesLeft()));
        }
    }
}
