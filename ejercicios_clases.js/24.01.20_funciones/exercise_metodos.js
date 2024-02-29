const array = [1, 2, 3, 4];

console.log (arr);

const numeroBuscado = 2;
 //esta funcion busca si existe...
 
for(let valor of arr){ //queremos saber si el array tiene un numero
  if (valor === numeroBuscado){ //me muestra el primer elemento y si existe para, si no vuelve a iterar el bucle hasta que exista
    console.log('Existe');
    break;
  }
}

console.log (arr.includes(numeroBuscado)); //con la condicion includes lo que hace es buscar el elemento al array y si existe para 

/******************************************************************** */

//OTRA FORMA DE HACERLO

const array1 = [1, 2, 3, 4];
const numeroBuscado1 = 5;

console.log(arr, numeroBuscado1);

function includes (array1, elementoABuscar){ //includes te dice si existe al menos un elemento en la lista
  for (let valor of array1){ //ejecuta 1=5(false), 2=5(false), asi hasta que sea igual. Para en el primer elemento que exista
    if(valor === elementoABuscar){
      return true
    }
  }
  return false;
}

console.log (includes(arr, numeroBuscado1));
console.log (arr.includes(numeroBuscado));