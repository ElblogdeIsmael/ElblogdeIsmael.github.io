# Fase 3 — Historial

**Duración estimada:** 1 sesión concentrada · **Destructiva:** **sí, reescribe el
historial** · **Rama:** se ejecuta sobre `main` ya fusionado

---

## Objetivo

Bajar el repositorio de **1,38 GB a menos de 300 MB** y eliminar de verdad las claves
privadas y el material de terceros, que hoy siguen en el historial aunque ya no estén en el
árbol de trabajo.

## Precondiciones

Estas tres, sin excepción:

- [ ] [Fase 1](fase-1-codigo.md) cerrada y **verificada**: los repos nuevos compilan desde un
      clon limpio. Lo que se purgue aquí ya no se recupera fácilmente.
- [ ] [Fase 2](fase-2-contenido.md) cerrada: el material ya está en `apuntes-material`.
- [ ] `.rutas-a-purgar.txt` completo, con lo anotado en las fases 0 y 2.

---

## Por qué hace falta

Un `git rm` quita el fichero del árbol pero **lo deja en el historial**. Consecuencias:

- El clon sigue pesando lo mismo: `git clone` descarga todos los commits.
- Una clave privada borrada sigue siendo recuperable con `git show <commit>:<ruta>`.

`git filter-repo` reescribe todos los commits eliminando esas rutas como si nunca hubieran
existido. Es la única herramienta que resuelve las dos cosas.

**Coste:** cambian todos los hashes de commit. Eso obliga a `push --force`. Solo hay un clon
local ([regla 7](REGLAS.md#7-hay-un-solo-clon-con-dos-rutas)), así que basta con dejarlo
alineado con el remoto reescrito.

---

## Advertencia

> Esta fase reescribe el historial del repositorio. Un error aquí es difícil de deshacer.
>
> No se empieza sin la copia espejo del paso 1. No se ejecuta `filter-repo` sobre el
> directorio de trabajo real: se hace sobre un clon aparte y se comprueba antes de
> publicar.

---

## Checklist

### 1 · Respaldos

- [ ] Copia espejo fuera del proyecto
      ([regla 4](REGLAS.md#4-copia-espejo-antes-de-reescribir-el-historial)):

  ```bash
  mkdir -p ~/backups
  git clone --mirror . ~/backups/elblogdeismael-$(date +%F).git
  du -sh ~/backups/elblogdeismael-*.git      # debe rondar 1,4 GB
  ```

- [ ] Etiqueta de respaldo:

  ```bash
  git tag backup/pre-fase-3
  git push origin backup/pre-fase-3
  ```

- [ ] Anotar el commit actual, por si hay que citarlo:

  ```bash
  git rev-parse HEAD | tee docs/reorganizacion/.commit-pre-fase-3.txt
  ```

### 2 · Preparar la lista de purga

- [ ] Revisar `.rutas-a-purgar.txt` línea a línea. Lo que entre aquí desaparece del
      historial: se lee entero antes de seguir.

      Estado actual: **24 rutas**, aportadas por la [fase 0](fase-0-seguridad.md) — las 12
      claves privadas de ISE y sus 12 `.pub`. La [fase 2](fase-2-contenido.md) añadirá el
      material de terceros. Están sin comillas y sin escapes octales, como necesita
      `--paths-from-file`.
- [ ] Añadir los patrones que no dependen de rutas concretas:

  ```
  # claves
  *id_rsa*
  # material de terceros
  *wuolah*
  ```

- [ ] Confirmar que **no** aparece nada de `mifos/` ni ningún PDF que la web enlace:

  ```bash
  grep -i 'mifos' docs/reorganizacion/.rutas-a-purgar.txt     # no debe devolver nada
  comm -12 <(sort -u docs/reorganizacion/.rutas-a-purgar.txt) \
           <(grep -rhoE 'Subjects/[^"]*' index.html doble-grado -r | sort -u)
  # no debe devolver nada: si devuelve algo, se estaría borrando algo publicado
  ```

### 3 · Ensayo en un clon

- [ ] Clonar aparte y ejecutar allí primero:

  ```bash
  cd ~/tmp
  git clone /home/ismael-sallami/workspace_ssd/GitHub/ElblogdeIsmael.github.io ensayo-purga
  cd ensayo-purga
  git filter-repo --invert-paths --paths-from-file \
    /home/ismael-sallami/workspace_ssd/GitHub/ElblogdeIsmael.github.io/docs/reorganizacion/.rutas-a-purgar.txt
  ```

- [ ] Medir el resultado:

  ```bash
  git count-objects -vH | grep size-pack     # objetivo: < 300 MB
  ```

- [ ] Comprobar que las claves ya no son recuperables (no debe devolver nada):

  ```bash
  git log --all --name-only --pretty=format: | grep -c id_rsa
  ```

- [ ] Comprobar que el sitio sigue completo en el clon purgado:

  ```bash
  npm run check
  ```

- [ ] Si el tamaño no baja lo suficiente, buscar qué queda pesando y ampliar la lista:

  ```bash
  git rev-list --objects --all \
    | git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' \
    | awk '$1=="blob"' | sort -k3 -rn | head -30
  ```

### 4 · Ejecutar de verdad

- [ ] Repetir el `filter-repo` sobre el repositorio real, con la lista ya validada.
- [ ] Revisar el log antes de publicar:

  ```bash
  git log --oneline | head -20
  git count-objects -vH | grep size-pack
  ```

- [ ] Volver a añadir el remoto: `filter-repo` lo elimina a propósito, como medida de
      seguridad.

  ```bash
  git remote add origin git@github.com:ElblogdeIsmael/ElblogdeIsmael.github.io.git
  ```

- [ ] Publicar:

  ```bash
  git push --force origin main
  git push --force origin --tags
  ```

### 5 · Alinear el clon local

Solo hay un clon, accesible por dos rutas
([regla 7](REGLAS.md#7-hay-un-solo-clon-con-dos-rutas)). No hay nada que sincronizar entre
copias, pero el clon actual conserva los objetos del historial viejo hasta que se limpien.

- [ ] Recoger el historial reescrito y podar lo viejo:

  ```bash
  cd /home/ismael-sallami/workspace_ssd/GitHub/ElblogdeIsmael.github.io
  git fetch --all --prune
  git reflog expire --expire=now --all
  git gc --prune=now --aggressive
  du -sh .git
  ```

- [ ] Si el tamaño no baja, es más rápido re-clonar desde cero. **Nunca por la ruta del
      Escritorio**: es un symlink y borraría el original.

  ```bash
  realpath ~/Escritorio/GitHub/ElblogdeIsmael.github.io   # confirma que es el mismo sitio
  ```

### 6 · Verificar la publicación

- [ ] El workflow `deploy.yml` termina en verde.
- [ ] Abrir <https://elblogdeismael.github.io/> y comprobar a mano varias fichas de tercero
      y cuarto: los PDF deben seguir descargándose.
- [ ] Comprobar el tamaño que ve GitHub:

  ```bash
  gh api repos/ElblogdeIsmael/ElblogdeIsmael.github.io --jq '.size'   # en KB
  ```

  GitHub tarda un rato en recalcularlo tras un `--force`; si no baja al momento, esperar y
  volver a mirar.

### 7 · Limpieza

- [ ] Conservar `~/backups/elblogdeismael-*.git` **un mes** desde el despliegue correcto.
      No borrarlo antes.
- [ ] Anotar en [DECISIONES.md](DECISIONES.md) el tamaño final y cualquier ruta que se
      decidiera conservar.

---

## Criterio de hecho

- `git count-objects -vH` → `size-pack` **< 300 MB**.
- `git log --all --name-only | grep id_rsa` no devuelve nada.
- Ninguna copia local apunta al historial viejo.
- El sitio publicado funciona y `npm run check` pasa.
- La copia espejo existe y está guardada.

## Verificación

```bash
git count-objects -vH | grep size-pack
git log --all --name-only --pretty=format: | grep -c 'id_rsa\|wuolah'   # 0
npm run check
gh run list --workflow deploy.yml --limit 1
gh api repos/ElblogdeIsmael/ElblogdeIsmael.github.io --jq '.size'
```

---

## Si algo sale mal

Antes del `push --force`, basta con volver al respaldo:

```bash
git reset --hard backup/pre-fase-3
```

Después del `push --force`, se restaura desde la copia espejo:

```bash
cd ~/backups/elblogdeismael-<fecha>.git
git push --force --mirror git@github.com:ElblogdeIsmael/ElblogdeIsmael.github.io.git
```

Por eso el espejo no se borra hasta pasado un mes.

---

@author Ismael Sallami Moreno
