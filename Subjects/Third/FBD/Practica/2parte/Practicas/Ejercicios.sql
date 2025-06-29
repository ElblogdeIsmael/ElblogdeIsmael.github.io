--Ismael Sallami Moreno

---------------------------------------------------------
--          Capítulo 1                                 --
---------------------------------------------------------


-- Ejercicio 1.5

ALTER TABLE plantilla 
    ADD (fechabaja DATE);

-- Ejercicio 1.7 
DROP TABLE plantilla; --todas... 

CREATE TABLE Equipos (
    codE VARCHAR2(3) PRIMARY KEY,
    nombreE VARCHAR2(30) NOT NULL,
    localidadE VARCHAR2(30) NOT NULL,
    entrenador VARCHAR2(30) NOT NULL,
    fecha_crea DATE CONSTRAINT fecha_no_nula NOT NULL
);

CREATE TABLE Encuentros ( 
    Elocal VARCHAR2(3) CONSTRAINT Clave_externa REFERENCES Equipos(codE)
);

---------------------------------------------------------
--          Capítulo 2                                 --
---------------------------------------------------------

-- Ejercicio 2.1
SELECT * FROM prueba1;

-- Ejercicio 2.2
UPDATE plantilla 
    SET nomTrabajador = 'Luis' 
    WHERE DNI = '12345678';

DELETE FROM plantilla; --da error si hay una referencia (clave foránea) a plantilla, este comando las borra todas

-- Ejercicio 2.5
UPDATE ventas
    SET fecha = TO_DATE(2005, 'YYYY')
    WHERE codpro = 'S5';


-- Ejercicio 2.7

-- Insertar equipos
INSERT INTO Equipos VALUES ('E1', 'Lobos', 'Madrid', 'Juan Pérez', TO_DATE('01/01/2000', 'DD/MM/YYYY'));
INSERT INTO Equipos VALUES ('E2', 'Tigres', 'Barcelona', 'Luis García', TO_DATE('01/01/2001', 'DD/MM/YYYY'));
INSERT INTO Equipos VALUES ('E3', 'Águilas', 'Valencia', 'Ana López', TO_DATE('01/01/2002', 'DD/MM/YYYY'));
INSERT INTO Equipos VALUES ('E4', 'Leones', 'Sevilla', 'Marta Fernández', TO_DATE('01/01/2003', 'DD/MM/YYYY'));

-- Insertar jugadores (5 por equipo)
INSERT INTO Jugadores VALUES ('J1', 'E1', 'Carlos Rodríguez');
INSERT INTO Jugadores VALUES ('J2', 'E1', 'David García');
INSERT INTO Jugadores VALUES ('J3', 'E1', 'Sara Gómez');
INSERT INTO Jugadores VALUES ('J4', 'E1', 'Pablo Martínez');
INSERT INTO Jugadores VALUES ('J5', 'E1', 'Lucía López');

INSERT INTO Jugadores VALUES ('J6', 'E2', 'Sergio Sánchez');
INSERT INTO Jugadores VALUES ('J7', 'E2', 'Elena Ruiz');
INSERT INTO Jugadores VALUES ('J8', 'E2', 'Álvaro Torres');
INSERT INTO Jugadores VALUES ('J9', 'E2', 'Marta Díaz');
INSERT INTO Jugadores VALUES ('J10', 'E2', 'Andrés Ramírez');

INSERT INTO Jugadores VALUES ('J11', 'E3', 'Diego Morales');
INSERT INTO Jugadores VALUES ('J12', 'E3', 'Carla Herrera');
INSERT INTO Jugadores VALUES ('J13', 'E3', 'Adrián Blanco');
INSERT INTO Jugadores VALUES ('J14', 'E3', 'Laura Jiménez');
INSERT INTO Jugadores VALUES ('J15', 'E3', 'Sofía Martín');

INSERT INTO Jugadores VALUES ('J16', 'E4', 'Hugo Castillo');
INSERT INTO Jugadores VALUES ('J17', 'E4', 'Paula Romero');
INSERT INTO Jugadores VALUES ('J18', 'E4', 'Mario Vázquez');
INSERT INTO Jugadores VALUES ('J19', 'E4', 'Nuria González');
INSERT INTO Jugadores VALUES ('J20', 'E4', 'Víctor Navarro');

-- Insertar encuentros (10 en total, E1 invicto)
INSERT INTO Encuentros VALUES ('E1', 'E2', TO_DATE('01/05/2025', 'DD/MM/YYYY'), 80, 70);
INSERT INTO Encuentros VALUES ('E1', 'E3', TO_DATE('05/05/2025', 'DD/MM/YYYY'), 90, 85);
INSERT INTO Encuentros VALUES ('E1', 'E4', TO_DATE('10/05/2025', 'DD/MM/YYYY'), 75, 65);
INSERT INTO Encuentros VALUES ('E2', 'E3', TO_DATE('15/05/2025', 'DD/MM/YYYY'), 85, 80);
INSERT INTO Encuentros VALUES ('E2', 'E4', TO_DATE('20/05/2025', 'DD/MM/YYYY'), 95, 100);
INSERT INTO Encuentros VALUES ('E3', 'E4', TO_DATE('25/05/2025', 'DD/MM/YYYY'), 78, 85);
INSERT INTO Encuentros VALUES ('E3', 'E1', TO_DATE('30/05/2025', 'DD/MM/YYYY'), 70, 88);
INSERT INTO Encuentros VALUES ('E4', 'E1', TO_DATE('03/06/2025', 'DD/MM/YYYY'), 60, 70);
INSERT INTO Encuentros VALUES ('E2', 'E1', TO_DATE('07/06/2025', 'DD/MM/YYYY'), 55, 80);
INSERT INTO Encuentros VALUES ('E4', 'E2', TO_DATE('10/06/2025', 'DD/MM/YYYY'), 75, 85);

-- Insertar faltas (algunas de ejemplo)
INSERT INTO Faltas VALUES ('J1', 'E1', 'E2', 2);
INSERT INTO Faltas VALUES ('J6', 'E2', 'E1', 3);
INSERT INTO Faltas VALUES ('J11', 'E3', 'E4', 4);
INSERT INTO Faltas VALUES ('J16', 'E4', 'E1', 1);
INSERT INTO Faltas VALUES ('J5', 'E1', 'E3', 0);
INSERT INTO Faltas VALUES ('J18', 'E4', 'E2', 3);
INSERT INTO Faltas VALUES ('J12', 'E3', 'E1', 2);
INSERT INTO Faltas VALUES ('J9', 'E2', 'E3', 1);
INSERT INTO Faltas VALUES ('J19', 'E4', 'E3', 4);
INSERT INTO Faltas VALUES ('J2', 'E1', 'E4', 2);

COMMIT; -- patra que los cambios se guarden en la base de datos



---------------------------------------------------------
--          Capítulo 3                                 --
---------------------------------------------------------

-- Ejercicio 3.2
SELECT codpro, codpj, codpie FROM ventas; -- no es necesario el DISTINCT porque la CP de ventas es (codpro, codpj, codpie) 


-- Ejercicio 3.3
SELECT codpie -- si en vez de codpie uso * me muestra todos los atributos de pieza
    FROM pieza
    WHERE ciudad = 'Madrid' 
    AND (color = 'rojo' 
        OR 
        color = 'gris');

-- Ejercicio 3.4
SELECT * FROM ventas 
    WHERE cantidad 
    BETWEEN 200 and 300 OR CHECK (cantidad >= 200 AND cantidad <= 300); -- es lo mismo, pero la segunda opción es más explícita, el between incluye los límites

-- Ejercicio 3.5
SELECT * 
    FROM pieza
    WHERE (UPPER(nompie) LIKE '%TORNILLO%' OR LOWER(nompie) LIKE '%tornillo%');

-- Ejercicio 3.7 ciudades donde viven proveedores con status mayor que 2 en las que no se fabrica la pieza con código 'P1', usando intersect
SELECT DISTINCT ciudad 
    FROM proveedor 
    WHERE status > 2
    INTERSECT
SELECT DISTINCT proveedor.ciudad 
    FROM proveedor, pieza 
    WHERE pieza.codpie <> 'P1' AND proveedor.ciudad != pieza.ciudad;

-- Ejercicio 3.8 encontrar aquellos proyectos a los que solo abastece S1

SELECT codpj FROM ventas 
    MINUS
SELECT codpj FROM ventas WHERE codpro <> 'S1';

-- Ejercicio 3.9
SELECT ciudad FROM proveedor
    UNION
SELECT ciudad FROM demas_tablas;

-- Ejercicio 3.10
SELECT igual_al_anterior_peroconUNIONALL;


-- PRODUCTO CARTESIANO: hace todas las combinaciones posibles entre dos tablas
-- UNION: une dos tablas, eliminando duplicados
-- UNION ALL: une dos tablas, sin eliminar duplicados

-- Ejercicio 3.12

SELECT codpj, codpro, codpie FROM ventas
    INTERSECT
SELECT codpj, codpro, codpie FROM proyecto, proveedor, pieza
    WHERE proyecto.ciudad = proveedor.ciudad
    AND proveedor.ciudad = pieza.ciudad;

-- Ejercicio 3.13

SELECT p1.codpro, p2.codpro FROM proveedor p1, proveedor p2 
    WHERE p1.ciudad > p2.ciudad;

-- Ejercicio 3.14 

SELECT codpie FROM pieza 
    MINUS 
SELECT A.codpie , B.copie FROM pieza A, pieza B 
    WHERE A.peso < B.peso;

-- Ejercicio 3.16 

SELECT DISTINCT proveedor.ciudad, ventas.codpie FROM ventas 
    JOIN proveedor ON ventas.codpro = proveedor.codpro 
    JOIN proyecto ON ventas.codpj = proyecto.codpj



