
/***************************PROMESAS******************************************************** */


//Promesas... ya haré yo esto en un futuro
/*promise () es un proxy de un valor que no necesariamente se conoce cuando se crea la promesa.
Le permite asociar controladores con el valos eventual de éxito o el motivo de falla de una asincronia*/
/*¿Qué es Asincronia? Esto permite que devuelvan valores como los metódos asincronos:
en lugar de devolver indemiatamente el valor final, el método asincrono devuelve una promesa
de proporcionar el valor en algún momento en el futuro*/


/*la promesa tiene 3 estados: 
(pending)pendiente : estado inicial, ni cumplido ni rechazado
(fulfilled)cumplida : lo que significa que la operación se cumplió con exito.
(rejected)rechazada : lo que significa que la operación falló 

cuando la API responda responde con los valores de cumplida o rechada*/

const promesa = fetch('https://pokeapi.co/api/v2/pokemon/ditto');          //aqui devuelve una promesa de que se hará algo . FETCH DEVUELVE UN PROMISE (CUANDO LO EJECUTAMOS ESTÁ EN ESTADO PENDING)
console.log('Mando petición a la API');                                   //te envía tu madre al super a comprar leche (esto es la promesa)

promesa.then((data) => {                                                 //cuando la promesa termina y esta bien pasa por el then. SE EJECUTA THEN ES CUANDO TERMINA DE FORMA EXITOSA LA LLAMADA 
    console.log('He terminado, aquí está la data:', data);              //si hay huevos, es decir que se cumple la promesa trae leche
});

promesa.catch((error) => {                                            //si está mal pasa por el catch. SE EJECUTA CATCH LANZA CUANDO HAY UN ERROR
    console.log('Ha habido un error', error);                        //si la promesa no se cumple porque no hay leche trae azúcar
});

promesa.finally(() => {                                            //esto nos devuelve cualquiera de los dos casos este bien o mal. QUE NOS INDIQUE QUE HA FINALIZADO LA PROMESA                         
    console.log('He finalizado la promesa');                      //en cualquiera de los dos casos haya huevos o no , siempre que vayas al supermercado trae una pata de jamón
})


//NO ES OBLIGATORIO NINGUNO DE LOS MÉTODOS (THEN, CATCH, FINALLY), PODEMOS PONER 1, 2 O NINGUNO


/******************ASÍ ES COMO SE ESCRIBE NORMALMENTE*********************** */

/*
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((data) => {                                           // Cuando esté bien
        console.log('He terminado, aquí está la data:', data);
    })
    .catch((error) => {                                       // Cuando esté mal
        console.log('Ha habido un error', error);
    })
    .finally(() => {                                        // Siempre
        console.log('He finalizado la promesa');
    });
*/


/**********************OTRA FORMA DE MANEJAR LAS PROMESAS****************** */


//Para definir que una función es asincrona, se determina de la siguiente manera:
// await siempre tiene que ir con el async

async function a () {                                                            //al principio le ponemos async, esta función es asincrona y devuelve una promesa                                                  
  console.log('Pido a la API, pero me espero a la respuesta');
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');      //este fetch nos devuelve el resultado porque tiene el await. ESPERAMOS A QUE LA RESPUESTA ESTE, SE PARA HASTA QUE LA PROMESA SE CUMPLA
  console.log('Hola');                                                         //TODO LO QUE SE CUMPLA DESPUES DEL await fetch ES PORQUE LA PROMESA SE HA CUMPLIDO 
  console.log(response);
}

a();
console.log('Hola1');


/************************ */

async function saluda(nombre){
  setTimeout(() => Promise.resolve(``), 3000)                     //Promise.reject (cuando hay un error, devuelvo mal) , Promise.resolve (devuelvo todo OK)
}



