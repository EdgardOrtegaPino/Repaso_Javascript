// Iteradores en JS

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']

// forEach - Acceder a cada elemento del array (listar)
const arrayForeach = tecnologias.forEach(function(tech) {
    return tech
})


// Crear un nuevo array
const arrayMap = tecnologias.map(function(tech) { // en react se utiliza mas el map porque te crea un nuevo arreglo
    return tech
})

console.log(arrayForeach) // el de foreach dice undefined mientras que el Map se llena
console.log(arrayMap)