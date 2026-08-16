# Fundamentos de investigación comercial

Tema 3 del programa. El sistema de información de marketing y sus tres componentes: datos
internos, inteligencia de marketing e investigación de mercados.

## El sistema de información de marketing

```{=latex}
\begin{definicion}[SIM]
Conjunto de personas, equipos y procedimientos que recoge, ordena, analiza y distribuye la
información que los responsables de marketing necesitan para decidir.
\end{definicion}
```

| Componente | Fuente | Naturaleza |
| --- | --- | --- |
| **Datos internos** | la propia empresa | continua, barata, ya existe |
| **Inteligencia de marketing** | el entorno, de forma sistemática | continua, pública |
| **Investigación de mercados** | estudios específicos | puntual, cara, a medida |

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth,
  b/.style={draw, thick, align=center, font=\scriptsize, minimum width=3cm,
            minimum height=0.9cm}]
\node[b] (int) at (0,1.6) {Datos internos};
\node[b] (ig)  at (0,0)   {Inteligencia de marketing};
\node[b] (inv) at (0,-1.6) {Investigación de mercados};
\node[b, fill=black!8, minimum height=1.4cm] (an) at (4.6,0) {Análisis y\\distribución};
\node[b, minimum height=1.4cm] (dec) at (9,0) {Decisiones de\\marketing};
\draw[->, thick] (int) -- (an);
\draw[->, thick] (ig) -- (an);
\draw[->, thick] (inv) -- (an);
\draw[->, thick] (an) -- (dec);
\end{tikzpicture}
\end{center}
```

**El cuello de botella no suele ser la falta de datos, sino la falta de preguntas.** La
utilidad de un SIM se mide por las decisiones que cambia, no por el volumen que almacena.

## El sistema de datos interno

Reúne lo que la empresa genera al operar.

| Origen | Contenido |
| --- | --- |
| Contabilidad y facturación | ventas por producto, cliente y periodo; márgenes |
| Fuerza de ventas | visitas, pedidos, incidencias, información del terreno |
| Servicio de atención | reclamaciones, devoluciones, motivos |
| Web y comercio electrónico | tráfico, carritos abandonados, conversión |
| Programas de fidelización | cesta de la compra individual y su evolución |

| Ventaja | Limitación |
| --- | --- |
| rápido y de coste bajo | recogido con otro fin, no con fin comercial |
| completo sobre los propios clientes | **no dice nada de los no clientes** |
| histórico y comparable | disperso entre sistemas que no se hablan |

```{=latex}
\begin{anotacion}
La limitación decisiva es la segunda: los datos internos describen a quien ya compra. Un
análisis de la base de clientes que concluye que el producto gusta está midiendo justamente
a quienes lo eligieron, y no ve a los que lo descartaron. \textbf{Es sesgo de selección}, y
por eso los datos internos no sustituyen a la investigación.
\end{anotacion}
```

## El sistema de inteligencia de marketing

```{=latex}
\begin{definicion}
Recogida y análisis sistemático de información públicamente disponible sobre competidores,
clientes y el entorno.
\end{definicion}
```

| Fuente | Ejemplo |
| --- | --- |
| Publicaciones del sector | informes, revistas profesionales |
| Estadística oficial | INE, Eurostat, cuentas del sector |
| Comunicación de los competidores | cuentas anuales, notas de prensa, catálogos |
| Distribuidores y proveedores | qué se mueve y a qué precio |
| Escucha en redes | menciones, valoraciones, quejas |
| **La propia fuerza de ventas** | lo que ve en el punto de venta |

**Es sistemática, no ocasional.** La diferencia entre inteligencia y rumor es que la primera
tiene fuentes establecidas, periodicidad y alguien responsable de destilarla.

```{=latex}
\begin{anotacion}
Los límites legales y éticos son parte del método: la información pública o cedida
voluntariamente se usa; la obtenida por engaño, suplantación o acceso indebido, no. Y el
tratamiento de datos personales de clientes está sujeto a la normativa de protección de
datos, que exige base legítima, finalidad determinada y minimización.
\end{anotacion}
```

## El sistema de investigación de mercados

```{=latex}
\begin{definicion}
Diseño, obtención, análisis y presentación de datos relativos a una situación de marketing
concreta a la que se enfrenta la empresa.
\end{definicion}
```

### Las cuatro fases

| Fase | Contenido |
| --- | --- |
| 1. **Definir el problema** | traducir la decisión pendiente en objetivos de información |
| 2. Diseñar el plan | fuentes, método, muestra, instrumentos |
| 3. Ejecutar | recoger y procesar |
| 4. Interpretar e informar | conclusiones orientadas a la decisión |

**La primera fase es la que decide si el estudio sirve.** Un estudio impecable sobre la
pregunta equivocada es dinero perdido, y el error no se detecta hasta el final.

### Tipos de investigación

| Tipo | Objetivo | Métodos |
| --- | --- | --- |
| **Exploratoria** | entender un problema mal definido | fuentes secundarias, dinámicas de grupo, entrevistas |
| **Descriptiva** | cuantificar magnitudes y perfiles | encuesta, panel, observación |
| **Causal** | establecer relaciones causa-efecto | experimentos, pruebas de mercado |

### Datos primarios y secundarios

| | Secundarios | Primarios |
| --- | --- | --- |
| Origen | ya existen, recogidos con otro fin | se obtienen para este estudio |
| Coste | bajo | alto |
| Plazo | inmediato | semanas |
| Ajuste al problema | parcial | total |

**Siempre se empieza por los secundarios.** Pueden resolver la pregunta o, al menos, acotar
lo que hay que preguntar.

### Métodos de obtención de datos primarios

| Método | Fuerte en | Débil en |
| --- | --- | --- |
| **Encuesta** | describir opiniones y perfiles | lo que la gente dice puede no ser lo que hace |
| **Observación** | conducta real | no explica motivos |
| **Experimento** | causalidad | coste y control de las condiciones |
| Dinámica de grupo | generar hipótesis | no es representativa |

```{=latex}
\begin{anotacion}
La distancia entre lo declarado y lo hecho es el problema central de la encuesta. Preguntar
por la disposición a pagar sobreestima sistemáticamente el precio aceptado, porque responder
no cuesta dinero. Por eso las decisiones de precio se contrastan con datos de venta reales o
con experimentos, no con declaraciones.
\end{anotacion}
```

### Muestreo

| Decisión | Alternativas |
| --- | --- |
| Unidad | a quién se estudia |
| Tamaño | cuántos |
| **Procedimiento** | probabilístico o no probabilístico |

$$n = \frac{z^{2}\,p\,(1-p)}{e^{2}}$$

para una población grande, con $z$ el valor de la normal asociado al nivel de confianza, $p$
la proporción estimada y $e$ el error admitido.

```{=latex}
\begin{proposicion}
El tamaño de muestra depende del error admitido y del nivel de confianza, y \textbf{no del
tamaño de la población} mientras esta sea grande. Estudiar una ciudad de cien mil habitantes
o un país de cuarenta millones con la misma precisión exige muestras casi idénticas.
\end{proposicion}
```

**El error muestral es el que se calcula; el error no muestral es el que hunde los
estudios**: preguntas mal redactadas, entrevistadores que inducen la respuesta, marcos de
muestreo incompletos y no respuesta concentrada en un perfil.

## Ejercicios

```{=latex}
\begin{ejercicio}
Una cadena quiere saber por qué han caído sus ventas un 12\,\% en un trimestre. Proponer un
plan de información con los tres componentes del SIM.
\end{ejercicio}

\begin{solucion}
\emph{Datos internos}: descomponer la caída por tienda, categoría, día y tipo de cliente. Si
se concentra en unas pocas tiendas o en una categoría, el problema es local y el estudio
posterior se acota mucho.

\medskip
\emph{Inteligencia}: comprobar si el sector cae igual, si ha entrado un competidor y qué
precios y promociones ha habido.

\medskip
\emph{Investigación}: solo si lo anterior no explica la caída. Entrevistas a clientes
perdidos, que son los que tienen la respuesta y a los que los datos internos ya no ven.
\end{solucion}

\begin{ejercicio}
Calcular el tamaño de muestra para un error del 3\,\% con un 95\,\% de confianza, sin
información previa sobre la proporción.
\end{ejercicio}

\begin{solucion}
Sin información previa se toma $p = 0{,}5$, que maximiza la varianza y da el tamaño más
prudente. Con $z = 1{,}96$:
$$n = \frac{1{,}96^{2}\cdot0{,}5\cdot0{,}5}{0{,}03^{2}} = \frac{0{,}9604}{0{,}0009} = 1068$$
Con un error del 5\,\% bastarían 384. Reducir el error a la mitad multiplica la muestra por
cuatro, porque $n$ depende de $e^{-2}$.
\end{solucion}

\begin{ejercicio}
Una encuesta sobre un envase sostenible concluye que el 78\,\% pagaría un 10\,\% más por él.
Al lanzarlo, la cuota apenas se mueve. Explicarlo.
\end{ejercicio}

\begin{solucion}
Es la brecha entre actitud declarada y conducta. Responder que se pagaría más no cuesta
nada, y además la pregunta expone la opción sostenible de forma aislada, sin las
alternativas que compiten con ella en el lineal ni la restricción presupuestaria real.

\medskip
El diseño alternativo es un experimento en un conjunto de tiendas, con el producto a su
precio real junto a los competidores, midiendo ventas y no opiniones.
\end{solucion}
```

Los fundamentos de la investigación comercial están desarrollados en \cite{kotler2018} y
\cite{santesmases2018}.
