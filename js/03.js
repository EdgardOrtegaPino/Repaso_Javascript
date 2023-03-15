// tipos de datos

//undefined si no le asignas un valor a una variable ya sera undefined
let cliente = 20
console.log(cliente)
console.log(typeof(cliente))


//boolean
const descuento = true

console.log(descuento)
console.log(typeof(descuento))

//number todos son tratados como numero no como en otros lenguajes que tiene float int

const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof(numero1))
console.log(typeof(numero2))
console.log(typeof(numero3))

// String o Cadenas de Texto

const alumno = "Edgard"
let producto = 'Monitor 20 pulgadas'

const numero4 = "30"
const numero5 = 30

console.log(typeof(numero4))
console.log(typeof(numero5))

//BigInt

const numeroGrande = BigInt(6456456456464645645645645643643646)
console.log(typeof(numeroGrande))

const numero6 = 10
const numero7 = 20


console.log(numero6 + Number(numeroGrande))

//los tipos BigInt no se pueden mezclar con los tipo number o cualquier otro tipo de datos

//Symbol los symbol siempre seran unicos

const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol)

console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())


//Null 
const descuentos = null

console.log(typeof(descuentos))