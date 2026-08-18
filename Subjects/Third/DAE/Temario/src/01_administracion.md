# Administración de empresas y su evolución

Tema 1 del programa. Qué hace un administrador, de dónde vienen las ideas que hoy
se dan por sentadas y por qué ninguna de ellas sirve en todos los casos.

## Qué es administrar

Administrar es conseguir que un grupo de personas logre unos objetivos usando
recursos escasos. La definición clásica lo descompone en cuatro funciones que se
solapan en el tiempo, aunque se expliquen en orden:

| Función | Qué decide |
| --- | --- |
| Planificación | qué objetivos se persiguen y con qué medios |
| Organización | quién hace cada cosa y de quién depende |
| Dirección | cómo se consigue que la gente quiera hacerla |
| Control | si lo que sale coincide con lo que se planificó |

Las cuatro son el esqueleto de esta asignatura: los temas siguientes desarrollan
cada una y los factores humanos que las atraviesan.

La **eficacia** es alcanzar el objetivo; la **eficiencia**, alcanzarlo consumiendo
lo menos posible. Una organización puede ser eficaz y derrochadora, o muy
eficiente haciendo algo que no hacía falta. El trabajo del administrador es que
coincidan las dos.

## Los niveles directivos

No todos los directivos hacen lo mismo. La pirámide habitual distingue tres
niveles, y lo interesante es cómo cambia la mezcla de trabajo al subir.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\small]
  % La piramide, de arriba abajo
  \fill[black!12] (0,3) -- (-1.1,1.8) -- (1.1,1.8) -- cycle;
  \fill[black!7]  (-1.1,1.8) -- (-2.4,0.4) -- (2.4,0.4) -- (1.1,1.8) -- cycle;
  \fill[black!3]  (-2.4,0.4) -- (-3.6,-0.9) -- (3.6,-0.9) -- (2.4,0.4) -- cycle;
  \draw (0,3) -- (-3.6,-0.9) -- (3.6,-0.9) -- cycle;
  \draw (-1.1,1.8) -- (1.1,1.8);
  \draw (-2.4,0.4) -- (2.4,0.4);

  \node at (0,2.3) {\footnotesize Alta dirección};
  \node at (0,1.1) {\footnotesize Dirección intermedia};
  \node at (0,-0.3) {\footnotesize Dirección de primera línea};

  % Que crece y que decrece al subir
  \draw[-{Latex[length=2mm]}] (4.3,-0.9) -- (4.3,3)
        node[midway, right=1mm, align=left]
        {\footnotesize horizonte temporal\\[-2pt]\footnotesize decisiones no programadas\\[-2pt]\footnotesize habilidades conceptuales};
  \draw[-{Latex[length=2mm]}] (-4.3,3) -- (-4.3,-0.9)
        node[midway, left=1mm, align=right]
        {\footnotesize número de directivos\\[-2pt]\footnotesize habilidades técnicas\\[-2pt]\footnotesize contacto con la operación};
\end{tikzpicture}
\end{center}
```

Las **habilidades técnicas** —saber hacer el trabajo— pesan mucho abajo y poco
arriba. Las **conceptuales** —ver la organización entera y su entorno— al revés.
Las **humanas** son las únicas que pesan igual en los tres niveles, y ese es el
motivo de que la mitad de esta asignatura hable de personas y no de estructuras.

De ahí sale también el error más común al ascender: el mejor técnico del equipo
pasa a jefe y sigue haciendo el trabajo técnico, que es lo que sabe hacer, en vez
del que su puesto nuevo pide.

## Cómo llegamos hasta aquí

La teoría de la administración no avanzó sustituyendo una idea por otra, sino
acumulando enfoques que responden a preguntas distintas.

### La escuela clásica

**Taylor y la organización científica del trabajo** (1911) parten de una idea
sencilla: si se estudia una tarea, se puede encontrar la forma óptima de hacerla,
enseñarla y pagar por rendimiento. Elevó la productividad de forma espectacular y
dejó dos herencias incómodas: el trabajo troceado hasta hacerlo insignificante, y
la suposición de que a la gente solo la mueve el dinero.

**Fayol** miró desde arriba en vez de desde el puesto, y fue el primero en
escribir qué hace un directivo. De sus catorce principios, los que siguen
apareciendo en el resto del temario son la **unidad de mando** —cada persona,
un solo jefe—, la **cadena escalar** y el **alcance de control**.

**Weber** describió la **burocracia** como el tipo ideal de organización
racional: reglas escritas, jerarquía clara, competencias definidas, selección por
mérito y separación entre el cargo y la persona. Hoy la palabra tiene mala prensa,
pero el modelo era la alternativa a decidir por parentesco o por capricho.

### Las relaciones humanas

Los experimentos de **Hawthorne** (1924-1932) buscaban el efecto de la
iluminación en la productividad y encontraron otra cosa: la productividad subía
tanto al mejorar la luz como al empeorarla. Lo que la movía era la atención
recibida y las normas del grupo informal, no las condiciones físicas.

De ahí sale toda la corriente que estudia motivación, liderazgo y grupos —temas
6, 7 y 8 de este programa— y la constatación de que **la organización informal
existe y decide**, se la reconozca o no.

### Los enfoques modernos

| Enfoque | Idea central |
| --- | --- |
| Cuantitativo | modelizar la decisión y optimizarla: colas, inventarios, programación lineal |
| De sistemas | la organización es un sistema abierto que intercambia con su entorno, y cambiar una parte afecta a las demás |
| De contingencia | no hay una forma mejor de organizar; depende del tamaño, la tecnología, el entorno y la estrategia |

El **enfoque de contingencia** es la conclusión práctica del tema, y conviene
tenerla presente al leer el resto: cuando un tema proponga «el estilo de liderazgo
adecuado» o «la estructura correcta», la respuesta completa siempre incluye *para
qué situación*.

## El entorno

Un sistema abierto depende de lo que le rodea. Se distingue el **entorno
específico** —clientes, proveedores, competidores, reguladores— del **general**,
que se analiza con las dimensiones habituales: política, económica, social,
tecnológica, ecológica y legal.

Las dos características que más condicionan son la **incertidumbre** y la
**complejidad**. Un entorno estable y simple admite reglas y jerarquía; uno
turbulento pide estructuras flexibles y decisión descentralizada. Es otra vez la
contingencia, y explica por qué la burocracia de Weber funciona en una
administración pública y ahoga a una empresa de software.
