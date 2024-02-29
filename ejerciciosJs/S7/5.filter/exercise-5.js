//Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. 
//Recomendamos usar la funcion .includes() para la comprobación.
//FILTER

//Recibe un predicado es una función que devuelve un booleano (true/false)
//Sirve para filtar el listado en base a una condición

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},                   //constante de un array de objetos
 {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const streamersU = streamers.filter(gamer => gamer.name.includes('u'));                    //creamos una constante que filtre por la constante del array y filtramos por el valor del array  que constenga u en su propiedad name, para eso usamos la funcion .includes

  
  console.log(streamersU);                                                               //mostramos los jugadores que tienen la u