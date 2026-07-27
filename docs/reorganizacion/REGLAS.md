# Reglas de trabajo

Se aplican en todas las fases, sin excepción. Si una regla estorba, se cambia aquí primero
y se anota el porqué en [DECISIONES.md](DECISIONES.md).

---

## 1. Una rama por fase

Nunca se trabaja directamente sobre `main`.

```bash
git switch -c reorg/fase-1-codigo
```

Nombres: `reorg/fase-0-seguridad`, `reorg/fase-1-codigo`, `reorg/fase-2-contenido`,
`reorg/fase-3-historial`, `reorg/fase-4-plantillas`, `reorg/fase-5-indexado`.

Si algo sale mal, la rama se borra y `main` sigue intacto:

```bash
git switch main && git branch -D reorg/fase-1-codigo
```

## 2. Una PR por fase

Con la checklist de la fase pegada en la descripción. No se mezcla sin que el CI pase.

```bash
npm run check          # tiene que pasar en local antes
gh pr create --fill --base main
```

La PR es el punto de revisión: se lee el diff entero antes de mezclar, aunque el autor y
el revisor sean la misma persona.

## 3. Etiqueta de respaldo antes de cada fase destructiva

Una etiqueta es un puntero permanente a un commit. Sobrevive a los cambios de rama.

```bash
git tag backup/pre-fase-3
git push origin backup/pre-fase-3
```

Volver a ese estado si hace falta:

```bash
git reset --hard backup/pre-fase-3
```

## 4. Copia espejo antes de reescribir el historial

Obligatorio en la fase 3. Un `--mirror` copia todas las ramas, etiquetas y refs.

```bash
git clone --mirror . ~/backups/elblogdeismael-$(date +%F).git
```

Se guarda **fuera** del directorio del proyecto. Se conserva hasta que el sitio lleve un
mes desplegado sin incidencias.

## 5. Nada se borra sin haberse movido antes

El orden es siempre: **copiar al destino → verificar que está → borrar del origen**. Nunca
en otro orden, ni siquiera «un momento».

Aplica a los libros y diapositivas de la fase 2, y al código de la fase 1.

## 6. Un commit por unidad lógica, y en inglés simple

**Desde el 2026-07-27, los mensajes de commit de este repositorio se escriben en inglés
simple.** Frases cortas, vocabulario común, voz activa: es lo que ve quien abre el
repositorio desde fuera, igual que los README. Lo que sigue en español es todo lo demás: las
descripciones de las PR, las issues y esta documentación.

Los commits anteriores a esa fecha se quedan como están. Reescribirlos cambiaría el SHA de
cientos de commits y rompería las referencias de las PR ya mezcladas, a cambio de nada.

Un commit de 800 ficheros llamado «reorg» es imposible de revisar y de revertir.

Bien:

```
Move the CF1 material to apuntes-material
Version the DRH1 syllabus, which the site linked and did not exist
```

Mal:

```
reorganizacion
cambios
update
```

## 7. Hay un solo clon, con dos rutas

`~/Escritorio/GitHub` es un **enlace simbólico** a `~/workspace_ssd/GitHub`:

```bash
ls -ld ~/Escritorio/GitHub
# lrwxrwxrwx … /home/ismael-sallami/Escritorio/GitHub -> /home/ismael-sallami/workspace_ssd/GitHub
```

Las dos rutas llevan al mismo inodo. Hay **un clon de 3,3 GB**, no dos de 6,6 GB, y no hay
nada que sincronizar.

Lo que sí hay que tener presente: **borrar por la ruta del Escritorio borra el original.**
Un `rm -rf ~/Escritorio/GitHub/ElblogdeIsmael.github.io` destruye el repositorio de verdad,
no una copia. Si alguna vez hace falta borrar el clon, se hace por la ruta real y con el
espejo de la [regla 4](REGLAS.md#4-copia-espejo-antes-de-reescribir-el-historial) ya hecho.

Comprobar antes de cualquier borrado:

```bash
realpath <ruta>          # dice cuál es el directorio de verdad
```

## 8. Las claves privadas nunca vuelven al repo

En `ansible-infra-lab` las claves se generan en el momento:

```bash
ssh-keygen -t ed25519 -N '' -f claves/id_admin
```

El script `generar-claves.sh` lo hace y `claves/` está en `.gitignore`. Se versiona el
script, nunca su salida.

## 9. El PDF se regenera, no se edita

La fuente es `src/*.md`. `build/*.pdf` es artefacto: se versiona porque el sitio lo enlaza,
pero nadie lo edita a mano ni lo sustituye por otro compilado en otro sitio.

```bash
make -C Subjects/Fourth/MC        # así se produce el PDF, siempre
```

## 10. No se toca `mifos/` ni `gestor-finanzas`

- `mifos/` queda fuera del sistema de diseño y tiene contenido privado cifrado.
- `Ismael-Sallami/gestor-finanzas` es un repositorio privado y se deja como está.

Ninguna fase los incluye. Si aparecen en un diff, es un error.

## 11. Cada fase se cierra formalmente

- Marcar toda la checklist del fichero de la fase.
- Cerrar la issue correspondiente.
- Actualizar la columna «Estado» en [README.md](README.md).
- Anotar en [DECISIONES.md](DECISIONES.md) lo que se decidió sobre la marcha.

Una fase a medias con la checklist sin marcar es una fase que se repite dentro de tres
meses porque nadie recuerda dónde se quedó.

---

@author Ismael Sallami Moreno
