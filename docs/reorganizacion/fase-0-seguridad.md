# Fase 0 — Seguridad

**Duración estimada:** ~1 h · **Destructiva:** no · **Rama:** `reorg/fase-0-seguridad`

---

## Objetivo

Sacar del índice las 12 claves SSH privadas que hoy están publicadas, y montar el
seguimiento del plan en GitHub (issues + milestone).

Esta fase **no** elimina las claves del historial: eso solo lo consigue `git filter-repo`,
en la [fase 3](fase-3-historial.md). Aquí se corta la exposición inmediata y se anotan las
rutas para esa purga.

## Precondiciones

- **`gh` autenticado con la cuenta `ElblogdeIsmael`** para la parte de issues. Hoy lo está
  con `Ismael-Sallami`, que sobre este repositorio solo tiene permiso de lectura:

  ```bash
  gh api repos/ElblogdeIsmael/ElblogdeIsmael.github.io --jq '.permissions'
  # {"admin":false,"maintain":false,"pull":true,"push":false,"triage":false}
  ```

  Cualquier `gh issue create`, `gh pr create` o `gh milestone` contra este repositorio falla
  con `must be a collaborator` hasta que se añada la cuenta:

  ```bash
  gh auth login          # elegir la cuenta ElblogdeIsmael
  gh auth switch --user ElblogdeIsmael
  ```

  `git push` sí funciona: usa la clave SSH, no el token de `gh`.

  Alternativa si no quieres cambiar de cuenta: crear las issues a mano desde la web.

---

## El problema

`git ls-files` devuelve 12 ficheros que empiezan por `-----BEGIN OPENSSH PRIVATE KEY-----`,
en un repositorio público:

```
Subjects/Third/ISE/Prácticas/Practicas_ISE/
├── Entrega_Practicas/Ansible/Primera_Parte/claves/id_rsa_{admin,juan,maria}
├── Entrega_Practicas/Ansible/Segunda_Parte/claves/id_rsa_{admin,juan,maria}
├── Resolucion/…/ansible-ejercicio/claves/id_rsa_{admin,juan,maria}
└── Resolucion/…/ansible-ejercicio/SEGUNDA_VERSION/claves/id_rsa_{admin,juan,maria}
```

Más sus 12 `.pub` correspondientes, que no son secretas pero acompañan.

Son claves de un laboratorio Ansible de la asignatura ISE, no de producción. Aun así:

- Los escáneres de secretos de GitHub y de terceros las indexan.
- `.gitignore` ya las cubre con la regla `id_rsa`, pero se añadieron **antes** de esa regla,
  así que siguen en el índice: `.gitignore` no afecta a lo ya versionado.

---

## Checklist

### Preparación

- [ ] Crear la rama.

  ```bash
  git switch -c reorg/fase-0-seguridad
  ```

- [ ] Etiqueta de respaldo del estado actual ([regla 3](REGLAS.md#3-etiqueta-de-respaldo-antes-de-cada-fase-destructiva)).

  ```bash
  git tag backup/pre-reorg
  git push origin backup/pre-reorg
  ```

### Sacar las claves del índice

- [ ] Confirmar el inventario antes de tocar nada (debe dar **12**).

  ```bash
  git ls-files -z | tr '\0' '\n' | grep -E 'id_rsa_[a-z]+$' | wc -l
  ```

- [ ] Verificar que son claves privadas de verdad (debe dar **12**).

  ```bash
  git ls-files -z | tr '\0' '\n' | grep -E 'id_rsa_[a-z]+$' \
    | while IFS= read -r f; do head -1 "$f" | grep -q 'PRIVATE KEY' && echo "$f"; done | wc -l
  ```

- [ ] Sacarlas del índice **conservando el fichero en disco** (`--cached`), junto con sus
      `.pub`.

  ```bash
  git ls-files -z | tr '\0' '\n' | grep -E 'id_rsa_[a-z]+(\.pub)?$' \
    | tr '\n' '\0' | xargs -0 git rm --cached
  ```

- [ ] Comprobar que `.gitignore` las cubre a partir de ahora (no debe imprimir nada).

  ```bash
  git status --porcelain --untracked-files=all | grep 'id_rsa'
  ```

  Si aparecen como `??`, añadir a `.gitignore`:

  ```
  # Claves del laboratorio Ansible de ISE. Se generan, no se versionan.
  **/claves/
  ```

- [ ] Commit.

  ```bash
  git commit -m "sacar del indice las claves privadas del laboratorio de ISE"
  ```

### Anotar para la fase 3

- [ ] Guardar la lista exacta de rutas a purgar del historial.

  ```bash
  git show HEAD --name-only --diff-filter=D --pretty=format: \
    | grep -v '^$' > docs/reorganizacion/.rutas-a-purgar.txt
  ```

- [ ] Añadir esa lista a la checklist de la [fase 3](fase-3-historial.md).

### Seguimiento en GitHub

- [ ] Crear el milestone.

  ```bash
  gh api repos/ElblogdeIsmael/ElblogdeIsmael.github.io/milestones \
    -f title="Reorganización 2026" \
    -f description="Separar sitio, apuntes, material y código. Ver docs/reorganizacion/"
  ```

- [ ] Crear las 7 issues, una por fase, con el cuerpo apuntando a su fichero.

  ```bash
  for n in 0:seguridad 1:codigo 2:contenido 3:historial 4:plantillas 5:indexado 6:contenido-pendiente; do
    num=${n%%:*}; slug=${n##*:}
    gh issue create \
      --title "Reorganización · Fase $num — $slug" \
      --body "Checklist completa en \`docs/reorganizacion/fase-$num-$slug.md\`." \
      --milestone "Reorganización 2026"
  done
  ```

- [ ] Crear la issue paraguas que enlace a las 7 y al `README.md` del directorio.

- [ ] Cerrar la issue de la fase 0.

### Cierre

- [ ] `npm run check` en verde.
- [ ] PR y merge a `main`.
- [ ] Marcar «Estado: hecha» en la tabla de [README.md](README.md).

---

## Criterio de hecho

- `git ls-files | grep id_rsa` no devuelve nada.
- Los ficheros siguen en disco (no se ha perdido el laboratorio).
- `.rutas-a-purgar.txt` existe y contiene las 24 rutas (12 privadas + 12 públicas).
- Milestone y 8 issues creadas; la de la fase 0, cerrada.

## Verificación

```bash
git ls-files | grep -c id_rsa                    # 0
ls Subjects/Third/ISE/Prácticas/Practicas_ISE/Entrega_Practicas/Ansible/Primera_Parte/claves/
                                                  # los ficheros siguen ahí
npm run check                                     # sin errores
gh issue list --milestone "Reorganización 2026"   # 8 issues
```

---

## Notas

**Rotar las claves no aplica.** Son claves de un laboratorio de prácticas que ya no existe:
no hay ningún servidor al que den acceso. Lo importante es que dejen de estar publicadas y
que no vuelvan (ver [regla 8](REGLAS.md#8-las-claves-privadas-nunca-vuelven-al-repo)).

**Por qué `--cached` y no `git rm` a secas.** `--cached` saca el fichero del control de
versiones pero lo deja en disco. El laboratorio de ISE se moverá a `ansible-infra-lab` en la
[fase 1](fase-1-codigo.md) y allí las claves se generarán con un script; hasta entonces
conviene no perderlas.

---

@author Ismael Sallami Moreno
