# Explicación detallada de los cambios realizados en el archivo `ejecutivo2.cpp`

## Contexto del problema
El objetivo de este ejercicio era **diseñar una planificación** para un conjunto de tareas, dadas sus restricciones de tiempo de período (**T**) y tiempo de cómputo (**C**), e implementar dicha planificación en un ejecutivo cíclico.

Los datos de las tareas son los siguientes:

| **Tarea** | **T** (ms) | **C** (ms) |
|-----------|------------|------------|
| A         | 500        | 100        |
| B         | 500        | 150        |
| C         | 1000       | 200        |
| D         | 2000       | 240        |

La planificación se ha realizado con un ciclo secundario de duración **500 ms**. El objetivo era cumplir con los tiempos de cómputo de cada tarea sin sobrepasar los límites temporales y medir el retraso al final de cada ciclo.

---

## Descripción de la planificación
Para resolver el problema, se organizó la ejecución de las tareas en un **ciclo principal** compuesto por **4 iteraciones del ciclo secundario**. Cada iteración tiene una duración de **500 ms** (Ts = 500 ms).

La planificación resultante quedó de la siguiente forma:

- **Iteración 1:** Ejecución de tareas **A** y **B** (C = 100 ms + 150 ms = 250 ms).
- **Iteración 2:** Ejecución de tareas **A** y **B** (C = 100 ms + 150 ms = 250 ms).
- **Iteración 3:** Ejecución de tarea **C** (C = 200 ms).
- **Iteración 4:** Ejecución de tarea **D** (C = 240 ms).

Esta planificación garantiza que todas las tareas cumplen con sus períodos **T** y no se solapan entre sí, respetando la duración del ciclo secundario.

La planificación se puede representar en forma de tabla así:

| **Ciclo secundario** | **Tareas ejecutadas**       |
|----------------------|-----------------------------|
| 1                    | A, B                       |
| 2                    | A, B                       |
| 3                    | C                          |
| 4                    | D                          |

---

## Cambios realizados en el código

### 1. Añadida nueva planificación
El bloque `switch-case` dentro del ciclo secundario se ha modificado para implementar la planificación descrita. Cada iteración ejecuta un conjunto específico de tareas según el siguiente esquema:

```cpp
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
```

Aquí:
- En las **iteraciones 1 y 2**, se ejecutan las tareas **A** y **B**, asegurando que cumplen con su período **T = 500 ms**.
- En la **iteración 3**, se ejecuta la tarea **C** (T = 1000 ms).
- En la **iteración 4**, se ejecuta la tarea **D** (T = 2000 ms).

### 2. Medición del retraso al final de cada ciclo secundario
Para medir el retraso respecto al instante teórico esperado al final de cada ciclo secundario, se introdujo una medición del tiempo real al final de cada iteración utilizando la función `steady_clock`.

El código añadido es el siguiente:

```cpp
// calcular el siguiente instante de inicio del ciclo secundario
ini_sec += Ts_ms;

// esperar hasta el inicio de la siguiente iteración del ciclo secundario
sleep_until(ini_sec);

// medir el retraso respecto al tiempo teórico esperado
time_point<steady_clock> fin_iteracion = steady_clock::now();
milliseconds retraso = duration_cast<milliseconds>(fin_iteracion - ini_sec);
cout << "Retraso al final de la iteración " << i << ": " << retraso.count() << " ms." << endl;
```

**Explicación:**
- `ini_sec` guarda el instante de inicio teórico de cada iteración.
- Se utiliza `sleep_until` para esperar hasta ese instante.
- Después de `sleep_until`, se compara el instante real (`fin_iteracion`) con el instante teórico esperado (`ini_sec`) para calcular el **retraso**.
- El retraso se imprime en la salida estándar con un mensaje informativo.

### 3. Organización y formato de salida
Se añadieron mensajes de texto en `cout` para informar al usuario de:
- El inicio de cada iteración del ciclo secundario.
- El inicio y fin de cada tarea con su tiempo de cómputo **C**.
- El retraso medido al final de cada iteración.

Esto mejora la legibilidad de la ejecución y permite verificar si la planificación se está cumpliendo correctamente.

Ejemplo de salida esperada:

```
Comienza iteración 1 del ciclo secundario.
   Comienza tarea A (C == 100 ms.) ... fin.
   Comienza tarea B (C == 150 ms.) ... fin.
Retraso al final de la iteración 1: 0 ms.

Comienza iteración 2 del ciclo secundario.
   Comienza tarea A (C == 100 ms.) ... fin.
   Comienza tarea B (C == 150 ms.) ... fin.
Retraso al final de la iteración 2: 1 ms.

Comienza iteración 3 del ciclo secundario.
   Comienza tarea C (C == 200 ms.) ... fin.
Retraso al final de la iteración 3: 0 ms.

Comienza iteración 4 del ciclo secundario.
   Comienza tarea D (C == 240 ms.) ... fin.
Retraso al final de la iteración 4: 2 ms.
```

---

## Validación de las preguntas

### 1. ¿Cuál es el **mínimo tiempo de espera** al final de las iteraciones?
El tiempo de espera depende de la diferencia entre el tiempo total de cómputo de las tareas y la duración del ciclo secundario **Ts** (500 ms):
- En **iteraciones 1 y 2**: Tareas A (100 ms) + B (150 ms) = **250 ms** de cómputo. El tiempo de espera es:
  
  > 500 ms - 250 ms = **250 ms**

- En **iteración 3**: Tarea C (200 ms):
  > 500 ms - 200 ms = **300 ms**

- En **iteración 4**: Tarea D (240 ms):
  > 500 ms - 240 ms = **260 ms**

Por lo tanto, el **mínimo tiempo de espera** es **250 ms**.

### 2. ¿Sería planificable si la tarea **D** tuviese un tiempo de cómputo de **250 ms**?

Si el tiempo de cómputo de la tarea D fuese **250 ms**, se verificaría lo siguiente:
- La duración del ciclo secundario es **500 ms**.
- El tiempo total de cómputo en la iteración 4 sería **250 ms**, lo cual cabe perfectamente dentro de los 500 ms disponibles.

Por lo tanto, **sí sería planificable**.

---

## Conclusión
En este ejercicio, hemos diseñado una planificación adecuada para las tareas dadas, implementando una solución en el archivo `ejecutivo2.cpp`. Se logró:
1. Cumplir con los períodos de cada tarea.
2. Medir y mostrar el retraso al final de cada iteración.
3. Calcular el tiempo de espera y validar si el sistema sería planificable bajo nuevas condiciones.
