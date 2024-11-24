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

