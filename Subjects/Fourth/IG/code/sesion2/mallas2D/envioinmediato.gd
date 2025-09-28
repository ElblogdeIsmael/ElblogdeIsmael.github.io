extends MeshInstance2D

var t : float = 0 # tiempo total desde inicio en segundos.

func _ready():
    mesh = ImmediateMesh.new() # crear 'Mesh' vacío al inicio.

func _process(delta: float):
    # actualiza tiempo transcurrido
    t += delta

    # calcular un vector 'd' que va cambiando con el tiempo
    var d := 0.2 * Vector2(cos(4.0 * t), sin(4.0 * t))

    # volver a definir las tablas
    mesh.clear_surfaces() # limpia el mesh
    mesh.surface_begin(Mesh.PRIMITIVE_TRIANGLES) # dar tipo de primitiva

    # definir vértice 0
    mesh.surface_set_color(Color(1.0, 0.0, 0.0))
    mesh.surface_add_vertex_2d(Vector2(0.2, 0.2) + d) # usa 'd' animado

    # definir vértice 1
    mesh.surface_set_color(Color(0.0, 1.0, 0.0)) # opcional: si no conserva
    mesh.surface_add_vertex_2d(Vector2(1.0, 0.5))

    # definir vértice 2
    mesh.surface_set_color(Color(0.0, 0.0, 1.0)) # opcional: si no conserva
    mesh.surface_add_vertex_2d(Vector2(0.5, 1.0))

    mesh.surface_end() # fin de los vértices