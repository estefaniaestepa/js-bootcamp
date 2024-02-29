/* Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador; */

async function getCharacters () {
  try{
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const characters = response.json();
    console.log(characters);
  }catch{
   console.log('Error', error);
}
}
getCharacters();

/* Se declara una función llamada getCharacters con la palabra clave async, lo que indica que esta función contendrá operaciones asincrónicas que serán manejadas usando await.

Dentro de la función getCharacters, se utiliza un bloque try-catch. Esto se hace para manejar cualquier error que pueda ocurrir durante la ejecución de las operaciones asincrónicas.

Dentro del bloque try, se realiza una solicitud a la API utilizando fetch. La URL especificada es la de la API de Rick and Morty que proporciona información sobre los personajes de la serie.

Se utiliza await para esperar la respuesta de la solicitud (fetch). Esto asegura que la ejecución del código se detenga hasta que se reciba la respuesta de la solicitud. La respuesta se guarda en la variable response.

Luego, se utiliza await nuevamente para convertir la respuesta a formato JSON utilizando el método json(). Esto devuelve otra promesa que resuelve con los datos de la respuesta en formato JSON. Estos datos se almacenan en la variable characters.

Después de recibir los datos en formato JSON, se imprime characters en la consola utilizando console.log() para ver la información recuperada de la API.

Si hay algún error durante la ejecución del bloque try, la ejecución del código se desviará al bloque catch. El error se captura en la variable error y se imprime en la consola utilizando console.error().

Finalmente, se llama a la función getCharacters() fuera de la definición de la función para iniciar la ejecución del código.

En resumen, este código realiza una solicitud a una API, espera la respuesta, la convierte a formato JSON y luego imprime los datos en la consola. Utiliza async-await para manejar operaciones asincrónicas de una manera más legible y concisa, y try-catch para manejar errores de manera efectiva. */
