/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

import java.util.ArrayList;

/**
 * La clase {@code Player} representa a un jugador en el juego, que posee atributos de
 * inteligencia, fuerza, salud, y una posición en el laberinto. Además, puede equiparse
 * con armas y escudos, atacar y defenderse en el juego.
 * <p>
 * Cada jugador tiene límites en la cantidad de armas y escudos que puede llevar,
 * y también puede resucitar o recibir recompensas durante el juego.
 * </p>
 * 
 * <p> Contiene métodos para mover al jugador, atacar, defender, y recibir heridas.
 * Los jugadores interactúan con otros objetos del juego, como el dado y los elementos
 * de combate, para determinar su rendimiento en el juego.</p>
 * 
 * @author ismael
 */
public class Player extends LabyrinthCharacter{
    /**
     * El número máximo de armas que puede llevar el jugador (valor por defecto: 2).
     */
    private static final int MAX_WEAPONS = 2;

    /**
     * El número máximo de escudos que puede llevar el jugador (valor por defecto: 3).
     */
    private static final int MAX_SHIELDS = 3;

    /**
     * La salud inicial del jugador (valor por defecto: 10).
     */
    private static final int INITIAL_HEALTH = 10;

    /**
     * El número de golpes consecutivos que el jugador puede recibir antes de perder (valor por defecto: 3).
     */
    private static final int HITS2LOSE = 3;

    /**
     * El nombre del jugador.
     */
    private String name;

    /**
     * El número identificador del jugador.
     */
    private char number;

    /**
     * El nivel de inteligencia del jugador.
     */
    private float intelligence;

    /**
     * El nivel de fuerza del jugador.
     */
    private float strength;

    /**
     * El nivel de salud del jugador.
     */
    private int health;

    /**
     * La posición de fila del jugador en el laberinto.
     */
    private int row;

    /**
     * La posición de columna del jugador en el laberinto.
     */
    private int col;

    /**
     * El número de golpes consecutivos recibidos por el jugador.
     */
    private int consecutiveHits = 0;

    /**
     * La lista de armas que lleva el jugador.
     */
    private ArrayList<Weapon> weapons;

    /**
     * La lista de escudos que lleva el jugador.
     */
    private ArrayList<Shield> shields;

    /**
     * El mazo de cartas de armas del jugador.
     */
    private WeaponCardDeck weaponCardDeck;

    /**
     * El mazo de cartas de escudos del jugador.
     */
    private ShieldCardDeck shieldCardDeck;

    /**
     * Constructor para la clase {@code Player}.
     * @param number Identificador del jugador.
     * @param intelligence Nivel de inteligencia del jugador.
     * @param strength Nivel de fuerza del jugador.
     * @param health Nivel de salud del jugador.
     */
    public Player(char number, float intelligence, float strength) {
        super("Player #" + number, intelligence, strength, INITIAL_HEALTH);
        this.number = number;
        this.weapons = new ArrayList<>();
        this.shields = new ArrayList<>();
        this.weaponCardDeck = new WeaponCardDeck();
        this.shieldCardDeck = new ShieldCardDeck();
    }
    
    /**
     * @brief constructor de copia de PlAYER
     * @param other objeto de la clase Player para realizar la copia
     */
    public Player (Player other){
        super(other);
        this.number = other.number;
        this.consecutiveHits = other.consecutiveHits;
        
        this.weapons= new ArrayList<>(other.weapons);
        this.shields= new ArrayList<>(other.shields);

        this.weaponCardDeck = other.weaponCardDeck;
        this.shieldCardDeck = other.shieldCardDeck;

        
        
    }


    /**
     * Resucita al jugador restaurando su salud, hits consecutivos y reiniciando armas y escudos.
     */
    public void resurrect() {    
        setHealth(INITIAL_HEALTH);
        resetHits();
        
        weapons.clear();
        shields.clear();
    }
   

    /**
     * Obtiene el número identificador del jugador.
     * @return El número del jugador.
     */
    public char getNumber() {
        return number;
    }

    /**
     * Calcula el poder de ataque del jugador, basado en su fuerza y el poder de sus armas.
     * @return El poder total de ataque.
     */
    public float attack() {
        return (strength + sumWeapons());
    }

    /**
     * Defiende al jugador de un ataque recibido.
     * @param receivedAttack La potencia del ataque recibido.
     * @return {@code true} si el jugador se defiende exitosamente; {@code false} en caso contrario.
     */
    public boolean defend(float receivedAttack) {
        return manageHit(receivedAttack);
    }

    /**
     * Representación en cadena del jugador.
     * @return Una cadena con los detalles del jugador.
     */
    @Override
    public String toString() {
        String output;
        output = super.toString();
        
        output+=" Consecutive Hits: " + consecutiveHits + "\n";
        output+="\nWeapons: \n";
            for(Weapon w : weapons){
            output+=w.toString();
            output+="\n";
        }
        output+="\nShields: \n";
        for(Shield s : shields){
            output+=s.toString();
            output+="\n";
        }
        return output;
    }

    /**
     * Crea una nueva arma para el jugador.
     * @return Una nueva instancia de {@code Weapon}.
     */
    public Weapon newWeapon() {
        Weapon w = new Weapon(Dice.weaponPower(), Dice.usesLeft());
        return w;
    }

    /**
     * Crea un nuevo escudo para el jugador.
     * @return Una nueva instancia de {@code Shield}.
     */
    public Shield newShield() {
        Shield s = new Shield(Dice.shieldPower(), Dice.usesLeft());
        return s;
    }

    /**
     * Calcula la energía defensiva total de todos los escudos del jugador.
     * @return La energía defensiva acumulada.
     */
    protected float defensiveEnergy() {
        return (intelligence + sumShields());
    }

    /**
     * Reinicia el contador de golpes consecutivos recibidos.
     */
    public void resetHits() {
        consecutiveHits = 0;
    }


    /**
     * Incrementa el contador de golpes consecutivos en 1.
     */
    public void incConsecutiveHits() {
        consecutiveHits++;
    }

    /**
     * Suma la potencia de ataque de todas las armas del jugador.
     * @return El poder total de ataque de todas las armas.
     */
    public float sumWeapons() {
        float sum = 0;
        for (Weapon w : weapons) {
            sum += w.attack();
        }
        return sum;
    }

    /**
     * Suma el poder defensivo de todos los escudos del jugador.
     * @return El poder total defensivo de todos los escudos.
     */
    public float sumShields() {
        float sum = 0;
        for (Shield s : shields) {
            sum += s.protect();
        }
        return sum;
    }

    /**
     * Mueve al jugador en una dirección dada.
     * @param direction La dirección en la que se moverá.
     * @param validMoves Los movimientos válidos disponibles.
     * @return La dirección en la que se movió el jugador.
     */
    public Directions move(Directions direction, ArrayList<Directions> validMoves) {
        int size = validMoves.size();
        Directions firstElement;
        boolean contained = false;
        for(Directions d : validMoves){
            if(d==direction) contained=true;
        }
        if(size>0 && !contained){
            firstElement = validMoves.get(0);
        }
        else{
            firstElement=direction;
        }
        return firstElement;
    }

    /**
     * Recibe una recompensa.
     */
    public void receiveReward() {
        int wReward = Dice.weaponsReward();
        int sReward = Dice.shieldsReward();
        
        for(int i=0; i< wReward; i++){
            Weapon wnew = newWeapon();
            receiveWeapon(wnew);
        }
        for(int i=0; i< sReward; i++){
            Shield snew = newShield();
            receiveShield(snew);
        }
        setHealth(getHealth()+Dice.healthReward());
        
    }
    
    /**
     * Recibe un arma y la agrega al inventario.
     * @param w El arma a recibir.
     */
    public void receiveWeapon(Weapon w) {
        for(int i=0;i<weapons.size();i++){
            Weapon wi = weapons.get(i);
            boolean discard = wi.discard();
            if(discard){
                weapons.remove(i);
            }
        }
        int size = weapons.size();
        if(size<MAX_WEAPONS){
            weapons.add(w);
        }
    }
    
    /**
     * Recibe un escudo y lo agrega al inventario.
     * @param s El escudo a recibir.
     */
    public void receiveShield(Shield s) {
        for(int i=0;i<shields.size();i++){
            Shield si = shields.get(i);
            boolean discard = si.discard();
            if(discard){
                shields.remove(i);
            }
            
        }
        int size = shields.size();
        if(size<MAX_SHIELDS){
            shields.add(s);
        }
    }
    
    /**
     * Gestiona el impacto de un ataque recibido por el jugador.
     * @param receivedAttack La potencia del ataque recibido.
     * @return {@code true} si el impacto fue gestionado exitosamente, {@code false} en caso contrario.
     */
    public boolean manageHit(float receivedAttack) {
        boolean lose=false;
        float defense=defensiveEnergy();
        if(defense<receivedAttack){
            gotWounded();
            incConsecutiveHits();
        }
        else{
            resetHits();
        }
        if(consecutiveHits==HITS2LOSE || dead()){
            resetHits();
            lose=true;
        }
        return lose;
        
    }
    /**
     * Añade una arma a weapons
     * @param w Arma a añadir
     */
    public void addWeapon(Weapon w) {
        weapons.add(w);
    }

    /**
     * Añade un escudo a shields
     * @param s Escudo a añadir
     */
    public void addShield(Shield s) {
        shields.add(s);
    }   
    

}
