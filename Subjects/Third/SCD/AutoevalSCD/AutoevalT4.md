# Test de Prácticas de Sistemas Concurrentes y Distribuidos - Tema 4 - Sistemas de Tiempo Real

* **Autor:** Ismael Sallami Moreno
* **Titulación:** Doble Grado en Ingeniería Informática y ADE

1. Una tarea espaciada por "Jitter" o deriva tiene:

    - ( ) Activaciones a intervalos exactos
    - ( ) Holgura máxima constante
    - ( ) Prioridades dinámicas en cada activación
    - (x) Variaciones en su tiempo de activación
    - ( ) Plazos de respuesta arbitrarios

    > Las tareas espaciadas por 'Jitter' tienen variaciones en su tiempo de activación.

2. ¿Qué propiedad define el determinismo en los STR?

    - ( ) Interrupciones rápidas y eficientes
    - ( ) Ejecutar tareas concurrentes
    - ( ) Acceso a recursos compartidos
    - (x) Predecir con certeza los tiempos de respuesta
    - ( ) Asignación dinámica de prioridades

    > El determinismo en los STR permite predecir con certeza los tiempos de respuesta.

3. El modelo de tareas simples asume:

    - ( ) Dependencia entre todas las tareas
    - ( ) Exclusión mutua en tiempo real
    - ( ) Acceso concurrente a recursos compartidos
    - (x) Tareas periódicas con plazos iguales a su periodo
    - ( ) Activaciones dinámicas no predecibles

    > El modelo de tareas simples asume tareas periódicas con plazos iguales a su periodo.

4. ¿Qué factor reduce los bloqueos en sistemas STR?

    - ( ) Uso de algoritmos dinámicos
    - ( ) Planificación con servidores diferidos
    - (x) Protocolos de techo de prioridad
    - ( ) Todas las anteriores
    - ( ) Exclusión mutua en todos los recursos

    > Los protocolos de techo de prioridad reducen los bloqueos en sistemas STR.

5. La prioridad relativa en un esquema RMS se basa en:

    - ( ) Número de recursos compartidos
    - ( ) Tiempo de respuesta más corto
    - (x) Periodos más pequeños
    - ( ) Uso eficiente de CPU
    - ( ) Plazos de respuesta máximos

    > En un esquema RMS, la prioridad relativa se basa en periodos más pequeños.

6. El bloqueo indirecto ocurre cuando:

    - ( ) Dos tareas tienen igual prioridad
    - ( ) Las tareas tienen restricciones temporales flexibles
    - ( ) Ninguna de las anteriores
    - ( ) Una tarea depende de múltiples recursos
    - (x) Un recurso compartido interfiere en tareas no relacionadas

    > El bloqueo indirecto ocurre cuando un recurso compartido interfiere en tareas no relacionadas.

7. ¿Qué ocurre en un STR durante una sobrecarga transitoria?

    - ( ) La planificación dinámica falla
    - ( ) La prioridad máxima se asigna automáticamente
    - (x) Los esquemas estáticos son más predecibles
    - ( ) Todas las tareas se reinician
    - ( ) Las tareas de menor prioridad se descartan

    > Durante una sobrecarga transitoria, los esquemas estáticos son más predecibles.

8. El análisis de planificabilidad con servidor diferido garantiza:

    - ( ) Mayor flexibilidad en tareas aperiódicas
    - ( ) Exclusión de tareas esporádicas
    - ( ) Uso máximo de CPU
    - ( ) Bloqueos mínimos en recursos compartidos
    - (x) Plazos cumplidos para tareas periódicas

    > El análisis de planificabilidad con servidor diferido garantiza plazos cumplidos para tareas periódicas.

9. Un sistema operativo de tiempo real garantiza:

    - ( ) Multitarea ilimitada
    - ( ) Exclusión mutua en todos los recursos
    - ( ) Acceso prioritario a memoria
    - ( ) Máxima utilización de CPU
    - (x) Respuesta dentro de un tiempo limitado predefinido

    > Un sistema operativo de tiempo real garantiza respuesta dentro de un tiempo limitado predefinido.

10. ¿Qué significa STR de misión crítica?

    - ( ) Tareas con tiempo límite flexible
    - (x) Tareas donde la falla puede tener consecuencias graves
    - ( ) Tareas con alta tolerancia a fallos
    - ( ) Planificación exclusivamente dinámica
    - ( ) Aplicaciones que solo usan recursos compartidos

    > STR de misión crítica significa tareas donde la falla puede tener consecuencias graves.

11. Un ejemplo de STR permisivo es:

    - ( ) Monitoreo de redes
    - ( ) Control de tráfico aéreo
    - (x) Adquisición de datos meteorológicos
    - ( ) Reservas de vuelos
    - ( ) Planificación de producción

    > Un ejemplo de STR permisivo es la adquisición de datos meteorológicos.

12. ¿Qué tipo de tiempo NO es usado en los STR?

    - ( ) Relativo
    - (x) Incremental
    - ( ) Absoluto
    - ( ) GPS
    - ( ) Atómico

    > El tiempo incremental no es usado en los STR.

13. ¿Cuál es una característica clave de los relojes de tiempo real?

    - ( ) Sincronización con tiempo relativo
    - ( ) Deriva acumulativa constante
    - (x) Tiempo de desbordamiento definido
    - ( ) Baja precisión
    - ( ) Granularidad variable

    > Una característica clave de los relojes de tiempo real es el tiempo de desbordamiento definido.

14. Un temporizador periódico se caracteriza por:

    - ( ) Activarse una vez y detenerse
    - ( ) Presentar una deriva acumulativa constante
    - (x) Realizar activaciones repetitivas en intervalos definidos
    - ( ) Permitir modificaciones dinámicas de los intervalos
    - ( ) Interrumpir la planificación actual

    > Un temporizador periódico se caracteriza por realizar activaciones repetitivas en intervalos definidos.

15. ¿Qué atributo temporal tiene una tarea de tiempo real?

    - ( ) Periodo mínimo de activación
    - ( ) Prioridad dinámica asignada
    - (x) Tiempo de cómputo máximo
    - ( ) Número máximo de interrupciones
    - ( ) Tiempo de respuesta variable

    > Una tarea de tiempo real tiene como atributo temporal el tiempo de cómputo máximo.

16. ¿Cuál es una característica clave de los STR?

    - ( ) Exclusión de tareas concurrentes
    - ( ) Uso de sistemas operativos generales
    - ( ) Uso exclusivo de tareas periódicas
    - (x) Respuesta correcta dentro de un tiempo límite
    - ( ) Alta disponibilidad de memoria

    > Una característica clave de los STR es la respuesta correcta dentro de un tiempo límite.

17. ¿Qué tipo de tarea se activa en instantes arbitrarios?

    - ( ) Esporádica
    - (x) Aperiódica
    - ( ) Periódica
    - ( ) Asíncrona
    - ( ) Sincrónica

    > Una tarea aperiódica se activa en instantes arbitrarios.

18. La planificación cíclica usa:

    - ( ) Exclusión de tareas esporádicas
    - ( ) Prioridades dinámicas
    - ( ) Acceso a múltiples procesadores
    - (x) Hiperperiodos basados en MCM
    - ( ) Algoritmos de análisis temporal

    > La planificación cíclica usa hiperperiodos basados en MCM.

19. Un algoritmo dinámico como EDF asigna prioridad según:

    - ( ) Uso del procesador más bajo
    - (x) Tiempo límite más próximo
    - ( ) Periodos más cortos
    - ( ) Requerimientos de memoria
    - ( ) Holgura más alta

    > Un algoritmo dinámico como EDF asigna prioridad según el tiempo límite más próximo.

20. ¿En qué consiste la inversión de prioridad?

    - ( ) Un error en el orden de asignación de prioridades
    - (x) Una tarea prioritaria puede quedar bloqueada indefinidamente
    - ( ) La planificación cíclica falla en el análisis de Gantt
    - ( ) Ninguna de las anteriores
    - ( ) Las tareas menos críticas interrumpen las más importantes

    > La inversión de prioridad ocurre cuando una tarea prioritaria puede quedar bloqueada indefinidamente.

21. El protocolo de herencia de prioridad:

    - ( ) Garantiza exclusión mutua completa
    - ( ) Desactiva tareas aperiódicas
    - ( ) Asigna prioridad máxima a todas las tareas
    - ( ) Reduce las prioridades de tareas esporádicas
    - (x) Dinamiza prioridades según el bloqueo de recursos

    > El protocolo de herencia de prioridad dinamiza prioridades según el bloqueo de recursos.

22. ¿Qué es el "techo de prioridad" de un recurso?

    - ( ) Un atributo dinámico definido por EDF
    - ( ) La prioridad mínima que puede acceder al recurso
    - ( ) La prioridad asignada por el sistema operativo
    - (x) La prioridad más alta que puede bloquear
    - ( ) La prioridad promedio de las tareas que lo usan

    > El 'techo de prioridad' de un recurso es la prioridad más alta que puede bloquear.

23. Un servidor diferido es útil para:

    - ( ) Sincronizar relojes del sistema
    - (x) Gestionar peticiones aperiódicas
    - ( ) Sustituir el protocolo de herencia
    - ( ) Optimizar los tiempos de cómputo máximo
    - ( ) Tareas periódicas críticas

    > Un servidor diferido es útil para gestionar peticiones aperiódicas.

24. El test de Liu y Layland (RMS) es aplicable a:

    - ( ) Sistemas distribuidos concurrentes
    - ( ) Tareas esporádicas con plazos variables
    - (x) Tareas periódicas independientes
    - ( ) Procesos con múltiples recursos compartidos
    - ( ) Tareas aperiódicas con plazos fijos

    > El test de Liu y Layland (RMS) es aplicable a tareas periódicas independientes.

25. ¿Cuál es el límite de utilización de CPU para N tareas según RMS?

    - ( ) U0 × N
    - ( ) N × 2^(1/N)
    - ( ) N(3^(1/N))
    - ( ) N^2 × T
    - (x) N(2^(1/N) − 1)

    > El límite de utilización de CPU para N tareas según RMS es N(2^(1/N) − 1).
