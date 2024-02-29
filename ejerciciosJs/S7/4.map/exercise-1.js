//Dado el siguiente array, devuelve un array con sus nombres utilizando .map().


const users = [{id: 1, name: 'Abel'},                                  //tenemos un array de objetos
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'}, 
{id:4, name: 'Amanda'}];

const usuariosMap = usuariosMap.map(users => users.name);            //.map recibe una funcion, esa funcion recibe como parametro un elemento del array y va a devolver un array con el resultado de users.name (todos los name)

console.log(usuariosMap);                                           //mostramos por consola
