# SCD.Relación de Ejercicios del Tema 2 : Monitores

- Autor: Ismael Sallami Moreno 

---

## 51. El cuadro que sigue nos muestra dos procesos concurrentes, P1 y P2, que comparten una variable global `x` y las restantes variables son locales a los procesos. Se pide:

### (a) Sincronizar los procesos para que P1 use todos los valores x suministrados por P2.

### (b) Sincronizar los procesos para que P1 utilice un valor sí y otro no de la variable x, es decir, utilice los valores primero, tercero, quinto, etc. que vaya alcanzando dicha variable.

```javascript
{variables globales}
proceso P1;
  var m: integer;
  begin
    while true do
      begin
        m:= 2*x - n;
        print(m);
      end
  end

proceso P2;
  var d: integer;
  begin
    while true do
      begin
        d:= leer_teclado();
        x:= d - c*5;
      end
  end
```

### Apartado a:

<!-- Se asemeja al problema del prodcutor-consumidor, por lo que la solución a dicho problema sería:

```plaintext
Monitor PC; {monitor productor consumidor}

    var valor_com: integer 
        // valor compartido
    pendiente : boolean; 
        // true si el valor ha sido escrito pero no ha sido consumido
    cola_prod: condition;
        //espera productor hasta que pendiente = false
    cola_cons: condition
        //espera consumidor hasta que pendiente = true

    procedure escribir (v:integer);
    begin   
        if pendiente then
        cola_prod.wait();
        valor_com = v;
        pendiente = true;
        cola_cons.signal();
    end


    function leer():integer
    begin
        if (not pendiente)
            cola_cons.wait();
            result:=valor_com;
            pendiente = false;
            cola_cons.signal();
    end

    //inicialización
    begin
        pendiente = false;
    end




``` -->

`los comentarios en verde hacen referencia a lo que se debe de añadir en el código para realizar lo que el enunciado pide`

``` javascript
{variables globales}
proceso P1;
  var m: integer;
  begin
    while true do
      //sem_wait(ya_calculado);
      begin
        m:= 2*x - n;
        print(m);
        //sem_signal(ya_leido);
      end
  end

proceso P2;
  var d: integer;
  begin
    while true do
      //sem_wait(ya_leido);
      begin
        d:= leer_teclado();
        x:= d - c*5;
        //sem_signal(ya_calculado);
      end
  end

  //inicializacion
  init(ya_calculado,0); // 0 si no se ha calculado, 1 en caso contrario
  init(ya_leido,1); // 1 si no se ha leido, 0 en caso contrario

```




### Apartado b:
``` javascript
{variables globales}
proceso P1;
  var m: integer;
  begin
    while true do
      //sem_wait(ya_calculado);
      begin
        m:= 2*x - n;
        print(m);
        //sem_signal(ya_leido);
        //sem_wait(ya_calculado);
        //sem_signal(ya_leido); -> par omitir el 2º valor producido 
      end
  end

proceso P2;
  var d: integer;
  begin
    while true do
      //sem_wait(ya_leido);
      begin
        d:= leer_teclado();
        x:= d - c*5;
        //sem_signal(ya_calculado);
      end
  end

  //inicializacion
  init(ya_calculado,0); // 0 si no se ha calculado, 1 en caso contrario
  init(ya_leido,1); // 1 si no se ha leido, 0 en caso contrario

```

## 52. Supongamos que estamos en una discoteca y resulta que está estropeado el servicio de chicas y todos tienen que compartir el de chicos. Se pretende establecer un protocolo de entrada al servicio usando semáforos que asegure siempre el cumplimiento de las siguientes restricciones:
- **Chicas:** sólo puede estar 1 dentro del servicio.
- **Chicos:** pueden entrar más de 1, pero como máximo se admitirán a 5 dentro del servicio.

### Versión machista del protocolo:
Los chicos tienen preferencia sobre las chicas. Esto quiere decir que si una chica está esperando entrar al servicio y llega un chico, este puede pasar y ella sigue esperando. Incluso si el chico que ha llegado no pudiera entrar inmediatamente porque ya hay 5 chicos dentro del servicio, sin embargo, pasará antes que la chica cuando salga algún chico del servicio.

### Versión feminista del protocolo:
Las chicas tienen preferencia sobre los chicos. Esto quiere decir que si un chico está esperando y llega una chica, ésta debe pasar antes. Incluso si la chica que ha llegado no puede entrar inmediatamente al servicio porque ya hay una chica dentro, pasará antes que el chico cuando salga la chica que está dentro.

### Se pide:
Implementar las 2 versiones del protocolo anterior utilizando semáforos POSIX.

### Ayuda sobre la sintaxis de las operaciones de los semáforos (no nombrados) de POSIX 1003:

```c
inicialización: int sem_init(sem_t* semaforo, int pcompartido, unsigned int contador)
destrucción: int sem_destroy(sem_t* semaforo)
sincronización-espera: int sem_wait(sem_t* semaforo)
sincronización-señala: int sem_post(sem_t* semaforo)
```

### Notas:
- (a) El valor inicial del semáforo se le asigna a contador. Si pcompartido es distinto de cero, entonces el semáforo puede ser utilizado por hilos que residen en procesos diferentes; si no, solo puede ser utilizado por hilos dentro del espacio de direcciones de un único proceso.
- (b) Para que se pueda destruir, el semáforo ha debido ser explícitamente inicializado mediante la operación `sem_init(...)`. La operación anterior no debe ser utilizada con semáforos nombrados.
- (c) Los hilos llamarán a la función `sem_wait(sem_t* semaforo)`, pasándole un identificador de semáforo inicializado con el valor ‘0’, para sincronizarse con una condición. Si el valor del semáforo fuera distinto de ‘0’, entonces el valor de s se decrementa en una unidad y no bloquea.
- (d) La operación `int sem_post(sem_t* semaforo)` sirve para señalar a los hilos bloqueados en un semáforo y hace que uno pase a estar preparado para ejecutarse. Si no hay hilos bloqueados en este semáforo, entonces la ejecución de esta operación simplemente incrementa el valor de la variable protegida(s) del semáforo. Hay que tener en cuenta que no existe ningún orden de desbloqueo definido para los varios hilos esperando en la cola asociada a un semáforo, ya que la implementación a nivel de sistema de la operación anterior suele ser un algoritmo puede escoger para desbloquear a cualquiera de los hilos que esperan. En particular, podría darse el siguiente escenario, otro hilo ejecutándose puede decrementar el valor de semáforo antes que cualquier hilo que vaya a ser desbloqueado como resultado de `sem_post(...)` lo pueda hacer y, posteriormente, se volvería a bloquear el hilo desbloqueado.

---
### Resolución:

#### Versión feminista:

<!-- ```javascript
var (nc, esperan_a, esperan_c) : integer -> version de clase
/*
* nc = número de chicos dentro del baño
* esperan_a = chicas que estan esperando
* esperan_c = chicos que estan esperando
*/

chica_dentro:boolean;
// para la exclusion mutua
mutex, max, chico_s, chica_s : semaphore;

//inicializacion
nc = esperan_a; esperan_c = 0;
chica_dentro = false;
init(mutex,1);
init(max,5);
init(chico_s,0)
init(chica_s,0)

procedure entrar_chico(){
    begin
        sem_wait(max);
        sem_wait(mutex);
        if(chica_dentro or esperan_a) then
            begin
            sem_signal(mutex); //activamos el candado para la exclusion mutua
            sem_wait(chico_s);
            esperan_c--;
            end;
            nc++;
        if(esperan_c>0 and nc<5) then
            sem_signal(chico_s)
        else sem_signal(mutex);
    end;
}

procedure salir_chico(){
    begin
    sem_wait(mutex); // hago que esto se ejecute en exclusion mutua
    nc--; //sale una chica
    if(esperar_a) then
        sem_signal(chica_s);
    else sem_signal(mutex);

    sem_signal(max);
    end
}

procedure entrar_chica (){
    begin
    sem_wait(mutex);
    if(nc>0 or chica_dentro) then
        begin
        esperan_a++;
        sem_signal(mutex);
        sem_wait(chica_s);
        esperan_a--;
        end;
    chica_dentro:=true;
    sem_signal(mutex);
    end;
}

procedure salir_chica(){
    begin
    sem_wait(mutex);
    chica_dentro:=false;
    if(esperan_a) then sem_signal(chica_s)
    else sem_signal(mutex);
    end;
}


``` -->
``` javascript
Variables:
    nc = número de chicos dentro del baño
    esperan_a = chicas esperando
    esperan_c = chicos esperando
    chica_dentro = boolean, indica si hay una chica dentro del baño

Semáforos:
    mutex = control de exclusión mutua
    max = máximo número de chicos permitidos
    chico_s = sincronización para chicos
    chica_s = sincronización para chicas

Inicialización:
    nc = 0; esperan_a = 0; esperan_c = 0;
    chica_dentro = false;
    inicializar(mutex, 1);
    inicializar(max, 5);
    inicializar(chico_s, 0);
    inicializar(chica_s, 0);

Procedimientos:

entrar_chico():
    begin 
    sem_wait(max); // Disminuye el contador de capacidad
    sem_wait(mutex); // Exclusión mutua
    if (chica_dentro o esperan_a > 0) entonces
        begin
        esperan_c++;
        señal(mutex); // Libera la exclusión mutua
        sem_wait(chico_s); // Espera su turno
        esperan_c--;
        nc++;
        end
    
    if (esperan_c > 0 y nc < 5) then
        sem_signal(chico_s); // Permite a otro chico entrar
    else
        sem_signal(mutex); // Libera la exclusión mutua
    end

salir_chico():
    begin
    sem_wait(mutex); // Exclusión mutua
    nc--;
    if (esperan_a > 0 and nc == 0) then
        sem_signal(chica_s); // Da paso a una chica si no hay chicos
    else
        sem_signal(mutex); // Libera la exclusión mutua
    
    sem_signal(max); // Incrementa el contador de capacidad
    end

entrar_chica():
    begin
    sem_wait(mutex); // Exclusión mutua
    if (nc > 0 or chica_dentro) then
        esperan_a++;
        sem_signal(mutex); // Libera la exclusión mutua
        sem_wait(chica_s); // Espera su turno
        esperan_a--;
    
    chica_dentro = true;
    sem_signal(mutex); // Libera la exclusión mutua
    end

salir_chica():
    begin
    sem_wait(mutex); // Exclusión mutua
    chica_dentro = false;
    si (esperan_a > 0) then
        sem_signal(chica_s); // Da paso a otra chica
    else
        sem_signal(mutex); // Libera la exclusión mutua
    
    end

```

#### Versión Machista:


``` javascript
Variables:
    nc = número de chicos dentro del baño
    esperan_a = chicas esperando
    esperan_c = chicos esperando
    chica_dentro = boolean, indica si hay una chica dentro del baño

Semáforos:
    mutex = control de exclusión mutua
    max = máximo número de chicos permitidos
    chico_s = sincronización para chicos
    chica_s = sincronización para chicas

Inicialización:
    nc = 0; esperan_a = 0; esperan_c = 0;
    chica_dentro = false;
    inicializar(mutex, 1);
    inicializar(max, 5);
    inicializar(chico_s, 0);
    inicializar(chica_s, 0);

Procedimientos:

entrar_chico():
    begin
    sem_wait(max); // Disminuye el contador de capacidad
    sem_wait(mutex); // Exclusión mutua
    if (chica_dentro) entonces
        esperan_c++;
        sem_signal(mutex); // Libera la exclusión mutua
        sem_wait(chico_s); // Espera su turno
        esperan_c--;
    
    nc++;
    if(esperan_c > 0 y nc < 5) entonces
        sem_signal(chico_s); // Permite a otro chico entrar
    else
        sem_signal(mutex); // Libera la exclusión mutua
    
    end

salir_chico():
    begin
    sem_wait(mutex); // Exclusión mutua
    nc--;
    if(esperan_c > 0 y nc < 5) entonces
        sem_signal(chico_s); // Permite a otro chico entrar
    else if (esperan_a > 0 y nc == 0) entonces
        sem_signal(chica_s); // Da paso a una chica si no hay chicos
    else
        sem_signal(mutex); // Libera la exclusión mutua
    
    sem_signal(max); // Incrementa el contador de capacidad
    end

entrar_chica():
    begin
    sem_wait(mutex); // Exclusión mutua
    if(nc > 0 o chica_dentro o esperan_c > 0) entonces
        esperan_a++;
        sem_signal(mutex); // Libera la exclusión mutua
        sem_wait(chica_s); // Espera su turno
        esperan_a--;
    
    chica_dentro = true;
    sem_signal(mutex); // Libera la exclusión mutua
    end

salir_chica():
    begin
    sem_wait(mutex); // Exclusión mutua
    chica_dentro = false;
    if(esperan_c > 0) entonces
        sem_signal(chico_s); // Da paso a un chico
    else if (esperan_a > 0) entonces
        sem_signal(chica_s); // Da paso a otra chica
    else
        sem_signal(mutex); // Libera la exclusión mutua
    
    end
```
## 53. Aunque un monitor garantiza la EM, los procedimientos tiene que ser reentrantes. Explicar por qué.

Los procedimientos de un monitor deben ser **reentrantes** porque los monitores son diseñados para garantizar la **exclusión mutua (EM)** entre los procesos que acceden a recursos compartidos. Sin embargo, la **reentrancia** es necesaria para manejar situaciones donde los procesos pueden ser interrumpidos o bloqueados antes de completar la ejecución de un procedimiento.

### Razones clave:

1. **Interrupciones durante la ejecución**:
   - Si un proceso está ejecutando un procedimiento de un monitor y ocurre una interrupción (por ejemplo, una señal o cambio de contexto), otro proceso podría intentar acceder al monitor. 
   - Para que el sistema no entre en un estado inconsistente, los procedimientos deben ser reentrantes. Esto significa que su estado interno y las variables locales no deben depender de la ejecución previa, permitiendo una entrada segura cuando se reanuda o cuando otros procesos acceden.

2. **Variables locales protegidas**:
   - Los monitores garantizan la EM sobre las variables compartidas, pero las variables **locales** dentro de un procedimiento deben mantenerse independientes entre diferentes invocaciones. Si un procedimiento no es reentrante, podría sobrescribir valores en memoria que se están usando en otra instancia del procedimiento.

3. **Esperas condicionadas (condition variables)**:
   - Los monitores permiten suspender procesos que no pueden continuar su ejecución mediante variables de condición (wait/signal). Si un proceso llama a `wait`, libera el monitor y se bloquea. En este caso, otro proceso podría entrar al monitor y ejecutar el mismo procedimiento, por lo que este debe ser capaz de manejar múltiples invocaciones de manera concurrente.

4. **Ejecución segura tras reanudación**:
   - Si un procedimiento no es reentrante, al ser reanudado podría encontrarse con estados inconsistentes, lo que podría llevar a errores lógicos o bloqueos en el sistema.

### Ejemplo:

Un monitor con un procedimiento que no es reentrante podría fallar de la siguiente manera:

- **Código no reentrante (mala práctica):**
  ```cpp
  monitor Ejemplo {
      int contador = 0; // Variable compartida entre instancias

      procedure incrementar() {
          contador++; // Modifica una variable compartida
          wait(condicion); // Libera el monitor y espera
          contador--; // No es seguro si otro proceso también modifica "contador"
      }
  }
  ```

- **Problema**: Si dos procesos ejecutan `incrementar` de forma intercalada, ambos podrían modificar el mismo `contador`, resultando en inconsistencias.

- **Código reentrante (buena práctica):**
  ```cpp
  monitor Ejemplo {
      int contador = 0; // Variable compartida correctamente protegida

      procedure incrementar() {
          int local = 0; // Uso de variable local para evitar interferencias
          contador++;
          wait(condicion); // Libera el monitor y espera
          local = contador; // Restaura estado si es necesario
          contador--;
      }
  }
  ```

- **Ventaja**: El uso de variables locales asegura que cada instancia del procedimiento funcione de forma independiente.

### Conclusión:

La reentrancia es crucial en procedimientos de monitores para garantizar que la lógica interna sea **segura y consistente**, incluso bajo interrupciones o concurrencia entre procesos. Aunque la EM del monitor protege las variables compartidas, los procedimientos deben diseñarse de forma que no dependan de estados externos ni compartan datos inseguros entre invocaciones.

## 53.1 ¿A que se refiere el término reentrante en este contexto?
Un procedimiento **reentrante** es aquel que puede ser llamado de manera segura incluso si:

1. **Ya está en ejecución** por otro hilo o proceso.
2. Se **interrumpe y se vuelve a invocar** antes de que su ejecución original haya terminado.

Esto significa que el procedimiento no depende de variables globales o estáticas compartidas que puedan ser modificadas por otras instancias del mismo procedimiento o por otros procesos.

En otras palabras, un procedimiento es reentrante si puede ejecutarse simultáneamente en diferentes contextos sin que una instancia interfiera con las demás.

---

### Ejemplo simple de no reentrancia:
```cpp
int global = 0; // Variable global

void no_reentrante() {
    global++;  // Modifica una variable compartida
    // Si es interrumpido aquí y otra instancia de no_reentrante se ejecuta,
    // se altera "global" de forma impredecible.
    global--;
}
```

En este caso:
- Si la función `no_reentrante` es llamada por varios hilos, **el valor de `global` puede corromperse** porque está siendo modificado de forma concurrente.
- La función depende de un estado global (`global`), por lo que no puede ejecutarse en paralelo sin problemas.

---

### Ejemplo de reentrancia:
```cpp
void reentrante() {
    int local = 0;  // Variable local, exclusiva para cada instancia
    local++;        // Modificación segura porque "local" es independiente.
    local--;
}
```

En este caso:
- Cada instancia de `reentrante` utiliza una variable local, por lo que las invocaciones concurrentes no interfieren entre sí.
- No hay acceso a datos globales compartidos que puedan corromperse.

---

### En el contexto de monitores:

Para que un monitor garantice exclusión mutua de forma segura, los procedimientos deben ser reentrantes porque:
1. **Variables protegidas**: Si el monitor protege variables compartidas, el procedimiento no debe depender de variables no protegidas o accesibles globalmente.
2. **Bloqueos y reanudaciones**: Durante la ejecución de un procedimiento, un proceso puede bloquearse (por ejemplo, al llamar a `wait`). Esto libera el monitor, permitiendo que otro proceso entre y potencialmente invoque el mismo procedimiento. Si el procedimiento no es reentrante, las dos instancias podrían interferir entre sí.

### Resumen:
Un procedimiento reentrante:
- No usa variables globales ni estáticas compartidas.
- Almacena sus datos en variables locales o en estructuras adecuadamente protegidas.
- Es seguro de ejecutar de manera concurrente, interrumpida y reanudada sin inconsistencias.

Aquí tienes el enunciado del ejercicio 54 transcrito a Markdown:

---

## 54. Se consideran dos tipos de recursos accesibles por varios procesos concurrentes (denominamos a los recursos como recursos de tipo 1 y de tipo 2). Existen `N_1` ejemplares de recursos de tipo 1 y `N_2` ejemplares de recursos de tipo 2. Para la gestión de estos ejemplares, queremos diseñar un monitor (con semántica SU) que exporta un procedimiento (`pedir_recurso`), para pedir un ejemplar de uno de los dos tipos de recursos. Este procedimiento incluye un parámetro entero (`tipo`), que valdrá 1 ó 2 indicando el tipo del ejemplar que se desea usar, así mismo, el monitor incorpora otro procedimiento (`liberar_recurso`) para indicar que se deja de usar un ejemplar de un recurso previamente solicitado (este procedimiento también admite un entero que puede valer 1 ó 2, según el tipo de ejemplar que se quiera liberar). En ningún momento puede haber un ejemplar de un tipo de recurso en uso por más de un proceso.En este contexto, responde a estas cuestiones:

### (a) Implementa el monitor con los dos procedimientos citados, suponiendo que \(N_1\) y \(N_2\) son dos constantes arbitrarias, mayores que cero.

### (b) El uso de este monitor puede dar lugar a interbloqueo. Esto ocurre cuando más de un proceso, en algún punto en su código, tiene la necesidad de usar dos ejemplares de recursos de distinto tipo a la vez. Describe la secuencia de peticiones (llamadas al procedimiento correspondiente del monitor) que da lugar a interbloqueo.

### (c) Una posible solución al problema anterior es obligar a que si un proceso necesita dos ejemplares, uno de tipo 1 y otro de tipo 2, al llamar a `pedir_recurso`, dando un parámetro especial (por ejemplo, 0 para los recursos de tipo 1 y 2). Esta solución puede dar lugar a inanición. Indica por qué, y da un código, en pseudocódigo, para solicitar dos ejemplares.

---

<!-- ### a)

```cpp
Monitor Recursos_v1;
    var libres: array[1..2] of integer;
        cola: array[1..2] of condition;
    
    begin
        libres[1] = N1;
        libres[2] = N2;
    end
``` -->
### Solución al problema

#### (a) Implementación del monitor

El monitor asegura que en ningún momento dos procesos utilicen el mismo recurso del mismo tipo. Se utilizan contadores para controlar los recursos disponibles y variables de condición para manejar la espera de procesos.

---
`Suponemos que no estamos usando los monitores de Hoare de la clase scd.h, si no que implementamos la clase monitor en base a semáforos, si usamos la clase Monitor Hoare eliminamos el uso de semáforos ya que por defecto las operaciones que se realicen con el monitor cumplirá con el requisito de EM. En esta resolución lo estamos llevando al ámbito de aplicación directamente.`

```cpp
#include <iostream>
#include <thread>
#include <semaphore.h>
#include <vector>

using namespace std;

// Constantes arbitrarias
const int N1 = 3; // Ejemplares de recursos de tipo 1
const int N2 = 2; // Ejemplares de recursos de tipo 2

class Monitor {
private:
    sem_t mutex;  // Exclusión mutua
    sem_t tipo1, tipo2; // Semáforos para manejar espera de recursos
    int disponibles1; // Recursos disponibles de tipo 1
    int disponibles2; // Recursos disponibles de tipo 2

public:
    Monitor() {
        disponibles1 = N1;
        disponibles2 = N2;
        sem_init(&mutex, 0, 1);
        sem_init(&tipo1, 0, 0);
        sem_init(&tipo2, 0, 0);
    }

    ~Monitor() {
        sem_destroy(&mutex);
        sem_destroy(&tipo1);
        sem_destroy(&tipo2);
    }

    void pedir_recurso(int tipo) {
        sem_wait(&mutex); // Exclusión mutua
        if (tipo == 1) {
            if (disponibles1 > 0) {
                disponibles1--;
            } else {
                sem_post(&mutex); // Libera el monitor antes de bloquearse
                sem_wait(&tipo1); // Espera por recursos de tipo 1
                sem_wait(&mutex); // Recupera el monitor
                disponibles1--;
            }
        } else if (tipo == 2) {
            if (disponibles2 > 0) {
                disponibles2--;
            } else {
                sem_post(&mutex); // Libera el monitor antes de bloquearse
                sem_wait(&tipo2); // Espera por recursos de tipo 2
                sem_wait(&mutex); // Recupera el monitor
                disponibles2--;
            }
        }
        sem_post(&mutex); // Libera el monitor
    }

    void liberar_recurso(int tipo) {
        sem_wait(&mutex); // Exclusión mutua
        if (tipo == 1) {
            disponibles1++;
            sem_post(&tipo1); // Desbloquea procesos esperando por tipo 1
        } else if (tipo == 2) {
            disponibles2++;
            sem_post(&tipo2); // Desbloquea procesos esperando por tipo 2
        }
        sem_post(&mutex); // Libera el monitor
    }
};

// Función de prueba
void proceso(Monitor &monitor, int tipo) {
    cout << "Proceso solicitando recurso de tipo " << tipo << endl;
    monitor.pedir_recurso(tipo);
    cout << "Proceso usando recurso de tipo " << tipo << endl;
    this_thread::sleep_for(chrono::milliseconds(500)); // Simula uso del recurso
    cout << "Proceso liberando recurso de tipo " << tipo << endl;
    monitor.liberar_recurso(tipo);
}

int main() {
    Monitor monitor;

    // Simulamos procesos que piden recursos de tipo 1 y 2
    thread procesos[6];
    for (int i = 0; i < 3; ++i) {
        procesos[i] = thread(proceso, ref(monitor), 1); // Tipo 1
    }
    for (int i = 3; i < 6; ++i) {
        procesos[i] = thread(proceso, ref(monitor), 2); // Tipo 2
    }

    for (int i = 0; i < 6; ++i) {
        procesos[i].join();
    }

    return 0;
}
```

---

#### (b) Secuencia que puede causar interbloqueo

El interbloqueo ocurre cuando:
1. **Dos o más procesos necesitan simultáneamente recursos de ambos tipos.**
2. Cada proceso adquiere el primer recurso que necesita y luego intenta adquirir el segundo, pero queda bloqueado porque otro proceso ya lo posee.

**Ejemplo de interbloqueo:**
1. Proceso A solicita un recurso de tipo 1 (se lo concede el monitor).
2. Proceso B solicita un recurso de tipo 2 (se lo concede el monitor).
3. Proceso A intenta solicitar un recurso de tipo 2, pero debe esperar porque el recurso de tipo 2 está ocupado.
4. Proceso B intenta solicitar un recurso de tipo 1, pero debe esperar porque el recurso de tipo 1 está ocupado.

Ambos procesos quedan bloqueados indefinidamente, esperando que el otro libere el recurso.

---

#### (c) Solución al interbloqueo con la opción de solicitar ambos recursos a la vez

Para evitar el interbloqueo, se puede modificar el monitor para permitir la solicitud de ambos recursos al mismo tiempo. Esto asegura que un proceso adquiera ambos recursos o ninguno, eliminando la posibilidad de que uno obtenga un recurso mientras espera por el otro.

**Razón por la inanición:**
- Si hay muchos procesos que necesitan un solo recurso (tipo 1 o tipo 2), podrían acaparar constantemente los recursos, impidiendo que los procesos que necesitan ambos recursos sean atendidos.

**Implementación en pseudocódigo:**
```cpp
void pedir_recursos(int tipo) {
    sem_wait(&mutex);
    if (tipo == 0) { // Solicita ambos recursos
        while (disponibles1 == 0 || disponibles2 == 0) {
            sem_post(&mutex);
            sem_wait(&espera_ambos);
            sem_wait(&mutex);
        }
        disponibles1--;
        disponibles2--;
    } else if (tipo == 1) { // Solicita recurso de tipo 1
        while (disponibles1 == 0) {
            sem_post(&mutex);
            sem_wait(&tipo1);
            sem_wait(&mutex);
        }
        disponibles1--;
    } else if (tipo == 2) { // Solicita recurso de tipo 2
        while (disponibles2 == 0) {
            sem_post(&mutex);
            sem_wait(&tipo2);
            sem_wait(&mutex);
        }
        disponibles2--;
    }
    sem_post(&mutex);
}

void liberar_recursos(int tipo) {
    sem_wait(&mutex);
    if (tipo == 0) { // Libera ambos recursos
        disponibles1++;
        disponibles2++;
        sem_post(&tipo1);
        sem_post(&tipo2);
        sem_post(&espera_ambos);
    } else if (tipo == 1) {
        disponibles1++;
        sem_post(&tipo1);
    } else if (tipo == 2) {
        disponibles2++;
        sem_post(&tipo2);
    }
    sem_post(&mutex);
}
```

En este esquema, los procesos que solicitan ambos recursos (`tipo == 0`) tienen prioridad en situaciones donde ambos recursos están disponibles, pero el sistema debe estar diseñado cuidadosamente para evitar inanición. Una solución adicional podría incluir un contador de espera para garantizar una política de justicia (FIFO).

### Solución al problema: Método profesor

#### a)
```cpp
Monitor Recursos_v1;
    var libres: array[1..2] of integer;
        cola: array[1..2] of condition;
    
    begin
        libres[1] = N1;
        libres[2] = N2;
    end

    procedure adquiriendo(tipo:1..2);
        begin
            if libres[tipo] == 0 then //si no hay recursos libres del tipo indicado
                cola[tipo].wait(); //esperamos a que el recurso este disponible
            
            libres[tipo]--; //reducimos el n de recursos libres del tipo indicado
        end;
    
    procedure liberarRecursos(tipo:1..2);
        begin
            libres[tipo]++;
            cola[tipo].signal();
        end
    

``` 

#### b) mismo que en el ejemplo de resolución anterior

#### c) 

```cpp
Monitor Recursos_v1;
    var libres: array[0..2] of integer;
        cola: array[0..2] of condition;
    
    begin
        // libres[0] = min{N1,N2}; -> otra manera de verlo -> debido a que necesitan los dos recursos disponibles a la vez
        libres[1] = N1;
        libres[2] = N2;
    end

    procedure adquiriendo(tipo:0..2);
        begin
            if(tipo == 0) then
                begin
                    if libres[1] == 0 or libres[2] == 0 then
                        cola[0].wait(); 
                        libres[1]--; libres[2]--;
                end
                    else 
                        begin
                        if libres[tipo] == 0 then
                            cola[tipo].wait();
                            libres[tipo]--;
                        end
        end
    
    procedure liberarRecursos(tipo:1..2);
        begin
            if tipo == 0 then 
                libres[1]++; libres[2]++;
                cola[1].signal(); cola[2].signal();
            else if tipo == 1 then 
                libres[1]++;
                cola[1].signal();
            else if tipo ==2 then 
                libres[2]++;
                cola[2].signal();
        end
    

``` 

## 55. Escribir una solución al problema de lectores-escritores con monitores:

### (a) Con prioridad a los lectores
Quiere decir que, si en un momento puede acceder al recurso tanto un lector como un escritor, se da paso preferentemente al lector.

### (b) Con prioridad a los escritores
Quiere decir que, si en un momento puede acceder tanto un lector como un escritor, se da paso preferentemente al escritor.

### (c) Con prioridades iguales
En este caso, los procesos acceden al recurso estrictamente en orden de llegada, lo cual implica, en particular, que si hay lectores leyendo y un escritor esperando, los lectores que intenten acceder después del escritor no podrán hacerlo hasta que no lo haga dicho escritor.

---

Bajo el supuesto de que disponemos de una clase para implementar **monitores de Hoare** (por ejemplo, usando `include<scd.h>`), aquí tienes la solución a cada caso:

---

### Estructura general con monitores de Hoare

- Se usa la exclusión mutua que proporciona el monitor de Hoare.
- Las variables de condición (`condition`) permiten bloquear y despertar procesos cuando se cumplen ciertas condiciones.
- La semántica de Hoare implica que las señales a un proceso (`signal`) ceden inmediatamente el control a ese proceso, garantizando un comportamiento ordenado.

---

### (a) **Con prioridad a los lectores**

#### Descripción:
- Los lectores tienen prioridad para acceder al recurso compartido.
- Si hay lectores leyendo o esperando, no se permite que los escritores accedan.

#### Código:
```cpp
#include <scd.h>
#include <iostream>
#include <thread>
#include <chrono>

using namespace std;

class LectoresEscritores : public HoareMonitor {
private:
    int lectores_leyendo;         // Número de lectores activos
    int escritores_esperando;    // Escritores esperando para escribir
    bool escritor_escribiendo;   // Si un escritor está escribiendo
    condition leer;              // Condición para lectores
    condition escribir;          // Condición para escritores

public:
    LectoresEscritores() {
        lectores_leyendo = 0;
        escritores_esperando = 0;
        escritor_escribiendo = false;
    }

    void entrar_lector() {
        if (escritor_escribiendo || escritores_esperando > 0) {
            leer.wait(); // Espera hasta que sea seguro leer
        }
        lectores_leyendo++;
        leer.signal(); // Permite que otros lectores entren si es posible
    }

    void salir_lector() {
        lectores_leyendo--;
        if (lectores_leyendo == 0 && escritores_esperando > 0) {
            escribir.signal(); // Da paso al escritor
        }
    }

    void entrar_escritor() {
        escritores_esperando++;
        if (escritor_escribiendo || lectores_leyendo > 0) {
            escribir.wait(); // Espera hasta que sea seguro escribir
        }
        escritores_esperando--;
        escritor_escribiendo = true;
    }

    void salir_escritor() {
        escritor_escribiendo = false;
        if (escritores_esperando > 0) {
            escribir.signal(); // Da paso al siguiente escritor
        } else {
            leer.signal(); // Permite a los lectores entrar
        }
    }
};

// Funciones de prueba
void lector(LectoresEscritores &monitor, int id) {
    monitor.entrar_lector();
    cout << "Lector " << id << " está leyendo." << endl;
    this_thread::sleep_for(chrono::milliseconds(100)); // Simula lectura
    cout << "Lector " << id << " terminó de leer." << endl;
    monitor.salir_lector();
}

void escritor(LectoresEscritores &monitor, int id) {
    monitor.entrar_escritor();
    cout << "Escritor " << id << " está escribiendo." << endl;
    this_thread::sleep_for(chrono::milliseconds(200)); // Simula escritura
    cout << "Escritor " << id << " terminó de escribir." << endl;
    monitor.salir_escritor();
}

int main() {
    MRef<LectoresEscritores> monitor = Create<LectoresEscritores>();

    thread t1(lector, ref(monitor), 1);
    thread t2(lector, ref(monitor), 2);
    thread t3(escritor, ref(monitor), 1);
    thread t4(lector, ref(monitor), 3);

    t1.join();
    t2.join();
    t3.join();
    t4.join();

    return 0;
}
```

---

### (b) **Con prioridad a los escritores**

#### Descripción:
- Los escritores tienen prioridad para acceder al recurso compartido.
- Si hay escritores esperando, los lectores no podrán acceder al recurso.

#### Código:
```cpp
class LectoresEscritores : public HoareMonitor {
private:
    int lectores_leyendo;         // Número de lectores activos
    int escritores_esperando;    // Escritores esperando para escribir
    bool escritor_escribiendo;   // Si un escritor está escribiendo
    condition leer;              // Condición para lectores
    condition escribir;          // Condición para escritores

public:
    LectoresEscritores() {
        lectores_leyendo = 0;
        escritores_esperando = 0;
        escritor_escribiendo = false;
    }

    void entrar_lector() {
        if (escritor_escribiendo || escritores_esperando > 0) {
            leer.wait(); // Espera hasta que sea seguro leer
        }
        lectores_leyendo++;
    }

    void salir_lector() {
        lectores_leyendo--;
        if (lectores_leyendo == 0 && escritores_esperando > 0) {
            escribir.signal(); // Da paso al escritor
        }
    }

    void entrar_escritor() {
        escritores_esperando++;
        if (escritor_escribiendo || lectores_leyendo > 0) {
            escribir.wait(); // Espera hasta que sea seguro escribir
        }
        escritores_esperando--;
        escritor_escribiendo = true;
    }

    void salir_escritor() {
        escritor_escribiendo = false;
        if (escritores_esperando > 0) {
            escribir.signal(); // Da paso al siguiente escritor
        } else if (!leer.empty()) {
            leer.signal(); // Permite a los lectores entrar
        }
    }
};
```

---

### (c) **Con prioridades iguales**

#### Descripción:
- Lectores y escritores se atienden estrictamente en orden de llegada.
- Se asegura que si un escritor está esperando, ningún lector posterior puede adelantarse.

#### Código:
```cpp
class LectoresEscritores : public HoareMonitor {
private:
    int lectores_leyendo;         // Número de lectores activos
    int escritores_esperando;    // Escritores esperando para escribir
    bool escritor_escribiendo;   // Si un escritor está escribiendo
    condition leer;              // Condición para lectores
    condition escribir;          // Condición para escritores
    condition turno;             // Controla el orden de llegada

public:
    LectoresEscritores() {
        lectores_leyendo = 0;
        escritores_esperando = 0;
        escritor_escribiendo = false;
    }

    void entrar_lector() {
        if (escritor_escribiendo || escritores_esperando > 0) {
            leer.wait(); // Espera hasta que sea seguro leer
        }
        lectores_leyendo++;
        leer.signal(); // Permite a otros lectores en espera entrar
    }

    void salir_lector() {
        lectores_leyendo--;
        if (lectores_leyendo == 0 && !turno.empty()) {
            turno.signal(); // Da paso al siguiente en el turno
        }
    }

    void entrar_escritor() {
        escritores_esperando++;
        if (escritor_escribiendo || lectores_leyendo > 0) {
            turno.wait(); // Espera su turno
        }
        escritores_esperando--;
        escritor_escribiendo = true;
    }

    void salir_escritor() {
        escritor_escribiendo = false;
        if (!turno.empty()) {
            turno.signal(); // Da paso al siguiente en el turno
        } else if (!leer.empty()) {
            leer.signal(); // Permite a los lectores entrar
        }
    }
};
```

---

### Anotaciones
Cada solución utiliza las condiciones (`condition`) para manejar las prioridades y respetar las restricciones de cada caso. La implementación de prioridades iguales asegura un acceso justo entre lectores y escritores.

Claro, aquí tienes el ejercicio de la imagen transcrito a Markdown:

---

## 56. Varios coches que vienen del norte y del sur pretenden cruzar un puente sobre un río (ver Fig 1). Solo existe un carril sobre dicho puente. Por lo tanto, en un momento dado, el puente solo puede ser cruzado por uno o más coches en la misma dirección (pero no en direcciones opuestas).

<!-- Insertar imagen -->
![Figura 1: Problema de exclusión mutua en el acceso de coches desde 2 sentidos opuestos a un puente
de un solo carril.](ej56figura.png)

### (a) Completar el código del siguiente monitor que resuelve el problema del acceso al puente suponiendo que llega un coche del norte (sur) y cruza el puente si no hay otro coche del sur (norte) cruzando el puente en ese momento.

```cpp
Monitor Puente
var ... ;
procedure EntrarCocheDelNorte()
begin
...
end
procedure SalirCocheDelNorte()
begin
....
end
procedure EntrarCocheDelSur()
begin
....
end
procedure SalirCocheDelSur()
begin
...
end
{ Inicialización }
begin
....
end

```

### (b) Mejorar el monitor anterior, de forma que la dirección del tráfico a través del puente cambie cada vez que lo hayan cruzado 10 coches en una dirección, mientras 1 o más coches estuviesen esperando cruzar el puente en dirección opuesta.
---
### Resolución:

### a)

```cpp
Monitor Puente

var n_cruzando, s_cruzando;
condition norte, sur;

procedure EntrarCocheDelNorte()
begin
if(s_cruzando ) then norte.wait();
n_cruzando++;
if(norte.queue()) then norte.signal();
end

procedure SalirCocheDelNorte()
begin
if(n_cruzando) then n_cruzando--;
if(sur.queue() and n_cruzando == 0) then sur.signal();
end

procedure EntrarCocheDelSur()
begin
if(n_cruzando ) then sur.wait();
s_cruzando++;
if(sur.queue()) then sur.signal();
end

procedure SalirCocheDelSur()
begin
if(s_cruzando) then s_cruzando--;
if(norte.queue() and s_cruzando == 0) then norte.signal();
end

{ Inicialización }
begin
n_cruzando = s_cruzando = 0;
end

```

### b)

```cpp
Monitor Puente

var n_cruzando, s_cruzando, n_pueden, s_pueden;
condition norte, sur;

procedure EntrarCocheDelNorte()
begin
if(s_cruzando or n_pueden == 0) then norte.wait();
n_cruzando++;
if(sur.queue()>0) then n_pueden--;
if(norte.queue() and n_pueden>0) then norte.signal();
end

procedure SalirCocheDelNorte()
begin
if(n_cruzando) then n_cruzando--;
if(sur.queue() and n_cruzando == 0) begin; then s_pueden = 10; sur.signal(); end;
end

procedure EntrarCocheDelSur()
begin
if(n_cruzando or s_pueden == 0 ) then sur.wait();
s_cruzando++;
if(norte.queue()>0) s_pueden--;
if(sur.queue() and s_pueden>0) then sur.signal();
end

procedure SalirCocheDelSur()
begin
if(s_cruzando) then s_cruzando--;
if(norte.queue() and s_cruzando == 0) begin; then n_pueden=10; norte.signal(); end;
end

{ Inicialización }
begin
n_cruzando = s_cruzando = 0;
n_pueden = 10; s_pueden=10;
end

```

---

## 57. Una tribu de antropófagos comparte una olla en la que caben \(M\) misioneros. Cuando algún salvaje quiere comer, se sirve directamente de la olla, a no ser que ésta esté vacía. Si la olla está vacía, el salvaje despertará al cocinero y esperará a que éste haya rellenado la olla con otros \(M\) misioneros. Para solucionar la sincronización usamos un monitor llamado Olla, que se puede usar así:

```cpp
monitor Olla;
...
begin
...
end;

proceso ProcSalvaje[ i:1..N ];
begin
while true do begin
    Olla.Servirse_1_misionero();
    Comer(); { es un retraso aleatorio }
end
end;

proceso ProcCocinero;
begin
while true do begin
    Olla.Dormir();
    Olla.Rellenar_Olla();
end
end;
```


Se pide: diseñar el código del monitor Olla para que se satisfaga la sincronización requerida en el enunciado del problema, teniendo en cuenta que:
* La solución propuesta no debe producir interbloqueos.
* Los salvajes podrán comer siempre que haya comida en la olla.
* Sólo se ha de despertar al proceso cocinero cuando la olla esté vacía.

---

### Resolución



```cpp
monitor Olla;
var
    num_misioneros : integer;
    dormir, comer : condition;
begin
num_misioneros = M_0; //M_0 -> es el número inicial de misioneros que hay en la olla
end;

procedure Servirse_1_misionero();
    begin
    if (num_misioneros == 0)
        begin
        dormir.signal();
        comer.wait();
        end
    
    num_misioneros--;
    if(num_misioneros > 0)
        comer.signal();
    else dormir.signal();

    end

procedure dormir();
    begin
    if(num_misioneros >0)
        dormir.wait();
    end

procedure rellenar_Olla();
    begin
    num_misioneros = M_0;
    comer.signal();
    end

//ADVERTENCIA -> SOLAMENTE FUNCIONA CON SEÑALES SU -> SEÑALAR Y ESPERA URGENTE

proceso ProcSalvaje[ i:1..N ];
begin
while true do begin
    Olla.Servirse_1_misionero();
    Comer(); { es un retraso aleatorio }
end
end;

proceso ProcCocinero;
begin
while true do begin
    Olla.Dormir();
    Olla.Rellenar_Olla();
end
end;
```

## 58. Ejercicio

Una cuenta de ahorros es compartida por varias personas (procesos). Cada persona puede depositar o retirar fondos de la cuenta. El saldo actual de la cuenta es la suma de todos los depósitos menos la suma de todos los retiros. El saldo nunca puede ser negativo. Queremos usar un monitor para resolver el problema.

El monitor debe tener 2 procedimientos: `depositar(c)` y `retirar(c)`. Suponer que los argumentos de las 2 operaciones son siempre positivos, e indican las cantidades a depositar o retirar. El monitor usará la semántica señalar y espera urgente (SU). Se deben de escribir varias versiones de la solución, según las variaciones de los requerimientos que se describen a continuación:

### (a) 
Todo proceso puede retirar fondos mientras la cantidad solicitada `c` sea menor o igual que el saldo disponible en la cuenta en ese momento. Si un proceso intenta retirar una cantidad `c` mayor que el saldo, debe quedar bloqueado hasta que el saldo se incremente lo suficiente (como consecuencia de que otros procesos depositen fondos en la cuenta) para que se pueda atender la petición.
- Hacer dos versiones del monitor: (a.1) colas normales FIFO sin prioridad y (a.2) con colas de prioridad.

### (b) 
El reintegro de fondos a los clientes se hace únicamente según el orden de llegada. Si hay más de un cliente esperando, solo el primero que llegó puede optar a retirar la cantidad que desea; mientras esto no sea posible, esperarán todos los clientes, independientemente de cuánto quieran retirar los demás. Por ejemplo, suponer que el saldo es 200 unidades y un cliente está esperando un reintegro de 300 unidades; entonces, si llega otro cliente, debe esperar, incluso si quiere retirar 200 unidades. De nuevo, resolverlo utilizando dos versiones: (b.1) colas normales (FIFO) sin prioridad y (b.2) con colas de prioridad.

---
#### a.1) cola FIFO sin prioridad

```cpp
procedure retirar(cantidad: positive)
    begin
    while cantidad > saldo do 
        begin
        cola.signal();
        cola.wait();
        end
    
    saldo -= cantidad;
    cola.signal();
    end;

procedure ingresar(cantidad: positive)
    begin
    saldo += cantidad;
    cola.signal();
    end


```

#### ¿Porque esta solución cumple con la semántica SU?

La solución presentada cumple con la semántica de **señalar y espera urgente (SU)** debido a la manera en que se manejan las señales y los bloqueos dentro del monitor.

---

##### **¿Qué es la semántica de Señalar y Espera Urgente (SU)?**

En SU:
1. Cuando un proceso hace un `signal` sobre una condición, cede inmediatamente el monitor al proceso que fue despertado. Es decir, el proceso que hizo el `signal` se suspende hasta que el despertado abandone el monitor.
2. Esto garantiza que los procesos en espera puedan ejecutar sus acciones tan pronto como se satisfaga la condición, asegurando una respuesta "urgente".

En contraste, otras semánticas como **señalar y continuar (SC)** permiten que el proceso que hace el `signal` continúe su ejecución, lo que puede retrasar a los procesos despertados.

---

##### **Análisis del Código**

##### **Código de `retirar(cantidad)`**
```cpp
procedure retirar(cantidad: positive)
    begin
    while cantidad > saldo do 
        begin
        cola.signal(); // Señala a otro proceso que podría desbloquearse
        cola.wait();   // Se bloquea hasta que el saldo sea suficiente
        end
    
    saldo -= cantidad; // Realiza el retiro
    cola.signal();      // Despierta a otro proceso (si hay alguno esperando)
    end;
```

1. **Uso de `while`:** 
   - El uso del `while` garantiza que un proceso reevalúe la condición `cantidad > saldo` después de ser despertado, lo que es esencial para evitar errores de concurrencia en escenarios con múltiples procesos.

2. **Señalización (`cola.signal()`):**
   - Cada vez que un proceso intenta retirar una cantidad mayor al saldo disponible, antes de bloquearse (`cola.wait()`), se llama a `cola.signal()` para dar la oportunidad a otro proceso de desbloquearse y potencialmente modificar el saldo (por ejemplo, a través de un depósito).

3. **Espera (`cola.wait()`):**
   - Si el saldo no es suficiente, el proceso se bloquea en `cola.wait()`, cediendo el control del monitor a otros procesos.

4. **Semántica SU:**
   - Cuando un proceso hace `cola.signal()`, el proceso despertado tiene prioridad y ejecuta inmediatamente. Esto asegura que cualquier proceso que esté en espera y pueda realizar su acción (como depositar fondos o realizar un retiro válido) lo haga de forma prioritaria.

---

##### **Código de `ingresar(cantidad)`**
```cpp
procedure ingresar(cantidad: positive)
    begin Vamos a analizarlo en detalle
    saldo += cantidad; // Incrementa el saldo
    cola.signal();      // Despierta a algún proceso que esté esperando por fondos
    end
```

1. **Actualización del saldo:**
   - Incrementa el saldo disponible inmediatamente al recibir un depósito.

2. **Señalización (`cola.signal()`):**
   - Despierta a un proceso bloqueado en `cola.wait()`. Gracias a la semántica SU, el proceso despertado podrá reintentar su operación de retiro antes de que el proceso actual (el que está depositando) continúe.

3. **Sin uso de `wait`:**
   - Este procedimiento no necesita bloquearse porque no hay condiciones adicionales que verificar después de depositar.

---

##### **¿Cómo se cumple la semántica SU?**

- **Señalar inmediatamente:**
  - Cada vez que se hace un `cola.signal()`, se cede el control del monitor al proceso que estaba esperando en la cola (si existe). Este proceso tiene prioridad para ejecutar su lógica.

- **Espera urgente:**
  - Si un proceso no puede continuar (`cantidad > saldo` en `retirar`), se bloquea en `cola.wait()` y cede el control. Cuando sea despertado, verifica de inmediato si ya puede realizar la acción.

- **Ejemplo de flujo (retirar y depositar):**
  - Si el saldo es 100 y dos procesos quieren retirar cantidades (150 y 50, respectivamente):
    1. El proceso que quiere retirar 150 encuentra que `cantidad > saldo`, hace `signal` para despertar a otro proceso y se bloquea con `wait`.
    2. El proceso que quiere retirar 50 se despierta, encuentra que su solicitud es válida, retira los fondos y hace `signal` para despertar al siguiente proceso.
    3. Si se hace un depósito, el proceso bloqueado (150) se despierta prioritariamente y reevalúa su condición.

---

##### **Cumplimiento del esquema FIFO sin prioridad**

La cola `cola` maneja a los procesos de forma **FIFO**, porque:
- Cuando un proceso hace `wait`, se encola al final de la lista de espera.
- El `signal` despierta al proceso que lleva más tiempo esperando.

---

##### **Ventajas de SU en este caso**

1. **Eficiencia en el desbloqueo:**
   - Los procesos no esperan innecesariamente, ya que los procesos despertados tienen prioridad.

2. **Evita inanición:**
   - Con la cola FIFO, los procesos se desbloquean en el orden en que se bloquearon.

3. **Concurrencia controlada:**
   - Los procesos despertados verifican de inmediato si pueden continuar, evitando inconsistencias.

---

En resumen, esta solución cumple con la semántica de señalar y espera urgente (SU) al dar prioridad a los procesos bloqueados y garantizar que puedan realizar su acción tan pronto como la condición lo permita, cediendo el control del monitor oportunamente.


#### a.2) Cola FIFO con prioridad, primero retira el cliente con menor cantidad

```cpp


procedure retirar(cantidad : positive) 
    begin
    while cantidad > saldo
        begin
            cola.wait();
            saldo -= cantidad;
            cola.signal();
        end
    end
```
#### b.1) se respeta el orden de llegada a la oficina
```cpp
//SE DEBE DE RESPETAR EL ORDEN DE LLEGADA A LA OFICINA
var
    ventanilla, resto : condition
    // ventanilla -> el que esta con el banquero
    // resto los demas integrantes de la cuenta
procedure retirar(cantidad : positive)
    begin
    if ventanilla.queue() then 
        resto.wait();
    while cantidad > saldo do
        ventas.wait();
    saldo -= cantidad;
    resto.signal();
    end

```

#### b.2) con prioridad, pero se respeta el orden de llegada a la oficina

```cpp
procedure retirar(cantidad : positive)
    var 
        ticket : integer

    begin
    ticket:=contador;
    contador+=1;
    if cola.queue() then cola.wait(ticket);
    while cantidad > saldo do
        cola.wait(ticket);
    saldo -= cantidad;+
    cola.signal();

    end
```