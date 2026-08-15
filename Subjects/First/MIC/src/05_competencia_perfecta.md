# La competencia perfecta

Capítulo 5 del programa. Características del modelo, la empresa y la industria a corto y
a largo plazo, y la eficiencia del mercado competitivo.

## Características

| Supuesto | Consecuencia |
| --- | --- |
| Muchos compradores y vendedores | ninguno influye en el precio |
| Producto homogéneo | el comprador es indiferente entre vendedores |
| Información perfecta | no hay ventajas por desconocimiento |
| Libre entrada y salida | los beneficios extraordinarios atraen competencia |
| Sin costes de transacción | --- |

De los supuestos sale la propiedad que define el modelo: **la empresa es precio-aceptante**.
Su demanda individual es horizontal al precio de mercado, aunque la demanda del mercado
tenga pendiente negativa.

$$P = IMe = IMg$$

**La igualdad entre precio e ingreso marginal es exclusiva de la competencia perfecta**,
y es lo que distingue este capítulo de los dos siguientes: al no influir en el precio, la
empresa cobra lo mismo por cada unidad adicional.

## La empresa a corto plazo

La condición de maximización del capítulo anterior se concreta en:

$$P = CMg(Q)$$

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=10.4cm, height=5.8cm, axis lines=left,
  xlabel={$Q$}, ylabel={},
  xmin=0, xmax=10, ymin=0, ymax=26,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=140,
  legend style={font=\scriptsize, draw=none, at={(0.02,0.98)}, anchor=north west},
]
\addplot[thick, domain=1:9.5] {x^2 - 8*x + 25};
\addlegendentry{$CMg$}
\addplot[dashed, domain=1:9.5] {x^2/3 - 4*x + 25 + 6/x};
\addlegendentry{$CTMe$}
\addplot[dotted, domain=1:9.5] {x^2/3 - 4*x + 25};
\addlegendentry{$CVMe$}
\addplot[thick, domain=0:10] {17};
\addlegendentry{$P = IMg$}
\end{axis}
\end{tikzpicture}
\end{center}
```

La **curva de oferta de la empresa** es su curva de coste marginal por encima del mínimo
del coste variable medio. Por debajo de ese punto, el punto de cierre, la empresa
prefiere no producir.

| Precio | Decisión | Resultado |
| --- | --- | --- |
| $P > \min CTMe$ | producir | beneficio positivo |
| $P = \min CTMe$ | producir | beneficio nulo: punto de nivelación |
| $\min CVMe < P < \min CTMe$ | producir | pérdida menor que $CF$ |
| $P < \min CVMe$ | cerrar | pérdida igual a $CF$ |

La **oferta de la industria** a corto plazo es la suma horizontal de las ofertas
individuales, con el número de empresas dado.

## El largo plazo

Aquí entra el supuesto de libre entrada y salida, y es el que determina el resultado del
modelo.

| Si hay | Ocurre | Hasta que |
| --- | --- | --- |
| Beneficios positivos | entran empresas nuevas | el precio baja y el beneficio se anula |
| Pérdidas | salen empresas | el precio sube y la pérdida se anula |

```{=latex}
\begin{proposicion}[Equilibrio a largo plazo]
$$P = CMg = \min CMe_L$$
Todas las empresas producen en la escala mínima eficiente, obtienen beneficio económico
nulo y el precio es el mínimo posible compatible con cubrir costes.
\end{proposicion}
```

```{=latex}
\begin{anotacion}
\textbf{Beneficio económico nulo no es ruina.} Significa que la empresa cubre todos sus
costes, incluido el coste de oportunidad del capital y del trabajo del propietario. Su
beneficio contable es positivo: exactamente el necesario para que le compense seguir.
Confundir los dos conceptos convierte el resultado central del capítulo en un
contrasentido.
\end{anotacion}
```

La **curva de oferta de la industria a largo plazo** depende de cómo respondan los
precios de los factores a la expansión del sector:

| Tipo de industria | Curva de oferta a largo plazo |
| --- | --- |
| De costes constantes | horizontal |
| De costes crecientes | pendiente positiva |
| De costes decrecientes | pendiente negativa |

## Eficiencia del mercado competitivo

| Medida | Definición |
| --- | --- |
| Excedente del consumidor | área bajo la demanda y sobre el precio |
| Excedente del productor | área sobre la oferta y bajo el precio |
| Excedente total | la suma |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=8.6cm, height=6.0cm, axis lines=left,
  xlabel={$Q$}, ylabel={$P$},
  xmin=0, xmax=10, ymin=0, ymax=11,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=2,
]
\addplot[fill=black!10, draw=none] coordinates {(0,10) (0,5) (5,5)} \closedcycle;
\addplot[fill=black!22, draw=none] coordinates {(0,0) (0,5) (5,5)} \closedcycle;
\addplot[thick, domain=0:10] {10-x};
\addplot[thick, domain=0:10] {x};
\addplot[dashed, domain=0:5] {5};
\node[font=\scriptsize] at (axis cs:1.5,6.6) {EC};
\node[font=\scriptsize] at (axis cs:1.5,3.3) {EP};
\node[font=\scriptsize, anchor=west] at (axis cs:7.4,2.4) {oferta};
\node[font=\scriptsize, anchor=west] at (axis cs:7.4,3.4) {demanda};
\end{axis}
\end{tikzpicture}
\end{center}
```

```{=latex}
\begin{teorema}[Primer teorema del bienestar]
En competencia perfecta, el equilibrio de mercado maximiza el excedente total y es
eficiente en el sentido de Pareto: no existe otra asignación que mejore a alguien sin
empeorar a otro.
\end{teorema}
```

La intuición: en el equilibrio, la valoración del último comprador coincide con el coste
del último productor. Cualquier unidad adicional costaría más de lo que vale, y cualquier
unidad no producida valía más de lo que costaba.

```{=latex}
\begin{anotacion}
\textbf{Eficiencia no es equidad.} El teorema no dice nada sobre el reparto: una
asignación en la que una persona lo tiene todo puede ser eficiente en el sentido de
Pareto. La equidad exige un criterio distinto, y es materia del capítulo sobre el papel
del Estado.
\end{anotacion}
```

### Pérdida de eficiencia

Cualquier desviación del equilibrio competitivo reduce el excedente total. La diferencia
se llama **pérdida irrecuperable de eficiencia**.

| Intervención | Efecto |
| --- | --- |
| Precio máximo por debajo del equilibrio | escasez, y pérdida de eficiencia |
| Precio mínimo por encima | excedente no vendido, y pérdida |
| Impuesto por unidad | reduce la cantidad, y genera pérdida |
| Cuota de producción | ídem |

En el caso del impuesto, **quién lo paga no depende de a quién se le exija legalmente**
sino de las elasticidades: la carga recae sobre el lado más inelástico del mercado, que
es el que menos puede reaccionar cambiando de comportamiento.

## Ejercicios

```{=latex}
\begin{ejercicio}
Una empresa competitiva tiene $CT = Q^2 + 2Q + 25$ y el precio de mercado es 12. Hallar
su producción óptima, su beneficio, y decir si a largo plazo entrarán empresas.
\end{ejercicio}

\begin{solucion}
$CMg = 2Q+2 = 12$ da $Q^{*} = 5$. Ingresos $60$, costes $25+10+25 = 60$, beneficio
\textbf{cero}.

\medskip
El coste medio en $Q=5$ es $60/5 = 12$, igual al precio: la empresa está en el mínimo de
su coste medio y en el equilibrio de largo plazo. No entrarán ni saldrán empresas.
\end{solucion}

\begin{ejercicio}
En un mercado con demanda $Q_d = 100-2P$ y oferta $Q_s = 3P$, hallar el equilibrio y los
excedentes.
\end{ejercicio}

\begin{solucion}
$100-2P = 3P$ da $P^{*} = 20$ y $Q^{*} = 60$.

\medskip
La demanda corta el eje de precios en 50, así que el excedente del consumidor es
$\tfrac12\cdot60\cdot(50-20) = 900$. La oferta parte del origen, así que el del productor
es $\tfrac12\cdot60\cdot20 = 600$. El excedente total es 1500.
\end{solucion}

\begin{ejercicio}
Se establece un impuesto de 5 por unidad sobre los vendedores del mercado anterior.
¿Quién soporta la carga?
\end{ejercicio}

\begin{solucion}
La oferta pasa a $Q_s = 3(P-5)$, y el nuevo equilibrio resuelve $100-2P = 3P-15$, de
donde $P = 23$ y $Q = 54$. El comprador paga 23 en vez de 20, así que soporta 3 de los 5;
el vendedor recibe 18 netos y soporta 2.

\medskip
La carga se reparte según las elasticidades: aquí la demanda es menos elástica en el
equilibrio, y por eso el comprador carga con la mayor parte. El resultado \textbf{no
depende} de que el impuesto se exija legalmente al vendedor.
\end{solucion}
```

El modelo de competencia perfecta y el análisis del excedente están desarrollados en
\cite{pindyck2018} y \cite{krugman2013}, con un tratamiento crítico de sus supuestos en
\cite{guerrien2008}.
