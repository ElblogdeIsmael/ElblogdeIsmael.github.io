#include <iostream>
#include <cassert>
#include <thread>
#include <mutex>
#include <random>
#include "scd.h"

using namespace std ;
using namespace scd ;

//**********************************************************************
// Variables globales

const unsigned 
   num_items = 40 ,   // número de items
	tam_vec   = 10 ;   // tamaño del buffer
unsigned  
   cont_prod[num_items] = {0}, // contadores de verificación: para cada dato, número de veces que se ha producido.
   cont_cons[num_items] = {0}, // contadores de verificación: para cada dato, número de veces que se ha consumido.
   siguiente_dato       = 0 ;  // siguiente dato a producir en 'producir_dato' (solo se usa ahí)

   //seguimos el proceso de la solución FIFO
   int primera_libre = 0;
   int primera_ocupada = 0;

   //declaramos el vector intermedio
   vector<unsigned> buffer(tam_vec);
   //declaramos libres y ocupadas
   //Semaphore libres=tam_vec;
   //Semaphore ocupadas=0;

   Semaphore libres(tam_vec);
   Semaphore ocupadas(0);

   

//**********************************************************************

//**********************************************************************
// funciones comunes a las dos soluciones (fifo y lifo)
//----------------------------------------------------------------------

unsigned producir_dato()
{
   this_thread::sleep_for( chrono::milliseconds( aleatorio<20,100>() ));
   const unsigned dato_producido = siguiente_dato ;
   siguiente_dato++ ;
   cont_prod[dato_producido] ++ ;
   cout << "producido: " << dato_producido << endl << flush ;

   return dato_producido ;
}
//----------------------------------------------------------------------

void consumir_dato( unsigned dato )
{
   assert( dato < num_items );
   cont_cons[dato] ++ ;
   this_thread::sleep_for( chrono::milliseconds( aleatorio<20,100>() ));

   cout << "dato consumido: " << dato << endl ;
}


//----------------------------------------------------------------------

void test_contadores()
{
   bool ok = true ;
   cout << "comprobando contadores ...." ;
   for( unsigned i = 0 ; i < num_items ; i++ )
   {  if ( cont_prod[i] != 1 )
      {  cout << "error: valor " << i << " producido " << cont_prod[i] << " veces." << endl ;
         ok = false ;
      }
      if ( cont_cons[i] != 1 )
      {  cout << "error: valor " << i << " consumido " << cont_cons[i] << " veces" << endl ;
         ok = false ;
      }
   }
   if (ok)
      cout << endl << flush << "solución (aparentemente) correcta." << endl << flush ;
}

//----------------------------------------------------------------------

void  funcion_hebra_productora(  )
{
   for( unsigned i = 0 ; i < num_items ; i++ )
   {
      cout << "--------------------------------------------------------" << endl;
      int dato = producir_dato() ;
      libres.sem_wait();
   
      
      //falta aquí: insertar dato en el vector intermedio:
      //dato = dato%num_items; //hacemos el módulo para asegurarnos de que no se sale del rango que queremos
      buffer[primera_libre] = dato; //añadimos el dato al principio del buffer
      primera_libre++; //aumentamos el contador de la primera libre
      primera_libre = primera_libre%tam_vec; //hacemos el módulo para asegurarnos de que no se sale del rango que queremos
      
      cout << "El valor de primer libre dentro de la función productora es: " << primera_libre << endl;
      cout << "El valor de primera ocupada es: " << primera_ocupada << endl;
      ocupadas.sem_signal();

      //decimos las que hay libres y ocupadas
      cout <<"Dentro de funcion_hebra_productora"<<endl;
      cout << "ocupadas: " << primera_libre << endl;
      cout << "libres: " << tam_vec - primera_libre << endl;
      cout << "--------------------------------------------------------" << endl;
   }
}

//----------------------------------------------------------------------

void funcion_hebra_consumidora(  )
{
   for( unsigned i = 0 ; i < num_items ; i++ )
   {
      cout << "--------------------------------------------------------" << endl;
      int dato ;
      // falta aquí: extraer dato desde el vector intermedio
      cout<<"El valor de primera_libre es: "<<primera_libre<<endl;
      cout << "Pasamos a extraer el dato..." << endl;

      ocupadas.sem_wait();

      
      dato=buffer[primera_ocupada];
      primera_ocupada++;
      primera_ocupada = primera_ocupada%tam_vec; //hacemos el módulo para asegurarnos de que no se sale del rango que queremos 
      
      cout<<"El valor de primera_libre es después de decrementar el valor de primera_libre: "<<primera_libre<<endl;
      cout << "El valor de primera ocupada es: " << primera_ocupada << endl;

      libres.sem_signal();
      consumir_dato( dato ) ;
      


      //decimos las que hay libres y ocupadas
      cout <<"Dentro de funcion_hebra_consumidora"<<endl;
      cout << "ocupadas: " << primera_libre << endl;
      cout << "libres: " << tam_vec - primera_libre << endl;
      cout << "--------------------------------------------------------" << endl;
    }
}
//----------------------------------------------------------------------

int main()
{
   cout << "-----------------------------------------------------------------" << endl
        << "Problema de los productores-consumidores (solución LIFO)." << endl
        << "------------------------------------------------------------------" << endl
        << flush ;

   thread hebra_productora ( funcion_hebra_productora ),
          hebra_consumidora( funcion_hebra_consumidora );

   hebra_productora.join() ;
   hebra_consumidora.join() ;
   cout << "FIN --> Han terminado las dos hebras"<<endl;

   test_contadores();

   //decimos las que hay libres y ocupadas
   cout << "ocupadas: " << primera_libre << endl;
   cout << "libres: " << tam_vec - primera_libre << endl;
}
