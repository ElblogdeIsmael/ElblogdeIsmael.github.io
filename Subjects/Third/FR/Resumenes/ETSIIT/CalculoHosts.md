## Cálculo del Número de Hosts por Subred

El número de hosts disponibles en una subred depende de la cantidad de bits asignados al identificador de host en la máscara de red.

### Fórmula general:
```
Número de hosts = 2 ^ (# bits del identificador de host) - 2
```
**Nota**: En la teoría no se le resta 2, pero esta es la fórmula general

El -2 es necesario porque:
- La primera dirección (00...000) está reservada para identificar la subred.
- La última dirección (11...111) está reservada para difusión (_broadcast_).

### Ejemplo 1: Clase A con una máscara de `255.0.0.0 (/8)`:
Identificador de host: 24 bits (32 - 8 = 24).
Número de hosts:

```
2^24 - 2 = 16,777,216 - 2 = 16,777,214 hosts
```

### Ejemplo 2: Clase C con una máscara de `255.255.255.0 (/24)`:
Identificador de host: 8 bits (32 - 24 = 8).
Número de hosts:

```
2^8 - 2 = 256 - 2 = 254 hosts
```

## Cálculo del Número de Redes Privadas

El número de redes privadas en cada clase depende de los rangos definidos en el **RFC 1918** para direcciones privadas.

### Clase A:
- **Rango:** `10.0.0.0 – 10.255.255.255`
- **Bits disponibles para subredes:** 24 (32 - 8 = 24)
- **Número de redes posibles:**

```
2^24 = 16,777,216 redes posibles (teóricas)
```

Sin embargo, al ser un rango reservado completo, esta clase se considera como una red privada grande.

### Clase B:
- **Rango:** `172.16.0.0 – 172.31.255.255`
- **Bits fijos para red principal:** 12 (172.16.0.0 a 172.31.0.0)
- **Bits disponibles para subredes:** 20 (32 - 12 = 20)
- **Número de redes privadas:**

```
2^4 = 16 redes privadas (un rango por cada 4 bits)
```

### Clase C:
- **Rango:** `192.168.0.0 – 192.168.255.255`
- **Bits disponibles para subredes:** 16 (32 - 16 = 16)
- **Número de redes privadas:**

```
2^8 = 256 redes privadas (una por cada 8 bits)
```

## Ejemplo de Subredes Privadas

Supongamos una dirección de red privada de Clase C: `192.168.1.0/24`. Aquí hay un desglose:

- **Número total de hosts:** 

```
2^8 - 2 = 254 hosts
```

- **Primera dirección usable:** `192.168.1.1`
- **Última dirección usable:** `192.168.1.254`
- **Dirección de broadcast:** `192.168.1.255`
- **Máscara:** `255.255.255.0 (/24)`

## Resumen

- El número de hosts por subred se calcula en función de los bits asignados al identificador de host, restando las direcciones reservadas para subred y broadcast.
- El número de redes privadas por clase se define por los rangos del **RFC 1918**, y su granularidad depende de la cantidad de bits asignados al identificador de red.
