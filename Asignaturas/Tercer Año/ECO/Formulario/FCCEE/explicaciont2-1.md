La ecuación describe el cálculo de la **varianza de un vector aleatorio** \(\vec{u}\), una cantidad fundamental en estadística y probabilidad. Vamos a desglosar paso a paso las propiedades utilizadas para completar la expresión:

---

### Ecuación Inicial
\[
\text{var}[\vec{u}] = E\left[(\vec{u} - E[\vec{u}])(\vec{u} - E[\vec{u}])^t\right]
\]

#### Paso 1: Expansión del Producto
Expandimos el producto en el argumento de la esperanza matemática:
\[
(\vec{u} - E[\vec{u}])(\vec{u} - E[\vec{u}])^t = \vec{u}\vec{u}^t - \vec{u}(E[\vec{u}])^t - (E[\vec{u}])\vec{u}^t + (E[\vec{u}])(E[\vec{u}])^t
\]

#### Paso 2: Linealidad de la Esperanza Matemática
La esperanza matemática es lineal, lo que permite distribuir \(E[\cdot]\) sobre las sumas y restas:
\[
E[(\vec{u} - E[\vec{u}])(\vec{u} - E[\vec{u}])^t] = E[\vec{u}\vec{u}^t] - E[\vec{u}](E[\vec{u}])^t - E[(E[\vec{u}])\vec{u}^t] + E[(E[\vec{u}])(E[\vec{u}])^t]
\]

---

### Propiedades Clave
1. **Propiedad de la constante en la esperanza matemática**:
   Si \(E[\vec{u}]\) es una constante (un vector fijo), entonces:
   \[
   E[(E[\vec{u}])\vec{u}^t] = (E[\vec{u}])E[\vec{u}^t]
   \]
   En este caso, \(E[(E[\vec{u}])(E[\vec{u}])^t]\) simplemente da \((E[\vec{u}])(E[\vec{u}])^t\).

2. **Simetría de la resta**:
   La suma de términos cruzados \(-E[\vec{u}](E[\vec{u}])^t - (E[\vec{u}])E[\vec{u}^t]\) se cancela porque ambos términos son idénticos.

---

### Simplificación
Finalmente, los términos cruzados se anulan, y el resultado queda como:
\[
E[(\vec{u} - E[\vec{u}])(\vec{u} - E[\vec{u}])^t] = E[\vec{u}\vec{u}^t] - (E[\vec{u}])(E[\vec{u}])^t
\]

---

### Caso Especial: Si \(E[\vec{u}] = 0\)
Si el vector aleatorio \(\vec{u}\) tiene esperanza matemática nula (\(E[\vec{u}] = 0\)), entonces:
\[
\text{var}[\vec{u}] = E[\vec{u}\vec{u}^t]
\]

Por lo tanto, el resultado se reduce a:
\[
\text{var}[\vec{u}] = E[\vec{u}\vec{u}^t]
\]

Esta es una propiedad utilizada comúnmente en estadística para vectores aleatorios centrados en su media.