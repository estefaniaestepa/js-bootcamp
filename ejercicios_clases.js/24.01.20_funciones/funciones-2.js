/**
 * Crear una función que devuelva el promedio o media de un listado de números.
 * Si el listado está vacío, devolver 0.
 */

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9];                     //creamos una constante con la lista


function calcularMedia(lista) {                               //hacemos la funcion lista 
  if (lista.length === 0) {                                   // si la longitud de la lista es igual es igual a 0 no debueve nada
    return 0;
  }

  let suma = 0;                                             
  let promedio = 0;

  for (copiaLista of lista) suma += copiaLista;           //creaamos un bucle para que vaya sumando 1 cada vez que recorra la lista
  promedio = suma / lista.length                         // promedio sería la suma que nos ha hecho el bucle divido entre la longitud de la lista

  return promedio;                                      // nos retorna el promedio

}

const media = calcularMedia(lista);                   //hacer la variable de copiarLista de (lista), para llamar a la función y que ejecute esa copia

console.log(media);
console.log(suma);
console.log(promedio);



/******************************OTRA FORMA DE HACERLO: ALE************************************************************* */

const listas = [1, 2, 3, 4, 5, 6, 7, 8, 9];                     //creamos una constante con la lista
const lista2 = [];                                             //creamos una constante con la lista vacía para que en ella esté la copia del array original

function sumaLista(a){                                        // esta funcion nos hace la suma, a es un array es el parametro de la funcion
  resultadoSuma = 0;                                         // le ponemos la posicion de inicio, que arranque que sea 0

  for(let i = 0; i < a.length; i++){
    resultadoSuma += a[i];                                  // aqui el array va de 0 y cada vez le va sumando 1
  }
  return resultadoSuma;                                    // le pedimos a la funcion que nos devuelva el resulttado se la suma
}

function calculaPromedioLista(a){                        // esta funcion devuelve el promedio, un array con el parametro a
  if(a.length === 0){                                   // si la longud de la lista es exactamente igual a 0, o sea si no tiene elementos este resultado es 0
  return 0;                                            // si no tiene elementos que sumar el resultado es 0
 }

  let suma = sumaLista(a);                           // cramos una variable que es igual a la funcion a la suma , aqui llamamos a la funcion de la suma de lista
  let promedio =suma / a.length;                    // para calcular el promedio seria el total de suma partido a la longitud del array
  
  return promedio;                                 //queremos que la funcion lo que devuelva es el promedio
}

console.group("Resultados de la Lista 1=" , lista2);
console.log("El resultado de la suma de los elementos es", sumaLista(lista2));
console.log("El numero de elementos en la lista es", lista2.length);
console.log("El promedio de los elementos de la lista es", calculaPromedioLista(lista2));
console.groupEnd();

console.group("Resultados de la Lista 2=" , listas);
console.log("El resultado de la suma de los elementos es", sumaLista(listas));
console.log("El numero de elementos en la lista es", listas.length);
console.log("El promedio de los elementos de la lista es", calculaPromedioLista(listas));
console.groupEnd();



/****************************PROFESOR**************************************************************************** */


const listaIvan = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

function mean(list) {                          //
  if (list.length === 0) {                    // si la longud de la lista es exactamente igual a 0, o sea si no tiene elementos este resultado es 0
    return 0;                                // si no tiene elementos que sumar el resultado es 0
  }
  let sum = 0;                              //inicializa la suma , despues de comprobar si la suma de elementos es 0

  for(let element of list){                //itera el bucle del array
    sum += element;                       // le va sumando a la variable suma cada uno de los elementos que encuentra en el array 
  }
  return sum / list.length;             // para calcular el promedio seria el total de suma partido a la longitud del array
}

const listaPrueba = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 200]; 

console.log(mean(listaIvan));
console.log(mean(listaPrueba));