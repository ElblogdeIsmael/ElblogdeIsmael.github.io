# Otras operaciones de la actividad corriente

Tema 4 del programa. Gastos e ingresos, retribuciones al personal, servicios
exteriores, moneda extranjera y periodificación.

## Gastos e ingresos: definición y reconocimiento

Del marco conceptual del tema 1:

| Elemento | Definición |
| --- | --- |
| **Gasto** | decremento del patrimonio neto que no procede de distribuciones a los socios |
| **Ingreso** | incremento del patrimonio neto que no procede de aportaciones de los socios |

La coletilla sobre socios es lo que separa el resultado de las operaciones con los
propietarios: **una ampliación de capital aumenta el patrimonio neto y no es un
ingreso**, y un reparto de dividendos lo reduce y no es un gasto.

### Criterios de reconocimiento

Un ingreso se reconoce cuando:

1. se han transferido los **riesgos y beneficios** significativos del bien;
2. la empresa no conserva la gestión ni el control efectivo sobre él;
3. el importe se puede valorar con fiabilidad;
4. es probable recibir los beneficios;
5. los costes asociados se pueden valorar con fiabilidad.

**La condición 1 es la decisiva y no coincide con la entrega física ni con el
cobro.** Una mercancía en depósito en el local del cliente sigue siendo de la empresa
mientras esta soporte el riesgo de que no se venda, así que no hay venta que
reconocer.

Para la prestación de servicios se aplica el **grado de avance**: si el resultado se
puede estimar con fiabilidad, se reconoce el ingreso en función del porcentaje
ejecutado. Si no se puede estimar, se reconocen ingresos solo hasta el importe de los
gastos incurridos que se espera recuperar.

Un gasto se reconoce cuando surge un decremento de recursos que se puede valorar con
fiabilidad. Y en la práctica, por **correlación con los ingresos**: los gastos
necesarios para obtener un ingreso se reconocen en el mismo periodo.

### Gastos e ingresos que no pasan por resultados

No todo va a la cuenta de pérdidas y ganancias. Algunos se imputan directamente al
patrimonio neto, en los grupos 8 y 9, y van al **estado de cambios en el patrimonio
neto**: subvenciones pendientes de imputar, diferencias de conversión, algunos
ajustes de valor razonable. Se traspasan a resultados cuando se cumple la condición
que los liberaba.

## Retribuciones al personal

El **gasto de personal** es lo que cuesta el trabajo a la empresa, y **no coincide con
lo que el trabajador cobra**. La estructura de una nómina:

| Concepto | Cuenta | Quién lo soporta |
| --- | --- | --- |
| Sueldo bruto | (640) Sueldos y salarios | la empresa |
| Seguridad Social a cargo de la empresa | (642) Seguridad Social a cargo de la empresa | la empresa |
| Seguridad Social a cargo del trabajador | (476) Organismos de la SS, acreedores | el trabajador, retenido |
| Retención de IRPF | (4751) HP acreedora por retenciones | el trabajador, retenido |
| Anticipos entregados | (460) Anticipos de remuneraciones | — |
| Líquido a percibir | (572) Bancos, o (465) Remuneraciones pendientes de pago | — |

$$\text{Gasto de personal} = \text{sueldo bruto} + \text{SS a cargo de la empresa}$$
$$\text{Líquido a percibir} = \text{sueldo bruto} - \text{SS del trabajador} -
\text{retención IRPF} - \text{anticipos}$$

**Ejemplo.** Sueldo bruto 2000 €, Seguridad Social a cargo de la empresa 620 €, a
cargo del trabajador 127 €, retención de IRPF 300 €.

| Debe | | Haber | |
| --- | ---: | --- | ---: |
| (640) Sueldos y salarios | 2000 | (476) Organismos de la SS | 747 |
| (642) SS a cargo de la empresa | 620 | (4751) HP acreedora por retenciones | 300 |
| | | (572) Bancos | 1573 |
| **Total** | **2620** | **Total** | **2620** |

Comprobación de las dos cifras que importan: el gasto es
$2000 + 620 = 2620$; el líquido, $2000 - 127 - 300 = 1573$; y la deuda con la
Seguridad Social suma las dos partes, $620 + 127 = 747$. **El asiento cuadra**:
$747 + 300 + 1573 = 2620$.

Lo que hay que retener: **el trabajador cobra 1573 y a la empresa le cuesta 2620**.
La diferencia no es beneficio de nadie: son cotizaciones e impuestos que la empresa
ingresa por cuenta del trabajador o por la suya.

### Otras retribuciones

| Concepto | Tratamiento |
| --- | --- |
| Indemnizaciones por despido | (641) Indemnizaciones, gasto del ejercicio en que se acuerda |
| Retribuciones en especie | mayor gasto de personal por su valor razonable |
| Pagas extras | se **periodifican** a lo largo del año, no en el mes que se pagan |
| Vacaciones devengadas y no disfrutadas | provisión al cierre |

Las dos últimas son aplicación del principio de devengo del tema 1: el gasto
corresponde al periodo en que se genera el derecho, no a aquel en que se paga.

## Servicios exteriores

El subgrupo 62 recoge los servicios prestados por terceros:

| Cuenta | Concepto |
| --- | --- |
| (621) Arrendamientos y cánones | alquileres de local, maquinaria, licencias |
| (622) Reparaciones y conservación | mantenimiento que no amplía la vida útil |
| (623) Servicios de profesionales independientes | asesoría, abogados, auditoría |
| (624) Transportes | transportes de venta, no los de compra |
| (625) Primas de seguros | seguros del ejercicio |
| (626) Servicios bancarios y similares | comisiones sin naturaleza de interés |
| (627) Publicidad, propaganda y relaciones públicas | |
| (628) Suministros | electricidad, agua, gas, telecomunicaciones |
| (629) Otros servicios | viajes, material de oficina no almacenable |

Dos límites que hay que respetar y se confunden a menudo:

- **Transporte de compra frente a transporte de venta.** El de compra es **mayor
  precio de adquisición** de la existencia, según el tema 2; el de venta es gasto del
  subgrupo 62. La factura es parecida y el tratamiento es distinto.
- **Reparación frente a mejora.** La reparación mantiene el bien en condiciones y es
  gasto de (622); la mejora amplía su capacidad o su vida útil y es **mayor valor del
  inmovilizado**, según el tema 5.

Los servicios profesionales suelen llevar **retención de IRPF**, que la empresa
retiene e ingresa en Hacienda: una factura de 1000 € con 21 % de IVA y 15 % de
retención se paga por $1000 + 210 - 150 = 1060$ €, y la retención va a (4751).

## Operaciones en moneda extranjera

Una operación en moneda extranjera se registra convirtiéndola a euros al **tipo de
cambio de contado de la fecha de la operación**.

Después, al cierre, hay que distinguir dos clases de partida:

| Partida | Qué es | Al cierre |
| --- | --- | --- |
| **Monetaria** | efectivo y derechos u obligaciones por un importe fijo | se convierte al tipo de cierre |
| **No monetaria** | existencias, inmovilizado, valorados a coste | **se mantiene al tipo histórico** |

**Solo las partidas monetarias generan diferencias de cambio**, y esa es la regla que
ordena el apartado. Una máquina comprada en dólares se queda para siempre con el
valor en euros del día de la compra; la deuda con el proveedor de esa máquina se
revalúa cada cierre hasta que se pague.

Las diferencias van a la cuenta de pérdidas y ganancias, en el resultado financiero:

| Cuenta | Cuándo |
| --- | --- |
| (668) Diferencias negativas de cambio | la deuda sube o el crédito baja en euros |
| (768) Diferencias positivas de cambio | la deuda baja o el crédito sube en euros |

**Y las positivas se reconocen igual que las negativas.** Es una excepción notable al
principio de prudencia: aquí no hay estimación, hay un tipo de cambio objetivo, así
que se reconoce el beneficio no realizado.

## Periodificación de gastos e ingresos

Es la aplicación directa del principio de devengo: al cierre hay que ajustar lo que
se ha contabilizado por caja para que corresponda al ejercicio.

Los cuatro casos, y conviene verlos juntos porque se confunden:

| Situación | Cuenta | Naturaleza |
| --- | --- | --- |
| Gasto **pagado** por adelantado, corresponde al año siguiente | (480) Gastos anticipados | **activo** |
| Ingreso **cobrado** por adelantado, corresponde al año siguiente | (485) Ingresos anticipados | **pasivo** |
| Gasto **devengado** y no pagado | (411) Acreedores por servicios, o (526) Intereses a corto plazo de deudas | pasivo |
| Ingreso **devengado** y no cobrado | (440) Deudores, o (545) Dividendo a cobrar | activo |

```{=latex}
\begin{center}
% La linea de tiempo del ejemplo del seguro: se paga el 1 de octubre y la
% cobertura cruza el cierre. Las llaves marcan que parte del importe es gasto
% de cada ejercicio, que es justo lo que la periodificacion reparte.
\begin{tikzpicture}[font=\footnotesize, >=stealth, x=1cm]
\draw[thick] (0,0) -- (11,0);
\draw[thick] (3,0.28) -- (3,-0.28);
\node[anchor=north, font=\scriptsize] at (3,-0.34) {1 de octubre};
\node[anchor=south, font=\scriptsize] at (3,0.32) {se paga 1200};

\draw[very thick] (6,0.45) -- (6,-0.45);
\node[anchor=north, font=\scriptsize] at (6,-0.5) {cierre};

\node[anchor=south, font=\scriptsize] at (1.4,0.55) {ejercicio X};
\node[anchor=south, font=\scriptsize] at (8.6,0.55) {ejercicio X+1};

\draw[decorate, decoration={brace, amplitude=5pt, mirror}]
  (3,-1.15) -- node[below=7pt, font=\scriptsize, align=center]
  {3 meses en X\\gasto: 300} (6,-1.15);
\draw[decorate, decoration={brace, amplitude=5pt, mirror}]
  (6,-1.15) -- node[below=7pt, font=\scriptsize, align=center]
  {9 meses en X+1\\(480) Gastos anticipados: 900} (11,-1.15);
\end{tikzpicture}
\end{center}
```

**Ejemplo.** El 1 de octubre se paga una prima de seguro anual de 1200 €.

| Momento | Debe | Haber |
| --- | --- | --- |
| 1 de octubre | (625) Primas de seguros 1200 | (572) Bancos 1200 |
| 31 de diciembre | (480) Gastos anticipados 900 | (625) Primas de seguros 900 |
| 1 de enero | (625) Primas de seguros 900 | (480) Gastos anticipados 900 |

De los doce meses, **tres son del ejercicio X** —octubre, noviembre y diciembre— y
nueve del siguiente. El gasto que queda en X es $1200 \times 3/12 = 300$, y los
$1200 \times 9/12 = 900$ restantes se llevan al activo y se reconocen en X+1.

**El error clásico es contar los meses al revés.** La comprobación es directa: el
gasto que queda en cada ejercicio tiene que sumar el importe total,
$300 + 900 = 1200$.

El tratamiento de los gastos e ingresos, del personal y de la moneda extranjera sigue
a \cite{pgc2007} y \cite{zafra2024}; los supuestos de periodificación, a
\cite{zafra2024practicos} y \cite{munoz2021}.
