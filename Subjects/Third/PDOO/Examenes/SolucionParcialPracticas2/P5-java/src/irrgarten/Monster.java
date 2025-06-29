/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

/**
 * La clase {@code Monster} representa a un monstruo en el juego, con atributos
 * para la salud, inteligencia, fuerza y posición en el laberinto. Los monstruos
 * pueden atacar, recibir daño y moverse a diferentes posiciones dentro del laberinto.
 * 
 * <p>Esta clase permite modelar el comportamiento y estado de los monstruos en el
 * juego, así como gestionar sus interacciones en combate.</p>
 * 
 * <p>Incluye los siguientes atributos:</p>
 * <ul>
 *   <li>Nombre del monstruo</li>
 *   <li>Inteligencia, fuerza y salud</li>
 *   <li>Posición (fila y columna) en el laberinto</li>
 * </ul>
 * 
 * @see Dice
 * @see GameState
 * 
 * @autor ismael
 */
public class Monster extends LabyrinthCharacter{
    
    /**
     * Salud inicial predeterminada para cada monstruo.
     */
    private static final int INITIAL_HEALTH = 5;
    
    /**
     * Nombre del monstruo.
     */
    private String name;
    
    /**
     * Nivel de inteligencia del monstruo.
     */
    private float intelligence;
    
    /**
     * Nivel de fuerza del monstruo.
     */
    private float strength;
    
    /**
     * Salud actual del monstruo.
     */
    private float health;
    
    /**
     * Fila en la que se encuentra el monstruo dentro del laberinto.
     */
    private int row;
    
    /**
     * Columna en la que se encuentra el monstruo dentro del laberinto.
     */
    private int col;
    
    /**
     * Crea una instancia de {@code Monster} con los atributos especificados.
     *
     * @param name el nombre del monstruo
     * @param intelligence el nivel de inteligencia del monstruo
     * @param strength el nivel de fuerza del monstruo
     */
    public Monster(String name, float intelligence, float strength) {
        super(name, intelligence, strength,INITIAL_HEALTH);
    }
    
    /**
     * Realiza un ataque utilizando la fuerza del monstruo.
     *
     * @return el valor de ataque, calculado en función de la fuerza del monstruo
     */
    public float attack() {
        return Dice.intensity(getStrength());
    }
   
    
    /**
     * Defiende al monstruo de un ataque recibido.
     *
     * @param receivedAttack La intensidad del ataque recibido.
     * @return true si el monstruo está muerto después del ataque, false en caso contrario.
     */
    public boolean defend(float receivedAttack)  {
        boolean isDead = dead();
        if(isDead){
            float defensiveEnergy=Dice.intensity(intelligence);
            
            if(defensiveEnergy<receivedAttack){
                gotWounded();
                isDead = dead();
            }
        }
        return isDead;
    }
    
}
