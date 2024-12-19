/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;
import java.util.ArrayList;
import java.util.Arrays;


/** 
 *
 * @author ismael
 */

/**
 * La clase {@code Game} representa el núcleo de la lógica de un juego, que incluye 
 * a los jugadores, monstruos, un laberinto y la gestión de rondas. 
 * Controla el estado actual del juego, el jugador que está en turno, 
 * y el registro de eventos.
 */
public class Game {
    
    /**
     * Número máximo de rondas que puede tener el juego.
     */
    private final int MAX_ROUNDS = 10;
    
    /**
     * Índice del jugador actual en el arreglo de jugadores.
     */
   private  int currentPlayerIndex;
    
    /**
     * Registro de los eventos que ocurren durante el juego.
     */
    private String log;
    
    /**
     * Arreglo de jugadores que participan en el juego.
     */
    private ArrayList<Player> players;
    
    /**
     * Jugador que está tomando el turno actual.
     */
    private Player currentPlayer;
    
    /**
     * Arreglo de monstruos que se encuentran en el juego.
     */
    private ArrayList<Monster> monsters;
    
    /**
     * Laberinto donde se desarrolla el juego.
     */
    private Labyrinth labyrinth;
    
    //------------VARIABLES PARA MI LABERINTO----------
    
    /**
     * Número de monstruos
     */
    private final int NUM_MONSTER = 3;
    
    /**
     * Número de obtáculos
     */
    private final int NUM_BLOCKS = 5;
    
    /**
     * Número de filas
     */
    private final int N_ROW = 7;
    
    /**
     * Número de columnas
     */
    private final int N_COL = 7;
    
    /**
     * Número de salida
     */
    private final int EXIT_ROW = 6;
    
    /**
     * Número de salida
     */
    private final int EXIT_COL = 6;
    
    /**
     * Número aleatorio para generar longitud de muro
     */
    private final int RANDOM_POS = 5;
    
    /**
     * Número aleatorio para generar la orientación
     */
    private final int RANDOM_ORIENTATION = 2;
    
    //------------VARIABLES PARA MI LABERINTO----------
    
    public Game(int nPlayers){
        // Inicializamos los vectores de jugadores y monstruos
        players=new ArrayList<>();
        monsters=new ArrayList<>();
        
        // Inicializar el índice del jugador actual y el log
        currentPlayerIndex = Dice.whoStarts(nPlayers);
        log = "Game has started.\n";

        // crear los jugadores y añadirlos al contenedor adecuado
        players = new ArrayList<>();
        for (int i = 0; i < nPlayers; i++) {
            char c = (char) ('0' + i); //asignar índice pero en formato char
            players.add(new Player(c, Dice.randomIntelligence(), Dice.randomStrength()));
        }
        
         currentPlayer = players.get(currentPlayerIndex);
         
        //Método que configura el laberinto
        configureLabyrinth();

        //Repartir jugadores por el laberinto
        labyrinth.spreadPlayers(players);
    }

    public boolean finished(){
        return labyrinth.haveAWinner();
    }

    /**
     * Genera una instancia de GameState integrando toda la información del
     * estado del juego.
     *
     * @return una instancia de GameState que representa el estado actual del juego.
     */
    public GameState getGameState(){
        String playerString = "";
        for (Player player : players) {
            playerString += player.toString() + "\n";
        }
        String monsterString = "";
        for (Monster monster : monsters) {
            monsterString += monster.toString() + "\n";
        }
        return new GameState(labyrinth.toString(), playerString,monsterString, currentPlayerIndex,finished(), log);
    }

    /**
     * Configura el laberinto añadiendo bloques de obstáculos y monstruos.
     * Los monstruos, además de en el laberinto, son guardados en el contenedor propio de esta clase para
     * este tipo de objetos.
     */
    public void configureLabyrinth(){
        // Crear el laberinto
        labyrinth  = new Labyrinth(N_ROW, N_COL, EXIT_ROW, EXIT_COL);
        // Añadir bloques de obstáculos
        for (int i = 0; i < NUM_BLOCKS; i++) { // Añadir 5 bloques como ejemplo
            int startRow = Dice.randomPos(labyrinth.getnRows()); // Genera una fila inicial aleatoria dentro del rango del laberinto
            int startCol = Dice.randomPos(labyrinth.getnCols()); // Genera una columna inicial aleatoria dentro del rango del laberinto
            int length = Dice.randomPos(RANDOM_POS) + 1; // Genera una longitud aleatoria para el bloque entre 1 y 5
            Orientation orientation = Dice.randomPos(RANDOM_ORIENTATION) == 0 ? Orientation.HORIZONTAL : Orientation.VERTICAL; // Determina aleatoriamente si el bloque será horizontal o vertical
            labyrinth.addBlock(orientation, startRow, startCol, length); // Añade el bloque al laberinto en la posición y orientación especificadas
        }

        // Crear los monstruos (añadimos 3 monstruos como ejemplo)
        for (int i = 0; i < NUM_MONSTER-1; i++) { // Iterar sobre cada monstruo en el arreglo de monstruos
            monsters.add(new Monster("Monster " + (i + 1), Dice.randomIntelligence(), Dice.randomStrength())); // Crear un monstruo con nombre y atributos aleatorios
        }
        monsters.add(new Monster("Monster 3", 30000, 30000)); // Crear un monstruo con nombre y atributos fijos

        // Añadir monstruos
        for (Monster monster : monsters) { // Itera sobre cada monstruo en el arreglo de monstruos
            int[] pos = labyrinth.randomEmptyPos(); // Encuentra una posición vacía aleatoria en el laberinto
            labyrinth.addMonster(pos[0], pos[1], monster); // Añade el monstruo al laberinto en la posición encontrada
        }
    }

    /**
     * Actualiza los dos atributos que indican el jugador (current*) con el turno pasando
     * al siguiente jugador.
     */
    public void nextPlayer(){
        currentPlayerIndex = (currentPlayerIndex + 1) % players.size();
        currentPlayer = players.get(currentPlayerIndex);
    }

    /**
     * Añade al final del atributo log (concatena cadena al final) el mensaje
     * indicando que el jugador ha ganado el combate. También añade el indicador de 
     * nueva línea al final.
     */
    public void logPlayerWon(){
        log += "Player " + currentPlayer.getNumber() + " won the combat.\n";
    }

    /**
     * Añade al final del atributo log (concatena cadena al final) el mensaje
     * indicando que el monstruo ha ganado el combate. También añade el indicador de 
     * nueva línea al final.
     */
    public void logMonsterWon(){
        log += "Monster won the combat against player " + currentPlayer.getNumber() + ".\n";
    }

    /**
     * Añade al final del atributo log (concatena cadena al final) el mensaje
     * indicando que el jugador ha resucitado. También añade el indicador de nueva línea * al final.
     */
    public void logResurrected(){
        log += "Player " + currentPlayer.getNumber() + " was resurrected.\n";
    }

    /**
     * Añade al final del atributo log (concatena cadena al final) el mensaje
     * indicando que el jugador ha perdido el turno por estar muerto. También añade el indicador de nueva línea al final.
     */
    public void logPlayerSkipTurn() {
        log += "Player " + currentPlayer.getNumber() + " skipped the turn because they are dead.\n";
    }

    /**
     * Añade al final del atributo log (concatena cadena al final) el mensaje
     * indicando que el jugador no ha seguido las instrucciones del jugador humano (no fue posible).
     * También añade el indicador de nueva línea al final.
     */
    public void logPlayerNoOrders() {
        log += "Player " + currentPlayer.getNumber() + " did not follow the human player's instructions.\n";
    }

    /**
     * Añade al final del atributo log (concatena cadena al final) el mensaje
     * indicando que el jugador se ha movido a una celda vacía o no le ha sido posible moverse.
     * También añade el indicador de nueva línea al final.
     */
    public void logNoMonster() {
        log += "Player " + currentPlayer.getNumber() + " moved to an empty cell or couldn't move.\n";
        //y cuando no se puede mover que?
    }

    /**
     * Añade al final del atributo log (concatena cadena al final) el
     * mensaje que se han producido rounds de max rondas de combate. 
     * También añade el indicador de
     * nueva línea al final.
     */
    public void logRounds(int rounds, int max) {
        log += "Rounds played: " + rounds + " out of " + max + ".\n";
    }

    /**
     * Ejecuta el siguiente paso en el juego para el jugador actual.
     * 
     * @param preferredDirection La dirección preferida en la que el jugador quiere moverse.
     * @return true si el juego ha terminado, false en caso contrario.
     */
    public boolean nextStep(Directions preferredDirection) {
        log="";
        boolean dead = currentPlayer.dead();
        System.out.print("ENTRA EN NEXTSTEP \n " );
        
        if(!dead){
            System.out.print("ENTRA EN NEXTSTEP cuando no esta muerto\n " );
            Directions direction = actualDirection(preferredDirection);
            System.out.print("direction es: " + direction.toString() + "y preferred es" + preferredDirection.toString() );
            if(direction != preferredDirection) logPlayerNoOrders();
        
            Monster monster = labyrinth.putPlayer(preferredDirection, currentPlayer);

            if(monster == null){
                logNoMonster();
            }
            else{
                GameCharacter winner = combat(monster);
                manageReward(winner);
            }
        }
        else{
            System.out.print("Quiere revivir en el else\n " );
            manageResurrection();
        }
        boolean endGame = finished();
        if(!endGame) nextPlayer();
        
        return endGame;
    }

    /**
     * Determina la dirección real en la que el jugador puede moverse en función de su dirección preferida
     * y los movimientos válidos disponibles desde su posición actual en el laberinto.
     *
     * @param preferredDirection La dirección en la que el jugador prefiere moverse.
     * @return La dirección real en la que el jugador se moverá, que puede ser la dirección preferida
     *         si es válida, o otra dirección válida si la preferida no es posible.
     */
    public Directions actualDirection(Directions preferredDirection) {
        int currentRow=currentPlayer.getRow();
        int currentCol=currentPlayer.getCol();
        ArrayList<Directions> validMoves = labyrinth.validMoves(currentRow, currentCol);
         return currentPlayer.move(preferredDirection, validMoves);
    }

    /**
     * Simula un combate entre el jugador actual y un monstruo.
     * El combate consiste en una serie de rondas de ataque y defensa hasta que uno de los participantes pierda o se alcance el número máximo de rondas.
     *
     * @param monster el monstruo contra el que luchar
     * @return el ganador del combate, ya sea GameCharacter.PLAYER o GameCharacter.MONSTER
     */
    public GameCharacter combat(Monster monster) {
        int rounds = 0;
        GameCharacter winner = GameCharacter.PLAYER;
        
        float playerAttack = currentPlayer.attack();
        boolean lose = monster.defend(playerAttack);
        
        while(!lose && rounds<MAX_ROUNDS){
            rounds++;
            
            winner = GameCharacter.MONSTER;
            
            float monsterAttack = monster.attack();
            lose = currentPlayer.defend(monsterAttack);
            
            if(!lose){
                playerAttack = currentPlayer.attack();
                winner = GameCharacter.PLAYER;
                lose = monster.defend(playerAttack);
            }
        }
        logRounds(rounds,MAX_ROUNDS);
        
        return winner;
    }

    /**
     * Gestiona la distribución de recompensas según el personaje del juego que ganó.
     * Si el jugador gana, recibe una recompensa y se crea una entrada en el registro para la victoria del jugador.
     * Si el monstruo gana, se crea una entrada en el registro para la victoria del monstruo.
     *
     * @param winner el personaje del juego que ganó, ya sea GameCharacter.PLAYER u otro personaje.
     */
    public void manageReward(GameCharacter winner) {
        if(winner==GameCharacter.PLAYER){
            currentPlayer.receiveReward();
            logPlayerWon();
        }
        else{
            logMonsterWon();
        }
        
    }

    /**
     * Gestiona el proceso de resurrección para el jugador actual.
     * Si el jugador es resucitado, llama al método resurrect en el jugador actual
     * y registra el evento de resurrección. Si el jugador no es resucitado, 
     * registra que el jugador perderá su turno.
     */
    public void manageResurrection() {
        boolean resurrect = Dice.resurrectPlayer();
        if(resurrect){
            currentPlayer.resurrect();
            logResurrected();
            
            //añadir la funcionalidad del fuzzyplayer
            PlayerTypes p = Dice.fuzzyORsuper();
            if(p==PlayerTypes.FUZZY){
                FuzzyPlayer fuzzyPlayer = new FuzzyPlayer(currentPlayer);
                players.set(currentPlayerIndex, fuzzyPlayer);
                labyrinth.PlayerTOfuzzyPlayer(fuzzyPlayer);
                System.out.print("Ha cambiado la posiicion exitosamente \n");
            }
            else{
                SuperPlayer superPlayer = new SuperPlayer(currentPlayer);
                players.set(currentPlayerIndex, superPlayer);
                labyrinth.PlayerTOsuperPlayer(superPlayer);
            }
        }
        else{
            logPlayerSkipTurn();
        }
    }

    /**
     * Función que me pinta el laberinto que tengo de la mejor manera posible
     */
    public void printLabyrinth(){
        System.out.println("\n Laberinto: \n");
        for(int i = 0; i <labyrinth.getnRows(); i++){
            for(int j = 0; j <labyrinth.getnCols(); j++){
                System.out.print("[ "+labyrinth.getLabyrinth(i, j)+" ]  ");
            }
            System.out.print("\n");
        }
    }

}





