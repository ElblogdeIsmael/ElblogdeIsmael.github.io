#include <mpi.h>
#include <iostream>
using namespace std;

int main(int argc, char *argv[]) {
    int rank, size, x, valor;       // Variables para identificar rango, tamaño y valores
    bool fin = false;              // Indica si el procesamiento debe finalizar
    MPI_Status status;             // Estado para recibir información de mensajes
    const int nLimite = 100;       // Número límite para el cálculo de números primos

    MPI_Init(&argc, &argv);                      // Inicializa el entorno MPI
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);        // Obtiene el rango del proceso actual
    MPI_Comm_size(MPI_COMM_WORLD, &size);        // Obtiene el número total de procesos

    if (size < 3) {
        if (rank == 0) {
            cerr << "Se requieren al menos 3 procesos para ejecutar este programa." << endl;
        }
        MPI_Abort(MPI_COMM_WORLD, 1); // Aborta la ejecución si hay menos de 3 procesos
    }

    if (rank == 0) {
        // Proceso principal: genera números y los envía al primer filtro
        for (x = 2; !fin; x++) { // Itera sobre números naturales comenzando desde 2
            MPI_Send(&x, 1, MPI_INT, 1, 0, MPI_COMM_WORLD); // Envía cada número al primer filtro
            if (x > nLimite) { // Determinamos como rango máximo el nLimite
                int signal = -1; // Señal de finalización del proceso
                MPI_Send(&signal, 1, MPI_INT, 1, 0, MPI_COMM_WORLD); // Envía la señal de finalización 
                fin = true; // Finaliza el bucle
            }
        }
    } else if (rank == size - 1) {
        // Último proceso (impresor): recibe números primos y los imprime
        if (rank == size - 1) {
            cout << "Proceso " << rank << ": 2 es primo." << endl; // Imprime que 2 es primo
            cout << "Proceso " << rank << ": 3 es primo." << endl; // Imprime que 3 es primo
        }

        while (!fin) {
            MPI_Recv(&valor, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, &status); // Recibe números del filtro anterior
            if (valor == -1) { // Señal de finalización
                fin = true; // Finaliza el bucle
            } else {
                cout << "Proceso " << rank << ": " << valor << " es primo." << endl; // Imprime el número primo
            }
        }
    } else {
        // Procesos intermedios (filtros): filtran números según su rango
        MPI_Recv(&valor, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, &status); // Recibe el primer número primo
        int primo = valor; // Almacena el número primo que filtra
        while (!fin) {
            MPI_Recv(&valor, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, &status); // Recibe el siguiente número
            if (valor == -1) { // Señal de finalización
                MPI_Send(&valor, 1, MPI_INT, rank + 1, 0, MPI_COMM_WORLD); // Propaga la señal de finalización
                fin = true; // Finaliza el bucle
            } else if (valor % primo != 0) { // Si el número no es divisible por el primo actual
                if (rank < size - 2) {
                    MPI_Send(&valor, 1, MPI_INT, rank + 1, 0, MPI_COMM_WORLD); // Envía al siguiente filtro
                } else {
                    MPI_Send(&valor, 1, MPI_INT, size - 1, 0, MPI_COMM_WORLD); // Envía al impresor
                }
            }
        }
    }

    MPI_Finalize(); // Finaliza el entorno MPI
    return 0;
}
