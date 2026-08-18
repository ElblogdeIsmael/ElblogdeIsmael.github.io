# Comunicación y sistemas de información

Tema 9 del programa. Cómo circula la información en una organización, dónde se
pierde y qué añade la tecnología.

## El proceso

Comunicar es transferir un significado y que se entienda. El modelo básico tiene
emisor, codificación, mensaje, canal, decodificación, receptor y
**retroalimentación**, con **ruido** afectando a todo el recorrido.

```{=latex}
\begin{center}
\begin{tikzpicture}[
  b/.style={draw, rounded corners=2pt, minimum width=20mm, minimum height=9mm,
            align=center, font=\footnotesize},
  node distance=6mm
]
  \node[b] (e) {Emisor};
  \node[b, right=of e] (c) {Codifica};
  \node[b, right=of c] (m) {Canal};
  \node[b, right=of m] (d) {Decodifica};
  \node[b, right=of d] (r) {Receptor};
  \foreach \a/\b in {e/c, c/m, m/d, d/r} \draw[-{Latex[length=2mm]}] (\a) -- (\b);
  \draw[-{Latex[length=2mm]}, dashed] (r.south) -- ++(0,-8mm) -| (e.south)
        node[pos=0.25, below, font=\scriptsize] {retroalimentación};
  \node[font=\scriptsize, above=7mm of m] (n) {ruido};
  \foreach \x in {c, m, d} \draw[dotted] (n) -- (\x);
\end{tikzpicture}
\end{center}
```

La **retroalimentación** es lo que separa comunicar de emitir. Sin ella el emisor
no sabe si el mensaje llegó ni cómo se entendió, y esa es la diferencia práctica
entre una reunión y un comunicado.

## Barreras

| Barrera | En qué consiste |
| --- | --- |
| Filtrado | el emisor manipula el mensaje para que sea bien recibido. Crece con el número de niveles |
| Percepción selectiva | el receptor oye lo que espera oír |
| Sobrecarga | más información de la que se puede procesar: se ignora, se olvida o se aplaza |
| Emociones | el estado de ánimo cambia la interpretación |
| Lenguaje | jerga técnica, y el mismo término con significados distintos por departamento |
| Silencio | lo que no se dice también es información, y el filtrado hacia arriba es el caso más caro |

El **filtrado** es el que más daño hace en una jerarquía alta: cada nivel suaviza
la mala noticia, y la alta dirección se entera tarde. Es un argumento estructural
a favor de acortar la cadena, no una cuestión de carácter.

## Dirección y redes

La comunicación **descendente** transmite instrucciones y objetivos; la
**ascendente** informa del estado real y es la que más se degrada; la
**horizontal** coordina entre iguales y es la que la jerarquía suele dificultar
sin querer.

Además de la formal existe la **informal**, el rumor. Circula rápido, es
sorprendentemente exacto en los hechos e inexacto en las causas, y aparece donde
la información oficial falta. No se elimina: se le quita el sitio informando.

Sobre los canales, la idea útil es la **riqueza del canal**: cara a cara admite
matices, gesto y respuesta inmediata; un correo, casi nada. Los mensajes
ambiguos o delicados piden canal rico, y los rutinarios no lo necesitan. Casi
todos los problemas de comunicación mal atribuidos a «falta de comunicación» son
en realidad una mala elección de canal.

## Sistemas de información

Un sistema de información recoge, procesa, almacena y distribuye información para
apoyar la decisión y el control. La clasificación clásica los ordena por el nivel
al que sirven, y se corresponde con la pirámide del tema 1:

| Sistema | A quién sirve | Para qué |
| --- | --- | --- |
| Procesamiento de transacciones (TPS) | operación | registrar el día a día: ventas, nóminas, pedidos |
| Información para la dirección (MIS) | dirección intermedia | informes periódicos sobre lo que ya pasó |
| Apoyo a la decisión (DSS) | dirección intermedia | analizar escenarios y decisiones semiestructuradas |
| Dirección ejecutiva (EIS) | alta dirección | indicadores agregados y señales del entorno |

Los **ERP** integran los datos de todas las áreas en una base común, que es lo
que evita la contradicción entre lo que dice contabilidad y lo que dice almacén.
Su dificultad no es técnica sino organizativa: imponen una forma de trabajar, y
por eso su implantación es un caso de manual del tema 3.

Lo que la tecnología no arregla: un sistema de información sobre una estructura
que filtra la información sigue dando información filtrada, más deprisa.
