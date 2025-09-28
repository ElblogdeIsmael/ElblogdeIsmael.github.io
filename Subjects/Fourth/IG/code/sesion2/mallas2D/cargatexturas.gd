func CargarTextura( arch : String ) -> ImageTexture :
    ## crear un objeto 'Image' con la imgen
    var imagen := Image.new()
    assert( imagen.load(arch) == OK, "Error cargando '"+arch+"'." )
    
    ## crear un objeto 'ImageTexture' a partir del objeto 'Image'
    var textura := ImageTexture.create_from_image( imagen )
    print("Textura cargada desde archivo: '",arch,"'.")
    
    ## devolver la textura
    return textura