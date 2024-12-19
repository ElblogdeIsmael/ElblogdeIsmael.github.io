# Explicación del Ejecutivo Cíclico y Ciclos Secundarios

## Introducción
Un **ejecutivo cíclico** es una estrategia de programación utilizada en sistemas de tiempo real para planificar y ejecutar tareas con restricciones temporales. Este método organiza la ejecución de tareas dentro de ciclos fijos, garantizando que todas las tareas se completen en los tiempos establecidos.

En esta práctica, trabajamos con un sistema implementado en C++11 que utiliza un ejecutivo cíclico. A continuación, se explican los conceptos clave, el propósito de las modificaciones realizadas y cómo se relacionan entre sí.

---

## Conceptos Clave

### Ciclo Principal
El **ciclo principal** es el ciclo global que se repite indefinidamente durante la ejecución del sistema. Su duración se denomina **tiempo maestro** (TM), y está diseñado para cubrir al menos el período más largo de las tareas programadas. En este caso, TM es de 1000 ms, ya que es el mínimo común múltiplo de los períodos de todas las tareas:

```
TM = mcm(250, 500, 1000) = 1000 ms
```

### Ciclo Secundario
Un **ciclo secundario** es una subdivisión del ciclo principal. Su duración, denominada **Ts**, organiza la ejecución de tareas que tienen diferentes períodos y tiempos de cómputo. En el código, el ciclo secundario tiene una duración de **250 ms**:

```cpp
const milliseconds Ts_ms(250);
```

En cada ciclo secundario, se ejecutan un conjunto de tareas específicas, asegurando que estas tareas se realicen dentro de su período. Por ejemplo:

| Iteración | Tareas Ejecutadas             |
|-----------|-------------------------------|
| 1         | Tarea A, Tarea B, Tarea C    |
| 2         | Tarea A, Tarea B, Tarea D, E |
| 3         | Tarea A, Tarea B, Tarea C    |
| 4         | Tarea A, Tarea B, Tarea D    |

El **ciclo principal** contiene cuatro **ciclos secundarios**, que juntos cubren los 1000 ms del ciclo maestro.

---

## Modificaciones Realizadas
El objetivo principal de la modificación es medir y reportar el retraso que ocurre al final de cada ciclo secundario debido a limitaciones del sistema operativo o de hardware. Este retraso puede acumularse y afectar el rendimiento global del sistema.

### Pasos para la Modificación

#### 1. Calcular el Instante Real al Final del Ciclo Secundario
Al final de cada iteración del ciclo secundario, después de la instrucción `sleep_until`, se obtiene el instante real en el que el programa ha retomado su ejecución:

```cpp
time_point<steady_clock> fin_real = steady_clock::now();
```

#### 2. Calcular el Retraso
El retraso se calcula como la diferencia entre el instante real (`fin_real`) y el instante esperado (`ini_sec`), ambos medidos utilizando el reloj monotónico `steady_clock`:

```cpp
milliseconds_f retraso = milliseconds_f(fin_real - ini_sec);
```

#### 3. Informar el Retraso
Finalmente, se muestra el valor del retraso en milisegundos en la consola:

```cpp
cout << "Retraso en esta iteración: " << retraso.count() << " ms." << endl;
```

---

## Código Modificado
A continuación, se presenta el código completo del archivo `ejecutivo1-compr.cpp`, que incluye las modificaciones solicitadas:

```cpp
#include <string>
#include <iostream> // cout, cerr
#include <thread>
#include <chrono>   // utilidades de tiempo
#include <ratio>    // std::ratio_divide

using namespace std;
using namespace std::chrono;
using namespace std::this_thread;

typedef duration<float, ratio<1, 1000>> milliseconds_f;

void Tarea(const std::string &nombre, milliseconds tcomputo)
{
    cout << "   Comienza tarea " << nombre << " (C == " << tcomputo.count() << " ms.) ... ";
    sleep_for(tcomputo);
    cout << "fin." << endl;
}

void TareaA() { Tarea("A", milliseconds(100)); }
void TareaB() { Tarea("B", milliseconds(80)); }
void TareaC() { Tarea("C", milliseconds(50)); }
void TareaD() { Tarea("D", milliseconds(40)); }
void TareaE() { Tarea("E", milliseconds(20)); }

int main(int argc, char *argv[])
{
    const milliseconds Ts_ms(250);
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

            switch (i)
            {
            case 1:
                TareaA();
                TareaB();
                TareaC();
                break;
            case 2:
                TareaA();
                TareaB();
                TareaD();
                TareaE();
                break;
            case 3:
                TareaA();
                TareaB();
                TareaC();
                break;
            case 4:
                TareaA();
                TareaB();
                TareaD();
                break;
            }

            ini_sec += Ts_ms; // calcular instante inicial para siguiente iteración
            sleep_until(ini_sec);

            // calcular y mostrar retraso
            time_point<steady_clock> fin_real = steady_clock::now();
            milliseconds_f retraso = milliseconds_f(fin_real - ini_sec);
            cout << "Retraso en esta iteración: " << retraso.count() << " ms." << endl;
        }
    }
}
```

---

## Conclusiones
- **Uso de Relojes Monotónicos**: La elección de `steady_clock` garantiza que las mediciones de tiempo no se vean afectadas por cambios en la hora del sistema.
- **Medición de Retrasos**: Las funciones `sleep_for` y `sleep_until` no garantizan una precisión exacta, ya que dependen de la disponibilidad del procesador. El retraso reportado nos ayuda a entender y diagnosticar estos desfases.
- **Ciclos Secundarios**: Dividir el ciclo principal en ciclos secundarios facilita la planificación y ejecución de tareas con diferentes períodos.

Este sistema modificado permite evaluar el rendimiento de un ejecutivo cíclico en condiciones reales, identificando posibles problemas relacionados con los tiempos de ejecución.
