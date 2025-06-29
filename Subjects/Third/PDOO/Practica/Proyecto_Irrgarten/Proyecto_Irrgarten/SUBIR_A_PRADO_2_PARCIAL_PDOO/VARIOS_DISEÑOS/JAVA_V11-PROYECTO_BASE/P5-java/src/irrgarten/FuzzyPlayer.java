/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;
import java.util.ArrayList;

/**
 *
 * @author ismael
 */
/**
 * Clase FuzzyPlayer que extiende de Player.
 * Representa un jugador con comportamiento difuso.
 */
public class FuzzyPlayer extends Player {

    /**
     * Constructor que crea un FuzzyPlayer a partir de otro Player.
     * 
     * @param other El jugador del cual se copiarán las propiedades.
     */
    public FuzzyPlayer(Player other) {
        super(other);
    }

    /**
     * Método que determina el movimiento del jugador.
     * 
     * @param direction La dirección preferida de movimiento.
     * @param validMoves Lista de movimientos válidos.
     * @return La dirección final del movimiento.
     */
    @Override
    public Directions move(Directions direction, ArrayList<Directions> validMoves) {
        Directions preference = super.move(direction, validMoves);
        Directions d = Dice.nextStep(preference, validMoves, getIntelligence());
        return d;
    }

    /**
     * Método que calcula la intensidad del ataque del jugador.
     * 
     * @return La intensidad del ataque.
     */
    @Override
    public float attack() {
        return (Dice.intensity(getStrength()) + sumWeapons());
    }

    /**
     * Método que calcula la energía defensiva del jugador.
     * 
     * @return La energía defensiva.
     */
    @Override
    protected float defensiveEnergy() {
        return (Dice.intensity(getIntelligence()) + sumShields());
    }

    /**
     * Método que devuelve una representación en cadena del jugador.
     * 
     * @return Una cadena que representa al jugador.
     */
    @Override
    public String toString() {
        String out = "[Fuzzy]";
        return out + super.toString();
    }
}
    
