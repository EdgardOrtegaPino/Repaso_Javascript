// Funciones -Function Expression


// function declaretion
// function sumar(numero = 0, numero2 = 0) {
//     console.log(numero + numero2)
// }

// function expression
const sumar = function(numero = 0, numero2 = 0) {
    return numero + numero2
}

const resultado = sumar(30, 20)

console.log(resultado)