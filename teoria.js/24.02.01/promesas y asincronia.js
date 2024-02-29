/**
 * Promesas... ya haré yo esto.
 * 
 * Las promesas son funciones que se ejecutan de forma asíncrona, es decir, ejecutan una funcionalidad sin detener el resto de procesos.
 */

const promesa = fetch('https://pokeapi.co/api/v2/pokemon/ditto'); // Fetch es un ejemplo de función que devuelve una promesa
console.log('Mando petición a la API');

/**
 * Las promesas tienen 3 métodos que son callbacks, es decir, reciben una función por parámetro:
 * * then -> Se llama a la función indicada cuando se resuelve la promesa de forma exitosa.
 * * catch -> Se llama a la función indicada cuando FALLA la promesa.
 * * finally -> Se llama a la función siempre que se termine la promesa, independientemente del resultado.
 */

/**
 * Then se llama cuando la función promesa se cumple exitosamente.
 * Generalmente hay que pasarle al método una función callback que tendrá, generalmente, como argumento la respuesta de la promesa.
 * En el caso del fetch, este parámetro es un objeto de la clase Response, que contendrá la respuesta de la llamada HTTP
 */
promesa.then((data) => {
    console.log('He terminado, aquí está la data:', data);
});

/**
 * Catch se llama cuando la función promesa ha tenido un error.
 * Al método hay que pasarle una función callback que recibirá como parámetro el error que se ha producido.
 * En estos casos, generalmente, se informa del error en pantalla.
 * En el caso del fetch, este error se producirá por un error de comunicación con el servidor o API
 */
promesa.catch((error) => {
    console.log('Ha habido un error', error);
});

/**
 * Finally se llama siempre que se complete, de forma exitosamente o falle.
 * La función callback no recibe parámetros.
 * Generalmente se utiliza para realizar acciones cuando se complete la llamada, por ejemplo, quitar una pantalla de carga.
 */
promesa.finally(() => {
    console.log('He finalizado la promesa');
});


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
    try {                                                                                    //prueba a ejecutar esta cosa
        console.log('Pido a la API, pero me espero a la respuesta');
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');            //el await es como el Then
        console.log('Hola');
        console.log(response);
    } catch (error) {                                                                     //catch cuando surge el error que lo controle, para que se ejecute 
        console.error('Error de comunicación');
    }
}

a();
console.log('Hola1');