### El rango de direcciones para cada clase de direcciones IPv4 se calcula a partir de los bits reservados para el identificador de red y el identificador de host.

- **Estructura de una Dirección IPv4**
  Una dirección IPv4 tiene 32 bits, divididos en dos partes:
  - **Identificador de red (network ID):** Indica la subred o red a la que pertenece la dirección.
  - **Identificador de host (host ID):** Identifica el dispositivo dentro de la subred.
  
  La cantidad de bits asignados al *network ID* y al *host ID* depende de la clase de dirección.

- **Cálculo del Rango**
  El rango de direcciones se define por:
  - **Bits reservados para la clase:** Determinan el rango inicial y final de las direcciones.
  - **Bits restantes para la red y el host:** Determinan la granularidad de las subredes y la cantidad de hosts disponibles.

- **Clase A**
  - **Estructura:** El primer bit es siempre `0`. Los 7 bits siguientes son para el *network ID*, y los 24 bits restantes son para el *host ID*.
  - **Rango del primer octeto (en decimal):** El primer octeto comienza con `0` (00000000) y termina en `127` (01111111).
  - **Rango completo:** 0.0.0.0 a 127.255.255.255.

- **Clase B**
  - **Estructura:** Los primeros dos bits son siempre `10`. Los 14 bits siguientes son para el *network ID*, y los 16 bits restantes son para el *host ID*.
  - **Rango del primer octeto (en decimal):** El primer octeto comienza con `128` (10000000) y termina en `191` (10111111).
  - **Rango completo:** 128.0.0.0 a 191.255.255.255.

- **Clase C**
  - **Estructura:** Los primeros tres bits son siempre `110`. Los 21 bits siguientes son para el *network ID*, y los 8 bits restantes son para el *host ID*.
  - **Rango del primer octeto (en decimal):** El primer octeto comienza con `192` (11000000) y termina en `223` (11011111).
  - **Rango completo:** 192.0.0.0 a 223.255.255.255.

- **Clase D**
  - **Estructura:** Los primeros cuatro bits son siempre `1110`. Estas direcciones no tienen un identificador de red ni de host, ya que se utilizan para multidifusión (*multicast*).
  - **Rango del primer octeto (en decimal):** El primer octeto comienza con `224` (11100000) y termina en `239` (11101111).
  - **Rango completo:** 224.0.0.0 a 239.255.255.255.

- **Clase E**
  - **Estructura:** Los primeros cuatro bits son siempre `1111`. Estas direcciones están reservadas para propósitos futuros.
  - **Rango del primer octeto (en decimal):** El primer octeto comienza con `240` (11110000) y termina en `255` (11111111).
  - **Rango completo:** 240.0.0.0 a 255.255.255.255.


### Visualización de los Rangos

| Clase | Bits Iniciales | Primer Octeto (Decimal) | Rango de Direcciones         | Uso               |
|-------|----------------|-------------------------|------------------------------|-------------------|
| A     | 0              | 0 - 127                 | 0.0.0.0 a 127.255.255.255    | Redes grandes     |
| B     | 10             | 128 - 191               | 128.0.0.0 a 191.255.255.255  | Redes medianas    |
| C     | 110            | 192 - 223               | 192.0.0.0 a 223.255.255.255  | Redes pequeñas    |
| D     | 1110           | 224 - 239               | 224.0.0.0 a 239.255.255.255  | Multidifusión     |
| E     | 1111           | 240 - 255               | 240.0.0.0 a 255.255.255.255  | Reservado         |
