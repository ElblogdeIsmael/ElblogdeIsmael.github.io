# Leyes simples

Tema 2 del programa. Capitalización simple a tanto vencido, descuento racional, descuento
comercial, tantos equivalentes y sustitución de capitales.

## Capitalización simple

```{=latex}
\begin{definicion}
Los intereses se calculan siempre sobre el capital inicial y \textbf{no se acumulan} para
generar nuevos intereses.
\end{definicion}
```

$$C_n = C_0\,(1 + i\,n)$$

| Magnitud | Expresión |
| --- | --- |
| Interés total | $I = C_0\,i\,n$ |
| Interés de cada periodo | $C_0\,i$, constante |
| Capital final | $C_0(1+in)$ |

**Los intereses periódicos son constantes**, y esa es toda la diferencia con el régimen
compuesto: el capital que genera intereses no crece.

```{=latex}
\begin{anotacion}
La capitalización simple \textbf{no es escindible}. Capitalizar de 0 a 2 años da
$C_0(1+2i)$; hacerlo en dos tramos da $C_0(1+i)(1+i) = C_0(1+2i+i^2)$, que es mayor. La
diferencia es el término $i^2$, despreciable con plazos y tipos pequeños, y por eso el
régimen simple se usa solo a corto plazo.
\end{anotacion}
```

Y la comparación entre los dos regímenes:

| Plazo | Cuál da mayor valor final |
| --- | --- |
| $n < 1$ | **simple** |
| $n = 1$ | coinciden |
| $n > 1$ | **compuesto** |

```{=latex}
\begin{center}
\begin{tikzpicture}
\begin{axis}[
  width=9.4cm, height=5.4cm, axis lines=left,
  xlabel={$n$ (años)}, ylabel={$C_n$},
  xmin=0, xmax=6, ymin=95, ymax=200,
  tick label style={font=\scriptsize}, label style={font=\small}, samples=120,
  legend style={font=\scriptsize, draw=none, at={(0.02,0.98)}, anchor=north west},
]
\addplot[thick, domain=0:6] {100*(1+0.1*x)};
\addlegendentry{simple}
\addplot[dashed, domain=0:6] {100*1.1^x};
\addlegendentry{compuesto}
\end{axis}
\end{tikzpicture}
\end{center}
```

## Descuento simple

Es la operación inversa: obtener hoy el valor de un capital futuro. Hay dos leyes
distintas, y confundirlas es el error más frecuente del tema.

### Descuento racional o matemático

Es el inverso exacto de la capitalización simple:

$$C_0 = \frac{C_n}{1+i\,n}, \qquad D_r = C_n - C_0 = \frac{C_n\,i\,n}{1+i\,n}$$

El descuento se calcula sobre el **valor actual**, que es el capital que realmente se
adelanta.

### Descuento comercial

El descuento se calcula sobre el **valor nominal**:

$$C_0 = C_n\,(1 - d\,n), \qquad D_c = C_n\,d\,n$$

Es el que usa la banca en el descuento de efectos, porque es más sencillo de calcular y le
resulta más favorable.

```{=latex}
\begin{proposicion}
Para el mismo tanto y plazo, $D_c > D_r$: el descuento comercial siempre es mayor. Y la
ley comercial \textbf{no está definida} para $n \ge 1/d$, porque daría un valor actual
negativo.
\end{proposicion}
```

La relación entre los dos tantos, para que las dos leyes den el mismo resultado:

$$d = \frac{i}{1+i\,n}, \qquad i = \frac{d}{1-d\,n}$$

```{=latex}
\begin{ejemplo}
Un efecto de 10\,000 euros a 90 días con un tanto del 8\,\%, con año comercial de 360
días:

\medskip
\emph{Racional}: $C_0 = 10\,000/(1+0{,}08\cdot90/360) = 10\,000/1{,}02 = 9803{,}92$, con
descuento de 196,08.

\medskip
\emph{Comercial}: $C_0 = 10\,000\,(1-0{,}08\cdot0{,}25) = 9800$, con descuento de 200.

\medskip
La banca cobra 3,92 euros más por el mismo adelanto. El tanto de interés equivalente al
8\,\% de descuento comercial es $i = 0{,}08/(1-0{,}02) = 0{,}0816$, un 8,16\,\%.
\end{ejemplo}
```

```{=latex}
\begin{anotacion}
El \textbf{año comercial} de 360 días frente al natural de 365 no es un detalle. Calcular
intereses con 360 días en el denominador y cobrarlos por los días naturales transcurridos
eleva el tipo efectivo en torno a un 1,4\,\%. Hay que comprobar siempre qué base de cálculo
usa el enunciado o el contrato.
\end{anotacion}
```

## Tantos equivalentes

Al cambiar la unidad de medida del tiempo:

| Régimen | Relación |
| --- | --- |
| **Simple** | $i_k = i/k$: los tantos son **proporcionales** |
| Compuesto | $(1+i_k)^k = 1+i$: son equivalentes, no proporcionales |

**En régimen simple, el tanto mensual es exactamente la doceava parte del anual**, y esa
proporcionalidad es lo que lo hace cómodo. En compuesto no ocurre, y de ahí la distinción
entre tanto nominal y efectivo del tema 4.

## Sustitución de capitales

Sustituir un conjunto de capitales por otro equivalente, planteando la ecuación de
equivalencia en un instante de referencia.

| Problema | Qué se busca |
| --- | --- |
| **Vencimiento común** | la fecha en que se pagaría un capital único **dado** |
| **Vencimiento medio** | la fecha de un capital único igual a la **suma** de los originales |

```{=latex}
\begin{proposicion}[Vencimiento medio, descuento comercial]
$$n^{*} = \frac{\sum C_j\,n_j}{\sum C_j}$$
Es la media aritmética de los vencimientos ponderada por las cuantías, y \textbf{no depende
del tanto}.
\end{proposicion}
```

Que no dependa del tanto es una propiedad muy cómoda y **exclusiva del descuento
comercial**: con descuento racional el vencimiento medio sí depende de $d$.

```{=latex}
\begin{ejemplo}
Tres capitales: 2000 a 30 días, 3000 a 60 y 5000 a 90.

\medskip
$$n^{*} = \frac{2000\cdot30 + 3000\cdot60 + 5000\cdot90}{10\,000}
= \frac{60\,000+180\,000+450\,000}{10\,000} = 69 \text{ días}$$

\medskip
Pagar 10\,000 euros a los 69 días equivale a pagar los tres capitales en sus fechas. El
resultado está más cerca de 90 que de 30 porque el capital mayor vence al final.
\end{ejemplo}
```

## Anexo: capitalización simple a tanto anticipado

$$C_n = \frac{C_0}{1-d\,n}$$

Es la inversa del descuento comercial. Se incluye por simetría formal y **apenas tiene uso
práctico**: las operaciones reales de capitalización se pactan a tanto vencido.

## Comparación de las leyes simples

| Ley | Fórmula | Se calcula sobre | Uso real |
| --- | --- | --- | --- |
| Capitalización a tanto vencido | $C_0(1+in)$ | capital inicial | depósitos a corto |
| Descuento racional | $C_n/(1+in)$ | valor actual | teórico y comparativo |
| **Descuento comercial** | $C_n(1-dn)$ | valor nominal | **descuento bancario de efectos** |
| Capitalización a tanto anticipado | $C_0/(1-dn)$ | valor final | testimonial |

## Ejercicios

```{=latex}
\begin{ejercicio}
Un capital de 5000 euros se coloca al 6\,\% simple durante 8 meses. Hallar el capital
final y los intereses.
\end{ejercicio}

\begin{solucion}
$n = 8/12 = 2/3$ años.
$$C_n = 5000\,(1 + 0{,}06\cdot\tfrac{2}{3}) = 5000\cdot1{,}04 = 5200$$
Intereses: 200 euros. En régimen compuesto habrían sido
$5000(1{,}06^{2/3}-1) = 197{,}5$: algo menos, porque para plazos inferiores al año el
régimen simple da más.
\end{solucion}

\begin{ejercicio}
Se descuenta un efecto de 20\,000 euros a 120 días al 9\,\% de descuento comercial, con
año de 360 días. ¿Cuánto se recibe y cuál es el tanto de interés equivalente?
\end{ejercicio}

\begin{solucion}
$D_c = 20\,000\cdot0{,}09\cdot\tfrac{120}{360} = 600$, así que se reciben 19\,400.

\medskip
El tanto de interés equivalente resuelve
$19\,400\,(1+i\cdot\tfrac13) = 20\,000$, de donde $i = 0{,}0928$: un 9,28\,\%, por encima
del 9\,\% nominal de descuento. Descontar al 9\,\% es pedir prestado al 9,28\,\%.
\end{solucion}

\begin{ejercicio}
Sustituir por un capital único, con vencimiento medio y descuento comercial, los capitales
de 1000 a 60 días, 4000 a 120 y 5000 a 180.
\end{ejercicio}

\begin{solucion}
$$n^{*} = \frac{1000\cdot60 + 4000\cdot120 + 5000\cdot180}{10\,000}
= \frac{60\,000+480\,000+900\,000}{10\,000} = 144 \text{ días}$$
Un pago único de 10\,000 euros a los 144 días. Nótese que la respuesta no ha necesitado el
tanto de descuento, que es la propiedad característica del vencimiento medio con ley
comercial.
\end{solucion}
```

Las leyes financieras simples están desarrolladas en \cite{frias2025}, con su versión en
inglés en \cite{frias2025en}.
