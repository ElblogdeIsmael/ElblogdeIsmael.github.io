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
 * La clase {@code Labyrinth} representa un laberinto en el que se ubican jugadores y monstruos,
 * y donde los jugadores pueden moverse, combatir, y buscar la salida.
 * Proporciona funcionalidades para agregar monstruos, bloquear posiciones, y verificar 
 * la validez de movimientos en el laberinto.
 * 
 * <p>Contiene constantes para representar tipos de posiciones en el laberinto, 
 * así como métodos para gestionar y verificar el estado del laberinto.</p>
 * 
 * @author ismael
 */
public class Labyrinth {
    
    /**
     * Carácter que representa un bloque en el laberinto.
     */
    private static final char BLOCK_CHAR = 'X';
    
    /**
     * Carácter que representa una posición vacía en el laberinto.
     */
    private static final char EMPTY_CHAR = '-';
    
    /**
     * Carácter que representa la posición de un monstruo en el laberinto.
     */
    private static final char MONSTER_CHAR = 'M';
    
    /**
     * Carácter que representa una posición de combate en el laberinto.
     */
    private static final char COMBAT_CHAR = 'C';
    
    /**
     * Carácter que representa la salida del laberinto.
     */
    private static final char EXIT_CHAR = 'E';
    
    /**
     * Constante que indica el índice de la fila.
     */
    private static final int ROW = 0;
    
    /**
     * Constante que indica el índice de la columna.
     */
    private static final int COL = 1;
    
    /**
     * Constante que indica una posición inválida
     */
    private static final int INVALID_POS=-1;
    
    /**
     * Número de filas del laberinto.
     */
    private int nRows;
    /**
     * Número de columnas del laberinto.
     */
    private int nCols;
    
    /**
     * Fila de la casilla de salida.
     */
    private int exitRow;
    /**
     * Columna de la casilla de salida.
     */
    private int exitCol;
    
    /**
     * Matriz que representa el laberinto con los diferentes tipos de posiciones.
     */
    private char [][] labyrinth;
    
    /**
     * Matriz que contiene los monstruos ubicados en el laberinto.
     */
    private Monster [][] monsters;
    
    /**
     * Matriz que contiene los jugadores ubicados en el laberinto.
     */
    private Player [][] players;
    
    /**
     * Crea una nueva instancia de {@code Labyrinth} con las dimensiones y la posición de salida especificadas.
     *
     * @param nRows número de filas del laberinto
     * @param nCols número de columnas del laberinto
     * @param exitRow fila de la posición de salida
     * @param exitCol columna de la posición de salida
     */
    public Labyrinth(int nRows, int nCols, int exitRow, int exitCol) {
        //incializamos las variables privadas
        this.nRows = nRows;
        this.nCols = nCols;
        this.exitRow = exitRow;
        this.exitCol = exitCol;
        
        //definimos el laberinto
        labyrinth = new char[nRows][nCols];
        for(int i=0;i<nRows;i++){ //inicializamos la matriz
            for(int j=0;j<nCols;j++){
                labyrinth[i][j]=EMPTY_CHAR; //inicializamos todas las casillas como casillas vacias
            }
        }
        labyrinth[exitRow][exitCol]=EXIT_CHAR; //casilla de salida
        
        //inicializamos las matrices de jugadores y de monstruos
        monsters = new Monster[nRows][nCols];
        players = new Player[nRows][nCols];
    }

    // Getters y Setters

    /**
     * Obtiene el número de filas del laberinto.
     *
     * @return el número de filas
     */
    public int getnRows() {
        return nRows;
    }

    /**
     * Establece el número de filas del laberinto.
     *
     * @param nRows el número de filas
     */
    public void setnRows(int nRows) {
        this.nRows = nRows;
    }

    /**
     * Obtiene el número de columnas del laberinto.
     *
     * @return el número de columnas
     */
    public int getnCols() {
        return nCols;
    }
    
    /**
     * Establece el número de columnas del laberinto.
     *
     * @param nCols el número de columnas
     */
    public void setnCols(int nCols) {
        this.nCols = nCols;
    }
    

    //getters en funcion de row y col de players, monsters y labyrinth
    /**
     * Obtiene el carácter en la posición especificada del laberinto.
     *
     * @param row la fila de la posición
     * @param col la columna de la posición
     * @return el carácter en la posición especificada
     */
    public char getLabyrinth(int row, int col) {
        return labyrinth[row][col];
    }

    /**
     * Obtiene el monstruo en la posición especificada del laberinto.
     *
     * @param row la fila de la posición
     * @param col la columna de la posición
     * @return el monstruo en la posición especificada, o {@code null} si no hay monstruo
     */
    public Monster getMonster(int row, int col) {
        return monsters[row][col];
    }

    /**
     * Obtiene el jugador en la posición especificada del laberinto.
     *
     * @param row la fila de la posición
     * @param col la columna de la posición
     * @return el jugador en la posición especificada, o {@code null} si no hay jugador
     */
    public Player getPlayer(int row, int col) {
        return players[row][col];
    }

    /**
     * Distribuye los jugadores en el laberinto.
     *
     * @param players arreglo de jugadores a ubicar en el laberinto
     */
    public void spreadPlayers(ArrayList<Player>players) {
        for(int i=0;i<players.size();i++){
            int [] pos = randomEmptyPos(); // calculamos una posicion vacia para colocar el jugador
            //System.out.println("La posicion random generada es: " + pos[0] + pos[1] + "n");
            putPlayer2D(INVALID_POS, INVALID_POS, pos[ROW], pos[COL], players.get(i)); // colocamos el jugador
        }
    }

    /**
     * Verifica si algún jugador ha alcanzado la salida, indicando que hay un ganador.
     *
     * @return {@code true} si hay un jugador en la salida; {@code false} de lo contrario
     */
    public boolean haveAWinner() {
        return players[exitRow][exitCol] != null;
    }

    /**
     * Devuelve una representación en cadena del estado del laberinto.
     * NOTA: he añadido que me represente el laberinto en la salida
     *
     * @return una cadena que incluye las dimensiones y la posición de salida del laberinto
     */
    @Override
    public String toString() {
        //añado a la salida
        String s =  "nRows: " + nRows + " nCols: " + nCols + " exitRow: " + exitRow + " exitCol: " + exitCol;
        s+="\n Laberinto: \n";
        for(int i = 0; i <getnRows(); i++){
            for(int j = 0; j <getnCols(); j++){
                s += "[ "+getLabyrinth(i, j)+" ]  ";
            }
            s += "\n";
        }
        s += "\n";
        return s;
    }

    /**
     * Agrega un monstruo en la posición especificada si está vacía.
     *
     * @param row la fila en la que se ubicará el monstruo
     * @param col la columna en la que se ubicará el monstruo
     * @param monster el monstruo a agregar
     */
    public void addMonster(int row, int col, Monster monster) {
        if (emptyPos(row,col)) {
            labyrinth[row][col] = MONSTER_CHAR;
            monster.setPos(row, col);
            monsters[row][col]=monster;
        }
    }
    
    /**
     * Verifica si una posición en el laberinto es válida.
     *
     * @param row la fila de la posición
     * @param col la columna de la posición
     * @return {@code true} si la posición es válida; {@code false} de lo contrario
     */
    private boolean posOK(int row, int col) {
        return row >= 0 && row < nRows && col >= 0 && col < nCols;
    }

    /**
     * Verifica si una posición está vacía.
     *
     * @param row la fila de la posición
     * @param col la columna de la posición
     * @return {@code true} si la posición está vacía; {@code false} de lo contrario
     */
    private boolean emptyPos(int row, int col) { 
        return labyrinth[row][col] == EMPTY_CHAR;
    }

    /**
     * Verifica si hay un monstruo en la posición especificada.
     *
     * @param row la fila de la posición
     * @param col la columna de la posición
     * @return {@code true} si la posición contiene un monstruo; {@code false} de lo contrario
     */
    private boolean monsterPos(int row, int col) {
        return labyrinth[row][col] == MONSTER_CHAR;
    }

    /**
     * Verifica si la posición especificada es la salida del laberinto.
     *
     * @param row la fila de la posición
     * @param col la columna de la posición
     * @return {@code true} si la posición es la salida; {@code false} de lo contrario
     */
    private boolean exitPos(int row, int col) {
        //return posOK(row, col) && labyrinth[row][col]==EXIT_CHAR;
        return labyrinth[row][col] == EXIT_CHAR;
    }

    /**
     * Verifica si una posición es una posición de combate.
     *
     * @param row la fila de la posición
     * @param col la columna de la posición
     * @return {@code true} si la posición es de combate; {@code false} de lo contrario
     */
    private boolean combatPos(int row, int col) {
        //return posOK(row, col) && labyrinth[row][col]==COMBAT_CHAR;
        return labyrinth[row][col] == COMBAT_CHAR;
    }

    /**
     * Verifica si es posible moverse a una posición específica.
     *
     * @param row la fila de la posición
     * @param col la columna de la posición
     * @return {@code true} si la posición es válida y se puede pisar; {@code false} de lo contrario
     */
    private boolean canStepOn(int row, int col) {
        return posOK(row, col) && (emptyPos(row, col) || monsterPos(row, col) || exitPos(row, col));
    }

    /**
     * Actualiza la posición anterior de un jugador en el laberinto.
     *
     * @param row la fila de la posición anterior
     * @param col la columna de la posición anterior
     */
    private void updateOldPos(int row, int col) {
        if (posOK(row, col)) {
            labyrinth[row][col] = (combatPos(row, col)) ? MONSTER_CHAR : EMPTY_CHAR;
            players[row][col] = null;
        }
    }
    
    /**
     * Ajusta la posición (fila, columna) basada en la dirección dada.
     *
     * @param row       la posición actual de la fila
     * @param col       la posición actual de la columna
     * @param direction la dirección en la que se desea mover ("UP", "DOWN", "RIGHT", "LEFT")
     * @return un arreglo de enteros donde el primer elemento es la nueva posición de la fila
     *         y el segundo elemento es la nueva posición de la columna
     */
    private int[] dir2Pos(int row, int col, Directions direction) {
        int[] pos = new int[2];
        pos[COL] = col;
        pos[ROW] = row;
        switch (direction) {
            case UP:
                pos[ROW]--;
                break;
            case DOWN:
                pos[ROW]++;
                break;
            case RIGHT:
                pos[COL]++;
                break;
            case LEFT:
                pos[COL]--;
                break;
        }
        return pos;
    }

        
    /**
     * Devuelve una posición aleatoria en el laberinto que esté vacía.
     *
     * @return un arreglo de enteros que representa la posición vacía [fila, columna]
     */
    private int[] randomEmptyPos() {
        int[] pos = new int[2];
        do{
            pos[ROW] = Dice.randomPos(nRows);
            pos[COL] = Dice.randomPos(nCols);
        }while (!emptyPos(pos[0], pos[1]));
        return pos;
    }

    /**
     * Mueve al jugador especificado a una nueva posición en el laberinto.
     *
     * @param oldRow la antigua posición de fila del jugador
     * @param oldCol la antigua posición de columna del jugador
     * @param row la nueva posición de fila a la que se moverá el jugador
     * @param col la nueva posición de columna a la que se moverá el jugador
     * @param player el jugador que será movido
     * @return el monstruo en la nueva posición si hay uno, de lo contrario null
     */
    private Monster putPlayer2D(int oldRow, int oldCol, int row, int col, Player player) {
        Monster output = null;
        if(canStepOn(row,col)){
            if(posOK(oldRow,oldCol)){
                Player p = players[oldRow][oldCol];
                if(p==player){
                    updateOldPos(oldRow,oldCol);
                    players[oldRow][oldCol]=null;
                }
            }
            boolean monster_Pos=monsterPos(row,col);
            
            if(monster_Pos){
                labyrinth[row][col] = COMBAT_CHAR;
                output = monsters[row][col];
            }
            else{
                char number = player.getNumber(); 
                labyrinth[row][col] = number;
            }
            players[row][col]=player;
            player.setPos(row, col);
            
        }
        return output;
    }

    /**
     * Mueve al jugador en la dirección especificada y lo coloca en la nueva posición.
     * 
     * @param direction La dirección en la que el jugador debe moverse.
     * @param player El jugador que se va a mover.
     * @return El monstruo encontrado en la nueva posición, si lo hay.
     */
    public Monster putPlayer(Directions direction, Player player) {
        int oldRow = player.getRow(); 
        int oldCol = player.getCol();
        
        int[] newPos = dir2Pos(oldRow, oldCol, direction);
        Monster monster = putPlayer2D(oldRow, oldCol, newPos[ROW],newPos[COL],player);
        return monster;
    }
    
    /**
     * Añade un bloque al laberinto en la orientación especificada, comenzando desde una posición inicial y extendiéndose por una longitud dada.
     *
     * @param orientation La orientación del bloque, puede ser VERTICAL u HORIZONTAL.
     * @param startRow La fila inicial desde donde comenzará el bloque.
     * @param startCol La columna inicial desde donde comenzará el bloque.
     * @param length La longitud del bloque a añadir.
     */
    public void addBlock(Orientation orientation, int startRow, int startCol, int length) {
        int incRow, incCol;
        if(orientation==Orientation.VERTICAL){
            incRow=1;
            incCol=0;
        }
        else{
            incRow=0;
            incCol=1;
        }
        int row=startRow;
        int col=startCol;
        
        while((posOK(row,col)) && emptyPos(row,col) && (length>0)){
            labyrinth[row][col] = BLOCK_CHAR;
            length -=1;
            row+=incRow;
            col+=incCol;
        }
        
    }
    
    /**
     * Determina los movimientos que son posibles desde la casilla pasada como parámetro.
     * @param row fila de la casilla
     * @param col columna de la casilla
     * @return un arreglo de direcciones que representan los movimientos posibles desde la casilla
     */
    public ArrayList<Directions> validMoves(int row, int col) {
        ArrayList<Directions> validMoves = new ArrayList<>();
        if (canStepOn(row + 1, col)) {
            validMoves.add(Directions.DOWN);
        }
        if (canStepOn(row - 1, col)) {
            validMoves.add(Directions.UP);
        }
        if (canStepOn(row, col + 1)) {
            validMoves.add(Directions.RIGHT);
        }
        if (canStepOn(row, col- 1)) {
            validMoves.add(Directions.LEFT);
        }

        return validMoves;
    }
    
    
    /**
     * Funcion para convertir un player normal a fuzzy
     * @param other se trata del otro fuzzyPlayer
     */
    public void PlayerTOfuzzyPlayer(FuzzyPlayer other){
        int row = other.getRow();
        int col = other.getCol();
        if(players[row][col].getNumber() == other.getNumber()){
            players[row][col]=other;
        }
    }
}
