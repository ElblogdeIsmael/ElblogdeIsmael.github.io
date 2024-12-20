/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

/**
 * La clase {@code GameState} representa el estado actual del juego, incluyendo
 * la información del laberinto, los jugadores, los monstruos, el jugador actual, 
 * y el registro de eventos.
 * 
 * <p>Esta clase es útil para almacenar y acceder al estado general del juego
 * durante el desarrollo de una partida.</p>
 * 
 * <p>Incluye detalles como:</p>
 * <ul>
 *   <li>Estado del laberinto y su disposición</li>
 *   <li>Jugadores y monstruos en el juego</li>
 *   <li>El jugador que tiene el turno actual</li>
 *   <li>Indicación de si existe un ganador</li>
 *   <li>Un registro de eventos que documenta el desarrollo de la partida</li>
 * </ul>
 * 
 * @author ismael
 */
public class GameState {
    
    /**
     * Estado actual del laberinto en forma de cadena.
     */
    static private String labyrinth;
    
    /**
     * Información sobre los jugadores en el juego en forma de cadena.
     */
    static private String players;
    
    /**
     * Información sobre los monstruos en el juego en forma de cadena.
     */
    static private String monster;
    
    /**
     * Índice del jugador que tiene el turno actual.
     */
    static private int currentPlayer;
    
    /**
     * Indica si existe un ganador en el juego.
     */
    static private boolean winner;
    
    /**
     * Registro de eventos en el juego en forma de cadena.
     */
    static private String log;
    
    /**
     * Crea una nueva instancia de {@code GameState} con el estado especificado del juego.
     *
     * @param labyrinth una representación en cadena del laberinto
     * @param players una representación en cadena de los jugadores
     * @param monster una representación en cadena del monstruo
     * @param currentPlayer el índice del jugador actual
     * @param winner {@code true} si hay un ganador; {@code false} en caso contrario
     * @param log registro de eventos en forma de cadena
     */
    public GameState(String labyrinth, String players, String monster, int currentPlayer, boolean winner, String log) {
        this.labyrinth = labyrinth;
        this.players = players;
        this.monster = monster;
        this.currentPlayer = currentPlayer;
        this.winner = winner;
        this.log = log;
    }
    
    /**
     * Obtiene la representación actual del laberinto.
     *
     * @return el estado del laberinto en forma de cadena
     */
    public String getlabyrinth() {
        return labyrinth;
    }
    
    /**
     * Obtiene la representación de los jugadores en el juego.
     *
     * @return los jugadores en forma de cadena
     */
    public String getplayers() {
        return players; 
    }
    
    /**
     * Obtiene la representación del monstruo en el juego.
     *
     * @return el monstruo en forma de cadena
     */
    public String getmonster() {
        return monster; 
    }
    
    /**
     * Obtiene el índice del jugador actual.
     *
     * @return el índice del jugador que tiene el turno
     */
    public int getcurrentPlayer() {
        return currentPlayer; 
    }
    
    /**
     * Indica si existe un ganador en el juego.
     *
     * @return {@code true} si hay un ganador; {@code false} en caso contrario
     */
    public boolean getwinner() {
        return winner; 
    }
    
    /**
     * Obtiene el registro de eventos del juego.
     *
     * @return el registro de eventos en forma de cadena
     */
    public String getlog() {
        return log; 
    }

    /**
     * Devuelve el estado de GameState en formato string
     * @return el estado de GameState en formato string
     */
    @Override
    public String toString() {
        return "\nlabyrinth=" + labyrinth +
            "\n \nplayers=" + players +
            "\n \nmonster=" + monster +
            "\n \ncurrentPlayer=" + currentPlayer +
            "\n \nwinner=" + winner +
            "\n \nlog=" + log +
            "\n";
        }
}
