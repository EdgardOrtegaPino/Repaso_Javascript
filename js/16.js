// Otros Array Methods utiles


const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node,js']
const numeros = [10, 20, 30]

let nuevoArray;


//filter traer los que cumplan o sean diferentes como desees
nuevoArray = tecnologias.filter((tech) => tech !== 'React') // solo una linea se puede acortar 


/* 
Comprobar si un elemento existe en el array
const resultado = tecnologias.includes('React')
console.log(resultado)

// Some - Devuelve si al menos uno cumple la condicion
const resultado2 = numeros.some(numero => numero > 15)
console.log(resultado2)

// Find - Devuelve el primer elemento que cumpla la condicion
*/
// const resultado = numeros.find(numero => numero > 5)


//Every - Retorna true o false si todos cumplen la condicion
//const resultado = numeros.every(numero => numero > 9)

// Reduce - Acumulando en el total
//const resultado = numeros.reduce((total, numero) => numero + total, 0)


// Filter - Crea un nuevo array en base a una condicion
// const resultado = tecnologias.filter(tech => tech === 'Node.js')
//const resultado = numeros.filter(numero => numero > 15)


tecnologias.forEach((tech, index) => console.log(index))


// Crear un nuevo array
const arrayMap = tecnologias.map(tech => tech) // en react se utiliza mas el map porque te crea un nuevo arreglo

console.log(arrayMap)