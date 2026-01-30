# asignarle un material sin iluminación ni sombreado
var mat := StandardMaterial3D.new() # crear objeto 'StandardMaterial3D' 
## configurar el objeto con el material ('mat')
mat.vertex_color_use_as_albedo = false # no usar colores de vértices
mat.albedo_color = Color( 1.0, 0.4, 0.4 ) # color plano de la malla
mat.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED # sin sombr.
mat.cull_mode = BaseMaterial3D.CULL_DISABLED # sin cribado 
mat.lighting = false # no usar la luces
## redefinir atributo 'material_override' del nodo 'MeshInstance3D'
material_override = mat
