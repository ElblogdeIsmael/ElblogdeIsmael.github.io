# Test de Prácticas de Sistemas Concurrentes y Distribuidos - Tema 1

* **Autor:** Ismael Sallami Moreno
* **Titulación:** Doble Grado en Ingeniería Informática y ADE

1. ¿Qué significa «irrepetibilidad de las secuencias de instrucciones» en la programación concurrente?

    - ( ) Los programas concurrentes nunca tienen errores.
    - ( ) La velocidad de ejecución determina la secuencia de instrucciones.
    - (x) Los programas concurrentes generan muchas intercalaciones de instrucciones posibles, por lo que es poco probable que se repitan caminos.
    - ( ) Los procesos siguen siempre la misma secuencia de ejecución.
    - ( ) Dos ejecuciones seguirán probablemente el mismo camino.

    > Los programas concurrentes generan muchas intercalaciones de instrucciones posibles, por lo que es poco probable que se repitan caminos.

2. ¿Qué reto presentan las trazas de ejecución de los programas concurrentes?

    - ( ) Siempre conducen a un punto muerto.
    - ( ) Las trazas garantizan que se producirán errores.
    - ( ) Generan numerosas secuencias de intercalación posibles, lo que complica la predicción.
    - (x) Las trazas no pueden utilizarse con fines de depuración.
    - ( ) Siguen un patrón predecible y repetible.

    > Las trazas no pueden utilizarse con fines de depuración.

3. ¿Qué son los «errores transitorios» en el contexto de los programas concurrentes?

    - ( ) Errores que son fáciles de detectar y solucionar.
    - ( ) Errores que se producen aleatoriamente y no tienen solución.
    - ( ) Errores que nunca se producen en los programas concurrentes.
    - ( ) Errores que aparecen siempre en la misma ejecución.
    - (x) Errores que aparecen en algunas ejecuciones pero no en otras, lo que dificulta su detección.

    > Errores que aparecen en algunas ejecuciones pero no en otras, lo que dificulta su detección.

4. ¿Por qué es difícil depurar programas concurrentes?

    - ( ) Debido a la previsibilidad de las secuencias de ejecución.
    - ( ) Porque los errores transitorios aparecen en cada traza.
    - ( ) La depuración de programas concurrentes no difiere de la de los secuenciales.
    - (x) Debido a la imprevisibilidad de las secuencias de ejecución y a la posibilidad de que haya trazas diferentes en cada ejecución.
    - ( ) Porque los programas concurrentes siempre se ejecutan sin errores.

    > Debido a la imprevisibilidad de las secuencias de ejecución y a la posibilidad de que haya trazas diferentes en cada ejecución.

5. ¿Cuál de las siguientes es una solución para garantizar la corrección de los programas concurrentes?

    - ( ) Confiar sólo en la comprobación manual de errores.
    - (x) Utilizar métodos formales basados en la lógica matemática para verificar la corrección.
    - ( ) Ignorar los errores transitorios porque ocurren raramente.
    - ( ) Se puede garantizar la corrección sin ningún método formal.
    - ( ) Utilizar la fuerza bruta para reejecutar el programa varias veces.

    > Utilizar métodos formales basados en la lógica matemática para verificar la corrección.

6. ¿Qué es una traza en el contexto de la programación concurrente?

    - (x) Una secuencia de estados del programa producidos por un intercalado específico de instrucciones.
    - ( ) El historial de cómo se modifican las variables durante la compilación.
    - ( ) Un registro de todos los errores en la ejecución de un programa.
    - ( ) La ejecución de un único proceso de forma aislada.
    - ( ) Una secuencia de operaciones atómicas de un único proceso.

    > Una secuencia de estados del programa producidos por un intercalado específico de instrucciones.

7. ¿Por qué es peligroso hacer suposiciones sobre la velocidad de ejecución de los procesos en los programas concurrentes?

    - ( ) Siempre conduce a un mejor rendimiento en todas las plataformas.
    - ( ) Los procesos más rápidos siempre garantizan mejores resultados del programa.
    - ( ) Las suposiciones de velocidad siempre aumentan la eficacia del programa.
    - (x) Los procesos pueden no funcionar correctamente en diferentes plataformas si se hacen suposiciones sobre la velocidad de ejecución.
    - ( ) La velocidad de ejecución es irrelevante para la programación concurrente.

    > Los procesos pueden no funcionar correctamente en diferentes plataformas si se hacen suposiciones sobre la velocidad de ejecución.

8. ¿Qué es una «condición de carrera» en los programas concurrentes?

    - ( ) Una situación en la que dos procesos nunca interactúan con recursos compartidos.
    - ( ) Una situación en la que el orden de ejecución de los procesos no afecta a la salida final del programa.
    - ( ) Un escenario en el que la velocidad de ejecución es siempre constante.
    - ( ) Cuando dos procesos se ejecutan siempre en un orden fijo y predecible.
    - (x) Cuando dos procesos acceden a variables compartidas en un orden impredecible en función de la velocidad de ejecución.

    > Cuando dos procesos acceden a variables compartidas en un orden impredecible en función de la velocidad de ejecución.

9. ¿Qué efecto pueden tener las condiciones de carrera en los programas concurrentes?

    - ( ) Reducen el riesgo de errores en el programa.
    - (x) Producen resultados impredecibles o incorrectos según el orden de ejecución de los procesos.
    - ( ) Producen resultados predecibles y correctos.
    - ( ) Facilitan la depuración debido a su comportamiento coherente.
    - ( ) Garantizan que todos los procesos se ejecuten de forma predecible.

    > Producen resultados impredecibles o incorrectos según el orden de ejecución de los procesos.

10. ¿En qué tipo de sistema es crítica la velocidad y el orden de ejecución de los procesos?

    - ( ) En cualquier sistema con procesos concurrentes.
    - (x) En los sistemas en tiempo real, donde la velocidad y el orden de ejecución son críticos.
    - ( ) Sistemas operativos de propósito general.
    - ( ) Sólo sistemas distribuidos.
    - ( ) Sólo en sistemas "multicore".

    > En los sistemas en tiempo real, donde la velocidad y el orden de ejecución son críticos.

11. ¿Qué implica la «independencia de la velocidad del proceso» en la programación concurrente?

    - ( ) Los procesos más lentos garantizan una mayor estabilidad del programa.
    - ( ) La velocidad de ejecución siempre determina la corrección del programa.
    - ( ) La corrección del proceso debe depender de la velocidad relativa de los procesos.
    - (x) La corrección del proceso debe ser independiente de la velocidad de ejecución, evitando las condiciones de carrera.
    - ( ) Los procesos deben ejecutarse siempre lo más rápido posible.

    > La corrección del proceso debe ser independiente de la velocidad de ejecución, evitando las condiciones de carrera.

12. ¿Qué importancia tiene la «hipótesis de progreso finito» en los programas concurrentes?

    - ( ) Sólo es aplicable a los programas secuenciales.
    - ( ) Garantiza que los procesos se completen siempre a la misma velocidad.
    - (x) Garantiza que todos los procesos completen la ejecución y progresen, evitando el bloqueo.
    - ( ) Permite que algunos procesos no terminen nunca sus tareas.
    - ( ) Permite que los procesos se detengan indefinidamente sin afectar a la corrección del programa.

    > Garantiza que todos los procesos completen la ejecución y progresen, evitando el bloqueo.

13. ¿Qué es el «progreso global» en el contexto de la ejecución concurrente?

    - ( ) Requiere que todos los procesos se ejecuten al mismo tiempo.
    - ( ) Garantiza que todos los procesos terminen la ejecución inmediatamente.
    - ( ) Es específico sólo de los sistemas en tiempo real.
    - (x) Garantiza que al menos un proceso listo para ejecutarse llegue a ejecutarse, evitando el bloqueo.
    - ( ) Garantiza que ningún proceso pueda bloquear la ejecución de otro.

    > Garantiza que al menos un proceso listo para ejecutarse llegue a ejecutarse, evitando el bloqueo.

14. ¿Qué significa «progreso local» en la programación concurrente?

    - (x) Un proceso puede detenerse a mitad de ejecución y reanudarse más tarde sin completar la sección actual.
    - ( ) Un proceso debe completar siempre todo el programa sin pausa.
    - ( ) Los procesos deben comunicarse con otros procesos para continuar la ejecución.
    - ( ) Una vez que un proceso comienza a ejecutarse, debe terminar todo el programa.
    - ( ) Una vez que un proceso empieza a ejecutar una sección de código, debe completarla sin interrupción.

    > Un proceso puede detenerse a mitad de ejecución y reanudarse más tarde sin completar la sección actual.

15. ¿Cómo evita la hipótesis del progreso finito el bloqueo en los programas concurrentes?

    - ( ) Poniendo en pausa algunos procesos para permitir que otros terminen primero.
    - ( ) Imponiendo límites temporales estrictos a la ejecución de los procesos.
    - ( ) Limitando el número de procesos que pueden ejecutarse simultáneamente.
    - ( ) Garantizando que los procesos puedan detenerse en cualquier momento.
    - (x) Garantizando que todos los procesos acaben progresando, evitando que se atasquen.

    > Garantizando que todos los procesos acaben progresando, evitando que se atasquen.

16. ¿Cuál es la definición de «propiedad de vivacidad»?

    - ( ) Una condición que sólo se aplica a los programas secuenciales.
    - (x) Una condición que establece que algo bueno debe suceder eventualmente en el futuro.
    - ( ) Una condición que debe cumplirse en cada instante de la ejecución del programa.
    - ( ) Una propiedad que define cuántos procesos pueden ejecutarse simultáneamente.
    - ( ) Una propiedad que garantiza que los procesos pueden pausarse indefinidamente.

    > Una condición que establece que algo bueno debe suceder eventualmente en el futuro.

17. ¿Qué significa el triple {P}C {Q} en el contexto de la lógica de Hoare?

    - (x) Si el programa C comienza en un estado en el que P es verdadero, entonces Q será verdadero después de que C termine de ejecutarse.
    - ( ) Garantiza que en la ejecución de varios procesos contenidos C no existen interferencias.
    - ( ) P y Q son variables que representan el tiempo de ejecución de C.
    - ( ) Si el programa C se ejecuta, siempre terminará.
    - ( ) Si el programa C se ejecuta con la máxima velocidad, P siempre será igual a Q.

    > Si el programa C comienza en un estado en el que P es verdadero, entonces Q será verdadero después de que C termine de ejecutarse.

18. ¿Cuál es el principal reto de aplicar la lógica de Hoare a los programas concurrentes?

    - ( ) Es difícil definir precondiciones y postcondiciones para cada proceso.
    - ( ) No puede manejar programas sin memoria compartida.
    - (x) La interferencia entre procesos de ejecución concurrente complica el razonamiento.
    - ( ) La lógica de Hoare requiere un número infinito de trazas de ejecución para verificar la corrección.
    - ( ) La lógica de Hoare sólo es aplicable a los programas secuenciales, no a los concurrentes.

    > La interferencia entre procesos de ejecución concurrente complica el razonamiento.

19. ¿Cuál es la principal característica de la regla de no interferencia de la lógica de Hoare para programas concurrentes?

    - ( ) Sólo se aplica a los programas secuenciales, no a los concurrentes.
    - ( ) Garantiza que cada proceso termina de ejecutarse antes de que comience el siguiente.
    - (x) Garantiza que dos procesos no interfieran entre sí en sus precondiciones y postcondiciones cuando se ejecutan simultáneamente.
    - ( ) Garantiza que todos los procesos accedan a los recursos compartidos al mismo tiempo.
    - ( ) Permite que los procesos se ejecuten sin sincronización y sigue garantizando la corrección.

    > Garantiza que dos procesos no interfieran entre sí en sus precondiciones y postcondiciones cuando se ejecutan simultáneamente.

20. En la lógica de Hoare, ¿qué se necesita para verificar la corrección de una composición concurrente de procesos?

    - (x) Las precondiciones y postcondiciones de los procesos deben combinarse, y ningún proceso debe invalidar las afirmaciones de los demás.
    - ( ) El sistema debe probarse con todas las configuraciones de hardware posibles para garantizar su corrección.
    - ( ) La composición sólo debe implicar a un único proceso a la vez.
    - ( ) Los procesos deben ejecutarse secuencialmente, sin solapar instrucciones.
    - ( ) Cada proceso debe tener su propio espacio de memoria independiente.

    > Las precondiciones y postcondiciones de los procesos deben combinarse, y ningún proceso debe invalidar las afirmaciones de los demás.
