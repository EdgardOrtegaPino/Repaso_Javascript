// Unir 2 objetos
//inmutabilidad
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'edgard',
    premium: true
}

// const nuevoObjeto = Object.assign(producto, cliente)  // NO porque te modifica el original
const nuevoObjeto2 = {
    producto: {...producto },
    cliente: {...cliente }
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)