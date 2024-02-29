/* Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.
Recorriendo el array:

1-Utilizamos un bucle (for) para ir elemento por elemento a través del array (arrayDeTextos).
Comparando cada elemento:

2- Comparamos cada elemento del array con el textoBuscado.
Devolviendo la posición si hay coincidencia:

4-Si encontramos un elemento que es igual al textoBuscado, devolvemos la posición (i) en la que lo encontramos.
Manejando el caso de no encontrar coincidencia:

5-Si llegamos al final del bucle y no hemos encontrado ninguna coincidencia, devolvemos -1 para indicar que el textoBuscado no está en el array.

Haz varios ejemplos y compruebalos.

Sugerencia de función:

```js
function findArrayIndex(array, text) {}
```

Ej array:
````js
['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'] */

/* function findArrayIndex(array, text) {
  return array.indexOf(text);
} */

const arrayEjemplo = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

// Buscamos la posición de 'Salamandra' en el array
const posicionEncontrada = 'Salamandra';                          // esta palabra indicada es la que buscará en la funcion para saber si existe en el array

function findArrayIndex(arrayEjemplo, posicionEncontrada) {     //funcion que recibe dos parametros 
  for (let i = 0; i < arrayEjemplo.length; i++) {              //este buble recorre el arrayEjemplo     
    if (arrayEjemplo[i] === posicionEncontrada) {             // si el indice de array de texto es igual a la palabra buscada. Le decimos que busque toda la longitud del array y si el exactamente iguala la palabra indicada nos deveolverá una posicion
      return i;                                              // si esta la pablabra buscada te devuelva la posición 
    }
  }
  return -1;                                               // si no está que te devuelva -1
}

//esta constante activa la funcion, porque arriba sólo ha sido crada pero no dará ningun resultado
const resultado = findArrayIndex(arrayEjemplo, posicionEncontrada);    // guardamos este número con una nueva constante que itere con la funcion, esto nos dará un valor numérico.

// Mostramos el resultado
if(resultado !==-1){
  console.log(`La posicion encontrada de ${posicionEncontrada} es el número ${resultado}`); 
}else{
  console.log(`La posicion encontrada de ${posicionEncontrada} no está en el array`); 
}
