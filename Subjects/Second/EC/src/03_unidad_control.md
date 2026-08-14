# Unidad de control

Tema 3 del programa. El camino de datos sobre el que se ejecutan las
instrucciones, y las dos formas de construir la unidad que lo gobierna.

## El camino de datos

El camino de datos es el conjunto de elementos que transforman y transportan
información: banco de registros, ALU, memorias, sumadores y los multiplexores
que eligen entre alternativas. No decide nada; ejecuta lo que las señales de
control le indican.

### Elementos

| Elemento | Función | Señales que recibe |
| --- | --- | --- |
| Banco de registros | dos lecturas y una escritura simultáneas | número de registro, permiso de escritura |
| ALU | opera sobre dos entradas | código de operación |
| Memoria de instrucciones | entrega la instrucción de una dirección | — |
| Memoria de datos | lee y escribe | permiso de lectura, permiso de escritura |
| Extensor de signo | amplía un inmediato a la anchura completa | — |
| Multiplexores | eligen entre entradas | señal de selección |

El banco de registros con dos puertos de lectura y uno de escritura no es
arbitrario: es exactamente lo que una instrucción de tres direcciones necesita.
La estructura del camino de datos se deduce del repertorio, no al revés.

### Recorrido de una instrucción

Para una instrucción aritmética entre registros:

1. El contador de programa direcciona la memoria de instrucciones.
2. Los campos de la instrucción seleccionan dos registros fuente.
3. La ALU opera con lo leído.
4. El resultado se escribe en el registro destino.
5. El contador de programa se incrementa.

Para una carga desde memoria, el paso 3 calcula la dirección sumando el registro
base y el desplazamiento extendido, el resultado direcciona la memoria de datos
y lo leído va al registro destino. Para un salto condicional, la ALU compara y
un sumador aparte calcula la dirección destino; el multiplexor del contador de
programa elige entre esa dirección y la siguiente instrucción.

El mismo hardware sirve a las tres, y los multiplexores son los que deciden qué
camino se usa. **La unidad de control es el circuito que gobierna esos
multiplexores y los permisos de escritura**, a partir del código de operación.

### Ejecución monociclo y multiciclo

| | Monociclo | Multiciclo |
| --- | --- | --- |
| Duración del ciclo | la de la instrucción más lenta | la de la etapa más lenta |
| CPI | 1 | variable, según la instrucción |
| Recursos | duplicados; hace falta una memoria de instrucciones y otra de datos | compartidos entre etapas |
| Registros intermedios | no | sí, entre etapas |

El diseño monociclo es sencillo y desperdicia: una instrucción aritmética, que no
toca la memoria de datos, dura lo mismo que una carga. El multiciclo divide la
ejecución en pasos y solo paga los que cada instrucción necesita, a costa de una
unidad de control con estados. Ninguno de los dos se construye hoy: el punto de
partida real es el cauce segmentado del tema 4, que es un multiciclo con
instrucciones solapadas.

## Señales de control

La unidad de control genera un vector de señales por instrucción. Para un
repertorio reducido de tipo RISC-V:

| Señal | Efecto |
| --- | --- |
| `RegWrite` | permite escribir en el banco de registros |
| `ALUSrc` | el segundo operando de la ALU es un registro o el inmediato |
| `ALUOp` | qué operación hace la ALU |
| `MemRead`, `MemWrite` | permisos de la memoria de datos |
| `MemToReg` | lo que se escribe en el registro viene de la ALU o de la memoria |
| `Branch` | la instrucción es un salto condicional |

Y su valor por tipo de instrucción:

| Instrucción | `RegWrite` | `ALUSrc` | `MemRead` | `MemWrite` | `MemToReg` | `Branch` |
| --- | :-: | :-: | :-: | :-: | :-: | :-: |
| Aritmética registro-registro | 1 | 0 | 0 | 0 | 0 | 0 |
| Carga | 1 | 1 | 1 | 0 | 1 | 0 |
| Almacenamiento | 0 | 1 | 0 | 1 | X | 0 |
| Salto condicional | 0 | 0 | 0 | 0 | X | 1 |

Las `X` son indiferentes: la señal no afecta al resultado porque no se escribe en
ningún registro. Aprovecharlas es lo que permite simplificar el circuito, y es la
razón por la que una tabla de verdad con indiferencias produce menos puertas.

## Unidad de control cableada

La unidad se construye como un circuito combinacional —o secuencial, si hay
estados— cuya entrada es el código de operación y cuya salida son las señales.
Se diseña como cualquier circuito: tabla de verdad, simplificación, síntesis.

- **A favor:** es lo más rápido posible. La señal se propaga por unas pocas
  puertas.
- **En contra:** cambiar el repertorio obliga a rediseñar el circuito. Con
  cientos de instrucciones, el diseño se vuelve inabordable y la depuración,
  peor.

Es la solución de las arquitecturas RISC, donde el repertorio es pequeño y
regular precisamente para que quepa en un circuito manejable.

## Unidad de control microprogramada

La idea de Wilkes, de 1951: en vez de un circuito, **un programa**. Cada
instrucción máquina se implementa como una secuencia de microinstrucciones
guardadas en una memoria de control, y cada microinstrucción contiene
directamente las señales de control de un ciclo.

### Estructura

| Elemento | Función |
| --- | --- |
| Memoria de control | guarda las microinstrucciones |
| Registro de dirección de microinstrucción | apunta a la actual |
| Registro de microinstrucción | la que se está ejecutando |
| Lógica de secuenciamiento | decide cuál es la siguiente |

El ciclo de la unidad de control es una copia en miniatura del ciclo de
instrucción: buscar la microinstrucción, ejecutarla —es decir, emitir sus
señales— y calcular la siguiente dirección. La secuencia de cada instrucción
empieza en una dirección obtenida a partir del código de operación.

### Formatos de microinstrucción

| | Horizontal | Vertical |
| --- | --- | --- |
| Codificación | un bit por señal | campos codificados |
| Anchura | grande | pequeña |
| Decodificación | ninguna | hace falta decodificar |
| Paralelismo | máximo, varias señales a la vez | limitado |
| Microprogramas | cortos | largos |

Es el mismo compromiso entre espacio y tiempo que aparece en toda la asignatura.
Los diseños reales usan formatos mixtos: horizontal en las señales que necesitan
concurrencia, codificado en las que son mutuamente excluyentes.

### Comparación

| | Cableada | Microprogramada |
| --- | --- | --- |
| Velocidad | mayor | menor |
| Coste de diseño | alto si el repertorio es grande | manejable |
| Modificar el repertorio | rediseñar el circuito | reescribir el microprograma |
| Corregir un error tras fabricar | imposible | posible, si la memoria es escribible |
| Encaja con | RISC | CISC |

La última fila de la tabla es la que sigue teniendo efecto hoy. Los procesadores
x86 actuales tienen unidad de control híbrida: las instrucciones frecuentes y
simples se decodifican en hardware cableado, y las complejas y raras se traducen
mediante microcódigo. Y ese microcódigo es **actualizable**: los parches contra
Spectre y contra errores de fabricación se distribuyen como actualizaciones de
microcódigo que el firmware carga al arrancar. Un procesador ya vendido cambia de
comportamiento sin tocar el silicio, y eso es exactamente lo que la unidad
microprogramada permite. Los dos enfoques se desarrollan con detalle en
\cite{stallings2022} y en \cite{hamacher2012}.

## Excepciones e interrupciones

La unidad de control tiene que atender sucesos que rompen la secuencia. El
tratamiento:

1. Terminar o abortar la instrucción en curso, según el suceso.
2. Guardar el contador de programa y el registro de estado.
3. Determinar la causa, por vector o por consulta.
4. Saltar a la rutina de tratamiento.
5. Al terminar, restaurar el estado y volver.

El paso 1 es el difícil. Una excepción **precisa** deja la máquina en un estado
en el que todas las instrucciones anteriores han terminado y ninguna posterior ha
empezado, así que el tratamiento puede reanudar la ejecución. Conseguirlo es
trivial en una máquina monociclo y deja de serlo en cuanto hay solapamiento, que
es el tema siguiente: con varias instrucciones en vuelo, la que falla no es la
última que se empezó.

Sin excepciones precisas no hay memoria virtual: un fallo de página tiene que
poder reanudarse en el punto exacto. Es la razón por la que las arquitecturas
que las implementaron mal quedaron limitadas.
