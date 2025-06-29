// -----------------------------------------------------------------------------
// Ismael Sallami Moreno DNI:20888108Z

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
//   A    800   120
//   B    200    30
//   C    400   100
//   D    200    40
//   ------------
//
// Planificación (con Ts == 200 ms)
//  *-----------*-----------*-----------*-----------*
//  | A B D     | B C D    | B D        | B C D     |
//  *-----------*-----------*-----------*-----------*
//
//
// Historial:
// Creado en Junio de 2024
// -----------------------------------------------------------------------------

//------RESPUESTAS A LAS PREGUNTAS-----------------------------------------------

// PREGUNTA 1: ¿Cuál es el mínimo tiempo de espera que queda al final de las iteraciones 
// del ciclo secundario con tu solución?

// RESPUESTA 1: En base al primer ciclo secundario, podemos observar que el tiempo mínimo de cómputo total, es de
// 10 ms (200ms-190ms).

// PREGUNTA 2: ¿Sería planificable si la tarea B tuviese un tiempo cómputo de 40 ms?

// RESPUESTA 2: En caso de que la tarea B tuviese un tiempo de cómputo de 40 ms, el ciclo secundario en la primera 
// iteración tendría justo Ts que es 200 ms, pero hay que tener en cuenta el tiempo de retraso que en nuestro caso al usar una máquina ubuntu va a ser en la mayoría de casos menor a 1 ms. Por lo tanto, si la tarea B tuviese un tiempo de cómputo de 40ms, no sería planificable. Esta es una posible respuesta, también podemos pensar que al ser  un tiempo de retraso mínimo se puede obviar, según la teoría expuesta en clase.

//------RESPUESTAS A LAS PREGUNTAS-----------------------------------------------


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

void TareaA() { Tarea("A", milliseconds(120)); }
void TareaB() { Tarea("B", milliseconds(30)); }
void TareaC() { Tarea("C", milliseconds(100)); }
void TareaD() { Tarea("D", milliseconds(40)); }

// -----------------------------------------------------------------------------
// Implementación del ejecutivo cíclico:

int main(int argc, char *argv[])
{
    // Ts = duración del ciclo secundario (en unidades de milisegundos, enteros)
    const milliseconds Ts_ms(200);

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
                TareaD();
                break;
            case 2:
                TareaB();
                TareaC();
                TareaD();
                break;
            case 3:
                TareaB();
                TareaD();
                break;
            case 4:
                TareaB();
                TareaC();
                TareaD();
                break;
            }

            // calcular el siguiente instante de inicio del ciclo secundario
            ini_sec += Ts_ms;

            // esperar hasta el inicio de la siguiente iteración del ciclo secundario
            sleep_until(ini_sec);

            // medir el retraso respecto al tiempo teórico esperado
            time_point<steady_clock> fin_iteracion = steady_clock::now();
            milliseconds_f retraso = milliseconds_f(fin_iteracion - ini_sec);
            cout << "Retraso al final de la iteración " << i << ": " << retraso.count() << " ms." << endl;
        }
    }
}
