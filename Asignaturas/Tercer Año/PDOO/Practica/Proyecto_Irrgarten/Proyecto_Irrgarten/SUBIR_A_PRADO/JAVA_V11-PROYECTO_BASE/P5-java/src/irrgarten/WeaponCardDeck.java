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
 * La clase WeaponCardDeck representa una baraja de cartas de armas.
 * Extiende la clase genérica CardDeck con el tipo Weapon.
 * 
 * <p>Esta clase se encarga de añadir cartas de tipo Weapon a la baraja.</p>
 * 
 * @see CardDeck
 * @see Weapon
 */
public class WeaponCardDeck extends CardDeck<Weapon>{
    /**
     * Añade cartas de tipo Weapon
     */
    @Override
    protected void addCards(){
        int i=0;
        while(i++<WeaponCardDeck.MAX_CARDS){
            addCard(new Weapon(Dice.weaponPower(), Dice.usesLeft()));
        }
    }
}
