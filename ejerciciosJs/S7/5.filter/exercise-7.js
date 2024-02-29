/*Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
 introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
  introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'. 
  
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
</body>
</html>*/


const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
 {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];





 document.querySelector('input').addEventListener('input', (event) => {                     //.querySelector selecciona el primer imput encontrado en nuestro HTML y le agregamos un evento que se dispara cada vez que el ususario ingresa algo en el campo .addEventListener('input', (event)               
  const searched = event.target.value;                                                     // Obtiene el valor actual del campo de entrada (<input>) cuando se dispara el evento de entrada y lo almacena en la variable searched
 //event (el evento lo dispara el imput) / del evento sacamos .target (es el elemento) .value (esto es el valor)

  console.log(streamers.filter((streamer) => streamer.name.includes(searched)));         // Filtra el array streamers y muestra en la consola los elementos cuyo nombre incluye la cadena ingresada por el usuario (searched)

});


//inciamos en el input las letras que queremos y nos muestra los streames que contienen esa letra si no existe nos da undefined