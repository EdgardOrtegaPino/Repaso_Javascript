// Comparacion y Operador Estricto

const numero1 = 20
const numero2 = "20"

/* 
    ==  ( Comparacion pero no es estricto)
    === (Comparacion estricta - Revisa valor y tipo de dato)


*/



if (numero1 === Number(numero2)) {
    console.log('Si!, son iguales')
} else {
    console.log('No, no son iguales')
}

const autenticado = true

if (autenticado) {
    console.log('Si esta autenticado')
}