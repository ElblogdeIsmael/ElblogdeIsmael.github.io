-- Autor: Ismael Sallami Moreno
--
-- Se han elegido equipos aleatorios

-- Inserción de Equipos
INSERT INTO Equipos (codE, nombreE, localidad, entrenador, fecha_crea) VALUES
('E001', 'Los Invictos', 'Ciudad Central', 'Ana Pérez', TO_DATE('2023-01-10', 'YYYY-MM-DD'));
INSERT INTO Equipos (codE, nombreE, localidad, entrenador, fecha_crea) VALUES
('E002', 'Dragones Rojos', 'Villa Norte', 'Carlos López', TO_DATE('2022-11-05', 'YYYY-MM-DD'));
INSERT INTO Equipos (codE, nombreE, localidad, entrenador, fecha_crea) VALUES
('E003', 'Tigres del Sur', 'Pueblo Oeste', 'Sofía Martín', TO_DATE('2023-03-15', 'YYYY-MM-DD'));
INSERT INTO Equipos (codE, nombreE, localidad, entrenador, fecha_crea) VALUES
('E004', 'Águilas Reales', 'Puerto Este', 'Luis García', TO_DATE('2022-08-20', 'YYYY-MM-DD'));

-- Inserción de Jugadores
-- Criterio usado: 5 jugadores por cada uno de los 4 equipos

-- Jugadores del Equipo E001 (Los Invictos)
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0001', 'E001', 'Juan Rodríguez');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0002', 'E001', 'Pedro Gómez');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0003', 'E001', 'Alberto Sánchez');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0004', 'E001', 'Diego Fernández');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0005', 'E001', 'Ricardo Alonso');

-- Jugadores del Equipo E002 (Dragones Rojos)
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0006', 'E002', 'Fernando Díaz');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0007', 'E002', 'Marcos Ruiz');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0008', 'E002', 'Sergio Vidal');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0009', 'E002', 'Javier Morales');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0010', 'E002', 'Adrián Torres');

-- Jugadores del Equipo E003 (Tigres del Sur)
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0011', 'E003', 'Rubén Navarro');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0012', 'E003', 'Óscar Romero');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0013', 'E003', 'Iván Soto');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0014', 'E003', 'Samuel Bravo');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0015', 'E003', 'Álvaro Pardo');

-- Jugadores del Equipo E004 (Águilas Reales)
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0016', 'E004', 'Daniel Vega');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0017', 'E004', 'Jorge Gil');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0018', 'E004', 'César Rubio');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0019', 'E004', 'Hugo Ramos');
INSERT INTO Jugadores (codJ, codE, nombreJ) VALUES ('J0020', 'E004', 'Manuel Flores');

-- Inserción de Encuentros
-- Criterio: 10 encuentros, dejando un único equipo invicto (E001)
-- Los resultados (PLocal, PVisitante) han de ser positivos y tomar 0 como valor por defecto.

-- Encuentro 1: E001 (Local) vs E002 (Visitante) -> Gana E001
INSERT INTO Encuentros (ELocal, EVisitante, fecha, PLocal, PVisitante) VALUES
('E001', 'E002', TO_DATE('2024-03-01', 'YYYY-MM-DD'), 85, 70);

-- Encuentro 2: E001 (Local) vs E003 (Visitante) -> Gana E001
INSERT INTO Encuentros (ELocal, EVisitante, fecha, PLocal, PVisitante) VALUES
('E001', 'E003', TO_DATE('2024-03-08', 'YYYY-MM-DD'), 90, 65);

-- Encuentro 3: E004 (Local) vs E001 (Visitante) -> Gana E001
INSERT INTO Encuentros (ELocal, EVisitante, fecha, PLocal, PVisitante) VALUES
('E004', 'E001', TO_DATE('2024-03-15', 'YYYY-MM-DD'), 75, 95);

-- Encuentro 4: E002 (Local) vs E003 (Visitante) -> Gana E002
INSERT INTO Encuentros (ELocal, EVisitante, fecha, PLocal, PVisitante) VALUES
('E002', 'E003', TO_DATE('2024-03-22', 'YYYY-MM-DD'), 100, 92);

-- Encuentro 5: E002 (Local) vs E004 (Visitante) -> Gana E004
INSERT INTO Encuentros (ELocal, EVisitante, fecha, PLocal, PVisitante) VALUES
('E002', 'E004', TO_DATE('2024-03-29', 'YYYY-MM-DD'), 88, 91);

-- Encuentro 6: E003 (Local) vs E004 (Visitante) -> Empate (o gana uno, no afecta al invicto)
INSERT INTO Encuentros (ELocal, EVisitante, fecha, PLocal, PVisitante) VALUES
('E003', 'E004', TO_DATE('2024-04-05', 'YYYY-MM-DD'), 80, 80);

-- Encuentro 7: E002 (Local) vs E001 (Visitante) -> Gana E001
INSERT INTO Encuentros (ELocal, EVisitante, fecha, PLocal, PVisitante) VALUES
('E002', 'E001', TO_DATE('2024-04-12', 'YYYY-MM-DD'), 70, 85);

-- Encuentro 8: E003 (Local) vs E001 (Visitante) -> Gana E001
INSERT INTO Encuentros (ELocal, EVisitante, fecha, PLocal, PVisitante) VALUES
('E003', 'E001', TO_DATE('2024-04-19', 'YYYY-MM-DD'), 60, 100);

-- Encuentro 9: E001 (Local) vs E004 (Visitante) -> Gana E001
INSERT INTO Encuentros (ELocal, EVisitante, fecha, PLocal, PVisitante) VALUES
('E001', 'E004', TO_DATE('2024-04-26', 'YYYY-MM-DD'), 110, 70);

-- Encuentro 10: E003 (Local) vs E002 (Visitante) -> Gana E003
INSERT INTO Encuentros (ELocal, EVisitante, fecha, PLocal, PVisitante) VALUES
('E003', 'E002', TO_DATE('2024-05-03', 'YYYY-MM-DD'), 95, 85);


-- Inserción de Faltas
-- El número de faltas num estará comprendido entre 0 y 5, ambos incluidos y debe tomar 0 como valor por defecto.

-- Faltas en Encuentro 1 (E001 vs E002, Fecha: 2024-03-01)
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0001', 'E001', 'E002', TO_DATE('2024-03-01', 'YYYY-MM-DD'), 2);
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0006', 'E001', 'E002', TO_DATE('2024-03-01', 'YYYY-MM-DD'), 3);
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0002', 'E001', 'E002', TO_DATE('2024-03-01', 'YYYY-MM-DD'), 1);

-- Faltas en Encuentro 4 (E002 vs E003, Fecha: 2024-03-22)
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0007', 'E002', 'E003', TO_DATE('2024-03-22', 'YYYY-MM-DD'), 4);
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0011', 'E002', 'E003', TO_DATE('2024-03-22', 'YYYY-MM-DD'), 2);
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0008', 'E002', 'E003', TO_DATE('2024-03-22', 'YYYY-MM-DD'), 5);

-- Faltas en Encuentro 7 (E002 vs E001, Fecha: 2024-04-12)
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0003', 'E002', 'E001', TO_DATE('2024-04-12', 'YYYY-MM-DD'), 1);
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0009', 'E002', 'E001', TO_DATE('2024-04-12', 'YYYY-MM-DD'), 3);

-- Faltas en Encuentro 9 (E001 vs E004, Fecha: 2024-04-26)
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0004', 'E001', 'E004', TO_DATE('2024-04-26', 'YYYY-MM-DD'), 0);
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0016', 'E001', 'E004', TO_DATE('2024-04-26', 'YYYY-MM-DD'), 2);
INSERT INTO Faltas (codJ, ELocal, EVisitante, fecha, num) VALUES
('J0018', 'E001', 'E004', TO_DATE('2024-04-26', 'YYYY-MM-DD'), 4);
