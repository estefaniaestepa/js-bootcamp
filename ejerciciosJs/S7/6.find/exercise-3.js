//Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, añade la propiedad .mutation al alien con el valor de la mutación encontrada.
//FIND

//Un predicado es una función que devuelve un booleano , APLICA ESTA FUNCIÓN A CADA UNO DE LOS ELEMENTOS DEL ARRAY
//Sirve para buscar en un listado. VA EN ORDEN ASCENDENTE AL INDICE DEL 0 AL ...
//devuelve el primer elemento del array donde el predicado es TRUE
//te devuelve el objeto

const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},
{name: 'Paktu', planet: 'Andromeda', age: 32},
{name: 'Cucushumushu', planet: 'Marte', age: 503021}];

const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];




const alien = aliens.find((alien) => alien.name === 'Cucushumushu');                          //buscamos en cada alien si alien.nombre es igual al nombre buscado.
const mutation = mutations.find((mutation) => mutation.name === 'Porompompero');             //buscamos en cada mutation si nutation.nombre es igual al nombre buscado.

alien.mutation = mutation;                                                                  // Asigna el objeto encontrado en mutations a la propiedad mutation del objeto encontrado en aliens. Asigamos el valor que hemos encontrado de mutation
console.log(alien);                                                                        // Imprime el objeto alien en la consola
