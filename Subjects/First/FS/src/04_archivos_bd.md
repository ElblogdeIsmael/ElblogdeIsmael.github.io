# Sistemas de archivos. Introducción a las bases de datos

Tema 4 del programa. Cómo se organiza la información persistente, primero en
archivos y después en bases de datos, y por qué hacen falta las dos cosas.

## Archivos y directorios

```{=latex}
\begin{definicion}[Archivo]
Unidad lógica de almacenamiento persistente: una secuencia de bytes con nombre,
independiente del soporte físico donde resida.
\end{definicion}
```

La definición es corta y esconde el trabajo entero del sistema operativo. Un archivo
está repartido en bloques dispersos por el disco, y el sistema presenta esos bloques
como una secuencia continua a la que se accede por nombre.

| Atributo | Para qué |
| --- | --- |
| Nombre | identificarlo dentro de su directorio |
| Tipo | interpretar su contenido |
| Tamaño | saber cuánto ocupa |
| Fechas | creación, último acceso, última modificación |
| Propietario y permisos | control de acceso |
| Ubicación | dónde están sus bloques |

Todos menos el nombre viven en la estructura de control del archivo, el **i-nodo** en
los sistemas de tipo UNIX. El nombre está en el directorio, y esa separación tiene
una consecuencia visible: un mismo archivo puede tener varios nombres.

### Directorios

Un directorio es un archivo cuyo contenido es una tabla que asocia nombres con
i-nodos. La estructura habitual es un **árbol**, con dos aditamentos que lo
convierten en grafo:

| Enlace | Qué es | Si se borra el original |
| --- | --- | --- |
| Duro | otra entrada de directorio al mismo i-nodo | el archivo sigue: el i-nodo cuenta referencias |
| Simbólico | un archivo que contiene una ruta | el enlace queda roto |

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth,
  dir/.style={draw, minimum width=16mm, minimum height=6.5mm, font=\scriptsize},
  ino/.style={draw, minimum width=16mm, minimum height=6.5mm, font=\scriptsize,
              fill=black!6}
]
\node[dir] (d1) at (0,0.8)   {\texttt{informe.txt}};
\node[dir] (d2) at (0,-0.4)  {\texttt{copia.txt}};
\node[ino] (i)  at (4.0,0.2) {i-nodo 4711};
\node[font=\scriptsize, anchor=west] at (6.0,0.2) {bloques de datos};
\draw[->] (d1.east) -- (i.west);
\draw[->] (d2.east) -- (i.west);
\draw[->] (i.east) -- (5.9,0.2);
\node[font=\scriptsize, anchor=north, align=center] at (2.0,-1.3)
     {dos nombres,\\un solo archivo};
\end{tikzpicture}
\end{center}
```

De ahí que borrar en UNIX se llame `unlink`: no borra el archivo, borra el nombre. El
archivo desaparece cuando no queda ningún nombre **y** ningún proceso lo tiene
abierto. Un programa puede abrir un archivo, borrarlo y seguir usándolo, y así se
crean los temporales que se limpian solos.

### Permisos

Tres clases de usuario y tres permisos:

| | Leer | Escribir | Ejecutar |
| --- | --- | --- | --- |
| Propietario | `r` | `w` | `x` |
| Grupo | `r` | `w` | `x` |
| Otros | `r` | `w` | `x` |

En notación octal, `rwxr-xr--` es 754. Sobre un **directorio** los tres permisos
significan otra cosa, y es la fuente de la mitad de las confusiones:

| Permiso sobre un directorio | Qué permite |
| --- | --- |
| `r` | listar los nombres que contiene |
| `w` | crear y borrar entradas dentro |
| `x` | atravesarlo para llegar a lo que hay debajo |

Dos consecuencias que no son intuitivas: con `x` y sin `r` se puede acceder a un
archivo cuyo nombre se conozca, pero no listar el directorio; y **borrar un archivo
depende del permiso de escritura del directorio, no del archivo**, porque lo que se
modifica es la tabla de nombres.

## Organización de la información

### Métodos de acceso

| Método | Cómo se lee | Ejemplo |
| --- | --- | --- |
| Secuencial | de principio a fin | registro de sucesos, cinta |
| Directo | saltando a una posición | archivo de registros de tamaño fijo |
| Indexado | por un índice que apunta a la posición | base de datos |

El acceso directo exige registros de **tamaño fijo**: para saltar al registro $i$ hay
que poder calcular su desplazamiento como $i \times \text{tamaño}$. Con registros
variables no hay fórmula y hace falta un índice.

### Asignación de espacio en disco

| Estrategia | Cómo | Ventaja | Problema |
| --- | --- | --- | --- |
| Contigua | bloques consecutivos | acceso directo trivial, muy rápida | fragmentación externa; crecer es imposible |
| Enlazada | cada bloque apunta al siguiente | sin fragmentación, crece libre | no hay acceso directo |
| Indexada | un bloque índice con las direcciones | acceso directo y crecimiento | el índice ocupa y se puede quedar corto |

Los sistemas reales usan la indexada con **indirección**: el i-nodo guarda unas pocas
direcciones directas y luego una indirecta simple, una doble y una triple. Con eso,
los archivos pequeños se leen con un solo acceso y los enormes siguen siendo
representables.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth,
  b/.style={draw, minimum width=7mm, minimum height=5mm, font=\tiny}
]
\node[draw, minimum width=22mm, minimum height=32mm] (ino) at (0,-0.4) {};
\node[font=\scriptsize] at (0,1.35) {i-nodo};
\foreach \i in {0,...,3} \node[b] (d\i) at (0,0.75-\i*0.5) {directo};
\node[b] (s) at (0,-1.55) {indirecto};
\foreach \i in {0,...,3} \node[b] (t\i) at (3.6,0.75-\i*0.5) {datos};
\foreach \i in {0,...,3} \draw[->] (d\i.east) -- (t\i.west);
\node[draw, minimum width=14mm, minimum height=11mm, font=\tiny, align=center]
     (bi) at (3.6,-1.55) {bloque\\índice};
\draw[->] (s.east) -- (bi.west);
\foreach \y in {-1.15,-1.55,-1.95} \draw[->] (bi.east) -- (5.6,\y);
\node[font=\scriptsize, anchor=west] at (5.7,-1.55) {más datos};
\end{tikzpicture}
\end{center}
```

### Gestión del espacio libre

| Método | Cómo | Coste |
| --- | --- | --- |
| Mapa de bits | un bit por bloque | $1/8$ de byte por bloque; fácil buscar huecos contiguos |
| Lista enlazada | cada bloque libre apunta al siguiente | sin coste de espacio; buscar contiguos es caro |
| Agrupación | bloques con listas de direcciones libres | intermedio |

Con bloques de 4 KB, el mapa de bits de un disco de 1 TB ocupa 32 MB. Es asumible, y
por eso es lo habitual.

### Fiabilidad

Un corte de corriente a mitad de una operación deja el sistema de archivos
inconsistente: un bloque asignado a dos archivos, o marcado como ocupado sin
pertenecer a ninguno. Las dos respuestas:

| Técnica | Idea |
| --- | --- |
| Comprobación al arrancar | recorrer todo el sistema y reparar |
| Registro por diario (*journaling*) | anotar la operación antes de hacerla y borrar la anotación al acabar |

La primera tarda en proporción al tamaño del disco, y con discos grandes eso son
horas. La segunda solo tiene que revisar el diario, y por eso la usan todos los
sistemas actuales.

## Bases de datos

Un archivo basta mientras los datos sean pocos, los use un solo programa y no
importe repetir información. Cuando eso deja de ser cierto aparecen cuatro problemas
que el sistema de archivos no resuelve.

| Problema con archivos | Qué produce |
| --- | --- |
| Redundancia | el mismo dato en varios archivos |
| Inconsistencia | se actualiza una copia y no las otras |
| Dependencia del formato | cambiar la estructura obliga a tocar todos los programas |
| Acceso concurrente | dos programas escribiendo a la vez corrompen los datos |

```{=latex}
\begin{definicion}[Base de datos]
Colección estructurada de datos relacionados, con una descripción de su propia
estructura, almacenada de forma que varios usuarios y aplicaciones puedan
compartirla de manera controlada.
\end{definicion}
```

La parte que suele pasarse por alto es «con una descripción de su propia
estructura»: la base de datos guarda su esquema dentro. Eso es lo que permite que
una consulta que nadie previó funcione sin tocar ningún programa.

### El gestor

El **sistema gestor de bases de datos** es el software que se interpone entre las
aplicaciones y los datos.

| Función | Qué aporta |
| --- | --- |
| Definición de datos | describir el esquema |
| Manipulación | consultar, insertar, modificar, borrar |
| Control de concurrencia | varios usuarios a la vez sin corromper nada |
| Recuperación | volver a un estado consistente tras un fallo |
| Seguridad | quién puede ver y modificar qué |
| Integridad | reglas que los datos deben cumplir siempre |

### El modelo relacional

Los datos se organizan en **tablas**. Cada fila es un registro y cada columna un
atributo con su dominio.

| Concepto | Qué es |
| --- | --- |
| Tabla | conjunto de filas con la misma estructura |
| Clave primaria | atributo que identifica cada fila de forma única |
| Clave ajena | atributo que referencia la clave primaria de otra tabla |
| Integridad referencial | toda clave ajena apunta a una fila que existe |

```sql
CREATE TABLE alumno (
  dni      CHAR(9) PRIMARY KEY,
  nombre   VARCHAR(60) NOT NULL,
  curso    INTEGER CHECK (curso BETWEEN 1 AND 5)
);

CREATE TABLE matricula (
  dni       CHAR(9) REFERENCES alumno(dni),
  asignatura VARCHAR(10),
  PRIMARY KEY (dni, asignatura)
);

SELECT a.nombre, COUNT(*) AS asignaturas
FROM alumno a JOIN matricula m ON a.dni = m.dni
GROUP BY a.nombre
HAVING COUNT(*) > 3;
```

Lo que hace fuerte al modelo es que SQL es **declarativo**: la consulta dice qué se
quiere, no cómo obtenerlo. El gestor decide el plan de ejecución, elige los índices
y puede cambiar de estrategia si los datos cambian, sin que la consulta se toque.

### Transacciones

Una transacción es una secuencia de operaciones que se ejecuta como una unidad. Sus
cuatro garantías:

| Propiedad | Qué asegura |
| --- | --- |
| Atomicidad | o se hacen todas las operaciones o ninguna |
| Consistencia | de un estado válido a otro estado válido |
| Aislamiento | el resultado es como si se ejecutaran una tras otra |
| Durabilidad | lo confirmado sobrevive a un fallo |

```{=latex}
\begin{ejemplo}
Una transferencia bancaria resta de una cuenta y suma en otra. Si el sistema falla
entre las dos operaciones, la atomicidad garantiza que se deshace la primera: el
dinero no desaparece. Con archivos habría que programar esa garantía a mano, y
acertar en todos los casos de fallo posibles.
\end{ejemplo}
```

La durabilidad se apoya en la misma técnica que el sistema de archivos con diario:
**anotar antes de hacer**. La atomicidad, en poder deshacer con lo anotado.

### Cuándo archivo y cuándo base de datos

| Situación | Opción |
| --- | --- |
| Configuración de un programa | archivo de texto |
| Registro de sucesos que solo se añade | archivo |
| Datos con relaciones y consultas variadas | base de datos |
| Varios usuarios escribiendo a la vez | base de datos |
| Datos que deben sobrevivir a fallos a mitad de operación | base de datos |
| Un volumen enorme sin estructura, de solo lectura | archivo, a veces con índice aparte |

## Ejercicios

```{=latex}
\begin{ejercicio}
Un directorio tiene permisos \texttt{d-{}-x-{}-{}-{}-{}-{}-} para el propietario.
¿Puede listar su contenido? ¿Puede leer un archivo de dentro?
\end{ejercicio}

\begin{solucion}
Listar no, porque falta \texttt{r} sobre el directorio. Leer un archivo sí, siempre
que se conozca su nombre exacto y el archivo tenga permiso de lectura: el \texttt{x}
autoriza a atravesar el directorio. Es la configuración típica de los directorios
personales compartidos, donde se quiere dar acceso sin permitir fisgonear.
\end{solucion}

\begin{ejercicio}
Un proceso abre un archivo, otro lo borra con \texttt{rm} y el primero sigue
leyendo. ¿Qué ocurre?
\end{ejercicio}

\begin{solucion}
Sigue leyendo sin problema. \texttt{rm} elimina la entrada del directorio y
decrementa el contador de enlaces del i-nodo, pero el archivo solo se libera cuando
ese contador llega a cero \textbf{y} ningún proceso lo tiene abierto. El espacio se
recupera al cerrar. Por eso borrar un archivo de registro grande no libera espacio
mientras el proceso que escribe en él siga vivo.
\end{solucion}

\begin{ejercicio}
Dos programas actualizan a la vez el saldo de la misma cuenta guardado en un
archivo. ¿Qué puede salir mal y cómo lo evita una base de datos?
\end{ejercicio}

\begin{solucion}
Los dos leen el mismo saldo inicial, cada uno le aplica su cambio y escribe: la
segunda escritura pisa la primera y una de las dos operaciones se pierde sin dejar
rastro. Un gestor lo evita con control de concurrencia —bloqueos o versiones— de modo
que el resultado equivalga a ejecutarlas en algún orden, que es la propiedad de
aislamiento.
\end{solucion}
```

La organización de los sistemas de archivos está en \cite{stallings2018} y
\cite{carretero2021}, y su manejo desde programa en \cite{johnson2005}.
