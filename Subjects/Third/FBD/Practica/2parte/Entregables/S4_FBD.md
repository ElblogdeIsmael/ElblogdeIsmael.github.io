---
title: "Fundamentos de Base de Datos"
subtitle: "Ejercicios Seminario 4: Algebra Relacional"
author: "Ismael Sallami Moreno"
date: "Mayo de 2025"
lang: es

# Opciones específicas de la plantilla Eisvogel para la portada
titlepage: true
# titlepage-logo: "../images/logo-universidad.jpg" # COLOCA TU LOGO AQUÍ (ej. logo-mi-uni.png)
                                        # Eisvogel lo pondrá arriba, centrado.
# titlepage-background: "images/portada-fondo.jpg" # OPCIONAL: Imagen de fondo para TODA la portada
                                                     # Debe estar diseñada para que el texto sea legible encima.

# Colores para la portada (Eisvogel los usa)
# titlepage-color: "F5F5F5" # Color de fondo de la portada si NO usas titlepage-background (ej. un gris muy claro)
titlepage-text-color: "333333"   # Color del texto en la portada (gris oscuro)
titlepage-rule-color: "4682B4"   # Color para la línea horizontal decorativa (azul acero)
                                  # Puedes ponerlo igual que titlepage-color para ocultar la línea si usas fondo de color.
# titlepage-rule-height: 2 # Grosor de la línea en pt (default es 2)

# Opciones generales del documento
mainfont: "Latin Modern Roman"   # Asegúrate de tener esta fuente. Alternativas: "CMU Serif", "TeX Gyre Termes"
# fontsize: 11pt                 # Puedes elegir 10pt, 11pt, 12pt
geometry: "margin=2.5cm"
colorlinks: true
linkcolor: "008080"              # Teal para los enlaces
toc: true
# toc-own-page: true             # Descomenta si quieres la tabla de contenido en su propia página (recomendado por Eisvogel)
numbersections: true
book: true                       # Para un estilo más de "libro" con Eisvogel (afecta títulos de capítulo, etc.)

# Encabezados y pies de página (Eisvogel los gestiona bien)
# header-left: "\\small{Contabilidad}" # Puedes personalizar el contenido del encabezado
# header-right: "\\small{Ejercicios Tema 6}"
# footer-center: "\\small{\\thepage}" # Número de página centrado y pequeño

# IMPORTANTE: Elimina cualquier `header-includes` complejo que tuvieras antes para la portada.
# Dejamos que Eisvogel maneje la creación de la portada con las variables de arriba.
header-includes:
- \usepackage{pdfpages}
---

\includepdf[pages=-]{EjerciciosAlgebraEnunciados.pdf}

**Anotaciones sobre la notación usada:**

- $\pi_{attributes}(Relation)$: Projection
- $\sigma_{condition}(Relation)$: Selection
- $R \bowtie_{condition} S$: Theta Join
- $R \bowtie S$: Natural Join (joins on common attribute names)
- $R \cup S$: Union
- $R - S$: Difference
- $R \times S$: Cartesian Product
- $\rho_{NewName}(Relation)$ or $\rho_{NewAttr \leftarrow OldAttr}(Relation)$: Rename
- $R \div S$: Division
- For min/max operations without explicit aggregate functions, we use a common pattern: find all items, then subtract those items for which a smaller/larger one exists.



# Relación de Ejercicios

## Ejercicio 1

1. Sobre las siguientes relaciones:
   
-   **PROVEEDOR** S(CODPRO, NOMPRO, STATUS, CIUDAD)
-   **PIEZA** P(CODPIE, NOMPIE, COLOR, PESO, CIUDAD)
-   **PROYECTO** J(CODPJ, NOMPJ, CIUDAD)
-   **VENTAS** SPJ(CODPRO, CODPIE, CODPJ, CANTIDAD, FECHA)



a) **Encontrar los códigos de los proveedores que suministran alguna pieza al proyecto J1.**
   $$\pi_{CODPRO}(\sigma_{CODPJ='J1'}(SPJ))$$

b) **Encontrar los suministros cuya cantidad supere las 100 unidades.**
   $$\sigma_{CANTIDAD > 100}(SPJ)$$

c) **Encontrar los nombres de proveedores, piezas y proyectos que se encuentren en la misma ciudad.**
   (Esto implica que el proveedor, la pieza y el proyecto están en la misma ciudad y existe una venta que los relaciona)
   $$\pi_{S.NOMPRO, P.NOMPIE, J.NOMPJ} (\sigma_{S.CIUDAD = P.CIUDAD \land P.CIUDAD = J.CIUDAD} 
   $$
   $$
   (S \bowtie_{S.CODPRO=SPJ.CODPRO} SPJ \bowtie_{SPJ.CODPIE=P.CODPIE} P \bowtie_{SPJ.CODPJ=J.CODPJ} J))$$

d) **Encontrar los nombres de las piezas suministradas por los proveedores de Londres.**
   $$\pi_{P.NOMPIE} (P \bowtie_{P.CODPIE=SPJ.CODPIE} (SPJ \bowtie_{SPJ.CODPRO=S.CODPRO} (\sigma_{S.CIUDAD='Londres'}(S))))$$

e) **Encontrar todas las parejas de ciudades tales que la primera sea la de un proveedor y la segunda la de un proyecto entre los cuales haya algún suministro.**
   $$\pi_{S.CIUDAD, J.CIUDAD} (S \bowtie_{S.CODPRO=SPJ.CODPRO} SPJ \bowtie_{SPJ.CODPJ=J.CODPJ} J)$$

f) **Encontrar los códigos de las piezas suministradas a algún proyecto por un proveedor que se encuentre en la misma ciudad que el proyecto.**
   $$\pi_{SPJ.CODPIE} ( (\sigma_{S.CIUDAD=J.CIUDAD}(S \bowtie J)) \bowtie_{S.CODPRO=SPJ.CODPRO \land J.CODPJ=SPJ.CODPJ} SPJ )$$
   O más detalladamente:
   $$R_1 \leftarrow S \bowtie_{S.CODPRO=SPJ.CODPRO} SPJ$$
   $$R_2 \leftarrow J \bowtie_{J.CODPJ=R_1.CODPJ} R_1$$
   $$\pi_{CODPIE} (\sigma_{S.CIUDAD=J.CIUDAD} (R_2))$$

g) **Encontrar los códigos de los proyectos que tienen algún proveedor que no se encuentre en su misma ciudad.**
   $$\pi_{J.CODPJ} (\sigma_{S.CIUDAD \neq J.CIUDAD} (S \bowtie_{S.CODPRO=SPJ.CODPRO} SPJ \bowtie_{SPJ.CODPJ=J.CODPJ} J))$$

h) **Mostrar las ciudades donde se fabrican piezas y hay proyectos.**
   $$(\pi_{CIUDAD}(P)) \cap (\pi_{CIUDAD}(J))$$

i) **Mostrar las ciudades de los proveedores en las que no se fabriquen piezas.**
   $$(\pi_{CIUDAD}(S)) - (\pi_{CIUDAD}(P))$$

j) **Encontrar los códigos de los proyectos que usan alguna pieza de las que vende S1.**
   $$\pi_{CODPJ} (SPJ \bowtie (\pi_{CODPIE}(\sigma_{CODPRO='S1'}(SPJ))))$$

k) **Encontrar la cantidad más pequeña enviada en algún suministro.**
   (Cantidades en SPJ menos aquellas cantidades para las que existe una cantidad estrictamente menor)
   $$SPJ_1 \leftarrow \rho_{SPJ1}(SPJ)$$
   $$SPJ_2 \leftarrow \rho_{SPJ2}(SPJ)$$
   $$CantidadesNoMinimas \leftarrow \pi_{SPJ1.CANTIDAD}(SPJ_1 \bowtie_{SPJ1.CANTIDAD > SPJ2.CANTIDAD} SPJ_2)$$
   $$Resultado \leftarrow \pi_{CANTIDAD}(SPJ) - CantidadesNoMinimas$$

l) **Encontrar los códigos de los proyectos que no utilizan piezas rojas suministradas por proveedores de Londres.**
   $$ProyectosConPiezasRojasDeLondres \leftarrow \pi_{SPJ.CODPJ} ( (\sigma_{S.CIUDAD='Londres'}(S))$$
   $$
    \bowtie_{S.CODPRO=SPJ.CODPRO} SPJ \bowtie_{SPJ.CODPIE=P.CODPIE} (\sigma_{P.COLOR='Roja'}(P)) )$$
   $$Resultado \leftarrow \pi_{CODPJ}(J) - ProyectosConPiezasRojasDeLondres$$

m) **Encontrar los códigos de los proyectos que tienen como único proveedor a S1.**
   $$ProyectosSuministradosPorS1 \leftarrow \pi_{CODPJ}(\sigma_{CODPRO='S1'}(SPJ))$$
   $$ProyectosSuministradosPorOtros \leftarrow \pi_{CODPJ}(\sigma_{CODPRO \neq 'S1'}(SPJ))$$
   $$Resultado \leftarrow ProyectosSuministradosPorS1 - ProyectosSuministradosPorOtros$$

n) **Encontrar los códigos de las piezas que se suministran a todos los proyectos de París.**
   $$ProyectosParis \leftarrow \pi_{CODPJ}(\sigma_{CIUDAD='París'}(J))$$
   $$PiezasSuministradasAProyectos \leftarrow \pi_{CODPIE, CODPJ}(SPJ)$$
   $$Resultado \leftarrow PiezasSuministradasAProyectos \div ProyectosParis$$

o) **Encontrar los códigos de los proveedores que venden la misma pieza a todos los proyectos.**
   (Proveedores 's' tales que existe una pieza 'p' que 's' suministra a todos los proyectos 'j')
   $$SuministrosCompletosPorPieza \leftarrow (\pi_{CODPRO, CODPIE, CODPJ}(SPJ)) \div (\pi_{CODPJ}(J))$$
   $$Resultado \leftarrow \pi_{CODPRO}(SuministrosCompletosPorPieza)$$

p) **Encontrar los códigos de los proyectos a los que S1 suministra todas las piezas existentes.**
   $$TodasLasPiezas \leftarrow \pi_{CODPIE}(P)$$
   $$SuministrosS1 \leftarrow \pi_{CODPJ, CODPIE}(\sigma_{CODPRO='S1'}(SPJ))$$
   $$Resultado \leftarrow SuministrosS1 \div TodasLasPiezas$$

q) **Mostrar los códigos de los proveedores que suministran todas las piezas a todos los proyectos.**
   (Proveedores 's' que para toda pieza 'p' y para todo proyecto 'j', existe la tupla (s,p,j) en SPJ)
   $$TodasCombinacionesPiezaProyecto \leftarrow \pi_{CODPIE}(P) \times \pi_{CODPJ}(J)$$
   $$Resultado \leftarrow (\pi_{CODPRO, CODPIE, CODPJ}(SPJ)) \div TodasCombinacionesPiezaProyecto$$



## Ejercicio 2

2. Sobre el siguiente esquema:

-   **LISTA_BODA** (REF#, DESCRIPCION, PRECIO)
-   **INVITACIONES** (NOMBRE, DIRECCION, CIUDAD)
-   **CONFIRMAN** (NOMBRE, NUMERO)
-   **RESERVA_REGALO** (NOMBRE, REF#, FECHA)



a) **Encontrar la descripción de los regalos que no han sido reservados.**
   $$ReferenciasReservadas \leftarrow \pi_{REF\#}(RESERVA_REGALO)$$
   $$ReferenciasNoReservadas \leftarrow \pi_{REF\#}(LISTA_BODA) - ReferenciasReservadas$$
   $$Resultado \leftarrow \pi_{DESCRIPCION}(LISTA_BODA \bowtie ReferenciasNoReservadas)$$

b) **Encontrar la dirección de los invitados que confirman la asistencia de más de dos personas.**
   $$InvitadosConMasDeDos \leftarrow \sigma_{NUMERO > 2}(CONFIRMAN)$$
   $$Resultado \leftarrow \pi_{DIRECCION}(INVITACIONES \bowtie InvitadosConMasDeDos)$$

c) **Encontrar el nombre y la referencia del regalo más caro ya reservado.**
   (Regalos reservados menos aquellos regalos reservados para los cuales existe otro regalo reservado estrictamente más caro)
   $$RegalosReservadosConPrecio \leftarrow LISTA_BODA \bowtie RESERVA_REGALO$$
   $$R1 \leftarrow \rho_{R1}(RegalosReservadosConPrecio)$$
   $$R2 \leftarrow \rho_{R2}(RegalosReservadosConPrecio)$$
   $$RegalosQueNoSonLosMasCaros \leftarrow \pi_{R1.NOMBRE, R1.REF\#}(R1 \bowtie_{R1.PRECIO < R2.PRECIO} R2)$$
   $$TodosLosNombresYRefReservados \leftarrow \pi_{NOMBRE, REF\#}(RegalosReservadosConPrecio)$$
   $$Resultado \leftarrow TodosLosNombresYRefReservados - RegalosQueNoSonLosMasCaros$$