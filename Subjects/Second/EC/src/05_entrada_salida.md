# Entrada/Salida

Tema 5 del programa. Cómo se conecta el procesador con los dispositivos, y las
tres técnicas con las que se transfiere información entre ellos.

## Funciones del sistema de entrada/salida

Los dispositivos no se pueden conectar al bus del procesador tal cual. Entre
medias hace falta un **módulo de entrada/salida** que resuelva cuatro
desacoplos:

| Desacoplo | Ejemplo |
| --- | --- |
| Velocidad | un teclado entrega unos bytes por segundo; la memoria, gigabytes |
| Formato de datos | serie frente a paralelo, anchuras distintas |
| Códigos y unidades | el dispositivo trabaja con sectores; el programa, con bytes |
| Sincronización | el dispositivo va a su ritmo, no al del reloj del procesador |

Las funciones del módulo: control y temporización, comunicación con el
procesador, comunicación con el dispositivo, almacenamiento temporal y detección
de errores.

El **almacenamiento temporal** es el que más consecuencias tiene. Sin un búfer
en el módulo, la transferencia iría a la velocidad del dispositivo y ocuparía el
bus todo ese tiempo. Con búfer, el bus se ocupa solo mientras dura la
transferencia entre módulo y memoria, que va a velocidad de memoria.

## Interfaces de entrada/salida

El módulo expone al procesador un conjunto de registros:

| Registro | Sentido | Contenido |
| --- | --- | --- |
| Datos | ambos | lo que se transfiere |
| Estado | lectura | listo, ocupado, error |
| Control | escritura | qué operación iniciar |

Y hay dos formas de direccionar esos registros:

| | Entrada/salida aislada | Proyectada en memoria |
| --- | --- | --- |
| Espacio de direcciones | uno propio | el mismo de la memoria |
| Instrucciones | específicas, `in` y `out` | las de acceso a memoria |
| Líneas de control | una señal distingue memoria de E/S | ninguna adicional |
| Protección | inmediata, son instrucciones privilegiadas | por la unidad de gestión de memoria |
| Direcciones disponibles | todas, no restan a la memoria | restan al espacio direccionable |

x86 tiene las dos y la segunda domina. La razón es práctica: con proyección en
memoria, un manejador se escribe en C sin recurrir a ensamblador, y el repertorio
completo de instrucciones de acceso a memoria queda disponible para operar sobre
los registros del dispositivo.

Su precaución obligada: esas direcciones **no se pueden cachear ni reordenar**.
El valor cambia sin que el procesador escriba, y un compilador que elimine una
lectura «redundante» rompe el manejador. De ahí `volatile` y las barreras de
memoria.

## Entrada/salida programada

El procesador ejecuta la transferencia entera. La secuencia:

1. Escribe la orden en el registro de control.
2. Lee el registro de estado en un bucle hasta que el dispositivo está listo.
3. Transfiere una palabra entre el registro de datos y un registro del
   procesador.
4. Repite desde 2 hasta terminar.

```asm
espera: inb     $ESTADO, %al
        testb   $LISTO, %al
        jz      espera
        inb     $DATOS, %al
```

- **A favor:** simplicidad total y la latencia mínima posible.
- **En contra:** el procesador consume el 100 % de su tiempo esperando. Con un
  dispositivo lento, se desperdician millones de ciclos por byte.

El bucle de la línea 2 es la **espera activa**. Solo se justifica cuando la
espera es brevísima —del orden de decenas de ciclos, donde el coste de una
interrupción sería mayor— o cuando el sistema no tiene nada más que hacer, como
en el arranque o en un microcontrolador de función única.

## Interrupciones

El dispositivo avisa cuando está listo, y mientras tanto el procesador trabaja en
otra cosa.

### Secuencia

1. El módulo activa la línea de petición de interrupción.
2. El procesador termina la instrucción en curso.
3. Reconoce la petición.
4. Guarda el contador de programa y el registro de estado.
5. Identifica la causa y salta a la rutina de tratamiento.
6. La rutina salva los registros que vaya a usar, transfiere el dato y los
   restaura.
7. Una instrucción de retorno de interrupción restaura el estado y reanuda.

El paso 2 explica la **latencia de interrupción**: el procesador no interrumpe a
mitad de instrucción, así que la instrucción más larga del repertorio fija el
peor caso. Las instrucciones de cadena de x86, que pueden copiar miles de bytes,
son interrumpibles precisamente por esto: guardan su progreso en registros y se
reanudan.

### Identificación de la fuente

| Método | Cómo | Coste |
| --- | --- | --- |
| Consulta por *software* | la rutina lee el estado de cada módulo hasta encontrar el que pidió | lineal en el número de dispositivos |
| Consulta encadenada | los módulos se conectan en cadena y el más cercano responde primero | la prioridad la fija la posición física |
| Vectorizada | el módulo envía un identificador y el procesador indexa una tabla | constante, y es lo que se usa |
| Arbitraje por bus | el módulo compite por el bus antes de responder | permite prioridades dinámicas |

Con interrupciones vectorizadas, la tabla de vectores traduce el identificador en
la dirección de la rutina. Es la misma tabla que el sistema operativo programa al
arrancar.

### Prioridades y anidamiento

Varias peticiones simultáneas se resuelven por prioridad, y una interrupción de
prioridad alta puede interrumpir a la rutina de una más baja. El anidamiento
exige que el estado se guarde en pila, no en un registro fijo: con un solo
registro, la segunda interrupción destruiría el contexto de la primera.

Un procesador puede además **enmascarar** interrupciones, inhibiéndolas durante
las secciones en las que su tratamiento causaría problemas. La regla es que esas
secciones sean lo más cortas posible: con las interrupciones inhibidas, la
latencia de todo el sistema crece.

La **interrupción no enmascarable** queda fuera de ese mecanismo y se reserva
para sucesos que no admiten espera, como un fallo de alimentación inminente.

### El límite

Una interrupción por dato transferido es aceptable con un teclado y ruinoso con
un disco: transferir un sector de 4 KiB costaría cuatro mil interrupciones. La
sobrecarga de guardar y restaurar el contexto acabaría dominando, y de ahí la
tercera técnica.

## DMA

Un controlador de acceso directo a memoria transfiere bloques entre el
dispositivo y la memoria sin intervención del procesador.

### Funcionamiento

1. El procesador programa el controlador: dirección de memoria, número de
   palabras, sentido y dispositivo.
2. El procesador sigue con otra cosa.
3. El controlador toma el control del bus y transfiere palabra a palabra.
4. Al terminar el bloque entero, genera **una sola** interrupción.

El procesador interviene dos veces —al programar y al recibir el aviso— en vez de
una vez por palabra. La ganancia crece con el tamaño del bloque.

### Cómo se comparte el bus

| Modo | Qué hace | Efecto sobre el procesador |
| --- | --- | --- |
| Robo de ciclo | toma el bus un ciclo por palabra | lo frena, no lo detiene |
| Ráfaga | toma el bus hasta terminar el bloque | lo detiene mientras dura |
| Transparente | usa solo los ciclos en que el procesador no accede al bus | ninguno, pero es más lento |

El robo de ciclo es el compromiso habitual. La ráfaga se usa cuando la
transferencia tiene que completarse en un plazo, como en la captura de vídeo.

### Coherencia de caché

El controlador escribe en memoria sin que las cachés del procesador se enteren.
Si una línea de caché contiene una copia de esa zona, queda obsoleta; y si está
sucia, la escritura posterior de la caché pisará lo que el dispositivo escribió.

Tres soluciones, de más a menos automática:

1. **Coherencia por hardware.** El controlador de caché espía el bus e invalida
   las líneas afectadas. Es lo normal en máquinas de propósito general.
2. **Marcar la región como no cacheable.** Sencillo y lento.
3. **Invalidar y vaciar a mano** antes y después de la transferencia. Es lo que
   hacen los manejadores en arquitecturas empotradas sin coherencia, y una fuente
   clásica de errores intermitentes.

### Seguridad

Un dispositivo con DMA puede leer y escribir **toda** la memoria física, incluida
la del sistema operativo. Un puerto externo con acceso directo al bus —Thunderbolt,
PCIe expuesto— convierte eso en una vía de ataque.

La respuesta es la **IOMMU**, que traduce y comprueba las direcciones que emiten
los dispositivos igual que la MMU hace con las de los procesos. Cada dispositivo
recibe su propio espacio de direcciones y solo alcanza lo que se le ha asignado.

## Comparación de las tres técnicas

| | Programada | Interrupciones | DMA |
| --- | --- | --- | --- |
| Quién transfiere | el procesador | el procesador | el controlador |
| Ocupación del procesador | total | por dato | por bloque |
| Latencia | mínima | media | mayor, por la programación inicial |
| Adecuada para | esperas brevísimas | dispositivos lentos y esporádicos | bloques grandes |

Las tres conviven en una máquina real: el teclado por interrupciones, el disco
por DMA, y el arranque por entrada/salida programada, porque todavía no hay
sistema que atienda una interrupción. El desarrollo completo, con los diagramas
de tiempos de cada técnica, está en \cite{stallings2022} y en \cite{hamacher2012}.
