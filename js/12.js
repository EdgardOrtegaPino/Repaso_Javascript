// Funciones - Function Declaration

// function sumar(numero = 0, numero2 = 0) {
//     console.log(numero2)
//     console.log(numero + numero2)
// }
// sumar(10, 20)
// sumar(2, 3)
// sumar(100)


//destructor de arreglos
function sumar(numero = 0, numero2 = 0) {

    return [numero + numero2, 'Hola Mundo']
}

const [resultado, holaMundo] = sumar(20, 30)

console.log(resultado)
console.log(holaMundo)

//destructor de objetos
function restar(numero = 0, numero2 = 0) {

    return {
        resultado: numero - numero2,
        mensaje: 'Hola Mundo'
    }
}

const [resultado2, mensaje] = sumar(20, 30)

console.log(resultado2)
console.log(mensaje)

// const [resultado, setResultado] = useState(0)   como se crean en react distintamente algunas cosas