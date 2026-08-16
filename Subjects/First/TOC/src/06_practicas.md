# Temario práctico

Los cinco seminarios y las siete prácticas de laboratorio del programa.

## Seminarios

### S1. Sistemas de numeración usuales en Informática

Conversión entre bases, aritmética binaria y representación de enteros con signo.

| Conversión | Método |
| --- | --- |
| Decimal a binario, parte entera | divisiones sucesivas por 2, restos al revés |
| Decimal a binario, parte fraccionaria | multiplicaciones sucesivas por 2, partes enteras en orden |
| Binario a octal o hexadecimal | agrupar de tres o de cuatro bits desde la coma |
| Binario a decimal | suma de potencias |

La parte fraccionaria es donde aparece el resultado que hay que ver una vez para no
olvidarlo: **$0{,}1$ decimal es periódico en binario**, $0{,}0\overline{0011}$. No hay
número de bits que lo represente exactamente, y de ahí vienen todos los errores de
redondeo del coma flotante.

Se practica también la aritmética en complemento a 2 y la detección de
desbordamiento, con la regla del tema 1: solo desborda al sumar dos números del mismo
signo y obtener el contrario.

### S2. Representación de información multimedia

| Información | Cómo se digitaliza | Parámetros |
| --- | --- | --- |
| Texto | un código por carácter | ASCII, Unicode, UTF-8 |
| Sonido | muestreo y cuantificación | frecuencia de muestreo, bits por muestra |
| Imagen | matriz de píxeles | resolución, profundidad de color |
| Vídeo | secuencia de imágenes | lo anterior más los fotogramas por segundo |

Los dos cálculos que se piden:

$$\text{tamaño del audio} = f_{muestreo} \times \text{bits} \times \text{canales} \times \text{segundos}$$
$$\text{tamaño de la imagen} = \text{ancho} \times \text{alto} \times \text{bits por píxel}$$

Un minuto de audio de calidad de CD son $44\,100 \times 16 \times 2 \times 60 = 10{,}6$
MB, y una foto de 12 megapíxeles sin comprimir, 36 MB. Esas cifras son las que
justifican la compresión, y de paso la distinción entre **compresión sin pérdida**
—reversible, para texto y datos— y **con pérdida** —descarta lo que el oído o el ojo
no perciben, para audio, imagen y vídeo—.

Sobre UTF-8 conviene retener que es de longitud variable: un carácter ASCII ocupa un
byte y uno acentuado dos. Por eso el número de caracteres de una cadena no es su
número de bytes, y contar mal ahí rompe programas de forma sutil.

### S3. Álgebra de conmutación. Funciones de conmutación

Los postulados y teoremas del tema 3, aplicados a demostrar identidades y a
manipular expresiones. Lo que se ejercita:

- Demostrar una identidad por tabla de verdad y por manipulación algebraica.
- Aplicar De Morgan a expresiones con varios niveles de negación.
- Obtener las dos formas canónicas a partir de la tabla de verdad.
- Pasar de suma de productos a producto de sumas y al revés.

La comprobación por tabla de verdad es la red de seguridad: una demostración
algebraica con un error da una expresión que parece razonable, y la tabla lo delata en
ocho filas.

### S4. Minimización de funciones de conmutación

Mapas de Karnaugh de tres, cuatro y cinco variables, con indiferencias.

| Paso | Qué hacer |
| --- | --- |
| 1 | volcar la tabla de verdad al mapa, con el orden Gray de las etiquetas |
| 2 | localizar los **implicantes primos**: grupos que no se pueden agrandar |
| 3 | identificar los **esenciales**: los que cubren algún uno que nadie más cubre |
| 4 | completar la cobertura con los mínimos implicantes restantes |
| 5 | escribir la expresión |

Los dos errores que se repiten: **olvidar que el mapa se cierra por los bordes**, y no
tomar el grupo más grande posible. El segundo no da una función incorrecta, solo una
implementación más cara, y por eso pasa desapercibido.

Se practica también la minimización **multisalida**, donde varias funciones comparten
términos y el objetivo no es minimizar cada una por separado sino el circuito conjunto.

### S5. Manejo de un simulador y de un entrenador lógico

El puente entre el papel y el laboratorio.

| Herramienta | Para qué |
| --- | --- |
| Simulador lógico | montar el circuito, aplicar entradas y ver salidas |
| Cronograma | observar retardos y pulsos espurios |
| Entrenador lógico | montaje físico con circuitos integrados reales |

Lo que el simulador enseña y el papel no: **el cronograma con retardos**. Un circuito
correcto en la tabla de verdad muestra pulsos espurios al cambiar la entrada, y ahí se
ve el riesgo estático del tema 3 en vez de leerlo.

En el entrenador aparecen además los problemas físicos: entradas al aire que flotan y
dan valores aleatorios, alimentación mal conectada, y salidas de dos puertas unidas
entre sí, que es un cortocircuito y no una OR.

## Prácticas de laboratorio

### P1. Análisis y diseño de circuitos combinacionales con puertas lógicas

Montar circuitos a partir de una expresión, y obtener la expresión a partir de un
montaje.

| Actividad | Qué comprobar |
| --- | --- |
| Verificar De Morgan con puertas | las dos formas dan la misma tabla |
| Implementar una función con AND, OR y NOT | la tabla coincide con la especificada |
| Implementarla solo con NAND | el resultado es idéntico |
| Comparar la versión canónica con la minimizada | menos puertas, mismo comportamiento |

La comparación final es la que da sentido al seminario S4: se mide cuántos circuitos
integrados hacen falta antes y después de minimizar.

### P2. Diseño de circuitos aritméticos

| Montaje | Qué se observa |
| --- | --- |
| Semisumador con XOR y AND | suma y acarreo |
| Sumador completo | tres entradas, dos salidas |
| Sumador de 4 bits en cascada | el acarreo se propaga |
| Sumador-restador con XOR de control | una señal cambia la operación |

Lo que la práctica demuestra: **la resta no necesita circuito propio**. Con las XOR
gobernadas por la señal de modo y el acarreo de entrada a 1, el mismo sumador resta en
complemento a 2.

Y se mide el **retardo de propagación del acarreo**: con el sumador de 4 bits, el
resultado no es válido hasta que el acarreo ha atravesado las cuatro etapas. Es la
motivación concreta de la anticipación de acarreo.

### P3. Unidad aritmético-lógica

Construir una ALU con selección de operación y comprobar sus banderas.

| Comprobación | Qué confirma |
| --- | --- |
| Suma con desbordamiento | la bandera se activa con operandos del mismo signo |
| Resta que da cero | la bandera de cero |
| Acarreo de salida | distinto del desbordamiento |
| Operaciones lógicas | AND, OR, XOR, complemento |

La distinción entre **acarreo y desbordamiento** es lo que la práctica fija: son dos
banderas distintas y se usan en contextos distintos. El acarreo importa en aritmética
sin signo y el desbordamiento en complemento a 2, y confundirlos produce comparaciones
incorrectas.

### P4. Codificadores, decodificadores, multiplexores y demultiplexores

| Montaje | Qué se comprueba |
| --- | --- |
| Decodificador 3 a 8 | una sola salida activa por combinación |
| Implementar una función con el decodificador y una OR | cada salida es un mintérmino |
| Multiplexor 8 a 1 | selecciona la entrada indicada |
| Implementar una función de 3 variables con el multiplexor | sin ninguna puerta |
| Demultiplexor | distribuye una entrada a la salida elegida |
| Codificador con prioridad | con varias entradas activas gana la mayor |

Las dos filas de implementación son las importantes. Ver que **un multiplexor
implementa cualquier función de tres variables sin una sola puerta** cambia la forma de
abordar los diseños.

### P5. Biestables y registros básicos

| Montaje | Qué se observa |
| --- | --- |
| Biestable RS con NOR | la combinación prohibida y su resultado impredecible |
| Biestable D disparado por flanco | captura solo en el flanco |
| Comparación con un cerrojo | el cerrojo es transparente mientras el nivel está activo |
| Registro de 4 bits | carga paralela |
| Registro de desplazamiento | conversión entre serie y paralelo |

La comparación entre cerrojo y biestable por flanco se hace mejor con el cronograma:
mientras la habilitación está activa, la salida del cerrojo sigue a la entrada; la del
biestable solo cambia en un instante.

Se comprueban además los **rebotes de los pulsadores**: cerrar un contacto mecánico
produce varias transiciones en unos milisegundos, así que un contador conectado
directamente a un pulsador cuenta tres o cuatro por pulsación. Se corrige con un
circuito antirrebote, que es el disparador de Schmitt o un biestable RS.

### P6. Implementación y funcionamiento de sistemas secuenciales

| Montaje | Qué se comprueba |
| --- | --- |
| Contador asíncrono de 4 bits | los valores intermedios espurios |
| Contador síncrono de 4 bits | todos los bits cambian a la vez |
| Contador de módulo arbitrario | detección del final y puesta a cero |
| Detector de secuencia | el estado recuerda lo necesario |

La primera fila es la lección de la práctica: **el contador asíncrono da valores que no
pertenecen a la cuenta**. Con un decodificador a la salida se ven pulsos en líneas que
no deberían activarse, y esa observación justifica por sí sola el diseño síncrono.

### P7. Descripción a nivel RT de un computador sencillo

La práctica que cierra la asignatura: describir y simular la máquina CS1 del tema 5.

| Actividad | Qué produce |
| --- | --- |
| Identificar los registros y los caminos | el camino de datos |
| Escribir las micro-operaciones de cada instrucción | la secuencia de ciclos |
| Determinar las señales activas en cada ciclo | la tabla de control |
| Simular la ejecución de un programa corto | la traza, ciclo a ciclo |

La comprobación final es seguir la traza de un programa sencillo —cargar, sumar,
almacenar y saltar— viendo en cada ciclo qué registros cambian y qué señales están
activas.

Ahí es donde encaja todo: la instrucción que el programa escribió es una palabra en
memoria, la unidad de control la descompone en micro-operaciones, cada
micro-operación activa señales, y esas señales gobiernan registros y multiplexores
construidos con las puertas de las prácticas anteriores.

## Sobre las memorias de prácticas

Lo que se entrega:

1. Especificación del problema y tabla de verdad o de estados.
2. Proceso de simplificación, con los mapas.
3. Esquema del circuito, con los circuitos integrados usados.
4. Resultados de la simulación y del montaje, **incluidos los cronogramas**.
5. Diferencias entre lo esperado y lo observado, con su explicación.

El punto 5 es el que se evalúa de verdad, y las causas posibles son casi siempre las
mismas: retardos de propagación, riesgos estáticos, rebotes de los pulsadores, entradas
sin conectar que flotan, o una simplificación mal hecha. Lo que se pide es identificar
cuál explica lo observado, no enumerarlas.

Los guiones y sus problemas siguen \cite{prieto2010}, \cite{diaz2009} y
\cite{floyd2016}, y el material de simulación, \cite{lloris2003} y
\cite{deschamps2017}.
