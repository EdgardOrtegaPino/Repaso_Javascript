// Operador en los arreglos

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node,js']

// Añadir elementos al array (no recomendables en react)
// tecnoligias.push('GraphQL')  //Añadir al final del array
// tecnologias.unshift('GraphQL') //Añadir al final del array



//estos se usan mas (se recomienda en react)
// const nuevoArreglo = [...tecnologias, 'GraphQL']
//const nuevoArreglo = ['GraphQL',...tecnologias]



// Eliminar elementos del array (no deben utilizarse con react)
// tecnologias.pop() //Elimina del final
// tecnologias.shift() // Eliminar al inicio
// tecnologias.splice(2,1) // Elimina de una posicion en especifica


// (se recomienda en react)
// const nuevoArray = tecnologias.filter(function(tech) {
//     return tech !== 'HTML'

//     // !== DIFERENTE A...
//     // === IGUALES A...
// })


//Reemplazar del array

//tecnologias[0] = 'GraphQL'    // modifica el original  (no se recomienda en react)

const nuevoArray = tecnologias.map(function(tech) { // se recomienda en react
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)