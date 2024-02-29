/**
 * Crear una función, partiendo del ejercicio 2, que calcule el promedio dentro de un arreglo pero dentro de un rango,
 * esta función recibe el arreglo, un punto de partida y uno de termino
 * y devuelve el promedio de los valores dentro del rango especificado.
 */

function mediaRango(lista, indice1, indice2) {
  let lista2 = lista.slice(indice1, indice2);
  let total = 0;

  if (lista2.length === 0) {
    console.log(`La media es ${total1}`);
  } else {
    for (num of lista2) {
      total += num;
    }
    let media = total / lista2.length;
    return media;
  }
}

let list = [1, 2, 3, 4, 5];
console.log(`la media es igual a ${mediaRango(lista, 1, 4)}`);


/*****************************OTRA FORMA DE HACERLO JAIME*************************************************** */


const listas = [1, 2, 3, 4, 5, 6, 7, 8, 9];                        //creamos una constante con la lista

console.log(calAverage(list,1,6));

function calAverage(array, start =0, stop = list.length){         //aqui le decimos que empiece en start y termine en stop
  let number= 0;
  let average = 0;
  for(i = start; i < stop; i++){
    number += array[i];
  }
  average= number / (stop - start);
  return average;

}


/*****************************OTRA FORMA DE HACERLO PROFESOR*************************************************** */


function mean(list) {     
  if (list.length === 0) {
    return 0;
  }
  let sum = 0;

  for(let element of list){
    sum += element;
  }
  return sum / list.length;
}

function meanSpecific(list, start, end) {
  return mean(list.slice(start, end));            //esto nos da un array copia desde la posicion determinada hasta una posicion final
}

const list1 = [1, 2, 3, 4, 5];
console.log(meanSpecific(list, 1, 6));