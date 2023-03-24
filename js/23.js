// Manipular elementos HTML con JS

const heading = document.querySelector('.heading')
heading.textContent = 'Un nuevo heading'

console.log(heading.textContent) // se creo un nuevo heading


const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'

const enlaces = document.querySelectorAll('navegacion a')

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace') // para poder cambiar todas las etiquetas navegacion a