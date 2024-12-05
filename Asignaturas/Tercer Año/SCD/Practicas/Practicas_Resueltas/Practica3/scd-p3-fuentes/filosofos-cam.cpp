// -----------------------------------------------------------------------------
//
// Sistemas concurrentes y Distribuidos.
// Práctica 3. Implementación de algoritmos distribuidos con MPI
//
// Archivo: filosofos-plantilla.cpp
// Implementación del problema de los filósofos (sin camarero).
// Plantilla para completar.
//
// Historial:
// Actualizado a C++11 en Septiembre de 2017
// -----------------------------------------------------------------------------


#include <mpi.h>
#include <thread> // this_thread::sleep_for
#include <random> // dispositivos, generadores y distribuciones aleatorias
#include <chrono> // duraciones (duration), unidades de tiempo
#include <iostream>

using namespace std;
using namespace std::this_thread ;
using namespace std::chrono ;

const int
   num_filosofos = 5 ,              // número de filósofos 
   num_filo_ten  = 2*num_filosofos, // número de filósofos y tenedores 
   num_procesos  = num_filo_ten + 1, // número de procesos total (filósofos, tenedores y camarero)
   id_camarero   = num_procesos - 1; // id del proceso camarero

const int
    etiq_sentarse = 0, // etiqueta para sentarse
    etiq_levantarse = 1; // etiqueta para levantarse


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

void funcion_filosofos( int id )
{
  int id_ten_izq = (id+1)              % num_filo_ten, //id. tenedor izq.
      id_ten_der = (id+num_filo_ten-1) % num_filo_ten; //id. tenedor der.

while ( true )
{
    //Filósofo se sienta, debe de avisar al camarero
    cout << "Filósofo " << id << " va a sentarse" << endl;
    MPI_Ssend(&id, 1, MPI_INT, id_camarero, etiq_sentarse, MPI_COMM_WORLD);

    cout <<"Filósofo " <<id << " solicita ten. izq." <<id_ten_izq <<endl;
    MPI_Ssend( &id, 1, MPI_INT, id_ten_izq, 0, MPI_COMM_WORLD );

    cout <<"Filósofo " <<id <<" solicita ten. der." <<id_ten_der <<endl;
    MPI_Ssend(&id, 1, MPI_INT, id_ten_der, 0, MPI_COMM_WORLD );

    cout <<"Filósofo " <<id <<" comienza a comer" <<endl ;
    sleep_for( milliseconds( aleatorio<10,100>() ) );

    cout <<"Filósofo " <<id <<" suelta ten. izq. " <<id_ten_izq <<endl;
    MPI_Ssend(&id, 1, MPI_INT, id_ten_izq, 0, MPI_COMM_WORLD);

    cout<< "Filósofo " <<id <<" suelta ten. der. " <<id_ten_der <<endl;
    MPI_Ssend(&id, 1, MPI_INT, id_ten_der, 0, MPI_COMM_WORLD);

    //Filósofo se levanta
    cout << "Filósofo " << id << " va a levantarse" << endl;
    MPI_Ssend(&id, 1, MPI_INT, id_camarero, etiq_levantarse, MPI_COMM_WORLD);

    cout << "Filosofo " << id << " comienza a pensar" << endl;
    sleep_for( milliseconds( aleatorio<10,100>() ) );
    
}
}
// ---------------------------------------------------------------------

void funcion_tenedores( int id )
{
  int valor, id_filosofo ;  // valor recibido, identificador del filósofo
  MPI_Status estado ;       // metadatos de las dos recepciones

while ( true )
{
    MPI_Recv(&valor, 1, MPI_INT, MPI_ANY_SOURCE, 0, MPI_COMM_WORLD, &estado);
    id_filosofo = estado.MPI_SOURCE;
    cout <<"Ten. " <<id <<" ha sido cogido por filo. " <<id_filosofo <<endl;

    MPI_Recv(&valor, 1, MPI_INT, id_filosofo, 0, MPI_COMM_WORLD, &estado);
    cout <<"Ten. "<< id<< " ha sido liberado por filo. " <<id_filosofo <<endl ;
  }
}
// ---------------------------------------------------------------------

void funcion_camarero()
{
  int valor, s=0 ;  // valor recibido, número de filósofos sentados
  MPI_Status estado ;       // metadatos de las dos recepciones

    while ( true )
    {
        if (s < 4)
        {
            MPI_Recv(&valor, 1, MPI_INT, MPI_ANY_SOURCE, MPI_ANY_TAG, MPI_COMM_WORLD, &estado);
            if (estado.MPI_TAG == etiq_sentarse)
            {
                s++;
                cout << "Filósofo " << estado.MPI_SOURCE << " se ha sentado. Filósofos sentados: " << s << endl;
            }
            else if (estado.MPI_TAG == etiq_levantarse)
            {
                s--;
                cout << "Filósofo " << estado.MPI_SOURCE << " se ha levantado. Filósofos sentados: " << s << endl;
            }
        } else {
            MPI_Recv(&valor, 1, MPI_INT, MPI_ANY_SOURCE, etiq_levantarse, MPI_COMM_WORLD, &estado);
            s--;
            cout << "Filósofo " << estado.MPI_SOURCE << " se ha levantado. Filósofos sentados: " << s << endl;
        }
    }
}

// ---------------------------------------------------------------------



int main( int argc, char** argv )
{
    int id_propio, num_procesos_actual ;

    MPI_Init( &argc, &argv );
    MPI_Comm_rank( MPI_COMM_WORLD, &id_propio );
    MPI_Comm_size( MPI_COMM_WORLD, &num_procesos_actual );


    if ( num_procesos == num_procesos_actual )
    {
        if ( id_propio < num_filo_ten ) // si es filósofo o tenedor
        {
            if ( id_propio % 2 == 0 )          // si es par
                funcion_filosofos( id_propio ); //   es un filósofo
            else                               // si es impar
                funcion_tenedores( id_propio ); //   es un tenedor
        }
        else // si es el camarero
        {
            funcion_camarero();
        }
    }
    else
    {
        if ( id_propio == 0 ) // solo el primero escribe error, indep. del rol
        { cout << "el número de procesos esperados es:    " << num_procesos << endl
                << "el número de procesos en ejecución es: " << num_procesos_actual << endl
                << "(programa abortado)" << endl ;
        }
    }

    MPI_Finalize( );
    return 0;
}

// ---------------------------------------------------------------------
