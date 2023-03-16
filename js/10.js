// Destructuring de arrays

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']

const [, , , , var5] = tecnologias // extrae las posiciones 


console.log(var5)

const cliente = {
    nombre: 'Edgard',
    tipo: 'Premium'
}

const { tipo } = cliente

console.log(tipo)