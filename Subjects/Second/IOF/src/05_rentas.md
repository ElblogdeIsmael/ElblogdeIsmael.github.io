# Valoración de rentas

Tema 5 del programa. Rentas constantes, variables en progresión geométrica y aritmética,
temporales y perpetuas, pospagables y prepagables, inmediatas y diferidas, y fraccionadas.

## Concepto y clasificación

```{=latex}
\begin{definicion}[Renta]
Sucesión de capitales financieros con vencimientos regulares. Valorarla es sustituirla por
un capital único equivalente en un instante dado.
\end{definicion}
```

| Criterio | Tipos |
| --- | --- |
| Cuantía | **constante** o variable |
| Duración | **temporal** ($n$ términos) o perpetua |
| Vencimiento | **pospagable** (final de periodo) o prepagable (principio) |
| Momento de valoración | inmediata, diferida o anticipada |
| Frecuencia | anual o fraccionada |

| Valor | Qué es |
| --- | --- |
| **Valor actual $V_0$** | valor de todos los términos en el origen |
| **Valor final $V_n$** | valor de todos los términos al vencimiento del último |

$$V_n = V_0\,(1+i)^{n}$$

```{=latex}
\begin{center}
\begin{tikzpicture}[>=stealth, scale=1]
\draw[->, thick] (0,0) -- (10,0) node[right] {$t$};
\foreach \x/\l in {0/0, 2/1, 4/2, 6/3, 9.2/n} {
  \draw (\x,-0.12) -- (\x,0.12);
  \node[font=\scriptsize, below=2pt] at (\x,0) {\l};
}
\foreach \x in {2, 4, 6, 9.2} {
  \draw[->, thick] (\x,0) -- (\x,1.1);
  \node[font=\scriptsize, above] at (\x,1.1) {$C$};
}
\node[font=\scriptsize] at (7.6,0.5) {$\cdots$};
\draw[<-, dashed] (0,0.55) -- (1.8,0.55);
\node[font=\scriptsize, left] at (0,0.55) {$V_0$};
\end{tikzpicture}
\end{center}
```

## Renta constante temporal pospagable

```{=latex}
\begin{proposicion}
El valor actual de $n$ términos de cuantía 1, al tanto $i$, es
$$a_{\overline{n}\rvert i} = \frac{1 - (1+i)^{-n}}{i}$$
y el valor final
$$s_{\overline{n}\rvert i} = \frac{(1+i)^{n} - 1}{i}$$
\end{proposicion}
```

```{=latex}
\begin{demostracion}
El valor actual es la suma de los valores actuales de cada término:
$$a_{\overline{n}\rvert i} = \sum_{k=1}^{n} (1+i)^{-k}$$
Es una progresión geométrica de razón $v = (1+i)^{-1}$ y primer término $v$. Su suma es
$$v\,\frac{1-v^{n}}{1-v} = \frac{(1+i)^{-1}\big(1-(1+i)^{-n}\big)}{1-(1+i)^{-1}}
= \frac{1-(1+i)^{-n}}{i}$$
tras multiplicar numerador y denominador por $(1+i)$.
\end{demostracion}
```

Para una renta de cuantía $C$ basta multiplicar: $V_0 = C\,a_{\overline{n}\rvert i}$.

```{=latex}
\begin{anotacion}
$a_{\overline{n}\rvert i}$ \textbf{crece con $n$ pero está acotado} por $1/i$. Añadir
términos al final de una renta larga apenas cambia su valor actual: al 5\,\%, pasar de 30 a
40 términos sube el valor actual de 15,37 a 17,16, un 12\,\%, mientras que la renta se ha
alargado un tercio. Es la razón de que el valor de un activo esté dominado por sus flujos
próximos.
\end{anotacion}
```

## Renta prepagable

Los términos vencen al principio de cada periodo, así que todos se adelantan un periodo:

$$\ddot{a}_{\overline{n}\rvert i} = a_{\overline{n}\rvert i}\,(1+i),
\qquad \ddot{s}_{\overline{n}\rvert i} = s_{\overline{n}\rvert i}\,(1+i)$$

**Multiplicar por $(1+i)$ es todo el cambio**, y conviene recordarlo así en lugar de aprender
una fórmula nueva. El alquiler es el ejemplo típico de renta prepagable; la cuota de un
préstamo, de renta pospagable.

## Renta diferida y anticipada

| Caso | Valor en el origen |
| --- | --- |
| **Diferida** $d$ periodos | $V_0 = a_{\overline{n}\rvert i}\,(1+i)^{-d}$ |
| **Anticipada** $h$ periodos | $V_0 = a_{\overline{n}\rvert i}\,(1+i)^{h}$ |

El diferimiento se resuelve valorando la renta en el instante anterior a su primer término y
trasladando ese valor. **No hay fórmula nueva: hay un traslado.**

## Rentas perpetuas

$$a_{\overline{\infty}\rvert i} = \frac{1}{i}, \qquad
\ddot{a}_{\overline{\infty}\rvert i} = \frac{1+i}{i}$$

```{=latex}
\begin{proposicion}
El valor final de una renta perpetua \textbf{no existe}: no hay último término al que
trasladar los capitales.
\end{proposicion}
```

Aparecen en la valoración de acciones con dividendo estable y en la deuda perpetua. Su
sencillez las hace útiles como aproximación de rentas muy largas.

## Rentas variables en progresión geométrica

Los términos son $C, Cq, Cq^{2}, \dots, Cq^{n-1}$.

```{=latex}
\begin{proposicion}
$$V_0 = C\,\frac{1 - q^{n}(1+i)^{-n}}{1+i-q} \quad (q \neq 1+i),
\qquad V_0 = \frac{n\,C}{1+i} \quad (q = 1+i)$$
\end{proposicion}
```

**El caso $q = 1+i$ es el que se olvida**, y aplicar la fórmula general en él da una división
por cero. Sucede cuando el crecimiento de los términos iguala al tipo de valoración.

Para la perpetua, con $q < 1+i$:

$$V_0 = \frac{C}{1+i-q}$$

```{=latex}
\begin{anotacion}
Esta última expresión es el \textbf{modelo de Gordon} de valoración de acciones. Escrito con
la tasa de crecimiento $g = q-1$ queda $V_0 = C/(i-g)$, y muestra por qué el modelo es tan
sensible: si $g$ se acerca a $i$, el valor tiende a infinito. Una diferencia de dos décimas
en la estimación del crecimiento puede duplicar la valoración.
\end{anotacion}
```

## Rentas variables en progresión aritmética

Los términos son $C, C+h, C+2h, \dots, C+(n-1)h$.

$$V_0 = \Big(C + \frac{h}{i} + h\,n\Big)a_{\overline{n}\rvert i} - \frac{h\,n}{i}$$

Y la perpetua, con $h>0$:

$$V_0 = \frac{C}{i} + \frac{h}{i^{2}}$$

**El segundo sumando es lo que aporta el crecimiento**, y depende de $i^{2}$: con tipos
bajos, un crecimiento aritmético pequeño tiene un peso desproporcionado en el valor.

## Rentas fraccionadas

Los términos vencen $k$ veces por periodo. Se resuelve pasando el tanto a la frecuencia de
los términos:

| Paso | Qué se hace |
| --- | --- |
| 1 | obtener el tanto equivalente $i_k = (1+i)^{1/k}-1$ |
| 2 | contar los términos: $n\cdot k$ |
| 3 | aplicar la fórmula habitual con $i_k$ y $nk$ |

```{=latex}
\begin{anotacion}
El error frecuente es usar $i/k$ en lugar de $(1+i)^{1/k}-1$. Con un 12\,\% anual y términos
mensuales, $i/k$ da un 1\,\% frente al 0,9489\,\% de $(1+i)^{1/12}-1$: sobre una renta de 240 términos la
diferencia en el valor actual supera el 4\,\%. Salvo que el enunciado dé un \textbf{tanto
nominal}, en cuyo caso $J_k/k$ sí es el tanto del subperiodo por definición.
\end{anotacion}
```

## Resumen

| Renta | Valor actual |
| --- | --- |
| Constante temporal pospagable | $C\,a_{\overline{n}\rvert i}$ |
| Constante temporal prepagable | $C\,a_{\overline{n}\rvert i}(1+i)$ |
| Constante perpetua pospagable | $C/i$ |
| Geométrica temporal | $C\,\dfrac{1-q^{n}(1+i)^{-n}}{1+i-q}$ |
| Geométrica perpetua | $C/(1+i-q)$ |
| Aritmética perpetua | $C/i + h/i^{2}$ |

## Ejercicios

```{=latex}
\begin{ejercicio}
Hallar el valor actual y el valor final de una renta de 3000 euros anuales durante 12 años,
pospagable, al 6\,\%.
\end{ejercicio}

\begin{solucion}
$$a_{\overline{12}\rvert 0{,}06} = \frac{1-1{,}06^{-12}}{0{,}06} = 8{,}38384$$
$V_0 = 3000\cdot8{,}38384 = 25\,151{,}52$.

\medskip
$$s_{\overline{12}\rvert 0{,}06} = \frac{1{,}06^{12}-1}{0{,}06} = 16{,}86994$$
$V_{12} = 3000\cdot16{,}86994 = 50\,609{,}82$. Comprobación:
$25\,151{,}52\cdot1{,}06^{12} = 50\,609{,}82$.
\end{solucion}

\begin{ejercicio}
Un alquiler de 700 euros mensuales se paga por adelantado durante 5 años. Valorarlo al
inicio, con un tanto efectivo anual del 4\,\%.
\end{ejercicio}

\begin{solucion}
Tanto mensual equivalente: $i_{12} = 1{,}04^{1/12}-1 = 0{,}0032737$. Términos: 60.
$$a_{\overline{60}\rvert} = \frac{1-1{,}0032737^{-60}}{0{,}0032737} = 54{,}3305$$
Prepagable: $54{,}3305\cdot1{,}0032737 = 54{,}5083$.

\medskip
$V_0 = 700\cdot54{,}5083 = 38\,155{,}81$ euros.
\end{solucion}

\begin{ejercicio}
Una acción reparte un dividendo de 2 euros que se espera crezca un 3\,\% anual
indefinidamente. Con una rentabilidad exigida del 8\,\%, hallar su valor teórico y ver qué
ocurre si el crecimiento esperado sube al 6\,\%.
\end{ejercicio}

\begin{solucion}
$$V_0 = \frac{2}{0{,}08-0{,}03} = 40 \text{ euros}$$
Con $g = 0{,}06$: $V_0 = 2/0{,}02 = 100$ euros. Duplicar la estimación de crecimiento
multiplica el valor por 2,5. El modelo es aritméticamente correcto y prácticamente muy
frágil, y por eso solo se usa con crecimientos claramente inferiores a la rentabilidad
exigida.
\end{solucion}

\begin{ejercicio}
Se quiere disponer de 60\,000 euros dentro de 15 años. ¿Qué imposición anual pospagable hace
falta al 5\,\%?
\end{ejercicio}

\begin{solucion}
$$s_{\overline{15}\rvert 0{,}05} = \frac{1{,}05^{15}-1}{0{,}05} = 21{,}57856$$
$$C = \frac{60\,000}{21{,}57856} = 2780{,}47 \text{ euros anuales}$$
Se aportan $15\cdot2780{,}47 = 41\,707$ euros y se reciben 60\,000: los 18\,293 restantes son
intereses.
\end{solucion}
```

La valoración de rentas está desarrollada en \cite{frias2025}, con su versión en inglés en
\cite{frias2025en}.
