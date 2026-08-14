# Segmentación de cauce

Tema 4 del programa. Cómo se solapa la ejecución de varias instrucciones, qué
situaciones impiden ese solapamiento y con qué se resuelven.

## Conceptos básicos

La segmentación divide la ejecución en etapas y permite que en cada instante haya
una instrucción distinta en cada etapa. No acelera una instrucción: aumenta el
número de instrucciones terminadas por unidad de tiempo.

El cauce clásico de cinco etapas:

| Etapa | Nombre | Qué hace |
| --- | --- | --- |
| IF | búsqueda | lee la instrucción de memoria |
| ID | decodificación | interpreta y lee los registros fuente |
| EX | ejecución | opera, o calcula una dirección |
| MEM | memoria | accede a la memoria de datos |
| WB | escritura | escribe el resultado en el registro |

Entre cada par de etapas hay un registro que retiene el resultado parcial y el
estado de control. Sin esos registros no habría cauce: cada etapa pisaría a la
siguiente.

```
ciclo:      1    2    3    4    5    6    7    8    9
inst 1:    IF   ID   EX   MEM  WB
inst 2:         IF   ID   EX   MEM  WB
inst 3:              IF   ID   EX   MEM  WB
inst 4:                   IF   ID   EX   MEM  WB
inst 5:                        IF   ID   EX   MEM  WB
```

### Ganancia

Con $n$ instrucciones y $k$ etapas, un cauce ideal tarda $k + (n-1)$ ciclos
frente a los $n \cdot k$ de la ejecución secuencial. La ganancia es

$$S = \frac{n \cdot k}{k + (n-1)}$$

que tiende a $k$ cuando $n$ crece. La cota es el número de etapas, y solo se
alcanza si el cauce nunca se detiene.

Tres cosas impiden llegar:

- **El llenado y el vaciado.** Los primeros $k-1$ ciclos el cauce no está lleno.
  Con muchas instrucciones el efecto se diluye.
- **El desequilibrio entre etapas.** El ciclo lo fija la etapa más lenta, así que
  las demás desperdician tiempo. Dividir en más etapas reduce el ciclo pero
  añade el retardo de los registros intermedios, que no baja.
- **Los riesgos**, que son el resto del tema.

Más etapas no es siempre mejor. El Pentium 4 llegó a 31 y el diseño se abandonó:
el coste de vaciar un cauce tan profundo en cada salto mal predicho superaba la
ganancia de frecuencia. Los diseños actuales se mueven entre 14 y 20 etapas.

## Riesgos

Situaciones en las que la instrucción siguiente no puede ejecutarse en el ciclo
que le tocaría. Tres clases.

## Riesgos estructurales

Dos instrucciones necesitan el mismo recurso a la vez. El caso típico: la etapa
IF de una instrucción y la etapa MEM de otra acceden a memoria en el mismo ciclo.

La solución es duplicar el recurso, y es la razón de que el primer nivel de caché
esté dividido en instrucciones y datos. La alternativa —detener el cauce un
ciclo— convierte un problema de diseño en una pérdida de rendimiento permanente.

Otro caso frecuente es la unidad de división, que no se segmenta porque
duplicarla no compensa: dos divisiones seguidas se serializan.

## Riesgos de datos

Una instrucción necesita un resultado que otra anterior todavía no ha escrito.

```asm
        addq    %rbx, %rax        # escribe %rax en WB, ciclo 5
        subq    %rax, %rcx        # lee %rax en ID, ciclo 3
```

La segunda lee en el ciclo 3 lo que la primera escribe en el 5. Sin nada que lo
evite, lee el valor antiguo.

### Los tres tipos

| Tipo | Nombre | Descripción | En un cauce en orden |
| --- | --- | --- | --- |
| RAW | lectura tras escritura | se lee lo que aún no se ha escrito | **el único real** |
| WAR | escritura tras lectura | se escribe antes de que otro haya leído | imposible: se lee en ID y se escribe en WB |
| WAW | escritura tras escritura | dos escrituras en orden incorrecto | imposible si todas escriben en WB |

WAR y WAW son **falsas dependencias**: no hay flujo de información, solo
reutilización de un nombre de registro. Aparecen en cuanto las instrucciones
pueden completarse fuera de orden, y se eliminan con renombrado de registros, que
es lo que hacen los procesadores superescalares.

### Anticipación

La solución principal. El resultado existe al final de EX, aunque no se escriba
hasta WB: basta con encaminarlo directamente a la entrada de la ALU de la
instrucción siguiente, sin pasar por el banco de registros.

```
        addq    %rbx, %rax
        subq    %rax, %rcx
                 ^
                 |  el resultado de EX de la primera entra
                 |  como operando de EX de la segunda
```

Con anticipación desde EX y desde MEM, la mayoría de los riesgos RAW
desaparecen sin perder un solo ciclo. El precio es hardware: comparadores que
detectan la coincidencia de registros y multiplexores en las entradas de la ALU.

### El caso que la anticipación no resuelve

Una carga seguida de un uso inmediato:

```asm
        movq    (%rdi), %rax      # el dato sale de MEM, ciclo 4
        addq    %rax, %rbx        # lo necesita en EX, ciclo 4
```

El dato no existe hasta el final de MEM, y la instrucción siguiente lo necesita
al principio de su EX, que ocurre en ese mismo ciclo. **No hay forma de
adelantarlo**: haría falta enviarlo hacia atrás en el tiempo.

La única salida es detener el cauce un ciclo, insertando una **burbuja**. Es el
riesgo *load-use*, y es el motivo por el que el compilador reordena las
instrucciones para colocar algo útil entre la carga y su uso. Cuando no encuentra
nada, emite un `nop` o deja que el hardware detenga.

### Detección y detención

El hardware compara los registros fuente de la instrucción en ID con los
registros destino de las que van por delante. Si coinciden y no se puede
anticipar, congela IF e ID e inyecta una burbuja en EX. Las etapas posteriores
siguen avanzando, así que la burbuja se propaga y sale por el final.

## Riesgos de control

Un salto no se resuelve hasta una etapa avanzada, y mientras tanto el cauce ya ha
leído instrucciones que quizá no haya que ejecutar.

Si el salto se resuelve en MEM, hay tres instrucciones dentro del cauce que
pueden ser incorrectas. Si el salto se toma, hay que descartarlas, y esos tres
ciclos se pierden. Con saltos en el 20 % de las instrucciones y una penalización
de tres ciclos, el CPI sube de 1 a 1,6.

### Soluciones

**Resolver antes.** Adelantar la comparación y el cálculo de la dirección a la
etapa ID reduce la penalización a un solo ciclo. Es la primera medida, y la más
barata.

**Salto retardado.** La arquitectura declara que la instrucción siguiente al
salto se ejecuta siempre, y el compilador coloca ahí algo útil. Funcionó en MIPS
con un cauce de cinco etapas, y no escala: con cauces profundos harían falta
muchas ranuras de retardo, y llenarlas es imposible. Es una decisión de ISA que
resultó ser un error a largo plazo, porque el contrato queda grabado en el
repertorio.

**Predicción.** Suponer el resultado y seguir. Si se acierta no se pierde nada;
si se falla, se descarta lo especulado y se paga la penalización completa.

### Predicción de saltos

| Esquema | Cómo decide | Acierto típico |
| --- | --- | --- |
| Estático, no tomado | siempre sigue en línea | ~50 % |
| Estático por dirección | los saltos hacia atrás se toman, los de adelante no | ~65 % |
| Dinámico de 1 bit | repite lo que ocurrió la última vez | ~80 % |
| Dinámico de 2 bits | necesita dos fallos seguidos para cambiar | ~90 % |
| Correlado y de torneo | combina historia local y global | >95 % |

La heurística de la segunda fila funciona porque **los saltos hacia atrás son
bucles**, y un bucle se toma casi siempre.

El predictor de 2 bits merece detalle porque su ventaja es concreta. Con un solo
bit, un bucle de $n$ iteraciones falla **dos veces** por ejecución: al salir, y
la primera vez de la siguiente entrada. Con dos bits y un contador de saturación,
el estado no cambia hasta el segundo fallo consecutivo, así que la salida del
bucle no destruye la predicción y solo se falla una vez.

Los predictores actuales son mucho más elaborados y superan el 99 % en código
regular. Ese acierto es la base de la ejecución especulativa, y también de
Meltdown y Spectre: la especulación deja huella en la caché aunque el resultado
se descarte.

## Más allá del cauce simple

Tres extensiones que las máquinas reales combinan:

- **Superescalar.** Varias instrucciones por ciclo, con unidades funcionales
  duplicadas. El CPI baja de 1, y por eso se mide su inverso, el IPC.
- **Ejecución fuera de orden.** Las instrucciones se ejecutan cuando sus
  operandos están listos, no en orden de programa, y se retiran en orden para
  mantener las excepciones precisas. Necesita renombrado de registros, que es lo
  que elimina las dependencias WAR y WAW.
- **Multihilo simultáneo.** Varios hilos comparten las unidades funcionales, así
  que cuando uno se detiene el otro las aprovecha. Duplica los registros de
  estado, no las unidades: dos hilos hardware no son dos procesadores.

Ninguna cambia lo que el programa ve. La ISA sigue siendo la misma y el
programador razona en orden secuencial; el hardware se encarga de que el
resultado sea indistinguible del de una ejecución en orden. El tratamiento
cuantitativo de todo esto está en \cite{patterson2021} y en \cite{harris2022}.
