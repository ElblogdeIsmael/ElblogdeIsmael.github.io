--Autor: Ismael Sallami Moreno
DROP TABLE Faltas;
DROP TABLE Encuentros;
DROP TABLE Jugadores;
DROP TABLE Equipos;

CREATE TABLE Equipos(
    codE VARCHAR(5) CONSTRAINT PK_codE PRIMARY KEY, -- añadimos con constraint ese nombre por si alguna vez necesitamos modificar una restricción nos referimos a ella así
    nombreE VARCHAR2(30) CONSTRAINT uq_nombreE UNIQUE NOT NULL,
    localidad VARCHAR2(30) NOT NULL,
    entrenador VARCHAR2(30) NOT NULL,
    fecha_crea DATE NOT NULL
);

CREATE TABLE Jugadores (
    codJ VARCHAR2(5) CONSTRAINT pk_codJ PRIMARY KEY,
    codE VARCHAR2(5) NOT NULL,
    nombreJ VARCHAR2(30) NOT NULL,
    CONSTRAINT fk_codE FOREIGN KEY (codE) REFERENCES Equipos(codE)
);

CREATE TABLE Encuentros (
    ELocal VARCHAR2(5),
    EVisitante VARCHAR2(5),
    fecha DATE,
    PLocal NUMBER DEFAULT 0 CHECK (PLocal >= 0),
    PVisitante NUMBER DEFAULT 0 CHECK (PVisitante >= 0),
    CONSTRAINT pk_encuentros PRIMARY KEY (ELocal, EVisitante, fecha),
    CONSTRAINT fk_local FOREIGN KEY (ELocal) REFERENCES Equipos(codE),
    CONSTRAINT fk_visitante FOREIGN KEY (EVisitante) REFERENCES Equipos(codE)
);

CREATE TABLE Faltas (
    codJ VARCHAR2(5),
    ELocal VARCHAR2(5),
    EVisitante VARCHAR2(5),
    fecha DATE,
    num NUMBER DEFAULT 0 CHECK (num BETWEEN 0 AND 5),
    CONSTRAINT pk_faltas PRIMARY KEY (codJ, ELocal, EVisitante, fecha),
    CONSTRAINT fk_jugador FOREIGN KEY (codJ) REFERENCES Jugadores(codJ),
    CONSTRAINT fk_encuentro FOREIGN KEY (ELocal, EVisitante, fecha)
        REFERENCES Encuentros(ELocal, EVisitante, fecha)
);