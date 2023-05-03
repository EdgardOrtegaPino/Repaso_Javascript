// Fetch API - Async Await
// await bloquea el codigo hasta que alla una respuesta

const url = "https://jsonplaceholder.typicode.com/comments"


// const consultarAPI = () => {
//     fetch(url)
//         .then(respuesta => respuesta.json())
//         .then((resultado) => {
//             resultado.forEach(comentario => {
//                 console.log(comentario)
//             })
//         })
// }

const consultarAPI = async() => {
    const respuesta = await fetch(url)
    console.log('despues de respuesta')
    const resultado = await respuesta.json()
    console.log('despues de resultado')
    resultado.forEach(comentario => {
        console.log(comentario)
    })
}

consultarAPI();