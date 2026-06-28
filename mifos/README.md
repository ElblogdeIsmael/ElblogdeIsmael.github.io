# /mifos/ — Archivo privado cifrado de informes GSOC

Sección privada que **indexa y renderiza en el navegador** los informes del
proyecto GSOC *Mifos Gazelle*. Estilo de `/md2html/` y `/viewer/`, pero detrás
de un login y con el contenido **cifrado de extremo a extremo**.

## Cómo funciona la seguridad

GitHub Pages es estático: **no hay servidor**, así que un login que solo compara
una contraseña en JavaScript no protege nada (cualquiera podría pedir el `.md`
por su URL). Por eso aquí los ficheros se guardan **cifrados**:

- La clave AES-256 se deriva de `usuario:contraseña` con **PBKDF2-SHA-256 (250 000
  iteraciones)**.
- Cada informe e imagen se cifra con **AES-256-GCM** (IV aleatorio por fichero).
- Lo único que se commitea es el resultado cifrado (`data/*.enc`, `index.enc`) y
  los parámetros públicos del KDF (`manifest.json`, **sin** la contraseña).
- El descifrado ocurre **solo en el navegador**, tras introducir credenciales
  correctas. Sin la contraseña, los `.enc` son ruido.

> ⚠️ **La seguridad depende por completo de la fuerza y el secreto de la
> contraseña.** Una contraseña corta o adivinable puede romperse por fuerza
> bruta offline (alguien baja los `.enc` del repo y prueba combinaciones).
> Usa una passphrase larga y no la compartas. El usuario también forma parte de
> la clave (`usuario:contraseña`).

## Regenerar el contenido

Cada vez que cambien los informes en el origen, vuelve a cifrar y commitea la
salida:

```bash
# desde la raíz del repo
MIFOS_PASS='tu-contraseña' node mifos/build.mjs
```

Variables de entorno:

| Variable     | Por defecto                                   | Descripción                          |
|--------------|-----------------------------------------------|--------------------------------------|
| `MIFOS_PASS` | *(obligatoria)*                               | Contraseña. **Nunca** se commitea.   |
| `MIFOS_USER` | `GSOC-MIFOS`                                   | Usuario (parte de la clave).         |
| `MIFOS_SRC`  | `…/PROJECTS_GSOC_2026/MIFOS/mifos-gazelle/informes` | Carpeta origen de los informes. |

Esto regenera `data/*.enc`, `index.enc` y `manifest.json`. Commitea esos
ficheros (y `index.html`, `app.js`, `style.css`, `build.mjs`, este README).

## Acceso

Entra por URL directa: **`/mifos/`** (no hay enlace público en la web).

## Qué se commitea y qué no

- ✅ Se commitea: ficheros cifrados (`.enc`), `manifest.json`, código (`*.html`,
  `*.js`, `*.css`, `build.mjs`), este README.
- ❌ Nunca se commitea: la contraseña, ni ningún `.md` en claro, ni el
  `token_docker.txt` u otros secretos del origen (el build solo procesa `.md`).
