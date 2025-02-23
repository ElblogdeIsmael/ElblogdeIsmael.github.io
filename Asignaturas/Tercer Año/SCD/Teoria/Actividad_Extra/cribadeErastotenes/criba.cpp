#include <mpi.h>
#include <iostream>
using namespace std;

int main(int argc, char *argv[]) {
    int rank, size, x, valor;       // Identificadores de rango, tamaño y valores
    int i = 1;                     // Índice para números primos
    bool fin = false;              // Indica si el procesamiento debe finalizar
    MPI_Status status;             // Estado para recibir información de mensajes
    MPI_Request request;           // Request para comunicación no bloqueante
    const int nLimite = 100;       // Límite de números primos a procesar

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
        // Proceso principal (generador): envía números naturales al primer filtro
        x = 2; // El primer número primo
        MPI_Send(&x, 1, MPI_INT, size - 1, 0, MPI_COMM_WORLD); // Envía 2 directamente al impresor
        while (!fin) {
            i += 1;
            x = i;
            if (x > nLimite) {
                fin = true;
                x = -1; // Señal de finalización
            }
            MPI_Send(&x, 1, MPI_INT, 1, 0, MPI_COMM_WORLD); // Envía números al primer filtro
            MPI_Irecv(&x, 1, MPI_INT, size - 1, MPI_ANY_TAG, MPI_COMM_WORLD, &request);
        }
    } else if (rank == size - 1) {
        // Último proceso (impresor): imprime números primos recibidos
        while (!fin) {
            MPI_Recv(&valor, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, &status);
            if (valor == -1) { // Señal de finalización
                fin = true;
            } else {
                cout << "Proceso " << rank << ": " << valor << " es primo." << endl;
            }
        }
    } else {
        // Procesos intermedios (filtros): filtran números no primos
        MPI_Recv(&valor, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, &status); // Reciben el primer número
        int primo = valor; // El número primo que filtra
        MPI_Send(&primo, 1, MPI_INT, size - 1, 0, MPI_COMM_WORLD); // Envían el primo al impresor
        while (!fin) {
            MPI_Recv(&x, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, &status); // Reciben números del filtro anterior
            if (x == -1) { // Señal de finalización
                fin = true;
                MPI_Send(&x, 1, MPI_INT, rank + 1, 0, MPI_COMM_WORLD); // Propagan la señal de finalización
            } else if (x % primo != 0) { // Si el número no es divisible por el primo actual
                if (rank < size - 2) {
                    MPI_Send(&x, 1, MPI_INT, rank + 1, 0, MPI_COMM_WORLD); // Envía al siguiente filtro
                } else {
                    MPI_Send(&x, 1, MPI_INT, size - 1, 0, MPI_COMM_WORLD); // Envía al impresor
                }
            }
            MPI_Irecv(&x, 1, MPI_INT, size - 1, MPI_ANY_TAG, MPI_COMM_WORLD, &request);
        }
    }

    MPI_Finalize(); // Finaliza el entorno MPI
    return 0;
}
