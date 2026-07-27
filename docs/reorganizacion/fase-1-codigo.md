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
| `Subjects/Fourth/IG/code` **y `src/tex`** | GDScript / Godot, dentro del LaTeX | no se enlaza |
| `Subjects/Third/FBD` | SQL / PL-SQL | no se enlaza |

> **Aviso, aprendido en IG y confirmado en FBD:** el código de una asignatura casi nunca
> está solo en una carpeta de código. En IG los ejercicios viven en bloques `lstlisting` de
> los `.tex`; en FBD, en bloques ` ```sql ` de un `.md` de apuntes. En los dos casos era
> **más código que el que había suelto**.
>
> Barrido obligatorio antes de extraer cualquier proyecto:
>
> ```bash
> COD=Subjects/<Curso>/<COD>
> grep -rc 'begin{lstlisting}\|begin{verbatim}' $COD --include='*.tex'   # LaTeX
> grep -rc '^```' $COD --include='*.md'                                  # Markdown
> find $COD -name '*.zip' -exec unzip -l {} \;                           # entregas comprimidas
> for f in $(find $COD -name '*.pdf'); do \
>   pdftotext "$f" - | grep -ciE 'SELECT .*FROM|CREATE TABLE|class |def '; done
> ```
>
> Y comprobar que lo que se extrae **está versionado**: `filter-repo` trabaja sobre el
> historial, así que un fichero en disco sin commitear no aparecería en el repo nuevo.

Y en `Ismael-Sallami` hay 36 repositorios sin convención de nombres, con cuatro repos de IA
que se pisan entre sí y siete repos obsoletos que ensucian el perfil.

### Resultado del barrido, aplicado a los cuatro

El aviso de arriba no es teórico: al pasarlo por las cuatro asignaturas **tres de ellas
tenían más código fuera de la carpeta de código que dentro**.

| Asignatura | Lo que había suelto | Lo que apareció al barrer | Dónde estaba |
| --- | --- | --- | --- |
| PDOO | el proyecto Irrgarten | **62 ejercicios** de teoría, Java y Ruby | 5 `.tex` de relaciones y diapositivas |
| ISE | Ansible, Docker, JMeter | el **`group_vars/all.yml` original**, 5 informes en Markdown y una iteración anterior del playbook | `Resolucion/Capitulos/Ficheros_Ejercicios/` |
| IG | 20 scripts | **47 bloques** de GDScript y C++ | los `.tex` del temario |
| FBD | 6 `.sql` | **136 bloques** con el temario entero | `ApuntesFBD.md` |

El caso de ISE es el que más duele: había documentado como «limitación conocida» que
`group_vars/all.yml` estaba corrupto y que mi versión era una reconstrucción. **El original
existía**, en una carpeta que no miré, y usa `lookup('file', 'claves/...')` en vez de claves
escritas. Un barrido de dos minutos habría evitado publicar una limitación falsa.

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
- [x] Fila de badges: `java 17`, `ruby 3.2`, estado del CI y `license MIT`.
- [x] `.github/workflows/ci.yml`: compila Java, ejecuta las comprobaciones de la práctica 1
      y parsea los 19 fuentes Ruby. Ambos jobs en verde. El badge dice **`build`**, no
      `tests`, porque las comprobaciones imprimen valores sin verificarlos.
- [x] Build: `Makefile` con `build-java`, `run-java`, `test-java`, `run-ruby`, `docs-java`,
      `clean`. Verificado desde un clon limpio.
- [x] Topics: `ugr`, `coursework`, `java`, `ruby`, `oop`, `game`.
- [x] Release `v1.0`, con los dos PDF de diagramas adjuntos.
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

### A.2 · `ansible-infra-lab` — **hecho**

**Origen:** `Subjects/Third/ISE/Prácticas`
**Asignatura:** ISE — Infraestructura de Sistemas Empresariales, 3º
**Stack:** Ansible, Docker Compose, Prometheus, Grafana, JMeter
**Repositorio:** <https://github.com/Ismael-Sallami/ansible-infra-lab> · release `v1.0`

- [x] Extraer con el procedimiento general y **purgar las claves del historial** antes de
      nada. La fase 0 las sacó del índice, pero seguían en el historial y `filter-repo` las
      arrastra al repositorio nuevo:

      ```bash
      git filter-repo --force --invert-paths \
        --path-glob '*id_rsa*' --path-glob '*/claves/*' \
        --path-glob '*prometheus_data/*' --path-glob '*grafana_data/*' \
        --path-glob '*dashboard_html/*' --path-glob '*bower_components/*' \
        --path-glob '*node_modules/*' --path-glob '*.log'
      ```

      Comprobado: `git log --all --name-only | grep -c id_rsa` → **0**.
- [x] `scripts/generate-keys.sh` y `keys/` en `.gitignore`. Verificado desde un clon: el
      script crea las tres parejas y `git status` no ve nada.
- [x] Aplanar a `src/ansible/{users,webservers}`, `src/monitoring`, `src/load-testing`.
- [x] **Dejar fuera el material del profesorado.** De 62 MB a **224 KB**.
- [x] README con los 10 apartados, badges y `ci.yml` con tres jobs, todos en verde.
- [x] Topics: `ugr`, `coursework`, `ansible`, `docker`, `devops`, `prometheus`, `grafana`,
      `jmeter`.
- [x] Release `v1.0`.

#### Qué se quedó fuera, y por qué

| Descartado | Motivo |
| --- | --- |
| `Jmeter/…/nodejs/` y `mongodb/` | La API que se somete a carga **la proporciona la asignatura**. Su propio README dice que «su desarrollo queda fuera del ámbito de esta asignatura». No es material propio y además trae credenciales escritas en `config.json` |
| `Guiones/*.pdf`, `Guia24-25.pdf` | Enunciados del profesorado. Mismo criterio que los libros y los wuolah de la fase 2 |
| `prometheus_data/`, `grafana_data/` | 21 MB de bases de datos de runtime de los contenedores |
| `dashboard_html/…/bower_components/` | Dashboard de JMeter generado, con dependencias de terceros volcadas |
| `Resolucion/` | Es la memoria en LaTeX: **apuntes**, no código. Se queda en el blog y se migra en la [fase 4](fase-4-plantillas.md) |

#### Dos defectos encontrados en el código entregado

1. **`group_vars/all.yml` estaba sobrescrito con apuntes de otra asignatura.** En vez de las
   variables del playbook contenía preguntas tipo test sobre casos de uso y diagramas de
   clases, de FIS. El playbook referencia `admin_user`, `ssh_pub_key_admin` y
   `usuarios_extra`, así que tal cual **no podía ejecutarse**.

   Comprobado en el historial del blog: ya estaba así en la subida inicial, no hay original
   que recuperar. Se reconstruye a partir del uso que hace el playbook, con claves de
   ejemplo, y el fichero lo dice en su cabecera.

2. **Credenciales de la API escritas en el plan de JMeter.** `ETSII_API.jmx` llevaba el
   usuario y la contraseña de HTTP Basic en el gestor de autorización. Pasan a
   `${__P(api.user,)}` y `${__P(api.password,)}`.

Son los **dos únicos cambios** sobre lo entregado, y el README los declara.

#### Sobre `ansible-lint`

Falla con 7 avisos. Dos eran una **dependencia que faltaba de verdad**: `authorized_key` y
`firewalld` no están en `ansible-core`, viven en la colección `ansible.posix`. Se añade
`requirements.yml` y el CI la instala.

Los otros cinco son del código entregado y **no se arreglan**: tres cosméticos (`fqcn`,
`yaml[truthy]`, `yaml[empty-lines]`) y tres reales — `ignore-errors`,
`risky-file-permissions` y `name[template]`. Se saltan en `.ansible-lint`, cada uno con su
motivo escrito al lado, y se listan en las limitaciones del README. Mismo criterio que en
`irrgarten`: documentar, no falsear.

### A.3 · `godot-graphics-exercises` — **hecho**

**Origen:** `Subjects/Fourth/IG/code` **y `Subjects/Fourth/IG/src/tex`**
**Asignatura:** IG — Informática Gráfica, 4º
**Lenguaje:** GDScript (Godot 4), más cinco algoritmos en C++
**Repositorio:** <https://github.com/Ismael-Sallami/godot-graphics-exercises> · release `v1.0`

> **El dato que cambió la fase.** El código de IG **no estaba en `code/`**. Está dentro del
> documento LaTeX, en `src/tex/`: cada ejercicio con su enunciado, su desarrollo matemático
> y su solución en un bloque `lstlisting`. `code/` solo tenía 20 scripts sueltos. En el
> documento hay **47 bloques más**, que nunca se habían podido parsear, ejecutar ni revisar
> porque vivían dentro de un `.tex`.
>
> Antes de extraer un proyecto, **buscar el código también en los `.tex` de la asignatura**.

- [x] Extraer las dos fuentes: `code/EjerciciosTeoria` → `src/problems/` y `src/tex` →
      `docs/latex/`. Comprobado que no se solapan: la coincidencia entre ambos conjuntos es
      de líneas sueltas de boilerplate.
- [x] Escribir `tools/extract-from-latex.py`, que saca los 47 bloques a ficheros reales
      aprovechando los metadatos de cada `lstlisting`:

      | Metadato | Para qué sirve |
      | --- | --- |
      | `caption=` | Nombre del fichero. `script-del-reloj-analogico.gd` en vez de `solution-7.gd` |
      | `language=` | Extensión. Cinco bloques son **C++**, no GDScript: los algoritmos de intersección rayo-disco, rayo-esfera y cuádricas |

      Cinco bloques etiquetados `language=Python` son GDScript (`onready`, `export`,
      `$Node`, `_process`): la etiqueta era para el resaltador, que no tiene modo GDScript.
      Se escriben como `.gd` y cada uno lo dice en su cabecera.
- [x] Corregir en el extractor dos artefactos de maquetación: la sangría del `lstlisting`
      (sin `textwrap.dedent`, GDScript lee el fichero entero como un bloque anidado) y los
      escapes de LaTeX que se habían colado en el código (`"activar\_brazo"`, `\#`).
- [x] Cada fichero generado lleva en la cabecera el `.tex` y la sección de origen.
- [x] `make diff-check` regenera y falla si lo commiteado no coincide, para que las dos
      mitades no se separen. Es lo que evita que editar el LaTeX y olvidar reextraer deje el
      repositorio mintiendo.
- [x] `tools/check.sh` parsea todo con `gdtoolkit` y falla salvo en los ficheros listados en
      `tools/known-parse-failures.txt`, cada uno con su motivo. Además avisa si una entrada
      de esa lista se queda obsoleta.
- [x] README con los 10 apartados, badges, `.gitignore` de Godot, `LICENSE`, `Makefile`,
      topics y release `v1.0`. CI en verde.

#### Lo que se encontró

| Hallazgo | Detalle |
| --- | --- |
| **Seis ficheros no parsean como Godot 4** | Cinco scripts de animación de la sesión 11 usan sintaxis de **Godot 3** (`onready var`, `export var`). Se escribieron antes en el curso y nunca se migraron: un documento no comprueba tipos |
| **Una indentación perdida** | `session-09/solution.gd` tiene el cuerpo de `_process` en la columna 0. Se perdió **al pegar el código en el `.tex`**, así que el listado del PDF también está mal. Adivinar el anidamiento sería inventar código |
| **Una `y` suelta** | `funciones_auxiliares_t5.gd` tenía una `y` en la línea 2, una pulsación accidental que impedía parsear 121 líneas de trabajo real. Es el **único carácter** que se ha tocado de lo entregado |
| **La sesión 5 no tiene bloques de código** | Su trabajo está en los scripts sueltos: `problema_5_1` a `problema_5_5` y `funciones_auxiliares_t5.gd`, que monta una casa con partes reutilizables |
| **`code/sesion2/` no es trabajo propio** | Son fragmentos de las diapositivas con `...` donde debería ir el código; **5 de 9 ni siquiera parsean**. Material de clase, se queda con los apuntes |

Resultado: **67 ficheros, 2.425 líneas**. 56 de 62 GDScript parsean limpio.

### A.4 · `oracle-sql-exercises` — **hecho**

**Origen:** `Subjects/Third/FBD/Practica/2parte`
**Asignatura:** FBD — Fundamentos de Bases de Datos, 3º
**Stack:** Oracle SQL
**Repositorio:** <https://github.com/Ismael-Sallami/oracle-sql-exercises> · release `v1.0`

> **Se llamaba `oracle-plsql-lab` en el plan. No hay PL/SQL.** Ni un procedimiento, ni una
> función, ni un trigger, ni un bloque `DECLARE/BEGIN`:
>
> ```bash
> grep -rilE 'CREATE (OR REPLACE )?(PROCEDURE|FUNCTION|TRIGGER|PACKAGE)|^\s*DECLARE\b' .
> # sin resultados
> ```
>
> La asignatura cubrió DDL, DML, consultas, catálogo e índices. Mantener el nombre habría
> prometido en la portada una destreza que el repositorio no contiene. Renombrado a
> **`oracle-sql-exercises`**.

- [x] Comprobar primero si el código estaba en los `.tex`, como en IG. **Aquí no**: los dos
      únicos `lstlisting` de FBD son uno comentado y otro con una `i` suelta.
- [x] Extraer los `.sql` y renombrarlos a una tubería legible: `01-schema`, `02-seed`,
      `03-queries`.
- [x] Separar `src/workbook/` (capítulos 1 y 2). Crea `Equipos` con `codE VARCHAR2(3)`
      frente al `VARCHAR(5)` del esquema entregado: son **dos iteraciones que no pueden
      convivir** en la misma base de datos, y ejecutarlas juntas fallaría.
- [x] README con los 10 apartados, badges, `Makefile`, `LICENSE`, `.gitignore`, topics y
      release `v1.0`.

#### El CI ejecuta el SQL, no solo lo lee

Dos jobs. El primero pasa `sqlfluff parse --dialect oracle`. El segundo levanta un Oracle de
verdad con `gvenzl/oracle-free:slim` como *service container*, crea el esquema, carga los
datos y ejecuta las 20 consultas con `python-oracledb` en modo thin (sin cliente Oracle).

Salida real de la ejecución que dejó el badge en verde:

```
src/01-schema.sql: 4 statements
src/02-seed.sql: 45 statements
  Equipos        4 rows     Encuentros    10 rows
  Jugadores     20 rows     Faltas        11 rows
20 queries, all executed
```

Por qué importa: `sqlfluff` acepta una consulta contra una columna que no existe. Parsear
demuestra que el texto está bien formado, no que la base de datos funcione.

#### Lo que casi se queda fuera

La primera versión del repositorio llevaba solo los 6 `.sql`: **588 líneas**. Descarté
`ApuntesFBD.md` con el argumento de que sus bloques tienen mediana de 3 líneas y extraerlos
daría un montón de ficheros diminutos.

El argumento estaba mal planteado. El problema no era extraer, era **la unidad de
extracción**: por bloque son 136 fragmentos, pero **por capítulo son 5 ficheros** que se
leen como un cuaderno de ejercicios. Y ahí está el temario entero de la asignatura, de
`CREATE TABLE` a `GRANT`, que en Markdown no se podía parsear ni ejecutar.

`tools/extract-from-notes.py` los saca conservando el encabezado y el número de ejercicio de
cada bloque:

| Fichero | Bloques | Tema |
| --- | --- | --- |
| `chapter-1-schema-definition.sql` | 1 | `CREATE TABLE`, tipos de datos |
| `chapter-2-data-maintenance.sql` | 15 | `INSERT`, `UPDATE`, `DELETE`, fechas |
| `chapter-3-queries.sql` | 109 | joins, agregación, subconsultas, operadores de conjunto |
| `chapter-4-views.sql` | 7 | nivel externo: vistas |
| `chapter-5-catalogue-and-privileges.sql` | 4 | catálogo, `GRANT` y `REVOKE` |

Siete bloques documentan la sintaxis en vez de ejecutarse
(`UPDATE t SET a = v [WHERE <cond>];`) y se escriben comentados, para que el capítulo siga
parseando. `make diff-check` regenera y falla si los capítulos dejan de coincidir con los
apuntes.

**De 588 líneas a 920 sentencias en 11 ficheros.**

#### Barrido completo del resto de FBD

Para asegurar que no queda SQL fuera:

| Dónde | Resultado |
| --- | --- |
| Los 6 `.sql` del árbol | Todos versionados, todos incluidos |
| `Entregables_FBD_parte2.zip` | Mismos 3 ficheros; solo difieren en comentarios, y la versión del árbol es la más completa |
| 11 `.tex` propios | Sin SQL, salvo `Practica1-Oracle.tex`: un bloque comentado y otro con una `i` suelta |
| `seminario1.tex` (782 líneas) | Diseño conceptual y ER, sin SQL |
| `Teoria/Relacion1-3.tex` | Solo portada e `includegraphics` |
| PDF de relaciones, seminarios y temarios | `pdftotext` + búsqueda de `SELECT/CREATE/INSERT`: **0 coincidencias** |
| `S4_FBD.md`, `RelacionT4_FBD.md` | Álgebra relacional y nivel interno; sin SQL |
| `Simulacro2` | Test de opción múltiple, contenido del blog |

Los apuntes se quedan **también** en el blog: la web enlaza su PDF y ese enlace no cambia.
El repositorio lleva el `.md` en `notes/` porque es la fuente de la que genera los capítulos.

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

- [x] `Parcherckers` → **`parchis-ai`**. Es la **práctica 3 de IA**, no una práctica sin
      identificar: el juego ParCheckers es el que se usa en esa asignatura. Se cierra en la
      [parte C](#parte-c--los-cuatro-repositorios-de-ia).
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

## Parte C · Los cuatro repositorios de IA — **hecha**

> **Esta parte decía que había tres copias del mismo trabajo y que se fusionaban en uno.
> Era falso.** Los cuatro repositorios son **una asignatura y dos prácticas distintas**:
> rescate (práctica 2) y parchís (práctica 3). Fusionarlas habría juntado trabajos sin
> relación y, peor, habría publicado el simulador del profesorado.

Lo que resultó ser cada uno, comprobado con la API y con los ficheros:

| Repo | Qué es | Destino |
| --- | --- | --- |
| `Practica2_IA` (pub, 8,3 MB) | Práctica 2. Envuelve `IA_Practica2/` (era submódulo) y `practica2/` con la entrega del 2025-05-11. Arrastra el simulador entero, un `a.out` y un `jmeter.log` | → **`rescue-agents`** |
| `IA_Practica2` (priv) | Importación de `ugr-ccia-IA/practica2` con commits propios mezclados con los del profesorado. **No es una copia** | archivado, tras rescatar lo suyo |
| `Parcherckers` (pub) | Práctica 3. Ya curado: `AIPlayer.cpp` (1.467 líneas), `.h`, memoria y README | → **`parchis-ai`** |
| `practica3` (priv, 14 MB) | Importación **sin tocar** de `ugr-ccia-IA/practica3`. Los 10 commits son de los profesores y su `AIPlayer.cpp` es el stub de 155 líneas con movimiento aleatorio. **Cero código propio** | archivado |

### C.1 · `parchis-ai` — **hecho**

**Origen:** `Parcherckers` · **Asignatura:** IA, práctica 3 · **Lenguaje:** C++
**Repositorio:** <https://github.com/Ismael-Sallami/parchis-ai> · release `v1.0`

- [x] Renombrar. `gh repo rename` deja redirección permanente.
- [x] Estructura: `src/AIPlayer.{cpp,h}`, `docs/report.pdf` (antes `Memoria.pdf`).
- [x] README con los 10 apartados, `LICENSE` MIT, `.gitignore`, topics, descripción.
- [x] Release `v1.0` con el informe adjunto.
- [x] Verificado contra el blog: `AIPlayer.cpp` y `.h` **idénticos byte a byte**.

El README documenta lo que hace el motor con datos del propio código —poda alfa-beta a
profundidad 8, poda probabilística con `epsilon` 0,3, ordenación de movimientos,
profundidad dinámica por factor de ramificación y búsqueda de quietud de hasta 3 niveles— y
la tabla de resultados sale de la memoria: **4/6 contra los tres ninjas** con poda
probabilística y quietud, 3/6 con poda simple, 1/6 con todas las mejoras encima. El mejor
jugador no es el que más maquinaria lleva.

### C.2 · `rescue-agents` — **hecho**

**Origen:** `Practica2_IA` · **Asignatura:** IA, práctica 2 · **Lenguaje:** C++
**Repositorio:** <https://github.com/Ismael-Sallami/rescue-agents> · release `v1.0`

- [x] **Rescatar antes de purgar.** `IA_Practica2` tenía seis funciones que la entrega
      final perdió, más dos instantáneas del rescatador de nivel 2:

      | Fichero | Solo en la versión del 2025-05-05 |
      | --- | --- |
      | `auxiliar.cpp` | `AnchuraAuxiliar`, `AnchuraAuxiliar_V2`, `applyA_lvl4`, `CasillaAccesibleAuxiliar_lvl4`, `ComportamientoAuxiliarNivel_E` |
      | `rescatador.cpp` | `rastroXensensores` |
      | `nivel2.cpp` | 534 líneas, de las que solo 64 sobreviven en la entrega |

      Van a `docs/earlier-iterations/`, con un README que explica qué hacía cada una.
- [x] Purgar del árbol y del historial el simulador del profesorado (`mapas`, `ply`,
      `include`, `src`, `bin_src`, `doc`, `debug_tutorial`, `CMakeLists.txt`, `install.sh`,
      la plantilla y los `.gitpod*`), el `a.out`, el `jmeter.log` y `SALIDAS.txt`.
      **De 8,3 MB a 244 KB.**
- [x] Fuera también `Autoevaluacion.pdf`: son 24 páginas del **formulario del profesorado**
      con las respuestas escritas encima. No se republica.
- [x] Aplanar: `practica2/` → `src/`, los scripts a `tools/`, las salidas de los once tests
      a `docs/results/`.
- [x] README con los 10 apartados, `LICENSE` MIT corregido a «Ismael Sallami Moreno»,
      `.gitignore`, topics, descripción y release `v1.0`.
- [x] Verificado: `src/` **idéntico al `practica2.zip` del blog**, cero rutas del simulador
      en el historial y los enlaces publicados siguen funcionando por la redirección.

#### Lo que se encontró al revisar el código para el README

| Hallazgo | Detalle |
| --- | --- |
| `ComportamientoRescatadorNivel_3` devuelve `IDLE` | El rescatador no juega el nivel 3. La alternativa, `ComportamientoRescatadorNivel_E`, está escrita pero comentada en `think()` |
| `tools/test.sh` exige llamarse desde `IA_Practica2` | Comprueba el nombre de la carpeta actual, que es la del simulador, no la del repositorio |
| Los dos planificadores no son el mismo | El rescatador resuelve el nivel 2 con **Dijkstra** y el auxiliar con **A\***; el nivel 4 usa A\* en los dos |
| `docs/earlier-iterations/` no compila junto a `src/` | Definen las mismas clases. Están para leerse |

El CI de los dos repos ejecuta `cppcheck` (y `shellcheck` en `rescue-agents`), no compila, y
el badge lo dice. **No puede compilar**: los dos repositorios del profesorado se reiniciaron
para la edición 2026 —`practica2` arranca el 2026-03-03 y `practica3` el 2026-04-27— así que
el marco de 2024-25 no se puede descargar de ningún sitio público, y republicarlo está
prohibido. `cppcheck` analiza sin resolver los `#include` que faltan: 0 errores en los dos.

### C.3 · Archivar los dos privados — **hecho**

```bash
gh repo archive Ismael-Sallami/IA_Practica2 --yes
gh repo archive Ismael-Sallami/practica3    --yes
```

Archivar deja el repositorio en solo lectura, no cambia su visibilidad y es reversible.
`IA_Practica2` no se borra porque tiene historial propio; `practica3` tampoco, por la
[regla 5](REGLAS.md#5-nada-se-borra-sin-haberse-movido-antes), aunque no tenga ni una línea
suya.

### C.4 · Barrido de IA, completo

| Dónde | Resultado |
| --- | --- |
| `.tex` de la asignatura | **0** bloques `lstlisting` o `verbatim` |
| `.md` de la asignatura | **0** bloques de código |
| `practica3.zip`, `practica2.zip` | Las dos entregas, ya cubiertas por los repos nuevos |
| `SoftwareRP1(1).zip` y su copia desplegada | `agent_hormiga.cpp`, `agent_robot.cpp` y `agent_golpe.cpp` **idénticos al zip plantilla de 2018**: material de clase, no trabajo propio |
| Práctica 1 | Lo propio son `solve_8puzzle.py` y `solve_8puzzle_v2.py`, 158 líneas en total. **No dan para repositorio**: se quedan en el blog |

- [ ] Actualizar los enlaces de IA en `content/sections/doble-grado/pages/tercero.mjs` — se
      hace en la [fase 5](fase-5-indexado.md). Mientras tanto siguen funcionando por la
      redirección que deja `gh repo rename`.

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
- [ ] Revisar que los 6 tengan el README al día: son los que se abren primero.

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
- `rescue-agents` tiene la práctica 2 y `parchis-ai` la práctica 3, cada una con su
  repositorio; `IA_Practica2` y `practica3` archivados.
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
