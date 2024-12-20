/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;
import  java.util.ArrayList;
import java.util.Collections;

/**
 * Clase parametrizable, además de ser abstracta para las barajas del juego.
 * 
 * @author ismael
 */
abstract class CardDeck <T extends CombatElement> {
    /**
     * Baraja de cartas de cualquier tipo, para ello usa el template T
     */
    private  ArrayList<T>cardDeck;
    /**
     * Constante de número máximo de cartas que se pueden añadir
    */
    protected static final int MAX_CARDS = 20;
    
    /**
     * Constructor de la clase parametrizable CardDeck
     * @param cardDeck 
     */
    public CardDeck( ){
        cardDeck = new ArrayList<>();
    }
    
    /**
     * Método para añadir una carta a la baraja
     */
    protected void addCard(T card){
        cardDeck.add(card);
    }
    
    /**
     * Método para añadir varias cartas a la baraja, se trata de un método abstractoé
     */
    protected abstract void addCards();
    
    /**
     * Devuelve la siguiente carta
     */
    public T nextCard(){
        if(cardDeck.isEmpty()){
            addCards();
            Collections.shuffle(cardDeck);
        }
        return cardDeck.remove(0); //Devuelve y elimina la carta
    }
    
    
}
