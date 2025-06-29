// -----------------------------------------------------------------------------
//
// Sistemas concurrentes y Distribuidos.
// Práctica 3. Implementación de algoritmos distribuidos con MPI
//
// Archivo: prodcons2.cpp
// Implementación del problema del productor-consumidor con
// un proceso intermedio que gestiona un buffer finito y recibe peticiones
// en orden arbitrario
// (versión con un único productor y un único consumidor)
//
// Historial:
// Actualizado a C++11 en Septiembre de 2017
// -----------------------------------------------------------------------------

#include <iostream>
#include <thread> // this_thread::sleep_for
#include <random> // dispositivos, generadores y distribuciones aleatorias
#include <chrono> // duraciones (duration), unidades de tiempo
#include <mpi.h>

using namespace std;
using namespace std::this_thread ;
using namespace std::chrono ;

const int
   num_items             = 6, //cambiamos los datos para que sean divisibles entre productor y consumidor
   tam_vector            = 10,
   n_p = 3,
   n_c = 2,
   num_procesos_esperado = n_p + n_c + 1,
   k = num_items/n_p;

//variables para el test de produccion de valores
int valores_producidos[n_p] = {0};
int valores_consumidos [n_c] = {0};

const int etiq_productor = 0, // etiqueta de productor
    //etiq_consumidor = 1; // etiqueta de consumidor
    etiq_consumidor_par = 1, // etiqueta de consumidor par
      etiq_consumidor_impar = 2, // etiqueta de consumidor impar
      etiq_consumidor = 3; // etiqueta de consumidor
   

//**********************************************************************
// plantilla de función para generar un entero aleatorio uniformemente
// distribuido entre dos valores enteros, ambos incluidos
// (ambos tienen que ser dos constantes, conocidas en tiempo de compilación)
//----------------------------------------------------------------------

template< int min, int max > int aleatorio()
{
  static default_random_engine generador( (random_device())() );
  static uniform_int_distribution<int> distribucion_uniforme( min, max ) ;
  return distribucion_uniforme( generador );
}
// ---------------------------------------------------------------------
// producir produce los numeros en secuencia (1,2,3,....)
// y lleva espera aleatorio
int producir(int numero_productor) {
   static int contador = 0;
   sleep_for(milliseconds(aleatorio<10, 100>()));
   contador++;
   cout << "Productor " << numero_productor << " ha producido valor " << contador << endl << flush;
   valores_producidos[numero_productor]++;
   return contador;
}
// ---------------------------------------------------------------------

void funcion_productor(int numero_productor) {
   for (int i = 0; i < k; i++) {
      int valor_prod = producir(numero_productor);
      MPI_Ssend(&valor_prod, 1, MPI_INT, n_p, etiq_productor, MPI_COMM_WORLD);
      cout << "Productor " << numero_productor << " envió valor " << valor_prod << endl << flush;
   }
}
// ---------------------------------------------------------------------

void consumir( int valor_cons )
{
   // espera bloqueada
   sleep_for( milliseconds( aleatorio<110,200>()) );
   cout << "Consumidor ha consumido valor " << valor_cons << endl << flush ;
}
// ---------------------------------------------------------------------

void funcion_consumidor(int numero_consumidor)
{
   int         peticion = 1,
               valor_rec;
   MPI_Status  estado ;

   for( unsigned int i=0 ; i < num_items/n_c; i++ )
   {
      MPI_Ssend( &peticion,  1, MPI_INT, n_p, etiq_consumidor, MPI_COMM_WORLD); //n_p hace referencia al id de buffer

      MPI_Recv ( &valor_rec, 1, MPI_INT, n_p, MPI_ANY_TAG, MPI_COMM_WORLD,&estado );
      if( estado.MPI_TAG == etiq_consumidor_par ){
         cout << "Consumidor con rol " << numero_consumidor << " ha recibido valor " << valor_rec << " que es par" << endl << flush ;
      }
      else if( estado.MPI_TAG == etiq_consumidor_impar ){
         cout << "Consumidor con rol " << numero_consumidor << " ha recibido valor " << valor_rec << " que es impar" << endl << flush ;
      }
      else{
         cout << "ERROR, HA RECIBIDO DEL PRODUCTOR, .... ABORTAR....";
         exit(0);
      }
      //cout << "Consumidor con rol " << numero_consumidor << " ha recibido valor " << valor_rec << endl << flush ;
      consumir( valor_rec );
      valores_consumidos[numero_consumidor]++;
   }
}
// ---------------------------------------------------------------------

void funcion_buffer()
{
   int        buffer[tam_vector],      // buffer con celdas ocupadas y vacías
              valor,                   // valor recibido o enviado
              primera_libre       = 0, // índice de primera celda libre
              primera_ocupada     = 0, // índice de primera celda ocupada
              num_celdas_ocupadas = 0; // número de celdas ocupadas
   MPI_Status estado ;                 // metadatos del mensaje recibido

   int etiq_aceptable; // etiqueta aceptable, almacena el valor de la etiqueta del mensaje recibido

   for( unsigned int i=0 ; i < num_items*2 ; i++ )
   {
      etiq_aceptable = (num_celdas_ocupadas == 0) ? etiq_productor
                        : (num_celdas_ocupadas == tam_vector) ? etiq_consumidor
                        : MPI_ANY_TAG;

      // 2. recibir un mensaje del emisor o emisores aceptables

      MPI_Recv( &valor, 1, MPI_INT, MPI_ANY_SOURCE, etiq_aceptable, MPI_COMM_WORLD, &estado );


      // 3. procesar el mensaje recibido

      switch( estado.MPI_TAG ) // leer emisor del mensaje en metadatos
      {
         case etiq_productor: // si ha sido el productor: insertar en buffer
            buffer[primera_libre] = valor ;
            primera_libre = (primera_libre+1) % tam_vector ;
            num_celdas_ocupadas++ ;
            cout << "Buffer ha recibido valor " << valor << endl ;
            break;

         case etiq_consumidor: // si ha sido el consumidor: extraer y enviarle
            valor = buffer[primera_ocupada] ;
            primera_ocupada = (primera_ocupada+1) % tam_vector ;
            num_celdas_ocupadas-- ;
            cout << "Buffer va a enviar valor " << valor << endl ;
            if(valor%2 == 0){
               cout << "Buffer va a enviar valor " << valor << " a consumidor par" << endl ;
               MPI_Ssend( &valor, 1, MPI_INT, estado.MPI_SOURCE , etiq_consumidor_par, MPI_COMM_WORLD);
            }
            else{
               cout << "Buffer va a enviar valor " << valor << " a consumidor impar" << endl ;
               MPI_Ssend( &valor, 1, MPI_INT, estado.MPI_SOURCE , etiq_consumidor_impar, MPI_COMM_WORLD);
            }
            break;
      }
   }
}

//Función extra para verificar que cada productor ha producido la cantidad correcta de ítems
void test_produccion() {
   
   for (int i = 0; i < n_p; i++)
   {
      if(valores_producidos[i] == k){
         cout << endl << "----------------------------------------------------------" << endl;
         cout << "| Productor " << i << " ha producido la cantidad correcta de ítems |" << endl;
         cout << "----------------------------------------------------------" << endl;
      }      
   }

   for (int i = 0; i < n_c; i++)
   {
      if (valores_consumidos[i] == num_items/n_c)
      {
         cout << endl << "----------------------------------------------------------" << endl;
         cout << "| Consumidor " << i << " ha consumido la cantidad correcta de ítems |" << endl;
         cout << "----------------------------------------------------------" << endl;
      }    
   }
      
   
   
   
}


// ---------------------------------------------------------------------
int main( int argc, char *argv[] )
{
   int id_propio, num_procesos_actual;

   // inicializar MPI, leer identif. de proceso y número de procesos
   MPI_Init( &argc, &argv );
   MPI_Comm_rank( MPI_COMM_WORLD, &id_propio );
   MPI_Comm_size( MPI_COMM_WORLD, &num_procesos_actual );

   if(num_procesos_esperado == num_procesos_actual) {
      if(id_propio < n_p) {
         funcion_productor(id_propio);
         
      }
      else if (id_propio == n_p) {
         funcion_buffer();

      }
      else {
         funcion_consumidor(id_propio - n_p - 1); // debemos de restarlo para que coincida con el numero del proceso consumidor
      }
   } else {
      if ( id_propio == 0 ) // solo el primero escribe error, indep. del rol
      { cout << "el número de procesos esperados es:    " << num_procesos_esperado << endl
            << "el número de procesos en ejecución es: " << num_procesos_actual << endl
            << "(programa abortado)" << endl ;
      }
   }

   // al terminar el proceso, finalizar MPI
   MPI_Finalize( );
   
   test_produccion();
   return 0;
}
