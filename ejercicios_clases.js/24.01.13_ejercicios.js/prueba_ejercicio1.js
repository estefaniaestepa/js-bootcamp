const a = [70, 77, 10, 49, 70, 32, 7, 34, 15, 99, 30, 35, 61, 79, 98, 24, 23, 49, 99, 32];

// 1.calcula la suma de los elementos de la lista (PARA ESTO USAREMOS UN BUCLE Y UN CONTADOR)

/* let i = 0;
let total = 0;

while (i < a.length){  //esto es la condicion de parada, es decir vamos a recorrer toda la lita 
total += a[i]; //este total va a ser asignado al valor de a[i] 

i++;

}

console.log (total);  */

/* ---------------------------------------------------------------------------------- */
let total = 0;

for (let i = 0; i < a.length; i++) {
  total += a[i];
}
console.log(total); /*nos sacara la suma de todo*/

/* ---------------------------------------------------------------------------------- */

/*como hacerlo con el contador al reves en vez de sumar 1 restamos -1, aqui hace suma igual pero cambia la posicion

let total = 0;
for (let i = a.length -1; i>=0; i--){  // aqui le indicamos el recorrido
   total += a[i];  //aqui esta la condicion de suma 
}*/

/* ---------------------------------------------------------------------------------- */

/*para hacer la suma hasta que le indiquemos un numero y que pare 

for (let i= 0; i < a.length; i++){
if (a[i] ===30)
break;

  total += a[i]; 
}

/* ---------------------------------------------------------------------------------- */

/* veremos que pasa si en el array tenemos texto entre los números

const a = [70,77,10,49,70,32,7,'Hola',34,15,99,30,35,61,79,98,24,23,49,99,32];
te sumaria , hasta donde está el string y luego te indicaria el texto con los numeros, porque interpreta que es texto*/

/* ---------------------------------------------------------------------------------- */

// 2.indica cual es el maximo y minimo de la lista

let max = 0;
let min = 101; /*si no supieramos la longitud tendriamos que usar .infinito para buscar el numero menor que infinito . Ponemos el numero mas alto en min porque estamos buscando de ese numero los que son mas bajos de los elementos de esta lista*/

for (let i = 0; i < a.length; i++) {

  if (a[i] > max) {
    max - a[i];
  }
  if (a[i] < min) {
    nim = a[i];
  }
  console.log({ i, valor: a[i], max, min }); /*nos sacara el max: 99, min: 7*/
}


//3.cual es la media de los numeros de la lista
/* const a = [70, 77, 10, 49, 70, 32, 7, 34, 15, 99, 30, 35, 61, 79, 98, 24, 23, 49, 99, 32]; */
console.log(total / a.length);

//4.cual es la moda de los numeros de la lista. La moda es el numero que mas veces se repite

let resumen = []; /*iteramos todos los elementos de la lista y los almacenamos en aux, esto será un array de las veces que aparece el numero en la lista*/

for (let i = 0; i < a.length; i++) {
  const numero = a[i];
  let found = false;

  for (let j = 0; j < resumen.length; j++) { /*la j es el indice del auxiliar*/ 
     if (resumen[j][0] === numero) { /*si resumen 0 es igual al numero */
          resumen [j][1] += 1; /*resumen 1 es donde tenemos el numero de veces que aparece un elemento y le sumamos 1*/
          found = true; /*si el listado esta vacio o no ha a aprecido todavia tenemos que saber si lo hemos encontrado o no*/
    }
  }
  if (!found) {
   resumen.push([a[i], 1]); /* aqui le añadimos el nuevo array para los numeros que no hemos encontrado o no han aparecido , que contiene el numero y como ya ha salido una vez por eso le ponemos el 1(hacemos esto porque si no encontramos arriba nuestro numero en el auxiliar significa que no se ha repetido, que no se ha encontrado y por lo tanto lo meteremos en la lista)*/
  }
}

console.log (numero, found, resumen);
/* ---------------------------------------------------------------------------------- */
/* 2º PARTE DEL EJERCICIO */

let moda = 0;
let num = 0;

/* for (let i = 0; i < resumen.length, i++){ */
  const info = resumen[i];
  const numero = info[0];
  const veces = info [1];

  console.log({modaActual: {numero: moda, veces:num}, datosEnResumen:{numero, veces} }); //numero va a ser resumen i, que es la informacion de la lista principal, el numero va a ser info 0 y veces info 1
/* } */

/* ---------------------------------------------------------------------------------- */

// 5.saber cuales y cuantos elementos son mayores de 50
/* const a = [70, 77, 10, 49, 70, 32, 7, 34, 15, 99, 30, 35, 61, 79, 98, 24, 23, 49, 99, 32]; */

/* let array= [];

for (let i = 0; i < resumen.length, i++){ 
  if (a[i] > 50){  //aqui sabemos cuantos hay mayor de 50
  array.push(a[i] > 50)  // cuales son mayor de 50

  }
}

console.log('Hay ${array.length} elementos mayores de 50 y son ${array}'); */








