## añadir las tablas posiciones, colores e índices de un triángulo
tablas[ Mesh.ARRAY_VERTEX ] = PackedVector3Array([
    Vector3(0.6,0.6,0.1), Vector3(0.1,0.8,0.1 ), Vector3(0.2,0.1,0.1)
])
tablas[ Mesh.ARRAY_COLOR ] = PackedColorArray([
    Color( 1, 0, 0 ), Color( 0, 1, 0 ), Color( 0, 0, 1 )
])
tablas[ Mesh.ARRAY_INDEX] = PackedInt32Array([
    0, 1, 2
])

## también se puede hacer con push back