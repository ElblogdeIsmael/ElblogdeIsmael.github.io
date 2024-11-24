# SCD.Relación de Ejercicios del Tema 2 : Monitores

- Autor: Ismael Sallami Moreno 

---

## 51. El cuadro que sigue nos muestra dos procesos concurrentes, P1 y P2, que comparten una variable global `x` y las restantes variables son locales a los procesos. Se pide:

### (a) Sincronizar los procesos para que P1 use todos los valores x suministrados por P2.

### (b) Sincronizar los procesos para que P1 utilice un valor sí y otro no de la variable x, es decir, utilice los valores primero, tercero, quinto, etc. que vaya alcanzando dicha variable.

```plaintext
{variables globales}
proceso P1;
  var m: integer;
  begin
    while true do
      begin
        m:= 2*x - n;
        print(m);
      end
  end

proceso P2;
  var d: integer;
  begin
    while true do
      begin
        d:= leer_teclado();
        x:= d - c*5;
      end
  end
```

### Apartado a:

Se asemeja al problema del prodcutor-consumidor, por lo que la solución a dicho problema sería:

```plaintext
Monitor PC; {monitor productor consumidor}

    var valor_com: integer 
        // valor compartido
    pendiente : boolean; 
        // true si el valor ha sido escrito pero no ha sido consumido
    cola_prod: condition;
        //espera productor hasta que pendiente = false
    cola_cons: condition
        //espera consumidor hasta que pendiente = true

    procedure escribir (v:integer);
    begin   
        if pendiente then
        cola_prod.wait();
        valor_com = v;
        pendiente = true;
        cola_cons.signal();
    end


    function leer():integer
    begin
        if (not pendiente)
            cola_cons.wait();
            result:=valor_com;
            pendiente = false;
            cola_cons.signal();
    end

    //inicialización
    begin
        pendiente = false;
    end




```
`Podemos pensar que function es similar a procedure en este contexto.`

### Apartado b:
