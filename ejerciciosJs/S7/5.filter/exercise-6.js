/*Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion .includes() para la comprobación.

Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.*/
//FILTER

//Recibe un predicado es una función que devuelve un booleano (true/false)
//Sirve para filtar el listado en base a una condición

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},                                //constante de un array de objetos                           
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];


const streamersLegend = streamers.filter(gamer =>  gamer.gameMorePlayed.includes('Legends'));              //creamos una constante que filtre por la constante del array y filtramos por el valor del array  que constenga legends en su propiedad gameMorePlayed, para eso usamos la funcion .includes                            


console.log(streamersU);




/*******************SOLUCION PROFESOR****************************************** */


const filter = 'Legends';                                                           //creamos una constante

const streamersFiltered = streamers.filter((streamer) => {                         //iteramos y filtramos por todos los setreamers
  const filtered = streamer.gameMorePlayed.includes(filter);                      //sacamos el buleano filter, le hacemos el include para devolverlo en una variable y le hacemos el return

  if (streamer.age > 35) {                                                       //si el streamer tiene mas de 35 años
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();           //le cambiamos su propiedad a la misma propiedad .toUpperCase() CAMBIA A MAYUSCULAS
  }

  return filtered;                                                               //para devolver el buleano de la constante que hemos creado, para que devuelva un booleano que cumpla con la condicion
});

console.log(streamersFiltered);