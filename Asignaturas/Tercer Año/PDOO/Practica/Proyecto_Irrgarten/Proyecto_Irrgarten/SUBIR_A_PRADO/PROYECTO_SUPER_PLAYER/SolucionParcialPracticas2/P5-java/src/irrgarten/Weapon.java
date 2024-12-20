/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

/** //EXTRA INFORMACIÓN
 * La clase {@code Weapon} representa un arma en el juego que puede ser utilizada
 * por un jugador para atacar. Cada arma tiene un poder de ataque y un número
 * limitado de usos.
 * 
 * <p>Las armas se utilizan para infligir daño a los enemigos en el juego. Cada
 * vez que se usa un arma, el número de usos se decrementa y se aplica el poder
 * de ataque correspondiente.</p>
 * 
 * Atributos de la clase:
 * <ul>
 * <li><b>power:</b> El poder de ataque que tiene el arma.</li>
 * <li><b>uses:</b> El número de veces que el arma puede ser utilizada.</li>
 * </ul>
 * 
 * Métodos de la clase:
 * <ul>
 * <li><b>attack():</b> Realiza un ataque, devolviendo el poder de ataque del arma
 * y decrementando el número de usos.</li>
 * <li><b>toString():</b> Devuelve una representación en cadena del arma,
 * mostrando su poder y los usos restantes.</li>
 * <li><b>discard():</b> Determina si el arma debe ser descartada en función
 * de sus usos restantes.</li>
 * </ul>
 * 
 * @author ismael
 */
class Weapon extends CombatElement{
    /**
     * El poder de ataque que tiene el arma.
     */
    private float power; 
    /**
     * El número de veces que el arma puede ser utilizada.
     */
    private int uses;    

    /**
     * Constructor para crear un nuevo arma con un poder de ataque y un número de usos.
     *
     * @param power El poder de ataque del arma.
     * @param uses El número de usos disponibles para el arma.
     */
    public Weapon(float power, int uses) {
        super(power, uses);
    }

    /**
     * Realiza un ataque con el arma. Si el arma tiene usos restantes,
     * decrementa el número de usos y devuelve el poder de ataque.
     *
     * @return El poder de ataque del arma si tiene usos restantes, 0 en caso contrario.
     */
    public float attack() {
        return produceEffect();
    }

    /**
     * Devuelve una representación en cadena del arma, mostrando
     * su poder de ataque y los usos restantes.
     *
     * @return Una cadena que representa el arma.
     */
    @Override
    public String toString() {
        String out="[Weapon]";
        out+=super.toString();
        return out;
    }

}