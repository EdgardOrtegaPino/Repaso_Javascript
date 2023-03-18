// Arrow function y array Methods

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node,js']


const nuevoArray = tecnologias.map(tech => { // se recomienda en react
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

const nuevoArray2 = tecnologias.filter((tech) => tech !== 'React') // solo una linea se puede acortar 

console.log(nuevoArray)
console.log(nuevoArray2)