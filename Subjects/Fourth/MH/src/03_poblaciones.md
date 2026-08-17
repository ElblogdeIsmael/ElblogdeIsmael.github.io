# Metaheurísticas basadas en poblaciones

Tema 3 del programa. Mantener muchas soluciones a la vez, combinarlas entre sí y
dejar que la selección haga el resto.

## Concepto y elementos

Una metaheurística basada en poblaciones sustituye la solución única por un
conjunto $P = \{s_1, \dots, s_\mu\}$ que evoluciona en paralelo. El esquema general:

```
funcion evolutivo():
    P = poblacion_inicial()
    evaluar(P)
    mientras no parada:
        Padres = seleccionar(P)
        Hijos  = recombinar(Padres)
        Hijos  = mutar(Hijos)
        evaluar(Hijos)
        P = reemplazar(P, Hijos)
    devolver mejor(P)
```

Cinco piezas, y cada una es una decisión de diseño:

| Pieza | Qué controla |
| --- | --- |
| Población inicial | de dónde se parte y cuánta diversidad hay al empezar |
| Selección | qué soluciones se reproducen: presión selectiva |
| Recombinación (cruce) | cómo se mezcla la información de dos padres |
| Mutación | cómo se introduce variación nueva |
| Reemplazamiento | qué población sobrevive: presión selectiva otra vez |

La **diversidad de la población** es el recurso que hay que administrar. Al
principio sobra y al final falta, y cuando se agota la población colapsa: todos los
individuos son iguales, el cruce deja de producir nada nuevo y el algoritmo se
convierte en una búsqueda local cara. Eso se llama **convergencia prematura**, y es
el fallo más común de esta familia.

## Algoritmos genéticos

El caso canónico. Codifican la solución como un **cromosoma** y aplican selección,
cruce y mutación.

### Representación

| Codificación | Cuándo | Ejemplo |
| --- | --- | --- |
| Binaria | subconjuntos, decisiones sí/no | mochila |
| Entera | asignaciones a categorías | coloreado de grafos |
| Permutación | orden o secuencia | viajante, planificación |
| Real | parámetros continuos | ajuste de modelos |

La binaria fue la original y arrastra un problema conocido: con codificación
binaria estándar, números contiguos pueden diferir en muchos bits —de 7 (`0111`) a
8 (`1000`) cambian los cuatro—, así que una mutación pequeña en el cromosoma es un
salto enorme en el espacio real. El **código Gray** lo corrige haciendo que
enteros consecutivos difieran en un solo bit.

### Selección

Decide qué individuos se reproducen. Su parámetro real es la **presión selectiva**:
cuánto favorece a los mejores.

| Operador | Cómo | Presión |
| --- | --- | --- |
| Ruleta | probabilidad proporcional a la aptitud | depende de la escala de $f$ |
| Torneo de tamaño $k$ | se eligen $k$ al azar y gana el mejor | crece con $k$ |
| Por ranking | probabilidad según la posición, no el valor | estable |

La **ruleta** tiene dos defectos que la han retirado de la práctica: si un
individuo tiene una aptitud muy superior, acapara la reproducción y la población
colapsa en pocas generaciones; y cuando los valores se igualan al final, la
selección se vuelve casi aleatoria justo cuando hace falta discriminar. Además no
se puede usar directamente en minimización ni con valores negativos.

El **torneo** no tiene ninguno de esos problemas: solo compara, así que le da igual
la escala de $f$ y funciona igual en minimización. $k = 2$ es la elección habitual;
$k = 3$ o $4$ acelera la convergencia y arriesga perder diversidad.

### Cruce

Combina dos padres en uno o dos hijos. El operador tiene que ser **coherente con la
representación**, y es donde más fallos de diseño se cometen.

Para representación binaria:

```
Padre 1:  1 0 1 | 1 0 0 1
Padre 2:  0 1 1 | 0 1 1 0
          ------+--------
Hijo 1:   1 0 1 | 0 1 1 0
Hijo 2:   0 1 1 | 1 0 0 1
```

Es el cruce en un punto. El de dos puntos intercambia un tramo central, y el
**uniforme** decide bit a bit con probabilidad $1/2$: este último es el que más
mezcla y el que menos respeta los bloques contiguos.

Para permutaciones, el cruce en un punto **no vale**: produce recorridos con
ciudades repetidas y otras ausentes. Hacen falta operadores específicos:

| Operador | Qué conserva |
| --- | --- |
| PMX, cruce parcialmente mapeado | las posiciones absolutas de un tramo |
| OX, cruce por orden | el orden relativo de las ciudades |
| Cruce por ciclos | las posiciones que forman ciclos entre los padres |

Cuál conviene depende de dónde esté la información del problema. En el viajante lo
que importa son las **aristas**, no las posiciones, así que OX funciona mejor que
PMX; en problemas de planificación, donde importa la posición absoluta en el
calendario, es al revés.

Para codificación real, el **cruce BLX-$\alpha$** genera cada gen del hijo en el
intervalo

$$[\,c_{\min} - \alpha I,\; c_{\max} + \alpha I\,], \qquad I = c_{\max} - c_{\min}$$

con $c_{\min}$ y $c_{\max}$ los valores de los dos padres. Con $\alpha = 0$ el hijo
queda entre los padres y la población se contrae; con $\alpha \approx 0{,}5$ puede
salirse del intervalo, y ese margen es lo que mantiene la diversidad viva.

### Mutación

Introduce variación que el cruce no puede generar. Es lo que impide que un valor
perdido en toda la población quede perdido para siempre.

| Representación | Mutación | Probabilidad habitual |
| --- | --- | --- |
| Binaria | invertir un bit | $1/n$ por gen |
| Permutación | intercambiar dos posiciones, o invertir un tramo | $0{,}1$ por individuo |
| Real | sumar ruido gaussiano $\mathcal{N}(0,\sigma)$ | $1/n$ por gen |

$1/n$ por gen significa que se cambia **un gen por individuo en media**, que es el
valor por defecto razonable. Subirlo mucho convierte el algoritmo en una búsqueda
aleatoria; bajarlo a cero lo deja sin salida cuando la población converge.

### Reemplazamiento

Decide la población siguiente. Dos esquemas, y la diferencia es grande:

| Esquema | Cómo | Efecto |
| --- | --- | --- |
| **Generacional** | los hijos sustituyen a toda la población | más exploración, más lento |
| **Estacionario** | se generan dos hijos y compiten con los peores | más explotación, converge antes |

En el generacional se pierde al mejor individuo si sus hijos salen peores. El
**elitismo** lo evita conservando de forma explícita al mejor de cada generación, y
es prácticamente obligatorio: sin él, la mejor solución encontrada puede
desaparecer y el algoritmo empeora con el tiempo.

## Programación genética

La misma maquinaria con una representación distinta: el individuo es un **árbol de
expresión**, no un vector.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  level distance=11mm,
  level 1/.style={sibling distance=34mm},
  level 2/.style={sibling distance=17mm},
  every node/.style={draw, circle, inner sep=2.5pt, font=\small}
]
\node {$+$}
  child { node {$\times$}
    child { node {$x$} }
    child { node {$x$} } }
  child { node {$-$}
    child { node {$y$} }
    child { node {$3$} } };
\end{tikzpicture}
\end{center}
```

El árbol de la figura representa $x \times x + (y - 3)$. Los nodos internos salen
del conjunto de **funciones** —operadores aritméticos, condicionales— y las hojas
del de **terminales**: variables y constantes.

El cruce intercambia subárboles entre dos padres, y la mutación sustituye un
subárbol por otro generado al azar. Su problema característico es el **crecimiento
descontrolado**: los árboles se hinchan con ramas que no cambian la salida, la
evaluación se vuelve lenta y el resultado deja de ser legible. Se combate limitando
la profundidad o penalizando el tamaño en la función objetivo.

Se usa cuando lo que se busca **es** una expresión: regresión simbólica,
descubrimiento de fórmulas, control. Con longitud fija basta un algoritmo genético.

## Evolución diferencial

Para optimización continua, y en ese terreno es de lo mejor que hay. Su operador
sustituye el cruce clásico por una **combinación de diferencias entre individuos**.

Para cada individuo $x_i$ de la población se construye un vector mutado tomando
otros tres al azar:

$$v_i = x_{r_1} + F \cdot (x_{r_2} - x_{r_3}), \qquad F \in [0, 2]$$

y luego se cruza con $x_i$ gen a gen con probabilidad $CR$. El hijo sustituye al
padre solo si es mejor.

Lo que hace especial al esquema es que **el tamaño del paso lo fija la propia
población**. Al principio los individuos están dispersos, las diferencias
$x_{r_2} - x_{r_3}$ son grandes y los saltos también; según converge, las
diferencias se encogen y el algoritmo pasa solo a refinar. No hay que programar
ningún calendario: la adaptación es automática, y es la razón de su buen
comportamiento sin ajuste fino.

| Parámetro | Rango habitual | Qué controla |
| --- | ---: | --- |
| $F$ | $0{,}5$–$0{,}9$ | amplitud del salto |
| $CR$ | $0{,}1$–$0{,}9$ | cuántos genes se toman del mutado |
| $\mu$ | $10n$ | tamaño de población, con $n$ dimensiones |

$CR$ alto conviene cuando las variables interaccionan; $CR$ bajo, cuando el
problema es casi separable y compensa mover pocas coordenadas a la vez.

## Estrategias de evolución

La otra familia clásica de optimización continua. Su rasgo propio es que **la
mutación se autoadapta**: el individuo lleva consigo la desviación típica $\sigma$
con la que se muta, y esa $\sigma$ también evoluciona.

La notación $(\mu, \lambda)$ indica que $\mu$ padres generan $\lambda$ hijos y la
población siguiente sale **solo de los hijos**; $(\mu + \lambda)$ indica que
compiten padres e hijos, lo que la hace elitista. La primera puede empeorar de una
generación a la siguiente, y eso le permite escapar de óptimos locales.

La versión moderna, CMA-ES, estima además la matriz de covarianzas de la
distribución de mutación, con lo que aprende la forma del valle en el que está y
alinea los saltos con él. Es la referencia contra la que se comparan los algoritmos
de optimización continua.

## Aplicación a problemas

Fijar la representación y los operadores es todo el trabajo de diseño:

| Problema | Representación | Cruce | Mutación |
| --- | --- | --- | --- |
| Mochila | binaria, $n$ objetos | uniforme | invertir un bit |
| Viajante | permutación de $n$ ciudades | OX | invertir un tramo |
| Ajuste de parámetros | vector real | BLX-$\alpha$ | gaussiana |
| Coloreado de grafos | entera, un color por nodo | uniforme | cambiar el color de un nodo |
| Selección de características | binaria, un bit por atributo | uniforme | invertir un bit |

En la mochila el cruce uniforme produce soluciones que exceden la capacidad, así
que hace falta reparar: quitar objetos por orden creciente de valor por unidad de
peso hasta que quepa. Es la estrategia de reparación del tema 2, y es preferible a
penalizar porque devuelve siempre soluciones admisibles.

El tratamiento completo de los algoritmos evolutivos está en \cite{eiben2015}, y su
comparación con el resto de familias en \cite{talbi2009} y \cite{du2016}.
