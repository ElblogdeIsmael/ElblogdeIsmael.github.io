# Avisos

Esto es un archivo de apuntes, no software con usuarios: no hay versiones que
parchear ni releases que sostener. Se mantiene lo que haya publicado en `main`.

Lo que sí interesa saber es si algo de lo publicado no debería estarlo.

## Qué avisar

- Una clave, un token o una credencial de cualquier tipo.
- Datos personales, del autor o de cualquiera que salga en el material.
- Material con derechos: transparencias, guiones de prácticas, capítulos de
  manual. Cuenta igual cuando va incrustado **como imagen** dentro de un
  documento propio, que es la forma más fácil de que pase inadvertido.

## Cómo

**Para esto no se abre una issue.** Una issue pública deja el hallazgo indexado
justo mientras se está arreglando, que es lo contrario de lo que hace falta.

Hay dos vías privadas:

- La pestaña **Security → Report a vulnerability** de este repositorio.
- El correo del perfil, [@ElblogdeIsmael](https://github.com/ElblogdeIsmael).

Con el fichero basta. Si además cabe la línea o la página, mejor.

## Qué pasa después

Borrar el fichero no resuelve nada: sigue en el historial y sigue siendo
alcanzable. El procedimiento es rotar primero la credencial, si la hay,
reescribir el historial con `git filter-repo` después, y **mover también las
etiquetas**, porque apuntan al historial viejo y lo mantienen vivo.

El material con derechos se retira del árbol y del historial. Se guarda una
copia local fuera del repositorio, con las rutas originales, para poder
responder de qué se retiró y de dónde salía.

Para erratas, enlaces movidos y cualquier otra cosa que no sea de esta página,
[las issues](https://github.com/ElblogdeIsmael/ElblogdeIsmael.github.io/issues/new/choose)
tienen dos formularios.
