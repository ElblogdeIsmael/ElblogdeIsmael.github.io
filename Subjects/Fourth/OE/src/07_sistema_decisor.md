# Los parámetros de diseño (IV): diseño del sistema decisor

Tema 7 del programa. Dónde se toman las decisiones. Es el último bloque de
parámetros y el que más se malinterpreta, porque «centralizar» no es una escala
sino varias.

## Qué es centralizar

Una estructura está **centralizada** cuando el poder de decisión se concentra en un
punto, normalmente el ápice, y **descentralizada** cuando está repartido.

La razón para centralizar es la coordinación: quien decide todo lo decide de forma
coherente. Y las razones para descentralizar son tres:

| Razón | Por qué |
| --- | --- |
| Capacidad de proceso | una sola persona no puede entender todas las decisiones |
| Rapidez | decidir donde está la información evita el viaje de ida y vuelta |
| Motivación | la gente cualificada exige margen, y sin él se va |

La segunda es la que más se nota en el día a día, y la tercera la que decide si una
organización puede retener profesionales.

Y una advertencia: **descentralizar no es delegar sin más**. Si se reparte el poder
de decidir sin repartir a la vez la información y los criterios, cada unidad decide
en un sentido distinto. Descentralizar exige, a cambio, más inversión en
normalización de resultados o en ideología compartida.

## El poder no está en un solo punto de la decisión

La distinción clave del tema. Una decisión tiene cinco fases, y quien controla cada
una puede ser distinto:

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize, >=stealth, node distance=4mm]
\node[draw, minimum height=0.85cm, minimum width=2.15cm, align=center] (i)
  {recoger\\información};
\node[draw, minimum height=0.85cm, minimum width=2.15cm, align=center, right=of i] (a)
  {asesorar};
\node[draw, minimum height=0.85cm, minimum width=2.15cm, align=center, right=of a] (e)
  {\textbf{elegir}};
\node[draw, minimum height=0.85cm, minimum width=2.15cm, align=center, right=of e] (u)
  {autorizar};
\node[draw, minimum height=0.85cm, minimum width=2.15cm, align=center, right=of u] (j)
  {ejecutar};
\draw[->, thick] (i) -- (a);
\draw[->, thick] (a) -- (e);
\draw[->, thick] (e) -- (u);
\draw[->, thick] (u) -- (j);
\end{tikzpicture}
\end{center}
```

Alguien puede tener formalmente el poder de **elegir** y no tenerlo de verdad,
porque quien recoge la información decide qué le llega, quien asesora acota las
alternativas y quien autoriza puede vetar. El poder de un directivo es tanto mayor
cuantas más fases controla, no cuanta más autoridad formal figura en el organigrama.

De ahí que la tecnoestructura tenga a menudo más poder del que su posición sugiere:
controla la información y el asesoramiento sin aparecer como quien decide.

## Descentralización vertical y horizontal

Son dos ejes independientes, y confundirlos es el error habitual.

| | Qué es | Hacia quién |
| --- | --- | --- |
| **Vertical** | el poder baja por la cadena de mando | línea media, jefes de unidad |
| **Horizontal** | el poder sale de la línea | analistas, staff, operarios |

Una organización puede estar descentralizada en vertical y centralizada en
horizontal: las divisiones deciden mucho, y dentro de cada una manda su director.
Y al revés: una organización con todo el poder en el ápice puede haberlo cedido en
horizontal a la tecnoestructura, que decide de hecho cómo se trabaja.

### Cinco tipos

| Tipo | Dónde está el poder | Configuración típica |
| --- | --- | --- |
| A · Centralización vertical y horizontal | todo en el ápice | estructura simple |
| B · Descentralización horizontal limitada | ápice más tecnoestructura | burocracia maquinal |
| C · Descentralización vertical limitada | ápice más línea media | forma divisional |
| D · Descentralización vertical y horizontal | núcleo de operaciones | burocracia profesional |
| E · Descentralización selectiva | repartido por tipo de decisión | adhocracia |

El tipo **B** es el que más despista. Formalmente el ápice decide todo; en la
práctica, al normalizar los procesos, la tecnoestructura ha decidido de antemano
cómo se hace el trabajo, y ni el jefe ni el operario pueden apartarse. Es poder
informal, y es real.

El tipo **E** es el de la adhocracia: no hay un lugar donde reside el poder, sino
que cada decisión se toma donde está la competencia para tomarla. Es el más
flexible y el que más exige de la ideología y de los dispositivos de enlace, porque
sin ellos se convierte en desorden.

## La descentralización y los demás parámetros

Las decisiones de este bloque no son independientes de los tres anteriores:

| Si se ha elegido... | Entonces la descentralización |
| --- | --- |
| mucha formalización | es limitada: la norma ya decidió |
| mucha preparación previa | es amplia: el profesional decide |
| control de rendimiento por unidades | es vertical, hacia la línea media |
| planificación de acciones | es limitada: el plan ya decidió |
| dispositivos de enlace | es selectiva, por tipo de decisión |

La primera fila y la segunda son las dos caras del intercambio del tema 4:
normalizar el proceso quita margen y normalizar a la persona lo da.

## Centralización, descentralización y tamaño

Un patrón que se observa al crecer:

1. La organización pequeña está centralizada porque puede: el fundador conoce todo.
2. Al crecer, el ápice se satura y se normaliza el trabajo. El poder se desplaza en
   horizontal a la tecnoestructura sin que nadie lo decida.
3. Al diversificarse, la normalización de procesos deja de servir —cada negocio es
   distinto— y se descentraliza en vertical hacia divisiones con objetivos propios.
4. Si el entorno se vuelve además dinámico, ni siquiera los objetivos por división
   valen, y hay que descentralizar en selectivo.

Esos cuatro pasos son la secuencia estructura simple, burocracia maquinal, forma
divisional y adhocracia, que es el hilo de los temas 9 a 14 y que el tema 8 explica
con los factores de contingencia.

El tratamiento de la descentralización y de sus cinco tipos sigue a
\cite{mintzberg2009} y \cite{sanchez2025}; el análisis del poder en la organización,
\cite{mintzberg1992}.
