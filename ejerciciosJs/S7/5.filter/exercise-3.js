//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.

//FILTER

//Recibe un predicado es una función que devuelve un booleano (true/false)
//Sirve para filtar el listado en base a una condición

const streamers = [{ name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },                                   //constante de un array de objetos
{ name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
{ name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
{ name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }];


const streamersGame = streamers.filter(gamer => gamer.gameMorePlayed === 'League of Legends');            //creamos una constante que filtre por la constante del array y filtramos por el valor del array  que sea igual a 'League of Legends' 


console.log(streamersGame);                                                                              //mostramos por consola los jugadores de 'League of Legends'