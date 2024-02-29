/**
 * Promesas... ya haré yo esto
 */
/*
const promesa = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
console.log('Mando petición a la API');

promesa.then((data) => {
    console.log('He terminado, aquí está la data:', data);
});

promesa.catch((error) => {
    console.log('Ha habido un error', error);
});

promesa.finally(() => {
    console.log('He finalizado la promesa');
})
*/

/*
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((data) => { // Cuando esté bien
        console.log('He terminado, aquí está la data:', data);
    })
    .catch((error) => { // Cuando esté mal
        console.log('Ha habido un error', error);
    })
    .finally(() => { // Siempre
        console.log('He finalizado la promesa');
    });
*/

async function a() {
    console.log('Pido a la API, pero me espero a la respuesta');
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    console.log('Hola');
    console.log(response);
}

a();
console.log('Hola1');