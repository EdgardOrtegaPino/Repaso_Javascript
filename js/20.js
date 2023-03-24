// Ternario

const autenticado = true;
autenticado ?
    console.log('usuario autenticado') :
    console.log('No autenticado, dirigir hacia login')

// Doble ternario

const saldo = 600
const pagar = 700
const tarjeta = false

saldo > pagar ?
    console.log('puedes pagar con saldo') :
    tarjeta ?
    console.log('Puedes pagar con tarjeta') :
    console.log('No puedes pagar')