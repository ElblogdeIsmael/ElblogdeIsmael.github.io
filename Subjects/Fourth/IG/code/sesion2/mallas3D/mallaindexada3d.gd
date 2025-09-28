extends MeshInstance2D
func _ready():
    ## declarar y dimensionar un array para las tablas (igual que en 2D)
    var tablas : Array = [] 
    tablas.resize( Mesh.ARRAY_MAX )

    ## añadir las tablas posiciones, colores e índices de un triángulo
    ## .... (ver siguiente transparencia) ....
    ## inicializar el atributo 'mesh' de este nodo (igual que en 2D)
    mesh = ArrayMesh.new() ## crea malla en modo diferido, vacía 
    mesh.add_surface_from_arrays( Mesh.PRIMITIVE_TRIANGLES, tablas )
    ## asignarle un material sin iluminación ni sombreado
    ## ...(ver siguientes transparencias) ....