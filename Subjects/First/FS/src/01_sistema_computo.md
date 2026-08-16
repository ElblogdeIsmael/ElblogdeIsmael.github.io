# Sistema de cómputo

Tema 1 del programa. Qué componentes tiene un computador, qué hace el hardware por
sí solo y dónde empieza a hacer falta el software de sistema.

## Componentes

Un sistema de cómputo se organiza en capas, y cada una solo habla con la de al
lado. Esa disciplina es lo que permite cambiar una sin reescribir las demás.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  capa/.style={draw, minimum width=62mm, minimum height=8.5mm,
               align=center, font=\small}
]
\node[capa] (a) at (0,0)     {Aplicaciones de usuario};
\node[capa] (b) at (0,-1.0)  {Utilidades y bibliotecas del sistema};
\node[capa] (c) at (0,-2.0)  {Sistema operativo};
\node[capa] (d) at (0,-3.0)  {Hardware};
\node[font=\scriptsize, anchor=west] at (3.4,-1.5)  {llamadas al sistema};
\node[font=\scriptsize, anchor=west] at (3.4,-2.5)  {instrucciones privilegiadas};
\draw[<->, >=stealth] (3.2,-1.5) -- (1.6,-1.5);
\draw[<->, >=stealth] (3.2,-2.5) -- (1.6,-2.5);
\end{tikzpicture}
\end{center}
```

| Capa | Qué aporta |
| --- | --- |
| Hardware | ejecuta instrucciones, guarda datos, conecta periféricos |
| Sistema operativo | gestiona los recursos y da una interfaz uniforme |
| Utilidades y bibliotecas | funciones y órdenes ya escritas |
| Aplicaciones | resuelven el problema del usuario |

Los componentes físicos son cuatro, y la interconexión entre ellos importa tanto
como cada uno:

| Componente | Función |
| --- | --- |
| Procesador | ejecuta instrucciones y controla el sistema |
| Memoria principal | guarda datos e instrucciones en uso |
| Módulos de entrada y salida | conectan con el exterior |
| Bus del sistema | los comunica entre sí |

## El ciclo de instrucción

El procesador repite un ciclo elemental mientras esté encendido:

1. **Captación**: lee de memoria la instrucción cuya dirección marca el contador de
   programa.
2. **Decodificación**: interpreta qué operación es y qué operandos necesita.
3. **Ejecución**: la realiza.
4. **Escritura**: guarda el resultado, si lo hay.

Los registros que sostienen el ciclo:

| Registro | Contiene |
| --- | --- |
| Contador de programa | dirección de la instrucción siguiente |
| Registro de instrucción | la instrucción en curso |
| Registro de estado | banderas de resultado y modo de ejecución |
| Puntero de pila | cima de la pila del programa |
| Registros generales | operandos y resultados |

Que el ciclo sea una repetición ciega tiene una consecuencia inmediata: **el
procesador no sabe esperar**. Si un periférico tarda milisegundos en responder, el
procesador seguiría ejecutando instrucciones inútiles. Resolver eso es lo que
justifica el resto del tema.

## Interrupciones

Una **interrupción** es una señal que hace que el procesador suspenda lo que está
haciendo, atienda un suceso y vuelva.

| Tipo | Origen | Ejemplo |
| --- | --- | --- |
| De hardware | un dispositivo externo | el disco termina una lectura |
| De reloj | el temporizador del sistema | fin de rodaja de tiempo |
| Excepción | la propia instrucción | división por cero, fallo de página |
| Llamada al sistema | una instrucción específica | el programa pide un servicio |

El mecanismo, paso a paso:

1. El dispositivo activa la línea de interrupción.
2. El procesador termina la instrucción en curso, no la corta por la mitad.
3. Guarda el contador de programa y el registro de estado.
4. Consulta el **vector de interrupciones** y salta a la rutina de servicio.
5. La rutina atiende el suceso.
6. Se restaura el estado guardado y la ejecución continúa donde iba.

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth, scale=0.95]
\draw[thick] (0,0) -- (3,0);
\draw[thick, dashed] (3,0) -- (3,1.1);
\draw[thick] (3,1.1) -- (5.6,1.1);
\draw[thick, dashed] (5.6,1.1) -- (5.6,0);
\draw[thick] (5.6,0) -- (8.6,0);
\node[font=\scriptsize, anchor=north] at (1.5,-0.1)  {programa};
\node[font=\scriptsize, anchor=south] at (4.3,1.15)  {rutina de servicio};
\node[font=\scriptsize, anchor=north] at (7.1,-0.1)  {programa, donde iba};
\draw[->] (3,-0.9) -- (3,-0.15);
\node[font=\scriptsize, anchor=north] at (3,-0.95) {interrupción};
\end{tikzpicture}
\end{center}
```

**La diferencia entre interrupción y excepción** conviene tenerla clara: la
interrupción es asíncrona, la provoca algo externo y el programa interrumpido no
tiene la culpa; la excepción es síncrona, la provoca la instrucción que se estaba
ejecutando y por eso se puede reproducir.

```{=latex}
\begin{anotacion}
Las interrupciones se pueden inhibir mientras se ejecuta código que no debe ser
interrumpido, pero las excepciones no: son consecuencia de la instrucción y no hay
forma de posponerlas. Una sección crítica del núcleo puede desactivar
interrupciones, y aun así sufrir un fallo de página.
\end{anotacion}
```

## Protección

Si cualquier programa pudiera ejecutar cualquier instrucción, un error o un abuso
bastaría para tumbar el sistema. El hardware ofrece tres mecanismos que el sistema
operativo usa.

### Modos de ejecución

| Modo | Quién ejecuta | Qué puede hacer |
| --- | --- | --- |
| Núcleo o supervisor | el sistema operativo | todo, incluidas las instrucciones privilegiadas |
| Usuario | las aplicaciones | solo el subconjunto no privilegiado |

Un bit del registro de estado distingue los dos. Las instrucciones que manipulan la
tabla de páginas, acceden a puertos de E/S o cambian el propio bit de modo son
**privilegiadas**: intentarlas en modo usuario produce una excepción.

Cambiar de usuario a núcleo solo es posible por una vía controlada —una llamada al
sistema, una interrupción o una excepción—, y siempre saltando a una dirección que
fijó el sistema operativo. Esa es la garantía: el programa decide **cuándo** entra
en el núcleo, nunca **dónde**.

### Protección de memoria

Cada proceso solo debe acceder a su memoria. El hardware lo comprueba en cada
acceso, y ese es el punto clave: es una comprobación en tiempo de ejecución, no una
promesa del compilador.

| Mecanismo | Cómo funciona |
| --- | --- |
| Registros base y límite | comprueba que la dirección cae en el intervalo asignado |
| Paginación | traduce direcciones y comprueba permisos por página |
| Segmentación | ídem por segmento, con tamaños variables |

Un acceso fuera de lo permitido genera una excepción, y el sistema operativo suele
terminar el proceso. Es lo que hay detrás del mensaje de violación de segmento.

### Protección temporal

Un proceso podría no ceder nunca el procesador. El **temporizador** lo impide:
genera una interrupción periódica que devuelve el control al sistema operativo, que
decide si sigue ejecutando el mismo proceso u otro.

Sin temporizador no hay multiprogramación con reparto justo, solo cooperación
voluntaria. Es la diferencia entre los sistemas de los años ochenta y los actuales.

## Entrada y salida

Un módulo de E/S adapta la velocidad y el formato del periférico a los del bus. Hay
tres formas de gobernarlo, y cada una nace de un problema de la anterior.

| Técnica | Cómo | Coste para el procesador |
| --- | --- | --- |
| E/S programada | consulta repetidamente el estado del módulo | lo consume entero |
| E/S por interrupciones | el módulo avisa al terminar | una interrupción por transferencia |
| Acceso directo a memoria | un controlador transfiere solo, y avisa al final | una interrupción por bloque |

Las cifras explican por qué el DMA existe. Leer un bloque de disco de 4 KB con E/S
por interrupciones supone una interrupción por palabra; con DMA, una por bloque. La
diferencia son tres órdenes de magnitud de sobrecarga.

**La jerarquía de memoria** aparece por la misma razón que el DMA: el procesador es
mucho más rápido que la memoria, y la memoria mucho más rápida que el disco.

| Nivel | Tiempo de acceso aproximado | Capacidad |
| --- | --- | --- |
| Registros | menos de 1 ns | cientos de bytes |
| Caché | 1 a 20 ns | de kilobytes a megabytes |
| Memoria principal | 50 a 100 ns | gigabytes |
| Disco de estado sólido | decenas de microsegundos | de cientos de gigabytes a terabytes |
| Disco magnético | milisegundos | terabytes |

La jerarquía funciona por el **principio de localidad**: los programas acceden
repetidamente a las mismas posiciones (localidad temporal) y a posiciones cercanas
(localidad espacial). Si no fuera cierto, la caché no serviría de nada, y de hecho
un recorrido aleatorio de un vector enorme la deja sin efecto.

## El sistema operativo

Con lo anterior ya se puede decir qué es: el programa que gestiona los recursos del
hardware y ofrece a las aplicaciones una interfaz uniforme para usarlos.

| Como gestor de recursos | Como máquina extendida |
| --- | --- |
| reparte procesador, memoria, disco y dispositivos | esconde el hardware tras abstracciones |
| decide quién usa qué y cuándo | archivo, proceso, socket, memoria virtual |
| protege a unos usuarios de otros | la misma interfaz sobre hardware distinto |

Las dos visiones son la misma cosa vista desde dos lados. La segunda es la que
explica que un programa que lee un archivo funcione igual sobre un disco magnético,
un SSD o un sistema de archivos remoto.

## Utilidades del sistema

Alrededor del núcleo hay programas que no forman parte de él y sin los cuales el
sistema no se puede usar:

| Grupo | Ejemplos |
| --- | --- |
| Gestión de archivos | copiar, mover, listar, buscar |
| Intérprete de órdenes | la shell |
| Desarrollo | compilador, enlazador, depurador, `make` |
| Administración | usuarios, permisos, procesos, servicios |
| Red | transferencia, diagnóstico, acceso remoto |

La distinción entre núcleo y utilidades no es cosmética: el núcleo se ejecuta en
modo privilegiado y un fallo suyo tumba la máquina; una utilidad es un proceso de
usuario más, y su fallo termina ese proceso y nada más.

## Ejercicios

```{=latex}
\begin{ejercicio}
¿Por qué las instrucciones que acceden a puertos de entrada y salida son
privilegiadas?
\end{ejercicio}

\begin{solucion}
Porque un programa que escribiese directamente en el controlador del disco podría
leer o sobrescribir datos de cualquier otro usuario, saltándose los permisos del
sistema de archivos. Al reservarlas al modo núcleo, todo acceso pasa por el sistema
operativo, que es quien comprueba los permisos.
\end{solucion}

\begin{ejercicio}
Un sistema sin temporizador ejecuta un proceso que entra en un bucle infinito sin
llamadas al sistema. ¿Qué ocurre?
\end{ejercicio}

\begin{solucion}
El sistema queda bloqueado. Sin interrupción de reloj, el sistema operativo solo
recupera el control cuando el proceso hace una llamada al sistema o provoca una
excepción, y ese bucle no hace ninguna de las dos cosas. Es exactamente el fallo de
los sistemas con multitarea cooperativa.
\end{solucion}

\begin{ejercicio}
Un disco transfiere bloques de 4 KB y el procesador puede leer una palabra de 8
bytes por interrupción. ¿Cuántas interrupciones exige leer un bloque con E/S por
interrupciones? ¿Y con DMA?
\end{ejercicio}

\begin{solucion}
Con E/S por interrupciones, $4096/8 = 512$ interrupciones, cada una con su cambio
de contexto y su rutina de servicio. Con DMA, una sola al terminar el bloque
entero. Esa relación de 512 a 1 es la razón de que todo dispositivo de bloques
moderno use DMA.
\end{solucion}
```

La descripción de los componentes y de los mecanismos de protección está en
\cite{stallings2018} y \cite{prieto2006}.
