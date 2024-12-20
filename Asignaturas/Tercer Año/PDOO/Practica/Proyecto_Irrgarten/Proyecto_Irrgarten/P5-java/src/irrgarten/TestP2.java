// /*
//  * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
//  * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
//  */
// package irrgarten;

// /**
//  *
//  * @author ismael
//  */
// public class TestP2 {
//     //pruebas de las funciones de la clase Monster
//     //-------------------------------------------------------------------------------
//     public static void main(String[] args) {
//         Monster monster1 = new Monster("m1",0.5f,20f);
//         Monster monster2 = new Monster("m2", 0.2f,15f);

//         //pintar por pantalla el string de cada monster
//         System.out.println("Monster 1: " + monster1.toString());
//         System.out.println("Monster 2: " + monster2.toString());

//         //comprobamos la funcion de dead
//         System.out.println("Monster 1 dead: " + monster1.dead());
        
//         //disminuimos la vida
//         monster1.gotWounded();
//         monster1.gotWounded();
//         monster1.gotWounded();
//         monster1.gotWounded();
//         monster1.gotWounded();

//         //comprobamos si la funcion de dead ha decrementado
//         System.out.println("Monster 1 dead: " + monster1.dead()); 
        
//         //comprobamos la funcion de setPos
//         monster1.setPos(10, 15);
//         System.out.println("Monster 1 pos: (" + monster1.getRow() + ", " + monster1.getCol()+ ")");
//         //-------------------------------------------------------------------------------
        
//         //pruebas de la clase Player
        
//         Player p1 = new Player('1', 0.5f, 20f);

//         //pintar por pantalla el string de player
//         System.out.println(p1.toString());

//         //comprobamos la funcion resurrect
//         p1.gotWounded();
//         Shield s=p1.newShield();
//         Weapon w=p1.newWeapon();
//         //imprimimos los valores de shield y weapon
//         System.out.println("Shield: "+s.toString());
//         System.out.println("Weapon: "+w.toString());
//         p1.incConsecutiveHits();
//         p1.incConsecutiveHits();
//         p1.incConsecutiveHits();

//         System.out.println("Despues de las modificaciones: \n" + p1.toString());

//         //despues de resucitar
//         p1.resurrect();
//         System.out.println("Despues de resucitar: \n" + p1.toString());

//         p1.setPos(3, 4);
//         System.out.println("Tras añadir la pos (3,4)" + p1.toString());

//         //comprobamos la funcion de dead
//         System.out.println("Player 1 dead: " + p1.dead());

//         //matamos a player
//         p1.gotWounded();
//         p1.gotWounded();
//         p1.gotWounded();
//         p1.gotWounded();
//         p1.gotWounded();
//         p1.gotWounded();
//         p1.gotWounded();
//         p1.gotWounded();
//         p1.gotWounded();
//         p1.gotWounded();

//         System.out.println("Player 1 dead (después de matarlo): " + p1.dead());

//         //comprobamos la función de attack
//         System.out.println("Player 1 attack: " + p1.attack());

//         //comprobamos la función de defend, manageHit no esta implementado
//         //System.out.println("Player 1 defend: " + p1.defend(5f));

//         //comprobamos las funciones de newShield y newWeapon
//         System.out.println("Player 1 newShield: " + p1.newShield().toString());
//         System.out.println("Player 1 newWeapon: " + p1.newWeapon().toString());

//         //comprobamos la función de defensiveEnergy
//         System.out.println("Player 1 defensiveEnergy: " + p1.defensiveEnergy());

//         //comprobamos la función de resetHits
//         System.out.println("Player 1 resetHits: " + p1.toString());

//         p1.incConsecutiveHits();
//         p1.incConsecutiveHits();
//         p1.incConsecutiveHits();

//         System.out.println("Player 1 incConsecutiveHits, después de incrementarlo: " + p1.toString());

//         //comprobamos la función de sumWeapons, para ello antes añadimos uan serie de armas
//         Weapon arma1 = p1.newWeapon();
//         System.out.println("Weapon: "+arma1.toString());
//         p1.addWeapon(arma1);

//         arma1 = p1.newWeapon();
//         System.out.println("Weapon: "+arma1.toString());
//         p1.addWeapon(arma1);

//         arma1 = p1.newWeapon();
//         System.out.println("Weapon: "+arma1.toString());
//         p1.addWeapon(arma1);

//         System.out.println("Player 1 sumWeapons (tras añadir 3 armas): " + p1.sumWeapons());

//         //comprobamos la función de sumShields, para ello antes añadimos una serie de escudos
//         Shield s1 = p1.newShield();
//         System.out.println("Shield: "+s1.toString());
//         p1.addShield(s1);

//         s1 = p1.newShield();
//         System.out.println("Shield: "+s1.toString());
//         p1.addShield(s1);

//         s1 = p1.newShield();
//         System.out.println("Shield: "+s1.toString());
//         p1.addShield(s1);

//         System.out.println("Player 1 sumShields (tras añadir 3 escudos): " + p1.sumShields());

//         //--------------------------------------------------------------------------------


//         //vamos a probar la clase Labyrinth

//         Labyrinth laberinto= new Labyrinth(10, 10, 9, 9);

//         //probamos el haveawinner
//         System.out.println("Laberinto haveawinner: " + laberinto.haveAWinner());

//         //añadimos un jugador
//         Player p2 = new Player('2', 0.5f, 20f);
//         laberinto.addPlayer(9, 9, p2);
//         laberinto.showMonstersAndPlayers();

//         //mostramos de nuevo el haveawinner
//         System.out.println("Laberinto haveawinner (despues de añadir a un jugador en la salida): " + laberinto.haveAWinner());
        
//         //comprobamos la función de toString
//         System.out.println("Laberinto toString: " + laberinto.toString());

//         //comprobamos la función de addMonster
//         Monster m1 = new Monster("m1", 0.5f, 20f);
//         laberinto.addMonster(0, 0, m1);
//         System.out.println("Laberinto toString (tras añadir un monstruo): ");
//         laberinto.showMonstersAndPlayers();

//         //comprobamos la función de posOK
//         System.out.println("\nProbando la función de posOK \n\n");
//         System.out.println("Laberinto posOK (10,10): " + laberinto.posOK(10, 10));
//         System.out.println("Laberinto posOK (9,9): " + laberinto.posOK(9, 9));

//         //comprobamos la función de emptyPos
//         System.out.println("\nProbando la función de emptyPos \n\n");
//         System.out.println("Laberinto emptyPos (9,9): " + laberinto.emptyPos(9, 9));
//         System.out.println("Laberinto emptyPos (3,3): " + laberinto.emptyPos(3,3));

//         //comprobamos la función de monsterPos
//         System.out.println("\nProbando la función de monsterPos \n\n");
//         System.out.println("Laberinto monsterPos (0,0): " + laberinto.monsterPos(0, 0));
//         System.out.println("Laberinto monsterPos (9,9): " + laberinto.monsterPos(9, 9));

//         //comprobamos la función de exitPos
//         System.out.println("\nProbando la función de exitPos \n\n");
//         System.out.println("Laberinto exitPos (9,9): " + laberinto.exitPos(9, 9));
//         System.out.println("Laberinto exitPos (3,3): " + laberinto.exitPos(3,3));

//         //comprobamos la función de canStepOn
//         System.out.println("\nProbando la función de canStepOn \n\n");
//         System.out.println("Laberinto canStepOn (9,9): " + laberinto.canStepOn(9, 9));
//         System.out.println("Laberinto canStepOn (0,0): " + laberinto.canStepOn(0, 0));
//         System.out.println("Laberinto canStepOn (4,4): " + laberinto.canStepOn(4, 4));
//         System.out.println("Laberinto canStepOn (10,10): " + laberinto.canStepOn(10, 10));
        
//         System.out.println("\nProbando la función de updateOldPos \n\n");
//         //comprobamos la función de updateOldPos
//         laberinto.updateOldPos(9, 9);
//         System.out.println("Laberinto updateOldPos (9,9): ");
//         laberinto.showMonstersAndPlayers();

//         laberinto.updateOldPos(0, 0);
//         System.out.println("Laberinto updateOldPos (0,0): ");
//         laberinto.showMonstersAndPlayers();

//         //añadimos una casilla de combate para comprobar ese caso
//         laberinto.addCombat(5, 5);
//         System.out.println("Laberinto addCombat (5,5): ");
//         laberinto.showCombat();
//         laberinto.updateOldPos(5, 5);
//         laberinto.showMonstersAndPlayers();
//         laberinto.showCombat();

//         //comprobamos la función de dir2Pos
//         System.out.println("\nProbando la función de dir2Pos \n\n");

//         int salida[] = new int[2];
//         //hacia abajo
//         salida = laberinto.dir2Pos(0, 0, Directions.DOWN);
//         System.out.println("Laberinto dir2Pos (0,0, DOWN): (" + salida[0] + "," + salida[1] + ")");
        
//         //hacia arriba
//         salida = laberinto.dir2Pos(0, 0, Directions.UP);
//         System.out.println("Laberinto dir2Pos (0,0, UP): (" + salida[0] + "," + salida[1] + ")");

//         //hacia la derecha
//         salida = laberinto.dir2Pos(0, 0, Directions.RIGHT);
//         System.out.println("Laberinto dir2Pos (0,0, RIGHT): (" + salida[0] + "," + salida[1] + ")");

//         //hacia la izquierda
//         salida = laberinto.dir2Pos(0, 0, Directions.LEFT);
//         System.out.println("Laberinto dir2Pos (0,0, LEFT): (" + salida[0] + "," + salida[1] + ")");

//         //comprobamos la función de randomEmptyPos
//         //Para ello vamos a llenar el tablero y solo dejamos una libre  a ver si nos devuelve la que esta libre
//         System.out.println("\nProbando la función de randomEmptyPos \n\n");
//         for (int i = 0; i < laberinto.getnRows(); i++) {
//             for (int j = 0; j < laberinto.getnCols(); j++) {
//                     if(i!=1||j!=1) laberinto.addCombat(i,j);
                    
//             }
//         }
//         laberinto.showCombat();

//         System.out.println("Laberinto randomEmptyPos(tiene que devolver la (1,1) ): " );
        
//         int [] p = new int [2]; p=laberinto.randomEmptyPos();
//         System.out.println("["+p[0]+ "," + p[1]+"]");

//         //----------------------------------------------------------------

//         // //vamos a probar la clase Game

//         // Game game = new Game(5);

//         // //comprobamos la función de Finished
//         // System.out.println("Finished: " + game.finished());

//         // //comprobamos la función de getGameState
//         // System.out.println("GameState: " + game.getGameState().toString());

//         // //comprobamos la función de configureLabyrinth
//         // game.configureLabyrinth();
//         // System.out.println("GameState después de confirmar el laberinto: " + game.getGameState().toString());

//         // //comprobamos la función de nextPlayer
//         // game.nextPlayer();
//         // System.out.println("Jugador actual: " + game.currentPlayer.getName());

//         // // //comprobamos la función de logPlayerWon
//         // // game.logPlayerWon();
//         // // System.out.println("Log: " + game.log);

//         // // //comprobamos la función de logMonsterWon
//         // // game.logMonsterWon();
//         // // System.out.println("Log: " + game.log);

//         // // //comprobamos la función de logReurrected
//         // // game.logReurrected();
//         // // System.out.println("Log: " + game.log);

//         // // //comprobamos la función de logPlayerSkipTurn
//         // // game.logPlayerSkipTurn();
//         // // System.out.println("Log: " + game.log);

//         // // //comprobamos la función de logPlayerNoOrders
//         // // game.logPlayerNoOrders();
//         System.out.println("De la clase Game aún no podemos imprimir nada debido a que debemos de implementar la función addBlock, de la cual se nos proporciona información en la siguiente prática.");



//Lo hemos comentado debido a las restricciones de métodos protegidos y demás debido a la herencia.













//     }
// }
