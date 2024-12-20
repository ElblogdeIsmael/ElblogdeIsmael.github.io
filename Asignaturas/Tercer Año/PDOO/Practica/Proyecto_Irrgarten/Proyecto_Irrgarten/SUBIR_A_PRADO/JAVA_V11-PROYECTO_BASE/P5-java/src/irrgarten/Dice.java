/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

import java.util.Random;
import java.util.ArrayList;

/**
 *
 * @author ismael
 */

/**
 * La clase {@code Dice} proporciona varios métodos estáticos para simular
 * valores aleatorios relacionados con un juego de combate, incluyendo atributos
 * como fuerza, inteligencia, recompensas, probabilidad de resurrección, entre otros.
 * Los valores generados están limitados por constantes establecidas en la clase.
 * Utiliza un generador de números aleatorios para simular estos valores.
 */
public class Dice {
    
    /**
     * Número máximo de usos para armas y escudos.
     */
    private static final int MAX_USES = 5;
    
    /**
     * Valor máximo de inteligencia para jugadores y monstruos.
     */
    private static final float MAX_INTELLIGENCE = 10.0f;
    
    /**
     * Valor máximo de fuerza para jugadores y monstruos.
     */
    private static final float MAX_STRENGTH = 10.0f;
    
    /**
     * Probabilidad de que un jugador sea resucitado en cada turno.
     */
    private static final float RESURRECT_PROB = 0.3f;
    
    /**
     * Máximo número de armas que un jugador puede recibir como recompensa por ganar un combate.
     */
    private static final int WEAPONS_REWARD = 2;
    
    /**
     * Máximo número de escudos que un jugador puede recibir como recompensa por ganar un combate.
     */
    private static final int SHIELDS_REWARD = 3;
    
    /**
     * Máximo número de unidades de salud que un jugador puede recibir como recompensa por ganar un combate.
     */
    private static final int HEALTH_REWARD = 5;
    
    /**
     * Potencia máxima que puede tener un arma.
     */
    private static final int MAX_ATTACK = 3;
    
    /**
     * Potencia máxima que puede tener un escudo.
     */
    private static final int MAX_SHIELD = 2;
    
    /**
     * Generador de números aleatorios utilizado por la clase.
     */
    private static Random generator = new Random();
    
    /**
     * Genera una posición aleatoria dentro del límite máximo dado.
     *
     * @param max el valor máximo (exclusivo) para la posición aleatoria.
     * @return un valor entero aleatorio entre 0 (inclusive) y max (exclusivo).
     */
    static public int randomPos(int max) {
        return generator.nextInt(max);
    }
    
    /**
     * Determina aleatoriamente qué jugador comienza en base al número de jugadores.
     *
     * @param nplayers el número total de jugadores.
     * @return un valor entero entre 0 y nplayers - 1 indicando quién comienza.
     */
    static public int whoStarts(int nplayers) {
        return generator.nextInt(nplayers);
    }
    
    /**
     * Genera un valor aleatorio para la inteligencia, limitado por el máximo establecido.
     *
     * @return un valor flotante aleatorio entre 0.0 y MAX_INTELLIGENCE.
     */
    public static float randomIntelligence(){
        return generator.nextFloat()*MAX_INTELLIGENCE;
    }

    /**
     * Genera un valor aleatorio para la fuerza, limitado por el máximo establecido.
     *
     * @return un valor flotante aleatorio entre 0.0 y MAX_STRENGTH.
     */
    public static float randomStrength(){
        return generator.nextFloat()*MAX_STRENGTH;
    }
    
    /**
     * Determina si un jugador resucitará en un turno, en base a la probabilidad de resurrección.
     *
     * @return {@code true} si el jugador resucita; {@code false} de lo contrario.
     */
    static boolean resurrectPlayer() {
        return generator.nextFloat() <= RESURRECT_PROB;
    }
    
    /**
     * Genera una cantidad aleatoria de armas recibidas como recompensa.
     *
     * @return un valor entero entre 0 y WEAPONS_REWARD .
     */
    static public int weaponsReward(){
        return generator.nextInt(WEAPONS_REWARD+1);
    }
    
    /**
     * Genera una cantidad aleatoria de escudos recibidos como recompensa.
     *
     * @return un valor entero entre 0 y SHIELDS_REWARD.
     */
    static public int shieldsReward(){
        return generator.nextInt(SHIELDS_REWARD+1); //Intervalo cerrado, debemos de incluir el ultimo
   }
    
    /**
     * Genera una cantidad aleatoria de salud recibida como recompensa.
     *
     * @return un valor entero entre 0 y HEALTH_REWARD .
     */
    static public int healthReward(){
        return generator.nextInt(HEALTH_REWARD+1);
    }
    
    /**
     * Genera un valor aleatorio de potencia para un arma.
     *
     * @return un valor flotante entre 0 y MAX_ATTACK .
     */
    static public float weaponPower(){
        return generator.nextFloat()*MAX_ATTACK;
    }
   
    /**
     * Genera un valor aleatorio de potencia para un escudo.
     *
     * @return un valor flotante entre 0 y MAX_SHIELD .
     */
    static public float shieldPower(){
        return generator.nextFloat()*MAX_SHIELD;
    }
    
    /**
     * Genera un número aleatorio de usos restantes para armas o escudos.
     *
     * @return un valor entero entre 0 y MAX_USES .
     */
    static public int usesLeft(){
        return generator.nextInt(MAX_USES+1);
    }
    
    /**
     * Genera una intensidad aleatoria basada en la competencia dada.
     *
     * @param competence el nivel máximo de competencia.
     * @return un valor flotante entre 0.0 y competence.
     */
    static public float intensity(float competence){
        return generator.nextFloat()*competence;
    }
    
    /**
     * Determina si un elemento debe ser descartado en función de sus usos restantes.
     *
     * @param usesLeft el número de usos restantes del elemento.
     * @return {@code true} si el elemento debe ser descartado; {@code false} de lo contrario.
     */
    static public boolean discardElement(int usesLeft) {
        float p = (float)usesLeft / MAX_USES;
        
        return generator.nextFloat() >= p;
    }
    /**
     * 
     */
    /**
     * Determines the next step based on a preferred direction, a list of valid moves, and an intelligence factor.
     *
     * @param preference The preferred direction to move in.
     * @param validMoves A list of valid directions that can be taken.
     * @param intelligence A float value representing the intelligence factor, which influences the likelihood of choosing the preferred direction.
     * @return The chosen direction for the next step, which may be the preferred direction or a random valid move based on the intelligence factor.
     */
    static public Directions nextStep(Directions preference, ArrayList<Directions> validMoves, float intelligence) {
        Directions out;
        if (generator.nextFloat() < (intelligence / MAX_INTELLIGENCE)) {
        out = preference;
        } else {
            out =  validMoves.get(generator.nextInt(validMoves.size()));
        }
         return out;
         
         //Otra implementacion:
         /*Directions toReturn=preference;
        
        if(Dice.randomIntelligence()>intelligence){
            int indice=generator.nextInt(validMoves.size());
            toReturn=validMoves.get(indice);          
        }
        
        return toReturn;*/
    }
}
    
