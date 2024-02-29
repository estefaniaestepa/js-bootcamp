//2. Genera una función que reciba un array de números y un número y devuelva las veces que aparece ese número

/* let multiNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayNumeros (multiNumbers, numero){

  let repeat = 0;

for(let i= 0; i < multiNumbers.lenght; i++){
  if (multiNumbers[i] === numero){
   repeat++
  }
}
  return repeat;
}

console.log(arrayNumeros(multiNumbers,5)); */

let array = [1, 2, 5, 8, 9, 15];

function parteDos(array, numeroBuscar) {

    let veces = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === numeroBuscar) {
            veces++
        }
    }
return veces;
}

console.log(parteDos(array,5));