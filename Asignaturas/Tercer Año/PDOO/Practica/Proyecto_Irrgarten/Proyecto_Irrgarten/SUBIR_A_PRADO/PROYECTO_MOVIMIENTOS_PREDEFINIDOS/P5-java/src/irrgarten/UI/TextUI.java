
package irrgarten.UI;

import irrgarten.Directions;
import irrgarten.GameState;
import java.util.Scanner;


public class TextUI {
    
    private static Scanner in = new Scanner(System.in);
    
    private char readChar() {
        String s = in.nextLine();     
        return s.charAt(0);
    }
    

    public Directions nextMove() {
        System.out.print("Where? ");
        
        Directions direction = Directions.DOWN;
        boolean gotInput = false;
        
        while (!gotInput) {
            char c = readChar();
            switch(c) {
                case 'w':
                    System.out.print(" UP\n");
                    direction = Directions.UP;
                    gotInput = true;
                    break;
                case 's':
                    System.out.print(" DOWN\n");
                    direction = Directions.DOWN;
                    gotInput = true;
                    break;
                case 'd':
                    System.out.print("RIGHT\n");
                    direction = Directions.RIGHT;
                    gotInput = true;
                    break;
                case 'a':
                    System.out.print(" LEFT\n");
                    direction = Directions.LEFT;
                    gotInput = true;    
                    break;
            }
        }    
        return direction;
    }
    
    
    
    public void showGame(GameState gameState) {   
        System.out.println(gameState.toString());
    }
    
}

/*

-------ANOTACIONES------------

- para que vaya en una sola direccion basta con devolver esa direccion y comentar el resto

- Para que se mueva 3 veces hacia la derecha y otras tres veces hacia la izquierda, hacemos esto:
    private int moveCounter = 0;

    public Directions nextMove() {
        Directions direction;
        if (moveCounter < 3) {
            direction = Directions.RIGHT;
            System.out.print("Moving RIGHT\n");
        } else if (moveCounter < 6) {
            direction = Directions.LEFT;
            System.out.print("Moving LEFT\n");
        } else {
            moveCounter = -1; // Reinicia el ciclo
            direction = Directions.RIGHT;
            System.out.print("Restarting pattern. Moving RIGHT\n");
        }
        moveCounter++;
        return direction;
    }

- Movimiento en expiral:
private int moveCounter = 0;

    public Directions nextMove() {
        Directions direction;
        switch (moveCounter % 4) {
            case 0:
                direction = Directions.RIGHT;
                System.out.print("Moving RIGHT\n");
                break;
            case 1:
                direction = Directions.DOWN;
                System.out.print("Moving DOWN\n");
                break;
            case 2:
                direction = Directions.LEFT;
                System.out.print("Moving LEFT\n");
                break;
            default:
                direction = Directions.UP;
                System.out.print("Moving UP\n");
                break;
        }
        moveCounter++;
        return direction;
    }

- Movimientos aleatorios:
     private Random random = new Random();

    public Directions nextMove() {
        Directions[] allDirections = Directions.values();
        Directions randomDirection = allDirections[random.nextInt(allDirections.length)];
        System.out.print("Moving " + randomDirection + "\n");
        return randomDirection;
    }




---------------CON PATRON INCIAL Y LUEGO SE SIGUE-----------

package irrgarten.UI;

import irrgarten.Directions;
import irrgarten.GameState;
import java.util.Scanner;

public class TextUI {
    
    private static Scanner in = new Scanner(System.in);
    private String pattern = "wsda"; // Patrón por defecto
    private int index = 0;

    public TextUI() {
        System.out.print("Enter a pattern of movements (w, s, d, a): ");
        String input = in.nextLine();
        if (!input.isEmpty()) {
            pattern = input;
        }
    }

    public Directions nextMove() {
        char c = pattern.charAt(index % pattern.length());
        Directions direction;
        switch (c) {
            case 'w':
                direction = Directions.UP;
                System.out.print("Moving UP\n");
                break;
            case 's':
                direction = Directions.DOWN;
                System.out.print("Moving DOWN\n");
                break;
            case 'd':
                direction = Directions.RIGHT;
                System.out.print("Moving RIGHT\n");
                break;
            case 'a':
                direction = Directions.LEFT;
                System.out.print("Moving LEFT\n");
                break;
            default:
                direction = Directions.DOWN; // Movimiento por defecto
                System.out.print("Invalid character in pattern. Moving DOWN\n");
        }
        index++;
        return direction;
    }

    public void showGame(GameState gameState) {
        System.out.println(gameState.toString());
    }
}







*/
