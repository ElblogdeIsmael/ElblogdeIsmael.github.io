# Cuestionario DML

## Ejercicio 1

![Ejercicio 1](images_pr/ej1.png)

Seleccione una:


[ ]
```
A -> partido

B-> EquV#

C-> partido

D-> EquL#

E-> equipos

F-> Equ#=EquL#

G-> nombre
```

[ ]
```
A -> equipos

B-> Equ#

C-> partido

D-> EquL#,EquV#

E-> equipos

F-> partido.Equ#=equipos.Equ#

G-> nombre
```


[x]
```
A -> partido

B-> EquV#

C-> partido

D-> EquL#,EquV#

E-> equipos

F-> Equ#=EquL#

G-> nombre
```


[]
```
A -> equipos

B-> Equ#

C-> partido

D-> * E-> equipos

F-> Equ#=EquV#

G-> nombre
```

## Ejercicio 2

![Ejercicio 2](images_pr/ej2.png)

Seleccione una:


[x]
```
A-> E.nombre
B-> NOT EXISTS
C-> NOT EXISTS
D-> P.EquV#=Ev.EquV# and E.equ#=P.EquL#
```


[ ]
```
A-> E.nombre
B-> ALL
C-> EXISTS
D-> P.EquV#=Ev.EquV# and E.equ#=P.EquL#
```


[ ]
```
A-> E.nombre
B-> EXISTS
C-> EXISTS
D-> P.EquV#=Ev.EquV# and E.equ#=P.EquL#
```


[ ]
```
A-> E.nombre
B-> ALL
C-> ALL
D-> P.EquV#=Ev.EquV# and E.equ#=P.EquL#
```

## Pregunta 3

![Ejercicio 3](images_pr/ej3.png)

Seleccione una:


[ ]
```
A -> ×
B-> p1.fecha<>p2.fecha
C-> p2.fecha
D-> *
E-> equipos
```


[ ]
```
A -> ⋈
B-> p2.fecha<p1.fecha
C-> p1.fecha
D-> fecha
E-> partido
```

[x]
```
A -> ×
B-> p1.fecha<p2.fecha
C-> p1.fecha
D-> fecha
E-> partido
```

[ ]
```
A -> ×
B-> p1.fecha<p2.fecha
C-> fecha
D-> fecha
E-> partido
```

## Pregunta 4

![Ejercicio 4](images_pr/ej4.png)

Seleccione una:


[ ]
```
A-> E.nombre
B-> ALL
C-> ALL
D-> P.EquV#=Ev.EquV# and E.equ#=P.EquL#
```

[ ]
```
A-> E.nombre
B-> ALL
C-> EXISTS
D-> P.EquV#=Ev.EquV# and E.equ#=P.EquL#
```

[ ]
```
A-> E.nombre
B-> EXISTS
C-> EXISTS
D-> P.EquV#=Ev.EquV# and E.equ#=P.EquL#
```

[x]
```
A-> count(*)
B-> HAVING count(*) >1000
C-> (EquL#,Fecha)
D-> EquL#,Fecha,count(*)
```