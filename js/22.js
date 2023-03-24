// Selectores del DOM

const heading = document.querySelector('.heading') // maximo para 1 elemento

// console.log(heading)
// console.log(heading.textContent)
// console.log(heading.tagName)
// console.log(heading.classList)
// console.log(heading.id)

const enlace = document.querySelector('.navegacion a') // solo se mostrara un enlace no todos
console.log(enlace)
const enlaces = document.querySelectorAll('.navegacion a') // muestratodos los que cumplan la condicion
console.log(enlaces)

// queriSelectorAll para traerse varios