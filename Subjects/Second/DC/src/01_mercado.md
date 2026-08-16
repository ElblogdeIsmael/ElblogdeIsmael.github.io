# Mercado y demanda

Tema 1 del programa. Concepto y clasificación de mercado, mercado de bienes de consumo,
niveles de mercado, mercado empresarial, mercado de servicios y previsión de la demanda.

## Concepto y clasificación de mercado

```{=latex}
\begin{definicion}
Conjunto de compradores reales y potenciales de un producto, que comparten una necesidad y
disponen de capacidad y voluntad para adquirirlo.
\end{definicion}
```

| Criterio | Clases |
| --- | --- |
| **Naturaleza del producto** | bienes de consumo, bienes industriales, servicios |
| **Naturaleza del comprador** | de consumo, empresarial, institucional, revendedor |
| Ámbito geográfico | local, regional, nacional, internacional |
| Estructura competitiva | competencia perfecta, monopolio, oligopolio, competencia monopolística |
| **Fase de desarrollo** | emergente, en crecimiento, maduro, en declive |

**La clasificación no es un ejercicio de etiquetado.** Determina quién decide la compra, con
qué criterios y en cuántos pasos, y de ahí salen decisiones distintas en las cuatro
variables del mix.

## El mercado de bienes de consumo

| Tipo de bien | Rasgo | Distribución típica |
| --- | --- | --- |
| **Conveniencia** | compra frecuente, esfuerzo mínimo | intensiva |
| **Compra esporádica** | se compara calidad, precio y estilo | selectiva |
| **Especialidad** | características únicas, el comprador se desplaza | exclusiva |
| No buscados | el comprador no piensa en ellos | venta personal activa |

```{=latex}
\begin{anotacion}
La clasificación es del \textbf{comportamiento de compra}, no del producto. Un mismo café
puede ser bien de conveniencia en el supermercado y de especialidad en una tienda de tueste
propio, y las dos versiones exigen distribución, precio y comunicación distintos. Preguntar
qué es el producto lleva a error; hay que preguntar cómo se compra.
\end{anotacion}
```

## Niveles de mercado

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\scriptsize]
\draw[thick] (0,0) rectangle (9,1);
\node at (4.5,0.5) {\textbf{Mercado global o total}};
\draw[thick, fill=black!5] (0.9,-1.2) rectangle (8.1,-0.2);
\node at (4.5,-0.7) {\textbf{Mercado potencial}};
\draw[thick, fill=black!10] (1.8,-2.4) rectangle (7.2,-1.4);
\node at (4.5,-1.9) {\textbf{Mercado disponible}};
\draw[thick, fill=black!15] (2.7,-3.6) rectangle (6.3,-2.6);
\node at (4.5,-3.1) {\textbf{Mercado meta}};
\draw[thick, fill=black!25] (3.6,-4.8) rectangle (5.4,-3.8);
\node at (4.5,-4.3) {\textbf{Penetrado}};
\end{tikzpicture}
\end{center}
```

| Nivel | Definición |
| --- | --- |
| **Mercado global** | toda la población de la zona considerada |
| **Mercado potencial** | quienes manifiestan interés por el producto |
| **Mercado disponible** | los que además tienen renta y acceso |
| **Mercado meta** | la parte del disponible a la que la empresa decide dirigirse |
| **Mercado penetrado** | los que ya compran, propios y de la competencia |

$$\text{Cuota de mercado} = \frac{\text{Ventas de la empresa}}{\text{Ventas del sector}},
\qquad \text{Tasa de penetración} = \frac{\text{Mercado penetrado}}{\text{Mercado
disponible}}$$

**Confundir potencial con disponible infla las previsiones.** El interés declarado no es
demanda: falta comprobar la renta y el acceso.

## El mercado empresarial

| Rasgo | Frente al mercado de consumo |
| --- | --- |
| **Número de compradores** | menos y más grandes |
| **Volumen por operación** | mayor |
| **Demanda derivada** | depende de la demanda final de otro mercado |
| Elasticidad a corto | menor: no se cambia de proveedor por una variación de precio |
| **Proceso de compra** | formalizado, con varios participantes y criterios técnicos |
| Relación | estrecha y duradera, con especificaciones conjuntas |

```{=latex}
\begin{definicion}[Centro de compras]
Conjunto de personas que intervienen en la decisión: usuarios, influyentes, decisores,
compradores, prescriptores y filtros de acceso a la información.
\end{definicion}
```

| Situación de compra | Contenido | Esfuerzo comercial |
| --- | --- | --- |
| **Recompra directa** | pedido rutinario al proveedor habitual | mínimo si se es el proveedor; enorme si no |
| **Recompra modificada** | se revisan condiciones o especificaciones | oportunidad de entrar |
| **Compra nueva** | primera vez, sin experiencia previa | máximo, con asesoramiento |

```{=latex}
\begin{anotacion}
La \textbf{demanda derivada} es la característica que más consecuencias tiene: un fabricante
de componentes de automoción no puede aumentar sus ventas con acciones comerciales si las
matriculaciones caen. De ahí que en mercados industriales la previsión empiece por el
mercado final y no por el propio.
\end{anotacion}
```

## El mercado de servicios

| Característica | Consecuencia comercial |
| --- | --- |
| **Intangibilidad** | no se puede probar antes; hay que dar evidencias físicas |
| **Inseparabilidad** | se produce y consume a la vez; el personal es parte del producto |
| **Heterogeneidad** | calidad variable; se corrige con protocolos y formación |
| **Caducidad** | no se almacena; se gestiona con precios por franja y reservas |

**Las cuatro características llevan a ampliar el mix con tres variables más**: personas,
procesos y evidencia física. No son un mix distinto, son el mismo aplicado a un producto que
el cliente no puede examinar antes de comprar.

## Concepto y previsión de la demanda

```{=latex}
\begin{definicion}
Volumen total que compraría un grupo definido de clientes, en una zona y periodo dados, bajo
un entorno y un esfuerzo de marketing determinados.
\end{definicion}
```

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10cm, height=5.4cm, axis lines=left,
  xlabel={esfuerzo de marketing del sector}, ylabel={demanda},
  xmin=0, xmax=10, ymin=0, ymax=1.15, xtick=\empty, ytick=\empty,
  label style={font=\small}, samples=160,
]
\addplot[thick, domain=0:10] {0.25+0.75*(1-exp(-0.45*x))};
\addplot[dashed, domain=0:10] {1.0};
\addplot[dotted, domain=0:10] {0.25};
\end{axis}
\node[font=\scriptsize, anchor=east] at (9.6,4.9) {potencial de mercado};
\node[font=\scriptsize, anchor=east] at (9.6,1.6) {mínimo de mercado};
\end{tikzpicture}
\end{center}
```

| Concepto | Definición |
| --- | --- |
| **Mínimo de mercado** | ventas que se producirían sin esfuerzo comercial alguno |
| **Potencial de mercado** | límite al que tiende la demanda cuando el esfuerzo crece |
| **Sensibilidad de la demanda** | distancia entre los dos |
| Previsión de mercado | demanda esperada para el esfuerzo sectorial previsto |

**Cuanto más plana sea la curva, menos rentable es aumentar el gasto comercial.** En
mercados poco sensibles —productos básicos, categorías maduras— el esfuerzo adicional se
reparte entre competidores sin ampliar el pastel, así que la única vía de crecimiento es la
cuota.

### Métodos de previsión

| Familia | Métodos | Cuándo |
| --- | --- | --- |
| **Cualitativos** | opinión de expertos, Delphi, fuerza de ventas, intención de compra | productos nuevos, sin histórico |
| **Series temporales** | medias móviles, alisado exponencial, descomposición | histórico estable |
| **Causales** | regresión, indicadores adelantados | se conocen las variables que la explican |
| Prueba de mercado | lanzamiento limitado | antes de un lanzamiento grande |

$$\hat{Q}_{t+1} = \alpha\,Q_t + (1-\alpha)\hat{Q}_t \qquad (0 < \alpha < 1)$$

```{=latex}
\begin{anotacion}
En el alisado exponencial, $\alpha$ gobierna la memoria: valores altos siguen deprisa los
cambios y amplifican el ruido; valores bajos son estables y llegan tarde a los giros. No hay
un valor correcto universal, se elige minimizando el error sobre el histórico, y
\textbf{conviene comprobarlo con datos que no se usaron para ajustarlo}.
\end{anotacion}
```

### Descomposición de una serie

$$Q_t = T_t \times E_t \times C_t \times I_t$$

| Componente | Qué recoge |
| --- | --- |
| **Tendencia** $T$ | evolución de largo plazo |
| **Estacionalidad** $E$ | oscilación regular dentro del año |
| Ciclo $C$ | oscilación plurianual ligada a la coyuntura |
| Irregular $I$ | lo no explicado |

**Comparar un mes con el anterior sin desestacionalizar produce conclusiones falsas.** La
comparación válida es con el mismo mes del año anterior, o con la serie ya corregida.

## Ejercicios

```{=latex}
\begin{ejercicio}
Una ciudad tiene 400\,000 habitantes. Un estudio indica que el 45\,\% muestra interés por un
servicio de bicicleta compartida, de los que el 70\,\% tiene edad y capacidad para usarlo. La
empresa se dirige solo a los tres distritos centrales, que reúnen el 40\,\% del disponible, y
capta a 18\,000 usuarios. Calcular los niveles de mercado y la tasa de penetración.
\end{ejercicio}

\begin{solucion}
Potencial: $400\,000\cdot0{,}45 = 180\,000$. Disponible: $180\,000\cdot0{,}70 = 126\,000$.
Meta: $126\,000\cdot0{,}40 = 50\,400$.

\medskip
Penetración sobre el mercado meta: $18\,000/50\,400 = 0{,}357$, un 35,7\,\%; sobre el
disponible, un 14,3\,\%.

\medskip
La distinción importa: un 35,7\,\% del mercado al que se dirige es una posición fuerte, y un
14,3\,\% del disponible dice que quedan dos tercios de la ciudad sin servicio. Las dos cifras
son correctas y sugieren decisiones opuestas.
\end{solucion}

\begin{ejercicio}
Las ventas de los últimos cuatro trimestres han sido 120, 145, 138 y 190. Con
$\alpha = 0{,}3$ y una previsión inicial de 125, calcular la previsión del quinto trimestre y
comentar el resultado.
\end{ejercicio}

\begin{solucion}
\begin{center}
\begin{tabular}{crrr}
\toprule
$t$ & $Q_t$ & $\hat{Q}_t$ & $\hat{Q}_{t+1}$ \\
\midrule
1 & 120 & 125,0 & 123,5 \\
2 & 145 & 123,5 & 130,0 \\
3 & 138 & 130,0 & 132,4 \\
4 & 190 & 132,4 & 149,7 \\
\bottomrule
\end{tabular}
\end{center}

\medskip
La previsión es de \textbf{149,7}, muy por debajo del último dato observado. Con
$\alpha = 0{,}3$ el método reacciona despacio, y si el salto del cuarto trimestre es un
cambio de nivel y no ruido, la previsión se quedará corta varios periodos.

\medskip
Antes de subir $\alpha$ conviene comprobar si el cuarto trimestre es estacional: si todos
los años el cuarto es alto, el modelo adecuado no es un alisado simple sino uno con
estacionalidad.
\end{solucion}

\begin{ejercicio}
Un fabricante de rodamientos industriales quiere aumentar sus ventas un 20\,\% con una
campaña de comunicación. Valorar la propuesta.
\end{ejercicio}

\begin{solucion}
La demanda es derivada: depende de la producción de las máquinas que montan sus rodamientos.
La comunicación no puede crear demanda que el mercado final no genera, así que solo puede
aspirar a ganar cuota a costa de los competidores.

\medskip
En un mercado empresarial con recompra directa, la cuota se mueve despacio: cambiar de
proveedor implica homologación técnica y riesgo de suministro. Las palancas realistas son la
recompra modificada —entrar cuando el cliente revisa condiciones—, la mejora de servicio y
plazo, y la búsqueda de aplicaciones nuevas.

\medskip
Y la previsión debe partir del mercado final: si la producción de sus clientes crece un 3\,\%,
un objetivo del 20\,\% exige quitar cuota, y eso hay que decirlo explícitamente en el plan.
\end{solucion}
```

El mercado y la previsión de la demanda están desarrollados en \cite{kotler2018dc} y
\cite{esteban2018}, con el enfoque estratégico de \cite{lambin2009}.
