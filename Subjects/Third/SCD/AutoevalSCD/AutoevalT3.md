# Test de Prácticas de Sistemas Concurrentes y Distribuidos - Tema 3 - Sistemas basados en el paso de mensajes

* **Autor:** Ismael Sallami Moreno
* **Titulación:** Doble Grado en Ingeniería Informática y ADE

1. ¿Qué problema resuelve la espera selectiva?

    - (x) La recepción no determinística de señales.
    - ( ) La prioridad entre alternativas.
    - ( ) La reducción de recursos de hardware.
    - ( ) El uso de búferes compartidos.
    - ( ) La sincronización entre nodos paralelos.

    > La espera selectiva resuelve la recepción no determinística de señales.

2. ¿Qué ocurre si ninguna guarda es ejecutable en un select?

    - ( ) Se selecciona una guarda potencialmente ejecutable.
    - ( ) La instrucción select se bloquea.
    - ( ) La instrucción termina inmediatamente.
    - (x) Se genera un error o excepción.
    - ( ) El proceso emisor se bloquea.

    > Si ninguna guarda es ejecutable en un select, se genera un error o excepción.

3. ¿En qué caso la sentencia select selecciona no determinísticamente una alternativa?

    - ( ) Cuando todas las alternativas contienen condiciones lógicas falsas.
    - ( ) Cuando ninguna alternativa es ejecutable ni potencialmente ejecutable.
    - (x) Cuando hay alternativas potencialmente ejecutables sin una orden de recibir mensajes en la guarda.
    - ( ) Cuando todas las alternativas son ejecutables y tienen una orden de recibir mensajes.

    > La sentencia select selecciona no determinísticamente una alternativa cuando hay alternativas potencialmente ejecutables sin una orden de recibir mensajes en la guarda.

4. ¿Cuál es una ventaja principal de las arquitecturas con múltiples elementos de cómputo?

    - ( ) Mayor costo de producción.
    - ( ) Menor escalabilidad.
    - ( ) Requieren más energía.
    - ( ) Uso exclusivo de hardware especializado.
    - (x) Mejor rendimiento al evitar el cuello de botella.

    > Una ventaja principal de las arquitecturas con múltiples elementos de cómputo es el mejor rendimiento al evitar el cuello de botella.

5. En el modelo SPMD, ¿qué característica principal lo distingue?

    - ( ) Comunicación asíncrona entre nodos.
    - ( ) Uso exclusivo de hardware SIMD.
    - ( ) Uso de un procesador único.
    - (x) Código idéntico ejecutado sobre diferentes datos.
    - ( ) Código único ejecutado sobre datos idénticos.

    > En el modelo SPMD, la característica principal es el código idéntico ejecutado sobre diferentes datos.

6. ¿Qué problema es común en sistemas distribuidos con paso de mensajes?

    - (x) Complejidad en la sincronización.
    - ( ) Facilidad de depuración.
    - ( ) Baja interoperabilidad.
    - ( ) Escalabilidad ilimitada.
    - ( ) Dependencia de memoria compartida.

    > Un problema común en sistemas distribuidos con paso de mensajes es la complejidad en la sincronización.

7. ¿Qué tipo de operación de paso de mensajes no bloquea al emisor?

    - ( ) Operación con comunicación garantizada.
    - (x) Operación no bloqueante.
    - ( ) Operación de cita.
    - ( ) Operación síncrona.
    - ( ) Operación en búfer.

    > Una operación de paso de mensajes no bloqueante no bloquea al emisor.

8. ¿Qué define una comunicación con cita en paso de mensajes?

    - ( ) Comunicación de baja latencia.
    - (x) Comunicación síncrona sin búfer.
    - ( ) Comunicación no bloqueante con hardware especializado.
    - ( ) Comunicación asíncrona sin búfer.
    - ( ) Comunicación síncrona con búfer.

    > Una comunicación con cita en paso de mensajes se define como comunicación síncrona sin búfer.

9. ¿Cuál de los siguientes lenguajes utiliza bindings para MPI?

    - ( ) PHP.
    - (x) FORTRAN.
    - ( ) Ruby.
    - ( ) JavaScript.
    - ( ) Python.

    > FORTRAN utiliza bindings para MPI.

10. ¿Qué significa MPI_Comm_size en el contexto de MPI?

    - ( ) Calcula el tamaño máximo del mensaje.
    - ( ) Establece las etiquetas de los mensajes.
    - (x) Determina el número de procesos en un comunicador.
    - ( ) Inicia la comunicación entre procesos.
    - ( ) Define el tamaño del búfer de mensajes.

    > MPI_Comm_size en el contexto de MPI determina el número de procesos en un comunicador.

11. ¿Qué es un cuello de botella en arquitecturas de programa único almacenado?

    - ( ) Limitación en el número de instrucciones ejecutadas simultáneamente.
    - ( ) Uso excesivo de la memoria compartida.
    - ( ) Baja velocidad de las operaciones en paralelo.
    - ( ) Alta latencia de las operaciones aritméticas.
    - (x) Lentitud en el bus de datos.

    > Un cuello de botella en arquitecturas de programa único almacenado es la lentitud en el bus de datos.

12. ¿Qué es una guarda en una instrucción select?

    - ( ) Un protocolo de comunicación síncrono.
    - ( ) Un identificador único para procesos.
    - ( ) Una sentencia que fuerza una condición.
    - (x) Una condición lógica que habilita una alternativa.
    - ( ) Un mecanismo para evitar interbloqueos.

    > Una guarda en una instrucción select es una condición lógica que habilita una alternativa.

13. ¿Qué alternativa es correcta para sistemas con paso de mensajes?

    - ( ) Siempre dependen de memoria compartida.
    - (x) Permiten comunicación entre procesos independientes.
    - ( ) Limitan la cantidad de procesos en ejecución.
    - ( ) No requieren sincronización entre procesos.
    - ( ) Excluyen operaciones síncronas.

    > Una alternativa correcta para sistemas con paso de mensajes es que permiten comunicación entre procesos independientes.

14. ¿Qué instrucción de MPI inicia una comunicación no bloqueante?

    - ( ) MPI_Send.
    - ( ) MPI_Irecv.
    - ( ) MPI_Recv.
    - (x) MPI_Isend.
    - ( ) MPI_Wait.

    > MPI_Isend inicia una comunicación no bloqueante en MPI.

15. ¿Qué ventaja ofrece el paso de mensajes con búfer?

    - ( ) Mejora en la eficiencia del hardware.
    - (x) Reducción del tiempo de espera.
    - ( ) Reducción de memoria utilizada.
    - ( ) Mayor flexibilidad en el código.
    - ( ) Eliminación de interbloqueos.

    > El paso de mensajes con búfer ofrece la ventaja de reducción del tiempo de espera.

16. ¿Qué herramienta facilita la ejecución de programas MPI?

    - (x) mpirun.
    - ( ) MPI_Get_Count.
    - ( ) PVM.
    - ( ) mpicc.
    - ( ) mpi.h.

    > mpirun facilita la ejecución de programas MPI.

17. ¿Cuál es un ejemplo de comunicación síncrona en sistemas distribuidos?

    - ( ) Intercambio de mensajes en paralelo.
    - ( ) Comunicación basada en búferes internos.
    - (x) Operaciones de cita entre procesos.
    - ( ) Comunicación con operaciones no bloqueantes.
    - ( ) Comunicación con hardware especializado.

    > Un ejemplo de comunicación síncrona en sistemas distribuidos son las operaciones de cita entre procesos.

18. ¿Qué define el término "cliente" en un modelo cliente/servidor?

    - ( ) Un proceso que almacena mensajes.
    - (x) Un proceso activo que solicita servicios.
    - ( ) Un proceso intermedio entre servidor y base de datos.
    - ( ) Un proceso pasivo que recibe datos.
    - ( ) Un controlador centralizado.

    > En un modelo cliente/servidor, un cliente es un proceso activo que solicita servicios.

19. ¿Qué representa una alternativa indexada en un select?

    - ( ) Varias alternativas combinadas en una sola.
    - (x) Una forma de replicar alternativas con índices.
    - ( ) Una instrucción para manejar errores.
    - ( ) Una comunicación síncrona.
    - ( ) Un índice que prioriza procesos.

    > Una alternativa indexada en un select es una forma de replicar alternativas con índices.

20. ¿Qué tipo de mensajes permite el uso de MPI_ANY_SOURCE?

    - (x) Mensajes de cualquier origen.
    - ( ) Mensajes sin etiquetas.
    - ( ) Mensajes con etiquetas específicas.
    - ( ) Mensajes de un único proceso.
    - ( ) Mensajes bloqueados.

    > MPI_ANY_SOURCE permite mensajes de cualquier origen.

21. ¿Qué proceso controla la sincronización en un sistema productor-consumidor?

    - ( ) Consumidor.
    - ( ) Productor.
    - (x) Búfer intermedio.
    - ( ) Coordinador externo.
    - ( ) Cliente.

    > En un sistema productor-consumidor, el búfer intermedio controla la sincronización.

22. ¿Qué modelo de multiprocesamiento utiliza múltiples procesadores para ejecutar instrucciones independientes?

    - (x) MIMD.
    - ( ) SISD.
    - ( ) SIMD.
    - ( ) MISD.
    - ( ) SPMD.

    > El modelo de multiprocesamiento MIMD utiliza múltiples procesadores para ejecutar instrucciones independientes.

23. ¿Qué asegura una guarda ejecutable en un select?

    - ( ) La transmisión directa de datos sin validación.
    - ( ) La ejecución inmediata del proceso emisor.
    - ( ) La ejecución de varias alternativas nodeterminísticamente.
    - (x) Que el proceso receptor esté listo para recibir.
    - ( ) La sincronización de todos los procesos.

    > Una guarda ejecutable en un select asegura que el proceso receptor esté listo para recibir.

24. ¿Qué mecanismo minimiza interbloqueos en comunicación no bloqueante?

    - (x) MPI_Test.
    - ( ) MPI_Get_Count.
    - ( ) MPI_Comm_rank.
    - ( ) MPI_Wait.
    - ( ) MPI_Recv.

    > MPI_Test minimiza interbloqueos en comunicación no bloqueante.

25. ¿Qué instrucción libera una solicitud en MPI?

    - ( ) MPI_Finalize.
    - ( ) MPI_Wait.
    - (x) MPI_Request_free.
    - ( ) MPI_Recv.
    - ( ) MPI_Send.

    > MPI_Request_free libera una solicitud en MPI.
