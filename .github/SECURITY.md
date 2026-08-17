# Avisos de seguridad y de material publicado por error

Este repositorio no es software con usuarios: es un archivo de apuntes. Aun
así, tres veces ha publicado sin querer algo que no debía, y ese es el aviso
que sí urge.

## Qué avisar

- **Credenciales o claves.** Han aparecido tres claves SSH privadas de un
  laboratorio y las credenciales de una base de datos de la universidad.
- **Datos personales.** Un DNI llegó a estar en seis cabeceras de código y en
  dos PDF, y uno de ellos lo servía la web.
- **Material con derechos.** Transparencias del profesorado, guiones de
  prácticas, capítulos de manual. También cuando entra **como imagen** dentro de
  un documento propio, que es como se colaron seis páginas fotografiadas de un
  libro.

## Cómo

**No abras una issue pública** para nada de lo anterior: una issue deja el
hallazgo indexado mientras se arregla.

- Usa el aviso privado de GitHub, en la pestaña **Security → Report a
  vulnerability** de este repositorio.
- Si prefieres el correo, escribe a la dirección pública del perfil
  [@ElblogdeIsmael](https://github.com/ElblogdeIsmael).

Dime qué fichero es y, si puedes, en qué línea o página. Con eso basta.

## Qué pasa después

Un secreto filtrado no se arregla borrando el fichero: sigue en el historial y
sigue siendo alcanzable. El procedimiento que se ha seguido aquí es rotar la
credencial primero, reescribir el historial con `git filter-repo` después, y
mover también las etiquetas, porque mantienen vivo lo purgado.

Las `refs/pull` que GitHub crea por cada pull request son de solo lectura y
conservan el historial anterior a cualquier reescritura. **Solo el soporte de
GitHub puede borrarlas**, y en este repositorio lo hizo una vez avisando de que
no repetiría la excepción. Así que lo purgado antes de agosto de 2026 está
limpio, y una reescritura futura no lo estaría del todo.

El material con derechos se retira del árbol y del historial, y se guarda una
copia local fuera del repositorio con sus rutas originales.

## Versiones

Se mantiene lo que hay publicado en `main`. No hay releases ni versiones
anteriores que sostener.
