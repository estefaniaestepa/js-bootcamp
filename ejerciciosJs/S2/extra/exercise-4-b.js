/* Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.

1. tenemos que crear una funcion nueva que itere con el resultado de la función creada en el anterior ejercicio
2. elimiar el valor que le ha dado la primera funcion
2. luego tenemos que imprimir por consola el array modificado

*/


const arrayEjemplo = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

// Buscamos la posición de 'Salamandra' en el array
const posicionEncontrada = 'Mosquito';                          // esta palabra indicada es la que buscará en la funcion para saber si existe en el array


/*declaramos la funcion, pero esta funcion no nos dará nin resultado si no la la llamamos
la primera funcion ha sido creada pero no ha sido activada
*/
function findArrayIndex(arrayEjemplo, posicionEncontrada) {     //funcion que recibe dos parametros 
  for (let i = 0; i < arrayEjemplo.length; i++) {              //este buble recorre el arrayEjemplo     
    if (arrayEjemplo[i] === posicionEncontrada) {             // si el indice de array de texto es igual a la palabra buscada. Le decimos que busque toda la longitud del array y si el exactamente iguala la palabra indicada nos deveolverá una posicion
      return i;                                              // si esta la pablabra buscada te devuelva la posición 
    }
  }
  return -1;                                               // si no está que te devuelva -1
}


function arrayIndex(arrayEjemplo, posicionEncontrada) {                                  //creamos una funcion con los mismos parametros para que sepa de donde coger la informacion
  //esto nos dice en que poscion está la palabra que queremos buscar

  const eliminar = findArrayIndex(arrayEjemplo, posicionEncontrada);                    //Con esta nueva constante llamar a la función de arriba y activarla 
  
  if (eliminar !==-1) {                                                                // si el resultado de la nueva constante con el valor de la primera funcion es diferente a -1
    arrayEjemplo.splice(eliminar, 1);                                                 //le decimos que del elimine del array , le decimos que elimine la constante eliminar, 1 (1 palabra) 
    console.log(` Esta palabra ${posicionEncontrada} ha sido eliminada del array`);   //los console.log lo indicamos dentro de la funcion porque esta funcion no tiene un return por lo que no nos devolvería ningun resultado
    console.log(arrayEjemplo);
  } else {
    console.log(` Esta palabra ${posicionEncontrada} no se encuentra en el array`);
  }
}

const resultadoEliminado = arrayIndex(arrayEjemplo, posicionEncontrada);

