# Parcial extra de SCD: explicación de la solución

Ismael Sallami Moreno · Doble Grado en Ingeniería Informática + ADE

Se han supuesto 10 rondas, 4 jugadores y direcciones aleatorias.

La idea que he seguido para la implementación de la solución al minijuego de Mario
Party, en el que los jugadores deben de pulsar una dirección y si coincide con la
dirección aleatoria en la que se ha puesto el corazón, el primer jugador que llegue a
dicho corazón se lleva 5, el segundo 3 y los demás 2, ha sido el siguiente:

- Servirme de las estructuras abstractas semáforos de la clase `scd.cpp`, en especial
  he usado 3:
    - `corazon_disponible`: para indicar cuando el corazón estaba disponible.
    - `puede_generar`: para indicarle que puede generar.
    - `fin_ronda`: para que las impresiones de mensajes y operaciones no se vean
      afectadas por las condiciones de carrera.

- Usar numerosos candados/mutex, aunque he usado más de la cuenta pero quería dejar
  claro que para cada operación que realizaba usaba uno distinto.

- Usar una variable booleana `fin` para indicar el fin del juego, en ese caso realizar
  las operaciones correspondientes como espera a los jugadores y demás.

- Hebra jugador: la idea ha sido que el jugador espere a que el corazón esté disponible
  mediante el uso del semáforo `corazon_disponible`, comprobar si no se había acabado y
  entonces calcular una dirección aleatoria hacia donde mira el jugador y si esta
  coincide sumarle los puntos correspondientes en función de su llegada, si era el
  primero se le daban 5, si era el segundo se le daban 3 y para los demás 2 puntos.
  Luego hacer el signal de `fin_ronda` en el caso de que este jugador sea el último de
  la ronda.

- Hebra NPC: esta hebra se encarga de recorrer las rondas, reasignando el valor 0 al
  inicio de cada ronda a las variables `jugadores_actuales` (para determinar si el
  jugador es el último en la función de la hebra jugador) y `puestoJugador`, que la
  usamos en la asignación de puntos que explicaré a continuación. Además, debe de
  encargarse de realizar los signal a todos los jugadores dentro de un bucle cada vez
  que se genere un corazón y además esperar al semáforo de `fin_ronda`. Una vez que el
  booleano true sea cierto debemos de indicarlo a cada uno de los jugadores.

- Asignación de puntos: suponiendo que debemos de asignar los puntos en el orden
  anteriormente expuesto, hemos establecido un array con los valores de 5, 3, 2 y
  comprobamos con la variable `puestoJugador` qué puesto le corresponde: si es el
  puesto 0 del array se le asigna 5 puntos, si es el 1 se le asigna 3 puntos y en otro
  caso no podemos aumentar más dicha variable, lo que se traduce en que el resto de
  jugadores que lleguen van a ganar 2 puntos.

El código está aún más detallado línea por línea. Se han implementado funciones
auxiliares para mejorar la coherencia del código y la complejidad del mismo.

La salida de la ejecución, con la orden de compilación que se usó, está en
`sol_SallamiMorenoIsmael_SCD_P1yP2.txt`.
