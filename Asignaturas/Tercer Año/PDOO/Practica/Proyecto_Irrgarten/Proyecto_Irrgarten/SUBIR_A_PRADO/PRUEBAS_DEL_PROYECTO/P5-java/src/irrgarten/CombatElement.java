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
 * Representa un elemento de combate con un efecto y un número de usos.
 */
abstract class CombatElement {

    /*
     * Variable que define el efecto que causa.
     */
    private float effect;
    /*
     * Variable que define el número de usos del elemento de combate.
     */
    private int uses;

    /**
     * Constructor de la clase CombatElement.
     * 
     * @param effect El efecto del elemento de combate.
     * @param uses   El número de usos del elemento de combate.
     */
    public CombatElement(float effect, int uses) {
        this.effect = effect;
        this.uses = uses;
    }

    /**
     * Produce el efecto del elemento de combate si tiene usos disponibles.
     * 
     * @return El efecto del elemento de combate si tiene usos disponibles, de lo
     *         contrario retorna 0.
     */
    protected float produceEffect() {
        if(uses>0){
            uses--;
            return effect;
        }
        
        else return 0;
    }

    /**
     * Descarta el elemento de combate basado en el número de usos.
     * 
     * @return true si el elemento es descartado, false en caso contrario.
     */
    public boolean discard() {
        return Dice.discardElement(uses);
    }

    /**
     * Devuelve una representación en cadena del elemento de combate.
     * 
     * @return Una cadena que representa el efecto y los usos del elemento de
     *         combate.
     */
    @Override
    public String toString() {
        return "Elemento de Combate:[ Effect: " + effect + ", Uses: " + uses + " ]";
    }
}
    
    
    
    
