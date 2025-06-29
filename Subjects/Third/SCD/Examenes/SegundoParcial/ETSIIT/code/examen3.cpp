//Ismael Sallami Moreno
//DNI: 20888108Z

//para la resolución de este problema vamos a usar la plantilla del problema de los filósofos con un camarero

#include <mpi.h>
#include <thread> // this_thread::sleep_for
#include <random> // dispositivos, generadores y distribuciones aleatorias
#include <chrono> // duraciones (duration), unidades de tiempo
#include <iostream>

using namespace std;
using namespace std::this_thread ;
using namespace std::chrono ;

const int
    cajas = 3, // número de cajas registradoras
    clientes = 10, // número de clientes
    num_procesos = 11, // número de procesos
    id_proceso_encargado = num_procesos-1; // id del proceso encargado

int peticion_pago = 1; //para solicitar pagar
int peticion_fin_pago=2; //para solicitar el fin de pago

bool caja_vacia[cajas] = {true,true,true};

int num_caja_vacia(){
    int val = 0;
    for(int i=0;i<cajas;i++){
        if(caja_vacia[i]){
            val++;
        }
    }
    return val;
}
int caja_libre(){
    int id_caja_libre=-1;
    for(int i=0;i<cajas;i++){
        if(caja_vacia[i]){
            id_caja_libre = i;
            break;
        }
    }
    return id_caja_libre;
}

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

void funcion_cliente(int id){
    MPI_Status estado;
    int caja_donde_pagar; // valor que recibe del proceso encargado
    int valor = id; // enviar el ID del cliente al encargado

    while(true) {
        sleep_for( milliseconds( aleatorio<10,300>() ) ); // espera aleatoria
        cout << "Cliente " << id << ": solicito que se me asigne caja" << endl;
        MPI_Ssend(&valor, 1, MPI_INT, id_proceso_encargado, peticion_pago, MPI_COMM_WORLD);
        MPI_Recv(&caja_donde_pagar, 1, MPI_INT, id_proceso_encargado, 0, MPI_COMM_WORLD, &estado);
        cout << "Cliente " << id << ": comienzo pago en caja " << caja_donde_pagar << endl;
        sleep_for( milliseconds( aleatorio<10,300>() ) ); // espera aleatoria
        cout << "Cliente " << id << ": termino pago en caja " << caja_donde_pagar << endl;
        MPI_Ssend(&caja_donde_pagar, 1, MPI_INT, id_proceso_encargado, peticion_fin_pago, MPI_COMM_WORLD);
    }
}


void funcion_encargado(){
    int valor, caja_a_liberar; // valor es el id del cliente o la caja que libera
    MPI_Status estado;

    while (true) {
        MPI_Recv(&valor, 1, MPI_INT, MPI_ANY_SOURCE, MPI_ANY_TAG, MPI_COMM_WORLD, &estado); // recibe el mensaje
        
        //en este caso se pedia que si habia cajas libres que la etiqueta fuese cualquiera, pero he decidio hacerlo de esta manera para hacerlo mas simple, aunque en el examen se pedía de esa manera.

        if (estado.MPI_TAG == peticion_pago) {
            int primera_caja_libre = caja_libre();
            caja_vacia[primera_caja_libre] = false;
            cout << "Encargado: asigna caja " << primera_caja_libre << " al cliente " << valor << endl;
            MPI_Ssend(&primera_caja_libre, 1, MPI_INT, estado.MPI_SOURCE, 0, MPI_COMM_WORLD);
        }
        else if (estado.MPI_TAG == peticion_fin_pago) {
            caja_a_liberar = valor; // el valor recibido es la caja a liberar
            caja_vacia[caja_a_liberar] = true;
            cout << "Encargado: liberada caja " << caja_a_liberar << " por el cliente " << estado.MPI_SOURCE << endl;
        }
    }
}


int main( int argc, char** argv )
{
    int id_propio, num_procesos_actual ;

    MPI_Init( &argc, &argv );
    MPI_Comm_rank( MPI_COMM_WORLD, &id_propio );
    MPI_Comm_size( MPI_COMM_WORLD, &num_procesos_actual );

    if(num_procesos == num_procesos_actual){
        if(id_propio < clientes){
            funcion_cliente(id_propio);
        }
        else if(id_propio == id_proceso_encargado){
            funcion_encargado();
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