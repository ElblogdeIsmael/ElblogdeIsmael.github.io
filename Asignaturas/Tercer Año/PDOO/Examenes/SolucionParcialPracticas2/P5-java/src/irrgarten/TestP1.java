/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package irrgarten;

//import irrgarten.Dice;

/*podemos usar import cuando se trate de elementos de otro paquete*/
/**
 *
 * @author ismael
 */
public class TestP1 {
    public static void main(String[] args) {
        //------------------------------------------------------------------------------------
        //Crea varias instancias de cada clase creada en esta práctica y utiliza todos sus métodos.
        //------------------------------------------------------------------------------------
        
        // clase Dice
        //--------------------------------

        //Dice Dice = new Dice();
        //Dice Dice = new Dice();
        /*Es mejor hacer Nombre_clase.metodo a la hora de llamar a un método*/

        //randomPos
        int n1=Dice.randomPos(5);
        System.out.println("Random Pos: "+n1);
        int n2=Dice.randomPos(1);
        System.out.println("Random Pos: "+n2);

        //whoStarts
        int w1=Dice.whoStarts(100);
        int w2=Dice.whoStarts(2);
        System.out.println("Who starts: "+w1);
        System.out.println("Who starts: "+w2);

        //randomIntelligence
        System.out.println("Intelligence: "+Dice.randomIntelligence());
        System.out.println("Intelligence: "+Dice.randomIntelligence());

        //resurrectPlayer

        System.out.println("Resurrected: "+Dice.resurrectPlayer());
        System.out.println("Resurrected: "+Dice.resurrectPlayer());

        //weapons rewards
        System.out.println("Dice 1 weapons reward: "+Dice.weaponsReward());
        System.out.println("Dice 2 weapons reward: "+Dice.weaponsReward());

        //shield rewards
        System.out.println("Dice 1 shield reward: "+Dice.shieldsReward());
        System.out.println("Dice 2 shield reward: "+Dice.shieldsReward());

        //health rewards

        System.out.println("Dice 1 health reward: "+Dice.healthReward());
        System.out.println("Dice 2 health reward: "+Dice.healthReward());

        //weapon power
        System.out.println("Dice 1 weapon power: "+Dice.weaponPower());
        System.out.println("Dice 2 weapon power: "+Dice.weaponPower());

        //shield power
        System.out.println("Dice 1 shield power: "+Dice.shieldPower());
        System.out.println("Dice 2 shield power: "+Dice.shieldPower());

        //uses left
        System.out.println("Dice 1 uses left: "+Dice.usesLeft());
        System.out.println("Dice 2 uses left: "+Dice.usesLeft());

        //intensity
        System.out.println("Dice 1 intensity: "+Dice.intensity(6));
        System.out.println("Dice 2 intensity: "+Dice.intensity(100));

        //discard element
        System.out.println("Dice 1 discard element: "+Dice.discardElement(10));
        System.out.println("Dice 2 discard element: "+Dice.discardElement(6));
         
        //--------------------------------

        // clase Shield
        //--------------------------------

        Shield shield1 = new Shield(1.5f, 3);
        Shield shield2 = new Shield(2.5f, 2);

        //protect
        System.out.println("Shield 1 protect: "+shield1.protect());
        System.out.println("Shield 2 protect: "+shield2.protect());

        //toString
        System.out.println("Shield 1: "+shield1.toString());
        System.out.println("Shield 2: "+shield2.toString());

        //discard
        System.out.println("Shield 1 discard: "+shield1.discard());
        System.out.println("Shield 2 discard: "+shield2.discard());

        //--------------------------------

        // clase Weapon
        //--------------------------------

        Weapon weapon1 = new Weapon(2.5f, 3);
        Weapon weapon2 = new Weapon(3.5f, 2);

        //attack
        System.out.println("Weapon 1 attack: "+weapon1.attack());
        System.out.println("Weapon 2 attack: "+weapon2.attack());

        //toString
        System.out.println("Weapon 1: "+weapon1.toString());
        System.out.println("Weapon 2: "+weapon2.toString());

        //discard
        System.out.println("Weapon 1 discard: "+weapon1.discard());
        System.out.println("Weapon 2 discard: "+weapon2.discard());

        //--------------------------------

        //clase GameState

        GameState gameState1 = new GameState("labyrinth-FIrst", "players", "monster", 1, true, "log-game1");
        GameState gameState2 = new GameState("labyrinth2", "players2", "monster2", 2, false, "log2-game2");

        //getlabyrinth
        System.out.println("Game state 1 labyrinth: "+gameState1.getlabyrinth());
        System.out.println("Game state 2 labyrinth: "+gameState2.getlabyrinth());

        //getplayers
        System.out.println("Game state 1 players: "+gameState1.getplayers());
        System.out.println("Game state 2 players: "+gameState2.getplayers());

        //getmonster
        System.out.println("Game state 1 monster: "+gameState1.getmonster());
        System.out.println("Game state 2 monster: "+gameState2.getmonster());

        //getcurrentPlayer
        System.out.println("Game state 1 current player: "+gameState1.getcurrentPlayer());
        System.out.println("Game state 2 current player: "+gameState2.getcurrentPlayer());

        //getwinner
        System.out.println("Game state 1 winner: "+gameState1.getwinner());
        System.out.println("Game state 2 winner: "+gameState2.getwinner());

        //getlog
        System.out.println("Game state 1 log: "+gameState1.getlog());
        System.out.println("Game state 2 log: "+gameState2.getlog());


        //--------------------------------
        
        //------------------------------------------------------------------------------------
        // Prueba a utilizar los valores de los tipos enumerados creados.
        //------------------------------------------------------------------------------------
        
        //enum Orientation

        Orientation orientation1=Orientation.VERTICAL;
        Orientation orientation2=Orientation.HORIZONTAL;

        System.out.println("Orientation 1: "+orientation1);
        System.out.println("Orientation 2: "+orientation2);

        //enum Direction

        Directions direction1=Directions.LEFT;
        Directions direction2=Directions.RIGHT;
        Directions direction3=Directions.UP;
        Directions direction4=Directions.DOWN;

        System.out.println("Direction 1: "+direction1);
        System.out.println("Direction 2: "+direction2);
        System.out.println("Direction 3: "+direction3);
        System.out.println("Direction 4: "+direction4);

        //enum Game Character

        GameCharacter gameCharacter1=GameCharacter.MONSTER;
        GameCharacter gameCharacter2=GameCharacter.PLAYER;

        System.out.println("Game Character 1: "+gameCharacter1);
        System.out.println("Game Character 2: "+gameCharacter2);
        
        
        //Prueba la clase Dice: llama a cada método 100 veces y comprueba si se cumplen a nivel
        //práctico las instrucciones relativas a las probabilidades de cada evento.
        
        // randomPos

        for (int i = 0; i < 100; i++) {
            System.out.println("Random Pos: "+Dice.randomPos(5));
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //whoStarts
        for (int i = 0; i < 100; i++) {
            System.out.println("Who starts: "+Dice.whoStarts(100));
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //randomIntelligence
        for (int i = 0; i < 100; i++) {
            System.out.println("Intelligence: "+Dice.randomIntelligence());
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //resurrectPlayer
        for (int i = 0; i < 100; i++) {
            System.out.println("Resurrected: "+Dice.resurrectPlayer());
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //weapons rewards
        for (int i = 0; i < 100; i++) {
            System.out.println("Dice 1 weapons reward: "+Dice.weaponsReward());
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //shield rewards
        for (int i = 0; i < 100; i++) {
            System.out.println("Dice 1 shield reward: "+Dice.shieldsReward());
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //health rewards
        for (int i = 0; i < 100; i++) {
            System.out.println("Dice 1 health reward: "+Dice.healthReward());
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //weapon power

        for (int i = 0; i < 100; i++) {
            System.out.println("Dice 1 weapon power: "+Dice.weaponPower());
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //shield power
        for (int i = 0; i < 100; i++) {
            System.out.println("Dice 1 shield power: "+Dice.shieldPower());
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //uses left
        for (int i = 0; i < 100; i++) {
            System.out.println("Dice 1 uses left: "+Dice.usesLeft());
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //intensity
        for (int i = 0; i < 100; i++) {
            System.out.println("Dice 1 intensity: "+Dice.intensity(6));
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }

        //discard element

        for (int i = 0; i < 100; i++) {
            System.out.println("Dice 1 discard element: "+Dice.discardElement(i%5)+"\nEstamos en la iteracion " + i +".");//trabajamos siempre en Z5
            if(i==99){
                System.out.println("Se ha ejecutado 100 veces");
            }
        }
        
        
        
        


    }
}
