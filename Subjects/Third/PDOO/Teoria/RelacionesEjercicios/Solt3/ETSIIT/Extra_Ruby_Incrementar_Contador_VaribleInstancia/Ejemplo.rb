class Ejemplo
  @contador = 0  # Variable de clase

  # Método de clase para incrementar la variable de clase
  def self.incrementar_contador
    @contador += 1
  end

  # Método de clase para obtener el valor de la variable de clase
  def self.mostrar_contador
    @contador
  end

  # Método de instancia que invoca el método de clase
  def aumentar
    self.class.incrementar_contador
  end

  # Getter de instancia que permite acceder a la variable de clase
  def contador
    self.class.mostrar_contador
  end
end
