#!/bin/bash

# Ruta base para las asignaturas de Fourth
BASE_PATH="."

# Archivos específicos a añadir
FILES=(
    "CG/build/CG.pdf"
    "CG/build/CG.tex"
    "DDSI/build/DDSI.pdf"
    "DDSI/build/DDSI.tex"
    "DO-1/build/DO-1.pdf"
    "DO-1/build/DO-1.tex"
    "MC/build/MC.pdf"
    "MC/build/MC.tex"
    "IG/build/IG.pdf"
    "IG/build/IG.tex"
    "EM/build/EM.pdf"
    "EM/build/EM.tex"
)

# Iterar sobre los archivos y añadirlos con git
for FILE in "${FILES[@]}"; do
    git add "$FILE"
    echo "Added $FILE to git staging area."
done