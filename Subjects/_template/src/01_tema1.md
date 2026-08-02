# Título del primer tema

Este fichero es un ejemplo de todo lo que se puede escribir sin salir de
Markdown. Bórralo y escribe encima.

Un `#` es un capítulo, porque el Makefile pasa `--top-level-division=chapter`.
De `##` para abajo, secciones.

## Prosa, listas y énfasis

La prosa va tal cual, con **negrita**, *cursiva* y `código en línea`. Las listas
también:

- Un elemento.
- Otro, con su explicación detrás.
    - Y uno anidado, con cuatro espacios.

## Tablas

Sin salir de Markdown y sin `tabular`:

| Concepto | Definición | Coste |
| --- | --- | ---: |
| Primero | Lo que significa | $O(n)$ |
| Segundo | Lo que significa el otro | $O(n \log n)$ |

## Matemática

En línea, $E = mc^2$, y en bloque:

$$\int_0^1 x^2\,dx = \frac{1}{3}$$

**En un encabezado, siempre en línea.** Un `$$…$$` en un título aborta la
compilación: pandoc lo mete en `\[…\]` dentro de un argumento móvil.

## Código

Con vallas y el lenguaje detrás:

```python
def fib(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

## LaTeX cuando Markdown no llega

Se escribe aquí mismo. Pandoc lo deja pasar intacto:

\begin{tikzpicture}[node distance=2.5cm]
  \node (a) [draw, rectangle] {Entrada};
  \node (b) [draw, rectangle, right of=a] {Proceso};
  \node (c) [draw, rectangle, right of=b] {Salida};
  \draw[->] (a) -- (b);
  \draw[->] (b) -- (c);
\end{tikzpicture}

Y la prosa sigue después sin más.

Solo cuando un bloque así pasa de unas cincuenta líneas y estorba leer el
capítulo, se saca a `src/tex/` y se trae con `\input{src/tex/nombre}`.
