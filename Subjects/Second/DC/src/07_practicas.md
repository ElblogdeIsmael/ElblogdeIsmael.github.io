# Temario práctico

Trabajo autónomo por tema, análisis de casos, trabajo en grupo y simulación de marketing.
Este capítulo recoge el guion de trabajo y los casos resueltos.

## Guion de análisis de casos

| Paso | Contenido |
| --- | --- |
| 1 | identificar la decisión que hay que tomar |
| 2 | separar los hechos de los supuestos del enunciado |
| 3 | aplicar los marcos del tema correspondiente |
| 4 | **cuantificar** lo cuantificable |
| 5 | elegir con criterio explícito |
| 6 | indicar los riesgos y qué dato haría cambiar la decisión |

**El paso 4 es el que separa un análisis de una opinión.** Casi toda decisión comercial
admite un cálculo aproximado, y ese cálculo suele descartar por sí solo la mitad de las
alternativas.

## Caso 1. Dimensionar un mercado

Una empresa quiere lanzar un servicio de suscripción de comida para mascotas en una
provincia de 900 000 habitantes. El 32 % de los hogares tiene perro o gato, el tamaño medio
del hogar es de 2,5 personas, el 55 % de esos hogares compra pienso de gama media o alta y
la empresa cubrirá inicialmente el 30 % del territorio.

```{=latex}
\begin{ejercicio}
Estimar los niveles de mercado y la facturación potencial con un gasto medio de 45 euros
mensuales y una penetración objetivo del 6\,\% del mercado meta.
\end{ejercicio}

\begin{solucion}
Hogares: $900\,000/2{,}5 = 360\,000$. Con mascota: $360\,000\cdot0{,}32 = 115\,200$, que es el
mercado potencial.

\medskip
Disponible, los que compran gama media o alta: $115\,200\cdot0{,}55 = 63\,360$.

\medskip
Meta, con el 30\,\% del territorio cubierto: $63\,360\cdot0{,}30 = 19\,008$.

\medskip
Clientes objetivo: $19\,008\cdot0{,}06 = 1140$. Facturación anual:
$1140\cdot45\cdot12 = 615\,600$ euros.

\medskip
La cifra es sensible a los tres filtros: si el porcentaje de gama media y alta fuese del
40\,\% en lugar del 55\,\%, la facturación caería a 448\,000. \textbf{Conviene presentar la
estimación con un rango}, no con un número único, y decir de qué supuesto depende cada
extremo.
\end{solucion}
```

## Caso 2. Cartera de productos y canibalización

```{=latex}
\begin{ejercicio}
Una marca de café vende 100\,000 unidades de su referencia clásica a 4 euros, con un coste
variable de 2,40. Lanza una versión premium a 6 euros con coste variable de 3,90 y vende
25\,000 unidades, pero la clásica cae a 88\,000. Valorar el lanzamiento.
\end{ejercicio}

\begin{solucion}
Margen antes: $100\,000\cdot1{,}60 = 160\,000$ euros.

\medskip
Margen después: clásica $88\,000\cdot1{,}60 = 140\,800$; premium
$25\,000\cdot2{,}10 = 52\,500$. Total \textbf{193\,300}.

\medskip
La ganancia neta es de 33\,300 euros. De las 25\,000 unidades de la premium, 12\,000 son
canibalización —casi la mitad—, pero como su margen unitario es mayor, incluso las unidades
robadas a la propia gama aportan $12\,000\cdot(2{,}10-1{,}60) = 6000$ euros.

\medskip
La conclusión se invertiría si el margen de la premium fuese menor que el de la clásica: ahí
cada unidad canibalizada destruiría margen y el lanzamiento solo compensaría con volumen
verdaderamente incremental.
\end{solucion}
```

## Caso 3. Decisión de precio

```{=latex}
\begin{ejercicio}
Un fabricante vende un electrodoméstico a 220 euros, con coste variable de 130 y costes
fijos de 1\,800\,000. Vende 40\,000 unidades. Evaluar tres propuestas: subir el precio un
5\,\% perdiendo un 8\,\% de unidades; bajarlo un 5\,\% ganando un 12\,\%; o mantener el
precio invirtiendo 300\,000 euros en publicidad que aportaría un 10\,\% más de ventas.
\end{ejercicio}

\begin{solucion}
Situación actual: margen unitario 90, margen total 3\,600\,000, beneficio 1\,800\,000.

\medskip
\begin{center}
\begin{tabular}{lrrrr}
\toprule
Escenario & Precio & Unidades & Margen total & Beneficio \\
\midrule
Actual & 220 & 40\,000 & 3\,600\,000 & 1\,800\,000 \\
Subida 5\,\% & 231 & 36\,800 & 3\,716\,800 & \textbf{1\,916\,800} \\
Bajada 5\,\% & 209 & 44\,800 & 3\,539\,200 & 1\,739\,200 \\
Publicidad & 220 & 44\,000 & 3\,960\,000 & 1\,860\,000 \\
\bottomrule
\end{tabular}
\end{center}

\medskip
Gana la subida de precio. La bajada destruye beneficio: con un margen del 40,9\,\% sobre
precio, una rebaja del 5\,\% exige un 13,9\,\% más de volumen y solo se prevé un 12\,\%.

\medskip
La publicidad mejora la situación actual y queda por debajo de la subida, pero tiene una
ventaja que la tabla no recoge: construye marca y su efecto dura más de un ejercicio,
mientras que la subida de precio agota su recorrido en cuanto la competencia no la sigue.
\end{solucion}
```

## Caso 4. Diseño de canal

```{=latex}
\begin{ejercicio}
Un fabricante de muebles vende hoy a través de 120 tiendas independientes con un margen del
45\,\% sobre PVP. Estudia abrir tienda propia en línea con el mismo PVP. Los costes anuales
de la operación en línea serían de 700\,000 euros y se estima captar un 15\,\% de las ventas
actuales, que son de 12 millones a PVP. Valorar.
\end{ejercicio}

\begin{solucion}
Ventas a PVP: 12 millones, de los que el fabricante ingresa el 55\,\%, es decir 6,6 millones.

\medskip
El 15\,\% desviado a la web son 1,8 millones a PVP. Por el canal actual le habrían dejado
$1{,}8\cdot0{,}55 = 990\,000$; por la web ingresa el PVP completo, 1,8 millones. Diferencia:
810\,000 euros.

\medskip
Menos los 700\,000 de coste, el resultado es \textbf{+110\,000} euros. Es positivo y muy
ajustado, y no incluye la reacción del canal.

\medskip
Ese es el punto decisivo: 120 tiendas que ven al fabricante vender directamente al mismo
precio pueden reducir exposición, promocionar marcas rivales o retirar la enseña. Basta que
las ventas del canal físico caigan un 2\,\% adicional por esa reacción —204\,000 euros de
ingreso perdido— para que la operación destruya valor.

\medskip
Salida razonable: web con surtido diferenciado, recogida en tienda con comisión para el
establecimiento, y comunicación previa al canal explicando el reparto de papeles.
\end{solucion}
```

## Caso 5. Presupuesto de comunicación

```{=latex}
\begin{ejercicio}
Una marca quiere elevar la notoriedad espontánea del 12\,\% al 20\,\% en su público objetivo,
que son 800\,000 personas. La experiencia del sector indica que hace falta alcanzar al
70\,\% con una frecuencia mínima de 5. El CPM del medio elegido es de 9 euros. Presupuestar
por objetivos y tareas.
\end{ejercicio}

\begin{solucion}
Personas a alcanzar: $800\,000\cdot0{,}70 = 560\,000$.

\medskip
Impactos necesarios: $560\,000\cdot5 = 2\,800\,000$.

\medskip
Coste: $2\,800\,000/1000\cdot9 = 25\,200$ euros de compra de medios, a los que hay que sumar
producción creativa y gestión.

\medskip
Los GRP son $70\cdot5 = 350$. Este método parte del objetivo y llega al coste, que es lo
contrario del porcentaje sobre ventas. Su exigencia está en el dato de partida: si la
frecuencia mínima de 5 no está bien estimada, todo el presupuesto lo hereda. Por eso se
contrasta con el histórico propio de campañas anteriores antes de aprobarlo.
\end{solucion}
```

## Caso 6. Diagnóstico con la descomposición de cuota

```{=latex}
\begin{ejercicio}
Dos marcas pierden un punto de cuota. En A la penetración cae del 25\,\% al 21\,\% y la
fidelidad se mantiene; en B la penetración se mantiene y la fidelidad cae del 35\,\% al
30\,\%. Proponer una acción distinta para cada una.
\end{ejercicio}

\begin{solucion}
\emph{Marca A}: pierde compradores. El problema está en la captación o en la disponibilidad,
así que las palancas son notoriedad, prueba —muestras, promoción de primera compra— y
cobertura de distribución. Conviene comprobar antes si ha perdido puntos de venta, porque es
la causa más frecuente y la más barata de corregir.

\medskip
\emph{Marca B}: conserva compradores que le dedican menos gasto. El problema es de
repetición: surtido incompleto, roturas de stock, o un competidor que ha mejorado su relación
calidad-precio. Las palancas son fidelización, gama y disponibilidad en el lineal.

\medskip
La misma pérdida de cuota exige inversiones opuestas, y ese es el motivo de descomponerla
antes de decidir.
\end{solucion}
```

## Trabajo en grupo: plan de marketing

| Apartado | Entregable |
| --- | --- |
| 1 | análisis de la situación con fuentes citadas |
| 2 | DAFO que termine en implicaciones, no en listas |
| 3 | segmentación, público objetivo y declaración de posicionamiento |
| 4 | las cuatro variables, con la comprobación de coherencia entre ellas |
| 5 | presupuesto y cuenta de resultados prevista |
| 6 | **indicadores, calendario y responsables** |

## Simulación de marketing

Los programas de simulación reproducen varios periodos de decisión en un mercado con
competidores. Las decisiones habituales por periodo son precio, producción, inversión en
I+D, publicidad, fuerza de ventas y distribución.

| Error frecuente en la simulación | Por qué ocurre |
| --- | --- |
| **Bajar precio en la primera ronda** | parece la vía rápida a la cuota y desencadena una guerra |
| **Ignorar el inventario** | producir de más consume caja sin generar margen |
| Cambiar de estrategia cada periodo | ninguna llega a dar resultado |
| **Optimizar cuota sin mirar el margen** | se gana el mercado y se pierde el ejercicio |
| No leer los informes de mercado | se decide sin la información que el propio juego facilita |

```{=latex}
\begin{anotacion}
La lección que la simulación enseña mejor que ningún caso escrito es la de la interacción:
las decisiones propias solo producen resultado en función de lo que hagan los demás. Una
subida de precio es acertada o desastrosa según la sigan o no, y eso no se puede resolver
sobre el papel. \textbf{Conviene decidir qué se hará en cada respuesta posible antes de mover
ficha}, que es exactamente lo que pide el análisis de reacción del tema 3.
\end{anotacion}
```

Los casos siguen el planteamiento de \cite{gonzalez2005} y \cite{munuera2007}, con el marco
teórico de \cite{kotler2018dc}.
