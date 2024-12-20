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
 * La clase LabyrinthCharacter representa un personaje dentro de un laberinto.
 * Cada personaje tiene un nombre, inteligencia, salud, fuerza y una posición
 * específica en el laberinto definida por una fila y una columna.
 */
/**
 * Representa un personaje dentro de un laberinto.
 * 
 * <p>Esta clase contiene las características básicas de un personaje en el laberinto,
 * incluyendo su nombre, inteligencia, salud, fuerza y su posición en el laberinto.</p>
 * 
 * @author Ismael
 */
abstract class LabyrinthCharacter {
    /**
     * El nombre del personaje.
     */
    private String name;

    /**
     * La inteligencia del personaje, representada como un valor flotante.
     */
    private float intelligence;

    /**
     * La salud del personaje, representada como un valor flotante.
     */
    private float health;

    /**
     * La fuerza del personaje, representada como un valor flotante.
     */
    private float strength;

    /**
     * La fila en la que se encuentra el personaje dentro del laberinto.
     */
    private int row;

    /**
     * La columna en la que se encuentra el personaje dentro del laberinto.
     */
    private int col;

    /*
     * Constante definida para no usar números mágicos
     */
    private static final int INVALID_POS=-1;
    
    /**
     * Construye un nuevo LabyrinthCharacter con los atributos especificados.
     *
     * @param name el nombre del personaje
     * @param intelligence el nivel de inteligencia del personaje
     * @param strength el nivel de fuerza del personaje
     * @param health el nivel de salud del personaje
     */
    public LabyrinthCharacter(String name, float intelligence, float strength, float health){
        this.name = name;
        this.intelligence = intelligence;
        this.strength = strength;
        this.health = health;
        this.row = INVALID_POS;
        this.col = INVALID_POS;
    }

    /* 
     * Constructor de copia
     * @param objeto de tipo LabyrinthCharacter a copiar
     */
    public LabyrinthCharacter(LabyrinthCharacter other){
        this.name = other.name;
        this.intelligence = other.intelligence;
        this.strength = other.strength;
        this.health = other.health;
        this.row = other.row;
        this.col = other.col;
    }

    /**
 * Verifica si el objeto está muerto.
 * 
 * @return true si la salud es menor o igual a 0, de lo contrario false.
 */
public boolean dead(){
    return health <= 0;
}

/**
 * Obtiene la fila actual.
 * 
 * @return la fila actual.
 */
public int getRow(){
    return row;
}

/**
 * Obtiene la columna actual.
 * 
 * @return la columna actual.
 */
public int getCol(){
    return col;
}

/**
 * Obtiene la inteligencia.
 * 
 * @return la inteligencia.
 */
protected float getIntelligence(){
    return intelligence;
}

/**
 * Obtiene la salud.
 * 
 * @return la salud.
 */
protected float getHealth(){
    return health;
}

/**
 * Obtiene la fuerza.
 * 
 * @return la fuerza.
 */
protected float getStrength(){
    return strength;
}

/**
 * Establece la salud.
 * 
 * @param health la nueva salud.
 */
protected void setHealth(float health){
    this.health = health;
}

/**
 * Establece la posición.
 * 
 * @param row la nueva fila.
 * @param col la nueva columna.
 */
public void setPos(int row, int col){
    this.row = row;
    this.col = col;
}

/**
 * Devuelve una representación en cadena del objeto.
 * 
 * @return una cadena que representa el objeto.
 */
@Override
public String toString(){
    return name + " (" + row + ", " + col + ")" + "\n" + "Intelligence: " + intelligence + "\n" + "Strength: " + strength + "\n" + "Health: " + health;
}

/**
 * Reduce la salud en uno.
 */
protected void gotWounded(){
    health--;
}

/**
 * Realiza un ataque.
 * 
 * @return el valor del ataque.
 */
public abstract float attack();

/**
 * Defiende contra un ataque.
 * 
 * @param attack el valor del ataque recibido.
 * @return true si la defensa fue exitosa, de lo contrario false.
 */
public abstract boolean defend(float attack);
        
}

