#include <iostream>
#include <cassert>
#include <thread>
#include <random>
#include <vector>
#include "scd.h"

using namespace std;
using namespace scd;

//**********************************************************************
// Variables globales

const unsigned num_items = 40;    // número total de ítems a producir/consumir
const unsigned tam_vec = 10;      // tamaño del buffer compartido

// Configurables: número de hebras productoras (np) y consumidoras (nc)
const int np = 4;                 // número de hebras productoras
const int nc = 2;                 // número de hebras consumidoras

const int p = num_items / np;      // ítems que produce cada productor
const int c = num_items / nc;      // ítems que consume cada consumidor

int buffer[tam_vec];              // buffer de datos compartido
int primera_libre = 0;       // índice de la primera celda libre del buffer
//unsigned primera_ocupada = 0;     // índice del primer dato ocupado en el buffer

unsigned cont_prod[np] = {0};     // array que guarda cuántos ítems ha producido cada productor
unsigned cont_cons[num_items] = {0}; // contadores para verificar consumo de cada dato

Semaphore libres(tam_vec);        // semáforo que cuenta los huecos libres en el buffer
Semaphore ocupadas(0);            // semáforo que cuenta los ítems disponibles en el buffer
Semaphore acceso_exclusivo(1);    // semáforo para garantizar acceso exclusivo al buffer

//**********************************************************************
// Función para producir un dato (simula la producción de datos)
// Recibe como parámetro el número de la hebra productora.
unsigned producir_dato(int num_hebra) {
    // La hebra productora número i produce los ítems entre i * p y (i+1) * p - 1
    unsigned dato_producido = num_hebra * p + cont_prod[num_hebra];
    cont_prod[num_hebra]++;
    this_thread::sleep_for(chrono::milliseconds(aleatorio<20, 100>()));
    cout << "Productor " << num_hebra << " ha producido: " << dato_producido << endl;
    return dato_producido;
}

// Función para consumir un dato (simula el consumo de datos)
// Recibe como parámetro el número de la hebra consumidora.
void consumir_dato(unsigned dato, int num_hebra) {
    assert(dato < num_items);
    cont_cons[dato]++;
    this_thread::sleep_for(chrono::milliseconds(aleatorio<20, 100>()));
    cout << "Consumidor " << num_hebra << " ha consumido: " << dato << endl;
}

// Función que ejecuta la hebra productora (FIFO)
void funcion_hebra_productora(int num_hebra) {
    for (unsigned i = 0; i < p; i++) {
        unsigned dato = producir_dato(num_hebra);  // Produce un dato

        libres.sem_wait();                 // Espera un hueco libre en el buffer
        acceso_exclusivo.sem_wait();       // Acceso exclusivo al buffer
        buffer[primera_libre] = dato;      // Coloca el dato en el buffer
        primera_libre = (primera_libre + 1);  // Actualiza índice de libre
        acceso_exclusivo.sem_signal();     // Libera el acceso exclusivo al buffer
        ocupadas.sem_signal();             // Señala que hay un ítem disponible
    }
}

// Función que ejecuta la hebra consumidora (FIFO)
void funcion_hebra_consumidora(int num_hebra) {
    for (unsigned i = 0; i < c; i++) {
        ocupadas.sem_wait();               // Espera que haya ítems disponibles
        acceso_exclusivo.sem_wait();       // Acceso exclusivo al buffer
        primera_libre--; //decrementamos el contador de la primera libre
        unsigned dato = buffer[primera_libre]; // Toma el dato del buffer
        acceso_exclusivo.sem_signal();     // Libera el acceso exclusivo al buffer
        libres.sem_signal();               // Señala que hay un hueco libre

        consumir_dato(dato, num_hebra);    // Consume el dato
    }
}

//**********************************************************************
// Función para verificar la consistencia de la producción y consumo
void test_contadores() {
    bool correcto = true;
    cout << "Comprobando contadores..." << endl;
    for (unsigned i = 0; i < num_items; i++) {
        if (cont_prod[i % np] != p) {
            cout << "Error: Hebra productora " << (i % np) << " ha producido incorrectamente." << endl;
            correcto = false;
        }
        if (cont_cons[i] != 1) {
            cout << "Error: Dato " << i << " consumido " << cont_cons[i] << " veces." << endl;
            correcto = false;
        }
    }
    if (correcto) {
        cout << "Solución correcta." << endl;
    }
}

//**********************************************************************
// Programa principal
int main() {
    cout << "Problema de los productores-consumidores (solución con semáforos, múltiples hebras)." << endl;

    // Lanzar hebras productoras y consumidoras
    thread productores[np], consumidores[nc];

    for (int i = 0; i < np; i++) {
        productores[i] = thread(funcion_hebra_productora, i);
    }

    for (int i = 0; i < nc; i++) {
        consumidores[i] = thread(funcion_hebra_consumidora, i);
    }

    // Esperar a que terminen todas las hebras
    for (int i = 0; i < np; i++) {
        productores[i].join();
    }

    for (int i = 0; i < nc; i++) {
        consumidores[i].join();
    }

    // Comprobación final de los contadores
    test_contadores();
}
