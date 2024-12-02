#include <iostream>
#include <cassert>
#include <thread>
#include <mutex>
#include <random>
#include <chrono>
#include "scd.h"

using namespace std;
using namespace scd;

const int num_rondas = 10;    // Número de rondas
const int num_jugadores = 4;  // Número de jugadores

int puntos[num_jugadores] = {0};    // Puntos de cada jugador
int puntosParaGanar[3] = {5, 3, 2}; // El primer jugador gana 5, el segundo gana 3 y el resto ganan 2 (si miran a la dirección en la que está el corazón)
int puntos_ronda = 0; // Puntos que se ganan en la ronda actual
bool fin = false;   // Booleano que ayuda a determinar si se ha terminado el juego

mutex mtx_cout;     // Mutex para proteger la salida por pantalla
mutex mtx_operacion; // Mutex para cambiar el valor de variables

int direccion_corazon; // Dirección del corazón
int puestoJugador = 0; // Cuando el jugador mira al corazón en comparación con los demás jugadores. La usaremos para acceder al vector de puntos que puede ganar.
int jugadores_actuales = 0; // variable que refleja los jugadores que ya han actuado en la ronda actual
Semaphore corazon_disponible(0);    // Semáforo para saber si el corazón está disponible. 0 equivale a no disponible, 1 equivale a disponible
Semaphore puedo_generar(1);         // Semáforo para saber si se puede generar un corazón. 1=Si, 0=No
Semaphore fin_ronda(0); // Semáforo inicializado en 0, tiene la función de indicar que la ronda ha finalizado

/**
 * @brief Función que muestra los puntos de cada jugador
 */
void mostrar_puntos() {
   cout << "Puntos: ";
   for (int i = 0; i < num_jugadores; ++i)
      cout << puntos[i] << " ";
   cout << endl << endl << endl << flush;
}
/**
 * @brief Función que dependiendo de el numero que le pase me dice si es mario, luigi, peach o bowser (mario  = 0, luigi = 1, peach = 2, bowser = 3)
 * @param i identificador del jugador
 */
string nombre_jugador(int i) {
   switch (i) {
      case 0:
         return "Mario";
      case 1:
         return "Luigi";
      case 2:
         return "Peach";
      case 3:
         return "Bowser";
      default:
         return "Jugador desconocido";
   }
}

/**
 * @brief Función que ejecuta la hebra del NPC, trata de poner un corazón en una determinada dirección, además lleva la cuenta de las rondas. Si se ha terminado el juego, se sale del bucle.
 */
void funcion_hebra_NPC() {
   for (int i = 0; i < num_rondas; ++i) {
      jugadores_actuales = 0; // Reseteamos el contador al inicio de cada ronda
      puestoJugador = 0;        // Reseteamos el puesto al inicio de cada ronda

      sem_wait(puedo_generar); // Esperamos a que se pueda generar un nuevo corazón

      direccion_corazon = aleatorio<0, 3>(); // Generamos dirección aleatoria en la que poner el corazón

      cout << "NPC: Corazón visible en la dirección " << direccion_corazon << " ." << endl << flush;

      for (int i = 0; i < num_jugadores; ++i) {
         //compruebo si el semáforo corazon_disponible tiene procesos esperando
         int sval;
         sem_signal(corazon_disponible); // Despertamos a todos los jugadores 
         //sem_signal(corazon_disponible); // Despertamos a todos los jugadores 
      }

      // Esperamos a que todos los jugadores terminen la ronda
      sem_wait(fin_ronda);

      // Fin de ronda
      cout << "+++++++-----+++++-----++++ FIN DE LA RONDA " << i+1 << " +++++++-----+++++-----++++" << endl << flush;
      mostrar_puntos();

   }

   // Señalizamos el fin del juego
   fin = true;
   for (int i = 0; i < num_jugadores; ++i) {
      sem_signal(corazon_disponible);
   }
   //Imprimimos por pantalla el fin del juego
   cout << endl << "+++++++-----+++++-----++++ FIN DEL JUEGO DE MARIO PARTY CON 10 RONDAS" << " +++++++-----+++++-----++++" << endl << flush;
   mostrar_puntos();
}

/**
 * @brief Función que ejecuta la hebra de un jugador, trata de mirar hacia una dirección aleatoria y si coincide con la del corazón, se le asigna una cantidad de puntos en función de el orden de llegada. Si es el último jugador en actuar, se libera el semáforo de fin de ronda.
 * 
 * @param num_jugador Número del jugador
 */
void funcion_hebra_jugador(int num_jugador) {
   while (!fin) {
      sem_wait(corazon_disponible); // Como hemos despertado anteriormente a todos los jugadores, cuando este adquiere el semáforo, los demás pueden entrar de igual manera
      if (!fin) { // Necesario comprobarlo. Por si se ha puesto fin=true mientras estaba bloqueado
         string nombre = nombre_jugador(num_jugador);
         mtx_operacion.lock();
         jugadores_actuales++; // Incrementamos el número de jugadores que han actuado, al ser una variable compartida, la protegemos con un mutex
         mtx_operacion.unlock();

         int direccion_jugador = aleatorio<0, 3>(); // Generamos aleatoriamente la dirección hacia donde va a mirar el jugador
         bool direccion_correcta = direccion_corazon == direccion_jugador; // Si la dirección es la correcta podemos sumar la cantidad de puntos que le corresponda

         if (direccion_correcta) {
            mtx_cout.lock();
            cout << nombre << ": mira hacia la dirección del corazón." << endl << flush; // Imprimimos que efectivamente mira hacia la dirección del corazón
            mtx_cout.unlock();

            mtx_operacion.lock();
            puntos_ronda = puntosParaGanar[puestoJugador]; // Hacer que gane los puntos correspondientes
            if ( puestoJugador < 2) { // Si es 2 es el máximo de puntos que puede ganar según el array , luego al inicio de cada ronda se resetea ( puestoJugador = 0)
               puestoJugador++;
            }
            mtx_operacion.unlock();
         } else { //si no mira hacia la dirección en la que se ha puesto el corazón, se le suma 0 puntos
            mtx_cout.lock();
            cout << nombre << ": mira hacia la dirección incorrecta." << endl << flush; // No ha mirado hacia la misma dirección
            mtx_cout.unlock();

            mtx_operacion.lock();
            puntos_ronda = 0;
            mtx_operacion.unlock();
         }

         mtx_cout.lock();
         cout << nombre << " ha ganado: " << puntos_ronda << " puntos." << endl << flush;
         mtx_cout.unlock();

         // Sumo los puntos
         // No hace falta candado, cada jugador accede a su posición en el array sin bloqueos ni nada por el estilo
         puntos[num_jugador] += puntos_ronda;

         // Si es el último jugador que actúa, liberamos el semáforo de fin de ronda
         if (jugadores_actuales == num_jugadores) {
            sem_signal(fin_ronda); // indicamos que la ronda ha finalizado
            sem_signal(puedo_generar); //indicamos que ya puede generar el corazón
         }
      }
   }
}

int main() {
   // Lanzamos hebra NPC y jugadores
   thread hebra_NPC(funcion_hebra_NPC);
   thread hebra_jugador[num_jugadores];
   for (int i = 0; i < num_jugadores; ++i)
      hebra_jugador[i] = thread(funcion_hebra_jugador, i);

   // Esperamos a que terminen
   hebra_NPC.join();
   for (int i = 0; i < num_jugadores; ++i)
      hebra_jugador[i].join();

   // Mostramos los puntos finales
   mtx_cout.lock();
   cout << endl << "+++++++-----+++++-----++++  FIN DEL JUEGO  +++++++-----+++++-----++++ " << endl << flush;
   mostrar_puntos();
   mtx_cout.unlock();



   cout << R"(
   M   M   A   RRRR  III  OOO      PPPP   A   RRRR  TTTTT  Y   Y
   MM MM  A A  R   R  I  O   O     P   P A A  R   R   T     Y Y
   M M M AAAAA RRRR   I  O   O     PPPP AAAAA RRRR    T      Y
   M   M A   A R   R  I  O   O     P    A   A R   R   T      Y
   M   M A   A R   R III  OOO      P    A   A R   R   T      Y
   )" << endl;
}
