/* BUSCAR ELEMENTOS DE ARRAYS  */

/* TENEMOS 3 FUNCIONES Index of Last in the Shop y Includes */
/*LAS POSICIONES DE UN ARRAY 0123, se se denominan índices o índex indicando las posiciones
índice quiere decir la posición en una lista*/


const a = [1, 2, 3, 4, 3];
//indice   0, 1, 2, 3, 4

a.indexOf(3); /*ponemos el elemento que queremos buscar*/
console.log (a); /*aqui nos dice que el elemento 3 se ha encontrado en la pocicion 2*/
/*solo nos diria la primera posicion porque busca el indice del primer elemento que encuentra*/

a.lastIndexOf(3); /*nos busca en el indice el ultimo indice, la ultima posicion de este elemento*/
console.log (a); /* nos sacrá el numero 4*/

/* ---------------------------------------------------------------------------------- */

/* QUE PASA SI BUSCAMOS UN ELEMENTO QUE NO EXISTE */
console.log(a.lastIndexOf(10)); /*aqui la posicion que nos da la consola es -1 porque empezamos los indices de 0 por eso me pasa un -1
el -1 generalmente se usa para un indice que no existe*/

/* ---------------------------------------------------------------------------------- */

console.log(a.includes(10)); /* aqui no nos devuelve la posicio, nos devuelve si el elemento esta en la lista. En este caso es FALSE*/ 
console.log(a.includes(3)); /*Aqui es TRUE porque el elemento está en la lista */ 

const b = [1, 2, 3, 4, 5];
b.fill(10, 0, 10); /*lo que hace es llenar el array con un valor determinado desde una posicion hasta un numero indice de elementos*/
/*quiere decir que mete el numero 10 en el array desde el 0 hasta el 10*/

console.log (b); /*aqui en consola nos hará una lista con 5 veces 10, ya que la lista es menor de 10 como le hemos indicado nos lo hará hasta los elementos que tengamos */

b.fill(10, 1, 3); /*aqui modificaria desde la posicion 1 hasta el final 1, 10, 10, 4, 5 */

 /*ESTO LO QUE HACE ES SUSTITUIR ESTOS INDICES QUE LE HEMOS INDICADO EN .FILL POR LOS VALORES DEL ARRAY
 ES UN METODO MUTADOR MODIFICA EL ARRAY ORIGINAL
 */


 /* ---------------------------------------------------------------------------------- */

/*  SI QUEREMOS HACER UNA COPIA DE NUESTRO ARRAY SIN MODIFICARLO CON LAS FUNCIONES MUTADORAS (reverse, sort, splice) TODAS ESTAS MODIFICAN EL ARRAY ORIGINAL */

const c = [1, 2, 3, 4, 3];

const d = c.slice(); /* si no metemos numeros nos copia todo el array*/
d.reverse();

console.log({c, d});

/*con esto tenemos una copia de nuestro array invertido, de esta manera ya podemos modificar o bien la copia o nuestro array original*/