- Esta plantilla tiene en la portada la imagen que se especifique de manera difuminada con varios datos.
- La estructura del proyecto es la siguiente:
    ```md
    /proyecto/
    │
    ├── main.tex                 % Archivo principal
    ├── configuraciones/
    │   ├── paquetes.tex         % Todos los \usepackage y configuraciones básicas
    │   ├── estilo_encabezado.tex % fancyhdr, geometry, títulos
    │   ├── comandos.tex         % Comandos personalizados, colores, estilos
    │   └── estilos_listados.tex % Para listings, tcolorbox, etc.
    │
    ├── portada/
    │   └── portada.tex          % Solo la portada
    │
    ├── capitulos/
    │   ├── capitulo1.tex
    │   ├── capitulo2.tex
    │   └── ...
    │
    ├── imagenes/
    │   └── portada.jpg
    │
    └── bibliografia/
        └── referencias.bib (opcional si usas BibTeX)
    ```