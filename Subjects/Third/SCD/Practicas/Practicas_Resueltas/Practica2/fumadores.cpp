#include <iostream>
#include <cassert>
#include <thread>
#include <mutex>
#include <random>
#include "scd.h"
#include <chrono>
#include<vector>
using namespace std::chrono;

using namespace std ;
using namespace scd ;


int const num_fumadores=3;
mutex mtx; //candado para la impresión por pantalla


//Declaramos la clase del Monitor

class Estanco : public HoareMonitor
{
    private:
    int ingrediente_disponible=-1; //inicializamos a -1 para indicar que no hay ningún ingrediente en la mostrador
    int ingredientePuesto=-1; //inicializamos a -1 para indicar que no hay ningún ingrediente en la mostrador
    CondVar fumadores[3];
    CondVar mostrador_vacio;
    public:
    Estanco();
    void ponerIngrediente(int i);
    void esperarRecogidaIngrediente();
    void ObtenerIngrediente(int i);
} ;
//Implementamos los métodos de la clase Estanco

Estanco::Estanco()
{//debemos de inicializar las variables de condición
    mostrador_vacio = newCondVar();

    for(int i=0;i<num_fumadores;i++)
        fumadores[i]=newCondVar();
}

//la funcion producirIngrediente la declaro fuera del monitor debido a que no ejeucta nada del montior.
int ProducirIngrediente()
{
   // calcular milisegundos aleatorios de duración de la acción de fumar)
    chrono::milliseconds duracion_produ( aleatorio<10,100>() );
   // espera bloqueada un tiempo igual a ''duracion_produ' milisegundos
    this_thread::sleep_for( duracion_produ );

    const int num_ingrediente = aleatorio<0,num_fumadores-1>() ;

   // informa de que ha terminado de producir
    mtx.lock();
    cout << "Estanquero : produce el ingrediente " << num_ingrediente << endl;
    mtx.unlock();
    return num_ingrediente ;
}

void Estanco::ponerIngrediente(int ing)
{
    ingrediente_disponible = ing;
    cout << "Estanquero pone ingrediente " << ing << " en la mostrador" << endl;
    fumadores[ing].signal();//desperatamos al correspondiente fumador para que fume
    

}

void Estanco::esperarRecogidaIngrediente()
{
    chrono::milliseconds duracion_produ( aleatorio<10,100>() );
    if(ingrediente_disponible != -1){
        mostrador_vacio.wait(); // hacemos que el mostrador espere a que el ingrediente que hay en la mostrador sea recogido
        cout << "El estanquero esta esperando a que se recoja el ingrediente producido" << endl;

    }
    
    
}

void Estanco::ObtenerIngrediente(int i)
{
    if (ingrediente_disponible != i) {
        fumadores[i].wait(); // el fumador espera hasta que su ingrediente esté disponible
    }
    cout << "El fumador " << i << " ha recogido el ingrediente " << i << endl;
    ingrediente_disponible = -1;
    mostrador_vacio.signal(); // señalamos que el mostrador está vacío
}

void funcion_hebra_estanquero( MRef<Estanco> estanco){
    int ingrediente;
    while (true){
        int ingrediente = ProducirIngrediente();
        estanco->ponerIngrediente(ingrediente);
        estanco->esperarRecogidaIngrediente();
    }
}

void Fumar(int i){
    
    chrono::milliseconds duracion_produ(aleatorio<10,100>());
    mtx.lock();
    cout << "Fumador " << i << " empieza a fumar" << endl;
    this_thread::sleep_for(duracion_produ);
    cout << "Fumador " << i << " ha terminado de fumar" << endl;
    mtx.unlock();

}

void funcion_hebra_fumador(int i, MRef<Estanco> estanco){
    while (true){
        estanco->ObtenerIngrediente(i);
        Fumar(i);
    }
}

int main()
{
    cout << "--------------------------------------------------------------------" << endl
        << "Problema  de los fumadores (Monitor SU, buffer LIFO). " << endl
        << "--------------------------------------------------------------------" << endl
        << flush ;

    MRef<Estanco> estanco = Create<Estanco>();
    vector<thread> hebra_fumador;

    thread hebra_estanquero(funcion_hebra_estanquero, estanco);
    
    for(int i=0;i<3;i++){
        hebra_fumador.push_back(thread(funcion_hebra_fumador,i,estanco));
    }

    hebra_estanquero.join();
    for(int i=0;i<3;i++){
        hebra_fumador[i].join();
    }
    return 0;
}
