# Motivación

Tema 6 del programa. Por qué la gente hace lo que hace en el trabajo, y qué
puede hacer una organización al respecto.

## De qué se habla

La motivación es el proceso que da energía, dirección y persistencia a la
conducta hacia un objetivo. Los tres componentes importan por separado: alguien
puede esforzarse mucho (energía) en lo que no toca (dirección), o hacer lo
correcto y abandonar al primer obstáculo (persistencia).

Las teorías se dividen en dos familias. Las **de contenido** preguntan *qué*
motiva; las **de proceso**, *cómo* se produce la motivación.

## Teorías de contenido

### Maslow

Cinco necesidades ordenadas, y la idea de que una necesidad satisfecha deja de
motivar:

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\footnotesize]
  % Las bandas y las lineas de division se recortan contra el triangulo, asi
  % no hay que calcular a mano el ancho a cada altura y nada se sale.
  \begin{scope}
    \clip (0,3.4) -- (-5.4,-2.9) -- (5.4,-2.9) -- cycle;
    \fill[black!14] (-6,1.5)  rectangle (6,3.4);
    \fill[black!11] (-6,0.35) rectangle (6,1.5);
    \fill[black!8]  (-6,-0.8) rectangle (6,0.35);
    \fill[black!5]  (-6,-1.9) rectangle (6,-0.8);
    \fill[black!2]  (-6,-2.9) rectangle (6,-1.9);
    \foreach \y in {1.5, 0.35, -0.8, -1.9} \draw (-6,\y) -- (6,\y);
  \end{scope}
  \draw (0,3.4) -- (-5.4,-2.9) -- (5.4,-2.9) -- cycle;

  \node at (0,2.15)  {\scriptsize Autorrealización};
  \node at (0,0.9)   {Reconocimiento};
  \node at (0,-0.25) {Sociales};
  \node at (0,-1.37) {Seguridad};
  \node at (0,-2.42) {Fisiológicas};

  \draw[-{Latex[length=2mm]}] (6,-2.9) -- (6,3.4)
        node[midway, right=1mm, align=left] {se asciende cuando\\la de abajo está\\razonablemente\\cubierta};
\end{tikzpicture}
\end{center}
```

La jerarquía estricta no ha resistido la contrastación empírica, y aun así el
modelo sigue enseñándose porque su conclusión práctica se sostiene: **subir el
sueldo a quien ya cobra bien motiva poco**, y lo que falta en ese caso está más
arriba en la pirámide.

### Herzberg

Separa dos conjuntos de factores que no son opuestos:

| Factores de higiene | Factores motivadores |
| --- | --- |
| Salario, condiciones, seguridad, supervisión, relaciones, políticas de la empresa | Logro, reconocimiento, el trabajo en sí, responsabilidad, promoción |
| Su ausencia produce **insatisfacción** | Su presencia produce **satisfacción** |
| Su presencia solo produce **no insatisfacción** | Su ausencia solo produce **no satisfacción** |

La consecuencia es fuerte: arreglar el aire acondicionado y la nómina quita
motivos de queja y no motiva a nadie. Para motivar hay que tocar el contenido del
trabajo, y de ahí sale el **enriquecimiento del puesto**.

### McClelland y las tres necesidades

Logro, poder y afiliación, adquiridas y presentes en distinta proporción en cada
persona. La aplicación práctica es de encaje: quien tiene alta necesidad de logro
rinde en puestos con responsabilidad individual, objetivos exigentes pero
alcanzables y retroalimentación rápida; y suele ser mal directivo de grandes
equipos, donde pesa más la necesidad de poder socializado.

## Teorías de proceso

**Expectativas (Vroom).** La motivación es el producto de tres creencias, y basta
que una valga cero para que el producto lo valga:

$$\text{Motivación} = \text{Expectativa} \times \text{Instrumentalidad} \times \text{Valencia}$$

Es decir: *si me esfuerzo, ¿conseguiré el resultado?*; *si lo consigo, ¿me darán
la recompensa?*; y *esa recompensa, ¿la quiero?*. Un sistema de incentivos falla
por cualquiera de los tres sitios, y diagnosticar cuál es el que falla es lo que
hace útil el modelo.

**Equidad (Adams).** La gente compara su relación entre lo que aporta y lo que
recibe con la de otros, y reacciona a la diferencia. La consecuencia incómoda es
que la percepción de injusticia desmotiva aunque la retribución sea objetivamente
buena, y que la comparación la elige el empleado, no la empresa.

**Fijación de metas (Locke).** Las metas concretas y difíciles producen más
rendimiento que las vagas o fáciles, siempre que se acepten y haya
retroalimentación. Es la teoría con más apoyo empírico de todas y la base de la
dirección por objetivos del tema 5.

**Refuerzo.** La conducta se explica por sus consecuencias. Sin entrar en el
debate teórico, deja una regla que se incumple constantemente: **se obtiene lo
que se premia**, no lo que se pide. Una organización que pide colaboración y
asciende por resultados individuales ya ha elegido.
