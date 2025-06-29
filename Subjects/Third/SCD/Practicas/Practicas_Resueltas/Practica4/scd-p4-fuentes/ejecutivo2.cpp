// -----------------------------------------------------------------------------
// Sistemas concurrentes y Distribuidos.
// Práctica 4. Implementación de sistemas de tiempo real.
//
// Archivo: ejecutivo2.cpp
// Implementación del ejecutivo cíclico con nueva planificación:
//
//   Datos de las tareas:
//   ------------
//   Ta.   T     C
//   ------------
//   A    500   100
//   B    500   150
//   C   1000   200
//   D   2000   240
//   ------------
//
// Planificación (con Ts == 500 ms)
//  *-----------*-----------*-----------*-----------*
//  | A B       | A B       | C         | D         |
//  *-----------*-----------*-----------*-----------*
//
//
// Historial:
// Creado en Junio de 2024
// -----------------------------------------------------------------------------

#include <string>
#include <iostream> // cout, cerr
#include <thread>
#include <chrono>   // utilidades de tiempo
#include <ratio>    // std::ratio_divide
#include <iomanip>  // setw

using namespace std;
using namespace std::chrono;
using namespace std::this_thread;

// Tipo para duraciones en segundos y milisegundos, en coma flotante:
typedef duration<float, ratio<1, 1000>> milliseconds_f;

// -----------------------------------------------------------------------------
// Tarea genérica: duerme durante un intervalo de tiempo (de determinada duración)

void Tarea(const std::string &nombre, milliseconds tcomputo)
{
    cout << "   Comienza tarea " << nombre << " (C == " << tcomputo.count() << " ms.) ... ";
    sleep_for(tcomputo);
    cout << "fin." << endl;
}

// -----------------------------------------------------------------------------
// Tareas concretas del problema:

void TareaA() { Tarea("A", milliseconds(100)); }
void TareaB() { Tarea("B", milliseconds(150)); }
void TareaC() { Tarea("C", milliseconds(200)); }
void TareaD() { Tarea("D", milliseconds(240)); }

// -----------------------------------------------------------------------------
// Implementación del ejecutivo cíclico:

int main(int argc, char *argv[])
{
    // Ts = duración del ciclo secundario (en unidades de milisegundos, enteros)
    const milliseconds Ts_ms(500);

    // ini_sec = instante de inicio de la iteración actual del ciclo secundario
    time_point<steady_clock> ini_sec = steady_clock::now();

    while (true) // ciclo principal
    {
        cout << endl
             << "---------------------------------------" << endl
             << "Comienza iteración del ciclo principal." << endl;

        for (int i = 1; i <= 4; i++) // ciclo secundario (4 iteraciones)
        {
            cout << endl
                 << "Comienza iteración " << i << " del ciclo secundario." << endl;

            time_point<steady_clock> inicio_iteracion = steady_clock::now();

            switch (i)
            {
            case 1:
                TareaA();
                TareaB();
                break;
            case 2:
                TareaA();
                TareaB();
                break;
            case 3:
                TareaC();
                break;
            case 4:
                TareaD();
                break;
            }

            // calcular el siguiente instante de inicio del ciclo secundario
            ini_sec += Ts_ms;

            // esperar hasta el inicio de la siguiente iteración del ciclo secundario
            sleep_until(ini_sec);

            // medir el retraso respecto al tiempo teórico esperado
            time_point<steady_clock> fin_iteracion = steady_clock::now();
            //milliseconds retraso = duration_cast<milliseconds>(fin_iteracion - ini_sec);
            milliseconds_f retraso =(fin_iteracion - ini_sec);
            cout << "Retraso al final de la iteración " << i << ": " << retraso.count() << " ms." << endl;
        }
    }
}
