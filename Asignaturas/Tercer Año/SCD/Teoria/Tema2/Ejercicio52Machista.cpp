#include <iostream>
#include <thread>
#include <semaphore.h>
#include <vector>
#include <chrono>

using namespace std;

sem_t mutex, maxChicos, chicoS, chicaS;
int nc = 0, esperan_a = 0, esperan_c = 0;
bool chica_dentro = false;

void entrar_chico() {
    sem_wait(&maxChicos);
    sem_wait(&mutex);
    if (chica_dentro) {
        esperan_c++;
        sem_post(&mutex);
        sem_wait(&chicoS);
        esperan_c--;
    }
    nc++;
    if (esperan_c > 0 && nc < 5) {
        sem_post(&chicoS);
    } else {
        sem_post(&mutex);
    }
}

void salir_chico() {
    sem_wait(&mutex);
    nc--;
    if (esperan_c > 0 && nc < 5) {
        sem_post(&chicoS);
    } else if (esperan_a > 0 && nc == 0) {
        sem_post(&chicaS);
    } else {
        sem_post(&mutex);
    }
    sem_post(&maxChicos);
}

void entrar_chica() {
    sem_wait(&mutex);
    if (nc > 0 || chica_dentro || esperan_c > 0) {
        esperan_a++;
        sem_post(&mutex);
        sem_wait(&chicaS);
        esperan_a--;
    }
    chica_dentro = true;
    sem_post(&mutex);
}

void salir_chica() {
    sem_wait(&mutex);
    chica_dentro = false;
    if (esperan_c > 0) {
        sem_post(&chicoS);
    } else if (esperan_a > 0) {
        sem_post(&chicaS);
    } else {
        sem_post(&mutex);
    }
}

void prueba() {
    thread chicos[10];
    thread chicas[3];

    for (int i = 0; i < 10; ++i) {
        chicos[i] = thread([]() {
            this_thread::sleep_for(chrono::milliseconds(rand() % 100));
            entrar_chico();
            cout << "Chico entrando.\n";
            this_thread::sleep_for(chrono::milliseconds(500));
            salir_chico();
            cout << "Chico saliendo.\n";
        });
    }

    for (int i = 0; i < 3; ++i) {
        chicas[i] = thread([]() {
            this_thread::sleep_for(chrono::milliseconds(rand() % 100));
            entrar_chica();
            cout << "Chica entrando.\n";
            this_thread::sleep_for(chrono::milliseconds(500));
            salir_chica();
            cout << "Chica saliendo.\n";
        });
    }

    for (int i = 0; i < 10; ++i) chicos[i].join();
    for (int i = 0; i < 3; ++i) chicas[i].join();
}

int main() {
    sem_init(&mutex, 0, 1);
    sem_init(&maxChicos, 0, 5);
    sem_init(&chicoS, 0, 0);
    sem_init(&chicaS, 0, 0);

    prueba();

    sem_destroy(&mutex);
    sem_destroy(&maxChicos);
    sem_destroy(&chicoS);
    sem_destroy(&chicaS);

    return 0;
}
