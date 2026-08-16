# El entorno de la empresa y la dirección estratégica

Temas 4 y 5 del programa. El análisis del entorno general y competitivo, y el proceso de
dirección estratégica con sus niveles y estrategias.

## El entorno

| Nivel | Qué recoge | Grado de control |
| --- | --- | --- |
| **General** o macroentorno | factores que afectan a todas las empresas | ninguno |
| **Específico** o sectorial | los agentes del sector | limitado |
| Interno | los recursos de la propia empresa | alto |

### Análisis del entorno general: PESTEL

| Dimensión | Ejemplos de factores |
| --- | --- |
| **P**olítica | estabilidad, política fiscal, comercio exterior |
| **E**conómica | crecimiento, tipos, inflación, paro, tipo de cambio |
| **S**ociocultural | demografía, hábitos, valores, formación |
| **T**ecnológica | innovación, digitalización, obsolescencia |
| **E**cológica | clima, regulación ambiental, recursos |
| **L**egal | derecho laboral, mercantil, competencia, consumo |

**El análisis no consiste en enumerar factores sino en priorizarlos**: qué factores
afectan de verdad a este sector, en qué dirección y con qué probabilidad. Una lista
exhaustiva sin jerarquía no es un análisis.

### Análisis del sector: las cinco fuerzas de Porter

```{=latex}
\begin{center}
\begin{tikzpicture}[
  >=stealth, font=\scriptsize,
  c/.style={draw, minimum width=30mm, minimum height=9mm, align=center}
]
\node[c] (r) at (0,0)    {Rivalidad entre\\competidores};
\node[c] (e) at (0,2.4)  {Amenaza de\\nuevos entrantes};
\node[c] (s) at (0,-2.4) {Amenaza de\\sustitutivos};
\node[c] (p) at (-4.6,0) {Poder de los\\proveedores};
\node[c] (cl) at (4.6,0) {Poder de los\\clientes};
\draw[->] (e) -- (r); \draw[->] (s) -- (r);
\draw[->] (p) -- (r); \draw[->] (cl) -- (r);
\end{tikzpicture}
\end{center}
```

| Fuerza | Es mayor cuando |
| --- | --- |
| Rivalidad | muchos competidores similares, crecimiento lento, costes fijos altos |
| Nuevos entrantes | barreras de entrada bajas |
| Sustitutivos | existen alternativas que cubren la misma necesidad |
| Poder de proveedores | pocos, producto diferenciado, coste de cambio alto |
| Poder de clientes | pocos, compran mucho, producto indiferenciado |

**Cuanto mayores son las cinco fuerzas, menor es la rentabilidad media del sector.** Ese
es el resultado del modelo, y explica por qué sectores con productos aparentemente
atractivos —como las aerolíneas— tienen rentabilidades bajas de forma persistente.

| Barrera de entrada | Origen |
| --- | --- |
| Economías de escala | el entrante debe entrar grande o con desventaja de coste |
| Diferenciación y marca | fidelidad del cliente |
| Necesidad de capital | inversión inicial elevada |
| Acceso a canales de distribución | están ocupados |
| Regulación | licencias, patentes, homologaciones |
| Curva de experiencia | los establecidos producen más barato |

## La dirección estratégica

```{=latex}
\begin{definicion}[Estrategia]
Patrón de decisiones que define los objetivos a largo plazo de la empresa, los recursos
que asigna y la posición que busca frente a sus competidores.
\end{definicion}
```

| Fase | En qué consiste |
| --- | --- |
| **Análisis estratégico** | entorno, recursos y capacidades, misión y objetivos |
| **Formulación** | generar y evaluar alternativas |
| **Implantación** | estructura, sistemas, personas y cultura |
| **Control** | medir, comparar y corregir |

### El análisis DAFO

| | Origen interno | Origen externo |
| --- | --- | --- |
| **Favorable** | Fortalezas | Oportunidades |
| **Desfavorable** | Debilidades | Amenazas |

```{=latex}
\begin{anotacion}
El DAFO es un \textbf{resumen}, no un análisis. Su utilidad depende por completo de lo que
haya detrás: el PESTEL y las cinco fuerzas alimentan las columnas externas, y el análisis
de recursos y capacidades las internas. Un DAFO improvisado en una reunión es una lista de
opiniones con formato de tabla.
\end{anotacion}
```

Su lectura útil es cruzada: cómo usar las fortalezas para aprovechar oportunidades, cómo
corregir debilidades ante amenazas, y qué combinaciones exigen actuar primero.

### Niveles de estrategia

| Nivel | Pregunta que responde |
| --- | --- |
| **Corporativa** | en qué negocios competir |
| **Competitiva** o de negocio | cómo competir en cada uno |
| **Funcional** | cómo apoya cada área a la estrategia de negocio |

## Estrategias competitivas

Porter distingue tres genéricas, según la ventaja buscada y el ámbito:

| Estrategia | Ventaja | Ámbito |
| --- | --- | --- |
| **Liderazgo en costes** | coste más bajo del sector | todo el mercado |
| **Diferenciación** | producto percibido como único | todo el mercado |
| **Enfoque** | cualquiera de las dos | un segmento |

| Fuente de ventaja en costes | Fuente de diferenciación |
| --- | --- |
| Economías de escala | calidad y prestaciones |
| Curva de experiencia | marca y reputación |
| Tecnología de proceso | servicio y atención |
| Acceso a factores baratos | diseño e innovación |
| Eficiencia organizativa | relación con el cliente |

```{=latex}
\begin{anotacion}
Porter advertía del riesgo de quedar \textbf{atrapado a la mitad}: ni el más barato ni el
más diferenciado. La advertencia sigue siendo válida como aviso contra la falta de
posición clara, aunque la evidencia posterior muestra que hay empresas que combinan las
dos con éxito cuando la tecnología lo permite.
\end{anotacion}
```

## Estrategias corporativas

| Dirección | En qué consiste |
| --- | --- |
| **Especialización** | concentrarse en el negocio actual |
| Penetración de mercado | vender más de lo mismo a los mismos clientes |
| Desarrollo de producto | productos nuevos para los clientes actuales |
| Desarrollo de mercado | productos actuales en mercados nuevos |
| **Diversificación** | productos nuevos en mercados nuevos |
| **Integración vertical** | asumir fases anteriores o posteriores de la cadena |
| Internacionalización | salir a otros países |

| Tipo de diversificación | Relación con el negocio actual | Riesgo |
| --- | --- | --- |
| Relacionada | comparte tecnología, clientes o canal | menor: hay sinergias |
| No relacionada | ninguna | mayor: solo diversifica riesgo financiero |

| Modo de desarrollo | Ventaja | Inconveniente |
| --- | --- | --- |
| Crecimiento interno | control y coherencia | lento |
| Fusión o adquisición | rapidez | caro, y difícil de integrar |
| Alianza o *joint venture* | reparte coste y riesgo | conflictos de objetivos |

```{=latex}
\begin{anotacion}
Las fusiones y adquisiciones fracasan con una frecuencia notable, y la causa no suele ser
la valoración financiera sino \textbf{la integración}: culturas incompatibles, fuga de
personas clave y sinergias que se estimaron sin base. La parte difícil no es comprar, es
lo que viene después.
\end{anotacion}
```

## Ejercicios

```{=latex}
\begin{ejercicio}
Aplicar las cinco fuerzas al sector de las aerolíneas de bajo coste y explicar su
rentabilidad media.
\end{ejercicio}

\begin{solucion}
Rivalidad muy alta: producto poco diferenciado, costes fijos elevados y competencia en
precio. Entrantes: barreras moderadas, aunque el acceso a franjas horarias las eleva.
Sustitutivos: tren de alta velocidad en trayectos cortos. Proveedores: muy fuertes —dos
fabricantes de aviones, aeropuertos y combustible—. Clientes: poder alto, porque comparan
precios en segundos y el coste de cambiar es cero.

\medskip
Con cuatro de las cinco fuerzas intensas, el modelo predice rentabilidad media baja, y eso
es exactamente lo que se observa históricamente en el sector.
\end{solucion}

\begin{ejercicio}
Una empresa de muebles quiere crecer. Clasificar estas opciones: abrir tiendas en
Portugal, lanzar una línea de cocinas, comprar su serrería y entrar en el negocio de
seguros.
\end{ejercicio}

\begin{solucion}
Portugal: desarrollo de mercado. Cocinas: desarrollo de producto. Comprar la serrería:
integración vertical hacia atrás. Seguros: diversificación no relacionada.

\medskip
El riesgo crece en ese orden. Las tres primeras aprovechan recursos y conocimiento
existentes; la cuarta no comparte nada con el negocio actual, y su única justificación
sería financiera.
\end{solucion}

\begin{ejercicio}
¿Por qué el DAFO no sustituye al análisis del entorno y de los recursos?
\end{ejercicio}

\begin{solucion}
Porque es un formato de síntesis, no un método de obtención de información. Las
oportunidades y amenazas deben salir del PESTEL y de las cinco fuerzas, y las fortalezas y
debilidades del análisis de recursos y capacidades comparado con los competidores.

\medskip
Un DAFO elaborado sin ese trabajo previo recoge impresiones, y como tiene apariencia de
herramienta rigurosa induce a confiar en él más de lo que merece.
\end{solucion}
```

El análisis del entorno y la dirección estratégica están desarrollados en
\cite{fuentes2016} e \cite{iborra2010}, con la exposición de \cite{cuervo2008} y
\cite{bueno2008}.
