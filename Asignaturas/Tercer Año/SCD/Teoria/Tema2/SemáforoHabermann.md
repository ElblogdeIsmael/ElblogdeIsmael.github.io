# SCD. Semáforo de Habermann. Tema 2: Monitores

 - **Ismael Sallami Moreno**
 ---


### Ejercicio: Semáforo de Habermann

#### Introducción
En este ejercicio, se presenta la verificación de un monitor utilizando el semáforo de Habermann. El objetivo es asegurar que las condiciones de sincronización y exclusión mutua se cumplan correctamente.

#### Verificación
Para la verificación del monitor, se deben cumplir las siguientes condiciones:

$$n_p \leq n_a, \quad \text{ya que primero ha de incrementarse } n_a$$

$$n_p \leq n_v, \quad \text{ya que } n_a \text{ no puede superar a } n_v \text{ para incrementar } n_p$$

$$n_p \geq \min(n_a, n_v), \quad \text{condición no necesaria, pero deseable}$$

#### Código del Monitor
```verbatim
Monitor Semaforo;
var na, np, nv: int
    c: cond;

procedure P;
begin
    na := na + 1;
    if (na > nv) then
        c.wait();
    np := np + 1;
end;

procedure V;
begin
    nv := nv + 1;
    if (na > np) then
        c.signal;
end;

na := 0;
nv := 0;
np := 0;
```

#### Explicación del Código
El monitor `Semaforo` utiliza tres variables enteras: `na`, `np`, y `nv`, y una condición `c`. 

- `procedure P`: Incrementa `na` en 1. Si `na` es mayor que `nv`, se ejecuta `c.wait()` para bloquear el proceso. Luego, incrementa `np` en 1.
- `procedure V`: Incrementa `nv` en 1. Si `na` es mayor que `np`, se ejecuta `c.signal` para desbloquear el proceso.

Finalmente, se inicializan las variables `na`, `nv`, y `np` a 0.

El semáforo de Habermann es un mecanismo de sincronización en programación concurrente. Su objetivo principal es garantizar que la concurrencia entre procesos o hilos se gestione de manera eficiente y ordenada, evitando problemas como condiciones de carrera y garantizando la exclusión mutua.

### Propósito del Semáforo de Habermann
Este semáforo es una variante de los semáforos tradicionales, diseñado para gestionar el acceso a recursos compartidos de manera que se respeten ciertas condiciones previas. Específicamente, se asegura de que ciertas operaciones solo se realicen cuando las condiciones correctas estén cumplidas.

### Significado de `na`, `nv`, y `np`
- **`na` (número de adquisiciones):** Representa el número de veces que se ha intentado adquirir el recurso.
- **`nv` (número de liberaciones):** Indica el número de veces que el recurso ha sido liberado.
- **`np` (número de procesos):** Muestra el número de procesos que han logrado adquirir el recurso y están en progreso.

Estas variables ayudan a monitorear y controlar el estado del recurso compartido, asegurando que las reglas de acceso y liberación se cumplan adecuadamente.

Vamos a desglosar la verificación del semáforo de Habermann:

### Verificación del Monitor 'Semáforo de Habermann'

**1. Declaración del monitor:**
```plaintext
Monitor Semaforo;
```
- Aquí se define el monitor con el nombre `Semaforo`.

**2. Declaración de variables:**
```plaintext
var na, np, nv: int
c: cond;
```
- `na`, `np`, `nv` son variables enteras que representan el número de adquisiciones, procesos y liberaciones respectivamente.
- `c` es una condición utilizada para la sincronización.

**3. Procedimiento `P()`:**
```plaintext
procedure P();
begin
    (np==min(na,nv))
    na:= na+1;
    (np==min(na-1,nv))
    if (na > nv)
    then ((na>nv) and np==min(na-1,nv))=> np==min(na,nv)
         c.wait();
         (na>np and np==nv-1)
    else null
         (np<nv and np==min(na-1))
    endif
    (np+1==min(na,nv))
    np:= np+1;
    (np==min(na,nv))
end;
```
- **`procedure P();`**: Define el procedimiento `P`.
- **`begin`**: Indica el comienzo del procedimiento.
- **`(np==min(na,nv))`**: Verifica que `np` es igual a la mínima entre `na` y `nv`.
- **`na := na + 1;`**: Incrementa `na` en 1.
- **`(np == min(na-1, nv))`**: Verifica que `np` es igual a la mínima entre `na-1` y `nv`.
- **`if (na > nv)`**: Comprueba si `na` es mayor que `nv`.
- **`then`**: Inicia el bloque de instrucciones si la condición del `if` es verdadera.
- **`((na > nv) and np == min(na-1, nv)) => np == min(na, nv)`**: Asegura que la condición es cumplida antes de realizar `c.wait()`.
- **`c.wait();`**: Suspende la ejecución del proceso hasta que se cumpla la condición `c`.
- **`(na > np and np == nv-1)`**: Asegura que `na` es mayor que `np` y `np` es igual a `nv-1`.
- **`else null`**: Si la condición del `if` no se cumple, no se realiza ninguna acción.
- **`(np < nv and np == min(na-1))`**: Verifica que `np` es menor que `nv` y `np` es igual a la mínima entre `na-1`.
- **`endif`**: Finaliza la condición `if`.
- **`(np + 1 == min(na, nv))`**: Verifica que `np + 1` es igual a la mínima entre `na` y `nv`.
- **`np := np + 1;`**: Incrementa `np` en 1.
- **`(np == min(na, nv))`**: Verifica nuevamente que `np` es igual a la mínima entre `na` y `nv`.
- **`end;`**: Finaliza el procedimiento `P`.

**4. Procedimiento `V()`:**
```plaintext
procedure V();
begin
    (np==min(na,nv))
    nv:= nv+1;
    (np==min(na,nv-1))
    if (na > np)
    then ((na>np) and np==min(na,nv-1))=> na>np and np==nv-1
         c.signal;
         (np==min(na,nv))
    end;
```
- **`procedure V();`**: Define el procedimiento `V`.
- **`begin`**: Indica el comienzo del procedimiento.
- **`(np == min(na, nv))`**: Verifica que `np` es igual a la mínima entre `na` y `nv`.
- **`nv := nv + 1;`**: Incrementa `nv` en 1.
- **`(np == min(na, nv-1))`**: Verifica que `np` es igual a la mínima entre `na` y `nv-1`.
- **`if (na > np)`**: Comprueba si `na` es mayor que `np`.
- **`then`**: Inicia el bloque de instrucciones si la condición del `if` es verdadera.
- **`((na > np) and np == min(na, nv-1)) => na > np and np == nv-1`**: Asegura que la condición es cumplida antes de realizar `c.signal`.
- **`c.signal;`**: Despierta un proceso suspendido en espera de la condición `c`.
- **`(np == min(na, nv))`**: Verifica nuevamente que `np` es igual a la mínima entre `na` y `nv`.
- **`end;`**: Finaliza el procedimiento `V`.

**5. Inicialización de variables:**
```plaintext
(V) na:=0;
nv:=0;
np:=0;
(np==min(na,nv))
```
- **`na := 0;`**: Inicializa `na` a 0.
- **`nv := 0;`**: Inicializa `nv` a 0.
- **`np := 0;`**: Inicializa `np` a 0.
- **`(np == min(na, nv))`**: Verifica que `np` es igual a la mínima entre `na` y `nv`.

**Texto adicional:**
- **“1º debemos de establecer el invariante del monitor”**
- **“np = min { np entradas , nv }”**

Estas líneas de comentarios indican que es esencial establecer un invariante del monitor para garantizar que las condiciones de sincronización se mantengan correctamente. El invariante `np = min { np entradas , nv }` asegura que `np` se mantenga acorde a las otras variables en todo momento.
