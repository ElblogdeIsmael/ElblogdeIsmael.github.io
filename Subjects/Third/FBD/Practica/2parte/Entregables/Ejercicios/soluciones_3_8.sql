-- 3.8.1 Realización de consultas sin operadores de agregación

-- Ejercicio 3.60: Muestra la información disponible acerca de los encuentros de liga.
SELECT ELocal, EVisitante, fecha, PLocal, PVisitante
FROM Encuentros;

--------------------------------------------------------------------------------

-- Ejercicio 3.61: Muestra los nombres de los equipos y de los jugadores ordenados alfabéticamente.
SELECT nombreE AS Nombre, 'Equipo' AS Tipo
FROM Equipos
UNION ALL
SELECT nombreJ AS Nombre, 'Jugador' AS Tipo
FROM Jugadores
ORDER BY Nombre;

--------------------------------------------------------------------------------

-- Ejercicio 3.62: Muestra los jugadores que no tienen ninguna falta.
SELECT J.codJ, J.nombreJ
FROM Jugadores J
WHERE J.codJ NOT IN (SELECT DISTINCT F.codJ FROM Faltas F WHERE F.num > 0);

--------------------------------------------------------------------------------

-- Ejercicio 3.63: Muestra los compañeros de equipo del jugador que tiene por código x (codJ=’x’) y donde x es uno elegido por ti.
-- Elegimos codJ = 'J0001' como ejemplo.
SELECT J2.codJ, J2.nombreJ, J2.codE AS CodigoEquipo
FROM Jugadores J1
JOIN Jugadores J2 ON J1.codE = J2.codE
WHERE J1.codJ = 'J0001' AND J2.codJ != 'J0001';

--------------------------------------------------------------------------------

-- Ejercicio 3.64: Muestra los jugadores y la localidad donde juegan (la de sus equipos).
SELECT J.nombreJ AS NombreJugador, E.localidad AS LocalidadEquipo
FROM Jugadores J
JOIN Equipos E ON J.codE = E.codE;

--------------------------------------------------------------------------------

-- Ejercicio 3.65: Muestra todos los encuentros posibles de la liga.
SELECT E1.nombreE AS EquipoLocal, E2.nombreE AS EquipoVisitante
FROM Equipos E1, Equipos E2
WHERE E1.codE != E2.codE
ORDER BY EquipoLocal, EquipoVisitante;

--------------------------------------------------------------------------------

-- Ejercicio 3.66: Muestra los equipos que han ganado algún encuentro jugando como local.
SELECT DISTINCT E.codE, E.nombreE
FROM Equipos E
JOIN Encuentros Enc ON E.codE = Enc.ELocal
WHERE Enc.PLocal > Enc.PVisitante;

--------------------------------------------------------------------------------

-- Ejercicio 3.67: Muestra los equipos que han ganado algún encuentro.
SELECT DISTINCT E.codE, E.nombreE
FROM Equipos E
WHERE E.codE IN (SELECT Enc.ELocal FROM Encuentros Enc WHERE Enc.PLocal > Enc.PVisitante)
   OR E.codE IN (SELECT Enc.EVisitante FROM Encuentros Enc WHERE Enc.PVisitante > Enc.PLocal);

--------------------------------------------------------------------------------

-- Ejercicio 3.68: Muestra los equipos que todos los encuentros que han ganado lo han hecho como equipo local.
SELECT E.codE, E.nombreE
FROM Equipos E
WHERE E.codE IN (SELECT Enc.ELocal FROM Encuentros Enc WHERE Enc.PLocal > Enc.PVisitante)
AND E.codE NOT IN (SELECT Enc.EVisitante FROM Encuentros Enc WHERE Enc.PVisitante > Enc.PLocal);

--------------------------------------------------------------------------------

-- Ejercicio 3.69: Muestra los equipos que han ganado todos los encuentros jugando como equipo local.
SELECT E.codE, E.nombreE
FROM Equipos E
WHERE NOT EXISTS (
    SELECT 1
    FROM Encuentros Enc
    WHERE Enc.ELocal = E.codE AND Enc.PLocal <= Enc.PVisitante
)
AND EXISTS (
    SELECT 1
    FROM Encuentros Enc
    WHERE Enc.ELocal = E.codE
);

--------------------------------------------------------------------------------

-- Ejercicio 3.70: Muestra los encuentros que faltan para terminar la liga.
WITH PosiblesEncuentros AS (
    SELECT E1.codE AS CodLocal, E2.codE AS CodVisitante
    FROM Equipos E1, Equipos E2
    WHERE E1.codE != E2.codE
)
SELECT PE.CodLocal, PE.CodVisitante
FROM PosiblesEncuentros PE
WHERE NOT EXISTS (
    SELECT 1
    FROM Encuentros Enc
    WHERE Enc.ELocal = PE.CodLocal AND Enc.EVisitante = PE.CodVisitante
)
ORDER BY PE.CodLocal, PE.CodVisitante;

--------------------------------------------------------------------------------

-- Ejercicio 3.71: Muestra los encuentros que tienen lugar en la misma localidad.
SELECT Enc.ELocal, Enc.EVisitante, Enc.fecha, ELocalEq.localidad
FROM Encuentros Enc
JOIN Equipos ELocalEq ON Enc.ELocal = ELocalEq.codE
JOIN Equipos EVisitanteEq ON Enc.EVisitante = EVisitanteEq.codE
WHERE ELocalEq.localidad = EVisitanteEq.localidad;

--------------------------------------------------------------------------------
-- 3.8.2 Realización de consultas con operadores de agregación
--------------------------------------------------------------------------------

-- Ejercicio 3.72: Para cada equipo muestra cantidad de encuentros que ha disputado como local.
SELECT E.codE, E.nombreE, COUNT(Enc.ELocal) AS PartidosComoLocal
FROM Equipos E
LEFT JOIN Encuentros Enc ON E.codE = Enc.ELocal
GROUP BY E.codE, E.nombreE
ORDER BY E.nombreE;

--------------------------------------------------------------------------------

-- Ejercicio 3.73: Muestra los encuentros en los que se alcanzó mayor diferencia de puntos.
WITH Diferencias AS (
    SELECT ELocal, EVisitante, fecha, ABS(PLocal - PVisitante) AS Diferencia
    FROM Encuentros
)
SELECT ELocal, EVisitante, fecha, Diferencia
FROM Diferencias
WHERE Diferencia = (SELECT MAX(Diferencia) FROM Diferencias);

--------------------------------------------------------------------------------

-- Ejercicio 3.74: Muestra los jugadores que no han superado 3 faltas acumuladas.
SELECT J.codJ, J.nombreJ, COALESCE(SUM(F.num), 0) AS FaltasAcumuladas
FROM Jugadores J
LEFT JOIN Faltas F ON J.codJ = F.codJ
GROUP BY J.codJ, J.nombreJ
HAVING COALESCE(SUM(F.num), 0) <= 3
ORDER BY J.nombreJ;

--------------------------------------------------------------------------------

-- Ejercicio 3.75: Muestra los equipos con mayores puntuaciones en los partidos jugados fuera de casa.
WITH PuntosVisitante AS (
    SELECT EVisitante, PVisitante
    FROM Encuentros
)
SELECT PV.EVisitante AS CodEquipo, Eq.nombreE, MAX(PV.PVisitante) AS MaximaPuntuacionFuera
FROM PuntosVisitante PV
JOIN Equipos Eq ON PV.EVisitante = Eq.codE
GROUP BY PV.EVisitante, Eq.nombreE
HAVING MAX(PV.PVisitante) = (SELECT MAX(PVisitante) FROM PuntosVisitante)
ORDER BY Eq.nombreE;

--------------------------------------------------------------------------------

-- Ejercicio 3.76: Muestra la cantidad de victorias de cada equipo, jugando como local o como visitante.
WITH VictoriasLocal AS (
    SELECT ELocal AS codE, COUNT(*) AS NumVictorias
    FROM Encuentros
    WHERE PLocal > PVisitante
    GROUP BY ELocal
),
VictoriasVisitante AS (
    SELECT EVisitante AS codE, COUNT(*) AS NumVictorias
    FROM Encuentros
    WHERE PVisitante > PLocal
    GROUP BY EVisitante
)
SELECT
    E.codE,
    E.nombreE,
    COALESCE(VL.NumVictorias, 0) AS VictoriasComoLocal,
    COALESCE(VV.NumVictorias, 0) AS VictoriasComoVisitante,
    COALESCE(VL.NumVictorias, 0) + COALESCE(VV.NumVictorias, 0) AS VictoriasTotales
FROM Equipos E
LEFT JOIN VictoriasLocal VL ON E.codE = VL.codE
LEFT JOIN VictoriasVisitante VV ON E.codE = VV.codE
ORDER BY VictoriasTotales DESC, E.nombreE;

--------------------------------------------------------------------------------

-- Ejercicio 3.77: Muestra el equipo con mayor número de victorias.
WITH VictoriasTotales AS (
    SELECT E.codE, E.nombreE, COALESCE(SUM(CASE WHEN Enc.ELocal = E.codE AND Enc.PLocal > Enc.PVisitante THEN 1 ELSE 0 END), 0) +
                               COALESCE(SUM(CASE WHEN Enc.EVisitante = E.codE AND Enc.PVisitante > Enc.PLocal THEN 1 ELSE 0 END), 0) AS TotalVictorias
    FROM Equipos E
    LEFT JOIN Encuentros Enc ON E.codE = Enc.ELocal OR E.codE = Enc.EVisitante
    GROUP BY E.codE, E.nombreE
)
SELECT codE, nombreE, TotalVictorias
FROM VictoriasTotales
WHERE TotalVictorias = (SELECT MAX(TotalVictorias) FROM VictoriasTotales);

--------------------------------------------------------------------------------

-- Ejercicio 3.78: Muestra el promedio de puntos por equipo en los encuentros de ida.
WITH PuntosAnotados AS (
    SELECT ELocal AS codE, PLocal AS Puntos FROM Encuentros
    UNION ALL
    SELECT EVisitante AS codE, PVisitante AS Puntos FROM Encuentros
)
SELECT E.codE, E.nombreE, AVG(PA.Puntos) AS PromedioPuntosAnotados
FROM Equipos E
JOIN PuntosAnotados PA ON E.codE = PA.codE
GROUP BY E.codE, E.nombreE
ORDER BY PromedioPuntosAnotados DESC;

--------------------------------------------------------------------------------

-- Ejercicio 3.79: Muestra el equipo con mayor número de puntos en total de los encuentros jugados.
WITH PuntosTotalesPorEquipo AS (
    SELECT E.codE, E.nombreE,
           COALESCE(SUM(CASE WHEN Enc.ELocal = E.codE THEN Enc.PLocal ELSE 0 END),0) +
           COALESCE(SUM(CASE WHEN Enc.EVisitante = E.codE THEN Enc.PVisitante ELSE 0 END),0) AS SumaTotalPuntos
    FROM Equipos E
    LEFT JOIN Encuentros Enc ON E.codE = Enc.ELocal OR E.codE = Enc.EVisitante
    GROUP BY E.codE, E.nombreE
)
SELECT codE, nombreE, SumaTotalPuntos
FROM PuntosTotalesPorEquipo
WHERE SumaTotalPuntos = (SELECT MAX(SumaTotalPuntos) FROM PuntosTotalesPorEquipo);