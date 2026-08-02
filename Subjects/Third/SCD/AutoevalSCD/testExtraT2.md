# Test de Prácticas de Sistemas Concurrentes y Distribuidos - Tema 2 - Exclusión Mutua

* **Autor:** Ismael Sallami Moreno
* **Titulación:** Doble Grado en Ingeniería Informática y ADE

1. ¿Qué garantiza el algoritmo de Dijkstra para N procesos?

    - ( ) Acceso simultáneo a la sección crítica
    - ( ) Eliminación de la necesidad de turnos
    - ( ) Exclusión mutua con tiempo de espera limitado
    - ( ) Uso de variables globales compartidas
    - (x) Exclusión mutua sin control de inanición

    > Exclusión mutua sin control de inanición.

2. ¿Qué propiedad NO es garantizada por el algoritmo de Dijkstra?

    - ( ) Uso equitativo de los recursos
    - ( ) Alcanzabilidad de la sección crítica
    - ( ) Exclusión mutua
    - (x) Ausencia de inanición
    - ( ) Seguridad en el acceso a recursos compartidos

    > El algoritmo de Dijkstra no garantiza la ausencia de inanición.

3. ¿Qué representa el turno en un algoritmo de exclusión mutua?

    - ( ) La señal para finalizar el programa
    - ( ) La prioridad fija de un proceso
    - (x) El permiso para acceder a la sección crítica
    - ( ) La posición en la cola de espera
    - ( ) La cantidad de procesos activos en el sistema

    > El permiso para acceder a la sección crítica.

4. ¿Qué asegura el algoritmo de Peterson al pasar entre etapas?

    - ( ) La etapa más alta siempre está vacía
    - ( ) Los procesos se bloquean indefinidamente
    - ( ) El acceso a la sección crítica se distribuye aleatoriamente
    - ( ) Los procesos siempre progresan de forma equitativa
    - (x) Un proceso no avanza sólo si no está más adelantado que los demás y es el último en asignar el turno

    > El algoritmo de Peterson asegura que un proceso no avanza solo si no está más adelantado que los demás y es el último en asignar el turno.

5. ¿Qué asegura el uso de etapas en el algoritmo de Peterson?

    - ( ) Interrupción de procesos de bajo nivel
    - ( ) Eliminación de etapas redundantes
    - ( ) Mayor velocidad de procesamiento
    - ( ) Eliminación del uso de tokens
    - (x) Exclusión mutua y equidad

    > El uso de etapas en el algoritmo de Peterson asegura la exclusión mutua y equidad.

6. ¿Cuál es una de las condiciones de Dijkstra para la exclusión mutua?

    - (x) Un proceso fuera de la sección crítica no debe bloquear a otros procesos
    - ( ) Asignar recursos de manera aleatoria
    - ( ) Usar variables globales como única solución
    - ( ) Los procesos deben ejecutarse secuencialmente
    - ( ) Los procesos pueden detenerse indefinidamente

    > Una de las condiciones de Dijkstra para la exclusión mutua es que un proceso fuera de la sección crítica no debe bloquear a otros procesos.

7. ¿Cómo maneja el algoritmo de Dijkstra las prioridades entre procesos?

    - ( ) Asignando turnos de manera fija
    - ( ) Permitiendo que los procesos esperen indefinidamente
    - ( ) Usando una cola FIFO
    - ( ) Asignando valores aleatorios a los procesos
    - (x) Implementando un contador global de turnos

    > El algoritmo de Dijkstra maneja las prioridades entre procesos implementando un contador global de turnos.

8. ¿Qué propiedad asegura el algoritmo de Peterson?

    - ( ) Solo funciona con dos procesos
    - ( ) Necesita una red de comunicaciones
    - (x) Garantiza exclusión mutua y evita inanición
    - ( ) Depende de semáforos externos
    - ( ) Permite acceso prioritario a un proceso

    > El algoritmo de Peterson garantiza exclusión mutua y evita inanición.

9. ¿Qué significa "progreso finito" en el contexto de Dijkstra?

    - ( ) La ejecución de un proceso no se interrumpe
    - ( ) Todos los procesos se ejecutan en paralelo
    - ( ) Los procesos avanzan indefinidamente sin detenerse
    - (x) Los procesos tienen un tiempo finito para entrar a la sección crítica
    - ( ) El acceso a la memoria es constante

    > Progreso finito significa que los procesos tienen un tiempo finito para entrar a la sección crítica.

10. ¿Qué mejora introduce el algoritmo de Peterson para N procesos?

    - ( ) Sustituye la necesidad de semáforos por variables clave locales
    - ( ) Requiere menos pasos que el algoritmo de Dekker
    - ( ) Permite acceso simultáneo a la sección crítica
    - (x) Garantiza exclusión mutua para cualquier cantidad de procesos
    - ( ) Elimina la inanición en sistemas distribuidos

    > El algoritmo de Peterson para N procesos garantiza exclusión mutua para cualquier cantidad de procesos.

11. ¿Cómo soluciona el algoritmo de Knuth la inanición en exclusión mutua?

    - ( ) Eliminando los procesos en espera
    - ( ) Permitiendo que todos los procesos avancen simultáneamente
    - (x) Garantizando que el tiempo de espera sea limitado para cada proceso
    - ( ) Bloqueando procesos con menor prioridad
    - ( ) Usando turnos circulares para la asignación de recursos

    > El algoritmo de Knuth soluciona la inanición garantizando que el tiempo de espera sea limitado para cada proceso y usando turnos circulares para la asignación de recursos.

12. ¿Qué hace un proceso después de usar la sección crítica en el algoritmo de Peterson?

    - ( ) Solicita nuevamente el turno
    - ( ) Envía mensajes a otros procesos
    - (x) Libera su bandera de "solicitado"
    - ( ) Bloquea a los otros procesos
    - ( ) Incrementa un contador global

    > Después de usar la sección crítica, un proceso en el algoritmo de Peterson libera su bandera de 'solicitado'.

13. ¿Qué ocurre si dos procesos intentan acceder simultáneamente en el algoritmo de Peterson?

    - ( ) Se produce un interbloqueo
    - (x) Se respetan las reglas de exclusión mutua
    - ( ) Ambos procesos fallan
    - ( ) Ambos entran a la sección crítica
    - ( ) Uno de ellos puede quedar bloqueado indefinidamente

    > Si dos procesos intentan acceder simultáneamente en el algoritmo de Peterson, se respetan las reglas de exclusión mutua.

14. ¿Qué técnica introduce el algoritmo de Knuth?

    - ( ) Uso de prioridad fija entre procesos
    - ( ) Uso de semáforos para exclusión mutua
    - ( ) Solución parcial para sistemas distribuidos
    - (x) Retraso limitado en el acceso a la sección crítica
    - ( ) Inanición de procesos

    > El algoritmo de Knuth introduce la técnica de retraso limitado en el acceso a la sección crítica.

15. ¿Cómo resuelve el método de refinamiento sucesivo el problema de exclusión mutua?

    - ( ) Eliminando el uso de turnos
    - ( ) Permitiendo que dos procesos entren simultáneamente
    - ( ) Usando semáforos binarios
    - (x) Implementando bucles de espera activa para decidir el acceso
    - ( ) Dividiendo el problema en múltiples secciones críticas

    > El método de refinamiento sucesivo resuelve el problema de exclusión mutua implementando bucles de espera activa para decidir el acceso.

16. ¿Qué es una "etapa" en el algoritmo de Peterson para N procesos?

    - ( ) Un mecanismo de exclusión global
    - ( ) Un nivel de prioridad fijo para los procesos
    - ( ) Un bucle infinito en la ejecución
    - (x) Una fase de sincronización antes de la sección crítica
    - ( ) Una señal de error en el sistema

    > Una 'etapa' en el algoritmo de Peterson para N procesos es un nivel de prioridad fijo para los procesos y una fase de sincronización antes de la sección crítica.

17. ¿Qué condición debe cumplirse para que un proceso entre a la sección crítica en el algoritmo de Peterson?

    - (x) Su turno no debe coincidir o la clave del otro proceso debe ser falsa
    - ( ) Su contador debe superar al de los demás procesos
    - ( ) Su clave de solicitud debe ser verdadera
    - ( ) Su prioridad debe ser la más alta
    - ( ) Su solicitud debe ser la primera en la cola

    > Para que un proceso entre a la sección crítica en el algoritmo de Peterson, su turno no debe coincidir o la clave del otro proceso debe ser falsa.

18. ¿Qué problema puede surgir al verificar las claves en algoritmos de refinamiento sucesivo?

    - ( ) Los turnos se asignan de manera inconsistente
    - (x) No se realiza la salida de la espera activa de forma atómica
    - ( ) Se producen interrupciones aleatorias
    - ( ) Bloqueo mutuo al intercambiar turnos
    - ( ) Los procesos entran en la sección crítica sin permiso

    > No se realiza la salida de la espera activa de forma atómica.

19. ¿Qué problema intenta resolver la exclusión mutua?

    - ( ) Bloquear indefinidamente todos los procesos
    - ( ) Evitar el uso de recursos por parte de un proceso
    - ( ) Permitir que todos los procesos accedan a la sección crítica simultáneamente
    - ( ) Acelerar el acceso de los procesos a la memoria compartida
    - (x) Evitar el acceso simultáneo de múltiples procesos a una sección crítica

    > La exclusión mutua intenta evitar el acceso simultáneo de múltiples procesos a una sección crítica.

20. ¿Qué ocurre si todos los procesos solicitan acceso simultáneamente en el algoritmo de Dijkstra?

    - ( ) Los procesos se ordenan en cola de prioridad
    - ( ) Se produce un interbloqueo
    - (x) Uno de ellos accede según el turno asignado
    - ( ) El sistema queda bloqueado indefinidamente
    - ( ) Todos acceden simultáneamente

    > Si todos los procesos solicitan acceso simultáneamente en el algoritmo de Dijkstra, uno de ellos accede según el turno asignado.

21. ¿Qué condición garantiza el algoritmo de Knuth?

    - ( ) Reducción del tiempo de espera a 0
    - ( ) Eliminación de procesos en espera
    - ( ) Inanición de procesos
    - ( ) Interbloqueo constante
    - (x) Exclusión mutua

    > El algoritmo de Knuth garantiza la exclusión mutua.

22. ¿Qué garantiza el algoritmo de Dekker?

    - ( ) Equidad completa entre procesos
    - ( ) Inanición de todos los procesos
    - ( ) Una solución distribuida
    - ( ) Ejecución simultánea en la sección crítica
    - (x) Exclusión mutua, pero puede causar inanición

    > El algoritmo de Dekker garantiza la exclusión mutua, pero puede causar inanición.

23. ¿Qué garantiza la propiedad de equidad en exclusión mutua?

    - ( ) Todos los procesos son bloqueados simultáneamente
    - ( ) Todos los procesos avanzan al mismo tiempo
    - ( ) Solo un proceso ejecuta indefinidamente
    - (x) Los procesos acceden en orden sin preferencia indebida
    - ( ) No hay necesidad de sincronización

    > La propiedad de equidad en exclusión mutua garantiza que los procesos acceden en orden sin preferencia indebida.

24. ¿Qué asegura la verificación de exclusión mutua en un algoritmo para N procesos?

    - ( ) Bloquear indefinidamente los procesos que esperan
    - (x) Garantizar que solo un proceso entre en la sección crítica a la vez
    - ( ) Asignar recursos de manera aleatoria
    - ( ) Permitir acceso simultáneo a múltiples procesos
    - ( ) Prohibir la entrada de todos los procesos

    > La verificación de exclusión mutua en un algoritmo para N procesos garantiza que solo un proceso entre en la sección crítica a la vez.

25. ¿Cuál es el principal problema de los bucles de espera activa?

    - ( ) Reducen el tiempo de espera de los procesos
    - ( ) Facilitan la exclusión mutua
    - (x) Pueden generar uso innecesario de recursos
    - ( ) Eliminan la necesidad de sincronización
    - ( ) Incrementan la equidad del sistema

    > El principal problema de los bucles de espera activa es que pueden generar uso innecesario de recursos.
