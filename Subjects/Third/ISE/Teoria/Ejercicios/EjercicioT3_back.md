---
title: "Análisis de Operaciones Financieras"
subtitle: "Temario y Ejercicios"
author: "Ismael Sallami Moreno"
date: "Mayo de 2025"
lang: es

# Opciones específicas de la plantilla Eisvogel para la portada
titlepage: true
# titlepage-logo: "../images/logo-universidad.jpg" # COLOCA TU LOGO AQUÍ (ej. logo-mi-uni.png)
                                        # Eisvogel lo pondrá arriba, centrado.
# titlepage-background: "images/portada-fondo.jpg" # OPCIONAL: Imagen de fondo para TODA la portada
                                                     # Debe estar diseñada para que el texto sea legible encima.

# Colores para la portada (Eisvogel los usa)
# titlepage-color: "F5F5F5" # Color de fondo de la portada si NO usas titlepage-background (ej. un gris muy claro)
titlepage-text-color: "333333"   # Color del texto en la portada (gris oscuro)
titlepage-rule-color: "4682B4"   # Color para la línea horizontal decorativa (azul acero)
                                  # Puedes ponerlo igual que titlepage-color para ocultar la línea si usas fondo de color.
# titlepage-rule-height: 2 # Grosor de la línea en pt (default es 2)

# Opciones generales del documento
mainfont: "Latin Modern Roman"   # Asegúrate de tener esta fuente. Alternativas: "CMU Serif", "TeX Gyre Termes"
# fontsize: 11pt                 # Puedes elegir 10pt, 11pt, 12pt
geometry: "margin=2.5cm"
colorlinks: true
linkcolor: "008080"              # Teal para los enlaces
toc: true
# toc-own-page: true             # Descomenta si quieres la tabla de contenido en su propia página (recomendado por Eisvogel)
numbersections: true
book: true                       # Para un estilo más de "libro" con Eisvogel (afecta títulos de capítulo, etc.)

# Encabezados y pies de página (Eisvogel los gestiona bien)
# header-left: "\\small{Contabilidad}" # Puedes personalizar el contenido del encabezado
# header-right: "\\small{Ejercicios Tema 6}"
# footer-center: "\\small{\\thepage}" # Número de página centrado y pequeño

# IMPORTANTE: Elimina cualquier `header-includes` complejo que tuvieras antes para la portada.
# Dejamos que Eisvogel maneje la creación de la portada con las variables de arriba.
---

# Ejercicios Tema 3


## Conversión de unidades de KiB a otras y viceversa

En informática, las unidades de medida de almacenamiento suelen expresarse en múltiplos binarios (potencias de 1024). A continuación se describe cómo convertir desde **KiB** (Kibibytes) a otras unidades y viceversa.

* **1 KiB (Kibibyte)** = 1024 bytes
* **1 MiB (Mebibyte)** = 1024 KiB = 1.048.576 bytes
* **1 GiB (Gibibyte)** = 1024 MiB = 1.073.741.824 bytes
* **1 TiB (Tebibyte)** = 1024 GiB = 1.099.511.627.776 bytes

### Fórmulas para conversión

* Para pasar de **KiB a bytes**:

```
bytes = KiB × 1024
```

* Para pasar de **bytes a KiB**:

```
KiB = bytes / 1024
```

* Para pasar de **KiB a MiB**:

```
MiB = KiB / 1024
```

* Para pasar de **MiB a KiB**:

```
KiB = MiB × 1024
```

* Para pasar de **KiB a GiB**:

```
GiB = KiB / (1024 × 1024)
```

* Para pasar de **GiB a KiB**:

```
KiB = GiB × 1024 × 1024
```

### Ejemplo de conversiones rápidas

* **2048 KiB** = 2048 × 1024 = 2.097.152 bytes
* **2048 KiB** = 2048 / 1024 = 2 MiB
* **5242880 bytes** = 5242880 / 1024 = 5120 KiB
* **3 GiB** = 3 × 1024 × 1024 = 3.145.728 KiB

Estas conversiones permiten ajustar los datos a la unidad más adecuada según la magnitud de la información o el análisis que se esté realizando.



## PROBLEMA 3.1
En un sistema Linux se ha ejecutado la orden `uptime` tres veces en momentos diferentes. El resultado, de forma resumida, es el siguiente:

```
... load average: 6.85, 7.37, 7.83
... load average: 8.50, 10.93, 8.61
... load average: 37.34, 9.47, 3.30
```

Se pide determinar si la carga del sistema crece, decrece, se mantiene estacionaria o bien no se puede decidir sobre ello.

**Explicación:**

El `load average` representa el número medio de procesos en ejecución o esperando ser ejecutados (en estado runnable o I/O blocked) durante los últimos 1, 5 y 15 minutos. Constituye un buen indicador de la carga de trabajo del sistema.

Al analizar las tres ejecuciones observamos lo siguiente:

* En la primera medida, los valores son relativamente cercanos entre sí (en torno a 7–8).
* En la segunda medida, la carga se incrementa notablemente, especialmente en la media de los últimos 5 minutos (10.93).
* En la tercera medida, se produce un pico muy elevado en el promedio de 1 minuto (37.34), pero los promedios de 5 y 15 minutos descienden respecto a la segunda medida.

Estas variaciones muestran fluctuaciones significativas en la carga del sistema, sin seguir una tendencia uniforme o constante. Dado que no se observa un patrón claro de crecimiento o decrecimiento continuo en los valores, no es posible determinar si la carga del sistema está aumentando, disminuyendo o permaneciendo estable.

Por tanto, la respuesta correcta es que no se puede decidir sobre la evolución de la carga a partir de los datos disponibles.


## PROBLEMA 3.2

En un sistema Linux se ha ejecutado la siguiente orden:

```
$ time quicksort
real 0m40.2s
user 0m17.1s
sys  0m3.2s
```

Indique si el sistema está soportando mucha o poca carga. Razone la respuesta.

**Explicación:**

El comando `time` nos muestra tres valores principales:

* **real**: tiempo total transcurrido desde que comenzó la ejecución del comando hasta que finalizó.
* **user**: tiempo que la CPU dedicó a ejecutar instrucciones en modo usuario.
* **sys**: tiempo que la CPU dedicó a ejecutar instrucciones en modo núcleo del sistema.

En este caso, el tiempo real (40.2 segundos) es considerablemente superior a la suma de los tiempos de usuario y sistema (17.1 + 3.2 = 20.3 segundos). Esto sugiere que el proceso ha pasado más de la mitad del tiempo total esperando recursos, probablemente debido a la contención de recursos del sistema o al uso intensivo de operaciones de entrada/salida.

Aunque podría deberse a que el propio programa quicksort realiza muchas operaciones de E/S (lo que también explicaría la diferencia entre el tiempo real y el tiempo de CPU), es más probable que la diferencia significativa se deba a que el sistema tiene una carga elevada. Esto provoca que el proceso deba esperar más tiempo para que la CPU y otros recursos estén disponibles, retrasando así su finalización.

En consecuencia, se concluye que el sistema soporta una carga considerable.


## PROBLEMA 3.3

Se sabe que la sobrecarga (overhead) de CPU de un monitor software en un determinado servidor es del 4%. Si el monitor se activa cada 2 segundos, ¿cuánto tiempo tarda el monitor en ejecutarse por cada activación?

**Explicación:**

La sobrecarga que introduce el monitor de actividad está definida como el porcentaje de tiempo de CPU que consume respecto al tiempo total entre dos activaciones consecutivas. La fórmula, según se indica en los apuntes, es:

```
Sobrecarga (%) = (tiempo de CPU que usa el monitor por activación / periodo de activación) × 100
```

Despejando el tiempo de CPU que usa el monitor por activación:

```
tiempo de CPU que usa el monitor por activación = (Sobrecarga (%) × periodo de activación) / 100
```

Sustituyendo los datos del problema (sobrecarga = 4%, periodo de activación = 2 s):

```
tiempo de CPU que usa el monitor por activación = (4 × 2) / 100 = 0.08 s = 80 ms
```

Por lo tanto, el monitor tarda 80 milisegundos en ejecutarse por cada activación.



## PROBLEMA 3.4

A continuación se muestra el resultado obtenido tras ejecutar la orden `top` en un sistema informático que emplea Linux como sistema operativo:

```
2:52pm up 17 days, 3:41, 1 user, load average: 0.15, 0.27, 0.32
54 processes: 51 sleeping, 3 running, 0 zombie, 0 stopped
%Cpu(s): 23.8% user, 14.0% system, 0.0% nice, 17.0% idle, 45.2% wa
Mem:  257124K av, 253052K used,  4072K free, 8960K shrd, 182972K buff
Swap: 261496K av,  21396K used,240100K free, 26344K cached
PID USER PRI NI VIRT RSS SHARE STAT LC %CPU %MEM TIME COMMAND
807 joan 0 0 5708 5708 532 R N 0 23.0 2.2 6:16 p_exec
809 joan 0 0 5708 5708 532 R N 0 14.0 2.2 3:42 p_exec
185 tomi 0 0 824 824 632 R 0 0.5 0.3 0:00 top
201 xp 0 0 1272 1208 644 S 0 0.1 0.4 5:49 xp_stat
1 root 0 0 60 56 36 S 0 0.0 0.0 0:03 init
2 root 0 0 0 0 0 SW 0 0.0 0.0 0:13 kflushd
7 root 0 0 0 0 0 SW 0 0.0 0.0 0:00 nfsiod
194 root 0 0 72 4 4 S 0 0.0 0.0 0:00 migetty
195 root 0 0 68 0 0 SW 0 0.0 0.0 0:00 migetty
179 root 0 0 532 312 236 S 0 0.0 0.1 0:00 sndmail
```

Se pide responder a las siguientes preguntas:

a) ¿Cuánta memoria física tiene la máquina?

b) ¿Qué porcentaje de la memoria física está marcada como usada según el monitor?

c) ¿Cuál es la utilización media del procesador?

d) ¿Cómo es la evolución de la carga media del sistema, ascendente o descendente?

e) ¿Cuánta memoria física ocupa el monitor?

**Explicación:**

a) La memoria física disponible en la máquina es de 257124 KiB, como se indica en la línea de memoria:

```
Mem:  257124K av, 253052K used,  4072K free, ...
```

b) El porcentaje de memoria física utilizada se calcula como:

```
(253052 / 257124) × 100 ≈ 98.4%
```

c) La utilización media del procesador corresponde a la suma de los tiempos de usuario y de sistema:

```
23.8% + 14.0% = 37.8%
```

d) La evolución de la carga media es descendente, ya que los promedios de carga son:

```
0.15 (1 min), 0.27 (5 min), 0.32 (15 min)
```

El valor más reciente (1 min) es menor que los promedios a más largo plazo, indicando que la carga está disminuyendo.

e) La memoria que ocupa el monitor `top` es de 824 KiB, como aparece en la línea del proceso `top`:

```
185 tomi 0 0 824 824 632 R 0 0.5 0.3 0:00 top
```

- `VIRT`: memoria virtual.
- `RSS`: (Resident Set Size) memoria física.

En cuanto a la respuesta de la pregunta nos debemos de quedar con la física. La unidad siempre es en KiB (Kibibyte).

Por lo tanto, las respuestas finales son:
a) 257124 KiB.

b) 98.4%.

c) 37.8%.

d) Descendente.

e) 824 KiB.


## PROBLEMA 3.5

Considere las órdenes siguientes ejecutadas en un sistema Linux:

```
$ time simulador_original
real 0m24.2s
user 0m15.1s
sys  0m1.6s

$ time simulador_mejorado
real 0m32.8s
user 0m10.7s
sys  0m2.1s
```

Se pide:

1. ¿Cuál es el tiempo de ejecución de ambos simuladores?
2. Calcule, si es el caso, la mejora en el tiempo de ejecución del simulador mejorado respecto del original.

**Explicación:**

1. El tiempo efectivo de ejecución de un programa es la suma de los tiempos de CPU en modo usuario y en modo sistema:

* Para el **simulador original**:

  ```
  user + sys = 15.1 s + 1.6 s = 16.7 s
  ```
* Para el **simulador mejorado**:

  ```
  user + sys = 10.7 s + 2.1 s = 12.8 s
  ```

Aunque el tiempo **real** o de reloj es mayor en el caso del simulador mejorado (32.8 s frente a 24.2 s), este valor también incluye el tiempo que el proceso ha pasado esperando a la disponibilidad de la CPU u otros recursos del sistema (tiempo de espera por carga del sistema). Por tanto, la comparación más relevante es la de los tiempos de CPU (`user + sys`), que miden la cantidad de trabajo efectivo que realizó la CPU para cada simulador.

2. La mejora en el tiempo de ejecución se calcula comparando los tiempos de CPU:

```
Mejora = tiempo original / tiempo mejorado = 16.7 / 12.8 ≈ 1.3
```

Esto significa que el **simulador mejorado** es aproximadamente **1,3 veces más rápido** que el simulador original en cuanto a la carga real de trabajo de la CPU.

Aunque los tiempos reales puedan inducir a error, estos reflejan la carga del sistema en ese momento y no el rendimiento puro del programa. Por eso, la comparación justa debe realizarse con los tiempos de CPU (`user + sys`).


## PROBLEMA 3.6

El monitor `sar` (system activity reporter) de un computador se activa cada 15 minutos y tarda 750 ms en ejecutarse por cada activación. Se pide:

* Calcular la sobrecarga que genera este monitor sobre el sistema informático.
* Si la información generada en cada activación ocupa 8192 bytes, ¿la monitorización de cuántos días completos se pueden almacenar en el directorio `/var/log/sysstat` si se dispone únicamente de 200 MiB de capacidad libre?

**Explicación:**

### Cálculo de la sobrecarga del monitor

La **sobrecarga** (overhead) se define como el porcentaje de tiempo que consume el monitor en relación con el tiempo total de un periodo de activación. Según la fórmula vista en los materiales:

```
Sobrecarga (%) = (tiempo de CPU usado por el monitor por activación / periodo de activación) × 100
```

Sustituimos los datos:

* **tiempo de CPU por activación**: 750 ms = 0,75 s
* **periodo de activación**: 15 minutos = 900 s

```
Sobrecarga (%) = (0,75 / 900) × 100 ≈ 0,083 %
```

Por tanto, la sobrecarga generada por el monitor es del **0,083 %**.

---

### Cálculo del número de días completos que se pueden almacenar

Cada activación del monitor genera **8192 bytes** de información. Para saber cuántos días completos se pueden almacenar, calculamos primero cuántas activaciones hay en un día:

* **Número de activaciones por día**:

```
24 h/día × (60 min / 15 min) = 24 × 4 = 96 activaciones/día
```

* **Tamaño de información generado por día**:

```
8192 bytes/activación × 96 activaciones = 786432 bytes/día ≈ 768 KiB/día
```

La capacidad de almacenamiento libre disponible es de **200 MiB = 209715200 bytes**.

* **Número de días completos almacenables**:

```
209715200 / 786432 ≈ 266 días completos
```

Por lo tanto, se pueden almacenar los datos generados por el monitor `sar` durante **266 días completos** en el espacio disponible.

**Nota:**
La conversión de MiB (Mebibytes) a bytes se realiza usando la base binaria (1024) y la siguiente fórmula:

```
1 MiB = 1024 × 1024 bytes = 1.048.576 bytes
```

Por ejemplo:

* **1 MiB** = 1.048.576 bytes
* **200 MiB** = 200 × 1.048.576 = 209.715.200 bytes

En general, si tienes un valor en MiB y quieres pasarlo a bytes:

```
bytes = MiB × 1.048.576
```

## PROBLEMA 3.7

El día 8 de octubre se ha ejecutado la siguiente orden en un sistema Linux:

```
% ls /var/log/sysstat
-rw-r--r-- 1 root root 3049952 Oct 6 23:50 sa06
-rw-r--r-- 1 root root 3049952 Oct 7 23:50 sa07
-rw-r--r-- 1 root root 2372184 Oct 8 18:40 sa08
```

Suponiendo que la primera muestra se toma a las 0:00 de cada día y que `sadc` se ejecuta con un tiempo de muestreo constante, se pide determinar:

* ¿Cada cuánto tiempo se activa el monitor `sar`?
* ¿Cuál es la anchura de entrada del monitor?

**Explicación:**

### Frecuencia de activación del monitor `sar`

Los ficheros generados por `sar` tienen marcas de tiempo que indican que la última activación del día se produce a las 23:50. Como la primera activación es a las 0:00 y el tiempo de muestreo es constante, deducimos que las activaciones ocurren cada **10 minutos**.

Esto se debe a que en un día hay 24 horas × 6 muestras por hora (cada 10 min) = 144 muestras, y la última activación es justo a las 23:50.

---

### Anchura de entrada del monitor

La anchura de entrada se calcula como la cantidad de bytes que ocupa cada muestra o activación del monitor. Usamos los datos de los ficheros `sa06` y `sa07` (que representan días completos con el mismo patrón):

* Tamaño del fichero de un día: **3.049.952 bytes**
* Número de activaciones al día:

```
24 horas × (60 min / 10 min) = 24 × 6 = 144 activaciones/día
```

* Anchura de entrada de cada activación:

```
Anchura de entrada (bytes) = 3.049.952 / 144 ≈ 21.180 bytes ≈ 20,7 KiB o 21,2 KB
```

Por lo tanto:

* El monitor `sar` se activa cada **10 minutos**.
* La anchura de entrada por activación es aproximadamente **20,7 KiB** o **21,2 KB**.


## PROBLEMA 3.8

Indique el resultado que produce la ejecución de las siguientes órdenes sobre un sistema Linux con el monitor `sar` instalado:

```
1. sar
2. sar -A
3. sar -u 1 30
4. sar -uB -f /var/log/sysstat/08
5. sar -d -s 12:30:00 -e 18:15:00 -f /var/log/sysstat/08
```

**Explicación de los resultados:**

1. **`sar`**
   Muestra la utilización global del procesador (CPU) durante el día actual. Presenta estadísticas como el porcentaje de tiempo de usuario, sistema, espera de E/S, y tiempo inactivo.

2. **`sar -A`**
   Genera un informe completo con toda la información recogida durante el día actual. Incluye estadísticas de CPU, memoria, dispositivos de almacenamiento, red, entre otras.

3. **`sar -u 1 30`**
   Proporciona información sobre la utilización actual del procesador (`-u`), tomando 30 mediciones con un periodo de 1 segundo entre ellas. Es útil para observar la evolución en tiempo real.

4. **`sar -uB -f /var/log/sysstat/08`**
   Extrae del fichero histórico del día 8 (`/var/log/sysstat/08`) estadísticas combinadas de utilización del procesador (`-u`) y de paginación de la memoria virtual (`-B`).

5. **`sar -d -s 12:30:00 -e 18:15:00 -f /var/log/sysstat/08`**
   Muestra estadísticas de las transferencias de disco (`-d`) realizadas entre las 12:30 y las 18:15 horas del día 8, utilizando la información almacenada en el fichero histórico correspondiente.

---

### Resumen final

1. Utilización del procesador durante el día actual.
2. Toda la información recogida durante el día actual.
3. Utilización actual del procesador: 30 medidas tomadas con un período de un segundo.
4. Utilización del procesador y paginación de la memoria virtual durante el día 8 del mes.
5. Transferencias de disco desde las 12:30 hasta las 18:15 horas del día 8 del mes.


## PROBLEMA 3.9

Después de instrumentar un programa con la herramienta `gprof`, el resultado obtenido ha sido el siguiente:

```
Flat profile:
Each sample counts as 0.01 seconds.

%time  cumulative  self    self    calls  self  s/call  total s/call  name
59.36     27.72    27.72    3      9.24   14.39        reduce
33.08     43.17    15.45    6      2.57    2.57        invierte
 7.56     46.70     3.53    2      1.76    1.76        calcula
```

El grafo de dependencias muestra que el procedimiento `invierte()` es llamado desde el procedimiento `reduce()`.

Se pide:

1. ¿Cuál es el procedimiento cuyo código propio sería más conveniente optimizar?
2. Si el código propio de `reduce()` se sustituye por otro tres veces más rápido, ¿cuánto tiempo tardará en ejecutarse el programa?
3. Si el procedimiento `invierte()` se sustituye por una nueva versión cuatro veces más rápida, ¿qué mejora se obtendrá en el tiempo de ejecución?
4. Calcule cuál es la ganancia en velocidad máxima que se podría conseguir en el tiempo de ejecución mediante la optimización del código del procedimiento `invierte()`.

---

**Explicación:**

### 1. Procedimiento prioritario para optimizar

El procedimiento `reduce()` consume el mayor porcentaje de tiempo de CPU (59.36%), y su tiempo propio (27.72 s) es significativamente superior al de `invierte()` (15.45 s) o `calcula()` (3.53 s). Por tanto, el procedimiento **`reduce()`** es el candidato principal a optimizar para reducir el tiempo de ejecución global.

---

### 2. Tiempo de ejecución si `reduce()` se hace tres veces más rápido

El tiempo propio de `reduce()` es 27.72 s. Si se reduce a la tercera parte:

```
27.72 s / 3 = 9.24 s
```

El tiempo de ejecución de las demás funciones (`invierte()` y `calcula()`) permanece constante:

```
15.45 s (invierte) + 3.53 s (calcula) = 18.98 s
```

Por tanto, el nuevo tiempo total del programa sería:

```
9.24 s (reduce optimizado) + 18.98 s = 28.22 s
```

---

### 3. Mejora si `invierte()` se hace cuatro veces más rápido

El tiempo propio de `invierte()` es 15.45 s. Si se reduce a la cuarta parte:

```
15.45 s / 4 = 3.86 s
```

El tiempo de ejecución de las demás funciones (`reduce()` y `calcula()`) no cambia:

```
27.72 s (reduce) + 3.53 s (calcula) = 31.25 s
```

El nuevo tiempo de ejecución sería:

```
3.86 s (invierte optimizado) + 31.25 s = 35.11 s
```

La mejora se calcula comparando con el tiempo original:

```
46.7 s / 35.11 s ≈ 1.33
```

Por lo tanto, el programa se ejecutaría **1,33 veces más rápido**.

---

### 4. Ganancia máxima posible optimizando `invierte()`

La ganancia máxima se obtiene al suponer que el tiempo propio de `invierte()` se pudiera reducir a cero (en la práctica, imposible, pero teóricamente interesante). El tiempo del programa sería entonces:

```
46.7 s - 15.45 s = 31.25 s
```

La ganancia máxima en velocidad sería:

```
46.7 / 31.25 ≈ 1.49
```

Por tanto, la ganancia máxima posible optimizando solo `invierte()` es de **1,49 veces**.

---

**Respuestas finales:**

1. El procedimiento más conveniente para optimizar es `reduce()`.
2. El programa se ejecutaría en 28,22 segundos.
3. Se obtendría una mejora de 1,33 veces en la ejecución.
4. La ganancia máxima que se podría conseguir con `invierte()` sería 1,49 veces.
