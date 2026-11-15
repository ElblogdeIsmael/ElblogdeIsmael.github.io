# Matemática financiera

## Capitalización y descuento compuesto

$$VF = VA\,(1+r)^n \qquad\qquad VA = \frac{VF}{(1+r)^n} \qquad\qquad \text{factor de descuento: } \frac{1}{(1+r)^t}$$

**Tipos equivalentes** ($m$ periodos al año):

$$(1+i_m)^m = 1 + i \qquad\qquad j_m = m\cdot i_m \;(\text{tipo nominal}) \qquad\qquad TAE = \left(1+\frac{j_m}{m}\right)^m - 1$$

## Rentas

| Renta | Valor actual |
| :--- | :--- |
| Constante pospagable, $n$ años | $C\cdot a_{\overline{n}\rvert r} = C\,\dfrac{1-(1+r)^{-n}}{r}$ |
| Constante prepagable | $C\cdot a_{\overline{n}\rvert r}\,(1+r)$ |
| Diferida $d$ años (primer pago en $d+1$) | $\dfrac{C\cdot a_{\overline{n}\rvert r}}{(1+r)^d}$ |
| Perpetua constante | $\dfrac{C}{r}$ |
| Perpetua que empieza en $T+1$, valorada en 0 | $\dfrac{C/r}{(1+r)^T}$ |
| Perpetua creciente al ritmo $g$ (primer término $C_1$) | $\dfrac{C_1}{r-g}$, con $r>g$ |
| Creciente geométrica temporal, $n$ años | $C_1\,\dfrac{1-\left(\frac{1+g}{1+r}\right)^n}{r-g}$ |
| Valor final de una renta constante | $C\cdot s_{\overline{n}\rvert r} = C\,\dfrac{(1+r)^n-1}{r}$ |

Relación útil: $a_{\overline{n}\rvert r} = \dfrac{1}{r} - \dfrac{1}{r(1+r)^n}$ (perpetuidad menos perpetuidad diferida).

## Inflación: tipos y flujos reales y nominales

$$1 + r_{\text{nominal}} = (1 + r_{\text{real}})(1+\pi) \qquad\Rightarrow\qquad r_{\text{real}} = \frac{1+r_{\text{nominal}}}{1+\pi} - 1 \;\approx\; r_{\text{nominal}} - \pi$$

$$C_t^{\text{nominal}} = C_t^{\text{real}}\,(1+\pi)^t$$

Flujos nominales se descuentan a la tasa nominal y flujos reales a la tasa real; ambos caminos dan el mismo VAN.

## Interpolación lineal (TIR, tasas implícitas)

Si $VAN(r_1) > 0$ y $VAN(r_2) < 0$:

$$TIR \approx r_1 + (r_2 - r_1)\,\frac{VAN_1}{VAN_1 - VAN_2}$$
