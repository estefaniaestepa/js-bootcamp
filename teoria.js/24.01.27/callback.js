// un callback es una funcion que recibe funciones por parametros y normalmente recibe funciones por parametros parcial
//escuchar ese evento ( la primera parte), que hago cuando se produce ese vento (la segunda parte)

function a (callback){           //la función lo que nos indica cual de los dos elementos va a la izquierda 
/*   callback(1, 2); */         //esta duncion de callback hace la comparación con los dos números 
}                              // le va a comparar los dos números que internamente esta comparando

const b = [11, 1, 2, 20, 3];

b.short();  // [1, 11, 2, 20, 3]  Una vez hace la comparación modifica el array original 
// 1. Comparar elemento a elemento
// 2.Aplicar a esos dos elementos una función de comparación (callback)
// 3.Aplicar este criterio al array original


// una parte de esa función la permite al ususario cambiar esa funcion y eso se hace con otra función
function callback(a, b) {   //aqui nos determina cual es la esctructura de este callback (recibe dos numeros a y b y devuelve un numero)
 if(a < b){
  return -1;                // se espera que devuelva un número negativo si el primer elemento es menor que el segundo
 }
 if( a === b){             
  return 0;
}
if( a > b){             
  return 1;
}
}                         //esta funcion de comparacion lo que hace es un orden natural de los números 

b.sort(callback);
