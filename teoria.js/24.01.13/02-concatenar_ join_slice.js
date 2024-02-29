/* CONCATENAR ARRAYS */

const a = [1, 2, 3, 4];
const b = [5, 6, 7, 8];
const c = [9, 10, 11, 11];
const d = a.concat(b, c);

console.log ({a, b, c, d});
/*con esto a c le pega los elementos al nuevo array con los elementos de a y b y estos dos no pierden su valor*/

/* ---------------------------------------------------------------------------------- */

/* JOIN 
coge cada uno de los elementos de la lista y genera un string con tods los elementos, puede recibir un parametro con un seprador
si no le indicamos nada automaticamente te separa por comas pero sin separador y tambien pondemos separar como queramos por ejemplo con | */

const e = [1, 2, 3, 4];

console.log (e.join()); /*aqui por defecto solo usa comas*/
console.log (e.join(' , ')); /*aqui pone un espacio despues de las comas*/
console.log (e.join(' | ')); /*aqui separa por palitos*/

/*esto sirve para representar la lista a los usuarios
a veces se usa tambien para dibujar tablas
ESTO ES UN ARRAY DE UNA SOLA DIMENSION
*/


/* ---------------------------------------------------------------------------------- */

/* SLICE 
retorna una copia , hace una copia de un fragmento
y el splice (extrae un fragmento)
*/
const f = [1, 2, 3, 4];
const g = f.slice(1, 2);

console.log({f, g}); /*en este caso la consola nos saca 2 porque el slice tiene dos parametros el start y end
es decir la posicion no esta incluida por lo que interpretaria el 2 por un 1
NO MODIFICA EL LISTADO ANTERIOR
*/

const h = f.slice(0); /*con esto nos hace una copia de nuestro array desde la posicion inicial , si no le indicamos el final nos copia todo nuestro array de nuestro array 
const h = f.slice(1); aqui nos lo copia desde la posicion 1
*/


/* VEAMOS OTRO EJEMPLO

const f = [1, 2, 3, 4];
const g = f.slice(0);

  g.push(10);

  console.log({f, g}); 
  
  aqui en el console log en f lo deja igual pero en el g hace la copia de f añadiendo el 10
  */