# La burocracia maquinal

Tema 10 del programa. La organización de la producción en masa: trabajo
normalizado, tecnoestructura poderosa y una jerarquía elaborada.

## Descripción

| Rasgo | Valor |
| --- | --- |
| Mecanismo de coordinación | normalización de procesos de trabajo |
| Parte dominante | tecnoestructura |
| Especialización | mucha, horizontal y vertical |
| Formalización | muy alta |
| Agrupación | funcional |
| Unidades del núcleo | grandes |
| Descentralización | tipo B: horizontal limitada, hacia la tecnoestructura |
| Sistemas | planificación de acciones muy desarrollada |

El núcleo de operaciones hace tareas simples y repetitivas que no exigen formación
previa. La línea media está muy elaborada y dividida por funciones. Y la
tecnoestructura, que diseña los procesos, es la parte clave aunque no aparezca en lo
alto del organigrama.

**El poder de la tecnoestructura es informal.** Formalmente el ápice decide; en la
práctica, quien fija cómo se trabaja ha decidido de antemano. Es el tipo B de
descentralización del tema 7, y es el ejemplo canónico de por qué el organigrama no
dice dónde está el poder.

## Condiciones en las que aparece

| Factor | Valor |
| --- | --- |
| Edad y tamaño | madura y grande |
| Sistema técnico | regulador, no automatizado |
| Entorno | simple y estable |
| Poder | a menudo con control externo fuerte |

**No automatizado** es la condición que suele pasarse por alto. La burocracia
maquinal necesita que las máquinas regulen el trabajo de las personas, pero que las
personas sigan haciéndolo. Automatizar del todo elimina el trabajo repetitivo, y con
él la razón de ser de la tecnoestructura: es la tercera regularidad del sistema
técnico del tema 8.

Ejemplos: fabricación en serie, grandes cadenas de distribución, administración
pública, compañías aéreas, servicios de seguridad.

El **control externo fuerte** empuja hacia aquí incluso cuando lo demás no lo pide.
Un organismo público o una filial tienen que justificar cada decisión ante alguien de
fuera, y justificar exige procedimiento escrito y registro.

## Ventajas

- **Eficiente en su terreno.** Para producir en volumen algo estandarizado no hay
  nada mejor: la especialización y la normalización llevan el coste unitario al
  mínimo.
- **Fiable.** El resultado es uniforme y previsible, y eso es exactamente lo que se
  pide en aviación, en banca o en administración.
- **Justa por diseño.** La misma norma para todos protege frente a la arbitrariedad.
- **Barata en personal.** No exige gente muy cualificada en el núcleo.

## Problemas

**Problemas humanos en el núcleo.** El trabajo especializado y sin margen produce
desmotivación, absentismo, rotación y sabotaje de baja intensidad. La respuesta
clásica —más control— agrava el problema, porque la causa era precisamente el exceso
de control.

**Problemas de coordinación en la línea media.** Con agrupación funcional, ninguna
unidad responde del resultado completo. Los conflictos entre departamentos suben la
jerarquía en busca de alguien con autoridad sobre las dos partes, y se acumulan en
el ápice.

**Problemas de adaptación en el ápice.** El ápice se pasa el tiempo resolviendo
conflictos operativos que le llegan de abajo, y le queda poco para lo estratégico.
Además la información que recibe está agregada y filtrada por varios niveles.

**Rigidez ante el cambio.** Es el problema de fondo: la configuración está diseñada
para hacer siempre lo mismo bien, y por tanto para no cambiar. Ante una novedad, o
no hay procedimiento —y nadie tiene autoridad para inventarlo— o el procedimiento
existente se aplica a un caso que no le corresponde.

**Desplazamiento de objetivos.** Cumplir la norma sustituye al fin al que la norma
servía. Es el efecto que el tema 4 anticipa, y aquí aparece en su forma pura.

## La obsesión por el control

Un rasgo que ordena todos los problemas anteriores: en esta configuración, cada
problema se responde con más control.

```{=latex}
\begin{center}
\begin{tikzpicture}[font=\small, >=stealth]
\node[draw, align=center, minimum width=2.5cm, minimum height=0.85cm] (a) at (0,1.5)
  {aparece un\\problema};
\node[draw, align=center, minimum width=2.5cm, minimum height=0.85cm] (b) at (4.2,1.5)
  {se añade\\una norma};
\node[draw, align=center, minimum width=2.5cm, minimum height=0.85cm] (c) at (4.2,-0.4)
  {menos margen\\para resolver};
\node[draw, align=center, minimum width=2.5cm, minimum height=0.85cm] (d) at (0,-0.4)
  {más problemas\\sin cubrir};
\draw[->, thick] (a) -- (b);
\draw[->, thick] (b) -- (c);
\draw[->, thick] (c) -- (d);
\draw[->, thick] (d) -- (a);
\end{tikzpicture}
\end{center}
```

El círculo se rompe de una sola manera: reconocer que el trabajo ha dejado de ser
suficientemente estable para normalizarlo, y cambiar de configuración. Añadir la
norma número doscientos no lo rompe.

## Variantes

- **Burocracia mecánica de servicios.** El mismo esquema aplicado a un servicio
  repetitivo: atención telefónica, tramitación de expedientes, comida rápida.
- **Burocracia pública.** Con control externo muy fuerte, más formalización todavía y
  el ápice sujeto a un principal político.
- **Organización controlada por un instrumento externo.** Una filial que responde
  íntegramente ante la matriz, con sus objetivos y sus procedimientos impuestos.

La descripción de la burocracia maquinal y de sus disfunciones sigue a
\cite{mintzberg2009} y \cite{sanchez2025}; el análisis de la burocracia como tipo
organizativo está en \cite{hodge1998} y \cite{daft2005}.
