# Explicación del código MPI

## Inicialización del entorno MPI
```c
MPI_Init(&argc, &argv);
```
- Inicializa el entorno MPI. Se debe llamar antes de usar cualquier función MPI.
- `argc` y `argv` son los argumentos de la línea de comandos que se pasan al programa.

```c
MPI_Comm_rank(MPI_COMM_WORLD, &rank);
```
- Determina el identificador del proceso dentro del comunicador global `MPI_COMM_WORLD`.
- `rank` contendrá el identificador único del proceso, que va desde 0 hasta \( \text{size} - 1 \).

```c
MPI_Comm_size(MPI_COMM_WORLD, &size);
```
- Obtiene el número total de procesos en el comunicador global `MPI_COMM_WORLD`.
- `size` contendrá este número.

## Condición para el proceso principal
```c
if (rank == 0) {
```
- Este bloque es ejecutado solo por el proceso con `rank` 0 (el proceso principal o maestro).

### Inicialización del proceso principal
```c
x = 2; /* primer número primo */ 
i = 1;
```
- Se inicializan variables locales:
  - `x` contiene el primer número primo.
  - `i` es un contador para generar números impares consecutivos.

### Envío inicial del primer número
```c
MPI_Send(&x, 1, MPI_INT, size - 1, 0, MPI_COMM_WORLD);
```
- Envía el número `x` al último proceso (`rank = size - 1`).
- Argumentos:
  - `&x`: dirección del dato a enviar.
  - `1`: cantidad de elementos.
  - `MPI_INT`: tipo de dato.
  - `size - 1`: destino del mensaje (último proceso).
  - `0`: etiqueta del mensaje.
  - `MPI_COMM_WORLD`: comunicador usado.

### Generación de números y envío en bucle
```c
while (!fin) {
    i += 2; x = i;
    MPI_Send(&x, 1, MPI_INT, rank + 1, 0, MPI_COMM_WORLD);
    MPI_Irecv(&x, 1, MPI_INT, size - 1, MPI_ANY_TAG, MPI_COMM_WORLD, &request);
    ...
}
```
- Genera números impares (`i`) y los asigna a `x`.
- Envía el número `x` al siguiente proceso (`rank + 1`).
- Recibe mensajes de manera no bloqueante:
  - `MPI_Irecv` inicia la recepción de mensajes sin bloquear la ejecución.
  - `MPI_ANY_TAG` indica que puede recibir mensajes con cualquier etiqueta.
- El bucle continúa hasta que se cumpla una condición de finalización (`fin`).

## Condición para el último proceso (impresor)
```c
else if (rank == size - 1) {
    /* este es el impresor */
}
```
- Este bloque es ejecutado por el último proceso. Actúa como "impresor", procesando los resultados finales.

## Condición para los procesos intermedios (filtros)
```c
else {
```
- Este bloque es ejecutado por los procesos intermedios (filtros).

### Recepción inicial
```c
MPI_Recv(&valor, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, &status);
```
- Recibe un número (`valor`) del proceso anterior (`rank - 1`).

### Reenvío inicial
```c
MPI_Send(&valor, 1, MPI_INT, size - 1, 0, MPI_COMM_WORLD);
```
- Envía el número recibido al último proceso (`size - 1`).

### Filtrado y reenvío en bucle
```c
while (!fin) {
    MPI_Recv(&x, 1, MPI_INT, rank - 1, 0, MPI_COMM_WORLD, &status);
    if (rank < (size - 2)) {
        if (x % valor != 0) {
            MPI_Send(&x, 1, MPI_INT, rank + 1, 0, MPI_COMM_WORLD);
        }
    }
    MPI_Irecv(&x, 1, MPI_INT, size - 1, MPI_ANY_TAG, MPI_COMM_WORLD, &request);
    if (x == size - 1) fin = true;
}
```
- Recibe números del proceso anterior.
- Filtra números que no son divisibles por `valor`.
- Envía números válidos al siguiente proceso (`rank + 1`).
- Utiliza recepción no bloqueante (`MPI_Irecv`) para optimizar la ejecución.
- Finaliza el bucle cuando se alcanza una condición específica.

## Finalización del entorno MPI
```c
MPI_Finalize();
```
- Finaliza el entorno MPI. Se debe llamar una vez que todos los procesos hayan terminado.
