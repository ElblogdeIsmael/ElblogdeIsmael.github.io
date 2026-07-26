# Fase 1 — Código a repositorios propios

**Duración estimada:** varias sesiones · **Destructiva:** no (solo crea y renombra) ·
**Rama:** `reorg/fase-1-codigo`

---

## Objetivo

Sacar el código de prácticas del repositorio del sitio y darle un repositorio propio a cada
proyecto, todos con el mismo acabado ([ESTANDAR-REPOS.md](ESTANDAR-REPOS.md)). Renombrar,
fusionar y archivar lo que ya existe en `Ismael-Sallami`.

El trabajo pesado de esta fase **no es mover ficheros, es escribir los README**. Mover es
media hora; explicar bien un proyecto es lo que lo convierte en portfolio.

## Precondiciones

- [Fase 0](fase-0-seguridad.md) cerrada.
- `git-filter-repo` instalado:

  ```bash
  pipx install git-filter-repo   # o: pip install --user git-filter-repo
  git filter-repo --version
  ```

- `gh` autenticado como `Ismael-Sallami` (ya lo está, con protocolo SSH).

---

## El problema

Cuatro proyectos con código real viven dentro del repositorio del sitio, y la web los enlaza
con URLs `tree/main/...`: llevan al navegador de ficheros de un repo de 1,38 GB, sin README,
sin instrucciones de compilación, sin releases. Para quien llega desde la web son
inservibles.

| Ubicación actual | Contenido | Cómo se enlaza hoy |
| --- | --- | --- |
| `Subjects/Third/PDOO/Practica/Proyecto_Irrgarten` | 102 `.java` + proyecto Ruby | `tree/main/...` |
| `Subjects/Third/ISE/Prácticas` | Ansible, Docker, 45 JS, 18 YAML | `tree/main/...` |
| `Subjects/Fourth/IG/code` | GDScript / Godot | no se enlaza |
| `Subjects/Third/FBD` | SQL / PL-SQL | no se enlaza |

Y en `Ismael-Sallami` hay 36 repositorios sin convención de nombres, con tres copias del
mismo trabajo de IA y siete repos obsoletos que ensucian el perfil.

---

## Parte A · Repositorios nuevos desde el blog

Cuatro proyectos. Para cada uno, el procedimiento es el mismo.

### Procedimiento general

```bash
# 1. Clon auxiliar (filter-repo destruye el clon donde se ejecuta; nunca en el repo real)
cd ~/tmp
git clone /home/ismael-sallami/workspace_ssd/GitHub/ElblogdeIsmael.github.io extraccion-<nombre>
cd extraccion-<nombre>

# 2. Quedarse solo con esa ruta, conservando su historial, y subirla a la raíz
git filter-repo --path '<ruta/origen>' --path-rename '<ruta/origen>/':''

# 3. Reorganizar a la estructura estándar (aplanado incluido)
#    … mv manuales …

# 4. Crear el repo y subir
gh repo create Ismael-Sallami/<nombre> --public \
  --description "<una frase>" --source . --remote origin --push
```

`--path-rename 'a/b/':''` mueve el contenido de esa carpeta a la raíz del repo nuevo.

### A.1 · `irrgarten` — **hecho**

**Origen:** `Subjects/Third/PDOO/Practica/Proyecto_Irrgarten`
**Asignatura:** PDOO — Programación y Diseño Orientado a Objetos, 3º
**Lenguajes:** Java y Ruby
**Repositorio:** <https://github.com/Ismael-Sallami/irrgarten> · release `v1.0`

- [x] Extraer con el procedimiento general.
- [x] **Aplanar.** Había siete niveles hasta el código:

  ```
  Proyecto_Irrgarten/Proyecto_Irrgarten/SUBIR_A_PRADO_2_PARCIAL_PDOO/
    VARIOS_DISEÑOS/PROYECTO_SUPER_PLAYER/SolucionParcialPracticas2/P5-java/
  ```

  Resultado, **1,8 MB de árbol y 540 KB de historial**:

  ```
  src/java/irrgarten/   versión Java (juego completo, 25 clases)
  src/ruby/irrgarten/   versión Ruby (19 ficheros)
  docs/diagrams/        diagramas de clases de la práctica 4
  docs/assignment/      enunciado del examen
  docs/variants/        builds alternativos, con su propio README
  ```

  Los nombres de carpeta visibles van en inglés, igual que el README y el texto de la
  release: son lo que ve quien abre el repositorio.

- [x] Borrar lo generado: Javadoc y RDoc (~300 `.html`), `build/`, `dist/`, `nbproject/`,
      `.yardoc/`, `.vscode/` y los zip duplicados. El `Makefile` documenta cómo regenerar
      la documentación (`make docs-java`).
- [x] **Retirar los zip de las entregas P1–P4.** Al abrirlos resultaron ser sobre todo
      material generado: 147 `.html` de Javadoc solo en `Pr3.zip`, más `.class`, `.js`,
      `.css` y ficheros de proyecto de NetBeans. Su código lo reemplaza `src/`, y un zip
      no se puede navegar ni diferenciar en GitHub. Se rescató lo único con valor
      (`extraIrgarrten.pdf` y el enunciado del examen) y los cuatro archivos van
      **adjuntos a la release**, que no lastra el clon.
- [x] Purgar del historial los zip, los `.class` y la documentación generada
      (`git filter-repo --invert-paths --path-glob`). El clon pasó de 13 MB a **540 KB**.
- [x] README con los 10 apartados, en inglés simple.
- [x] Build: `Makefile` con `build-java`, `run-java`, `test-java`, `run-ruby`, `docs-java`,
      `clean`. Verificado desde un clon limpio.
- [x] Topics: `ugr`, `coursework`, `java`, `ruby`, `oop`, `game`.
- [x] Release `v1.0`, con los dos PDF de diagramas adjuntos.
- [ ] **Capturas de la partida.** Pendiente: requiere lanzar la interfaz Swing. Mientras
      tanto, «Results» usa la salida real del tablero en terminal y enlaza los diagramas.
- [x] Checklist de [ESTANDAR-REPOS.md §7](ESTANDAR-REPOS.md#7-lista-de-verificación-por-repo).

#### Lo que se encontró al revisar el código para el README

Cuatro cosas que el README documenta como limitaciones conocidas, porque son reales:

| Hallazgo | Detalle |
| --- | --- |
| `TextUI` no implementa `UI` | `Controller` recibe un `UI`, así que la interfaz de texto no se le puede pasar. Por eso `Main.java` fija `GraphicUI` y deja `TextUI` comentado. La abstracción está declarada pero no honrada |
| `TestP2.java` comentado entero | No llega a compilar en una clase. Su equivalente Ruby, `test_p2.rb`, sí existe |
| `test_p1.rb` falla | Llama a `gamestate1.getlabyrinth()`, nombre al estilo Java que quedó del port; `GameState` expone `attr_reader :labyrinth`. El juego en sí funciona |
| `GameCharacter` es un `enum` | Vale `PLAYER` o `MONSTER`. El nombre sugiere una clase base y no lo es. La jerarquía real es `LabyrinthCharacter → {Monster, Player → FuzzyPlayer}` |

Las variantes de `docs/variantes/` no son diseños alternativos, son **builds para preparar
el parcial**: dos combinaciones de versión de Java, un esbozo de movimientos predefinidos y
un jugador con estadísticas altas. El README lo dice así.

#### Cómo se publica en `Ismael-Sallami`

La clave SSH por defecto autentica como **`ElblogdeIsmael`**, que no tiene escritura en esa
cuenta. Hay una clave dedicada, `~/.ssh/id_github_ismael_sallami`, ya declarada en
`~/.ssh/config` bajo el alias `github.com-ismael`. Se selecciona con `GIT_SSH_COMMAND`:

```bash
export GIT_SSH_COMMAND="ssh -i ~/.ssh/id_github_ismael_sallami -o IdentitiesOnly=yes"
git remote set-url origin git@github.com:Ismael-Sallami/<repo>.git
git push -u origin main
```

Comprobar antes de empujar, debe decir `Hi Ismael-Sallami!`:

```bash
ssh -T -o IdentitiesOnly=yes -i ~/.ssh/id_github_ismael_sallami git@github.com
```

`gh repo create --push` **no** sirve: usa la clave por defecto y falla con
`exit status 128` después de haber creado ya el repositorio.

#### Tres trampas al publicar, comprobadas en `irrgarten`

1. **`filter-repo` conserva todas las ramas del clon.** El clon auxiliar traía `main`,
   `reorg/*` y demás. El trabajo se hizo sobre la rama que estaba activa, y el
   `git push origin main` subió la `main` heredada: el repositorio quedó publicado con el
   entregable sin tocar y **sin README**. Hay que fijar la rama buena como `main` antes de
   empujar:

   ```bash
   git branch -f main HEAD && git checkout main
   ```

2. **Las etiquetas mantienen vivo el historial viejo.** Tras purgar los zip del historial,
   un clon nuevo seguía pesando 13 MB: la etiqueta `v1.0` apuntaba al commit anterior a la
   purga y hacía alcanzable todo lo purgado. Hay que moverla:

   ```bash
   git tag -f v1.0 HEAD && git push --force origin v1.0
   ```

   La release conserva sus adjuntos: GitHub la sigue por nombre de etiqueta.

3. **Verificar siempre contra el remoto, no contra el directorio local.** Lo que hay en
   disco y lo que se ha publicado pueden no coincidir:

   ```bash
   gh api repos/Ismael-Sallami/<repo>/readme --jq .name    # 404 si no hay README
   git clone git@github.com:Ismael-Sallami/<repo>.git /tmp/verif && cd /tmp/verif && make
   ```

### A.2 · `ansible-infra-lab`

**Origen:** `Subjects/Third/ISE/Prácticas`
**Asignatura:** ISE — Infraestructura de Sistemas Empresariales, 3º
**Stack:** Ansible, Docker, JMeter, Nginx

- [ ] Extraer con el procedimiento general.
- [ ] **Verificar que no entra ninguna clave** (debe dar `0`):

  ```bash
  git log --all --diff-filter=A --name-only --pretty=format: | grep -c 'id_rsa' || echo 0
  ```

  Si aparecen, purgarlas aquí con `git filter-repo --invert-paths --path-glob '*id_rsa*'`
  antes de crear el repo. **No se sube nada hasta que esto dé cero.**
- [ ] Añadir `generar-claves.sh`:

  ```bash
  #!/usr/bin/env bash
  # Genera las claves del laboratorio. No se versionan (ver .gitignore).
  set -euo pipefail
  mkdir -p claves
  for user in admin juan maria; do
    ssh-keygen -t ed25519 -N '' -C "$user@lab" -f "claves/id_$user"
  done
  ```

- [ ] `.gitignore` con `claves/`.
- [ ] Aplanar `Entrega_Practicas/` y `Resolucion/` → `src/ansible/`, `src/docker/`,
      `src/jmeter/`, `docs/`.
- [ ] Quitar el dashboard de JMeter generado
      (`resultados_carga/dashboard_html/…/bower_components/`): son dependencias de terceros
      volcadas, cientos de ficheros.
- [ ] README: en «The solution», el aprovisionamiento con Ansible y qué mide la prueba de
      carga. En «Requirements», versiones exactas de Ansible y Docker.
- [ ] Topics: `ugr`, `coursework`, `ansible`, `docker`, `devops`, `jmeter`.

### A.3 · `godot-graphics-exercises`

**Origen:** `Subjects/Fourth/IG/code`
**Asignatura:** IG — Informática Gráfica, 4º
**Lenguaje:** GDScript (Godot)

- [ ] Extraer con el procedimiento general.
- [ ] Estructura: `src/` con las escenas y scripts, `docs/` con los enunciados.
- [ ] `.gitignore` de Godot (`.godot/`, `.import/`, `export_presets.cfg`).
- [ ] README: qué ejercicio resuelve cada escena y la versión exacta de Godot.
- [ ] Capturas de cada ejercicio en `assets/` — es un repo gráfico, las capturas son el
      contenido.
- [ ] Topics: `ugr`, `coursework`, `godot`, `gdscript`, `computer-graphics`.

### A.4 · `oracle-plsql-lab`

**Origen:** `Subjects/Third/FBD` (solo el código, no el material)
**Asignatura:** FBD — Fundamentos de Bases de Datos, 3º
**Stack:** Oracle SQL / PL-SQL

- [ ] Extraer solo los `.sql` y los seminarios; el material de teoría se queda en el blog o
      va a `apuntes-material` en la [fase 2](fase-2-contenido.md).
- [ ] Estructura: `src/esquema/`, `src/consultas/`, `src/plsql/`, `docs/seminarios/`.
- [ ] README: el modelo de datos (diagrama E-R en `assets/`) y cómo levantar el entorno.
- [ ] Topics: `ugr`, `coursework`, `sql`, `plsql`, `oracle`, `databases`.

---

## Parte B · Renombrar los repositorios existentes

`gh repo rename` deja una redirección permanente: los enlaces publicados y los `git remote`
existentes siguen funcionando.

- [ ] Renombrar:

  ```bash
  gh repo rename metaheuristics                  --repo Ismael-Sallami/MH-Practices
  gh repo rename concurrency-mpi                 --repo Ismael-Sallami/SCD-Concurrency-MPI
  gh repo rename oracle-dbms-project             --repo Ismael-Sallami/DDSI
  gh repo rename machine-learning-practices      --repo Ismael-Sallami/AA-practices
  gh repo rename airline-routes-adt              --repo Ismael-Sallami/Air-lines-Project
  gh repo rename image-adt                       --repo Ismael-Sallami/TDA-Imagen
  gh repo rename econometric-model               --repo Ismael-Sallami/ModeloEconometrico
  gh repo rename software-engineering-practices  --repo Ismael-Sallami/FIS
  ```

- [ ] `Parcherckers`: **identificar primero la asignatura** (contiene `src/` y
      `Memoria.pdf`; el nombre apunta a un juego de parchís, probable práctica de
      Metodología de la Programación o de PDOO). Confirmar y renombrar a `parcheesi-game`.
- [ ] Sin cambio de nombre, ya son correctos: `algorithms-and-patterns`,
      `3-Partition-NP-Completeness`, `personal-finance-manager`, `media-manager`,
      `early-courses`, `pdf-to-md`, `md2html-testGenerator`, `Arch_Configuration`,
      `neetcode-submissions`.
- [ ] **Revisar cada uno con el mismo rasero.** Renombrar no basta: todos pasan la checklist
      de [ESTANDAR-REPOS.md §7](ESTANDAR-REPOS.md#7-lista-de-verificación-por-repo). El
      README de `metaheuristics` (`practice-1..4`) o el de `machine-learning-practices`
      necesitan los 10 apartados igual que los nuevos.
- [ ] `concurrency-mpi`: incorporar los exámenes de `Subjects/Third/SCD/Examenes/*.cpp`, que
      hoy están solo en el blog, como `docs/examenes/`.

---

## Parte C · Fusionar los duplicados de IA

Hoy hay tres copias del mismo trabajo:

| Repo | Visibilidad | Nota |
| --- | --- | --- |
| `Practica2_IA` | pública | contiene además las carpetas anidadas `IA_Practica2/` y `practica2/` |
| `IA_Practica2` | privada | copia |
| `practica3` | privada | práctica 3, C++ |

- [ ] Partir de `Practica2_IA` (es la pública y la que ya está enlazada desde la web).
- [ ] Aplanar sus carpetas anidadas → `src/practica2/`.
- [ ] Añadir el contenido de `practica3` como `src/practica3/`.
- [ ] Comprobar que `IA_Practica2` no aporta nada que no esté ya:

  ```bash
  diff -rq <copia-de-IA_Practica2> <carpeta-equivalente-en-Practica2_IA>
  ```

- [ ] Renombrar: `gh repo rename rescue-agents --repo Ismael-Sallami/Practica2_IA`.
- [ ] README único que cubra las dos prácticas: agentes reactivos y deliberativos para
      simulaciones de rescate en terreno.
- [ ] Archivar `IA_Practica2` y `practica3` una vez confirmado que su contenido está
      incorporado.
- [ ] Actualizar el enlace en `content/sections/doble-grado/pages/tercero.mjs` — se hace en
      la [fase 5](fase-5-indexado.md).

---

## Parte D · Archivar lo obsoleto

Archivar deja el repo en solo lectura y lo saca del listado activo. Es reversible y no
borra nada.

- [ ] Versiones antiguas del sitio:

  ```bash
  gh repo archive Ismael-Sallami/ElblogdeIsmael     --yes
  gh repo archive Ismael-Sallami/ElblogdeIsmael_v1  --yes
  gh repo archive Ismael-Sallami/Ismael-Sallami2    --yes
  ```

- [ ] Cursos ya recogidos en `early-courses` (verificar la equivalencia antes de archivar):

  ```bash
  gh repo archive Ismael-Sallami/Web-development           --yes
  gh repo archive Ismael-Sallami/Intro-Machine-Learning    --yes
  gh repo archive Ismael-Sallami/Macroeconomia-ejercicios  --yes
  gh repo archive Ismael-Sallami/Course-of-python          --yes
  ```

- [ ] **No tocar** `gestor-finanzas` ([regla 10](REGLAS.md#10-no-se-toca-mifos-ni-gestor-finanzas)).
- [ ] Los 5 forks (`cbioportal`, `cbioportal-frontend`, `mifos-gazelle`,
      `mifos-x-reporting-plugin-birt`, `scorecard-ai`) se quedan como están.

---

## Parte E · Escaparate

- [ ] Fijar 6 repositorios en el perfil (Settings → Pinned repositories). Propuesta:
      `irrgarten`, `ansible-infra-lab`, `metaheuristics`, `rescue-agents`,
      `algorithms-and-patterns`, `personal-finance-manager`.
- [ ] Revisar que los 6 tengan capturas o diagrama: son los que se abren primero.

---

## Nota importante

**En esta fase no se borra nada del blog.** El código extraído sigue en `Subjects/`. Se
elimina en la [fase 3](fase-3-historial.md), cuando ya esté confirmado que los repos nuevos
están completos y funcionan
([regla 5](REGLAS.md#5-nada-se-borra-sin-haberse-movido-antes)).

---

## Criterio de hecho

- Los 4 repos nuevos existen, compilan desde un clon limpio y cumplen el estándar.
- Los 8 renombrados responden en su nombre nuevo y su README pasa la checklist.
- `rescue-agents` contiene las prácticas 2 y 3; `IA_Practica2` y `practica3` archivados.
- 7 repos archivados.
- 6 repos fijados en el perfil.
- `gestor-finanzas` intacto.

## Verificación

```bash
gh repo list Ismael-Sallami --limit 200 --json name,isArchived,description,repositoryTopics

# Por cada repo nuevo: clon limpio y seguir el README a ciegas
cd $(mktemp -d) && git clone git@github.com:Ismael-Sallami/irrgarten.git && cd irrgarten
# … ejecutar exactamente los comandos del README …

# Ningún repo nuevo contiene claves
for r in irrgarten ansible-infra-lab godot-graphics-exercises oracle-plsql-lab; do
  gh api "repos/Ismael-Sallami/$r/git/trees/HEAD?recursive=1" --jq '.tree[].path' | grep -i 'id_rsa\|\.pem\|\.key' || echo "$r limpio"
done
```

---

@author Ismael Sallami Moreno
