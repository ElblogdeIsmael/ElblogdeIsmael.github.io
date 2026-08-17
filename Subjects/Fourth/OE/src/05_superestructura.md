# Los parámetros de diseño (II): diseño de la superestructura

Tema 5 del programa. Cómo se agrupan los puestos en unidades y de qué tamaño es
cada una.

## Agrupación de unidades

Agrupar es la forma de introducir supervisión directa y jerarquía. Tiene cuatro
efectos, y son los que hacen que la elección importe:

| Efecto | Qué produce |
| --- | --- |
| Supervisión común | un jefe responde del conjunto |
| Recursos compartidos | presupuesto, instalaciones y personal comunes |
| Medida común del rendimiento | se puede evaluar a la unidad entera |
| Adaptación mutua dentro | los miembros se comunican y coordinan solos |

El cuarto es el decisivo: **la agrupación fomenta la coordinación dentro de la
unidad y la dificulta entre unidades**. Todo lo que se mete en la misma caja se
coordina fácil; todo lo que queda fuera pasa a necesitar los dispositivos del tema
6. Por eso agrupar no es organizar el organigrama: es elegir qué problemas de
coordinación se quiere tener.

## Bases de agrupación

| Base | Se agrupa por | Ejemplo |
| --- | --- | --- |
| Conocimientos y habilidades | lo que sabe la persona | departamento de cirugía |
| Proceso de trabajo | la técnica que se emplea | taller de fresado |
| Función | la función empresarial | producción, ventas, finanzas |
| Momento | el turno | turno de mañana y de noche |
| Producto | lo que se produce | división de electrodomésticos |
| Cliente | a quién se sirve | banca de particulares y de empresas |
| Lugar | dónde se opera | delegación norte y sur |

Las siete se reducen a dos familias, y esa es la decisión de verdad.

### Agrupación funcional

Reúne lo que emplea el mismo conocimiento, el mismo proceso o la misma función.

| Ventajas | Inconvenientes |
| --- | --- |
| aprovecha economías de escala en cada especialidad | nadie responde del resultado final |
| especialistas juntos: se ayudan y se forman | el flujo de trabajo cruza muchas unidades |
| evita duplicar recursos | los conflictos suben al ápice para resolverse |
| carrera profesional clara dentro de la especialidad | la medida del rendimiento es de medios, no de fines |

El segundo inconveniente es el estructural. Con agrupación funcional, un pedido
recorre ventas, producción, almacén y facturación, y ninguna unidad responde del
pedido: cada una responde de su parte. Si se retrasa, no hay a quién preguntar por
debajo del director general.

### Agrupación de mercado

Reúne lo que sirve al mismo producto, cliente o lugar.

| Ventajas | Inconvenientes |
| --- | --- |
| el flujo de trabajo entero cae dentro de una unidad | duplica recursos entre unidades |
| se responde del resultado, y se puede medir | pierde economías de escala |
| se reacciona antes a los cambios de ese mercado | los especialistas se dispersan y se aíslan |
| descarga al ápice de resolver conflictos | riesgo de optimizar la parte a costa del conjunto |

Es la base de la forma divisional del tema 13, y también la de una organización
por proyectos.

### Cómo se elige

Cuatro criterios, que a veces apuntan en direcciones distintas:

1. **Interdependencias del flujo de trabajo.** Lo que tiene que ir junto para que
   el trabajo salga, junto. Es el criterio más fuerte.
2. **Interdependencias de proceso.** Lo que comparte técnica y se beneficia de estar
   cerca para especializarse.
3. **Interdependencias de escala.** Lo que necesita un volumen mínimo para ser
   eficiente.
4. **Interdependencias sociales.** Lo que funciona mejor junto por razones de
   relación o de clima.

Cuando el 1 y el 2 se contradicen —lo habitual—, la respuesta es la de siempre:
agrupar por lo que más coordinación exija a diario, y cubrir lo demás con enlaces.

### Estructura matricial

Cuando ninguna de las dos bases se puede sacrificar, se usan las dos a la vez: cada
persona depende de un jefe funcional y de un jefe de proyecto o de producto.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\small, >=stealth]
\node[draw, minimum width=2.1cm, minimum height=0.7cm] (dir) at (0,2.6) {Dirección};
\node[draw, minimum width=1.9cm, minimum height=0.7cm] (f1) at (-2.6,1.4) {Ingeniería};
\node[draw, minimum width=1.9cm, minimum height=0.7cm] (f2) at (0,1.4)    {Producción};
\node[draw, minimum width=1.9cm, minimum height=0.7cm] (f3) at (2.6,1.4)  {Compras};
\node[draw, minimum width=1.9cm, minimum height=0.7cm] (p1) at (-4.6,0.1) {Proyecto A};
\node[draw, minimum width=1.9cm, minimum height=0.7cm] (p2) at (-4.6,-1.1){Proyecto B};

\draw[thick] (dir) -- (f1); \draw[thick] (dir) -- (f2); \draw[thick] (dir) -- (f3);
% Los dos proyectos cuelgan de la direccion por un tronco propio, a la
% izquierda de sus cajas: colgarlos en la vertical de x=-4.6 haria pasar la
% linea por dentro de ellas.
\draw[thick] (dir.west) -- (-6.0,2.6) -- (-6.0,-1.1);
\draw[thick] (-6.0,0.1)  -- (p1.west);
\draw[thick] (-6.0,-1.1) -- (p2.west);
\foreach \y in {0.1,-1.1} {
  \foreach \x in {-2.6,0,2.6} {
    \node[circle, fill, inner sep=1.8pt] at (\x,\y) {};
  }
  \draw[densely dashed] (-3.6,\y) -- (3.2,\y);
}
\foreach \x in {-2.6,0,2.6} { \draw[densely dashed] (\x,0.9) -- (\x,-1.6); }
\end{tikzpicture}
\end{center}
```

Los puntos son las personas: cada una pertenece a una función y a un proyecto, y
responde ante los dos.

| Ventaja | Coste |
| --- | --- |
| resuelve las dos coordinaciones a la vez | rompe la unidad de mando |
| reparte especialistas escasos entre proyectos | los conflictos son permanentes, no excepcionales |
| flexible ante proyectos que empiezan y acaban | exige mucha comunicación y madurez |

La unidad de mando —cada persona, un solo jefe— se sacrifica a propósito. Eso hace
la matriz cara de mantener: los desacuerdos entre los dos jefes son parte del
diseño y hay que resolverlos hablando, no escalándolos. Cuando la organización no
tolera ese conflicto abierto, la matriz degenera: uno de los dos ejes se vuelve
nominal y queda una estructura funcional con jefes de proyecto sin poder.

## Tamaño de la unidad

Cuántas personas dependen de un mismo jefe. Es el **ámbito de control**, y su
efecto es sobre la forma de la organización entera.

```{=latex}
\begin{center}
% Los dos arboles tienen siete nodos: lo unico que cambia es el ambito de
% control, y con el la altura. Las coordenadas van escritas a mano porque
% con `child` los dos arboles salian desalineados entre si.
\begin{tikzpicture}[font=\footnotesize, nodo/.style={circle, draw, inner sep=1.4pt}]
\begin{scope}
  \node[nodo] (r) at (0,2.4) {};
  \node[nodo] (a) at (-1.0,1.4) {};
  \node[nodo] (b) at ( 1.0,1.4) {};
  \foreach \x/\n in {-1.5/c1,-0.5/c2,0.5/c3,1.5/c4} { \node[nodo] (\n) at (\x,0.4) {}; }
  \draw (r) -- (a); \draw (r) -- (b);
  \draw (a) -- (c1); \draw (a) -- (c2);
  \draw (b) -- (c3); \draw (b) -- (c4);
  \node at (0,-0.35) {alta: ámbito estrecho};
\end{scope}
\begin{scope}[xshift=6.6cm]
  \node[nodo] (R) at (0,2.4) {};
  \foreach \x/\n in {-2.5/d1,-1.5/d2,-0.5/d3,0.5/d4,1.5/d5,2.5/d6} {
    \node[nodo] (\n) at (\x,1.4) {};
    \draw (R) -- (\n);
  }
  \node at (0,-0.35) {plana: ámbito amplio};
\end{scope}
\end{tikzpicture}
\end{center}
```

Con el mismo número de personas, un ámbito estrecho produce una organización
**alta**, con muchos niveles, y uno amplio una **plana**. Y una organización alta
tiene los problemas de comunicación del tema 3: la información se filtra en cada
escalón.

### De qué depende

La regla que suele darse —«entre cinco y ocho»— es falsa como regla general. El
ámbito depende de cuánta supervisión directa haga falta, y eso depende de los
parámetros del tema 4:

| El ámbito puede ser **amplio** si... | El ámbito debe ser **estrecho** si... |
| --- | --- |
| el trabajo está normalizado | el trabajo es variable e imprevisible |
| los subordinados están muy formados | hay que formar sobre la marcha |
| las tareas son parecidas entre sí | cada subordinado hace algo distinto |
| todos están en el mismo sitio | están dispersos geográficamente |
| el jefe no tiene otras funciones | el jefe además hace trabajo propio |
| hay poca necesidad de adaptación mutua | el grupo tiene que discutir mucho entre sí |

La primera fila explica la aparente paradoja de que una fábrica muy burocratizada
tenga ámbitos amplios en el núcleo: el procedimiento hace el trabajo del
supervisor. La última explica lo contrario en un equipo de proyecto: cuanta más
adaptación mutua necesita el grupo, más pequeño tiene que ser, porque los canales
de comunicación crecen con el cuadrado del tamaño.

Y una advertencia sobre la altura: cada nivel añadido cuesta salario, retrasa las
decisiones y deforma la información. Las reestructuraciones que «aplanan» la
organización suelen ser eso: quitar niveles de línea media cuyo trabajo consistía en
transmitir.

El tratamiento de la agrupación y del ámbito de control sigue a
\cite{mintzberg2009} y \cite{sanchez2025}; la estructura matricial y sus problemas,
\cite{daft2005} y \cite{navio2022}.
