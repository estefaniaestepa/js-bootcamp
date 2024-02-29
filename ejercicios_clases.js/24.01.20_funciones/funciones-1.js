/**
 * Escribir una función que reciba una lista por parámetro y devuelva una copia de la lista
 */

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];            //creamos una constante con la lista



function copiarLista(lista){                          //hacemos la funcion lista 
  const lista = [];                                  //creamos una constante con la lista vacía para que en ella esté la copia del array original


  for(copiar of lista){                            //creamos un bucle para que recorra la lista. El for of, se utiliza para los arrays
    copia.push(copiar);                           //pusea y me sube el indice de lista 
  }
  return copia;                                 //envia la copia de la lista
}

const listacopia = copiarLista(lista);         //hacer la variable de copiarLista de (lista), para llamar a la función y que ejecute esa copia


console.log(lista);                           //nos imprime la lista normal y la copia
console.log(listacopia);                      //nos imprime la copia de la lista


/************************************* */


// OTRA FORMA DE HACERLO CON SLICE

function copiarlista(lista){                                 // creamos una funcion para la lista 
  return lista.slice();                                     //slice copia un fragmento y lo devuelve
}

//uso de la funcion

const listaOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9];        //hacemos la constante con la lista
const copiaLista = copiaLista(listaOriginal);             //hacer la variable de copiarLista de (lista), para llamar a la función y que ejecute esa copia

console.log("Lista Original:", listaOriginal);
console.log("Copia Lista:", copiaLista);

