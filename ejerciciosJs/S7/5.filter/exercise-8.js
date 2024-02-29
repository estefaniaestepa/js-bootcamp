/* Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.

````js
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
```` 

````html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
  <button data-function="toShowFilterStreamers">Filter</button>
</body>
</html>
```` */

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];



                                //este es el evento del botón
document.querySelector('button').addEventListener('click', () => {                                    //Selecciona el primer elemento <button> encontrado en el documento. de nuestro HTML. Agrega un evento de clic, que se activa cuando el usuario hace clic en el botón. La función de flecha proporcionada como segundo argumento se ejecutará cuando ocurra el evento.
  const textSearched = document.querySelector('input').value;                                        // Obtiene el valor actual del campo de entrada (<input>) cuando se hace clic en el botón y lo almacena en la variable textSearched.
                                                                                                    //cuando hace click buscamos el imput y le preguntamos cual es su valor y nos da el texto que estamos buscando

  console.log(streamers.filter((streamer) => streamer.name.includes(textSearched)));               // Filtra el array streamers y muestra en la consola los elementos cuyo nombre incluye la cadena ingresada por el usuario (textSearched).
                                                                                                  //con la función filter, filtra los nombres del streamer para saber si contiene las letras que estamos indicando en el input
});



//inciamos en el input las letras que queremos y nos muestra los streames que contienen esa letra si no ponemos nada los saca todos , esto se muestra al hacer el click