// Objetos - Manipulación

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}


// Object.freeze(producto) - freeze - No deja modificarlo
// Object.seal(producto) - seal - Modificar propiedades existentes, no permite añadir ni eliminar

//Reescribir un valor
producto.nombre = "Monitor Curvo"

//Si no existe, lo va a añadir
producto.imagen = "imagen.jpg"

// elimina una propiedad
delete producto.disponible

console.table(producto)