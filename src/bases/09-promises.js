import { getHeroeById } from "./bases/08-imp-exp";

const getHeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            if (heroe)
            resolve(heroe)
            else reject('no se pudo encontrar al heroe')
            // reject( 'No se encontro al heroe')
        }, 2000)
    })
}

getHeroByIdAsync(2)
    .then(console.log)
    .catch(console.warn)

    // const promesa = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         const heroe = getHeroById(2);
//         resolve(heroe)
//         // reject( 'No se encontro al heroe')
//     }, 2000)
// })

// promesa.then( (heroe) => {
//     console.log('heroe: ', heroe)
// })
// .catch( err => console.warn( err ))
