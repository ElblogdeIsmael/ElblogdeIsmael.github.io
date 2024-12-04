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
     * Verifica si el monstruo está muerto.
     *
     * @return {@code true} si la salud del monstruo es cero o menor; {@code false} en caso contrario
     */
    public boolean dead() {
        return this.health <= 0;
    }
    
    /**
     * Realiza un ataque utilizando la fuerza del monstruo.
     *
     * @return el valor de ataque, calculado en función de la fuerza del monstruo
     */
    public float attack() {
        return Dice.intensity(this.strength);
    }
    
    /**
     * Establece la posición del monstruo en el laberinto.
     *
     * @param row la nueva fila en la que se ubicará el monstruo
     * @param col la nueva columna en la que se ubicará el monstruo
     */
    public void setPos(int row, int col) {
        this.row = row;
        this.col = col;
    }
    
    /**
     * Devuelve una representación en cadena del estado del monstruo.
     *
     * @return una cadena que describe el nombre, inteligencia, fuerza, salud y posición del monstruo
     */
    public String toString() {
        return "Monster [ Name: " + this.name + " Intelligence: " + this.intelligence +
            " Strength: " + this.strength + " Health: " + this.health +
            " Position: " + this.row + "," + this.col + " ]";
    }
    
    /**
     * Reduce la salud del monstruo en 1 unidad cuando recibe daño.
     */
    public void gotWounded() {
        this.health -= 1;
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
            float defensiveEnergy=Dice.intensity(this.intelligence);
            
            if(defensiveEnergy<receivedAttack){
                gotWounded();
                isDead = dead();
            }
        }
        return isDead;
    }
    
    //funciones extra
    /**
     * Obtiene la fila en la que se encuentra el monstruo.
     *
     * @return la fila en la que se encuentra el monstruo
     */
    public int getPosX() {
        return this.row;
    }

    /**
     * Obtiene la columna en la que se encuentra el monstruo.
     *
     * @return la columna en la que se encuentra el monstruo
     */
    public int getPosY() {
        return this.col;
    }
}
