extends MeshInstance2D
func _ready():
    ## declarar y dimensionar un array para las tablas
    var tablas : Array = [] 
    tablas.resize( Mesh.ARRAY_MAX )

    ## añadir las tablas con posiciones y colores de 6 vértices 
    ## inicializar el atributo 'mesh' de este nodo
    mesh = ArrayMesh.new() ## crea malla en modo diferido, vacía 
    mesh.add_surface_from_arrays( Mesh.PRIMITIVE_TRIANGLES, tablas )

    ## añadir las tablas con posición y colores de 6 vértices 
    tablas[ Mesh.ARRAY_VERTEX ] = PackedVector2Array([ ... ]) # igual
    tablas[ Mesh.ARRAY_COLOR ] = PackedColorArray([
        Color( 1.0,0.0,0.0 ), Color( 0.0,1.0,0.0 ), Color( 0.0,0.0,1.0 ),
        Color( 1.0,1.0,0.0 ), Color( 0.0,1.0,1.0 ), Color( 1.0,0.0,1.0 ),
    ])

    ## Otra posibilidad es haciendo push_back:

    var posv := PackedVector2Array([]) # crear array posic. verts. vacío
    var colv := PackedColorArray([]) # crear array colores vértices vacío
    posv.push_back(Vector2(0.2,0.1)); colv.push_back(Color(1.0,0.0,0.0))
    # .... posiciones y colores del resto de vértices ...
    tablas[ Mesh.ARRAY_COLOR ] = colv # asignar la tabla de colores
    tablas[ Mesh.ARRAY_VERTEX ] = posv # asignar la tabla de posiciones