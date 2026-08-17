# Los factores de contingencia

Tema 8 del programa. Los parámetros de diseño no se eligen libremente: dependen de
la situación en la que la organización está.

## La hipótesis de la contingencia

No existe una estructura mejor que las demás. Existe la que **encaja** con la
situación, y ese encaje tiene dos condiciones:

- **Congruencia**: cada parámetro de diseño debe ajustarse a los factores de
  contingencia.
- **Coherencia**: los parámetros deben ajustarse **entre sí**, formando un conjunto
  consistente.

La segunda es la más importante y la que menos se respeta. Una organización con
procedimientos detallados y a la vez con profesionales que deciden por su cuenta no
está a medio camino de nada: está en conflicto permanente. **Es preferible una
configuración pura que un promedio de dos.**

Los factores son cuatro: edad y tamaño, sistema técnico, entorno y poder.

## Edad y tamaño

Cinco regularidades, contrastadas de forma amplia:

| Regularidad | Por qué |
| --- | --- |
| Cuanto más antigua, más formalizado el comportamiento | lo que se repite acaba escrito |
| Cuanto mayor, más formalizado | se ven más casos repetidos y compensa normalizar |
| Cuanto mayor, más elaborada la estructura | más especialización, más unidades, más niveles |
| Cuanto mayor, mayores las unidades | el trabajo normalizado permite ámbitos amplios |
| La estructura refleja la época en que nació el sector | los patrones del momento fundacional persisten |

La cuarta parece contradecir a la tercera y no lo hace: crecer añade niveles **y**
ensancha cada uno, porque el trabajo normalizado necesita menos supervisión por
persona.

La quinta explica que empresas de sectores nacidos en épocas distintas tengan
estructuras distintas aunque hoy tengan el mismo tamaño y el mismo entorno.

### Las etapas del crecimiento

```{=latex}
\begin{center}
% El hueco entre cajas tiene que dar cabida al rotulo de la flecha: con
% 7 mm, «diversifica» y «entorno dinamico» se imprimian encima de las cajas.
\begin{tikzpicture}[font=\footnotesize, >=stealth, node distance=15mm,
  caja/.style={draw, minimum height=0.95cm, minimum width=1.95cm, align=center}]
\node[caja] (a) {estructura\\simple};
\node[caja, right=of a] (b) {burocracia\\maquinal};
\node[caja, right=of b] (c) {forma\\divisional};
\node[caja, right=of c] (d) {adhocracia};
\draw[->, thick] (a) -- node[above, font=\scriptsize] {crece} (b);
\draw[->, thick] (b) -- node[above, font=\scriptsize] {diversifica} (c);
\draw[->, thick] (c) -- node[above, font=\scriptsize, align=center] {entorno\\dinámico} (d);
\end{tikzpicture}
\end{center}
```

No es una ley: hay organizaciones que se quedan en la primera etapa toda su vida, y
otras que nacen ya en la última. Es la trayectoria más frecuente, y sirve para
reconocer en qué transición está una organización con problemas: muchas crisis de
crecimiento son un paso pendiente de esta secuencia.

## Sistema técnico

Los instrumentos con los que el núcleo de operaciones hace su trabajo. Dos
dimensiones:

- **Regulación**: cuánto controla el sistema técnico el trabajo del operario. Alta
  cuando la máquina impone el ritmo y el método.
- **Sofisticación**: cuánto conocimiento hace falta para entenderlo.

Tres consecuencias:

| Regularidad | Consecuencia |
| --- | --- |
| Cuanto más regulador, más formalizado y burocrático el núcleo | la máquina ya normaliza el trabajo |
| Cuanto más sofisticado, más staff de apoyo y más descentralización horizontal | hacen falta especialistas para diseñarlo y mantenerlo |
| La automatización convierte una burocracia en orgánica | desaparece el trabajo repetitivo que había que burocratizar |

La tercera merece atención porque parece contraintuitiva. Al automatizar del todo,
los operarios que hacían trabajo repetitivo son sustituidos por especialistas que
mantienen y ajustan las máquinas. Y ese trabajo no es repetitivo: no se puede
formalizar, se coordina hablando, y la organización pasa de burocrática a orgánica
sin que nadie lo haya decidido.

## Entorno

Se describe con cuatro dimensiones, y cada una empuja en una dirección:

| Dimensión | Extremos | Qué produce |
| --- | --- | --- |
| Estabilidad | estable / dinámico | dinámico $\to$ estructura orgánica |
| Complejidad | simple / complejo | complejo $\to$ descentralización |
| Diversidad de mercados | integrado / diversificado | diversificado $\to$ agrupación por mercado |
| Hostilidad | favorable / hostil | hostil $\to$ centralización temporal |

Las cuatro hipótesis, cada una por separado:

1. **Un entorno dinámico exige una estructura orgánica.** Lo que cambia no se puede
   normalizar por adelantado. Y «dinámico» no es «incierto de forma previsible»: una
   demanda que fluctúa según una pauta conocida se planifica; lo que exige estructura
   orgánica es lo que no se puede prever.
2. **Un entorno complejo exige descentralizar.** Complejo significa que hace falta
   mucho conocimiento para entenderlo, y ese conocimiento no cabe en una cabeza.
3. **Un entorno diversificado empuja a agrupar por mercado**, si hay economías de
   escala que lo permitan. Es el origen de la forma divisional.
4. **Un entorno hostil provoca centralización transitoria.** Ante una amenaza grave,
   la organización concentra el poder para responder rápido y coordinada. Es una
   respuesta temporal, y sostenerla cuando la amenaza pasa es un error frecuente.

Cruzando las dos primeras dimensiones salen cuatro casillas, y en cada una una
configuración distinta:

| | Entorno estable | Entorno dinámico |
| --- | --- | --- |
| **Entorno simple** | burocracia maquinal | estructura simple |
| **Entorno complejo** | burocracia profesional | adhocracia |

Es la tabla más útil del tema: dos preguntas sobre el entorno y sale la
configuración que le corresponde.

## Poder

El cuarto factor no es técnico: son los intereses de quien tiene influencia sobre la
organización.

| Regularidad | Efecto |
| --- | --- |
| Un control externo fuerte centraliza y formaliza | hay que responder ante alguien, y eso exige rastro escrito |
| El ápice tiende a centralizar | el poder propio es un interés propio |
| La moda influye más de lo que se admite | se adoptan estructuras porque están de moda, no porque encajen |

La primera explica por qué una filial de un grupo o un organismo público están más
burocratizados que una empresa comparable independiente: no es ineficiencia, es que
tienen que justificar sus decisiones ante un principal externo, y eso pide
procedimiento y registro.

La tercera es un aviso profesional. Las estructuras se copian: matricial, por
proyectos, plana, en red. Adoptar una configuración porque funciona en otro sector
es exactamente ignorar la hipótesis de la contingencia, y produce el peor resultado
posible, que es una estructura incoherente consigo misma.

## Cómo se usa este tema

Ante un caso concreto, el análisis sigue este orden:

1. **Describir los factores**: edad, tamaño, sistema técnico, las cuatro dimensiones
   del entorno y de quién es el poder.
2. **Deducir qué configuración corresponde**, con la tabla de arriba.
3. **Describir la estructura real**: los parámetros de los temas 4 a 7.
4. **Comparar** y localizar las incongruencias, que son de dos clases: con el
   entorno, y entre parámetros.
5. **Proponer** los cambios que restauren la coherencia.

El paso 4 es el que da el diagnóstico, y las incongruencias del segundo tipo suelen
ser más graves: una organización mal ajustada a su entorno rinde por debajo de lo
posible, y una incoherente consigo misma dedica su energía a resolver conflictos
internos.

El tratamiento de los factores de contingencia sigue a \cite{mintzberg2009} y
\cite{sanchez2025}; los enfoques contingentes de la teoría organizativa están en
\cite{daft2005}, \cite{hodge1998} y \cite{navio2022}.
