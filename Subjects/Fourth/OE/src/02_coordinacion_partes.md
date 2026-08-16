# Los mecanismos de coordinación y las partes de la organización

Tema 2 del programa. Las seis formas de coordinar el trabajo y las cinco partes en
que se divide cualquier organización.

## Los mecanismos de coordinación

Dividido el trabajo, hay que volver a juntarlo. Hay seis maneras de hacerlo, y
cualquier organización usa varias a la vez.

| Mecanismo | Cómo coordina | Quién controla |
| --- | --- | --- |
| Adaptación mutua | comunicación informal entre los que hacen el trabajo | el operario |
| Supervisión directa | una persona da instrucciones y vigila | el jefe |
| Normalización de procesos | se especifica **cómo** se hace el trabajo | el analista |
| Normalización de resultados | se especifica **qué** hay que conseguir | el analista |
| Normalización de habilidades | se especifica **qué formación** hace falta | quien forma, fuera |
| Normalización de las normas | se comparten los valores y las creencias | la propia organización |

La columna de la derecha es lo importante: al pasar de un mecanismo al siguiente,
el control del trabajo se aleja de quien lo ejecuta. Y en los dos últimos sale de
la organización, porque la formación y los valores se adquieren antes de entrar.

### El orden de aparición

Al crecer una organización, los mecanismos se suceden en este orden:

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth, font=\small, node distance=0pt]
\node[draw, minimum width=2.5cm, minimum height=0.85cm, align=center] (a)
  {adaptación\\mutua};
\node[draw, minimum width=2.7cm, minimum height=0.85cm, align=center, right=6mm of a] (b)
  {supervisión\\directa};
\node[draw, minimum width=2.9cm, minimum height=0.85cm, align=center, right=6mm of b] (c)
  {normalización};
\node[draw, minimum width=2.5cm, minimum height=0.85cm, align=center, right=6mm of c] (d)
  {adaptación\\mutua};
\draw[->, thick] (a) -- (b);
\draw[->, thick] (b) -- (c);
\draw[->, thick] (c) -- (d);
\node[below=3mm of a, font=\footnotesize] {muy pequeña};
\node[below=3mm of c, font=\footnotesize] {grande};
\node[below=3mm of d, font=\footnotesize] {trabajo complejo};
\end{tikzpicture}
\end{center}
```

Dos personas se coordinan hablando. Cinco necesitan a alguien que reparta. Cincuenta
necesitan procedimientos. Y cuando el trabajo se vuelve tan complejo que no se puede
normalizar —investigación, proyectos únicos— se vuelve a la adaptación mutua, ahora
sobre un trabajo mucho más difícil que el del principio.

### Cuándo usar cada uno

**Adaptación mutua.** Coordinación por comunicación directa, sin que nadie mande.
Sirve para el trabajo muy simple —dos personas moviendo un mueble— y para el muy
complejo, donde nadie sabe de antemano qué hay que hacer. Su límite es el número de
personas: los canales de comunicación crecen como $n(n-1)/2$, así que con veinte
personas hay 190 relaciones posibles y la coordinación informal se rompe.

**Supervisión directa.** Una persona asume la responsabilidad del trabajo de otras,
les da instrucciones y controla lo que hacen. Su límite es el **ámbito de control**:
cuántos subordinados puede atender un jefe. Superado, hay que añadir otro nivel, y
así aparece la jerarquía.

**Normalización de procesos.** El contenido del trabajo se especifica de antemano:
qué pasos, en qué orden, con qué medios. Es el mecanismo de la cadena de montaje y
del procedimiento administrativo. Exige un trabajo estable y repetitivo, y quien lo
diseña no es quien lo ejecuta.

**Normalización de resultados.** Se fija lo que hay que conseguir y se deja libre el
cómo: cuota de ventas, plazo de entrega, margen de la división. Es el mecanismo de
la dirección por objetivos y el que sostiene la forma divisional del tema 13.

**Normalización de habilidades.** Cuando ni el proceso ni el resultado se pueden
especificar, se normaliza a la persona: se exige una formación que garantiza que
sabrá qué hacer. Un cirujano y un anestesista coordinan una operación casi sin
hablar, porque los dos saben lo que el otro va a hacer. La normalización ocurrió
años antes, en la facultad.

**Normalización de las normas.** Los miembros comparten unas creencias y de ahí sale
el comportamiento coordinado. Es el mecanismo de la organización misionaria del
tema 12, y aparece como refuerzo en muchas otras.

## Las partes de la organización

Mintzberg describe cualquier organización con cinco partes, más la ideología que
las envuelve.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize]
% El logotipo de Mintzberg: cupula arriba, nucleo abajo, linea media
% uniendolos, y los dos staff a los lados. Las anchuras estan medidas para
% que cada rotulo quepa dentro de su figura: con el trapecio mas estrecho,
% «apice estrategico» y «nucleo de operaciones» se salian por los lados.
\draw[thick] (-1.9,2.05) -- (1.9,2.05) -- (2.6,2.95) -- (-2.6,2.95) -- cycle;
\node at (0,2.5) {ápice estratégico};

\draw[thick] (-0.75,0.75) -- (0.75,0.75) -- (1.35,1.95) -- (-1.35,1.95) -- cycle;
\node[align=center] at (0,1.35) {línea\\media};

\draw[thick] (-3.6,0) -- (3.6,0) -- (2.2,0.70) -- (-2.2,0.70) -- cycle;
\node at (0,0.35) {núcleo de operaciones};

\draw[thick] (-3.9,0.85) rectangle (-1.6,1.90);
\node[align=center] at (-2.75,1.38) {tecno-\\estructura};

\draw[thick] (1.6,0.85) rectangle (3.9,1.90);
\node[align=center] at (2.75,1.38) {staff de\\apoyo};
\end{tikzpicture}
\end{center}
```

| Parte | Quién es | Qué hace |
| --- | --- | --- |
| **Núcleo de operaciones** | los que producen | fabrican el producto o prestan el servicio |
| **Ápice estratégico** | la alta dirección | responde de la organización entera ante el exterior |
| **Línea media** | mandos intermedios | enlaza el ápice con el núcleo por la cadena de autoridad |
| **Tecnoestructura** | analistas | normalizan el trabajo de los demás; no lo hacen ellos |
| **Staff de apoyo** | servicios internos | prestan servicios ajenos al flujo de trabajo |
| **Ideología** | — | las tradiciones y creencias que distinguen a esta organización |

### Núcleo de operaciones

Es el corazón: los operarios de la fábrica, los profesores de la universidad, los
médicos del hospital. Cuatro funciones: asegurar los insumos, transformarlos,
distribuir la salida y mantener el proceso.

Como es donde se hace el trabajo esencial, es también donde la organización más
protege del ajuste externo, normalizándolo cuanto puede.

### Ápice estratégico

Tres bloques de trabajo:

- **Supervisión directa** de la organización: asignar recursos, resolver conflictos,
  nombrar a las personas, controlar el rendimiento.
- **Relación con el entorno**: informar, negociar, representar, atender a quienes
  tienen influencia sobre la organización.
- **Estrategia**: interpretar el entorno y decidir cómo la organización se ajusta a
  él.

Su trabajo se caracteriza por la ausencia de repetición y por la ambigüedad: por eso
el mecanismo dominante entre sus miembros es la adaptación mutua.

### Línea media

Une el ápice con el núcleo por una cadena de mandos con autoridad formal. Existe
porque la supervisión directa tiene un límite de ámbito de control: si el ápice no
puede supervisar a todos, hacen falta escalones.

Cada mando intermedio hace hacia abajo lo que el ápice hace con toda la
organización, y hacia arriba recoge información agregada. Ese doble papel lo
convierte en el punto donde la información se filtra dos veces, y explica por qué
las malas noticias tardan en subir.

### Tecnoestructura

Analistas que **normalizan el trabajo de otros**: ingenieros de métodos que diseñan
procesos, planificadores que fijan resultados, formadores que normalizan
habilidades. No participan en el flujo de trabajo; lo hacen más eficaz cambiando el
de los demás.

Su interés está en normalizar más, porque de ahí viene su poder. Eso los enfrenta de
forma natural con el núcleo de operaciones cuando este es profesional y quiere
decidir por sí mismo.

### Staff de apoyo

Unidades que prestan servicios al margen del flujo de trabajo: asesoría jurídica,
relaciones públicas, cafetería, mantenimiento del edificio. La diferencia con la
tecnoestructura es clara: **el staff de apoyo hace un trabajo propio, la
tecnoestructura cambia el de otros**.

Muchas de estas funciones podrían contratarse fuera, y que estén dentro suele
responder a la lógica del tema 1: se integra lo que interesa controlar de cerca o
tener disponible sin negociación.

### Ideología

No es una parte con personas propias, sino el conjunto de creencias que envuelve a
todas y las distingue de otra organización que hiciera lo mismo. Cuando es fuerte
sostiene la coordinación sin necesidad de jerarquía ni de normas, y ese caso extremo
es la organización misionaria.

## Cada configuración tiene su parte dominante

Es el resultado que enlaza este tema con los temas 9 a 14. Cada configuración se
reconoce por qué parte tira de ella y qué mecanismo predomina:

| Configuración | Parte dominante | Mecanismo |
| --- | --- | --- |
| Estructura simple | ápice estratégico | supervisión directa |
| Burocracia maquinal | tecnoestructura | normalización de procesos |
| Burocracia profesional | núcleo de operaciones | normalización de habilidades |
| Forma divisional | línea media | normalización de resultados |
| Adhocracia | staff de apoyo | adaptación mutua |
| Organización misionaria | ideología | normalización de las normas |

La tabla se lee en las dos direcciones: si se sabe qué parte tiene el poder, se
sabe hacia qué configuración empuja la organización, y al revés.

La descripción de los mecanismos y de las partes sigue a \cite{mintzberg2009} y a
\cite{sanchez2025}; la revisión posterior del propio autor está en
\cite{mintzberg2023}.
