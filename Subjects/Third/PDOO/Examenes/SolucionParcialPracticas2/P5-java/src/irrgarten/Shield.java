/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

/**
 * La clase {@code Shield} representa un escudo en el juego que puede proteger
 * a un jugador de ataques. Cada escudo tiene un valor de protección y un número
 * limitado de usos.
 * 
 * <p>Los escudos se utilizan para reducir el daño recibido por los jugadores
 * durante el juego. Cada vez que se utiliza un escudo, el número de usos se decrementa
 * y se aplica el valor de protección correspondiente.</p>
 * 
 * Atributos de la clase:
 * <ul>
 * <li><b>protection:</b> El valor de protección que ofrece el escudo.</li>
 * <li><b>uses:</b> El número de veces que el escudo puede ser utilizado.</li>
 * </ul>
 * 
 * Métodos de la clase:
 * <ul>
 * <li><b>protect():</b> Reduce el daño recibido en función de la protección del escudo
 * y decrementa el número de usos.</li>
 * <li><b>toString():</b> Devuelve una representación en cadena del escudo, mostrando
 * su protección y los usos restantes.</li>
 * <li><b>discard():</b> Determina si el escudo debe ser descartado en función de
 * sus usos restantes.</li>
 * </ul>
 * 
 * @author ismael
 */
public class Shield extends CombatElement {
    /**
     *  El valor de protección que ofrece el escudo.
     */
    private float protection; 
    /**
     * El número de veces que el escudo puede ser utilizado.
     */
    private int uses;         

    /**
     * Constructor para crear un nuevo escudo con un valor de protección y un número de usos.
     *
     * @param protection El valor de protección del escudo.
     * @param uses El número de usos disponibles para el escudo.
     */
    public Shield(float protection, int uses) {
        super(protection, uses);
    }

    /**
     * Aplica la protección del escudo si aún tiene usos disponibles.
     * Decrementa el número de usos del escudo cada vez que se utiliza.
     *
     * @return El valor de protección del escudo si tiene usos restantes, 0 en caso contrario.
     */
    public float protect() {
        return produceEffect();
    }

    /**
     * Devuelve una representación en cadena del escudo, mostrando
     * su protección y los usos restantes.
     *
     * @return Una cadena que representa el escudo.
     */
    @Override
    public String toString() {
        String out = "[Shield]";
        out+=super.toString();
        return out;
    }

}