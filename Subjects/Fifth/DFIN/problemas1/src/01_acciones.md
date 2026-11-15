# Valoración de acciones: VAOC y dividendos por fases

Es **el problema que cae casi siempre**: parciales de 2018-19, 2024-25 y 2025, ordinarias de 2024, 2025 y 2026, y los exámenes de 2012. Si solo puedes dominar un tipo, es este.

## Cómo reconocerlo

Aparece alguna de estas expresiones: «BPA», «tasa de reparto» o «de retención», «reinvierte el X % de sus beneficios», «ROE» o «rentabilidad de las reinversiones», «oportunidades de crecimiento», «precio de la acción», «PER», «la competencia hará que la ROE descienda».

Hay **dos subtipos** y conviene distinguirlos en el primer minuto:

- **Subtipo A: política constante por fases.** La empresa reinvierte cada año un porcentaje fijo con un ROE fijo durante una fase, y después cambia. Se resuelve con **Gordon por tramos**: $g = b\cdot ROE$ en cada fase. Caso: parcial de 2018-19.
- **Subtipo B: reinversiones puntuales.** En años concretos («en el año 2 invertirá el 60 %…») se hace un proyecto, a veces de duración limitada («durante 3 años»). Se resuelve con la **tabla de reinversiones** año a año. Caso: parcial de noviembre de 2025.

## La idea de fondo (una sola fórmula)

$$P_0 = \underbrace{\frac{BPA_1}{r}}_{\text{valor sin crecimiento}} + \underbrace{VAOC}_{\text{valor del crecimiento}} \qquad VAOC = \sum_t \frac{VAN_t}{(1+r)^t}$$

Cada reinversión es un **proyecto**: en el año $t$ se renuncia a un dividendo (capital $= b_t\cdot BPA_t$) a cambio de un flujo $ROE \times \text{capital}$. Su VAN, valorado en $t$:

$$VAN_t = -\text{capital} + \frac{ROE\cdot\text{capital}}{r} \;\;(\text{perpetuo}) \qquad VAN_t = -\text{capital} + ROE\cdot\text{capital}\cdot a_{\overline{n}|r} \;\;(n \text{ años})$$

Consecuencias que preguntan siempre en el apartado de comentario:

- $ROE > r$: la reinversión **crea valor** ($VAN > 0$).
- $ROE = r$: **no crea ni destruye** valor ($VAN = 0$); el precio es el mismo que repartiendo todo.
- $ROE < r$: **destruye valor**; sería mejor repartir el dividendo.
- Un proyecto de **duración limitada** no devuelve el capital: aunque $ROE$ sea parecido a $r$, suele destruir valor.

## Plan de ataque

1. **Saca $BPA_1$.** A veces lo dan; a veces hay que calcularlo: $BPA_1 = ROE\times\text{capital contable por acción}$, o $BPA_1 = DIV_1/(1-b)$.
2. **Construye la tabla año a año** hasta que todo se estabilice: capital reinvertido, BPA y DIV.
    - $BPA_{t+1} = BPA_t + ROE\cdot(b_t\,BPA_t)$ mientras la reinversión sea perpetua.
    - $DIV_t = (1-b_t)\,BPA_t$.
3. **Precio por dividendos:** descuenta los dividendos de la fase irregular y añade el **precio terminal** al final de esa fase:
    - si desde el año $T+1$ crecen a $g$ constante: $P_T = DIV_{T+1}/(r-g)$;
    - si desde el año $T+1$ se reparte todo y el BPA es constante: $P_T = BPA_{T+1}/r$.
4. **Precio por VAOC:** calcula el $VAN_t$ de cada reinversión, descuéntalo a $t=0$ y suma: $P_0 = BPA_1/r + VAOC$.
5. **Comprueba** que los dos métodos dan lo mismo. Si no, el error está casi siempre en el precio terminal o en un año desplazado.
6. **Comenta** con la regla $ROE$ frente a $r$.

## Caso 1A. Parcial 1 de 2018-19, problema 1 (3,5 puntos)

> La empresa «C» tiene una rentabilidad sobre el capital invertido (ROE) del 14 % y una tasa de reparto de dividendos del 50 %. El capital contable por acción es actualmente de 65 euros. Suponga que la ROE y la tasa de reparto de dividendos se mantienen constantes durante los próximos 2 años. Después de esa fecha, la competencia hará que la ROE descienda al 11,5 % y la tasa de reparto de dividendos aumentará hasta el 70 %. El coste de capital es del 11,5 %.
>
> A) ¿Cuáles serán los BPA y los dividendos esperados en los años 1, 2, 3 y 4? (1,5 puntos)
> B) Calcule el precio de cotización actual de la acción: I. Con el método del descuento de dividendos (0,75). II. Con el método del VAOC (0,75).
> C) Comente los resultados obtenidos (0,5).

**Lectura del enunciado.** Subtipo A con dos fases:

- **Fase 1 (años 1 y 2):** $b = 0{,}5$ y $ROE = 14\,\text{\%}$, luego $g_1 = 0{,}5\times0{,}14 = 7\,\text{\%}$.
- **Fase 2 (desde el año 3):** $b = 0{,}3$ y las **reinversiones nuevas** rinden el 11,5 %, luego $g_2 = 0{,}3\times0{,}115 = 3{,}45\,\text{\%}$.

> **Clave de interpretación.** «La ROE desciende» se aplica **solo a las reinversiones nuevas**. El capital invertido hasta el año 2 sigue rindiendo el 14 %. Así lo resuelve la corrección oficial del parcial, y así la tasa $g_2 = 3{,}45\,\text{\%}$ es coherente con la tabla.

**A) BPA y dividendos.**

- Año 1: $BPA_1 = 0{,}14\times65 = 9{,}10$ y $DIV_1 = 0{,}5\times9{,}10 = 4{,}55$. Se reinvierten 4,55.
- Año 2: el capital pasa a $65 + 4{,}55 = 69{,}55$, así que $BPA_2 = 0{,}14\times69{,}55 = 9{,}737$ (es $9{,}10\times1{,}07$). $DIV_2 = 4{,}8685$ y se reinvierten 4,8685.
- Año 3: el capital es $69{,}55 + 4{,}8685 = 74{,}4185$, todo al 14 %: $BPA_3 = 0{,}14\times74{,}4185 = 10{,}4186$. Ahora se reparte el 70 %: $DIV_3 = 7{,}2930$ y se reinvierten $0{,}3\times10{,}4186 = 3{,}1256$ **al 11,5 %**.
- Año 4: $BPA_4 = 10{,}4186 + 0{,}115\times3{,}1256 = 10{,}7780$ y $DIV_4 = 0{,}7\times10{,}7780 = 7{,}5446$.

| Año | 1 | 2 | 3 | 4 |
| :--- | :---: | :---: | :---: | :---: |
| Capital contable al inicio | 65 | 69,55 | 74,4185 | 77,5441 |
| BPA | 9,10 | 9,737 | 10,4186 | 10,7780 |
| Tasa de reparto | 50 % | 50 % | 70 % | 70 % |
| DIV | 4,55 | 4,8685 | 7,2930 | 7,5446 |
| Reinversión | 4,55 | 4,8685 | 3,1256 | 3,2334 |
| Crecimiento del BPA | — | 7 % | 7 % | 3,45 % |

Comprobación del año 4: $7{,}5446/7{,}2930 = 1{,}0345$ ✓, es decir, $g_2 = 3{,}45\,\text{\%}$.

**B.I) Descuento de dividendos.** Desde el año 3 los dividendos crecen al 3,45 % para siempre, así que el precio al final del año 2 es un Gordon:

$$P_2 = \frac{DIV_3}{r - g_2} = \frac{7{,}2930}{0{,}115 - 0{,}0345} = 90{,}60 \text{ €}$$

$$P_0 = \frac{DIV_1}{1{,}115} + \frac{DIV_2 + P_2}{1{,}115^2} = \frac{4{,}55}{1{,}115} + \frac{4{,}8685 + 90{,}60}{1{,}115^2} = 4{,}08 + 76{,}79 = \mathbf{80{,}87} \text{ €}$$

**B.II) VAOC.** Cada reinversión es perpetua:

- Año 1: $VAN_1 = -4{,}55 + \dfrac{0{,}14\times4{,}55}{0{,}115} = -4{,}55 + 5{,}539 = 0{,}9891$.
- Año 2: $VAN_2 = -4{,}8685 + \dfrac{0{,}14\times4{,}8685}{0{,}115} = 1{,}0584$.
- Años 3 y siguientes: $ROE = r = 11{,}5\,\text{\%}$, luego $VAN_t = 0$.

$$VAOC = \frac{0{,}9891}{1{,}115} + \frac{1{,}0584}{1{,}115^2} = 0{,}8871 + 0{,}8513 = 1{,}74 \text{ €}$$

$$P_0 = \frac{BPA_1}{r} + VAOC = \frac{9{,}10}{0{,}115} + 1{,}74 = 79{,}13 + 1{,}74 = \mathbf{80{,}87} \text{ €} \;✓$$

**C) Comentario.** Los dos métodos coinciden, como debe ser. De los 80,87 €, **79,13 € son el valor de los activos actuales** sin crecer y solo **1,74 €** vienen del crecimiento. Solo crean valor las reinversiones de los años 1 y 2 ($ROE = 14\,\text{\%} > r$). A partir del año 3 la empresa sigue creciendo (3,45 %), pero **crecer no crea valor** porque $ROE = r$: el VAN de esas reinversiones es cero. Crecimiento no es lo mismo que creación de valor.

**Extras que preguntan a veces con estos datos:**

- $PER = P_0/BPA_1 = 80{,}87/9{,}10 = 8{,}89$.
- Ratio beneficio-precio: $BPA_1/P_0 = 11{,}25\,\text{\%} < r = 11{,}5\,\text{\%}$. Siempre que $VAOC > 0$, este ratio queda **por debajo** de $r$; con $VAOC = 0$, es igual a $r$.

## Caso 1B. Parcial 1 de noviembre de 2025 (ejercicio II)

> Una empresa espera un BPA de 15 € y contempla dos inversiones. En el año 2 invertirá el 60 % de sus beneficios con un ROE del 6 % durante 3 años. En el año 3 invertirá el 50 % con un ROE del 7 % durante 3 años. $r = 5{,}5\,\text{\%}$. Indicar $P_0$ y si se recomienda el plan.

**Lectura del enunciado.** Subtipo B: dos reinversiones puntuales y **de duración limitada** (3 años). Sin reinversiones, el BPA sería 15 € siempre. Cada proyecto genera flujos los 3 años siguientes a su inversión y después se acaba, **sin devolver el capital**.

\begin{figure}[H]
\centering
\begin{tikzpicture}[x=1.35cm, y=0.75cm, >=latex, font=\footnotesize]
  \draw[->, thick] (0,0) -- (8.6,0);
  \foreach \t in {0,...,7} { \draw (\t,0.12) -- (\t,-0.12) node[below] {$\t$}; }
  \node[below] at (8.4,-0.12) {$\infty$};
  \draw[thick, gray!70!black] (1,1) -- (8.2,1); \node[anchor=east, gray!70!black] at (0.9,1) {$BPA = 15$};
  \draw[->, very thick, red!75!black] (2,-0.6) -- (2,-1.7) node[below, align=center] {$-9$\\(60\,\% de 15)};
  \draw[thick, blue!70!black] (3,2) -- (5,2); \foreach \t in {3,4,5} \fill[blue!70!black] (\t,2) circle (1.5pt);
  \node[anchor=east, blue!70!black] at (2.9,2) {$+0{,}54$ (años 3--5)};
  \draw[->, very thick, red!75!black] (3,-2.6) -- (3,-3.4) node[below, align=center] {$-7{,}77$\\(50\,\% de 15,54)};
  \draw[thick, teal!70!black] (4,3) -- (6,3); \foreach \t in {4,5,6} \fill[teal!70!black] (\t,3) circle (1.5pt);
  \node[anchor=east, teal!70!black] at (3.9,3) {$+0{,}5439$ (años 4--6)};
\end{tikzpicture}
\caption{Reinversiones del parcial de 2025: cada una rinde solo 3 años.}
\end{figure}

**Paso 1. Primera reinversión ($t=2$).**

- Capital: $0{,}6\times BPA_2 = 0{,}6\times15 = 9$.
- Flujo: $0{,}06\times9 = 0{,}54$ en los años 3, 4 y 5.
- $VAN_2 = -9 + 0{,}54\,a_{\overline{3}|0{,}055} = -9 + 0{,}54\times2{,}6979 = \mathbf{-7{,}54}$.

**Paso 2. Segunda reinversión ($t=3$).** Ojo: el BPA del año 3 ya incluye el primer flujo.

- $BPA_3 = 15 + 0{,}54 = 15{,}54$.
- Capital: $0{,}5\times15{,}54 = 7{,}77$. Flujo: $0{,}07\times7{,}77 = 0{,}5439$ en los años 4, 5 y 6.
- $VAN_3 = -7{,}77 + 0{,}5439\times2{,}6979 = \mathbf{-6{,}30}$.

**Paso 3. Tabla de BPA y dividendos.**

| Año | 1 | 2 | 3 | 4 | 5 | 6 | 7 y sig. |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| BPA base | 15 | 15 | 15 | 15 | 15 | 15 | 15 |
| + flujo proyecto 1 | | | 0,54 | 0,54 | 0,54 | | |
| + flujo proyecto 2 | | | | 0,5439 | 0,5439 | 0,5439 | |
| **BPA** | 15 | 15 | 15,54 | 16,0839 | 16,0839 | 15,5439 | 15 |
| − reinversión | | 9 | 7,77 | | | | |
| **DIV** | 15 | 6 | 7,77 | 16,0839 | 16,0839 | 15,5439 | 15 |

**Paso 4. Precio por dividendos.** Desde el año 7 el dividendo es 15 perpetuo, así que $P_6 = 15/0{,}055 = 272{,}73$:

$$P_0 = \frac{15}{1{,}055} + \frac{6}{1{,}055^2} + \frac{7{,}77}{1{,}055^3} + \frac{16{,}0839}{1{,}055^4} + \frac{16{,}0839}{1{,}055^5} + \frac{15{,}5439 + 272{,}73}{1{,}055^6} = \mathbf{260{,}58} \text{ €}$$

**Paso 5. Precio por VAOC.**

$$VAOC = \frac{-7{,}54}{1{,}055^2} + \frac{-6{,}30}{1{,}055^3} = -6{,}78 - 5{,}37 = \mathbf{-12{,}14} \qquad P_0 = \frac{15}{0{,}055} - 12{,}14 = 272{,}73 - 12{,}14 = 260{,}58 \;✓$$

**Paso 6. Recomendación.** **No se recomienda el plan.** Sin él, la acción valdría 272,73 €; con él, 260,58 €. Las dos inversiones tienen VAN negativo por dos motivos: su ROE (6 % y 7 %) apenas supera a $r$ y, sobre todo, **solo rinden 3 años y no recuperan el capital invertido**. La empresa debería repartir esos beneficios.

## Comprobaciones rápidas

- Los dos métodos dan el mismo $P_0$. Si no, revisa el precio terminal y en qué año empieza cada flujo.
- Signo del VAOC: positivo si $ROE > r$ con proyectos perpetuos; negativo si $ROE < r$ o si los proyectos duran poco.
- El precio terminal se calcula con el dividendo **del año siguiente**: $P_T = DIV_{T+1}/(r-g)$, y se descuenta $T$ años, no $T+1$.
- Si $g \ge r$, Gordon no vale: has calculado mal $g$.

## Variantes que ya han caído

**Ordinaria de enero de 2026 (Trank): dos fases, despejar el ROE.** $DIV_1 = 1{,}40$, $r = 11\,\text{\%}$. En la fase 1 (años 1 y 2) se retiene el 90 % al 20 % perpetuo; desde el año 3 se reparte el 80 % y el dividendo crece a tasa constante.

- $BPA_1 = 1{,}40/0{,}1 = 14$; $BPA_2 = 14 + 0{,}2\times12{,}6 = 16{,}52$; $BPA_3 = 16{,}52 + 0{,}2\times14{,}868 = 19{,}49$.
- $DIV_2 = 1{,}652$ y $DIV_3 = 0{,}8\times19{,}49 = 15{,}59$.
- El ROE de la fase 2 que es compatible con el precio es **$ROE = r = 11\,\text{\%}$**, porque las reinversiones de esa fase no añaden VAOC. Entonces $g = 0{,}2\times0{,}11 = 2{,}2\,\text{\%}$.
- $VAN_1 = -12{,}6 + 2{,}52/0{,}11 = 10{,}31$ y $VAN_2 = 12{,}16$, luego $VAOC = 19{,}16$ y $P_0 = 14/0{,}11 + 19{,}16 = \mathbf{146{,}43}$ €.

**Parcial de 2024-25 (Lauson Corp): Gordon con $g$ estimada.** Te dan beneficios y dividendos de 4 años y un ROE del 9,23 %.

- Tasa de reparto: $750.000/2.142.857{,}14 = 35\,\text{\%}$, luego $b = 0{,}65$ y $g = 0{,}65\times9{,}23\,\text{\%} = 6\,\text{\%}$. Coincide con el crecimiento histórico ($2.142.857{,}14/2.021.563{,}34 = 1{,}06$).
- $DIV_1 = 750.000\times1{,}06/500.000 = 1{,}59$ €/acción y $P_0 = 1{,}59/(0{,}10 - 0{,}06) = \mathbf{39{,}75}$ €.
- **Trampa:** el dividendo del último año (2023) es $DIV_0$. Gordon necesita $DIV_1 = DIV_0(1+g)$.

**Ordinaria de enero de 2025: BPA por fases y precio en $t=3$.** $BPA_1 = 80$, reparto del 80 % en los años 1 y 2 con ROE perpetuo del 20 %; en el año 5 se invierte el 40 % del BPA en un proyecto de 3 años al 15 %; después se reparte todo. $r = 12\,\text{\%}$.

- BPA: 80; 83,20; 86,53 (años 3 y 4); 86,53 (año 5); 91,72 (años 6 a 8, con $0{,}15\times34{,}61 = 5{,}19$); 86,53 desde el año 9.
- DIV: 64; 66,56; 86,53; 86,53; 51,92; 91,72 (años 6 a 8); 86,53.
- $P_3 = \sum_{t=4}^{8} DIV_t/1{,}12^{t-3} + (86{,}53/0{,}12)/1{,}12^5 = \mathbf{703{,}42}$ € y $P_0 = \mathbf{672{,}47}$ €.
- **Trampa:** el precio en $t=3$ descuenta los dividendos **desde el año 4**. La resolución del alumno da $P_3 = 731{,}01$, que no es coherente con su propio $P_0$.

**Relación 10 (Green Rock): el mismo esquema que el caso 1A.** ROE del 10 %, $b = 0{,}5$, valor contable 91 y $r = 8\,\text{\%}$; desde el año 3 las reinversiones nuevas rinden el 8 % con $b = 0{,}3$. Sale $P_0 = \mathbf{115{,}83}$ € y $VAOC = 2{,}08$.

**Examen de 2012: el VAOC según la TIR de la reinversión.** Dividendo perpetuo de 20 € y $r = 10\,\text{\%}$; se reinvierten los 20 € del año 1 en un proyecto perpetuo.

| TIR del proyecto | 5 % | 10 % | 15 % | 20 % | 25 % |
| :--- | :---: | :---: | :---: | :---: | :---: |
| $VAN_1 = -20 + 20\cdot TIR/0{,}1$ | −10 | 0 | 10 | 20 | 30 |
| $VAOC = VAN_1/1{,}1$ | −9,09 | 0 | 9,09 | 18,18 | 27,27 |
| $P_0 = 200 + VAOC$ | 190,91 | 200 | 209,09 | 218,18 | 227,27 |

**Febrero de 2012 (los zapatos): rentabilidad exigida a partir del precio.** Reparto del 60 %, ROE del 20 % y rentabilidad por dividendo del 4 %.

- $r = DIV_1/P_0 + g = 4\,\text{\%} + 0{,}4\times20\,\text{\%} = \mathbf{12\,\text{\%}}$.
- Si se agotan las oportunidades de crecimiento y se reparte todo, $P_0' = BPA_1/0{,}12 = 8{,}33\,BPA_1$, frente a $P_0 = 0{,}6\,BPA_1/0{,}04 = 15\,BPA_1$: **el precio cae un 44 %**.

## Errores típicos

- Aplicar el ROE nuevo **a todo el capital** cuando el enunciado dice que «desciende». Solo afecta a las reinversiones nuevas.
- Usar $DIV_0$ en Gordon en lugar de $DIV_1$.
- Calcular la segunda reinversión sobre el BPA base (15) en vez de sobre el BPA de ese año (15,54).
- Tratar como perpetuo un proyecto que dura $n$ años: entonces el flujo va con $a_{\overline{n}|r}$ y el BPA **vuelve** a su nivel cuando el proyecto termina.
- Olvidar que en el año de la reinversión el dividendo baja: $DIV_t = BPA_t - \text{reinversión}_t$.
- Descontar $P_T$ un año de más.
- No comentar el resultado: el comentario vale puntos (0,5 en 2018-19) y siempre es la regla $ROE$ frente a $r$.
