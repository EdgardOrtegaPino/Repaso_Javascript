// Eventos del DOM -clicks

const heading = document.querySelector('.heading')
heading.addEventListener('click', () => {
    console.log('Diste click en heading')
})

// const clickHeading = () => {
//     console.log('Diste click en heading')
// }
// const heading = document.querySelector('.heading')
// heading.addEventListener('click', clickHeading) // clickheading debe declararse primero antes de usarse no puede ser al revez


const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => { // no puede ser
    enlace.addEventListener('click', () => {
        console.log('Diste click en un enlace')
    })
})