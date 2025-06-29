#begin
#En este ejemplo se asume que la principal (única en realidad) responsabilidad de las instancias de la clase Persona es saludar de una forma hasta que agotan su paciencia después de una cantidad de saludos, momento a partir del cual saludarán de otra manera.

#En la clase Persona la responsabilidad explicada anteriormente queda perfectamente reflejada en la propia clase. Al utilizar la clase es complicado incurrir en algún error ya que toda la lógica de la funcionalidad queda encapsulada en el método saluda. No es posible acceder/modificar los atributos ni tampoco invocar otros métodos distintos del que produce el saludo.

#En contraposición, la clase Persona2 no proporciona la citada funcionalidad y se convierte en un mero lugar para almacenar el valor de dos variables relacionadas. Además, se da acceso total a esos atributos. Puede observarse como se ha delegado la responsabilidad del funcionamiento del saludo en el programador que usa la clase, abriendo por tanto la posibilidad a que se produzcan errores en algunas de las ocasiones que se utilice.    
#=end

# Una solución con un diseño correcto

class Persona

  @@PACIENCIA=15

  def initialize(nombre)
    @nombre=nombre
    @nsaludos=0
  end

  def saluda
    if @nsaludos<@@PACIENCIA
      saluda_educadamente
    else
      saluda_sin_ganas
    end
    @nsaludos+=1
  end

  private

  def saluda_educadamente
    puts "Hola me llamo "+@nombre
  end

  def saluda_sin_ganas
    puts "Me llamo "+@nombre+" y estoy ya harto de la gente"
  end

end

persona=Persona.new("Manolo")
20.times {
  persona.saluda
}


###################################################

# Una solución con un diseño nada recomendable

class Persona2

  attr_accessor :nombre
  attr_accessor :nsaludos

  def initialize(nombre)
    @nombre=nombre
    @nsaludos=0
  end
end

persona2=Persona2.new("Juan")
20.times {
  if (persona2.nsaludos<15)
    puts "Hola me llamo "+persona2.nombre
  else
    puts "Me llamo "+persona2.nombre+" y estoy ya harto de la gente"
  end
  persona2.nsaludos=persona2.nsaludos+1
}
