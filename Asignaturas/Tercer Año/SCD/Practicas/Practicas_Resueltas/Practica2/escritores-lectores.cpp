//modelo de los escritores-lectores dando prioridad a los lectores

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


int num_lectores=2;
int num_escritores=4;




//Declaramos la clase del Monitor
class Lec_Esc : public HoareMonitor{
    private:
    int n_lec; // numero de lectores leyendo, inicialmente 0
    bool escrib; // vale true si hay escritores escribiendo. false si no hay escritores escribiendo
    //estas variables reflejan el estado del monitor cuando no se esta ejecutando código del mismo por ninguna hebra.

    CondVar lectura, escritura; //variables de condición para lectura y escritura
    
    public:
    //Constructor
    Lec_Esc();
    void ini_lectura(); //inicializa la lectura
    void fin_lectura(); //finaliza la lectura
    void ini_escritura(); //inicializa la escritura
    void fin_escritura(); //finaliza la escritura


};


//Implementamos los métodos de la clase Lec_Esc

Lec_Esc::Lec_Esc(){
    lectura = newCondVar();
    escritura = newCondVar();
    n_lec = 0;
    escrib = false;
}

void Lec_Esc::ini_lectura(){
    if(escrib){//si hay un escritor
        lectura.wait(); //esperamos a que el escritor termine
    }
    n_lec++; //registramos un lector más
    lectura.signal(); //despertamos a otro lector si lo hubiera en estado bloqueado
}

void Lec_Esc::fin_lectura(){
    n_lec--; //un lector menos
    if(n_lec == 0){//si es el último escritor
        escritura.signal(); //despertamos a un escritor si lo hubiera en estado bloqueado
    }
}

void Lec_Esc::ini_escritura(){
    if (n_lec > 0 || escrib){ // si hay otros escritores, esperamos
        escritura.wait(); //esperamos a que no haya lectores ni escritores
    }
    escrib = true; //indicamos que hay un escritor escribiendo
}

void Lec_Esc::fin_escritura(){
    escrib = false; //indicamos que no hay escritores escribiendo
    if(lectura.get_nwt() > 0){ //la funcion get_nwt devuelve el número de elementos que esperan en la cola, en este caso los lectores.
        lectura.signal(); //despertamos a un lector si lo hubiera en estado bloqueado
    }else{
        escritura.signal(); //despertamos a un escritor si lo hubiera en estado bloqueado
    }
}

//funcion que simula la lectura
void funcion_hebra_lector(int i, MRef<Lec_Esc> monitor){
    while(true){
        monitor->ini_lectura();
        cout << "Lector " << i << " leyendo" << endl;
        monitor->fin_lectura();
        this_thread::sleep_for(milliseconds(aleatorio<50,1000>()));
        
    }
}

//funcion que simula la escritura
void funcion_hebra_escritor(int i, MRef<Lec_Esc> monitor){
    while(true){
        monitor->ini_escritura();
        cout << "Escritor " << i << " escribiendo" << endl;
        monitor->fin_escritura();
        this_thread::sleep_for(milliseconds(aleatorio<50,1000>()));

    }
}

int main(){
    MRef<Lec_Esc> monitor = Create<Lec_Esc>();
    vector<thread> lectores, escritores;
    for(int i = 0; i < num_escritores; i++){
        escritores.push_back(thread(funcion_hebra_escritor, i, monitor));
    }
    for(int i = 0; i < num_lectores; i++){
        lectores.push_back(thread(funcion_hebra_lector, i, monitor));
    }
    for(int i = 0; i < num_escritores; i++){
        escritores[i].join();
    }
    for(int i = 0; i < num_lectores; i++){
        lectores[i].join();
    }
    return 0;
}