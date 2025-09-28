\part{Prácticas}

# Práctica 1 

Antes de comenzar, se recomienda tener claro que funciones va a tener el sistema de gestión de base de datos. A continuación, se procede con el desarrollo de la base de datos. Como primer paso, realizaremos un proceso de análisis que nos dará una lista de requisitos funcionales, de datos y restricciones semánticas \footnote{Se asume que ya están hechas las tareas vistas en FIS}. Cada subsistema debe de tener como mínimo 5 requisitos funcionales.

Realizando la práctica, cuando mencionamos un subsistema debemos de escribir el nombre completo del subsistema. 

\begin{definicion}[Requisito funcional]

    Una funcionalidad concreta del sistema que requiere acceso a la base de datos, para lo cual necesita:

    \begin{itemize}

    \item Una acción de algún agente externo al SI que activa la funcionalidad y manda los datos de entrada.
    \item Datos de la DB, que hay que consultar, insertar, modificar, borrar (lectura, R y escritura, W).
    \item Unas acciones de salida que pueden incluir datos de salida (opcionalmente) que se transmiten a algún agente externo.
    \item Los datos de entrada, de la DB y de salida se especifican medianet \textit{requisitos de datos}, conteniendo nombre y tipo de datos.

    \end{itemize}

\end{definicion}

\begin{ejemplo}
Deseamos crear un sistema de información para un único usuario que registre los contactos de una agenda. De cada contacto, almacenaremos su nombre (en una serie de hasta 20 caracteres), su apellido (en una serie de hasta 40 caracteres) y un número de teléfono (en una serie de hasta 20 caracteres que pueden ser todos numéricos menos el primero que puede ser numérico o un signo +). 

Para dar de alta un nuevo contacto, el usuario deberá proporcionar el nombre del mismo, su apellido y su número de teléfono, datos que el sistema almacenará, confirmando la inserción o dando un error. Un número de teléfono sólo puede pertenecer a un contacto. 

Para dar de baja un contacto, el usuario deberá proporcionar el número de teléfono, confirmando el borrado o dando un error. 

El sistema también permitirá mostrar un listado de contactos con todos sus datos a petición del usuario.
\end{ejemplo}

- RDE: Requisito de datos de entrada.
- RDW: Requisito de datos de escritura.
- RDR: Requisito de datos de lectura.
- RDS: Requisito de datos de salida.

Cuando se especifica los RDE es debido a que es una necesidad. No es un tipo de registro. Lo que se necesita cuando se especifican, es que cuando la base de datos se diseñe, deben de estar presentes.

**Ejemplo de Requisitos funcionales**

\dosimagenes{media/rf1.png}{Primer ejemplo}{media/rf2.png}{Segundo ejemplo}{rf1}{rf2}

<!-- Cada persona debe de hacer el análisis del ejemplo, pero de su propio subsistema, para ello la notación que usaremos será: si tenemos el subsistema 1 y estamos con la funcionalidad 1, sería RF1.1, podemos usar esta para los demás requisitos. -->

Una restricción semántica esta asociada a un requisito funcional y uno o varios de datos. Este describe cambios en el comportamiento del requisito funcional cuando se da una configuración específica en los requisitos de datos.

Si se es capaz de identificar los requisitos funcionales y de datos, podemos afirmar que es una restrición semántica.










