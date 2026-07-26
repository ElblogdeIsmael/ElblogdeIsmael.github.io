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

## 6. Un commit por unidad lógica

Mensajes en español, en la voz de Ismael. Un commit de 800 ficheros llamado «reorg» es
imposible de revisar y de revertir.

Bien:

```
mover el material de CF1 a apuntes-material
versionar el temario de DRH1, que la web enlazaba y no existía
```

Mal:

```
reorganizacion
cambios
update
```

## 7. Las dos copias locales se sincronizan o se elimina una

Hoy hay dos clones en el mismo commit:

- `/home/ismael-sallami/workspace_ssd/GitHub/ElblogdeIsmael.github.io`
- `/home/ismael-sallami/Escritorio/GitHub/ElblogdeIsmael.github.io`

3,3 GB cada uno. Tras la fase 3 los hashes de commit cambian y **la copia que no se
actualice queda inservible**: cualquier `push` desde ella intentaría restaurar el historial
viejo. Es la vía más fácil de perder trabajo en todo este plan.

Decisión pendiente antes de la fase 3: cuál sobrevive. La otra se borra y, si hace falta,
se vuelve a clonar del remoto ya limpio.

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
