# Tema 4: Riesgo y Rentabilidad (Teoría de Carteras y CAPM)

> [!IMPORTANT]
> **Nota:** Este bloque temático es especialmente importante para comprender el núcleo de las finanzas corporativas modernas y la resolución de los casos avanzados de la asignatura.

## 4.1 El binomio rentabilidad-riesgo

En las finanzas, la rentabilidad y el riesgo son dos caras de la misma moneda. Los inversores son racionales y tienen aversión al riesgo: exigen una mayor rentabilidad esperada como compensación por asumir una mayor incertidumbre sobre los rendimientos futuros.

La rentabilidad histórica se mide como la variación del precio más los dividendos cobrados. El riesgo, estadísticamente, se aproxima midiendo la volatilidad de esas rentabilidades (la desviación típica o varianza respecto a la media).

## 4.2 La diversificación y la Teoría de Carteras de Markowitz

Harry Markowitz demostró matemáticamente en 1952 que un inversor nunca debe evaluar el riesgo de un activo de forma aislada, sino por cómo ese activo contribuye al riesgo total de su cartera.

El riesgo total de una acción individual se divide en dos componentes:
1. **Riesgo Específico (Idiosincrásico o Diversificable):** Es el riesgo propio de la empresa o de su sector (una huelga, el fallo de un producto, la dimisión del CEO). Como estos sucesos son independientes entre empresas, en una cartera con decenas de acciones, las sorpresas positivas de unas compensan las negativas de otras. Este riesgo **puede eliminarse casi por completo** simplemente diversificando la cartera.
2. **Riesgo Sistemático (Riesgo de Mercado):** Es el riesgo que afecta a toda la economía en su conjunto (tipos de interés, inflación, ciclos macroeconómicos, crisis globales). Dado que arrastra a casi todas las empresas, **no puede eliminarse diversificando**.

Como los inversores pueden evitar el riesgo específico diversificando sin coste, los mercados financieros en equilibrio **no recompensan económicamente el riesgo específico**. La prima de riesgo que ofrece una acción depende exclusiva y estrictamente de su riesgo sistemático.

## 4.3 El Modelo de Valoración de Activos de Capital (CAPM)

El *Capital Asset Pricing Model* (CAPM), desarrollado por William Sharpe, John Lintner y Jan Mossin, da el salto desde la teoría de Markowitz hasta una fórmula práctica para calcular la rentabilidad exigida a cualquier activo.

El modelo postula que la rentabilidad esperada de cualquier inversión $E(R_i)$ es igual a la tasa libre de riesgo más una prima de riesgo proporcional al riesgo sistemático de ese activo.

$$E(R_i) = R_f + \beta_i \times [E(R_m) - R_f]$$

Donde:
- $R_f$ es la tasa libre de riesgo (generalmente el rendimiento de un bono del Estado a 10 años).
- $E(R_m)$ es la rentabilidad esperada del mercado en su conjunto.
- $[E(R_m) - R_f]$ es la **Prima de Riesgo del Mercado**, el premio adicional que exigen los inversores por invertir en la bolsa en lugar de en deuda pública.
- $\beta_i$ (Beta) es el índice de riesgo sistemático del activo individual frente al mercado.

### Interpretación de la Beta ($\beta$)

La Beta mide la sensibilidad o exposición del activo a los movimientos del mercado:
- Si $\beta = 1$: El activo tiene el mismo riesgo sistemático que el mercado. Se moverá en paralelo a él.
- Si $\beta > 1$: Es un activo **ofensivo** o agresivo (ej. empresas tecnológicas o aerolíneas). Amplifica los movimientos del mercado. Si el mercado sube un 1\%, el activo tiende a subir más del 1\%.
- Si $\beta < 1$: Es un activo **defensivo** (ej. empresas eléctricas o de alimentación básica). Amortigua los movimientos del mercado.
- Si $\beta = 0$: El activo no tiene riesgo sistemático. Su rentabilidad exigida será exactamente la tasa libre de riesgo $R_f$.

## 4.4 El Coste de Capital Medio Ponderado (WACC)

Las empresas suelen financiarse con una mezcla de capital propio (acciones) y capital ajeno (deuda). Para valorar proyectos de inversión de la empresa en su conjunto (su VAN), la tasa de descuento adecuada no es el coste del capital propio aislado, sino el Coste de Capital Medio Ponderado (WACC, por sus siglas en inglés).

$$\text{WACC} = K_e \left(\frac{E}{V}\right) + K_d (1 - t) \left(\frac{D}{V}\right)$$

Donde:
- $K_e$ es el coste del capital propio (calculado normalmente con el CAPM).
- $K_d$ es el coste de la deuda bancaria o de los bonos emitidos.
- $t$ es el tipo del Impuesto sobre Sociedades (la deuda genera un "escudo fiscal" porque los intereses son deducibles).
- $E$ y $D$ son el valor de mercado de las acciones (Equity) y de la deuda (Debt).
- $V = E + D$ es el valor total de la empresa.

El WACC representa el coste medio de financiar los activos de la empresa. Todo nuevo proyecto (si asume un nivel de riesgo idéntico al de la empresa matriz y no altera su estructura de capital) debe batir el WACC para generar valor.
