/* Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api cuando se haga click en el botón,
 pasando como parametro de la api, el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>
``` */

const baseUrl = "https://api.nationalize.io?name=";                  //Contiene la URL base de la API de Nationalize.io.
const boton = document.querySelector("button");                     //Selecciona el elemento de botón en el documento HTML.
const input = document.querySelector("input");                     //Selecciona el elemento de entrada de texto en el documento HTML.

boton.addEventListener("click", () => {                           //evento click del botón que se activa cuando se hace clic en él - Cuando se hace clic en el botón, se ejecuta una función de flecha (arrow function).
  const name = input.value.trim();                               //Se obtiene el valor del campo de entrada de texto (input.value) y se le aplica .trim() para eliminar los espacios en blanco al principio y al final.
  const url = baseUrl + name;                                   //Esto asegura que la solicitud se haga a la URL correcta con el nombre proporcionado por el usuario.
    if (!name) {                                               //Se comprueba si el campo de entrada está vacío (es decir, si name es una cadena vacía).                                                                              
    console.log('Por favor, introduce un nombre.');           //se muestra un mensaje en la consola                       
    return;
  }

  fetch(url)                                              //Se utiliza fetch() para hacer una solicitud GET a la URL construida.
    .then((response) => response.json())                 //Cuando se recibe una respuesta, se llama al método .json() para convertir la respuesta a formato JSON
    .then((data) => {                                   //Después de convertir la respuesta a JSON, se utiliza otro método .then() para manejar los datos obtenidos de la API. En este caso, simplemente imprime los datos en la consola
      console.log(data);
    })
    .catch((error) => {                               //Si ocurre algún error durante la solicitud, se captura y se muestra en la consola utilizando .catch(). Esto proporciona una forma de manejar errores de red u otros problemas que puedan surgir durante la solicitud
      console.error("Ha ocurrido un error:", error);
    });
});


/******************SOLUCIÓN HELENA************************ */

const baseUrl1 = 'https://api.nationalize.io/?name=';


const whatToSearch = () => {    // we create a function that vinculates html elements with js
    const button$$ = document.querySelector("button"); // we vinculate the button
    const input$$ = document.querySelector("input"); // so we do with input

    button$$.addEventListener("click", () => { // we then set an eventlistener to button that responses to the click event
        getFromApi(input$$.value); // and what we want to get from the click event is the activation of the other function and what we want that funcion to have as parameters is the value introduced in input. !! IMPORTANT THE .VALUE GIRL !!
    });
};

const getFromApi = async (name) => {  // We do need to set the function with the fetch action starting by creating an async function cause it needs time to process 
    const apiPetiton = await fetch (${baseUrl}${name}); // we then create a variable that keeps the answer from the api petition BUT we also add here the parameter of the function, as we do need to search INSIDE the api what introduced in the input was. 
    const jsonApi = await apiPetiton.json(); // we then need to transform the api result to json
    console.log(jsonApi); // we do want the json data to appear on console
};

whatToSearch(); // we need to invoke the function