// Function - Arrow Functions 


/*
function expression

const sumar = function() {
    console.log(numero + numero2)
}


//arrow function 
const sumar = (numero = 0, numero2 = 0) => {
    return numero + numero2
}
*/

const sumar = (numero = 0, numero2 = 0) => numero + numero2 // solo si se realiza el codigo en una linea


// una function que se va a ejecutar
const sumaArrow = () => 2 + 2

const resultado = sumar(30, 30)
console.log(resultado)

const resultado2 = sumaArrow(10, 30)
console.log(resultado2)