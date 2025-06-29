En Java, **no puedes directamente asignar un objeto de tipo base (por ejemplo, `Documento`) a una variable de tipo derivado (por ejemplo, `Libro`)** sin un casting explícito, porque no hay garantía de que el objeto realmente sea una instancia del tipo derivado.

### **Ejemplo:**
```java
Documento docu = new Documento();
Libro libro = docu; // Error de compilación: no se puede asignar Documento a Libro
```

Esto da error porque no todos los objetos de tipo `Documento` son necesariamente objetos de tipo `Libro`. Aunque `Libro` hereda de `Documento`, la relación no es bidireccional.

---

### **Cómo hacerlo con un casting explícito:**
Si estás seguro de que el objeto de tipo `Documento` realmente es una instancia de `Libro`, puedes hacer un **casting explícito**. Sin embargo, si el objeto no es del tipo `Libro`, obtendrás una excepción en tiempo de ejecución (`ClassCastException`).

#### Ejemplo con casting:
```java
Documento docu = new Libro(); // docu realmente es un Libro
Libro libro = (Libro) docu;   // Casting explícito: Correcto, porque docu es un Libro
libro.leer();                 // Ahora puedes acceder a los métodos de Libro
```

---

### **Error en tiempo de ejecución:**
Si intentas hacer un casting a una clase derivada pero el objeto no es realmente una instancia de esa clase, ocurrirá una excepción en tiempo de ejecución:

```java
Documento docu = new Documento(); // docu es un Documento, no un Libro
Libro libro = (Libro) docu;       // ClassCastException: docu no es un Libro
```

---

### **Uso seguro con `instanceof`:**
Para evitar errores, puedes usar el operador `instanceof` para verificar si el objeto es de un tipo específico antes de realizar el casting.

#### Ejemplo:
```java
Documento docu = new Documento();

if (docu instanceof Libro) {
    Libro libro = (Libro) docu;
    libro.leer(); // Solo se ejecuta si docu realmente es un Libro
} else {
    System.out.println("docu no es un Libro");
}
```

---

### **Resumen:**
1. **Asignación de base a derivada directamente:** No es válida sin casting explícito.
2. **Casting explícito:** Es necesario, pero solo funciona si el objeto realmente es de la clase derivada, de lo contrario, lanzará una excepción.
3. **Verificación con `instanceof`:** Es una práctica segura para evitar excepciones al verificar el tipo del objeto antes del casting.