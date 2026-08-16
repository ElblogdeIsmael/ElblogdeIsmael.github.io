# Introducción

Tema 1 del programa. Los conceptos básicos, la estructura funcional de un
computador, cómo se representan los números y en qué niveles se describe una
máquina.

## Conceptos básicos

| Término | Qué es |
| --- | --- |
| Dato | representación de un hecho o una magnitud |
| Información | dato interpretado en un contexto |
| Algoritmo | secuencia finita de pasos que resuelve un problema |
| Programa | algoritmo escrito en un lenguaje que la máquina ejecuta |
| Computador | máquina que ejecuta programas sobre datos |

La definición de computador esconde la idea que lo hace universal, y es la de von
Neumann: **el programa se guarda en la misma memoria que los datos**. Antes de eso,
cambiar de tarea significaba recablear la máquina.

Las consecuencias de esa decisión llegan hasta hoy:

- Un programa puede leer y modificar otro programa, y de ahí compiladores, cargadores
  y sistemas operativos.
- Instrucciones y datos compiten por el mismo bus, que es el cuello de botella
  clásico de la arquitectura.
- Una instrucción es una cadena de bits sin nada que la distinga de un dato: lo que
  la convierte en instrucción es que el procesador la lea en la fase de captación.

## Estructura funcional

```{=latex}
\begin{center}
\begin{tikzpicture}[
  bloque/.style={draw, minimum width=24mm, minimum height=11mm, align=center,
                 font=\small},
  >=stealth
]
\node[bloque, minimum width=30mm] (uc)  at (0,1.6)   {Unidad de\\control};
\node[bloque, minimum width=30mm] (alu) at (0,-0.2)  {Unidad\\aritmético-lógica};
\node[bloque, minimum width=30mm] (mem) at (6.4,1.6) {Memoria};
\node[bloque, minimum width=30mm] (es)  at (6.4,-0.2){Entrada y\\salida};
\draw[dashed] (-2.2,-1.0) rectangle (2.2,2.4);
\node[font=\scriptsize, anchor=south] at (0,2.45) {procesador};
\draw[thick] (-2.6,-2.0) -- (9.0,-2.0);
\node[font=\scriptsize, anchor=north] at (3.2,-2.05) {bus del sistema};
\draw[<->] (0,-0.75) -- (0,-2.0);
\draw[<->] (6.4,-0.75) -- (6.4,-2.0);
\draw[<->] (-1.6,1.05) -- (-1.6,-2.0);
\draw[<->] (7.9,1.05) -- (7.9,-2.0);
\end{tikzpicture}
\end{center}
```

| Unidad | Función |
| --- | --- |
| Unidad de control | interpreta las instrucciones y gobierna al resto |
| Unidad aritmético-lógica | hace las operaciones sobre los datos |
| Memoria | guarda instrucciones y datos |
| Entrada y salida | comunica con el exterior |
| Buses | transportan datos, direcciones y señales de control |

Los tres buses cumplen papeles distintos, y su anchura tiene efectos medibles:

| Bus | Qué lleva | Su anchura determina |
| --- | --- | --- |
| Datos | la información | cuántos bits se transfieren a la vez |
| Direcciones | la posición | cuánta memoria se puede direccionar |
| Control | las señales de mando | qué operaciones existen |

Con $n$ líneas de dirección se direccionan $2^n$ posiciones. De ahí que 32 bits
limiten a 4 GB, que es la razón concreta por la que se pasó a 64.

## Representación de datos numéricos

### Sistemas de numeración

En base $b$, un número se escribe como suma de potencias:

$$N = \sum_{i=-m}^{n-1} d_i\,b^{\,i}, \qquad 0 \le d_i < b$$

| Base | Dígitos | Por qué se usa |
| --- | --- | --- |
| 2 | 0, 1 | los dos estados físicos de un circuito |
| 8 | 0 a 7 | tres bits por dígito |
| 10 | 0 a 9 | la humana |
| 16 | 0 a 9, A a F | cuatro bits por dígito, compacta |

Que 8 y 16 sean potencias de 2 es lo que hace la conversión inmediata: se agrupan
los bits de tres en tres o de cuatro en cuatro. Con base 10 hace falta dividir
repetidamente.

```{=latex}
\begin{ejemplo}
$1011\,0110_2$ agrupado de cuatro en cuatro es $\mathtt{B6}_{16}$, y de tres en tres,
partiendo por la derecha, $10\,110\,110_2 = 266_8$. La conversión a decimal, en
cambio, exige sumar $128+32+16+4+2 = 182$.
\end{ejemplo}
```

### Enteros con signo

Cuatro convenios, y solo uno sobrevive:

| Convenio | Cómo | Problema |
| --- | --- | --- |
| Signo y magnitud | un bit de signo | dos ceros; sumar exige comparar magnitudes |
| Complemento a 1 | se invierten los bits | dos ceros; hay que sumar el acarreo final |
| **Complemento a 2** | complemento a 1 más uno | ninguno de los anteriores |
| Exceso a $2^{n-1}$ | se suma una constante | solo se usa en el exponente del coma flotante |

**El complemento a 2 gana porque la resta desaparece.** Restar es sumar el opuesto, y
el mismo circuito sumador sirve para las dos operaciones. Además solo hay un cero.

Con $n$ bits, el rango es $[-2^{n-1},\ 2^{n-1}-1]$:

| $n$ | Rango |
| --- | --- |
| 8 | $-128$ a $127$ |
| 16 | $-32\,768$ a $32\,767$ |
| 32 | $\pm 2{,}1 \times 10^9$ aproximadamente |
| 64 | $\pm 9{,}2 \times 10^{18}$ aproximadamente |

El rango es **asimétrico**: hay un negativo más que positivos, porque el cero ocupa
un sitio del lado positivo. De ahí que el opuesto del mínimo no se pueda representar,
y que negar $-128$ en 8 bits devuelva $-128$.

```{=latex}
\begin{anotacion}
El desbordamiento en complemento a 2 se detecta con una regla sencilla: ocurre cuando
se suman dos números del mismo signo y el resultado sale con el signo contrario.
Sumar números de signos distintos nunca desborda.
\end{anotacion}
```

### Coma flotante

Para cubrir un rango enorme con un número fijo de bits se sacrifica precisión:

$$N = (-1)^s \times 1{,}M \times 2^{\,E - sesgo}$$

| Formato | Signo | Exponente | Mantisa | Cifras decimales |
| --- | ---: | ---: | ---: | ---: |
| Simple (32 bits) | 1 | 8 | 23 | unas 7 |
| Doble (64 bits) | 1 | 11 | 52 | unas 16 |

El **1 implícito** de la parte entera no se guarda: como todo número normalizado
empieza por 1, se da por supuesto y se gana un bit de precisión.

Tres consecuencias que hay que conocer antes de usar coma flotante para algo serio:

- **La mayoría de los decimales no son exactos.** $0{,}1$ en binario es periódico, así
  que $0{,}1 + 0{,}2 \ne 0{,}3$ exactamente. Comparar dos flotantes con igualdad es un
  error; se compara la diferencia contra una tolerancia.
- **La suma no es asociativa.** Sumar una lista de menor a mayor y de mayor a menor da
  resultados distintos, porque al sumar un número pequeño a uno grande el pequeño se
  pierde al alinear exponentes.
- **La densidad no es uniforme.** Hay tantos representables entre 1 y 2 como entre
  1024 y 2048, así que la precisión absoluta empeora al crecer el número.

### Otras representaciones

| Representación | Para qué |
| --- | --- |
| BCD | cada dígito decimal en cuatro bits; cálculo financiero exacto |
| ASCII | caracteres en 7 u 8 bits |
| Unicode y UTF-8 | todos los sistemas de escritura, con longitud variable |
| Códigos detectores | paridad, para detectar un error de transmisión |
| Códigos correctores | Hamming, para detectar y corregir |

El **BCD** aparece justo por el primer problema del coma flotante: en contabilidad no
se admite que sumar céntimos dé un error de redondeo, así que se representa en
decimal aunque cueste más.

## Niveles conceptuales de descripción

Un computador se describe en varios niveles, cada uno con su vocabulario. Ninguno es
el verdadero: cada uno responde preguntas distintas.

| Nivel | Elementos | Pregunta que responde |
| --- | --- | --- |
| Aplicación | programas | qué hace la máquina para el usuario |
| Lenguaje de alto nivel | sentencias, tipos, funciones | cómo se expresa el algoritmo |
| Ensamblador y máquina | instrucciones, registros | qué sabe hacer el procesador |
| Transferencia entre registros | registros, buses, señales de control | cómo se ejecuta una instrucción |
| Lógico | puertas, biestables | cómo se construye cada operación |
| Circuito | transistores, resistencias | de qué está hecho |
| Físico | materiales, geometría | cómo se fabrica |

Esta asignatura recorre los tres del medio: el nivel lógico en los temas 3 y 4, y el
de transferencia entre registros en el tema 5, para llegar al computador sencillo
completo.

**Cada nivel oculta el de abajo**, y esa es la razón de que se pueda programar sin
saber electrónica. Pero la abstracción tiene fugas: un programa que recorre una
matriz por columnas es más lento que por filas, y eso no se explica en ningún nivel
por encima del de memoria.

## Sistemas analógicos y digitales

| | Analógico | Digital |
| --- | --- | --- |
| Valores | continuos | discretos |
| Ruido | se acumula etapa tras etapa | se elimina si está bajo el margen |
| Precisión | la del componente | la del número de bits |
| Almacenamiento | se degrada con las copias | copia exacta indefinida |
| Diseño | específico de cada problema | general y programable |

La segunda fila es la razón de todo lo demás. En un sistema digital, una señal que se
ha ensuciado se regenera al pasar por la puerta siguiente, porque la puerta la
reinterpreta como 0 o 1 y emite un valor limpio. En uno analógico, cada etapa suma su
propio ruido y el error crece sin remedio.

El precio es la **cuantificación**: al convertir una magnitud continua en un número se
pierde lo que hay entre dos niveles. Con $n$ bits hay $2^n$ niveles, y el error
relativo baja a la mitad por cada bit añadido.

$$\text{SNR} \approx 6{,}02\,n + 1{,}76\ \text{dB}$$

Por eso el audio de 16 bits da unos 98 dB, suficiente para el oído, y el profesional
usa 24.

## Ejercicios

```{=latex}
\begin{ejercicio}
Representar $-45$ en complemento a 2 con 8 bits, y comprobar el resultado sumándole
$45$.
\end{ejercicio}

\begin{solucion}
$45 = 0010\,1101_2$. Invirtiendo, $1101\,0010$; sumando uno, $1101\,0011$, que es
$-45$. Al sumarle $0010\,1101$ da $1\,0000\,0000$: el acarreo de salida se descarta y
queda $0000\,0000$, el cero. Que ese acarreo se descarte sin más es justo lo que hace
cómodo el convenio.
\end{solucion}

\begin{ejercicio}
¿Por qué $0{,}1 + 0{,}2$ no da exactamente $0{,}3$ en coma flotante?
\end{ejercicio}

\begin{solucion}
Porque $0{,}1$ y $0{,}2$ no tienen representación binaria finita: en base 2 son
fracciones periódicas y se almacenan redondeadas. La suma de los dos valores
redondeados no coincide con el valor redondeado de $0{,}3$. Comparar flotantes con
igualdad es incorrecto; se compara $|a-b| < \varepsilon$ con una tolerancia acorde a
la magnitud.
\end{solucion}

\begin{ejercicio}
Un bus de direcciones tiene 20 líneas y el de datos 16. ¿Cuánta memoria direcciona y
en qué unidades?
\end{ejercicio}

\begin{solucion}
$2^{20} = 1\,048\,576$ posiciones. Si cada posición almacena una palabra de 16 bits,
son 2 MB; si almacena un byte, 1 MB. La anchura del bus de datos no cambia cuántas
posiciones hay, solo cuánto se transfiere en cada acceso, y por eso hay que decir
siempre qué unidad se direcciona.
\end{solucion}
```

Los conceptos de este tema están desarrollados en \cite{prieto2010},
\cite{stallings2022} y \cite{diaz2009}.
