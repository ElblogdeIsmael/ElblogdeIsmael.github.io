#include <iostream>
#include <cassert>
#include <thread>
#include <mutex>
#include <random> // dispositivos, generadores y distribuciones aleatorias
#include <chrono> // duraciones (duration), unidades de tiempo
#include "scd.h"

using namespace std ;
using namespace scd ;

// numero de fumadores 

const int num_fumadores = 3 ;

//declaramos un array de semáforos
Semaphore sem_fumadores[num_fumadores] = {0,0,0}; // 1 si el ingrediente esta en el mostrador, 0 si no esta
Semaphore mostrador_vacio = 1; // 1 si el mostrador esta vacio, 0 si esta lleno
/*
----descripción de los fumadores----
f1: tiene papel y tabaco, necesita cerillas
f2: tiene papel y cerillas, necesita tabaco
f3: tiene tabaco y cerillas, necesita papel
*/

/*Breve descripción de que es P_i y R_i
   P_i: "estanquero produce ingrediente i"
   R_i: "fumador i retira su ingrediente"
*/

//-------------------------------------------------------------------------
// Función que simula la acción de producir un ingrediente, como un retardo
// aleatorio de la hebra (devuelve número de ingrediente producido)

int producir_ingrediente()
{
   // calcular milisegundos aleatorios de duración de la acción de fumar)
   chrono::milliseconds duracion_produ( aleatorio<10,100>() );

   // informa de que comienza a producir
   cout << "Estanquero : empieza a producir ingrediente (" << duracion_produ.count() << " milisegundos)" << endl;

   // espera bloqueada un tiempo igual a ''duracion_produ' milisegundos
   this_thread::sleep_for( duracion_produ );

   const int num_ingrediente = aleatorio<0,num_fumadores-1>() ;

   // informa de que ha terminado de producir
   cout << "Estanquero : termina de producir ingrediente " << num_ingrediente << endl;

   return num_ingrediente ;
}

//----------------------------------------------------------------------
// función que ejecuta la hebra del estanquero

void funcion_hebra_estanquero(  )
{
   while( true )
   {
      int ingrediente = producir_ingrediente();
      cout << "Estanquero produce ingrediente " << ingrediente << endl;
      mostrador_vacio.sem_wait();
      sem_fumadores[ingrediente].sem_signal();
   }
}

void  funcion_hebra_fumador( int num_fumador )
{
   while( true )
   {
      cout << "Fumador " << num_fumador << "  : espera ingrediente." << endl;
      sem_fumadores[num_fumador].sem_wait();      
      mostrador_vacio.sem_signal();
      fumar( num_fumador );

   }
}

//-------------------------------------------------------------------------
// Función que simula la acción de fumar, como un retardo aleatoria de la hebra

void fumar( int num_fumador )
{

   // calcular milisegundos aleatorios de duración de la acción de fumar)
   chrono::milliseconds duracion_fumar( aleatorio<20,200>() );

   // informa de que comienza a fumar

   cout << "Fumador " << num_fumador << "  :"
         << " empieza a fumar (" << duracion_fumar.count() << " milisegundos)" << endl;

   // espera bloqueada un tiempo igual a ''duracion_fumar' milisegundos
   this_thread::sleep_for( duracion_fumar );

   // informa de que ha terminado de fumar

   cout << "Fumador " << num_fumador << "  : termina de fumar, comienza espera de ingrediente." << endl;

}

//----------------------------------------------------------------------
// función que ejecuta la hebra del fumador


//----------------------------------------------------------------------

int main()
{
    // Declarar y poner en marcha las hebras
   thread hebra_estanquero(funcion_hebra_estanquero);
   thread hebra_fumador[num_fumadores];
   
    // Inicializar las hebras de los fumadores
   for(int i = 0; i < num_fumadores; ++i) {
      hebra_fumador[i] = thread(funcion_hebra_fumador, i);
   }

    // Unir las hebras
   hebra_estanquero.join();
   for(int i = 0; i < num_fumadores; ++i) {
      hebra_fumador[i].join();
   }
   return 0;
}
