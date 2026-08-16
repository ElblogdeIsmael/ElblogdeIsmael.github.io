# Algoritmos meméticos

Tema 4 del programa. Poner una búsqueda local dentro de un algoritmo de población,
que es la combinación que mejor funciona en la mayoría de los problemas
combinatorios.

## Hibridación de metaheurísticas

El tema 2 dejó la comparación planteada: las técnicas de trayectoria intensifican
bien y se atascan; las de población diversifican bien y refinan mal. Hibridar es
juntar las dos y quedarse con lo bueno de cada una.

Talbi clasifica las hibridaciones por dónde se produce la unión:

| Tipo | Cómo | Ejemplo |
| --- | --- | --- |
| De bajo nivel, **integrativa** | una técnica se convierte en operador de la otra | algoritmo memético |
| De alto nivel, **secuencial** | una se ejecuta después de la otra | genético y luego búsqueda local sobre el resultado |
| De alto nivel, **paralela** | varias corren a la vez e intercambian soluciones | modelo de islas |
| Con métodos exactos | la metaheurística usa un solucionador exacto en un subproblema | matheurísticas |

La secuencial es la barata y la que menos aporta: una pasada de búsqueda local al
final mejora el resultado un poco, pero no cambia cómo ha buscado el algoritmo. La
integrativa sí, porque **cambia el espacio en el que la población evoluciona**.

## Algoritmos meméticos

Un algoritmo memético es un algoritmo de población en el que cada individuo, o
algunos, ejecutan una búsqueda local antes de entrar en la población.

```
funcion memetico():
    P = poblacion_inicial()
    P = optimizar_localmente(P)
    mientras no parada:
        Padres = seleccionar(P)
        Hijos  = recombinar(Padres)
        Hijos  = mutar(Hijos)
        Hijos  = optimizar_localmente(Hijos)     <- la unica linea nueva
        P = reemplazar(P, Hijos)
    devolver mejor(P)
```

El nombre viene de *mema*: la unidad de información cultural que, a diferencia del
gen, el individuo puede mejorar durante su vida antes de transmitirla. Es una
analogía, no un argumento; lo que sostiene a estos algoritmos son los resultados
experimentales.

### Qué cambia de verdad

La consecuencia importante no es que las soluciones sean mejores. Es que **la
población deja de vivir en $S$ y pasa a vivir en el conjunto de los óptimos locales**.

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=11cm, height=5cm,
  axis lines=middle,
  xmin=0, xmax=10, ymin=-2.9, ymax=3.9,
  xtick=\empty, ytick=\empty,
  xlabel={Espacio de búsqueda},
  ylabel={$f(s)$},
  xlabel style={at={(axis description cs:0.5,-0.12)}},
  samples=200, domain=0.2:9.8
]
\addplot[thick] {sin(deg(x))*1.5 + sin(deg(2.7*x))*0.7 + 0.09*(x-5)^2 - 0.4};
\addplot[only marks, mark=*, mark size=1.9pt] coordinates {
  (1.987,1.233) (4.239,-2.313) (6.015,-1.060) (8.838,1.088)
};
\end{axis}
\end{tikzpicture}
\end{center}
```

Los cuatro puntos marcados son los óptimos locales del paisaje. Tras la búsqueda
local, todo individuo cae en uno de ellos, y el algoritmo genético trabaja sobre
esos cuatro estados en vez de sobre el continuo. El espacio efectivo se reduce
muchísimo, y esa reducción es la ganancia real.

De ahí sale también su riesgo característico: si la búsqueda local es agresiva,
todos los individuos caen en el mismo óptimo y la población pierde la diversidad
en las primeras generaciones. **El memético converge antes, y por eso hay que
vigilarlo más.**

## Las decisiones de diseño

Cuatro preguntas, y las respuestas cambian mucho el resultado.

### A cuántos individuos se aplica

| Estrategia | Cómo | Comentario |
| --- | --- | --- |
| A todos | cada hijo se optimiza | máxima explotación, coste altísimo |
| A una fracción $p_{LS}$ | se elige al azar con probabilidad $p_{LS}$ | el compromiso habitual, con $p_{LS} \approx 0{,}1$ |
| Solo a los mejores | se ordena y se optimiza el 10 % superior | intensifica donde ya hay calidad |
| Solo al mejor | una vez por generación | apenas cambia el comportamiento |

Aplicarla a todos es lo primero que se prueba y casi nunca es lo mejor: el coste
por generación se multiplica por el de la búsqueda local, y con presupuesto fijo de
evaluaciones eso significa muchas menos generaciones.

### Cuánto se optimiza

La búsqueda local puede llevarse hasta el óptimo local o cortarse antes.

- **Completa**: se itera hasta que ningún vecino mejora. Da el máximo refinamiento
  y el máximo coste, y es la que colapsa la diversidad.
- **Truncada**: un número fijo de iteraciones o de evaluaciones. Deja al individuo
  a medio camino, conserva diversidad y suele rendir mejor con presupuesto
  limitado.

### Qué entorno usa

No tiene por qué ser el mismo que usaría una búsqueda local sola. Un entorno
pequeño y barato dentro de un memético suele batir a uno grande, porque el
algoritmo hace muchas más llamadas.

### Cómo se devuelve el resultado

Dos variantes, y la diferencia es conceptual:

| Variante | Qué se guarda en la población |
| --- | --- |
| **Lamarckiana** | la solución optimizada; el cromosoma se reescribe |
| **Baldwiniana** | el cromosoma original, con la aptitud del optimizado |

La lamarckiana propaga la mejora a los descendientes y converge más rápido. La
baldwiniana solo cambia la presión selectiva —premia a los individuos que están
cerca de un buen óptimo— y conserva más diversidad. En la práctica se usa casi
siempre la lamarckiana; la baldwiniana aparece cuando la convergencia prematura es
el problema dominante.

## Control de la diversidad

Como el memético converge deprisa, casi siempre hace falta un mecanismo que sostenga
la diversidad:

| Mecanismo | Cómo |
| --- | --- |
| Reinicio | si la población se estanca, se regenera conservando al mejor |
| Cruce entre distintos | se emparejan individuos alejados entre sí |
| Reemplazo del más parecido | el hijo sustituye al individuo más próximo, si es mejor |
| Nichos | se penaliza a los individuos con muchos vecinos cercanos |

El **reemplazo del más parecido** es el más efectivo y el más barato de programar:
mantiene el tamaño de población y evita que dos copias de la misma solución
convivan. Necesita una medida de distancia entre soluciones, que en representación
binaria es la de Hamming y en permutaciones es el número de posiciones distintas.

## Un caso completo

Un memético para el viajante, con las decisiones tomadas:

| Elemento | Elección | Por qué |
| --- | --- | --- |
| Representación | permutación | cierra las restricciones |
| Selección | torneo binario | inmune a la escala de $f$ |
| Cruce | OX | conserva el orden relativo, que es donde está la información |
| Mutación | invertir un tramo | coherente con el 2-opt |
| Búsqueda local | 2-opt truncado a 100 movimientos | elimina cruces del recorrido |
| $p_{LS}$ | $0{,}1$ | evita que el coste por generación se dispare |
| Reemplazo | estacionario, del más parecido | sostiene la diversidad |

La coherencia entre la mutación y el entorno de la búsqueda local no es un detalle:
si la mutación intercambia dos ciudades y el 2-opt invierte tramos, el 2-opt
deshace la mutación en su primer movimiento y el operador deja de servir para nada.
Es el fallo más habitual al montar un memético, y no lo señala ningún error: el
algoritmo funciona, simplemente rinde como si no tuviera mutación.

El marco de la hibridación y su taxonomía están en \cite{talbi2009}, y el análisis
de los algoritmos meméticos dentro de la computación evolutiva en \cite{eiben2015}
y \cite{du2016}.
