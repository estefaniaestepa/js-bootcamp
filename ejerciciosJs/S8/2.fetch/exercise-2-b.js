/* En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ. */

const baseUrl = "https://api.nationalize.io?name="; //Se define la constante baseUrl, que contiene la URL base de la API de Nationalize.io.
const boton = document.querySelector("button"); //Selecciona el elemento de botón en el documento HTML.
const input = document.querySelector("input"); //Se seleccionan los elementos del DOM correspondientes al botón y al campo de entrada de texto utilizando document.querySelector()
const div = document.querySelector("div"); //Se define la constante div, que selecciona el elemento div del DOM

boton.addEventListener("click", () => {
  //evento click del botón que se activa cuando se hace clic en él - Cuando se hace clic en el botón, se ejecuta una función de flecha (arrow function).
  const name = input.value.trim(); //Obtiene el valor del campo de entrada de texto (input) y lo almacena en la variable name, eliminando los espacios en blanco al principio y al final con .trim().
  const url = baseUrl + name; //Construye la URL de la solicitud concatenando baseUrl con el nombre introducido por el usuario
  if (!name) {
    //Verifica si el campo de entrada está vacío. Si lo está, muestra un mensaje en la consola y termina la ejecución de la función.
    console.log("Por favor, introduce un nombre."); //se muestra un mensaje en la consola
    return;
  }

  fetch(url) //Realiza una solicitud GET a la URL construida utilizando fetch().
    .then((response) => response.json()) //Cuando recibe una respuesta, convierte la respuesta a formato JSON utilizando .json().
    .then((data) => {
      //Después de convertir la respuesta a JSON, accede a la información de los países dentro de los datos devueltos
      const { country } = data; //La expresión const { country } = data; es un ejemplo de destructuración en JavaScript. En este caso, data es un objeto que contiene una propiedad llamada country. Lo que hace la destructuración es extraer esa propiedad del objeto data y asignarla a una variable llamada country
      for (const contador in country) {
        //Itera sobre cada país utilizando un bucle for...in para obtener el índice del país y su información asociada
        console.log(contador); 
        console.log(country[contador]);
        const objeto = { //Dentro del bucle for...in, crea un objeto que contiene el nombre introducido por el usuario, el nombre del país y la probabilidad de que el nombre introducido sea de ese país.
          name: name, //La línea name: name dentro del bucle for...in del evento de clic del botón, dentro del método .then() de la promesa fetch, está creando una propiedad llamada name en un objeto y asignándole el valor de la variable name.
          ciudad: country[contador].country_id, //country es un array con 5 objetos dentro
          probabilidad: country[contador].probability * 100,
        };
        array.push(objeto); //Agrega el objeto creado al array array.
      }

      print(array); //Llama a la función print() pasando el array como argumento para imprimir los resultados en el DOM.
    })
    .catch((error) => {
      //Si ocurre algún error durante la solicitud, se captura y se muestra en la consola utilizando .catch(). Esto proporciona una forma de manejar errores de red u otros problemas que puedan surgir durante la solicitud
      console.error("Ha ocurrido un error:", error);
    });
});

let array = [];
console.log(array);

function print(valorIntroducido) {
  //La función print() recibe un parámetro valorIntroducido, que es el array de objetos que contiene la información de los países.

  for (const objArray of valorIntroducido) {
    //Itera sobre cada objeto del array utilizando un bucle
    const p = document.createElement("p"); //Dentro del bucle, crea un nuevo elemento <p> para cada objeto.
    p.textContent = `El nombre ${objArray.name} tiene un ${objArray.probabilidad}% de ser de ${objArray.ciudad}.`; //Asigna el contenido de texto del elemento <p> utilizando la información del objeto.
    div.appendChild(p); //Añade el elemento <p> al elemento <div> seleccionado previamente en el DOM.
  }
}
