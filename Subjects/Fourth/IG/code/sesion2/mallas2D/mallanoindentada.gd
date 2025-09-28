extends MeshInstance2D

func _ready():
	# Declarar y dimensionar un array para las tablas
	var tablas: Array = []
	tablas.resize(Mesh.ARRAY_MAX)
	
	# Añadir la tabla con las coordenadas de posición de 6 vértices
	
	# Cambiar el color de la malla (atributo 'modulate' del nodo)
	modulate = Color(1.0, 0.5, 0.5)
	
	# Inicializar el atributo 'mesh' de este nodo
	mesh = ArrayMesh.new()  # Crea malla en modo diferido, vacía
	mesh.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, tablas)

	## añadir la tabla con las coordenadas de posición de 6 vértices:
	tablas[ Mesh.ARRAY_VERTEX ] = PackedVector2Array([
		Vector2( 0.2, 0.1 ), Vector2( 0.7, 0.1 ), Vector2( 0.1, 0.9 ),
		Vector2( 0.3, 1.0 ), Vector2( 1.0, 0.2 ), Vector2( 1.0, 1.1 ),
	])

	## Otra posibilidad es haciendo push_back:

	## añadir la tabla con las coordenadas de posición de 6 vértices:
	var posv := PackedVector2Array([]) # crear array posic. verts. vacío
	posv.push_back(Vector2(0.2,0.1)); posv.push_back(Vector2(0.7,0.1))
	posv.push_back(Vector2(0.1,0.9)); posv.push_back(Vector2(0.3,1.0))
	posv.push_back(Vector2(1.0,0.2)); posv.push_back(Vector2(1.0,1.1))
	tablas[ Mesh.ARRAY_VERTEX ] = posv # asignar la tabla de posiciones