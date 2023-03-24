const saldo = 600
const pagar = 700
const tarjeta = true

// if (saldo > pagar) {
//     console.log('Puedes pagar con tu saldo')
// } else if (tarjeta) {
//     console.log('Puedes pagar con tu tarjeta')
// } else {
//     console.log('No, no puedo pagar')
// }



/*  
    || - Al menos una debe cumplirse
    && - Todas deben cumplirse
    

*/

if (saldo > pagar && tarjeta) { // cumplir ambas
    console.log('Puedes pagar con tu saldo')
} else {
    console.log('No, no puedo pagar')
}