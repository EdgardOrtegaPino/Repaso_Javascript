const precio = 300


//las variables puede repetirse en una funcion

function unaFuncion() {
    const precio = 600 // si no existe adentro de la funcion la constante toma el precio de 300 pero si esta adentro toma los 600
    console.log(precio)
}


console.log(precio) // y afuera de la funcion el valor de precio sera 300 y si no existe no llegara a niun valor

if (true) {
    console.log(precio)
}


unaFuncion()