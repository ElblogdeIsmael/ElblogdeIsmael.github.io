# Metaheurísticas basadas en adaptación social

Tema 6 del programa. Poblaciones de agentes simples que no se recombinan, sino que
se coordinan: cada uno decide con información local y el comportamiento útil
aparece en el conjunto.

## Introducción a la adaptación social

Las técnicas del tema 3 mezclan soluciones con un operador de cruce. Las de este
tema no: los agentes **se influyen** unos a otros, y la solución emerge de esa
influencia.

| | Evolutivas | Adaptación social |
| --- | --- | --- |
| Unidad | cromosoma | agente |
| Cómo se comunica la información | cruce entre padres | señal compartida o memoria colectiva |
| Qué se hereda | material genético | nada; el agente persiste |
| Fuente de la mejora | selección | cooperación |

La **inteligencia de enjambre** es el nombre general del fenómeno: agentes con
reglas triviales y visión local producen un comportamiento colectivo que ninguno
de ellos podría producir solo. Las dos realizaciones del programa son las colonias
de hormigas y las nubes de partículas.

## Cooperación de agentes en problemas de optimización

Los agentes se coordinan de dos maneras, y la distinción explica las dos familias:

- **Comunicación indirecta**, a través del entorno. Un agente modifica el medio y
  otro lee esa modificación más tarde. Se llama **estigmergia**, y es el mecanismo
  de las hormigas: la feromona depositada en el suelo.
- **Comunicación directa**, entre agentes. Cada uno conoce la posición de los
  demás o de los mejores. Es el mecanismo de las nubes de partículas.

La indirecta tiene una propiedad que la hace apta para problemas combinatorios: la
información persiste en el medio y se **acumula**, así que varias generaciones de
agentes contribuyen al mismo rastro. La directa es más rápida y adecuada para
espacios continuos, donde «acercarse a otro agente» tiene sentido geométrico.

## Algoritmos basados en colonias de hormigas

Las hormigas encuentran el camino más corto entre el nido y la comida sin verlo
entero. Cada una deja feromona al pasar; los caminos cortos se recorren antes, así
que acumulan feromona más deprisa, y eso atrae a más hormigas. El rastro se refuerza
solo.

Trasladado a un algoritmo, para el viajante:

```
funcion aco():
    inicializar tau[i][j] = tau0
    mientras no parada:
        para cada hormiga k:
            construir un recorrido eligiendo cada ciudad segun tau y eta
        evaporar: tau[i][j] = (1 - rho) * tau[i][j]
        depositar: tau[i][j] += suma de las contribuciones de las hormigas
    devolver el mejor recorrido encontrado
```

### La regla de transición

Una hormiga situada en la ciudad $i$ elige la siguiente $j$ entre las no visitadas
con probabilidad

$$p_{ij} = \frac{\tau_{ij}^{\alpha}\,\eta_{ij}^{\beta}}
                {\sum_{l \in \text{no visitadas}} \tau_{il}^{\alpha}\,\eta_{il}^{\beta}}$$

donde $\tau_{ij}$ es la feromona en la arista y $\eta_{ij} = 1/d_{ij}$ es la
**información heurística**: el inverso de la distancia, que favorece a las ciudades
cercanas.

| Parámetro | Qué pondera | Si vale 0 |
| --- | --- | --- |
| $\alpha$ | la feromona: la experiencia acumulada | el algoritmo es un voraz aleatorizado sin memoria |
| $\beta$ | la heurística: el coste inmediato | se ignora la distancia y la convergencia es muy lenta |

Valores de referencia: $\alpha = 1$ y $\beta \in [2, 5]$. La heurística pesa más que
la feromona al principio, cuando el rastro aún no dice nada.

### Evaporación

$$\tau_{ij} \leftarrow (1 - \rho)\,\tau_{ij} + \Delta\tau_{ij}$$

La evaporación es el mecanismo de olvido, y sin ella el algoritmo no funciona: los
primeros recorridos, que son malos, acumularían feromona indefinidamente y la
colonia quedaría fijada en ellos. $\rho$ controla la velocidad del olvido; valores
entre $0{,}01$ y $0{,}1$ son los habituales.

El depósito $\Delta\tau_{ij}$ es proporcional a la calidad del recorrido que usó esa
arista, típicamente $Q / L_k$ con $L_k$ la longitud del recorrido de la hormiga $k$.

### Variantes

| Variante | Qué cambia | Efecto |
| --- | --- | --- |
| Sistema de hormigas (AS) | todas las hormigas depositan | el original; converge despacio |
| Sistema de colonias (ACS) | solo la mejor deposita, más evaporación local | mucho más rápido |
| MAX-MIN | la feromona se acota entre $\tau_{\min}$ y $\tau_{\max}$ | evita el estancamiento |

MAX-MIN resuelve el fallo característico de la familia: cuando una arista acumula
tanta feromona que su probabilidad se acerca a uno, todas las hormigas construyen
el mismo recorrido y el algoritmo deja de explorar. Acotar por arriba lo impide, y
acotar por abajo garantiza que ninguna arista queda descartada del todo.

El campo natural de aplicación son los problemas donde la solución **se construye
por partes** y hay una noción de arista o componente: viajante, enrutamiento de
vehículos, asignación cuadrática, planificación de tareas.

## Algoritmos basados en nubes de partículas

*Particle Swarm Optimization*. Está pensado para espacios continuos y su analogía
es el vuelo coordinado de una bandada: cada individuo ajusta su rumbo según a dónde
va él y a dónde va el grupo.

Cada partícula tiene una posición $x_i$ y una velocidad $v_i$, y recuerda dos cosas:
su mejor posición histórica $p_i$ y la mejor del enjambre $g$.

$$v_i \leftarrow w\,v_i + c_1 r_1 (p_i - x_i) + c_2 r_2 (g - x_i)$$
$$x_i \leftarrow x_i + v_i$$

con $r_1, r_2$ aleatorios uniformes en $[0,1]$. Los tres sumandos son tres fuerzas:

| Término | Nombre | Qué hace |
| --- | --- | --- |
| $w\,v_i$ | inercia | mantiene el rumbo; controla la exploración |
| $c_1 r_1 (p_i - x_i)$ | componente cognitiva | tira hacia lo mejor que ha visto la partícula |
| $c_2 r_2 (g - x_i)$ | componente social | tira hacia lo mejor que ha visto el enjambre |

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth, font=\small, scale=1.25]
% Los tres sumandos se dibujan punta con cola, que es la regla del poligono:
% asi la flecha gruesa de x_i al final es exactamente su suma, y cada etiqueta
% cae sobre su propio tramo sin pisar a las demas.
\coordinate (x)  at (0,0);
\coordinate (a)  at (1.7,-0.10);      % tras la inercia
\coordinate (b)  at (2.75,0.70);      % tras la componente cognitiva
\coordinate (c)  at (3.65,0.16);      % tras la componente social
\coordinate (p)  at (4.2,3.2);
\coordinate (g)  at (5.0,-3.0);

\draw[gray!55, densely dotted] (x) -- (p);
\draw[gray!55, densely dotted] (x) -- (g);

\draw[->, thick]           (x) -- (a) node[midway, below]       {$w\,v_i$};
\draw[->, thick, dashed]   (a) -- (b) node[midway, above left=-3pt] {cognitiva};
\draw[->, thick, dash dot] (b) -- (c) node[midway, above right=-3pt] {social};
\draw[->, ultra thick]     (x) -- (c);
\node[below right=1pt and -4pt, font=\small] at (2.6,-0.30) {$v_i$ nueva};

\fill (x) circle (2.1pt) node[left]  {$x_i$};
\fill (p) circle (2.1pt) node[right] {$p_i$};
\fill (g) circle (2.1pt) node[right] {$g$};
\end{tikzpicture}
\end{center}
```

### Ajuste

| Parámetro | Valor habitual | Qué pasa si crece |
| --- | --- | --- |
| $w$ | $0{,}9 \to 0{,}4$, decreciente | la nube se dispersa y no converge |
| $c_1$ | $2$ | cada partícula va a lo suyo; poca cooperación |
| $c_2$ | $2$ | todas caen sobre $g$ y la nube colapsa |
| $v_{\max}$ | una fracción del rango | sin límite, las partículas se salen del espacio |

La inercia decreciente es el equivalente al esquema de enfriamiento del tema 5:
exploración al principio, explotación al final. Sin límite de velocidad la nube
diverge, y sin el límite ni la inercia decreciente el algoritmo no converge en
absoluto.

La **topología del vecindario** decide cuánta información circula. Con la topología
global —todas las partículas ven a la mejor del enjambre— la convergencia es rápida
y el riesgo de caer en un óptimo local, alto. Con topologías locales, donde cada
partícula solo ve a unas pocas vecinas, la información se propaga despacio y la
diversidad dura más.

## Aplicación a problemas

| Problema | Técnica | Por qué |
| --- | --- | --- |
| Viajante, enrutamiento | hormigas | la solución se construye arista a arista |
| Asignación cuadrática | hormigas | hay componentes discretas con coste asociado |
| Ajuste de parámetros continuos | nubes de partículas | el espacio es $\mathbb{R}^n$ y la geometría tiene sentido |
| Entrenamiento de redes neuronales | nubes de partículas | igual, y muchas dimensiones |
| Planificación de tareas | hormigas o meméticos | según sea de orden o de asignación |

Aplicar nubes de partículas a un problema combinatorio exige redefinir qué
significan la posición, la velocidad y la suma, y las adaptaciones que se han
propuesto rara vez baten a las hormigas o a un memético en su terreno.

El tratamiento canónico de las colonias de hormigas está en \cite{dorigo2004}; las
nubes de partículas y el resto de técnicas bioinspiradas, en \cite{du2016} y
\cite{chopard2018}.
