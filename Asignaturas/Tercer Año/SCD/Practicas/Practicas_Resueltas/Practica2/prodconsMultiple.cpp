// -----------------------------------------------------------------------------
//
// Sistemas concurrentes y Distribuidos.
// Seminario 2. Introducción a los monitores en C++11.
//
// Archivo: prodcons1_su.cpp
//
// Ejemplo de un monitor en C++11 con semántica SU, para el problema
// del productor/consumidor, con productor y consumidor únicos.
// Opcion LIFO
//
// Historial:
// Creado el 30 Sept de 2022. (adaptado de prodcons2_su.cpp)
// 20 oct 22 --> paso este archivo de FIFO a LIFO, para que se corresponda con lo que dicen las transparencias
// -----------------------------------------------------------------------------------


#include <iostream>
#include <iomanip>
#include <cassert>
#include <random>
#include <thread>
#include <cassert>
#include "scd.h"

using namespace std ;
using namespace scd ;

constexpr int
   num_items = 15 ;   // número de items a producir/consumir
int
   siguiente_dato = 0 ; // siguiente valor a devolver en 'producir_dato'
   
constexpr int               
   min_ms    = 5,     // tiempo minimo de espera en sleep_for
   max_ms    = 20 ;   // tiempo máximo de espera en sleep_for

constexpr int 
    n_p = 3, //numero de productores
    n_c = 5; //numero de consumidores
    
int
    p = num_items/n_p, //lo que producen los productores
    c = num_items/n_c; //lo que consumen los consumidores

int     
    buffer_prod[n_p] ; //buffer de los productores


mutex mtx ;                 // mutex de escritura en pantalla
unsigned
   cont_prod[num_items] = {0}, // contadores de verificación: producidos
   cont_cons[num_items] = {0}; // contadores de verificación: consumidos

//**********************************************************************
// funciones comunes a las dos soluciones (fifo y lifo)
//----------------------------------------------------------------------

int producir_dato( int num_hebra )
{
   
   this_thread::sleep_for( chrono::milliseconds( aleatorio<min_ms,max_ms>() ));
   int limite=num_hebra*p+p-1;

assert (buffer_prod[num_hebra]<=limite); //comprobamos que la hebra no ha producido más de lo que le corresponde

   const int valor_producido = buffer_prod[num_hebra] ;
   buffer_prod[num_hebra] ++ ;
   mtx.lock(); //candado para asegurarnos de que el cout no se entremezcla por el uso de varias hebras a la vez
   cout << "hebra productora " << num_hebra << ", produce " << valor_producido << endl << flush ;
   mtx.unlock();
   cont_prod[valor_producido]++ ; //luego comprobamos de este array si ese valor se ha producido solamente una vez
   return valor_producido ;
}
//----------------------------------------------------------------------

void consumir_dato( unsigned valor_consumir )
{
   if ( num_items <= valor_consumir ) //produce un fallo si el valor a consumir es mayor que el numero de items, ya que esto no es posible
   {
      cout << " valor a consumir === " << valor_consumir << ", num_items == " << num_items << endl ;
      assert( valor_consumir < num_items );
   }
   cont_cons[valor_consumir] ++ ; // de esta forma nos aseguramos de que el valor se ha consumido solamente una vez
   this_thread::sleep_for( chrono::milliseconds( aleatorio<min_ms,max_ms>() ));
   mtx.lock(); //candado para asegurarnos de que el cout no se entremezcla por el uso de varias hebras a la vez
   cout << "                  hebra consumidora, consume: " << valor_consumir << endl ;
   mtx.unlock();
}
//----------------------------------------------------------------------

void test_contadores()
{
   bool ok = true ;
   cout << "comprobando contadores ...." << endl ;

   for( unsigned i = 0 ; i < num_items ; i++ )
   {
      if ( cont_prod[i] != 1 )
      {
         cout << "error: valor " << i << " producido " << cont_prod[i] << " veces." << endl ;
         ok = false ;
      }
      if ( cont_cons[i] != 1 )
      {
         cout << "error: valor " << i << " consumido " << cont_cons[i] << " veces" << endl ;
         ok = false ;
      }
   }
   if (ok)
      cout << endl << flush << "solución (aparentemente) correcta." << endl << flush ; //flush se usa para forzar la impresión de datos por la pantalla que quedan en el buffer
}

// *****************************************************************************
// clase para monitor buffer, version FIFO, semántica SC, multiples prod/cons

class ProdConsMu : public HoareMonitor
{
 private:
 static const int           // constantes ('static' ya que no dependen de la instancia)
   num_celdas_total = 10;   //   núm. de entradas del buffer
 int                        // variables permanentes
   buffer[num_celdas_total],//   buffer de tamaño fijo, con los datos
   primera_libre ;          //   indice de celda de la próxima inserción ( == número de celdas ocupadas)

 CondVar                    // colas condicion:
   ocupadas,                //  cola donde espera el consumidor (n>0)
   libres ;                 //  cola donde espera el productor  (n<num_celdas_total)

 public:                    // constructor y métodos públicos
   ProdConsMu() ;             // constructor
   int  leer();                // extraer un valor (sentencia L) (consumidor)
   void escribir( int valor ); // insertar un valor (sentencia E) (productor)
} ;
// -----------------------------------------------------------------------------

ProdConsMu::ProdConsMu(  )
{
   primera_libre = 0 ;
   ocupadas      = newCondVar();
   libres        = newCondVar();
}
// -----------------------------------------------------------------------------
// función llamada por el consumidor para extraer un dato

int ProdConsMu::leer(  )
{
   // esperar bloqueado hasta que 0 < primera_libre
   if ( primera_libre == 0 )
      ocupadas.wait();
   
//    Que primera_libre sea igual a 0 quiere decir que la primera posición libre del buffer es la 0, por lo que no hay valores que leer.
//    Por ende, el consumidor debe de esperar.
   

   //cout << "leer: ocup == " << primera_libre << ", total == " << num_celdas_total << endl ;
   assert( 0 < primera_libre  );

   // hacer la operación de lectura, actualizando estado del monitor
   primera_libre-- ;
   const int valor = buffer[primera_libre] ;
   
   // señalar al productor que hay un hueco libre, por si está esperando
   //pero debemos de hacer el if para asegurarnos de que la cola no esta vacía
   if(libres.empty()) {
       libres.signal();
   }

   // devolver valor
   return valor ;
}
// -----------------------------------------------------------------------------

void ProdConsMu::escribir( int valor )
{
   // esperar bloqueado hasta que primera_libre < num_celdas_total
   if ( primera_libre == num_celdas_total )
      libres.wait();

   //cout << "escribir: ocup == " << primera_libre << ", total == " << num_celdas_total << endl ;
   assert( primera_libre < num_celdas_total );

   // hacer la operación de inserción, actualizando estado del monitor
   buffer[primera_libre] = valor ;
   primera_libre++ ;

   // señalar al consumidor que ya hay una celda ocupada (por si esta esperando)
   //pero debemos de hacer el if para asegurarnos de que la cola no esta vacía
   if(ocupadas.empty()) {
       ocupadas.signal();
   }
}
// *****************************************************************************
// funciones de hebras

void funcion_hebra_productora( MRef<ProdConsMu> monitor , int num_hebra)
{
   for( unsigned i = 0 ; i < num_items/n_p ; i++ )
   {
      int valor = producir_dato( num_hebra ) ;
      monitor->escribir( valor );
   }
}
// -----------------------------------------------------------------------------

void funcion_hebra_consumidora( MRef<ProdConsMu>  monitor )
{
   for( unsigned i = 0 ; i < num_items/n_c ; i++ )
   {
      int valor = monitor->leer();
      consumir_dato( valor ) ;
   }
}
// -----------------------------------------------------------------------------

int main()
{
   cout << "--------------------------------------------------------------------" << endl
        << "Problema del productor-consumidor únicos (Monitor SU, buffer LIFO). " << endl
        << "--------------------------------------------------------------------" << endl
        << flush ;

   // crear monitor  ('monitor' es una referencia al mismo, de tipo MRef<...>)
   MRef<ProdConsMu> monitor = Create<ProdConsMu>() ;

   assert(num_items % n_p == 0); //comprobamos que el numero de items es divisible por el numero de productores
   assert(num_items % n_c == 0); //comprobamos que el numero de items es divisible por el numero de consumidores

    //iniciliazamos el vector 
    for(int i=0;i<n_p;i++) {
        buffer_prod[i]=i*p;
    }
    //imprimimos el vector
    for(int i=0;i<n_p;i++) {
        cout << "buffer_prod[" << i << "] = " << buffer_prod[i] << endl;
    }
    cout << "---------------------------" << endl;


    vector<thread> hebras_productoras;
    vector<thread> hebras_consumidoras;

    for(int i=0;i<n_p;i++){
        hebras_productoras.push_back(thread(funcion_hebra_productora,monitor,i));
    }

    for(int i=0;i<n_c;i++){
        hebras_consumidoras.push_back(thread(funcion_hebra_consumidora,monitor));
    }

    for(int i=0;i<n_p;i++){
        hebras_productoras[i].join();
    }

    for(int i=0;i<n_c;i++){
        hebras_consumidoras[i].join();
    }

   test_contadores() ;
}
