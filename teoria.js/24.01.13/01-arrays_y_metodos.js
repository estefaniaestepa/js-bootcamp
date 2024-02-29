/* LOS LISTADOS 
ES UN CONJUNTO DE ELEMENTOS DE LA PARTE DE TIPO DE DATOS COMPLEJOS, NO TIENEN PORQUE SER HOMEGENEOS NI EL MISMO TIPO DE DATO  */

const a =[1, 2, 3]; /*los arrays se pueden manipular su contenido sin cambiar la variable aunque sea constante, esto que sea constante implica que esto va a ser un array que apunte a una dirección de menoria, pero su contenido puede variar*/
/*posicion 0, 1, 2*/

a.push(2); /* con esto añadimos el contenido al array pero no variamos la array */


/*como se accede a cada uno de estos elementos?*/

a [1]; /*ponemos el nombre de la variable abrimos [] y indicamos un numero, este numero corresponde a la posisicion del objeto en la lista LAS LISTAS SIEMPRE EMPIEZAN POR 0*/
a.at(); /* con la funcion .at(); accedemos al elemento en una posisicion determinada. Con la notación de corchetes no podmeos acceder a numeros negativos pero con el .at podemos acceder y si ponemos a.at(-1); nos accederia de atras hacia delante en este caso el 3*/
a.length;/*para saber la longitud del array hay una propiedad que se llama .length , nos indica el numero de elemtos que tiene este array en este caso nos da 3 y sabemos que la lisa empieza desde el 0, 1 y 2 */
/*si accedemos a un elemento que no exista nos aparecerá undefined*/
/*Las propiedades indican caracteristicas del array*/

/* ---------------------------------------------------------------------------------- */
/*METODOS
Las funciones/ metodos indican opciones que podemos realizar sobre el array
*/

/*METODOS MANIPULADORES
Los metodos manipuladores modifican en contenido del array
*/
a.push(4, 5); /*añade este numero a la lista de nuestro array, se pueden añadir varios. Lo mete al final de la lista */
const b = a.pop(); /*extrae el ultimo numero de la lista, crearemos una variable nueva sera lo mas eficiente cuando queremos tener el numero que hemos extraido y hacer algo con el 
por ejemplo lo multiplicaremos por 2 y lo volveremos a meter
console.log (b*2);
a.push(b);*/
/* ---------------------------------------------------------------------------------- */


/*Ejemplo de tener un historial de los elementos borrados*/
const c = [1, 2, 3, 4, 5, 6];
const d= [];

d.push(c.pop());
console.log({c, d}); /*aqui hemos sacado el 6 del c y lo hemos puesto en d*/

d.push(c[2]); /*aqui hemos sacado la segunda posicion del array que es el 3 y la hemos añadido en d, pero no hemos modificado nuestro array porque sigue estando. Solo la copia, esta operacion es de consulta mo modificamos el dato */

console.log (c.reverse()); /* esta funcion invierte el orden de nuestro array del final al pincipio pero es manipuladora invierte nuestro array */

c.shift(); /*elimina el primer elemento*/
console.log( {elemento: a.shift(), a}); /* en este caso nos devuelte 1, quiere decir que nos lo ha eliminado de nuestro array */

c.unshift(-1, 0); /*mete un elemento a nuestro array , pero lo mete en el inicio de nuestro array*/

c.sort(); /* Esto manipula la lista. >Si no queremos manipular haremos una copia del array y ordenarla
JS no sabe que esta lista va ordana de menor a mayor simplemente compara por posicion
Ejemplo:
const c= [-1, 1, 2, 10, 7]; esto con .sort (); lo ordena así -1, 1, 10 , 2, 7 (compara la primera posicion y lo ordena no sabe que tiene que ordenar de forma numerica para ello tendriamos que hacer una funcion
c.sort (function (c, d){
if (c > d){
  return 1;
}else if( c < d){
  return -1;
}else{
  return 0;
}
});
  
  QUE QUIERE DECIR ESTO:
.sort (); es una funcion , es un elemento que recibe dos parametros un número y otro y devuelve un número positivo o negativo o un cero.
  PARA LOS STRINGS SI QUE FUNCIONA YA QUE ORDENA DE FORMA ALFABETICAMENTE POSICIONALMENTE*/


c.splice(1, 2);/*   El .splice tiene 4 usos principales esto tambien manipula los elementos del array (eliminar un fragmento, extraer el fragmento y rellenar datos en una posicion determinada) */
/* vamos a eliminar un fragmento, el splice tiene una posicion inicial en la que le decimos desde donde tiene que eliminar elementos y un numero de elementos que tiene que eliminar (es decir de la posicion 1 quitamos 2 elementos)
const c = [1, 2, 3, 4, 5, 6];
c.splice(1, 2);
console.log(a);
Aqui nos ha quitado desde el 2 contandolo 2 elementos, nos hemos quedado en el array con los numeros 1, 4, 5
*/
const e = c.splice(1, 2, 'Hola');/* si queremos tener el fragmento que nos ha quitado la funcion .splice crearemos una variable nos esto nos la guardamos*/
/*añadir elementos despues de haberlos quitado, aqui le decimos desde la posicion 1 me quitas dos elementos y me metes un 'Hola' 
primero hace la funcion de quitar elementos y la tercera que es opcional es añadimos
ESTO LO QUEREMOS PARA SUSTITUIR ELEMENTOS EN UN LISTADO*/
/*añadir elementos en una posicion dada 
SERIA CON ESTE EJEMPLO
const e = c.splice(1, 0, 'Hola'); AQUI LE DECIMOS QUE NO QUEREMOS QUITAR ELEMENTOS CON EL 0 Y LA LISTA QUEDA ASÍ
'Hola'
*/
/* const e = c.splice(e.length, 'Hola', 0);  *//* en el .splice podemos sacar todos los elementos del array con el .length y también podriamos sacar dos elementos y meter dos nuevos  */ 

 c[2] = 10; /*Modificar posicionalmente elementos const c = [1, 2, 3, 4, 5, 6]; con esto le decimos que la posicion 2 que es el numero 3 ahora es un 10*/


/* ---------------------------------------------------------------------------------- */

/* al principio
.shift
.unshift
al final 
.push
.pop */

/* ---------------------------------------------------------------------------------- */

/* EJEMPLO: 1 */
const f =[1, 2, 3, 4, 5];
const g = f;
console.log({f, g});
f.pop();
console.log({f, g});
/* Aqui que nos da la consola que el array f ahora tiene los elementos 1,2,3,4 pero el g tiene 1,2,3,4,5 porque solo le hemos quitado el a
 pero si le hacemos el console.log de f y g nos lo quita de los dos en ambos no está el numero 5 porque le hemos dicho que g es igual f
 PORQUE G NO ES UNA COPIA DEL LISTADO , NO ESTAS GUARDANDO EL LISTADO COMPLETO, NO LO ESTAS CLONANDO SI NO QUE TIENE LA MISMA DIRECCION DE MEMORIA QUE F
 SOLO REFERENCIA AL MISMO SITIO*/


/* EJEMPLO: 2 */
/* Con const podemos modificar el contenido del array (podemos meter, quitar elementos) pero no podemos modificar hacia donde apunta ese listado. Si quisieramos que eso sea modificable pondriamos el let */
const r =[1, 2, 3, 4, 5];
let s = r; /*esto hace referencia la array del listado de numeros*/
r.push(2, 3, 10);
console.log({r, s}); /*ahora r y s tienen 1, 2, 3, 4, 5, 2, 3, 10*/
s= 'cosa';
console.log({r, s}); /* ahora r tiene 1, 2, 3, 4, 5, 2, 3, 10 y s 'cosa' porque const no se puede modificar*/
{
  const r = 'Hola';
  console.log({r, s}); /* en este contexto la constante r es 'Hola' y s 'Cosa', fuera de este contexto vale lo original*/
}
console.log({r, s});/* aqui al volver hacer el console.log fuera del contexto el array r vuelve a valer 1, 2, 3, 4, 5, 2, 3, 10 y el s 'cosa' porque ya le habiamos cambiado el valor*/

/* ---------------------------------------------------------------------------------- */

/*METODOS NO MANIPULADORES O OBSEVADORES
No manipulan el contenido del array
*/
