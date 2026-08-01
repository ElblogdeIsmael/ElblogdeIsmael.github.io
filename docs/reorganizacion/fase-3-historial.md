# Fase 3 — Historial

**Duración estimada:** 1 sesión concentrada · **Destructiva:** **sí, reescribe el
historial** · **Rama:** se ejecuta sobre `main` ya fusionado

> ## HECHA el 2026-08-01
>
> `main` reescrita y publicada. **1,34 GiB → 442,78 MiB** en el remoto, 418,70 MiB en el
> clon local tras un `gc --aggressive`. Los 255 commits siguen siendo 255, la autoría y las
> fechas no cambian y el reparto por email se mantiene en 240 / 11 / 4.
>
> Verificado **desde un clon limpio recién sacado de GitHub**, que es lo único que vale
> ([trampa 4](#si-algo-sale-mal)): **las 238 rutas purgadas dan 0 commits**, y
> `npm run check` sale verde con sus 181 enlaces.
>
> Queda una cosa, y no depende de nosotros: **14 de las 15 `refs/pull` siguen conteniendo el
> material**. Son de solo lectura y solo GitHub Support puede borrarlas. Un `git clone`
> normal no las trae —comprobado, 0 commits—, pero un `git fetch origin '+refs/pull/*'`
> sí. Ver «Lo que queda pendiente» al final.

---

## Segunda pasada, el mismo día: las claves SSH

**La primera pasada se dejó tres claves privadas.** Al preparar el ticket a Support apareció
que el historial reescrito **todavía contenía tres claves OpenSSH privadas** del laboratorio
de Ansible de ISE (`id_rsa_admin`, `id_rsa_juan`, `id_rsa_maria`), replicadas en 24 rutas y
recuperables con un `git show`.

El motivo es que **nadie las había purgado nunca**: la [fase 0](fase-0-seguridad.md) las
sacó del índice, que solo las quita del árbol de trabajo, y la lista de purga de la primera
pasada eran las 238 rutas del inventario de material ajeno, donde no estaban.

Resultado tras la segunda pasada, verificado desde un clon limpio: **0 claves privadas en
7.801 objetos**, 0 de 238 rutas de material ajeno, 256 commits y `npm run check` en verde.

### Tres cosas que costaron un intento cada una

1. **Sacar algo del índice no lo saca del historial.** Es lo que dejó las claves vivas siete
   meses. «Resuelto en la fase 0» significaba solo que ya no estaba en el árbol.
2. **Purgar por ruta no basta: hay que purgar por patrón.** `git rev-list --objects` lista
   cada blob **una sola vez, con una sola ruta**, aunque el mismo blob viva en veinte. Al
   purgar las 6 rutas que devolvía, las mismas claves seguían alcanzables desde
   `Segunda_Parte/` y `Resolucion/`. Lo que funciona:

   ```
   glob:**/claves/**
   glob:**/id_rsa*
   glob:**/id_ed25519*
   glob:**/*.pem
   glob:**/*.key
   ```

   Y comprobar **por contenido**, no por nombre: recorrer los blobs alcanzables y buscar
   `PRIVATE KEY` en sus primeros bytes.
3. **La trampa 3 mordió por tercera vez.** En la segunda pasada se empujó solo
   `refs/heads/main`, y `main` salía limpia; pero `backup/pre-fase-2` y `backup/pre-reorg`
   seguían apuntando al historial con las claves, así que un clon con `--tags` las traía.
   **En cada pasada se empujan los tags, no solo la rama**, y se verifica desde un clon
   limpio con `--tags`.

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

**Lo que NO cuesta, y era la duda que tenía parada esta fase:** `filter-repo` no borra
commits ni toca la autoría. Conserva nombre, email y fecha de autor; solo cambia el hash.
El contador de contribuciones de GitHub se calcula con el email del autor y su fecha, y
`ismEngineer23@gmail.com` está vinculado a la cuenta `Ismael-Sallami` (236 contribuciones
según la API). El único modo de perder commits es que alguno quede vacío al purgar y
`filter-repo` lo pode, y eso se desactiva con **`--prune-empty=never`**.

---

## Lo que quedó pendiente, y no lo cierra nadie desde aquí

1. **Renombrar la rama por defecto, dos veces**, para que GitHub reindexe el peso y el
   widget de contribuidores. Exige `admin`: `gh` corre como `Ismael-Sallami`, que en este
   repositorio solo tiene `push` y `triage`. Se hace desde la web como `ElblogdeIsmael`:
   `Settings` → `General` → `Default branch` → renombrar `main` a `reindex-tmp`, esperar y
   renombrarla de vuelta.
2. **Ticket a GitHub Support** pidiendo `gc` del repositorio y el borrado de las
   `refs/pull`. Sin él, GitHub no reempaqueta —el tamaño que muestra no baja— y las catorce
   referencias de PR siguen conservando el material. Es la recomendación oficial de GitHub
   para retirar contenido de un historial.

   **Se pide como retirada de datos sensibles, que es lo que fue: había tres claves SSH
   privadas.** Su documentación dice explícitamente que Support **no** hace esto para
   reducir tamaño ni para contenido no sensible, así que enmarcarlo como limpieza de peso
   lo manda a la categoría que rechazan. Hay que incluir los datos que piden: propietario y
   repositorio, número de PR afectadas (15), qué era el dato sensible, y si `filter-repo`
   avisó de objetos LFS huérfanos (aquí no, el repositorio no usa LFS).

   **Coste que hay que aceptar antes de pedirlo:** las 15 pull requests se quedan sin diffs
   ni commits. La conversación sobrevive, «Files changed» no, y los enlaces a commits
   viejos desde issues o comentarios dejan de resolver.
3. **Copiar `~/backups/` a un disco externo.** Hoy están en el mismo `/dev/nvme0n1p4` que el
   repositorio, así que un fallo de disco se lleva el respaldo y el original a la vez.

## Ensayo del 2026-08-01, con números

Ejecutado sobre un espejo, sin tocar el remoto. Se purgaron los 183 ficheros del cubo
`PURGABLE` del inventario, que son los que no bloquean nada.

| Comprobación | Antes | Después | |
| --- | --- | --- | --- |
| Commits (`--all`) | 358 | **358** | ni uno perdido |
| `md5` de `%aE %aI` de todo el historial | `4585c23e…` | **`4585c23e…`** | autoría idéntica |
| Commits por email en `main` | 233 / 11 / 3 | **233 / 11 / 3** | contribuciones intactas |
| `size-pack` | 1,34 GiB | **799 MiB** | −573 MiB |
| `npm run check` | verde | **verde** | 141 enlaces locales resuelven |
| Ficheros en el árbol | 3.063 | 2.880 | exactamente los 183, cero colaterales |

**Queda demostrado que no se pierde nada.** Purgando también los cubos `TOOL` (24 ficheros,
137 MiB) y `WEB` (10, 32 MiB) se bajaría a unos 610 MiB, pero esos 34 exigen decisión
previa: ver el encabezado del inventario.

Reproducir el ensayo:

```bash
git clone --mirror . ~/backups/elblogdeismael-pre-fase3.git
cp -a ~/backups/elblogdeismael-pre-fase3.git ~/backups/ensayo-fase3.git
cd ~/backups/ensayo-fase3.git
for r in $(git for-each-ref --format='%(refname)' 'refs/pull/*' 'refs/replace/*'); do
  git update-ref -d "$r"
done
awk -F'\t' '$1=="PURGABLE"{print $3}' \
  <ruta>/docs/reorganizacion/.inventario-material-ajeno.txt > ~/backups/purgar.txt
git filter-repo --force --invert-paths \
  --paths-from-file ~/backups/purgar.txt --prune-empty=never
```

Al comparar árboles, usar **`git -c core.quotepath=false ls-tree`**: por defecto git escapa
los acentos y 46 rutas parecen no coincidir cuando sí lo hacen.

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
